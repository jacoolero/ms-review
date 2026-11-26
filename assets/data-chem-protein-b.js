/* Clinical Chemistry — proteins, enzymes & markers: set B (plasma proteins, enzymes, tumour markers, CSF/urine proteins, interference) */
window.QBANK.push(
{
  id: "cc151", domain: "chem-protein", star: true,
  q: "Describe the major plasma protein fractions, the proteins that make up each, and how the fraction pattern is interpreted in disease.",
  tags: ["plasma proteins", "electrophoresis", "acute phase", "nephrotic"],
  keypoints: ["prealbumin", "transthyretin", "albumin", "α₁-antitrypsin", "α₂-macroglobulin", "haptoglobin", "transferrin", "complement C3", "immunoglobulins", "negative acute phase", "capillary zone electrophoresis", "nephrotic syndrome", "cirrhosis", "paraprotein", "oncotic pressure"],
  answer: `
    <h4>Composition of the fractions</h4>
    <p>Plasma contains roughly 70 g/L of protein, and each electrophoretic band is a group of proteins with similar charge and size rather than a single molecule. At pH 8.6 proteins are net negative and migrate toward the anode; the support medium and electroendosmotic flow shape the final pattern.</p>
    <div class="table-wrap"><table>
      <tr><th>Fraction</th><th>Principal proteins</th><th>Diagnostic clue</th></tr>
      <tr><td>Prealbumin</td><td>Transthyretin, retinol-binding protein</td><td>Short half-life; falls early in inflammation and malnutrition</td></tr>
      <tr><td>Albumin</td><td>Albumin</td><td>Main determinant of <strong>oncotic pressure</strong>; <strong>negative acute phase</strong> protein</td></tr>
      <tr><td>α₁</td><td><strong>α₁-antitrypsin</strong>, α₁-acid glycoprotein</td><td>Rises in acute inflammation; absent band in α₁-antitrypsin deficiency</td></tr>
      <tr><td>α₂</td><td><strong>α₂-macroglobulin</strong>, <strong>haptoglobin</strong>, ceruloplasmin</td><td>Rises in nephrotic syndrome; haptoglobin falls in haemolysis</td></tr>
      <tr><td>β</td><td><strong>Transferrin</strong>, <strong>complement C3</strong>, β-lipoprotein</td><td>Transferrin low in inflammation; C3 consumed in immune complex disease</td></tr>
      <tr><td>γ</td><td><strong>Immunoglobulins</strong> G, A, M</td><td>Broad rise in chronic infection; narrow spike suggests a <strong>paraprotein</strong></td></tr>
    </table></div>
    <h4>Reading the pattern</h4>
    <ul>
      <li><strong>Acute inflammation</strong>: α₁ and α₂ rise while albumin falls, because albumin is a negative acute phase protein.</li>
      <li><strong>Nephrotic syndrome</strong>: albumin is lost in urine, α₂-macroglobulin is retained, so α₂ may exceed albumin.</li>
      <li><strong>Cirrhosis</strong>: reduced albumin synthesis with polyclonal γ rise and β–γ bridging from IgA.</li>
      <li><strong>Protein-losing enteropathy</strong>: panhypoproteinaemia without selective α₂ retention.</li>
    </ul>
    <h4>Why the fractions still matter</h4>
    <p><strong>Capillary zone electrophoresis</strong> gives better resolution and reproducible quantitation than agarose densitometry, but the physiological interpretation is unchanged. The fractions are a first-line screen: an unexplained low albumin, a raised globulin gap or a focal band should prompt immunofixation and free light chain measurement. The pattern is never diagnostic alone; it must be read with the clinical picture, liver synthetic function and urinalysis.</p>
  `,
  tip: "Build the answer around 'which protein sits in which band and what makes it move' rather than memorising patterns.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc152", domain: "chem-protein",
  q: "Discuss albumin: its synthesis, physiological functions, the mechanisms of hypoalbuminaemia and the correct interpretation of a low serum albumin.",
  tags: ["albumin", "hypoalbuminaemia", "oncotic pressure", "nephrotic"],
  keypoints: ["albumin synthesis", "half-life", "oncotic pressure", "binding", "hypoalbuminaemia", "nephrotic syndrome", "protein-losing enteropathy", "cirrhosis", "negative acute phase", "dilution", "corrected calcium", "drug binding", "ascites", "malnutrition", "analbuminaemia"],
  answer: `
    <h4>Synthesis and structure</h4>
    <p>Albumin is a single 585-amino-acid polypeptide of about 66 kDa, synthesised exclusively by hepatocytes at roughly 10–15 g per day. Its <strong>half-life</strong> is about 20 days, so a fall in <strong>albumin synthesis</strong> takes weeks to become visible, whereas a rapid fall usually means redistribution, loss or <strong>dilution</strong>.</p>
    <h4>Functions</h4>
    <ul>
      <li>Generates most of the plasma <strong>oncotic pressure</strong>, retaining fluid within the vascular space.</li>
      <li>Carries fatty acids, bilirubin, bile acids, hormones, trace metals and many drugs — clinically important <strong>drug binding</strong> changes the free fraction of highly bound drugs.</li>
      <li>Buffers plasma pH and scavenges free radicals.</li>
      <li>Binds calcium, which is why total calcium must be interpreted with albumin.</li>
    </ul>
    <h4>Mechanisms of hypoalbuminaemia</h4>
    <div class="table-wrap"><table>
      <tr><th>Mechanism</th><th>Examples</th></tr>
      <tr><td>Decreased synthesis</td><td><strong>Cirrhosis</strong>, advanced chronic liver disease, malnutrition, <strong>analbuminaemia</strong> (rare congenital)</td></tr>
      <tr><td>Increased loss</td><td><strong>Nephrotic syndrome</strong>, <strong>protein-losing enteropathy</strong>, burns, exudative wounds</td></tr>
      <tr><td>Redistribution</td><td>Sepsis and systemic inflammation — capillary leak into the interstitium</td></tr>
      <tr><td>Dilution</td><td>Fluid overload, pregnancy, large-volume crystalloid</td></tr>
    </table></div>
    <h4>Interpretation</h4>
    <p>A low albumin is a marker of illness severity, not of nutritional status: it is a <strong>negative acute phase</strong> protein, so inflammation suppresses synthesis within days. In <strong>cirrhosis</strong>, <strong>ascites</strong> reflects portal hypertension and sodium retention more than oncotic pressure alone. When albumin is low, measured total calcium is falsely low, so ionised calcium or a <strong>corrected calcium</strong> should be used. Finally, <strong>malnutrition</strong> alone rarely produces marked hypoalbuminaemia without inflammation or loss, and a normal albumin does not exclude protein-energy malnutrition. Serial measurements are more useful than a single value, and the trend after treatment helps distinguish ongoing loss from recovery.</p>
  `,
  tip: "Say 'negative acute phase protein' early — it explains most confusing low albumin results in hospital patients.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc153", domain: "chem-protein",
  q: "Explain the globulins and the albumin:globulin ratio. Compare polyclonal and monoclonal hypergammaglobulinaemia and outline the laboratory findings in immunoglobulin deficiency.",
  tags: ["globulins", "A:G ratio", "polyclonal", "immunodeficiency"],
  keypoints: ["globulins", "α-globulins", "β-globulins", "γ-globulins", "polyclonal", "monoclonal", "albumin:globulin ratio", "chronic inflammation", "cirrhosis", "nephrotic syndrome", "agammaglobulinaemia", "common variable immunodeficiency", "paraprotein", "immunoglobulins"],
  answer: `
    <h4>What globulins are</h4>
    <p><strong>Globulins</strong> are the plasma proteins other than albumin. The <strong>α-globulins</strong> include protease inhibitors, transport proteins and acute phase reactants; the <strong>β-globulins</strong> include transferrin, complement and lipoproteins; the <strong>γ-globulins</strong> are almost entirely <strong>immunoglobulins</strong>. They are separated by charge, so each region contains several functionally unrelated proteins.</p>
    <h4>Polyclonal versus monoclonal</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th>Polyclonal</th><th>Monoclonal</th></tr>
      <tr><td>Electrophoresis</td><td>Broad, symmetrical γ rise</td><td>Narrow, dense band — a <strong>paraprotein</strong></td></tr>
      <tr><td>Cause</td><td><strong>Chronic inflammation</strong>, infection, autoimmune disease, <strong>cirrhosis</strong></td><td>Clonal plasma cell or B-cell disorder</td></tr>
      <tr><td>Light chains</td><td>Both κ and λ raised</td><td>One light chain only (κ or λ)</td></tr>
      <tr><td>Clinical significance</td><td>Usually reactive</td><td>Needs haematology work-up</td></tr>
    </table></div>
    <p>Polyclonal rises are driven by cytokines and are not clonal; the γ band is broad because many different immunoglobulins are present. A monoclonal band is produced by one clone and is investigated with immunofixation and serum free light chains.</p>
    <h4>The albumin:globulin ratio</h4>
    <p>The <strong>albumin:globulin ratio</strong> is calculated from total protein minus albumin. It falls when albumin is low or globulins are high. A low ratio is typical of <strong>chronic inflammation</strong>, <strong>cirrhosis</strong>, <strong>nephrotic syndrome</strong> and paraproteinaemia; it is a screening clue, not a diagnosis. The globulin gap (total protein minus albumin) is a simpler way to flag a possible M-protein.</p>
    <h4>Immunoglobulin deficiency</h4>
    <p>In <strong>agammaglobulinaemia</strong> (X-linked Bruton tyrosine kinase deficiency) immunoglobulins are virtually absent and the γ band is flat. <strong>Common variable immunodeficiency</strong> shows low IgG with variable IgA and IgM, recurrent sinopulmonary infection and poor vaccine responses. Treatment is immunoglobulin replacement; live vaccines are contraindicated. Secondary causes include nephrotic loss, protein-losing enteropathy, burns and lymphoid malignancy.</p>
  `,
  tip: "Contrast 'broad band = many clones' with 'narrow band = one clone' — it anchors the whole answer.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc154", domain: "chem-protein",
  q: "Compare agarose gel and capillary serum protein electrophoresis, and explain the principles, interpretation and pitfalls of immunofixation.",
  tags: ["SPEP", "capillary electrophoresis", "immunofixation", "pitfalls"],
  keypoints: ["agarose gel", "capillary electrophoresis", "electroendosmosis", "immunofixation", "immunoelectrophoresis", "pentavalent antiserum", "fibrinogen", "haemolysis", "daratumumab", "M-protein", "densitometry", "β–γ bridging", "hook effect", "sample dilution"],
  answer: `
    <h4>Electrophoretic separation</h4>
    <p>In <strong>agarose gel</strong> electrophoresis, proteins migrate at pH 8.6 under an applied voltage; separation depends on charge, size and <strong>electroendosmosis</strong> (bulk buffer flow toward the cathode). The gel is stained and scanned by <strong>densitometry</strong>, which quantifies the <strong>M-protein</strong> as a percentage of total protein. <strong>Capillary electrophoresis</strong> uses a narrow fused-silica capillary, on-line detection at about 214 nm and automated fraction integration; it avoids staining and gives better resolution of the β–γ region, but the principles and the reporting language are the same.</p>
    <h4>Immunofixation</h4>
    <p><strong>Immunofixation</strong> is the standard method for typing a band. The sample is run in replicate lanes, each overlaid with a specific antiserum to IgG, IgA, IgM, κ or λ (often a <strong>pentavalent antiserum</strong> in a screening lane). Immune complexes precipitate in situ and are stained. A monoclonal protein shows a restricted band in one heavy-chain lane and one light-chain lane. <strong>Immunoelectrophoresis</strong> is the older, less sensitive predecessor and is now rarely used.</p>
    <h4>Technical pitfalls</h4>
    <ul>
      <li><strong>Fibrinogen</strong> in plasma migrates in the β–γ region and mimics a small band — always use serum, or add thrombin.</li>
      <li><strong>Haemolysis</strong> releases free haemoglobin, which stains and distorts the β region.</li>
      <li>Monoclonal therapeutic antibodies such as <strong>daratumumab</strong> (IgG κ) produce a persistent band that can be mistaken for residual disease.</li>
      <li>Radiographic contrast, high-dose immunoglobulins and transferrin or complement variants alter the pattern.</li>
      <li>Antigen excess can produce a <strong>hook effect</strong>; a band that is weaker than expected should be re-run at <strong>sample dilution</strong>.</li>
    </ul>
    <p>Report the band's position, isotype, quantity and the presence of <strong>β–γ bridging</strong>, and interpret it with the clinical history. Electrophoresis suggests clonality; immunofixation defines it.</p>
  `,
  tip: "Distinguish 'SPEP quantifies' from 'IFE types' — examiners look for that division of labour.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc155", domain: "chem-protein", star: true,
  q: "Discuss paraproteinaemia: the spectrum from MGUS to active myeloma, the role of serum free light chains, and the laboratory monitoring of clonal plasma cell disorders.",
  tags: ["MGUS", "myeloma", "free light chains", "AL amyloid"],
  keypoints: ["M-protein", "MGUS", "smouldering myeloma", "active myeloma", "free light chain ratio", "involved", "uninvolved", "Bence Jones protein", "AL amyloidosis", "light chain deposition disease", "non-secretory", "CRAB", "clonal plasma cells", "renal failure"],
  answer: `
    <h4>The clonal spectrum</h4>
    <p>A paraprotein is an immunoglobulin or fragment produced by a single clone. The same laboratory findings span disorders of very different behaviour, so the diagnosis depends on tumour burden and organ damage, not on the band alone.</p>
    <div class="table-wrap"><table>
      <tr><th>Entity</th><th>Key features</th></tr>
      <tr><td><strong>MGUS</strong></td><td>Small M-protein, few <strong>clonal plasma cells</strong>, no organ damage; annual progression risk</td></tr>
      <tr><td><strong>Smouldering myeloma</strong></td><td>Higher M-protein or marrow burden but no <strong>CRAB</strong> features or biomarkers of malignancy</td></tr>
      <tr><td><strong>Active myeloma</strong></td><td>CRAB features or SLiM criteria, with clonal plasma cells</td></tr>
      <tr><td><strong>AL amyloidosis</strong></td><td>Amyloidogenic light chains deposit in heart, kidney, nerve and gut</td></tr>
      <tr><td><strong>Light chain deposition disease</strong></td><td>Non-amyloid granular light chain deposits, usually renal</td></tr>
    </table></div>
    <h4>Free light chains</h4>
    <p>Serum <strong>free light chain ratio</strong> compares the <strong>involved</strong> light chain with the <strong>uninvolved</strong> one. It detects light-chain-only disease, helps assign risk in MGUS and is essential when electrophoresis is negative. In <strong>renal failure</strong> both light chains are retained, so the ratio is more useful than the absolute values; assay-specific reference intervals and the involved/uninvolved difference should be used. <strong>Bence Jones protein</strong> is the historical urine term for monoclonal free light chains.</p>
    <h4>Monitoring</h4>
    <ul>
      <li>Quantify the M-protein by densitometry or capillary integration and use the same method serially.</li>
      <li>Measure free light chains when disease is non-secretory or light-chain only; a proportion of cases are <strong>non-secretory</strong> on electrophoresis.</li>
      <li>Assess end-organ markers: calcium, creatinine, haemoglobin and skeletal imaging.</li>
      <li>Recognise that intravenous immunoglobulin, daratumumab and autoimmune disease can create a false band.</li>
    </ul>
    <p>Serial trends, not a single value, define response and relapse; a rising M-protein or free light chain ratio precedes clinical progression.</p>
  `,
  tip: "Organise the answer as a spectrum — harmless MGUS at one end, organ-damaging myeloma and amyloid at the other.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc156", domain: "chem-protein",
  q: "Compare the erythrocyte sedimentation rate and C-reactive protein: principles, kinetics, clinical uses and the significance of discordant results.",
  tags: ["ESR", "CRP", "acute phase", "discordance"],
  keypoints: ["erythrocyte sedimentation rate", "Westergren", "rouleaux", "fibrinogen", "C-reactive protein", "pentraxin", "interleukin-6", "half-life", "polymyalgia rheumatica", "systemic lupus erythematosus", "anaemia", "polycythaemia", "discordance"],
  answer: `
    <h4>Principles</h4>
    <p>The <strong>erythrocyte sedimentation rate</strong> measures the fall of red cells in a vertical tube, conventionally by the <strong>Westergren</strong> method. It is an indirect index of plasma proteins: <strong>fibrinogen</strong> and immunoglobulins reduce the surface charge of red cells and promote <strong>rouleaux</strong>, which sediment faster. The <strong>C-reactive protein</strong> is a <strong>pentraxin</strong> made by the liver under <strong>interleukin-6</strong> control; it binds phosphocholine and activates complement. CRP is measured immunoturbidimetrically and is not affected by red cell shape.</p>
    <h4>Kinetics compared</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th>ESR</th><th>CRP</th></tr>
      <tr><td>Rise</td><td>Slow — 24–48 h</td><td>Rapid — within 6 h</td></tr>
      <tr><td>Fall</td><td>Slow — days to weeks</td><td>Fast — <strong>half-life</strong> about 19 h</td></tr>
      <tr><td>Affected by</td><td><strong>Anaemia</strong> raises; <strong>polycythaemia</strong>, sickle cells and hypofibrinogenaemia lower</td><td>Mainly the inflammatory stimulus; less affected by haematocrit</td></tr>
      <tr><td>Best use</td><td>Chronic, smouldering disease</td><td>Acute infection and response to treatment</td></tr>
    </table></div>
    <h4>Clinical uses</h4>
    <ul>
      <li><strong>Polymyalgia rheumatica</strong> and giant cell arteritis: both are typically very high, and ESR is part of the diagnostic gestalt.</li>
      <li>Bone and joint infection, where a normal CRP is reassuring and a rising CRP suggests failure.</li>
      <li><strong>Systemic lupus erythematosus</strong>: a high ESR with a normal CRP points to disease activity, whereas a high CRP suggests infection or serositis.</li>
      <li>Monitoring response to antibiotics or anti-inflammatory therapy.</li>
    </ul>
    <h4>Discordance</h4>
    <p><strong>Discordance</strong> is informative. High ESR with low CRP occurs in SLE, paraproteinaemia, severe anaemia and the elderly; a high CRP with a modest ESR suggests an acute bacterial process or a very early infection before rouleaux develop. Neither test is specific, so a normal result does not exclude serious disease and an abnormal result should be explained rather than repeated blindly.</p>
  `,
  tip: "Use the discordance examples — SLE and paraproteinaemia — to show you understand what each test actually measures.",
  sources: ["C1", "C3"]
},
{
  id: "cc157", domain: "chem-protein",
  q: "Discuss procalcitonin: its biology, kinetics, clinical applications in sepsis and antibiotic stewardship, and the causes of misleading results.",
  tags: ["procalcitonin", "sepsis", "stewardship", "interference"],
  keypoints: ["procalcitonin", "calcitonin precursor", "endotoxin", "interferon-γ", "antibiotic stewardship", "medullary thyroid carcinoma", "small cell lung cancer", "renal failure", "surgery", "sepsis", "lower respiratory tract infection", "kinetics"],
  answer: `
    <h4>Biology</h4>
    <p><strong>Procalcitonin</strong> is the 116-amino-acid <strong>calcitonin precursor</strong> encoded by CALC-1. In health it is cleaved in the thyroid C cells and is virtually undetectable in plasma. During systemic bacterial infection, <strong>endotoxin</strong> and cytokines (IL-1β, TNF-α, IL-6) induce CALC-1 expression in many tissues, including liver, lung and intestine, producing a large plasma rise. Interferon-γ, typical of viral infection, suppresses this induction, which partly explains the relative specificity for bacterial disease.</p>
    <h4>Kinetics</h4>
    <p>Procalcitonin rises within 3–6 h, plateaus by about 12–24 h and has a half-life of roughly one day. The <strong>kinetics</strong> make it useful for tracking the response to antibiotics: a falling value supports resolution, whereas a persistent or rising value suggests inadequate source control or a non-bacterial process.</p>
    <h4>Clinical applications</h4>
    <ul>
      <li>Supporting the diagnosis of <strong>sepsis</strong> and severe bacterial infection, always alongside cultures and clinical assessment.</li>
      <li><strong>Lower respiratory tract infection</strong>: low values can support withholding antibiotics, and serial values can guide duration.</li>
      <li><strong>Antibiotic stewardship</strong> programmes use procalcitonin to shorten courses, especially in intensive care.</li>
      <li>Differentiating bacterial from viral meningitis and monitoring infected burns or post-operative infection.</li>
    </ul>
    <h4>Causes of misleading results</h4>
    <div class="table-wrap"><table>
      <tr><th>Falsely raised</th><th>Falsely low or unhelpful</th></tr>
      <tr><td>Major <strong>surgery</strong>, trauma, burns, cardiogenic shock, pancreatitis</td><td>Early infection before the rise</td></tr>
      <tr><td><strong>Medullary thyroid carcinoma</strong>, <strong>small cell lung cancer</strong></td><td>Localised infection without systemic spread</td></tr>
      <tr><td>Severe <strong>renal failure</strong> (reduced clearance)</td><td>Viral infection, treated bacterial infection</td></tr>
      <tr><td>Malaria, severe inflammation, neonates</td><td>Immunosuppression with blunted response</td></tr>
    </table></div>
    <p>Procalcitonin is an adjunct, not a rule-out test. A low value in a septic-appearing patient must not delay antibiotics, and a high value in a post-operative patient may simply reflect tissue trauma.</p>
  `,
  tip: "Explain the interferon-γ mechanism — it is the reason procalcitonin outperforms CRP in viral/bacterial discrimination.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc158", domain: "chem-protein", star: true,
  q: "A patient has a raised high-sensitivity troponin but no clear acute coronary syndrome. Discuss myocardial injury versus infarction and the causes of troponin elevation without myocardial infarction.",
  tags: ["troponin", "myocardial injury", "type 2 MI", "CKD"],
  keypoints: ["myocardial injury", "type 1 myocardial infarction", "type 2 myocardial infarction", "demand ischaemia", "chronic kidney disease", "sepsis", "pulmonary embolism", "myocarditis", "Takotsubo", "serial sampling", "99th percentile", "troponin T", "troponin I", "macro-troponin"],
  answer: `
    <h4>Injury versus infarction</h4>
    <p>A raised cardiac troponin indicates <strong>myocardial injury</strong>, not necessarily infarction. <strong>Type 1 myocardial infarction</strong> requires acute atherothrombotic coronary occlusion with a rise and/or fall above the <strong>99th percentile</strong> plus clinical evidence of ischaemia. <strong>Type 2 myocardial infarction</strong> is injury with a supply–demand imbalance — <strong>demand ischaemia</strong> from severe anaemia, hypotension, tachyarrhythmia or respiratory failure — without acute plaque thrombosis. When neither ischaemic symptoms nor ECG or imaging evidence is present, the correct term is myocardial injury.</p>
    <h4>Causes of troponin elevation without infarction</h4>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>Examples</th></tr>
      <tr><td>Myocardial strain or stress</td><td>Heart failure, <strong>pulmonary embolism</strong>, pulmonary hypertension, rapid atrial fibrillation</td></tr>
      <tr><td>Myocarditis and cardiomyopathy</td><td><strong>Myocarditis</strong>, <strong>Takotsubo</strong> cardiomyopathy, infiltrative disease</td></tr>
      <tr><td>Systemic illness</td><td><strong>Sepsis</strong>, critical illness, hypothyroidism, severe anaemia</td></tr>
      <tr><td>Renal</td><td><strong>Chronic kidney disease</strong> — chronic low-grade elevation, especially <strong>troponin T</strong></td></tr>
      <tr><td>Procedural or traumatic</td><td>Cardiac surgery, PCI, defibrillation, chest trauma, endurance exercise</td></tr>
    </table></div>
    <h4>Special settings</h4>
    <p>In <strong>chronic kidney disease</strong>, troponin T is more often chronically raised than <strong>troponin I</strong>; a changing value is more useful than a single result. In sepsis, troponin release reflects inflammation, microvascular dysfunction and demand ischaemia. After cardiac surgery or ablation, troponin is expected to rise and cannot be interpreted by the same algorithm.</p>
    <h4>Approach</h4>
    <ul>
      <li>Repeat <strong>serial sampling</strong> and calculate the assay-specific delta; a flat, chronically raised value suggests chronic injury.</li>
      <li>Look for a dynamic ECG, regional wall motion abnormality or angiographic lesion.</li>
      <li>Consider <strong>macro-troponin</strong> and heterophile antibody interference when results are implausibly persistent.</li>
      <li>Treat the underlying cause; do not label every raised troponin as coronary disease.</li>
    </ul>
  `,
  tip: "Define myocardial injury first, then add ischaemia to reach infarction — that sequence answers the question.",
  sources: ["C9", "C1", "C3"]
},
{
  id: "cc159", domain: "chem-protein",
  q: "Discuss creatine kinase and its isoenzymes in clinical diagnosis, including macro-CK, rhabdomyolysis and the analytical problems that affect CK measurement.",
  tags: ["CK", "CK-MB", "macro-CK", "rhabdomyolysis"],
  keypoints: ["CK-MM", "CK-MB", "CK-BB", "macro-CK", "rhabdomyolysis", "myoglobinuria", "PEG precipitation", "electrophoresis", "statin", "hypothyroidism", "intramuscular injection", "cardiac troponin", "adenylate kinase", "reference interval"],
  answer: `
    <h4>Isoenzymes</h4>
    <p>Creatine kinase catalyses the reversible transfer of a phosphate group between creatine and ATP. It is a dimer of M and B subunits, giving three cytosolic isoenzymes and a mitochondrial form.</p>
    <div class="table-wrap"><table>
      <tr><th>Isoenzyme</th><th>Main source</th><th>Clinical note</th></tr>
      <tr><td><strong>CK-MM</strong></td><td>Skeletal muscle</td><td>Dominant serum fraction; rises in exercise, trauma and myopathy</td></tr>
      <tr><td><strong>CK-MB</strong></td><td>Cardiac muscle (about 20% of cardiac CK)</td><td>Also present in skeletal muscle, so not cardiac-specific</td></tr>
      <tr><td><strong>CK-BB</strong></td><td>Brain, gut, prostate</td><td>Rarely measured; may rise in neurological injury</td></tr>
      <tr><td><strong>macro-CK</strong></td><td>Immunoglobulin-bound or mitochondrial</td><td>Persistent isolated elevation without disease</td></tr>
    </table></div>
    <h4>Clinical use</h4>
    <p>CK is the key marker of skeletal muscle injury. Marked elevation occurs in <strong>rhabdomyolysis</strong>, where <strong>myoglobinuria</strong> can cause acute kidney injury; CK is also raised after <strong>intramuscular injection</strong>, seizures, crush injury, extreme exercise, <strong>statin</strong>-associated myopathy and in <strong>hypothyroidism</strong>. <strong>Cardiac troponin</strong> has replaced CK-MB for myocardial infarction because it is more specific and more sensitive, but CK-MB retains a role in detecting early reinfarction when troponin remains elevated.</p>
    <h4>Macro-CK</h4>
    <p><strong>Macro-CK</strong> is an enzyme-immunoglobulin complex (type 1, usually CK-BB bound to IgG) or an oligomer of mitochondrial CK (type 2). It causes a persistent rise with no clinical explanation and can be mistaken for myocardial injury when the CK-MB fraction appears high. Detection uses <strong>PEG precipitation</strong>, <strong>electrophoresis</strong> or gel filtration; recovery of less than about 40% after PEG suggests a macroenzyme.</p>
    <h4>Analytical notes</h4>
    <ul>
      <li>Haemolysis releases <strong>adenylate kinase</strong>, which falsely raises CK unless blocked with AMP and diadenosine pentaphosphate.</li>
      <li>CK activity falls with storage unless reactivated with N-acetylcysteine.</li>
      <li><strong>Reference interval</strong> depends on sex, ethnicity and recent exercise; a mildly raised CK in a muscular person may be normal.</li>
      <li>Always interpret CK with the clinical context and, where relevant, troponin and myoglobin.</li>
    </ul>
  `,
  tip: "State that CK-MB is not cardiac-specific and troponin has replaced it — a common examiner trap.",
  sources: ["C2", "C1", "C10"]
},
{
  id: "cc160", domain: "chem-protein", star: true,
  q: "Discuss the interpretation of aminotransferase results: tissue distribution, kinetics, the R ratio, the AST:ALT ratio and the causes of markedly raised values.",
  tags: ["ALT", "AST", "R ratio", "hepatocellular"],
  keypoints: ["alanine aminotransferase", "aspartate aminotransferase", "cytosolic", "mitochondrial", "R ratio", "hepatocellular", "cholestatic", "AST:ALT ratio", "alcoholic liver disease", "paracetamol", "ischaemic hepatitis", "Wilson disease", "macro-AST", "pyridoxal-5'-phosphate"],
  answer: `
    <h4>Distribution and kinetics</h4>
    <p><strong>Alanine aminotransferase</strong> is predominantly <strong>cytosolic</strong> and concentrated in hepatocytes, making it the more liver-specific marker. <strong>Aspartate aminotransferase</strong> exists in <strong>cytosolic</strong> and <strong>mitochondrial</strong> forms and is also abundant in cardiac and skeletal muscle, red cells and kidney. ALT has the longer plasma half-life (about 47 h versus 17 h for AST), so AST falls first during recovery.</p>
    <h4>Pattern recognition</h4>
    <p>The <strong>R ratio</strong> = (ALT ÷ upper reference limit) ÷ (ALP ÷ upper reference limit) classifies injury:</p>
    <div class="table-wrap"><table>
      <tr><th>R ratio</th><th>Pattern</th><th>Typical causes</th></tr>
      <tr><td>&gt; 5</td><td><strong>Hepatocellular</strong></td><td>Viral hepatitis, drug injury, autoimmune hepatitis, ischaemia</td></tr>
      <tr><td>2–5</td><td>Mixed</td><td>Overlapping hepatocellular and cholestatic injury</td></tr>
      <tr><td>&lt; 2</td><td><strong>Cholestatic</strong></td><td>Biliary obstruction, drug cholestasis, infiltrative disease</td></tr>
    </table></div>
    <h4>The AST:ALT ratio</h4>
    <p>An <strong>AST:ALT ratio</strong> above 2 suggests <strong>alcoholic liver disease</strong>, partly because chronic alcohol use causes <strong>pyridoxal-5'-phosphate</strong> deficiency, which lowers ALT synthesis more than AST. A ratio above 1 in a patient with chronic hepatitis suggests advancing fibrosis or <strong>cirrhosis</strong>. In <strong>Wilson disease</strong>, the ratio may be high with Coombs-negative haemolysis and low alkaline phosphatase. A ratio below 1 is typical of acute viral hepatitis and fatty liver disease.</p>
    <h4>Markedly raised values</h4>
    <ul>
      <li><strong>Paracetamol</strong> overdose and other drug-induced liver injury.</li>
      <li><strong>Ischaemic hepatitis</strong> after hypotension — a rapid, massive rise with high LDH.</li>
      <li>Acute viral hepatitis, autoimmune hepatitis, acute Budd–Chiari syndrome and acute biliary obstruction.</li>
      <li>Muscle disease can raise AST and ALT; check CK before assuming liver disease.</li>
      <li><strong>Macro-AST</strong> causes a persistent isolated rise without tissue injury.</li>
    </ul>
    <p>Interpret the absolute level, the ratio, the time course and the accompanying bilirubin, ALP and INR together; no single aminotransferase value diagnoses a specific disease.</p>
  `,
  tip: "Use the R ratio to classify, then the AST:ALT ratio to refine — that structure earns the interpretation marks.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc161", domain: "chem-protein",
  q: "Discuss alkaline phosphatase and γ-glutamyl transferase: their sources, isoenzymes, interpretation in cholestasis and bone disease, and the approach to an isolated raised ALP.",
  tags: ["ALP", "GGT", "cholestasis", "bone disease"],
  keypoints: ["alkaline phosphatase", "isoenzymes", "bone-specific ALP", "placental", "intestinal", "γ-glutamyl transferase", "cholestasis", "Paget disease", "osteomalacia", "drug induction", "5'-nucleotidase", "heat stability", "benign familial", "pregnancy"],
  answer: `
    <h4>ALP biochemistry</h4>
    <p><strong>Alkaline phosphatase</strong> is a zinc-containing, membrane-bound enzyme that hydrolyses phosphate esters at alkaline pH. It is not a single enzyme: <strong>isoenzymes</strong> come from the canalicular membrane of the liver, the osteoblast of bone, the placenta and the intestinal brush border. Serum ALP is therefore a composite, and the pattern of rise matters more than the absolute value.</p>
    <h4>Isoenzymes and confirmation</h4>
    <div class="table-wrap"><table>
      <tr><th>Isoenzyme</th><th>Clinical association</th><th>Heat stability</th></tr>
      <tr><td>Liver</td><td><strong>Cholestasis</strong>, infiltrative liver disease, drug induction</td><td>Intermediate</td></tr>
      <tr><td><strong>Bone-specific ALP</strong></td><td>Growth, <strong>Paget disease</strong>, <strong>osteomalacia</strong>, metastases, fracture healing</td><td>Least stable ("bone burns")</td></tr>
      <tr><td><strong>Placental</strong></td><td><strong>Pregnancy</strong>, placental tumours (Regan isoenzyme)</td><td>Most stable</td></tr>
      <tr><td><strong>Intestinal</strong></td><td>Post-prandial, blood group B and O secretors</td><td>Intermediate</td></tr>
    </table></div>
    <p><strong>γ-Glutamyl transferase</strong> is a microsomal enzyme of biliary epithelium and is induced by alcohol, phenytoin and other drugs. It is raised in hepatobiliary disease but not in bone disease, so a raised GGT alongside a raised ALP supports a hepatic source. <strong>5'-Nucleotidase</strong> is an alternative confirmatory test. <strong>Heat stability</strong> and electrophoresis can distinguish isoenzymes when needed.</p>
    <h4>Isolated raised ALP</h4>
    <ul>
      <li>Physiological: childhood growth, third trimester of <strong>pregnancy</strong>.</li>
      <li>Bone: <strong>Paget disease</strong> (very high with normal calcium and phosphate), <strong>osteomalacia</strong>, healing fracture, bone metastases.</li>
      <li>Liver: early biliary obstruction, infiltrative disease, <strong>drug induction</strong>.</li>
      <li><strong>Benign familial</strong> hyperphosphatasaemia — a harmless inherited elevation.</li>
      <li>Rarely, placental or intestinal isoenzyme excess.</li>
    </ul>
    <p>Confirm the source with GGT, bone-specific ALP or electrophoresis, then investigate the relevant organ. A persistent isolated ALP in a well patient with a normal GGT should prompt a bone review rather than repeated liver imaging.</p>
  `,
  tip: "Use GGT as the hepatic discriminator; it is normal in bone disease and that single fact frames the answer.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc162", domain: "chem-protein",
  q: "Compare amylase and lipase in the diagnosis of acute pancreatitis, discuss non-pancreatic causes of elevation, and explain macroamylasaemia.",
  tags: ["amylase", "lipase", "pancreatitis", "macroamylase"],
  keypoints: ["amylase", "lipase", "pancreatic isoenzyme", "salivary isoenzyme", "acute pancreatitis", "macroamylasaemia", "renal failure", "lipaemia", "half-life", "Atlanta classification", "cholecystitis", "ectopic pregnancy", "triglycerides"],
  answer: `
    <h4>Enzymology</h4>
    <p><strong>Amylase</strong> hydrolyses α-1,4 glycosidic bonds and exists as <strong>salivary isoenzyme</strong> and <strong>pancreatic isoenzyme</strong>; total amylase is the sum of both. <strong>Lipase</strong> hydrolyses triglycerides at the oil–water interface and is much more pancreas-specific. Both are released into blood when acinar cells are injured, but their clearance and <strong>half-life</strong> differ. Because both enzymes are cleared partly by the kidney, renal function affects the interpretation of a raised result.</p>
    <h4>Acute pancreatitis</h4>
    <p>The <strong>Atlanta classification</strong> requires two of three features: characteristic abdominal pain, enzyme elevation greater than three times the upper reference limit, and imaging findings. Amylase rises within hours, peaks early and usually normalises within 3–5 days. Lipase rises earlier, remains elevated for 8–14 days and is preferred when the patient presents late. Neither enzyme predicts severity, and the degree of elevation does not correlate with outcome.</p>
    <h4>Non-pancreatic causes</h4>
    <div class="table-wrap"><table>
      <tr><th>Cause</th><th>Amylase</th><th>Lipase</th></tr>
      <tr><td>Salivary gland disease, mumps</td><td>Raised (salivary)</td><td>Normal</td></tr>
      <tr><td><strong>Renal failure</strong></td><td>Raised (reduced clearance)</td><td>Raised</td></tr>
      <tr><td><strong>Cholecystitis</strong>, biliary colic</td><td>Mild rise</td><td>Mild rise</td></tr>
      <tr><td><strong>Ectopic pregnancy</strong>, ruptured cyst</td><td>Raised</td><td>Normal</td></tr>
      <tr><td>DKA, abdominal surgery, obstruction</td><td>Raised</td><td>Variable</td></tr>
      <tr><td>Severe <strong>hypertriglyceridaemia</strong></td><td>Falsely low from <strong>lipaemia</strong></td><td>Falsely low from lipaemia</td></tr>
    </table></div>
    <h4>Macroamylasaemia</h4>
    <p><strong>Macroamylasaemia</strong> is an immunoglobulin-bound amylase complex that is too large to be filtered by the kidney. It produces a persistent low-level rise in a well patient with normal lipase and no pancreatic disease. Screening is by <strong>PEG precipitation</strong>, with low recovery confirming the complex. Recognising it prevents repeated imaging and unnecessary intervention, and it is an important cause of a false-positive pancreatitis label.</p>
  `,
  tip: "Lipase is more specific and stays up longer; macroamylasaemia is the classic benign persistent amylase rise.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc163", domain: "chem-protein",
  q: "Discuss BNP and NT-proBNP in heart failure: biology, assay differences, confounders, clinical use and monitoring.",
  tags: ["BNP", "NT-proBNP", "heart failure", "confounders"],
  keypoints: ["BNP", "NT-proBNP", "ventricular wall stretch", "neprilysin", "sacubitril", "obesity", "atrial fibrillation", "renal failure", "rule-out", "heart failure with preserved ejection fraction", "half-life", "prognostic information", "standardised"],
  answer: `
    <h4>Biology and assays</h4>
    <p>Ventricular myocytes release proBNP in response to <strong>ventricular wall stretch</strong>. ProBNP is cleaved into active <strong>BNP</strong> (32 amino acids) and inactive <strong>NT-proBNP</strong> (76 amino acids) in equimolar amounts. BNP is cleared by natriuretic peptide receptors and by <strong>neprilysin</strong>, giving a short <strong>half-life</strong> of about 20 minutes; NT-proBNP is cleared mainly by the kidney and lasts 60–120 minutes. BNP assays are not standardised between manufacturers, whereas NT-proBNP methods are more comparable — but serial monitoring should still use the same platform.</p>
    <h4>Confounders</h4>
    <div class="table-wrap"><table>
      <tr><th>Raise levels</th><th>Lower levels</th></tr>
      <tr><td>Age, <strong>renal failure</strong>, <strong>atrial fibrillation</strong>, pulmonary embolism, sepsis, acute coronary syndrome</td><td><strong>Obesity</strong>, flash pulmonary oedema, mitral stenosis, constrictive pericarditis</td></tr>
      <tr><td>Valvular disease, pulmonary hypertension, right ventricular strain</td><td>Very early presentation before the peptide rises</td></tr>
    </table></div>
    <h4>Clinical use</h4>
    <p>Natriuretic peptides are best for <strong>rule-out</strong> because of their high negative predictive value. A very low value in an untreated patient with breathlessness makes heart failure unlikely; a high value supports the diagnosis but is not specific. They are useful in <strong>heart failure with preserved ejection fraction</strong>, where imaging may be equivocal, and they carry prognostic information across the spectrum of disease.</p>
    <h4>Monitoring and pitfalls</h4>
    <ul>
      <li><strong>Sacubitril</strong> inhibits neprilysin and raises BNP, so BNP cannot be used to monitor patients on sacubitril–valsartan; NT-proBNP is preferred.</li>
      <li>Renal function and body mass index must be considered when interpreting a value.</li>
      <li>Do not use a single cut-off across assays; use the assay-specific threshold and the clinical context.</li>
      <li>Immunoassay interference, including heterophile antibodies, can produce discordant results.</li>
    </ul>
    <p>Natriuretic peptides support, but never replace, the clinical assessment and echocardiogram.</p>
  `,
  tip: "The sacubitril–valsartan effect and obesity are the two modern confounders examiners expect.",
  sources: ["C1", "C3", "C9"]
},
{
  id: "cc164", domain: "chem-protein",
  q: "Discuss CA-125, HE4 and CA19-9 as tumour markers: biology, clinical applications and interpretative limitations.",
  tags: ["CA-125", "HE4", "CA19-9", "tumour markers"],
  keypoints: ["CA-125", "MUC16", "HE4", "ROMA", "CA19-9", "Lewis antigen", "ovarian cancer", "endometriosis", "pancreatic cancer", "cholangiocarcinoma", "cholestasis", "monitoring", "half-life"],
  answer: `
    <h4>CA-125</h4>
    <p><strong>CA-125</strong> is a high-molecular-weight glycoprotein encoded by MUC16 and expressed on coelomic epithelium. It is raised in most advanced <strong>ovarian cancer</strong> but also in endometriosis, menstruation, pregnancy, cirrhosis, heart failure and any peritoneal inflammation. It is therefore not a screening test for the general population. Its main roles are assessing a pelvic mass, monitoring response to treatment and detecting recurrence; the <strong>half-life</strong> of about five days means a plateau after surgery suggests residual disease.</p>
    <h4>HE4 and ROMA</h4>
    <p><strong>HE4</strong> (human epididymis protein 4, WFDC2) is overexpressed in serous and endometrioid ovarian carcinoma and is less affected by <strong>endometriosis</strong> than CA-125. The <strong>ROMA</strong> score combines CA-125, HE4 and menopausal status to estimate the risk of malignancy in a woman with a pelvic mass. It supports referral decisions but does not replace histology.</p>
    <h4>CA19-9</h4>
    <p><strong>CA19-9</strong> is a sialylated <strong>Lewis antigen</strong> (sialyl Lewis a). Individuals who are Lewis-negative cannot synthesise it, so a normal value does not exclude disease. It is raised in <strong>pancreatic cancer</strong> and <strong>cholangiocarcinoma</strong>, and also in gastric and colorectal cancer. Benign <strong>cholestasis</strong>, pancreatitis and diabetes can produce marked elevations, so it is not diagnostic. Its strength is in monitoring known disease and detecting recurrence.</p>
    <h4>Interpretation</h4>
    <ul>
      <li>Use tumour markers for monitoring and prognosis, not as stand-alone diagnostic tests.</li>
      <li>Interpret against the assay-specific reference interval and the clinical picture.</li>
      <li>Use the same method for serial measurements; a change in platform can create a spurious trend.</li>
      <li>Consider the high-dose hook effect when a result is unexpectedly low in bulky disease.</li>
    </ul>
    <p>A normal marker never excludes cancer, and a raised marker never proves it.</p>
  `,
  tip: "Say what each marker is used for — monitoring and risk assessment, not screening — before listing causes.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc165", domain: "chem-protein", star: true,
  q: "Discuss prostate-specific antigen: its biology, molecular forms, clinical applications in screening and monitoring, and the factors that affect interpretation.",
  tags: ["PSA", "prostate cancer", "free PSA", "monitoring"],
  keypoints: ["prostate-specific antigen", "kallikrein-3", "free PSA", "complexed PSA", "PSA density", "PSA velocity", "benign prostatic hyperplasia", "prostatitis", "biochemical recurrence", "androgen deprivation", "screening", "4Kscore", "Prostate Health Index"],
  answer: `
    <h4>Biology</h4>
    <p><strong>Prostate-specific antigen</strong> is a serine protease encoded by KLK3 and also called <strong>kallikrein-3</strong>. It liquefies the seminal coagulum and is produced by prostatic acinar and ductal epithelium. In blood it is largely bound to α₁-antichymotrypsin as <strong>complexed PSA</strong>, with a smaller <strong>free PSA</strong> fraction. It is organ-specific but not cancer-specific.</p>
    <h4>Molecular forms and derived indices</h4>
    <div class="table-wrap"><table>
      <tr><th>Measure</th><th>Interpretation</th></tr>
      <tr><td>Total PSA</td><td>First-line measurement; raised in cancer, <strong>benign prostatic hyperplasia</strong> and <strong>prostatitis</strong></td></tr>
      <tr><td><strong>Free PSA</strong> percentage</td><td>Lower percentage favours cancer in the diagnostic grey zone</td></tr>
      <tr><td><strong>PSA density</strong></td><td>Total PSA divided by prostate volume; corrects for gland size</td></tr>
      <tr><td><strong>PSA velocity</strong></td><td>Rate of rise over time; rapid rise is more suspicious</td></tr>
      <tr><td><strong>Prostate Health Index</strong> (PHI) and <strong>4Kscore</strong></td><td>Multiparameter risk scores that reduce unnecessary biopsy</td></tr>
    </table></div>
    <h4>Clinical applications</h4>
    <p><strong>Screening</strong> is a shared decision, because PSA testing reduces prostate cancer mortality modestly while causing overdiagnosis and overtreatment. PSA is most valuable for monitoring known disease: after radical prostatectomy it should become undetectable, and a rising value signals <strong>biochemical recurrence</strong>. During <strong>androgen deprivation</strong> therapy, a rising PSA may indicate castration resistance. Serial values over time are more informative than any single measurement, and the rate of change should be interpreted alongside imaging and biopsy.</p>
    <h4>Factors affecting interpretation</h4>
    <ul>
      <li>Benign enlargement, infection, urinary retention and catheterisation raise PSA.</li>
      <li>Ejaculation and vigorous prostate massage cause transient rises; repeat before acting.</li>
      <li>5α-reductase inhibitors lower PSA, so results should be adjusted and interpreted with caution.</li>
      <li>Assay standardisation has improved but methods still differ; use one platform for serial testing.</li>
      <li>A normal PSA does not exclude high-grade cancer, and a raised PSA does not prove it.</li>
    </ul>
  `,
  tip: "Emphasise 'organ-specific, not cancer-specific' and the monitoring role — it frames a balanced answer.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc166", domain: "chem-protein",
  q: "Discuss the protein content of cerebrospinal fluid and the laboratory assessment of the blood–CSF barrier and intrathecal immunoglobulin synthesis.",
  tags: ["CSF protein", "albumin quotient", "IgG index", "Reiber"],
  keypoints: ["CSF albumin", "albumin quotient", "blood–CSF barrier", "IgG index", "Reiber diagram", "intrathecal synthesis", "oligoclonal bands", "multiple sclerosis", "meningitis", "Guillain–Barré", "age-dependent", "serum albumin"],
  answer: `
    <h4>Origin and normal composition</h4>
    <p>CSF protein is normally low, roughly 0.15–0.45 g/L, and about four-fifths is <strong>CSF albumin</strong> derived from plasma. Smaller amounts of prealbumin, transferrin, immunoglobulins and β₂-microglobulin are present. Protein enters mainly across the <strong>blood–CSF barrier</strong> at the choroid plexus and capillary endothelium; a small fraction is synthesised locally. Because CSF protein concentration depends on plasma protein, a low serum albumin can mask a barrier defect.</p>
    <h4>Albumin quotient</h4>
    <p>The <strong>albumin quotient</strong> (QAlb) is CSF albumin divided by <strong>serum albumin</strong>. It is <strong>age-dependent</strong> and rises slowly through adult life, so age-adjusted reference limits are needed. QAlb measures barrier integrity: a raised value indicates increased permeability or reduced CSF flow, as in <strong>meningitis</strong>, encephalitis, stroke or <strong>Guillain–Barré</strong> syndrome. It is more informative than the absolute CSF protein alone.</p>
    <h4>IgG index and Reiber diagram</h4>
    <p>The <strong>IgG index</strong> = (CSF IgG ÷ serum IgG) ÷ (CSF albumin ÷ serum albumin). A value above about 0.7 suggests <strong>intrathecal synthesis</strong>, but the index is influenced by barrier dysfunction. The <strong>Reiber diagram</strong> plots CSF IgG against CSF albumin and uses a hyperbolic reference curve to separate barrier leakage from local production. <strong>Oligoclonal bands</strong> detected by isoelectric focusing on paired serum and CSF remain the most sensitive marker of intrathecal synthesis, especially in <strong>multiple sclerosis</strong>.</p>
    <h4>Patterns</h4>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Findings</th><th>Typical setting</th></tr>
      <tr><td>Barrier dysfunction</td><td>High QAlb, normal IgG index</td><td>Bacterial meningitis, stroke, Guillain–Barré</td></tr>
      <tr><td>Intrathecal synthesis</td><td>Normal QAlb, high IgG index, CSF-only bands</td><td>Multiple sclerosis, neurosyphilis, viral encephalitis</td></tr>
      <tr><td>Mixed</td><td>Both raised</td><td>Severe inflammation with barrier damage</td></tr>
    </table></div>
    <p>Always interpret CSF protein with paired serum, cell count, glucose and lactate; the pattern supports, but does not replace, microbiology and clinical diagnosis.</p>
  `,
  tip: "Insist on paired serum for both the albumin quotient and oligoclonal bands — the word 'paired' is the key.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc167", domain: "chem-protein",
  q: "Discuss urine protein electrophoresis and immunofixation: methods, patterns of proteinuria and the detection of Bence Jones protein.",
  tags: ["urine electrophoresis", "Bence Jones", "proteinuria", "immunofixation"],
  keypoints: ["urine protein electrophoresis", "Bence Jones protein", "immunofixation", "dipstick", "sulfosalicylic acid", "glomerular proteinuria", "tubular proteinuria", "overflow proteinuria", "light chains", "albumin", "α₁-microglobulin", "concentrated urine", "24-hour collection"],
  answer: `
    <h4>Why urine electrophoresis</h4>
    <p>Urine contains proteins filtered by the glomerulus or secreted by the tubules. <strong>Urine protein electrophoresis</strong> separates them by charge and is particularly useful when a monoclonal <strong>light chain</strong> is suspected. The standard <strong>dipstick</strong> detects albumin and can be completely negative in light-chain disease, so a negative dipstick does not exclude <strong>Bence Jones protein</strong>.</p>
    <h4>Methods</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Principle</th><th>Notes</th></tr>
      <tr><td><strong>Dipstick</strong></td><td>Protein error of indicators</td><td>Sensitive to <strong>albumin</strong>; misses light chains</td></tr>
      <tr><td><strong>Sulfosalicylic acid</strong></td><td>Precipitation of all proteins</td><td>Detects light chains and globulins</td></tr>
      <tr><td>Urine total protein</td><td>Pyrogallol red or benzethonium</td><td>Quantifies total, not the type</td></tr>
      <tr><td><strong>Urine protein electrophoresis</strong></td><td>Agarose or capillary separation</td><td>Requires <strong>concentrated urine</strong>; shows the pattern</td></tr>
      <tr><td><strong>Immunofixation</strong></td><td>Antisera against heavy and light chains</td><td>Defines the monoclonal protein</td></tr>
    </table></div>
    <h4>Patterns</h4>
    <ul>
      <li><strong>Glomerular proteinuria</strong>: albumin-predominant, as in nephrotic syndrome and diabetic kidney disease.</li>
      <li><strong>Tubular proteinuria</strong>: low-molecular-weight proteins such as <strong>α₁-microglobulin</strong> and β₂-microglobulin, with little albumin.</li>
      <li><strong>Overflow proteinuria</strong>: filtered loads exceed tubular reabsorption — monoclonal light chains, myoglobin or haemoglobin.</li>
      <li>Mixed patterns occur in advanced kidney disease.</li>
    </ul>
    <h4>Bence Jones pitfalls</h4>
    <p>A <strong>24-hour collection</strong> avoids variable dilution, but a random specimen with creatinine correction is often used. Light chains may be missed if the urine is dilute, if the pH is unsuitable, or if only a dipstick is used. Immunofixation of concentrated urine is the key confirmatory step; a monoclonal light chain without a heavy chain indicates light-chain-only disease. Always interpret with serum electrophoresis and serum free light chains, because some patients have disease detectable only in one compartment.</p>
  `,
  tip: "Contrast the dipstick (albumin only) with sulfosalicylic acid (all proteins) — that is the core analytical point.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc168", domain: "chem-protein",
  q: "Discuss haemolysis, lipaemia and icterus as analytical interferences in clinical chemistry, and explain biotin and antibody interference in immunoassays.",
  tags: ["HIL", "haemolysis", "lipaemia", "biotin"],
  keypoints: ["haemolysis", "lipaemia", "icterus", "H index", "L index", "I index", "spectrophotometric interference", "pseudohyponatraemia", "biotin", "sandwich immunoassay", "competitive immunoassay", "heterophile antibodies", "hook effect", "serum indices"],
  answer: `
    <h4>Serum indices</h4>
    <p>Modern analysers measure <strong>serum indices</strong> spectrophotometrically and report <strong>H index</strong> (haemolysis), <strong>L index</strong> (lipaemia) and <strong>I index</strong> (icterus). They are semiquantitative and method-specific, but they allow the laboratory to flag or suppress results before release. <strong>Spectrophotometric interference</strong> arises when the interferent absorbs at the measurement wavelength or alters the reaction.</p>
    <h4>Haemolysis</h4>
    <p>Red cell lysis releases potassium, LDH, AST, phosphate, magnesium and folate into plasma, so these are falsely raised. Haemoglobin also produces a broad absorbance that can bias colorimetric assays, and it may dilute analytes. Severe haemolysis can lower sodium and chloride and interfere with bilirubin and HbA1c measurement. The result should be rejected or reported with a comment; a repeat sample is usually required.</p>
    <h4>Lipaemia and icterus</h4>
    <p><strong>Lipaemia</strong> scatters light and increases turbidity, causing variable positive or negative bias. With indirect ion-selective electrodes it also displaces plasma water, producing <strong>pseudohyponatraemia</strong>. <strong>Icterus</strong> adds bilirubin absorbance, which interferes with creatinine, cholesterol and other colorimetric methods; modern assays use bichromatic readings or sample blanking to reduce it. Neither lipaemia nor icterus should be ignored when results conflict with the clinical picture.</p>
    <h4>Biotin and immunoassay interference</h4>
    <ul>
      <li>High-dose <strong>biotin</strong> saturates streptavidin in <strong>sandwich immunoassay</strong>s, giving falsely low results (troponin, TSH); in <strong>competitive immunoassay</strong>s it gives falsely high results (free T4, free T3).</li>
      <li><strong>Heterophile antibodies</strong> can bridge capture and detection antibodies, producing false positives; blocking tubes or a different platform help.</li>
      <li>The high-dose <strong>hook effect</strong> causes falsely low results when antigen is in massive excess; dilute and re-assay.</li>
      <li>Macro-analytes and autoantibodies are other causes of implausible persistent results.</li>
    </ul>
    <p>Document the interference, repeat with an alternative method and communicate the limitation to the clinician.</p>
  `,
  tip: "Learn the direction of biotin interference in each assay format — sandwich false low, competitive false high.",
  sources: ["C1", "C2", "C3"]
}
);