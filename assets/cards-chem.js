/* Flashcards — Clinical Chemistry. Format: [front, back] pairs grouped by domain and sources. */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-qc-", "chem-qc", ["C4", "C5", "C1"], [
    ["Westgard 1<sub>2s</sub> rule — rejection or warning?", "<b>Warning</b> only. It triggers inspection using the other rules."],
    ["Which Westgard rules detect <b>random</b> error?", "<b>1<sub>3s</sub></b> and <b>R<sub>4s</sub></b>."],
    ["Which Westgard rules detect <b>systematic</b> error?", "<b>2<sub>2s</sub>, 4<sub>1s</sub>, 10<sub>x̄</sub></b> (and large shifts by 1<sub>3s</sub>)."],
    ["Sigma metric formula", "Sigma = (TEa − |bias|) ÷ CV (all in %)."],
    ["Sigma value regarded as 'world class'", "<b>≥ 6</b> σ. Below 3 σ the method is not fit for purpose."],
    ["Total analytical error formula (Westgard)", "TE = |bias| + 2 SD (or 1.65 SD)."],
    ["Minimum number of reference individuals to <b>establish</b> a reference interval (non-parametric)", "<b>120</b> per partition (CLSI EP28)."],
    ["How many samples to <b>verify/transfer</b> a reference interval, and the acceptance rule?", "<b>20</b> samples; accept if <b>≤ 2</b> fall outside."],
    ["Method comparison: minimum number of patient samples (CLSI EP09)", "At least <b>40</b>, covering the reportable range."],
    ["Regression methods preferred for method comparison (both methods have error)", "<b>Deming</b> or <b>Passing–Bablok</b> regression; Bland–Altman difference plot."],
    ["IQC vs EQA — what does each mainly assess?", "IQC: <b>precision/stability</b> before release. EQA: <b>accuracy (bias)</b> vs peers — retrospective."],
    ["EQA z-score: questionable and unacceptable limits", "|z| &gt; 2 questionable; |z| &gt; 3 unacceptable."],
    ["Expanded measurement uncertainty", "U = k × u<sub>c</sub>, usually k = 2 (≈95% coverage); components combined in quadrature."],
    ["CLSI order of draw", "Blood culture → citrate → serum (± gel) → heparin → EDTA → fluoride/oxalate."],
    ["Effect of EDTA contamination on K and Ca", "<b>K falsely high</b>, <b>Ca falsely low</b> (also low ALP, Mg)."],
    ["Glucose loss in unseparated blood without fluoride", "About <b>5–7% per hour</b> at room temperature."],
    ["ISO standard for medical laboratory quality and competence", "<b>ISO 15189:2022</b> (now includes POCT requirements)."],
    ["DOH order on licensing of clinical laboratories (Philippines)", "<b>AO 2021-0037</b> (revised rules and regulations)."],
    ["NRL for clinical chemistry in the Philippines", "<b>Lung Center of the Philippines</b>."],
    ["Beer–Lambert law", "A = ε · b · c (absorbance ∝ concentration × path length)."]
  ]);

  add("fc-carb-", "chem-carb", ["C6", "C1", "C2"], [
    ["Fasting plasma glucose cut-off for diabetes", "<b>≥ 7.0 mmol/L (126 mg/dL)</b>."],
    ["2-h 75 g OGTT cut-off for diabetes", "<b>≥ 11.1 mmol/L (200 mg/dL)</b>."],
    ["HbA1c cut-off for diabetes and prediabetes range", "Diabetes <b>≥ 6.5% (48 mmol/mol)</b>; prediabetes <b>5.7–6.4%</b>."],
    ["Impaired fasting glucose range (ADA)", "5.6–6.9 mmol/L (100–125 mg/dL)."],
    ["IADPSG one-step GDM cut-offs (75 g)", "Fasting ≥ 5.1, 1-h ≥ 10.0, 2-h ≥ 8.5 mmol/L — <b>any one</b> value."],
    ["HbA1c: chemical bond formed", "Stable <b>ketoamine</b> (Amadori product) at the N-terminal valine of the β chain."],
    ["NGSP–IFCC master equation", "NGSP % = 0.0915 × IFCC (mmol/mol) + 2.15."],
    ["Estimated average glucose (mg/dL) from HbA1c", "eAG = 28.7 × A1c − 46.7."],
    ["HbA1c method least affected by Hb variants", "<b>Boronate affinity</b> chromatography."],
    ["Reference method for glucose", "<b>Hexokinase</b> (G-6-PD indicator reaction, NADPH at 340 nm)."],
    ["Glucose oxidase (Trinder) — main interferents", "Reducing agents (ascorbate, uric acid, bilirubin) → <b>falsely low</b>."],
    ["Meter strips that give false-high glucose with maltose/icodextrin", "<b>GDH-PQQ</b> glucose dehydrogenase strips."],
    ["Dominant ketone body in DKA, and which test misses it?", "<b>β-hydroxybutyrate</b>; missed by nitroprusside (detects acetoacetate/acetone)."],
    ["Insulinoma vs exogenous insulin: C-peptide", "Insulinoma: C-peptide <b>high</b>. Exogenous insulin: C-peptide <b>low</b>."],
    ["Whipple's triad", "Symptoms of hypoglycaemia + low plasma glucose + relief when glucose is raised."],
    ["Galactosaemia urine screening clue", "Reducing substance (Clinitest) <b>positive</b>, glucose oxidase dipstick <b>negative</b>."],
    ["GSD type Ia biochemical triad (besides hypoglycaemia)", "Lactic acidosis, <b>hyperuricaemia</b>, hypertriglyceridaemia."],
    ["Philippine Newborn Screening Act", "<b>RA 9288</b> (2004); expanded NBS since 2014."]
  ]);

  add("fc-lip-", "chem-lipid", ["C8", "C1", "C2"], [
    ["Friedewald LDL-C formula (mmol/L and mg/dL)", "LDL = TC − HDL − TG/<b>2.2</b> (mmol/L); TG/<b>5</b> (mg/dL)."],
    ["Friedewald is invalid above which TG?", "<b>4.5 mmol/L (400 mg/dL)</b>; also in type III and chylomicronaemia."],
    ["Activator of lipoprotein lipase", "<b>Apo C-II</b>."],
    ["Activator of LCAT", "<b>Apo A-I</b>."],
    ["Ligand for the LDL receptor", "<b>Apo B-100</b> (and apo E)."],
    ["Apolipoprotein unique to chylomicrons", "<b>Apo B-48</b>."],
    ["Lp(a) structure", "LDL-like particle with <b>apo(a)</b> disulfide-linked to apo B-100; apo(a) homologous to plasminogen."],
    ["Preferred reporting unit for Lp(a)", "<b>nmol/L</b> (particle number), isoform-insensitive assay."],
    ["Why apo B is a measure of atherogenic particle number", "Each VLDL, IDL, LDL and Lp(a) particle carries <b>one apo B</b>."],
    ["Three genes causing familial hypercholesterolaemia", "<b>LDLR</b>, <b>APOB</b>, <b>PCSK9</b> (gain of function)."],
    ["Standing plasma: creamy layer over clear infranatant", "Type <b>I</b> — chylomicrons."],
    ["Standing plasma: turbid throughout, no cream layer", "Type <b>IV</b> — VLDL."],
    ["Broad β band on lipoprotein electrophoresis", "Type <b>III</b> dysbetalipoproteinaemia (apo E2/E2)."],
    ["Reference method for LDL-C", "<b>Beta-quantification</b> (ultracentrifugation + precipitation)."]
  ]);

  add("fc-pro-", "chem-protein", ["C1", "C9", "C3"], [
    ["β–γ bridging on SPEP", "<b>Cirrhosis</b> (polyclonal IgA)."],
    ["SPEP pattern in nephrotic syndrome", "↓↓ albumin, <b>↑↑ α₂</b> (α₂-macroglobulin), ↓ γ."],
    ["Normal serum free light chain κ/λ ratio", "<b>0.26–1.65</b>."],
    ["CRAB criteria", "Calcium ↑, Renal failure, Anaemia, Bone lesions."],
    ["MI definition by troponin", "Rise and/or fall with ≥1 value <b>&gt; 99th percentile URL</b> + evidence of ischaemia."],
    ["Definition of a high-sensitivity troponin assay", "CV ≤ 10% at the 99th percentile and measurable in ≥ 50% of healthy people."],
    ["Zero-order enzyme kinetics means…", "Substrate in excess (≫ Km) so rate depends only on <b>enzyme</b> concentration."],
    ["Competitive inhibition: effect on Km and Vmax", "Km <b>↑</b>, Vmax unchanged."],
    ["Non-competitive inhibition: effect on Km and Vmax", "Km unchanged, Vmax <b>↓</b>."],
    ["ALP isoenzymes: heat-stability order", "Placental (most stable) &gt; intestinal &gt; liver &gt; <b>bone</b> ('bone burns')."],
    ["Flipped LD pattern", "LD1 &gt; LD2 — myocardial infarction, haemolysis."],
    ["Preferred enzyme for acute pancreatitis and why", "<b>Lipase</b> — more specific, raised longer (8–14 days)."],
    ["High-dose hook effect", "Very high antigen saturates both antibodies in a one-step sandwich assay → <b>falsely low</b>; dilute."],
    ["Biotin interference in sandwich vs competitive immunoassays", "Sandwich: <b>falsely low</b>. Competitive: <b>falsely high</b>."],
    ["Procalcitonin is suppressed in viral infection by…", "<b>Interferon-γ</b>."],
    ["NT-proBNP rule-out cut-off in acute heart failure", "<b>&lt; 300 pg/mL</b> (BNP &lt; 100 pg/mL)."],
    ["Natriuretic peptide affected by sacubitril–valsartan", "<b>BNP</b> rises (neprilysin inhibition); NT-proBNP unaffected."],
    ["Main cytokine driving hepatic acute-phase protein synthesis", "<b>IL-6</b>."],
    ["Negative acute-phase proteins", "Albumin, transferrin, transthyretin (prealbumin), RBP."],
    ["Macroprolactin screening method", "<b>PEG precipitation</b>; recovery &lt; 40% suggests macroprolactinaemia."]
  ]);

  add("fc-ren-", "chem-renal", ["C7", "C15", "C1"], [
    ["Anion gap formula", "AG = Na − (Cl + HCO₃⁻); ~8–12 mmol/L (method-dependent)."],
    ["Winter's formula", "Expected pCO₂ = 1.5 × HCO₃⁻ + 8 ± 2."],
    ["Chronic respiratory acidosis: expected HCO₃⁻ rise", "<b>3.5–4 mmol/L per 10 mmHg</b> rise in pCO₂ (acute: 1 per 10)."],
    ["Delta ratio &gt; 2 suggests…", "High-AG acidosis <b>plus metabolic alkalosis</b>."],
    ["Calculated osmolality (mmol/L units)", "2Na + glucose + urea."],
    ["Osmolal gap normal value; raised gap + high AG acidosis suggests", "&lt; 10 mOsm/kg; <b>methanol / ethylene glycol</b>."],
    ["Osmometer method needed for volatile alcohols", "<b>Freezing-point depression</b> (not vapour pressure)."],
    ["GOLDMARK mnemonic", "Glycols, 5-Oxoproline, L-lactate, D-lactate, Methanol, Aspirin, Renal failure, Ketoacidosis."],
    ["Urine anion gap negative in normal-AG acidosis suggests", "<b>GI bicarbonate loss</b> (diarrhoea) — NH₄⁺ excretion intact."],
    ["Corrected Na in hyperglycaemia", "Add ~2.4 mmol/L per 5.5 mmol/L (100 mg/dL) glucose above normal."],
    ["Pseudohyponatraemia occurs with which methods?", "<b>Indirect ISE</b> and flame photometry (sample diluted); not direct ISE."],
    ["SIADH: urine osmolality and urine Na", "Urine osm <b>&gt; 100</b> mOsm/kg; urine Na <b>&gt; 30</b> mmol/L; euvolaemic."],
    ["Maximum safe Na correction in chronic hyponatraemia", "<b>8–10 mmol/L per 24 h</b> (osmotic demyelination risk)."],
    ["Spurious hyperkalaemia with thrombocytosis — how to prove?", "Serum K &gt; plasma K by &gt; 0.4 mmol/L."],
    ["FENa formula and pre-renal cut-off", "(UNa × PCr)/(PNa × UCr) × 100; <b>&lt; 1%</b> pre-renal, &gt; 2% ATN."],
    ["KDIGO AKI creatinine criterion", "Rise ≥ 26.5 µmol/L (0.3 mg/dL) in 48 h, or ≥ 1.5 × baseline in 7 days."],
    ["CKD definition (duration)", "Abnormal kidney structure or function for <b>&gt; 3 months</b>."],
    ["Recommended eGFR equation (KDIGO 2024)", "<b>CKD-EPI 2021</b>, race-free; creatinine–cystatin C when more accuracy needed."],
    ["KDIGO albuminuria categories (ACR mg/g)", "A1 &lt; 30; A2 30–300; A3 &gt; 300."],
    ["Dipstick protein misses which proteins?", "<b>Light chains</b> (Bence Jones) and other non-albumin proteins."],
    ["Adjusted calcium formula (mmol/L)", "Ca + 0.02 × (40 − albumin g/L)."],
    ["Hypercalcaemia: PTH suppressed — most common cause", "<b>Malignancy</b> (PTHrP, bone metastases, myeloma)."],
    ["FHH clue", "Urine Ca:Cr clearance ratio <b>&lt; 0.01</b> (CASR mutation)."],
    ["Stone type in alkaline urine with urease-producing bacteria", "<b>Struvite</b> (magnesium ammonium phosphate)."],
    ["Radiolucent stone formed in acid urine", "<b>Uric acid</b>."],
    ["K⁺ ion-selective electrode membrane", "<b>Valinomycin</b>."]
  ]);

  add("fc-liv-", "chem-liver", ["C1", "C3"], [
    ["Enzyme that conjugates bilirubin", "<b>UGT1A1</b> (bilirubin UDP-glucuronosyltransferase)."],
    ["Urine urobilinogen in obstructive jaundice", "<b>Decreased/absent</b>; bilirubin present in urine."],
    ["Acholuric jaundice means…", "No bilirubin in urine — <b>unconjugated</b> hyperbilirubinaemia (e.g. haemolysis)."],
    ["δ-bilirubin", "Conjugated bilirubin covalently bound to albumin; half-life ~19 days."],
    ["Gilbert syndrome genetics", "UGT1A1 promoter TA-repeat; mild unconjugated rise with fasting."],
    ["R ratio and cut-offs", "(ALT/ULN) ÷ (ALP/ULN): &gt; 5 hepatocellular; &lt; 2 cholestatic."],
    ["AST:ALT &gt; 2 with high GGT suggests", "<b>Alcoholic</b> liver disease."],
    ["Best acute marker of liver synthetic function", "<b>PT/INR</b> (factor VII half-life ~6 h)."],
    ["HBV window period marker", "<b>Anti-HBc IgM</b> only (HBsAg and anti-HBs negative)."],
    ["Chronic HBV definition", "HBsAg positive for <b>&gt; 6 months</b>."],
    ["Protective anti-HBs level after vaccination", "<b>≥ 10 mIU/mL</b>."],
    ["Faecal elastase indicating severe exocrine insufficiency", "<b>&lt; 100 µg/g</b> stool (&lt; 200 mild)."],
    ["Ammonia sample handling", "EDTA/heparin (not ammonium heparin), <b>on ice</b>, separate within 15–30 min, no haemolysis."],
    ["Paracetamol level timing", "<b>≥ 4 h</b> after single acute ingestion; plot on nomogram."],
    ["Toxic paracetamol metabolite", "<b>NAPQI</b> (detoxified by glutathione)."],
    ["Iron studies in anaemia of inflammation", "Iron ↓, TIBC ↓/N, ferritin N/↑, hepcidin ↑."],
    ["Master regulator of iron absorption", "<b>Hepcidin</b> (degrades ferroportin)."],
    ["Ferritin cut-off for iron deficiency (no inflammation)", "<b>&lt; 30 µg/L</b>."]
  ]);

  add("fc-end-", "chem-endo", ["C14", "C1"], [
    ["Why TSH is the first-line thyroid test", "Log-linear relationship: 2-fold FT4 change → ~100-fold TSH change."],
    ["TSH ↓, FT4 ↑, TRAb positive", "<b>Graves' disease</b>."],
    ["Biotin effect on thyroid tests", "False <b>low TSH</b>, false <b>high FT4/FT3</b> — mimics Graves."],
    ["Overnight 1 mg DST — failure to suppress cut-off", "08:00 cortisol <b>&gt; 50 nmol/L (1.8 µg/dL)</b>."],
    ["ACTH level indicating ACTH-independent Cushing", "<b>&lt; 2 pmol/L (10 pg/mL)</b>."],
    ["Test that separates pituitary from ectopic ACTH", "<b>Bilateral inferior petrosal sinus sampling</b> (central:peripheral ≥ 2 basal, ≥ 3 after CRH)."],
    ["Primary vs secondary adrenal insufficiency — key electrolyte", "Primary: <b>hyperkalaemia</b> (aldosterone deficient); secondary: normal K."],
    ["Marker raised in 21-hydroxylase CAH", "<b>17-hydroxyprogesterone</b>."],
    ["Screening test for primary aldosteronism", "<b>Aldosterone-to-renin ratio</b> (correct hypokalaemia first)."],
    ["Best test for phaeochromocytoma", "<b>Plasma free metanephrines</b> (supine) or urine fractionated metanephrines, LC-MS/MS."],
    ["Ovulation confirmed by", "Mid-luteal progesterone <b>&gt; 30 nmol/L</b>."],
    ["Rotterdam criteria for PCOS", "2 of 3: oligo/anovulation, hyperandrogenism, polycystic ovarian morphology."],
    ["Free androgen index", "FAI = testosterone ÷ SHBG × 100."],
    ["Best marker of vitamin D status", "<b>25-hydroxyvitamin D</b>."],
    ["Vitamin D deficiency threshold (25-OH-D)", "<b>&lt; 30 nmol/L (12 ng/mL)</b>."],
    ["Philippine law on salt iodisation", "<b>RA 8172</b> (ASIN law)."]
  ]);

  add("fc-tox-", "chem-tox", ["C1", "C2"], [
    ["Time to reach steady state", "About <b>5 half-lives</b>."],
    ["Drug with zero-order (saturable) kinetics", "<b>Phenytoin</b>."],
    ["Digoxin sampling time", "<b>≥ 6–8 h</b> post-dose."],
    ["Lithium sampling time and tube to avoid", "<b>12 h</b> post-dose; never lithium heparin."],
    ["Sample matrix for tacrolimus/cyclosporine", "<b>EDTA whole blood</b>, trough."],
    ["Vancomycin target (AUC-guided)", "AUC/MIC <b>400–600</b>."],
    ["Confirmation method for drugs of abuse", "<b>GC-MS or LC-MS/MS</b> with chain of custody."],
    ["Philippine law governing drug testing", "<b>RA 9165</b> (Comprehensive Dangerous Drugs Act)."],
    ["Lead inhibits which haem enzymes?", "<b>δ-ALA dehydratase</b> and <b>ferrochelatase</b>."],
    ["CDC blood lead reference value for children", "<b>3.5 µg/dL</b>."],
    ["Basophilic stippling in lead poisoning is due to inhibition of…", "<b>Pyrimidine 5'-nucleotidase</b>."],
    ["Why pulse oximetry is misleading in CO poisoning", "Reads COHb as O₂Hb — SpO₂ <b>falsely normal</b>."],
    ["Antidote for methaemoglobinaemia and its contraindication", "<b>Methylene blue</b>; contraindicated in <b>G6PD deficiency</b>."],
    ["Marker that separates B12 from folate deficiency", "<b>Methylmalonic acid</b> (↑ in B12 deficiency only)."],
    ["Red cell vs plasma cholinesterase in organophosphate poisoning", "RBC AChE = synaptic inhibition; plasma BChE more sensitive, less specific."],
    ["Wilson disease biochemistry", "Low ceruloplasmin, high urine copper, high hepatic copper."]
  ]);
})();
