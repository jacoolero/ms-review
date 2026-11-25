window.QBANK.push(
{
  id: "v1", domain: "virology", star: true,
  q: "Outline the steps of viral replication and explain the Baltimore classification of viruses. Why is the replication strategy clinically important?",
  tags: ["replication", "Baltimore", "classification"],
  answer: `
    <h4>Replication cycle</h4>
    <ol>
      <li><strong>Attachment</strong> — capsid or envelope protein binds a specific host receptor (HIV gp120–CD4/CCR5; influenza HA–sialic acid; SARS-CoV-2 spike–ACE2). Tropism is largely determined here.</li>
      <li><strong>Penetration and entry</strong> — endocytosis, membrane fusion (enveloped viruses) or direct penetration/genome injection (non-enveloped).</li>
      <li><strong>Uncoating</strong> — release of the genome into the cytoplasm or nucleus.</li>
      <li><strong>Genome replication and gene expression</strong> — depends on genome type; uses host or viral polymerases.</li>
      <li><strong>Assembly</strong> — capsid proteins package genomes; envelopes are acquired by budding through membranes.</li>
      <li><strong>Release</strong> — lysis or budding; budding viruses may persist without killing the cell.</li>
    </ol>
    <h4>Baltimore classification</h4>
    <ul>
      <li><strong>Class I — dsDNA</strong> (herpesviruses, poxviruses, papillomaviruses, polyomaviruses, adenoviruses): replicate in the nucleus (poxviruses in cytoplasm); use host DNA polymerase or viral polymerase; transcription by host RNA polymerase II.</li>
      <li><strong>Class II — ssDNA</strong> (parvovirus B19): converted to dsDNA, then transcribed.</li>
      <li><strong>Class III — dsRNA</strong> (rotavirus): segmented; transcribed by viral RNA-dependent RNA polymerase within the capsid.</li>
      <li><strong>Class IV — positive-sense ssRNA</strong> (picornaviruses, flaviviruses, coronaviruses, caliciviruses, togaviruses): genome acts as mRNA, translated directly; encodes RdRp for replication.</li>
      <li><strong>Class V — negative-sense ssRNA</strong> (influenza, measles, rabies, Ebola, RSV): must carry RdRp in the virion to transcribe mRNA.</li>
      <li><strong>Class VI — ssRNA with DNA intermediate</strong> (retroviruses, HIV): reverse transcriptase makes DNA, which integrates; transcription then follows.</li>
      <li><strong>Class VII — dsDNA with RNA intermediate</strong> (hepatitis B): reverse transcription of an RNA pregenome.</li>
    </ul>
    <h4>Clinical importance</h4>
    <p>The replication strategy predicts <strong>drug targets</strong> (reverse transcriptase and integrase for HIV; RdRp for HCV, influenza and SARS-CoV-2; thymidine kinase for HSV; HBV polymerase), <strong>latency reservoirs</strong> (herpesvirus episomes, HIV provirus, HBV cccDNA), <strong>mutation rates</strong> (RNA viruses and retroviruses mutate rapidly, favouring resistance and immune escape), and <strong>vaccine strategies</strong> (live attenuated for measles and varicella, subunit for HBV and HPV, mRNA for SARS-CoV-2).</p>
  `,
  tip: "Learn Baltimore by genome → mRNA strategy, not by listing virus families; then link each class to one drug target.",
  sources: ["S1", "S3", "S5"]
},
{
  id: "v2", domain: "virology", star: true,
  q: "Compare acute, latent and persistent viral infections. What mechanisms allow viruses to persist, and what are the clinical consequences?",
  tags: ["persistence", "latency", "chronic infection"],
  answer: `
    <h4>Patterns of infection</h4>
    <ul>
      <li><strong>Acute</strong> — rapid replication, innate and adaptive clearance, often lifelong immunity (influenza, measles, polio).</li>
      <li><strong>Latent</strong> — viral genome persists silently with minimal gene expression, reactivating intermittently (HSV-1/2, VZV, EBV, CMV, HIV provirus).</li>
      <li><strong>Chronic/persistent</strong> — continuous or low-level replication with ongoing antigen exposure (HBV, HCV, HIV, congenital CMV, papovaviruses).</li>
      <li><strong>Slow/chronic progressive</strong> — disease years after infection (SSPE after measles, PML after JC virus, HTLV-1 adult T-cell leukaemia).</li>
    </ul>
    <h4>Mechanisms of persistence</h4>
    <ul>
      <li><strong>Latency with limited antigen expression</strong> — HSV latency-associated transcripts; EBV episomes in memory B cells; HIV integrated provirus in resting CD4 T cells.</li>
      <li><strong>Antigenic variation</strong> — HIV Env, influenza HA/NA, HCV hypervariable region; escape from neutralising antibody and T cells.</li>
      <li><strong>Immunological privilege and reservoir sites</strong> — CNS, eye, testis, kidney tubules (polyomavirus), macrophage reservoirs (dengue, HIV).</li>
      <li><strong>Immune evasion</strong> — MHC-I down-regulation (HIV Nef, HSV ICP47, CMV US2/11), Fc receptors, complement mimics, cytokine homologues, apoptosis inhibition.</li>
      <li><strong>T-cell exhaustion</strong> — PD-1, TIM-3, LAG-3 up-regulation with chronic antigen; impaired effector function.</li>
      <li><strong>Integration and cccDNA</strong> — HIV provirus and HBV covalently closed circular DNA are invisible to immune clearance and drug eradication.</li>
      <li><strong>Cell-to-cell spread</strong> — HSV, HIV and measles spread across syncytia, avoiding antibody.</li>
    </ul>
    <h4>Clinical consequences</h4>
    <p>Reactivation during immunosuppression (HSV, VZV, CMV after transplant; TB and HBV with anti-TNF), chronic inflammation and fibrosis (HBV/HCV cirrhosis), oncogenesis (HPV, EBV, HBV, HCV, HTLV-1, KSHV, Merkel cell polyomavirus), immune-complex disease and immune exhaustion. Persistence also complicates vaccine design and explains why cure is difficult: <strong>sterilising immunity is rare; functional cure or durable suppression is the realistic goal</strong>.</p>
  `,
  tip: "Separate 'latent' (silent genome) from 'chronic' (ongoing replication) — the words are not interchangeable.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "v3", domain: "virology", star: true,
  q: "Describe the herpesviruses and the diseases they cause in immunocompetent and immunocompromised hosts.",
  tags: ["herpesvirus", "HSV", "CMV", "EBV"],
  answer: `
    <h4>Family properties</h4>
    <p>Herpesviridae are enveloped, icosahedral <strong>dsDNA</strong> viruses that establish lifelong latency in specific cell types. Eight human herpesviruses are clinically important: HSV-1, HSV-2, VZV, EBV, CMV, HHV-6, HHV-7 and HHV-8 (KSHV).</p>
    <h4>HSV-1 and HSV-2</h4>
    <p>Latency in sensory ganglia (trigeminal for HSV-1, sacral for HSV-2). HSV-1 causes orolabial herpes, keratoconjunctivitis, encephalitis (temporal lobe, a medical emergency) and, in athletes, herpes gladiatorum. HSV-2 causes genital herpes and neonatal herpes (disseminated or CNS disease). Both reactivate with stress, fever and immunosuppression; asymptomatic shedding drives transmission. Treatment: aciclovir, valaciclovir, famciclovir; foscarnet for resistant strains.</p>
    <h4>Varicella-zoster virus</h4>
    <p>Primary infection causes varicella (chickenpox), then latency in dorsal root ganglia; reactivation causes <strong>herpes zoster</strong> (shingles), post-herpetic neuralgia, Ramsay Hunt syndrome and, rarely, encephalitis or vasculopathy. Congenital varicella syndrome follows first-trimester infection. Vaccines (live attenuated) and aciclovir/valaciclovir are available.</p>
    <h4>Epstein–Barr virus</h4>
    <p>Infects B cells via CD21 and epithelial cells; causes <strong>infectious mononucleosis</strong> (fever, pharyngitis, lymphadenopathy, atypical lymphocytes, transaminitis), oral hairy leukoplakia in HIV, and is associated with <strong>Burkitt lymphoma, Hodgkin lymphoma, nasopharyngeal carcinoma, gastric cancer</strong> and post-transplant lymphoproliferative disease. Diagnosis: heterophile antibody (Monospot), VCA IgM, EBNA IgG, EBV DNA. No vaccine; supportive care.</p>
    <h4>Cytomegalovirus</h4>
    <p>Latency in myeloid progenitors. In immunocompetent hosts usually asymptomatic or mononucleosis-like. In transplant and HIV (CD4 <50) causes <strong>retinitis, colitis, oesophagitis, pneumonitis, encephalitis</strong>; congenital CMV is the leading infectious cause of sensorineural deafness and neurodevelopmental delay. Diagnosis: pp65 antigenaemia, CMV DNA PCR, fundoscopy, histology with owl-eye inclusions. Treatment: ganciclovir/valganciclovir, foscarnet, cidofovir; letermovir for prophylaxis in transplant.</p>
    <h4>HHV-6, HHV-7, HHV-8</h4>
    <p>HHV-6 causes roseola infantum and encephalitis after transplant; HHV-7 is mostly benign; HHV-8 causes <strong>Kaposi sarcoma</strong>, primary effusion lymphoma and multicentric Castleman disease, especially in HIV.</p>
  `,
  tip: "For each herpesvirus, give the latent cell type first — that single fact organises the whole answer.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "v4", domain: "virology", star: true,
  q: "Explain how human papillomavirus causes cervical cancer and how vaccination has changed prevention.",
  tags: ["HPV", "cervical cancer", "E6/E7", "vaccine"],
  answer: `
    <h4>Virology</h4>
    <p>HPV is a non-enveloped, icosahedral <strong>dsDNA</strong> virus with a circular genome of about 8 kb, encoding early (E) and late (L) proteins. More than 200 genotypes infect humans; <strong>high-risk types 16 and 18</strong> cause about 70% of cervical cancers, with 31, 33, 45, 52 and 58 accounting for most of the rest. Low-risk types 6 and 11 cause genital warts and recurrent respiratory papillomatosis.</p>
    <h4>Natural history and pathogenesis</h4>
    <p>Sexual transmission; the virus infects basal keratinocytes through microabrasions. Most infections are cleared by cell-mediated immunity within 1–2 years. Persistent infection with a high-risk type drives progression: <strong>E6</strong> binds and degrades <strong>p53</strong>, and <strong>E7</strong> inactivates <strong>pRb</strong>, releasing E2F and driving uncontrolled S-phase entry. E6 also activates telomerase. Integration of the viral genome into host DNA is a key step, often disrupting E2 (which normally represses E6/E7). The result is immortalisation and accumulation of mutations.</p>
    <h4>Disease spectrum</h4>
    <p>Cervical intraepithelial neoplasia (CIN1–3) → invasive cervical squamous cell carcinoma (and adenocarcinoma). HPV also causes vulvar, vaginal, anal, penile and <strong>oropharyngeal</strong> cancers, and genital warts. Co-factors: smoking, HIV/immunosuppression, multiparity, long-term oral contraceptive use, other STIs.</p>
    <h4>Screening</h4>
    <p>Cervical cytology (Pap smear) and/or <strong>HPV DNA testing</strong>; HPV testing is more sensitive and allows longer intervals. Vaccinated women still require screening because vaccines do not cover all types. Colposcopy and excision for high-grade lesions.</p>
    <h4>Vaccines</h4>
    <p>Recombinant <strong>virus-like particles</strong> of L1 capsid protein: bivalent (16/18), quadrivalent (6/11/16/18) and nonavalent (6/11/16/18/31/33/45/52/58). They are prophylactic, not therapeutic, and induce high-titre neutralising antibody. Given before sexual debut for maximum benefit, but catch-up vaccination is recommended through adolescence and young adulthood. Population impact has been dramatic: declines in HPV prevalence, genital warts and high-grade cervical lesions, with herd effects. WHO's 2020 strategy aims for 90% vaccination of girls, 70% screening and 90% treatment by 2030.</p>
  `,
  tip: "E6–p53 and E7–pRb are the two molecular facts; add that integration deregulates E2 repression.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "v5", domain: "virology", star: true,
  q: "Describe hepatitis B virology, the interpretation of serological markers, and the principles of treatment and prevention.",
  tags: ["HBV", "serology", "cccDNA", "tenofovir"],
  answer: `
    <h4>Virology</h4>
    <p>Hepatitis B virus is a partially double-stranded DNA virus (Baltimore class VII) with a reverse-transcription step. The virion carries surface antigen (HBsAg) and core antigen (HBcAg). After entry via the sodium taurocholate cotransporting polypeptide (NTCP) receptor, the genome is converted in the nucleus to <strong>covalently closed circular DNA (cccDNA)</strong>, which persists as the transcriptional template and is the main barrier to cure. Viral polymerase (reverse transcriptase) lacks proofreading, generating quasi-species.</p>
    <h4>Serological markers</h4>
    <ul>
      <li><strong>HBsAg</strong> — current infection (acute or chronic); first marker to appear.</li>
      <li><strong>Anti-HBs</strong> — immunity (vaccination or resolved infection); protects.</li>
      <li><strong>Anti-HBc IgM</strong> — acute infection or flare; <strong>anti-HBc IgG</strong> — past or ongoing infection, lifelong.</li>
      <li><strong>HBeAg</strong> — high replication and infectivity; <strong>anti-HBe</strong> — seroconversion, lower replication (but precore/core promoter mutants can still replicate).</li>
      <li><strong>HBV DNA</strong> — replication level, treatment monitoring.</li>
    </ul>
    <p>Interpretation: acute infection — HBsAg+, anti-HBc IgM+, HBeAg+, high DNA; resolved — anti-HBs+, anti-HBc IgG+, HBsAg−; chronic — HBsAg+ >6 months; isolated anti-HBc — past infection, window period, or occult infection; vaccinated — anti-HBs+ alone.</p>
    <h4>Natural history and treatment</h4>
    <p>Perinatal or early childhood infection leads to chronicity in 90% of infants, whereas adult infection resolves in >95%. Chronic hepatitis B progresses to cirrhosis and hepatocellular carcinoma. Treatment is indicated for active inflammation (ALT elevation), significant fibrosis, high DNA, or cirrhosis. <strong>Tenofovir (TDF/TAF) or entecavir</strong> are first-line nucleos(t)ide analogues; pegylated interferon is an alternative. These suppress but rarely eradicate cccDNA; <strong>functional cure</strong> (HBsAg loss) is the goal. Monitor DNA, ALT, HBsAg, elastography and HCC surveillance.</p>
    <h4>Prevention</h4>
    <p>Recombinant <strong>HBsAg vaccine</strong> (three doses, birth dose in endemic settings) is highly effective; hepatitis B immunoglobulin for neonates of HBsAg-positive mothers; antiviral prophylaxis in pregnancy with high viral load; safe injection and blood safety; condoms. Treatment of HBV in pregnancy and prevention of reactivation with immunosuppression (anti-CD20, steroids, chemotherapy) are important. WHO aims for elimination by 2030.</p>
  `,
  tip: "Learn the serology as a timeline, and remember cccDNA explains why antiviral therapy is suppressive, not curative.",
  sources: ["S1", "S4", "S17"]
},
{
  id: "v6", domain: "virology", star: true,
  q: "Discuss hepatitis C: virology, natural history, diagnosis and the impact of direct-acting antivirals.",
  tags: ["HCV", "DAA", "SVR", "cirrhosis"],
  answer: `
    <h4>Virology</h4>
    <p>Hepatitis C virus is an enveloped, <strong>positive-sense ssRNA</strong> flavivirus with a single open reading frame encoding structural (core, E1, E2) and non-structural (NS2–NS5B) proteins. The error-prone NS5B RNA-dependent RNA polymerase generates high genetic diversity; genotypes 1–8 differ in geography and treatment response. E2 hypervariable regions and glycosylation facilitate immune escape, and <strong>neutralising antibody responses are weak and narrow</strong>, so reinfection is possible.</p>
    <h4>Natural history</h4>
    <p>Transmission by blood — injecting drug use, unscreened transfusion, unsafe medical procedures, needlestick, and perinatally. Acute infection is usually asymptomatic or mild; about <strong>75–85% progress to chronic infection</strong>. Chronic hepatitis C causes progressive fibrosis, cirrhosis (20–30% over 20–30 years) and <strong>hepatocellular carcinoma</strong>, often in the absence of cirrhosis. Extrahepatic manifestations: mixed cryoglobulinaemia, membranoproliferative glomerulonephritis, porphyria cutanea tarda, lymphoma and insulin resistance.</p>
    <h4>Diagnosis</h4>
    <p>Screen with <strong>anti-HCV antibody</strong>; confirm active infection with <strong>HCV RNA PCR</strong> (or antigen). Genotype and resistance testing guide treatment in some settings. Assess fibrosis with elastography, APRI/FIB-4 or biopsy, and screen for HCC in cirrhosis.</p>
    <h4>Direct-acting antivirals</h4>
    <p>DAAs target NS3/4A protease (grazoprevir, glecaprevir), NS5A (ledipasvir, velpatasvir, pibrentasvir) and NS5B polymerase (sofosbuvir). Pan-genotypic combinations — <strong>sofosbuvir/velpatasvir</strong> or <strong>glecaprevir/pibrentasvir</strong> for 8–12 weeks — achieve <strong>sustained virological response (SVR)</strong> in >95% of patients, including many with cirrhosis. SVR is effectively a cure and reduces liver-related mortality and HCC risk, though HCC surveillance continues in established cirrhosis.</p>
    <h4>Challenges</h4>
    <p>High cost and access, reinfection in ongoing risk behaviour, drug interactions (amiodarone, statins, anticonvulsants), decompensated cirrhosis (avoid protease inhibitors), and HBV reactivation during DAA therapy. WHO's elimination targets require decentralised testing and treatment, harm reduction and affordable generics. There is no vaccine.</p>
  `,
  tip: "SVR12 is the definition of cure; and remember to screen for HBV before DAAs because of reactivation risk.",
  sources: ["S1", "S4", "S17"]
},
{
  id: "v7", domain: "virology", star: true,
  q: "Describe the pathogenesis of HIV infection, the natural history of untreated disease, and the principles of antiretroviral therapy and prevention.",
  tags: ["HIV", "ART", "CD4", "PrEP"],
  answer: `
    <h4>Virology and pathogenesis</h4>
    <p>HIV-1 is an enveloped, <strong>positive-sense ssRNA retrovirus</strong>. <strong>gp120</strong> binds CD4 and a co-receptor (CCR5 on macrophages and early infection; CXCR4 on T cells later), and <strong>gp41</strong> mediates fusion. Reverse transcriptase converts RNA to DNA, which integrates into the host genome via integrase. The virus infects CD4 T cells, macrophages and dendritic cells; massive depletion of gut-associated CD4 T cells occurs early. Latency in resting memory CD4 cells creates a reservoir that persists despite therapy.</p>
    <h4>Natural history</h4>
    <ul>
      <li><strong>Acute infection</strong> (2–4 weeks): flu-like illness, high viraemia, transient CD4 fall; often missed.</li>
      <li><strong>Clinical latency</strong>: years of gradual CD4 decline with low-level replication.</li>
      <li><strong>AIDS</strong> (CD4 <200 or AIDS-defining illness): <em>Pneumocystis</em> pneumonia, toxoplasmosis, cryptococcal meningitis, CMV retinitis, MAC, TB, Kaposi sarcoma, lymphoma, oesophageal candidiasis, wasting.</li>
    </ul>
    <p>Without treatment, median survival is about 10 years; with ART, near-normal life expectancy.</p>
    <h4>Diagnosis</h4>
    <p>Fourth-generation <strong>antigen/antibody</strong> assay (p24 antigen plus anti-HIV), confirmed by differentiation assay or <strong>HIV RNA PCR</strong>; nucleic acid testing for acute infection and neonatal diagnosis. Monitor <strong>CD4 count</strong> and <strong>plasma viral load</strong>; resistance genotyping at baseline and on failure.</p>
    <h4>Antiretroviral therapy</h4>
    <p>Recommended initial regimen: <strong>two NRTIs plus an integrase inhibitor</strong> — tenofovir/emtricitabine (or lamivudine) plus dolutegravir or bictegravir. Alternatives include boosted darunavir or rilpivirine. Goal: <strong>undetectable viral load</strong> (U=U — undetectable equals untransmittable) and immune reconstitution. Address adherence, drug interactions, renal and bone health, and opportunistic infection prophylaxis. Long-acting injectable cabotegravir/rilpivirine is an option for virologically suppressed patients.</p>
    <h4>Prevention</h4>
    <p>Condoms, harm reduction, voluntary medical male circumcision, <strong>PrEP</strong> (tenofovir/emtricitabine or long-acting cabotegravir), <strong>PEP</strong> within 72 hours, treatment as prevention, and prevention of mother-to-child transmission (ART plus infant prophylaxis). Vaccines for opportunistic infections and screening for TB, hepatitis and STIs are integral.</p>
  `,
  tip: "Name the receptor–co-receptor pair and the three enzymes (RT, integrase, protease) — they map directly onto drug classes.",
  sources: ["S1", "S4", "S16"]
},
{
  id: "v8", domain: "virology", star: true,
  q: "Explain antigenic drift and shift in influenza, and discuss how these processes drive epidemics, pandemics and vaccine updates.",
  tags: ["influenza", "antigenic shift", "pandemic", "oseltamivir"],
  answer: `
    <h4>The virus</h4>
    <p>Influenza A and B are enveloped, <strong>negative-sense ssRNA</strong> viruses with a segmented genome (eight segments in A). Two surface glycoproteins dominate immunity: <strong>haemagglutinin (HA)</strong>, which binds sialic acid and mediates entry, and <strong>neuraminidase (NA)</strong>, which releases progeny virions. Influenza A also has PB1-F2, NS1 and the M2 ion channel. Subtypes are defined by HA (H1–H18) and NA (N1–N11); human epidemics involve H1N1, H2N2 (historically) and H3N2.</p>
    <h4>Antigenic drift</h4>
    <p>Point mutations in HA and NA, selected by antibody pressure, gradually change antigenic sites. Drift causes <strong>seasonal epidemics</strong> and necessitates annual vaccine reformulation. Because immunity to prior strains is incomplete, reinfection occurs throughout life.</p>
    <h4>Antigenic shift</h4>
    <p>Reassortment of genome segments between influenza A strains co-infecting a cell — classically in pigs, which carry both avian and human receptors — produces a novel HA (or NA) to which the population has little immunity. Shift can cause <strong>pandemics</strong>: 1918 H1N1, 1957 H2N2, 1968 H3N2 and 2009 H1N1. Direct avian-to-human transmission (H5N1, H7N9) is a persistent pandemic threat.</p>
    <h4>Clinical and public health</h4>
    <p>Fever, myalgia, headache, cough; complications include viral pneumonia, secondary bacterial pneumonia (<em>S. pneumoniae</em>, <em>S. aureus</em>, including MRSA), myocarditis and encephalitis. High-risk groups: elderly, pregnant, young children, chronic disease, immunosuppression. Diagnosis by <strong>RT-PCR</strong> (preferred), rapid antigen tests (lower sensitivity) and viral culture.</p>
    <h4>Treatment and prevention</h4>
    <p><strong>Neuraminidase inhibitors</strong> (oseltamivir, zanamivir) reduce duration if started within 48 hours and are recommended for severe or high-risk cases; <strong>baloxavir</strong> (cap-dependent endonuclease inhibitor) is a single-dose alternative. Adamantanes are obsolete due to resistance. <strong>Annual vaccination</strong> is the main preventive measure; vaccine strains are updated using global surveillance (WHO GISRS). Pandemic preparedness includes stockpiles, rapid vaccine platforms (mRNA, cell-based) and non-pharmaceutical interventions.</p>
  `,
  tip: "Drift = point mutations, epidemics, annual vaccine; shift = reassortment, pandemics, novel HA. Two sentences, then examples.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "v9", domain: "virology",
  q: "Describe measles infection, its complications and the immunological basis of vaccine-induced protection.",
  tags: ["measles", "SSPE", "MMR", "herd immunity"],
  answer: `
    <h4>Virology and transmission</h4>
    <p>Measles virus is an enveloped, <strong>negative-sense ssRNA</strong> paramyxovirus with two surface glycoproteins: <strong>H</strong> (haemagglutinin, binds CD150/SLAM and nectin-4) and <strong>F</strong> (fusion). It is one of the most transmissible human pathogens (<strong>R<sub>0</sub> 12–18</strong>), spread by respiratory droplets and aerosols; infectious from 4 days before to 4 days after rash onset.</p>
    <h4>Pathogenesis and clinical course</h4>
    <p>Infection of respiratory epithelium and dendritic cells, then spread to regional lymph nodes and via viraemia to skin, lung and gut. Incubation 10–14 days; prodrome of fever, coryza, conjunctivitis and cough, with <strong>Koplik spots</strong> on the buccal mucosa. The rash begins on the face and spreads caudally. Complications: otitis media, pneumonia (the main cause of death), diarrhoea, keratitis, encephalitis (acute post-infectious, 1 in 1,000), and <strong>subacute sclerosing panencephalitis (SSPE)</strong> years later (1 in 10,000–100,000 cases), caused by persistent defective virus. Measles also causes <strong>immune amnesia</strong> — depletion of pre-existing antibody repertoires — increasing susceptibility to other infections for months to years.</p>
    <h4>Diagnosis</h4>
    <p>Clinical, confirmed by <strong>measles IgM</strong> (false negatives early), <strong>RT-PCR</strong> of throat/nasopharyngeal swab or urine, and genotyping for surveillance. Notify public health immediately.</p>
    <h4>Treatment and prevention</h4>
    <p>No antiviral; supportive care, vitamin A (reduces mortality and blindness), and management of complications. <strong>MMR</strong> is a live attenuated vaccine given at 12–15 months and 4–6 years; two doses are about 97% effective. It induces neutralising antibody and T-cell memory; protection is lifelong. <strong>Herd immunity requires ≥95% two-dose coverage</strong>. Contraindications: pregnancy, severe immunodeficiency, anaphylaxis to components. Post-exposure vaccination or immunoglobulin within 72 hours/6 days can prevent or attenuate disease. Falling coverage has produced resurgences, making measles a sentinel indicator of immunisation system performance.</p>
  `,
  tip: "R0 12–18 explains the 95% herd-immunity threshold; immune amnesia is the modern complication examiners like.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "v10", domain: "virology",
  q: "Compare inactivated and live attenuated polio vaccines. Why has polio not yet been eradicated, and what is vaccine-derived poliovirus?",
  tags: ["polio", "OPV", "IPV", "eradication"],
  answer: `
    <h4>Virology and pathogenesis</h4>
    <p>Poliovirus is a non-enveloped, <strong>positive-sense ssRNA</strong> enterovirus with three serotypes (1–3). It is transmitted faecally–orally, replicates in the oropharynx and gut, and causes viraemia; in about 1% it invades the CNS, destroying anterior horn motor neurons and causing asymmetric flaccid paralysis. Most infections are asymptomatic or mild. Rarely, vaccine-associated paralytic polio occurs with OPV.</p>
    <h4>Vaccines</h4>
    <ul>
      <li><strong>Inactivated polio vaccine (IPV, Salk)</strong> — trivalent killed virus given by injection; induces systemic IgG that prevents viraemia and paralysis but not intestinal infection or transmission. Safe in immunodeficiency and pregnancy. More expensive and requires trained injectors.</li>
      <li><strong>Oral polio vaccine (OPV, Sabin)</strong> — live attenuated trivalent/bivalent; induces both humoral and <strong>mucosal IgA</strong> immunity, is cheap, easy to administer and spreads secondary immunity. Risks: <strong>vaccine-associated paralytic polio</strong> (about 1 in 2–3 million first doses) and, in under-immunised populations, <strong>circulating vaccine-derived poliovirus (cVDPV)</strong> when the attenuated strain mutates and regains neurovirulence.</li>
    </ul>
    <h4>Eradication status</h4>
    <p>Wild poliovirus type 2 was declared eradicated in 2015 and type 3 in 2019; <strong>type 1 remains endemic in Afghanistan and Pakistan</strong>, with importations into Africa. Obstacles: conflict and insecurity, vaccine hesitancy, weak health systems, surveillance gaps, and cVDPV outbreaks — now the majority of paralytic cases — requiring outbreak response with monovalent OPV and IPV. The polio endgame strategy uses IPV plus bivalent OPV, sequential schedules, and eventually cessation of OPV.</p>
    <h4>Lessons</h4>
    <p>Polio illustrates the tension between <strong>individual safety (IPV)</strong> and <strong>population transmission control (OPV)</strong>, and the importance of surveillance, laboratory containment and community engagement. The same principles apply to other eradication programmes.</p>
  `,
  tip: "IPV prevents paralysis but not transmission; OPV prevents transmission but rarely causes paralysis — that contrast is the answer.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "v11", domain: "virology", star: true,
  q: "Compare dengue, Zika and yellow fever. How do antibody-dependent enhancement and vector ecology shape their epidemiology?",
  tags: ["dengue", "Zika", "yellow fever", "arbovirus"],
  answer: `
    <h4>Shared biology</h4>
    <p>All three are <strong>positive-sense ssRNA flaviviruses</strong> transmitted by <em>Aedes</em> mosquitoes (mainly <em>Ae. aegypti</em>, also <em>Ae. albopictus</em>). Urbanisation, storage of water, climate change and travel drive their spread. They share clinical overlap — fever, headache, myalgia, rash — so laboratory confirmation is essential.</p>
    <h4>Dengue</h4>
    <p>Four serotypes (DENV-1–4); infection with one confers lifelong homotypic but only transient heterotypic immunity. <strong>Antibody-dependent enhancement</strong> occurs when cross-reactive, sub-neutralising antibodies from a prior infection bind a new serotype and facilitate Fcγ receptor-mediated uptake into monocytes, increasing viral replication and cytokine release. This explains why <strong>secondary infection</strong> is the main risk factor for severe dengue (plasma leakage, haemorrhage, shock). Diagnosis: NS1 antigen (early), IgM/IgG, RT-PCR; warning signs include abdominal pain, persistent vomiting, fluid accumulation, bleeding and lethargy. Management is <strong>supportive with careful fluid balance</strong>; no specific antiviral. Vaccine (CYD-TDV) requires prior infection screening; TAK-003 is used in some countries.</p>
    <h4>Zika</h4>
    <p>Usually mild or asymptomatic, but <strong>congenital Zika syndrome</strong> — microcephaly, brain calcifications, ocular lesions — and Guillain–Barré syndrome are the key concerns. Sexual transmission occurs. Diagnosis: RT-PCR of serum, urine and semen; IgM cross-reacts with dengue. No vaccine or specific treatment; prevention is vector control and avoidance of pregnancy in affected areas.</p>
    <h4>Yellow fever</h4>
    <p>Visceral disease with hepatitis, jaundice, haemorrhage and renal failure; case fatality 20–50% in severe cases. Diagnosis: RT-PCR early, IgM later; distinguish from other flaviviruses. No antiviral; supportive care. A <strong>single dose of live attenuated vaccine</strong> provides lifelong immunity and is the cornerstone of control; outbreak response uses fractional dosing when supply is limited.</p>
    <h4>Vector ecology and control</h4>
    <p><em>Aedes</em> breeds in domestic water containers and bites during the day, so control requires source reduction, larvicides, adulticides, bed nets (limited because daytime biting), window screens and community engagement. <em>Wolbachia</em>-infected mosquitoes and genetically modified vectors are promising. Surveillance, climate modelling and integrated vector management are essential.</p>
  `,
  tip: "ADE is the mechanism that links secondary dengue to severe disease; say 'sub-neutralising cross-reactive antibody enhances uptake'.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "v12", domain: "virology",
  q: "Describe the pathogenesis, clinical course and post-exposure management of rabies.",
  tags: ["rabies", "PEP", "Negri bodies", "zoonosis"],
  answer: `
    <h4>Virology</h4>
    <p>Rabies virus is a bullet-shaped, enveloped, <strong>negative-sense ssRNA</strong> rhabdovirus. It is neurotropic and almost uniformly fatal once symptoms begin. Reservoirs: dogs (most human deaths globally), bats, raccoons, skunks, foxes; in the Americas, bat variants are increasingly important.</p>
    <h4>Pathogenesis</h4>
    <p>Virus in saliva enters through a bite or scratch, replicates in muscle and connective tissue, then binds nicotinic acetylcholine receptors and travels <strong>retrograde along peripheral nerves</strong> to the spinal cord and brain, spreading via synaptic connections. Centripetal spread is slow (days to months), which creates the window for post-exposure prophylaxis. In the brain it causes encephalitis with <strong>Negri bodies</strong> (eosinophilic cytoplasmic inclusions) in hippocampal and Purkinje cells. Centrifugal spread to salivary glands, skin and other organs follows.</p>
    <h4>Clinical course</h4>
    <p>Incubation typically 1–3 months (range days to years), shorter for face and neck wounds. Prodrome: fever, malaise, paraesthesia or pain at the bite site. <strong>Furious rabies:</strong> hydrophobia, aerophobia, agitation, autonomic instability, seizures. <strong>Paralytic rabies:</strong> ascending flaccid paralysis. Coma and death within days to weeks. Diagnosis: RT-PCR or fluorescent antibody on saliva, skin biopsy, CSF; serology; post-mortem brain examination.</p>
    <h4>Post-exposure prophylaxis</h4>
    <ol>
      <li><strong>Immediate wound washing</strong> with soap and water for 15 minutes, then virucidal agent (povidone-iodine or ethanol); do not suture immediately.</li>
      <li><strong>Rabies immunoglobulin</strong> infiltrated into the wound for category III exposures (transdermal bites, mucous membrane contamination) — human RIG preferred; equine RIG alternatives.</li>
      <li><strong>Vaccine</strong> — cell-culture vaccines on days 0, 3, 7 and 14 (and 28 in immunocompromised); intradermal regimens are used in some settings.</li>
      <li><strong>Tetanus prophylaxis and antibiotics</strong> as indicated.</li>
    </ol>
    <p>PEP is highly effective if started promptly. Once symptoms appear, care is palliative; the Milwaukee protocol has rarely succeeded and is not standard. Prevention: dog vaccination, stray control, vaccination of at-risk workers, and public education. Rabies is a <strong>notifiable, One Health</strong> disease.</p>
  `,
  tip: "The PEP sequence — wash, immunoglobulin, vaccine — and the fact that the incubation window is the therapeutic opportunity.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "v13", domain: "virology",
  q: "Compare rotavirus and norovirus as causes of acute gastroenteritis. What explains their epidemic potential and how are they controlled?",
  tags: ["rotavirus", "norovirus", "gastroenteritis", "vaccine"],
  answer: `
    <h4>Rotavirus</h4>
    <p>A non-enveloped, <strong>dsRNA</strong> reovirus with a segmented genome and three layers (outer capsid VP7/VP4, middle VP6, inner VP2/VP6). VP4 and VP7 define G and P serotypes. It infects mature villous enterocytes of the small intestine, causing villous atrophy, reduced disaccharidase activity and osmotic diarrhoea; the enterotoxin <strong>NSP4</strong> triggers secretion. It affects infants and young children (6–24 months), with vomiting, fever and watery diarrhoea lasting 3–8 days; dehydration is the main threat. Transmission is faecal–oral, with a relatively high infectious dose but environmental stability.</p>
    <p>Diagnosis: stool antigen EIA or RT-PCR. Management: oral rehydration and zinc; no specific antiviral. Two live oral vaccines (Rotarix, RotaTeq) are widely used and have substantially reduced severe rotavirus disease and hospitalisation, with some herd protection. Intussusception is a rare adverse event (higher with older rotavirus vaccines).</p>
    <h4>Norovirus</h4>
    <p>A non-enveloped, <strong>positive-sense ssRNA</strong> calicivirus with a single structural protein (VP1) and multiple genogroups; GII.4 strains dominate epidemics. It binds histo-blood group antigens (HBGAs), which explains ABO/Lewis-dependent susceptibility. It has an <strong>extremely low infectious dose (10–100 virions)</strong>, high environmental stability, resistance to many disinfectants (including alcohol), and short-lived immunity with antigenic drift — hence explosive outbreaks in closed settings (cruise ships, care homes, hospitals, schools).</p>
    <p>Clinical: abrupt vomiting and watery diarrhoea, 12–48 hours; dehydration risk in infants and elderly. Diagnosis: RT-PCR of stool (preferred), antigen EIA. Management: supportive rehydration; no vaccine (candidates in trials). Control: hand hygiene with soap and water, chlorine-based disinfection, isolation, exclusion of food handlers, and outbreak investigation.</p>
    <h4>Comparison</h4>
    <p>Rotavirus is a <strong>paediatric, vaccine-preventable</strong> disease with a seasonal pattern; norovirus is an <strong>all-age, explosive outbreak</strong> pathogen with no vaccine and no durable immunity. Both are diagnosed by molecular methods and managed with rehydration, but norovirus demands stricter environmental control because of its low dose and disinfectant resistance.</p>
  `,
  tip: "Low infectious dose plus alcohol resistance explains norovirus outbreaks; rotavirus is the vaccine success story.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "v14", domain: "virology", star: true,
  q: "Classify antiviral drugs by target and explain the mechanisms of resistance. Why is antiviral resistance a particular problem?",
  tags: ["antivirals", "resistance", "aciclovir", "oseltamivir"],
  answer: `
    <h4>Targets</h4>
    <ul>
      <li><strong>Attachment/entry:</strong> maraviroc (CCR5 antagonist), enfuvirtide (gp41 fusion inhibitor), palivizumab (RSV F protein), nirsevimab.</li>
      <li><strong>Uncoating:</strong> amantadine/rimantadine (influenza M2) — now obsolete due to resistance.</li>
      <li><strong>Nucleic acid synthesis:</strong> aciclovir/valaciclovir (HSV/VZV thymidine kinase-dependent guanosine analogue), ganciclovir/valganciclovir (CMV), cidofovir, foscarnet (pyrophosphate analogue), sofosbuvir (HCV NS5B), tenofovir/emtricitabine/lamivudine/zidovudine (HIV NRTIs), oseltamivir/zanamivir (influenza neuraminidase), baloxavir (influenza cap-dependent endonuclease), remdesivir (SARS-CoV-2 RdRp).</li>
      <li><strong>Integration:</strong> raltegravir, dolutegravir, bictegravir (HIV integrase).</li>
      <li><strong>Protease:</strong> darunavir, atazanavir (HIV), glecaprevir, grazoprevir (HCV), nirmatrelvir (SARS-CoV-2 Mpro).</li>
      <li><strong>Assembly/release:</strong> protease inhibitors for HIV, neuraminidase inhibitors for influenza.</li>
      <li><strong>Non-nucleoside and capsid inhibitors:</strong> efavirenz/nevirapine (HIV RT), lenacapavir (HIV capsid), letermovir (CMV terminase).</li>
      <li><strong>Immunomodulators:</strong> interferon-α (HBV/HCV), pegylated interferon.</li>
    </ul>
    <h4>Resistance mechanisms</h4>
    <ul>
      <li><strong>Target mutation</strong> — HSV thymidine kinase or DNA polymerase mutations (aciclovir resistance); HIV RT, protease and integrase mutations; influenza H275Y in NA (oseltamivir); HBV polymerase mutations.</li>
      <li><strong>Reduced drug activation</strong> — HSV TK deficiency; HBV polymerase changes affecting phosphorylation.</li>
      <li><strong>Efflux and altered permeability.</strong></li>
      <li><strong>Fitness and compensatory mutations</strong> — resistance often costs replicative fitness, but compensatory changes restore it.</li>
      <li><strong>Latency and reservoirs</strong> — integrated HIV provirus and HBV cccDNA are not touched by drugs, so resistance can archive.</li>
    </ul>
    <h4>Why resistance is a particular problem</h4>
    <p>RNA viruses and retroviruses have <strong>error-prone polymerases</strong> and high replication rates, generating diverse quasi-species; monotherapy selects resistant variants rapidly, which is why <strong>combination therapy</strong> is standard for HIV, HBV and HCV. Transmission of resistant strains (e.g. oseltamivir-resistant influenza, drug-resistant HIV) limits empirical options. Vaccines and non-pharmacological measures remain essential. Antiviral stewardship, adherence support, therapeutic drug monitoring and genotypic resistance testing are the main countermeasures.</p>
  `,
  tip: "Map each drug to a step in the replication cycle, then give the resistance mechanism for that same step.",
  sources: ["S1", "S4", "S5"]
}
);
