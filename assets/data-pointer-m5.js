/* Microbiology — pointer gap m5: genetic engineering & microorganisms in medicine and industry */
window.QBANK.push(
{
  id: "m5g1", domain: "m5", star: true,
  q: "Explain the recombinant DNA workflow and compare prokaryotic and eukaryotic expression systems for therapeutic proteins. Why does the choice of host determine product quality?",
  tags: ["recombinant DNA", "expression systems", "E. coli", "glycosylation"],
  keypoints: ["restriction endonucleases and DNA ligase", "plasmid vector with origin and selectable marker", "competent cell transformation", "insert sequencing and master cell bank", "E. coli T7 promoter and inclusion bodies", "codon optimisation and rare codons", "N-linked glycosylation in CHO cells", "Pichia pastoris high-density fermentation", "signal peptide for secretion", "affinity chromatography and polishing", "host cell protein and DNA clearance", "post-translational modification determines half-life", "biosimilar comparability", "Good Manufacturing Practice"],
  answer: `
    <h4>From gene to product</h4>
    <p><strong>Recombinant DNA</strong> technology moves a defined gene into a host that can express it. The gene is amplified by PCR or synthesised, cut with <strong>restriction endonucleases</strong> and joined by <strong>DNA ligase</strong> into a <strong>plasmid vector</strong> carrying an origin of replication, a promoter, a ribosome-binding site and a <strong>selectable marker</strong>. <strong>Competent cells</strong> are transformed, antibiotic selection and colony screening identify the construct, and <strong>insert sequencing</strong> verifies it before a <strong>master cell bank</strong> is laid down. The design question is not only whether the host can make the protein, but whether it can make the correct protein at scale, reproducibly and safely.</p>
    <h4>Choosing the expression host</h4>
    <div class="table-wrap"><table>
      <tr><th>Host</th><th>Advantages</th><th>Limitations</th></tr>
      <tr><td><strong>E. coli</strong></td><td>Fast, cheap, high yield; simple genetics</td><td>No <strong>N-linked glycosylation</strong>; endotoxin; protein may form <strong>inclusion bodies</strong></td></tr>
      <tr><td><strong>Yeast</strong> (<em>S. cerevisiae</em>, <strong>Pichia pastoris</strong>)</td><td>Eukaryotic folding and secretion; <strong>high-density fermentation</strong></td><td>High-mannose glycans shorten half-life; proteolysis</td></tr>
      <tr><td><strong>CHO and HEK293 cells</strong></td><td>Authentic human <strong>post-translational modification</strong></td><td>Slow and expensive; viral safety and serum-free media</td></tr>
      <tr><td>Insect and plant</td><td>High yield; low cost</td><td>Different glycans; regulatory novelty</td></tr>
    </table></div>
    <h4>Making the product consistent</h4>
    <ul>
      <li><strong>Codon optimisation</strong> and removal of rare codons improve translation; a <strong>signal peptide</strong> directs secretion.</li>
      <li>Inducible promoters, such as the <strong>T7 promoter</strong> or methanol induction in <em>Pichia</em>, separate growth from production and limit toxicity.</li>
      <li><strong>Inclusion bodies</strong> are solubilised and refolded, then purified by <strong>affinity chromatography</strong> and polishing steps.</li>
      <li>Quality control measures <strong>host cell protein and DNA clearance</strong>, endotoxin, aggregates, charge variants and <strong>glycan profile</strong>; these determine immunogenicity and half-life.</li>
    </ul>
    <p>The same molecule made in a different host is not automatically interchangeable, so a <strong>biosimilar</strong> must demonstrate comparability. Host choice therefore links molecular biology to <strong>Good Manufacturing Practice</strong>, cost and patient access.</p>
  `,
  tip: "Draw the cloning cycle in order, then use the host table to argue that glycosylation and folding — not yield alone — decide the platform.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "m5g2", domain: "m5", star: true,
  q: "Explain how CRISPR-Cas9 is adapted for therapeutic genome editing. What repair outcomes, delivery problems and safety issues determine whether an edit reaches the clinic?",
  tags: ["CRISPR", "genome editing", "gene therapy", "off-target"],
  keypoints: ["guide RNA and protospacer adjacent motif", "Cas9 double-strand break", "non-homologous end joining", "homology-directed repair", "base editors and prime editors", "ex vivo haematopoietic stem cell editing", "BCL11A enhancer and sickle cell disease", "CAR-T TRAC knockout", "lipid nanoparticle delivery to liver", "off-target editing and chromosomal translocations", "p53 DNA damage response", "pre-existing Cas9 immunity", "somatic versus germline editing", "long-term follow-up and registry"],
  answer: `
    <h4>How an edit is made</h4>
    <p><strong>CRISPR-Cas9</strong> is directed by a <strong>guide RNA</strong> that base-pairs with a target beside a <strong>protospacer adjacent motif</strong>. Cas9 creates a <strong>double-strand break</strong>, which the cell repairs by <strong>non-homologous end joining</strong>, leaving small insertions or deletions that usually knock out the gene, or by <strong>homology-directed repair</strong> when a template is supplied, allowing precise correction. <strong>Base editors</strong> and <strong>prime editors</strong> change single bases or insert sequence without a double-strand break, reducing collateral damage.</p>
    <h4>Where it is being used</h4>
    <ul>
      <li><strong>Ex vivo haematopoietic stem cell editing</strong>: disabling the <strong>BCL11A</strong> erythroid enhancer reactivates fetal haemoglobin and has treated <strong>sickle cell disease</strong> and β-thalassaemia.</li>
      <li><strong>CAR-T cells</strong> with a <strong>TRAC knockout</strong> to prevent graft-versus-host disease or allow allogeneic use.</li>
      <li><strong>In vivo</strong> editing: <strong>lipid nanoparticles</strong> carrying Cas9 mRNA and guide RNA reach hepatocytes, as in transthyretin amyloidosis.</li>
      <li>Antimicrobial and diagnostic uses: sequence-specific killing of resistant bacteria and Cas12/Cas13 detection.</li>
    </ul>
    <h4>What limits clinical use</h4>
    <p><strong>Off-target editing</strong>, large deletions and <strong>chromosomal translocations</strong>, a <strong>p53</strong>-mediated DNA-damage response and <strong>pre-existing Cas9 immunity</strong> are the main safety concerns. Editing efficiency varies with cell state, and homology-directed repair is largely restricted to dividing cells. Delivery must reach the right tissue, and edited cells need <strong>long-term follow-up and registry</strong> data. <strong>Somatic</strong> editing is regulated as a medicinal product; <strong>germline</strong> editing is heritable and prohibited in most jurisdictions after the 2018 embryo case. Consent, equity, disability perspectives and access are as demanding as the technical problems.</p>
  `,
  tip: "Separate the molecular edit (NHEJ versus HDR), the delivery route (ex vivo versus LNP) and the governance (somatic versus germline).",
  sources: ["S13", "S1", "S4"]
},
{
  id: "m5g3", domain: "m5",
  q: "Evaluate bacteriophage therapy for multidrug-resistant infection. How are phages selected, manufactured and dosed, and what evidence and regulatory gaps remain?",
  tags: ["bacteriophage", "phage therapy", "multidrug resistance", "biofilm"],
  keypoints: ["obligately lytic phage", "narrow host range and spot testing", "personalised phage cocktail", "phage bank", "biofilm depolymerase", "neutralising antibodies and clearance", "phage resistance by receptor mutation", "synergy with antibiotics", "inhaled topical and intravenous routes", "compassionate-use case series", "randomised controlled trials", "Good Manufacturing Practice and endotoxin", "validated potency assay", "regulatory pathway and expanded access"],
  answer: `
    <h4>Why phages, and which ones</h4>
    <p><strong>Bacteriophage therapy</strong> uses viruses that infect and lyse bacteria. Only <strong>obligately lytic phage</strong> are acceptable, because temperate phages can carry virulence or resistance genes. Each phage has a <strong>narrow host range</strong>, so a clinical isolate must be tested by <strong>spot testing</strong> and efficiency-of-plating assays before a <strong>personalised phage cocktail</strong> is chosen. This specificity spares commensals but demands rapid microbiology that most hospitals cannot provide.</p>
    <h4>Selection, manufacture and dosing</h4>
    <ul>
      <li><strong>Phage banks</strong> supply matched cocktails for common resistant species, and a cocktail may combine several phages to widen coverage; <strong>biofilm depolymerases</strong> help penetrate chronic infection.</li>
      <li>Manufacture needs <strong>Good Manufacturing Practice</strong>, host-bacterial clearance, <strong>endotoxin</strong> limits, sterility and a validated <strong>potency assay</strong> — none globally standardised.</li>
      <li>Phages are cleared by the reticuloendothelial system and neutralised by <strong>neutralising antibodies</strong>, so doses are high and repeated; inhaled, topical, oral and intravenous routes are used.</li>
      <li><strong>Phage resistance</strong> arises through receptor mutation, and <strong>synergy with antibiotics</strong> may suppress it.</li>
    </ul>
    <h4>Evidence and limits</h4>
    <p><strong>Compassionate-use case series</strong> describe salvage of refractory <em>Pseudomonas</em>, <em>Staphylococcus</em> and <em>Acinetobacter</em> infections, but <strong>randomised controlled trials</strong> are few and often underpowered; the PhagoBurn trial did not meet its endpoint. Regulators expect genome characterisation, proof that the phage is not temperate and evidence of stability on storage. <strong>Regulatory pathway</strong> is fragmented, with Belgium's magistral framework and US <strong>expanded access</strong> rather than a licensed product. In the Philippines, where multidrug resistance is common and new antibiotics are costly, phage therapy is attractive but needs a reference laboratory, ethical review and an FDA route before routine use.</p>
  `,
  tip: "Argue from the phage's biology: narrow host range drives personalised selection, which in turn drives the manufacturing and trial problems.",
  sources: ["S13", "S4", "S1"]
},
{
  id: "m5g4", domain: "m5",
  q: "Describe the design–build–test–learn approach of synthetic biology and explain how engineered microorganisms are used as chassis and living therapeutics.",
  tags: ["synthetic biology", "genetic circuits", "chassis", "live biotherapeutic"],
  keypoints: ["design-build-test-learn cycle", "standard biological parts", "chassis organism", "minimal genome JCVI-syn3.0", "genetic circuit and logic gate", "inducible promoter and riboswitch", "metabolic engineering", "synthetic consortium and division of labour", "cell-free expression system", "engineered probiotic E. coli Nissle", "live biotherapeutic product", "xenobiology and orthogonal systems", "biocontainment and kill switch"],
  answer: `
    <h4>The engineering cycle</h4>
    <p><strong>Synthetic biology</strong> applies engineering principles to living systems. The <strong>design–build–test–learn cycle</strong> specifies a function, assembles DNA from <strong>standard biological parts</strong>, measures the behaviour and revises the design. Cheap synthesis and automation have shortened each round, while CRISPR and genome-scale editing allow many changes at once.</p>
    <h4>Parts, circuits and chassis</h4>
    <ul>
      <li>A <strong>chassis organism</strong> is a domesticated host with reduced complexity; the <strong>minimal genome JCVI-syn3.0</strong> defines the lower limit of independent life.</li>
      <li><strong>Genetic circuits</strong> built from <strong>inducible promoters</strong>, repressors and <strong>riboswitches</strong> implement logic gates, oscillators and bistable switches. DNA assembly standards let parts move between laboratories, although context effects mean a circuit may behave differently in a new host.</li>
      <li><strong>Metabolic engineering</strong> redirects flux to fuels, chemicals and precursors; a <strong>synthetic consortium</strong> divides labour between strains.</li>
      <li>A <strong>cell-free expression system</strong> prototypes circuits without living cells and can make toxic products.</li>
    </ul>
    <h4>Living therapeutics</h4>
    <p>Engineered <strong>probiotic E. coli Nissle</strong> can sense inflammation, deliver cytokines or consume toxic metabolites in the gut, and is being tested as a <strong>live biotherapeutic product</strong>. Trials must show that the strain colonises, persists and disappears as intended. <strong>Xenobiology</strong> with unnatural bases and <strong>orthogonal systems</strong> aims to prevent gene exchange with natural organisms. The same power creates risk: an escaped circuit could persist in the environment, and engineered strains might transfer resistance or virulence genes. <strong>Biocontainment</strong> through auxotrophy, <strong>kill switches</strong> and physical containment therefore belongs in the design. Responsible innovation also requires openness about purpose, ownership and consent when living products are released or given to patients.</p>
  `,
  tip: "Use the four-step cycle as the spine, then give one production chassis and one living therapeutic as concrete applications.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "m5g5", domain: "m5", star: true,
  q: "Describe the industrial production of recombinant medicines, enzymes and bioplastics, using insulin, hepatitis B vaccine, industrial enzymes and polyhydroxyalkanoate as examples. What quality controls apply?",
  tags: ["industrial microbiology", "insulin", "vaccines", "bioplastics", "enzymes"],
  keypoints: ["upstream fermentation and downstream purification", "proinsulin cleavage and disulfide bonds", "insulin analogues lispro and aspart", "Pichia pastoris for hepatitis B surface antigen", "alum adjuvant adsorption", "Bacillus subtilis secretion of enzymes", "directed evolution of enzymes", "polyhydroxyalkanoate bioplastic", "polylactic acid from starch", "monoclonal antibody in CHO cells", "host cell protein and DNA clearance", "potency assay and glycan mapping", "biosimilar comparability exercise", "Good Manufacturing Practice and pharmacopoeia", "cold chain and cost"],
  answer: `
    <h4>Upstream and downstream</h4>
    <p>Industrial microbiology turns an engineered strain into product at scale. <strong>Upstream fermentation</strong> covers strain construction, inoculum development, sterilised medium and controlled batch, fed-batch or continuous culture with temperature, pH, dissolved oxygen and foam control; clone screening and process development then set the harvest time. <strong>Downstream purification</strong> harvests cells, recovers secreted or intracellular product, and uses centrifugation, filtration, <strong>chromatography</strong> and formulation. Yield, purity and cost are set by both halves.</p>
    <h4>Four product families</h4>
    <div class="table-wrap"><table>
      <tr><th>Product</th><th>Host and process</th><th>Quality issue</th></tr>
      <tr><td><strong>Recombinant human insulin</strong></td><td><em>E. coli</em> inclusion bodies or <strong>Pichia pastoris</strong> secretion; <strong>proinsulin cleavage and disulfide bonds</strong></td><td>Related proteins, potency, immunogenicity; analogues such as <strong>lispro and aspart</strong></td></tr>
      <tr><td><strong>Hepatitis B vaccine</strong></td><td><strong>Pichia pastoris for hepatitis B surface antigen</strong>, with <strong>alum adjuvant adsorption</strong></td><td>Antigen content and potency; cold chain</td></tr>
      <tr><td><strong>Industrial enzymes</strong></td><td><strong>Bacillus subtilis secretion of enzymes</strong>; <strong>directed evolution</strong> for stability</td><td>Activity, allergenicity, feedstock cost</td></tr>
      <tr><td><strong>Bioplastics</strong></td><td><strong>Polyhydroxyalkanoate bioplastic</strong> in <em>Cupriavidus necator</em>; <strong>polylactic acid from starch</strong></td><td>Crystallinity, degradation rate, price</td></tr>
    </table></div>
    <h4>Quality and access</h4>
    <p>Biologics require <strong>Good Manufacturing Practice and pharmacopoeia</strong> monographs, a validated <strong>potency assay and glycan mapping</strong>, and <strong>host cell protein and DNA clearance</strong>; a <strong>monoclonal antibody in CHO cells</strong> adds viral clearance and aggregation testing. Each lot is also tested for sterility, endotoxin and adventitious agents before release. A <strong>biosimilar comparability exercise</strong> must show that structure, function and immunogenicity match the originator. High capital cost, <strong>cold chain and cost</strong> keep insulin and vaccines scarce in low-income settings, so technology transfer and local fill-finish capacity matter as much as the fermentation science.</p>
  `,
  tip: "Use one upstream–downstream frame, then let the four-row table supply the product-specific facts and quality tests.",
  sources: ["S1", "S2", "S12", "S13"]
},
{
  id: "m5g6", domain: "m5",
  q: "Discuss the biosafety, containment and ethical governance of genetically engineered microorganisms used in medicine and industry.",
  tags: ["biosafety", "containment", "dual-use", "bioethics"],
  keypoints: ["risk group classification", "biosafety level 1 to 4", "primary and secondary containment", "HEPA-filtered exhaust and directional airflow", "autoclave validation", "biological kill switch", "auxotrophic containment", "Cartagena Protocol on Biosafety", "WHO Laboratory Biosafety Manual", "National Committee on Biosafety of the Philippines", "institutional biosafety committee", "dual-use research of concern", "germline editing moratorium", "gene drive environmental risk", "informed consent and equity", "waste inactivation and transport"],
  answer: `
    <h4>Risk assessment comes first</h4>
    <p>Work with genetically engineered microorganisms begins with <strong>risk group classification</strong> of the host, the insert, the modification and the route of exposure. <strong>Biosafety level 1 to 4</strong> then sets facilities, equipment and practice. <strong>Primary containment</strong> protects the worker and immediate environment through good technique, biological safety cabinets and sealed vessels; <strong>secondary containment</strong> protects the building and community through <strong>directional airflow</strong>, <strong>HEPA-filtered exhaust</strong>, restricted access and validated <strong>autoclave</strong> waste inactivation. Large-scale fermentation adds closed systems, effluent treatment and monitoring for inadvertent release.</p>
    <h4>Containment beyond the laboratory</h4>
    <ul>
      <li><strong>Biological kill switch</strong> designs, <strong>auxotrophic containment</strong> and toxin–antitoxin dependence make survival outside the laboratory unlikely.</li>
      <li>Environmental release of engineered plants or microbes needs an environmental risk assessment, monitoring and a <strong>Cartagena Protocol on Biosafety</strong>-consistent decision.</li>
      <li>Facilities need an <strong>institutional biosafety committee</strong>, training, medical surveillance, incident reporting, <strong>waste inactivation and transport</strong> rules, and import permits for strains.</li>
      <li>The <strong>WHO Laboratory Biosafety Manual</strong> provides the risk-based framework that most national codes adapt.</li>
    </ul>
    <h4>Ethics and governance</h4>
    <p><strong>Dual-use research of concern</strong> — work that could make a pathogen more transmissible or virulent — needs review before publication, not after. A <strong>germline editing moratorium</strong> reflects the heritability of embryo edits, while <strong>gene drive environmental risk</strong> is potentially irreversible. <strong>Informed consent and equity</strong> matter when engineered organisms are tested in communities or priced beyond the people who need them. In the Philippines, the <strong>National Committee on Biosafety of the Philippines</strong> coordinates oversight under the national biosafety framework, but inspection and long-term monitoring capacity remains uneven. Biosafety is a system of people, records and culture, not only equipment.</p>
  `,
  tip: "Move outward from the bench: risk group, primary containment, secondary containment, then environmental and ethical governance.",
  sources: ["S21", "S23", "S12", "S13"]
}
);
