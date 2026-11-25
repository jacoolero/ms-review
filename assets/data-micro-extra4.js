/* Microbiology — additional essays, part 4: AMR & diagnostics */
window.QBANK.push(
{
  id: "a10", domain: "amr",
  q: "Describe the laboratory detection of carbapenemase-producing organisms and discuss the treatment options for carbapenem-resistant Enterobacterales.",
  tags: ["carbapenemase", "CRE", "ceftazidime-avibactam", "detection"],
  keypoints: ["Ambler class A KPC", "class B metallo NDM VIM IMP", "class D OXA-48", "modified carbapenem inactivation method", "mCIM and eCIM with EDTA", "Carba NP colorimetric test", "lateral flow immunoassay", "PCR for bla genes", "meropenem screening MIC", "ceftazidime-avibactam for KPC and OXA-48", "meropenem-vaborbactam", "imipenem-relebactam", "cefiderocol", "aztreonam plus ceftazidime-avibactam for metallo-beta-lactamases", "colistin and tigecycline limitations", "infection control and contact precautions"],
  answer: `
    <h4>Classification</h4>
    <div class="table-wrap"><table>
      <tr><th>Class</th><th>Enzymes</th><th>Features</th></tr>
      <tr><td><strong>Ambler class A</strong></td><td><strong>KPC</strong></td><td>Serine enzyme; inhibited by avibactam, vaborbactam, relebactam</td></tr>
      <tr><td><strong>Class B (metallo)</strong></td><td><strong>NDM, VIM, IMP</strong></td><td>Zinc-dependent; inhibited by EDTA, not by current β-lactamase inhibitors; do not hydrolyse aztreonam</td></tr>
      <tr><td><strong>Class D</strong></td><td><strong>OXA-48</strong>-like</td><td>Weak carbapenem hydrolysis, often low-level resistance; inhibited by avibactam</td></tr>
    </table></div>
    <h4>Detection</h4>
    <ol>
      <li><strong>Screening</strong>: raised <strong>meropenem screening MIC</strong> (or reduced disk zones) triggers confirmation; OXA-48 producers may appear only ertapenem-resistant.</li>
      <li><strong>Phenotypic confirmation</strong>: <strong>modified carbapenem inactivation method (mCIM)</strong> — the isolate inactivates a meropenem disk; <strong>eCIM with EDTA</strong> run in parallel distinguishes metallo-enzymes (restored zone). Also the <strong>Carba NP colorimetric test</strong> (pH change from imipenem hydrolysis) and combined-disk tests with inhibitors.</li>
      <li><strong>Rapid immunological</strong>: <strong>lateral flow immunoassays</strong> detecting KPC, NDM, VIM, IMP and OXA-48 in minutes.</li>
      <li><strong>Molecular</strong>: <strong>PCR for <em>bla</em> genes</strong> or multiplex panels on isolates or directly on blood cultures — the reference for epidemiology and infection control.</li>
    </ol>
    <p>Always distinguish true carbapenemase from non-carbapenemase mechanisms (porin loss plus AmpC or ESBL), because treatment and infection control differ.</p>
    <h4>Treatment</h4>
    <ul>
      <li><strong>KPC and OXA-48</strong>: <strong>ceftazidime–avibactam</strong>; also <strong>meropenem–vaborbactam</strong> and <strong>imipenem–relebactam</strong> for KPC (not reliable for OXA-48).</li>
      <li><strong>Metallo-β-lactamases</strong>: <strong>aztreonam plus ceftazidime–avibactam</strong> (avibactam protects aztreonam from accompanying ESBL/AmpC), or <strong>cefiderocol</strong> (siderophore cephalosporin, stable to most carbapenemases).</li>
      <li>Older agents have real <strong>limitations</strong>: <strong>colistin</strong> (nephrotoxic, poor lung penetration, heteroresistance) and <strong>tigecycline</strong> (low serum levels — avoid in bacteraemia and urinary infection); fosfomycin and aminoglycosides (plazomicin) are adjuncts.</li>
      <li>Source control, and <strong>infection control with contact precautions</strong>, screening of contacts and cohorting, are as important as the antibiotic — CRE is a WHO critical-priority pathogen.</li>
    </ul>
  `,
  tip: "mCIM/eCIM and 'aztreonam + ceftazidime–avibactam for MBLs' are the two expected specifics.",
  sources: ["S8", "S7", "S9"]
},
{
  id: "a11", domain: "amr",
  q: "Explain the mechanisms of resistance to non-beta-lactam antibiotics: macrolides, fluoroquinolones, aminoglycosides, tetracyclines, glycopeptides, oxazolidinones and sulfonamides.",
  tags: ["resistance mechanisms", "efflux", "target modification", "enzymes"],
  keypoints: ["erm methylase MLSb and D-test", "mef efflux macrolides", "23S rRNA mutation", "gyrA and parC target mutations", "qnr plasmid protection", "aminoglycoside modifying enzymes", "16S rRNA methyltransferase rmtB", "ribosomal protection tet(M)", "tet efflux pumps", "tigecycline tet(X) monooxygenase", "vanA D-Ala-D-Lac", "vanB and teicoplanin", "cfr and 23S G2576T linezolid", "optrA and poxtA", "dihydrofolate and dihydropteroate target changes", "sul and dfr genes", "intrinsic versus acquired resistance"],
  answer: `
    <p>All resistance falls into four strategies: destroy or modify the drug, change the target, prevent access (porins and efflux), or bypass the pathway. Also distinguish <strong>intrinsic from acquired resistance</strong>.</p>
    <div class="table-wrap"><table>
      <tr><th>Class</th><th>Main mechanisms</th></tr>
      <tr><td><strong>Macrolides, lincosamides, streptogramins</strong></td><td><strong><em>erm</em> methylase</strong> methylates 23S rRNA giving the <strong>MLS<sub>b</sub></strong> phenotype — inducible resistance detected by the <strong>D-test</strong> (report clindamycin resistant); <strong><em>mef</em> efflux</strong> (M phenotype, macrolide only); <strong>23S rRNA mutation</strong> (<em>H. pylori</em>, <em>Mycoplasma</em>); esterases</td></tr>
      <tr><td><strong>Fluoroquinolones</strong></td><td>Stepwise <strong><em>gyrA</em> and <em>parC</em> target mutations</strong> (DNA gyrase, topoisomerase IV); <strong><em>qnr</em> plasmid protection</strong> proteins; efflux (AcrAB, NorA); aminoglycoside acetyltransferase variant AAC(6′)-Ib-cr modifying ciprofloxacin</td></tr>
      <tr><td><strong>Aminoglycosides</strong></td><td><strong>Aminoglycoside-modifying enzymes</strong> (acetyl-, phospho-, nucleotidyl-transferases) — the commonest; <strong>16S rRNA methyltransferases (<em>rmtB</em>, <em>armA</em>)</strong> giving pan-aminoglycoside resistance; reduced uptake (anaerobes are intrinsically resistant because uptake is oxygen-dependent)</td></tr>
      <tr><td><strong>Tetracyclines</strong></td><td><strong>Ribosomal protection <em>tet</em>(M)</strong>, <strong><em>tet</em> efflux pumps</strong> (<em>tet</em>(A)–(E)); for tigecycline and eravacycline, <strong><em>tet</em>(X) monooxygenase</strong> destroys the drug</td></tr>
      <tr><td><strong>Glycopeptides</strong></td><td><strong><em>vanA</em>: D-Ala-D-Ala replaced by D-Ala-D-Lac</strong> (1000-fold loss of affinity; vancomycin and teicoplanin resistant); <strong><em>vanB</em></strong> (vancomycin resistant, <strong>teicoplanin susceptible</strong>); <em>vanC</em> intrinsic in <em>E. gallinarum</em>/<em>casseliflavus</em>; in <em>S. aureus</em>, VISA from thickened cell wall and rare VRSA from acquired <em>vanA</em></td></tr>
      <tr><td><strong>Oxazolidinones</strong></td><td><strong><em>cfr</em> methyltransferase</strong> and <strong>23S rRNA G2576T</strong> mutation; plasmid-borne <strong><em>optrA</em> and <em>poxtA</em></strong> ABC-F proteins</td></tr>
      <tr><td><strong>Sulfonamides and trimethoprim</strong></td><td>Acquired drug-insensitive enzymes from <strong><em>sul</em> and <em>dfr</em> genes</strong>, plus <strong>dihydropteroate synthase and dihydrofolate reductase target changes</strong>; bypass by using exogenous folate</td></tr>
      <tr><td>Others</td><td>Rifampicin: <em>rpoB</em> mutations. Daptomycin: <em>mprF</em> changes in membrane charge. Colistin: <em>mcr</em> genes and <em>pmrAB</em>/<em>mgrB</em> lipid A modification. Chloramphenicol: <em>cat</em> acetyltransferase</td></tr>
    </table></div>
    <p>Clinical consequences: the D-test changes clindamycin reporting; <em>vanB</em> may allow teicoplanin use; 16S methyltransferases and <em>tet</em>(X) remove whole classes at once; and because most of these determinants sit on plasmids, transposons and integrons, resistance is transferable, which is why infection control is part of resistance management.</p>
  `,
  tip: "A table with one enzyme or gene per class, plus the D-test and vanA/vanB distinction, covers this fully.",
  sources: ["S1", "S8", "S13"]
},
{
  id: "a12", domain: "amr",
  q: "Discuss antimicrobial resistance in the Philippines and the national response, including the role of the laboratory in surveillance.",
  tags: ["AMR Philippines", "ARSP", "GLASS", "surveillance"],
  keypoints: ["Antimicrobial Resistance Surveillance Program ARSP", "Research Institute for Tropical Medicine reference laboratory", "sentinel site network", "WHO GLASS reporting", "Philippine Action Plan to Combat AMR", "One Health with agriculture", "over-the-counter antibiotic sales", "self-medication and incomplete courses", "MRSA prevalence", "carbapenem-resistant Acinetobacter and Klebsiella", "extensively drug-resistant typhoid", "azithromycin-resistant gonorrhoea", "drug-resistant tuberculosis burden", "antimicrobial stewardship program AO 2016-0003", "quality-assured susceptibility testing", "data for empirical guidelines"],
  answer: `
    <h4>Surveillance structure</h4>
    <p>The <strong>Antimicrobial Resistance Surveillance Program (ARSP)</strong>, established in 1988 and coordinated by the <strong>Research Institute for Tropical Medicine</strong> as the national reference laboratory, collects data from a <strong>sentinel site network</strong> of hospital laboratories nationwide. It publishes annual reports and contributes to <strong>WHO GLASS reporting</strong>. Priority organisms mirror GLASS: <em>E. coli</em>, <em>K. pneumoniae</em>, <em>S. aureus</em>, <em>S. pneumoniae</em>, <em>Salmonella</em>, <em>Shigella</em>, <em>N. gonorrhoeae</em>, <em>Acinetobacter</em>.</p>
    <h4>The resistance picture</h4>
    <ul>
      <li>High <strong>MRSA prevalence</strong> among <em>S. aureus</em> isolates, and high rates of ESBL-producing <em>E. coli</em> and <em>K. pneumoniae</em>.</li>
      <li>Rising <strong>carbapenem-resistant <em>Acinetobacter baumannii</em> and <em>K. pneumoniae</em></strong> in intensive care units — the most pressing hospital problem.</li>
      <li><strong>Extensively drug-resistant typhoid</strong> circulating in the region and <strong>azithromycin- and cephalosporin-resistant gonorrhoea</strong> under watch.</li>
      <li>A substantial <strong>drug-resistant tuberculosis burden</strong> — the Philippines is among WHO's high MDR/RR-TB burden countries.</li>
    </ul>
    <h4>Drivers</h4>
    <p><strong>Over-the-counter antibiotic sales</strong> despite prescription-only rules, <strong>self-medication and incomplete courses</strong>, diagnostic uncertainty and limited access to culture, crowded hospitals with limited isolation capacity, and heavy antibiotic use in poultry, swine and aquaculture (a <strong>One Health</strong> problem with agriculture).</p>
    <h4>National response</h4>
    <ul>
      <li>The <strong>Philippine Action Plan to Combat Antimicrobial Resistance</strong>, overseen by an inter-agency committee (DOH and the Department of Agriculture), following the WHO Global Action Plan pillars: awareness, surveillance, infection prevention, optimal use and research.</li>
      <li><strong>DOH Administrative Order 2016-0003</strong> requires hospital <strong>antimicrobial stewardship programmes</strong>; hospital infection control committees and licensing standards (AO 2021-0037 for laboratories) support this.</li>
      <li>Regulation of antimicrobial sales by the FDA, and veterinary restrictions on growth promoters.</li>
    </ul>
    <h4>What the laboratory must contribute</h4>
    <p><strong>Quality-assured susceptibility testing</strong> to CLSI standards with internal QC and EQA, accurate species identification, timely reporting of alert organisms to infection control, cumulative antibiograms that provide <strong>data for empirical guidelines</strong>, participation in ARSP with isolate referral, and support of stewardship with de-escalation advice and rapid diagnostics. Without reliable local data, empirical therapy is guesswork and stewardship cannot be measured.</p>
  `,
  tip: "Name ARSP and RITM, AO 2016-0003, and finish with the laboratory's concrete contributions.",
  sources: ["S14", "S23", "S7"]
},
{
  id: "d11", domain: "diagnostics",
  q: "Discuss specimen collection, transport and rejection criteria in clinical microbiology, and explain how pre-analytical quality determines the value of the result.",
  tags: ["pre-analytical", "specimen quality", "rejection criteria", "transport"],
  keypoints: ["right specimen before antibiotics", "adequate volume", "sterile site versus colonised site", "avoid swabs when tissue or fluid possible", "transport media Amies and Cary-Blair", "anaerobic transport", "two hours at room temperature for most", "CSF never refrigerated", "urine refrigerate or boric acid", "reject saliva instead of sputum", "reject dry or desiccated swab", "reject 24-hour sputum or urine collections", "reject Foley catheter tips", "repeat duplicate specimens same day", "unlabelled or mislabelled specimen", "comment on quality rather than silently reporting"],
  answer: `
    <p>A microbiology result can only be as good as the specimen. The guiding principle is to collect the <strong>right specimen, from the right site, in adequate volume, before antibiotics</strong>, and to get it to the laboratory quickly in the right medium.</p>
    <h4>Collection principles</h4>
    <ul>
      <li>Distinguish a <strong>sterile site from a colonised site</strong>: growth from blood or CSF is meaningful, growth from sputum, a wound surface or an ulcer may be colonisation.</li>
      <li><strong>Avoid swabs when tissue or fluid is possible</strong> — aspirates and biopsies give more organisms, allow quantification and permit histology.</li>
      <li>Disinfect skin properly (chlorhexidine–alcohol) for blood cultures and joint aspirates; collect <strong>adequate volume</strong> (20–30 mL per adult blood culture set — volume is the single strongest determinant of yield).</li>
      <li>Label at the bedside with two identifiers, and state the site, the time and the clinical question on the request; the request form determines which media and tests are set up.</li>
    </ul>
    <h4>Transport</h4>
    <div class="table-wrap"><table>
      <tr><th>Specimen</th><th>Requirement</th></tr>
      <tr><td>Most swabs</td><td><strong>Transport media: Amies</strong> (bacteriology) or viral transport medium; <strong>Cary–Blair</strong> for stool</td></tr>
      <tr><td>Abscess, deep tissue</td><td><strong>Anaerobic transport</strong> vial or the aspirate in the syringe with air expelled</td></tr>
      <tr><td>General rule</td><td>To the laboratory within <strong>2 hours at room temperature</strong></td></tr>
      <tr><td><strong>CSF</strong></td><td>Immediately, at room temperature — <strong>never refrigerated</strong> (kills <em>N. meningitidis</em> and <em>H. influenzae</em>)</td></tr>
      <tr><td>Blood cultures</td><td>Room temperature or straight into the incubator; never refrigerate</td></tr>
      <tr><td>Urine</td><td><strong>Refrigerate or use boric acid</strong> if delay &gt;2 hours, to prevent overgrowth</td></tr>
      <tr><td>Viruses, <em>Chlamydia</em></td><td>Cold chain in appropriate medium</td></tr>
    </table></div>
    <h4>Rejection criteria</h4>
    <ul>
      <li><strong>Unlabelled or mislabelled specimen</strong>, or a mismatch with the request (irreplaceable specimens such as CSF are handled with the clinician rather than discarded).</li>
      <li><strong>Saliva instead of sputum</strong> (Bartlett or Q-score screening: &gt;10 squamous cells per low-power field), or a <strong>dry, desiccated swab</strong>.</li>
      <li><strong>24-hour sputum or urine collections</strong> for culture, and pooled specimens.</li>
      <li><strong>Foley catheter tips</strong>, which only reflect colonisation.</li>
      <li><strong>Duplicate specimens on the same day</strong> from the same site (except blood cultures), leaking containers, excessive delay, or the wrong preservative.</li>
      <li>Formalin-fixed tissue for culture.</li>
    </ul>
    <p>When a suboptimal specimen cannot be rejected, the laboratory should <strong>comment on quality rather than silently reporting</strong> it — for example "mixed flora consistent with contamination; repeat collection advised". Rejections must be recorded as a quality indicator and fed back with education, because every rejected specimen is also a delay in patient care.</p>
  `,
  tip: "Give concrete rejection examples and the CSF 'never refrigerate' rule — both are standard exam points.",
  sources: ["S12", "S1", "S22"]
},
{
  id: "d12", domain: "diagnostics",
  q: "Evaluate rapid and point-of-care diagnostics in infectious disease, including rapid antigen tests, molecular point-of-care platforms and biomarkers, and their role in stewardship.",
  tags: ["rapid diagnostics", "POCT", "stewardship", "biomarkers"],
  keypoints: ["rapid antigen detection tests", "high specificity low sensitivity", "GeneXpert cartridge platform", "isothermal amplification LAMP", "lateral flow immunoassay", "CRP and procalcitonin guided therapy", "turnaround time changes decisions", "rapid blood culture identification panels", "resistance gene detection mecA and bla genes", "negative predictive value for de-escalation", "need for confirmatory culture", "cost and supply chain", "quality control and operator training", "connectivity and result capture", "pre-test probability and predictive values", "test must change management to add value"],
  answer: `
    <p>The value of a rapid test is not its speed alone but whether a faster result <strong>changes management</strong>. That requires considering <strong>pre-test probability and predictive values</strong>, not just sensitivity and specificity.</p>
    <h4>Categories</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Examples</th><th>Performance issues</th></tr>
      <tr><td><strong>Rapid antigen detection tests</strong></td><td>Group A streptococcus, influenza, SARS-CoV-2, RSV, malaria HRP2, cryptococcal antigen, <em>Legionella</em> urinary antigen, dengue NS1</td><td><strong>High specificity but lower sensitivity</strong> — a positive is usually actionable, a negative may need culture or NAAT (e.g. throat culture in children)</td></tr>
      <tr><td><strong>Molecular point-of-care</strong></td><td><strong>GeneXpert cartridge platform</strong> (TB, MTB/RIF Ultra, HIV viral load, HPV), <strong>isothermal amplification (LAMP)</strong>, syndromic respiratory and GI panels</td><td>Excellent sensitivity; detects nucleic acid, not viability; cost per cartridge; limited resistance coverage</td></tr>
      <tr><td><strong>Rapid identification from blood cultures</strong></td><td>MALDI-TOF direct from bottles, multiplex panels with <strong>resistance gene detection (<em>mecA</em>, <em>bla</em> genes, <em>vanA</em>)</strong>, rapid phenotypic AST</td><td>Hours instead of days; must still await full susceptibility for definitive therapy</td></tr>
      <tr><td><strong>Biomarkers</strong></td><td><strong>CRP- and procalcitonin-guided therapy</strong>, presepsin, host gene-expression signatures</td><td>Support stopping or withholding antibiotics; never diagnose a specific organism</td></tr>
      <tr><td><strong>Lateral flow immunoassays</strong></td><td>Carbapenemase detection, LF-LAM for TB in advanced HIV, cryptococcal antigen screening</td><td>Simple, minimal equipment; semi-quantitative</td></tr>
    </table></div>
    <h4>Stewardship benefits</h4>
    <ul>
      <li>Rapid organism and resistance identification shortens time to effective therapy in bacteraemia and allows early <strong>de-escalation</strong> — strongest when coupled with an <strong>antimicrobial stewardship team</strong> reviewing results; the test alone changes little.</li>
      <li>A high <strong>negative predictive value</strong> supports stopping antibiotics (negative MRSA PCR, negative procalcitonin trend).</li>
      <li>Influenza or SARS-CoV-2 positivity supports antivirals, isolation and withholding antibacterials.</li>
      <li>Xpert in TB allows same-day treatment and rifampicin-resistance detection — transformative in high-burden countries like the Philippines, where Xpert is the recommended initial test.</li>
    </ul>
    <h4>Limitations to state</h4>
    <p><strong>Confirmatory culture is still needed</strong> for full susceptibility and epidemiology; <strong>cost and supply chain</strong> constrain scale-up; decentralised testing requires <strong>quality control, operator training and competency</strong>, lot verification and <strong>connectivity so results are captured</strong> in the record and in surveillance. Poorly targeted rapid testing adds cost and can increase antibiotic use through incidental findings — so each test needs a defined clinical pathway and audit of its effect on prescribing and outcomes.</p>
  `,
  tip: "End on the key judgement: a rapid test adds value only if it changes a decision, and usually needs a stewardship team alongside.",
  sources: ["S12", "S6", "S9"]
}
);
