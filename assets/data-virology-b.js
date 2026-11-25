window.QBANK.push(
{
  id: "v15", domain: "virology", star: true,
  q: "Describe the structural components of a virion and explain how structure and genome type underpin viral classification. Why does this matter at the bedside?",
  tags: ["viral structure", "classification", "envelope", "capsid"],
  keypoints: ["capsid", "helical", "icosahedral", "complex", "envelope", "naked viruses", "environmental stability", "Baltimore", "ICTV", "serotypes", "genotypes", "disinfectants", "tropism", "receptor"],
  answer: `
    <h4>Why structure matters</h4>
    <p>A virion is a <strong>nucleic acid genome</strong> packaged in a <strong>capsid</strong>, sometimes wrapped in a <strong>lipid envelope</strong> derived from host membranes. Structure is not taxonomy for its own sake: it determines stability in the environment, route of transmission, the disinfectants that work, and which entry and assembly steps can be drugged.</p>
    <h4>Capsid symmetry and the envelope</h4>
    <p>Capsids are <strong>helical</strong> (influenza, measles), <strong>icosahedral</strong> (adenovirus, herpes simplex) or <strong>complex</strong> (poxvirus). Enveloped viruses bud through a membrane and insert glycoproteins that bind receptors and fuse membranes; naked viruses are released by lysis and rely on capsid proteins for attachment and penetration.</p>
    <div class="table-wrap"><table>
      <tr><th>Property</th><th>Naked virus</th><th>Enveloped virus</th></tr>
      <tr><td>Environmental stability</td><td>High — survives drying, acid, gut and detergents</td><td>Low — heat, drying, alcohol and detergents inactivate</td></tr>
      <tr><td>Typical transmission</td><td>Faecal–oral, fomites, aerosol</td><td>Respiratory droplets, blood, sexual contact, vectors</td></tr>
      <tr><td>Examples</td><td>Adenovirus, norovirus, hepatitis A, poliovirus, parvovirus B19, HPV, rotavirus</td><td>Influenza, RSV, SARS-CoV-2, HSV, VZV, HIV, HBV, dengue</td></tr>
    </table></div>
    <h4>Genome-based classification</h4>
    <p>The <strong>ICTV</strong> assigns orders, families, genera and species, while the <strong>Baltimore</strong> system groups viruses by genome and the route to mRNA — the scheme that is most useful clinically. Within a family, <strong>serotypes</strong> differ antigenically (dengue 1–4, poliovirus 1–3, adenovirus types) and <strong>genotypes</strong> or clades differ genetically (HBV genotypes, SARS-CoV-2 variants).</p>
    <ul>
      <li><strong>Genome type</strong> predicts replication site and enzyme needs: dsDNA viruses generally replicate in the nucleus, with poxviruses the exception, while most RNA viruses replicate in the cytoplasm.</li>
      <li><strong>Segmentation</strong> permits reassortment (influenza, rotavirus) and therefore antigenic shift.</li>
      <li><strong>Envelope status</strong> predicts disinfectant choice: alcohol works on enveloped viruses but not reliably on non-enveloped ones such as norovirus.</li>
    </ul>
    <h4>Clinical payoff</h4>
    <p>Structure guides <strong>diagnosis</strong> (capsid antigens for rapid tests, envelope glycoproteins for serology), <strong>therapy</strong> (fusion inhibitors target envelope proteins; capsid assembly inhibitors are emerging), <strong>vaccine design</strong> (whole inactivated, subunit glycoprotein, virus-like particle) and <strong>infection control</strong>. It also explains tropism: receptor expression, not taxonomy, decides which tissue a virus can enter.</p>
  `,
  tip: "Anchor the answer on naked versus enveloped, then show that genome type predicts replication site and drug target.",
  sources: ["S1", "S5"]
},
{
  id: "v16", domain: "virology", star: true,
  q: "Compare the molecular replication strategies of a DNA virus, a negative-sense RNA virus and a retrovirus. Why does the strategy dictate where the virus replicates and what drugs work?",
  tags: ["replication", "RdRp", "reverse transcriptase", "cccDNA"],
  keypoints: ["mRNA", "nucleus", "cytoplasm", "poxviruses", "host RNA polymerase II", "positive-sense ssRNA", "negative-sense ssRNA", "cap-snatching", "reverse transcriptase", "integrase", "cccDNA", "pregenomic RNA", "polyprotein", "RNA-dependent RNA polymerase"],
  answer: `
    <h4>One principle, many solutions</h4>
    <p>Every virus must make mRNA from its genome, but the template, location and enzyme differ. That single idea explains why some viruses carry a polymerase in the virion, why some replicate in the nucleus, and why antiviral drug targets are not interchangeable between families.</p>
    <h4>DNA viruses: nucleus versus cytoplasm</h4>
    <p>Herpesviruses and adenoviruses replicate their DNA in the <strong>nucleus</strong> and use host RNA polymerase II for transcription, although they encode their own DNA polymerase. Papillomaviruses and polyomaviruses depend heavily on host DNA replication machinery and therefore on dividing cells. Poxviruses are the exception: they replicate entirely in the <strong>cytoplasm</strong> and so carry a DNA-dependent RNA polymerase and capping enzymes in the virion. Parvovirus B19, a single-stranded DNA virus, must first convert its genome to double-stranded DNA in the nucleus using host polymerases.</p>
    <h4>RNA viruses: polarity dictates logistics</h4>
    <ul>
      <li><strong>Positive-sense ssRNA</strong> is already mRNA: it is translated immediately, usually as a polyprotein cleaved by viral proteases, and the polymerase is made before replication begins (picornavirus, flavivirus, coronavirus).</li>
      <li><strong>Negative-sense ssRNA</strong> cannot be translated, so the virion must carry <strong>RNA-dependent RNA polymerase</strong> to transcribe mRNA; influenza also steals 5′ caps from host mRNA (<strong>cap-snatching</strong>), while paramyxoviruses transcribe sequentially from a single 3′ promoter.</li>
      <li><strong>Double-stranded RNA</strong> (rotavirus) is segmented and transcribed inside the capsid, so the genome is never exposed naked in the cytoplasm.</li>
      <li><strong>Retroviruses</strong> convert RNA to DNA by <strong>reverse transcriptase</strong>, integrate it with <strong>integrase</strong>, and then use host transcription; alternative splicing produces their protein repertoire.</li>
      <li><strong>Hepadnaviruses</strong> are pararetroviruses: the DNA genome is repaired to <strong>cccDNA</strong>, transcribed to a pregenomic RNA, and reverse-transcribed inside the capsid.</li>
    </ul>
    <h4>Why the detail matters</h4>
    <p>Each step is a target: cap-snatching (baloxavir), RdRp (remdesivir, sofosbuvir), protease (nirmatrelvir, glecaprevir), reverse transcriptase and integrase (HIV), and terminase (letermovir). The same map predicts where latency hides — a nuclear episome, an integrated provirus or cccDNA — and why RNA viruses generate diversity so quickly.</p>
  `,
  tip: "Trace each class from genome to mRNA, then name one enzyme and one drug at that step.",
  sources: ["S1", "S5", "S4"]
},
{
  id: "v17", domain: "virology", star: true,
  q: "Explain the concept of viral quasispecies and describe the genetic mechanisms that generate viral diversity. What are the clinical consequences?",
  tags: ["quasispecies", "mutation", "reassortment", "recombination"],
  keypoints: ["quasispecies", "error-prone polymerase", "point mutation", "reassortment", "recombination", "complementation", "phenotypic mixing", "defective interfering particles", "combination therapy", "vaccine escape", "minority variants", "next-generation sequencing", "bottlenecks"],
  answer: `
    <h4>The quasispecies concept</h4>
    <p>An RNA virus population is not a single genome but a cloud of related variants — a <strong>quasispecies</strong> — generated by an error-prone polymerase. Because the replication machinery lacks proofreading, each round introduces mutations, and selection acts on the population rather than on one clone. The result is adaptability without a large genome.</p>
    <h4>Sources of genetic change</h4>
    <ul>
      <li><strong>Point mutation</strong> — the main driver in RNA viruses; the mutation rate is high enough that drug-resistant or antibody-escape variants may pre-exist before treatment starts.</li>
      <li><strong>Reassortment</strong> — exchange of whole segments in segmented viruses (influenza, rotavirus, reovirus); the basis of antigenic shift.</li>
      <li><strong>Recombination</strong> — template switching during replication, described in picornaviruses and coronaviruses, which can combine fitness-enhancing changes.</li>
      <li><strong>Complementation</strong> — a defective genome is rescued by a helper virus that supplies the missing protein.</li>
      <li><strong>Phenotypic mixing</strong> — a genome is packaged in another virus's capsid, broadening tropism for one cycle.</li>
      <li><strong>Defective interfering particles</strong> — truncated genomes that compete for replication and can attenuate infection.</li>
    </ul>
    <h4>Clinical consequences</h4>
    <p>Quasispecies explain why <strong>monotherapy fails</strong> and combination therapy is standard for HIV, HBV and HCV; why <strong>vaccine escape</strong> occurs (measles, mumps, SARS-CoV-2 variants); why live attenuated vaccines can revert (vaccine-derived poliovirus); and why a single consensus sequence can miss minority resistant variants. Within-host diversity also affects tropism, persistence and transmissibility.</p>
    <h4>Measuring diversity</h4>
    <p><strong>Next-generation sequencing</strong> detects minority variants below the Sanger threshold, and resistance reports increasingly quote variant frequencies. The clinical question is not simply whether a mutation is present, but whether it is above the assay's validated threshold, whether it confers a fitness advantage, and whether the regimen still suppresses the population. Transmission <strong>bottlenecks</strong> narrow diversity, which is why founder variants and epidemiological linkage can be inferred from sequence data.</p>
  `,
  tip: "Define the quasispecies in one sentence, list the six mechanisms, then link each to resistance, escape or attenuation.",
  sources: ["S1", "S5", "S13"]
},
{
  id: "v18", domain: "virology", star: true,
  q: "Describe how the innate immune system senses viral infection and how type I interferons establish an antiviral state. Where can this system fail or be exploited?",
  tags: ["innate immunity", "interferon", "PRR", "JAK-STAT"],
  keypoints: ["pathogen-associated molecular patterns", "TLR3", "TLR7", "RIG-I", "MDA5", "cGAS", "STING", "PKR", "OAS", "IRF3", "type I interferon", "JAK", "STAT", "interferon-stimulated genes", "NK cells", "interferonopathies"],
  answer: `
    <h4>Sensing the invader</h4>
    <p>Innate immunity recognises <strong>pathogen-associated molecular patterns</strong> through germline-encoded sensors. For viruses the key sensors are <strong>TLR3</strong> (dsRNA), <strong>TLR7/8</strong> (ssRNA), <strong>TLR9</strong> (CpG DNA), <strong>RIG-I</strong> (short 5′-triphosphate dsRNA), <strong>MDA5</strong> (long dsRNA), <strong>cGAS–STING</strong> (cytosolic dsDNA), <strong>PKR</strong> and the <strong>OAS/RNase L</strong> system. Signalling converges on IRF3, IRF7 and NF-κB.</p>
    <div class="table-wrap"><table>
      <tr><th>Sensor</th><th>Ligand</th><th>Immediate effect</th></tr>
      <tr><td><strong>TLR3</strong></td><td>Double-stranded RNA</td><td>TRIF signalling, IFN-β induction</td></tr>
      <tr><td><strong>RIG-I / MDA5</strong></td><td>Short and long dsRNA</td><td>MAVS adaptor, IRF3 activation</td></tr>
      <tr><td><strong>cGAS–STING</strong></td><td>Cytosolic dsDNA</td><td>TBK1–IRF3, type I interferon</td></tr>
      <tr><td><strong>PKR</strong></td><td>Double-stranded RNA</td><td>eIF2α phosphorylation, translation arrest</td></tr>
      <tr><td><strong>OAS</strong></td><td>Double-stranded RNA</td><td>RNase L activation, RNA degradation</td></tr>
    </table></div>
    <h4>Interferons</h4>
    <p><strong>Type I interferon</strong> (α/β) is produced by most cells, with plasmacytoid dendritic cells as the major IFN-α source; <strong>type III</strong> (λ) acts mainly on epithelium; <strong>type II</strong> (γ) is a T-cell and NK-cell cytokine that activates macrophages. Type I and III interferons bind their receptor and signal through <strong>JAK–STAT</strong> to induce hundreds of <strong>interferon-stimulated genes</strong>: MX proteins, IFITM proteins, OAS, PKR, tetherin, viperin and MHC class I. The result is a local <strong>antiviral state</strong>, enhanced antigen presentation and recruitment of NK and T cells. Plasmacytoid dendritic cells are specialised for rapid IFN-α production, while NK cells provide early killing of infected cells and help shape the subsequent adaptive response.</p>
    <h4>When it goes wrong</h4>
    <p>Viruses counter with <strong>NS1</strong> (influenza), <strong>V proteins</strong> (paramyxoviruses), <strong>NSP1</strong> (coronavirus) and poxvirus decoy receptors. Conversely, excessive interferon signalling causes <strong>interferonopathies</strong> such as Aicardi–Goutières syndrome, and <strong>anti-interferon autoantibodies</strong> predispose to severe viral disease. Therapeutically, IFN-α remains an option in HBV and some haematological malignancies, and IFN-γ is used in chronic granulomatous disease.</p>
  `,
  tip: "Draw the pathway as sensor → adaptor → IRF3 → IFN → JAK–STAT → ISG, then name one viral antagonist.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "v19", domain: "virology", star: true,
  q: "Explain the principal mechanisms by which viruses evade neutralising antibody and CD8 T-cell recognition. What do these mechanisms mean for vaccine design?",
  tags: ["immune evasion", "MHC class I", "antigenic variation", "vaccine"],
  keypoints: ["antigenic variation", "glycan shielding", "decoy", "conformational masking", "Fc-mediated enhancement", "MHC class I down-regulation", "ICP47", "US2", "US11", "Nef", "HLA-E", "cytokine mimics", "latency", "T-cell exhaustion", "broadly neutralising antibodies"],
  answer: `
    <h4>Two arms to escape</h4>
    <p>Adaptive antiviral immunity has two effectors: <strong>neutralising antibody</strong>, which blocks entry, and <strong>cytotoxic CD8 T cells</strong>, which kill infected cells. Successful viruses disrupt both, and often the innate signals that connect them.</p>
    <h4>Escaping antibody</h4>
    <ul>
      <li><strong>Antigenic variation</strong> — sequential point change or recombination in surface proteins: influenza HA, HIV Env, HCV E2 hypervariable region and norovirus capsid.</li>
      <li><strong>Glycan shielding</strong> — dense N-linked glycans hide neutralising epitopes (HIV Env, HCV E2).</li>
      <li><strong>Decoy and sink antigens</strong> — shed soluble glycoprotein (HIV gp120, HBsAg) mops up antibody.</li>
      <li><strong>Conformational masking</strong> — epitopes are exposed only transiently during entry (HIV, RSV F protein).</li>
      <li><strong>Fc-mediated enhancement</strong> — sub-neutralising antibody can increase uptake into Fc-receptor-bearing cells, as in dengue.</li>
    </ul>
    <h4>Escaping T cells and NK cells</h4>
    <p><strong>MHC class I down-regulation</strong> is the central trick: HSV <strong>ICP47</strong> blocks TAP, CMV <strong>US2/US11</strong> degrade MHC class I, HIV <strong>Nef</strong> removes it from the surface, and adenovirus E3 proteins retain it in the endoplasmic reticulum. To avoid missing-self NK killing, viruses supply <strong>HLA-E</strong> mimics or retain selected MHC class I alleles. Other mechanisms include <strong>cytokine mimics</strong> (EBV and CMV IL-10 homologues), <strong>complement control proteins</strong> (vaccinia VCP), <strong>apoptosis inhibitors</strong> (Bcl-2 homologues), <strong>Fc receptors</strong> and <strong>interferon antagonists</strong>.</p>
    <h4>Latency, privilege and exhaustion</h4>
    <p>Latency hides the genome with minimal antigen expression (HSV sensory neurons, EBV memory B cells, HIV provirus). Immune-privileged sites (CNS, eye, testis) and cell-to-cell spread across syncytia exclude antibody. Chronic antigen drive causes <strong>T-cell exhaustion</strong> with PD-1, TIM-3 and LAG-3, limiting control but also protecting from immunopathology. For vaccines this means <strong>broadly neutralising antibodies</strong> and <strong>conserved-epitope T-cell vaccines</strong> are needed, and correlates of protection must account for escape.</p>
  `,
  tip: "Separate antibody escape from T-cell escape, and give one named viral protein for each mechanism.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "v20", domain: "virology", star: true,
  q: "Describe respiratory syncytial virus: virology, pathogenesis, clinical spectrum, diagnosis, management and prevention.",
  tags: ["RSV", "bronchiolitis", "palivizumab", "nirsevimab"],
  keypoints: ["negative-sense", "ssRNA", "F protein", "G protein", "syncytia", "bronchiolitis", "apnoea", "preterm infants", "RT-PCR", "supportive", "palivizumab", "nirsevimab", "RSVpreF", "prefusion F protein"],
  answer: `
    <h4>Virology</h4>
    <p>Respiratory syncytial virus is an enveloped, <strong>negative-sense, non-segmented ssRNA</strong> pneumovirus. Two surface glycoproteins dominate: <strong>G</strong> mediates attachment, and <strong>F</strong> drives fusion of viral and cell membranes and of infected cells into <strong>syncytia</strong>. F is the target of neutralising antibody and of monoclonal prophylaxis, and exists in prefusion and postfusion conformations. Two antigenic groups, A and B, co-circulate.</p>
    <h4>Pathogenesis and clinical spectrum</h4>
    <p>RSV infects <strong>ciliated airway epithelial cells</strong>, causing necrosis, mucus plugging, oedema and bronchiolar obstruction — the basis of <strong>bronchiolitis</strong> in infants. It also triggers innate inflammation through TLR4 and the G protein's CX3C motif. Most children are infected by age two, but immunity is incomplete, so reinfection occurs throughout life. Disease is most severe in <strong>preterm infants</strong>, those with congenital heart or chronic lung disease, immunodeficiency and older adults. Neonates may present with apnoea rather than wheeze.</p>
    <h4>Diagnosis and management</h4>
    <ul>
      <li><strong>Diagnosis</strong> — RT-PCR of a nasopharyngeal swab is preferred; rapid antigen tests are less sensitive in adults and older children. Radiology is not routine.</li>
      <li><strong>Management</strong> — supportive: oxygen, hydration, suction and respiratory support. Bronchodilators, corticosteroids and antibiotics are not routinely indicated; ribavirin is reserved for severe immunocompromised disease.</li>
      <li><strong>Prevention</strong> — <strong>palivizumab</strong>, a monoclonal antibody against the F protein, is given to high-risk infants during the season; <strong>nirsevimab</strong> is a long-acting alternative. Maternal <strong>RSVpreF vaccine</strong> and older-adult vaccines are used in many settings.</li>
      <li><strong>Infection control</strong> — contact and droplet precautions, hand hygiene and cohorting; nosocomial spread is common.</li>
    </ul>
    <h4>Why it still matters</h4>
    <p>No vaccine prevents RSV in all infants, immunity is short-lived, and the burden in low-resource settings is high. Passive antibody is effective but costly, so maternal immunisation and long-acting monoclonals are the practical strategies. The virus illustrates a general principle: <strong>protective antibody against the prefusion F protein</strong> matters more than a history of infection.</p>
  `,
  tip: "Name F and G, explain syncytia and small-airway obstruction, then contrast supportive care with passive antibody prevention.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "v21", domain: "virology",
  q: "Compare human metapneumovirus and the human parainfluenza viruses as causes of respiratory disease. How are they diagnosed and managed?",
  tags: ["metapneumovirus", "parainfluenza", "croup", "bronchiolitis"],
  keypoints: ["negative-sense ssRNA", "pneumovirus", "haemagglutinin", "neuraminidase", "fusion", "genotypes", "bronchiolitis", "croup", "HPIV-1", "HPIV-3", "RT-PCR", "corticosteroid", "nebulised adrenaline", "supportive", "maternal antibody"],
  answer: `
    <h4>Two paramyxovirus neighbours</h4>
    <p>Human metapneumovirus (hMPV) and the human parainfluenza viruses (HPIV) are enveloped, negative-sense, non-segmented ssRNA viruses that cause upper and lower respiratory tract disease. hMPV is a pneumovirus closely related to RSV; HPIV types 1–4 are paramyxoviruses with a <strong>haemagglutinin–neuraminidase (HN)</strong> and a fusion (F) protein.</p>
    <h4>Human metapneumovirus</h4>
    <p>Discovered in 2001, hMPV has four genotypes (A1, A2, B1, B2) and two surface glycoproteins, F and G. It infects young children with a picture indistinguishable from RSV — bronchiolitis, wheeze, pneumonia and exacerbations of asthma or COPD — and also causes severe disease in older adults and the immunocompromised. Diagnosis is by RT-PCR. There is no licensed vaccine or antiviral, and management is supportive.</p>
    <h4>Parainfluenza viruses</h4>
    <ul>
      <li><strong>HPIV-1</strong> — the leading cause of <strong>croup</strong> (laryngotracheobronchitis) in autumn, with a seal-like cough, stridor and hoarseness.</li>
      <li><strong>HPIV-2</strong> — also causes croup, often milder.</li>
      <li><strong>HPIV-3</strong> — bronchiolitis and pneumonia in infants, and severe disease in immunocompromised hosts.</li>
      <li><strong>HPIV-4</strong> — usually mild upper respiratory illness.</li>
    </ul>
    <p>HPIV binds sialic acid through HN and fuses through F; repeated infection is common because immunity is incomplete. Diagnosis is by RT-PCR or antigen testing. Croup is treated with a single dose of corticosteroid and, for severe cases, nebulised adrenaline.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>hMPV</th><th>HPIV</th></tr>
      <tr><td>Genome</td><td>Negative-sense ssRNA, non-segmented</td><td>Negative-sense ssRNA, non-segmented</td></tr>
      <tr><td>Surface proteins</td><td>F and G</td><td>F and HN</td></tr>
      <tr><td>Classic syndrome</td><td>Bronchiolitis, pneumonia</td><td>Croup (types 1 and 2), bronchiolitis (type 3)</td></tr>
      <tr><td>Licensed vaccine</td><td>None</td><td>None</td></tr>
    </table></div>
    <h4>Clinical implications</h4>
    <p>Both viruses are important differentials in a child with bronchiolitis or croup and are not covered by influenza antivirals. Infection control relies on contact and droplet precautions. Vaccine development is difficult because of <strong>maternal antibody interference</strong> and the history of enhanced disease with formalin-inactivated RSV — a caution for the whole paramyxovirus field.</p>
  `,
  tip: "HPIV-1 means croup and HPIV-3 means bronchiolitis; hMPV is the RSV look-alike with no vaccine or antiviral.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "v22", domain: "virology",
  q: "Describe the adenoviruses, the clinical syndromes they cause and their management in immunocompromised patients.",
  tags: ["adenovirus", "keratoconjunctivitis", "transplant", "cidofovir"],
  keypoints: ["non-enveloped", "dsDNA", "fibre protein", "pharyngoconjunctival fever", "epidemic keratoconjunctivitis", "gastroenteritis", "haemorrhagic cystitis", "hepatitis", "PCR", "smudge cells", "cidofovir", "brincidofovir", "live oral vaccines", "chlorine"],
  answer: `
    <h4>Virology</h4>
    <p>Adenoviruses are non-enveloped, icosahedral <strong>dsDNA</strong> viruses with a linear genome and a fibre protein projecting from each penton base. More than 50 serotypes fall into species A–G. The fibre–CAR interaction, or CD46 for some types, determines tropism; the virus replicates in the nucleus and uses both host and viral enzymes.</p>
    <h4>Clinical syndromes</h4>
    <ul>
      <li><strong>Respiratory</strong> — pharyngoconjunctival fever (types 3 and 7), acute respiratory disease in military recruits (4 and 7) and pneumonia.</li>
      <li><strong>Ocular</strong> — epidemic keratoconjunctivitis (8, 19, 37), highly contagious, with corneal infiltrates.</li>
      <li><strong>Gastrointestinal</strong> — gastroenteritis in children (40, 41); intussusception is associated with some types.</li>
      <li><strong>Urinary</strong> — haemorrhagic cystitis (11, 21), especially in transplant recipients.</li>
      <li><strong>Disseminated</strong> — hepatitis, pneumonitis and meningoencephalitis in immunocompromised patients, especially after stem cell or liver transplant.</li>
    </ul>
    <h4>Diagnosis and treatment</h4>
    <p>Diagnosis is by <strong>PCR</strong> of respiratory, stool, urine or tissue samples; antigen detection and culture, with typical cytopathic effect and <strong>smudge cells</strong>, are alternatives. Serology is of limited value. Most infections are self-limited and need supportive care. Severe adenovirus disease in transplant recipients is treated by <strong>reducing immunosuppression</strong> and with <strong>cidofovir</strong> or brincidofovir; nephrotoxicity limits cidofovir.</p>
    <h4>Prevention and control</h4>
    <p>Live oral vaccines against types 4 and 7 are used in military populations but are not licensed for general use. Nosocomial outbreaks require <strong>contact and droplet precautions</strong>, hand hygiene and chlorine-based disinfection, because non-enveloped adenoviruses resist alcohol and many common disinfectants. Outbreaks in eye clinics have been traced to contaminated instruments and tonometers. The virus is a reminder that <strong>immunosuppression converts a common respiratory virus into a lethal pathogen</strong>.</p>
  `,
  tip: "Link each syndrome to a serotype group, then emphasise reduced immunosuppression plus cidofovir in transplant disease.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "v23", domain: "virology", star: true,
  q: "Compare the seasonal human coronaviruses with SARS-CoV-2. Discuss virology, pathogenesis, diagnosis, treatment and control.",
  tags: ["coronavirus", "SARS-CoV-2", "COVID-19", "variants"],
  keypoints: ["positive-sense ssRNA", "spike", "ACE2", "TMPRSS2", "subgenomic mRNAs", "ExoN", "seasonal", "ARDS", "RT-PCR", "nirmatrelvir", "remdesivir", "dexamethasone", "mRNA", "ventilation"],
  answer: `
    <h4>Virology</h4>
    <p>Coronaviruses are enveloped, <strong>positive-sense ssRNA</strong> viruses with the largest RNA genomes, about 30 kb. The spike (S) protein binds the receptor and mediates fusion; E, M and N proteins form the envelope and nucleocapsid. Replication occurs in the cytoplasm on double-membrane vesicles, with <strong>subgenomic mRNAs</strong> for structural proteins and a proofreading exonuclease (ExoN) that lowers the mutation rate relative to other RNA viruses.</p>
    <h4>Seasonal coronaviruses</h4>
    <p>HCoV-229E, OC43, NL63 and HKU1 cause common colds, croup and, in frail elderly or immunocompromised patients, pneumonia. They circulate seasonally and account for a substantial share of respiratory infections; reinfection is common because immunity wanes and variants arise. In immunocompetent adults they are usually self-limited and need only supportive care.</p>
    <h4>SARS-CoV-2</h4>
    <p>SARS-CoV-2 uses <strong>ACE2</strong> with <strong>TMPRSS2</strong> for entry and spreads mainly by respiratory droplets and aerosols in poorly ventilated spaces. Disease ranges from asymptomatic infection to ARDS, thromboembolism and multi-organ dysfunction; risk rises with age, obesity, diabetes, immunosuppression and pregnancy. Variants are defined by spike mutations that affect transmissibility, antigenicity and monoclonal antibody binding.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Seasonal coronavirus</th><th>SARS-CoV-2</th></tr>
      <tr><td>Receptor</td><td>APN, 9-O-acetylated sialic acid, ACE2 (NL63)</td><td>ACE2 plus TMPRSS2</td></tr>
      <tr><td>Typical disease</td><td>Common cold, croup</td><td>Asymptomatic infection to ARDS</td></tr>
      <tr><td>Diagnosis</td><td>Multiplex PCR</td><td>RT-PCR or antigen test</td></tr>
      <tr><td>Treatment</td><td>Supportive</td><td>Nirmatrelvir–ritonavir, remdesivir, dexamethasone in hypoxaemia</td></tr>
    </table></div>
    <h4>Control</h4>
    <p>Vaccines — mRNA, adenoviral vector and subunit — reduce severe disease but do not fully block infection; boosters and updated spike antigens are used. Antivirals must be given early in high-risk patients, and drug interactions, especially with ritonavir, need review. Ventilation, masks and isolation remain relevant, and genomic surveillance is essential for variant tracking.</p>
  `,
  tip: "Contrast the four seasonal cold coronaviruses with SARS-CoV-2 on receptor, disease severity and treatment.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "v24", domain: "virology",
  q: "Compare hepatitis A and hepatitis E viruses. Why is hepatitis E particularly important in pregnancy and in immunosuppressed patients?",
  tags: ["hepatitis A", "hepatitis E", "pregnancy", "chronic hepatitis"],
  keypoints: ["non-enveloped", "positive-sense ssRNA", "faecal", "waterborne", "zoonotic", "pregnant women", "chronic hepatitis", "ribavirin", "anti-HAV IgM", "HEV RNA PCR", "inactivated vaccine", "sanitation"],
  answer: `
    <h4>Two enterically transmitted hepatitis viruses</h4>
    <p>Hepatitis A virus (HAV) is a non-enveloped, positive-sense ssRNA picornavirus; hepatitis E virus (HEV) is a non-enveloped, positive-sense ssRNA hepevirus. Both spread by the faecal–oral route, cause acute hepatitis and are self-limited in most immunocompetent people, but they differ in epidemiology, risk groups and the capacity to persist.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Hepatitis A</th><th>Hepatitis E</th></tr>
      <tr><td>Genome</td><td>Positive-sense ssRNA, non-enveloped</td><td>Positive-sense ssRNA, non-enveloped</td></tr>
      <tr><td>Transmission</td><td>Faecal–oral, person to person, food and water</td><td>Waterborne outbreaks (genotypes 1 and 2); zoonotic pork and game (3 and 4); transfusion</td></tr>
      <tr><td>Chronicity</td><td>None</td><td>Yes, in immunosuppressed patients (genotype 3)</td></tr>
      <tr><td>Pregnancy</td><td>Not specifically severe</td><td>High mortality with genotype 1 in the third trimester</td></tr>
      <tr><td>Vaccine</td><td>Inactivated vaccine, effective</td><td>HEV 239 licensed in China, not widely available</td></tr>
    </table></div>
    <h4>Hepatitis A</h4>
    <p>HAV replicates in the gut and liver; the immune response, not direct cytopathology, causes hepatitis. Infection is usually asymptomatic in children and symptomatic in adults, with jaundice, malaise and raised ALT. Diagnosis is by <strong>anti-HAV IgM</strong>; treatment is supportive. Prevention is by <strong>inactivated vaccine</strong>, post-exposure vaccine or immunoglobulin, and safe water and sanitation. Chronic infection does not occur, and lifelong immunity follows infection.</p>
    <h4>Hepatitis E</h4>
    <p>HEV genotypes 1 and 2 cause large waterborne outbreaks and severe disease in <strong>pregnant women</strong>, with high mortality in the third trimester. Genotypes 3 and 4 are zoonotic, transmitted by undercooked pork and game, and cause sporadic cases, especially in older men; they can persist and cause <strong>chronic hepatitis</strong> in transplant recipients and other immunosuppressed patients, and have been linked to neurological syndromes. Diagnosis is by <strong>HEV RNA PCR</strong>, preferred in immunosuppression, and IgM. Ribavirin is used for chronic HEV, together with reduction of immunosuppression.</p>
    <h4>Public health</h4>
    <p>Safe water, sanitation, food hygiene and blood screening are the main controls. HAV vaccine is part of childhood schedules in some countries; HEV vaccine is not widely licensed. Neither virus causes chronic disease in immunocompetent hosts, which distinguishes them from HBV and HCV.</p>
  `,
  tip: "The two discriminators are pregnancy severity and chronic infection in the immunosuppressed — both point to hepatitis E.",
  sources: ["S1", "S4", "S17"]
},
{
  id: "v25", domain: "virology", star: true,
  q: "Describe parvovirus B19 infection, its clinical syndromes and the special risks in pregnancy and chronic haemolytic anaemia.",
  tags: ["parvovirus B19", "fifth disease", "aplastic crisis", "hydrops"],
  keypoints: ["single-stranded DNA", "P antigen", "erythroid progenitor", "erythema infectiosum", "transient aplastic crisis", "pure red cell aplasia", "hydrops fetalis", "IgM", "PCR", "intravenous immunoglobulin", "intrauterine transfusion", "no vaccine"],
  answer: `
    <h4>Virology and tropism</h4>
    <p>Parvovirus B19 is the smallest human DNA virus: a non-enveloped, icosahedral <strong>single-stranded DNA</strong> virus. It binds the <strong>P antigen (globoside)</strong> on erythroid progenitor cells, and this tropism explains both the anaemia and the fetal risk. It also infects endothelial cells and other tissues.</p>
    <h4>Clinical syndromes</h4>
    <ul>
      <li><strong>Erythema infectiosum</strong> (fifth disease) — slapped-cheek rash in children, followed by a lacy reticular rash on the trunk and limbs; arthralgia is common in adults.</li>
      <li><strong>Transient aplastic crisis</strong> — in chronic haemolytic anaemia (sickle cell disease, hereditary spherocytosis, thalassaemia), infection causes a sudden drop in reticulocytes and haemoglobin.</li>
      <li><strong>Pure red cell aplasia</strong> — persistent infection in immunodeficiency, transplant recipients and HIV.</li>
      <li><strong>Congenital infection</strong> — hydrops fetalis, severe anaemia, myocarditis and fetal loss; risk is highest in the second trimester.</li>
      <li><strong>Other</strong> — myocarditis, hepatitis, glomerulonephritis and papular-purpuric gloves-and-socks syndrome.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>In immunocompetent patients, <strong>IgM</strong> indicates recent infection and IgG indicates past infection. In immunocompromised patients and fetuses, serology may be negative, so <strong>PCR</strong> of blood, bone marrow or amniotic fluid is required. A low reticulocyte count with anaemia supports the diagnosis; bone marrow shows giant pronormoblasts.</p>
    <h4>Management and prevention</h4>
    <p>Most infections need only supportive care. The differential includes other causes of hydrops and of pure red cell aplasia, so PCR is essential when serology is negative. <strong>Intravenous immunoglobulin</strong> is used for persistent pure red cell aplasia and severe congenital anaemia, and <strong>intrauterine transfusion</strong> may be needed for hydrops. Pregnant women and immunocompromised patients should avoid contact with infected children during the viraemic phase. There is no vaccine. The virus illustrates how a single receptor can determine a remarkably broad clinical spectrum.</p>
  `,
  tip: "Start from P antigen on erythroid progenitors; that one fact generates the rash, the aplastic crisis, the aplasia and hydrops.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "v26", domain: "virology", star: true,
  q: "Describe the poxviruses, with particular reference to mpox: virology, clinical features, diagnosis, treatment and prevention.",
  tags: ["poxvirus", "mpox", "smallpox", "tecovirimat"],
  keypoints: ["cytoplasm", "double-stranded DNA", "DNA-dependent RNA polymerase", "Orthopoxvirus", "eradicated", "vaccinia", "clade I", "clade II", "centrifugal", "lymphadenopathy", "PCR", "tecovirimat", "MVA-BN", "contact precautions"],
  answer: `
    <h4>A family apart</h4>
    <p>Poxviruses are the largest animal viruses: brick-shaped, enveloped, <strong>double-stranded DNA</strong> viruses that replicate entirely in the <strong>cytoplasm</strong>. Because they have no access to nuclear transcription machinery, they carry their own DNA-dependent RNA polymerase and capping and polyadenylation enzymes. The family includes <em>Orthopoxvirus</em> (variola, vaccinia, cowpox, mpox), <em>Parapoxvirus</em>, <em>Molluscipoxvirus</em> (molluscum contagiosum) and <em>Yatapoxvirus</em>.</p>
    <h4>Smallpox and its legacy</h4>
    <p>Variola virus caused smallpox, eradicated in 1980 after a global campaign using <strong>vaccinia</strong>, a live replicating virus. Vaccinia vaccination confers cross-protection against other orthopoxviruses but carries risks: eczema vaccinatum, progressive vaccinia in immunodeficiency, myocarditis and fetal infection. Stocks of variola are restricted to two WHO collaborating centres.</p>
    <h4>Mpox</h4>
    <p>Mpox is a zoonosis endemic in Central and West Africa, with rodents as reservoirs. <strong>Clade I</strong> causes more severe disease; <strong>clade II</strong>, including IIb, caused the 2022 global outbreak and spreads efficiently by close contact, including sexual contact. After an incubation of about one to three weeks, a prodrome of fever and lymphadenopathy is followed by a <strong>centrifugal</strong> vesiculopustular rash. Complications include secondary bacterial infection, keratitis, pneumonia and encephalitis; children, pregnant women and immunosuppressed patients are at higher risk.</p>
    <h4>Diagnosis, treatment and control</h4>
    <ul>
      <li><strong>Diagnosis</strong> — PCR of lesion fluid or crust; electron microscopy shows brick-shaped virions; differentiate from varicella and syphilis.</li>
      <li><strong>Treatment</strong> — supportive; <strong>tecovirimat</strong>, an inhibitor of the VP37 wrapping protein, is used for severe disease, with brincidofovir and vaccinia immune globulin as alternatives.</li>
      <li><strong>Prevention</strong> — <strong>MVA-BN (JYNNEOS)</strong> non-replicating vaccine and contact precautions; isolation until lesions crust and separate.</li>
    </ul>
    <p>Mpox illustrates the need for <strong>orthopoxvirus surveillance</strong>, rapid lesion sampling and vaccine stockpiles, and why eradication of one poxvirus does not remove the risk from its relatives.</p>
  `,
  tip: "Cytoplasmic replication with a virion-encoded RNA polymerase is the defining poxvirus fact; then distinguish clade I from clade II.",
  sources: ["S1", "S4", "S25"]
},
{
  id: "v27", domain: "virology",
  q: "Describe HTLV-1 infection and explain how a retrovirus causes adult T-cell leukaemia/lymphoma. How is it diagnosed and prevented?",
  tags: ["HTLV-1", "ATL", "HAM/TSP", "oncogenesis"],
  keypoints: ["deltaretrovirus", "CD4 T cells", "reverse transcriptase", "provirus", "breastfeeding", "adult T-cell leukaemia", "hypercalcaemia", "HAM/TSP", "Tax", "HBZ", "NF-κB", "line immunoassay", "donor screening", "mogamulizumab"],
  answer: `
    <h4>Virology and transmission</h4>
    <p>Human T-cell lymphotropic virus type 1 is a <strong>deltaretrovirus</strong> with two copies of positive-sense ssRNA and the enzymes reverse transcriptase, integrase and protease. It infects <strong>CD4 T cells</strong> through GLUT1 and other receptors, integrates as a provirus, and spreads by cell-to-cell contact and clonal expansion rather than by high-level plasma viraemia. Transmission is <strong>mother-to-child through breastfeeding</strong>, sexual contact, and blood transfusion or needle sharing.</p>
    <h4>Two diseases</h4>
    <ul>
      <li><strong>Adult T-cell leukaemia/lymphoma (ATL)</strong> — after decades, in a minority of carriers. Acute ATL causes lymphadenopathy, skin lesions, hepatosplenomegaly, hypercalcaemia and lytic bone lesions; chronic and smouldering forms are indolent. The malignant cell is a clonal CD4 T cell with a characteristic flower-like nucleus.</li>
      <li><strong>HTLV-1-associated myelopathy/tropical spastic paraparesis (HAM/TSP)</strong> — progressive spastic weakness, sensory disturbance and bladder dysfunction, driven by inflammatory damage to the spinal cord rather than direct lysis.</li>
      <li><strong>Other</strong> — uveitis, infective dermatitis and impaired immunity to <em>Strongyloides stercoralis</em>, which can cause hyperinfection.</li>
    </ul>
    <h4>Mechanisms of oncogenesis</h4>
    <p><strong>Tax</strong> activates NF-κB, CREB and AP-1, drives IL-2 and IL-2 receptor expression, and inhibits DNA repair and apoptosis; <strong>HBZ</strong> counterbalances Tax and promotes proliferation. The result is polyclonal expansion followed by clonal malignant transformation, with genomic instability and immune escape. HTLV-1 models the general principle that oncogenic viruses act through <strong>chronic proliferation, survival signalling and genomic damage</strong>, as seen with EBV, KSHV, HPV, HBV and HCV.</p>
    <h4>Diagnosis and prevention</h4>
    <p>Screen with <strong>anti-HTLV-1/2 immunoassay</strong>, confirm with line immunoassay or Western blot, and use PCR and clonality studies when needed. ATL is treated with chemotherapy, mogamulizumab and stem cell transplantation; HAM/TSP with symptomatic and anti-inflammatory therapy. Prevention is <strong>blood-donor screening</strong>, avoidance of breastfeeding by carrier mothers and condom use.</p>
  `,
  tip: "Use Tax and HBZ as the molecular core, then link them to ATL and HAM/TSP and to blood-donor screening.",
  sources: ["S1", "S4", "S5"]
},
{
  id: "v28", domain: "virology", star: true,
  q: "Discuss the congenital viral infections. How does gestational timing shape the phenotype, and how are they diagnosed and prevented?",
  tags: ["congenital infection", "CMV", "rubella", "Zika"],
  keypoints: ["first-trimester", "IgM", "congenital infection", "sensorineural deafness", "cataract", "microcephaly", "limb hypoplasia", "hydrops", "peripartum", "IgG avidity", "amniotic fluid PCR", "urine or saliva PCR", "vaccines"],
  answer: `
    <h4>Principles</h4>
    <p>Congenital infection occurs when a pathogen crosses the placenta or infects the fetus during delivery. The timing determines the phenotype: <strong>first-trimester</strong> infection causes teratogenesis and miscarriage, whereas later infection causes growth restriction, inflammation and organ damage. Maternal immunity is protective but not absolute, and <strong>IgM does not cross the placenta</strong>, so IgM in a neonate indicates infection.</p>
    <h4>The main agents</h4>
    <div class="table-wrap"><table>
      <tr><th>Virus</th><th>Timing and route</th><th>Classic features</th></tr>
      <tr><td><strong>CMV</strong></td><td>Any trimester; transplacental, also breast milk and saliva</td><td>Commonest congenital infection; sensorineural deafness, microcephaly, periventricular calcification, thrombocytopenia and hepatitis</td></tr>
      <tr><td><strong>Rubella</strong></td><td>First trimester; risk falls after 16 weeks</td><td>Cataract, deafness, patent ductus arteriosus, growth restriction and blueberry-muffin rash</td></tr>
      <tr><td><strong>Zika</strong></td><td>First or second trimester</td><td>Microcephaly, brain calcifications, ocular lesions and arthrogryposis</td></tr>
      <tr><td><strong>VZV</strong></td><td>First or second trimester</td><td>Limb hypoplasia, cicatricial skin scars, cataracts and cortical atrophy</td></tr>
      <tr><td><strong>Parvovirus B19</strong></td><td>Second trimester</td><td>Severe anaemia, hydrops fetalis and myocarditis</td></tr>
      <tr><td><strong>HSV</strong></td><td>Mainly peripartum</td><td>Neonatal disseminated disease, CNS infection and skin-eye-mouth lesions</td></tr>
    </table></div>
    <h4>Diagnosis</h4>
    <p>Maternal serology with <strong>IgG avidity</strong> helps date infection; fetal ultrasound and MRI detect microcephaly, calcification and hydrops. <strong>Amniotic fluid PCR</strong> confirms fetal infection for CMV and parvovirus. In the neonate, <strong>urine or saliva PCR</strong> for CMV must be obtained within the first weeks of life, and hearing assessment is essential. Rubella IgM and persistent IgG, and Zika RT-PCR of urine and serum, complete the workup.</p>
    <h4>Prevention</h4>
    <p>Rubella and varicella vaccines prevent congenital disease; CMV has no licensed vaccine, so <strong>hygiene counselling</strong> for pregnant women with young children matters. HIV transmission is prevented by maternal antiretroviral therapy, HBV by birth-dose vaccine and immunoglobulin, and parvovirus by avoiding exposure. Zika prevention is vector control. Early recognition allows hearing, vision and developmental support.</p>
  `,
  tip: "Timing is the organising principle: early means teratogenesis, late means growth and inflammation; IgM in the neonate means infection.",
  sources: ["S1", "S4", "S10"]
},
{
  id: "v29", domain: "virology",
  q: "How should the laboratory choose between serology, antigen detection, nucleic acid testing and sequencing for viral diagnosis? Discuss the main interpretive pitfalls.",
  tags: ["viral diagnostics", "serology", "NAAT", "sequencing"],
  keypoints: ["nucleic acid amplification", "antigen tests", "serology", "window period", "cross-reactivity", "IgM", "IgG avidity", "paired sera", "maternal IgG", "inhibitors", "Sanger sequencing", "whole-genome sequencing", "metagenomic"],
  answer: `
    <h4>The question drives the test</h4>
    <p>Viral diagnosis is not a single test but a decision: is the aim to detect the virus, measure its load, prove recent infection, or characterise it for treatment? <strong>Nucleic acid amplification</strong> answers presence and quantity; <strong>antigen tests</strong> answer presence rapidly; <strong>serology</strong> answers exposure and immune status.</p>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Best use</th><th>Key limitation</th></tr>
      <tr><td>NAAT (RT-PCR, TMA)</td><td>Acute infection, viral load, genotyping</td><td>Detects nucleic acid, not viability; inhibitors; cost</td></tr>
      <tr><td>Antigen (EIA, lateral flow)</td><td>Rapid screening, outbreak triage</td><td>Lower sensitivity, especially in adults</td></tr>
      <tr><td>Serology (IgM, IgG, avidity)</td><td>Past exposure, immunity, congenital infection</td><td>Window period; cross-reactivity; IgM persistence</td></tr>
      <tr><td>Culture</td><td>Drug susceptibility, research</td><td>Slow, labour-intensive, containment requirements</td></tr>
      <tr><td>Sequencing</td><td>Resistance, variants, outbreaks</td><td>Cost, interpretation, minority variants</td></tr>
    </table></div>
    <h4>Pre-analytical and interpretive traps</h4>
    <ul>
      <li><strong>Specimen site and timing</strong> matter: nasopharyngeal swab for respiratory viruses, CSF for encephalitis, lesion fluid for mpox, urine for CMV in neonates.</li>
      <li><strong>IgM</strong> may persist for months, cross-react (dengue and Zika), or be absent early; paired sera showing <strong>seroconversion or a fourfold rise</strong> are stronger evidence.</li>
      <li><strong>IgG avidity</strong> dates infection: high avidity suggests infection more than about three months earlier.</li>
      <li><strong>Maternal IgG</strong> persists in infants for months, whereas <strong>IgM in a neonate</strong> indicates congenital infection.</li>
      <li><strong>Contamination and inhibitors</strong> cause false positives and negatives; extraction controls and a second target are essential.</li>
    </ul>
    <h4>Sequencing and the future</h4>
    <p><strong>Sanger sequencing</strong> remains the reference for resistance mutations in HIV, HBV and CMV. <strong>Whole-genome sequencing</strong> supports outbreak tracing and vaccine strain characterisation, and <strong>metagenomic next-generation sequencing</strong> can identify unexpected pathogens in CSF or tissue, at the cost of background noise and interpretation difficulty. The laboratory's job is to pair the right test with a clear clinical question and to report uncertainty honestly.</p>
  `,
  tip: "Match the test to the question, then list the classic traps: window period, IgM persistence, maternal IgG and contamination.",
  sources: ["S12", "S1", "S10"]
},
{
  id: "v30", domain: "virology",
  q: "Define post-viral syndromes and discuss their proposed mechanisms, clinical assessment and management, using long COVID as the main example.",
  tags: ["long COVID", "post-viral", "fatigue", "autonomic dysfunction"],
  keypoints: ["long COVID", "post-acute sequelae", "viral persistence", "autoantibodies", "endothelial", "microthrombi", "autonomic dysfunction", "post-exertional malaise", "no diagnostic biomarker", "red flags", "multidisciplinary", "pacing", "vaccination"],
  answer: `
    <h4>The problem</h4>
    <p>Post-viral syndromes are persistent or relapsing symptoms after the acute phase of an infection, unexplained by ongoing replication alone. They include <strong>long COVID</strong> (post-acute sequelae of SARS-CoV-2), post-dengue fatigue, post-EBV fatigue, post-polio syndrome and post-infectious autoimmune syndromes such as Guillain–Barré. They are common, heterogeneous and often disabling.</p>
    <h4>Mechanisms</h4>
    <ul>
      <li><strong>Viral persistence or reservoir</strong> — antigen and RNA may persist in tissue, such as the gut in SARS-CoV-2 or EBV reactivation, sustaining inflammation.</li>
      <li><strong>Immune dysregulation</strong> — autoantibodies, exhausted T cells, skewed cytokine profiles and failure to return to homeostasis.</li>
      <li><strong>Endothelial and microvascular injury</strong> — microthrombi and impaired perfusion contribute to breathlessness, chest pain and cognitive symptoms.</li>
      <li><strong>Autonomic dysfunction</strong> — postural tachycardia and orthostatic intolerance.</li>
      <li><strong>Mitochondrial and metabolic dysfunction</strong> — impaired energy metabolism with post-exertional malaise.</li>
      <li><strong>Deconditioning and psychosocial factors</strong> — consequences that interact with the illness rather than simple causes.</li>
    </ul>
    <h4>Clinical assessment</h4>
    <p>There is no diagnostic biomarker. Assessment is clinical: document the acute infection, exclude alternative causes such as anaemia, thyroid disease, cardiac or pulmonary disease and mood disorder, and use structured symptom scores. Red flags — hypoxia, chest pain, focal neurology or weight loss — need investigation. For Guillain–Barré, nerve conduction studies and CSF albuminocytological dissociation support the diagnosis.</p>
    <h4>Management and prevention</h4>
    <p>Management is <strong>multidisciplinary and symptom-based</strong>: graded rehabilitation and pacing for post-exertional malaise, autonomic support, respiratory and cognitive therapy, and mental health care. Antivirals are not established for long COVID, and unproven therapies should be avoided. <strong>Vaccination and early antiviral treatment</strong> reduce severe acute disease and probably reduce the risk of post-acute sequelae; surveillance and research cohorts are needed. Post-polio syndrome is managed with energy conservation and orthotics, not antivirals.</p>
  `,
  tip: "Define it, give four or five mechanisms, then stress exclusion of other disease and symptom-based rehabilitation.",
  sources: ["S1", "S4", "S13"]
}
);
