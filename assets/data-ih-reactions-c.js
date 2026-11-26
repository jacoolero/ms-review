/* Immunohematology — transfusion reactions & TTIs, part C (ih211–ih220) */
window.QBANK.push(
{
  id: "ih211", domain: "ih-reactions", star: true,
  q: "Discuss the organisation and challenges of haemovigilance in Philippine hospitals.",
  tags: ["haemovigilance", "Philippines", "transfusion committee", "near miss"],
  keypoints: ["haemovigilance", "RA 7719", "AO 2008-0008", "Philippine Blood Coordinating Council", "transfusion committee", "near misses", "imputability", "incorrect blood component transfused", "under-reporting", "family replacement donors", "post-transfusion sample", "benchmarking", "traceability", "case definition", "donor reactions", "corrective action"],
  answer: `
    <h4>Scope of haemovigilance</h4>
    <p><strong>Haemovigilance</strong> is the organised surveillance of the whole transfusion chain, from donor selection to recipient follow-up. It captures <strong>adverse events</strong>, <strong>near misses</strong> and <strong>donor reactions</strong>, and converts them into corrective action. In the Philippines, <strong>RA 7719</strong> and its implementing rules make blood service facilities responsible for safe practice, while <strong>DOH Administrative Order 2008-0008</strong> sets licensing and quality requirements. The <strong>Philippine Blood Coordinating Council</strong> promotes national standards, training and audit.</p>
    <h4>A hospital programme</h4>
    <ul>
      <li>A standing <strong>transfusion committee</strong> with medical, nursing and laboratory representation.</li>
      <li>Written <strong>standard operating procedures</strong> for identification, issue, bedside checks and reaction workup.</li>
      <li>Mandatory reporting of every suspected reaction, with a <strong>case definition</strong> and an <strong>imputability</strong> grade.</li>
      <li>Review of <strong>incorrect blood component transfused</strong> events and of <strong>near misses</strong>, not only completed reactions.</li>
      <li>Feedback to wards, induction training and annual competency assessment.</li>
    </ul>
    <h4>Philippine constraints</h4>
    <p>Reporting is often passive and paper-based, so <strong>under-reporting</strong> is substantial. Many hospitals lack a dedicated transfusion nurse, and <strong>family replacement donors</strong> make <strong>traceability</strong> harder. Laboratory staff may not have protected time for investigation. A national mandatory scheme with standard electronic reporting is still developing, and <strong>benchmarking</strong> between hospitals is limited. Near-miss reporting is more informative than reaction counts alone, because it reveals the errors that were caught before harm.</p>
    <h4>Practical priorities</h4>
    <p>Start with what is measurable: sample rejection rates, bedside check compliance, time from reaction to blood bank notification, and completeness of the <strong>post-transfusion sample</strong>. Report to the PBCC and DOH as required, share lessons anonymously, and treat reporting as a professional duty rather than blame. Good haemovigilance is a quality system, not a filing cabinet.</p>
  `,
  tip: "Anchor the answer in RA 7719 and AO 2008-0008, then name under-reporting and near misses as the local gap.",
  sources: ["B14", "B15", "B6", "B9", "S33"]
},
{
  id: "ih212", domain: "ih-reactions", star: true,
  q: "Discuss RA 11166 and the prevention and management of transfusion-transmitted HIV.",
  tags: ["RA 11166", "HIV", "confidentiality", "lookback"],
  keypoints: ["RA 11166", "informed consent", "confidentiality", "blood donation", "lookback", "antiretroviral therapy", "partner notification", "haemovigilance", "RA 7719", "window period", "non-discrimination", "treatment hubs", "post-test counselling", "unique identifier", "adverse event", "stigma"],
  answer: `
    <h4>The legal frame</h4>
    <p><strong>Republic Act 11166</strong>, the Philippine HIV and AIDS Policy Act of 2018, replaced RA 8504 and governs every step of HIV testing, disclosure and treatment. It affirms <strong>informed consent</strong>, <strong>confidentiality</strong> and <strong>non-discrimination</strong>, and it removes criminal liability based on known HIV status while retaining penalties for unlawful disclosure. Donated blood must be screened, so blood donation is a lawful exception to the consent requirement, but the donor must still be told at registration what will be tested and why.</p>
    <h4>Testing and counselling</h4>
    <ul>
      <li>Pre-test information in plain language, with a genuine opportunity to decline donation.</li>
      <li>Confidential results, linked to a <strong>unique identifier</strong> rather than a name where possible.</li>
      <li><strong>Post-test counselling</strong> by a trained counsellor, with referral to <strong>treatment hubs</strong>.</li>
      <li>No mandatory testing of patients or staff outside the exceptions allowed by law.</li>
    </ul>
    <h4>When transmission occurs</h4>
    <p>A reactive donor screen is confirmed, the donor is notified, and <strong>lookback</strong> traces earlier components. Recipients are contacted confidentially, tested and offered <strong>antiretroviral therapy</strong>, which is now accessible through PhilHealth and DOH treatment hubs. Disclosure is limited to the patient, a legal guardian and authorised health workers; <strong>partner notification</strong> is assisted and consensual, not forced.</p>
    <h4>Accountability without stigma</h4>
    <p>Transfusion-transmitted HIV is a serious <strong>adverse event</strong> and must be reported through <strong>haemovigilance</strong> and public health channels. Liability may follow a proven breach of RA 7719 or RA 11166, but the response should be systemic: audit the <strong>window period</strong>, assay performance and documentation. <strong>Stigma</strong> drives donors and recipients away from testing, so confidentiality is not administrative decoration; it is the control that makes the programme work.</p>
  `,
  tip: "Separate the legal duties (consent, confidentiality, non-discrimination) from the laboratory duties (screen, confirm, lookback).",
  sources: ["B17", "S33", "B8", "B9"]
},
{
  id: "ih213", domain: "ih-reactions", star: true,
  q: "Discuss hepatitis B and hepatitis C screening of blood donors in the Philippines and the limits of current assays.",
  tags: ["hepatitis B", "hepatitis C", "NAT", "donor screening"],
  keypoints: ["RA 7719", "AO 2008-0008", "HBsAg", "anti-HCV", "nucleic acid testing", "window period", "occult hepatitis B", "anti-HBc", "HCV RNA", "donor selection", "deferral", "lookback", "vaccination", "external quality assessment", "Philippine Blood Coordinating Council", "family replacement donors"],
  answer: `
    <h4>Required screening</h4>
    <p>Under <strong>RA 7719</strong> and <strong>DOH AO 2008-0008</strong>, every donation is tested for HIV, <strong>hepatitis B</strong>, <strong>hepatitis C</strong> and syphilis, with malaria added where endemic. Most Philippine blood service facilities use <strong>HBsAg</strong> and <strong>anti-HCV</strong> immunoassays on automated platforms; <strong>nucleic acid testing</strong> is not yet universal. The <strong>Philippine Blood Coordinating Council</strong> supports validation, quality control and proficiency testing, but coverage varies between government, private and hospital-based facilities.</p>
    <h4>What serology misses</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Meaning and gap</th></tr>
      <tr><td><strong>HBsAg</strong></td><td>Current infection; negative in the <strong>window period</strong> and in <strong>occult hepatitis B</strong></td></tr>
      <tr><td><strong>anti-HBc</strong></td><td>Lifetime exposure marker; flags possible occult infection but is not routine</td></tr>
      <tr><td><strong>anti-HCV</strong></td><td>Delayed by months; an <strong>HCV RNA</strong> test closes the window</td></tr>
      <tr><td><strong>NAT</strong></td><td>Detects viral nucleic acid earlier; cost and logistics limit use</td></tr>
    </table></div>
    <h4>Local realities</h4>
    <p>Hepatitis B remains common in the Philippines, so the pre-test probability of an infectious donor is not trivial. <strong>Occult hepatitis B</strong> and a low-level HCV carrier can both pass serology, particularly with less sensitive assays. <strong>Donor selection</strong> therefore carries as much weight as the test itself: honest history-taking, <strong>deferral</strong> of high-risk donors, and no pressure on <strong>family replacement donors</strong> to conceal risk. A donor with a normal liver panel may still transmit infection, so laboratory results do not replace the questionnaire. Cold-chain failures and transcription errors are separate ways a safe donation becomes unsafe.</p>
    <h4>Improving safety</h4>
    <p>Priorities are validated assays, <strong>external quality assessment</strong>, <strong>lookback</strong> for seroconverting donors, and <strong>vaccination</strong> of susceptible patients and staff. NAT should be introduced first where yield is highest, such as large urban centres, and expanded as resources allow. A reactive donor needs confirmation, permanent deferral and confidential counselling, not a hurried phone call.</p>
  `,
  tip: "Name HBsAg, anti-HCV and NAT, then say exactly which window each one leaves open.",
  sources: ["B8", "B7", "B14", "S17", "S33"]
},
{
  id: "ih214", domain: "ih-reactions", star: true,
  q: "Discuss dengue-associated thrombocytopenia and the rational use of platelet transfusion in the Philippines.",
  tags: ["dengue", "thrombocytopenia", "platelet transfusion", "Philippines"],
  keypoints: ["dengue", "thrombocytopenia", "plasma leakage", "capillary fragility", "prophylactic platelet transfusion", "significant bleeding", "haematocrit", "RA 11332", "apheresis platelets", "bacterial contamination", "TRALI", "restrictive", "platelet dysfunction", "defervescence", "inventory", "audit"],
  answer: `
    <h4>Why platelets fall</h4>
    <p><strong>Dengue</strong> causes <strong>thrombocytopenia</strong> through marrow suppression, immune-mediated clearance and consumption at sites of vascular injury. The nadir usually occurs around <strong>defervescence</strong>, when <strong>plasma leakage</strong> and haemoconcentration are also greatest. Bleeding in dengue is driven more by <strong>capillary fragility</strong>, <strong>platelet dysfunction</strong> and coagulation disturbance than by the count alone, so a low platelet count does not automatically mean a transfusion is needed. Serial counts are more useful than a single value, and a rapidly falling count with a widening pulse pressure deserves close observation.</p>
    <h4>What the evidence supports</h4>
    <ul>
      <li><strong>Prophylactic platelet transfusion</strong> at moderately low counts is not supported; trials show no reduction in bleeding or mortality.</li>
      <li>Transfuse for <strong>significant bleeding</strong>, or at very low counts with additional risk, following national guidance.</li>
      <li>Do not correct a number before an invasive procedure without a defined threshold.</li>
      <li>Assess <strong>haematocrit</strong>, blood pressure and perfusion, because plasma leakage is the immediate threat.</li>
    </ul>
    <h4>Philippine practice</h4>
    <p>Dengue is notifiable under <strong>RA 11332</strong>, and epidemic waves strain platelet supply. Families often seek <strong>apheresis platelets</strong> or direct donors, which can delay care and expose patients to unnecessary components. During outbreaks, hospitals should activate an <strong>inventory</strong> and massive haemorrhage plan, reserve platelets for bleeding patients, and give balanced crystalloid for leakage rather than reflex transfusion.</p>
    <h4>Risks of over-transfusion</h4>
    <p>Platelets carry <strong>bacterial contamination</strong>, allergic reactions, <strong>TRALI</strong> and volume load. Each unit also consumes a scarce resource. The safest approach is a <strong>restrictive</strong>, clinically driven policy with senior review, clear documentation and <strong>audit</strong> of every platelet issue during dengue season. Record the indication and the post-transfusion increment so that practice can be reviewed.</p>
  `,
  tip: "Treat the patient, not the platelet count: name plasma leakage as the danger and reserve platelets for bleeding.",
  sources: ["B1", "B8", "S25", "S33"]
},
{
  id: "ih215", domain: "ih-reactions", star: true,
  q: "Discuss bacterial contamination of blood components and septic transfusion reactions, with reference to Philippine blood service practice.",
  tags: ["bacterial contamination", "platelets", "sepsis", "haemovigilance"],
  keypoints: ["skin plug", "Staphylococcus epidermidis", "gram-negative", "platelets", "room-temperature", "diversion pouch", "donor arm disinfection", "bacterial culture", "pathogen reduction", "sepsis", "unit cultures", "lookback", "haemovigilance", "PBCC", "cold chain", "point-of-issue testing"],
  answer: `
    <h4>How contamination happens</h4>
    <p>Bacteria enter a component through a <strong>skin plug</strong> at venepuncture, an inadequately disinfected arm, a contaminated <strong>diversion pouch</strong> or tubing, or a donor with asymptomatic bacteraemia. Skin commensals such as <strong>Staphylococcus epidermidis</strong> predominate in platelets, while <strong>gram-negative</strong> organisms such as Escherichia coli, Klebsiella and Pseudomonas cause the most severe reactions. Room-temperature storage makes <strong>platelets</strong> the highest-risk component; red cells and plasma are safer because of cold storage or freezing.</p>
    <h4>Recognising a septic reaction</h4>
    <ul>
      <li>High fever, rigors, hypotension and shock during or soon after transfusion.</li>
      <li>Nausea, vomiting, diarrhoea and flushing, sometimes without fever in the elderly.</li>
      <li>Rapid progression to <strong>sepsis</strong> and disseminated intravascular coagulation.</li>
    </ul>
    <p>Stop the transfusion, support the circulation, take blood and <strong>unit cultures</strong> and start broad-spectrum antibiotics. A negative culture does not exclude the diagnosis.</p>
    <h4>Prevention</h4>
    <p>Use a <strong>diversion pouch</strong>, thorough <strong>donor arm disinfection</strong>, trained phlebotomy and a strict <strong>cold chain</strong>. Store platelets at 20 to 24 degrees Celsius with continuous agitation, and never return a unit to stock after it has left the blood bank. <strong>Bacterial culture</strong> of platelets, <strong>point-of-issue testing</strong> and <strong>pathogen reduction</strong> reduce but do not eliminate risk; visual inspection is unreliable. In the Philippines, <strong>PBCC</strong> standards and DOH licensing require quality systems, yet culture screening is not universal and many units are whole-blood derived.</p>
    <h4>System response</h4>
    <p>Every suspected case needs <strong>lookback</strong> to co-components, donor notification and reporting through <strong>haemovigilance</strong>. Audit contamination rates, review storage times and remove unsafe practices rather than blaming the last person in the chain. Root cause analysis should ask whether the skin preparation was observed and whether the donor had a recent febrile illness.</p>
  `,
  tip: "Contamination is a phlebotomy and storage problem: diversion pouch, arm disinfection, and platelets at room temperature.",
  sources: ["B14", "B15", "B1", "B9"]
},
{
  id: "ih216", domain: "ih-reactions", star: true,
  q: "Discuss lookback and traceability in the Philippine blood system after a donor is found to be infected.",
  tags: ["lookback", "traceability", "ISBT 128", "confidentiality"],
  keypoints: ["lookback", "traceability", "seroconverts", "NAT-positive", "co-components", "quarantine", "confidentiality", "RA 7719", "RA 11166", "RA 11332", "unique donation number", "ISBT 128", "counselling", "haemovigilance", "donor deferral", "electronic register"],
  answer: `
    <h4>Lookback and traceability</h4>
    <p><strong>Lookback</strong> is the retrospective investigation of donations from a donor later found to carry a transfusion-transmissible infection. <strong>Traceability</strong> is the underlying record system that links each donation to every component and every recipient. Without traceability, lookback becomes a search through paper registers, and recipients are lost.</p>
    <h4>Triggers</h4>
    <ul>
      <li>A repeat donor <strong>seroconverts</strong> or becomes <strong>NAT-positive</strong>.</li>
      <li>A donor reports a new diagnosis, exposure or risk behaviour.</li>
      <li>A recipient develops an unexplained infection and the donor is investigated.</li>
      <li>A processing or testing error is discovered during quality review.</li>
    </ul>
    <h4>The Philippine pathway</h4>
    <p>Under <strong>RA 7719</strong> and <strong>RA 11166</strong>, blood service facilities must keep donor and recipient records, protect <strong>confidentiality</strong> and notify affected persons through trained staff. The Philippine Blood Coordinating Council and DOH provide guidance, while <strong>RA 11332</strong> governs reporting of notifiable infections. In practice, the blood bank identifies <strong>co-components</strong>, quarantines those still in stock, and works with hospital records and clinicians to contact recipients.</p>
    <h4>What makes it work</h4>
    <p>A <strong>unique donation number</strong>, ideally <strong>ISBT 128</strong>, and an <strong>electronic register</strong> are the foundation. Recipients need testing, <strong>counselling</strong> and treatment, not just a letter. Staff must be trained in confidential contact and supported when a recipient cannot be found. Family replacement donors and mobile collections make follow-up harder, so contact details must be verified at every donation.</p>
    <h4>Limits</h4>
    <p>Records may be incomplete, and recipients may have moved, died or been transfused elsewhere. Lookback measures the true performance of screening and should feed <strong>haemovigilance</strong> and <strong>donor deferral</strong>. It protects individuals and the blood system at the same time.</p>
  `,
  tip: "Trace forward to components, backward to donors, then sideways to co-components and other recipients.",
  sources: ["B17", "B14", "B8", "B9", "S33"]
},
{
  id: "ih217", domain: "ih-reactions", star: true,
  q: "Compare acute and delayed haemolytic transfusion reactions, including hyperhaemolysis.",
  tags: ["AHTR", "DHTR", "hyperhaemolysis", "DAT"],
  keypoints: ["AHTR", "ABO incompatibility", "IgM", "intravascular", "haemoglobinuria", "DIC", "DAT", "delayed haemolytic transfusion reaction", "anamnestic", "extravascular", "anti-Jkᵃ", "delayed serologic reaction", "antigen-negative", "hyperhaemolysis", "reticulocytopenia", "antibody screen"],
  answer: `
    <h4>Acute haemolytic transfusion reaction</h4>
    <p><strong>AHTR</strong> usually follows <strong>ABO incompatibility</strong> caused by a clerical or identification error. Preformed <strong>IgM</strong> antibody activates complement, producing <strong>intravascular</strong> haemolysis with fever, chills, flank or chest pain, <strong>haemoglobinuria</strong>, hypotension and <strong>DIC</strong>. The DAT is positive, plasma haemoglobin and LDH rise, and haptoglobin falls. Management is to stop the transfusion, support blood pressure and renal perfusion with fluids, treat DIC and hyperkalaemia, and investigate the clerical error immediately. The bedside check and comparison of pre- and post-transfusion samples are the fastest way to confirm the diagnosis.</p>
    <h4>Delayed reactions</h4>
    <p><strong>Delayed haemolytic transfusion reaction</strong> appears 3 to 14 days later, when a previously undetectable alloantibody becomes <strong>anamnestic</strong>. Haemolysis is mostly <strong>extravascular</strong>: falling haemoglobin, jaundice, a positive DAT and a new antibody, classically <strong>anti-Jkᵃ</strong>, anti-E or anti-K. <strong>Delayed serologic reaction</strong> is the same serology without haemolysis. Management is supportive, and future units must be <strong>antigen-negative</strong>. Because the antibody may be undetectable when the reaction occurs, historical records and elution studies matter.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>AHTR</th><th>DHTR</th></tr>
      <tr><td>Timing</td><td>Minutes to hours</td><td>3–14 days</td></tr>
      <tr><td>Mechanism</td><td>Intravascular, complement</td><td>Extravascular, IgG</td></tr>
      <tr><td>Clue</td><td>Haemoglobinuria, shock</td><td>Falling Hb, jaundice</td></tr>
    </table></div>
    <h4>Hyperhaemolysis</h4>
    <p>In sickle cell disease, <strong>hyperhaemolysis</strong> destroys both donor and recipient red cells, with haemoglobin below baseline and <strong>reticulocytopenia</strong>. It is life-threatening and needs steroids, IVIG and specialist input; further transfusion may worsen it.</p>
    <h4>Prevention</h4>
    <p>Two patient identifiers, bedside checks, a valid <strong>antibody screen</strong> and a permanent antibody record prevent most cases. Patients with a history of antibodies should carry a card and receive antigen-negative units even when the current screen is negative.</p>
  `,
  tip: "Contrast the timing and the compartment: acute is complement-driven intravascular, delayed is IgG-driven extravascular.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih218", domain: "ih-reactions", star: true,
  q: "Distinguish transfusion-related acute lung injury from transfusion-associated circulatory overload.",
  tags: ["TRALI", "TACO", "pulmonary oedema", "BNP"],
  keypoints: ["TRALI", "TACO", "non-cardiogenic", "HLA", "HNA", "two-hit", "volume overload", "oxygen", "hydrostatic", "hypertension", "jugular venous pressure", "BNP", "diuretics", "single-unit policy", "leucoreduction", "ventilatory support"],
  answer: `
    <h4>Two pulmonary syndromes</h4>
    <p><strong>TRALI</strong> and <strong>TACO</strong> both present with acute dyspnoea and bilateral pulmonary infiltrates within about six hours of transfusion, but their mechanisms and treatment differ. Confusing them is dangerous: <strong>diuretics</strong> help TACO and may harm TRALI. Both are clinical diagnoses supported by the chest radiograph, arterial blood gas and echocardiography; a trial of diuresis can be dangerous if the diagnosis is wrong.</p>
    <h4>TRALI</h4>
    <p><strong>Transfusion-related acute lung injury</strong> is a <strong>non-cardiogenic</strong> pulmonary oedema caused by donor <strong>HLA</strong> or <strong>HNA</strong> antibodies, or by biologically active lipids, injuring the pulmonary endothelium. It is a <strong>two-hit</strong> process: the recipient is already primed by infection, surgery or inflammation. Hypoxaemia, fever and hypotension appear without <strong>volume overload</strong>. Treatment is stopping the transfusion, <strong>oxygen</strong> and <strong>ventilatory support</strong>; diuretics are not indicated. Most cases recover in 48 to 96 hours.</p>
    <h4>TACO</h4>
    <p><strong>Transfusion-associated circulatory overload</strong> is <strong>hydrostatic</strong> oedema in a patient who cannot handle the volume: the elderly, those with renal or cardiac failure, or anyone given a rapid infusion. Signs are <strong>hypertension</strong>, raised <strong>jugular venous pressure</strong>, a gallop, weight gain and a raised <strong>BNP</strong>. Treatment is stopping the transfusion, sitting the patient up, diuretics and oxygen.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>TRALI</th><th>TACO</th></tr>
      <tr><td>Mechanism</td><td>Endothelial injury</td><td>Hydrostatic overload</td></tr>
      <tr><td>Blood pressure</td><td>Often low</td><td>Often high</td></tr>
      <tr><td>BNP</td><td>Normal</td><td>Raised</td></tr>
      <tr><td>Treatment</td><td>Oxygen, ventilation</td><td>Diuretics, oxygen</td></tr>
    </table></div>
    <h4>Prevention</h4>
    <p>TRALI prevention uses male or never-pregnant donor plasma and <strong>leucoreduction</strong>. TACO prevention uses a <strong>single-unit policy</strong>, slower rates, pre-transfusion assessment and careful fluid balance. Nurse-led checking of volume, rate and balance prevents many episodes, and the transfusion plan should state a target haemoglobin.</p>
  `,
  tip: "If the blood pressure is up and the BNP is high, it is TACO; if the patient is febrile and hypotensive, think TRALI.",
  sources: ["B1", "B9", "B11"]
},
{
  id: "ih219", domain: "ih-reactions",
  q: "Discuss allergic and anaphylactic transfusion reactions: mechanisms, recognition, management and prevention.",
  tags: ["allergic reaction", "anaphylaxis", "IgA deficiency", "washed components"],
  keypoints: ["urticaria", "anaphylaxis", "IgE", "anti-IgA", "IgA-deficient", "haptoglobin", "ethylene oxide", "antihistamine", "adrenaline", "washed", "premedication", "angioedema", "bronchospasm", "plasma-reduced", "mast-cell", "documentation"],
  answer: `
    <h4>The spectrum</h4>
    <p><strong>Allergic</strong> reactions range from mild <strong>urticaria</strong> and itching to <strong>anaphylaxis</strong> with hypotension, <strong>bronchospasm</strong> and <strong>angioedema</strong>. They are among the commonest transfusion reactions and are caused by recipient antibody against a plasma protein or a drug in the component. Isolated urticaria is common and benign, while anaphylaxis is rare but rapidly fatal if adrenaline is delayed.</p>
    <h4>Mechanisms</h4>
    <ul>
      <li><strong>IgE</strong>-mediated hypersensitivity to donor plasma proteins or to a drug or food antigen in the unit.</li>
      <li><strong>Anti-IgA</strong> in severely <strong>IgA-deficient</strong> recipients, producing severe anaphylaxis.</li>
      <li>Antibodies to <strong>haptoglobin</strong>, complement components or <strong>ethylene oxide</strong> residues.</li>
      <li>Direct <strong>mast-cell</strong> activation by cytokines accumulated during storage.</li>
    </ul>
    <p>Severity depends on the amount of antibody and the dose of antigen delivered in the unit.</p>
    <h4>Recognition and management</h4>
    <p>Mild urticaria alone can be treated with an <strong>antihistamine</strong>, and transfusion may be restarted cautiously if symptoms resolve completely. Anaphylaxis requires immediate stopping, airway support, oxygen, fluids and intramuscular <strong>adrenaline</strong>; antihistamines and steroids are adjuncts, not substitutes. Hypotension, stridor, wheeze or angioedema should never be treated as a simple rash. Record the time of onset, the volume infused and the response to treatment, because the pattern guides future component selection.</p>
    <h4>Prevention</h4>
    <p>For recurrent allergic reactions, use <strong>washed</strong> red cells or <strong>plasma-reduced</strong> components. Patients with IgA deficiency and anti-IgA need IgA-deficient or extensively washed components. Routine <strong>premedication</strong> is not recommended because it does not prevent anaphylaxis and may mask early signs. <strong>Documentation</strong> of the reaction and the component requirement in the patient record prevents the next hospital from repeating the exposure. A patient card and a flag in the blood bank system make the requirement visible.</p>
  `,
  tip: "Urticaria may be restarted after antihistamine; anaphylaxis means adrenaline, not a bigger antihistamine dose.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih220", domain: "ih-reactions",
  q: "Discuss transfusion-associated graft-versus-host disease and transfusional iron overload.",
  tags: ["TA-GVHD", "irradiation", "iron overload", "chelation"],
  keypoints: ["TA-GVHD", "T lymphocytes", "immunocompromised", "HLA-matched", "pancytopenia", "irradiation", "25 Gy", "leucoreduction", "iron overload", "thalassaemia", "ferritin", "MRI T2*", "chelation", "deferoxamine", "exchange transfusion", "cardiomyopathy"],
  answer: `
    <h4>Transfusion-associated GVHD</h4>
    <p><strong>TA-GVHD</strong> occurs when viable donor <strong>T lymphocytes</strong> engraft in a susceptible recipient and attack host tissues. Risk is highest in <strong>immunocompromised</strong> patients, neonates, recipients of <strong>HLA-matched</strong> or family donations, and after intrauterine transfusion. Donor and host usually share an HLA haplotype, so the graft is not rejected. Fever, rash, diarrhoea, hepatitis and <strong>pancytopenia</strong> appear one to six weeks later, and mortality exceeds 90 percent. There is no effective treatment; prevention is everything. The groups at risk include:</p>
    <ul>
      <li>Premature neonates and recipients of intrauterine transfusion.</li>
      <li>Patients with haematological malignancy or a stem cell transplant.</li>
      <li>Recipients of donations from first-degree relatives.</li>
    </ul>
    <h4>Prevention</h4>
    <p><strong>Irradiation</strong> at <strong>25 Gy</strong> inactivates donor lymphocytes and is required for at-risk components. <strong>Leucoreduction</strong> alone is not sufficient. Pathogen reduction can substitute for platelets and plasma but not for red cells. Directed donations from relatives should be avoided or irradiated.</p>
    <h4>Iron overload</h4>
    <p>Chronically transfused patients with <strong>thalassaemia</strong>, sickle cell disease or myelodysplasia accumulate iron because humans have no active excretion route. Each unit adds roughly 200 to 250 mg of iron. Deposition in the heart, liver and endocrine organs causes <strong>cardiomyopathy</strong>, cirrhosis, diabetes and hypogonadism. Monitor <strong>ferritin</strong> and, where available, liver and cardiac <strong>MRI T2*</strong>. Ferritin is cheap but rises with inflammation, so trend it alongside the clinical picture; liver iron concentration by biopsy remains a reference method but is invasive.</p>
    <h4>Management</h4>
    <p><strong>Chelation</strong> with <strong>deferoxamine</strong>, deferasirox or deferiprone prevents end-organ damage, and <strong>exchange transfusion</strong> removes iron while correcting anaemia. In the Philippines, thalassaemia care depends on access to chelators and specialised imaging, so prevention includes judicious transfusion and early specialist referral.</p>
  `,
  tip: "TA-GVHD is prevented, never treated; iron overload is prevented by chelation and monitored by ferritin and T2*.",
  sources: ["B1", "B2", "B11"]
}
);
