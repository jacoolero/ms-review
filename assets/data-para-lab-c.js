/* Parasitology â€” part 6: Philippine laboratory network, quality and applied diagnostics */
window.QBANK.push(
{
  id: "pa222", domain: "para-lab", star: true,
  q: "Discuss the role of the Research Institute for Tropical Medicine (RITM) as the national reference laboratory for parasitology, and explain how its reference, confirmatory and training functions strengthen the Philippine laboratory network.",
  tags: ["RITM", "reference laboratory", "Philippines", "laboratory network"],
  keypoints: ["Research Institute for Tropical Medicine", "national reference laboratory", "confirmation", "species identification", "molecular testing", "drug-resistance surveillance", "reference slides", "proficiency panels", "ECAMM", "DPDx", "telediagnosis", "barangay health station", "UN3373", "cold chain"],
  answer: `
    <h4>Mandate and position</h4>
    <p>The <strong>Research Institute for Tropical Medicine (RITM)</strong>, a DOH research and reference institution in Muntinlupa, serves as the national reference laboratory for parasitology and malaria, and also for dengue, HIV, tuberculosis and other infectious diseases. It sits above the regional, provincial and hospital laboratories in the referral pyramid: routine screening stays in the periphery, while RITM provides confirmation, species identification, molecular testing, drug-resistance surveillance and outbreak support.</p>
    <h4>Reference and confirmatory functions</h4>
    <ul>
      <li>Confirmation of unusual or discordant parasites, including <em>Plasmodium knowlesi</em>, <em>Babesia</em>, <em>Capillaria philippinensis</em> and imported species.</li>
      <li>PCR and sequencing for species and resistance markers such as <em>pfhrp2/3</em> deletions and <em>Kelch13</em> mutations.</li>
      <li>Reference slides, reagents and standard operating procedures for the laboratory network.</li>
      <li>Malaria microscopy validation and slide panels for the National Malaria Control and Elimination Program.</li>
    </ul>
    <h4>Training, DPDx and quality</h4>
    <p>RITM trains microscopists and medical technologists, runs proficiency panels and supports WHO <strong>ECAMM</strong> accreditation. It links local practice to international resources: CDC <strong>DPDx</strong> image libraries, fact sheets and telediagnosis are used when a morphology is uncertain, and the consultation is documented in the record. Local universities, PAMET and the <em>Philippine Textbook of Medical Parasitology</em> supply complementary continuing education.</p>
    <h4>Referring properly</h4>
    <p>Specimens should travel through the designated laboratory network, not directly from a barangay health station unless the programme allows it. The request must give the clinical summary, exposure and travel history, collection time, previous results and a specific question. Pack in triple packaging as UN3373 Category B, keep the cold chain and retain a copy of the form. RITM cannot compensate for poor sampling: an adequate, correctly preserved specimen and an accurate history are what make reference testing worthwhile.</p>
  `,
  tip: "Place RITM at the top of a three-tier network, then separate its confirmatory, quality and training roles.",
  sources: ["P2", "P3", "P13", "P9"]
},
{
  id: "pa223", domain: "para-lab",
  q: "Describe the pathway by which a parasitology specimen collected at a barangay health station reaches a laboratory that can examine it, and discuss the quality risks at each step.",
  tags: ["barangay health station", "specimen referral", "primary care", "Philippines"],
  keypoints: ["barangay health station", "rural health unit", "primary laboratory", "two patient identifiers", "10% formalin", "SAF", "cold chain", "triple packaging", "UN3373", "referral directory", "result return", "named person responsible", "mislabelling", "trophozoites", "follow-up"],
  answer: `
    <h4>The referral pyramid</h4>
    <p>A <strong>barangay health station (BHS)</strong> is usually staffed by a midwife or nurse with barangay health workers and has no microscope. The <strong>rural health unit</strong> or municipal health office may have a primary laboratory; district, provincial and regional hospital laboratories and RITM provide higher-level testing. The pathway therefore runs BHS to RHU to hospital or reference laboratory, with the programme laboratory network deciding which tests can be done where.</p>
    <h4>Collection at the BHS</h4>
    <ul>
      <li>Use the correct container: clean, wide-mouthed and leakproof for stool; EDTA tube for blood; sterile container for urine or aspirate.</li>
      <li>Collect an adequate amount, avoid contamination with urine or water, and label with <strong>two patient identifiers</strong> at the bedside.</li>
      <li>Record the time, the test requested and the exposure history â€” travel, freshwater contact, raw fish or pork, night-time exposure.</li>
      <li>If transport will exceed 30 minutes for a liquid stool, place a portion in <strong>10% formalin</strong> or <strong>SAF</strong>, or refrigerate at 2â€“8 Â°C; make blood films before storage.</li>
    </ul>
    <h4>Transport and documentation</h4>
    <p>Use triple packaging, UN3373 Category B marking, absorbent material and a sealed request form. Maintain the <strong>cold chain</strong> with a validated cooler and temperature indicator, and log every handover. A <strong>referral directory</strong> with contact numbers, schedules and test menus prevents specimens from arriving after the laboratory has closed.</p>
    <h4>Result return and quality risks</h4>
    <p>Results must return to the BHS and the patient, by phone, SMS or printed report, with a named person responsible for follow-up. The common failures are mislabelling, insufficient sample, delay that kills <strong>trophozoites</strong>, formalin fixation that prevents PCR, a broken cold chain, lost forms and results that never reach the patient. Written SOPs, periodic training, supervisory visits and a tracked referral log reduce these risks and make the network auditable.</p>
  `,
  tip: "Follow the specimen, not the patient: collection, preservation, packaging, transport, result return.",
  sources: ["P4", "P9", "P13", "P2"]
},
{
  id: "pa224", domain: "para-lab", star: true,
  q: "Compare the laboratory diagnostic strategies used by the Philippine DOH malaria, schistosomiasis and filariasis programmes, and explain how each test fits programme monitoring.",
  tags: ["DOH programmes", "malaria", "schistosomiasis", "filariasis"],
  keypoints: ["Malaria Control and Elimination Program", "thick and thin film", "HRP2", "pLDH", "Kato-Katz", "eggs per gram", "circulating cathodic antigen", "nocturnal periodicity", "filarial antigen", "Transmission Assessment Survey", "annual parasite incidence", "sentinel sites", "moderate-to-heavy intensity", "RITM"],
  answer: `
    <h4>Malaria</h4>
    <p>The Malaria Control and Elimination Program relies on <strong>microscopy</strong> of thick and thin films as the gold standard and on <strong>HRP2/pLDH rapid tests</strong> at barangay and rural health unit level where microscopy is unavailable. Every positive is treated promptly, and parasite density guides severity assessment. PCR is reserved for low-density infection, species confirmation, mixed infections and foci investigation, and becomes central near elimination when microscopy loses sensitivity.</p>
    <h4>Schistosomiasis</h4>
    <p>The National Schistosomiasis Control and Elimination Program uses <strong>Kato-Katz</strong> stool examination in sentinel sites to measure prevalence and <strong>eggs per gram</strong>, because intensity â€” not just positivity â€” determines morbidity and the need for mass drug administration. Urine <strong>circulating cathodic antigen</strong> is validated mainly for <em>S. mansoni</em> and is not used for <em>S. japonicum</em> in the national programme. Antibody tests cannot distinguish past from current infection, and PCR is useful where intensity is low.</p>
    <h4>Filariasis</h4>
    <p>The National Filariasis Elimination Program screens with <strong>nocturnal blood films</strong> collected between 22:00 and 02:00, or with <strong>filarial antigen card tests</strong> for <em>Wuchereria bancrofti</em>, which are not dependent on periodicity. <strong>Transmission Assessment Surveys</strong> in children aged 6â€“7 years decide whether mass drug administration can stop.</p>
    <h4>How the tests fit monitoring</h4>
    <div class="table-wrap"><table>
      <tr><th>Programme</th><th>Test</th><th>Indicator</th></tr>
      <tr><td>Malaria</td><td>Microscopy, RDT, PCR</td><td>Annual parasite incidence, foci</td></tr>
      <tr><td>Schistosomiasis</td><td>Kato-Katz, PCR</td><td>Prevalence, moderate-to-heavy intensity</td></tr>
      <tr><td>Filariasis</td><td>Blood film, antigen test</td><td>TAS positivity in children</td></tr>
    </table></div>
    <p>All three depend on the same BHS-to-RHU collection chain and on RITM-linked quality assurance. The main weaknesses are single-stool examinations, loss of nocturnal periodicity during transport, RDT stock-outs and unverified microscopy. Programme decisions are only as good as the specimen and the test behind them.</p>
  `,
  tip: "Give one test and one indicator per programme â€” that table is the core of the answer.",
  sources: ["P13", "P9", "P14", "P7"]
},
{
  id: "pa225", domain: "para-lab", star: true,
  q: "Discuss the quality-assurance framework that governs parasitology laboratories in the Philippines, from licensing and accreditation to internal quality control and external assessment.",
  tags: ["quality assurance", "ISO 15189", "proficiency testing", "Philippines"],
  keypoints: ["RA 4688", "DOH Administrative Order 2021-0037", "ISO 15189", "quality system", "internal quality control", "pH 7.2", "specific gravity", "centrifuge verification", "document control", "proficiency testing", "RITM", "ECAMM", "DPDx", "blinded re-reading", "competency assessment"],
  answer: `
    <h4>Regulatory framework</h4>
    <p>Philippine clinical laboratories operate under <strong>RA 4688</strong> and <strong>DOH Administrative Order 2021-0037</strong>, which set licensing, staffing, equipment and quality requirements. A licensed medical technologist performs the testing under a pathologist, and <strong>ISO 15189</strong> accreditation is increasingly used by larger laboratories and is preferred for international contracts. Parasitology is not separately licensed, so it is covered by the general laboratory quality system.</p>
    <h4>Internal quality control</h4>
    <ul>
      <li>Daily microscope check, clean optics and KÃ¶hler illumination; log lamp hours.</li>
      <li>Stain control: filter Giemsa, check <strong>pH 7.2</strong> buffer, and run a known positive slide with each new trichrome or iron haematoxylin batch.</li>
      <li>Reagent control: record lot, expiry and <strong>specific gravity</strong> of flotation solutions; check formalin concentration.</li>
      <li>Equipment: <strong>centrifuge verification</strong> of speed and timer, refrigerator and incubator temperatures, thermometer calibration.</li>
      <li><strong>Document control</strong>: approved SOPs, competency records and corrective-action logs.</li>
    </ul>
    <h4>External assessment and competency</h4>
    <p>Participation in <strong>proficiency testing</strong> detects errors that internal QC misses. In the Philippines malaria slide panels are coordinated through <strong>RITM</strong>, and WHO <strong>ECAMM</strong> accreditation is available for microscopists. CDC <strong>DPDx</strong> image quizzes and telediagnosis add another external check. <strong>Blinded re-reading</strong> of routine slides, discordant review and annual <strong>competency assessment</strong> should be routine, with results trended over time.</p>
    <h4>Persistent gaps</h4>
    <p>Many peripheral laboratories have no parasitology EQA scheme, few reference slides and high staff turnover. The realistic response is a tiered network: RITM and regional laboratories provide panels, training and confirmatory testing, while peripheral laboratories maintain daily QC, document competence and refer uncertain slides rather than guess. Quality is judged by corrected errors and patient outcomes, not by the thickness of the manual.</p>
  `,
  tip: "Separate licensing (DOH), accreditation (ISO 15189), internal QC and external EQA â€” four different mechanisms.",
  sources: ["P13", "P2", "C11", "S33"]
},
{
  id: "pa226", domain: "para-lab",
  q: "In a Philippine province where dengue and malaria are co-endemic, discuss how the laboratory should differentiate the two and avoid diagnostic error.",
  tags: ["dengue", "malaria", "co-endemic", "differential diagnosis"],
  keypoints: ["NS1 antigen", "IgM", "thick and thin film", "HRP2", "pLDH", "thrombocytopenia", "co-infection", "pfhrp2/3 deletions", "rheumatoid factor", "Aedes aegypti", "RA 11332", "critical result", "read-back", "surveillance"],
  answer: `
    <h4>Why the distinction is difficult</h4>
    <p>Dengue and malaria both cause acute fever, headache, myalgia, nausea and thrombocytopenia, and both are endemic in many Philippine provinces. Malaria persists in Palawan, parts of Mindanao, the Cordillera and other forest-foothill areas, while dengue is urban and nationwide, transmitted by <em>Aedes aegypti</em> and <em>Ae. albopictus</em>. A patient may have either, both, or neither, so epidemiology alone cannot decide. Seasonal rains increase both vector populations, and inter-island travel can bring malaria exposure into a dengue ward, so a travel history belongs on every request form.</p>
    <h4>Laboratory strategy</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Dengue</th><th>Malaria</th></tr>
      <tr><td>First-line</td><td><strong>NS1 antigen</strong> (days 1â€“5)</td><td><strong>Thick and thin film</strong>; HRP2/pLDH RDT</td></tr>
      <tr><td>Later</td><td>IgM/IgG after day 5; PCR</td><td>Repeat films 12â€“24 h apart; PCR</td></tr>
      <tr><td>Supporting</td><td>CBC, haematocrit, platelets</td><td>Parasite density, platelets</td></tr>
    </table></div>
    <h4>Pitfalls and co-infection</h4>
    <ul>
      <li>A positive NS1 test does not exclude malaria; order a film when malaria exposure exists.</li>
      <li>HRP2 remains positive for two to four weeks after cure, and <em>pfhrp2/3</em> deletions cause false negatives.</li>
      <li>NS1 may be falsely positive with <strong>rheumatoid factor</strong>; IgM cross-reacts with other flaviviruses and recent vaccination.</li>
      <li>Thrombocytopenia, leukopenia and raised transaminases occur in both; neither is discriminatory.</li>
      <li><strong>Co-infection</strong> is well documented and worsens outcome, so dual testing is justified in co-endemic foci.</li>
    </ul>
    <h4>Triage and reporting</h4>
    <p>The BHS should use both RDTs and refer films promptly; the hospital laboratory should run a combined febrile-panel algorithm, report <strong>critical results</strong> by phone with <strong>read-back</strong>, and notify cases under <strong>RA 11332</strong>. Integrated surveillance links laboratory, vector and case data so that a dengue cluster is not mistaken for a malaria focus, or vice versa.</p>
  `,
  tip: "Build a two-column table and then say explicitly that a positive dengue test never rules out malaria.",
  sources: ["P14", "P7", "P9", "P3"]
},
{
  id: "pa227", domain: "para-lab", star: true,
  q: "Describe how a malaria blood film is made, stained, examined and quantified, and explain the errors that cause a false species identification or parasite count.",
  tags: ["malaria microscopy", "thick film", "thin film", "parasite density"],
  keypoints: ["thick film", "thin film", "methanol fixation", "pH 7.2", "100â€“200 fields", "SchÃ¼ffner's dots", "banana-shaped gametocytes", "200 white cells", "8,000 WBC", "percentage parasitaemia", "EDTA", "stain precipitate", "mixed infection", "two-reader verification"],
  answer: `
    <h4>Making the film</h4>
    <p>Use fresh capillary blood or EDTA blood within one hour. Place two or three small drops on one slide: one for a <strong>thick film</strong> spread over about 1 cm, and one for a <strong>thin film</strong> drawn with a spreader at 30â€“45 degrees to form a feathered edge. Dry the thick film thoroughly, do not fix it, and fix only the thin film in <strong>methanol fixation</strong>. Stain with <strong>Giemsa at pH 7.2</strong> for 30â€“45 minutes, or use Field stain for speed.</p>
    <h4>Examination</h4>
    <p>Scan the thick film at Ã—100 for parasites, then confirm and speciate on the thin film at Ã—1000. Examine at least <strong>100â€“200 fields</strong> under oil immersion before reporting negative, and repeat films every 12â€“24 hours for three sets when suspicion is high. Species identification rests on ring form, trophozoite, schizont and gametocyte morphology, red-cell size, stippling such as <strong>SchÃ¼ffner's dots</strong>, and the presence of <strong>banana-shaped gametocytes</strong>.</p>
    <h4>Quantification</h4>
    <p>Count parasites against <strong>200 white cells</strong> on the thick film and multiply by the white-cell count, or use the standard assumption of <strong>8,000 WBC</strong> per ÂµL. Report <strong>percentage parasitaemia</strong> from the thin film where the count is high. A consistent method matters more than the exact multiplier; state the method on the report.</p>
    <h4>Errors and control</h4>
    <ul>
      <li>Delayed staining, <strong>EDTA</strong> storage and a thick film that is too thick distort morphology.</li>
      <li>Wrong buffer pH, over-staining or <strong>stain precipitate</strong> hides stippling and chromatin.</li>
      <li>Platelets overlying red cells, stain deposit and water artefact mimic parasites.</li>
      <li><strong>Mixed infection</strong> and low-density <em>P. falciparum</em> are missed when only the thin film is scanned.</li>
      <li><strong>Two-reader verification</strong>, slide re-reading and EQA panels detect drift.</li>
    </ul>
  `,
  tip: "State thick for detection and thin for species, then give the 200-WBC density formula.",
  sources: ["P2", "P7", "P11", "P3"]
},
{
  id: "pa228", domain: "para-lab",
  q: "Compare trichrome, iron haematoxylin and modified acid-fast staining for parasitology, and explain when each is indicated.",
  tags: ["trichrome", "iron haematoxylin", "modified acid-fast", "permanent stain"],
  keypoints: ["Wheatley's trichrome", "Schaudinn's fluid", "polyvinyl alcohol", "chromatoid bodies", "iron haematoxylin", "karyosome", "modified acid-fast", "Kinyoun", "Cryptosporidium", "Cyclospora", "Cystoisospora", "autofluorescence", "ocular micrometer", "known positive control"],
  answer: `
    <h4>Trichrome</h4>
    <p><strong>Wheatley's trichrome</strong> is the workhorse permanent stain. Smears are fixed in <strong>Schaudinn's fluid</strong> or <strong>polyvinyl alcohol</strong>, stained in trichrome, differentiated in acid alcohol and dehydrated. Cytoplasm stains blue-green, nuclei and <strong>chromatoid bodies</strong> red to purple, and background debris is suppressed. It is indicated for <em>Entamoeba histolytica/dispar</em>, <em>Dientamoeba fragilis</em>, <em>Giardia</em>, <em>Cryptosporidium</em> and small cysts that iodine mounts obscure.</p>
    <h4>Iron haematoxylin</h4>
    <p><strong>Iron haematoxylin</strong> gives the sharpest nuclear detail: chromatin, <strong>karyosome</strong> and peripheral chromatin are dark blue-black. It is slower and technically demanding, requires careful differentiation, and is reserved for difficult amoebae and for teaching or reference slides. It is not a routine screening stain.</p>
    <h4>Modified acid-fast</h4>
    <p><strong>Modified acid-fast</strong> staining (<strong>Kinyoun</strong> with a weaker decolouriser) is used for coccidian oocysts. <em>Cryptosporidium</em>, <em>Cyclospora</em> and <em>Cystoisospora</em> appear red to pink against a blue or green background; <em>Cyclospora</em> is variably acid-fast and shows blue <strong>autofluorescence</strong> under UV. <em>Cryptosporidium</em> is small (4â€“6 Âµm) and must be distinguished from yeast.</p>
    <h4>Practical points</h4>
    <ul>
      <li>Fix thin smears immediately; thick smears stain poorly and trap debris.</li>
      <li>Control each run with a <strong>known positive control</strong> slide.</li>
      <li>Use a calibrated <strong>ocular micrometer</strong> for size, which is decisive for cysts and oocysts.</li>
      <li>Report the stain used, because morphology and colour differ between methods.</li>
      <li>Mucoid or bloody stool needs a thinner smear; no stain can rescue a smear that is too thick.</li>
    </ul>
    <p>Permanent stained smears convert a transient wet mount into an archivable record, allow re-examination and external review, and detect light infections that concentration alone may miss. They remain the reference standard for morphology when a result is disputed.</p>
  `,
  tip: "Match stain to purpose: trichrome routine, iron haematoxylin nuclear detail, modified acid-fast coccidia.",
  sources: ["P2", "P3", "P8", "P11"]
},
{
  id: "pa229", domain: "para-lab", star: true,
  q: "Describe the Kato-Katz technique, its strengths and limitations, and its role in quantifying soil-transmitted helminth and schistosome infections.",
  tags: ["Kato-Katz", "eggs per gram", "soil-transmitted helminths", "schistosomiasis"],
  keypoints: ["41.7 mg", "template", "nylon mesh", "cellophane", "glycerol-malachite green", "eggs per gram", "egg count by 24", "duplicate slides", "three stool specimens", "hookworm eggs clear", "intensity category", "Mini-FLOTAC", "sentinel sites", "mass drug administration"],
  answer: `
    <h4>Principle and procedure</h4>
    <p><strong>Kato-Katz</strong> is a quantitative thick-smear technique. A <strong>nylon mesh</strong> passes about <strong>41.7 mg</strong> of stool into a <strong>template</strong> on a glass slide; the template is removed and a <strong>cellophane</strong> strip soaked in <strong>glycerol-malachite green</strong> is pressed over the sample. The glycerol clears faecal debris while malachite green reduces glare, and eggs remain visible. After 30â€“60 minutes the slide is examined at Ã—100 and eggs are counted.</p>
    <h4>Calculation</h4>
    <p>Because the template holds 41.7 mg, multiplying the egg count by <strong>24</strong> gives <strong>eggs per gram</strong>. Prepare <strong>duplicate slides</strong> from one stool and, ideally, examine <strong>three stool specimens</strong> from different days, because helminth egg output varies. Report the egg count and the intensity category, not merely "positive".</p>
    <h4>Strengths</h4>
    <ul>
      <li>Cheap, standardised and field-friendly; WHO recommends it for soil-transmitted helminths and schistosomiasis.</li>
      <li>Quantifies intensity, which drives morbidity and mass drug administration decisions.</li>
      <li>Allows comparison across surveys and monitoring of programme impact.</li>
    </ul>
    <h4>Limitations</h4>
    <p>Sensitivity falls sharply at low intensity, and a single smear can miss infections. <strong>Hookworm eggs clear</strong> within about 30â€“60 minutes and must be read promptly. The method is poor for protozoa, requires a trained microscopist, and gives variable counts when stool is not mixed well. <strong>Mini-FLOTAC</strong>, FLOTAC and PCR offer alternatives, but they cost more and are less established in field programmes.</p>
    <h4>Philippine use</h4>
    <p>Kato-Katz is used in <strong>sentinel sites</strong> for schistosomiasis and in school surveys for soil-transmitted helminths. Its value depends on training, duplicate slides and prompt reading, and on linking the egg count to deworming or praziquantel decisions.</p>
  `,
  tip: "Learn the 41.7 mg template and the Ã—24 multiplier â€” then explain why one smear is not enough.",
  sources: ["P2", "P6", "P9", "P11"]
},
{
  id: "pa230", domain: "para-lab",
  q: "Explain loop-mediated isothermal amplification, its advantages and limitations for field diagnosis of parasitic disease, and the controls needed before it is adopted in a Philippine setting.",
  tags: ["LAMP", "isothermal amplification", "field diagnostics", "molecular"],
  keypoints: ["loop-mediated isothermal amplification", "four to six primers", "Bst polymerase", "60â€“65 Â°C", "turbidity", "magnesium pyrophosphate", "no thermal cycler", "qualitative", "contamination", "DNA persists after cure", "internal amplification control", "uracil-N-glycosylase", "validated", "cold chain"],
  answer: `
    <h4>Principle</h4>
    <p><strong>Loop-mediated isothermal amplification</strong> uses <strong>four to six primers</strong> that recognise six to eight regions of the target, and a strand-displacing <strong>Bst polymerase</strong>. The reaction runs at about <strong>60â€“65 Â°C for 30â€“60 minutes</strong> and produces a large amount of <strong>magnesium pyrophosphate</strong>, visible as <strong>turbidity</strong>, or a fluorescent signal with intercalating dyes. Because the temperature is constant, <strong>no thermal cycler</strong> is needed.</p>
    <h4>Advantages</h4>
    <ul>
      <li>Simple equipment: a heat block or water bath, and a battery in field settings.</li>
      <li>Fast and robust in crude samples; less inhibited than PCR by faecal and blood components.</li>
      <li>High specificity from multiple primers; useful for malaria, <em>Leishmania</em>, schistosomes and soil-transmitted helminths.</li>
      <li>Can be paired with dipstick or lateral-flow readout for visual results.</li>
    </ul>
    <h4>Limitations</h4>
    <p>LAMP is usually <strong>qualitative</strong>, so it does not give parasite density. Primers must be designed and validated for local species and strains; <strong>contamination</strong> is a serious risk because the product is abundant, and <strong>DNA persists after cure</strong>, so a positive result does not prove viable parasites. Reagents still need a <strong>cold chain</strong>, and the cost per test can exceed microscopy in low-volume laboratories.</p>
    <h4>Controls and adoption</h4>
    <p>Every run needs a positive control, a negative control and an <strong>internal amplification control</strong>; separate work areas, <strong>uracil-N-glycosylase</strong> and sealed tubes reduce carry-over. Before adoption in a Philippine barangay or district laboratory, the test must be <strong>validated</strong> against local microscopy and PCR, staff must be trained, and a plan for confirmation and reporting must exist. LAMP complements, rather than replaces, microscopy and RDTs.</p>
  `,
  tip: "Say 'isothermal' first, then give the two traps: contamination and DNA persisting after cure.",
  sources: ["P3", "P7", "P2", "P11"]
},
{
  id: "pa231", domain: "para-lab",
  q: "Discuss the biosafety and occupational-health requirements of a parasitology laboratory, including the hazards posed by specific specimens and the precautions for staff.",
  tags: ["biosafety", "BSL-2", "occupational health", "laboratory safety"],
  keypoints: ["BSL-2", "faecal-oral", "needlestick", "Taenia solium eggs", "Echinococcus", "Cryptosporidium", "biological safety cabinet", "sealed centrifuge cups", "10% bleach", "hydrogen peroxide", "autoclave", "hepatitis B vaccination", "pregnancy", "post-exposure", "spill kit"],
  answer: `
    <h4>Risk groups and routes</h4>
    <p>Most diagnostic parasitology is <strong>BSL-2</strong> work. Hazards include <strong>faecal-oral</strong> transmission of cysts and eggs, <strong>needlestick</strong> exposure to blood-borne malaria and trypanosomes, splash contamination of eyes, and ingestion of infective stages such as <strong><em>Taenia solium</em> eggs</strong> and <strong><em>Echinococcus</em></strong> eggs. <em>Cryptosporidium</em> oocysts resist chlorine and can cause laboratory infection from contaminated surfaces.</p>
    <h4>Facilities and practice</h4>
    <ul>
      <li>Separate clean and dirty benches; no eating, drinking or storing food in the laboratory.</li>
      <li>Gloves, gown and eye protection for all specimen handling; hand hygiene after removing gloves.</li>
      <li>A <strong>biological safety cabinet</strong> for aerosol-generating work such as opening culture plates or centrifuging without sealed cups.</li>
      <li><strong>Sealed centrifuge cups</strong>, and waiting 30 minutes before opening a centrifuge that has spilled.</li>
      <li>Sharps disposal at the point of use; never recap needles.</li>
      <li>Puncture-resistant containers and clearly labelled infectious waste bags at every bench.</li>
    </ul>
    <h4>Spills and waste</h4>
    <p>Cover a spill with absorbent material, apply <strong>10% bleach</strong> for most parasites, then clean; for <em>Cryptosporidium</em> use <strong>hydrogen peroxide</strong>, heat or UV because chlorine is ineffective. <strong>Autoclave</strong> infectious waste, segregate sharps and label bags. Document the incident and the response.</p>
    <h4>Occupational health</h4>
    <p>Offer <strong>hepatitis B vaccination</strong>, train staff in <strong>post-exposure</strong> procedures, and report incidents. <strong>Pregnancy</strong> and immunosuppression require individual risk assessment for <em>Toxoplasma</em>, <em>Cryptosporidium</em> and malaria. Staff should never mouth-pipette and should know the location of the <strong>spill kit</strong>, eyewash and emergency contacts. A biosafety committee, written SOPs and annual refresher training turn these rules into practice; review vaccination status, spill drills and incident logs every year.</p>
  `,
  tip: "Name the route for each hazard â€” faecal-oral for eggs, needlestick for blood â€” then the matching precaution.",
  sources: ["P2", "P3", "P11", "P9"]
}
);

