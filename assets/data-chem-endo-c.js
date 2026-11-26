/* Clinical Chemistry — endocrinology, part C: Philippine practice, adrenal, pituitary, dynamic testing. */
window.QBANK.push(
{
  id: "cc301", domain: "chem-endo", star: true,
  q: "Using PSEM/PCEDM guidance, explain how TSH and FT4 should be used to monitor treated thyroid disease in Philippine practice.",
  tags: ["thyroid", "TSH", "FT4", "Philippine guidelines", "monitoring"],
  keypoints: ["log-linear TSH-FT4", "TSH first-line", "FT4 when pituitary disease", "trimester-specific ranges", "levothyroxine target", "Graves FT4 FT3", "TSH suppression thyroid cancer", "assay-specific cut-offs", "biotin interference", "total T4 in pregnancy", "PhilHealth access", "same platform monitoring"],
  answer: `
    <h4>Why TSH leads</h4>
    <p>TSH and FT4 are related log-linearly: a twofold change in FT4 produces roughly a hundredfold change in TSH, so TSH detects small deviations before FT4 leaves its reference interval. The PSEM/PCEDM guidance used in Philippine practice therefore recommends TSH as the first-line test, with FT4 added when the pituitary axis is in doubt, when pregnancy changes binding proteins, or when the two disagree.</p>
    <h4>Targets that differ by question</h4>
    <div class="table-wrap"><table>
      <tr><th>Clinical setting</th><th>Main test</th><th>Target</th></tr>
      <tr><td>Primary hypothyroidism on levothyroxine</td><td>TSH</td><td>0.4-4.0 mIU/L, age-appropriate</td></tr>
      <tr><td>Pregnancy</td><td>Trimester-specific TSH and FT4</td><td>Local trimester ranges</td></tr>
      <tr><td>Graves disease on antithyroid drug</td><td>FT4, FT3 early</td><td>Keep FT4 in range; TSH lags</td></tr>
      <tr><td>Differentiated thyroid cancer suppression</td><td>TSH</td><td>&lt;0.1 mIU/L in high-risk disease</td></tr>
      <tr><td>Pituitary disease</td><td>FT4</td><td>TSH unreliable</td></tr>
    </table></div>
    <h4>Philippine laboratory realities</h4>
    <ul>
      <li>Use one platform consistently; method-specific cut-offs and reference intervals are not transferable.</li>
      <li>Biotin produces low TSH with high FT4 and FT3; ask about supplements and repeat after washout.</li>
      <li>FT4 is less available and more costly than TSH in many laboratories; PhilHealth coverage and send-out delays influence monitoring intervals.</li>
      <li>In pregnancy, total T4 may be used where free T4 assays are unreliable, against trimester-specific ranges.</li>
    </ul>
    <p>A discordant TSH-FT4 pair is a reason to stop and think, not to treat the number.</p>
    <h4>Timing and special situations</h4>
    <p>After a levothyroxine dose change, wait six to eight weeks before repeating TSH because the pituitary response lags. In T3 toxicosis FT4 may be normal, so FT3 is needed; in amiodarone-induced thyroid dysfunction, TSH alone can mislead. Elderly patients and those with ischaemic heart disease are usually maintained at a slightly higher TSH to avoid over-replacement, while pregnancy demands review every four weeks. Document the dose, adherence and time of sampling, because a missed dose or a sample taken soon after ingestion changes the result.</p>
  `,
  tip: "Lead with the log-linear relationship, then separate monitoring targets by clinical question and by local assay access.",
  sources: ["C17", "C16", "C1", "C14"]
},
{
  id: "cc302", domain: "chem-endo", star: true,
  q: "Discuss iodine deficiency disorders and goitre in the Philippines, including the laboratory and population indicators used to monitor control.",
  tags: ["iodine deficiency", "goitre", "ASIN law", "urinary iodine", "Philippines"],
  keypoints: ["urinary iodine", "goitre prevalence", "thyroglobulin", "RA 8172", "salt iodisation", "pregnant women", "iodine-induced thyrotoxicosis", "nodular autonomy", "sentinel surveys", "excess iodine", "TSH screening", "remote communities"],
  answer: `
    <h4>Spectrum and measurement</h4>
    <p>Iodine deficiency causes goitre, hypothyroidism, cretinism and pregnancy loss. The thyroid enlarges under TSH drive, and chronic stimulation can produce nodular autonomy. Status is assessed by median urinary iodine in schoolchildren or pregnant women, goitre prevalence, thyroglobulin and TSH.</p>
    <div class="table-wrap"><table>
      <tr><th>Median urinary iodine (µg/L)</th><th>Population status</th></tr>
      <tr><td>&lt;20</td><td>Severe deficiency</td></tr>
      <tr><td>20-49</td><td>Moderate deficiency</td></tr>
      <tr><td>50-99</td><td>Mild deficiency</td></tr>
      <tr><td>100-199</td><td>Adequate</td></tr>
      <tr><td>200-299</td><td>More than adequate</td></tr>
      <tr><td>≥300</td><td>Excessive</td></tr>
    </table></div>
    <h4>The Philippine programme</h4>
    <p>RA 8172, the ASIN law, mandates iodised salt, and the DOH monitors salt iodine and urinary iodine in sentinel schools. Goitre surveys use palpation or ultrasound. Pockets of deficiency persist in remote and low-income communities, and monitoring must include pregnant women because their requirement is higher.</p>
    <h4>Interpretation traps</h4>
    <ul>
      <li>A spot urine reflects recent intake; repeated surveys, not one sample, define status.</li>
      <li>Thyroglobulin rises with iodine deficiency and falls with supplementation.</li>
      <li>Sudden iodine loading in older nodular goitres can precipitate iodine-induced thyrotoxicosis.</li>
      <li>Excess iodine can worsen Hashimoto thyroiditis; universal salt iodisation must be monitored, not assumed.</li>
    </ul>
    <p>TSH screening alone misses compensated deficiency; pair it with urinary iodine at population level.</p>
    <h4>Clinical and programme interpretation</h4>
    <p>In the clinic, goitre is graded by palpation and confirmed by ultrasound; a diffusely enlarged gland suggests recent deficiency, while a nodular gland suggests longstanding disease. TSH is often normal in mild deficiency because the gland compensates, so a normal TSH does not exclude it. Thyroglobulin is a sensitive population marker but rises with any thyroid stimulation and falls within months of supplementation. In pregnancy, deficiency increases the risk of miscarriage, preterm birth and impaired neurodevelopment, so antenatal clinics are a key monitoring point. Iodised salt is cheap and effective, but coverage must be verified by titration rather than by sales data.</p>
  `,
  tip: "Answer at two levels: the individual patient (TSH, FT4, goitre) and the population (urinary iodine, salt monitoring).",
  sources: ["C17", "C16", "C14", "C1"]
},
{
  id: "cc303", domain: "chem-endo", star: true,
  q: "Explain the laboratory algorithm for congenital hypothyroidism under the Philippine newborn screening programme (RA 9288).",
  tags: ["congenital hypothyroidism", "newborn screening", "RA 9288", "TSH", "FT4"],
  keypoints: ["RA 9288", "dried blood spot", "TSH screen", "venous FT4", "primary congenital hypothyroidism", "central hypothyroidism", "TSH surge", "preterm repeat", "delayed TSH rise", "maternal TRAb", "levothyroxine early", "loss to follow-up"],
  answer: `
    <h4>The legal and programme frame</h4>
    <p>RA 9288 requires newborn screening for congenital hypothyroidism, congenital adrenal hyperplasia, G6PD deficiency, phenylketonuria, galactosaemia, maple syrup urine disease and selected haemoglobinopathies. Dried blood spots are collected after 24 hours and ideally before discharge; TSH is the primary congenital hypothyroidism analyte.</p>
    <h4>Confirmatory algorithm</h4>
    <div class="table-wrap"><table>
      <tr><th>Screen TSH</th><th>Venous FT4</th><th>Interpretation</th></tr>
      <tr><td>High</td><td>Low</td><td>Primary congenital hypothyroidism</td></tr>
      <tr><td>High</td><td>Normal</td><td>Compensated or subclinical; repeat and review</td></tr>
      <tr><td>Low or normal</td><td>Low</td><td>Central hypothyroidism; assess the pituitary</td></tr>
    </table></div>
    <h4>Traps and treatment</h4>
    <ul>
      <li>TSH surges in the first days, so collection timing matters; preterm and sick infants need repeat testing.</li>
      <li>Delayed TSH elevation occurs in some infants, especially with iodine exposure or maternal TRAb.</li>
      <li>Confirm on venous serum, not on a second filter-paper sample alone.</li>
      <li>Start levothyroxine without waiting for imaging; target FT4 in the upper half of the range and a normal TSH.</li>
      <li>Maternal autoimmune thyroid disease can cause transient neonatal hypothyroidism or Graves disease.</li>
    </ul>
    <p>Screening works only if confirmatory testing and treatment are accessible; loss to follow-up is the main programme failure.</p>
    <h4>Beyond the result</h4>
    <p>A positive filter-paper result must reach the family within days, and the infant should be reviewed by a paediatric endocrinologist. Venous sampling includes FT4, TSH and, where central disease is possible, cortisol and prolactin. Thyroid ultrasound and radioiodine uptake are not needed to start treatment; they are used later to identify dyshormonogenesis, ectopic tissue or transient causes. Hearing, growth and developmental milestones are monitored because untreated disease causes irreversible cognitive impairment. In the Philippines, transport delays between island provinces and reference laboratories threaten the two-week treatment target, so local retrieval and follow-up systems matter as much as the assay itself.</p>
  `,
  tip: "Show the screen-to-confirmation pathway, then name the timing traps that cause missed cases.",
  sources: ["C19", "C17", "C14", "C1"]
},
{
  id: "cc304", domain: "chem-endo",
  q: "Discuss the biochemical evaluation of polycystic ovary syndrome and hirsutism in Filipino women.",
  tags: ["PCOS", "hirsutism", "hyperandrogenism", "Filipino women", "Rotterdam"],
  keypoints: ["Rotterdam criteria", "oligo-anovulation", "hyperandrogenism", "polycystic morphology", "total testosterone", "LC-MS/MS", "free androgen index", "DHEAS", "17-hydroxyprogesterone", "Ferriman-Gallwey", "metabolic syndrome", "Asian BMI"],
  answer: `
    <h4>Diagnosis in Filipino women</h4>
    <p>PCOS is diagnosed by the Rotterdam criteria: two of oligo-anovulation, clinical or biochemical hyperandrogenism, and polycystic ovarian morphology, after excluding other causes. Filipino women often present with menstrual irregularity, acne and hirsutism, and may carry metabolic risk at a lower BMI than European populations, so Asian waist and glucose thresholds are appropriate.</p>
    <h4>Biochemical panel</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Purpose</th></tr>
      <tr><td>Total testosterone by LC-MS/MS</td><td>Confirm biochemical hyperandrogenism</td></tr>
      <tr><td>SHBG and free androgen index</td><td>Adjust for binding-protein changes</td></tr>
      <tr><td>DHEAS</td><td>Suggest an adrenal androgen source</td></tr>
      <tr><td>17-hydroxyprogesterone</td><td>Exclude non-classical CAH</td></tr>
      <tr><td>Prolactin and TSH</td><td>Exclude other causes of anovulation</td></tr>
      <tr><td>Fasting glucose, HbA1c, lipids</td><td>Metabolic screening</td></tr>
    </table></div>
    <h4>Hirsutism and mimics</h4>
    <ul>
      <li>Grade hirsutism with the Ferriman-Gallwey score; self-treatment with plucking or waxing hides the sign.</li>
      <li>Rapid virilisation, clitoromegaly or testosterone above 5 nmol/L suggests a tumour and needs urgent imaging.</li>
      <li>17-hydroxyprogesterone excludes non-classical CAH; DHEAS suggests an adrenal source.</li>
      <li>Immunoassays are imprecise at female testosterone concentrations; LC-MS/MS is preferred where available.</li>
    </ul>
    <p>Screen for metabolic syndrome and mental health, and treat the phenotype rather than the ultrasound alone.</p>
    <h4>Phenotype and access</h4>
    <p>The 2023 international guideline retains the Rotterdam framework but discourages using AMH alone to define polycystic morphology in adults, and it emphasises that ultrasound findings are common in asymptomatic women. In the Philippines, access to LC-MS/MS is limited, so many laboratories still report direct immunoassays; clinicians should interpret a normal immunoassay cautiously when hirsutism is convincing. Lifestyle change, weight management and metformin remain first-line for metabolic features, while combined oral contraceptives and antiandrogens treat the dermatological phenotype. Screening for depression, obstructive sleep apnoea and endometrial protection in oligo-ovulation is part of good endocrine care.</p>
  `,
  tip: "Separate diagnosis, androgen source and metabolic risk, and state why female testosterone needs a sensitive method.",
  sources: ["C17", "C16", "C14", "C1"]
},
{
  id: "cc305", domain: "chem-endo", star: true,
  q: "Discuss osteoporosis and vitamin D assessment in the Philippines, including equity of access to DXA and 25-hydroxyvitamin D testing.",
  tags: ["osteoporosis", "vitamin D", "DXA", "FRAX", "Philippines", "access"],
  keypoints: ["25-hydroxyvitamin D", "deficiency 30 nmol/L", "DXA T-score", "FRAX", "Filipino reference", "vertebral imaging", "PTH", "P1NP", "CTX", "PhilHealth access", "calcium intake", "repeat DXA"],
  answer: `
    <h4>Vitamin D measurement</h4>
    <p>25-hydroxyvitamin D is the status marker. Deficiency is below 30 nmol/L, insufficiency 30-50 nmol/L, and sufficiency above 50 nmol/L. Testing is not universal: measure it in fragility fracture, malabsorption, CKD, liver disease, obesity surgery, housebound patients and before potent antiresorptive therapy. Sun exposure is abundant in the Philippines, yet deficiency occurs with indoor work, veiling, sunscreen and low calcium intake.</p>
    <h4>Bone density and risk</h4>
    <p>DXA T-score at or below -2.5 defines osteoporosis; FRAX estimates ten-year fracture probability. Filipino reference data and calibration matter, and vertebral imaging is needed when height loss or back pain suggests fracture. Access is uneven: DXA and 25-hydroxyvitamin D are concentrated in cities, and PhilHealth coverage and out-of-pocket costs shape who is tested.</p>
    <h4>Monitoring</h4>
    <ul>
      <li>Correct vitamin D and calcium before starting antiresorptives.</li>
      <li>Check PTH, calcium, phosphate, creatinine and albumin to exclude secondary causes.</li>
      <li>Use P1NP and CTX fasting in the morning, on the same assay, to assess adherence and response.</li>
      <li>Repeat DXA usually after two years, not annually.</li>
    </ul>
    <p>In a resource-limited setting, target testing to patients whose management will change, and document the FRAX inputs so risk is comparable over time.</p>
    <h4>Case-finding and reporting</h4>
    <p>Population screening is not recommended, yet case-finding is reasonable in patients with recurrent falls, low-trauma fracture, chronic kidney disease or long-term glucocorticoids. Serum calcium, phosphate, alkaline phosphatase, PTH and creatinine should accompany 25-hydroxyvitamin D so that primary hyperparathyroidism or osteomalacia is not missed. In the Philippines, calcium intake is often below the recommended 1,000-1,200 mg daily, and generic calcium plus vitamin D is widely available. Fracture liaison services remain limited outside major hospitals, so the laboratory report should include a clear comment on fracture risk and the need for DXA rather than a bare number.</p>
  `,
  tip: "Combine the biochemical definition with a frank discussion of DXA and vitamin D access — that is the Philippine angle.",
  sources: ["C17", "C18", "C16", "C14"]
},
{
  id: "cc306", domain: "chem-endo", star: true,
  q: "Explain mild autonomous cortisol secretion in an adrenal incidentaloma, its clinical significance, and the risk of adrenal insufficiency after adrenalectomy.",
  tags: ["adrenal incidentaloma", "mild autonomous cortisol secretion", "dexamethasone", "adrenalectomy"],
  keypoints: ["mild autonomous cortisol secretion", "1 mg dexamethasone", "50 to 138 nmol/L", "late-night salivary cortisol", "urine free cortisol", "hypertension", "osteoporosis", "adrenalectomy", "contralateral suppression", "DHEAS", "pheochromocytoma exclusion", "repeat testing"],
  answer: `
    <h4>Definition</h4>
    <p>Mild autonomous cortisol secretion is biochemical cortisol excess without the classic phenotype, usually found during adrenal incidentaloma work-up. After overnight 1 mg dexamethasone, a cortisol between 50 and 138 nmol/L (1.8-5.0 µg/dL) suggests the diagnosis; above 138 nmol/L the excess is more definite. Results are assay-dependent, so the local cut-off must be validated.</p>
    <h4>Why it matters</h4>
    <p>Mild autonomous secretion associates with hypertension, type 2 diabetes, dyslipidaemia, osteoporosis, vertebral fracture and venous thromboembolism, and with higher mortality in some cohorts. Progression to overt Cushing syndrome is uncommon but real, so mild cases need periodic review rather than immediate surgery.</p>
    <h4>Practical management</h4>
    <ul>
      <li>Confirm with late-night salivary cortisol or 24-hour urine free cortisol when the dexamethasone result is borderline.</li>
      <li>Assess blood pressure, glucose, lipids, bone density and fracture risk.</li>
      <li>Consider adrenalectomy for young patients, progressive secretion or difficult-to-control comorbidity.</li>
      <li>After unilateral adrenalectomy, the contralateral axis may be suppressed; give perioperative glucocorticoid and taper guided by symptoms and cortisol.</li>
      <li>Exclude pheochromocytoma before any surgery.</li>
    </ul>
    <p>A low DHEAS supports chronic cortisol excess but does not define the syndrome alone.</p>
    <h4>Beyond the number</h4>
    <p>The term replaces older labels such as subclinical Cushing syndrome, which wrongly implied a purely biochemical entity. Cortisol secretion exists on a continuum, and the 1 mg test is a screening tool, not a threshold for surgery. Confirmatory testing should be repeated after three to six months when the first result is borderline, because up to a third of values shift category. Imaging characteristics, growth over time and the patient's age and comorbidity weigh as heavily as the cortisol value. In the Philippines, adrenal surgery is concentrated in tertiary centres, so the decision should be made by a multidisciplinary team that can also manage post-operative steroid replacement and patient education.</p>
  `,
  tip: "Define the grey zone numerically, then focus on comorbidity and the post-operative adrenal insufficiency risk.",
  sources: ["C14", "C17", "C1"]
},
{
  id: "cc307", domain: "chem-endo", star: true,
  q: "Discuss pre-analytical pitfalls and perioperative biochemical monitoring in phaeochromocytoma and paraganglioma.",
  tags: ["phaeochromocytoma", "metanephrines", "perioperative", "paraganglioma"],
  keypoints: ["plasma free metanephrines", "supine sampling", "urine fractionated metanephrines", "clonidine suppression", "false positives", "alpha blockade", "post-resection hypoglycaemia", "metanephrine follow-up", "3-methoxytyramine", "SDHB", "germline variants", "same assay"],
  answer: `
    <h4>Confirmation before surgery</h4>
    <p>Plasma free metanephrines, drawn supine after rest, or 24-hour urine fractionated metanephrines are first-line. Values above three to four times the upper limit are strongly suggestive; mild elevations need repeat testing or clonidine suppression. Posture, pain, stress, tricyclics, levodopa, sympathomimetics and acetaminophen in some assays cause false positives.</p>
    <h4>Perioperative laboratory watch</h4>
    <div class="table-wrap"><table>
      <tr><th>Timing</th><th>Test</th><th>Reason</th></tr>
      <tr><td>Pre-operative</td><td>CBC, electrolytes, glucose, ECG</td><td>Volume and catecholamine effects</td></tr>
      <tr><td>Intra-operative</td><td>Glucose, potassium, blood pressure</td><td>Insulin release, arrhythmia</td></tr>
      <tr><td>Post-resection</td><td>Glucose every 4-6 hours for 24 hours</td><td>Rebound hyperinsulinaemia</td></tr>
      <tr><td>Post-operative</td><td>Metanephrines at 2-4 weeks</td><td>Confirm complete resection</td></tr>
    </table></div>
    <h4>Follow-up</h4>
    <ul>
      <li>Alpha blockade precedes beta blockade by days to avoid unopposed vasoconstriction.</li>
      <li>Persistent or rising metanephrines suggest residual, recurrent or metastatic disease.</li>
      <li>3-methoxytyramine and SDHB testing matter in dopamine-secreting or malignant tumours.</li>
      <li>About a third have germline variants; refer for genetic counselling.</li>
      <li>Use the same assay and posture for every follow-up sample.</li>
    </ul>
    <h4>Sampling discipline</h4>
    <p>Timing is part of the test. Plasma metanephrines should be drawn after twenty to thirty minutes of quiet supine rest, preferably in the morning, because standing increases sympathetic traffic. Caffeine, smoking and vigorous exercise before collection add noise. In renal failure, metanephrine values rise because clearance falls, so interpret them against eGFR. The clonidine suppression test is reserved for mild elevations and is uninterpretable in patients taking beta blockers or antidepressants. After surgery, a normal metanephrine at two to four weeks is reassuring, but late recurrence is possible, so annual clinical review and biochemical testing continue for at least ten years in hereditary disease, and posture and timing are documented on every request.</p>
  `,
  tip: "Build the answer around the timeline: confirmation, pre-operative blockade, intra-operative glucose, post-operative surveillance.",
  sources: ["C14", "C17", "C1"]
},
{
  id: "cc308", domain: "chem-endo",
  q: "Explain cyclic Cushing syndrome and how the laboratory strategy should be modified when screening results are discordant.",
  tags: ["Cushing", "cyclic Cushing", "salivary cortisol", "discordant results"],
  keypoints: ["cyclic Cushing", "periodic hormonogenesis", "late-night salivary cortisol", "urine free cortisol", "dexamethasone suppression", "repeat testing", "ACTH", "inferior petrosal sampling", "pseudo-Cushing", "salivary contamination", "biotin interference", "LC-MS/MS"],
  answer: `
    <h4>The missed diagnosis</h4>
    <p>Cyclic Cushing syndrome is periodic hormonogenesis with episodes of excess separated by normal or low cortisol. Cycles range from days to months, so a single set of tests during a trough can be entirely normal. Consider it when symptoms are episodic or when screening results conflict with the phenotype.</p>
    <h4>Testing strategy</h4>
    <ul>
      <li>Collect late-night salivary cortisol on two nights, plus 24-hour urine free cortisol and an overnight dexamethasone test.</li>
      <li>Repeat testing over weeks to months rather than concluding from one normal study.</li>
      <li>During an active phase, measure ACTH and proceed to localisation, including inferior petrosal sampling.</li>
      <li>Ask the patient to keep a symptom and menstrual diary to time sampling.</li>
    </ul>
    <h4>Interference and mimics</h4>
    <p>Pseudo-Cushing from depression, alcohol, obesity and poorly controlled diabetes gives mild abnormalities. Salivary contamination from smoking, licorice or chewing raises results; biotin and heterophile antibodies distort immunoassays. LC-MS/MS methods reduce but do not abolish these problems. Confirm persistence before pituitary surgery, because a normal interval does not exclude the diagnosis.</p>
    <h4>Documenting cyclicity</h4>
    <p>Cyclicity can be documented only by serial measurements, and the interval between episodes is highly variable. Some patients cycle over days, others over months; a normal result during a trough is therefore uninformative unless repeated. Salivary cortisol is convenient for repeated home sampling, but pre-analytical errors are common: samples should be collected at the stated time, stored cold and not contaminated by food, smoking or lipstick. Urine free cortisol requires a complete collection, and creatinine should be reported to confirm adequacy. When all tests remain discordant, watchful waiting with a symptom diary is safer than empirical pituitary surgery.</p>
  `,
  tip: "Name cyclicity as a cause of discordance, then give a repeat-testing plan and the assay interferences to exclude.",
  sources: ["C14", "C1"]
},
{
  id: "cc309", domain: "chem-endo", star: true,
  q: "Describe the emergency biochemical assessment and post-operative monitoring of pituitary apoplexy.",
  tags: ["pituitary apoplexy", "hypopituitarism", "diabetes insipidus", "ACTH"],
  keypoints: ["pituitary apoplexy", "sudden headache", "visual field loss", "ophthalmoplegia", "adrenal crisis", "hydrocortisone before results", "cosyntropin unreliable", "stalk effect", "diabetes insipidus", "SIADH", "triphasic response", "permanent hypopituitarism"],
  answer: `
    <h4>Recognise the emergency</h4>
    <p>Pituitary apoplexy is haemorrhage or infarction within an adenoma, causing sudden headache, visual field loss, ophthalmoplegia, meningism and hypotension. Anticoagulation, dopamine agonists, pregnancy, irradiation and hypertension are precipitants. The diagnosis is clinical and radiological, but treatment starts before imaging when adrenal crisis is possible.</p>
    <h4>Immediate biochemistry</h4>
    <ul>
      <li>Draw cortisol, ACTH, FT4, TSH, prolactin, sodium, potassium and glucose before steroids if this causes no delay.</li>
      <li>Give hydrocortisone immediately when hypotension, hyponatraemia or hypoglycaemia suggests crisis; do not wait for results.</li>
      <li>Prolactin may be mildly raised by stalk compression rather than a prolactinoma.</li>
      <li>Cosyntropin is unreliable in acute apoplexy because the adrenal axis has not been chronically suppressed.</li>
    </ul>
    <h4>After decompression</h4>
    <p>Watch sodium and urine output for the triphasic response: central diabetes insipidus, then SIADH, then delayed diabetes insipidus. Check 08:00 cortisol and FT4 before discharge, replace levothyroxine only after cortisol is covered, and retest axes at six to twelve weeks. Permanent hypopituitarism is common.</p>
    <h4>Decisions after the crisis</h4>
    <p>Not every apoplectic adenoma needs urgent transsphenoidal surgery. Patients with mild, stable visual loss and no deterioration may be managed conservatively with close neuro-ophthalmological review, whereas severe visual deficit, deteriorating consciousness or hydrocephalus requires decompression. Biochemical recovery is unpredictable: some axes return within weeks, others remain deficient for life. Prolactin should be interpreted cautiously because stalk compression raises it, and a modest value does not exclude a prolactinoma. Before discharge, the patient and family need sick-day rules, a steroid alert card and education about adrenal crisis, because the risk persists after surgery, and the family should know whom to call.</p>
  `,
  tip: "Prioritise the emergency: sample briefly, give hydrocortisone, then explain the triphasic sodium story after surgery.",
  sources: ["C14", "C17", "C1"]
},
{
  id: "cc310", domain: "chem-endo", star: true,
  q: "Discuss the use and limitations of the cosyntropin stimulation test in critically ill patients.",
  tags: ["cosyntropin", "critical illness", "adrenal insufficiency", "free cortisol"],
  keypoints: ["cortisol-binding globulin", "free cortisol", "cosyntropin", "peak cortisol 500 nmol/L", "delta cortisol", "adrenal reserve", "pituitary reserve", "hydrocortisone", "etomidate", "vasopressor", "critical illness-related corticosteroid insufficiency", "reassess after recovery"],
  answer: `
    <h4>Why the usual cortisol is misleading</h4>
    <p>Critical illness lowers cortisol-binding globulin and albumin, so total cortisol falls even when free cortisol is adequate. Heparin, etomidate and hypoalbuminaemia further complicate interpretation. Random cortisol values are therefore poor discriminators in sepsis, trauma, liver failure and after cardiac surgery.</p>
    <h4>The cosyntropin test</h4>
    <p>Give 250 µg synthetic ACTH and measure cortisol at 0, 30 and 60 minutes. A peak below about 500 nmol/L, or a rise below 250 nmol/L, is commonly used to define an inadequate response, but thresholds depend on the assay and the clinical setting. Free or salivary cortisol may be more valid when binding proteins are low. The test assesses adrenal reserve, not pituitary reserve, and can be normal soon after pituitary injury.</p>
    <h4>Practical rules</h4>
    <ul>
      <li>Do not delay hydrocortisone for shock to perform the test; draw a baseline sample and treat.</li>
      <li>Document albumin, timing and vasopressor dose with the result.</li>
      <li>Reassess after recovery, because intensive care unit abnormalities are often transient.</li>
      <li>Etomidate suppresses cortisol synthesis; note the dose and timing.</li>
    </ul>
    <p>Critical illness-related corticosteroid insufficiency remains a clinical diagnosis, not a single number.</p>
    <h4>Putting the result in context</h4>
    <p>Adrenal insufficiency in critical illness is uncommon but treatable, and the test must be placed in the clinical context. A low baseline cortisol makes insufficiency likely, while a very high value makes it unlikely; the cosyntropin response adds little when the pretest probability is extreme. In septic shock, a baseline cortisol below 275 nmol/L or a delta below 250 nmol/L has been used to select patients for hydrocortisone, but trials have not shown a consistent mortality benefit. Mineralocorticoid deficiency is not assessed by cosyntropin, and fludrocortisone is not routinely added in adults with septic shock.</p>
  `,
  tip: "Explain the binding-protein problem first, then give the test thresholds and the rule never to delay treatment.",
  sources: ["C14", "C1"]
}
);
