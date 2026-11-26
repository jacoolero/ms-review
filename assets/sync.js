/* Accounts and cloud sync (Firebase Auth + Cloud Firestore).
   Study data lives in localStorage as before; when someone signs in it is merged with their
   account and every later change is uploaded. Firestore's offline cache queues writes made
   without a connection.

   Firestore layout
     users/{uid}                 { progress: [qid], srs: {cardId: {box, due}}, answerMode, updatedAt }
     users/{uid}/attempts/{qid}  { draft, attempts: [{ text, date, percent, covered, total, self }] }
*/
import config from "./firebase-config.js";

const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
const UID_KEY = "ms-sync-uid";      // which account the data in this browser belongs to
const DIRTY_KEY = "ms-sync-dirty";  // "1" while local changes have not reached the server

const $ = (id) => document.getElementById(id);
const App = window.MSApp;
const ls = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode */ } },
  del: (k) => { try { localStorage.removeItem(k); } catch { /* private mode */ } }
};

if (config && App) start().catch(err => console.warn("Account sync unavailable:", err));

async function start() {
  const [{ initializeApp }, A, F] = await Promise.all([
    import(SDK + "firebase-app.js"),
    import(SDK + "firebase-auth.js"),
    import(SDK + "firebase-firestore.js")
  ]);

  const fbApp = initializeApp(config);
  const auth = A.getAuth(fbApp);
  let db;
  try {
    db = F.initializeFirestore(fbApp, { localCache: F.persistentLocalCache({ tabManager: F.persistentMultipleTabManager() }) });
  } catch {
    db = F.getFirestore(fbApp);   // browsers without IndexedDB (some private modes)
  }

  const ui = accountUI();
  ui.enable();

  let user = null;
  let baseline = null;        // what the server holds, as JSON strings: { main, att: {qid: json} }
  let timer = null;
  let edits = 0;              // counts local changes, so a slow upload does not clear newer ones
  let pushing = null;

  /* ---------- data helpers ---------- */
  const userDoc = (uid) => F.doc(db, "users", uid);
  const attCol = (uid) => F.collection(db, "users", uid, "attempts");
  const hasContent = (rec) => rec && ((rec.draft && rec.draft.trim()) || (rec.attempts && rec.attempts.length));
  const mainOf = (d) => ({ progress: [...(d.progress || [])].sort(), srs: d.srs || {}, answerMode: d.answerMode !== false });

  function attemptsOf(d) {
    const out = {};
    Object.entries(d.attempts || {}).forEach(([id, rec]) => { if (hasContent(rec)) out[id] = rec; });
    return out;
  }

  function baselineOf(d) {
    const att = {};
    Object.entries(attemptsOf(d)).forEach(([id, rec]) => { att[id] = JSON.stringify(rec); });
    return { main: JSON.stringify(mainOf(d)), att };
  }

  async function load(uid) {
    const [snap, list] = await Promise.all([F.getDoc(userDoc(uid)), F.getDocs(attCol(uid))]);
    const main = snap.exists() ? snap.data() : {};
    const attempts = {};
    list.forEach(d => { attempts[d.id] = { draft: d.data().draft || "", attempts: d.data().attempts || [] }; });
    return {
      exists: snap.exists() || !list.empty,
      progress: main.progress || [],
      srs: main.srs || {},
      answerMode: main.answerMode,
      attempts
    };
  }

  // combine this browser's data with the account's, keeping the most progress from each
  function merge(local, remote) {
    const srs = { ...remote.srs };
    Object.entries(local.srs || {}).forEach(([id, a]) => {
      const b = srs[id];
      if (!b || a.box > b.box || (a.box === b.box && a.due > b.due)) srs[id] = a;
    });
    const attempts = {};
    new Set([...Object.keys(local.attempts || {}), ...Object.keys(remote.attempts)]).forEach(id => {
      const a = (local.attempts || {})[id] || { draft: "", attempts: [] };
      const b = remote.attempts[id] || { draft: "", attempts: [] };
      const seen = new Set();
      const list = [...b.attempts, ...a.attempts]
        .filter(x => { const k = x.date + "|" + x.text; if (seen.has(k)) return false; seen.add(k); return true; })
        .sort((x, y) => x.date - y.date)
        .slice(-10);
      attempts[id] = { draft: a.draft || b.draft || "", attempts: list };
    });
    return {
      progress: [...new Set([...(local.progress || []), ...remote.progress])],
      srs,
      attempts,
      answerMode: remote.exists && remote.answerMode !== undefined ? remote.answerMode : local.answerMode
    };
  }

  /* ---------- upload ---------- */
  async function push() {
    if (!user || !baseline) return;
    if (pushing) { await pushing; return push(); }
    const uid = user.uid;
    const editsAtStart = edits;
    const snap = JSON.parse(JSON.stringify(App.snapshot()));
    const next = baselineOf(snap);
    const ops = [];
    if (next.main !== baseline.main) ops.push(b => b.set(userDoc(uid), { ...mainOf(snap), updatedAt: F.serverTimestamp() }));
    Object.entries(next.att).forEach(([id, json]) => {
      if (baseline.att[id] !== json) ops.push(b => b.set(F.doc(attCol(uid), id), JSON.parse(json)));
    });
    Object.keys(baseline.att).forEach(id => {
      if (!(id in next.att)) ops.push(b => b.delete(F.doc(attCol(uid), id)));
    });
    if (!ops.length) { if (edits === editsAtStart) ls.del(DIRTY_KEY); ui.status("saved"); return; }

    ui.status(navigator.onLine ? "saving" : "offline");
    pushing = (async () => {
      for (let i = 0; i < ops.length; i += 400) {
        const batch = F.writeBatch(db);
        ops.slice(i, i + 400).forEach(op => op(batch));
        await batch.commit();
      }
    })();
    try {
      await pushing;
      if (user && user.uid === uid) {
        baseline = next;
        if (edits === editsAtStart) ls.del(DIRTY_KEY);
        ui.status("saved");
      }
    } catch (err) {
      console.warn("Sync failed:", err);
      ui.status("error");
    } finally {
      pushing = null;
    }
  }

  function schedule(delay = 2000) {
    clearTimeout(timer);
    timer = setTimeout(push, delay);
  }

  window.MSSync = {
    changed() {
      if (!ls.get(UID_KEY)) return;        // signed out: data stays in this browser only
      edits++;
      ls.set(DIRTY_KEY, "1");
      if (user) { ui.status(navigator.onLine ? "pending" : "offline"); schedule(); }
    }
  };
  const flush = () => { if (user && ls.get(DIRTY_KEY)) { clearTimeout(timer); push(); } };
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") flush(); });
  window.addEventListener("pagehide", flush);
  window.addEventListener("online", () => { if (user) { ui.status("saving"); flush(); } });
  window.addEventListener("offline", () => { if (user) ui.status("offline"); });

  /* ---------- sign-in state ---------- */
  A.onAuthStateChanged(auth, async (u) => {
    user = u;
    baseline = null;
    if (!u) {
      // signed out (here or on another tab): take the account's data off this device unless
      // it holds changes that never reached the server
      if (ls.get(UID_KEY)) {
        if (!ls.get(DIRTY_KEY)) App.replace({});
        ls.del(UID_KEY);
        ls.del(DIRTY_KEY);
      }
      ui.signedOut();
      return;
    }
    ui.signedIn(u);
    ui.status("loading");
    try {
      const remote = await load(u.uid);
      const local = JSON.parse(JSON.stringify(App.snapshot()));
      const owner = ls.get(UID_KEY);
      let data;
      if (owner === u.uid && !ls.get(DIRTY_KEY)) data = remote.exists ? remote : local;
      else if (owner && owner !== u.uid) data = remote;      // another account's leftovers
      else data = merge(local, remote);                      // first sign-in here, or unsaved changes
      baseline = baselineOf(remote);
      ls.set(UID_KEY, u.uid);
      App.replace(data);
      await push();
    } catch (err) {
      console.warn("Could not load account data:", err);
      ui.status("error");
    }
  });

  /* ---------- account dialog actions ---------- */
  ui.on("google", async () => {
    const provider = new A.GoogleAuthProvider();
    try {
      await A.signInWithPopup(auth, provider);
      ui.close();
    } catch (err) {
      if (err.code === "auth/popup-blocked" || err.code === "auth/operation-not-supported-in-this-environment") {
        return A.signInWithRedirect(auth, provider);
      }
      if (err.code !== "auth/popup-closed-by-user" && err.code !== "auth/cancelled-popup-request") ui.error(err);
    }
  });
  ui.on("signin", async ({ email, password }) => {
    try { await A.signInWithEmailAndPassword(auth, email, password); ui.close(); } catch (err) { ui.error(err); }
  });
  ui.on("signup", async ({ email, password }) => {
    try { await A.createUserWithEmailAndPassword(auth, email, password); ui.close(); } catch (err) { ui.error(err); }
  });
  ui.on("reset", async ({ email }) => {
    if (!email) return ui.message("Type your email address first, then press “Forgot password?” again.");
    try {
      await A.sendPasswordResetEmail(auth, email);
      ui.message(`A password reset link was sent to ${email}. Check your inbox and spam folder.`);
    } catch (err) { ui.error(err); }
  });
  ui.on("signout", async () => {
    if (!confirm("Sign out? Your progress stays saved in your account and is removed from this device.")) return;
    clearTimeout(timer);
    await push();
    await A.signOut(auth);
    ui.close();
  });
}

