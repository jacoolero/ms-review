/* AMR — additional essays, part B: resistance biology, PK/PD practice and stewardship */
window.QBANK.push(
{
  id: "a13", domain: "amr", star: true,
  q: "Explain intrinsic resistance and why it is clinically important. Give examples across Gram-positive, Gram-negative and atypical organisms.",
  tags: ["intrinsic resistance", "permeability", "CLSI", "empirical therapy"],
  keypoints: ["species-wide chromosomally encoded", "present before antibiotic exposure", "not transferable", "Mycoplasma lacks cell wall", "Enterococcus cephalosporin resistance", "Klebsiella SHV ampicillin resistance", "Pseudomonas low permeability and efflux", "Stenotrophomonas L1 metallo-beta-lactamase", "Proteus and Serratia polymyxin resistance", "anaerobes aminoglycoside uptake", "E faecium PBP5 ampicillin resistance", "CLSI intrinsic resistance tables", "defines empirical formulary", "background for acquired resistance"],
  answer: `
    <h4>Definition and distinction from acquired resistance</h4>
    <p><strong>Intrinsic resistance</strong> is a species-wide, chromosomally encoded property present before any antibiotic exposure. It is predictable, not transferable between species, and explains why certain agents are never useful against certain organisms. <strong>Acquired resistance</strong> arises by mutation or horizontal gene transfer and varies between isolates. Confusing the two leads to unnecessary testing and, worse, to inappropriate therapy.</p>
    <h4>Mechanisms and examples</h4>
    <div class="table-wrap"><table>
      <tr><th>Organism</th><th>Intrinsic mechanism</th><th>Clinical consequence</th></tr>
      <tr><td><em>Mycoplasma</em>, <em>Ureaplasma</em></td><td>No peptidoglycan cell wall</td><td>All β-lactams inactive</td></tr>
      <tr><td><em>Enterococcus</em></td><td>Low-affinity PBPs and <em>L,D</em>-transpeptidases; intrinsic aminoglycoside-modifying enzyme</td><td>Cephalosporins unreliable; aminoglycosides only synergistic</td></tr>
      <tr><td><em>Klebsiella pneumoniae</em></td><td>Chromosomal SHV β-lactamase</td><td>Ampicillin inactive</td></tr>
      <tr><td><em>Pseudomonas aeruginosa</em></td><td>Low outer-membrane permeability, MexAB–OprM efflux, inducible AmpC</td><td>Many penicillins, macrolides and tetracyclines inactive</td></tr>
      <tr><td><em>Stenotrophomonas maltophilia</em></td><td>Chromosomal L1 metallo- and L2 serine β-lactamases</td><td>Carbapenems inactive</td></tr>
      <tr><td><em>Proteus</em>, <em>Serratia</em>, <em>Burkholderia</em></td><td>Lipid A modification or reduced binding</td><td>Polymyxins inactive</td></tr>
      <tr><td>Anaerobic bacteria</td><td>Aminoglycoside uptake requires oxygen-dependent transport</td><td>Aminoglycosides inactive</td></tr>
    </table></div>
    <p>Other examples: <em>Listeria</em> is intrinsically resistant to cephalosporins; <em>Bacteroides</em> produces chromosomal cephalosporinases; <em>E. faecium</em> carries intrinsic ampicillin resistance through PBP5.</p>
    <h4>Why it matters clinically</h4>
    <p>Intrinsic resistance defines the <strong>starting formulary</strong>; acquired resistance removes what remains. It explains why colistin should not be used for <em>Proteus</em> or <em>Serratia</em>, why cephalosporins fail in enterococcal infection, and why carbapenems fail against <em>S. maltophilia</em>. CLSI publishes intrinsic-resistance tables so that laboratories do not report these combinations as susceptible and do not waste effort confirming them.</p>
    <p>Intrinsic mechanisms also create the background for acquired resistance: porin loss and efflux potentiate β-lactamases, and AmpC derepression converts a susceptible-looking <em>Enterobacter</em> into a resistant one during therapy. Stewardship therefore begins with <strong>accurate identification</strong>, because the organism's name already predicts which drugs can work.</p>
  `,
  tip: "Define it as species-wide and pre-exposure, then use the table: no cell wall, no porin, no uptake, no target.",
  sources: ["S1", "S8", "S13"]
},
{
  id: "a14", domain: "amr",
  q: "Describe bacterial efflux pumps, their families, regulation and contribution to multidrug resistance. Why are efflux inhibitors not in clinical use?",
  tags: ["efflux pumps", "RND", "AcrAB-TolC", "biocides"],
  keypoints: ["active transport lowers intracellular drug", "proton motive force or ATP", "RND tripartite pumps", "AcrAB-TolC in Escherichia coli", "MexAB-OprM in Pseudomonas", "AdeABC in Acinetobacter", "MFS tetracycline pumps", "MATE and SMR families", "ABC-F OptrA and PoxtA", "marA soxS ramA regulators", "repressor mutation causes overexpression", "cross-resistance to biocides", "synergy with porin loss", "no licensed efflux pump inhibitor"],
  answer: `
    <h4>Definition and energy source</h4>
    <p><strong>Efflux pumps</strong> are membrane transporters that actively extrude antibiotics, biocides and host-derived molecules, lowering the intracellular drug concentration below the effective threshold. They are <strong>chromosomally encoded</strong> in almost all bacteria, which makes them a component of intrinsic resistance, but <strong>overexpression</strong> or acquisition of mobile pump genes converts them into clinically significant acquired resistance. Transport is driven either by the <strong>proton motive force</strong> or by <strong>ATP hydrolysis</strong>.</p>
    <h4>Families and examples</h4>
    <div class="table-wrap"><table>
      <tr><th>Family</th><th>Energy</th><th>Examples</th><th>Substrates</th></tr>
      <tr><td><strong>RND</strong></td><td>Proton motive force</td><td><strong>AcrAB–TolC</strong> (<em>E. coli</em>, <em>Salmonella</em>), MexAB–OprM and MexXY–OprM (<em>P. aeruginosa</em>), AdeABC and AdeIJK (<em>Acinetobacter</em>)</td><td>Broad; the main multidrug mechanism of Gram-negatives</td></tr>
      <tr><td><strong>MFS</strong></td><td>Proton motive force</td><td>Tet(A), Tet(B), NorA (<em>S. aureus</em>), Mef (macrolides)</td><td>Tetracyclines, fluoroquinolones, macrolides</td></tr>
      <tr><td><strong>SMR</strong></td><td>Proton motive force</td><td>QacC, QacD, EmrE</td><td>Quaternary ammonium compounds, dyes</td></tr>
      <tr><td><strong>MATE</strong></td><td>Sodium gradient</td><td>MepA (<em>S. aureus</em>)</td><td>Fluoroquinolones, cationic dyes</td></tr>
      <tr><td><strong>ABC</strong></td><td>ATP</td><td>LmrA, MacB</td><td>Macrolides, peptides</td></tr>
      <tr><td><strong>ABC-F</strong></td><td>ATP</td><td><strong>OptrA, PoxtA</strong></td><td>Oxazolidinones, phenicols</td></tr>
    </table></div>
    <h4>Regulation</h4>
    <p>Expression is controlled by local repressors (<em>mexR</em>, <em>nfxB</em>, <em>acrR</em>) and global regulators (<strong><em>marA</em>, <em>soxS</em>, <em>rob</em>, <em>ramA</em></strong>). A single mutation in a repressor can derepress several pumps and reduce porin expression at once, producing cross-resistance to unrelated classes. Fluoroquinolones, biocides and bile salts can select overexpressing mutants.</p>
    <h4>Clinical consequences</h4>
    <ul>
      <li>Contributes to multidrug resistance in Gram-negative infection and to the intrinsic resistance of <em>Pseudomonas</em> and <em>Acinetobacter</em>.</li>
      <li>Raises MICs for tigecycline in <em>Acinetobacter</em> and for fluoroquinolones in many species.</li>
      <li>Reduces susceptibility to disinfectants such as chlorhexidine and quaternary ammonium compounds, linking ward practice to resistance.</li>
      <li>Combined with porin loss, efflux can push carbapenem MICs above the breakpoint.</li>
    </ul>
    <h4>What can be done</h4>
    <p>No efflux-pump inhibitor is licensed; CCCP and PAβN remain laboratory tools. Management relies on <strong>susceptibility-guided choice</strong>, avoiding drugs that are pump substrates, source control and biocide stewardship. Because pumps are chromosomal, the durable strategy is to use agents with low pump affinity and to preserve them.</p>
  `,
  tip: "Anchor the answer on RND tripartite pumps, then show how one regulator mutation gives cross-class resistance.",
  sources: ["S1", "S8", "S13"]
},
{
  id: "a15", domain: "amr",
  q: "Explain how porins and outer-membrane permeability determine Gram-negative resistance, and how permeability changes interact with β-lactamases.",
  tags: ["porins", "outer membrane", "OprD", "carbapenem resistance"],
  keypoints: ["asymmetric outer membrane with LPS", "porins are trimeric beta-barrels", "OmpF and OmpC", "OmpK35 and OmpK36", "OprD imipenem uptake", "CarO in Acinetobacter", "LPS phosphoethanolamine modification", "pmrAB mgrB phoPQ", "porin loss plus beta-lactamase", "cefiderocol siderophore uptake", "carbapenemase-negative carbapenem resistance", "prolonged infusion"],
  answer: `
    <h4>The outer membrane as a barrier</h4>
    <p>The Gram-negative <strong>outer membrane</strong> is an asymmetric bilayer of lipopolysaccharide (LPS) outside and phospholipid inside. Hydrophilic drugs cross through <strong>porins</strong> — trimeric β-barrel channels — while hydrophobic drugs diffuse slowly through LPS. This architecture makes Gram-negatives intrinsically resistant to glycopeptides, daptomycin, macrolides and many hydrophobic agents, and it is the first determinant of whether a β-lactam can reach its target.</p>
    <h4>Porins and their substrates</h4>
    <div class="table-wrap"><table>
      <tr><th>Porin</th><th>Organism</th><th>Substrates</th><th>Consequence of loss</th></tr>
      <tr><td>OmpF, OmpC</td><td><em>E. coli</em></td><td>β-lactams, fluoroquinolones, tetracycline</td><td>Modest MIC rise; greater with β-lactamase</td></tr>
      <tr><td><strong>OmpK35, OmpK36</strong></td><td><em>Klebsiella</em></td><td>Cephalosporins, carbapenems</td><td>With KPC or OXA-48, high-level carbapenem resistance; also reduced ceftazidime–avibactam entry</td></tr>
      <tr><td><strong>OprD</strong></td><td><em>P. aeruginosa</em></td><td>Imipenem, meropenem</td><td>Classic carbapenem resistance, especially with AmpC</td></tr>
      <tr><td>OprF</td><td><em>P. aeruginosa</em></td><td>Small molecules</td><td>Low permeability contributes to intrinsic resistance</td></tr>
      <tr><td><strong>CarO</strong></td><td><em>A. baumannii</em></td><td>Carbapenems</td><td>With OXA-23 or OXA-24, carbapenem resistance</td></tr>
    </table></div>
    <h4>Permeability, LPS modification and synergy</h4>
    <p><strong>LPS modification</strong> — addition of phosphoethanolamine or aminoarabinose by <em>pmrAB</em>, <em>mgrB</em> or <em>phoPQ</em> — reduces the negative charge that attracts polymyxins and aminoglycosides, producing colistin resistance. Porin loss alone usually produces low-level resistance, but combined with <strong>β-lactamase production</strong> or <strong>efflux</strong> it can produce high-level resistance; the same combination can make an isolate appear resistant to a new β-lactam–inhibitor combination.</p>
    <h4>Clinical and laboratory implications</h4>
    <ul>
      <li>Carbapenem resistance in <em>Klebsiella</em> or <em>Pseudomonas</em> may be non-carbapenemase mediated, so carbapenemase tests are negative yet the isolate is resistant — treatment still depends on susceptibility, not enzyme status alone.</li>
      <li>Prolonged or high-dose infusion can overcome borderline permeability-related resistance when the MIC is only modestly raised.</li>
      <li><strong>Cefiderocol</strong> exploits siderophore iron uptake and therefore bypasses porin loss, which is one rationale for its use in multidrug-resistant Gram-negatives.</li>
      <li>Porin and LPS changes are not routinely tested; whole-genome sequencing explains outbreaks, but phenotypic susceptibility guides prescribing.</li>
    </ul>
    <p>For stewardship, the lesson is that resistant without a carbapenemase is common and must not be dismissed as a laboratory error.</p>
  `,
  tip: "Porin loss plus enzyme production is the key synergy; mention OprD for Pseudomonas and OmpK36 for Klebsiella.",
  sources: ["S1", "S8", "S13"]
},
{
  id: "a16", domain: "amr", star: true,
  q: "Compare the molecular basis, laboratory detection and clinical management of MRSA and VRE.",
  tags: ["MRSA", "VRE", "mecA", "vanA", "cefoxitin"],
  keypoints: ["mecA and PBP2a", "SCCmec cassette", "mecC variant", "cefoxitin disk surrogate", "PBP2a latex or immunochromatographic assay", "vanA D-Ala-D-Lac", "vanB teicoplanin susceptible", "vanC intrinsic low level", "broth microdilution for vancomycin", "VanA VanB PCR", "ceftaroline and ceftobiprole", "linezolid and daptomycin", "contact precautions and screening"],
  answer: `
    <h4>MRSA: the <em>mec</em> determinant</h4>
    <p>Methicillin resistance in <em>Staphylococcus aureus</em> is caused by <strong><em>mecA</em></strong> (or the variant <strong><em>mecC</em></strong>), carried on a mobile <strong>staphylococcal cassette chromosome <em>mec</em> (SCC<i>mec</i>)</strong>. The gene encodes <strong>PBP2a</strong>, a transpeptidase with low affinity for nearly all β-lactams, so the bacterium continues cell-wall synthesis when native PBPs are inhibited. <em>mecA</em> is often accompanied by resistance to other classes, and SCC<i>mec</i> type plus toxin genes distinguish hospital-associated (I–III), community-associated (IV–V, often PVL-positive) and livestock-associated (CC398) lineages.</p>
    <h4>VRE: remodelling the target</h4>
    <p>Vancomycin resistance in enterococci results from <strong><em>van</em> operons</strong>. <em>vanA</em> replaces the terminal d-Ala-d-Ala with <strong>d-Ala-d-Lac</strong>, abolishing vancomycin binding and conferring resistance to teicoplanin as well; <em>vanB</em> gives vancomycin resistance with retained teicoplanin susceptibility; <em>vanC</em> is intrinsic and low-level in <em>E. gallinarum</em> and <em>E. casseliflavus</em>. <em>vanA</em> has also transferred to <em>S. aureus</em> (VRSA), and thickened cell walls produce the intermediate VISA phenotype.</p>
    <h4>Detection</h4>
    <ul>
      <li><strong>MRSA</strong>: cefoxitin disk is the preferred surrogate for <em>mecA</em>; oxacillin MIC, PBP2a latex or immunochromatographic assay, <em>mecA</em>/<em>mecC</em> PCR, and chromogenic agar for screening. Some <em>mecC</em> isolates are missed by tests that target <em>mecA</em> only.</li>
      <li><strong>VRE</strong>: broth microdilution or agar dilution is reliable; disk diffusion is unreliable for vancomycin against enterococci. VanA/VanB PCR and chromogenic screening agar support surveillance.</li>
    </ul>
    <h4>Clinical consequences</h4>
    <p>MRSA removes anti-staphylococcal β-lactams from the formulary; options include vancomycin, daptomycin, linezolid, and the PBP2a-active cephalosporins ceftaroline and ceftobiprole, with rifampicin as an adjunct for prosthetic infection and surgery for source control. VRE limits glycopeptides; linezolid, daptomycin (not for pneumonia) and oritavancin are alternatives. Both demand <strong>contact precautions, screening and cohorting</strong>, because resistance here is spread by hands, equipment and shared wards as much as by plasmids.</p>
  `,
  tip: "Two columns in your head: mecA/PBP2a/cefoxitin for MRSA, vanA/vanB/d-Ala-d-Lac for VRE.",
  sources: ["S8", "S9", "S10"]
},
{
  id: "a17", domain: "amr", star: true,
  q: "How do critical illness, obesity, renal replacement therapy and other special situations alter antibiotic pharmacokinetics? Outline a practical dosing approach.",
  tags: ["dosing", "critical illness", "augmented renal clearance", "CRRT"],
  keypoints: ["standard doses from healthy volunteers", "loading dose depends on volume of distribution", "augmented renal clearance", "capillary leak and oedema", "hypoalbuminaemia and free drug", "renal replacement therapy clearance", "obesity and adjusted body weight", "ECMO sequestration", "neonatal maturation", "prolonged infusion", "therapeutic drug monitoring", "underdosing selects resistance"],
  answer: `
    <h4>Why standard doses fail</h4>
    <p>Most licensed doses come from healthy volunteers. Critically ill, obese, neonatal and dialysis patients differ in <strong>volume of distribution</strong>, <strong>clearance</strong>, protein binding and organ support, so the same milligram dose can produce subtherapeutic or toxic exposure. The consequence of underdosing is not only treatment failure but also <strong>selection of resistance</strong>.</p>
    <div class="table-wrap"><table>
      <tr><th>Situation</th><th>Pharmacokinetic change</th><th>Practical response</th></tr>
      <tr><td><strong>Augmented renal clearance</strong> — young, sepsis, burns, trauma</td><td>β-lactams and vancomycin cleared faster than expected</td><td>Higher or extended doses; TDM</td></tr>
      <tr><td>Capillary leak and oedema</td><td>Larger volume of distribution for hydrophilic drugs</td><td>Weight-based loading dose, then reassess</td></tr>
      <tr><td>Hypoalbuminaemia</td><td>More free drug but also altered distribution and clearance</td><td>Interpret total levels with caution</td></tr>
      <tr><td><strong>Renal replacement therapy</strong></td><td>Clearance depends on filter, effluent rate and downtime</td><td>Dose for the modality, not the serum creatinine</td></tr>
      <tr><td>Obesity</td><td>Larger volume of distribution, altered clearance</td><td>Load on actual body weight for some drugs; adjust maintenance</td></tr>
      <tr><td>ECMO</td><td>Increased volume of distribution and drug sequestration</td><td>Expect lower levels; TDM where available</td></tr>
      <tr><td>Neonates</td><td>Immature clearance, prolonged half-life</td><td>Interval by postmenstrual and postnatal age</td></tr>
    </table></div>
    <h4>Practical rules</h4>
    <ul>
      <li><strong>Load</strong> when time matters, because the loading dose depends on volume of distribution, not on renal function.</li>
      <li><strong>Maintain</strong> according to clearance; recheck renal function daily, especially in sepsis.</li>
      <li>Use <strong>prolonged or continuous infusion</strong> for β-lactams when the MIC is close to the breakpoint.</li>
      <li>Measure where possible — vancomycin, aminoglycosides and voriconazole have defined targets; β-lactam TDM is increasingly available.</li>
      <li>Do not renally dose a patient with augmented clearance into therapeutic failure.</li>
    </ul>
    <p>The stewardship message is that dose optimisation is an antimicrobial conservation strategy: adequate exposure cures infection and shortens therapy, while inadequate exposure breeds resistance.</p>
  `,
  tip: "Load on volume of distribution, maintain on clearance — then name augmented clearance and CRRT as the two exam favourites.",
  sources: ["S4", "S9", "S20"]
},
{
  id: "a18", domain: "amr", star: true,
  q: "Which antimicrobials require therapeutic drug monitoring, how should samples be taken and interpreted, and what does TDM contribute to stewardship?",
  tags: ["TDM", "vancomycin", "aminoglycosides", "voriconazole"],
  keypoints: ["narrow therapeutic index", "vancomycin AUC over MIC", "aminoglycoside peak and trough", "voriconazole trough and CYP2C19", "posaconazole absorption", "flucytosine marrow suppression", "beta-lactam TDM in critical illness", "steady state after three to five half-lives", "trough before next dose", "document dose and sampling time", "LC-MS/MS versus immunoassay", "local pathway and turnaround"],
  answer: `
    <h4>Which drugs need monitoring</h4>
    <p><strong>Therapeutic drug monitoring (TDM)</strong> measures drug concentration to individualise dose. It is most valuable for agents with a narrow therapeutic index, unpredictable pharmacokinetics or a clear exposure–response relationship.</p>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Exposure measure</th><th>Reason</th></tr>
      <tr><td><strong>Vancomycin</strong></td><td>AUC/MIC 400–600 for serious MRSA infection</td><td>Nephrotoxicity; two levels with Bayesian estimation, or a trough where AUC is unavailable</td></tr>
      <tr><td><strong>Aminoglycosides</strong></td><td>Peak (C<sub>max</sub>/MIC 8–10) and trough</td><td>Once-daily dosing; renal function and ototoxicity</td></tr>
      <tr><td><strong>Voriconazole</strong></td><td>Trough, with attention to CYP2C19 genotype and interactions</td><td>Non-linear kinetics; visual and hepatic toxicity</td></tr>
      <tr><td><strong>Posaconazole</strong></td><td>Trough for prophylaxis and treatment</td><td>Absorption depends on formulation and food</td></tr>
      <tr><td><strong>Flucytosine</strong></td><td>Peak and trough</td><td>Marrow suppression; renal clearance</td></tr>
      <tr><td>β-lactams in critical illness</td><td>Trough or continuous-infusion level</td><td>Augmented clearance and high MIC</td></tr>
    </table></div>
    <h4>Sampling and interpretation</h4>
    <p>Timing is the commonest error. Samples should be taken at <strong>steady state</strong> — after roughly three to five half-lives — with the <strong>trough immediately before the next dose</strong> and the peak at a defined interval after the end of infusion. The request must record dose, infusion time, sampling time and renal function, or the number cannot be interpreted.</p>
    <p>Interpretation integrates <strong>renal and hepatic function, albumin, interacting drugs and the assay method</strong>. Immunoassays can cross-react with metabolites; LC-MS/MS is more specific. A level that is within range in a patient with massive oedema may still be inadequate at the site of infection.</p>
    <h4>Stewardship value</h4>
    <ul>
      <li>Reduces nephrotoxicity and ototoxicity while preserving efficacy.</li>
      <li>Shortens therapy by confirming adequate exposure rather than escalating blindly.</li>
      <li>Detects non-adherence and drug interactions, especially with azoles and antiretrovirals.</li>
      <li>Requires a local pathway — who samples, who interprets, and how the result reaches the prescriber within the dosing interval.</li>
    </ul>
    <p>In resource-limited settings, TDM should be targeted to the drugs and patients where it changes management, rather than offered indiscriminately.</p>
  `,
  tip: "Give the drug, the index and the sampling rule — trough before the next dose at steady state.",
  sources: ["S8", "S9", "S13"]
},
{
  id: "a19", domain: "amr", star: true,
  q: "Discuss antibiotic allergy labels, their impact on prescribing, and the process of allergy assessment and delabeling.",
  tags: ["penicillin allergy", "delabeling", "cross-reactivity", "stewardship"],
  keypoints: ["most labels are inaccurate", "broader spectrum prescribing", "C difficile and MRSA", "immediate IgE mediated reaction", "delayed T cell reaction", "DRESS and SJS TEN", "structured history", "penicillin skin testing", "direct oral challenge in low risk", "desensitisation", "R1 side chain cross reactivity", "carbapenem cross reactivity low", "document and update record"],
  answer: `
    <h4>Why the label matters</h4>
    <p>A recorded <strong>penicillin allergy</strong> is common, but most labels are inaccurate. The label pushes prescribers towards broader-spectrum agents, which increases <strong><em>C. difficile</em> infection, MRSA and VRE, cost and length of stay</strong>. Delabeling is therefore an antimicrobial stewardship intervention, not merely an allergy clinic task.</p>
    <h4>Classify the reaction</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Timing</th><th>Examples</th><th>Action</th></tr>
      <tr><td>Immediate, IgE-mediated</td><td>Minutes to 1–2 hours</td><td>Urticaria, angioedema, bronchospasm, anaphylaxis</td><td>Avoid; skin testing and graded challenge if needed</td></tr>
      <tr><td>Delayed, T-cell mediated</td><td>6–72 hours to days</td><td>Maculopapular exanthem, DRESS, SJS/TEN, AGEP</td><td>Assess severity; severe reactions contraindicate rechallenge</td></tr>
      <tr><td>Non-immunological</td><td>Variable</td><td>Gastrointestinal upset, isolated diarrhoea, headache</td><td>Not a true allergy; can often be removed</td></tr>
    </table></div>
    <h4>Assessment and delabeling</h4>
    <ul>
      <li>Take a structured history: which drug, when, how soon, what happened, was it treated, and has it been tolerated since.</li>
      <li><strong>Penicillin skin testing</strong> with major and minor determinants, where available, identifies IgE-mediated sensitisation; a negative test is followed by a graded or direct challenge.</li>
      <li><strong>Direct oral challenge</strong> is appropriate for low-risk histories — a benign rash without mucosal involvement or systemic features — and is increasingly used without prior skin testing.</li>
      <li>For a severe infection that requires the drug, <strong>desensitisation</strong> is performed in a monitored setting.</li>
    </ul>
    <h4>Cross-reactivity</h4>
    <p>Cross-reactivity between penicillins and cephalosporins is driven mainly by <strong>identical R1 side chains</strong>, not the shared β-lactam ring, so most cephalosporins can be used. Carbapenem cross-reactivity is low. Aztreonam shares a side chain with ceftazidime, which matters in patients reacting to that cephalosporin.</p>
    <p>After evaluation, the result must be <strong>documented and the record updated</strong>; otherwise the label returns at the next admission. Pharmacist-led delabeling programmes with allergy decision algorithms are a high-yield stewardship activity.</p>
  `,
  tip: "Start with the harm of the label, classify immediate versus delayed, then name the R1 side-chain rule.",
  sources: ["S9", "S10", "S4"]
},
{
  id: "a20", domain: "amr", star: true,
  q: "Define antimicrobial de-escalation, explain when it is appropriate and describe the barriers and safety conditions.",
  tags: ["de-escalation", "antibiotic time-out", "rapid diagnostics", "stewardship"],
  keypoints: ["narrowing therapy after information", "reassess at 48 to 72 hours", "pathogen directed therapy", "stop redundant agents", "colonisation versus infection", "antimicrobial time-out", "barriers fear of deterioration", "safe in sepsis with reassessment", "rapid diagnostics with stewardship review", "reduces C difficile", "not in deteriorating patient", "neutropenic sepsis caution"],
  answer: `
    <h4>Definition</h4>
    <p><strong>De-escalation</strong> is the deliberate narrowing of antimicrobial therapy once more information is available: changing to a pathogen-directed agent, stopping redundant or unnecessary drugs, converting IV to oral, and reducing duration. It is the counterpart of appropriate empirical therapy, not its opposite.</p>
    <h4>When and how</h4>
    <ul>
      <li><strong>Reassess at 48–72 hours</strong>, or earlier if the patient is unstable or microbiology returns.</li>
      <li>Review <strong>culture and susceptibility</strong>, rapid diagnostics and biomarkers; distinguish infection from colonisation and contamination.</li>
      <li>Stop agents covering organisms that have been excluded; target the isolated pathogen; avoid duplicate anaerobic or Gram-positive cover.</li>
      <li>Narrow the spectrum, optimise dose by PK/PD, and switch to oral when criteria are met.</li>
      <li>Document the indication and the planned stop date so that the next team can act.</li>
    </ul>
    <h4>Barriers</h4>
    <p>Fear of deterioration, the belief that if it is working one should not change it, lack of timely microbiology, hierarchical prescribing and unclear ownership all sustain broad therapy. De-escalation is also inappropriate when the patient is deteriorating, when cultures are pending in neutropenic sepsis, or when a polymicrobial source has not been controlled.</p>
    <h4>Evidence and safety</h4>
    <p>Programmes that combine <strong>rapid diagnostics with stewardship review</strong> shorten time to effective therapy and increase de-escalation without increasing mortality. Reductions in broad-spectrum use are associated with lower <em>C. difficile</em> rates, less resistance selection and lower cost. The safety condition is <strong>reassessment</strong>: de-escalation is a decision made with clinical data, not a blanket rule.</p>
    <h4>Practical tool</h4>
    <p>The <strong>antibiotic time-out</strong> — a brief structured review of indication, drug, dose, route and duration — makes de-escalation routine. It works best when the stewardship team has prospective audit and feedback authority and when microbiology results are delivered with interpretation rather than as raw data.</p>
  `,
  tip: "Define it as narrowing after information, give the 48–72-hour review, then state the safety conditions.",
  sources: ["S9", "S10", "S13"]
},
{
  id: "a21", domain: "amr",
  q: "When and how should intravenous antibiotic therapy be switched to oral? Discuss criteria, suitable agents and the stewardship benefits.",
  tags: ["IV to oral", "bioavailability", "OPAT", "stewardship"],
  keypoints: ["catheter related bloodstream infection", "clinical improvement and resolving fever", "functioning gastrointestinal tract", "high oral bioavailability", "adequate tissue penetration", "endocarditis and meningitis exceptions", "amoxicillin clavulanate", "linezolid", "metronidazole", "fluoroquinolone reserve", "outpatient parenteral antibiotic therapy", "audit switch rate"],
  answer: `
    <h4>Rationale</h4>
    <p>Intravenous therapy is used for severe infection, poor absorption or an unreliable patient, but continuing it beyond need increases <strong>catheter-related bloodstream infection, phlebitis, cost, length of stay and nursing workload</strong>. <strong>IV-to-oral switch</strong> is a core stewardship action, supported by evidence of equivalent outcomes in carefully selected patients.</p>
    <h4>Criteria for switching</h4>
    <ul>
      <li>Clinical improvement and resolving fever for an appropriate period.</li>
      <li>Functioning gastrointestinal tract, with no vomiting, diarrhoea or malabsorption.</li>
      <li>An oral agent with <strong>high bioavailability</strong> and adequate tissue penetration for the site.</li>
      <li>No infection that mandates IV therapy — endocarditis, meningitis, undrained abscess, severe sepsis with shock.</li>
      <li>A reliable patient or carer, with adherence support and follow-up.</li>
    </ul>
    <h4>Suitable agents</h4>
    <div class="table-wrap"><table>
      <tr><th>Oral option</th><th>Typical use</th></tr>
      <tr><td>Amoxicillin, amoxicillin–clavulanate</td><td>Respiratory, dental, skin and soft-tissue infection</td></tr>
      <tr><td>Cefalexin, cefuroxime axetil</td><td>Skin, urinary and respiratory infection</td></tr>
      <tr><td>Fluoroquinolones</td><td>Urinary, gastrointestinal and some bone infection — reserve because of toxicity and resistance</td></tr>
      <tr><td>Linezolid</td><td>MRSA and VRE infection; high bioavailability</td></tr>
      <tr><td>Metronidazole, clindamycin</td><td>Anaerobic infection; good oral absorption</td></tr>
      <tr><td>Doxycycline, azithromycin</td><td>Atypical pneumonia, chlamydia, some skin infection</td></tr>
      <tr><td>Fluconazole</td><td>Susceptible candidaemia step-down and mucosal infection</td></tr>
    </table></div>
    <p>Vancomycin, aminoglycosides and most β-lactams other than the oral options above are not suitable for switch.</p>
    <h4>Implementation</h4>
    <p>Embed the switch in the ward round and in electronic order sets; make the oral formulation available on the ward; audit switch rates as a stewardship metric. In <strong>outpatient parenteral antibiotic therapy</strong>, the same reasoning applies in reverse — do not choose IV simply because a service exists. The question is always whether the oral route delivers adequate exposure at the site of infection.</p>
  `,
  tip: "Three gates: patient improving, gut working, and an oral drug with high bioavailability that reaches the site.",
  sources: ["S9", "S4", "S10"]
},
{
  id: "a22", domain: "amr", star: true,
  q: "Critically discuss the duration of antibiotic therapy. What determines duration, and why are shorter courses increasingly preferred?",
  tags: ["duration", "short course", "procalcitonin", "source control"],
  keypoints: ["fixed courses are convention not biology", "shorter courses non-inferior", "site of infection determines duration", "endocarditis and osteomyelitis exceptions", "S aureus bacteraemia assessment", "host immune status", "source control", "clinical stability", "stop date at prescribing", "procalcitonin guided", "each day selects resistance", "C difficile risk"],
  answer: `
    <h4>The traditional course is not evidence-based</h4>
    <p>Fixed courses of 7, 10 or 14 days became convention rather than a biological requirement. Trials in <strong>community-acquired pneumonia, urinary tract infection, intra-abdominal infection and cellulitis</strong> show that shorter courses are non-inferior when the source is controlled and the patient responds. Prolonged therapy adds resistance selection, <em>C. difficile</em>, toxicity and cost without benefit.</p>
    <h4>Determinants of duration</h4>
    <ul>
      <li><strong>Site</strong> — endocarditis, osteomyelitis, CNS infection and undrained abscess need longer treatment; uncomplicated UTI and cellulitis need short courses.</li>
      <li><strong>Pathogen</strong> — <em>S. aureus</em> bacteraemia requires careful assessment for metastatic infection; multidrug-resistant Gram-negatives with limited options may need individualised duration.</li>
      <li><strong>Host</strong> — neutropenia, immunosuppression, diabetes and poor vascular supply slow resolution.</li>
      <li><strong>Source control</strong> — drainage, debridement and device removal shorten duration more than any drug change.</li>
      <li><strong>Response</strong> — clinical stability, afebrile period, biomarker trend and repeat imaging where relevant.</li>
    </ul>
    <h4>Practical approach</h4>
    <p>Prescribe a <strong>stop date</strong> at initiation and review it. Use the shortest course that is supported by evidence for that syndrome, and extend only for a documented reason. <strong>Procalcitonin-guided</strong> and CRP-guided algorithms can reduce duration in respiratory infection, but they support, not replace, clinical judgement. In sepsis, do not stop early while the patient is unstable or the source is uncontrolled.</p>
    <h4>Why it matters for resistance</h4>
    <p>Every additional day of antibiotic exposure increases the probability that commensal flora will be replaced by resistant organisms and that <em>C. difficile</em> will emerge. Duration is therefore a <strong>modifiable driver of resistance</strong>, and completing the course should mean completing the appropriate course, not a fixed number chosen by habit.</p>
  `,
  tip: "Say 'shortest effective course', list the exceptions, and end with duration as a modifiable resistance driver.",
  sources: ["S9", "S4", "S13"]
},
{
  id: "a23", domain: "amr",
  q: "Discuss colistin: mechanism, spectrum, resistance, pharmacology and its place in therapy for multidrug-resistant Gram-negative infection.",
  tags: ["colistin", "polymyxin", "mcr", "heteroresistance"],
  keypoints: ["cationic lipopeptide binds lipid A", "colistimethate is a prodrug", "polymyxin B is active drug", "intrinsic resistance in Proteus and Serratia", "poor lung penetration", "nephrotoxicity", "heteroresistance", "pmrAB mgrB phoPQ", "plasmid mcr genes", "colistin base activity versus international units", "loading dose and renal adjustment", "reserve for MDR Gram negatives"],
  answer: `
    <h4>Chemistry and mechanism</h4>
    <p><strong>Colistin (polymyxin E)</strong> is a cationic lipopeptide. It binds <strong>lipid A</strong> of lipopolysaccharide, displaces divalent cations and disrupts the outer membrane, producing rapid concentration-dependent killing. Clinically it is given as <strong>colistimethate sodium</strong>, an inactive prodrug that is hydrolysed to colistin; <strong>polymyxin B</strong> is administered as the active drug. This difference explains their distinct pharmacokinetics and the confusion between dosing units.</p>
    <h4>Spectrum and limitations</h4>
    <ul>
      <li>Active against many Gram-negative bacilli, including carbapenem-resistant <em>Acinetobacter</em>, <em>Pseudomonas</em> and <em>Klebsiella</em>.</li>
      <li><strong>Intrinsically inactive</strong> against <em>Proteus</em>, <em>Serratia</em>, <em>Burkholderia</em>, <em>Neisseria</em>, Gram-positives and anaerobes.</li>
      <li>Poor lung penetration and high nephrotoxicity; neurotoxicity is less common.</li>
      <li>Heteroresistance is common and can be missed by routine susceptibility testing.</li>
    </ul>
    <h4>Resistance</h4>
    <p>Chromosomal resistance arises through <strong><em>pmrAB</em>, <em>mgrB</em> and <em>phoPQ</em></strong> mutations that add phosphoethanolamine or aminoarabinose to lipid A, reducing binding. Plasmid-borne <strong><em>mcr</em> genes</strong>, first described as <em>mcr-1</em>, encode a phosphoethanolamine transferase and can spread between species, including from animals to humans. Because colistin is a last-resort agent, any resistance is a stewardship and public health event.</p>
    <h4>Clinical use</h4>
    <p>Colistin is reserved for <strong>multidrug-resistant Gram-negative infection</strong> when alternatives are unavailable or as part of combination therapy. Dose is expressed in <strong>colistin base activity</strong> or international units, and unit confusion is a recognised source of error. A loading dose is used, renal adjustment is required, and combination with a second active agent is preferred where possible. Nebulised colistin is used as an adjunct in some settings, with uncertain benefit.</p>
    <p>The stewardship priorities are to <strong>avoid empirical colistin</strong>, use it only when susceptibility supports it, and prevent agricultural misuse that selects <em>mcr</em>-carrying organisms.</p>
  `,
  tip: "Prodrug versus active drug, lipid A binding, and the mcr plasmid story — then say it is a last-resort drug.",
  sources: ["S8", "S7", "S9"]
},
{
  id: "a24", domain: "amr",
  q: "What is antifungal stewardship? Describe its core actions, the resistance threats it addresses and the metrics used to evaluate it.",
  tags: ["antifungal stewardship", "azole resistance", "TDM", "Candida auris"],
  keypoints: ["few antifungal classes", "diagnostic stewardship galactomannan", "beta-D-glucan", "treat disease not colonisation", "de-escalation to fluconazole", "IV to oral azole switch", "voriconazole and posaconazole TDM", "CYP drug interactions", "catheter removal in candidaemia", "cyp51A TR34 L98H", "Candidozyma auris", "FKS echinocandin resistance", "antifungal days of therapy"],
  answer: `
    <h4>Why a separate programme</h4>
    <p>Antifungal stewardship addresses the same questions as antibacterial stewardship — right drug, dose, duration and route — but the context differs: <strong>few drug classes</strong>, high cost, substantial toxicity, important drug interactions and rising resistance. Invasive fungal infection is often diagnosed late, so both under- and over-treatment are common.</p>
    <h4>Core actions</h4>
    <ul>
      <li><strong>Diagnostic stewardship</strong>: use culture, <strong>galactomannan</strong>, <strong>β-D-glucan</strong>, PCR and imaging appropriately; do not treat colonisation.</li>
      <li><strong>Empirical versus pre-emptive</strong> therapy in high-risk haematology patients, guided by risk and biomarkers.</li>
      <li><strong>De-escalation</strong>: move from an echinocandin to fluconazole when the isolate is susceptible and the patient is stable; stop unnecessary combination therapy.</li>
      <li><strong>IV-to-oral</strong> switch for azoles with good bioavailability.</li>
      <li><strong>TDM</strong> for voriconazole and posaconazole, and attention to CYP interactions.</li>
      <li><strong>Source control</strong>: remove central venous catheters in candidaemia, and involve surgery early in mucormycosis.</li>
    </ul>
    <h4>Resistance</h4>
    <p>Azole resistance in <em>Aspergillus fumigatus</em> is driven by <em>cyp51A</em> mutations, including <strong>TR34/L98H</strong>, selected by agricultural fungicides; this is a One Health problem. <em>Candidozyma (Candida) auris</em> is often multidrug-resistant and spreads in hospitals. Echinocandin resistance follows <strong><em>FKS</em></strong> mutations. Antifungal choice must therefore be guided by local epidemiology and susceptibility testing, not habit.</p>
    <h4>Measuring the programme</h4>
    <p>Track antifungal <strong>days of therapy</strong>, cost, TDM compliance, time to appropriate therapy and mortality in candidaemia. Audit whether prophylaxis is restricted to genuinely high-risk haematology and transplant patients, and whether combination therapy is used only for defined indications such as cryptococcal meningitis. The greatest gains come from stopping unnecessary empirical therapy, shortening duration after source control, and ensuring that expensive agents reach the patients who need them.</p>
  `,
  tip: "Mirror antibacterial stewardship, then add the antifungal specifics: TDM, CYP interactions and cyp51A resistance.",
  sources: ["S18", "S9", "S13"]
},
{
  id: "a25", domain: "amr",
  q: "Outline the principles of antiviral stewardship and the main mechanisms of antiviral resistance, with clinical examples.",
  tags: ["antiviral stewardship", "resistance", "CMV", "HIV"],
  keypoints: ["fewer drug targets than bacteria", "resistance in immunocompromised hosts", "vaccination as prevention", "detection does not equal disease", "influenza H275Y", "baloxavir I38T", "HSV thymidine kinase", "CMV UL97 and UL54", "HIV M184V and K65R", "HBV YMDD", "HCV NS5A", "combination therapy prevents resistance", "resistance testing on failure"],
  answer: `
    <h4>What is different about antivirals</h4>
    <p>Antiviral stewardship applies the same principles — right indication, drug, dose and duration — to a different biology. Viruses have <strong>fewer drug targets</strong>, resistance emerges readily in immunocompromised hosts and during prolonged therapy, and <strong>vaccination and infection control</strong> are more powerful prevention tools than any drug. Diagnostic stewardship matters because detecting nucleic acid does not always mean disease.</p>
    <h4>Resistance mechanisms</h4>
    <div class="table-wrap"><table>
      <tr><th>Virus</th><th>Drug</th><th>Resistance mechanism</th></tr>
      <tr><td>Influenza A</td><td>Oseltamivir</td><td><strong>H275Y</strong> in neuraminidase; baloxavir <em>I38T</em></td></tr>
      <tr><td>Herpes simplex</td><td>Aciclovir</td><td><strong>Thymidine kinase</strong> deficiency or altered DNA polymerase</td></tr>
      <tr><td>Cytomegalovirus</td><td>Ganciclovir</td><td><strong>UL97</strong> kinase and <strong>UL54</strong> polymerase mutations</td></tr>
      <tr><td>HIV</td><td>Lamivudine, tenofovir, integrase inhibitors</td><td><em>M184V</em>, <em>K65R</em>, <em>Q148</em>/<em>N155</em>; adherence is the main driver</td></tr>
      <tr><td>Hepatitis B</td><td>Lamivudine</td><td>Polymerase YMDD mutations; tenofovir has a high barrier</td></tr>
      <tr><td>Hepatitis C</td><td>NS5A inhibitors</td><td>NS5A resistance-associated substitutions</td></tr>
    </table></div>
    <h4>Stewardship in practice</h4>
    <ul>
      <li>Treat <strong>proven disease</strong>: influenza in high-risk patients, CMV disease rather than asymptomatic reactivation, HSV in immunocompromised hosts.</li>
      <li>Optimise dose for renal function and weight; ensure adherence, especially in HIV and HBV, where intermittent therapy selects resistance.</li>
      <li>Use <strong>combination therapy</strong> where resistance prevention is essential — HIV, HBV and HCV — and avoid unnecessary monotherapy.</li>
      <li>Stop prophylaxis when the risk period ends; review duration.</li>
      <li>Use <strong>resistance testing</strong> when treatment fails, rather than empirically switching.</li>
    </ul>
    <p>The stewardship message is that vaccines, early diagnosis and infection control prevent more antiviral use than any restriction policy.</p>
    <p>Two further disciplines matter. <strong>Diagnostic stewardship</strong> avoids treating incidental viral detection, such as CMV viraemia without end-organ disease. <strong>Prophylaxis review</strong> ensures that agents started during profound immunosuppression are stopped when immune recovery occurs, because open-ended prophylaxis selects resistance and adds toxicity.</p>
  `,
  tip: "Name one resistance mutation per virus, then say why combination therapy and adherence protect the drug.",
  sources: ["S9", "S11", "S13"]
},
{
  id: "a26", domain: "amr", star: true,
  q: "Discuss drug-resistant tuberculosis: definitions, molecular mechanisms, detection and current treatment principles.",
  tags: ["MDR-TB", "XDR-TB", "rpoB", "BPaLM"],
  keypoints: ["RR-TB rifampicin resistance", "MDR-TB isoniazid plus rifampicin", "pre-XDR adds fluoroquinolone", "XDR adds bedaquiline or linezolid", "rpoB 81-bp RRDR", "katG and inhA", "gyrA fluoroquinolone", "pncA pyrazinamide", "Xpert MTB RIF Ultra", "line probe assay", "whole-genome sequencing", "BPaLM all-oral regimen", "never add a single drug", "DOT and toxicity monitoring"],
  answer: `
    <h4>The burden and the definitions</h4>
    <p>Drug-resistant tuberculosis is a public health emergency, and the Philippines is among the countries with the highest MDR/RR-TB burden. <strong>RR-TB</strong> is resistance to rifampicin; <strong>MDR-TB</strong> adds isoniazid resistance; <strong>pre-XDR</strong> adds fluoroquinolone resistance; <strong>XDR</strong> adds resistance to bedaquiline or linezolid in addition to a fluoroquinolone.</p>
    <h4>Molecular mechanisms</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Gene(s)</th></tr>
      <tr><td>Rifampicin</td><td><strong><em>rpoB</em></strong> (81-bp RRDR)</td></tr>
      <tr><td>Isoniazid</td><td><strong><em>katG</em></strong>, <em>inhA</em> promoter</td></tr>
      <tr><td>Fluoroquinolones</td><td><strong><em>gyrA</em></strong>, <em>gyrB</em></td></tr>
      <tr><td>Pyrazinamide</td><td><strong><em>pncA</em></strong></td></tr>
      <tr><td>Ethambutol</td><td><em>embB</em></td></tr>
      <tr><td>Bedaquiline</td><td><em>atpE</em>, <em>Rv0678</em></td></tr>
      <tr><td>Linezolid</td><td><em>rrl</em>, <em>rplC</em></td></tr>
    </table></div>
    <h4>Detection</h4>
    <p><strong>Xpert MTB/RIF Ultra</strong> is the initial test and detects rifampicin resistance; first- and second-line <strong>line probe assays</strong> add isoniazid and fluoroquinolone information; <strong>culture and phenotypic drug-susceptibility testing</strong> remain necessary for drugs without reliable molecular markers; <strong>whole-genome sequencing</strong> is increasingly used for complex resistance. Rapid detection matters because ineffective regimens amplify resistance and transmit it.</p>
    <h4>Treatment and stewardship</h4>
    <p>WHO now recommends <strong>all-oral shorter regimens</strong>, including <strong>BPaLM</strong> (bedaquiline, pretomanid, linezolid, moxifloxacin) for MDR/RR-TB, and a 9-month all-oral regimen in eligible patients. Longer regimens use group A drugs (fluoroquinolone, bedaquiline, linezolid), group B (clofazimine, cycloserine) and group C agents. Principles: <strong>never add a single drug</strong> to a failing regimen, ensure adherence with directly observed therapy and adherence support, monitor toxicity (linezolid myelosuppression, bedaquiline QT prolongation), and combine treatment with <strong>infection control, contact tracing and preventive therapy</strong>.</p>
    <p>Programmatic management is part of stewardship. Every regimen needs a documented susceptibility profile, a named treatment supporter, and monitoring for vision loss, neuropathy, hepatitis and cardiac rhythm. Treating drug-resistant TB with an inadequate regimen does not merely fail the patient; it creates transmissible resistance in the household and the community.</p>
  `,
  tip: "Definitions first, then the gene table, then BPaLM — and the rule never to add a single drug.",
  sources: ["S6", "S11", "S8"]
},
{
  id: "a27", domain: "amr",
  q: "Why is the antimicrobial pipeline failing, and what push and pull incentives are proposed to fix it? Discuss access and stewardship together.",
  tags: ["pipeline", "market failure", "subscription model", "access"],
  keypoints: ["cheap short duration drugs", "stewardship restricts use", "scientific difficulty in Gram negatives", "thin pipeline for oral and paediatric agents", "carbapenem-resistant Acinetobacter gap", "push incentives grants and partnerships", "CARB-X and GARDP", "pull incentives market entry reward", "subscription delinkage model", "advance market commitment", "tiered pricing and licensing", "WHO priority pathogens list"],
  answer: `
    <h4>The market failure</h4>
    <p>Antimicrobials are cheap, used for short periods, and stewardship deliberately restricts them — three features that make them unattractive investments. Development is scientifically hard: Gram-negative permeability, efflux and target redundancy defeat many candidates, and clinical trials require patients with resistant pathogens who are often excluded or unavailable. The result is a <strong>thin pipeline</strong>, especially for oral agents, paediatric formulations and pathogens such as carbapenem-resistant <em>Acinetobacter</em>.</p>
    <h4>What is missing</h4>
    <ul>
      <li>Agents active against <strong>metallo-β-lactamases</strong> and <strong>carbapenem-resistant <em>Acinetobacter</em></strong>.</li>
      <li><strong>Oral</strong> options for step-down and outpatient therapy.</li>
      <li>Paediatric formulations and dosing data.</li>
      <li>Rapid diagnostics that identify resistance at the point of care.</li>
      <li>Vaccines against major resistant pathogens.</li>
    </ul>
    <h4>Push and pull incentives</h4>
    <p><strong>Push</strong> mechanisms fund research and early development: public grants, public–private partnerships, tax credits, and non-profit developers such as GARDP and CARB-X. <strong>Pull</strong> mechanisms reward a successful product: market entry rewards, advance market commitments, and <strong>subscription models</strong> that pay for access rather than volume, so that a company earns revenue even if stewardship limits use. Transferable exclusivity vouchers and delinkage proposals aim at the same problem.</p>
    <h4>Access and stewardship together</h4>
    <p>A new drug that is unavailable to the patients who need it, or that is used indiscriminately once launched, fails either way. Registration, tiered pricing, voluntary licensing, technology transfer and local manufacturing must accompany innovation. The WHO <strong>Bacterial Priority Pathogens List</strong> guides research targets, and national action plans should include both <strong>access</strong> and <strong>conservation</strong>. The pipeline is therefore not only a scientific problem but a financing and equity problem.</p>
  `,
  tip: "Frame it as a market failure, separate push from pull, and close on access plus conservation.",
  sources: ["S7", "S23", "S13"]
},
{
  id: "a28", domain: "amr",
  q: "How does antimicrobial dosing and stewardship differ in neonates and children? Include practical prescribing safeguards.",
  tags: ["paediatric dosing", "neonates", "formulations", "stewardship"],
  keypoints: ["weight and age based dosing", "immature glomerular filtration", "postmenstrual and postnatal age", "higher clearance per kilogram in young children", "higher total body water", "ceftriaxone and bilirubin", "ceftriaxone and calcium precipitation", "tetracycline dental staining", "sulfonamide kernicterus", "chloramphenicol grey baby", "lack of paediatric formulations", "avoid antibiotics for viral illness"],
  answer: `
    <h4>Why children are not small adults</h4>
    <p>Paediatric dosing depends on <strong>weight, age and maturation</strong>. Neonates have immature glomerular filtration and hepatic enzymes, so half-lives are prolonged and dosing intervals must be extended according to <strong>postmenstrual and postnatal age</strong>; infants and young children often clear β-lactams faster than adults per kilogram, so larger mg/kg doses may be needed. Body composition — higher total body water — increases the volume of distribution for hydrophilic drugs.</p>
    <h4>Practical cautions</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug or class</th><th>Paediatric issue</th></tr>
      <tr><td><strong>Ceftriaxone</strong></td><td>Avoid in neonates with hyperbilirubinaemia (bilirubin displacement) and with calcium-containing fluids (precipitation)</td></tr>
      <tr><td>Tetracyclines</td><td>Dental staining and bone effects; avoided in young children except specific indications</td></tr>
      <tr><td>Fluoroquinolones</td><td>Cartilage concerns; reserved for serious infection without alternatives</td></tr>
      <tr><td>Sulfonamides</td><td>Kernicterus risk in neonates</td></tr>
      <tr><td>Chloramphenicol</td><td>Grey baby syndrome; avoid in neonates</td></tr>
      <tr><td>Aminoglycosides, vancomycin</td><td>Narrow therapeutic index; dose by age and weight, with TDM</td></tr>
    </table></div>
    <h4>Formulation and safety</h4>
    <p>Lack of child-friendly formulations leads to crushing, extemporaneous compounding, dosing errors and poor palatability. Prescribe in millilitres and milligrams with a weight documented, use a validated dosing reference, and double-check high-risk drugs. Liquid formulations may need refrigeration and have short stability.</p>
    <h4>Stewardship priorities</h4>
    <ul>
      <li>Avoid antibiotics for viral upper respiratory infection and acute otitis media where observation is appropriate.</li>
      <li>Use narrow-spectrum agents and the shortest effective course; children are a major reservoir of antibiotic exposure.</li>
      <li>Follow local neonatal sepsis guidelines rather than broad empirical escalation.</li>
      <li>Review doses as weight and renal function change during a long admission.</li>
    </ul>
    <p>Neonatal units deserve particular attention: group B streptococcal and Gram-negative sepsis require prompt, weight-adjusted therapy, and prolonged empirical courses in a stable infant should be stopped once cultures are negative. Parents and carers should be given a clear explanation of why an antibiotic is or is not needed, because paediatric prescribing is where lifelong attitudes to antibiotics are formed.</p>
  `,
  tip: "Weight, maturation and formulation — plus ceftriaxone in the neonate as the classic safety point.",
  sources: ["S4", "S9", "S11"]
},
{
  id: "a29", domain: "amr",
  q: "Explain the cumulative antibiogram, how it should be interpreted and how selective and cascade reporting are used to steer prescribing.",
  tags: ["antibiogram", "cascade reporting", "breakpoints", "stewardship"],
  keypoints: ["first isolate per patient per episode", "annual cumulative susceptibility", "CLSI M39", "percent susceptible not MIC", "stratify by site and ward", "small denominators", "cascade reporting", "suppressed reporting of intrinsic resistance", "inducible AmpC report as resistant", "D-test and clindamycin", "CLSI versus EUCAST", "susceptible increased exposure"],
  answer: `
    <h4>What a cumulative antibiogram is</h4>
    <p>A <strong>cumulative antibiogram</strong> summarises susceptibility results for a defined period and population, usually annually. It supports empirical prescribing, guideline development and stewardship audit. Standard methods — CLSI M39 — require analysis of the <strong>first isolate per patient per episode</strong>, exclusion of surveillance and duplicate isolates, and a minimum number of isolates before a percentage is reported.</p>
    <h4>Reading it correctly</h4>
    <ul>
      <li>It reports <strong>percent susceptible</strong>, not MIC distributions; it cannot tell you whether an individual patient will respond.</li>
      <li>Stratify by <strong>specimen site, ward and community versus hospital</strong>; urinary isolates from outpatients are not representative of ICU pneumonia.</li>
      <li>Small denominators produce unstable percentages; note the number of isolates.</li>
      <li>Colonising and contaminating isolates distort the picture.</li>
      <li>Breakpoint changes and taxonomy updates affect comparability over time.</li>
    </ul>
    <h4>Selective and cascade reporting</h4>
    <div class="table-wrap"><table>
      <tr><th>Strategy</th><th>Example</th><th>Purpose</th></tr>
      <tr><td><strong>Cascade reporting</strong></td><td>Report narrower agents first; release broader agents only when needed</td><td>Steer prescribing towards narrow-spectrum drugs</td></tr>
      <tr><td><strong>Suppressed reporting</strong></td><td>Do not report intrinsic resistance or redundant duplicates</td><td>Reduce noise and unnecessary testing</td></tr>
      <tr><td><strong>Resistance-phenotype reporting</strong></td><td>Report inducible AmpC or D-test positivity as resistant</td><td>Prevent treatment failure</td></tr>
      <tr><td><strong>Selective reporting for <em>S. aureus</em></strong></td><td>Suppress penicillins for <em>mecA</em>-positive isolates</td><td>Avoid inappropriate β-lactam use</td></tr>
    </table></div>
    <h4>Breakpoints and interpretation</h4>
    <p>CLSI and EUCAST differ in methods and in the meaning of the <strong>intermediate</strong> category; EUCAST defines it as susceptible, increased exposure. A report must state the system used. The laboratory should add comments — for example, that a carbapenem-resistant isolate needs carbapenemase testing — and communicate <strong>alert organisms</strong> directly to infection control and the prescriber.</p>
  `,
  tip: "First isolate per patient per episode, percent susceptible, then cascade reporting as the stewardship lever.",
  sources: ["S8", "S24", "S9"]
},
{
  id: "a30", domain: "amr",
  q: "How does vaccination reduce antimicrobial resistance? Discuss examples, limitations and the link to stewardship and One Health.",
  tags: ["vaccines", "AMR", "pneumococcal", "One Health"],
  keypoints: ["prevent infection prevents antibiotic exposure", "reduce transmission", "pneumococcal conjugate vaccine", "serotype replacement", "Haemophilus influenzae type b", "typhoid conjugate vaccine", "rotavirus vaccine", "influenza and secondary pneumonia", "herd immunity and coverage", "no licensed vaccine for gonorrhoea", "veterinary vaccines reduce antibiotic use", "national action plan"],
  answer: `
    <h4>The mechanism</h4>
    <p>Vaccines reduce antimicrobial resistance by <strong>preventing infection</strong>, and therefore preventing the antibiotic exposure that selects resistance. They also reduce transmission, complications and the need for empirical therapy. This makes immunisation a structural AMR intervention rather than an alternative to stewardship.</p>
    <h4>Examples</h4>
    <div class="table-wrap"><table>
      <tr><th>Vaccine</th><th>Target</th><th>AMR relevance</th></tr>
      <tr><td><strong>Pneumococcal conjugate</strong></td><td><em>S. pneumoniae</em></td><td>Reduces invasive disease, pneumonia and antibiotic use; resistant serotypes decline, with some replacement</td></tr>
      <tr><td>Haemophilus influenzae type b</td><td>Hib</td><td>Prevents meningitis and pneumonia</td></tr>
      <tr><td><strong>Typhoid conjugate</strong></td><td><em>Salmonella</em> Typhi</td><td>Counters fluoroquinolone- and cephalosporin-resistant typhoid</td></tr>
      <tr><td>Rotavirus</td><td>Rotavirus</td><td>Reduces diarrhoea and unnecessary antibiotics</td></tr>
      <tr><td>Influenza</td><td>Influenza</td><td>Reduces secondary bacterial pneumonia and antiviral use</td></tr>
      <tr><td>Measles, pertussis</td><td>Respiratory pathogens</td><td>Prevents complications that drive antibiotic prescribing</td></tr>
    </table></div>
    <h4>Limits</h4>
    <p><strong>Serotype replacement</strong> can erode pneumococcal benefit; coverage must be high to produce herd effects; cost, cold chain and vaccine hesitancy limit impact; and effective vaccines against <em>S. aureus</em>, gonorrhoea and adult pulmonary TB remain elusive, although candidates are in trials. Vaccines against animal pathogens also reduce veterinary antibiotic use, which is a One Health benefit.</p>
    <h4>Stewardship link</h4>
    <p>National action plans on AMR should include immunisation targets alongside stewardship, infection prevention and surveillance. Clinicians can contribute by <strong>checking vaccination status</strong>, vaccinating before immunosuppression and splenectomy, and using vaccines to avoid unnecessary antibiotic prescriptions. Prevention is the only intervention that reduces resistance without selecting for it.</p>
    <p>Equity matters here too. A vaccine that is available only in high-income countries will not reduce global resistance, because resistant organisms travel. Financing through Gavi and national immunisation programmes, together with investment in new vaccines for priority pathogens, should therefore be treated as part of the antimicrobial resistance agenda rather than as a separate public health programme.</p>
  `,
  tip: "Prevent infection, prevent antibiotic exposure — then give PCV, TCV and influenza, and admit serotype replacement.",
  sources: ["S7", "S23", "S11"]
}
);
