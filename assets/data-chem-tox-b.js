/* Clinical Chemistry — part 10: applied TDM, toxicology, vitamins & trace elements */
window.QBANK.push(
{
  id: "cc223", domain: "chem-tox", star: true,
  q: "Discuss AUC-guided monitoring of vancomycin: the rationale, the practical estimation of exposure, and the confounders that affect interpretation.",
  tags: ["vancomycin", "AUC", "MRSA", "nephrotoxicity"],
  keypoints: ["time-dependent, concentration-independent", "AUC/MIC 400–600", "trough concentrations correlate only loosely with AUC", "Bayesian forecasting", "two concentrations at steady state", "exact dose times", "sampling times", "dominant determinant of clearance", "augmented renal clearance", "obesity, critical illness, burns", "hypoalbuminaemia", "serum or plasma", "MRSA bacteraemia", "less nephrotoxicity", "serum creatinine", "concurrent nephrotoxins"],
  answer: `
    <h4>Why AUC-guided dosing replaced trough-only monitoring</h4>
    <p>Vancomycin is a <strong>time-dependent, concentration-independent</strong> killer, so exposure is best described by the <strong>24-hour area under the curve (AUC<sub>0–24</sub>)</strong> relative to the <strong>MIC</strong>. <strong>Trough concentrations correlate only loosely with AUC</strong> and are a poor surrogate when the MIC is high or the volume of distribution is abnormal, so trough-only targets produce both under- and over-exposure. The 2020 consensus guideline favours <strong>AUC/MIC 400–600</strong> for serious MRSA infection, with troughs retained mainly as a safety check.</p>
    <h4>How the AUC is obtained</h4>
    <ul>
      <li><strong>Bayesian forecasting</strong>: two concentrations at steady state (a post-distributional peak and a trough), with the dose history and patient covariates, are fitted to a population model; the AUC is estimated and a new regimen proposed.</li>
      <li><strong>First-order equations</strong> using a peak and trough, or a limited-sampling strategy validated locally.</li>
      <li><strong>Timing</strong>: samples must be taken after several doses have established steady state, with the <strong>exact dose times</strong>, infusion duration and <strong>sampling times</strong> recorded — otherwise the estimate is invalid.</li>
    </ul>
    <h4>Interpretation and confounders</h4>
    <p><strong>Renal function</strong> is the <strong>dominant determinant of clearance</strong>, so AUC rises steeply as creatinine clearance falls. <strong>Augmented renal clearance</strong> in young, septic patients does the opposite. <strong>Obesity, critical illness, burns</strong> and sepsis increase volume of distribution; <strong>hypoalbuminaemia</strong> and renal replacement therapy alter the relationship between total concentration and exposure. The drug is measured in <strong>serum or plasma</strong>, not whole blood, and total concentrations are reported.</p>
    <h4>Clinical use</h4>
    <p>For <strong>MRSA bacteraemia</strong>, endocarditis, osteomyelitis and CNS infection, AUC-guided dosing reaches target exposure with <strong>less nephrotoxicity</strong> than high troughs. The laboratory should report the AUC, its assumptions, the dose and the timing, and flag values outside the therapeutic range. Monitoring <strong>serum creatinine</strong> and <strong>concurrent nephrotoxins</strong> such as piperacillin–tazobactam, aminoglycosides and contrast remains essential, because toxicity is multifactorial and a therapeutic AUC does not guarantee safety.</p>
  `,
  tip: "Lead with AUC/MIC 400–600, then explain that trough alone misclassifies patients with abnormal volume of distribution.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc224", domain: "chem-tox", star: true,
  q: "Discuss the therapeutic monitoring of aminoglycosides: exposure–response relationships, extended-interval dosing, sampling strategy and toxicity in special populations.",
  tags: ["aminoglycosides", "extended-interval", "nephrotoxicity", "ototoxicity"],
  keypoints: ["concentration-dependently", "post-antibiotic effect", "cumulative exposure", "adaptive resistance", "endocarditis", "peak about 30 minutes after the end of the infusion", "trough immediately before the next dose", "nomogram or Bayesian model", "dose, infusion time and sampling time", "non-oliguric", "high-frequency hearing loss", "cystic fibrosis and burns", "adjusted body weight", "renal impairment", "neuromuscular blockade"],
  answer: `
    <h4>Concentration-dependent killing</h4>
    <p>Aminoglycosides kill <strong>concentration-dependently</strong>: the higher the peak relative to the MIC, the faster and more complete the bactericidal effect, and the longer the <strong>post-antibiotic effect</strong> that suppresses regrowth. Efficacy therefore tracks the <strong>C<sub>max</sub>/MIC</strong> and AUC/MIC rather than time above MIC. Toxicity follows <strong>cumulative exposure</strong> and sustained trough concentrations, because uptake into cochlear hair cells and proximal tubular cells is saturable and cumulative.</p>
    <h4>Why extended-interval dosing works</h4>
    <p>A single large daily exposure produces a high peak and a long drug-free interval. The peak maximises killing, while the low trough lets <strong>adaptive resistance</strong> subside and limits renal cortical accumulation. Extended-interval regimens are at least as effective and less nephrotoxic than multiple daily dosing in most patients, and are unsuitable mainly in <strong>endocarditis</strong>, where sustained exposure with a beta-lactam is wanted, and in some neonates.</p>
    <h4>Monitoring strategy</h4>
    <ul>
      <li><strong>Conventional dosing</strong>: measure a <strong>peak about 30 minutes after the end of the infusion</strong> and a <strong>trough immediately before the next dose</strong>.</li>
      <li><strong>Extended-interval dosing</strong>: in stable patients a single level drawn several hours after the dose, interpreted with a <strong>nomogram or Bayesian model</strong>, is sufficient; a trough before the next dose confirms adequate clearance.</li>
      <li>Always record the <strong>dose, infusion time and sampling time</strong>; a level without them cannot be interpreted.</li>
    </ul>
    <h4>Toxicity and special populations</h4>
    <p><strong>Nephrotoxicity</strong> is <strong>non-oliguric</strong>, usually reversible, and worsened by hypovolaemia and concurrent vancomycin, amphotericin or contrast. <strong>Ototoxicity</strong> is often irreversible and may present as <strong>high-frequency hearing loss</strong> or vestibular symptoms. Monitor creatinine every few days. Patients with <strong>cystic fibrosis and burns</strong> clear the drug rapidly and may need greater exposure; obesity requires an <strong>adjusted body weight</strong>; <strong>renal impairment</strong> demands longer intervals rather than smaller peaks. <strong>Neuromuscular blockade</strong> is a rare toxicity, especially in myasthenia gravis.</p>
  `,
  tip: "Contrast peak-driven efficacy with trough- and time-driven toxicity — that contrast explains once-daily dosing.",
  sources: ["C1", "C2"]
},
{
  id: "cc225", domain: "chem-tox", star: true,
  q: "Discuss digoxin monitoring: sampling time, therapeutic targets, assay interferences and the laboratory issues around antidote therapy.",
  tags: ["digoxin", "DLIS", "Fab fragments", "TDM"],
  keypoints: ["distribution phase", "at least 6–8 hours after the dose", "steady state", "cleared unchanged by the kidney", "roughly 0.5–0.9 ng/mL", "hypokalaemia", "hypomagnesaemia", "hypercalcaemia", "Digoxin-like immunoreactive substances", "renal and hepatic failure, pregnancy, neonates", "LC-MS/MS", "Digoxin immune Fab", "total digoxin immunoassays read very high", "free concentration"],
  answer: `
    <h4>Pharmacokinetics and the sampling rule</h4>
    <p>Digoxin has a large volume of distribution and a slow <strong>distribution phase</strong>, so a sample drawn soon after a dose reflects redistributing drug rather than tissue equilibrium and reads falsely high. Levels are therefore taken <strong>at least 6–8 hours after the dose</strong>, and only once <strong>steady state</strong> is reached, which takes about a week in normal renal function. Digoxin is <strong>cleared unchanged by the kidney</strong>, so renal impairment prolongs the half-life and raises concentrations.</p>
    <h4>Targets and interpretation</h4>
    <p>The therapeutic window is narrow. In heart failure the target is <strong>roughly 0.5–0.9 ng/mL</strong>, because higher levels add toxicity without benefit; in atrial fibrillation higher concentrations may be accepted for rate control. The level must be read with potassium, magnesium, calcium and renal function: <strong>hypokalaemia</strong>, <strong>hypomagnesaemia</strong> and <strong>hypercalcaemia</strong> all potentiate toxicity at any concentration, as do hypoxia and myocardial ischaemia.</p>
    <h4>Interferences and pitfalls</h4>
    <ul>
      <li><strong>Digoxin-like immunoreactive substances</strong> cross-react in immunoassays and cause falsely high results in <strong>renal and hepatic failure, pregnancy, neonates</strong> and pre-eclampsia. Confirm with a different platform or <strong>LC-MS/MS</strong> when a result is unexpected.</li>
      <li><strong>Drug interactions</strong>: amiodarone, verapamil, quinidine and spironolactone raise concentrations, while diuretics cause the hypokalaemia that precipitates toxicity.</li>
      <li>Metabolite cross-reactivity makes results method-dependent, so serial samples should use the same assay.</li>
    </ul>
    <h4>Toxicity and Fab fragments</h4>
    <p>Toxicity presents with nausea, visual disturbance, confusion, bradyarrhythmias and ventricular arrhythmias. <strong>Digoxin immune Fab</strong> is indicated for life-threatening arrhythmia, hyperkalaemia or a large ingestion. After Fab is given, <strong>total digoxin immunoassays read very high</strong> because they measure Fab-bound drug; the <strong>free concentration</strong> is what matters, so interpret the result with the laboratory and the antidote dose. Potassium falls as toxicity reverses, so monitor it closely.</p>
  `,
  tip: "State the 6–8 hour rule and DLIS first; examiners use both to separate memorisers from interpreters.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc226", domain: "chem-tox", star: true,
  q: "Discuss lithium monitoring in clinical chemistry: the need for standardised sampling, targets, toxicity risk factors and long-term laboratory surveillance.",
  tags: ["lithium", "TDM", "nephrogenic diabetes insipidus", "haemodialysis"],
  keypoints: ["narrow therapeutic index", "eliminated almost entirely by the kidney", "12 hours after the last dose", "lithium heparin", "steady state", "0.6–0.8 mmol/L", "1.5 mmol/L", "fine tremor", "coarse tremor", "thiazide diuretics, NSAIDs, ACE inhibitors", "Nephrogenic diabetes insipidus", "hyperparathyroidism with hypercalcaemia", "haemodialysis", "levels must be repeated after dialysis"],
  answer: `
    <h4>Why lithium needs TDM</h4>
    <p>Lithium is a <strong>narrow therapeutic index</strong> cation <strong>eliminated almost entirely by the kidney</strong>, with no protein binding and no metabolism. Concentrations therefore rise predictably with reduced glomerular filtration, dehydration and sodium depletion, and toxicity can develop within days of an intercurrent illness. TDM is mandatory at initiation, after dose changes, at relapse, in pregnancy and during any illness that disturbs fluid balance.</p>
    <h4>Standardised sampling</h4>
    <ul>
      <li>Take blood <strong>12 hours after the last dose</strong>, a standardised trough that makes results comparable between visits.</li>
      <li>Use a plain or gel serum tube; never a <strong>lithium heparin</strong> tube, which contaminates the sample and falsely raises the result.</li>
      <li>Wait for <strong>steady state</strong>, about five days, after starting or changing the dose.</li>
      <li>Record the dose and the exact sampling time; a random level cannot be interpreted.</li>
    </ul>
    <h4>Targets and toxicity</h4>
    <p>Maintenance concentrations around <strong>0.6–0.8 mmol/L</strong> control most patients, with higher values reserved briefly for acute mania; toxicity becomes common above about <strong>1.5 mmol/L</strong>. Early features are <strong>fine tremor</strong>, nausea, diarrhoea and polyuria; later there is <strong>coarse tremor</strong>, ataxia, dysarthria, confusion, seizures and coma. Risk factors include <strong>thiazide diuretics, NSAIDs, ACE inhibitors</strong>, dehydration, a low-salt diet, older age and chronic kidney disease.</p>
    <h4>Long-term surveillance and severe toxicity</h4>
    <p><strong>Nephrogenic diabetes insipidus</strong>, hypothyroidism and <strong>hyperparathyroidism with hypercalcaemia</strong> are chronic effects, so check creatinine, electrolytes, TSH and calcium at baseline and periodically. In severe toxicity, <strong>haemodialysis</strong> removes lithium effectively; because lithium redistributes, <strong>levels must be repeated after dialysis</strong> and dialysis repeated if they rebound. Pregnancy needs specialist dose reduction, since lithium is associated with cardiac malformations.</p>
  `,
  tip: "The lithium heparin tube and the 12-hour standardised sample are the two marks that are easy to lose.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc227", domain: "chem-tox", star: true,
  q: "Discuss therapeutic drug monitoring of biologic agents, using anti-TNF therapy as the model: rationale, analytes, interpretation and clinical application.",
  tags: ["biologics", "anti-TNF", "anti-drug antibodies", "personalised dosing"],
  keypoints: ["target-mediated drug disposition", "inflammatory burden", "trough concentration", "anti-drug antibodies", "immune complexes", "drug-sensitive versus drug-tolerant", "not interchangeable between assays", "secondary loss of response", "Mechanistic failure", "de-escalation", "Combination with an immunomodulator", "ustekinumab and vedolizumab"],
  answer: `
    <h4>Rationale</h4>
    <p>Monoclonal antibodies against tumour necrosis factor (infliximab, adalimumab, certolizumab) are large proteins with <strong>target-mediated drug disposition</strong>: drug binds soluble and membrane-bound TNF, is internalised and degraded, so clearance depends on the <strong>inflammatory burden</strong>. A patient with active inflammation clears drug faster and may fall below the exposure needed for response. Measuring a <strong>trough concentration</strong> with <strong>anti-drug antibodies</strong> separates pharmacokinetic failure from mechanistic failure.</p>
    <h4>Analytes and assays</h4>
    <ul>
      <li><strong>Trough concentration</strong>, drawn immediately before the next dose at steady state; a low trough predicts loss of response and future immunogenicity.</li>
      <li><strong>Anti-drug antibodies</strong>: neutralising antibodies form <strong>immune complexes</strong>, accelerate clearance and cause infusion reactions, and may be transient.</li>
      <li>Assays include ELISA, with <strong>drug-sensitive versus drug-tolerant</strong> formats for antibodies, homogeneous mobility shift assays and LC-MS/MS for the drug. Results are <strong>not interchangeable between assays</strong>, so serial monitoring should use one platform.</li>
    </ul>
    <h4>Interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Meaning</th><th>Action</th></tr>
      <tr><td>Low trough, antibodies negative</td><td>Under-exposure, high inflammatory burden, non-adherence</td><td>Increase dose or shorten the interval</td></tr>
      <tr><td>Low trough, antibodies positive</td><td>Immunogenicity with rapid clearance</td><td>Switch within class or to another mechanism; consider an immunomodulator</td></tr>
      <tr><td>Therapeutic trough, active disease</td><td><strong>Mechanistic failure</strong></td><td>Change the target, not the dose</td></tr>
    </table></div>
    <h4>Clinical application</h4>
    <p>TDM is best used in <strong>secondary loss of response</strong> and to guide <strong>de-escalation</strong> in sustained remission, including pregnancy planning. <strong>Combination with an immunomodulator</strong> reduces antibody formation and raises troughs. Evidence is less mature for <strong>ustekinumab and vedolizumab</strong>, and monitoring is not routine for rituximab. Requests should state the drug, dose, interval and sampling time, and results should be interpreted by a multidisciplinary team.</p>
  `,
  tip: "Draw the trough-versus-antibody table: it answers the clinical question of dose escalation versus switching.",
  sources: ["C1", "C2"]
},
{
  id: "cc228", domain: "chem-tox", star: true,
  q: "Discuss paracetamol (acetaminophen) poisoning: mechanism, laboratory features, the nomogram and its limitations, and monitoring during antidote therapy.",
  tags: ["paracetamol", "NAPQI", "Rumack–Matthew", "acetylcysteine"],
  keypoints: ["glucuronidation", "sulfation", "saturate", "CYP2E1", "NAPQI", "glutathione", "centrilobular necrosis", "transaminases may be normal", "Rumack–Matthew nomogram", "4 hours", "not valid", "staggered, repeated supratherapeutic or chronic", "N-acetylcysteine", "Liver transplantation"],
  answer: `
    <h4>Mechanism of injury</h4>
    <p>At therapeutic doses, paracetamol is conjugated by <strong>glucuronidation</strong> and <strong>sulfation</strong> and excreted. In overdose these pathways <strong>saturate</strong>, and more drug is diverted to <strong>CYP2E1</strong>, producing the reactive metabolite <strong>NAPQI</strong>. NAPQI is normally detoxified by <strong>glutathione</strong>; once glutathione falls below a critical fraction, NAPQI binds hepatocellular proteins and causes <strong>centrilobular necrosis</strong>. Alcohol induction, fasting, malnutrition and chronic therapeutic excess deplete glutathione and lower the threshold for injury.</p>
    <h4>Clinical course and laboratory findings</h4>
    <ul>
      <li><strong>First 24 hours</strong>: often asymptomatic or non-specific nausea and malaise; <strong>transaminases may be normal</strong>, so a normal early panel does not exclude serious poisoning.</li>
      <li><strong>24–72 hours</strong>: rising ALT and AST, then INR, bilirubin, ammonia and lactate; renal failure and pancreatitis may follow.</li>
      <li><strong>Massive ingestion</strong>: metabolic acidosis, coma and rapid hepatic failure without the usual latency.</li>
      <li>Always check salicylate, glucose, electrolytes, creatinine and a pregnancy test, and consider co-ingested opioids or alcohol.</li>
    </ul>
    <h4>The nomogram and its limits</h4>
    <p>The <strong>Rumack–Matthew nomogram</strong> applies to a single acute ingestion with a known time, using a level drawn at least <strong>4 hours</strong> after ingestion. It is <strong>not valid</strong> for <strong>staggered, repeated supratherapeutic or chronic</strong> ingestion, for unknown times, or after activated charcoal has altered absorption. In these situations treat on the history, the dose taken and the ALT, and give the antidote if there is doubt.</p>
    <h4>Antidote and monitoring</h4>
    <p><strong>N-acetylcysteine</strong> replenishes glutathione and is most effective within the first hours, but it still improves outcome when given late, so do not withhold it while waiting for a level. Continue until transaminases and INR are clearly improving. <strong>Liver transplantation</strong> assessment is needed for severe encephalopathy, coagulopathy or acidosis. Monitor INR, creatinine, glucose, phosphate and acid–base status, since hypoglycaemia and cerebral oedema are terminal features.</p>
  `,
  tip: "The nomogram's exclusions — staggered, chronic, unknown time — are the discrimination marks.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc229", domain: "chem-tox", star: true,
  q: "Discuss acute iron poisoning: mechanism, clinical phases, laboratory assessment and the role and hazards of chelation.",
  tags: ["iron", "deferoxamine", "metabolic acidosis", "paediatric poisoning"],
  keypoints: ["corrosive", "free iron", "hydroxyl radical", "latent period", "metabolic acidosis", "transferrin saturation", "peak is variable and correlates poorly", "Abdominal radiograph", "Deferoxamine", "hypotension", "acute respiratory distress syndrome", "vin rosé"],
  answer: `
    <h4>Mechanism and clinical phases</h4>
    <p>Iron salts are directly <strong>corrosive</strong> to the gastrointestinal mucosa and, once absorbed, bypass transferrin and circulate as <strong>free iron</strong>. Free iron catalyses <strong>hydroxyl radical</strong> formation, uncouples oxidative phosphorylation and causes vasodilation, capillary leak, hepatic necrosis and <strong>metabolic acidosis</strong>. The course is described in phases: gastrointestinal irritation and vomiting, a misleading <strong>latent period</strong>, then shock, acidosis, coagulopathy and hepatic failure, followed weeks later by gastric scarring and stricture.</p>
    <h4>Laboratory assessment</h4>
    <ul>
      <li><strong>Serum iron</strong> and total iron-binding capacity with <strong>transferrin saturation</strong>: a raised iron with high saturation supports significant ingestion, but the <strong>peak is variable and correlates poorly</strong> with severity.</li>
      <li>Blood gas, glucose, electrolytes, creatinine, liver enzymes and coagulation.</li>
      <li><strong>Abdominal radiograph</strong> for radio-opaque tablets, which also guides decontamination.</li>
      <li>Full blood count and blood group in case transfusion is needed.</li>
    </ul>
    <h4>Risk stratification</h4>
    <p>Assess the amount ingested, time, formulation and body weight together with symptoms. Vomiting, diarrhoea, abdominal pain, hypotension or acidosis indicate serious toxicity regardless of the iron value. An asymptomatic patient with an uncertain history should be observed with repeated assessment, because the latent phase can mimic recovery.</p>
    <h4>Management and monitoring</h4>
    <p><strong>Deferoxamine</strong> chelates free iron and is indicated for shock, acidosis, severe symptoms or a markedly raised iron. It is infused slowly because rapid administration causes <strong>hypotension</strong>, and prolonged use is associated with <strong>acute respiratory distress syndrome</strong> and Yersinia infection. Urine may turn <strong>vin rosé</strong>, a supportive but not diagnostic sign. Monitor acid–base status, liver and renal function, coagulation and fluid balance, and repeat iron measurements if absorption continues. Whole-bowel irrigation may be considered for large tablet burdens. Iron supplements remain a leading cause of paediatric poisoning deaths, so packaging and storage are public health issues.</p>
  `,
  tip: "Say the serum iron peak correlates poorly with severity — treatment is decided on the clinical picture.",
  sources: ["C1", "C2"]
},
{
  id: "cc230", domain: "chem-tox", star: true,
  q: "Compare mercury and arsenic poisoning: toxic forms, clinical effects, specimen choice and the importance of speciation.",
  tags: ["mercury", "arsenic", "speciation", "heavy metals"],
  keypoints: ["Elemental mercury", "Methylmercury", "skin-lightening creams", "fetal neurodevelopmental damage", "pyruvate dehydrogenase", "Arsine gas", "Arsenobetaine", "speciation", "trace-element-free tubes", "DMPS, DMSA or dimercaprol", "symptomatic inorganic poisoning"],
  answer: `
    <h4>Mercury: three toxic forms</h4>
    <p><strong>Elemental mercury</strong> vapour is absorbed by the lungs and causes tremor, erethism, gingivitis and renal injury. Inorganic salts are corrosive and cause acute tubular necrosis. <strong>Methylmercury</strong> is lipid soluble, crosses the placenta and concentrates in the brain, causing paraesthesia, ataxia, constricted visual fields and <strong>fetal neurodevelopmental damage</strong>. Sources include contaminated fish, <strong>skin-lightening creams</strong>, artisanal gold mining and dental amalgam.</p>
    <h4>Arsenic: inorganic, organic and arsine</h4>
    <p>Inorganic arsenic is the toxic form: trivalent arsenic inhibits <strong>pyruvate dehydrogenase</strong> and causes peripheral neuropathy, hyperpigmentation, palmar keratoses, anaemia and skin cancer. <strong>Arsine gas</strong> causes massive haemolysis and haemoglobinuria. <strong>Arsenobetaine</strong> from seafood is benign and must not be reported as toxic exposure, so <strong>speciation</strong> is essential.</p>
    <h4>Laboratory assessment</h4>
    <div class="table-wrap"><table>
      <tr><th>Analyte</th><th>Specimen</th><th>Use</th></tr>
      <tr><td>Mercury</td><td>Blood</td><td>Recent or acute exposure, methylmercury</td></tr>
      <tr><td>Mercury</td><td>Urine</td><td>Inorganic and elemental chronic exposure</td></tr>
      <tr><td>Mercury</td><td>Hair, nails</td><td>Methylmercury over months; segmental timing</td></tr>
      <tr><td>Arsenic</td><td>Urine with speciation</td><td>Recent exposure; separates toxic species from arsenobetaine</td></tr>
      <tr><td>Arsenic</td><td>Hair, nails</td><td>Chronic exposure; external contamination limits value</td></tr>
    </table></div>
    <h4>Interpretation and treatment</h4>
    <p>Use <strong>trace-element-free tubes</strong>, avoid seafood before urine testing and interpret against the local reference population, because background exposure varies. Chelation with <strong>DMPS, DMSA or dimercaprol</strong> is reserved for <strong>symptomatic inorganic poisoning</strong>; it is not indicated for low-level fish-derived methylmercury, where removal from exposure is the main measure. Monitor renal and hepatic function during treatment, and remember that hair analysis alone cannot establish poisoning. Acute arsine exposure is a transfusion emergency: massive haemolysis causes haemoglobinuria and acute kidney injury, so support urine output and consider exchange transfusion.</p>
  `,
  tip: "Speciation and the benign seafood arsenical are the modern, high-yield points — not just list of symptoms.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc231", domain: "chem-tox", star: true,
  q: "Discuss the toxic alcohols: metabolism, the changing osmolal and anion gaps, laboratory investigation and management principles.",
  tags: ["toxic alcohols", "osmolal gap", "methanol", "ethylene glycol"],
  keypoints: ["alcohol dehydrogenase", "formate", "optic nerve and putamen", "oxalate", "acetone", "osmolal gap", "normal osmolal gap does not exclude", "high anion gap metabolic acidosis", "gas chromatography", "calcium oxalate crystals", "fomepizole", "haemodialysis"],
  answer: `
    <h4>Shared pathophysiology</h4>
    <p>Methanol, ethylene glycol and isopropanol are relatively non-toxic until <strong>alcohol dehydrogenase</strong> converts them to toxic metabolites. Methanol becomes formaldehyde and then <strong>formate</strong>, which inhibits cytochrome oxidase and damages the <strong>optic nerve and putamen</strong>. Ethylene glycol becomes glycolate and <strong>oxalate</strong>, causing acidosis, hypocalcaemia, oxalate nephropathy and cranial nerve deficits. Isopropanol is metabolised to <strong>acetone</strong>, producing ketosis without a marked acidosis.</p>
    <h4>Osmolal and anion gaps</h4>
    <p>Early after ingestion, the parent alcohol raises the <strong>osmolal gap</strong> while the anion gap is still normal. As metabolism proceeds the gap closes and a <strong>high anion gap metabolic acidosis</strong> appears, so a <strong>normal osmolal gap does not exclude</strong> a toxic alcohol. Calculate the gap as measured osmolality minus the calculated osmolality (2 × sodium + glucose + urea); ethanol contributes to it, and a gap above about 10 mOsm/kg suggests an unmeasured osmole.</p>
    <h4>Laboratory work-up</h4>
    <ul>
      <li>Blood gas, electrolytes with anion gap, glucose, urea, creatinine, lactate, calcium, magnesium and <strong>measured</strong> osmolality.</li>
      <li>Ethanol, methanol, ethylene glycol and isopropanol by <strong>gas chromatography</strong>, with a volatile screen when the history is unclear.</li>
      <li>Urine microscopy for <strong>calcium oxalate crystals</strong> and fluorescence under ultraviolet light, which supports ethylene glycol.</li>
      <li>Fundoscopy and neurological assessment for methanol.</li>
    </ul>
    <h4>Management principles</h4>
    <p>Block alcohol dehydrogenase with <strong>fomepizole</strong>, preferred, or ethanol, and give cofactors: folate for methanol, thiamine and pyridoxine for ethylene glycol. Correct acidosis with bicarbonate and use <strong>haemodialysis</strong> for severe acidosis, visual or neurological signs, renal failure or high concentrations. Because the parent alcohol is dialysable and absorption may continue, repeat levels and continue the antidote during dialysis. Do not wait for a confirmatory level before treating a convincing history.</p>
  `,
  tip: "Explain the gap sequence — osmolal gap early, anion gap late — because that timing drives both diagnosis and treatment.",
  sources: ["C1", "C2", "C15"]
},
{
  id: "cc232", domain: "chem-tox", star: true,
  q: "Discuss chelation therapy: principles, the main agents and their metal targets, monitoring, and the hazards of inappropriate use.",
  tags: ["chelation", "dimercaprol", "EDTA", "deferoxamine"],
  keypoints: ["stable, water-soluble complexes", "symptomatic poisoning", "Dimercaprol", "G6PD deficiency", "Succimer", "CaNa2EDTA", "fatal hypocalcaemia", "Penicillamine", "Deferoxamine", "Prussian blue", "essential metals", "rebound"],
  answer: `
    <h4>Principles</h4>
    <p>Chelating agents form <strong>stable, water-soluble complexes</strong> with metal ions and increase urinary or biliary excretion. An effective agent must compete with endogenous ligands, remain extracellular enough to reach the metal store, and be excreted without releasing the metal into the brain. Chelation is indicated for <strong>symptomatic poisoning</strong> or a clearly hazardous body burden, not for vague complaints or low-level exposure, and must be combined with removal from exposure and supportive care.</p>
    <h4>Agents and indications</h4>
    <div class="table-wrap"><table>
      <tr><th>Agent</th><th>Main metals</th><th>Key points</th></tr>
      <tr><td><strong>Dimercaprol</strong></td><td>Arsenic, mercury, lead with EDTA</td><td>Deep intramuscular injection in peanut oil; hypertension and vomiting; avoid in <strong>G6PD deficiency</strong></td></tr>
      <tr><td><strong>Succimer</strong></td><td>Lead, mercury, arsenic</td><td>Oral and better tolerated; first-line for childhood lead</td></tr>
      <tr><td><strong>CaNa<sub>2</sub>EDTA</strong></td><td>Lead</td><td>Never substitute Na<sub>2</sub>EDTA, which causes <strong>fatal hypocalcaemia</strong>; monitor renal function</td></tr>
      <tr><td><strong>Penicillamine</strong></td><td>Copper, lead, mercury</td><td>Wilson disease; proteinuria, cytopenias, allergy</td></tr>
      <tr><td><strong>Deferoxamine</strong></td><td>Iron</td><td>Infusion; hypotension, ARDS, Yersinia infection</td></tr>
      <tr><td><strong>Deferasirox, deferiprone</strong></td><td>Iron, oral</td><td>Thalassaemia overload; renal, hepatic and marrow toxicity</td></tr>
      <tr><td><strong>Prussian blue</strong></td><td>Caesium, thallium</td><td>Binds in the gut and interrupts enterohepatic cycling</td></tr>
    </table></div>
    <h4>Monitoring and hazards</h4>
    <p>Chelation also removes <strong>essential metals</strong>: watch for hypocalcaemia, hypomagnesaemia, and zinc and copper depletion, and for renal and hepatic injury. Give the agent in cycles with breaks, measure the metal during and after treatment to detect <strong>rebound</strong>, and stop when symptoms resolve and levels fall. Adequate hydration and urine output are essential for renally excreted agents.</p>
    <h4>Evidence and caution</h4>
    <p>Evidence is strongest for acute severe poisoning and weakest for chronic low-level exposure, where uncontrolled chelation has caused deaths from hypocalcaemia and has been promoted commercially without proof of benefit. Decisions should involve a clinical toxicologist or poison centre; in the Philippines the National Poison Management and Control Center is the usual reference.</p>
  `,
  tip: "Name the agent–metal pairs and one toxicity each; the CaNa2EDTA versus Na2EDTA distinction is a classic trap.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc233", domain: "chem-tox", star: true,
  q: "Discuss chain of custody and specimen integrity in forensic and workplace drug testing, with reference to Philippine requirements.",
  tags: ["chain of custody", "RA 9165", "forensic toxicology", "specimen integrity"],
  keypoints: ["RA 9165", "accredited by the DOH", "unique specimen number", "witnessed collection", "tamper-evident seal", "split specimen", "name of the releasing and receiving person", "contemporaneous", "confirmed by GC-MS or LC-MS/MS", "broken seals"],
  answer: `
    <h4>Legal and accreditation framework</h4>
    <p>Forensic and workplace drug testing in the Philippines is governed by the Comprehensive Dangerous Drugs Act (<strong>RA 9165</strong>) and its implementing rules, with laboratories <strong>accredited by the DOH</strong>. Medico-legal drug and alcohol results may be used in criminal, employment and child-custody proceedings, so the laboratory must be able to show that the specimen analysed is the specimen collected from the named person, unaltered and unbroken since collection.</p>
    <h4>Collection and packaging</h4>
    <ul>
      <li>Verify identity with a photo ID and record it on the form.</li>
      <li>Use a <strong>unique specimen number</strong> that links the request, container, aliquots and report.</li>
      <li>For urine, perform a <strong>witnessed collection</strong>, check volume and temperature immediately, and seal the container with a <strong>tamper-evident seal</strong> in the donor's presence.</li>
      <li>Collect a <strong>split specimen</strong> so the donor can request retesting of the second aliquot.</li>
      <li>Label in the donor's presence; the label must match the form exactly.</li>
    </ul>
    <h4>The custody record</h4>
    <p>Every transfer must be documented with the <strong>name of the releasing and receiving person</strong>, date, time, purpose and signature, plus the condition of the seal. The record must be <strong>contemporaneous</strong>, legible and free of gaps; a single unexplained break is enough to challenge the result. Store specimens under locked, access-controlled refrigeration with temperature monitoring, and keep the retention period defined by regulation and local policy.</p>
    <h4>Analysis and reporting</h4>
    <p>Screening is by immunoassay, and any non-negative result must be <strong>confirmed by GC-MS or LC-MS/MS</strong> before it is reported as positive. Run batch QC, blanks and controls, retain raw data and chromatograms, and have the analyst certify the record. Reports should state the cut-off, method, specimen type and confirmation status. Staff must be prepared to testify, because the commonest reasons a case fails are <strong>broken seals</strong>, mislabelled containers, missing signatures and undocumented storage.</p>
  `,
  tip: "Answer with the paper trail, not the chemistry: identity, seal, split specimen, every signature, confirmation.",
  sources: ["C1", "C2", "C13"]
},
{
  id: "cc234", domain: "chem-tox", star: true,
  q: "Discuss mass spectrometry in the toxicology laboratory: principles, instrument configurations, screening versus targeted analysis, and validation pitfalls.",
  tags: ["mass spectrometry", "LC-MS/MS", "high-resolution", "confirmation"],
  keypoints: ["mass-to-charge ratio", "tandem MS", "retention time", "confirmatory standard", "ESI", "Triple quadrupole", "high-resolution accurate mass", "stable-isotope-labelled internal standard", "Matrix effects and ion suppression", "Isobaric compounds and isomers", "glucuronides"],
  answer: `
    <h4>Principles</h4>
    <p>Mass spectrometry measures the <strong>mass-to-charge ratio</strong> of ions. Molecules are ionised, separated in a mass analyser and detected; fragmentation in <strong>tandem MS</strong> adds a second, highly specific dimension. Combined with chromatographic <strong>retention time</strong>, the result is close to a unique fingerprint, which is why MS is the <strong>confirmatory standard</strong> in toxicology.</p>
    <h4>Instrument configurations</h4>
    <div class="table-wrap"><table>
      <tr><th>Component</th><th>Options</th><th>Use</th></tr>
      <tr><td>Inlet</td><td>LC or GC</td><td>LC for polar and thermolabile drugs; GC for volatiles and many abused drugs</td></tr>
      <tr><td>Ionisation</td><td><strong>ESI</strong>, APCI (LC); EI (GC)</td><td>ESI for polar molecules; EI gives reproducible library spectra</td></tr>
      <tr><td>Analyser</td><td><strong>Triple quadrupole</strong>, TOF, Orbitrap</td><td>Triple quad for multiple-reaction monitoring; TOF and Orbitrap for <strong>high-resolution accurate mass</strong> screening</td></tr>
    </table></div>
    <h4>Screening versus targeted quantification</h4>
    <p>Targeted methods monitor specific precursor-to-product transitions and quantify against a <strong>stable-isotope-labelled internal standard</strong>, which corrects for recovery and ion suppression. High-resolution screening acquires full spectra and matches accurate masses and isotope patterns against a library, allowing retrospective re-analysis for compounds not originally suspected, which is valuable for new psychoactive substances.</p>
    <h4>Validation and pitfalls</h4>
    <ul>
      <li><strong>Matrix effects and ion suppression</strong> from phospholipids or co-eluting drugs bias results; assess them by post-column infusion and use adequate chromatography.</li>
      <li>Validate limit of detection and quantification, linearity, accuracy, precision, carryover, interference, dilution integrity and stability.</li>
      <li><strong>Isobaric compounds and isomers</strong> may share transitions and need chromatographic separation.</li>
      <li>Hydrolysis of <strong>glucuronides</strong> changes measured concentrations, so the method must specify it.</li>
    </ul>
    <h4>Clinical role</h4>
    <p>MS supports TDM of immunosuppressants and biologics, vitamin D, steroids, confirmation of drugs of abuse and investigation of unknown poisons. Its specificity is unmatched, but cost, expertise and the need for interpretative toxicology mean it complements rather than replaces clinical assessment.</p>
  `,
  tip: "Two dimensions — retention time plus mass — are the reason MS is confirmatory; say that before listing instruments.",
  sources: ["C1", "C2", "C10"]
},
{
  id: "cc235", domain: "chem-tox", star: true,
  q: "Discuss specimen validity testing and the use of alternative matrices in drugs-of-abuse testing, including their interpretation and limitations.",
  tags: ["specimen validity", "oral fluid", "hair testing", "adulteration"],
  keypoints: ["dilute", "specific gravity", "oxidants", "not interpretable", "Oral fluid", "Hair", "passive external contamination", "Meconium", "Vitreous humour", "THC-COOH", "exposure, not impairment"],
  answer: `
    <h4>Why specimen validity matters</h4>
    <p>A drug test is only as good as the specimen. Donors may <strong>dilute</strong>, substitute or adulterate urine to avoid detection. Validity testing is therefore performed before and alongside the immunoassay: temperature immediately after collection, creatinine, <strong>specific gravity</strong>, pH, and tests for <strong>oxidants</strong> such as bleach, nitrite, chromate and peroxidase. A specimen with low creatinine and low specific gravity is dilute, and a negative result on such a specimen must be reported as <strong>not interpretable</strong> rather than negative.</p>
    <h4>Alternative matrices</h4>
    <div class="table-wrap"><table>
      <tr><th>Matrix</th><th>Typical window</th><th>Strengths and limits</th></tr>
      <tr><td>Urine</td><td>Days</td><td>Best validated, high concentrations, established cut-offs; easy to adulterate</td></tr>
      <tr><td><strong>Oral fluid</strong></td><td>Hours to 1–2 days</td><td>Reflects recent use and free drug; useful for workplace and driving testing; small volume and device variability</td></tr>
      <tr><td><strong>Hair</strong></td><td>Months</td><td>Segmental history and abstinence monitoring; <strong>passive external contamination</strong> and cosmetic treatment are major pitfalls</td></tr>
      <tr><td>Blood</td><td>Hours</td><td>Best for acute intoxication and impairment; short window, invasive</td></tr>
      <tr><td><strong>Meconium</strong></td><td>Gestational</td><td>Documents in-utero exposure; heterogeneous sampling</td></tr>
      <tr><td><strong>Vitreous humour</strong></td><td>Postmortem</td><td>Less affected by postmortem redistribution</td></tr>
    </table></div>
    <h4>Interpretation</h4>
    <p>Each matrix has its own cut-offs and metabolism: oral fluid contains mainly parent drug, while urine contains metabolites such as <strong>THC-COOH</strong>. A positive result indicates <strong>exposure, not impairment</strong> or the time of use, and passive exposure can produce low concentrations in hair and oral fluid. Confirmatory testing by LC-MS/MS and a documented chain of custody are required before any result is acted upon.</p>
    <h4>Reporting</h4>
    <p>Reports should name the matrix, cut-off, method, confirmation status and validity findings, and state explicitly when a specimen is unsuitable. Laboratories should publish interpretation guidance so that clinicians and employers do not over-read a screening result.</p>
  `,
  tip: "Pair each matrix with its window, then say plainly that presence is exposure, not impairment.",
  sources: ["C1", "C2", "C13"]
},
{
  id: "cc236", domain: "chem-tox", star: true,
  q: "Discuss the laboratory monitoring of high-dose methotrexate: pharmacology, the sampling schedule, delayed clearance and the management of an elevated level.",
  tags: ["methotrexate", "leucovorin", "glucarpidase", "TDM"],
  keypoints: ["folate antagonist", "dihydrofolate reductase", "renal tubular secretion", "leucovorin", "24, 48 and 72 hours", "urinary alkalinisation", "Third-space fluid", "Glucarpidase", "DAMPA", "immunoassays may cross-react with DAMPA", "chromatographic method"],
  answer: `
    <h4>Pharmacology and the need for rescue</h4>
    <p>Methotrexate is a <strong>folate antagonist</strong> that inhibits <strong>dihydrofolate reductase</strong> and thymidylate synthesis. At high doses it is used in osteosarcoma, lymphoma and leukaemia, and it is eliminated largely unchanged by <strong>renal tubular secretion</strong>. Because toxicity to normal tissue is dose- and time-dependent, high-dose regimens require <strong>leucovorin</strong> rescue and serial level monitoring.</p>
    <h4>Monitoring schedule</h4>
    <ul>
      <li>Measure serum methotrexate at <strong>24, 48 and 72 hours</strong> after the start of the infusion, then daily until below the protocol-defined threshold.</li>
      <li>Check creatinine, electrolytes, liver enzymes, full blood count and urine pH with each level.</li>
      <li>Maintain hydration and <strong>urinary alkalinisation</strong>, because methotrexate and its metabolite precipitate in acidic urine and cause acute kidney injury.</li>
      <li>Record the infusion start and end times, because interpretation is time-dependent.</li>
    </ul>
    <h4>Delayed clearance and risk factors</h4>
    <p>Any fall in glomerular filtration raises levels. <strong>Third-space fluid</strong> such as pleural effusion or ascites acts as a reservoir and prolongs exposure. Acidic urine, dehydration, older age, obesity and drug interactions with NSAIDs, proton pump inhibitors, penicillins and probenecid all delay elimination. Toxicity includes mucositis, myelosuppression, hepatotoxicity, nephrotoxicity and neurotoxicity.</p>
    <h4>Managing an elevated level</h4>
    <p>Continue leucovorin, with the dose guided by the level, and extend it until methotrexate is cleared; do not stop rescue because of mucositis. <strong>Glucarpidase</strong> rapidly hydrolyses methotrexate to inactive <strong>DAMPA</strong> and is used for markedly elevated levels with renal impairment. After glucarpidase, <strong>immunoassays may cross-react with DAMPA</strong> and overestimate methotrexate, so levels must be measured by a <strong>chromatographic method</strong>. Monitor renal function closely and involve the oncology pharmacist early.</p>
  `,
  tip: "Glucarpidase plus the immunoassay cross-reaction is the detail that distinguishes a strong answer.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc237", domain: "chem-tox", star: true,
  q: "Discuss laboratory monitoring of anticoagulant therapy: unfractionated and low-molecular-weight heparin, warfarin and the direct oral anticoagulants.",
  tags: ["anticoagulants", "anti-Xa", "DOAC", "INR"],
  keypoints: ["APTT", "anti-Xa assay", "Protamine", "heparin-induced thrombocytopenia", "anti-Xa activity 3–5 hours after a dose", "INR", "CYP2C9", "prothrombin complex concentrate", "Diluted thrombin time", "drug-specific calibration", "Idarucizumab", "andexanet alfa"],
  answer: `
    <h4>Unfractionated heparin</h4>
    <p>UFH is monitored by the <strong>APTT</strong>, but the APTT is a poor surrogate when lupus anticoagulant, high factor VIII, antithrombin deficiency or liver disease is present. In these situations the <strong>anti-Xa assay</strong> is preferred, and it is also used in obesity, pregnancy and renal impairment. <strong>Protamine</strong> reverses UFH, and platelet counts must be monitored for <strong>heparin-induced thrombocytopenia</strong>.</p>
    <h4>Low-molecular-weight heparin and fondaparinux</h4>
    <p>LMWH has predictable pharmacokinetics, so routine monitoring is unnecessary. Measure <strong>anti-Xa activity 3–5 hours after a dose</strong> in renal impairment, extreme body weight, pregnancy and children, and when bleeding or recurrent thrombosis suggests inadequate or excessive exposure. Fondaparinux is not reversed by protamine.</p>
    <h4>Warfarin</h4>
    <p>Warfarin is monitored by the <strong>INR</strong>, which reflects the extrinsic pathway and is standardised against a thromboplastin reference. Variants in <strong>CYP2C9</strong> and VKORC1, diet, illness and many drug interactions alter the dose–response. Vitamin K and <strong>prothrombin complex concentrate</strong> reverse over-anticoagulation; fresh frozen plasma is a slower alternative.</p>
    <h4>Direct oral anticoagulants</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Assay</th><th>Comment</th></tr>
      <tr><td>Dabigatran</td><td><strong>Diluted thrombin time</strong> or ecarin time</td><td>Quantitative; APTT only qualitative</td></tr>
      <tr><td>Rivaroxaban</td><td>Anti-Xa with <strong>drug-specific calibration</strong></td><td>INR and APTT unreliable</td></tr>
      <tr><td>Apixaban</td><td>Anti-Xa with <strong>drug-specific calibration</strong></td><td>Standard heparin calibration invalid</td></tr>
      <tr><td>Edoxaban</td><td>Anti-Xa, drug-specific</td><td>Limited availability</td></tr>
    </table></div>
    <h4>When to measure and how to reverse</h4>
    <p>DOAC levels are not needed routinely, but are useful in major bleeding, urgent surgery, suspected treatment failure, renal impairment and extremes of weight. Record the time since the last dose and interpret against drug-specific calibrated assays, not the INR. <strong>Idarucizumab</strong> reverses dabigatran; <strong>andexanet alfa</strong> or prothrombin complex concentrate is used for factor Xa inhibitors. Standard tests may be normal despite clinically important concentrations, so never exclude exposure on the basis of a normal APTT or INR alone.</p>
  `,
  tip: "Match each drug to its assay and its reversal agent in a table — that is the whole answer in one view.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc238", domain: "chem-tox", star: true,
  q: "Discuss trace-element monitoring in long-term parenteral nutrition and after bariatric surgery, including deficiency syndromes and analytical requirements.",
  tags: ["trace elements", "parenteral nutrition", "bariatric surgery", "manganese"],
  keypoints: ["essential cofactors", "cholestasis", "Zinc deficiency", "copper deficiency", "ceruloplasmin", "Selenium", "T1 hyperintensity in the basal ganglia", "Chromium", "trace-element-free tubes", "ICP-MS", "refeeding syndrome"],
  answer: `
    <h4>Why trace elements need monitoring</h4>
    <p>Zinc, copper, selenium, manganese, chromium and iron are <strong>essential cofactors</strong> that are easily overlooked. Patients on long-term parenteral nutrition, after bariatric surgery, with short bowel, chronic diarrhoea or alcohol dependence are at risk of deficiency, while patients with <strong>cholestasis</strong> accumulate copper and manganese because biliary excretion fails.</p>
    <h4>Zinc and copper</h4>
    <ul>
      <li><strong>Zinc deficiency</strong> causes perioral and acral dermatitis, diarrhoea, alopecia, poor wound healing and impaired immunity; it also causes <strong>copper deficiency</strong> by inducing intestinal metallothionein.</li>
      <li><strong>Copper deficiency</strong> produces microcytic anaemia, neutropenia and a myelopathy resembling vitamin B12 deficiency, typically after bariatric surgery.</li>
      <li>Measure plasma zinc and serum copper with <strong>ceruloplasmin</strong>; both fall with inflammation, so interpret with CRP.</li>
    </ul>
    <h4>Selenium, manganese and chromium</h4>
    <div class="table-wrap"><table>
      <tr><th>Element</th><th>Deficiency or excess</th><th>Monitoring</th></tr>
      <tr><td><strong>Selenium</strong></td><td>Cardiomyopathy, myopathy, impaired glutathione peroxidase</td><td>Plasma selenium in long-term PN</td></tr>
      <tr><td>Manganese</td><td>Excess causes cholestasis and <strong>T1 hyperintensity in the basal ganglia</strong>, parkinsonism</td><td>Whole blood manganese; reduce in cholestasis</td></tr>
      <tr><td><strong>Chromium</strong></td><td>Deficiency causes insulin resistance and glucose intolerance</td><td>Rarely measured; assess glucose control</td></tr>
      <tr><td>Iron</td><td>Deficiency after bariatric surgery; overload with transfusion</td><td>Ferritin with CRP, transferrin saturation</td></tr>
    </table></div>
    <h4>Analytical and clinical practice</h4>
    <p>Use <strong>trace-element-free tubes</strong> and needles, avoid prolonged tourniquet time, and measure by <strong>ICP-MS</strong>; haemolysis and contamination invalidate results. Sample at defined intervals rather than daily, review the parenteral nutrition prescription when levels are abnormal, and remember that <strong>refeeding syndrome</strong> shifts phosphate, potassium and magnesium independently of trace elements. Document the indication, the interval and the supplement history, because recent intake raises plasma zinc transiently and a single value can mislead.</p>
  `,
  tip: "Link manganese excess to cholestasis and copper deficiency to bariatric surgery — those two associations carry the marks.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc239", domain: "chem-tox", star: true,
  q: "Discuss biotin interference in immunoassays: mechanism, the assays affected, recognition and mitigation.",
  tags: ["biotin", "immunoassay interference", "streptavidin", "patient safety"],
  keypoints: ["streptavidin–biotin", "multiple sclerosis", "Competitive", "Falsely low", "Sandwich", "Falsely high", "low free T4 with a raised TSH", "false-positive hCG", "washout", "biotin-insensitive platform", "heterophile antibodies"],
  answer: `
    <h4>Mechanism</h4>
    <p>Many immunoassays use <strong>streptavidin–biotin</strong> capture. Biotin is vitamin B7, with very high affinity for streptavidin; pharmacological doses, used in <strong>multiple sclerosis</strong> trials and sold widely as a hair and nail supplement, saturate the streptavidin and disrupt the assay. The direction of the error depends on the format.</p>
    <h4>Which assays are affected</h4>
    <div class="table-wrap"><table>
      <tr><th>Format</th><th>Effect of excess biotin</th><th>Examples</th></tr>
      <tr><td><strong>Competitive</strong></td><td><strong>Falsely low</strong></td><td>Free T4, T3, cortisol, testosterone, estradiol, progesterone, 25-OH-vitamin D, B12, folate</td></tr>
      <tr><td><strong>Sandwich</strong></td><td><strong>Falsely high</strong></td><td>TSH, hCG, troponin, PSA, ferritin, parathyroid hormone</td></tr>
    </table></div>
    <p>The classic pattern is a <strong>low free T4 with a raised TSH</strong>, mimicking primary hypothyroidism, or a <strong>false-positive hCG</strong> leading to unnecessary imaging and surgery. Troponin may be falsely raised and trigger unnecessary angiography. Assays with extensive wash steps or non-biotin platforms are less affected.</p>
    <h4>Recognition and mitigation</h4>
    <ul>
      <li>Ask specifically about supplements and high-dose biotin, including over-the-counter hair products.</li>
      <li>Stop biotin for an appropriate <strong>washout</strong> before testing; the required time depends on dose and renal function, so follow the manufacturer's guidance.</li>
      <li>Repeat on a <strong>biotin-insensitive platform</strong> or after streptavidin blockade, and confirm with an alternative method.</li>
      <li>Exclude <strong>heterophile antibodies</strong> and other immunoassay interference when results are discordant.</li>
    </ul>
    <p>Because the effect is dose- and time-dependent, a sample taken soon after a supplement is the most likely to mislead; when in doubt, repeat the clinically important test after washout rather than acting on the first result.</p>
    <h4>Laboratory responsibility</h4>
    <p>Laboratories should publish which platforms are biotin-sensitive, add a comment to affected results and educate clinicians. A single implausible result should never drive treatment without clinical correlation and confirmatory testing.</p>
  `,
  tip: "Remember the direction rule — competitive assays fall, sandwich assays rise — and give one patient-safety example.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc240", domain: "chem-tox", star: true,
  q: "Discuss therapeutic drug monitoring in special populations: neonates and children, pregnancy, obesity, critical illness and extracorporeal support.",
  tags: ["special populations", "paediatric TDM", "pregnancy", "ECMO"],
  keypoints: ["volume of distribution", "protein binding", "neonates", "Low albumin", "Immature glomerular filtration", "lamotrigine, levetiracetam and lithium", "loading doses follow actual body weight", "augmented renal clearance", "ECMO", "continuous renal replacement therapy", "population-specific"],
  answer: `
    <h4>Why standard targets may not apply</h4>
    <p>Drug concentrations reflect the balance of absorption, <strong>volume of distribution</strong>, <strong>protein binding</strong> and clearance. Each changes in neonates, pregnancy, obesity, critical illness, burns and patients on extracorporeal support. Applying adult targets without adjustment produces under-treatment of infection or unnecessary toxicity.</p>
    <h4>Neonates and children</h4>
    <ul>
      <li><strong>Low albumin</strong> and low alpha-1-acid glycoprotein raise the free fraction of highly bound drugs, so total levels underestimate active drug.</li>
      <li><strong>Immature glomerular filtration</strong> and hepatic enzymes prolong half-lives; doses are interval-adjusted rather than simply scaled by weight.</li>
      <li>Drugs commonly monitored include gentamicin, vancomycin, caffeine and phenobarbital; sample volumes must be minimised.</li>
      <li>Older children often have higher weight-adjusted clearance than adults and may need larger doses for the same concentration.</li>
    </ul>
    <h4>Pregnancy</h4>
    <p>Plasma volume and glomerular filtration rise and hepatic metabolism is induced, so concentrations of <strong>lamotrigine, levetiracetam and lithium</strong> fall during pregnancy and rise again postpartum. Monitor each trimester and after delivery; untreated maternal illness also carries fetal risk, so interpretation needs obstetric and psychiatric input.</p>
    <h4>Obesity, critical illness and extracorporeal circuits</h4>
    <p>In obesity, <strong>loading doses follow actual body weight</strong> while maintenance dosing uses an adjusted weight, particularly for hydrophilic drugs. Critical illness adds capillary leak, hypoalbuminaemia and <strong>augmented renal clearance</strong>, which lower concentrations, or renal and hepatic failure, which raise them. <strong>ECMO</strong> increases circuit volume and adsorbs lipophilic drugs, while <strong>continuous renal replacement therapy</strong> removes drugs according to membrane and flow; both demand frequent levels.</p>
    <h4>Practical reporting</h4>
    <p>State the matrix, dose, infusion and sampling times, assay and the target used, and flag when a level was drawn before steady state. Because targets are <strong>population-specific</strong>, the laboratory should provide paediatric and obstetric reference information rather than a single adult range, and discuss complex cases with the clinical pharmacist.</p>
  `,
  tip: "Organise by mechanism — binding, clearance, volume — then give the population example for each.",
  sources: ["C1", "C2", "C3"]
}
);
