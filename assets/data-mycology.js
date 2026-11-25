window.QBANK.push(
{
  id: "mc1", domain: "mycology", star: true,
  q: "Discuss Candida albicans and non-albicans Candida as human pathogens, with particular reference to Candida auris.",
  tags: ["Candida", "C. auris", "candidaemia", "biofilm"],
  answer: `
    <h4>Organism and commensalism</h4>
    <p><em>Candida</em> species are dimorphic yeasts: they grow as budding yeasts, pseudohyphae and true hyphae. <em>C. albicans</em> colonises the oral cavity, gut and vagina. Virulence factors include <strong>adhesins</strong> (Als family), <strong>morphogenetic switching</strong> (yeast–hypha transition, regulated by Efg1 and cAMP), <strong>biofilm formation</strong>, <strong>secreted aspartyl proteases</strong>, phospholipases and <strong>phenotypic switching</strong>. Hyphae invade tissue and are associated with active disease; yeast forms favour dissemination.</p>
    <h4>Clinical spectrum</h4>
    <p>Mucocutaneous: oral thrush (especially HIV, inhaled steroids, antibiotics), oesophageal candidiasis (AIDS-defining), vulvovaginal candidiasis, balanitis, intertrigo, paronychia. Invasive: candidaemia, catheter-related infection, intra-abdominal infection, hepatosplenic candidiasis, endocarditis, meningitis and endophthalmitis. Risk factors: critical illness, broad-spectrum antibiotics, central venous catheters, parenteral nutrition, neutropenia, transplant, diabetes and corticosteroids.</p>
    <h4>Non-albicans species</h4>
    <p><em>C. glabrata</em> (now <em>Nakaseomyces glabratus</em>) is often fluconazole-resistant; <em>C. krusei</em> (<em>Pichia kudriavzevii</em>) is intrinsically fluconazole-resistant; <em>C. parapsilosis</em> is associated with catheters and neonates; <em>C. tropicalis</em> causes bloodstream infection in neutropenia; <em>C. dubliniensis</em> is common in HIV.</p>
    <h4>Candida auris</h4>
    <p>An emerging multidrug-resistant yeast first described in 2009. It is difficult to identify with conventional biochemical panels (misidentified as <em>C. haemulonii</em> or <em>Saccharomyces</em>), so <strong>MALDI-TOF, sequencing or specific PCR</strong> are needed. It colonises skin and persists on surfaces, causing <strong>outbreaks in hospitals and long-term care</strong>; it is resistant to fluconazole, often to amphotericin B and echinocandins, and can be pan-resistant. Treatment is <strong>echinocandin first-line</strong>, with liposomal amphotericin B or combination for resistant cases; strict contact precautions, screening and environmental cleaning are essential. WHO lists <em>C. auris</em> as a critical-priority fungal pathogen.</p>
    <h4>Diagnosis and treatment</h4>
    <p>Culture, MALDI-TOF, germ-tube test (C. albicans), chromogenic media, and molecular identification; blood cultures have low sensitivity, so surveillance and PCR are important. Treatment of candidaemia: echinocandin first-line (micafungin, caspofungin, anidulafungin), with step-down to fluconazole if susceptible and the patient is stable; remove central lines; ophthalmological examination. <strong>Do not treat colonisation.</strong></p>
  `,
  tip: "C. auris is about infection control as much as drugs — say identification difficulty, colonisation and resistance together.",
  sources: ["S1", "S4", "S18"]
},
{
  id: "mc2", domain: "mycology", star: true,
  q: "Describe the clinical spectrum of Aspergillus infection, the diagnostic tests, and the principles of antifungal therapy.",
  tags: ["Aspergillus", "galactomannan", "voriconazole", "azole resistance"],
  answer: `
    <h4>Organism</h4>
    <p><em>Aspergillus</em> is a ubiquitous mould with septate hyphae branching at 45°, producing conidia from conidiophores. <em>A. fumigatus</em> causes most invasive disease; <em>A. flavus</em>, <em>niger</em> and <em>terreus</em> also matter. Inhalation of conidia is universal; disease depends on host immunity and lung architecture.</p>
    <h4>Clinical syndromes</h4>
    <ul>
      <li><strong>Allergic bronchopulmonary aspergillosis (ABPA)</strong> — hypersensitivity in asthma or CF; wheeze, eosinophilia, high IgE, central bronchiectasis; treated with corticosteroids and itraconazole.</li>
      <li><strong>Aspergilloma</strong> — fungus ball in a pre-existing cavity; haemoptysis; observation or surgery.</li>
      <li><strong>Chronic pulmonary aspergillosis</strong> — progressive cavitary disease in non-immunocompromised hosts with prior TB or COPD.</li>
      <li><strong>Invasive aspergillosis</strong> — in prolonged neutropenia, transplant, high-dose steroids, critical illness and COVID-19; pulmonary nodules with halo sign, cavitation, tracheobronchitis, dissemination to brain and skin. Angioinvasion causes infarction and haemoptysis.</li>
      <li><strong>Other:</strong> otomycosis, keratitis, sinusitis, endocarditis (prosthetic valves), osteomyelitis.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p><strong>Galactomannan</strong> antigen in serum or BAL (screening in high-risk neutropenia), <strong>β-d-glucan</strong> (pan-fungal, false positives with haemodialysis, IVIG, cellulose membranes), <strong>PCR</strong>, culture and histology (septate hyphae with acute-angle branching, tissue invasion). Imaging: halo sign, air-crescent sign, cavitation. Aspergillus is not reliably distinguished from other moulds by culture alone in disseminated disease.</p>
    <h4>Treatment</h4>
    <p><strong>Voriconazole</strong> is first-line for invasive aspergillosis; <strong>isavuconazole</strong> is an alternative with fewer visual and QT effects. <strong>Liposomal amphotericin B</strong> is used for refractory or azole-resistant disease, and combination therapy is sometimes used in severe cases. <strong>Echinocandins</strong> are not reliably active against <em>Aspergillus</em> alone but may be used in combination. Surgical debridement is important for aspergilloma, sinus disease and infected devices. <strong>Azole resistance</strong> is increasing, mediated by <em>cyp51A</em> mutations (TR34/L98H) selected by agricultural fungicides; susceptibility testing is advised where available. Prevention in high-risk patients includes filtered air, avoidance of construction dust and mould exposure, and mould-active prophylaxis in selected neutropenic or transplant patients.</p>
  `,
  tip: "Galactomannan for diagnosis, voriconazole for treatment, cyp51A for resistance — three facts that carry the answer.",
  sources: ["S1", "S4", "S18"]
},
{
  id: "mc3", domain: "mycology", star: true,
  q: "Explain the pathogenesis, diagnosis and treatment of cryptococcosis, including cryptococcal meningitis and immune reconstitution inflammatory syndrome.",
  tags: ["Cryptococcus", "meningitis", "CrAg", "IRIS"],
  answer: `
    <h4>Organism</h4>
    <p><em>Cryptococcus neoformans</em> (serotypes A and D) is an encapsulated basidiomycete yeast found in soil and pigeon droppings; <em>C. gattii</em> (serotypes B/C) is associated with eucalyptus and tropical/subtropical regions and can infect immunocompetent hosts. The <strong>polysaccharide capsule</strong> (glucuronoxylomannan) is the major virulence factor: it inhibits phagocytosis, depletes complement and modulates cytokines.</p>
    <h4>Pathogenesis</h4>
    <p>Inhalation of desiccated yeast cells → pulmonary infection (often asymptomatic) → dissemination, especially to the CNS. Risk factors: HIV with CD4 <100, transplant, corticosteroids, haematological malignancy, sarcoidosis and anti-TNF therapy. The organism crosses the blood–brain barrier within macrophages and causes meningoencephalitis with minimal inflammation, so symptoms may be indolent: headache, fever, malaise, personality change, visual loss, seizures.</p>
    <h4>Diagnosis</h4>
    <p><strong>Lumbar puncture</strong> is essential: raised opening pressure, lymphocytic pleocytosis, high protein, low glucose; <strong>India ink</strong> shows encapsulated yeasts; <strong>cryptococcal antigen (CrAg)</strong> in serum and CSF is highly sensitive and specific (lateral flow assay); culture on Sabouraud agar; histology shows narrow-based budding yeasts with a halo. Fungal blood cultures are positive in disseminated disease. Screen for HIV in every case.</p>
    <h4>Treatment</h4>
    <p><strong>Induction:</strong> liposomal amphotericin B plus <strong>flucytosine</strong> for 2 weeks (the preferred regimen); where flucytosine is unavailable, amphotericin B plus fluconazole. <strong>Consolidation:</strong> fluconazole 400–800 mg/day for 8 weeks; <strong>maintenance:</strong> fluconazole 200 mg/day for at least 6–12 months, longer in HIV until immune reconstitution. <strong>Raised intracranial pressure</strong> requires repeated therapeutic lumbar punctures or a shunt — this is life-saving and often overlooked. <em>C. gattii</em> may require longer therapy and surgery for mass lesions.</p>
    <h4>IRIS</h4>
    <p>After starting ART, restored immunity can cause worsening headache, fever, lymphadenopathy and CSF inflammation — <strong>cryptococcal IRIS</strong>. Management: continue ART and antifungal therapy, prolong fluconazole, use corticosteroids for severe cases, and control intracranial pressure. Timing of ART is important: defer 4–6 weeks in cryptococcal meningitis to reduce IRIS and mortality.</p>
  `,
  tip: "Raised intracranial pressure management is the most examinable clinical point; then amphotericin plus flucytosine.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "mc4", domain: "mycology",
  q: "Compare the dimorphic fungi that cause endemic mycoses. How does the temperature-dependent switch contribute to pathogenesis?",
  tags: ["dimorphic fungi", "Histoplasma", "Coccidioides", "endemic"],
  answer: `
    <h4>The dimorphic switch</h4>
    <p>Endemic fungi grow as <strong>moulds in the environment</strong> (cool temperature) and convert to <strong>yeasts or spherules in tissue</strong> (37°C). This thermal dimorphism is a virulence trait: the yeast/spherule form resists phagocytosis and survives intracellularly, while the mould form produces infectious conidia or arthroconidia. The switch is regulated by temperature-sensing pathways (Ryp1 in <em>Histoplasma</em>, Drk1) and is coupled to cell-wall remodelling.</p>
    <h4>Histoplasma capsulatum</h4>
    <p>Found in soil enriched by bird and bat droppings (Ohio and Mississippi river valleys, Latin America, Africa). Inhalation of microconidia → yeast forms within macrophages (they neutralise phagolysosomal pH and scavenge calcium). Disease: asymptomatic or flu-like; acute pulmonary histoplasmosis; chronic cavitary disease in COPD; disseminated disease in HIV (CD4 <150), with fever, weight loss, hepatosplenomegaly, pancytopenia and mucocutaneous ulcers. Diagnosis: urine/serum <strong>histoplasma antigen</strong>, culture, histology, serology. Treatment: itraconazole for mild/moderate; <strong>liposomal amphotericin B</strong> for severe or CNS disease, then itraconazole for 12 months or longer.</p>
    <h4>Blastomyces dermatitidis</h4>
    <p>Soil in the Ohio/Mississippi valleys and Great Lakes; causes acute pulmonary infection and chronic granulomatous skin lesions (verrucous), bone and genitourinary disease. Diagnosis: culture, histology (broad-based budding yeast), antigen. Treatment: itraconazole for mild; amphotericin B for severe/CNS.</p>
    <h4>Coccidioides immitis/posadasii</h4>
    <p>Desert soil in the southwestern United States, Mexico and South America; arthroconidia inhaled → <strong>spherules</strong> containing endospores in tissue. "Valley fever": flu-like illness, erythema nodosum, pneumonia; disseminated disease in immunocompromise, pregnancy and certain ancestries (Filipino, African). Diagnosis: culture (BSL-3), spherule identification, serology (IgM/IgG), antigen. Treatment: observation for mild disease; fluconazole or itraconazole for progressive disease; amphotericin B for severe/disseminated; lifelong azole in some.</p>
    <h4>Others</h4>
    <p><em>Paracoccidioides brasiliensis</em> (Latin America; "captain's wheel" budding yeast), <em>Sporothrix schenckii</em> (rose gardener's disease; lymphocutaneous spread), <em>Talaromyces marneffei</em> (Southeast Asia, HIV; disseminated with umbilicated skin lesions).</p>
    <h4>Key point</h4>
    <p>Travel and exposure history are diagnostic; these organisms are not transmitted person-to-person. Treatment is prolonged and relapse is common if therapy is stopped early.</p>
  `,
  tip: "The mould-to-yeast switch at 37°C is the unifying virulence mechanism; then give one geographic and one clinical anchor per organism.",
  sources: ["S1", "S4", "S18"]
},
{
  id: "mc5", domain: "mycology", star: true,
  q: "Discuss mucormycosis: pathogenesis, risk factors, diagnosis and the emergency management of rhino-orbital-cerebral disease.",
  tags: ["Mucorales", "mucormycosis", "ketoacidosis", "amphotericin"],
  answer: `
    <h4>Organisms</h4>
    <p>Mucorales are ubiquitous moulds with broad, ribbon-like, <strong>non-septate (pauciseptate) hyphae</strong> branching at right angles: <em>Rhizopus</em>, <em>Mucor</em>, <em>Lichtheimia</em>, <em>Rhizomucor</em>, <em>Apophysomyces</em>. They are angioinvasive, causing thrombosis, infarction and black necrotic tissue.</p>
    <h4>Risk factors</h4>
    <p><strong>Uncontrolled diabetes with ketoacidosis</strong> is the classic setting; others include neutropenia, haematological malignancy, transplant, prolonged corticosteroids, iron overload and <strong>deferoxamine therapy</strong> (the siderophore delivers iron to the fungus), trauma/burns, and injection drug use. COVID-19-associated mucormycosis emerged during the Delta wave, especially in India, linked to steroids, diabetes and oxygen humidifier contamination.</p>
    <h4>Clinical forms</h4>
    <ul>
      <li><strong>Rhino-orbital-cerebral</strong> — facial pain, black eschar on palate or turbinates, periorbital swelling, ophthalmoplegia, vision loss, cavernous sinus thrombosis, brain infarction.</li>
      <li><strong>Pulmonary</strong> — in neutropenia; nodules, cavitation, halo sign; often mistaken for aspergillosis.</li>
      <li><strong>Cutaneous</strong> — after trauma, burns or contaminated dressings.</li>
      <li><strong>Gastrointestinal</strong> — in malnutrition and neonates.</li>
      <li><strong>Disseminated</strong> — rare, in severe immunosuppression.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>High index of suspicion; urgent <strong>biopsy</strong> with histology (broad non-septate hyphae with right-angle branching, angioinvasion) and culture; imaging (CT/MRI) defines sinus, orbital and CNS extension. <strong>PCR and MALDI-TOF</strong> improve identification. β-d-glucan is negative (unlike <em>Aspergillus</em>), which can help discriminate.</p>
    <h4>Management</h4>
    <p>This is a <strong>surgical and medical emergency</strong>:</p>
    <ul>
      <li><strong>Urgent extensive surgical debridement</strong> of necrotic tissue, often repeated; orbital exenteration may be necessary.</li>
      <li><strong>Liposomal amphotericin B</strong> at high dose is first-line; <strong>posaconazole or isavuconazole</strong> for step-down or salvage; combination therapy in severe disease.</li>
      <li><strong>Reverse the underlying condition</strong> — correct ketoacidosis, stop deferoxamine, reduce immunosuppression, control diabetes.</li>
    </ul>
    <p>Mortality remains high (30–70% in rhino-orbital-cerebral disease), and delayed surgery is the strongest predictor of death. Prevention in at-risk patients includes glycaemic control, avoiding mouldy environments and cautious steroid use.</p>
  `,
  tip: "Non-septate right-angle hyphae, ketoacidosis, and 'surgery is the drug' — those three points define mucormycosis.",
  sources: ["S1", "S4", "S18"]
},
{
  id: "mc6", domain: "mycology",
  q: "Describe the dermatophytes and other superficial fungal infections. How are they diagnosed and treated?",
  tags: ["dermatophytes", "tinea", "Malassezia", "terbinafine"],
  answer: `
    <h4>Dermatophytes</h4>
    <p>Three genera — <em>Trichophyton</em>, <em>Microsporum</em> and <em>Epidermophyton</em> — are keratinophilic moulds that invade the stratum corneum, hair and nails. They secrete <strong>keratinases</strong> and proteases, and the host response produces the characteristic annular, scaly, pruritic lesion with a clearing centre. Transmission is anthropophilic, zoophilic (pets, cattle) or geophilic (soil).</p>
    <h4>Clinical types</h4>
    <ul>
      <li><strong>Tinea capitis</strong> — scalp, especially children; patchy alopecia, scaling, black-dot or favus; <em>Microsporum canis</em> and <em>Trichophyton tonsurans</em>.</li>
      <li><strong>Tinea corporis</strong> — trunk and limbs; annular plaques; "ringworm".</li>
      <li><strong>Tinea cruris</strong> — groin; "jock itch".</li>
      <li><strong>Tinea pedis</strong> — interdigital and plantar; "athlete's foot"; may cause secondary bacterial infection.</li>
      <li><strong>Tinea manuum</strong> — often one hand, with two-feet-one-hand syndrome.</li>
      <li><strong>Tinea unguium (onychomycosis)</strong> — thickened, discoloured, crumbly nails; <em>Trichophyton rubrum</em> most common; distinguish from <em>Candida</em> and non-dermatophyte moulds.</li>
      <li><strong>Tinea incognito</strong> — atypical, steroid-modified infection.</li>
      <li><strong>Majocchi granuloma</strong> — deeper follicular invasion.</li>
    </ul>
    <h4>Other superficial mycoses</h4>
    <p><strong>Malassezia</strong> — <em>Pityriasis versicolor</em> (hypopigmented or hyperpigmented macules on the trunk; "spaghetti and meatballs" on KOH), seborrhoeic dermatitis and folliculitis. <strong>Piedra</strong> (hair shaft nodules), <strong>tinea nigra</strong> (<em>Hortaea werneckii</em>), <strong>white piedra</strong> (<em>Trichosporon</em>). <strong>Candidal intertrigo</strong>, paronychia and oral/vaginal thrush.</p>
    <h4>Diagnosis</h4>
    <p><strong>KOH microscopy</strong> of skin scrapings, hair or nail clippings shows septate branching hyphae and arthroconidia; <strong>fungal culture</strong> on Sabouraud agar identifies the species; <strong>Wood's lamp</strong> fluoresces some <em>Microsporum</em> infections; <strong>PAS staining</strong> of nail clippings; dermatophyte PCR is increasingly used.</p>
    <h4>Treatment</h4>
    <p>Topical azoles (clotrimazole, miconazole), terbinafine or amorolfine for localized skin disease. <strong>Oral terbinafine</strong> is first-line for onychomycosis and tinea capitis (or griseofulvin, especially for <em>Microsporum</em> in children); <strong>itraconazole</strong> is an alternative. Treat for adequate duration (nails 6–12 weeks or longer), confirm cure, and address predisposing factors (occlusive footwear, diabetes, immunosuppression). Malassezia responds to ketoconazole or selenium sulphide shampoo. Prevention: keep skin dry, avoid sharing combs and towels, treat pets.</p>
  `,
  tip: "KOH and culture are the diagnosis; terbinafine is the treatment anchor for nails and scalp.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "mc7", domain: "mycology", star: true,
  q: "Explain the pathogenesis, diagnosis, treatment and prevention of Pneumocystis jirovecii pneumonia.",
  tags: ["Pneumocystis", "HIV", "TMP-SMX", "prophylaxis"],
  answer: `
    <h4>Organism</h4>
    <p><em>Pneumocystis jirovecii</em> is a host-specific, obligate extracellular fungus (formerly classified as a protozoan) that colonises the alveoli. It cannot be cultured routinely. It attaches to type I pneumocytes, and the host response — rather than direct invasion — produces the characteristic <strong>foamy alveolar exudate</strong> and impaired gas exchange.</p>
    <h4>Pathogenesis and risk</h4>
    <p>Almost all cases occur with <strong>CD4 <200 cells/µL</strong>, but also in transplant, haematological malignancy, prolonged corticosteroids, anti-TNF therapy, malnutrition and premature infants. The organism binds alveolar epithelium, and CD4 T cells, macrophages and surfactant proteins are required for control. Without prophylaxis, about 70–80% of HIV patients with CD4 <200 develop PCP.</p>
    <h4>Clinical</h4>
    <p>Subacute onset of exertional dyspnoea, dry cough, fever and hypoxaemia; examination may be unremarkable. Chest imaging shows bilateral ground-glass opacities, sometimes pneumatoceles; HRCT is more sensitive. Extrapulmonary disease is rare.</p>
    <h4>Diagnosis</h4>
    <p><strong>Induced sputum</strong> or <strong>bronchoalveolar lavage</strong> with <strong>silver stain</strong> (Gomori methenamine silver) or <strong>immunofluorescence</strong> showing cysts; <strong>PCR</strong> is highly sensitive but may detect colonisation; <strong>β-d-glucan</strong> is elevated and useful as a supportive test. Lactate dehydrogenase is non-specific. Distinguish from CMV pneumonitis, tuberculosis and lymphocytic interstitial pneumonia.</p>
    <h4>Treatment</h4>
    <p><strong>Trimethoprim–sulfamethoxazole (TMP-SMX)</strong> is first-line, usually for 21 days. For moderate-to-severe disease (PaO<sub>2</sub> <70 mmHg or A–a gradient >35), add <strong>corticosteroids</strong> (prednisone 40 mg twice daily tapering) to reduce mortality. Alternatives: clindamycin plus primaquine, atovaquone, pentamidine (IV). <strong>Prophylaxis</strong> with TMP-SMX is indicated for CD4 <200, or CD4 <14%, or AIDS-defining illness; alternatives are dapsone, atovaquone or aerosolised pentamidine. Start ART within 2 weeks in HIV-associated PCP, but watch for IRIS.</p>
    <h4>Prevention</h4>
    <p>Prophylaxis, early ART, corticosteroid-sparing strategies in transplant, and screening. PCP remains a marker of late HIV diagnosis and a preventable cause of death.</p>
  `,
  tip: "CD4 <200, ground-glass opacities, silver stain, TMP-SMX plus steroids if hypoxaemic — the complete chain.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "mc8", domain: "mycology", star: true,
  q: "Classify antifungal drugs by their targets. What are the mechanisms of resistance and the limitations of current therapy?",
  tags: ["antifungals", "azoles", "echinocandins", "resistance"],
  answer: `
    <h4>Targets</h4>
    <ul>
      <li><strong>Polyenes</strong> (amphotericin B, nystatin) — bind ergosterol, form pores and cause membrane leakage; broad-spectrum, fungicidal, but nephrotoxic and infusion-related. Liposomal formulations reduce toxicity.</li>
      <li><strong>Azoles</strong> — inhibit <strong>lanosterol 14α-demethylase (Cyp51)</strong>, blocking ergosterol synthesis and causing toxic sterol accumulation. Triazoles (fluconazole, itraconazole, voriconazole, posaconazole, isavuconazole) have varying spectra; fluconazole has no mould activity. Azoles are CYP inhibitors/inducers with many drug interactions and QT effects.</li>
      <li><strong>Echinocandins</strong> (caspofungin, micafungin, anidulafungin) — inhibit <strong>β-1,3-glucan synthase (Fks1/2)</strong>, disrupting the cell wall; active against <em>Candida</em> and <em>Aspergillus</em> but not <em>Cryptococcus</em>, <em>Mucorales</em> or <em>Fusarium</em>; safe, few interactions.</li>
      <li><strong>Flucytosine</strong> — converted to 5-fluorouracil and then to inhibitors of DNA and RNA synthesis; used in combination for cryptococcosis and some candida infections; resistance emerges rapidly in monotherapy.</li>
      <li><strong>Terbinafine</strong> — inhibits squalene epoxidase; used for dermatophytes.</li>
      <li><strong>Griseofulvin</strong> — disrupts microtubules; dermatophytes only.</li>
      <li><strong>Newer agents</strong> — olorofim (dihydroorotate dehydrogenase inhibitor, moulds), fosmanogepix (Gwt1 inhibitor), ibrexafungerp (glucan synthase), rezafungin (long-acting echinocandin), opelconazole (inhaled).</li>
    </ul>
    <h4>Resistance mechanisms</h4>
    <ul>
      <li><strong>Target alteration:</strong> <em>cyp51A</em> mutations in <em>Aspergillus</em> (TR34/L98H, selected by agricultural azoles); <em>ERG11</em> mutations in <em>Candida</em>; <em>FKS1</em> hotspot mutations in <em>Candida</em> (echinocandin resistance).</li>
      <li><strong>Target overexpression</strong> and efflux pump up-regulation (CDR1/CDR2, MDR1 in <em>Candida</em>).</li>
      <li><strong>Biofilm formation</strong> and persister cells.</li>
      <li><strong>Intrinsic resistance:</strong> <em>C. krusei</em> to fluconazole, <em>C. auris</em> to multiple classes, <em>Mucorales</em> to echinocandins, <em>Cryptococcus</em> to echinocandins.</li>
    </ul>
    <h4>Limitations</h4>
    <p>Fungal cells are eukaryotes, so selective toxicity is difficult; options are few; diagnosis is often delayed; drug interactions and toxicity are common; and resistance is rising in both clinical and agricultural settings. Antifungal stewardship, therapeutic drug monitoring (voriconazole, posaconazole), source control, and combination therapy for severe disease are essential. The WHO fungal priority pathogens list highlights <em>C. auris</em>, <em>C. neoformans</em>, <em>A. fumigatus</em> and <em>Candida</em> spp. as critical priorities.</p>
  `,
  tip: "Four targets — ergosterol binding, ergosterol synthesis, glucan synthesis, nucleic acid — then map one resistance mechanism to each.",
  sources: ["S1", "S4", "S18"]
},
{
  id: "mc9", domain: "mycology",
  q: "Compare the laboratory methods for diagnosing fungal infection. What are the pitfalls of serology and antigen testing?",
  tags: ["fungal diagnostics", "galactomannan", "beta-D-glucan", "MALDI"],
  answer: `
    <h4>Direct examination</h4>
    <p><strong>KOH mounts</strong> with calcofluor white show hyphae, yeasts and spherules; <strong>Gram stain</strong> and <strong>Giemsa</strong> are useful in tissue; <strong>PAS</strong> and <strong>Gomori methenamine silver</strong> highlight fungal walls in histology. Morphology narrows the differential: septate acute-angle hyphae suggest <em>Aspergillus</em>; broad non-septate right-angle hyphae suggest Mucorales; encapsulated budding yeasts suggest <em>Cryptococcus</em>; spherules with endospores suggest <em>Coccidioides</em>. However, species cannot be reliably identified by morphology alone.</p>
    <h4>Culture and identification</h4>
    <p>Sabouraud dextrose agar, inhibitory mould agar and chromogenic media; incubation at 25–30°C and 37°C; dimorphism is demonstrated by temperature conversion. <strong>MALDI-TOF</strong> and <strong>sequencing (ITS, 28S)</strong> provide definitive identification. Culture sensitivity is limited (blood cultures are insensitive for moulds), and some organisms require BSL-3.</p>
    <h4>Antigen and biomarker tests</h4>
    <ul>
      <li><strong>Galactomannan</strong> (serum/BAL) — <em>Aspergillus</em>; sensitivity varies with host and site; false positives with piperacillin–tazobactam (historically), amoxicillin–clavulanate, IVIG, haemodialysis, cellulose membranes and cross-reacting fungi.</li>
      <li><strong>β-d-glucan</strong> — pan-fungal (not Mucorales or <em>Cryptococcus</em>); false positives with haemodialysis, IVIG, albumin, surgical gauze, bacterial sepsis; good negative predictive value.</li>
      <li><strong>Cryptococcal antigen</strong> — excellent sensitivity/specificity in serum and CSF; can be falsely negative in very high antigen loads (prozone) or very early disease.</li>
      <li><strong>Histoplasma/Blastomyces antigen</strong> — urine and serum; cross-reactivity between endemic fungi; useful for monitoring.</li>
      <li><strong>Aspergillus PCR</strong> — sensitive but not standardised across laboratories.</li>
    </ul>
    <h4>Serology</h4>
    <p>Antibody tests are useful for endemic mycoses, <em>Aspergillus</em> (ABPA, chronic pulmonary aspergillosis) and dermatophytes, but not for acute invasive disease in immunocompromised patients, who may not mount a response. Serology cannot distinguish past from current infection and cross-reacts.</p>
    <h4>Molecular and other methods</h4>
    <p>Pan-fungal and species-specific PCR, <strong>metagenomic next-generation sequencing</strong>, and MALDI-TOF directly from positive cultures. Susceptibility testing (CLSI/EUCAST) is important for <em>Candida</em>, <em>Aspergillus</em> and <em>Cryptococcus</em>, especially after prior azole exposure.</p>
    <h4>Pitfall</h4>
    <p>No single test is definitive: interpret biomarkers in the clinical context, repeat testing, and combine microscopy, culture, histology and molecular methods. A negative test does not exclude invasive fungal disease in a high-risk host.</p>
  `,
  tip: "For each biomarker, give one false-positive cause — that is what distinguishes a good answer from a list.",
  sources: ["S4", "S12", "S18"]
}
);
