/* Parasitology — part 3: cestodes; diagnostics, vectors & control programmes */
window.QBANK.push(
{
  id: "pa37", domain: "para-cestodes", star: true,
  q: "Compare Taenia solium and Taenia saginata and explain why T. solium is of greater medical importance.",
  tags: ["Taenia", "cysticercosis", "pork tapeworm", "beef tapeworm"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th><em>T. solium</em> (pork tapeworm)</th><th><em>T. saginata</em> (beef tapeworm)</th></tr>
      <tr><td>Intermediate host</td><td>Pig (<strong>and humans</strong>)</td><td>Cattle (carabao in Asia)</td></tr>
      <tr><td>Length of adult</td><td>2–7 m</td><td>4–12 m (up to 25 m)</td></tr>
      <tr><td>Scolex</td><td>4 suckers + <strong>rostellum with two rows of hooks</strong> ("armed")</td><td>4 suckers, <strong>no rostellum or hooks</strong> ("unarmed")</td></tr>
      <tr><td>Gravid proglottid — lateral uterine branches</td><td><strong>7–13</strong> on each side</td><td><strong>15–20 (up to 30)</strong> on each side</td></tr>
      <tr><td>Proglottid passage</td><td>Passively in chains with stool</td><td>Singly, <strong>actively motile</strong>, can crawl out of the anus</td></tr>
      <tr><td>Ovary</td><td>Three lobes (accessory lobe)</td><td>Two lobes</td></tr>
      <tr><td>Larva</td><td><em>Cysticercus cellulosae</em></td><td><em>Cysticercus bovis</em></td></tr>
      <tr><td>Eggs</td><td colspan="2">Identical — round, 30–40 µm, thick <strong>radially striated</strong> embryophore, hexacanth embryo (oncosphere) with 6 hooklets</td></tr>
      <tr><td>Human cysticercosis</td><td><strong>Yes</strong></td><td>No</td></tr>
    </table></div>
    <h4>Why <em>T. solium</em> matters more</h4>
    <p>Humans can act as <strong>intermediate hosts</strong> by ingesting <em>T. solium</em> eggs (faecal–oral from a tapeworm carrier, including autoinfection). Oncospheres penetrate the gut and lodge in tissues as cysticerci — <strong>cysticercosis</strong>, especially <strong>neurocysticercosis</strong>, the leading preventable cause of acquired <strong>epilepsy</strong> worldwide. Eating undercooked pork causes taeniasis (adult worm), not cysticercosis. WHO lists <em>T. solium</em> taeniasis/cysticercosis as a neglected tropical disease; it occurs in the Philippines where backyard pig-raising, free-roaming pigs and open defecation coexist.</p>
    <h4>Laboratory identification</h4>
    <p>Eggs cannot separate species — identify by gravid proglottids (inject India ink into the uterine pore and count branches; handle with care, eggs of <em>T. solium</em> are infective), scolex after treatment, copro-antigen ELISA, or PCR of eggs/proglottids. <em>T. asiatica</em> (Asian tapeworm; pig liver; armed rudimentary rostellum) occurs in Asia including the Philippines.</p>
  `,
  tip: "The key message: humans are intermediate hosts only for T. solium — explain how eggs (not pork) cause cysticercosis.",
  sources: ["P1", "P3", "P2", "P4"]
},
{
  id: "pa38", domain: "para-cestodes", star: true,
  q: "Discuss neurocysticercosis: pathogenesis, clinical features, diagnosis (including the Del Brutto criteria) and management.",
  tags: ["neurocysticercosis", "epilepsy", "Del Brutto", "albendazole"],
  answer: `
    <h4>Pathogenesis</h4>
    <p>After ingestion of <em>T. solium</em> eggs, oncospheres reach the CNS via blood and develop into cysticerci (vesicles with an invaginated scolex). Living cysts suppress inflammation (immune evasion); when a cyst <strong>degenerates</strong> (naturally or after treatment) it provokes inflammation → seizures. Stages on imaging: <strong>vesicular</strong> (cyst with scolex — "hole-with-dot"), <strong>colloidal</strong> (ring-enhancing with oedema), <strong>granular-nodular</strong>, and <strong>calcified</strong>.</p>
    <h4>Clinical forms</h4>
    <ul>
      <li><strong>Parenchymal</strong>: seizures (most common presentation), headache; calcified lesions can still cause seizures (perilesional oedema).</li>
      <li><strong>Extraparenchymal</strong>: ventricular cysts → obstructive hydrocephalus; subarachnoid/<strong>racemose</strong> cysts at the skull base → arachnoiditis, vasculitis, stroke — worse prognosis.</li>
      <li>Spinal, ocular (subretinal) and muscle/subcutaneous cysticercosis.</li>
      <li><strong>Cysticercal encephalitis</strong> (massive infection, children/young women).</li>
    </ul>
    <h4>Diagnosis — revised Del Brutto criteria (2017)</h4>
    <ul>
      <li><strong>Absolute criteria</strong>: histological demonstration of the parasite; subretinal cysticercus on fundoscopy; <strong>cystic lesion with a scolex</strong> on CT/MRI.</li>
      <li><strong>Major neuroimaging criteria</strong>: cystic lesions without scolex, enhancing lesions, multilobulated subarachnoid cysts, typical parenchymal calcifications.</li>
      <li><strong>Confirmative imaging</strong>: resolution after cysticidal drugs, spontaneous resolution of single enhancing lesions, migration of ventricular cysts.</li>
      <li><strong>Minor/clinical-exposure criteria</strong>: compatible clinical picture, <strong>positive serology</strong> (EITB — enzyme-linked immunoelectrotransfer blot with lentil-lectin purified glycoprotein antigens, highly specific; antigen ELISA for viable cysts), cysticercosis outside the CNS, household contact with <em>T. solium</em> carrier, living in an endemic area.</li>
    </ul>
    <p>Definitive or probable diagnosis depends on combinations of these. Serology may be negative with a single lesion. Stool examination of the patient and household for taeniasis is essential.</p>
    <h4>Management (IDSA/ASTMH 2017)</h4>
    <ul>
      <li>Antiepileptic drugs.</li>
      <li><strong>Albendazole</strong> (15 mg/kg/day for 10–14 days) for viable parenchymal cysts; add <strong>praziquantel</strong> for &gt;2 cysts; always with <strong>corticosteroids</strong> to control inflammation. Screen for ocular cysts before treatment, and treat latent strongyloidiasis risk before steroids.</li>
      <li>Calcified lesions: no antiparasitic drugs.</li>
      <li>Hydrocephalus: endoscopic removal of ventricular cysts, shunting.</li>
    </ul>
  `,
  tip: "Mention the 'cyst with scolex' absolute criterion and that anti-parasitic therapy is always given with steroids.",
  sources: ["P3", "P1", "P2"]
},
{
  id: "pa39", domain: "para-cestodes",
  q: "Discuss cystic echinococcosis (hydatid disease): life cycle, pathology, diagnosis and the safety issues in handling hydatid fluid.",
  tags: ["Echinococcus granulosus", "hydatid cyst", "hydatid sand", "anaphylaxis"],
  answer: `
    <h4>Life cycle</h4>
    <p><em>Echinococcus granulosus</em> (sensu lato) is a tiny tapeworm (3–6 mm, 3–4 proglottids) in the small intestine of <strong>dogs</strong> (definitive host). Eggs passed in dog faeces are ingested by <strong>sheep, cattle, goats, pigs</strong> (intermediate hosts) or accidentally by <strong>humans</strong> (dead-end intermediate hosts) through contact with dogs or contaminated food/water. Oncospheres reach the <strong>liver (~70%)</strong> and <strong>lungs (~20%)</strong>, and other organs, forming <strong>hydatid cysts</strong>. Dogs are infected by eating offal of slaughtered animals containing cysts.</p>
    <h4>Structure of the cyst</h4>
    <ul>
      <li>Outer host-derived <strong>pericyst</strong> (fibrous capsule).</li>
      <li>Parasite <strong>laminated (ectocyst) layer</strong> — acellular, PAS-positive.</li>
      <li>Inner <strong>germinal layer</strong> → brood capsules containing <strong>protoscolices</strong>; daughter cysts.</li>
      <li><strong>Hydatid fluid</strong> — clear, antigenic; detached protoscolices and hooklets = "<strong>hydatid sand</strong>".</li>
    </ul>
    <h4>Clinical</h4>
    <p>Slow-growing (1–5 cm/year), often asymptomatic for years; mass effect (RUQ pain, cough, haemoptysis), biliary rupture (cholangitis), secondary infection, and <strong>rupture</strong> → <strong>anaphylaxis</strong> and dissemination of protoscolices (secondary echinococcosis).</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Imaging</strong> (ultrasound — WHO-IWGE classification CE1–CE5: "water-lily sign" of detached membranes, daughter cysts), CT/MRI.</li>
      <li><strong>Serology</strong>: ELISA, IHA, confirmed by immunoblot (antigen B, antigen 5 — "arc 5"); less sensitive for lung cysts and calcified cysts; cross-reaction with other cestodes.</li>
      <li>Microscopy of aspirated or surgically removed fluid: protoscolices, hooklets (acid-fast), laminated membrane.</li>
      <li>Eosinophilia is uncommon unless leakage occurs.</li>
    </ul>
    <h4>Laboratory safety</h4>
    <p>Hydatid fluid is highly antigenic and contains viable protoscolices: aspiration may cause anaphylaxis and seeding. Diagnostic aspiration is done only under the <strong>PAIR</strong> protocol (Puncture, Aspiration, Injection of scolicidal agent — hypertonic saline or alcohol, Re-aspiration) with albendazole cover. In the laboratory, handle cyst material with biosafety precautions (dog faeces containing eggs are infective to humans — BSL-2 with care).</p>
    <h4>Treatment</h4>
    <p>Albendazole; PAIR; surgery; "watch and wait" for inactive calcified cysts (CE4–CE5). <em>E. multilocularis</em> (alveolar echinococcosis) behaves like a malignant tumour. Human echinococcosis is rare in the Philippines but is examined because of its importance in sheep-raising regions.</p>
  `,
  tip: "Describe the three layers of the cyst and the PAIR technique — and warn about anaphylaxis.",
  sources: ["P1", "P3", "P2"]
},
{
  id: "pa40", domain: "para-cestodes",
  q: "Discuss Hymenolepis nana: its unique life cycle, epidemiology and laboratory diagnosis. Compare it with H. diminuta and Dipylidium caninum.",
  tags: ["Hymenolepis nana", "dwarf tapeworm", "autoinfection", "Dipylidium"],
  answer: `
    <h4><em>Hymenolepis nana</em> (dwarf tapeworm)</h4>
    <ul>
      <li>The <strong>smallest</strong> (2–4 cm) and most common human tapeworm, especially in <strong>children</strong> in warm climates and institutions.</li>
      <li><strong>The only human tapeworm that does not need an intermediate host</strong>: eggs are immediately infective — direct faecal–oral transmission, person to person.</li>
      <li><strong>Internal autoinfection</strong>: eggs can hatch in the intestine; oncospheres penetrate villi → cysticercoids → new adults, leading to heavy worm burdens (hundreds to thousands).</li>
      <li>An indirect cycle via insects (flour beetles, fleas) bearing cysticercoids also exists.</li>
      <li>Symptoms: usually mild; heavy infections cause abdominal pain, diarrhoea, anorexia, irritability.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th><em>H. nana</em></th><th><em>H. diminuta</em> (rat tapeworm)</th><th><em>Dipylidium caninum</em> (dog tapeworm)</th></tr>
      <tr><td>Intermediate host</td><td>None needed (optional insects)</td><td>Required — flour beetles, fleas</td><td>Required — <strong>dog/cat flea</strong> (<em>Ctenocephalides</em>)</td></tr>
      <tr><td>Human infection</td><td>Eggs (or insects)</td><td>Accidentally eating insects in cereals</td><td>Children swallowing infected fleas</td></tr>
      <tr><td>Egg</td><td>30–47 µm, thin outer shell, <strong>polar thickenings with 4–8 polar filaments</strong> between the membranes</td><td>Larger (70–85 µm), yellow, <strong>no polar filaments</strong></td><td><strong>Egg packets</strong> (8–15 eggs in a capsule)</td></tr>
      <tr><td>Scolex</td><td>Armed rostellum (one row of hooks)</td><td>Unarmed</td><td>Retractable rostellum with several rows of rose-thorn hooks</td></tr>
      <tr><td>Proglottids</td><td>Disintegrate in gut</td><td>Disintegrate</td><td>"<strong>Cucumber-seed</strong>" or rice-grain proglottids with <strong>two genital pores</strong>, motile, seen in stool or perianal area</td></tr>
    </table></div>
    <h4>Laboratory diagnosis</h4>
    <p>Stool O&amp;P with concentration — characteristic eggs. Repeat examinations if negative. Treatment: <strong>praziquantel</strong> 25 mg/kg single dose (repeat after 10 days for <em>H. nana</em> because cysticercoids in villi are less susceptible), or nitazoxanide. Prevention: hand hygiene and sanitation; flea control of pets for <em>Dipylidium</em>.</p>
  `,
  tip: "Two exam favourites: no intermediate host needed for H. nana, and polar filaments in its egg.",
  sources: ["P1", "P3", "P2"]
},
{
  id: "pa41", domain: "para-cestodes",
  q: "Discuss Diphyllobothrium (Dibothriocephalus) latum and sparganosis — two pseudophyllidean cestode infections.",
  tags: ["Diphyllobothrium", "B12 deficiency", "sparganosis", "Spirometra"],
  answer: `
    <h4>Diphyllobothriasis (fish tapeworm)</h4>
    <ul>
      <li>Longest human tapeworm (up to 10–15 m). Scolex is spoon-shaped with two <strong>bothria</strong> (sucking grooves) rather than suckers.</li>
      <li>Life cycle: operculated egg in water → <strong>coracidium</strong> → eaten by copepod (<strong>procercoid</strong>) → copepod eaten by freshwater or anadromous fish (<strong>plerocercoid</strong>, "sparganum") → humans eat raw/undercooked fish (salmon, pike, perch).</li>
      <li>Clinical: usually mild; the worm absorbs <strong>vitamin B12</strong> (competes for B12–intrinsic factor complex) → <strong>megaloblastic anaemia</strong> in a minority (classically in Finland).</li>
      <li>Laboratory: eggs <strong>operculated</strong>, 58–76 × 40–51 µm, with a small knob at the abopercular end, unembryonated when passed (the only human tapeworm with operculated eggs resembling fluke eggs); proglottids wider than long with a central <strong>rosette-shaped uterus</strong>.</li>
      <li>Treatment: praziquantel; B12 replacement.</li>
    </ul>
    <h4>Sparganosis</h4>
    <ul>
      <li>Caused by the <strong>plerocercoid larva (sparganum)</strong> of <em>Spirometra</em> spp. (adult in dogs and cats). Humans are accidental second intermediate or paratenic hosts.</li>
      <li>Routes: drinking water with infected copepods (procercoids); eating raw <strong>frogs, snakes</strong> or other paratenic hosts; and applying raw <strong>frog or snake flesh as a poultice</strong> on wounds or eyes (a traditional practice in parts of Asia).</li>
      <li>Clinical: migratory subcutaneous nodules (chest, abdomen, limbs), <strong>ocular sparganosis</strong> (periorbital swelling), cerebral sparganosis (seizures), proliferative sparganosis (rare, <em>S. proliferum</em>).</li>
      <li>Diagnosis: <strong>surgical removal</strong> of the white, ribbon-like larva (diagnostic and curative); histology (no scolex hooks, calcareous corpuscles); serology (ELISA) and PCR; imaging ("tunnel sign" on MRI in brain).</li>
      <li>Cases have been reported in Southeast Asia (Thailand, Vietnam, China, Korea) and the Philippines.</li>
    </ul>
  `,
  tip: "Link D. latum to vitamin B12 deficiency and sparganosis to raw frog/snake poultices.",
  sources: ["P1", "P3", "P2"]
},
{
  id: "pa42", domain: "para-cestodes",
  q: "Explain the general morphology and classification of cestodes and how proglottids and eggs are used for identification.",
  tags: ["cestode morphology", "Cyclophyllidea", "Pseudophyllidea"],
  answer: `
    <h4>General morphology</h4>
    <ul>
      <li>Flat, ribbon-like, segmented, <strong>hermaphroditic</strong> worms with <strong>no digestive tract</strong> — nutrients are absorbed through the tegument (microtriches).</li>
      <li><strong>Scolex</strong> (head) — attachment organs: suckers (acetabula), bothria (grooves), rostellum ± hooks.</li>
      <li><strong>Neck</strong> — germinal zone producing proglottids (strobilation).</li>
      <li><strong>Strobila</strong> — chain of proglottids: immature → mature (male and female organs) → <strong>gravid</strong> (uterus filled with eggs).</li>
      <li>Calcareous corpuscles in tissues — a histological clue to cestode larvae.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Cyclophyllidea (<em>Taenia</em>, <em>Hymenolepis</em>, <em>Echinococcus</em>, <em>Dipylidium</em>)</th><th>Pseudophyllidea / Diphyllobothriidea (<em>Diphyllobothrium</em>, <em>Spirometra</em>)</th></tr>
      <tr><td>Scolex</td><td>4 cup-shaped suckers ± rostellum and hooks</td><td>2 bothria (slit-like grooves)</td></tr>
      <tr><td>Genital pore</td><td>Lateral margin</td><td>Midventral</td></tr>
      <tr><td>Uterus</td><td>Blind sac (no pore); eggs released when proglottids disintegrate</td><td>Has a uterine pore — eggs released continuously; rosette-shaped</td></tr>
      <tr><td>Egg</td><td>Non-operculated, contains <strong>hexacanth embryo (oncosphere)</strong> — infective when passed</td><td><strong>Operculated</strong>, unembryonated — needs water</td></tr>
      <tr><td>Larval stages</td><td>Cysticercus, cysticercoid, hydatid cyst, coenurus</td><td>Coracidium → procercoid → plerocercoid</td></tr>
      <tr><td>Intermediate hosts</td><td>One (or none for <em>H. nana</em>)</td><td>Two (copepod, then fish or other vertebrate)</td></tr>
    </table></div>
    <h4>Using proglottids and eggs</h4>
    <ul>
      <li><em>Taenia</em> eggs are indistinguishable between species — use gravid proglottid uterine branches or scolex.</li>
      <li><em>Dipylidium</em> — egg packets and proglottids with two genital pores.</li>
      <li><em>Hymenolepis</em> — eggs with or without polar filaments.</li>
      <li><em>Diphyllobothrium</em> — operculated eggs and wide proglottids with rosette uterus.</li>
      <li>After treatment, sieve stool to recover the scolex — confirms cure (if scolex retained, the worm regrows).</li>
    </ul>
  `,
  tip: "The Cyclophyllidea vs Pseudophyllidea table covers most short-answer cestode questions.",
  sources: ["P1", "P2", "P8"]
},
{
  id: "pa43", domain: "para-cestodes",
  q: "Discuss the epidemiology and control of Taenia solium taeniasis/cysticercosis using a One Health approach.",
  tags: ["One Health", "T. solium control", "pigs", "sanitation"],
  answer: `
    <h4>Transmission cycle and risk factors</h4>
    <p>Humans with taeniasis (adult worm) shed eggs → pigs with access to human faeces develop porcine cysticercosis → humans eating undercooked infected pork develop taeniasis → tapeworm carriers spread eggs to household members (human cysticercosis). Risk factors: <strong>free-roaming pigs</strong>, <strong>open defecation</strong> and poor latrines, home slaughter without meat inspection, eating undercooked pork, poor hand hygiene, and poverty. In the Philippines, backyard pig-raising is widespread in rural households.</p>
    <h4>One Health control options (WHO / FAO / WOAH)</h4>
    <div class="table-wrap"><table>
      <tr><th>Target</th><th>Intervention</th></tr>
      <tr><td><strong>Human tapeworm carriers</strong></td><td>Mass or targeted treatment with <strong>praziquantel</strong> or niclosamide (niclosamide preferred where neurocysticercosis is common — praziquantel may provoke seizures); albendazole in combined MDA for STH also has some effect; screening with coproantigen ELISA</td></tr>
      <tr><td><strong>Pigs</strong></td><td><strong>TSOL18 vaccine</strong> (recombinant oncosphere antigen) + <strong>oxfendazole</strong> treatment (kills muscle cysts); pig confinement (corrals)</td></tr>
      <tr><td><strong>Meat</strong></td><td>Meat inspection at slaughterhouses (tongue palpation, carcass cuts), condemnation or freezing of infected meat, thorough cooking</td></tr>
      <tr><td><strong>Environment</strong></td><td>Latrine construction and use (Zero Open Defecation), safe water, hygiene education</td></tr>
      <tr><td><strong>Health system</strong></td><td>Surveillance of epilepsy and neurocysticercosis, access to CT/MRI and antiepileptic drugs</td></tr>
    </table></div>
    <h4>Evidence</h4>
    <p>The Peru elimination project (Garcia et al., NEJM 2016) showed that combined human treatment, pig vaccination and pig treatment can <strong>interrupt transmission</strong> in a whole region — proving elimination is feasible. Single interventions (e.g. only human MDA) lead to rapid rebound.</p>
    <h4>Challenges in the Philippines</h4>
    <p>Lack of systematic data on human cysticercosis prevalence, limited diagnostic access (EITB, imaging) outside cities, informal slaughter, and low awareness. Integration with existing programmes (IHCP deworming, WASH) and veterinary services (Bureau of Animal Industry, LGU veterinarians) is the practical route.</p>
  `,
  tip: "Show the cycle and place one intervention at each point — then cite the Peru elimination study.",
  sources: ["P6", "P3", "P1"]
},
{
  id: "pa44", domain: "para-cestodes",
  q: "Short notes: coenurosis, Taenia asiatica and the use of coproantigen tests in taeniasis.",
  tags: ["Taenia asiatica", "coenurosis", "coproantigen"],
  answer: `
    <h4><em>Taenia asiatica</em> (Asian taenia)</h4>
    <ul>
      <li>Described in Taiwan and found in Korea, China, Indonesia, Thailand, Vietnam and the <strong>Philippines</strong>.</li>
      <li>Closely related to <em>T. saginata</em> (morphologically similar adult with an unarmed or rudimentary-hooked scolex) but uses <strong>pigs</strong> as intermediate host, with cysticerci mainly in the <strong>liver</strong> (and viscera) rather than muscle.</li>
      <li>Humans are infected by eating raw pig liver or viscera (e.g. in traditional dishes).</li>
      <li>Human cysticercosis from <em>T. asiatica</em> has not been confirmed.</li>
      <li>Distinguished by molecular methods (mitochondrial cox1 sequencing).</li>
    </ul>
    <h4>Coenurosis</h4>
    <ul>
      <li>Caused by the larval stage (<strong>coenurus</strong>) of <em>Taenia multiceps</em> (also <em>T. serialis</em>) — adult in dogs; sheep are usual intermediate hosts ("gid" or staggers in sheep).</li>
      <li>A coenurus is a fluid-filled bladder with <strong>multiple scolices</strong> on its inner wall (unlike a cysticercus with one scolex, or a hydatid cyst with brood capsules).</li>
      <li>Human infection (rare) via dog eggs: cerebral, ocular or subcutaneous cysts; diagnosed by surgical removal and histology.</li>
    </ul>
    <h4>Coproantigen tests in taeniasis</h4>
    <ul>
      <li>ELISA detecting <em>Taenia</em> antigens in stool — <strong>more sensitive than microscopy</strong> (egg shedding is intermittent) and positive even before proglottids/eggs appear.</li>
      <li>Genus-specific (cannot separate <em>T. solium</em> from <em>T. saginata</em>) — species identification needs PCR or serology for <em>T. solium</em> adult-stage antigens (ES33/rES38 immunoblot).</li>
      <li>Becomes negative within days of successful treatment — useful to confirm cure.</li>
      <li>Used in control programmes to find and treat tapeworm carriers, which is key to preventing cysticercosis.</li>
    </ul>
  `,
  tip: "Keep each short note to its defining feature: liver cysticerci (T. asiatica), multiple scolices (coenurus).",
  sources: ["P3", "P1", "P2"]
},
{
  id: "pa45", domain: "para-lab", star: true,
  q: "Describe the collection, preservation and processing of stool specimens for ova and parasite (O&P) examination, including concentration methods.",
  tags: ["O&P", "formalin-ethyl acetate", "flotation", "preservatives"],
  answer: `
    <h4>Collection</h4>
    <ul>
      <li>Clean, wide-mouthed, leak-proof container; avoid contamination with urine (kills trophozoites) or water/soil (free-living organisms).</li>
      <li>Avoid barium, bismuth, mineral oil, antibiotics and antimalarials for 7–10 days before collection (they interfere or reduce shedding).</li>
      <li><strong>Three specimens collected on alternate days within 10 days</strong> — because shedding is intermittent.</li>
      <li>Liquid stools: examine within <strong>30 minutes</strong> (trophozoites); soft within 1 hour; formed stool within 24 hours, or preserve immediately.</li>
    </ul>
    <h4>Preservatives</h4>
    <div class="table-wrap"><table>
      <tr><th>Preservative</th><th>Uses</th><th>Notes</th></tr>
      <tr><td>10% formalin</td><td>Concentration; eggs, larvae, cysts; antigen tests</td><td>Not good for permanent stains</td></tr>
      <tr><td>SAF (sodium acetate–acetic acid–formalin)</td><td>Concentration and permanent stain (iron haematoxylin)</td><td>Mercury-free; needs albumin for adhesion</td></tr>
      <tr><td>PVA (polyvinyl alcohol) with mercuric chloride / zinc / copper</td><td>Permanent stained smears (trichrome)</td><td>Mercury-based is best morphologically but toxic — replaced by zinc-based</td></tr>
      <tr><td>Single-vial "ecofix"/universal fixatives</td><td>Both concentration and stain; some PCR</td><td>Convenient</td></tr>
    </table></div>
    <p>Ratio: <strong>1 part stool to 3 parts fixative</strong>; mix well.</p>
    <h4>Processing</h4>
    <ol>
      <li><strong>Macroscopic</strong>: consistency, blood, mucus, adult worms, proglottids.</li>
      <li><strong>Direct wet mount</strong> (fresh specimen): saline (motile trophozoites) and iodine (cyst nuclei).</li>
      <li><strong>Concentration</strong>:
        <ul>
          <li><strong>Sedimentation — formalin–ethyl acetate (formerly ether)</strong>: recommended routine method; recovers all eggs including operculated and heavy (unfertilised <em>Ascaris</em>) eggs; centrifuge 500 × g for 10 min; layers: ethyl acetate, debris plug, formalin, sediment.</li>
          <li><strong>Flotation — zinc sulfate (sp. gr. 1.18–1.20)</strong>: cleaner preparations; heavy and operculated eggs do not float or collapse — examine both surface film and sediment. Sheather's sugar flotation for coccidian oocysts.</li>
        </ul>
      </li>
      <li><strong>Permanent stained smear</strong> (trichrome or iron haematoxylin) — required to identify protozoa; the concentrate alone is insufficient.</li>
      <li>Special: modified acid-fast (coccidia), modified trichrome (microsporidia), Kato–Katz (quantification), agar plate (<em>Strongyloides</em>), antigen tests, PCR.</li>
    </ol>
    <p>Microscopy: systematic scanning at ×100 (helminth eggs/larvae) then ×400; ×1000 oil for stained smears; calibrated ocular micrometer.</p>
  `,
  tip: "Three specimens, 1:3 fixative ratio, and FEA sedimentation as routine — the numbers matter.",
  sources: ["P2", "P11", "P3"]
},
{
  id: "pa46", domain: "para-lab",
  q: "Describe the Kato–Katz technique and discuss its advantages and limitations in helminth control programmes.",
  tags: ["Kato-Katz", "eggs per gram", "STH surveillance"],
  answer: `
    <h4>Procedure</h4>
    <ol>
      <li>Press stool through a nylon or stainless-steel mesh screen to remove debris.</li>
      <li>Fill a template hole (standard <strong>41.7 mg</strong>) on a slide; remove the template.</li>
      <li>Cover with a <strong>cellophane strip soaked in glycerol–malachite green</strong> (or methylene blue).</li>
      <li>Press to spread evenly; leave to clear (30–60 min at room temperature).</li>
      <li>Count all eggs of each species; <strong>eggs per gram (epg) = egg count × 24</strong>.</li>
    </ol>
    <h4>Advantages</h4>
    <ul>
      <li><strong>Quantitative</strong> — infection intensity correlates with morbidity and is used for WHO intensity categories and to assess drug efficacy (egg reduction rate).</li>
      <li>Cheap, simple, field-friendly; recommended by WHO for STH and intestinal schistosomiasis surveys; widely used by the Philippine IHCP and schistosomiasis programmes.</li>
      <li>Kits are standardised; slides can be re-examined for quality control.</li>
    </ul>
    <h4>Limitations</h4>
    <ul>
      <li><strong>Hookworm eggs clear and disappear</strong> if slides are read too late (&gt;30–60 min) — read hookworm early.</li>
      <li><strong>Low sensitivity for light infections</strong> (single slide), especially as prevalence falls after MDA; day-to-day and within-stool variation.</li>
      <li>Not suitable for protozoa, <em>Strongyloides</em> larvae, <em>Enterobius</em>, or diarrhoeal (watery) stool.</li>
      <li>Thick smear can obscure small eggs (<em>Clonorchis</em>, heterophyids).</li>
      <li>Requires trained microscopists; biosafety (fresh stool).</li>
    </ul>
    <h4>Improving performance and alternatives</h4>
    <p>Duplicate slides from multiple stools; <strong>Mini-FLOTAC/FLOTAC</strong> (flotation-based, more sensitive and precise), <strong>qPCR</strong> (most sensitive; detects species), POC-CCA (schistosomiasis), and AI-assisted digital microscopy. For elimination monitoring, more sensitive tools are needed than Kato–Katz alone.</p>
  `,
  tip: "Include the ×24 multiplication factor and the hookworm clearing problem — they are routinely examined.",
  sources: ["P6", "P2", "P9"]
},
{
  id: "pa47", domain: "para-lab",
  q: "Discuss permanent staining methods in diagnostic parasitology (trichrome, iron haematoxylin, modified acid-fast, Giemsa) and their quality control.",
  tags: ["trichrome", "iron haematoxylin", "Giemsa", "stain QC"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Stain</th><th>Use</th><th>Appearance</th><th>QC organism / control</th></tr>
      <tr><td><strong>Wheatley's trichrome</strong></td><td>Routine permanent stain for intestinal protozoa (PVA or SAF/zinc fixed)</td><td>Cytoplasm blue-green to purple; nuclei, chromatoid bodies and ingested RBCs red–purple; background green</td><td>Fixed faecal sample containing protozoa, or buffy coat cells (PMNs, lymphocytes)</td></tr>
      <tr><td><strong>Iron haematoxylin</strong> (± carbol fuchsin step for acid-fast)</td><td>Excellent nuclear detail; archive slides</td><td>Blue-black nuclei, grey-blue cytoplasm</td><td>As above</td></tr>
      <tr><td><strong>Modified acid-fast</strong> (Kinyoun/ZN with weak decolouriser)</td><td><em>Cryptosporidium</em>, <em>Cyclospora</em>, <em>Cystoisospora</em></td><td>Oocysts pink–red on blue/green background</td><td>Formalin-fixed <em>Cryptosporidium</em>-positive stool</td></tr>
      <tr><td><strong>Modified trichrome (Weber, Ryan)</strong></td><td>Microsporidia</td><td>Spores pink with a belt-like stripe</td><td>Microsporidia-positive control</td></tr>
      <tr><td><strong>Giemsa</strong> (pH 7.0–7.2)</td><td>Blood parasites — malaria, <em>Babesia</em>, trypanosomes, microfilariae; tissue (Leishmania)</td><td>Chromatin red–purple, cytoplasm blue; Schüffner's dots visible only at correct pH</td><td>Known positive film; buffer pH check; WBC staining quality</td></tr>
      <tr><td><strong>Delafield's haematoxylin</strong></td><td>Microfilarial sheath and nuclei</td><td>—</td><td>—</td></tr>
      <tr><td>Calcofluor white (fluorescent)</td><td><em>Acanthamoeba</em> cysts, microsporidia</td><td>Bright apple-green/blue</td><td>—</td></tr>
    </table></div>
    <h4>Quality control of stains</h4>
    <ul>
      <li>Run a <strong>positive control</strong> slide with each new batch of stain and at a defined frequency (e.g. weekly or each run).</li>
      <li>Check reagent expiry, storage, contamination (filter Giemsa; prepare working solution fresh).</li>
      <li><strong>Buffer pH</strong> verification (pH meter) for Giemsa.</li>
      <li>Change alcohol and xylene solutions regularly (water contamination causes poor clearing — cloudy smears).</li>
      <li>Document results on QC logs; corrective action if unacceptable.</li>
      <li>Microscope: calibrated ocular micrometer per objective; Köhler illumination; regular maintenance.</li>
    </ul>
    <p>Overall parasitology QA also includes proficiency testing (EQA), reference slide collections and atlases, competency assessment of microscopists, and second-reader review of difficult or critical findings (e.g. new malaria positives).</p>
  `,
  tip: "For each stain give its target, the colour result and a QC control — a three-column habit pays off.",
  sources: ["P2", "P11", "P3"]
},
{
  id: "pa48", domain: "para-lab",
  q: "Discuss the role of serology and molecular methods in diagnostic parasitology. When are they preferred over microscopy?",
  tags: ["serology", "PCR", "multiplex panels", "antigen detection"],
  answer: `
    <h4>Antigen detection</h4>
    <p>Detects parasite products — indicates <strong>current infection</strong>. Examples: <em>Giardia</em> and <em>Cryptosporidium</em> stool EIA/DFA/rapid tests; <em>E. histolytica</em>-specific stool antigen (separates from <em>E. dispar</em>); malaria RDTs (HRP2, pLDH); filarial CFA (<em>W. bancrofti</em>); schistosome CCA/CAA; <em>Taenia</em> coproantigen; <em>T. vaginalis</em> rapid test; cysticercus antigen ELISA (viable cysts).</p>
    <h4>Antibody detection (serology)</h4>
    <p>Indicates <strong>exposure</strong>; often cannot distinguish current from past infection (antibodies persist), and cross-reactions among helminths are common. Most useful for <strong>tissue parasites</strong> that are not accessible to microscopy:</p>
    <ul>
      <li>Toxoplasmosis (IgG, IgM, avidity), extraintestinal amoebiasis, toxocariasis, strongyloidiasis (screening before steroids), cysticercosis (EITB), echinococcosis, trichinellosis, fascioliasis (acute), schistosomiasis in travellers, filariasis antibody surveillance, Chagas disease, visceral leishmaniasis (rK39).</li>
    </ul>
    <h4>Molecular methods</h4>
    <ul>
      <li><strong>Conventional, real-time and multiplex PCR</strong>, LAMP, sequencing.</li>
      <li>Advantages: highest sensitivity and specificity; species differentiation (<em>E. histolytica</em> vs <em>dispar</em>, <em>Plasmodium</em> species including <em>knowlesi</em>, <em>Taenia</em> species); detection of drug-resistance markers; low-density infections in elimination settings; standardisation and automation; syndromic GI panels (Giardia, Cryptosporidium, E. histolytica, Cyclospora).</li>
      <li>Limitations: cost; panels detect only targets included (they miss helminths and many protozoa — a full O&amp;P may still be needed); DNA may persist after cure; inhibitors in stool; need for laboratory infrastructure. Mostly available in reference and university laboratories in the Philippines (RITM, UP Manila, private tertiary hospitals).</li>
    </ul>
    <h4>When to prefer non-microscopic methods</h4>
    <ol>
      <li>Tissue-invasive parasites without accessible stages (serology).</li>
      <li>Need for species identification affecting treatment.</li>
      <li>High-throughput or low-skill settings (antigen tests).</li>
      <li>Elimination surveillance and low-intensity infections (PCR, CAA).</li>
      <li>Immunocompromised patients with chronic diarrhoea (multiplex PCR).</li>
    </ol>
    <p>Microscopy remains essential because it is cheap, broad (detects unexpected parasites) and quantitative.</p>
  `,
  tip: "Separate antigen (current infection) from antibody (exposure) clearly — examiners often test that distinction.",
  sources: ["P2", "P3", "P7"]
},
{
  id: "pa49", domain: "para-lab",
  q: "Discuss the approach to a patient with peripheral eosinophilia from a parasitological perspective.",
  tags: ["eosinophilia", "tissue helminths", "differential diagnosis"],
  answer: `
    <p>Eosinophilia (&gt;0.5 × 10⁹/L; marked &gt;1.5 × 10⁹/L) is a hallmark of <strong>tissue-invasive helminths</strong>, driven by Th2 cytokines (IL-5). Protozoa generally do <em>not</em> cause eosinophilia — exceptions: <em>Cystoisospora belli</em>, <em>Dientamoeba fragilis</em>, <em>Sarcocystis</em>.</p>
    <h4>Parasitic causes</h4>
    <div class="table-wrap"><table>
      <tr><th>Degree</th><th>Examples</th></tr>
      <tr><td>Marked (often &gt;3 × 10⁹/L)</td><td>Toxocariasis (VLM), trichinellosis, acute schistosomiasis (Katayama), acute fascioliasis, filariasis (tropical pulmonary eosinophilia — <strong>very high IgE</strong>), gnathostomiasis, <em>Strongyloides</em> (larval migration)</td></tr>
      <tr><td>Moderate</td><td>Hookworm, <em>Ascaris</em> (Löffler syndrome — during lung migration), paragonimiasis, clonorchiasis, angiostrongyliasis</td></tr>
      <tr><td>Mild or absent</td><td>Adult intestinal worms only (<em>Enterobius</em>, <em>Taenia</em> adult), hydatid cyst (unless leaking), neurocysticercosis</td></tr>
    </table></div>
    <h4>Approach</h4>
    <ol>
      <li><strong>History</strong>: residence and travel (endemic provinces), diet (raw fish, crabs, snails, pork, vegetables), freshwater contact, soil contact/barefoot walking, pets, symptoms (skin, lung, GI, CNS), immune status (steroids planned?), drugs (non-parasitic causes).</li>
      <li><strong>Stool O&amp;P</strong> ×3 with concentration; <strong>agar plate culture</strong> for <em>Strongyloides</em>; Kato–Katz.</li>
      <li><strong>Serology</strong> guided by exposure: <em>Strongyloides</em>, schistosomiasis, <em>Toxocara</em>, filariasis, <em>Trichinella</em>, <em>Fasciola</em>, cysticercosis.</li>
      <li><strong>Blood films</strong>: night films for microfilariae, filarial antigen test.</li>
      <li><strong>Other</strong>: urine (schistosomes), sputum (<em>Paragonimus</em> eggs, <em>Strongyloides</em> larvae), CSF (eosinophilic meningitis), CK (trichinellosis), chest X-ray, imaging, IgE.</li>
      <li><strong>Non-parasitic causes</strong> if negative: allergy/asthma, drugs (DRESS), ABPA, eosinophilic granulomatosis with polyangiitis, hypereosinophilic syndrome, haematological malignancy, adrenal insufficiency.</li>
    </ol>
    <p>Key safety point: <strong>empirical ivermectin or screening for <em>Strongyloides</em></strong> before corticosteroids in anyone from an endemic area such as the Philippines.</p>
  `,
  tip: "Start with 'tissue migration causes eosinophilia; luminal adults usually do not' — it frames the answer.",
  sources: ["P2", "P1", "P3"]
},
{
  id: "pa50", domain: "para-lab",
  q: "Discuss the mosquito vectors of medical importance in the Philippines and their control.",
  tags: ["mosquitoes", "Aedes", "Anopheles", "Culex", "vector control"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Genus / species</th><th>Diseases transmitted</th><th>Breeding habitat</th><th>Biting behaviour</th></tr>
      <tr><td><strong><em>Anopheles flavirostris</em></strong> (principal), <em>An. litoralis</em>, <em>An. maculatus</em>, <em>An. mangyanus</em>, <em>An. balabacensis</em></td><td>Malaria; also LF in some areas</td><td>Slow-flowing, clear, shaded foothill streams (<em>An. flavirostris</em>); brackish coastal water (<em>An. litoralis</em>)</td><td>Night; rests at an angle to the surface</td></tr>
      <tr><td><strong><em>Aedes aegypti</em></strong>, <em>Ae. albopictus</em></td><td><strong>Dengue</strong>, chikungunya, Zika, yellow fever (not in PH)</td><td>Artificial containers: tyres, flower vases, water drums, coconut shells (clean stagnant water)</td><td><strong>Daytime</strong>, peak early morning and late afternoon</td></tr>
      <tr><td><strong><em>Aedes poecilus</em></strong></td><td><strong>Bancroftian filariasis</strong> (Philippines)</td><td>Water in leaf axils of abacá and banana</td><td>Night</td></tr>
      <tr><td><em>Culex quinquefasciatus</em>, <em>Cx. tritaeniorhynchus</em></td><td><strong>Japanese encephalitis</strong> (<em>Cx. tritaeniorhynchus</em> — rice fields; pigs and herons as amplifying hosts); urban LF elsewhere</td><td>Polluted water (drains, septic tanks); rice paddies</td><td>Night</td></tr>
      <tr><td><em>Mansonia</em> spp.</td><td><em>Brugia malayi</em> filariasis</td><td>Swamps with aquatic plants (<em>Pistia</em>) — larvae attach to plant roots for air</td><td>Night</td></tr>
    </table></div>
    <h4>Integrated vector management</h4>
    <ul>
      <li><strong>Environmental / source reduction</strong>: the DOH "<strong>4S strategy</strong>" for dengue — <em>Search and destroy</em> breeding sites, <em>Secure self-protection</em>, <em>Seek early consultation</em>, <em>Support fogging/spraying</em> only during outbreaks; stream clearing for <em>Anopheles</em>; clearing <em>Pistia</em> for <em>Mansonia</em>.</li>
      <li><strong>Chemical</strong>: long-lasting insecticidal nets and indoor residual spraying (malaria), larvicides (temephos, Bti), space spraying (outbreaks only). <strong>Insecticide resistance monitoring</strong> is essential.</li>
      <li><strong>Biological</strong>: larvivorous fish (<em>Gambusia</em>, guppies), <em>Bacillus thuringiensis israelensis</em>, <em>Wolbachia</em> (research).</li>
      <li><strong>Personal protection</strong>: repellents, long sleeves, screens.</li>
      <li><strong>Surveillance</strong>: larval indices (house index, container index, Breteau index), ovitraps, adult collections.</li>
      <li>Community participation, intersectoral (LGU, DepEd) action, and vaccines where available (JE vaccine; dengue vaccine policy after the Dengvaxia controversy).</li>
    </ul>
  `,
  tip: "Pair each vector with its breeding site — control strategies follow directly from breeding habits.",
  sources: ["P4", "P9", "P6"]
},
{
  id: "pa51", domain: "para-lab",
  q: "Discuss the arthropods of medical importance other than mosquitoes: lice, scabies mites, flies (myiasis), ticks and fleas.",
  tags: ["ectoparasites", "scabies", "lice", "myiasis", "ticks"],
  answer: `
    <h4>Lice (Anoplura)</h4>
    <ul>
      <li><strong><em>Pediculus humanus capitis</em></strong> (head louse) — common in Filipino schoolchildren; nits (eggs) cemented to hair shafts near the scalp. Diagnosis: finding live lice by wet combing.</li>
      <li><em>P. humanus humanus</em> (body louse) — lives in clothing seams; vector of <strong>epidemic typhus</strong> (<em>Rickettsia prowazekii</em>), trench fever (<em>Bartonella quintana</em>), relapsing fever (<em>Borrelia recurrentis</em>) — in crowded, unhygienic conditions.</li>
      <li><em>Pthirus pubis</em> (crab louse) — sexually transmitted; also eyelashes.</li>
    </ul>
    <h4>Scabies (<em>Sarcoptes scabiei</em> var. <em>hominis</em>)</h4>
    <ul>
      <li>Female mites burrow in the stratum corneum (finger webs, wrists, axillae, genitals). Intense nocturnal itching (hypersensitivity, 3–6 weeks after first infestation).</li>
      <li><strong>Crusted (Norwegian) scabies</strong>: millions of mites in immunocompromised/elderly — highly contagious, institutional outbreaks.</li>
      <li>Secondary <em>Streptococcus pyogenes</em> infection → post-streptococcal glomerulonephritis and possibly rheumatic heart disease. WHO added scabies to the NTD list in 2017.</li>
      <li>Diagnosis: skin scraping of burrows with mineral oil → mites, eggs, faeces (scybala); dermoscopy ("delta-wing jet" sign); IACS 2020 criteria.</li>
      <li>Treatment: permethrin 5%, oral ivermectin; treat contacts and launder bedding. Ivermectin MDA in high-prevalence communities.</li>
    </ul>
    <h4>Flies — myiasis</h4>
    <p>Infestation of living tissue by fly larvae (maggots): wound myiasis (<em>Chrysomya bezziana</em> — Old World screwworm, important in Southeast Asia), cutaneous furuncular myiasis (<em>Dermatobia</em>, <em>Cordylobia</em> in travellers), nasal/aural/ocular myiasis. Diagnosis by identifying larvae (posterior spiracles). Flies are also mechanical vectors of enteric pathogens (houseflies).</p>
    <h4>Ticks</h4>
    <p>Hard ticks (Ixodidae) transmit rickettsioses, Lyme disease, babesiosis, tick-borne encephalitis, and cause <strong>tick paralysis</strong> (neurotoxin). Soft ticks (Argasidae) transmit relapsing fever. Brown dog tick (<em>Rhipicephalus sanguineus</em>) is common in Philippine households. Remove ticks with fine forceps close to the skin.</p>
    <h4>Fleas</h4>
    <p><em>Xenopsylla cheopis</em> (rat flea) — <strong>plague</strong> and murine typhus; <em>Ctenocephalides</em> (cat/dog fleas) — intermediate hosts of <em>Dipylidium caninum</em> and <em>H. diminuta</em>; <em>Tunga penetrans</em> (tungiasis).</p>
    <h4>Chiggers (trombiculid mite larvae)</h4>
    <p><em>Leptotrombidium</em> — vector of <strong>scrub typhus</strong> (<em>Orientia tsutsugamushi</em>), present in the Philippines.</p>
  `,
  tip: "For each arthropod, name at least one disease it transmits — vector biology is what makes it 'medical'.",
  sources: ["P1", "P4", "P3"]
},
{
  id: "pa52", domain: "para-lab",
  q: "Discuss the Integrated Helminth Control Program (IHCP) of the Department of Health and evaluate its strengths and challenges.",
  tags: ["IHCP", "deworming", "Philippines", "WASH", "MDA"],
  answer: `
    <h4>Background</h4>
    <p>Soil-transmitted helminthiases (<em>Ascaris</em>, <em>Trichuris</em>, hookworm) are highly prevalent in the Philippines, especially among children, and are linked to malnutrition, anaemia, impaired growth and cognition, and reduced school performance. The DOH launched the IHCP (institutionalised by Administrative Order 2006-0028 and later updated) in line with WHO recommendations.</p>
    <h4>Components</h4>
    <ol>
      <li><strong>Preventive chemotherapy</strong>: <strong>biannual mass deworming</strong> (albendazole 400 mg or mebendazole 500 mg) of children 1–18 years — pre-schoolers via barangay health stations (Garantisadong Pambata, "Deworming Month" in January and July), school-age children via DepEd's School-Based Deworming; also deworming of women of reproductive age, pregnant women (after first trimester), and special groups (indigenous peoples, farmers, food handlers).</li>
      <li><strong>WASH</strong>: water, sanitation and hygiene — <strong>Zero Open Defecation (ZOD)</strong> programme, latrine construction, handwashing (WinS — WASH in Schools, Fit for School "Essential Health Care Program" with daily group handwashing and toothbrushing).</li>
      <li><strong>Health education and promotion</strong>.</li>
      <li><strong>Surveillance, monitoring and evaluation</strong>: parasitological surveys (Kato–Katz), coverage reports, adverse event monitoring.</li>
      <li>Integration with schistosomiasis and filariasis MDA, and nutrition programmes (vitamin A, iron).</li>
    </ol>
    <h4>Strengths</h4>
    <ul>
      <li>Large-scale, low-cost, drugs donated through WHO; integrated delivery platforms (schools).</li>
      <li>Reduction in prevalence of moderate–heavy intensity infections in many areas.</li>
      <li>Policy backing through DOH administrative orders and a formal DepEd–DOH partnership for school-based deworming.</li>
    </ul>
    <h4>Challenges</h4>
    <ul>
      <li><strong>Low and uneven coverage</strong> — parental fear of side effects (amplified by mass-deworming adverse-event scares, e.g. Zamboanga in 2015, and the 2017 Dengvaxia controversy → vaccine and drug hesitancy).</li>
      <li><strong>Reinfection</strong> without sanitation improvement — MDA alone cannot interrupt transmission.</li>
      <li>Low efficacy of single-dose albendazole against <em>Trichuris</em> (consider albendazole + ivermectin or moxidectin; WHO now recommends adding ivermectin in some settings).</li>
      <li>Risk of anthelmintic resistance (monitoring of egg reduction rates).</li>
      <li>Weak parasitological surveillance and data quality; reliance on Kato–Katz with low sensitivity.</li>
      <li>Devolved health system — variable LGU commitment.</li>
    </ul>
    <h4>Evaluation</h4>
    <p>The programme is effective at reducing morbidity but not at eliminating transmission; future direction (WHO NTD Roadmap 2021–2030) emphasises eliminating STH <em>as a public health problem</em> (&lt;2% moderate–heavy intensity), integrated WASH, and better diagnostics.</p>
  `,
  tip: "'Evaluate' needs both strengths and weaknesses — end with a balanced judgement.",
  sources: ["P9", "P6", "P4"]
},
{
  id: "pa53", domain: "para-lab",
  q: "Discuss the WHO Neglected Tropical Diseases Road Map 2021–2030 and its relevance to parasitic diseases in the Philippines.",
  tags: ["NTD roadmap", "WHO", "elimination", "Philippines"],
  answer: `
    <h4>The road map</h4>
    <p>"<strong>Ending the neglect to attain the Sustainable Development Goals</strong>" (WHO, 2020) sets targets for 20 NTDs and NTD groups by 2030. Three foundational shifts:</p>
    <ol>
      <li>From process indicators (e.g. MDA coverage) to <strong>impact</strong> measurement.</li>
      <li>From disease-specific programmes to <strong>cross-cutting, integrated</strong> approaches (shared platforms, WASH, One Health, vector control).</li>
      <li>From externally driven to <strong>country-owned</strong> programmes with sustainable domestic financing.</li>
    </ol>
    <h4>Overall 2030 targets</h4>
    <p>90% reduction in people requiring NTD interventions; 75% reduction in NTD-related DALYs; 100 countries eliminating at least one NTD; eradication of dracunculiasis and yaws.</p>
    <h4>Targets for parasitic NTDs relevant to the Philippines</h4>
    <div class="table-wrap"><table>
      <tr><th>Disease</th><th>2030 target</th><th>Philippine situation</th></tr>
      <tr><td>Lymphatic filariasis</td><td>Elimination as a public health problem</td><td>Most endemic provinces passed TAS; remaining foci, morbidity management needed</td></tr>
      <tr><td>Schistosomiasis</td><td>Elimination as a public health problem (&lt;1% heavy-intensity infections) in all endemic countries</td><td>28 endemic provinces; zoonotic reservoirs; MDA coverage gaps</td></tr>
      <tr><td>Soil-transmitted helminthiases</td><td>Elimination as a public health problem (&lt;2% moderate–heavy intensity)</td><td>High prevalence persists; biannual deworming</td></tr>
      <tr><td>Foodborne trematodiases</td><td>Control (integrated into programmes)</td><td><em>Paragonimus</em>, heterophyids, echinostomes — poorly surveyed</td></tr>
      <tr><td>Taeniasis/cysticercosis</td><td>Intensified control in hyperendemic areas</td><td>Data limited</td></tr>
      <tr><td>Scabies and other ectoparasitoses</td><td>Integrated into UHC; MDA where prevalence ≥10%</td><td>Common in crowded communities</td></tr>
    </table></div>
    <p>(Malaria is addressed under the separate Global Technical Strategy for Malaria; the Philippines aims for elimination by 2030.)</p>
    <h4>Relevance and implications</h4>
    <ul>
      <li>Requires <strong>sensitive diagnostics</strong> (beyond Kato–Katz), stronger laboratory networks and surveillance — a role for medical technologists and reference laboratories (RITM).</li>
      <li>Integration with <strong>Universal Health Care Act (RA 11223)</strong> structures, PhilHealth benefit packages and LGU health systems.</li>
      <li>One Health collaboration (DA–BAI for zoonotic schistosomiasis and taeniasis).</li>
      <li>Community engagement to overcome MDA hesitancy.</li>
    </ul>
  `,
  tip: "Quote the three 'foundational shifts' — they show you have read the actual road map.",
  sources: ["P6", "P9", "P5"]
},
{
  id: "pa54", domain: "para-lab",
  q: "Discuss biosafety and quality assurance in the parasitology laboratory, including the risks of laboratory-acquired parasitic infections.",
  tags: ["biosafety", "laboratory-acquired infection", "QA", "EQA"],
  answer: `
    <h4>Laboratory-acquired parasitic infections</h4>
    <p>Reported infections include <em>Plasmodium</em> (needlestick, mosquito colonies), <em>Toxoplasma</em> (tachyzoite cultures, needlestick — dangerous in pregnant staff), <em>Leishmania</em> and <em>Trypanosoma cruzi</em> (cultures, needlestick, splashes to mucosa), <em>Cryptosporidium</em> (stool, calf faeces — low infective dose, chlorine-resistant), <em>Giardia</em>, <em>E. histolytica</em>, <em>Strongyloides</em> (filariform larvae from cultures penetrate skin — agar plates must be handled with gloves and sealed), hookworm larvae, <em>Taenia solium</em> eggs (cysticercosis), <em>Echinococcus</em> eggs (from dog faeces), <em>Fasciola</em> metacercariae.</p>
    <h4>Biosafety measures</h4>
    <ul>
      <li>Most diagnostic parasitology is <strong>BSL-2</strong>: gloves, lab coats, eye protection, no mouth pipetting, hand washing, biosafety cabinet for procedures generating aerosols or for cultures.</li>
      <li><strong>Fix specimens early</strong> (formalin kills most organisms — although not all helminth eggs, e.g. <em>Ascaris</em> eggs can continue developing in formalin) and use closed centrifuge carriers.</li>
      <li>Sealed agar plate cultures for <em>Strongyloides</em>; label as hazardous.</li>
      <li>Safe sharps use (blood parasitology); post-exposure management protocols (e.g. malaria prophylaxis/treatment, Toxoplasma serology follow-up).</li>
      <li>Decontamination: 10% bleach is ineffective against <em>Cryptosporidium</em> oocysts — use hydrogen peroxide, heat or prolonged exposure to appropriate disinfectants; autoclaving waste.</li>
      <li>Training, risk assessment (ISO 35001 biorisk management), occupational health surveillance, and, in the Philippines, compliance with DOH biosafety requirements and the National Committee on Biosafety guidelines.</li>
    </ul>
    <h4>Quality assurance</h4>
    <ul>
      <li><strong>Pre-analytical</strong>: specimen collection instructions, rejection criteria (wrong container, delay without preservative, barium).</li>
      <li><strong>Analytical</strong>: written SOPs; QC of reagents and stains with positive controls; calibrated micrometers; centrifuge speed checks; minimum examination times (e.g. 300 oil-immersion fields for stained smears; 100–200 fields for thick blood films).</li>
      <li><strong>Competency</strong>: reference slide sets, atlases, periodic assessments; second-reader confirmation of critical results.</li>
      <li><strong>External quality assessment</strong>: participation in EQA/proficiency testing — e.g. malaria slide panels coordinated by <strong>RITM</strong> (national reference laboratory for parasitology/malaria) and the WHO malaria microscopy accreditation (ECAMM).</li>
      <li><strong>Post-analytical</strong>: standardised reporting (full scientific names, stage, quantification, comments such as "<em>E. histolytica/dispar</em>"), critical value notification (e.g. <em>P. falciparum</em>), turnaround time monitoring.</li>
    </ul>
  `,
  tip: "Give specific examples of lab-acquired infections — Strongyloides agar plates and Cryptosporidium are memorable ones.",
  sources: ["P2", "P11", "P3"]
}
);
