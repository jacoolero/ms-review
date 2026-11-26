/* AMR — additional essays, part C: Philippine policy and advanced therapeutics */
window.QBANK.push(
{
  id: "a31", domain: "amr", star: true,
  q: "Describe the Philippine Action Plan on Antimicrobial Resistance and the national surveillance architecture. How does GLASS participation inform stewardship?",
  tags: ["Philippines", "NAP-AMR", "ARSP", "GLASS"],
  keypoints: ["Philippine Action Plan to Combat Antimicrobial Resistance", "One Health inter-agency governance", "DOH Administrative Order 2016-0003", "Antimicrobial Resistance Surveillance Program", "Research Institute for Tropical Medicine", "sentinel hospital laboratories", "WHO GLASS reporting", "hospital antibiogram", "CLSI breakpoints", "private hospital under-representation", "veterinary and environmental data gaps", "alert organism notification", "feedback to prescribers", "Bacterial Priority Pathogens List"],
  answer: `
    <h4>Policy architecture</h4>
    <p>The <strong>Philippine Action Plan to Combat Antimicrobial Resistance</strong> turns the WHO Global Action Plan into a One Health programme led by the Department of Health with the Department of Agriculture, the Department of Environment and Natural Resources, and the Food and Drug Administration. Its pillars are awareness, surveillance and research, infection prevention and control, optimal antimicrobial use, and sustainable investment. Implementation depends on hospital antimicrobial stewardship committees required by <strong>DOH Administrative Order 2016-0003</strong>, laboratory licensing standards, and inter-agency governance rather than a single vertical programme.</p>
    <h4>Surveillance pathway</h4>
    <p>The <strong>Antimicrobial Resistance Surveillance Program (ARSP)</strong> is the national platform, coordinated by the <strong>Research Institute for Tropical Medicine</strong> as reference laboratory. Sentinel hospital laboratories submit isolate-level susceptibility results, which are validated, aggregated and reported nationally and to <strong>WHO GLASS</strong>. The pathway runs from the ward specimen to the hospital antibiogram, then to ARSP, then to GLASS, and back to prescribers as guidance.</p>
    <div class="table-wrap"><table>
      <tr><th>Level</th><th>Function</th><th>Philippine example</th></tr>
      <tr><td>Ward and laboratory</td><td>Susceptibility testing, alert organisms</td><td>CLSI breakpoints, carbapenemase testing</td></tr>
      <tr><td>Hospital</td><td>Antibiogram, stewardship</td><td>AMS committee, days-of-therapy monitoring</td></tr>
      <tr><td>National</td><td>Validation, aggregation, policy</td><td>ARSP, RITM, DOH</td></tr>
      <tr><td>Global</td><td>Benchmarking, priority setting</td><td>GLASS, Bacterial Priority Pathogens List</td></tr>
    </table></div>
    <h4>Strengths and gaps</h4>
    <ul>
      <li><strong>Strengths:</strong> a long-running ARSP, reference laboratory capacity, mandatory stewardship structures, and strong reporting within the TB and HIV programmes.</li>
      <li><strong>Gaps:</strong> under-representation of private hospitals, variable susceptibility testing quality, limited veterinary and environmental data, reporting delay, and denominators that mix colonisation with infection.</li>
    </ul>
    <p>For stewardship, the value of GLASS is comparative: it shows where Philippine resistance proportions exceed regional benchmarks and where empirical guidelines must change. The laboratory contributes quality-assured testing, cascade reporting and timely alert-organism notification. Without feedback to prescribers, surveillance becomes an archive rather than a control measure.</p>
  `,
  tip: "Name the plan, ARSP and RITM, GLASS and one gap — then say what the ward laboratory does with the data.",
  sources: ["S31", "S33", "S14", "S23"]
},
{
  id: "a32", domain: "amr", star: true,
  q: "Describe antibiotic use in Filipino hospitals and communities and the main drivers of inappropriate prescribing. Which stewardship interventions fit this setting?",
  tags: ["Philippines", "antibiotic use", "self-medication", "stewardship"],
  keypoints: ["self-medication", "leftover antibiotics", "sari-sari stores", "prescription-only dispensing", "out-of-pocket payment", "third-generation cephalosporins", "prolonged surgical prophylaxis", "cultures after antibiotics", "stewardship committees", "AWaRe classification", "prospective audit and feedback", "IV-to-oral switch", "local antibiogram", "patient demand", "diagnostic uncertainty"],
  answer: `
    <h4>Community use</h4>
    <p>In Filipino communities, antibiotics are often obtained without a valid prescription from pharmacies, community drugstores and even sari-sari stores. Fever, cough, sore throat and acute diarrhoea are commonly self-treated with leftover or shared antibiotics, and courses are stopped when symptoms resolve. Out-of-pocket payment, consultation cost, distance from a health facility and low health literacy all push patients towards immediate access rather than diagnosis. The result is substantial use of broad-spectrum agents for conditions that are viral or self-limiting.</p>
    <h4>Hospital use</h4>
    <p>Hospital point-prevalence studies in the Philippines consistently show heavy prescribing of third-generation cephalosporins, carbapenems and fluoroquinolones, with prolonged surgical prophylaxis and empirical treatment continued after cultures are available. Blood and other cultures are often collected after antibiotics have started, and access to rapid diagnostics is uneven outside tertiary centres. Stewardship committees exist, but authority, staffing and information systems vary widely.</p>
    <h4>Drivers</h4>
    <ul>
      <li>Diagnostic uncertainty and fear of deterioration, especially in crowded emergency departments.</li>
      <li>Patient demand and the belief that injections and antibiotics are stronger medicine.</li>
      <li>Pharmaceutical promotion, pharmacy incentives and weak enforcement of prescription-only dispensing.</li>
      <li>Limited laboratory access, delayed results and poor feedback of susceptibility data.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Setting</th><th>Typical pattern</th><th>Stewardship lever</th></tr>
      <tr><td>Community</td><td>Self-medication, incomplete courses</td><td>Dispensing regulation, public education</td></tr>
      <tr><td>Ward</td><td>Broad empirical therapy, long duration</td><td>Audit and feedback, stop dates</td></tr>
      <tr><td>Intensive care</td><td>Carbapenem use, delayed de-escalation</td><td>Rapid diagnostics, 48-hour review</td></tr>
    </table></div>
    <p>The appropriate response combines <strong>AWaRe</strong> classification, prospective audit, pre-authorisation of reserved agents, IV-to-oral switch, local antibiograms and patient education. Regulation alone will not work while access to affordable diagnosis remains weak; stewardship must be built into the workflow of the ward and the drugstore.</p>
  `,
  tip: "Split the answer into community and hospital patterns, then match each driver with one feasible stewardship lever.",
  sources: ["S26", "S30", "S32", "S9"]
},
{
  id: "a33", domain: "amr",
  q: "Discuss antimicrobial residues and resistant organisms from Philippine aquaculture and livestock, and their implications for human medicine.",
  tags: ["Philippines", "aquaculture", "residues", "One Health"],
  keypoints: ["tilapia and milkfish", "oxytetracycline", "florfenicol", "colistin", "mcr-1 in swine", "ESBL-producing E. coli", "maximum residue limits", "Bureau of Animal Industry", "liquid chromatography tandem mass spectrometry", "withdrawal periods", "growth promotion ban", "effluent treatment", "Aeromonas and Vibrio", "One Health surveillance"],
  answer: `
    <h4>Why the sector matters</h4>
    <p>The Philippines produces tilapia, milkfish, brackish-water shrimp and seaweed, and raises swine and poultry in both commercial and backyard systems. Antimicrobials are used for therapy, prophylaxis and, in some settings, growth promotion. Oxytetracycline and florfenicol are common in aquaculture, while enrofloxacin, sulfonamides and colistin are used in swine and poultry.</p>
    <h4>Residues and exposure</h4>
    <p>Residues reach consumers through meat, milk, eggs and fish, and reach the environment through pond discharge, manure and slaughterhouse waste. Maximum residue limits are set by Codex and enforced in the Philippines through the Department of Agriculture, the Bureau of Animal Industry, the National Meat Inspection Service and the Food and Drug Administration. Screening may use microbiological or immunoassay methods, with confirmatory liquid chromatography–tandem mass spectrometry. Enforcement is limited by laboratory capacity, informal slaughter and unregistered feed products.</p>
    <h4>Resistance selection</h4>
    <ul>
      <li><strong>Colistin:</strong> plasmid-borne <em>mcr-1</em> has been found in <em>E. coli</em> from swine and in human isolates, threatening a last-resort drug.</li>
      <li><strong>Extended-spectrum β-lactamases:</strong> poultry and swine are reservoirs of ESBL-producing <em>E. coli</em> that can be transmitted by food, direct contact and environmental contamination.</li>
      <li><strong>Aquaculture:</strong> antibiotics added to water create a mixing vessel for resistance genes and select resistant <em>Aeromonas</em>, <em>Vibrio</em> and <em>Edwardsiella</em>.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Sector</th><th>Main risk</th><th>Control</th></tr>
      <tr><td>Poultry and swine</td><td>Colistin and ESBL resistance</td><td>Prescription-only use, ban growth promotion</td></tr>
      <tr><td>Aquaculture</td><td>Water and sediment contamination</td><td>Withdrawal periods, effluent treatment</td></tr>
      <tr><td>Food chain</td><td>Residues in meat, milk and fish</td><td>Residue monitoring, MRL enforcement</td></tr>
    </table></div>
    <p>Human medicine feels the effect through foodborne infection, occupational exposure and the loss of last-resort drugs. The response must be One Health: integrated surveillance, veterinary oversight, vaccination and biosecurity, alternatives to antimicrobial growth promotion, and honest enforcement of withdrawal periods.</p>
  `,
  tip: "Follow the residue from pond or pen to plate, then name mcr-1 and ESBLs as the resistance consequences.",
  sources: ["S23", "S31", "S33"]
},
{
  id: "a34", domain: "amr", star: true,
  q: "Explain how RA 11332 and DOH reporting systems govern notifiable antimicrobial-resistant organisms in the Philippines.",
  tags: ["Philippines", "RA 11332", "notification", "alert organisms"],
  keypoints: ["Republic Act No. 11332", "Mandatory Reporting of Notifiable Diseases", "Department of Health", "immediate notification", "confidentiality", "alert organism policy", "carbapenem-resistant Enterobacterales", "MRSA bacteraemia", "Candidozyma auris", "Antimicrobial Resistance Surveillance Program", "passive reporting", "private laboratory integration", "feedback to clinicians", "outbreak investigation"],
  answer: `
    <h4>The statute</h4>
    <p><strong>Republic Act No. 11332</strong>, the Mandatory Reporting of Notifiable Diseases and Health Events of Public Health Concern Act, requires health facilities, laboratories, physicians and local health officers to report specified diseases and events to the Department of Health. It establishes the legal duty to report, protects confidentiality, and provides for penalties for concealment or delay. The implementing rules define categories of notification and the timelines for immediate and routine reporting.</p>
    <h4>What is notifiable</h4>
    <p>The notifiable list is oriented to epidemic-prone diseases such as cholera, typhoid, measles, dengue, meningococcal disease and leptospirosis. <strong>Antimicrobial resistance is not a single notifiable disease</strong>; instead, alert organisms are handled through hospital infection prevention and control, the <strong>Antimicrobial Resistance Surveillance Program</strong>, and outbreak reporting when a cluster occurs. Carbapenem-resistant Enterobacterales, MRSA bacteraemia, vancomycin-resistant enterococci, <em>Candidozyma auris</em> and extensively drug-resistant tuberculosis therefore travel through parallel channels.</p>
    <div class="table-wrap"><table>
      <tr><th>Event</th><th>Channel</th><th>Timing</th></tr>
      <tr><td>Cholera, measles, meningococcal disease</td><td>RA 11332 notification to DOH and LGU</td><td>Immediate</td></tr>
      <tr><td>CRE or MRSA cluster</td><td>Hospital IPC to DOH, ARSP referral</td><td>As soon as detected</td></tr>
      <tr><td>Routine susceptibility data</td><td>ARSP sentinel reporting, then GLASS</td><td>Periodic</td></tr>
    </table></div>
    <h4>Strengths and limits</h4>
    <p>The law gives public health authorities power to investigate, trace contacts and close premises, and it makes reporting a professional obligation rather than a favour. Its limits for AMR are structural: most resistant isolates are not individually notifiable, reporting is passive, private laboratories are unevenly integrated, and feedback to the reporting clinician is slow. The laboratory therefore needs a clear <strong>alert-organism policy</strong> with defined thresholds, a named recipient and a documented response.</p>
    <p>RA 11332 is strongest when linked to the national action plan: notification triggers investigation, investigation generates isolate referral, and isolate referral produces the susceptibility data that guide empirical therapy.</p>
  `,
  tip: "Distinguish notifiable diseases from alert organisms — that nuance is what separates a policy answer from a list.",
  sources: ["S33", "S31", "S14"]
},
{
  id: "a35", domain: "amr",
  q: "Analyse the access–excess paradox in Philippine antimicrobial policy. How can registration, procurement and stewardship be aligned?",
  tags: ["Philippines", "access", "AWaRe", "policy"],
  keypoints: ["access gap", "excess problem", "essential medicines list", "pooled procurement", "PhilHealth coverage", "prescription-only enforcement", "AWaRe classification", "pre-authorisation", "buffer stocks", "tiered pricing", "voluntary licensing", "availability affordability appropriateness", "stockouts", "Reserve drugs"],
  answer: `
    <h4>Two failures at once</h4>
    <p>Philippine antimicrobial policy faces an <strong>access gap</strong> and an <strong>excess problem</strong> simultaneously. In remote and low-income areas, first-line antibiotics may be out of stock in public facilities, forcing patients to buy expensive brands or abandon treatment. In urban areas, the same drugs are sold without a prescription and consumed for viral illness, while hospitals use reserved agents empirically. A policy that only restricts will deepen the access gap; a policy that only expands supply will worsen excess.</p>
    <h4>Where the levers sit</h4>
    <div class="table-wrap"><table>
      <tr><th>Lever</th><th>Effect on access</th><th>Effect on excess</th></tr>
      <tr><td>Essential medicines list and pooled procurement</td><td>Improves availability and price</td><td>Can standardise choice</td></tr>
      <tr><td>PhilHealth coverage and payment reform</td><td>Reduces out-of-pocket cost</td><td>Neutral unless linked to quality</td></tr>
      <tr><td>Prescription-only enforcement</td><td>May reduce informal access</td><td>Reduces self-medication</td></tr>
      <tr><td>AWaRe formulary and pre-authorisation</td><td>Protects Access agents</td><td>Restricts Watch and Reserve use</td></tr>
      <tr><td>Local manufacturing and buffer stocks</td><td>Reduces stockouts</td><td>Requires allocation rules</td></tr>
    </table></div>
    <h4>Aligning the system</h4>
    <ul>
      <li>Use the <strong>AWaRe</strong> classification to separate agents that must be available everywhere from those that require approval.</li>
      <li>Fund diagnosis as well as drugs: an antibiotic without a culture is often the wrong antibiotic.</li>
      <li>Tie PhilHealth reimbursement and facility licensing to stewardship structures and reported consumption.</li>
      <li>Negotiate tiered pricing and voluntary licensing for new agents so that Reserve drugs are both affordable and controlled.</li>
      <li>Monitor availability, affordability and appropriateness together; a single consumption target can hide stockouts.</li>
    </ul>
    <p>The ethical test is simple: no patient should die of a treatable infection because an essential antibiotic is unavailable, and no antibiotic should be used when it cannot help. Access and conservation are not opposites; they are two sides of the same stewardship obligation.</p>
  `,
  tip: "Show that restriction and supply are separate levers, then pair each with an equity safeguard.",
  sources: ["S23", "S26", "S33"]
},
{
  id: "a36", domain: "amr", star: true,
  q: "Compare the new β-lactam–β-lactamase inhibitor combinations. How should inhibitor spectrum, PK/PD and resistance risk guide selection?",
  tags: ["β-lactamase inhibitors", "avibactam", "KPC", "metallo-β-lactamase"],
  keypoints: ["inhibitor spectrum", "avibactam", "vaborbactam", "relebactam", "metallo-beta-lactamases", "aztreonam-avibactam", "ceftolozane-tazobactam", "KPC mutation", "porin loss", "prolonged infusion", "renal adjustment", "carbapenemase testing", "Reserve drug", "cefepime-taniborbactam"],
  answer: `
    <h4>Why the inhibitor matters</h4>
    <p>The clinical value of a new combination is determined less by the β-lactam than by the <strong>inhibitor spectrum</strong>. Avibactam, vaborbactam and relebactam inhibit class A serine enzymes such as KPC and class C AmpC, but not metallo-β-lactamases. Aztreonam is stable to metallo-β-lactamases, so <strong>aztreonam–avibactam</strong> covers organisms that co-produce metallo- and serine enzymes. Ceftolozane–tazobactam relies on ceftolozane's stability against <em>Pseudomonas</em> AmpC and efflux, with tazobactam as a secondary partner.</p>
    <div class="table-wrap"><table>
      <tr><th>Combination</th><th>Inhibitor covers</th><th>Does not cover</th><th>Typical niche</th></tr>
      <tr><td>Ceftazidime–avibactam</td><td>KPC, OXA-48, AmpC</td><td>Metallo-β-lactamases</td><td>KPC and OXA-48 Enterobacterales</td></tr>
      <tr><td>Meropenem–vaborbactam</td><td>KPC, AmpC</td><td>OXA-48, metallo-β-lactamases</td><td>KPC-producing Enterobacterales</td></tr>
      <tr><td>Imipenem–relebactam</td><td>KPC, AmpC</td><td>OXA-48, metallo-β-lactamases</td><td>KPC Enterobacterales, some <em>Pseudomonas</em></td></tr>
      <tr><td>Aztreonam–avibactam</td><td>Metallo-β-lactamases plus serine enzymes</td><td>Gram-positives, anaerobes</td><td>NDM-producing Enterobacterales</td></tr>
      <tr><td>Ceftolozane–tazobactam</td><td>Many <em>P. aeruginosa</em> enzymes</td><td>KPC, metallo-β-lactamases</td><td>Multidrug-resistant <em>Pseudomonas</em></td></tr>
    </table></div>
    <h4>PK/PD and dose</h4>
    <p>These are time-dependent β-lactams: efficacy depends on the free concentration exceeding the MIC for a sufficient fraction of the interval. Prolonged infusion, loading doses and renal adjustment are therefore part of correct use. Inhibitor exposure also matters, because an inadequate inhibitor concentration allows hydrolysis to resume.</p>
    <h4>Resistance and stewardship</h4>
    <p>Resistance emerges through <em>bla</em><sub>KPC</sub> mutations that restore ceftazidime hydrolysis, porin loss, efflux and co-production of a second enzyme. Prior exposure to a combination is itself a risk factor. The practical rule is to <strong>identify the enzyme before choosing the inhibitor</strong>, use the agent only when susceptibility supports it, and avoid empirical use of a Reserve drug where a narrower option exists. Newer agents such as cefepime–taniborbactam extend metallo-β-lactamase coverage, but they do not remove the need for carbapenemase testing and stewardship.</p>
  `,
  tip: "Build the answer around the enzyme class: KPC and OXA-48 for avibactam, KPC for vaborbactam and relebactam, MBL for aztreonam.",
  sources: ["S8", "S7", "S13"]
},
{
  id: "a37", domain: "amr", star: true,
  q: "Discuss cefiderocol: mechanism, spectrum, clinical evidence, dosing and resistance. What is its appropriate place in therapy?",
  tags: ["cefiderocol", "siderophore", "CRAB", "reserve antibiotic"],
  keypoints: ["siderophore cephalosporin", "TonB-dependent iron transporters", "penicillin-binding protein 3", "metallo-beta-lactamases", "carbapenem-resistant Acinetobacter", "Stenotrophomonas maltophilia", "APEKS-NP non-inferiority", "CREDIBLE-CR mortality signal", "2 g every 8 hours", "3-hour infusion", "renal adjustment", "pirA and piuA mutations", "heteroresistance", "Reserve agent", "source control"],
  answer: `
    <h4>Mechanism</h4>
    <p><strong>Cefiderocol</strong> is a siderophore cephalosporin. The catechol side chain chelates ferric iron, and the bacterium actively transports the drug–iron complex through <strong>TonB-dependent iron transporters</strong>, bypassing the porin and efflux limitations that protect Gram-negative cells. Inside the periplasm it binds <strong>penicillin-binding protein 3</strong> and inhibits cell-wall synthesis. Its side chain also makes it stable to many serine and metallo-β-lactamases, so it retains activity against organisms that defeat older cephalosporins.</p>
    <h4>Spectrum and evidence</h4>
    <ul>
      <li>Active in vitro against carbapenem-resistant <em>Enterobacterales</em>, <em>Acinetobacter baumannii</em>, <em>Pseudomonas aeruginosa</em>, <em>Stenotrophomonas maltophilia</em> and <em>Burkholderia</em>.</li>
      <li>Not reliably active against Gram-positive organisms or anaerobes.</li>
      <li>In nosocomial pneumonia, the APEKS-NP randomised trial showed non-inferiority to high-dose meropenem.</li>
      <li>In carbapenem-resistant infection, the CREDIBLE-CR randomised trial showed higher mortality in the cefiderocol arm, particularly among <em>Acinetobacter</em> patients; the reasons remain debated and may include severity, dosing and resistance.</li>
    </ul>
    <h4>Dosing and resistance</h4>
    <p>The usual adult dose is 2 g intravenously every 8 hours, infused over 3 hours, with a loading dose and renal adjustment. Resistance arises through mutations in iron transporters such as <em>pirA</em> and <em>piuA</em>, PBP3 changes, β-lactamase overexpression and heteroresistance. Standard susceptibility testing may not detect all of these, and clinical failure has been reported with susceptible results.</p>
    <h4>Place in therapy</h4>
    <p>Cefiderocol is a <strong>Reserve</strong> agent for confirmed or suspected multidrug-resistant Gram-negative infection when a β-lactam–inhibitor combination is inactive or unavailable, especially for metallo-β-lactamase producers and <em>S. maltophilia</em>. It should be guided by susceptibility, used with source control, and reviewed by infectious diseases or stewardship. It is not an empirical first-line drug, and its mortality signal means that patient selection and dose optimisation matter as much as the spectrum.</p>
  `,
  tip: "Iron gate, PBP3 target, broad Gram-negative spectrum — then the CREDIBLE-CR mortality signal as the caveat.",
  sources: ["S8", "S7", "S13", "S9"]
},
{
  id: "a38", domain: "amr",
  q: "How do rapid diagnostics improve the management and surveillance of antimicrobial resistance? Discuss technologies, evidence and limitations.",
  tags: ["rapid diagnostics", "MALDI-TOF", "molecular panels", "diagnostic stewardship"],
  keypoints: ["MALDI-TOF mass spectrometry", "multiplex molecular panels", "carbapenemase lateral flow assays", "whole-genome sequencing", "time to effective therapy", "de-escalation", "stewardship review", "colonisation versus infection", "silent resistance genes", "phenotypic susceptibility", "outbreak detection", "GLASS", "turnaround time", "diagnostic stewardship"],
  answer: `
    <h4>From days to hours</h4>
    <p>Conventional culture and susceptibility testing take 48 to 72 hours. <strong>Rapid diagnostics</strong> shorten the interval between specimen collection and an actionable result, which is the period in which empirical broad-spectrum therapy does most of its damage. The benefit is realised only when the result reaches a clinician who acts on it.</p>
    <h4>Technologies and what they add</h4>
    <div class="table-wrap"><table>
      <tr><th>Technology</th><th>Output</th><th>Typical action</th></tr>
      <tr><td>MALDI-TOF mass spectrometry</td><td>Species identification from colonies or positive blood culture</td><td>Narrow empirical therapy, stop unnecessary agents</td></tr>
      <tr><td>Multiplex molecular panels</td><td>Organism and resistance genes in blood, CSF or respiratory samples</td><td>Target therapy, isolate patient, alert infection control</td></tr>
      <tr><td>Carbapenemase lateral flow assays</td><td>KPC, NDM, VIM, IMP, OXA-48 class</td><td>Choose the matching β-lactam–inhibitor combination</td></tr>
      <tr><td>Whole-genome sequencing</td><td>Resistance determinants, clonal relatedness</td><td>Outbreak investigation, surveillance</td></tr>
    </table></div>
    <h4>Evidence</h4>
    <p>Randomised and quasi-experimental studies show that rapid identification combined with <strong>stewardship review</strong> shortens time to effective therapy, increases de-escalation and reduces length of stay. Rapid testing alone, without a team to interpret and act, has little effect. Molecular panels also detect colonisation and silent resistance genes, so the result must be interpreted with the specimen site and the clinical picture.</p>
    <h4>Limitations</h4>
    <ul>
      <li>Capital and consumable costs, limited laboratory capacity and fragile supply chains.</li>
      <li>Gene presence does not prove expression; phenotypic susceptibility is still needed for some drugs.</li>
      <li>Panels cover known targets and miss novel or uncommon mechanisms.</li>
      <li>Results can overwhelm clinicians unless reported with clear interpretation.</li>
    </ul>
    <p>For surveillance, rapid tools strengthen outbreak detection and provide timely data for national programmes such as GLASS. The stewardship lesson is that a fast test is only as good as the pathway that delivers its result to the bedside.</p>
  `,
  tip: "Pair every technology with the decision it changes, and say clearly that rapid testing without stewardship does little.",
  sources: ["S12", "S8", "S13", "S9"]
},
{
  id: "a39", domain: "amr", star: true,
  q: "Explain how critical illness alters β-lactam pharmacokinetics and how PK/PD-targeted dosing can improve outcomes in sepsis.",
  tags: ["PK/PD", "critical illness", "sepsis", "TDM"],
  keypoints: ["volume of distribution", "augmented renal clearance", "capillary leak", "hypoalbuminaemia", "renal replacement therapy", "ECMO sequestration", "fT>MIC", "100% fT>MIC", "loading dose", "prolonged infusion", "therapeutic drug monitoring", "source control", "subtherapeutic exposure", "resistance selection"],
  answer: `
    <h4>What sepsis does to pharmacokinetics</h4>
    <p>Critical illness changes both <strong>volume of distribution</strong> and <strong>clearance</strong>. Capillary leak, fluid resuscitation and oedema enlarge the volume of distribution for hydrophilic β-lactams, so a standard loading dose may produce a subtherapeutic concentration. Hypoalbuminaemia raises the free fraction, but also alters distribution and clearance. Renal function is unpredictable: some young, previously healthy patients develop <strong>augmented renal clearance</strong>, while others develop acute kidney injury requiring renal replacement therapy. ECMO circuits and oedema add further sequestration.</p>
    <h4>Why the target moves</h4>
    <p>β-lactams are time-dependent, and efficacy depends on the fraction of the dosing interval during which free drug exceeds the MIC (<strong>fT&gt;MIC</strong>). In severe infection, the target is often close to 100% fT&gt;MIC, and sometimes several times the MIC. A patient with a susceptible organism can therefore fail therapy because exposure at the site is inadequate, not because the isolate is resistant.</p>
    <div class="table-wrap"><table>
      <tr><th>Change</th><th>PK consequence</th><th>Practical response</th></tr>
      <tr><td>Capillary leak, oedema</td><td>Higher volume of distribution</td><td>Weight-based loading dose</td></tr>
      <tr><td>Augmented renal clearance</td><td>Faster clearance</td><td>Higher dose or prolonged infusion; TDM</td></tr>
      <tr><td>Renal replacement therapy</td><td>Variable extracorporeal clearance</td><td>Dose for the modality, not the creatinine</td></tr>
      <tr><td>ECMO</td><td>Sequestration and dilution</td><td>Expect lower levels; measure if possible</td></tr>
    </table></div>
    <h4>What to do</h4>
    <ul>
      <li>Give a <strong>loading dose</strong> early, then base maintenance on clearance.</li>
      <li>Use <strong>prolonged or continuous infusion</strong> for β-lactams when the MIC is close to the breakpoint.</li>
      <li>Apply <strong>therapeutic drug monitoring</strong> where available and reassess renal function daily.</li>
      <li>Do not delay the first dose while waiting for levels; early effective therapy and source control remain the priorities.</li>
    </ul>
    <p>PK/PD-targeted dosing is a stewardship intervention: it improves cure, shortens therapy and avoids the resistance selection that follows subtherapeutic exposure.</p>
  `,
  tip: "Load on volume of distribution, maintain on clearance — then name augmented clearance and CRRT as the exam favourites.",
  sources: ["S4", "S20", "S8", "S9"]
},
{
  id: "a40", domain: "amr",
  q: "When is combination therapy justified for multidrug-resistant Gram-negative infection? What is the evidence and how should it be used?",
  tags: ["combination therapy", "MDR Gram-negative", "CRAB", "de-escalation"],
  keypoints: ["empirical coverage", "polymicrobial infection", "synergy", "prevention of resistance", "carbapenem-resistant Enterobacterales", "beta-lactam-beta-lactamase inhibitor", "carbapenem-resistant Acinetobacter", "ampicillin-sulbactam", "aztreonam-avibactam", "cefiderocol", "Pseudomonas double coverage", "nephrotoxicity", "de-escalation", "source control", "false reassurance"],
  answer: `
    <h4>Rationales</h4>
    <p>Combination therapy for multidrug-resistant Gram-negative infection is justified in four situations: <strong>empirical coverage</strong> of a critically ill patient before susceptibility is known, <strong>documented polymicrobial</strong> infection, <strong>synergy</strong> in a defined setting, and <strong>prevention of resistance</strong> during prolonged therapy. The decision also depends on the site of infection, the severity of illness, and whether source control has been achieved. Outside these indications, adding a second active drug usually increases toxicity and cost without improving survival.</p>
    <h4>What the evidence shows</h4>
    <ul>
      <li>For carbapenem-resistant Enterobacterales, a β-lactam–β-lactamase inhibitor is the backbone; adding an aminoglycoside may be considered in septic shock but has not consistently reduced mortality.</li>
      <li>For carbapenem-resistant <em>Acinetobacter</em>, high-dose ampicillin–sulbactam or cefiderocol are preferred; colistin combinations are used when nothing else is active, with weak evidence.</li>
      <li>For metallo-β-lactamase producers, aztreonam–avibactam or cefiderocol provides the active backbone; a second agent is added only for a specific reason.</li>
      <li>For <em>Pseudomonas</em>, empirical double coverage is sometimes used in septic shock, then narrowed once susceptibility is known.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Indication</th><th>Example</th><th>Comment</th></tr>
      <tr><td>Empirical broad coverage</td><td>Septic shock, unknown pathogen</td><td>De-escalate at 48 to 72 hours</td></tr>
      <tr><td>Polymicrobial infection</td><td>Intra-abdominal sepsis</td><td>Cover anaerobes and Gram-negatives</td></tr>
      <tr><td>Synergy</td><td>Enterococcal endocarditis</td><td>β-lactam plus aminoglycoside</td></tr>
      <tr><td>Resistance prevention</td><td>Tuberculosis, HIV</td><td>Combination is mandatory</td></tr>
    </table></div>
    <h4>Risks and principles</h4>
    <p>Combination therapy increases nephrotoxicity, <em>C. difficile</em> risk, cost and selection pressure, and it can create false reassurance when source control is inadequate. The principles are to choose agents with different targets, optimise doses by PK/PD, obtain susceptibility data quickly, and <strong>de-escalate</strong> to the narrowest effective regimen. More drugs are not a substitute for drainage, device removal and infection prevention.</p>
  `,
  tip: "Four indications, then the evidence caveat: combination is common, but a mortality benefit is not.",
  sources: ["S7", "S8", "S9", "S13"]
}
);
