/* Flashcards — Clinical Chemistry, proteins & enzymes set B (one card per essay cc151–cc168) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-prox-", "chem-protein", ["C1", "C2", "C3"], [
    ["Which plasma protein fraction contains transthyretin and retinol-binding protein?", "Prealbumin — it carries <b>transthyretin</b> and retinol-binding protein and falls early in inflammation."],
    ["Why is albumin a poor nutritional marker in hospital patients?", "Albumin is a <b>negative acute phase protein</b> with a half-life near 20 days, so inflammation lowers it independently of nutrition."],
    ["How does a polyclonal gamma rise differ from a monoclonal band?", "Polyclonal: broad, symmetrical γ rise with both light chains. Monoclonal: narrow <b>M-protein</b> band with a single light chain."],
    ["What does immunofixation add to serum protein electrophoresis?", "It identifies the heavy and light chain type of an <b>M-protein</b>; electrophoresis only suggests clonality."],
    ["Which free light chain result suggests a clonal plasma cell disorder?", "An abnormal <b>involved:uninvolved free light chain ratio</b>, especially with a raised involved chain."],
    ["Why is CRP more useful than ESR in acute infection?", "CRP rises within hours and falls with a half-life near 19 hours, so it tracks acute inflammation better than the slow <b>ESR</b>."],
    ["Which cytokine suppresses procalcitonin during viral infection?", "<b>Interferon-γ</b> suppresses CALC-1 expression, which is why procalcitonin is usually low in viral infection."],
    ["What separates myocardial injury from myocardial infarction?", "Infarction needs evidence of ischaemia plus a rise or fall above the <b>99th percentile</b>; injury alone lacks ischaemia."],
    ["Why is CK-MB not truly cardiac-specific?", "CK-MB is also present in skeletal muscle, so it is less specific than <b>cardiac troponin</b>."],
    ["What does an AST:ALT ratio above 2 suggest?", "It suggests <b>alcoholic liver disease</b>, partly because pyridoxal-5'-phosphate deficiency lowers ALT more than AST."],
    ["How does GGT help localise a raised alkaline phosphatase?", "GGT rises in hepatobiliary disease but not in bone disease, so it confirms a hepatic source."],
    ["Which enzyme is preferred in late-presenting acute pancreatitis?", "<b>Lipase</b> — it stays elevated for 8–14 days, whereas amylase often normalises within 3–5 days."],
    ["Why can BNP not monitor patients taking sacubitril-valsartan?", "Sacubitril inhibits <b>neprilysin</b>, so BNP rises; NT-proBNP is the better monitoring marker."],
    ["Which ovarian marker is less affected by endometriosis than CA-125?", "It is <b>HE4</b>, which is also combined with CA-125 in the ROMA score."],
    ["What does a low free PSA percentage suggest?", "A lower free/total ratio raises the probability of cancer in the diagnostic grey zone."],
    ["Which index detects intrathecal IgG synthesis?", "Use the <b>IgG index</b>: (CSF IgG/serum IgG) ÷ (CSF albumin/serum albumin)."],
    ["Why may a urine dipstick be negative in light-chain myeloma?", "The dipstick detects <b>albumin</b> by the protein error of indicators and misses monoclonal light chains."],
    ["Biotin interference: sandwich versus competitive assay?", "Sandwich assays read falsely <b>low</b>; competitive assays read falsely <b>high</b>."]
  ]);
})();
