/* Clinical Chemistry — part 11: advanced TDM, toxicology and Philippine laboratory practice */
window.QBANK.push(
{
  id: "cc311", domain: "chem-tox", star: true,
  q: "Discuss drug testing under RA 9165: the statutory framework, the screening-to-confirmation pathway, and the laboratory's obligations when a result may be used in court.",
  tags: ["RA 9165", "confirmatory testing", "drug testing", "Philippines"],
  keypoints: ["Comprehensive Dangerous Drugs Act", "DOH-accredited", "presumptive", "GC-MS or LC-MS/MS", "methamphetamine", "specimen-validity", "unique identifier", "chain of custody", "proficiency testing", "retention time", "cut-off", "raw chromatograms", "traceability"],
  answer: `
    <h4>Statutory framework</h4>
    <p>The Comprehensive Dangerous Drugs Act (<strong>RA 9165</strong>), its implementing rules and the DOH accreditation system make drug testing a regulated laboratory activity, not a bedside immunoassay. Testing is required for defined groups, including applicants for firearms and security posts, drivers, students, workers in safety-sensitive jobs, persons in rehabilitation and persons deprived of liberty. Because the result can affect liberty, employment and custody, the laboratory must be able to defend every step from donor to report.</p>
    <h4>Screening and confirmation</h4>
    <p>Screening is by validated immunoassay, usually on urine, with class cut-offs and specimen-validity checks:</p>
    <ul>
      <li>temperature, creatinine, specific gravity, pH and oxidants;</li>
      <li>a non-negative screen is <strong>presumptive</strong> and must never be reported as a confirmed positive;</li>
      <li>confirmation uses <strong>GC-MS or LC-MS/MS</strong> to identify the specific analyte, such as methamphetamine, and is interpreted against a documented cut-off and <strong>retention time</strong>.</li>
    </ul>
    <p>The report should name the method, the cut-off, the analyte and whether the result is screening or confirmed.</p>
    <h4>Accreditation and records</h4>
    <p>Only a laboratory <strong>accredited by the DOH</strong> may test for legal or employment purposes. Accreditation requires qualified staff, calibrated instruments, written procedures, internal QC, <strong>proficiency testing</strong>, secure storage and a documented <strong>chain of custody</strong>. The request, specimen label and report must share a <strong>unique identifier</strong>, and each transfer is signed and timed.</p>
    <h4>When the result is challenged</h4>
    <p>Expect cross-examination on sample identity, seal integrity, assay validation and analyst competence. Retain <strong>raw chromatograms</strong>, calibration and QC records for the required period. The laboratory's real defence is the <strong>traceability</strong> of the result, not the number itself.</p>
  `,
  tip: "Answer with the two-tier model and the paper trail: screening is presumptive, confirmation is specific, and traceability is the legal defence.",
  sources: ["S33", "C13", "C1"]
},
{
  id: "cc312", domain: "chem-tox", star: true,
  q: "Discuss DOH accreditation and quality management of drug-testing laboratories: requirements, inspection, proficiency testing and the common causes of failure.",
  tags: ["DOH accreditation", "quality management", "proficiency testing", "drug testing"],
  keypoints: ["RA 9165", "separate from the general clinical-laboratory licence", "qualified laboratory head", "trained analysts", "validated procedures", "defined cut-offs", "internal QC", "proficiency testing", "on-site inspection", "chain of custody", "confidentiality", "suspension", "document review", "corrective action"],
  answer: `
    <h4>Legal basis and scope</h4>
    <p>Drug-testing laboratories in the Philippines operate under <strong>RA 9165</strong> and the DOH rules that license and monitor them. Accreditation is <strong>separate from the general clinical-laboratory licence</strong>: it certifies competence for forensic and workplace testing, where results carry legal consequences. The scope covers screening laboratories, confirmatory laboratories and the collection sites that feed them.</p>
    <h4>What the inspector examines</h4>
    <ul>
      <li><strong>Personnel</strong>: a <strong>qualified laboratory head</strong>, <strong>trained analysts</strong>, documented competency and continuing education.</li>
      <li><strong>Facilities and equipment</strong>: secure accession area, calibrated instruments, controlled temperature, restricted access and biohazard handling.</li>
      <li><strong>Methods</strong>: <strong>validated procedures</strong> with <strong>defined cut-offs</strong>, uncertainty and confirmation pathways.</li>
      <li><strong>Quality</strong>: <strong>internal QC</strong>, external <strong>proficiency testing</strong>, <strong>corrective action</strong> and audit records.</li>
      <li><strong>Records</strong>: <strong>chain of custody</strong>, reports, retention and <strong>confidentiality</strong>.</li>
    </ul>
    <h4>Inspection and proficiency testing</h4>
    <p>Accreditation follows <strong>document review</strong> and an <strong>on-site inspection</strong>, and is maintained through periodic reassessment and satisfactory performance in proficiency testing. A laboratory that fails a proficiency panel, cannot trace a specimen or reports an unconfirmed positive should expect <strong>suspension</strong>. The laboratory must notify the DOH of changes in personnel, location or method.</p>
    <h4>Why accreditation fails</h4>
    <p>Common findings are stale procedures, missing signatures, inconsistent identifiers, uncalibrated balances or pipettes, absent QC charts, and analysts who cannot explain the confirmation criteria. These are quality-system failures rather than chemistry failures. A useful self-audit walks one specimen through collection, accession, analysis, confirmation and reporting, and asks whether an outsider could reconstruct the same conclusion from the records. A mock inspection with an external assessor exposes gaps before the DOH does.</p>
  `,
  tip: "Frame accreditation as a quality system, not an equipment list; the self-audit walk-through is the strongest closing point.",
  sources: ["C13", "C11", "S33"]
},
{
  id: "cc313", domain: "chem-tox", star: true,
  q: "Discuss methanol and ethylene glycol poisoning outbreaks: recognition, laboratory confirmation and the public-health response in the Philippine setting.",
  tags: ["methanol", "ethylene glycol", "outbreak", "toxic alcohols"],
  keypoints: ["outbreak", "informally distilled liquor", "alcohol dehydrogenase", "formate", "optic nerve", "oxalate", "osmolal gap", "high anion gap metabolic acidosis", "gas chromatography", "fomepizole", "haemodialysis", "RA 11332", "notifiable", "product testing"],
  answer: `
    <h4>Why outbreaks occur</h4>
    <p>Methanol poisoning in the Philippines is typically an <strong>outbreak</strong>, not a sporadic case: <strong>informally distilled liquor</strong> such as lambanog, or adulterated beverage, is shared at a gathering and several people present with blurred vision, vomiting and acidosis. Methanol is cheap and is sometimes added to increase potency. Ethylene glycol appears in antifreeze, coolants and industrial fluids, and occasionally in contaminated food or drink.</p>
    <h4>Clinical and laboratory signature</h4>
    <p>Both alcohols are relatively benign until <strong>alcohol dehydrogenase</strong> converts them. Methanol becomes <strong>formate</strong>, which injures the <strong>optic nerve</strong> and putamen; ethylene glycol becomes glycolate and <strong>oxalate</strong>, causing acidosis, hypocalcaemia and oxalate nephropathy. Early, the <strong>osmolal gap</strong> is high and the anion gap normal; later the osmolal gap closes and a <strong>high anion gap metabolic acidosis</strong> dominates. A normal osmolal gap therefore does not exclude poisoning.</p>
    <h4>Confirmation and immediate care</h4>
    <ul>
      <li>Measure blood gas, electrolytes, glucose, urea, calcium and <strong>measured osmolality</strong>; calculate the osmolal and anion gaps.</li>
      <li>Confirm with <strong>gas chromatography</strong>; screen for ethanol, isopropanol and acetone at the same time.</li>
      <li>Do not wait for the result. Give <strong>fomepizole</strong> or ethanol, folate for methanol, thiamine and pyridoxine for ethylene glycol, and consider <strong>haemodialysis</strong> for severe acidosis, visual or neurological signs, renal failure or high levels.</li>
    </ul>
    <h4>Public-health response</h4>
    <p>The laboratory should alert the clinician and the local health office immediately, because a single case implies other exposed drinkers. Under <strong>RA 11332</strong>, unusual clusters are <strong>notifiable</strong>. Outbreak investigation links the product, the distributor and the community, and the laboratory supports <strong>product testing</strong> and biological monitoring. Regulation of informal alcohol production and public warning are as important as dialysis.</p>
  `,
  tip: "Treat every methanol case as a cluster: the laboratory result is also a public-health signal.",
  sources: ["C1", "C2", "C15", "S33"]
},
{
  id: "cc314", domain: "chem-tox", star: true,
  q: "Discuss lead and mercury exposure in Philippine communities: sources, biomonitoring and the laboratory's role in prevention.",
  tags: ["lead", "mercury", "biomonitoring", "environmental health"],
  keypoints: ["used lead-acid battery recycling", "artisanal and small-scale gold mining", "skin-lightening creams", "whole blood lead", "zinc protoporphyrin", "urine mercury", "methylmercury", "ICP-MS", "trace-element-free", "no safe blood lead level", "3.5 µg/dL", "speciation", "removal from exposure"],
  answer: `
    <h4>Philippine exposure sources</h4>
    <p>Lead exposure persists in <strong>used lead-acid battery recycling</strong> and smelting communities, mining and smelting areas, lead-based paint, contaminated soil and dust, plumbing, and imported toys or cosmetics. Mercury exposure comes from <strong>artisanal and small-scale gold mining</strong>, where mercury amalgam is burned, from contaminated fish, from dental amalgam, and from <strong>skin-lightening creams</strong>. Children, pregnant women and workers without protective equipment carry the highest risk.</p>
    <h4>Biomonitoring</h4>
    <div class="table-wrap"><table>
      <tr><th>Analyte</th><th>Specimen</th><th>Meaning</th></tr>
      <tr><td>Lead</td><td><strong>Whole blood lead</strong>, EDTA, lead-free tube</td><td>Current exposure; the test of choice</td></tr>
      <tr><td>Zinc protoporphyrin</td><td>Whole blood</td><td>Effect over about three months; also raised in iron deficiency</td></tr>
      <tr><td>Mercury, inorganic</td><td><strong>Urine mercury</strong></td><td>Chronic elemental and inorganic exposure</td></tr>
      <tr><td>Mercury, methyl</td><td>Blood, hair</td><td>Recent exposure and fish-derived <strong>methylmercury</strong></td></tr>
      <tr><td>Arsenic</td><td>Urine with <strong>speciation</strong></td><td>Separates toxic species from dietary arsenobetaine</td></tr>
    </table></div>
    <h4>Interpretation</h4>
    <p>Use <strong>trace-element-free</strong> tubes and needles, avoid prolonged tourniquet time, and measure by <strong>ICP-MS</strong>. A capillary lead result needs venous confirmation. There is <strong>no safe blood lead level</strong> in children; the CDC reference value is <strong>3.5 µg/dL</strong>. Interpret mercury against local reference data and ask about seafood and cosmetics. Speciation prevents a false diagnosis of arsenic poisoning after a fish meal.</p>
    <h4>Prevention and the laboratory's role</h4>
    <p>Chelation is reserved for symptomatic or clearly hazardous poisoning, combined with <strong>removal from exposure</strong>. The laboratory supports surveillance by reporting sentinel cases, participating in community biomonitoring and advising on specimen quality. Prevention — safer recycling, mercury-free mining, product regulation and worker protection — prevents more disease than any chelator. Sentinel reporting also triggers environmental investigation, which is the practical point of biomonitoring.</p>
  `,
  tip: "Name the local sources first, then match each analyte to its specimen; prevention is the mark of an advanced answer.",
  sources: ["C1", "C2", "C3", "S31"]
},
{
  id: "cc315", domain: "chem-tox", star: true,
  q: "Discuss PhilHealth coverage and equitable access to therapeutic drug monitoring in the Philippines, including benefit design, rational use and laboratory strategy.",
  tags: ["PhilHealth", "TDM", "access", "health economics"],
  keypoints: ["PhilHealth benefit schedules", "case-based payments", "out-of-pocket", "vancomycin AUC", "tacrolimus and cyclosporine", "lithium", "toxic alcohols", "tiered network", "LC-MS/MS reference centre", "DOH GABAY", "health-technology assessment", "interpretative comments", "turnaround time", "stewardship"],
  answer: `
    <h4>How TDM is paid for</h4>
    <p>In the Philippines, laboratory access is shaped by <strong>PhilHealth benefit schedules</strong>, <strong>case-based payments</strong> and the patient's ability to pay <strong>out-of-pocket</strong>. TDM is expensive: it needs specialised reagents, calibration, proficiency testing and skilled interpretation. When a test is not in the benefit package, or is bundled into a case rate that does not reflect its cost, clinicians under-order it and patients either pay privately or go without.</p>
    <h4>What coverage should protect</h4>
    <ul>
      <li><strong>Essential, outcome-changing TDM</strong>: <strong>vancomycin AUC</strong>, aminoglycosides, <strong>tacrolimus and cyclosporine</strong>, <strong>lithium</strong>, digoxin, phenytoin and valproate.</li>
      <li><strong>Urgent toxicology</strong>: paracetamol, salicylate and <strong>toxic alcohols</strong>, where the result changes antidote or dialysis decisions.</li>
      <li><strong>Monitoring in pregnancy and paediatrics</strong>, where targets differ and missed exposure causes harm.</li>
    </ul>
    <h4>Equity and rational use</h4>
    <p>Coverage alone does not guarantee access. Tests concentrated in tertiary hospitals force travel and delay, and patients may be charged separately for each level. A <strong>tiered network</strong> — regional laboratories running validated immunoassays, an <strong>LC-MS/MS reference centre</strong> for confirmation — reduces cost and <strong>turnaround time</strong>. Transport and lost wages are part of the cost, so decentralisation matters as much as the tariff. <strong>DOH GABAY</strong> and <strong>health-technology assessment</strong> can define which tests are cost-effective and which are discretionary.</p>
    <h4>The laboratory's contribution</h4>
    <p>Provide <strong>interpretative comments</strong> with dose and sampling time, offer limited-sampling strategies, and audit requests for inappropriate timing or indications. Publish local prices and turnaround times. Reimbursement should reward a complete, interpretable result rather than the number of tests performed; that alignment improves both access and <strong>stewardship</strong>.</p>
  `,
  tip: "Argue from benefit design to equity to laboratory strategy; examiners want the system view, not a price list.",
  sources: ["C18", "S33", "C1"]
},
{
  id: "cc316", domain: "chem-tox", star: true,
  q: "Discuss alcohol biomarkers in Filipino clinical and medico-legal practice: choosing the right marker, interpreting it, and avoiding common errors.",
  tags: ["alcohol biomarkers", "CDT", "PEth", "EtG"],
  keypoints: ["lambanog", "binge patterns", "pre-test probability", "GGT", "MCV", "AST:ALT above 2", "carbohydrate-deficient transferrin", "transferrin variants", "ethyl glucuronide", "phosphatidylethanol", "exposure not impairment", "alcohol swab", "fluoride tube", "window of detection"],
  answer: `
    <h4>Drinking patterns and pre-test probability</h4>
    <p>Filipino drinking includes beer and spirits but also <strong>lambanog</strong>, tuba and informally distilled products, often in <strong>binge patterns</strong> around fiestas and gatherings. The laboratory marker must match the question: recent drinking, sustained heavy use, or abstinence. A single abnormal liver enzyme proves little; the history, pattern and clinical context set the <strong>pre-test probability</strong>.</p>
    <h4>Choosing the marker</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Window</th><th>Best use and pitfall</th></tr>
      <tr><td><strong>GGT</strong></td><td>Weeks</td><td>Sensitive but non-specific; raised by obesity, MASLD, drugs and biliary disease</td></tr>
      <tr><td><strong>MCV</strong></td><td>Months</td><td>Cheap and stable; also raised in B12 or folate deficiency</td></tr>
      <tr><td><strong>AST:ALT above 2</strong></td><td>Current</td><td>Suggests alcoholic liver injury, not consumption on its own</td></tr>
      <tr><td><strong>Carbohydrate-deficient transferrin</strong></td><td>2 to 4 weeks</td><td>Specific for sustained heavy intake; false positives with <strong>transferrin variants</strong> and advanced liver disease</td></tr>
      <tr><td><strong>Ethyl glucuronide</strong></td><td>Up to about 80 hours in urine</td><td>Detects recent drinking; mouthwash and sanitiser can cause low positives</td></tr>
      <tr><td><strong>Phosphatidylethanol</strong></td><td>3 to 4 weeks in blood</td><td>Specific and sensitive; increasingly the preferred marker</td></tr>
    </table></div>
    <h4>Medico-legal and workplace use</h4>
    <p>Under the anti-drunk and drugged driving law, alcohol results may be used in prosecution, so sampling must avoid an <strong>alcohol swab</strong>, use a <strong>fluoride tube</strong> and be documented. Workplace and fitness-for-duty programmes should state cut-offs and confirmation policy. A positive marker indicates <strong>exposure, not impairment</strong> or the time of drinking.</p>
    <h4>Reporting</h4>
    <p>Report the <strong>window of detection</strong>, the method and the main confounders, and recommend confirmation for legal cases. In liver transplant assessment and abstinence programmes, serial PEth or EtG is more informative than repeated GGT. The laboratory should resist reporting a single marker as proof of alcohol use disorder.</p>
  `,
  tip: "Pair each marker with its window and its confounder; then state plainly that a marker shows exposure, not impairment.",
  sources: ["C1", "C2", "C3", "S33"]
},
{
  id: "cc317", domain: "chem-tox", star: true,
  q: "Discuss the practical implementation of AUC-guided vancomycin dosing: limited sampling, assay choice, validation and audit.",
  tags: ["vancomycin", "AUC", "Bayesian", "implementation"],
  keypoints: ["AUC/MIC 400 to 600", "two concentrations at steady state", "Bayesian forecasting", "limited sampling", "outpatient parenteral therapy", "safety check", "immunoassay", "LC-MS/MS", "reportable range", "missing samples", "time to result", "nephrotoxicity", "order sets", "audit"],
  answer: `
    <h4>Why implementation is harder than the target</h4>
    <p>The guideline target of <strong>AUC/MIC 400 to 600</strong> is simple; delivering it is not. AUC-guided dosing needs accurate dose and sampling times, a validated estimation method, timely reporting and a clinician who acts on the result. Many hospitals still report troughs because the workflow, not the evidence, is the obstacle.</p>
    <h4>Sampling and estimation</h4>
    <ul>
      <li><strong>Two concentrations at steady state</strong>, with exact infusion start and stop times, fitted by <strong>Bayesian forecasting</strong> to a population model.</li>
      <li><strong>Limited sampling</strong> strategies validated locally, which reduce phlebotomy and are useful in <strong>outpatient parenteral therapy</strong>.</li>
      <li>A trough alone is acceptable only as a <strong>safety check</strong>, not as the primary exposure target.</li>
      <li>Record renal function, weight, age and concurrent nephrotoxins, because these drive clearance and volume of distribution.</li>
    </ul>
    <h4>Assay and validation</h4>
    <p><strong>Immunoassays</strong> are adequate for routine total vancomycin if calibrated and free of interference; <strong>LC-MS/MS</strong> is the reference. Before launching AUC reporting, verify the software against a validated pharmacokinetic method, define the <strong>reportable range</strong>, and test how the system handles late or <strong>missing samples</strong>. The report should state the estimated AUC, the assumptions and whether the sampling was valid.</p>
    <h4>Audit and governance</h4>
    <p>Track the proportion of courses with a valid AUC, the <strong>time to result</strong>, the proportion in target, and <strong>nephrotoxicity</strong>. Review every AUC above 600 and every case with a rising creatinine. A pharmacist-led service, agreed <strong>order sets</strong> and a comment on the report convert a calculation into safer prescribing. Without <strong>audit</strong>, AUC monitoring becomes another number that nobody uses.</p>
  `,
  tip: "The marks are in the workflow — sampling validity, software verification and audit — not in repeating the target.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc318", domain: "chem-tox", star: true,
  q: "Discuss therapeutic drug monitoring of immunosuppressants in transplant recipients receiving rifampicin-based tuberculosis therapy.",
  tags: ["tacrolimus", "rifampicin", "CYP3A4", "transplant"],
  keypoints: ["CYP3A4 inducer", "P-glycoprotein", "acute rejection", "tacrolimus", "cyclosporine", "sirolimus and everolimus", "mycophenolate", "whole-blood trough", "within three to five days", "rifabutin", "azole antifungals", "sampling time", "adherence", "TB programme"],
  answer: `
    <h4>The interaction</h4>
    <p>Rifampicin is a potent <strong>CYP3A4 inducer</strong> and also induces <strong>P-glycoprotein</strong> and glucuronidation. Tacrolimus, cyclosporine, sirolimus and everolimus are CYP3A4 substrates, so starting rifampicin can lower their concentrations several-fold within days and precipitate <strong>acute rejection</strong>. Stopping rifampicin reverses induction slowly, and concentrations may then climb into the toxic range.</p>
    <h4>Drugs and expected effect</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Effect of rifampicin</th><th>Monitoring</th></tr>
      <tr><td>Tacrolimus</td><td>Marked fall; dose often needs a large increase</td><td><strong>Whole-blood trough</strong>, twice weekly initially</td></tr>
      <tr><td>Cyclosporine</td><td>Marked fall; avoid fixed-dose conversion</td><td>Whole-blood trough or C2</td></tr>
      <tr><td>Sirolimus, everolimus</td><td>Large fall; narrow therapeutic index</td><td>Whole-blood trough</td></tr>
      <tr><td>Mycophenolate</td><td>Modest fall from glucuronidation induction</td><td>Clinical response; AUC where available</td></tr>
    </table></div>
    <h4>Practical monitoring</h4>
    <p>Check a trough before rifampicin, then <strong>within three to five days</strong> of starting it, after every dose change and after stopping it. Increase the calcineurin inhibitor pre-emptively rather than waiting for rejection. Confirm <strong>adherence</strong> and check for interacting <strong>azole antifungals</strong>, macrolides or anticonvulsants. Whole blood in EDTA is the correct matrix, and the <strong>sampling time</strong> must be recorded. Record the actual dose and interval, because induced patients may need divided or twice-daily dosing.</p>
    <h4>Alternatives and prevention</h4>
    <p><strong>Rifabutin</strong> induces less CYP3A4 and may be considered when the tuberculosis regimen allows. Coordinate with the <strong>TB programme</strong> before changing therapy, because inadequate treatment risks resistance. Drug concentrations can change again when the TB regimen is completed. Document the interaction plan in the transplant record, educate the patient, and involve the clinical pharmacist. Vaccinate and screen before transplantation where possible. The laboratory's role is rapid, correctly timed results with a comment that names the interaction.</p>
  `,
  tip: "Explain induction, name the four drugs, then give the monitoring interval — that sequence earns the marks.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc319", domain: "chem-tox", star: true,
  q: "Discuss lithium measurement and monitoring in older adults with chronic kidney disease: analytical methods, pre-analytical pitfalls and the management of severe toxicity.",
  tags: ["lithium", "chronic kidney disease", "TDM", "haemodialysis"],
  keypoints: ["flame emission photometry", "ion-selective electrode", "point-of-care", "lithium heparin", "12 hours after the last dose", "steady state", "falling eGFR", "thiazides, NSAIDs or ACE inhibitors", "nephrogenic diabetes insipidus", "haemodialysis", "repeat the level", "rebound"],
  answer: `
    <h4>Analytical methods</h4>
    <p>Lithium is measured in serum or plasma by <strong>flame emission photometry</strong>, <strong>ion-selective electrode</strong>, colorimetry or enzymatic methods. Methods agree reasonably at therapeutic concentrations but diverge at high levels and in the presence of other cations. <strong>Point-of-care</strong> devices need correlation with the central method. The report should name the method, because clinical decisions and dialysis thresholds depend on it.</p>
    <h4>Pre-analytical pitfalls</h4>
    <ul>
      <li>Use a plain or gel tube; a <strong>lithium heparin</strong> tube contaminates the sample and falsely raises the result.</li>
      <li>Take the sample <strong>12 hours after the last dose</strong>; a random level cannot be interpreted.</li>
      <li>Wait for <strong>steady state</strong>, about five days, after starting or changing the dose.</li>
      <li>Avoid haemolysis and prolonged tourniquet time, and record the exact dose and sampling time.</li>
    </ul>
    <h4>Older adults and chronic kidney disease</h4>
    <p>Lithium is cleared by the kidney, so <strong>falling eGFR</strong>, dehydration, low salt intake and <strong>thiazides, NSAIDs or ACE inhibitors</strong> raise concentrations. Older patients develop toxicity at lower levels and may present with confusion, falls, coarse tremor or dysarthria rather than classic symptoms. Check creatinine, sodium, calcium and TSH at baseline and periodically. Long-term use causes <strong>nephrogenic diabetes insipidus</strong> and chronic tubulointerstitial injury.</p>
    <h4>Severe toxicity</h4>
    <p><strong>Haemodialysis</strong> is the definitive treatment for severe toxicity, especially with renal failure. Lithium redistributes after dialysis, so <strong>repeat the level</strong> and dialyse again if it rebounds. Monitor fluid balance, sodium and neurological status, and report the timed level with its reference interval and the eGFR. Prevention is better: a standardised sampling time, a current creatinine and a medication review at every visit.</p>
  `,
  tip: "Contrast the analytical methods, then stress the lithium heparin trap and post-dialysis rebound.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc320", domain: "chem-tox", star: true,
  q: "Discuss massive acetaminophen overdose: why the nomogram fails, N-acetylcysteine strategies, extracorporeal treatment and prognostic laboratory markers.",
  tags: ["acetaminophen", "N-acetylcysteine", "haemodialysis", "liver failure"],
  keypoints: ["Rumack–Matthew nomogram", "massive", "staggered", "N-acetylcysteine", "ALT and INR", "hypoglycaemia", "cerebral oedema", "haemodialysis", "fomepizole", "CYP2E1", "King's College criteria", "lactate", "phosphate", "transplant centre"],
  answer: `
    <h4>Why massive ingestion is different</h4>
    <p>The Rumack–Matthew nomogram was derived for single acute ingestions and assumes first-order absorption and a stable clinical course. In a <strong>massive</strong> overdose the patient may present with coma, metabolic acidosis or shock within hours, and the level may be uninterpretable or fall rapidly after charcoal. <strong>Staggered</strong>, repeated supratherapeutic and chronic ingestions are outside the nomogram entirely. Treat the patient, not the plot.</p>
    <h4>N-acetylcysteine strategies</h4>
    <ul>
      <li>Start <strong>N-acetylcysteine</strong> immediately on suspicion; do not wait for a level when the history is serious.</li>
      <li>The intravenous regimen is standard; in massive ingestion some centres use a higher or extended course guided by <strong>ALT and INR</strong>.</li>
      <li>Continue until transaminases and INR are clearly improving, not for a fixed number of doses.</li>
      <li>Monitor glucose, electrolytes, phosphate, creatinine and acid-base status; <strong>hypoglycaemia</strong> and <strong>cerebral oedema</strong> are late features.</li>
    </ul>
    <h4>Extracorporeal treatment</h4>
    <p>Acetaminophen is dialysable, but dialysis is not routine. Consider <strong>haemodialysis</strong> for severe acidosis, renal failure, refractory hypotension or a very high level, and in patients who cannot receive NAC. <strong>Fomepizole</strong> has been used as an adjunct in massive overdose to block <strong>CYP2E1</strong>, but evidence is limited and it does not replace NAC. Early referral to a <strong>transplant centre</strong> is essential.</p>
    <h4>Prognosis and laboratory markers</h4>
    <p><strong>King's College criteria</strong> — arterial pH below 7.30 after resuscitation, or INR above 6.5 with creatinine above 300 µmol/L and grade III or IV encephalopathy — guide transplantation. <strong>Lactate</strong>, <strong>phosphate</strong> and ammonia add prognostic information. The laboratory should report these urgently and repeat them, because trends matter more than a single value.</p>
  `,
  tip: "Say clearly that massive overdose is treated on the clinical course and trends, not on a nomogram point.",
  sources: ["C1", "C2", "C3"]
}
);
