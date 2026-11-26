/* Flashcards — Clinical Chemistry: applied TDM, toxicology, vitamins & trace elements (set B) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-toxx-", "chem-tox", ["C1", "C2", "C3"], [
    ["Why does trough-only vancomycin monitoring misclassify exposure?", "Troughs correlate only loosely with AUC, especially at high MIC or abnormal volume of distribution. The guideline target is <b>AUC/MIC 400–600</b>."],
    ["Extended-interval aminoglycosides: what does the high peak achieve?", "<b>Concentration-dependent killing</b> and a long <b>post-antibiotic effect</b>. The low trough limits cortical accumulation and adaptive resistance."],
    ["When do digoxin-like immunoreactive substances cause a falsely high level?", "In <b>renal or hepatic failure, pregnancy, neonates</b> and pre-eclampsia. Confirm with another platform or LC-MS/MS."],
    ["Which common drugs raise lithium concentrations?", "<b>Thiazides, NSAIDs and ACE inhibitors</b>, especially with dehydration. All reduce renal lithium clearance."],
    ["Anti-TNF TDM: what does a low trough with positive anti-drug antibodies mean?", "<b>Immunogenicity</b> with accelerated clearance. Consider switching drug or adding an immunomodulator rather than simply increasing the dose."],
    ["Which paracetamol metabolite causes centrilobular necrosis?", "<b>NAPQI</b>, formed by CYP2E1 after glucuronidation and sulfation saturate. It depletes glutathione and binds hepatocellular proteins."],
    ["Why is the serum iron peak unreliable in acute iron poisoning?", "It varies with time and absorption and <b>correlates poorly with severity</b>. Treat on symptoms, acidosis and the ingested amount."],
    ["Which specimen best reflects chronic inorganic mercury exposure?", "<b>Urine</b>, ideally with speciation. Blood reflects recent exposure and hair reflects methylmercury over months."],
    ["Toxic alcohol ingestion: what happens to the osmolal and anion gaps over time?", "The <b>osmolal gap</b> is high early and falls as the parent alcohol is metabolised. The anion gap acidosis then appears, so a normal osmolal gap does not exclude poisoning."],
    ["Which chelating agent is used for lead, and which for iron?", "<b>Succimer or CaNa<sub>2</sub>EDTA</b> for lead; <b>deferoxamine</b> for iron. Never use Na<sub>2</sub>EDTA, which causes fatal hypocalcaemia."],
    ["Which four details must every chain-of-custody transfer record?", "The <b>releasing and receiving person, date and time, purpose and signature</b>, plus the condition of the seal."],
    ["Why is LC-MS/MS the confirmatory method in toxicology?", "It combines <b>retention time</b> with mass and fragmentation, giving specificity that immunoassays lack. It also detects compounds outside a targeted panel."],
    ["Which urine findings indicate a specimen is too dilute to report as negative?", "<b>Low creatinine with low specific gravity</b>. Report the result as <b>not interpretable</b>, not negative."],
    ["High-dose methotrexate: which tests accompany each level?", "<b>Creatinine, electrolytes, liver enzymes, full blood count and urine pH</b>. Hydration and urinary alkalinisation prevent precipitation and nephrotoxicity."],
    ["Which assay quantifies dabigatran?", "<b>Diluted thrombin time</b> or ecarin time. The APTT is only qualitative and the INR is unreliable."],
    ["Which trace-element excess causes cholestasis and basal ganglia T1 hyperintensity?", "<b>Manganese</b>, typically in long-term parenteral nutrition with cholestasis. Reduce supplementation and monitor whole blood levels."],
    ["Biotin interference: which assay formats fall and which rise?", "<b>Competitive assays fall</b> falsely; <b>sandwich assays rise</b> falsely. A low free T4 with a high TSH is a typical pattern."],
    ["Why do neonates need different TDM targets?", "<b>Low albumin</b> raises the free fraction and immature clearance prolongs half-lives. Total levels can underestimate active drug."]
  ]);
})();
