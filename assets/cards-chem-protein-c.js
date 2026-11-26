/* Flashcards — Clinical Chemistry, proteins & enzymes set C (one card per essay cc271–cc280) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-proc-", "chem-protein", ["C9", "C1", "C18", "C13"], [
    ["Why is a single troponin insufficient in a district hospital?", "Without a second timed sample there is no <b>rise or fall</b>, and point-of-care results are not interchangeable with central hs-cTn."],
    ["Which marker is used for hepatocellular carcinoma surveillance in chronic hepatitis B?", "<b>Alpha-fetoprotein</b> together with ultrasound; it is not a stand-alone screening test."],
    ["Which cheap result should trigger reflex serum protein electrophoresis?", "A <b>globulin gap</b> above 40 g/L, or an unexplained low albumin with a raised total protein."],
    ["How does a PhilHealth case rate pay for inpatient laboratory tests?", "It <b>bundles</b> them into a fixed episode payment, so there is no separate fee for each test."],
    ["Which dengue test is most sensitive in the first five days?", "<b>NS1 antigen</b>; IgM only becomes reliable from about day five."],
    ["What imprecision must an hs-cTn assay achieve at the 99th percentile?", "A coefficient of variation of <b>10% or less</b> at the sex-specific 99th percentile upper reference limit."],
    ["Name two conditions that raise NT-proBNP without heart failure.", "<b>Atrial fibrillation</b> and <b>chronic kidney disease</b>; obesity instead lowers NT-proBNP."],
    ["Which screening test detects an immunoglobulin-bound macroenzyme?", "<b>Polyethylene glycol precipitation</b>: activity falls in the supernatant after the complex precipitates."],
    ["Biotin interference: which assay format gives falsely low results?", "The <b>sandwich</b> assay; competitive assays give falsely high results."],
    ["Why interpret CSF total protein with a paired serum sample?", "The <b>albumin quotient</b> is needed to distinguish barrier leakage from intrathecal synthesis."]
  ]);
})();
