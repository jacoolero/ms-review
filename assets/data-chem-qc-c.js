/* Clinical Chemistry — quality, regulation & advanced practice, essay set C (cc241–cc250) */
window.QBANK.push(
{
  id: "cc241", domain: "chem-qc", star: true,
  q: "Outline the licensing requirements for a clinical laboratory in the Philippines under DOH AO 2021-0037. How does the licence classification shape staffing, test menu and quality obligations?",
  tags: ["licensure", "DOH AO 2021-0037", "Philippine regulation"],
  keypoints: ["RA 4688", "DOH AO 2021-0037", "licence to operate", "classification by function", "institutional character", "service capability", "primary secondary tertiary", "licensed medical technologist", "pathologist", "minimum equipment", "quality assurance", "external quality assessment", "referral of tests", "renewal inspection", "suspension or revocation"],
  answer: `
    <p>Republic Act No. 4688, the Clinical Laboratory Act, and its implementing rules as revised by <strong>DOH Administrative Order 2021-0037</strong> require every clinical laboratory to hold a <strong>licence to operate</strong> before accepting specimens. The order classifies laboratories by function (clinical pathology, anatomic pathology or both), by <strong>institutional character</strong> (hospital-based, non-hospital-based or free-standing) and by <strong>service capability</strong> (primary, secondary or tertiary). Classification is not decoration: it fixes the minimum test menu, the personnel and equipment required, and the <strong>referral of tests</strong> the laboratory cannot perform.</p>
    <h4>Requirements for the licence</h4>
    <ul>
      <li>A licensed physician, usually a pathologist, responsible for the service, and sufficient <strong>licensed medical technologists</strong> for the workload and shifts.</li>
      <li>Premises with adequate space, ventilation, biosafety and specimen-handling areas.</li>
      <li><strong>Minimum equipment</strong> and methods appropriate to the category, with maintenance and calibration records.</li>
      <li>A quality assurance programme covering internal QC, <strong>external quality assessment</strong>, reference intervals and critical values.</li>
      <li>Documented policies on records, confidentiality, waste, occupational safety and referral to a higher-category laboratory.</li>
    </ul>
    <h4>Inspection and enforcement</h4>
    <p>The DOH or its regional office reviews the application, inspects the site and may issue deficiencies that must be corrected before the licence is granted. Licences are time-limited and renewed after another inspection. Non-compliance can lead to suspension, revocation or fines, and an unlicensed laboratory places its owner and staff at legal risk. Reporting a test outside the licensed category is itself a violation.</p>
    <h4>Practical implications</h4>
    <p>The classification should drive the formulary, staffing plan and send-out contracts. A test not on the approved menu must be referred, with the receiving laboratory's licence and accreditation documented. When the service expands, the laboratory must apply for a change of category rather than quietly add tests. The licence is a legal minimum, not proof of competence, so a laboratory should still pursue <strong>ISO 15189</strong> accreditation and participate in EQA. Keep the licence, inspection reports and corrective actions under document control, and review them at management review so that renewal is a planned event rather than a crisis.</p>
  `,
  tip: "Anchor the answer in RA 4688 and AO 2021-0037, then link each classification to a concrete staffing or test-menu consequence.",
  sources: ["C13", "S33", "C11"]
},
{
  id: "cc242", domain: "chem-qc", star: true,
  q: "Explain how PhilHealth finances laboratory testing in the Philippines. Analyse how case-based payment affects laboratory cost, access and test utilisation.",
  tags: ["PhilHealth", "health financing", "access"],
  keypoints: ["case rates", "Konsulta", "Z benefits", "TB DOTS", "newborn screening", "PhilHealth accreditation", "no balance billing", "out-of-pocket payment", "cost centre", "marginal cost", "send-out testing", "utilisation management", "under-provision", "equity", "Malasakit Center"],
  answer: `
    <p>PhilHealth rarely buys laboratory tests one by one. For admitted patients, diagnostics are bundled into <strong>case rates</strong>; outpatient testing is covered mainly through the <strong>Konsulta</strong> primary care package, selected <strong>Z benefits</strong>, TB DOTS, dialysis and newborn screening. The facility, not the patient, files the claim, and the laboratory must be accredited by PhilHealth for its results to support reimbursement.</p>
    <h4>The laboratory as a cost centre</h4>
    <p>Under a fixed case payment, every additional test reduces the margin unless it prevents a complication or a longer stay. This creates three predictable responses: pressure on reagent and consumable prices, delay or refusal of expensive but indicated tests, and shifting of tests to send-out providers. The rational laboratory counters with <strong>cost per reportable result</strong> rather than reagent price, and with evidence that a test changes management.</p>
    <div class="table-wrap"><table>
      <tr><th>Payment feature</th><th>Likely laboratory response</th><th>Risk if unmanaged</th></tr>
      <tr><td>Fixed case rate</td><td>Reduce low-value tests and repeats</td><td><strong>Under-provision</strong> of indicated tests</td></tr>
      <tr><td>Accreditation requirement</td><td>Invest in QC, EQA and documentation</td><td>Compliance without competence</td></tr>
      <tr><td>Outpatient package</td><td>Standardise a limited test panel</td><td>Missed chronic disease monitoring</td></tr>
      <tr><td>No balance billing for indigent patients</td><td>Absorb unpaid costs</td><td>Quiet rationing or closure</td></tr>
    </table></div>
    <h4>Access and equity</h4>
    <p>Coverage is incomplete. Many Filipinos still pay <strong>out-of-pocket</strong> for laboratory tests, and the gap is widest in rural and geographically isolated areas where the nearest tertiary laboratory may be hours away. <strong>Malasakit Centers</strong> and Konsulta enrolment reduce but do not remove this burden. Travel, lost wages and repeat testing often cost more than the test itself.</p>
    <h4>Stewardship</h4>
    <p>Payment reform does not guarantee quality. Laboratories need utilisation review, minimum retest intervals and audit of send-outs, while protecting high-value testing such as HbA1c, urine albumin and creatinine. Otherwise cost control becomes silent rationing, and the poorest patients bear the risk.</p>
  `,
  tip: "Show the incentive created by a fixed payment, then balance the cost argument with an explicit access and equity point.",
  sources: ["C18", "S33", "C1"]
},
{
  id: "cc243", domain: "chem-qc", star: true,
  q: "Design one quality system that satisfies both ISO 15189:2022 and the DOH laboratory quality management requirements. Where do the two frameworks overlap and where do they diverge?",
  tags: ["ISO 15189", "LQMS", "integration"],
  keypoints: ["ISO 15189:2022", "DOH LQMS", "DOH AO 2021-0037", "gap analysis", "quality manual", "process approach", "risk register", "quality indicators", "internal audit", "management review", "point-of-care testing", "measurement uncertainty", "Philippine Accreditation Bureau", "licensure", "evidence map"],
  answer: `
    <p>The DOH licence and ISO 15189 accreditation ask many of the same questions in different language. A small Philippine laboratory therefore gains nothing from maintaining two parallel systems; it should build one process-based system and map the evidence to both sets of requirements.</p>
    <h4>Where they overlap</h4>
    <div class="table-wrap"><table>
      <tr><th>Area</th><th>ISO 15189 emphasis</th><th>DOH and LQMS emphasis</th></tr>
      <tr><td>Organisation</td><td>Governance, impartiality, patient focus</td><td>Licensed ownership and responsible pathologist</td></tr>
      <tr><td>Personnel</td><td>Competence, authorisation, records</td><td>Licensed staff and staffing ratios</td></tr>
      <tr><td>Equipment</td><td>Calibration, maintenance, traceability</td><td>Minimum equipment for the category</td></tr>
      <tr><td>Process control</td><td>Validation, QC, EQA, uncertainty</td><td>QA programme and EQA participation</td></tr>
      <tr><td>Improvement</td><td>Risk, audits, management review</td><td>Corrective action and inspection findings</td></tr>
    </table></div>
    <h4>Where they diverge</h4>
    <ul>
      <li><strong>Licensure</strong> is a mandatory legal minimum; <strong>accreditation</strong> is voluntary third-party attestation by the <strong>Philippine Accreditation Bureau</strong>.</li>
      <li>ISO 15189:2022 explicitly covers <strong>point-of-care testing</strong> and demands <strong>measurement uncertainty</strong>; the licence inspection may not examine either in depth.</li>
      <li>The standard is patient- and process-centred; inspection is often checklist- and facility-centred.</li>
      <li>Accreditation requires surveillance between assessments; licensure requires periodic renewal inspection.</li>
    </ul>
    <h4>Integration plan</h4>
    <ol>
      <li>Run a <strong>gap analysis</strong> against both frameworks and build an <strong>evidence map</strong> with one owner per requirement.</li>
      <li>Write a single quality manual using the <strong>process approach</strong>, and cross-reference the DOH clauses in an appendix.</li>
      <li>Keep one <strong>risk register</strong>, one indicator set, one document-control system and one training file.</li>
      <li>Combine internal audits so that each process is examined once and reported against both standards.</li>
      <li>Hold a single <strong>management review</strong> that covers inspection findings, EQA, indicators and accreditation gaps.</li>
    </ol>
    <p>The constraint is resources, not paperwork. Regional reference laboratories can mentor smaller facilities, and shared templates reduce duplication. The test of integration is simple: a single audit trail should let an inspector and an assessor reach the same conclusion.</p>
  `,
  tip: "Lead with overlap, then name the real divergences — mandatory versus voluntary, POCT and uncertainty — and finish with one evidence map.",
  sources: ["C11", "C13", "S33"]
},
{
  id: "cc244", domain: "chem-qc", star: true,
  q: "A Philippine laboratory has an unacceptable external quality assessment result. Describe the national EQA architecture and a structured investigation, from clerical check to corrective action.",
  tags: ["EQA", "proficiency testing", "corrective action"],
  keypoints: ["external quality assessment", "PCQACL", "NEQAS", "national reference laboratory", "RITM", "z-score", "peer group", "commutability", "clerical error", "reconstitution", "calibration", "reagent lot", "random error", "systematic error", "root cause", "corrective action"],
  answer: `
    <p><strong>External quality assessment</strong> compares the laboratory with peers or with an assigned value. In the Philippines, schemes are provided by the Philippine Council for Quality Assurance in Clinical Laboratories through the national EQA scheme, by DOH-designated <strong>national reference laboratories</strong> such as RITM for specific programmes, and by commercial or international providers. Surveys are scored as a <strong>z-score</strong>, standard deviation index or pass/fail against a target, and participation is expected for licensure and PhilHealth accreditation.</p>
    <h4>First, exclude the trivial</h4>
    <ul>
      <li>Clerical error: wrong survey, wrong units, transcription, result entered for another analyte.</li>
      <li><strong>Reconstitution</strong>, storage, expiry or thawing of the survey material.</li>
      <li>Run order, calibration status, <strong>reagent lot</strong>, dilution or a transcription of the wrong decimal place.</li>
      <li>Whether the result was reported before QC was acceptable.</li>
    </ul>
    <h4>Then classify the pattern</h4>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Likely cause</th><th>Action</th></tr>
      <tr><td>One analyte, one survey</td><td>Random error or transcription</td><td>Verify records; monitor next survey</td></tr>
      <tr><td>All analytes biased the same way</td><td>Calibration or reagent problem</td><td>Recalibrate, check lot, rerun patients</td></tr>
      <tr><td>One method group differs from peers</td><td>Method bias or <strong>non-commutability</strong></td><td>Investigate with commutable material</td></tr>
      <tr><td>Progressive drift across surveys</td><td>Lamp, electrode or reagent ageing</td><td>Maintenance and trend review</td></tr>
    </table></div>
    <h4>Corrective action</h4>
    <p>Confirm with internal QC, calibration verification and, where possible, a fresh patient comparison. Identify the <strong>root cause</strong> rather than the nearest excuse, then document the corrective action, the evidence of effectiveness and any effect on previously reported patients. Re-measure in the next survey and review the trend over several cycles.</p>
    <h4>Limits of EQA</h4>
    <p>EQA is retrospective, infrequent and may use non-commutable material, so a pass does not prove good performance and a single failure does not prove incompetence. Peer-group consensus can also hide a shared method bias. The value lies in the investigation, not the certificate.</p>
  `,
  tip: "Rule out clerical and handling errors first, then use the pattern across analytes and surveys to separate random from systematic error.",
  sources: ["S31", "C4", "C18"]
},
{
  id: "cc245", domain: "chem-qc",
  q: "How do CHED CMO 13 s. 2017 and CMO 15 s. 2019 shape the competence of Philippine medical technologists and the research capacity of the profession?",
  tags: ["CHED", "curriculum", "workforce"],
  keypoints: ["CMO 13 s. 2017", "CMO 15 s. 2019", "BS Medical Technology", "program outcomes", "clinical internship", "faculty qualifications", "graduate programs", "thesis", "research", "PAMET", "PRC", "continuing professional development", "academe-practice gap", "simulation", "molecular diagnostics"],
  answer: `
    <p>Two CHED policies frame the pipeline. <strong>CMO 13, s. 2017</strong> sets the curriculum for the BS Medical Technology/Medical Laboratory Science programme; <strong>CMO 15, s. 2019</strong> governs graduate programmes, including the master's and doctoral degrees that produce the profession's teachers and researchers.</p>
    <h4>What CMO 13 s. 2017 requires</h4>
    <p>The programme is built on stated <strong>program outcomes</strong>: technical competence, professional and ethical behaviour, communication, research, safety and quality. It prescribes the professional and general education courses, laboratory facilities, faculty qualifications and a supervised <strong>clinical internship</strong> in an accredited training laboratory. Assessment must show that graduates can perform methods, interpret results and work within a quality system, not merely recall facts.</p>
    <h4>What CMO 15 s. 2019 adds</h4>
    <p>Graduate programmes require qualified faculty, research facilities, a defined curriculum and a <strong>thesis</strong> or equivalent research output. The policy pushes master's programmes away from coursework alone toward original, supervised inquiry that can be presented or published.</p>
    <div class="table-wrap"><table>
      <tr><th>Intended outcome</th><th>Bench evidence</th><th>Common gap</th></tr>
      <tr><td>Technical competence</td><td>Competency checklist, valid results</td><td>Limited molecular and POCT exposure</td></tr>
      <tr><td>Quality thinking</td><td>QC, EQA, root cause analysis</td><td>Internship observes rather than decides</td></tr>
      <tr><td>Research capacity</td><td>Thesis, local publication</td><td>Few mentors and limited funding</td></tr>
      <tr><td>Professional identity</td><td>PRC licence, PAMET membership, CPD</td><td>Weak continuing education in rural posts</td></tr>
    </table></div>
    <h4>From policy to practice</h4>
    <ul>
      <li>Use <strong>simulation</strong> and case-based assessment before the internship so students practise judgement, not only technique.</li>
      <li>Strengthen teaching in molecular diagnostics, automation, informatics and POCT, which employers now expect.</li>
      <li>Formalise an academe-service partnership so that interns rotate through real quality activities.</li>
      <li>Fund graduate research and protect time for it; require dissemination, not a shelf thesis.</li>
      <li>Support <strong>continuing professional development</strong> through PRC and PAMET, especially for isolated laboratories.</li>
    </ul>
    <p>Curriculum reform alone cannot fix a workforce shortage. Retention, salaries and career pathways determine whether trained technologists stay in the country and in the laboratory.</p>
  `,
  tip: "Separate the undergraduate and graduate policies, then connect each outcome to evidence a laboratory would actually see.",
  sources: ["S29", "S30", "S33"]
},
{
  id: "cc246", domain: "chem-qc", star: true,
  q: "Explain how Sigma metrics, the method decision chart and OPSpecs charts are used to design a QC strategy. Work through a method with TEa 8.0%, bias 1.0% and CV 1.8%.",
  tags: ["Sigma", "QC design", "OPSpecs"],
  keypoints: ["total allowable error", "Sigma = (TEa − bias) / CV", "method decision chart", "normalized bias and CV", "OPSpecs chart", "probability of error detection", "false rejection", "multirule", "control measurements", "3.9 sigma", "marginal performance", "sigma gap", "improve precision", "reduce bias"],
  answer: `
    <p>The <strong>Sigma metric</strong> converts analytical performance into a single number: how many standard deviations of method imprecision fit between the method mean and the <strong>total allowable error</strong> limit. TEa may come from a regulatory goal, a biological variation model or a clinical outcome study, and the choice must be stated.</p>
    <div class="calc">Sigma = (TEa − |bias|) / CV
      = (8.0 − 1.0) / 1.8
      = 3.89, about 3.9</div>
    <h4>Reading the method decision chart</h4>
    <p>The chart plots normalised bias, here 1.0/8.0 = 12.5%, against normalised CV, here 1.8/8.0 = 22.5%. The point falls in the marginal band: the method can be used, but only with a deliberate QC plan. Six Sigma bands are a planning convention, not a grade for the technologist.</p>
    <div class="table-wrap"><table>
      <tr><th>Sigma</th><th>Interpretation</th><th>Typical QC</th></tr>
      <tr><td>At least 6</td><td>World class</td><td>One 1-3s rule, two measurements</td></tr>
      <tr><td>5</td><td>Excellent</td><td>1-3s or 2-2s, two measurements</td></tr>
      <tr><td>4</td><td>Good</td><td>Multirule, four measurements</td></tr>
      <tr><td>3</td><td>Marginal</td><td>Multirule, six measurements, frequent QC</td></tr>
      <tr><td>Below 3</td><td>Unacceptable</td><td>Improve the method before reporting</td></tr>
    </table></div>
    <h4>Choosing with OPSpecs</h4>
    <p>An <strong>OPSpecs chart</strong> shows, for a given Sigma, which rule and number of control measurements achieve a high <strong>probability of error detection</strong>, usually at least 90%, while keeping <strong>false rejection</strong> near 5% or less. Choose the simplest procedure that meets both criteria. At 3.9 Sigma this is usually a multirule with four to six measurements across two levels, not a single 1-3s with two.</p>
    <h4>Closing the sigma gap</h4>
    <div class="calc">CV needed for 5 sigma = (8.0 − 1.0) / 5 = 1.4%</div>
    <p>Reducing CV from 1.8% to 1.4%, or removing the 1.0% bias by recalibration, buys a simpler and cheaper QC plan. Sigma analysis is therefore an improvement tool, not merely a label.</p>
  `,
  tip: "Show the calculation, place the point on the decision chart, then let the Sigma value select the rule and number of controls.",
  sources: ["C4", "C5", "C1"]
},
{
  id: "cc247", domain: "chem-qc", star: true,
  q: "Explain the top-down approach to measurement uncertainty in clinical chemistry (ISO/TS 20914). Construct an uncertainty budget for serum creatinine and discuss its use at clinical decision limits.",
  tags: ["measurement uncertainty", "ISO/TS 20914", "decision limits"],
  keypoints: ["measurement uncertainty", "top-down approach", "within-laboratory imprecision", "u(Rw)", "bias", "u(bias)", "combined standard uncertainty", "expanded uncertainty", "coverage factor", "ISO/TS 20914", "guard band", "decision limit", "eGFR", "pre-analytical variation", "commutability"],
  answer: `
    <p><strong>Measurement uncertainty</strong> is the interval around a result within which the true value is expected to lie. ISO 15189:2022 requires laboratories to estimate it for measurands where it affects clinical interpretation. The <strong>top-down approach</strong> of ISO/TS 20914 uses data the laboratory already has: internal QC and EQA.</p>
    <h4>Building the budget</h4>
    <p>Within-laboratory imprecision, u(Rw), is the SD of internal QC divided by the mean. Bias uncertainty, u(bias), is the root mean square of bias observed across EQA or reference materials, ideally including the uncertainty of the assigned value. The components are combined in quadrature because they are independent.</p>
    <div class="calc">u(Rw) = SD(IQC) / mean = 2.0%
u(bias) = root mean square of EQA bias = 2.5%
u(c) = square root of (2.0 squared + 2.5 squared) = 3.2%
U = 2 × 3.2 = 6.4%</div>
    <h4>What the number means</h4>
    <div class="table-wrap"><table>
      <tr><th>Component</th><th>Source</th><th>Typical size</th></tr>
      <tr><td>Imprecision</td><td>Internal QC over months</td><td>1–3%</td></tr>
      <tr><td>Bias</td><td>EQA, reference material</td><td>1–4%</td></tr>
      <tr><td>Calibrator assignment</td><td>Certificate uncertainty</td><td>Small but not zero</td></tr>
      <tr><td>Pre-analytical</td><td>Often excluded</td><td>Can dominate</td></tr>
    </table></div>
    <h4>At the decision limit</h4>
    <p>A result close to a threshold should be interpreted with the interval in mind. For creatinine and eGFR, glucose at 7.0 mmol/L, or a tumour marker cut-off, a value within U of the limit is not confidently on one side. Laboratories may apply a <strong>guard band</strong>, repeat the test, add a comment, or use the interval in a shared decision with the clinician. Reporting U does not excuse a biased method: a wide interval signals that the method needs improvement.</p>
    <h4>Limits</h4>
    <ul>
      <li>Top-down estimates usually exclude pre-analytical and biological variation, so they understate the uncertainty of a clinical interpretation.</li>
      <li>EQA material may be non-commutable, distorting the bias term.</li>
      <li>Components must be independent; correlated terms should not simply be added.</li>
      <li>State the coverage factor (k = 2) and review the budget annually and after method changes.</li>
    </ul>
  `,
  tip: "Give the formula and a worked budget, then show how U changes the interpretation of a result sitting on a cut-off.",
  sources: ["C11", "C5", "C1"]
},
{
  id: "cc248", domain: "chem-qc",
  q: "Outline a governance framework for point-of-care testing across a Philippine hospital and its satellite health facilities, covering device selection, operator competency, connectivity, QC and oversight.",
  tags: ["POCT", "governance", "connectivity"],
  keypoints: ["point-of-care testing", "ISO 15189:2022", "POCT committee", "device selection", "operator competency", "authorisation", "internal QC", "external quality assessment", "connectivity", "middleware", "critical value", "infection control", "RA 9288", "Konsulta", "key performance indicators"],
  answer: `
    <p><strong>Point-of-care testing</strong> moves the analytical phase to the ward, clinic or barangay health station, where the operator is usually a nurse or midwife rather than a medical technologist. ISO 15189:2022 brought POCT inside the laboratory quality system, so decentralisation does not transfer accountability away from the laboratory.</p>
    <h4>Framework</h4>
    <ol>
      <li>A <strong>POCT committee</strong> with laboratory, nursing, medicine, pharmacy, IT and finance decides which tests are allowed and where.</li>
      <li><strong>Device selection</strong> considers clinical need, analytical performance against TEa, whole-blood matrix, biosafety, connectivity, consumable cost and service support.</li>
      <li><strong>Operator competency</strong>: training, written assessment, direct observation and formal <strong>authorisation</strong>, renewed annually and after device changes.</li>
      <li><strong>QC and EQA</strong>: electronic and liquid QC, lot verification, participation in an EQA scheme, and documented action on failure.</li>
      <li><strong>Connectivity</strong>: devices interface with the LIS or middleware so results are traceable, correctly attributed and visible to the laboratory.</li>
      <li>Policies for <strong>critical value</strong> notification, infection control, inventory, downtime and adverse events.</li>
    </ol>
    <div class="table-wrap"><table>
      <tr><th>Element</th><th>Owner</th><th>Evidence</th></tr>
      <tr><td>Device and method</td><td>Laboratory</td><td>Verification report</td></tr>
      <tr><td>Operator</td><td>Unit head and laboratory</td><td>Training and competency record</td></tr>
      <tr><td>Result quality</td><td>Laboratory</td><td>QC, EQA, audit</td></tr>
      <tr><td>Result use</td><td>Clinician</td><td>Documented action</td></tr>
    </table></div>
    <h4>Philippine realities</h4>
    <p>Newborn screening under <strong>RA 9288</strong>, GeneXpert for tuberculosis, glucose and HbA1c in rural health units, and rapid tests in Konsulta clinics are all POCT in practice. Power interruptions, poor connectivity, heat, supply gaps and staff turnover are the main threats, so devices should store results until transmission and be backed by a paper downtime log. A satellite facility without a technologist still needs a named laboratory coordinator and a schedule for QC review.</p>
    <h4>Monitoring</h4>
    <p>Track operator certification rate, QC and EQA compliance, connectivity success, turnaround time, critical value notification and device uptime. Review the POCT register at management review and remove devices that cannot be governed.</p>
  `,
  tip: "State that the laboratory remains accountable, then walk through committee, device, operator, QC, connectivity and monitoring.",
  sources: ["C11", "C19", "C13"]
},
{
  id: "cc249", domain: "chem-qc", star: true,
  q: "Discuss the validation and governance of artificial intelligence and advanced automation in the clinical laboratory. What must be verified before an algorithm is trusted with patient results?",
  tags: ["artificial intelligence", "automation", "governance"],
  keypoints: ["autoverification", "machine learning", "locked algorithm", "adaptive algorithm", "local validation", "ground truth", "subgroup analysis", "external validation", "shadow mode", "performance drift", "override rate", "change control", "audit trail", "Data Privacy Act", "human oversight"],
  answer: `
    <p>Algorithms already sit between the analyser and the report: middleware rules, <strong>autoverification</strong>, delta checks, result interpretation, digital morphology and demand forecasting. Each is a medical device in effect, even when it arrives as a software feature, and each must be validated and governed like one.</p>
    <h4>Before go-live</h4>
    <ol>
      <li>Define the intended use, the population and the decision the output will influence.</li>
      <li>Freeze and record the version. A <strong>locked algorithm</strong> is easier to validate than an <strong>adaptive</strong> one that learns from local data.</li>
      <li>Test against a representative local dataset with credible <strong>ground truth</strong>, not only the vendor's benchmark.</li>
      <li>Report discrimination, calibration and clinical utility, with <strong>subgroup analysis</strong> by age, sex, disease prevalence and, in the Philippines, by available laboratory method.</li>
      <li>Run in <strong>shadow mode</strong> alongside current practice, then review disagreements before authorising use.</li>
      <li>Validate the interface, fail-safe behaviour, downtime and audit trail.</li>
    </ol>
    <h4>After go-live</h4>
    <p>Performance changes when case mix, reagent lot or coding practice changes. Monitor <strong>performance drift</strong>, alert volume, <strong>override rate</strong> and outcomes; a rising override rate is an early warning of alert fatigue or model decay. Set triggers for revalidation, and treat any model update as a <strong>change control</strong> event requiring testing, approval, training and documentation.</p>
    <h4>Governance</h4>
    <ul>
      <li>Named clinical owner and clear accountability; the algorithm advises, the clinician decides.</li>
      <li>Explainability proportionate to risk, and a route to challenge an output.</li>
      <li>Data protection under the <strong>Data Privacy Act</strong>, with de-identification, access control and vendor confidentiality agreements.</li>
      <li>Cybersecurity review, patching, backup and controlled remote access.</li>
      <li>Staff training and a plan for <strong>human oversight</strong> and automation bias.</li>
    </ul>
    <p>In resource-limited Philippine laboratories the main risk is not superintelligence but unexamined automation: a rule that silently suppresses a critical result, or a model trained elsewhere that performs poorly on local patients. Validation, monitoring and a documented owner matter more than the sophistication of the model.</p>
  `,
  tip: "Treat the algorithm as a method: define use, validate locally, monitor drift, and keep a named human owner.",
  sources: ["C11", "C1", "C2"]
},
{
  id: "cc250", domain: "chem-qc", star: true,
  q: "Describe risk-based QC planning using CLSI EP23 and the patient risk model. How do you decide the QC rules and the frequency of QC for a given analyte?",
  tags: ["risk-based QC", "EP23", "QC frequency"],
  keypoints: ["CLSI EP23", "patient risk model", "failure modes", "severity", "occurrence", "detectability", "residual risk", "QC plan", "Sigma metric", "bracketed QC", "maximum patient results between QC events", "PBRTQC", "event-driven QC", "documentation", "management review"],
  answer: `
    <p>Traditional QC asks whether a run is statistically in control. <strong>Risk-based QC</strong> asks a harder question: how many patient results could be wrong, and how much harm would that cause, before the next control event detects the error? CLSI EP23 describes how to turn this into a documented <strong>QC plan</strong> for each analyte.</p>
    <h4>The EP23 sequence</h4>
    <ol>
      <li>Map the process from sample to report and list the <strong>failure modes</strong> at each step.</li>
      <li>Score each for <strong>severity</strong>, <strong>occurrence</strong> and <strong>detectability</strong>, as in FMEA.</li>
      <li>Identify existing controls and estimate the <strong>residual risk</strong>.</li>
      <li>Add control measures, including statistical QC, until residual risk is acceptable.</li>
      <li>Write, verify and review the QC plan.</li>
    </ol>
    <h4>Deciding rule and frequency</h4>
    <p>Three inputs interact: the <strong>Sigma metric</strong>, the patient volume between QC events and the instability of the process. A high-Sigma, stable method can use a simple rule and fewer controls; a marginal method needs a multirule and more measurements. Frequency should also reflect consequence: a potassium error near a critical value is not equivalent to a slightly biased research analyte.</p>
    <div class="table-wrap"><table>
      <tr><th>Sigma</th><th>Suggested rules</th><th>QC frequency</th></tr>
      <tr><td>At least 6</td><td>1-3s, two measurements</td><td>Once per shift or per batch</td></tr>
      <tr><td>5</td><td>1-3s or 2-2s, two measurements</td><td>Once per shift</td></tr>
      <tr><td>4</td><td>Multirule, four measurements</td><td>Every 4–8 hours or per 200 results</td></tr>
      <tr><td>3</td><td>Multirule, six measurements</td><td>Every 2–4 hours; bracket high-risk runs</td></tr>
    </table></div>
    <h4>Practical controls</h4>
    <ul>
      <li><strong>Bracketed QC</strong>: controls before and after a batch, so results are released only within a verified window.</li>
      <li><strong>Event-driven QC</strong> after calibration, reagent lot change, maintenance or a failed control.</li>
      <li><strong>PBRTQC</strong> and delta checks to detect drift between control events.</li>
      <li>A defined <strong>maximum number of patient results between QC events</strong>, stated in the SOP.</li>
    </ul>
    <h4>Documentation and review</h4>
    <p>The plan belongs in the SOP with the rationale, the responsible person and the review date. Review it after incidents, method changes, EQA failures and at management review. The commonest error is copying a generic plan; the plan must describe this method, workload and failure modes.</p>
  `,
  tip: "Frame QC as a control against patient harm, then justify rule and frequency from Sigma, workload and process stability.",
  sources: ["C5", "C4", "C11"]
}
);
