/* Clinical Chemistry — part 5: lipids */
window.QBANK.push(
{
  id: "cc70", domain: "chem-lipid",
  q: "Discuss HDL metabolism and the clinical significance of low HDL-cholesterol. Why has raising HDL failed as a therapeutic strategy?",
  tags: ["HDL", "reverse cholesterol transport", "CETP", "Tangier disease"],
  keypoints: ["apo A-I synthesis in liver and intestine", "ABCA1 lipidation of nascent HDL", "LCAT esterification", "pre-beta to alpha HDL maturation", "SR-B1 hepatic uptake", "CETP exchange with apo B lipoproteins", "inverse epidemiological association", "Mendelian randomisation shows no causal benefit", "CETP inhibitor trials failed", "HDL function and cholesterol efflux capacity", "secondary causes of low HDL", "Tangier disease ABCA1 deficiency", "LCAT deficiency fish-eye disease", "very high HDL not protective", "non-HDL cholesterol as target"],
  answer: `
    <h4>Metabolism</h4>
    <ol>
      <li><strong>Apo A-I is synthesised in liver and intestine</strong> and secreted lipid-poor.</li>
      <li><strong>ABCA1 lipidates nascent (pre-β) HDL</strong> with phospholipid and free cholesterol from peripheral cells, especially macrophages.</li>
      <li><strong>LCAT</strong> (activated by apo A-I) <strong>esterifies</strong> the cholesterol, which moves into the core, so discoidal <strong>pre-β HDL matures into spherical α-HDL</strong> (HDL3 → HDL2).</li>
      <li>Cholesteryl ester returns to the liver directly by <strong>SR-B1</strong> (selective uptake) or indirectly after <strong>CETP exchange</strong> of HDL cholesteryl ester for triglyceride from apo B lipoproteins.</li>
      <li>Hepatic lipase and endothelial lipase remodel HDL; the liver excretes cholesterol in bile.</li>
    </ol>
    <h4>Clinical significance of low HDL</h4>
    <p>There is a strong <strong>inverse epidemiological association</strong> between HDL-C and cardiovascular disease, and low HDL is a component of the metabolic syndrome. However, low HDL usually travels with high triglyceride, small dense LDL and insulin resistance, which are the probable real drivers. <strong>Secondary causes of low HDL</strong>: obesity, inactivity, smoking, hypertriglyceridaemia, type 2 diabetes, anabolic steroids, some progestins, β-blockers, and inflammation.</p>
    <h4>Why raising HDL failed</h4>
    <ul>
      <li><strong>Mendelian randomisation</strong> studies show that genetic variants raising HDL-C (e.g. endothelial lipase variants) do <strong>not lower cardiovascular risk</strong> — HDL-C is a marker, not a cause.</li>
      <li><strong>CETP inhibitor trials</strong> (torcetrapib, dalcetrapib, evacetrapib) raised HDL-C dramatically without benefit; anacetrapib's small benefit was explained by LDL and apo B lowering. Niacin and fibrates added to statins also failed.</li>
      <li>What may matter is <strong>HDL function</strong> — <strong>cholesterol efflux capacity</strong>, anti-oxidant and anti-inflammatory properties — which HDL-C concentration does not measure; dysfunctional HDL occurs in inflammation and diabetes.</li>
      <li><strong>Very high HDL</strong> (&gt;2.3 mmol/L), e.g. in CETP deficiency, is <strong>not protective</strong> and has been associated with increased mortality.</li>
    </ul>
    <h4>Rare genetic disorders</h4>
    <p><strong>Tangier disease (ABCA1 deficiency)</strong>: near-absent HDL, orange tonsils, neuropathy, hepatosplenomegaly. <strong>LCAT deficiency</strong>: complete form with corneal opacity, anaemia and renal failure; partial form called <strong>fish-eye disease</strong>. Apo A-I mutations: low HDL with amyloidosis or xanthomas.</p>
    <p>Practical conclusion: HDL-C is used in risk calculators, but treatment targets LDL-C, <strong>non-HDL cholesterol</strong> or apo B, not HDL.</p>
  `,
  tip: "The Mendelian randomisation argument is the core of the 'why did it fail' part — state it explicitly.",
  sources: ["C8", "C1", "C2"]
},
{
  id: "cc71", domain: "chem-lipid",
  q: "Case: a 35-year-old man presents with acute pancreatitis. His plasma is milky and triglyceride is 28 mmol/L. Discuss the causes, laboratory pitfalls and management of severe hypertriglyceridaemia.",
  tags: ["hypertriglyceridaemia", "chylomicronaemia", "pancreatitis", "case"],
  keypoints: ["triglyceride above 10 mmol/L risk of pancreatitis", "chylomicronaemia", "familial chylomicronaemia syndrome LPL deficiency", "APOC2 APOA5 GPIHBP1 LMF1", "multifactorial chylomicronaemia", "secondary causes alcohol diabetes drugs pregnancy hypothyroidism", "eruptive xanthomas and lipaemia retinalis", "amylase may be falsely normal in lipaemia", "pseudohyponatraemia", "ultracentrifugation or dilution", "fasting and IV fluids", "insulin infusion activates LPL", "plasmapheresis", "fibrates and omega-3", "very low fat diet", "volanesorsen or olezarsen apo C-III inhibition"],
  answer: `
    <h4>Interpretation</h4>
    <p>A triglyceride of 28 mmol/L (≈2500 mg/dL) indicates <strong>chylomicronaemia</strong>, and the risk of <strong>pancreatitis rises sharply above 10 mmol/L</strong> (~880 mg/dL), especially above 20 mmol/L. The milky plasma forms a creamy layer on standing.</p>
    <h4>Causes</h4>
    <ul>
      <li><strong>Familial chylomicronaemia syndrome</strong> (rare, ~1 per million; autosomal recessive): loss of <strong>LPL</strong> activity or its cofactors — <strong><em>APOC2</em>, <em>APOA5</em>, <em>GPIHBP1</em>, <em>LMF1</em></strong>. Onset in childhood, recurrent pancreatitis, poor response to fibrates.</li>
      <li><strong>Multifactorial chylomicronaemia</strong> (far commoner): a polygenic predisposition plus <strong>secondary causes</strong> — <strong>alcohol</strong>, poorly controlled <strong>diabetes</strong>, obesity, <strong>drugs</strong> (oestrogens, tamoxifen, isotretinoin, corticosteroids, protease inhibitors, antipsychotics, β-blockers, thiazides), <strong>pregnancy</strong> (third trimester), <strong>hypothyroidism</strong>, nephrotic syndrome and renal failure.</li>
    </ul>
    <p>Clinical clues: <strong>eruptive xanthomas</strong> on buttocks and extensor surfaces, <strong>lipaemia retinalis</strong>, hepatosplenomegaly.</p>
    <h4>Laboratory pitfalls</h4>
    <ul>
      <li><strong>Amylase may be falsely normal in lipaemic samples</strong> (lipid interferes with the assay) — lipase and imaging help confirm pancreatitis.</li>
      <li><strong>Pseudohyponatraemia</strong> with indirect ISE; check with direct ISE or measured osmolality.</li>
      <li>Photometric interference with many tests; the laboratory may need <strong>ultracentrifugation or dilution</strong> before analysing other analytes (not triglyceride itself).</li>
      <li>LDL-C cannot be calculated by Friedewald; use non-HDL-C or apo B.</li>
      <li>Measure glucose, HbA1c, TSH, liver and renal function, urine protein and alcohol history; check lipids again once triglycerides fall to classify the disorder.</li>
    </ul>
    <h4>Management</h4>
    <ol>
      <li>Acute: treat pancreatitis with <strong>fasting and IV fluids</strong>, analgesia; triglycerides usually fall rapidly with fasting.</li>
      <li><strong>Insulin infusion</strong> (with dextrose) <strong>activates LPL</strong> — first choice when hyperglycaemic and often used even without diabetes; heparin is no longer recommended alone.</li>
      <li><strong>Plasmapheresis</strong> for very high levels with severe pancreatitis, or in pregnancy.</li>
      <li>Long term: <strong>very low-fat diet</strong> (&lt;20 g/day in familial forms) with medium-chain triglycerides, alcohol abstinence, glycaemic control, stop offending drugs; <strong>fibrates and high-dose omega-3</strong> fatty acids for multifactorial disease.</li>
      <li>New agents: <strong>apo C-III inhibition with volanesorsen or olezarsen</strong> reduces triglycerides and pancreatitis even in LPL deficiency.</li>
    </ol>
  `,
  tip: "Mention that amylase can be falsely normal in lipaemic samples — it is the key laboratory trap in this case.",
  sources: ["C8", "C1", "C3"]
},
{
  id: "cc72", domain: "chem-lipid",
  q: "Discuss the standardisation of lipid measurements and the debate over fasting versus non-fasting lipid profiles.",
  tags: ["lipid standardisation", "non-fasting", "CDC LSP", "accuracy"],
  keypoints: ["Abell-Kendall reference method for cholesterol", "CDC Lipid Standardization Program", "CRMLN certification", "NCEP analytical goals", "total cholesterol bias within 3 percent and CV 3 percent", "HDL direct homogeneous assays", "triglyceride glycerol blanking", "non-fasting acceptable for most patients", "triglycerides rise modestly after meals", "LDL-C changes little after normal meals", "flag non-fasting triglyceride above 4.5 mmol/L", "repeat fasting if triglyceride high", "fasting needed for severe hypertriglyceridaemia evaluation", "non-HDL cholesterol unaffected by fasting", "improves access and adherence"],
  answer: `
    <h4>Standardisation</h4>
    <ul>
      <li>Total cholesterol is traceable to the <strong>Abell–Kendall reference method</strong> (and isotope-dilution mass spectrometry definitive method).</li>
      <li>The <strong>CDC Lipid Standardization Program</strong> and the <strong>Cholesterol Reference Method Laboratory Network (CRMLN)</strong> certify manufacturers and laboratories using fresh-frozen patient samples (commutable material).</li>
      <li><strong>NCEP analytical goals</strong>: total cholesterol <strong>bias ≤3% and CV ≤3%</strong> (total error ≤8.9%); HDL-C bias ≤5%, CV ≤4%; triglyceride bias ≤5%, CV ≤5%; LDL-C bias ≤4%, CV ≤4%.</li>
      <li><strong>HDL direct homogeneous assays</strong> replaced precipitation methods; their specificity varies, especially in abnormal lipoprotein states, and direct LDL assays show even more between-method variation.</li>
      <li>Triglyceride enzymatic assays measure glycerol released by lipase; endogenous free glycerol (glycerol kinase deficiency, heparin, parenteral nutrition) causes falsely high values unless <strong>glycerol blanking</strong> is used.</li>
      <li>Apo B and apo A-I are standardised by WHO-IFCC reference materials, and Lp(a) by an IFCC reference material expressed in nmol/L.</li>
    </ul>
    <h4>Fasting versus non-fasting</h4>
    <p>European (EAS/EFLM 2016), US and Canadian guidance now accept <strong>non-fasting samples for most patients</strong>:</p>
    <ul>
      <li>After a normal meal, <strong>triglycerides rise modestly</strong> (~0.3 mmol/L) and total cholesterol and <strong>LDL-C change very little</strong> (~0.2 mmol/L lower), differences that are clinically insignificant.</li>
      <li>Non-fasting triglycerides predict cardiovascular risk at least as well, reflecting atherogenic remnant lipoproteins.</li>
      <li><strong>Non-HDL cholesterol is essentially unaffected</strong> by fasting status.</li>
      <li>Non-fasting testing <strong>improves access and adherence</strong> — patients avoid a second visit and hypoglycaemia risk in diabetes.</li>
    </ul>
    <p>Recommended practice: report the fasting status; <strong>flag a non-fasting triglyceride above 4.5 mmol/L</strong> (400 mg/dL) and <strong>repeat fasting</strong>; <strong>fasting remains necessary for the evaluation of severe hypertriglyceridaemia</strong>, after pancreatitis, before starting drugs that raise triglycerides, and in some paediatric and familial investigations. Use LDL-C equations that remain valid at higher triglyceride (Martin–Hopkins or Sampson) to reduce the impact of non-fasting samples.</p>
  `,
  tip: "Quote the NCEP 3%/3% goal and the 4.5 mmol/L flag for repeating fasting.",
  sources: ["C8", "C1", "C2"]
},
{
  id: "cc73", domain: "chem-lipid",
  q: "Discuss secondary dyslipidaemias and how the laboratory helps identify them before lipid-lowering therapy is started.",
  tags: ["secondary dyslipidaemia", "hypothyroidism", "nephrotic syndrome", "cholestasis"],
  keypoints: ["exclude secondary causes before treatment", "hypothyroidism raises LDL TSH", "nephrotic syndrome high cholesterol and triglyceride", "chronic kidney disease high triglyceride low HDL", "cholestasis lipoprotein X", "lipoprotein X falsely raises LDL", "diabetes and insulin resistance", "obesity", "alcohol raises triglyceride", "drugs corticosteroids retinoids antipsychotics protease inhibitors", "thiazides and beta-blockers", "pregnancy physiological rise", "anorexia nervosa high cholesterol", "TSH glucose HbA1c creatinine urine protein liver tests", "treat cause often corrects lipids"],
  answer: `
    <p>Guidelines require that <strong>secondary causes are excluded before lipid-lowering therapy</strong> is started, because treating the cause often corrects the lipids and some causes (hypothyroidism) also increase statin myopathy risk.</p>
    <div class="table-wrap"><table>
      <tr><th>Cause</th><th>Typical lipid pattern</th><th>Laboratory test</th></tr>
      <tr><td><strong>Hypothyroidism</strong></td><td><strong>Raised LDL</strong> (reduced LDL-receptor activity)</td><td><strong>TSH</strong></td></tr>
      <tr><td><strong>Nephrotic syndrome</strong></td><td><strong>High cholesterol and triglyceride</strong>, high Lp(a)</td><td>Urine protein:creatinine ratio, albumin</td></tr>
      <tr><td><strong>Chronic kidney disease</strong></td><td><strong>High triglyceride, low HDL</strong></td><td>Creatinine/eGFR</td></tr>
      <tr><td><strong>Cholestasis</strong> (primary biliary cholangitis, obstruction)</td><td>Very high cholesterol from <strong>lipoprotein X</strong> — an abnormal particle that is <strong>not atherogenic</strong> but <strong>falsely raises LDL</strong> in direct assays; xanthomas</td><td>ALP, GGT, bilirubin</td></tr>
      <tr><td><strong>Diabetes, insulin resistance</strong>, <strong>obesity</strong></td><td>High triglyceride, low HDL, small dense LDL</td><td>Glucose, <strong>HbA1c</strong></td></tr>
      <tr><td><strong>Alcohol</strong></td><td><strong>Raised triglyceride</strong>, sometimes HDL</td><td>GGT, MCV, history</td></tr>
      <tr><td><strong>Drugs</strong></td><td><strong>Corticosteroids, retinoids, antipsychotics, protease inhibitors</strong>, oestrogens, ciclosporin raise triglyceride and/or LDL; <strong>thiazides and β-blockers</strong> modestly</td><td>Medication review</td></tr>
      <tr><td><strong>Pregnancy</strong></td><td>Physiological rise in triglyceride and cholesterol (third trimester)</td><td>hCG; defer testing</td></tr>
      <tr><td><strong>Anorexia nervosa</strong></td><td>Paradoxically <strong>high cholesterol</strong></td><td>Clinical</td></tr>
      <tr><td>Other</td><td>Cushing syndrome, acromegaly, lipodystrophy, monoclonal gammopathy, HIV</td><td>As indicated</td></tr>
    </table></div>
    <h4>Recommended baseline</h4>
    <p>A full lipid profile with non-HDL-C, plus <strong>TSH, glucose and HbA1c, creatinine with eGFR, urine protein, and liver tests</strong> (ALT and ALP — also a baseline before statins), with CK if there are muscle symptoms. Severe or unusual patterns warrant further tests (protein electrophoresis, apo E genotype, lipoprotein electrophoresis for lipoprotein X).</p>
    <p>The laboratory's role is also interpretive: commenting that a very high cholesterol with cholestatic liver tests may reflect lipoprotein X, or that the profile was taken during pregnancy or acute illness (cholesterol falls during acute illness and myocardial infarction — repeat after 6–8 weeks).</p>
  `,
  tip: "Lipoprotein X is the sophisticated point: not atherogenic, but it inflates LDL measurements.",
  sources: ["C8", "C1", "C3"]
},
{
  id: "cc74", domain: "chem-lipid",
  q: "Discuss cardiovascular risk assessment: the use of risk calculators, lipid targets and risk-enhancing biomarkers, with reference to practice in the Philippines.",
  tags: ["cardiovascular risk", "risk calculators", "LDL targets", "biomarkers"],
  keypoints: ["absolute risk not single risk factor", "WHO cardiovascular risk charts for Southeast Asia", "Pooled Cohort Equations and SCORE2", "risk calculators may misestimate in Asians", "LDL-C target below 1.4 mmol/L very high risk", "below 1.8 mmol/L high risk", "non-HDL and apo B as secondary targets", "Lp(a) once in a lifetime", "hs-CRP above 2 mg/L", "coronary artery calcium score", "family history of premature CVD", "chronic kidney disease and diabetes as risk equivalents", "metabolic syndrome", "Philippine clinical practice guidelines on dyslipidemia", "statin intensity", "monitor lipids 4 to 12 weeks after starting therapy"],
  answer: `
    <h4>Principle</h4>
    <p>Treatment decisions should rest on <strong>absolute cardiovascular risk</strong> — the combined effect of age, sex, smoking, blood pressure, lipids and diabetes — not on a single risk factor.</p>
    <h4>Risk calculators</h4>
    <ul>
      <li><strong>Pooled Cohort Equations</strong> (AHA/ACC, 10-year ASCVD risk), <strong>SCORE2</strong> (ESC), and the <strong>WHO cardiovascular risk charts</strong> recalibrated for regions including Southeast Asia (laboratory-based and non-laboratory versions).</li>
      <li><strong>Calculators may misestimate risk in Asian populations</strong>, including Filipinos, because they were derived elsewhere; Filipinos have high rates of diabetes, hypertension and premature coronary disease at lower BMI.</li>
      <li>People with established atherosclerotic disease, <strong>diabetes with target-organ damage, chronic kidney disease</strong> (eGFR &lt;60) and familial hypercholesterolaemia are already high or very high risk — calculators are not needed.</li>
    </ul>
    <h4>Lipid targets (ESC/EAS, also used in Philippine practice)</h4>
    <div class="table-wrap"><table>
      <tr><th>Risk category</th><th>LDL-C target</th></tr>
      <tr><td>Very high (ASCVD, severe CKD, diabetes with organ damage)</td><td><strong>&lt;1.4 mmol/L</strong> (55 mg/dL) and ≥50% reduction</td></tr>
      <tr><td>High</td><td><strong>&lt;1.8 mmol/L</strong> (70 mg/dL) and ≥50% reduction</td></tr>
      <tr><td>Moderate</td><td>&lt;2.6 mmol/L (100 mg/dL)</td></tr>
      <tr><td>Low</td><td>&lt;3.0 mmol/L (116 mg/dL)</td></tr>
    </table></div>
    <p><strong>Non-HDL cholesterol and apo B are secondary targets</strong>, particularly with high triglycerides, diabetes or obesity. The <strong>Philippine clinical practice guidelines on dyslipidemia</strong> broadly follow these thresholds and emphasise <strong>statin intensity</strong> by risk, adding ezetimibe and PCSK9 inhibitors where needed and affordable.</p>
    <h4>Risk-enhancing factors</h4>
    <ul>
      <li><strong>Lipoprotein(a)</strong> measured <strong>once in a lifetime</strong>; values above ~125 nmol/L increase risk.</li>
      <li><strong>hs-CRP above 2 mg/L</strong> (on two occasions, no acute illness).</li>
      <li><strong>Family history of premature CVD</strong> (male relative &lt;55, female &lt;65 years), <strong>metabolic syndrome</strong>, chronic inflammatory disease, HIV, pre-eclampsia, premature menopause, South Asian ethnicity.</li>
      <li><strong>Coronary artery calcium score</strong> reclassifies intermediate-risk patients (zero score favours deferring statins).</li>
    </ul>
    <h4>Laboratory follow-up</h4>
    <p>Repeat lipids <strong>4–12 weeks after starting or changing therapy</strong> to confirm response and adherence, then every 3–12 months; check ALT at baseline and CK only if symptomatic. Report LDL-C with a method valid at low concentrations (direct or Martin–Hopkins) because targets are now very low.</p>
  `,
  tip: "Give the 1.4 and 1.8 mmol/L targets and say why Western calculators may misjudge Filipino patients.",
  sources: ["C8", "C1"]
},
{
  id: "cc75", domain: "chem-lipid",
  q: "Discuss lipid-lowering drugs and the role of the laboratory in monitoring efficacy and safety.",
  tags: ["statins", "ezetimibe", "PCSK9", "monitoring"],
  keypoints: ["statins inhibit HMG-CoA reductase", "upregulate LDL receptors", "high intensity statins lower LDL 50 percent", "ezetimibe blocks NPC1L1", "PCSK9 monoclonal antibodies", "inclisiran siRNA", "bempedoic acid ATP citrate lyase", "fibrates PPAR-alpha", "omega-3 icosapent ethyl", "baseline ALT and CK", "statin myopathy CK above 10 times ULN", "rhabdomyolysis", "ALT rise above 3 times ULN", "new-onset diabetes", "drug interactions CYP3A4", "adherence monitoring with LDL", "SLCO1B1 genotype"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Mechanism</th><th>Effect</th></tr>
      <tr><td><strong>Statins</strong></td><td><strong>Inhibit HMG-CoA reductase</strong> → lower hepatic cholesterol → <strong>upregulated LDL receptors</strong></td><td><strong>High-intensity</strong> (atorvastatin 40–80, rosuvastatin 20–40 mg) lower LDL-C ≥50%; moderate 30–49%</td></tr>
      <tr><td><strong>Ezetimibe</strong></td><td><strong>Blocks NPC1L1</strong> intestinal cholesterol absorption</td><td>LDL-C ↓ ~20–25% added to statin</td></tr>
      <tr><td><strong>PCSK9 monoclonal antibodies</strong> (evolocumab, alirocumab)</td><td>Prevent PCSK9-mediated LDL-receptor degradation</td><td>LDL-C ↓ ~60%; Lp(a) ↓ ~25%</td></tr>
      <tr><td><strong>Inclisiran</strong></td><td><strong>siRNA</strong> silencing hepatic PCSK9 synthesis; twice-yearly injection</td><td>LDL-C ↓ ~50%</td></tr>
      <tr><td><strong>Bempedoic acid</strong></td><td>Inhibits <strong>ATP citrate lyase</strong> upstream of HMG-CoA reductase; prodrug not activated in muscle</td><td>LDL-C ↓ ~20%; option in statin intolerance; raises urate</td></tr>
      <tr><td><strong>Fibrates</strong></td><td><strong>PPAR-α</strong> agonists → increased LPL activity</td><td>Triglyceride ↓ 30–50%</td></tr>
      <tr><td><strong>Omega-3</strong> (<strong>icosapent ethyl</strong>)</td><td>Reduced VLDL synthesis</td><td>Triglyceride ↓; cardiovascular benefit in REDUCE-IT</td></tr>
    </table></div>
    <h4>Laboratory monitoring of efficacy</h4>
    <p>Lipid profile <strong>4–12 weeks after starting</strong> or changing dose, then 3–12 monthly. Percentage reduction from baseline, as well as achievement of target, shows response; an unexpectedly small fall suggests non-adherence — <strong>LDL is the best adherence monitor</strong> available. Non-HDL-C or apo B is used when triglycerides are high.</p>
    <h4>Safety monitoring</h4>
    <ul>
      <li><strong>Baseline ALT and CK</strong> (CK particularly if high risk of myopathy or symptoms); routine CK monitoring is not needed.</li>
      <li><strong>Statin-associated muscle symptoms</strong>: common, usually with normal CK. <strong>CK above 10 times ULN</strong> with symptoms means myopathy — stop the statin; <strong>rhabdomyolysis</strong> (CK often &gt;40× ULN, myoglobinuria, AKI) is rare. Check TSH and vitamin D in myalgia (hypothyroidism increases risk).</li>
      <li><strong>ALT rise above 3 times ULN</strong> persisting → reduce dose or stop; mild transaminase rises are common and benign.</li>
      <li>A small increase in <strong>new-onset diabetes</strong> — check HbA1c in those at risk; benefit outweighs risk.</li>
      <li><strong>Drug interactions via CYP3A4</strong> (simvastatin, atorvastatin with macrolides, azoles, protease inhibitors, ciclosporin, grapefruit) and with gemfibrozil; renal dose adjustment.</li>
      <li>Pharmacogenetics: the <strong><em>SLCO1B1</em> genotype</strong> (*5 allele) increases simvastatin myopathy risk; Asians need lower rosuvastatin doses because of higher exposure.</li>
    </ul>
  `,
  tip: "Give the CK >10× ULN rule and note that LDL is the best adherence check.",
  sources: ["C8", "C1"]
}
);
