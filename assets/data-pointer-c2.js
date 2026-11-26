/* Pointer gap — Clinical Chemistry, domain c2: analytical instrumentation & automation. */
window.QBANK.push(
{
  id: "c2g1", domain: "c2", star: true,
  q: "Explain the principles and design of spectrophotometers and reflectance photometers, and describe the performance checks that keep photometric results trustworthy.",
  tags: ["spectrophotometry", "reflectance", "Beer-Lambert", "photometry"],
  keypoints: ["A = epsilon x b x c", "absorbance is logarithmic", "useful absorbance range 0.05 to 2.0", "tungsten-halogen visible source", "deuterium lamp for ultraviolet", "interference filter or diffraction grating", "diode array reads all wavelengths at once", "quartz cuvette for ultraviolet", "photodiode or photomultiplier detector", "reflectance falls as colour develops", "Kubelka-Munk transform", "dry slide lot-specific calibration", "holmium oxide wavelength accuracy check", "neutral density filter photometric accuracy", "stray light check with nitrite", "turbidity and haemolysis interfere"],
  answer: `
    <h4>Beer–Lambert basis</h4>
    <p>Photometry measures the fraction of light removed by a coloured solution: <strong>A = ε × b × c</strong>. Absorbance is <strong>logarithmic</strong>, so doubling the concentration doubles absorbance. The practical range is about <strong>0.05–2.0 A</strong>: below it, detector noise dominates; above it, stray light and non-linearity flatten the curve, so a high result must be diluted and re-assayed. Most enzyme and substrate methods exploit the molar absorptivity of NADH at 340 nm.</p>
    <h4>Instrument design</h4>
    <div class="table-wrap"><table>
      <tr><th>Component</th><th>Options</th><th>Practical point</th></tr>
      <tr><td>Light source</td><td><strong>Tungsten–halogen</strong> (visible), <strong>deuterium</strong> (UV), xenon flash</td><td>Lamp hours and drift are a common cause of silent bias</td></tr>
      <tr><td>Monochromator</td><td>Interference filter, diffraction grating, <strong>diode array</strong></td><td>A diode array reads the whole spectrum at once, allowing simultaneous analyte and blank wavelengths</td></tr>
      <tr><td>Cuvette</td><td><strong>Quartz</strong> for UV, polystyrene for visible; 1 cm path</td><td>Scratches, bubbles and fingerprints add scatter</td></tr>
      <tr><td>Detector</td><td>Photodiode, photomultiplier tube</td><td>Linearity must be verified across the reportable range</td></tr>
    </table></div>
    <p>Continuous-flow, centrifugal and discrete random-access analysers differ in how they move and read cuvettes, but the optics are the same.</p>
    <h4>Reflectance photometry</h4>
    <p>Dry-slide and reagent-strip systems measure light <strong>reflected</strong> from a pad, not transmitted through a solution. Reflectance <strong>falls as colour develops</strong> and is converted to concentration by the <strong>Kubelka–Munk</strong> transform. Because the pad is thin and the path is undefined, each lot is calibrated against a master curve; meter, pad humidity, temperature and reading time all form part of the analytical system.</p>
    <h4>Performance checks and error sources</h4>
    <ul>
      <li><strong>Wavelength accuracy</strong> with holmium oxide or didymium filters; <strong>photometric accuracy</strong> with neutral-density or potassium dichromate standards; <strong>stray light</strong> with nitrite or potassium chloride.</li>
      <li>Linearity, drift, carry-over and lamp-hour tracking, with documented corrective action.</li>
      <li>Specimen problems: wrong blank, <strong>turbidity</strong>, haemolysis (haemoglobin absorbs near 415 and 540 nm), lipaemia and dirty flow cells — report haemolysis, icterus and lipaemia indices alongside the result.</li>
      <li>Kinetic assays also need tight temperature control (about ±0.1 °C) and exact incubation timing.</li>
    </ul>
  `,
  tip: "Write the equation, name the useful absorbance range, then separate transmission photometry from reflectance and finish with the optical checks.",
  sources: ["C2", "C1", "C5"]
},
{
  id: "c2g2", domain: "c2",
  q: "Discuss ion-selective electrodes as used for sodium, potassium, chloride, calcium and lithium: response mechanism, membrane chemistry, direct versus indirect modes, and the practical faults that produce misleading electrolytes.",
  tags: ["ion-selective electrode", "Nernst", "pseudohyponatraemia", "electrolytes"],
  keypoints: ["Nernst equation", "59.16 mV per decade for a monovalent ion", "29.6 mV for a divalent ion", "electrode measures activity not concentration", "Ag/AgCl reference electrode", "liquid junction potential", "valinomycin membrane for potassium", "glass or crown ether membrane for sodium", "neutral carrier for calcium", "indirect ISE dilutes the sample", "direct ISE measures undiluted plasma water", "pseudohyponatraemia", "protein coating causes drift", "EDTA contamination raises potassium and lowers calcium", "two-point calibration and slope check", "split-sample comparison when results do not fit"],
  answer: `
    <h4>Nernstian response</h4>
    <p>An ion-selective electrode develops a potential when the target ion partitions across a selective membrane: <strong>E = E° + (2.303RT/zF) log a</strong>. At 25 °C the slope is about <strong>59.16 mV per decade</strong> for a monovalent ion and 29.6 mV for a divalent ion. The electrode therefore measures <strong>activity, not concentration</strong>. A stable <strong>Ag/AgCl reference electrode</strong> completes the circuit through a salt bridge; a blocked junction or dried electrolyte produces noise and drift.</p>
    <h4>Membrane chemistry</h4>
    <div class="table-wrap"><table>
      <tr><th>Analyte</th><th>Membrane</th><th>Notes</th></tr>
      <tr><td>Na<sup>+</sup></td><td>Aluminosilicate <strong>glass</strong> or crown ether</td><td>Historical glass electrodes need careful hydration</td></tr>
      <tr><td>K<sup>+</sup></td><td><strong>Valinomycin</strong> in a plasticised PVC membrane</td><td>Highly selective; protein coating is the main enemy</td></tr>
      <tr><td>Cl<sup>-</sup></td><td>Quaternary ammonium ion exchanger</td><td>Bromide and iodide can interfere</td></tr>
      <tr><td>Ca<sup>2+</sup>, Li<sup>+</sup></td><td>Neutral carrier (ionophore)</td><td>Ionised calcium needs pH-corrected interpretation</td></tr>
    </table></div>
    <h4>Direct versus indirect</h4>
    <p><strong>Indirect ISE</strong> dilutes the sample before measurement and reports concentration per litre of plasma, so it is vulnerable to <strong>pseudohyponatraemia</strong> when lipid or protein displaces plasma water. <strong>Direct ISE</strong> measures undiluted sample, reporting activity in plasma water, and is used in blood-gas analysers and POCT; whole-blood heparin and protein build-up then matter more.</p>
    <h4>Practical faults and verification</h4>
    <ul>
      <li>Fibrin, protein or lipid coating the membrane causes <strong>drift and erratic potassium</strong>; follow the cleaning and proteinase protocol.</li>
      <li>Clots, bubbles and short samples give low or unstable readings — check the aspirated volume and the sample probe.</li>
      <li><strong>EDTA or citrate contamination</strong> raises potassium and lowers calcium; a potassium result that does not fit the clinical picture should prompt a repeat from a fresh tube.</li>
      <li>Calibrate with two points, verify the <strong>slope</strong>, run aqueous and serum-based QC at two levels, and compare with <strong>direct ISE</strong> by split sample when sodium is implausible.</li>
    </ul>
  `,
  tip: "State the Nernst slope, then use pseudohyponatraemia and EDTA contamination as the two worked examples.",
  sources: ["C2", "C1", "C3"]
},
{
  id: "c2g3", domain: "c2", star: true,
  q: "Compare the main immunoassay formats used in clinical chemistry, and explain the analytical failures that produce a wrong result despite acceptable QC.",
  tags: ["immunoassay", "sandwich", "competitive", "hook effect", "interference"],
  keypoints: ["competitive assay uses limited antibody and labelled antigen", "competitive curve is inverse", "sandwich assay needs two epitopes", "non-competitive assay has a positive response", "homogeneous assay needs no wash step", "heterogeneous assay separates bound from free", "enzyme and chemiluminescent labels", "electrochemiluminescence uses ruthenium", "immunoturbidimetry measures precipitate", "hook effect in one-step sandwich assays", "heterophile antibody interference", "heterophile antibodies", "biotin-streptavidin interference", "cross-reactivity and platform standardisation", "dilution and re-assay to resolve hook effect", "four or five parameter curve fit"],
  answer: `
    <h4>Format families</h4>
    <p>All immunoassays depend on a specific antibody–antigen reaction; they differ in how the bound and free fractions are separated and how binding is converted into a signal. <strong>Competitive</strong> assays use a limited antibody with labelled antigen, so the signal is <strong>inversely</strong> related to analyte and the curve is steepest at low concentration — suited to small haptens such as thyroxine and drugs. <strong>Non-competitive sandwich</strong> assays use two antibodies against different epitopes and give a <strong>positive</strong> response, with a wide working range for proteins such as TSH, hCG and troponin. <strong>Homogeneous</strong> formats need no wash step because binding directly modulates enzyme activity, as in EMIT.</p>
    <h4>Labels and detection</h4>
    <ul>
      <li><strong>Enzyme</strong> labels (alkaline phosphatase, horseradish peroxidase) with colorimetric or fluorescent substrates.</li>
      <li><strong>Chemiluminescence</strong> — acridinium esters, luminol or dioxetane — gives high sensitivity with a simple optical readout.</li>
      <li><strong>Electrochemiluminescence</strong> (ruthenium chelate) and time-resolved fluorescence widen the dynamic range and reduce background.</li>
      <li><strong>Immunoturbidimetry and nephelometry</strong> measure light scattered or blocked by antigen–antibody complexes and suit high-concentration proteins.</li>
      <li><strong>Lateral-flow</strong> strips are the basis of most rapid tests; they are qualitative and read visually.</li>
    </ul>
    <h4>Failures that survive QC</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Mechanism</th><th>Action</th></tr>
      <tr><td><strong>Hook effect</strong></td><td>Very high analyte saturates both antibodies in a one-step sandwich, so the signal falls</td><td>Dilute and re-assay; screen with an antigen-excess check for hCG, PSA, ferritin and thyroglobulin</td></tr>
      <tr><td><strong>Heterophile or human anti-mouse antibodies</strong></td><td>Bridge capture and detection antibodies without analyte</td><td>Re-assay with a different platform or blocking reagent; report the discrepancy</td></tr>
      <tr><td><strong>Biotin</strong></td><td>High-dose supplements compete for streptavidin sites</td><td>Stop biotin 48–72 hours before sampling; use a non-biotin assay</td></tr>
      <tr><td>Cross-reactivity</td><td>Structurally related compounds bind the antibody</td><td>Interpret with the metabolite pattern; use a specific method</td></tr>
    </table></div>
    <p>Calibrate with a <strong>four- or five-parameter curve fit</strong>, verify each lot against the previous one, and state the measuring range and dilution protocol. Because these assays are standardised differently, results from different platforms are not interchangeable — a fact that matters most for troponin, TSH and tumour markers.</p>
  `,
  tip: "Draw competitive versus sandwich side by side, then name the hook effect and heterophile antibodies as the classic false results.",
  sources: ["C1", "C2", "C10"]
},
{
  id: "c2g4", domain: "c2",
  q: "Explain the principles of chromatography and mass spectrometry in the clinical laboratory, and outline how an LC-MS/MS method is prepared, validated and applied.",
  tags: ["chromatography", "mass spectrometry", "LC-MS/MS", "method validation"],
  keypoints: ["partition between stationary and mobile phase", "reverse-phase C18 column", "retention time and resolution", "gas chromatography needs volatile or derivatised analytes", "electrospray ionisation for polar compounds", "atmospheric pressure chemical ionisation", "triple quadrupole multiple reaction monitoring", "time-of-flight accurate mass screening", "isotope-labelled internal standard", "protein precipitation liquid-liquid or solid-phase extraction", "matrix effect and ion suppression", "CLSI C62 validation", "lower limit of quantification", "carry-over and stability", "therapeutic drug monitoring application", "not every analyte needs mass spectrometry"],
  answer: `
    <h4>Separation principles</h4>
    <p>Chromatography separates analytes by their distribution between a <strong>stationary phase</strong> and a <strong>mobile phase</strong>. In <strong>reverse-phase HPLC</strong> a C18 column with a water–acetonitrile or methanol gradient retains non-polar compounds; ion-exchange, size-exclusion and normal-phase modes serve other analytes. Resolution depends on selectivity, efficiency (plate number) and retention, and <strong>UHPLC</strong> with sub-2 µm particles achieves better efficiency and faster runs at higher pressure. <strong>Gas chromatography</strong> requires volatile or derivatised analytes and is still used for alcohols, fatty acids and some organic acids.</p>
    <h4>Mass spectrometry</h4>
    <p>After separation, molecules are ionised — <strong>electrospray</strong> for polar and large molecules, <strong>atmospheric-pressure chemical ionisation</strong> for less polar ones — then separated by mass-to-charge ratio. A <strong>triple quadrupole</strong> in <strong>multiple reaction monitoring</strong> mode monitors a specific precursor-to-product transition, giving exceptional specificity for quantitative work; a <strong>time-of-flight</strong> or Q-TOF analyser provides accurate mass for screening and metabolite identification. A stable <strong>isotope-labelled internal standard</strong> co-elutes with the analyte and corrects recovery, ionisation and injection variability — the single most important safeguard in quantitative LC-MS/MS.</p>
    <h4>Sample preparation and validation</h4>
    <ul>
      <li><strong>Protein precipitation</strong> is fast but leaves matrix behind; <strong>liquid–liquid extraction</strong> and <strong>solid-phase extraction</strong> clean up more at the cost of time. Hydrolysis may be needed to release conjugated analytes.</li>
      <li>Validate according to <strong>CLSI C62</strong>: calibration model, <strong>lower limit of quantification</strong>, precision, accuracy, <strong>matrix effect and ion suppression</strong>, carry-over, interference, dilution integrity and stability.</li>
      <li>Monitor internal-standard response and retention time in every batch; a falling internal standard signals injection or ionisation failure, not a true result.</li>
    </ul>
    <h4>Applications and limits</h4>
    <p>LC-MS/MS is used for <strong>therapeutic drug monitoring</strong> of immunosuppressants and antiepileptics, steroid and vitamin D profiling, plasma metanephrines, toxicology and newborn screening; ICP-MS covers trace elements. It is not automatically better: it demands skilled staff, robust methods and ongoing maintenance, so it is reserved for analytes where specificity or multiplexing genuinely adds value.</p>
  `,
  tip: "Name the ionisation source, the analyser and the internal standard — then give the validation parameters in CLSI order.",
  sources: ["C1", "C10", "C5"]
},
{
  id: "c2g5", domain: "c2",
  q: "You are asked to introduce total laboratory automation with middleware-driven autoverification and networked point-of-care testing. Describe the design, the governance and the risks you would manage.",
  tags: ["total laboratory automation", "middleware", "autoverification", "POCT"],
  keypoints: ["front-end centrifugation decapping and aliquoting", "track-based sample transport", "closed-tube sampling reduces aerosol exposure", "middleware rules engine between analyser and LIS", "delta check and critical value hold rules", "haemolysis icterus lipaemia index rules", "reflex and reflective testing", "autoverification rate as a key indicator", "validate every rule against test cases", "version control and audit trail", "ISO 15189 information system requirements", "POCT connectivity and device lockout", "operator competency and two-level QC", "lot verification before patient use", "single point of failure and downtime plan", "critical results notified with read-back"],
  answer: `
    <h4>Designing the automated core</h4>
    <p>Total automation joins <strong>front-end processing</strong> (centrifugation, decapping, aliquoting, sorting), a <strong>track</strong>, analysers and post-analytical storage. Most errors and needlestick injuries occur in this pre-analytical step, and <strong>closed-tube sampling</strong> also reduces aerosol exposure. Design starts from workload, test menu and tube types, and needs a manual lane for STAT and problem samples.</p>
    <h4>Middleware and autoverification</h4>
    <p><strong>Middleware</strong> is the rules engine between analysers and the LIS. It releases results that satisfy every rule and holds the rest for review. Rules:</p>
    <ul>
      <li>Result inside the reportable range, unflagged, with QC in control for that run.</li>
      <li><strong>Delta check</strong> against the previous result, and a <strong>critical value</strong> hold that forces telephone notification with read-back.</li>
      <li><strong>Haemolysis, icterus and lipaemia indices</strong> within analyte-specific limits.</li>
      <li>Consistency checks: anion gap, calculated versus measured osmolality, implausible combinations.</li>
      <li><strong>Reflex and reflective testing</strong> — add a free T4 when TSH is abnormal, or free light chains when a paraprotein appears.</li>
    </ul>
    <p>Every rule is a clinical decision: write it, <strong>validate it against test cases</strong>, obtain documented sign-off, place it under <strong>version control and audit trail</strong>, and review override and autoverification rates monthly. A rule that silently releases a wrong unit can affect thousands of results.</p>
    <h4>Point-of-care testing</h4>
    <p>Networked POCT brings glucose, blood gas, coagulation and rapid infectious-disease tests into the same quality system. Requirements: a connectivity specification, operator training and competency before device unlock, two-level internal QC and EQA, <strong>lot verification</strong> before patient use, maintenance, and automatic capture of results and operator identity. <strong>ISO 15189:2022</strong> explicitly includes POCT, so the laboratory stays accountable when a nurse performs the test.</p>
    <h4>Risks and indicators</h4>
    <div class="table-wrap"><table>
      <tr><th>Risk</th><th>Control</th></tr>
      <tr><td>Single point of failure (track, middleware, interface)</td><td>Documented downtime procedure, manual fallback, tested restore</td></tr>
      <tr><td>Unvalidated or changed rule</td><td>Change control, test scripts, audit trail review</td></tr>
      <tr><td>POCT device offline or past QC</td><td>Automatic lockout, dashboard monitoring, coordinator rounds</td></tr>
    </table></div>
    <p>Track <strong>turnaround time, autoverification rate, rerun and rejection rates, and downtime</strong>; automation removes manual error but concentrates risk, so validation and monitoring are the safeguards.</p>
  `,
  tip: "Treat autoverification rules as validated clinical logic, and remember that ISO 15189 keeps POCT inside the laboratory's accountability.",
  sources: ["C11", "C1", "C3", "C13"]
}
);
