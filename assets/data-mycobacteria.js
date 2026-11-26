window.QBANK.push(
{
  id: "my1", domain: "mycobacteria", star: true,
  q: "Describe the pathogenesis of tuberculosis from inhalation of droplet nuclei to cavitary disease. What determines whether infection becomes latent or progressive?",
  tags: ["TB", "granuloma", "latency", "pathogenesis"],
  answer: `
    <h4>Transmission and initial infection</h4>
    <p><em>Mycobacterium tuberculosis</em> is an acid-fast, slow-growing bacillus with a lipid-rich cell wall (mycolic acids, cord factor/trehalose dimycolate, lipoarabinomannan, ESAT-6). It is transmitted in <strong>droplet nuclei of 1–5 µm</strong>, which reach the alveoli. Bacilli are phagocytosed by alveolar macrophages via mannose and complement receptors but block phagosome–lysosome fusion and resist reactive oxygen and nitrogen species, replicating intracellularly.</p>
    <h4>Primary infection and granuloma</h4>
    <p>Dendritic cells carry bacilli to draining lymph nodes, priming <strong>Th1</strong> responses (IL-12 → IFN-γ → macrophage activation). IFN-γ and TNF drive formation of the <strong>granuloma</strong>: a central caseous necrotic core surrounded by epithelioid macrophages, Langhans giant cells, lymphocytes and a fibrous rim. The granuloma contains but does not eradicate infection; bacilli persist in a dormant, non-replicating state. In 90% of immunocompetent people, this is <strong>latent TB infection (LTBI)</strong> — no symptoms, no transmission, positive IGRA or tuberculin skin test.</p>
    <h4>Progression and reactivation</h4>
    <p>About 5–10% of infected people develop disease, half within 2 years of infection (primary progressive) and the rest by later <strong>reactivation</strong> when immunity wanes — HIV, anti-TNF biologics, corticosteroids, transplant, malnutrition, diabetes, silicosis, smoking, alcohol. Reactivation typically occurs in the <strong>apical posterior segments</strong> where oxygen tension is high. Cavitation releases bacilli into the airways, enabling transmission; the cavity wall is maintained by TNF, which is why TNF blockade causes reactivation.</p>
    <h4>Clinical and pathological spectrum</h4>
    <p>Pulmonary disease: fever, night sweats, weight loss, chronic cough, haemoptysis. Extrapulmonary: pleural effusion, lymphadenitis, meningitis, pericarditis, Pott disease, miliary TB (haematogenous dissemination), and immune reconstitution inflammatory syndrome (IRIS) after ART. <strong>Post-primary cavitary disease</strong> is the most infectious form.</p>
    <h4>Determinants</h4>
    <p>Bacterial load and strain lineage (Beijing), host genetics (IFN-γ/IL-12 pathway, HLA), HIV and other immunosuppression, malnutrition, diabetes, silicosis, and social determinants — crowding, poverty, incarceration. These factors explain why LTBI is a reservoir of millions and why screening and preventive therapy matter.</p>
  `,
  tip: "Trace one pathway: droplet nucleus → alveolar macrophage → lymph node → Th1 → granuloma → latency or cavitation.",
  sources: ["S1", "S4", "S6"]
},
{
  id: "my2", domain: "mycobacteria", star: true,
  q: "Compare the laboratory methods for diagnosing tuberculosis, including microscopy, culture, molecular tests, and host-response assays. What are their strengths and limitations?",
  tags: ["TB diagnosis", "Xpert", "IGRA", "culture"],
  answer: `
    <h4>Microscopy</h4>
    <p><strong>Ziehl–Neelsen</strong> and <strong>auramine–rhodamine fluorescence</strong> detect acid-fast bacilli in sputum. They are rapid and inexpensive but require roughly 10<sup>4</sup> bacilli/mL, so sensitivity in smear-negative and paediatric disease is poor, and they cannot distinguish <em>M. tuberculosis</em> from non-tuberculous mycobacteria or <em>Nocardia</em>.</p>
    <h4>Culture</h4>
    <p><strong>Liquid culture</strong> (MGIT) is the reference standard, with sensitivity around 80–90% and results in 1–3 weeks; <strong>solid Löwenstein–Jensen</strong> is slower (4–8 weeks) but inexpensive. Culture provides isolates for <strong>phenotypic drug-susceptibility testing</strong> and genotyping. Contamination and biosafety requirements (BSL-3) limit availability.</p>
    <h4>Molecular tests</h4>
    <ul>
      <li><strong>Xpert MTB/RIF Ultra</strong> — cartridge PCR detecting <em>M. tuberculosis</em> complex and <em>rpoB</em> mutations (rifampicin resistance) in about 2 hours; WHO-recommended as the initial test in most settings, including smear-negative and paediatric samples and CSF. It does not replace culture for full susceptibility testing.</li>
      <li><strong>Truenat</strong> — similar cartridge platform for decentralized use.</li>
      <li><strong>Line probe assays</strong> — detect resistance to rifampicin, isoniazid, fluoroquinolones and injectable agents from smear-positive sputum or cultures.</li>
      <li><strong>Whole-genome sequencing</strong> — the most comprehensive resistance prediction and outbreak tracking; increasingly used in high-income settings.</li>
      <li><strong>Lipoarabinomannan (LF-LAM) urine test</strong> — low sensitivity overall but useful in HIV with CD4 <100 and disseminated disease.</li>
    </ul>
    <h4>Host-response tests</h4>
    <p><strong>IGRA</strong> (QuantiFERON, T-SPOT) and the <strong>tuberculin skin test</strong> detect prior sensitisation, not active disease; they cannot distinguish LTBI from active TB and are confounded by BCG (TST) and immunosuppression (false negatives). They are used for LTBI screening, contact tracing and pre-biologic assessment.</p>
    <h4>Practical algorithm</h4>
    <p>In a patient with suspected pulmonary TB: sputum Xpert Ultra first, with culture and DST in parallel; add chest imaging, HIV testing and, for extrapulmonary disease, site-specific sampling (CSF, pleural fluid, lymph node aspirate, urine). No single test rules out TB — <strong>a negative test in a compatible host does not exclude disease</strong>, and empirical treatment may be justified.</p>
  `,
  tip: "State the sensitivity limitation of smear microscopy and the fact that Xpert gives rifampicin resistance, not full DST.",
  sources: ["S6", "S10", "S12"]
},
{
  id: "my3", domain: "mycobacteria", star: true,
  q: "Outline the standard treatment of drug-susceptible pulmonary tuberculosis. Explain the rationale for each phase and the principles of adherence and monitoring.",
  tags: ["TB treatment", "RIPE", "DOTS", "adherence"],
  answer: `
    <h4>Standard regimen</h4>
    <p>WHO recommends <strong>2HRZE/4HR</strong>: two months of isoniazid (H), rifampicin (R), pyrazinamide (Z) and ethambutol (E), followed by four months of isoniazid and rifampicin, for drug-susceptible pulmonary TB. A <strong>4-month regimen</strong> (isoniazid, rifapentine, moxifloxacin, pyrazinamide for 8 weeks then isoniazid, rifapentine, moxifloxacin for 9 weeks) is an option for selected patients ≥12 years with non-cavitary, smear-negative or drug-susceptible disease. TB meningitis and bone disease require longer therapy (9–12 months) and steroids in meningitis.</p>
    <h4>Rationale for each drug</h4>
    <ul>
      <li><strong>Isoniazid</strong> — prodrug activated by KatG; inhibits mycolic acid synthesis (InhA); bactericidal against actively replicating bacilli; hepatotoxic, peripheral neuropathy (give pyridoxine).</li>
      <li><strong>Rifampicin</strong> — inhibits RNA polymerase (rpoB); kills persistent and intracellular bacilli; potent CYP3A4 inducer (drug interactions with ART, warfarin, oral contraceptives); orange secretions.</li>
      <li><strong>Pyrazinamide</strong> — prodrug activated by pyrazinamidase; active in acidic pH within macrophages and caseum; sterilising activity that shortens therapy; hepatotoxic and hyperuricaemia.</li>
      <li><strong>Ethambutol</strong> — inhibits arabinosyl transferase (embB), impairing cell-wall arabinogalactan; bacteriostatic; optic neuritis (colour vision and acuity monitoring).</li>
    </ul>
    <h4>Principles</h4>
    <p>Use <strong>multiple drugs</strong> to prevent selection of resistance; ensure <strong>adherence</strong> (directly observed therapy or video-supported therapy, fixed-dose combinations, patient support); give <strong>pyridoxine</strong> with isoniazid; monitor liver function, vision and uric acid; and perform <strong>drug-susceptibility testing</strong> at baseline in high-resistance settings. Sputum should be re-tested at 2 months (to guide continuation) and at the end of treatment.</p>
    <h4>Special situations</h4>
    <p>Pregnancy: HRZE is safe; avoid streptomycin. HIV: start ART within 2–8 weeks, watch for IRIS and drug interactions (rifampicin and dolutegravir — increase dolutegravir to 50 mg twice daily or use rifabutin). Renal failure: adjust ethambutol and pyrazinamide. Hepatic disease: avoid pyrazinamide and use a non-hepatotoxic regimen. Treatment completion with clinical and microbiological cure is the goal; default is the main driver of resistance.</p>
  `,
  tip: "Explain why pyrazinamide is retained despite weak early killing — its sterilising effect in acid caseum is what shortens therapy.",
  sources: ["S6", "S9", "S10"]
},
{
  id: "my4", domain: "mycobacteria", star: true,
  q: "Define multidrug-resistant, pre-extensively drug-resistant and extensively drug-resistant TB. Discuss the treatment of rifampicin-resistant TB.",
  tags: ["MDR-TB", "XDR-TB", "BPaLM", "bedaquiline"],
  answer: `
    <h4>Definitions (WHO 2021)</h4>
    <ul>
      <li><strong>Rifampicin-resistant TB (RR-TB)</strong>: resistance to rifampicin, with or without resistance to other drugs; treated as MDR-TB.</li>
      <li><strong>Multidrug-resistant TB (MDR-TB)</strong>: resistance to both isoniazid and rifampicin.</li>
      <li><strong>Pre-XDR TB</strong>: MDR/RR-TB plus resistance to any fluoroquinolone.</li>
      <li><strong>XDR TB</strong>: MDR/RR-TB plus resistance to a fluoroquinolone <strong>and</strong> at least one of bedaquiline or linezolid (Group A drugs).</li>
    </ul>
    <p>These definitions replaced the older "XDR = MDR plus fluoroquinolone plus injectable" definition and reflect the shift to all-oral regimens.</p>
    <h4>Drug groups</h4>
    <p>WHO groups: <strong>Group A</strong> — levofloxacin/moxifloxacin, bedaquiline, linezolid (include all three unless contraindicated); <strong>Group B</strong> — clofazimine, cycloserine/terizidone (add to complete a regimen of at least four effective drugs); <strong>Group C</strong> — ethambutol, delamanid, pyrazinamide, imipenem–cilastatin/meropenem, amikacin/streptomycin, ethionamide/prothionamide, p-aminosalicylic acid.</p>
    <h4>Treatment</h4>
    <p>The 2022 WHO rapid communication and subsequent guidance recommend the <strong>6-month BPaLM regimen</strong> — bedaquiline, pretomanid, linezolid and moxifloxacin — for MDR/RR-TB. <strong>BPaL</strong> (without moxifloxacin) is an option for MDR/RR-TB with fluoroquinolone resistance (pre-XDR) when bedaquiline and linezolid susceptibility is confirmed; XDR-TB requires individualised regimens. These replace longer 18–20-month regimens in many settings. Advantages: shorter, all-oral, higher adherence and better outcomes. Toxicities require monitoring: <strong>bedaquiline</strong> (QT prolongation, hepatotoxicity), <strong>linezolid</strong> (myelosuppression, peripheral and optic neuropathy, serotonin syndrome), <strong>pretomanid</strong> (hepatotoxicity, reproductive toxicity), <strong>moxifloxacin</strong> (QT, tendinopathy).</p>
    <h4>Principles</h4>
    <p>Base the regimen on <strong>rapid molecular and phenotypic DST</strong>; ensure at least four effective drugs in longer regimens; use <strong>patient-centred adherence support</strong>; monitor ECG, full blood count, liver and renal function, and vision; and provide infection control and contact tracing. Outcomes remain suboptimal — global treatment success for MDR/RR-TB is around 70% — and only about two in five people with drug-resistant TB access treatment. New drugs (delamanid, pretomanid, sutezolid) and regimens are expanding options, but access, cost and resistance monitoring are the rate-limiting steps.</p>
  `,
  tip: "Give the 2021 XDR definition precisely — it is a favourite discriminator, and the old injectable-based definition is now wrong.",
  sources: ["S6", "S9", "S11"]
},
{
  id: "my5", domain: "mycobacteria", star: true,
  q: "Discuss the interaction between HIV and tuberculosis, including diagnosis, treatment sequencing, drug interactions and immune reconstitution inflammatory syndrome.",
  tags: ["TB-HIV", "IRIS", "ART", "screening"],
  answer: `
    <h4>Epidemiology and pathogenesis</h4>
    <p>HIV is the strongest risk factor for progression from latent TB to active disease (roughly 12–20 times). CD4 depletion impairs the Th1/IFN-γ axis, granuloma integrity and macrophage killing, producing atypical presentations: smear-negative and disseminated disease, extrapulmonary and miliary TB, and lower cavitation. TB also accelerates HIV replication and mortality. TB remains the leading cause of death in people with HIV.</p>
    <h4>Diagnosis</h4>
    <p>Screen all people with HIV for TB symptoms and offer <strong>Xpert MTB/RIF Ultra</strong>; use <strong>urine LF-LAM</strong> in advanced HIV (CD4 <100 or seriously ill) and <strong>culture</strong> where available. Extrapulmonary sampling (lymph node, pleural, CSF, bone marrow) is often needed. IGRA/TST cannot distinguish latent from active disease. All patients with TB should be tested for HIV, and all with HIV should be screened for TB at every visit.</p>
    <h4>Treatment sequencing</h4>
    <p>Start <strong>TB treatment first</strong>, then ART within <strong>2–8 weeks</strong> (sooner, within 2 weeks, if CD4 <50 or severe illness), because early ART reduces mortality. For TB meningitis, ART is often deferred 2–4 weeks to reduce IRIS. Use a <strong>dolutegravir-based regimen</strong> (with dose adjustment for rifampicin) or efavirenz; avoid protease inhibitors with rifampicin unless ritonavir-boosted and rifabutin is used. Co-trimoxazole prophylaxis and pyridoxine are standard. Watch for overlapping toxicities (hepatitis, neuropathy, QT prolongation).</p>
    <h4>IRIS</h4>
    <p><strong>Paradoxical IRIS</strong> occurs when restored immunity intensifies inflammation at a known TB site — worsening fever, lymphadenopathy, pulmonary infiltrates or new effusions, typically 2–12 weeks after ART. <strong>Unmasking IRIS</strong> reveals previously subclinical TB. Diagnosis is clinical and requires exclusion of treatment failure, drug resistance and other infections. Management: continue TB treatment and ART; use <strong>NSAIDs or corticosteroids</strong> for severe disease; drain large collections. Do not stop ART.</p>
    <h4>Prevention</h4>
    <p><strong>Isoniazid preventive therapy</strong> (or 3HP/4R regimens) for people with HIV without active TB, TB screening at every visit, infection control, and early ART for all.</p>
  `,
  tip: "The two clock questions: when to start ART (2–8 weeks, earlier if CD4 <50) and how to recognise paradoxical IRIS.",
  sources: ["S6", "S11", "S16"]
},
{
  id: "my6", domain: "mycobacteria",
  q: "Evaluate BCG and newer tuberculosis vaccines. Why has vaccine development been so difficult, and what is the role of preventive therapy for latent infection?",
  tags: ["BCG", "vaccines", "LTBI", "3HP"],
  answer: `
    <h4>BCG</h4>
    <p><em>Mycobacterium bovis</em> bacillus Calmette–Guérin is a live attenuated vaccine derived by serial passage. It is given intradermally at birth in endemic settings and protects infants and young children against <strong>disseminated and meningeal TB</strong> (efficacy roughly 70–80% for these severe forms) but has variable and generally poor efficacy against adult pulmonary TB (0–80% across trials). It also interferes with tuberculin skin testing. Contraindications: severe immunodeficiency, including symptomatic HIV with low CD4 and SCID; it can cause BCGosis.</p>
    <h4>Why vaccine development is hard</h4>
    <ul>
      <li><strong>No validated correlate of protection</strong> — IFN-γ responses do not predict efficacy.</li>
      <li><strong>Immune evasion and latency</strong> — the organism hides in granulomas and alters antigen presentation.</li>
      <li><strong>Heterogeneous disease and populations</strong> — trials need huge sample sizes and long follow-up.</li>
      <li><strong>BCG priming and environmental mycobacteria</strong> may mask or modulate new vaccine responses.</li>
      <li><strong>Animal models</strong> do not reliably predict human protection.</li>
    </ul>
    <h4>Newer candidates</h4>
    <p><strong>M72/AS01E</strong> (adjuvanted fusion protein) showed about 50% protection against progression to active TB in a phase 2b trial and is in phase 3. <strong>BCG revaccination</strong> is being evaluated in adolescents. <strong>VPM1002</strong> (recombinant BCG), <strong>MTBVAC</strong> (attenuated <em>M. tuberculosis</em>), <strong>H56:IC31</strong>, <strong>ID93/GLA-SE</strong> and viral-vectored boosters (MVA85A, ChAdOx1) are in trials. The strategy is increasingly <strong>heterologous prime–boost</strong> — BCG at birth followed by a subunit or vectored booster.</p>
    <h4>Preventive therapy</h4>
    <p>LTBI treatment is the most effective current tool: <strong>3HP</strong> (isoniazid plus rifapentine weekly for 12 weeks), <strong>4R</strong> (rifampicin daily for 4 months), <strong>3HR</strong>, or 6–9 months of isoniazid. It reduces progression by 60–90%. Target groups: household contacts, people with HIV, silicosis, transplant and biologic candidates, and recent converters. Exclude active TB first, and monitor for hepatotoxicity.</p>
  `,
  tip: "BCG protects against disseminated childhood TB, not adult pulmonary disease — say this explicitly before discussing new candidates.",
  sources: ["S6", "S9", "S11"]
},
{
  id: "my7", domain: "mycobacteria", star: true,
  q: "Describe the pathogenesis, classification, diagnosis and treatment of leprosy, including lepra reactions.",
  tags: ["leprosy", "M. leprae", "MDT", "reactions"],
  answer: `
    <h4>Organism and transmission</h4>
    <p><em>Mycobacterium leprae</em> is an acid-fast, obligate intracellular bacillus that cannot be cultured in vitro; it grows in cooler tissues — skin, peripheral nerves, nasal mucosa, eyes and testes — and has a long doubling time (about 14 days), giving an incubation period of years. Transmission is via respiratory droplets from untreated multibacillary cases; armadillos are a zoonotic reservoir.</p>
    <h4>Pathogenesis and spectrum</h4>
    <p>The clinical form depends on the host Th1/Th2 balance (Ridley–Jopling spectrum):</p>
    <ul>
      <li><strong>Tuberculoid (TT)</strong> — strong Th1 response, few bacilli (paucibacillary), well-demarcated hypopigmented anaesthetic plaques, nerve enlargement, granulomas; tuberculin test positive.</li>
      <li><strong>Borderline (BT, BB, BL)</strong> — intermediate, unstable, with varying bacillary load.</li>
      <li><strong>Lepromatous (LL)</strong> — weak Th1/Th2-predominant, many bacilli (multibacillary), diffuse infiltrative skin lesions, loss of eyebrows, saddle nose, testicular atrophy, widespread nerve involvement; highly infectious.</li>
    </ul>
    <p>Nerve damage is immune-mediated and causes anaesthesia, muscle weakness, claw hand, foot drop, ulcers and stigmatising deformity.</p>
    <h4>Diagnosis</h4>
    <p>Clinical: hypopigmented or erythematous patches with sensory loss, thickened nerves. Laboratory: <strong>slit-skin smear</strong> for acid-fast bacilli (bacterial index), skin or nerve biopsy with Fite–Faraco stain, <strong>PCR</strong> for <em>M. leprae</em> DNA, and serology (anti-PGL-I) in multibacillary disease. Early diagnosis prevents disability.</p>
    <h4>Treatment</h4>
    <p>WHO <strong>multidrug therapy</strong>: paucibacillary — rifampicin monthly plus dapsone daily for 6 months; multibacillary — rifampicin monthly, dapsone daily and clofazimine daily plus monthly for 12 months. Single-dose rifampicin is used for post-exposure prophylaxis of contacts. Drug resistance (dapsone, rifampicin, ofloxacin) is monitored.</p>
    <h4>Lepra reactions</h4>
    <ul>
      <li><strong>Type 1 (reversal) reaction</strong> — delayed hypersensitivity with swollen, erythematous lesions and acute neuritis; risk of permanent nerve damage; treat promptly with <strong>corticosteroids</strong> and continue MDT.</li>
      <li><strong>Type 2 (erythema nodosum leprosum)</strong> — immune-complex vasculitis with tender nodules, fever, arthritis, iridocyclitis; treat with thalidomide, corticosteroids or clofazimine.</li>
    </ul>
    <p>Prevention of disability — nerve monitoring, physiotherapy, footwear and stigma reduction — is integral to care.</p>
  `,
  tip: "The Ridley–Jopling spectrum is a Th1–Th2 axis; type 1 reaction is delayed hypersensitivity, type 2 is immune-complex.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "my8", domain: "mycobacteria",
  q: "Discuss non-tuberculous mycobacteria as human pathogens, focusing on Mycobacterium avium complex and the Mycobacterium abscessus complex.",
  tags: ["NTM", "MAC", "M. abscessus", "bronchiectasis"],
  answer: `
    <h4>What are NTM?</h4>
    <p>Non-tuberculous mycobacteria are environmental organisms found in water, soil and biofilms; they are not transmitted person-to-person. They are classified by growth rate and pigmentation (Runyon groups). They cause disease mainly in structurally abnormal lungs, in immunocompromise, and after trauma or surgery. Isolation does not equal disease — diagnosis requires clinical, radiological and microbiological criteria.</p>
    <h4>Mycobacterium avium complex (MAC)</h4>
    <p>Includes <em>M. avium</em> and <em>M. intracellulare</em>. In advanced HIV (CD4 <50), it causes disseminated disease with fever, weight loss, diarrhoea, lymphadenopathy and bone marrow suppression; prophylaxis with azithromycin is given when CD4 <50. In non-HIV hosts it causes <strong>nodular/bronchiectatic</strong> or <strong>fibrocavitary</strong> lung disease, especially in older women with bronchiectasis, and is associated with <em>M. abscessus</em> co-infection. Treatment is a macrolide (azithromycin or clarithromycin) plus ethambutol, often with a rifamycin, for at least 12 months after culture conversion.</p>
    <h4>Mycobacterium abscessus complex</h4>
    <p>Rapid-growing, multidrug-resistant NTM (<em>M. abscessus</em> subsp. <em>abscessus</em>, <em>massiliense</em>, <em>bolletii</em>) that causes chronic lung infection in cystic fibrosis and bronchiectasis, skin and soft-tissue infection after trauma or cosmetic procedures, and device-related infection. It is intrinsically resistant to many antibiotics (inducible <em>erm</em> gene, β-lactamases, low permeability); treatment requires a macrolide (if <em>erm</em>-negative or <em>massiliense</em>) plus amikacin, cefoxitin or imipenem, and sometimes tigecycline, linezolid or clofazimine, for months. Cure is difficult; lung resection is sometimes needed.</p>
    <h4>Diagnosis</h4>
    <p>Culture of sputum (two positive cultures), BAL, tissue or blood; species identification by <strong>MALDI-TOF, line probe assay or sequencing (hsp65, rpoB, 16S)</strong>; susceptibility testing for macrolides and amikacin. Imaging shows nodules, tree-in-bud opacities, cavitation and bronchiectasis. Distinguish colonisation from infection, especially in CF.</p>
    <h4>Management principles</h4>
    <p>Treat only when criteria for disease are met; use combination therapy guided by susceptibility; monitor for toxicity (ototoxicity, nephrotoxicity, QT); address predisposing conditions (reflux, bronchiectasis, immunosuppression); and involve specialist centres. Infection control matters for CF clinics because of potential cross-transmission of <em>M. abscessus</em>.</p>
  `,
  tip: "Two clinical anchors: MAC in HIV with CD4 <50, and M. abscessus in CF — then add the 'isolation ≠ disease' caveat.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "my9", domain: "mycobacteria",
  q: "Outline the principles of tuberculosis infection control and public health management, including contact tracing and treatment of latent infection.",
  tags: ["TB control", "IPC", "contact tracing", "LTBI"],
  answer: `
    <h4>Transmission and administrative controls</h4>
    <p>TB is transmitted by <strong>airborne droplet nuclei</strong>, so control follows the hierarchy: <strong>administrative</strong> (rapid triage, separation of suspected cases, cough etiquette, ventilation, reduced crowding, health-worker education), <strong>environmental</strong> (natural and mechanical ventilation, negative-pressure rooms, HEPA filtration, ultraviolet germicidal irradiation), and <strong>personal protective equipment</strong> (fit-tested N95/FFP2 respirators for staff, not surgical masks).</p>
    <h4>Case finding and diagnosis</h4>
    <p>Active case finding among contacts and high-risk groups; universal <strong>Xpert MTB/RIF Ultra</strong> as the initial diagnostic; culture and DST for resistance; HIV testing for every TB patient; screening for diabetes, silicosis, incarceration, homelessness and migration from high-burden settings. Notification to public health authorities is mandatory in most jurisdictions.</p>
    <h4>Contact tracing</h4>
    <p>Concentric-circle approach: identify household and close contacts, prioritise those with prolonged exposure, children under 5, immunocompromised and pregnant contacts. Screen with symptom review, chest radiograph, IGRA/TST; offer <strong>preventive therapy</strong> to those without active disease, and <strong>BCG</strong> to eligible infants. Window prophylaxis is used for young child contacts while repeat testing is pending.</p>
    <h4>Treatment of latent infection</h4>
    <p>Regimens: <strong>3HP</strong> (isoniazid plus rifapentine weekly for 12 weeks), <strong>4R</strong> (rifampicin daily for 4 months), <strong>3HR</strong>, or 6–9 months of isoniazid. Choose based on age, pregnancy, drug interactions (rifamycins and ART), liver disease and resources. Exclude active TB before starting. Preventive therapy reduces progression by 60–90% and is central to the End TB Strategy.</p>
    <h4>Programmatic and social dimensions</h4>
    <p>Directly observed or video-supported therapy, fixed-dose combinations, patient support and enablers, stigma reduction, and treatment of co-morbidities. <strong>Drug-resistant TB</strong> requires specialist regimens, isolation until culture conversion, and contact investigation. <strong>BCG</strong> at birth protects against severe childhood forms. The COVID-19 pandemic reversed years of progress; the 2025 WHO report estimates 10.7 million incident cases and 1.23 million deaths in 2024, with about 2.4 million cases missed — underscoring the need for active case finding and adequate funding.</p>
  `,
  tip: "Use the three-level hierarchy — administrative, environmental, PPE — before discussing drugs or vaccines.",
  sources: ["S6", "S21", "S22"]
}
);
