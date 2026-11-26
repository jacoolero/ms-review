/* Clinical Chemistry — proteins, enzymes & markers: set C (Philippine laboratory practice, hs-cTn pathways, macroenzymes, biotin, CSF proteins) */
window.QBANK.push(
{
  id: "cc271", domain: "chem-protein", star: true,
  q: "Discuss troponin testing in Philippine hospitals: the access gap, assay choices, turnaround time and what a laboratory can do to make the result clinically useful.",
  tags: ["troponin", "Philippines", "access", "point-of-care", "turnaround"],
  keypoints: ["high-sensitivity troponin", "99th percentile", "point-of-care", "send-out", "turnaround time", "serial sampling", "delta", "rise and fall", "lithium heparin", "haemolysis", "critical value", "PhilHealth case rate", "overdiagnosis", "transfer delay", "assay-specific"],
  answer: `
    <h4>The access gap</h4>
    <p>Cardiac troponin is the biomarker that defines myocardial infarction, but in the Philippines access is uneven. Tertiary centres in Metro Manila and large cities run <strong>high-sensitivity troponin</strong> assays around the clock. Many secondary and district hospitals depend on <strong>point-of-care</strong> devices, send specimens out to a reference laboratory, or have no troponin at all. A test that is available only on weekdays, or whose result arrives after the patient has been transferred, cannot support a 0/1-hour pathway.</p>
    <div class="table-wrap"><table>
      <tr><th>Setting</th><th>Typical pathway</th><th>Main limitation</th></tr>
      <tr><td>Tertiary private or government hospital</td><td>hs-cTn on a central analyser, 24 hours</td><td>Cost, congestion, delayed phlebotomy</td></tr>
      <tr><td>Secondary hospital</td><td>Point-of-care or once-daily send-out</td><td>Imprecision, no serial delta, transport time</td></tr>
      <tr><td>District or rural facility</td><td>Referral or no testing</td><td>Transfer delay, out-of-pocket cost</td></tr>
    </table></div>
    <h4>Clinical consequences</h4>
    <p>Where only a single value is available, clinicians may rule in infarction on a mildly raised result, producing <strong>overdiagnosis</strong> and unnecessary admissions. Where no assay is available, non-ST-elevation infarction is missed and the patient is discharged with gastritis or musculoskeletal pain. A <strong>PhilHealth case rate</strong> bundles laboratory costs into the admission, so the hospital has little financial incentive to add serial troponins.</p>
    <h4>What the laboratory can do</h4>
    <ul>
      <li>Print the platform and the <strong>assay-specific</strong> <strong>99th percentile</strong> upper reference limit on every report, with sex-specific limits where available.</li>
      <li>Protect <strong>turnaround time</strong>: stat priority, a defined threshold for <strong>critical value</strong> call-back, and audit of receipt-to-release time.</li>
      <li>Insist on <strong>serial sampling</strong> with two timed specimens and a recorded <strong>delta</strong>; a single result cannot show <strong>rise and fall</strong>.</li>
      <li>Use <strong>lithium heparin</strong> plasma for most hs-cTn assays, reject <strong>haemolysis</strong>, and never mix platforms within one patient's series.</li>
      <li>Agree with administrators whether a point-of-care device is acceptable given its imprecision, before it displaces a central assay.</li>
    </ul>
    <p>The practical answer is not the most sensitive analyser everywhere but a documented, audited pathway at each level of the health system.</p>
  `,
  tip: "Anchor the answer on the service tier: the same biomarker needs a different pathway in a district hospital and a tertiary centre.",
  sources: ["C9", "C1", "C18", "C13"]
},
{
  id: "cc272", domain: "chem-protein",
  q: "Discuss tumour marker testing in the Philippines: which markers are available, how cost shapes ordering, and how to use them rationally in a setting of limited resources.",
  tags: ["tumour markers", "Philippines", "cost", "stewardship", "AFP"],
  keypoints: ["alpha-fetoprotein", "CEA", "CA-125", "CA19-9", "PSA", "β-hCG", "thyroglobulin", "send-out", "out of pocket", "PhilHealth", "screening", "monitoring", "hepatitis B", "tuberculosis", "false positive", "same platform"],
  answer: `
    <h4>What is available</h4>
    <p><strong>Alpha-fetoprotein</strong>, <strong>CEA</strong>, <strong>CA-125</strong>, <strong>PSA</strong> and <strong>β-hCG</strong> are offered by most tertiary hospital laboratories and large commercial chains. <strong>CA19-9</strong>, CA15-3, HE4, <strong>thyroglobulin</strong> and calcitonin are less widely available and are often sent to a reference laboratory, adding days to the result. Assay platforms differ, so a value cannot be compared across institutions.</p>
    <h4>Cost and who pays</h4>
    <p>Each marker is usually charged separately, and a panel of five adds up quickly for an outpatient paying out of pocket. <strong>PhilHealth</strong> does not pay for tumour markers as a <strong>screening</strong> benefit; in admitted patients the cost sits inside the case rate, and outpatients usually pay <strong>out of pocket</strong> or through an HMO. Price therefore shapes ordering, and clinicians may request one cheap marker rather than the correct one.</p>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Established use</th><th>Main trap</th></tr>
      <tr><td>AFP</td><td>Hepatocellular carcinoma surveillance with ultrasound in chronic <strong>hepatitis B</strong></td><td>Raised in hepatitis flare and cirrhosis</td></tr>
      <tr><td>CEA</td><td><strong>Monitoring</strong> colorectal cancer after resection</td><td>Smoking, cirrhosis, benign bowel disease</td></tr>
      <tr><td>CA-125</td><td>Ovarian cancer monitoring</td><td>Endometriosis, <strong>tuberculosis</strong>, ascites, menstruation</td></tr>
      <tr><td>PSA</td><td>Monitoring and shared decision on screening</td><td>Benign prostatic hyperplasia, prostatitis, instrumentation</td></tr>
      <tr><td>β-hCG</td><td>Gestational trophoblastic disease and germ cell tumours</td><td>Pregnancy, heterophile interference</td></tr>
    </table></div>
    <h4>Rational ordering</h4>
    <ul>
      <li>A marker supports diagnosis; it does not make it, and tissue or imaging is still required.</li>
      <li>Use the marker that fits the tumour, then follow the <strong>same platform</strong> for monitoring.</li>
      <li>Do not screen asymptomatic people with a panel; <strong>false positive</strong> results generate costly imaging.</li>
      <li>Interpret against the local disease mix, including tuberculosis and chronic hepatitis B.</li>
    </ul>
    <p>Stewardship here means matching the test to a defined clinical question, not restricting access alone.</p>
  `,
  tip: "Separate diagnosis, prognosis and monitoring — most marker requests in practice are monitoring questions.",
  sources: ["C18", "C17", "C1", "C3"]
},
{
  id: "cc273", domain: "chem-protein", star: true,
  q: "Discuss the laboratory diagnosis of multiple myeloma in the Philippines: the role of serum protein electrophoresis and immunofixation, the availability and cost of testing, and the causes of diagnostic delay.",
  tags: ["myeloma", "SPEP", "immunofixation", "free light chains", "Philippines"],
  keypoints: ["M-protein", "globulin gap", "serum protein electrophoresis", "immunofixation", "serum free light chains", "Bence Jones protein", "CRAB", "renal impairment", "hypercalcaemia", "bone pain", "send-out", "turnaround", "reflex testing", "daratumumab", "cost"],
  answer: `
    <h4>Why the pathway matters</h4>
    <p>Multiple myeloma usually presents with bone pain, anaemia, <strong>renal impairment</strong>, <strong>hypercalcaemia</strong> or recurrent infection. In the Philippines many patients reach a tertiary centre only after a fracture, a dialysis start or cord compression, because the initial tests are cheap but the confirmatory ones are not. <strong>Serum protein electrophoresis</strong>, <strong>immunofixation</strong> and <strong>serum free light chains</strong> are the laboratory core of the diagnosis.</p>
    <h4>Where testing is done</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Availability</th><th>Role</th></tr>
      <tr><td>Total protein, albumin, <strong>globulin gap</strong></td><td>Every licensed laboratory</td><td>Cheap screen; a gap above 40 g/L justifies electrophoresis</td></tr>
      <tr><td><strong>Serum protein electrophoresis</strong></td><td>Tertiary and private reference laboratories</td><td>Detects and quantifies the <strong>M-protein</strong></td></tr>
      <tr><td><strong>Immunofixation</strong></td><td>Fewer centres; often batched</td><td>Types the heavy and light chain</td></tr>
      <tr><td><strong>Serum free light chains</strong></td><td>Selected centres only</td><td>Light-chain and non-secretory disease, prognosis</td></tr>
      <tr><td>Urine electrophoresis and immunofixation</td><td>Reference laboratories</td><td><strong>Bence Jones protein</strong>; needs concentrated urine</td></tr>
    </table></div>
    <h4>Cost, delay and quality</h4>
    <p>Electrophoresis and immunofixation are charged individually and are seldom covered as outpatient benefits; free light chains are the most expensive and least available. Samples are often couriered, so a result may take one to two weeks, long enough for renal function to deteriorate. Laboratories can shorten the delay by running <strong>reflex testing</strong> whenever the globulin gap is raised, by batching immunofixation locally rather than sending both steps out, and by reporting an interpretive comment rather than a raw band.</p>
    <h4>What to report</h4>
    <ul>
      <li>The M-protein concentration and position, plus the isotype from immunofixation.</li>
      <li>The free light chain ratio and the involved chain, with the reference interval.</li>
      <li>Whether the urine contains a monoclonal light chain.</li>
      <li>A comment that a band may be transient, as in infection, or therapeutic, as with <strong>daratumumab</strong>.</li>
      <li>The <strong>CRAB</strong> features available from the same specimen: calcium, creatinine, haemoglobin and the bone survey.</li>
    </ul>
  `,
  tip: "Show the two-step logic: a cheap globulin gap triggers SPEP, and SPEP triggers immunofixation — that is how a resource-limited laboratory shortens diagnosis.",
  sources: ["C18", "C1", "C3", "S31"]
},
{
  id: "cc274", domain: "chem-protein",
  q: "Explain how PhilHealth pays for laboratory services, which packages include laboratory tests, and how this financing model affects test availability and clinical decisions in Philippine hospitals.",
  tags: ["PhilHealth", "case rate", "laboratory benefits", "health financing", "Konsulta"],
  keypoints: ["case rate", "Z benefit", "Konsulta", "primary care", "outpatient", "out of pocket", "HMO", "newborn screening", "DOTS", "dialysis", "bundle", "fee for service", "DOH AO 2021-0037", "utilisation"],
  answer: `
    <h4>How payment works</h4>
    <p>PhilHealth pays most inpatient care through <strong>case rate</strong>s: a fixed amount for a defined episode, whatever tests are done. Laboratory tests performed during that admission are therefore not reimbursed line by line; their cost is absorbed within the package. <strong>Outpatient</strong> laboratory services are largely paid <strong>out of pocket</strong>, through an HMO, or under a specific package. This structure, more than any clinical guideline, determines which tests a hospital can afford to offer routinely. The <strong>Konsulta</strong> package also supports diabetes and hypertension care, so glucose and lipid tests are among its most used laboratory items.</p>
    <h4>Packages that include laboratory work</h4>
    <div class="table-wrap"><table>
      <tr><th>Package</th><th>Laboratory content</th><th>Practical effect</th></tr>
      <tr><td>Case rate for a medical or surgical admission</td><td>All tests needed for the episode</td><td>No separate payment; <strong>utilisation</strong> is controlled by the hospital</td></tr>
      <tr><td><strong>Konsulta</strong> primary care package</td><td>Basic tests such as blood count, urinalysis, glucose, lipids and creatinine</td><td>Improves access at primary level with a limited menu</td></tr>
      <tr><td>Tuberculosis <strong>DOTS</strong> package</td><td>Sputum microscopy and rapid molecular testing</td><td>Diagnosis is funded; follow-up monitoring is thinner</td></tr>
      <tr><td><strong>Newborn screening</strong> package</td><td>Expanded newborn screening under RA 9288</td><td>Strong coverage for a defined panel</td></tr>
      <tr><td><strong>Dialysis</strong>, selected cancers and other <strong>Z benefit</strong> packages</td><td>Pre-dialysis chemistry, treatment monitoring and related tests</td><td>Recurrent costs; frequent monitoring required</td></tr>
    </table></div>
    <h4>Gaps and consequences</h4>
    <ul>
      <li>New or expensive tests — high-sensitivity troponin, free light chains, tumour markers — may have no line item and become patient-paid.</li>
      <li>Hospitals may limit repeat testing, which conflicts with protocols that require serial samples.</li>
      <li>Licensing under <strong>DOH AO 2021-0037</strong> sets the minimum service capability, but not the budget to deliver it.</li>
      <li>Patients who cannot pay may be tested late, after complications have developed.</li>
      <li>A <strong>fee for service</strong> model in private practice rewards volume, so panels expand while essential tests remain unavailable.</li>
    </ul>
    <p>The laboratory should know which tests are bundled, which are chargeable and which belong to a package, so that it can advocate for essential tests and explain delays honestly.</p>
  `,
  tip: "Say clearly that case rates are bundles, not fee-for-service — every downstream argument about test utilisation follows from that.",
  sources: ["C18", "C19", "C16", "C13", "S33"]
},
{
  id: "cc275", domain: "chem-protein",
  q: "Discuss the use of dengue and COVID-19 biomarkers in Philippine practice: which tests are time-dependent, what the inflammatory markers add, and the traps in interpreting them.",
  tags: ["dengue", "COVID-19", "NS1", "D-dimer", "Philippines"],
  keypoints: ["NS1 antigen", "IgM", "IgG", "haematocrit", "platelets", "day of illness", "RA 11332", "RT-PCR", "antigen test", "antibody", "CRP", "D-dimer", "ferritin", "lymphopenia", "procalcitonin", "secondary infection"],
  answer: `
    <h4>Dengue: timing decides the test</h4>
    <p>Dengue is a notifiable disease under <strong>RA 11332</strong>, and laboratory confirmation is time-dependent. <strong>NS1 antigen</strong> is most sensitive in the first five days of illness; <strong>IgM</strong> becomes detectable from about day five, and <strong>IgG</strong> indicates later or <strong>secondary infection</strong>. A negative NS1 after day five does not exclude dengue. The full blood count is not diagnostic, but a rising <strong>haematocrit</strong> with falling <strong>platelets</strong> is the practical warning signal, and transaminase elevation supports the diagnosis.</p>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Best window</th><th>Interpretation trap</th></tr>
      <tr><td>NS1 antigen</td><td>Days 0–5</td><td>Less sensitive in secondary infection and after day five</td></tr>
      <tr><td>IgM</td><td>Day 5 onward</td><td>Cross-reacts with other flaviviruses; may persist for months</td></tr>
      <tr><td>IgG</td><td>Late or convalescent</td><td>A single positive cannot date the infection</td></tr>
      <tr><td>Haematocrit and platelets</td><td>Serial samples</td><td>Single values are unhelpful; the trend is the point</td></tr>
    </table></div>
    <h4>COVID-19: diagnosis is molecular</h4>
    <p>SARS-CoV-2 infection is diagnosed by <strong>RT-PCR</strong> or <strong>antigen test</strong>, not by <strong>antibody</strong>. Once the diagnosis is made, <strong>CRP</strong>, <strong>D-dimer</strong>, <strong>ferritin</strong>, lactate dehydrogenase, <strong>lymphopenia</strong> and troponin describe severity and complications. <strong>Procalcitonin</strong> is useful mainly to argue against bacterial co-infection. Antibody tests cannot prove acute infection and should not be used to clear a patient.</p>
    <h4>Ordering wisely</h4>
    <ul>
      <li>Choose the dengue test that matches the <strong>day of illness</strong>, and repeat the blood count rather than adding unrelated markers.</li>
      <li>Do not use a panel of inflammatory markers as a substitute for clinical assessment; trends matter more than single values.</li>
      <li>Private laboratories offer bundled dengue and COVID packages that may include tests of little value.</li>
      <li>During an outbreak, preserve reagents for the tests that change management and report notifiable results promptly.</li>
    </ul>
  `,
  tip: "For dengue, always state the day of illness before naming the test — that single fact decides NS1 versus IgM.",
  sources: ["C18", "C1", "S33", "S25"]
},
{
  id: "cc276", domain: "chem-protein", star: true,
  q: "Describe how a laboratory should validate and implement a high-sensitivity troponin 0/1-hour algorithm, including analytical requirements, delta values, special populations and audit.",
  tags: ["hs-cTn", "0/1h algorithm", "validation", "delta", "audit"],
  keypoints: ["limit of detection", "sex-specific 99th percentile", "imprecision", "CLSI EP28", "EP15", "delta", "rule-out", "rule-in", "observe zone", "assay-specific", "chronic kidney disease", "atrial fibrillation", "early presenter", "turnaround time", "30-day outcomes", "pathway audit"],
  answer: `
    <h4>Prerequisites before the algorithm</h4>
    <p>A rapid rule-out pathway is only as good as the assay behind it. The laboratory must document the <strong>limit of detection</strong>, verify a <strong>sex-specific 99th percentile</strong> upper reference limit, and show an <strong>imprecision</strong> of 10% or less at that limit. Verification follows <strong>CLSI EP28</strong> and <strong>EP15</strong> logic: at least 20 reference individuals for transfer, more if the local population differs. The assay must also be available continuously, because a pathway that pauses at night collapses into a single admission sample.</p>
    <h4>The 0/1-hour logic</h4>
    <div class="table-wrap"><table>
      <tr><th>Zone</th><th>Typical criteria</th><th>Action</th></tr>
      <tr><td><strong>Rule-out</strong></td><td>Very low baseline value, or low value with a small absolute change</td><td>Discharge with follow-up if pain is typical and onset exceeds three hours</td></tr>
      <tr><td><strong>Observe zone</strong></td><td>Neither rule-out nor rule-in</td><td>Third sample at three hours, or imaging</td></tr>
      <tr><td><strong>Rule-in</strong></td><td>High baseline value or a large absolute change</td><td>Urgent cardiology review and invasive strategy</td></tr>
    </table></div>
    <p>Every cut-off is <strong>assay-specific</strong>. The 0/1-hour values for one high-sensitivity troponin I method cannot be transferred to another, and the <strong>delta</strong> is defined by the manufacturer's validation, not by intuition.</p>
    <h4>Special populations</h4>
    <ul>
      <li><strong>Chronic kidney disease</strong> and dialysis: baseline values are often raised, so the absolute delta matters more than the starting value.</li>
      <li>Older patients and those with heart failure, <strong>atrial fibrillation</strong> or left ventricular hypertrophy: chronic elevation is common.</li>
      <li><strong>Early presenter</strong>: a single negative sample within one hour of pain onset cannot exclude infarction.</li>
      <li>Post-procedure and post-resuscitation patients: interpret the trend with the clinical event.</li>
    </ul>
    <h4>Audit the pathway</h4>
    <p>Track the proportion ruled out, median time to decision, <strong>turnaround time</strong> and <strong>30-day outcomes</strong> among discharged patients. Without <strong>pathway audit</strong>, a 0/1-hour algorithm is only a slogan.</p>
  `,
  tip: "Put validation before the algorithm: examiners reward the analytical prerequisites, not just the cut-off table.",
  sources: ["C9", "C1", "C5", "C2"]
},
{
  id: "cc277", domain: "chem-protein",
  q: "Discuss the interpretation of NT-proBNP in heart failure, focusing on age-related cut-offs, the confounders that mislead, assay differences and the limits of serial monitoring.",
  tags: ["NT-proBNP", "heart failure", "confounders", "obesity", "sacubitril"],
  keypoints: ["rule-out", "age-stratified", "obesity", "atrial fibrillation", "chronic kidney disease", "pulmonary embolism", "sepsis", "sacubitril", "neprilysin", "EDTA plasma", "standardisation", "same platform", "heart failure with preserved ejection fraction", "serial monitoring", "echocardiography"],
  answer: `
    <h4>Cut-offs are not universal</h4>
    <p>For acute breathlessness, a very low NT-proBNP makes heart failure unlikely; the commonly used <strong>rule-out</strong> value is 300 pg/mL. Rule-in values are <strong>age-stratified</strong>, approximately 450 pg/mL below 50 years, 900 pg/mL from 50 to 75 years and 1800 pg/mL above 75 years. These thresholds come from guideline studies, not from the reference interval, and they differ between BNP and NT-proBNP.</p>
    <div class="table-wrap"><table>
      <tr><th>Condition</th><th>Effect on NT-proBNP</th><th>Reason</th></tr>
      <tr><td><strong>Obesity</strong></td><td>Lower</td><td>Reduced synthesis and increased clearance</td></tr>
      <tr><td><strong>Atrial fibrillation</strong></td><td>Higher</td><td>Atrial wall stretch</td></tr>
      <tr><td><strong>Chronic kidney disease</strong></td><td>Higher</td><td>Reduced renal clearance</td></tr>
      <tr><td><strong>Sepsis</strong>, <strong>pulmonary embolism</strong></td><td>Higher</td><td>Right ventricular strain and inflammation</td></tr>
      <tr><td><strong>Sacubitril</strong>–valsartan</td><td>BNP rises; NT-proBNP less affected</td><td><strong>Neprilysin</strong> inhibition</td></tr>
    </table></div>
    <h4>Analytical points</h4>
    <ul>
      <li>NT-proBNP is more stable than BNP; <strong>EDTA plasma</strong> is usual, and the sample should not sit warm for hours.</li>
      <li>Methods are not standardised, so <strong>serial monitoring</strong> must use the <strong>same platform</strong>.</li>
      <li>Renal impairment raises values, but a very high result still carries a poor prognosis.</li>
      <li>Do not use the peptide alone to titrate diuretics; weight, symptoms, sodium and creatinine belong in the decision.</li>
    </ul>
    <h4>Where it helps</h4>
    <p>In the emergency department it excludes heart failure efficiently and identifies patients who need <strong>echocardiography</strong>. In the ward it supports a diagnosis of <strong>heart failure with preserved ejection fraction</strong>, where the physical examination is unreliable. It is a rule-out and severity tool, not a stand-alone diagnosis, and it must be read with the ECG, imaging and clinical probability. A value in the grey zone should prompt echocardiography rather than empirical diuresis, especially in older patients with comorbid disease.</p>
  `,
  tip: "Name obesity, atrial fibrillation and kidney disease as the three classic confounders — they explain most unexpected results.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc278", domain: "chem-protein",
  q: "Explain macroenzymes: how they form, which enzymes are affected, the laboratory methods used to confirm them, and why recognition prevents unnecessary investigation.",
  tags: ["macroenzymes", "macro-CK", "macro-AST", "PEG precipitation", "macroamylase"],
  keypoints: ["immunoglobulin-bound", "reduced clearance", "macro-CK type 1", "macro-CK type 2", "macro-AST", "macro-LDH", "macro-ALP", "macroamylase", "PEG precipitation", "gel filtration", "electrophoresis", "amylase creatinine clearance ratio", "benign", "persistent elevation", "normal aldolase"],
  answer: `
    <h4>What a macroenzyme is</h4>
    <p>A macroenzyme is an enzyme bound to an immunoglobulin or self-polymerised into a larger complex that the kidney cannot clear. The catalytic activity is usually normal; only clearance is reduced. The result is a persistently raised enzyme in a patient with no corresponding disease, often found incidentally and then pursued through repeated testing, imaging and even biopsy.</p>
    <div class="table-wrap"><table>
      <tr><th>Macroenzyme</th><th>Composition</th><th>Typical clue</th></tr>
      <tr><td><strong>Macro-CK type 1</strong></td><td>CK bound to IgG</td><td>Isolated persistent CK rise, <strong>normal aldolase</strong></td></tr>
      <tr><td><strong>Macro-CK type 2</strong></td><td>Mitochondrial CK oligomer</td><td>Associated with severe illness or malignancy</td></tr>
      <tr><td><strong>Macro-AST</strong></td><td>AST–immunoglobulin complex</td><td>Raised AST with normal ALT and GGT</td></tr>
      <tr><td><strong>Macro-LDH</strong></td><td>LDH–immunoglobulin complex</td><td>High LDH with a normal haemolysis screen</td></tr>
      <tr><td><strong>Macroamylase</strong></td><td>Amylase–immunoglobulin complex</td><td>High amylase, low urinary amylase, no pancreatitis</td></tr>
    </table></div>
    <h4>Recognition</h4>
    <ul>
      <li><strong>Persistent elevation</strong> for months with normal complementary tests.</li>
      <li>Enzyme activity that does not fit the clinical picture or the expected tissue pattern.</li>
      <li>Low urinary excretion of the enzyme despite high plasma activity.</li>
      <li>Discrepancy between methods, or a result that does not dilute linearly.</li>
    </ul>
    <h4>Confirmation</h4>
    <p><strong>PEG precipitation</strong> is the usual screen: immunoglobulin-bound enzyme precipitates and activity falls in the supernatant. <strong>Electrophoresis</strong>, immunofixation, <strong>gel filtration</strong> or heat stability can define the complex. For macroamylase, a low <strong>amylase creatinine clearance ratio</strong> supports the diagnosis. Macro-ALP and macro-GGT are described but rare.</p>
    <h4>Why it matters</h4>
    <p>Once identified, a macroenzyme is a <strong>benign</strong> explanation that stops further investigation. Macro-CK type 2 is the exception, since it has been linked to serious illness. Document the finding and tell the patient, so the same abnormal result is not reinvestigated at the next admission.</p>
  `,
  tip: "Lead with the paradox: high plasma activity with low urinary excretion means the molecule is too large to filter.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc279", domain: "chem-protein",
  q: "Discuss biotin interference in immunoassays: the assay chemistry involved, the analytes most affected, how to detect it, and the laboratory policies that limit harm.",
  tags: ["biotin", "immunoassay interference", "streptavidin", "false result", "supplements"],
  keypoints: ["streptavidin", "biotinylated antibody", "sandwich assay", "competitive assay", "falsely low", "falsely high", "TSH", "free T4", "troponin", "hCG", "washout", "48 to 72 hours", "alternative platform", "serial dilution", "over-the-counter supplement", "corrected report"],
  answer: `
    <h4>Why biotin is a laboratory problem</h4>
    <p>Biotin is a water-soluble vitamin sold in high-dose supplements for hair, skin and nails, and used experimentally in multiple sclerosis at doses of 100 to 300 mg daily. Many immunoassays use <strong>streptavidin</strong>-coated particles to capture <strong>biotinylated antibody</strong>. Free biotin in the sample competes for streptavidin, so capture fails and the signal no longer reflects the analyte.</p>
    <div class="table-wrap"><table>
      <tr><th>Assay format</th><th>Effect</th><th>Examples</th></tr>
      <tr><td><strong>Sandwich assay</strong></td><td><strong>Falsely low</strong></td><td>TSH, troponin, hCG, PSA, ferritin</td></tr>
      <tr><td><strong>Competitive assay</strong></td><td><strong>Falsely high</strong></td><td>Free T4, free T3, oestradiol, testosterone, vitamin D</td></tr>
    </table></div>
    <h4>The clinical pictures it creates</h4>
    <ul>
      <li>Apparent hyperthyroidism: a low TSH with a high free T4 in a well patient.</li>
      <li>A falsely low troponin in a patient who is actually having an infarction, the most dangerous direction.</li>
      <li>A falsely low hCG, which can miss pregnancy before surgery or imaging.</li>
      <li>Unexpected results in fertility and vitamin monitoring.</li>
    </ul>
    <h4>Detection and response</h4>
    <p>Ask about supplements on the requisition and at the bench when a result is implausible. Repeat after a <strong>washout</strong> of <strong>48 to 72 hours</strong>, or re-run on an <strong>alternative platform</strong> that is not biotin-streptavidin based. <strong>Serial dilution</strong>, neutralising beads and a heterophile antibody screen help exclude other interference. In the Philippine setting, where <strong>over-the-counter supplement</strong>s are common and labels may omit the dose, the history is often the only clue.</p>
    <h4>Laboratory policy</h4>
    <p>Document the interference, withdraw the affected result, and issue a <strong>corrected report</strong> with a comment. Review the assay insert for biotin tolerance and include the warning in the user manual. One case should prompt review of other results from the same patient and the same run.</p>
  `,
  tip: "Learn the direction by assay architecture, not by analyte: sandwich reads low, competitive reads high.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc280", domain: "chem-protein",
  q: "Discuss cerebrospinal fluid proteins beyond the routine cell count and glucose: pre-analytical care, measurement methods, the albumin quotient and the specialised markers now requested.",
  tags: ["CSF protein", "albumin quotient", "biomarkers", "neurofilament", "pre-analytical"],
  keypoints: ["traumatic tap", "pyrogallol red", "benzethonium", "biuret", "paired serum", "albumin quotient", "IgG index", "oligoclonal bands", "β-amyloid", "tau", "neurofilament light chain", "14-3-3", "send-out", "standardised collection", "intrathecal synthesis"],
  answer: `
    <h4>Pre-analytical care</h4>
    <p>Cerebrospinal fluid protein is low, so contamination by blood or a <strong>traumatic tap</strong> can dominate the result. Collect sequential tubes, send the last for chemistry when a tap is difficult, and centrifuge a bloody sample before analysis. Deliver promptly; the microbiology tube should not be refrigerated, although protein is stable briefly at 4 °C. Record the site of collection, because protein concentration differs between lumbar and ventricular samples.</p>
    <h4>Measurement</h4>
    <p>The biuret reaction is too insensitive at these concentrations. <strong>Pyrogallol red</strong>–molybdate and <strong>benzethonium</strong> turbidimetry are the routine methods, with immunoturbidimetry for specific proteins. Always interpret the result with a <strong>paired serum</strong> sample: the <strong>albumin quotient</strong>, cerebrospinal fluid albumin divided by serum albumin, separates barrier dysfunction from local synthesis.</p>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>What it reflects</th><th>Main use</th></tr>
      <tr><td>Albumin quotient</td><td>Blood–cerebrospinal fluid barrier integrity</td><td>Meningitis, Guillain–Barré, stroke</td></tr>
      <tr><td><strong>IgG index</strong> and <strong>oligoclonal bands</strong></td><td><strong>Intrathecal synthesis</strong></td><td>Multiple sclerosis, neurosyphilis</td></tr>
      <tr><td><strong>β-amyloid</strong> 42 and <strong>tau</strong></td><td>Amyloid and neurofibrillary pathology</td><td>Alzheimer disease, specialist practice</td></tr>
      <tr><td><strong>Neurofilament light chain</strong></td><td>Axonal injury</td><td>Multiple sclerosis activity, neurodegeneration</td></tr>
      <tr><td><strong>14-3-3</strong></td><td>Rapid neuronal destruction</td><td>Creutzfeldt–Jakob disease support</td></tr>
    </table></div>
    <h4>Access and interpretation</h4>
    <p>In the Philippines, specialised markers such as amyloid, tau and neurofilament are <strong>send-out</strong> tests with long turnaround and high cost, so they belong to specialist evaluation rather than routine panels. <strong>Standardised collection</strong>, a paired serum sample and a consistent platform matter more than the number of markers ordered. Record the collection time, tube number and any blood contamination on the request form. A normal total protein does not exclude intrathecal synthesis, and a raised protein alone does not identify its cause.</p>
  `,
  tip: "Insist on paired serum and a non-bloody sample: without both, the albumin quotient and IgG index are uninterpretable.",
  sources: ["C1", "C3", "C2"]
}
);
