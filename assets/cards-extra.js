/* Flashcards — additional cards matching the expanded essay topics */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  /* ---- Microbiology ---- */
  add("fc-fd2-", "foundations", ["S1", "S2"], [
    ["Mordant in the Gram stain", "<b>Iodine</b> — forms the crystal violet–iodine complex."],
    ["Decolouriser in the acid-fast stain", "<b>Acid-alcohol</b> (3% HCl in ethanol); weak acid (1%) for <i>Nocardia</i> and coccidia."],
    ["Why vancomycin does not work on Gram-negatives", "It is <b>too large to cross the outer membrane</b>."],
    ["Organism intrinsically resistant to all β-lactams because it lacks a cell wall", "<b><i>Mycoplasma</i></b>."],
    ["Secretion system that injects effectors directly into host cells", "<b>Type III</b> (injectisome)."],
    ["Secretion system that transfers DNA as well as protein", "<b>Type IV</b> (conjugation-related) — e.g. <i>H. pylori</i> CagA."],
    ["Mycobacterial secretion system and its key substrates", "<b>Type VII (ESX-1)</b> — ESAT-6 and CFP-10."],
    ["Core of a bacterial endospore is rich in", "<b>Calcium–dipicolinic acid</b>."],
    ["Autoclave conditions used as the sterilisation reference", "<b>121 °C for 15 minutes</b> (moist heat)."],
    ["Persister cells show tolerance, not resistance — what does that mean?", "They survive antibiotics while dormant, but the <b>MIC is unchanged</b>."],
    ["Alarmone of the stringent response", "<b>ppGpp</b>."],
    ["Why alcohol hand rub fails against <i>C. difficile</i>", "It does not kill <b>spores</b> — use soap and water."]
  ]);

  add("fc-im2-", "immunology", ["S1", "S3", "S16"], [
    ["Form of IgA in secretions", "<b>Dimeric IgA</b> joined by the <b>J chain</b>."],
    ["Receptor that transports IgA across epithelium", "<b>Polymeric immunoglobulin receptor (pIgR)</b>; its remnant is the <b>secretory component</b>."],
    ["Bacteria that produce IgA1 protease", "<b><i>Neisseria</i>, <i>H. influenzae</i>, <i>S. pneumoniae</i></b>."],
    ["Does secretory IgA activate complement well?", "<b>No</b> — it clears pathogens without inflammation."],
    ["Two patterns of IRIS", "<b>Paradoxical</b> (known infection worsens) and <b>unmasking</b> (hidden infection appears)."],
    ["ART timing in TB with CD4 <50", "Start ART within <b>2 weeks</b> of TB treatment."],
    ["ART timing in cryptococcal meningitis", "<b>Defer 4–6 weeks</b> — earlier ART increases mortality."],
    ["Should ART be stopped in IRIS?", "<b>No</b> — continue ART; add corticosteroids for TB-IRIS."],
    ["Strongest serological evidence of recent infection", "<b>Seroconversion</b> or a <b>fourfold rise</b> in paired sera."],
    ["Meaning of high IgG avidity", "Infection occurred <b>more than ~3–5 months ago</b>."],
    ["Why IgM in a neonate indicates congenital infection", "<b>IgM does not cross the placenta</b>; maternal IgG persists 12–18 months."],
    ["Cause of a false-negative RPR in secondary syphilis", "<b>Prozone effect</b> — dilute and retest."]
  ]);

  add("fc-gp2-", "gpos", ["S2", "S4"], [
    ["Viridans streptococci vs <i>S. pneumoniae</i>", "Viridans are <b>optochin resistant and bile insoluble</b>."],
    ["Streptococcus linked to colon cancer", "<b><i>S. gallolyticus</i></b> (bovis group) — do a colonoscopy."],
    ["Streptococcus group causing brain and liver abscesses", "<b>Anginosus group</b> (esp. <i>S. intermedius</i>)."],
    ["Streptococcus causing dental caries", "<b><i>S. mutans</i></b>."],
    ["Coagulase-negative staphylococcus that behaves like <i>S. aureus</i>", "<b><i>S. lugdunensis</i></b> — destructive native valve endocarditis."],
    ["Gene cluster for <i>S. epidermidis</i> biofilm", "<b><i>ica</i> operon</b> → polysaccharide intercellular adhesin."],
    ["Differential time to positivity suggesting catheter infection", "Catheter bottle positive <b>≥2 hours earlier</b> than peripheral."],
    ["Technique that dislodges biofilm from an explanted prosthesis", "<b>Sonication</b> of the implant."],
    ["Antibiotic added for retained staphylococcal implants", "<b>Rifampicin</b> (always with a companion drug)."],
    ["Culture incubation period for prosthetic joint infection", "<b>14 days</b> (indolent organisms)."]
  ]);

  add("fc-tb2-", "mycobacteria", ["S6", "S12"], [
    ["Preferred CSF test for TB meningitis", "<b>Xpert MTB/RIF Ultra</b> on a large volume (≥6 mL) of CSF."],
    ["Pleural fluid marker supporting TB", "<b>Adenosine deaminase (ADA)</b> &gt;40 U/L."],
    ["Highest-yield specimen in pleural TB", "<b>Pleural biopsy</b> (histology + culture, ~80%)."],
    ["Treatment duration for CNS tuberculosis", "<b>9–12 months</b>, with corticosteroids."],
    ["Extrapulmonary sites where steroids improve survival", "<b>Meningitis and pericarditis</b>."],
    ["Short-course preventive therapy regimens", "<b>3HP</b> (weekly rifapentine + isoniazid × 12) and <b>1HP</b> (daily × 1 month)."],
    ["TPT for contacts of MDR-TB", "<b>6 months of levofloxacin</b>."],
    ["Advantage of IGRA over the tuberculin skin test", "<b>Not affected by BCG</b>; single visit."],
    ["Digestion–decontamination reagent for sputum culture", "<b>NALC–NaOH</b> (contact ≤15 min)."],
    ["Acceptable culture contamination rate", "<b>2–5%</b> — too low means over-decontamination."],
    ["Rapid test confirming <i>M. tuberculosis</i> complex from culture", "<b>MPT64 antigen</b> immunochromatographic test."],
    ["Biosafety level required for TB culture", "<b>BSL-3</b>."]
  ]);

  add("fc-my2-", "mycology", ["S18", "S2"], [
    ["Dimorphic fungus with a red pigment at 25 °C", "<b><i>Talaromyces marneffei</i></b>."],
    ["How <i>T. marneffei</i> yeast divides (vs <i>Histoplasma</i>)", "By <b>fission</b>, forming arthroconidia with a <b>central septum</b> (Histoplasma buds)."],
    ["Reservoir of <i>Talaromyces marneffei</i>", "<b>Bamboo rats</b>; endemic in Southeast Asia."],
    ["Induction therapy for disseminated talaromycosis", "<b>Amphotericin B</b>, then itraconazole (IVAP trial)."],
    ["Reference methods for antifungal susceptibility", "<b>CLSI M27 (yeasts) / M38 (moulds)</b> and EUCAST."],
    ["Clinical breakpoint vs epidemiological cutoff value", "Breakpoint predicts outcome; <b>ECV detects non-wild-type (acquired) resistance</b>."],
    ["Azole with mandatory therapeutic drug monitoring", "<b>Voriconazole</b> (CYP2C19, non-linear kinetics)."],
    ["Environmental azole-resistance mutation in <i>A. fumigatus</i>", "<b>TR34/L98H</b> in <i>cyp51A</i>."],
    ["Echinocandin resistance mechanism", "<b><i>FKS</i></b> mutations."],
    ["Subcutaneous mycosis with nodular lymphangitis", "<b>Sporotrichosis</b> — asteroid bodies, cigar-shaped yeasts."],
    ["Diagnostic cell of chromoblastomycosis", "<b>Sclerotic (muriform) bodies</b>."],
    ["Eumycetoma vs actinomycetoma grains", "Eumycetoma: <b>black</b>, broad hyphae → antifungals + surgery. Actinomycetoma: <b>pale</b>, thin filaments → co-trimoxazole combination."]
  ]);

  add("fc-am2-", "amr", ["S8", "S7", "S14"], [
    ["Test confirming carbapenemase production", "<b>mCIM</b>; add <b>eCIM with EDTA</b> to detect metallo-enzymes."],
    ["Treatment for metallo-β-lactamase producers", "<b>Aztreonam + ceftazidime–avibactam</b>, or cefiderocol."],
    ["Treatment for KPC producers", "<b>Ceftazidime–avibactam</b>, meropenem–vaborbactam, imipenem–relebactam."],
    ["Carbapenemase class not covered by vaborbactam/relebactam", "<b>OXA-48</b> (class D) and metallo-enzymes."],
    ["Test for inducible clindamycin resistance", "<b>D-test</b> (<i>erm</i> genes, MLS<sub>b</sub>)."],
    ["vanA vs vanB", "vanA: vancomycin <b>and</b> teicoplanin resistant. vanB: teicoplanin often <b>susceptible</b>."],
    ["Gene causing pan-aminoglycoside resistance", "<b>16S rRNA methyltransferase</b> (<i>rmtB</i>, <i>armA</i>)."],
    ["Enzyme destroying tigecycline", "<b><i>tet</i>(X) monooxygenase</b>."],
    ["Linezolid resistance determinants", "<b><i>cfr</i></b>, 23S rRNA <b>G2576T</b>, <i>optrA</i>, <i>poxtA</i>."],
    ["Philippine AMR surveillance programme and its reference laboratory", "<b>ARSP</b>, coordinated by <b>RITM</b>."],
    ["DOH order requiring hospital antimicrobial stewardship", "<b>AO 2016-0003</b>."],
    ["Most pressing hospital resistance problem in Philippine ICUs", "<b>Carbapenem-resistant <i>Acinetobacter baumannii</i></b> and <i>K. pneumoniae</i>."]
  ]);

  add("fc-dx2-", "diagnostics", ["S12", "S22"], [
    ["Specimen that must never be refrigerated", "<b>CSF</b> (and blood cultures) — kills <i>N. meningitidis</i> and <i>H. influenzae</i>."],
    ["Transport medium for stool pathogens", "<b>Cary–Blair</b>."],
    ["Preservative for delayed urine culture", "<b>Boric acid</b> (or refrigerate)."],
    ["Why swabs are inferior to tissue or fluid", "Fewer organisms, no quantification, no histology."],
    ["Sputum rejection criterion", "<b>&gt;10 squamous epithelial cells per low-power field</b> (saliva)."],
    ["Specimens routinely rejected in microbiology", "Foley catheter tips, 24-hour sputum/urine, dry swabs, duplicate same-day specimens, formalin-fixed tissue for culture."],
    ["Strength and weakness of rapid antigen tests", "<b>High specificity, lower sensitivity</b> — a negative may need culture or NAAT."],
    ["What makes rapid diagnostics improve stewardship", "Pairing them with a <b>stewardship team</b> that acts on the result."],
    ["Biomarker used to stop antibiotics", "<b>Procalcitonin</b> (&lt;0.25 µg/L or ≥80% fall from peak)."],
    ["Key limitation of syndromic PCR panels", "They detect only the targets included, and <b>cannot confirm viability or full susceptibility</b>."]
  ]);

  /* ---- Clinical chemistry ---- */
  add("fc-qc2-", "chem-qc", ["C1", "C4", "C5"], [
    ["Analyte effects of haemolysis", "<b>↑ K, LDH, AST, phosphate, magnesium</b>; spectral interference."],
    ["Why lipaemia causes pseudohyponatraemia", "<b>Volume displacement</b> of plasma water with indirect ISE (direct ISE unaffected)."],
    ["Preferred control material", "<b>Third-party, unassayed</b> control at <b>decision levels</b>."],
    ["How many QC points to set a mean and SD?", "<b>≥20 values over 20 separate days</b> — never use insert ranges as limits."],
    ["Patient-based real-time QC methods", "<b>Moving average / average of normals</b>, moving median, delta checks."],
    ["What QC cannot detect", "<b>Patient-specific errors</b> — wrong patient, interference, pre-analytical problems."],
    ["Desirable imprecision from biological variation", "<b>CVa ≤ 0.5 × CVi</b>; bias ≤ 0.25 × √(CVi² + CVg²)."],
    ["Index of individuality <0.6 means", "The <b>population reference interval is insensitive</b> — use serial results and RCV."],
    ["Reference change value formula (95%, bidirectional)", "<b>RCV = 2.77 × √(CVa² + CVi²)</b>."],
    ["Three Milan models for performance specifications", "<b>Outcome-based</b>, <b>biological variation</b>, <b>state of the art</b>."],
    ["Typical autoverification rules", "In range, QC in control, serum indices acceptable, delta check passed, critical values held for review."],
    ["Requirement before any middleware rule goes live", "<b>Documented validation</b> with test cases, audit trail and version control."]
  ]);

  add("fc-carb2-", "chem-carb", ["C6", "C1"], [
    ["CGM time-in-range target", "<b>&gt;70%</b> at 3.9–10.0 mmol/L (70–180 mg/dL)."],
    ["CGM time-below-range and variability targets", "TBR <b>&lt;4%</b>; CV <b>&lt;36%</b>."],
    ["Alternative glycaemic markers when HbA1c is invalid", "<b>Fructosamine / glycated albumin</b> (2–3 weeks)."],
    ["Preferred ketone test", "<b>Capillary β-hydroxybutyrate</b>, not urine nitroprusside."],
    ["Diagnostic osmolality in HHS", "Effective osmolality <b>&gt;320 mOsm/kg</b> with glucose &gt;33 mmol/L."],
    ["Type A vs type B lactic acidosis", "A = <b>tissue hypoxia</b>; B = no hypoxia (metformin, thiamine deficiency, malignancy)."],
    ["Give thiamine before glucose in which condition?", "<b>Alcoholic ketoacidosis</b> / suspected Wernicke."],
    ["Critical sample in hypoglycaemia", "Glucose, <b>insulin, C-peptide, β-HB, free fatty acids</b>, cortisol, GH, lactate, ammonia, acylcarnitines (before treatment)."],
    ["Hypoketotic hypoglycaemia with HIGH free fatty acids", "<b>Fatty acid oxidation defect</b> (e.g. MCAD, raised C8)."],
    ["Hypoketotic hypoglycaemia with LOW free fatty acids", "<b>Hyperinsulinism</b>."],
    ["Pre-test carbohydrate requirement for an OGTT", "<b>≥150 g/day for 3 days</b>; fast 8–14 h."],
    ["Suppression vs stimulation tests", "<b>Suppression for suspected excess; stimulation for suspected deficiency</b>."],
    ["Asian waist circumference cut-offs for metabolic syndrome", "<b>≥90 cm men, ≥80 cm women</b>."],
    ["HOMA-IR — diagnostic or research tool?", "<b>Research/epidemiological</b> — insulin assays are not standardised."]
  ]);

  add("fc-lip2-", "chem-lipid", ["C8", "C1"], [
    ["Transporter that lipidates nascent HDL", "<b>ABCA1</b> (deficient in Tangier disease)."],
    ["Why raising HDL failed as therapy", "<b>Mendelian randomisation</b> shows HDL-C is not causal; CETP inhibitor trials showed no benefit."],
    ["Triglyceride level at which pancreatitis risk rises sharply", "<b>&gt;10 mmol/L</b> (~880 mg/dL)."],
    ["Genes of familial chylomicronaemia syndrome", "<b>LPL</b>, <b>APOC2</b>, <b>APOA5</b>, <b>GPIHBP1</b>, <b>LMF1</b>."],
    ["Why amylase may be normal in hypertriglyceridaemic pancreatitis", "<b>Lipaemia interferes</b> with the assay — use lipase and imaging."],
    ["Treatment lowering triglycerides acutely", "<b>Insulin infusion</b> (activates LPL); plasmapheresis if severe."],
    ["NCEP analytical goal for total cholesterol", "<b>Bias ≤3%, CV ≤3%</b>."],
    ["Is fasting required for a lipid profile?", "<b>No</b> for most patients; repeat fasting if non-fasting triglyceride <b>&gt;4.5 mmol/L</b>."],
    ["Abnormal lipoprotein in cholestasis", "<b>Lipoprotein X</b> — not atherogenic but falsely raises measured LDL."],
    ["Secondary causes to exclude before lipid therapy", "<b>Hypothyroidism</b>, nephrotic syndrome, CKD, cholestasis, diabetes, alcohol, drugs, pregnancy."],
    ["LDL-C target in very high cardiovascular risk", "<b>&lt;1.4 mmol/L (55 mg/dL)</b> and ≥50% reduction."],
    ["CK level defining statin myopathy", "<b>&gt;10 × upper limit</b> with symptoms."],
    ["Gene affecting simvastatin myopathy risk", "<b><i>SLCO1B1</i></b> (*5 allele)."]
  ]);

  add("fc-pro2-", "chem-protein", ["C1", "C2"], [
    ["Principle of the total protein method", "<b>Biuret</b> — copper complexes with peptide bonds."],
    ["Bias of BCG vs BCP albumin methods", "<b>BCG overestimates</b> (reacts with globulins); <b>BCP underestimates in renal failure</b>."],
    ["Short-half-life nutritional protein", "<b>Transthyretin (prealbumin)</b>, ~2 days."],
    ["Protein low in Wilson disease", "<b>Ceruloplasmin</b>."],
    ["Marker used in myeloma staging", "<b>β₂-microglobulin</b>."],
    ["Globulin gap prompting electrophoresis", "Total protein − albumin <b>&gt;40 g/L</b>."],
    ["CSF test requiring a paired serum sample", "<b>Oligoclonal bands</b> (and the IgG index)."],
    ["CSF glucose ratio that is abnormal", "<b>&lt;0.4–0.5</b> of the paired plasma glucose."],
    ["CSF lactate favouring bacterial meningitis", "<b>&gt;3.5 mmol/L</b>."],
    ["Pigment confirming subarachnoid haemorrhage on CSF spectrophotometry", "<b>Bilirubin</b> (~450 nm) — formed in vivo."],
    ["Cofactor in IFCC transaminase methods", "<b>Pyridoxal-5′-phosphate</b>."],
    ["Interferent blocked in CK assays", "<b>Adenylate kinase</b> (AMP, diadenosine pentaphosphate)."],
    ["Macro-CK type 2 is", "<b>Mitochondrial CK</b> — associated with severe illness and malignancy."],
    ["Reference bone turnover markers", "<b>P1NP</b> (formation) and <b>CTX</b> (resorption) — fasting morning sample."],
    ["Do bone markers diagnose osteoporosis?", "<b>No</b> — DXA does; markers monitor therapy and adherence."]
  ]);

  add("fc-ren2-", "chem-renal", ["C1", "C3"], [
    ["Replace which electrolyte first in refractory hypokalaemia?", "<b>Magnesium</b> — it also impairs PTH, causing hypocalcaemia."],
    ["Drug class causing hypomagnesaemia by blocking TRPM6", "<b>Proton pump inhibitors</b>."],
    ["Classic cause of hypophosphataemia when feeding begins", "<b>Refeeding syndrome</b>."],
    ["Hormone from osteocytes that wastes phosphate", "<b>FGF-23</b> (high in XLH and tumour-induced osteomalacia)."],
    ["Test for renal phosphate wasting", "<b>TmP/GFR</b> from paired fasting urine and plasma."],
    ["Spurious causes of hyperphosphataemia", "<b>Haemolysis</b>, delayed separation, <b>paraproteins</b>, liposomal amphotericin."],
    ["Dipstick protein pad principle", "<b>Protein error of indicators</b> — detects albumin, misses light chains."],
    ["Urine blood pad detects", "<b>Pseudoperoxidase activity</b> of haemoglobin and <b>myoglobin</b>."],
    ["Common cause of false-negative dipstick results", "<b>Ascorbic acid</b> (glucose, blood, bilirubin pads)."],
    ["Organisms missed by the nitrite pad", "<b><i>Enterococcus</i></b> and <i>S. saprophyticus</i> (non-nitrate-reducing)."],
    ["Cast indicating glomerulonephritis", "<b>Red cell casts</b> (with dysmorphic red cells)."],
    ["Blood positive on dipstick with no red cells on microscopy", "<b>Haemoglobinuria or myoglobinuria</b> — check CK and plasma colour."]
  ]);

  add("fc-liv2-", "chem-liver", ["C1", "C3"], [
    ["Current name for NAFLD", "<b>MASLD</b> — steatotic liver disease + a cardiometabolic risk factor."],
    ["FIB-4 components and cut-offs", "<b>Age, AST, ALT, platelets</b>; &lt;1.3 low risk, &gt;2.67 high risk."],
    ["What predicts outcome in MASLD?", "<b>Fibrosis stage</b> — not steatosis or ALT."],
    ["First-line test in a suspected acute porphyria attack", "<b>Urine porphobilinogen</b> (PBG:creatinine ratio) — normal during symptoms excludes it."],
    ["Enzyme defect in acute intermittent porphyria", "<b>Porphobilinogen deaminase</b> (HMBS)."],
    ["Handling of porphyrin samples", "<b>Protect from light</b> (foil) and send promptly."],
    ["Porphyria mimic with raised ALA and ZPP but normal PBG", "<b>Lead poisoning</b>."],
    ["Antibody for primary biliary cholangitis", "<b>AMA-M2</b> (plus raised ALP and IgM)."],
    ["Antibodies in type 1 vs type 2 autoimmune hepatitis", "Type 1: <b>ANA and anti-smooth muscle</b>. Type 2: <b>anti-LKM1</b> (children)."],
    ["Imaging diagnosis of primary sclerosing cholangitis", "<b>MRCP</b> showing beaded strictures."],
    ["Coeliac serology pairing", "<b>tTG-IgA with total IgA</b>; patient must still be eating gluten."],
    ["Breath hydrogen rise diagnosing lactose malabsorption", "<b>&gt;20 ppm</b> above baseline with symptoms."],
    ["Stool test separating IBD from IBS", "<b>Faecal calprotectin</b>."],
    ["Definition of acute liver failure", "Encephalopathy + <b>INR ≥1.5</b> without pre-existing liver disease."],
    ["MELD-Na components", "<b>Bilirubin, INR, creatinine, sodium</b>."],
    ["Child–Pugh components", "<b>Bilirubin, albumin, INR, ascites, encephalopathy</b>."],
    ["Ammonia level risking cerebral oedema in ALF", "<b>&gt;200 µmol/L</b> (arterial)."]
  ]);

  add("fc-end2-", "chem-endo", ["C14", "C1"], [
    ["Screening and confirming acromegaly", "Screen <b>IGF-1</b>; confirm <b>GH failure to suppress &lt;1 µg/L</b> on OGTT."],
    ["Which marker to follow on pegvisomant?", "<b>IGF-1 only</b> — GH rises because the receptor is blocked."],
    ["Reference test for GH and ACTH reserve", "<b>Insulin tolerance test</b> (contraindicated in epilepsy, ischaemic heart disease)."],
    ["Does a normal IGF-1 exclude GH deficiency?", "<b>No</b> — a stimulation test is required."],
    ["First-trimester combined screen markers", "<b>Nuchal translucency, PAPP-A, free β-hCG</b>."],
    ["Quadruple test pattern in Down syndrome", "<b>AFP ↓, uE3 ↓, hCG ↑, inhibin A ↑</b>."],
    ["Marker pattern in trisomy 18", "<b>All low</b> (AFP, uE3, hCG, PAPP-A)."],
    ["Serum marker raised in open neural tube defects", "<b>AFP &gt;2.0–2.5 MoM</b>."],
    ["Must a positive cfDNA screen be confirmed?", "<b>Yes</b> — amniocentesis or CVS (confined placental mosaicism)."],
    ["Correct sampling for testosterone", "<b>Morning (07:00–11:00), fasting</b>, and repeat a low result."],
    ["Primary vs secondary hypogonadism", "Primary: <b>high LH/FSH</b>. Secondary: low or normal LH/FSH."],
    ["Test that must accompany every thyroglobulin measurement", "<b>Anti-thyroglobulin antibodies</b> (cause falsely low Tg)."],
    ["Tumour marker for medullary thyroid carcinoma", "<b>Calcitonin</b> (with CEA; screen for <i>RET</i>)."],
    ["Water deprivation test: central vs nephrogenic DI", "Both fail to concentrate; only <b>central DI responds to desmopressin</b>."],
    ["Modern alternative to the water deprivation test", "<b>Hypertonic saline- or arginine-stimulated copeptin</b>."],
    ["Safety limits during water deprivation", "Stop if weight falls <b>&gt;3%</b> or sodium <b>&gt;145–150 mmol/L</b>."]
  ]);

  add("fc-tox2-", "chem-tox", ["C1", "C2"], [
    ["Acid–base picture of salicylate poisoning", "<b>Mixed respiratory alkalosis + high anion gap metabolic acidosis</b>."],
    ["Why intubation is dangerous in salicylate poisoning", "Loss of compensatory hyperventilation → <b>rapid fatal acidosis</b>."],
    ["Salicylate level indicating haemodialysis", "<b>&gt;7.2 mmol/L (100 mg/dL)</b> acutely, or any severe feature."],
    ["Electrolyte essential for urinary alkalinisation", "<b>Potassium</b> — without it the urine cannot be alkalinised."],
    ["Sheiner–Tozer correction is used for", "<b>Phenytoin</b> in hypoalbuminaemia (or measure free phenytoin)."],
    ["Carbamazepine pharmacokinetic quirk", "<b>Autoinduction</b> over 2–4 weeks; active epoxide metabolite."],
    ["Specimen and timing for tacrolimus", "<b>EDTA whole blood trough</b> (C0), by LC-MS/MS."],
    ["Antiepileptics needing dose increases in pregnancy", "<b>Lamotrigine and levetiracetam</b> (increased clearance)."],
    ["Reference method for ethanol measurement", "<b>Headspace gas chromatography</b>."],
    ["Alcohol marker detecting use for 3–4 weeks", "<b>Phosphatidylethanol (PEth)</b>."],
    ["Alcohol marker for the last ~80 hours", "<b>Urine ethyl glucuronide (EtG)</b>."],
    ["Most specific traditional marker of sustained heavy drinking", "<b>Carbohydrate-deficient transferrin</b>."],
    ["Philippine newborn screening law and sample timing", "<b>RA 9288</b>; dried blood spot at <b>24–72 hours</b>."],
    ["Newborn screening marker for MCAD deficiency", "<b>C8 acylcarnitine</b>."],
    ["Conditions causing false newborn screening results", "<b>Prematurity, parenteral nutrition, recent transfusion</b>, early sampling."],
    ["Best test of thiamine status", "<b>Whole blood thiamine diphosphate</b> (or erythrocyte transketolase activation)."],
    ["How vitamin E should be reported", "As the <b>vitamin E : lipid (cholesterol) ratio</b>."],
    ["Vitamin C sample handling", "<b>Stabilise with metaphosphoric acid</b>, keep cold and dark."],
    ["Blood gas sample errors from air bubbles", "<b>pO₂ rises, pCO₂ falls</b> — expel bubbles, analyse within 15 min."],
    ["Requirement when reporting a critical value", "<b>Documented notification with read-back</b>."],
    ["When are glucose meters unreliable?", "<b>Shock and hypoperfusion</b>, severe anaemia or polycythaemia, high oxygen tension."]
  ]);

  /* ---- Immunohematology ---- */
  add("fc-pt2-", "ih-testing", ["B1", "B2"], [
    ["All panel cells reactive, autocontrol negative", "Antibody to a <b>high-prevalence antigen</b> (or multiple antibodies)."],
    ["Only one panel cell reactive, or incompatible crossmatch with negative screen", "Antibody to a <b>low-prevalence antigen</b> (e.g. anti-Wrᵃ)."],
    ["HTLA antibodies", "<b>High-titre, low-avidity</b> — Chido, Rodgers, Knops, Csᵃ, Yorkᵃ; clinically insignificant."],
    ["Best source of rare antigen-negative blood", "<b>Siblings</b> and the <b>rare donor registry</b> (frozen deglycerolised units)."],
    ["Technique distinguishing rouleaux from true agglutination", "<b>Saline replacement</b>."],
    ["Techniques for cold agglutinin interference", "<b>Prewarm</b>, 37 °C washes, <b>cold autoadsorption</b>, monospecific anti-IgG, RESt."],
    ["Caution with RESt adsorption", "It also removes <b>anti-B and some anti-D</b>."],
    ["Why patient anti-D reagents are chosen not to detect DVI", "So <b>partial D (DVI) patients</b> are typed D-negative and get D-negative blood and RhIG."],
    ["Daily reagent QC requirement", "Test each antiserum with a <b>weak positive and a negative</b> control cell."],
    ["Target crossmatch-to-transfusion ratio", "<b>&lt;2.0</b>."],
    ["Transfusion index indicating type and screen only", "<b>&lt;0.5</b>."],
    ["What MSBOS stands for and does", "<b>Maximum Surgical Blood Order Schedule</b> — agreed units per procedure."]
  ]);

  add("fc-hd2-", "ih-hdfn", ["B10", "B1"], [
    ["Commonest reasons RhIG prophylaxis fails", "<b>Missed antenatal dose</b>, unrecognised sensitising event, <b>unquantified large FMH</b>, late administration, typing errors."],
    ["Window for giving RhIG after a sensitising event", "Within <b>72 hours</b>; partial benefit up to <b>13 days</b>."],
    ["Is RhIG useful once immune anti-D is present?", "<b>No</b> — switch to titres, Doppler and fetal therapy."],
    ["Most important non-D Rh antibody in HDFN", "<b>Anti-c</b>."],
    ["Why anti-K causes anaemia with low bilirubin", "It <b>suppresses fetal erythropoiesis</b>, so less haemolysis-derived bilirubin."],
    ["Antibodies that do not cause HDFN", "<b>Anti-Leᵃ/Leᵇ, anti-I, anti-P1, anti-Sdᵃ</b> and HTLA antibodies."],
    ["Component for intrauterine transfusion", "Group O D-neg, antigen-negative, <b>Hct 75–85%</b>, &lt;5 days, <b>irradiated</b>, CMV-safe, maternal-plasma crossmatched."],
    ["Component for neonatal exchange transfusion", "<b>Reconstituted whole blood</b>: O red cells in AB plasma, <b>Hct 45–50%</b>, fresh, irradiated."],
    ["How much is removed by a double-volume exchange?", "About <b>85% of sensitised red cells</b> and ~50% of bilirubin."],
    ["Why infants need follow-up after IUT or HDFN", "<b>Late hyporegenerative anaemia</b> for up to 3 months."],
    ["Neonatal jaundice: first test if DAT is negative", "<b>Blood film</b> — then G6PD, EMA binding, haemoglobin analysis."],
    ["Conjugated bilirubin in a jaundiced neonate suggests", "<b>Cholestasis / biliary atresia</b> — urgent referral."]
  ]);

  add("fc-rx2-", "ih-reactions", ["B1", "B9"], [
    ["Why potassium accumulates in stored red cells", "Na/K-ATPase is <b>inactive at 1–6 °C</b>; irradiation accelerates the leak."],
    ["Patients at highest risk of transfusion hyperkalaemia", "<b>Neonates</b>, renal failure, rapid large-volume or central transfusion."],
    ["Citrate toxicity effects", "<b>Ionised hypocalcaemia</b> — tingling, QT prolongation, hypotension, coagulopathy."],
    ["Which calcium should be monitored in massive transfusion?", "<b>Ionised calcium</b>, not total."],
    ["Late metabolic effect of citrate", "<b>Metabolic alkalosis</b> (citrate → bicarbonate)."],
    ["Consequences of transfusion-related hypothermia", "Arrhythmias, <b>coagulopathy</b>, impaired citrate metabolism — use a validated blood warmer."],
    ["Only fluid that may be given with red cells", "<b>0.9% saline</b> (hypotonic fluids haemolyse; Ringer's has calcium)."]
  ]);

  add("fc-dn2-", "ih-donor", ["B1", "B5"], [
    ["Phlebotomy target in hereditary haemochromatosis", "Ferritin <b>50–100 µg/L</b>; ~200–250 mg iron per unit."],
    ["Haematocrit target in polycythaemia vera", "<b>&lt;45%</b>."],
    ["Therapeutic phlebotomy for porphyria cutanea tarda", "<b>Low-volume</b> phlebotomy to deplete hepatic iron."],
    ["Timing of the last pre-deposit autologous donation", "<b>≥72 hours</b> before surgery."],
    ["Main drawbacks of pre-deposit autologous donation", "<b>Causes anaemia</b>, high <b>wastage</b>, clerical error still possible, cost."],
    ["Preferred alternatives to autologous donation", "<b>Cell salvage</b>, acute normovolaemic haemodilution, tranexamic acid, treating anaemia preoperatively."]
  ]);

  add("fc-cl2-", "ih-clinical", ["B13", "B1", "B12"], [
    ["Most useful single marker of haemolysis", "<b>Low haptoglobin</b> (but it is an acute-phase protein)."],
    ["Features of intravascular haemolysis", "<b>Free haemoglobin, haemoglobinuria</b>, very low haptoglobin, haemosiderinuria if chronic."],
    ["Schistocytes with thrombocytopenia — next test", "<b>ADAMTS13 activity and inhibitor</b> (TTP); plus DIC screen, Shiga toxin, complement."],
    ["Film showing bite cells and Heinz bodies", "<b>G6PD deficiency</b> (assay after the acute episode)."],
    ["Test for hereditary spherocytosis", "<b>EMA binding</b> by flow cytometry (or osmotic gradient ektacytometry)."],
    ["Test for paroxysmal nocturnal haemoglobinuria", "<b>Flow cytometry</b> — loss of CD55/CD59, FLAER."],
    ["Definition of massive haemorrhage", "<b>≥10 units in 24 h</b> or ≥4 units in 1 h with ongoing bleeding."],
    ["Component ratio early in trauma resuscitation", "Red cells : plasma : platelets close to <b>1:1:1</b>."],
    ["When must tranexamic acid be given?", "<b>Within 3 hours</b> of injury (CRASH-2/CRASH-3, WOMAN)."],
    ["Fibrinogen target in major haemorrhage", "<b>&gt;1.5 g/L</b> (&gt;2 g/L in obstetric haemorrhage)."],
    ["Viscoelastic finding indicating fibrinogen deficiency", "Low <b>FIBTEM</b> MCF (ROTEM) / low MA with low functional fibrinogen."],
    ["Viscoelastic finding indicating hyperfibrinolysis", "Increased <b>LY30 / ML</b> — give tranexamic acid."]
  ]);

  /* ---- Parasitology ---- */
  add("fc-tm2-", "para-trematodes", ["P6", "P5", "P7"], [
    ["Praziquantel mechanism", "<b>Calcium influx</b> through TRPM<sub>PZQ</sub> → paralysis and tegumental damage."],
    ["Major limitation of praziquantel", "Poorly active against <b>immature worms</b> — repeat after 4–6 weeks."],
    ["Fluke not treated by praziquantel", "<b><i>Fasciola</i></b> — use <b>triclabendazole</b>."],
    ["Drug active against immature and adult <i>Fasciola</i>", "<b>Triclabendazole</b> (tubulin binding)."],
    ["Expected egg reduction rate after praziquantel", "<b>&gt;90%</b> — monitor for reduced susceptibility."],
    ["Caution with praziquantel in neurocysticercosis", "Can precipitate <b>seizures and raised ICP</b> — give steroids."],
    ["Cause of swimmer's itch", "Cercariae of <b>avian schistosomes</b> dying in the skin — self-limiting."],
    ["Timing and nature of Katayama fever", "<b>2–8 weeks</b> after exposure; hypersensitivity to migrating schistosomula."],
    ["Why stool is negative in acute schistosomiasis", "Worms are <b>immature</b> — use serology/antigen and repeat stool at ~3 months."],
    ["When does schistosome serology become positive?", "<b>6–12 weeks</b> after exposure."],
    ["Best urine specimen for <i>S. haematobium</i>", "<b>Terminal midstream urine, 10:00–14:00</b>, filtered (10 mL)."],
    ["Cancer caused by <i>S. haematobium</i>", "<b>Squamous cell carcinoma of the bladder</b> (IARC group 1)."],
    ["Hallmark lesions of female genital schistosomiasis", "<b>Sandy patches</b> with contact bleeding; raises <b>HIV acquisition risk</b>."],
    ["Does <i>S. japonicum</i> cause urinary disease?", "<b>Rarely</b> — it is intestinal and hepatic (Philippines)."]
  ]);

  add("fc-cs2-", "para-cestodes", ["P3", "P1", "P6"], [
    ["How to identify <i>Taenia</i> species on a proglottid", "<b>Count lateral uterine branches</b> (India ink): 7–13 = <i>T. solium</i>, 15–20+ = <i>T. saginata</i>."],
    ["Most sensitive stool test for taeniasis", "<b>Coproantigen ELISA</b> (genus-specific); PCR for species."],
    ["Drug of choice for taeniasis when neurocysticercosis is possible", "<b>Niclosamide</b> (not absorbed) rather than praziquantel."],
    ["Why a tapeworm carrier is a public health problem", "They shed <b>immediately infective eggs</b> causing cysticercosis in the household."],
    ["Larval structures: cysticercus vs hydatid vs coenurus vs sparganum", "<b>One scolex</b> / <b>brood capsules and daughter cysts</b> / <b>multiple scolices</b> / <b>no scolex, solid ribbon</b>."],
    ["Histological hallmark of cestode larvae", "<b>Calcareous corpuscles</b>."],
    ["Never do this to a suspected hydatid cyst", "<b>Aspirate it</b> without albendazole cover and PAIR precautions."],
    ["Treatment of sparganosis", "<b>Surgical removal</b>."],
    ["Benzimidazole mechanism", "<b>Binds β-tubulin</b>; albendazole absorption improves with a <b>fatty meal</b>."],
    ["Monitoring on prolonged albendazole", "<b>Liver enzymes and white cell count</b> (also alopecia)."],
    ["Exclude which infection before giving ivermectin in Africa?", "<b><i>Loa loa</i></b> — risk of encephalopathy."],
    ["Deworming in pregnancy", "Avoid benzimidazoles in the <b>first trimester</b>; praziquantel is considered safe."],
    ["Ivermectin weight limit", "Not recommended <b>below 15 kg</b>."],
    ["Essential step before corticosteroids in a Filipino patient", "Screen or empirically treat <b><i>Strongyloides</i></b>."]
  ]);

  add("fc-lb2-", "para-lab", ["P2", "P3", "P4"], [
    ["Parasite reactivating when CD4 falls below 100", "<b><i>Toxoplasma gondii</i></b> — IgG positive, ring-enhancing lesions."],
    ["Parasite causing fatal hyperinfection with steroids", "<b><i>Strongyloides stercoralis</i></b> (also HTLV-1)."],
    ["Why serology fails in the immunocompromised", "Antibody responses are absent or blunted — use <b>direct detection</b> (microscopy, antigen, PCR)."],
    ["Prophylaxis covering <i>Toxoplasma</i> and <i>Cystoisospora</i>", "<b>Co-trimoxazole</b>."],
    ["Sputum parasite destroyed by Ziehl–Neelsen staining", "<b><i>Paragonimus</i> eggs</b> — examine a wet mount too."],
    ["CSF handling for suspected <i>Naegleria</i>", "<b>Fresh, unrefrigerated wet mount</b> examined immediately."],
    ["Most sensitive aspirate for visceral leishmaniasis", "<b>Splenic aspirate</b>."],
    ["Specimen for <i>Onchocerca</i> microfilariae", "<b>Skin snips</b> incubated in saline."],
    ["Biopsy site for suspected trichinellosis", "<b>Deltoid muscle near a tendon</b> — compression and digestion."],
    ["Rule for tissue sent for parasite culture", "Send <b>fresh in saline, never formalin</b>."],
    ["Why <i>Cryptosporidium</i> survives water treatment", "Oocysts are <b>chlorine-resistant</b> — needs filtration, UV or ozone."],
    ["Boiling time that kills all parasitic stages", "<b>1 minute</b> (3 minutes at altitude)."],
    ["Freezing conditions that kill <i>Anisakis</i>", "<b>−20 °C for 7 days</b> (or −35 °C for 15 h)."],
    ["Does vinegar or salting kill fish-borne larvae?", "<b>No</b> — only cooking or adequate freezing."],
    ["Parasite linked to pig faeces contaminating water", "<b><i>Balantidium coli</i></b>."]
  ]);
})();
