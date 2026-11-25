/* Flashcards — Clinical Chemistry, renal/electrolyte/acid–base part B */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-renx-", "chem-renal", ["C1", "C3", "C7"], [
    ["Why does the BUN:creatinine ratio rise in upper GI bleeding?", "Absorbed blood protein is catabolised to <b>urea</b> faster than creatinine is generated, so the ratio rises above 20:1."],
    ["When is a measured GFR preferred to an estimated GFR?", "When muscle mass is extreme or unstable — <b>amputees</b>, cachexia, cirrhosis, pregnancy or before nephrotoxic therapy — because eGFR assumes a <b>steady state</b>."],
    ["Why does an adult creatinine interval mislead in a child?", "Creatinine rises with <b>muscle mass</b> through childhood, so intervals must be <b>age-partitioned</b> and method-specific."],
    ["Which hormone inserts aquaporin-2 channels in the collecting duct?", "<b>Antidiuretic hormone</b>, acting through <b>V2 receptors</b>."],
    ["First laboratory branch in hypernatraemia?", "Measure <b>urine osmolality</b>: below 300 mOsm/kg suggests diabetes insipidus or osmotic diuresis; above 300 suggests extrarenal loss or poor intake."],
    ["Urine potassium that indicates renal wasting?", "Urine K <b>&lt;20 mmol/day</b> points to extrarenal loss; higher values indicate <b>renal wasting</b>."],
    ["Urine chloride in chloride-responsive metabolic alkalosis?", "<b>&lt;20 mmol/L</b>, as in vomiting or nasogastric suction."],
    ["Delta ratio of 1.6 with ketoacidosis and vomiting — what next?", "It fits a <b>high-anion-gap acidosis</b>; the low urine chloride and alkaline urine reveal the coexisting <b>metabolic alkalosis</b>."],
    ["Urine pH above 5.5 during acidosis suggests which RTA?", "<b>Distal (type 1) renal tubular acidosis</b> — impaired hydrogen ion secretion."],
    ["Which urine values support SIADH?", "<b>Urine osmolality &gt;100</b> mOsm/kg, <b>urine sodium &gt;30</b> mmol/L and euvolemia with hypotonic hyponatraemia."],
    ["Desmopressin response in nephrogenic diabetes insipidus?", "No rise in urine osmolality — the kidney is resistant to <b>ADH</b>."],
    ["Why can specific gravity overestimate urine concentration in proteinuria?", "Specific gravity reflects solute <b>mass</b> as well as number, so protein and radiocontrast raise it more than <b>osmolality</b>."],
    ["What does urea rebound after dialysis indicate?", "Delayed equilibration between compartments, so an immediate post-dialysis sample <b>overestimates</b> clearance."],
    ["Urine sediment clue to acute interstitial nephritis?", "<b>Sterile pyuria</b> with white cell casts; eosinophiluria is poorly sensitive."],
    ["Why is uric acid falsely low during rasburicase therapy?", "The drug degrades uric acid <b>ex vivo</b>, so the sample must be chilled and analysed promptly or the result is falsely low."],
    ["Which protein loss explains thrombosis in nephrotic syndrome?", "Urinary loss of <b>antithrombin</b>, with haemoconcentration, raises thrombotic risk."],
    ["Which viral PCR signals BK nephropathy after kidney transplant?", "Plasma <b>BK PCR</b> — a high viral load prompts reduction of immunosuppression."],
    ["ECG finding in hypocalcaemia, and what else must be checked?", "<b>QT prolongation</b>; check ionised calcium, magnesium and PTH."]
  ]);
})();
