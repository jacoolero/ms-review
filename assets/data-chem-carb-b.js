/* Clinical Chemistry — carbohydrates & diabetes, part B (cc115–cc132). */
window.QBANK.push(
{
  id: "cc115", domain: "chem-carb", star: true,
  q: "Explain glucose homeostasis in the fed and fasted states and the hormonal counter-regulation that protects against hypoglycaemia.",
  tags: ["glucose homeostasis", "counter-regulation", "incretins"],
  keypoints: ["insulin", "glucagon", "GLUT2", "GLUT4", "glucokinase", "glycogenolysis", "gluconeogenesis", "lipolysis", "ketogenesis", "incretin", "GLP-1", "GIP", "counter-regulation", "cortisol", "growth hormone", "C-peptide"],
  answer: `
    <h4>The fed state</h4>
    <p>After a meal, glucose enters the portal circulation. Pancreatic β cells take it up through <strong>GLUT2</strong> and phosphorylate it with <strong>glucokinase</strong>, the glucose sensor that sets the threshold for <strong>insulin</strong> release. Insulin is the dominant anabolic hormone: it stimulates glycogen synthesis in liver and muscle, glucose uptake through <strong>GLUT4</strong> in muscle and adipose tissue, lipogenesis and protein synthesis, while suppressing hepatic glucose output. The <strong>incretin</strong> hormones — <strong>GLP-1</strong> from intestinal L cells and <strong>GIP</strong> from K cells — amplify postprandial insulin secretion and suppress glucagon.</p>
    <h4>The fasted state</h4>
    <p>As glucose falls, insulin falls and <strong>glucagon</strong> rises. Hepatic <strong>glycogenolysis</strong> supplies glucose for the first hours; thereafter <strong>gluconeogenesis</strong> from lactate, glycerol and amino acids becomes dominant. <strong>Lipolysis</strong> releases free fatty acids, and hepatic <strong>ketogenesis</strong> provides an alternative fuel for brain and muscle after more prolonged fasting. The kidney also contributes to gluconeogenesis.</p>
    <h4>Counter-regulation</h4>
    <div class="table-wrap"><table>
      <tr><th>Hormone</th><th>Trigger</th><th>Main action</th></tr>
      <tr><td><strong>Glucagon</strong></td><td>Falling glucose, fasting</td><td>Glycogenolysis and gluconeogenesis; ketogenesis</td></tr>
      <tr><td>Adrenaline</td><td>Acute hypoglycaemia or stress</td><td>Glycogenolysis, lipolysis, tremor and sweating</td></tr>
      <tr><td><strong>Cortisol</strong></td><td>Sustained fasting or stress</td><td>Gluconeogenesis and insulin resistance</td></tr>
      <tr><td><strong>Growth hormone</strong></td><td>Fasting and sleep</td><td>Lipolysis and antagonism of insulin</td></tr>
    </table></div>
    <p>The response is hierarchical: glucagon is the first and most important defence, then adrenaline, then cortisol and growth hormone. A falling glucose also suppresses endogenous insulin, removing the glucose-lowering signal. Failure of any limb — adrenal insufficiency, hypopituitarism, advanced liver or renal disease — causes fasting hypoglycaemia.</p>
    <h4>Laboratory correlates</h4>
    <p>Fasting glucose chiefly reflects hepatic glucose output and basal insulin, while the postprandial value reflects tissue disposal and the incretin effect. Because insulin and <strong>C-peptide</strong> are secreted equimolarly, C-peptide indicates endogenous β-cell output even when exogenous insulin is present. Loss of first-phase insulin release and of the incretin effect explains the early postprandial spikes of type 2 diabetes.</p>
  `,
  tip: "Organise by fed state, fasted state, then the hierarchy of counter-regulatory hormones, with a laboratory correlate for each.",
  sources: ["C1", "C2", "C6"]
},
{
  id: "cc116", domain: "chem-carb", star: true,
  q: "Outline the current approach to screening for type 2 diabetes and prediabetes in asymptomatic adults, and explain how a positive screen is confirmed.",
  tags: ["screening", "prediabetes", "ADA"],
  keypoints: ["35 years", "risk factors", "fasting plasma glucose", "OGTT", "HbA1c", "two abnormal results", "prediabetes", "impaired fasting glucose", "impaired glucose tolerance", "annual", "every 3 years", "barangay health unit", "tuberculosis", "confirm"],
  answer: `
    <h4>Who to screen</h4>
    <p>The ADA advises screening all adults from age <strong>35 years</strong>, and earlier or more often in people with overweight or obesity plus <strong>risk factors</strong>: a first-degree relative with diabetes, a high-risk ethnic background (including Asian populations such as Filipinos), previous gestational diabetes, polycystic ovary syndrome, hypertension, dyslipidaemia, physical inactivity, cardiovascular disease, obstructive sleep apnoea, HIV, pancreatitis, or long-term glucocorticoid or antipsychotic therapy. In the Philippines, opportunistic screening in the <strong>barangay health unit</strong> and bidirectional screening of people with <strong>tuberculosis</strong> are practical ways to find cases.</p>
    <h4>How to screen</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Diabetes</th><th>Prediabetes</th></tr>
      <tr><td><strong>Fasting plasma glucose</strong> (8 h fast)</td><td>≥ 7.0 mmol/L (126 mg/dL)</td><td>5.6–6.9 mmol/L (IFG)</td></tr>
      <tr><td>2-h plasma glucose, 75 g <strong>OGTT</strong></td><td>≥ 11.1 mmol/L (200 mg/dL)</td><td>7.8–11.0 mmol/L (IGT)</td></tr>
      <tr><td><strong>HbA1c</strong>, NGSP-certified</td><td>≥ 6.5% (48 mmol/mol)</td><td>5.7–6.4%</td></tr>
    </table></div>
    <p>Any one test may be used; none is clearly superior. Fasting glucose is cheap and widely available but needs a true fast and prompt separation. The OGTT is more sensitive but inconvenient. HbA1c needs a certified method and is unreliable when red cell survival is abnormal. Urine glucose and random capillary glucose are not screening tests.</p>
    <h4>Confirming a positive result</h4>
    <p>Without classic symptoms, the diagnosis requires <strong>two abnormal results</strong>, either from the same sample or from two separate samples. If two different tests disagree, the test above the cut-off should be repeated. A single result is sufficient in a symptomatic patient with glucose ≥ 11.1 mmol/L.</p>
    <h4>Prediabetes and follow-up</h4>
    <p><strong>Prediabetes</strong> — <strong>impaired fasting glucose</strong> 5.6–6.9 mmol/L, <strong>impaired glucose tolerance</strong> 7.8–11.0 mmol/L, or HbA1c 5.7–6.4% — should be reviewed at least <strong>annual</strong>ly, with lifestyle intervention and, in selected people, metformin. Normal results are repeated at least <strong>every 3 years</strong>, sooner if risk factors change. Screening must be linked to recall and treatment; a result with no follow-up is wasted.</p>
  `,
  tip: "Give the three tests and their cut-offs, then the rule of two abnormal results; finish with the recall interval.",
  sources: ["C6", "C1", "C2"]
},
{
  id: "cc117", domain: "chem-carb", star: true,
  q: "A 22-year-old presents with weight loss and a glucose of 22 mmol/L. Discuss the laboratory tests that distinguish type 1 from type 2 diabetes and their interpretation.",
  tags: ["type 1 diabetes", "autoantibodies", "C-peptide"],
  keypoints: ["β-hydroxybutyrate", "GAD65", "IA-2", "ZnT8", "C-peptide", "islet autoantibodies", "ketosis", "glucose toxicity", "latent autoimmune diabetes", "heterophile antibodies", "glucagon", "MODY"],
  answer: `
    <h4>At presentation</h4>
    <p>Measure plasma glucose, venous pH and bicarbonate, electrolytes with the anion gap, <strong>β-hydroxybutyrate</strong>, HbA1c and a full blood count. <strong>Ketosis</strong> with acidosis indicates a catabolic state and makes type 1 likely, but ketosis-prone type 2 diabetes also occurs, particularly in some Asian and African populations. The HbA1c shows how long hyperglycaemia has been present.</p>
    <h4>Islet autoantibodies</h4>
    <p><strong>GAD65</strong> antibodies are the most sensitive single marker; <strong>IA-2</strong> and <strong>ZnT8</strong> antibodies add specificity. Insulin autoantibodies are useful only before insulin treatment. Positivity confirms autoimmune type 1 diabetes, including <strong>latent autoimmune diabetes</strong> in adults, and predicts progression to insulin dependence.</p>
    <h4>C-peptide</h4>
    <p><strong>C-peptide</strong> is co-secreted with insulin and reflects endogenous β-cell reserve. A low fasting or post-meal C-peptide supports type 1; a normal or high value supports type 2 or monogenic diabetes. Interpret it with the simultaneous glucose, because hyperglycaemia itself suppresses secretion (<strong>glucose toxicity</strong>) and renal impairment raises C-peptide.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Type 1</th><th>Type 2</th><th>MODY</th></tr>
      <tr><td>Age at onset</td><td>Usually young</td><td>Usually older</td><td>Under 25–30</td></tr>
      <tr><td>Autoantibodies</td><td>Positive</td><td>Negative</td><td>Negative</td></tr>
      <tr><td>C-peptide</td><td>Low</td><td>Normal or high</td><td>Preserved</td></tr>
      <tr><td>Ketosis</td><td>Common</td><td>Uncommon</td><td>Rare</td></tr>
      <tr><td>Family history</td><td>Variable</td><td>Common</td><td>Autosomal dominant</td></tr>
    </table></div>
    <h4>Pitfalls</h4>
    <p>About 10–20% of type 1 patients are autoantibody-negative, and assays differ. C-peptide measured during ketoacidosis may be falsely low and should be repeated after recovery. Insulin assays may not detect analogues, and <strong>heterophile antibodies</strong> can produce impossible results. Classification matters because it determines insulin use, genetic testing and family screening.</p>
  `,
  tip: "Lead with ketones and the acute chemistry, then autoantibodies and C-peptide, and finish with the reversible suppression of C-peptide.",
  sources: ["C6", "C1", "C2"]
},
{
  id: "cc118", domain: "chem-carb", star: true,
  q: "A patient with HbE trait has an HbA1c of 5.1% but a fasting plasma glucose of 8.4 mmol/L. Explain the discrepancy and describe how glycaemia should be assessed.",
  tags: ["HbA1c", "HbE", "haemoglobin variants", "interference"],
  keypoints: ["HbE", "red cell lifespan", "haemolysis", "recent transfusion", "boronate affinity", "chromatogram", "fructosamine", "glycated albumin", "continuous glucose monitoring", "fasting plasma glucose", "OGTT", "haemoglobin analysis"],
  answer: `
    <h4>Why the results disagree</h4>
    <p>HbA1c depends on both average glucose and <strong>red cell lifespan</strong>. <strong>HbE</strong> is a β-chain variant common in Southeast Asia, including the Philippines. Depending on the method, glycated HbE may co-elute with HbA1c, be suppressed, or appear as an extra peak, so the result can be falsely low or high. Other causes of a low HbA1c despite hyperglycaemia are <strong>haemolysis</strong>, <strong>recent transfusion</strong>, blood loss, erythropoietin therapy, pregnancy and advanced chronic kidney disease.</p>
    <h4>Check the method and the chromatogram</h4>
    <p>Request a full blood count and film, <strong>haemoglobin analysis</strong>, and the <strong>chromatogram</strong> or variant flag. <strong>Boronate affinity</strong> chromatography measures total glycated haemoglobin and is generally less affected by variants than charge-based methods, but no method is immune. Immunoturbidimetric assays may under-read HbE. The laboratory should state the method and its known limitations on the report.</p>
    <h4>How to assess glycaemia</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Preferred alternatives</th></tr>
      <tr><td>Haemoglobin variant</td><td><strong>Fasting plasma glucose</strong> or <strong>OGTT</strong>; fructosamine, glycated albumin, CGM</td></tr>
      <tr><td>Haemolysis or transfusion</td><td>FPG or OGTT; fructosamine; CGM</td></tr>
      <tr><td>Chronic kidney disease</td><td>CGM; glycated albumin used cautiously</td></tr>
      <tr><td>Pregnancy</td><td>OGTT; CGM</td></tr>
    </table></div>
    <p>In this patient the fasting glucose of 8.4 mmol/L already meets the diagnostic threshold, so a repeat fasting glucose or an OGTT is the correct next step; the HbA1c must not be used to exclude diabetes. <strong>Fructosamine</strong> or <strong>glycated albumin</strong> can track short-term control, and <strong>continuous glucose monitoring</strong> gives a profile. Report the discrepancy and the method used, and never adjust treatment on a single implausible HbA1c.</p>
  `,
  tip: "Name HbE specifically, explain the method-dependent mechanism, then give the alternative tests rather than repeating the HbA1c.",
  sources: ["C1", "C6", "C2"]
},
{
  id: "cc119", domain: "chem-carb",
  q: "Discuss fructosamine and glycated albumin as markers of glycaemia: chemistry, clinical indications and limitations.",
  tags: ["fructosamine", "glycated albumin", "HbA1c alternatives"],
  keypoints: ["glycated serum proteins", "ketoamine", "nitroblue tetrazolium", "2–3 weeks", "haemoglobin variants", "recent transfusion", "pregnancy", "dialysis", "albumin turnover", "nephrotic syndrome", "cirrhosis", "not standardised", "CGM"],
  answer: `
    <h4>Chemistry</h4>
    <p><strong>Fructosamine</strong> is the collective name for glycated serum proteins, of which glycated albumin is the major component. Glucose attaches non-enzymatically to lysine residues, forming a stable <strong>ketoamine</strong>. Colorimetric methods reduce <strong>nitroblue tetrazolium</strong> in alkaline conditions; enzymatic and affinity methods are also used. <strong>Glycated albumin</strong> can be measured specifically by immunoassay or HPLC and expressed as a percentage of total albumin.</p>
    <h4>Interpretation</h4>
    <p>Because albumin has a half-life of about 20 days, fructosamine reflects glycaemia over the previous <strong>2–3 weeks</strong>. It is independent of red cell lifespan and <strong>haemoglobin variants</strong>, which makes it useful when HbA1c is invalid. Results are method-specific, so each laboratory must establish its own reference interval and audit performance.</p>
    <h4>Clinical indications</h4>
    <ul>
      <li>Haemoglobinopathies, including HbE and thalassaemia.</li>
      <li><strong>Recent transfusion</strong>, haemolysis or blood loss.</li>
      <li><strong>Pregnancy</strong>, where HbA1c falls with haemodilution.</li>
      <li><strong>Dialysis</strong> and erythropoietin therapy.</li>
      <li>Monitoring after a treatment change, when a shorter interval is wanted.</li>
    </ul>
    <h4>Limitations</h4>
    <p>Any condition that alters albumin concentration or <strong>albumin turnover</strong> changes the result: <strong>nephrotic syndrome</strong>, <strong>cirrhosis</strong>, protein-losing enteropathy, severe illness and thyroid disease. Fructosamine is <strong>not standardised</strong> across manufacturers, is not used to diagnose diabetes, and should not be compared between laboratories. It also misses postprandial excursions and hypoglycaemia. Interpret it with glucose, HbA1c and the clinical picture, and prefer <strong>CGM</strong> when a detailed profile is needed.</p>
  `,
  tip: "The two key ideas are the 2–3 week window and dependence on albumin turnover; end with why it cannot diagnose diabetes.",
  sources: ["C1", "C3", "C6"]
},
{
  id: "cc120", domain: "chem-carb", star: true,
  q: "Explain the physiology and laboratory interpretation of insulin and C-peptide measurements, including their use in classifying diabetes and investigating hypoglycaemia.",
  tags: ["insulin", "C-peptide", "β-cell reserve"],
  keypoints: ["proinsulin", "equimolar", "half-life", "hepatic extraction", "immunoassay", "standardised", "insulinoma", "sulfonylurea", "exogenous insulin", "molar ratio", "renal impairment", "hyperglycaemia"],
  answer: `
    <h4>Physiology</h4>
    <p><strong>Proinsulin</strong> is cleaved in the β cell into <strong>equimolar</strong> amounts of <strong>insulin</strong> and <strong>C-peptide</strong>. Insulin has a short <strong>half-life</strong> of a few minutes and is partly removed by <strong>hepatic extraction</strong>, so peripheral insulin concentrations underestimate portal delivery. C-peptide is cleared more slowly by the kidney and is not extracted by the liver, so it is a better marker of endogenous secretion.</p>
    <h4>Measurement</h4>
    <p>Both are measured by <strong>immunoassay</strong>, and neither is fully <strong>standardised</strong>. Insulin assays cross-react variably with proinsulin and with insulin analogues; C-peptide assays are more robust. Measure a fasting sample, or use a mixed-meal or glucagon stimulation test when β-cell reserve is in question. Always interpret with the simultaneous glucose.</p>
    <h4>Patterns</h4>
    <div class="table-wrap"><table>
      <tr><th>Condition</th><th>Insulin</th><th>C-peptide</th><th>Interpretation</th></tr>
      <tr><td><strong>Insulinoma</strong></td><td>High</td><td>High</td><td>Endogenous hyperinsulinism</td></tr>
      <tr><td><strong>Sulfonylurea</strong></td><td>High</td><td>High</td><td>Drug-stimulated secretion</td></tr>
      <tr><td><strong>Exogenous insulin</strong></td><td>High</td><td>Low</td><td>Factitious or accidental</td></tr>
      <tr><td>Type 1 diabetes</td><td>Low</td><td>Low</td><td>β-cell failure</td></tr>
      <tr><td>Type 2 diabetes</td><td>Variable</td><td>Normal or high</td><td>Insulin resistance</td></tr>
      <tr><td><strong>Renal impairment</strong></td><td>Normal</td><td>High</td><td>Reduced clearance</td></tr>
    </table></div>
    <p>An insulin-to-C-peptide <strong>molar ratio</strong> above 1 suggests exogenous insulin, although analogue cross-reactivity can mislead. Very high insulin with high C-peptide in a hypoglycaemic patient points to insulinoma or sulfonylurea; a positive sulfonylurea screen separates them.</p>
    <h4>Caveats</h4>
    <p>C-peptide is raised in <strong>renal impairment</strong> and after recent hypoglycaemia, and suppressed by <strong>hyperglycaemia</strong>. Insulin antibodies in autoimmune insulin syndrome produce spuriously high insulin with variable C-peptide. Heterophile antibodies and high-dose hook effects can distort results, so an implausible value should be repeated on a different platform.</p>
  `,
  tip: "Use the equimolar secretion and different clearance as the unifying principle, then apply it to the pattern table.",
  sources: ["C1", "C2", "C14"]
},
{
  id: "cc121", domain: "chem-carb", star: true,
  q: "Discuss the causes and laboratory confirmation of hypoglycaemia in a patient with diabetes.",
  tags: ["hypoglycaemia", "diabetes", "glucose meter"],
  keypoints: ["3.9 mmol/L", "3.0 mmol/L", "critical sample", "C-peptide", "sulfonylurea screen", "cortisol", "renal impairment", "alcohol", "haematocrit", "ascorbate", "compression lows", "pseudohypoglycaemia"],
  answer: `
    <h4>Definitions</h4>
    <p>In diabetes, hypoglycaemia is classified by the ADA as <strong>level 1</strong> below <strong>3.9 mmol/L</strong> (70 mg/dL), <strong>level 2</strong> below <strong>3.0 mmol/L</strong> (54 mg/dL) and level 3 severe hypoglycaemia with altered mental status requiring assistance. The biochemical threshold matters less than the clinical context, but a laboratory glucose is still required to confirm the episode.</p>
    <h4>Causes in a patient with diabetes</h4>
    <ul>
      <li>Excess insulin or a sulfonylurea, including a dosing error or wrong device.</li>
      <li>Missed or delayed meal, fasting, or unplanned exercise.</li>
      <li><strong>Alcohol</strong>, which blocks gluconeogenesis.</li>
      <li><strong>Renal impairment</strong>, which reduces insulin clearance and gluconeogenesis.</li>
      <li>Adrenal insufficiency, sepsis, advanced liver disease or malnutrition.</li>
      <li>Gastroparesis causing unpredictable absorption.</li>
    </ul>
    <h4>Laboratory confirmation</h4>
    <p>Draw a <strong>critical sample</strong> during the episode: plasma glucose, insulin, <strong>C-peptide</strong>, <strong>cortisol</strong>, renal and liver function, and a <strong>sulfonylurea screen</strong>. A high insulin with low C-peptide suggests exogenous insulin; high insulin with high C-peptide suggests sulfonylurea or endogenous hyperinsulinism. Cortisol is needed when adrenal failure is suspected.</p>
    <h4>Pitfalls</h4>
    <p>Glucose meters are inaccurate at low values and are affected by <strong>haematocrit</strong>, <strong>ascorbate</strong>, maltose and poor perfusion; confirm with a laboratory or blood-gas glucose. CGM reads interstitial fluid and lags behind plasma, and <strong>compression lows</strong> can mimic hypoglycaemia. <strong>Pseudohypoglycaemia</strong> occurs with delayed separation or very high white cell counts. Treat the patient, but verify the number before changing long-term therapy.</p>
  `,
  tip: "Separate the clinical definition from the biochemical confirmation, and always mention meter and CGM artefacts.",
  sources: ["C6", "C1", "C2"]
},
{
  id: "cc122", domain: "chem-carb", star: true,
  q: "Explain ketone body metabolism and the laboratory diagnosis of euglycaemic diabetic ketoacidosis associated with SGLT2 inhibitors.",
  tags: ["ketones", "DKA", "SGLT2 inhibitors"],
  keypoints: ["lipolysis", "CPT-1", "acetyl-CoA", "acetoacetate", "β-hydroxybutyrate", "nitroprusside", "SGLT2 inhibitors", "glycosuria", "glucagon", "euglycaemic", "anion gap", "β-hydroxybutyrate"],
  answer: `
    <h4>Ketone body metabolism</h4>
    <p>When insulin is low and glucagon high, <strong>lipolysis</strong> releases free fatty acids. In the liver, low malonyl-CoA disinhibits <strong>CPT-1</strong>, allowing fatty acid entry into mitochondria. β-oxidation produces <strong>acetyl-CoA</strong>, which is converted to <strong>acetoacetate</strong> and then reduced to <strong>β-hydroxybutyrate</strong>; acetone is a minor volatile product. β-hydroxybutyrate is the dominant ketone in diabetic ketoacidosis.</p>
    <h4>Measuring ketones</h4>
    <p>Urine <strong>nitroprusside</strong> strips detect acetoacetate and acetone but not β-hydroxybutyrate. They therefore underestimate ketoacidosis and may become more positive during recovery as β-hydroxybutyrate is oxidised back to acetoacetate. Capillary or plasma <strong>β-hydroxybutyrate</strong> is the preferred test; a value around 3 mmol/L or more supports the diagnosis. Blood gas, bicarbonate and the <strong>anion gap</strong> complete the assessment.</p>
    <h4>Euglycaemic DKA with SGLT2 inhibitors</h4>
    <p><strong>SGLT2 inhibitors</strong> lower glucose by causing <strong>glycosuria</strong> while stimulating <strong>glucagon</strong> and ketogenesis. Ketoacidosis can therefore occur with glucose below 13.9 mmol/L, and sometimes near normal — so-called <strong>euglycaemic</strong> DKA. Triggers include surgery, acute illness, fasting, low-carbohydrate diet, alcohol and insulin omission. The diagnosis rests on acidosis, a raised anion gap and ketonaemia, not on the glucose value. Stop the drug before planned surgery and check ketones whenever such a patient is unwell.</p>
    <h4>Monitoring</h4>
    <p>Follow β-hydroxybutyrate, venous pH, bicarbonate and the anion gap rather than urine ketones. Insulin suppresses ketogenesis but also drives potassium into cells, so monitor potassium closely.</p>
  `,
  tip: "State clearly that urine ketones miss β-hydroxybutyrate, then apply that to the euglycaemic SGLT2-inhibitor scenario.",
  sources: ["C1", "C6", "C15"]
},
{
  id: "cc123", domain: "chem-carb",
  q: "Discuss lactate: sources, clearance, specimen handling and the laboratory approach to hyperlactataemia.",
  tags: ["lactate", "lactic acidosis", "pre-analytical"],
  keypoints: ["pyruvate", "lactate dehydrogenase", "Cori cycle", "2 mmol/L", "type A", "type B", "metformin", "thiamine", "D-lactate", "fluoride–oxalate", "tourniquet", "clearance"],
  answer: `
    <h4>Production and clearance</h4>
    <p><strong>Lactate</strong> is formed from <strong>pyruvate</strong> by <strong>lactate dehydrogenase</strong> when pyruvate cannot enter mitochondria, and is cleared mainly by the liver through the <strong>Cori cycle</strong>, with a smaller renal contribution. Normal blood lactate is below about <strong>2 mmol/L</strong>; hyperlactataemia is a value above 2 mmol/L, and lactic acidosis is usually considered when lactate is at least 4–5 mmol/L with a low pH and bicarbonate.</p>
    <h4>Type A and type B</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Mechanism</th><th>Examples</th></tr>
      <tr><td><strong>Type A</strong></td><td>Tissue hypoxia</td><td>Shock, sepsis, ischaemia, carbon monoxide, seizures</td></tr>
      <tr><td><strong>Type B</strong></td><td>No tissue hypoxia</td><td><strong>Metformin</strong>, <strong>thiamine</strong> deficiency, malignancy, HIV drugs, propofol, liver failure</td></tr>
    </table></div>
    <p>Metformin-associated lactic acidosis is type B and is usually precipitated by renal impairment, sepsis or contrast. <strong>D-lactate</strong> from bacterial fermentation in short-bowel syndrome is not detected by standard L-lactate assays, producing a lactate gap.</p>
    <h4>Specimen handling</h4>
    <p>Lactate rises rapidly in a <strong>tourniquet</strong>ed or exercised limb and in any sample left at room temperature, because red cells continue glycolysis. Use a <strong>fluoride–oxalate</strong> tube, place it on ice, separate promptly and analyse within the validated stability window. A difficult draw with a prolonged tourniquet commonly produces a falsely high result.</p>
    <h4>Clinical use</h4>
    <p>Lactate is a marker of illness severity and a guide to resuscitation; the trend and <strong>clearance</strong> matter more than one value. Interpret it with the acid–base picture, anion gap and perfusion, and always ask whether the sample itself explains the result.</p>
  `,
  tip: "Classify by hypoxia versus no hypoxia, then spend equal time on the pre-analytical trap of a tourniqueted sample.",
  sources: ["C1", "C15", "C2"]
},
{
  id: "cc124", domain: "chem-carb", star: true,
  q: "A woman with type 1 diabetes is planning pregnancy. Outline preconception and antenatal laboratory monitoring and the interpretation of glycaemic markers.",
  tags: ["pregnancy", "type 1 diabetes", "HbA1c", "CGM"],
  keypoints: ["6.5%", "retinal status", "albumin-to-creatinine ratio", "eGFR", "thyroid function", "CGM", "preprandial", "postprandial", "haemodilution", "75 g OGTT", "fructosamine", "postpartum"],
  answer: `
    <h4>Preconception</h4>
    <p>Optimal preparation reduces congenital malformations and miscarriage. Aim for an HbA1c below about <strong>6.5%</strong> before conception where achievable without hypoglycaemia, review <strong>retinal status</strong>, urine <strong>albumin-to-creatinine ratio</strong>, <strong>eGFR</strong> and <strong>thyroid function</strong>, and stop potentially teratogenic drugs. Folic acid supplementation and effective contraception until control is optimised are standard. HbA1c is still useful here because red cell turnover is normal before pregnancy.</p>
    <h4>Antenatal monitoring</h4>
    <p>In pregnancy, plasma volume expansion and increased red cell turnover cause <strong>haemodilution</strong>, so HbA1c underestimates recent glycaemia and is not used alone. <strong>CGM</strong> is preferred for detailed assessment. ADA targets are <strong>preprandial</strong> 3.9–5.3 mmol/L, 1-hour <strong>postprandial</strong> below 7.8 mmol/L and 2-hour below 6.7 mmol/L, individualised to avoid hypoglycaemia. Ketones should be checked during illness or when glucose is high.</p>
    <h4>Interpreting tests</h4>
    <p>A <strong>75 g OGTT</strong> is used to diagnose gestational diabetes at 24–28 weeks, but a woman with known type 1 diabetes does not need it. HbA1c above 6.5% at the first visit may indicate pre-existing diabetes. <strong>Fructosamine</strong> is not reliable because albumin turnover changes. Renal function and albuminuria may worsen, and thyroid function should be checked each trimester.</p>
    <h4>Postpartum</h4>
    <p>Insulin requirements fall sharply after delivery. Women with gestational diabetes need a 75 g OGTT at 4–12 weeks and lifelong screening every 1–3 years. HbA1c can be used again once red cell turnover has normalised. Breastfeeding is encouraged, with attention to hypoglycaemia during the first weeks.</p>
  `,
  tip: "Separate preconception targets from pregnancy physiology: HbA1c is useful before, but haemodilution limits it during pregnancy.",
  sources: ["C6", "C1", "C7"]
},
{
  id: "cc125", domain: "chem-carb", star: true,
  q: "Discuss monogenic diabetes (MODY): clinical clues, main subtypes, laboratory features and the role of genetic testing.",
  tags: ["MODY", "monogenic diabetes", "genetic testing"],
  keypoints: ["autosomal dominant", "C-peptide", "GAD65", "HNF1A", "GCK", "HNF4A", "HNF1B", "sulfonylurea", "cascade testing", "fasting hyperglycaemia", "renal cysts", "next-generation sequencing"],
  answer: `
    <h4>When to suspect MODY</h4>
    <p>Consider monogenic diabetes in a young person (often under 25–30 years) who is non-obese, has a strong <strong>autosomal dominant</strong> family history, lacks islet autoantibodies, has preserved <strong>C-peptide</strong> and no ketosis. A stable, mild <strong>fasting hyperglycaemia</strong> from childhood is particularly suggestive.</p>
    <h4>Main subtypes</h4>
    <div class="table-wrap"><table>
      <tr><th>Gene</th><th>Features</th><th>Treatment</th></tr>
      <tr><td><strong>HNF1A</strong></td><td>Progressive β-cell defect, low renal glucose threshold</td><td><strong>Sulfonylurea</strong></td></tr>
      <tr><td><strong>GCK</strong></td><td>Mild stable fasting glucose 5.5–8.0 mmol/L, HbA1c usually below 7.5%</td><td>No treatment</td></tr>
      <tr><td><strong>HNF4A</strong></td><td>Macrosomia, neonatal hypoglycaemia, progressive diabetes</td><td>Sulfonylurea</td></tr>
      <tr><td><strong>HNF1B</strong></td><td><strong>Renal cysts</strong>, pancreatic atrophy, hypomagnesaemia</td><td>Insulin or oral agents</td></tr>
    </table></div>
    <h4>Laboratory testing</h4>
    <p>Exclude type 1 with <strong>GAD65</strong>, IA-2 and ZnT8 antibodies, and assess C-peptide with a simultaneous glucose. A <strong>next-generation sequencing</strong> panel covering <em>HNF1A</em>, <em>GCK</em>, <em>HNF4A</em>, <em>HNF1B</em> and other genes confirms the diagnosis. Genetic testing should be preceded by counselling and followed by <strong>cascade testing</strong> of relatives.</p>
    <h4>Why it matters</h4>
    <p>GCK-MODY does not need treatment and should not be treated with insulin during pregnancy unless fetal growth is excessive. HNF1A and HNF4A diabetes often responds well to a sulfonylurea, allowing insulin to be stopped. Missing the diagnosis exposes patients to unnecessary injections, hypoglycaemia and cost. MODY remains under-recognised in Asia, including the Philippines.</p>
  `,
  tip: "Use the triad of young onset, dominant family history and preserved C-peptide, then contrast GCK with HNF1A management.",
  sources: ["C6", "C1", "C3"]
},
{
  id: "cc126", domain: "chem-carb",
  q: "Compare transient and permanent neonatal diabetes mellitus: genetics, laboratory features and the importance of early recognition.",
  tags: ["neonatal diabetes", "KATP channel", "6q24"],
  keypoints: ["6 months", "transient", "permanent", "6q24", "KATP channel", "KCNJ11", "ABCC8", "C-peptide", "autoantibodies", "sulfonylureas", "genetic testing", "DEND"],
  answer: `
    <h4>Definition and types</h4>
    <p><strong>Neonatal diabetes</strong> presents in the first <strong>6 months</strong> of life, and occasionally up to 12 months. It is rare, with an incidence of roughly 1 in 100,000 to 1 in 400,000 live births. <strong>Transient</strong> neonatal diabetes remits, often within weeks to months, but may relapse later; <strong>permanent</strong> neonatal diabetes requires lifelong treatment.</p>
    <h4>Genetics</h4>
    <p>Transient disease is commonly caused by abnormalities of the imprinted region at chromosome <strong>6q24</strong>. Permanent disease is most often due to activating mutations in the <strong>KATP channel</strong> genes <em>KCNJ11</em> or <em>ABCC8</em>. Other causes include <em>INS</em>, <em>GCK</em>, <em>FOXP3</em> (IPEX) and <em>EIF2AK3</em> (Wolcott–Rallison syndrome).</p>
    <h4>Laboratory features</h4>
    <p>There is marked hyperglycaemia, often with ketones and acidosis, low or undetectable <strong>C-peptide</strong>, and usually negative islet <strong>autoantibodies</strong>. HbA1c may be raised but is less useful at this age. Exclude stress hyperglycaemia of sepsis, intravenous glucose and transient illness before diagnosing. <strong>Genetic testing</strong> is the definitive test and should be arranged urgently.</p>
    <h4>Why early recognition matters</h4>
    <p>Children with <strong>KATP channel</strong> mutations often respond to oral <strong>sulfonylureas</strong>, which can replace insulin and improve neurological features in <strong>DEND</strong> syndrome. Identifying 6q24 disease avoids unnecessary long-term insulin. Neonatal diabetes is distinct from type 1 diabetes and from the transient hypoglycaemia seen in infants of diabetic mothers.</p>
  `,
  tip: "The two examinable facts are the 6-month age boundary and the KATP-channel response to sulfonylureas.",
  sources: ["C6", "C1", "C14"]
},
{
  id: "cc127", domain: "chem-carb", star: true,
  q: "Discuss the analytical performance and quality management of point-of-care blood glucose meters.",
  tags: ["POCT", "glucometer", "ISO 15197"],
  keypoints: ["ISO 15197", "95%", "haematocrit", "ascorbate", "maltose", "GDH-PQQ", "icodextrin", "internal QC", "EQA", "operator training", "verification", "connectivity"],
  answer: `
    <h4>Accuracy standards</h4>
    <p>Handheld meters are judged against <strong>ISO 15197</strong>: at least <strong>95%</strong> of results must fall within 0.83 mmol/L of the reference at glucose below 5.6 mmol/L, and within 15% at or above 5.6 mmol/L. Many meters now exceed this. Accuracy is worse at the low end, in the critically ill and in neonates, where a laboratory or blood-gas analyser should be used.</p>
    <h4>Interferences</h4>
    <div class="table-wrap"><table>
      <tr><th>Factor</th><th>Effect</th></tr>
      <tr><td>Low <strong>haematocrit</strong></td><td>Falsely high</td></tr>
      <tr><td>High haematocrit</td><td>Falsely low</td></tr>
      <tr><td><strong>Ascorbate</strong></td><td>Falsely high or low, depending on chemistry</td></tr>
      <tr><td><strong>Maltose</strong> or icodextrin with <strong>GDH-PQQ</strong></td><td>Falsely high</td></tr>
      <tr><td>Shock, dehydration or poor perfusion</td><td>Unreliable</td></tr>
      <tr><td>High oxygen tension</td><td>Variable</td></tr>
    </table></div>
    <p>Older GDH-PQQ strips are the classic cause of fatal false hyperglycaemia in peritoneal dialysis with <strong>icodextrin</strong>. G6PD deficiency and high uric acid can also bias some strips.</p>
    <h4>Verification and quality management</h4>
    <p>Before use, <strong>verify</strong> each meter model against the main analyser across the clinical range, including low values. Run <strong>internal QC</strong> daily, enrol in <strong>EQA</strong>, lock out untrained operators, and connect meters to the laboratory information system so results are traceable. <strong>Operator training</strong> and a multidisciplinary POCT committee should own the programme.</p>
    <h4>Clinical use</h4>
    <p>Meters are screening and monitoring tools, not diagnostic instruments. Confirm any result that will change treatment, especially hypoglycaemia, with a laboratory glucose.</p>
  `,
  tip: "Quote ISO 15197 with its two accuracy bands, then pair each interference with the direction of error.",
  sources: ["C1", "C5", "C11"]
},
{
  id: "cc128", domain: "chem-carb",
  q: "Explain how continuous glucose monitoring works and how its traces and metrics should be interpreted.",
  tags: ["CGM", "time in range", "AGP"],
  keypoints: ["interstitial fluid", "lag", "time in range", "time below range", "coefficient of variation", "glucose management indicator", "ambulatory glucose profile", "MARD", "compression lows", "paracetamol", "14 days", "70%"],
  answer: `
    <h4>How CGM works</h4>
    <p>A <strong>continuous glucose monitor</strong> uses a glucose oxidase electrode in the subcutaneous <strong>interstitial fluid</strong>, read every few minutes by a transmitter. Real-time CGM displays values continuously; intermittently scanned CGM stores data for retrospective download. Interstitial glucose <strong>lags</strong> plasma glucose by roughly 5–15 minutes, so rapid changes are damped.</p>
    <h4>Metrics</h4>
    <div class="table-wrap"><table>
      <tr><th>Metric</th><th>Meaning</th><th>Target</th></tr>
      <tr><td><strong>Time in range</strong> 3.9–10.0 mmol/L</td><td>Proportion of readings in range</td><td>Above 70%</td></tr>
      <tr><td><strong>Time below range</strong> below 3.9 mmol/L</td><td>Hypoglycaemia exposure</td><td>Below 4%</td></tr>
      <tr><td>Time above range above 10.0 mmol/L</td><td>Hyperglycaemia exposure</td><td>Below 25%</td></tr>
      <tr><td><strong>Coefficient of variation</strong></td><td>Glycaemic variability</td><td>Below 36%</td></tr>
      <tr><td><strong>Glucose management indicator</strong></td><td>Estimated HbA1c from mean sensor glucose</td><td>Compare with laboratory HbA1c</td></tr>
      <tr><td>Data sufficiency</td><td>Duration and completeness</td><td>At least <strong>14 days</strong>, 70% of readings</td></tr>
    </table></div>
    <p><strong>Time in range</strong> is now a primary metric because it captures both hyperglycaemia and hypoglycaemia. The GMI is compared with laboratory HbA1c; a discrepancy suggests altered red cell turnover or a sensor problem.</p>
    <h4>The ambulatory glucose profile</h4>
    <p>The <strong>ambulatory glucose profile</strong> collapses weeks of data into median, interquartile range and percentiles by time of day. It shows nocturnal patterns, postprandial excursions and the timing of hypoglycaemia, which a single HbA1c cannot. Review it with the patient and prioritise the most dangerous pattern first.</p>
    <h4>Limitations</h4>
    <p><strong>Compression lows</strong> occur when sleeping on a sensor. Older sensors are affected by <strong>paracetamol</strong>, and all are affected by ascorbate, hydroxyurea, dehydration, oedema and shock. Sensor accuracy is expressed as <strong>MARD</strong>. Confirm discordant readings with a fingerstick glucose before acting.</p>
  `,
  tip: "Explain the interstitial lag first, then quote the five core metrics and finish with sensor artefacts.",
  sources: ["C6", "C1", "C2"]
},
{
  id: "cc129", domain: "chem-carb",
  q: "Discuss glycaemic variability: how it is measured, what it adds to HbA1c and its clinical relevance.",
  tags: ["glycaemic variability", "CGM", "coefficient of variation"],
  keypoints: ["standard deviation", "coefficient of variation", "36%", "MAGE", "MODD", "CONGA", "time in range", "hypoglycaemia", "oxidative stress", "endothelial dysfunction", "gastroparesis", "14 days"],
  answer: `
    <h4>How variability is measured</h4>
    <p><strong>Glycaemic variability</strong> describes the spread of glucose values around the mean. The <strong>standard deviation</strong> is simple but depends on the mean; the <strong>coefficient of variation</strong> (SD divided by mean) is preferred, with a target below <strong>36%</strong>. Other metrics include <strong>MAGE</strong> (mean amplitude of glycaemic excursions), <strong>MODD</strong> (mean of daily differences) and <strong>CONGA</strong>. CGM-derived <strong>time in range</strong> and time below range are practical summaries.</p>
    <h4>Why it matters beyond HbA1c</h4>
    <p>Two patients with the same HbA1c can have very different profiles: one stable, the other alternating hyperglycaemia and severe <strong>hypoglycaemia</strong>. HbA1c is an average and hides both. High variability is associated with more hypoglycaemia, greater treatment burden and impaired quality of life. In some studies it correlates with <strong>oxidative stress</strong>, <strong>endothelial dysfunction</strong> and inflammation, although the link to complications is less consistent than the link to hypoglycaemia.</p>
    <h4>Clinical relevance</h4>
    <p>Variability guides insulin regimen choice, carbohydrate counting, education and CGM use. It is particularly important in type 1 diabetes, in older people, and in those with <strong>gastroparesis</strong> or renal impairment. A high CV with recurrent lows argues for relaxing targets rather than intensifying treatment.</p>
    <h4>Limitations</h4>
    <p>The metrics overlap, are not fully standardised, and depend on sampling frequency. A single day is unrepresentative; at least <strong>14 days</strong> of CGM data are needed. Variability is a tool for individual review, not a diagnostic criterion.</p>
  `,
  tip: "Distinguish SD from CV, then argue why an average cannot describe risk; finish with the limits of the metrics.",
  sources: ["C6", "C1", "C2"]
},
{
  id: "cc130", domain: "chem-carb", star: true,
  q: "Discuss urine albumin-to-creatinine ratio in the detection and monitoring of diabetic kidney disease.",
  tags: ["albuminuria", "ACR", "KDIGO"],
  keypoints: ["albuminuria", "albumin-to-creatinine ratio", "first morning", "30 mg/g", "300 mg/g", "2 of 3", "3–6 months", "eGFR", "urinary tract infection", "exercise", "dipstick", "annual"],
  answer: `
    <h4>Why use the ACR</h4>
    <p><strong>Albuminuria</strong> is the earliest reliable marker of diabetic kidney disease and predicts progression, cardiovascular events and mortality. A random urine <strong>albumin-to-creatinine ratio</strong> corrects for hydration and is more convenient than a 24-hour collection. The <strong>first morning</strong> specimen is preferred because it reduces orthostatic and exercise effects.</p>
    <h4>KDIGO categories</h4>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>ACR (mg/g)</th><th>ACR (mg/mmol)</th><th>Meaning</th></tr>
      <tr><td>A1</td><td>Below <strong>30</strong></td><td>Below 3</td><td>Normal to mildly increased</td></tr>
      <tr><td>A2</td><td><strong>30–300</strong></td><td>3–30</td><td>Moderately increased</td></tr>
      <tr><td>A3</td><td>Above <strong>300</strong></td><td>Above 30</td><td>Severely increased</td></tr>
    </table></div>
    <p>The ACR is combined with <strong>eGFR</strong> in the KDIGO heat map to stage risk. Albuminuria should be confirmed in at least <strong>2 of 3</strong> specimens over <strong>3–6 months</strong> before labelling chronic kidney disease, because transient rises are common.</p>
    <h4>Causes of a false result</h4>
    <ul>
      <li><strong>Urinary tract infection</strong>, menstruation or vaginal contamination.</li>
      <li>Fever, vigorous <strong>exercise</strong>, heart failure or poor glycaemic control.</li>
      <li>Very high protein intake or transient hyperfiltration.</li>
      <li><strong>Dipstick</strong> methods that detect albumin poorly at low concentrations.</li>
    </ul>
    <p>Dipsticks also miss non-albumin proteins such as light chains, so a negative dipstick does not exclude renal disease.</p>
    <h4>Monitoring</h4>
    <p>Measure ACR at least <strong>annual</strong>ly in all people with diabetes, and more often once albuminuria is present. A fall in ACR with ACE inhibitors, angiotensin receptor blockers or SGLT2 inhibitors indicates response. Report the specimen type, the assay and the eGFR together so the trend can be interpreted.</p>
  `,
  tip: "Give the three KDIGO categories and the 2-of-3 confirmation rule; then list the transient causes that mimic albuminuria.",
  sources: ["C7", "C6", "C1"]
},
{
  id: "cc131", domain: "chem-carb",
  q: "Discuss diabetes secondary to pancreatic disease (type 3c) and drug-induced hyperglycaemia: mechanisms and laboratory recognition.",
  tags: ["type 3c", "secondary diabetes", "drug-induced hyperglycaemia"],
  keypoints: ["chronic pancreatitis", "pancreatic cancer", "cystic fibrosis", "C-peptide", "faecal elastase", "glucocorticoids", "atypical antipsychotics", "tacrolimus", "checkpoint inhibitors", "postprandial", "DKA", "HbA1c"],
  answer: `
    <h4>Diabetes secondary to pancreatic disease (type 3c)</h4>
    <p><strong>Type 3c diabetes</strong> follows <strong>chronic pancreatitis</strong>, <strong>pancreatic cancer</strong>, <strong>cystic fibrosis</strong>, haemochromatosis, trauma or pancreatectomy. Both islet and exocrine tissue are lost, so patients have insulin deficiency, low <strong>C-peptide</strong>, malabsorption and a brittle course with both hyperglycaemia and hypoglycaemia. <strong>Faecal elastase</strong>, imaging and clinical history support the diagnosis; <strong>HbA1c</strong> may underestimate glycaemia when nutrition is poor.</p>
    <h4>Drug-induced hyperglycaemia</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Mechanism</th></tr>
      <tr><td><strong>Glucocorticoids</strong></td><td>Hepatic gluconeogenesis and insulin resistance, mainly <strong>postprandial</strong></td></tr>
      <tr><td><strong>Atypical antipsychotics</strong></td><td>Weight gain and insulin resistance</td></tr>
      <tr><td><strong>Tacrolimus</strong>, ciclosporin, sirolimus</td><td>β-cell toxicity and insulin resistance</td></tr>
      <tr><td><strong>Checkpoint inhibitors</strong></td><td>Autoimmune β-cell destruction</td></tr>
      <tr><td>Thiazides, protease inhibitors</td><td>Insulin resistance</td></tr>
    </table></div>
    <p>Glucocorticoid hyperglycaemia characteristically worsens after lunch and dinner while fasting glucose may be normal, so postprandial monitoring or an OGTT is more sensitive than fasting glucose or HbA1c.</p>
    <h4>Laboratory recognition</h4>
    <p>Take a careful drug and pancreatic history, measure C-peptide and islet autoantibodies when the type is unclear, and screen for exocrine insufficiency. In checkpoint-inhibitor diabetes, presentation may be fulminant <strong>DKA</strong> with a normal HbA1c because the onset is rapid.</p>
    <h4>Practical points</h4>
    <p>Do not assume type 2 diabetes in a patient with pancreatic disease or a new drug. Document the likely cause and monitor with the test that matches the mechanism.</p>
  `,
  tip: "Separate structural pancreatic loss from pharmacological mechanisms, and highlight postprandial steroid hyperglycaemia.",
  sources: ["C1", "C6", "C14"]
},
{
  id: "cc132", domain: "chem-carb", star: true,
  q: "Discuss analytical interferences that can mislead diabetes testing and the laboratory's defences against them.",
  tags: ["interference", "HbA1c", "glucose", "biotin"],
  keypoints: ["glycolysis", "fluoride–citrate", "haematocrit", "GDH-PQQ", "icodextrin", "glucose oxidase", "haemoglobin variants", "iron deficiency", "biotin", "heterophile antibodies", "delta check", "serum indices"],
  answer: `
    <h4>Pre-analytical and matrix effects</h4>
    <p>Glucose falls by roughly 5–7% per hour in unseparated blood through <strong>glycolysis</strong>, so a delayed sample can falsely exclude diabetes. Use <strong>fluoride–citrate</strong> tubes and separate promptly. <strong>Haematocrit</strong> extremes distort glucose meters, and severe lipaemia or hyperproteinaemia can affect indirect methods.</p>
    <h4>Glucose methods</h4>
    <div class="table-wrap"><table>
      <tr><th>Interferent</th><th>Assay</th><th>Effect</th></tr>
      <tr><td>Maltose or <strong>icodextrin</strong></td><td><strong>GDH-PQQ</strong> meter</td><td>Falsely high</td></tr>
      <tr><td>Ascorbate</td><td><strong>Glucose oxidase</strong> Trinder</td><td>Falsely low</td></tr>
      <tr><td>High uric acid or bilirubin</td><td>Peroxidase step</td><td>Falsely low</td></tr>
      <tr><td>Haemolysis</td><td>Hexokinase</td><td>Variable</td></tr>
    </table></div>
    <p>GDH-PQQ strips are the most dangerous example, because a patient on icodextrin dialysis can be given insulin for a glucose that is actually normal or low.</p>
    <h4>HbA1c and immunoassay</h4>
    <p><strong>Haemoglobin variants</strong> (HbE, HbS, HbC, HbD, HbF), <strong>iron deficiency</strong>, haemolysis, recent transfusion, pregnancy and CKD all change HbA1c independently of glycaemia. Some immunoassays are affected by <strong>biotin</strong>, and paraproteins or <strong>heterophile antibodies</strong> can distort insulin, C-peptide and HbA1c results. Insulin analogues may not cross-react equally with insulin assays.</p>
    <h4>Laboratory defences</h4>
    <ul>
      <li>Choose methods with documented specificity and verify interference claims.</li>
      <li>Measure <strong>serum indices</strong> and apply analyte-specific limits.</li>
      <li>Use <strong>delta check</strong>s, plausibility rules and autoverification.</li>
      <li>Repeat implausible results by an alternative method or platform.</li>
      <li>Comment on the report and educate clinicians about sample timing.</li>
    </ul>
  `,
  tip: "Give the direction of error for each interferent, then end with detection, alternative methods and reporting.",
  sources: ["C1", "C2", "C5"]
}
);
