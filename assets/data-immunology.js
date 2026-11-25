window.QBANK.push(
{
  id: "i1", domain: "immunology", star: true,
  q: "Describe innate immune recognition of microorganisms. How do pattern-recognition receptors discriminate self from non-self, and how do pathogens subvert these pathways?",
  tags: ["innate immunity", "PRR", "TLR", "inflammasome"],
  answer: `
    <h4>Recognition logic</h4>
    <p>Innate immunity recognises invariant molecular patterns that are essential for microbial survival and absent from host cells. <strong>PAMPs</strong> (pathogen-associated molecular patterns) include LPS, peptidoglycan, lipoteichoic acid, flagellin, bacterial CpG DNA, double-stranded RNA, 5′-triphosphate RNA, β-glucan, mannan and viral glycoproteins. <strong>DAMPs</strong> (damage-associated molecular patterns) such as ATP, HMGB1, mitochondrial DNA and uric acid signal tissue injury. The receptors are germline-encoded <strong>pattern-recognition receptors (PRRs)</strong>.</p>
    <h4>PRR families and location</h4>
    <ul>
      <li><strong>Toll-like receptors (TLRs):</strong> plasma membrane TLR1/2/6 (lipopeptides), TLR4 (LPS), TLR5 (flagellin); endosomal TLR3 (dsRNA), TLR7/8 (ssRNA), TLR9 (CpG DNA). Signalling through MyD88 and TRIF activates NF-κB, IRFs and MAPKs.</li>
      <li><strong>NOD-like receptors (NLRs):</strong> cytosolic sensors; NOD1/2 detect peptidoglycan fragments and activate NF-κB; NLRP3 assembles the <strong>inflammasome</strong> with ASC and caspase-1, releasing IL-1β and IL-18 and causing pyroptosis.</li>
      <li><strong>RIG-I-like receptors:</strong> cytosolic viral RNA sensors driving type I interferon.</li>
      <li><strong>C-type lectin receptors:</strong> dectin-1 (β-glucan), mannose receptor, DC-SIGN — important for fungi.</li>
      <li><strong>cGAS–STING:</strong> cytosolic DNA sensing and interferon induction.</li>
    </ul>
    <h4>Self versus non-self</h4>
    <p>Discrimination depends on <strong>location</strong> (nucleic acids in the cytosol or endosome are abnormal), <strong>molecular structure</strong> (unmethylated CpG, 5′-triphosphate RNA, β-glucan), <strong>multivalency and avidity</strong>, and <strong>regulatory phosphatases</strong> that prevent spontaneous activation. Host nucleic acids are modified and compartmentalised; failure of these checks causes autoinflammation (e.g. STING-associated vasculopathy, Aicardi–Goutières syndrome).</p>
    <h4>Subversion</h4>
    <p>Pathogens evade detection by <strong>modifying PAMPs</strong> (LPS lipid A modification in <em>Salmonella</em>, peptidoglycan O-acetylation), <strong>shielding</strong> (capsules, biofilm), <strong>blocking signalling</strong> (YopJ acetylates MAPK kinases; <em>Shigella</em> OspF modifies histones; viral proteins target MAVS, TBK1 and IRF3), <strong>degrading cytokines</strong>, and <strong>inhibiting inflammasome activation</strong>. This is why innate sensing is a major vaccine adjuvant target and why polymorphisms in PRR pathways alter susceptibility.</p>
  `,
  tip: "Pair each PRR family with one ligand and one subversion example; that turns a list into an argument.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i2", domain: "immunology", star: true,
  q: "Compare the three complement activation pathways. What are their effector functions, how are they regulated, and what happens when they are deficient?",
  tags: ["complement", "opsonisation", "MAC", "deficiency"],
  answer: `
    <h4>Pathways</h4>
    <ul>
      <li><strong>Classical:</strong> C1q binds IgG or IgM on a microbial surface, activating C1r/C1s, which cleave C4 and C2 to form the C3 convertase C4b2a. It is antibody-dependent and important for adaptive–innate linkage.</li>
      <li><strong>Lectin:</strong> mannose-binding lectin (MBL) or ficolins bind microbial carbohydrate arrays and activate MASPs, generating the same C4b2a convertase. It is antibody-independent and active in early childhood before antibody maturation.</li>
      <li><strong>Alternative:</strong> spontaneous tick-over of C3 to C3(H<sub>2</sub>O) allows factor B binding and factor D cleavage, forming C3bBb. It amplifies on surfaces lacking regulators and is the major amplification loop.</li>
    </ul>
    <h4>Effector functions</h4>
    <p>All pathways converge on <strong>C3 convertase</strong>, producing C3b for opsonisation and C5 convertase, which generates C5a (anaphylatoxin and neutrophil chemoattractant) and C5b, seeding the <strong>membrane attack complex C5b-9</strong> that lyses Gram-negatives and enveloped viruses. C3a and C5a drive inflammation and mast cell degranulation. Opsonisation via CR1/CR3 is the dominant anti-bacterial function; the MAC is comparatively more important for <em>Neisseria</em>.</p>
    <h4>Regulation</h4>
    <p>Host cells are protected by <strong>factor H, factor I, C4-binding protein, decay-accelerating factor (CD55), membrane cofactor protein (CD46) and CD59</strong>. Failure of regulation causes paroxysmal nocturnal haemoglobinuria (CD55/CD59 loss) and atypical haemolytic uraemic syndrome (factor H dysfunction).</p>
    <h4>Deficiency syndromes</h4>
    <ul>
      <li><strong>Classical pathway (C1, C2, C4):</strong> immune-complex disease, SLE-like illness, encapsulated bacterial infections.</li>
      <li><strong>C3 deficiency:</strong> severe recurrent pyogenic infections with encapsulated organisms.</li>
      <li><strong>Terminal pathway (C5–C9):</strong> recurrent <em>Neisseria</em> meningitidis and disseminated gonococcal infection; eculizumab therapy reproduces this risk and requires meningococcal vaccination.</li>
      <li><strong>MBL deficiency:</strong> usually mild, relevant in young children and co-existing immunodeficiency.</li>
    </ul>
    <p>Pathogens counter complement with capsules, protein A (binds Fc), streptococcal M protein (binds factor H), <em>Pseudomonas</em> elastase (cleaves C3), and viral complement-control-protein mimics (vaccinia VCP, herpesvirus homologues).</p>
  `,
  tip: "The C5–C9 → Neisseria link and eculizumab are classic viva discriminators.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i3", domain: "immunology",
  q: "Describe the structure and functions of the five immunoglobulin classes. How do antibodies contribute to protection against extracellular bacteria and viruses?",
  tags: ["antibody", "IgG", "IgA", "opsonisation"],
  answer: `
    <h4>Structure</h4>
    <p>Immunoglobulins are Y-shaped tetramers of two heavy and two light chains. The <strong>Fab</strong> region carries the antigen-binding variable domains; the <strong>Fc</strong> region determines isotype, complement activation, Fc-receptor binding and placental transport. Class switching changes the heavy chain while preserving antigen specificity; affinity maturation occurs by somatic hypermutation in germinal centres.</p>
    <h4>The five classes</h4>
    <ul>
      <li><strong>IgM:</strong> pentamer (plus J chain), highest avidity, potent complement activator; the first antibody in primary infection and a marker of recent exposure. It is largely intravascular.</li>
      <li><strong>IgG:</strong> monomer, dominant in serum and tissue, four subclasses; opsonises via Fcγ receptors, activates complement (IgG1/3 > IgG2/4), neutralises toxins and viruses, and crosses the placenta (IgG1 > IgG3 > IgG4 > IgG2).</li>
      <li><strong>IgA:</strong> monomer in serum, dimer with secretory component at mucosa; neutralises pathogens and toxins in the lumen, blocks adhesion, and is the main antibody in breast milk.</li>
      <li><strong>IgE:</strong> monomer, binds mast cells and basophils via FcεRI; central to helminth defence and type I hypersensitivity.</li>
      <li><strong>IgD:</strong> membrane-bound on naive B cells; function in humans is incompletely understood.</li>
    </ul>
    <h4>Protective mechanisms</h4>
    <p>Antibodies <strong>neutralise</strong> viruses and toxins by blocking receptor binding; <strong>opsonise</strong> bacteria for phagocytosis; <strong>activate complement</strong> (IgM, IgG1/3) to generate C3b and the MAC; <strong>agglutinate</strong> organisms; <strong>prevent adherence</strong> at mucosa (IgA); and mediate <strong>ADCC</strong> through NK cells. For viruses, neutralisation of entry and Fc-mediated clearance of infected cells are both important. Antibody-dependent enhancement (ADE) can paradoxically worsen dengue and has been a concern in vaccine design.</p>
    <h4>Clinical correlations</h4>
    <p>Agammaglobulinaemia causes recurrent sinopulmonary infection with encapsulated bacteria; selective IgA deficiency is common and often asymptomatic; maternal IgG protects the neonate for the first months. Monoclonal antibodies are used therapeutically (palivizumab for RSV, obiltoxaximab for anthrax, bezlotoxumab for <em>C. difficile</em> toxin B).</p>
  `,
  tip: "Link each isotype to a function and a clinical scenario rather than reciting concentrations.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i4", domain: "immunology", star: true,
  q: "Explain the roles of CD4 T-helper subsets, CD8 cytotoxic T cells and memory T cells in antimicrobial defence. What is T-cell exhaustion?",
  tags: ["T cells", "Th1", "Th17", "exhaustion"],
  answer: `
    <h4>Antigen presentation</h4>
    <p>Dendritic cells process exogenous antigen onto <strong>MHC class II</strong> for CD4<sup>+</sup> T cells and endogenous antigen onto <strong>MHC class I</strong> for CD8<sup>+</sup> T cells. Costimulation (CD80/86–CD28) and cytokine polarisation determine the effector programme; without costimulation, tolerance ensues.</p>
    <h4>CD4 subsets</h4>
    <ul>
      <li><strong>Th1</strong> (IL-12 → T-bet; IFN-γ, TNF): activates macrophages and NK cells, essential for mycobacteria, <em>Salmonella</em>, <em>Leishmania</em> and <em>Cryptococcus</em>. Dominant in granuloma formation.</li>
      <li><strong>Th2</strong> (IL-4 → GATA3; IL-4, IL-5, IL-13): helminth defence, eosinophilia, mast cell/IgE responses, alternative macrophage activation; also drives allergy.</li>
      <li><strong>Th17</strong> (IL-6/TGF-β → RORγt; IL-17, IL-22): recruits neutrophils and induces antimicrobial peptides at mucosa; critical for <em>Candida</em>, <em>S. aureus</em>, <em>Klebsiella</em> and extracellular bacteria; dysregulated Th17 causes autoimmunity.</li>
      <li><strong>T follicular helper (Tfh)</strong> (IL-21): germinal centre formation, class switching and affinity maturation — the bridge to humoral immunity.</li>
      <li><strong>Treg</strong> (FoxP3; IL-10, TGF-β): limits immunopathology and maintains tolerance; also a barrier to pathogen clearance in chronic infection.</li>
    </ul>
    <h4>CD8 cytotoxic T cells</h4>
    <p>CD8<sup>+</sup> CTLs recognise MHC-I–peptide complexes on infected cells and kill via <strong>perforin/granzyme</strong> and <strong>Fas–FasL</strong>, and secrete IFN-γ and TNF. They are essential for viral clearance (influenza, HSV, CMV, HIV, HCV), for intracellular bacteria that escape to the cytosol (<em>Listeria</em>, <em>Shigella</em>) and for <em>Mycobacterium</em> and <em>Plasmodium</em> liver-stage control.</p>
    <h4>Memory</h4>
    <p>Central memory T cells (T<sub>CM</sub>) recirculate through lymph nodes and provide proliferative reserve; effector memory (T<sub>EM</sub>) patrol tissues; tissue-resident memory (T<sub>RM</sub>) sits at mucosal barriers and provides rapid local protection. Memory is the basis of vaccine efficacy and of heterologous protection.</p>
    <h4>Exhaustion</h4>
    <p>Persistent antigen and inflammation up-regulate inhibitory receptors (<strong>PD-1, CTLA-4, TIM-3, LAG-3, TIGIT</strong>), impair proliferation and cytokine production, and alter metabolism. Exhaustion limits immunopathology but permits viral persistence (HIV, HCV, HBV) and tumour escape. Checkpoint blockade can restore function but may cause immune-related toxicity, and in chronic viral infection it can trigger immunopathology.</p>
  `,
  tip: "Th1–macrophage axis for TB and Th17–neutrophil axis for Candida are the highest-yield pairings.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i5", domain: "immunology", star: true,
  q: "Discuss the principal immune-evasion strategies employed by pathogens. Illustrate each with a specific organism or virus.",
  tags: ["immune evasion", "antigenic variation", "latency"],
  answer: `
    <h4>1. Avoid recognition</h4>
    <p><strong>Capsules</strong> (pneumococcus, meningococcus, <em>Klebsiella</em>) resist phagocytosis and complement; <strong>protein A</strong> of <em>S. aureus</em> binds Fc and reverses antibody orientation; <strong>M protein</strong> binds factor H and fibrinogen. Viruses down-regulate MHC-I (HIV Nef, HSV ICP47, CMV US2/US11, KSHV) to escape CD8 recognition, though this exposes them to NK cells — which they also inhibit via HLA-E mimics.</p>
    <h4>2. Antigenic variation</h4>
    <p><em>Neisseria gonorrhoeae</em> phase-varies pilin and Opa genes by recombination; <em>Borrelia burgdorferi</em> switches <em>vlsE</em>; <em>Trypanosoma brucei</em> uses <strong>variant surface glycoprotein</strong> gene conversion; influenza undergoes <strong>antigenic drift</strong> (point mutations) and <strong>shift</strong> (reassortment); HIV Env is hypervariable and heavily glycosylated. These strategies defeat strain-specific immunity and complicate vaccine design.</p>
    <h4>3. Interfere with innate and adaptive signalling</h4>
    <p>Yersinia YopJ/YopP inhibit MAPK and NF-κB; <em>Shigella</em> OspF modifies histones; poxviruses encode soluble cytokine receptors and complement control proteins; herpesviruses encode Fc receptors and IL-10 homologues; measles and influenza block interferon induction; <em>Mycobacterium tuberculosis</em> inhibits phagosome maturation and IFN-γ signalling.</p>
    <h4>4. Hide or persist</h4>
    <p><strong>Latency</strong> (HSV in sensory ganglia, VZV, EBV in B cells, CMV, HIV provirus in resting CD4 cells) provides a reservoir invisible to immunity and drugs. <strong>Intracellular residence</strong> (TB, <em>Listeria</em>, <em>Chlamydia</em>) shields from antibody. <strong>Biofilms</strong> and <strong>prion-like aggregates</strong> add further protection. <strong>Immunologically privileged sites</strong> (CNS, eye, testis, placenta) limit surveillance.</p>
    <h4>5. Mislead or suppress the response</h4>
    <p>Superantigens cause non-specific T-cell activation (TSST-1); <em>Helicobacter pylori</em> induces Tregs; chronic viruses drive <strong>T-cell exhaustion</strong>; HIV depletes CD4 cells; <em>Leishmania</em> and <em>Toxoplasma</em> manipulate macrophage polarisation; some helminths skew to Th2 and regulatory responses.</p>
    <h4>Implications</h4>
    <p>Evasion explains <strong>persistence, reactivation, reinfection and vaccine failure</strong>, and argues for combination strategies: vaccines that induce tissue-resident and broadly neutralising responses, latency-reversing agents with immunotherapy, and host-directed therapies that restore phagocyte function.</p>
  `,
  tip: "One organism per strategy, and finish with the therapeutic consequence — that is what separates a first-class answer.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "i6", domain: "immunology", star: true,
  q: "Using named examples, explain how primary immunodeficiencies predispose to specific classes of infection. What is the diagnostic approach?",
  tags: ["immunodeficiency", "SCID", "CGD", "CVID"],
  answer: `
    <h4>Principle</h4>
    <p>The pattern of infection localises the immune defect. Recurrent <strong>encapsulated bacterial</strong> infection suggests antibody or complement deficiency; <strong>intracellular and opportunistic</strong> infection suggests T-cell or phagocyte defects; <strong>neisserial</strong> disease suggests terminal complement; <strong>recurrent staphylococcal and fungal</strong> abscesses suggest phagocyte or Th17 defects.</p>
    <h4>Named disorders</h4>
    <ul>
      <li><strong>Severe combined immunodeficiency (SCID)</strong> — defects in <em>IL2RG</em>, <em>JAK3</em>, <em>RAG1/2</em>, <em>ADA</em>: failure of T (and often B/NK) cell development; present in infancy with failure to thrive, chronic diarrhoea, <em>Pneumocystis</em>, CMV, candida and live-vaccine complications. Emergency: no live vaccines, protective isolation, HSCT.</li>
      <li><strong>X-linked agammaglobulinaemia (BTK)</strong> — absent B cells and immunoglobulin; recurrent sinopulmonary infection with pneumococcus, <em>Haemophilus</em>, <em>Mycoplasma</em>; enteroviruses cause meningoencephalitis.</li>
      <li><strong>Common variable immunodeficiency</strong> — hypogammaglobulinaemia with impaired antibody responses; recurrent respiratory infection, bronchiectasis, giardiasis, autoimmunity and lymphoma.</li>
      <li><strong>Chronic granulomatous disease</strong> — NADPH oxidase defect; catalase-positive organisms: <em>S. aureus</em>, <em>Serratia</em>, <em>Burkholderia</em>, <em>Nocardia</em>, <em>Aspergillus</em>; granulomas and abscesses.</li>
      <li><strong>IL-12/IFN-γ pathway defects</strong> — disseminated mycobacterial and non-typhoidal <em>Salmonella</em> infection (MSMD).</li>
      <li><strong>IRAK4/MyD88 deficiency</strong> — recurrent pyogenic bacterial infection, especially pneumococcal, with impaired TLR signalling but preserved adaptive immunity.</li>
      <li><strong>Terminal complement (C5–C9)</strong> — recurrent <em>Neisseria</em>.</li>
      <li><strong>DiGeorge syndrome</strong> — thymic hypoplasia, T-cell deficiency, hypocalcaemia, cardiac defects.</li>
      <li><strong>Wiskott–Aldrich</strong> — eczema, thrombocytopenia, immunodeficiency; <em>WAS</em> gene.</li>
    </ul>
    <h4>Diagnostic approach</h4>
    <p>History (age of onset, organism, vaccine reactions, family history, consanguinity), then <strong>full blood count with lymphocyte subsets, immunoglobulin levels and specific antibody titres, complement CH50/AP50, neutrophil oxidative burst (DHR), HIV testing</strong>, and genetic testing (panel or exome). Newborn screening for SCID uses T-cell receptor excision circles (TRECs). Early recognition matters because HSCT, immunoglobulin replacement and antimicrobial prophylaxis are disease-modifying.</p>
  `,
  tip: "Anchor each defect to the infection pattern: antibody → encapsulated; T cell → opportunistic; phagocyte → catalase-positive; complement → Neisseria.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i7", domain: "immunology", star: true,
  q: "Classify vaccines by platform and explain the immunological basis of each. What are correlates of protection, adjuvants and the main obstacles to vaccine development?",
  tags: ["vaccines", "adjuvant", "conjugate", "correlates"],
  answer: `
    <h4>Platforms</h4>
    <ul>
      <li><strong>Live attenuated:</strong> BCG, MMR, varicella, yellow fever, oral polio, rotavirus. Replication mimics infection and induces durable humoral and cellular memory, including mucosal immunity; risk in immunocompromise and pregnancy.</li>
      <li><strong>Inactivated whole-organism:</strong> influenza (some), hepatitis A, rabies, pertussis (whole-cell), polio (IPV). Safe but less immunogenic, requiring adjuvant and boosting.</li>
      <li><strong>Subunit, toxoid and polysaccharide:</strong> tetanus/diphtheria toxoids, acellular pertussis, HPV VLP, hepatitis B surface antigen. Pure polysaccharides are T-independent, give poor memory and weak infant responses — hence <strong>conjugate</strong> vaccines (Hib, pneumococcal, meningococcal) that recruit Tfh help and induce boostable, herd-protective immunity.</li>
      <li><strong>Viral vectors:</strong> adenovirus, MVA, vesicular stomatitis virus; strong CD8 induction, limited by anti-vector immunity.</li>
      <li><strong>mRNA and DNA:</strong> lipid nanoparticle mRNA (COVID-19) delivers antigen and intrinsic adjuvant signals; rapid design, but cold-chain and reactogenicity issues.</li>
      <li><strong>Virus-like particles and nanoparticle platforms:</strong> HPV, hepatitis B, some COVID and malaria candidates.</li>
    </ul>
    <h4>Immunological basis and correlates</h4>
    <p>Protection can be antibody-mediated (neutralisation, opsonisation), cell-mediated (CTL, Th1), or both. A <strong>correlate of protection</strong> is a measurable immune marker predicting protection — anti-HBs ≥10 mIU/mL, serum bactericidal antibody for meningococcus, haemagglutination inhibition for influenza, anti-measles IgG. For TB and HIV, no validated correlate exists, which is a major obstacle.</p>
    <h4>Adjuvants</h4>
    <p>Aluminium salts bias Th2 and antibody; MF59 and AS03 oil-in-water emulsions enhance antibody; AS01/AS04 (MPL, QS-21) engage TLR4 and drive Th1; CpG and poly(I:C) are TLR agonists; montanide and saponins are used experimentally. Adjuvants bridge innate and adaptive immunity and can dose-spare.</p>
    <h4>Obstacles</h4>
    <p>Antigenic variation (HIV, influenza, HCV), latency and immune evasion, lack of animal models, waning immunity, mucosal delivery, cold chain, vaccine hesitancy, and — critically — <strong>access and cost</strong>. For TB, BCG protects against disseminated childhood disease but not reliably against adult pulmonary disease; new candidates (M72/AS01E, BCG revaccination) are in late-stage trials.</p>
  `,
  tip: "Conjugate vs polysaccharide is the classic mechanism question — explain T-independent vs T-dependent help.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i8", domain: "immunology",
  q: "Explain how the host immune response itself causes tissue damage during infection, using tuberculosis, streptococcal infection, dengue and sepsis as examples.",
  tags: ["immunopathology", "granuloma", "dengue", "sepsis"],
  answer: `
    <h4>The principle</h4>
    <p>Much infection-related tissue injury is collateral damage from a response evolved to contain a pathogen. The damage–response framework formalises this: disease can result from microbial damage, host damage, or both.</p>
    <h4>Tuberculosis</h4>
    <p>Th1-driven granulomas contain bacilli but cause <strong>caseous necrosis, cavitation and fibrosis</strong>. TNF is required for granuloma integrity — anti-TNF biologics reactivate latent TB — yet excess TNF contributes to fever, weight loss and tissue destruction. Immune reconstitution inflammatory syndrome (IRIS) after starting ART or TB treatment is a paradoxical worsening driven by restored immunity. Post-TB lung disease is largely fibrotic scar.</p>
    <h4>Streptococcal infection</h4>
    <p><strong>Rheumatic fever</strong> follows pharyngeal <em>S. pyogenes</em> infection: antibodies and T cells against M protein cross-react with cardiac myosin and valve tissue (molecular mimicry), causing carditis, arthritis and chorea. <strong>Post-streptococcal glomerulonephritis</strong> is immune-complex mediated. Streptococcal toxic shock is driven by superantigen-mediated cytokine release rather than direct bacterial invasion.</p>
    <h4>Dengue</h4>
    <p>Severe dengue is associated with <strong>antibody-dependent enhancement</strong>: sub-neutralising cross-reactive antibodies from a previous serotype facilitate Fcγ receptor-mediated uptake into monocytes, increasing infection and cytokine production. High viral load, NS1-driven endothelial activation, complement activation and a cytokine storm produce plasma leakage and shock. This is why a vaccine must avoid priming non-immune recipients.</p>
    <h4>Sepsis</h4>
    <p>Sepsis is organ dysfunction from a dysregulated host response (Sepsis-3). Early <strong>cytokine storm</strong> (TNF, IL-1, IL-6) causes fever, vasodilation and capillary leak; later <strong>immunoparalysis</strong> (monocyte HLA-DR down-regulation, lymphopenia, T-cell exhaustion, IL-10) predisposes to secondary infection and reactivation. Neutrophil extracellular traps and complement activation damage endothelium. Many immunomodulatory trials failed because the phase of the response matters.</p>
    <h4>Implications</h4>
    <p>Therapeutic corollaries include corticosteroids in pneumococcal meningitis and severe COVID-19, anti-inflammatory biologics in selected autoinflammatory states, cautious use of checkpoint inhibitors in chronic infection, and the search for biomarkers (ferritin, HLA-DR, transcriptomic endotypes) that identify which patient is in which phase.</p>
  `,
  tip: "Use the phrase 'the response that protects also damages' and then give one mechanism and one clinical consequence per example.",
  sources: ["S1", "S4", "S20"]
},
{
  id: "i9", domain: "immunology", star: true,
  q: "Define sepsis immunologically. Distinguish the hyperinflammatory and immunoparalysis phases, and discuss biomarkers and immunomodulatory therapy.",
  tags: ["sepsis", "cytokine storm", "immunoparalysis", "biomarkers"],
  answer: `
    <h4>Definition</h4>
    <p>Sepsis is <strong>life-threatening organ dysfunction caused by a dysregulated host response to infection</strong> (Sepsis-3), operationalised as a rise in SOFA score of ≥2. Septic shock is sepsis with persistent hypotension requiring vasopressors and lactate >2 mmol/L despite fluid resuscitation. It is a syndrome, not a single cytokine state.</p>
    <h4>Hyperinflammatory phase</h4>
    <p>PAMPs and DAMPs engage TLRs and inflammasomes, producing TNF-α, IL-1β, IL-6, IFN-γ and complement activation. This causes endothelial activation, glycocalyx shedding, capillary leak, vasodilation, microthrombosis (NETs, tissue factor) and mitochondrial dysfunction. Clinically: fever, tachycardia, hypotension, lactic acidosis, ARDS. This phase predominates early and in previously healthy young patients.</p>
    <h4>Immunoparalysis</h4>
    <p>Compensatory anti-inflammatory mediators (IL-10, TGF-β, soluble receptors), <strong>apoptosis of lymphocytes and dendritic cells</strong>, monocyte <strong>HLA-DR down-regulation</strong>, T-cell exhaustion (PD-1), and epigenetic reprogramming (trained immunity vs tolerance) produce a late immunosuppressed state. Patients develop secondary and opportunistic infections, reactivation of CMV/HSV, and fail to clear the original pathogen. Many sepsis deaths occur in this phase.</p>
    <h4>Biomarkers</h4>
    <p>Procalcitonin is used to support antibiotic decisions but is imperfect (rises in non-infectious inflammation, low in some localized infection). CRP is sensitive but non-specific. Emerging markers include <strong>presepsin, IL-6, sTREM-1, monocyte HLA-DR, lymphocyte count, and transcriptomic endotypes</strong> (e.g. SRS1/SRS2 in ARDS). Ferritin and sCD163 mark macrophage activation. No single biomarker reliably guides immunotherapy.</p>
    <h4>Immunomodulation</h4>
    <p>Supportive care and source control remain foundational (Surviving Sepsis Campaign). Corticosteroids are recommended for septic shock with ongoing vasopressor requirement; activated protein C failed. Trials of anti-TNF, IL-1 receptor antagonist (anakinra) and TLR4 antagonists have been largely negative or subgroup-specific. IFN-γ or GM-CSF may benefit selected immunoparalysed patients (low HLA-DR), and IL-7 is under study. The lesson: <strong>time and phenotype matter</strong> — the same drug can help in one phase and harm in another.</p>
  `,
  tip: "Name Sepsis-3 and say 'dysregulated host response' — then contrast early cytokine storm with late immunoparalysis.",
  sources: ["S4", "S20", "S13"]
}
);
