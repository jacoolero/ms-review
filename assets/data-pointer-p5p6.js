/* Parasitology — pointer gap: Toxocara (p5) and Strongyloides (p6) */
window.QBANK.push(
{
  id: "p5g1", domain: "p5", star: true,
  q: "Discuss the biology and transmission of Toxocara canis and T. cati, and explain why humans are dead-end hosts.",
  tags: ["Toxocara", "biology", "transmission", "paratenic host", "zoonosis"],
  keypoints: ["Toxocara canis", "Toxocara cati", "ascarid", "unembryonated eggs", "embryonation", "third-stage larva", "paratenic host", "pica", "geophagia", "transplacental", "transmammary", "soil contamination", "free-roaming dogs", "no human-to-human transmission"],
  answer: `
    <h4>Parasite and definitive hosts</h4>
    <p><em>Toxocara canis</em> (dog roundworm) and <em>T. cati</em> (cat roundworm) are ascarid nematodes. Adults live in the small intestine of the definitive host and pass <strong>unembryonated eggs</strong> in faeces. In warm, moist, shaded soil the egg embryonates over about two to four weeks to the infective <strong>third-stage larva (L3)</strong>. The thick shell resists disinfectants, and eggs survive months to years.</p>
    <h4>Routes of infection in the dog</h4>
    <ul>
      <li>Ingestion of embryonated eggs from contaminated soil or faeces.</li>
      <li>Predation of <strong>paratenic hosts</strong> (rodents, birds) carrying dormant L3 in their tissues.</li>
      <li><strong>Transplacental and transmammary</strong> transmission: larvae reactivate in a pregnant bitch and infect puppies before and after birth, so puppies shed eggs from about three weeks of age.</li>
    </ul>
    <p><em>T. cati</em> relies more on predation of paratenic hosts and less on transplacental passage than <em>T. canis</em>.</p>
    <h4>Human transmission</h4>
    <p>Humans are <strong>paratenic (dead-end) hosts</strong> and acquire infection only by ingesting embryonated eggs — from soil, sandpits, playgrounds, unwashed vegetables, or contaminated fingers and fomites. <strong>Pica and geophagia</strong> in children aged one to five years, free-roaming dogs and poor sanitation are the main risk factors. Larvae hatch in the small intestine, penetrate the mucosa and travel by portal blood to the liver, then lungs and systemic circulation. They cannot mature in humans; L3 remain dormant in tissues for years, provoking eosinophilic granulomas. There is no human-to-human transmission.</p>
    <p>Toxocara eggs are subglobular with a thick, pitted shell. They are not immediately infectious when passed, so fresh faeces are less hazardous than aged, shaded soil.</p>
    <p>In the Philippines, high dog ownership, limited veterinary care and abundant stray animals maintain soil contamination, and seroprevalence in children is correspondingly high.</p>
  `,
  tip: "Separate the dog's routes (eggs, paratenic prey, transplacental) from the human route (egg ingestion only) — that distinction earns marks.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p5g2", domain: "p5", star: true,
  q: "Describe visceral larva migrans (VLM): pathogenesis, clinical features, laboratory findings and differential diagnosis.",
  tags: ["visceral larva migrans", "Toxocara", "eosinophilia", "hepatomegaly"],
  keypoints: ["visceral larva migrans", "hepatomegaly", "eosinophilia", "hypergammaglobulinaemia", "isohemagglutinins", "Löffler syndrome", "TES-ELISA", "hepatic granuloma", "myocarditis", "albendazole", "corticosteroids", "stool examination negative", "children", "pica"],
  answer: `
    <h4>Clinical syndrome</h4>
    <p>Visceral larva migrans is the systemic form of toxocariasis, typically in children aged one to five years with pica. Migrating larvae lodge in the liver, lungs, lymph nodes, brain and myocardium, where they provoke <strong>eosinophilic granulomas</strong>. Larval antigens drive a Th2 response with IgE, eosinophils and mast-cell activation, and repeated infection increases the burden. Fever, <strong>hepatomegaly</strong>, cough and wheeze, abdominal pain, vomiting, pallor and failure to thrive are typical. Massive infection can cause myocarditis, seizures or encephalopathy.</p>
    <h4>Laboratory and imaging</h4>
    <ul>
      <li><strong>Eosinophilia</strong> is marked — often above 3,000/µL and 30–50% of leucocytes — and fluctuates over weeks.</li>
      <li>Hypergammaglobulinaemia, raised IgE and <strong>high isohemagglutinin titres</strong> (anti-A and anti-B) are characteristic.</li>
      <li>ESR is elevated and liver enzymes are mildly raised.</li>
      <li>Chest radiograph may show transient infiltrates; ultrasound may show ill-defined hepatic granulomas.</li>
      <li>Stool examination is <strong>negative</strong> for eggs and larvae because the worms do not mature.</li>
      <li>Counts should be repeated to confirm the trend and to exclude a transient drug reaction.</li>
    </ul>
    <h4>Differential diagnosis</h4>
    <p>Ascariasis with Löffler syndrome, strongyloidiasis, filariasis, drug hypersensitivity, lymphoma, hepatoblastoma, and other causes of marked eosinophilia. <strong>TES-ELISA</strong> supports the diagnosis, and imaging helps define organ involvement. <strong>Covert toxocariasis</strong> describes non-specific abdominal pain, cough, headache and mild eosinophilia without organ signs. In endemic communities, VLM is most often seen in children with geophagia and a puppy at home.</p>
    <h4>Management</h4>
    <p>Mild disease is self-limiting and needs symptomatic care. Severe or persistent disease is treated with <strong>albendazole</strong>, adding <strong>corticosteroids</strong> when inflammation is marked. Eosinophil counts may normalise slowly over months. Preventing reinfection is as important as drug therapy.</p>
  `,
  tip: "Lead with the triad of hepatomegaly, marked eosinophilia and a positive TES test, then exclude the mimics.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p5g3", domain: "p5", star: true,
  q: "Discuss ocular larva migrans (OLM): clinical presentation, why it mimics retinoblastoma, diagnosis and management.",
  tags: ["ocular larva migrans", "Toxocara", "retinoblastoma", "leukocoria"],
  keypoints: ["ocular larva migrans", "unilateral visual loss", "leukocoria", "retinoblastoma", "posterior pole granuloma", "endophthalmitis", "vitreous band", "eosinophilia absent", "TES-ELISA", "aqueous humour", "Goldmann-Witmer coefficient", "corticosteroids", "vitrectomy", "laser photocoagulation"],
  answer: `
    <h4>Presentation</h4>
    <p>Ocular larva migrans affects older children (mean age about seven to eight years) and usually reflects a low worm burden. A single larva enters the eye and dies in the retina or vitreous, producing a <strong>unilateral</strong> granuloma. The dead larva releases antigens that provoke a granulomatous reaction, and a live larva may be visible at the edge of the lesion. Children present with visual loss, strabismus, <strong>leukocoria</strong> or a red, painful eye. Both eyes are involved in fewer than 10% of cases.</p>
    <h4>Signs</h4>
    <ul>
      <li>Posterior pole or peripheral <strong>granuloma</strong>, sometimes with a visible larval track.</li>
      <li>Vitreous inflammatory band or snowbanking.</li>
      <li>Endophthalmitis, vitreous haemorrhage, retinal detachment or cataract.</li>
    </ul>
    <p>Because leukocoria and a white mass mimic <strong>retinoblastoma</strong>, toxocariasis is a classic reason for unnecessary enucleation. Other mimics are toxoplasmosis, Coats disease, persistent hyperplastic primary vitreous and retinopathy of prematurity.</p>
    <h4>Diagnosis</h4>
    <p>Systemic eosinophilia is usually <strong>absent</strong>, and serum TES-ELISA titres are often low or negative. Diagnosis therefore rests on ophthalmological examination, imaging (ultrasound, optical coherence tomography, fluorescein angiography) and <strong>aqueous or vitreous antibody</strong> testing, interpreted with the Goldmann–Witmer coefficient. Ultrasound shows a solid retinal mass or vitreous band, and OCT defines macular involvement. Serum serology is supportive only.</p>
    <h4>Treatment</h4>
    <p>Corticosteroids control inflammation, and albendazole is added by some specialists. <strong>Laser photocoagulation</strong> of a visible larva and <strong>vitrectomy</strong> for persistent vitreous opacity or detachment are surgical options. Prompt ophthalmology referral protects sight and avoids enucleation; visual prognosis depends on macular involvement and delay in referral. OLM is not associated with systemic illness, so the history and eye examination matter most.</p>
  `,
  tip: "Name retinoblastoma first as the mimic — examiners want the enucleation risk stated explicitly.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p5g4", domain: "p5", star: true,
  q: "How should Toxocara serology and eosinophilia be interpreted in a child with suspected toxocariasis?",
  tags: ["Toxocara serology", "TES antigen", "eosinophilia", "interpretation"],
  keypoints: ["TES antigen", "Western blot", "antibody exposure", "seroprevalence", "low titre OLM", "cross-reactivity", "test of cure", "eosinophilia", "hypergammaglobulinaemia", "organ involvement", "imaging", "asymptomatic seropositive", "algorithm", "covert toxocariasis"],
  answer: `
    <h4>What the tests measure</h4>
    <p>The standard assay is <strong>ELISA with Toxocara excretory–secretory (TES) antigen</strong>; Western blot against low-molecular-weight bands (24–35 kDa) improves specificity. Antibody reflects <strong>exposure</strong>, not necessarily active or symptomatic infection. Titres rise within weeks and may persist for years after the larvae die. IgE is usually raised but is not diagnostic.</p>
    <h4>Interpreting a positive result</h4>
    <ul>
      <li>High seroprevalence in tropical communities means many positive results are incidental.</li>
      <li>VLM usually shows high titres plus marked eosinophilia and organ signs.</li>
      <li>OLM often has <strong>low or negative serum titres</strong>; ocular fluid testing is more useful.</li>
      <li>Cross-reactivity occurs with other helminths (Ascaris, filariae), and rheumatoid factor or hypergammaglobulinaemia can cause false positives.</li>
      <li>Serology is <strong>not a test of cure</strong>; do not repeat it to guide treatment.</li>
      <li>Paired sera showing a rising titre support recent infection, but are rarely available.</li>
    </ul>
    <h4>Interpreting eosinophilia</h4>
    <p>Eosinophilia is non-specific. In toxocariasis it is usually marked in VLM (above 3,000/µL) and mild or absent in OLM and <strong>covert toxocariasis</strong>. Drugs, atopy, lymphoma, adrenal insufficiency and other helminths must be excluded. The pattern — high eosinophils, hepatomegaly, exposure and a positive TES — is more informative than any single number.</p>
    <h4>A practical algorithm</h4>
    <p>Confirm exposure and examine for organ involvement (eye, liver, lung, CNS). Order TES-ELISA with Western blot confirmation, CBC, IgE, liver enzymes and imaging. Treat only symptomatic or organ-threatening disease; observe the well child with mild eosinophilia and a positive titre. Document the result and the decision, because seropositivity may cause anxiety and repeated testing.</p>
  `,
  tip: "State plainly that a positive titre means exposure — treating every seropositive child is the commonest error.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p5g5", domain: "p5", star: true,
  q: "Outline the treatment of toxocariasis and the prevention of human infection in a Philippine community.",
  tags: ["Toxocara", "albendazole", "prevention", "dog deworming", "One Health"],
  keypoints: ["albendazole", "mebendazole", "corticosteroids", "ocular disease", "eosinophil count", "deworming dogs", "puppies", "pyrantel", "sandpits", "hand hygiene", "wash vegetables", "pica", "stray dog control", "One Health", "no vaccine"],
  answer: `
    <h4>Drug treatment</h4>
    <p>Symptomatic visceral disease is treated with <strong>albendazole 400 mg twice daily for five days</strong> (some use 10–14 days); mebendazole is an alternative. <strong>Corticosteroids</strong> are added for severe inflammation, myocarditis, CNS disease or ocular involvement. OLM is managed with steroids and albendazole, with laser or vitrectomy for selected lesions. Response is judged clinically and by falling eosinophil counts, not by serology. Most children recover fully, but severe neurological or myocardial disease carries a worse prognosis.</p>
    <h4>Supportive care</h4>
    <ul>
      <li>Treat anaemia, malnutrition and intercurrent infection.</li>
      <li>Stop pica and geophagia with behavioural advice and supervision.</li>
      <li>Refer eye and CNS cases urgently.</li>
    </ul>
    <h4>Prevention — a One Health approach</h4>
    <p>Deworm dogs and cats regularly: puppies at 2, 4, 6 and 8 weeks, then monthly to six months, and adult dogs quarterly, using <strong>pyrantel</strong>, fenbendazole or milbemycin as directed. Remove faeces promptly, especially from sandpits and public parks, and cover sandboxes. Dispose of dog faeces hygienically rather than using it as fertiliser. Wash hands after contact with soil or animals, and wash vegetables thoroughly. Prevent children eating soil.</p>
    <p><strong>Stray-dog control</strong> and veterinary public health are essential in the Philippines, where free-roaming dogs are common. In endemic barangays, school health education and mass dog deworming reduce soil contamination. There is no human vaccine; health education of pet owners and barangay sanitation are the most cost-effective measures. Follow-up is arranged at two to four weeks. Eggs are not immediately infectious when passed, but they remain viable in soil for months, so removing faeces early and blocking access to contaminated soil both matter.</p>
  `,
  tip: "Pair treatment with source control: deworm the dog, cover the sandpit, stop the pica.",
  sources: ["P1", "P2", "P3", "P6"]
},
{
  id: "p6g1", domain: "p6", star: true,
  q: "Explain autoinfection in Strongyloides stercoralis and distinguish hyperinfection from disseminated strongyloidiasis.",
  tags: ["Strongyloides", "autoinfection", "hyperinfection", "disseminated", "corticosteroids"],
  keypoints: ["Strongyloides stercoralis", "parthenogenetic", "rhabditiform larvae", "filariform larvae", "autoinfection", "heterogonic cycle", "hyperinfection", "dissemination", "corticosteroids", "HTLV-1", "transplantation", "Gram-negative sepsis", "meningitis", "eosinophilia absent", "larva currens"],
  answer: `
    <h4>Life cycle and autoinfection</h4>
    <p><em>Strongyloides stercoralis</em> females are <strong>parthenogenetic</strong> and live embedded in the duodenal and jejunal mucosa. Their eggs hatch in the mucosa, releasing <strong>rhabditiform larvae</strong> that pass in stool. In soil these can become free-living adults (the heterogonic cycle) or develop directly into infective <strong>filariform larvae</strong>. Uniquely, rhabditiform larvae can moult to filariform larvae within the gut lumen or on perianal skin and re-penetrate the host — <strong>autoinfection</strong>. This closed loop allows infection to persist for decades without re-exposure and produces <em>larva currens</em>, a rapidly moving urticarial track. Chronic infection is often asymptomatic or causes intermittent diarrhoea and urticaria, with eosinophilia as the only clue.</p>
    <h4>Hyperinfection versus dissemination</h4>
    <p><strong>Hyperinfection</strong> is a marked acceleration of autoinfection, with large numbers of larvae migrating through the gut and lungs along the normal route. Larval numbers rise dramatically, and larvae can be found in stool, sputum and duodenal fluid. <strong>Disseminated strongyloidiasis</strong> means larvae reach organs outside that route — liver, heart, CNS, skin and urine.</p>
    <h4>Triggers and clinical features</h4>
    <ul>
      <li><strong>Corticosteroids</strong> are the leading trigger; others are HTLV-1, transplantation, chemotherapy, malnutrition, alcoholism and diabetes.</li>
      <li>Abdominal pain, distension, ileus, diarrhoea, malabsorption and GI bleeding.</li>
      <li>Wheeze, cough, haemoptysis and bronchopneumonia from larval lung migration.</li>
      <li>Larvae carry enteric bacteria, causing <strong>Gram-negative sepsis and meningitis</strong>.</li>
      <li>Eosinophilia is often <strong>absent</strong> because steroids suppress it.</li>
    </ul>
    <p>Mortality is high, so unexplained deterioration on steroids in a patient from an endemic area demands urgent stool, sputum and blood investigation and empirical ivermectin. Early recognition and treatment are the only interventions that change outcome.</p>
  `,
  tip: "Define hyperinfection by the route (gut and lungs) and dissemination by ectopic organs — then name steroids as the trigger.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p6g2", domain: "p6", star: true,
  q: "Compare the laboratory methods for diagnosing strongyloidiasis, including Baermann concentration, agar plate culture and serology.",
  tags: ["Strongyloides", "Baermann", "agar plate culture", "NIE ELISA", "diagnosis"],
  keypoints: ["Baermann", "agar plate culture", "Koga", "bacterial tracks", "Harada-Mori", "NIE ELISA", "cross-reaction filariae", "PCR", "duodenal aspirate", "sputum", "short buccal cavity", "genital primordium", "three specimens", "infect laboratory staff"],
  answer: `
    <h4>Stool examination</h4>
    <p>Single direct microscopy detects only about 30–50% of infections because larval output is low and intermittent. Examine at least <strong>three fresh specimens</strong>; larvae are best seen in wet mounts, and sensitivity falls with delayed or refrigerated specimens. Larvae are fragile and die in urine or delayed samples. Concentration may recover larvae, but the dedicated methods below are superior.</p>
    <h4>Baermann and agar plate culture</h4>
    <ul>
      <li><strong>Baermann funnel</strong>: fresh stool on gauze in warm water; larvae migrate downward, collect in the stem and are examined after 30–60 minutes. Simple and inexpensive.</li>
      <li><strong>Agar plate culture (Koga)</strong>: stool on nutrient agar; larvae crawl over the surface carrying bacteria and leave visible <strong>tracks</strong> after two to three days. It is the most sensitive stool method. Seal plates and wear gloves — filariform larvae can infect laboratory staff.</li>
      <li><strong>Harada–Mori</strong> filter-paper culture is an alternative.</li>
    </ul>
    <h4>Serology and molecular tests</h4>
    <p><strong>NIE recombinant antigen ELISA</strong> is the preferred screen, with sensitivity around 90%; it cross-reacts with filariae (<em>Wuchereria</em>, <em>Loa</em>, <em>Brugia</em>) and cannot distinguish current from past infection. Antibody may be negative in immunosuppressed patients. <strong>PCR</strong> of stool is increasingly used. In hyperinfection, examine sputum, BAL, duodenal aspirate, CSF and urine for larvae.</p>
    <h4>Identifying larvae</h4>
    <p>Distinguish <em>Strongyloides</em> rhabditiform larvae (<strong>short buccal cavity</strong>, prominent genital primordium) from hookworm larvae (long buccal cavity). Duodenal biopsy or the Entero-Test string may be needed in chronic low-output infection. Formalin fixation kills larvae but preserves morphology, and culture remains the only method that amplifies the parasite.</p>
  `,
  tip: "Rank the stool methods: agar plate most sensitive, Baermann simple, single microscopy unreliable.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p6g3", domain: "p6", star: true,
  q: "Discuss ivermectin therapy for strongyloidiasis and the screening protocol required before starting corticosteroids.",
  tags: ["Strongyloides", "ivermectin", "screening", "corticosteroids", "hospital protocol"],
  keypoints: ["ivermectin", "200 µg/kg", "albendazole", "screening", "corticosteroids", "NIE ELISA", "agar plate", "Baermann", "empirical treatment", "pregnancy", "Loa loa", "test of cure", "hospital protocol", "pharmacist alert"],
  answer: `
    <h4>Ivermectin</h4>
    <p><strong>Ivermectin 200 µg/kg orally</strong> is the drug of choice. Uncomplicated infection is treated with one dose daily for two days, and a second course is sometimes needed in heavy infection. Hyperinfection or dissemination needs daily treatment until larvae are cleared, often seven days or longer, with expert input. Albendazole 400 mg twice daily for seven days is second line, and is used when ivermectin is unavailable or contraindicated. Adverse effects are usually mild; ivermectin is avoided in pregnancy (use albendazole) and in patients with high <em>Loa loa</em> microfilaraemia, which is not relevant in the Philippines.</p>
    <h4>Who to screen</h4>
    <p>Screen anyone with lifetime residence or travel in an endemic area before <strong>systemic corticosteroids</strong>, chemotherapy, transplantation or other immunosuppression. In the Philippines, a history of barefoot farming or use of unsanitary latrines is enough to warrant testing.</p>
    <h4>Screening strategy</h4>
    <ul>
      <li><strong>NIE ELISA</strong> plus stool agar plate culture or Baermann concentration.</li>
      <li>If positive, treat before immunosuppression.</li>
      <li>If negative but exposure is certain or testing is delayed, give <strong>empirical ivermectin</strong>.</li>
      <li>Do not delay urgent steroid therapy for a negative test; document and follow up.</li>
    </ul>
    <p>Serology can remain positive for years, so it is not used to confirm cure; follow-up stool examination and clinical response guide management. In transplant candidates, screening should be completed weeks before conditioning, not on the day of admission. Nurses and pharmacists should ask the exposure question at pre-assessment. A written <strong>hospital protocol</strong> with <strong>pharmacist alerts</strong> for new steroid orders prevents missed cases, and documented treatment with follow-up stool examination closes the loop.</p>
  `,
  tip: "Write the answer as a protocol: who to screen, which tests, when to treat empirically.",
  sources: ["P1", "P2", "P3", "P13"]
},
{
  id: "p6g4", domain: "p6", star: true,
  q: "Discuss disseminated strongyloidiasis in HTLV-1 infection and transplant recipients: mechanisms, diagnosis and management.",
  tags: ["Strongyloides", "HTLV-1", "transplant", "disseminated", "Gram-negative sepsis"],
  keypoints: ["HTLV-1", "transplantation", "donor-derived infection", "reactivation", "Gram-negative bacteraemia", "meningitis", "pulmonary infiltrates", "ileus", "negative serology", "ivermectin", "reduce immunosuppression", "screening donors", "screening recipients", "mortality"],
  answer: `
    <h4>Why immunity fails</h4>
    <p><strong>HTLV-1</strong> impairs Th2-dependent eosinophil and IgE responses, so co-infected patients have low eosinophil counts, low IgE and severe, often disseminated strongyloidiasis. HTLV-1 is endemic in parts of Japan, the Caribbean, South America and Africa, and co-infection should be sought in severe cases. Corticosteroids add direct suppression. In transplantation, both <strong>donor-derived</strong> infection and reactivation of the recipient's latent infection occur; kidney and stem-cell recipients are best described.</p>
    <h4>Clinical picture</h4>
    <ul>
      <li>Fever, rash, ileus, abdominal pain, diarrhoea and GI bleeding. Skin lesions may be petechial or urticarial.</li>
      <li>Pulmonary infiltrates, wheeze, haemoptysis and respiratory failure.</li>
      <li><strong>Gram-negative bacteraemia and meningitis</strong> from larvae carrying gut flora. Larvae breach the bowel wall, so polymicrobial sepsis is common and may be the presenting feature.</li>
      <li>Larvae in liver, heart, CNS, skin and urine, with jaundice, arrhythmia or seizures.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>Larvae may be found in stool, sputum, BAL, CSF and urine; blood cultures should be taken before antibiotics and often grow enteric organisms. Serology can be <strong>negative</strong> in immunosuppressed patients, so do not rely on it; PCR and direct microscopy are important. Eosinophilia is unreliable.</p>
    <h4>Management and prevention</h4>
    <p>Give <strong>ivermectin daily</strong> until clearance, give empirical broad-spectrum antibiotics for sepsis alongside anthelmintic therapy, and reduce immunosuppression where possible. Early anthelmintic therapy improves survival. Mortality remains 60–90% and is highest when diagnosis is delayed. Prevention is by screening donors and recipients in endemic areas and treating before transplant or steroids. Transplant programmes should screen both donor and recipient, and HTLV-1 testing should be considered in severe or recurrent cases.</p>
  `,
  tip: "Contrast the two settings: HTLV-1 blunts eosinophils, transplant adds donor-derived and drug-suppressed infection.",
  sources: ["P1", "P2", "P3", "P4"]
}
);
