window.QBANK.push(
{
  id: "gn1", domain: "gneg", star: true,
  q: "Compare the pathogenic pathotypes of Escherichia coli. How does each cause disease, and what are the diagnostic and therapeutic implications?",
  tags: ["E. coli", "STEC", "UPEC", "diarrhoea"],
  answer: `
    <h4>Why pathotypes matter</h4>
    <p><em>E. coli</em> is a commensal of the colon, but acquired virulence loci convert it into pathogens with distinct tropism and disease. Pathotyping determines whether antibiotics help or harm.</p>
    <h4>Diarrhoeagenic pathotypes</h4>
    <ul>
      <li><strong>ETEC</strong> — heat-labile toxin (LT, cholera-toxin-like, raises cAMP) and heat-stable toxin (ST, raises cGMP); plasmids encode colonisation factors. Cause of traveller's diarrhoea and childhood watery diarrhoea; no invasion, no fever. Treatment is oral rehydration; antibiotics shorten illness but resistance is common.</li>
      <li><strong>EPEC</strong> — attaches to small-bowel enterocytes via <strong>intimin</strong> (LEE locus) and forms attaching/effacing lesions with a pedestal; causes infant diarrhoea in low-income settings. Typically non-invasive, no Shiga toxin.</li>
      <li><strong>EHEC/STEC</strong> (prototype O157:H7) — produces <strong>Shiga toxins</strong> (Stx1/Stx2, phage-encoded) that depurinate 28S rRNA and damage endothelial cells; intimin-mediated colonisation of the colon. Causes bloody diarrhoea and <strong>haemolytic uraemic syndrome</strong> (microangiopathic haemolytic anaemia, thrombocytopenia, acute kidney injury). <strong>Antibiotics and antimotility drugs are avoided</strong> because they may increase toxin release and HUS risk; management is supportive, with plasma exchange/dialysis in severe HUS.</li>
      <li><strong>EIEC</strong> — invades colonic epithelium, plasmid-encoded, biochemically resembles <em>Shigella</em>; causes dysentery with fever.</li>
      <li><strong>EAEC</strong> — aggregative adherence, biofilm and toxins; persistent childhood diarrhoea and HIV-associated diarrhoea.</li>
      <li><strong>DAEC, AIEC</strong> — diffusely adherent; AIEC is associated with Crohn's disease.</li>
    </ul>
    <h4>Extraintestinal pathotypes</h4>
    <p><strong>UPEC</strong> causes urinary tract infection via type 1 pili (FimH), P pili (PapG), haemolysin, CNF1 and aerobactin; it forms intracellular reservoirs in urothelium, explaining recurrence. <strong>NMEC</strong> causes neonatal meningitis (K1 capsule, S fimbriae, Ibe proteins).</p>
    <h4>Diagnosis</h4>
    <p>Culture with selective media (MacConkey, sorbitol–MacConkey for O157), latex agglutination, and PCR/stool multiplex panels for <em>stx1/stx2</em>, <em>eae</em>, <em>ipaH</em> and toxin genes. Serotyping and WGS are used in outbreaks.</p>
  `,
  tip: "The critical clinical discriminator is STEC: bloody diarrhoea plus HUS means no antibiotics.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gn2", domain: "gneg", star: true,
  q: "Discuss Klebsiella pneumoniae as an emerging pathogen: virulence, the hypervirulent variant, and the challenge of carbapenem-resistant infection.",
  tags: ["Klebsiella", "CRE", "hypervirulent", "carbapenemase"],
  answer: `
    <h4>Organism and virulence</h4>
    <p><em>K. pneumoniae</em> is a non-motile, lactose-fermenting, <strong>capsulated</strong> Gram-negative rod. The capsule (serotypes K1, K2, K5 and others) resists phagocytosis and complement; <strong>lipopolysaccharide</strong> drives inflammation; <strong>siderophores</strong> (enterobactin, aerobactin, salmochelin, yersiniabactin) scavenge iron; fimbriae mediate attachment to urinary and respiratory epithelium. It is a leading cause of hospital-acquired pneumonia, urinary infection, bacteraemia, liver abscess and neonatal sepsis.</p>
    <h4>Hypervirulent <em>K. pneumoniae</em> (hvKp)</h4>
    <p>Defined by the <strong>hypermucoviscous phenotype</strong> (string test) and virulence plasmid carrying <em>rmpA/rmpA2</em> (capsule up-regulation), <em>iuc</em> (aerobactin) and <em>iro</em>. It causes <strong>community-acquired invasive liver abscess syndrome</strong> with metastatic spread to eye (endophthalmitis), brain, lung and bone, often in healthy adults, and is associated with serotypes K1/K2. It is increasingly acquired by multidrug-resistant clones, creating "hypervirulent + carbapenem-resistant" strains — a major global concern.</p>
    <h4>Resistance</h4>
    <p><strong>ESBLs</strong> (CTX-M, SHV, TEM) hydrolyse penicillins and cephalosporins but not carbapenems; <strong>AmpC</strong> overexpression confers resistance to cephalosporins and cephamycins; <strong>carbapenemases</strong> include KPC (class A), NDM/VIM/IMP (metallo-β-lactamases) and OXA-48-like (class D). Porin loss (OmpK35/36) plus enzyme production raises MICs further. Plasmids spread these genes between species.</p>
    <h4>Treatment</h4>
    <ul>
      <li><strong>ESBL:</strong> carbapenem (meropenem) for invasive disease; ertapenem for non-severe; fosfomycin or nitrofurantoin for uncomplicated cystitis if susceptible.</li>
      <li><strong>KPC:</strong> ceftazidime–avibactam, meropenem–vaborbactam or imipenem–relebactam.</li>
      <li><strong>Metallo-β-lactamase (NDM):</strong> ceftazidime–avibactam plus aztreonam, or cefiderocol; colistin-containing regimens as backup.</li>
      <li><strong>OXA-48:</strong> ceftazidime–avibactam (variable) or cefiderocol.</li>
    </ul>
    <p>Source control, infection control and antimicrobial stewardship are as important as drug choice; CRKP outbreaks are driven by shared equipment, hands and contaminated sinks.</p>
  `,
  tip: "Distinguish ESBL, AmpC and carbapenemase by what they hydrolyse, then match the inhibitor combination to the enzyme class.",
  sources: ["S1", "S7", "S8"]
},
{
  id: "gn3", domain: "gneg", star: true,
  q: "Explain the pathogenesis and treatment challenges of Pseudomonas aeruginosa, with particular reference to cystic fibrosis and hospital-acquired infection.",
  tags: ["Pseudomonas", "CF", "biofilm", "T3SS"],
  answer: `
    <h4>Organism</h4>
    <p><em>P. aeruginosa</em> is an obligate aerobe, oxidase-positive, non-fermenting Gram-negative rod that grows at 42°C, produces pyocyanin (blue-green pigment) and has a characteristic grape-like odour. It is a classic opportunist: minimal nutritional requirements, intrinsic resistance and environmental persistence.</p>
    <h4>Virulence</h4>
    <ul>
      <li><strong>Adhesins and motility:</strong> type IV pili (twitching motility), flagella.</li>
      <li><strong>Type III secretion system</strong> — injects ExoU (phospholipase, cytotoxic), ExoS/ExoT (ADP-ribosyltransferases) and ExoY (adenylate cyclase) into host cells; ExoU is associated with severe acute lung injury.</li>
      <li><strong>Quorum sensing</strong> — Las/Rhl/PQS regulate elastase, protease, pyocyanin, rhamnolipid and biofilm formation.</li>
      <li><strong>Biofilm and alginate</strong> — the mucoid phenotype in chronic CF infection is due to <em>mucA</em> mutation and alginate overproduction, conferring resistance to phagocytosis and antibiotics.</li>
      <li><strong>Toxins and enzymes</strong> — exotoxin A (ADP-ribosylates EF-2), elastase, alkaline protease, phospholipase C, rhamnolipid.</li>
    </ul>
    <h4>Clinical syndromes</h4>
    <p>Ventilator-associated pneumonia, hospital-acquired pneumonia, burn wound infection, neutropenic bacteraemia, malignant otitis externa, keratitis (contact lenses), urinary catheter infection, and chronic airway infection in cystic fibrosis and bronchiectasis. Ecthyma gangrenosum is a classic skin lesion in bacteraemia.</p>
    <h4>Resistance</h4>
    <p>Intrinsic: low outer-membrane permeability, <strong>AmpC</strong> β-lactamase, <strong>MexAB–OprM</strong> efflux, and <strong>OprD</strong> porin loss (carbapenem resistance). Acquired: ESBLs, carbapenemases (VIM, IMP, NDM, KPC), aminoglycoside-modifying enzymes and target mutation. Biofilm adds phenotypic tolerance.</p>
    <h4>Treatment</h4>
    <p>Antipseudomonal β-lactam (piperacillin–tazobactam, ceftazidime, cefepime, meropenem) often with a second agent in severe or resistant disease; <strong>ceftolozane–tazobactam</strong> and <strong>ceftazidime–avibactam</strong> for resistant strains; <strong>cefiderocol</strong> for multidrug-resistant organisms; colistin as a last resort with careful dosing. In CF, inhaled tobramycin/colistin and azithromycin (anti-inflammatory and anti-biofilm) are used. Combination therapy does not reliably prevent resistance, and source control plus device removal remains essential.</p>
  `,
  tip: "Link the mucoid alginate phenotype specifically to chronic CF infection — that is the pathogenesis-to-treatment bridge.",
  sources: ["S1", "S4", "S7"]
},
{
  id: "gn4", domain: "gneg",
  q: "Why is carbapenem-resistant Acinetobacter baumannii so difficult to treat, and what are the current therapeutic options?",
  tags: ["Acinetobacter", "CRAB", "sulbactam", "cefiderocol"],
  answer: `
    <h4>Organism and resilience</h4>
    <p><em>A. baumannii</em> is a strictly aerobic, oxidase-negative, non-fermenting Gram-negative coccobacillus. It survives desiccation, disinfectants and broad temperature ranges, and forms biofilms — properties that make it a persistent ICU pathogen. It colonises skin, respiratory and urinary sites and causes ventilator-associated pneumonia, bacteraemia, wound and burn infection, meningitis and urinary infection.</p>
    <h4>Resistance mechanisms</h4>
    <ul>
      <li><strong>Carbapenemases:</strong> OXA-23, OXA-24/40, OXA-58 (class D) are the dominant mechanisms globally; <em>ISAba1</em> insertion upstream up-regulates <em>bla</em><sub>OXA-51-like</sub>. NDM and other metallo-β-lactamases are increasingly reported.</li>
      <li><strong>Porin loss</strong> (CarO) and <strong>efflux pumps</strong> (AdeABC, AdeIJK) reduce intracellular drug concentration.</li>
      <li><strong>Altered PBPs</strong> and aminoglycoside-modifying enzymes.</li>
      <li><strong>Intrinsic</strong> resistance to many agents and tolerance to desiccation/disinfectants.</li>
    </ul>
    <h4>Why treatment is hard</h4>
    <p>CRAB is resistant to most β-lactams, fluoroquinolones and aminoglycosides; the pipeline is thin; and critically ill patients have poor drug penetration into lung and CSF. Mortality in CRAB bacteraemia is high, and colonisation is common, so distinguishing infection from contamination is essential.</p>
    <h4>Current options</h4>
    <ul>
      <li><strong>High-dose ampicillin–sulbactam</strong> — sulbactam has intrinsic activity against <em>Acinetobacter</em>; used as a backbone, often in combination.</li>
      <li><strong>Cefiderocol</strong> — siderophore cephalosporin with activity against CRAB, including some metallo-β-lactamase producers.</li>
      <li><strong>Polymyxins</strong> (colistin) — last-resort, nephrotoxic, with pharmacokinetic uncertainty; loading dose and combination are common practice.</li>
      <li><strong>Tigecycline</strong> — high-dose, but not for bacteraemia (low serum levels).</li>
      <li><strong>Combinations:</strong> sulbactam plus colistin, meropenem plus sulbactam, or cefiderocol-based regimens, guided by susceptibility and often by synergy testing.</li>
    </ul>
    <p>Infection control is decisive: cohorting, contact precautions, environmental cleaning, antimicrobial stewardship and rapid identification of colonised patients. The WHO lists CRAB as a critical-priority pathogen.</p>
  `,
  tip: "Sulbactam's intrinsic activity is the fact most candidates miss; pair it with cefiderocol and colistin as the modern triad.",
  sources: ["S7", "S8", "S13"]
},
{
  id: "gn5", domain: "gneg", star: true,
  q: "Compare typhoidal and non-typhoidal Salmonella infection. How does the organism cause systemic disease, and how has resistance changed management?",
  tags: ["Salmonella", "typhoid", "SPI", "XDR"],
  answer: `
    <h4>Organisms</h4>
    <p><em>Salmonella enterica</em> serovar Typhi and Paratyphi cause <strong>enteric fever</strong> (typhoid/paratyphoid), a human-restricted systemic infection. Non-typhoidal <em>Salmonella</em> (NTS; e.g. Enteritidis, Typhimurium) causes self-limited gastroenteritis in immunocompetent hosts but invasive disease in Africa, in HIV, malaria and malnutrition.</p>
    <h4>Pathogenesis</h4>
    <p>Ingestion of contaminated food or water; the organism survives gastric acid, invades M cells over Peyer's patches using <strong>SPI-1</strong> type III secretion (SipA/B/C, SopE), and replicates in macrophages within a <strong>SPI-2</strong>-modified vacuole. It spreads via lymphatics to the liver, spleen, bone marrow and gallbladder, causing bacteraemia. <strong>Typhoid fever</strong> evolves over weeks: step-ladder fever, headache, abdominal pain, constipation or diarrhoea, relative bradycardia, rose spots, hepatosplenomegaly, leucopenia; complications include intestinal perforation and haemorrhage, encephalopathy and cholecystitis. Chronic carriage occurs in the gallbladder, classically in women with gallstones (Mary Mallon).</p>
    <h4>Diagnosis</h4>
    <p><strong>Blood culture</strong> is the mainstay in the first week (bone marrow culture is most sensitive); stool and urine cultures later. The Widal test is insensitive and non-specific and should not be used. Rapid serology and PCR are available but not a substitute for culture. NTS is diagnosed by stool culture; invasive disease by blood culture.</p>
    <h4>Treatment and resistance</h4>
    <p>Uncomplicated NTS gastroenteritis in immunocompetent adults usually needs <strong>no antibiotics</strong> (they prolong carriage); treat invasive disease, neonates, immunocompromised and severe cases with ceftriaxone or ciprofloxacin. Enteric fever requires antibiotics: <strong>ceftriaxone, azithromycin or ciprofloxacin</strong> depending on susceptibility; carbapenems for ESBL. <strong>Fluoroquinolone resistance</strong> (gyrA mutations) is widespread, and <strong>extensively drug-resistant (XDR) typhoid</strong> (H58 haplotype, Pakistan) is resistant to chloramphenicol, ampicillin, co-trimoxazole, fluoroquinolones and third-generation cephalosporins, leaving azithromycin and carbapenems. Vaccines (Vi polysaccharide, Vi-conjugate, Ty21a) and water/sanitation are the durable solutions.</p>
  `,
  tip: "Blood culture in week one, stool later; and name XDR typhoid as the reason empirical ciprofloxacin no longer works.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "gn6", domain: "gneg",
  q: "Explain the pathogenesis of shigellosis. Why is the infectious dose so low, and what are the principles of management?",
  tags: ["Shigella", "dysentery", "Shiga toxin", "infectious dose"],
  answer: `
    <h4>Organism</h4>
    <p><em>Shigella</em> species (<em>S. dysenteriae</em>, <em>flexneri</em>, <em>boydii</em>, <em>sonnei</em>) are non-motile, non-lactose-fermenting Gram-negative rods closely related to <em>E. coli</em>. <em>S. sonnei</em> causes milder disease in high-income settings; <em>S. flexneri</em> and <em>S. dysenteriae</em> type 1 cause severe dysentery and outbreaks in low-income settings.</p>
    <h4>Low infectious dose</h4>
    <p>As few as <strong>10–100 organisms</strong> can cause disease because <em>Shigella</em> is <strong>acid-resistant</strong>, survives gastric transit, and is highly efficient at invading colonic epithelium. Transmission is faecal–oral, often by contaminated hands, food or water; the low dose makes person-to-person spread and laboratory-acquired infection important.</p>
    <h4>Pathogenesis</h4>
    <p>Bacteria transcytose through M cells, are taken up by macrophages, and induce <strong>pyroptosis</strong> (caspase-1, IL-1β release), which drives inflammation. They escape into the cytosol via <strong>IpaB/IpaC</strong> and the type III secretion system, multiply, and spread to adjacent cells using <strong>IcsA</strong>-mediated actin polymerisation. This causes ulceration, bloody diarrhoea, tenesmus and polymorphonuclear infiltration. <em>S. dysenteriae</em> type 1 produces <strong>Shiga toxin</strong>, which damages endothelium and can cause HUS.</p>
    <h4>Clinical</h4>
    <p>Fever, abdominal cramps, watery diarrhoea followed by <strong>dysentery</strong> (blood and mucus), tenesmus; complications include dehydration, HUS, rectal prolapse, toxic megacolon, seizures and reactive arthritis (HLA-B27).</p>
    <h4>Diagnosis and management</h4>
    <p>Stool culture on selective media, PCR/multiplex panels, and microscopy showing leukocytes and erythrocytes. <strong>Oral rehydration</strong> is the foundation. Antibiotics shorten illness and reduce transmission: <strong>ciprofloxacin</strong> (where susceptible), <strong>ceftriaxone</strong> or <strong>azithromycin</strong>; resistance to ciprofloxacin and azithromycin is rising. <strong>Avoid antimotility drugs</strong> (loperamide) because they prolong carriage and worsen colitis. Hospitalisation and infection control are needed for severe disease; vaccines remain under development.</p>
  `,
  tip: "The low infectious dose is due to acid resistance plus efficient M-cell invasion — not just 'a small inoculum'.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gn7", domain: "gneg", star: true,
  q: "Describe the pathogenesis, clinical features and management of cholera. Why is oral rehydration the cornerstone of treatment?",
  tags: ["Vibrio cholerae", "cholera toxin", "ORS", "pandemic"],
  answer: `
    <h4>Organism</h4>
    <p><em>Vibrio cholerae</em> is a comma-shaped, oxidase-positive Gram-negative rod with a single polar flagellum. Serogroup O1 (classical and El Tor biotypes; Inaba and Ogawa serotypes) and O139 cause epidemic cholera; non-O1/non-O139 strains cause sporadic gastroenteritis. It is halophilic and survives in brackish water and plankton.</p>
    <h4>Pathogenesis</h4>
    <p>Ingestion of contaminated water or food; the organism survives gastric acid (larger inoculum needed than <em>Shigella</em>), colonises the small intestine using <strong>toxin-coregulated pili</strong> and motility, and produces <strong>cholera toxin</strong>. Cholera toxin is an AB<sub>5</sub> toxin: the B pentamer binds GM1 ganglioside, the A subunit ADP-ribosylates the Gsα subunit, locking adenylyl cyclase in the active state. Intracellular cAMP rises, driving <strong>CFTR</strong>-mediated chloride secretion and osmotic water flow into the lumen, with sodium and bicarbonate loss. The result is massive secretory diarrhoea — up to 1 L/hour — described as <strong>rice-water stool</strong>.</p>
    <h4>Clinical</h4>
    <p>After 1–5 days: abrupt painless watery diarrhoea, vomiting, dehydration, hypovolaemic shock, metabolic acidosis and hypokalaemia. Untreated case fatality can exceed 50%; with rehydration it falls below 1%.</p>
    <h4>Diagnosis</h4>
    <p>Clinical in outbreaks; stool culture on TCBS agar (yellow colonies), dark-field microscopy for darting motility, rapid antigen tests and PCR. Serotyping and WGS track transmission.</p>
    <h4>Management</h4>
    <p><strong>Oral rehydration solution</strong> is the cornerstone: glucose-coupled sodium absorption via SGLT1 remains intact despite the secretory state, so ORS replaces losses even though it does not stop secretion. Severe dehydration requires IV Ringer's lactate. <strong>Antibiotics</strong> — a single dose of doxycycline (or azithromycin, especially in pregnancy and children) — shorten diarrhoea and reduce shedding but are adjuncts, not substitutes. Zinc is added for children. <strong>Cholera vaccines</strong> (oral killed O1/O139, and live attenuated) are used in outbreaks and endemic settings, alongside water, sanitation and hygiene. The seventh pandemic (El Tor) continues, with major outbreaks in Yemen, Haiti and Africa.</p>
  `,
  tip: "Explain the SGLT1 rationale for ORS — that is the mechanism question behind 'why rehydration works'.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "gn8", domain: "gneg", star: true,
  q: "Discuss Helicobacter pylori as a cause of gastroduodenal disease and gastric cancer. How is it diagnosed and eradicated?",
  tags: ["H. pylori", "cagA", "ulcer", "eradication"],
  answer: `
    <h4>Organism</h4>
    <p><em>H. pylori</em> is a microaerophilic, spiral, Gram-negative rod with multiple unipolar flagella. It colonises the gastric antrum, survives acid by producing <strong>urease</strong> (hydrolysing urea to ammonia and CO<sub>2</sub>, buffering the microenvironment), and adheres to gastric epithelium.</p>
    <h4>Pathogenesis</h4>
    <ul>
      <li><strong>Urease and ammonia</strong> damage epithelium; <strong>VacA</strong> forms pores and induces vacuolation and apoptosis; <strong>CagA</strong> is injected by the Cag type IV secretion system, undergoes tyrosine phosphorylation and dysregulates SHP2, driving proliferation and inflammation.</li>
      <li><strong>Chronic active gastritis</strong> — neutrophilic infiltration, IL-8 induction; antral-predominant gastritis predisposes to duodenal ulcer, while corpus-predominant gastritis predisposes to gastric ulcer and cancer.</li>
      <li><strong>Hypochlorhydria</strong> from chronic inflammation increases gastric cancer risk.</li>
      <li><strong>MALT lymphoma</strong> — antigen-driven B-cell proliferation that can regress with eradication.</li>
    </ul>
    <h4>Disease associations</h4>
    <p>Chronic gastritis, duodenal and gastric ulcer, gastric adenocarcinoma (classified by IARC as a group 1 carcinogen), MALT lymphoma, and possibly iron-deficiency anaemia and immune thrombocytopenia. About half the world's population is colonised; most are asymptomatic, so disease reflects host genetics, strain virulence and environment.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Urea breath test</strong> (non-invasive, excellent for diagnosis and confirmation of cure).</li>
      <li><strong>Stool antigen test</strong> (non-invasive, useful in children and follow-up).</li>
      <li><strong>Endoscopic biopsy</strong> — rapid urease test, histology (Giemsa or immunohistochemistry), culture, PCR.</li>
      <li><strong>Serology</strong> — indicates exposure, cannot confirm eradication, and is unreliable in low-prevalence settings.</li>
    </ul>
    <p>Stop proton-pump inhibitors 2 weeks and antibiotics 4 weeks before testing to avoid false negatives.</p>
    <h4>Eradication</h4>
    <p>Standard <strong>triple therapy</strong> — a PPI plus clarithromycin and amoxicillin (or metronidazole) for 14 days — is limited by rising clarithromycin resistance. <strong>Bismuth quadruple therapy</strong> (PPI, bismuth, tetracycline, metronidazole) is preferred where resistance is high or as second-line. <strong>Concomitant/quadruple therapy</strong> and levofloxacin-based rescue regimens are alternatives. Confirm cure at least 4 weeks after therapy with a breath test or stool antigen. Treating <em>H. pylori</em> reduces ulcer recurrence and may reduce gastric cancer incidence.</p>
  `,
  tip: "Urease is the colonisation mechanism; CagA/VacA are the disease mechanisms — keep those roles separate.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "gn9", domain: "gneg", star: true,
  q: "Explain the pathogenesis, clinical presentation, diagnosis and prevention of meningococcal disease.",
  tags: ["Neisseria meningitidis", "meningitis", "complement", "prophylaxis"],
  answer: `
    <h4>Organism</h4>
    <p><em>N. meningitidis</em> is a Gram-negative diplococcus, oxidase-positive, catalase-positive, and fastidious (Thayer–Martin medium, 5% CO<sub>2</sub>). It is carried asymptomatically in the nasopharynx of 5–10% of the population. Capsular polysaccharide defines serogroups A, B, C, W, X and Y; serogroup B is now a major cause in many countries after MenC conjugate vaccination.</p>
    <h4>Pathogenesis</h4>
    <p>Transmission by respiratory droplets; <strong>type IV pili</strong> mediate initial attachment and twitching motility; <strong>Opa/Opc</strong> proteins and <strong>LOS</strong> (lipooligosaccharide) drive invasion across the nasopharyngeal epithelium. Capsule resists complement and phagocytosis. <strong>LOS endotoxin</strong> triggers the cytokine cascade, endothelial injury, capillary leak, DIC and purpura. Invasion of the bloodstream causes <strong>meningococcaemia</strong>; crossing the blood–brain barrier (via pili, Opa, and host receptors) causes <strong>meningitis</strong>. Complement deficiency (terminal pathway), asplenia, HIV and eculizumab therapy are major risk factors.</p>
    <h4>Clinical</h4>
    <p>Sudden fever, headache, neck stiffness, photophobia, vomiting, altered consciousness; <strong>non-blanching petechial or purpuric rash</strong> is the classic clue. Meningococcaemia can progress to purpura fulminans, shock and multi-organ failure within hours. In infants: irritability, poor feeding, bulging fontanelle. Chronic meningococcaemia causes recurrent fever and rash.</p>
    <h4>Diagnosis</h4>
    <p>Immediate <strong>blood cultures</strong> and <strong>lumbar puncture</strong> (if no contraindication): CSF shows neutrophilic pleocytosis, high protein, low glucose; Gram stain shows Gram-negative diplococci. <strong>PCR</strong> on CSF and blood is highly sensitive, especially after antibiotics. Do not delay antibiotics for imaging in a stable patient with suspected meningitis.</p>
    <h4>Treatment and prevention</h4>
    <p><strong>Empirical ceftriaxone</strong> (or cefotaxime) immediately; penicillin G if susceptible; chloramphenicol where resources are limited. Supportive care for shock and raised intracranial pressure. <strong>Droplet precautions</strong> for 24 hours after antibiotics. <strong>Chemoprophylaxis</strong> for close contacts: rifampicin, ciprofloxacin or ceftriaxone. Conjugate vaccines (MenACWY, MenB) provide durable immunity and reduce carriage; MenB vaccines (4CMenB, MenB-fHbp) are protein-based because the B capsule is poorly immunogenic.</p>
  `,
  tip: "The non-blanching rash plus complement deficiency is the classic exam pairing; emphasise immediate ceftriaxone before imaging.",
  sources: ["S1", "S2", "S10"]
},
{
  id: "gn10", domain: "gneg", star: true,
  q: "How does Neisseria gonorrhoeae evade immunity and develop antimicrobial resistance? Discuss current treatment and the threat of untreatable gonorrhoea.",
  tags: ["gonorrhoea", "antigenic variation", "ceftriaxone", "AMR"],
  answer: `
    <h4>Organism and pathogenesis</h4>
    <p><em>N. gonorrhoeae</em> is a fastidious Gram-negative diplococcus that infects columnar epithelium of the urethra, cervix, rectum, pharynx and conjunctiva. <strong>Type IV pili</strong> mediate attachment and twitching motility; <strong>Opa</strong> proteins bind CEACAM receptors; <strong>LOS</strong> drives inflammation. It invades epithelial cells and survives within neutrophils.</p>
    <h4>Immune evasion</h4>
    <ul>
      <li><strong>Antigenic variation</strong> of pilin (<em>pilE</em> recombination with silent <em>pilS</em> cassettes) and phase variation of Opa.</li>
      <li><strong>LOS sialylation</strong> mimics host glycolipids and inhibits complement.</li>
      <li><strong>IgA1 protease</strong> cleaves mucosal antibody.</li>
      <li><strong>Survival in neutrophils</strong> and suppression of adaptive responses; infection does not confer durable immunity, so reinfection is common.</li>
    </ul>
    <h4>Clinical</h4>
    <p>Urethritis with purulent discharge and dysuria; cervicitis (often asymptomatic); proctitis, pharyngitis and conjunctivitis (ophthalmia neonatorum). Complications: pelvic inflammatory disease, tubal infertility, ectopic pregnancy, epididymo-orchitis, disseminated gonococcal infection (arthritis–dermatitis syndrome), and increased HIV transmission.</p>
    <h4>Diagnosis</h4>
    <p>NAAT is the preferred test (first-void urine, vaginal/endocervical swabs, extragenital sites); culture is needed for susceptibility testing. Gram stain of urethral discharge is sensitive in men.</p>
    <h4>Resistance and treatment</h4>
    <p>Resistance has emerged sequentially to penicillin, tetracycline, ciprofloxacin and, more recently, to extended-spectrum cephalosporins and azithromycin. Mechanisms include <strong><em>penA</em> mosaic alleles</strong> (reduced ceftriaxone susceptibility), <em>tetM</em>, <em>gyrA</em> and <em>parC</em> mutations, and rRNA methylation. Current CDC guidance: <strong>ceftriaxone 500 mg IM once</strong> (1 g if ≥150 kg); add <strong>doxycycline 100 mg twice daily for 7 days</strong> if chlamydia is not excluded. Test-of-cure is advised for pharyngeal infection. The WHO lists drug-resistant <em>N. gonorrhoeae</em> as a high-priority pathogen, and the pipeline includes zoliflodacin and gepotidacin. Prevention: condoms, partner notification, screening, and antimicrobial stewardship.</p>
  `,
  tip: "Name the sequential resistance history — penicillin → tetracycline → ciprofloxacin → ceftriaxone — to show the pattern.",
  sources: ["S1", "S7", "S10"]
},
{
  id: "gn11", domain: "gneg",
  q: "Describe pertussis: its virulence factors, stages of disease, laboratory diagnosis and the public health response.",
  tags: ["Bordetella pertussis", "whooping cough", "pertussis toxin", "vaccine"],
  answer: `
    <h4>Organism and virulence</h4>
    <p><em>Bordetella pertussis</em> is a small, fastidious, Gram-negative coccobacillus that colonises the ciliated respiratory epithelium. It is not invasive; disease is toxin-mediated.</p>
    <ul>
      <li><strong>Pertussis toxin (PT)</strong> — AB<sub>5</sub> toxin; ADP-ribosylates Giα, blocking inhibitory signalling and producing lymphocytosis, histamine sensitisation and insulin secretion; also an adhesin.</li>
      <li><strong>Adenylate cyclase toxin</strong> — raises cAMP, impairs phagocyte function and ciliary clearance.</li>
      <li><strong>Tracheal cytotoxin</strong> — peptidoglycan fragment that damages cilia and causes cough.</li>
      <li><strong>Filamentous haemagglutinin, pertactin, fimbriae</strong> — adhesins and vaccine antigens.</li>
      <li><strong>Dermonecrotic toxin</strong> and LPS — local inflammation.</li>
    </ul>
    <h4>Clinical stages</h4>
    <p><strong>Catarrhal</strong> (1–2 weeks): coryza, low fever, mild cough — most infectious. <strong>Paroxysmal</strong> (2–6 weeks): paroxysms of coughing ending in an inspiratory <strong>"whoop"</strong> and post-tussive vomiting; infants may have apnoea and cyanosis without a whoop. <strong>Convalescent</strong> (weeks–months): gradual resolution. Complications include pneumonia, pneumothorax, rib fracture, encephalopathy and death in young infants.</p>
    <h4>Diagnosis</h4>
    <p><strong>PCR</strong> of nasopharyngeal swab or aspirate is the most sensitive, especially early; culture on Regan–Lowe or Bordet–Gengou medium is specific but slow and insensitive after the catarrhal stage; serology is useful later but not for acute diagnosis. Lymphocytosis is characteristic.</p>
    <h4>Treatment and prevention</h4>
    <p><strong>Macrolides</strong> (azithromycin or clarithromycin) eradicate the organism and reduce transmission, but have little effect on established paroxysms. <strong>Post-exposure prophylaxis</strong> for household contacts, especially infants. Supportive care and hospitalisation for young infants. Vaccination: <strong>DTaP</strong> in children and <strong>Tdap</strong> in pregnancy (third trimester) and for adults; acellular vaccines are safer but less durable than whole-cell, and <strong>waning immunity</strong> explains resurgences. Maternal vaccination is the most effective strategy to protect newborns before their own immunisation.</p>
  `,
  tip: "Pertussis toxin causes lymphocytosis by ADP-ribosylating Gi — a classic mechanism-to-lab-finding link.",
  sources: ["S1", "S2", "S10"]
},
{
  id: "gn12", domain: "gneg",
  q: "Compare Legionella, Mycoplasma and Chlamydia as causes of atypical pneumonia. How does the laboratory diagnosis differ?",
  tags: ["atypical pneumonia", "Legionella", "Mycoplasma", "Chlamydia"],
  answer: `
    <h4>The concept of "atypical"</h4>
    <p>Atypical pneumonia describes infection with organisms that are not reliably seen on Gram stain or cultured on standard media, and that often cause a more indolent presentation with prominent extrapulmonary symptoms. The category classically includes <em>Mycoplasma pneumoniae</em>, <em>Chlamydia pneumoniae</em>, <em>Legionella pneumophila</em> and <em>Chlamydia psittaci</em>; <em>Coxiella burnetii</em> and respiratory viruses are often grouped with them.</p>
    <h4><em>Mycoplasma pneumoniae</em></h4>
    <p>Smallest free-living bacterium, <strong>no cell wall</strong> (so β-lactams are ineffective), fastidious. Attaches via P1 adhesin to ciliated epithelium, produces hydrogen peroxide and community-acquired respiratory distress syndrome (CARDS) toxin; causes tracheobronchitis and "walking pneumonia", especially in school-age children and young adults. Extrapulmonary: haemolytic anaemia (cold agglutinins), erythema multiforme, Stevens–Johnson syndrome, myocarditis, Guillain–Barré. Diagnosis: PCR or serology (IgM/IgG); cold agglutinins are non-specific.</p>
    <h4><em>Chlamydia pneumoniae</em> and <em>psittaci</em></h4>
    <p>Obligate intracellular bacteria with a unique biphasic life cycle — infectious <strong>elementary body</strong> and replicative <strong>reticulate body</strong> within an inclusion. <em>C. pneumoniae</em> causes mild pneumonia and is associated with atherosclerosis (controversial); <em>C. psittaci</em> causes psittacosis after bird exposure, with fever, headache and lobar pneumonia. Diagnosis: PCR, microimmunofluorescence serology, culture (BSL-3 for psittaci). Treatment: tetracyclines or macrolides.</p>
    <h4><em>Legionella pneumophila</em></h4>
    <p>Gram-negative rod replicating within alveolar macrophages; acquired from <strong>aerosolised water</strong> (cooling towers, showers, spas), not person-to-person. Causes Legionnaires' disease (severe pneumonia with confusion, diarrhoea, hyponatraemia, hepatic and renal dysfunction) and Pontiac fever (self-limited). Risk factors: smoking, chronic lung disease, immunosuppression, older age. Diagnosis: <strong>urinary antigen</strong> (serogroup 1, rapid and specific), PCR, culture on BCYE agar, serology. Treatment: <strong>azithromycin or levofloxacin</strong>; β-lactams are ineffective because the organism is intracellular.</p>
    <h4>Practical approach</h4>
    <p>Use a syndromic respiratory panel (PCR) plus <em>Legionella</em> urinary antigen in severe pneumonia; treat empirically with a macrolide or respiratory fluoroquinolone when atypical pathogens are suspected, and always cover <em>Legionella</em> in severe community-acquired pneumonia.</p>
  `,
  tip: "No cell wall = Mycoplasma; intracellular = Chlamydia/Legionella; urine antigen = Legionella serogroup 1.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "gn13", domain: "gneg", star: true,
  q: "Describe the natural history, laboratory diagnosis and treatment of syphilis. Why is serology interpreted in reverse sequence?",
  tags: ["Treponema pallidum", "syphilis", "VDRL", "penicillin"],
  answer: `
    <h4>Organism</h4>
    <p><em>Treponema pallidum</em> subspecies <em>pallidum</em> is a thin, motile spirochete that cannot be grown on artificial media and is visualised by dark-field microscopy, silver stain or PCR. It penetrates mucosa or broken skin and disseminates within hours.</p>
    <h4>Natural history</h4>
    <ul>
      <li><strong>Primary</strong> (3–90 days): painless chancre with a clean base and regional lymphadenopathy; heals spontaneously.</li>
      <li><strong>Secondary</strong> (weeks–months): maculopapular rash including palms and soles, condylomata lata, mucous patches, fever, lymphadenopathy, alopecia; highly infectious.</li>
      <li><strong>Latent</strong>: asymptomatic; early latent (<1 year) and late latent.</li>
      <li><strong>Tertiary</strong> (years–decades): gummatous lesions, cardiovascular syphilis (aortitis, aortic regurgitation) and <strong>neurosyphilis</strong> (tabes dorsalis, general paresis, Argyll Robertson pupils, meningitis).</li>
      <li><strong>Congenital</strong>: stillbirth, snuffles, saddle nose, Hutchinson teeth, interstitial keratitis, bone and CNS disease.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>Direct: dark-field microscopy of exudate, PCR, immunohistochemistry. Serology: <strong>non-treponemal tests</strong> (VDRL, RPR) quantify disease activity and response but are non-specific (false positives in pregnancy, autoimmune disease, HIV, malaria); <strong>treponemal tests</strong> (TPPA, TPHA, EIA, chemiluminescence) confirm exposure and remain positive for life.</p>
    <p><strong>Reverse-sequence algorithm</strong>: screen with a treponemal EIA; if positive, run RPR. A positive EIA with negative RPR may be treated syphilis, early infection, or a false positive — use a second treponemal test and clinical context. Traditional algorithm screens with RPR then confirms with treponemal testing. Reverse sequence is now common because it is automated and high-throughput.</p>
    <h4>Treatment</h4>
    <p><strong>Benzathine penicillin G</strong> is the mainstay: single dose for early syphilis; three weekly doses for late latent and unknown duration; <strong>IV aqueous penicillin G for neurosyphilis</strong> (or ceftriaxone). Doxycycline is the alternative in penicillin allergy (except pregnancy, where desensitisation is required). <strong>Jarisch–Herxheimer reaction</strong> — fever, chills, hypotension after the first dose — is common and self-limited. Treat partners and screen for HIV and other STIs.</p>
  `,
  tip: "Non-treponemal tests track activity; treponemal tests track exposure. Say that before describing the algorithm.",
  sources: ["S1", "S4", "S10"]
}
);
