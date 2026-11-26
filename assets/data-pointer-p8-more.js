/* Blastocystis (p8) — additional essays: fine structure, virulence mechanisms, test performance,
   treatment failure, Philippine transmission, microbiome and research gaps. */
window.QBANK.push(
{
  id: "p8h1", domain: "p8",
  q: "Describe the fine structure of Blastocystis and explain why morphology cannot assign a subtype.",
  tags: ["Blastocystis", "morphology", "ultrastructure", "subtypes"],
  keypoints: ["central body form", "granular form", "amoeboid form", "cyst 3–5 µm", "no cell wall", "mitochondria-like organelles", "surface coat", "Golgi", "cyst wall", "Stramenopiles", "SSU rRNA", "barcode region", "ST1–ST17", "morphology cannot subtype", "Blastocystis sp."],
  answer: `
    <h4>What the light microscope shows</h4>
    <p>In unstained or iodine preparations, <em>Blastocystis</em> appears as a round to oval body, usually <strong>5–40 µm</strong>, with a large central vacuole that pushes cytoplasm and nuclei to the rim. The <strong>central body (vacuolar) form</strong> dominates in stool; the <strong>granular</strong> form is packed with granules, the <strong>amoeboid</strong> form has irregular pseudopod-like extensions, and the <strong>cyst</strong> is a small, thick-walled sphere of about <strong>3–5 µm</strong>. Trophozoites have <strong>no cell wall</strong> and no flagella. Peripheral nuclei vary in number, so nuclear counting cannot identify the organism or its subtype.</p>
    <h4>Fine structure</h4>
    <p>Transmission electron microscopy shows a <strong>surface coat</strong>, a well-developed <strong>Golgi</strong> apparatus, rough endoplasmic reticulum, lysosomes and <strong>mitochondria-like organelles</strong> whose cristae differ from those of typical mitochondria. The central vacuole contains glycogen, lipid and membrane debris. The <strong>cyst wall</strong> is multilayered and fibrous, which explains survival in water and resistance to some disinfectants. These features place the organism among the <strong>Stramenopiles</strong>, not with amoebae or ciliates.</p>
    <h4>Why morphology cannot assign a subtype</h4>
    <ul>
      <li>Forms interconvert in culture and with changes in osmolality, so a form is a state, not a species.</li>
      <li>All human subtypes look alike by light microscopy, and the size range overlaps with yeast and artefacts.</li>
      <li>Subtype is defined by <strong>small-subunit rRNA</strong> sequence, usually a <strong>barcode region</strong>, with isolates clustering at a defined identity threshold into <strong>ST1–ST17</strong>.</li>
      <li>PCR-RFLP, Sanger sequencing and whole-genome sequencing resolve subtypes; microscopy cannot.</li>
    </ul>
    <h4>The practical conclusion</h4>
    <p>Report the morphotype and abundance, call the organism <em>Blastocystis</em> sp., and reserve subtype language for molecular or research reports. A vacuolar form is not a cyst, and "subtype ST3" is not a diagnosis.</p>
  `,
  tip: "Separate the form (what you see) from the subtype (what you sequence); examiners reward that distinction.",
  sources: ["P1", "P2", "P3", "P8"]
},
{
  id: "p8h2", domain: "p8", star: true,
  q: "Evaluate the molecular and immunological evidence that Blastocystis damages the intestinal barrier, and explain the limits of that evidence.",
  tags: ["Blastocystis", "virulence", "cysteine proteases", "tight junctions", "immunology"],
  keypoints: ["colonises mucus", "no invasion", "cysteine proteases", "secretory IgA", "tight junctions", "IL-8", "surface antigens", "antigenic variation", "mast cells", "urticaria", "IgE", "ST1", "ST3", "cell lines", "no animal model", "biological plausibility"],
  answer: `
    <h4>Colonisation without invasion</h4>
    <p><em>Blastocystis</em> lives in the colonic lumen and mucus layer. It adheres through a surface coat and lectin-like interactions with mucin, but it does not invade the epithelium or disseminate in immunocompetent hosts. Any damage must therefore be mediated by <strong>soluble products</strong> and by the host response, not by direct invasion. The organism is a strict anaerobe and survives poorly outside the gut, so transmission depends on the cyst.</p>
    <h4>Proposed virulence factors</h4>
    <div class="table-wrap"><table>
      <tr><th>Factor</th><th>Reported effect</th><th>Evidence</th></tr>
      <tr><td><strong>Cysteine proteases</strong></td><td>Degrade <strong>secretory IgA</strong>, cleave <strong>tight junctions</strong>, induce IL-8</td><td>Cell lines, supernatants</td></tr>
      <tr><td><strong>Surface antigens</strong></td><td><strong>Antigenic variation</strong> and immune evasion</td><td>Serology, proteomics</td></tr>
      <tr><td><strong>Metabolic products</strong></td><td>Lower pH, altered short-chain fatty acids</td><td>Culture studies</td></tr>
      <tr><td><strong>Adhesion</strong></td><td>Mucus colonisation, increased permeability</td><td>Caco-2 and mucin models</td></tr>
    </table></div>
    <h4>Host response</h4>
    <p>Infected mucosa shows increased <strong>mast cells</strong>, eosinophils and pro-inflammatory cytokines, and some patients develop <strong>urticaria</strong> with raised <strong>IgE</strong>. Protease activity can activate protease-activated receptors and loosen tight junctions, raising permeability. Subtype appears to matter: <strong>ST1</strong> and <strong>ST3</strong> are over-represented in symptomatic series, while ST4 is often asymptomatic. Symptoms may therefore reflect the intensity of the immune response more than parasite abundance.</p>
    <h4>Limits</h4>
    <ul>
      <li>Most data come from immortalised <strong>cell lines</strong> and supraphysiological parasite doses.</li>
      <li>There is <strong>no animal model</strong> of colitis, so causality cannot be tested in vivo.</li>
      <li>Co-infection, diet and the microbiome confound human observations.</li>
      <li>Isolates differ within a subtype, and few studies use isogenic strains.</li>
    </ul>
    <p>The evidence is <strong>biologically plausible but not conclusive</strong>. It supports low-grade, strain-dependent mucosal irritation rather than invasive colitis.</p>
  `,
  tip: "Grade the evidence: in-vitro mechanism is plausibility, not proof — say so explicitly.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "p8h3", domain: "p8", star: true,
  q: "Compare the diagnostic accuracy of microscopy, culture and molecular methods for Blastocystis, and explain how a laboratory should verify and select them.",
  tags: ["Blastocystis", "diagnostic accuracy", "PCR", "validation", "algorithm"],
  keypoints: ["no gold standard", "latent class analysis", "wet mount 30–50%", "concentration", "trichrome 50–70%", "culture", "Jones medium", "PCR >90%", "qPCR", "limit of detection", "proficiency testing", "kappa", "positive predictive value", "tiered algorithm", "subtyping", "cost-effectiveness"],
  answer: `
    <h4>The reference-standard problem</h4>
    <p>No method is a true gold standard. PCR is more sensitive than microscopy, so studies that use PCR as the reference inflate its apparent specificity and penalise microscopy. <strong>Latent class analysis</strong> or a composite reference is preferable. Sensitivity also depends on parasite load, specimen number and transport time. A negative microscopy result therefore cannot exclude infection, and a single positive PCR in a low-prevalence setting must still be interpreted with the clinical picture.</p>
    <h4>Performance</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Sensitivity</th><th>Strengths</th><th>Limits</th></tr>
      <tr><td>Direct <strong>wet mount</strong></td><td>Low, roughly <strong>30–50%</strong></td><td>Cheap, immediate</td><td>Observer-dependent; misses low loads</td></tr>
      <tr><td><strong>Concentration</strong> + trichrome</td><td>About <strong>50–70%</strong></td><td>Preserves morphology; cheap</td><td>Still insensitive; staining skill</td></tr>
      <tr><td><strong>Culture</strong> (Jones)</td><td>About 50–70%</td><td>Viable organism; typing possible</td><td>2–4 days; contamination; labour</td></tr>
      <tr><td>Conventional <strong>PCR</strong></td><td>High, often <strong>&gt;90%</strong></td><td>Sensitive; permits <strong>subtyping</strong></td><td>Cost, equipment, contamination</td></tr>
      <tr><td><strong>qPCR</strong> / multiplex</td><td>Highest</td><td>Quantitative; co-pathogen panels</td><td>Cost; no viability</td></tr>
    </table></div>
    <h4>Verification and quality</h4>
    <ul>
      <li>Verify against known positive and negative samples, not against the same method.</li>
      <li>Establish a <strong>limit of detection</strong> with diluted cysts or cultured organisms.</li>
      <li>Use <strong>proficiency testing</strong>, blind re-reading and <strong>kappa</strong> statistics for microscopy.</li>
      <li>Include extraction and inhibition controls for PCR and guard against amplicon contamination.</li>
    </ul>
    <h4>Choosing a method</h4>
    <p>A primary laboratory should use concentration plus a stained smear and refer ambiguous cases. A secondary laboratory can add culture, and a tertiary or reference laboratory should offer PCR and <strong>subtyping</strong>. Selection depends on prevalence, because <strong>positive predictive value</strong> falls when prevalence is low. Reports should give abundance semiquantitatively and state that significance is uncertain. The <strong>tiered algorithm</strong> should be justified by clinical need and <strong>cost-effectiveness</strong>, not by novelty.</p>
  `,
  tip: "Name the reference-standard flaw before comparing sensitivities — it is the mark of a critical answer.",
  sources: ["P2", "P3", "P11"]
},
{
  id: "p8h4", domain: "p8",
  q: "A patient remains symptomatic after metronidazole for Blastocystis. Construct a management plan covering causes of failure, retreatment and special populations.",
  tags: ["Blastocystis", "treatment failure", "metronidazole", "nitazoxanide", "stewardship"],
  keypoints: ["confirm report", "repeat stool", "co-pathogens", "irritable bowel syndrome", "reinfection", "adherence", "reduced susceptibility", "tinidazole", "nitazoxanide", "paromomycin", "co-trimoxazole", "pregnancy", "children", "immunocompromised", "defined endpoint", "stewardship"],
  answer: `
    <h4>Re-examine before retreating</h4>
    <p>Confirm that the original report was valid and that the organism was present in reasonable numbers. Repeat stool with concentration and trichrome, and consider PCR. Exclude <em>Giardia</em>, coccidia, microsporidia, <em>Entamoeba histolytica</em>, bacterial enteropathogens and coeliac disease. Review drugs, diet and stress. Ask specifically about antibiotics, proton-pump inhibitors and travel, because each alters the differential. Many patients have <strong>irritable bowel syndrome</strong> or post-infectious dysfunction, which treating the parasite will not cure.</p>
    <h4>Why treatment appears to fail</h4>
    <div class="table-wrap"><table>
      <tr><th>Cause</th><th>Clue</th></tr>
      <tr><td><strong>Reinfection</strong></td><td>Same water or food exposure; household cases</td></tr>
      <tr><td>Poor <strong>adherence</strong> or dose</td><td>Short course, vomiting, missed doses</td></tr>
      <tr><td><strong>Co-pathogens</strong></td><td>Other parasites or bacteria on repeat testing</td></tr>
      <tr><td>Non-infectious diagnosis</td><td>Normal stool, chronic IBS-type symptoms</td></tr>
      <tr><td><strong>Reduced susceptibility</strong></td><td>Persistent organism despite documented compliance</td></tr>
    </table></div>
    <h4>Retreatment options</h4>
    <p>If the organism persists and symptoms are attributable, change class rather than repeat the same drug: <strong>tinidazole</strong>, <strong>nitazoxanide</strong> 500 mg twice daily for 3 days, <strong>paromomycin</strong> or <strong>co-trimoxazole</strong>. Evidence is weak and none is reliably superior. Treat for a clearly defined period, then objectively reassess symptoms and parasite clearance. Document the drug, dose and dates before changing therapy, so apparent failure can be distinguished from inadequate exposure.</p>
    <h4>Special populations</h4>
    <ul>
      <li><strong>Pregnancy:</strong> avoid unnecessary treatment; paromomycin is poorly absorbed but evidence is limited; discuss with obstetrics.</li>
      <li><strong>Children:</strong> weight-based dosing; nitazoxanide has paediatric formulations.</li>
      <li><strong>Immunocompromised:</strong> exclude other pathogens and treat only documented symptomatic infection.</li>
      <li><strong>Renal or hepatic impairment:</strong> adjust metronidazole and nitazoxanide where appropriate.</li>
    </ul>
    <p><strong>Stewardship</strong> means stopping treatment when the diagnosis is wrong, not adding a second drug.</p>
  `,
  tip: "The best answer often withholds the second drug; justify that with the differential diagnosis.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p8h5", domain: "p8",
  q: "Explain the Philippine epidemiology of Blastocystis through water, sanitation and animal exposure, and identify the groups at highest risk.",
  tags: ["Blastocystis", "Philippines", "WASH", "One Health", "epidemiology"],
  keypoints: ["cyst environmental stage", "chlorine resistance", "shallow wells", "flooding", "market food", "open defecation", "crowding", "ST5–ST7 birds", "ST4 livestock", "ST8 primates", "backyard raising", "urban poor", "Indigenous peoples", "schoolchildren", "not notifiable", "WASH"],
  answer: `
    <h4>Water and food</h4>
    <p>The cyst is the environmental stage: thick-walled, resistant to <strong>routine chlorination</strong>, and able to survive for days to weeks in cool, moist conditions. In communities that rely on <strong>shallow wells</strong>, springs, harvested rain or intermittent piped supply, faecal contamination is common. <strong>Flooding</strong> mixes sewage with drinking water, and <strong>market food</strong>, ice, unwashed vegetables and shared utensils add further routes. Boiling, filtration and safe storage interrupt transmission; chlorine alone may not.</p>
    <h4>Sanitation and crowding</h4>
    <p><strong>Open defecation</strong>, shared toilets and crowded housing increase person-to-person spread. Schools, dormitories, prisons and care facilities concentrate exposure. Children are often the highest-prevalence group because hygiene is imperfect and play is close-contact.</p>
    <h4>Animal exposure — a One Health view</h4>
    <ul>
      <li><strong>ST5–ST7</strong> are mainly avian; <strong>ST4</strong> is linked to livestock; <strong>ST8</strong> to primates.</li>
      <li><strong>Backyard raising</strong> of pigs, poultry and cattle, slaughterhouse work and wet markets create contact.</li>
      <li>Rats and dogs may carry subtypes, though the direction of transmission is rarely proven.</li>
      <li>Human-to-human spread still explains most ST3 infection; zoonosis is a minority route.</li>
    </ul>
    <h4>Who is at highest risk</h4>
    <p><strong>Urban poor</strong> settlements with limited water, rural farming households, <strong>Indigenous peoples</strong> with poor service delivery, <strong>schoolchildren</strong> and immunocompromised patients. Occupational groups include farm and abattoir workers.</p>
    <h4>What follows</h4>
    <p>Because <em>Blastocystis</em> is <strong>not notifiable</strong>, Philippine burden estimates rest on surveys and are biased by method and site. Control belongs to <strong>WASH</strong>, health education and laboratory standardisation, not mass drug administration. Sentinel surveillance in schools and communities, with subtype data, would show which routes matter.</p>
  `,
  tip: "Tie every epidemiological claim to an exposure route and a control measure; avoid a bare prevalence list.",
  sources: ["P2", "P4", "P13", "P14"]
},
{
  id: "p8h6", domain: "p8",
  q: "Explain how Blastocystis interacts with the intestinal microbiome and evaluate the claim that it is a marker of a healthy gut.",
  tags: ["Blastocystis", "microbiome", "dysbiosis", "Prevotella", "causality"],
  keypoints: ["mucus layer", "anaerobic", "saccharolytic", "bacterial diversity", "Prevotella", "Bacteroides", "enterotype", "ST3", "ST4", "mucin degradation", "short-chain fatty acids", "IgA", "mast cells", "cross-sectional", "reverse causation", "ecosystem engineer"],
  answer: `
    <h4>An ecosystem member</h4>
    <p><em>Blastocystis</em> occupies the colonic <strong>mucus layer</strong> alongside bacteria, archaea, fungi and other protists. It is <strong>anaerobic</strong> and <strong>saccharolytic</strong>, and its surface coat and proteases give it a distinct niche. It does not sit passively: it consumes nutrients, alters mucus and releases metabolites that other organisms can use. Its presence is therefore influenced by diet and transit time as much as by immunity.</p>
    <h4>What surveys show</h4>
    <ul>
      <li>Carriers often have <strong>higher bacterial diversity</strong> and richness than non-carriers.</li>
      <li>Several studies report a <strong>Prevotella</strong>-rich, <strong>Bacteroides</strong>-poor profile, resembling a fibre-associated <strong>enterotype</strong>.</li>
      <li>Subtype matters: <strong>ST3</strong> and <strong>ST4</strong> show different bacterial associations.</li>
      <li>Findings are inconsistent in IBS and inflammatory bowel disease, where both higher and lower carriage are reported.</li>
    </ul>
    <h4>Possible mechanisms</h4>
    <p>Proteases and <strong>mucin degradation</strong> release substrates; <strong>short-chain fatty acid</strong> production changes luminal pH; protozoan grazing shapes bacterial communities; and chronic low-grade immune stimulation, including <strong>IgA</strong> and <strong>mast cells</strong>, may alter mucosal ecology. The organism could therefore be an "<strong>ecosystem engineer</strong>" rather than a mere passenger.</p>
    <h4>The causal problem</h4>
    <p>Nearly all human data are <strong>cross-sectional</strong>. Diet, geography, water source, antibiotics and age determine both microbiome and carriage, and treatment studies are too small to separate drug from microbiome change. <strong>Reverse causation</strong> is plausible: a diverse, fibre-rich gut may simply favour <em>Blastocystis</em>. Mendelian randomisation and longitudinal cohorts are needed.</p>
    <h4>Clinical reading</h4>
    <p>The claim that <em>Blastocystis</em> marks a healthy gut is <strong>suggestive but unproven</strong>. It is a reason not to treat asymptomatic carriage, and not yet a reason to call the organism protective.</p>
  `,
  tip: "Association, mechanism, causation — keep the three in separate paragraphs and the grade is secure.",
  sources: ["P2", "P3", "P4"]
},
{
  id: "p8h7", domain: "p8",
  q: "Identify the major research gaps in Blastocystis and propose study designs that would close them.",
  tags: ["Blastocystis", "research gaps", "study design", "genomics", "clinical trials"],
  keypoints: ["subtype not species", "closed genomes", "culture collection", "cryopreservation", "no animal model", "organoids", "isogenic isolates", "no reference standard", "qPCR", "metagenomics", "randomised placebo-controlled trial", "stratified by subtype", "parasite clearance", "cluster survey", "One Health", "capacity building"],
  answer: `
    <h4>Taxonomy and genomics</h4>
    <p>The 17 subtypes are not formally species, and the boundary between subtype and species is unsettled. Draft genomes exist, but <strong>closed genomes</strong>, pangenomes and curated <strong>culture collections</strong> are scarce. Axenic culture and <strong>cryopreservation</strong> remain difficult, which blocks reproducible work. A coordinated biobank with reference strains and standard operating procedures is the first gap to close. Without shared material, laboratories cannot compare subtype biology across studies.</p>
    <h4>Pathogenesis</h4>
    <ul>
      <li>No reproducible <strong>animal model</strong>; gnotobiotic mice and human <strong>organoids</strong> are promising.</li>
      <li>Few studies use <strong>isogenic isolates</strong>, so subtype effects are confounded by strain background.</li>
      <li>Dose–response and time-course experiments are lacking.</li>
      <li>Host genetic factors, including HLA and mucosal immunity, are largely unstudied.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>There is <strong>no reference standard</strong>, and reporting thresholds differ. Multicentre studies should compare <strong>qPCR</strong>, digital PCR and <strong>metagenomics</strong> against a composite reference, with defined limits of detection. Point-of-care tests for primary laboratories need field validation.</p>
    <h4>Clinical trials</h4>
    <p>Treatment trials are small, unblinded and heterogeneous. What is needed is a <strong>randomised, placebo-controlled trial</strong> in symptomatic patients, <strong>stratified by subtype</strong> and microbiome, with blinded symptom scores and <strong>parasite clearance</strong> as co-primary endpoints. Paediatric and pregnancy studies are almost absent.</p>
    <h4>Epidemiology and One Health</h4>
    <div class="table-wrap"><table>
      <tr><th>Gap</th><th>Design</th><th>Endpoint</th></tr>
      <tr><td>True prevalence</td><td>Population-based <strong>cluster survey</strong></td><td>Weighted prevalence by region</td></tr>
      <tr><td>Transmission route</td><td>Case–control with WASH exposure</td><td>Adjusted odds ratios</td></tr>
      <tr><td>Zoonotic risk</td><td>Household–animal cohort, subtyping</td><td>Shared subtypes</td></tr>
    </table></div>
    <p>Funding, sample archiving and South–East Asian <strong>capacity building</strong> are cross-cutting needs. The field's central weakness is not a shortage of hypotheses but a shortage of <strong>standardised, comparable studies</strong>.</p>
  `,
  tip: "Pair every gap with a design and an endpoint; an agenda without methods is only a complaint.",
  sources: ["P2", "P3", "P4", "P11"]
}
);
