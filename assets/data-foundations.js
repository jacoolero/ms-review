window.QBANK.push(
{
  id: "f1", domain: "foundations", star: true,
  q: "State the original and molecular Koch's postulates. Why do they fail to explain many modern infections, and what approaches have replaced them?",
  tags: ["Koch", "pathogenesis", "virulence", "theory"],
  answer: `
    <h4>The classical postulates</h4>
    <p>Robert Koch (1884) proposed four criteria: the organism must be found in all cases of the disease; it must be isolated and grown in pure culture; inoculation of the pure culture into a susceptible host must reproduce the disease; and the organism must be re-isolated from the experimentally infected host. These postulates established germ theory and remain the logical skeleton of medical microbiology.</p>
    <h4>Why they break down</h4>
    <ul>
      <li><strong>Asymptomatic carriage:</strong> <em>S. pneumoniae</em>, <em>N. meningitidis</em>, <em>C. difficile</em> and <em>E. coli</em> can be carried without disease, so "present in all cases" and "causes disease" are not equivalent.</li>
      <li><strong>Unculturable or fastidious agents:</strong> <em>Treponema pallidum</em>, <em>Mycobacterium leprae</em>, <em>Chlamydia</em> and most viruses cannot be grown in axenic culture.</li>
      <li><strong>Host and species specificity:</strong> many human pathogens do not infect standard laboratory animals; HIV, hepatitis viruses and <em>H. pylori</em> required primate, chimpanzee or human challenge models.</li>
      <li><strong>Polymicrobial and opportunistic infection:</strong> biofilms, aspiration pneumonia and intra-abdominal sepsis involve communities, not one organism.</li>
      <li><strong>Latency and chronic disease:</strong> herpesviruses, HPV and prions cause disease years after infection.</li>
      <li><strong>Ethics:</strong> deliberate human infection is largely impermissible.</li>
    </ul>
    <h4>Molecular Koch's postulates (Falkow, 1988)</h4>
    <p>A virulence gene should be (1) present in pathogenic strains and absent or inactive in non-pathogenic strains; (2) inactivated in a virulent strain, with loss of virulence; (3) reintroduced, restoring virulence; and (4) expressed during infection, with an immune response to the product. These allowed gene-level proof using isogenic mutants — for example <em>ctx</em> (cholera toxin), <em>yop</em> effectors and type III secretion systems.</p>
    <h4>What replaced them</h4>
    <p>Modern proof uses <strong>gnotobiotic and humanised mice, organoids and organ-on-chip models, CRISPR interference, saturating transposon mutagenesis (Tn-seq), dual RNA-seq, mendelian randomisation and human genetic studies</strong>, plus metagenomics and culture-independent sequencing. The damage–response framework now frames disease as the product of microbial damage and host response rather than microbial presence alone.</p>
  `,
  tip: "Name Falkow explicitly; examiners look for the four molecular criteria plus at least three limitations of the classical ones.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "f2", domain: "foundations", star: true,
  q: "Compare endotoxins and exotoxins. Classify exotoxins by their mechanism of action and give clinically important examples.",
  tags: ["toxins", "LPS", "sepsis", "AB toxin"],
  answer: `
    <h4>Endotoxin</h4>
    <p>Endotoxin is <strong>lipopolysaccharide (LPS)</strong> of the outer membrane of Gram-negative bacteria. Lipid A is the toxic moiety; it is released on bacterial lysis, is heat-stable, is not neutralised by antibody and does not form a toxoid. It signals through <strong>TLR4–MD2–CD14</strong>, triggering NF-κB and a cytokine storm (TNF-α, IL-1, IL-6). Low doses cause fever and leucocytosis; high doses cause hypotension, DIC, ARDS and septic shock. Because the effect is host-receptor mediated, potency varies between species and LPS chemotypes.</p>
    <h4>Exotoxins</h4>
    <p>Exotoxins are actively secreted proteins, heat-labile, highly specific, immunogenic and convertible to toxoids. They are encoded by chromosomal, plasmid or phage genes and are often the sole determinant of disease (diphtheria, tetanus, botulism, cholera).</p>
    <h4>Mechanistic classification</h4>
    <ul>
      <li><strong>Type I — membrane-acting, signalling:</strong> superantigens cross-link MHC-II and TCR Vβ, causing polyclonal T-cell activation (TSST-1, staphylococcal enterotoxins, streptococcal pyrogenic exotoxins); exfoliative toxins cleave desmoglein-1.</li>
      <li><strong>Type II — membrane-damaging:</strong> pore formers (staphylococcal α-haemolysin, streptolysin O, <em>E. coli</em> haemolysin, leukocidins such as Panton–Valentine leucocidin) and phospholipases (C. perfringens α-toxin).</li>
      <li><strong>Type III — intracellular, AB-type:</strong> a B subunit binds a receptor and an A subunit enters the cytosol. Examples: diphtheria toxin (ADP-ribosylates EF-2), <em>Pseudomonas</em> exotoxin A (same target), cholera toxin (ADP-ribosylates Gsα → cAMP), <em>E. coli</em> heat-labile toxin, pertussis toxin (Giα), Shiga toxin and Shiga-like toxins (28S rRNA depurination), anthrax edema factor (adenylate cyclase) and lethal factor (MAPKK protease).</li>
      <li><strong>Zinc metalloproteases:</strong> tetanospasmin and botulinum neurotoxin cleave SNARE proteins, blocking inhibitory or excitatory neurotransmitter release respectively.</li>
    </ul>
    <h4>Clinical translation</h4>
    <p>Toxoids (tetanus, diphtheria, pertussis) and antitoxins (botulism, diphtheria, anthrax) are possible only for exotoxins. Endotoxin is not amenable to vaccination; sepsis management is supportive, source control and antibiotic-mediated clearance, with avoidance of sudden massive LPS release in syphilitic or typhoid reactions.</p>
  `,
  tip: "A table is efficient: property | endotoxin | exotoxin, then three mechanistic classes with one example each.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "f3", domain: "foundations",
  q: "Explain the molecular mechanisms of bacterial adherence and invasion, with examples, and discuss how these steps can be targeted therapeutically.",
  tags: ["adhesins", "pili", "invasion", "vaccines"],
  answer: `
    <h4>Adherence</h4>
    <p>Adherence is the first committed step in mucosal colonisation and is mediated by <strong>adhesins</strong> that bind host glycoconjugates or extracellular matrix proteins.</p>
    <ul>
      <li><strong>Pili/fimbriae:</strong> uropathogenic <em>E. coli</em> type 1 pili (FimH binds mannosylated uroplakin) and P pili (PapG binds globoseries glycolipids); <em>N. gonorrhoeae</em> type IV pili mediate twitching motility and initial attachment.</li>
      <li><strong>MSCRAMMs:</strong> staphylococcal protein A, fibronectin-binding proteins A/B and clumping factor bind fibrinogen, fibronectin and collagen, promoting device and valve colonisation.</li>
      <li><strong>Non-pilus adhesins:</strong> streptococcal M protein and lipoteichoic acid, <em>H. pylori</em> BabA (Lewis b antigen) and SabA, <em>Bordetella</em> filamentous haemagglutinin.</li>
      <li><strong>Capsule and biofilm:</strong> polysaccharide capsules aid surface attachment and immune evasion; biofilm EPS provides durable adhesion.</li>
    </ul>
    <h4>Invasion</h4>
    <ul>
      <li><strong>Zipper mechanism:</strong> <em>Yersinia</em> invasin binds β1-integrins, or <em>Listeria</em> InlA binds E-cadherin and InlB binds c-Met, triggering local actin rearrangement and membrane engulfment.</li>
      <li><strong>Trigger mechanism:</strong> <em>Salmonella</em> SPI-1 type III secretion injects SopE/SopB/SipA, causing Rho-family GTPase activation, membrane ruffling and macropinocytosis.</li>
      <li><strong>Transcytosis and barrier crossing:</strong> <em>N. meningitidis</em> crosses the blood–brain barrier via type IV pili and Opa proteins; <em>Listeria</em> crosses the placenta and intestine.</li>
      <li><strong>Post-invasion niche:</strong> escape from the vacuole (<em>Listeria</em> listeriolysin O, <em>Shigella</em> IpaB) or remodelling of the vacuole (<em>Salmonella</em> SPI-2, <em>Legionella</em> Dot/Icm) determines intracellular survival and spread.</li>
    </ul>
    <h4>Therapeutic targeting</h4>
    <p>Anti-adhesion strategies include <strong>mannosides and pilicides</strong> that block FimH (preclinical, with the advantage of not killing bacteria and therefore less resistance selection), <strong>receptor analogues</strong> such as human milk oligosaccharides against <em>Campylobacter</em> and ETEC, and <strong>vaccines against colonisation factors</strong>. Monoclonal antibodies against <em>C. difficile</em> toxins and against <em>S. aureus</em> clumping factor have been trialled. Targeting invasion effectors (T3SS inhibitors) is attractive but has struggled in trials because of redundancy and because commensals also use these systems.</p>
  `,
  tip: "Contrast zipper vs trigger invasion — that distinction signals real understanding rather than a list.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "f4", domain: "foundations", star: true,
  q: "Describe biofilm formation and the mechanisms by which biofilms tolerate antibiotics and host defences. How should biofilm-associated infections be managed?",
  tags: ["biofilm", "device infection", "persisters"],
  answer: `
    <h4>Formation</h4>
    <p>Biofilms develop in five overlapping stages: <strong>(1) reversible attachment</strong> to a surface conditioned by host proteins; <strong>(2) irreversible adhesion</strong> mediated by pili, adhesins and polysaccharide; <strong>(3) microcolony formation and proliferation</strong>; <strong>(4) maturation</strong> with production of an extracellular polymeric substance (EPS) matrix composed of exopolysaccharides, proteins, lipids and extracellular DNA; and <strong>(5) dispersal</strong> of motile cells that seed new sites. Cyclic di-GMP is the central second messenger, with c-di-GMP-high cells adopting the sessile, matrix-producing state and c-di-GMP-low cells becoming motile.</p>
    <h4>Why biofilms tolerate treatment</h4>
    <ul>
      <li><strong>Diffusion limitation and drug sequestration:</strong> the matrix and charged polymers bind aminoglycosides and glycopeptides; β-lactamases accumulate in the matrix.</li>
      <li><strong>Metabolic dormancy:</strong> nutrient- and oxygen-limited inner layers contain slow-growing cells that are phenotypically tolerant to cell-wall agents; <strong>persister cells</strong> survive bactericidal exposure without genetic resistance.</li>
      <li><strong>Stress physiology:</strong> stringent response, SOS response, efflux pump up-regulation and altered membrane composition.</li>
      <li><strong>Immune evasion:</strong> impaired phagocyte penetration and killing, complement inactivation, and neutrophil frustration with release of damaging proteases.</li>
      <li><strong>Horizontal gene transfer:</strong> high local density favours plasmid exchange, accelerating resistance.</li>
    </ul>
    <h4>Clinical examples</h4>
    <p>Central-line-associated bloodstream infection, prosthetic valve endocarditis, joint prostheses, urinary catheters, ventriculoperitoneal shunts, chronic wounds, cystic fibrosis airways (<em>P. aeruginosa</em> mucoid phenotype), dental plaque and chronic osteomyelitis.</p>
    <h4>Management</h4>
    <p><strong>Source control is decisive</strong>: remove or exchange the device whenever feasible. Where retention is necessary, use antibiotic lock therapy, combination regimens with biofilm-active agents (for staphylococci, rifampicin plus a second agent; for Gram-negatives, a β-lactam with an aminoglycoside or colistin, guided by susceptibility), and consider adjuncts such as DNase, dispersin B, chelators, bacteriophage and antiseptics. Standard MIC testing does not predict biofilm eradication; minimum biofilm eradication concentration (MBEC) assays and confocal microscopy are research tools. Prevention — aseptic insertion, chlorhexidine-impregnated dressings, antimicrobial catheters and early removal — is more effective than treating established biofilm.</p>
  `,
  tip: "Emphasise that biofilm resistance is phenotypic tolerance, not just MIC resistance — this is the sentence examiners reward.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "f5", domain: "foundations",
  q: "What is quorum sensing? Describe its principal molecular systems and evaluate quorum-sensing inhibition as an antimicrobial strategy.",
  tags: ["quorum sensing", "virulence regulation", "anti-virulence"],
  answer: `
    <h4>Concept</h4>
    <p>Quorum sensing (QS) is cell-density-dependent gene regulation: bacteria secrete small signalling molecules (autoinducers) that accumulate in proportion to population density; above a threshold they bind regulators and reprogram transcription. QS coordinates <strong>public goods</strong> — exoenzymes, siderophores, toxins, biofilm matrix — so that they are produced only when the population is large enough to benefit, and it controls competence, sporulation, bioluminescence and virulence.</p>
    <h4>Principal systems</h4>
    <ul>
      <li><strong>LuxI/LuxR (acyl-homoserine lactones, AI-1):</strong> Gram-negative paradigm; LuxI synthesises the AHL, which diffuses or is transported and binds LuxR. <em>Pseudomonas aeruginosa</em> uses LasI/LasR and RhlI/RhlR, plus the <em>Pseudomonas</em> quinolone signal (PQS), arranged hierarchically.</li>
      <li><strong>AI-2/LuxS:</strong> a furanosyl borate diester derived from S-ribosylhomocysteine, proposed as an interspecies signal; its role varies by species and is debated.</li>
      <li><strong>Autoinducing peptides (AIPs) with two-component systems:</strong> Gram-positive <em>agr</em> system of <em>S. aureus</em>; AIP activates AgrC/AgrA, driving RNAIII and toxin expression while down-regulating surface adhesins — an example of density-dependent virulence switching.</li>
      <li><strong>Other signals:</strong> <em>Vibrio cholerae</em> CAI-1 and AI-2, <em>Bacillus</em> competence pheromone, <em>Candida</em> farnesol and tyrosol.</li>
    </ul>
    <h4>Quorum quenching</h4>
    <p>Strategies include <strong>signal degradation</strong> (lactonases, acylases), <strong>signal synthesis inhibition</strong>, <strong>receptor antagonists</strong> (AIP analogues, LasR inhibitors), <strong>antibody sequestration</strong> and <strong>engineered probiotics</strong>. Because QS inhibition targets virulence rather than viability, it is predicted to exert less selection for resistance and to spare the microbiota — attractive for <em>P. aeruginosa</em> and <em>S. aureus</em>.</p>
    <h4>Caveats</h4>
    <p>Efficacy in animal models has not translated consistently to trials; QS networks are redundant, inhibitors may be toxic or unstable, and some "quorum quenching" effects are due to growth inhibition. Resistance to QS inhibitors can emerge through receptor mutation or bypass pathways. The realistic niche is <strong>adjunctive anti-virulence therapy</strong>, not replacement for antibiotics.</p>
  `,
  tip: "Use P. aeruginosa Las/Rhl and S. aureus agr as the two contrasting paradigms.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "f6", domain: "foundations", star: true,
  q: "Compare the strategies used by intracellular bacterial pathogens to survive within host cells, giving specific organisms and the implications for diagnosis and treatment.",
  tags: ["intracellular", "phagosome", "Listeria", "Mycobacterium"],
  answer: `
    <h4>Why intracellular life</h4>
    <p>The intracellular niche provides protection from antibodies and complement, a nutrient-rich environment and a platform for dissemination. Pathogens must avoid or exploit phagocyte killing: they either prevent phagosome maturation, escape into the cytosol, or adapt to the phagolysosome.</p>
    <h4>Strategies and examples</h4>
    <ul>
      <li><strong>Block phagosome–lysosome fusion:</strong> <em>Mycobacterium tuberculosis</em> arrests maturation through mannose-capped lipoarabinomannan, ESX-1, protein kinase G and phosphatidylinositol analogues, and resists reactive oxygen/nitrogen species; it can also egress by necrotic lysis.</li>
      <li><strong>Remodel the vacuole into a replicative niche:</strong> <em>Legionella pneumophila</em> uses the Dot/Icm type IV secretion system to recruit ER-derived vesicles and ribosomes, creating a <em>Legionella</em>-containing vacuole; <em>Coxiella burnetii</em> thrives in the acidic phagolysosome.</li>
      <li><strong>Escape to the cytosol:</strong> <em>Listeria monocytogenes</em> uses listeriolysin O and phospholipases to rupture the vacuole, then ActA-mediated actin polymerisation for cell-to-cell spread; <em>Shigella flexneri</em> escapes via IpaB/IpaC and spreads with IcsA; <em>Rickettsia</em> escapes early and replicates free in the cytosol.</li>
      <li><strong>Inclusion body:</strong> <em>Chlamydia trachomatis</em> resides in a non-fusogenic inclusion, intercepting Golgi-derived sphingolipids and blocking apoptosis and NF-κB.</li>
      <li><strong>Modify the phagosome:</strong> <em>Salmonella</em> SPI-2 effectors build a <em>Salmonella</em>-containing vacuole supporting replication; <em>Brucella</em> redirects trafficking to a replication-permissive compartment.</li>
    </ul>
    <h4>Immune evasion consequences</h4>
    <p>Intracellular residence limits antibody access, so protection depends on <strong>cell-mediated immunity</strong> (IFN-γ, TNF, CD4 and CD8 T cells, NK cells). This explains the severity of TB, salmonellosis, listeriosis and chlamydial infection in HIV and in biologic-treated patients, and the reactivation of latent infection.</p>
    <h4>Diagnostic and therapeutic implications</h4>
    <p>Diagnosis often requires <strong>nucleic acid amplification</strong> or culture of normally sterile sites, because serology cannot distinguish exposure from active intracellular infection. Effective drugs need <strong>intracellular penetration and activity at the niche pH</strong>: macrolides, tetracyclines, fluoroquinolones, rifampicin, linezolid and co-trimoxazole. β-lactams are unreliable for <em>Listeria</em>, <em>Mycobacterium</em> and <em>Chlamydia</em>. Prolonged combination therapy and adjunctive IFN-γ (in selected inherited susceptibility) may be needed.</p>
  `,
  tip: "Organise by mechanism, not by organism: block fusion, remodelling, escape, inclusion, phagolysosomal adaptation.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "f7", domain: "foundations",
  q: "Discuss the human microbiota and colonisation resistance. How does antibiotic-induced dysbiosis lead to disease, and what are the therapeutic implications?",
  tags: ["microbiota", "dysbiosis", "C. difficile", "FMT"],
  answer: `
    <h4>The microbiota</h4>
    <p>The human body hosts roughly 10<sup>13</sup>–10<sup>14</sup> microorganisms, dominated in the colon by <em>Bacteroidetes</em> and <em>Firmicutes</em>, with <em>Actinobacteria</em>, <em>Proteobacteria</em> and archaea. Composition is shaped by delivery mode, breastfeeding, diet, geography, drugs and immunity, and is relatively stable in adults but highly individual. The microbiota contributes to nutrient metabolism (short-chain fatty acids, vitamin K, bile acid transformation), epithelial barrier integrity, immune maturation (segmented filamentous bacteria and Th17 induction, Treg induction by <em>Clostridiales</em>) and <strong>colonisation resistance</strong>.</p>
    <h4>Mechanisms of colonisation resistance</h4>
    <ul>
      <li><strong>Nutrient competition</strong> and competition for attachment sites.</li>
      <li><strong>Production of inhibitory molecules:</strong> bacteriocins, short-chain fatty acids that lower luminal pH, secondary bile acids, hydrogen peroxide and nitric oxide.</li>
      <li><strong>Direct antagonism</strong> via type VI secretion and phage.</li>
      <li><strong>Immune stimulation:</strong> tonic TLR signalling, IgA production and antimicrobial peptide release maintain a poised barrier.</li>
    </ul>
    <h4>Dysbiosis and disease</h4>
    <p>Broad-spectrum antibiotics collapse anaerobes and open a niche for <strong><em>Clostridioides difficile</em></strong>, whose toxins A and B cause colitis; the same niche effect permits colonisation by vancomycin-resistant enterococci, ESBL-producing Enterobacterales and <em>Candida</em>. Dysbiosis is associated with inflammatory bowel disease, obesity, insulin resistance, allergy, hepatic encephalopathy and graft-versus-host disease, although causality is often inferential.</p>
    <h4>Therapeutic implications</h4>
    <p><strong>Antimicrobial stewardship</strong> is the first intervention: use the narrowest agent for the shortest duration. <strong>Faecal microbiota transplantation</strong> is highly effective for recurrent <em>C. difficile</em> infection (roughly 80–90% cure) and is now delivered as encapsulated or defined microbial products. <strong>Probiotics</strong> have strain-specific, modest evidence (e.g. <em>Saccharomyces boulardii</em> and <em>Lactobacillus rhamnosus</em> GG for antibiotic-associated diarrhoea) and carry risk in critical illness. <strong>Prebiotics, postbiotics, phage and engineered consortia</strong> are under study. Avoid indiscriminate probiotic use and remember that the microbiome is a reservoir of resistance genes (the resistome).</p>
  `,
  tip: "Link colonisation resistance to C. difficile and VRE — the classic exam chain from antibiotic to dysbiosis to disease.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "f8", domain: "foundations",
  q: "Describe the mechanisms of horizontal gene transfer in bacteria and explain how mobile genetic elements drive the spread of antimicrobial resistance.",
  tags: ["HGT", "plasmids", "integrons", "resistance"],
  answer: `
    <h4>Three canonical mechanisms</h4>
    <ul>
      <li><strong>Transformation:</strong> uptake of naked DNA from the environment by competent cells (<em>S. pneumoniae</em>, <em>N. meningitidis</em>, <em>H. influenzae</em>, <em>Bacillus</em>). Competence is induced by QS or stress and is a route for mosaic <em>pbp</em> genes and penicillin resistance.</li>
      <li><strong>Transduction:</strong> bacteriophage-mediated transfer of bacterial DNA. Generalized transduction transfers random chromosomal fragments; specialised transduction transfers genes adjacent to a prophage. Examples include <em>sxt</em> in <em>V. cholerae</em>, Shiga toxin genes in <em>E. coli</em> O157, and <em>mecA</em> via staphylococcal phage.</li>
      <li><strong>Conjugation:</strong> contact-dependent transfer of a plasmid or integrative conjugative element through a type IV secretion system. This is the dominant route for resistance in Gram-negatives and drives outbreaks of carbapenemase-producing Enterobacterales.</li>
    </ul>
    <h4>Mobile genetic elements</h4>
    <ul>
      <li><strong>Insertion sequences (IS)</strong> and <strong>composite transposons</strong> move genes within and between replicons; they can activate or disrupt genes and create hybrid promoters.</li>
      <li><strong>Integrons</strong> capture gene cassettes by site-specific recombination and express them from a single promoter; class 1 integrons are strongly associated with multidrug resistance in Gram-negatives.</li>
      <li><strong>Plasmids</strong> range from small cryptic replicons to conjugative megaplasmids carrying multiple resistance genes; IncF, IncI, IncA/C and IncX plasmids are important in <em>Enterobacterales</em>.</li>
      <li><strong>Genomic islands, SCC<i>mec</i>, ICE</strong> integrate into the chromosome; SCC<i>mec</i> carries <em>mecA</em> and its variants.</li>
      <li><strong>Bacteriophages</strong> act as vectors and as reservoirs of accessory genes.</li>
    </ul>
    <h4>Clinical consequences</h4>
    <p>Resistance genes are frequently <strong>co-located and co-selected</strong>: a plasmid may carry ESBL, aminoglycoside and fluoroquinolone determinants, so use of one drug selects for resistance to several. Examples include CTX-M-15 on IncF plasmids, NDM-1 on broad-host-range plasmids, <em>vanA</em> on Tn<i>1546</i>, and <em>mcr-1</em> colistin resistance on IncI2 plasmids. Whole-genome sequencing and plasmid typing now track transmission in outbreaks and can distinguish clonal spread from plasmid dissemination.</p>
    <h4>Control</h4>
    <p>Because HGT is independent of reproduction, infection control, antibiotic stewardship and restriction of colistin and carbapenem use in agriculture are essential. Gene-editing and CRISPR-based plasmid curing are experimental; the practical lever remains reducing selection pressure and preventing transmission.</p>
  `,
  tip: "Mention co-selection on the same plasmid — it explains why treating one organism can select resistance in another.",
  sources: ["S1", "S7", "S13"]
},
{
  id: "f9", domain: "foundations", star: true,
  q: "Explain the damage–response framework and evaluate its advantages over classical concepts of pathogenicity. Illustrate with commensals that become pathogens.",
  tags: ["damage-response", "commensalism", "pathogenicity"],
  answer: `
    <h4>The framework</h4>
    <p>Casadevall and Pirofski proposed that infectious disease is the outcome of two variables: <strong>microbial damage</strong> and the <strong>host damage response</strong>. The interaction is plotted on a grid from no damage to severe damage, and the host response may be protective, damaging or absent. "Pathogen" and "commensal" become positions on a continuum rather than fixed properties of an organism.</p>
    <h4>Six outcomes</h4>
    <p>Depending on the two axes, the outcome can be <strong>commensalism</strong> (colonisation, no damage), <strong>colonisation</strong> with a robust response, <strong>latency</strong>, <strong>subclinical infection</strong>, <strong>disease</strong>, or <strong>damage caused primarily by the host response</strong>. The last category includes immunopathology such as tuberculosis cavities, sepsis-related organ injury and immune reconstitution inflammatory syndrome.</p>
    <h4>Advantages over classical concepts</h4>
    <ul>
      <li>Accommodates <strong>asymptomatic carriage</strong> and the fact that the same organism can be harmless or lethal.</li>
      <li>Explains <strong>opportunistic infection</strong> in immunocompromise without inventing a new "pathogen".</li>
      <li>Makes the <strong>host response</strong> a therapeutic target (e.g. corticosteroids in pneumococcal meningitis, anti-TNF in selected inflammatory states, immunomodulation in sepsis).</li>
      <li>Fits <strong>polymicrobial and biofilm disease</strong> and the role of the microbiota.</li>
      <li>Discourages treating colonisation and encourages <strong>diagnostic stewardship</strong>.</li>
    </ul>
    <h4>Illustrations</h4>
    <p><em>Staphylococcus aureus</em> colonises the nares harmlessly but causes bacteraemia, endocarditis and toxic shock when barriers break or a virulent strain with toxins is present. <em>Candida albicans</em> is a commensal of the gut but causes candidaemia in critical illness and neutropenia. <em>C. difficile</em> colonises without disease in some carriers and causes pseudomembranous colitis when toxin production and dysbiosis coincide. <em>E. coli</em> is a commensal but UPEC and EHEC pathotypes cause disease through acquired virulence loci. <em>H. pylori</em> causes chronic gastritis in most carriers but only a minority develop ulcer or cancer, reflecting host genetics and bacterial <em>cagA</em>/<em>vacA</em> status.</p>
    <h4>Limitations</h4>
    <p>The framework is descriptive rather than predictive; it does not specify how to measure "damage" or "response", and it can be difficult to operationalise at the bedside. It is best used as a conceptual corrective to the one-organism-one-disease model.</p>
  `,
  tip: "Use S. aureus nasal carriage and C. difficile as the two cleanest illustrations of the continuum.",
  sources: ["S1", "S4", "S13"]
}
);
