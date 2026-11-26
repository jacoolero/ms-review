/* Clinical Chemistry — renal, electrolytes & acid–base, part B */
window.QBANK.push(
{
  id: "cc169", domain: "chem-renal", star: true,
  q: "Discuss urea as a laboratory analyte: its production, measurement, the BUN:creatinine ratio and its use in dialysis monitoring.",
  tags: ["urea", "BUN", "urea cycle", "dialysis adequacy"],
  keypoints: ["urea cycle", "urease", "glutamate dehydrogenase", "blood urea nitrogen", "freely diffusible", "urea reduction ratio", "Kt/V", "urea rebound", "upper gastrointestinal bleed", "pre-renal azotaemia", "liver failure", "SIADH", "low protein intake", "dialysis adequacy", "medullary collecting duct"],
  answer: `
    <h4>Production and excretion</h4>
    <p><strong>Urea</strong> is formed in the liver through the <strong>urea cycle</strong>, which detoxifies ammonia from amino acid catabolism and gut bacterial action. It is a small, <strong>freely diffusible</strong> molecule that is filtered at the glomerulus and then reabsorbed in the <strong>medullary collecting duct</strong>; the fraction reabsorbed depends on urine flow, so urea excretion falls in dehydration and rises after a water load. About half of the daily load is excreted renally and the rest is recycled through gut bacteria and the liver.</p>
    <h4>Measurement</h4>
    <p>Most analysers use <strong>urease</strong> to hydrolyse urea to ammonia and carbon dioxide, followed by <strong>glutamate dehydrogenase</strong> conversion of ammonia and 2-oxoglutarate, with NADH oxidation measured at 340 nm. Conductivity and coupled enzymatic methods are also used. Results may be reported as <strong>blood urea nitrogen</strong> in mg/dL or as urea in mmol/L; the conversion is BUN (mg/dL) × 0.357 = urea (mmol/L), a frequent source of confusion. Samples should be separated promptly, because bacterial growth in an unpreserved specimen alters the result.</p>
    <h4>BUN:creatinine ratio</h4>
    <div class="table-wrap"><table>
      <tr><th>Ratio (mg/dL)</th><th>Interpretation</th></tr>
      <tr><td>&gt;20:1</td><td><strong>Pre-renal azotaemia</strong>, <strong>upper gastrointestinal bleed</strong>, high protein intake, corticosteroids</td></tr>
      <tr><td>10–20:1</td><td>Normal or intrinsic renal disease</td></tr>
      <tr><td>&lt;10:1</td><td><strong>Liver failure</strong>, <strong>low protein intake</strong>, overhydration, pregnancy</td></tr>
    </table></div>
    <p>A normal ratio does not exclude renal disease, and a high ratio does not prove dehydration. Urea is also low in <strong>SIADH</strong> because of dilution.</p>
    <h4>Urea in dialysis</h4>
    <p>Because urea is small and freely dialysable, it is used to quantify <strong>dialysis adequacy</strong>. The <strong>urea reduction ratio</strong> compares pre- and post-treatment values, and <strong>Kt/V</strong> incorporates dialyser clearance, time and volume of distribution. Correct post-dialysis sampling avoids access recirculation, and <strong>urea rebound</strong> after 30–60 minutes reflects compartment disequilibrium. A low pre-dialysis urea may simply reflect poor nutrition rather than good dialysis.</p>
  `,
  tip: "Explain the ratio with the two mechanisms — urea generation and creatinine generation — not just the numbers.",
  sources: ["C1", "C3"]
},
{
  id: "cc170", domain: "chem-renal", star: true,
  q: "Explain the principles of measured glomerular filtration rate, compare urinary and plasma clearance methods, and state when a measured GFR is preferred to an estimated GFR.",
  tags: ["measured GFR", "clearance", "iohexol", "Cockcroft-Gault"],
  keypoints: ["clearance formula", "inulin", "iohexol", "plasma disappearance", "steady state", "body surface area", "amputees", "cachexia", "cystatin C", "Cockcroft–Gault", "creatinine clearance", "drug labelling", "timed urine collection", "oedema"],
  answer: `
    <h4>Clearance as the reference concept</h4>
    <p>Clearance is the volume of plasma cleared of a marker per unit time: <strong>clearance formula</strong> C = (U × V)/P, where U and P are urine and plasma concentrations and V is urine flow. A measured GFR requires a marker that is freely filtered, neither secreted nor reabsorbed, and not metabolised by the kidney. <strong>Inulin</strong> remains the historical gold standard; <strong>iohexol</strong>, <sup>51</sup>Cr-EDTA, <sup>99m</sup>Tc-DTPA and iothalamate are used in practice.</p>
    <h4>Urinary versus plasma clearance</h4>
    <ul>
      <li><strong>Timed urine collection</strong> measures urinary clearance but depends on a complete collection and a stable plasma concentration; incomplete collection is the main error.</li>
      <li><strong>Plasma disappearance</strong> after a single injection avoids urine collection and is preferred in children and in patients with incontinence.</li>
      <li>Results are normalised to <strong>body surface area</strong>, which is problematic in <strong>oedema</strong>, ascites, amputation and extreme body size.</li>
    </ul>
    <h4>When estimated GFR fails</h4>
    <p>Creatinine-based equations assume a <strong>steady state</strong> and average muscle mass. They mislead in bodybuilders, <strong>cachexia</strong>, cirrhosis, <strong>amputees</strong>, severe obesity, pregnancy and acute kidney injury. Near a decision threshold, or before nephrotoxic chemotherapy and living donation, a measured GFR or a <strong>cystatin C</strong>-based estimate is more defensible.</p>
    <h4>Cockcroft–Gault and drug dosing</h4>
    <p><strong>Cockcroft–Gault</strong> estimates <strong>creatinine clearance</strong> from age, weight, sex and serum creatinine; it is not normalised to body surface area and was used to derive many <strong>drug labelling</strong> recommendations. It is therefore not interchangeable with eGFR. In obesity the choice of weight changes the result, and in low muscle mass it overestimates function. Drug dosing should follow the equation used in the product label, with cystatin C or measured GFR as a cross-check when the patient is unusual. A timed urine creatinine clearance is now rarely needed but remains useful when equations disagree markedly.</p>
  `,
  tip: "Contrast clearance (a rate) with eGFR (a normalised estimate) and name the steady-state assumption.",
  sources: ["C12", "C7", "C1"]
},
{
  id: "cc171", domain: "chem-renal", star: true,
  q: "Why do renal reference intervals differ in children and in pregnancy? Discuss the age-related changes in creatinine and the equations and intervals used.",
  tags: ["paediatric", "pregnancy", "reference intervals", "Schwartz"],
  keypoints: ["maternal creatinine", "muscle mass", "Schwartz", "CKiD U25", "age-partitioned", "cystatin C", "plasma volume", "trimester-specific", "pre-eclampsia", "alkaline phosphatase", "enzymatic creatinine", "spina bifida"],
  answer: `
    <h4>Why children differ</h4>
    <p>Serum creatinine in the newborn reflects <strong>maternal creatinine</strong> and falls over the first weeks as the infant's <strong>muscle mass</strong> and glomerular filtration mature. Values then rise gradually through childhood, and the adult sex difference appears at puberty. An adult reference interval applied to a child will therefore label normal children as abnormal, or conceal reduced function.</p>
    <h4>Equations and intervals</h4>
    <ul>
      <li>The <strong>Schwartz</strong> bedside equation uses height and serum creatinine; updated versions use an <strong>enzymatic creatinine</strong> assay.</li>
      <li><strong>CKiD U25</strong> equations cover the transition from adolescence to young adulthood, where both paediatric and adult equations perform poorly.</li>
      <li>Reference intervals should be <strong>age-partitioned</strong>, and preferably method-specific because Jaffe and enzymatic assays differ.</li>
      <li><strong>Cystatin C</strong> varies less with muscle mass and is useful in children with cerebral palsy, <strong>spina bifida</strong> or malnutrition.</li>
    </ul>
    <h4>Pregnancy</h4>
    <p><strong>Plasma volume</strong> expands and glomerular filtration rises by roughly 40–50% in early pregnancy, so creatinine, urea and uric acid fall. A creatinine that would be normal outside pregnancy may represent significant renal impairment. <strong>Trimester-specific</strong> reference intervals are required, and eGFR equations are not validated in pregnancy. <strong>Alkaline phosphatase</strong> rises from the placenta, triglycerides rise, and protein excretion increases physiologically.</p>
    <h4>Clinical use</h4>
    <p>Paediatric dosing, monitoring of nephrotoxic drugs and the diagnosis of chronic kidney disease all depend on the right interval for age and method. In pregnancy, serial creatinine and uric acid support the assessment of <strong>pre-eclampsia</strong>, while a rising creatinine with proteinuria suggests superimposed renal disease. Laboratories should publish intervals by age, sex, trimester and method rather than a single adult range.</p>
  `,
  tip: "Quote the direction of change in pregnancy (creatinine falls) and name one paediatric equation.",
  sources: ["C7", "C1", "C3"]
},
{
  id: "cc172", domain: "chem-renal",
  q: "Describe the physiology of sodium and water balance: osmoreception, antidiuretic hormone action, the countercurrent mechanism and the laboratory assessment of water handling.",
  tags: ["water balance", "ADH", "osmolality", "aquaporin"],
  keypoints: ["osmoreceptors", "effective osmolality", "antidiuretic hormone", "aquaporin-2", "V2 receptors", "thirst", "countercurrent multiplier", "urea recycling", "free water clearance", "urine osmolality", "renin–angiotensin–aldosterone", "total body water"],
  answer: `
    <h4>Compartments and osmolality</h4>
    <p><strong>Total body water</strong> is about 60% of body weight, divided into intracellular and extracellular fluid. Sodium is the dominant extracellular cation and determines <strong>osmolality</strong>, which is sensed by hypothalamic <strong>osmoreceptors</strong>. <strong>Effective osmolality</strong> (tonicity) excludes urea, which crosses membranes freely, so uraemia raises measured osmolality without drawing water into the extracellular space.</p>
    <h4>ADH and thirst</h4>
    <p><strong>Antidiuretic hormone</strong> is synthesised in the supraoptic and paraventricular nuclei, transported to the posterior pituitary and released in response to a rise in osmolality or a fall in volume. It acts on <strong>V2 receptors</strong> in the collecting duct, inserting <strong>aquaporin-2</strong> channels and permitting water reabsorption. <strong>Thirst</strong> is the second defence and is blunted in the elderly and in patients with impaired consciousness. Volume depletion also activates <strong>renin–angiotensin–aldosterone</strong> and sympathetic pathways, which defend volume at the expense of osmolality.</p>
    <h4>Concentrating mechanism</h4>
    <p>The <strong>countercurrent multiplier</strong> of the loop of Henle and <strong>urea recycling</strong> build the medullary gradient. Maximum urine osmolality depends on loop function, ADH and medullary blood flow. <strong>Free water clearance</strong> is calculated as urine volume minus osmolar clearance, and a negative value indicates water conservation. When ADH is absent, the collecting duct remains water-impermeable and dilute urine is produced; when ADH is present, water follows the osmotic gradient and the urine becomes concentrated.</p>
    <h4>Laboratory translation</h4>
    <ul>
      <li><strong>Urine osmolality</strong> is the practical bioassay of ADH action.</li>
      <li>Hyponatraemia with concentrated urine indicates ADH activity; dilute urine indicates suppression.</li>
      <li>Hypernatraemia with dilute urine indicates water loss or diabetes insipidus.</li>
      <li>Serum sodium reflects water balance, not total sodium content.</li>
    </ul>
  `,
  tip: "Say explicitly that sodium reflects water balance, not total body sodium — it frames every dysnatraemia.",
  sources: ["C1", "C15"]
},
{
  id: "cc173", domain: "chem-renal", star: true,
  q: "Outline a stepwise laboratory approach to hypernatraemia, including the causes, the water deficit calculation and the hazards of correction.",
  tags: ["hypernatraemia", "water deficit", "diabetes insipidus", "urine osmolality"],
  keypoints: ["water deficit", "urine osmolality", "urine sodium", "diabetes insipidus", "osmotic diuresis", "impaired thirst", "cerebral oedema", "reset osmostat", "mineralocorticoid excess", "hypertonic saline", "volume status", "total body water"],
  answer: `
    <h4>Definition and logic</h4>
    <p><strong>Hypernatraemia</strong> (&gt;145 mmol/L) almost always means a <strong>water deficit</strong> rather than sodium excess. It arises when water intake is inadequate, losses exceed intake, or sodium is given faster than water. Because sodium is the main extracellular osmolyte, the brain shrinks, causing irritability, seizures and coma.</p>
    <h4>Stepwise assessment</h4>
    <ol>
      <li>Confirm with a repeat sample and check glucose; severe hyperglycaemia can coexist.</li>
      <li>Assess <strong>volume status</strong> and review fluid balance, diuretics and sodium-containing fluids.</li>
      <li>Measure <strong>urine osmolality</strong>: below 300 mOsm/kg suggests diabetes insipidus or an osmotic diuresis; above 300 suggests extrarenal loss or inadequate intake.</li>
      <li>Measure <strong>urine sodium</strong>: low in extrarenal loss, high in renal loss or sodium administration.</li>
    </ol>
    <h4>Causes</h4>
    <ul>
      <li><strong>Impaired thirst</strong>: dementia, sedation, bedbound patients with no access to water.</li>
      <li>Extrarenal loss: fever, burns, diarrhoea, tracheostomy.</li>
      <li>Renal loss: loop diuretics, <strong>osmotic diuresis</strong>, <strong>diabetes insipidus</strong>, intrinsic renal disease.</li>
      <li>Sodium gain: <strong>hypertonic saline</strong>, sodium bicarbonate, sea water, <strong>mineralocorticoid excess</strong>.</li>
    </ul>
    <h4>Water deficit and monitoring</h4>
    <p>The <strong>water deficit</strong> can be estimated as 0.6 × weight × (sodium/140 − 1), adjusting the <strong>total body water</strong> fraction for age and sex. Correction of chronic hypernatraemia should be gradual, because rapid lowering causes <strong>cerebral oedema</strong>; the brain adapts to chronic hypernatraemia by generating idiogenic osmoles, so the laboratory should report the trend as well as the current value. Sodium should be monitored frequently during rehydration, and critical values should be telephoned. <strong>Reset osmostat</strong> is rare and behaves differently from a true deficit.</p>
  `,
  tip: "Lead with 'water deficit, not salt excess' and give the urine osmolality branch point.",
  sources: ["C1", "C3", "C15"]
},
{
  id: "cc174", domain: "chem-renal", star: true,
  q: "Discuss the causes and laboratory investigation of hypokalaemia, including the use of urine indices and the ECG changes.",
  tags: ["hypokalaemia", "urine potassium", "RTA", "magnesium"],
  keypoints: ["transcellular shift", "renal tubular acidosis", "primary hyperaldosteronism", "Bartter", "Gitelman", "magnesium deficiency", "urine K", "U waves", "transtubular potassium gradient", "pseudohyperkalaemia", "β2-agonists", "aldosterone"],
  answer: `
    <h4>Mechanisms</h4>
    <p>Only about 2% of body potassium is extracellular, so serum potassium is a poor guide to total body stores and can fall abruptly with <strong>transcellular shift</strong>. <strong>Hypokalaemia</strong> (&lt;3.5 mmol/L) results from reduced intake, shift into cells, gastrointestinal loss or renal loss.</p>
    <h4>Classification</h4>
    <ul>
      <li>Shift: insulin, <strong>β2-agonists</strong>, alkalosis, refeeding, familial periodic paralysis.</li>
      <li>Gastrointestinal: vomiting, diarrhoea, laxative abuse, villous adenoma.</li>
      <li>Renal: thiazide and loop diuretics, <strong>renal tubular acidosis</strong>, <strong>primary hyperaldosteronism</strong>, Cushing syndrome, <strong>Bartter</strong> and <strong>Gitelman</strong> syndromes, amphotericin, aminoglycosides.</li>
      <li><strong>Magnesium deficiency</strong> causes refractory renal potassium wasting.</li>
    </ul>
    <h4>Urine indices</h4>
    <div class="table-wrap"><table>
      <tr><th>Finding</th><th>Interpretation</th></tr>
      <tr><td><strong>Urine K</strong> &lt;20 mmol/day</td><td>Extrarenal loss or poor intake</td></tr>
      <tr><td>Urine K &gt;20 mmol/day</td><td>Renal wasting</td></tr>
      <tr><td>Urine chloride &lt;20 mmol/L</td><td>Vomiting or diuretic exposure</td></tr>
      <tr><td>Alkaline urine with acidosis</td><td>Renal tubular acidosis</td></tr>
    </table></div>
    <p>Blood pressure, plasma renin and <strong>aldosterone</strong>, magnesium and acid–base status narrow the differential. The <strong>transtubular potassium gradient</strong> is sometimes quoted but is unreliable when potassium is low.</p>
    <h4>ECG and laboratory issues</h4>
    <p>Changes include flattened T waves, ST depression, prominent <strong>U waves</strong> and ventricular arrhythmia, particularly with digoxin or ischaemia. A blood gas potassium is useful when a shift is suspected. Hypokalaemia also impairs insulin secretion and renal concentrating ability, and severe deficiency causes rhabdomyolysis and ileus. A 24-hour urine collection is preferable to a spot sample when the patient is stable. A high serum potassium with a normal plasma potassium suggests the opposite problem, <strong>pseudohyperkalaemia</strong>. Management addresses the cause, magnesium and the route of replacement; monitoring continues until stable because correction shifts potassium back into cells slowly.</p>
  `,
  tip: "Use urine potassium and acid–base status as the two axes; mention magnesium before treatment.",
  sources: ["C1", "C3"]
},
{
  id: "cc175", domain: "chem-renal",
  q: "Explain the generation and maintenance of metabolic alkalosis and distinguish chloride-responsive from chloride-resistant causes using the urine chloride.",
  tags: ["metabolic alkalosis", "urine chloride", "mineralocorticoid"],
  keypoints: ["metabolic alkalosis", "chloride-responsive", "chloride-resistant", "urine chloride", "mineralocorticoid excess", "hypokalaemia", "post-hypercapnic alkalosis", "anion gap", "delta ratio", "renin", "aldosterone", "bicarbonate"],
  answer: `
    <h4>Generation and maintenance</h4>
    <p><strong>Metabolic alkalosis</strong> is a primary rise in <strong>bicarbonate</strong> with a compensatory rise in pCO₂. It requires both a generating process, such as loss of hydrogen ions or gain of bicarbonate, and a maintaining process that prevents renal excretion of the excess. The kidney normally excretes bicarbonate readily, so chloride depletion, <strong>hypokalaemia</strong>, mineralocorticoid excess and reduced glomerular filtration sustain the disorder.</p>
    <h4>Chloride-responsive versus chloride-resistant</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th><strong>Urine chloride</strong></th><th>Typical causes</th></tr>
      <tr><td><strong>Chloride-responsive</strong></td><td>&lt;20 mmol/L</td><td>Vomiting, nasogastric suction, diuretic use, post-hypercapnia</td></tr>
      <tr><td><strong>Chloride-resistant</strong></td><td>&gt;20 mmol/L</td><td><strong>Mineralocorticoid excess</strong>, Cushing syndrome, severe hypokalaemia, alkali ingestion, Bartter or Gitelman syndrome</td></tr>
    </table></div>
    <p>Urine chloride is more informative than urine sodium because sodium excretion changes with volume. A high urine chloride with hypertension points to mineralocorticoid excess; with normal blood pressure it suggests a renal tubular defect or current diuretic action.</p>
    <h4>Compensation and associations</h4>
    <p>Expected pCO₂ rises by about 0.5–1 mmHg for each 1 mmol/L rise in bicarbonate, and hypoventilation limits the rise. Hypokalaemia is common because potassium moves into cells and is lost renally. In vomiting, urine chloride is low and urine potassium high; in diuretic use the picture depends on whether the drug is still active. <strong>Post-hypercapnic alkalosis</strong> occurs when chronic CO₂ retention is corrected faster than the kidney can excrete bicarbonate.</p>
    <h4>Laboratory approach</h4>
    <p>Measure arterial blood gases, electrolytes, urine chloride and potassium, magnesium and albumin. Calculate the <strong>anion gap</strong> to detect a coexisting high-anion-gap acidosis, and the <strong>delta ratio</strong> when both are present. In resistant cases, measure <strong>renin</strong> and <strong>aldosterone</strong> and screen for cortisol excess. The laboratory's role is to separate the two types before therapy, because they respond to different manoeuvres.</p>
  `,
  tip: "Urine chloride, not urine sodium, is the discriminator — say why.",
  sources: ["C15", "C1"]
},
{
  id: "cc176", domain: "chem-renal", star: true,
  q: "How are mixed acid–base disorders recognised? Illustrate with worked examples and list common combinations.",
  tags: ["mixed acid-base", "delta ratio", "triple disorder", "compensation"],
  keypoints: ["mixed acid–base disorder", "anion gap", "delta ratio", "osmolal gap", "Winter's formula", "expected compensation", "Henderson–Hasselbalch", "triple disorder", "albumin", "urine chloride"],
  answer: `
    <h4>Why mixed disorders are missed</h4>
    <p>A single primary disorder produces a predictable compensatory response. A <strong>mixed acid–base disorder</strong> exists when the measured compensation differs from the expected value, when pH is normal but both pCO₂ and bicarbonate are abnormal, or when the <strong>anion gap</strong> and bicarbonate changes are discordant. Reliance on pH alone hides combinations that cancel each other.</p>
    <h4>Systematic tools</h4>
    <ol>
      <li>Validate the blood gas with the <strong>Henderson–Hasselbalch</strong> relationship.</li>
      <li>Identify the primary process and calculate the <strong>expected compensation</strong>, using <strong>Winter's formula</strong> in metabolic acidosis.</li>
      <li>Calculate the anion gap, corrected for <strong>albumin</strong>, and the <strong>delta ratio</strong>.</li>
      <li>Measure the <strong>osmolal gap</strong> when a toxic alcohol is possible.</li>
      <li>Re-examine the clinical setting and the electrolytes, including <strong>urine chloride</strong>, for a second process.</li>
    </ol>
    <h4>Worked examples</h4>
    <div class="calc">Example 1 — vomiting and diabetic ketoacidosis
pH 7.30, HCO3 10, pCO2 24, Na 136, Cl 92
AG = 136 − (92 + 10) = 34 (high)
Delta ratio = (34 − 12)/(24 − 10) = 1.6 → high-AG acidosis
Urine chloride low and urine pH alkaline → vomiting with bicarbonate loss
Conclusion: mixed high-AG acidosis and metabolic alkalosis</div>
    <div class="calc">Example 2 — COPD with diuretic therapy
pH 7.44, pCO2 65, HCO3 43
Chronic respiratory acidosis predicts HCO3 about 33
Measured 43 → additional metabolic alkalosis</div>
    <h4>Common combinations</h4>
    <ul>
      <li>High-AG acidosis plus metabolic alkalosis: ketoacidosis with vomiting, renal failure with vomiting.</li>
      <li>Metabolic acidosis plus respiratory acidosis: cardiac arrest, severe pneumonia, muscle weakness.</li>
      <li>Metabolic alkalosis plus respiratory alkalosis: cirrhosis, pregnancy, sepsis, salicylate toxicity.</li>
      <li><strong>Triple disorder</strong>: a normal pH with abnormal pCO₂, bicarbonate and anion gap.</li>
    </ul>
  `,
  tip: "Always show the expected value beside the measured one — that comparison is the answer.",
  sources: ["C15", "C1", "C3"]
},
{
  id: "cc177", domain: "chem-renal", star: true,
  q: "Compare the types of renal tubular acidosis and explain the urine tests used to classify them.",
  tags: ["RTA", "urine anion gap", "Fanconi", "hyperkalaemia"],
  keypoints: ["normal-anion-gap metabolic acidosis", "urine anion gap", "ammonium", "distal RTA", "proximal RTA", "Fanconi syndrome", "type 4 RTA", "hyperkalaemia", "urine osmolal gap", "fractional excretion of bicarbonate", "nephrocalcinosis", "aldosterone"],
  answer: `
    <h4>Normal acidification</h4>
    <p>The proximal tubule reclaims filtered bicarbonate, and the distal nephron secretes hydrogen ions against a gradient, generating <strong>ammonium</strong> and titratable acid. Failure at either site produces a <strong>normal-anion-gap metabolic acidosis</strong> with a positive <strong>urine anion gap</strong> when ammonium excretion is low.</p>
    <h4>The types</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Defect</th><th>Plasma K</th><th>Urine pH</th><th>Clues</th></tr>
      <tr><td>1 (<strong>distal RTA</strong>)</td><td>Impaired distal H⁺ secretion</td><td>Low</td><td>&gt;5.5</td><td>Stones, <strong>nephrocalcinosis</strong></td></tr>
      <tr><td>2 (<strong>proximal RTA</strong>)</td><td>Impaired bicarbonate reabsorption</td><td>Low</td><td>&lt;5.5 once bicarbonate is depleted</td><td><strong>Fanconi syndrome</strong>, glycosuria, phosphaturia</td></tr>
      <tr><td>4 (<strong>type 4 RTA</strong>)</td><td>Aldosterone deficiency or resistance</td><td>High</td><td>&lt;5.5</td><td>Diabetes, NSAIDs, calcineurin inhibitors, heparin</td></tr>
    </table></div>
    <h4>Diagnostic tests</h4>
    <ul>
      <li><strong>Urine pH</strong> during acidosis: above 5.5 in distal RTA; below 5.5 in proximal and type 4 once steady state is reached.</li>
      <li><strong>Urine anion gap</strong> (Na + K − Cl): positive suggests impaired ammonium excretion, as in distal RTA.</li>
      <li><strong>Urine osmolal gap</strong> estimates ammonium when the anion gap is unhelpful.</li>
      <li><strong>Fractional excretion of bicarbonate</strong> during bicarbonate loading exceeds 15% in proximal RTA.</li>
      <li>Furosemide and fludrocortisone tests assess distal acidification and <strong>aldosterone</strong> response in specialist centres.</li>
    </ul>
    <h4>Clinical significance</h4>
    <p>Distal RTA causes hypercalciuria, hypocitraturia and calcium phosphate stones, and in children causes growth failure and rickets. Proximal RTA is usually part of Fanconi syndrome, with hypophosphataemia, glycosuria and aminoaciduria. Type 4 RTA is the commonest in adults with diabetes and is characterised by <strong>hyperkalaemia</strong>; potassium handling is the practical discriminator. The acidosis is corrected with alkali, and potassium and bone status are monitored; the underlying cause, including drugs, is treated.</p>
  `,
  tip: "Type 4 is the high-potassium RTA — that single fact answers many short questions.",
  sources: ["C1", "C3", "C15"]
},
{
  id: "cc178", domain: "chem-renal", star: true,
  q: "Discuss the syndrome of inappropriate antidiuretic hormone secretion: diagnostic criteria, causes, mimics and laboratory monitoring.",
  tags: ["SIADH", "hyponatraemia", "cerebral salt wasting"],
  keypoints: ["SIADH", "antidiuretic hormone", "euvolemic", "urine osmolality", "urine sodium", "hypotonicity", "uric acid", "cerebral salt wasting", "pseudohyponatraemia", "osmotic demyelination", "hypothyroidism", "small cell lung cancer"],
  answer: `
    <h4>Definition and mechanism</h4>
    <p><strong>SIADH</strong> is <strong>euvolemic</strong> hypotonic hyponatraemia caused by inappropriate secretion or action of <strong>antidiuretic hormone</strong>. Water retention dilutes sodium, and the resulting volume expansion causes natriuresis, so the patient remains clinically euvolemic while urine osmolality stays high.</p>
    <h4>Diagnostic criteria</h4>
    <ul>
      <li>Serum sodium low with <strong>hypotonicity</strong> on measured osmolality.</li>
      <li><strong>Urine osmolality</strong> above 100 mOsm/kg.</li>
      <li><strong>Urine sodium</strong> above 30 mmol/L on a normal salt intake.</li>
      <li>Clinical euvolemia, with no oedema and no dehydration.</li>
      <li>Normal thyroid and adrenal function, and no recent diuretic.</li>
    </ul>
    <p>Supportive findings include low <strong>uric acid</strong>, low urea and a high fractional excretion of urate; urea excretion falls, which is why a low BUN supports the diagnosis. Hyponatraemia from <strong>hypothyroidism</strong> or glucocorticoid deficiency mimics the syndrome and must be excluded before the diagnosis is made.</p>
    <h4>Causes</h4>
    <div class="table-wrap"><table>
      <tr><th>Group</th><th>Examples</th></tr>
      <tr><td>Neurological</td><td>Stroke, haemorrhage, meningitis, Guillain–Barré syndrome</td></tr>
      <tr><td>Pulmonary</td><td>Pneumonia, tuberculosis, positive-pressure ventilation</td></tr>
      <tr><td>Malignancy</td><td><strong>Small cell lung cancer</strong>, head and neck tumours</td></tr>
      <tr><td>Drugs</td><td>SSRIs, carbamazepine, cyclophosphamide, vincristine</td></tr>
      <tr><td>Others</td><td>Pain, nausea, surgery, HIV, porphyria</td></tr>
    </table></div>
    <h4>Mimics and monitoring</h4>
    <p><strong>Cerebral salt wasting</strong> causes hypovolaemia and high urine sodium after brain injury, in contrast to the euvolemia of SIADH. <strong>Pseudohyponatraemia</strong> and hyperglycaemia are excluded by osmolality and glucose. The patient should be weighed and examined at each review, because clinical volume status is central to the diagnosis. During correction, sodium should be monitored frequently and the rise limited, because over-rapid correction risks <strong>osmotic demyelination</strong>; the rate should be reduced if the rise is excessive, and relowering may be required in specialist care.</p>
  `,
  tip: "State the five criteria and then the two mimics — volume status and thyroid/adrenal status.",
  sources: ["C1", "C3"]
},
{
  id: "cc179", domain: "chem-renal", star: true,
  q: "Compare central and nephrogenic diabetes insipidus, and explain the water deprivation test, copeptin measurement and specimen handling for ADH.",
  tags: ["diabetes insipidus", "water deprivation", "copeptin", "polyuria"],
  keypoints: ["diabetes insipidus", "ADH", "nephrogenic", "primary polydipsia", "water deprivation test", "desmopressin", "copeptin", "hypertonic saline", "hypernatraemia", "lithium", "hypercalcaemia", "osmotic diuresis"],
  answer: `
    <h4>Polyuria and its causes</h4>
    <p><strong>Diabetes insipidus</strong> is failure to concentrate urine because of insufficient <strong>ADH</strong> (central) or renal resistance to it (<strong>nephrogenic</strong>). Polyuria is conventionally more than 3 L per day, with dilute urine and compensatory thirst. <strong>Primary polydipsia</strong> and <strong>osmotic diuresis</strong> from glucose or mannitol are the main mimics.</p>
    <h4>Water deprivation test</h4>
    <ol>
      <li>Stop fluids and weigh the patient regularly; stop if weight falls excessively or sodium rises dangerously.</li>
      <li>Measure urine osmolality and volume hourly, and plasma osmolality and sodium periodically.</li>
      <li>Give <strong>desmopressin</strong> and observe whether urine osmolality rises.</li>
    </ol>
    <div class="table-wrap"><table>
      <tr><th>Diagnosis</th><th>During deprivation</th><th>After desmopressin</th></tr>
      <tr><td>Complete central DI</td><td>Urine stays dilute</td><td>Marked rise</td></tr>
      <tr><td>Complete nephrogenic DI</td><td>Urine stays dilute</td><td>No rise</td></tr>
      <tr><td>Primary polydipsia</td><td>Urine concentrates</td><td>Little further rise</td></tr>
      <tr><td>Partial defects</td><td>Intermediate</td><td>Partial rise</td></tr>
    </table></div>
    <h4>Copeptin and ADH measurement</h4>
    <p><strong>Copeptin</strong> is co-secreted with ADH and is more stable. Stimulated copeptin after <strong>hypertonic saline</strong> or arginine is replacing the water deprivation test in many centres. ADH itself is unstable: collect in a chilled EDTA tube, separate promptly, freeze, and avoid haemolysis. A random ADH is rarely diagnostic.</p>
    <h4>Causes and laboratory clues</h4>
    <ul>
      <li>Central: pituitary surgery or trauma, granulomatous disease, metastases, congenital mutations.</li>
      <li>Nephrogenic: <strong>lithium</strong>, <strong>hypercalcaemia</strong>, hypokalaemia, sickle cell disease, polycystic kidneys, older age.</li>
      <li>Serum sodium may be normal if thirst is intact; <strong>hypernatraemia</strong> indicates inadequate access to water.</li>
      <li>Check glucose, calcium, potassium and creatinine before dynamic testing.</li>
    </ul>
    <p>A structured test should be performed only when the cause is unclear and the patient is stable, because prolonged deprivation is hazardous. Thirst and access to water determine whether polyuria produces hypernatraemia.</p>
  `,
  tip: "The desmopressin response separates central from nephrogenic — draw the three-row table.",
  sources: ["C1", "C3"]
},
{
  id: "cc180", domain: "chem-renal",
  q: "Compare urine osmolality and specific gravity, explain the urine osmolal gap, and describe the pre-analytical care of urine specimens.",
  tags: ["urine osmolality", "specific gravity", "osmolal gap"],
  keypoints: ["osmolality", "freezing-point depression", "specific gravity", "refractometer", "isosthenuria", "urine osmolal gap", "ammonium", "urine anion gap", "volatile solutes", "radiocontrast", "proteinuria", "pre-analytical"],
  answer: `
    <h4>What is being measured</h4>
    <p><strong>Osmolality</strong> is the number of solute particles per kilogram of solvent, measured by <strong>freezing-point depression</strong> (reference) or vapour pressure. <strong>Specific gravity</strong> is the ratio of urine density to water density, measured by <strong>refractometer</strong>, urinometer or a dipstick that changes pKa with ionic strength. Osmolality reflects particle number; specific gravity also reflects molecular mass, so glucose, protein and radiocontrast raise specific gravity more than osmolality.</p>
    <h4>Interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Finding</th><th>Typical setting</th></tr>
      <tr><td>Urine osmolality &gt;500</td><td>Volume depletion, SIADH, pre-renal azotaemia</td></tr>
      <tr><td>Urine osmolality &lt;350</td><td>Acute tubular necrosis, diabetes insipidus, primary polydipsia</td></tr>
      <tr><td><strong>Isosthenuria</strong> (~300)</td><td>Chronic kidney disease, sickle cell nephropathy</td></tr>
      <tr><td>Specific gravity &gt;1.030</td><td>Concentrated urine, glycosuria, <strong>proteinuria</strong>, contrast</td></tr>
    </table></div>
    <p>A specific gravity of 1.010 corresponds roughly to 300 mOsm/kg only when solute composition is normal; the relationship is not linear and should not be used to calculate osmolality. Specific gravity is therefore a screening estimate, not a substitute for measured osmolality.</p>
    <h4>The urine osmolal gap</h4>
    <p>The measured urine osmolality minus the calculated osmolality (2 × Na + K + urea + glucose) is used as a surrogate for <strong>ammonium</strong> excretion when the <strong>urine anion gap</strong> is misleading, for example with ketoacidosis or after diuretics. A large gap suggests adequate ammonium excretion and argues against distal renal tubular acidosis.</p>
    <h4>Pre-analytical care</h4>
    <ul>
      <li>Collect a fresh sample; bacteria consume glucose and cells lyse on standing.</li>
      <li>Refrigerate if analysis is delayed, but allow equilibration to room temperature before measurement.</li>
      <li>Do not use specific gravity to assess concentration in patients receiving <strong>radiocontrast</strong> or with heavy proteinuria.</li>
      <li>Osmolality by vapour pressure misses <strong>volatile solutes</strong> such as ethanol and methanol.</li>
    </ul>
  `,
  tip: "Osmolality counts particles; specific gravity also weighs them — that sentence covers the comparison.",
  sources: ["C1", "C3"]
},
{
  id: "cc181", domain: "chem-renal", star: true,
  q: "Describe laboratory monitoring of a patient on maintenance dialysis, including urea kinetics, correct sample timing and the interpretation of pre- and post-dialysis biochemistry.",
  tags: ["dialysis", "Kt/V", "urea rebound", "adequacy"],
  keypoints: ["small solutes", "urea kinetics", "Kt/V", "urea reduction ratio", "recirculation", "urea rebound", "potassium", "bicarbonate", "CKD–mineral bone disease", "β₂-microglobulin", "peritoneal equilibration test", "residual kidney function", "ultrafiltration"],
  answer: `
    <h4>Why dialysis is monitored</h4>
    <p>Adequacy describes clearance of <strong>small solutes</strong> such as urea and, indirectly, middle molecules and fluid removal. Monitoring combines <strong>urea kinetics</strong>, pre- and post-dialysis biochemistry, volume assessment and clinical review. Inadequate clearance is associated with worse outcomes, while excessive <strong>ultrafiltration</strong> causes intradialytic hypotension and access thrombosis.</p>
    <h4>Urea kinetics</h4>
    <div class="calc">URR = (pre-dialysis urea − post-dialysis urea) / pre-dialysis urea × 100
Kt/V = ln(post/pre − 0.008 × t) + (4 − 3.5 × post/pre) × ultrafiltration/weight</div>
    <p><strong>Kt/V</strong> and the <strong>urea reduction ratio</strong> are reported per session and compared with guideline targets. Post-dialysis blood must be drawn correctly: stop the pump, slow the access flow briefly, and sample from the arterial line to avoid <strong>recirculation</strong> and dilution. <strong>Urea rebound</strong> means an immediate post-dialysis sample overestimates clearance, so some protocols use a sample 30–60 minutes later.</p>
    <h4>Biochemical monitoring</h4>
    <ul>
      <li><strong>Potassium</strong>: high before dialysis and low afterwards; a rising pre-dialysis value suggests dietary or access problems.</li>
      <li><strong>Bicarbonate</strong>: correction of uraemic acidosis can overshoot into metabolic alkalosis.</li>
      <li>Phosphate and calcium: monitored with PTH in <strong>CKD–mineral bone disease</strong>.</li>
      <li>Albumin, haemoglobin and ferritin: nutrition, anaemia and iron status.</li>
      <li>Aluminium if exposure is suspected; <strong>β₂-microglobulin</strong> for middle-molecule clearance in some units.</li>
    </ul>
    <h4>Peritoneal dialysis and access</h4>
    <p>Peritoneal dialysis uses Kt/V and creatinine clearance from a timed dialysate collection, together with a <strong>peritoneal equilibration test</strong>. For both modalities, access recirculation, infection and <strong>residual kidney function</strong> are reviewed. The laboratory should state whether samples were drawn pre- or post-dialysis, because the same value means different things at the two time points.</p>
  `,
  tip: "Sampling technique before the formula — recirculation and rebound explain most odd Kt/V results.",
  sources: ["C7", "C1"]
},
{
  id: "cc182", domain: "chem-renal", star: true,
  q: "Discuss drug-induced kidney injury: the patterns of nephrotoxicity, their laboratory clues, and how patients on nephrotoxic therapy should be monitored.",
  tags: ["nephrotoxicity", "interstitial nephritis", "contrast", "TDM"],
  keypoints: ["chronic kidney disease", "acute tubular injury", "acute interstitial nephritis", "crystal nephropathy", "osmotic nephrosis", "thrombotic microangiopathy", "muddy brown casts", "white cell casts", "therapeutic drug monitoring", "contrast", "aminoglycosides", "calcineurin inhibitors"],
  answer: `
    <h4>Why the kidney is vulnerable</h4>
    <p>The kidney receives a large share of cardiac output, concentrates tubular fluid and expresses drug transporters, so it is exposed to high intracellular concentrations. Risk is increased by <strong>chronic kidney disease</strong>, volume depletion, sepsis, older age and concurrent nephrotoxins. Creatinine is a late marker, so injury may be established before the value changes.</p>
    <h4>Patterns of injury</h4>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Typical drugs</th><th>Laboratory clues</th></tr>
      <tr><td><strong>Acute tubular injury</strong></td><td><strong>Aminoglycosides</strong>, amphotericin B, cisplatin, <strong>contrast</strong></td><td><strong>Muddy brown casts</strong>, rising creatinine, tubular proteinuria</td></tr>
      <tr><td><strong>Acute interstitial nephritis</strong></td><td>NSAIDs, penicillins, proton pump inhibitors, rifampicin</td><td>Sterile pyuria, <strong>white cell casts</strong>, eosinophiluria (poorly sensitive)</td></tr>
      <tr><td><strong>Crystal nephropathy</strong></td><td>Acyclovir, sulfadiazine, methotrexate, indinavir</td><td>Crystals, haematuria, obstructing stones</td></tr>
      <tr><td><strong>Osmotic nephrosis</strong></td><td>Mannitol, intravenous immunoglobulin, hydroxyethyl starch</td><td>Vacuolar tubular change, rising creatinine</td></tr>
      <tr><td><strong>Thrombotic microangiopathy</strong></td><td><strong>Calcineurin inhibitors</strong>, mitomycin, VEGF inhibitors</td><td>Schistocytes, low platelets, raised LDH</td></tr>
      <tr><td>Glomerular injury</td><td>NSAIDs, interferon, pamidronate</td><td>Proteinuria, nephrotic syndrome</td></tr>
    </table></div>
    <h4>Monitoring</h4>
    <ul>
      <li>Baseline creatinine and eGFR, urinalysis, electrolytes and blood pressure before high-risk therapy.</li>
      <li>Serial creatinine, potassium and magnesium for aminoglycosides, amphotericin and calcineurin inhibitors.</li>
      <li><strong>Therapeutic drug monitoring</strong> where available, with trough or AUC sampling as appropriate.</li>
      <li>Urine output and fluid balance, especially with contrast and cisplatin.</li>
    </ul>
    <h4>Prevention and interpretation</h4>
    <p>Avoid combining nephrotoxins, correct volume depletion and review all prescribed and over-the-counter drugs, including herbal preparations. A rising creatinine after contrast usually peaks within a few days and then falls, whereas drug-induced interstitial nephritis may persist after withdrawal. Recovery is not guaranteed, so the laboratory should communicate the trend and urine output rather than a single value.</p>
  `,
  tip: "Match each drug class to a pattern and a sediment finding; that structure earns the marks.",
  sources: ["C1", "C3", "C7"]
},
{
  id: "cc183", domain: "chem-renal", star: true,
  q: "Discuss tumour lysis syndrome: its metabolic derangements, the laboratory definition, uric acid measurement and the monitoring required.",
  tags: ["tumour lysis", "uric acid", "rasburicase", "hyperkalaemia"],
  keypoints: ["tumour lysis syndrome", "Burkitt lymphoma", "hyperuricaemia", "hyperkalaemia", "hyperphosphataemia", "hypocalcaemia", "Cairo–Bishop", "rasburicase", "uricase", "G6PD deficiency", "LDH", "uric acid stones"],
  answer: `
    <h4>Pathophysiology</h4>
    <p><strong>Tumour lysis syndrome</strong> follows rapid destruction of malignant cells, usually after starting chemotherapy for a high-grade tumour such as <strong>Burkitt lymphoma</strong>, acute lymphoblastic leukaemia or acute myeloid leukaemia. Intracellular contents are released faster than the kidneys can excrete them, producing <strong>hyperuricaemia</strong>, <strong>hyperkalaemia</strong>, <strong>hyperphosphataemia</strong> and secondary <strong>hypocalcaemia</strong>.</p>
    <h4>Laboratory definition</h4>
    <p>The <strong>Cairo–Bishop</strong> classification requires two or more abnormal values within a defined window around treatment: uric acid, potassium, phosphate and calcium, together with creatinine for clinical tumour lysis. Baseline values and the trend matter more than a single result, and risk is assessed from tumour type, burden, <strong>LDH</strong> and renal function.</p>
    <h4>Uric acid and crystal injury</h4>
    <p>Uric acid is the end-product of purine catabolism in humans. At acid pH it is poorly soluble and precipitates in the tubules; calcium phosphate crystals add to the injury. <strong>Uricase</strong>-based assays measure uric acid, and the enzyme drug <strong>rasburicase</strong> degrades uric acid in the sample after collection. Blood must therefore be collected on ice and analysed promptly, or the result will be falsely low. <strong>G6PD deficiency</strong> is a contraindication to rasburicase because of haemolysis.</p>
    <h4>Monitoring and prevention</h4>
    <ul>
      <li>Record baseline uric acid, potassium, phosphate, calcium, creatinine and LDH.</li>
      <li>Monitor several times daily during the high-risk period.</li>
      <li>Maintain urine output and avoid potassium and phosphate intake.</li>
      <li>Watch for tetany, seizures and arrhythmia from hypocalcaemia and hyperkalaemia.</li>
      <li>Escalate to dialysis for refractory hyperkalaemia, severe hyperphosphataemia or oliguric renal failure.</li>
    </ul>
    <p>Uric acid is also relevant outside oncology: it is low in Fanconi syndrome and SIADH, high in gout and CKD, and a risk factor for <strong>uric acid stones</strong> in acidic urine.</p>
  `,
  tip: "The pre-analytical rasburicase point is the laboratory detail most candidates miss.",
  sources: ["C1", "C3"]
},
{
  id: "cc184", domain: "chem-renal",
  q: "Describe the laboratory findings in nephrotic syndrome and the secondary causes that must be excluded.",
  tags: ["nephrotic syndrome", "proteinuria", "anti-PLA2R", "amyloidosis"],
  keypoints: ["nephrotic syndrome", "heavy proteinuria", "hypoalbuminaemia", "hyperlipidaemia", "antithrombin", "oval fat bodies", "Maltese crosses", "anti-PLA2R", "amyloidosis", "protein:creatinine ratio", "complement", "membranous nephropathy"],
  answer: `
    <h4>Definition and mechanism</h4>
    <p><strong>Nephrotic syndrome</strong> is a glomerular disorder with <strong>heavy proteinuria</strong>, <strong>hypoalbuminaemia</strong>, oedema and <strong>hyperlipidaemia</strong>. Injury to the glomerular filtration barrier increases permeability to albumin and other proteins; sodium retention and reduced effective circulating volume produce oedema. Loss of <strong>antithrombin</strong> and immunoglobulins explains thrombosis and infection risk.</p>
    <h4>Laboratory findings</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Expected finding</th></tr>
      <tr><td>Urine <strong>protein:creatinine ratio</strong></td><td>Markedly raised; 24-h collection if needed</td></tr>
      <tr><td>Serum albumin</td><td>Low</td></tr>
      <tr><td>Serum protein electrophoresis</td><td>Low albumin, high α₂, low γ</td></tr>
      <tr><td>Lipids</td><td>Raised cholesterol and triglycerides</td></tr>
      <tr><td>Urine microscopy</td><td><strong>Oval fat bodies</strong>, fatty casts, <strong>Maltese crosses</strong></td></tr>
      <tr><td><strong>Complement</strong></td><td>Low in post-infectious glomerulonephritis, lupus, cryoglobulinaemia</td></tr>
    </table></div>
    <h4>Secondary causes to exclude</h4>
    <ul>
      <li>Diabetes and <strong>amyloidosis</strong> in older adults.</li>
      <li>Systemic lupus erythematosus, hepatitis B and C, HIV, syphilis and malaria.</li>
      <li>Drugs: NSAIDs, penicillamine, captopril, interferon.</li>
      <li>Malignancy, especially <strong>membranous nephropathy</strong> with <strong>anti-PLA2R</strong> antibodies.</li>
      <li>Hereditary podocyte disorders in young patients with a family history.</li>
    </ul>
    <h4>Interpretation and monitoring</h4>
    <p>Age, complement, autoantibodies and serology guide the decision to biopsy. Anti-PLA2R supports primary membranous nephropathy and can be monitored for response. Serum free light chains and immunofixation screen for amyloid or paraprotein-related disease. Monitoring includes urine protein, albumin, creatinine, lipids, glucose and blood pressure, recorded with every sample. The protein:creatinine ratio on a spot sample correlates well with 24-hour excretion and is easier to repeat. The distinction matters because treatment and prognosis differ, and some causes recur after transplantation. A sudden fall in proteinuria may reflect recovery or a fall in glomerular filtration, so it must be interpreted with creatinine.</p>
  `,
  tip: "Give the tetrad, then the secondary screen by age — that is the clinical half of the answer.",
  sources: ["C1", "C3", "C7"]
},
{
  id: "cc185", domain: "chem-renal",
  q: "What laboratory tests are used to monitor a kidney transplant recipient? Discuss graft function, donor-specific antibodies, infection and drug monitoring.",
  tags: ["transplant", "DSA", "BK virus", "tacrolimus"],
  keypoints: ["creatinine", "donor-specific antibodies", "mean fluorescence intensity", "BK PCR", "CMV PCR", "tacrolimus", "hyperkalaemia", "type 4 renal tubular acidosis", "post-transplant diabetes", "cystatin C", "delayed graft function", "protocol biopsy"],
  answer: `
    <h4>What is monitored</h4>
    <p>After kidney transplantation, the laboratory follows graft function, immune activation, infection and drug exposure. <strong>Creatinine</strong> and eGFR are the backbone, but they change late and are influenced by muscle mass and hydration. A rising creatinine may mean rejection, calcineurin inhibitor toxicity, obstruction, infection or recurrent disease, so trend and context matter.</p>
    <h4>Immune monitoring</h4>
    <ul>
      <li><strong>Donor-specific antibodies</strong> by single-antigen bead assay; complement-binding and <strong>mean fluorescence intensity</strong> help stratify risk.</li>
      <li>Urine protein and albumin to detect de novo glomerular disease.</li>
      <li>Protocol or indication <strong>protocol biopsy</strong> for histological diagnosis, including C4d staining and polyomavirus studies.</li>
    </ul>
    <h4>Infection and drug monitoring</h4>
    <div class="table-wrap"><table>
      <tr><th>Target</th><th>Test</th><th>Comment</th></tr>
      <tr><td>BK polyomavirus</td><td>Plasma or urine <strong>BK PCR</strong></td><td>High viral load suggests BK nephropathy; reduce immunosuppression</td></tr>
      <tr><td>Cytomegalovirus</td><td><strong>CMV PCR</strong></td><td>Monitor high-risk serostatus combinations</td></tr>
      <tr><td>Calcineurin inhibitors</td><td><strong>Tacrolimus</strong> or ciclosporin trough</td><td>Narrow therapeutic index; sample timing is critical</td></tr>
      <tr><td>Mycophenolate</td><td>AUC or limited sampling</td><td>Selected patients</td></tr>
    </table></div>
    <h4>Metabolic and haematological effects</h4>
    <p>Calcineurin inhibitors cause <strong>hyperkalaemia</strong> with a <strong>type 4 renal tubular acidosis</strong>, hypomagnesaemia, hyperuricaemia and <strong>post-transplant diabetes</strong>. Corticosteroids raise glucose and bone turnover; sirolimus can cause proteinuria and dyslipidaemia; valganciclovir causes marrow suppression. <strong>Cystatin C</strong> may detect reduced filtration earlier than creatinine when muscle mass is low. <strong>Delayed graft function</strong> is indicated by the need for dialysis in the first week, and the laboratory should flag critical potassium and creatinine values promptly. The panel is repeated at protocol intervals and whenever graft function changes; results should be compared with the patient's previous value rather than a population range, and an unexplained rise warrants urgent review.</p>
  `,
  tip: "Separate the panel into graft, immune, infection and drug — four headings, no overlap.",
  sources: ["C7", "C12", "C1"]
},
{
  id: "cc186", domain: "chem-renal",
  q: "Discuss the causes and laboratory assessment of hypocalcaemia, including the interpretation of PTH and magnesium.",
  tags: ["hypocalcaemia", "PTH", "magnesium", "hungry bone"],
  keypoints: ["ionised calcium", "adjusted calcium", "albumin", "hypoparathyroidism", "hypomagnesaemia", "pseudohypoparathyroidism", "Chvostek", "Trousseau", "QT prolongation", "hungry bone syndrome", "hyperphosphataemia", "citrate"],
  answer: `
    <h4>Forms of calcium</h4>
    <p>About 45% of plasma calcium is <strong>ionised calcium</strong> and biologically active, 40% is <strong>albumin</strong>-bound and 15% is complexed. Total calcium changes with albumin, so the <strong>adjusted calcium</strong> or a direct ionised calcium is needed. Alkalosis lowers ionised calcium by increasing albumin binding, and <strong>citrate</strong> in massive transfusion chelates calcium. A low total calcium with a normal ionised value therefore indicates a binding or albumin problem rather than true deficiency, and ionised calcium is the safer guide in hypoalbuminaemia.</p>
    <h4>Causes</h4>
    <div class="table-wrap"><table>
      <tr><th>Mechanism</th><th>Examples</th></tr>
      <tr><td>Low PTH</td><td>Post-thyroidectomy or parathyroid surgery, autoimmune <strong>hypoparathyroidism</strong>, <strong>hypomagnesaemia</strong></td></tr>
      <tr><td>Vitamin D deficiency</td><td>Poor intake, malabsorption, limited sun exposure, chronic kidney disease</td></tr>
      <tr><td>PTH resistance</td><td><strong>Pseudohypoparathyroidism</strong></td></tr>
      <tr><td>Sequestration</td><td>Acute pancreatitis, rhabdomyolysis, tumour lysis, citrate</td></tr>
      <tr><td>Drugs</td><td>Bisphosphonates, denosumab, foscarnet, cisplatin</td></tr>
    </table></div>
    <h4>Clinical and laboratory assessment</h4>
    <ul>
      <li>Symptoms: perioral tingling, cramps, tetany, seizures, laryngospasm. Rapid falls produce symptoms at higher calcium concentrations than chronic falls, because adaptation takes time.</li>
      <li>Signs: <strong>Chvostek</strong> and <strong>Trousseau</strong> signs; ECG shows <strong>QT prolongation</strong>.</li>
      <li>Measure phosphate, magnesium, alkaline phosphatase, creatinine and PTH.</li>
      <li>A high PTH indicates vitamin D deficiency, renal disease or PTH resistance; a low or inappropriately normal PTH indicates hypoparathyroidism.</li>
    </ul>
    <h4>Interpretation</h4>
    <p><strong>Hypomagnesaemia</strong> impairs PTH secretion and action, so magnesium must be corrected for calcium to rise. In chronic kidney disease, <strong>hyperphosphataemia</strong> and low calcitriol drive hypocalcaemia and secondary hyperparathyroidism. Ionised calcium should be measured when the total calcium and the clinical picture disagree, particularly in critical illness and after large-volume transfusion. A low 25-hydroxyvitamin D with a high PTH confirms vitamin D deficiency, while a low PTH with high phosphate suggests hypoparathyroidism. After parathyroidectomy, rapid falls in PTH cause <strong>hungry bone syndrome</strong> with hypocalcaemia, hypophosphataemia and hypomagnesaemia. Monitoring should continue during treatment because overcorrection causes hypercalciuria and renal injury.</p>
  `,
  tip: "PTH is the branch point again; add magnesium because it explains refractory hypocalcaemia.",
  sources: ["C14", "C1", "C3"]
}
);
