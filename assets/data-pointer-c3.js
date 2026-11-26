/* Clinical Chemistry — pointer gap: emerging biomarkers & novel analytes (domain c3, essays c3g1–c3g10) */
window.QBANK.push(
{
  id: "c3g1", domain: "c3", star: true,
  q: "High-sensitivity troponin and beyond: what the assay must achieve, how the 0/1-hour pathway works, and which newer cardiac markers might add value.",
  tags: ["hs-cTn", "0/1-hour pathway", "copeptin", "sST2"],
  keypoints: ["high-sensitivity troponin", "99th percentile", "sex-specific", "coefficient of variation", "0/1-hour algorithm", "delta", "myocardial injury", "copeptin", "H-FABP", "sST2", "galectin-3", "GDF-15", "haemolysis", "biotin", "chronic kidney disease", "macro-troponin"],
  answer: `
    <h4>What high sensitivity requires</h4>
    <p>A <strong>high-sensitivity troponin</strong> assay detects the protein in most healthy people and must measure it with a total <strong>coefficient of variation</strong> of 10% or less at the <strong>99th percentile</strong> upper reference limit. <strong>Sex-specific</strong> limits are mandatory because male values are higher. A single result above the limit defines <strong>myocardial injury</strong>, not infarction; infarction needs a rise or fall plus ischaemic evidence.</p>
    <h4>The 0/1-hour pathway</h4>
    <p>The <strong>0/1-hour algorithm</strong> uses a baseline and a one-hour sample. Very low baseline values with a small absolute <strong>delta</strong> rule out infarction; very high values with a large delta rule it in; the middle group needs further sampling. The delta is assay-specific, so a laboratory cannot borrow another platform's cut-off. Serial sampling also separates acute injury from chronic elevation in <strong>chronic kidney disease</strong> or heart failure. Where only point-of-care testing exists, its imprecision must be stated, because a device that cannot resolve the delta cannot support the pathway.</p>
    <h4>Beyond troponin</h4>
    <ul>
      <li><strong>Copeptin</strong> rises early in acute stress and was proposed for rule-out; it adds little once hs-cTn is available.</li>
      <li><strong>H-FABP</strong> is an early cytoplasmic marker but lacks specificity.</li>
      <li><strong>sST2</strong>, <strong>galectin-3</strong> and <strong>GDF-15</strong> reflect fibrosis, remodelling and inflammation; they predict death and heart failure, not infarction.</li>
    </ul>
    <h4>Analytical pitfalls</h4>
    <p><strong>Haemolysis</strong>, fibrin, <strong>biotin</strong> and heterophile antibodies cause false results. <strong>Macro-troponin</strong>, an immunoglobulin-bound complex, produces persistent low-level elevation and unnecessary angiography. Renal impairment raises baseline values, so the delta matters more than the absolute number. Documented lot changes and QC at the low end guard against a shift that mimics a real rise. Report the platform, the sex-specific limit and the delta with every serial result.</p>
  `,
  tip: "Separate injury from infarction first, then use the delta and the assay's own cut-offs — never another platform's.",
  sources: ["C9", "C1", "C2"]
},
{
  id: "c3g2", domain: "c3", star: true,
  q: "Natriuretic peptides and cardiac remodelling markers: compare BNP and NT-proBNP, explain confounding factors, and assess the added value of sST2, galectin-3 and GDF-15.",
  tags: ["BNP", "NT-proBNP", "sST2", "galectin-3"],
  keypoints: ["BNP", "NT-proBNP", "half-life", "neprilysin", "sacubitril/valsartan", "obesity", "atrial fibrillation", "chronic kidney disease", "age-stratified cut-off", "sST2", "galectin-3", "GDF-15", "MR-proANP", "remodelling", "prognosis", "rule-out"],
  answer: `
    <h4>Two peptides, two assays</h4>
    <p><strong>BNP</strong> is the active hormone with a short <strong>half-life</strong>; <strong>NT-proBNP</strong> is the inactive fragment, cleared mainly by the kidney. Both are released by ventricular wall stretch. In heart failure they support diagnosis and prognosis, but neither is a stand-alone test. Because BNP is cleared partly by neprilysin, the two peptides diverge during therapy and only one can be trended. <strong>Sacubitril/valsartan</strong> inhibits <strong>neprilysin</strong> and raises BNP without changing NT-proBNP, so NT-proBNP is preferred during that therapy.</p>
    <h4>Interpreting a result</h4>
    <div class="table-wrap"><table>
      <tr><th>Factor</th><th>Effect</th></tr>
      <tr><td>Age</td><td>Use <strong>age-stratified cut-off</strong>s; values rise with age</td></tr>
      <tr><td><strong>Obesity</strong></td><td>Lowers both peptides, so a "normal" result does not exclude failure</td></tr>
      <tr><td><strong>Atrial fibrillation</strong></td><td>Raises values independently of filling pressure</td></tr>
      <tr><td><strong>Chronic kidney disease</strong></td><td>Reduces clearance, especially of NT-proBNP</td></tr>
      <tr><td>Pulmonary embolism, sepsis</td><td>Raise values through right ventricular strain</td></tr>
    </table></div>
    <h4>Remodelling markers</h4>
    <p><strong>sST2</strong> is a decoy receptor for interleukin-33 and predicts death and fibrosis after myocardial infarction. <strong>Galectin-3</strong> reflects macrophage-driven fibrosis. <strong>GDF-15</strong> is a stress and inflammation marker that is not cardiac-specific. <strong>MR-proANP</strong> is a stable proxy for atrial stretch, and it is more stable than ANP itself, whose half-life is only a few minutes. None diagnoses heart failure; each adds <strong>prognosis</strong> or <strong>remodelling</strong> information to a clinical score.</p>
    <h4>Use in practice</h4>
    <ul>
      <li>Use the peptide as a <strong>rule-out</strong> test in the breathless patient, with the local cut-off.</li>
      <li>Trend on the same platform and record the assay, because values are not interchangeable.</li>
      <li>Do not order a panel of remodelling markers routinely; reserve them for risk stratification or research.</li>
      <li>Treat the patient, not the number: guided therapy by biomarker alone has not consistently improved outcomes.</li>
    </ul>
    <p>A single value cannot distinguish compensated from decompensated disease; the trend and the clinical examination do that.</p>
  `,
  tip: "State the assay (BNP or NT-proBNP) before interpreting, then list obesity, AF and CKD as the three confounders.",
  sources: ["C9", "C1", "C3"]
},
{
  id: "c3g3", domain: "c3", star: true,
  q: "Sepsis biomarkers beyond cultures: evaluate presepsin, sTREM-1 and neutrophil CD64, and explain how they should be used alongside procalcitonin and lactate.",
  tags: ["presepsin", "sTREM-1", "CD64", "sepsis"],
  keypoints: ["presepsin", "CD14 subtype", "sTREM-1", "CD64", "flow cytometry", "procalcitonin", "C-reactive protein", "lactate", "serial measurement", "cut-off", "antibiotic stewardship", "blood culture", "heterogeneity", "immunoassay", "Sepsis-3"],
  answer: `
    <h4>Why another marker</h4>
    <p><strong>Sepsis-3</strong> defines sepsis as a dysregulated host response with organ dysfunction, but the diagnosis still rests on clinical assessment. <strong>Blood culture</strong> takes one to three days and is often negative. <strong>Lactate</strong> reflects hypoperfusion rather than infection, and <strong>C-reactive protein</strong> rises slowly. A rapid marker of the host response could shorten time to antibiotics and support <strong>antibiotic stewardship</strong>.</p>
    <h4>Presepsin</h4>
    <p><strong>Presepsin</strong> is the soluble N-terminal fragment of <strong>CD14</strong>, the lipopolysaccharide co-receptor on monocytes. It rises within about two hours, correlates with severity and mortality, and is measured by automated <strong>immunoassay</strong>. Quoted <strong>cut-off</strong>s of roughly 300 to 600 pg/mL differ by platform and population, and renal function influences the result. Presepsin also rises after major surgery and in renal failure, so a single value must be read with the operative and renal history.</p>
    <h4>sTREM-1 and CD64</h4>
    <p><strong>sTREM-1</strong> is shed from activated myeloid cells and rises in bacterial and fungal infection, but also in sterile inflammation. <strong>CD64</strong> is the high-affinity Fc gamma receptor I, normally low on neutrophils and upregulated within hours by bacterial infection. The flow cytometric CD64 index can separate infection from sterile inflammation better than CRP in some studies, but <strong>flow cytometry</strong> is labour-intensive and poorly standardised. It also requires fresh whole blood and a cytometer, which few district hospitals have.</p>
    <h4>How to use them</h4>
    <ul>
      <li>Use a marker to support, not replace, cultures and clinical judgement.</li>
      <li>Interpret <strong>serial measurement</strong>s; a falling value supports response and may shorten therapy.</li>
      <li>Prefer the marker with a validated local cut-off and a rapid turnaround.</li>
      <li>Accept that <strong>heterogeneity</strong> between assays prevents pooled thresholds.</li>
    </ul>
    <p>None has displaced procalcitonin in routine practice, but presepsin and CD64 are the most promising near-patient additions.</p>
  `,
  tip: "Contrast mechanism and kinetics: presepsin is a CD14 fragment, sTREM-1 is shed by myeloid cells, CD64 is neutrophil surface upregulation.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "c3g4", domain: "c3", star: true,
  q: "Acute kidney injury biomarkers: explain why creatinine lags, compare NGAL, KIM-1 and TIMP-2/IGFBP7, and discuss how they might change management.",
  tags: ["NGAL", "KIM-1", "TIMP-2/IGFBP7", "KDIGO"],
  keypoints: ["KDIGO", "serum creatinine", "tubular injury", "NGAL", "KIM-1", "TIMP-2/IGFBP7", "cell-cycle arrest", "NephroCheck", "L-FABP", "cystatin C", "stress", "damage", "cardiac surgery", "urine sediment", "cut-off", "biomarker panel"],
  answer: `
    <h4>Why creatinine lags</h4>
    <p><strong>KDIGO</strong> stages acute kidney injury by a rise in <strong>serum creatinine</strong> or a fall in urine output. Creatinine changes only after a substantial loss of filtration, is diluted by fluid, and depends on muscle mass, so the diagnosis is often delayed by a day or more. A marker of <strong>tubular injury</strong> could identify damage before function falls.</p>
    <h4>The main candidates</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Source and meaning</th></tr>
      <tr><td><strong>NGAL</strong></td><td>Neutrophil gelatinase-associated lipocalin; rises in urine and plasma within hours of tubular injury</td></tr>
      <tr><td><strong>KIM-1</strong></td><td>Kidney injury molecule-1, a proximal tubule protein expressed after injury</td></tr>
      <tr><td><strong>TIMP-2/IGFBP7</strong></td><td>Mediators of G1 <strong>cell-cycle arrest</strong>; the basis of the <strong>NephroCheck</strong> test</td></tr>
      <tr><td><strong>L-FABP</strong></td><td>Liver-type fatty acid binding protein; tubular oxidative stress</td></tr>
      <tr><td><strong>Cystatin C</strong></td><td>Filtration marker less dependent on muscle mass; still a function, not injury, marker</td></tr>
    </table></div>
    <h4>Stress versus damage</h4>
    <p>TIMP-2/IGFBP7 signals tubular <strong>stress</strong> and cell-cycle arrest, with a product threshold around 0.3 (mg/L) squared. NGAL and KIM-1 signal <strong>damage</strong>. Combining a stress and a damage marker is more informative than either alone, and a <strong>biomarker panel</strong> may localise the insult. Urine NGAL must be adjusted for urine creatinine or collected as a timed sample, because dilution changes the concentration several-fold.</p>
    <h4>Clinical use and limits</h4>
    <ul>
      <li>The best evidence is in <strong>cardiac surgery</strong> and critical illness, where a negative test supports safe deferral of nephrotoxins.</li>
      <li>No biomarker-specific therapy exists, so a positive result changes monitoring, fluids and drug dosing rather than cure.</li>
      <li>Cut-offs vary with assay, urine concentration and comorbidity; <strong>urine sediment</strong> and the clinical context remain essential.</li>
      <li>Report the specimen type and timing, since plasma and urine NGAL are not interchangeable.</li>
    </ul>
    <p>A rising panel after contrast or cardiopulmonary bypass precedes the creatinine rise by 12 to 24 hours, which is the window for avoiding further insult.</p>
  `,
  tip: "Organise the answer as function (creatinine, cystatin C) versus injury (NGAL, KIM-1) versus stress (TIMP-2/IGFBP7).",
  sources: ["C7", "C1", "C2"]
},
{
  id: "c3g5", domain: "c3", star: true,
  q: "Liquid biopsy and circulating tumour DNA: what is detectable in plasma, what clinical questions it answers, and why preanalytical handling decides the result.",
  tags: ["liquid biopsy", "ctDNA", "cfDNA", "MRD"],
  keypoints: ["circulating tumour DNA", "cell-free DNA", "circulating tumour cells", "minimal residual disease", "EGFR T790M", "PIK3CA", "methylation", "tumour fraction", "plasma volume", "EDTA", "leukocyte lysis", "tissue concordance", "shedding", "false negative", "genotyping", "liquid biopsy"],
  answer: `
    <h4>What is in the blood</h4>
    <p><strong>Liquid biopsy</strong> examines <strong>circulating tumour cells</strong>, <strong>cell-free DNA</strong> released by apoptosis and necrosis, and the fraction of it that is tumour-derived, the <strong>circulating tumour DNA</strong>. Exosomes and methylation signatures are newer additions. A plasma sample therefore carries a sample of the tumour's genome without a biopsy. <strong>Circulating tumour cells</strong> are rare and fragile, so their enumeration is technically demanding and mainly used in research.</p>
    <h4>Clinical questions it can answer</h4>
    <div class="table-wrap"><table>
      <tr><th>Question</th><th>Example</th></tr>
      <tr><td>Targeted <strong>genotyping</strong> when tissue is scarce</td><td><strong>EGFR T790M</strong> after resistance to a first-line inhibitor</td></tr>
      <tr><td>Tracking response and resistance</td><td>Rising <strong>tumour fraction</strong> before imaging changes</td></tr>
      <tr><td><strong>Minimal residual disease</strong></td><td>Post-resection ctDNA in colorectal cancer</td></tr>
      <tr><td>Multicancer early detection</td><td><strong>Methylation</strong> classifiers and fragmentomics</td></tr>
      <tr><td>Selecting therapy</td><td><strong>PIK3CA</strong> and other hotspot variants in breast cancer</td></tr>
    </table></div>
    <h4>Why preanalytics decide the result</h4>
    <p>Plasma <strong>volume</strong> sets the limit of detection, so a small tube can produce a <strong>false negative</strong>. <strong>EDTA</strong> tubes must be processed within a few hours; delayed separation allows <strong>leukocyte lysis</strong> and dilutes tumour signal with normal DNA. Cell-stabilising tubes extend the window but change the assay's validation. Avoid haemolysis, record the tube type and centrifugation, and use a matched normal sample to filter clonal haematopoiesis.</p>
    <h4>Limits</h4>
    <ul>
      <li>Low-<strong>shedding</strong> tumours may release too little DNA at early stages.</li>
      <li><strong>Tissue concordance</strong> is good for hotspot variants but imperfect for copy number and fusions.</li>
      <li>Histology remains the standard for diagnosis; liquid biopsy complements, and rarely replaces, tissue.</li>
      <li>Cost and access limit routine use in most Philippine laboratories.</li>
    </ul>
    <p>A negative result does not exclude cancer: low shedding, small tumour volume and a short plasma volume all reduce sensitivity.</p>
  `,
  tip: "Name the analyte, the clinical question and the preanalytical failure mode — that triad is the whole answer.",
  sources: ["C1", "C3", "C10"]
},
{
  id: "c3g6", domain: "c3", star: true,
  q: "Circulating microRNAs as biomarkers: explain their biology and stability, give organ-specific examples, and discuss why standardisation has stalled their clinical use.",
  tags: ["microRNA", "exosome", "normalisation", "biomarkers"],
  keypoints: ["microRNA", "non-coding RNA", "exosome", "Argonaute", "miR-21", "miR-122", "miR-155", "miR-208a", "miR-499", "haemolysis", "platelet contamination", "spike-in", "cel-miR-39", "normalisation", "reverse transcription qPCR", "reference material"],
  answer: `
    <h4>Biology and stability</h4>
    <p><strong>MicroRNA</strong>s are short <strong>non-coding RNA</strong> molecules of about 18 to 25 nucleotides that repress translation. In plasma they travel inside <strong>exosome</strong>s or bound to <strong>Argonaute</strong> proteins, which protects them from ribonucleases. That stability is why a blood sample can yield reproducible signals hours after collection, and why circulating microRNAs became attractive as minimally invasive biomarkers. Many microRNAs are tissue-enriched rather than tissue-specific, so a raised level indicates a process, not an organ.</p>
    <h4>Organ-specific examples</h4>
    <div class="table-wrap"><table>
      <tr><th>MicroRNA</th><th>Associated process</th></tr>
      <tr><td><strong>miR-122</strong></td><td>Hepatocyte injury and viral hepatitis</td></tr>
      <tr><td><strong>miR-21</strong></td><td>Fibrosis and many solid tumours</td></tr>
      <tr><td><strong>miR-155</strong></td><td>Inflammation and immune activation</td></tr>
      <tr><td><strong>miR-208a</strong>, <strong>miR-499</strong></td><td>Myocardial injury and cardiomyocyte stress</td></tr>
      <tr><td>miR-126</td><td>Endothelial function and vascular injury</td></tr>
    </table></div>
    <h4>Preanalytical traps</h4>
    <ul>
      <li><strong>Haemolysis</strong> releases erythrocyte microRNAs and can create a false signal.</li>
      <li><strong>Platelet contamination</strong> varies with processing and changes the profile.</li>
      <li>Heparin inhibits amplification; use EDTA or citrate and state the choice.</li>
      <li>Without a <strong>spike-in</strong> such as <strong>cel-miR-39</strong>, recovery cannot be judged.</li>
    </ul>
    <h4>Why translation stalled</h4>
    <p><strong>Normalisation</strong> has no agreed reference: stable small RNAs, total RNA or spike-ins all give different answers. <strong>Reverse transcription qPCR</strong> results depend on primer design, while sequencing needs a defined pipeline. Studies use different case mixes and rarely validate in an independent cohort. No certified <strong>reference material</strong> exists, so a cut-off cannot be transferred between laboratories. Reporting should include the extraction method, the normaliser and the assay's limit of detection, so another laboratory can judge comparability. A candidate must also show incremental value over an established test such as ALT or troponin before it earns a place. Until these gaps close, circulating microRNAs remain a research tool rather than a clinical assay.</p>
  `,
  tip: "Give one line of biology, one table of organ examples, then spend the weight of the answer on preanalytics and normalisation.",
  sources: ["C1", "C3", "C10"]
},
{
  id: "c3g7", domain: "c3",
  q: "Proteomics and metabolomics in the clinical laboratory: describe the platforms, the discovery-to-validation pipeline, and the obstacles to routine use.",
  tags: ["proteomics", "metabolomics", "mass spectrometry", "validation"],
  keypoints: ["proteomics", "metabolomics", "mass spectrometry", "LC-MS/MS", "MALDI-TOF", "affinity proteomics", "nuclear magnetic resonance", "discovery", "verification", "validation", "multiple testing", "batch effect", "newborn screening", "tandem mass spectrometry", "biobank", "overfitting"],
  answer: `
    <h4>Two complementary omics</h4>
    <p><strong>Proteomics</strong> measures proteins and peptides; <strong>metabolomics</strong> measures small molecules such as amino acids, acylcarnitines, lipids and organic acids. Both rely on <strong>mass spectrometry</strong>: <strong>LC-MS/MS</strong> for quantification, <strong>MALDI-TOF</strong> for profiling and microbial identification, and <strong>affinity proteomics</strong> panels for large, targeted protein sets. <strong>Nuclear magnetic resonance</strong> gives reproducible metabolomic profiles with little sample preparation.</p>
    <h4>From discovery to a clinical test</h4>
    <ul>
      <li><strong>Discovery</strong>: an untargeted comparison of cases and controls, often on a few hundred samples.</li>
      <li><strong>Verification</strong>: targeted measurement in a larger, better-characterised cohort.</li>
      <li><strong>Validation</strong>: a prospective study with pre-specified cut-offs and independent analysts.</li>
      <li>Only then does a candidate become an assay with a reference interval and a clinical claim.</li>
    </ul>
    <h4>Where the pipeline fails</h4>
    <p>Thousands of features are tested at once, so <strong>multiple testing</strong> and <strong>overfitting</strong> generate false leads. Preanalytical variation, freeze-thaw cycles and <strong>batch effect</strong> can outweigh biology. Specimen quality dominates: a haemolysed or repeatedly thawed sample produces a reproducible but meaningless pattern. Quantification also needs a stable isotope-labelled internal standard, otherwise ion suppression masquerades as biology. A model that performs well in a single centre often collapses elsewhere, especially when case mix and specimen handling differ.</p>
    <h4>What is already clinical</h4>
    <p><strong>Tandem mass spectrometry</strong> drives <strong>newborn screening</strong> for aminoacidopathies and fatty acid oxidation defects. LC-MS/MS is the reference method for many therapeutic drugs and steroids, and MALDI-TOF has transformed microbiology. A <strong>biobank</strong> with standard operating procedures is the practical prerequisite for anything further. In the Philippines, instrument cost, specialist staff and maintenance contracts, rather than ideas, are the limiting factors.</p>
    <p>A clinical assay also needs a reference interval, a decision limit and a turnaround time compatible with care.</p>
  `,
  tip: "Use the discovery–verification–validation ladder, then give newborn screening and LC-MS/MS as the two proven clinical wins.",
  sources: ["C1", "C2", "C10"]
},
{
  id: "c3g8", domain: "c3", star: true,
  q: "Alzheimer blood biomarkers: explain p-tau, the Aβ42/40 ratio, GFAP and NfL, place them in the AT(N) framework, and state their current limits.",
  tags: ["p-tau217", "Aβ42/40", "GFAP", "Alzheimer"],
  keypoints: ["p-tau181", "p-tau217", "amyloid beta 42/40", "GFAP", "neurofilament light", "AT(N) framework", "CSF", "PET", "immunoassay", "cut-off", "platform", "chronic kidney disease", "primary care", "confirmation", "preclinical", "blood biomarker"],
  answer: `
    <h4>Why blood, and why now</h4>
    <p>Alzheimer disease is defined biologically by amyloid and tau pathology. <strong>CSF</strong> testing and <strong>PET</strong> are accurate but invasive or expensive, so a blood test that reflects the same process would widen access. Ultrasensitive <strong>immunoassay</strong> platforms can now measure tau phosphorylated at threonine 181 or 217, the amyloid peptide ratio and glial markers in plasma. Plasma and CSF values correlate, but the blood signal is diluted by peripheral production, so the same pathology gives a smaller fold-change.</p>
    <h4>The markers</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>What it reflects</th></tr>
      <tr><td><strong>p-tau217</strong></td><td>Tau pathology; the best discriminator of Alzheimer disease in many studies</td></tr>
      <tr><td><strong>p-tau181</strong></td><td>Tau pathology; widely measured and well validated</td></tr>
      <tr><td><strong>Amyloid beta 42/40</strong></td><td>Amyloid deposition; a low ratio suggests brain amyloidosis</td></tr>
      <tr><td><strong>GFAP</strong></td><td>Astrocytic activation; rises early and also in other brain injury</td></tr>
      <tr><td><strong>Neurofilament light</strong></td><td>Axonal damage; sensitive but not disease-specific</td></tr>
    </table></div>
    <h4>The AT(N) framework</h4>
    <p><strong>AT(N) framework</strong> groups markers as amyloid (A), tau (T) and neurodegeneration (N). A plasma profile can approximate A and T, while <strong>neurofilament light</strong> serves as N. A positive blood result supports the <strong>preclinical</strong> or prodromal stage but does not by itself confirm disease; <strong>confirmation</strong> with CSF or PET is still required in many protocols.</p>
    <h4>Limits</h4>
    <ul>
      <li><strong>Cut-off</strong>s are <strong>platform</strong>-specific and not transferable between assays.</li>
      <li>Age, <strong>chronic kidney disease</strong> and body mass index shift the values.</li>
      <li>Analytical variability matters more at low concentrations, so lot-to-lot control is essential.</li>
      <li>The tests are not validated for population screening and are best used in symptomatic patients or trials.</li>
      <li>In <strong>primary care</strong>, a negative result may be most useful for excluding Alzheimer pathology.</li>
    </ul>
    <p>A two-step pathway, a sensitive blood screen followed by confirmatory testing, is the most plausible model outside specialist centres.</p>
  `,
  tip: "Map each marker to A, T or N before discussing cut-offs — the framework prevents a list of unrelated analytes.",
  sources: ["C1", "C3", "C10"]
},
{
  id: "c3g9", domain: "c3",
  q: "Bone turnover markers: distinguish formation from resorption markers, explain preanalytical control, and show how they are used to monitor osteoporosis treatment.",
  tags: ["P1NP", "CTX", "bone turnover", "osteoporosis"],
  keypoints: ["P1NP", "bone alkaline phosphatase", "osteocalcin", "CTX", "NTX", "TRAP-5b", "formation", "resorption", "fasting", "circadian", "premenopausal reference interval", "adherence", "bisphosphonate", "atypical femoral fracture", "CKD-MBD", "least significant change"],
  answer: `
    <h4>Formation and resorption</h4>
    <p>Bone is remodelled continuously, and turnover markers measure the activity of osteoblasts and osteoclasts rather than bone density. They change within weeks, long before a repeat DXA, which makes them useful for monitoring. They do not diagnose osteoporosis; densitometry and fracture risk do that. Turnover markers reflect the whole skeleton, so a focal lesion can be missed, and smoking, alcohol, hyperthyroidism and glucocorticoids raise turnover independently of osteoporosis.</p>
    <div class="table-wrap"><table>
      <tr><th>Process</th><th>Marker</th><th>Comment</th></tr>
      <tr><td><strong>Formation</strong></td><td><strong>P1NP</strong></td><td>Procollagen type 1 N-terminal propeptide; the preferred formation marker</td></tr>
      <tr><td><strong>Formation</strong></td><td><strong>Bone alkaline phosphatase</strong></td><td>Less affected by liver disease than total ALP</td></tr>
      <tr><td><strong>Formation</strong></td><td><strong>Osteocalcin</strong></td><td>Small, unstable, affected by vitamin K</td></tr>
      <tr><td><strong>Resorption</strong></td><td><strong>CTX</strong></td><td>C-terminal telopeptide of collagen type 1; the usual choice</td></tr>
      <tr><td><strong>Resorption</strong></td><td><strong>NTX</strong></td><td>Urine or serum; marked circadian variation</td></tr>
      <tr><td><strong>Resorption</strong></td><td><strong>TRAP-5b</strong></td><td>Osteoclast-specific; useful in <strong>CKD-MBD</strong></td></tr>
    </table></div>
    <h4>Preanalytical control</h4>
    <ul>
      <li>Collect <strong>fasting</strong>, in the morning, because of <strong>circadian</strong> variation, especially for CTX and NTX.</li>
      <li>Record menopausal status and use a <strong>premenopausal reference interval</strong> where appropriate.</li>
      <li>Recent fracture, exercise and immobilisation raise turnover for weeks.</li>
      <li>Biotin and haemolysis interfere with some immunoassays; renal impairment retains fragments.</li>
    </ul>
    <h4>Monitoring treatment</h4>
    <p>A <strong>bisphosphonate</strong> or denosumab lowers CTX and P1NP within three to six months. A fall beyond the <strong>least significant change</strong> supports response and <strong>adherence</strong>; an unchanged value suggests missed doses or a poor absorber. Profound, sustained suppression of turnover is associated with <strong>atypical femoral fracture</strong> and osteonecrosis of the jaw, so very low values merit review. Interpret the result with calcium, vitamin D, renal function and the treatment history. For monitoring, the same assay and the same collection time matter more than the absolute value.</p>
  `,
  tip: "Build a two-column table (formation versus resorption), then use monitoring and adherence as the clinical payoff.",
  sources: ["C14", "C1", "C17"]
},
{
  id: "c3g10", domain: "c3", star: true,
  q: "Validation and clinical utility of novel analytes: distinguish analytical validity, clinical validity and clinical utility, and describe the evidence a laboratory should demand before adoption.",
  tags: ["analytical validation", "clinical utility", "CLSI", "STARD"],
  keypoints: ["analytical validity", "clinical validity", "clinical utility", "CLSI EP05", "CLSI EP06", "CLSI EP09", "CLSI EP15", "CLSI EP17", "limit of detection", "interference", "STARD", "TRIPOD", "net reclassification", "decision curve", "health economics", "ISO 15189"],
  answer: `
    <h4>Three separate questions</h4>
    <p>A new analyte must answer three questions in order. <strong>Analytical validity</strong>: does the assay measure what it claims, reliably? <strong>Clinical validity</strong>: is the result associated with the disease or outcome? <strong>Clinical utility</strong>: does using it improve decisions or outcomes compared with current practice? A marker can pass the first two and still fail the third. Analytical validation is the easiest step and the one most often published; utility is the hardest and the one most often missing.</p>
    <h4>Analytical evidence</h4>
    <ul>
      <li><strong>CLSI EP05</strong> for precision, including repeatability and within-laboratory imprecision.</li>
      <li><strong>CLSI EP06</strong> for linearity and <strong>CLSI EP17</strong> for the <strong>limit of detection</strong> and quantification.</li>
      <li><strong>CLSI EP09</strong> for method comparison and <strong>CLSI EP15</strong> for verification in the adopting laboratory.</li>
      <li><strong>Interference</strong> studies for haemolysis, lipaemia, icterus, biotin and heterophile antibodies.</li>
      <li>Reference intervals established or verified for the local population.</li>
    </ul>
    <h4>Clinical evidence</h4>
    <p>Diagnostic studies should follow <strong>STARD</strong> and prediction models <strong>TRIPOD</strong>, with pre-specified <strong>cut-off</strong>s and an independent validation cohort. Discrimination alone (AUC) is insufficient; show <strong>net reclassification</strong> or a <strong>decision curve</strong> against the existing pathway. The strongest evidence comes from a prospective impact study or a randomised trial in which clinicians receive the result. A surrogate endpoint such as a changed prescription is weaker than a demonstrated reduction in events.</p>
    <h4>Adoption and governance</h4>
    <p><strong>Health economics</strong> must show affordability as well as benefit, especially where patients pay out of pocket. The assay then enters the quality system under <strong>ISO 15189</strong>, with internal QC, external assessment, competency and post-market surveillance. In the Philippines, registration and licensing requirements add a further step. Demand all three levels of evidence before a novel analyte replaces a validated test.</p>
  `,
  tip: "Answer in the fixed order analytical → clinical → utility; most candidates stop at association and lose the marks for utility.",
  sources: ["C5", "C11", "C1", "C13"]
}
);
