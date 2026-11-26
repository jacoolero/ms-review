/* Flashcards — Immunohematology: transfusion reactions & TTIs, part C (ih211–ih220) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back, own], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources: own || sources }));
  add("fc-ipc-", "ih-reactions", ["B14", "B15", "B9"], [
    ["What does haemovigilance cover?", "The whole transfusion chain: donor reactions, adverse recipient events and <b>near misses</b>, with corrective action."],
    ["Which Philippine law governs HIV testing and confidentiality?", "<b>RA 11166</b>, the Philippine HIV and AIDS Policy Act of 2018.", ["B17", "S33"]],
    ["Why does HBsAg screening miss some infectious donors?", "The <b>window period</b> and <b>occult hepatitis B</b>, where HBV DNA persists with negative HBsAg.", ["B8", "B14"]],
    ["When are platelets indicated in dengue?", "For <b>significant bleeding</b>, not routinely for a low count; plasma leakage is the immediate threat.", ["B1", "S25"]],
    ["Why are platelets most prone to bacterial contamination?", "They are stored at <b>room temperature</b>, allowing skin flora and gram-negative organisms to multiply."],
    ["What triggers lookback?", "A donor <b>seroconverts</b> or becomes <b>NAT-positive</b>, or reports a new infection or exposure.", ["B8", "B17"]],
    ["Which antibody classically causes delayed haemolytic reactions?", "<b>Anti-Jkᵃ</b> (Kidd): evanescent, anamnestic and complement-binding.", ["B1", "B2"]],
    ["How do TRALI and TACO differ in mechanism?", "TRALI is <b>non-cardiogenic</b> endothelial injury; TACO is <b>hydrostatic</b> volume overload.", ["B1", "B9"]],
    ["Which immunoglobulin deficiency predisposes to anaphylaxis?", "Severe <b>IgA deficiency</b> with <b>anti-IgA</b> antibodies in the recipient.", ["B1", "B2"]],
    ["How is TA-GVHD prevented?", "By <b>irradiating</b> cellular components (25 Gy) to inactivate donor <b>T lymphocytes</b>.", ["B1", "B5"]]
  ]);
})();
