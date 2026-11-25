/* Flashcards - Clinical Chemistry - QC & methods extra */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-cq2-", "chem-qc", ["C1", "C2", "C4"], [
    ["Accuracy, trueness and precision — how do they differ?", "<b>Accuracy</b> is closeness of a result to the true value; <b>trueness</b> is closeness of the mean of repeats; <b>precision</b> is closeness of repeats to each other. <i>Bias</i> is the numerical difference that expresses trueness."]
  ]);

  add("fc-cq3-", "chem-qc", ["C1", "C5", "C2"], [
    ["Which statistic partitions total variance into repeatability, between-run and between-day components?", "<b>Nested analysis of variance (ANOVA)</b>, the <i>statistical basis</i> of a precision study. The paired t-test compares means, and the F-test compares variances."]
  ]);

  add("fc-cq4-", "chem-qc", ["C5", "C1", "C2"], [
    ["Why can a method with 20% proportional bias still show r = 0.99?", "The <b>correlation coefficient</b> measures linear association, <i>not</i> agreement; a wide sample range inflates it. Use <b>Deming</b> or <b>Passing–Bablok</b> regression and a <b>Bland–Altman</b> plot instead."],
    ["Linearity vs analytical measuring range vs reportable range?", "<b>Linearity</b> is proportional response; the <b>analytical measuring range</b> is the interval with acceptable imprecision and bias; the <b>reportable range</b> includes <i>validated</i> dilutions."],
    ["CLSI EP17: how is the limit of blank estimated?", "<b>LOB</b> = mean blank + <b>1.645 SD</b>. <i>LOD</i> adds 1.645 SD of a low sample; LOQ is the lowest level meeting a predefined CV goal."]
  ]);

  add("fc-cq5-", "chem-qc", ["C1", "C5", "C11"], [
    ["What does metrological traceability mean for a patient result?", "An <i>unbroken</i> chain of calibrations, each with stated uncertainty, linking the result to a <b>reference measurement procedure</b> or <b>certified reference material</b> (ISO 17511). <b>Commutability</b> of calibrators must also be documented."]
  ]);

  add("fc-cq6-", "chem-qc", ["C1", "C11", "C2"], [
    ["What must be documented after telephoning a critical value?", "The result, the recipient's name, the time and a <b>read-back</b>. Notification compliance is a post-analytical <b>quality indicator</b> and must be <i>documented</i>."],
    ["First LEAN step when STAT turnaround time is above target?", "Measure each timestamp and draw a <b>value stream map</b> to separate value-added from <b>non-value-added</b> time. Then use <b>Pareto</b> and <b>5 Whys</b> to find the <b><i>bottleneck</i></b>."]
  ]);

  add("fc-cq7-", "chem-qc", ["C11", "C1", "C2"], [
    ["How is the FMEA risk priority number calculated?", "<b>RPN = severity × occurrence × detectability</b>. High scores are prioritised, and scores are recalculated after corrective action to show <i>residual risk</i>."]
  ]);

  add("fc-cq8-", "chem-qc", ["C11", "C1"], [
    ["What is a vertical audit?", "Following <i>one patient sample</i> from request to report, checking identity, collection, analysis, QC, verification and reporting. It gathers <b>objective evidence</b> of whether practice matches the SOP."]
  ]);

  add("fc-cq9-", "chem-qc", ["C11", "C1", "C13"], [
    ["Five metadata elements every controlled SOP must carry?", "Unique identifier, <b>version</b>, effective date, approver and <b>review date</b> — plus revision history and controlled distribution. Obsolete versions must be <i>withdrawn</i>."],
    ["Name three methods used to assess staff competency.", "<b>Direct observation</b>, <b>blind samples</b> and <i>review</i> of QC/EQA performance. <b>Problem-solving</b> scenarios and records review are also used."]
  ]);

  add("fc-cq10-", "chem-qc", ["C11", "C1", "C2"], [
    ["QC, QA and QMS — which contains which?", "<b>QC</b> is one component of <b>QA</b>, and QA is one component of the <b>QMS</b>. QC judges the <i>run</i>; QA governs the total testing process; the QMS governs the organisation."]
  ]);

  add("fc-cq11-", "chem-qc", ["C11", "C13", "C1"], [
    ["ISO 15189 accreditation vs Philippine DOH licensure?", "<b>Accreditation</b> is <i>voluntary</i> third-party attestation of competence by the <b>Philippine Accreditation Bureau</b>; <b>licensure</b> under <b>DOH AO 2021-0037</b> is mandatory permission to operate."]
  ]);

  add("fc-cq12-", "chem-qc", ["C1", "C5", "C11"], [
    ["Why compare analysers by cost per reportable result, not reagent price?", "It includes calibrators, controls, consumables, service, downtime, training and staff time — the <b>total cost of ownership</b>. A low reagent price can <i>hide</i> expensive calibration and QC."]
  ]);

  add("fc-cq13-", "chem-qc", ["C1", "C2", "C11"], [
    ["Give two demand-management tools that reduce duplicate chemistry testing.", "<b>Minimum retest intervals</b> and <b>duplicate-order alerts</b> in <i>clinical decision support</i>. <b>Reflex testing</b> also replaces unnecessary panels."]
  ]);

  add("fc-cq14-", "chem-qc", ["C1", "C2", "C13"], [
    ["Difference between fixed and variable costs in the laboratory?", "<b>Fixed costs</b> include equipment, space and salaried staff; <b>variable costs</b> include reagents, controls and consumables. Automation <i>shifts</i> cost from staff to equipment and consumables."]
  ]);

  add("fc-cq15-", "chem-qc", ["C11", "C1", "C13"], [
    ["How should quality indicators be displayed to distinguish real change from random variation?", "On <b>run charts</b> or statistical process control charts, <i>not</i> by comparing single months. <b>Benchmark</b> against peers and act through <b>PDCA</b>."]
  ]);
})();
