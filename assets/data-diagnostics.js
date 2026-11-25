window.QBANK.push(
{
  id: "d1", domain: "diagnostics", star: true,
  q: "Describe the principles and pitfalls of blood cultures in the diagnosis of sepsis. How can the yield be improved?",
  tags: ["blood culture", "sepsis", "contamination", "diagnostics"],
  answer: `
    <h4>Principle</h4>
    <p>Blood culture remains the reference standard for bloodstream infection. Blood is inoculated into aerobic and anaerobic bottles containing broth; the laboratory monitors for growth, then performs Gram stain, subculture and identification with susceptibility testing. Modern automated systems detect CO<sub>2</sub> production continuously, shortening time to positivity.</p>
    <h4>Collection</h4>
    <ul>
      <li><strong>Volume is the single most important variable</strong> — 20–30 mL per episode in adults (divided between bottles); yield falls sharply with smaller volumes.</li>
      <li><strong>Number</strong> — at least two sets from separate sites; a single set cannot distinguish contamination from bacteraemia.</li>
      <li><strong>Timing</strong> — obtain before antibiotics whenever possible, but do not delay antibiotics in septic shock; cultures can be drawn within minutes of starting therapy.</li>
      <li><strong>Technique</strong> — aseptic skin preparation with chlorhexidine–alcohol, sterile gloves and drape; avoid drawing from existing lines unless line infection is suspected (paired peripheral and line cultures).</li>
    </ul>
    <h4>Pitfalls</h4>
    <ul>
      <li><strong>Contamination</strong> — coagulase-negative staphylococci, diphtheroids, <em>Bacillus</em>, <em>Cutibacterium</em> and viridans streptococci may be skin flora; interpret with number of positive bottles, time to positivity and clinical context.</li>
      <li><strong>Fastidious organisms</strong> — <em>H. influenzae</em>, <em>N. meningitidis</em>, <em>Brucella</em>, <em>Francisella</em>, <em>Legionella</em>, mycobacteria and fungi may need special media or molecular tests.</li>
      <li><strong>Prior antibiotics</strong> reduce yield; culture clearance is also used to assess response.</li>
      <li><strong>Low-level/intermittent bacteraemia</strong> — endocarditis, osteomyelitis and catheter infection may require multiple sets.</li>
      <li><strong>Biofilm and intracellular organisms</strong> may not grow in blood.</li>
    </ul>
    <h4>Improving yield</h4>
    <p>Educate collectors, use automated collection devices, optimize volume, obtain multiple sets, use <strong>culture-independent methods</strong> (16S/ITS PCR, metagenomic sequencing) for fastidious or prior-antibiotic cases, and pair with rapid identification (MALDI-TOF, PCR) and antimicrobial stewardship. <strong>Do not culture without clinical justification</strong> — blood cultures are low-yield in low-probability patients and generate contamination-driven costs.</p>
  `,
  tip: "Volume and number of sets are the two levers; contamination is the main interpretive trap.",
  sources: ["S4", "S12", "S13"]
},
{
  id: "d2", domain: "diagnostics", star: true,
  q: "How has MALDI-TOF mass spectrometry changed clinical microbiology? What are its limitations?",
  tags: ["MALDI-TOF", "identification", "rapid diagnostics"],
  answer: `
    <h4>Principle</h4>
    <p>Matrix-assisted laser desorption/ionisation time-of-flight mass spectrometry analyses the protein profile of a colony — mainly ribosomal proteins — producing a spectrum that is compared with a reference library. A result is available in minutes from a single colony, compared with hours to days for biochemical identification.</p>
    <h4>Impact</h4>
    <ul>
      <li><strong>Rapid, accurate identification</strong> of bacteria and yeasts, including many difficult organisms (<em>Nocardia</em>, non-tuberculous mycobacteria, anaerobes) with appropriate extraction.</li>
      <li><strong>Earlier targeted therapy</strong> — when combined with stewardship, reduces time to appropriate antibiotics and cost.</li>
      <li><strong>Direct-from-positive-blood-culture</strong> protocols shorten identification by 24 hours.</li>
      <li><strong>Subtyping and resistance detection</strong> — some workflows detect β-lactamase activity (MALDI-TOF hydrolysis assays) or use spectra for clonal typing, though these are not routine.</li>
    </ul>
    <h4>Limitations</h4>
    <ul>
      <li><strong>Library dependence</strong> — misidentification or no score for organisms absent from the database; updates are needed.</li>
      <li><strong>Cannot reliably distinguish</strong> within species complexes (<em>E. coli</em>/<em>Shigella</em>, <em>Streptococcus mitis</em> group, <em>M. abscessus</em> subspecies) or some closely related species.</li>
      <li><strong>Requires a pure colony</strong> — mixed cultures need subculture; direct specimens are challenging.</li>
      <li><strong>No susceptibility information</strong> — AST still required (except specialised hydrolysis assays).</li>
      <li><strong>Cost and expertise</strong> — instrument, consumables, maintenance and trained staff; not always feasible in low-resource settings.</li>
    </ul>
    <h4>Complementary technologies</h4>
    <p>PCR and syndromic panels for direct detection, whole-genome sequencing for typing and resistance prediction, and <strong>lateral-flow or molecular rapid tests</strong> for point-of-care use. MALDI-TOF is best seen as a <strong>high-throughput identification hub</strong> within a diagnostic pathway, not a standalone solution.</p>
  `,
  tip: "Rapid ID plus stewardship is the outcome evidence; 'no AST' and 'library-dependent' are the limitations.",
  sources: ["S12", "S13", "S8"]
},
{
  id: "d3", domain: "diagnostics", star: true,
  q: "Compare PCR, syndromic panels, whole-genome sequencing and metagenomic next-generation sequencing in infectious disease diagnosis.",
  tags: ["molecular diagnostics", "mNGS", "WGS", "PCR"],
  answer: `
    <h4>PCR and real-time PCR</h4>
    <p>Target-specific amplification of pathogen nucleic acid; rapid, sensitive and specific, and quantitative with real-time detection. Uses include <em>M. tuberculosis</em> and rifampicin resistance (Xpert), HIV/HCV/HBV viral load, CMV, EBV, <em>C. difficile</em> toxin genes, MRSA <em>mecA</em> and respiratory viruses. Limitations: a predefined target (unknown pathogens are missed), contamination risk, and inability to distinguish colonisation from disease.</p>
    <h4>Syndromic multiplex panels</h4>
    <p>Simultaneous detection of 10–30 targets from one specimen (respiratory, gastrointestinal, meningitis/encephalitis, sexually transmitted infection panels). Advantages: rapid, broad, and useful when clinical overlap is wide. Limitations: cost, detection of asymptomatic carriage, no susceptibility data, and the need for stewardship to avoid overtreatment.</p>
    <h4>Whole-genome sequencing (WGS)</h4>
    <p>Sequences the entire pathogen genome, providing <strong>species identification, resistance determinants, virulence genes, and high-resolution typing</strong> for outbreak investigation. It is transforming TB resistance prediction and hospital outbreak management. Limitations: requires culture or sufficient organism DNA, bioinformatics expertise, cost, and interpretation of variants of uncertain significance; not real-time for most clinical decisions.</p>
    <h4>Metagenomic next-generation sequencing (mNGS)</h4>
    <p>Sequences all nucleic acids in a specimen without a predefined target — powerful for <strong>culture-negative, rare or unexpected pathogens</strong> (encephalitis, myocarditis, fever of unknown origin, immunocompromised hosts). Limitations: background host DNA, contamination, cost, turnaround time, and difficulty distinguishing colonisation from causation; interpretation requires clinical context and expert review.</p>
    <h4>CRISPR-based diagnostics</h4>
    <p>Cas12/Cas13 systems coupled with isothermal amplification provide rapid, specific, low-cost detection at point of care (e.g. SARS-CoV-2, HPV, malaria). Still limited by target selection and validation.</p>
    <h4>Choosing a test</h4>
    <p>Start with the clinical question: a known target favours PCR; a broad differential favours a syndromic panel; an unknown or unusual pathogen favours mNGS; outbreak or resistance characterisation favours WGS. <strong>No test replaces culture</strong> for susceptibility testing and epidemiological surveillance, and all molecular results must be interpreted against the clinical picture.</p>
  `,
  tip: "Match each technology to the clinical question it answers — that is the essay's organising principle.",
  sources: ["S12", "S13", "S8"]
},
{
  id: "d4", domain: "diagnostics",
  q: "Explain the principles of serological diagnosis. Why can serology be misleading, and how are sensitivity, specificity and predictive values used?",
  tags: ["serology", "sensitivity", "predictive value", "window period"],
  answer: `
    <h4>Principle</h4>
    <p>Serology detects the host antibody response (IgM, IgG, IgA) or antigen. IgM appears early and suggests recent infection; IgG appears later and persists, indicating past infection or immunity; IgG avidity distinguishes recent from distant infection. Antigen tests (HBsAg, cryptococcal antigen, galactomannan) detect pathogen components directly.</p>
    <h4>Interpretive pitfalls</h4>
    <ul>
      <li><strong>Window period</strong> — antibodies are absent early in infection (HIV, HCV, syphilis), so serology can be falsely negative; use nucleic acid testing.</li>
      <li><strong>Persistence</strong> — IgM can remain positive for months (e.g. <em>Toxoplasma</em>, EBV, dengue), and IgG persists for life, so a positive result may reflect past exposure.</li>
      <li><strong>Immunosuppression</strong> — HIV, transplant and B-cell depletion impair antibody production, causing false negatives.</li>
      <li><strong>Cross-reactivity</strong> — dengue/Zika/yellow fever flaviviruses; syphilis and other spirochetes; autoimmune disease causing false-positive VDRL/RPR.</li>
      <li><strong>Maternal antibody</strong> — placental IgG transfer confounds neonatal serology.</li>
      <li><strong>Vaccination</strong> — anti-HBs indicates immunity, not infection; BCG affects tuberculin testing.</li>
    </ul>
    <h4>Test performance</h4>
    <p><strong>Sensitivity</strong> = true positives / (true positives + false negatives): the ability to detect disease when present. <strong>Specificity</strong> = true negatives / (true negatives + false positives): the ability to exclude disease when absent. <strong>Positive predictive value</strong> depends on prevalence: even a highly specific test has low PPV when prevalence is low (false positives dominate). <strong>Negative predictive value</strong> is high when prevalence is low. Likelihood ratios summarise how much a result changes odds.</p>
    <h4>Clinical use</h4>
    <p>Serology is best for <strong>chronic or past infection</strong> (HIV screening with confirmation, hepatitis B immunity, syphilis, Lyme, endemic mycoses), for <strong>immune status</strong> (rubella, varicella, measles), and for <strong>epidemiological surveys</strong>. It is poor for acute diagnosis where nucleic acid testing is available. Always interpret in the context of pretest probability, and confirm with a second method (e.g. treponemal test after RPR, Western blot after ELISA).</p>
  `,
  tip: "PPV falls with prevalence — a one-line explanation of why screening low-risk populations produces false positives.",
  sources: ["S4", "S12", "S13"]
},
{
  id: "d5", domain: "diagnostics", star: true,
  q: "Compare disk diffusion, broth microdilution and automated antimicrobial susceptibility testing. How are breakpoints set, and why do CLSI and EUCAST differ?",
  tags: ["AST", "MIC", "breakpoints", "CLSI"],
  answer: `
    <h4>Methods</h4>
    <ul>
      <li><strong>Disk diffusion (Kirby–Bauer)</strong> — a standardised inoculum is spread on Mueller–Hinton agar, antibiotic disks are applied, and the zone of inhibition is measured after overnight incubation. Cheap, flexible and reproducible, but does not give an MIC and is unsuitable for some organisms (slow growers, anaerobes, <em>H. pylori</em>).</li>
      <li><strong>Broth microdilution</strong> — serial twofold dilutions of antimicrobial in wells; the lowest concentration inhibiting visible growth is the <strong>MIC</strong>. This is the reference method and allows exact comparison with breakpoints.</li>
      <li><strong>Automated systems</strong> (Vitek 2, Phoenix, MicroScan) — miniaturised dilution with rapid reading and expert rules; convenient but costly and less flexible for unusual organisms.</li>
      <li><strong>Gradient diffusion (E-test)</strong> — a strip with a concentration gradient gives an MIC on agar; useful for fastidious organisms.</li>
      <li><strong>Genotypic AST</strong> — PCR/WGS detection of resistance genes (e.g. <em>mecA</em>, <em>bla</em><sub>KPC</sub>, <em>rpoB</em>) is rapid but only detects known mechanisms and may not correlate with phenotype.</li>
    </ul>
    <h4>Breakpoints</h4>
    <p>A breakpoint is the MIC or zone diameter that separates susceptible, intermediate/susceptible-dose-dependent and resistant. Breakpoints are set from <strong>MIC distributions, pharmacokinetic/pharmacodynamic targets, clinical outcome data and epidemiological cut-offs</strong>. They are organism- and site-specific: pneumococcal meningitis breakpoints are lower than for pneumonia because drug penetration into CSF is poor.</p>
    <h4>CLSI versus EUCAST</h4>
    <p>Both are reputable standards but differ in philosophy and data. <strong>CLSI</strong> (US) tends to set breakpoints from clinical outcome and PK/PD, with separate meningitis and non-meningitis categories. <strong>EUCAST</strong> (Europe) uses epidemiological cut-offs and PK/PD, often resulting in lower breakpoints and fewer "intermediate" categories; it also provides harmonised European guidance. Differences can change a report from susceptible to resistant, so laboratories must apply one standard consistently and clinicians must know which is used.</p>
    <h4>Quality and interpretation</h4>
    <p>Standardised inoculum, medium, incubation and quality-control strains are essential. Report only agents relevant to the organism and site; use cascade rules and expert systems to avoid reporting redundant or misleading results. <strong>Susceptibility is not the same as clinical efficacy</strong> — source control, PK/PD and host factors matter.</p>
  `,
  tip: "Define MIC and breakpoint precisely; then give one reason CLSI and EUCAST can disagree.",
  sources: ["S8", "S24", "S12"]
},
{
  id: "d6", domain: "diagnostics", star: true,
  q: "Outline standard and transmission-based precautions. How are healthcare-associated infections prevented, and what are the main device-related infections?",
  tags: ["IPC", "hand hygiene", "CLABSI", "VAP"],
  answer: `
    <h4>Standard precautions</h4>
    <p>Applied to all patients: <strong>hand hygiene</strong> (WHO five moments; alcohol-based rub or soap and water for visible soiling and spore-forming organisms), gloves, gowns, masks and eye protection based on anticipated exposure, safe injection practices, sterile technique for invasive procedures, and safe handling of sharps and waste. Respiratory hygiene and cough etiquette are included.</p>
    <h4>Transmission-based precautions</h4>
    <ul>
      <li><strong>Contact</strong> — MRSA, VRE, <em>C. difficile</em>, CRE, <em>C. auris</em>, scabies; single room or cohort, gloves and gown, dedicated equipment, environmental cleaning.</li>
      <li><strong>Droplet</strong> — influenza, pertussis, meningococcus, diphtheria; surgical mask, distance, cohorting.</li>
      <li><strong>Airborne</strong> — tuberculosis, measles, varicella, SARS, mpox (selected); N95/FFP2 respirator, negative-pressure room, fit testing.</li>
    </ul>
    <h4>Device-related infections</h4>
    <ul>
      <li><strong>CLABSI</strong> — central line insertion bundle (hand hygiene, maximal sterile barrier, chlorhexidine skin antisepsis, optimal site selection, daily review), chlorhexidine-impregnated dressings, antimicrobial locks, prompt removal.</li>
      <li><strong>CAUTI</strong> — avoid unnecessary catheters, aseptic insertion, closed drainage, early removal, nurse-driven removal protocols.</li>
      <li><strong>VAP</strong> — head-of-bed elevation, sedation interruption, oral care with chlorhexidine (controversial), subglottic suction, avoiding unnecessary ventilator circuit changes.</li>
      <li><strong>Surgical site infection</strong> — correct prophylaxis timing, normothermia, glycaemic control, skin preparation, and avoiding shaving.</li>
      <li><strong><em>C. difficile</em></strong> — antimicrobial stewardship, contact precautions, sporicidal cleaning (chlorine), and isolation.</li>
    </ul>
    <h4>Programme elements</h4>
    <p>Surveillance, outbreak detection, education, hand-hygiene compliance monitoring, environmental cleaning, sterilization and reprocessing standards, and a culture of safety. WHO core components and CDC/HICPAC guidance provide the framework. Infection prevention is cost-effective and is the single most important countermeasure against multidrug-resistant organisms.</p>
  `,
  tip: "Contact/droplet/airborne with one organism each; then the device bundles — that covers most IPC essays.",
  sources: ["S21", "S22", "S4"]
},
{
  id: "d7", domain: "diagnostics", star: true,
  q: "Describe the steps of a healthcare outbreak investigation. What are the strengths and limitations of molecular typing?",
  tags: ["outbreak", "typing", "WGS", "epidemiology"],
  answer: `
    <h4>Recognition and verification</h4>
    <p>Detect an increase above baseline through laboratory-based surveillance, clinical suspicion or automated alerts. Confirm that cases are real (not a reporting artefact), define the case definition (clinical, epidemiological, laboratory criteria), and establish the background rate.</p>
    <h4>Descriptive epidemiology</h4>
    <p>Person, place and time: line list, attack rates, epidemic curve, geographic and ward mapping. Generate hypotheses about vehicle, source and mode of transmission.</p>
    <h4>Case finding and sampling</h4>
    <p>Active surveillance, review of microbiology records, screening of contacts and environmental sampling (sinks, surfaces, devices, solutions, food).</p>
    <h4>Analytical epidemiology</h4>
    <p>Cohort or case–control studies to test associations; calculate relative risks or odds ratios. In hospitals, a cohort study of exposed versus unexposed patients is often feasible.</p>
    <h4>Microbiological investigation</h4>
    <p>Species identification and susceptibility testing; <strong>molecular typing</strong> to link cases: pulsed-field gel electrophoresis (historical), multilocus sequence typing (MLST), repetitive-element PCR, and now <strong>whole-genome sequencing (WGS)</strong> for single-nucleotide polymorphism (SNP) analysis and plasmid characterisation. WGS can distinguish relapse from reinfection, identify transmission chains and detect resistance genes.</p>
    <h4>Control and communication</h4>
    <p>Implement control measures promptly — isolation, cohorting, hand hygiene, environmental cleaning, device removal, antimicrobial restriction, closing wards if necessary. Communicate with clinical teams, public health authorities and the public. Document and audit.</p>
    <h4>Strengths and limitations of typing</h4>
    <p><strong>Strengths:</strong> high discrimination, objective evidence of clonality, detection of cryptic transmission, and identification of outbreak sources. <strong>Limitations:</strong> cost, turnaround, access to bioinformatics, lack of standardised thresholds, and the fact that <strong>identical strains do not prove transmission</strong> — a common source or asymptomatic carrier may be responsible. Conversely, small genomic differences may arise during prolonged outbreaks. Typing must be interpreted with epidemiological data.</p>
  `,
  tip: "The investigation sequence — verify, define, describe, hypothesise, test, type, control — is the backbone.",
  sources: ["S12", "S13", "S22"]
},
{
  id: "d8", domain: "diagnostics",
  q: "Distinguish sterilization, disinfection and antisepsis. How are medical devices reprocessed, and what are the prion and biofilm challenges?",
  tags: ["sterilization", "disinfection", "autoclave", "prions"],
  answer: `
    <h4>Definitions</h4>
    <ul>
      <li><strong>Sterilization</strong> — destruction of all microorganisms, including bacterial spores; required for critical items that enter sterile tissue or the vascular system.</li>
      <li><strong>High-level disinfection</strong> — kills all microorganisms except high numbers of spores; for semi-critical items contacting mucous membranes (endoscopes, respiratory equipment).</li>
      <li><strong>Low-level disinfection</strong> — kills most vegetative bacteria and some fungi/viruses; for non-critical surfaces.</li>
      <li><strong>Antisepsis</strong> — application of antimicrobial agents to living tissue (skin, mucosa).</li>
    </ul>
    <h4>Methods</h4>
    <ul>
      <li><strong>Moist heat (autoclave)</strong> — 121°C at 15 psi for 15–20 minutes, or 134°C for 3–4 minutes; the method of choice for heat-stable items; monitored with biological indicators (<em>Geobacillus stearothermophilus</em>).</li>
      <li><strong>Dry heat</strong> — 160–170°C for 2 hours; for powders, oils and heat-stable instruments.</li>
      <li><strong>Ethylene oxide</strong> — low-temperature gas for heat-sensitive devices; toxic, requires aeration and monitoring.</li>
      <li><strong>Hydrogen peroxide plasma</strong> — low-temperature, non-toxic residues; for heat-sensitive instruments.</li>
      <li><strong>Radiation</strong> — gamma or electron beam for single-use industrial sterilization.</li>
      <li><strong>Chemical disinfectants</strong> — glutaraldehyde, ortho-phthalaldehyde, chlorine, peracetic acid, quaternary ammonium compounds; activity depends on concentration, contact time, organic load and pH.</li>
    </ul>
    <h4>Reprocessing</h4>
    <p>Clean (removal of organic material is essential — biofilms protect organisms), disinfect, inspect, package, sterilize, store and document. <strong>Flexible endoscopes</strong> are a notorious challenge because of long narrow lumens and biofilm; they require meticulous manual cleaning, high-level disinfection and drying. Single-use devices should not be reused unless validated.</p>
    <h4>Prions</h4>
    <p>Prions are abnormally folded proteins with no nucleic acid, resistant to standard sterilization and disinfection. They require <strong>extended autoclaving at 134°C for 18 minutes or more, sodium hydroxide or sodium hypochlorite, and dedicated instruments</strong>; disposable instruments are preferred for high-risk neurosurgical and ophthalmological procedures. Prion disease is invariably fatal, so precaution is paramount.</p>
    <h4>Biofilm</h4>
    <p>Biofilms reduce disinfectant penetration and are up to 1,000-fold more tolerant than planktonic cells. Cleaning is the critical step; enzymes, surfactants and mechanical action matter more than the choice of disinfectant alone. Residual moisture promotes regrowth, so drying and storage are part of reprocessing.</p>
  `,
  tip: "Critical/semi-critical/non-critical maps to sterilization/high-level/low-level — start there, then mention prions.",
  sources: ["S4", "S21", "S22"]
},
{
  id: "d9", domain: "diagnostics",
  q: "Describe biosafety levels and the main risks of laboratory-acquired infection. How are high-containment laboratories managed?",
  tags: ["biosafety", "BSL", "laboratory-acquired infection", "select agents"],
  answer: `
    <h4>Biosafety levels</h4>
    <ul>
      <li><strong>BSL-1</strong> — non-pathogenic organisms; standard microbiological practice, open bench.</li>
      <li><strong>BSL-2</strong> — moderate-risk agents (most clinical bacteria, HIV, HBV); biosafety cabinet for aerosol-generating procedures, restricted access, sharp controls, autoclave.</li>
      <li><strong>BSL-3</strong> — airborne or highly pathogenic agents (<em>M. tuberculosis</em>, <em>Brucella</em>, <em>Francisella</em>, <em>Coxiella</em>, SARS-CoV-2 culture); controlled access, negative pressure, HEPA filtration, directional airflow, sealed rooms, respiratory protection.</li>
      <li><strong>BSL-4</strong> — dangerous/exotic agents with no treatment (Ebola, Marburg, Lassa, Nipah); positive-pressure suits or class III cabinets, dedicated air and waste systems, extreme engineering and personnel controls.</li>
    </ul>
    <h4>Laboratory-acquired infections</h4>
    <p>Routes: <strong>inhalation of aerosols</strong> (centrifugation, vortexing, pipetting, loop flames, spill cleanup), percutaneous inoculation (needlesticks, sharps), ingestion, mucous membrane splash, and animal bites/scratches. Classic examples: <em>Brucella</em>, <em>Francisella tularensis</em>, <em>Coxiella</em>, <em>Salmonella</em> Typhi, <em>M. tuberculosis</em>, <em>N. meningitidis</em>, and viral agents such as hantavirus and SARS.</p>
    <h4>Risk assessment and controls</h4>
    <p>Risk assessment considers the agent, procedure, concentration, host and environment. Controls follow the hierarchy: <strong>elimination/substitution, engineering</strong> (biosafety cabinets, ventilation, sealed centrifuges, HEPA), <strong>administrative</strong> (SOPs, training, access control, vaccination, incident reporting), and <strong>PPE</strong> (gloves, gown, eye protection, respirators). Sharps injury prevention and spill kits are essential.</p>
    <h4>High-containment management</h4>
    <p>Personnel security clearance, competency-based training, medical surveillance and vaccination, inventory and accountability of select agents, biosecurity (physical security, cyber, insider threat), waste inactivation, and validated decontamination. Regular audits, drills and incident investigation maintain safety culture. The <strong>WHO Laboratory Biosafety Manual</strong> and national regulations provide the framework; the <strong>International Health Regulations</strong> and the Biological Weapons Convention add global governance.</p>
    <h4>Dual-use research</h4>
    <p>Research that could be misused (gain-of-function, pathogen enhancement) requires oversight, risk–benefit review and publication review. The COVID-19 pandemic and mpox outbreak have reinforced the need for safe, secure and accessible laboratories, especially in low-resource settings.</p>
  `,
  tip: "BSL-2 vs BSL-3 detail is usually enough; add aerosol-generating procedures as the main risk.",
  sources: ["S12", "S21", "S25"]
},
{
  id: "d10", domain: "diagnostics", star: true,
  q: "Discuss the emergence of new infectious threats in the 21st century. What drives emergence, and how should health systems respond?",
  tags: ["emerging infections", "mpox", "H5N1", "One Health"],
  answer: `
    <h4>Drivers</h4>
    <p>About 60–70% of emerging infections are zoonotic. Drivers include <strong>land-use change and deforestation</strong>, wildlife trade and consumption, intensive livestock production, <strong>climate change</strong>, urbanisation, travel and trade, migration and conflict, vaccine hesitancy, antimicrobial resistance, and laboratory/dual-use research. Surveillance and diagnostic capacity are uneven, so novel pathogens often spread silently before detection.</p>
    <h4>Recent examples</h4>
    <ul>
      <li><strong>SARS-CoV-2 (COVID-19)</strong> — a novel betacoronavirus causing a pandemic with millions of deaths, massive health-system disruption and rapid vaccine development (mRNA). It highlighted airborne transmission, the importance of genomic surveillance and the cost of inequitable vaccine access.</li>
      <li><strong>Mpox</strong> — formerly monkeypox; the 2022 global clade IIb outbreak spread through close contact, and clade I outbreaks in Central Africa (2023–2025) have higher mortality, particularly in children. Transmission, stigma and access to antivirals (tecovirimat) and vaccines (MVA-BN, LC16) are challenges.</li>
      <li><strong>Avian influenza H5N1</strong> — widespread in poultry and wild birds, with increasing mammalian infections (dairy cattle in the US, 2024); human cases are rare but severe. Pandemic risk depends on receptor adaptation and human-to-human transmission.</li>
      <li><strong>Antimicrobial-resistant organisms</strong> — <em>C. auris</em>, carbapenem-resistant Enterobacterales and <em>N. gonorrhoeae</em> are ongoing slow pandemics.</li>
      <li><strong>Arboviruses</strong> — dengue, chikungunya, Zika and West Nile virus are expanding with vector ranges; Oropouche virus emerged in the Americas.</li>
      <li><strong>Vaccine-preventable diseases</strong> — measles and diphtheria resurgences where coverage has fallen.</li>
    </ul>
    <h4>Response framework</h4>
    <ul>
      <li><strong>Surveillance:</strong> integrated human–animal–environmental surveillance, genomic sequencing, early warning and open data sharing.</li>
      <li><strong>Diagnostics:</strong> decentralized rapid tests, reference laboratories and surge capacity.</li>
      <li><strong>Health systems:</strong> infection prevention, ICU capacity, supply chains, and a trained workforce.</li>
      <li><strong>Countermeasures:</strong> vaccine platforms, antivirals, monoclonal antibodies and clinical trials that can start rapidly.</li>
      <li><strong>Governance:</strong> International Health Regulations, the Pandemic Agreement, One Health coordination and equity in access.</li>
      <li><strong>Communication:</strong> trust, transparency and countering misinformation.</li>
    </ul>
    <p>The lesson is that emergence is inevitable but pandemics are not: <strong>preparedness, surveillance and equity</strong> determine the outcome.</p>
  `,
  tip: "Use one viral, one bacterial and one vector-borne example, then organise the response around surveillance, systems and equity.",
  sources: ["S25", "S23", "S13"]
}
);
