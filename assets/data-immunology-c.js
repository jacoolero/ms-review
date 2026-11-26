/* Immunology of infection — advanced and Philippine-context essays, part C (i31–i40). */
window.QBANK.push(
{
  id: "i31", domain: "immunology", star: true,
  q: "Explain the immunological basis of the Philippine Expanded Program on Immunization. How do vaccine timing, cold-chain integrity and programme coverage translate into population immunity?",
  tags: ["EPI", "Philippines", "vaccination", "cold chain"],
  keypoints: ["Expanded Program on Immunization", "fully immunized child", "BCG", "hepatitis B birth dose", "pentavalent", "oral polio vaccine", "inactivated polio vaccine", "pneumococcal conjugate vaccine", "measles-rubella", "maternal antibody", "cold chain", "vaccine vial monitor", "herd immunity", "serosurveillance", "Dengvaxia", "catch-up"],
  answer: `
    <h4>Programmatic architecture</h4>
    <p>The Philippine <strong>Expanded Program on Immunization (EPI)</strong>, established in 1976, delivers free vaccines through barangay health stations, rural health units and public hospitals. Its operational target is the <strong>fully immunized child</strong>: BCG and hepatitis B at birth, pentavalent DPT-HepB-Hib and PCV at 6, 10 and 14 weeks, oral and inactivated polio, and measles-rubella at 9 and 12 months, with catch-up for defaulters. The schedule is not arbitrary; it places time-critical antigens before maternal antibody interferes and completes primary series before the highest-risk window.</p>
    <h4>Immunological logic</h4>
    <p><strong>BCG</strong> at birth primes Th1 and trained innate responses against disseminated TB. The <strong>hepatitis B birth dose</strong> prevents perinatal transmission when given within 24 hours. <strong>Conjugate</strong> vaccines convert polysaccharides into T-dependent antigens, generating memory in infants. <strong>OPV</strong> induces intestinal IgA and population-level herd protection, while <strong>IPV</strong> removes vaccine-associated paralytic polio risk. Measles vaccine is delayed to 9 months because residual maternal IgG neutralises the live virus; a second dose closes primary failure.</p>
    <h4>Cold chain and coverage</h4>
    <p>Potency depends on the <strong>cold chain</strong>: 2–8 °C for most antigens, with <strong>vaccine vial monitors</strong>, shake tests and stock rotation. Coverage is measured by administrative reports and surveys, but <strong>serosurveillance</strong> is needed because a child can be fully immunized on paper and still seronegative.</p>
    <h4>Philippine challenges</h4>
    <ul>
      <li>Loss of confidence after the <strong>Dengvaxia</strong> controversy and subsequent measles outbreaks.</li>
      <li>Geographic fragmentation and typhoon disruption of island cold chains.</li>
      <li>Vaccine hesitancy, missed opportunities and incomplete defaulter tracing.</li>
      <li>COVID-19 backsliding, requiring catch-up and integration with nutrition and maternal services.</li>
    </ul>
    <p>EPI success is therefore both an immunological and a logistics problem: potency, timing, coverage and trust must all hold.</p>
  `,
  tip: "Answer with the schedule first, then the immune reason for each timing, then the cold-chain and trust failures that break it.",
  sources: ["S26", "S31", "S33", "S11"]
},
{
  id: "i32", domain: "immunology", star: true,
  q: "Explain dengue immunopathogenesis and antibody-dependent enhancement in Filipino patients. Why do secondary heterologous infections worsen disease, and how do co-infections complicate interpretation?",
  tags: ["dengue", "ADE", "Philippines", "co-infection"],
  keypoints: ["four serotypes", "Aedes aegypti", "secondary heterologous infection", "sub-neutralising antibody", "FcγRIIA", "antibody-dependent enhancement", "original antigenic sin", "plasma leakage", "NS1", "thrombocytopenia", "Dengvaxia", "serostatus", "dengue-COVID", "leptospirosis", "helminth", "integrated vector control"],
  answer: `
    <h4>Virus, vector and serotype</h4>
    <p>Dengue virus (DENV) has four antigenically distinct serotypes transmitted by <em>Aedes aegypti</em>. Infection with one serotype gives durable homotypic immunity but only short-lived cross-protection against the others. In the Philippines, seasonal transmission and sequential serotype circulation make <strong>secondary heterologous infection</strong> the central risk factor for severe dengue.</p>
    <h4>Antibody-dependent enhancement</h4>
    <p>Cross-reactive IgG from a first infection binds a second serotype without neutralising it. The resulting <strong>sub-neutralising antibody</strong>–virus complexes are taken up through <strong>FcγRIIA</strong> on monocytes and macrophages, increasing infected cell mass and replication. <strong>Original antigenic sin</strong> skews T cells toward the first serotype, producing cytokines that increase vascular permeability. Complement activation, mast-cell products and endothelial dysfunction then drive <strong>plasma leakage</strong>, haemoconcentration and shock. <strong>Thrombocytopenia</strong> results from platelet binding, consumption and marrow suppression.</p>
    <h4>Diagnosis and severity</h4>
    <p><strong>NS1</strong> is most sensitive in the first five days; IgM and IgG serology are useful later but cross-react. Warning signs include abdominal pain, persistent vomiting, mucosal bleeding, fluid accumulation and rising haematocrit with falling platelets. Secondary infection, infancy and old age increase risk.</p>
    <h4>Co-infections and vaccines</h4>
    <p><strong>Dengue-COVID</strong>, dengue-leptospirosis and dengue-typhoid co-infections are common in Philippine hospitals; TB and <strong>helminth</strong> co-infections further distort cytokine and serological patterns.</p>
    <ul>
      <li><strong>Dengue-COVID-19:</strong> overlapping fever, thrombocytopenia and respiratory symptoms; serology cross-reacts.</li>
      <li><strong>Dengue-leptospirosis:</strong> flood exposure, jaundice and renal failure; both cause thrombocytopenia.</li>
      <li><strong>Dengue-typhoid:</strong> prolonged fever and abdominal symptoms; blood culture and NS1 are complementary.</li>
    </ul>
    <p><strong>Dengvaxia</strong> is restricted to people with documented prior dengue because seronegative recipients may later suffer enhanced disease. Integrated vector control, triage and serostatus-aware vaccination remain the practical defences.</p>
  `,
  tip: "Draw the ADE sequence as a chain: cross-reactive IgG, FcγR uptake, monocyte infection, cytokines, leak — then place the Philippine serotype and co-infection context around it.",
  sources: ["S4", "S25", "S32", "S33"]
},
{
  id: "i33", domain: "immunology", star: true,
  q: "Describe protective and pathological immune responses to Mycobacterium tuberculosis. How does HIV co-infection alter TB immunity and case finding in the Philippines?",
  tags: ["tuberculosis", "HIV", "granuloma", "Philippines"],
  keypoints: ["Mycobacterium tuberculosis", "alveolar macrophage", "phagosome maturation", "IL-12", "Th1", "IFN-γ", "TNF", "granuloma", "latent TB", "caseation", "CD4", "TB/HIV", "Xpert MTB/RIF Ultra", "LF-LAM", "IGRA", "immune reconstitution inflammatory syndrome"],
  answer: `
    <h4>Innate and Th1 control</h4>
    <p><em>Mycobacterium tuberculosis</em> is inhaled into alveoli, where it is phagocytosed by macrophages and dendritic cells. Bacterial lipoarabinomannan and ESAT-6 block <strong>phagosome maturation</strong>, so the organism survives within the phagosome. IL-12 from dendritic cells drives <strong>Th1</strong> differentiation; Th1 cells produce <strong>IFN-γ</strong>, which activates macrophages, and <strong>TNF</strong>, which recruits monocytes and organises the <strong>granuloma</strong>. Reactive nitrogen and oxygen intermediates, antimicrobial peptides and autophagy then contain the infection. This is a stalemate, not sterilising immunity, which is why <strong>latent TB</strong> can reactivate.</p>
    <h4>Pathology and transmission</h4>
    <p><strong>Caseation</strong> and cavitation erode into bronchi, producing infectious aerosols. Excessive TNF and matrix metalloproteinases destroy lung parenchyma, so much of the damage is host-mediated. Immune restoration can also provoke <strong>immune reconstitution inflammatory syndrome</strong> after starting antiretroviral therapy.</p>
    <h4>TB/HIV interaction</h4>
    <p>HIV depletes <strong>CD4</strong> T cells, reducing IFN-γ and granuloma integrity. TB then becomes disseminated, extrapulmonary, smear-negative and atypical, while TB accelerates HIV replication. In the Philippines, TB remains a leading cause of death in people with HIV, and stigma delays both diagnoses. Screening uses symptom questions, chest radiography, <strong>Xpert MTB/RIF Ultra</strong>, <strong>LF-LAM</strong> for advanced immunosuppression, and <strong>IGRA</strong> or tuberculin skin testing for latent infection. ART should start early, with TB treatment first and attention to drug interactions.</p>
    <h4>Programmatic response</h4>
    <ul>
      <li>Integrated TB/HIV case finding and same-day testing.</li>
      <li>Isoniazid preventive therapy after ruling out active TB.</li>
      <li>Contact tracing, infection control and adherence support.</li>
      <li>RA 10767 and RA 11166 frame elimination and non-discrimination.</li>
    </ul>
    <p>Coverage also depends on household contact investigation, workplace screening and active case finding among people living with HIV, because passive diagnosis alone misses the poorest and most stigmatised patients.</p>
  `,
  tip: "Contrast the immunocompetent granuloma with the HIV-depleted one; that single contrast explains the clinical and diagnostic differences.",
  sources: ["S26", "S27", "S6", "S33"]
},
{
  id: "i34", domain: "immunology", star: true,
  q: "Explain the immunological rationale for the Philippine COVID-19 vaccine rollout. What is hybrid immunity, and how should it guide booster policy?",
  tags: ["COVID-19", "hybrid immunity", "vaccine rollout", "Philippines"],
  keypoints: ["inactivated vaccine", "viral vector", "mRNA", "spike antigen", "neutralising antibody", "memory B cell", "CD4", "CD8", "hybrid immunity", "Omicron", "immune escape", "waning immunity", "booster", "priority groups", "AEFI", "vaccine equity"],
  answer: `
    <h4>Platforms and rollout</h4>
    <p>The Philippine COVID-19 rollout began in March 2021 with inactivated CoronaVac, viral-vector AstraZeneca and Sputnik V, and mRNA Pfizer-BioNTech and Moderna vaccines. Priority groups A1 to A5 placed health workers, elderly people and those with comorbidities first. The campaign required ultracold storage for mRNA, mass sites and mobile teams, and a public <strong>AEFI</strong> surveillance system. Heterologous schedules were permitted when supply was uncertain.</p>
    <h4>What the vaccines induce</h4>
    <p>All platforms present <strong>spike antigen</strong>. mRNA and viral vectors also drive strong CD8 responses through endogenous expression, whereas inactivated vaccines rely more on adjuvant and CD4 help. Protection correlates with <strong>neutralising antibody</strong>, but <strong>memory B cells</strong>, CD4 and CD8 T cells and mucosal immunity determine durability and cross-variant control. Conserved T-cell epitopes outside the receptor-binding domain allow some cross-recognition even when neutralisation escapes.</p>
    <h4>Hybrid immunity</h4>
    <p><strong>Hybrid immunity</strong> is the combination of infection-derived and vaccine-derived memory. It is broader than either alone: affinity-matured memory B cells, Fc-effector antibodies and tissue-resident T cells recognise more epitopes, including <strong>Omicron</strong> subvariants. It still wanes, and repeated antigen exposure can favour immune imprinting toward ancestral spike. Coverage was uneven across regions, and <strong>vaccine equity</strong> depended on cold-chain capacity, local government logistics and community confidence.</p>
    <h4>Philippine policy</h4>
    <ul>
      <li>Risk-based <strong>booster</strong> doses for elderly, immunocompromised and health workers.</li>
      <li>Bivalent and updated formulations as supply allows.</li>
      <li>Integration with influenza and EPI delivery.</li>
      <li>Countering hesitancy amplified by the Dengvaxia legacy.</li>
    </ul>
    <p>Hybrid immunity supports a calm, risk-stratified booster policy, not endless mass boosting. This distinction matters for public messaging.</p>
  `,
  tip: "Separate what the vaccine platform induces from what prior infection adds; hybrid immunity is the intersection, not a synonym for natural immunity.",
  sources: ["S26", "S31", "S32", "S11"]
},
{
  id: "i35", domain: "immunology", star: true,
  q: "Discuss the Philippine HIV/AIDS Policy Act (RA 11166) and its implications for immune monitoring of people living with HIV.",
  tags: ["HIV", "RA 11166", "CD4", "viral load"],
  keypoints: ["RA 11166", "confidentiality", "informed consent", "age of consent", "non-discrimination", "HIV testing services", "U=U", "CD4 count", "HIV viral load", "ART", "co-trimoxazole", "virological failure", "immune reconstitution inflammatory syndrome (IRIS)", "data privacy", "treatment hub"],
  answer: `
    <h4>Rights-based legal frame</h4>
    <p><strong>Republic Act No. 11166</strong>, the Philippine HIV and AIDS Policy Act of 2018, replaced RA 8504. It guarantees <strong>confidentiality</strong>, <strong>informed consent</strong>, non-discrimination, access to treatment and <strong>HIV testing services</strong>. Testing must be voluntary; mandatory testing is prohibited except in narrow situations such as blood donation and certain occupational exposures. Adolescents aged 15 and above may consent to testing and treatment without parental consent. The law also protects privacy and requires age-appropriate education. It established the Philippine National AIDS Council and obliges employers, schools and health facilities to adopt non-discriminatory policies.</p>
    <h4>Immune monitoring</h4>
    <p>Baseline <strong>CD4 count</strong> classifies immunological stage and triggers prophylaxis: co-trimoxazole when CD4 is &lt;200 cells/µL, and tuberculosis screening at every visit. Starting antiretroviral therapy at a low CD4 count also risks <strong>immune reconstitution inflammatory syndrome (IRIS)</strong>, which can unmask or worsen tuberculosis and cryptococcal disease. <strong>HIV viral load</strong> is measured about six months after ART initiation and then annually; <strong>virological failure</strong> prompts adherence assessment and resistance testing. CD4 monitoring is most useful when counts are low or when opportunistic infection is suspected.</p>
    <h4>Monitoring as an ethical duty</h4>
    <p>Results are sensitive personal data. Disclosure to partners or employers requires consent, and <strong>U=U</strong> — undetectable viral load means no sexual transmission — is both a clinical endpoint and an anti-stigma message. Unauthorised disclosure is a legal offence and drives people away from care.</p>
    <h4>Philippine implementation</h4>
    <ul>
      <li>Free ART through <strong>treatment hubs</strong> and social hygiene clinics.</li>
      <li>Same-day ART and differentiated service delivery.</li>
      <li>TB/HIV, hepatitis and STI integration.</li>
      <li>Community-led testing and linkage to care.</li>
    </ul>
    <p>Legal protection and laboratory monitoring are complementary: one brings people in, the other keeps them virologically suppressed.</p>
  `,
  tip: "Pair every legal guarantee with the laboratory decision it protects — consent before testing, confidentiality around results, and monitoring that supports U=U.",
  sources: ["S33", "S16", "S26", "S31"]
},
{
  id: "i36", domain: "immunology", star: true,
  q: "Define trained immunity and explain how systems-immunology methods have refined the concept. What is the evidence for heterologous protection, and how could it be exploited in the Philippines?",
  tags: ["trained immunity", "systems immunology", "BCG", "epigenetics"],
  keypoints: ["trained immunity", "innate immune memory", "BCG", "β-glucan", "H3K4me3", "H3K27ac", "glycolysis", "mTOR", "HIF-1α", "monocytes", "NK cells", "single-cell RNA sequencing", "CyTOF", "ATAC-seq", "heterologous protection", "immune tolerance"],
  answer: `
    <h4>Definition</h4>
    <p><strong>Trained immunity</strong> is the antigen-independent functional reprogramming of innate immune cells after an initial stimulus, producing a stronger response to a second, unrelated challenge. It is mediated by <strong>epigenetic</strong> marks — <strong>H3K4me3</strong> and <strong>H3K27ac</strong> at inflammatory and antimicrobial gene promoters — and by a <strong>metabolic</strong> shift toward <strong>glycolysis</strong> through mTOR and HIF-1α. Monocytes, macrophages, NK cells and even haematopoietic progenitors can be trained. Unlike adaptive memory, it involves no gene rearrangement and is shorter-lived, and it can be maladaptive when chronic inflammation entrenches myeloid hyperresponsiveness.</p>
    <h4>Systems immunology</h4>
    <p><strong>Systems immunology</strong> uses single-cell RNA sequencing, ATAC-seq, CyTOF, proteomics and metabolomics to map these states. It distinguishes trained immunity from <strong>immune tolerance</strong> and exhaustion, identifies cell-specific signatures, and builds predictive models of vaccine response. This matters because bulk assays obscure the myeloid heterogeneity that drives protection.</p>
    <h4>Evidence and limits</h4>
    <ul>
      <li><strong>BCG</strong> reduces neonatal sepsis and respiratory infection through heterologous effects.</li>
      <li><strong>β-glucan</strong> trains monocytes and protects against unrelated pathogens in models.</li>
      <li>Measles and oral polio vaccines show nonspecific mortality benefits in some trials.</li>
      <li>Effects are variable, stimulus-dependent and difficult to measure in humans.</li>
    </ul>
    <h4>Philippine relevance</h4>
    <p>BCG is given at birth in the <strong>EPI</strong>, so trained immunity is already part of Philippine infant care. It could inform low-cost adjuvants and pandemic preparedness, but systems-immunology readouts are needed before clinical claims are made. Trials must control for prior BCG, age, sex and concurrent infection, because these strongly modify innate responses. Standardised assays and shared reference samples would make results comparable across studies, ages and diverse populations.</p>
  `,
  tip: "Keep the three layers distinct: epigenetic marks, metabolic shift and cell phenotype; then say what systems immunology adds that bulk assays cannot.",
  sources: ["S1", "S3", "S13", "S33"]
},
{
  id: "i37", domain: "immunology", star: true,
  q: "Compare mucosal vaccine platforms and adjuvants. Why is secretory IgA important, and what barriers limit oral and intranasal immunization?",
  tags: ["mucosal vaccine", "adjuvant", "sIgA", "MALT"],
  keypoints: ["mucosa-associated lymphoid tissue", "Peyer's patches", "M cells", "secretory IgA", "dimeric IgA", "polymeric immunoglobulin receptor", "oral tolerance", "live attenuated vaccine", "dmLT", "cholera toxin B subunit", "TLR agonist", "nanoemulsion", "OPV", "rotavirus vaccine", "tissue-resident memory", "cold chain"],
  answer: `
    <h4>Mucosal immune logic</h4>
    <p><strong>Mucosa-associated lymphoid tissue</strong> samples antigen through M cells over <strong>Peyer's patches</strong> and tonsils. Activated B cells switch to IgA, which is secreted as <strong>dimeric IgA</strong> across epithelium by the <strong>polymeric immunoglobulin receptor</strong> to form <strong>secretory IgA</strong>. sIgA neutralises pathogens and toxins in the lumen, blocks adhesion and does not trigger inflammation. Because it is produced locally, protection can appear at the challenged mucosa before serum antibody rises. Tissue-resident memory T cells provide rapid local recall.</p>
    <h4>Platforms</h4>
    <div class="table-wrap"><table>
      <tr><th>Platform</th><th>Example</th><th>Key feature</th></tr>
      <tr><td>Live attenuated oral</td><td><strong>OPV</strong>, <strong>rotavirus vaccine</strong>, oral cholera</td><td>Replicates at mucosa; strong IgA; cold chain and safety concerns</td></tr>
      <tr><td>Inactivated oral</td><td>Whole-cell cholera</td><td>Safer; weaker and shorter immunity</td></tr>
      <tr><td>Intranasal</td><td>Live attenuated influenza</td><td>Upper respiratory IgA; limited by nasal clearance</td></tr>
      <tr><td>Sublingual</td><td>Allergen and experimental vaccines</td><td>Dendritic-cell rich; avoids gastric acid</td></tr>
    </table></div>
    <h4>Adjuvants</h4>
    <p>Mucosal adjuvants must overcome <strong>oral tolerance</strong> and enzymatic degradation. <strong>dmLT</strong>, <strong>cholera toxin B subunit</strong>, <strong>TLR agonists</strong>, <strong>nanoemulsions</strong> and mast-cell activators promote IgA and Th17 responses while limiting neurotoxicity, which plagued earlier toxin adjuvants.</p>
    <h4>Barriers and use</h4>
    <p>Gastric acid, mucus, peristalsis and prior immunity reduce take. Adjuvant toxicity, antigen dose and formulation stability must be balanced against the convenience of needle-free delivery. A vaccine that is potent in the laboratory can still fail if it is not stable at ambient temperature. In the Philippines, OPV and rotavirus vaccines are mainstays of the EPI, and oral cholera vaccine is used in outbreak response. Mucosal vaccines are needle-free and logistically attractive, but potency and stability remain the limiting problems.</p>
  `,
  tip: "Explain the IgA transport route first, then use it to judge each platform: can it reach M cells, survive the gut and drive local memory?",
  sources: ["S1", "S3", "S4", "S11"]
},
{
  id: "i38", domain: "immunology",
  q: "Explain the biology of the neonatal Fc receptor (FcRn). How is it exploited in antibody therapeutics and maternal-fetal immunity?",
  tags: ["FcRn", "placental transport", "antibody half-life", "Fc engineering"],
  keypoints: ["neonatal Fc receptor", "FcRn", "β2-microglobulin", "pH-dependent binding", "endosomal recycling", "placental transport", "IgG", "albumin", "half-life extension", "YTE mutation", "LS mutation", "efgartigimod", "rozanolixizumab", "IVIG", "maternal vaccination", "neonatal immunity"],
  answer: `
    <h4>Molecular biology</h4>
    <p>The <strong>neonatal Fc receptor (FcRn)</strong> is a heterodimer of an MHC class I–like heavy chain and <strong>β2-microglobulin</strong>. It binds the Fc region of <strong>IgG</strong> and <strong>albumin</strong> at acidic pH in endosomes but releases them at neutral pH at the cell surface. This pH switch allows <strong>endosomal recycling</strong>, protecting IgG from lysosomal degradation and giving it a long half-life.</p>
    <h4>Transport and neonatal immunity</h4>
    <p>In the placenta, FcRn transports maternal IgG across the syncytiotrophoblast, mainly in the third trimester. Preterm infants therefore receive less antibody and remain vulnerable to encapsulated bacteria and RSV. <strong>Maternal vaccination</strong> against tetanus, pertussis and RSV exploits this pathway. In the neonatal gut, FcRn transports IgG from colostrum and milk, and it also binds albumin, explaining the long half-life of albumin-based drugs.</p>
    <h4>Therapeutic exploitation</h4>
    <ul>
      <li><strong>Half-life extension:</strong> <strong>YTE</strong> and <strong>LS mutation</strong> increase FcRn binding and prolong antibody dosing intervals.</li>
      <li><strong>Subcutaneous delivery:</strong> FcRn-mediated recycling improves bioavailability of Fc-fusion proteins.</li>
      <li><strong>FcRn inhibitors:</strong> <strong>efgartigimod</strong> and <strong>rozanolixizumab</strong> accelerate IgG catabolism in myasthenia gravis and immune thrombocytopenia.</li>
      <li><strong>IVIG:</strong> saturates FcRn, increasing IgG clearance and lowering pathogenic antibody levels.</li>
    </ul>
    <p>Fc engineering must preserve FcγR binding and effector function while changing FcRn affinity, because the two interactions use overlapping but distinct surfaces.</p>
    <h4>Infection implications</h4>
    <p>FcRn determines how long passive antibody and monoclonals persist, and how much maternal antibody reaches the fetus. Blocking FcRn lowers total IgG, so infection risk and vaccination status must be reviewed before therapy. The same pathway explains why maternal antibody can blunt infant vaccine responses in early infancy and beyond.</p>
  `,
  tip: "Anchor everything on the pH switch: binding in the acidified endosome, release at the neutral surface — recycling, transport and drug design all follow.",
  sources: ["S1", "S3", "S4", "S13"]
},
{
  id: "i39", domain: "immunology",
  q: "Discuss the therapeutic targeting of complement. Which pathways and diseases are targeted, and what infection risks follow?",
  tags: ["complement therapeutics", "eculizumab", "C5", "infection risk"],
  keypoints: ["C1 inhibitor", "MASP-2", "C3", "factor B", "C5", "C5a receptor", "eculizumab", "ravulizumab", "pegcetacoplan", "iptacopan", "avacopan", "paroxysmal nocturnal haemoglobinuria", "atypical haemolytic uraemic syndrome", "meningococcal infection", "meningococcal vaccination", "terminal complement"],
  answer: `
    <h4>Target map</h4>
    <p>Complement therapeutics act at different levels. <strong>C1 inhibitor</strong> blocks the classical and lectin pathways; anti-<strong>MASP-2</strong> blocks lectin activation; <strong>C3</strong> and <strong>factor B</strong> inhibitors act at the central amplification step; anti-<strong>C5</strong> and <strong>C5a receptor</strong> agents block the terminal pathway and its inflammatory product. Proximal blockade preserves some opsonisation, while terminal blockade leaves C3b-mediated clearance intact. The choice depends on whether the goal is to stop amplification, prevent intravascular haemolysis or control C5a-driven inflammation.</p>
    <h4>Clinical uses</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug class</th><th>Example</th><th>Main indication</th></tr>
      <tr><td>Anti-C5</td><td><strong>Eculizumab</strong>, <strong>ravulizumab</strong></td><td>paroxysmal nocturnal haemoglobinuria (PNH), atypical HUS, myasthenia gravis, NMOSD</td></tr>
      <tr><td>C3 inhibitor</td><td><strong>Pegcetacoplan</strong></td><td>PNH, geographic atrophy</td></tr>
      <tr><td>Factor B inhibitor</td><td><strong>Iptacopan</strong></td><td>PNH, IgA nephropathy</td></tr>
      <tr><td>C5a receptor</td><td><strong>Avacopan</strong></td><td>ANCA-associated vasculitis</td></tr>
      <tr><td>C1 inhibitor</td><td>C1-INH concentrate</td><td>Hereditary angioedema</td></tr>
    </table></div>
    <h4>Infection risk</h4>
    <p><strong>Terminal complement</strong> blockade causes a marked risk of <strong>meningococcal infection</strong> and disseminated gonococcal infection. Patients need <strong>meningococcal vaccination</strong> at least two weeks before, prophylactic antibiotics when vaccination cannot precede therapy, and an emergency card. Proximal inhibitors may increase encapsulated bacterial infections. C1 inhibitor therapy carries a smaller risk but is not risk-free. Because complement also clears immune complexes, prolonged blockade can unmask lupus-like syndromes and requires monitoring for infection and haemolysis.</p>
    <h4>Philippine perspective</h4>
    <p>PNH and atypical HUS are under-recognised, and complement inhibitors are expensive. Accurate diagnosis, vaccine availability and shared decision-making determine access. Therapeutic monitoring should include infection surveillance, not just disease activity, and biosimilar C5 inhibitors may widen access if quality and pharmacovigilance are assured. National reimbursement decisions should weigh drug cost against the cost of dialysis, transfusion and recurrent hospitalisation.</p>
  `,
  tip: "Draw the cascade and place each drug on it; then the infection risk follows from what you left intact — terminal blockade means Neisseria.",
  sources: ["S1", "S3", "S4", "S9"]
},
{
  id: "i40", domain: "immunology", star: true,
  q: "Explain the infection risks of CAR-T cell therapy and checkpoint inhibitors. How do the mechanisms differ, and how should patients be screened and managed?",
  tags: ["CAR-T", "checkpoint inhibitors", "infection", "immunosuppression"],
  keypoints: ["CAR-T", "cytokine release syndrome", "B-cell aplasia", "hypogammaglobulinaemia", "CD19", "BCMA", "checkpoint inhibitor", "PD-1", "CTLA-4", "immune-related adverse event", "TB reactivation", "hepatitis B", "CMV", "Pneumocystis jirovecii", "IVIG", "screening"],
  answer: `
    <h4>CAR-T cell therapy</h4>
    <p><strong>Chimeric antigen receptor T cells</strong> are engineered to kill CD19-positive B cells or BCMA-positive plasma cells. Lymphodepletion and <strong>cytokine release syndrome</strong> cause early neutropenia, mucosal injury and bacterial infection. Durable <strong>B-cell aplasia</strong> and <strong>hypogammaglobulinaemia</strong> then impair humoral immunity, so late infections are predominantly viral and respiratory. <strong>Pneumocystis jirovecii</strong> and CMV require prophylaxis and monitoring. IVIG and revaccination after recovery are standard. Antigen choice matters: CD19 and BCMA targets both ablate antibody-producing compartments, but BCMA therapy affects plasma cells more deeply.</p>
    <h4>Checkpoint inhibitors</h4>
    <p><strong>PD-1</strong>, PD-L1 and <strong>CTLA-4</strong> blockade restores T-cell killing but can trigger <strong>immune-related adverse events</strong>, which are treated with corticosteroids and biologics. This iatrogenic immunosuppression, rather than the drug itself, drives much of the infection risk. <strong>TB reactivation</strong>, <strong>hepatitis B</strong> flare, herpes zoster and CMV are recognised. In a high-TB-burden country such as the Philippines, pre-treatment IGRA and chest imaging are essential.</p>
    <h4>Mechanisms compared</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>CAR-T</th><th>Checkpoint inhibitor</th></tr>
      <tr><td>Main defect</td><td>B-cell aplasia, cytopenias</td><td>irAE treatment, T-cell dysregulation</td></tr>
      <tr><td>Typical infections</td><td>Bacterial early; viral and fungal late</td><td>TB, hepatitis B, VZV, CMV</td></tr>
      <tr><td>Prevention</td><td>IVIG, PJP prophylaxis, vaccines</td><td>Screen TB, HBV and HIV; vaccinate</td></tr>
    </table></div>
    <h4>Screening and management</h4>
    <p>Before therapy, screen for TB, HIV, hepatitis B and C, CMV and other endemic infections; update inactivated vaccines; and counsel on live vaccines. After therapy, monitor IgG, use antimicrobial prophylaxis and maintain a low threshold for imaging and culture. Patients receiving corticosteroids or biologics for irAEs need Pneumocystis prophylaxis and careful tapering, because infection risk tracks with the cumulative immunosuppressive burden.</p>
  `,
  tip: "Separate the direct immune defect from the treatment of its complications; that is why checkpoint inhibitors cause more TB and hepatitis, while CAR-T causes more late hypogammaglobulinaemic infection.",
  sources: ["S1", "S9", "S27", "S33"]
}
);
