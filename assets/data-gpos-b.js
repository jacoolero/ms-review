/* Microbiology — Gram-positive bacteria, part B (gp13–gp30) */
window.QBANK.push(
{
  id: "gp13", domain: "gpos",
  q: "Discuss Staphylococcus saprophyticus and coagulase-negative staphylococci as causes of urinary tract infection, including how colonisation is distinguished from infection.",
  tags: ["S. saprophyticus", "coagulase-negative staphylococci", "cystitis", "catheter"],
  keypoints: ["novobiocin resistant", "young sexually active women", "uncomplicated cystitis", "uroepithelial adhesins", "pyuria", "catheter colonisation", "repeated isolation", "nitrofurantoin", "trimethoprim-sulfamethoxazole", "remove the catheter", "asymptomatic bacteriuria"],
  answer: `
    <h4>The organism</h4>
    <p><em>Staphylococcus saprophyticus</em> is a <strong>coagulase-negative</strong>, catalase-positive Gram-positive coccus in clusters. It is <strong>novobiocin resistant</strong>, the single most useful phenotypic marker that separates it from <em>S. epidermidis</em> and other coagulase-negative staphylococci (CoNS). It is a skin and mucosal commensal and an important cause of <strong>acute uncomplicated cystitis in young, sexually active women</strong>, second only to <em>Escherichia coli</em> in that group. Unlike most CoNS, it is a primary urinary pathogen rather than an opportunist of foreign material.</p>
    <h4>Virulence and clinical picture</h4>
    <p>Surface <strong>adhesins</strong> mediate attachment to uroepithelium and resist washing out with urine. Patients present with <strong>dysuria, frequency, urgency and suprapubic discomfort</strong>; haematuria occurs, while pyelonephritis and systemic symptoms are uncommon. Infection clusters in sexually active young women and may recur.</p>
    <h4>CoNS urinary infection in practice</h4>
    <p>In hospitalised patients, CoNS in urine usually reflect <strong>catheter colonisation</strong> or contamination. Distinguish colonisation from infection using:</p>
    <ul>
      <li>pyuria and compatible clinical symptoms;</li>
      <li>repeated isolation of the same organism;</li>
      <li>a urinary catheter or recent instrumentation;</li>
      <li>absence of a more convincing pathogen.</li>
    </ul>
    <p>Catheter-associated CoNS urinary infection is often polymicrobial and resolves with catheter change or removal plus targeted therapy.</p>
    <h4>Diagnosis and treatment</h4>
    <p>Culture with a colony count appropriate to the specimen, together with a novobiocin disk, identifies <em>S. saprophyticus</em>. Susceptibility testing matters because resistance to trimethoprim–sulfamethoxazole and fluoroquinolones is increasing. Uncomplicated cystitis is usually treated with <strong>nitrofurantoin, trimethoprim–sulfamethoxazole or fosfomycin</strong>, chosen by susceptibility and local resistance; fluoroquinolones are reserved for pyelonephritis or treatment failure. Remove or exchange an infected catheter, because biofilm on the device will otherwise cause relapse. Do not treat asymptomatic bacteriuria except in pregnancy or before urological surgery.</p>
  `,
  tip: "Novobiocin resistance is the one-line identification; the examiner also wants the word 'colonisation' for catheter CoNS.",
  sources: ["S1", "S2", "S9"]
},
{
  id: "gp14", domain: "gpos", star: true,
  q: "Describe group B streptococcal infection: colonisation, neonatal disease, adult disease, and prevention.",
  tags: ["group B streptococcus", "S. agalactiae", "neonatal sepsis", "intrapartum prophylaxis"],
  keypoints: ["Lancefield group B", "CAMP positive", "hippurate positive", "bacitracin resistant", "polysaccharide capsule", "early-onset disease", "late-onset disease", "meningitis", "rectovaginal screening", "intrapartum penicillin", "clindamycin inducible resistance", "adult bacteraemia"],
  answer: `
    <h4>Organism and colonisation</h4>
    <p><em>Streptococcus agalactiae</em> is the <strong>Lancefield group B</strong> β-haemolytic streptococcus. It is <strong>bacitracin resistant</strong>, <strong>CAMP positive</strong> and <strong>hippurate positive</strong>, features that separate it from group A streptococci. Its <strong>polysaccharide capsule</strong> resists phagocytosis, and surface proteins mediate epithelial adherence. It colonises the vagina and rectum asymptomatically in a substantial minority of pregnant women; colonisation may be intermittent, so culture is timed close to delivery.</p>
    <h4>Neonatal disease</h4>
    <p><strong>Early-onset disease</strong> presents in the first week, usually within the first two days, as pneumonia, sepsis or meningitis acquired vertically during labour. Risk is increased by:</p>
    <ul>
      <li>preterm delivery;</li>
      <li>prolonged rupture of membranes;</li>
      <li>maternal fever;</li>
      <li>heavy colonisation.</li>
    </ul>
    <p><strong>Late-onset disease</strong> occurs from one week to three months, usually as meningitis, and is often serotype III; the source may be the household or the hospital. Survivors of meningitis risk neurodevelopmental impairment and hearing loss.</p>
    <h4>Adult disease</h4>
    <p>In non-pregnant adults, GBS causes bacteraemia, skin and soft-tissue infection, diabetic foot infection, pneumonia, endometritis, chorioamnionitis and endocarditis. Older age, diabetes, malignancy and immunosuppression are the main risk factors, and invasive disease in adults has been increasing.</p>
    <h4>Diagnosis, prevention and treatment</h4>
    <p>Culture of sterile sites with Lancefield grouping or MALDI-TOF confirms the organism; antenatal rectovaginal screening identifies colonised women. <strong>Intrapartum antibiotic prophylaxis</strong> with penicillin, or ampicillin or cefazolin as alternatives, is given to colonised women and to those with risk factors. Clindamycin is used only when susceptibility is confirmed, because inducible resistance is common; severe penicillin allergy requires vancomycin. Neonatal sepsis is treated with penicillin or ampicillin plus gentamicin, and meningitis requires longer therapy. GBS endocarditis is treated with high-dose penicillin, often with gentamicin for synergy, and valve surgery when indicated.</p>
  `,
  tip: "Separate early-onset from late-onset disease by timing and presentation — that contrast carries most of the marks.",
  sources: ["S1", "S2", "S10"]
},
{
  id: "gp15", domain: "gpos",
  q: "Compare the clinical significance of groups C and G streptococci with group A streptococci, and outline their laboratory identification and treatment.",
  tags: ["groups C and G", "S. dysgalactiae", "bacitracin", "bacteraemia"],
  keypoints: ["beta-haemolytic", "Lancefield group C or G", "S. dysgalactiae equisimilis", "bacitracin resistant", "PYR negative", "M protein", "cellulitis", "bacteraemia in the elderly", "endocarditis", "penicillin", "zoonotic S. zooepidemicus", "S. canis"],
  answer: `
    <h4>The organisms</h4>
    <p>Groups C and G streptococci are <strong>β-haemolytic</strong> and carry Lancefield group C or G antigen. The main human pathogen is <strong><em>Streptococcus dysgalactiae</em> subsp. <em>equisimilis</em></strong>, a large-colony organism that resembles group A streptococcus but is <strong>bacitracin resistant</strong> and <strong>PYR negative</strong>. <em>S. equi</em> subsp. <em>zooepidemicus</em> and <em>S. canis</em> are zoonotic, acquired from horses and dogs respectively.</p>
    <h4>Virulence and clinical syndromes</h4>
    <p>Like group A streptococci, they express <strong>M protein</strong>, streptolysin O and S, hyaluronidase and DNases, allowing immune evasion and tissue spread. Clinical disease includes:</p>
    <ul>
      <li><strong>pharyngitis</strong>, sometimes in food- or milk-borne outbreaks;</li>
      <li><strong>cellulitis, erysipelas and wound infection</strong>, especially in older or diabetic patients;</li>
      <li><strong>bacteraemia</strong>, which is often primary in the elderly or immunocompromised;</li>
      <li><strong>endocarditis</strong>, septic arthritis and osteomyelitis;</li>
      <li>puerperal sepsis and, rarely, a toxic shock-like illness.</li>
    </ul>
    <p>Post-streptococcal glomerulonephritis is uncommon but reported after group C infection; acute rheumatic fever is not a recognised sequel.</p>
    <h4>Diagnosis</h4>
    <p>Culture and Lancefield grouping establish the diagnosis; bacitracin resistance and PYR negativity distinguish these organisms from <em>S. pyogenes</em>, and MALDI-TOF gives a rapid species-level answer. Blood cultures are essential in invasive disease, and echocardiography is indicated when bacteraemia is unexplained or a murmur is present. Antistreptolysin O titres may rise, but serology is retrospective and not diagnostic on its own.</p>
    <h4>Treatment</h4>
    <p>Penicillin remains the drug of choice and resistance is rare. Cellulitis responds to penicillin or a first-generation cephalosporin; deep infection requires drainage and debridement. Endocarditis is treated like viridans streptococcal endocarditis with high-dose penicillin or ceftriaxone, optionally combined with gentamicin for the first part of therapy, and surgery for valve destruction. Clarify the source in bacteraemia, because a skin, gastrointestinal or genital focus often explains it. Animal exposure should prompt advice on hygiene.</p>
  `,
  tip: "Bacitracin resistance plus PYR negativity is the lab discriminator; penicillin remains fully active.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gp16", domain: "gpos",
  q: "Discuss Bacillus cereus as a cause of food poisoning and invasive disease, including its toxins and the laboratory distinction from Bacillus anthracis.",
  tags: ["Bacillus cereus", "cereulide", "food poisoning", "endophthalmitis"],
  keypoints: ["spore-forming", "motile", "beta-haemolytic", "penicillin resistant", "cereulide", "heat-stable emetic toxin", "reheated rice", "diarrhoeal enterotoxin", "neutropenic bacteraemia", "keratitis", "vancomycin", "vitrectomy"],
  answer: `
    <h4>Organism</h4>
    <p><em>Bacillus cereus</em> is a large, <strong>spore-forming</strong>, <strong>motile</strong>, Gram-positive rod that is <strong>β-haemolytic</strong>, lecithinase positive and resistant to penicillin. Spores survive cooking and germinate when food is cooled slowly or held warm. Unlike <em>B. anthracis</em> it is motile, haemolytic and has no capsule, which is the practical distinction in the laboratory.</p>
    <h4>Food poisoning</h4>
    <p>Two syndromes are recognised:</p>
    <ul>
      <li><strong>Emetic</strong> — preformed <strong>cereulide</strong>, a heat-stable cyclic peptide, in reheated rice and pasta; vomiting within a few hours and a short self-limited course.</li>
      <li><strong>Diarrhoeal</strong> — heat-labile enterotoxins formed in the small intestine after ingestion of meat, vegetables or sauces; watery diarrhoea and cramps after roughly 8–16 hours.</li>
    </ul>
    <p>Diagnosis is usually clinical; quantitative culture of the implicated food and toxin detection are public health tools.</p>
    <h4>Invasive infection</h4>
    <p>In neutropenic patients, people who inject drugs and catheter carriers, <em>B. cereus</em> causes bacteraemia, often with a fulminant course and pulmonary or central nervous system involvement. It also causes <strong>keratitis and endophthalmitis</strong> after ocular trauma or contact-lens wear — a rapidly destructive infection requiring same-day ophthalmology review — and wound infection, pneumonia and osteomyelitis. Blood isolates must not be dismissed as contaminants in a neutropenic or device-bearing patient.</p>
    <h4>Management and prevention</h4>
    <p>Food poisoning needs only supportive care. Invasive disease is treated with <strong>vancomycin or clindamycin</strong>, with ciprofloxacin as an alternative, guided by susceptibility; remove an infected catheter. Ocular infection requires intravitreal vancomycin plus ceftazidime and often vitrectomy. Prevention depends on rapid cooling, refrigeration and thorough reheating of cooked rice, and on hand hygiene in food handlers.</p>
  `,
  tip: "Cereulide is preformed and heat stable; the diarrhoeal toxin is made in the gut — that single contrast answers the toxin question.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gp17", domain: "gpos",
  q: "Explain the role of Cutibacterium acnes in acne vulgaris and in device-related infection, and discuss the diagnostic and therapeutic implications of its slow growth.",
  tags: ["Cutibacterium acnes", "acne", "prosthetic joint infection", "anaerobic culture"],
  keypoints: ["anaerobic diphtheroid", "lipophilic", "lipase", "biofilm", "TLR2", "shoulder arthroplasty", "spinal hardware", "14 days anaerobic culture", "sonication", "implant removal", "penicillin", "tetracyclines"],
  answer: `
    <h4>The organism</h4>
    <p><em>Cutibacterium acnes</em> (formerly <em>Propionibacterium acnes</em>) is a slow-growing, <strong>anaerobic to aerotolerant</strong>, lipophilic Gram-positive rod with a diphtheroid morphology. It is the dominant commensal of sebaceous follicles and survives in anaerobic pockets deep within the pilosebaceous unit and in biofilm on implanted material.</p>
    <h4>Acne vulgaris</h4>
    <p>Colonisation alone does not cause acne; the organism contributes through <strong>lipase</strong> activity that releases free fatty acids, <strong>biofilm</strong> formation and activation of innate immunity via TLR2, producing inflammatory papules, pustules and nodules. Treatment targets follicular hyperkeratosis, sebum and the organism: topical benzoyl peroxide and retinoids, with oral tetracyclines for moderate disease. Antibiotic monotherapy selects resistance, so benzoyl peroxide is combined and courses are time-limited.</p>
    <h4>Device and postoperative infection</h4>
    <p><em>C. acnes</em> is a leading cause of <strong>indolent prosthetic joint infection</strong>, particularly after:</p>
    <ul>
      <li>shoulder arthroplasty;</li>
      <li>spinal instrumentation.</li>
    </ul>
    <p>It also infects cerebrospinal fluid shunts, cardiac devices and breast implants. Presentation is delayed and subtle: pain, loosening or a small effusion rather than fever. Because growth is slow, laboratories must hold anaerobic cultures for up to <strong>14 days</strong>; multiple periprosthetic tissue samples, sonication of the explanted implant and histology increase yield. A single positive blood culture is usually skin contamination.</p>
    <h4>Treatment</h4>
    <p>Most isolates are susceptible to penicillin, amoxicillin, clindamycin and tetracyclines. Established device infection requires <strong>removal of the implant</strong> with debridement, followed by targeted therapy; rifampicin-containing combinations are used when hardware is retained. Vancomycin is not the drug of choice for <em>Cutibacterium</em> infection, so β-lactams should be used when susceptibility allows. Preoperative chlorhexidine skin preparation and careful surgical technique reduce contamination of shoulder and spine wounds.</p>
  `,
  tip: "Say '14 days anaerobic culture' and 'implant removal' — they show you understand why this infection is missed.",
  sources: ["S1", "S12", "S9"]
},
{
  id: "gp18", domain: "gpos",
  q: "Describe Erysipelothrix rhusiopathiae: its microbiology, occupational acquisition, clinical forms and treatment, including its intrinsic antibiotic resistance.",
  tags: ["Erysipelothrix", "erysipeloid", "zoonosis", "vancomycin resistance"],
  keypoints: ["pleomorphic Gram-positive rod", "H2S positive TSI", "non-motile", "catalase negative", "swine erysipelas", "erysipeloid", "occupational exposure", "endocarditis", "intrinsically vancomycin resistant", "penicillin", "gloves"],
  answer: `
    <h4>The organism</h4>
    <p><em>Erysipelothrix rhusiopathiae</em> is a <strong>non-spore-forming, non-motile, pleomorphic Gram-positive rod</strong> that is catalase negative and microaerophilic. On triple sugar iron agar it produces <strong>hydrogen sulphide</strong>, a useful identifying feature. It is a zoonotic pathogen of pigs (swine erysipelas), fish, shellfish and poultry, and is acquired by occupational contact with animals, carcasses or contaminated water — butchers, farmers, fishermen and veterinarians are at risk.</p>
    <h4>Clinical forms</h4>
    <ul>
      <li><strong>Erysipeloid</strong> — the commonest form: a painful, violaceous, sharply demarcated plaque on the hand or finger after a minor abrasion, with burning and itching but little systemic upset. It spreads peripherally and may blister.</li>
      <li><strong>Diffuse cutaneous</strong> — lesions remote from the inoculation site.</li>
      <li><strong>Bacteraemia and endocarditis</strong> — uncommon but destructive, often affecting the aortic valve and sometimes a previously normal valve; mortality is appreciable.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>Diagnosis is often clinical, supported by occupation and exposure. Culture of a skin biopsy, blood or valve tissue is definitive; the organism grows slowly and may be mistaken for a diphtheroid contaminant. It is <strong>intrinsically resistant to vancomycin</strong>, so vancomycin therapy for presumed Gram-positive cellulitis will fail. Molecular testing and MALDI-TOF shorten identification.</p>
    <h4>Treatment and prevention</h4>
    <p><strong>Penicillin</strong> or amoxicillin is the drug of choice; cephalosporins, fluoroquinolones and clindamycin are alternatives for penicillin allergy. Erysipeloid usually responds to oral therapy, while endocarditis requires high-dose intravenous penicillin, sometimes with gentamicin, and valve surgery when there is destruction or heart failure. Prevention is by gloves and protective clothing, covering skin wounds, and veterinary control of swine erysipelas; a human vaccine is not available.</p>
  `,
  tip: "The mark-earning fact is intrinsic vancomycin resistance — it changes empiric therapy for a hand infection.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "gp19", domain: "gpos",
  q: "Discuss Rhodococcus equi as an opportunistic pathogen, with emphasis on its intracellular lifestyle, the hosts at risk and the principles of treatment.",
  tags: ["Rhodococcus equi", "cavitary pneumonia", "HIV", "weakly acid-fast"],
  keypoints: ["weakly acid-fast", "pleomorphic rod", "salmon-pink colonies", "Vap proteins", "intracellular macrophage", "horse manure", "cavitary pneumonia", "advanced HIV", "brain abscess", "vancomycin plus rifampicin", "prolonged combination therapy"],
  answer: `
    <h4>The organism</h4>
    <p><em>Rhodococcus equi</em> is a <strong>weakly acid-fast, pleomorphic Gram-positive rod</strong> that grows as salmon-pink, mucoid colonies. It is a facultative intracellular pathogen that survives within macrophages, and virulence is linked to a plasmid encoding <strong>Vap proteins</strong>, which allow replication in the phagosome. It is a well-known cause of pneumonia in foals and is acquired from horse manure and contaminated soil.</p>
    <h4>Disease in humans</h4>
    <p>Human infection is uncommon and strongly associated with <strong>advanced HIV disease, transplantation and corticosteroid therapy</strong>. The manifestations are:</p>
    <ul>
      <li><strong>cavitary pneumonia</strong>, often upper-lobe, with fever, cough, weight loss and pleuritic pain;</li>
      <li><strong>bacteraemia</strong>, which may seed the brain and cause abscesses, or involve skin and bone;</li>
      <li><strong>wound infection</strong> after soil contamination.</li>
    </ul>
    <p>In an immunocompromised patient with cavitary pneumonia and animal exposure, <em>Rhodococcus</em> belongs on the differential alongside <em>Nocardia</em>, mycobacteria and fungi.</p>
    <h4>Diagnosis</h4>
    <p>Sputum, bronchoalveolar lavage fluid, blood and abscess material should be cultured; the laboratory must be told to look for a <em>Rhodococcus</em>-like organism and to hold cultures. Modified acid-fast staining, colony morphology and MALDI-TOF or sequencing confirm the identification. Imaging defines cavitation and central nervous system spread, and biopsy may be needed when cultures are negative.</p>
    <h4>Treatment</h4>
    <p>Treatment is <strong>prolonged combination therapy</strong> chosen by susceptibility, typically vancomycin with rifampicin plus a carbapenem or fluoroquinolone; rifampicin is important because of intracellular penetration. Drainage or excision of abscesses is often required, and restoration of immunity with antiretroviral therapy is central in HIV. Relapse is common if therapy is shortened, so follow-up imaging and prolonged courses are needed. Prevention relies on avoiding horse manure and soil exposure in severely immunocompromised people.</p>
  `,
  tip: "Weakly acid-fast plus horse exposure plus cavitary pneumonia equals Rhodococcus until proven otherwise.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "gp20", domain: "gpos",
  q: "Discuss the non-diphtheria corynebacteria as human pathogens, giving examples of species, their clinical syndromes and their treatment.",
  tags: ["Corynebacterium", "C. jeikeium", "C. urealyticum", "diphtheroids"],
  keypoints: ["club-shaped Gram-positive rods", "Chinese letters", "catalase positive", "C. jeikeium", "multidrug resistant", "C. striatum", "C. urealyticum", "encrusted cystitis", "C. minutissimum", "erythrasma", "vancomycin", "device removal"],
  answer: `
    <h4>The group</h4>
    <p>"Diphtheroids" are <strong>club-shaped, non-spore-forming, non-motile Gram-positive rods</strong> arranged in Chinese-letter patterns; they are catalase positive and grow well on blood agar. The group includes <em>Corynebacterium striatum</em>, <em>C. jeikeium</em>, <em>C. urealyticum</em>, <em>C. amycolatum</em>, <em>C. minutissimum</em> and <em>C. pseudodiphtheriticum</em>. They are normal skin and mucosal commensals, so a single positive culture often represents contamination; repeated isolation with a compatible device or clinical focus is what matters. Because they are ubiquitous on skin, culture interpretation depends on specimen quality and repeated isolation, and a wound swab growing mixed flora including diphtheroids is rarely meaningful.</p>
    <h4>Clinically important species</h4>
    <ul>
      <li><strong><em>C. jeikeium</em></strong> — lipophilic and multidrug resistant; causes bacteraemia, endocarditis and device infection in neutropenic and intensive-care patients. Vancomycin, linezolid or daptomycin are usually active.</li>
      <li><strong><em>C. striatum</em></strong> — pneumonia, bacteraemia and prosthetic device infection, often in chronic lung disease.</li>
      <li><strong><em>C. urealyticum</em></strong> — strongly urease positive; splits urea, alkalinises urine and causes <strong>encrusted cystitis</strong> and struvite stones.</li>
      <li><strong><em>C. minutissimum</em></strong> — <strong>erythrasma</strong>, a brown scaly intertriginous patch that fluoresces coral red under a Wood lamp.</li>
      <li><strong><em>C. amycolatum</em></strong> — frequently multidrug resistant and easily misidentified.</li>
    </ul>
    <h4>Diagnosis and treatment</h4>
    <p>Identify with MALDI-TOF or sequencing and perform susceptibility testing, because resistance patterns are species-specific and unpredictable. If <em>C. diphtheriae</em> is possible, request toxigenicity testing. Treatment is guided by susceptibility: penicillin or another β-lactam for susceptible isolates, vancomycin or linezolid for <em>C. jeikeium</em>, and removal of an infected device. <em>C. striatum</em> is often resistant to penicillin and macrolides, so susceptibility-guided therapy matters. Erythrasma responds to topical or oral erythromycin or clindamycin. Do not treat a single diphtheroid blood culture without clinical correlation.</p>
  `,
  tip: "Link each species to one syndrome — jeikeium to lines and neutropenia, urealyticum to alkaline urine and stones.",
  sources: ["S1", "S2", "S12"]
},
{
  id: "gp21", domain: "gpos", star: true,
  q: "Explain the pathogenesis, recognition and emergency management of streptococcal toxic shock syndrome.",
  tags: ["STSS", "superantigen", "group A streptococcus", "clindamycin"],
  keypoints: ["invasive group A streptococcus", "superantigen", "SpeA SpeB SpeC", "MHC class II", "hypotension", "multi-organ failure", "pain out of proportion", "urgent debridement", "penicillin plus clindamycin", "IVIG", "Eagle effect"],
  answer: `
    <h4>Definition and mechanism</h4>
    <p><strong>Streptococcal toxic shock syndrome (STSS)</strong> is invasive group A streptococcal infection complicated by <strong>shock and multi-organ failure</strong>. It is driven by <strong>superantigens</strong> — streptococcal pyrogenic exotoxins A, B and C — that cross-link MHC class II and the T-cell receptor outside the antigen groove, producing massive polyclonal cytokine release. M protein and streptolysin O add tissue injury and immune evasion. A portal of entry is often found in skin, soft tissue, the female genital tract or a recent surgical wound.</p>
    <h4>Clinical features</h4>
    <p>A flu-like prodrome with fever, myalgia, nausea and diarrhoea is followed by <strong>hypotension</strong> and rapidly progressive organ dysfunction. Pain may be far out of proportion to physical signs, and an apparently minor cellulitis can progress to necrotising fasciitis within hours. Features include:</p>
    <ul>
      <li>acute kidney injury and hepatitis;</li>
      <li>coagulopathy and thrombocytopenia;</li>
      <li>acute respiratory distress syndrome;</li>
      <li>erythematous rash, soft-tissue necrosis and desquamation.</li>
    </ul>
    <p>The case definition requires hypotension plus involvement of at least two organ systems in a patient with group A streptococcal infection.</p>
    <h4>Management</h4>
    <p>This is a <strong>surgical and critical-care emergency</strong>. Secure the airway, resuscitate, and obtain urgent surgical exploration with debridement of all necrotic tissue; repeated debridement is often needed. Give <strong>penicillin plus clindamycin</strong>: penicillin kills dividing organisms, while clindamycin suppresses toxin synthesis, is unaffected by the Eagle effect and penetrates tissue well. <strong>Intravenous immunoglobulin</strong> is used adjunctively to neutralise superantigens, although trial evidence is not definitive. Supportive care includes vasopressors, organ support and source control. Household contacts should be advised to seek care for febrile illness, and chemoprophylaxis is considered in selected high-risk contacts.</p>
  `,
  tip: "The triad is superantigen, surgery and clindamycin; mention the Eagle effect to explain why penicillin alone fails.",
  sources: ["S1", "S4", "S20"]
},
{
  id: "gp22", domain: "gpos", star: true,
  q: "Discuss the classification, diagnosis and management of necrotising fasciitis, emphasising why it is a surgical emergency.",
  tags: ["necrotising fasciitis", "group A streptococcus", "debridement", "Fournier gangrene"],
  keypoints: ["type I polymicrobial", "type II group A streptococcus", "pain out of proportion", "crepitus", "bullae", "surgical exploration", "LRINEC not definitive", "urgent debridement", "clindamycin", "IVIG", "delay increases mortality"],
  answer: `
    <h4>Definition and types</h4>
    <p>Necrotising fasciitis is a rapidly progressive <strong>necrosis of the fascia and subcutaneous tissue</strong> with sparing of skin early in the course. <strong>Type I</strong> is polymicrobial, mixing aerobes and anaerobes, and occurs in:</p>
    <ul>
      <li>diabetes and vascular disease;</li>
      <li>obesity;</li>
      <li>after abdominal or perineal surgery (Fournier gangrene);</li>
      <li>immunosuppression.</li>
    </ul>
    <p><strong>Type II</strong> is monomicrobial, usually group A streptococcus, sometimes <em>S. aureus</em> including MRSA. Gram-positive cocci dominate both types, although Gram-negative organisms and anaerobes contribute to type I.</p>
    <h4>Pathogenesis and clinical clues</h4>
    <p>Organisms spread along fascial planes and thrombose perforating vessels, so the skin looks less involved than the underlying tissue. <strong>Pain out of proportion</strong> to findings, rapid spread, swelling, erythema, bullae, crepitus, skin anaesthesia and systemic toxicity are the classic clues. Fever and hypotension may be late. A low threshold for surgical exploration is more important than any score; the LRINEC score supports but does not exclude the diagnosis, and imaging must not delay surgery.</p>
    <h4>Diagnosis</h4>
    <p>Diagnosis is confirmed at <strong>surgical exploration</strong>, where fascia separates easily from muscle and is necrotic. Send tissue for Gram stain, culture and histology, and send blood cultures. Distinguish cellulitis, which responds to antibiotics, from necrotising infection: in cellulitis the fascia is healthy and the patient improves quickly.</p>
    <h4>Management</h4>
    <p><strong>Immediate, wide surgical debridement</strong> is the single most important intervention, repeated daily until the wound is clean. Start broad-spectrum antibiotics covering Gram-positive cocci, Gram-negative bacilli and anaerobes — for example a carbapenem or piperacillin–tazobactam plus vancomycin or linezolid — and add <strong>clindamycin</strong> to suppress streptococcal toxin. Intravenous immunoglobulin is used in streptococcal disease. Provide fluids, vasopressors, nutrition, wound care and later reconstruction. Delay in surgery is the main determinant of death.</p>
  `,
  tip: "Never let imaging delay the theatre: the diagnosis is made at surgical exploration, not on CT.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "gp23", domain: "gpos",
  q: "A blood culture grows a Gram-positive organism. Outline a systematic approach to interpreting the result and to initial management.",
  tags: ["bacteraemia", "blood culture", "contaminant", "source control"],
  keypoints: ["Gram stain morphology", "number of positive sets", "time to positivity", "coagulase-negative staphylococci contaminant", "S. aureus always significant", "repeat cultures", "echocardiography", "device removal", "source control", "viridans streptococci", "enterococcus"],
  answer: `
    <h4>Read the Gram stain</h4>
    <p>The morphology on the Gram stain narrows the differential before identification:</p>
    <div class="table-wrap"><table>
      <tr><th>Morphology</th><th>Likely organisms</th></tr>
      <tr><td>Cocci in clusters</td><td><em>Staphylococcus</em> — <em>S. aureus</em>, coagulase-negative staphylococci</td></tr>
      <tr><td>Cocci in pairs or chains</td><td><em>Streptococcus</em>, <em>Enterococcus</em></td></tr>
      <tr><td>Large rods</td><td><em>Bacillus</em>, <em>Clostridium</em>, <em>Listeria</em></td></tr>
      <tr><td>Pleomorphic or club-shaped rods</td><td><em>Corynebacterium</em>, <em>Cutibacterium</em>, <em>Erysipelothrix</em>, <em>Rhodococcus</em></td></tr>
    </table></div>
    <h4>Contaminant or true bacteraemia?</h4>
    <p>Consider the number of positive sets and bottles, the time to positivity, the organism and the clinical context. Coagulase-negative staphylococci, <em>Cutibacterium</em>, corynebacteria and <em>Bacillus</em> are common skin contaminants, but they are also real pathogens in the presence of a device, neutropenia or multiple positive cultures. <em>S. aureus</em>, β-haemolytic streptococci, pneumococci and enterococci in blood are almost always significant.</p>
    <h4>Initial evaluation and management</h4>
    <ul>
      <li>Repeat blood cultures before antibiotics if the patient is stable, and identify a source — skin, urine, biliary, intra-abdominal or device.</li>
      <li><strong><em>S. aureus</em></strong>: echocardiography, source control and prolonged therapy; remove an infected line.</li>
      <li><strong>Coagulase-negative staphylococci</strong>: remove the catheter; treat if multiple cultures, device infection or symptoms.</li>
      <li><strong>Enterococcus</strong>: look for urinary, biliary or intra-abdominal sources and consider endocarditis.</li>
      <li><strong>Viridans streptococci</strong>: exclude endocarditis and investigate the colon if <em>S. gallolyticus</em>.</li>
      <li><strong><em>Bacillus</em></strong> in a person who injects drugs or is neutropenic: treat as pathogenic and remove the line.</li>
    </ul>
    <p>Empiric therapy follows the likely organism and focus, then narrows on susceptibility. Duration is determined by the focus: uncomplicated catheter-related bacteraemia may need only a short course after line removal, whereas endocarditis requires weeks of therapy. Involve infectious diseases and microbiology early, and do not treat a contaminant for weeks.</p>
  `,
  tip: "Structure the answer as organism, probability of true infection, then source and focus — not as a drug list.",
  sources: ["S2", "S4", "S12"]
},
{
  id: "gp24", domain: "gpos", star: true,
  q: "Discuss the principles of diagnosis and management of infective endocarditis, including the organisms, the Duke criteria and the indications for surgery.",
  tags: ["infective endocarditis", "Duke criteria", "echocardiography", "valve surgery"],
  keypoints: ["bacteraemia", "vegetation", "S. aureus", "viridans streptococci", "enterococci", "prosthetic valve", "modified Duke criteria", "three blood culture sets", "transoesophageal echocardiography", "prolonged bactericidal therapy", "heart failure", "prophylaxis"],
  answer: `
    <h4>Pathogenesis and causative organisms</h4>
    <p>Infective endocarditis begins with <strong>bacteraemia</strong> and adhesion of organisms to damaged endothelium or prosthetic material, forming a platelet–fibrin <strong>vegetation</strong> that shields bacteria from phagocytes and antibiotics. <strong><em>S. aureus</em></strong> causes acute destructive disease, including right-sided infection in people who inject drugs. <strong>Viridans streptococci</strong> cause subacute disease after dental or oral bacteraemia. <strong>Enterococci</strong> affect older patients after urinary or biliary instrumentation, and <strong>coagulase-negative staphylococci</strong> cause indolent prosthetic valve infection. Prosthetic valve endocarditis within a year of surgery is usually healthcare-associated.</p>
    <h4>Diagnosis</h4>
    <p>The modified <strong>Duke criteria</strong> combine:</p>
    <ul>
      <li>positive blood cultures with a typical organism, or persistently positive cultures;</li>
      <li>evidence of endocardial involvement on echocardiography — vegetation, abscess or new dehiscence;</li>
      <li>minor criteria such as predisposing valve disease, fever, and vascular or immunological phenomena.</li>
    </ul>
    <p>Take at least three blood culture sets before antibiotics, and perform transthoracic then transoesophageal echocardiography when suspicion remains.</p>
    <h4>Treatment principles</h4>
    <p>Use <strong>prolonged intravenous bactericidal therapy</strong>, usually four to six weeks, with agents chosen for the organism and whether the valve is native or prosthetic. Empiric therapy before identification depends on acuity and valve status, so discuss it with infectious diseases. Add gentamicin only for specific synergy indications, and avoid it in staphylococcal endocarditis because of renal toxicity.</p>
    <h4>Surgery and prevention</h4>
    <p>Urgent surgery is indicated for heart failure from valve destruction, uncontrolled infection, large vegetations at risk of embolism, and prosthetic valve dehiscence. Antibiotic prophylaxis is reserved for high-risk patients undergoing high-risk dental procedures, not for routine gastrointestinal or genitourinary procedures. Source control and early specialist input improve outcome.</p>
  `,
  tip: "Anchor the answer on Duke, three culture sets, TEE and the four surgical indications.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "gp25", domain: "gpos",
  q: "Classify skin and soft-tissue infections, explain how the likely organism is predicted, and outline management including the red flags for necrotising infection.",
  tags: ["cellulitis", "abscess", "MRSA", "soft-tissue infection"],
  keypoints: ["purulent versus non-purulent", "S. aureus", "group A streptococcus", "incision and drainage", "MRSA coverage", "beta-lactam for cellulitis", "pain out of proportion", "crepitus", "surgical review", "tinea pedis", "decolonisation"],
  answer: `
    <h4>Classification</h4>
    <p>Skin and soft-tissue infections are grouped by the presence of pus and by depth:</p>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Examples</th><th>Main organisms</th></tr>
      <tr><td>Purulent</td><td>Abscess, furuncle, carbuncle</td><td><em>S. aureus</em>, including MRSA</td></tr>
      <tr><td>Non-purulent</td><td>Cellulitis, erysipelas</td><td>β-haemolytic streptococci, mainly group A</td></tr>
      <tr><td>Superficial</td><td>Impetigo, ecthyma</td><td><em>S. aureus</em>, group A streptococcus</td></tr>
      <tr><td>Necrotising</td><td>Necrotising fasciitis, myonecrosis</td><td>Group A streptococcus, mixed anaerobes</td></tr>
    </table></div>
    <h4>Diagnosis</h4>
    <p>Diagnosis is usually clinical. Erysipelas involves the superficial dermis with a sharply demarcated, raised border, whereas cellulitis involves deeper dermis and subcutaneous fat and has less distinct margins. Culture is valuable for purulent drainage, severe or recurrent infection, immunocompromise, animal or water exposure, and suspected MRSA. Blood cultures are reserved for systemic illness. Imaging is used when a deep abscess, foreign body or osteomyelitis is suspected, not for uncomplicated cellulitis.</p>
    <h4>Management</h4>
    <p><strong>Incision and drainage is the primary treatment for an abscess</strong>; antibiotics are added for systemic signs, extensive cellulitis, immunocompromise or poor response. Purulent infection should be covered for MRSA — trimethoprim–sulfamethoxazole, doxycycline or clindamycin — while non-purulent cellulitis is treated with a β-lactam active against streptococci, such as penicillin or cephalexin. Elevate the limb, treat tinea pedis and oedema, and mark the margin to monitor progression. Review at 48–72 hours; failure to improve suggests a deeper collection, a resistant organism or an alternative diagnosis.</p>
    <h4>Red flags</h4>
    <p>Pain out of proportion, rapid spread, bullae, crepitus, skin anaesthesia or hypotension demand <strong>urgent surgical review</strong> for necrotising infection. Recurrent MRSA skin infection warrants decolonisation and attention to household transmission. Avoid antibiotics for simple colonisation or minor abrasions.</p>
  `,
  tip: "Purulent versus non-purulent is the branch point that determines whether you cover MRSA.",
  sources: ["S1", "S9", "S10"]
},
{
  id: "gp26", domain: "gpos",
  q: "Discuss the pathogenesis, diagnosis and treatment of osteomyelitis, including the diabetic foot and the role of bone biopsy.",
  tags: ["osteomyelitis", "bone biopsy", "MRI", "diabetic foot"],
  keypoints: ["haematogenous", "contiguous spread", "S. aureus", "biofilm", "sequestrum", "involucrum", "MRI most sensitive", "bone biopsy reference standard", "prolonged antibiotics", "debridement", "offloading", "Salmonella in sickle cell"],
  answer: `
    <h4>Routes of infection</h4>
    <p>Osteomyelitis is classified by route:</p>
    <ul>
      <li><strong>Haematogenous</strong> — metaphyses of long bones in children, vertebral bodies in adults; risk factors include bacteraemia, injection drug use and sickle cell disease.</li>
      <li><strong>Contiguous</strong> — spread from an adjacent wound, ulcer or infected prosthesis, as in the diabetic foot.</li>
      <li><strong>Vascular insufficiency</strong> — poor perfusion impairs healing and antibiotic delivery.</li>
    </ul>
    <p><strong><em>S. aureus</em></strong> is the commonest cause. Coagulase-negative staphylococci follow surgery or hardware, <em>Salmonella</em> is typical in sickle cell disease, <em>Pseudomonas</em> follows puncture wounds or injection drug use, and diabetic foot infection is usually polymicrobial.</p>
    <h4>Pathogenesis</h4>
    <p>Bacteria adhere to bone matrix and form <strong>biofilm</strong>, producing chronic inflammation, bone necrosis (<strong>sequestrum</strong>) and reactive new bone (<strong>involucrum</strong>). Poor vascularity limits antibiotic penetration, which is why prolonged therapy and surgical debridement are often both required.</p>
    <h4>Diagnosis</h4>
    <p><strong>MRI</strong> is the most sensitive imaging test; plain radiographs lag behind and may be normal early. Vertebral osteomyelitis often presents with back pain and fever, and an epidural abscess is a neurological emergency. <strong>Bone biopsy for culture and histology</strong> is the reference standard and should be obtained before antibiotics when feasible, because superficial swabs mislead. Blood cultures are positive in haematogenous disease. CRP and ESR are useful for monitoring, not for diagnosis.</p>
    <h4>Treatment</h4>
    <p>Give <strong>prolonged organism-directed antibiotics</strong>, usually several weeks, with duration and route determined by the extent of bone involvement and surgery. <strong>Surgical debridement</strong> removes necrotic bone and biofilm; infected hardware usually requires removal or exchange. Diabetic foot osteomyelitis additionally needs offloading, wound care, vascular assessment and revascularisation when ischaemic. A multidisciplinary team improves limb salvage.</p>
  `,
  tip: "MRI for diagnosis, bone biopsy for the organism, debridement plus weeks of therapy for cure.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "gp27", domain: "gpos",
  q: "Explain the rationale, method and limitations of MRSA decolonisation, and identify the patients who benefit most.",
  tags: ["MRSA", "decolonisation", "mupirocin", "chlorhexidine"],
  keypoints: ["nasal carriage", "surgical site infection", "mupirocin", "chlorhexidine bathing", "screening", "cardiac and orthopaedic surgery", "intensive care", "mupirocin resistance", "qacA/B", "re-colonisation", "not treatment for invasive infection"],
  answer: `
    <h4>Rationale</h4>
    <p><em>S. aureus</em> colonises the nares, throat, axillae and perineum, and nasal carriage is a major risk factor for subsequent invasive infection and surgical site infection. <strong>MRSA decolonisation</strong> aims to reduce this reservoir before high-risk procedures and to interrupt transmission in outbreaks. It is a prevention measure, not a treatment for established invasive infection.</p>
    <h4>The bundle</h4>
    <ul>
      <li><strong>Mupirocin</strong> nasal ointment, applied to both nares for several days — the cornerstone of nasal decolonisation.</li>
      <li><strong>Chlorhexidine gluconate</strong> bathing or washing, including the skin folds, for the same period.</li>
      <li>Hand hygiene, environmental cleaning and, during outbreaks, <strong>contact precautions</strong>.</li>
      <li>Screening of high-risk patients — nares, throat, perineum and wounds — to identify carriers.</li>
      <li>Re-screening after decolonisation when the stakes are high, such as before orthopaedic implant surgery.</li>
    </ul>
    <h4>Who benefits</h4>
    <p>Evidence supports decolonisation before <strong>cardiac and orthopaedic implant surgery</strong>, in intensive care, in dialysis and in patients with recurrent MRSA skin infection. Screen patients with prior MRSA, recent hospitalisation, dialysis or long-term care residence. Universal decolonisation of intensive-care patients with chlorhexidine bathing plus nasal mupirocin reduces bacteraemia and has been widely adopted; targeted decolonisation is used where MRSA prevalence is lower.</p>
    <h4>Limitations</h4>
    <p><strong>Mupirocin resistance</strong> (low-level and high-level, via <em>ileS</em> mutations) and <strong>chlorhexidine tolerance</strong> (<em>qacA/B</em> genes) are increasing. Adherence is often incomplete, and re-colonisation from household contacts or the environment is common. Decolonisation does not replace source control, antimicrobial stewardship or device care. Do not apply mupirocin to wounds or continue it indefinitely. Document the regimen, the dates and the follow-up screen, and avoid repeated courses that select resistance.</p>
  `,
  tip: "Call it a prevention bundle, not therapy, and name mupirocin resistance as the main limitation.",
  sources: ["S4", "S9", "S22"]
},
{
  id: "gp28", domain: "gpos",
  q: "Explain why Gram-positive organisms dominate infection in neutropenic patients and outline the assessment and empiric management of neutropenic fever.",
  tags: ["neutropenic fever", "viridans streptococci", "CoNS", "empiric therapy"],
  keypoints: ["mucositis", "central venous catheter", "coagulase-negative staphylococci", "viridans streptococci", "VRE", "Corynebacterium jeikeium", "anti-pseudomonal beta-lactam", "vancomycin indications", "linezolid", "catheter removal", "avoid rectal procedures"],
  answer: `
    <h4>Why Gram-positive infections dominate</h4>
    <p>In neutropenic patients, <strong>mucositis</strong>, central venous catheters and prolonged antibiotic exposure shift the microbial spectrum toward Gram-positive organisms. Fluoroquinolone prophylaxis further selects streptococci and enterococci. Profound and prolonged neutropenia, mucosal barrier injury and uncontrolled cancer increase risk. The common pathogens are:</p>
    <ul>
      <li><strong>coagulase-negative staphylococci</strong> — catheter-related bacteraemia;</li>
      <li><strong>viridans streptococci</strong> — oral mucositis, sometimes with shock and respiratory distress;</li>
      <li><strong><em>S. aureus</em></strong>, including MRSA;</li>
      <li><strong>enterococci</strong>, including VRE;</li>
      <li><strong><em>Corynebacterium jeikeium</em></strong>, <em>Bacillus</em> species and <em>Listeria</em> in selected hosts.</li>
    </ul>
    <p>Gram-positive rods such as <em>Bacillus</em> and <em>Corynebacterium</em> are easily dismissed as contaminants but can cause true bacteraemia in this population.</p>
    <h4>Assessment</h4>
    <p>Fever may be the only sign because inflammation is blunted. Examine the mouth, skin, perianal area and catheter site, and obtain blood cultures from a peripheral vein and each catheter lumen, plus cultures of any focus. Avoid rectal temperatures and rectal procedures. Imaging is guided by symptoms.</p>
    <h4>Empiric therapy</h4>
    <p>Start an <strong>anti-pseudomonal β-lactam</strong> promptly — cefepime, piperacillin–tazobactam or a carbapenem. Add <strong>vancomycin</strong> when there is suspected catheter infection, known MRSA colonisation, severe sepsis, pneumonia or skin infection; stop it early if cultures do not support it. For VRE, linezolid or daptomycin are options. Remove an infected central line when catheter-related infection is documented, especially with <em>S. aureus</em>, <em>Pseudomonas</em> or <em>Candida</em>. Reassess daily and de-escalate when cultures are negative.</p>
    <h4>Prevention</h4>
    <p>Hand hygiene, oral care, catheter bundles and judicious antibiotic use reduce infection. Colony-stimulating factors are reserved for selected high-risk regimens, and prophylaxis is tailored to local resistance patterns.</p>
  `,
  tip: "Start with the anti-pseudomonal β-lactam, then justify vancomycin by specific indications rather than habit.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "gp29", domain: "gpos",
  q: "Discuss penicillin allergy in relation to Gram-positive infection: reaction types, cross-reactivity with other β-lactams, and how to choose an alternative agent.",
  tags: ["penicillin allergy", "cephalosporin cross-reactivity", "delabelling", "stewardship"],
  keypoints: ["IgE-mediated immediate reaction", "delayed maculopapular rash", "SJS TEN DRESS", "penicillin skin testing", "oral challenge", "side-chain cross-reactivity", "cefazolin", "carbapenem cross-reactivity low", "vancomycin", "mislabelled allergy", "documentation"],
  answer: `
    <h4>Why the label matters</h4>
    <p>Most patients labelled penicillin-allergic are not. The allergenic determinants are degradation products such as the penicilloyl moiety, not the intact drug. The label drives use of broader agents such as vancomycin, increases cost and resistance, and worsens outcomes in serious Gram-positive infection. Accurate evaluation and <strong>delabelling</strong> are core antimicrobial stewardship tasks.</p>
    <h4>Reaction types</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Timing and features</th></tr>
      <tr><td>Immediate IgE-mediated</td><td>Minutes to hours; urticaria, angioedema, bronchospasm, anaphylaxis</td></tr>
      <tr><td>Delayed benign</td><td>Days; maculopapular exanthem, often during a viral illness</td></tr>
      <tr><td>Severe delayed</td><td>SJS/TEN, DRESS, AGEP, severe exfoliative dermatitis</td></tr>
    </table></div>
    <h4>Assessment and cross-reactivity</h4>
    <p>Take a structured history of the drug, timing, symptoms, severity and treatment. <strong>Penicillin skin testing</strong> with major and minor determinants, followed by an oral challenge, safely excludes IgE-mediated allergy in most patients. Cross-reactivity with <strong>cephalosporins</strong> depends mainly on side-chain similarity and is low for most agents; carbapenems can usually be used, and aztreonam is safe except after ceftazidime reactions. Severe delayed reactions require avoidance and specialist advice, not testing. A severe reaction should be documented with the specific drug and syndrome.</p>
    <h4>Choosing an agent for Gram-positive infection</h4>
    <p>If the reaction is mild or remote, a <strong>cephalosporin such as cefazolin</strong> is often appropriate, with observation. Most patients with a benign rash can safely receive a β-lactam after evaluation. For proven IgE-mediated penicillin allergy, use vancomycin, daptomycin, linezolid or clindamycin according to susceptibility and site. Avoid routine vancomycin merely because of a vague childhood rash; evaluate instead. Document the reaction and the outcome clearly so the label is not perpetuated, especially before orthopaedic or cardiac implant surgery.</p>
  `,
  tip: "Most 'penicillin allergy' is not allergy — say skin testing, challenge and delabelling before listing alternatives.",
  sources: ["S4", "S9", "S10"]
},
{
  id: "gp30", domain: "gpos", star: true,
  q: "Compare the major antibiotic classes used against Gram-positive bacteria, their targets, their roles and the resistance mechanisms that defeat them.",
  tags: ["antibiotic classes", "PBP2a", "vanA", "linezolid"],
  keypoints: ["beta-lactams inhibit PBP", "glycopeptides bind D-Ala-D-Ala", "daptomycin membrane depolarisation", "linezolid 50S", "clindamycin 50S", "tetracyclines 30S", "rifampicin RNA polymerase", "PBP2a", "vanA D-Ala-D-Lac", "erm methylation", "mprF", "source control"],
  answer: `
    <h4>Cell-wall agents</h4>
    <p><strong>β-lactams</strong> — penicillins, cephalosporins and carbapenems — acylate penicillin-binding proteins and block peptidoglycan cross-linking. They are bactericidal and remain the backbone for susceptible Gram-positive infection: flucloxacillin or cefazolin for MSSA, penicillin for streptococci, ampicillin for enterococci and <em>Listeria</em>, and ceftaroline for MRSA because it binds PBP2a. <strong>Glycopeptides</strong> (vancomycin, teicoplanin) bind d-Ala-d-Ala and are reserved for MRSA, susceptible enterococcal infection and severe β-lactam allergy. <strong>Fosfomycin</strong> inhibits MurA early in cell-wall synthesis. <strong>Mupirocin</strong> inhibits isoleucyl-tRNA synthetase and is used topically for staphylococcal decolonisation.</p>
    <h4>Membrane and ribosomal agents</h4>
    <ul>
      <li><strong>Daptomycin</strong> — lipopeptide that depolarises the membrane; bactericidal, but inactivated by lung surfactant, so not for pneumonia.</li>
      <li><strong>Linezolid</strong> — oxazolidinone binding the 50S subunit; excellent for MRSA and VRE pneumonia, but causes thrombocytopenia and serotonin toxicity.</li>
      <li><strong>Clindamycin</strong> — 50S inhibitor with an antitoxin effect in streptococcal disease; check for inducible resistance.</li>
      <li><strong>Tetracyclines and tigecycline</strong> — 30S inhibitors; tigecycline is not used for bacteraemia.</li>
      <li><strong>Quinupristin–dalfopristin</strong> — streptogramin for <em>E. faecium</em>, not <em>E. faecalis</em>.</li>
    </ul>
    <h4>Other targets and resistance</h4>
    <p><strong>Rifampicin</strong> inhibits RNA polymerase and penetrates biofilm, so it is added to retained-implant therapy but never used alone. <strong>Trimethoprim–sulfamethoxazole</strong> blocks folate synthesis and treats <em>Nocardia</em> and MRSA skin infection. Nitrofurantoin and fosfomycin are reserved for uncomplicated urinary infection because of poor tissue penetration. Resistance mechanisms mirror these targets: PBP2a, <em>vanA</em>-mediated d-Ala-d-Lac, <em>erm</em> methylation, <em>cfr</em> and 23S rRNA mutations for linezolid, and <em>mprF</em> changes for daptomycin. Choose by organism, site, need for bactericidal activity and toxicity; bactericidal activity matters most in endocarditis and neutropenia, where host defences are weak.</p>
  `,
  tip: "Pair each class with its target and one resistance mechanism — that structure answers the whole question.",
  sources: ["S1", "S8", "S9"]
}
);
