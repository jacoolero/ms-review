/* Gram-negative & atypical bacteria — part C (gn31–gn40) */
window.QBANK.push(
{
  id: "gn31", domain: "gneg", star: true,
  q: "Two weeks after a typhoon flooded a Philippine municipality, several patients present with fever, calf pain and jaundice. Outline the outbreak investigation, clinical triage and laboratory confirmation of leptospirosis, and explain the prevention measures you would recommend.",
  tags: ["leptospirosis", "Philippines", "flood", "MAT"],
  keypoints: ["rodent urine", "abraded skin", "conjunctival suffusion", "calf myalgia", "Weil disease", "pulmonary haemorrhage", "Jarisch–Herxheimer reaction", "PCR first week", "paired sera", "microscopic agglutination test", "doxycycline chemoprophylaxis", "RA 11332"],
  answer: `
    <h4>Why floods amplify leptospirosis</h4>
    <p>Flooding concentrates <strong>rodent urine</strong> in warm, stagnant water and soil, and leptospires enter through <strong>abraded skin</strong> or mucous membranes. In the Philippines, typhoon season, wading and poor drainage create the classic exposure; the DOH and RITM issue alerts after prolonged flooding, and cases cluster two to three weeks later. Risk is highest for rescue workers, farmers, sanitation staff and children playing in floodwater.</p>
    <h4>Clinical triage</h4>
    <p>The early leptospiraemic phase causes abrupt fever, headache, <strong>conjunctival suffusion</strong> and <strong>calf myalgia</strong>. Jaundice, oliguria, bleeding and hypotension indicate <strong>Weil disease</strong>; breathlessness and haemoptysis suggest <strong>pulmonary haemorrhage</strong>. Dengue, typhoid and rickettsiosis overlap clinically, so exposure history and first-line tests for those alternatives belong in the initial work-up. Check creatinine, bilirubin, transaminases, platelet count and chest imaging, and monitor for a <strong>Jarisch–Herxheimer reaction</strong> after the first antibiotic dose.</p>
    <h4>Laboratory confirmation</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Timing and use</th></tr>
      <tr><td><strong>PCR</strong></td><td>Most useful in the <strong>first week</strong>, on blood or urine</td></tr>
      <tr><td><strong>IgM ELISA</strong> or rapid test</td><td>Screening after the first week</td></tr>
      <tr><td><strong>Microscopic agglutination test</strong></td><td>Reference test on <strong>paired sera</strong>; confirmation needs a fourfold rise</td></tr>
      <tr><td>Culture in EMJH medium</td><td>Slow and insensitive; never a reason to delay treatment</td></tr>
    </table></div>
    <h4>Outbreak and prevention</h4>
    <ul>
      <li>Build a line list with a standard case definition, search actively for mild cases, and report under <strong>RA 11332</strong>.</li>
      <li>Provide boots, gloves and wound cover for clean-up crews; chlorinate drinking water and control rodents.</li>
      <li>Offer <strong>doxycycline chemoprophylaxis</strong> to high-risk short-term exposures, and treat severe disease with intravenous penicillin or ceftriaxone plus dialysis as needed.</li>
    </ul>
    <p>Renal function may worsen in the second week, so repeat chemistry and monitor urine output daily.</p>
  `,
  tip: "Lead with the exposure history and the conjunctival suffusion–calf pain pair, then separate mild disease from Weil disease and pulmonary haemorrhage.",
  sources: ["S31", "S26", "S33", "S4"]
},
{
  id: "gn32", domain: "gneg", star: true,
  q: "A coastal barangay in the Philippines reports a surge of rice-water diarrhoea after a piped-water interruption. Describe the clinical assessment, laboratory confirmation and outbreak control of cholera, and explain why oral rehydration remains definitive therapy.",
  tags: ["cholera", "Philippines", "ORS", "outbreak"],
  keypoints: ["rice-water stool", "dehydration", "oral rehydration solution", "Ringer's lactate", "zinc", "doxycycline", "azithromycin", "alkaline peptone water", "TCBS", "oral cholera vaccine", "chlorinate", "RA 11332"],
  answer: `
    <h4>Recognise the syndrome</h4>
    <p>Cholera presents with painless, profuse <strong>rice-water stool</strong>, vomiting and rapid <strong>dehydration</strong>; the differential includes ETEC, rotavirus, shigellosis and food poisoning. In a Philippine coastal barangay, a piped-water interruption, reliance on shallow wells and crowded evacuation centres are typical amplifiers. Assess hydration by mental status, sunken eyes, skin turgor, pulse, blood pressure and urine output rather than by stool volume alone. Reassess hydration and electrolytes after each stool, and record urine output.</p>
    <h4>Treat before confirming</h4>
    <p><strong>Oral rehydration solution</strong> is definitive because glucose-coupled sodium absorption through SGLT1 persists during secretion. Severe dehydration needs <strong>Ringer's lactate</strong> intravenously, then ORS; add <strong>zinc</strong> for children. A single dose of <strong>doxycycline</strong> is preferred for adults, with <strong>azithromycin</strong> for pregnancy, children and tetracycline resistance. Antimotility drugs are contraindicated because they prolong toxin exposure.</p>
    <h4>Laboratory confirmation</h4>
    <ul>
      <li>Send stool in Cary–Blair transport medium; enrich in <strong>alkaline peptone water</strong> and plate on <strong>TCBS</strong>, where <em>V. cholerae</em> O1 or O139 forms yellow sucrose-fermenting colonies.</li>
      <li>Use a rapid dipstick or PCR at the <strong>RITM</strong> reference laboratory, and test water chlorine residuals.</li>
      <li>Serotyping and whole-genome sequencing support outbreak linkage but do not change immediate care.</li>
    </ul>
    <h4>Outbreak control</h4>
    <p><strong>Chlorinate</strong> and protect water, promote hand hygiene and safe food, set up oral rehydration corners, and use <strong>oral cholera vaccine</strong> for reactive campaigns. Surveillance, line lists and <strong>RA 11332</strong> notification guide resource allocation. In the Philippines, DOH rapid response teams and local government units coordinate case management, water testing and risk communication; the aim is to keep case fatality below one percent by making ORS available within minutes of presentation. Keep a running fluid balance chart and monitor for hypoglycaemia in children.</p>
  `,
  tip: "State that ORS is treatment, not supportive care, and pair every clinical point with a water, sanitation and surveillance action.",
  sources: ["S26", "S31", "S33", "S11"]
},
{
  id: "gn33", domain: "gneg", star: true,
  q: "An overseas Filipino worker returns from South Asia with persistent fever, and blood culture grows Salmonella Typhi resistant to ceftriaxone. Discuss laboratory confirmation of enteric fever, the definition and management of XDR typhoid, and the public-health implications for the Philippines.",
  tags: ["enteric fever", "XDR typhoid", "blood culture", "Philippines"],
  keypoints: ["blood culture", "bone marrow culture", "Widal test", "XDR typhoid", "H58 haplotype", "ceftriaxone resistance", "azithromycin", "meropenem", "travel history", "Vi conjugate vaccine", "chronic carriage", "RA 11332"],
  answer: `
    <h4>Confirming enteric fever</h4>
    <p><strong>Blood culture</strong> is the priority in the first week and may remain positive longer with XDR typhoid. <strong>Bone marrow culture</strong> is the most sensitive test, especially after antibiotics; stool and urine cultures become useful in the second and third weeks. The <strong>Widal test</strong> is poorly specific and should not guide treatment. Leucopenia, relative bradycardia and rose spots support the diagnosis but are inconsistent.</p>
    <h4>What XDR means</h4>
    <p><strong>XDR typhoid</strong> is resistance to chloramphenicol, ampicillin, co-trimoxazole, fluoroquinolones and third-generation cephalosporins, leaving azithromycin and carbapenems. The <strong>H58 haplotype</strong> and IncHI1 plasmids carrying <em>bla</em>CTX-M-15 explain much of the South Asian epidemic. <strong>Ceftriaxone resistance</strong> must be confirmed by MIC testing, because disk diffusion can misclassify. Until susceptibilities return, treat severe disease with a carbapenem rather than repeating a failing cephalosporin, and review the patient daily for perforation, bleeding or shock.</p>
    <h4>Treatment</h4>
    <div class="table-wrap"><table>
      <tr><th>Scenario</th><th>Preferred approach</th></tr>
      <tr><td>Uncomplicated, susceptible</td><td>Ceftriaxone or azithromycin</td></tr>
      <tr><td>XDR or ceftriaxone-resistant</td><td><strong>Azithromycin</strong> if susceptible; <strong>meropenem</strong> for severe or invasive disease</td></tr>
      <tr><td>Severe typhoid with shock</td><td>Carbapenem plus dexamethasone and intensive care</td></tr>
      <tr><td>Chronic carriage</td><td>Prolonged antibiotic guided by susceptibility; investigate gallstones</td></tr>
    </table></div>
    <h4>Philippine public-health response</h4>
    <ul>
      <li>Obtain a <strong>travel history</strong> from returning overseas Filipino workers and travellers; screen household contacts.</li>
      <li>Notify under <strong>RA 11332</strong>, trace exposures and test water and food sources.</li>
      <li>Promote <strong>Vi conjugate vaccine</strong> where indicated, and strengthen culture and MIC capacity through RITM and regional laboratories.</li>
      <li>Counsel returning travellers about hand hygiene and safe food and water, and investigate clusters rather than treating each case in isolation.</li>
    </ul>
    <p>Repeat blood cultures if fever persists, and assess for metastatic abscesses.</p>
    <p>Infection control and food-handler screening limit secondary spread in households and institutions.</p>
  `,
  tip: "Distinguish blood culture timing from the useless Widal test, then define XDR by the five drug classes it defeats.",
  sources: ["S26", "S31", "S33", "S8"]
},
{
  id: "gn34", domain: "gneg", star: true,
  q: "Compare how the PSMID sepsis and acute infectious diarrhoea clinical practice guidelines shape early management in a Philippine tertiary hospital. Where do they align with international guidance, and where must local epidemiology modify practice?",
  tags: ["PSMID", "sepsis", "acute diarrhoea", "Philippines"],
  keypoints: ["Sepsis-3", "lactate", "blood cultures before antibiotics", "30 mL/kg", "source control", "de-escalation", "oral rehydration solution", "zinc", "antimotility drugs", "dysentery", "dengue", "antimicrobial stewardship"],
  answer: `
    <h4>Sepsis: the first hour</h4>
    <p>The PSMID sepsis guideline follows <strong>Sepsis-3</strong>: suspected infection plus organ dysfunction. Measure <strong>lactate</strong>, obtain <strong>blood cultures before antibiotics</strong> when this does not delay therapy, and give broad-spectrum antibiotics within one hour for septic shock. Give <strong>30 mL/kg</strong> crystalloid for hypotension or hypoperfusion, reassess fluid responsiveness, and start vasopressors early. <strong>Source control</strong> — drainage, debridement or device removal — is part of resuscitation. Philippine constraints shape choices: carbapenem availability, limited isolation rooms, and the need for <strong>de-escalation</strong> once cultures return.</p>
    <h4>Acute diarrhoea: less is more</h4>
    <p>The PSMID acute infectious diarrhoea guideline emphasises assessment of dehydration, <strong>oral rehydration solution</strong>, <strong>zinc</strong> in children, and avoidance of <strong>antimotility drugs</strong>. Antibiotics are reserved for <strong>dysentery</strong>, cholera, severe invasive disease or high-risk hosts; most watery diarrhoea is viral or self-limited. Stool culture, multiplex PCR and microscopy are targeted by history, not ordered reflexively.</p>
    <h4>Where local epidemiology changes practice</h4>
    <div class="table-wrap"><table>
      <tr><th>Issue</th><th>Philippine adaptation</th></tr>
      <tr><td>Febrile illness with shock</td><td>Consider <strong>dengue</strong>, leptospirosis and rickettsiosis alongside bacterial sepsis</td></tr>
      <tr><td>Diarrhoea with blood</td><td>Include <em>Shigella</em>, <em>Salmonella</em>, <em>Campylobacter</em> and STEC; avoid antibiotics in suspected STEC</td></tr>
      <tr><td>Antibiotic choice</td><td>Use the local antibiogram and <strong>antimicrobial stewardship</strong> guidance</td></tr>
      <tr><td>Infection control</td><td>Cohort suspected cholera and screen contacts early</td></tr>
    </table></div>
    <p>Both guidelines align with international standards on early cultures, fluids, source control, ORS and diagnostic stewardship. The Philippine difference is the differential diagnosis and the resource context, which is why locally generated surveillance and antimicrobial resistance data must inform every empirical decision. Document the time of recognition, antibiotic dose and fluid volume, because delay is the main avoidable harm. Review antibiotics at 48 to 72 hours and narrow according to cultures, allergy and renal function.</p>
  `,
  tip: "Show alignment first, then name the local twist: dengue and leptospirosis masquerade as sepsis, and STEC makes routine antidiarrhoeals dangerous.",
  sources: ["S26", "S20", "S33"]
},
{
  id: "gn35", domain: "gneg", star: true,
  q: "Carbapenem-resistant Enterobacterales are increasing in Philippine hospitals. Explain the resistance mechanisms, the laboratory detection pathway and the infection-control and stewardship response, and describe how national AMR surveillance informs the problem.",
  tags: ["CRE", "Philippines", "AMR surveillance", "carbapenemase"],
  keypoints: ["KPC", "OXA-48", "metallo-β-lactamases", "porin loss", "mCIM", "eCIM", "ceftazidime–avibactam", "aztreonam–avibactam", "cefiderocol", "antibiogram", "contact precautions", "antimicrobial stewardship"],
  answer: `
    <h4>Mechanisms</h4>
    <p>CRE usually combines a carbapenemase with porin loss or efflux. <strong>KPC</strong> (class A) and <strong>OXA-48</strong>-like (class D) enzymes hydrolyse carbapenems; <strong>metallo-β-lactamases</strong> such as NDM, VIM and IMP spare aztreonam but resist most inhibitors. <strong>Porin loss</strong> plus ESBL or AmpC production can produce resistance without a carbapenemase. Plasmids spread these genes between <em>Klebsiella</em>, <em>Escherichia</em> and <em>Enterobacter</em>, which is why hospital outbreaks move quickly. Clinically CRE causes ventilator-associated pneumonia, catheter-related bacteraemia, intra-abdominal infection and urinary sepsis, especially in ICU patients and those with prolonged antibiotic exposure.</p>
    <h4>Detection</h4>
    <ul>
      <li>Use CLSI or EUCAST carbapenem breakpoints and MIC methods; disk diffusion alone is unreliable for some organisms.</li>
      <li>Screen with the <strong>mCIM</strong> and confirm class with the <strong>eCIM</strong>; PCR for <em>bla</em>KPC, <em>bla</em>NDM and <em>bla</em>OXA-48 gives a rapid answer.</li>
      <li>Report the carbapenemase type, because it determines therapy; whole-genome sequencing supports outbreak investigation.</li>
    </ul>
    <h4>Treatment</h4>
    <div class="table-wrap"><table>
      <tr><th>Enzyme</th><th>Preferred options</th></tr>
      <tr><td>KPC</td><td><strong>Ceftazidime–avibactam</strong>, meropenem–vaborbactam or imipenem–relebactam</td></tr>
      <tr><td>OXA-48</td><td>Ceftazidime–avibactam or <strong>cefiderocol</strong></td></tr>
      <tr><td>Metallo-β-lactamase</td><td><strong>Aztreonam–avibactam</strong> or cefiderocol; colistin as backup</td></tr>
    </table></div>
    <h4>Philippine response</h4>
    <p>The DOH <strong>AMR surveillance</strong> programme, the RITM reference laboratory and hospital <strong>antibiogram</strong>s track CRE across sentinel sites. Infection control requires <strong>contact precautions</strong>, hand hygiene, environmental cleaning and device bundles; <strong>antimicrobial stewardship</strong> protects the new agents. During an outbreak, cohort colonised patients, screen high-risk units and review shared equipment and sinks, because contaminated surfaces sustain transmission. Notify clusters to the local health office and submit isolates for reference typing. Source control and rapid detection matter more than adding a second drug, and isolates should be referred when local testing cannot resolve the mechanism. Colistin should be dosed by weight and renal function, with close attention to nephrotoxicity.</p>
  `,
  tip: "Name the enzyme before naming the drug: KPC, OXA-48 and metallo-β-lactamases each have a different inhibitor solution.",
  sources: ["S26", "S31", "S33", "S14"]
},
{
  id: "gn36", domain: "gneg", star: true,
  q: "Review the recent treatment updates for multidrug-resistant Pseudomonas aeruginosa and carbapenem-resistant Acinetobacter baumannii. How do the newer β-lactam–β-lactamase inhibitor combinations and cefiderocol change bedside decisions?",
  tags: ["Pseudomonas", "Acinetobacter", "cefiderocol", "β-lactamase inhibitors"],
  keypoints: ["AmpC", "OprD", "OXA-23", "ceftolozane–tazobactam", "ceftazidime–avibactam", "imipenem–relebactam", "cefiderocol", "sulbactam–durlobactam", "combination therapy", "source control"],
  answer: `
    <h4>The resistance baseline</h4>
    <p><em>Pseudomonas aeruginosa</em> resistance reflects <strong>AmpC</strong> derepression, <strong>OprD</strong> loss, MexAB–OprM efflux and acquired carbapenemases. <em>Acinetobacter baumannii</em> depends on <strong>OXA-23</strong>, OXA-24/40 or OXA-58 carbapenemases, often boosted by ISAba1, plus low permeability and efflux. These mechanisms explain why carbapenems fail and why inhibitor combinations are not interchangeable.</p>
    <h4>What is new for Pseudomonas</h4>
    <ul>
      <li><strong>Ceftolozane–tazobactam</strong> is potent against many multidrug-resistant strains, especially when OprD loss dominates.</li>
      <li><strong>Ceftazidime–avibactam</strong> covers KPC and some OXA enzymes but not metallo-β-lactamases.</li>
      <li><strong>Imipenem–relebactam</strong> restores activity against KPC-producing strains and some OprD-deficient isolates.</li>
      <li><strong>Cefiderocol</strong>, a siderophore cephalosporin, covers metallo-β-lactamase producers and is an option for salvage therapy.</li>
    </ul>
    <h4>What is new for Acinetobacter</h4>
    <p><strong>Sulbactam–durlobactam</strong> is the first combination designed for carbapenem-resistant <em>A. baumannii</em>; durlobactam protects sulbactam from β-lactamases, and sulbactam saturates penicillin-binding proteins. <strong>Cefiderocol</strong>, high-dose ampicillin–sulbactam, minocycline and polymyxins remain alternatives, but resistance and toxicity limit them. <strong>Combination therapy</strong> is often used in severe disease, although evidence for superiority is limited.</p>
    <h4>Bedside rules</h4>
    <div class="table-wrap"><table>
      <tr><th>Scenario</th><th>Reasonable choice</th></tr>
      <tr><td>MBL-producing Pseudomonas</td><td>Ceftazidime–avibactam plus aztreonam, or cefiderocol</td></tr>
      <tr><td>KPC-producing Pseudomonas</td><td>Ceftazidime–avibactam or imipenem–relebactam</td></tr>
      <tr><td>CRAB pneumonia or bacteraemia</td><td>Sulbactam–durlobactam, or cefiderocol</td></tr>
    </table></div>
    <p>None of these drugs compensates for <strong>source control</strong>, device removal or infection control. Susceptibility testing should follow current CLSI or EUCAST breakpoints, and combination therapy should be guided by mechanism and severity rather than used reflexively. Reserve the newest agents for confirmed resistant infection or intolerance, and monitor clinical response because in-vitro activity does not guarantee clearance of a poorly drained focus. Infectious diseases consultation improves outcomes in these highly resistant infections. The newer agents are expensive and not universally available, so local formulary approval and stewardship review are necessary.</p>
  `,
  tip: "The mechanism is the prescription: MBL means aztreonam or cefiderocol, KPC means avibactam, and CRAB means sulbactam–durlobactam.",
  sources: ["S7", "S8", "S9", "S24"]
},
{
  id: "gn37", domain: "gneg", star: true,
  q: "Compare brucellosis and tularaemia as fastidious, intracellular, laboratory-acquired zoonoses. How do transmission, biosafety, diagnosis and treatment differ?",
  tags: ["Brucella", "Francisella", "zoonosis", "BSL-3"],
  keypoints: ["facultative intracellular", "BSL-3", "unpasteurised dairy", "undulant fever", "sacroiliitis", "endocarditis", "Rose Bengal", "doxycycline plus rifampicin", "ulceroglandular", "cysteine", "Streptomycin", "tularaemia"],
  answer: `
    <h4>Shared biology</h4>
    <p><em>Brucella</em> and <em>Francisella</em> are small, non-motile, <strong>facultative intracellular</strong> Gram-negative coccobacteria that survive in macrophages, resist phagosome–lysosome fusion and require cell-mediated immunity for clearance. Both are zoonoses with a low aerosol infectious dose, so culture and manipulation demand <strong>BSL-3</strong> containment. Both cause prolonged fever, lymphadenopathy and focal disease, and both are misdiagnosed as tuberculosis or lymphoma.</p>
    <h4>Brucellosis</h4>
    <p><em>B. melitensis</em> from goats and sheep is the most virulent species; infection follows <strong>unpasteurised dairy</strong>, placental contact or laboratory aerosol. <strong>Undulant fever</strong>, sweats, arthralgia and hepatosplenomegaly are typical. <strong>Sacroiliitis</strong> and spondylitis are common focal forms, and <strong>endocarditis</strong> is the usual cause of death. Blood or bone marrow culture needs prolonged incubation; <strong>Rose Bengal</strong> screening is followed by agglutination or ELISA, and PCR helps. Treatment is <strong>doxycycline plus rifampicin</strong> for at least six weeks, or doxycycline with an aminoglycoside; endocarditis needs longer therapy and valve surgery. Relapse is common when treatment is shortened, so adherence and follow-up matter. Animal vaccination and pasteurisation prevent most human brucellosis.</p>
    <h4>Tularaemia</h4>
    <p><em>F. tularensis</em> is transmitted by ticks, deer flies, rabbit contact or aerosol. It requires <strong>cysteine</strong> for growth and is hazardous to culture. <strong>Ulceroglandular</strong> disease is the commonest form; pneumonic and typhoidal forms are severe. Serology and PCR are the practical diagnostics. <strong>Streptomycin</strong> or gentamicin is first-line, with ciprofloxacin or doxycycline as alternatives and for post-exposure prophylaxis. Person-to-person spread does not occur, so isolation is not required; prevention depends on tick precautions, gloves when handling game and safe water.</p>
    <h4>Contrast</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Brucellosis</th><th>Tularaemia</th></tr>
      <tr><td>Main exposure</td><td>Unpasteurised dairy, placenta</td><td>Tick or deer-fly bite, rabbit</td></tr>
      <tr><td>Classic lesion</td><td>None; sacroiliitis</td><td>Ulcer with regional nodes</td></tr>
      <tr><td>Treatment</td><td>Doxycycline plus rifampicin</td><td>Streptomycin or gentamicin</td></tr>
    </table></div>
  `,
  tip: "Both are BSL-3 and both need combination therapy, but only brucellosis needs six weeks of doxycycline plus rifampicin.",
  sources: ["S4", "S10", "S12"]
},
{
  id: "gn38", domain: "gneg", star: true,
  q: "A patient with poor dentition develops culture-negative endocarditis. Explain the HACEK group, the anaerobic bacteria that can produce endovascular infection, and the diagnostic and therapeutic pathway when routine blood cultures are sterile.",
  tags: ["HACEK", "culture-negative endocarditis", "anaerobes", "16S rRNA"],
  keypoints: ["HACEK", "oropharyngeal flora", "large vegetations", "Bacteroides fragilis", "Fusobacterium necrophorum", "Lemierre syndrome", "source control", "three blood culture sets", "16S rRNA", "ceftriaxone", "valve surgery"],
  answer: `
    <h4>The HACEK group</h4>
    <p><strong>HACEK</strong> comprises <em>Haemophilus</em> species, <strong>Aggregatibacter</strong>, <strong>Cardiobacterium hominis</strong>, <strong>Eikenella corrodens</strong> and <strong>Kingella kingae</strong>. They are fastidious, slow-growing members of the <strong>oropharyngeal flora</strong>, so endocarditis follows dental disease or oral trauma. They produce <strong>large vegetations</strong> with high embolic risk, and routine bottles may remain sterile for several days.</p>
    <h4>Anaerobes and endovascular infection</h4>
    <p><strong>Bacteroides fragilis</strong> and <strong>Fusobacterium necrophorum</strong> illustrate anaerobic vascular disease. <em>B. fragilis</em> causes intra-abdominal abscess and bacteraemia; its capsule drives abscess formation, and it is resistant to penicillin through β-lactamase. <em>F. necrophorum</em> causes <strong>Lemierre syndrome</strong>, septic thrombophlebitis of the internal jugular vein after pharyngitis. Anaerobic endocarditis is uncommon but occurs with <em>Bacteroides</em>, <em>Fusobacterium</em> and anaerobic streptococci, especially in people who inject drugs or have poor dentition. These infections are usually polymicrobial, so cultures must be collected before antibiotics and processed anaerobically. Anaerobic blood cultures and tissue specimens are essential; mucosal swabs are unreliable. Aminoglycosides are inactive; use metronidazole or a β-lactam–β-lactamase inhibitor, and secure <strong>source control</strong>.</p>
    <h4>Culture-negative endocarditis</h4>
    <ul>
      <li>Take <strong>three blood culture sets</strong> before antibiotics and incubate for at least five days with chocolate agar subculture.</li>
      <li>Test serology for <em>Coxiella</em>, <em>Bartonella</em> and <em>Brucella</em>; use <strong>16S rRNA</strong> PCR and histology on valve tissue.</li>
      <li>Perform transthoracic then transoesophageal echocardiography to define vegetations and complications.</li>
    </ul>
    <h4>Treatment</h4>
    <p>HACEK endocarditis is treated with <strong>ceftriaxone</strong> for four weeks; ampicillin–sulbactam is an alternative. <strong>Valve surgery</strong> is indicated for heart failure, persistent infection, large vegetations or emboli. Empirical therapy for culture-negative disease should cover staphylococci, streptococci and HACEK, then narrow once the cause is identified. Repeat echocardiography if embolic events occur despite appropriate therapy.</p>
  `,
  tip: "Three sets, five days and chocolate agar come first; then serology, 16S PCR and the dental history explain the sterile culture.",
  sources: ["S4", "S9", "S12"]
},
{
  id: "gn39", domain: "gneg", star: true,
  q: "Ceftriaxone-resistant Neisseria gonorrhoeae is now a global concern. Explain the resistance mechanisms, the current treatment framework, and the surveillance and public-health response, including implications for the Philippines.",
  tags: ["gonorrhoea", "ceftriaxone resistance", "NAAT", "Philippines"],
  keypoints: ["penA mosaic", "porB1b", "mtrR", "gyrA", "parC", "23S rRNA", "ceftriaxone 500 mg", "test of cure", "culture and MIC", "NAAT", "partner notification", "WHO GASP"],
  answer: `
    <h4>Why gonorrhoea resists</h4>
    <p><em>Neisseria gonorrhoeae</em> acquires resistance by transformation and conjugation. <strong>penA mosaic</strong> alleles alter penicillin-binding protein 2 and raise ceftriaxone MICs; <strong>porB1b</strong> and <strong>mtrR</strong> changes reduce drug influx and increase efflux; <strong>gyrA</strong> and <strong>parC</strong> mutations confer fluoroquinolone resistance; <strong>23S rRNA</strong> methylation and <em>erm</em> genes cause macrolide resistance. The organism also survives inside neutrophils and varies surface antigens, so immunity is short-lived.</p>
    <h4>Current treatment</h4>
    <ul>
      <li>Uncomplicated urogenital, rectal or pharyngeal infection: <strong>ceftriaxone 500 mg</strong> intramuscularly once; 1 g if weight is 150 kg or more.</li>
      <li>Add doxycycline for seven days if chlamydia has not been excluded.</li>
      <li>Perform <strong>test of cure</strong> for pharyngeal infection and after treatment failure; culture is needed for susceptibility.</li>
      <li>Treat partners and screen for syphilis, HIV and chlamydia.</li>
    </ul>
    <h4>Surveillance and the Philippine response</h4>
    <p>Because NAAT cannot distinguish treatment failure from reinfection and does not give an MIC, <strong>culture and MIC</strong> testing must accompany <strong>NAAT</strong> at sentinel sites. <strong>WHO GASP</strong> and national STI programmes track ceftriaxone MICs; the Philippine DOH and RITM network support referral and quality assurance. Antimicrobial stewardship, condom promotion and <strong>partner notification</strong> are as important as the drug itself. Avoid azithromycin monotherapy, which selects resistance, and do not use ciprofloxacin empirically where fluoroquinolone resistance is common. Sexual history should be non-judgemental and include pharyngeal and rectal exposures. Screening should include extragenital sites, because pharyngeal infection drives resistance selection.</p>
    <h4>What comes next</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Status and role</th></tr>
      <tr><td><strong>Ceftriaxone</strong></td><td>First-line backbone; higher dose for severe or pharyngeal disease</td></tr>
      <tr><td>Zoliflodacin</td><td>Oral agent in late-stage development for uncomplicated gonorrhoea</td></tr>
      <tr><td>Gepotidacin</td><td>Alternative mechanism under study</td></tr>
    </table></div>
    <p>The goal is to preserve ceftriaxone by using it correctly, not to replace it prematurely.</p>
  `,
  tip: "Pair every mention of NAAT with the need for culture and MIC, because molecular tests cannot tell you whether ceftriaxone still works.",
  sources: ["S7", "S9", "S11", "S26"]
},
{
  id: "gn40", domain: "gneg", star: true,
  q: "Why do conventional culture and Gram stain fail in atypical pneumonia, and how should molecular panels, biomarkers and current treatment options change empirical management?",
  tags: ["atypical pneumonia", "Mycoplasma", "Legionella", "molecular panels"],
  keypoints: ["no cell wall", "obligate intracellular", "Gram stain", "multiplex PCR", "urinary antigen", "procalcitonin", "macrolide", "doxycycline", "levofloxacin", "azithromycin", "β-lactams are ineffective", "macrolide resistance"],
  answer: `
    <h4>Why the label persists</h4>
    <p>Atypical pneumonia traditionally means <em>Mycoplasma pneumoniae</em>, <em>Chlamydia pneumoniae</em> and <em>Legionella pneumophila</em>. <strong>Mycoplasma</strong> has <strong>no cell wall</strong>, so β-lactams fail and <strong>Gram stain</strong> is uninformative. <em>Chlamydia</em> and <em>Legionella</em> are <strong>obligate intracellular</strong> or intracellular-replicating organisms that need special media. Sputum culture and conventional tests therefore have low yield, and the diagnosis is usually syndromic plus molecular. A chest radiograph may show bilateral infiltrates but cannot identify the organism.</p>
    <h4>Diagnostics that change management</h4>
    <ul>
      <li><strong>Multiplex PCR</strong> on respiratory secretions detects <em>Mycoplasma</em>, <em>Chlamydia</em>, <em>Legionella</em> and respiratory viruses within hours.</li>
      <li><strong>Urinary antigen</strong> detects <em>Legionella</em> serogroup 1 and pneumococcus; it is rapid but limited in scope.</li>
      <li><strong>Procalcitonin</strong> tends to be low in atypical infection but cannot safely exclude bacterial pneumonia.</li>
      <li>Serology is retrospective and should not delay treatment.</li>
    </ul>
    <h4>Treatment</h4>
    <div class="table-wrap"><table>
      <tr><th>Pathogen</th><th>First-line</th><th>Alternative</th></tr>
      <tr><td><em>Mycoplasma</em>, <em>Chlamydia</em></td><td><strong>Macrolide</strong> or <strong>doxycycline</strong></td><td>Fluoroquinolone</td></tr>
      <tr><td><em>Legionella</em></td><td><strong>Levofloxacin</strong> or <strong>azithromycin</strong></td><td>Doxycycline</td></tr>
    </table></div>
    <p><strong>β-lactams are ineffective</strong> against <em>Mycoplasma</em>, although ceftriaxone plus a macrolide is common until the cause is clear. <strong>Macrolide resistance</strong> in <em>M. pneumoniae</em> is well described in East Asia and complicates prolonged illness. Watch QTc intervals when combining macrolides or fluoroquinolones with other drugs, and use corticosteroids only in severe hypoxaemic pneumonia. Bacterial coinfection is uncommon in mild atypical pneumonia, so broaden therapy when the patient is hypoxic, hypotensive or improving poorly. Obtain blood and sputum cultures before antibiotics whenever this will not delay therapy. The practical lesson is to test broadly, treat early on clinical grounds, and de-escalate when a virus or a susceptible pathogen is found. Vaccination against pneumococcus and influenza prevents some secondary bacterial pneumonias.</p>
  `,
  tip: "Explain the negative Gram stain and failed β-lactam mechanically, then use the table to separate Mycoplasma from Legionella therapy.",
  sources: ["S4", "S9", "S12"]
}
);
