/* Parasitology — pointer topic p4: Sarcocystis, second set (p4h1–p4h7) */
window.QBANK.push(
{
  id: "p4h1", domain: "p4", star: true,
  q: "Explain host specificity in Sarcocystis and how the definitive–intermediate host pair determines species identity and human risk.",
  tags: ["Sarcocystis", "host specificity", "definitive host", "intermediate host"],
  keypoints: ["obligate heteroxenous", "definitive host", "intermediate host", "predator–prey co-evolution", "cyst wall ultrastructure", "S. hominis", "S. suihominis", "S. cruzi", "S. hirsuta", "S. miescheriana", "S. nesbitti", "dead-end host", "18S rRNA", "cox1", "S. lindemanni", "One Health"],
  answer: `
    <h4>An obligate two-host cycle</h4>
    <p><em>Sarcocystis</em> species are <strong>obligate heteroxenous</strong> apicomplexans: a carnivore or omnivore <strong>definitive host</strong> supports gametogony and sporogony, while a prey <strong>intermediate host</strong> supports endothelial schizogony and intramuscular <strong>sarcocysts</strong>. Host specificity is usually narrow at both ends, a product of <strong>predator–prey co-evolution</strong>. The intermediate host determines where cysts form and their <strong>cyst wall ultrastructure</strong>; the definitive host determines sporocyst size and the prepatent period. A species is therefore defined by the pair, not by morphology alone.</p>
    <h4>Species pairs that involve people</h4>
    <div class="table-wrap"><table>
      <tr><th>Species</th><th>Intermediate host</th><th>Definitive host</th><th>Human significance</th></tr>
      <tr><td><em>S. hominis</em></td><td><strong>Cattle</strong></td><td>Human</td><td>Intestinal disease</td></tr>
      <tr><td><em>S. suihominis</em></td><td><strong>Pigs</strong></td><td>Human</td><td>Intestinal disease</td></tr>
      <tr><td><em>S. nesbitti</em></td><td>Primates, including humans</td><td><strong>Snakes</strong></td><td>Muscular disease; humans dead-end</td></tr>
      <tr><td><em>S. cruzi</em></td><td>Cattle</td><td>Dogs, coyotes</td><td>Veterinary only</td></tr>
      <tr><td><em>S. hirsuta</em></td><td>Cattle</td><td>Cats</td><td>Veterinary only</td></tr>
      <tr><td><em>S. miescheriana</em></td><td>Pigs</td><td>Dogs</td><td>Veterinary only</td></tr>
    </table></div>
    <h4>Reading the table</h4>
    <p>Only two species use humans as definitive hosts, and each is tied to one meat animal: cattle for <em>S. hominis</em>, pigs for <em>S. suihominis</em>. The other pairs are livestock infections that people witness only through carcass condemnation and herd losses. When humans ingest their sporocysts they may become accidental intermediate hosts, but they are <strong>dead-end hosts</strong> and do not sustain transmission.</p>
    <h4>Practical consequences</h4>
    <p>Host identity is a diagnostic clue before any test: intestinal disease implies raw beef or pork, muscular disease implies sporocyst-contaminated water or produce near a snake reservoir. Because species look alike, confirmation needs <strong>18S rRNA</strong> or <strong>cox1</strong> sequencing, and "<em>S. lindemanni</em>" should be abandoned as a morphological label. Specificity also makes control tractable — interrupting one predator–prey link removes one human risk — and explains why rodent models translate poorly to human infection.</p>
  `,
  tip: "Define the species by its host pair first, then use that pair to explain route, syndrome and control.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p4h2", domain: "p4", star: true,
  q: "Compare intestinal and muscular sarcocystosis in a table, and explain why the distinction changes diagnosis, treatment and prevention.",
  tags: ["intestinal sarcocystosis", "muscular sarcocystosis", "comparison", "clinical features"],
  keypoints: ["definitive host", "intermediate host", "raw meat", "sporocysts", "waterborne", "self-limited diarrhoea", "febrile myositis", "eosinophilia", "sporocyst shedding", "muscle biopsy", "supportive care", "corticosteroids", "food safety", "safe water", "dead-end host"],
  answer: `
    <h4>Two syndromes, one genus</h4>
    <p>Human sarcocystosis has two distinct clinical forms that differ in host role, route, incubation and outcome. Intestinal disease follows eating <strong>raw meat</strong> and makes the person a <strong>definitive host</strong>; muscular disease follows swallowing <strong>sporocysts</strong> from a definitive host's faeces and makes the person an accidental <strong>intermediate host</strong> and <strong>dead-end host</strong>.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Intestinal</th><th>Muscular</th></tr>
      <tr><td>Species</td><td><em>S. hominis</em>, <em>S. suihominis</em></td><td><em>S. nesbitti</em> and relatives</td></tr>
      <tr><td>Route</td><td>Undercooked beef or pork</td><td>Sporocysts in water or produce</td></tr>
      <tr><td>Incubation</td><td>Hours to days</td><td>One to three weeks</td></tr>
      <tr><td>Main symptoms</td><td>Nausea, bloating, watery diarrhoea, pain</td><td>Fever, severe myalgia, headache, cough</td></tr>
      <tr><td>Laboratory clue</td><td>Sporocysts in stool</td><td><strong>Eosinophilia</strong>, raised CK</td></tr>
      <tr><td>Course</td><td><strong>Self-limited</strong>, one to two weeks</td><td>Weeks to months; chronic fatigue</td></tr>
      <tr><td>Treatment</td><td>Rehydration, symptomatic</td><td>NSAIDs, <strong>corticosteroids</strong> if severe</td></tr>
    </table></div>
    <h4>Intestinal disease in practice</h4>
    <p>Onset is hours to days after the meal. Nausea, epigastric pain, bloating and watery diarrhoea predominate, with occasional vomiting and low-grade fever. Because the parasite stays in the lamina propria, dysentery and malabsorption are unusual; dehydration is the main complication, especially in children and older adults. <strong>Sporocyst shedding</strong> can continue for weeks after symptoms settle.</p>
    <h4>Muscular disease in practice</h4>
    <p>Fever, muscle tenderness, weakness and fatigue begin one to three weeks after exposure, often with cough and headache. Eosinophilia and raised creatine kinase support the diagnosis. Most patients recover over weeks, but a chronic myositis with fatigue may persist for months, and cardiac involvement, though rare, warrants ECG monitoring.</p>
    <h4>Why the distinction matters</h4>
    <p>The specimen differs (stool versus <strong>muscle biopsy</strong> and serology), the treatment emphasis differs (rehydration versus analgesia and steroids), and the prevention message differs (<strong>food safety</strong> versus <strong>safe water</strong>). Intestinal disease points to a kitchen; muscular disease points to an environmental reservoir. Conflating the two is the commonest error in answers on this topic.</p>
  `,
  tip: "Build the answer around one comparison table, then give one prevention sentence per syndrome.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p4h3", domain: "p4",
  q: "Describe the pathology of sarcocystosis and the host immune response, and explain how each stage produces the clinical signs.",
  tags: ["pathology", "immunity", "sarcocyst", "eosinophilic myositis"],
  keypoints: ["vascular endothelium", "schizogony", "merozoites", "parasitophorous vacuole", "cyst wall", "villar projections", "bradyzoites", "immune evasion", "Th1", "IFN-γ", "IL-6", "eosinophils", "IgG", "immunosuppression", "immune-mediated", "fibre atrophy"],
  answer: `
    <h4>From endothelium to muscle fibre</h4>
    <p>Sporozoites invade <strong>vascular endothelium</strong> and divide by <strong>schizogony</strong>, releasing <strong>merozoites</strong> in waves. Vessel damage and cytokine release cause fever, myalgia, headache and raised acute-phase proteins; leukocytosis and thrombocytopenia are occasionally reported. Merozoites then enter striated muscle and form a <strong>parasitophorous vacuole</strong> that matures into a sarcocyst packed with <strong>bradyzoites</strong>. The host fibre nucleus is displaced and <strong>fibre atrophy</strong> follows.</p>
    <h4>Cyst wall and immune evasion</h4>
    <p>The <strong>cyst wall</strong> varies between species: some have hair-like <strong>villar projections</strong>, some broad finger-like folds, others a thin smooth coat. A thick, weakly antigenic wall and slow surface turnover keep intact cysts largely invisible, so inflammation around them is sparse — an effective <strong>immune evasion</strong> strategy. Rupture or degeneration releases bradyzoites and cyst fluid and triggers eosinophilic and granulomatous myositis, the pathological basis of symptomatic muscular disease.</p>
    <h4>Host response</h4>
    <ul>
      <li><strong>Th1</strong> cytokines — IFN-γ, IL-12 and TNF-α — with iNOS-derived nitric oxide restrict early endothelial replication.</li>
      <li><strong>IL-6</strong> and other acute-phase mediators drive fever and muscle pain.</li>
      <li><strong>Eosinophils</strong>, mast cells and IgE-associated mechanisms dominate the tissue phase; eosinophilia tracks cyst degeneration.</li>
      <li><strong>IgG</strong> appears within weeks and supports serology but does not clear established cysts.</li>
      <li><strong>Immunosuppression</strong> from corticosteroids or HIV may permit heavier replication, although human data are limited.</li>
    </ul>
    <h4>Clinical translation</h4>
    <p>Pathology explains the sequence: the vascular phase gives fever and malaise; the muscle phase gives focal pain and a CK rise; cyst rupture gives <strong>eosinophilic myositis</strong> and chronic fatigue. Because much of the damage is <strong>immune-mediated</strong>, corticosteroids relieve symptoms without killing the parasite — which is why they are adjuncts, not cures, and why treating the inflammation can be rational even when the cyst persists.</p>
  `,
  tip: "Tie every pathological event to a sign: endothelium to fever, cyst rupture to eosinophilic myositis.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p4h4", domain: "p4", star: true,
  q: "Outline the laboratory diagnosis of intestinal and muscular sarcocystosis, including specimen collection, microscopy, histology and the main pitfalls.",
  tags: ["laboratory diagnosis", "stool", "muscle biopsy", "microscopy"],
  keypoints: ["three stool specimens", "formalin–ethyl acetate concentration", "zinc-sulfate flotation", "10–15 µm", "four sporozoites", "modified acid-fast", "MRI", "fresh tissue", "pepsin digestion", "H&E", "periodic acid–Schiff", "patchy cysts", "PCR", "reference laboratory", "spurious passage"],
  answer: `
    <h4>Stool: find and measure the sporocyst</h4>
    <p>Shedding is intermittent, so collect <strong>three stool specimens</strong> on separate days. <strong>Formalin–ethyl acetate concentration</strong> or <strong>zinc-sulfate flotation</strong> is needed; direct wet mounts miss low burdens. Sporocysts are ellipsoid, <strong>10–15 µm</strong>, thin-walled, with <strong>four sporozoites</strong> and a residual body. Measure and photograph them, because <em>Cystoisospora</em>, <em>Cyclospora</em> and <em>Toxoplasma</em>-like oocysts overlap in size. <strong>Modified acid-fast</strong> staining is inconsistent, so it cannot exclude the diagnosis. Stool PCR improves sensitivity where available.</p>
    <h4>Muscle: sample the lesion</h4>
    <ul>
      <li>Choose a tender muscle or an <strong>MRI</strong> T2-hyperintense site; blind biopsy often misses <strong>patchy cysts</strong>.</li>
      <li>Send <strong>fresh tissue</strong> for PCR and squash preparation, and fix a parallel piece in formalin.</li>
      <li>Histology with <strong>H&amp;E</strong> and <strong>periodic acid–Schiff</strong> shows cysts along fibres; <strong>pepsin digestion</strong> releases bradyzoites for microscopy.</li>
      <li>Cyst wall thickness and villar shape give a morphological hint, but species assignment needs sequencing.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Specimen</th><th>Test</th><th>Finding</th><th>Pitfall</th></tr>
      <tr><td>Stool</td><td>Concentration microscopy</td><td>Sporocysts, 10–15 µm</td><td>Intermittent shedding; mimics</td></tr>
      <tr><td>Stool</td><td><strong>PCR</strong></td><td>Species-specific amplicon</td><td>Does not prove viability</td></tr>
      <tr><td>Muscle</td><td>Histology</td><td>Intramuscular cysts</td><td>Patchy distribution</td></tr>
      <tr><td>Muscle</td><td>PCR and sequencing</td><td>Confirms species</td><td>Needs adequate tissue</td></tr>
    </table></div>
    <h4>Reporting</h4>
    <p>State the method, the measurement and the residual uncertainty. A negative stool or biopsy never excludes disease; repeat sampling or refer to a <strong>reference laboratory</strong> such as RITM. Split specimens: preserve one aliquot in formalin for microscopy and keep another unpreserved or in ethanol for PCR, since fixatives reduce amplification. Also consider <strong>spurious passage</strong> after eating food contaminated with animal faeces, which can produce sporocysts in a person who is not infected. Record the exposure history with the result so that a later reader can judge whether the finding fits the syndrome.</p>
  `,
  tip: "Give the concentration method, the measurement and one pitfall for each specimen — that is the whole answer.",
  sources: ["P2", "P3", "P8"]
},
{
  id: "p4h5", domain: "p4",
  q: "Discuss the role and limitations of serology and molecular testing in sarcocystosis, including the choice of target and the interpretation of results.",
  tags: ["serology", "PCR", "molecular diagnosis", "18S rRNA"],
  keypoints: ["IFAT", "ELISA", "Western blot", "paired sera", "seroconversion", "IgG", "cross-reaction", "Sarcocystidae", "18S rRNA", "cox1", "ITS-1", "Sanger sequencing", "real-time PCR", "LAMP", "internal amplification control", "viability"],
  answer: `
    <h4>Serology</h4>
    <p><strong>IFAT</strong>, <strong>ELISA</strong> and <strong>Western blot</strong> detect antibodies to merozoite or recombinant antigens. <strong>IgG</strong> rises within one to three weeks of muscular infection, so <strong>paired sera</strong> showing <strong>seroconversion</strong> or a fourfold rise are far more informative than a single value. IgM is transient and unreliable. Titres fall slowly over months, which limits their use as a cure test. No assay is commercially standardised, cut-offs differ between laboratories, and <strong>cross-reaction</strong> within the <strong>Sarcocystidae</strong> is described. Sensitivity is highest in acute febrile myositis and lower in chronic disease.</p>
    <h4>Molecular testing</h4>
    <ul>
      <li><strong>18S rRNA</strong> — multi-copy, sensitive, suitable for genus-level and broad identification.</li>
      <li><strong>cox1</strong> — more variable, used for species and lineage assignment, especially <em>S. nesbitti</em>.</li>
      <li><strong>ITS-1</strong> — helps separate closely related ruminant species.</li>
      <li>Conventional PCR with <strong>Sanger sequencing</strong> remains the reference method; <strong>real-time PCR</strong> and <strong>LAMP</strong> offer speed and field use.</li>
    </ul>
    <h4>Specimens and interpretation</h4>
    <p>Stool PCR suits intestinal disease; muscle, and occasionally other tissue, suits muscular disease. Blood and cerebrospinal fluid are not established specimens. A positive result confirms exposure or parasite presence but not <strong>viability</strong>; a negative result must be read against pre-test probability. Laboratories need extraction controls, an <strong>internal amplification control</strong> and a clean sequencing pipeline, because contamination with animal DNA is a genuine risk. Sequencing, not amplicon size, defines the species.</p>
    <h4>Choosing the test</h4>
    <p>In acute myositis with eosinophilia, serology plus MRI-directed biopsy and PCR is the practical combination. In chronic fatigue with a positive IgG, tissue PCR is needed before attributing symptoms to active infection. Report the method, target and limits, and refer ambiguous samples to a reference centre.</p>
  `,
  tip: "Pair each assay with the syndrome it serves, then state one limitation — examiners look for interpretation, not a test list.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "p4h6", domain: "p4",
  q: "Describe the treatment of intestinal and muscular sarcocystosis and outline a structured follow-up plan, including the limits of current evidence.",
  tags: ["treatment", "follow-up", "management", "corticosteroids"],
  keypoints: ["supportive care", "oral rehydration", "metronidazole", "asymptomatic shedders", "NSAIDs", "corticosteroids", "albendazole", "low-quality evidence", "baseline CK", "eosinophil count", "relapse", "steroid taper", "test of cure", "prevention counselling"],
  answer: `
    <h4>Intestinal disease</h4>
    <p>Treatment is <strong>supportive care</strong>: <strong>oral rehydration</strong>, antiemetics and analgesia. Symptoms usually settle within one to two weeks. <strong>Metronidazole</strong> is used anecdotally but has no controlled evidence, and improvement cannot be separated from natural recovery. Do not treat <strong>asymptomatic shedders</strong>. Advise return if diarrhoea lasts beyond two weeks, blood appears, or dehydration develops, particularly in children, older adults and pregnancy.</p>
    <h4>Muscular disease</h4>
    <p>There is no cysticidal regimen. <strong>NSAIDs</strong>, paracetamol and graded activity form the core. <strong>Corticosteroids</strong> are reserved for severe or refractory myositis and should follow exclusion of bacterial, viral and autoimmune causes. <strong>Albendazole</strong>, alone or with corticosteroids, has been reported to help in small series, but the evidence is <strong>low-quality</strong>, cysts may persist, and liver enzymes need monitoring.</p>
    <h4>Follow-up</h4>
    <div class="table-wrap"><table>
      <tr><th>Time</th><th>Assess</th></tr>
      <tr><td>Baseline</td><td><strong>CK</strong>, <strong>eosinophil count</strong>, pain score, weakness, ECG if cardiac symptoms</td></tr>
      <tr><td>2 weeks</td><td>Symptom trajectory, hydration, response to steroids</td></tr>
      <tr><td>1–3 months</td><td>CK and eosinophils, function, <strong>relapse</strong> during <strong>steroid taper</strong></td></tr>
      <tr><td>6 months</td><td>Residual fatigue, return to work; imaging only if worsening</td></tr>
    </table></div>
    <h4>What follow-up should achieve</h4>
    <p>Document objective endpoints so that improvement is not confused with expectation. Repeat serology is not a <strong>test of cure</strong>, and repeating MRI in a stable patient adds cost without changing care. Persistent symptoms deserve reassessment for alternative diagnoses rather than repeated empirical courses. Explain that fatigue may outlast the inflammatory phase and that graded activity is part of recovery, not a sign of non-adherence. <strong>Prevention counselling</strong> belongs in the same visit: no raw meat, safe water, and a written explanation of the suspected vehicle.</p>
  `,
  tip: "A follow-up table with objective endpoints turns a weak treatment answer into a strong management answer.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p4h7", domain: "p4",
  q: "Design a prevention programme for sarcocystosis covering meat, water, livestock, the abattoir and community education.",
  tags: ["prevention", "food safety", "biosecurity", "health education"],
  keypoints: ["71 °C", "−20 °C for 24–48 hours", "curing", "vinegar marination", "boiling", "absolute filter", "chlorination", "irrigation water", "meat inspection", "biosecurity", "HACCP", "health education", "notifiable", "One Health", "snake reservoir"],
  answer: `
    <h4>Meat</h4>
    <ul>
      <li>Cook pork and beef until the centre reaches <strong>71 °C</strong>; colour is unreliable, especially in minced meat.</li>
      <li><strong>Freeze at −20 °C for 24–48 hours</strong> when cooking cannot be assured; domestic freezer compartments vary, so extend the time.</li>
      <li><strong>Curing</strong>, salting and <strong>vinegar marination</strong> do not reliably kill bradyzoites, so dishes such as kilawin or rare burgers remain risky.</li>
      <li>Use separate boards, knives and hands for raw meat, and wash surfaces with hot soapy water.</li>
    </ul>
    <h4>Water and produce</h4>
    <p>Muscular disease follows sporocysts from definitive-host faeces. <strong>Boil</strong> drinking water or use an <strong>absolute filter</strong>; sporocysts survive routine <strong>chlorination</strong>, so chemical disinfection alone is inadequate. Wash and peel produce, and keep <strong>irrigation water</strong> and household supply away from snake and carnivore waste.</p>
    <h4>Farm and abattoir</h4>
    <p><strong>Meat inspection</strong> cannot see microscopic cysts, so it is a weak barrier. Control rests on <strong>biosecurity</strong>: prevent cattle, buffalo and pigs from contacting human or carnivore faeces, manage dogs and the <strong>snake reservoir</strong>, and treat eosinophilic myositis at slaughter as a herd signal. A <strong>HACCP</strong> approach at abattoir and processor level is more realistic than visual inspection alone.</p>
    <h4>Education and surveillance</h4>
    <p><strong>Health education</strong> should name local dishes rather than warn generically, and target travellers, farming families and people who keep snakes. Laboratories should report sporocysts and refer ambiguous muscle cases; public health units should record clusters. Sarcocystosis is not <strong>notifiable</strong> in the Philippines, so surveillance depends on veterinary data, research studies and clinician awareness — the <strong>One Health</strong> links that make prevention possible.</p>
  `,
  tip: "Give a temperature, a freezing time, a water rule and one local dish — concrete detail earns the marks.",
  sources: ["P1", "P3", "P4", "P9"]
}
);
