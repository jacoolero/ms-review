/* Clinical Chemistry — renal, electrolytes & acid–base, part C */
window.QBANK.push(
{
  id: "cc281", domain: "chem-renal", star: true,
  q: "Discuss the burden of chronic kidney disease and dialysis in the Philippines, and the laboratory's role in early detection and staging.",
  tags: ["CKD", "dialysis burden", "Philippines", "albuminuria"],
  keypoints: ["diabetic nephropathy", "hypertensive nephrosclerosis", "albuminuria", "eGFR", "CKD staging", "late presentation", "haemodialysis", "peritoneal dialysis", "PhilHealth", "catastrophic expenditure", "national registry", "creatinine standardization", "urine albumin-to-creatinine ratio", "chronicity", "referral"],
  answer: `
    <h4>Scale of the problem</h4>
    <p>Chronic kidney disease is common in the Philippines and is driven mainly by <strong>diabetic nephropathy</strong> and <strong>hypertensive nephrosclerosis</strong>, with glomerulonephritis, obstructive uropathy and drug or herbal nephrotoxicity contributing. Community surveys and hospital series report roughly one in ten adults with reduced eGFR or <strong>albuminuria</strong>, yet most are unaware. Because symptoms appear late, many patients first present in stage 5 with uraemia, pulmonary oedema or hyperkalaemia and start dialysis as an emergency, which is the pattern of <strong>late presentation</strong>.</p>
    <h4>Dialysis burden</h4>
    <p><strong>Haemodialysis</strong> dominates; <strong>peritoneal dialysis</strong> remains a minority despite a PD-first policy. Units cluster in Metro Manila, Cebu and other cities, so patients outside urban centres travel long distances or relocate. Repeated sessions, erythropoietin, laboratory monitoring and transport produce <strong>catastrophic expenditure</strong>; <strong>PhilHealth</strong> case rates and Malasakit assistance reduce but do not remove out-of-pocket costs, and many patients stop treatment.</p>
    <div class="table-wrap"><table>
      <tr><th>Stage</th><th>Laboratory marker</th><th>Action</th></tr>
      <tr><td>G1–G2</td><td>eGFR normal or mildly reduced, ACR &lt;30 mg/g</td><td>Treat risk factors, repeat annually</td></tr>
      <tr><td>G3a–G3b</td><td>eGFR 30–59</td><td>Nephrology referral, monitor potassium and bicarbonate</td></tr>
      <tr><td>G4</td><td>eGFR 15–29</td><td>Plan access, vaccinate, review drugs</td></tr>
      <tr><td>G5</td><td>eGFR &lt;15</td><td>Dialysis or transplant work-up</td></tr>
    </table></div>
    <h4>What the laboratory should do</h4>
    <ul>
      <li>Use <strong>creatinine standardization</strong> and report eGFR with the <strong>urine albumin-to-creatinine ratio</strong>.</li>
      <li>Confirm <strong>chronicity</strong> with repeat testing after three months, not a single value.</li>
      <li>Screen people with diabetes, hypertension, family history and older age, and flag critical potassium and bicarbonate results.</li>
      <li>Support a <strong>national registry</strong> with consistent staging and coding so that need and outcomes become visible.</li>
    </ul>
    <p>Accurate <strong>CKD staging</strong> and timely <strong>referral</strong> delay progression and allow planned rather than emergency dialysis.</p>
  `,
  tip: "Anchor the answer in late presentation and cost, then show how eGFR plus ACR drives staging and referral.",
  sources: ["C7", "C16", "C18", "C13"]
},
{
  id: "cc282", domain: "chem-renal", star: true,
  q: "Explain PhilHealth coverage of haemodialysis in the Philippines and its implications for laboratory monitoring and access to care.",
  tags: ["PhilHealth", "haemodialysis", "case rate", "UHC"],
  keypoints: ["case rate", "156 sessions", "90 sessions", "peritoneal dialysis", "no balance billing", "Universal Health Care Act", "Z benefit", "accreditation", "laboratory monitoring", "out-of-pocket", "catastrophic", "nephrologist", "dialysis unit", "PhilHealth circular", "point-of-care"],
  answer: `
    <h4>How the benefit is structured</h4>
    <p>PhilHealth pays dialysis through a prospective <strong>case rate</strong> rather than fee-for-service. The haemodialysis package covers a fixed number of sessions per year; the annual ceiling was raised from <strong>90 sessions</strong> to <strong>156 sessions</strong> in the 2024 benefit adjustments, and a separate <strong>peritoneal dialysis</strong> package exists for patients who choose that modality. Payment requires facility <strong>accreditation</strong> of the <strong>dialysis unit</strong>, a qualified <strong>nephrologist</strong> and an eligible member. Rates and session caps are revised by <strong>PhilHealth circular</strong>, so the current issuance must be checked before quoting figures.</p>
    <h4>Laboratory implications</h4>
    <ul>
      <li>Pre-dialysis baseline tests include creatinine, electrolytes, bicarbonate, calcium, phosphate, albumin, haemoglobin and hepatitis B serology.</li>
      <li>Monthly or protocol <strong>laboratory monitoring</strong> supports adequacy, anaemia and bone-mineral management, and results must be documented in the chart.</li>
      <li>Because the case rate is inclusive, duplicate charging for tests already bundled is audited; clinicians should know which tests are separately claimable.</li>
      <li><strong>Point-of-care</strong> glucose and haemoglobin are useful but do not replace formal laboratory values.</li>
    </ul>
    <h4>Access and gaps</h4>
    <div class="table-wrap"><table>
      <tr><th>Mechanism</th><th>Effect</th><th>Remaining gap</th></tr>
      <tr><td>Case rate</td><td>Predictable payment per session</td><td>Transport, medicines, some tests</td></tr>
      <tr><td><strong>No balance billing</strong></td><td>Protects indigent patients in government facilities</td><td>Not universal for outpatients</td></tr>
      <tr><td><strong>Universal Health Care Act</strong></td><td>Expands primary care and financial protection</td><td>Implementation varies by locality</td></tr>
      <tr><td><strong>Z benefit</strong></td><td>Catastrophic illness support</td><td>Limited slots and documentary burden</td></tr>
    </table></div>
    <p>Coverage reduces <strong>catastrophic</strong> spending but does not guarantee continuity. Patients still face <strong>out-of-pocket</strong> costs, and units in poor areas may be unable to provide the full monitoring panel. A laboratory that reports results promptly and avoids unnecessary repeat testing helps keep the package sustainable.</p>
  `,
  tip: "Name the case-rate model and the 156-session ceiling, then separate what is covered from what remains out-of-pocket.",
  sources: ["C18", "C16", "C7"]
},
{
  id: "cc283", domain: "chem-renal", star: true,
  q: "Critically appraise eGFR equations in Filipinos, including the implementation of CKD-EPI 2021 in local laboratories.",
  tags: ["eGFR", "CKD-EPI 2021", "Filipino", "cystatin C"],
  keypoints: ["CKD-EPI 2021", "race coefficient", "MDRD", "muscle mass", "cystatin C", "creatinine standardization", "IDMS", "albumin-to-creatinine ratio", "eGFR category", "reclassification", "steady state", "pregnancy", "amputation", "creatine supplements", "trimethoprim"],
  answer: `
    <h4>Why the equation matters</h4>
    <p>Creatinine-based eGFR is the practical index of filtration, but creatinine generation depends on <strong>muscle mass</strong>, diet and drugs. Early equations such as <strong>MDRD</strong> were derived in mostly White and Black patients with established kidney disease and included a <strong>race coefficient</strong> that was never validated in Filipinos. <strong>CKD-EPI 2021</strong> removed that coefficient and performs at least as well overall, which suits a population in which the old "Asian" adjustment was crude and inconsistent.</p>
    <h4>Local performance and caveats</h4>
    <ul>
      <li>Philippine validation studies generally favour CKD-EPI over MDRD, but no locally derived equation is in routine use.</li>
      <li>Low muscle mass, <strong>amputation</strong>, cachexia and high muscle mass bias every creatinine equation; <strong>cystatin C</strong> adds accuracy when available.</li>
      <li><strong>Creatine supplements</strong>, <strong>trimethoprim</strong>, cimetidine and flucytosine raise creatinine without reducing filtration.</li>
      <li>The equation assumes a <strong>steady state</strong>, so it is invalid in acute kidney injury and unreliable in <strong>pregnancy</strong>.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Equation</th><th>Inputs</th><th>Local note</th></tr>
      <tr><td>MDRD</td><td>Creatinine, age, sex, race</td><td>Underestimates at high GFR; race term obsolete</td></tr>
      <tr><td><strong>CKD-EPI 2021</strong></td><td>Creatinine, age, sex</td><td>Race-free; preferred by KDIGO 2024</td></tr>
      <tr><td>CKD-EPI creatinine–cystatin C</td><td>Both markers, age, sex</td><td>Confirmatory when accuracy matters</td></tr>
    </table></div>
    <h4>Implementing CKD-EPI 2021</h4>
    <p>Implementation is not just a formula change. The laboratory must confirm <strong>creatinine standardization</strong> against <strong>IDMS</strong> reference material, update the laboratory information system, remove the race field, suppress the old equation and recalculate historical values cautiously. Clinicians need education that a modest <strong>reclassification</strong> near a threshold is expected and that serial results should use one equation. Reporting the <strong>eGFR category</strong> together with the <strong>albumin-to-creatinine ratio</strong> gives the KDIGO risk grid and prevents over-reliance on a single number.</p>
  `,
  tip: "Defend CKD-EPI 2021 on validation and race-free design, then list the non-renal factors that still mislead.",
  sources: ["C12", "C7", "C16", "C3"]
},
{
  id: "cc284", domain: "chem-renal", star: true,
  q: "Describe the laboratory monitoring of kidney transplant recipients in the Philippines, including immunosuppression, infection and metabolic complications.",
  tags: ["kidney transplant", "tacrolimus", "BK virus", "Philippines"],
  keypoints: ["tacrolimus trough", "donor-specific antibodies", "BK PCR", "CMV PCR", "protocol biopsy", "graft function", "post-transplant diabetes", "CKD-mineral bone disease", "tuberculosis screening", "hepatitis B", "living donor", "PhilHealth", "therapeutic drug monitoring", "creatinine", "proteinuria"],
  answer: `
    <h4>Graft function</h4>
    <p><strong>Creatinine</strong> and eGFR are measured frequently early after transplantation and at every review thereafter. A rising value may indicate rejection, calcineurin-inhibitor toxicity, obstruction, infection or recurrence of the original disease, so the trend matters more than one result. Urine <strong>proteinuria</strong> and microscopic examination screen for de novo glomerular disease, and <strong>protocol biopsy</strong> confirms histological diagnoses such as antibody-mediated rejection or polyomavirus nephropathy.</p>
    <h4>Immunosuppression and immunity</h4>
    <ul>
      <li><strong>Tacrolimus trough</strong> is the core of <strong>therapeutic drug monitoring</strong>; sampling time must be consistent because the drug has a narrow therapeutic index.</li>
      <li><strong>Donor-specific antibodies</strong> by single-antigen bead assay are checked before surgery and when graft function declines; mean fluorescence intensity stratifies risk.</li>
      <li>Mycophenolate exposure is monitored selectively, and adherence is reviewed at each visit.</li>
    </ul>
    <h4>Infection surveillance</h4>
    <div class="table-wrap"><table>
      <tr><th>Target</th><th>Test</th><th>Local comment</th></tr>
      <tr><td>BK polyomavirus</td><td>Plasma <strong>BK PCR</strong></td><td>High load prompts reduction of immunosuppression</td></tr>
      <tr><td>Cytomegalovirus</td><td><strong>CMV PCR</strong></td><td>Risk depends on donor and recipient serostatus</td></tr>
      <tr><td><strong>Tuberculosis</strong></td><td>IGRA or tuberculin test, chest radiograph</td><td><strong>Tuberculosis screening</strong> is essential in an endemic setting</td></tr>
      <tr><td><strong>Hepatitis B</strong></td><td>HBsAg, anti-HBc, HBV DNA</td><td>Reactivation risk with immunosuppression</td></tr>
    </table></div>
    <h4>Metabolic and Philippine issues</h4>
    <p>Calcineurin inhibitors cause hyperkalaemia, hypomagnesaemia and <strong>post-transplant diabetes</strong>; corticosteroids worsen glucose and bone loss. Calcium, phosphate, PTH and vitamin D monitor <strong>CKD-mineral bone disease</strong>. In the Philippines, <strong>living donor</strong> transplantation is encouraged, but cost, limited transplant centres and lifelong drug expenses remain barriers; <strong>PhilHealth</strong> packages help but do not cover every test. Scheduled creatinine, drug levels, PCR and metabolic panels, interpreted against the patient's own baseline, remain the backbone of care.</p>
  `,
  tip: "Organise the answer as graft, immunity, infection and metabolic effects, with one local barrier for each.",
  sources: ["C18", "C17", "C16", "C7"]
},
{
  id: "cc285", domain: "chem-renal", star: true,
  q: "Discuss urinalysis as performed in Philippine laboratories: pre-analytical standards, dipstick and microscopy pitfalls, and quality assurance.",
  tags: ["urinalysis", "microscopy", "dipstick", "Philippines"],
  keypoints: ["midstream clean-catch", "reagent strip", "ascorbic acid", "leukocyte esterase", "albumin", "microscopy", "squamous epithelial cells", "hyaline casts", "red cell morphology", "refrigeration", "AO 2021-0037", "EQA", "newborn screening", "pre-employment", "urine culture"],
  answer: `
    <h4>Pre-analytical practice</h4>
    <p>A <strong>midstream clean-catch</strong> specimen is collected in a clean container after genital cleaning, avoiding menstruation and strenuous exercise. The sample should be examined within one to two hours; if delayed, it is <strong>refrigeration</strong> that preserves cells and casts, although crystals may form and pH may drift. In barangay health centres and rural units, transport time is the commonest source of error, so collection and delivery should be scheduled together.</p>
    <h4>Dipstick pitfalls</h4>
    <ul>
      <li><strong>Ascorbic acid</strong> and high specific gravity can give a false-negative blood or glucose result.</li>
      <li>The protein pad detects <strong>albumin</strong> poorly at low concentration and misses light chains; a quantitative albumin-to-creatinine ratio is preferred for monitoring.</li>
      <li><strong>Leukocyte esterase</strong> suggests pyuria but can be false-negative with high glucose or protein and false-positive with contamination.</li>
      <li>Read strips at the specified time; delayed reading darkens colours and creates false positives.</li>
    </ul>
    <h4>Microscopy and reporting</h4>
    <div class="table-wrap"><table>
      <tr><th>Finding</th><th>Interpretation</th></tr>
      <tr><td><strong>Squamous epithelial cells</strong></td><td>Likely contamination; interpret cultures with caution</td></tr>
      <tr><td><strong>Hyaline casts</strong></td><td>Can be normal after exercise, fever or dehydration</td></tr>
      <tr><td>Dysmorphic red cells</td><td>Suggests glomerular bleeding</td></tr>
      <tr><td>White cell casts</td><td>Pyelonephritis or interstitial nephritis</td></tr>
    </table></div>
    <p>Microscopy should use a standardized volume and chamber, with counts per high-power field and consistent descriptions. <strong>Red cell morphology</strong> is operator-dependent and should not be over-read.</p>
    <h4>Quality assurance in local practice</h4>
    <p>Urinalysis is used for <strong>pre-employment</strong> screening, annual physical examinations and antenatal visits, often in high-volume batches. Laboratories licensed under <strong>AO 2021-0037</strong> must run reagent strip quality control, participate in <strong>EQA</strong>, and document training. <strong>Newborn screening</strong> under RA 9288 does not include urinalysis, so infant urine testing should be targeted rather than routine. A positive dipstick with symptoms warrants <strong>urine culture</strong>, not repeated strip testing alone.</p>
  `,
  tip: "Separate pre-analytical, strip and microscopy errors, then close with licensing and EQA to show local awareness.",
  sources: ["C13", "C18", "C19", "C1"]
},
{
  id: "cc286", domain: "chem-renal", star: true,
  q: "Evaluate novel biomarkers of acute kidney injury: their biology, clinical promise, and the reasons creatinine remains the anchor.",
  tags: ["AKI", "NGAL", "KIM-1", "biomarkers"],
  keypoints: ["creatinine lag", "cystatin C", "NGAL", "KIM-1", "TIMP-2", "IGFBP7", "interleukin-18", "L-FABP", "furosemide stress test", "sepsis", "cardiac surgery", "contrast", "dengue", "leptospirosis", "assay standardization"],
  answer: `
    <h4>The problem with creatinine</h4>
    <p>Serum creatinine rises only after a substantial fall in filtration and is influenced by <strong>creatinine lag</strong>, muscle mass, dilution and drugs that block tubular secretion. A patient can have established tubular injury with a normal value, especially in <strong>sepsis</strong> and after <strong>cardiac surgery</strong>. This delay limits early intervention and explains the search for injury markers.</p>
    <h4>Main biomarkers</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Origin</th><th>Comment</th></tr>
      <tr><td><strong>NGAL</strong></td><td>Neutrophil and tubular</td><td>Rises early; also raised in inflammation and malignancy</td></tr>
      <tr><td><strong>KIM-1</strong></td><td>Proximal tubule</td><td>Reflects tubular injury rather than filtration</td></tr>
      <tr><td><strong>TIMP-2</strong> and <strong>IGFBP7</strong></td><td>Tubular stress</td><td>Combined assay identifies patients at risk before creatinine rises</td></tr>
      <tr><td><strong>Interleukin-18</strong></td><td>Tubule</td><td>Studied in ischaemic and septic injury</td></tr>
      <tr><td><strong>L-FABP</strong></td><td>Proximal tubule</td><td>Lipid-binding protein released with oxidative stress</td></tr>
      <tr><td><strong>Cystatin C</strong></td><td>All nucleated cells</td><td>Less muscle-dependent; still affected by inflammation and steroids</td></tr>
    </table></div>
    <h4>Clinical use and limits</h4>
    <ul>
      <li>Risk stratification before <strong>contrast</strong>, surgery or nephrotoxic drugs, and early detection in intensive care.</li>
      <li>Prognosis and duration of injury; a persistent rise suggests ongoing damage.</li>
      <li>The <strong>furosemide stress test</strong> adds a functional challenge in selected patients.</li>
      <li>No biomarker has a proven specific therapy, and <strong>assay standardization</strong> is poor, so cut-offs are not transferable.</li>
    </ul>
    <h4>Philippine relevance</h4>
    <p><strong>Dengue</strong>, <strong>leptospirosis</strong>, sepsis and obstetric complications produce AKI in local practice, often in district hospitals where advanced markers are unavailable. Specimen timing, urine dilution and comorbid infection all change the result. Creatinine, urine output and urinalysis therefore remain the anchor. Biomarkers are best used as adjuncts in research or well-resourced units, with clear pre-analytical protocols and local validation before they change management, because a test that does not alter treatment adds cost without benefit.</p>
  `,
  tip: "Concede that biomarkers detect injury earlier but do not yet replace creatinine, urine output or clinical judgement.",
  sources: ["C7", "C1", "C3"]
},
{
  id: "cc287", domain: "chem-renal", star: true,
  q: "Explain the albumin-corrected anion gap and the strong ion approach to acid–base disorders, with a worked example.",
  tags: ["anion gap", "albumin", "Stewart", "strong ion gap"],
  keypoints: ["anion gap", "albumin correction", "hypoalbuminaemia", "delta ratio", "strong ion difference", "apparent SID", "effective SID", "strong ion gap", "lactate", "base excess", "unmeasured anions", "hyperchloraemia", "Henderson-Hasselbalch", "phosphate", "ketoacidosis"],
  answer: `
    <h4>Why the raw anion gap fails</h4>
    <p>The conventional <strong>anion gap</strong> is sodium minus chloride and bicarbonate. It is really a balance of unmeasured anions, and <strong>albumin</strong> is the largest. In <strong>hypoalbuminaemia</strong> the gap falls by about 2.5 mmol/L for every 1 g/dL fall in albumin, so a serious lactic acidosis can hide behind a "normal" value. The <strong>albumin correction</strong> restores sensitivity; phosphate and potassium contribute modestly and are sometimes included.</p>
    <div class="calc">Corrected AG = measured AG + 0.25 × (40 − albumin in g/L)
or AG + 2.5 × (4.0 − albumin in g/dL)
Example: Na 135, Cl 100, HCO3 12, albumin 20 g/L
AG = 23; corrected AG = 23 + 0.25 × 20 = 28</div>
    <p>The <strong>delta ratio</strong> compares the rise in gap with the fall in bicarbonate and detects a mixed disorder; a value above 2 suggests coexisting metabolic alkalosis, while a low value suggests a normal-gap acidosis.</p>
    <h4>The strong ion approach</h4>
    <p>Stewart's method treats pH as determined by the <strong>strong ion difference</strong>, total weak acids and pCO₂. The <strong>apparent SID</strong> is Na + K − Cl − bicarbonate; the <strong>effective SID</strong> is derived from albumin and <strong>phosphate</strong>. The difference between them is the <strong>strong ion gap</strong>, an estimate of <strong>unmeasured anions</strong> such as <strong>lactate</strong>, ketones and toxins. A normal <strong>base excess</strong> with a high strong ion gap still indicates an acidosis; <strong>hyperchloraemia</strong> lowers the SID and produces a normal-gap acidosis.</p>
    <div class="table-wrap"><table>
      <tr><th>Finding</th><th>Interpretation</th></tr>
      <tr><td>High corrected AG</td><td>Lactate, <strong>ketoacidosis</strong>, renal failure, toxin</td></tr>
      <tr><td>Normal AG, low SID</td><td><strong>Hyperchloraemia</strong>, diarrhoea, saline load</td></tr>
      <tr><td>High strong ion gap</td><td>Unmeasured anions despite a misleading gap</td></tr>
    </table></div>
    <p>The <strong>Henderson-Hasselbalch</strong> approach and the strong ion approach are complementary. The practical lesson is to correct the gap for albumin, calculate the delta ratio and question every "normal" gap in a hypoalbuminaemic patient.</p>
  `,
  tip: "Show the correction arithmetic and one mixed-disorder example; the formula alone is not an answer.",
  sources: ["C15", "C1", "C3"]
},
{
  id: "cc288", domain: "chem-renal", star: true,
  q: "Discuss sodium and potassium disorders as laboratory emergencies, including pseudohyponatraemia, SIADH and pseudohyperkalaemia.",
  tags: ["hyponatraemia", "SIADH", "hyperkalaemia", "pseudohyperkalaemia"],
  keypoints: ["pseudohyponatraemia", "indirect ion-selective electrode", "hyperglycaemia", "SIADH", "cerebral salt wasting", "urine osmolality", "urine sodium", "osmotic demyelination", "pseudohyperkalaemia", "thrombocytosis", "haemolysis", "EDTA contamination", "electrocardiogram", "transcellular shift", "hyperkalaemia"],
  answer: `
    <h4>Hyponatraemia: first exclude artefact</h4>
    <p><strong>Pseudohyponatraemia</strong> occurs with <strong>indirect ion-selective electrode</strong> methods when extreme hyperproteinaemia or hyperlipidaemia displaces plasma water; direct ISE and measured osmolality are normal. <strong>Hyperglycaemia</strong> dilutes sodium and requires correction. True hypotonic hyponatraemia is then classified by volume status, <strong>urine osmolality</strong> and <strong>urine sodium</strong>.</p>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Urine osm</th><th>Urine Na</th><th>Clue</th></tr>
      <tr><td><strong>SIADH</strong></td><td>&gt;100</td><td>&gt;30</td><td>Euvolemic, low uric acid</td></tr>
      <tr><td><strong>Cerebral salt wasting</strong></td><td>High</td><td>High</td><td>Hypovolaemia after brain injury</td></tr>
      <tr><td>Hypovolaemic</td><td>High</td><td>Low</td><td>GI or renal loss</td></tr>
      <tr><td>Primary polydipsia</td><td>Low</td><td>Low</td><td>Dilute urine, high intake</td></tr>
    </table></div>
    <p>Rapid correction of chronic hyponatraemia risks <strong>osmotic demyelination</strong>, so the rise is usually limited to 8–10 mmol/L in 24 hours and monitored frequently. Symptoms, the rate of onset and the measured osmolality decide how urgently hypertonic saline is needed.</p>
    <h4>Hyperkalaemia: artefact before emergency</h4>
    <p><strong>Pseudohyperkalaemia</strong> is common. <strong>Haemolysis</strong>, prolonged tourniquet or fist clenching, delayed separation, <strong>thrombocytosis</strong> and <strong>EDTA contamination</strong> release or concentrate potassium. A serum potassium exceeding plasma by more than 0.4 mmol/L supports the artefact. Repeat without stasis, use a heparin tube and inspect the sample.</p>
    <h4>True hyperkalaemia</h4>
    <p>Once confirmed, assess the <strong>electrocardiogram</strong> immediately: peaked T waves, widened QRS and sine-wave pattern are emergencies. Causes include renal failure, acidosis, <strong>transcellular shift</strong> from insulin deficiency or β-blockade, and drugs such as ACE inhibitors, spironolactone and trimethoprim. Treatment shifts potassium into cells and removes it, but the laboratory must communicate the result and the repeat value, because a normal-looking sample may be the artefact and a genuinely high one may be the last warning before arrest. A second specimen and a plasma potassium are the fastest way to settle the question.</p>
  `,
  tip: "Rule out artefact first, then use urine studies for sodium and ECG urgency for potassium.",
  sources: ["C1", "C3", "C15"]
},
{
  id: "cc289", domain: "chem-renal", star: true,
  q: "Discuss the osmolal gap: calculation, causes of a raised gap, and its limitations in toxic alcohol poisoning.",
  tags: ["osmolal gap", "toxic alcohol", "methanol", "ethylene glycol"],
  keypoints: ["osmolal gap", "freezing-point depression", "calculated osmolality", "methanol", "ethylene glycol", "isopropanol", "propylene glycol", "lactate gap", "ketoacidosis", "sensitivity", "high anion gap", "ethanol", "dialysis", "formate", "glycolate"],
  answer: `
    <h4>Definition and measurement</h4>
    <p>The <strong>osmolal gap</strong> is measured osmolality minus <strong>calculated osmolality</strong>, usually 2 × Na + glucose + urea (all in mmol/L). <strong>Freezing-point depression</strong> is the method of choice because it detects volatile alcohols that vapour-pressure osmometers miss. A gap below 10 mOsm/kg is generally normal, though the reference range depends on the formula and the analyser.</p>
    <div class="calc">Example: Na 140, glucose 6, urea 5
Calculated = 2(140) + 6 + 5 = 291
Measured = 341 → osmolal gap = 50 mOsm/kg</div>
    <h4>Causes of a raised gap</h4>
    <ul>
      <li><strong>Methanol</strong> and <strong>ethylene glycol</strong>: parent alcohols add osmoles, then their metabolites (<strong>formate</strong>, <strong>glycolate</strong>) produce a <strong>high anion gap</strong> acidosis.</li>
      <li><strong>Isopropanol</strong>: raises the gap with ketosis but little acidosis; <strong>propylene glycol</strong> from intravenous preparations also raises the gap, often with lactic acidosis.</li>
      <li><strong>Ethanol</strong>, mannitol, glycerol and severe <strong>ketoacidosis</strong> can raise the gap.</li>
      <li>Shock, renal failure and severe hyperlipidaemia alter the measured or calculated value.</li>
    </ul>
    <h4>Limitations</h4>
    <p>The gap is a screening clue, not a diagnostic test. <strong>Sensitivity</strong> is poor at low concentrations, and it may be normal late when the parent alcohol has been metabolised and the acidosis is established. A normal gap therefore does not exclude poisoning. The <strong>lactate gap</strong> and glycolate or formate assays help where available. Treatment should not wait for confirmatory results: consider <strong>dialysis</strong>, fomepizole or ethanol blockade and supportive care based on the history, pH and gap. The laboratory should report measured and calculated osmolality together, state the formula and method, and repeat testing as the clinical picture evolves.</p>
    <div class="table-wrap"><table>
      <tr><th>Toxin</th><th>Osmolal gap</th><th>Acidosis</th></tr>
      <tr><td>Ethanol</td><td>Raised</td><td>Mild</td></tr>
      <tr><td>Methanol</td><td>Raised early</td><td>High, late</td></tr>
      <tr><td>Ethylene glycol</td><td>Raised early</td><td>High, late</td></tr>
      <tr><td>Isopropanol</td><td>Raised</td><td>Ketosis, mild</td></tr>
    </table></div>
  `,
  tip: "Pair the gap with the anion gap and the timing: early gap, late acidosis. Never use a normal gap to exclude.",
  sources: ["C1", "C3", "C15"]
},
{
  id: "cc290", domain: "chem-renal", star: true,
  q: "Describe the metabolic evaluation of recurrent kidney stones and the role of renal tubular acidosis in stone formation.",
  tags: ["kidney stones", "RTA", "hypercalciuria", "urine pH"],
  keypoints: ["stone analysis", "calcium oxalate", "uric acid", "struvite", "cystine", "urine pH", "24-hour urine", "distal RTA", "hypercalciuria", "hypocitraturia", "nephrocalcinosis", "Fanconi syndrome", "type 4 RTA", "primary hyperparathyroidism", "xanthine"],
  answer: `
    <h4>First steps</h4>
    <p><strong>Stone analysis</strong> is the single most useful test and should be requested whenever a stone is recovered. It separates <strong>calcium oxalate</strong>, calcium phosphate, <strong>uric acid</strong>, <strong>struvite</strong>, <strong>cystine</strong> and rare xanthine stones. Serum calcium, phosphate, albumin, urate, creatinine and PTH screen for <strong>primary hyperparathyroidism</strong> and renal failure; a fasting <strong>urine pH</strong> and urinalysis are part of the minimum panel.</p>
    <h4>Metabolic work-up</h4>
    <ul>
      <li><strong>24-hour urine</strong> for volume, calcium, oxalate, citrate, urate, sodium and cystine, with a second collection if the first is inadequate.</li>
      <li><strong>Hypercalciuria</strong>, <strong>hypocitraturia</strong>, hyperoxaluria, hyperuricosuria and low volume are the common reversible risks.</li>
      <li>Screen for cystinuria in young patients or when a stone is radio-opaque, recurrent and familial.</li>
      <li>Review diet, fluids, drugs and bowel disease; enteric hyperoxaluria follows fat malabsorption.</li>
    </ul>
    <h4>Renal tubular acidosis and stones</h4>
    <div class="table-wrap"><table>
      <tr><th>Disorder</th><th>Urine pH</th><th>Stone clue</th></tr>
      <tr><td><strong>Distal RTA</strong></td><td>&gt;5.5 during acidosis</td><td>Calcium phosphate stones, <strong>nephrocalcinosis</strong></td></tr>
      <tr><td><strong>Proximal RTA</strong></td><td>&lt;5.5 once bicarbonate is low</td><td><strong>Fanconi syndrome</strong>, phosphaturia</td></tr>
      <tr><td><strong>Type 4 RTA</strong></td><td>&lt;5.5</td><td>Hyperkalaemia, usually no stones</td></tr>
      <tr><td>Urease infection</td><td>&gt;7</td><td><strong>Struvite</strong> staghorn calculi</td></tr>
    </table></div>
    <p>In <strong>distal RTA</strong>, impaired hydrogen ion secretion causes hypercalciuria, hypocitraturia and alkaline urine, so calcium phosphate precipitates. An incomplete form may need an acid-load or furosemide test. <strong>Fanconi syndrome</strong> causes glycosuria, aminoaciduria and phosphaturia with stones or nephrocalcinosis. Treatment is a high fluid intake, reduction of dietary sodium and oxalate, and alkali for RTA; allopurinol or urine alkalinisation is used for uric acid stones. The laboratory should report urine pH with the collection conditions, because a single random value can mislead.</p>
  `,
  tip: "Start with stone analysis, then split the causes by urine pH — that single axis organises the whole answer.",
  sources: ["C1", "C3", "C15"]
}
);
