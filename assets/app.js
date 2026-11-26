(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const PROGRESS_KEY = "amm-progress-v1";
  const THEME_KEY = "amm-theme";
  const CARDS_KEY = "ms-cards-v1";
  const SUBJECT_KEY = "ms-subject";
  const ANSWER_KEY = "ms-answer-mode";
  const ATT_KEY = "ms-attempts-v1";
  const ACTIVITY_KEY = "ms-activity-v1";
  const SELF_GRADES = ["Weak", "Fair", "Good", "Excellent"];

  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode */ }
      if (window.MSSync && SYNC_KEYS.includes(key)) window.MSSync.changed();
    }
  };
  // keys that follow the signed-in account (theme and last subject stay per device)
  const SYNC_KEYS = [PROGRESS_KEY, ATT_KEY, CARDS_KEY, ANSWER_KEY, ACTIVITY_KEY];

  const subjects = window.SUBJECTS;
  const subjectMap = new Map(subjects.map(s => [s.id, s]));
  const domainMap = new Map(window.DOMAINS.map(d => [d.id, d]));

  const state = {
    view: "essays",          // "essays" | "cards"
    subject: subjectMap.has(store.get(SUBJECT_KEY, "micro")) ? store.get(SUBJECT_KEY, "micro") : "micro",
    domain: "all",
    query: "",
    session: null,
    progress: new Set(store.get(PROGRESS_KEY, [])),
    answerMode: store.get(ANSWER_KEY, true) !== false,
    printing: false
  };
  const attempts = store.get(ATT_KEY, {});   // { qid: { draft, attempts: [{ text, date, percent, covered, total, self }] } }
  const saveAttempts = () => store.set(ATT_KEY, attempts);

  /* ---------- daily activity (for the streak on the progress page) ---------- */
  const dayKey = (ts) => {
    const d = new Date(ts);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  const activity = store.get(ACTIVITY_KEY, {});   // { "YYYY-MM-DD": number of answers, ratings and reviews }
  function backfillActivity() {
    // older data has no activity log: rebuild study days from the dates of saved essay attempts
    if (Object.keys(activity).length) return false;
    Object.values(attempts).forEach(rec => (rec.attempts || []).forEach(a => {
      const k = dayKey(a.date);
      activity[k] = (activity[k] || 0) + 1;
    }));
    return Object.keys(activity).length > 0;
  }
  if (backfillActivity()) { try { localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activity)); } catch { /* private mode */ } }
  function logActivity() {
    const k = dayKey(Date.now());
    activity[k] = (activity[k] || 0) + 1;
    store.set(ACTIVITY_KEY, activity);
  }
  const attOf = (id) => (attempts[id] = attempts[id] || { draft: "", attempts: [] });
  const bestOf = (id) => {
    const a = attempts[id];
    return a && a.attempts.length ? Math.max(...a.attempts.map(x => x.percent)) : null;
  };

  const allQuestions = window.QBANK;
  const byId = new Map(allQuestions.map(q => [q.id, q]));
  const subjectOf = (item) => (domainMap.get(item.domain) || {}).subject;

  // number questions within each subject
  subjects.forEach(s => {
    allQuestions.filter(q => subjectOf(q) === s.id).forEach((q, i) => { q.index = i + 1; });
  });

  /* ---------- helpers ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sourceLink = (s) => (s.url && /^https?:\/\//i.test(s.url)
    ? `<a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.text)}</a>`
    : esc(s.text));

  const plainCache = new Map();
  function plain(html) {
    if (plainCache.has(html)) return plainCache.get(html);
    const d = document.createElement("div");
    d.innerHTML = html;
    const t = d.textContent.toLowerCase();
    plainCache.set(html, t);
    return t;
  }

  const subjectDomains = (sid) => window.DOMAINS.filter(d => d.subject === sid);
  const subjectQuestions = (sid) => allQuestions.filter(q => subjectOf(q) === sid);

  function matches(q, query) {
    if (!query) return true;
    const hay = (q.q + " " + q.tags.join(" ") + " " + plain(q.answer)).toLowerCase();
    return query.split(/\s+/).filter(Boolean).every(term => hay.includes(term));
  }

  function visibleQuestions() {
    let list;
    if (state.session) list = state.session.map(id => byId.get(id)).filter(Boolean);
    else if (state.domain !== "all") list = allQuestions.filter(q => q.domain === state.domain);
    else list = subjectQuestions(state.subject);
    return list.filter(q => matches(q, state.query));
  }

  /* ---------- subject tabs ---------- */
  function renderSubjects() {
    const s = subjectMap.get(state.subject);
    document.documentElement.style.setProperty("--subject", s.color);
    $("#brandMark").textContent = s.mark;
    $("#brandSub").textContent = s.name;
    $("#subjectTabs").innerHTML = subjects.map(x =>
      `<button class="subject-tab ${x.id === state.subject ? "active" : ""}" data-subject="${x.id}" style="--tab:${x.color}">
        ${esc(x.short)}<span>${subjectQuestions(x.id).length}</span>
      </button>`).join("");
    $$(".view-tab").forEach(b => b.classList.toggle("active", b.dataset.view === state.view));
  }

  $("#subjectTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".subject-tab");
    if (!btn) return;
    setSubject(btn.dataset.subject);
    route();
  });

  $$(".view-tab").forEach(b => b.addEventListener("click", () => {
    state.view = b.dataset.view;
    route();
  }));

  function setSubject(sid) {
    state.subject = sid;
    state.domain = "all";
    state.session = null;
    state.query = "";
    $("#search").value = "";
    store.set(SUBJECT_KEY, sid);
  }

  /* ---------- nav ---------- */
  function renderNav() {
    const doms = subjectDomains(state.subject);
    const countFor = (id) => {
      if (state.view === "cards") {
        return id === "all" ? cardsFor(state.subject, "all").length : window.CARDS.filter(c => c.domain === id).length;
      }
      return id === "all" ? subjectQuestions(state.subject).length : allQuestions.filter(q => q.domain === id).length;
    };
    const items = [{ id: "all", short: "All topics", color: subjectMap.get(state.subject).color }, ...doms];
    $("#nav").innerHTML = items.map(d =>
      `<button class="nav-item ${state.domain === d.id ? "active" : ""}" data-domain="${d.id}">
        <span class="dot" style="--dot:${d.color}"></span>
        <span>${esc(d.short)}</span>
        <span class="count">${countFor(d.id)}</span>
      </button>`).join("");
  }

  $("#nav").addEventListener("click", (e) => {
    const btn = e.target.closest(".nav-item");
    if (!btn) return;
    state.domain = btn.dataset.domain;
    state.session = null;
    route();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- essays ---------- */
  function sourcesHTML(ids) {
    if (!ids || !ids.length) return "";
    return `<div class="sources"><span>Sources</span><ul>${ids.map(id => {
      const s = window.SOURCES[id];
      if (!s) return "";
      return `<li>${sourceLink(s)}</li>`;
    }).join("")}</ul></div>`;
  }

  /* ---------- answer-first mode ---------- */
  const attemptActive = (q) => !state.printing && (state.answerMode || !!state.session) && !q._revealed;
  const wordCount = (t) => (String(t).trim().match(/\S+/g) || []).length;
  const pctClass = (p) => (p >= 70 ? "good" : p >= 40 ? "fair" : "low");

  function modelHTML(q) {
    return `${q.answer}
      ${q.tip ? `<div class="exam-tip"><strong>Exam tip.</strong> ${esc(q.tip)}</div>` : ""}
      ${sourcesHTML(q.sources)}`;
  }

  function historyHTML(q) {
    const list = (attempts[q.id] || { attempts: [] }).attempts;
    if (!list.length) return "";
    return `<details class="att-history"><summary>Previous attempts (${list.length})</summary><ol>${list.slice().reverse().map(a =>
      `<li><span class="pct ${pctClass(a.percent)}">${a.percent}%</span> ${new Date(a.date).toLocaleDateString()} · ${a.covered}/${a.total} key points${a.self != null ? ` · self-grade: ${SELF_GRADES[a.self]}` : ""}
        <details><summary>Show answer text</summary><p class="att-old">${esc(a.text)}</p></details></li>`).join("")}</ol></details>`;
  }

  function editorHTML(q) {
    const draft = attOf(q.id).draft || "";
    return `<div class="attempt">
      <p class="att-label">Write your answer first. When you submit, it is checked against the key points of the model answer.</p>
      <textarea class="att-text" rows="10" maxlength="40000" placeholder="Outline or write your essay answer here…">${esc(draft)}</textarea>
      <div class="att-bar">
        <span class="att-words">${wordCount(draft)} words</span><span class="att-saved"></span>
        <span class="att-buttons">
          <button class="btn btn-small btn-ghost att-skip">Skip & show answer</button>
          <button class="btn btn-small btn-accent att-submit">Submit & compare</button>
        </span>
      </div>
      ${historyHTML(q)}
    </div>`;
  }

  function highlightUser(text, coveredTerms) {
    const stems = new Set(coveredTerms.flatMap(t => window.Grader.stemsOf(t)));
    return String(text).split(/(\s+)/).map(tok => {
      if (/^\s+$/.test(tok)) return tok.replace(/\n/g, "<br>");
      const s = window.Grader.stemOfWord(tok);
      return s && stems.has(s) ? `<mark class="kp-hit">${esc(tok)}</mark>` : esc(tok);
    }).join("");
  }

  function resultHTML(q) {
    const a = attempts[q.id].attempts[attempts[q.id].attempts.length - 1];
    const r = q._result;
    return `<div class="att-result">
      <div class="att-score ${pctClass(r.percent)}">
        <div class="att-pct">${r.percent}%</div>
        <div class="att-score-text"><b>Key-point coverage</b> · ${r.covered.length} of ${r.total} key points · ${r.words} words
          <div class="att-track"><div style="width:${r.percent}%"></div></div></div>
      </div>
      <div class="kp-chips">
        ${r.covered.map(t => `<span class="chip ok" title="Covered">✓ ${t}</span>`).join("")}
        ${r.missed.map(t => `<span class="chip miss" title="Missed">✗ ${t}</span>`).join("")}
      </div>
      <div class="self-grade"><span>Coverage checks key terms only, not your reasoning. Rate your answer yourself:</span>
        ${SELF_GRADES.map((g, i) => `<button class="btn btn-small self-btn ${a.self === i ? "active" : ""}" data-self="${i}">${g}</button>`).join("")}
      </div>
      <div class="compare">
        <section><h5>Your answer</h5><div class="your-answer">${highlightUser(a.text, r.covered)}</div></section>
        <section><h5>Model answer <small>missed points highlighted</small></h5><div class="model-answer">${modelHTML(q)}</div></section>
      </div>
      <div class="att-actions"><button class="btn btn-small att-retry">Try again</button></div>
      ${historyHTML(q)}
    </div>`;
  }

  function answerBodyHTML(q) {
    if (!attemptActive(q)) return modelHTML(q);
    return q._result ? resultHTML(q) : editorHTML(q);
  }

  // mark covered/missed key terms inside the model answer
  function decorate(card) {
    const q = byId.get(card.dataset.id);
    if (!q || !q._result) return;
    const norm = (h) => window.Grader.normalise(window.Grader.stripHtml(h));
    const missed = new Set(q._result.missed.map(norm)), hit = new Set(q._result.covered.map(norm));
    $$(".model-answer strong, .model-answer b, .model-answer td:first-child, .model-answer th", card).forEach(el => {
      const n = norm(el.innerHTML);
      if (missed.has(n)) el.classList.add("kp-miss");
      else if (hit.has(n)) el.classList.add("kp-hit");
    });
  }

  function rerenderCard(card) {
    const q = byId.get(card.dataset.id);
    const num = $(".q-num", card).textContent;
    card.outerHTML = cardHTML(q, num);
    const fresh = $(`#cards .card[data-id="${q.id}"]`);
    decorate(fresh);
    return fresh;
  }

  function submitAttempt(card) {
    const q = byId.get(card.dataset.id);
    const text = $(".att-text", card).value;
    if (!wordCount(text)) { $(".att-saved", card).textContent = "Write something first."; return; }
    const r = window.Grader.scoreAnswer(q, text);
    const rec = attOf(q.id);
    rec.attempts.push({ text, date: Date.now(), percent: r.percent, covered: r.covered.length, total: r.total, self: null });
    rec.attempts = rec.attempts.slice(-10);
    rec.draft = "";
    saveAttempts();
    logActivity();
    q._result = r;
    state.progress.add(q.id);
    store.set(PROGRESS_KEY, [...state.progress]);
    updateProgressUI();
    const fresh = rerenderCard(card);
    $(".att-result", fresh).scrollIntoView && $(".att-result", fresh).scrollIntoView({ block: "nearest" });
  }

  function cardHTML(q, displayIndex) {
    const d = domainMap.get(q.domain);
    const reviewed = state.progress.has(q.id);
    const best = bestOf(q.id);
    return `<article class="card ${q._open ? "open" : ""}" data-id="${q.id}" style="--domain-color:${d.color}">
      <div class="card-head" role="button" tabindex="0" aria-expanded="${!!q._open}">
        <div class="q-num">${displayIndex}</div>
        <div class="q-body">
          <p class="q-text">${esc(q.q)}</p>
          <div class="q-tags">
            ${q.star ? '<span class="tag star">High yield</span>' : ""}
            ${q.tags.map(t => `<span class="tag">${esc(t)}</span>`).join("")}
          </div>
        </div>
        <div class="q-tools">
          ${best != null ? `<span class="best-badge ${pctClass(best)}" title="Best key-point coverage">Best ${best}%</span>` : ""}
          <label class="reviewed-label" title="Mark as reviewed">
            <input type="checkbox" class="review-box" ${reviewed ? "checked" : ""}>
            <span>Reviewed</span>
          </label>
          <span class="chev" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
        </div>
      </div>
      <div class="answer">${answerBodyHTML(q)}</div>
    </article>`;
  }

  function renderEssays() {
    const list = visibleQuestions();
    const subj = subjectMap.get(state.subject);
    const isSearch = state.query.length > 0;

    $("#eyebrow").textContent = state.session ? "Random practice set" : isSearch ? "Search results" : subj.name;
    $("#domainTitle").textContent = state.session
      ? "Mixed exam practice"
      : isSearch ? `Results for “${state.query}”`
      : state.domain === "all" ? "Essay question bank" : domainMap.get(state.domain).name;

    const reviewedInList = list.filter(q => state.progress.has(q.id)).length;
    $("#meta").textContent = `${list.length} question${list.length === 1 ? "" : "s"}${list.length ? ` · ${reviewedInList} reviewed in this view` : ""}`;

    $("#cards").innerHTML = list.map((q, i) => cardHTML(q, state.session ? i + 1 : q.index)).join("");
    $$("#cards .card").forEach(decorate);
    $("#empty").hidden = list.length > 0;
    const btn = $("#answerModeBtn");
    btn.textContent = `Answer first: ${state.answerMode || state.session ? "On" : "Off"}`;
    btn.classList.toggle("active", state.answerMode || !!state.session);
    btn.disabled = !!state.session;
    updateProgressUI();
  }

  $("#cards").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (!card) return;
    const q = byId.get(card.dataset.id);
    if (e.target.closest(".att-submit")) return submitAttempt(card);
    if (e.target.closest(".att-skip")) { q._revealed = true; rerenderCard(card); return; }
    if (e.target.closest(".att-retry")) {
      q._result = null;
      const fresh = rerenderCard(card);
      $(".att-text", fresh).focus();
      return;
    }
    const sb = e.target.closest(".self-btn");
    if (sb) {
      const list = attOf(q.id).attempts;
      list[list.length - 1].self = Number(sb.dataset.self);
      saveAttempts();
      $$(".self-btn", card).forEach(b => b.classList.toggle("active", b === sb));
      return;
    }
    const head = e.target.closest(".card-head");
    if (!head || e.target.closest(".reviewed-label")) return;
    toggleCard(card);
  });

  const draftTimers = new Map();
  $("#cards").addEventListener("input", (e) => {
    if (!e.target.classList.contains("att-text")) return;
    const card = e.target.closest(".card"), id = card.dataset.id, value = e.target.value;
    $(".att-words", card).textContent = `${wordCount(value)} words`;
    clearTimeout(draftTimers.get(id));
    draftTimers.set(id, setTimeout(() => {
      attOf(id).draft = value;
      saveAttempts();
      const s = $(".att-saved", card);
      if (s) s.textContent = "Draft saved";
    }, 500));
  });

  $("#answerModeBtn").addEventListener("click", () => {
    state.answerMode = !state.answerMode;
    store.set(ANSWER_KEY, state.answerMode);
    allQuestions.forEach(q => { q._revealed = false; });
    renderEssays();
  });

  $("#resetAnswersBtn").addEventListener("click", () => {
    if (!confirm("Delete your saved answers and scores for this subject?")) return;
    subjectQuestions(state.subject).forEach(q => { delete attempts[q.id]; q._result = null; });
    saveAttempts();
    renderEssays();
  });
  $("#cards").addEventListener("keydown", (e) => {
    const head = e.target.closest(".card-head");
    if (head && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); toggleCard(head.closest(".card")); }
  });
  $("#cards").addEventListener("change", (e) => {
    if (!e.target.classList.contains("review-box")) return;
    const id = e.target.closest(".card").dataset.id;
    if (e.target.checked) state.progress.add(id); else state.progress.delete(id);
    store.set(PROGRESS_KEY, [...state.progress]);
    if (e.target.checked) logActivity();
    updateProgressUI();
  });

  function toggleCard(card) {
    const q = byId.get(card.dataset.id);
    q._open = !q._open;
    card.classList.toggle("open", q._open);
    $(".card-head", card).setAttribute("aria-expanded", String(q._open));
  }

  function updateProgressUI() {
    const list = subjectQuestions(state.subject);
    const done = list.filter(q => state.progress.has(q.id)).length;
    $("#progressText").textContent = `${done} / ${list.length}`;
    $("#progressBar").style.width = `${list.length ? (done / list.length) * 100 : 0}%`;
  }

  $("#resetBtn").addEventListener("click", () => {
    if (!confirm("Reset reviewed marks for this subject?")) return;
    subjectQuestions(state.subject).forEach(q => state.progress.delete(q.id));
    store.set(PROGRESS_KEY, [...state.progress]);
    route();
  });

  let searchTimer;
  $("#search").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    const value = e.target.value.trim().toLowerCase();
    searchTimer = setTimeout(() => {
      state.query = value;
      state.session = null;
      if (state.view !== "essays") state.view = "essays";
      route();
    }, 140);
  });

  $("#clearSearch").addEventListener("click", () => {
    $("#search").value = ""; state.query = ""; route();
  });

  $("#expandAll").addEventListener("click", () => { visibleQuestions().forEach(q => { q._open = true; }); renderEssays(); });
  $("#collapseAll").addEventListener("click", () => { allQuestions.forEach(q => { q._open = false; }); renderEssays(); });

  $("#printBtn").addEventListener("click", () => {
    state.view = "essays";
    route();
    visibleQuestions().forEach(q => { q._open = true; });
    state.printing = true;           // print model answers, not the answer boxes
    renderEssays();
    setTimeout(() => { window.print(); state.printing = false; renderEssays(); }, 150);
  });

  $("#practiceBtn").addEventListener("click", () => {
    const all = subjectQuestions(state.subject);
    const pool = all.filter(q => !state.progress.has(q.id));
    const source = shuffle((pool.length >= 10 ? pool : all).slice());
    state.view = "essays";
    state.session = source.slice(0, 10).map(q => q.id);
    state.query = "";
    $("#search").value = "";
    allQuestions.forEach(q => { q._open = false; q._revealed = false; q._result = null; });
    route();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#revealSession").addEventListener("click", () => { visibleQuestions().forEach(q => { q._open = true; q._revealed = true; }); renderEssays(); });
  $("#endSession").addEventListener("click", () => { state.session = null; route(); });

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  /* ---------- flashcards (simple Leitner spaced repetition) ---------- */
  const INTERVALS = [0, 1, 3, 7, 14, 30, 60]; // days per box
  const DAY = 86400000;
  const srs = store.get(CARDS_KEY, {});
  const fc = { queue: [], current: null, flipped: false, mode: "due", done: 0 };

  function cardsFor(sid, domain) {
    return window.CARDS.filter(c => subjectOf(c) === sid && (domain === "all" || c.domain === domain));
  }
  const isDue = (c) => !srs[c.id] || srs[c.id].due <= Date.now();

  function buildQueue() {
    const pool = cardsFor(state.subject, state.domain);
    fc.queue = shuffle(fc.mode === "all" ? pool.slice() : pool.filter(isDue));
    fc.done = 0;
    nextCard();
  }

  function nextCard() {
    fc.current = fc.queue.shift() || null;
    fc.flipped = false;
    renderFlash();
  }

  function rate(grade) {
    const c = fc.current;
    if (!c) return;
    const rec = srs[c.id] || { box: 0, due: 0 };
    if (grade === "again") {
      rec.box = 0;
      rec.due = Date.now();
      fc.queue.splice(Math.min(3, fc.queue.length), 0, c); // see it again soon
    } else {
      rec.box = Math.min(INTERVALS.length - 1, rec.box + (grade === "easy" ? 2 : 1));
      rec.due = Date.now() + INTERVALS[rec.box] * DAY;
      fc.done++;
    }
    srs[c.id] = rec;
    store.set(CARDS_KEY, srs);
    logActivity();
    nextCard();
  }

  function renderFlash() {
    const pool = cardsFor(state.subject, state.domain);
    const due = pool.filter(isDue).length;
    const learned = pool.filter(c => srs[c.id] && srs[c.id].box >= 3).length;
    $("#fcStats").innerHTML =
      `<span><b>${pool.length}</b> cards</span><span><b>${due}</b> due now</span><span><b>${learned}</b> well known</span><span><b>${fc.queue.length + (fc.current ? 1 : 0)}</b> left in this round</span>`;
    $$(".fc-mode").forEach(b => b.classList.toggle("active", b.dataset.mode === fc.mode));

    const box = $("#fcCard");
    const c = fc.current;
    if (!c) {
      box.className = "fc-card empty-state";
      box.innerHTML = pool.length
        ? `<div><p class="fc-done-title">${fc.done ? `Round complete · ${fc.done} cards rated` : "Nothing due right now"}</p>
             <p>Come back later for due cards, or press <b>Study all</b> to review every card in this topic.</p></div>`
        : `<div><p class="fc-done-title">No flashcards in this topic yet</p></div>`;
      $("#fcRate").hidden = true;
      $("#fcFlip").hidden = true;
      return;
    }
    const d = domainMap.get(c.domain);
    box.className = `fc-card ${fc.flipped ? "flipped" : ""}`;
    box.style.setProperty("--domain-color", d.color);
    box.innerHTML = `
      <div class="fc-topic">${esc(d.short)}</div>
      <div class="fc-front">${c.front}</div>
      <div class="fc-back">${c.back}${c.sources ? `<div class="fc-src"><b>Source:</b> ${c.sources.filter(id => window.SOURCES[id]).map(id => esc(window.SOURCES[id].text)).join(" · ")}</div>` : ""}</div>`;
    $("#fcFlip").hidden = fc.flipped;
    $("#fcRate").hidden = !fc.flipped;
  }

  function flip() { if (fc.current && !fc.flipped) { fc.flipped = true; renderFlash(); } }
  $("#fcCard").addEventListener("click", flip);
  $("#fcFlip").addEventListener("click", flip);
  $$("#fcRate button").forEach(b => b.addEventListener("click", () => rate(b.dataset.grade)));
  $$(".fc-mode").forEach(b => b.addEventListener("click", () => { fc.mode = b.dataset.mode; buildQueue(); }));
  $("#fcResetBtn").addEventListener("click", () => {
    if (!confirm("Forget flashcard progress for this subject?")) return;
    cardsFor(state.subject, "all").forEach(c => { delete srs[c.id]; });
    store.set(CARDS_KEY, srs);
    buildQueue();
  });

  /* ---------- theme ---------- */
  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    store.set(THEME_KEY, theme);
    $("#themeBtn").textContent = theme === "dark" ? "☀" : "◐";
  }
  let savedTheme = "light";
  try { savedTheme = localStorage.getItem(THEME_KEY) || "light"; savedTheme = savedTheme.replace(/"/g, ""); } catch { /* ignore */ }
  applyTheme(savedTheme);
  $("#themeBtn").addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
  });

  /* ---------- references drawer ---------- */
  const drawer = $("#drawer");
  function renderSources() {
    const prefix = { micro: /^S\d/, chem: /^C\d/, ih: /^B\d/, para: /^P\d/ }[state.subject];
    $("#drawerTitle").textContent = `References · ${subjectMap.get(state.subject).short}`;
    $("#sourceList").innerHTML = Object.entries(window.SOURCES).filter(([id]) => prefix.test(id)).map(([id, s]) =>
      `<div class="src"><b>${esc(id)}.</b> ${sourceLink(s)}</div>`
    ).join("");
  }
  $("#closeDrawer").addEventListener("click", () => { drawer.hidden = true; });
  drawer.addEventListener("click", (e) => { if (e.target === drawer) drawer.hidden = true; });
  $$(".open-sources").forEach(b => b.addEventListener("click", () => { renderSources(); drawer.hidden = false; }));

  /* ---------- routing ---------- */
  function setHash() {
    const parts = [state.view === "cards" ? "cards" : null, state.subject, state.domain !== "all" ? state.domain : null].filter(Boolean);
    const h = state.view === "progress" ? "#progress" : "#" + parts.join("/");
    if (location.hash === h) return;
    try { history.replaceState(null, "", h); } catch { /* some file:// contexts block replaceState */ }
  }

  function readHash() {
    const parts = location.hash.replace("#", "").split("/").filter(Boolean);
    if (parts[0] === "progress") { state.view = "progress"; return; }
    state.view = parts[0] === "cards" ? "cards" : "essays";
    if (parts[0] === "cards") parts.shift();
    if (parts[0] && subjectMap.has(parts[0])) state.subject = parts.shift();
    else if (parts[0] && domainMap.has(parts[0])) state.subject = domainMap.get(parts[0]).subject; // old #virology links
    const dom = parts[0];
    state.domain = dom && domainMap.has(dom) && domainMap.get(dom).subject === state.subject ? dom : "all";
  }

  function route() {
    if (state.domain !== "all" && (!domainMap.has(state.domain) || domainMap.get(state.domain).subject !== state.subject)) state.domain = "all";
    setHash();
    renderSubjects();
    renderNav();
    const cards = state.view === "cards";
    const progress = state.view === "progress";
    document.body.dataset.view = state.view;
    $("#essayView").hidden = state.view !== "essays";
    $("#cardView").hidden = !cards;
    $("#progressView").hidden = !progress;
    $("#sessionBanner").hidden = state.view !== "essays" || !state.session;
    if (state.session) $("#sessionInfo").textContent = `${state.session.length} questions · answers hidden. Write your outline first.`;
    $("#footCount").textContent = `${subjects.length} subjects · ${allQuestions.length} essay questions · ${window.CARDS.length} flashcards`;
    if (progress) {
      if (window.MSProgress) window.MSProgress.render();
    } else if (cards) {
      $("#fcTitle").textContent = state.domain === "all" ? `${subjectMap.get(state.subject).short} flashcards` : domainMap.get(state.domain).name;
      buildQueue();
    } else {
      renderEssays();
    }
    updateProgressUI();
  }

  window.addEventListener("hashchange", () => { readHash(); state.session = null; route(); });

  document.addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName);
    if (e.key === "Escape") { drawer.hidden = true; if (document.activeElement === $("#search")) $("#search").blur(); return; }
    if (typing) return;
    if (e.key === "/") { e.preventDefault(); $("#search").focus(); return; }
    if (state.view === "cards") {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
      else if (fc.flipped && e.key === "1") rate("again");
      else if (fc.flipped && e.key === "2") rate("good");
      else if (fc.flipped && e.key === "3") rate("easy");
    } else if (state.view === "essays" && e.key.toLowerCase() === "r") {
      const first = $(".card");
      if (first) toggleCard(first);
    }
  });

  /* ---------- account sync hooks (used by sync.js) ---------- */
  // Synced data is only ever the person's own, but keep it to the expected shape and types
  // so a malformed record cannot break the page or inject markup.
  const num = (v, min, max) => { const n = Number(v); return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : min; };
  const isPlain = (o) => o && typeof o === "object" && !Array.isArray(o);
  function cleanData(d) {
    const out = { progress: [], attempts: {}, srs: {}, activity: {}, answerMode: d.answerMode !== false };
    if (Array.isArray(d.progress)) out.progress = d.progress.filter(id => typeof id === "string");
    if (isPlain(d.attempts)) Object.entries(d.attempts).forEach(([id, rec]) => {
      if (!isPlain(rec)) return;
      const list = Array.isArray(rec.attempts) ? rec.attempts.filter(isPlain).slice(-10).map(a => ({
        text: String(a.text == null ? "" : a.text).slice(0, 40000),
        date: num(a.date, 0, 8.64e15),
        percent: Math.round(num(a.percent, 0, 100)),
        covered: Math.round(num(a.covered, 0, 1000)),
        total: Math.round(num(a.total, 0, 1000)),
        self: a.self === null || a.self === undefined ? null : Math.round(num(a.self, 0, SELF_GRADES.length - 1))
      })) : [];
      out.attempts[id] = { draft: String(rec.draft == null ? "" : rec.draft).slice(0, 40000), attempts: list };
    });
    if (isPlain(d.srs)) Object.entries(d.srs).forEach(([id, r]) => {
      if (isPlain(r)) out.srs[id] = { box: Math.round(num(r.box, 0, INTERVALS.length - 1)), due: num(r.due, 0, 8.64e15) };
    });
    if (isPlain(d.activity)) Object.entries(d.activity).forEach(([day, n]) => {
      if (/^\d{4}-\d{2}-\d{2}$/.test(day)) out.activity[day] = Math.round(num(n, 0, 1e6));
    });
    return out;
  }
  const replaceObject = (target, source) => {
    Object.keys(target).forEach(k => delete target[k]);
    Object.assign(target, source || {});
  };
  window.MSApp = {
    keys: { progress: PROGRESS_KEY, attempts: ATT_KEY, srs: CARDS_KEY, answerMode: ANSWER_KEY },
    snapshot() {
      return { progress: [...state.progress], attempts, srs, answerMode: state.answerMode, activity };
    },
    // replace this browser's study data (after sign-in, or with an empty set after sign-out)
    replace(raw) {
      const data = cleanData(raw || {});
      const before = JSON.stringify(this.snapshot());
      state.progress = new Set(data.progress || []);
      replaceObject(attempts, data.attempts);
      replaceObject(srs, data.srs);
      replaceObject(activity, data.activity);
      backfillActivity();
      state.answerMode = data.answerMode !== false;
      try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify([...state.progress]));
        localStorage.setItem(ATT_KEY, JSON.stringify(attempts));
        localStorage.setItem(CARDS_KEY, JSON.stringify(srs));
        localStorage.setItem(ANSWER_KEY, JSON.stringify(state.answerMode));
        localStorage.setItem(ACTIVITY_KEY, JSON.stringify(activity));
      } catch { /* private mode */ }
      if (JSON.stringify(this.snapshot()) === before) return;
      allQuestions.forEach(q => { q._result = null; });
      // do not wipe an answer that is being typed right now
      if (document.activeElement && document.activeElement.classList.contains("att-text")) { updateProgressUI(); return; }
      route();
    },
    // jump to a view, subject and (optionally) topic
    go({ view = "essays", subject, domain = "all" }) {
      if (subject && subjectMap.has(subject)) setSubject(subject);
      state.view = view;
      state.domain = domain;
      state.session = null;
      route();
      window.scrollTo({ top: 0 });
    },
    // open one essay question and scroll to it
    openQuestion(qid) {
      const q = byId.get(qid);
      if (!q) return;
      setSubject(subjectOf(q));
      state.view = "essays";
      state.domain = q.domain;
      q._open = true;
      route();
      const card = $(`#cards .card[data-id="${qid}"]`);
      if (card) card.scrollIntoView({ block: "start" });
    },
    bestOf,
    subjectOf
  };

  /* ---------- boot ---------- */
  readHash();
  route();
})();
