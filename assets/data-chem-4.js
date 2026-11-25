/* Clinical Chemistry — part 4: quality & method evaluation, carbohydrates */
window.QBANK.push(
{
  id: "cc61", domain: "chem-qc",
  q: "Discuss the sources and control of analytical interference in clinical chemistry: haemolysis, icterus, lipaemia, drugs and paraproteins.",
  tags: ["interference", "serum indices", "HIL", "paraprotein"],
  keypoints: ["haemolysis index", "icteric index", "lipaemic index", "potassium LDH AST rise with haemolysis", "spectral interference by bilirubin", "light scattering by lipids", "volume displacement", "paraprotein precipitation", "flagging and suppression of results", "analyte-specific cut-offs", "drug interference digoxin-like substances", "biotin", "cross-reactivity in immunoassays", "comment on the report", "serial dilution and alternative method", "recollect the specimen"],
  answer: `
    <p>Interference is any effect of a substance in the sample that alters the measured value of the analyte. It is dangerous because the result looks plausible. Modern analysers therefore measure <strong>serum indices</strong> — the <strong>haemolysis (H), icteric (I) and lipaemic (L) indices</strong> — on every sample and apply <strong>analyte-specific cut-offs</strong>.</p>
    <div class="table-wrap"><table>
      <tr><th>Interferent</th><th>Mechanism</th><th>Typical effects</th></tr>
      <tr><td><strong>Haemolysis</strong></td><td>Release of intracellular contents plus spectral absorbance of haemoglobin at 415, 540 and 575 nm; enzymes released</td><td><strong>Potassium, LDH, AST, phosphate and magnesium rise</strong>; dilution lowers sodium and glucose slightly; interferes with bilirubin and troponin assays</td></tr>
      <tr><td><strong>Icterus</strong></td><td><strong>Spectral interference by bilirubin</strong> (peak ~450 nm) and chemical reactivity</td><td>Falsely altered creatinine (Jaffe), cholesterol, total protein; affects some enzymatic assays</td></tr>
      <tr><td><strong>Lipaemia</strong></td><td><strong>Light scattering by lipids</strong> and <strong>volume displacement</strong> of plasma water</td><td>Turbidity errors in photometric assays; <strong>pseudohyponatraemia</strong> with indirect ISE; non-homogeneous sampling</td></tr>
      <tr><td><strong>Paraproteins</strong></td><td><strong>Precipitation</strong> in reagent, rouleaux, volume displacement</td><td>Erratic results, flagged reaction curves, falsely low sodium; interferes with bilirubin, HDL, phosphate</td></tr>
      <tr><td><strong>Drugs and supplements</strong></td><td>Chemical or immunological cross-reaction; <strong>digoxin-like immunoreactive substances</strong>; <strong>biotin</strong> saturating streptavidin</td><td>Falsely high or low depending on assay format; prednisolone in cortisol assays; dopamine in creatinine assays</td></tr>
      <tr><td>Antibodies</td><td><strong>Cross-reactivity in immunoassays</strong>, heterophile antibodies, macro-analytes (macroprolactin, macro-CK)</td><td>Falsely raised or suppressed hormone and marker results</td></tr>
    </table></div>
    <h4>Control strategy</h4>
    <ol>
      <li>Prevention: good phlebotomy technique, correct tube, prompt separation, fasting sample for lipids.</li>
      <li>Detection: automatic indices with <strong>flagging and suppression of affected results</strong>; monitoring of reaction curves; delta checks against previous results.</li>
      <li>Resolution: <strong>recollect the specimen</strong> (best for haemolysis); ultracentrifuge a lipaemic sample; <strong>serial dilution and an alternative method or platform</strong>; PEG precipitation for macro-analytes; blocking tubes for heterophile antibodies; direct ISE for electrolytes.</li>
      <li>Communication: always <strong>comment on the report</strong> ("result may be affected by haemolysis") rather than releasing a number silently, and tell the clinician when a result is suppressed.</li>
      <li>Verification: interference studies (CLSI EP07/EP37) during method evaluation, and reviewing manufacturer interference claims.</li>
    </ol>
  `,
  tip: "Give the direction of the error for each interferent and always end with 'comment or suppress, then recollect'.",
  sources: ["C1", "C2", "C5"]
},
{
  id: "cc62", domain: "chem-qc",
  q: "Discuss the selection, use and limitations of quality control materials, including the setting of means and standard deviations, commutability and patient-based real-time quality control.",
  tags: ["QC material", "cumulative mean", "commutability", "PBRTQC"],
  keypoints: ["third-party versus manufacturer control", "assayed versus unassayed", "two or three concentrations near decision levels", "20 data points over 20 days to set mean and SD", "cumulative mean and SD updated monthly", "do not use manufacturer insert ranges as limits", "matrix effects and non-commutability", "control lot changes require re-establishing limits", "frequency based on risk and patient volume", "moving average of patient results", "average of normals", "delta check", "PBRTQC detects errors between QC runs", "QC cannot detect patient-specific errors", "quality control plan and risk management EP23"],
  answer: `
    <h4>Choosing control material</h4>
    <ul>
      <li><strong>Third-party controls</strong> are preferred over the manufacturer's own, because the latter may be optimised for the method and hide bias; <strong>unassayed</strong> material (no stated values) forces the laboratory to set its own limits.</li>
      <li>Use at least <strong>two or three concentrations near clinical decision levels</strong> — a control in the middle of the range may not detect error at the cut-off that matters.</li>
      <li>Consider stability, vial-to-vial variation, matrix (human-based preferable) and <strong>matrix effects causing non-commutability</strong>: controls may not behave like patient samples, so a control can pass while patient results are biased.</li>
    </ul>
    <h4>Setting the mean and SD</h4>
    <ol>
      <li>Collect at least <strong>20 data points over 20 separate days</strong> (not 20 in one run) to capture between-run variation.</li>
      <li>Calculate the mean and SD; exclude outliers with cause; compare the CV with the manufacturer's claim and with your allowable total error.</li>
      <li>Update as a <strong>cumulative mean and SD</strong> (e.g. monthly, rolling 6 months) so limits reflect real performance.</li>
      <li><strong>Never use the insert range as control limits</strong> — it is far too wide and will miss shifts.</li>
      <li>When the <strong>control lot changes</strong>, run the new lot in parallel and re-establish limits.</li>
    </ol>
    <h4>Frequency and QC planning</h4>
    <p>Frequency should follow <strong>risk</strong>: the Sigma metric, patient volume, the number of results that would need repeating ("patient risk" model of CLSI EP23), stability of the analyser, and regulatory minimums (at least once per day of testing, and after calibration, reagent lot change or maintenance). Document a <strong>quality control plan</strong> for each test.</p>
    <h4>Patient-based real-time QC (PBRTQC)</h4>
    <p>Because conventional QC only samples the process at discrete points, laboratories increasingly add patient-data monitoring: a <strong>moving average of patient results</strong> (or <strong>average of normals</strong>, moving median, exponentially weighted moving average) and <strong>delta checks</strong> on individual patients. Advantages: no cost per test, continuous monitoring, commutable by definition (real samples), and it <strong>detects errors between QC runs</strong>. Limitations: requires stable patient populations and careful truncation limits, is insensitive for analytes with wide biological variation, and needs IT support.</p>
    <p>Finally, remember what QC cannot do: it <strong>cannot detect patient-specific errors</strong> such as wrong patient, interference, or pre-analytical problems — these need delta checks, indices and clinical correlation.</p>
  `,
  tip: "Say firmly that insert ranges must not be used as limits, and mention PBRTQC — it marks current practice.",
  sources: ["C4", "C5", "C1"]
},
{
  id: "cc63", domain: "chem-qc",
  q: "Explain biological variation and its use in setting analytical performance specifications, reference change values and the choice between population reference intervals and individual monitoring.",
  tags: ["biological variation", "index of individuality", "RCV", "APS"],
  keypoints: ["within-subject variation CVi", "between-subject variation CVg", "desirable imprecision CVa less than half CVi", "desirable bias less than 0.25 times total biological variation", "index of individuality CVi over CVg", "low index means reference interval insensitive", "reference change value formula", "RCV equals 2.77 times square root of CVa squared plus CVi squared", "unidirectional versus bidirectional RCV", "EFLM biological variation database", "creatinine low index of individuality", "milan models for performance specifications", "outcome-based specifications", "state-of-the-art specifications", "serial results need RCV not reference interval"],
  answer: `
    <p>Every analyte varies around a homeostatic set point (<strong>within-subject variation, CV<sub>i</sub></strong>) and set points differ between people (<strong>between-subject variation, CV<sub>g</sub></strong>). These are tabulated in the <strong>EFLM biological variation database</strong>.</p>
    <h4>Performance specifications</h4>
    <p>The <strong>Milan models</strong> (2014 consensus) rank three approaches: (1) based on the effect of analytical performance on <strong>clinical outcomes</strong>; (2) based on <strong>biological variation</strong>; (3) based on <strong>state of the art</strong>. From biological variation:</p>
    <div class="calc">Desirable imprecision:  CVa ≤ 0.5 × CVi
Desirable bias:         B  ≤ 0.25 × √(CVi² + CVg²)
Desirable total error:   TE ≤ 1.65 × (0.5 × CVi) + 0.25 × √(CVi² + CVg²)</div>
    <p>Optimal and minimum specifications use 0.25 and 0.75 of CV<sub>i</sub> respectively.</p>
    <h4>Index of individuality</h4>
    <div class="calc">Index of individuality = CVi / CVg
&lt; 0.6  → low: population reference interval is INSENSITIVE for that person
&gt; 1.4  → high: population reference interval is useful</div>
    <p><strong>Creatinine, TSH, urate and many enzymes have a low index of individuality</strong>: a person's result can double and still lie inside the reference interval. For these, <strong>serial results interpreted with the reference change value matter more than the reference interval</strong>.</p>
    <h4>Reference change value</h4>
    <div class="calc">RCV = Z × √2 × √(CVa² + CVi²)
Z = 1.96 (bidirectional, 95%) → RCV = 2.77 × √(CVa² + CVi²)
Z = 1.65 (unidirectional, 95%) → RCV = 2.33 × √(CVa² + CVi²)</div>
    <p>Worked example — creatinine with CV<sub>a</sub> 2.0% and CV<sub>i</sub> 4.4%:</p>
    <div class="calc">RCV = 2.77 × √(2.0² + 4.4²) = 2.77 × √(4 + 19.4) = 2.77 × 4.84 ≈ 13.4%</div>
    <p>So a rise of less than about 13% is within normal variation and analytical noise, whereas a larger change is a real change — the principle behind the AKI criterion and behind monitoring tumour markers, HbA1c and thyroid tests. Use the <strong>unidirectional RCV</strong> when only one direction is clinically relevant (e.g. a rise in PSA).</p>
    <p>Limitations: published CV<sub>i</sub> values come from healthy subjects and may not apply in disease; they depend on study quality (BIVAC appraisal); and some analytes (hormones with circadian rhythms) need sampling standardisation instead.</p>
  `,
  tip: "Write both formulas and do one numerical RCV — it is the most examinable part of this topic.",
  sources: ["C1", "C5", "C4"]
},
{
  id: "cc64", domain: "chem-qc",
  q: "Discuss laboratory automation, total laboratory automation and middleware, and the role of autoverification and laboratory information systems in quality.",
  tags: ["automation", "autoverification", "LIS", "middleware"],
  keypoints: ["pre-analytical automation sorting and centrifugation", "track-based total laboratory automation", "random access analysers", "closed tube sampling reduces exposure", "middleware rules engine", "autoverification criteria", "delta check and critical value rules", "serum index rules", "reflex and reflective testing", "turnaround time monitoring", "validation of every rule before release", "audit trail and version control", "LIS interface validation", "unidirectional versus bidirectional interface", "critical result notification documentation", "ISO 15189 requirement for information systems"],
  answer: `
    <h4>Levels of automation</h4>
    <ul>
      <li><strong>Pre-analytical automation</strong>: decapping, sorting, aliquoting, labelling and <strong>centrifugation</strong> — where most manual errors and needlestick risks occur; <strong>closed-tube sampling reduces exposure</strong> to aerosols.</li>
      <li><strong>Analytical</strong>: <strong>random-access analysers</strong> with continuous loading, integrated clinical chemistry and immunoassay modules, onboard reagent and QC management.</li>
      <li><strong>Track-based total laboratory automation</strong> linking pre-analytical, analytical and post-analytical (refrigerated storage and retrieval) modules; consolidation with haematology and coagulation.</li>
      <li>Post-analytical: automated storage, add-on test retrieval and waste handling.</li>
    </ul>
    <h4>Middleware and autoverification</h4>
    <p><strong>Middleware</strong> is a rules engine sitting between analysers and the LIS. It allows <strong>autoverification</strong> — automatic release of results that satisfy defined criteria, so staff review only exceptions. Typical rules:</p>
    <ul>
      <li>Result within the reportable range and not flagged by the instrument.</li>
      <li>QC in control for that run and no maintenance flag.</li>
      <li><strong>Serum index rules</strong> (HIL) within limits.</li>
      <li><strong>Delta check</strong> within limits, and <strong>critical values</strong> held for human review and telephone notification.</li>
      <li>Consistency checks (e.g. anion gap, calculated versus measured osmolality, implausible combinations).</li>
      <li><strong>Reflex and reflective testing</strong> (e.g. add TSH if FT4 abnormal; add free light chains if an M-spike is seen).</li>
    </ul>
    <p>Benefits: shorter and more consistent <strong>turnaround time</strong>, fewer transcription errors, staff redeployed to problem solving. Requirements: <strong>every rule must be validated before release</strong> with test cases and documented sign-off, with an <strong>audit trail and version control</strong>, periodic review of rule performance, and a defined fallback when middleware fails.</p>
    <h4>Laboratory information system</h4>
    <p>ISO 15189 treats information systems as part of the quality system. Essentials: <strong>interface validation</strong> for every analyser and for the electronic medical record (checking that the right result reaches the right patient record with correct units and reference intervals), <strong>unidirectional versus bidirectional interface</strong> decisions, access control and confidentiality, backup and disaster recovery, change control for reference intervals and units, <strong>documented critical result notification</strong> with read-back, and traceability of who verified each result. Automation removes manual error but concentrates risk: a single mis-set rule or unit error can affect thousands of results, so validation and monitoring are the real safeguards.</p>
  `,
  tip: "Name specific autoverification rules and insist that every rule must be validated and audited.",
  sources: ["C1", "C11", "C2"]
},
{
  id: "cc65", domain: "chem-carb",
  q: "Discuss the laboratory monitoring of diabetes mellitus: HbA1c targets, continuous glucose monitoring metrics, fructosamine, and the assessment of complications.",
  tags: ["diabetes monitoring", "time in range", "CGM", "albuminuria"],
  keypoints: ["HbA1c every 3 to 6 months", "target below 7 percent individualised", "limitations in haemoglobinopathy and anaemia", "glycated albumin and fructosamine alternatives", "continuous glucose monitoring", "time in range 70 to 180 mg/dL above 70 percent", "time below range under 4 percent", "glucose management indicator", "coefficient of variation below 36 percent", "glycaemic variability", "annual urine albumin to creatinine ratio", "eGFR annually", "lipid profile", "self-monitoring of blood glucose", "ketone testing beta-hydroxybutyrate", "C-peptide and autoantibodies for classification"],
  answer: `
    <h4>Glycaemic control</h4>
    <ul>
      <li><strong>HbA1c every 3–6 months</strong> (3-monthly if not at target or treatment changed, 6-monthly if stable). The general target is <strong>below 7% (53 mmol/mol)</strong>, <strong>individualised</strong>: tighter (&lt;6.5%) in young, newly diagnosed patients without comorbidity; looser (&lt;8%) in the elderly, those with hypoglycaemia risk, limited life expectancy or advanced complications.</li>
      <li>HbA1c <strong>limitations</strong>: unreliable when red cell survival changes (haemolysis, iron or B12 deficiency, recent transfusion, pregnancy, dialysis, erythropoietin) and with <strong>haemoglobin variants</strong> depending on method. It also hides hypoglycaemia and variability.</li>
      <li>Alternatives when HbA1c is invalid: <strong>fructosamine or glycated albumin</strong> (reflect 2–3 weeks; affected by albumin turnover — unreliable in nephrotic syndrome and protein-losing states), and 1,5-anhydroglucitol.</li>
    </ul>
    <h4>Continuous glucose monitoring metrics</h4>
    <div class="table-wrap"><table>
      <tr><th>Metric</th><th>Target</th></tr>
      <tr><td><strong>Time in range</strong> 3.9–10.0 mmol/L (70–180 mg/dL)</td><td><strong>&gt;70%</strong> of readings</td></tr>
      <tr><td><strong>Time below range</strong> &lt;3.9 mmol/L</td><td><strong>&lt;4%</strong> (and &lt;1% below 3.0)</td></tr>
      <tr><td>Time above range &gt;10.0 mmol/L</td><td>&lt;25%</td></tr>
      <tr><td><strong>Glucose management indicator</strong> (estimated A1c from mean CGM glucose)</td><td>Compare with laboratory HbA1c; discrepancy signals altered red cell turnover</td></tr>
      <tr><td><strong>Coefficient of variation</strong> (glycaemic variability)</td><td><strong>&lt;36%</strong></td></tr>
      <tr><td>Data sufficiency</td><td>≥70% of readings over 14 days</td></tr>
    </table></div>
    <p>CGM measures interstitial glucose, so there is a physiological lag; sensors need confirmation by <strong>self-monitoring of blood glucose</strong> when readings do not fit symptoms, and some are affected by paracetamol, ascorbate or hydroxyurea.</p>
    <h4>Acute monitoring</h4>
    <p><strong>Ketone testing by capillary β-hydroxybutyrate</strong> is preferred to urine nitroprusside for detecting and monitoring ketosis, especially with SGLT2 inhibitors, which can cause euglycaemic ketoacidosis.</p>
    <h4>Complications and classification</h4>
    <ul>
      <li><strong>Annual urine albumin:creatinine ratio</strong> and <strong>eGFR</strong> — confirm albuminuria on 2 of 3 samples over 3–6 months.</li>
      <li><strong>Lipid profile</strong>, blood pressure, retinal screening, foot examination; liver tests and FIB-4 for MASLD.</li>
      <li><strong>C-peptide and islet autoantibodies</strong> (GAD65, IA-2, ZnT8) where the type of diabetes is unclear — relevant for insulin dependence and for identifying monogenic diabetes.</li>
      <li>Thyroid function and coeliac screening in type 1 diabetes.</li>
    </ul>
  `,
  tip: "Quote the CGM targets (TIR >70%, TBR <4%, CV <36%) — they are the modern examinable numbers.",
  sources: ["C6", "C1", "C7"]
},
{
  id: "cc66", domain: "chem-carb",
  q: "Explain the pathophysiology and laboratory differentiation of diabetic ketoacidosis, hyperosmolar hyperglycaemic state, lactic acidosis and alcoholic ketoacidosis.",
  tags: ["DKA", "HHS", "lactic acidosis", "differential"],
  keypoints: ["DKA relative insulin deficiency with ketosis", "HHS profound hyperglycaemia without significant ketosis", "effective osmolality above 320", "glucose above 33 mmol/L in HHS", "pH below 7.3 and bicarbonate below 15 in DKA", "beta-hydroxybutyrate above 3 mmol/L", "high anion gap", "type A versus type B lactic acidosis", "metformin-associated lactic acidosis", "alcoholic ketoacidosis with low or normal glucose", "thiamine before glucose", "euglycaemic DKA with SGLT2 inhibitors", "corrected sodium", "potassium shifts with insulin", "monitor beta-hydroxybutyrate or venous pH and bicarbonate", "precipitating infection"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>DKA</th><th>HHS</th><th>Lactic acidosis</th><th>Alcoholic ketoacidosis</th></tr>
      <tr><td>Glucose</td><td>&gt;11 mmol/L (may be near-normal in <strong>euglycaemic DKA with SGLT2 inhibitors</strong>)</td><td><strong>&gt;33 mmol/L (600 mg/dL)</strong></td><td>Variable</td><td><strong>Low or normal</strong></td></tr>
      <tr><td>pH / bicarbonate</td><td><strong>pH &lt;7.3, HCO₃⁻ &lt;15</strong></td><td>pH &gt;7.3, HCO₃⁻ &gt;18</td><td>Low</td><td>Low</td></tr>
      <tr><td>Ketones</td><td><strong>β-hydroxybutyrate &gt;3 mmol/L</strong></td><td>Absent or small</td><td>Absent</td><td>Present (β-HB predominant)</td></tr>
      <tr><td>Anion gap</td><td><strong>High</strong></td><td>Normal or mildly raised</td><td><strong>High</strong></td><td>High</td></tr>
      <tr><td>Effective osmolality</td><td>Variable</td><td><strong>&gt;320 mOsm/kg</strong></td><td>Variable</td><td>Normal</td></tr>
      <tr><td>Lactate</td><td>May be mildly raised</td><td>Mildly raised</td><td><strong>&gt;5 mmol/L</strong></td><td>May be raised</td></tr>
      <tr><td>Typical setting</td><td>Type 1 (or ketosis-prone type 2), infection, missed insulin</td><td>Elderly type 2, dehydration, infection, high mortality</td><td>Shock, sepsis, drugs</td><td>Binge drinking then starvation and vomiting</td></tr>
    </table></div>
    <h4>Pathophysiology in brief</h4>
    <ul>
      <li><strong>DKA</strong>: near-absolute insulin deficiency with counter-regulatory hormone excess → unrestrained lipolysis and hepatic ketogenesis, so acidosis dominates.</li>
      <li><strong>HHS</strong>: enough residual insulin to suppress ketogenesis but not hyperglycaemia; a slow osmotic diuresis over days produces extreme hyperglycaemia and <strong>hyperosmolality</strong> with large water and electrolyte deficits. Mortality is higher than DKA.</li>
      <li><strong>Lactic acidosis</strong>: <strong>type A</strong> from tissue hypoxia (shock, sepsis, ischaemia) and <strong>type B</strong> without hypoxia — <strong>metformin-associated lactic acidosis</strong> (impaired hepatic gluconeogenesis and mitochondrial respiration, usually with renal impairment), thiamine deficiency, malignancy, HIV drugs, propofol.</li>
      <li><strong>Alcoholic ketoacidosis</strong>: ethanol metabolism raises NADH, suppressing gluconeogenesis and favouring β-hydroxybutyrate; glycogen is depleted by starvation. Treat with saline and glucose but give <strong>thiamine before glucose</strong> to avoid Wernicke encephalopathy.</li>
    </ul>
    <h4>Laboratory approach and monitoring</h4>
    <p>Request glucose, venous blood gas, electrolytes with anion gap, β-hydroxybutyrate, lactate, urea and creatinine, osmolality, phosphate and magnesium, full blood count, and a search for the <strong>precipitating cause</strong> (cultures, ECG, chest radiograph, amylase/lipase). Calculate the <strong>corrected sodium</strong> and effective osmolality (2Na + glucose). Monitor resolution with <strong>β-hydroxybutyrate, venous pH and bicarbonate and the anion gap</strong>, not with urine ketones. Watch <strong>potassium shifts with insulin</strong> therapy and replace potassium and phosphate; avoid overly rapid correction of osmolality (cerebral oedema risk, especially in children).</p>
  `,
  tip: "A four-column comparison plus 'monitor β-HB, not urine ketones' answers this efficiently.",
  sources: ["C1", "C6", "C15"]
},
{
  id: "cc67", domain: "chem-carb",
  q: "Describe the laboratory investigation of neonatal and childhood hypoglycaemia, including the critical sample and the interpretation of the metabolic screen.",
  tags: ["neonatal hypoglycaemia", "critical sample", "fatty acid oxidation", "hyperinsulinism"],
  keypoints: ["glucose below 2.6 mmol/L in neonates", "critical sample during hypoglycaemia before treatment", "insulin C-peptide beta-hydroxybutyrate free fatty acids", "cortisol growth hormone lactate ammonia", "acylcarnitine profile and urine organic acids", "hyperinsulinism suppressed ketones and free fatty acids", "inappropriate insulin at low glucose", "glucose requirement above 8 mg/kg/min", "glucagon response confirms glycogen stores", "fatty acid oxidation defect hypoketotic hypoglycaemia with high free fatty acids", "MCAD deficiency", "glycogen storage disease with lactic acidosis and hepatomegaly", "ketotic hypoglycaemia with normal ketone response", "congenital adrenal or pituitary deficiency", "newborn screening by tandem mass spectrometry"],
  answer: `
    <p>Hypoglycaemia (<strong>glucose below 2.6 mmol/L in neonates</strong>, or below 3.0 mmol/L with symptoms in older children) must be investigated <em>at the time it occurs</em>, because the hormonal and metabolic pattern defines the cause.</p>
    <h4>The critical sample</h4>
    <p>Taken <strong>during hypoglycaemia and before glucose is given</strong> (plus a paired urine):</p>
    <ul>
      <li>Glucose (laboratory, not meter), <strong>insulin, C-peptide, β-hydroxybutyrate, free fatty acids</strong></li>
      <li><strong>Cortisol, growth hormone, lactate, ammonia</strong></li>
      <li><strong>Acylcarnitine profile</strong>, total and free carnitine, amino acids</li>
      <li>Urine: <strong>organic acids</strong>, ketones, reducing substances</li>
      <li>Response of glucose to intramuscular <strong>glucagon</strong> (a rise &gt;1.7 mmol/L indicates intact glycogen stores — typical of hyperinsulinism)</li>
    </ul>
    <h4>Interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Insulin</th><th>β-HB</th><th>Free fatty acids</th><th>Diagnosis</th></tr>
      <tr><td>Hypoketotic, FFA low</td><td><strong>Detectable/high (inappropriate at low glucose)</strong></td><td>↓</td><td>↓</td><td><strong>Hyperinsulinism</strong> — congenital (K<sub>ATP</sub> channel <em>ABCC8</em>/<em>KCNJ11</em>), infant of a diabetic mother, Beckwith–Wiedemann, insulin administration; <strong>glucose requirement &gt;8 mg/kg/min</strong> supports it</td></tr>
      <tr><td><strong>Hypoketotic with high FFA</strong></td><td>Low</td><td>↓</td><td>↑</td><td><strong>Fatty acid oxidation defect</strong> — e.g. <strong>MCAD deficiency</strong>; abnormal acylcarnitines (C8), risk of sudden death</td></tr>
      <tr><td>Ketotic with hepatomegaly and lactic acidosis</td><td>Low</td><td>↑</td><td>↑</td><td><strong>Glycogen storage disease</strong> (type I: no glucagon response, hyperuricaemia, hyperlipidaemia; type III: glucagon response after a meal)</td></tr>
      <tr><td><strong>Ketotic with appropriate response</strong></td><td>Low</td><td>↑</td><td>↑</td><td>Idiopathic <strong>ketotic hypoglycaemia</strong> of childhood, prolonged fasting, glycogen depletion</td></tr>
      <tr><td>Low cortisol and/or GH</td><td>Low</td><td>↑</td><td>↑</td><td><strong>Congenital adrenal or pituitary deficiency</strong> (consider midline defects, micropenis, prolonged jaundice)</td></tr>
      <tr><td>High ammonia with ketosis</td><td>—</td><td>↑</td><td>—</td><td>Organic acidaemia; hyperinsulinism–hyperammonaemia syndrome (GDH mutation) has high ammonia with low ketones</td></tr>
    </table></div>
    <h4>Other points</h4>
    <ul>
      <li>Transient neonatal hypoglycaemia (prematurity, small for gestational age, maternal diabetes, perinatal stress) is common and resolves; persistent hypoglycaemia beyond 48–72 hours requires the full work-up.</li>
      <li>Galactosaemia and fructose intolerance present with hypoglycaemia after milk or fructose feeds.</li>
      <li><strong>Newborn screening by tandem mass spectrometry</strong> (expanded panel in the Philippines under RA 9288) detects MCAD and organic acidaemias presymptomatically — a positive screen must be confirmed urgently.</li>
      <li>Always consider non-accidental insulin or sulfonylurea administration when the pattern shows hyperinsulinism with low C-peptide or a positive drug screen.</li>
    </ul>
  `,
  tip: "Organise around the two axes — ketones and free fatty acids — then insulin; that is the whole algorithm.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc68", domain: "chem-carb",
  q: "Short notes: the oral glucose tolerance test and dynamic function tests in endocrinology — principles, indications and the rules that make them valid.",
  tags: ["OGTT", "dynamic tests", "suppression", "stimulation"],
  keypoints: ["suppression test for suspected excess", "stimulation test for suspected deficiency", "75 g glucose in 250 to 300 mL water", "carbohydrate intake before test", "fasting 8 to 14 hours", "no smoking or exercise during test", "OGTT for diabetes and GDM diagnosis", "OGTT with growth hormone for acromegaly", "insulin tolerance test gold standard for adrenal and GH axis", "short synacthen test", "water deprivation test for diabetes insipidus", "copeptin stimulated test", "dexamethasone suppression", "glucagon stimulation", "standardised timing and sample handling", "contraindications and patient safety", "correct tubes and immediate separation"],
  answer: `
    <p>Dynamic tests answer questions that a single measurement cannot. The guiding rule is simple: use a <strong>suppression test when you suspect hormone excess</strong>, and a <strong>stimulation test when you suspect deficiency</strong>.</p>
    <h4>Oral glucose tolerance test</h4>
    <ul>
      <li>Preparation: at least 3 days of unrestricted diet with <strong>≥150 g carbohydrate per day</strong>, usual activity, <strong>fast 8–14 hours</strong> (water allowed), no illness, and relevant drugs noted (steroids, thiazides, β-blockers).</li>
      <li>Procedure: <strong>75 g anhydrous glucose in 250–300 mL water</strong> drunk within 5 minutes (1.75 g/kg in children, max 75 g; 100 g for the 3-hour GDM test). Sample at 0 and 120 minutes (plus 60 minutes for GDM).</li>
      <li>During the test the patient must <strong>remain seated and not smoke, eat or exercise</strong>.</li>
      <li>Samples in <strong>fluoride–citrate tubes, separated promptly</strong>; glycolysis is the commonest cause of a falsely normal result.</li>
      <li>Indications: diagnosis of diabetes when HbA1c is unreliable or discordant, <strong>GDM diagnosis</strong>, impaired glucose tolerance in high-risk groups, and (with growth hormone sampling) the <strong>OGTT for acromegaly</strong> — failure of GH to suppress below 1 µg/L confirms it.</li>
    </ul>
    <h4>Other key dynamic tests</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Principle and use</th></tr>
      <tr><td><strong>Short Synacthen test</strong></td><td>250 µg cosyntropin; cortisol at 0 and 30/60 min — stimulation test for adrenal insufficiency</td></tr>
      <tr><td><strong>Insulin tolerance test</strong></td><td>Insulin-induced hypoglycaemia (&lt;2.2 mmol/L) stimulates ACTH–cortisol and GH — the reference test for both axes, but hazardous; contraindicated in epilepsy and ischaemic heart disease, requires medical supervision and glucose at the bedside</td></tr>
      <tr><td><strong>Glucagon stimulation test</strong></td><td>Safer alternative for GH and cortisol reserve</td></tr>
      <tr><td><strong>Dexamethasone suppression</strong></td><td>Overnight 1 mg or low-dose 2-day test to confirm Cushing syndrome; high-dose test to localise</td></tr>
      <tr><td><strong>Water deprivation test</strong></td><td>Differentiates cranial from nephrogenic diabetes insipidus and primary polydipsia; needs strict supervision, weight and osmolality monitoring. Increasingly replaced by the <strong>hypertonic saline- or arginine-stimulated copeptin test</strong></td></tr>
      <tr><td>Saline infusion / captopril challenge</td><td>Confirms primary aldosteronism (failure of aldosterone to suppress)</td></tr>
      <tr><td>Fasting study (72 h)</td><td>Confirms endogenous hyperinsulinaemic hypoglycaemia</td></tr>
    </table></div>
    <h4>Rules that make any dynamic test valid</h4>
    <p>Written protocol with <strong>standardised timing, dose, posture and sample handling</strong>; correct tubes (EDTA on ice for ACTH, aprotinin where required); accurate labelling of time points; attention to <strong>contraindications and patient safety</strong> with staff and glucose or hydrocortisone available; and interpretation against the cut-offs validated for the assay actually used, because immunoassay differences change cut-offs. A badly conducted dynamic test is worse than none, because it produces a confident wrong answer.</p>
  `,
  tip: "Lead with suppression-for-excess, stimulation-for-deficiency, then the OGTT rules; examiners love the pre-test carbohydrate requirement.",
  sources: ["C1", "C14", "C6"]
},
{
  id: "cc69", domain: "chem-carb",
  q: "Discuss insulin resistance and the metabolic syndrome: pathophysiology, laboratory assessment and clinical significance.",
  tags: ["insulin resistance", "metabolic syndrome", "HOMA-IR", "MASLD"],
  keypoints: ["visceral adiposity and free fatty acids", "ectopic fat and lipotoxicity", "inflammatory cytokines TNF and IL-6", "adiponectin falls", "hepatic insulin resistance and gluconeogenesis", "harmonised metabolic syndrome criteria three of five", "waist circumference ethnic specific cut-offs", "Asian cut-offs 90 cm men 80 cm women", "triglycerides 1.7 mmol/L", "HDL 1.0 and 1.3 mmol/L", "blood pressure 130/85", "fasting glucose 5.6 mmol/L", "HOMA-IR research tool", "euglycaemic hyperinsulinaemic clamp reference method", "insulin assay not standardised", "MASLD and FIB-4", "increased cardiovascular and diabetes risk"],
  answer: `
    <h4>Pathophysiology</h4>
    <p><strong>Visceral adiposity</strong> releases <strong>free fatty acids</strong> into the portal circulation and causes <strong>ectopic fat deposition</strong> in liver and muscle with <strong>lipotoxicity</strong> (diacylglycerol and ceramide signalling impairs insulin receptor substrate phosphorylation). Adipose tissue macrophages secrete <strong>TNF-α and IL-6</strong> while protective <strong>adiponectin falls</strong>. The consequences are reduced glucose uptake in muscle, <strong>hepatic insulin resistance with unsuppressed gluconeogenesis</strong>, increased VLDL secretion with small dense LDL and low HDL, sodium retention and sympathetic activation (hypertension), hyperuricaemia, a prothrombotic and pro-inflammatory state, and compensatory hyperinsulinaemia that eventually fails as β-cells decompensate.</p>
    <h4>Harmonised definition (IDF/AHA-NHLBI): any <strong>three of five</strong></h4>
    <div class="table-wrap"><table>
      <tr><th>Component</th><th>Threshold</th></tr>
      <tr><td><strong>Waist circumference</strong> (population- and ethnicity-specific)</td><td><strong>Asian cut-offs: ≥90 cm men, ≥80 cm women</strong> — important for Filipinos, who develop metabolic disease at lower BMI</td></tr>
      <tr><td><strong>Triglycerides</strong></td><td>≥<strong>1.7 mmol/L</strong> (150 mg/dL) or on treatment</td></tr>
      <tr><td><strong>HDL-cholesterol</strong></td><td>&lt;<strong>1.0 mmol/L</strong> (40 mg/dL) men, &lt;<strong>1.3</strong> (50 mg/dL) women, or on treatment</td></tr>
      <tr><td><strong>Blood pressure</strong></td><td>≥<strong>130/85</strong> mmHg or on treatment</td></tr>
      <tr><td><strong>Fasting glucose</strong></td><td>≥<strong>5.6 mmol/L</strong> (100 mg/dL) or on treatment</td></tr>
    </table></div>
    <h4>Laboratory assessment of insulin resistance</h4>
    <ul>
      <li><strong>Euglycaemic hyperinsulinaemic clamp</strong> — the reference method, but a research procedure only.</li>
      <li>Surrogates: <strong>HOMA-IR</strong> = (fasting insulin µU/mL × fasting glucose mmol/L)/22.5, QUICKI, Matsuda index from an OGTT, and the triglyceride:HDL ratio or TyG index (cheap and usable without an insulin assay).</li>
      <li>Major caveat: <strong>insulin immunoassays are not standardised</strong> and cross-react variably with proinsulin and analogues, so HOMA-IR cut-offs are not transferable between laboratories. It is a <strong>research and epidemiological tool</strong>, not a diagnostic test — the syndrome is diagnosed from the clinical criteria above.</li>
      <li>Associated tests: HbA1c or OGTT, ALT and <strong>FIB-4 for MASLD</strong> (metabolic dysfunction-associated steatotic liver disease), urate, urine albumin:creatinine ratio, and a full lipid profile with non-HDL-C or apo B.</li>
    </ul>
    <h4>Significance</h4>
    <p>The cluster roughly doubles cardiovascular risk and increases the risk of type 2 diabetes about fivefold, and is linked to MASLD, polycystic ovary syndrome, obstructive sleep apnoea, gout and several cancers. Its clinical value lies in prompting treatment of each component — weight loss, exercise, statins, antihypertensives and glucose-lowering therapy — rather than in the label itself.</p>
  `,
  tip: "Use the Asian waist cut-offs and say plainly that HOMA-IR is not a diagnostic test.",
  sources: ["C1", "C6", "C8"]
}
);
