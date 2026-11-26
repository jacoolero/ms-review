/* Immunohematology — transfusion reactions & TTIs, part B (ih127–ih144) */
window.QBANK.push(
{
  id: "ih127", domain: "ih-reactions", star: true,
  q: "Discuss patient identification and the prevention of wrong-blood-in-tube and incorrect blood component transfusion.",
  tags: ["patient identification", "wrong blood in tube", "near miss", "human factors"],
  keypoints: ["incorrect blood component transfused", "wrong blood in tube", "pre-labelled tubes", "two-sample rule", "positive patient identification", "barcode", "bedside check", "near-miss", "root cause analysis", "workflow interruption", "haemovigilance", "traceability", "two independent identifiers", "sample rejection", "human errors", "compatibility label"],
  answer: `
    <h4>Why identification errors dominate</h4>
    <p>Most serious haemolytic reactions are not serological failures but <strong>human errors</strong> in identification. Haemovigilance schemes consistently rank <strong>incorrect blood component transfused</strong> among the commonest reported events, and the root cause is usually a failure to match the right unit to the right patient at the bedside.</p>
    <h4>The wrong-blood-in-tube problem</h4>
    <p><strong>Wrong blood in tube</strong> means the sample in the tube does not come from the patient named on the label. It arises when blood is drawn from the wrong patient, when <strong>pre-labelled tubes</strong> are used, or when labels are applied away from the bedside. The laboratory cannot detect every case: if the wrong sample happens to be group-compatible, the error passes silently until a reaction occurs. A <strong>two-sample rule</strong> — separate phlebotomies, not two tubes from one venepuncture — is the strongest defence before a first transfusion.</p>
    <h4>Controls that work</h4>
    <ul>
      <li><strong>Positive patient identification</strong> at every step, using <strong>two independent identifiers</strong> and the patient's own confirmation.</li>
      <li>Labelling at the bedside immediately after collection, never in advance.</li>
      <li><strong>Barcode</strong> or RFID matching of wristband, sample and compatibility label.</li>
      <li>A final <strong>bedside check</strong> of identity, unit number, blood group, expiry and <strong>compatibility label</strong> by two trained staff.</li>
      <li><strong>Sample rejection</strong> for any labelling discrepancy, followed by investigation rather than simple replacement.</li>
    </ul>
    <h4>Learning from near misses</h4>
    <p><strong>Near-miss</strong> reporting captures errors that were intercepted and is more informative than reaction reporting alone. <strong>Root cause analysis</strong> should examine <strong>workflow interruption</strong>, staffing, training and equipment rather than blame an individual. The lessons feed <strong>haemovigilance</strong> and <strong>traceability</strong> systems, and patients should be encouraged to ask whether the blood is really for them.</p>
  `,
  tip: "Name the two-sample rule and say why a compatible wrong sample can pass unnoticed.",
  sources: ["B1", "B9", "B5"]
},
{
  id: "ih128", domain: "ih-reactions", star: true,
  q: "Discuss the hypotensive transfusion reaction: mechanism, differential diagnosis, management and prevention.",
  tags: ["hypotensive reaction", "bradykinin", "ACE inhibitor", "diagnosis of exclusion"],
  keypoints: ["hypotensive transfusion reaction", "bradykinin", "kininogen", "ACE inhibitors", "negatively charged", "bedside leukoreduction filters", "pre-storage leucoreduction", "angioedema", "diagnosis of exclusion", "AHTR", "sepsis", "anaphylaxis", "vasopressor", "contact activation"],
  answer: `
    <h4>What it is</h4>
    <p>A <strong>hypotensive transfusion reaction</strong> is an abrupt fall in blood pressure, often within minutes of starting a transfusion, without fever, haemolysis or respiratory distress. It is under-recognised and usually benign once the transfusion is stopped, but it must be separated from the dangerous causes of hypotension during transfusion.</p>
    <h4>Mechanism</h4>
    <p>The best-supported mechanism is <strong>contact activation</strong> of the plasma <strong>kininogen</strong> system, generating <strong>bradykinin</strong>, a potent vasodilator. <strong>ACE inhibitors</strong> block bradykinin degradation, so patients taking them are over-represented. <strong>Negatively charged</strong> <strong>bedside leukoreduction filters</strong> provide the activating surface; the reaction is much less common with <strong>pre-storage leucoreduction</strong>. Dialysis membranes and some infusion tubing have been implicated in the same way. The result is vasodilation, increased vascular permeability and occasionally <strong>angioedema</strong>. The process is not antibody-mediated, so the DAT is negative and cultures are sterile.</p>
    <h4>Diagnosis of exclusion</h4>
    <div class="table-wrap"><table>
      <tr><th>Alternative</th><th>Discriminating features</th></tr>
      <tr><td><strong>AHTR</strong></td><td>Fever, pain, haemoglobinuria, positive DAT, ABO discrepancy</td></tr>
      <tr><td><strong>Sepsis</strong></td><td>Rigors, high fever, shock, positive unit culture</td></tr>
      <tr><td><strong>Anaphylaxis</strong></td><td>Urticaria, bronchospasm, angioedema, rapid onset</td></tr>
      <tr><td>TRALI</td><td>Hypoxaemia and pulmonary infiltrates</td></tr>
      <tr><td>TACO</td><td>Hypertension, raised JVP, pulmonary oedema</td></tr>
    </table></div>
    <p>It is therefore a <strong>diagnosis of exclusion</strong>: perform the clerical check, DAT and cultures before accepting it.</p>
    <h4>Management and prevention</h4>
    <ul>
      <li>Stop the transfusion and support the circulation with <strong>fluids</strong> and, if necessary, a <strong>vasopressor</strong>.</li>
      <li>Most cases resolve within minutes; document and report the event.</li>
      <li>Use pre-storage leucoreduced components and avoid negatively charged filters in affected patients.</li>
      <li>Review ACE inhibitor therapy with the clinical team and restart transfusion only if clearly needed.</li>
    </ul>
  `,
  tip: "Say bradykinin plus ACE inhibitor plus negatively charged filter — then prove it is a diagnosis of exclusion.",
  sources: ["B1", "B11", "B9"]
},
{
  id: "ih129", domain: "ih-reactions", star: true,
  q: "Discuss red cell alloimmunisation after transfusion: mechanisms, risk factors, consequences and prevention.",
  tags: ["alloimmunisation", "antigen matching", "evanescence", "sickle cell"],
  keypoints: ["polymorphic antigens", "alloantibodies", "anamnestic", "evanescence", "antigen mismatch", "sickle cell disease", "thalassaemia", "delayed haemolytic", "delayed serologic", "HDFN", "hyperhaemolysis", "antigen matching", "genotyping", "leucoreduction", "registry", "compatible donor pool"],
  answer: `
    <h4>How alloimmunisation develops</h4>
    <p>Transfused red cells carry <strong>polymorphic antigens</strong> that the recipient may lack. Donor cells are processed by antigen-presenting cells, and a T-cell-dependent B-cell response produces <strong>alloantibodies</strong>, usually IgG. The primary response is slow; re-exposure produces a rapid <strong>anamnestic</strong> response. Antibodies may later become undetectable — <strong>evanescence</strong> — yet immunological memory persists, which is why historical records matter more than the current screen. A delayed reaction usually appears 3 to 14 days later, when the haemoglobin fails to rise or falls again.</p>
    <h4>Risk factors</h4>
    <ul>
      <li><strong>Antigen mismatch</strong>, especially Rh (E, c), Kell, Duffy, Kidd and MNS antigens.</li>
      <li>Repeated transfusion over years, as in <strong>sickle cell disease</strong> and <strong>thalassaemia</strong>.</li>
      <li>Inflammation, infection and surgery, which enhance antigen presentation.</li>
      <li>Pregnancy, which may prime the response, and genetic immune responsiveness.</li>
    </ul>
    <h4>Consequences</h4>
    <p>Alloantibodies cause <strong>delayed haemolytic</strong> and <strong>delayed serologic</strong> transfusion reactions, make crossmatching difficult and delay issue. They cause <strong>HDFN</strong> in later pregnancies, and in sickle cell disease they are linked to <strong>hyperhaemolysis</strong> and severe reactions. Each new antibody narrows the <strong>compatible donor pool</strong> and increases the risk that no antigen-negative unit can be found.</p>
    <h4>Prevention</h4>
    <p><strong>Antigen matching</strong> beyond ABO and D — at least C, c, E, e and K — reduces alloimmunisation in chronically transfused patients, and extended matching or <strong>genotyping</strong> is used in haemoglobinopathy programmes. Some services genotype before the first transfusion so that matching starts early. <strong>Leucoreduction</strong> reduces HLA alloimmunisation and febrile reactions. Every antibody must be recorded in a <strong>registry</strong> and on a patient card, with antigen-negative units reserved, so that another hospital does not repeat the search.</p>
  `,
  tip: "Link evanescence to the registry: the antibody disappears, but the memory and the record must not.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih130", domain: "ih-reactions", star: true,
  q: "Describe the immediate bedside management of a suspected acute transfusion reaction.",
  tags: ["bedside management", "anaphylaxis", "documentation", "restart"],
  keypoints: ["stop the transfusion", "0.9% saline", "vital signs", "clerical check", "blood bank", "post-transfusion samples", "oxygen", "fluids", "anaphylaxis", "adrenaline", "DIC", "urticarial", "documentation", "haemovigilance", "airway"],
  answer: `
    <h4>Recognise and stop</h4>
    <p>The first action is always to <strong>stop the transfusion</strong>; the unit and giving set are kept for investigation. Keep the line open with <strong>0.9% saline</strong> through new tubing. Assess <strong>airway</strong>, breathing and circulation, record <strong>vital signs</strong>, and call for senior help. Many reactions settle once the infusion stops, but anaphylaxis, sepsis and acute haemolysis can progress within minutes.</p>
    <h4>Bedside checks</h4>
    <ul>
      <li>Perform the <strong>clerical check</strong>: patient identity, wristband, unit label, compatibility label and blood group.</li>
      <li>Look for rash, urticaria, bronchospasm, angioedema, pain, bleeding and dark urine.</li>
      <li>Notify the <strong>blood bank</strong> and the responsible physician immediately; do not wait for results.</li>
      <li>Collect <strong>post-transfusion samples</strong> and send the unit, giving set and reaction form.</li>
      <li>Send the pre-transfusion sample alongside the post sample so that haemolysis and the DAT can be compared.</li>
    </ul>
    <h4>Supportive treatment</h4>
    <p>Give <strong>oxygen</strong> and <strong>fluids</strong>, and for <strong>anaphylaxis</strong> give intramuscular <strong>adrenaline</strong>; treat bronchospasm and hypotension as in any emergency. If sepsis is suspected, take cultures and start antibiotics. Maintain urine output, record fluid balance and watch for <strong>DIC</strong>. Antihistamines relieve mild urticaria but do not treat anaphylaxis.</p>
    <h4>Restarting and reporting</h4>
    <p>A mild <strong>urticarial</strong> reaction that resolves completely is the only situation in which transfusion may be cautiously restarted, with the same unit and close observation. Every other reaction requires the unit to be discontinued. <strong>Documentation</strong> must record the time, volume infused, signs, actions and outcome, and the patient and family should be told what happened. Report the event through <strong>haemovigilance</strong>; reporting is a professional duty, not an admission of fault.</p>
  `,
  tip: "Sequence it: stop, saline, ABC, clerical check, notify, sample, treat — and remember the urticaria exception.",
  sources: ["B1", "B9", "B2"]
},
{
  id: "ih131", domain: "ih-reactions",
  q: "Discuss the recognition and management of a transfusion reaction in an anaesthetised or sedated patient.",
  tags: ["intraoperative", "anaesthesia", "haemoglobinuria", "DIC"],
  keypoints: ["fever may be blunted", "hypotension", "haemoglobinuria", "oozing", "DIC", "potassium", "ionised calcium", "hypoxaemia", "TRALI", "TACO", "stop the transfusion", "unit label", "blood gas", "post-transfusion sample", "time-out", "barcode"],
  answer: `
    <h4>Why reactions are missed</h4>
    <p>An anaesthetised or sedated patient cannot report fever, chills, pain or a feeling of doom. <strong>Fever may be blunted</strong> by core-temperature lag and by warming devices, and <strong>hypotension</strong> is easily attributed to anaesthesia, bleeding or sepsis. A high index of suspicion is essential whenever a transfusion starts and the patient deteriorates; sometimes the only clue is a blood pressure that fails to respond to fluids and vasopressors.</p>
    <h4>Clues in the theatre</h4>
    <ul>
      <li><strong>Unexplained hypotension</strong> or tachycardia, especially soon after a unit is started.</li>
      <li><strong>Haemoglobinuria</strong> — pink or red urine in the catheter bag — or <strong>oozing</strong> from the surgical field suggesting <strong>DIC</strong>.</li>
      <li>Rising <strong>potassium</strong>, falling <strong>ionised calcium</strong>, acidosis or arrhythmia on the monitor.</li>
      <li>Unexpected <strong>hypoxaemia</strong> or rising airway pressures, suggesting <strong>TRALI</strong> or <strong>TACO</strong>.</li>
      <li>Bleeding that continues despite apparently adequate surgical haemostasis.</li>
    </ul>
    <h4>Immediate approach</h4>
    <p><strong>Stop the transfusion</strong> and tell the surgeon and anaesthetist. Check the <strong>unit label</strong> and patient identity, and send the unit and giving set to the blood bank. Take a <strong>blood gas</strong> with potassium, calcium and lactate, a coagulation screen and a <strong>post-transfusion sample</strong> for DAT and haemolysis markers; send urine for haemoglobinuria. Culture the unit and the patient if sepsis is possible. Support the circulation with fluids and vasopressors, correct hyperkalaemia and hypocalcaemia, keep the patient warm, and treat DIC with components. In massive haemorrhage, interpret the picture alongside citrate, potassium and temperature effects.</p>
    <h4>Prevention</h4>
    <p>Use a structured <strong>time-out</strong> before each unit, <strong>barcode</strong> identity checks, and a named person responsible for observing the patient during induction and maintenance. Audit every intraoperative reaction as a system event.</p>
  `,
  tip: "In theatre, the give-aways are pink urine and unexplained oozing — not fever.",
  sources: ["B1", "B9", "B11"]
},
{
  id: "ih132", domain: "ih-reactions", star: true,
  q: "Discuss occult hepatitis B infection and the role of anti-HBc and nucleic acid testing in blood safety.",
  tags: ["occult hepatitis B", "anti-HBc", "NAT", "lookback"],
  keypoints: ["hepatitis B", "HBsAg", "window period", "occult hepatitis B infection", "HBV DNA", "anti-HBc", "anti-HBs", "nucleic acid testing", "immunosuppressed", "liver transplantation", "lookback", "vaccination", "donor deferral", "resolved infection", "HBeAg", "individual-donation NAT"],
  answer: `
    <h4>The screening gap</h4>
    <p><strong>Hepatitis B</strong> is the commonest transfusion-transmitted viral infection worldwide. Surface antigen (<strong>HBsAg</strong>) screening misses two situations: the early <strong>window period</strong>, before HBsAg becomes detectable, and <strong>occult hepatitis B infection</strong>, in which <strong>HBV DNA</strong> persists at low level in liver or blood while HBsAg is negative. Assays differ in sensitivity, so a weak chronic carrier may also be missed.</p>
    <h4>Serological markers</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Interpretation</th></tr>
      <tr><td><strong>HBsAg</strong></td><td>Current infection, acute or chronic</td></tr>
      <tr><td><strong>anti-HBc</strong></td><td>Exposure; persists for life after <strong>resolved infection</strong></td></tr>
      <tr><td><strong>anti-HBs</strong></td><td>Immunity from vaccination or recovery</td></tr>
      <tr><td><strong>HBeAg</strong></td><td>High replication and infectivity</td></tr>
      <tr><td><strong>HBV DNA</strong></td><td>Direct detection by <strong>nucleic acid testing</strong></td></tr>
    </table></div>
    <h4>Anti-HBc screening</h4>
    <p>Because anti-HBc persists after resolved infection, it flags donors who may carry occult virus. Some countries, notably Japan and several European programmes, add <strong>anti-HBc</strong> testing to HBsAg and defer or genotype-positive donors; donors with isolated anti-HBc are often deferred permanently, and some are tested for HBV DNA before a decision. The yield is small but real, and transmission has been documented, particularly to <strong>immunosuppressed</strong> recipients and after <strong>liver transplantation</strong>.</p>
    <h4>NAT and lookback</h4>
    <p><strong>Nucleic acid testing</strong> detects HBV DNA before HBsAg appears and identifies occult infection, but pooled testing is cheaper and can dilute a very low viral load; <strong>individual-donation NAT</strong> is more sensitive. When a donor is found DNA-positive, <strong>lookback</strong> identifies previous recipients, who are tested and counselled. <strong>Vaccination</strong> of susceptible patients and staff remains the most effective long-term control, and <strong>donor deferral</strong> based on history and risk behaviour reduces exposure.</p>
  `,
  tip: "Define occult HBV in one line — HBsAg-negative, HBV DNA-positive — then justify anti-HBc and NAT.",
  sources: ["B8", "B1", "B7"]
},
{
  id: "ih133", domain: "ih-reactions",
  q: "Discuss transfusion-transmitted cytomegalovirus and the provision of CMV-safe blood components.",
  tags: ["CMV", "leucoreduction", "transplant", "neonate"],
  keypoints: ["cytomegalovirus", "latency", "leucocytes", "seronegative", "preterm neonates", "intrauterine transfusion", "stem cell transplant", "hepatitis", "pneumonitis", "retinitis", "CMV-safe", "CMV-seronegative donor", "leucoreduction", "monitoring", "PCR"],
  answer: `
    <h4>The virus and its niche</h4>
    <p><strong>Cytomegalovirus</strong> is a herpesvirus that establishes <strong>latency</strong> in myeloid cells. In blood, infectious virus travels inside <strong>leucocytes</strong>, so components rich in white cells — especially fresh red cells and platelets — carry the greatest risk. Stored red cells lose infectivity over time, but no component is entirely free of risk. The donor's serostatus, not the recipient's, determines the risk of exposure.</p>
    <h4>Who is at risk</h4>
    <ul>
      <li><strong>Seronegative</strong> recipients of seropositive cellular components.</li>
      <li><strong>Preterm neonates</strong> and <strong>intrauterine transfusion</strong> recipients.</li>
      <li><strong>Stem cell transplant</strong> and solid-organ transplant recipients.</li>
      <li>Seronegative pregnant women and patients with advanced HIV.</li>
    </ul>
    <p>In immunocompetent recipients, transfusion-transmitted CMV is usually asymptomatic or a mild mononucleosis-like illness, so CMV-safe components are not required for them. In the immunocompromised it causes <strong>hepatitis</strong>, <strong>pneumonitis</strong>, <strong>retinitis</strong>, gastroenteritis and marrow suppression.</p>
    <h4>CMV-safe components</h4>
    <p>A component is <strong>CMV-safe</strong> when it comes from a <strong>CMV-seronegative donor</strong> or has been <strong>leucoreduction</strong>-processed to the AABB standard. Seronegative donors are preferred for intrauterine transfusion and some neonatal and transplant protocols; leucoreduction is widely used because it also reduces febrile reactions and HLA alloimmunisation. Leucoreduction lowers but does not abolish transmission, and cases have still been reported, so <strong>monitoring</strong> with CMV DNA <strong>PCR</strong> and pre-emptive antiviral therapy is standard in high-risk transplant recipients.</p>
    <h4>Prevention in practice</h4>
    <p>Identify risk before the first transfusion, reserve CMV-safe stock, and record the requirement permanently in the patient record so that it is not lost between admissions.</p>
  `,
  tip: "CMV travels inside leucocytes — that single fact justifies both seronegative donors and leucoreduction.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih134", domain: "ih-reactions",
  q: "Discuss transfusion-transmitted parasitic infections and their prevention.",
  tags: ["malaria", "babesiosis", "Chagas disease", "donor deferral"],
  keypoints: ["Plasmodium", "donor questionnaire", "deferral", "Babesia microti", "asplenic", "Trypanosoma cruzi", "Chagas disease", "Leishmania", "Toxoplasma", "leucoreduction", "pathogen reduction", "donor selection", "thick and thin films", "PCR", "endemic"],
  answer: `
    <h4>Malaria</h4>
    <p><strong>Plasmodium</strong> species survive in refrigerated red cells, and transfusion-transmitted malaria is well described in endemic countries, including the Philippines. Donors may be asymptomatic with low parasitaemia. Prevention relies on a structured <strong>donor questionnaire</strong> covering residence and travel, temporary <strong>deferral</strong> after exposure and, in some endemic settings, antigen or antibody screening. Recipients present with fever, anaemia and hepatosplenomegaly; diagnosis is by <strong>thick and thin films</strong> and <strong>PCR</strong>.</p>
    <h4>Babesiosis</h4>
    <p><strong>Babesia microti</strong> is tick-borne in <strong>endemic</strong> regions of North America and Europe. Donors are often asymptomatic and the parasite survives storage; <strong>asplenic</strong> or elderly recipients develop severe haemolytic anaemia. Donor questioning about tick exposure and residence, with serological or NAT screening in endemic areas, reduces risk.</p>
    <h4>Chagas disease and others</h4>
    <p><strong>Trypanosoma cruzi</strong> causes <strong>Chagas disease</strong> and is a recognised transfusion risk in Latin America; donors with epidemiological risk are deferred or screened serologically. <strong>Leishmania</strong> and <strong>Toxoplasma</strong> are rare causes, mainly relevant to immunocompromised recipients.</p>
    <h4>Prevention across the group</h4>
    <div class="table-wrap"><table>
      <tr><th>Parasite</th><th>Main risk</th><th>Prevention</th></tr>
      <tr><td>Plasmodium</td><td>Endemic residence or travel</td><td>Deferral; antigen or antibody screening</td></tr>
      <tr><td>Babesia microti</td><td>Tick-endemic areas</td><td>Donor questioning; serology or NAT</td></tr>
      <tr><td>Trypanosoma cruzi</td><td>Latin America</td><td>Risk-based serology; deferral</td></tr>
    </table></div>
    <p><strong>Leucoreduction</strong> does not remove red-cell parasites, and <strong>pathogen reduction</strong> is not universally available for red cells. Prevention therefore rests on <strong>donor selection</strong>, <strong>deferral</strong>, targeted serology and clinical awareness in any recipient who develops unexplained fever or haemolysis after transfusion. Donor travel history must be recorded accurately and reviewed at every donation. Recipients should be questioned about transfusion when they present with unexplained fever and eosinophilia, and suspected cases should be reported.</p>
  `,
  tip: "Separate the red-cell parasites (malaria, Babesia, Trypanosoma) from leucocyte-associated CMV.",
  sources: ["B8", "B1", "B2"]
},
{
  id: "ih135", domain: "ih-reactions",
  q: "Discuss syphilis as a transfusion-transmitted infection and the serological screening of blood donors.",
  tags: ["syphilis", "Treponema pallidum", "RPR", "reverse algorithm"],
  keypoints: ["Treponema pallidum", "refrigerated storage", "surrogate marker", "deferral", "RPR", "VDRL", "biological false positives", "TPHA", "reverse algorithm", "prozone", "lookback", "non-treponemal", "treponemal", "partner notification"],
  answer: `
    <h4>Biology</h4>
    <p><strong>Treponema pallidum</strong> is a fragile spirochaete that loses viability during <strong>refrigerated storage</strong>, so transmission through transfusion is now extremely rare. Cases have been reported mainly with fresh components, particularly platelets kept at room temperature. Congenital and sexual transmission remain the dominant routes; transfusion is a dead end for the spirochaete.</p>
    <h4>Why donors are still screened</h4>
    <p>Screening is required by regulation and serves two purposes: it prevents the rare transmission and acts as a <strong>surrogate marker</strong> for sexual risk behaviour and other infections. A reactive result prompts <strong>deferral</strong>, confirmation and, where appropriate, <strong>partner notification</strong>.</p>
    <h4>Testing strategy</h4>
    <ul>
      <li><strong>Non-treponemal tests</strong> (<strong>RPR</strong>, <strong>VDRL</strong>) are cheap and quantitative but may give <strong>biological false positives</strong> and are less sensitive in late latency.</li>
      <li><strong>Treponemal tests</strong> (<strong>TPHA</strong>, EIA, CLIA) are specific and usually remain positive for life.</li>
      <li>The <strong>reverse algorithm</strong> screens with a treponemal EIA, then confirms with a non-treponemal test; discordant results need a second treponemal assay.</li>
      <li><strong>Prozone</strong> can cause a false-negative RPR in secondary syphilis — dilute and repeat.</li>
    </ul>
    <p>Dark-field microscopy and PCR diagnose the patient, but donor screening relies on serology because donors are asymptomatic. A reactive non-treponemal test needs confirmation, and titres help distinguish active from treated infection.</p>
    <h4>Recipient considerations</h4>
    <p>Because transmission is so uncommon, <strong>lookback</strong> is not routinely triggered by a reactive donor serology alone; it is guided by the component, the storage interval and public health advice. A recipient with an unexplained rash, fever or compatible serology should be assessed, but the finding is more often coincidental than transfusion-related.</p>
  `,
  tip: "Say why screening persists despite negligible transmission — it is a surrogate marker.",
  sources: ["B8", "B1", "B7"]
},
{
  id: "ih136", domain: "ih-reactions", star: true,
  q: "Discuss emerging infectious threats to blood safety and the layered strategies used to mitigate them.",
  tags: ["emerging pathogens", "dengue", "HEV", "pathogen reduction"],
  keypoints: ["asymptomatic viraemia", "dengue", "Zika", "hepatitis E virus", "non-enveloped", "solvent/detergent", "mpox", "West Nile virus", "SARS-CoV-2", "donor selection", "travel deferral", "nucleic acid testing", "pathogen reduction", "quarantine", "haemovigilance", "residual risk"],
  answer: `
    <h4>Why new threats appear</h4>
    <p>Global travel, urbanisation, climate change and donation from <strong>asymptomatic viraemia</strong> carriers mean that the transfusion panel is never final. Vector ranges are shifting, so an exposed donor may be perfectly well on the day of donation. A pathogen becomes a transfusion concern when it causes silent infection, survives component storage and has a plausible transmission route.</p>
    <h4>Examples</h4>
    <div class="table-wrap"><table>
      <tr><th>Pathogen</th><th>Transfusion relevance</th></tr>
      <tr><td><strong>Dengue</strong></td><td>Flavivirus; documented transmission; outbreaks are common in the Philippines</td></tr>
      <tr><td><strong>Zika</strong></td><td>Transmission during epidemics; travel deferral and NAT in affected regions</td></tr>
      <tr><td><strong>Hepatitis E virus</strong></td><td><strong>Non-enveloped</strong>, resistant to <strong>solvent/detergent</strong>; documented in Europe and Japan</td></tr>
      <tr><td><strong>Mpox</strong></td><td>Viraemia; rare transmission; donor symptom screening</td></tr>
      <tr><td><strong>West Nile virus</strong></td><td>NAT screening in affected regions</td></tr>
      <tr><td><strong>SARS-CoV-2</strong></td><td>Respiratory spread dominates; transfusion transmission not established</td></tr>
    </table></div>
    <h4>A layered response</h4>
    <ul>
      <li><strong>Donor selection</strong>: questionnaire, <strong>travel deferral</strong>, outbreak deferral and symptom checks.</li>
      <li><strong>Laboratory screening</strong>: add serology or <strong>nucleic acid testing</strong> once a threat is established and a test exists; assays must be validated for the local genotype.</li>
      <li><strong>Pathogen reduction</strong>: effective against many enveloped viruses, but not against non-enveloped viruses, spores or prions.</li>
      <li><strong>Inventory practice</strong>: <strong>quarantine</strong>, recall and lookback when a donor is implicated.</li>
      <li><strong>Haemovigilance</strong>: unexplained post-transfusion fever, rash or hepatitis should prompt reporting.</li>
    </ul>
    <p>Each decision balances <strong>residual risk</strong> against supply, cost and false-positive deferrals. No single measure is sufficient, and over-reaction can harm supply more than the pathogen. Donor education and a low threshold for reporting post-donation illness complete the system. Deferral intervals are set by regulators and revised as evidence accumulates, so the questionnaire must be version-controlled and applied consistently.</p>
  `,
  tip: "Group the response into donor, test, treat-the-product and surveillance layers — and name HEV as the non-enveloped exception.",
  sources: ["B8", "B1", "B9"]
},
{
  id: "ih137", domain: "ih-reactions",
  q: "Explain window periods and the estimation of residual risk for transfusion-transmitted infections.",
  tags: ["window period", "residual risk", "incidence", "NAT"],
  keypoints: ["window period", "NAT", "antibody tests", "incidence", "prevalence", "residual risk", "occult hepatitis B", "testing errors", "seroconversion", "lookback", "counselling", "donor selection", "individual-donation NAT", "eclipse phase"],
  answer: `
    <h4>The window period</h4>
    <p>The <strong>window period</strong> is the interval between infection and the point at which a screening test becomes reactive. The <strong>eclipse phase</strong>, before any marker is detectable, is its earliest part. The window is shortest for <strong>NAT</strong>, intermediate for antigen tests and longest for <strong>antibody tests</strong>. Approximate figures illustrate the principle:</p>
    <div class="table-wrap"><table>
      <tr><th>Infection</th><th>Antibody or antigen</th><th>NAT</th></tr>
      <tr><td>HIV</td><td>~22 days (antibody); ~15 days (combo)</td><td>~5–9 days</td></tr>
      <tr><td>Hepatitis B</td><td>~38 days (HBsAg)</td><td>~20–25 days</td></tr>
      <tr><td>Hepatitis C</td><td>~58–70 days (antibody)</td><td>~3–5 days</td></tr>
    </table></div>
    <h4>Residual risk</h4>
    <p>Residual risk is estimated as <strong>incidence</strong> multiplied by the <strong>window period</strong>, expressed per million donations. It is therefore driven by how fast new infections appear in the donor population, not by <strong>prevalence</strong> alone. A stable high-prevalence population may have lower residual risk than a low-prevalence population with a rising epidemic — the situation in the Philippines, where HIV incidence has risen sharply. Other contributors include <strong>occult hepatitis B</strong>, viral variants, <strong>testing errors</strong> and window-period donations from repeat donors. <strong>Seroconversion</strong> in a repeat donor is especially informative because earlier negative samples can be re-tested.</p>
    <h4>Communicating risk</h4>
    <p>Informed consent should present risk honestly: transfusion is safer than ever but not risk-free. <strong>Counselling</strong> of recipients exposed to a reactive donor, and <strong>lookback</strong>, depend on accurate estimates and good records. <strong>Individual-donation NAT</strong> narrows the window further, but no test replaces <strong>donor selection</strong> and careful questioning. Residual risk is a planning tool, not a guarantee for an individual recipient, and estimates are revised as epidemiology changes.</p>
  `,
  tip: "Residual risk = incidence × window period — not prevalence × window period.",
  sources: ["B8", "B1", "B9"]
},
{
  id: "ih138", domain: "ih-reactions",
  q: "Discuss lookback and traceability after a donor is found to carry a transfusion-transmissible infection.",
  tags: ["lookback", "traceability", "donor notification", "recipient counselling"],
  keypoints: ["lookback", "traceability", "seroconverts", "NAT-positive", "quarantine", "co-components", "notify", "testing", "counselling", "haemovigilance", "ISBT 128", "unique donation number", "records", "public health"],
  answer: `
    <h4>Definition</h4>
    <p><strong>Lookback</strong> is the process of identifying and notifying recipients of blood from a donor who is later found to be infected, or who <strong>seroconverts</strong> on a later donation. It is a core element of <strong>traceability</strong> — the ability to follow a unit from donor to recipient and back again. Traceability also allows a unit to be withdrawn if a processing error is discovered.</p>
    <h4>Triggers</h4>
    <ul>
      <li>A donor <strong>seroconverts</strong> or becomes <strong>NAT-positive</strong> after an earlier negative donation.</li>
      <li>A donor reports a new diagnosis or risk exposure.</li>
      <li>A recipient develops a transfusion-transmitted infection and the donor is traced.</li>
      <li>Quality review finds a testing or documentation error.</li>
    </ul>
    <h4>The process</h4>
    <ol>
      <li>Identify every component from the implicated donation and its fate.</li>
      <li><strong>Quarantine</strong> any <strong>co-components</strong> still in stock.</li>
      <li>Trace recipients through hospital <strong>records</strong> and <strong>notify</strong> them confidentially.</li>
      <li>Offer <strong>testing</strong>, <strong>counselling</strong> and, where indicated, treatment or prophylaxis.</li>
      <li>Document the outcome and report to the <strong>haemovigilance</strong> system and <strong>public health</strong> authorities.</li>
    </ol>
    <h4>Limitations</h4>
    <p>Records may be incomplete, recipients may have moved or died, and family replacement donors may be hard to re-contact. Notification must be confidential and accompanied by counselling, because a positive result affects partners and employment. <strong>ISBT 128</strong> labelling with a <strong>unique donation number</strong> makes tracing reliable; paper registers do not. The index donation and its records are retained for the period required by regulation, and lookback protects individual recipients while measuring the true performance of the screening programme. Where resources are limited, a national register of infected donors and a shared electronic record help, and consent for retaining records should be obtained at donation.</p>
  `,
  tip: "Distinguish lookback (recipients of an infected donor) from donor re-entry and from forward tracing.",
  sources: ["B8", "B7", "B1"]
},
{
  id: "ih139", domain: "ih-reactions",
  q: "Discuss transfusion-related immunomodulation: proposed mechanisms, clinical associations and current interpretation.",
  tags: ["TRIM", "leucocytes", "immunomodulation", "patient blood management"],
  keypoints: ["transfusion-related immunomodulation", "allogeneic transfusion", "leucocytes", "HLA", "Fas ligand", "transforming growth factor beta", "microvesicles", "regulatory T cells", "postoperative infection", "tumour recurrence", "leucoreduction", "confounding", "single-unit policy", "patient blood management"],
  answer: `
    <h4>The concept</h4>
    <p><strong>Transfusion-related immunomodulation</strong> describes down-regulation of the recipient's immune function after <strong>allogeneic transfusion</strong>, beyond the specific alloimmune response. It is distinct from alloimmunisation, which is antigen-specific, and from acute reactions, which are immediate. It was first inferred from improved renal transplant survival in transfused patients and from observations of altered infection and tumour outcomes.</p>
    <h4>Proposed mechanisms</h4>
    <ul>
      <li>Donor <strong>leucocytes</strong> and their soluble products, including <strong>HLA</strong> molecules and <strong>Fas ligand</strong>.</li>
      <li><strong>Transforming growth factor beta</strong> and other cytokines released during storage.</li>
      <li><strong>Microvesicles</strong> and cell-free DNA that engage recipient immune receptors.</li>
      <li>Expansion of <strong>regulatory T cells</strong> and a shift from cellular to humoral responses.</li>
    </ul>
    <h4>Clinical associations</h4>
    <p>Observational studies link transfusion to <strong>postoperative infection</strong>, reactivation of latent infection and possibly <strong>tumour recurrence</strong>. The evidence is weakened by <strong>confounding</strong> — sicker patients are both more likely to be transfused and more likely to have poor outcomes — and randomised evidence is limited. <strong>Leucoreduction</strong> trials in cardiac and colorectal surgery gave conflicting results, and meta-analyses are limited by heterogeneity. A beneficial effect has been claimed in renal transplantation and recurrent miscarriage, but it is not a basis for practice.</p>
    <h4>Contemporary view</h4>
    <p>Transfusion-related immunomodulation is a plausible biological phenomenon whose clinical importance remains uncertain. The safest interpretation is that any effect is small compared with the risks of unnecessary transfusion. It reinforces <strong>patient blood management</strong>: transfuse only when benefit is clear, use a <strong>single-unit policy</strong> with reassessment, and avoid unnecessary exposure.</p>
  `,
  tip: "Be honest that the evidence is confounded — then turn it into a patient blood management argument.",
  sources: ["B1", "B11", "B2"]
},
{
  id: "ih140", domain: "ih-reactions", star: true,
  q: "Discuss the classification of transfusion reactions by severity and imputability and its use in haemovigilance.",
  tags: ["imputability", "severity", "case definitions", "NHSN"],
  keypoints: ["case definitions", "imputability", "definite", "probable", "possible", "doubtful", "ruled out", "non-severe", "life-threatening", "ABO-incompatible", "transfusion committee", "near misses", "benchmarking", "corrective action"],
  answer: `
    <h4>Why standard definitions matter</h4>
    <p>Reaction rates can be compared only if every hospital uses the same <strong>case definitions</strong>. The CDC NHSN Hemovigilance Module and the ISBT definitions provide criteria for each reaction type and require a judgement of <strong>imputability</strong> — how likely the transfusion was the cause. Rates are expressed per 1,000 units transfused or per 1,000 patients, so the denominator must always be stated.</p>
    <h4>Imputability categories</h4>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>Meaning</th></tr>
      <tr><td><strong>Definite</strong></td><td>Clear evidence and no alternative explanation</td></tr>
      <tr><td><strong>Probable</strong></td><td>Evidence supports transfusion; alternatives less likely</td></tr>
      <tr><td><strong>Possible</strong></td><td>Evidence is weak or alternatives exist</td></tr>
      <tr><td><strong>Doubtful</strong></td><td>Transfusion unlikely but not excluded</td></tr>
      <tr><td><strong>Ruled out</strong></td><td>Another cause established</td></tr>
    </table></div>
    <h4>Severity</h4>
    <ul>
      <li><strong>Non-severe</strong>: no immediate danger and no treatment beyond stopping the transfusion.</li>
      <li><strong>Severe</strong>: significant morbidity, prolonged stay or specific treatment required.</li>
      <li><strong>Life-threatening</strong>: intensive support, organ failure or disability.</li>
      <li><strong>Death</strong>: the recipient died and transfusion contributed.</li>
    </ul>
    <h4>Applying the criteria</h4>
    <p>An <strong>ABO-incompatible</strong> transfusion with a positive DAT, haemoglobinuria and a clerical error is <strong>definite</strong>. A fever alone, with a negative workup and an alternative infection, is at most <strong>possible</strong>. Classification requires the clerical check, DAT, cultures and clinical timeline, and should be agreed by the <strong>transfusion committee</strong> rather than by one person. The same case can be reclassified when new information arrives, such as a positive culture. <strong>Near misses</strong> are reported separately. Consistent grading supports <strong>benchmarking</strong>, trend analysis and <strong>corrective action</strong>. National schemes aggregate the data to detect signals that a single hospital cannot see, and feedback to clinical teams closes the loop. The transfusion committee should review every death and every life-threatening case.</p>
  `,
  tip: "Definite needs no alternative explanation; a lone fever with another infection can only be possible.",
  sources: ["B9", "B1", "B5"]
},
{
  id: "ih141", domain: "ih-reactions",
  q: "Discuss the indications and consequences of modifying blood components: leucoreduction, irradiation, washing and volume reduction.",
  tags: ["leucoreduction", "irradiation", "washing", "component modification"],
  keypoints: ["pre-storage leucoreduction", "febrile non-haemolytic reactions", "HLA alloimmunisation", "CMV transmission", "irradiation", "T lymphocytes", "TA-GVHD", "potassium", "washing", "IgA deficiency", "hyperkalaemia", "volume reduction", "frozen deglycerolised", "pathogen reduction"],
  answer: `
    <h4>Leucoreduction</h4>
    <p><strong>Pre-storage leucoreduction</strong> removes white cells to below the AABB limit and prevents cytokine accumulation during storage. It reduces <strong>febrile non-haemolytic reactions</strong>, <strong>HLA alloimmunisation</strong>, platelet refractoriness and <strong>CMV transmission</strong>. It also lowers the risk of refractoriness in repeatedly transfused patients. Leucoreduced components are the standard in many national programmes. Bedside filtration is inferior because cytokines have already formed.</p>
    <h4>Irradiation</h4>
    <p><strong>Irradiation</strong> damages donor <strong>T lymphocytes</strong> so they cannot engraft, preventing <strong>TA-GVHD</strong>. It is indicated for immunocompromised recipients, intrauterine and neonatal exchange transfusion, and donations from blood relatives. Irradiated red cells leak <strong>potassium</strong> and have a shortened shelf life, so they should not be used for large-volume neonatal transfusion without washing. Irradiated units must be clearly labelled and must never be irradiated twice.</p>
    <h4>Washing and volume reduction</h4>
    <ul>
      <li><strong>Washing</strong> removes plasma proteins, antibodies and potassium; it is used for severe recurrent allergic reactions, <strong>IgA deficiency</strong> with anti-IgA, and neonatal <strong>hyperkalaemia</strong> risk.</li>
      <li><strong>Volume reduction</strong> concentrates a component for fluid-restricted neonates.</li>
      <li><strong>Frozen deglycerolised</strong> red cells preserve rare phenotypes.</li>
    </ul>
    <h4>Pitfalls</h4>
    <p>Modifications are not interchangeable: washing and irradiation shorten expiry, reduce cell yield and must be requested in advance. Washed components have a short expiry because the open system allows bacterial contamination. <strong>Pathogen reduction</strong> inactivates lymphocytes and can substitute for irradiation for platelets and plasma, but not for red cells. Each modification adds cost and wastage, so document the indication and never modify a component without a clinical reason. Request modifications early, because they cannot be performed reliably at the bedside, and record them on the request form.</p>
  `,
  tip: "For each modification, give one indication and one penalty — that is what examiners reward.",
  sources: ["B1", "B5", "B2"]
},
{
  id: "ih142", domain: "ih-reactions",
  q: "Discuss the recognition, investigation and prevention of transfusion reactions in neonates and small children.",
  tags: ["neonatal transfusion", "hypothermia", "apnoea", "NEC"],
  keypoints: ["small blood volume", "immature immunity", "IgG", "HDFN", "volume overload", "hyperkalaemia", "hypothermia", "apnoea", "bradycardia", "transfusion-associated necrotising enterocolitis", "post-transfusion sample", "DAT", "CMV-safe", "irradiated", "blood warmer", "single donor"],
  answer: `
    <h4>Why neonates differ</h4>
    <p>Neonates have a <strong>small blood volume</strong>, <strong>immature immunity</strong> and limited reserve, so a reaction that would be mild in an adult can be catastrophic. Maternal <strong>IgG</strong> persists for months and may cause <strong>HDFN</strong> or haemolysis after transfusion. Small volumes make <strong>volume overload</strong> and <strong>hyperkalaemia</strong> more likely. Repeated small transfusions expose an infant to many donors, increasing infectious and alloimmune risk.</p>
    <h4>Recognising a reaction</h4>
    <ul>
      <li><strong>Hypothermia</strong> rather than fever, with temperature instability.</li>
      <li><strong>Apnoea</strong>, <strong>bradycardia</strong>, desaturation, hypotension or poor perfusion.</li>
      <li>Feed intolerance, abdominal distension or bloody stools — consider <strong>transfusion-associated necrotising enterocolitis</strong> in preterm infants.</li>
      <li>Jaundice, dark urine, anaemia or unexplained bleeding.</li>
      <li>Rash, urticaria or angioedema.</li>
    </ul>
    <h4>Investigation</h4>
    <p>Stop the transfusion, check identity and the unit label, and notify the blood bank. Take a <strong>post-transfusion sample</strong> for <strong>DAT</strong>, plasma haemoglobin, bilirubin and blood gas, and send urine for haemoglobin. Use a small-volume sample and liaise with the laboratory so that essential tests are not lost. Culture the unit and the infant if sepsis is suspected. Interpret the DAT against the maternal antibody screen, because passive maternal antibody and recent RhIG can confuse the picture.</p>
    <h4>Prevention</h4>
    <p>Use <strong>CMV-safe</strong>, <strong>irradiated</strong> components for at-risk infants, small aliquots from a <strong>single donor</strong> to limit exposure, and a validated <strong>blood warmer</strong> for large volumes. Transfuse only for defined thresholds, reassess after each aliquot, involve parents in checking the label, and keep a donor exposure record for later traceability. Capillary samples are acceptable for many tests, but haemolysis from a difficult heel prick can confuse the results.</p>
  `,
  tip: "In a neonate, think hypothermia and apnoea — not fever and chills.",
  sources: ["B1", "B2", "B9"]
},
{
  id: "ih143", domain: "ih-reactions", star: true,
  q: "Discuss emergency release of uncrossmatched blood: indications, risks, safe practice and follow-up.",
  tags: ["emergency release", "uncrossmatched", "group O", "massive haemorrhage"],
  keypoints: ["emergency release", "crossmatch", "group O red cells", "D-negative", "group AB plasma", "haemolytic reaction", "alloantibodies", "alloimmunisation", "TACO", "TRALI", "emergency release request", "antibody screen", "group-specific", "document", "audit", "transfusion committee"],
  answer: `
    <h4>When there is no time</h4>
    <p><strong>Emergency release</strong> provides blood before completion of the <strong>crossmatch</strong> in life-threatening haemorrhage. The blood bank issues <strong>group O red cells</strong> — <strong>D-negative</strong> for females of childbearing potential where possible — and <strong>group AB plasma</strong>, or group-compatible plasma according to local policy. Uncrossmatched blood buys time but does not replace control of the bleeding source.</p>
    <h4>Risks</h4>
    <ul>
      <li><strong>Haemolytic reaction</strong> from non-ABO <strong>alloantibodies</strong>, especially in previously transfused or pregnant patients.</li>
      <li><strong>Alloimmunisation</strong> to D and other antigens, complicating future transfusion and pregnancy.</li>
      <li><strong>TACO</strong> and <strong>TRALI</strong> when large volumes are given rapidly.</li>
      <li>Transfusion of the wrong unit if identification checks are rushed.</li>
    </ul>
    <h4>Safe practice</h4>
    <p>Use a written <strong>emergency release request</strong> with patient identifiers, the clinical indication and the requesting clinician. Communicate directly with the blood bank and record the time of each request. If the patient has known alloantibodies, tell the blood bank at the time of the request so that antigen-negative units can be sought. Keep a sample for later <strong>crossmatch</strong> and <strong>antibody screen</strong>. Switch to <strong>group-specific</strong> blood as soon as two ABO determinations are available, and use a massive haemorrhage protocol rather than repeated ad hoc requests.</p>
    <h4>Follow-up</h4>
    <p>After the emergency, complete the crossmatch retrospectively, review the patient for haemolysis and <strong>document</strong> the indication and outcome. Review the antibody screen again weeks later, because alloimmunisation may be delayed. <strong>Audit</strong> every emergency release through the <strong>transfusion committee</strong>, and debrief the team while the event is fresh, because the rate is a marker of both clinical urgency and blood-bank efficiency.</p>
  `,
  tip: "Emergency release is a risk trade-off — name the antibody risk and the switch to group-specific blood.",
  sources: ["B1", "B5", "B9"]
},
{
  id: "ih144", domain: "ih-reactions",
  q: "Discuss transfusion-transmitted HTLV-1: biology, clinical consequences, screening and prevention.",
  tags: ["HTLV-1", "ATL", "HAM/TSP", "leucoreduction"],
  keypoints: ["HTLV-1", "deltaretrovirus", "CD4+ T lymphocytes", "cell-associated", "Japan", "Caribbean", "adult T-cell leukaemia/lymphoma", "HAM/TSP", "leucoreduction", "pathogen reduction", "donor counselling", "screening", "traceability", "residual risk"],
  answer: `
    <h4>The agent</h4>
    <p><strong>HTLV-1</strong> is a <strong>deltaretrovirus</strong> that infects <strong>CD4+ T lymphocytes</strong>. It is <strong>cell-associated</strong>, so transmission requires viable lymphocytes — the reason cellular components, especially fresh ones, carry risk while plasma and acellular products do not. Sexual, mother-to-child and needle transmission also occur, but transfusion is an efficient parenteral route.</p>
    <h4>Epidemiology and disease</h4>
    <p>HTLV-1 is endemic in parts of <strong>Japan</strong>, the <strong>Caribbean</strong>, South America and West Africa. Most carriers are asymptomatic. After decades, a minority develop <strong>adult T-cell leukaemia/lymphoma</strong> or <strong>HAM/TSP</strong>; uveitis and infective dermatitis also occur. The interval between infection and disease is long, which is why prevention is cheaper than diagnosis decades later.</p>
    <h4>Screening and prevention</h4>
    <ul>
      <li>Some countries screen all donations; others screen donors with epidemiological risk or defer them.</li>
      <li>Serology is by enzyme immunoassay and is confirmed by line immunoassay or PCR. Confirmation prevents unnecessary permanent deferral of a falsely reactive donor, and a confirmed positive donor is permanently deferred.</li>
      <li><strong>Leucoreduction</strong> reduces the cell load and therefore the risk, but is not a guarantee.</li>
      <li><strong>Pathogen reduction</strong> is effective against enveloped viruses in plasma and platelets, but red cells remain a challenge.</li>
      <li><strong>Donor counselling</strong> and confidential notification are essential, because a positive result has implications for family members.</li>
    </ul>
    <h4>Recipient perspective</h4>
    <p>There is no vaccine and no curative treatment for HTLV-1. Prevention therefore depends on donor selection, appropriate <strong>screening</strong> and <strong>traceability</strong>. In low-prevalence settings, universal screening may not be cost-effective, and the <strong>residual risk</strong> is very small. Recipients known to be infected need long-term follow-up with neurology and haematology.</p>
  `,
  tip: "HTLV-1 is cell-associated — say that before you discuss leucoreduction and screening policy.",
  sources: ["B8", "B1", "B11"]
}
);
