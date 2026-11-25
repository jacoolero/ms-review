/* Clinical Chemistry — quality & method evaluation, extra essay set (cc97–cc114) */
window.QBANK.push(
{
  id: "cc97", domain: "chem-qc", star: true,
  q: "Distinguish accuracy, trueness, precision and bias, and explain how random and systematic error appear on a Levey–Jennings chart. How should each pattern be investigated?",
  tags: ["accuracy", "precision", "error types"],
  keypoints: ["accuracy", "trueness", "bias", "precision", "random error", "systematic error", "Levey–Jennings chart", "shift", "trend", "scatter", "calibration", "reagent lot", "coefficient of variation", "rerun patient samples"],
  answer: `
    <p><strong>Accuracy</strong> is the closeness of a single measured result to the true value. It has two components: <strong>trueness</strong>, the closeness of the mean of repeated measurements to the true value, and <strong>precision</strong>, the closeness of repeated results to each other. <strong>Bias</strong> is the numerical difference between the measured mean and the true or assigned value; it is the quantitative expression of trueness. A method can be precise but inaccurate — reproducible around the wrong mean — or accurate on average but imprecise.</p>
    <div class="table-wrap"><table>
      <tr><th>Term</th><th>Meaning</th><th>Estimated by</th></tr>
      <tr><td>Accuracy</td><td>Closeness of a result to the truth</td><td>Comparison with a reference method or certified material; total error</td></tr>
      <tr><td>Trueness</td><td>Closeness of the mean to the truth</td><td>Bias study</td></tr>
      <tr><td>Bias</td><td>Measured mean minus target</td><td>Recovery, EQA, method comparison</td></tr>
      <tr><td>Precision</td><td>Dispersion of repeated results</td><td>Standard deviation and <strong>coefficient of variation</strong></td></tr>
    </table></div>
    <h4>Random and systematic error</h4>
    <p><strong>Random error</strong> varies unpredictably in magnitude and direction and degrades precision: bubbles, clots, pipetting variation, electrical noise, temperature fluctuation. It cannot be removed by calibration; it is reduced by technique, maintenance and replicate measurement. <strong>Systematic error</strong> is consistent in direction and degrades trueness: calibration bias, a new <strong>reagent lot</strong>, a deteriorating lamp, an incorrect control target. It is detected as a <strong>shift</strong> (abrupt change in mean) or a <strong>trend</strong> (gradual drift), whereas random error appears as increased <strong>scatter</strong> on a Levey–Jennings chart.</p>
    <h4>Investigation</h4>
    <ul>
      <li><strong>Shift:</strong> check the calibrator and reagent lot, recalibration, control reconstitution and set-point.</li>
      <li><strong>Trend:</strong> suspect lamp or electrode ageing, reagent deterioration and temperature drift.</li>
      <li><strong>Scatter:</strong> look for bubbles, clots, probe obstruction and power-supply problems.</li>
    </ul>
    <p>Correct the cause, recalibrate if indicated, repeat QC, and <strong>rerun patient samples since the last acceptable QC</strong>. Document the event and action. Repeating a failed control until it passes is not a corrective action.</p>
  `,
  tip: "Define each term in one sentence, then link shift and trend to systematic error and scatter to random error.",
  sources: ["C1", "C2", "C4"]
},
{
  id: "cc98", domain: "chem-qc",
  q: "Explain the statistical concepts used in method evaluation: measures of central tendency and dispersion, Gaussian and non-Gaussian distributions, confidence intervals, the paired t-test, the F-test and analysis of variance.",
  tags: ["statistics", "confidence interval", "anova"],
  keypoints: ["mean", "median", "standard deviation", "coefficient of variation", "Gaussian distribution", "nonparametric", "95% confidence interval", "paired t-test", "F-test", "analysis of variance", "variance components", "outliers", "total allowable error"],
  answer: `
    <p>Method evaluation is applied statistics: the laboratory must decide whether an observed difference is real or due to chance.</p>
    <h4>Describing the data</h4>
    <p>The <strong>mean</strong> summarises a symmetric distribution; the <strong>median</strong> is preferred when data are skewed or contain <strong>outliers</strong>. Dispersion is expressed as the <strong>standard deviation</strong> or, because it is unit-free and comparable between analytes, the <strong>coefficient of variation</strong>. A <strong>Gaussian distribution</strong> permits parametric statistics; skewed data require <strong>nonparametric</strong> methods such as percentiles or rank tests. Outliers should be investigated, not silently deleted; Dixon or Tukey rules may be used to flag them.</p>
    <h4>Estimating uncertainty and comparing groups</h4>
    <p>A <strong>95% confidence interval</strong> conveys the precision of an estimate; overlapping intervals suggest no statistically significant difference. The <strong>paired t-test</strong> compares means of paired results, for example a candidate and comparative method on the same samples, and therefore tests for bias. The <strong>F-test</strong> compares two variances and is used to judge whether precisions differ. <strong>Analysis of variance</strong>, especially nested ANOVA, partitions total variance into repeatability, between-run and between-day <strong>variance components</strong> — the statistical basis of a precision study.</p>
    <div class="table-wrap"><table>
      <tr><th>Question</th><th>Statistic</th><th>Comment</th></tr>
      <tr><td>Is the mean different?</td><td>Paired t-test</td><td>Requires approximate normality</td></tr>
      <tr><td>Are variances different?</td><td>F-test</td><td>Sensitive to non-normality</td></tr>
      <tr><td>What are the variance components?</td><td>Nested ANOVA</td><td>Basis of a precision experiment</td></tr>
      <tr><td>How precise is the estimate?</td><td>95% confidence interval</td><td>Always report it</td></tr>
    </table></div>
    <h4>Why it matters</h4>
    <p>Statistical significance is not clinical significance. A bias of 1% may be statistically significant with 200 samples yet irrelevant against the <strong>total allowable error</strong>. Studies must therefore be powered and interpreted against predefined analytical goals, not against p-values alone.</p>
  `,
  tip: "Pair each statistic with the exact question it answers — mean difference, variance ratio, or variance partition.",
  sources: ["C1", "C5", "C2"]
},
{
  id: "cc99", domain: "chem-qc", star: true,
  q: "Design a method comparison study for a new creatinine assay against the current method (CLSI EP09). How would you analyse the data, and why is a high correlation coefficient not evidence of agreement?",
  tags: ["method comparison", "ep09", "bland–altman"],
  keypoints: ["method comparison", "40 patient samples", "measuring interval", "Deming regression", "Passing–Bablok", "Bland–Altman", "limits of agreement", "proportional bias", "constant bias", "correlation coefficient", "medical decision points", "total allowable error"],
  answer: `
    <p>CLSI EP09 describes a <strong>method comparison</strong> in which patient samples are measured by the candidate and comparative, or reference, procedures.</p>
    <h4>Design</h4>
    <ul>
      <li>Use at least <strong>40 patient samples</strong> spanning the <strong>measuring interval</strong>, including values near <strong>medical decision points</strong>; avoid pooled or spiked samples where possible.</li>
      <li>Collect, handle and store samples identically; measure fresh where feasible, in duplicate, in random order and within a short time.</li>
      <li>Exclude samples with interference, and document the comparative method's traceability.</li>
    </ul>
    <h4>Analysis</h4>
    <p>Begin with a scatter plot and the identity line. Then use <strong>Deming regression</strong>, which allows for error in both methods, or <strong>Passing–Bablok</strong>, which is nonparametric and robust to outliers, to estimate slope and intercept with confidence intervals. A slope different from 1 indicates <strong>proportional bias</strong>; an intercept different from 0 indicates <strong>constant bias</strong>. The <strong>Bland–Altman</strong> plot displays the difference against the mean, with <strong>limits of agreement</strong> of bias ± 1.96 SD, showing whether disagreement matters clinically. Calculate bias at decision points and compare it with the <strong>total allowable error</strong>.</p>
    <div class="table-wrap"><table>
      <tr><th>Statistic</th><th>Shows</th><th>Limitation</th></tr>
      <tr><td>Slope</td><td>Proportional bias</td><td>Influenced by the range of samples</td></tr>
      <tr><td>Intercept</td><td>Constant bias</td><td>Extrapolation beyond the data</td></tr>
      <tr><td>Correlation coefficient</td><td>Strength of linear association</td><td>Not a measure of agreement</td></tr>
      <tr><td>Bland–Altman</td><td>Bias and limits of agreement</td><td>Depends on the sample range</td></tr>
    </table></div>
    <h4>Why the correlation coefficient misleads</h4>
    <p>The <strong>correlation coefficient</strong> measures linear association, not identity. A wide range of samples inflates it, so a method with a 20% proportional bias can still give r = 0.99. Two methods agree only if their results are interchangeable at clinical decision points, which is a judgement about bias and total error, not correlation.</p>
  `,
  tip: "Name EP09, the 40-sample design, Deming or Passing–Bablok, and the Bland–Altman limits of agreement.",
  sources: ["C5", "C1", "C2"]
},
{
  id: "cc100", domain: "chem-qc",
  q: "How would you verify the linearity and analytical measuring range of a serum enzyme assay (CLSI EP06), and what is the difference between linearity, analytical measuring range and reportable range?",
  tags: ["linearity", "ep06", "measuring range"],
  keypoints: ["linearity", "EP06", "five to seven levels", "deviation from linearity", "analytical measuring range", "reportable range", "dilution", "substrate", "allowable deviation", "regression", "residuals"],
  answer: `
    <p><strong>Linearity</strong> is the ability of a method to give results proportional to concentration across an interval. It must be verified, not assumed, because non-linearity causes bias that two-level QC may never reveal.</p>
    <h4>EP06 protocol</h4>
    <ol>
      <li>Prepare <strong>five to seven levels</strong> spanning the intended range, usually by mixing a high and a low patient pool or by using a commercial linearity set.</li>
      <li>Measure each level in duplicate, in random order, with one reagent lot and one calibration.</li>
      <li>Plot measured against expected values, fit a <strong>regression</strong> line, and examine <strong>residuals</strong> and a plot of <strong>deviation from linearity</strong>.</li>
      <li>Compare the deviation at each level with a predefined <strong>allowable deviation</strong> — a percentage of the target or a fraction of the total allowable error. A statistically significant quadratic term is not automatically clinically important.</li>
      <li>If non-linearity is found, either restrict the <strong>analytical measuring range</strong> or validate a <strong>dilution</strong> protocol.</li>
    </ol>
    <h4>Three different ranges</h4>
    <div class="table-wrap"><table>
      <tr><th>Term</th><th>Definition</th><th>What is verified</th></tr>
      <tr><td>Linearity</td><td>Proportional response across an interval</td><td>Deviation from the regression line</td></tr>
      <tr><td>Analytical measuring range</td><td>Interval with acceptable imprecision and bias</td><td>Performance at both limits</td></tr>
      <tr><td>Reportable range</td><td>Range the laboratory reports, including dilutions</td><td>Dilution recovery</td></tr>
    </table></div>
    <h4>The enzyme-specific problem</h4>
    <p>For an enzyme assay, activity depends on <strong>substrate</strong> concentration, cofactor, pH and temperature. At high activity the substrate may be depleted, producing a falsely low result; dilution with saline can also alter the matrix, so recovery must be checked. The <strong>reportable range</strong> is therefore a clinical and operational decision, not merely the linear segment of a graph. Document the verified range in the SOP and in the laboratory information system so that results outside it are flagged for dilution.</p>
  `,
  tip: "Separate the statistical test for linearity from the clinical decision about the reportable range.",
  sources: ["C5", "C1", "C2"]
},
{
  id: "cc101", domain: "chem-qc",
  q: "Define limit of blank, limit of detection and limit of quantitation (CLSI EP17). How are they estimated, and why does a detectable result not always mean a reportable one?",
  tags: ["lod", "loq", "ep17"],
  keypoints: ["limit of blank", "limit of detection", "limit of quantitation", "EP17", "1.645", "blank replicates", "precision profile", "coefficient of variation", "functional sensitivity", "below limit of quantitation"],
  answer: `
    <p>At low concentrations the signal is dominated by noise, so the laboratory must define three separate limits.</p>
    <h4>Definitions</h4>
    <div class="table-wrap"><table>
      <tr><th>Term</th><th>Definition</th><th>Typical estimate</th></tr>
      <tr><td><strong>Limit of blank</strong> (LOB)</td><td>Highest apparent result expected from a blank</td><td>Mean blank + <strong>1.645</strong> SD</td></tr>
      <tr><td><strong>Limit of detection</strong> (LOD)</td><td>Lowest concentration likely to be detected, usually with 95% probability</td><td>LOB + 1.645 SD of a low sample</td></tr>
      <tr><td><strong>Limit of quantitation</strong> (LOQ)</td><td>Lowest concentration measurable with predefined imprecision and bias</td><td>Precision profile at the goal CV</td></tr>
    </table></div>
    <h4>How they are estimated (EP17)</h4>
    <p>Measure <strong>blank replicates</strong> and low-level samples over several days; calculate the mean and SD and apply the formulas above. For the <strong>limit of quantitation</strong>, construct a <strong>precision profile</strong> across low concentrations and identify the lowest level at which the <strong>coefficient of variation</strong> meets the laboratory's goal — often 20%, but preferably a goal derived from total allowable error or biological variation. Verify the limits in the intended sample matrix.</p>
    <h4>Clinical interpretation</h4>
    <p>A result above the <strong>limit of detection</strong> is not necessarily reliable enough to report as a number. Values between LOD and LOQ should be reported as "detected, <strong>below limit of quantitation</strong>", with the limit stated, or as less than the LOQ. This matters for high-sensitivity troponin, hs-CRP, PSA, thyroglobulin and tumour markers, where clinical decisions may depend on small changes. The <strong>functional sensitivity</strong> is the concentration at which the assay's CV is acceptable for clinical use, and it may differ from the manufacturer's LOD. Laboratories should verify that the claimed LOD and LOQ are achievable in their own hands and state the reporting limit in the report and the laboratory information system.</p>
  `,
  tip: "Draw the three limits on one concentration axis — that single diagram answers most of the question.",
  sources: ["C5", "C1", "C2"]
},
{
  id: "cc102", domain: "chem-qc", star: true,
  q: "Explain calibration and metrological traceability in the clinical laboratory. Describe the calibration hierarchy, the role of commutable materials, and the events that require recalibration.",
  tags: ["calibration", "traceability", "commutability"],
  keypoints: ["calibration", "metrological traceability", "ISO 17511", "reference measurement procedure", "certified reference material", "JCTLM", "commutability", "calibration curve", "calibration verification", "calibrator lot", "recalibrate"],
  answer: `
    <p><strong>Calibration</strong> establishes the mathematical relationship between the instrument signal and the concentration of the calibrator. It is only as good as the values assigned to the calibrators and the chain that connects them to a reference.</p>
    <h4>The calibration hierarchy</h4>
    <p><strong>Metrological traceability</strong> is an unbroken chain of calibrations, each contributing a stated uncertainty, linking the patient result to a <strong>reference measurement procedure</strong> or <strong>certified reference material</strong>. ISO 17511 describes this for in vitro diagnostics. A typical chain runs from the SI unit or a reference measurement procedure, to a certified reference material, to the manufacturer's master calibrator, to the working calibrator used in the laboratory, and finally to the patient result. The <strong>JCTLM</strong> lists reference methods and materials of higher order. Most clinical laboratories cannot calibrate directly against a reference method; they rely on the manufacturer's traceable calibrators and verify performance.</p>
    <h4>Commutability</h4>
    <p>A material is <strong>commutable</strong> when it behaves like patient samples across methods. Non-commutable calibrators or EQA materials can produce method-specific biases and misleading comparisons, so commutability must be documented, especially for enzymes, hormones and tumour markers.</p>
    <h4>Calibration practice</h4>
    <ul>
      <li>Use the manufacturer's <strong>calibration curve</strong> model and number of points; do not extrapolate.</li>
      <li>Perform <strong>calibration verification</strong> with independent materials after maintenance, major repair, lamp or electrode replacement, and a new reagent or calibrator lot.</li>
      <li><strong>Recalibrate</strong> when QC shows a shift or trend, when calibration verification fails, or when temperature or reagent conditions change.</li>
      <li>Record calibrator lot, expiry, assigned values and uncertainty; investigate failed verification rather than repeating until it passes.</li>
    </ul>
    <p>Traceability does not guarantee clinical suitability: the laboratory must still show that bias and imprecision meet its analytical performance specifications.</p>
  `,
  tip: "Describe the chain from reference method to patient result, then say why commutability and verification are still needed.",
  sources: ["C1", "C5", "C11"]
},
{
  id: "cc103", domain: "chem-qc", star: true,
  q: "Discuss post-analytical errors in clinical chemistry and the controls that ensure the right result reaches the right patient and is acted upon.",
  tags: ["post-analytical", "critical values", "reporting"],
  keypoints: ["post-analytical phase", "wrong patient", "critical value", "read-back", "amended report", "autoverification", "LIS downtime", "interface validation", "delta checks", "quality indicators", "turnaround time"],
  answer: `
    <p>The <strong>post-analytical phase</strong> runs from result validation to the clinician's interpretation and action. It is shorter than the pre-analytical phase, but its errors are highly visible and can harm patients directly.</p>
    <h4>Common errors</h4>
    <ul>
      <li><strong>Wrong patient</strong> or wrong specimen linked to a result through manual entry or an interface error.</li>
      <li>Wrong units, decimal point, reference interval or flag; results released before <strong>autoverification</strong> rules were validated.</li>
      <li>Failure to telephone a <strong>critical value</strong>, or notification without <strong>read-back</strong> and documentation.</li>
      <li>Delay in reporting, lost add-on requests, or an <strong>amended report</strong> that never reaches the clinician.</li>
      <li><strong>LIS downtime</strong> with manual reporting and no reconciliation afterwards.</li>
    </ul>
    <h4>Controls</h4>
    <p>Two patient identifiers and barcoding at every step; validated autoverification with <strong>delta checks</strong> and serum-index rules; a critical value list agreed with clinicians and audited for compliance; a defined amended-report procedure stating the reason, the corrected value and who was notified; <strong>interface validation</strong> for every analyser and the electronic medical record; a downtime procedure with a reconciliation log; and access control with confidentiality safeguards. Report content should include units, reference intervals, method and relevant comments.</p>
    <div class="table-wrap"><table>
      <tr><th>Error</th><th>Example</th><th>Control</th></tr>
      <tr><td>Wrong patient</td><td>Manual LIS entry</td><td>Barcode and two identifiers</td></tr>
      <tr><td>Missed critical value</td><td>Potassium 6.8 not phoned</td><td>List, read-back, audit</td></tr>
      <tr><td>Unit error</td><td>Glucose reported in the wrong unit</td><td>Interface validation</td></tr>
      <tr><td>Delayed report</td><td>Verified result held in a queue</td><td>Turnaround time monitoring</td></tr>
    </table></div>
    <p>Monitor <strong>quality indicators</strong> such as critical value notification rate, amended report rate, report <strong>turnaround time</strong> and complaint rates. Every corrected report should trigger a review of why the error occurred, not only a correction of the number.</p>
  `,
  tip: "Organise the answer as error type, real example and control — and always include critical value read-back.",
  sources: ["C1", "C11", "C2"]
},
{
  id: "cc104", domain: "chem-qc", star: true,
  q: "A STAT chemistry turnaround time is consistently above target. Explain how you would analyse and improve the process using LEAN principles and quality-improvement methods.",
  tags: ["turnaround time", "lean", "process improvement"],
  keypoints: ["turnaround time", "value stream map", "non-value-added", "Pareto", "5 Whys", "standard work", "autoverification", "PDCA", "DMAIC", "run chart", "quality indicators"],
  answer: `
    <p><strong>Turnaround time</strong> must be defined explicitly — order-to-report, collection-to-report, or laboratory receipt-to-report — because each definition locates a different bottleneck. Start by measuring timestamps for every step and plotting a <strong>run chart</strong> by shift, test and priority.</p>
    <h4>See the process</h4>
    <p>Draw a <strong>value stream map</strong> from order to result. Separate value-added time, which is mostly analysis, from <strong>non-value-added</strong> time: transport, waiting, sorting, repeat testing and verification queues. Typical wastes are waiting for centrifugation, batching before analysis, searching for samples, duplicate entries, analyser downtime and rework from haemolysed specimens. A <strong>Pareto</strong> chart identifies the few steps causing most of the delay; a fishbone diagram and <strong>5 Whys</strong> explore the causes.</p>
    <h4>Improve and control</h4>
    <ul>
      <li>Reduce batch size and move to continuous loading; align staffing with demand peaks.</li>
      <li>Use <strong>standard work</strong>, 5S and visual management; keep reagents and consumables at the point of use.</li>
      <li>Validate <strong>autoverification</strong> for low-risk results and use delta checks to focus attention on exceptions.</li>
      <li>Improve pre-analytical quality — correct tubes, labels and transport — because recollection destroys turnaround time.</li>
      <li>Pilot changes with <strong>PDCA</strong> or <strong>DMAIC</strong>, measure before and after, and hold the gain with control charts.</li>
    </ul>
    <p>Avoid sub-optimising one step: a faster analyser will not help if samples wait 40 minutes for centrifugation or if reports wait for manual verification. Improvement must be measured with both turnaround time and <strong>quality indicators</strong> such as error and recollection rates, so that speed is not achieved by skipping verification. Engage the staff who do the work; they know where the delays are.</p>
  `,
  tip: "Measure first, map the value stream, then attack the biggest bottleneck — and show that you protected quality.",
  sources: ["C1", "C11", "C2"]
},
{
  id: "cc105", domain: "chem-qc", star: true,
  q: "Describe prospective risk management in the clinical laboratory using failure mode and effects analysis (FMEA), and contrast it with root cause analysis after an incident.",
  tags: ["risk management", "fmea", "root cause analysis"],
  keypoints: ["ISO 22367", "failure mode and effects analysis", "severity", "occurrence", "detectability", "risk priority number", "risk matrix", "root cause analysis", "Swiss cheese", "corrective action", "proactive", "reactive"],
  answer: `
    <p>Risk management asks what could go wrong, how bad it would be, and how likely it is to be missed. ISO 22367 applies these principles to medical laboratories, and ISO 15189 expects a risk-based approach throughout the quality system.</p>
    <h4>Prospective: FMEA</h4>
    <p><strong>Failure mode and effects analysis</strong> is a team-based, <strong>proactive</strong> method. Map the process, list each failure mode, its effects and its likely causes, then score three dimensions:</p>
    <div class="table-wrap"><table>
      <tr><th>Dimension</th><th>Question</th><th>Scale</th></tr>
      <tr><td><strong>Severity</strong></td><td>How serious is the effect?</td><td>1–10</td></tr>
      <tr><td><strong>Occurrence</strong></td><td>How often does the cause occur?</td><td>1–10</td></tr>
      <tr><td><strong>Detectability</strong></td><td>How likely is detection before harm?</td><td>1–10, with 10 meaning unlikely</td></tr>
    </table></div>
    <p>The <strong>risk priority number</strong> is severity × occurrence × detectability. High scores are prioritised for action, and the <strong>risk matrix</strong> places each failure in a risk band. For example, a mislabelled tube at phlebotomy may have high severity and poor detectability, so barcode labelling and two identifiers are introduced. After action, scores are recalculated to show residual risk.</p>
    <h4>Reactive: root cause analysis</h4>
    <p>After an incident, <strong>root cause analysis</strong> reconstructs the timeline, identifies contributing factors and asks why the defences failed — the <strong>Swiss cheese</strong> model. Corrective action must address the system rather than blame an individual, and its effectiveness must be checked later.</p>
    <h4>Comparison</h4>
    <p>FMEA is proactive and examines potential failures; root cause analysis is <strong>reactive</strong> and examines one event. Both feed the same risk register and corrective action system. Limitations of FMEA include subjective scoring, optimism about detectability and the effort required; it should be repeated when processes change. The risk register should be reviewed at management review and updated whenever a method, analyser or pathway changes.</p>
  `,
  tip: "Give the RPN formula and one laboratory example, then contrast proactive FMEA with reactive RCA.",
  sources: ["C11", "C1", "C2"]
},
{
  id: "cc106", domain: "chem-qc",
  q: "How should a clinical chemistry laboratory plan and conduct internal audits under ISO 15189? Include auditor selection, evidence gathering, reporting and follow-up.",
  tags: ["internal audit", "iso 15189", "nonconformity"],
  keypoints: ["internal audit", "audit programme", "audit criteria", "auditor independence", "checklist", "objective evidence", "vertical audit", "nonconformities", "root cause", "corrective action", "effectiveness", "management review"],
  answer: `
    <p>An <strong>internal audit</strong> is a planned, independent and systematic examination of laboratory activities against defined criteria. Its purpose is improvement, not punishment.</p>
    <h4>Planning</h4>
    <ul>
      <li>Establish an <strong>audit programme</strong> covering every process and requirement over a defined cycle, with frequency based on risk and previous findings.</li>
      <li>Define the <strong>audit criteria</strong>: ISO 15189, national regulations, and the laboratory's own SOPs and quality objectives.</li>
      <li>Select auditors who are trained and competent and who do not audit their own work — <strong>auditor independence</strong> is essential.</li>
      <li>Prepare a <strong>checklist</strong> and request documents in advance; notify the area without allowing a false picture to be prepared.</li>
    </ul>
    <h4>Conduct</h4>
    <p>Gather <strong>objective evidence</strong> by interviewing staff, observing practice and reviewing records. A powerful technique is the <strong>vertical audit</strong>: follow one patient sample from request to report, checking identity, collection, analysis, QC, verification and reporting. Compare what is written in the SOP with what is actually done. Record evidence, not opinions.</p>
    <div class="table-wrap"><table>
      <tr><th>Stage</th><th>Activity</th><th>Output</th></tr>
      <tr><td>Preparation</td><td>Scope, criteria, checklist</td><td>Audit plan</td></tr>
      <tr><td>Fieldwork</td><td>Interview, observation, records</td><td>Evidence</td></tr>
      <tr><td>Reporting</td><td>Classify findings</td><td>Audit report</td></tr>
      <tr><td>Follow-up</td><td>Corrective action and verification</td><td>Closure</td></tr>
    </table></div>
    <h4>Reporting and follow-up</h4>
    <p>Classify findings as observations or <strong>nonconformities</strong>, with the evidence and the requirement cited. The area proposes a <strong>root cause</strong> and <strong>corrective action</strong> with an owner and date. The auditor verifies implementation and <strong>effectiveness</strong>, then closes the finding. Results feed <strong>management review</strong>. Common failures are audits that never close, findings without a root cause, and the same auditor reviewing the same area year after year. A finding is not closed merely because a form was completed; closure requires evidence that the same problem cannot easily recur.</p>
  `,
  tip: "Emphasise independence, objective evidence from a vertical audit, and verification that corrective action worked.",
  sources: ["C11", "C1"]
},
{
  id: "cc107", domain: "chem-qc",
  q: "Explain document control and change control for laboratory SOPs and quality documents. Why is it a frequent accreditation finding?",
  tags: ["document control", "sop", "change control"],
  keypoints: ["document control", "master list", "version", "review date", "revision history", "obsolete documents", "change control", "standard operating procedures", "training", "effective date"],
  answer: `
    <p><strong>Document control</strong> ensures that the right people use the current, approved version of every document and that obsolete versions cannot be used by mistake. It is one of the most frequently cited accreditation findings because it is easy to describe and hard to sustain.</p>
    <h4>What must be controlled</h4>
    <p>The hierarchy runs from the quality manual and policies, through <strong>standard operating procedures</strong> and work instructions, to forms and records. External documents — manufacturer inserts, guidelines and regulations — must also be identified and controlled.</p>
    <h4>Essential elements</h4>
    <ul>
      <li>Unique identifier, title, <strong>version</strong>, effective date, author, reviewer and approver.</li>
      <li>A <strong>master list</strong> showing where each document is used and its current version.</li>
      <li><strong>Review date</strong> and a defined review cycle; <strong>revision history</strong> with a summary of changes.</li>
      <li>Controlled distribution and access; withdrawal or clear marking of <strong>obsolete documents</strong>, with retention of one copy for traceability.</li>
      <li>Electronic document management with permissions, audit trail and backup.</li>
    </ul>
    <h4>Change control</h4>
    <p>Any change to an SOP, reference interval, analyser setting or LIS rule should follow a <strong>change control</strong> process: request, risk assessment, approval, update of related documents, <strong>training</strong> and competency, verification or parallel testing where analytical, communication to users, and a defined <strong>effective date</strong>. After implementation, review whether the change achieved its purpose.</p>
    <p>An SOP should state purpose, scope, responsibilities, principle, specimen and reagent requirements, procedure, QC, calculation, reference intervals, reporting, safety and references. The commonest practical failures are uncontrolled bench copies, several versions in circulation, and documents revised without retraining staff. A controlled document that nobody follows is worse than no document, because it creates a false assurance of quality.</p>
  `,
  tip: "List the metadata a controlled document must carry, then describe change control from request to post-change review.",
  sources: ["C11", "C1", "C13"]
},
{
  id: "cc108", domain: "chem-qc",
  q: "Describe how you would establish and maintain staff competency in a clinical chemistry laboratory. What evidence should be retained?",
  tags: ["competency", "training", "iso 15189"],
  keypoints: ["competence", "initial competence", "direct observation", "blind samples", "external quality assessment", "problem-solving", "retraining", "authorisation", "POCT operators", "competency checklists"],
  answer: `
    <p><strong>Competence</strong> is the demonstrated ability to apply knowledge and skills to perform a task to the required standard. ISO 15189 requires the laboratory to define the competence needed for each role and to verify it before staff work independently.</p>
    <h4>Establishing competence</h4>
    <ol>
      <li>Define the job description, qualifications and authorised tasks for each post.</li>
      <li>Provide structured training: theory, demonstration, supervised practice and safety.</li>
      <li>Assess <strong>initial competence</strong> before independent reporting or result release.</li>
      <li>Authorise the person for specific methods, instruments and tasks, and record the scope of <strong>authorisation</strong>.</li>
    </ol>
    <h4>Assessment methods</h4>
    <p>A robust programme uses several complementary methods, not a single quiz:</p>
    <ul>
      <li><strong>Direct observation</strong> of routine work, instrument maintenance and troubleshooting.</li>
      <li>Monitoring of test performance — internal QC, <strong>external quality assessment</strong> and proficiency testing results.</li>
      <li>Review of records, worksheets and reports for accuracy and completeness.</li>
      <li><strong>Blind samples</strong> or previously analysed specimens with known values.</li>
      <li><strong>Problem-solving</strong> scenarios and questions on interferences, critical values and safety.</li>
    </ul>
    <p>Assessment should be repeated at defined intervals — commonly annually — and after a new method, instrument or LIS change, after a long absence, or when performance problems arise. Poor performance triggers <strong>retraining</strong> and reassessment, with a documented decision about whether the person may continue the task.</p>
    <h4>Records</h4>
    <p>Retain training logs, <strong>competency checklists</strong>, the evidence used, the assessor's name and date, and the authorisation decision. <strong>POCT operators</strong> who are not laboratory staff need the same process, delivered by the laboratory. Competence records are also evidence for accreditation and licensing inspections. Review the programme annually, and use audit findings, incidents and EQA performance to decide where retraining is needed.</p>
  `,
  tip: "Name at least five assessment methods — observation, QC/EQA, records, blind samples and problem-solving.",
  sources: ["C11", "C1", "C13"]
},
{
  id: "cc109", domain: "chem-qc",
  q: "Distinguish quality control, quality assurance and a quality management system. Explain how they fit together using the Donabedian structure–process–outcome model.",
  tags: ["qms", "quality assurance", "donabedian"],
  keypoints: ["quality control", "quality assurance", "quality management system", "quality policy", "Donabedian", "structure", "process", "outcome", "continual improvement", "management review", "PDCA"],
  answer: `
    <p>The three terms are often used interchangeably, but they describe different levels of a quality system.</p>
    <div class="table-wrap"><table>
      <tr><th>Concept</th><th>Focus</th><th>Example</th></tr>
      <tr><td><strong>Quality control</strong></td><td>The analytical run</td><td>Running control materials and applying Westgard rules</td></tr>
      <tr><td><strong>Quality assurance</strong></td><td>The total testing process</td><td>SOPs, training, EQA, audits and equipment maintenance</td></tr>
      <tr><td><strong>Quality management system</strong></td><td>The whole organisation</td><td>Quality policy, objectives, risk, resources and review</td></tr>
    </table></div>
    <h4>Quality control</h4>
    <p>Quality control is the set of statistical and analytical activities that decide whether a particular run is acceptable for patient reporting. It is narrow, frequent and result-centred. Passing QC says nothing about whether the request was appropriate, the sample was correctly identified, or the report reached the clinician.</p>
    <h4>Quality assurance</h4>
    <p>Quality assurance is broader: the planned activities that give confidence that the total testing process meets quality requirements — pre-analytical standards, validated methods, competent staff, EQA, audits and corrective action. It asks whether the system is designed to produce quality, not only whether today's run is in control.</p>
    <h4>Quality management system</h4>
    <p>A quality management system is the organisational framework that governs quality: <strong>quality policy</strong>, objectives, planning, resources, documentation, risk management, <strong>continual improvement</strong> and <strong>management review</strong>. ISO 15189 defines the requirements. QC is one component of QA, and QA is one component of the QMS.</p>
    <h4>Structure, process and outcome</h4>
    <p>The <strong>Donabedian</strong> model organises measurement into <strong>structure</strong> (facilities, staff, equipment, information systems), <strong>process</strong> (how testing is requested, performed and reported) and <strong>outcome</strong> (patient harm, satisfaction, clinical decisions). Laboratories are strong at measuring process; accreditation increasingly asks for evidence of outcomes and of continual improvement through <strong>PDCA</strong> and effective corrective action.</p>
  `,
  tip: "Use the nesting idea — QC inside QA inside the QMS — then map each level onto structure, process or outcome.",
  sources: ["C11", "C1", "C2"]
},
{
  id: "cc110", domain: "chem-qc", star: true,
  q: "What does ISO 15189:2022 require of a medical laboratory, and how does accreditation differ from Philippine DOH licensure?",
  tags: ["iso 15189", "accreditation", "licensure"],
  keypoints: ["ISO 15189", "risk-based", "point-of-care testing", "measurement uncertainty", "Philippine Accreditation Bureau", "DOH AO 2021-0037", "licensure", "accreditation", "gap analysis", "internal audit", "management review", "surveillance"],
  answer: `
    <p>ISO 15189 is the international standard for the quality and competence of medical laboratories. The 2022 edition is explicitly <strong>risk-based</strong> and patient-centred, and it incorporates <strong>point-of-care testing</strong>, previously covered by ISO 22870.</p>
    <h4>What the standard requires</h4>
    <p>Its requirements are grouped into general, structural and governance, resource, process, and management-system sections. In practice the laboratory must show:</p>
    <ul>
      <li>a documented quality management system with policy, objectives, risks and opportunities;</li>
      <li>competent staff, defined authorisations, suitable facilities and calibrated equipment;</li>
      <li>validated or verified methods, <strong>measurement uncertainty</strong>, reference intervals and documented quality control;</li>
      <li>control of the total testing process, including pre-analytical, analytical and post-analytical activities;</li>
      <li>information-system validation, confidentiality, continuity and backup;</li>
      <li>internal audits, management review and continual improvement.</li>
    </ul>
    <h4>Accreditation versus licensure</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>ISO 15189 accreditation</th><th>DOH licensure</th></tr>
      <tr><td>Nature</td><td>Voluntary, third-party attestation of competence</td><td>Mandatory legal permission to operate</td></tr>
      <tr><td>Basis</td><td>ISO 15189</td><td><strong>DOH AO 2021-0037</strong></td></tr>
      <tr><td>Body</td><td><strong>Philippine Accreditation Bureau</strong></td><td>DOH and its regional offices</td></tr>
      <tr><td>Focus</td><td>Quality system and technical competence</td><td>Minimum standards, classification, personnel and equipment</td></tr>
    </table></div>
    <p><strong>Accreditation</strong> is granted after an assessment of documents, interviews, observation and witnessing of tests, and is maintained through <strong>surveillance</strong> and reassessment. <strong>Licensure</strong> is a regulatory requirement under the Philippine clinical laboratory law and its implementing rules; a laboratory needs a licence to operate whether or not it seeks accreditation. The two are complementary, not substitutes.</p>
    <h4>Preparation</h4>
    <p>Start with a <strong>gap analysis</strong>, then write and control documents, validate methods, establish QC and EQA, train and assess staff, run an <strong>internal audit</strong> and hold a <strong>management review</strong> before the assessment. Correct every finding with a root cause and evidence of effectiveness.</p>
  `,
  tip: "Contrast voluntary accreditation with mandatory licensure, and name DOH AO 2021-0037 and the Philippine Accreditation Bureau.",
  sources: ["C11", "C13", "C1"]
},
{
  id: "cc111", domain: "chem-qc",
  q: "You are choosing a replacement chemistry analyser. Outline the process from needs assessment to go-live, including how analytical performance, workflow and cost should be weighted.",
  tags: ["method selection", "procurement", "cost"],
  keypoints: ["needs assessment", "test menu", "total allowable error", "Sigma metric", "random access", "total cost of ownership", "cost per reportable result", "decision matrix", "LIS interface", "parallel testing", "post-implementation review"],
  answer: `
    <p>Selecting an analyser is a clinical, operational and financial decision, not a shopping comparison of reagent prices.</p>
    <h4>Needs assessment</h4>
    <p>Define the <strong>test menu</strong>, current and projected volume, STAT requirements, sample types, turnaround targets, space, staffing, information-system interfaces and budget. Include the tests that will be sent out and the potential for consolidation. A clear requirement list prevents the purchase from being driven by a vendor demonstration.</p>
    <h4>Analytical evaluation</h4>
    <p>Ask for regulatory clearance, the manufacturer's precision, bias, linearity and interference claims, and evidence of traceability. Compare the proposed performance with the <strong>total allowable error</strong> and the resulting <strong>Sigma metric</strong>. Verify the claims in your own laboratory with a structured study — precision, comparison, linearity and carry-over — before accepting the instrument; a demonstration at a conference is not verification.</p>
    <h4>Workflow and usability</h4>
    <p>Assess throughput, <strong>random access</strong>, onboard reagent stability, sample volume, maintenance time, footprint, noise, ergonomics, error recovery and biosafety. Visit a site using the same model and talk to its staff. Consider connectivity and cybersecurity, since a good analyser with a poor interface creates post-analytical risk.</p>
    <h4>Cost</h4>
    <p>Calculate the <strong>total cost of ownership</strong> and the <strong>cost per reportable result</strong>, including reagents, calibrators, controls, consumables, service, maintenance, downtime, training, interface fees and the staff time to operate it. A low reagent price can conceal expensive calibration and QC.</p>
    <div class="table-wrap"><table>
      <tr><th>Criterion</th><th>Weight</th><th>Evidence</th></tr>
      <tr><td>Analytical performance</td><td>High</td><td>Verification data</td></tr>
      <tr><td>Workflow and turnaround</td><td>High</td><td>Site visit and throughput</td></tr>
      <tr><td>Cost per reportable result</td><td>High</td><td>Full costing</td></tr>
      <tr><td>Service and supply</td><td>Medium</td><td>Contract and local support</td></tr>
    </table></div>
    <p>Use a weighted <strong>decision matrix</strong>, then plan implementation: contract review, installation, <strong>LIS interface</strong> validation, <strong>parallel testing</strong>, staff training and competency, change control, go-live and a <strong>post-implementation review</strong>.</p>
  `,
  tip: "Move through needs, performance, workflow and total cost, and end with parallel testing and a post-go-live review.",
  sources: ["C1", "C5", "C11"]
},
{
  id: "cc112", domain: "chem-qc", star: true,
  q: "Discuss inappropriate laboratory test utilization (overuse and underuse) and the laboratory's role in demand management. Give examples relevant to clinical chemistry.",
  tags: ["test utilization", "choosing wisely", "demand management"],
  keypoints: ["overuse", "underuse", "Choosing Wisely", "clinical decision support", "minimum retest intervals", "reflex and reflective testing", "audit and feedback", "utilization committee", "duplicate-order alerts", "false-positive"],
  answer: `
    <p>Laboratory tests are valuable only when they answer a clinical question and change a decision. <strong>Overuse</strong> — testing too often, too broadly or without an indication — and <strong>underuse</strong> — failing to order an indicated test — both reduce value.</p>
    <h4>Why it happens</h4>
    <p>Drivers include defensive practice, habitual order sets, patient expectation, lack of timely feedback, fee-for-service incentives and the convenience of automated panels. Overuse causes unnecessary cost, <strong>false-positive</strong> results, cascade testing, iatrogenic anaemia from repeated phlebotomy and delayed care. Underuse misses opportunities for prevention, as when HbA1c or the urine albumin-to-creatinine ratio is not measured in a patient with diabetes.</p>
    <h4>Demand management</h4>
    <ul>
      <li>Adopt evidence-based guidance such as <strong>Choosing Wisely</strong> recommendations and local clinical pathways.</li>
      <li>Use <strong>clinical decision support</strong>: order sets, <strong>duplicate-order alerts</strong> and <strong>minimum retest intervals</strong>.</li>
      <li>Implement <strong>reflex and reflective testing</strong> so that the laboratory adds the appropriate follow-up test rather than the clinician ordering a panel.</li>
      <li>Provide a laboratory handbook and educate users on test performance and pre-analytical requirements.</li>
      <li>Use <strong>audit and feedback</strong> — compare ordering by clinician or unit with peers and with guidelines.</li>
      <li>Establish a <strong>utilization committee</strong> with clinicians, the laboratory and finance, and review high-volume and send-out tests.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Example</th><th>Intervention</th></tr>
      <tr><td>Overuse</td><td>Daily electrolytes with no clinical change</td><td>Minimum retest interval</td></tr>
      <tr><td>Overuse</td><td>Duplicate HbA1c within a month</td><td>Duplicate-order alert</td></tr>
      <tr><td>Underuse</td><td>No urine albumin-to-creatinine ratio in diabetes</td><td>Care bundle and feedback</td></tr>
      <tr><td>Misuse</td><td>Wrong tube or wrong timing</td><td>Collection manual and training</td></tr>
    </table></div>
    <h4>Balance</h4>
    <p>Demand management must not become rationing. The aim is to increase appropriate testing and remove low-value testing, with attention to equity and to patients who are under-served. In the Philippines, where PhilHealth case rates and out-of-pocket costs constrain care, high-value testing should be protected while low-value panels are reduced. Measure tests per patient, duplicate rates and the proportion of tests that change management, and report the results to clinicians and management.</p>
  `,
  tip: "Give paired examples of overuse and underuse, then match each to a specific demand-management tool.",
  sources: ["C1", "C2", "C11"]
},
{
  id: "cc113", domain: "chem-qc",
  q: "Explain workload measurement, staffing and cost analysis in a clinical chemistry laboratory. How can productivity be improved without compromising quality?",
  tags: ["workload", "staffing", "productivity"],
  keypoints: ["workload units", "full-time equivalents", "skill mix", "cost per reportable result", "fixed costs", "variable costs", "productivity", "FEFO", "cross-train", "quality indicators"],
  answer: `
    <p>Laboratory <strong>productivity</strong> is not the number of tests performed; it is the amount of clinically useful work produced per unit of resource, without sacrificing quality.</p>
    <h4>Workload measurement</h4>
    <p>Count tests, but also weight them by complexity. <strong>Workload units</strong> — for example CAP workload units or locally derived time standards — capture specimen handling, analysis, QC, maintenance and reporting. Distinguish billable tests from reportable results, and recognise that a STAT sample consumes more resource than a batch sample. Convert workload into <strong>full-time equivalents</strong> using productive hours, allowing for leave, training and non-productive time.</p>
    <h4>Staffing and skill mix</h4>
    <p>Match coverage to demand by shift and by day of the week. A mix of medical technologists, laboratory aides and specialists can protect scarce expertise, but every task must be delegated within competence and authorised. Consider fatigue, workload spikes, burnout and staff safety; an understaffed laboratory generates errors that cost more than the hours saved.</p>
    <h4>Cost analysis</h4>
    <div class="table-wrap"><table>
      <tr><th>Metric</th><th>Meaning</th><th>Use</th></tr>
      <tr><td>Cost per test</td><td>Direct reagent and consumable cost</td><td>Pricing and tenders</td></tr>
      <tr><td>Cost per reportable result</td><td>Includes calibration, QC and repeats</td><td>True comparison</td></tr>
      <tr><td>Tests per FTE</td><td>Output per staff member</td><td>Productivity trend</td></tr>
      <tr><td>Budget variance</td><td>Actual versus planned</td><td>Financial control</td></tr>
    </table></div>
    <p>Separate <strong>fixed costs</strong> (equipment, space, salaried staff) from <strong>variable costs</strong> (reagents, controls, consumables). Automation shifts cost from staff to equipment and consumables, so the business case must include maintenance and downtime.</p>
    <h4>Improving productivity</h4>
    <p>Reduce repeat and recollection rates, validate autoverification, use standard work, <strong>cross-train</strong> staff, schedule to demand, and manage inventory with par levels and <strong>FEFO</strong> (first-expiry, first-out) to avoid wastage. Monitor <strong>quality indicators</strong> alongside productivity so that speed is never achieved by skipping verification or maintenance.</p>
  `,
  tip: "Define workload units and FTE, separate fixed from variable cost, and insist that quality indicators accompany productivity.",
  sources: ["C1", "C2", "C13"]
},
{
  id: "cc114", domain: "chem-qc", star: true,
  q: "What are quality indicators in the clinical laboratory? Describe how to select, monitor and act on them, with examples across the total testing process.",
  tags: ["quality indicators", "benchmarking", "performance monitoring"],
  keypoints: ["quality indicator", "IFCC Model of Quality Indicators", "specimen rejection rate", "critical value notification", "amended report", "run charts", "dashboard", "benchmark", "management review", "PDCA"],
  answer: `
    <p>A <strong>quality indicator</strong> is a quantifiable measure of how well a process meets a quality requirement. Indicators make the abstract idea of quality visible, comparable and actionable.</p>
    <h4>Choosing indicators</h4>
    <p>Select a small set linked to high-risk processes and to the laboratory's objectives. Each should have a clear definition, numerator and denominator, data source, frequency, target and accountable owner. The <strong>IFCC Model of Quality Indicators</strong> provides a widely used menu across the total testing process. Avoid collecting dozens of indicators that nobody acts on.</p>
    <div class="table-wrap"><table>
      <tr><th>Phase</th><th>Example indicator</th><th>Why it matters</th></tr>
      <tr><td>Pre-analytical</td><td><strong>Specimen rejection rate</strong>; mislabelled samples; haemolysis rate</td><td>Errors before analysis are the commonest</td></tr>
      <tr><td>Analytical</td><td>IQC failure rate; unacceptable EQA results; calibration failures</td><td>Method performance and stability</td></tr>
      <tr><td>Post-analytical</td><td><strong>Critical value notification</strong> compliance; <strong>amended report</strong> rate; turnaround time</td><td>Safe and timely reporting</td></tr>
      <tr><td>Outcome</td><td>Patient harm; complaints; clinician satisfaction</td><td>Whether quality is experienced</td></tr>
    </table></div>
    <h4>Monitoring</h4>
    <p>Display indicators on <strong>run charts</strong> or statistical process control charts rather than comparing single months, so that real change is distinguished from random variation. Use a <strong>dashboard</strong> for management and bench staff, and <strong>benchmark</strong> against peer laboratories where valid definitions exist. Investigate signals with the same tools used for process improvement — Pareto analysis, 5 Whys and <strong>PDCA</strong>.</p>
    <h4>Acting on them</h4>
    <p>An indicator that is measured but not reviewed is waste. Set a threshold for action, assign responsibility, and record the improvement in the quality system. Report the results to <strong>management review</strong> and to staff, and close the loop by re-measuring after the change.</p>
    <p>Limitations include measurement burden, differences in definitions that frustrate benchmarking, and the risk of managing the number rather than the process. Under <strong>DOH AO 2021-0037</strong> and ISO 15189, the laboratory is expected to monitor quality; the indicators should demonstrate improvement, not merely compliance.</p>
  `,
  tip: "Cover selection, display and action, with one indicator from each phase of the total testing process.",
  sources: ["C11", "C1", "C13"]
}
);
