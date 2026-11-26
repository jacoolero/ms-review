/* Parasitology — Strongyloides (p6): additional essay set */
window.QBANK.push(
{
  id: "p6h1", domain: "p6", star: true,
  q: "Explain why strongyloidiasis can persist for decades after a person leaves an endemic area, and identify the clinical clues that should prompt testing.",
  tags: ["Strongyloides", "autoinfection", "larval arrest", "larva currens", "chronic infection"],
  keypoints: ["Strongyloides stercoralis", "parthenogenetic female", "rhabditiform larva", "filariform larva", "autoinfection", "internal autoinfection", "external autoinfection", "heterogonic cycle", "larval arrest", "Th2 immunity", "IL-13", "larva currens", "intermittent diarrhoea", "eosinophilia", "decades", "NIE ELISA"],
  answer: `
    <h4>A cycle that closes on itself</h4>
    <p>Female <em>S. stercoralis</em> are <strong>parthenogenetic</strong> and live in the duodenal and jejunal mucosa, where their eggs hatch before leaving the host. First-stage <strong>rhabditiform larvae</strong> usually pass in stool and develop in soil, either into free-living adults (the <strong>heterogonic cycle</strong>) or directly into infective <strong>filariform larvae</strong>. The critical exception is that some rhabditiform larvae moult twice within the intestinal lumen or on the perianal skin and re-enter the mucosa or skin as filariform larvae — <strong>internal and external autoinfection</strong>. Each turn of the loop adds new adults without any external exposure, so one infection can last for the host's lifetime.</p>
    <h4>Why the loop is usually restrained</h4>
    <p>In immunocompetent hosts, <strong>Th2 immunity</strong> with IL-4, IL-5 and <strong>IL-13</strong> limits larval output, and some larvae enter <strong>arrest</strong> in tissue. This equilibrium explains the low, intermittent larval load that makes stool microscopy insensitive. When immunity falls, arrested larvae resume development and the loop accelerates.</p>
    <h4>Clinical clues after decades</h4>
    <ul>
      <li><strong>Larva currens</strong>: a rapidly advancing urticarial track on the buttocks, perineum or trunk, moving several centimetres per hour.</li>
      <li>Intermittent watery <strong>diarrhoea</strong>, bloating, epigastric pain and weight loss.</li>
      <li>Recurrent wheeze or a Löffler-like pulmonary episode during larval migration.</li>
      <li><strong>Eosinophilia</strong>, sometimes the only abnormality, or unexplained elevation of IgE.</li>
    </ul>
    <h4>Why the history matters</h4>
    <p>A person who farmed barefoot in a Philippine province twenty years earlier remains at risk, and a normal eosinophil count does not exclude infection. Testing with <strong>NIE ELISA</strong> plus agar plate culture should be triggered by the exposure history, not by current residence. The practical consequence is that "no recent travel" is never a reason to omit screening before corticosteroids.</p>
  `,
  tip: "Answer persistence with the autoinfective loop, then convert it into a testing rule: exposure history outlives residence.",
  sources: ["P1", "P2", "P3", "P4", "P18"]
},
{
  id: "p6h2", domain: "p6", star: true,
  q: "Explain how Strongyloides larvae cause disseminated disease and describe its organ-specific presentations.",
  tags: ["Strongyloides", "disseminated", "polymicrobial sepsis", "meningitis", "organ involvement"],
  keypoints: ["disseminated strongyloidiasis", "hyperinfection", "bowel wall breach", "polymicrobial bacteraemia", "Escherichia coli", "Klebsiella", "Bacteroides", "meningitis", "pulmonary haemorrhage", "ileus", "petechial rash", "larvae in urine", "CSF", "eosinophilia absent", "mortality", "reduce immunosuppression"],
  answer: `
    <h4>From hyperinfection to dissemination</h4>
    <p>Dissemination begins when the autoinfective loop accelerates. Filariform larvae, not eggs, are the invasive stage: they penetrate the bowel wall and travel by portal blood to the lungs and then the systemic circulation. In true dissemination they appear outside the gut–lung route — in the <strong>CNS</strong>, liver, heart, urinary tract and skin. The distinction is anatomical: hyperinfection increases traffic along the normal path, while dissemination means ectopic larvae.</p>
    <h4>How larvae produce sepsis</h4>
    <p>Each larva crossing the mucosa carries enteric bacteria on its cuticle and in its gut. Repeated breaches produce <strong>polymicrobial bacteraemia</strong>, most often <strong>Escherichia coli</strong>, <strong>Klebsiella</strong>, <strong>Bacteroides</strong> and enterococci. Meningitis follows haematogenous spread, and the CSF may contain larvae as well as neutrophils. This explains why fever and septic shock can dominate the picture before diarrhoea is recognised, and why blood cultures must be drawn before antibiotics.</p>
    <h4>Organ-specific syndromes</h4>
    <div class="table-wrap"><table>
      <tr><th>Site</th><th>Typical features</th></tr>
      <tr><td>Gastrointestinal</td><td><strong>Ileus</strong>, distension, abdominal pain, malabsorption, bleeding, perforation</td></tr>
      <tr><td>Pulmonary</td><td>Cough, wheeze, haemoptysis, ARDS, larvae in sputum or BAL</td></tr>
      <tr><td>Central nervous system</td><td><strong>Meningitis</strong>, encephalopathy, seizures; larvae in CSF</td></tr>
      <tr><td>Skin</td><td><strong>Petechial</strong> or purpuric rash, larva currens, peri-umbilical spread</td></tr>
      <tr><td>Liver and biliary</td><td>Jaundice, hepatomegaly, cholestasis</td></tr>
      <tr><td>Urinary and cardiac</td><td>Larvae in <strong>urine</strong>; arrhythmia or myocarditis</td></tr>
    </table></div>
    <h4>Recognition</h4>
    <p><strong>Eosinophilia is often absent</strong>, particularly on steroids, and serology may be negative, so direct microscopy of stool, sputum and urine is essential. Mortality in disseminated disease remains high, and survival depends on starting ivermectin and broad-spectrum antibiotics early while reducing immunosuppression. Serial samples and a low threshold for empirical treatment are safer than a single negative result.</p>
  `,
  tip: "Separate the route (hyperinfection) from the ectopic organ spread (dissemination), then explain sepsis as bacterial translocation.",
  sources: ["P1", "P2", "P3", "P4", "P18"]
},
{
  id: "p6h3", domain: "p6", star: true,
  q: "Design a diagnostic strategy for strongyloidiasis in chronic infection, hyperinfection and the immunosuppressed patient with negative serology.",
  tags: ["Strongyloides", "diagnosis", "agar plate", "serology", "immunosuppression"],
  keypoints: ["three stool specimens", "agar plate culture", "Baermann", "NIE ELISA", "IgG4", "LIPS", "PCR", "duodenal aspirate", "sputum", "BAL", "seronegative", "larval burden", "repeat testing", "empirical ivermectin", "turnaround time", "lab-acquired infection"],
  answer: `
    <h4>What the test must answer</h4>
    <p>No single assay both detects and quantifies infection. The choice depends on whether the question is "is there chronic infection?", "is this hyperinfection?" or "can immunosuppression safely start?" — and on the <strong>turnaround time</strong> the decision allows. Direct methods prove larvae; antibody methods show exposure.</p>
    <h4>Chronic infection</h4>
    <p>Start with <strong>NIE ELISA</strong>, which has good sensitivity and a result within hours. In parallel, examine at least <strong>three fresh stool specimens</strong> by <strong>agar plate culture</strong> or <strong>Baermann</strong> concentration; agar plate is the most sensitive routine method because larvae migrate and leave visible bacterial tracks. <strong>PCR</strong> is a useful adjunct where available. A negative result in a person with certain exposure does not exclude infection.</p>
    <h4>Hyperinfection and dissemination</h4>
    <p>Larval burden is high, so direct microscopy is rewarding: stool, <strong>sputum</strong>, BAL, duodenal aspirate, CSF and urine. Do not wait for serology; examine samples immediately and repeat daily. Blood cultures and CSF studies address the bacterial component. Agar plate culture must be sealed and handled with gloves because filariform larvae can cause <strong>lab-acquired infection</strong>.</p>
    <h4>The seronegative immunosuppressed patient</h4>
    <div class="table-wrap"><table>
      <tr><th>Situation</th><th>Action</th></tr>
      <tr><td>Positive serology or larvae</td><td>Treat before immunosuppression</td></tr>
      <tr><td>Negative serology, certain exposure, elective therapy</td><td>Repeat stool testing; consider <strong>IgG4</strong> or <strong>LIPS</strong>; treat empirically</td></tr>
      <tr><td>Negative serology, urgent steroids</td><td>Do not delay; give <strong>ivermectin</strong> and document</td></tr>
      <tr><td>Persistent symptoms, all tests negative</td><td><strong>Duodenal aspirate</strong> or biopsy</td></tr>
    </table></div>
    <p>Antibody may be undetectable in a substantial proportion of disseminated cases, and steroids lower it further. The safe rule is that a negative test in a high-risk patient changes the wording of the note, not the decision to treat.</p>
  `,
  tip: "Organise the answer by clinical question, not by test — then state what a negative result does and does not exclude.",
  sources: ["P1", "P2", "P3", "P11", "P18"]
},
{
  id: "p6h4", domain: "p6", star: true,
  q: "Discuss the pharmacology of ivermectin in strongyloidiasis, the causes of treatment failure, and the alternatives when it is unavailable.",
  tags: ["Strongyloides", "ivermectin", "albendazole", "pharmacology", "treatment failure"],
  keypoints: ["glutamate-gated chloride channels", "200 µg/kg", "two days", "fatty meal", "bioavailability", "CYP3A4", "treatment failure", "albendazole 400 mg twice daily", "seven days", "moxidectin", "pregnancy", "Loa loa", "veterinary formulation", "adherence", "rifampicin", "reduce immunosuppression"],
  answer: `
    <h4>Mechanism and handling</h4>
    <p>Ivermectin opens <strong>glutamate-gated chloride channels</strong> in nematode nerve and muscle, causing paralysis and death; at therapeutic doses it does not appreciably cross the human blood–brain barrier. Oral <strong>bioavailability</strong> rises with a <strong>fatty meal</strong>, and the drug is metabolised mainly by <strong>CYP3A4</strong>. The standard regimen is <strong>200 µg/kg once daily for two days</strong>; a repeat course at two weeks is used when larvae persist. Doses are rounded to whole 3 mg tablets, which matters in small adults.</p>
    <h4>Why treatment fails</h4>
    <ul>
      <li><strong>Adherence</strong>: two days of treatment is easily truncated, and mild adverse effects discourage completion.</li>
      <li><strong>Low exposure</strong>: vomiting, malabsorption or diarrhoea reduces absorption.</li>
      <li><strong>Drug interactions</strong>: CYP3A4 inducers such as <strong>rifampicin</strong> and some anticonvulsants lower drug levels.</li>
      <li><strong>Heavy or disseminated infection</strong>: a two-day course is inadequate; daily treatment until clearance is needed.</li>
      <li><strong>Reinfection</strong>: continued exposure in an endemic household.</li>
      <li>Resistance is not established in human <em>Strongyloides</em> but is a concern in veterinary nematodes.</li>
    </ul>
    <h4>Alternatives and cautions</h4>
    <p><strong>Albendazole 400 mg twice daily for seven days</strong> is the main alternative and is less effective than ivermectin. Mebendazole and thiabendazole are historical options with poorer tolerability. <strong>Moxidectin</strong> is not established for strongyloidiasis. In <strong>pregnancy</strong>, albendazole is preferred, and breastfeeding is not a contraindication to ivermectin. Avoid ivermectin in patients with heavy <em>Loa loa</em> microfilaraemia because of encephalopathy risk, and never use <strong>veterinary formulations</strong> in humans. When ivermectin is unavailable, do not substitute a single albendazole dose; the seven-day course is required. <strong>Reduce immunosuppression</strong> whenever possible, because drug alone may not control hyperinfection.</p>
  `,
  tip: "Explain failure mechanistically — absorption, interactions, adherence, burden — then give a named alternative with a dose.",
  sources: ["P1", "P2", "P3", "P4", "P18"]
},
{
  id: "p6h5", domain: "p6", star: true,
  q: "Outline how a hospital should organise screening for strongyloidiasis before corticosteroids, chemotherapy and transplantation.",
  tags: ["Strongyloides", "screening", "corticosteroids", "transplant", "hospital protocol"],
  keypoints: ["risk assessment", "endemic exposure", "NIE ELISA", "agar plate culture", "four to six weeks", "empirical ivermectin", "transplant candidates", "chemotherapy", "anti-TNF", "documentation", "pharmacist alert", "audit", "cost-effectiveness", "discordant results", "follow-up", "HTLV-1"],
  answer: `
    <h4>Who and when</h4>
    <p>Screening should be triggered by a structured <strong>risk assessment</strong>, not by clinician memory: lifetime residence or travel in an endemic country, farming, barefoot soil contact, unsanitary latrines, or unexplained eosinophilia. The target groups are patients starting systemic <strong>corticosteroids</strong> (especially high dose or prolonged), <strong>chemotherapy</strong>, <strong>anti-TNF</strong> or other biologics, and <strong>transplant candidates</strong>. Elective pathways should test <strong>four to six weeks</strong> before the planned immunosuppression so that treatment and re-testing can be completed.</p>
    <h4>Test strategy</h4>
    <p>Combine <strong>NIE ELISA</strong> with stool <strong>agar plate culture</strong> or <strong>Baermann</strong> concentration on repeat specimens. Serology alone is convenient but cannot distinguish past from current infection; stool alone is insensitive. In transplant candidates, add <strong>HTLV-1</strong> testing where relevant, and screen donors from endemic areas according to programme policy.</p>
    <h4>Discordant and delayed results</h4>
    <div class="table-wrap"><table>
      <tr><th>Result</th><th>Action</th></tr>
      <tr><td>Serology positive, stool negative</td><td>Treat with ivermectin; do not repeat serology for cure</td></tr>
      <tr><td>Serology negative, stool positive</td><td>Treat; the stool result proves active infection</td></tr>
      <tr><td>Both negative, exposure certain</td><td>Treat empirically or repeat stool; document reasoning</td></tr>
      <tr><td>Testing delayed, therapy urgent</td><td>Start steroids and give <strong>ivermectin</strong> concurrently</td></tr>
    </table></div>
    <h4>Making it reliable</h4>
    <p>A named owner, a standard order set and a <strong>pharmacist alert</strong> at the point of steroid dispensing close the commonest gaps. The protocol should be <strong>audited</strong> for the proportion of eligible patients screened and treated, and <strong>discordant results</strong> reviewed. In a resource-limited Philippine hospital, <strong>empirical ivermectin</strong> is often more <strong>cost-effective</strong> than an incomplete serology pathway, provided the exposure question is asked. <strong>Documentation</strong> must state the exposure, the test, the decision and the <strong>follow-up</strong> plan.</p>
  `,
  tip: "Treat it as a service, not a test: who, when, which assay, what to do when results disagree, and how you audit it.",
  sources: ["P1", "P2", "P3", "P13"]
},
{
  id: "p6h6", domain: "p6", star: true,
  q: "Explain the interaction between HTLV-1 and Strongyloides stercoralis and its consequences for diagnosis, treatment and prognosis.",
  tags: ["Strongyloides", "HTLV-1", "immunosuppression", "disseminated", "relapse"],
  keypoints: ["HTLV-1", "adult T-cell leukaemia", "HAM/TSP", "Th2", "IL-5", "IgE", "eosinopenia", "disseminated strongyloidiasis", "low larval output", "serology may be negative", "ivermectin", "treatment failure", "relapse", "Japan", "Caribbean", "screening"],
  answer: `
    <h4>The immunological lesion</h4>
    <p>Protective immunity to <em>Strongyloides</em> depends on a <strong>Th2</strong> response with IL-4, IL-5, IL-13, IgE and eosinophils. <strong>HTLV-1</strong> drives a strong Th1 and regulatory profile and blunts this Th2 axis, so co-infected patients have <strong>low IgE</strong>, <strong>eosinopenia</strong> and poor larval containment. The virus also favours <em>Strongyloides</em> proliferation, and corticosteroid treatment adds further suppression. HTLV-1 is endemic in southern Japan, the Caribbean, parts of South America, West and Central Africa, and Melanesia; it is uncommon in the Philippines but should be considered in severe or recurrent disease.</p>
    <h4>Clinical consequences</h4>
    <ul>
      <li>Higher rates of <strong>disseminated strongyloidiasis</strong> and hyperinfection, sometimes without a steroid trigger.</li>
      <li>Chronic dermatitis, urticaria and unexplained weight loss.</li>
      <li>Poor response to standard anthelmintic courses and frequent <strong>relapse</strong>.</li>
      <li>Co-existing <strong>adult T-cell leukaemia/lymphoma</strong> or <strong>HAM/TSP</strong>, which dominate prognosis.</li>
    </ul>
    <h4>Diagnosis and treatment</h4>
    <p>Diagnosis is harder because <strong>larval output may be low</strong> and <strong>serology may be negative</strong>; use repeated agar plate culture and PCR, and test for HTLV-1 when strongyloidiasis is severe, recurrent or associated with eosinopenia. Treat with <strong>ivermectin</strong>, often for longer than the standard two days, and repeat courses may be needed. Albendazole is a weaker alternative. Eradication should be confirmed by stool examination rather than serology, and relapse should prompt retreatment.</p>
    <h4>Prognosis and screening</h4>
    <p>Co-infection carries a worse prognosis, driven by dissemination and by the HTLV-1 disease itself. Patients with HTLV-1 who live in or travel from endemic areas should be <strong>screened</strong> for <em>Strongyloides</em> before immunosuppression, and household contacts may warrant testing. In co-infected patients, the anthelmintic response is a marker of how much the Th2 arm can be restored.</p>
  `,
  tip: "Name the immune axis first, then show how it distorts eosinophils, IgE, serology and response to treatment.",
  sources: ["P1", "P2", "P3", "P14", "P18"]
},
{
  id: "p6h7", domain: "p6", star: true,
  q: "Discuss prevention, post-treatment follow-up and the detection of relapse in strongyloidiasis.",
  tags: ["Strongyloides", "prevention", "follow-up", "test of cure", "relapse"],
  keypoints: ["sanitation", "sewage disposal", "footwear", "health education", "screening", "ivermectin", "two days", "stool examination", "two to four weeks", "three to six months", "test of cure", "serology", "relapse", "hyperinfection survivors", "no vaccine"],
  answer: `
    <h4>Breaking transmission</h4>
    <p>Prevention targets the infective filariform larvae in contaminated soil. <strong>Sanitation</strong> and safe <strong>sewage disposal</strong> are the foundation, because open defecation seeds the soil. <strong>Footwear</strong> and avoiding bare skin contact with moist soil reduce exposure, although they are imperfect in farming communities. <strong>Health education</strong> should be concrete: latrine use, handwashing, and not using fresh human faeces as fertiliser. There is <strong>no vaccine</strong>, and community mass drug administration with albendazole, used for other soil-transmitted helminths, has limited effect on <em>Strongyloides</em>, so targeted <strong>screening</strong> matters more than blanket deworming.</p>
    <h4>Protecting the individual</h4>
    <p>Everyone with proven infection should be treated with <strong>ivermectin 200 µg/kg daily for two days</strong>, and those with ongoing exposure should be re-treated at intervals determined by risk. Before immunosuppression, screening and pre-emptive treatment prevent hyperinfection. Patients should be told that infection can recur from their own autoinfective cycle and from re-exposure, so new symptoms warrant review.</p>
    <h4>Follow-up and test of cure</h4>
    <div class="table-wrap"><table>
      <tr><th>Time point</th><th>Assessment</th></tr>
      <tr><td><strong>Two to four weeks</strong></td><td>Repeat stool agar plate or Baermann; symptom review</td></tr>
      <tr><td><strong>Three to six months</strong></td><td>Second stool check; confirm eosinophil normalisation</td></tr>
      <tr><td>Serology</td><td>Not a <strong>test of cure</strong>; titres fall slowly over months to years</td></tr>
      <tr><td>Persistent larvae or symptoms</td><td>Repeat ivermectin course; look for reinfection or immunosuppression</td></tr>
    </table></div>
    <h4>Relapse and programme lessons</h4>
    <p><strong>Relapse</strong> is suggested by recurrent diarrhoea, urticaria, eosinophilia or larvae on repeat <strong>stool examination</strong>. <strong>Hyperinfection survivors</strong> need prolonged follow-up because larval clearance can be incomplete. At programme level, laboratories should report larvae promptly and clinicians should document treatment and follow-up, since the failure to close this loop is what turns a treatable chronic infection into a fatal one.</p>
  `,
  tip: "Give a follow-up schedule with dates, state that serology is not a cure test, and define relapse clinically plus parasitologically.",
  sources: ["P1", "P2", "P3", "P6", "P9"]
}
);
