window.QBANK.push(
{
  id: "gp1", domain: "gpos", star: true,
  q: "Describe the virulence determinants of Staphylococcus aureus and explain how they produce the organism's major clinical syndromes.",
  tags: ["S. aureus", "toxins", "endocarditis", "TSS"],
  answer: `
    <h4>Surface and immune-evasion factors</h4>
    <p><em>S. aureus</em> is a catalase- and coagulase-positive Gram-positive coccus in clusters. Its surface is a dense array of <strong>MSCRAMMs</strong> (microbial surface components recognising adhesive matrix molecules): protein A (binds Fc of IgG and von Willebrand factor), fibronectin-binding proteins A/B, clumping factor A/B (fibrinogen), collagen- and bone sialoprotein-binding proteins. <strong>Capsule</strong> serotypes 5 and 8 resist phagocytosis. It secretes <strong>coagulase</strong> (converts fibrinogen to fibrin, walls off infection) and <strong>staphylokinase</strong>. It survives within neutrophils and forms biofilms on prosthetic material.</p>
    <h4>Toxins</h4>
    <ul>
      <li><strong>α-Haemolysin</strong> — pore former; tissue necrosis and dermonecrosis.</li>
      <li><strong>Panton–Valentine leucocidin (PVL)</strong> — pore-forming leukotoxin; associated with recurrent skin abscesses and necrotising pneumonia in young people.</li>
      <li><strong>TSST-1 and enterotoxins</strong> — superantigens; polyclonal T-cell activation and cytokine release.</li>
      <li><strong>Exfoliative toxins A/B</strong> — serine proteases cleaving desmoglein-1; staphylococcal scalded skin syndrome.</li>
      <li><strong>Enterotoxins A–E, G–I</strong> — heat-stable, preformed; food poisoning with vomiting 1–6 h after ingestion.</li>
      <li><strong>Epidermolytic and haemolytic enzymes</strong> — lipase, protease, hyaluronidase, staphylokinase.</li>
    </ul>
    <h4>Syndromes</h4>
    <p><strong>Skin and soft tissue:</strong> impetigo, folliculitis, furuncles, carbuncles, cellulitis, abscesses, surgical site infection. <strong>Bacteraemia and endocarditis:</strong> often via intravascular devices; right-sided endocarditis in injecting drug use; metastatic abscesses (bone, joint, lung, spleen). <strong>Toxic shock syndrome:</strong> fever, rash, hypotension, multi-organ involvement — menstrual (tampon) and non-menstrual. <strong>Scalded skin syndrome</strong> in infants. <strong>Food poisoning:</strong> short incubation, vomiting, no fever. <strong>Pneumonia:</strong> post-influenza necrotising pneumonia with PVL. <strong>Osteomyelitis, septic arthritis and prosthetic joint infection.</strong></p>
    <h4>Diagnosis and treatment</h4>
    <p>Gram stain, culture (mannitol salt agar, coagulase), MALDI-TOF, and <em>mecA/mecC</em> PCR for MRSA. Treatment depends on susceptibility and focus: flucloxacillin/cefazolin for MSSA; vancomycin or daptomycin for MRSA; source control is essential. Add rifampicin for prosthetic material, and consider clindamycin to suppress toxin in severe toxin-mediated disease.</p>
  `,
  tip: "Group the virulence factors into adhere, invade, evade, intoxicate — then map each syndrome to a factor.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gp2", domain: "gpos", star: true,
  q: "Explain the molecular basis of methicillin resistance, distinguish healthcare-associated from community-associated MRSA, and discuss treatment options.",
  tags: ["MRSA", "mecA", "SCCmec", "vancomycin"],
  answer: `
    <h4>Mechanism</h4>
    <p>Methicillin resistance is due to <strong><em>mecA</em></strong> (or the variant <em>mecC</em>), which encodes <strong>penicillin-binding protein 2a (PBP2a)</strong>, a transpeptidase with low affinity for nearly all β-lactams. <em>mecA</em> is carried on a mobile <strong>staphylococcal cassette chromosome <em>mec</em> (SCC<i>mec</i>)</strong> integrated at <em>orfX</em>; <em>mec</em> regulation involves <em>mecI</em> (repressor) and <em>mecR1</em> (sensor). Expression is often heterogeneous, so phenotypic detection can fail — hence cefoxitin disk diffusion (which induces PBP2a) or <em>mecA</em>/PBP2a confirmatory testing. <strong>Borderline oxacillin-resistant</strong> strains and <em>mecC</em> require molecular detection.</p>
    <h4>HA-MRSA versus CA-MRSA</h4>
    <ul>
      <li><strong>HA-MRSA:</strong> SCC<i>mec</i> types I–III, multidrug resistance, older and hospitalised patients, device- and procedure-related bacteraemia, pneumonia and surgical site infection.</li>
      <li><strong>CA-MRSA:</strong> typically SCC<i>mec</i> type IV (small, single <em>mecA</em>), PVL-positive in many lineages (USA300), susceptible to more non-β-lactams, causes skin abscesses and necrotising pneumonia in healthy young people. The distinction is epidemiological, not absolute, as CA strains now circulate in hospitals.</li>
    </ul>
    <h4>Treatment</h4>
    <p>For <strong>uncomplicated skin abscess</strong>, incision and drainage is primary; add oral doxycycline or trimethoprim–sulfamethoxazole for systemic signs or high-risk patients. For <strong>invasive MRSA</strong>, vancomycin (AUC-guided) or daptomycin are first-line; alternatives include linezolid (especially pneumonia, as vancomycin penetration is poor), ceftaroline (a β-lactam with PBP2a activity, as is ceftobiprole), telavancin and tigecycline (not for bacteraemia). <strong>Bacteraemia requires source control and repeat cultures</strong>; persistent bacteraemia suggests an undrained focus or vancomycin MIC creep. Combination therapy is not routine, but daptomycin plus ceftaroline or fosfomycin is used in refractory cases.</p>
    <h4>Prevention</h4>
    <p>Hand hygiene, screening and decolonisation (mupirocin nasal plus chlorhexidine bathing) before high-risk surgery, antimicrobial stewardship, and rapid molecular detection to reduce inappropriate vancomycin use.</p>
  `,
  tip: "PBP2a and SCCmec are the two words that must appear; add cefoxitin induction to show lab awareness.",
  sources: ["S1", "S4", "S8"]
},
{
  id: "gp3", domain: "gpos", star: true,
  q: "Discuss the pathogenesis of Streptococcus pyogenes infection, including the toxin-mediated and immunologically mediated complications.",
  tags: ["GAS", "M protein", "rheumatic fever", "necrotising fasciitis"],
  answer: `
    <h4>Organism and virulence</h4>
    <p><em>S. pyogenes</em> (group A β-haemolytic streptococcus) is bacitracin-sensitive and Lancefield group A. <strong>M protein</strong> is the major virulence factor: it inhibits complement C3b deposition by binding factor H and fibrinogen, resists phagocytosis, and is the basis ofemm typing. Other factors include <strong>hyaluronic acid capsule</strong>, <strong>streptolysin O</strong> (oxygen-labile, cholesterol-dependent pore former; antigen for ASO titre), <strong>streptolysin S</strong>, <strong>streptokinase</strong>, <strong>DNase</strong>, <strong>hyaluronidase</strong> and <strong>streptococcal pyrogenic exotoxins (SpeA, SpeB, SpeC)</strong>, which are superantigens.</p>
    <h4>Suppurative disease</h4>
    <p><strong>Pharyngitis</strong> ("strep throat") in children, with exudate, fever and tender anterior cervical nodes; <strong>scarlet fever</strong> when a toxigenic strain produces a sandpaper rash, strawberry tongue and circumoral pallor. <strong>Impetigo</strong>, erysipelas, cellulitis, <strong>necrotising fasciitis</strong> and <strong>streptococcal toxic shock syndrome</strong> occur when the organism breaches fascia or produces superantigen. <strong>Puerperal sepsis</strong> and <strong>bacteraemia</strong> occur in vulnerable hosts.</p>
    <h4>Post-streptococcal sequelae</h4>
    <ul>
      <li><strong>Acute rheumatic fever</strong> — 2–4 weeks after pharyngitis; molecular mimicry between M protein and cardiac myosin/valves, with cross-reactive antibodies and T cells. Criteria (Jones): carditis, polyarthritis, chorea, erythema marginatum, subcutaneous nodules, plus evidence of preceding GAS. Mitral valve damage causes chronic rheumatic heart disease.</li>
      <li><strong>Post-streptococcal glomerulonephritis</strong> — immune-complex deposition (nephritogenic M types, e.g. 12, 49), 1–3 weeks after pharyngitis or impetigo; haematuria, oedema, hypertension, low C3.</li>
      <li><strong>PANDAS</strong> — controversial autoimmune neuropsychiatric association.</li>
    </ul>
    <h4>Diagnosis and treatment</h4>
    <p>Rapid antigen detection and throat culture (or PCR); ASO/anti-DNase B for sequelae; blood cultures and imaging in necrotising infection. Penicillin or amoxicillin is first-line and GAS remains universally susceptible. For necrotising fasciitis: <strong>urgent surgical debridement plus clindamycin</strong> (antitoxin effect, Eagle phenomenon) and penicillin; IVIG is used adjunctively in toxic shock. Penicillin prophylaxis prevents recurrent rheumatic fever.</p>
  `,
  tip: "Separate suppurative, toxin-mediated and immune-mediated disease — the examiner's three buckets.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gp4", domain: "gpos", star: true,
  q: "Explain how Streptococcus pneumoniae causes disease, how resistance has emerged, and how vaccines have changed epidemiology.",
  tags: ["pneumococcus", "capsule", "PCV", "penicillin resistance"],
  answer: `
    <h4>The organism</h4>
    <p><em>S. pneumoniae</em> is a lancet-shaped, α-haemolytic, optochin-sensitive diplococcus. It is a common nasopharyngeal commensal, especially in young children, and spreads by respiratory droplets.</p>
    <h4>Virulence</h4>
    <p>The <strong>polysaccharide capsule</strong> (more than 100 serotypes) is the dominant virulence factor: it prevents phagocytosis and complement deposition, and anticapsular antibody is protective. <strong>Pneumolysin</strong> is a cholesterol-dependent pore former that damages epithelium, activates complement and drives inflammation. <strong>Autolysin</strong> releases cell-wall components (teichoic acid, peptidoglycan) that trigger TLR2 and inflammation. <strong>IgA protease</strong> and surface adhesins (PspA, PspC, choline-binding proteins) aid colonisation and invasion. Neuraminidase and hyaluronidase facilitate spread.</p>
    <h4>Disease</h4>
    <p>Otitis media and sinusitis from contiguous spread; <strong>community-acquired pneumonia</strong> (lobar, with rusty sputum and lobar consolidation); <strong>bacteraemia</strong>; <strong>meningitis</strong> (the commonest cause in adults); and peritonitis in nephrotic syndrome. Splenectomy and complement deficiency predispose to fulminant sepsis (overwhelming post-splenectomy infection).</p>
    <h4>Resistance</h4>
    <p>Penicillin resistance is <strong>not β-lactamase mediated</strong>; it arises from <strong>mosaic <em>pbp1a/2b/2x</em></strong> genes acquired by transformation, reducing PBP affinity. Macrolide resistance is via <em>ermB</em> (MLS<sub>B</sub>) or <em>mefA</em> efflux; fluoroquinolone resistance via <em>parC/gyrA</em>. Susceptibility breakpoints differ by site (meningitis vs non-meningitis), so laboratories must apply the correct CLSI/EUCAST table.</p>
    <h4>Vaccines and epidemiology</h4>
    <p>The <strong>23-valent polysaccharide vaccine (PPSV23)</strong> is T-independent, poorly immunogenic in children and does not induce memory. <strong>Conjugate vaccines (PCV10/13/15/20)</strong> link capsular polysaccharide to carrier protein, recruit Tfh help, induce memory and reduce nasopharyngeal carriage — producing <strong>herd protection</strong>. Serotype replacement has followed PCV introduction, necessitating higher-valency products. Vaccination has reduced invasive pneumococcal disease dramatically but non-vaccine serotypes and antibiotic-resistant clones fill the niche.</p>
  `,
  tip: "Say explicitly that pneumococcal penicillin resistance is PBP-based, not enzymatic — a very common trap.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gp5", domain: "gpos",
  q: "Why is Enterococcus intrinsically resistant to many antibiotics, and how should vancomycin-resistant enterococcal infection be managed?",
  tags: ["Enterococcus", "VRE", "intrinsic resistance", "linezolid"],
  answer: `
    <h4>The organism</h4>
    <p><em>E. faecalis</em> and <em>E. faecium</em> are Gram-positive cocci in pairs/chains, catalase-negative, grow in 6.5% NaCl and hydrolyse esculin in bile. They are normal gut flora and opportunists in hospitalised, device-bearing and immunocompromised patients.</p>
    <h4>Intrinsic resistance</h4>
    <ul>
      <li><strong>β-lactams:</strong> low-affinity PBPs (PBP5 in <em>E. faecium</em>) mean cephalosporins are inactive and ampicillin activity is limited — the basis of "enterococcal" therapeutic gap.</li>
      <li><strong>Aminoglycosides:</strong> intrinsic low-level resistance from poor uptake; synergistic killing requires a cell-wall agent.</li>
      <li><strong>Lincosamides and streptogramins:</strong> efflux and modifying enzymes.</li>
      <li><strong>Trimethoprim–sulfamethoxazole:</strong> exogenous folate bypass in vivo.</li>
      <li><strong>Vancomycin (acquired):</strong> <em>vanA</em> (high-level, inducible, Tn<i>1546</i>, plasmid) and <em>vanB</em> (variable) alter the peptidoglycan precursor d-Ala-d-Ala to d-Ala-d-Lactate, abolishing vancomycin binding.</li>
    </ul>
    <h4>Clinical disease</h4>
    <p>Urinary tract infection (especially catheter-associated), bacteraemia, <strong>endocarditis</strong> (often with an abnormal valve or device), intra-abdominal and pelvic infection, wound infection, and neonatal sepsis. <em>E. faecium</em> is more antibiotic-resistant and more often nosocomial than <em>E. faecalis</em>.</p>
    <h4>Management of VRE</h4>
    <p>For susceptible strains, ampicillin (or ampicillin–ceftriaxone for <em>E. faecalis</em> endocarditis) plus gentamicin for synergy. For VRE: <strong>linezolid</strong> (excellent for VRE, including pneumonia, but myelosuppression and serotonin interactions), <strong>daptomycin</strong> (bactericidal, but inactivated by surfactant in lung — not for pneumonia; higher doses for endocarditis), <strong>tigecycline</strong> (not for bacteraemia), and <strong>ceftaroline plus daptomycin</strong> or <strong>fosfomycin</strong> combinations. Quinupristin–dalfopristin is active against <em>E. faecium</em> but not <em>E. faecalis</em>. Source control and device removal are essential.</p>
    <h4>Prevention</h4>
    <p>Antimicrobial stewardship (especially reducing cephalosporin and vancomycin pressure), contact precautions, screening of high-risk admissions, and chlorhexidine bathing in ICUs.</p>
  `,
  tip: "List intrinsic resistances as a mechanism (low-affinity PBP5, poor aminoglycoside uptake), not just as 'resistant to cephalosporins'.",
  sources: ["S1", "S4", "S8"]
},
{
  id: "gp6", domain: "gpos", star: true,
  q: "Describe the pathogenesis, clinical forms, diagnosis and management of anthrax.",
  tags: ["Bacillus anthracis", "bioterrorism", "toxin", "spores"],
  answer: `
    <h4>Organism and virulence</h4>
    <p><em>Bacillus anthracis</em> is a large, box-car-shaped, Gram-positive, spore-forming rod. Spores persist in soil for decades and are the infectious form. Virulence requires two plasmids: <strong>pXO1</strong> encodes the tripartite toxin (protective antigen, edema factor, lethal factor) and <strong>pXO2</strong> encodes the poly-γ-d-glutamate <strong>capsule</strong>. Protective antigen binds host receptors (ANTXR1/2), translocates edema factor (a calmodulin-dependent adenylate cyclase raising cAMP) and lethal factor (a zinc metalloprotease cleaving MAPK kinases). The capsule and toxin together produce oedema, haemorrhage and shock.</p>
    <h4>Clinical forms</h4>
    <ul>
      <li><strong>Cutaneous (most common, >90%):</strong> painless pruritic papule → vesicle → depressed black <strong>eschar</strong> with surrounding non-pitting oedema; regional lymphadenopathy. Usually self-limiting with treatment.</li>
      <li><strong>Inhalational:</strong> flu-like prodrome followed by abrupt dyspnoea, stridor, mediastinal widening and haemorrhagic mediastinitis; high mortality.</li>
      <li><strong>Gastrointestinal:</strong> after ingestion of contaminated meat; ulceration, bleeding, ascites.</li>
      <li><strong>Injection anthrax:</strong> in people who inject drugs; deep soft-tissue infection without classic eschar.</li>
      <li><strong>Meningitis:</strong> haemorrhagic, from bacteraemia.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>Gram stain and culture of blood, vesicle fluid or tissue (non-haemolytic, penicillin-susceptible colonies; "medusa head"); <strong>PCR</strong> for <em>pagA</em>, <em>capC</em>; immunohistochemistry; and serology (anti-protective antigen) retrospectively. Laboratory work requires <strong>BSL-3</strong> for culture. Mediastinal widening on chest imaging is a classic clue.</p>
    <h4>Management and prevention</h4>
    <p><strong>Ciprofloxacin or doxycycline</strong> are first-line; alternatives include penicillin (for susceptible strains), clindamycin, linezolid and carbapenems. Severe disease: combination therapy plus <strong>antitoxin</strong> (raxibacumab or obiltoxaximab; anthrax immune globulin) and intensive care. Cutaneous anthrax is treated for 7–10 days; systemic disease for 60 days. <strong>Post-exposure prophylaxis</strong> is ciprofloxacin or doxycycline for 60 days plus a three-dose vaccine series. The acellular vaccine (AVA) is adsorbed protective antigen. Anthrax is a category A bioterrorism agent because of spore stability and inhalational lethality.</p>
  `,
  tip: "Two plasmids, three toxin components, four clinical forms — a compact structure that covers the whole question.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "gp7", domain: "gpos", star: true,
  q: "Compare the medically important clostridia — Clostridioides difficile, C. tetani, C. botulinum and C. perfringens — in terms of toxin mechanism, disease and treatment.",
  tags: ["Clostridium", "C. difficile", "tetanus", "botulism"],
  answer: `
    <h4>General</h4>
    <p>Clostridia are anaerobic, spore-forming, Gram-positive rods. Disease is almost entirely <strong>toxin-mediated</strong>; spores persist in soil or the gut and germinate in anaerobic niches.</p>
    <h4><em>Clostridioides difficile</em></h4>
    <p>Overgrowth after antibiotic-induced dysbiosis. <strong>Toxin A</strong> (enterotoxin) and <strong>toxin B</strong> (cytotoxin) glucosylate Rho/Rac GTPases, disrupting the cytoskeleton and tight junctions; the <strong>binary toxin</strong> (CDT) enhances adherence. Disease ranges from antibiotic-associated diarrhoea to <strong>pseudomembranous colitis</strong>, toxic megacolon and sepsis. Diagnosis: stool <strong>toxin EIA</strong> or <strong>GDH</strong> plus <strong>NAAT</strong>; colonoscopy shows yellow pseudomembranes. Treatment: stop the inciting antibiotic; <strong>oral fidaxomicin or vancomycin</strong> (metronidazole only when neither is available); <strong>fidaxomicin</strong> reduces recurrence; recurrent disease → <strong>faecal microbiota transplantation</strong>; monoclonal antibody bezlotoxumab against toxin B reduces recurrence. Avoid antiperistaltics.</p>
    <h4><em>Clostridium tetani</em></h4>
    <p><strong>Tetanospasmin</strong> is a zinc metalloprotease that cleaves synaptobrevin (VAMP) in inhibitory interneurons of the spinal cord, blocking GABA/glycine release → disinhibited motor activity: trismus, risus sardonicus, opisthotonus, spasms. Management: <strong>human tetanus immunoglobulin</strong>, wound debridement, metronidazole (or penicillin), benzodiazepines/magnesium, airway support, and <strong>active vaccination</strong>. Prevention by toxoid is highly effective.</p>
    <h4><em>Clostridium botulinum</em></h4>
    <p><strong>Botulinum neurotoxin</strong> cleaves SNAP-25 (or syntaxin/VAMP depending on serotype) at the presynaptic terminal, blocking acetylcholine release → symmetric descending flaccid paralysis, ptosis, dysphagia, respiratory failure; no fever, normal mentation. Infant botulism follows spore ingestion (honey). Treatment: <strong>equine heptavalent antitoxin</strong> (or baby BIG), intensive respiratory support; antibiotics are not key. Botulinum toxin is also a bioterrorism agent and a therapeutic for dystonia.</p>
    <h4><em>Clostridium perfringens</em></h4>
    <p><strong>α-Toxin</strong> (phospholipase C/sphingomyelinase) causes myonecrosis and haemolysis; <strong>θ-toxin</strong> is a pore former; enterotoxin causes food poisoning. <strong>Gas gangrene</strong> after trauma: crepitus, bronze skin, rapid shock. Treatment: <strong>urgent debridement plus high-dose penicillin and clindamycin</strong> (antitoxin effect), and hyperbaric oxygen as adjunct.</p>
  `,
  tip: "One toxin mechanism per organism is enough — the discriminator is the SNARE target and the clinical polarity (spastic vs flaccid).",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gp8", domain: "gpos",
  q: "Explain the pathogenesis of listeriosis, identify the populations at risk, and justify the choice of antibiotics.",
  tags: ["Listeria", "meningitis", "pregnancy", "ampicillin"],
  answer: `
    <h4>Organism</h4>
    <p><em>Listeria monocytogenes</em> is a Gram-positive, non-spore-forming, facultative intracellular rod that grows at refrigeration temperature (cold enrichment) and is β-haemolytic. It is acquired from contaminated ready-to-eat foods — soft cheeses, pâté, smoked fish, unpasteurised dairy, deli meat.</p>
    <h4>Pathogenesis</h4>
    <p>After ingestion, <strong>InlA</strong> binds E-cadherin on enterocytes and <strong>InlB</strong> binds c-Met, triggering zipper-style internalisation. <strong>Listeriolysin O</strong> and phospholipases rupture the vacuole, releasing the organism into the cytosol, where <strong>ActA</strong> nucleates actin for cell-to-cell spread — avoiding antibody. The organism crosses the intestinal barrier, the blood–brain barrier and the placenta. Immunity depends on <strong>Th1 cells, IFN-γ and activated macrophages</strong>; hence defects in cell-mediated immunity are decisive.</p>
    <h4>Risk groups</h4>
    <p><strong>Pregnant women</strong> (miscarriage, stillbirth, neonatal sepsis, granulomatosis infantiseptica), <strong>neonates</strong>, <strong>adults over 65</strong>, and <strong>immunocompromised</strong> patients — transplant recipients, haematological malignancy, corticosteroids, anti-TNF biologics, HIV. In healthy adults it usually causes a self-limited febrile gastroenteritis.</p>
    <h4>Clinical disease</h4>
    <p>Febrile gastroenteritis; <strong>bacteraemia</strong>; <strong>meningitis and meningoencephalitis</strong> (with seizures, ataxia, cranial nerve palsies); <strong>rhombencephalitis</strong>; endocarditis; focal abscesses. In pregnancy, maternal illness may be mild while fetal infection is severe.</p>
    <h4>Diagnosis and treatment</h4>
    <p>Culture of blood, CSF, placenta or amniotic fluid; CSF shows pleocytosis with moderate protein; <strong>PCR</strong> is useful when culture is negative; cold enrichment improves yield. <strong>Ampicillin is the drug of choice</strong>, often with <strong>gentamicin</strong> for synergy in severe disease (meningitis, endocarditis); <strong>trimethoprim–sulfamethoxazole</strong> is the alternative in β-lactam allergy. <strong>Cephalosporins are inactive</strong> and must not be used empirically for meningitis in at-risk groups — this is the key prescribing point. Duration is prolonged (at least 2–3 weeks for meningitis, longer for endocarditis). Prevention is food hygiene and dietary advice in pregnancy.</p>
  `,
  tip: "The two examinable facts: cephalosporins fail, and pregnancy/neonates are the classic risk groups.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gp9", domain: "gpos",
  q: "Describe diphtheria: its toxin, clinical features, complications and the principles of antitoxin and antibiotic therapy.",
  tags: ["Corynebacterium", "diphtheria toxin", "pseudomembrane", "antitoxin"],
  answer: `
    <h4>Organism and toxin</h4>
    <p><em>Corynebacterium diphtheriae</em> is a club-shaped, Gram-positive, non-spore-forming rod that forms <strong>metachromatic (Babes–Ernst) granules</strong> and grows on <strong>Loeffler's serum</strong> or <strong>Tinsdale tellurite</strong> medium as black colonies. Toxigenicity is encoded by the <strong><em>tox</em> gene carried on a corynephage</strong> (lysogenic conversion); the <strong>Elek immunodiffusion test</strong> or PCR confirms toxin production. <strong>Diphtheria toxin</strong> is an AB toxin: the B subunit binds heparin-binding EGF-like growth factor (HB-EGF) and the A subunit ADP-ribosylates elongation factor 2, halting protein synthesis and killing cells.</p>
    <h4>Clinical features</h4>
    <p>After a 2–5 day incubation, <strong>pharyngeal/tonsillar diphtheria</strong> produces low-grade fever, sore throat and a greyish-white, adherent <strong>pseudomembrane</strong> that bleeds when removed and may obstruct the airway. <strong>Nasal</strong>, <strong>laryngeal</strong> and <strong>cutaneous</strong> forms occur. The toxin spreads systemically and causes <strong>myocarditis</strong> (arrhythmia, heart failure), <strong>neuritis</strong> (palatal palsy, oculomotor palsy, peripheral neuropathy) and renal tubular necrosis. Mortality remains 5–10% despite treatment.</p>
    <h4>Diagnosis</h4>
    <p>Clinical diagnosis must trigger immediate treatment. Swab the membrane and send for culture and toxigenicity testing; PCR for <em>tox</em> is rapid. Distinguish from streptococcal exudative pharyngitis, infectious mononucleosis and Vincent angina.</p>
    <h4>Treatment</h4>
    <ul>
      <li><strong>Diphtheria antitoxin</strong> — equine antibody neutralises circulating toxin but cannot reverse bound toxin; give as soon as the diagnosis is suspected, after sensitivity testing. This is the priority, before antibiotics.</li>
      <li><strong>Antibiotics</strong> — penicillin or erythromycin eradicate the organism and reduce transmission.</li>
      <li><strong>Supportive care</strong> — airway management, cardiac monitoring, bed rest; avoid unnecessary manipulation of the membrane.</li>
      <li><strong>Public health</strong> — notify, trace contacts, give chemoprophylaxis and booster vaccination. The toxoid vaccine (part of DTP/DTaP/Tdap) is highly effective; immunity wanes, so adult boosters are needed.</li>
    </ul>
    <p>Cutaneous diphtheria requires antitoxin and antibiotics, with wound cleaning. The global re-emergence of diphtheria where vaccine coverage has fallen makes this a live public health issue.</p>
  `,
  tip: "Antitoxin first, antibiotics second, and the phrase 'toxin already bound cannot be neutralised' shows clinical judgement.",
  sources: ["S1", "S2", "S10"]
},
{
  id: "gp10", domain: "gpos",
  q: "Compare Nocardia and Actinomyces. Why are they easily confused, and how does their management differ?",
  tags: ["Nocardia", "Actinomyces", "actinomycosis", "sulfonamide"],
  answer: `
    <h4>Shared features</h4>
    <p>Both are Gram-positive, filamentous, branching bacilli that form <strong>sulphur granules</strong> in tissue and cause chronic suppurative, granulomatous disease. Both are <strong>anaerobic-to-microaerophilic</strong> in the case of <em>Actinomyces</em>, whereas <em>Nocardia</em> is strictly <strong>aerobic</strong>. They are therefore easily confused on Gram stain and in tissue sections, but the differences determine treatment.</p>
    <h4><em>Actinomyces</em></h4>
    <p>Commensal of the oral cavity, gut and female genital tract. Disease follows <strong>mucosal breach</strong>: cervicofacial ("lumpy jaw") after dental work or trauma, thoracic after aspiration, abdominal/pelvic with an IUD. Lesions are indurated, painless masses with draining sinuses and "sulphur granules" (colonies of organisms). It is <strong>not acid-fast</strong>, grows anaerobically, and is <strong>penicillin-susceptible</strong>. Treatment is <strong>high-dose penicillin for weeks to months</strong>, plus surgical drainage/excision. There is no person-to-person spread.</p>
    <h4><em>Nocardia</em></h4>
    <p>Environmental saprophyte in soil and decaying matter; acquired by inhalation or direct inoculation. Causes <strong>pulmonary nocardiosis</strong> (nodules, cavitation, effusion) in immunocompromised hosts — transplant, steroids, HIV, CGD — and <strong>disseminated disease</strong> with brain abscesses, skin lesions and bacteraemia. It is <strong>weakly acid-fast</strong> (modified Kinyoun), grows aerobically on ordinary media (often slowly, 3–5 days to weeks), and colonies are chalky. Treatment is <strong>trimethoprim–sulfamethoxazole</strong> (often with amikacin or a carbapenem for severe CNS disease), guided by susceptibility, for months; brain abscesses may need drainage.</p>
    <h4>Distinguishing points</h4>
    <ul>
      <li>Acid-fast: <em>Nocardia</em> positive (weak), <em>Actinomyces</em> negative.</li>
      <li>Oxygen: <em>Nocardia</em> aerobic; <em>Actinomyces</em> anaerobic/microaerophilic.</li>
      <li>Host: <em>Actinomyces</em> immunocompetent with mucosal breach; <em>Nocardia</em> often immunocompromised.</li>
      <li>Drug: penicillin vs co-trimoxazole.</li>
    </ul>
    <p>Both require prolonged therapy and source control; relapse is common if antibiotics are stopped early.</p>
  `,
  tip: "Acid-fast and oxygen tolerance are the two rapid discriminators; penicillin vs co-trimoxazole is the treatment contrast.",
  sources: ["S1", "S2", "S4"]
}
);
