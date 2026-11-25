window.QBANK.push(
{
  id: "f13", domain: "foundations", star: true,
  q: "Explain how bacterial capsules contribute to virulence and immune evasion. How are capsular polysaccharides used in diagnosis and vaccine design?",
  tags: ["capsule", "immune evasion", "vaccines", "serotyping"],
  keypoints: ["capsule", "negative staining", "Quellung reaction", "polyribosylribitol phosphate", "hyaluronic acid", "antiphagocytic", "opsonins", "complement", "sialic acid", "serotyping", "T-independent", "conjugate vaccines", "carrier protein", "serotype replacement", "capsule switching", "biofilm"],
  answer: `
    <h4>What a capsule is</h4>
    <p>The <strong>capsule</strong> is a hydrated layer of polysaccharide, or sometimes polypeptide, lying outside the cell wall. It is usually demonstrated by <strong>negative staining</strong> with India ink or by the <strong>Quellung reaction</strong>, in which type-specific antibody causes the capsule to swell. Capsules are chemically diverse: pneumococcal polysaccharides, the <strong>polyribosylribitol phosphate</strong> of <em>Haemophilus influenzae</em> type b, the <strong>hyaluronic acid</strong> capsule of <em>Streptococcus pyogenes</em>, and the poly-γ-D-glutamate of <em>Bacillus anthracis</em>.</p>
    <h4>Immune evasion</h4>
    <ul>
      <li><strong>Antiphagocytic barrier:</strong> the hydrophilic, negatively charged layer prevents phagocytes from engaging underlying <strong>opsonins</strong>; phagocytosis requires antibody and <strong>complement</strong> deposited on the capsule.</li>
      <li><strong>Complement interference:</strong> capsules can limit C3b deposition, recruit factor H, or mimic host <strong>sialic acid</strong>, dampening classical and alternative pathways.</li>
      <li><strong>Antigen shielding:</strong> capsule masks surface proteins and lipoteichoic acid from antibody and TLR sensing.</li>
      <li><strong>Adherence and biofilm:</strong> capsular polysaccharide contributes to surface attachment and desiccation resistance.</li>
    </ul>
    <p>Because capsule expression is phase-variable in some species and capsular serotypes differ in invasiveness, the capsule is a moving target for immunity.</p>
    <h4>Diagnosis</h4>
    <p>Serotyping by <strong>Quellung reaction</strong>, latex agglutination or coagglutination remains useful for outbreak investigation and vaccine surveillance. Urinary and cerebrospinal fluid antigen tests detect pneumococcal and meningococcal capsular material. Molecular <strong>serotyping</strong> of capsule biosynthesis loci and whole-genome sequencing now complement classical typing.</p>
    <h4>Vaccines</h4>
    <p>Plain polysaccharide vaccines are <strong>T-independent</strong>, poorly immunogenic in infants and generate little memory. <strong>Conjugate vaccines</strong> covalently link capsular polysaccharide to a <strong>carrier protein</strong> such as CRM197, tetanus toxoid or diphtheria toxoid, recruiting T-cell help, promoting class switching and memory, and reducing nasopharyngeal carriage and transmission. Pneumococcal conjugate vaccines, Hib and meningococcal ACWY vaccines are the paradigm. <strong>Serotype replacement</strong> and <strong>capsule switching</strong> by recombination are the main limitations, so vaccine composition must be monitored.</p>
  `,
  tip: "Anchor the answer on the antiphagocytic mechanism, then contrast plain polysaccharide with conjugate vaccine immunology.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "f14", domain: "foundations", star: true,
  q: "Describe how innate immune receptors detect bacterial cell envelope molecules, and explain how the same sensing can both protect the host and drive septic immunopathology.",
  tags: ["pamps", "tlr", "inflammasome", "sepsis"],
  keypoints: ["lipopolysaccharide", "lipoteichoic acid", "TLR4", "MD-2", "TLR2", "NOD2", "muramyl dipeptide", "NLRP3 inflammasome", "caspase-1", "IL-1β", "MyD88", "flagellin", "endotoxin tolerance", "cytokine storm", "immunothrombosis"],
  answer: `
    <h4>PAMPs and their receptors</h4>
    <p>Innate immunity recognises conserved microbial structures called pathogen-associated molecular patterns. The best studied are <strong>lipopolysaccharide</strong> (LPS), <strong>lipoteichoic acid</strong>, peptidoglycan, lipoproteins, <strong>flagellin</strong> and bacterial DNA. LPS is transferred by CD14 to the <strong>TLR4</strong>–<strong>MD-2</strong> complex; lipoproteins and lipoteichoic acid activate <strong>TLR2</strong> heterodimers with TLR1 or TLR6; flagellin activates TLR5; CpG DNA activates TLR9. Cytosolic sensors add a second layer: NOD1 detects Gram-negative peptidoglycan fragments, <strong>NOD2</strong> detects <strong>muramyl dipeptide</strong>, and the <strong>NLRP3 inflammasome</strong> and caspase-11/4/5 respond to membrane damage and cytosolic LPS.</p>
    <h4>Protective output</h4>
    <p>Signalling through <strong>MyD88</strong> and TRIF activates NF-κB and IRF3, inducing cytokines, chemokines and antimicrobial peptides. This recruits neutrophils, matures dendritic cells and primes adaptive immunity. The same pathways are exploited in vaccine adjuvants, such as monophosphoryl lipid A, a detoxified TLR4 agonist.</p>
    <h4>When sensing becomes the disease</h4>
    <ul>
      <li><strong>Cytokine storm:</strong> massive TNF-α, IL-1β and IL-6 release causes fever, vasodilation, capillary leak and myocardial depression.</li>
      <li><strong>Immunothrombosis:</strong> tissue factor induction and anticoagulant down-regulation produce disseminated intravascular coagulation.</li>
      <li><strong>Inflammasome activation:</strong> <strong>caspase-1</strong> cleaves pro-<strong>IL-1β</strong> and IL-18, amplifying fever and neutrophil recruitment; pyroptosis releases more PAMPs.</li>
      <li><strong>Endotoxin tolerance:</strong> repeated LPS exposure reprograms monocytes to a hyporesponsive state, contributing to sepsis-associated immunosuppression.</li>
    </ul>
    <h4>Clinical implications</h4>
    <p>Septic shock can occur with sterile bacterial components, so killing organisms does not immediately stop inflammation; source control and timely antibiotics remain essential, while adjunctive corticosteroids reduce inflammation in pneumococcal meningitis. Anti-TLR4 strategies have not succeeded in sepsis trials, and <strong>endotoxin tolerance</strong> means that the same PAMP load can produce different responses. Assays for endotoxin and inflammatory markers support, but do not replace, clinical judgement.</p>
  `,
  tip: "Keep the receptor map tight, then argue that inflammation is both the defence and the lesion.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "f15", domain: "foundations",
  q: "Describe the structure and assembly of the bacterial flagellum and the chemotaxis signalling pathway. Why is motility important in pathogenesis and how is it assessed in the laboratory?",
  tags: ["flagella", "chemotaxis", "motility", "h. pylori"],
  keypoints: ["filament", "hook", "basal body", "proton motive force", "peritrichous", "methyl-accepting chemotaxis protein", "CheA", "CheY", "CheZ", "flagellin", "TLR5", "Helicobacter pylori", "swarming", "motility test", "Proteus mirabilis"],
  answer: `
    <h4>Structure</h4>
    <p>The flagellum has three parts: the <strong>filament</strong>, built of thousands of <strong>flagellin</strong> subunits; the curved <strong>hook</strong>; and the <strong>basal body</strong>, which spans the envelope and contains the motor, switch and export apparatus. The motor turns by <strong>proton motive force</strong> through MotA/MotB stators, with sodium-driven motors in some <em>Vibrio</em> species. Arrangements include monotrichous, lophotrichous, amphitrichous and <strong>peritrichous</strong> flagella; spirochetes use periplasmic axial filaments.</p>
    <h4>Assembly</h4>
    <p>Flagellin monomers are exported through a dedicated type III-like export apparatus and added under a cap at the filament tip. Hook length is controlled by FliK, and the filament is completed after the hook. Assembly is energetically expensive and tightly regulated, so flagella are produced when motility is advantageous.</p>
    <h4>Chemotaxis</h4>
    <p>Bacteria alternate runs and tumbles. Binding of attractant to <strong>methyl-accepting chemotaxis protein</strong> receptors reduces <strong>CheA</strong> autophosphorylation, lowering phospho-<strong>CheY</strong>; because CheY-phosphate would bind the switch and cause tumbling, the cell runs longer up a gradient. <strong>CheZ</strong> dephosphorylates CheY, while CheR and CheB methylate and demethylate receptors to provide adaptation. The result is a biased random walk rather than true steering.</p>
    <h4>Pathogenesis and laboratory detection</h4>
    <ul>
      <li><em>Helicobacter pylori</em> uses multiple flagella and urease to traverse gastric mucus and colonise the epithelium.</li>
      <li><em>Vibrio cholerae</em> uses a single polar flagellum to penetrate the mucus layer; <em>Salmonella</em> and <strong><em>Proteus mirabilis</em></strong> use peritrichous flagella for <strong>swarming</strong> and biofilm spread on catheters.</li>
      <li>Flagellin is a potent <strong>TLR5</strong> ligand and vaccine adjuvant, but it is also a variable antigen.</li>
      <li>Motility is assessed by a <strong>motility test</strong> in semi-solid medium, hanging-drop microscopy or dark-field examination; flagella can be stained, but molecular identification is now usual.</li>
    </ul>
    <p>Motility is not essential for survival in the laboratory, so non-motile variants may emerge and complicate interpretation.</p>
  `,
  tip: "Explain the run-and-tumble logic through CheY phosphorylation; that is the paragraph examiners remember.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "f16", domain: "foundations", star: true,
  q: "Explain nutritional immunity and the strategies bacteria use to acquire iron. How can these systems be exploited for diagnosis or therapy?",
  tags: ["iron", "siderophore", "nutritional immunity", "cefiderocol"],
  keypoints: ["nutritional immunity", "transferrin", "lactoferrin", "lipocalin-2", "siderophore", "enterobactin", "pyoverdine", "TonB", "Fur", "heme", "cefiderocol", "gallium", "iron overload", "Vibrio vulnificus", "yersiniabactin"],
  answer: `
    <h4>Nutritional immunity</h4>
    <p>Iron is an essential cofactor, but ferric iron is insoluble at physiological pH and free iron is toxic. The host therefore sequesters it in <strong>transferrin</strong> in plasma, <strong>lactoferrin</strong> in secretions, ferritin, haemoglobin and haemopexin. <strong>Lipocalin-2</strong> further captures bacterial catecholate siderophores, and calprotectin restricts zinc and manganese. This active withholding is called <strong>nutritional immunity</strong>. The resulting free iron concentration is far too low to support bacterial growth, so iron acquisition is a prerequisite for colonisation and invasion.</p>
    <h4>Bacterial iron acquisition</h4>
    <ul>
      <li><strong>Siderophores:</strong> high-affinity chelators such as <strong>enterobactin</strong> and salmochelin (<em>E. coli</em>), <strong>pyoverdine</strong> and pyochelin (<em>P. aeruginosa</em>), <strong>yersiniabactin</strong>, aerobactin and staphyloferrin. They are exported, bind iron, and are recovered by specific TonB-dependent receptors.</li>
      <li><strong>Heme uptake:</strong> <em>S. aureus</em> Isd and <em>Yersinia</em> Hmu systems extract haem from haemoglobin.</li>
      <li><strong>Host-protein receptors:</strong> <em>Neisseria</em> TbpA/TbpB bind transferrin; lactoferrin receptors occur in <em>Neisseria</em> and <em>H. pylori</em>.</li>
      <li><strong>Ferrous transport:</strong> Feo systems take up soluble Fe2+ in anaerobic or acidic niches.</li>
    </ul>
    <p><strong>TonB</strong>–ExbB–ExbD couples the proton motive force to receptor import. The <strong>Fur</strong> repressor shuts down iron uptake genes when iron is replete, while the RyhB small RNA fine-tunes metabolism.</p>
    <h4>Clinical consequences</h4>
    <p>Iron overload from haemochromatosis, repeated transfusion or desferrioxamine therapy predisposes to <em>Yersinia</em>, <em>Vibrio vulnificus</em> and mucormycosis. Siderophore-deficient mutants are attenuated, confirming that iron capture is a virulence determinant. Therapeutically, <strong>cefiderocol</strong> is a siderophore-conjugated cephalosporin that enters through iron transporters, and <strong>gallium</strong> competes with iron. Anti-siderophore antibodies and transferrin-binding proteins are vaccine candidates. Iron chelation must be used cautiously because it can feed pathogens.</p>
  `,
  tip: "Frame iron as a tug of war: host sequestration versus bacterial piracy, then give the Trojan-horse drug example.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "f17", domain: "foundations", star: true,
  q: "Describe the architecture of bacterial two-component signal transduction systems and explain their roles in virulence and antibiotic resistance, with clinical examples.",
  tags: ["two-component", "phopq", "colistin", "vancomycin"],
  keypoints: ["two-component system", "sensor histidine kinase", "response regulator", "autophosphorylates", "phosphorelay", "EnvZ/OmpR", "PhoP/PhoQ", "PmrA/PmrB", "lipid A", "colistin resistance", "VanS/VanR", "vancomycin resistance", "BvgAS", "AgrC/AgrA", "broth microdilution"],
  answer: `
    <h4>Architecture</h4>
    <p>A classical <strong>two-component system</strong> has a membrane <strong>sensor histidine kinase</strong> and a cytosolic <strong>response regulator</strong>. The sensor <strong>autophosphorylates</strong> on a conserved histidine using ATP, then transfers the phosphoryl group to a conserved aspartate in the receiver domain of the regulator. Phosphorylation usually activates a DNA-binding output domain, changing transcription. Some systems use a hybrid kinase and a multi-step <strong>phosphorelay</strong>, and phosphatases reset the signal. Because the sensor is membrane-bound, the system couples an extracellular or envelope signal directly to a transcriptional programme.</p>
    <h4>Examples</h4>
    <ul>
      <li><strong>EnvZ/OmpR</strong> senses osmolarity and controls porin balance in <em>E. coli</em>.</li>
      <li><strong>PhoP/PhoQ</strong> responds to low Mg2+ and antimicrobial peptides, remodelling the outer membrane and promoting intracellular survival in <em>Salmonella</em>.</li>
      <li><strong>PmrA/PmrB</strong>, activated by PhoP/PhoQ, adds aminoarabinose and phosphoethanolamine to <strong>lipid A</strong>, reducing the negative charge and conferring <strong>colistin resistance</strong>.</li>
      <li><strong>VanS/VanR</strong> senses cell-wall stress and induces the <em>van</em> genes that remake peptidoglycan precursors, producing <strong>vancomycin resistance</strong> in enterococci.</li>
      <li><strong>BvgAS</strong> in <em>Bordetella pertussis</em> switches between virulent and avirulent phases; <strong>AgrC/AgrA</strong> links quorum sensing to toxin expression in <em>S. aureus</em>.</li>
    </ul>
    <h4>Clinical relevance</h4>
    <p>Chromosomal PmrA/PmrB mutations and the plasmid-borne <em>mcr</em> genes both modify lipid A, so colistin resistance can arise by mutation or transfer. Vancomycin resistance requires specific <strong>broth microdilution</strong> or agar dilution testing, because disk diffusion may miss low-level resistance. Two-component systems are attractive targets because they are absent from human cells, but inhibitors have not yet reached routine practice. Understanding them explains why a single drug can select cross-resistance to antimicrobial peptides and why combination therapy may be needed.</p>
  `,
  tip: "Name the sensor, the regulator and the modified lipid or cell-wall target for each example; avoid vague statements about signalling.",
  sources: ["S1", "S2", "S8"]
},
{
  id: "f18", domain: "foundations",
  q: "Compare phase variation and antigenic variation in bacterial pathogens. Why do these mechanisms matter for diagnosis, vaccines and chronic infection?",
  tags: ["phase variation", "antigenic variation", "immune evasion", "neisseria"],
  keypoints: ["phase variation", "antigenic variation", "slipped-strand mispairing", "gene conversion", "DNA methylation", "Neisseria gonorrhoeae", "pilin", "Opa", "Borrelia burgdorferi", "VlsE", "silent cassettes", "Hin invertible element", "capsule switching", "serotype replacement", "immune escape"],
  answer: `
    <h4>Definitions and mechanisms</h4>
    <p><strong>Phase variation</strong> is the reversible, high-frequency switching of expression of one or more genes, producing ON and OFF subpopulations. <strong>Antigenic variation</strong> is a change in the structure of a surface antigen so that existing antibody no longer binds. Mechanisms include <strong>slipped-strand mispairing</strong> within homopolymeric or short tandem repeats during DNA replication, site-specific recombination, <strong>gene conversion</strong>, promoter inversion and <strong>DNA methylation</strong>.</p>
    <h4>Bacterial examples</h4>
    <ul>
      <li><em>Neisseria gonorrhoeae</em> varies <strong>pilin</strong> by recombining silent <em>pilS</em> cassettes into the expressed <em>pilE</em> locus; <strong>Opa</strong> proteins and lipooligosaccharide also switch.</li>
      <li><em>Borrelia burgdorferi</em> changes <strong>VlsE</strong> by segmental gene conversion from <strong>silent cassettes</strong>, sustaining chronic infection; relapsing-fever borreliae vary variable major proteins.</li>
      <li><em>Salmonella enterica</em> alternates flagellar H antigens through the <strong>Hin invertible element</strong>, a DNA inversion that switches flagellin genes.</li>
      <li><em>Haemophilus influenzae</em> and <em>Campylobacter jejuni</em> vary glycosyltransferases and flagellin glycosylation through repeat tract changes.</li>
      <li><em>Streptococcus pneumoniae</em> can change capsular serotype by recombination at the capsule locus, a form of <strong>capsule switching</strong>.</li>
    </ul>
    <h4>Why it matters</h4>
    <p>These systems allow <strong>immune escape</strong>, reinfection and persistent infection, and they generate within-host diversity that confounds culture and serology. The frequency of switching is high enough to produce variants within a single infection, so a population rather than a clone is transmitted. A diagnostic antibody may fail if its target is switched off, and a vaccine based on a variable antigen may select escape variants. <strong>Serotype replacement</strong> after conjugate vaccination is a population-level example. Vaccines therefore target conserved epitopes or multiple variants, and molecular assays should use stable genomic regions.</p>
  `,
  tip: "Separate ON/OFF switching from antigenic change, then give one molecular mechanism per organism.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "f19", domain: "foundations",
  q: "Explain the principles of bacterial gene regulation and how global regulatory networks coordinate virulence. Illustrate with operons, sigma factors, riboswitches and small RNAs.",
  tags: ["gene regulation", "operon", "sigma factor", "riboswitch"],
  keypoints: ["operon", "lac operon", "catabolite repression", "sigma factor", "alternative sigma factors", "RpoS", "ToxT", "riboswitch", "small RNAs", "Hfq", "CRP", "FNR", "H-NS", "attenuation"],
  answer: `
    <h4>Levels of control</h4>
    <p>Bacteria regulate gene expression mainly at transcription initiation, but also at transcript elongation, mRNA stability and translation. A typical <strong>operon</strong> places related genes under one promoter and operator, so a single repressor or activator can coordinate a pathway. The <strong>lac operon</strong> combines negative control by LacI with positive control by CAP–cAMP; <strong>catabolite repression</strong> ensures glucose is used first. The tryptophan operon adds <strong>attenuation</strong>, in which translation of a leader peptide controls transcription termination.</p>
    <h4>Sigma factors and global regulators</h4>
    <p>The housekeeping <strong>sigma factor</strong> recognises most promoters, while <strong>alternative sigma factors</strong> redirect RNA polymerase to stress or developmental regulons. <strong>RpoS</strong> governs stationary-phase and general stress genes; RpoH controls heat-shock proteins; FliA controls flagellar genes; extracytoplasmic-function sigma factors respond to envelope stress. Global regulators such as <strong>CRP</strong>, <strong>FNR</strong>, ArcA and <strong>H-NS</strong> integrate metabolism, oxygen status and virulence. In <em>Vibrio cholerae</em>, <strong>ToxT</strong> activates cholera toxin and the toxin-coregulated pilus; in <em>Shigella</em>, VirF and VirB form a cascade; in <em>S. aureus</em>, Agr and SarA balance toxins and adhesins.</p>
    <h4>RNA-based regulation</h4>
    <ul>
      <li><strong>Riboswitches</strong> are metabolite-binding structures in the 5-prime untranslated region that terminate transcription or block translation; examples respond to thiamine pyrophosphate, flavin mononucleotide and lysine.</li>
      <li><strong>Small RNAs</strong> base-pair with mRNAs, often with the <strong>Hfq</strong> chaperone, to alter translation or stability; RyhB controls iron metabolism and MicF controls porin expression.</li>
      <li>Riboswitches and sRNAs are attractive antibacterial targets because they are absent from human cells, although clinical inhibitors remain experimental.</li>
    </ul>
    <h4>Clinical significance</h4>
    <p>Virulence is often a matter of when and where a gene is expressed, not merely whether it is present. This explains why an organism can colonise asymptomatically and later invade, and why in-vivo expression differs from laboratory culture. Diagnostic RT-PCR, antigen tests and anti-virulence strategies must account for this regulatory flexibility.</p>
  `,
  tip: "Use the lac operon for basic logic and ToxT or Agr for virulence, then add one RNA-level example.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "f20", domain: "foundations", star: true,
  q: "Describe the life cycles of bacteriophages and the CRISPR-Cas system. How do they shape bacterial evolution and how are they being used clinically?",
  tags: ["bacteriophage", "crispr", "phage therapy", "transduction"],
  keypoints: ["bacteriophages", "lytic cycle", "lysogenic cycle", "prophage", "endolysin", "prophage conversion", "transduction", "CRISPR-Cas", "spacers", "crRNA", "PAM", "phage therapy", "endolysins", "Cas9", "cholera toxin"],
  answer: `
    <h4>Phage life cycles</h4>
    <p><strong>Bacteriophages</strong> are viruses of bacteria, mostly tailed double-stranded DNA viruses. In the <strong>lytic cycle</strong> they adsorb, inject their genome, redirect host metabolism, replicate, assemble progeny and lyse the cell using holin and <strong>endolysin</strong>. In the <strong>lysogenic cycle</strong> the genome integrates or persists as a plasmid, producing a <strong>prophage</strong> repressed by an immunity repressor; SOS induction can trigger lytic replication.</p>
    <h4>Prophage conversion and transduction</h4>
    <p>Lysogeny is a major source of virulence genes. <strong>Prophage conversion</strong> confers <strong>cholera toxin</strong> in <em>V. cholerae</em> (CTXφ), Shiga toxin in <em>E. coli</em> O157, diphtheria toxin in <em>C. diphtheriae</em>, Panton–Valentine leucocidin and enterotoxins in <em>S. aureus</em>, and botulinum toxin in <em>Clostridium botulinum</em>. Phages also mediate <strong>transduction</strong>, moving host DNA between bacteria and contributing to horizontal gene transfer.</p>
    <h4>CRISPR-Cas immunity</h4>
    <p><strong>CRISPR-Cas</strong> is adaptive immunity. Short foreign DNA fragments are acquired as <strong>spacers</strong> between repeats; the locus is transcribed and processed into <strong>crRNA</strong>, which guides a Cas nuclease to a complementary target adjacent to a <strong>PAM</strong>. <strong>Cas9</strong> cuts double-stranded DNA, whereas Cascade–Cas3 degrades DNA processively. Phages counter with anti-CRISPR proteins and mutations in the PAM or spacer.</p>
    <h4>Clinical applications</h4>
    <ul>
      <li><strong>Phage therapy</strong>: lytic phages or cocktails for multidrug-resistant <em>P. aeruginosa</em>, <em>S. aureus</em> and <em>Acinetobacter</em>; advantages include specificity and biofilm penetration, limitations include narrow host range, phage resistance and regulatory uncertainty.</li>
      <li><strong>CRISPR diagnostics</strong>: Cas12 and Cas13 systems detect pathogen nucleic acid after isothermal amplification, useful for rapid pathogen and resistance-gene identification.</li>
      <li><strong>CRISPR antimicrobials and editing</strong>: sequence-specific killing of resistant strains or curing of resistance plasmids is experimental but promising.</li>
      <li><strong>Endolysins</strong> are being developed as enzyme antibiotics that degrade peptidoglycan from outside.</li>
    </ul>
    <p>Phages also shape bacterial populations and gene flow, so they are both a therapeutic tool and an ecological force in infection.</p>
  `,
  tip: "Contrast lytic and lysogenic cycles, then use CTXφ and CRISPR diagnostics as the two applied anchors.",
  sources: ["S1", "S5", "S13"]
},
{
  id: "f21", domain: "foundations",
  q: "Explain how bacterial metabolism and nutritional requirements determine culture, identification and antimicrobial selectivity, using auxotrophy and small-colony variants as examples.",
  tags: ["metabolism", "auxotrophy", "culture media", "scv"],
  keypoints: ["fermentation", "terminal electron acceptor", "auxotrophy", "X factor", "V factor", "microaerophilic", "MacConkey", "Löwenstein–Jensen", "small-colony variants", "electron transport", "menadione", "thymidine", "aminoglycosides", "metronidazole", "fastidious"],
  answer: `
    <h4>Metabolic diversity</h4>
    <p>Bacteria generate ATP by <strong>fermentation</strong> or respiration. In fermentation, organic compounds serve as both electron donor and acceptor, producing acids, alcohols or gases; in respiration, electrons pass to a <strong>terminal electron acceptor</strong> such as oxygen, nitrate or fumarate. <em>E. coli</em> performs mixed-acid fermentation, <em>Klebsiella</em> produces butanediol, and streptococci are homolactic or heterolactic. These pathways underpin many identification tests.</p>
    <h4>Auxotrophy and culture</h4>
    <p><strong>Auxotrophy</strong> is the loss of a biosynthetic pathway, making a nutrient essential. <strong>Fastidious</strong> organisms illustrate this: <em>H. influenzae</em> requires <strong>X factor</strong> (haemin) and <strong>V factor</strong> (NAD), <em>Neisseria</em> requires cysteine and cystine, and <em>Legionella</em> requires cysteine and iron. <em>Campylobacter</em> is <strong>microaerophilic</strong>, and <em>Mycoplasma</em> needs sterols. Culture media exploit these requirements: <strong>MacConkey</strong> agar selects Gram-negatives and detects lactose fermentation, mannitol salt agar selects staphylococci, chocolate agar supplies X and V factors, and <strong>Löwenstein–Jensen</strong> medium grows mycobacteria.</p>
    <ul>
      <li><strong>Selective media</strong> suppress competitors, <strong>differential media</strong> reveal a metabolic property, and enriched media supply growth factors.</li>
      <li><strong>Biochemical tests</strong> such as oxidase, catalase, urease and triple sugar iron detect specific enzymes or fermentation patterns.</li>
    </ul>
    <h4>Small-colony variants</h4>
    <p><strong>Small-colony variants</strong> are slow-growing auxotrophs or respiratory mutants, classically of <em>S. aureus</em>. Defects in <strong>electron transport</strong> (haemin or <strong>menadione</strong> auxotrophy) or <strong>thymidine</strong> dependence produce tiny colonies, reduced pigmentation and toxin production, intracellular persistence and resistance to <strong>aminoglycosides</strong>. They are associated with chronic osteomyelitis, cystic fibrosis and device infection, and may be missed unless culture is prolonged.</p>
    <h4>Metabolism and chemotherapy</h4>
    <p>Drug selectivity often depends on a microbial pathway: sulphonamides block folate synthesis, and <strong>metronidazole</strong> requires reductive activation in anaerobes. β-lactams need active cell-wall synthesis, so dormant cells tolerate them. Understanding auxotrophy and metabolic state therefore guides medium choice, incubation atmosphere, susceptibility testing and the interpretation of culture-negative infection.</p>
  `,
  tip: "Tie every metabolic fact to a laboratory decision: medium, atmosphere, incubation time or drug choice.",
  sources: ["S1", "S2", "S12"]
},
{
  id: "f22", domain: "foundations",
  q: "Explain the mechanisms of polymicrobial infection and microbial synergy. Why can a community cause more damage than its individual members, and what are the diagnostic and therapeutic consequences?",
  tags: ["polymicrobial", "synergy", "abscess", "anaerobes"],
  keypoints: ["polymicrobial", "biofilm", "cross-feeding", "coaggregation", "β-lactamase", "Porphyromonas gingivalis", "keystone pathogen", "Bacteroides fragilis", "intra-abdominal abscess", "anaerobic coverage", "source control", "de-escalation", "metagenomics", "quorum sensing"],
  answer: `
    <h4>What polymicrobial infection is</h4>
    <p><strong>Polymicrobial</strong> infection involves two or more species or strains acting together. The community may be more virulent than the sum of its members because organisms exploit each other's metabolism, adhesion and defences. This is distinct from simple contamination: the organisms are spatially organised, often in <strong>biofilm</strong>, and interact metabolically.</p>
    <h4>Mechanisms of synergy</h4>
    <ul>
      <li><strong>Cross-feeding:</strong> one species consumes a metabolite or supplies a growth factor, allowing another to proliferate; lactate cross-feeding and siderophore sharing are examples.</li>
      <li><strong>Coaggregation:</strong> specific adhesins link species into mixed communities, as in dental plaque.</li>
      <li><strong>β-lactamase sharing:</strong> a resistant commensal protects a susceptible pathogen by destroying the antibiotic locally.</li>
      <li><strong>Immune subversion:</strong> <em>Porphyromonas gingivalis</em> is a <strong>keystone pathogen</strong> that disrupts complement and neutrophil function, allowing bystanders to cause periodontal damage.</li>
      <li><strong>Gene transfer and signalling:</strong> high density favours plasmid exchange and <strong>quorum sensing</strong>.</li>
    </ul>
    <h4>Clinical examples</h4>
    <p><strong>Intra-abdominal abscess</strong> classically contains <em>Bacteroides fragilis</em> and facultative <em>E. coli</em>; the anaerobe provides a niche and the facultative organism consumes oxygen. Aspiration pneumonia and ventilator-associated pneumonia are mixed oral communities. Diabetic foot infection combines staphylococci, streptococci and anaerobes. Bacterial vaginosis is a community shift dominated by <em>Gardnerella</em>, <em>Atopobium</em> and <em>Prevotella</em>.</p>
    <h4>Diagnostic and therapeutic consequences</h4>
    <p>Superficial swabs are misleading; deep specimens must be collected and transported anaerobically. Culture may report several organisms, and the laboratory must distinguish probable pathogens from flora. Molecular panels and <strong>metagenomics</strong> improve detection but complicate interpretation. Treatment requires <strong>source control</strong> and broad empirical cover, including <strong>anaerobic coverage</strong>, followed by <strong>de-escalation</strong> based on the dominant pathogens. Biofilm-active regimens and device removal may be needed. Indiscriminate broad-spectrum therapy selects resistance across the community.</p>
  `,
  tip: "Give one mechanism of synergy and one clinical community for each paragraph; do not list organisms without explaining the interaction.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "f23", domain: "foundations",
  q: "Explain the evolutionary forces that shape bacterial virulence, including the trade-off hypothesis and the fitness costs of resistance. What are the implications for vaccine design and antibiotic stewardship?",
  tags: ["virulence evolution", "fitness cost", "transmission", "stewardship"],
  keypoints: ["virulence", "trade-off hypothesis", "transmission", "coincidental evolution", "within-host evolution", "pathogenicity islands", "fitness cost", "compensatory mutations", "co-selection", "collateral sensitivity", "carriage", "serotype replacement", "antibiotic stewardship"],
  answer: `
    <h4>Virulence as a fitness trait</h4>
    <p><strong>Virulence</strong> is the harm an infection causes to the host. It is not a fixed property of a species but an outcome of interactions among pathogen, host and environment. Evolutionary thinking asks which traits increase transmission and survival, and why harmful traits persist.</p>
    <h4>The trade-off hypothesis</h4>
    <p>The <strong>trade-off hypothesis</strong> proposes that virulence can be coupled to <strong>transmission</strong>: replication and shedding may require host resources, but severe damage shortens the infectious period. The optimum depends on transmission route, host mobility, population immunity and healthcare. A waterborne pathogen such as <em>V. cholerae</em> can afford high virulence because the environment bridges transmission, whereas a sexually transmitted pathogen may persist longer with lower virulence. The theory is a framework, not a universal law.</p>
    <h4>Other evolutionary forces</h4>
    <ul>
      <li><strong>Coincidental evolution:</strong> traits selected in another context, such as environmental survival, may cause accidental damage in a susceptible host.</li>
      <li><strong>Within-host evolution:</strong> adaptation to the host, such as immune escape or iron acquisition, can increase damage without improving transmission.</li>
      <li><strong>Gene acquisition and loss:</strong> <strong>pathogenicity islands</strong> and prophages add virulence genes, while reductive evolution can remove costly functions.</li>
    </ul>
    <h4>Resistance and its fitness cost</h4>
    <p>Resistance often carries a <strong>fitness cost</strong> through plasmid burden, altered targets or efflux. <strong>Compensatory mutations</strong> restore fitness, allowing resistant strains to persist after antibiotic pressure is removed. <strong>Co-selection</strong> on the same plasmid maintains resistance to unrelated drugs. <strong>Collateral sensitivity</strong>, in which resistance to one drug increases susceptibility to another, is being explored therapeutically.</p>
    <h4>Implications</h4>
    <p>Vaccines that reduce <strong>carriage</strong> and transmission can lower the opportunity for within-host adaptation; conjugate pneumococcal vaccines reduced disease but were followed by <strong>serotype replacement</strong>. Antibiotic <strong>stewardship</strong>, combination therapy and rapid diagnostics reduce selection. Evolutionary thinking warns that partial immunity or suboptimal treatment can favour more virulent or resistant variants.</p>
  `,
  tip: "Use the trade-off hypothesis as the spine, then add resistance fitness costs and one vaccine example.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "f24", domain: "foundations",
  q: "Discuss the concept of the minimal bacterial genome and the contribution of synthetic biology to understanding essential genes and identifying drug targets.",
  tags: ["minimal genome", "synthetic biology", "essential genes", "drug targets"],
  keypoints: ["minimal genome", "essential genes", "transposon mutagenesis", "Tn-seq", "CRISPR interference", "Mycoplasma genitalium", "JCVI-syn3.0", "core genome", "genome transplantation", "chassis", "drug targets", "accessory genome", "reductive evolution", "synthetic biology"],
  answer: `
    <h4>What a minimal genome is</h4>
    <p>A <strong>minimal genome</strong> is the smallest set of genes sufficient for growth and replication in a defined environment. It is not a fixed number: essentiality depends on the medium, temperature and host. <strong>Essential genes</strong> can be identified by saturating <strong>transposon mutagenesis</strong> (Tn-seq or TraDIS), <strong>CRISPR interference</strong>, single-gene deletions and comparative genomics.</p>
    <h4>Model organisms</h4>
    <p><em>Mycoplasma genitalium</em>, with a naturally small genome, was the starting point for systematic reduction. Researchers synthesised and transplanted a reduced genome to produce <strong>JCVI-syn3.0</strong>, a cell with roughly 470 genes, then identified genes required for robust growth. The work showed that a large fraction of genes in a minimal cell have no known function, and that <strong>core genome</strong> functions include translation, transcription, replication, membrane transport and central metabolism.</p>
    <h4>Synthetic biology and drug discovery</h4>
    <ul>
      <li><strong>Genome transplantation</strong> and genome synthesis allow construction of designed <strong>chassis</strong> cells for vaccines, biologics and metabolic engineering.</li>
      <li>Essential-gene screens nominate <strong>drug targets</strong> such as cell-wall synthesis, tRNA synthetases and lipid biosynthesis.</li>
      <li>Conditional essentiality matters: a gene may be essential in vitro but dispensable in the host, or vice versa.</li>
      <li>Reduced genomes are easier to model and engineer, but they lack the <strong>accessory genome</strong> that encodes virulence and resistance.</li>
    </ul>
    <h4>Pathogenesis perspective</h4>
    <p>Minimal cells are not pathogens. Virulence typically depends on accessory functions acquired by horizontal transfer, and obligate intracellular bacteria such as <em>Rickettsia</em> and <em>Chlamydia</em> show <strong>reductive evolution</strong> with small genomes but sophisticated host interactions. <strong>Synthetic biology</strong> therefore complements, rather than replaces, classical pathogenesis studies. It also raises biosafety and biosecurity questions that require containment and oversight.</p>
  `,
  tip: "Define minimal genome conditionally, name the syn3.0 milestone, then separate essential genes from virulence genes.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "f25", domain: "foundations",
  q: "Compare the core and accessory genomes of bacterial pathogens and explain how genome plasticity, pathogenicity islands and reductive evolution contribute to disease.",
  tags: ["pan-genome", "pathogenicity island", "genome evolution", "wgs"],
  keypoints: ["core genome", "accessory genome", "pan-genome", "pathogenicity islands", "Salmonella pathogenicity island", "LEE", "pseudogene", "reductive evolution", "Mycobacterium leprae", "Yersinia pestis", "whole-genome sequencing", "reverse vaccinology", "horizontal gene transfer", "prophages"],
  answer: `
    <h4>Core and accessory genomes</h4>
    <p>The <strong>core genome</strong> contains genes shared by all strains of a species, mostly housekeeping and essential functions. The <strong>accessory genome</strong> varies among strains and includes genes for virulence, metabolism, resistance and surface variation. Together they form the <strong>pan-genome</strong>. Species with extensive <strong>horizontal gene transfer</strong> have an open pan-genome; those with restricted exchange have a closed one.</p>
    <h4>Sources of plasticity</h4>
    <ul>
      <li><strong>Pathogenicity islands</strong> are large, often unstable chromosomal regions with atypical G+C content, integrases and tRNA insertion sites; they carry virulence genes.</li>
      <li>Insertion sequences, transposons, <strong>prophages</strong> and integrative conjugative elements move genes and remodel chromosomes.</li>
      <li>Recombination and gene conversion create mosaics, while gene loss removes functions that are no longer needed.</li>
    </ul>
    <h4>Classic examples</h4>
    <p><em>Salmonella</em> carries <strong>Salmonella pathogenicity island</strong> 1 for invasion and SPI-2 for intracellular survival. Enteropathogenic and enterohaemorrhagic <em>E. coli</em> carry the <strong>LEE</strong> locus for attaching-effacing lesions. <em>H. pylori</em> has the <em>cag</em> pathogenicity island, and <em>Yersinia</em> carries a virulence plasmid encoding Yops. In <em>S. aureus</em>, SCC<i>mec</i>, prophages and staphylococcal pathogenicity islands make up much of the accessory genome.</p>
    <h4>Reductive evolution</h4>
    <p>Obligate pathogens often lose genes. <em>Mycobacterium leprae</em> has extensive <strong>pseudogene</strong> formation and cannot be cultured in vitro; <em>Rickettsia</em> and <em>Chlamydia</em> have small genomes and depend on host metabolites. <em>Yersinia pestis</em> arose from <em>Y. pseudotuberculosis</em> and acquired flea-borne transmission while losing functions, illustrating how gene loss can be adaptive.</p>
    <h4>Clinical applications</h4>
    <p><strong>Whole-genome sequencing</strong> distinguishes outbreak strains, detects resistance and virulence genes, and supports <strong>reverse vaccinology</strong> by identifying conserved surface antigens. Diagnostics should target stable core regions, while vaccine design may need to cover accessory diversity. Pan-genome analysis is now central to surveillance and to understanding why one strain causes disease and another does not.</p>
  `,
  tip: "Use the pan-genome equation, one pathogenicity island, and one reductive-evolution example to cover the whole question.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "f26", domain: "foundations",
  q: "Explain how the host immune response to bacterial infection can itself cause tissue damage. Illustrate with examples and discuss the therapeutic implications.",
  tags: ["immunopathology", "sepsis", "molecular mimicry", "inflammation"],
  keypoints: ["immunopathology", "cytokine storm", "immunothrombosis", "granuloma", "caseous necrosis", "molecular mimicry", "rheumatic fever", "Guillain–Barré syndrome", "reactive arthritis", "toxic shock syndrome", "superantigens", "corticosteroids", "TNF", "IVIG"],
  answer: `
    <h4>The principle</h4>
    <p><strong>Immunopathology</strong> is tissue damage caused by the host response rather than directly by the microbe. Inflammation is protective, but excessive or misdirected responses can injure the same tissues they are meant to defend. The balance depends on pathogen load, virulence factors and host genetics. The response is therefore a double-edged sword.</p>
    <h4>Sepsis and immunothrombosis</h4>
    <p>In severe infection, PAMPs and cytokines produce a <strong>cytokine storm</strong> with vasodilation, capillary leak, myocardial depression and <strong>immunothrombosis</strong>. Neutrophil extracellular traps and activated endothelium amplify coagulation, causing microvascular occlusion and organ failure. The response can continue after bacteria are killed, which is why source control and organ support matter alongside antibiotics.</p>
    <h4>Granulomatous and post-infectious disease</h4>
    <ul>
      <li><strong>Tuberculosis:</strong> <strong>granuloma</strong> formation contains bacilli but also causes <strong>caseous necrosis</strong> and cavitation; <strong>TNF</strong> is required for containment, so anti-TNF therapy risks reactivation.</li>
      <li><strong>Rheumatic fever:</strong> <strong>molecular mimicry</strong> between group A streptococcal M protein and cardiac myosin leads to valvulitis after pharyngitis.</li>
      <li><strong>Guillain–Barré syndrome:</strong> antibodies against <em>Campylobacter jejuni</em> lipooligosaccharide cross-react with peripheral nerve gangliosides.</li>
      <li><strong>Reactive arthritis:</strong> follows <em>Shigella</em>, <em>Campylobacter</em> or <em>Salmonella</em>, especially in HLA-B27-positive people.</li>
      <li><strong>Toxic shock syndrome:</strong> <strong>superantigens</strong> such as TSST-1 cause polyclonal T-cell activation and massive cytokine release.</li>
    </ul>
    <h4>Therapeutic implications</h4>
    <p>Adjunctive <strong>corticosteroids</strong> reduce hearing loss and neurological sequelae in pneumococcal meningitis, while <strong>IVIG</strong> is used in severe streptococcal toxic shock and in Guillain–Barré syndrome. Anti-cytokine strategies have been disappointing in unselected sepsis, because some inflammation is necessary for pathogen control. The key is to treat the infection while modulating the damaging response, not to suppress immunity indiscriminately.</p>
  `,
  tip: "Keep the mechanistic categories separate: cytokine-driven, granulomatous, and molecular mimicry.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "f27", domain: "foundations",
  q: "Describe bacterial outer membrane vesicles and explain their roles in pathogenesis, immune stimulation and vaccine development.",
  tags: ["omv", "vesicles", "vaccines", "pamps"],
  keypoints: ["outer membrane vesicles", "lipopolysaccharide", "TLR4", "NOD1", "biofilm", "horizontal gene transfer", "Neisseria meningitidis", "GMMA", "vaccine", "adjuvant", "toxin delivery", "decoy", "PAMP", "membrane vesicles"],
  answer: `
    <h4>Biogenesis and cargo</h4>
    <p><strong>Outer membrane vesicles</strong> are nanoscale spheres that bud from the outer membrane of Gram-negative bacteria. They carry <strong>lipopolysaccharide</strong>, outer-membrane proteins, phospholipids, periplasmic contents, nucleic acids and sometimes toxins. Gram-positive bacteria and mycobacteria also release <strong>membrane vesicles</strong>, though their composition differs. Vesiculation increases under stress, envelope mutation and quorum sensing. Vesicle size, cargo and yield vary with growth phase and with mutations that destabilise the envelope, which is why vesiculation is both a normal process and a stress response.</p>
    <h4>Functions in pathogenesis</h4>
    <ul>
      <li><strong>Toxin delivery:</strong> vesicles package toxins such as cholera toxin, Shiga toxin and leukotoxins, protecting them from antibody and delivering them to host cells.</li>
      <li><strong>PAMP delivery:</strong> vesicle-associated LPS and lipoproteins activate <strong>TLR4</strong>, TLR2 and <strong>NOD1</strong>, producing inflammation at sites distant from the bacteria.</li>
      <li><strong>Biofilm and nutrient acquisition:</strong> vesicles contribute matrix, enzymes and siderophores.</li>
      <li><strong>Immune evasion:</strong> <strong>decoy</strong> vesicles absorb antibodies and complement, and vesicle surface molecules can inhibit phagocytosis.</li>
      <li><strong>Gene transfer:</strong> vesicles carry DNA and can mediate <strong>horizontal gene transfer</strong>, including resistance genes.</li>
    </ul>
    <h4>Clinical and vaccine relevance</h4>
    <p>Vesicles are detectable in blood and tissue during infection and are being studied as biomarkers of Gram-negative burden. Their adjuvanticity is exploited in vaccines: detergent-extracted outer membrane vesicle vaccines against <em>Neisseria meningitidis</em> have been used successfully, and engineered <strong>GMMA</strong> platforms display heterologous antigens for <em>Shigella</em>, <em>Salmonella</em> and enterotoxigenic <em>E. coli</em>. Because vesicles present antigens in a native conformation with built-in <strong>adjuvant</strong> activity, they are attractive delivery vehicles. Safety concerns include endotoxin content and reactogenicity, which must be controlled during manufacture.</p>
  `,
  tip: "Treat the vesicle as a packaged envelope fragment: cargo, sensing, immune evasion and vaccine platform.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "f28", domain: "foundations",
  q: "Describe the principal bacterial envelope stress responses and explain how they contribute to antibiotic resistance and persistence.",
  tags: ["envelope stress", "sigma e", "resistance", "visa"],
  keypoints: ["envelope stress responses", "sigma E", "regulated intramembrane proteolysis", "CpxAR", "BaeSR", "efflux", "Psp", "Rcs", "LiaRS", "SigB", "colistin", "MprF", "daptomycin", "cell wall thickening", "VISA"],
  answer: `
    <h4>Why the envelope needs surveillance</h4>
    <p>The cell envelope is the interface with the environment and the target of many antibiotics and antimicrobial peptides. Misfolded proteins, lipid defects and membrane damage threaten viability, so bacteria mount <strong>envelope stress responses</strong> that repair damage, alter permeability and adjust transcription.</p>
    <h4>Principal systems</h4>
    <ul>
      <li><strong>Sigma E</strong> in <em>E. coli</em> and <em>Salmonella</em> is activated by periplasmic protein stress through <strong>regulated intramembrane proteolysis</strong> of the anti-sigma factor RseA by DegS and RseP. It induces periplasmic chaperones and proteases and modifies LPS.</li>
      <li><strong>CpxAR</strong> is a two-component system responding to misfolded pilin, alkaline pH and antibiotics; it controls chaperones, proteases, biofilm and virulence.</li>
      <li><strong>BaeSR</strong> induces multidrug <strong>efflux</strong> pumps such as AcrD and MdtABC in response to envelope and metal stress.</li>
      <li><strong>Psp</strong> responds to loss of membrane potential and secretin malfunction, protecting the inner membrane.</li>
      <li><strong>Rcs</strong> is a phosphorelay controlling capsule, biofilm and LPS; Gram-positive cells use <strong>LiaRS</strong>, VraRS, GraRS, WalKR and the general stress sigma factor <strong>SigB</strong>.</li>
    </ul>
    <h4>Contribution to resistance</h4>
    <p>Envelope stress responses remodel the surface: lipid A modification with aminoarabinose or phosphoethanolamine reduces <strong>colistin</strong> binding; lysyl-phosphatidylglycerol synthesis by <strong>MprF</strong> and changes in membrane charge reduce <strong>daptomycin</strong> activity; and <strong>cell wall thickening</strong> produces vancomycin-intermediate <em>S. aureus</em> (<strong>VISA</strong>). Efflux up-regulation and reduced porin expression lower intracellular drug concentrations. These are phenotypic adaptations that can precede fixed resistance mutations.</p>
    <h4>Clinical implications</h4>
    <p>Stress responses help explain treatment failure, heteroresistance and persistence, especially in biofilms and chronic infections. They also suggest targets: inhibitors of sigma E, Cpx or efflux could resensitise bacteria, but none is in routine use. Susceptibility testing must use standardised methods, and whole-genome sequencing can reveal regulatory mutations associated with resistance.</p>
  `,
  tip: "Group the systems by signal, then show how each remodels the surface or pumps the drug out.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "f29", domain: "foundations",
  q: "Describe bacterial cell division and peptidoglycan synthesis, and evaluate the divisome as a target for new antibiotics.",
  tags: ["cell division", "divisome", "peptidoglycan", "antibiotics"],
  keypoints: ["divisome", "FtsZ", "FtsA", "ZipA", "penicillin-binding proteins", "transpeptidase", "D-Ala-D-Ala", "elongasome", "β-lactams", "PBP2a", "vancomycin", "fosfomycin", "MurA", "LpxC", "MraY"],
  answer: `
    <h4>The bacterial cell cycle</h4>
    <p>Cell division coordinates chromosome replication, segregation and septation. In rod-shaped bacteria, the <strong>divisome</strong> assembles at midcell around the <strong>FtsZ</strong> ring, a GTP-dependent polymer related to tubulin. <strong>FtsA</strong> and <strong>ZipA</strong> anchor the ring to the membrane, FtsK handles chromosome segregation, and FtsQ, FtsL, FtsB, FtsW and FtsI/PBP3 form the septal synthesis machinery.</p>
    <h4>Peptidoglycan synthesis</h4>
    <p>Peptidoglycan is assembled from lipid-linked precursors and cross-linked by <strong>transpeptidase</strong> domains of <strong>penicillin-binding proteins</strong>. The substrate is the terminal <strong>D-Ala-D-Ala</strong> of the stem peptide. Elongation uses the <strong>elongasome</strong> with MreB and PBP2, while division uses PBP3. Autolysins and amidases remodel the septum so daughter cells separate.</p>
    <h4>Existing and new drug targets</h4>
    <ul>
      <li><strong>β-lactams</strong> acylate PBPs; resistance arises by altered PBPs (<strong>PBP2a</strong> in MRSA), β-lactamases or reduced permeability.</li>
      <li><strong>Vancomycin</strong> binds D-Ala-D-Ala; <em>van</em> genes replace it with D-Ala-D-Lac, abolishing binding.</li>
      <li><strong>Fosfomycin</strong> inhibits <strong>MurA</strong>, and cycloserine inhibits D-Ala racemase; both act early in peptidoglycan synthesis.</li>
      <li>Investigational targets include FtsZ, FtsA, FtsW, <strong>MraY</strong> and <strong>LpxC</strong>, the last being specific to Gram-negative LPS synthesis.</li>
    </ul>
    <h4>Why the divisome is attractive</h4>
    <p>Division is essential and conserved, and its components are absent from human cells. However, Gram-negative permeability, efflux and target redundancy limit many candidates, and resistance can emerge through mutations or bypass pathways. A successful agent must reach the periplasm or cytoplasm, avoid toxicity and retain activity against slow-growing and biofilm cells. Combining a divisome inhibitor with a β-lactam is a rational strategy because the two hits impair complementary steps in wall synthesis. The concept is sound, but translation to the clinic has been slow.</p>
  `,
  tip: "Draw the division machinery as a sequence, then map each existing drug to its step before discussing new targets.",
  sources: ["S1", "S2", "S8"]
},
{
  id: "f30", domain: "foundations",
  q: "Explain bacterial DNA repair and mutation pathways and discuss how mutator phenotypes accelerate antibiotic resistance and immune escape.",
  tags: ["dna repair", "mutator", "sos response", "resistance"],
  keypoints: ["mismatch repair", "MutS", "base excision repair", "nucleotide excision repair", "RecA", "SOS response", "LexA", "error-prone polymerases", "translesion synthesis", "mutator phenotype", "hypermutation", "Pseudomonas aeruginosa", "whole-genome sequencing", "fitness cost"],
  answer: `
    <h4>DNA damage and repair</h4>
    <p>Bacteria constantly repair replication errors and damage from oxidation, alkylation, radiation and antibiotics. <strong>Mismatch repair</strong> corrects errors that escape proofreading and requires <strong>MutS</strong>, MutL and MutH. <strong>Base excision repair</strong> removes damaged bases, <strong>nucleotide excision repair</strong> removes bulky adducts, and homologous recombination, directed by <strong>RecA</strong>, repairs double-strand breaks. The <strong>SOS response</strong> is induced when <strong>LexA</strong> is cleaved by activated RecA, freeing genes for repair, mutagenesis and prophage induction.</p>
    <h4>Error-prone repair and mutators</h4>
    <p>SOS induction activates <strong>error-prone polymerases</strong> such as Pol IV and Pol V, which bypass lesions at the cost of mutations. This <strong>translesion synthesis</strong> is a built-in mutator. A <strong>mutator phenotype</strong> arises when repair or proofreading is defective, for example through loss of mismatch repair or <em>dnaQ</em> proofreading. Such strains mutate at much higher rates and can rapidly acquire resistance and antigenic diversity.</p>
    <h4>Clinical importance</h4>
    <ul>
      <li><strong>Hypermutation</strong> is well described in <em>Pseudomonas aeruginosa</em> from cystic fibrosis, <em>H. pylori</em> and <em>M. tuberculosis</em>, where it accelerates adaptation to the host and to antibiotics.</li>
      <li>Mutators can hitchhike with resistance mutations, so a strain may carry several resistance determinants without sequential drug exposure.</li>
      <li><strong>Whole-genome sequencing</strong> can detect mutator genotypes and distinguish them from ordinary resistance.</li>
      <li>Mutator strains may pay a <strong>fitness cost</strong>, but compensatory mutations can stabilise them.</li>
    </ul>
    <h4>Therapeutic perspective</h4>
    <p>Combination therapy reduces the chance that a single mutation confers escape, and stewardship limits the selection of resistant mutants. Inhibiting error-prone polymerases or the SOS response is an experimental strategy to slow resistance evolution, but it risks impairing repair and increasing susceptibility to DNA-damaging agents. The practical message is that mutation supply, selection pressure and population size jointly determine how fast resistance emerges.</p>
  `,
  tip: "Link each repair pathway to the mutator phenotype, then translate that into resistance risk and treatment strategy.",
  sources: ["S1", "S2", "S13"]
}
);
