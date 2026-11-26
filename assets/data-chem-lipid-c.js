/* Clinical Chemistry — lipids, part C: Philippine practice, advanced risk markers and treatment */
window.QBANK.push(
{
  id: "cc261", domain: "chem-lipid", star: true,
  q: "Outline the Philippine Lipid and Atherosclerosis Society 2020 dyslipidemia guideline: how patients are grouped and what LDL-cholesterol targets and drug steps follow.",
  tags: ["PLAS 2020", "risk factor counting", "LDL-C target"],
  keypoints: ["Philippine Lipid and Atherosclerosis Society", "2020 dyslipidemia CPG", "risk factor counting", "age 45", "two risk factors", "LDL-C 130 mg/dL", "diabetes target", "clinical ASCVD", "familial hypercholesterolaemia", "maximally tolerated statin", "high-intensity statin", "ezetimibe", "PCSK9 inhibitor", "non-HDL cholesterol"],
  answer: `
    <h4>A local consensus</h4>
    <p>The <strong>2020 dyslipidemia CPG</strong> is a collaboration of the Philippine Heart Association, the <strong>Philippine Lipid and Atherosclerosis Society</strong> and the Philippine Society of Endocrinology, Diabetes and Metabolism. It updates the 2015 guideline and notes that the major statin trials did not include Filipino patients.</p>
    <h4>Risk factor counting</h4>
    <p>For primary prevention without diabetes or ASCVD, the guideline uses <strong>risk factor counting</strong> rather than an imported equation, because ASCVD and SCORE scores are not validated for Filipinos. Statins are recommended for adults aged 45 or older with LDL-C at least 130 mg/dL and <strong>two risk factors</strong>: male sex, postmenopausal status, smoking, hypertension, BMI above 25, family history of premature coronary disease, proteinuria or left ventricular hypertrophy.</p>
    <h4>LDL-C targets</h4>
    <div class="table-wrap"><table>
      <tr><th>Patient group</th><th>LDL-C target</th></tr>
      <tr><td>No clinical ASCVD</td><td>&lt; 130 mg/dL (&lt; 3.4 mmol/L)</td></tr>
      <tr><td>Diabetes without additional risk</td><td>&lt; 100 mg/dL (&lt; 2.6 mmol/L)</td></tr>
      <tr><td>Diabetes with ≥ 1 risk factor or target-organ damage</td><td>&lt; 70 mg/dL (&lt; 1.8 mmol/L)</td></tr>
      <tr><td>Diabetes with ASCVD, or clinical ASCVD</td><td>&lt; 55 mg/dL (&lt; 1.4 mmol/L)</td></tr>
      <tr><td>FH without ASCVD or major risk factor</td><td>&lt; 70 mg/dL (&lt; 1.8 mmol/L)</td></tr>
      <tr><td>FH with ASCVD or ≥ 1 risk factor or target-organ damage</td><td>&lt; 55 mg/dL (&lt; 1.4 mmol/L)</td></tr>
    </table></div>
    <h4>Treatment sequence</h4>
    <p>Use a <strong>maximally tolerated statin</strong>, with a <strong>high-intensity statin</strong> such as atorvastatin 40 to 80 mg or rosuvastatin 20 to 40 mg for ASCVD and FH. Add <strong>ezetimibe</strong> if the target is not met, then consider a <strong>PCSK9 inhibitor</strong> in very high risk. Exclude secondary causes before committing to lifelong therapy. The CPG also sets HDL-C goals above 40 mg/dL in men and 50 mg/dL in women, and triglyceride below 150 mg/dL.</p>
    <h4>Applying it locally</h4>
    <ul>
      <li>Document the risk factors used, not just the LDL-C value.</li>
      <li>Record baseline lipids and ALT; check CK only when muscle symptoms appear.</li>
      <li>Use <strong>non-HDL cholesterol</strong> when triglyceride is high.</li>
      <li>Discuss cost and adherence, since many patients pay out of pocket.</li>
      <li>Recheck lipids 4 to 12 weeks after starting or intensifying therapy.</li>
    </ul>
  `,
  tip: "Use the four patient groups and their mg/dL targets; then show the statin-to-ezetimibe step.",
  sources: ["C16", "C17", "C18", "C8"]
},
{
  id: "cc262", domain: "chem-lipid",
  q: "Discuss statin access and generic availability in the Philippines, and explain how cost, bioequivalence and monitoring affect lipid management.",
  tags: ["generic statins", "access", "adherence"],
  keypoints: ["generic atorvastatin", "rosuvastatin", "simvastatin", "bioequivalence", "Philippine FDA", "out-of-pocket cost", "PhilHealth", "statin intensity", "adherence", "muscle symptoms", "ALT", "creatine kinase", "ASCVD", "fixed-dose combination"],
  answer: `
    <h4>The access problem</h4>
    <p>Effective lipid lowering depends less on the molecule chosen than on whether the patient can obtain and keep taking it. In the Philippines, <strong>generic atorvastatin</strong>, <strong>rosuvastatin</strong> and <strong>simvastatin</strong> are widely registered, but retail prices vary several-fold between brands, pharmacies and regions. Many patients pay <strong>out-of-pocket cost</strong>, and statins are not universally reimbursed for outpatient use.</p>
    <h4>Generic equivalence</h4>
    <p>A generic must demonstrate <strong>bioequivalence</strong> to the innovator product and be approved by the Philippine FDA. Bioequivalence compares rate and extent of absorption within accepted limits; it does not require a local outcome trial. Prescribing by generic name and checking the registration status is practical. Switching between approved generics is acceptable when the product is quality-assured, but recheck lipids after a brand change. Avoid unregistered imports sold online, which may contain variable potency.</p>
    <h4>Choosing an affordable regimen</h4>
    <div class="table-wrap"><table>
      <tr><th>Agent</th><th>Practical comment</th></tr>
      <tr><td><strong>Atorvastatin</strong> 40 mg</td><td>Potent, once daily, low generic price; CYP3A4 interactions</td></tr>
      <tr><td><strong>Rosuvastatin</strong> 20 mg</td><td>Potent; less CYP3A4 interaction; dose adjustment in CKD</td></tr>
      <tr><td><strong>Simvastatin</strong> 40 mg</td><td>Cheap but weaker; avoid with strong CYP3A4 inhibitors</td></tr>
      <tr><td>Fixed-dose combination</td><td>Improves <strong>adherence</strong> but may cost more</td></tr>
    </table></div>
    <h4>Monitoring and persistence</h4>
    <p>Check baseline <strong>ALT</strong>; measure <strong>creatine kinase</strong> only if <strong>muscle symptoms</strong> occur. Recheck lipids after 4 to 12 weeks. A high <strong>statin intensity</strong> is wasted if refills stop after three months, so ask about cost at every visit, check the price at the patient's usual pharmacy, and simplify the regimen. Document the brand and dose dispensed, because switching can change the result. For <strong>ASCVD</strong>, the absolute benefit is large enough that access should be treated as part of the prescription.</p>
  `,
  tip: "Argue that adherence and price are pharmacological variables, then give a monitoring plan.",
  sources: ["C16", "C18", "C8", "C1"]
},
{
  id: "cc263", domain: "chem-lipid", star: true,
  q: "Should the Philippines use its own lipid reference intervals? Discuss reference values, risk-based cut-offs and the laboratory standards for establishing local intervals.",
  tags: ["reference interval", "Filipino values", "CLSI EP28"],
  keypoints: ["reference interval", "risk-based cut-off", "Filipino lipid values", "CLSI EP28", "120 individuals", "non-fasting sample", "HDL cholesterol", "triglyceride", "non-HDL cholesterol", "analytic standardisation", "partition by sex", "abdominal obesity", "cardiovascular risk", "method-specific interval"],
  answer: `
    <h4>Reference intervals are not treatment targets</h4>
    <p>A <strong>reference interval</strong> describes the central 95% of a healthy population. A treatment target is a decision limit derived from outcome trials. Confusing the two is a common error: an LDL-C inside the reference interval may still be far above the goal for a patient with established atherosclerosis.</p>
    <h4>What Filipino data suggest</h4>
    <p>National nutrition surveys and local studies show a high prevalence of low <strong>HDL cholesterol</strong>, raised <strong>triglyceride</strong> and <strong>abdominal obesity</strong>, while LDL-C is often not markedly raised. That pattern produces substantial cardiovascular risk despite deceptively acceptable LDL-C. Reference values should therefore be <strong>partition by sex</strong> and interpreted alongside waist circumference, glucose and blood pressure.</p>
    <h4>How to establish a local interval</h4>
    <ul>
      <li>Follow <strong>CLSI EP28</strong>: at least <strong>120 individuals</strong> per partition, defined by exclusion criteria and fasting status.</li>
      <li>Use a <strong>non-fasting sample</strong> only if the laboratory states it; triglyceride needs a fasting sample for comparable limits.</li>
      <li>Document <strong>analytic standardisation</strong> and the method, because intervals are method-specific.</li>
      <li>Verify a transferred interval with 20 samples and accept when no more than two fall outside.</li>
    </ul>
    <h4>Practical recommendation</h4>
    <p>Report method-specific intervals, but base treatment on risk. Add <strong>non-HDL cholesterol</strong> for every patient and apo B where available. A local interval is useful for quality and for detecting dyslipidaemia, yet it cannot replace the PLAS treatment groups. Laboratories should publish their intervals and avoid silently importing cut-offs from another population or platform. State whether the sample was fasting and which assay was used. Review the interval whenever the analyser, reagent lot or calibration changes. Document the population and exclusion criteria in the laboratory handbook.</p>
  `,
  tip: "Separate the statistical reference interval from the outcome-derived target before arguing for local values.",
  sources: ["C16", "C1", "C5", "C2"]
},
{
  id: "cc264", domain: "chem-lipid",
  q: "Describe the cardiovascular risk profile of Filipino adults and discuss how the laboratory contributes to risk assessment beyond the basic lipid panel.",
  tags: ["cardiovascular risk", "Filipinos", "risk enhancers"],
  keypoints: ["ischaemic heart disease", "stroke", "hypertension", "type 2 diabetes", "smoking", "abdominal obesity", "low HDL cholesterol", "risk score", "non-HDL cholesterol", "apo B", "HbA1c", "eGFR", "urine albumin-to-creatinine ratio", "hs-CRP", "lipoprotein(a)", "socioeconomic access"],
  answer: `
    <h4>The epidemiological pattern</h4>
    <p>Cardiovascular disease, chiefly <strong>ischaemic heart disease</strong> and <strong>stroke</strong>, is a leading cause of death in the Philippines. The risk profile combines high rates of <strong>hypertension</strong>, <strong>type 2 diabetes</strong>, <strong>smoking</strong>, <strong>abdominal obesity</strong> and <strong>low HDL cholesterol</strong>. Many patients present late, and rheumatic heart disease still contributes in poorer communities. Dyslipidaemia also clusters with gout and fatty liver disease, both markers of insulin resistance.</p>
    <h4>Risk assessment</h4>
    <p>International equations were derived in other populations and are not validated for Filipinos. The PLAS 2020 guideline therefore uses <strong>risk factor counting</strong> for primary prevention: age 45 or older, LDL-C at least 130 mg/dL and two or more risk factors. Established ASCVD, or diabetes with target-organ damage, moves a patient into a higher treatment group without any calculation. For primary prevention, use a validated <strong>risk score</strong> only as an aid and upgrade risk for family history, persistent smoking and socioeconomic barriers to care.</p>
    <h4>What the laboratory adds</h4>
    <ul>
      <li><strong>Non-HDL cholesterol</strong> and <strong>apo B</strong> capture atherogenic particle burden when triglyceride is high.</li>
      <li><strong>HbA1c</strong> detects unrecognised diabetes and poor glycaemic control.</li>
      <li><strong>eGFR</strong> and <strong>urine albumin-to-creatinine ratio</strong> identify CKD, a major risk multiplier.</li>
      <li><strong>hs-CRP</strong> may refine intermediate risk but is not a treatment target.</li>
      <li><strong>Lipoprotein(a)</strong> is worth measuring once in premature disease or a strong family history.</li>
    </ul>
    <h4>Interpretation</h4>
    <p>A normal LDL-C does not exclude high risk in a Filipino patient with central obesity, diabetes and low HDL-C. Report the full pattern, flag discordance, and connect results to <strong>socioeconomic access</strong> and adherence. Repeat testing only when it will change management. Record smoking status, family history and waist circumference at the same visit. The laboratory's most useful contribution is a coherent, comparable result that the clinician can act on.</p>
  `,
  tip: "Name the local risk pattern first, then show which extra laboratory tests change management.",
  sources: ["C16", "C17", "C8", "C1"]
},
{
  id: "cc265", domain: "chem-lipid",
  q: "Explain how PhilHealth coverage shapes lipid testing and statin treatment in the Philippines, and discuss the laboratory's role in rational, equitable use of these services.",
  tags: ["PhilHealth", "coverage", "laboratory access"],
  keypoints: ["PhilHealth", "case rate", "primary care benefit", "outpatient laboratory", "out-of-pocket payment", "lipid profile", "statin coverage", "GABAY", "DOH licensing", "rational testing", "fasting status", "point-of-care testing", "equity", "catastrophic illness"],
  answer: `
    <h4>How payment works</h4>
    <p><strong>PhilHealth</strong> pays for many admissions through <strong>case rates</strong> that bundle laboratory tests, and it supports selected outpatient packages such as primary care, tuberculosis and HIV care. A routine <strong>lipid profile</strong> ordered in an outpatient consultation is often not separately reimbursed, and <strong>statin coverage</strong> is partial and facility-dependent. Many patients therefore face <strong>out-of-pocket payment</strong> for both the test and the drug.</p>
    <h4>Consequences</h4>
    <ul>
      <li>Testing is delayed until an admission or a complication, so primary prevention is missed.</li>
      <li>Patients may choose between the laboratory test and the medicine, undermining both.</li>
      <li>Clinics may ration panels, sometimes omitting HDL-C or LDL-C and leaving only total cholesterol.</li>
      <li>Rural patients carry transport and lost-income costs on top of the fee.</li>
    </ul>
    <h4>Rational use</h4>
    <p>Order lipids when the result will change a decision: screening adults with risk factors, assessing a patient before statin therapy, and monitoring after a change. Avoid repeating a borderline result within days. State <strong>fasting status</strong>; a non-fasting sample is acceptable for screening but not for evaluating severe hypertriglyceridaemia. Use the same method for monitoring so that trends are interpretable.</p>
    <h4>The laboratory's role</h4>
    <p>Comply with <strong>DOH licensing</strong> and ISO 15189 quality requirements, publish prices, and participate in <strong>GABAY</strong> and local clinical pathways. Offer <strong>point-of-care testing</strong> only with verified devices and a documented quality plan. Report results with the reference interval and a comment on <strong>non-HDL cholesterol</strong>. Equity improves when testing is bundled with hypertension and diabetes clinics rather than sold as a separate luxury. Explain the fee before the sample is taken so that the patient can decide. Cost is therefore a clinical variable, not an administrative detail.</p>
  `,
  tip: "Explain the payment structure, then argue for targeted testing rather than more testing.",
  sources: ["C18", "C16", "C13"]
},
{
  id: "cc266", domain: "chem-lipid", star: true,
  q: "Discuss remnant cholesterol and triglyceride-rich lipoproteins: their measurement, genetic evidence and emerging therapies.",
  tags: ["remnant cholesterol", "triglyceride-rich lipoproteins", "APOC3"],
  keypoints: ["remnant cholesterol", "triglyceride-rich lipoproteins", "chylomicron remnants", "VLDL remnants", "IDL", "non-HDL cholesterol", "apo B", "APOC3", "ANGPTL3", "lipoprotein lipase", "olezarsen", "volanesorsen", "evinacumab", "residual risk", "non-fasting triglyceride"],
  answer: `
    <h4>What remnants are</h4>
    <p><strong>Remnant cholesterol</strong> is the cholesterol carried in <strong>chylomicron remnants</strong>, <strong>VLDL remnants</strong> and <strong>IDL</strong>. It can be estimated as total cholesterol minus HDL-C minus LDL-C, or as triglyceride divided by 5 in mg/dL when the Friedewald assumptions hold. It is part of <strong>non-HDL cholesterol</strong> but invisible in a standard LDL-C result.</p>
    <h4>Why they are atherogenic</h4>
    <p>Remnants are small enough to enter the arterial intima and are taken up by macrophages without normal LDL-receptor feedback, promoting foam-cell formation. They also carry oxidised lipid and apolipoprotein C-III. Genetic evidence is strong: loss-of-function <strong>APOC3</strong> variants lower triglyceride and remnant cholesterol and reduce coronary disease, while <strong>ANGPTL3</strong> loss of function lowers both LDL-C and triglyceride and protects against atherosclerosis.</p>
    <h4>Measurement</h4>
    <div class="table-wrap"><table>
      <tr><th>Measure</th><th>What it captures</th></tr>
      <tr><td><strong>Non-HDL-C</strong></td><td>All apo B-containing cholesterol, including remnants</td></tr>
      <tr><td><strong>Remnant-C</strong></td><td>Calculated cholesterol in remnant particles</td></tr>
      <tr><td><strong>Apo B</strong></td><td>Particle number; one molecule per atherogenic particle</td></tr>
      <tr><td><strong>Non-fasting triglyceride</strong></td><td>Practical marker of postprandial remnant burden</td></tr>
    </table></div>
    <p>Remnant cholesterol is usually calculated rather than directly measured. Direct assays are research tools and are poorly standardised. Use <strong>non-fasting triglyceride</strong> and non-HDL-C in routine practice.</p>
    <h4>Emerging therapies</h4>
    <ul>
      <li><strong>APOC3</strong> inhibition: <strong>olezarsen</strong> for familial chylomicronaemia, and <strong>volanesorsen</strong> with platelet monitoring.</li>
      <li><strong>ANGPTL3</strong> inhibition: <strong>evinacumab</strong> for homozygous familial hypercholesterolaemia, with siRNA approaches in development.</li>
      <li>Fibrates and omega-3 lower triglyceride modestly; statins reduce overall risk but not remnant cholesterol specifically.</li>
    </ul>
    <h4>Clinical approach</h4>
    <p>Treat insulin resistance, alcohol excess and diabetes, and report non-HDL-C. Refer severe hypertriglyceridaemia to specialist care. Outcome trials of remnant-lowering are still maturing, so do not chase remnant-C as a standalone target. It remains a marker of <strong>residual risk</strong> that explains part of the hazard left after LDL-C is controlled.</p>
  `,
  tip: "Explain the calculation, cite the APOC3 and ANGPTL3 genetic evidence, then be cautious about targets.",
  sources: ["C8", "C1", "C2"]
},
{
  id: "cc267", domain: "chem-lipid", star: true,
  q: "Discuss lipoprotein(a): its structure, genetics, measurement, cardiovascular significance and the current therapeutic outlook.",
  tags: ["lipoprotein(a)", "apo(a)", "LPA gene"],
  keypoints: ["apo(a)", "apo B-100", "kringle IV", "LPA gene", "size polymorphism", "nmol/L", "isoform-insensitive assay", "125 nmol/L", "aortic stenosis", "premature ASCVD", "secondary causes", "PCSK9 inhibitor", "apheresis", "pelacarsen", "cascade screening"],
  answer: `
    <h4>Structure and genetics</h4>
    <p><strong>Lipoprotein(a)</strong> is an LDL-like particle in which <strong>apo(a)</strong> is covalently linked to <strong>apo B-100</strong>. Apo(a) contains repeated <strong>kringle IV</strong> domains and is homologous to plasminogen, which may explain part of its prothrombotic and antifibrinolytic activity. The <strong>LPA gene</strong> shows a <strong>size polymorphism</strong>; smaller isoforms generally produce higher concentrations. About 90% of the variation is inherited, and levels differ between ancestries.</p>
    <h4>Measurement</h4>
    <p>Report in <strong>nmol/L</strong> using an <strong>isoform-insensitive assay</strong>, because mass units in mg/dL are biased by apo(a) size. Levels are stable within an individual but rise with CKD, hypothyroidism, nephrotic syndrome and pregnancy. Measure once in premature ASCVD, familial hypercholesterolaemia, a strong family history or unexplained aortic stenosis. A single value is usually sufficient, and repeat testing is reserved for discordant results or a new secondary cause. Lp(a) does not require fasting, but use the same assay for any repeat measurement.</p>
    <h4>Clinical significance</h4>
    <ul>
      <li>Concentrations above about <strong>125 nmol/L</strong> are associated with myocardial infarction, stroke and peripheral disease.</li>
      <li>Risk is continuous and cumulative over a lifetime; very high levels behave like an inherited risk factor.</li>
      <li>Lp(a) also predisposes to calcific <strong>aortic stenosis</strong>.</li>
      <li>It is included in non-HDL cholesterol and apo B but not in calculated LDL-C.</li>
    </ul>
    <h4>Management</h4>
    <p>No Lp(a)-specific therapy is approved. Statins lower LDL-C but barely change Lp(a). A <strong>PCSK9 inhibitor</strong> lowers it by about 20 to 30%, and <strong>apheresis</strong> is reserved for extreme cases. Antisense and siRNA agents such as <strong>pelacarsen</strong> are in outcome trials. Meanwhile, treat all other risk factors intensively and use <strong>cascade screening</strong> when a high level is found in a family.</p>
  `,
  tip: "Give the structure, then the unit, the threshold and the fact that no specific drug is approved yet.",
  sources: ["C8", "C1", "C2"]
},
{
  id: "cc268", domain: "chem-lipid", star: true,
  q: "Discuss the diagnosis and cascade screening of familial hypercholesterolaemia, with attention to Philippine feasibility.",
  tags: ["familial hypercholesterolaemia", "cascade screening", "LDLR"],
  keypoints: ["familial hypercholesterolaemia", "LDLR", "APOB", "PCSK9", "autosomal dominant", "Dutch Lipid Clinic criteria", "tendon xanthomas", "corneal arcus", "premature ASCVD", "cascade screening", "reverse cascade", "genetic testing", "high-intensity statin", "ezetimibe", "LDL apheresis"],
  answer: `
    <h4>Prevalence and genetics</h4>
    <p><strong>Familial hypercholesterolaemia</strong> affects about 1 in 250 people. It is usually <strong>autosomal dominant</strong>, caused by variants in <strong>LDLR</strong> (most cases), <strong>APOB</strong> or <strong>PCSK9</strong>. LDL-C is high from birth, so atherosclerosis begins early. Homozygous disease is rare but causes severe coronary disease in childhood or adolescence.</p>
    <h4>Clinical diagnosis</h4>
    <p>The <strong>Dutch Lipid Clinic criteria</strong> combine LDL-C, family history, personal ASCVD and physical signs. <strong>Tendon xanthomas</strong> and <strong>corneal arcus</strong> before age 45 are strong clues, but many patients have none. A definite or probable score is enough to act. Genetic testing confirms the diagnosis and aids family screening, but it is not essential before treatment and is not widely available in the Philippines.</p>
    <h4>Cascade screening</h4>
    <ul>
      <li>Test first-degree relatives of an index case with lipids, ideally from childhood.</li>
      <li>Use <strong>reverse cascade</strong> screening when a young patient is diagnosed: test the parents to find the affected parent.</li>
      <li>Exclude secondary hypercholesterolaemia and interpret LDL-C against age and sex.</li>
      <li>Record the family tree and share a simple letter that relatives can bring to a clinic. Children with an affected parent should be tested before puberty so that treatment can start early. Offer testing to siblings and adult children, not only parents. Genetic counselling should accompany testing when it is available.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Start a <strong>high-intensity statin</strong> early, add <strong>ezetimibe</strong>, and use a PCSK9 inhibitor when the goal is not met. <strong>LDL apheresis</strong> is reserved for homozygous or refractory disease. Treat from childhood under specialist supervision. In Philippine practice, the main barriers are awareness, lipid testing and drug cost, so a clear family letter and generic statin plan are practical contributions.</p>
  `,
  tip: "Make the diagnosis with LDL-C plus family history, then spend equal time on finding relatives.",
  sources: ["C8", "C16", "C1", "C17"]
},
{
  id: "cc269", domain: "chem-lipid",
  q: "Explain the mechanism, indications, monitoring and access issues of PCSK9 inhibitors and inclisiran in lipid management.",
  tags: ["PCSK9 inhibitor", "inclisiran", "LDL receptor"],
  keypoints: ["PCSK9", "LDL receptor", "lysosomal degradation", "evolocumab", "alirocumab", "inclisiran", "small interfering RNA", "50 to 60 percent", "familial hypercholesterolaemia", "ASCVD", "statin intolerance", "ezetimibe", "injection site reaction", "cost", "cold chain", "lipid monitoring"],
  answer: `
    <h4>Biology</h4>
    <p><strong>PCSK9</strong> binds the <strong>LDL receptor</strong> and promotes its <strong>lysosomal degradation</strong>, reducing the number of receptors available to clear LDL. Gain-of-function variants cause familial hypercholesterolaemia; loss-of-function variants produce very low LDL-C and less coronary disease, which validated the target.</p>
    <h4>Drugs and mechanism</h4>
    <ul>
      <li><strong>Evolocumab</strong> and <strong>alirocumab</strong> are monoclonal antibodies given every 2 or 4 weeks; they block PCSK9 binding and preserve the receptor. Their slow clearance allows infrequent dosing.</li>
      <li><strong>Inclisiran</strong> is a <strong>small interfering RNA</strong> given twice yearly after the initial doses; it is taken up by hepatocytes and reduces PCSK9 synthesis. The loading schedule is day 0, month 3, then every 6 months.</li>
      <li>Both lower LDL-C by about <strong>50 to 60%</strong> on top of statin therapy and lower Lp(a) by 20 to 30%.</li>
    </ul>
    <h4>Indications</h4>
    <p>Use in <strong>familial hypercholesterolaemia</strong>, established <strong>ASCVD</strong> not at goal despite maximum statin plus <strong>ezetimibe</strong>, and genuine <strong>statin intolerance</strong>. They are not first-line for primary prevention in low-risk patients, and they should not replace a statin in someone who tolerates one. Confirm adherence and document the response before each escalation.</p>
    <h4>Monitoring and access</h4>
    <p>Check lipids 4 to 12 weeks after starting, then periodically. Expect <strong>injection site reactions</strong> and occasional nasopharyngitis; routine CK monitoring is unnecessary. In the Philippines, <strong>cost</strong>, <strong>cold chain</strong> and limited reimbursement are major barriers, and PhilHealth coverage is not universal. Prior authorisation and a documented LDL-C response are often required by payers. Biosimilars and price negotiations may improve access. Document the indication and response so that the expense is justified and therapy can be stopped if it is ineffective.</p>
  `,
  tip: "Contrast the antibody and siRNA mechanisms, then be explicit about who should not receive them.",
  sources: ["C8", "C1", "C16", "C18"]
},
{
  id: "cc270", domain: "chem-lipid", star: true,
  q: "Discuss interference in lipid and lipoprotein measurement: lipaemia, haemolysis, bilirubin, biotin and paraproteins. How are these detected and managed?",
  tags: ["interference", "lipaemia", "biotin"],
  keypoints: ["lipaemia", "light scattering", "volume displacement", "haemolysis", "bilirubin", "biotin", "streptavidin-biotin", "paraprotein", "heterophile antibody", "high-dose hook", "serum indices", "ultracentrifugation", "dilution", "non-HDL cholesterol", "report comment"],
  answer: `
    <h4>Lipaemia</h4>
    <p><strong>Lipaemia</strong> causes <strong>light scattering</strong> and <strong>volume displacement</strong>, so results depend on the analyte and platform. Turbidity raises apparent absorbance and can bias cholesterol and triglyceride, while direct HDL-C and LDL-C assays may be distorted by abnormal particles. Very high triglyceride also invalidates the Friedewald equation. A fasting sample reduces but does not eliminate chylomicronaemia. Ultracentrifugation, dilution or a lipaemia-resistant method may be needed, and the report should state the limitation.</p>
    <h4>Haemolysis and bilirubin</h4>
    <p><strong>Haemolysis</strong> releases haemoglobin and adenylate kinase, producing spectral and chemical interference. <strong>Bilirubin</strong> interferes at short wavelengths and can suppress peroxidase-based Trinder reactions. Both can bias cholesterol and triglyceride results and may affect Lp(a) immunoassays. <strong>Serum indices</strong> flag the sample before results are released.</p>
    <h4>Biotin and immunoassay</h4>
    <div class="table-wrap"><table>
      <tr><th>Assay format</th><th>Effect of high biotin</th></tr>
      <tr><td>Sandwich immunoassay</td><td>Falsely low result</td></tr>
      <tr><td>Competitive immunoassay</td><td>Falsely high result</td></tr>
    </table></div>
    <p>High-dose biotin, as used in multiple sclerosis, distorts <strong>streptavidin-biotin</strong> systems and can affect Lp(a), apo B and other lipoprotein tests. Ask about supplements and repeat after withdrawal where possible.</p>
    <h4>Paraproteins and other problems</h4>
    <p><strong>Paraprotein</strong> can cause turbidity, precipitation or non-linearity; <strong>heterophile antibody</strong> and the <strong>high-dose hook</strong> effect cause unexpected immunoassay results. EDTA contamination dilutes lipids, and delayed separation raises free glycerol and triglyceride.</p>
    <h4>Detection and management</h4>
    <p>Inspect the sample, use <strong>serum indices</strong>, dilute and re-measure, or use an alternative method. Record the icterus, haemolysis and lipaemia indices with the result. Report a comment rather than a misleading number, and use <strong>non-HDL cholesterol</strong> when LDL-C cannot be trusted. Never release an implausible result without an explanation. Document the interference so that future results are interpreted correctly.</p>
  `,
  tip: "Group interferences by physical, spectral and immunochemical mechanism, then give one fix for each.",
  sources: ["C1", "C2", "C5", "C11"]
}
);
