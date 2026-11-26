/* Flashcards - Clinical Chemistry - QC, regulation & advanced practice (set C) */
(() => {
  const prefix = "fc-qcc-";
  const add = (pairs) => pairs.forEach(([front, back, sources], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain: "chem-qc", front, back, sources }));

  add([
    ["Which DOH order governs Philippine clinical laboratory licensure?",
      "<b>AO 2021-0037</b>, which revised the implementing rules of RA 4688. It sets the classification, staffing, equipment and quality requirements for the licence to operate.",
      ["C13", "S33", "C11"]],
    ["How does PhilHealth usually pay for inpatient laboratory tests?",
      "Through <b>case rates</b> that bundle diagnostics, not a fee for each test. The laboratory therefore works as a cost centre inside a fixed payment.",
      ["C18", "S33", "C1"]],
    ["Do ISO 15189 accreditation and a DOH licence cover the same thing?",
      "No. The <b>DOH licence</b> is the mandatory legal minimum, while <b>ISO 15189</b> accreditation is voluntary third-party attestation of competence. One integrated quality system can satisfy both.",
      ["C11", "C13", "C1"]],
    ["First step when an EQA result is unacceptable?",
      "Check clerical details, material handling and the run itself before blaming the method. Then compare peer groups and internal QC to separate <b>random</b> from <b>systematic</b> error.",
      ["S31", "C4", "C13"]],
    ["Which CHED issuance sets the BS Medical Technology curriculum?",
      "<b>CMO 13 (2017)</b> sets the undergraduate curriculum; <b>CMO 15 (2019)</b> governs graduate programmes. Both define outcomes, faculty and research requirements that shape professional competence.",
      ["S29", "S30", "S28"]],
    ["Sigma for TEa 8.0%, bias 1.0% and CV 1.8%?",
      "Sigma = (8.0 − 1.0) ÷ 1.8 = <b>3.9</b>. That is marginal, so use a multirule with more control measurements and plan to reduce CV or bias.",
      ["C4", "C5", "C1"]],
    ["Top-down measurement uncertainty formulas?",
      "<b>u(c) = square root of (u(Rw) squared + u(bias) squared)</b>, then <b>U = 2 × u(c)</b>. Imprecision comes from internal QC and bias from EQA or reference materials.",
      ["C11", "C5", "C1"]],
    ["Who remains accountable when a POCT device sits in a ward?",
      "The <b>laboratory</b>, through a POCT committee and coordinator, even when nurses operate the device. Device, operator competency, QC and results stay inside the laboratory quality system.",
      ["C11", "C19", "C13"]],
    ["Before trusting an AI algorithm, what must the laboratory do?",
      "<b>Validate it locally</b> against its own population and workflow, check subgroup performance and plan drift monitoring. A vendor claim or conference demonstration is not verification.",
      ["C11", "C1", "C2"]],
    ["What is the core idea of CLSI EP23 risk-based QC?",
      "Design QC from the <b>probability and harm of undetected error</b>, not from habit. The plan states failure modes, controls, frequency and the maximum patient results released between QC events.",
      ["C5", "C4", "C11"]]
  ]);
})();
