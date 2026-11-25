/* Clinical Chemistry — part 9: TDM, toxicology, vitamins & trace elements */
window.QBANK.push(
{
  id: "cc91", domain: "chem-tox",
  q: "Discuss salicylate poisoning: pathophysiology, acid-base changes, laboratory monitoring and the indications for haemodialysis.",
  tags: ["salicylate", "aspirin", "mixed acid-base", "dialysis"],
  keypoints: ["uncoupling of oxidative phosphorylation", "respiratory centre stimulation", "early respiratory alkalosis", "later high anion gap metabolic acidosis", "mixed acid-base disorder", "hyperthermia and hyperventilation", "tinnitus and vomiting", "hypoglycaemia and low CSF glucose", "repeat salicylate levels every 2 hours", "Done nomogram unreliable", "acidaemia increases CNS penetration", "urinary alkalinisation with bicarbonate", "maintain potassium for alkalinisation", "haemodialysis for level above 7.2 mmol/L or 100 mg/dL", "dialysis for altered mental state renal failure pulmonary oedema acidosis", "avoid intubation if possible"],
  answer: `
    <h4>Pathophysiology</h4>
    <p>Salicylate <strong>uncouples oxidative phosphorylation</strong> (heat instead of ATP → <strong>hyperthermia</strong>, increased oxygen consumption and lactate), inhibits Krebs cycle enzymes, and <strong>directly stimulates the respiratory centre</strong>. It also impairs glucose use, so brain glucose can be low despite normal blood glucose.</p>
    <h4>Acid–base sequence (a classic mixed disorder)</h4>
    <ol>
      <li><strong>Early respiratory alkalosis</strong> from direct hyperventilation, with compensatory renal bicarbonate loss (and loss of potassium).</li>
      <li><strong>High anion gap metabolic acidosis</strong> from salicylate itself, lactate and ketoacids.</li>
      <li>The typical adult picture is a <strong>mixed respiratory alkalosis and metabolic acidosis</strong> — pH may be near normal, so the diagnosis is missed if only pH is examined. Children acidose earlier. A falling pH is ominous because <strong>acidaemia increases the non-ionised fraction and CNS penetration</strong>.</li>
    </ol>
    <h4>Clinical and laboratory features</h4>
    <p><strong>Tinnitus, vomiting, hyperventilation, sweating, hyperthermia</strong>, agitation then coma; non-cardiogenic pulmonary oedema. Laboratory: salicylate level, blood gases, electrolytes with anion gap, lactate, glucose (<strong>hypoglycaemia</strong> or hyperglycaemia), ketones, urea and creatinine, liver tests, coagulation (hypoprothrombinaemia), and paracetamol level (co-ingestion).</p>
    <h4>Monitoring</h4>
    <ul>
      <li><strong>Repeat salicylate levels every 2 hours</strong> until clearly falling — absorption is erratic, delayed by pylorospasm and enteric coating, and concretions may form.</li>
      <li>The <strong>Done nomogram is unreliable</strong> and should not be used; treat on the clinical picture, acid–base status and trend.</li>
      <li>Monitor pH, potassium and urine pH frequently during treatment.</li>
    </ul>
    <h4>Treatment and dialysis</h4>
    <ul>
      <li>Activated charcoal if early; IV fluids and glucose.</li>
      <li><strong>Urinary alkalinisation with sodium bicarbonate</strong> (target urine pH 7.5–8.5) traps ionised salicylate in the urine and reduces CNS entry — it is essential to <strong>maintain potassium</strong>, otherwise the kidney reabsorbs potassium in exchange for hydrogen ions and the urine cannot be alkalinised.</li>
      <li><strong>Haemodialysis</strong> indications: level above about <strong>7.2 mmol/L (100 mg/dL)</strong> in acute poisoning (lower, ~6.5 mmol/L, in chronic or elderly patients), <strong>altered mental state, cerebral or pulmonary oedema, renal failure, severe acidaemia</strong> (pH &lt;7.2) or failure to respond.</li>
      <li><strong>Avoid intubation if possible</strong> — loss of compensatory hyperventilation causes rapid, often fatal acidosis; if unavoidable, maintain hyperventilation and give bicarbonate.</li>
    </ul>
  `,
  tip: "The mixed respiratory alkalosis plus metabolic acidosis and the danger of intubation are the discriminating points.",
  sources: ["C1", "C2", "C15"]
},
{
  id: "cc92", domain: "chem-tox",
  q: "Discuss the monitoring of antiepileptic drugs and immunosuppressants, with their specific analytical challenges.",
  tags: ["antiepileptics", "immunosuppressants", "free phenytoin", "tacrolimus"],
  keypoints: ["phenytoin protein binding and Sheiner-Tozer correction", "free phenytoin in hypoalbuminaemia and uraemia", "carbamazepine autoinduction and active epoxide metabolite", "valproate hyperammonaemia and saturable binding", "newer agents levetiracetam lamotrigine limited TDM", "pregnancy increases clearance of lamotrigine", "tacrolimus whole blood trough EDTA", "cyclosporine C0 or C2", "LC-MS/MS avoids metabolite cross-reactivity", "mycophenolic acid AUC", "sirolimus and everolimus narrow index", "CYP3A5 genotype affects tacrolimus dose", "drug interactions with azoles and rifampicin", "haematocrit affects whole blood concentration", "sampling exactly before the next dose"],
  answer: `
    <h4>Antiepileptic drugs</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Challenge</th><th>Practice</th></tr>
      <tr><td><strong>Phenytoin</strong></td><td>Zero-order kinetics; ~90% albumin-bound, so total level misleads in <strong>hypoalbuminaemia and uraemia</strong></td><td>Measure <strong>free phenytoin</strong> (target 1–2 mg/L) or correct the total with the <strong>Sheiner–Tozer equation</strong>: C<sub>adj</sub> = C<sub>measured</sub> / (0.2 × albumin[g/dL] + 0.1); use 0.1 instead of 0.2 in renal failure</td></tr>
      <tr><td><strong>Carbamazepine</strong></td><td><strong>Autoinduction</strong> over 2–4 weeks; <strong>active epoxide metabolite</strong> not measured by routine assays</td><td>Re-check after induction settles; measure the epoxide if toxicity with "normal" levels</td></tr>
      <tr><td><strong>Valproate</strong></td><td><strong>Saturable protein binding</strong> (free fraction rises at high levels), <strong>hyperammonaemia</strong> and hepatotoxicity, teratogenic</td><td>Interpret with albumin and ammonia; free valproate where available</td></tr>
      <tr><td>Phenobarbital</td><td>Long half-life, sedation</td><td>Trough level, assess adherence</td></tr>
      <tr><td><strong>Newer agents</strong> (levetiracetam, lamotrigine, topiramate)</td><td>Wider therapeutic index; <strong>limited role for TDM</strong></td><td>Used for adherence, renal impairment, and <strong>pregnancy, which increases clearance of lamotrigine and levetiracetam</strong> substantially — monitor and adjust</td></tr>
    </table></div>
    <h4>Immunosuppressants</h4>
    <ul>
      <li><strong>Tacrolimus</strong>: <strong>whole blood in EDTA</strong> (it partitions into red cells), <strong>trough (C0) sampled immediately before the next dose</strong>; narrow index with nephrotoxicity, neurotoxicity, hyperglycaemia and hyperkalaemia. <strong>CYP3A5 genotype</strong> (expressers need higher doses) and <strong>haematocrit</strong> affect concentrations.</li>
      <li><strong>Cyclosporine</strong>: whole blood <strong>C0 or C2</strong> (2-hour post-dose, better reflects exposure in some protocols).</li>
      <li><strong>Mycophenolic acid</strong>: plasma, with <strong>AUC-based</strong> or limited-sampling strategies; enterohepatic recirculation gives a second peak.</li>
      <li><strong>Sirolimus and everolimus</strong>: whole blood troughs, narrow index.</li>
      <li><strong>LC-MS/MS is preferred</strong> because immunoassays <strong>cross-react with metabolites</strong> (overestimating cyclosporine and tacrolimus, especially in hepatic dysfunction).</li>
      <li><strong>Interactions</strong>: azole antifungals, macrolides, diltiazem and grapefruit raise levels; <strong>rifampicin</strong>, phenytoin and carbamazepine lower them — a major issue when treating TB in transplant patients in the Philippines.</li>
    </ul>
    <p>For all of these, the request must state the dose, the time of the last dose and the sampling time; a level without timing cannot be interpreted.</p>
  `,
  tip: "Write the Sheiner–Tozer equation and say tacrolimus is whole blood, not serum.",
  sources: ["C1", "C2"]
},
{
  id: "cc93", domain: "chem-tox",
  q: "Discuss ethanol and other alcohol-related laboratory markers, including markers of chronic alcohol use and their interpretation.",
  tags: ["ethanol", "CDT", "EtG", "alcohol markers"],
  keypoints: ["enzymatic alcohol dehydrogenase method", "headspace gas chromatography reference", "serum versus whole blood difference", "do not use alcohol swab for sampling", "osmolal gap estimates ethanol", "GGT sensitivity and non-specificity", "MCV raised", "AST ALT ratio above 2", "carbohydrate-deficient transferrin specific for heavy sustained use", "CDT false positives in genetic transferrin variants", "ethyl glucuronide detects recent use for up to 80 hours", "ethyl sulfate", "phosphatidylethanol in blood up to 4 weeks", "hair EtG for months", "combination of markers improves accuracy", "incidental ethanol exposure causes low level EtG"],
  answer: `
    <h4>Measuring ethanol</h4>
    <ul>
      <li><strong>Enzymatic method</strong>: <strong>alcohol dehydrogenase</strong> converts ethanol to acetaldehyde with NAD⁺ → NADH at 340 nm. Fast and automated, but other alcohols (isopropanol slightly) may interfere.</li>
      <li><strong>Headspace gas chromatography</strong> is the reference and the medico-legal method, since it separates methanol, isopropanol and acetone.</li>
      <li>Pre-analytical: <strong>do not use an alcohol swab</strong> for skin preparation in medico-legal sampling; use sodium fluoride tubes to prevent microbial production or loss; note that <strong>serum/plasma concentrations are about 10–15% higher than whole blood</strong> (water content), which matters legally.</li>
      <li><strong>The osmolal gap</strong> can estimate ethanol: each 100 mg/dL (~22 mmol/L) of ethanol raises osmolality by about 22 mOsm/kg — useful in suspected toxic alcohol ingestion to see whether ethanol explains the whole gap.</li>
    </ul>
    <h4>Markers of chronic alcohol use</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Window</th><th>Comment</th></tr>
      <tr><td><strong>GGT</strong></td><td>Weeks</td><td>Sensitive but <strong>non-specific</strong> — enzyme induction, obesity, MASLD, drugs, biliary disease</td></tr>
      <tr><td><strong>MCV</strong></td><td>Months (red cell lifespan)</td><td>Also B12/folate deficiency, hypothyroidism, marrow disease</td></tr>
      <tr><td><strong>AST:ALT &gt;2</strong></td><td>—</td><td>Suggests alcoholic liver disease (B6-dependent ALT falls)</td></tr>
      <tr><td><strong>Carbohydrate-deficient transferrin (CDT)</strong></td><td>2–4 weeks</td><td>More <strong>specific for heavy sustained intake</strong> (&gt;50–60 g/day for ≥2 weeks); <strong>false positives with genetic transferrin variants</strong>, advanced liver disease and CDG syndromes; measured by HPLC or capillary electrophoresis as %disialotransferrin</td></tr>
      <tr><td><strong>Ethyl glucuronide (EtG)</strong> and <strong>ethyl sulfate</strong></td><td>Urine: <strong>up to 80 hours</strong></td><td>Direct metabolites — prove recent drinking; <strong>incidental exposure</strong> (mouthwash, hand sanitiser, some foods) can give low positives, so cut-offs (e.g. 500 ng/mL) matter</td></tr>
      <tr><td><strong>Phosphatidylethanol (PEth)</strong></td><td>Blood: <strong>up to 3–4 weeks</strong></td><td>Highly specific and sensitive for recent sustained drinking; increasingly the marker of choice</td></tr>
      <tr><td>Hair EtG</td><td><strong>Months</strong></td><td>Segmental analysis for abstinence monitoring; affected by cosmetic treatment</td></tr>
    </table></div>
    <p><strong>Combining markers</strong> (e.g. GGT plus CDT, or PEth plus EtG) improves accuracy. Applications include liver transplant assessment, workplace and driving-licence programmes, pregnancy and the monitoring of treatment. Results must be reported with their window of detection and limitations, because they carry significant legal and employment consequences.</p>
  `,
  tip: "Match each marker to its detection window; PEth and EtG are the modern, specific ones.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc94", domain: "chem-tox",
  q: "Discuss newborn screening by tandem mass spectrometry: principles, the conditions detected, and the handling of positive results, with reference to the Philippine programme.",
  tags: ["newborn screening", "tandem MS", "RA 9288", "dried blood spot"],
  keypoints: ["dried blood spot heel prick 24 to 72 hours", "RA 9288 Newborn Screening Act 2004", "expanded panel since 2014", "tandem mass spectrometry multiplexing", "amino acids and acylcarnitines", "MS/MS detects fatty acid oxidation organic acid urea cycle disorders", "phenylketonuria phenylalanine", "MCAD C8 acylcarnitine", "congenital hypothyroidism TSH", "CAH 17-hydroxyprogesterone", "G6PD deficiency", "galactosaemia total galactose", "maple syrup urine disease leucine", "haemoglobinopathies", "cut-offs balance sensitivity and false positives", "prematurity TPN transfusion cause false results", "immediate recall and confirmatory testing", "screening is not diagnostic"],
  answer: `
    <h4>Principles</h4>
    <p>A <strong>heel-prick dried blood spot</strong> is collected at <strong>24–72 hours</strong> of age (after feeding has begun), air-dried and sent to a screening centre. <strong>Tandem mass spectrometry (MS/MS)</strong> allows <strong>multiplexing</strong>: from one spot, dozens of <strong>amino acids and acylcarnitines</strong> are measured in minutes by selecting parent and daughter ions, with stable isotope internal standards. Some conditions still need separate assays (TSH, 17-OHP, enzyme activity, haemoglobin electrophoresis or HPLC).</p>
    <h4>Philippine programme</h4>
    <p>Under <strong>RA 9288 (Newborn Screening Act of 2004)</strong>, screening is offered to every newborn, coordinated by the DOH Newborn Screening Reference Center with regional centres. The original panel covered six conditions; the <strong>expanded panel (since 2014)</strong> covers around 29 disorders, including:</p>
    <ul>
      <li><strong>Congenital hypothyroidism (TSH)</strong> — the commonest detected disorder and a preventable cause of intellectual disability.</li>
      <li><strong>Congenital adrenal hyperplasia (17-hydroxyprogesterone)</strong> — prevents salt-wasting crisis and incorrect sex assignment.</li>
      <li><strong>G6PD deficiency</strong> — very common in Filipinos; prevents drug- and food-induced haemolysis.</li>
      <li><strong>Galactosaemia</strong> (total galactose/GALT) and <strong>phenylketonuria (phenylalanine)</strong>.</li>
      <li><strong>Maple syrup urine disease (leucine)</strong>, other aminoacidopathies, <strong>organic acidaemias</strong>, <strong>fatty acid oxidation defects</strong> such as <strong>MCAD deficiency (raised C8 acylcarnitine)</strong>, <strong>urea cycle disorders</strong>, biotinidase deficiency, cystic fibrosis (IRT) and <strong>haemoglobinopathies</strong>.</li>
    </ul>
    <h4>Cut-offs and false results</h4>
    <p>Cut-offs <strong>balance sensitivity against false positives</strong>; second-tier tests (e.g. acylcarnitine ratios, steroid profiling by LC-MS/MS) reduce recalls. Common causes of false results: <strong>prematurity and low birth weight, parenteral nutrition, recent transfusion</strong> (invalidates galactosaemia and haemoglobin screening), sampling before 24 hours or after transfusion, maternal drugs and thyroid disease, insufficient or layered blood spots, and heat or humidity during transport — important in Philippine conditions.</p>
    <h4>Handling a positive screen</h4>
    <ol>
      <li><strong>Screening is not diagnostic.</strong> Report as "screen positive" and classify urgency.</li>
      <li><strong>Immediate recall</strong> of the baby for clinical assessment — some conditions (CAH, MSUD, urea cycle, galactosaemia, MCAD) can be fatal within days, so the laboratory must have a working emergency contact pathway and documented notification.</li>
      <li><strong>Confirmatory testing</strong>: plasma amino acids, urine organic acids, acylcarnitine profile, enzyme assay, hormone measurement or genetic testing, with referral to a newborn screening continuity clinic.</li>
      <li>Start empirical treatment while awaiting confirmation when the condition is time-critical.</li>
      <li>Counsel the family, explain the possibility of a false positive, and record the outcome for programme quality indicators (coverage, recall rate, positive predictive value, time to treatment).</li>
    </ol>
  `,
  tip: "Name RA 9288 and the local priorities (hypothyroidism, CAH, G6PD) and stress that a positive screen is not a diagnosis.",
  sources: ["C1", "C3", "C13"]
},
{
  id: "cc95", domain: "chem-tox",
  q: "Discuss the laboratory assessment of vitamin status: fat-soluble and water-soluble vitamins, and the pitfalls of measurement.",
  tags: ["vitamins", "deficiency", "functional tests", "measurement"],
  keypoints: ["fat soluble A D E K", "retinol affected by RBP and inflammation", "vitamin E to lipid ratio", "vitamin K assessed by PT or undercarboxylated osteocalcin PIVKA-II", "thiamine as whole blood thiamine diphosphate", "erythrocyte transketolase functional test", "riboflavin glutathione reductase activation coefficient", "B6 as plasma pyridoxal-5-phosphate", "niacin urinary metabolites", "vitamin C plasma unstable needs metaphosphoric acid", "folate and B12 with functional markers homocysteine and MMA", "inflammation lowers many micronutrient levels", "measure CRP alongside", "protect light-sensitive vitamins", "do not supplement before sampling", "water-soluble vitamins have short half-lives"],
  answer: `
    <h4>General principles</h4>
    <p>Three ideas govern vitamin testing: (1) many circulating levels fall in <strong>inflammation</strong> regardless of stores, so <strong>measure CRP alongside</strong>; (2) <strong>functional markers</strong> are often better than concentrations; (3) pre-analytical handling matters — several vitamins are <strong>light-sensitive or unstable</strong>, and <strong>sampling must precede supplementation</strong>.</p>
    <h4>Fat-soluble vitamins</h4>
    <div class="table-wrap"><table>
      <tr><th>Vitamin</th><th>Test</th><th>Pitfall</th></tr>
      <tr><td><strong>A</strong></td><td>Plasma retinol (HPLC/LC-MS/MS)</td><td>Depends on <strong>retinol-binding protein</strong>; falls in inflammation, protein deficiency and zinc deficiency; liver stores maintain levels until severe depletion</td></tr>
      <tr><td><strong>D</strong></td><td>25-hydroxyvitamin D</td><td>Assay standardisation (VDSP); see dedicated question</td></tr>
      <tr><td><strong>E</strong></td><td>α-Tocopherol, expressed as the <strong>vitamin E : total lipid (or cholesterol) ratio</strong></td><td>Lipid-dependent — a raw value misleads in hyperlipidaemia or abetalipoproteinaemia</td></tr>
      <tr><td><strong>K</strong></td><td>Assessed <strong>functionally by PT/INR</strong>, or by <strong>undercarboxylated osteocalcin / PIVKA-II</strong></td><td>Direct measurement rarely available and poorly reflective; INR also changes with liver disease and warfarin</td></tr>
    </table></div>
    <h4>Water-soluble vitamins</h4>
    <div class="table-wrap"><table>
      <tr><th>Vitamin</th><th>Test</th><th>Comment</th></tr>
      <tr><td><strong>B1 (thiamine)</strong></td><td><strong>Whole blood thiamine diphosphate</strong> by LC-MS/MS; functional <strong>erythrocyte transketolase activation</strong></td><td>Use EDTA whole blood, protect from light, send on ice; give thiamine before glucose in suspected deficiency (Wernicke)</td></tr>
      <tr><td><strong>B2 (riboflavin)</strong></td><td><strong>Erythrocyte glutathione reductase activation coefficient</strong></td><td>Functional test; raised coefficient indicates deficiency</td></tr>
      <tr><td><strong>B6</strong></td><td><strong>Plasma pyridoxal-5-phosphate</strong></td><td>Low in alcoholism, renal failure, isoniazid therapy; toxicity causes neuropathy</td></tr>
      <tr><td><strong>B3 (niacin)</strong></td><td><strong>Urinary N-methylnicotinamide</strong> and 2-pyridone</td><td>Plasma levels unhelpful; pellagra is clinical</td></tr>
      <tr><td><strong>B9, B12</strong></td><td>Serum/red cell folate, B12, holotranscobalamin</td><td>Confirm with <strong>homocysteine and methylmalonic acid</strong> (functional markers)</td></tr>
      <tr><td><strong>C</strong></td><td>Plasma ascorbate</td><td><strong>Very unstable</strong> — stabilise with <strong>metaphosphoric acid</strong>, keep cold and dark, analyse promptly; leukocyte ascorbate reflects stores better</td></tr>
    </table></div>
    <h4>When to test</h4>
    <p>Malabsorption, bariatric surgery, alcohol dependence, prolonged parenteral nutrition, restrictive diets, pregnancy, the elderly, refeeding, and unexplained anaemia or neuropathy. Because <strong>water-soluble vitamins have short half-lives</strong> and reflect recent intake, a single normal result does not exclude tissue depletion; and in acutely ill patients it is often appropriate to treat empirically (e.g. thiamine) rather than wait for a level.</p>
  `,
  tip: "Name the functional tests (transketolase, glutathione reductase, MMA) and the vitamin E:lipid ratio.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc96", domain: "chem-tox",
  q: "Discuss the role of the clinical chemistry laboratory in critical care: blood gases, lactate, co-oximetry, critical values and near-patient testing.",
  tags: ["critical care", "blood gas", "lactate", "critical values"],
  keypoints: ["pre-analytical for blood gas syringe heparin no air bubbles", "analyse within 15 minutes or on ice", "air bubbles raise pO2 lower pCO2", "temperature correction", "lactate clearance as resuscitation target", "lactate above 2 mmol/L in sepsis definition", "arterial versus venous lactate", "delayed separation raises lactate", "co-oximetry for COHb and MetHb", "ionised calcium in massive transfusion", "critical value list agreed with clinicians", "documented read-back notification", "turnaround time targets", "point-of-care blood gas and electrolytes in ICU", "glucose meters inaccurate in shock", "correlation with central laboratory"],
  answer: `
    <h4>Blood gases — pre-analytical rules</h4>
    <ul>
      <li>Collect in a <strong>heparinised syringe</strong> (balanced, lyophilised heparin — excess liquid heparin dilutes and lowers pCO₂ and ionised calcium), <strong>expel all air bubbles</strong> (<strong>air raises pO₂ and lowers pCO₂</strong>), cap immediately and mix.</li>
      <li><strong>Analyse within 15 minutes</strong> at room temperature, or place in iced water for longer delays — ongoing glycolysis lowers pH and glucose and raises lactate (worse with leukocytosis).</li>
      <li>Record the patient's temperature and FiO₂; <strong>temperature correction</strong> is applied for hypothermia or fever.</li>
      <li>Avoid heparin-induced clot and ensure arterial (not venous) sampling when oxygenation is the question — venous samples remain valid for pH, pCO₂ (slightly higher) and bicarbonate.</li>
    </ul>
    <h4>Lactate</h4>
    <ul>
      <li><strong>Lactate &gt;2 mmol/L</strong> with suspected infection and vasopressor requirement defines septic shock (Sepsis-3), and <strong>lactate clearance</strong> is a resuscitation target in the Surviving Sepsis Campaign.</li>
      <li><strong>Arterial and venous lactate</strong> correlate well enough for screening; venous is acceptable for triage.</li>
      <li><strong>Delayed separation or a tourniquet raises lactate</strong> falsely — use fluoride–oxalate or analyse on a blood gas analyser promptly.</li>
      <li>Interpret with the clinical picture: lactate also rises with adrenaline, metformin, liver failure, seizures and thiamine deficiency without tissue hypoxia.</li>
    </ul>
    <h4>Co-oximetry and other critical measurements</h4>
    <p><strong>Co-oximetry</strong> measures <strong>COHb and MetHb</strong>, which pulse oximetry misses. <strong>Ionised calcium</strong> is essential in massive transfusion (citrate chelation), cardiac surgery and renal replacement therapy; potassium and glucose from the same sample guide immediate treatment.</p>
    <h4>Critical values</h4>
    <ul>
      <li>Maintain a <strong>critical value list agreed with clinicians</strong> (e.g. K &lt;2.8 or &gt;6.0 mmol/L, Na &lt;120 or &gt;155, glucose &lt;2.5 or &gt;25, calcium, magnesium, troponin, lactate, and positive blood cultures).</li>
      <li><strong>Documented notification with read-back</strong> of the result and the recipient's name and time — an ISO 15189 and patient-safety requirement.</li>
      <li>Monitor <strong>turnaround time</strong> against agreed targets (e.g. &lt;30–60 min for critical care tests) and audit notification compliance.</li>
    </ul>
    <h4>Near-patient testing in the ICU</h4>
    <p><strong>Point-of-care blood gas, electrolyte, lactate, glucose and coagulation</strong> testing shortens decision time, but needs laboratory governance: operator certification, QC and EQA, documented maintenance, <strong>periodic correlation with the central laboratory</strong>, and connectivity so results enter the record. A specific warning: <strong>glucose meters are inaccurate in shock</strong>, hypoperfusion, severe anaemia or polycythaemia and with high oxygen tension — confirm critical glucose values on a blood gas analyser or in the laboratory.</p>
  `,
  tip: "The pre-analytical rules (air bubbles, 15 minutes) and the read-back requirement for critical values are the marks here.",
  sources: ["C1", "C11", "C2"]
}
);
