/* Clinical Chemistry — carbohydrates & diabetes, part C (cc251–cc260). */
window.QBANK.push(
{
  id: "cc251", domain: "chem-carb", star: true,
  q: "Discuss the PCEDM 2025-2026 clinical practice guideline for type 2 diabetes in Filipino adults: diagnosis, individualised targets and choice of glucose-lowering therapy.",
  tags: ["PCEDM", "type 2 diabetes", "Philippine guideline"],
  keypoints: ["PCEDM", "two abnormal results", "fasting plasma glucose", "OGTT", "HbA1c", "individualised target", "metformin", "SGLT2 inhibitor", "GLP-1 receptor agonist", "heart failure", "albuminuria", "hypoglycaemia", "cost", "lifestyle"],
  answer: `
    <h4>Diagnosis</h4>
    <p>The PCEDM 2025-2026 guideline for Filipino adults retains the standard triad: <strong>fasting plasma glucose</strong> at least 7.0 mmol/L, a 2-hour 75 g <strong>OGTT</strong> at least 11.1 mmol/L, or <strong>HbA1c</strong> at least 6.5% by an NGSP-traceable method. Without classic symptoms, <strong>two abnormal results</strong> are needed. Because HbA1c access is uneven outside major cities and anaemia and haemoglobin variants are common, fasting glucose or an OGTT is accepted when HbA1c is unreliable. Screening starts at 35 years, or earlier with overweight, family history, previous gestational diabetes or hypertension.</p>
    <h4>Targets</h4>
    <p>Control is <strong>individualised</strong>. The usual aim is HbA1c below 7.0%, with below 6.5% for younger, newly diagnosed patients at low hypoglycaemia risk, and below 8.0% for older people, advanced complications or limited life expectancy. Fasting glucose of 4.4-7.2 mmol/L and postprandial glucose below 10.0 mmol/L are practical correlates. A target is meaningless without a hypoglycaemia plan and structured education.</p>
    <h4>Choice of therapy</h4>
    <div class="table-wrap"><table>
      <tr><th>Clinical setting</th><th>Preferred addition</th></tr>
      <tr><td>Atherosclerotic disease or high risk</td><td><strong>GLP-1 receptor agonist</strong> or <strong>SGLT2 inhibitor</strong></td></tr>
      <tr><td>Heart failure</td><td><strong>SGLT2 inhibitor</strong></td></tr>
      <tr><td>Chronic kidney disease with <strong>albuminuria</strong></td><td><strong>SGLT2 inhibitor</strong></td></tr>
      <tr><td>Weight priority</td><td>GLP-1 receptor agonist</td></tr>
      <tr><td>Cost constraint</td><td>Generic sulfonylurea or pioglitazone</td></tr>
      <tr><td>High hypoglycaemia risk</td><td>Avoid sulfonylurea; consider a DPP-4 inhibitor</td></tr>
    </table></div>
    <p><strong>Metformin</strong> with <strong>lifestyle</strong> remains first-line when tolerated and not contraindicated. The distinctive local adaptation is affordability: the guideline permits older agents when newer drugs are out of reach, provided blood pressure, lipids and smoking are treated with equal vigour.</p>
    <h4>Monitoring</h4>
    <ul>
      <li>HbA1c every 3-6 months according to control.</li>
      <li>eGFR and urine albumin-to-creatinine ratio at least annually.</li>
      <li>Retinal screening, foot examination and a lipid profile.</li>
      <li>Refer for pregnancy planning, foot ulcer or a rapid fall in kidney function.</li>
    </ul>
  `,
  tip: "Anchor the answer on individualisation and affordability — the two themes that distinguish the local guideline from a generic ADA summary.",
  sources: ["C16", "C6", "C18"]
},
{
  id: "cc252", domain: "chem-carb", star: true,
  q: "HbA1c is requested in a provincial Philippine hospital that has only a point-of-care device. Discuss standardisation, method choice, interference and how to report a defensible result.",
  tags: ["HbA1c", "standardisation", "Philippines", "interference"],
  keypoints: ["IFCC", "NGSP", "traceability", "boronate affinity", "cation-exchange HPLC", "immunoturbidimetric", "point-of-care", "EQA", "HbE", "iron deficiency", "haemolysis", "recent transfusion", "pregnancy", "carbamylated haemoglobin", "fructosamine", "OGTT"],
  answer: `
    <h4>Why standardisation comes first</h4>
    <p>HbA1c must be traceable to the <strong>IFCC</strong> reference method and reported in <strong>NGSP</strong> units, using NGSP % = 0.0915 × IFCC mmol/mol + 2.15. A device without documented <strong>traceability</strong> cannot be used to diagnose diabetes. In the Philippines, the DOH-designated national reference laboratory for clinical chemistry runs the external quality assessment (EQA) scheme, and participation is a condition of laboratory licensure. Verify every <strong>point-of-care</strong> device against the main analyser across the clinical range before use, and repeat verification whenever the device or reagent lot changes.</p>
    <h4>Method choice</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Strength</th><th>Limitation</th></tr>
      <tr><td><strong>Cation-exchange HPLC</strong></td><td>Precise; shows variants on the chromatogram</td><td>Expensive; variant peaks may co-elute</td></tr>
      <tr><td><strong>Boronate affinity</strong></td><td>Least affected by variants</td><td>Does not identify the variant</td></tr>
      <tr><td><strong>Immunoturbidimetric</strong></td><td>Fast and cheap on chemistry analysers</td><td>Variant and antibody sensitivity</td></tr>
      <tr><td>Enzymatic</td><td>Specific; few chemical interferences</td><td>Method-specific bias</td></tr>
    </table></div>
    <h4>Interference</h4>
    <p>Results are method-dependent. <strong>HbE</strong>, HbS and thalassaemia may read low or high; <strong>iron deficiency</strong> raises HbA1c by prolonging red cell survival; <strong>haemolysis</strong>, <strong>recent transfusion</strong>, erythropoietin and <strong>pregnancy</strong> lower it. <strong>Carbamylated haemoglobin</strong> in uraemia and a persistent labile fraction raise some methods. Interpret every value against the full blood count and the clinical setting, not the number alone.</p>
    <h4>Reporting a defensible result</h4>
    <p>State the method on the report and flag any suspected variant. If the HbA1c conflicts with glucose, do not adjust treatment: repeat by a different analytical principle, request haemoglobin analysis, and confirm diagnosis with fasting plasma glucose or an <strong>OGTT</strong>. While HbA1c is invalid, monitor with <strong>fructosamine</strong>, glycated albumin or CGM. A comment naming the likely interference protects both patient and laboratory.</p>
  `,
  tip: "The safe sequence is traceability, then local verification, then method-specific interference, then a comment and an alternative test.",
  sources: ["C16", "C1", "C5", "C13"]
},
{
  id: "cc253", domain: "chem-carb", star: true,
  q: "Discuss gestational diabetes screening and diagnosis in the Philippines, including the choice of protocol and the barriers to completing the OGTT.",
  tags: ["gestational diabetes", "OGTT", "Philippines", "screening"],
  keypoints: ["24-28 weeks", "early testing", "75 g OGTT", "IADPSG", "fasting 5.1", "1-hour 10.0", "2-hour 8.5", "two-step", "50 g challenge", "HbA1c", "postpartum OGTT", "PhilHealth", "barangay health unit", "fasting", "cost"],
  answer: `
    <h4>Who and when</h4>
    <p>Universal screening is offered at <strong>24-28 weeks</strong>, with <strong>early testing</strong> at the first prenatal visit for women with previous gestational diabetes, obesity, a first-degree relative with diabetes, polycystic ovary syndrome, previous macrosomia or glycosuria. Filipino and other Asian ancestry is itself a risk factor. Early testing also identifies previously undiagnosed type 2 diabetes, which needs different care. A normal early result does not remove the need for repeat testing at 24-28 weeks.</p>
    <h4>Which protocol</h4>
    <p>The PCEDM and Philippine obstetric guidance favour the one-step <strong>75 g OGTT</strong> with <strong>IADPSG</strong> thresholds, because it detects more affected women and uses a single visit.</p>
    <div class="table-wrap"><table>
      <tr><th>Sample</th><th>IADPSG cut-off</th></tr>
      <tr><td><strong>Fasting</strong></td><td>5.1 mmol/L (92 mg/dL)</td></tr>
      <tr><td><strong>1-hour</strong></td><td>10.0 mmol/L (180 mg/dL)</td></tr>
      <tr><td><strong>2-hour</strong></td><td>8.5 mmol/L (153 mg/dL)</td></tr>
    </table></div>
    <p>Any one abnormal value diagnoses gestational diabetes. The <strong>two-step</strong> alternative uses a non-fasting <strong>50 g challenge</strong> followed by a 100 g OGTT, requiring two abnormal values. <strong>HbA1c</strong> is not a diagnostic test in pregnancy because haemodilution lowers it.</p>
    <h4>Barriers in practice</h4>
    <ul>
      <li><strong>Fasting</strong> and a two-hour clinic wait deter working mothers.</li>
      <li>Travel and <strong>cost</strong> across island and rural settings; PhilHealth maternity cover may not reimburse the full test.</li>
      <li>Non-standard glucose loads and delayed sample separation cause false results.</li>
      <li>Limited <strong>barangay health unit</strong> capacity for counselling and recall.</li>
    </ul>
    <p>Practical remedies are early-morning appointments, a standard 75 g anhydrous glucose drink, fluoride tubes with prompt separation, and SMS recall of abnormal results.</p>
    <h4>After delivery</h4>
    <p>A <strong>postpartum OGTT</strong> at 4-12 weeks reclassifies the mother, followed by lifelong screening every 1-3 years. Breastfeeding should be encouraged.</p>
  `,
  tip: "Commit to the one-step 75 g test with all three cut-offs, then show that you understand why real Filipino patients fail to complete it.",
  sources: ["C16", "C6", "C18"]
},
{
  id: "cc254", domain: "chem-carb",
  q: "Explain how PhilHealth finances diabetes care in the Philippines and discuss the consequences for laboratory testing and monitoring.",
  tags: ["PhilHealth", "health financing", "diabetes benefits"],
  keypoints: ["RA 11223", "Universal Health Care", "Konsulta", "primary care", "case rate", "no balance billing", "laboratory benefit schedule", "HbA1c", "out-of-pocket", "insulin", "SGLT2 inhibitor", "albumin-to-creatinine ratio", "reimbursement", "equity"],
  answer: `
    <h4>The financing framework</h4>
    <p>Under <strong>RA 11223</strong>, the <strong>Universal Health Care</strong> Act, PhilHealth acts as the national purchaser rather than a charitable fund. Diabetes care is paid through two main routes: the <strong>Konsulta</strong> <strong>primary care</strong> package for enrolled patients, and inpatient <strong>case rate</strong>s for admissions such as ketoacidosis, hyperosmolar state, foot infection or dialysis initiation. Package rates are meant to include the whole episode, and <strong>no balance billing</strong> applies to package services for eligible members.</p>
    <h4>What is covered, and what is not</h4>
    <div class="table-wrap"><table>
      <tr><th>Service</th><th>Typical cover</th><th>Common gap</th></tr>
      <tr><td>Primary care consultation and risk assessment</td><td>Konsulta package</td><td>Enrolment and facility accreditation</td></tr>
      <tr><td>Basic diagnostics</td><td>Defined <strong>laboratory benefit schedule</strong>: fasting glucose, lipids, creatinine, urinalysis</td><td>HbA1c, OGTT, albumin-to-creatinine ratio</td></tr>
      <tr><td>Inpatient diabetes emergency</td><td>Case rate</td><td>Long stay, complications, readmission</td></tr>
      <tr><td>Medicines</td><td>Selected generics</td><td><strong>Insulin</strong> analogues, GLP-1 agonists, <strong>SGLT2 inhibitors</strong></td></tr>
    </table></div>
    <h4>Consequences for the laboratory</h4>
    <p>Test menus follow reimbursement, not guidelines. When HbA1c and <strong>albumin-to-creatinine ratio</strong> are <strong>out-of-pocket</strong>, clinicians substitute fasting glucose and dipstick protein, losing the ability to detect early kidney disease or assess long-term control. Case-rate caps can pressure laboratories to batch tests or defer repeat sampling. Equity suffers most in low-income and rural patients, who already travel furthest.</p>
    <h4>Improving value</h4>
    <ul>
      <li>Strengthen accredited primary care laboratories with EQA and trained staff.</li>
      <li>Bundle HbA1c and albumin-to-creatinine ratio into the primary care package.</li>
      <li>Publish price and turnaround data so referrals are rational.</li>
      <li>Prefer proven generic medicines and document their outcomes.</li>
    </ul>
    <p>Financing is therefore a clinical chemistry issue: the test that is paid for shapes the diabetes that is treated.</p>
  `,
  tip: "Name the two payment routes, then argue that benefit design determines which laboratory tests exist in practice.",
  sources: ["C18", "C16", "C13"]
},
{
  id: "cc255", domain: "chem-carb", star: true,
  q: "Discuss the Filipino diet, dietary glycaemic index and glycaemic load, and their implications for diabetes prevention and laboratory monitoring.",
  tags: ["Filipino diet", "glycaemic index", "glycaemic load", "rice"],
  keypoints: ["rice", "white rice", "glycaemic index", "glycaemic load", "available carbohydrate", "sugar-sweetened beverages", "Pinggang Pinoy", "dietary fibre", "postprandial glucose", "HbA1c", "triglycerides", "waist circumference", "weight loss", "physical activity"],
  answer: `
    <h4>The Filipino dietary pattern</h4>
    <p><strong>Rice</strong> is the energy centre of the meal, often two to three cups at lunch and dinner. Milled <strong>white rice</strong> has a high <strong>glycaemic index</strong>, little <strong>dietary fibre</strong> and is eaten quickly with salty or fried viands. <strong>Sugar-sweetened beverages</strong>, instant noodles, pandesal and sweet merienda add rapidly absorbed carbohydrate, while vegetables and fruit are often scarce. The DOST-FNRI <strong>Pinggang Pinoy</strong> plate attempts to correct this: half vegetables and fruit, one quarter rice, one quarter protein.</p>
    <h4>Glycaemic index and load</h4>
    <p>The glycaemic index ranks a food against glucose, but portion matters. <strong>Glycaemic load</strong> combines both:</p>
    <div class="calc">GL = (glycaemic index × available carbohydrate in grams) ÷ 100</div>
    <div class="table-wrap"><table>
      <tr><th>Food (approximate)</th><th>GI</th><th>GL</th></tr>
      <tr><td>1 cup white rice</td><td>80</td><td>36</td></tr>
      <tr><td>1 cup brown rice</td><td>55</td><td>22</td></tr>
      <tr><td>1 pandesal</td><td>75</td><td>20</td></tr>
      <tr><td>1 bottle sweetened drink</td><td>65</td><td>26</td></tr>
    </table></div>
    <p>Values vary with variety, cooking and cooling; cooled rice forms resistant starch and lowers the effective load modestly. The index is measured on 50 g of available carbohydrate, so it does not by itself describe a full mixed meal.</p>
    <h4>Laboratory implications</h4>
    <p>A high-load meal produces a sharp <strong>postprandial glucose</strong> excursion that fasting glucose and <strong>HbA1c</strong> conceal. It also raises <strong>triglycerides</strong>, lowers HDL and increases <strong>waist circumference</strong>. CGM makes the pattern visible and is a powerful teaching tool.</p>
    <h4>Prevention</h4>
    <ul>
      <li>Aim for 5-7% <strong>weight loss</strong> and 150 minutes of <strong>physical activity</strong> weekly.</li>
      <li>Halve the rice portion and replace it with vegetables or brown rice.</li>
      <li>Remove sweetened drinks from the daily routine.</li>
      <li>Support food labelling and the sugar-sweetened beverage tax.</li>
    </ul>
  `,
  tip: "Show the GL calculation with a real Filipino portion — examiners reward the ability to turn a food guide into a number.",
  sources: ["C16", "C1", "C6"]
},
{
  id: "cc256", domain: "chem-carb",
  q: "Describe the Philippine DOH noncommunicable disease programme and the laboratory's role in its screening, treatment and surveillance components.",
  tags: ["DOH", "NCD programme", "PhilPEN", "surveillance"],
  keypoints: ["RA 11223", "NCD Prevention and Control Program", "PhilPEN", "Healthy Pilipinas", "barangay health station", "rural health unit", "risk assessment", "capillary glucose", "referral", "EQA", "surveillance", "NNHeS", "HbA1c", "monitoring indicators"],
  answer: `
    <h4>Policy architecture</h4>
    <p>The DOH <strong>NCD Prevention and Control Program</strong> sits within the <strong>RA 11223</strong> Universal Health Care framework and is delivered largely by local government units. Its front door is <strong>PhilPEN</strong>, the Philippine adaptation of the WHO package of essential NCD interventions, supported by the <strong>Healthy Pilipinas</strong> campaign and fiscal measures such as the sugar-sweetened beverage and tobacco taxes. Trained midwives and nurses deliver most of the package, with the laboratory providing the measurements that trigger referral and follow-up.</p>
    <h4>Service package by level</h4>
    <div class="table-wrap"><table>
      <tr><th>Level</th><th>Main diabetes functions</th></tr>
      <tr><td><strong>Barangay health station</strong></td><td>Risk assessment, blood pressure, <strong>capillary glucose</strong>, lifestyle advice, <strong>referral</strong></td></tr>
      <tr><td><strong>Rural health unit</strong></td><td>Fasting glucose, lipids, creatinine, medicines, counselling, annual review</td></tr>
      <tr><td>District or provincial hospital</td><td>OGTT, <strong>HbA1c</strong>, complication screening, insulin initiation</td></tr>
    </table></div>
    <h4>The laboratory's role</h4>
    <ul>
      <li>Use standardised, traceable methods and participate in <strong>EQA</strong> through the national reference laboratory network.</li>
      <li>Govern point-of-care glucose testing: training, internal QC and correlation with the main analyser.</li>
      <li>Report <strong>monitoring indicators</strong> — HbA1c, albumin-to-creatinine ratio, lipids, eGFR — to the primary care team.</li>
      <li>Screen people with tuberculosis and HIV for hyperglycaemia, and support hypertension and lipid clinics.</li>
    </ul>
    <h4>Surveillance and gaps</h4>
    <p>National risk-factor data come from surveys such as the <strong>NNHeS</strong>, while routine activity is captured in the field health information system. Weaknesses include incomplete <strong>surveillance</strong>, unavailable HbA1c, fragmented referral and poor data linkage between barangay, RHU and hospital laboratories. A functioning laboratory network is therefore not ancillary to the programme; it is the instrument that turns screening into treatment and treatment into measured outcomes.</p>
  `,
  tip: "Trace one patient from barangay risk assessment to hospital HbA1c and name the laboratory's duty at each level.",
  sources: ["C16", "C18", "C13"]
},
{
  id: "cc257", domain: "chem-carb", star: true,
  q: "Critically discuss continuous glucose monitoring in type 2 diabetes: sensor principles, core metrics and the limitations that affect interpretation.",
  tags: ["CGM", "type 2 diabetes", "time in range", "AGP"],
  keypoints: ["interstitial glucose", "lag", "MARD", "time in range", "time below range", "coefficient of variation", "glucose management indicator", "glucose risk index", "ambulatory glucose profile", "14 days", "compression low", "paracetamol", "cost", "alarm fatigue", "chronic kidney disease"],
  answer: `
    <h4>Sensor principles</h4>
    <p>A transcutaneous sensor measures <strong>interstitial glucose</strong> with a glucose oxidase electrode, and a transmitter relays readings every few minutes for 10-14 days. Real-time systems display values and alarms; intermittently scanned systems require a swipe. Interstitial glucose <strong>lag</strong>s plasma by 5-15 minutes, so a rapidly falling value reads higher than blood and a rising value lower. Accuracy is expressed as <strong>MARD</strong>, with about 10% or less considered good.</p>
    <h4>Core metrics</h4>
    <div class="table-wrap"><table>
      <tr><th>Metric</th><th>Target</th></tr>
      <tr><td><strong>Time in range</strong> 3.9-10.0 mmol/L</td><td>Above 70%</td></tr>
      <tr><td><strong>Time below range</strong></td><td>Below 4%, and below 1% under 3.0 mmol/L</td></tr>
      <tr><td>Time above 10.0 mmol/L</td><td>Below 25%</td></tr>
      <tr><td><strong>Coefficient of variation</strong></td><td>Below 36%</td></tr>
      <tr><td><strong>Glucose management indicator</strong></td><td>Compare with laboratory HbA1c</td></tr>
    </table></div>
    <p>The <strong>glucose risk index</strong> compresses time below and above range into one 0-100 score, and the <strong>ambulatory glucose profile</strong> shows the median and spread by time of day. At least <strong>14 days</strong> with 70% of readings are needed. Review the profile with the patient and address the most dangerous pattern first, usually nocturnal hypoglycaemia.</p>
    <h4>Evidence in type 2 diabetes</h4>
    <p>In insulin-treated type 2 diabetes, CGM lowers HbA1c and increases time in range, with the greatest benefit in people with recurrent hypoglycaemia. Professional CGM in non-insulin-treated patients can reveal postprandial patterns and motivate dietary change, but the effect wanes without structured feedback.</p>
    <h4>Limitations</h4>
    <p><strong>Compression low</strong>s during sleep, <strong>paracetamol</strong> with older sensors, ascorbate, hydroxyurea, oedema, shock and <strong>chronic kidney disease</strong> distort readings. Alarms cause <strong>alarm fatigue</strong>, and <strong>cost</strong> and access remain prohibitive for most Filipino patients. CGM complements, but does not replace, HbA1c and clinical judgement.</p>
  `,
  tip: "Pair every metric with the decision it drives, then show that you know the artefacts that produce a convincing but wrong trace.",
  sources: ["C6", "C1", "C16"]
},
{
  id: "cc258", domain: "chem-carb", star: true,
  q: "A 48-year-old without diabetes has recurrent early-morning hypoglycaemia. Explain how the critical sample, insulin and C-peptide establish the cause.",
  tags: ["hypoglycaemia", "insulin", "C-peptide", "insulinoma"],
  keypoints: ["Whipple triad", "72-hour fast", "critical sample", "insulin", "C-peptide", "proinsulin", "beta-hydroxybutyrate", "sulfonylurea screen", "cortisol", "IGF-2", "insulinoma", "factitious hypoglycaemia", "renal impairment", "heterophile antibodies", "glucagon response"],
  answer: `
    <h4>Confirm the diagnosis first</h4>
    <p>Establish the <strong>Whipple triad</strong> with a laboratory glucose, not a meter value: symptoms, a plasma glucose below 3.0 mmol/L, and relief on correction. Exclude pseudohypoglycaemia from delayed separation or a very high white cell count. A supervised <strong>72-hour fast</strong> in hospital is the definitive test when spontaneous episodes cannot be captured. Stop the fast for symptomatic hypoglycaemia or a glucose below 2.5 mmol/L, and treat immediately after the sample is drawn.</p>
    <h4>The critical sample</h4>
    <p>Draw before glucose is given, at the moment of hypoglycaemia:</p>
    <ul>
      <li>Glucose, <strong>insulin</strong>, <strong>C-peptide</strong> and <strong>proinsulin</strong>.</li>
      <li><strong>Beta-hydroxybutyrate</strong> and free fatty acids.</li>
      <li><strong>Cortisol</strong>, growth hormone, lactate, ammonia and liver and renal function.</li>
      <li>A <strong>sulfonylurea screen</strong>, and <strong>IGF-2</strong> if a non-islet tumour is suspected.</li>
      <li>The glucose rise after intravenous <strong>glucagon</strong>, which reflects glycogen stores.</li>
    </ul>
    <h4>Interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Insulin</th><th>C-peptide</th><th>Likely cause</th></tr>
      <tr><td>High</td><td>High</td><td><strong>Insulinoma</strong> or sulfonylurea; the drug screen separates them</td></tr>
      <tr><td>High</td><td>Low</td><td>Exogenous insulin, accidental or <strong>factitious hypoglycaemia</strong></td></tr>
      <tr><td>Low</td><td>Low, ketones high</td><td>Adrenal, pituitary or hepatic failure, alcohol, prolonged fasting</td></tr>
      <tr><td>Low</td><td>Low, ketones low</td><td>Non-islet tumour secreting IGF-2</td></tr>
    </table></div>
    <p>In insulinoma, insulin is at least 3 µU/mL with glucose below 2.5 mmol/L, C-peptide at least 0.6 ng/mL and proinsulin raised.</p>
    <h4>Assay caveats</h4>
    <p><strong>Renal impairment</strong> raises C-peptide and insulin, insulin analogues may not cross-react equally, and <strong>heterophile antibodies</strong> or insulin autoantibodies can produce impossible values. Access to insulin, C-peptide and a sulfonylurea screen is limited in the Philippines, so plan send-out logistics before the fast, and never let a delayed result delay treatment of the patient.</p>
  `,
  tip: "Insulin and C-peptide move together in endogenous disease and apart when the insulin came from outside.",
  sources: ["C1", "C14", "C6"]
},
{
  id: "cc259", domain: "chem-carb",
  q: "Why is MODY under-recognised in the Philippines, who should be tested, and how does a genetic diagnosis change management?",
  tags: ["MODY", "monogenic diabetes", "genetic testing", "Philippines"],
  keypoints: ["autosomal dominant", "young onset", "C-peptide", "islet autoantibodies", "HNF1A", "GCK", "HNF4A", "HNF1B", "sulfonylurea", "cascade testing", "genetic testing cost", "labelled type 1 or type 2", "pregnancy", "MODY probability calculator"],
  answer: `
    <h4>Why it is missed</h4>
    <p>Most Filipino patients with monogenic diabetes are labelled type 1 or type 2. Young-onset type 2 diabetes is increasingly common in Asia, so age alone no longer discriminates. <strong>Islet autoantibodies</strong> and <strong>C-peptide</strong> are not routine, a three-generation family tree is rarely drawn, and a multigene panel is priced beyond most families. GCK disease is especially easy to miss because the fasting glucose is only mildly raised and the patient feels well. A negative panel does not exclude monogenic diabetes, and some families in the Philippines remain a clinical diagnosis.</p>
    <h4>Who should be tested</h4>
    <ul>
      <li><strong>Young onset</strong>, usually before 25-30 years, in a non-obese person.</li>
      <li>A strong <strong>autosomal dominant</strong> family history, with about half of relatives affected.</li>
      <li>Negative <strong>islet autoantibodies</strong> with preserved <strong>C-peptide</strong>.</li>
      <li>Stable mild fasting hyperglycaemia since childhood, or unusual sensitivity to a sulfonylurea.</li>
      <li>Neonatal diabetes, renal cysts, pancreatic atrophy or unexplained hypomagnesaemia.</li>
    </ul>
    <h4>Subtypes and management</h4>
    <div class="table-wrap"><table>
      <tr><th>Gene</th><th>Pattern</th><th>Management</th></tr>
      <tr><td><strong>GCK</strong></td><td>Mild stable fasting hyperglycaemia</td><td>No drug treatment outside pregnancy</td></tr>
      <tr><td><strong>HNF1A</strong></td><td>Progressive β-cell failure, low renal threshold</td><td><strong>Sulfonylurea</strong>; insulin in pregnancy</td></tr>
      <tr><td><strong>HNF4A</strong></td><td>Macrosomia, neonatal hypoglycaemia</td><td>Sulfonylurea</td></tr>
      <tr><td><strong>HNF1B</strong></td><td>Renal cysts, pancreatic atrophy</td><td>Insulin or oral agents</td></tr>
    </table></div>
    <h4>From suspicion to diagnosis</h4>
    <p>Use a <strong>MODY probability calculator</strong> to select patients, then counsel before <strong>genetic testing</strong> and arrange <strong>cascade testing</strong> of relatives. A result often allows insulin to be stopped, prevents hypoglycaemia, and changes <strong>pregnancy</strong> planning. Because <strong>genetic testing cost</strong> is the main barrier locally, clinicians should pool funds, use research or industry-supported programmes, and document the case for public coverage.</p>
  `,
  tip: "The argument is economic as well as clinical: a genetic result can replace decades of insulin, so the test may pay for itself.",
  sources: ["C6", "C16", "C18"]
},
{
  id: "cc260", domain: "chem-carb", star: true,
  q: "Compare classic diabetic ketoacidosis with euglycaemic ketoacidosis and explain the laboratory monitoring that defines resolution.",
  tags: ["DKA", "euglycaemic DKA", "SGLT2 inhibitors", "ketones"],
  keypoints: ["SGLT2 inhibitor", "glucagon", "ketogenesis", "glucose below 13.9", "pH below 7.3", "bicarbonate below 18", "beta-hydroxybutyrate", "anion gap", "urine ketones", "potassium", "phosphate", "perioperative", "fasting", "low-carbohydrate diet", "resolution"],
  answer: `
    <h4>Two presentations of one process</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Classic DKA</th><th>Euglycaemic DKA</th></tr>
      <tr><td>Glucose</td><td>Above 13.9 mmol/L</td><td>Below 13.9, sometimes near normal</td></tr>
      <tr><td>Trigger</td><td>Missed insulin, infection, new type 1</td><td><strong>SGLT2 inhibitor</strong>, surgery, fasting, alcohol, low-carbohydrate diet</td></tr>
      <tr><td>Acidosis</td><td>pH below 7.3, bicarbonate below 18</td><td>Same</td></tr>
      <tr><td>Ketones</td><td>Beta-hydroxybutyrate above 3 mmol/L</td><td>Same, often higher</td></tr>
    </table></div>
    <h4>Mechanism</h4>
    <p><strong>SGLT2 inhibitors</strong> excrete glucose and lower the measured value while stimulating <strong>glucagon</strong> and reducing insulin action. The resulting <strong>ketogenesis</strong> is amplified by the perioperative stress response, <strong>fasting</strong> and a <strong>low-carbohydrate diet</strong>. The glucose looks reassuring; the ketones do not.</p>
    <h4>Diagnosis</h4>
    <p>Do not anchor on glucose. Confirm with venous blood gas, bicarbonate, the <strong>anion gap</strong> and <strong>beta-hydroxybutyrate</strong>. <strong>Urine ketones</strong> detect acetoacetate, not beta-hydroxybutyrate, and may be falsely negative early or paradoxically stronger during recovery. Calculate the corrected sodium and effective osmolality, and look for the precipitant. Isotonic saline comes before insulin, and bicarbonate is reserved for severe acidaemia because it can worsen hypokalaemia and ketone recovery.</p>
    <h4>Monitoring and resolution</h4>
    <ul>
      <li>Glucose hourly; <strong>potassium</strong> and electrolytes every 2-4 hours.</li>
      <li>Venous pH, bicarbonate, anion gap and beta-hydroxybutyrate every 2-4 hours.</li>
      <li>Watch <strong>phosphate</strong>, magnesium and renal function.</li>
      <li>Replace potassium before insulin if it is low, and expect it to fall as insulin acts.</li>
    </ul>
    <p><strong>Resolution</strong> is biochemical, not symptomatic: pH above 7.3, bicarbonate at least 15-18 mmol/L, a normal anion gap and beta-hydroxybutyrate below about 0.6 mmol/L. Do not stop monitoring until both the ketone and acid-base abnormalities have corrected. Withhold the SGLT2 inhibitor during acute illness and before elective surgery, and give written sick-day rules.</p>
  `,
  tip: "State plainly that a normal glucose never excludes ketoacidosis in a patient taking an SGLT2 inhibitor.",
  sources: ["C6", "C1", "C15"]
}
);
