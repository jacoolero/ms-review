/* Clinical Chemistry — part 6: proteins & enzymes; renal */
window.QBANK.push(
{
  id: "cc76", domain: "chem-protein",
  q: "Compare the methods for measuring total protein and albumin, and discuss the clinical uses and limitations of specific plasma proteins.",
  tags: ["total protein", "albumin", "BCG", "BCP", "plasma proteins"],
  keypoints: ["biuret reaction peptide bonds copper", "refractometry", "bromocresol green overestimates albumin", "bromocresol purple underestimates in renal failure", "immunoturbidimetric albumin reference", "albumin half-life 20 days", "negative acute phase protein", "prealbumin transthyretin short half-life", "alpha-1 antitrypsin deficiency PiZZ", "haptoglobin falls in haemolysis", "ceruloplasmin low in Wilson disease", "transferrin iron transport", "beta-2 microglobulin myeloma prognosis", "globulin gap", "albumin to globulin ratio", "pseudohypoproteinaemia not real"],
  answer: `
    <h4>Total protein</h4>
    <ul>
      <li><strong>Biuret reaction</strong>: cupric ions in alkaline solution form a violet complex with <strong>peptide bonds</strong> (≥2 per molecule) — robust and the routine method; insensitive at low (CSF, urine) concentrations, where pyrogallol red–molybdate or benzethonium turbidimetry are used.</li>
      <li><strong>Refractometry</strong>: rapid, used for screening and in veterinary practice; affected by lipid, glucose and urea.</li>
    </ul>
    <h4>Albumin</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Bias</th></tr>
      <tr><td><strong>Bromocresol green (BCG)</strong> dye binding</td><td><strong>Overestimates</strong> albumin at low levels (reacts with α-globulins, especially in inflammation) — misleads in hypoalbuminaemia</td></tr>
      <tr><td><strong>Bromocresol purple (BCP)</strong></td><td>More specific, but <strong>underestimates in renal failure</strong> (carbamylated albumin, uraemic toxins)</td></tr>
      <tr><td><strong>Immunoturbidimetric / nephelometric</strong></td><td>Reference-quality, used for urine albumin</td></tr>
    </table></div>
    <p>Differences between BCG and BCP matter for adjusted-calcium calculations and nutritional assessment — the laboratory must state the method. Albumin has a <strong>half-life of ~20 days</strong> and is a <strong>negative acute phase protein</strong>, so it is a poor nutritional marker in sick patients.</p>
    <h4>Specific proteins</h4>
    <div class="table-wrap"><table>
      <tr><th>Protein</th><th>Clinical use</th></tr>
      <tr><td><strong>Prealbumin (transthyretin)</strong></td><td><strong>Short half-life</strong> (~2 days) — monitors nutritional repletion; falls in inflammation</td></tr>
      <tr><td><strong>α₁-Antitrypsin</strong></td><td>Deficiency (<strong>PiZZ</strong> phenotype) causes emphysema and liver disease; measure level and phenotype/genotype; acute-phase rise may mask deficiency</td></tr>
      <tr><td><strong>Haptoglobin</strong></td><td>Binds free haemoglobin; <strong>falls in haemolysis</strong> (intravascular); rises in inflammation</td></tr>
      <tr><td><strong>Ceruloplasmin</strong></td><td>Copper transport; <strong>low in Wilson disease</strong>, Menkes, copper deficiency</td></tr>
      <tr><td><strong>Transferrin</strong></td><td>Iron transport; high in iron deficiency, low in inflammation and protein loss</td></tr>
      <tr><td>C3, C4</td><td>Consumption in SLE, immune-complex glomerulonephritis; C4 low in hereditary angioedema (with C1-inhibitor)</td></tr>
      <tr><td><strong>β₂-Microglobulin</strong></td><td>MHC class I light chain; <strong>myeloma prognosis</strong> (ISS staging), lymphoma, tubular dysfunction</td></tr>
      <tr><td>Immunoglobulins G, A, M</td><td>Immunodeficiency, polyclonal versus monoclonal increases</td></tr>
    </table></div>
    <h4>Interpretation pearls</h4>
    <p>A raised <strong>globulin gap</strong> (total protein minus albumin &gt;40 g/L) prompts electrophoresis for myeloma or chronic infection; a low <strong>albumin:globulin ratio</strong> suggests chronic inflammation or paraprotein. Posture changes protein concentration by ~10%, and prolonged tourniquet raises it — so a low result after IV fluids or lying down may be a <strong>pseudohypoproteinaemia</strong> rather than real loss.</p>
  `,
  tip: "BCG overestimates and BCP underestimates in renal failure — say both and name the reference method.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc77", domain: "chem-protein",
  q: "Discuss the laboratory examination of cerebrospinal fluid: biochemistry, oligoclonal bands, and the differentiation of bacterial, viral, tuberculous and fungal meningitis.",
  tags: ["CSF", "oligoclonal bands", "meningitis", "xanthochromia"],
  keypoints: ["CSF glucose ratio below 0.4 to 0.5", "paired plasma glucose", "CSF protein raised", "lactate above 3.5 mmol/L favours bacterial", "bacterial neutrophils very low glucose", "viral lymphocytes normal glucose", "tuberculous lymphocytes low glucose very high protein", "cryptococcal antigen India ink", "oligoclonal bands by isoelectric focusing", "paired serum and CSF to show intrathecal synthesis", "IgG index", "multiple sclerosis", "xanthochromia spectrophotometry for subarachnoid haemorrhage", "bilirubin peak at 450 nm", "traumatic tap correction", "process immediately and never refrigerate for culture"],
  answer: `
    <h4>Specimen handling</h4>
    <p>Collect 3–4 sequential tubes (chemistry, microbiology, cell count, extra), <strong>process immediately</strong> and do <strong>not refrigerate the microbiology tube</strong>. Always send a <strong>paired plasma glucose</strong> taken at the same time — CSF glucose is interpreted as the <strong>CSF:plasma ratio</strong> (normal ~0.6; <strong>below 0.4–0.5</strong> is abnormal).</p>
    <h4>Differentiating meningitis</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th>Bacterial</th><th>Viral</th><th>Tuberculous</th><th>Cryptococcal</th></tr>
      <tr><td>Opening pressure</td><td>↑</td><td>N/↑</td><td>↑</td><td><strong>↑↑</strong></td></tr>
      <tr><td>Cells</td><td>Hundreds to thousands, <strong>neutrophils</strong></td><td>Tens to hundreds, <strong>lymphocytes</strong></td><td>Tens to hundreds, <strong>lymphocytes</strong></td><td>Low to moderate lymphocytes (may be normal in HIV)</td></tr>
      <tr><td>Glucose ratio</td><td><strong>Very low</strong></td><td><strong>Normal</strong></td><td><strong>Low</strong></td><td>Low</td></tr>
      <tr><td>Protein</td><td>↑↑</td><td>N/mild ↑</td><td><strong>Very high</strong> (&gt;1–5 g/L)</td><td>↑</td></tr>
      <tr><td><strong>Lactate</strong></td><td><strong>&gt;3.5 mmol/L</strong></td><td>&lt;3.5</td><td>↑</td><td>↑</td></tr>
      <tr><td>Key tests</td><td>Gram stain, culture, antigen/PCR panels</td><td>PCR (enterovirus, HSV, VZV)</td><td>Xpert Ultra, ADA, large-volume culture</td><td><strong>Cryptococcal antigen</strong> (lateral flow), <strong>India ink</strong>, culture</td></tr>
    </table></div>
    <p>Early bacterial meningitis and partially treated meningitis may show lymphocytes or near-normal glucose; CSF lactate and procalcitonin help.</p>
    <h4>Oligoclonal bands</h4>
    <p>Detected by <strong>isoelectric focusing with IgG immunoblotting</strong> on <strong>paired serum and CSF</strong>. Bands present in CSF but absent in serum indicate <strong>intrathecal IgG synthesis</strong> — positive in &gt;95% of <strong>multiple sclerosis</strong> (now part of the McDonald criteria as a substitute for dissemination in time), and also in neurosyphilis, SSPE, CNS infections and autoimmune encephalitis. Identical bands in both mean systemic origin. The <strong>IgG index</strong> = (CSF IgG/serum IgG) ÷ (CSF albumin/serum albumin), &gt;0.7 indicates intrathecal synthesis; the albumin quotient reflects blood–CSF barrier integrity.</p>
    <h4>Xanthochromia</h4>
    <p>For suspected <strong>subarachnoid haemorrhage</strong> with a normal CT, CSF taken ≥12 hours after symptom onset is examined by <strong>spectrophotometry</strong> for oxyhaemoglobin (415 nm) and <strong>bilirubin (peak near 450 nm)</strong> — bilirubin is formed in vivo and distinguishes true haemorrhage from a <strong>traumatic tap</strong> (falling red cell counts across tubes; correct WBC by about 1 per 500–1000 RBC). Protect the sample from light.</p>
  `,
  tip: "Always mention the paired plasma glucose and paired serum for oligoclonal bands — 'paired' is the key word.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc78", domain: "chem-protein",
  q: "Discuss the measurement of aminotransferases and creatine kinase: assay principles, IFCC standardisation and interpretation of raised activities, including macroenzymes.",
  tags: ["ALT", "AST", "CK", "macroenzymes", "IFCC"],
  keypoints: ["ALT and AST transfer amino groups to 2-oxoglutarate", "coupled to LDH or MDH with NADH at 340 nm", "pyridoxal phosphate cofactor", "IFCC reference procedures at 37 degrees", "results differ with and without P5P", "CK reverse reaction creatine phosphate to ATP", "hexokinase and G6PD coupled", "N-acetylcysteine reactivation", "adenylate kinase interference blocked", "CK raised after exercise and intramuscular injection", "ethnic and sex differences in CK", "macro-CK type 1 immunoglobulin complex", "macro-CK type 2 mitochondrial", "macro-AST", "PEG precipitation", "persistently raised isolated enzyme without cause"],
  answer: `
    <h4>Aminotransferases</h4>
    <p>ALT and AST <strong>transfer an amino group from alanine or aspartate to 2-oxoglutarate</strong>, producing pyruvate or oxaloacetate. These are measured in a <strong>coupled reaction with LDH (ALT) or MDH (AST)</strong>, following the fall in <strong>NADH absorbance at 340 nm</strong>. <strong>Pyridoxal-5′-phosphate</strong> (P5P) is the cofactor; IFCC reference procedures at <strong>37 °C</strong> include it. Patients deficient in vitamin B6 (alcoholics, renal failure) have apoenzyme that is only activated when P5P is added, so <strong>results differ with and without P5P</strong> — a source of between-method bias.</p>
    <h4>Creatine kinase</h4>
    <p>The <strong>reverse reaction</strong> is used: <strong>creatine phosphate + ADP → creatine + ATP</strong>, coupled to <strong>hexokinase and G6PD</strong> to generate NADPH. <strong>N-acetylcysteine reactivates</strong> CK (thiol groups oxidise in storage), and <strong>adenylate kinase</strong> from red cells and platelets is <strong>blocked with AMP and diadenosine pentaphosphate</strong> — otherwise haemolysis falsely raises CK.</p>
    <h4>Interpretation</h4>
    <ul>
      <li>ALT is more liver-specific; AST is also in muscle, heart and red cells (raised in haemolysis, myositis).</li>
      <li>CK is <strong>raised after exercise and intramuscular injection</strong>, trauma, seizures, hypothyroidism, statins and myopathies; there are <strong>ethnic and sex differences</strong> (higher in people of African descent and in men) — reference intervals should reflect this.</li>
      <li>Muscle disease raises AST and ALT too, misleading clinicians into suspecting liver disease — check CK before a liver work-up when transaminases are unexplained.</li>
    </ul>
    <h4>Macroenzymes</h4>
    <p>Enzymes complexed with immunoglobulin or aggregated are cleared slowly, giving a <strong>persistently raised isolated enzyme without clinical cause</strong>.</p>
    <ul>
      <li><strong>Macro-CK type 1</strong>: CK-BB complexed with IgG (older women, autoimmune disease) — can mimic a high CK-MB.</li>
      <li><strong>Macro-CK type 2</strong>: oligomeric <strong>mitochondrial CK</strong> — seen in malignancy and severe illness; associated with poor prognosis.</li>
      <li><strong>Macro-AST</strong>, macroamylase, macrolipase, macro-LD, macroprolactin.</li>
    </ul>
    <p>Detection: <strong>PEG precipitation</strong> (low recovery indicates macroenzyme), electrophoresis, gel filtration chromatography or protein A/G adsorption. Recognising macroenzymes avoids biopsies, imaging and unnecessary referrals.</p>
  `,
  tip: "Mention P5P (B6 deficiency effect) and adenylate kinase inhibition — the technical details examiners look for.",
  sources: ["C2", "C1", "C10"]
},
{
  id: "cc79", domain: "chem-protein",
  q: "Discuss biochemical markers of bone metabolism and their use in osteoporosis and metabolic bone disease.",
  tags: ["bone turnover markers", "CTX", "P1NP", "osteoporosis"],
  keypoints: ["formation markers P1NP bone ALP osteocalcin", "resorption markers CTX and NTX", "P1NP and CTX reference markers IOF-IFCC", "fasting morning sample for CTX", "circadian and food effects", "monitoring response to antiresorptive therapy", "fall in CTX greater than least significant change", "adherence check", "drug holiday decisions", "not for diagnosis of osteoporosis DXA", "calcium phosphate vitamin D PTH screen", "secondary osteoporosis screening", "Paget disease high ALP", "osteomalacia low phosphate high ALP", "renal osteodystrophy", "fracture healing raises markers"],
  answer: `
    <h4>Markers</h4>
    <div class="table-wrap"><table>
      <tr><th>Process</th><th>Markers</th></tr>
      <tr><td><strong>Formation</strong></td><td><strong>P1NP</strong> (procollagen type 1 N-terminal propeptide), <strong>bone-specific ALP</strong>, <strong>osteocalcin</strong></td></tr>
      <tr><td><strong>Resorption</strong></td><td><strong>CTX</strong> (C-telopeptide of type 1 collagen) and <strong>NTX</strong>, TRACP-5b</td></tr>
    </table></div>
    <p><strong>P1NP and serum CTX</strong> are the <strong>reference markers recommended by IOF-IFCC</strong>.</p>
    <h4>Pre-analytical requirements</h4>
    <p>CTX has a marked <strong>circadian rhythm</strong> and falls by ~40% after food — collect a <strong>fasting morning sample</strong> (08:00–10:00) and repeat under the same conditions. P1NP is more stable. Renal failure raises CTX and NTX (renally cleared). Recent <strong>fracture healing raises markers</strong> for months.</p>
    <h4>Uses</h4>
    <ul>
      <li><strong>Not for diagnosing osteoporosis</strong> — diagnosis is by <strong>DXA</strong> (T-score ≤ −2.5) or fragility fracture.</li>
      <li><strong>Monitoring response to antiresorptive therapy</strong> (bisphosphonates, denosumab): a <strong>fall in CTX greater than the least significant change</strong> (~30%) or below the premenopausal mean after 3–6 months indicates response. Failure to fall suggests poor <strong>adherence</strong> or absorption (bisphosphonates must be taken fasting) — an <strong>adherence check</strong> is the commonest practical use.</li>
      <li>Anabolic therapy (teriparatide) produces an early rise in P1NP.</li>
      <li>Informing <strong>drug-holiday decisions</strong> and the monitoring after denosumab withdrawal (rebound resorption).</li>
    </ul>
    <h4>Biochemical screen in metabolic bone disease</h4>
    <p><strong>Calcium, phosphate, ALP, 25-OH vitamin D, PTH</strong>, creatinine/eGFR, plus <strong>secondary osteoporosis screening</strong> — TSH, testosterone in men, serum and urine protein electrophoresis (myeloma), coeliac serology, 24-h urine calcium, liver tests.</p>
    <div class="table-wrap"><table>
      <tr><th>Condition</th><th>Ca</th><th>PO₄</th><th>ALP</th><th>PTH</th></tr>
      <tr><td>Osteoporosis</td><td>N</td><td>N</td><td>N</td><td>N</td></tr>
      <tr><td><strong>Osteomalacia</strong> (vitamin D deficiency)</td><td>N/↓</td><td><strong>↓</strong></td><td><strong>↑</strong></td><td>↑</td></tr>
      <tr><td><strong>Paget disease</strong></td><td>N</td><td>N</td><td><strong>↑↑</strong></td><td>N</td></tr>
      <tr><td>Primary hyperparathyroidism</td><td>↑</td><td>↓</td><td>N/↑</td><td>↑</td></tr>
      <tr><td><strong>Renal osteodystrophy</strong> (CKD-MBD)</td><td>↓/N</td><td>↑</td><td>↑</td><td>↑↑</td></tr>
    </table></div>
  `,
  tip: "Stress that markers monitor therapy and adherence but never diagnose osteoporosis — DXA does.",
  sources: ["C1", "C14"]
},
{
  id: "cc80", domain: "chem-renal",
  q: "Discuss the regulation and disorders of magnesium and phosphate, with their laboratory investigation.",
  tags: ["magnesium", "phosphate", "refeeding", "FGF23"],
  keypoints: ["magnesium mostly intracellular and bone", "serum magnesium underestimates deficiency", "hypomagnesaemia causes hypokalaemia and hypocalcaemia", "PTH secretion impaired in magnesium deficiency", "proton pump inhibitors and diuretics", "fractional excretion of magnesium", "phosphate regulated by PTH FGF23 and calcitriol", "refeeding syndrome hypophosphataemia", "DKA treatment hypophosphataemia", "hyperphosphataemia in CKD", "tumour lysis syndrome", "spurious hyperphosphataemia haemolysis and paraprotein", "TmP/GFR", "X-linked hypophosphataemia FGF23 excess", "tumour-induced osteomalacia", "magnesium before potassium and calcium replacement"],
  answer: `
    <h4>Magnesium</h4>
    <p>About 99% of body magnesium is <strong>intracellular and in bone</strong>, so <strong>serum magnesium underestimates deficiency</strong>. It is absorbed in the small intestine and regulated mainly by renal reabsorption in the thick ascending limb (paracellular, claudins) and distal tubule (TRPM6).</p>
    <ul>
      <li><strong>Hypomagnesaemia</strong>: GI loss (diarrhoea, malabsorption), alcoholism, <strong>proton pump inhibitors</strong> (impaired TRPM6 absorption), <strong>diuretics</strong>, aminoglycosides, amphotericin, cisplatin, ciclosporin, diabetes, Gitelman syndrome.</li>
      <li>Consequences: arrhythmias (torsades), tetany, seizures — and it <strong>causes refractory hypokalaemia</strong> (renal K wasting via ROMK) and <strong>hypocalcaemia</strong> (because <strong>PTH secretion and action are impaired in magnesium deficiency</strong>). Therefore <strong>replace magnesium before potassium and calcium</strong>.</li>
      <li>Distinguish renal from GI loss with the <strong>fractional excretion of magnesium</strong> (&gt;2–4% in hypomagnesaemia indicates renal wasting).</li>
      <li>Hypermagnesaemia: renal failure with Mg-containing antacids or laxatives, magnesium sulfate in pre-eclampsia (monitor reflexes and levels).</li>
    </ul>
    <h4>Phosphate</h4>
    <p>Regulated by <strong>PTH</strong> (phosphaturic), <strong>FGF23</strong> (from osteocytes; reduces renal reabsorption and calcitriol) and <strong>calcitriol</strong> (increases absorption).</p>
    <div class="table-wrap"><table>
      <tr><th>Hypophosphataemia</th><th>Hyperphosphataemia</th></tr>
      <tr><td><strong>Refeeding syndrome</strong> (insulin drives phosphate into cells — check before and during feeding in malnourished patients)</td><td><strong>Chronic kidney disease</strong> — drives CKD-mineral bone disorder and vascular calcification</td></tr>
      <tr><td><strong>Treatment of DKA</strong>, respiratory alkalosis, alcoholism</td><td><strong>Tumour lysis syndrome</strong>, rhabdomyolysis, haemolysis</td></tr>
      <tr><td>Primary hyperparathyroidism, vitamin D deficiency</td><td>Hypoparathyroidism, vitamin D toxicity</td></tr>
      <tr><td><strong>X-linked hypophosphataemia</strong> (<em>PHEX</em> mutation, <strong>FGF23 excess</strong>), <strong>tumour-induced osteomalacia</strong>, Fanconi syndrome</td><td>Phosphate enemas or laxatives</td></tr>
      <tr><td>Antacids binding phosphate, iron carboxymaltose infusions (FGF23-mediated)</td><td><strong>Spurious</strong>: <strong>haemolysis</strong>, delayed separation, <strong>paraproteins</strong> (interference), heparin, liposomal amphotericin</td></tr>
    </table></div>
    <h4>Investigation of hypophosphataemia</h4>
    <p>Measure urine phosphate and calculate the <strong>renal tubular maximum reabsorption of phosphate (TmP/GFR)</strong> from fasting paired urine and plasma. A low TmP/GFR with low phosphate indicates renal wasting (PTH or FGF23 excess, Fanconi); normal TmP/GFR points to redistribution or poor intake. Then PTH, 25-OH-D, 1,25-(OH)₂D and intact FGF23 as indicated. Severe hypophosphataemia (&lt;0.3 mmol/L) causes muscle weakness, respiratory failure, haemolysis and rhabdomyolysis.</p>
  `,
  tip: "The magnesium–potassium–calcium link and refeeding syndrome are the high-yield clinical points.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc81", domain: "chem-renal",
  q: "Explain the chemical principles of urine dipstick tests and their interferences, and discuss the role of urinalysis in renal and metabolic disease.",
  tags: ["urinalysis", "dipstick", "interference", "sediment"],
  keypoints: ["glucose oxidase peroxidase double sequential", "protein error of indicators tetrabromophenol blue", "dipstick detects albumin not light chains", "blood pseudoperoxidase activity of haemoglobin", "haematuria versus haemoglobinuria versus myoglobinuria", "ketones nitroprusside acetoacetate", "nitrite Griess reaction", "leukocyte esterase indoxyl", "specific gravity pKa change", "bilirubin diazo and urobilinogen Ehrlich", "ascorbic acid false negatives", "highly alkaline urine false positive protein", "first-morning midstream sample", "examine within 2 hours", "automated sediment and flow cytometry", "casts red cell casts glomerular"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Pad</th><th>Principle</th><th>False positive</th><th>False negative</th></tr>
      <tr><td><strong>Glucose</strong></td><td><strong>Glucose oxidase–peroxidase</strong> double sequential reaction; specific for glucose</td><td>Oxidising cleaners, peroxide</td><td><strong>Ascorbic acid</strong>, high ketones</td></tr>
      <tr><td><strong>Protein</strong></td><td><strong>Protein error of indicators</strong> (tetrabromophenol blue) — <strong>detects albumin, not light chains</strong></td><td><strong>Highly alkaline urine</strong>, quaternary ammonium detergents</td><td>Non-albumin proteins (Bence Jones), dilute urine</td></tr>
      <tr><td><strong>Blood</strong></td><td><strong>Pseudoperoxidase activity of haemoglobin</strong> (also myoglobin)</td><td>Myoglobin, oxidising agents, microbial peroxidases, menstruation</td><td>Ascorbic acid, high SG</td></tr>
      <tr><td><strong>Ketones</strong></td><td><strong>Nitroprusside</strong> reacts with <strong>acetoacetate</strong> (and acetone with glycine)</td><td>Captopril, mesna, levodopa</td><td>Does not detect β-hydroxybutyrate</td></tr>
      <tr><td><strong>Nitrite</strong></td><td><strong>Griess reaction</strong> — Gram-negative bacteria reduce nitrate</td><td>Phenazopyridine, contamination</td><td>Non-reducing organisms (<em>Enterococcus</em>, <em>S. saprophyticus</em>), short bladder time, ascorbic acid</td></tr>
      <tr><td><strong>Leukocyte esterase</strong></td><td>Granulocyte esterase hydrolyses an <strong>indoxyl</strong> ester</td><td>Vaginal contamination, <em>Trichomonas</em></td><td>High glucose, protein, some antibiotics</td></tr>
      <tr><td><strong>Specific gravity</strong></td><td>Polyelectrolyte <strong>pKa change</strong> with ionic strength</td><td>Protein, ketoacids</td><td>Glucose and urea do not register (non-ionic) — alkaline urine reads low</td></tr>
      <tr><td><strong>Bilirubin / urobilinogen</strong></td><td><strong>Diazo</strong> coupling / <strong>Ehrlich</strong> (or diazo) reaction</td><td>Drug colours (phenazopyridine)</td><td>Light exposure, delay, <strong>ascorbic acid</strong></td></tr>
    </table></div>
    <h4>Sample and microscopy</h4>
    <p>Prefer a <strong>first-morning midstream sample</strong>, <strong>examined within 2 hours</strong> (cells and casts lyse; bacteria multiply). Microscopy, <strong>automated sediment analysis or urine flow cytometry</strong> identifies red cells (dysmorphic red cells and acanthocytes suggest glomerular bleeding), white cells, crystals, organisms and <strong>casts</strong>: hyaline (normal or dehydration), granular (ATN), <strong>red cell casts (glomerulonephritis)</strong>, white cell casts (pyelonephritis, interstitial nephritis), fatty casts and oval fat bodies (nephrotic syndrome), waxy casts (chronic disease).</p>
    <h4>Clinical role</h4>
    <ul>
      <li>Distinguish <strong>haematuria (intact red cells on microscopy) from haemoglobinuria (blood positive, no cells — intravascular haemolysis) and myoglobinuria</strong> (rhabdomyolysis; raised CK, clear plasma).</li>
      <li>Screen for diabetes (glycosuria), ketosis, UTI (nitrite plus esterase; confirm by culture), liver disease and haemolysis (bilirubin, urobilinogen), and kidney disease (protein, blood, casts) — always confirming abnormal protein with a quantitative UACR or UPCR.</li>
      <li>Laboratory QC of dipsticks: positive and negative controls, storage away from moisture, reader calibration and operator competency.</li>
    </ul>
  `,
  tip: "Ascorbic acid as a cause of false negatives and 'protein pad misses light chains' are the classic interference points.",
  sources: ["C2", "C3", "C1"]
}
);
