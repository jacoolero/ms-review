window.QBANK.push(
{
  id: "m9g1", domain: "m9", star: true,
  q: "Explain how the ICTV taxonomy and the Baltimore scheme classify viruses, and why a clinical virologist needs both.",
  tags: ["viral classification", "ICTV", "Baltimore", "taxonomy"],
  keypoints: ["ICTV", "order", "family", "genus", "species", "Baltimore", "mRNA", "dsDNA", "positive-sense ssRNA", "negative-sense ssRNA", "reverse transcriptase", "serotype", "genotype", "nomenclature"],
  answer: `
    <h4>Two different questions</h4>
    <p>Viral classification answers two separate questions. The <strong>ICTV</strong> system asks what a virus is related to, and the <strong>Baltimore</strong> system asks how its genome becomes mRNA. The International Committee on Taxonomy of Viruses assigns a hierarchical taxonomy — realm, kingdom, phylum, class, order, family, subfamily, genus and species — using genome sequence, gene content and replication features. Names are italicised and capitalised by rank, and a species is a policed category rather than a strain. ICTV taxonomy is essential for reference laboratories, sequence databases and vaccine nomenclature, but it changes as genomes are compared.</p>
    <h4>The Baltimore scheme</h4>
    <p>Baltimore groups viruses into seven classes by genome and the route to messenger RNA:</p>
    <ul>
      <li><strong>Class I</strong> dsDNA; <strong>II</strong> ssDNA; <strong>III</strong> dsRNA.</li>
      <li><strong>Class IV</strong> positive-sense ssRNA, translated directly.</li>
      <li><strong>Class V</strong> negative-sense ssRNA, which must carry RdRp.</li>
      <li><strong>Class VI</strong> ssRNA with a DNA intermediate (retroviruses).</li>
      <li><strong>Class VII</strong> dsDNA with an RNA intermediate (hepatitis B).</li>
    </ul>
    <h4>Why both matter</h4>
    <p>Taxonomy tells the laboratory what a virus is and how to report it; Baltimore predicts behaviour. A positive-sense RNA virus replicates in the cytoplasm and can be translated at once, whereas a negative-sense virus must package polymerase. Retroviruses integrate, and hepadnaviruses maintain cccDNA, which explains why those infections are not cured by short courses of drugs. Genome type also predicts mutation rate, reassortment potential and the polymerase or protease that a drug can target.</p>
    <div class="table-wrap"><table>
      <tr><th>Question</th><th>ICTV</th><th>Baltimore</th></tr>
      <tr><td>Based on</td><td>Evolutionary relationship</td><td>Genome and mRNA strategy</td></tr>
      <tr><td>Best used for</td><td>Naming and reference reporting</td><td>Predicting replication and drug targets</td></tr>
    </table></div>
    <p>Within either scheme, <strong>serotypes</strong> differ antigenically and <strong>genotypes</strong> genetically; neither is a substitute for a species name. The examination trap is to recite family names without linking genome type to replication.</p>
  `,
  tip: "Separate taxonomy (what it is related to) from Baltimore (how it makes mRNA), then use one drug target to prove the clinical point.",
  sources: ["S1", "S5", "S4"]
},
{
  id: "m9g2", domain: "m9", star: true,
  q: "How do capsid symmetry, envelope status and genome segmentation determine a virus's environmental stability, transmission route and capacity for reassortment?",
  tags: ["viral structure", "capsid", "envelope", "segmented genome"],
  keypoints: ["capsid", "helical", "icosahedral", "complex", "envelope", "naked virus", "environmental stability", "segmented genome", "reassortment", "antigenic shift", "faecal–oral", "droplet", "disinfectant", "alcohol", "chlorine"],
  answer: `
    <h4>Three structural decisions</h4>
    <p>Every virion resolves three problems: how to package a genome, whether to wrap it in a membrane, and whether to split the genome into segments. The answers constrain everything else — stability, route of spread, replication and the ease with which the virus escapes immunity.</p>
    <h4>Capsid symmetry</h4>
    <p><strong>Helical</strong> capsids (influenza, measles, rabies) arrange protein subunits around the genome, giving flexible filaments that suit enveloped, budding viruses. <strong>Icosahedral</strong> capsids (adenovirus, poliovirus, herpes simplex) use repeating subunits to build a rigid shell with maximal internal volume for minimal protein. <strong>Complex</strong> structures (poxvirus) combine membranes and lateral bodies. Symmetry affects how the virus uncoats and how capsid proteins can be targeted by assembly inhibitors.</p>
    <h4>Envelope and stability</h4>
    <div class="table-wrap"><table>
      <tr><th>Property</th><th>Naked virus</th><th>Enveloped virus</th></tr>
      <tr><td>Survival</td><td>Drying, acid, detergent, gut</td><td>Fragile outside host</td></tr>
      <tr><td>Spread</td><td>Faecal–oral, fomites, aerosol</td><td>Droplets, blood, sex, vectors</td></tr>
      <tr><td>Examples</td><td>Norovirus, adenovirus, HAV, B19</td><td>Influenza, HIV, SARS-CoV-2</td></tr>
    </table></div>
    <p>Naked viruses survive drying, acid and detergents, so they spread by the faecal–oral route, fomites and aerosols. Enveloped viruses are fragile, so they need close contact, droplets, blood, sexual exposure or vectors. The practical corollary is disinfection: alcohol and quaternary ammonium compounds reliably disrupt envelopes but may fail against norovirus, adenovirus, hepatitis A and parvovirus B19, which need chlorine or high-level disinfection.</p>
    <h4>Segmentation and reassortment</h4>
    <p>Segmented genomes (influenza A and B, rotavirus, bunyaviruses) allow <strong>reassortment</strong> when two strains infect one cell. Influenza antigenic shift, the source of pandemics, is reassortment of HA and NA segments; rotavirus reassortment complicates vaccine strain tracking. Non-segmented viruses can still recombine, but reassortment is faster and can swap whole genes at once.</p>
    <h4>Clinical consequences</h4>
    <p>Structure also sets the specimen and test: capsid antigen for rapid tests, envelope glycoprotein for neutralising antibody assays, and intact virions for electron microscopy. It explains why a non-enveloped virus resists a lipid solvent and why an enveloped virus is vulnerable to a fusion inhibitor.</p>
  `,
  tip: "Use naked versus enveloped to explain transmission and disinfection, then segmentation to explain reassortment and pandemics.",
  sources: ["S1", "S5", "S4"]
},
{
  id: "m9g3", domain: "m9", star: true,
  q: "Why do some viruses carry a polymerase in the virion? Explain the consequences for replication site, genome size and antiviral design.",
  tags: ["replication", "RdRp", "virion polymerase", "antiviral targets"],
  keypoints: ["negative-sense ssRNA", "RdRp", "dsRNA", "poxvirus", "reverse transcriptase", "hepadnavirus", "positive-sense ssRNA", "cytoplasm", "nucleus", "cap-snatching", "remdesivir", "baloxavir", "resistance", "genome size"],
  answer: `
    <h4>The problem of polarity</h4>
    <p>A virus must present its genome to a ribosome, but ribosomes read only positive-sense RNA. A genome that is already mRNA needs no polymerase at entry; a genome that is the complement of mRNA, or double-stranded, must first be transcribed. That single constraint explains why some virions carry enzymes and others do not.</p>
    <h4>Which viruses package polymerases</h4>
    <ul>
      <li><strong>Negative-sense ssRNA viruses</strong> (influenza, measles, rabies, Ebola, RSV) carry an RNA-dependent RNA polymerase, because the incoming genome cannot be translated and no cellular enzyme can copy RNA.</li>
      <li><strong>Double-stranded RNA viruses</strong> (rotavirus) carry RdRp inside the capsid and transcribe without exposing dsRNA to cytoplasmic sensors.</li>
      <li><strong>Poxviruses</strong> carry a DNA-dependent RNA polymerase and capping enzymes, because they replicate entirely in the cytoplasm away from nuclear transcription machinery.</li>
      <li><strong>Retroviruses</strong> carry reverse transcriptase and integrase, converting RNA to DNA and inserting it into the host genome.</li>
      <li><strong>Hepadnaviruses</strong> carry a reverse transcriptase that converts pregenomic RNA into DNA inside the capsid.</li>
    </ul>
    <h4>Consequences</h4>
    <p>Packaging an enzyme costs space, so these viruses tolerate less additional genetic material — a constraint on vector design and on the size of accessory genes. It also fixes the replication site: negative-sense and dsRNA viruses begin in the cytoplasm, whereas retroviruses and hepadnaviruses must reach the nucleus. Positive-sense RNA viruses (picornavirus, coronavirus, flavivirus) can translate immediately, make their own polymerase and then replicate, which is faster but exposes dsRNA intermediates to innate sensors.</p>
    <h4>Antiviral design</h4>
    <p>Each packaged or induced enzyme is a target: RdRp for remdesivir and sofosbuvir, the cap-dependent endonuclease for baloxavir, reverse transcriptase and integrase for HIV, and HBV polymerase for tenofovir. Resistance usually appears as point mutations in the enzyme that reduce drug binding without abolishing catalysis. Knowing which step is virus-encoded tells you which drug class can work and which cannot.</p>
  `,
  tip: "Start from polarity: if the genome cannot be read by ribosomes, the virion must bring the enzyme — then name the drug aimed at it.",
  sources: ["S1", "S5", "S4"]
},
{
  id: "m9g4", domain: "m9", star: true,
  q: "Explain the determinants of viral pathogenesis, from receptor binding and tropism to immune-mediated injury and recovery.",
  tags: ["viral pathogenesis", "tropism", "immunopathology", "sequelae"],
  keypoints: ["entry", "tropism", "receptor", "co-receptor", "viraemia", "cytopathology", "immunopathology", "cytokine", "incubation period", "shedding", "immunosuppression", "HLA", "sequelae", "asymptomatic"],
  answer: `
    <h4>From exposure to disease</h4>
    <p>Viral pathogenesis is the sequence that turns an infectious dose into tissue injury. It begins with <strong>entry</strong>, requires <strong>tropism</strong>, and ends in either clearance, persistence or death. Each step is a bottleneck that the virus must solve and the host tries to block.</p>
    <h4>Entry and tropism</h4>
    <p>Entry routes include respiratory droplets and aerosols, faecal–oral, sexual, blood and vector-borne inoculation. Tropism is determined by receptor expression, co-receptors and intracellular factors: HIV needs CD4 and CCR5 or CXCR4; SARS-CoV-2 needs ACE2 and TMPRSS2; poliovirus needs CD155; hepatitis B uses NTCP. A virus may bind broadly but replicate only where the post-entry environment permits, so receptor presence alone is not sufficient.</p>
    <h4>Spread and injury</h4>
    <ul>
      <li><strong>Local replication</strong> at the portal causes the first symptoms (coryza, diarrhoea).</li>
      <li><strong>Viraemia</strong> distributes virus to target organs; dengue and enteroviruses illustrate this phase.</li>
      <li><strong>Direct cytopathology</strong> follows lytic replication, as in poliovirus motor neurons.</li>
      <li><strong>Immune-mediated injury</strong> dominates hepatitis B, dengue and COVID-19, where cytokines, cytotoxic T cells and complement damage tissue.</li>
      <li><strong>Immunosuppression</strong> by measles, HIV or CMV predisposes to secondary infection.</li>
    </ul>
    <h4>Host and outcome</h4>
    <p>Age, nutrition, pregnancy, co-infection and HLA type modify severity. Incubation period, shedding site and the asymptomatic proportion determine transmission. Recovery requires clearance of infected cells and neutralising antibody, but sequelae — fibrosis, SSPE, post-polio syndrome and long COVID — can persist after the virus is gone. The same virus can therefore cause a mild illness in one host and fulminant disease in another, which is why severity scores outperform viral load alone.</p>
    <div class="table-wrap"><table>
      <tr><th>Mechanism</th><th>Example</th></tr>
      <tr><td>Cytolysis</td><td>Poliovirus, HSV</td></tr>
      <tr><td>Immunopathology</td><td>Hepatitis B, dengue</td></tr>
      <tr><td>Oncogenesis</td><td>HPV, EBV</td></tr>
    </table></div>
  `,
  tip: "Walk the chain entry, tropism, spread, injury, outcome — and name whether the damage is direct or immune-mediated.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "m9g5", domain: "m9", star: true,
  q: "Describe innate and adaptive antiviral immunity and the principal strategies viruses use to evade them.",
  tags: ["antiviral immunity", "interferon", "immune evasion", "T cells"],
  keypoints: ["pattern recognition receptor", "TLR3", "RIG-I", "MDA5", "cGAS–STING", "type I interferon", "NK cell", "CD8", "neutralising antibody", "memory", "MHC class I", "antigenic variation", "T-cell exhaustion", "immune privilege"],
  answer: `
    <h4>Innate sensing</h4>
    <p>The innate response detects molecular patterns rather than specific pathogens. <strong>Toll-like receptors</strong> 3, 7 and 8  (TLR3, TLR7, TLR8) sense dsRNA and ssRNA in endosomes; <strong>RIG-I</strong> and <strong>MDA5</strong> sense cytoplasmic RNA; <strong>cGAS–STING</strong> senses cytosolic DNA. Signalling through IRF3 and NF-κB induces <strong>type I interferon</strong>, which establishes an antiviral state through PKR, OAS–RNase L and Mx proteins, and recruits <strong>NK cells</strong> and macrophages. Complement and interferons also shape the early phase.</p>
    <h4>Adaptive immunity</h4>
    <p>Dendritic cells present antigen and prime <strong>CD8 cytotoxic T cells</strong>, which kill infected cells, and <strong>CD4 helper cells</strong>, which support antibody and memory. Neutralising <strong>IgG and IgA</strong> block attachment and entry; IgM appears earlier. Memory B and T cells provide durable protection, which is the basis of vaccination. Mucosal IgA is important for respiratory and enteric viruses.</p>
    <h4>Evasion</h4>
    <ul>
      <li><strong>MHC class I down-regulation</strong> (HIV Nef, HSV ICP47, CMV US2/11) hides infected cells from CD8 T cells.</li>
      <li><strong>Interferon antagonism</strong> by NS1 (influenza), NSP1 (rotavirus) and SARS-CoV-2 ORF6.</li>
      <li><strong>Antigenic variation</strong> in HIV Env, influenza HA and the HCV hypervariable region.</li>
      <li><strong>Latency and immune privilege</strong> in ganglia, CNS and kidney.</li>
      <li><strong>Decoy receptors and complement mimics</strong> in poxviruses and herpesviruses.</li>
      <li><strong>T-cell exhaustion</strong> with chronic antigen, mediated by PD-1 and TIM-3.</li>
    </ul>
    <h4>Why it matters clinically</h4>
    <p>Immunosuppression converts mild viruses into lethal ones, and immunopathology can be worse than the virus itself. Interferon-based therapy is used in hepatitis B and C, while checkpoint blockade is being explored to restore exhausted antiviral T cells. Vaccines work by generating neutralising antibody and memory T cells before exposure.</p>
  `,
  tip: "Organise by timing: innate sensing and interferon first, adaptive effector and memory second, evasion third.",
  sources: ["S1", "S2", "S4"]
},
{
  id: "m9g6", domain: "m9", star: true,
  q: "How do herpesviruses, HIV and hepatitis B establish lifelong reservoirs, and what does each reservoir imply for cure?",
  tags: ["latency", "reservoir", "HIV cure", "cccDNA"],
  keypoints: ["latency", "episome", "LAT", "reactivation", "provirus", "resting memory CD4", "shock and kill", "block and lock", "cccDNA", "sterilising cure", "functional cure", "reservoir", "integration", "nucleos(t)ide analogue"],
  answer: `
    <h4>Three reservoirs, three problems</h4>
    <p>Herpesviruses, HIV and hepatitis B all persist for life, but they hide in different forms. The form of the reservoir determines whether a drug can reach it and whether cure is plausible.</p>
    <h4>Herpesviruses: silent episomes</h4>
    <p>HSV-1 and HSV-2 establish latency in sensory ganglion neurons as a <strong>circular episome</strong>, expressing latency-associated transcripts (LAT) and almost no protein. VZV does the same in dorsal root ganglia. EBV persists as an episome in memory B cells with a restricted latent gene programme, and CMV maintains a latent reservoir in myeloid progenitors. Reactivation is triggered by stress, fever and immunosuppression. Aciclovir blocks lytic replication but cannot eliminate the episome, so suppression is chronic rather than curative.</p>
    <h4>HIV: integrated provirus</h4>
    <p>HIV reverse-transcribes its genome and integrates it into host DNA, mainly in resting memory CD4 T cells. Most proviruses are defective, but a small inducible reservoir re-seeds viraemia within weeks of stopping therapy. Latency is maintained by transcriptional silencing and by the scarcity of activating signals in resting cells. Strategies under study include <strong>shock and kill</strong>, <strong>block and lock</strong>, broadly neutralising antibodies and gene editing.</p>
    <h4>Hepatitis B: cccDNA</h4>
    <p>HBV forms covalently closed circular DNA in the hepatocyte nucleus, which persists as a stable transcriptional template. Nucleos(t)ide analogues suppress reverse transcription but do not remove cccDNA, so relapse follows withdrawal and hepatocellular carcinoma risk persists.</p>
    <div class="table-wrap"><table>
      <tr><th>Virus</th><th>Reservoir form</th><th>Implication</th></tr>
      <tr><td>HSV/VZV</td><td>Ganglionic episome</td><td>Reactivation, not eradication</td></tr>
      <tr><td>HIV</td><td>Integrated provirus</td><td>Lifelong ART</td></tr>
      <tr><td>HBV</td><td>Nuclear cccDNA</td><td>Suppression, not cure</td></tr>
    </table></div>
    <p><strong>Sterilising cure</strong> removes every replication-competent genome; <strong>functional cure</strong> controls it without drugs. The distinction matters when counselling patients.</p>
  `,
  tip: "Name the physical form of each reservoir — episome, provirus, cccDNA — then say why that form defeats the available drug.",
  sources: ["S1", "S5", "S4"]
},
{
  id: "m9g7", domain: "m9", star: true,
  q: "Explain the main antiviral drug targets and the mechanisms by which viruses develop resistance, and justify combination therapy.",
  tags: ["antivirals", "resistance", "combination therapy", "drug targets"],
  keypoints: ["attachment inhibitor", "fusion inhibitor", "RdRp", "reverse transcriptase", "integrase", "protease", "neuraminidase", "terminase", "quasispecies", "K65R", "M184V", "H275Y", "thymidine kinase", "genetic barrier", "combination therapy", "genotypic resistance"],
  answer: `
    <h4>Where drugs act</h4>
    <p>Antivirals target virus-encoded steps or host functions the virus needs. Because replication is intimately tied to the host cell, selectivity is difficult, and most drugs are virostatic rather than virucidal.</p>
    <div class="table-wrap"><table>
      <tr><th>Step</th><th>Target</th><th>Example</th></tr>
      <tr><td>Attachment/fusion</td><td>gp41, CCR5</td><td>Enfuvirtide, maraviroc</td></tr>
      <tr><td>Uncoating</td><td>M2 ion channel</td><td>Amantadine (obsolete)</td></tr>
      <tr><td>Polymerase</td><td>RdRp, reverse transcriptase</td><td>Remdesivir, tenofovir</td></tr>
      <tr><td>Integration</td><td>Integrase</td><td>Dolutegravir</td></tr>
      <tr><td>Protease</td><td>Polyprotein cleavage</td><td>Nirmatrelvir, glecaprevir</td></tr>
      <tr><td>Release</td><td>Neuraminidase</td><td>Oseltamivir</td></tr>
      <tr><td>Terminase</td><td>CMV DNA packaging</td><td>Letermovir</td></tr>
    </table></div>
    <h4>How resistance arises</h4>
    <p>RNA viruses and retroviruses replicate with error-prone polymerases, producing a <strong>quasispecies</strong> in which pre-existing mutants survive drug pressure. Resistance mechanisms include:</p>
    <ul>
      <li>Point mutations in the target that reduce binding (HIV K65R and M184V; influenza H275Y; CMV UL97).</li>
      <li>Reduced drug activation, as with HSV thymidine kinase mutants that fail to phosphorylate aciclovir.</li>
      <li>Increased efflux or altered nucleotide pools.</li>
      <li>Compensatory mutations that restore viral fitness.</li>
      <li>Conformational change in the target enzyme that lowers drug binding.</li>
    </ul>
    <h4>Combination therapy</h4>
    <p>Combining drugs with different targets raises the genetic barrier: a virus would need several simultaneous mutations. HIV and HCV treatment therefore use three or more agents, and adherence matters because subtherapeutic levels select resistance. Genotypic resistance testing guides switches after failure, and phenotypic testing is used when mutations are ambiguous. For influenza, single-agent therapy is usual because resistance is less common, but oseltamivir resistance is monitored. The same logic applies to monoclonal antibodies, where single substitutions in the spike can abolish protection. Suboptimal dosing, missed doses and poor penetration into sanctuary sites all select mutants, so resistance is as much a prescribing problem as a molecular one. Archived mutations may also reappear when a drug is re-used, so testing must be read alongside the treatment history.</p>
  `,
  tip: "Map each drug to a replication step, then explain resistance as a pre-existing mutant selected by inadequate drug pressure.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "m9g8", domain: "m9", star: true,
  q: "Compare the main viral vaccine platforms and explain how viral vectors are used in vaccines and gene therapy.",
  tags: ["vaccines", "viral vectors", "mRNA", "gene therapy"],
  keypoints: ["live attenuated", "inactivated", "subunit", "VLP", "viral vector", "mRNA", "adenovirus", "MVA", "lentivirus", "AAV", "insertional mutagenesis", "pre-existing immunity", "cold chain", "adjuvant", "CAR-T"],
  answer: `
    <h4>Platforms</h4>
    <p>A vaccine must present antigen safely while inducing durable humoral and cellular immunity. Viral platforms differ in how they do this and in their practical constraints.</p>
    <div class="table-wrap"><table>
      <tr><th>Platform</th><th>Example</th><th>Strength</th><th>Limitation</th></tr>
      <tr><td>Live attenuated</td><td>MMR, varicella, yellow fever</td><td>Strong, durable immunity</td><td>Unsafe in pregnancy and immunosuppression</td></tr>
      <tr><td>Inactivated</td><td>IPV, hepatitis A, influenza</td><td>Safe, stable</td><td>Boosters, weaker cellular response</td></tr>
      <tr><td>Subunit/VLP</td><td>HBV, HPV</td><td>Well tolerated, defined antigen</td><td>Adjuvant needed, costly</td></tr>
      <tr><td>Viral vector</td><td>ChAdOx1, Ad26</td><td>Strong T-cell response</td><td>Anti-vector immunity</td></tr>
      <tr><td>mRNA</td><td>COVID-19 vaccines</td><td>Rapid design, scalable</td><td>Cold chain, reactogenicity</td></tr>
    </table></div>
    <h4>Viral vectors</h4>
    <p>Vectors are engineered viruses that deliver a gene without causing disease. <strong>Adenoviral vectors</strong> transduce dividing and non-dividing cells and are used in COVID-19 vaccines and gene therapy, but pre-existing immunity to common serotypes limits efficacy. <strong>Modified vaccinia Ankara (MVA)</strong> is a replication-deficient poxvirus vector with a large insert capacity. <strong>Lentiviral vectors</strong> integrate into the genome, giving stable expression for CAR-T cells and gene therapy, at the cost of insertional mutagenesis risk. <strong>Adeno-associated virus (AAV)</strong> is non-pathogenic and gives long-term expression in non-dividing cells such as retina, liver and muscle, but its packaging capacity is about 4.7 kb and neutralising antibodies are common.</p>
    <h4>Safety and deployment</h4>
    <p>Live vaccines can revert or cause disease in immunocompromised hosts; inactivated and subunit vaccines are safer but need adjuvants and boosters. Cold chain, needle-free delivery and vaccine confidence determine whether a platform works in practice. Vectors used in gene therapy require long-term monitoring for off-target effects and malignancy. Platforms are also judged by durability: live vaccines often give decades of protection, whereas mRNA and vector vaccines may need boosters as antibody wanes.</p>
  `,
  tip: "Compare platforms on immunogenicity, safety and logistics, then separate vaccine vectors from gene-therapy vectors by insert size and integration.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "m11g1", domain: "m11", star: true,
  q: "Compare SARS-CoV, MERS-CoV and SARS-CoV-2 in receptor use, intermediate host and epidemic behaviour.",
  tags: ["SARS-CoV", "MERS-CoV", "SARS-CoV-2", "coronavirus"],
  keypoints: ["SARS-CoV", "MERS-CoV", "SARS-CoV-2", "ACE2", "DPP4", "TMPRSS2", "palm civet", "dromedary camel", "case fatality", "superspreading", "nosocomial", "spike", "furin", "zoonotic spillover", "genomic surveillance"],
  answer: `
    <h4>Three zoonotic coronaviruses</h4>
    <p>SARS-CoV, MERS-CoV and SARS-CoV-2 are enveloped, positive-sense ssRNA betacoronaviruses with proofreading exonuclease activity. All cause severe respiratory disease, but they differ in receptor, intermediate host and epidemic behaviour.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>SARS-CoV</th><th>MERS-CoV</th><th>SARS-CoV-2</th></tr>
      <tr><td>Emergence</td><td>2002-2003, China</td><td>2012, Saudi Arabia</td><td>2019, China</td></tr>
      <tr><td>Receptor</td><td>ACE2</td><td>DPP4</td><td>ACE2 + TMPRSS2</td></tr>
      <tr><td>Intermediate host</td><td>Palm civet; bats reservoir</td><td>Dromedary camel</td><td>Uncertain; bat-like virus</td></tr>
      <tr><td>Case fatality</td><td>About 10%</td><td>About 35%</td><td>Lower, age-dependent</td></tr>
      <tr><td>Transmission</td><td>Superspreading, nosocomial</td><td>Limited, camel contact, nosocomial</td><td>Efficient droplet and airborne</td></tr>
    </table></div>
    <h4>Why the differences matter</h4>
    <p>SARS-CoV caused about 8,000 cases before containment by isolation and quarantine. MERS-CoV continues to cause sporadic cases and hospital clusters in the Middle East, with camel exposure and poor infection control as drivers. SARS-CoV-2 spread globally because it replicates efficiently in the upper airway, transmits before symptoms, and infected a population with no prior immunity. Its lower crude case fatality refers to the much larger denominator of mild infections. Case fatality is also distorted by ascertainment: MERS is diagnosed mainly in severe hospital cases, while SARS-CoV-2 testing captured millions of mild infections.</p>
    <h4>Virological lessons</h4>
    <p>All three use a spike protein that must be cleaved by a host protease, making furin and TMPRSS2 attractive targets. All suppress interferon and cause immunopathology in severe cases. The animal interface is the common thread: wet markets, camel husbandry and bat-human contact create opportunities for spillover. Surveillance at that interface, together with genomic sequencing, is the only way to detect the next coronavirus before it establishes human transmission.</p>
  `,
  tip: "Build a three-column table on receptor, host and transmission, then explain why only SARS-CoV-2 caused a pandemic.",
  sources: ["S1", "S4", "S11", "S25"]
},
{
  id: "m11g2", domain: "m11", star: true,
  q: "Explain the pathogenesis and transmission of severe coronavirus disease, including ACE2 tropism, immune dysregulation and superspreading.",
  tags: ["COVID-19", "pathogenesis", "transmission", "ARDS"],
  keypoints: ["droplet", "aerosol", "superspreading", "ACE2", "TMPRSS2", "type II pneumocyte", "interferon", "cytokine release", "endothelial injury", "thrombosis", "ARDS", "hypoxaemia", "age", "obesity", "MIS-C"],
  answer: `
    <h4>Transmission</h4>
    <p>SARS-CoV-2 spreads mainly by respiratory <strong>droplets and aerosols</strong>, with highest risk in crowded, poorly ventilated indoor spaces. Fomites contribute little. Infectiousness peaks around symptom onset and can precede it, so isolation after symptoms misses a substantial share of transmission. Superspreading events, in which a minority of cases generate most secondary infections, are characteristic and explain why ventilation and masking outperform purely symptom-based screening.</p>
    <h4>From airway to alveolus</h4>
    <p>The spike binds <strong>ACE2</strong>, which is abundant on nasal ciliated cells and type II pneumocytes; <strong>TMPRSS2</strong> primes the spike for fusion. Initial replication in the upper airway produces mild disease. When virus reaches the alveoli, infection of pneumocytes and macrophages triggers a delayed but exaggerated innate response. Interferon signalling is antagonised by viral proteins such as Nsp1 and ORF6, allowing unchecked replication before immunity arrives.</p>
    <h4>Immune dysregulation</h4>
    <ul>
      <li><strong>Cytokine release</strong> with IL-6, IL-1 and TNF drives fever, malaise and capillary leak.</li>
      <li><strong>Endothelial injury and thrombosis</strong> cause pulmonary embolism, stroke and microangiopathy.</li>
      <li><strong>Neutrophil extracellular traps</strong> and complement activation damage the alveolar barrier.</li>
      <li><strong>ARDS</strong> follows, with hyaline membranes, oedema and impaired gas exchange.</li>
    </ul>
    <p>Severity is strongly age-dependent, and risk rises with obesity, diabetes, chronic lung disease, immunosuppression and pregnancy. Children usually have mild disease, but multisystem inflammatory syndrome (MIS-C) can follow weeks later.</p>
    <h4>Clinical implications</h4>
    <p>Because early disease is viral and late disease is inflammatory, antivirals work early and steroids work late. Hypoxaemia may be silent until decompensation, so pulse oximetry is essential. The same pathogenesis explains thromboembolism, myocardial injury and post-acute sequelae. Vaccination reduces severe disease most strongly, while mucosal immunity and ventilation reduce infection and onward spread.</p>
  `,
  tip: "Separate the viral phase from the inflammatory phase, then explain why timing determines whether an antiviral or a steroid helps.",
  sources: ["S1", "S4", "S11", "S25"]
},
{
  id: "m11g3", domain: "m11", star: true,
  q: "Compare RT-PCR, antigen testing, serology and sequencing for coronavirus diagnosis, and explain when each is appropriate.",
  tags: ["COVID-19", "diagnosis", "RT-PCR", "serology"],
  keypoints: ["RT-PCR", "cycle threshold", "antigen test", "serology", "IgM", "IgG", "sequencing", "nasopharyngeal swab", "saliva", "false negative", "seroprevalence", "RITM", "RA 11332", "biosafety"],
  answer: `
    <h4>What each test answers</h4>
    <p>Coronavirus diagnosis is not one test but a set of questions: is the patient infected now, was the patient infected before, and which variant is circulating? Each question has a different optimal method.</p>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Detects</th><th>Best use</th><th>Limitation</th></tr>
      <tr><td>RT-PCR</td><td>Viral RNA</td><td>Acute diagnosis</td><td>Cost, turnaround, early false negatives</td></tr>
      <tr><td>Antigen test</td><td>Viral protein</td><td>Rapid triage, outbreak screening</td><td>Lower sensitivity</td></tr>
      <tr><td>Serology</td><td>IgM and IgG</td><td>Retrospective and serosurveys</td><td>Not for acute exclusion</td></tr>
      <tr><td>Sequencing</td><td>Genome</td><td>Variants and surveillance</td><td>Slow, needs infrastructure</td></tr>
    </table></div>
    <h4>Molecular testing</h4>
    <p><strong>RT-PCR</strong> remains the reference standard. Assays target conserved regions such as ORF1ab, E and N, and a low cycle threshold indicates high viral load. Sensitivity depends on specimen, timing and technique: nasopharyngeal or combined nasal/oropharyngeal swabs are preferred, and saliva is acceptable in some settings. A negative test in a strongly suspected case should be repeated rather than accepted as exclusion.</p>
    <h4>Antigen and serology</h4>
    <p>Rapid antigen tests are useful when molecular capacity is limited, but they miss low viral loads and perform best within the first week. Serology is not diagnostic acutely because IgM and IgG appear after days to weeks; it is used for seroprevalence, retrospective diagnosis and vaccine-response studies. Cross-reactivity with seasonal coronaviruses complicates interpretation.</p>
    <h4>Sequencing and biosafety</h4>
    <p>Whole-genome sequencing identifies variants and is central to surveillance. Respiratory specimens should be handled at the appropriate biosafety level, with extraction and inactivation validated for the platform. In the Philippines, RITM provides reference testing and confirmatory capacity, and results feed PIDSR reporting under RA 11332. Turnaround time matters more than volume: a sequence reported after the wave has passed cannot change clinical or public-health decisions.</p>
  `,
  tip: "Match the test to the clinical question and the day of illness, then mention the false-negative window for PCR.",
  sources: ["S1", "S4", "S10", "S31"]
},
{
  id: "m11g4", domain: "m11", star: true,
  q: "Outline the evidence-based treatment of COVID-19 by severity, and explain the rationale for antivirals, steroids and immunomodulators.",
  tags: ["COVID-19", "treatment", "antivirals", "dexamethasone"],
  keypoints: ["nirmatrelvir", "ritonavir", "remdesivir", "dexamethasone", "tocilizumab", "baricitinib", "hypoxia", "anticoagulation", "drug interaction", "renal impairment", "molnupiravir", "hydroxychloroquine", "bacterial co-infection", "prone positioning"],
  answer: `
    <h4>Match treatment to phase</h4>
    <p>COVID-19 treatment depends on severity and timing. Antivirals reduce progression when given early in high-risk outpatients; immunomodulators reduce mortality when given to hypoxaemic inpatients. Giving the wrong drug at the wrong phase is ineffective or harmful.</p>
    <div class="table-wrap"><table>
      <tr><th>Severity</th><th>Main treatment</th><th>Notes</th></tr>
      <tr><td>Mild, low risk</td><td>Symptomatic care</td><td>No specific antiviral needed</td></tr>
      <tr><td>Mild, high risk</td><td>Nirmatrelvir–ritonavir or remdesivir</td><td>Start within 5-7 days</td></tr>
      <tr><td>Moderate, hypoxaemic</td><td>Remdesivir, dexamethasone, oxygen</td><td>Steroid only with hypoxia</td></tr>
      <tr><td>Severe or critical</td><td>Dexamethasone plus IL-6 antagonist or JAK inhibitor</td><td>Anticoagulation, ventilation</td></tr>
    </table></div>
    <h4>Antivirals</h4>
    <p><strong>Nirmatrelvir–ritonavir</strong> inhibits the main protease and is preferred for high-risk outpatients, but ritonavir causes major interactions with statins, immunosuppressants, antiarrhythmics and some antipsychotics. Renal impairment requires dose reduction. <strong>Remdesivir</strong> inhibits RdRp and is given intravenously for three days in outpatients or five days in inpatients. Molnupiravir has lower efficacy and is reserved when alternatives are unsuitable.</p>
    <h4>Immunomodulation</h4>
    <p><strong>Dexamethasone</strong> reduces mortality in patients needing oxygen or ventilation but is harmful in those without hypoxia. <strong>Tocilizumab</strong> or <strong>baricitinib</strong> is added in rapidly worsening severe disease, usually with steroids. Prophylactic anticoagulation is standard unless bleeding risk predominates; therapeutic dosing is reserved for confirmed thrombosis.</p>
    <h4>What not to do</h4>
    <p>Hydroxychloroquine, ivermectin and convalescent plasma are not recommended outside trials. Antibiotics are indicated only for suspected bacterial co-infection, which is uncommon at presentation. Oxygen targets, awake prone positioning and lung-protective ventilation follow standard critical-care practice. Fluid balance, thromboprophylaxis and early recognition of deterioration remain the backbone of ward care, and antimicrobial stewardship should guide antibiotic use in a pandemic where bacterial co-infection is uncommon.</p>
  `,
  tip: "Organise by severity, not by drug list; state the phase rule that antivirals are early and steroids are late.",
  sources: ["S4", "S9", "S11", "S25"]
},
{
  id: "m11g5", domain: "m11", star: true,
  q: "Explain how SARS-CoV-2 variants emerge and are tracked, and how long COVID is defined and assessed.",
  tags: ["SARS-CoV-2 variants", "genomic surveillance", "long COVID"],
  keypoints: ["variant of concern", "spike", "immune escape", "recombination", "genomic surveillance", "Philippine Genome Center", "GISAID", "RITM", "long COVID", "post-exertional malaise", "viral persistence", "EBV reactivation", "three months"],
  answer: `
    <h4>How variants arise</h4>
    <p>SARS-CoV-2 evolves by point mutation and recombination, especially in the spike gene. Mutations that increase <strong>ACE2 binding</strong>, improve <strong>immune escape</strong> or alter <strong>furin cleavage</strong> can raise fitness. Variants are classified by WHO as under monitoring, of interest or of concern according to transmissibility, severity, immune escape and diagnostic or therapeutic impact. Alpha, Delta and Omicron each changed the epidemic; Omicron combined high transmissibility with extensive antibody escape, producing a wave despite widespread immunity.</p>
    <h4>Genomic surveillance</h4>
    <ul>
      <li>Sample representatively: severe cases, reinfections, vaccinated cases, outbreaks and travel-related cases.</li>
      <li>Sequence at RITM and the Philippine Genome Center, with quality control and timely deposition in GISAID.</li>
      <li>Link sequences to metadata — age, severity, vaccination and cluster — or the sequence cannot guide action.</li>
      <li>Track turnaround time and feed results into PIDSR under RA 11332.</li>
    </ul>
    <h4>Long COVID</h4>
    <p>Long COVID is defined as symptoms persisting for at least <strong>three months</strong> after infection, lasting at least two months and not explained by another diagnosis. Common features are fatigue, breathlessness, cognitive impairment, palpitations, sleep disturbance and post-exertional malaise. Proposed mechanisms include viral persistence in tissue reservoirs, immune dysregulation, autoantibody formation, microvascular injury and reactivation of latent viruses such as EBV. Risk is higher after severe disease but occurs after mild infection too.</p>
    <h4>Assessment</h4>
    <p>There is no diagnostic test. Assessment is clinical: exclude anaemia, thyroid disease, cardiac and pulmonary disease, and mood disorders; use validated symptom scales and rehabilitation. Laboratory research on biomarkers is promising but not yet standard. The laboratory's role is to support surveillance and rule out alternative diagnoses, not to test for long COVID.</p>
  `,
  tip: "Distinguish variant emergence from variant tracking, then define long COVID by duration and exclusion rather than by a biomarker.",
  sources: ["S11", "S25", "S31", "S33"]
},
{
  id: "m12g1", domain: "m12", star: true,
  q: "Describe the molecular virology of HIV-1 and explain how receptor use, reverse transcription and integration shape tropism, latency and drug targets.",
  tags: ["HIV", "gp120", "integration", "latency"],
  keypoints: ["gp120", "gp41", "CD4", "CCR5", "CXCR4", "reverse transcriptase", "integrase", "protease", "provirus", "Tat", "Rev", "Nef", "latency", "quasispecies", "co-receptor"],
  answer: `
    <h4>The virion</h4>
    <p>HIV-1 is an enveloped retrovirus with two copies of positive-sense ssRNA and three enzymes: <strong>reverse transcriptase</strong>, <strong>integrase</strong> and <strong>protease</strong>. The envelope glycoprotein is a trimer of gp120 and gp41. Gag and Pol polyproteins are cleaved by protease during maturation, which is why protease inhibitors trap immature, non-infectious particles.</p>
    <h4>Entry and tropism</h4>
    <p><strong>gp120</strong> binds <strong>CD4</strong> on T helper cells, macrophages and dendritic cells, then a chemokine co-receptor: <strong>CCR5</strong> for macrophage-tropic strains and <strong>CXCR4</strong> for T-cell-tropic strains. Co-receptor use determines tropism and can change during disease. <strong>gp41</strong> inserts into the membrane and drives fusion. Cells lacking CD4 or the appropriate co-receptor are resistant, which explains why some exposed individuals remain uninfected.</p>
    <h4>Reverse transcription and integration</h4>
    <p>Reverse transcriptase copies the RNA genome into double-stranded DNA with a high error rate, generating quasispecies and resistance. The pre-integration complex enters the nucleus, and <strong>integrase</strong> inserts the provirus into host DNA. Integration is effectively irreversible, so the provirus persists for the life of the cell. Transcription is activated by <strong>Tat</strong> and regulated by <strong>Rev</strong>, <strong>Nef</strong> and other accessory proteins that also modulate immune recognition.</p>
    <h4>Latency</h4>
    <p>In resting memory CD4 T cells, the provirus is transcriptionally silent. These cells are invisible to immune clearance and to drugs that act on replicating virus, forming the main barrier to cure. Because the reservoir is seeded within days of infection, early ART limits its size but cannot abolish it.</p>
    <div class="table-wrap"><table>
      <tr><th>Step</th><th>Target</th></tr>
      <tr><td>gp120–CD4 binding</td><td>Attachment inhibitors</td></tr>
      <tr><td>Co-receptor binding</td><td>Maraviroc</td></tr>
      <tr><td>Fusion</td><td>Enfuvirtide</td></tr>
      <tr><td>Reverse transcription</td><td>NRTIs, NNRTIs</td></tr>
      <tr><td>Integration</td><td>Integrase inhibitors</td></tr>
      <tr><td>Maturation</td><td>Protease inhibitors</td></tr>
    </table></div>
  `,
  tip: "Trace entry, reverse transcription, integration and latency in order, naming the enzyme and drug class at each step.",
  sources: ["S1", "S4", "S16"]
},
{
  id: "m12g2", domain: "m12", star: true,
  q: "Describe the natural history of untreated HIV infection, including the acute retroviral syndrome, viral set point and CD4-defined stages.",
  tags: ["HIV", "natural history", "CD4", "acute retroviral syndrome"],
  keypoints: ["acute retroviral syndrome", "seroconversion", "set point", "viral load", "CD4", "clinical latency", "elite controller", "AIDS", "Pneumocystis", "toxoplasmosis", "cryptococcal meningitis", "CMV retinitis", "MAC", "median survival"],
  answer: `
    <h4>Acute infection</h4>
    <p>Two to four weeks after exposure, about half of patients develop an <strong>acute retroviral syndrome</strong>: fever, sore throat, lymphadenopathy, rash, myalgia, headache and sometimes mouth ulcers or aseptic meningitis. Viraemia is extremely high, CD4 counts fall transiently, and HIV RNA can be detected before antibody. Because the illness resembles influenza or mononucleosis, it is often missed, yet this is the period of greatest infectiousness.</p>
    <h4>Set point and clinical latency</h4>
    <p>After seroconversion, viral load settles to a <strong>set point</strong> that predicts progression: patients with fewer than 1,000 copies/mL progress slowly, while those above 100,000 copies/mL progress within a few years. CD4 counts decline by roughly 50 cells per microlitre per year in untreated infection. Clinical latency is not virological latency; replication continues in lymphoid tissue. Some patients are <strong>elite controllers</strong> who maintain undetectable viral loads without therapy, and long-term non-progressors remain stable for years.</p>
    <h4>Advanced disease</h4>
    <ul>
      <li><strong>CD4 below 200:</strong> Pneumocystis pneumonia, oesophageal candidiasis, Kaposi sarcoma.</li>
      <li><strong>CD4 below 100:</strong> toxoplasmosis, cryptococcal meningitis, progressive multifocal leukoencephalopathy.</li>
      <li><strong>CD4 below 50:</strong> CMV retinitis, disseminated Mycobacterium avium complex (MAC).</li>
    </ul>
    <p>Without treatment, median survival is about ten years, though it varies widely. With effective ART, life expectancy approaches that of the general population.</p>
    <h4>Why the timeline matters</h4>
    <p>Late diagnosis wastes years of preventable illness and transmission. Acute infection should be suspected in anyone with a compatible illness and risk exposure, and tested with HIV RNA if antibody is negative. Once on treatment, the natural history is rewritten: viral suppression restores CD4 counts and prevents AIDS-defining illness.</p>
  `,
  tip: "Plot the curve: acute peak, set point, slow CD4 decline, then AIDS — and attach one opportunistic infection to each CD4 threshold.",
  sources: ["S1", "S4", "S16"]
},
{
  id: "m12g3", domain: "m12", star: true,
  q: "Outline the HIV testing algorithm and the laboratory tests used to monitor disease and treatment response.",
  tags: ["HIV", "diagnosis", "viral load", "CD4"],
  keypoints: ["fourth-generation assay", "p24", "differentiation assay", "HIV RNA", "window period", "CD4 count", "viral load", "virological failure", "resistance testing", "HLA-B*5701", "RA 11166", "informed consent", "infant diagnosis"],
  answer: `
    <h4>Screening and confirmation</h4>
    <p>Diagnosis follows a sequence designed to avoid false positives. A <strong>fourth-generation antigen/antibody assay</strong> detects p24 antigen and anti-HIV IgG/IgM and is the standard screen, which shortens the window period to about two to three weeks. A reactive result is confirmed by an antibody differentiation assay that distinguishes HIV-1 from HIV-2; indeterminate or negative results with ongoing risk require <strong>HIV RNA</strong> testing. Nucleic acid testing is essential for acute infection and for infants born to infected mothers, because maternal antibody persists for months.</p>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Use</th><th>Interpretation</th></tr>
      <tr><td>4th-generation Ag/Ab</td><td>Initial screen</td><td>Reactive needs confirmation</td></tr>
      <tr><td>Differentiation assay</td><td>Confirms HIV-1 or HIV-2</td><td>Negative or indeterminate needs NAT</td></tr>
      <tr><td>HIV RNA PCR</td><td>Acute infection, infants</td><td>Detectable before antibody</td></tr>
      <tr><td>CD4 count</td><td>Immune status</td><td>Guides prophylaxis</td></tr>
      <tr><td>Viral load</td><td>Treatment response</td><td>Target undetectable</td></tr>
    </table></div>
    <h4>Monitoring treatment</h4>
    <p><strong>Plasma viral load</strong> is the key monitor. The goal is undetectable, usually below 50 copies/mL. A confirmed rise above 1,000 copies/mL after suppression indicates failure and warrants adherence review and resistance testing. CD4 count is checked at baseline and when the result will change management, not routinely once suppressed. A viral load should be repeated before therapy is changed, because transient blips and laboratory error are common. Where plasma separation is difficult, dried blood spots are an alternative, although plasma remains preferred.</p>
    <h4>Additional baseline tests</h4>
    <p>Before ART, test for tuberculosis, hepatitis B and C, syphilis and other STIs, and check renal and hepatic function. <strong>HLA-B*5701</strong> is required before abacavir. Genotypic resistance testing is recommended at diagnosis and on failure. In the Philippines, testing requires informed consent and confidentiality under RA 11166, and results should be linked to same-day care.</p>
  `,
  tip: "Screen with antigen/antibody, confirm with a differentiation assay or RNA, then monitor with viral load rather than CD4.",
  sources: ["S1", "S4", "S16", "S33"]
},
{
  id: "m12g4", domain: "m12", star: true,
  q: "Explain the principles of combination antiretroviral therapy, the preferred first-line regimen and the approach to virological failure.",
  tags: ["HIV", "ART", "dolutegravir", "virological failure"],
  keypoints: ["TLD", "dolutegravir", "tenofovir", "lamivudine", "integrase inhibitor", "adherence", "virological failure", "genotypic resistance", "rifampicin", "pregnancy", "U=U", "long-acting injectable", "renal impairment", "boosted protease inhibitor"],
  answer: `
    <h4>Principles</h4>
    <p>Combination ART uses at least three active drugs from different classes to suppress replication completely, prevent resistance and allow immune recovery. Current first-line therapy is <strong>two nucleoside reverse transcriptase inhibitors plus an integrase inhibitor</strong>, usually tenofovir disoproxil fumarate/lamivudine or emtricitabine with <strong>dolutegravir</strong> — the TLD regimen. It is potent, well tolerated, has a high resistance barrier and is available as a single daily tablet. Regimens must be individualised for pregnancy, renal disease, tuberculosis and prior resistance.</p>
    <h4>Starting and monitoring</h4>
    <ul>
      <li>Start promptly after diagnosis, ideally on the same day, after baseline tests.</li>
      <li>Check viral load at four to six months, then every six to twelve months if suppressed.</li>
      <li>Review adherence, drug interactions, pregnancy status and renal function at each visit.</li>
      <li>Give cotrimoxazole prophylaxis if CD4 is below 200 and vaccinate appropriately.</li>
    </ul>
    <h4>Virological failure</h4>
    <p>Failure is a confirmed viral load above 1,000 copies/mL after at least six months of therapy, or a rebound above 50 copies/mL after suppression. The commonest cause is adherence, followed by drug interactions, malabsorption and resistance. Management is to assess adherence, repeat the load, perform genotypic resistance testing and switch to an effective regimen — usually a boosted protease inhibitor or a different integrase inhibitor with an optimised background.</p>
    <h4>Special situations</h4>
    <p>Pregnancy: dolutegravir is preferred and compatible with all trimesters. Tuberculosis: rifampicin reduces dolutegravir levels, so increase it to twice daily. Renal impairment: adjust tenofovir. Long-acting injectable cabotegravir and rilpivirine is an option for stable, suppressed patients without resistance. The goal is <strong>U=U</strong>: an undetectable viral load means no sexual transmission.</p>
  `,
  tip: "Name the regimen, define failure numerically, then handle failure in order: adherence, interactions, resistance testing, switch.",
  sources: ["S16", "S26", "S4"]
},
{
  id: "m12g5", domain: "m12", star: true,
  q: "Describe HIV prevention with PrEP and PEP, and explain the prevention and management of tuberculosis and other opportunistic infections.",
  tags: ["HIV", "PrEP", "PEP", "TB", "opportunistic infections"],
  keypoints: ["combination prevention", "PrEP", "PEP", "tenofovir/emtricitabine", "cabotegravir", "treatment as prevention", "TB screening", "Xpert MTB/RIF", "LF-LAM", "TB-IRIS", "cotrimoxazole", "CD4 below 200", "RA 11166"],
  answer: `
    <h4>Combination prevention</h4>
    <p>No single intervention controls HIV. Effective prevention combines condoms, HIV testing, treatment as prevention, voluntary medical male circumcision, harm reduction for people who inject drugs, and prevention of mother-to-child transmission. Structural factors — stigma, poverty and gender inequality — determine whether these tools are used. Legal protection and confidential services, as guaranteed by RA 11166, are part of prevention rather than an optional extra.</p>
    <h4>PrEP and PEP</h4>
    <p><strong>PrEP</strong> is for HIV-negative people at substantial risk: tenofovir/emtricitabine daily, event-driven dosing for men who have sex with men, or long-acting injectable cabotegravir. It requires confirmed HIV-negative status, renal monitoring and three-monthly HIV testing; starting PrEP during undetected acute infection risks resistance. <strong>PEP</strong> is a 28-day course started within 72 hours of exposure, with HIV testing at baseline, six weeks and three months.</p>
    <h4>HIV and tuberculosis</h4>
    <p>TB is the leading cause of death in people with HIV. Screen every patient for cough, fever, weight loss and night sweats; investigate with chest radiography, sputum Xpert MTB/RIF and, when CD4 is low, urine LF-LAM. Start ART within two weeks of TB treatment for most patients, but delay in TB meningitis. Rifampicin induces drug metabolism, so dolutegravir is doubled and some regimens need substitution. Watch for <strong>TB-IRIS</strong> after starting ART.</p>
    <h4>Opportunistic infection prophylaxis</h4>
    <ul>
      <li><strong>Cotrimoxazole</strong> when CD4 is below 200, covering Pneumocystis and toxoplasmosis.</li>
      <li>Vaccination against pneumococcus, hepatitis B, influenza and, where indicated, varicella.</li>
      <li>CMV and MAC prophylaxis reserved for profound immunosuppression.</li>
      <li>Screen and treat latent TB, and treat hepatitis B and C.</li>
    </ul>
    <p>The PSMID and WHO guidelines emphasise integration: one clinic visit should address HIV, TB, STIs and non-communicable disease.</p>
  `,
  tip: "Pair each prevention tool with the population it serves, then link TB screening and cotrimoxazole to the CD4 count.",
  sources: ["S16", "S26", "S33"]
},
{
  id: "m13g1", domain: "m13", star: true,
  q: "Explain the protein-only hypothesis of prion disease and how PrPSc propagates, resists clearance and causes neurodegeneration.",
  tags: ["prion", "PrPSc", "protein-only hypothesis"],
  keypoints: ["PrPC", "PrPSc", "beta sheet", "proteinase K", "template", "seeding", "prion strain", "species barrier", "PRNP", "codon 129", "spongiform", "GPI anchor", "autocatalytic", "no nucleic acid"],
  answer: `
    <h4>The protein-only hypothesis</h4>
    <p>Prion diseases are transmissible neurodegenerative disorders caused by misfolded prion protein without a nucleic acid genome. The cellular protein <strong>PrPC</strong> is a GPI-anchored sialoglycoprotein expressed on neurons and many other cells, rich in alpha helices and sensitive to proteinase K. In disease it converts to <strong>PrPSc</strong>, which is rich in beta sheets, partially resistant to protease and prone to aggregation. The agent is therefore an infectious conformation, not an organism.</p>
    <h4>How propagation works</h4>
    <p>PrPSc acts as a template, binding PrPC and inducing the same misfold. Aggregates seed further conversion, so the process is autocatalytic and exponential. Different conformers produce different disease phenotypes and incubation periods — the basis of <strong>prion strains</strong> — and the species barrier reflects differences in PrP sequence. <strong>PRNP</strong> codon 129 polymorphism (MM, MV, VV) strongly modifies susceptibility and phenotype.</p>
    <h4>Why neurons die</h4>
    <ul>
      <li>Accumulation of toxic oligomers and plaques impairs synaptic function.</li>
      <li>Spongiform vacuolation, astrogliosis and neuronal loss follow.</li>
      <li>PrPSc is not cleared by antibody or T cells because it is a self antigen.</li>
      <li>Inflammation is minimal, so the disease progresses silently for years.</li>
    </ul>
    <h4>Resistance and transmission</h4>
    <p>PrPSc resists heat, formaldehyde, radiation and standard disinfection, which is why neurosurgical instruments and dura mater have transmitted disease. It is not transmitted by casual contact, but blood and tissue can carry infectivity in variant CJD.</p>
    <h4>Clinical implications</h4>
    <p>Because the target is a host protein, conventional antimicrobial therapy is useless. Research focuses on reducing PrPC, stabilising it or promoting clearance. Diagnosis relies on detecting seeding activity rather than culturing an organism.</p>
  `,
  tip: "Contrast PrPC and PrPSc on structure and protease sensitivity, then explain seeding as the mechanism of spread.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "m13g2", domain: "m13", star: true,
  q: "Describe the clinical course and outcome of sporadic Creutzfeldt-Jakob disease and the supportive investigations used during life.",
  tags: ["prion", "Creutzfeldt-Jakob disease", "sporadic CJD"],
  keypoints: ["sporadic CJD", "rapidly progressive dementia", "myoclonus", "ataxia", "MRI", "DWI", "cortical ribboning", "EEG", "periodic sharp wave", "14-3-3", "RT-QuIC", "akinetic mutism", "four to six months", "autopsy"],
  answer: `
    <h4>Who is affected</h4>
    <p>Sporadic CJD accounts for about 85% of human prion disease, with an incidence of one to two cases per million per year and a peak in the seventh decade. It is not inherited and has no obvious exposure. The cause is thought to be spontaneous misfolding of PrP or somatic mutation. Because the disease is rare, clinicians often first suspect stroke, depression or a metabolic encephalopathy.</p>
    <h4>Clinical course</h4>
    <p>Onset is insidious, with fatigue, insomnia, anxiety, memory loss or unsteadiness. Within weeks, <strong>rapidly progressive dementia</strong> appears, together with <strong>myoclonus</strong>, ataxia, visual disturbance, pyramidal and extrapyramidal signs. Startle myoclonus, cortical blindness and akinetic mutism occur late. Most patients die within four to six months; a minority survive beyond a year. The rapidity is a key clue that separates CJD from Alzheimer disease, which evolves over years.</p>
    <h4>Investigations</h4>
    <ul>
      <li><strong>MRI</strong> with diffusion-weighted imaging (DWI) shows cortical ribboning or basal ganglia hyperintensity.</li>
      <li><strong>EEG</strong> may show periodic sharp wave complexes, especially in advanced disease.</li>
      <li><strong>CSF 14-3-3</strong> and total tau are supportive but not specific.</li>
      <li><strong>RT-QuIC</strong> detects prion seeding with high sensitivity and specificity.</li>
    </ul>
    <h4>Differential diagnosis</h4>
    <p>Exclude treatable mimics: autoimmune encephalitis, paraneoplastic disease, viral encephalitis, metabolic disturbance, Wilson disease, neurosarcoidosis and lymphoma. Brain biopsy is rarely needed when clinical and laboratory findings align. Cerebellar, visual and movement-disorder variants can mimic common neurodegenerative disease, so the index of suspicion must remain high when dementia progresses over weeks rather than years.</p>
    <h4>Outcome and care</h4>
    <p>There is no disease-modifying treatment. Care is palliative: symptom control for myoclonus, spasticity and agitation, nutrition and family support. Autopsy or brain donation confirms the diagnosis and supports surveillance. Infection-control precautions are still required for instruments and high-risk tissue after death.</p>
  `,
  tip: "Emphasise rapid progression with myoclonus, then list MRI, EEG, CSF markers and RT-QuIC as supporting rather than confirmatory.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "m13g3", domain: "m13", star: true,
  q: "Explain the origin of variant CJD, how it differs from sporadic CJD, and the public-health measures that followed the BSE epidemic.",
  tags: ["prion", "variant CJD", "BSE", "public health"],
  keypoints: ["BSE", "vCJD", "meat-and-bone meal", "specified risk material", "florid plaque", "psychiatric onset", "pulvinar sign", "codon 129 MM", "tonsil biopsy", "blood transfusion", "feed ban", "young onset"],
  answer: `
    <h4>Origin</h4>
    <p>Bovine spongiform encephalopathy emerged in British cattle in the 1980s after cattle were fed meat-and-bone meal containing prion-infected ruminant tissue. The epidemic peaked in the early 1990s. Variant CJD was recognised in 1996 in young British patients whose brains showed florid amyloid plaques and a strain profile identical to BSE. This established the first zoonotic transmission of a prion disease. The feed ban and removal of specified risk material interrupted the cycle at its source.</p>
    <h4>How vCJD differs</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Sporadic CJD</th><th>Variant CJD</th></tr>
      <tr><td>Typical age</td><td>60s</td><td>20s and 30s</td></tr>
      <tr><td>Onset</td><td>Cognitive, ataxia</td><td>Psychiatric, sensory</td></tr>
      <tr><td>Duration</td><td>4-6 months</td><td>About 14 months</td></tr>
      <tr><td>EEG</td><td>Periodic complexes</td><td>Often non-specific</td></tr>
      <tr><td>MRI</td><td>Cortical ribboning</td><td>Pulvinar sign</td></tr>
      <tr><td>Lymphoid PrPSc</td><td>Absent</td><td>Present</td></tr>
    </table></div>
    <p>Psychiatric features such as depression, withdrawal and delusions precede ataxia and involuntary movements. PrPSc is detectable in tonsil, spleen and lymph node, which is why tonsil biopsy was used and why blood transmission is a concern. All clinical cases studied have been <strong>PRNP codon 129 MM</strong>, although subclinical infection may occur in other genotypes.</p>
    <h4>Public-health response</h4>
    <p>The United Kingdom banned ruminant feed, removed specified risk material such as brain, spinal cord and spleen from the food chain, culled affected herds and restricted certain surgical procedures. Blood donors with transfusion since 1980 were deferred. Cases fell sharply, but concerns remain about a second wave in other genotypes.</p>
    <h4>Laboratory implications</h4>
    <p>vCJD reinforced the need for prion-safe instrument handling and for surveillance of unusual neurological deaths. In countries without endemic BSE, import and feed regulations remain the main safeguard. Blood and tissue donor deferral policies also remain in force in affected countries, and surveillance continues through national CJD registries.</p>
  `,
  tip: "Link BSE to vCJD by strain and exposure, then contrast young onset, psychiatric phase and the pulvinar sign.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "m13g4", domain: "m13", star: true,
  q: "Describe the inherited and iatrogenic forms of prion disease and the safeguards that prevent further transmission.",
  tags: ["prion", "familial CJD", "iatrogenic", "PRNP"],
  keypoints: ["PRNP", "autosomal dominant", "E200K", "P102L", "GSS", "D178N", "fatal familial insomnia", "cadaveric growth hormone", "dura mater", "corneal transplant", "neurosurgical instruments", "incubation period", "genetic counselling", "single-use instruments"],
  answer: `
    <h4>Inherited prion disease</h4>
    <p>About 10-15% of prion disease is familial, inherited as an autosomal dominant <strong>PRNP</strong> mutation. More than 30 pathogenic variants are described. <strong>E200K</strong> causes familial CJD with a phenotype resembling sporadic disease. <strong>P102L</strong> causes Gerstmann-Sträussler-Scheinker disease (GSS), with prominent ataxia and amyloid plaques. <strong>D178N</strong> with methionine at codon 129 causes fatal familial insomnia, dominated by intractable insomnia and dysautonomia; the same mutation with valine causes familial CJD.</p>
    <p>Penetrance is high but age of onset varies, and genetic counselling is essential because predictive testing affects family members who may be asymptomatic. Familial disease often begins earlier and runs a longer course than sporadic CJD. Testing should be offered only with pre-test and post-test counselling, and children should not be tested for an adult-onset disease.</p>
    <h4>Iatrogenic transmission</h4>
    <ul>
      <li><strong>Cadaveric pituitary growth hormone</strong> and gonadotrophin, used before recombinant products, caused hundreds of cases with incubation periods of decades.</li>
      <li><strong>Dura mater grafts</strong> caused clusters, particularly in Japan.</li>
      <li><strong>Corneal transplantation</strong> and <strong>neurosurgical instruments</strong> have transmitted disease.</li>
      <li><strong>Contaminated EEG electrodes</strong> and blood transfusion in vCJD are documented routes.</li>
    </ul>
    <h4>Safeguards</h4>
    <p>Recombinant hormones replaced cadaveric products. Tissue banks screen donors for neurological disease, and instruments used on known or suspected cases are quarantined or destroyed. Single-use instruments are preferred for high-risk procedures. Donors with a family history or exposure are deferred from blood and tissue donation. Notification and surveillance systems, such as national CJD registries, detect clusters early.</p>
    <h4>Counselling</h4>
    <p>Families need information about mode of inheritance, risk to relatives and the absence of treatment, delivered with genetic and psychological support. Because the mutation is present from conception, relatives should be told that risk exists before family planning and that predictive testing is possible but carries psychological and insurance consequences.</p>
  `,
  tip: "Split the answer into inherited genotypes and iatrogenic routes, then pair each route with the safeguard that closed it.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "m13g5", domain: "m13", star: true,
  q: "Compare RT-QuIC, MRI, EEG and CSF protein markers in the laboratory diagnosis of prion disease.",
  tags: ["prion", "RT-QuIC", "MRI", "EEG", "diagnosis"],
  keypoints: ["RT-QuIC", "recombinant PrP", "thioflavin T", "DWI", "cortical ribboning", "pulvinar sign", "EEG", "periodic sharp wave complexes", "14-3-3", "total tau", "NfL", "PRNP sequencing", "tonsil biopsy", "specificity"],
  answer: `
    <h4>No single diagnostic test</h4>
    <p>Prion disease is confirmed only by neuropathology, but a combination of imaging, electrophysiology and fluid biomarkers supports the diagnosis in life. The tests answer different questions and have different limitations.</p>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Finding</th><th>Limitation</th></tr>
      <tr><td>MRI DWI/FLAIR</td><td>Cortical ribboning, basal ganglia hyperintensity</td><td>Reader-dependent; false positives in seizures</td></tr>
      <tr><td>EEG</td><td>Periodic sharp wave complexes</td><td>Late, absent in vCJD</td></tr>
      <tr><td>CSF 14-3-3 or tau</td><td>Markers of rapid neuronal injury</td><td>Not specific</td></tr>
      <tr><td>RT-QuIC</td><td>Prion seeding activity</td><td>Requires a specialised laboratory</td></tr>
    </table></div>
    <h4>RT-QuIC</h4>
    <p><strong>Real-time quaking-induced conversion</strong> mixes cerebrospinal fluid with recombinant PrP and shakes it; if prion seeds are present, misfolding accelerates and thioflavin T fluorescence rises. Sensitivity is about 90-95% in sporadic CJD and specificity approaches 99%. It has largely replaced 14-3-3 as the preferred fluid test and can also be applied to olfactory mucosa. False negatives occur early in disease and in some genetic forms, so a negative result does not exclude prion disease. Because seeding activity correlates with infectivity, the assay also supports instrument-safety and tissue-screening studies.</p>
    <h4>Imaging and EEG</h4>
    <p><strong>Diffusion-weighted MRI</strong> is the most sensitive imaging test, showing cortical ribboning in the cerebral cortex or hyperintensity in the caudate and putamen. The <strong>pulvinar sign</strong> suggests vCJD. <strong>EEG</strong> periodic sharp wave complexes at about one per second support sporadic CJD but appear late and are usually absent in vCJD.</p>
    <h4>Other markers</h4>
    <p>CSF 14-3-3 and total tau indicate rapid neuronal destruction but also rise after stroke, encephalitis and seizures. <strong>NfL</strong> is sensitive but non-specific. <strong>PRNP</strong> sequencing identifies familial disease, and tonsil biopsy detects lymphoid PrPSc in vCJD. No single marker distinguishes the molecular subtype, which still requires tissue analysis.</p>
  `,
  tip: "Rank the tests by what they add: MRI for sensitivity, RT-QuIC for specificity, EEG for support, and 14-3-3 as a non-specific marker.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "m13g6", domain: "m13", star: true,
  q: "Outline the infection-control and decontamination precautions required for suspected prion disease in hospital and laboratory settings.",
  tags: ["prion", "infection control", "decontamination", "biosafety"],
  keypoints: ["high-risk tissue", "low-risk tissue", "1M sodium hydroxide", "20,000 ppm hypochlorite", "134 °C for 18 minutes", "formaldehyde", "quarantine", "single-use instruments", "incineration", "BSL-2", "BSL-3", "spill", "audit", "WHO"],
  answer: `
    <h4>Why prions change the rules</h4>
    <p>Prions are not inactivated by alcohol, formaldehyde, boiling, radiation or standard autoclaving. Infection control therefore relies on identifying risk, avoiding exposure and using validated prion inactivation protocols. Casual contact and routine blood precautions are not sufficient reasons for alarm, but instruments and tissues are.</p>
    <h4>Risk stratification</h4>
    <p>WHO categorises tissues by infectivity. <strong>High-risk</strong> tissues include brain, spinal cord, eye, pituitary and dura mater. <strong>Low-risk</strong> tissues include cerebrospinal fluid, kidney, liver, spleen, lymph node and placenta. Skin, blood, urine and faeces are not regarded as infectious in sporadic disease, although blood may transmit vCJD. Any instrument that contacts high-risk tissue is contaminated.</p>
    <h4>Handling in the hospital</h4>
    <ul>
      <li>Use single-use instruments where possible; dedicate and label reusable sets.</li>
      <li>Avoid aerosol-generating procedures on high-risk tissue; use containment.</li>
      <li>Quarantine instruments until the diagnosis is confirmed or excluded.</li>
      <li>Cover cuts, use cut-resistant gloves and eye protection.</li>
      <li>Incinerate disposable waste; do not send it to routine landfill.</li>
    </ul>
    <h4>Decontamination</h4>
    <p>Validated methods combine <strong>1M sodium hydroxide</strong> or <strong>20,000 ppm sodium hypochlorite</strong> for one hour with <strong>autoclaving at 134 °C for 18 minutes</strong>, or 132 °C for one hour. Formaldehyde and standard disinfection are ineffective and may fix protein to surfaces. Surfaces can be treated with hypochlorite, and spills absorbed and incinerated. Staff must be trained, and protocols audited.</p>
    <h4>Laboratory practice</h4>
    <p>CSF and other samples are handled at Biosafety Level 2 with standard precautions, but high-risk tissue requires BSL-3-like containment in many countries. RT-QuIC and histological work should be performed in a dedicated area.</p>
  `,
  tip: "Stratify tissue risk first, then give the two validated inactivation methods and the rule that formaldehyde does not work.",
  sources: ["S21", "S22", "S4"]
}
);
