/* "My progress" page: streak and activity, subject overview, weak topics, recent answers,
   and the erase / delete controls. Reads everything from window.MSApp.snapshot(). */
(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const App = window.MSApp;
  const DAY = 86400000;
  const subjects = window.SUBJECTS;
  const subjectMap = new Map(subjects.map(s => [s.id, s]));
  const domainMap = new Map(window.DOMAINS.map(d => [d.id, d]));
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pctClass = (p) => (p >= 70 ? "good" : p >= 40 ? "fair" : "low");
  const avg = (xs) => (xs.length ? Math.round(xs.reduce((a, b) => a + b, 0) / xs.length) : null);
  const plural = (n, word) => `${n} ${word}${n === 1 ? "" : "s"}`;
  const dayKey = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);

  /* ---------- calculations ---------- */
  function bestScores(snap) {
    const best = new Map();
    Object.entries(snap.attempts).forEach(([id, rec]) => {
      if (rec && rec.attempts && rec.attempts.length) best.set(id, Math.max(...rec.attempts.map(a => a.percent)));
    });
    return best;
  }

  function streaks(activity) {
    const days = new Set(Object.keys(activity).filter(k => activity[k] > 0));
    const today = startOfDay(new Date());
    // today still counts as "not broken" until it ends
    let d = days.has(dayKey(today)) ? today : addDays(today, -1);
    let current = 0;
    while (days.has(dayKey(d))) { current++; d = addDays(d, -1); }
    let longest = 0, run = 0, prev = null;
    [...days].sort().forEach(k => {
      const [y, m, dd] = k.split("-").map(Number);
      const date = new Date(y, m - 1, dd);
      run = prev && Math.round((date - prev) / DAY) === 1 ? run + 1 : 1;
      longest = Math.max(longest, run);
      prev = date;
    });
    return { current, longest, total: days.size, today: activity[dayKey(today)] || 0, studiedToday: days.has(dayKey(today)) };
  }

  /* ---------- sections ---------- */
  function streakHTML(snap) {
    const st = streaks(snap.activity || {});
    const WEEKS = 17;
    const today = startOfDay(new Date());
    const start = addDays(today, -((WEEKS - 1) * 7 + today.getDay()));   // a Sunday
    const level = (n) => (!n ? 0 : n <= 2 ? 1 : n <= 5 ? 2 : n <= 10 ? 3 : 4);
    const cells = [];
    for (let d = start; d <= today; d = addDays(d, 1)) {
      const n = (snap.activity || {})[dayKey(d)] || 0;
      const label = `${d.toLocaleDateString(undefined, { month: "short", day: "numeric" })}: ${n ? `${n} ${n === 1 ? "activity" : "activities"}` : "no study"}`;
      cells.push(`<span class="hm-cell l${level(n)}" title="${esc(label)}" aria-label="${esc(label)}"></span>`);
    }
    const note = st.current
      ? (st.studiedToday ? "You've studied today. Keep it going tomorrow." : "Study today to keep your streak alive.")
      : "Answer an essay, review a question or rate a flashcard to start a streak.";
    return `<div class="pg-card pg-streak">
      <h3>Study streak</h3>
      <div class="pg-stats">
        <div class="pg-stat"><b>${st.current}</b><span>day streak</span></div>
        <div class="pg-stat"><b>${st.longest}</b><span>longest streak</span></div>
        <div class="pg-stat"><b>${st.total}</b><span>study days</span></div>
        <div class="pg-stat"><b>${st.today}</b><span>done today</span></div>
      </div>
      <p class="pg-note">${note}</p>
      <div class="heatmap-wrap">
        <div class="heatmap" role="img" aria-label="Study activity for the last ${WEEKS} weeks">${cells.join("")}</div>
        <div class="heatmap-foot"><span>${WEEKS} weeks ago</span>
          <span class="hm-legend">Less <i class="hm-cell l0"></i><i class="hm-cell l1"></i><i class="hm-cell l2"></i><i class="hm-cell l3"></i><i class="hm-cell l4"></i> More</span>
          <span>Today</span></div>
      </div>
    </div>`;
  }

  function subjectsHTML(snap, best) {
    const now = Date.now();
    const reviewed = new Set(snap.progress);
    return `<h3 class="pg-section-title">Subjects</h3><div class="pg-subjects">${subjects.map(s => {
      const qs = window.QBANK.filter(q => App.subjectOf(q) === s.id);
      const cards = window.CARDS.filter(c => App.subjectOf(c) === s.id);
      const done = qs.filter(q => reviewed.has(q.id)).length;
      const scores = qs.filter(q => best.has(q.id)).map(q => best.get(q.id));
      const a = avg(scores);
      const seen = cards.filter(c => snap.srs[c.id]);
      const learned = seen.filter(c => snap.srs[c.id].box >= 3).length;
      const due = seen.filter(c => snap.srs[c.id].due <= now).length;
      const pct = qs.length ? Math.round((done / qs.length) * 100) : 0;
      return `<div class="pg-card pg-subject" style="--tab:${s.color}">
        <div class="pg-subject-head"><span class="pg-mark">${esc(s.mark)}</span><h4>${esc(s.name)}</h4></div>
        <div class="pg-row"><span>Essays reviewed</span><b>${done} / ${qs.length}</b></div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%;background:var(--tab)"></div></div>
        <div class="pg-row"><span>Average best score</span>${a == null ? "<b class=\"pg-muted\">No attempts yet</b>" : `<b><span class="pct ${pctClass(a)}">${a}%</span> <small>over ${plural(scores.length, "essay")}</small></b>`}</div>
        <div class="pg-row"><span>Flashcards learned</span><b>${learned} / ${cards.length}</b></div>
        <div class="pg-row"><span>Due for review</span><b>${due}${seen.length < cards.length ? ` <small>· ${cards.length - seen.length} not started</small>` : ""}</b></div>
        <div class="pg-actions">
          <button class="btn btn-small" data-go="essays" data-subject="${s.id}">Essays</button>
          <button class="btn btn-small" data-go="cards" data-subject="${s.id}">Flashcards</button>
        </div>
      </div>`;
    }).join("")}</div>`;
  }

  function weakTopics(snap, best) {
    return window.DOMAINS.map(d => {
      const scores = window.QBANK.filter(q => q.domain === d.id && best.has(q.id)).map(q => best.get(q.id));
      const seen = window.CARDS.filter(c => c.domain === d.id && snap.srs[c.id]);
      const essay = avg(scores);
      const card = seen.length ? Math.round((seen.filter(c => snap.srs[c.id].box >= 3).length / seen.length) * 100) : null;
      if (essay == null && card == null) return null;
      const parts = [essay, card].filter(x => x != null);
      const mastery = avg(parts);
      const target = card == null || (essay != null && essay <= card) ? "essays" : "cards";
      return { d, essay, card, mastery, target, essays: scores.length, cards: seen.length };
    }).filter(Boolean).sort((a, b) => a.mastery - b.mastery).slice(0, 5);
  }

  function weakHTML(snap, best) {
    const list = weakTopics(snap, best);
    const body = list.length ? `<ul class="pg-list">${list.map(t => {
      const s = subjectMap.get(t.d.subject);
      const detail = [
        t.essay != null ? `Essays ${t.essay}% avg (${t.essays})` : null,
        t.card != null ? `Cards ${t.card}% known (${t.cards})` : null
      ].filter(Boolean).join(" · ");
      return `<li class="pg-item">
        <span class="dot" style="--dot:${t.d.color}"></span>
        <div class="pg-item-text"><strong>${esc(t.d.short)}</strong><span>${esc(s.short)} · ${detail}</span></div>
        <span class="pct ${pctClass(t.mastery)}">${t.mastery}%</span>
        <button class="btn btn-small" data-go="${t.target}" data-subject="${t.d.subject}" data-domain="${t.d.id}">Study this</button>
      </li>`;
    }).join("")}</ul>`
      : `<p class="pg-empty">Answer a few essays or flashcards and your weakest topics will show here.</p>`;
    return `<div class="pg-card"><h3>Weak topics</h3><p class="pg-note">Lowest mastery first: your average best essay score and the share of seen flashcards you know well.</p>${body}</div>`;
  }

  function recentHTML(snap) {
    const all = [];
    Object.entries(snap.attempts).forEach(([id, rec]) => (rec.attempts || []).forEach(a => all.push({ id, a })));
    const byId = new Map(window.QBANK.map(q => [q.id, q]));
    const list = all.filter(x => byId.has(x.id)).sort((x, y) => y.a.date - x.a.date).slice(0, 10);
    const body = list.length ? `<ul class="pg-list">${list.map(({ id, a }) => {
      const q = byId.get(id);
      const s = subjectMap.get(App.subjectOf(q));
      const text = q.q.length > 110 ? q.q.slice(0, 107).trimEnd() + "…" : q.q;
      return `<li><button class="pg-item pg-recent" data-qid="${esc(id)}">
        <div class="pg-item-text"><strong>${esc(text)}</strong><span>${esc(s.short)} · ${new Date(a.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}</span></div>
        <span class="pct ${pctClass(a.percent)}">${a.percent}%</span>
      </button></li>`;
    }).join("")}</ul>`
      : `<p class="pg-empty">Your essay answers will appear here after you press <b>Submit &amp; compare</b>.</p>`;
    return `<div class="pg-card"><h3>Recent answers</h3>${body}</div>`;
  }

  function render() {
    const snap = App.snapshot();
    const best = bestScores(snap);
    $("#progressBody").innerHTML =
      streakHTML(snap) +
      subjectsHTML(snap, best) +
      `<div class="pg-two">${weakHTML(snap, best)}${recentHTML(snap)}</div>`;
    const signedIn = !$("#acctIn").hidden;
    $("#eraseNote").textContent = signedIn
      ? "Removes your answers, scores, reviewed marks, flashcard schedule and streak from your account and this device. Your account stays."
      : "Removes your answers, scores, reviewed marks, flashcard schedule and streak from this browser.";
  }

  /* ---------- actions ---------- */
  $("#progressBody").addEventListener("click", (e) => {
    const go = e.target.closest("[data-go]");
    if (go) return App.go({ view: go.dataset.go, subject: go.dataset.subject, domain: go.dataset.domain || "all" });
    const recent = e.target.closest(".pg-recent");
    if (recent) App.openQuestion(recent.dataset.qid);
  });

  $("#eraseBtn").addEventListener("click", () => {
    const signedIn = !$("#acctIn").hidden;
    const msg = signedIn
      ? "Erase all your progress from your account and this device? This cannot be undone."
      : "Erase all progress saved in this browser? This cannot be undone.";
    if (!confirm(msg)) return;
    App.replace({});
    if (window.MSSync) window.MSSync.changed();
    render();
  });

  $("#deleteAccountBtn").addEventListener("click", async () => {
    if (!window.MSSync || !window.MSSync.deleteAccount) return;
    const typed = prompt("This permanently deletes your account and all saved progress.\n\nType DELETE to confirm.");
    if (typed == null) return;
    if (typed.trim() !== "DELETE") { alert("Nothing was deleted. Type DELETE in capitals to confirm."); return; }
    const btn = $("#deleteAccountBtn");
    btn.disabled = true;
    try {
      const done = await window.MSSync.deleteAccount();
      if (done) alert("Your account and saved progress were deleted.");
    } catch (err) {
      alert(err && err.message ? err.message : "Could not delete the account. Please try again.");
    } finally {
      btn.disabled = false;
    }
  });

  window.MSProgress = { render };
  // the page may be the first view (opened from a #progress link)
  if (!$("#progressView").hidden) render();
})();
