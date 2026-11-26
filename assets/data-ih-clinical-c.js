/* Immunohematology — part 6: Philippine transfusion practice, haemostasis & special cases (set C) */
window.QBANK.push(
{
  id: "ih231", domain: "ih-clinical", star: true,
  q: "Discuss patient blood management as a hospital programme in the Philippines: the three pillars, the tools that make it operational, and the indicators that show it is working.",
  tags: ["patient blood management", "Philippines", "stewardship", "quality"],
  keypoints: ["patient blood management", "preoperative anaemia", "single-unit transfusion", "restrictive threshold", "tranexamic acid", "cell salvage", "order sets", "clinical decision support", "transfusion committee", "wastage", "RA 7719", "PBCC standards", "PhilHealth", "erythropoietin"],
  answer: `
    <h4>Why PBM fits the Philippine supply picture</h4>
    <p><strong>Patient blood management</strong> (PBM) is a coordinated, patient-centred strategy to preserve the patient's own blood and reduce avoidable transfusion. In the Philippines the case is as much logistical as clinical: voluntary donation remains short of demand, family replacement donation persists, and dengue outbreaks and obstetric emergencies compete for the same units. PBM therefore supports <strong>RA 7719</strong> and the Philippine National Blood Services network rather than sitting outside them.</p>
    <h4>What a hospital programme contains</h4>
    <ul>
      <li><strong>Optimise red cell mass</strong>: find and treat <strong>preoperative anaemia</strong> with iron studies, oral or intravenous iron, vitamin B12 and folate, and <strong>erythropoietin</strong> in selected patients.</li>
      <li><strong>Minimise blood loss</strong>: <strong>tranexamic acid</strong>, meticulous haemostasis, <strong>cell salvage</strong>, small-volume phlebotomy tubes, and planned management of anticoagulants.</li>
      <li><strong>Tolerate anaemia</strong>: a <strong>restrictive threshold</strong>, a <strong>single-unit transfusion</strong> policy with reassessment, and oxygen-delivery support instead of reflexive transfusion.</li>
    </ul>
    <h4>Making it operational</h4>
    <p>PBM fails when it lives only in a guideline. It needs <strong>order sets</strong> and <strong>clinical decision support</strong> in the chart, a named anaemia clinic, and a <strong>transfusion committee</strong> that reviews indication and <strong>wastage</strong>. The <strong>PBCC standards</strong> and DOH licensing provide the quality frame; <strong>PhilHealth</strong> payment policy shapes whether hospitals are rewarded for appropriate use or simply for volume.</p>
    <h4>Metrics and a realistic start</h4>
    <div class="table-wrap"><table>
      <tr><th>Domain</th><th>Indicator</th></tr>
      <tr><td>Anaemia</td><td>Preoperative haemoglobin and iron studies completed before elective surgery</td></tr>
      <tr><td>Use</td><td>Single-unit transfusions as a proportion of red cell orders</td></tr>
      <tr><td>Supply</td><td>Units wasted and crossmatch-to-transfusion ratio</td></tr>
      <tr><td>Outcome</td><td>Reaction rate, TACO and length of stay</td></tr>
    </table></div>
    <p>A provincial hospital can begin with three: anaemia screening before elective surgery, single-unit practice, and wastage review. Report them monthly, feed them to the committee, and expand only when the first three are stable. PBM is not a ban on transfusion; it is the discipline of giving the right unit, to the right patient, at the right time.</p>
  `,
  tip: "Anchor PBM in the three pillars, then show how order sets, the committee and a few indicators make it real in a Philippine hospital.",
  sources: ["B14", "B15", "B17", "B12"]
},
{
  id: "ih232", domain: "ih-clinical", star: true,
  q: "Discuss blood supply constraints in the Philippines: the structural causes of shortage, the operational response, and the ethics of allocating a scarce product.",
  tags: ["blood supply", "shortage", "Philippines", "allocation"],
  keypoints: ["family replacement donation", "voluntary non-remunerated donors", "dengue outbreak", "obstetric emergencies", "typhoons", "group O D-negative", "blood services network", "stock levels", "FIFO and FEFO", "donor retention", "wastage", "transfusion committee", "patient blood management"],
  answer: `
    <h4>The structural gap</h4>
    <p>Philippine blood supply depends on a mixed system: <strong>voluntary non-remunerated donors</strong> recruited by the Philippine Red Cross and hospital blood banks, plus <strong>family replacement donation</strong> when a patient is transfused. Replacement donation keeps shelves filled but is the least predictable source, because donors are motivated by obligation rather than regular donation. Supply is further limited by geography, limited component capacity outside major centres, and the cost of testing and transport. The result is not a uniform national shortage but recurrent local scarcity.</p>
    <h4>What drives a shortage</h4>
    <div class="table-wrap"><table>
      <tr><th>Driver</th><th>Effect on the service</th><th>Mitigation</th></tr>
      <tr><td><strong>Dengue outbreak</strong></td><td>Sudden platelet demand and red cell use</td><td>Seasonal stock planning, evidence-based platelet use</td></tr>
      <tr><td><strong>Obstetric emergencies</strong></td><td>Unpredictable red cell and plasma demand</td><td>Obstetric packs, early activation, referral links</td></tr>
      <tr><td><strong>Typhoons</strong> and disasters</td><td>Disrupted collection, transport and power</td><td>Contingency stock, validated cold chain, regional sharing</td></tr>
      <tr><td>Holidays and school breaks</td><td>Fewer mobile drives</td><td>Calendar-based recruitment, workplace drives</td></tr>
    </table></div>
    <h4>Allocating a scarce product</h4>
    <p>When stock is short, the blood bank needs an explicit, defensible order of priority: life-threatening haemorrhage, symptomatic severe anaemia, and transfusion-dependent patients with no alternative. <strong>Group O D-negative</strong> units are preserved for women of childbearing potential and emergency release, and group-compatible alternatives are used where safe. Withholding blood from a stable patient until the next collection is a clinical decision that must be documented, not a clerk's decision at the counter.</p>
    <h4>Building resilience</h4>
    <p>Set minimum and ideal <strong>stock levels</strong> by group, use <strong>FIFO and FEFO</strong> rotation, share units through the <strong>blood services network</strong>, and audit <strong>wastage</strong>. <strong>Donor retention</strong> matters more than one-off campaigns: a regular donor who returns is safer and cheaper than a replacement donor recruited under pressure. A functioning <strong>transfusion committee</strong> links these operational choices to clinical demand, and <strong>patient blood management</strong> reduces the pressure at source.</p>
  `,
  tip: "Separate structural scarcity from seasonal spikes, then show that allocation rules and donor retention are quality issues, not just logistics.",
  sources: ["B15", "B14", "B8", "B17"]
},
{
  id: "ih233", domain: "ih-clinical", star: true,
  q: "Discuss how blood transfusion is paid for in the Philippines: PhilHealth case rates, No Balance Billing, the costs that remain with the patient, and the laboratory's role in financial transparency.",
  tags: ["PhilHealth", "cost", "Philippines", "consent"],
  keypoints: ["case rate", "processing fees", "No Balance Billing", "Universal Health Care Act", "PhilHealth accreditation", "medical social workers", "informed financial consent", "informed consent", "transfusion committee", "out-of-pocket payments", "PBCC", "DOH network"],
  answer: `
    <h4>How transfusion is paid for</h4>
    <p>PhilHealth does not usually buy blood by the unit. For admitted patients, transfusion sits inside the <strong>case rate</strong> or package paid for the admission, so the hospital absorbs the cost of blood, processing and related care within that payment. Stand-alone outpatient transfusion is not a routine benefit. The practical consequence is that the money follows the admission, not the product, and the benefit schedule must be checked against current PhilHealth circulars because rates and packages change.</p>
    <h4>What the patient may still pay</h4>
    <ul>
      <li><strong>Processing fees</strong> charged by the blood service facility, which are not the same as the cost of the unit.</li>
      <li>Replacement donation arrangements, transport and accommodation when blood must be sourced elsewhere.</li>
      <li>Components or modifications not covered by the package, and care in facilities without a PhilHealth contract.</li>
      <li>Indirect costs: lost wages, repeated trips, and a companion's expenses.</li>
    </ul>
    <h4>Protection mechanisms</h4>
    <p><strong>No Balance Billing</strong> protects qualified indigent and sponsored members in government facilities from charges beyond the package. The <strong>Universal Health Care Act</strong> and <strong>PhilHealth accreditation</strong> rules push towards contracted, licensed blood service facilities, which is also a quality lever. <strong>Medical social workers</strong> can arrange guarantees and charity funds; the <strong>PBCC</strong> and <strong>DOH network</strong> rules determine where blood can be obtained lawfully. None of these removes the need for transparent billing.</p>
    <h4>Informed financial consent</h4>
    <p>Patients should be told, before transfusion, what the package covers and what it does not. <strong>Informed consent</strong> for the transfusion and <strong>informed financial consent</strong> are separate conversations, and both belong in the record. A <strong>transfusion committee</strong> should audit billing complaints, <strong>out-of-pocket payments</strong> and denied claims alongside clinical appropriateness; a benefit that exists on paper but is never accessed is not protection.</p>
  `,
  tip: "Explain the case-rate logic, then name No Balance Billing and the residual out-of-pocket costs; that balance is what examiners want.",
  sources: ["B17", "B14", "C18", "S33"]
},
{
  id: "ih234", domain: "ih-clinical", star: true,
  q: "Compare dengue and obstetric haemorrhage as drivers of blood demand in the Philippines, and discuss how a hospital manages the two when they compete for the same components.",
  tags: ["dengue", "postpartum haemorrhage", "Philippines", "demand"],
  keypoints: ["plasma leakage", "thrombocytopenia", "prophylactic platelet transfusion", "postpartum haemorrhage", "tranexamic acid", "massive transfusion protocol", "fibrinogen replacement", "group O red cells", "RhIG", "obstetric pack", "referral criteria", "transfusion committee"],
  answer: `
    <h4>Two patterns of demand</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Dengue</th><th>Obstetric haemorrhage</th></tr>
      <tr><td>Typical trigger</td><td>Critical-phase <strong>plasma leakage</strong> and <strong>thrombocytopenia</strong></td><td>Uterine atony, trauma, retained placenta, coagulopathy</td></tr>
      <tr><td>Component pressure</td><td>Platelets, some red cells</td><td>Red cells, plasma, fibrinogen</td></tr>
      <tr><td>Time course</td><td>Days, with a narrow critical phase</td><td>Minutes to hours</td></tr>
      <tr><td>Common error</td><td>Transfusing for a platelet count</td><td>Delayed activation and under-replacement of fibrinogen</td></tr>
    </table></div>
    <h4>Dengue: platelets are rarely the answer</h4>
    <p>In dengue the platelet count correlates poorly with bleeding, and <strong>prophylactic platelet transfusion</strong> in a stable patient does not prevent haemorrhage; it consumes a scarce product and adds reactions. Red cells are for haemodynamically significant bleeding, not for haemoconcentration, and plasma is not a treatment for leakage. Fluids, monitoring and recognition of warning signs do most of the work.</p>
    <h4>Obstetric haemorrhage: minutes matter</h4>
    <p><strong>Postpartum haemorrhage</strong> kills through hypovolaemia and coagulopathy. Pregnancy masks volume loss, so tachycardia and a rising shock index may precede a fall in blood pressure. Activation of a <strong>massive transfusion protocol</strong>, early <strong>tranexamic acid</strong>, uterotonics and <strong>fibrinogen replacement</strong> are time-critical. <strong>Group O red cells</strong> may be needed before the group is known; <strong>RhIG</strong> is given to D-negative unsensitised women afterwards.</p>
    <h4>When the two collide</h4>
    <p>Dengue season can exhaust platelets and O-negative red cells just as obstetric units need them. The response is operational: forecast demand, hold an <strong>obstetric pack</strong>, agree <strong>referral criteria</strong>, and protect group O units for emergency release. A district hospital that cannot provide components should have a written transfer trigger rather than a desperate phone call at 2 a.m.</p>
    <h4>Audit</h4>
    <p>Review every obstetric transfusion and a sample of dengue transfusions: indication, time to first unit, wastage and outcome. The <strong>transfusion committee</strong> should feed findings back to obstetrics, paediatrics and internal medicine, because the commonest error in both conditions is transfusing for a number rather than for a patient.</p>
  `,
  tip: "Contrast the two demand curves in a table, then make the operational point: seasonal forecasting and an obstetric pack protect both services.",
  sources: ["B14", "B17", "B11", "B12"]
},
{
  id: "ih235", domain: "ih-clinical", star: true,
  q: "Discuss the organisation of a chronic transfusion service for thalassaemia in the Philippines: matching, iron monitoring, and the programme elements that keep patients alive and adherent.",
  tags: ["thalassaemia", "chronic transfusion", "Philippines", "iron overload"],
  keypoints: ["beta-thalassaemia major", "HbE/beta-thalassaemia", "extended red cell phenotyping", "transfusion every two to five weeks", "leukoreduced units", "alloimmunisation", "iron overload", "chelation", "MRI T2*", "rare-donor registry", "transition plan", "PhilHealth"],
  answer: `
    <h4>The burden</h4>
    <p><strong>Beta-thalassaemia major</strong> and <strong>HbE/beta-thalassaemia</strong> are the dominant forms in the Philippines. Regular <strong>transfusion every two to five weeks</strong> suppresses ineffective erythropoiesis, prevents bone deformity and extramedullary haematopoiesis, and supports growth. The target pretransfusion haemoglobin is usually 95-105 g/L. This is a lifelong commitment, and the service, not just the prescription, determines whether it succeeds.</p>
    <h4>Matching from the first unit</h4>
    <p><strong>Extended red cell phenotyping</strong> or genotyping should be done before the first transfusion, because once a patient is transfused the phenotype becomes ambiguous. Match at least ABO, Rh C/c, E/e and K; many programmes add Jk, Fy, S/s and Mia, which matters in Filipino donors and recipients. Use <strong>leukoreduced units</strong> to reduce febrile reactions and HLA alloimmunisation. Every new alloantibody narrows the donor pool, delays transfusion and raises the risk of a delayed haemolytic reaction. Phenotype matching reduces <strong>alloimmunisation</strong> from a substantial minority to a few per cent.</p>
    <h4>Iron and the price of survival</h4>
    <p>Transfusion without chelation trades anaemia for <strong>iron overload</strong>. Monitor ferritin and, where available, cardiac and hepatic <strong>MRI T2*</strong>. <strong>Chelation</strong> must start early, and adherence discussed honestly, because cost and side effects are real barriers. Screen for diabetes, hypothyroidism, hypogonadism and cardiac disease. Splenomegaly increases transfusion requirement and should prompt review rather than automatic escalation of volume.</p>
    <h4>Organising the service</h4>
    <ul>
      <li>A registry, a named coordinator, a <strong>rare-donor registry</strong> and a <strong>transition plan</strong> to adult care.</li>
      <li><strong>PhilHealth</strong> packages and DOH programmes, with honest discussion of transport and lost-income costs.</li>
      <li>Patient associations for adherence, advocacy and practical support.</li>
      <li>Audit of units per kilogram per year, alloimmunisation rate, ferritin trend and school or work attendance.</li>
    </ul>
    <p>These tell you whether the programme is treating a patient or only a laboratory value.</p>
  `,
  tip: "Move from the individual prescription to the programme: pre-first-transfusion phenotyping, chelation access and a registry are what change outcomes.",
  sources: ["B14", "B1", "B2", "B11"]
},
{
  id: "ih236", domain: "ih-clinical", star: true,
  q: "A patient in the Philippines presents with fever, jaundice and a falling haemoglobin. Discuss how you would distinguish autoimmune haemolytic anaemia from its mimics and when you would transfuse.",
  tags: ["AIHA", "dengue", "G6PD", "drug-induced haemolysis"],
  keypoints: ["autoimmune haemolytic anaemia", "DAT", "adsorption studies", "alloantibody", "antigen-negative units", "least incompatible", "blood warmer", "G6PD deficiency", "ceftriaxone", "rituximab", "antibody card", "paroxysmal cold haemoglobinuria"],
  answer: `
    <h4>A familiar trap in dengue season</h4>
    <p>Fever, jaundice, anaemia and a falling haemoglobin in the Philippines invites a dengue diagnosis. But <strong>autoimmune haemolytic anaemia</strong> can present the same way, and so can <strong>G6PD deficiency</strong> after an oxidant drug, drug-dependent haemolysis from <strong>ceftriaxone</strong> or piperacillin, and malaria. The DAT is the pivot: warm AIHA gives IgG with or without C3, cold agglutinin disease gives C3 only, and G6PD haemolysis is DAT-negative with bite cells and Heinz bodies.</p>
    <h4>Laboratory pathway</h4>
    <ul>
      <li>Confirm haemolysis: reticulocytes, bilirubin, LDH, haptoglobin and a blood film.</li>
      <li><strong>DAT</strong> with monospecific anti-IgG and anti-C3d; repeat on an EDTA sample if the first is doubtful.</li>
      <li>Eluate in warm AIHA, and <strong>adsorption studies</strong> when an <strong>alloantibody</strong> must be excluded.</li>
      <li>Phenotype or genotype the patient early, before transfusion obscures the picture.</li>
      <li>Look for the cause: lymphoma, lupus, infection, drugs, and in children a viral trigger.</li>
    </ul>
    <h4>Transfusion without guesswork</h4>
    <p>A panreactive crossmatch is not a reason to withhold blood from a symptomatic patient, and it is not a licence to transfuse blindly. Exclude alloantibodies by adsorption, give <strong>antigen-negative units</strong> for any specificity found, and transfuse slowly with monitoring. The old phrase <strong>least incompatible</strong> unit describes a compromise, not a safety guarantee. Cold agglutinin disease needs a warm patient and a <strong>blood warmer</strong>; <strong>paroxysmal cold haemoglobinuria</strong> needs avoidance of cold.</p>
    <h4>Therapy in a constrained setting</h4>
    <p>Steroids remain first-line for warm AIHA, with <strong>rituximab</strong> for relapse or steroid dependence and complement inhibitors for cold disease. Access and cost vary, so the plan must be explicit. Treat the underlying disorder, vaccinate before complement inhibitors, and give an <strong>antibody card</strong>. Document the diagnosis, the serology and the transfusion plan so the next febrile admission is not another diagnostic lottery.</p>
  `,
  tip: "Use the DAT to split the differential, then insist that adsorption, not the crossmatch, decides whether an alloantibody is present.",
  sources: ["B13", "B1", "B2", "B14"]
},
{
  id: "ih237", domain: "ih-clinical", star: true,
  q: "Discuss massive transfusion protocol design and the transfusion committee's role in governing it, including the quality indicators that show whether the protocol is working.",
  tags: ["massive transfusion", "transfusion committee", "quality indicators", "governance"],
  keypoints: ["massive transfusion protocol", "group O red cells", "balanced ratio", "viscoelastic testing", "tranexamic acid", "transfusion committee", "haemovigilance", "time to first unit", "pack wastage", "single-unit orders", "reaction reporting", "debrief", "DOH licensing"],
  answer: `
    <h4>Why a protocol beats improvisation</h4>
    <p>Major haemorrhage from trauma, ruptured aneurysm, gastrointestinal bleeding or obstetric catastrophe overwhelms the laboratory's normal workflow. A <strong>massive transfusion protocol</strong> replaces ad hoc requests with predetermined activation criteria, a fixed pack of components, and a named coordinator. <strong>Group O red cells</strong> are issued before the group is known, then type-specific and crossmatched units; plasma and platelets are given in a <strong>balanced ratio</strong> while <strong>viscoelastic testing</strong> or fibrinogen levels guide correction. <strong>Tranexamic acid</strong>, warming, calcium and potassium monitoring are part of the pack, not optional extras.</p>
    <h4>The committee owns the protocol</h4>
    <p>A protocol written by the blood bank alone will not be used at 3 a.m. The hospital <strong>transfusion committee</strong> must approve it with emergency medicine, surgery, anaesthesia, obstetrics and nursing, set activation and deactivation criteria, and review every activation. Its terms of reference should cover policy approval, adverse events, <strong>haemovigilance</strong>, education and corrective action, with minutes that record decisions and owners.</p>
    <h4>Indicators that change behaviour</h4>
    <div class="table-wrap"><table>
      <tr><th>Indicator</th><th>Definition</th><th>Why it matters</th></tr>
      <tr><td><strong>Time to first unit</strong></td><td>Activation to issue</td><td>Tests the whole chain, not just the fridge</td></tr>
      <tr><td><strong>Pack wastage</strong></td><td>Units thawed but not transfused</td><td>Balances preparedness against scarcity</td></tr>
      <tr><td><strong>Single-unit orders</strong></td><td>Red cell orders of one unit</td><td>Detects reflexive two-unit practice</td></tr>
      <tr><td><strong>Reaction reporting</strong></td><td>Reported per 1,000 units</td><td>Finds under-recognition and near misses</td></tr>
    </table></div>
    <h4>Closing the loop</h4>
    <p><strong>Debrief</strong> within 24 hours, distinguish system failures from individual errors, and track actions to completion. Simulated drills expose the real bottlenecks: porter availability, crossmatch staffing, fridge access and telephone trees. The committee should also review consent documentation and wastage. In the Philippines, these records are the evidence base for <strong>DOH licensing</strong> and PBCC standards, and for a network that has to share a scarce supply.</p>
  `,
  tip: "Show that the protocol is a clinical tool and a governance object: activation criteria, committee ownership, and four indicators with definitions.",
  sources: ["B1", "B5", "B14", "B15", "B17"]
},
{
  id: "ih238", domain: "ih-clinical", star: true,
  q: "Discuss the evidence for restrictive red cell transfusion thresholds, the physiology that makes them defensible, the legitimate exceptions, and how to implement them without rationing care.",
  tags: ["restrictive threshold", "transfusion evidence", "single-unit", "implementation"],
  keypoints: ["restrictive transfusion threshold", "45 randomised trials", "75-80 g/L", "single-unit transfusion", "storage lesion", "TACO", "TRALI", "acute myocardial infarction", "MINT trial", "chronic transfusion", "order set", "transfusion committee"],
  answer: `
    <h4>What the evidence says</h4>
    <p>The 2023 AABB international guidelines, drawing on more than <strong>45 randomised trials</strong>, recommend a <strong>restrictive transfusion threshold</strong> of 70 g/L for hospitalised, haemodynamically stable adults. They suggest <strong>75-80 g/L</strong> for cardiac surgery and for patients with pre-existing cardiovascular disease, and 80 g/L for orthopaedic surgery. The consistent finding is that restrictive practice is not inferior, and reduces exposure to transfusion without increasing mortality or morbidity in most groups.</p>
    <h4>Why a low threshold is defensible</h4>
    <p>Anaemia is compensated by increased cardiac output, rightward shift of the oxygen dissociation curve and redistribution of flow. Stored red cells are not a perfect substitute: they have depleted 2,3-DPG, reduced deformability, a <strong>storage lesion</strong> and a supernatant load of potassium and mediators. Transfusion also carries <strong>TACO</strong>, <strong>TRALI</strong>, alloimmunisation and infection risk. A higher haemoglobin is not automatically better oxygen delivery, and viscosity rises with haematocrit.</p>
    <h4>Where restriction is not automatic</h4>
    <ul>
      <li><strong>Acute myocardial infarction</strong>: the <strong>MINT trial</strong> suggests a more liberal threshold around 100 g/L may help, so individualise.</li>
      <li><strong>Active bleeding</strong>: treat the bleeding and the physiology, not a stable-patient threshold.</li>
      <li><strong>Chronic transfusion</strong> programmes: thalassaemia and myelodysplasia have disease-specific targets.</li>
      <li>Neonates and obstetric patients: separate evidence and different physiology.</li>
    </ul>
    <h4>Making it stick</h4>
    <p>A threshold in a guideline changes nothing unless the <strong>order set</strong> and the culture change with it. Pair it with <strong>single-unit transfusion</strong>, reassessment after each unit, and audit of indication. Clinicians accept restriction when they trust the evidence and when the blood bank is a partner rather than a gatekeeper. Document symptoms and physiology, not just the number, and review outliers at the <strong>transfusion committee</strong>.</p>
  `,
  tip: "Give the number, the trial base and the exceptions; then explain that implementation, not the guideline, is where most hospitals fail.",
  sources: ["B12", "B11", "B1"]
},
{
  id: "ih239", domain: "ih-clinical",
  q: "Discuss the management of paroxysmal nocturnal haemoglobinuria in pregnancy, surgery and breakthrough haemolysis, and the transfusion decisions that accompany complement inhibition.",
  tags: ["PNH", "pregnancy", "complement", "breakthrough haemolysis"],
  keypoints: ["paroxysmal nocturnal haemoglobinuria", "complement inhibition", "eculizumab", "ravulizumab", "leukoreduced red cells", "thromboprophylaxis", "breakthrough intravascular haemolysis", "extravascular haemolysis", "positive DAT", "clone size", "flow cytometry", "iron replacement"],
  answer: `
    <h4>Pregnancy</h4>
    <p>Pregnancy in <strong>paroxysmal nocturnal haemoglobinuria</strong> is high risk for maternal thrombosis, haemolysis and fetal loss. <strong>Complement inhibition</strong> should generally continue, because stopping <strong>eculizumab</strong> or <strong>ravulizumab</strong> can precipitate breakthrough haemolysis and thrombosis. The obstetric, haematology and anaesthesia teams should plan together, with <strong>thromboprophylaxis</strong> individualised around bleeding risk. Transfuse <strong>leukoreduced red cells</strong> for symptomatic anaemia, and monitor LDH, haemoglobin and platelet count through delivery and the puerperium.</p>
    <h4>Surgery and thrombosis</h4>
    <p>Elective surgery should be planned when haemolysis is controlled. PNH is a prothrombotic state, and surgery adds immobility, dehydration and endothelial injury. Continue complement inhibition, avoid unnecessary transfusion, and use mechanical and pharmacological prophylaxis according to bleeding risk. If a patient has not been vaccinated against meningococci, arrange vaccination before starting or escalating complement inhibitors; urgency may require antibiotics and a documented plan.</p>
    <h4>Breakthrough and extravascular haemolysis</h4>
    <p>A rising LDH with a falling haemoglobin on C5 inhibition suggests <strong>breakthrough intravascular haemolysis</strong>, often after infection or a missed dose. C3-mediated <strong>extravascular haemolysis</strong> produces a <strong>positive DAT</strong> and a persistent transfusion need despite control of intravascular haemolysis. Proximal complement inhibitors may help. Monitor the <strong>clone size</strong> by <strong>flow cytometry</strong>, because it can expand, and reassess the marrow if cytopenias worsen.</p>
    <h4>Transfusion nuances</h4>
    <ul>
      <li>Transfusion is supportive, not curative; use leukoreduced units.</li>
      <li>Washing is reserved for selected cases and does not replace complement control.</li>
      <li><strong>Iron replacement</strong> can drive erythropoiesis and increase haemolysis, so give it cautiously and monitor.</li>
      <li>Anticoagulation for established thrombosis is standard, with duration individualised.</li>
    </ul>
    <p>Document the clone, the complement status and the transfusion plan, because emergency departments otherwise see only haemoglobinuria and repeat the same investigations.</p>
  `,
  tip: "Treat PNH as a thrombotic disease first, then explain why complement therapy continues in pregnancy and why the DAT can turn positive on treatment.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih240", domain: "ih-clinical", star: true,
  q: "Discuss hyperhaemolysis syndrome: diagnostic criteria, proposed mechanisms, a practical management protocol and the prevention strategy for chronically transfused patients.",
  tags: ["hyperhaemolysis", "delayed haemolytic reaction", "prevention", "protocol"],
  keypoints: ["Hyperhaemolysis syndrome", "post-transfusion haemoglobin", "bystander haemolysis", "reticulocyte count", "DAT may be negative", "corticosteroids", "IVIG", "rituximab", "complement inhibition", "extended phenotype or genotype matching", "erythropoietin", "haemovigilance", "transfusion committee"],
  answer: `
    <h4>Definition and diagnostic criteria</h4>
    <p><strong>Hyperhaemolysis syndrome</strong> is a severe delayed haemolytic transfusion reaction in which the <strong>post-transfusion haemoglobin</strong> falls below the pretransfusion level. Both donor and recipient red cells are destroyed. Supportive criteria include a recent transfusion, clinical or laboratory evidence of haemolysis, a <strong>reticulocyte count</strong> that is inappropriately low for the degree of anaemia, and exclusion of bleeding, sequestration, malaria and a conventional delayed haemolytic reaction. The <strong>DAT may be negative</strong>, which is why the syndrome is under-recognised.</p>
    <h4>Mechanisms</h4>
    <p>The label <strong>bystander haemolysis</strong> describes destruction of the patient's own cells alongside the transfused ones. Proposed drivers include complement activation, macrophage hyperactivation, an antibody response against donor and autologous cells, and suppression of erythropoiesis. It is best described in sickle cell disease and thalassaemia, but occurs in other chronically transfused patients and after apparently compatible units. Prior alloimmunisation and inflammation raise the risk.</p>
    <h4>A management protocol</h4>
    <ol>
      <li>Stop the transfusion and exclude a clerical error, acute haemolysis and bleeding.</li>
      <li>Give supportive care, monitor renal function and urine output, and avoid further transfusion unless it is life-saving.</li>
      <li>Start <strong>corticosteroids</strong>, with <strong>IVIG</strong> and <strong>rituximab</strong> for inadequate response; <strong>complement inhibition</strong> is used in refractory cases.</li>
      <li>If transfusion is unavoidable, use extended-matched units and plan for a blunted or absent increment.</li>
      <li>Consider <strong>erythropoietin</strong> and treat the underlying inflammatory or infective trigger.</li>
    </ol>
    <h4>Prevention and documentation</h4>
    <p>Prevention is more effective than rescue. Use <strong>extended phenotype or genotype matching</strong>, transfuse only for clear indications, and give a written transfusion plan and antibody record to the patient. Record the episode prominently so that a future team does not repeat the exposure. Report it through <strong>haemovigilance</strong> and review it in the <strong>transfusion committee</strong>; the evidence base is small and every case adds to it.</p>
  `,
  tip: "Lead with the paradox (haemoglobin below baseline, DAT often negative), then give a numbered protocol and prevention plan.",
  sources: ["B1", "B11", "B13"]
}
);
