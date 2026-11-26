/* Immunology of infection — additional essays, part B (i13–i30). */
window.QBANK.push(
{
  id: "i13", domain: "immunology", star: true,
  q: "Explain how dendritic cells bridge innate and adaptive immunity. Compare the major dendritic-cell subsets, describe the antigen-presentation pathways, and discuss how this crosstalk is exploited clinically.",
  tags: ["dendritic cells", "antigen presentation", "costimulation", "adjuvants"],
  keypoints: ["dendritic cells", "antigen-presenting cells", "cross-presentation", "CCR7", "MHC class I", "MHC class II", "TAP", "HLA-DM", "costimulation", "CD40-CD40L", "IL-12", "adjuvants", "DC-SIGN", "Langerhans cell histiocytosis"],
  answer: `
    <h4>Dendritic cells as sentinels</h4>
    <p><strong>Dendritic cells (DCs)</strong> are the principal <strong>antigen-presenting cells</strong> that initiate adaptive immunity. Immature DCs in skin and mucosa sample antigen by macropinocytosis, receptor-mediated uptake and <strong>cross-presentation</strong>; <strong>pattern-recognition receptor</strong> ligation plus inflammatory cytokines induces maturation. Maturing DCs up-regulate <strong>CCR7</strong>, migrate to the draining lymph node and present antigen to naive T cells. Without maturation they tolerise, which is why peripheral tolerance depends on resting DCs.</p>
    <h4>Subsets and antigen pathways</h4>
    <div class="table-wrap"><table>
      <tr><th>Subset</th><th>Key features</th><th>Main role</th></tr>
      <tr><td><strong>cDC1</strong></td><td>XCR1, cross-presentation, IL-12</td><td>CD8 T-cell and Th1 priming</td></tr>
      <tr><td><strong>cDC2</strong></td><td>CD11b, MHC class II</td><td>CD4 T-cell priming, Th2 and Th17</td></tr>
      <tr><td><strong>pDC</strong></td><td>TLR7 and TLR9, type I interferon</td><td>Antiviral state</td></tr>
      <tr><td><strong>Langerhans cells</strong></td><td>Epidermis, CD1a</td><td>Skin immunity and tolerance</td></tr>
    </table></div>
    <p>Endogenous peptides are degraded by the proteasome, transported by <strong>TAP</strong> and loaded onto <strong>MHC class I</strong> for CD8 cells. Exogenous antigen is degraded in endosomes, invariant chain is removed and peptide loads onto <strong>MHC class II</strong> with help from <strong>HLA-DM</strong>. Cross-presentation diverts exogenous antigen to MHC class I, which is essential for immunity to viruses that do not infect DCs and to tumours. <strong>Costimulation</strong> through CD80/CD86-CD28 and <strong>CD40-CD40L</strong>, with IL-12, IL-6, TGF-β and IL-1, sets the T-helper programme.</p>
    <h4>Innate-adaptive crosstalk</h4>
    <p>DC-derived cytokines recruit and activate <strong>NK cells</strong>, innate lymphoid cells and γδ T cells, which in turn produce IFN-γ and GM-CSF that amplify DC maturation. This positive loop links early innate sensing to durable adaptive memory and explains why <strong>adjuvants</strong> that target DC pattern-recognition receptors are more potent than antigen alone.</p>
    <h4>Clinical exploitation</h4>
    <ul>
      <li><strong>DC vaccines</strong> load autologous DCs with tumour antigen to prime cytotoxic T cells; <em>sipuleucel-T</em> is an approved example.</li>
      <li><strong>Adjuvant design</strong> targets TLR4, TLR9 and STING to license DCs.</li>
      <li><strong>Langerhans cell histiocytosis</strong> reflects abnormal DC proliferation.</li>
      <li>Measles and dengue infect DCs through <strong>DC-SIGN</strong>, impairing early interferon responses.</li>
    </ul>
  `,
  tip: "Lead with the maturation switch: an immature DC tolerises, a licensed DC primes — everything else follows from that.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i14", domain: "immunology", star: true,
  q: "Describe how NK cells recognise targets and kill them. How do NK cells contribute to antiviral and antitumour defence, and what happens when they are deficient?",
  tags: ["nk cells", "missing self", "adcc", "kir"],
  keypoints: ["missing-self", "KIR", "NKG2A/CD94", "MHC class I", "NKG2D", "CD16", "licensing", "perforin and granzyme", "ADCC", "IL-12", "IL-15", "HLA-E", "GATA2", "familial haemophagocytic lymphohistiocytosis", "KIR-mismatched"],
  answer: `
    <h4>Recognition</h4>
    <p>NK cells are innate lymphocytes that kill without prior sensitisation. Their decision is governed by <strong>missing-self</strong> recognition: inhibitory receptors such as <strong>KIR</strong> and <strong>NKG2A/CD94</strong> bind <strong>MHC class I</strong>, and loss of HLA expression releases inhibition. Activating receptors — <strong>NKG2D</strong>, natural cytotoxicity receptors and <strong>CD16</strong> (FcγRIIIa) — engage stress ligands, viral glycoproteins and antibody-coated targets. <strong>Licensing</strong> during development ensures that NK cells with functional inhibitory receptors become fully responsive.</p>
    <h4>Effector mechanisms</h4>
    <ul>
      <li><strong>Perforin and granzyme</strong> induce target-cell apoptosis.</li>
      <li><strong>Fas ligand</strong> and <strong>TRAIL</strong> provide alternative death pathways.</li>
      <li><strong>ADCC</strong> through CD16 kills antibody-coated infected cells.</li>
      <li><strong>IFN-γ</strong> and TNF shape macrophage and DC responses.</li>
    </ul>
    <p>Cytokines <strong>IL-12</strong>, <strong>IL-15</strong> and IL-18 drive activation and proliferation; IL-15 also maintains memory-like NK cells.</p>
    <h4>Antiviral and antitumour roles</h4>
    <p>NK cells control herpesviruses (CMV, HSV, EBV), influenza and papillomavirus before adaptive immunity appears. Viruses evade NK surveillance by expressing <strong>HLA-E</strong> mimics such as CMV UL40, decoy ligands or inhibitory cytokines. In tumours, down-regulated MHC class I and stress ligands favour NK killing; checkpoint blockade and bispecific engagers that recruit CD16 exploit this. NK cells also regulate dendritic cells and shape subsequent T-cell priming, so their loss can blunt adaptive responses as well as innate killing. In chronic viral infection, sustained stimulation produces NK-cell exhaustion with reduced cytotoxicity and IFN-γ.</p>
    <h4>Clinical failure and therapy</h4>
    <p><strong>NK-cell deficiency</strong> causes severe HSV, CMV and papillomavirus disease; <em>GATA2</em> and <em>MCM4</em> mutations are examples. <strong>Familial haemophagocytic lymphohistiocytosis</strong> results from defective cytotoxic granule release. In <strong>haematopoietic stem-cell transplantation</strong>, <strong>KIR-mismatched</strong> donors may improve graft-versus-leukaemia effects, although the benefit depends on the transplant platform. Uterine NK cells are a specialised subset that remodels spiral arteries rather than killing trophoblast.</p>
  `,
  tip: "Explain missing-self first, then pair each receptor with one ligand; finish with the transplant and deficiency examples.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i15", domain: "immunology", star: true,
  q: "Compare the Fc receptors for IgG, IgE and IgA. How does Fc-receptor engagement shape antibody effector function, and what are the clinical applications of this biology?",
  tags: ["fc receptors", "adcc", "fcrn", "therapeutic antibodies"],
  keypoints: ["ITAM", "FcγRIIB", "ITIM", "FcγRI", "FcγRIIIa", "FcRn", "ADCC", "antibody-dependent cellular phagocytosis", "FcεRI", "IVIG", "FcRn inhibitors", "anti-D", "afucosylated"],
  answer: `
    <h4>Receptor families</h4>
    <div class="table-wrap"><table>
      <tr><th>Receptor</th><th>Ligand and cells</th><th>Function</th></tr>
      <tr><td><strong>FcγRI</strong> (CD64)</td><td>Monomeric IgG; macrophages, DCs</td><td>High-affinity uptake and activation</td></tr>
      <tr><td><strong>FcγRIIA</strong> (CD32a)</td><td>IgG immune complexes; myeloid cells</td><td>Activation through an ITAM</td></tr>
      <tr><td><strong>FcγRIIB</strong> (CD32b)</td><td>IgG; B cells and myeloid cells</td><td>Inhibition through an ITIM</td></tr>
      <tr><td><strong>FcγRIIIa</strong> (CD16a)</td><td>IgG; NK cells and macrophages</td><td>ADCC and cytokine release</td></tr>
      <tr><td><strong>FcRn</strong></td><td>IgG at acidic pH; endothelium, placenta</td><td>Recycling and transplacental transport</td></tr>
      <tr><td><strong>FcεRI</strong></td><td>IgE; mast cells and basophils</td><td>Degranulation and anaphylaxis</td></tr>
      <tr><td><strong>FcαRI</strong> (CD89)</td><td>IgA; myeloid cells</td><td>Phagocytosis and inflammatory amplification</td></tr>
    </table></div>
    <h4>Signalling and affinity</h4>
    <p>Activating receptors signal through <strong>ITAM</strong> motifs, recruiting Syk and MAPK; inhibitory <strong>FcγRIIB</strong> uses an <strong>ITIM</strong> that recruits SHIP-1 and dampens activation. <strong>FcγRI</strong> binds monomeric IgG with high affinity, whereas FcγRIIA and <strong>FcγRIIIa</strong> bind immune complexes with low affinity, so avidity and antibody density determine engagement. <strong>Fc glycosylation</strong> matters: <strong>afucosylated</strong> IgG binds FcγRIIIa more strongly and enhances ADCC. <strong>FcRn</strong> binds IgG at acidic pH, protects it from lysosomal degradation and transports it across the placenta and gut.</p>
    <h4>Effector consequences</h4>
    <p>Fc engagement produces <strong>ADCC</strong>, <strong>antibody-dependent cellular phagocytosis</strong>, mast-cell and basophil degranulation, cytokine release, immune-complex clearance and enhanced antigen presentation. The same interactions can drive pathology: <strong>FcεRI</strong> cross-linking causes anaphylaxis, and FcγR activation contributes to immune-complex vasculitis and to cytokine release by therapeutic antibodies.</p>
    <h4>Clinical applications</h4>
    <ul>
      <li>Therapeutic antibodies such as rituximab and trastuzumab depend partly on Fc-mediated effector function; Fc engineering can increase or silence it.</li>
      <li>High-dose <strong>IVIG</strong> saturates FcRn and inhibitory FcγRIIB, accelerating autoantibody clearance.</li>
      <li><strong>FcRn inhibitors</strong> lower pathogenic IgG in myasthenia gravis and other antibody-mediated diseases.</li>
      <li><strong>Anti-D</strong> immunoglobulin clears RhD-positive red cells through FcγR-mediated destruction.</li>
      <li>Blocking FcεRI or IgE is the basis of anti-IgE therapy in allergic asthma.</li>
    </ul>
  `,
  tip: "Draw the ITAM versus ITIM distinction early; it explains both protection and antibody-mediated pathology.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i16", domain: "immunology", star: true,
  q: "Explain the germinal-centre reaction. How do B cells undergo somatic hypermutation, class-switch recombination and affinity selection, and what happens when these processes fail?",
  tags: ["germinal centre", "affinity maturation", "aid", "class switching"],
  keypoints: ["T follicular helper cells", "CXCL13", "IL-21", "germinal centre", "centroblasts", "follicular dendritic cells", "centrocytes", "activation-induced cytidine deaminase", "somatic hypermutation", "class-switch recombination", "plasma cells", "memory B cells", "AID deficiency", "Burkitt lymphoma", "follicular lymphoma"],
  answer: `
    <h4>Initiation</h4>
    <p>After antigen encounter, B cells migrate to the follicle and interact with <strong>T follicular helper cells</strong> at the T-B border. <strong>CXCL13</strong> and <strong>IL-21</strong> drive formation of the <strong>germinal centre</strong>, a specialised structure with a dark zone of proliferating <strong>centroblasts</strong> and a light zone containing <strong>follicular dendritic cells</strong>, Tfh cells and <strong>centrocytes</strong>.</p>
    <h4>Mutation and selection</h4>
    <p><strong>Activation-induced cytidine deaminase (AID)</strong> deaminates cytosine to uracil in immunoglobulin genes. Error-prone repair generates <strong>somatic hypermutation</strong>, introducing point mutations into the variable region, while <strong>class-switch recombination</strong> recombines switch regions to change IgM and IgD to IgG, IgA or IgE. In the light zone, centrocytes capture antigen displayed on follicular dendritic cells and present it to Tfh cells; those with higher-affinity receptors receive survival signals and are selected, while low-affinity clones die by apoptosis. Selected cells become <strong>plasma cells</strong> or <strong>memory B cells</strong>. Follicular dendritic cells retain antigen-antibody complexes for months through complement receptors CD21 and CD35, so the selecting antigen persists long after the infection has cleared. This prolonged display is why germinal-centre responses continue to mature for weeks.</p>
    <h4>Failure syndromes</h4>
    <ul>
      <li><strong>AID deficiency</strong> causes autosomal recessive hyper-IgM syndrome with lymphadenopathy and impaired affinity maturation.</li>
      <li><strong>CD40L/CD40 deficiency</strong> blocks T-dependent class switching and germinal-centre formation.</li>
      <li><strong>UNG deficiency</strong> impairs processing of AID-generated lesions.</li>
      <li>HIV and ageing reduce Tfh function and vaccine responses.</li>
    </ul>
    <h4>Clinical corollaries</h4>
    <p>Affinity maturation explains why <strong>boosters</strong> improve antibody quality and why <strong>conjugate vaccines</strong> recruit Tfh help. Germinal-centre biology also underlies autoimmunity, when tolerance checkpoints fail, and lymphomagenesis: <strong>Burkitt lymphoma</strong> carries <em>MYC</em> translocations, <strong>follicular lymphoma</strong> carries <em>BCL2</em> translocations, and diffuse large B-cell lymphoma often derives from germinal-centre B cells. Rituximab and checkpoint inhibitors that target this niche have changed management.</p>
  `,
  tip: "Dark zone mutates, light zone selects — say that once and the whole essay organises itself.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i17", domain: "immunology",
  q: "Compare central, effector, tissue-resident and stem-cell-like memory T cells. How is immunological memory maintained, and how can it be harnessed or impaired?",
  tags: ["t-cell memory", "trm", "vaccines", "exhaustion"],
  keypoints: ["central memory", "effector memory", "tissue-resident memory", "IL-7", "IL-15", "CD69", "CD103", "heterologous protection", "T-cell exhaustion", "immunosenescence", "TRM", "CCR7"],
  answer: `
    <h4>Memory subsets</h4>
    <div class="table-wrap"><table>
      <tr><th>Subset</th><th>Phenotype and location</th><th>Function</th></tr>
      <tr><td><strong>Central memory</strong></td><td>CCR7-positive, CD62L-positive; lymph nodes</td><td>Proliferative reserve and repopulation</td></tr>
      <tr><td><strong>Effector memory</strong></td><td>CCR7-negative; blood and peripheral tissues</td><td>Rapid effector cytokine production</td></tr>
      <tr><td><strong>Tissue-resident memory</strong></td><td>CD69-positive, CD103-positive; epithelial barriers</td><td>Immediate local defence</td></tr>
      <tr><td><strong>Stem-cell-like memory</strong></td><td>CD45RA-positive, CCR7-positive, CD95-positive</td><td>Self-renewal and engraftment</td></tr>
    </table></div>
    <h4>Generation and maintenance</h4>
    <p>After contraction of the effector response, a small fraction survives as <strong>memory T cells</strong>. <strong>IL-7</strong> supports survival and <strong>IL-15</strong> drives homeostatic proliferation of memory CD8 cells. Epigenetic imprints keep effector genes poised for rapid re-expression, and <strong>TRM</strong> cells are retained by <strong>CD69</strong> and <strong>CD103</strong> binding E-cadherin. Some memory persists without antigen, but antigen can drive inflation, as with CMV.</p>
    <h4>Function at barriers</h4>
    <p><strong>Tissue-resident memory</strong> cells sit in skin, lung, gut and genital mucosa and respond within hours, before circulating cells arrive. They provide <strong>heterologous protection</strong> and are associated with control of HSV, influenza and SARS-CoV-2. <strong>Central memory</strong> cells replenish the effector pool, while <strong>effector memory</strong> cells patrol tissues and kill infected cells. Memory T cells are not a fixed pool. Repeated antigen exposure, adjuvants and inflammation alter the ratio of subsets, and tissue damage can leave an epigenetic scar that limits future responses. In older adults, memory inflation with CMV occupies much of the repertoire and crowds out naive cells. Measuring TRM in biopsies is technically difficult, so most human data come from blood, which underestimates barrier immunity.</p>
    <h4>Clinical implications</h4>
    <ul>
      <li>Vaccines that induce only systemic IgG may prevent disease but not colonisation; mucosal and TRM-inducing vaccines aim to block transmission.</li>
      <li>Memory is impaired by <strong>immunosenescence</strong>, HIV, malnutrition and calcineurin inhibitors.</li>
      <li>In transplantation, donor memory T cells can mediate rapid rejection.</li>
      <li>Persistent antigen drives <strong>T-cell exhaustion</strong>, with PD-1 and other inhibitory receptors.</li>
    </ul>
  `,
  tip: "Use the four-subset table as your spine, then add one vaccine and one transplantation consequence.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i18", domain: "immunology", star: true,
  q: "Describe regulatory T cells: their development, suppressive mechanisms and role in infection. How does Treg dysfunction cause disease, and how are Tregs manipulated therapeutically?",
  tags: ["tregs", "foxp3", "tolerance", "immunopathology"],
  keypoints: ["regulatory T cells", "FoxP3", "CD25", "thymic Tregs", "peripheral Tregs", "IL-10", "TGF-β", "IL-35", "CTLA-4", "CD39/CD73", "immunopathology", "IPEX syndrome", "anti-CD25", "low-dose IL-2"],
  answer: `
    <h4>Development and phenotype</h4>
    <p><strong>Regulatory T cells (Tregs)</strong> express the transcription factor <strong>FoxP3</strong>, high-affinity <strong>CD25</strong> (IL-2 receptor α) and CTLA-4. <strong>Thymic Tregs</strong> arise from self-reactive precursors under AIRE-dependent presentation; <strong>peripheral Tregs</strong> differentiate from naive CD4 cells in the presence of TGF-β and retinoic acid, especially in the gut. Helios and neuropilin-1 mark thymic origin but are not absolute.</p>
    <h4>Suppressive mechanisms</h4>
    <ul>
      <li><strong>IL-10</strong>, <strong>TGF-β</strong> and <strong>IL-35</strong> inhibit effector cells and antigen-presenting cell maturation.</li>
      <li><strong>CTLA-4</strong> strips CD80/CD86 from dendritic cells and blocks costimulation.</li>
      <li><strong>CD39/CD73</strong> generate adenosine, which suppresses T-cell function.</li>
      <li>High-affinity CD25 consumes IL-2, starving effector T cells.</li>
      <li>Tregs promote tissue repair through amphiregulin.</li>
    </ul>
    <h4>Role in infection</h4>
    <p>Tregs limit <strong>immunopathology</strong> during tuberculosis, hepatitis, malaria and helminth infection, but the same activity can permit persistence. The balance between Tregs and Th17 cells determines whether mucosal infection is controlled or becomes chronic. Depleting Tregs can improve pathogen clearance but risks severe inflammation. In chronic hepatitis B and C, Treg expansion is associated with viral persistence, while in acute infection an early regulatory response may limit liver injury. The therapeutic window is therefore narrow: too little regulation causes immunopathology, too much causes persistence. Tregs also promote tissue repair after inflammation through amphiregulin and IL-10, which is beneficial in the lung and gut but can favour fibrosis when sustained.</p>
    <h4>Disease and therapy</h4>
    <p><strong>IPEX syndrome</strong> is caused by <em>FOXP3</em> mutations and presents with enteropathy, endocrinopathy, dermatitis and autoimmunity. Treg defects also contribute to allergy and to failed tolerance after transplantation. Conversely, tumours recruit Tregs to suppress antitumour immunity, so <strong>anti-CD25</strong> and CTLA-4 blockade are used, at the cost of immune-related toxicity. <strong>Low-dose IL-2</strong> expands Tregs and is used in graft-versus-host disease and autoimmune disease; Treg cell therapy is in early trials.</p>
  `,
  tip: "Contrast the two faces of Tregs — they prevent collateral damage but can also protect the pathogen.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i19", domain: "immunology",
  q: "Explain immunosenescence and inflammaging. What changes occur in innate and adaptive immunity with age, and how should vaccination and infection management be adapted?",
  tags: ["immunosenescence", "inflammaging", "vaccines", "ageing"],
  keypoints: ["thymic involution", "T-cell receptor repertoire", "memory inflation", "immunosenescence", "inflammaging", "IL-6", "varicella-zoster virus", "tuberculosis", "adjuvanted", "recombinant zoster vaccine", "senescence-associated secretory phenotype", "frailty"],
  answer: `
    <h4>Adaptive changes</h4>
    <p><strong>Thymic involution</strong> begins early in life and reduces naive T-cell output, narrowing the <strong>T-cell receptor repertoire</strong>. Homeostatic proliferation fills the space with memory cells, many CMV-specific, producing <strong>memory inflation</strong> and reduced diversity. B lymphopoiesis falls, antibody affinity and class switching decline, and <strong>immunosenescence</strong> is accompanied by accumulation of exhausted, senescent T cells with shortened telomeres.</p>
    <h4>Innate changes and inflammaging</h4>
    <p>Neutrophil chemotaxis and respiratory burst are impaired; macrophages and dendritic cells show altered pattern-recognition signalling and reduced antigen presentation. Chronic low-grade inflammation — <strong>inflammaging</strong> — is driven by <strong>IL-6</strong>, TNF, C-reactive protein and the <strong>senescence-associated secretory phenotype</strong>, and contributes to <strong>frailty</strong>, cardiovascular disease and insulin resistance.</p>
    <h4>Clinical consequences</h4>
    <ul>
      <li>Increased severity of influenza, pneumococcal disease, COVID-19 and reactivation of <strong>varicella-zoster virus</strong>.</li>
      <li>Poorer seroconversion after vaccination and faster waning of antibody.</li>
      <li>Reactivation of latent <strong>tuberculosis</strong> and chronic viral infections.</li>
      <li>Higher risk of cancer and autoimmune disease from impaired surveillance and tolerance.</li>
    </ul>
    <h4>Adapting prevention</h4>
    <p>Older adults benefit from <strong>adjuvanted</strong> or higher-dose influenza vaccines, <strong>recombinant zoster vaccine</strong> and pneumococcal conjugate vaccination. Frailty, comorbidity and polypharmacy affect response, so vaccination should be offered before elective immunosuppression and combined with infection-control measures. Measuring functional antibody and T-cell responses, rather than chronological age, better predicts protection. High-dose and adjuvanted influenza vaccines overcome some of the defect, and recombinant zoster vaccine is preferred because it does not depend on replication. Vaccination should be completed before elective surgery or immunosuppression, and serology can guide booster decisions in the frailest patients. Infections should be treated early and with attention to drug interactions, since renal function and body composition change with age. Physical activity, nutrition and control of comorbidity modestly improve vaccine responses.</p>
  `,
  tip: "Separate the adaptive loss of diversity from the innate inflammatory gain — that contrast earns the marks.",
  sources: ["S1", "S3", "S11"]
},
{
  id: "i20", domain: "immunology", star: true,
  q: "Describe the immunological adaptations of the neonate. How do maternal antibody, innate immaturity and breastfeeding shape susceptibility, and what are the vaccine implications?",
  tags: ["neonatal immunity", "maternal antibody", "fcrn", "vaccination"],
  keypoints: ["maternal IgG", "neonatal Fc receptor", "IgM does not cross the placenta", "secretory IgA", "complement", "Th2", "group B streptococcus", "Listeria monocytogenes", "BCG", "Tdap", "MMR", "SCID"],
  answer: `
    <h4>Passive maternal protection</h4>
    <p>During the third trimester, <strong>maternal IgG</strong> crosses the placenta by <strong>neonatal Fc receptor (FcRn)</strong>-mediated transport, giving the infant protective antibody for the first months; <strong>IgM does not cross the placenta</strong>. Preterm infants miss much of this transfer and are especially vulnerable. Breast milk supplies <strong>secretory IgA</strong>, lactoferrin, oligosaccharides and maternal leucocytes that shape the gut microbiome.</p>
    <h4>Immature innate and adaptive immunity</h4>
    <p>Neonatal neutrophils show reduced chemotaxis and respiratory burst; <strong>complement</strong> activity is low; dendritic cells are fewer and less mature. T cells are biased toward <strong>Th2</strong> and regulatory responses, with reduced IFN-γ and impaired memory formation. The result is susceptibility to <strong>group B streptococcus</strong>, <em>Escherichia coli</em> K1, <strong>Listeria monocytogenes</strong>, HSV and RSV, while many viral infections are mild because of maternal antibody.</p>
    <h4>Vaccination</h4>
    <ul>
      <li><strong>BCG</strong> and hepatitis B vaccine are given at birth in many programmes.</li>
      <li>Maternal <strong>Tdap</strong> and influenza vaccination protect the infant before immunisation begins.</li>
      <li>Live vaccines are deferred until 12 months because of persisting maternal antibody and immature immunity; <strong>MMR</strong> is not given earlier unless travel or an outbreak dictates.</li>
      <li>Live vaccines are contraindicated in suspected <strong>SCID</strong> until screening excludes it.</li>
      <li>Preterm infants should be vaccinated according to chronological age, not birth weight.</li>
    </ul>
    <h4>Clinical corollaries</h4>
    <p>Neonatal sepsis requires prompt empirical antibiotics covering group B streptococcus and Gram-negative bacilli; intrapartum prophylaxis is a key preventive measure. Temperature control, feeding and jaundice surveillance matter because neonatal reserve is limited. Early-onset sepsis presents in the first days and reflects vertical transmission, whereas late-onset disease after the first week often reflects nosocomial or community acquisition. Because signs are non-specific, a low threshold for cultures and empirical therapy is essential. Human milk oligosaccharides also act as soluble decoys for pathogens, adding to the protection from secretory IgA.</p>
  `,
  tip: "Maternal IgG protects and also blunts live vaccines — that single tension structures the answer.",
  sources: ["S1", "S3", "S10"]
},
{
  id: "i21", domain: "immunology", star: true,
  q: "How should vaccination be approached in the immunocompromised patient? Discuss live-vaccine risk, prediction of response, timing around immunosuppression and passive immunisation.",
  tags: ["vaccination", "immunocompromised", "live vaccines", "passive immunity"],
  keypoints: ["live attenuated vaccines", "SCID", "inactivated", "haematopoietic stem-cell transplant", "IVIG", "cocooning", "passive immunisation", "palivizumab", "rituximab", "anti-TNF"],
  answer: `
    <h4>Principles</h4>
    <p>Vaccine responses depend on residual immune function. <strong>Live attenuated vaccines</strong> can replicate unchecked and are contraindicated in <strong>SCID</strong>, high-dose corticosteroid therapy, chemotherapy, transplantation and advanced HIV with low CD4 counts. <strong>Inactivated</strong>, subunit, toxoid and conjugate vaccines are safe but often less immunogenic, so higher doses, extra boosts and adjuvants may be needed.</p>
    <h4>Timing around immunosuppression</h4>
    <ul>
      <li>Give live vaccines at least four weeks before planned immunosuppression; give inactivated vaccines at least two weeks before.</li>
      <li>Avoid live vaccines during high-dose steroids, chemotherapy or the early period after transplantation.</li>
      <li>After <strong>haematopoietic stem-cell transplant</strong>, re-immunise according to a schedule beginning months after engraftment.</li>
      <li><strong>IVIG</strong> and hyperimmune globulin can neutralise live vaccine virus; defer MMR and varicella vaccine for the recommended interval.</li>
      <li>Household contacts should be vaccinated to provide <strong>cocooning</strong>, and live vaccine recipients should observe hygiene precautions.</li>
    </ul>
    <h4>Assessment and passive immunisation</h4>
    <p>Check specific antibody titres, such as anti-HBs, tetanus and pneumococcal antibody, and T-cell function where relevant. <strong>Passive immunisation</strong> with immunoglobulin, hyperimmune globulin or monoclonal antibodies — such as <strong>palivizumab</strong> for RSV — provides immediate but temporary protection. Antimicrobial prophylaxis and early treatment complement vaccination. Response should be checked with post-vaccination serology where a correlate exists, and booster doses given when titres fall. T-cell-dependent vaccines may fail despite normal antibody, so functional assays are sometimes needed. Patients on high-dose steroids may respond better if the dose is reduced before vaccination, but this decision must be balanced against disease control.</p>
    <h4>Practical points</h4>
    <p>Vaccinate before starting <strong>rituximab</strong>, <strong>anti-TNF</strong> therapy or chemotherapy whenever possible; document vaccines, serology and revaccination plans. Counsel patients that vaccination reduces but does not eliminate risk, and that fever after vaccination must be distinguished from infection.</p>
  `,
  tip: "Organise by live versus inactivated, then by before, during and after immunosuppression.",
  sources: ["S1", "S9", "S10"]
},
{
  id: "i22", domain: "immunology",
  q: "Explain how infection can trigger autoimmunity. Compare molecular mimicry, bystander activation, epitope spreading and cryptic antigen presentation, using named examples.",
  tags: ["autoimmunity", "molecular mimicry", "infection", "tolerance"],
  keypoints: ["molecular mimicry", "bystander activation", "epitope spreading", "cryptic antigen presentation", "rheumatic fever", "Guillain-Barré syndrome", "Campylobacter jejuni", "HLA", "regulatory T cells", "plasmapheresis"],
  answer: `
    <h4>Mechanisms</h4>
    <p>Infection can break tolerance by several routes. <strong>Molecular mimicry</strong> occurs when microbial epitopes resemble self-antigens, so antibodies and T cells cross-react. <strong>Bystander activation</strong> describes non-specific activation of autoreactive cells by inflammatory cytokines and danger signals. <strong>Epitope spreading</strong> extends the response from the pathogen to released self-antigens, and <strong>cryptic antigen presentation</strong> exposes determinants normally hidden from the immune system. Polyclonal activation and superantigens can also trigger autoreactive clones.</p>
    <h4>Named examples</h4>
    <div class="table-wrap"><table>
      <tr><th>Mechanism</th><th>Example</th></tr>
      <tr><td>Molecular mimicry</td><td><strong>Rheumatic fever</strong>: streptococcal M protein cross-reacts with cardiac myosin; <strong>Guillain-Barré syndrome</strong> after <em>Campylobacter jejuni</em>, where lipo-oligosaccharide mimics gangliosides</td></tr>
      <tr><td>Bystander activation</td><td>Viral inflammation triggering diabetes or thyroid autoimmunity in genetically susceptible hosts</td></tr>
      <tr><td>Epitope spreading</td><td>Chronic hepatitis C and Sjögren-like autoimmunity</td></tr>
      <tr><td>Immune-complex deposition</td><td>Post-streptococcal glomerulonephritis; hepatitis B-associated vasculitis</td></tr>
    </table></div>
    <h4>Host factors</h4>
    <p><strong>HLA</strong> alleles, sex, defective <strong>regulatory T cells</strong> and persistence of antigen determine whether infection leads to autoimmunity. Most infections do not cause autoimmunity, so exposure is necessary but not sufficient. A useful clinical rule is that infection-associated autoimmunity usually appears weeks after the infection, whereas active infection causes fever, leucocytosis and positive cultures. Temporal sequence, organism-specific serology and the autoantibody profile together support the diagnosis. In rheumatic fever, penicillin prophylaxis prevents recurrent streptococcal infection and further valve damage, illustrating that removing the trigger can halt the autoimmune process. Some triggers are better described as immune-complex disease than as true autoimmunity, and the distinction changes therapy.</p>
    <h4>Clinical implications</h4>
    <p>Treatment targets the infection when it persists and the autoimmune response when it is established; <strong>plasmapheresis</strong> and IVIG are used in antibody-mediated syndromes such as Guillain-Barré. Distinguishing infection-triggered autoimmunity from active infection is critical before starting immunosuppression.</p>
  `,
  tip: "Name one mechanism, one organism and one self-antigen per row — precision is what separates a good answer.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i23", domain: "immunology", star: true,
  q: "Explain the infection risks associated with biologic and targeted immunosuppressive therapy, and outline a pre-treatment screening and prevention strategy.",
  tags: ["biologics", "immunosuppression", "screening", "reactivation"],
  keypoints: ["anti-TNF", "latent tuberculosis", "rituximab", "hypogammaglobulinaemia", "hepatitis B reactivation", "JAK inhibitors", "herpes zoster", "checkpoint inhibitors", "CAR-T", "IGRA", "Strongyloides", "TB preventive therapy"],
  answer: `
    <h4>Why biologics increase risk</h4>
    <p>Biologics block specific cytokines, receptors or cells, so infection risk reflects the pathway targeted and the underlying disease. <strong>Anti-TNF</strong> agents impair granuloma formation and reactivate <strong>latent tuberculosis</strong>. <strong>Rituximab</strong> depletes B cells, causing <strong>hypogammaglobulinaemia</strong> and <strong>hepatitis B reactivation</strong>. Corticosteroids suppress phagocyte and T-cell function. <strong>JAK inhibitors</strong> increase <strong>herpes zoster</strong> and tuberculosis risk. <strong>Checkpoint inhibitors</strong> cause immune-related toxicity and can unmask latent infection. <strong>CAR-T</strong> therapy causes cytokine release syndrome and prolonged cytopenias.</p>
    <h4>Pre-treatment screening</h4>
    <ul>
      <li><strong>Latent tuberculosis</strong>: <strong>IGRA</strong> or tuberculin skin test plus chest radiograph.</li>
      <li>Hepatitis B (HBsAg, anti-HBc, anti-HBs), hepatitis C and HIV serology.</li>
      <li>Varicella-zoster IgG and vaccination status.</li>
      <li><strong>Strongyloides</strong> serology in endemic areas before steroids.</li>
      <li>Pregnancy, renal and liver function, and baseline immunoglobulin levels.</li>
    </ul>
    <h4>Prevention</h4>
    <p>Give indicated inactivated vaccines before treatment and avoid live vaccines during immunosuppression. Use <strong>TB preventive therapy</strong> for latent infection, antiviral prophylaxis for hepatitis B when indicated, and immunoglobulin replacement for symptomatic hypogammaglobulinaemia. Screen for infection before each cycle and educate patients to report fever early. Corticosteroid risk is dose- and duration-dependent, and alternate-day regimens may reduce suppression but are not risk-free. Patients already on a biologic who develop fever need cultures and imaging before the next dose, not simply dose escalation. Quantitative immunoglobulins should be checked before and during B-cell depletion, because recurrent sinopulmonary infection may reflect acquired hypogammaglobulinaemia rather than the underlying disease. Vaccinating household contacts reduces exposure and is particularly important for patients who cannot mount protective responses themselves.</p>
    <h4>Balance</h4>
    <p>Risk is reduced, not eliminated, by screening. The decision to start a biologic should weigh disease severity against infection risk, and therapy should be paused or modified during serious infection.</p>
  `,
  tip: "Match each drug class to its characteristic reactivation, then give the screen that prevents it.",
  sources: ["S4", "S9", "S10"]
},
{
  id: "i24", domain: "immunology", star: true,
  q: "Describe the immunological basis of allograft rejection. Distinguish the patterns of rejection, explain graft-versus-host disease, and discuss how immunosuppression and infection interact.",
  tags: ["transplantation", "rejection", "gvhd", "hla"],
  keypoints: ["HLA", "direct allorecognition", "indirect allorecognition", "hyperacute", "acute cellular", "acute antibody-mediated", "chronic", "graft-versus-host disease", "CMV", "EBV", "BK virus", "Pneumocystis", "net state of immunosuppression"],
  answer: `
    <h4>Allorecognition</h4>
    <p>Rejection is directed mainly at <strong>HLA</strong> molecules, with minor histocompatibility antigens and ABO blood-group antigens also important. <strong>Direct allorecognition</strong> occurs when recipient T cells recognise intact donor HLA on donor antigen-presenting cells; <strong>indirect allorecognition</strong> involves recipient antigen-presenting cells presenting donor peptides. Both drive T-cell activation, costimulation and cytokine production.</p>
    <p>Pre-transplant assessment includes ABO compatibility, HLA typing and a crossmatch to detect preformed antibody. Complement-dependent cytotoxicity and flow cytometric crossmatches increase sensitivity, and virtual crossmatching against unacceptable antigens reduces waiting-list risk. Induction therapy with basiliximab or antithymocyte globulin, followed by maintenance with a calcineurin inhibitor, mycophenolate and corticosteroids, is standard in many programmes. Chronic rejection remains the main barrier to long-term graft survival, and no therapy reliably reverses established transplant vasculopathy. Vaccination before transplant and re-vaccination afterwards reduce preventable infection.</p>
    <h4>Patterns of rejection</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Timing and mechanism</th></tr>
      <tr><td><strong>Hyperacute</strong></td><td>Minutes to hours; preformed donor-specific antibody activates complement and thromboses the graft</td></tr>
      <tr><td><strong>Acute cellular</strong></td><td>Days to weeks; T-cell infiltration with tubulitis or endothelialitis</td></tr>
      <tr><td><strong>Acute antibody-mediated</strong></td><td>Weeks to months; donor-specific antibody, complement deposition (C4d) and capillary injury</td></tr>
      <tr><td><strong>Chronic</strong></td><td>Months to years; fibrosis, transplant vasculopathy and graft loss</td></tr>
    </table></div>
    <h4>Graft-versus-host disease</h4>
    <p>In haematopoietic stem-cell transplantation, donor T cells recognise host HLA and attack skin, gut and liver, causing <strong>graft-versus-host disease</strong>; the chronic form resembles autoimmunity. Prophylaxis uses calcineurin inhibitors, methotrexate or mycophenolate, and T-cell depletion.</p>
    <h4>Infection and immunosuppression</h4>
    <p><strong>CMV</strong>, <strong>EBV</strong>-driven post-transplant lymphoproliferative disease, <strong>BK virus</strong> nephropathy and <strong>Pneumocystis</strong> pneumonia are classic opportunistic infections. The <strong>net state of immunosuppression</strong> reflects drug intensity, graft function, neutropenia and co-infections. Prevention combines prophylaxis, pre-emptive monitoring, vaccination and reduction of immunosuppression when possible.</p>
  `,
  tip: "Use time as your organising axis for rejection, then finish with the infection cost of control.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "i25", domain: "immunology",
  q: "Explain the immunological paradox of pregnancy. How does the maternal-fetal interface tolerate the semi-allogeneic fetus while defending against infection?",
  tags: ["maternal-fetal", "hla-g", "tolerance", "torch"],
  keypoints: ["HLA-G", "decidual NK cells", "regulatory T cells", "indoleamine 2,3-dioxygenase", "PD-L1", "Th2", "FcRn", "TORCH", "Listeria monocytogenes", "group B streptococcus", "preterm labour", "RhD immunoglobulin"],
  answer: `
    <h4>The immunological paradox</h4>
    <p>The fetus is semi-allogeneic, yet is not rejected. <strong>Trophoblast</strong> cells avoid classical HLA-A and HLA-B expression and instead display HLA-C, HLA-E and <strong>HLA-G</strong>, which engage maternal <strong>decidual NK cells</strong> and inhibit cytotoxic responses. <strong>Regulatory T cells</strong>, M2 macrophages and <strong>indoleamine 2,3-dioxygenase</strong> deplete tryptophan and suppress T-cell activation. <strong>PD-L1</strong>, TGF-β, IL-10 and progesterone reinforce local tolerance.</p>
    <h4>Maternal adaptation</h4>
    <p>Pregnancy shifts cytokines toward <strong>Th2</strong> and regulatory profiles, expands Tregs and alters B-cell responses. The placenta is a selective barrier, but maternal IgG crosses via <strong>FcRn</strong> to protect the neonate. The chorioamnion and cervical mucus provide innate barriers, and the vaginal microbiome influences risk. The decidua contains a distinctive mix of NK cells, macrophages and Tregs, and their proportions change across gestation. Shallow trophoblast invasion and defective spiral-artery remodelling are linked to pre-eclampsia and fetal growth restriction, showing that immune tolerance and vascular adaptation are coupled. Antiphospholipid antibodies can cause placental thrombosis and recurrent loss, a reminder that humoral immunity can also damage the interface. Congenital infection is often asymptomatic at birth, so screening and follow-up matter.</p>
    <h4>Infection at the interface</h4>
    <ul>
      <li><strong>TORCH</strong> pathogens — <em>Toxoplasma</em>, rubella, CMV, HSV and syphilis — can cross the placenta and cause congenital disease.</li>
      <li><strong>Listeria monocytogenes</strong> and Zika virus target the placenta; malaria accumulates in the intervillous space.</li>
      <li><strong>Group B streptococcus</strong> colonisation causes neonatal sepsis and meningitis.</li>
      <li>Infection-driven inflammation can trigger <strong>preterm labour</strong> and pre-eclampsia.</li>
    </ul>
    <h4>Clinical corollaries</h4>
    <p>Vaccination in pregnancy protects mother and infant; <strong>RhD immunoglobulin</strong> prevents alloimmunisation; and infections must be treated promptly because maternal inflammation harms the fetus. Immune tolerance is therefore a compromise between defence and acceptance.</p>
  `,
  tip: "Frame tolerance as an active, local decision at the interface, not as general immunosuppression.",
  sources: ["S1", "S3", "S4"]
},
{
  id: "i26", domain: "immunology",
  q: "Define trained immunity. How does innate immune memory differ from adaptive memory, what mechanisms underlie it, and what are the clinical implications?",
  tags: ["trained immunity", "innate memory", "bcg", "epigenetics"],
  keypoints: ["trained immunity", "non-specific", "heterologous", "epigenetic reprogramming", "H3K4me3", "H3K27ac", "glycolysis", "mevalonate pathway", "BCG", "trained tolerance", "bone-marrow progenitors"],
  answer: `
    <h4>Definition</h4>
    <p><strong>Trained immunity</strong> is a form of innate immune memory in which monocytes, macrophages or NK cells respond more vigorously to a second challenge after an initial stimulus. It is <strong>non-specific</strong> and <strong>heterologous</strong>, unlike adaptive memory, which is antigen-specific and mediated by T and B cells.</p>
    <h4>Mechanisms</h4>
    <p>Training involves <strong>epigenetic reprogramming</strong> — histone marks such as <strong>H3K4me3</strong> and <strong>H3K27ac</strong> at promoters of inflammatory genes — and a shift in cellular metabolism toward <strong>glycolysis</strong>, the pentose phosphate pathway and the <strong>mevalonate pathway</strong>. <strong>BCG</strong>, β-glucan and certain vaccines can induce these changes; the opposite, <strong>trained tolerance</strong>, follows repeated lipopolysaccharide exposure and is mediated by repressive histone modifications.</p>
    <h4>Evidence and scope</h4>
    <p>Epidemiological studies suggest that BCG reduces all-cause childhood mortality beyond tuberculosis, and that measles vaccine has non-specific benefits. Controlled human studies show enhanced cytokine responses after BCG. Training is greatest in monocytes and their <strong>bone-marrow progenitors</strong> and wanes over months, although NK cells can also acquire memory-like features. The concept remains debated because much human evidence is observational and confounded by healthy-vaccinee effects. Mechanistic studies in monocytes are stronger than population data, and the duration of protection is probably months rather than years. Training can be induced experimentally by β-glucan and by BCG, and blocked by mTOR or glycolysis inhibition, which supports the metabolic mechanism. Its clinical promise is greatest for infections where adaptive immunity is slow to develop.</p>
    <h4>Clinical implications</h4>
    <ul>
      <li><strong>BCG immunotherapy</strong> for bladder cancer exploits local innate and adaptive activation.</li>
      <li>Training may explain some heterologous vaccine effects and could be harnessed against emerging infections.</li>
      <li>It may worsen inflammatory disease, so timing and context matter.</li>
      <li>In sepsis, the balance between training and tolerance influences secondary infection risk.</li>
    </ul>
  `,
  tip: "Contrast trained immunity with tolerance — the same innate cell can be primed or paralysed.",
  sources: ["S1", "S3", "S13"]
},
{
  id: "i27", domain: "immunology", star: true,
  q: "Explain antibody-dependent enhancement of infection. What is the mechanism, which diseases illustrate it, and what are the implications for vaccines and antibody therapy?",
  tags: ["ade", "dengue", "fc receptors", "vaccines"],
  keypoints: ["antibody-dependent enhancement", "sub-neutralising antibodies", "Fcγ receptors", "FcγR-mediated uptake", "secondary heterologous infection", "severe dengue", "serostatus", "RSV", "Zika", "Fc silencing"],
  answer: `
    <h4>Mechanism</h4>
    <p><strong>Antibody-dependent enhancement (ADE)</strong> occurs when <strong>sub-neutralising antibodies</strong> bind a pathogen but fail to neutralise it. The Fc portion engages <strong>Fcγ receptors</strong> on monocytes, macrophages and dendritic cells, promoting <strong>FcγR-mediated uptake</strong> and productive infection of cells that would otherwise be poorly permissive. Enhanced viral replication, immune-complex formation and cytokine release increase vascular permeability and disease severity. The balance between neutralisation and enhancement depends on antibody titre, affinity, epitope specificity and Fc glycosylation. Low titres that fail to neutralise but still bind are the most dangerous, which is why post-vaccination antibody kinetics matter. Convalescent plasma and monoclonal antibodies can, in principle, enhance infection if suboptimal, so dosing and Fc design are critical. Population seroprevalence therefore determines the risk-benefit of a dengue vaccine.</p>
    <h4>Dengue as the paradigm</h4>
    <p>Dengue has four serotypes. After a first infection, cross-reactive antibody from that serotype can bind a second serotype without neutralising it, so <strong>secondary heterologous infection</strong> is associated with <strong>severe dengue</strong>. The risk is highest when antibody titres are in the enhancing range and declines over time. This is why dengue vaccination must consider prior <strong>serostatus</strong> and why mass vaccination of completely naive populations is problematic.</p>
    <h4>Other examples and caveats</h4>
    <ul>
      <li>Formalin-inactivated <strong>RSV</strong> vaccine historically caused enhanced respiratory disease in infants, through immune-complex and Th2 mechanisms rather than classical ADE.</li>
      <li>Cross-reactive antibodies in <strong>Zika</strong> and other flaviviruses can enhance dengue in vitro.</li>
      <li>ADE is documented for some coronaviruses and feline infectious peritonitis virus.</li>
      <li>Not every cross-reactive antibody is harmful; high neutralising titres protect.</li>
    </ul>
    <h4>Implications</h4>
    <p>Vaccines and antibody therapeutics must avoid inducing sub-neutralising titres. Strategies include structure-based antigen design, <strong>Fc silencing</strong> and selecting epitopes that elicit broadly neutralising antibodies. Post-licensure surveillance for enhanced disease is essential.</p>
  `,
  tip: "Say 'sub-neutralising' explicitly — that single word distinguishes ADE from ordinary neutralisation.",
  sources: ["S5", "S4", "S1"]
},
{
  id: "i28", domain: "immunology",
  q: "Describe the immune mechanisms that protect against fungal infection. Why do neutropenia, Th17 defects and corticosteroids predispose to different mycoses?",
  tags: ["antifungal immunity", "th17", "neutropenia", "mycoses"],
  keypoints: ["Dectin-1", "CARD9", "neutrophil extracellular traps", "Th1", "IFN-γ", "Th17", "IL-17", "chronic mucocutaneous candidiasis", "neutropenia", "galactomannan", "β-D-glucan"],
  answer: `
    <h4>Innate defence</h4>
    <p>Fungal conidia are cleared by epithelial barriers, mucus and <strong>neutrophils</strong>. <strong>Dectin-1</strong> recognises β-glucan and signals through <strong>CARD9</strong>; mannose receptor, TLR2 and TLR4 contribute. Neutrophils phagocytose and kill hyphae, release <strong>neutrophil extracellular traps</strong> and produce reactive oxygen species. Complement opsonises fungi, and NK cells and innate lymphoid cells provide IFN-γ.</p>
    <h4>Adaptive defence</h4>
    <p><strong>Th1</strong> cells and <strong>IFN-γ</strong> activate macrophages to kill <em>Histoplasma</em>, <em>Blastomyces</em> and <em>Cryptococcus</em>. <strong>Th17</strong> cells and <strong>IL-17</strong> recruit neutrophils and induce antimicrobial peptides at mucosa, which is essential for <em>Candida</em>. Th2 responses and Tregs can suppress protection. Antibody plays a limited but real role in opsonisation. Mucosal surfaces use a different logic from the lung and blood: IL-17 and IL-22 strengthen epithelial tight junctions and induce β-defensins and calprotectin, so Th17 failure produces superficial but persistent candidiasis rather than invasive disease.</p>
    <h4>Why defects cause specific mycoses</h4>
    <div class="table-wrap"><table>
      <tr><th>Defect</th><th>Typical infection</th></tr>
      <tr><td><strong>Neutropenia</strong></td><td><em>Aspergillus</em>, <em>Candida</em>, Mucorales</td></tr>
      <tr><td>Th17/IL-17 defect</td><td><strong>Chronic mucocutaneous candidiasis</strong> (STAT1 gain-of-function, APECED, CARD9)</td></tr>
      <tr><td>Corticosteroids</td><td><em>Aspergillus</em>, <em>Pneumocystis</em></td></tr>
      <tr><td>HIV with low CD4</td><td><em>Cryptococcus</em>, <em>Histoplasma</em>, <em>Talaromyces marneffei</em></td></tr>
      <tr><td>Transplant</td><td>Aspergillosis, mucormycosis, candidiasis</td></tr>
    </table></div>
    <p>Invasive aspergillosis reflects both neutropenia and corticosteroid-induced impairment of macrophage killing; recovery of the neutrophil count is the strongest predictor of survival. Cryptococcosis in AIDS reflects failed T-cell and macrophage control, and immune reconstitution after antiretroviral therapy can unmask or worsen it. Chronic granulomatous disease illustrates the same principle, with catalase-positive fungi and bacteria causing abscesses and granulomas.</p>
    <h4>Clinical implications</h4>
    <p>Diagnosis relies on <strong>galactomannan</strong>, <strong>β-D-glucan</strong>, antigen tests and culture. Prophylaxis is targeted to neutropenic and transplant patients, and recovery of neutrophils and T cells is as important as antifungal drugs.</p>
  `,
  tip: "Link each immune defect to the anatomical site it protects: neutrophils to lung and blood, Th17 to mucosa.",
  sources: ["S18", "S1", "S4"]
},
{
  id: "i29", domain: "immunology",
  q: "Explain the type 2 immune response to helminths. How do IgE, mast cells, eosinophils and alternatively activated macrophages act, and how do helminths evade this response?",
  tags: ["helminths", "ige", "eosinophils", "th2"],
  keypoints: ["IL-25", "IL-33", "TSLP", "innate lymphoid cells type 2", "Th2", "IL-4", "IL-5", "IL-13", "FcεRI", "major basic protein", "alternatively activated macrophages", "weep and sweep", "regulatory T cells", "Strongyloides stercoralis"],
  answer: `
    <h4>Initiation of type 2 immunity</h4>
    <p>Helminth products damage epithelium and trigger <strong>IL-25</strong>, <strong>IL-33</strong> and <strong>TSLP</strong>, which activate <strong>innate lymphoid cells type 2</strong> and dendritic cells. These drive <strong>Th2</strong> differentiation through IL-4 and GATA3, producing <strong>IL-4</strong>, <strong>IL-5</strong> and <strong>IL-13</strong>.</p>
    <h4>Effector mechanisms</h4>
    <ul>
      <li><strong>IgE</strong> binds <strong>FcεRI</strong> on mast cells and basophils; antigen cross-linking causes degranulation, histamine release and smooth-muscle contraction.</li>
      <li><strong>Eosinophils</strong> release <strong>major basic protein</strong> and eosinophil cationic protein, damaging larvae.</li>
      <li><strong>Alternatively activated macrophages</strong> express arginase and RELMα and promote repair.</li>
      <li>Goblet-cell hyperplasia and increased mucus, with epithelial shedding, produce the <strong>weep and sweep</strong> response.</li>
      <li>IL-13 drives fibrosis and granuloma formation around schistosome eggs.</li>
    </ul>
    <h4>Evasion and regulation</h4>
    <p>Helminths are large and often extracellular, so they resist phagocytosis. They disguise themselves with host molecules, change surface antigens, secrete protease inhibitors and induce <strong>regulatory T cells</strong> and IL-10, dampening protective immunity. Chronic infection therefore persists despite high IgE and eosinophilia. The type 2 response is also self-limiting: IL-10, Tregs and regulatory macrophages prevent the eosinophilia and IgE from causing uncontrolled tissue damage. In heavy infection, this regulation can tip toward tolerance and reduce worm expulsion.</p>
    <h4>Diagnosis and treatment</h4>
    <p>Diagnosis depends on stool microscopy, serology and eosinophil count, and treatment uses albendazole, mebendazole or ivermectin depending on the species. In pregnancy, benzimidazoles are avoided in the first trimester, and in <em>Loa loa</em> infection ivermectin requires caution because of encephalopathy risk.</p>
    <h4>Clinical relevance</h4>
    <p>Eosinophilia is a clue to helminth infection but is non-specific. <strong>Strongyloides stercoralis</strong> can cause fatal hyperinfection when corticosteroids suppress Th2 immunity, so screening before steroids is essential in endemic areas. Schistosome eggs cause granulomatous inflammation and fibrosis, and helminth-induced Tregs may reduce vaccine responses.</p>
  `,
  tip: "Describe the barrier first, then the IgE-mast cell and eosinophil amplifiers, then the evasion.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "i30", domain: "immunology",
  q: "Describe neutrophil recruitment, killing mechanisms and NET formation. How do neutrophils damage the host, and which inherited or acquired defects matter clinically?",
  tags: ["neutrophils", "nets", "neutropenia", "cgd"],
  keypoints: ["selectins", "integrins", "CXCL8", "C5a", "NADPH oxidase", "neutrophil extracellular traps", "PAD4", "sepsis", "SLE", "chronic granulomatous disease", "leukocyte adhesion deficiency", "Chédiak-Higashi"],
  answer: `
    <h4>Recruitment</h4>
    <p>Neutrophils roll on <strong>selectins</strong>, adhere through <strong>integrins</strong> such as LFA-1 and Mac-1, and migrate toward <strong>CXCL8</strong>, <strong>C5a</strong> and leukotriene B4. At the tissue they phagocytose opsonised organisms and activate the <strong>NADPH oxidase</strong> to produce reactive oxygen species; granule proteases and antimicrobial peptides complete killing.</p>
    <h4>NETs</h4>
    <p><strong>Neutrophil extracellular traps</strong> are webs of decondensed chromatin decorated with histones, myeloperoxidase and elastase. <strong>PAD4</strong>-mediated histone citrullination is required for NET formation. NETs immobilise and kill microbes, but they also damage endothelium, promote thrombosis and expose autoantigens. NET formation can be suicidal or vital, and the released chromatin is rapidly degraded by DNase I; failure of clearance contributes to persistent inflammation. Neutrophils also release cytokines and extracellular vesicles that recruit monocytes and shape the subsequent adaptive response. In sepsis, neutrophil dysfunction and immature granulocytes coexist with excessive NET release, so the same cell can be both insufficient and injurious.</p>
    <h4>When neutrophils harm the host</h4>
    <ul>
      <li>In <strong>sepsis</strong>, excessive NETs contribute to microvascular obstruction and organ injury.</li>
      <li>In <strong>SLE</strong> and small-vessel vasculitis, NETs provide autoantigens and activate complement.</li>
      <li>In cystic fibrosis, neutrophil proteases destroy lung tissue.</li>
      <li>In acute respiratory distress syndrome, neutrophil influx and oxidant injury worsen alveolar damage.</li>
    </ul>
    <h4>Defects and clinical correlations</h4>
    <div class="table-wrap"><table>
      <tr><th>Disorder</th><th>Mechanism and infection pattern</th></tr>
      <tr><td><strong>Neutropenia</strong></td><td>Chemotherapy or marrow failure; Gram-negative sepsis and invasive aspergillosis</td></tr>
      <tr><td><strong>Chronic granulomatous disease</strong></td><td>NADPH oxidase defect; catalase-positive organisms such as <em>S. aureus</em>, <em>Serratia</em>, <em>Burkholderia</em> and <em>Aspergillus</em></td></tr>
      <tr><td><strong>Leukocyte adhesion deficiency</strong></td><td>CD18 integrin defect; delayed separation of the umbilical cord and recurrent bacterial infection without pus</td></tr>
      <tr><td><strong>Chédiak-Higashi</strong></td><td>Defective granule fission; partial albinism and recurrent infection</td></tr>
    </table></div>
    <p>Management includes prompt antibiotics, granulocyte colony-stimulating factor in selected neutropenia, and haematopoietic stem-cell transplantation for severe inherited defects.</p>
  `,
  tip: "Balance the killing story with the collateral-damage story — that is what makes NETs examinable.",
  sources: ["S4", "S20", "S1"]
}
);
