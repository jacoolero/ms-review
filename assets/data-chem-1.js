/* Clinical Chemistry — part 1: quality & method evaluation, carbohydrates, lipids */
window.QBANK.push(
{
  id: "cc1", domain: "chem-qc", star: true,
  q: "Explain the Westgard multirule QC procedure. For each rule, state the type of error it detects and what the analyst should do when it is violated.",
  tags: ["Westgard", "IQC", "Levey-Jennings"],
  answer: `
    <p>The multirule procedure combines several control rules on a Levey–Jennings chart so that the laboratory keeps a <strong>low false-rejection rate</strong> (by not using 2s as a rejection rule) while keeping a <strong>high error-detection rate</strong>. It is normally run with two control levels per run.</p>
    <div class="table-wrap"><table>
      <tr><th>Rule</th><th>Meaning</th><th>Error type</th></tr>
      <tr><td>1<sub>2s</sub></td><td>One control beyond ±2 SD</td><td>Warning only — triggers inspection with the other rules</td></tr>
      <tr><td>1<sub>3s</sub></td><td>One control beyond ±3 SD</td><td>Random error (or large systematic error)</td></tr>
      <tr><td>2<sub>2s</sub></td><td>Two consecutive controls (or both levels in one run) beyond the same ±2 SD</td><td>Systematic error</td></tr>
      <tr><td>R<sub>4s</sub></td><td>Range between two controls in a run exceeds 4 SD (one +2 SD, other −2 SD)</td><td>Random error</td></tr>
      <tr><td>4<sub>1s</sub></td><td>Four consecutive controls beyond the same ±1 SD</td><td>Systematic error (shift)</td></tr>
      <tr><td>10<sub>x̄</sub></td><td>Ten consecutive controls on one side of the mean</td><td>Systematic error (shift or trend)</td></tr>
    </table></div>
    <h4>What to do</h4>
    <ol>
      <li>Hold patient results for the run; do not simply repeat the control and accept it if it passes.</li>
      <li>Use the rule violated to direct troubleshooting: <em>random</em> → pipetting, bubbles, sample clot, electrical noise, unstable temperature; <em>systematic</em> → new reagent or calibrator lot, calibration drift, deteriorating lamp, deteriorated control material, incorrect set-point.</li>
      <li>Correct the cause, recalibrate if needed, rerun controls, then rerun patient samples since the last acceptable run.</li>
      <li>Document the event and corrective action (ISO 15189 requirement).</li>
    </ol>
    <p>Modern practice selects rules by <strong>Sigma metric</strong>: high-Sigma tests (≥6) can use a simple 1<sub>3s</sub> rule with fewer controls; low-Sigma tests need full multirules and more frequent QC.</p>
  `,
  tip: "Say clearly that 1-2s is a warning rule, and pair every rule with random vs systematic error.",
  sources: ["C4", "C2", "C1"]
},
{
  id: "cc2", domain: "chem-qc", star: true,
  q: "A new HbA1c analyser is to replace the old one. Outline the method verification/validation studies you would perform before releasing patient results.",
  tags: ["method evaluation", "verification", "CLSI EP"],
  answer: `
    <p>For an FDA-cleared or CE-marked method used unmodified, the laboratory <strong>verifies</strong> the manufacturer's claims. For a laboratory-developed or modified test it must <strong>validate</strong> fully. Under ISO 15189:2022 and DOH licensing rules, the study must be planned, have predefined acceptance criteria, and be signed off before use.</p>
    <h4>Step-by-step plan</h4>
    <ol>
      <li><strong>Define allowable total error (TEa)</strong> — for HbA1c, e.g. NGSP/CAP criteria of about ±6%, or biological-variation-derived goals.</li>
      <li><strong>Precision (CLSI EP15/EP05)</strong> — two or more levels, 5 replicates × 5 days; compare repeatability and within-lab CV with the manufacturer.</li>
      <li><strong>Trueness / bias (EP09, EP15)</strong> — run ≥40 patient samples covering the reportable range on old and new methods (or a reference method); use Deming or Passing–Bablok regression and a Bland–Altman difference plot; check bias at decision points (5.7% and 6.5%).</li>
      <li><strong>Linearity / reportable range (EP06)</strong> — 5–7 levels across the range.</li>
      <li><strong>Interference</strong> — haemoglobin variants (HbS, HbE, HbC, HbF — very relevant in the Philippines and Southeast Asia, where HbE and α-thalassaemia are common), carbamylated Hb, lipaemia, bilirubin.</li>
      <li><strong>Carry-over</strong> high-to-low.</li>
      <li><strong>Reference interval / decision limits</strong> — HbA1c uses ADA decision limits, so transference rather than a new reference interval study.</li>
      <li><strong>Total error</strong> = |bias| + 2 SD (or Sigma = (TEa − |bias|)/CV); accept if within TEa.</li>
    </ol>
    <p>Finally: staff training and competency, QC rules chosen from the Sigma, enrolment in external quality assessment, LIS interface validation, and communication of any bias to clinicians.</p>
  `,
  tip: "Distinguish verification from validation and name the CLSI EP document for each step.",
  sources: ["C5", "C11", "C1", "C13"]
},
{
  id: "cc3", domain: "chem-qc",
  q: "Calculate and interpret the Sigma metric for a serum glucose method with CV 2.0%, bias 1.5% and TEa 10%. What QC strategy follows?",
  tags: ["Six Sigma", "calculation", "QC planning"],
  answer: `
    <div class="calc">Sigma = (TEa − |bias|) / CV
      = (10 − 1.5) / 2.0
      = 4.25</div>
    <h4>Interpretation</h4>
    <p>A Sigma of 4.25 is "good" but not world-class. On the Westgard Sigma scale, ≥6 is world class, 5 excellent, 4 good, 3 marginal and &lt;3 poor/unacceptable. About 4.25 σ means roughly 1 defect per ~250–600 results — fine but needs careful QC.</p>
    <h4>QC strategy</h4>
    <ul>
      <li>Use a multirule such as <strong>1<sub>3s</sub>/2<sub>2s</sub>/R<sub>4s</sub>/4<sub>1s</sub></strong> with two levels per run (N = 4 over two runs), giving probability of error detection about 0.9 with low false rejection.</li>
      <li>Run QC more often (e.g. every 200–300 patient samples) and before releasing batches.</li>
      <li>Improve the Sigma by reducing imprecision (maintenance, newer reagent) or bias (recalibration, traceable calibrators).</li>
    </ul>
    <p>By comparison: if CV were 1.4% the Sigma would be 6.1 and a single 1<sub>3s</sub> rule with N = 2 would be enough. If Sigma were &lt;3, the method is not fit for purpose and QC cannot rescue it.</p>
  `,
  tip: "Show the formula, the substitution and the unit-free answer — then link the number to a specific QC rule.",
  sources: ["C4", "C1"]
},
{
  id: "cc4", domain: "chem-qc",
  q: "Discuss the sources of pre-analytical error in clinical chemistry and the measures that reduce them.",
  tags: ["pre-analytical", "haemolysis", "order of draw"],
  answer: `
    <p>Up to two-thirds of laboratory errors arise <strong>before</strong> the sample reaches the analyser. They are best grouped by stage.</p>
    <h4>Patient preparation</h4>
    <p>Fasting status (triglycerides, glucose), posture (protein-bound analytes rise ~10% standing), diurnal variation (cortisol, iron), recent exercise (CK), drugs and supplements (biotin interference in streptavidin immunoassays).</p>
    <h4>Collection</h4>
    <ul>
      <li>Wrong patient / mislabelling — the most dangerous error; two identifiers at bedside.</li>
      <li>Prolonged tourniquet → haemoconcentration; drip-arm contamination (glucose, K, Na).</li>
      <li><strong>Order of draw</strong> (CLSI GP41): blood culture → citrate → serum → heparin → EDTA → fluoride/oxalate. EDTA carry-over gives spurious hyperkalaemia and hypocalcaemia.</li>
      <li>Wrong tube or under-filled citrate tube.</li>
    </ul>
    <h4>Handling and transport</h4>
    <p>Haemolysis (raises K, LDH, AST, phosphate; interferes spectrally), delayed separation (glucose falls 5–7%/h without fluoride; K leaks out), refrigeration of whole blood (K rises), light exposure (bilirubin), ammonia and lactate need ice and prompt analysis.</p>
    <h4>Control measures</h4>
    <p>Written collection manual, phlebotomist training and competency, barcoded labelling at the bedside, serum indices (H, I, L) on every sample with defined rejection limits, sample rejection criteria, pneumatic tube validation, and monitoring with quality indicators (e.g. IFCC Model of Quality Indicators).</p>
  `,
  tip: "Organise by patient → collection → handling, and give a concrete analyte for each error.",
  sources: ["C1", "C2", "C11"]
},
{
  id: "cc5", domain: "chem-qc",
  q: "Short notes: (a) reference interval vs clinical decision limit; (b) how to establish or transfer a reference interval.",
  tags: ["reference intervals", "EP28"],
  answer: `
    <h4>(a) Two different ideas</h4>
    <p>A <strong>reference interval</strong> describes a healthy reference population — usually the central 95% (2.5th–97.5th percentile). By definition 5% of healthy people fall outside it. A <strong>clinical decision limit</strong> is a value linked to an outcome or action, set by clinical studies or guidelines — e.g. fasting glucose ≥7.0 mmol/L for diabetes, LDL-C targets, troponin 99th percentile URL, HbA1c 6.5%. Decision limits do not depend on the local healthy population.</p>
    <h4>(b) Establishing (CLSI EP28-A3c)</h4>
    <ol>
      <li>Define the reference population and exclusion criteria (questionnaire).</li>
      <li>Standardise pre-analytical conditions.</li>
      <li>Collect at least <strong>120</strong> individuals per partition (age, sex) for non-parametric percentiles.</li>
      <li>Remove outliers (Dixon or Tukey), test whether partitioning is needed (Harris–Boyd).</li>
      <li>Calculate 2.5th and 97.5th percentiles with 90% confidence intervals.</li>
    </ol>
    <h4>Transferring / verifying</h4>
    <p>Most laboratories <strong>verify</strong> a manufacturer's or published interval with <strong>20</strong> local healthy samples: if no more than 2 (10%) fall outside, the interval is accepted; if 3–4 fall outside, test another 20; if still failing, establish locally. Philippine laboratories should check intervals derived from Western populations — e.g. creatinine, uric acid and lipids may differ by body size and diet.</p>
  `,
  tip: "The numbers 120 (establish) and 20 with ≤2 outside (verify) are the marks examiners look for.",
  sources: ["C5", "C1", "C2"]
},
{
  id: "cc6", domain: "chem-qc",
  q: "Compare internal quality control and external quality assessment (proficiency testing). Why does a laboratory need both?",
  tags: ["EQA", "PT", "IQC"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>Internal QC</th><th>External quality assessment</th></tr>
      <tr><td>Purpose</td><td>Is today's run stable and fit to release?</td><td>Is the laboratory accurate compared with peers / a reference value?</td></tr>
      <tr><td>Material</td><td>Known control material with laboratory-set mean and SD</td><td>Unknown samples sent by an external provider</td></tr>
      <tr><td>Frequency</td><td>Every run / every shift</td><td>Periodic (e.g. monthly or quarterly)</td></tr>
      <tr><td>Main error detected</td><td>Precision and shifts relative to the laboratory's own mean</td><td>Bias (trueness) relative to the peer group or reference</td></tr>
      <tr><td>Timing of action</td><td>Prospective — before release</td><td>Retrospective</td></tr>
      <tr><td>Statistics</td><td>Westgard rules, Levey–Jennings</td><td>SDI / z-score (|z| &gt; 2 questionable, &gt; 3 unacceptable), % deviation from target</td></tr>
    </table></div>
    <p>IQC alone can be "in control" around a wrong mean — a stable but biased method passes every Westgard rule. EQA reveals this bias, compares methods, and is required for licensing and accreditation. In the Philippines, DOH-designated National Reference Laboratories run EQA programmes (the Lung Center of the Philippines is the NRL for clinical chemistry) and participation is a condition of the clinical laboratory licence. Unacceptable EQA results require root-cause analysis (clerical, method, calibration, sample handling) and documented corrective action.</p>
  `,
  tip: "The key sentence: IQC tells you about precision and stability, EQA tells you about accuracy.",
  sources: ["C1", "C11", "C13"]
},
{
  id: "cc7", domain: "chem-qc",
  q: "Discuss the advantages, risks and quality management of point-of-care testing (POCT) in a hospital.",
  tags: ["POCT", "glucometer", "governance"],
  answer: `
    <p>POCT moves testing to the bedside, clinic or community. Its value is speed of decision, not cheaper tests.</p>
    <h4>Advantages</h4>
    <ul><li>Short turnaround (glucose, blood gases, troponin, INR, HbA1c, creatinine).</li><li>Small sample volume — useful in neonates.</li><li>Access in rural health units and barangay health stations, where transport to a central laboratory is slow.</li></ul>
    <h4>Risks</h4>
    <ul>
      <li>Operators are not laboratory scientists; poor technique and poor QC compliance.</li>
      <li>Analytical limits: glucometers are affected by haematocrit, oxygen, maltose/icodextrin (GDH-PQQ strips), and are inaccurate in shock or hypoperfusion.</li>
      <li>Results not captured in the medical record; no traceability of who tested whom.</li>
      <li>Higher cost per test.</li>
    </ul>
    <h4>Quality management</h4>
    <ol>
      <li>A multidisciplinary <strong>POCT committee</strong> led by the laboratory.</li>
      <li>Device selection after a verification study versus the main laboratory.</li>
      <li>Operator training, certification and lock-out of uncertified users.</li>
      <li>IQC and EQA with documented review; connectivity (POCT1-A) for automatic data capture.</li>
      <li>Periodic correlation with the main analyser.</li>
      <li>ISO 22870 (now merged into ISO 15189:2022) as the standard.</li>
    </ol>
  `,
  tip: "Name a specific interference (haematocrit, maltose) — it shows real knowledge of POCT limits.",
  sources: ["C1", "C11", "C2"]
},
{
  id: "cc8", domain: "chem-qc",
  q: "What is measurement uncertainty? How is it estimated in a routine clinical chemistry laboratory and how is it different from total error?",
  tags: ["measurement uncertainty", "ISO 15189"],
  answer: `
    <p><strong>Measurement uncertainty (MU)</strong> is a parameter that describes the dispersion of values that could reasonably be attributed to the measurand. ISO 15189 requires laboratories to estimate MU for each quantitative procedure and make it available on request.</p>
    <h4>Top-down ("Nordtest") estimation</h4>
    <div class="calc">u(Rw) = long-term within-lab CV from IQC (≥6 months)
u(bias) = √(bias² + u(Cref)²)   (from EQA or reference material)
uc = √(u(Rw)² + u(bias)²)
Expanded U = k × uc,  with k = 2 (≈95% coverage)</div>
    <p>Example: CV 3%, uncertainty of calibrator 1% → uc = √(9 + 1) = 3.2%; U = 6.3%. A result of 5.0 mmol/L would be reported as 5.0 ± 0.32 mmol/L.</p>
    <h4>MU vs total error</h4>
    <div class="table-wrap"><table>
      <tr><th>Measurement uncertainty</th><th>Total analytical error</th></tr>
      <tr><td>Metrological (GUM) model</td><td>Westgard / clinical laboratory model</td></tr>
      <tr><td>Assumes bias is corrected; any uncorrected bias added as an uncertainty component</td><td>Adds bias linearly: TE = |bias| + 1.65 or 2 × SD</td></tr>
      <tr><td>Combines components in quadrature</td><td>Compared with allowable total error (TEa)</td></tr>
    </table></div>
    <p>Both are used: MU for interpretation of change (with reference change values) and accreditation, TE/Sigma for QC planning.</p>
  `,
  tip: "Write the top-down formula; examiners like to see k = 2 and the combination 'in quadrature'.",
  sources: ["C11", "C1", "C4"]
},
{
  id: "cc9", domain: "chem-carb", star: true,
  q: "Discuss the laboratory diagnosis and classification of diabetes mellitus, including the criteria and the limitations of each test.",
  tags: ["diabetes", "HbA1c", "OGTT", "ADA"],
  answer: `
    <h4>Diagnostic criteria (ADA; also adopted by the Philippine guidelines)</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Diabetes</th><th>Prediabetes</th></tr>
      <tr><td>Fasting plasma glucose (≥8 h)</td><td>≥ 7.0 mmol/L (126 mg/dL)</td><td>5.6–6.9 mmol/L (IFG)</td></tr>
      <tr><td>2-h plasma glucose, 75 g OGTT</td><td>≥ 11.1 mmol/L (200 mg/dL)</td><td>7.8–11.0 mmol/L (IGT)</td></tr>
      <tr><td>HbA1c (NGSP-certified method)</td><td>≥ 6.5% (48 mmol/mol)</td><td>5.7–6.4%</td></tr>
      <tr><td>Random glucose + classic symptoms or hyperglycaemic crisis</td><td>≥ 11.1 mmol/L</td><td>—</td></tr>
    </table></div>
    <p>In the absence of unequivocal hyperglycaemia, two abnormal results (same sample or two samples) are required.</p>
    <h4>Classification</h4>
    <p>Type 1 (autoimmune β-cell destruction — GAD65, IA-2, ZnT8, insulin autoantibodies; low C-peptide), type 2 (insulin resistance with progressive secretory defect), gestational diabetes, and specific types (MODY, pancreatic disease, drug-induced, cystic fibrosis).</p>
    <h4>Limitations</h4>
    <ul>
      <li><strong>FPG:</strong> glycolysis in unseparated samples lowers glucose — use fluoride–citrate tubes or immediate separation.</li>
      <li><strong>OGTT:</strong> inconvenient, poorly reproducible; needs ≥150 g/day carbohydrate for 3 days beforehand.</li>
      <li><strong>HbA1c:</strong> unreliable when red cell lifespan changes (haemolysis, iron deficiency, transfusion, pregnancy, CKD) and with haemoglobin variants; less sensitive than OGTT in Asians.</li>
    </ul>
  `,
  tip: "Give the cut-offs in both mmol/L and mg/dL — Philippine examiners often expect conventional units too.",
  sources: ["C6", "C1", "C2"]
},
{
  id: "cc10", domain: "chem-carb", star: true,
  q: "Describe the formation of glycated haemoglobin and discuss the methods for its measurement and standardisation.",
  tags: ["HbA1c", "IFCC", "NGSP", "HPLC"],
  answer: `
    <h4>Formation</h4>
    <p>Glucose reacts non-enzymatically with the N-terminal valine of the haemoglobin β chain to form an unstable Schiff base (aldimine, "labile A1c"), which undergoes Amadori rearrangement to a stable ketoamine — <strong>HbA1c</strong>. The amount is proportional to the average glucose over the red cell lifespan, weighted to the last 30 days (about 50% of the value).</p>
    <h4>Methods</h4>
    <div class="table-wrap"><table>
      <tr><th>Principle</th><th>Method</th><th>Notes</th></tr>
      <tr><td>Charge difference</td><td>Cation-exchange HPLC; capillary electrophoresis</td><td>Detects many variants (HbS, HbE, HbF) — a bonus and a warning</td></tr>
      <tr><td>Structure</td><td>Boronate affinity chromatography</td><td>Measures all glycated Hb; least affected by variants</td></tr>
      <tr><td>Antibody</td><td>Immunoturbidimetric</td><td>Antibody to glycated N-terminal of β chain; fast on chemistry analysers</td></tr>
      <tr><td>Enzymatic</td><td>Fructosyl-peptide oxidase</td><td>Measures glycated dipeptides after protease digestion</td></tr>
    </table></div>
    <h4>Standardisation</h4>
    <p>The <strong>IFCC reference method</strong> (HPLC–mass spectrometry or capillary electrophoresis of the glycated β-N-terminal hexapeptide) is the anchor of traceability, reported in mmol/mol. The <strong>NGSP</strong> network certifies methods traceable to the DCCT, reported in %. Master equation: <em>NGSP % = 0.0915 × IFCC + 2.15</em>. ADA/EASD/IDF/IFCC recommend dual reporting. The estimated average glucose (eAG, mg/dL) = 28.7 × A1c − 46.7.</p>
  `,
  tip: "Draw the Schiff base → Amadori product step and quote the master equation.",
  sources: ["C1", "C6", "C2"]
},
{
  id: "cc11", domain: "chem-carb",
  q: "Case: a 19-year-old with type 1 diabetes has glucose 28 mmol/L, Na 128, K 5.6, Cl 92, HCO₃⁻ 8 mmol/L, pH 7.08 and positive serum ketones. Interpret the results and explain the biochemical basis.",
  tags: ["DKA", "case", "anion gap"],
  answer: `
    <div class="calc">Anion gap = Na − (Cl + HCO₃) = 128 − (92 + 8) = 28 mmol/L  (high)
Corrected Na = 128 + 2.4 × [(28 − 5.5)/5.5] ≈ 128 + 9.8 ≈ 138 mmol/L
Expected pCO₂ (Winter) = 1.5 × 8 + 8 ± 2 = 18–22 mmHg</div>
    <h4>Interpretation</h4>
    <p><strong>Diabetic ketoacidosis</strong>: hyperglycaemia, severe high anion gap metabolic acidosis due to ketoacids (β-hydroxybutyrate, acetoacetate), with respiratory compensation (check pCO₂ against Winter's formula). The low measured sodium is a <em>dilutional</em> pseudohyponatraemia from glucose drawing water out of cells; the corrected sodium is normal.</p>
    <h4>Biochemical basis</h4>
    <ul>
      <li>Insulin deficiency + high glucagon, cortisol and catecholamines → glycogenolysis, gluconeogenesis and lipolysis.</li>
      <li>Free fatty acids reach the liver; low malonyl-CoA (low insulin/glucagon ratio) de-inhibits CPT-1, so fatty acids enter mitochondria → β-oxidation → acetyl-CoA → ketone bodies.</li>
      <li>Osmotic diuresis loses water, Na, K and phosphate.</li>
    </ul>
    <h4>Potassium paradox</h4>
    <p>Serum K is high because acidosis and insulin lack shift K out of cells, yet <strong>total body K is depleted</strong>. Insulin therapy drives K into cells — monitor closely and replace K when it falls below ~5.0–5.3 mmol/L.</p>
    <h4>Laboratory notes</h4>
    <p>Nitroprusside (urine dipstick) detects acetoacetate and acetone, not β-hydroxybutyrate — the dominant ketone in DKA. Measure β-HB directly to diagnose and monitor; the nitroprusside test may paradoxically turn more positive during recovery as β-HB is converted to acetoacetate.</p>
  `,
  tip: "Always calculate the anion gap and corrected sodium in a case question — show the working.",
  sources: ["C1", "C2", "C15"]
},
{
  id: "cc12", domain: "chem-carb",
  q: "Approach to hypoglycaemia in an adult non-diabetic patient: what laboratory tests are performed and how are they interpreted?",
  tags: ["hypoglycaemia", "insulinoma", "C-peptide"],
  answer: `
    <p>Hypoglycaemia is confirmed by <strong>Whipple's triad</strong>: symptoms, a low plasma glucose (&lt;3.0 mmol/L / 55 mg/dL in non-diabetics), and relief when glucose is raised.</p>
    <h4>Critical sample (taken during the episode or a 72-h supervised fast)</h4>
    <p>Glucose, insulin, C-peptide, proinsulin, β-hydroxybutyrate, sulfonylurea screen, and response of glucose to 1 mg IV glucagon; also cortisol and IGF-2 if indicated.</p>
    <div class="table-wrap"><table>
      <tr><th>Cause</th><th>Insulin</th><th>C-peptide</th><th>Proinsulin</th><th>β-HB</th><th>Sulfonylurea</th></tr>
      <tr><td>Insulinoma</td><td>↑</td><td>↑</td><td>↑</td><td>↓</td><td>neg</td></tr>
      <tr><td>Sulfonylurea ingestion</td><td>↑</td><td>↑</td><td>↑</td><td>↓</td><td>pos</td></tr>
      <tr><td>Exogenous insulin</td><td>↑↑</td><td>↓</td><td>↓</td><td>↓</td><td>neg</td></tr>
      <tr><td>Non-islet tumour (IGF-2)</td><td>↓</td><td>↓</td><td>↓</td><td>↓</td><td>neg</td></tr>
      <tr><td>Insulin-independent (fasting, adrenal failure, liver failure, alcohol)</td><td>↓</td><td>↓</td><td>↓</td><td>↑</td><td>neg</td></tr>
    </table></div>
    <h4>Laboratory pitfalls</h4>
    <ul>
      <li>Pseudohypoglycaemia from delayed separation or leukocytosis/erythrocytosis — use fluoride tubes, separate quickly.</li>
      <li>Insulin analogues may not cross-react with some insulin immunoassays.</li>
      <li>Insulin autoimmune syndrome (Hirata disease) — very high insulin with anti-insulin antibodies; more common in East Asians.</li>
    </ul>
  `,
  tip: "The C-peptide vs insulin contrast separating insulinoma from factitious insulin is the core of this answer.",
  sources: ["C14", "C1", "C2"]
},
{
  id: "cc13", domain: "chem-carb",
  q: "Discuss screening and diagnosis of gestational diabetes mellitus, comparing the one-step and two-step approaches.",
  tags: ["GDM", "OGTT", "pregnancy"],
  answer: `
    <p>GDM is diabetes first diagnosed in the second or third trimester that was not clearly overt before pregnancy. It increases risk of macrosomia, shoulder dystocia, neonatal hypoglycaemia, pre-eclampsia and later type 2 diabetes in the mother. Screening is at <strong>24–28 weeks</strong>; women with risk factors are tested at the first visit to detect pre-existing diabetes.</p>
    <div class="table-wrap"><table>
      <tr><th></th><th>One-step (IADPSG / WHO 2013)</th><th>Two-step (Carpenter–Coustan / NDDG)</th></tr>
      <tr><td>Procedure</td><td>75 g OGTT fasting; 0, 1, 2 h</td><td>50 g non-fasting challenge; if 1-h ≥7.2–7.8 mmol/L → 100 g 3-h OGTT</td></tr>
      <tr><td>Cut-offs</td><td>Fasting ≥5.1, 1-h ≥10.0, 2-h ≥8.5 mmol/L — <strong>any one</strong> value</td><td>CC: 5.3 / 10.0 / 8.6 / 7.8 mmol/L — <strong>two or more</strong> values</td></tr>
      <tr><td>Evidence</td><td>Based on HAPO outcomes; detects more women</td><td>Fewer diagnoses, lower cost and workload</td></tr>
      <tr><td>Drawback</td><td>Higher prevalence and treatment burden</td><td>Two visits; misses milder hyperglycaemia</td></tr>
    </table></div>
    <p>The Philippine practice (POGS and Philippine diabetes guidelines) favours the <strong>75 g one-step OGTT</strong> with IADPSG criteria. HbA1c is not recommended for GDM diagnosis because of physiological changes in red cell turnover. Postpartum, women with GDM should have a 75 g OGTT at 4–12 weeks and lifelong screening every 1–3 years.</p>
  `,
  tip: "Remember: one-step needs ONE abnormal value, the 100 g test needs TWO.",
  sources: ["C6", "C1"]
},
{
  id: "cc14", domain: "chem-carb",
  q: "Compare the enzymatic methods for glucose measurement. Which is the reference method and why?",
  tags: ["glucose methods", "hexokinase", "glucose oxidase"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Reaction</th><th>Strengths</th><th>Weaknesses</th></tr>
      <tr><td><strong>Hexokinase</strong> (reference)</td><td>Glucose + ATP → G-6-P; G-6-PD: G-6-P + NADP⁺ → 6-phosphogluconate + NADPH (read at 340 nm)</td><td>Highly specific; few interferences; basis of the reference method (with deproteinisation)</td><td>Gross haemolysis (releases G-6-P/NADPH); costlier</td></tr>
      <tr><td><strong>Glucose oxidase</strong> – Trinder</td><td>β-D-glucose + O₂ → gluconic acid + H₂O₂; peroxidase + chromogen → colour</td><td>Cheap; specific for β-D-glucose (mutarotase added)</td><td>Peroxidase step suffers from reducing agents (ascorbate, uric acid, bilirubin) → falsely low</td></tr>
      <tr><td>Glucose oxidase – polarographic</td><td>O₂ consumption measured by an electrode</td><td>Avoids the peroxidase step</td><td>—</td></tr>
      <tr><td>Glucose dehydrogenase</td><td>Glucose + NAD⁺ → gluconolactone + NADH</td><td>Unaffected by oxygen; used in meters</td><td>GDH-PQQ also reacts with maltose, xylose, galactose → dangerous false highs (icodextrin dialysis)</td></tr>
    </table></div>
    <p>Hexokinase is the reference because the indicator reaction (G-6-PD) is specific and NADPH absorbance is measured directly with a well-known molar absorptivity (6.22 × 10³ L mol⁻¹ cm⁻¹). Specimen: plasma glucose is ~11% higher than whole blood; capillary glucose is higher than venous post-prandially. Fluoride inhibits enolase but needs 1–2 hours to act — citrate-acidified tubes stop glycolysis immediately.</p>
  `,
  tip: "A table comparing reaction, strength and interference is the fastest way to score here.",
  sources: ["C2", "C1"]
},
{
  id: "cc15", domain: "chem-carb",
  q: "Explain the laboratory investigation of inborn errors of carbohydrate metabolism, using galactosaemia and glycogen storage disease type I as examples. Include newborn screening in the Philippines.",
  tags: ["galactosaemia", "GSD", "newborn screening"],
  answer: `
    <h4>Galactosaemia (classic, GALT deficiency)</h4>
    <p>Galactose-1-phosphate accumulates after milk feeding → vomiting, jaundice, liver failure, <em>E. coli</em> sepsis, cataracts. Laboratory: <strong>reducing substances positive</strong> in urine (Clinitest) with a <strong>negative glucose oxidase</strong> dipstick; red cell GALT activity (Beutler fluorescent spot test); galactose-1-phosphate levels; GALT genotyping. Transfusion within 3 months gives false normal enzyme results. Treatment: remove lactose/galactose.</p>
    <h4>GSD type Ia (von Gierke, glucose-6-phosphatase deficiency)</h4>
    <p>Fasting hypoglycaemia with hepatomegaly, <strong>lactic acidosis, hyperuricaemia and hypertriglyceridaemia</strong>; no glucose rise after glucagon. Diagnosis now by <em>G6PC</em> gene sequencing rather than liver biopsy. Type Ib (transporter defect) adds neutropenia.</p>
    <h4>General approach</h4>
    <p>Glucose, lactate, ketones, uric acid, lipids, liver enzymes, urine reducing substances, then specific enzyme assays or molecular testing.</p>
    <h4>Philippine newborn screening</h4>
    <p>Under <strong>RA 9288</strong> (Newborn Screening Act of 2004), heel-prick blood spots are collected 24–72 h after birth and tested at Newborn Screening Centers. The <strong>expanded NBS</strong> panel (since 2014) includes galactosaemia, along with congenital hypothyroidism, CAH, PKU, G6PD deficiency, MSUD, haemoglobinopathies and other organic acid, fatty acid oxidation and urea cycle disorders, using tandem mass spectrometry and enzyme assays.</p>
  `,
  tip: "The Clinitest-positive / glucose-oxidase-negative contrast is the classic exam clue for galactosaemia.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc16", domain: "chem-lipid", star: true,
  q: "Describe the structure, classification and metabolism of lipoproteins (exogenous, endogenous and reverse cholesterol transport pathways).",
  tags: ["lipoproteins", "apolipoproteins", "metabolism"],
  answer: `
    <p>Lipoproteins are spherical particles with a core of triglyceride and cholesteryl ester surrounded by phospholipid, free cholesterol and apolipoproteins.</p>
    <div class="table-wrap"><table>
      <tr><th>Class</th><th>Main lipid</th><th>Key apoproteins</th><th>Electrophoresis</th></tr>
      <tr><td>Chylomicron</td><td>Dietary TG</td><td>B-48, C-II, E</td><td>Origin</td></tr>
      <tr><td>VLDL</td><td>Hepatic TG</td><td>B-100, C-II, E</td><td>Pre-β</td></tr>
      <tr><td>IDL</td><td>TG + CE</td><td>B-100, E</td><td>Broad β</td></tr>
      <tr><td>LDL</td><td>Cholesteryl ester</td><td>B-100</td><td>β</td></tr>
      <tr><td>HDL</td><td>Phospholipid, CE</td><td>A-I, A-II</td><td>α</td></tr>
      <tr><td>Lp(a)</td><td>CE</td><td>B-100 + apo(a)</td><td>Pre-β</td></tr>
    </table></div>
    <h4>Exogenous pathway</h4>
    <p>Enterocytes package dietary fat into chylomicrons (apo B-48), which acquire apo C-II and E from HDL. <strong>Lipoprotein lipase</strong> (activated by apo C-II) hydrolyses TG in capillaries; remnants are taken up by the liver via apo E receptors.</p>
    <h4>Endogenous pathway</h4>
    <p>The liver secretes VLDL (apo B-100); LPL converts it to IDL, then hepatic lipase converts IDL to LDL. LDL is cleared by the <strong>LDL receptor</strong> (recognises apo B-100); PCSK9 promotes receptor degradation.</p>
    <h4>Reverse cholesterol transport</h4>
    <p>Lipid-poor apo A-I takes cholesterol from cells via <strong>ABCA1</strong>; <strong>LCAT</strong> (activated by apo A-I) esterifies it, making mature HDL. CETP transfers CE from HDL to apo B lipoproteins in exchange for TG; HDL CE is also taken up by the liver via SR-B1 and excreted in bile.</p>
  `,
  tip: "Link each enzyme to its activator: LPL–apo C-II, LCAT–apo A-I, LDL receptor–apo B-100/E.",
  sources: ["C1", "C2", "C8"]
},
{
  id: "cc17", domain: "chem-lipid",
  q: "Calculate LDL-cholesterol using Friedewald for TC 6.2, HDL 1.1 and TG 2.0 mmol/L. Discuss the limitations of the formula and alternatives.",
  tags: ["Friedewald", "Martin-Hopkins", "calculation"],
  answer: `
    <div class="calc">LDL-C = TC − HDL-C − TG/2.2   (mmol/L)   [TG/5 when mg/dL]
      = 6.2 − 1.1 − 2.0/2.2
      = 6.2 − 1.1 − 0.91
      = 4.19 mmol/L  (≈ 162 mg/dL)</div>
    <h4>Assumptions and limitations</h4>
    <ul>
      <li>Assumes a fixed TG:VLDL-cholesterol ratio of 5:1 (mg/dL). Invalid when <strong>TG &gt; 4.5 mmol/L (400 mg/dL)</strong>.</li>
      <li>Underestimates LDL-C when LDL-C is low (&lt;1.8 mmol/L) and TG is moderately high — exactly the patients on high-intensity statins whose targets matter.</li>
      <li>Invalid in type III dyslipoproteinaemia (β-VLDL) and chylomicronaemia; requires fasting traditionally.</li>
      <li>Combines the errors of three measurements.</li>
    </ul>
    <h4>Alternatives</h4>
    <ul>
      <li><strong>Martin–Hopkins</strong> — uses an adjustable factor from a 180-cell table based on TG and non-HDL-C; more accurate at low LDL-C.</li>
      <li><strong>Sampson (NIH) equation</strong> — valid up to TG ~9 mmol/L (800 mg/dL).</li>
      <li><strong>Direct homogeneous LDL-C assays</strong> — variable specificity between manufacturers.</li>
      <li><strong>Beta-quantification</strong> (ultracentrifugation + precipitation) — reference method.</li>
      <li><strong>Non-HDL-C</strong> (TC − HDL) and <strong>apo B</strong> — capture all atherogenic particles, useful in hypertriglyceridaemia and diabetes.</li>
    </ul>
  `,
  tip: "Remember 2.2 for mmol/L and 5 for mg/dL — a wrong divisor loses the whole calculation mark.",
  sources: ["C1", "C8", "C2"]
},
{
  id: "cc18", domain: "chem-lipid",
  q: "Discuss familial hypercholesterolaemia: genetics, laboratory diagnosis and the role of cascade screening.",
  tags: ["FH", "LDL receptor", "PCSK9"],
  answer: `
    <p>Familial hypercholesterolaemia is a common autosomal (co-)dominant disorder of LDL clearance. Heterozygous FH affects about 1 in 250–300 people; homozygous FH about 1 in 300,000.</p>
    <h4>Genetics</h4>
    <ul>
      <li><strong>LDLR</strong> mutations (~85–90%) — receptor absent, defective binding or recycling.</li>
      <li><strong>APOB</strong> (e.g. R3527Q) — defective binding of apo B-100.</li>
      <li><strong>PCSK9</strong> gain-of-function — excessive receptor degradation.</li>
      <li>Autosomal recessive form: <em>LDLRAP1</em>.</li>
    </ul>
    <h4>Laboratory and clinical diagnosis</h4>
    <p>LDL-C typically &gt;4.9 mmol/L (190 mg/dL) in adults with heterozygous FH and &gt;13 mmol/L in homozygous FH, with normal TG. Scoring systems: <strong>Dutch Lipid Clinic Network</strong> (LDL level, family history, premature CAD, tendon xanthoma, arcus before 45, DNA mutation) and Simon Broome criteria. Exclude secondary causes: hypothyroidism, nephrotic syndrome, cholestasis. Genetic testing confirms and enables cascade testing.</p>
    <h4>Cascade screening</h4>
    <p>Once an index case is found, first-degree relatives (then second-degree) are tested — each has a 50% chance. It is the most cost-effective way to find cases early; children are screened from age 2–10. Early statin therapy normalises life expectancy; ezetimibe, PCSK9 inhibitors and inclisiran add further lowering. FH is badly under-diagnosed in Asia, including the Philippines.</p>
  `,
  tip: "Name all three genes and the Dutch Lipid Clinic criteria.",
  sources: ["C8", "C1"]
},
{
  id: "cc19", domain: "chem-lipid",
  q: "Explain the clinical and laboratory significance of lipoprotein(a) and apolipoprotein B in cardiovascular risk assessment.",
  tags: ["Lp(a)", "apo B", "risk"],
  answer: `
    <h4>Lipoprotein(a)</h4>
    <p>Lp(a) is an LDL-like particle where apo B-100 is linked by a disulfide bond to <strong>apo(a)</strong>, a protein homologous to plasminogen with a variable number of kringle IV type 2 repeats. Plasma levels are about 90% <strong>genetically determined</strong> (by the <em>LPA</em> gene), stable through life and little affected by diet or statins. High Lp(a) is a causal, independent risk factor for atherosclerosis and calcific aortic valve stenosis, probably through pro-atherogenic, pro-inflammatory (oxidised phospholipids) and anti-fibrinolytic effects.</p>
    <p><strong>Measurement issues:</strong> apo(a) size heterogeneity makes immunoassays biased if antibodies recognise KIV-2 repeats; results should be reported in <strong>nmol/L</strong> (particle number) with isoform-insensitive assays, not mg/dL. ESC/EAS recommends measuring Lp(a) at least once in every adult; &gt;~125 nmol/L (≈50 mg/dL) indicates increased risk.</p>
    <h4>Apolipoprotein B</h4>
    <p>Each VLDL, IDL, LDL and Lp(a) particle carries exactly <strong>one apo B</strong>, so apo B = atherogenic particle number. It is a better risk marker than LDL-C when they disagree ("discordance") — e.g. in diabetes, metabolic syndrome and hypertriglyceridaemia with small dense LDL. It is well standardised (WHO-IFCC reference) and does not need fasting.</p>
  `,
  tip: "Two key ideas: Lp(a) is genetic and should be in nmol/L; one apo B per atherogenic particle.",
  sources: ["C8", "C1"]
},
{
  id: "cc20", domain: "chem-lipid",
  q: "A specimen is grossly lipaemic. Discuss its effects on laboratory tests and the methods used to remove or correct the interference.",
  tags: ["lipaemia", "interference", "pseudohyponatraemia"],
  answer: `
    <h4>Mechanisms of interference</h4>
    <ol>
      <li><strong>Light scattering/absorbance</strong> — chylomicrons and large VLDL raise absorbance, especially at lower wavelengths; affects photometric assays (e.g. falsely high or low ALT, AST, creatinine, depending on blanking).</li>
      <li><strong>Volume displacement</strong> — lipid occupies plasma volume; indirect ISE and flame photometry (which dilute the sample) underestimate Na and K → <strong>pseudohyponatraemia</strong>. Direct ISE (blood gas analyser) gives the true value.</li>
      <li><strong>Non-homogeneity</strong> — lipids float, so aspirated samples are uneven.</li>
      <li><strong>Physicochemical</strong> — lipids may extract lipophilic drugs or block antigen–antibody binding.</li>
    </ol>
    <h4>Detection</h4>
    <p>Automated serum indices (lipaemic index, L-index) with analyte-specific cut-offs from the manufacturer; visual inspection is unreliable.</p>
    <h4>Removal</h4>
    <ul>
      <li><strong>High-speed centrifugation</strong> or ultracentrifugation (CLSI recommends) — removes chylomicrons; the infranatant is tested.</li>
      <li>Lipid-clearing agents (e.g. LipoClear) — may interfere with some analytes.</li>
      <li>Dilution — only if analyte remains within the measuring range.</li>
      <li>Re-collect after a 12-h fast.</li>
    </ul>
    <p>Do not remove lipid before measuring triglyceride itself. Comment on reports if results are affected.</p>
  `,
  tip: "Pseudohyponatraemia with indirect ISE is the most-asked consequence — explain why direct ISE is unaffected.",
  sources: ["C1", "C2"]
},
{
  id: "cc21", domain: "chem-lipid",
  q: "Short notes: the Fredrickson classification of hyperlipoproteinaemia and the refrigerator (standing plasma) test.",
  tags: ["Fredrickson", "standing plasma test"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Elevated lipoprotein</th><th>Lipids</th><th>Standing plasma (4 °C overnight)</th><th>Example cause</th></tr>
      <tr><td>I</td><td>Chylomicrons</td><td>TG ↑↑↑</td><td>Creamy top, clear below</td><td>LPL or apo C-II deficiency</td></tr>
      <tr><td>IIa</td><td>LDL</td><td>TC ↑</td><td>Clear</td><td>Familial hypercholesterolaemia</td></tr>
      <tr><td>IIb</td><td>LDL + VLDL</td><td>TC ↑, TG ↑</td><td>Clear or slightly turbid</td><td>Familial combined hyperlipidaemia</td></tr>
      <tr><td>III</td><td>IDL (β-VLDL, remnants)</td><td>TC ↑, TG ↑ (similar)</td><td>Turbid, sometimes faint cream layer</td><td>Apo E2/E2 homozygosity + second hit</td></tr>
      <tr><td>IV</td><td>VLDL</td><td>TG ↑</td><td>Turbid throughout</td><td>Familial hypertriglyceridaemia, diabetes, alcohol</td></tr>
      <tr><td>V</td><td>Chylomicrons + VLDL</td><td>TG ↑↑↑, TC ↑</td><td>Creamy top over turbid layer</td><td>Combined genetic + secondary causes</td></tr>
    </table></div>
    <p>The standing plasma test works because chylomicrons are less dense than plasma and float as a cream layer, while VLDL is too small to float and keeps the plasma turbid. Electrophoresis showing a <strong>broad β band</strong> suggests type III, confirmed by apo E genotyping or a VLDL-C/TG ratio &gt;0.3 (mg/dL) after ultracentrifugation.</p>
    <p>Limitation: the classification describes phenotypes, not causes; the same person can change type with treatment or diet. Modern practice describes the lipid abnormality and its genetic or secondary cause.</p>
  `,
  tip: "A neat table with the standing-plasma appearance is all that this short note needs.",
  sources: ["C2", "C1"]
}
);