/* ---------- account button and dialog ---------- */
function accountUI() {
  const btn = $("accountBtn"), dlg = $("accountDialog"), form = $("authForm");
  const handlers = {};
  const STATUS = {
    loading: "Loading your progress…",
    pending: "Changes not saved yet…",
    saving: "Saving to your account…",
    saved: "All progress saved to your account",
    offline: "Offline. Changes will upload when you reconnect",
    error: "Could not reach your account. Changes are kept on this device"
  };
  const ERRORS = {
    "auth/invalid-email": "That email address doesn't look right.",
    "auth/missing-password": "Enter your password.",
    "auth/weak-password": "Use a password with at least 6 characters.",
    "auth/email-already-in-use": "An account with that email already exists. Press Sign in instead.",
    "auth/invalid-credential": "Wrong email or password.",
    "auth/wrong-password": "Wrong email or password.",
    "auth/user-not-found": "No account with that email. Press Create account.",
    "auth/too-many-requests": "Too many attempts. Wait a minute and try again.",
    "auth/network-request-failed": "No internet connection.",
    "auth/unauthorized-domain": "Sign-in isn't enabled for this web address yet.",
    "auth/account-exists-with-different-credential": "That email already uses another sign-in method."
  };
  const msg = $("authMessage");
  const show = (text, isError) => { msg.textContent = text; msg.hidden = !text; msg.classList.toggle("error", !!isError); };
  const fields = () => ({ email: $("authEmail").value.trim(), password: $("authPassword").value });
  const run = (name, data) => async () => {
    show("");
    dlg.classList.add("busy");
    try { await handlers[name](data ? data() : undefined); } finally { dlg.classList.remove("busy"); }
  };

  btn.addEventListener("click", () => { show(""); dlg.hidden = false; });
  $("closeAccount").addEventListener("click", () => { dlg.hidden = true; });
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.hidden = true; });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") dlg.hidden = true; });
  $("googleBtn").addEventListener("click", run("google"));
  form.addEventListener("submit", (e) => { e.preventDefault(); run(e.submitter && e.submitter.id === "signupBtn" ? "signup" : "signin", fields)(); });
  $("resetPwBtn").addEventListener("click", run("reset", fields));
  $("signOutBtn").addEventListener("click", run("signout"));

  return {
    on: (name, fn) => { handlers[name] = fn; },
    enable() { btn.hidden = false; },
    close() { dlg.hidden = true; },
    message: (text) => show(text, false),
    error: (err) => show(ERRORS[err.code] || "Something went wrong. Please try again.", true),
    signedIn(u) {
      const name = u.displayName || u.email || "Signed in";
      btn.classList.add("signed-in");
      btn.textContent = name.trim().charAt(0).toUpperCase();
      btn.title = `Account: ${name}`;
      $("accountName").textContent = u.displayName || "";
      $("accountEmail").textContent = u.email || "";
      $("authOut").hidden = true;
      $("authIn").hidden = false;
      const note = $("saveNote");
      if (note) note.textContent = "Progress is saved to your account.";
    },
    signedOut() {
      btn.classList.remove("signed-in");
      btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"></path></svg>';
      btn.title = "Sign in to save your progress";
      $("authOut").hidden = false;
      $("authIn").hidden = true;
      const note = $("saveNote");
      if (note) note.textContent = "Progress is saved in this browser. Sign in to keep it in your account.";
    },
    status(kind) {
      $("syncStatus").textContent = STATUS[kind] || "";
      $("syncStatus").dataset.kind = kind;
      btn.dataset.sync = kind;
    }
  };
}
