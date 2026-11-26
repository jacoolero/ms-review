/* Mycobacteria — additional essays, part B: TB epidemiology, clinical syndromes, drugs and host factors */
window.QBANK.push(
{
  id: "my13", domain: "mycobacteria", star: true,
  q: "Discuss the global epidemiology of tuberculosis using the 2025 WHO estimates. Why does the burden persist, and what are the programmatic implications?",
  tags: ["TB epidemiology", "WHO 2025", "End TB", "case detection"],
  keypoints: ["10.7 million incident cases", "1.23 million deaths", "2.4 million cases missed", "latent reservoir", "social determinants", "HIV and diabetes", "drug-resistant TB treatment gap", "diagnostic and treatment gaps", "funding shortfall", "high-burden countries", "Philippines high burden", "active case finding", "universal drug-susceptibility testing", "contact tracing", "TB preventive treatment"],
  answer: `
    <h4>The 2025 WHO report in numbers</h4>
    <p>The WHO Global Tuberculosis Report 2025 estimates <strong>10.7 million incident TB cases</strong> and <strong>1.23 million deaths</strong> in 2024, with about <strong>2.4 million cases missed</strong> by health systems. Roughly a quarter of the world's population has been infected, so the <strong>latent reservoir</strong> remains enormous. TB is still the leading cause of death from a single infectious agent, and progress is far short of the End TB Strategy targets.</p>
    <h4>Why the burden persists</h4>
    <ul>
      <li><strong>Social determinants</strong> — poverty, crowding, undernutrition, incarceration, migration and weak primary care.</li>
      <li><strong>HIV and diabetes</strong> — both increase progression and complicate diagnosis and treatment.</li>
      <li><strong>Diagnostic and treatment gaps</strong> — many patients are never tested or notified; molecular tests and drug-susceptibility testing are unevenly available.</li>
      <li><strong>Drug-resistant TB</strong> — only a fraction of people with MDR/RR-TB are diagnosed and treated, and treatment success remains suboptimal.</li>
      <li><strong>Funding</strong> — global spending falls short of the estimated need, and COVID-19 disrupted services.</li>
    </ul>
    <h4>Geographic and programmatic pattern</h4>
    <p>Most cases occur in a small number of <strong>high-burden countries</strong> in Asia and Africa; the <strong>Philippines</strong> is among the high TB and MDR-TB burden countries. Incidence is falling slowly, but not fast enough to meet targets. Case detection depends on passive presentation unless <strong>active case finding</strong> is funded.</p>
    <h4>Implications</h4>
    <p>Control requires <strong>early molecular diagnosis</strong>, <strong>universal drug-susceptibility testing</strong>, <strong>contact tracing and TB preventive treatment</strong>, patient-centred adherence support, infection control, and investment in new tools. Epidemiology is therefore not background information: it defines where laboratories, programmes and clinicians should concentrate effort. The distribution also shapes laboratory capacity, because high-burden settings need affordable molecular platforms and same-day treatment initiation.</p>
  `,
  tip: "Anchor the answer on the three 2025 figures — 10.7 million cases, 1.23 million deaths, 2.4 million missed — then explain the gaps rather than listing them.",
  sources: ["S6", "S10", "S11"]
},
{
  id: "my14", domain: "mycobacteria", star: true,
  q: "Why is tuberculosis in children difficult to diagnose, and how should childhood TB be investigated and treated?",
  tags: ["childhood TB", "paucibacillary", "gastric aspirate", "preventive therapy"],
  keypoints: ["paucibacillary", "smear-negative", "household contact", "intrathoracic lymphadenopathy", "miliary TB", "TB meningitis", "induced sputum", "gastric aspirate", "Xpert MTB/RIF Ultra", "TST and IGRA cannot distinguish active from latent", "urine LF-LAM in HIV", "2HRZE/4HR", "9-12 months for CNS TB", "child-friendly fixed-dose combinations", "BCG protects severe forms", "contact tracing", "preventive therapy for child contacts"],
  answer: `
    <h4>Why childhood TB is different</h4>
    <p>Children usually have <strong>paucibacillary, smear-negative disease</strong> because primary infection is contained and cavitation is uncommon. They present with chronic cough, fever, weight loss, failure to thrive, and <strong>intrathoracic lymphadenopathy</strong>; severe forms include <strong>miliary TB</strong> and <strong>TB meningitis</strong>. Young age, HIV, malnutrition and recent household exposure are major risk factors.</p>
    <h4>Diagnosis</h4>
    <p>Diagnosis is often clinical and epidemiological: a <strong>household contact</strong>, compatible symptoms, chest radiograph and immune evidence of infection. Specimens are difficult to obtain, so use <strong>induced sputum</strong> or <strong>gastric aspirate</strong>, nasopharyngeal aspirate, and stool where validated. <strong>Xpert MTB/RIF Ultra</strong> and culture should be sent; smear is insensitive. <strong>TST and IGRA cannot distinguish active from latent</strong> disease and may be negative in malnutrition or HIV. In HIV, add <strong>urine LF-LAM</strong> when CD4 is low. Always look for meningitis and disseminated disease.</p>
    <h4>Treatment</h4>
    <ul>
      <li>Drug-susceptible pulmonary TB: standard <strong>2HRZE/4HR</strong> with <strong>child-friendly fixed-dose combinations</strong> and weight-based dosing.</li>
      <li>TB meningitis and disseminated disease: longer therapy, commonly <strong>9–12 months for CNS TB</strong>, with corticosteroids for meningitis.</li>
      <li>Ethambutol is used with vision monitoring; pyridoxine accompanies isoniazid; HIV requires ART and attention to interactions and IRIS.</li>
      <li>Adherence support involves the family, and directly observed or video-supported therapy is often used.</li>
    </ul>
    <h4>Prevention</h4>
    <p><strong>BCG protects severe forms</strong> — disseminated and meningeal TB — but not adult pulmonary disease. <strong>Contact tracing</strong>, isoniazid-based <strong>preventive therapy for child contacts</strong>, and treatment of the index case are the most effective interventions. Never exclude TB because a test is negative in a child with a strong exposure history. Screening should be repeated at each visit because exposure may be ongoing.</p>
  `,
  tip: "State the paucibacillary principle first, then pair each specimen with its yield — that explains why childhood TB is a clinical diagnosis.",
  sources: ["S6", "S9", "S10"]
},
{
  id: "my15", domain: "mycobacteria", star: true,
  q: "Describe the pathogenesis, diagnosis and management of tuberculous meningitis, including the role of corticosteroids and the timing of ART.",
  tags: ["TB meningitis", "CSF", "corticosteroids", "hydrocephalus"],
  keypoints: ["haematogenous dissemination", "Rich focus", "basal exudate", "hydrocephalus", "lymphocytic pleocytosis", "low glucose high protein", "Xpert Ultra on large-volume CSF", "basal meningeal enhancement", "2HRZE/4HR", "9-12 months", "corticosteroids reduce mortality", "raised intracranial pressure", "shunt", "ART within 2-8 weeks", "IRIS"],
  answer: `
    <h4>Pathogenesis and pathology</h4>
    <p>TB meningitis follows <strong>haematogenous dissemination</strong> with bacilli seeding the meninges or the <strong>Rich focus</strong> in the cortex. Rupture into the subarachnoid space produces a thick <strong>basal exudate</strong> around the brainstem, with arteritis, infarction, cranial nerve palsies and obstructive <strong>hydrocephalus</strong>. It is the most severe form of TB and carries high mortality and disability even with treatment.</p>
    <h4>Clinical and CSF findings</h4>
    <p>Subacute fever, headache, vomiting, meningism, behavioural change, seizures and cranial nerve palsy. CSF typically shows <strong>lymphocytic pleocytosis, low glucose and high protein</strong>; neutrophils may predominate early. <strong>Xpert Ultra on large-volume CSF</strong> is the preferred rapid test, with culture and drug-susceptibility testing. ADA and interferon-γ are supportive, not definitive. MRI or CT shows <strong>basal meningeal enhancement</strong>, hydrocephalus and infarcts; exclude cryptococcal, bacterial and malignant meningitis.</p>
    <h4>Treatment</h4>
    <ul>
      <li>Standard <strong>2HRZE/4HR</strong> extended to <strong>9–12 months</strong> for CNS disease.</li>
      <li><strong>Corticosteroids reduce mortality</strong> and neurological sequelae; dexamethasone is standard, with taper.</li>
      <li>Manage <strong>raised intracranial pressure</strong> and hydrocephalus, sometimes with a <strong>shunt</strong>; watch for hyponatraemia and seizures.</li>
      <li>Rifampicin penetration into CSF is limited, and higher-dose rifampicin is under study. Pyrazinamide and ethambutol penetrate well.</li>
      <li>Start <strong>ART within 2–8 weeks</strong> in HIV, often deferring 2–4 weeks in meningitis to reduce <strong>IRIS</strong>; monitor for drug interactions.</li>
    </ul>
    <h4>Prognosis</h4>
    <p>Outcome depends on stage at presentation, age, HIV status and access to critical care. Survivors need rehabilitation and hearing, vision and cognitive follow-up. <strong>Early empirical treatment</strong> is justified when the clinical picture is compatible, because diagnostic tests are insensitive. HIV co-infection, delayed presentation and hydrocephalus worsen survival despite adequate therapy.</p>
  `,
  tip: "Give the CSF triad, then the two management decisions examiners look for: steroids and the timing of ART.",
  sources: ["S6", "S4", "S9"]
},
{
  id: "my16", domain: "mycobacteria",
  q: "Discuss tuberculous pericarditis: pathogenesis, diagnosis, complications and treatment.",
  tags: ["TB pericarditis", "tamponade", "constriction", "ADA"],
  keypoints: ["haematogenous spread", "lymphocytic exudate", "high adenosine deaminase", "cardiac tamponade", "constrictive pericarditis", "echocardiography", "pericardial biopsy", "2HRZE/4HR", "pericardiocentesis", "corticosteroids", "pericardiectomy", "HIV co-infection"],
  answer: `
    <h4>Pathogenesis and clinical spectrum</h4>
    <p>TB pericarditis arises by <strong>haematogenous spread</strong> or from mediastinal lymph nodes. It evolves through a fibrinous exudative phase, an effusive phase with a lymphocyte-rich pericardial effusion, and a <strong>constrictive</strong> fibrotic phase. Patients present with fever, weight loss, chest pain, dyspnoea, tachycardia and a pericardial rub; <strong>cardiac tamponade</strong> and <strong>constrictive pericarditis</strong> are the dangerous complications. <strong>HIV co-infection</strong> is common in high-burden settings.</p>
    <h4>Diagnosis</h4>
    <p><strong>Echocardiography</strong> is central: it shows the effusion, tamponade physiology and later constriction. Chest radiography may show an enlarged cardiac silhouette. Pericardial fluid is usually a <strong>lymphocytic exudate with high adenosine deaminase</strong>, but Xpert and culture have low sensitivity. <strong>Pericardial biopsy</strong> improves yield. Always exclude purulent, malignant, uraemic and autoimmune pericarditis, and test for HIV.</p>
    <h4>Treatment</h4>
    <ul>
      <li>Standard <strong>2HRZE/4HR</strong> for drug-susceptible TB; extend therapy if constriction or disseminated disease.</li>
      <li><strong>Pericardiocentesis</strong> for tamponade or diagnostic sampling; avoid blind drainage when a safer route exists.</li>
      <li><strong>Corticosteroids</strong> reduce the incidence of constrictive pericarditis in some trials but do not reduce mortality; individualise, especially in HIV.</li>
      <li><strong>Pericardiectomy</strong> for established constriction, ideally after starting TB treatment.</li>
      <li>Monitor for hepatotoxicity, drug interactions and IRIS in HIV.</li>
    </ul>
    <h4>Why it matters</h4>
    <p>TB pericarditis is a treatable cause of heart failure and tamponade. Delayed diagnosis leads to constriction, which is a surgical disease. In TB-endemic settings, any unexplained lymphocyte-rich pericardial effusion should prompt TB investigation and early empirical treatment when the suspicion is high. A high index of suspicion is essential because the presentation overlaps with heart failure and other pericardial diseases. Early treatment prevents constriction. Pericardial constriction may present months after the initial illness.</p>
  `,
  tip: "Distinguish the effusive stage from the constrictive stage — they have different urgent interventions.",
  sources: ["S4", "S6", "S9"]
},
{
  id: "my17", domain: "mycobacteria", star: true,
  q: "How should tuberculosis be diagnosed and managed in pregnancy, and what are the risks to mother and infant?",
  tags: ["TB in pregnancy", "congenital TB", "streptomycin", "pyridoxine"],
  keypoints: ["altered cell-mediated immunity", "maternal anaemia", "preterm birth", "congenital TB", "Xpert MTB/RIF Ultra", "chest radiography with shielding", "TST and IGRA safe", "2HRZE/4HR", "avoid streptomycin", "fetal ototoxicity", "pyridoxine", "hepatotoxicity", "breastfeeding compatible", "preventive treatment", "BCG according to HIV status"],
  answer: `
    <h4>Why pregnancy changes the picture</h4>
    <p>Pregnancy is a state of altered cell-mediated immunity, and TB may progress or present atypically. <strong>Maternal TB</strong> increases the risk of anaemia, miscarriage, <strong>preterm birth</strong> and low birth weight; <strong>congenital TB</strong> is rare but follows placental or haematogenous spread. HIV co-infection amplifies risk. Physiological dyspnoea and fatigue can delay diagnosis. Congenital TB carries high mortality and requires a high index of suspicion in a neonate with sepsis, hepatosplenomegaly or respiratory distress. Screening at the first antenatal visit is therefore important.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li>Send sputum for <strong>Xpert MTB/RIF Ultra</strong> and culture; induce sputum if needed.</li>
      <li><strong>Chest radiography with shielding</strong> should not be withheld when indicated.</li>
      <li><strong>TST and IGRA are safe</strong> and indicate infection, not active disease.</li>
      <li>Investigate extrapulmonary sites, and test for HIV and diabetes.</li>
    </ul>
    <h4>Treatment</h4>
    <p>The standard <strong>2HRZE/4HR</strong> regimen is used in pregnancy; isoniazid, rifampicin, pyrazinamide and ethambutol are considered safe. Give <strong>pyridoxine</strong> with isoniazid. <strong>Avoid streptomycin</strong> because of <strong>fetal ototoxicity</strong>. Monitor liver function, especially with pregnancy-related cholestasis, and watch for drug interactions with ART. <strong>Breastfeeding is compatible</strong> with most anti-TB drugs. TB meningitis requires longer therapy and corticosteroids.</p>
    <h4>Prevention and neonatal care</h4>
    <p>Screen household contacts and offer <strong>preventive treatment</strong> to eligible pregnant women after excluding active disease, choosing a regimen with established safety and specialist advice. Infants of mothers with TB should be evaluated and receive <strong>BCG according to HIV status</strong> and local policy, then be followed for congenital TB. Stigma and loss of income are major barriers, so counselling and social support are part of clinical care.</p>
  `,
  tip: "The two examinable safety points are streptomycin avoidance and pyridoxine with isoniazid; add the neonatal follow-up.",
  sources: ["S6", "S11", "S4"]
},
{
  id: "my18", domain: "mycobacteria", star: true,
  q: "Explain the clinically important drug interactions of anti-tuberculosis drugs and how they should be managed.",
  tags: ["drug interactions", "rifampicin", "CYP3A4", "dolutegravir"],
  keypoints: ["rifampicin CYP3A4 inducer", "P-glycoprotein induction", "dolutegravir twice daily", "rifabutin with protease inhibitors", "warfarin INR", "oral contraceptive failure", "corticosteroids", "azoles and tacrolimus", "isoniazid inhibits metabolism", "phenytoin toxicity", "linezolid serotonin syndrome", "QT prolongation", "ART within 2-8 weeks"],
  answer: `
    <h4>Rifampicin: the main offender</h4>
    <p>Rifampicin is a potent <strong>CYP3A4 and P-glycoprotein inducer</strong> and also induces phase II enzymes. It lowers concentrations of protease inhibitors, nevirapine, many statins, warfarin, direct oral anticoagulants, corticosteroids, azoles, tacrolimus, antiepileptics, methadone and combined oral contraceptives. Enzyme induction starts within days and resolves over weeks after stopping, so dose adjustments must be revisited.</p>
    <h4>HIV and TB</h4>
    <ul>
      <li>Use <strong>dolutegravir twice daily</strong> with rifampicin, or efavirenz; avoid unboosted protease inhibitors.</li>
      <li>If a protease inhibitor is essential, use <strong>rifabutin with protease inhibitors</strong> instead of rifampicin and adjust the dose.</li>
      <li>Start <strong>ART within 2–8 weeks</strong> of TB treatment, earlier if CD4 &lt;50; watch for IRIS and overlapping toxicities.</li>
    </ul>
    <h4>Other important interactions</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Mechanism</th><th>Action</th></tr>
      <tr><td>Warfarin</td><td>Rifampicin induction</td><td>Monitor <strong>INR</strong> closely; increase dose as needed.</td></tr>
      <tr><td>Combined oral contraceptive</td><td>Induction</td><td>Use an additional or alternative method to prevent <strong>contraceptive failure</strong>.</td></tr>
      <tr><td>Phenytoin</td><td><strong>Isoniazid inhibits metabolism</strong></td><td>Monitor levels for <strong>phenytoin toxicity</strong>.</td></tr>
      <tr><td>SSRIs with linezolid</td><td>Serotonergic excess</td><td>Avoid or monitor for <strong>serotonin syndrome</strong>.</td></tr>
      <tr><td>QT-prolonging drugs</td><td>Additive with bedaquiline, moxifloxacin, clofazimine</td><td>ECG and electrolyte monitoring for <strong>QT prolongation</strong>.</td></tr>
    </table></div>
    <h4>Practical approach</h4>
    <p>Take a full medication history, including traditional medicines and over-the-counter drugs; check an interaction database; monitor levels where available; and involve pharmacists. Never stop essential ART, anticoagulation or immunosuppression without a plan. Most interactions are manageable with dose adjustment and monitoring, not avoidance of TB treatment. Document the interaction plan in the chart and communicate it to the patient's other prescribers. Early pharmacist review prevents avoidable harm. Therapeutic drug monitoring can confirm exposure when an interaction is unavoidable.</p>
  `,
  tip: "Lead with enzyme induction, then give the ART rule and a short interaction table — that covers the marks efficiently.",
  sources: ["S6", "S11", "S4"]
},
{
  id: "my19", domain: "mycobacteria", star: true,
  q: "Discuss anti-tuberculosis drug-induced hepatotoxicity: risk factors, monitoring, diagnosis and management.",
  tags: ["hepatotoxicity", "DILI", "pyrazinamide", "monitoring"],
  keypoints: ["pyrazinamide most hepatotoxic", "isoniazid hydrazine metabolites", "rifampicin cholestasis", "baseline liver tests", "symptom education", "asymptomatic transaminase rise", "stop hepatotoxic drugs", "exclude viral hepatitis", "non-hepatotoxic regimen", "sequential reintroduction", "pyrazinamide often omitted", "alcohol and viral hepatitis"],
  answer: `
    <h4>Mechanisms and culprits</h4>
    <p>Anti-TB drugs can cause <strong>drug-induced liver injury</strong> by reactive metabolites and immune mechanisms. <strong>Pyrazinamide is the most hepatotoxic</strong>, <strong>isoniazid</strong> causes injury through hydrazine metabolites, and <strong>rifampicin</strong> contributes cholestasis and enzyme induction; ethambutol is rarely implicated. Risk is higher with older age, alcohol, viral hepatitis, pre-existing liver disease, malnutrition, pregnancy and HIV.</p>
    <h4>Monitoring</h4>
    <ul>
      <li>Take <strong>baseline liver tests</strong> and ask about alcohol, herbal products and other hepatotoxins.</li>
      <li>Educate every patient to report nausea, vomiting, abdominal pain, dark urine, jaundice or unexplained fatigue.</li>
      <li>Routine serial liver tests are debated; they are most useful in high-risk patients and in those with abnormal baseline results.</li>
      <li><strong>Asymptomatic transaminase rise</strong> is common and not all cases require stopping treatment.</li>
    </ul>
    <h4>Management</h4>
    <p>If symptoms or jaundice develop, or liver tests rise substantially, <strong>stop the hepatotoxic drugs</strong> and <strong>exclude viral hepatitis</strong>, biliary disease and other causes. For severe TB, use a <strong>non-hepatotoxic regimen</strong> with a fluoroquinolone, ethambutol and second-line agents, with specialist input. Once liver tests recover, drugs can be reintroduced sequentially, usually starting with rifampicin and isoniazid, with close monitoring; <strong>pyrazinamide is often omitted</strong>. Do not simply abandon treatment, because untreated TB is more dangerous than the drug injury.</p>
    <h4>Prevention</h4>
    <p>Correct malnutrition, treat alcohol misuse, vaccinate against hepatitis B, review concomitant drugs, and use fixed-dose combinations with clear counselling. Document the baseline and the plan so that another clinician can interpret a later abnormality. Liver tests should be repeated after recovery to establish a new baseline before reintroduction. Patients with pre-existing cirrhosis need specialist co-management. Alcohol cessation reduces the risk of recurrence.</p>
  `,
  tip: "Separate asymptomatic enzyme elevation from symptomatic hepatitis — the management threshold is the key discriminator.",
  sources: ["S6", "S9", "S4"]
},
{
  id: "my20", domain: "mycobacteria",
  q: "When is therapeutic drug monitoring of anti-tuberculosis drugs indicated, and how should the results be interpreted?",
  tags: ["TDM", "pharmacokinetics", "malabsorption", "rifampicin"],
  keypoints: ["pharmacokinetic variability", "rifampicin bioavailability", "NAT2 slow and fast acetylators", "HIV and diabetes malabsorption", "treatment failure", "delayed culture conversion", "second-line drugs", "timed peak and trough", "interpret with MIC", "targeted not routine", "limited availability"],
  answer: `
    <h4>Why levels vary</h4>
    <p>Anti-TB drugs show large <strong>pharmacokinetic variability</strong>. Rifampicin bioavailability depends on formulation, food and gut absorption; isoniazid is metabolised by <strong>NAT2</strong>, producing <strong>slow and fast acetylators</strong>; HIV, diabetes, malnutrition, pregnancy and gastrointestinal surgery alter absorption. Subtherapeutic exposure is associated with treatment failure and acquired resistance, while high exposure increases toxicity.</p>
    <h4>When to request levels</h4>
    <ul>
      <li>Suspected <strong>malabsorption</strong> — HIV, diabetes, chronic diarrhoea, bariatric or gastrointestinal surgery.</li>
      <li><strong>Treatment failure</strong>, relapse or <strong>delayed culture conversion</strong> despite adherence.</li>
      <li>Drug-resistant TB on <strong>second-line drugs</strong>, especially bedaquiline, linezolid and clofazimine.</li>
      <li>Renal or hepatic impairment, pregnancy, children, and major drug interactions.</li>
      <li>Suspected non-adherence or toxicity.</li>
    </ul>
    <h4>Practical interpretation</h4>
    <p>Collect a <strong>timed peak and trough</strong> as appropriate — usually a peak for rifampicin and a trough for some second-line agents — and record the exact dose time. <strong>Interpret with the MIC</strong> and the laboratory's validated target; a level within range does not prove adherence, and a low level does not always mean failure. For rifampicin, a low peak may justify reviewing formulation, food timing and adherence before changing the regimen.</p>
    <h4>Limitations</h4>
    <p>TDM is unavailable in most TB-endemic laboratories, targets are not validated for every drug, and evidence that routine TDM improves outcomes is limited. It is therefore <strong>targeted, not routine</strong>. The best use is in complex patients where the clinical question is clear: is exposure adequate, or is toxicity explained by high levels? Pair TDM with susceptibility testing, adherence support and clinical assessment. Results should be interpreted alongside the patient's clinical course and adherence record, and a single level is rarely decisive.</p>
  `,
  tip: "Name the patient groups and the sampling principle; do not present TDM as a routine test.",
  sources: ["S6", "S12", "S4"]
},
{
  id: "my21", domain: "mycobacteria", star: true,
  q: "Explain the role of whole-genome sequencing in tuberculosis: resistance prediction, outbreak investigation and limitations.",
  tags: ["whole-genome sequencing", "outbreak", "resistance", "SNP"],
  keypoints: ["low genetic diversity", "core-genome SNP distance", "recent transmission versus reactivation", "rpoB", "katG and inhA", "pncA", "gyrA", "rv0678", "rrl and rplC", "known mutations only", "phenotypic DST remains important", "bioinformatics capacity", "mixed infections"],
  answer: `
    <h4>What WGS offers</h4>
    <p><em>M. tuberculosis</em> has a compact genome and <strong>low genetic diversity</strong>, so <strong>whole-genome sequencing</strong> can resolve strains and transmission chains that older typing cannot. It predicts resistance from known mutations, detects mixed infections, and provides a permanent digital record that can be reanalysed as knowledge grows. Turnaround is now days rather than weeks in well-resourced laboratories. It can also identify the species within the <em>M. tuberculosis</em> complex and detect laboratory cross-contamination.</p>
    <h4>Resistance prediction</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Key genes</th></tr>
      <tr><td>Rifampicin</td><td><strong>rpoB</strong> (RRDR)</td></tr>
      <tr><td>Isoniazid</td><td><strong>katG</strong>, <strong>inhA</strong> promoter</td></tr>
      <tr><td>Pyrazinamide</td><td><strong>pncA</strong></td></tr>
      <tr><td>Ethambutol</td><td><strong>embB</strong></td></tr>
      <tr><td>Fluoroquinolones</td><td><strong>gyrA</strong>, gyrB</td></tr>
      <tr><td>Bedaquiline, clofazimine</td><td><strong>rv0678</strong>, pepQ</td></tr>
      <tr><td>Linezolid</td><td>23S rRNA (<strong>rrl</strong>), rplC</td></tr>
    </table></div>
    <h4>Outbreak investigation</h4>
    <p><strong>Core-genome SNP distance</strong> distinguishes <strong>recent transmission</strong> from unrelated <strong>reactivation</strong>. This is powerful in nosocomial outbreaks, prisons, homeless shelters and CF clinics, where it can link cases and identify gaps in infection control. It also distinguishes reinfection from relapse. SNP thresholds are laboratory-defined, so interpretation requires epidemiological context.</p>
    <h4>Limitations</h4>
    <p>WGS detects <strong>known mutations only</strong>; phenotypically resistant isolates may lack a recognised marker, and novel variants require interpretation. It needs culture or sufficient DNA, <strong>bioinformatics capacity</strong>, quality control and clear reporting. Cost and regulation limit routine use in many settings. The best model is WGS plus <strong>phenotypic DST remains important</strong>, with molecular results used to start effective treatment earlier and phenotypic results to confirm. Sequencing directly from sputum is reducing the dependence on culture, but sensitivity is lower than with culture. Data sharing and privacy must be governed, and reporting must distinguish a resistance marker from a validated predictor of treatment failure.</p>
  `,
  tip: "Balance the two use cases — resistance and transmission — then state clearly that WGS does not replace phenotypic testing.",
  sources: ["S13", "S6", "S12"]
},
{
  id: "my22", domain: "mycobacteria",
  q: "Describe the molecular mechanisms of resistance to anti-tuberculosis drugs and their implications for laboratory testing.",
  tags: ["drug resistance", "katG", "rpoB", "pncA", "heteroresistance"],
  keypoints: ["intrinsic resistance", "lipid-rich cell wall", "efflux pumps", "BlaC beta-lactamase", "katG loss", "inhA promoter", "rpoB RRDR", "pncA", "embB", "gyrA", "rrs and eis", "rv0678", "chromosomal not plasmid", "heteroresistance", "phenotypic DST"],
  answer: `
    <h4>Intrinsic resistance</h4>
    <p>Mycobacteria are intrinsically resistant to many antibiotics because of their <strong>lipid-rich, low-permeability cell wall</strong>, <strong>efflux pumps</strong>, and enzymes such as <strong>BlaC β-lactamase</strong> and aminoglycoside-modifying enzymes. This is why β-lactams generally fail and why drug combinations and high concentrations are needed. Intrinsic resistance is chromosomal and predictable, unlike acquired resistance. Porins are few, and the waxy mycolic acid layer slows drug entry, so some agents never reach effective intracellular concentrations.</p>
    <h4>Acquired resistance: first-line drugs</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Mechanism</th></tr>
      <tr><td>Isoniazid</td><td>Loss of <strong>katG</strong> (prodrug activation) or <strong>inhA promoter</strong> mutation (target overexpression)</td></tr>
      <tr><td>Rifampicin</td><td><strong>rpoB</strong> mutations in the 81-bp RRDR</td></tr>
      <tr><td>Pyrazinamide</td><td><strong>pncA</strong> loss of pyrazinamidase</td></tr>
      <tr><td>Ethambutol</td><td><strong>embB</strong> mutations affecting arabinosyl transferase</td></tr>
      <tr><td>Streptomycin</td><td><strong>rpsL</strong>, <strong>rrs</strong></td></tr>
    </table></div>
    <h4>Second-line and newer drugs</h4>
    <p>Fluoroquinolone resistance arises in <strong>gyrA</strong> and gyrB; aminoglycoside and capreomycin resistance in <strong>rrs</strong>, <strong>eis</strong> and tlyA. Bedaquiline and clofazimine resistance involve <strong>rv0678</strong> and efflux; pretomanid and delamanid resistance involve ddn, fbiA/B/C and fgd1; linezolid resistance involves rrl and rplC; ethionamide resistance involves ethA. Resistance is usually <strong>chromosomal, not plasmid-borne</strong>, so it arises by selection under inadequate therapy.</p>
    <h4>Clinical implications</h4>
    <p>Molecular tests target only the common mutations, so a negative result does not exclude resistance. <strong>Heteroresistance</strong> and mixed populations can be missed. <strong>Phenotypic DST</strong> remains important, and WGS is increasingly used for a comprehensive view. The central principle is that resistance is a man-made problem: adherence, adequate dosing, combination therapy and rapid susceptibility testing prevent it. Rapid molecular tests are useful only when their target mutations are present in the local strain population. This is why susceptibility testing must accompany treatment failure.</p>
  `,
  tip: "Organise by first-line, second-line and intrinsic resistance, and end with the limits of genotypic tests.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "my23", domain: "mycobacteria", star: true,
  q: "Discuss the complications of BCG vaccination, their risk factors, diagnosis and management.",
  tags: ["BCG", "lymphadenitis", "BCGosis", "immunodeficiency"],
  keypoints: ["live attenuated M. bovis", "regional lymphadenitis", "suppurative lymphadenitis", "BCG osteitis", "disseminated BCGosis", "SCID", "severe immunodeficiency", "aspiration not incision", "culture or PCR", "pyrazinamide resistance", "isoniazid rifampicin ethambutol", "immune evaluation", "avoid BCG in symptomatic HIV"],
  answer: `
    <h4>Expected and abnormal reactions</h4>
    <p>BCG is a <strong>live attenuated M. bovis</strong> vaccine. A small ulcer, crust and scar are expected. <strong>Regional lymphadenitis</strong> is the commonest complication, usually <strong>suppurative lymphadenitis</strong> but self-limiting; large abscesses, fistulae and keloids also occur. <strong>BCG osteitis</strong> is rare and appears months later. Disseminated <strong>BCGosis</strong> is the dangerous form and suggests underlying immunodeficiency.</p>
    <h4>Risk factors</h4>
    <ul>
      <li>Incorrect dose, deep injection or poor technique.</li>
      <li>Age at vaccination and vaccine strain.</li>
      <li><strong>Severe immunodeficiency</strong> — <strong>SCID</strong>, complete IFN-γ receptor defects, symptomatic HIV with low CD4, and some primary immunodeficiencies.</li>
      <li>Malnutrition and disseminated malignancy.</li>
    </ul>
    <p>The complication rate depends partly on vaccine strain and on the skill of the vaccinator.</p>
    <h4>Diagnosis and management</h4>
    <p><strong>Culture or PCR</strong> confirms <em>M. bovis</em> BCG and distinguishes it from <em>M. tuberculosis</em>. Local lymphadenitis is managed with <strong>aspiration, not incision</strong> and drainage, because incision can cause a chronic fistula. Antimycobacterial treatment is reserved for extensive or disseminated disease; BCG is intrinsically resistant to <strong>pyrazinamide</strong>, so regimens include <strong>isoniazid, rifampicin and ethambutol</strong>, with specialist input. Disseminated disease requires <strong>immune evaluation</strong> and treatment of the underlying defect. In disseminated disease, blood, bone marrow and tissue cultures may all be needed.</p>
    <h4>Prevention</h4>
    <p>Screen for severe immunodeficiency before vaccination, follow correct intradermal technique and dose, and <strong>avoid BCG in symptomatic HIV</strong> or known SCID. Counselling that a small ulcer is normal prevents unnecessary anxiety and unnecessary antibiotics. In a child with disseminated BCG disease, the key question is not only how to treat the infection but why the immune system allowed it.</p>
  `,
  tip: "The commonest complication is regional lymphadenitis; the most important is BCGosis in an immunodeficient child.",
  sources: ["S6", "S9", "S4"]
},
{
  id: "my24", domain: "mycobacteria", star: true,
  q: "Describe miliary tuberculosis: pathogenesis, clinical features, diagnosis and management.",
  tags: ["miliary TB", "dissemination", "choroidal tubercles", "LF-LAM"],
  keypoints: ["haematogenous dissemination", "millet-seed granulomas", "young children and HIV", "choroidal tubercles", "diffuse micronodules", "sputum Xpert and culture", "blood cultures", "bone marrow or liver biopsy", "urine LF-LAM", "2HRZE/4HR", "9-12 months if CNS", "corticosteroids for meningitis", "IRIS", "empirical treatment"],
  answer: `
    <h4>Pathogenesis</h4>
    <p>Miliary TB results from <strong>haematogenous dissemination</strong> of <em>M. tuberculosis</em>, seeding many organs with small granulomas that resemble millet seeds. It is more common in <strong>young children</strong>, older adults, <strong>HIV</strong>, malnutrition, diabetes and other immunosuppression. The primary focus may be pulmonary, but dissemination can occur from lymph nodes or extrapulmonary sites. The lungs, liver, spleen, bone marrow and meninges are commonly involved, which explains the multisystem presentation.</p>
    <h4>Clinical features</h4>
    <p>Insidious fever, night sweats, weight loss, anorexia and malaise; cough may be absent. Hepatosplenomegaly, generalised lymphadenopathy, <strong>choroidal tubercles</strong> on fundoscopy, and meningitis are clues. Chest radiography shows <strong>diffuse micronodules</strong>, but CT is more sensitive. A normal chest radiograph early in the course does not exclude the diagnosis. Without treatment, mortality is high.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Sputum Xpert and culture</strong>; <strong>blood cultures</strong> in mycobacterial bottles.</li>
      <li><strong>Bone marrow or liver biopsy</strong> with histology and culture when less invasive tests are negative.</li>
      <li>Urine <strong>LF-LAM</strong> in advanced HIV; CSF examination if neurological features.</li>
      <li>Fundoscopy and imaging; exclude other causes of miliary shadowing.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Start standard <strong>2HRZE/4HR</strong> promptly; extend to <strong>9–12 months if CNS</strong> disease, and follow local guidance for bone disease. <strong>Corticosteroids for meningitis</strong> and pericarditis, not routinely for pulmonary miliary TB. In HIV, start ART within 2–8 weeks and watch for <strong>IRIS</strong>, which may worsen fever, nodes and infiltrates. Supportive care, nutrition and treatment of co-morbidities matter. Because tests are often negative, <strong>empirical treatment</strong> is justified in a compatible host with characteristic imaging. Clinical improvement may be slow, and radiological resolution lags behind microbiological cure. Nutritional support improves tolerance and recovery.</p>
  `,
  tip: "Fundoscopy is the classic bedside clue, and negative sputum does not exclude miliary TB.",
  sources: ["S4", "S6", "S10"]
},
{
  id: "my25", domain: "mycobacteria",
  q: "Explain the relationship between tuberculosis and diabetes mellitus and how combined management should be organised.",
  tags: ["TB-diabetes", "hyperglycaemia", "sulfonylurea", "integrated care"],
  keypoints: ["bidirectional relationship", "diabetes increases TB risk", "insulin resistance", "delayed sputum conversion", "relapse", "screen every TB patient for diabetes", "HbA1c", "rifampicin lowers sulfonylurea effect", "insulin", "pyridoxine for neuropathy", "hepatotoxicity", "integrated TB and diabetes services"],
  answer: `
    <h4>Bidirectional relationship</h4>
    <p>Diabetes increases the risk of progression from latent to active TB and is associated with more severe, cavitary and lower-lobe disease. TB, in turn, causes <strong>insulin resistance</strong> and hyperglycaemia through inflammation and stress hormones. Poor glycaemic control is associated with <strong>delayed sputum conversion</strong>, <strong>relapse</strong> and higher mortality, so the two conditions must be managed together.</p>
    <h4>Screening</h4>
    <ul>
      <li><strong>Screen every TB patient for diabetes</strong> with fasting glucose or <strong>HbA1c</strong>, and repeat after treatment because stress hyperglycaemia can be transient.</li>
      <li>Screen people with diabetes for TB symptoms in high-burden settings; consider chest imaging.</li>
      <li>Test for HIV, hypertension and renal disease as part of integrated care.</li>
    </ul>
    <h4>Treatment considerations</h4>
    <p>Rifampicin induces hepatic enzymes and lowers the effect of <strong>sulfonylureas</strong> and some other glucose-lowering drugs; <strong>insulin</strong> is often the most reliable option during treatment. Monitor glucose closely, especially in the first weeks. Isoniazid can cause peripheral neuropathy, which is more likely in diabetes, so give <strong>pyridoxine for neuropathy</strong> prevention. Watch for <strong>hepatotoxicity</strong>, renal function with ethambutol and pyrazinamide, and drug interactions. Hypoglycaemia is a common and dangerous complication during treatment, especially with insulin. Good glycaemic control improves outcomes but must not delay TB treatment.</p>
    <h4>Programmatic approach</h4>
    <p>Integrate TB and diabetes services: one visit, shared records, and clear referral pathways. Counselling should cover diet, smoking cessation, alcohol and adherence to both treatments. Diabetes is not a reason to withhold standard TB treatment; it is a reason to monitor more closely and to treat both diseases seriously. Community health workers can support both glucose monitoring and TB adherence.</p>
  `,
  tip: "Use the word bidirectional, then give one screening rule and one prescribing interaction.",
  sources: ["S6", "S9", "S11"]
},
{
  id: "my26", domain: "mycobacteria", star: true,
  q: "How is non-tuberculous mycobacterial pulmonary disease diagnosed, and when should it be treated?",
  tags: ["NTM", "diagnostic criteria", "MAC", "watchful waiting"],
  keypoints: ["isolation does not equal disease", "nodular bronchiectatic", "fibrocavitary", "two positive sputum cultures", "BAL or tissue culture", "exclude TB and malignancy", "MAC macrolide ethambutol rifamycin", "M. kansasii", "M. abscessus", "12 months after culture conversion", "observation in frailty", "drug toxicity monitoring"],
  answer: `
    <h4>When is an NTM a pathogen?</h4>
    <p>NTM are ubiquitous environmental organisms, so <strong>isolation does not equal disease</strong>. The diagnosis requires compatible symptoms, characteristic imaging and microbiological evidence, with exclusion of TB and other causes. Two imaging patterns dominate: <strong>nodular bronchiectatic</strong> disease, often in older women with bronchiectasis, and <strong>fibrocavitary</strong> disease, often in men with smoking or alcohol use. Hypersensitivity pneumonitis is a separate syndrome. The clinical phenotype matters: not every positive culture in a patient with bronchiectasis requires treatment.</p>
    <h4>Diagnostic criteria</h4>
    <ul>
      <li>Pulmonary symptoms and appropriate imaging.</li>
      <li><strong>Two positive sputum cultures</strong>, or one positive <strong>BAL or tissue culture</strong>, with species identification.</li>
      <li><strong>Exclude TB and malignancy</strong> and other granulomatous disease.</li>
      <li>Assess severity, comorbidity and whether treatment is likely to benefit.</li>
    </ul>
    <p>Species identification is essential because treatment and prognosis differ markedly between NTM species.</p>
    <h4>Treatment</h4>
    <p><strong>MAC</strong> is treated with a macrolide, ethambutol and a rifamycin for at least <strong>12 months after culture conversion</strong>. <strong><em>M. kansasii</em></strong> responds to isoniazid, rifampicin and ethambutol. <strong><em>M. abscessus</em></strong> requires a specialist multidrug regimen and is often incurable without surgery. Monitor for ototoxicity, nephrotoxicity, QT prolongation and hepatotoxicity. Drug interactions with rifamycins are common. Adherence is difficult because regimens are long and poorly tolerated.</p>
    <h4>Deciding not to treat</h4>
    <p><strong>Observation</strong> is reasonable for minimal disease, frailty, poor prognosis or when the risks outweigh benefits. Treat the predisposing condition — bronchiectasis, reflux, immunosuppression — and involve specialist centres. The commonest error is treating a colonising organism; the second is delaying treatment in progressive cavitary disease. Shared decision-making with the patient and a specialist team is essential.</p>
  `,
  tip: "Quote the microbiological criteria precisely, then justify observation as an active decision rather than neglect.",
  sources: ["S9", "S4", "S1"]
},
{
  id: "my27", domain: "mycobacteria", star: true,
  q: "Why is Mycobacterium abscessus so difficult to treat in cystic fibrosis, and how is infection managed?",
  tags: ["M. abscessus", "cystic fibrosis", "erm(41)", "intrinsic resistance"],
  keypoints: ["rapid-growing NTM", "subspecies abscessus massiliense bolletii", "biofilm", "low cell-wall permeability", "inducible erm(41)", "rrl and gyrA mutations", "macrolide if erm-negative", "amikacin", "cefoxitin or imipenem", "prolonged multidrug therapy", "lung resection", "infection control in CF clinics"],
  answer: `
    <h4>Microbiology</h4>
    <p><em>M. abscessus</em> is a <strong>rapid-growing NTM</strong> with three subspecies — <em>abscessus</em>, <em>massiliense</em> and <em>bolletii</em>. It grows in weeks, forms rough and smooth morphotypes, and is found in water, soil and <strong>biofilm</strong>. Smooth variants are often less inflammatory but can persist, while rough variants are associated with more severe disease. In cystic fibrosis it causes chronic airway infection, declining lung function and exacerbations; person-to-person transmission in CF clinics is documented.</p>
    <h4>Why it is so resistant</h4>
    <ul>
      <li><strong>Intrinsic resistance</strong>: <strong>low cell-wall permeability</strong>, efflux pumps, β-lactamase and an <strong>inducible erm(41)</strong> methylase that confers macrolide resistance.</li>
      <li><strong>Acquired resistance</strong>: <strong>rrl and gyrA mutations</strong> after prolonged exposure.</li>
      <li><strong>Biofilm</strong> growth and intracellular survival reduce drug efficacy.</li>
      <li>Only a few drugs are active: <strong>macrolide if erm-negative</strong>, <strong>amikacin</strong>, <strong>cefoxitin or imipenem</strong>, tigecycline, linezolid, clofazimine.</li>
    </ul>
    <h4>Diagnosis and treatment</h4>
    <p>Culture and subspecies identification guide therapy; <strong>erm(41)</strong> sequencing predicts inducible macrolide resistance, and susceptibility testing is essential. Treatment is <strong>prolonged multidrug therapy</strong>, often for more than a year after culture conversion, with monitoring for ototoxicity, nephrotoxicity, myelosuppression and QT prolongation. <strong>Lung resection</strong> may be considered in selected patients, and transplant assessment is relevant in advanced CF. <strong>Infection control in CF clinics</strong> — cohorting, cleaning and separation of patients — is critical.</p>
    <h4>The clinical lesson</h4>
    <p><em>M. abscessus</em> illustrates the limits of antibiotics: resistance is intrinsic and inducible, cure is uncommon, and the host's lung disease determines outcome. Early specialist involvement and realistic goals — symptom control, slowing decline, transplant evaluation — are as important as the drug list.</p>
  `,
  tip: "Explain resistance at three levels — intrinsic, inducible and acquired — before listing drugs.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "my28", domain: "mycobacteria",
  q: "Discuss stigma and adherence in tuberculosis care and the patient-centred interventions that improve outcomes.",
  tags: ["stigma", "adherence", "patient-centred care", "DOT"],
  keypoints: ["enacted stigma", "anticipated stigma", "internalised stigma", "delayed diagnosis", "non-disclosure", "loss to follow-up", "pill burden", "side effects", "transport costs", "fixed-dose combinations", "video-supported therapy", "SMS reminders", "treatment supporters", "confidential counselling", "stigma as a clinical risk factor"],
  answer: `
    <h4>How stigma works</h4>
    <p>TB stigma is the devaluation of people with the disease, driven by fear of contagion, association with HIV, poverty, crowding and visible symptoms such as chronic cough and weight loss. It operates as <strong>enacted stigma</strong> (discrimination), <strong>anticipated stigma</strong> (fear of disclosure) and <strong>internalised stigma</strong> (shame). Health workers can unintentionally reinforce it through separate queues, public labelling or judgemental questioning.</p>
    <h4>Consequences</h4>
    <ul>
      <li><strong>Delayed diagnosis</strong> and more advanced disease at presentation.</li>
      <li><strong>Non-disclosure</strong> to family and employers; loss of income and social support.</li>
      <li>Poor adherence, missed appointments and <strong>loss to follow-up</strong>.</li>
      <li>Depression, anxiety and reduced quality of life.</li>
      <li>Reluctance to accept preventive treatment or contact investigation.</li>
    </ul>
    <h4>Adherence is not just willpower</h4>
    <p>Adherence depends on <strong>pill burden</strong>, <strong>side effects</strong>, food requirements, <strong>transport costs</strong>, work obligations, family support and trust in the clinic. Measuring it is imperfect: self-report overestimates, pill counts can be manipulated, and pharmacy refills are indirect. Effective support includes <strong>fixed-dose combinations</strong>, directly observed or <strong>video-supported therapy</strong>, <strong>SMS reminders</strong>, <strong>treatment supporters</strong>, transport vouchers and decentralised care. Punitive approaches worsen engagement.</p>
    <h4>Patient-centred practice</h4>
    <p>Use <strong>confidential counselling</strong> that is non-judgemental; explain the disease and treatment in plain language; involve the patient in decisions; screen for depression and substance use; and address food, housing and income. Training health workers and providing private spaces reduce stigma. Peer supporters and TB survivor groups can reduce isolation and improve retention. <strong>Stigma is a clinical risk factor</strong>, not a soft issue: it predicts delay, default and poor outcomes, and it must be measured and managed like any other barrier.</p>
  `,
  tip: "Define the three forms of stigma, then link each to a measurable outcome and a concrete intervention.",
  sources: ["S6", "S11", "S4"]
},
{
  id: "my29", domain: "mycobacteria",
  q: "Discuss host genetic susceptibility to mycobacterial disease, including mendelian susceptibility, common variants and anti-IFN-γ autoantibodies.",
  tags: ["host genetics", "MSMD", "IFN-gamma", "anti-IFN-gamma"],
  keypoints: ["IL-12/IFN-gamma axis", "IL12B", "IL12RB1", "IFNGR1", "IFNGR2", "STAT1", "ISG15", "NEMO", "disseminated BCG", "recurrent NTM", "HLA", "SLC11A1 NRAMP1", "anti-IFN-gamma autoantibodies", "avoid live vaccines", "haematopoietic stem cell transplantation"],
  answer: `
    <h4>Mendelian susceptibility to mycobacterial disease</h4>
    <p>Rare inborn errors of the <strong>IL-12/IFN-γ axis</strong> cause disseminated BCG, NTM and <em>Salmonella</em> infections. Defects include <strong>IL12B, IL12RB1, IFNGR1, IFNGR2, STAT1, ISG15</strong> and NEMO. They impair macrophage activation and granuloma formation. The clinical clue is severe, recurrent or disseminated mycobacterial disease after BCG or environmental exposure, often with a family history. The age of onset and severity vary with the specific defect and its effect on IFN-γ signalling.</p>
    <h4>Common variants and polygenic susceptibility</h4>
    <p>Genome-wide association studies have identified modest effects at <strong>HLA</strong>, <strong>SLC11A1 (NRAMP1)</strong>, VDR, TNF, IL-10 and Toll-like receptor loci. These variants do not diagnose disease; they illustrate that TB susceptibility is polygenic and environment-dependent. The strongest single host factor remains HIV, followed by malnutrition, diabetes and immunosuppressive therapy.</p>
    <h4>Anti-IFN-γ autoantibodies</h4>
    <p>Adults, particularly in Southeast Asia, may develop <strong>neutralising anti-IFN-γ autoantibodies</strong>, causing disseminated NTM, <em>Talaromyces</em>, <em>Cryptococcus</em> and other intracellular infections. This is an acquired immunodeficiency that can be mistaken for TB or lymphoma. Diagnosis requires measuring anti-IFN-γ antibodies; management includes treating the infection and sometimes immunomodulation.</p>
    <h4>Clinical implications</h4>
    <p>Suspect a genetic defect in the following situations:</p>
    <ul>
      <li>Disseminated BCGosis or recurrent NTM disease.</li>
      <li>Unusual mycobacterial infection with a family history.</li>
      <li>Need to <strong>avoid live vaccines</strong> and investigate the immune pathway.</li>
      <li>Family counselling and consideration of <strong>haematopoietic stem cell transplantation</strong> in severe defects.</li>
    </ul>
    <p>Genetic testing is most informative when guided by the clinical phenotype. For most patients, however, the practical message is that host immunity — not the organism alone — determines whether infection is contained or disseminated.</p>
  `,
  tip: "Separate rare monogenic MSMD from common polygenic susceptibility, and add anti-IFN-γ autoantibodies as the acquired mimic.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "my30", domain: "mycobacteria", star: true,
  q: "Discuss the diagnosis and management of tuberculosis in patients with chronic kidney disease and on dialysis.",
  tags: ["CKD", "dialysis", "TB treatment", "drug dosing"],
  keypoints: ["uraemic immunosuppression", "extrapulmonary disease", "sputum Xpert and culture", "TST and IGRA less reliable", "2HRZE/4HR", "isoniazid and rifampicin hepatically cleared", "ethambutol and pyrazinamide accumulate", "avoid streptomycin", "pyridoxine", "drug interactions with immunosuppressants", "screen and treat latent TB before transplant", "dialysis unit infection control"],
  answer: `
    <h4>Why CKD matters</h4>
    <p>Chronic kidney disease causes <strong>uraemic immunosuppression</strong>, malnutrition and inflammation, and diabetes is a common cause. TB risk is increased, and <strong>extrapulmonary disease</strong> is more frequent. Diagnosis is often delayed because symptoms overlap with uraemia, and dialysis units can amplify transmission if cases are not recognised. Dialysis patients also have frequent hospital contact, which is an opportunity for screening.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li>Send <strong>sputum Xpert and culture</strong>; induce sputum or use BAL when needed.</li>
      <li>Image the chest and investigate extrapulmonary sites, including lymph node, pleura and peritoneum.</li>
      <li><strong>TST and IGRA are less reliable</strong> in advanced CKD and dialysis, so a negative test does not exclude infection.</li>
      <li>Test for HIV, diabetes and hepatitis, and assess nutrition.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Use standard <strong>2HRZE/4HR</strong> for drug-susceptible TB. <strong>Isoniazid and rifampicin usually need no renal adjustment</strong>; give <strong>pyridoxine</strong> to prevent isoniazid neuropathy. <strong>Ethambutol and pyrazinamide accumulate</strong> in renal failure, so doses are adjusted or the drugs are avoided according to local guidance, with monitoring for optic neuritis and hepatotoxicity. <strong>Avoid streptomycin</strong> because of nephrotoxicity and ototoxicity. Coordinate dosing with the dialysis schedule, and review <strong>drug interactions with immunosuppressants</strong> — rifampicin lowers calcineurin-inhibitor levels.</p>
    <h4>Prevention and transplant</h4>
    <p><strong>Screen and treat latent TB before transplant</strong>, and exclude active disease in donors and recipients. Post-transplant immunosuppression increases reactivation risk, so surveillance and prompt investigation are essential. <strong>Dialysis unit infection control</strong> — triage, separation of suspected cases, ventilation and N95 respirators — protects other patients and staff. A high index of suspicion is the most important diagnostic tool. Vaccination and nutrition support are part of prevention.</p>
  `,
  tip: "The two renal-specific points are ethambutol/pyrazinamide accumulation and pre-transplant latent TB screening.",
  sources: ["S6", "S9", "S11"]
}
);
