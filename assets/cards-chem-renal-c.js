/* Flashcards — Clinical Chemistry, renal/electrolyte/acid–base part C */
(() => {
  const cards = [
    ["Why do many Filipino patients first start dialysis as an emergency?",
      "CKD is detected late, so uraemia, fluid overload or <b>hyperkalaemia</b> brings them to hospital already at stage 5.",
      ["C7", "C16", "C18"]],
    ["PhilHealth haemodialysis payment: case rate or fee-for-service?",
      "A fixed <b>case rate</b> per session, with the annual cap raised from <b>90</b> to <b>156 sessions</b> in the 2024 adjustment.",
      ["C18", "C16"]],
    ["Which eGFR equation does KDIGO 2024 recommend, and what was removed?",
      "<b>CKD-EPI 2021</b>; the <b>race coefficient</b> was removed, and cystatin C is added when more accuracy is needed.",
      ["C12", "C7"]],
    ["Which test detects BK polyomavirus nephropathy after kidney transplant?",
      "Plasma <b>BK PCR</b>; a high viral load prompts reduction of immunosuppression and consideration of biopsy.",
      ["C7", "C1"]],
    ["Which urine finding most often indicates a contaminated specimen?",
      "<b>Squamous epithelial cells</b>, especially with mixed flora; interpret the culture with caution and recollect.",
      ["C13", "C1"]],
    ["Why does serum creatinine rise late in acute kidney injury?",
      "<b>Creatinine lag</b>: a substantial fall in GFR must occur before the value moves, so injury is established first.",
      ["C7", "C1"]],
    ["How is the anion gap corrected for hypoalbuminaemia?",
      "Add <b>0.25 × (40 − albumin in g/L)</b>; or add 2.5 for each 1 g/dL that albumin is below 4.0.",
      ["C15", "C1"]],
    ["How is pseudohyperkalaemia confirmed before treating hyperkalaemia?",
      "Repeat without stasis and compare <b>serum with plasma</b>; a serum value more than <b>0.4 mmol/L</b> higher supports artefact.",
      ["C1", "C3"]],
    ["Which osmometer method detects methanol in the osmolal gap?",
      "<b>Freezing-point depression</b>; vapour-pressure osmometers miss volatile alcohols and understate the gap.",
      ["C1", "C3"]],
    ["Which stone type points to distal renal tubular acidosis?",
      "<b>Calcium phosphate</b> stones with alkaline urine, hypercalciuria, hypocitraturia and <b>nephrocalcinosis</b>.",
      ["C1", "C15"]]
  ];
  cards.forEach(([front, back, sources], i) =>
    window.CARDS.push({ id: "fc-renc-" + (i + 1), domain: "chem-renal", front, back, sources }));
})();
