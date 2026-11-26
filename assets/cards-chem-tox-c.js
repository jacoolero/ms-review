/* Flashcards — Clinical Chemistry: advanced TDM, toxicology and Philippine practice (set C) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-toxc-", "chem-tox", ["S33", "C13", "C1"], [
    ["RA 9165: what must happen before a positive result is reported?", "The non-negative <b>screening immunoassay is presumptive</b>; it must be confirmed by <b>GC-MS or LC-MS/MS</b> in a DOH-accredited laboratory."],
    ["What does DOH accreditation of a drug-testing laboratory require?", "Qualified staff, validated methods, internal QC, <b>proficiency testing</b>, chain of custody and documented records. It is separate from the general laboratory licence."],
    ["Why does methanol cause blindness and severe acidosis?", "<b>Formate</b> inhibits cytochrome oxidase and damages the optic nerve and putamen, while metabolism produces a <b>high anion gap metabolic acidosis</b>."],
    ["Best specimen for chronic inorganic mercury exposure?", "<b>Urine</b>. Blood reflects recent exposure and hair reflects methylmercury over months; use trace-element-free tubes."],
    ["Why is PhilHealth coverage central to TDM access in the Philippines?", "Uncovered tests become <b>out-of-pocket</b> costs, so clinicians under-order them and patients miss monitoring. Coverage should target outcome-changing TDM."],
    ["Which alcohol marker covers about four weeks and is highly specific?", "<b>Phosphatidylethanol (PEth)</b> in blood. Urine <b>EtG</b> covers roughly 80 hours and GGT is sensitive but non-specific."],
    ["Vancomycin AUC: what sampling supports Bayesian estimation?", "<b>Two concentrations at steady state</b> with exact dose and infusion times, fitted to a population model."],
    ["What does rifampicin do to tacrolimus concentrations?", "It induces <b>CYP3A4</b> and can lower tacrolimus several-fold within days, risking <b>acute rejection</b>. Increase the dose pre-emptively and monitor troughs."],
    ["Two pre-analytical errors that falsely raise lithium results", "Using a <b>lithium heparin</b> tube, and sampling before the <b>12-hour</b> post-dose standard. Both invalidate interpretation."],
    ["When is haemodialysis considered in massive acetaminophen overdose?", "For severe acidosis, renal failure, refractory hypotension or a very high level, alongside <b>N-acetylcysteine</b> rather than instead of it."]
  ]);
})();
