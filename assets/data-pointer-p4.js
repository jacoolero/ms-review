/* Parasitology — pointer topic p4: Sarcocystis (p4g1–p4g8) */
window.QBANK.push(
{
  id: "p4g1", domain: "p4", star: true,
  q: "Discuss the biology, life cycle and species of Sarcocystis, and explain which species matter in human infection.",
  tags: ["Sarcocystis", "life cycle", "species", "Apicomplexa"],
  keypoints: ["heteroxenous", "intermediate host", "definitive host", "sporocysts", "sarcocysts", "schizogony", "bradyzoites", "S. hominis", "S. suihominis", "S. nesbitti", "S. lindemanni", "18S rRNA", "cox1", "One Health", "cattle", "pigs"],
  answer: `
    <h4>Taxonomy and life cycle</h4>
    <p><em>Sarcocystis</em> is a genus of cyst-forming apicomplexans in the family Sarcocystidae, with more than 200 named species. All are <strong>heteroxenous</strong>: an <strong>intermediate host</strong> harbours the asexual stages and a <strong>definitive host</strong> the sexual stages. The intermediate host ingests <strong>sporocysts</strong>; sporozoites invade vascular endothelium, multiply by <strong>schizogony</strong>, and merozoites settle in skeletal or cardiac muscle as <strong>sarcocysts</strong> packed with <strong>bradyzoites</strong>. The definitive host eats infected muscle; bradyzoites start gametogony in the small intestine and sporocysts are passed in faeces. Most species are restricted to a narrow predator–prey pair, so identification depends on both host and DNA.</p>
    <h4>Species relevant to humans</h4>
    <div class="table-wrap"><table>
      <tr><th>Species</th><th>Definitive host</th><th>Intermediate host</th><th>Human role</th></tr>
      <tr><td><em>S. hominis</em></td><td>Human</td><td><strong>Cattle</strong></td><td>Definitive — intestinal disease</td></tr>
      <tr><td><em>S. suihominis</em></td><td>Human</td><td><strong>Pigs</strong></td><td>Definitive — intestinal disease</td></tr>
      <tr><td><em>S. nesbitti</em></td><td>Snakes (python)</td><td>Primates, including humans</td><td>Intermediate — muscular disease</td></tr>
      <tr><td><em>S. lindemanni</em></td><td>—</td><td>—</td><td>Historical label; not a valid species</td></tr>
    </table></div>
    <h4>Why the species list matters</h4>
    <p>Two species complete their sexual cycle in people and cause intestinal sarcocystosis; others accidentally encyst in human muscle and cause muscular sarcocystosis. "<em>S. lindemanni</em>" was a morphological label for human muscle cysts and is no longer accepted. Molecular typing of <strong>18S rRNA</strong> and <strong>cox1</strong> now assigns cases to species or lineages, and cryptic species are common. Because cattle, water buffalo, pigs and snakes overlap with human habitation across Asia, the genus is a genuine <strong>One Health</strong> problem rather than a curiosity. Species diagnosis also guides counselling, because intestinal and muscular syndromes have different reservoirs and therefore different prevention advice.</p>
  `,
  tip: "Anchor the answer on the two-host cycle, then separate the two human roles: definitive host versus accidental intermediate.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p4g2", domain: "p4", star: true,
  q: "Describe intestinal sarcocystosis caused by Sarcocystis hominis and S. suihominis: transmission, clinical features, diagnosis and management.",
  tags: ["intestinal sarcocystosis", "S. hominis", "S. suihominis", "foodborne"],
  keypoints: ["raw or undercooked beef", "pork", "bradyzoites", "lamina propria", "sporocysts", "self-limited", "formalin–ethyl acetate concentration", "10–15 µm", "PCR", "raw-meat exposure", "oral rehydration", "metronidazole", "thorough cooking", "freezing"],
  answer: `
    <h4>Transmission and development</h4>
    <p>Intestinal sarcocystosis occurs when a person eats <strong>raw or undercooked beef</strong> containing <em>S. hominis</em> cysts or <strong>pork</strong> containing <em>S. suihominis</em>. <strong>Bradyzoites</strong> are released by gastric digestion, invade the small-intestinal <strong>lamina propria</strong>, and undergo sexual development. Oocysts sporulate within the host, so stool contains <strong>sporocysts</strong> rather than unsporulated oocysts. The prepatent period is roughly one to two weeks, and shedding may continue for weeks to months.</p>
    <h4>Clinical features</h4>
    <p>Illness begins hours to days after the meal and is usually <strong>self-limited</strong>: nausea, epigastric pain, bloating, watery diarrhoea, and sometimes vomiting, fever and headache. <em>S. hominis</em> is generally milder than <em>S. suihominis</em>, and many infections are asymptomatic. Because the parasite does not invade deeply, dysentery and malabsorption are unusual; dehydration is the main risk in children and older adults. Symptoms usually settle within one to two weeks, but sporocyst shedding can outlast them.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li>Stool microscopy after <strong>formalin–ethyl acetate concentration</strong> or sugar flotation; sporocysts are ellipsoid, about <strong>10–15 µm</strong>, thin-walled, with four sporozoites.</li>
      <li>They resemble <em>Cystoisospora</em>, <em>Cyclospora</em> and <em>Toxoplasma</em>; measure them and confirm by <strong>PCR</strong>.</li>
      <li>Acid-fast staining is variable and cannot be relied on.</li>
      <li>Ask about <strong>raw-meat exposure</strong>; the dietary history is often the strongest clue.</li>
    </ul>
    <h4>Management</h4>
    <p><strong>Oral rehydration</strong> and symptomatic care suffice in most cases. <strong>Metronidazole</strong> has been used anecdotally, but no controlled trial supports it and improvement cannot be separated from natural recovery. Prevention is dietary: <strong>thorough cooking</strong> and adequate <strong>freezing</strong> of pork and beef, and strict separation of raw meat from ready-to-eat food.</p>
  `,
  tip: "Name the meat source for each species — beef for S. hominis, pork for S. suihominis — and keep treatment supportive.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p4g3", domain: "p4", star: true,
  q: "Discuss muscular sarcocystosis: how humans become infected, the clinical syndromes, diagnosis and management.",
  tags: ["muscular sarcocystosis", "S. nesbitti", "myositis", "outbreak"],
  keypoints: ["sporocysts", "snake", "endothelial schizogony", "sarcocysts", "dead-end hosts", "acute febrile myositis", "eosinophilia", "creatine kinase", "chronic myositis", "Tioman Island", "S. nesbitti", "muscle biopsy", "MRI", "PCR", "serology", "corticosteroids"],
  answer: `
    <h4>How humans become intermediate hosts</h4>
    <p>Muscular sarcocystosis follows accidental ingestion of <strong>sporocysts</strong> shed by a definitive host, usually a <strong>snake</strong>. Contaminated water, unwashed produce and fomites are the likely vehicles. Sporozoites undergo <strong>endothelial schizogony</strong>, and merozoites encyst in skeletal and cardiac muscle as <strong>sarcocysts</strong> containing bradyzoites. Humans are <strong>dead-end hosts</strong> and do not transmit infection onward.</p>
    <h4>Clinical pattern</h4>
    <p>Two syndromes are described. An <strong>acute febrile myositis</strong> begins one to three weeks after exposure with fever, severe muscle pain and tenderness, headache, cough and fatigue; <strong>eosinophilia</strong> and raised <strong>creatine kinase</strong>, aldolase and liver enzymes are common. A <strong>chronic myositis</strong> with persistent pain, weakness and fatigue may follow for months. The 2011–2012 <strong>Tioman Island</strong> outbreak in Malaysia established <em>S. nesbitti</em> as a human pathogen, and sporadic cases are reported across Southeast Asia.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Muscle biopsy</strong> shows cysts within fibres; inflammation is often sparse around intact cysts.</li>
      <li><strong>MRI</strong> demonstrates patchy muscle oedema and guides the biopsy site.</li>
      <li><strong>PCR</strong> and sequencing of 18S rRNA or cox1 confirm the species.</li>
      <li><strong>Serology</strong> by IFAT or Western blot supports the diagnosis but is not standardised or commercially available.</li>
    </ul>
    <h4>Management</h4>
    <p>There is no proven antiparasitic regimen. Analgesia, NSAIDs and graded activity are the mainstay; <strong>corticosteroids</strong> are reserved for severe myositis. Albendazole with or without corticosteroids has been tried anecdotally, with uncertain benefit. Most patients recover, but fatigue and myalgia can persist for months. Cardiac involvement warrants ECG monitoring, and severe cases may need admission for hydration and pain control. Recovery is usually complete, but recurrent pain should prompt reassessment rather than repeated blind courses of antiparasitic drugs.</p>
  `,
  tip: "Distinguish the two human roles clearly: dead-end intermediate host here, definitive host in intestinal disease.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p4g4", domain: "p4",
  q: "Explain the pathogenesis of sarcocystosis and the host immune response, and why human disease is difficult to study.",
  tags: ["pathogenesis", "immunity", "eosinophilic myositis", "immune evasion"],
  keypoints: ["schizogony", "sarcocysts", "cyst wall", "immune-evasion", "Th1", "IFN-γ", "eosinophilia", "antibodies", "immunosuppression", "eosinophilic myositis", "no small-animal model", "supportive"],
  answer: `
    <h4>Vascular phase</h4>
    <p>After sporozoites are ingested, they invade endothelial cells and multiply by <strong>schizogony</strong>, releasing merozoites in waves. This phase damages vessels and produces fever, myalgia, rash and raised acute-phase reactants. Endothelial injury also explains the leukocytosis and thrombocytopenia occasionally reported during acute illness. Severity depends on dose, species and host immunity; repeated exposure in endemic settings may produce partial protection.</p>
    <h4>Muscle phase and cyst biology</h4>
    <p>Merozoites enter muscle fibres and become <strong>sarcocysts</strong>. The <strong>cyst wall</strong> is a modified parasitophorous vacuole with villar projections; the host fibre nucleus is displaced and the fibre atrophies. Intact cysts provoke little inflammation — an effective <strong>immune-evasion</strong> strategy — whereas cyst rupture releases bradyzoites and triggers eosinophilic and granulomatous myositis.</p>
    <h4>Host immune response</h4>
    <ul>
      <li><strong>Th1</strong> cytokines, especially <strong>IFN-γ</strong>, TNF-α and IL-12, with iNOS-derived nitric oxide, restrict early replication.</li>
      <li>IL-6 and other acute-phase mediators drive fever and muscle symptoms; <strong>eosinophilia</strong> reflects the tissue phase.</li>
      <li><strong>Antibodies</strong> appear within weeks and are useful serologically but do not clear established cysts.</li>
      <li><strong>Immunosuppression</strong>, including corticosteroids and HIV, may permit heavier parasitaemia, although human data are limited.</li>
    </ul>
    <h4>Why pathogenesis is hard to study</h4>
    <p>Human tissue is rarely sampled, cysts are patchy, and <strong>no small-animal model</strong> reproduces the human muscular syndrome faithfully. Most knowledge is extrapolated from ruminant and primate infections, in which <em>S. cruzi</em> and related species cause <strong>eosinophilic myositis</strong> and abortion. Post-mortem series are few, and imaging cannot reliably distinguish active from healed cysts. That gap limits rational treatment and explains why management remains <strong>supportive</strong>.</p>
  `,
  tip: "Link each phase to a clinical sign: endothelial schizogony to fever, cyst rupture to eosinophilic myositis.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p4g5", domain: "p4", star: true,
  q: "Compare the laboratory methods for diagnosing intestinal and muscular sarcocystosis, and state the limitations of each.",
  tags: ["diagnosis", "stool", "muscle biopsy", "serology", "PCR"],
  keypoints: ["three specimens", "formalin–ethyl acetate concentration", "zinc-sulfate flotation", "10–15 µm", "PCR", "biopsy", "pepsin digestion", "18S rRNA", "IFAT", "MRI", "negative test does not exclude", "reference laboratory"],
  answer: `
    <h4>Stool examination in intestinal disease</h4>
    <p>Sporocysts are shed intermittently, so collect <strong>three specimens</strong> on separate days. <strong>Formalin–ethyl acetate concentration</strong> or <strong>zinc-sulfate flotation</strong> recovers them; direct wet mounts are insensitive. Sporocysts are ellipsoid, about <strong>10–15 µm</strong>, with a thin wall and four sporozoites, and must be distinguished from <em>Cystoisospora</em>, <em>Cyclospora</em> and <em>Toxoplasma</em>. Modified acid-fast staining is variable. <strong>PCR</strong> targeting 18S rRNA improves detection and identifies the species.</p>
    <h4>Muscle and tissue</h4>
    <ul>
      <li><strong>Biopsy</strong> of a tender or MRI-abnormal muscle; histology shows cysts along fibres, best seen with haematoxylin–eosin and periodic acid–Schiff.</li>
      <li>Compression or squash preparations and <strong>pepsin digestion</strong> release bradyzoites.</li>
      <li><strong>PCR</strong> and sequencing of <strong>18S rRNA</strong>, cox1 or ITS-1 confirm <em>S. nesbitti</em> and related species.</li>
      <li>Cysts may be missed because of patchy distribution, so sample the site of oedema and accept that a normal biopsy does not exclude the diagnosis.</li>
    </ul>
    <h4>Serology and imaging</h4>
    <p><strong>IFAT</strong>, ELISA and Western blot using merozoite or recombinant antigens support the diagnosis of muscular disease, but no assay is commercially standardised, cross-reactions occur, and a <strong>negative test does not exclude</strong> infection. <strong>MRI</strong> shows patchy T2 hyperintensity and guides biopsy; CT is less useful.</p>
    <h4>Interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Best use</th><th>Main limitation</th></tr>
      <tr><td>Stool microscopy</td><td>Intestinal disease</td><td>Intermittent shedding; misidentification</td></tr>
      <tr><td>Stool PCR</td><td>Intestinal disease</td><td>Availability; does not prove viability</td></tr>
      <tr><td>Muscle biopsy</td><td>Muscular disease</td><td>Invasive; patchy lesions</td></tr>
      <tr><td>Serology</td><td>Muscular disease</td><td>Unstandardised; cross-reactions</td></tr>
    </table></div>
    <p>Report the method and its limits, and refer ambiguous cases to a <strong>reference laboratory</strong>. A single negative stool or biopsy never excludes sarcocystosis. Because sporocyst morphology overlaps with other coccidia, a measured, photographed result is more useful than a verbal description alone.</p>
  `,
  tip: "Match the specimen to the syndrome, then state one limitation for each method — that is the comparison the examiner wants.",
  sources: ["P2", "P3", "P1", "P8"]
},
{
  id: "p4g6", domain: "p4",
  q: "Discuss the treatment and clinical management of intestinal and muscular sarcocystosis, including the limits of the evidence.",
  tags: ["treatment", "management", "metronidazole", "albendazole", "corticosteroids"],
  keypoints: ["supportive", "metronidazole", "NSAIDs", "corticosteroids", "albendazole", "low quality", "asymptomatic", "randomised trials", "test of cure", "prevention"],
  answer: `
    <h4>Intestinal disease</h4>
    <p>Most cases resolve spontaneously within two weeks. Management is <strong>supportive</strong>: oral rehydration, antiemetics and analgesia. No antiparasitic has proven efficacy in controlled trials. <strong>Metronidazole</strong> has been used anecdotally, often when symptoms persist, but responses are inconsistent and cannot be distinguished from natural recovery. Replace fluid and electrolyte losses promptly in children, older adults and pregnant women, and advise patients to return if symptoms last beyond two weeks.</p>
    <h4>Muscular disease</h4>
    <p>There is no established cysticidal therapy. <strong>NSAIDs</strong>, paracetamol and opioid-sparing analgesia control myalgia; <strong>corticosteroids</strong> are reserved for severe or refractory myositis. <strong>Albendazole</strong>, sometimes combined with corticosteroids, has been reported to improve symptoms in small series, but the evidence is of <strong>low quality</strong> and cysts may persist. Physical therapy and graded return to activity help deconditioning. Document baseline weakness and eosinophil count so that improvement or relapse can be judged objectively. Fatigue and myalgia can last months, so set expectations and arrange follow-up.</p>
    <h4>What not to do</h4>
    <ul>
      <li>Do not treat <strong>asymptomatic</strong> intestinal shedders; there is no evidence of benefit and drugs carry risk.</li>
      <li>Do not use corticosteroids alone without excluding bacterial myositis and other causes.</li>
      <li>Do not assume a positive serology equals active disease.</li>
    </ul>
    <h4>Evidence and public health</h4>
    <p>Treatment decisions are limited by the absence of <strong>randomised trials</strong>, standardised outcome measures and a reliable <strong>test of cure</strong>. In practice, management is individualised, supportive and documented. <strong>Prevention</strong> remains more effective than any drug, so counselling about raw meat and safe water belongs in the same consultation as the prescription.</p>
  `,
  tip: "Say plainly that no regimen is proven — examiners reward honesty about evidence over a confident drug list.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p4g7", domain: "p4",
  q: "Outline the prevention and food-safety measures that reduce intestinal and muscular sarcocystosis, including the roles of the laboratory and public health.",
  tags: ["prevention", "food safety", "meat", "water", "health education"],
  keypoints: ["71 °C", "−20 °C for at least 24–48 hours", "raw", "vinegar-marinated", "water", "boil or filter", "chlorination", "meat inspection", "biosecurity", "health education", "notifiable"],
  answer: `
    <h4>Food safety at the table</h4>
    <ul>
      <li>Cook pork and beef until the centre is well done (<strong>71 °C</strong> or hotter); bradyzoites are killed by thorough heating.</li>
      <li>Freeze meat at <strong>−20 °C for at least 24–48 hours</strong> when cooking cannot be guaranteed.</li>
      <li>Avoid <strong>raw</strong>, lightly cured or rare pork and beef dishes, including <strong>vinegar-marinated</strong> preparations that are not heat-treated.</li>
      <li>Use separate boards and utensils for raw meat, and wash hands and surfaces afterwards.</li>
    </ul>
    <h4>Protecting water and produce</h4>
    <p>Muscular sarcocystosis follows ingestion of sporocysts from definitive-host faeces, so <strong>water</strong> and fresh produce are the practical targets. <strong>Boil or filter</strong> drinking water where the supply is unsafe, wash and peel fruit and vegetables, and keep snakes and other carnivores away from water sources, gardens and livestock. Sporocysts survive routine <strong>chlorination</strong>, so filtration or boiling matters more than chemical disinfection.</p>
    <h4>Livestock and meat inspection</h4>
    <p>Sarcocysts are microscopic, so <strong>meat inspection</strong> cannot reliably detect them and is insufficient alone. Control relies on farm <strong>biosecurity</strong>: prevent cattle, buffalo and pigs from accessing human faeces and carnivore faeces, and manage dogs and other scavengers. Carcasses condemned for eosinophilic myositis represent an economic loss and a sentinel of herd infection.</p>
    <h4>Education and surveillance</h4>
    <p><strong>Health education</strong> should be culturally specific, naming local raw-meat dishes rather than issuing generic warnings. Clinicians and laboratorians need to recognise the syndrome, and public health units should record clusters, especially among travellers and families. Because sarcocystosis is not <strong>notifiable</strong> in most countries, including the Philippines, prevention rests on food-safety law, veterinary surveillance and community awareness rather than statutory reporting.</p>
  `,
  tip: "Give a temperature, a freezing time and a water rule — concrete numbers make a food-safety answer credible.",
  sources: ["P1", "P3", "P4", "P9"]
},
{
  id: "p4g8", domain: "p4", star: true,
  q: "Discuss the epidemiology of sarcocystosis in the Philippines and Asia, and identify the main research and diagnostic gaps.",
  tags: ["Philippines", "Asia", "epidemiology", "research gaps", "One Health"],
  keypoints: ["Tioman Island", "S. nesbitti", "snakes", "Thailand", "Vietnam", "India", "Philippines", "serosurvey", "notifiable", "One Health", "RITM", "sporocysts", "reference centres"],
  answer: `
    <h4>What is known in Asia</h4>
    <p>Human sarcocystosis is increasingly recognised across Southeast Asia. Malaysia's <strong>Tioman Island</strong> outbreaks in 2011–2012 were the largest described clusters of muscular disease and established <em>S. nesbitti</em> as a zoonosis linked to <strong>snakes</strong>. Sporadic muscular cases and intestinal infections are reported from <strong>Thailand</strong>, <strong>Vietnam</strong>, <strong>India</strong>, Indonesia and China. In the <strong>Philippines</strong>, evidence is fragmentary: veterinary surveys document <em>Sarcocystis</em> in cattle, water buffalo and pigs, while human cases are limited to isolated reports and small series. No population-based <strong>serosurvey</strong> or national surveillance system exists. National burden therefore remains a plausible but unquantified problem across most of the region.</p>
    <h4>Why the burden is underestimated</h4>
    <ul>
      <li>Intestinal disease is mild and self-limited, so patients rarely consult or submit stool.</li>
      <li>Routine ova-and-parasite examination does not look for <strong>sporocysts</strong>, which are easily mistaken for coccidia.</li>
      <li>Muscular disease mimics viral myositis, leptospirosis, dengue and autoimmune myopathy.</li>
      <li>Diagnosis requires biopsy, PCR or unstandardised serology, available mainly at <strong>reference centres</strong> such as <strong>RITM</strong>.</li>
      <li>Sarcocystosis is not <strong>notifiable</strong>, so no denominator exists.</li>
    </ul>
    <h4>Research gaps</h4>
    <p>Priorities include validated serology and molecular assays, species-level typing of human and animal isolates, dietary and water-exposure studies, and burden estimates in high-risk groups such as abattoir workers, farmers and travellers. <strong>One Health</strong> work should link human cases to livestock and snake reservoirs and to food-safety practice. Philippine laboratories could add sporocyst reporting to routine parasitology and refer ambiguous muscle cases to RITM or academic centres. Without local data, prevention advice remains generic and investment in diagnostics is difficult to justify.</p>
  `,
  tip: "Contrast the strong Malaysian outbreak data with the sparse Philippine data, then convert the gap into concrete research questions.",
  sources: ["P4", "P14", "P13", "P2", "P3"]
}
);
