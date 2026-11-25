/* Key-point grader: compares a typed essay answer with the key terms of the model answer.
   Pure functions; works in the browser (window.Grader) and under Node (module.exports). */
(function (root) {
  "use strict";

  const STOP = new Set(("a an the and or of in on at to for with by from as is are was were be been it its this that these those " +
    "into than then their there which who whom whose what when where how why not no nor but if so such via per vs " +
    "e.g i.e etc also may can will both each other more most less least very only").split(" "));

  const GREEK = { "α": "alpha", "β": "beta", "γ": "gamma", "δ": "delta", "κ": "kappa", "λ": "lambda", "µ": "u", "μ": "u", "ε": "epsilon", "σ": "sigma", "ω": "omega" };
  const SUP = { "⁰": "0", "¹": "1", "²": "2", "³": "3", "⁴": "4", "⁵": "5", "⁶": "6", "⁷": "7", "⁸": "8", "⁹": "9", "⁺": "+", "⁻": "-",
    "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₄": "4", "₅": "5", "₆": "6", "₇": "7", "₈": "8", "₉": "9" };

  // tags that describe the question format rather than a concept
  const META_TAGS = new Set(["case", "calculation", "comparison", "short notes", "interpretation", "methods",
    "morphology", "identification", "laboratory", "philippines"]);

  function stripHtml(html) {
    return String(html)
      .replace(/<sub>(.*?)<\/sub>/gi, "$1")
      .replace(/<sup>(.*?)<\/sup>/gi, "$1")
      .replace(/<[^>]+>/g, " ")
      .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"');
  }

  function normalise(text) {
    let s = String(text).toLowerCase();
    s = s.replace(/[αβγδκλµμεσω]/g, c => " " + GREEK[c] + " ");
    s = s.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻₀₁₂₃₄₅₆₇₈₉]/g, c => SUP[c]);
    s = s.normalize("NFD").replace(/[̀-ͯ]/g, "");
    s = s.replace(/≥/g, " >= ").replace(/≤/g, " <= ").replace(/[–—−]/g, "-").replace(/[‘’“”"']/g, "");
    s = s.replace(/(\d)[-\s](\d+[a-z])/g, "$1$2");     // "1-3s" / "1 3s" -> "13s" (Westgard rules)
    s = s.replace(/%/g, " percent ").replace(/×/g, "x").replace(/→/g, " ");
    s = s.replace(/[()\[\]{},;:!?/\\|*+=<>~^]/g, " ");
    s = s.replace(/-/g, " ");                            // hyphens and ranges become spaces
    s = s.replace(/\.(?!\d)/g, " ");                     // drop full stops that are not decimal points
    return s.replace(/\s+/g, " ").trim();
  }

  const words = (s) => s.split(" ").filter(Boolean);
  const isNum = (w) => /^\d+(\.\d+)?$/.test(w);
  const content = (s) => words(s).filter(w => !STOP.has(w) && (w.length > 1 || isNum(w)));
  const stem = (w) => (isNum(w) ? w : w.slice(0, 5));

  function extractKeyPoints(q) {
    if (Array.isArray(q.keypoints) && q.keypoints.length) return q.keypoints.slice();
    const out = [], seen = new Set();
    const push = (raw) => {
      // keep <sub> for display (e.g. 1<sub>3s</sub>); drop every other tag
      const t = String(raw).replace(/<(?!\/?sub>)[^>]+>/g, " ").replace(/\s+/g, " ").trim().replace(/[.,;:]+$/, "");
      if (!t) return;
      const n = normalise(stripHtml(t));
      if (n.length < 3 || words(n).length > 8 || !content(n).length || seen.has(n)) return;
      seen.add(n);
      out.push(t);
    };

    // 1. bold terms in the answer
    const re = /<(strong|b)>([\s\S]*?)<\/\1>/gi;
    let m;
    while ((m = re.exec(q.answer || ""))) push(m[2]);

    // 2. table terms: column headers of "Feature" tables, otherwise the first cell of each row
    const tables = (q.answer || "").match(/<table[\s\S]*?<\/table>/gi) || [];
    tables.forEach(tb => {
      const rows = tb.match(/<tr[\s\S]*?<\/tr>/gi) || [];
      if (!rows.length) return;
      const heads = (rows[0].match(/<th[^>]*>[\s\S]*?<\/th>/gi) || []).map(h => stripHtml(h).trim());
      const attrTable = heads.length > 2 && /^(feature|features|)$/i.test(heads[0] || "");
      if (attrTable) heads.slice(1).forEach(push);
      else rows.slice(heads.length ? 1 : 0).forEach(r => {
        const c = r.match(/<td[^>]*>([\s\S]*?)<\/td>/i);
        if (c && stripHtml(c[1]).trim().split(/\s+/).length <= 6) push(c[1]);
      });
    });

    // 3. concept tags
    (q.tags || []).filter(t => !META_TAGS.has(t.toLowerCase())).forEach(push);
    return out.slice(0, 30);
  }

  function matchTerm(term, answerNorm, answerStems) {
    const t = normalise(stripHtml(term));
    if (!t) return false;
    if ((" " + answerNorm + " ").includes(" " + t + " ") || (t.length >= 6 && answerNorm.includes(t))) return true;
    const cw = content(t);
    if (!cw.length) return false;
    if (cw.filter(isNum).some(n => !answerStems.has(n))) return false; // numbers must appear exactly
    const hits = cw.filter(w => answerStems.has(stem(w))).length;
    if (cw.length === 1) return hits === 1;
    return hits / cw.length >= 0.5;
  }

  function scoreAnswer(q, text) {
    const points = extractKeyPoints(q);
    const norm = normalise(text || "");
    const stems = new Set(words(norm).map(stem));
    const covered = [], missed = [];
    points.forEach(p => (matchTerm(p, norm, stems) ? covered : missed).push(p));
    return {
      total: points.length, covered, missed,
      percent: points.length ? Math.round((covered.length / points.length) * 100) : 0,
      words: words(norm).length
    };
  }

  // stems of the content words of a term (used to highlight matches in the user's text)
  const stemsOf = (term) => content(normalise(stripHtml(term))).map(stem);
  const stemOfWord = (w) => { const n = content(normalise(w)); return n.length ? stem(n[0]) : ""; };

  const api = { normalise, stripHtml, extractKeyPoints, matchTerm, scoreAnswer, stemsOf, stemOfWord };
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.Grader = api;
})(typeof window !== "undefined" ? window : globalThis);
