/* Gram-negative & atypical bacteria — part B (gn14–gn30) */
window.QBANK.push(
{
  id: "gn14", domain: "gneg", star: true,
  q: "Explain the modern taxonomy of the Enterobacterales and discuss the opportunistic genera Proteus, Serratia, Citrobacter, Enterobacter and Morganella.",
  tags: ["Enterobacterales", "Proteus", "Serratia", "AmpC"],
  keypoints: ["facultative anaerobes", "oxidase-negative", "lactose fermentation", "MacConkey", "Proteus swarming", "urease", "struvite", "Serratia pigment", "inducible AmpC", "Morganella intrinsic resistance", "source control"],
  answer: `
    <h4>One order, many genera</h4>
    <p>The <strong>Enterobacterales</strong> are facultatively anaerobic, non-spore-forming Gram-negative rods that ferment glucose, reduce nitrate, are catalase-positive and <strong>oxidase-negative</strong>. The old family Enterobacteriaceae has been split into several families — Enterobacteriaceae sensu stricto, Morganellaceae (<em>Proteus</em>, <em>Morganella</em>, <em>Providencia</em>), Yersiniaceae (<em>Yersinia</em>, <em>Serratia</em>) and Erwiniaceae — but laboratories still report them together because identification and susceptibility testing follow the same logic.</p>
    <p>MacConkey agar separates <strong>lactose fermenters</strong> (<em>E. coli</em>, <em>Klebsiella</em>, <em>Enterobacter</em>, <em>Citrobacter</em>) from non-fermenters of lactose (<em>Salmonella</em>, <em>Shigella</em>, <em>Proteus</em>, <em>Yersinia</em>, <em>Morganella</em>, <em>Serratia</em>). Triple sugar iron agar, urease, indole, citrate and H₂S then refine the genus.</p>
    <h4>Opportunistic genera</h4>
    <div class="table-wrap"><table>
      <tr><th>Genus</th><th>Key feature</th><th>Typical disease</th></tr>
      <tr><td><strong><em>Proteus mirabilis</em></strong></td><td>Swarming growth; urease splits urea to ammonia</td><td>Catheter-associated UTI; <strong>struvite stones</strong> from alkaline urine</td></tr>
      <tr><td><strong><em>Serratia marcescens</em></strong></td><td>Red pigment, DNase-positive, intrinsic AmpC</td><td>ICU outbreaks, bacteraemia, pneumonia, eye infection</td></tr>
      <tr><td><strong><em>Citrobacter freundii</em></strong></td><td>Inducible AmpC; H₂S-positive</td><td>UTI, neonatal meningitis, biliary sepsis</td></tr>
      <tr><td><strong><em>Enterobacter cloacae</em></strong></td><td>Inducible AmpC that derepresses during cephalosporin therapy</td><td>Hospital-acquired pneumonia, bacteraemia, wound infection</td></tr>
      <tr><td><strong><em>Morganella morganii</em></strong></td><td>Urease-positive; intrinsic resistance to ampicillin and first-generation cephalosporins</td><td>UTI, wound and intra-abdominal infection</td></tr>
    </table></div>
    <h4>Clinical consequences</h4>
    <ul>
      <li>These organisms exploit <strong>devices, disrupted mucosa and prior antibiotics</strong>; treatment therefore begins with source control — remove the catheter, drain the abscess.</li>
      <li><strong>AmpC producers</strong> may fail ceftriaxone or cefepime despite apparent susceptibility, so a carbapenem or a stable inhibitor combination is preferred for invasive <em>Enterobacter</em> disease.</li>
      <li>Uncomplicated cystitis can be treated with agents that concentrate in urine, such as nitrofurantoin or fosfomycin, sparing carbapenems.</li>
      <li>Carbapenem resistance in this group is usually plasmid-mediated KPC, NDM or OXA-48 and is a WHO critical-priority threat.</li>
    </ul>
  `,
  tip: "Name the AmpC-derepression trap for Enterobacter — that is the prescribing error examiners test.",
  sources: ["S1", "S2", "S8"]
},
{
  id: "gn15", domain: "gneg", star: true,
  q: "Compare plague and yersiniosis. How does Yersinia evade host defences, and what determines the public health response?",
  tags: ["Yersinia pestis", "plague", "yersiniosis", "Yops"],
  keypoints: ["flea-borne zoonosis", "bubonic", "pneumonic", "F1 capsule", "Yop virulon", "type III secretion", "cold enrichment", "pseudoappendicitis", "reactive arthritis", "iron overload", "droplet precautions"],
  answer: `
    <h4>Two species, two diseases</h4>
    <p><em>Yersinia pestis</em> causes plague, while <em>Y. enterocolitica</em> and <em>Y. pseudotuberculosis</em> cause enteric infection. All are Gram-negative coccobacilli that grow at 25–28 °C, are oxidase-negative, and share a <strong>type III secretion system</strong> that injects <strong>Yop</strong> effectors into host cells to block phagocytosis and cytokine production.</p>
    <h4>Plague</h4>
    <p>Plague is a <strong>flea-borne zoonosis</strong> of rodents; humans are incidental hosts. After a flea bite, bacteria travel to regional nodes and produce <strong>bubonic plague</strong> — painful, matted lymphadenopathy with fever. Haematogenous spread gives <strong>septicaemic plague</strong> and secondary <strong>pneumonic plague</strong>, which spreads by respiratory droplets and is rapidly lethal if treatment is delayed. Virulence depends on the <strong>F1 capsule</strong> (antiphagocytic), <strong>plasminogen activator</strong> (tissue invasion), lipopolysaccharide and the Yop virulon. Bipolar "safety-pin" staining is classic but insensitive.</p>
    <h4>Yersiniosis</h4>
    <p><em>Y. enterocolitica</em> is acquired from pork, milk and water and multiplies at refrigeration temperature, so <strong>cold enrichment</strong> improves recovery. It invades the terminal ileum, causing diarrhoea, <strong>pseudoappendicitis</strong> and mesenteric adenitis, especially in children. Complications include <strong>reactive arthritis</strong> (HLA-B27) and erythema nodosum. <strong>Iron overload</strong> and desferrioxamine therapy predispose to severe septicaemia because the organism scavenges iron avidly.</p>
    <h4>Diagnosis and treatment</h4>
    <ul>
      <li>Culture of blood, bubo aspirate or stool; <strong>PCR</strong> and antigen tests are faster and safer for laboratories.</li>
      <li>Plague is notifiable and epidemic-prone: use <strong>droplet precautions</strong> for suspected pneumonic cases and notify immediately.</li>
      <li>Treatment is an aminoglycoside (streptomycin or gentamicin), doxycycline or a fluoroquinolone; yersiniosis is usually self-limited and needs antibiotics only when severe or invasive.</li>
      <li>Plague control combines rodent and flea management, surveillance and rapid case finding; a vaccine is not widely available.</li>
    </ul>
  `,
  tip: "Separate the vector (flea) from the transmission route that matters for isolation (droplets in pneumonic plague).",
  sources: ["S1", "S4", "S10"]
},
{
  id: "gn16", domain: "gneg",
  q: "Discuss non-cholera Vibrio species, Aeromonas and Plesiomonas as causes of food-borne and wound infection.",
  tags: ["Vibrio parahaemolyticus", "Vibrio vulnificus", "Aeromonas", "TCBS"],
  keypoints: ["halophilic", "seafood", "Kanagawa phenomenon", "necrotising fasciitis", "iron overload", "Aeromonas oxidase-positive", "Plesiomonas inositol", "TCBS", "doxycycline plus ceftriaxone", "debridement"],
  answer: `
    <h4>The halophilic vibrios</h4>
    <p>Non-cholera vibrios are <strong>halophilic</strong> curved, oxidase-positive rods found in estuarine water and shellfish. <em>V. parahaemolyticus</em> is a leading cause of seafood-associated gastroenteritis; the <strong>Kanagawa phenomenon</strong> — β-haemolysis on Wagatsuma agar — reflects production of thermostable direct haemolysin, a pore-forming toxin that damages enterocytes. The organism also uses two type III secretion systems to inject effectors that disrupt the cytoskeleton and trigger inflammation. <em>V. vulnificus</em> causes two feared syndromes: <strong>wound infection with necrotising fasciitis</strong> after seawater contact, and <strong>fulminant septicaemia</strong> in people with cirrhosis, haemochromatosis or other iron overload. <em>V. alginolyticus</em> causes ear and wound infection, and non-O1/non-O139 <em>V. cholerae</em> causes sporadic diarrhoea.</p>
    <h4>Aeromonas and Plesiomonas</h4>
    <p><em>Aeromonas hydrophila</em> and related species are oxidase-positive, ampicillin-resistant freshwater organisms causing wound infection (including after leech therapy), gastroenteritis and bacteraemia in immunocompromised hosts. <em>Plesiomonas shigelloides</em> is oxidase-positive, DNase-positive and ferments inositol; it is acquired from freshwater and shellfish and usually causes self-limited diarrhoea.</p>
    <h4>Laboratory and clinical points</h4>
    <ul>
      <li><strong>TCBS agar</strong> selects vibrios: <em>V. cholerae</em> ferments sucrose and forms yellow colonies, whereas <em>V. parahaemolyticus</em> and <em>V. vulnificus</em> form green colonies.</li>
      <li><strong>Oxidase positivity</strong> and ampicillin resistance separate <em>Aeromonas</em> from most Enterobacterales, while <em>Plesiomonas</em> is distinguished by inositol fermentation.</li>
      <li>Severe vibrio infection is treated with <strong>doxycycline plus ceftriaxone</strong> (or a fluoroquinolone), together with urgent surgical debridement for necrotising fasciitis and aggressive fluid replacement.</li>
      <li>Prevention means avoiding raw shellfish, covering wounds exposed to seawater, cooking seafood thoroughly and reporting clusters to public health authorities; in high-risk liver disease, even a minor wound after seawater contact warrants urgent review.</li>
    </ul>
  `,
  tip: "V. vulnificus is the one to emphasise: iron overload plus a wound or oyster means surgical emergency, not just antibiotics.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "gn17", domain: "gneg", star: true,
  q: "Describe brucellosis: transmission, intracellular pathogenesis, focal complications, laboratory diagnosis and treatment principles.",
  tags: ["Brucella", "zoonosis", "undulant fever", "endocarditis"],
  keypoints: ["facultative intracellular", "B. melitensis", "unpasteurised dairy", "BSL-3", "undulant fever", "sacroiliitis", "endocarditis", "bone marrow culture", "Rose Bengal", "doxycycline plus rifampicin", "relapse"],
  answer: `
    <h4>Organism and transmission</h4>
    <p><em>Brucella</em> species are small, non-motile, oxidase-positive Gram-negative coccobacilli that grow slowly and are <strong>facultative intracellular</strong> parasites of macrophages. <em>B. melitensis</em> (goats and sheep) causes the most severe disease; <em>B. abortus</em> (cattle), <em>B. suis</em> (pigs) and <em>B. canis</em> (dogs) also infect humans. Transmission is a <strong>zoonosis</strong> — unpasteurised milk and cheese, contact with placenta or birth fluids, and laboratory aerosol. It is a notorious laboratory-acquired infection, so manipulation requires BSL-3.</p>
    <h4>Pathogenesis and clinical picture</h4>
    <p>Bacteria penetrate mucosa, are phagocytosed, and survive inside monocytes by limiting phagosome–lysosome fusion and dampening innate signalling. They spread through lymphatics to the reticuloendothelial system, producing granulomas in liver, spleen, bone marrow and lymph nodes. The classic presentation is <strong>undulant fever</strong> with drenching sweats, fatigue, headache, arthralgia and hepatosplenomegaly. Focal disease includes <strong>sacroiliitis</strong> and spondylitis, orchitis and <strong>endocarditis</strong>, which is the usual cause of death. Neurobrucellosis is uncommon but disabling.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Blood or bone marrow culture</strong> — marrow is more sensitive; incubation must be prolonged and biphasic (Castaneda) bottles help.</li>
      <li><strong>Serology</strong> — Rose Bengal screening followed by standard agglutination or ELISA; interpret cautiously in endemic areas.</li>
      <li><strong>PCR</strong> on blood or tissue, and histology of biopsy material.</li>
    </ul>
    <h4>Treatment and prevention</h4>
    <p>Because the organism is intracellular and relapse is common, treatment is <strong>combination therapy for at least six weeks</strong>: doxycycline with rifampicin, or doxycycline with an aminoglycoside. Endocarditis needs longer therapy and often valve surgery, and relapse after inadequate courses is well described. Prevention relies on pasteurisation, animal vaccination, protective clothing for farmers and veterinarians, and strict laboratory containment.</p>
  `,
  tip: "Two drugs, six weeks, and endocarditis as the lethal complication — that triad answers most brucellosis questions.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "gn18", domain: "gneg",
  q: "Outline tularaemia: the organism, its ecology, the clinical forms and the laboratory and therapeutic approach.",
  tags: ["Francisella tularensis", "tularaemia", "zoonosis", "ulceroglandular"],
  keypoints: ["fastidious", "cysteine requirement", "facultative intracellular", "BSL-3", "lagomorphs", "tick", "ulceroglandular", "pneumonic", "serology", "streptomycin", "gentamicin"],
  answer: `
    <h4>Organism</h4>
    <p><em>Francisella tularensis</em> is a tiny, pleomorphic, non-motile Gram-negative coccobacillus that is <strong>fastidious</strong>, requiring cysteine for growth. It is a facultative intracellular pathogen of macrophages and has an exceptionally low infectious dose by aerosol, which is why it is handled at BSL-3 and is classified as a potential bioterrorism agent. Two subspecies matter: <em>F. tularensis</em> subsp. <em>tularensis</em> (type A, North America, more severe) and subsp. <em>holarctica</em> (type B, milder and widespread).</p>
    <h4>Ecology and transmission</h4>
    <p>Tularaemia is a <strong>zoonosis</strong> of rodents and lagomorphs. Humans are infected by tick or deer-fly bites, contact with rabbit or hare carcasses, contaminated water, or inhalation of aerosolised organisms during mowing or laboratory work. Person-to-person spread does not occur.</p>
    <h4>Pathogenesis</h4>
    <p>After entry, the organism is taken up by macrophages but escapes the phagosome into the cytosol, where it replicates and triggers inflammasome-driven inflammation. Its lipopolysaccharide is unusually inert, so early local signs may be slight while the organism disseminates to lymph nodes, lung, liver and spleen. Cell-mediated immunity is required for clearance, which explains prolonged illness and relapses if treatment is late.</p>
    <h4>Clinical forms</h4>
    <div class="table-wrap"><table>
      <tr><th>Form</th><th>Route</th><th>Features</th></tr>
      <tr><td><strong>Ulceroglandular</strong></td><td>Skin</td><td>Painful ulcer with regional lymphadenopathy — the commonest form</td></tr>
      <tr><td><strong>Oculoglandular</strong></td><td>Conjunctiva</td><td>Painful conjunctivitis, preauricular nodes</td></tr>
      <tr><td><strong>Oropharyngeal</strong></td><td>Ingestion</td><td>Pharyngitis, cervical nodes, abdominal pain</td></tr>
      <tr><td><strong>Pneumonic</strong></td><td>Inhalation</td><td>Severe pneumonia, pleural effusion</td></tr>
      <tr><td><strong>Typhoidal</strong></td><td>Any</td><td>Fever without localising signs, sepsis</td></tr>
    </table></div>
    <h4>Diagnosis and treatment</h4>
    <ul>
      <li><strong>Serology</strong> is the usual confirmatory test; PCR and direct fluorescent antibody give earlier results; culture is hazardous and often negative.</li>
      <li><strong>Aminoglycosides</strong> (streptomycin or gentamicin) are first-line; ciprofloxacin or doxycycline are alternatives and are used for post-exposure prophylaxis.</li>
      <li>Prevention combines gloves when handling game, tick precautions, rodent control, water treatment and laboratory containment.</li>
    </ul>
  `,
  tip: "The ulcer plus regional nodes after rabbit or tick contact is the giveaway; mention the BSL-3 hazard before culture.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "gn19", domain: "gneg", star: true,
  q: "Discuss the pathogenic Bartonella species, the syndromes they cause and the diagnostic and therapeutic approach to cat-scratch disease and culture-negative endocarditis.",
  tags: ["Bartonella", "cat-scratch disease", "bacillary angiomatosis", "endocarditis"],
  keypoints: ["erythrocyte and endothelial parasitism", "B. henselae", "cat flea", "B. quintana", "body louse", "bacillary angiomatosis", "Warthin–Starry", "serology", "azithromycin", "doxycycline plus rifampicin"],
  answer: `
    <h4>The genus</h4>
    <p><em>Bartonella</em> species are small, fastidious, oxidase-negative Gram-negative bacilli that parasitise <strong>erythrocytes and endothelial cells</strong>. Endothelial infection drives angiogenesis, which explains the vascular lesions of bacillary angiomatosis. They are transmitted by arthropod vectors and are difficult to culture, so diagnosis relies on serology, PCR and histology.</p>
    <h4>Clinical syndromes</h4>
    <div class="table-wrap"><table>
      <tr><th>Species</th><th>Vector / reservoir</th><th>Disease</th></tr>
      <tr><td><strong><em>B. henselae</em></strong></td><td>Cat flea; cats</td><td><strong>Cat-scratch disease</strong>; bacillary angiomatosis and peliosis hepatis in HIV</td></tr>
      <tr><td><strong><em>B. quintana</em></strong></td><td>Body louse; humans</td><td>Trench fever, chronic bacteraemia, <strong>culture-negative endocarditis</strong>, bacillary angiomatosis</td></tr>
      <tr><td><strong><em>B. bacilliformis</em></strong></td><td>Sandfly; Andes</td><td><strong>Oroya fever</strong> (acute haemolytic anaemia) and verruga peruana</td></tr>
    </table></div>
    <h4>Cat-scratch disease</h4>
    <p>A papule or pustule appears at the inoculation site after a scratch or flea exposure, followed by <strong>regional lymphadenopathy</strong> that may suppurate, with low fever and malaise. Atypical presentations include Parinaud oculoglandular syndrome, encephalopathy, osteomyelitis, hepatosplenic granulomas and endocarditis. In immunocompromised patients, especially with advanced HIV, <em>B. henselae</em> and <em>B. quintana</em> cause <strong>bacillary angiomatosis</strong> — vascular, friable lesions resembling Kaposi sarcoma — and peliosis of the liver and spleen.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Serology</strong> by indirect immunofluorescence is the usual test for cat-scratch disease.</li>
      <li><strong>PCR</strong> and <strong>Warthin–Starry silver stain</strong> of tissue or valve show the organisms.</li>
      <li>Culture needs prolonged incubation and lysis–centrifugation; it is insensitive but allows susceptibility testing in endocarditis.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Typical cat-scratch lymphadenitis is self-limited, and <strong>azithromycin</strong> shortens it. Bacillary angiomatosis, peliosis and endocarditis require prolonged <strong>doxycycline with rifampicin</strong>, and valve surgery is often needed. Oroya fever responds to antimicrobials but carries high mortality untreated, so transfusion support matters. Prevention is largely flea control on pets and avoiding scratches from infected animals.</p>
  `,
  tip: "Link the vascular lesions to endothelial infection — that single mechanism explains angiomatosis, peliosis and endocarditis.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "gn20", domain: "gneg", star: true,
  q: "Describe Haemophilus influenzae: growth requirements, virulence, the difference between type b and non-typeable strains, and prevention.",
  tags: ["Haemophilus influenzae", "Hib", "PRP", "satellitism"],
  keypoints: ["factor X", "factor V", "chocolate agar", "satellitism", "PRP capsule", "type b", "non-typeable", "IgA protease", "Hib conjugate vaccine", "rifampicin prophylaxis"],
  answer: `
    <h4>Organism and growth requirements</h4>
    <p><em>Haemophilus influenzae</em> is a small, pleomorphic Gram-negative coccobacillus that is <strong>fastidious</strong>: it needs <strong>factor X (haemin)</strong> and <strong>factor V (NAD)</strong>, both supplied by <strong>chocolate agar</strong>. On plain blood agar it grows only as satellite colonies around staphylococci that leak NAD — the <strong>satellitism</strong> phenomenon. Growth is enhanced by 5% CO₂.</p>
    <h4>Virulence and epidemiology</h4>
    <p>Strains are classified by capsule (a–f). <strong>Type b (Hib)</strong> is the classic invasive serotype because its <strong>polyribitol phosphate (PRP)</strong> capsule resists phagocytosis and complement. <strong>Non-typeable</strong> strains (NTHi) lack capsule, form biofilms and cause mucosal disease. <strong>IgA1 protease</strong> and lipooligosaccharide promote mucosal persistence and inflammation. Hib disease has collapsed where conjugate vaccine is used; NTHi disease has not.</p>
    <h4>Clinical disease</h4>
    <ul>
      <li><strong>Hib:</strong> meningitis, epiglottitis, pneumonia, septic arthritis, cellulitis and empyema in unvaccinated children.</li>
      <li><strong>NTHi:</strong> otitis media, sinusitis, conjunctivitis, and exacerbations of COPD and bronchiectasis.</li>
      <li>Adults with COPD, asplenia, HIV or malignancy are also at risk of invasive disease.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>Gram stain of CSF or other sterile fluid, culture on chocolate agar, and <strong>latex agglutination or PCR</strong> for PRP antigen. Antigen testing is useful when antibiotics were given first. For respiratory specimens, culture must be interpreted with the Gram stain because colonisation is common.</p>
    <h4>Treatment and prevention</h4>
    <p>Invasive disease is treated with a <strong>third-generation cephalosporin</strong>; respiratory NTHi infection with amoxicillin–clavulanate, cefuroxime or a macrolide according to susceptibility. <strong>Hib conjugate vaccine</strong> is the key preventive measure. Household contacts of a Hib case need <strong>chemoprophylaxis with rifampicin</strong> when an unvaccinated or young child is at home, and droplet precautions apply until 24 hours of effective therapy.</p>
  `,
  tip: "Contrast Hib (capsule, invasive, vaccine-preventable) with NTHi (biofilm, mucosal, not covered) — that comparison earns the marks.",
  sources: ["S1", "S2", "S10"]
},
{
  id: "gn21", domain: "gneg",
  q: "Why is Moraxella catarrhalis an important respiratory pathogen, and why does penicillin fail despite laboratory susceptibility?",
  tags: ["Moraxella catarrhalis", "otitis media", "BRO β-lactamase", "COPD"],
  keypoints: ["Gram-negative diplococcus", "DNase-positive", "hockey puck", "adhesins", "biofilm", "BRO-1", "BRO-2", "β-lactamase", "amoxicillin–clavulanate", "otitis media"],
  answer: `
    <h4>Organism</h4>
    <p><em>Moraxella catarrhalis</em> is a <strong>Gram-negative diplococcus</strong> that is oxidase-positive, catalase-positive, non-motile and <strong>DNase-positive</strong>. Unlike <em>Neisseria</em>, it grows on ordinary media at 35–37 °C and reduces nitrate. Colonies are opaque and can be slid across the agar surface — the "hockey puck" sign. It colonises the upper respiratory tract of children and is a common cause of mucosal infection.</p>
    <h4>Virulence and resistance</h4>
    <ul>
      <li><strong>Adhesins</strong> (UspA, Hag, Msp) bind respiratory epithelium and extracellular matrix.</li>
      <li><strong>Lipooligosaccharide</strong> and outer-membrane vesicles drive inflammation.</li>
      <li><strong>Biofilm</strong> formation contributes to otitis media and persistence in COPD.</li>
      <li><strong>β-lactamase</strong> (BRO-1, BRO-2) is produced by most clinical strains, so <strong>penicillin and ampicillin fail</strong> even when disk diffusion suggests susceptibility. Confirm with a nitrocefin test or choose a stable agent.</li>
    </ul>
    <h4>Clinical syndromes</h4>
    <p>In children it is a leading cause of <strong>acute otitis media</strong> after pneumococcus and non-typeable <em>H. influenzae</em>, and it causes sinusitis. In adults it triggers <strong>acute exacerbations of COPD</strong> and, in the elderly or immunocompromised, pneumonia — occasionally with bacteraemia. It also causes nosocomial respiratory outbreaks spread by hands and contaminated equipment.</p>
    <h4>Diagnosis</h4>
    <p>Gram stain shows Gram-negative diplococci, which must be distinguished from <em>Neisseria</em> by <strong>DNase positivity</strong>, growth on nutrient agar and nitrate reduction. MALDI-TOF gives rapid identification. Susceptibility testing should include a β-lactamase test, because routine penicillin results mislead.</p>
    <h4>Treatment and prevention</h4>
    <p>Use <strong>amoxicillin–clavulanate</strong>, cefuroxime, a macrolide, tetracycline or co-trimoxazole; fluoroquinolones are reserved for adults with comorbidity. There is no vaccine. Hand hygiene, cohorting during outbreaks and appropriate antibiotic choice for otitis media and COPD limit spread and resistance.</p>
  `,
  tip: "The BRO β-lactamase is the whole point: the disk says susceptible, the patient fails penicillin.",
  sources: ["S2", "S4", "S9"]
},
{
  id: "gn22", domain: "gneg", star: true,
  q: "Explain Q fever: transmission, acute and chronic disease, the phase I/II serological pattern and management.",
  tags: ["Coxiella burnetii", "Q fever", "phase I IgG", "zoonosis"],
  keypoints: ["obligate intracellular", "aerosol", "placenta", "pneumonia", "granulomatous hepatitis", "culture-negative endocarditis", "phase I IgG", "phase II", "doxycycline", "hydroxychloroquine"],
  answer: `
    <h4>Organism and transmission</h4>
    <p><em>Coxiella burnetii</em> is a small, pleomorphic, <strong>obligate intracellular</strong> Gram-negative coccobacillus with a spore-like small-cell form that survives drying and environmental stress. It is a <strong>zoonosis</strong> of sheep, goats and cattle, and humans are infected by inhaling contaminated dust or aerosols, especially at parturition when the placenta is heavily loaded with organisms. Person-to-person spread is rare. Because it is highly infectious by aerosol, culture requires BSL-3.</p>
    <h4>Acute Q fever</h4>
    <p>After an incubation of roughly two to three weeks, patients develop abrupt fever, severe headache, myalgia, sweats and fatigue. <strong>Pneumonia</strong> and <strong>granulomatous hepatitis</strong> are the characteristic manifestations; the pneumonia may be mild with few physical signs, and liver enzymes are often raised. Most acute cases resolve, but fatigue can persist for months.</p>
    <h4>Chronic Q fever</h4>
    <p>Chronic infection is defined by persistence beyond six months and occurs mainly in patients with <strong>valvular heart disease, vascular grafts, immunosuppression or pregnancy</strong>. <strong>Culture-negative endocarditis</strong> is the classic form; infected aneurysms and osteomyelitis also occur. Chronic Q fever is insidious and easily missed.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Serology</strong> is the mainstay: phase II antibodies dominate acute infection, whereas a high <strong>phase I IgG</strong> titre indicates chronic disease.</li>
      <li><strong>PCR</strong> on blood, valve tissue or placenta; culture is hazardous and slow.</li>
      <li>Echocardiography and vascular imaging are needed to find the focus in chronic disease.</li>
    </ul>
    <h4>Treatment and prevention</h4>
    <p>Acute illness is treated with <strong>doxycycline</strong>. Chronic endocarditis requires prolonged <strong>doxycycline plus hydroxychloroquine</strong>, with monitoring for retinopathy, and often valve surgery. Pregnancy is treated with co-trimoxazole. Prevention targets occupational exposure — veterinary and abattoir workers, protective clothing and safe disposal of placentas — with vaccination of at-risk workers where available.</p>
  `,
  tip: "Phase II = acute, phase I = chronic is counter-intuitive; state it explicitly before discussing endocarditis.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "gn23", domain: "gneg", star: true,
  q: "Describe Chlamydia trachomatis: its life cycle, the diseases caused by different serovars, and the principles of diagnosis and treatment.",
  tags: ["Chlamydia trachomatis", "trachoma", "LGV", "NAAT"],
  keypoints: ["elementary body", "reticulate body", "inclusion", "serovars A–C", "serovars D–K", "L1–L3", "pelvic inflammatory disease", "NAAT", "doxycycline", "azithromycin", "partner treatment"],
  answer: `
    <h4>Organism and life cycle</h4>
    <p><em>Chlamydia trachomatis</em> is an <strong>obligate intracellular</strong> bacterium with a biphasic cycle: the infectious <strong>elementary body</strong> attaches and is endocytosed, then converts into the metabolically active <strong>reticulate body</strong>, which divides inside an inclusion. Reticulate bodies reorganise into elementary bodies, which are released to infect neighbouring cells. The organism avoids phagolysosomal fusion and depends on host ATP.</p>
    <h4>Serovars and disease</h4>
    <div class="table-wrap"><table>
      <tr><th>Serovars</th><th>Disease</th></tr>
      <tr><td><strong>A–C</strong></td><td>Trachoma — follicular conjunctivitis, trichiasis, corneal scarring and blindness</td></tr>
      <tr><td><strong>D–K</strong></td><td>Urethritis, cervicitis, pelvic inflammatory disease, neonatal conjunctivitis and pneumonia</td></tr>
      <tr><td><strong>L1–L3</strong></td><td><strong>Lymphogranuloma venereum</strong> — painless ulcer, tender buboes, proctitis</td></tr>
    </table></div>
    <h4>Genital infection</h4>
    <p>Most genital infections are asymptomatic, which drives silent transmission. Symptomatic urethritis causes dysuria and discharge; cervicitis causes mucopurulent discharge and contact bleeding. Ascending infection causes <strong>pelvic inflammatory disease</strong> with tubal scarring, infertility and ectopic pregnancy; perihepatitis (Fitz-Hugh–Curtis syndrome) causes right upper quadrant pain. Neonates acquire conjunctivitis and pneumonia during delivery. LGV, common among men who have sex with men, causes proctitis that mimics inflammatory bowel disease.</p>
    <h4>Diagnosis</h4>
    <p><strong>NAAT</strong> on first-void urine or a vaginal swab is the test of choice; rectal and pharyngeal sampling is guided by exposure. Culture on McCoy cells and direct fluorescent antibody are rarely used now. Trachoma is diagnosed clinically, with NAAT for confirmation.</p>
    <h4>Treatment and prevention</h4>
    <p>Uncomplicated genital infection is treated with <strong>doxycycline for seven days</strong>, or <strong>azithromycin</strong> as a single dose, which is preferred in pregnancy. LGV needs a longer tetracycline course. Partners must be treated, and screening of sexually active young people and pregnant women prevents sequelae. There is no vaccine; behavioural prevention and prompt partner treatment remain essential.</p>
  `,
  tip: "Serovar letter tells the disease: A–C eye, D–K genital, L1–L3 LGV. Build the answer around that map.",
  sources: ["S4", "S9", "S11"]
},
{
  id: "gn24", domain: "gneg",
  q: "Discuss Mycoplasma genitalium, Mycoplasma hominis and Ureaplasma as genital pathogens: pathogenesis, diagnosis, resistance and treatment.",
  tags: ["Mycoplasma genitalium", "Ureaplasma", "macrolide resistance", "urethritis"],
  keypoints: ["no cell wall", "sterol membrane", "non-gonococcal urethritis", "pelvic inflammatory disease", "23S rRNA", "macrolide resistance", "moxifloxacin", "NAAT", "β-lactams ineffective", "partner notification"],
  answer: `
    <h4>Organisms without a cell wall</h4>
    <p><em>Mycoplasma genitalium</em>, <em>M. hominis</em>, <em>Ureaplasma urealyticum</em> and <em>U. parvum</em> are among the smallest free-living bacteria. They lack peptidoglycan, so <strong>all β-lactams are ineffective</strong>, and they are bounded only by a sterol-containing membrane. Most grow slowly on specialised media, so molecular testing has replaced culture for genital infection. <em>M. pneumoniae</em>, by contrast, is a respiratory pathogen.</p>
    <h4>Clinical syndromes</h4>
    <ul>
      <li><strong><em>M. genitalium</em></strong> — non-gonococcal urethritis, cervicitis and pelvic inflammatory disease; it is associated with infertility and adverse pregnancy outcomes. Infection is often asymptomatic and persists for months.</li>
      <li><strong><em>M. hominis</em></strong> — bacterial vaginosis-like discharge, post-partum and post-abortion fever, and occasionally neonatal infection; it is intrinsically resistant to macrolides.</li>
      <li><strong><em>Ureaplasma</em></strong> — urethritis, chorioamnionitis, preterm birth, and in very low-birth-weight infants chronic lung disease and meningitis. It hydrolyses urea, hence the name.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p><strong>NAAT</strong> is the method of choice, ideally with detection of macrolide-resistance mutations in the <strong>23S rRNA</strong> gene for <em>M. genitalium</em>. Culture needs specialised medium and takes days; serology is unhelpful because infection is mucosal and antibody responses are inconsistent. Because these organisms can colonise, a positive result must be interpreted with symptoms and signs.</p>
    <h4>Treatment and resistance</h4>
    <p><em>M. genitalium</em> has acquired <strong>macrolide resistance</strong> widely, so resistance-guided therapy is recommended: doxycycline first to reduce bacterial load, then azithromycin if the strain is susceptible, or <strong>moxifloxacin</strong> if it is resistant. <em>M. hominis</em> responds to clindamycin or a tetracycline; ureaplasmas usually respond to macrolides or tetracyclines. Partner notification and retesting after treatment are essential, and the WHO lists drug-resistant <em>M. genitalium</em> as a priority pathogen.</p>
  `,
  tip: "Say 'no cell wall, so no β-lactams' first, then explain why macrolide resistance makes M. genitalium a stewardship problem.",
  sources: ["S7", "S9", "S11"]
},
{
  id: "gn25", domain: "gneg", star: true,
  q: "Compare the rickettsial groups and explain why doxycycline must be started on clinical suspicion.",
  tags: ["Rickettsia", "scrub typhus", "eschar", "doxycycline"],
  keypoints: ["obligate intracellular", "endothelial tropism", "vasculitis", "tick", "flea", "louse", "mite", "eschar", "petechial rash", "serology", "doxycycline"],
  answer: `
    <h4>Organism and transmission</h4>
    <p>Rickettsiae are small, <strong>obligate intracellular</strong> Gram-negative coccobacilli that infect <strong>endothelial cells</strong>. Each species has an arthropod vector — ticks for spotted fever group rickettsiae, fleas for murine typhus, body lice for epidemic typhus, and mites for scrub typhus (<em>Orientia tsutsugamushi</em>). Humans are usually incidental hosts, and the geographic distribution follows the vector.</p>
    <h4>Pathogenesis</h4>
    <p>After inoculation, rickettsiae spread haematogenously and invade vascular endothelium, where they replicate and induce <strong>vasculitis</strong>. Increased vascular permeability causes oedema, rash and hypovolaemia; severe disease produces microthrombi, haemorrhage and multi-organ dysfunction. The rash reflects dermal vasculitis, and an <strong>eschar</strong> marks the bite in scrub typhus, boutonneuse fever and African tick bite fever, but not in Rocky Mountain spotted fever.</p>
    <h4>Clinical groups</h4>
    <div class="table-wrap"><table>
      <tr><th>Group</th><th>Example</th><th>Clue</th></tr>
      <tr><td>Spotted fever</td><td><em>R. rickettsii</em></td><td>Fever, headache, petechial rash involving palms and soles</td></tr>
      <tr><td>Typhus</td><td><em>R. prowazekii</em>, <em>R. typhi</em></td><td>Louse- or flea-borne; rash starts on the trunk</td></tr>
      <tr><td>Scrub typhus</td><td><em>Orientia tsutsugamushi</em></td><td>Mite bite with eschar, regional nodes, pneumonitis</td></tr>
    </table></div>
    <p>Severe cases develop shock, acute respiratory distress, acute kidney injury and gangrene, particularly in glucose-6-phosphate dehydrogenase deficiency, pregnancy and older age.</p>
    <h4>Diagnosis and treatment</h4>
    <p>Diagnosis is clinical and must not wait for laboratory confirmation. <strong>Serology</strong> by indirect immunofluorescence needs paired samples and is retrospective; <strong>PCR</strong> of an eschar, skin biopsy or blood is more rapid; immunohistochemistry on biopsy is useful. Culture requires BSL-3 and is rarely available.</p>
    <p><strong>Doxycycline is the drug of choice</strong>, including in children and in pregnancy when disease is severe, because the risk of untreated rickettsiosis outweighs dental staining. Chloramphenicol is an alternative where doxycycline is unavailable. Supportive care and vector control complete management.</p>
  `,
  tip: "Never wait for serology: the treatment decision is clinical, and doxycycline is given to children when the disease is severe.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "gn26", domain: "gneg", star: true,
  q: "Explain the epidemiology, pathogenesis, clinical spectrum and laboratory diagnosis of leptospirosis, with reference to flood-prone settings.",
  tags: ["Leptospira", "Weil disease", "MAT", "flood"],
  keypoints: ["spirochete", "rodent reservoir", "urine", "abraded skin", "leptospiraemic phase", "vasculitis", "conjunctival suffusion", "calf myalgia", "Weil disease", "MAT", "Jarisch–Herxheimer"],
  answer: `
    <h4>Organism and epidemiology</h4>
    <p><em>Leptospira</em> are thin, coiled, aerobic spirochetes with hooked ends. They grow slowly in special media (EMJH) and are seen by dark-field microscopy or silver stain. Infection is a <strong>zoonosis</strong>: rodents are the main reservoir and shed organisms in urine, contaminating water and soil. Humans are infected through abraded skin or mucous membranes, which explains the association with flooding, rice farming, sewage work and recreational water — highly relevant in the Philippines.</p>
    <h4>Pathogenesis</h4>
    <p>After entry, leptospires disseminate haematogenously in the <strong>leptospiraemic phase</strong> and then localise to kidneys, liver, lungs and meninges. They damage capillaries directly and by immune mechanisms, producing <strong>vasculitis</strong> with endothelial injury and increased permeability. Renal involvement is a tubulointerstitial nephritis with impaired concentrating ability, and pulmonary involvement causes alveolar haemorrhage.</p>
    <h4>Clinical spectrum</h4>
    <ul>
      <li><strong>Anicteric leptospirosis</strong> — abrupt fever, severe headache, <strong>calf myalgia</strong>, conjunctival suffusion, nausea and rash; often biphasic with a brief remission.</li>
      <li><strong>Weil disease</strong> — jaundice, acute kidney injury and haemorrhage, with hypotension and myocarditis; this is the severe form.</li>
      <li><strong>Pulmonary haemorrhage</strong> — a feared complication with high mortality.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>The <strong>microscopic agglutination test (MAT)</strong> is the reference serological method but needs paired samples; IgM ELISA and rapid tests support earlier diagnosis. <strong>PCR</strong> on blood or urine is useful in the first week. Dark-field microscopy is insensitive and culture takes weeks, so treatment is started empirically.</p>
    <h4>Treatment and prevention</h4>
    <p>Mild disease is treated with doxycycline or amoxicillin; severe disease with intravenous benzylpenicillin or ceftriaxone, plus supportive care and dialysis as needed. A <strong>Jarisch–Herxheimer reaction</strong> may follow the first dose. Prevention requires rodent control, protective clothing and boots, water sanitation, and chemoprophylaxis for short-term high-risk exposure.</p>
  `,
  tip: "Conjunctival suffusion plus calf pain after flood exposure is the clinical pair to lead with.",
  sources: ["S1", "S4", "S19"]
},
{
  id: "gn27", domain: "gneg", star: true,
  q: "Compare Lyme borreliosis and relapsing fever. How does Borrelia persist, and how is each diagnosed and treated?",
  tags: ["Borrelia", "Lyme disease", "relapsing fever", "erythema migrans"],
  keypoints: ["spirochete", "Ixodes", "erythema migrans", "OspC", "VlsE", "antigenic variation", "two-tier serology", "ceftriaxone", "doxycycline", "Jarisch–Herxheimer"],
  answer: `
    <h4>The spirochete</h4>
    <p><em>Borrelia</em> species are motile, helical spirochetes seen by dark-field microscopy or silver stain and grown only with difficulty. Two groups cause human disease: the <strong>Lyme borreliosis</strong> group, transmitted by <em>Ixodes</em> ticks, and the <strong>relapsing fever</strong> group, transmitted by lice (<em>B. recurrentis</em>) or soft ticks (<em>B. duttonii</em> and others).</p>
    <h4>Lyme disease</h4>
    <p><em>B. burgdorferi</em> sensu lato (with <em>B. afzelii</em> and <em>B. garinii</em> in Europe and Asia) is maintained in rodents and deer. <strong>Outer surface proteins</strong> allow tick attachment and host adaptation: OspA is expressed in the tick, OspC during transmission. The organism binds host complement regulators and varies its <strong>VlsE</strong> surface protein to evade antibody, which contributes to persistence.</p>
    <ul>
      <li><strong>Early localised</strong> — <strong>erythema migrans</strong>, a spreading annular rash, with fever and myalgia.</li>
      <li><strong>Early disseminated</strong> — multiple lesions, cranial nerve palsy (especially facial), meningitis, carditis with heart block, and arthritis.</li>
      <li><strong>Late</strong> — chronic arthritis, acrodermatitis chronica atrophicans, and subtle neurological disease.</li>
    </ul>
    <h4>Relapsing fever</h4>
    <p>Louse-borne relapsing fever causes epidemics in overcrowded conditions; tick-borne disease is zoonotic. Recurrent febrile episodes reflect <strong>antigenic variation</strong> of variable major proteins: each antibody wave clears one variant before a new one emerges. Complications include jaundice, myocarditis and neurological involvement.</p>
    <h4>Diagnosis and treatment</h4>
    <p>Erythema migrans is diagnosed clinically. Otherwise use <strong>two-tier serology</strong> — ELISA followed by immunoblot — remembering that serology may be negative early and cannot distinguish active from past infection. PCR of synovial fluid or skin helps in selected cases. Relapsing fever is diagnosed by seeing spirochetes on blood films.</p>
    <p>Early Lyme disease responds to doxycycline, amoxicillin or cefuroxime; neurological or cardiac disease needs intravenous ceftriaxone. Relapsing fever is treated with doxycycline or penicillin, watching for a <strong>Jarisch–Herxheimer reaction</strong>. Prevention is tick avoidance, protective clothing and prompt removal.</p>
  `,
  tip: "Two persistence mechanisms — VlsE variation in Lyme, variable major proteins in relapsing fever — explain chronic and recurrent disease.",
  sources: ["S4", "S9", "S13"]
},
{
  id: "gn28", domain: "gneg", star: true,
  q: "Explain the role of anaerobic Gram-negative bacilli in abscess formation, using Bacteroides fragilis and Fusobacterium as examples.",
  tags: ["Bacteroides fragilis", "Fusobacterium", "abscess", "Lemierre"],
  keypoints: ["polymicrobial synergy", "capsular polysaccharide", "low endotoxicity", "bile-resistant", "β-lactamase", "F. necrophorum", "Lemierre syndrome", "metronidazole", "source control", "aminoglycosides inactive"],
  answer: `
    <h4>Why anaerobes matter</h4>
    <p>Obligate anaerobes dominate the normal flora of the mouth, gut and vagina. When mucosal barriers break, they cause <strong>polymicrobial abscesses</strong> in which anaerobes act synergistically with facultative organisms: the facultative partner consumes oxygen and lowers the redox potential, allowing anaerobes to multiply.</p>
    <h4>Bacteroides fragilis</h4>
    <p><em>B. fragilis</em> is a <strong>bile-resistant</strong> Gram-negative anaerobic rod and the most important anaerobe in intra-abdominal infection. Its <strong>polysaccharide capsule</strong> induces abscess formation, and its lipopolysaccharide has unusually low endotoxic activity, so systemic toxicity is modest relative to local destruction. It produces <strong>β-lactamase</strong> and superoxide dismutase and is catalase-positive, which helps identification. It causes intra-abdominal and pelvic abscess, wound infection, bacteraemia and, rarely, meningitis.</p>
    <h4>Fusobacterium</h4>
    <p><em>F. nucleatum</em> is a spindle-shaped oral anaerobe implicated in periodontal disease, aspiration pneumonia and brain abscess, and it is enriched in colorectal cancer tissue. <em>F. necrophorum</em> causes <strong>Lemierre syndrome</strong> — septic thrombophlebitis of the internal jugular vein after a sore throat, with metastatic pulmonary emboli — and severe tonsillitis in adolescents.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li>Gram stain shows pleomorphic Gram-negative rods with pale-staining areas; culture needs <strong>anaerobic transport and incubation</strong>.</li>
      <li><strong>Bile–esculin</strong> and antibiotic discs (kanamycin, colistin, vancomycin) help identify <em>B. fragilis</em>; MALDI-TOF now gives rapid identification.</li>
      <li>Sterile-site specimens are essential; swabs from mucosal surfaces are unreliable.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Empirical cover for intra-abdominal infection is a <strong>β-lactam–β-lactamase inhibitor</strong> (amoxicillin–clavulanate, piperacillin–tazobactam) or a carbapenem, with <strong>metronidazole</strong> added when only a β-lactam is used. <strong>Source control — drainage or debridement — is decisive</strong>. Aminoglycosides are inactive against anaerobes, and metronidazole resistance, though uncommon, is increasing in <em>B. fragilis</em>.</p>
  `,
  tip: "Abscess formation is a capsule effect; treatment failure is usually a drainage problem, not a drug problem.",
  sources: ["S1", "S2", "S9"]
},
{
  id: "gn29", domain: "gneg",
  q: "Compare Stenotrophomonas maltophilia and the pathogenic Burkholderia species, and explain their intrinsic resistance and treatment.",
  tags: ["Stenotrophomonas", "Burkholderia", "melioidosis", "co-trimoxazole"],
  keypoints: ["non-fermenter", "L1 metallo-β-lactamase", "co-trimoxazole", "cepacia syndrome", "B. pseudomallei", "Ashdown", "safety-pin staining", "diabetes", "ceftazidime", "eradication"],
  answer: `
    <h4>Stenotrophomonas maltophilia</h4>
    <p><em>S. maltophilia</em> is a non-fermenting, <strong>oxidase-negative</strong>, motile Gram-negative rod that is DNase-positive and ONPG-positive. It survives in water and on wet surfaces and is an opportunist in ventilated, neutropenic and cystic fibrosis patients, in whom it can cause declining lung function and necrotising pneumonia. Its defining feature is <strong>intrinsic multidrug resistance</strong>: an inducible <strong>L1 metallo-β-lactamase</strong> hydrolyses carbapenems, while efflux pumps and low outer-membrane permeability exclude other agents. Carbapenem exposure is therefore a risk factor, and carbapenem resistance is a laboratory clue to its identity.</p>
    <h4>Burkholderia</h4>
    <div class="table-wrap"><table>
      <tr><th>Species</th><th>Ecology</th><th>Disease</th></tr>
      <tr><td><strong><em>B. cepacia</em> complex</strong></td><td>Soil, water, contaminated solutions</td><td>CF <strong>cepacia syndrome</strong> (necrotising pneumonia with bacteraemia), nosocomial outbreaks</td></tr>
      <tr><td><strong><em>B. pseudomallei</em></strong></td><td>Soil and water in Southeast Asia and northern Australia</td><td><strong>Melioidosis</strong>: pneumonia, abscesses, sepsis; diabetes is the main risk factor</td></tr>
      <tr><td><strong><em>B. mallei</em></strong></td><td>Equine</td><td>Glanders</td></tr>
    </table></div>
    <h4>Clinical and laboratory clues</h4>
    <ul>
      <li><em>B. pseudomallei</em> shows <strong>bipolar "safety-pin" staining</strong>, grows on Ashdown medium, and is a BSL-3 organism because of aerosol risk.</li>
      <li>Melioidosis can reactivate years after exposure and mimics tuberculosis; it needs prolonged eradication therapy.</li>
      <li><em>B. cepacia</em> is intrinsically resistant to aminoglycosides and polymyxins and can spread between CF patients, so clinics segregate patients.</li>
    </ul>
    <h4>Treatment</h4>
    <p><em>S. maltophilia</em> is treated with <strong>co-trimoxazole</strong> first-line, with levofloxacin, minocycline or cefiderocol as alternatives, and the device should be removed. <em>B. pseudomallei</em> needs ceftazidime or meropenem for the intensive phase, followed by oral eradication with co-trimoxazole, and <em>B. cepacia</em> requires combination therapy guided by susceptibility. Infection control and water-source investigation are central to outbreak control, since both genera persist in moist environments and contaminated equipment.</p>
  `,
  tip: "Carbapenem resistance plus oxidase negativity points to Stenotrophomonas; oxidase-positive with bipolar staining points to melioidosis.",
  sources: ["S7", "S8", "S13"]
},
{
  id: "gn30", domain: "gneg",
  q: "Discuss the HACEK group and the approach to culture-negative endocarditis. Why do these organisms escape routine culture?",
  tags: ["HACEK", "culture-negative endocarditis", "Aggregatibacter", "Coxiella"],
  keypoints: ["Haemophilus", "Aggregatibacter", "Cardiobacterium", "Eikenella", "Kingella", "oropharyngeal flora", "large vegetations", "three blood culture sets", "16S rRNA", "serology", "ceftriaxone"],
  answer: `
    <h4>The HACEK group</h4>
    <p>HACEK stands for <strong>Haemophilus</strong> species (e.g. <em>H. parainfluenzae</em>), <strong>Aggregatibacter</strong> (<em>A. actinomycetemcomitans</em>, <em>A. aphrophilus</em>), <strong>Cardiobacterium hominis</strong>, <strong>Eikenella corrodens</strong> and <strong>Kingella kingae</strong>. All are slow-growing, fastidious Gram-negative bacilli that belong to the <strong>oropharyngeal flora</strong>, so endocarditis follows dental work, poor dentition or oral trauma. They grow poorly in the aerobic bottle and may take several days to appear, which is why they are a classic cause of apparently sterile cultures. They cause subacute, indolent disease with <strong>large vegetations</strong> and a high rate of embolic complications, and they account for a meaningful share of <strong>culture-negative endocarditis</strong> because routine bottles may not support growth.</p>
    <h4>Culture-negative endocarditis</h4>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>Examples</th></tr>
      <tr><td>Fastidious bacteria</td><td>HACEK, <em>Abiotrophia</em>/<em>Granulicatella</em>, <em>Coxiella</em>, <em>Bartonella</em>, <em>Brucella</em>, <em>Chlamydia</em>, <em>Legionella</em>, <em>Mycoplasma</em></td></tr>
      <tr><td>Prior antibiotics</td><td>Partially treated streptococcal or staphylococcal endocarditis</td></tr>
      <tr><td>Fungi</td><td><em>Candida</em>, <em>Aspergillus</em></td></tr>
      <tr><td>Non-infective</td><td>Marantic (non-bacterial thrombotic) endocarditis, lupus Libman–Sacks</td></tr>
    </table></div>
    <h4>Diagnostic strategy</h4>
    <ul>
      <li>Take <strong>three blood culture sets before antibiotics</strong>; incubate for at least five days and subculture onto chocolate agar.</li>
      <li>Use <strong>PCR and 16S rRNA sequencing</strong> on valve tissue, and serology for <em>Coxiella</em>, <em>Bartonella</em> and <em>Brucella</em>.</li>
      <li>Histology and immunohistochemistry of an explanted valve often provide the diagnosis.</li>
      <li>Echocardiography — transthoracic then transoesophageal — defines vegetation size and complications.</li>
    </ul>
    <h4>Treatment</h4>
    <p>HACEK endocarditis is usually treated with <strong>ceftriaxone</strong> or ampicillin–sulbactam for four weeks, and prognosis is good once diagnosed. <strong>Surgery</strong> is indicated for large vegetations, persistent infection, heart failure or emboli. Empirical therapy for culture-negative endocarditis should cover staphylococci, streptococci and HACEK, and should be narrowed once a cause is found.</p>
  `,
  tip: "Three sets, five days, chocolate agar, then serology and 16S PCR — that sequence is the answer to 'culture-negative'.",
  sources: ["S4", "S9", "S12"]
}
);
