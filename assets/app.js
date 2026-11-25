(() => {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
  const PROGRESS_KEY = "amm-progress-v1";
  const THEME_KEY = "amm-theme";
  const CARDS_KEY = "ms-cards-v1";
  const SUBJECT_KEY = "ms-subject";

  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v == null ? fallback : JSON.parse(v); } catch { return fallback; }
    },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode */ } }
  };

  const subjects = window.SUBJECTS;
  const subjectMap = new Map(subjects.map(s => [s.id, s]));
  const domainMap = new Map(window.DOMAINS.map(d => [d.id, d]));

  const state = {
    view: "essays",          // "essays" | "cards"
    subject: subjectMap.has(store.get(SUBJECT_KEY, "micro")) ? store.get(SUBJECT_KEY, "micro") : "micro",
    domain: "all",
    query: "",
    session: null,
    progress: new Set(store.get(PROGRESS_KEY, []))
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
      const label = s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.text)}</a>` : esc(s.text);
      return `<li>${label}</li>`;
    }).join("")}</ul></div>`;
  }

  function cardHTML(q, displayIndex) {
    const d = domainMap.get(q.domain);
    const reviewed = state.progress.has(q.id);
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
          <label class="reviewed-label" title="Mark as reviewed">
            <input type="checkbox" class="review-box" ${reviewed ? "checked" : ""}>
            <span>Reviewed</span>
          </label>
          <span class="chev" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg></span>
        </div>
      </div>
      <div class="answer">
        ${q.answer}
        ${q.tip ? `<div class="exam-tip"><strong>Exam tip.</strong> ${esc(q.tip)}</div>` : ""}
        ${sourcesHTML(q.sources)}
      </div>
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
    $("#empty").hidden = list.length > 0;
    updateProgressUI();
  }

  $("#cards").addEventListener("click", (e) => {
    const head = e.target.closest(".card-head");
    if (!head || e.target.closest(".reviewed-label")) return;
    toggleCard(head.closest(".card"));
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
    renderEssays();
    setTimeout(() => window.print(), 150);
  });

  $("#practiceBtn").addEventListener("click", () => {
    const all = subjectQuestions(state.subject);
    const pool = all.filter(q => !state.progress.has(q.id));
    const source = shuffle((pool.length >= 10 ? pool : all).slice());
    state.view = "essays";
    state.session = source.slice(0, 10).map(q => q.id);
    state.query = "";
    $("#search").value = "";
    allQuestions.forEach(q => { q._open = false; });
    route();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#revealSession").addEventListener("click", () => { visibleQuestions().forEach(q => { q._open = true; }); renderEssays(); });
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
      `<div class="src"><b>${id}.</b> ${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.text)}</a>` : esc(s.text)}</div>`
    ).join("");
  }
  $("#closeDrawer").addEventListener("click", () => { drawer.hidden = true; });
  drawer.addEventListener("click", (e) => { if (e.target === drawer) drawer.hidden = true; });
  $$(".open-sources").forEach(b => b.addEventListener("click", () => { renderSources(); drawer.hidden = false; }));

  /* ---------- routing ---------- */
  function setHash() {
    const parts = [state.view === "cards" ? "cards" : null, state.subject, state.domain !== "all" ? state.domain : null].filter(Boolean);
    const h = "#" + parts.join("/");
    if (location.hash === h) return;
    try { history.replaceState(null, "", h); } catch { /* some file:// contexts block replaceState */ }
  }

  function readHash() {
    const parts = location.hash.replace("#", "").split("/").filter(Boolean);
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
    $("#essayView").hidden = cards;
    $("#cardView").hidden = !cards;
    $("#sessionBanner").hidden = cards || !state.session;
    if (state.session) $("#sessionInfo").textContent = `${state.session.length} questions · answers hidden. Write your outline first.`;
    $("#footCount").textContent = `${subjects.length} subjects · ${allQuestions.length} essay questions · ${window.CARDS.length} flashcards`;
    if (cards) {
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
    } else if (e.key.toLowerCase() === "r") {
      const first = $(".card");
      if (first) toggleCard(first);
    }
  });

  /* ---------- boot ---------- */
  readHash();
  route();
})();
