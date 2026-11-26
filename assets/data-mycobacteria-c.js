/* Mycobacteria — advanced essays, part C: Philippine programme, prevention and adjunctive care */
window.QBANK.push(
{
  id: "my31", domain: "mycobacteria", star: true,
  q: "Using the DOH National Tuberculosis Control Program Manual of Procedures (6th edition), describe the Philippine TB diagnostic and notification cascade and explain why case notification still falls short of estimated incidence.",
  tags: ["Philippine NTP", "MOP 6th edition", "case notification", "ITIS"],
  keypoints: ["NTP Manual of Procedures 6th edition", "presumptive TB", "rapid molecular test as initial diagnostic", "DOTS", "fixed-dose combinations", "Integrated TB Information System", "case-based notification", "6.8% of global TB cases", "more than 700,000 estimated cases", "46% bacteriologically confirmed", "treatment coverage gap", "PMDT referral", "contact investigation", "single patient record", "cascade audit", "private sector notification"],
  answer: `
    <h4>The manual as the operational standard</h4>
    <p>The <strong>NTP Manual of Procedures, 6th edition (2020)</strong> converts national policy into facility-level tasks: whom to screen, which specimen to collect, how to notify, how to treat and how to report the outcome. It defines <strong>presumptive TB</strong>, recommends a <strong>rapid molecular test</strong> as the initial diagnostic, and standardises <strong>DOTS</strong>, fixed-dose combinations, treatment partners and cohort review. District, provincial and regional supervisors use its indicators to audit performance.</p>
    <h4>The Philippine burden</h4>
    <p>The Philippines contributes about <strong>6.8% of global TB cases</strong>, ranking behind India and Indonesia in the 2025 WHO report. Estimated incident cases exceed <strong>700,000 per year</strong>, while notifications remain substantially lower and only about <strong>46% of notified cases are bacteriologically confirmed</strong>. The gap widened during COVID-19 and has not fully closed, so many patients are treated empirically or never reach care.</p>
    <h4>The cascade, step by step</h4>
    <ul>
      <li><strong>Find</strong> — symptom screening at barangay health stations, rural health units and hospitals; active case finding among contacts, people with HIV, diabetes, incarceration or malnutrition.</li>
      <li><strong>Test</strong> — sputum Xpert MTB/RIF Ultra, with culture and drug-susceptibility testing when resistance is suspected; refer extrapulmonary specimens appropriately.</li>
      <li><strong>Notify</strong> — case-based entry into the <strong>Integrated TB Information System (ITIS)</strong> with a unique identifier to prevent duplication.</li>
      <li><strong>Treat</strong> — 2HRZE/4HR under direct observation or video-supported therapy; preventive treatment for eligible contacts; PMDT referral for RR/MDR-TB.</li>
      <li><strong>Report</strong> — smear and culture conversion, treatment outcome and contact investigation.</li>
    </ul>
    <h4>Why notification falls short</h4>
    <p>Private practitioners may treat without notifying; patients are lost before diagnosis; results may never reach the prescriber; and stigma and out-of-pocket costs delay presentation. The manual's remedy is a <strong>single patient record</strong>, closed referral loops and routine cascade audit. For the laboratory, a correct result is not a public-health outcome until it is reported, acted on and counted.</p>
  `,
  tip: "Follow one patient through find, test, notify, treat and report — the cascade, not the burden figure, is what the question asks you to explain.",
  sources: ["S27", "S33", "S6"]
},
{
  id: "my32", domain: "mycobacteria", star: true,
  q: "Explain the policy content and implementation challenges of Republic Act No. 10767, the Comprehensive Tuberculosis Elimination Plan Act.",
  tags: ["RA 10767", "health policy", "devolution", "TB elimination"],
  keypoints: ["Comprehensive Tuberculosis Elimination Plan Act", "state policy", "national TB elimination plan", "DOH lead agency", "inter-agency coordination", "local government units", "PhilHealth benefits", "mandatory notification", "quality-assured diagnosis", "equity", "geographically isolated disadvantaged areas", "procurement delays", "private provider notification", "lost-income costs", "disaggregated monitoring"],
  answer: `
    <h4>What the law requires</h4>
    <p>Republic Act No. 10767, the <strong>Comprehensive Tuberculosis Elimination Plan Act</strong> of 2016, declares TB elimination a state policy. It mandates a <strong>national TB elimination plan</strong> with measurable targets, designates the <strong>DOH as lead agency</strong>, and requires inter-agency and local-government participation. TB is framed as a multi-sectoral problem involving health, education, housing, labour and social welfare, not merely a hospital diagnosis.</p>
    <h4>Key provisions</h4>
    <div class="table-wrap"><table>
      <tr><th>Domain</th><th>What the Act mandates</th></tr>
      <tr><td>Planning</td><td>National elimination plan integrated with local investment plans</td></tr>
      <tr><td>Service access</td><td>Quality-assured diagnosis and treatment, with patient support</td></tr>
      <tr><td>Financing</td><td>Budgetary support and social protection, including PhilHealth benefits</td></tr>
      <tr><td>Surveillance</td><td>Mandatory notification and programme monitoring</td></tr>
      <tr><td>Governance</td><td>Inter-agency coordination and LGU accountability</td></tr>
    </table></div>
    <h4>Why implementation is uneven</h4>
    <p>Devolution places front-line delivery with <strong>local government units</strong> whose budgets, laboratory capacity and political priorities differ. Procurement of cartridges and second-line drugs can stall; private providers may not notify; and patients still bear transport, food and lost-income costs. Stigma and low health literacy suppress demand. Local chief executives control contracts and staffing, so a change in leadership can interrupt a programme. The law creates the mandate but not automatically the operational capacity to fulfil it.</p>
    <h4>What a laboratory professional should take from it</h4>
    <p>Quality-assured testing, timely reporting and participation in programme review are legal as well as technical obligations. The Act's emphasis on <strong>equity</strong> means that access to Xpert, drug-susceptibility testing and treatment support must be planned for geographically isolated and disadvantaged areas, not only tertiary centres. Monitoring should be disaggregated by region, age, sex and resistance status so that gaps become visible, costed and fundable.</p>
  `,
  tip: "Separate the legal mandate from the delivery system: the Act creates duties, while devolution and procurement determine whether they are met.",
  sources: ["S33", "S27", "S26"]
},
{
  id: "my33", domain: "mycobacteria", star: true,
  q: "Describe the Philippine Programmatic Management of Drug-Resistant TB (PMDT): how cases are detected, treated and monitored, and what limits its effectiveness.",
  tags: ["PMDT", "MDR-TB", "Philippines", "BPaLM"],
  keypoints: ["high-burden MDR/RR-TB country", "rifampicin resistance on Xpert", "fluoroquinolone testing", "line probe assay", "culture and phenotypic DST", "PMDT sites", "all-oral shorter regimens", "BPaLM where eligible", "treatment partners", "ECG monitoring", "pharmacovigilance", "geographic barriers", "laboratory turnaround", "stockouts", "contact investigation"],
  answer: `
    <h4>Scale and case-finding</h4>
    <p>The Philippines is on the WHO high-burden lists for TB, HIV-associated TB and MDR/RR-TB. Drug-resistant TB emerges through inadequate regimens, poor adherence, substandard drugs and transmission. Detection begins with <strong>Xpert MTB/RIF Ultra</strong>; every rifampicin-resistant result should trigger <strong>fluoroquinolone and second-line testing</strong> by line probe assay or culture at the National TB Reference Laboratory or its satellite laboratories. Only a fraction of estimated MDR/RR-TB cases are diagnosed and started on treatment.</p>
    <h4>The PMDT model</h4>
    <div class="table-wrap"><table>
      <tr><th>Function</th><th>Philippine arrangement</th></tr>
      <tr><td>Diagnosis</td><td>Xpert Ultra, line probe assay, culture and phenotypic DST</td></tr>
      <tr><td>Treatment</td><td>Designated PMDT sites and satellite clinics; all-oral shorter regimens where eligible</td></tr>
      <tr><td>Adherence</td><td>Direct observation, treatment partners, transport and food support</td></tr>
      <tr><td>Monitoring</td><td>ECG, full blood count, liver and renal tests, vision and hearing</td></tr>
      <tr><td>Safety</td><td>Active pharmacovigilance for bedaquiline, linezolid and clofazimine</td></tr>
    </table></div>
    <h4>What limits effectiveness</h4>
    <ul>
      <li><strong>Geography</strong> — thousands of islands and long referral times.</li>
      <li><strong>Laboratory turnaround</strong> — culture and DST may take weeks.</li>
      <li><strong>Supply</strong> — cartridge, drug and equipment stockouts.</li>
      <li><strong>Human resources</strong> — few trained DR-TB clinicians and laboratory staff.</li>
      <li><strong>Social barriers</strong> — stigma, cost, imprisonment, HIV and diabetes.</li>
    </ul>
    <h4>Improving outcomes</h4>
    <p>Same-day molecular testing, baseline DST for every RR-TB case, shorter all-oral regimens such as BPaLM where DOH criteria are met, active contact investigation, and real-time case-based registers would narrow the gap. Integration with HIV, diabetes and primary care keeps patients in the cascade. NTP and PMDT registers should be reconciled so that every resistant result has a documented treatment start date. The programme's weakest link is rarely the regimen on paper; it is the distance between a resistant result and a patient who actually receives the right drugs.</p>
  `,
  tip: "Trace a resistant result from Xpert to second-line DST to a PMDT site — the gaps in that journey are the answer.",
  sources: ["S27", "S31", "S33", "S6"]
},
{
  id: "my34", domain: "mycobacteria", star: true,
  q: "Trace the rollout of Xpert MTB/RIF in the Philippines, the role of the National TB Reference Laboratory, and the operational problems that persist at point of care.",
  tags: ["Xpert MTB/RIF", "NTRL", "RITM", "point-of-care"],
  keypoints: ["rpoB rifampicin resistance", "smear-negative disease", "WHO initial diagnostic", "GeneXpert sites", "Xpert Ultra", "Truenat", "specimen referral network", "NTRL at RITM", "external quality assessment", "cartridge stockouts", "module failure", "invalid rate", "result linkage", "same-day treatment"],
  answer: `
    <h4>Why the platform mattered</h4>
    <p>Xpert MTB/RIF detects <em>M. tuberculosis</em> complex and the <strong>rpoB</strong> rifampicin-resistance mutations in about two hours, with better sensitivity than smear microscopy in smear-negative, paediatric and HIV-associated disease. WHO recommends a rapid molecular test as the initial diagnostic, so the platform moved TB diagnosis from a weeks-long culture pathway to a same-day decision.</p>
    <h4>How the Philippine rollout was organised</h4>
    <p>National rollout began in the early 2010s and expanded through DOH and NTP partnerships, placing GeneXpert instruments in regional, provincial and selected district hospitals. The <strong>National TB Reference Laboratory at RITM</strong> provided technical leadership, confirmatory testing and oversight, while specimen referral networks connected peripheral facilities to molecular sites. Newer Xpert Ultra cartridges and Truenat platforms extended access to more remote areas.</p>
    <h4>The NTRL function</h4>
    <ul>
      <li>Reference culture, identification and phenotypic drug-susceptibility testing.</li>
      <li>Line probe assay and molecular confirmation of resistance.</li>
      <li>External quality assessment panels, validation and troubleshooting.</li>
      <li>Training, biosafety guidance and equipment monitoring.</li>
      <li>Surveillance and genotyping support for outbreaks.</li>
    </ul>
    <h4>Persistent operational problems</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Effect</th><th>Mitigation</th></tr>
      <tr><td>Cartridge stockouts</td><td>Testing stops despite demand</td><td>Buffer stock, consumption forecasting</td></tr>
      <tr><td>Module failure and power cuts</td><td>Invalid or delayed results</td><td>Preventive maintenance, backup power</td></tr>
      <tr><td>Staff turnover</td><td>Inconsistent technique</td><td>Recurrent training and competency checks</td></tr>
      <tr><td>Weak result linkage</td><td>Diagnosis without treatment</td><td>Courier, SMS and registry feedback</td></tr>
    </table></div>
    <h4>The point-of-care lesson</h4>
    <p>A molecular result changes outcomes only when it reaches the prescriber and the patient the same day. Connectivity, transport, treatment initiation and monitoring of invalid rates are therefore part of the test's clinical performance, not administrative afterthoughts. Supplier agreements and a national maintenance plan determine whether instruments remain functional between replacements.</p>
  `,
  tip: "Balance the technical advance with the operational chain: cartridge, module, specimen, result and treatment must all move.",
  sources: ["S31", "S27", "S6"]
},
{
  id: "my35", domain: "mycobacteria", star: true,
  q: "Compare the Philippine TB/HIV and leprosy control challenges, and explain how integrated, stigma-sensitive services improve outcomes.",
  tags: ["TB/HIV", "leprosy", "Philippines", "integration"],
  keypoints: ["fast-growing HIV epidemic", "MSM and transgender women", "TB leading cause of death in HIV", "Xpert Ultra", "urine LF-LAM", "ART within 2-8 weeks", "dolutegravir dose adjustment", "co-trimoxazole prophylaxis", "IRIS", "leprosy new cases", "grade-2 disability", "multidrug therapy", "single-dose rifampicin prophylaxis", "nerve function assessment", "confidential counselling", "integrated primary care"],
  answer: `
    <h4>Two mycobacterial problems</h4>
    <p>The Philippines has one of the fastest-growing HIV epidemics in the Western Pacific, concentrated among men who have sex with men and transgender women. TB is a leading cause of death in people living with HIV, and co-infection is often diagnosed late. Leprosy persists at roughly <strong>1,500–2,000 new cases per year</strong>, with cases still reported in Metro Manila, Central Luzon and other endemic provinces; grade-2 disability at diagnosis signals delayed detection.</p>
    <h4>TB/HIV collaborative activities</h4>
    <ul>
      <li>Test every TB patient for HIV, and screen every person with HIV for TB at each visit.</li>
      <li>Use Xpert Ultra and, in advanced HIV, urine LF-LAM; obtain extrapulmonary specimens when needed.</li>
      <li>Start ART within 2–8 weeks, earlier if CD4 is low; adjust dolutegravir to twice daily with rifampicin.</li>
      <li>Give co-trimoxazole prophylaxis and TB preventive treatment after excluding active disease.</li>
      <li>Recognise paradoxical IRIS and exclude treatment failure or new infection.</li>
    </ul>
    <h4>Leprosy control</h4>
    <p>Multidrug therapy is free through the National Leprosy Control Program, and single-dose rifampicin is used for post-exposure prophylaxis of contacts. Nerve function assessment, eye and foot care, footwear and rehabilitation prevent permanent disability. Stigma remains the main reason people present late, so confidential counselling and community education are clinical interventions.</p>
    <h4>Integration and equity</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>TB/HIV</th><th>Leprosy</th></tr>
      <tr><td>Main route</td><td>Airborne droplet nuclei</td><td>Prolonged respiratory contact</td></tr>
      <tr><td>Diagnostic anchor</td><td>Xpert, HIV test, LF-LAM</td><td>Skin and nerve examination, slit-skin smear</td></tr>
      <tr><td>Stigma driver</td><td>Contagion, HIV disclosure</td><td>Deformity, fear of exclusion</td></tr>
      <tr><td>Programme gap</td><td>Late HIV diagnosis, treatment linkage</td><td>Delayed case-finding, disability</td></tr>
    </table></div>
    <p>Shared community health workers, confidential records and integrated primary-care visits reduce the number of times a patient must disclose illness to receive care. Both diseases expose the same truth: stigma is a barrier to diagnosis, and diagnosis is the first step to prevention.</p>
  `,
  tip: "Compare the two programmes on route, diagnostic anchor, stigma driver and programme gap, then show where integration saves a visit.",
  sources: ["S27", "S31", "S33", "S26"]
},
{
  id: "my36", domain: "mycobacteria", star: true,
  q: "Compare the evidence-based regimens for latent tuberculosis infection and explain how the Philippine NTP selects and delivers preventive treatment.",
  tags: ["LTBI", "3HP", "4R", "TPT"],
  keypoints: ["exclude active TB first", "household contacts", "children under five", "people with HIV", "3HP", "4R", "3HR", "6H or 9H", "1HP", "rifamycin interactions", "hepatotoxicity", "pyridoxine", "TST and IGRA limited availability", "completion", "Philippine NTP child contacts", "supply reliability"],
  answer: `
    <h4>Who should be offered preventive treatment</h4>
    <p>TB preventive treatment (TPT) is offered after active TB is excluded. Priority groups include <strong>household contacts</strong>, especially children under five, people with HIV, silicosis, dialysis, transplant or anti-TNF candidates, recent tuberculin converters and prison or health-care workers. The Philippine NTP emphasises child contacts and people with HIV, for whom TPT is part of routine care.</p>
    <h4>Regimens</h4>
    <div class="table-wrap"><table>
      <tr><th>Regimen</th><th>Composition and duration</th><th>Key point</th></tr>
      <tr><td><strong>3HP</strong></td><td>Isoniazid plus rifapentine weekly for 12 weeks</td><td>High completion; watch interactions and flu-like reactions</td></tr>
      <tr><td><strong>4R</strong></td><td>Rifampicin daily for 4 months</td><td>Rifamycin interactions; hepatotoxicity</td></tr>
      <tr><td><strong>3HR</strong></td><td>Isoniazid plus rifampicin daily for 3 months</td><td>Intermediate duration; daily supervision</td></tr>
      <tr><td><strong>6H or 9H</strong></td><td>Isoniazid daily for 6 or 9 months</td><td>Cheapest and familiar; longest duration</td></tr>
      <tr><td><strong>1HP</strong></td><td>Isoniazid plus rifapentine daily for 1 month</td><td>Emerging short option; limited local experience</td></tr>
    </table></div>
    <h4>Philippine delivery</h4>
    <p>NTP guidance requires symptom screening, chest radiography when indicated, and exclusion of active TB before starting. TST and IGRA are useful but not universally available, so exposure history and clinical assessment carry weight. Rifampicin-based regimens require screening for ART interactions, pregnancy and liver disease. Pyridoxine is given with isoniazid, especially in pregnancy, malnutrition and diabetes.</p>
    <h4>Safety and programme choice</h4>
    <p>Hepatotoxicity, alcohol use, age and drug interactions determine the choice as much as efficacy. Completion matters more than the theoretical superiority of one regimen. Education about symptoms, documented follow-up and supply reliability turn a trial-proven regimen into a programme that prevents disease. Programmes should track initiation and completion, not only prescriptions issued, because dropout erases the benefit of a short regimen.</p>
  `,
  tip: "Rank regimens by duration, completion, interactions and cost — then state the non-negotiable step of excluding active TB.",
  sources: ["S27", "S6", "S9", "S11"]
},
{
  id: "my37", domain: "mycobacteria", star: true,
  q: "Why are non-tuberculous mycobacteria increasingly recognised in the Philippines, and how should pulmonary NTM disease be diagnosed and treated?",
  tags: ["NTM", "MAC", "M. abscessus", "bronchiectasis"],
  keypoints: ["environmental organisms", "isolation is not disease", "acid-fast smear cannot distinguish", "post-TB bronchiectasis", "nodular bronchiectatic pattern", "fibrocavitary pattern", "two positive sputum cultures", "BAL or tissue culture", "species identification", "M. avium complex", "M. kansasii", "M. abscessus", "erm(41)", "12 months after culture conversion", "NTRL referral", "avoid treating colonisation"],
  answer: `
    <h4>The diagnostic dilemma</h4>
    <p>Non-tuberculous mycobacteria are environmental organisms found in water, soil and biofilms; they are not usually transmitted person to person. In the Philippines, where TB is common, an acid-fast smear cannot distinguish NTM from <em>M. tuberculosis</em>, and a positive culture may be reported without species identification. Post-TB bronchiectasis, COPD, cystic fibrosis and immunosuppression create the structural lung disease in which NTM flourish.</p>
    <h4>When to suspect and how to confirm</h4>
    <p>Suspect NTM in chronic cough, sputum production and fatigue with nodular bronchiectatic or fibrocavitary imaging, especially when repeated smears are positive but TB tests are negative. Diagnosis requires compatible symptoms and imaging plus <strong>two positive sputum cultures</strong>, or one positive BAL or tissue culture, with species identification and exclusion of TB and malignancy.</p>
    <h4>Treatment</h4>
    <div class="table-wrap"><table>
      <tr><th>Organism</th><th>Core regimen</th><th>Comment</th></tr>
      <tr><td><em>M. avium</em> complex</td><td>Macrolide plus ethambutol, often with a rifamycin</td><td>At least 12 months after culture conversion</td></tr>
      <tr><td><em>M. kansasii</em></td><td>Isoniazid, rifampicin and ethambutol</td><td>Usually 12 months; generally drug-susceptible</td></tr>
      <tr><td><em>M. abscessus</em></td><td>Species and <em>erm(41)</em>-guided multidrug regimen</td><td>Specialist care; often incurable without surgery</td></tr>
    </table></div>
    <h4>Philippine service implications</h4>
    <ul>
      <li>Culture and species identification are the bottleneck; refer to the NTRL or a tertiary laboratory.</li>
      <li>Susceptibility testing for macrolides and amikacin guides therapy.</li>
      <li>Treat predisposing disease and avoid treating colonisation.</li>
      <li>Monitor ototoxicity, nephrotoxicity, QT prolongation and hepatotoxicity.</li>
    </ul>
    <p>The commonest error is to label every acid-fast organism as TB; the second is to treat a colonising NTM in a frail patient. Shared decision-making and specialist input matter because regimens are long, toxic and often only partly effective.</p>
  `,
  tip: "Apply the microbiological criteria before discussing drugs, because the hardest decision in NTM disease is whether to treat at all.",
  sources: ["S31", "S9", "S4", "S32"]
},
{
  id: "my38", domain: "mycobacteria", star: true,
  q: "Assess the current and pipeline tuberculosis vaccines and explain what a high-burden country like the Philippines needs from a future vaccine.",
  tags: ["BCG", "M72/AS01E", "vaccines", "prevention"],
  keypoints: ["BCG live attenuated M. bovis", "severe childhood TB", "variable adult efficacy", "BCGosis in immunodeficiency", "no correlate of protection", "latency", "M72/AS01E", "VPM1002", "MTBVAC", "BCG revaccination", "phase 3 trials", "affordable", "cold chain", "complement not replacement", "TPT remains essential"],
  answer: `
    <h4>BCG: what it does and does not do</h4>
    <p>BCG is a live attenuated <em>M. bovis</em> vaccine given intradermally at birth under the National Immunization Program. It protects infants and young children against <strong>disseminated and meningeal TB</strong>, but efficacy against adult pulmonary disease is variable and generally poor. It is contraindicated in severe immunodeficiency, where it can cause BCGosis, and it complicates tuberculin skin testing.</p>
    <h4>Why development is difficult</h4>
    <ul>
      <li>No validated correlate of protection; interferon-gamma responses do not predict efficacy.</li>
      <li>Latency and immune evasion allow bacilli to persist in granulomas.</li>
      <li>BCG priming and environmental mycobacteria alter responses to boosters.</li>
      <li>Trials need tens of thousands of participants and years of follow-up.</li>
      <li>Animal models poorly predict human protection.</li>
    </ul>
    <h4>The pipeline</h4>
    <div class="table-wrap"><table>
      <tr><th>Candidate</th><th>Platform</th><th>Status</th></tr>
      <tr><td><strong>M72/AS01E</strong></td><td>Adjuvanted fusion protein</td><td>Phase 3; about 50% protection in phase 2b</td></tr>
      <tr><td><strong>VPM1002</strong></td><td>Recombinant BCG</td><td>Trials in infants and adults</td></tr>
      <tr><td><strong>MTBVAC</strong></td><td>Attenuated <em>M. tuberculosis</em></td><td>Trials, including newborn priming</td></tr>
      <tr><td><strong>BCG revaccination</strong></td><td>Repeat BCG</td><td>Being evaluated in adolescents</td></tr>
    </table></div>
    <h4>What the Philippines needs</h4>
    <p>A useful vaccine must reduce adult pulmonary TB and transmission, boost or replace BCG safely, need few doses, remain potent in a tropical cold chain and be affordable. Trial sites need strong community engagement and reliable diagnostics, and local ethics committees must be ready before phase 3 sites open. Manufacturing and regulatory capacity also matter, because a licensed vaccine that cannot be procured affordably will not change the epidemic. A vaccine will complement, not replace, case finding, TPT and treatment. Until one is licensed, BCG at birth and preventive treatment remain the available prevention tools.</p>
  `,
  tip: "State BCG's exact niche first, then judge candidates against the attributes a Philippine programme can actually deliver.",
  sources: ["S6", "S9", "S11", "S27"]
},
{
  id: "my39", domain: "mycobacteria", star: true,
  q: "How should therapeutic drug monitoring be applied to second-line and newer anti-TB drugs, and what are the practical constraints in a Philippine reference laboratory?",
  tags: ["TDM", "bedaquiline", "linezolid", "DR-TB"],
  keypoints: ["pharmacokinetic variability", "narrow therapeutic index", "bedaquiline QT prolongation", "linezolid myelosuppression", "moxifloxacin QT", "aminoglycoside nephrotoxicity", "trough sampling", "record dose time", "interpret with MIC", "targeted not routine", "NTRL and RITM referral", "LC-MS/MS", "cold-chain transport", "limited validated targets", "change a decision"],
  answer: `
    <h4>Which drugs and why</h4>
    <p>Second-line and newer anti-TB drugs show large pharmacokinetic variability, and some have narrow therapeutic windows. <strong>Bedaquiline</strong> prolongs the QT interval; <strong>linezolid</strong> causes myelosuppression and neuropathy; <strong>clofazimine</strong> accumulates and causes pigmentation and QT effects; <strong>moxifloxacin</strong> adds QT risk; aminoglycosides cause nephrotoxicity and ototoxicity. HIV, diabetes, renal failure, pregnancy, children, malabsorption and rifamycin interactions all alter exposure.</p>
    <h4>Sampling and interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Usual sample</th><th>Main concern</th></tr>
      <tr><td>Bedaquiline</td><td>Trough, steady state</td><td>QT prolongation, hepatotoxicity</td></tr>
      <tr><td>Linezolid</td><td>Trough</td><td>Myelosuppression, neuropathy</td></tr>
      <tr><td>Moxifloxacin</td><td>Peak or AUC-guided</td><td>QT prolongation, tendinopathy</td></tr>
      <tr><td>Aminoglycosides</td><td>Peak and trough</td><td>Nephrotoxicity, ototoxicity</td></tr>
    </table></div>
    <p>Record the exact dose time, because a level without a time is uninterpretable. Compare with the laboratory's validated target and the organism's MIC, then integrate adherence, drug interactions and the clinical course. A single result rarely justifies a major change.</p>
    <h4>Philippine constraints</h4>
    <p>Routine TDM is unavailable in most TB programmes. Referral to the NTRL, RITM or a tertiary pharmacology laboratory is possible but slow and costly; LC-MS/MS capacity, cold-chain transport and trained interpreters are limited. Targets are not validated for every drug, and evidence that routine monitoring improves outcomes is modest.</p>
    <h4>A rational approach</h4>
    <p>Use TDM when the clinical question is clear: suspected malabsorption, treatment failure, toxicity, renal or hepatic impairment, or a major interaction. It is <strong>targeted, not routine</strong>. The result should change a decision — dose, formulation, timing or regimen — and be documented so that the next clinician can act on it. Reports should include the sampling time and the assay's uncertainty, so that clinicians do not over-interpret small differences.</p>
  `,
  tip: "Name the drug-specific toxicity, the correct sample timing and the one clinical question that justifies the test.",
  sources: ["S31", "S12", "S6", "S32"]
},
{
  id: "my40", domain: "mycobacteria", star: true,
  q: "Explain host-directed therapy for tuberculosis: rationale, leading candidates, evidence, and the risks of premature adoption.",
  tags: ["host-directed therapy", "metformin", "corticosteroids", "adjunctive"],
  keypoints: ["host response determines outcome", "excessive inflammation", "cavitation and IRIS", "adjunct not replacement", "corticosteroids in TB meningitis", "metformin AMPK and autophagy", "vitamin D", "repurposed anti-inflammatory drugs", "small trials", "surrogate endpoints", "immunomodulation harm", "rifampicin interactions", "Philippine research capacity", "ethical oversight", "fundamentals remain"],
  answer: `
    <h4>Rationale</h4>
    <p>TB outcomes depend on the host as much as the organism. An excessive inflammatory response drives cavitation, tissue destruction, IRIS and post-TB lung disease, while weak macrophage activation permits persistence. <strong>Host-directed therapy (HDT)</strong> aims to modulate immunity or inflammation as an <strong>adjunct</strong> to effective antibiotics — shortening treatment, improving killing, reducing damage or preventing IRIS. It is not a substitute for drug-susceptibility-guided chemotherapy.</p>
    <h4>Leading candidates</h4>
    <div class="table-wrap"><table>
      <tr><th>Approach</th><th>Proposed mechanism</th><th>Evidence</th></tr>
      <tr><td>Corticosteroids</td><td>Reduce inflammation and oedema</td><td>Established in TB meningitis; used in pericarditis to reduce constriction</td></tr>
      <tr><td>Metformin</td><td>AMPK activation, autophagy, reduced inflammation</td><td>Observational and trial signals; adjunct only</td></tr>
      <tr><td>Vitamin D</td><td>Macrophage antimicrobial activity</td><td>Uncertain; correct deficiency</td></tr>
      <tr><td>Repurposed anti-inflammatory drugs</td><td>PDE4 or mTOR modulation</td><td>Early-phase trials</td></tr>
    </table></div>
    <h4>Evidence and pitfalls</h4>
    <p>Most trials are small, use surrogate endpoints and enrol heterogeneous patients. Immunomodulation can be harmful: corticosteroids may worsen HIV-related opportunistic infection, and anti-inflammatory biologics can reactivate TB. Rifampicin alters the metabolism of many candidate drugs. A positive early trial does not prove that patients feel better, transmit less or survive longer.</p>
    <h4>Philippine perspective</h4>
    <p>High TB burden, widespread diabetes and malnutrition make adjunctive strategies attractive, and metformin and corticosteroids are already available. Research should be conducted through established Philippine institutions with ethical oversight, pragmatic endpoints and community involvement. The priority remains universal rapid diagnosis, effective treatment, TPT and adherence support. Even a modest reduction in treatment duration would be valuable, but only if it is achieved without increasing relapse or resistance. Patients with diabetes or malnutrition may benefit most, yet they are also the most vulnerable to immune-modulating harm. HDT is a promising addition, not a shortcut around the fundamentals.</p>
  `,
  tip: "Defend HDT as an adjunct with a plausible mechanism, then spend equal time on harm and unproven claims.",
  sources: ["S6", "S9", "S13", "S26"]
}
);
