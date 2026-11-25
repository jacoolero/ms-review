window.QBANK.push(
{
  id: "a1", domain: "amr", star: true,
  q: "Describe the principal mechanisms of antibacterial resistance, giving molecular examples for each. How do these mechanisms interact?",
  tags: ["resistance mechanisms", "efflux", "target", "enzymes"],
  answer: `
    <h4>Four classical mechanisms</h4>
    <ul>
      <li><strong>Enzymatic inactivation:</strong> β-lactamases hydrolyse the β-lactam ring (TEM, SHV, CTX-M, KPC, NDM, OXA); aminoglycoside-modifying enzymes acetylate, phosphorylate or adenylate the drug; chloramphenicol acetyltransferase; macrolide esterases and phosphotransferases. Extended-spectrum enzymes and carbapenemases are the dominant threat in Gram-negatives.</li>
      <li><strong>Target alteration:</strong> <em>mecA</em>/PBP2a in MRSA; mosaic <em>pbp</em> genes in penicillin-resistant pneumococci; <em>vanA</em>/<em>vanB</em> changing d-Ala-d-Ala to d-Ala-d-Lactate in VRE; <em>rpoB</em> mutations in rifampicin-resistant TB; <em>gyrA</em>/<em>parC</em> mutations in fluoroquinolone resistance; <em>erm</em> methylation of 23S rRNA (macrolides); <em>rrs</em> mutations (aminoglycosides).</li>
      <li><strong>Reduced permeability:</strong> loss or modification of porins (OmpK35/36 in <em>Klebsiella</em>, OprD in <em>Pseudomonas</em>, CarO in <em>Acinetobacter</em>) limits drug entry; the Gram-negative outer membrane is itself a barrier.</li>
      <li><strong>Active efflux:</strong> RND-family pumps (AcrAB–TolC in <em>E. coli</em>, MexAB–OprM in <em>Pseudomonas</em>, AdeABC in <em>Acinetobacter</em>), MFS and ABC transporters; overexpression confers multidrug resistance.</li>
    </ul>
    <h4>Additional mechanisms</h4>
    <p><strong>Target bypass</strong> (alternative metabolic pathways, e.g. <em>dfr</em> genes for trimethoprim), <strong>target protection</strong> (ribosomal protection proteins for tetracyclines), <strong>overproduction of target</strong>, <strong>biofilm formation</strong> and <strong>persister cells</strong> (phenotypic tolerance, not genetic resistance).</p>
    <h4>Interaction and genetics</h4>
    <p>Mechanisms often combine: porin loss plus β-lactamase production can raise carbapenem MICs above the breakpoint; efflux plus target mutation produces high-level fluoroquinolone resistance. Resistance genes are carried on <strong>plasmids, transposons, integrons and SCC<i>mec</i></strong>, enabling horizontal spread and co-selection. Chromosomal mutations (e.g. <em>gyrA</em>) arise under treatment and are vertically transmitted.</p>
    <h4>Clinical implications</h4>
    <p>Mechanism predicts the rescue drug: clavulanate restores activity against some serine β-lactamases but not carbapenemases; avibactam inhibits KPC and OXA-48 but not metallo-β-lactamases; aztreonam survives metallo-β-lactamases but is hydrolysed by serine enzymes, hence the combination aztreonam–avibactam. Susceptibility testing and rapid molecular detection guide therapy, and stewardship limits selection.</p>
  `,
  tip: "Four mechanisms, one named example each, then explain how porin loss plus enzyme production is greater than the sum of its parts.",
  sources: ["S1", "S4", "S8"]
},
{
  id: "a2", domain: "amr", star: true,
  q: "Classify β-lactamases and explain their clinical significance. How does the laboratory detect ESBLs, AmpC and carbapenemases?",
  tags: ["β-lactamase", "ESBL", "carbapenemase", "CLSI"],
  answer: `
    <h4>Classification</h4>
    <p><strong>Ambler molecular classes:</strong> A (serine-active-site; TEM, SHV, CTX-M, KPC), B (metallo-β-lactamases; NDM, VIM, IMP), C (AmpC cephalosporinases; chromosomal in <em>Enterobacter</em>, <em>Serratia</em>, <em>Citrobacter</em>, <em>Pseudomonas</em>; plasmid-mediated CMY), D (OXA-type oxacillinases; OXA-48-like, OXA-23/24/58 in <em>Acinetobacter</em>). The <strong>Bush–Jacoby</strong> functional scheme groups them by substrate and inhibitor profile.</p>
    <h4>ESBLs</h4>
    <p>Class A enzymes that hydrolyse penicillins, cephalosporins and aztreonam but are inhibited by clavulanate; they do not hydrolyse carbapenems. CTX-M is now globally dominant. They are plasmid-borne and often co-travel with aminoglycoside and fluoroquinolone resistance. Detection: phenotypic combination disk (cefotaxime/ceftriaxone ± clavulanate) or broth microdilution; molecular PCR for <em>bla</em><sub>CTX-M</sub>, <em>SHV</em>, <em>TEM</em>. CLSI no longer requires routine ESBL confirmation for reporting, but detection guides infection control.</p>
    <h4>AmpC</h4>
    <p>Class C enzymes hydrolyse cephalosporins and cephamycins and are resistant to clavulanate but inhibited by cloxacillin/Avibactam. Chromosomal induction in <em>Enterobacter cloacae</em>, <em>Serratia</em>, <em>Citrobacter freundii</em>, <em>Pseudomonas</em> can emerge on treatment (stable derepression), so these organisms may fail cephalosporin therapy despite initial susceptibility. Detection: cefoxitin resistance, AmpC disk test, molecular assays.</p>
    <h4>Carbapenemases</h4>
    <ul>
      <li><strong>KPC</strong> (class A, serine) — hydrolyses carbapenems, inhibited by avibactam, vaborbactam, relebactam.</li>
      <li><strong>NDM/VIM/IMP</strong> (class B, metallo-) — hydrolyse all β-lactams except aztreonam; inhibited by EDTA, not by clavulanate/avibactam; require aztreonam–avibactam or cefiderocol.</li>
      <li><strong>OXA-48-like</strong> (class D) — weak carbapenemase, inhibited variably by avibactam; often associated with porin loss.</li>
    </ul>
    <p>Detection: carbapenem MIC/disk screening, <strong>modified carbapenem inactivation method (mCIM/eCIM)</strong>, Carba NP, immunochromatographic lateral-flow assays (NG-Test Carba 5), PCR and whole-genome sequencing. CLSI 2025 recommends carbapenemase testing for <em>Enterobacterales</em> resistant to at least one carbapenem, because the enzyme class determines the choice of new β-lactam–inhibitor combinations.</p>
    <h4>Clinical significance</h4>
    <p>Enzyme class is now a therapeutic decision, not just an epidemiological label. Empirical use of carbapenems for ESBL producers, and of ceftazidime–avibactam for metallo-β-lactamase producers, would fail. Rapid class identification is therefore central to antimicrobial stewardship.</p>
  `,
  tip: "Ambler A/B/C/D with one enzyme and one inhibitor for each; then say why the enzyme class changes the drug choice.",
  sources: ["S8", "S4", "S13"]
},
{
  id: "a3", domain: "amr", star: true,
  q: "Define multidrug-resistant, extensively drug-resistant and pandrug-resistant organisms. How is antimicrobial resistance surveilled globally?",
  tags: ["MDR", "XDR", "GLASS", "surveillance"],
  answer: `
    <h4>Definitions</h4>
    <p>There is no single universal definition, but the widely used consensus (Magiorakos et al., 2012) for <em>S. aureus</em>, <em>Enterococcus</em>, <em>Enterobacterales</em>, <em>P. aeruginosa</em> and <em>Acinetobacter</em> is:</p>
    <ul>
      <li><strong>MDR</strong> — non-susceptibility to at least one agent in three or more antimicrobial categories.</li>
      <li><strong>XDR</strong> — non-susceptibility to at least one agent in all but two or fewer categories (i.e. susceptible to only one or two categories).</li>
      <li><strong>PDR</strong> — non-susceptibility to all agents in all categories tested.</li>
    </ul>
    <p>For TB, the definitions are drug-specific: RR-TB, MDR-TB (isoniazid plus rifampicin), pre-XDR (MDR plus fluoroquinolone) and XDR (MDR plus fluoroquinolone plus bedaquiline or linezolid).</p>
    <h4>Why definitions matter</h4>
    <p>They standardise surveillance, clinical trials and infection control. They are not treatment recommendations: susceptibility to a single agent may still permit combination therapy, and "PDR" depends on which drugs were tested. The categories also change as new drugs are added.</p>
    <h4>Global surveillance</h4>
    <p><strong>WHO GLASS</strong> (Global Antimicrobial Resistance and Use Surveillance System) collects national data on priority pathogens — <em>E. coli</em>, <em>K. pneumoniae</em>, <em>S. aureus</em>, <em>S. pneumoniae</em>, <em>Salmonella</em>, <em>Shigella</em>, <em>N. gonorrhoeae</em> and others — and on antimicrobial consumption. The <strong>WHO Bacterial Priority Pathogens List 2024</strong> ranks 24 pathogens in critical, high and medium tiers to guide R&D and public health action: critical includes carbapenem-resistant <em>A. baumannii</em>, third-generation cephalosporin-resistant and carbapenem-resistant Enterobacterales, and rifampicin-resistant <em>M. tuberculosis</em>.</p>
    <p>Other networks: EARS-Net (Europe), CDC AR Threats (US), SENTRY and GEARS (industry/academic), CAESAR (Central Asia), ReLAVRA (Latin America). Whole-genome sequencing is increasingly used for outbreak detection and resistance prediction.</p>
    <h4>Limitations</h4>
    <p>Laboratory capacity, breakpoint harmonisation (CLSI vs EUCAST), under-reporting from low-resource settings, and aggregation without clinical context. Surveillance must be linked to stewardship, infection control and WASH, and to antimicrobial use data in human and animal health (One Health).</p>
  `,
  tip: "Quote the 3-category MDR and 'all but two' XDR definitions precisely; then add the TB-specific definitions.",
  sources: ["S7", "S14", "S8"]
},
{
  id: "a4", domain: "amr", star: true,
  q: "Explain the pharmacokinetic/pharmacodynamic (PK/PD) indices that guide antibiotic dosing. Why does the same MIC sometimes predict different outcomes?",
  tags: ["PK/PD", "T>MIC", "AUC/MIC", "dosing"],
  answer: `
    <h4>Three patterns of killing</h4>
    <ul>
      <li><strong>Time-dependent killing</strong> — efficacy depends on the fraction of the dosing interval that free drug exceeds the MIC (<strong>fT>MIC</strong>). β-lactams are the paradigm; target roughly 40–50% for penicillins and carbapenems, 60–70% for cephalosporins. Prolonged or continuous infusion improves attainment for agents with short half-lives and modest MICs.</li>
      <li><strong>Concentration-dependent killing</strong> — efficacy depends on the peak free concentration relative to MIC (<strong>fC<sub>max</sub>/MIC</strong>), typically ≥8–10 for aminoglycosides; this justifies once-daily dosing, which also reduces toxicity.</li>
      <li><strong>Exposure-dependent (AUC/MIC)</strong> — efficacy depends on total exposure over 24 hours. Fluoroquinolones, vancomycin (AUC/MIC 400–600), daptomycin, azithromycin and linezolid follow this pattern.</li>
    </ul>
    <h4>Other determinants</h4>
    <p><strong>Protein binding</strong> reduces free drug; <strong>volume of distribution</strong> affects loading dose; <strong>clearance</strong> determines maintenance dose; <strong>post-antibiotic effect</strong> allows less frequent dosing for aminoglycosides and daptomycin. Site penetration matters: vancomycin and daptomycin penetrate lung poorly, so they are not ideal for pneumonia; β-lactams penetrate CSF only with inflammation; abscesses and biofilms reduce exposure.</p>
    <h4>Why MIC alone is insufficient</h4>
    <p>Outcome depends on the <strong>free drug exposure at the site of infection</strong>, the pathogen's resistance mechanism, inoculum effect, biofilm, immune status and source control. A susceptible MIC may fail if the patient is critically ill with augmented renal clearance, if the drug does not reach the site, or if the organism is tolerant. Conversely, high exposure can overcome a borderline MIC (e.g. prolonged infusion for <em>P. aeruginosa</em>).</p>
    <h4>Clinical application</h4>
    <p>Use <strong>loading doses</strong> for time-critical infections, adjust for renal and hepatic function, use <strong>therapeutic drug monitoring</strong> for vancomycin, aminoglycosides, voriconazole and posaconazole, and consider <strong>extended/continuous infusion</strong> of β-lactams in severe sepsis. Monte Carlo simulation and probability of target attainment help set breakpoints and doses. In critical illness, altered pharmacokinetics (capillary leak, oedema, renal replacement therapy) can make standard doses inadequate.</p>
  `,
  tip: "Name the index and the target for each class — T>MIC for β-lactams, Cmax/MIC for aminoglycosides, AUC/MIC for vancomycin.",
  sources: ["S4", "S8", "S13"]
},
{
  id: "a5", domain: "amr", star: true,
  q: "What is antimicrobial stewardship? Describe its core components, the evidence that it works, and the metrics used to evaluate it.",
  tags: ["stewardship", "DDD", "core elements", "C. difficile"],
  answer: `
    <h4>Definition</h4>
    <p>Antimicrobial stewardship is a coordinated set of interventions designed to <strong>improve antimicrobial use</strong> — choosing the right drug, dose, duration and route — to optimise patient outcomes while minimising toxicity, resistance and cost. It is not rationing; it is quality improvement.</p>
    <h4>Core components</h4>
    <ul>
      <li><strong>Leadership commitment</strong> and a formal stewardship programme with a physician and pharmacist lead.</li>
      <li><strong>Accountability</strong> — a named individual responsible for outcomes.</li>
      <li><strong>Pharmacy expertise</strong> and prescriber education.</li>
      <li><strong>Action</strong> — prospective audit and feedback, pre-authorisation for restricted agents, automatic stop orders, IV-to-oral switches, dose optimisation and de-escalation.</li>
      <li><strong>Tracking and reporting</strong> — antimicrobial use and resistance data fed back to prescribers.</li>
      <li><strong>Diagnostic support</strong> — rapid diagnostics, correct sampling, and avoiding treatment of colonisation or contaminants.</li>
    </ul>
    <h4>Evidence</h4>
    <p>Stewardship reduces inappropriate prescribing, <strong><em>C. difficile</em> infection</strong>, length of stay and cost, and can reduce resistance — particularly with restrictive interventions and reduced fluoroquinolone and cephalosporin use. It does not increase mortality when implemented safely, and in sepsis it must not delay appropriate therapy: the priority is <strong>early, effective empirical treatment followed by rapid de-escalation</strong>.</p>
    <h4>Metrics</h4>
    <ul>
      <li><strong>Days of therapy (DOT) per 1,000 patient-days</strong> — preferred because it is patient-level and unaffected by dose changes.</li>
      <li><strong>Defined daily dose (DDD) per 1,000 patient-days</strong> — useful for benchmarking but insensitive to renal dosing and combinations.</li>
      <li><strong>Antimicrobial-free days</strong>, length of therapy, percentage of appropriate prescribing, de-escalation rates, IV-to-oral conversion, and guideline concordance.</li>
      <li><strong>Outcome measures</strong> — mortality, readmission, <em>C. difficile</em> rates, resistance rates, cost.</li>
    </ul>
    <h4>Challenges</h4>
    <p>Diagnostic uncertainty, prescriber autonomy, fear of undertreatment, limited microbiology access, and resource constraints. Effective programmes combine <strong>data, education, feedback and culture change</strong>, and link to infection prevention, vaccination and One Health.</p>
  `,
  tip: "Say 'right drug, dose, duration, route' and distinguish DOT from DDD — the metrics question is common.",
  sources: ["S7", "S9", "S13"]
},
{
  id: "a6", domain: "amr",
  q: "When is combination antimicrobial therapy justified? Discuss synergy, empirical broadening, resistance prevention and the risks of antagonism.",
  tags: ["combination therapy", "synergy", "empirical", "antagonism"],
  answer: `
    <h4>Rationales for combination therapy</h4>
    <ul>
      <li><strong>Empirical broad coverage</strong> in severe sepsis or neutropenic fever, before the pathogen is known; de-escalate once culture results are available.</li>
      <li><strong>Polymicrobial infection</strong> — intra-abdominal sepsis, aspiration pneumonia, diabetic foot infection, pelvic inflammatory disease.</li>
      <li><strong>Synergy</strong> — β-lactam plus aminoglycoside for enterococcal endocarditis; β-lactam plus macrolide for <em>Legionella</em>; amphotericin B plus flucytosine for cryptococcal meningitis; rifampicin combinations for staphylococcal prosthetic infection and TB.</li>
      <li><strong>Prevention of resistance</strong> — mandatory in TB, HIV and HCV, where monotherapy rapidly selects resistance; also used in some MDR Gram-negative infections.</li>
      <li><strong>Reduced toxicity</strong> — lower doses of each agent (e.g. amphotericin B plus flucytosine).</li>
    </ul>
    <h4>Synergy and mechanisms</h4>
    <p>Synergy occurs when the combined effect exceeds the sum of individual effects: sequential cell-wall and protein-synthesis inhibition (penicillin plus gentamicin), sequential blockade of a metabolic pathway (trimethoprim plus sulfamethoxazole), or inhibition of a resistance enzyme (β-lactam plus β-lactamase inhibitor). In vitro synergy testing (checkerboard, time-kill, E-test) does not reliably predict clinical outcome, except in defined settings such as enterococcal endocarditis.</p>
    <h4>Risks</h4>
    <ul>
      <li><strong>Antagonism</strong> — bacteriostatic agents (tetracyclines, chloramphenicol) can antagonise penicillins in pneumococcal meningitis; avoid unless evidence supports.</li>
      <li><strong>Increased toxicity</strong> — nephrotoxicity with vancomycin plus piperacillin–tazobactam or aminoglycosides; <em>C. difficile</em> risk with broad spectra.</li>
      <li><strong>Selection pressure</strong> and cost; more drugs do not always mean better outcomes.</li>
      <li><strong>false reassurance</strong> — combination therapy does not reliably prevent resistance in <em>Pseudomonas</em> or <em>Acinetobacter</em>, and may increase it.</li>
    </ul>
    <h4>Principles</h4>
    <p>Use combination therapy when the indication is clear, choose agents with different targets and resistance profiles, optimise doses by PK/PD, and <strong>de-escalate</strong> to the narrowest effective regimen as soon as possible. Source control and infection prevention remain more powerful than any drug combination.</p>
  `,
  tip: "Four justifications plus one antagonism example — that structure answers most combination-therapy questions.",
  sources: ["S4", "S8", "S9"]
},
{
  id: "a7", domain: "amr", star: true,
  q: "Review the newer antibiotics available for multidrug-resistant Gram-negative and Gram-positive infections. What are their targets and limitations?",
  tags: ["new antibiotics", "cefiderocol", "avibactam", "pipeline"],
  answer: `
    <h4>β-lactam–β-lactamase inhibitor combinations</h4>
    <ul>
      <li><strong>Ceftazidime–avibactam</strong> — avibactam inhibits class A (KPC), class C (AmpC) and some class D (OXA-48) serine enzymes, but <strong>not metallo-β-lactamases</strong>. Active against KPC-producing <em>Klebsiella</em> and <em>P. aeruginosa</em>; resistance emerges via <em>bla</em><sub>KPC</sub> mutations and porin loss.</li>
      <li><strong>Meropenem–vaborbactam</strong> — vaborbactam is a boronic acid inhibitor of KPC and AmpC; not active against MBLs or OXA-48.</li>
      <li><strong>Imipenem–relebactam</strong> — relebactam inhibits KPC and AmpC; active against some <em>P. aeruginosa</em>; not MBL.</li>
      <li><strong>Aztreonam–avibactam</strong> — aztreonam resists MBL hydrolysis, and avibactam protects it from co-produced serine enzymes; the combination covers <strong>metallo-β-lactamase-producing Enterobacterales</strong>.</li>
      <li><strong>Ceftolozane–tazobactam</strong> — potent against <em>P. aeruginosa</em>, including many MDR strains; less reliable for KPC or MBL.</li>
    </ul>
    <h4>Cefiderocol</h4>
    <p>A siderophore cephalosporin that exploits iron uptake to enter Gram-negative cells; stable to many serine and metallo-β-lactamases. Active against CRAB, CRE, <em>Pseudomonas</em> and <em>Stenotrophomonas</em>. Limitations: not for Gram-positives; resistance via iron-transporter mutations; mortality signal in some trials in critically ill patients; dosing and PK uncertainty.</p>
    <h4>Gram-positive agents</h4>
    <ul>
      <li><strong>Dalbavancin, oritavancin, telavancin</strong> — long-acting lipoglycopeptides for MRSA and complicated skin infection; oritavancin is active against VRE.</li>
      <li><strong>Linezolid and tedizolid</strong> — oxazolidinones; excellent for MRSA pneumonia and VRE; myelosuppression, neuropathy, serotonin syndrome.</li>
      <li><strong>Daptomycin</strong> — lipopeptide; bactericidal for MRSA/VRE, but inactivated by lung surfactant (not for pneumonia) and can cause myopathy.</li>
      <li><strong>Ceftaroline and ceftobiprole</strong> — β-lactams with PBP2a activity; useful for MRSA, including combination therapy for refractory bacteraemia.</li>
      <li><strong>Lefamulin</strong> — pleuromutilin for community-acquired pneumonia; <strong>omadacycline</strong> and <strong>eravacycline</strong> — tetracycline derivatives with broad activity.</li>
    </ul>
    <h4>Limitations</h4>
    <p>High cost, limited availability, narrow indications, uncertain optimal dosing, toxicity, and rapid emergence of resistance. Most new agents are <strong>not</strong> a solution to the pipeline problem: they target resistant Gram-negatives but not all mechanisms, and stewardship must preserve them. The WHO pipeline analysis notes too few agents against critical pathogens, especially oral options and paediatric formulations.</p>
  `,
  tip: "Match the inhibitor to the enzyme class: avibactam/vaborbactam/relebactam for KPC, aztreonam for MBL, cefiderocol for broad MDR.",
  sources: ["S7", "S8", "S13"]
},
{
  id: "a8", domain: "amr", star: true,
  q: "Explain the One Health dimension of antimicrobial resistance. How does agricultural and environmental use of antimicrobials affect human medicine?",
  tags: ["One Health", "agriculture", "colistin", "environment"],
  answer: `
    <h4>The concept</h4>
    <p>One Health recognises that human, animal, plant and environmental health are interconnected. Antimicrobial resistance emerges and spreads across these sectors through shared bacteria, mobile genetic elements and antimicrobial residues. Addressing it requires coordinated action under the WHO–FAO–WOAH (formerly OIE)–UNEP quadripartite.</p>
    <h4>Drivers in animal and plant health</h4>
    <ul>
      <li><strong>Growth promotion and mass medication</strong> — low-dose antimicrobials in livestock select resistant commensals and pathogens; this is banned in the EU but still practised in some countries.</li>
      <li><strong>Veterinary therapy</strong> — misuse and overuse, including critically important human drugs (colistin, fluoroquinolones, third-generation cephalosporins).</li>
      <li><strong>Aquaculture</strong> — antimicrobials added to water and feed, with environmental release.</li>
      <li><strong>Plant agriculture</strong> — streptomycin and oxytetracycline for fire blight and other diseases; azole fungicides select cross-resistance in <em>Aspergillus</em>.</li>
      <li><strong>Environment</strong> — hospital and farm effluent, pharmaceutical manufacturing waste, and wastewater treatment plants act as mixing vessels for resistance genes.</li>
    </ul>
    <h4>Evidence of cross-sector transmission</h4>
    <p><strong>Colistin resistance</strong> is the paradigm: plasmid-borne <em>mcr-1</em> was first reported in <em>E. coli</em> from pigs and patients in China and has since spread globally, threatening a last-resort human drug. Livestock-associated MRSA (CC398) and ESBL-producing <em>E. coli</em> in poultry and humans are further examples. Whole-genome sequencing can trace plasmids and clones across sectors.</p>
    <h4>Interventions</h4>
    <ul>
      <li><strong>Reduce and restrict antimicrobial use</strong> in animals — ban growth promotion, restrict critically important drugs to veterinary prescription, and set targets.</li>
      <li><strong>Improve animal husbandry</strong> — vaccination, biosecurity, hygiene, nutrition and alternatives to antimicrobials.</li>
      <li><strong>Surveillance</strong> — integrated monitoring of use and resistance in animals, food and the environment (e.g. WHO GLASS, WOAH ANIMUSE, EARS-Vet).</li>
      <li><strong>Environmental controls</strong> — wastewater treatment, manufacturing standards, and limits on effluent discharge.</li>
      <li><strong>Policy</strong> — national action plans, regulation, labelling, and public education.</li>
    </ul>
    <h4>Challenges</h4>
    <p>Economic incentives for producers, weak regulation in low- and middle-income countries, limited veterinary services, and the difficulty of attributing human resistance to specific animal sources. Nonetheless, the lesson of <em>mcr-1</em> is clear: <strong>resistance selected anywhere can arrive everywhere</strong>.</p>
  `,
  tip: "Use mcr-1/colistin as the concrete example — it links agricultural use to a last-resort human drug.",
  sources: ["S7", "S14", "S23"]
},
{
  id: "a9", domain: "amr",
  q: "Outline the principles of antimicrobial prophylaxis, including surgical prophylaxis and medical indications. What are the harms of unnecessary prophylaxis?",
  tags: ["prophylaxis", "surgical", "endocarditis", "stewardship"],
  answer: `
    <h4>Surgical prophylaxis</h4>
    <p>The goal is to prevent surgical site infection by achieving adequate tissue concentrations during the operation. Principles:</p>
    <ul>
      <li><strong>Indication</strong> — clean-contaminated and selected clean procedures with prosthetic material; not for clean low-risk surgery.</li>
      <li><strong>Agent</strong> — <strong>cefazolin</strong> is the standard for most procedures (Gram-positive skin flora and some Gram-negatives); add metronidazole for colorectal surgery or use cefoxitin; vancomycin only for MRSA colonisation or β-lactam allergy.</li>
      <li><strong>Timing</strong> — within <strong>60 minutes before incision</strong> (120 minutes for vancomycin and fluoroquinolones) so that peak tissue levels coincide with the incision.</li>
      <li><strong>Dose</strong> — weight-based; re-dose intraoperatively for long procedures or major blood loss.</li>
      <li><strong>Duration</strong> — <strong>single dose</strong> or until 24 hours post-operatively; prolonged prophylaxis does not reduce infection and increases resistance and <em>C. difficile</em>.</li>
    </ul>
    <h4>Medical prophylaxis</h4>
    <ul>
      <li><strong>Endocarditis prophylaxis</strong> — for high-risk cardiac conditions (prosthetic valve, previous endocarditis, certain congenital heart disease, cardiac transplant valvulopathy) before dental procedures involving gingival manipulation; amoxicillin or clindamycin (where resistance permits).</li>
      <li><strong>Meningococcal contacts</strong> — rifampicin, ciprofloxacin or ceftriaxone.</li>
      <li><strong>TB</strong> — preventive therapy for contacts and high-risk groups.</li>
      <li><strong>Malaria</strong> — chemoprophylaxis for travellers, pregnancy (IPTp) and seasonal chemoprevention.</li>
      <li><strong>HIV</strong> — post-exposure and pre-exposure prophylaxis; prevention of mother-to-child transmission.</li>
      <li><strong>Rabies and tetanus</strong> — post-exposure immunoglobulin and vaccination.</li>
      <li><strong>Immunocompromised hosts</strong> — <em>Pneumocystis</em>, fungal and antiviral prophylaxis after transplant or in advanced HIV.</li>
    </ul>
    <h4>Harms</h4>
    <p>Unnecessary prophylaxis drives <strong>resistance</strong>, <em>C. difficile</em> infection, adverse drug reactions, cost and ecological damage. It also creates a false sense of security and can mask infection. Prophylaxis should be <strong>targeted, time-limited and audited</strong>, with adherence to local guidelines and stewardship oversight.</p>
  `,
  tip: "The three surgical rules: right indication, within 60 minutes, stop within 24 hours.",
  sources: ["S4", "S9", "S22"]
}
);
