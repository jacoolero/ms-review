/* Immunohematology — part 5: clinical transfusion, AIHA & quality (set B) */
window.QBANK.push(
{
  id: "ih163", domain: "ih-clinical", star: true,
  q: "Discuss whole blood transfusion: its composition, the case for and against its use, and its place in modern and resource-limited practice.",
  tags: ["whole blood", "component therapy", "massive haemorrhage", "low-resource"],
  keypoints: ["whole blood", "component therapy", "single-product resuscitation fluid", "labile factors V and VIII", "low-titre O WB", "massive haemorrhage", "volume load", "storage lesion", "leukoreduction", "RA 7719", "component preparation", "transfusion committee"],
  answer: `
    <h4>Why whole blood is returning</h4>
    <p>Whole blood (WB) is collected into an anticoagulant-preservative and contains red cells, plasma and platelets in their original proportions. <strong>Component therapy</strong> remains the default in well-resourced services because it allows each deficiency to be treated separately, but WB has re-entered trauma and austere practice as a <strong>single-product resuscitation fluid</strong>. Its appeal is both logistical and physiological: one unit replaces red cell mass, volume and coagulation factors from one donor, simplifies storage and issue, and avoids the dilution and multiple-donor exposure that come from assembling components separately.</p>
    <h4>Composition and limitations</h4>
    <ul>
      <li>Platelets in refrigerated WB lose function and are not a substitute for a platelet concentrate.</li>
      <li><strong>Labile factors V and VIII</strong> decline during storage; fibrinogen and red cells are better preserved.</li>
      <li>ABO antibodies in donor plasma can cause haemolysis in a non-identical recipient, especially with group O WB; <strong>low-titre O WB</strong> is therefore used for emergency resuscitation.</li>
      <li><strong>Volume load</strong>, potassium and the <strong>storage lesion</strong> limit use in cardiac or renal impairment and in small neonates.</li>
    </ul>
    <h4>Clinical roles</h4>
    <p>The best evidence is in <strong>massive haemorrhage</strong>, prehospital and military resuscitation, and hospitals that cannot prepare components. It is also used in some paediatric cardiac surgery. It is not indicated for isolated anaemia, isolated thrombocytopenia or isolated coagulopathy, where a specific component is safer and more effective.</p>
    <h4>Quality and Philippine practice</h4>
    <p>WB must meet the same donor and transfusion-transmitted infection standards as components; <strong>leukoreduction</strong> reduces febrile reactions and CMV risk. In the Philippines, <strong>RA 7719</strong> and DOH licensing encourage <strong>component preparation</strong>, but WB remains important where component capacity, plasma freezing or platelet agitation is unavailable. Audit should track indication, ABO policy, wastage and outcomes, and the <strong>transfusion committee</strong> should ensure that WB is a planned part of the formulary rather than an unregulated default.</p>
  `,
  tip: "Balance the logistic advantages against the loss of platelet and labile factor function — then place WB in the massive haemorrhage and low-resource setting.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih164", domain: "ih-clinical", star: true,
  q: "Describe emergency release of blood components: indications, product selection, documentation and the laboratory follow-up that makes it safe.",
  tags: ["emergency release", "uncrossmatched blood", "group O", "patient safety"],
  keypoints: ["emergency release", "major haemorrhage", "group O red cells", "D-negative", "type-specific", "group AB or A plasma", "ABO haemolysis", "minimum number", "retrospective crossmatch", "delayed haemolytic transfusion reaction", "transfusion committee", "near misses"],
  answer: `
    <h4>When emergency release is justified</h4>
    <p><strong>Emergency release</strong> is the issue of blood before completion of the usual pretransfusion process because delay would endanger life. Typical triggers are <strong>major haemorrhage</strong>, ruptured aortic aneurysm, major trauma, obstetric catastrophe and profound symptomatic anaemia with no time for a crossmatch. The decision is clinical and must be authorised by a responsible clinician; the blood bank's duty is to provide the safest available product while documenting the deviation.</p>
    <h4>Product selection</h4>
    <div class="table-wrap"><table>
      <tr><th>Situation</th><th>Red cells</th><th>Plasma or platelets</th></tr>
      <tr><td>ABO unknown</td><td><strong>Group O red cells</strong>; <strong>D-negative</strong> for females of childbearing potential</td><td><strong>Group AB or A plasma</strong>; ABO-compatible platelets</td></tr>
      <tr><td>ABO known</td><td><strong>Type-specific</strong> red cells if the group is confirmed</td><td>Group-compatible plasma and platelets</td></tr>
      <tr><td>ABO-incompatible plasma risk</td><td>Group O WB only if low-titre</td><td>Avoid group O plasma in non-O recipients</td></tr>
      <tr><td>After resuscitation</td><td>Switch to crossmatched units</td><td>Review need for further components</td></tr>
    </table></div>
    <h4>Risks and limits</h4>
    <p>Emergency units are tested for transfusion-transmitted infections but are not proof of compatibility. Risks include <strong>ABO haemolysis</strong>, alloimmunisation, TACO and other transfusion reactions. Issue the <strong>minimum number</strong>, reassess after each unit, and do not let emergency release become a routine shortcut around the laboratory.</p>
    <h4>Documentation and follow-up</h4>
    <ul>
      <li>Record the indication, authoriser, time, patient identifiers and unit numbers.</li>
      <li>Label the units as emergency release and complete a <strong>retrospective crossmatch</strong> as soon as possible.</li>
      <li>Notify the clinician of any incompatibility and monitor for haemolysis, a positive DAT or a <strong>delayed haemolytic transfusion reaction</strong>.</li>
      <li>Review every episode in the <strong>transfusion committee</strong>: appropriateness, wastage, turnaround and <strong>near misses</strong>.</li>
    </ul>
  `,
  tip: "Name group O, D-negative for women of childbearing potential, and the switch to type-specific blood — then insist on documentation and review.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih165", domain: "ih-clinical", star: true,
  q: "A patient with severe autoimmune haemolytic anaemia needs transfusion. Discuss the serological problems, the pretransfusion work-up and the practical approach to selecting and giving red cells.",
  tags: ["AIHA", "transfusion", "adsorption", "phenotype matching"],
  keypoints: ["autoimmune haemolytic anaemia", "panreactive", "adsorption studies", "autologous adsorption", "allogeneic adsorption", "antigen-negative units", "least incompatible", "blood warmer", "hyperhaemolysis", "antibody card"],
  answer: `
    <h4>The serological dilemma</h4>
    <p>In <strong>autoimmune haemolytic anaemia</strong> the autoantibody reacts with all reagent cells, so the antibody screen, panel and crossmatch are usually <strong>panreactive</strong>. This does not mean that no unit can be transfused. Withholding blood from a patient with symptomatic anaemia can be fatal, while transfusing without excluding an underlying alloantibody can cause a severe haemolytic reaction.</p>
    <h4>Before transfusion</h4>
    <ol>
      <li>Confirm the diagnosis with a DAT, an eluate, haemolysis markers and a blood film.</li>
      <li>Perform <strong>adsorption studies</strong>: <strong>autologous adsorption</strong> when the patient has not been transfused recently, and <strong>allogeneic adsorption</strong> when donor cells are present.</li>
      <li>Phenotype or genotype the patient, identify any alloantibody and provide <strong>antigen-negative units</strong> for each specificity.</li>
      <li>Do not rely on the crossmatch alone; the autoantibody makes it uninterpretable.</li>
    </ol>
    <h4>Choosing and giving units</h4>
    <p>For warm AIHA, give the most compatible units available after adsorption, with extended matching for Rh and Kell where feasible. The old practice of selecting the <strong>least incompatible</strong> unit is not a substitute for alloantibody exclusion. Transfuse slowly, monitor vital signs, and expect the haemoglobin to rise even though some transfused cells may also be destroyed. For cold agglutinin disease, keep the patient and the blood warm and use a <strong>blood warmer</strong>; for paroxysmal cold haemoglobinuria, avoid cold exposure. Washed or leukoreduced units may be considered but are not routinely required.</p>
    <h4>After transfusion</h4>
    <p>Repeat haemolysis markers, watch for <strong>hyperhaemolysis</strong>, and document the autoantibody and any alloantibody on an <strong>antibody card</strong> and in the laboratory record. Treat the underlying disease — steroids for warm AIHA, rituximab or complement inhibition for cold disease — because transfusion is supportive, not definitive.</p>
  `,
  tip: "The examiner wants to hear that a panreactive crossmatch is not a contraindication, but adsorption must come first.",
  sources: ["B13", "B1", "B2"]
},
{
  id: "ih166", domain: "ih-clinical",
  q: "Discuss paroxysmal nocturnal haemoglobinuria: pathogenesis, laboratory diagnosis, transfusion support and the principles of complement-directed therapy.",
  tags: ["PNH", "PIGA", "flow cytometry", "complement"],
  keypoints: ["PIGA mutation", "GPI anchor", "CD55 and CD59", "intravascular haemolysis", "flow cytometry", "FLAER", "haemosiderinuria", "leukoreduced red cells", "C5 inhibitors", "extravascular haemolysis"],
  answer: `
    <h4>Pathophysiology</h4>
    <p>Paroxysmal nocturnal haemoglobinuria is an acquired clonal disorder caused by a somatic <strong>PIGA mutation</strong> in a haematopoietic stem cell. The defect prevents synthesis of the <strong>GPI anchor</strong>, so red cells lack <strong>CD55 and CD59</strong>, the complement regulators that protect them from the alternative pathway. The result is chronic <strong>intravascular haemolysis</strong>, a prothrombotic state and variable marrow failure. The clone may expand over time.</p>
    <h4>Clinical and laboratory features</h4>
    <ul>
      <li>Haemoglobinuria, often worse at night or after infection, with fatigue and anaemia.</li>
      <li>Chronic haemolysis consumes nitric oxide, contributing to abdominal pain, dysphagia and erectile dysfunction.</li>
      <li>Thrombosis at unusual sites — hepatic, cerebral, mesenteric and cutaneous veins.</li>
      <li>High LDH, low haptoglobin, raised reticulocytes and <strong>haemosiderinuria</strong>; the DAT is negative.</li>
      <li>Diagnosis by <strong>flow cytometry</strong> using <strong>FLAER</strong> and CD55/CD59 on granulocytes, monocytes and red cells; clone size is reported.</li>
    </ul>
    <h4>Transfusion support</h4>
    <p>Transfuse <strong>leukoreduced red cells</strong> for symptomatic anaemia. Washed units were traditionally preferred to avoid complement in the product, but leukoreduction is the key modification; washing is reserved for selected cases. Give the transfusion slowly and monitor for haemolysis. Iron replacement for iron deficiency should be cautious because it can increase erythropoiesis and haemolysis.</p>
    <h4>Disease-modifying therapy</h4>
    <p><strong>C5 inhibitors</strong> such as eculizumab and ravulizumab control intravascular haemolysis and reduce thrombosis; patients need meningococcal vaccination and vigilance for infection. Breakthrough haemolysis and C3-mediated <strong>extravascular haemolysis</strong> occur, and proximal complement inhibitors are alternatives. Anticoagulation is used for established thrombosis. PNH clones also occur in aplastic anaemia and myelodysplasia, so the marrow should be assessed.</p>
  `,
  tip: "Link the GPI anchor to loss of CD55/CD59, then explain why the DAT is negative despite severe intravascular haemolysis.",
  sources: ["B1", "B2", "B13"]
},
{
  id: "ih167", domain: "ih-clinical", star: true,
  q: "Discuss hyperhaemolysis syndrome in sickle cell disease and thalassaemia: recognition, proposed mechanisms, management and prevention.",
  tags: ["hyperhaemolysis", "sickle cell", "delayed haemolytic reaction", "transfusion"],
  keypoints: ["Hyperhaemolysis syndrome", "bystander haemolysis", "sickle cell disease", "reticulocytopenia", "DAT may be negative", "Corticosteroids", "IVIG", "rituximab", "extended phenotype or genotype matching", "multiple transfusions", "erythropoietin"],
  answer: `
    <h4>Definition</h4>
    <p><strong>Hyperhaemolysis syndrome</strong> is a severe delayed haemolytic transfusion reaction in which the post-transfusion haemoglobin falls below the pretransfusion level. Both donor and recipient red cells are destroyed — a <strong>bystander haemolysis</strong> — and the reticulocyte count is often inappropriately low. It is most often seen in <strong>sickle cell disease</strong> and thalassaemia, but can occur in other chronically transfused patients.</p>
    <h4>Why it happens</h4>
    <p>The mechanism is incompletely understood. Proposed contributors include complement activation, macrophage hyperactivation, suppression of erythropoiesis and an antibody response that damages both donor and autologous cells. Risk factors are <strong>multiple transfusions</strong>, prior alloimmunisation or delayed haemolytic reaction, active infection or inflammation, and transfusion during a painful crisis. The <strong>DAT may be negative</strong>, so a negative serological work-up does not exclude the diagnosis.</p>
    <h4>Recognition</h4>
    <ul>
      <li>A falling haemoglobin after transfusion, often with jaundice, pain, fever and dark urine.</li>
      <li><strong>Reticulocytopenia</strong> and a negative or weakly positive DAT.</li>
      <li>Exclusion of bleeding, sequestration, malaria and a conventional delayed haemolytic reaction.</li>
    </ul>
    <h4>Management</h4>
    <p>Stop transfusion and give supportive care. <strong>Corticosteroids</strong>, <strong>IVIG</strong> and <strong>rituximab</strong> are used, with complement inhibition in refractory cases; the evidence is limited and drawn largely from case series. Avoid further transfusion unless it is life-saving, because each unit can worsen haemolysis. If transfusion is essential, use extended-matched units and consider <strong>erythropoietin</strong>. Prevention is better: <strong>extended phenotype or genotype matching</strong>, transfusion only for clear indications and a patient-held antibody record. A written transfusion plan agreed before the next crisis reduces repeated exposure and helps the emergency team avoid unnecessary units.</p>
  `,
  tip: "The paradox is a falling haemoglobin after transfusion with a negative DAT — say the name and do not give more blood reflexively.",
  sources: ["B1", "B13", "B11"]
},
{
  id: "ih168", domain: "ih-clinical", star: true,
  q: "Discuss the transfusion and laboratory response to major obstetric haemorrhage, including the special features that distinguish it from trauma resuscitation.",
  tags: ["postpartum haemorrhage", "obstetric", "massive transfusion", "fibrinogen"],
  keypoints: ["postpartum haemorrhage", "four Ts", "fibrinogen", "massive transfusion protocol", "group O red cells", "tranexamic acid", "blood warmer", "RhIG", "debrief", "cell salvage"],
  answer: `
    <h4>Why obstetric haemorrhage is different</h4>
    <p><strong>Postpartum haemorrhage</strong> remains a leading cause of maternal death. The causes are remembered as the <strong>four Ts</strong>: <strong>tone</strong> (uterine atony), <strong>trauma</strong>, <strong>tissue</strong> (retained placenta) and <strong>thrombin</strong> (coagulopathy). Pregnancy expands plasma volume and raises clotting factor levels, so a woman may lose a large volume before her blood pressure falls; tachycardia, pallor and a rising shock index are earlier clues. Coagulopathy can develop rapidly, and <strong>fibrinogen</strong> is both a marker of severity and a treatment target. Uterine atony is the commonest cause, while placenta accreta spectrum is an increasing reason for planned blood support.</p>
    <h4>Activating the blood bank response</h4>
    <p>Call the <strong>massive transfusion protocol</strong> early rather than after prolonged resuscitation. Issue <strong>group O red cells</strong> immediately if the group is unknown, then switch to group-specific or crossmatched units. A balanced ratio of red cells, plasma and platelets is used while laboratory or viscoelastic results guide correction of fibrinogen, calcium and platelet deficits. <strong>Tranexamic acid</strong> should be given early, alongside uterotonics, balloon tamponade and surgical control.</p>
    <h4>Special considerations</h4>
    <ul>
      <li>Use a <strong>blood warmer</strong> and monitor temperature, ionised calcium and potassium.</li>
      <li><strong>Cell salvage</strong> and acute normovolaemic haemodilution are options in selected cases.</li>
      <li>Give <strong>RhIG</strong> to D-negative unsensitised women after delivery or abortion, with a fetomaternal haemorrhage assessment.</li>
      <li>Avoid overtransfusion; reassess after each unit and treat postpartum anaemia with iron.</li>
    </ul>
    <h4>Quality</h4>
    <p>Obstetric haemorrhage is a rehearsal for the whole hospital: simulated drills, a dedicated obstetric pack, agreed activation criteria and a <strong>debrief</strong> after every event improve time to blood, component ratios and outcomes. The transfusion committee should review each case with obstetrics and anaesthesia.</p>
  `,
  tip: "Emphasise early activation, fibrinogen replacement and tranexamic acid — then add the obstetric-specific items: RhIG and cell salvage.",
  sources: ["B1", "B11", "B12"]
},
{
  id: "ih169", domain: "ih-clinical",
  q: "Discuss perioperative blood conservation and surgical blood management, from preoperative anaemia to the maximum surgical blood order schedule.",
  tags: ["patient blood management", "cell salvage", "MSBOS", "surgery"],
  keypoints: ["preoperative anaemia", "iron deficiency", "cell salvage", "acute normovolaemic haemodilution", "tranexamic acid", "restrictive transfusion threshold", "maximum surgical blood order schedule", "crossmatch-to-transfusion ratio", "type-and-screen", "wastage"],
  answer: `
    <h4>Preoperative optimisation</h4>
    <p><strong>Preoperative anaemia</strong> is common and independently predicts transfusion, complications and death. Elective surgery should trigger a search for <strong>iron deficiency</strong>, vitamin B12 or folate deficiency, chronic kidney disease and inflammation. Iron deficiency is treated with oral or intravenous iron; erythropoiesis-stimulating agents are reserved for selected patients. Anticoagulants and antiplatelet drugs are planned around the procedure, and the patient's wishes about transfusion are documented. A structured anaemia clinic improves haemoglobin before elective surgery and reduces cancelled operations; preoperative planning is a team process.</p>
    <h4>Intraoperative conservation</h4>
    <ul>
      <li><strong>Cell salvage</strong> collects, washes and returns shed blood; it is avoided when the field is contaminated or when salvaged blood would contain malignant cells unless a leukoreduction filter is used.</li>
      <li><strong>Acute normovolaemic haemodilution</strong> removes whole blood before blood loss and returns it later.</li>
      <li><strong>Tranexamic acid</strong>, meticulous haemostasis, topical haemostats, normothermia and minimally invasive approaches reduce loss.</li>
      <li>Point-of-care coagulation testing guides targeted replacement rather than formula-driven plasma.</li>
    </ul>
    <h4>Postoperative and ordering practice</h4>
    <p>Use a <strong>restrictive transfusion threshold</strong>, prescribe single units and reassess. Minimise diagnostic phlebotomy, treat postoperative iron deficiency and avoid routine crossmatch for procedures with a low transfusion probability. A <strong>maximum surgical blood order schedule</strong> and a <strong>type-and-screen</strong> policy reduce unnecessary crossmatching, inventory pressure and <strong>wastage</strong>.</p>
    <h4>Measuring success</h4>
    <p>Track transfusion rate, units per procedure, <strong>crossmatch-to-transfusion ratio</strong>, length of stay and complications. In the Philippines, where blood shortages are seasonal and family replacement donation is still common, surgical blood conservation protects a scarce resource and reduces the patient's exposure to allogeneic blood.</p>
  `,
  tip: "Structure the answer as pre-, intra- and postoperative, then finish with the ordering tools that the blood bank controls.",
  sources: ["B1", "B12", "B11"]
},
{
  id: "ih170", domain: "ih-clinical",
  q: "Discuss albumin as a therapeutic product: physiology, evidence-based indications, inappropriate uses and stewardship.",
  tags: ["albumin", "plasma derivative", "colloid", "stewardship"],
  keypoints: ["colloid oncotic pressure", "5% iso-oncotic", "20–25% hyperoncotic", "large-volume paracentesis", "spontaneous bacterial peritonitis", "hepatorenal syndrome", "plasma exchange", "volume overload", "Jehovah's Witness", "transfusion committee"],
  answer: `
    <h4>What albumin is</h4>
    <p>Albumin is the most abundant plasma protein. It maintains <strong>colloid oncotic pressure</strong>, binds drugs, hormones and fatty acids, and acts as a free-radical scavenger. Therapeutic albumin is pooled, pasteurised and available as <strong>5% iso-oncotic</strong> or <strong>20–25% hyperoncotic</strong> solutions. It contains no red cell antibodies, needs no crossmatch and is not a component in the ABO sense. It is a pooled blood product and should be prescribed by indication, not by serum level; indication review is essential.</p>
    <h4>Established indications</h4>
    <ul>
      <li><strong>Large-volume paracentesis</strong> in cirrhosis, to limit circulatory dysfunction.</li>
      <li><strong>Spontaneous bacterial peritonitis</strong>, as an adjunct to antibiotics in selected patients.</li>
      <li><strong>Hepatorenal syndrome</strong>, with vasoconstrictors.</li>
      <li><strong>Plasma exchange</strong> and some burn or cardiac surgery protocols.</li>
    </ul>
    <h4>Where evidence is weak</h4>
    <p>Albumin should not be used as a nutritional supplement, to correct a low serum albumin in isolation, or as routine resuscitation fluid. Trials in critical illness have not shown consistent benefit over crystalloid, and harm has been suggested in traumatic brain injury. It is also not a treatment for oedema in nephrotic syndrome or for chronic liver disease outside specific protocols.</p>
    <h4>Adverse effects and stewardship</h4>
    <p>Rapid infusion can cause <strong>volume overload</strong> and pulmonary oedema; allergic and febrile reactions occur; cost and supply are significant. Because it is a fractionated product, some <strong>Jehovah's Witness</strong> patients accept it while refusing whole plasma — a point to clarify. The <strong>transfusion committee</strong> should review albumin use against indications, as inappropriate use competes with plasma and red cell budgets and exposes patients to unnecessary volume.</p>
  `,
  tip: "Separate the strong indications from the weak ones; examiners reward the statement that albumin is not a nutritional supplement.",
  sources: ["B1", "B11", "B12"]
},
{
  id: "ih171", domain: "ih-clinical",
  q: "Discuss intravenous immunoglobulin in immunohematology: mechanisms, clinical indications, haemolytic complications and monitoring.",
  tags: ["IVIG", "ITP", "FNAIT", "haemolysis"],
  keypoints: ["Intravenous immunoglobulin", "Fc receptors", "immune thrombocytopenia", "fetal and neonatal alloimmune thrombocytopenia", "autoimmune haemolytic anaemia", "post-transfusion purpura", "passive anti-A and anti-B", "aseptic meningitis", "IgA deficiency", "positive DAT"],
  answer: `
    <h4>What IVIG does</h4>
    <p><strong>Intravenous immunoglobulin</strong> is pooled human IgG from many donors. It works through several mechanisms: blockade of <strong>Fc receptors</strong> on macrophages, scavenging of complement, anti-idiotypic neutralisation of autoantibodies, accelerated clearance of pathogenic antibody and modulation of B- and T-cell responses. These effects are transient, so IVIG is an adjunct rather than a cure. It also modulates dendritic cell function and neutralises cytokines, which helps explain its benefit in inflammatory and autoimmune conditions.</p>
    <h4>Immunohaematology indications</h4>
    <ul>
      <li><strong>Immune thrombocytopenia</strong>, especially when rapid platelet recovery is needed.</li>
      <li><strong>Fetal and neonatal alloimmune thrombocytopenia</strong>, often with platelet transfusion or IVIG in pregnancy.</li>
      <li>Selected cases of <strong>autoimmune haemolytic anaemia</strong>, particularly warm AIHA refractory to steroids.</li>
      <li><strong>Post-transfusion purpura</strong>, where IVIG is the treatment of choice.</li>
      <li>Adjunctive therapy in some cases of hyperhaemolysis and in desensitisation protocols.</li>
    </ul>
    <h4>Haemolysis from IVIG</h4>
    <p>High-dose IVIG can contain <strong>passive anti-A and anti-B</strong>, causing immune haemolysis, a <strong>positive DAT</strong> and a fall in haemoglobin, especially in non-group O recipients. Monitor blood counts and haemolysis markers during high-dose therapy and choose a low-titre product where available. This is an under-recognised cause of a positive DAT in a patient who has not been transfused.</p>
    <h4>Other adverse effects</h4>
    <p>Headache, fever, infusion reactions, <strong>aseptic meningitis</strong>, renal impairment with sucrose-containing products, thrombosis, volume overload and anaphylaxis in severe <strong>IgA deficiency</strong>. Document the indication, batch and response, and avoid using IVIG simply as a general immunomodulator without a defined endpoint. Infusion should be slowed if reactions occur, and batch documentation supports traceability.</p>
  `,
  tip: "Mention passive anti-A/anti-B haemolysis — it links IVIG to the blood bank and explains a positive DAT after therapy.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih172", domain: "ih-clinical",
  q: "Discuss granulocyte transfusion: donor collection, indications, product handling and complications.",
  tags: ["granulocyte", "neutropenia", "apheresis", "TRALI"],
  keypoints: ["Granulocyte transfusion", "G-CSF", "apheresis", "ABO compatibility", "irradiated", "TRALI", "haematopoietic stem cell transplantation", "alloimmunisation", "CMV transmission", "neutropenic sepsis"],
  answer: `
    <h4>Rationale</h4>
    <p><strong>Granulocyte transfusion</strong> provides neutrophils to a profoundly neutropenic patient with a bacterial or fungal infection that is not responding to antimicrobials. It is a niche therapy used as a bridge until count recovery or infection control. The evidence is limited, and benefit depends on an adequate dose of functional neutrophils, timely transfusion and recovery of the patient's own marrow.</p>
    <h4>Collection and product</h4>
    <p>Donors are stimulated with <strong>G-CSF</strong>, sometimes with dexamethasone, and collected by <strong>apheresis</strong>. The product contains granulocytes, red cells, lymphocytes and plasma, so <strong>ABO compatibility</strong> and red cell matching matter. It must be <strong>irradiated</strong> to prevent transfusion-associated graft-versus-host disease, and it should be transfused promptly because granulocyte function declines during storage. CMV-safe status and HLA matching are considered where available.</p>
    <h4>Indications</h4>
    <ul>
      <li><strong>Neutropenic sepsis</strong> or invasive fungal infection refractory to appropriate antimicrobials.</li>
      <li>Selected patients after <strong>haematopoietic stem cell transplantation</strong> or with aplastic anaemia.</li>
      <li>Neonatal sepsis in specialised centres, though evidence is weak.</li>
    </ul>
    <p>It is not a routine treatment for neutropenia, and it is not a substitute for source control, antimicrobial optimisation or growth factor therapy.</p>
    <h4>Complications</h4>
    <p><strong>TRALI</strong> and pulmonary reactions are the most feared; others include febrile reactions, <strong>alloimmunisation</strong>, <strong>CMV transmission</strong>, volume overload and infection. Donor stimulation and repeated apheresis also carry risks. The decision should be made with haematology and transfusion medicine, with clear consent and a predefined review after a limited trial. Count recovery remains the definitive endpoint, and repeated courses without evidence of benefit should be discouraged. Document the indication and outcome.</p>
  `,
  tip: "Say that the product is irradiated and given promptly — the two details that separate granulocytes from ordinary components.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih173", domain: "ih-clinical",
  q: "Describe the composition, functions and quality role of a hospital transfusion committee, and explain how it improves transfusion practice.",
  tags: ["transfusion committee", "governance", "utilization review", "quality"],
  keypoints: ["hospital transfusion committee", "massive transfusion protocols", "adverse transfusion reactions", "haemovigilance", "utilization review", "crossmatch-to-transfusion ratio", "wrong blood in tube", "root-cause analysis", "corrective and preventive action", "RA 7719"],
  answer: `
    <h4>Mandate</h4>
    <p>The <strong>hospital transfusion committee</strong> is the multidisciplinary body that governs transfusion practice. It reports to the medical staff and quality structures, and its authority comes from hospital policy and accreditation standards. It is not a blood bank committee alone: it must include clinicians who order blood, nurses who administer it, laboratory staff who test and issue it, and pharmacy, quality and administration representatives.</p>
    <h4>Core functions</h4>
    <ul>
      <li>Approve and review transfusion policies, order sets, <strong>massive transfusion protocols</strong>, maximum surgical blood order schedules and consent forms.</li>
      <li>Review <strong>adverse transfusion reactions</strong>, near misses, look-back investigations and <strong>haemovigilance</strong> data.</li>
      <li>Conduct <strong>utilization review</strong> of transfusion appropriateness and give feedback to prescribers.</li>
      <li>Monitor quality indicators: single-unit transfusion, <strong>crossmatch-to-transfusion ratio</strong>, wastage, TACO, <strong>wrong blood in tube</strong> and component availability.</li>
      <li>Oversee education, audit and corrective action, and ensure regulatory compliance with DOH licensing and <strong>RA 7719</strong>.</li>
    </ul>
    <h4>How it works</h4>
    <p>Effective committees meet regularly, use a standard agenda, keep minutes and track actions to closure. They review cases anonymously where possible, distinguish systems errors from individual errors, and link findings to <strong>root-cause analysis</strong> and <strong>corrective and preventive action</strong>. They also advise on stock shortages and ethical allocation, and they review consent documentation and patient information.</p>
    <h4>Why it matters</h4>
    <p>Transfusion practice varies widely between clinicians. A functioning committee reduces inappropriate transfusion, wastage and reactions, and it gives the blood bank authority to question unsafe requests. In the Philippines, where supply is constrained and hospital networks vary, the committee is also a forum for coordinating referrals, shared protocols and national blood service requirements.</p>
  `,
  tip: "Show that the committee owns policy, adverse events and utilization review — not just the blood bank's internal QC.",
  sources: ["B1", "B5", "B7"]
},
{
  id: "ih174", domain: "ih-clinical",
  q: "Discuss quality indicators for a transfusion service: how they are chosen, defined, displayed and used to improve performance.",
  tags: ["quality indicators", "dashboard", "audit", "patient safety"],
  keypoints: ["quality indicator", "structure, process and outcome", "sample rejection rate", "wrong blood in tube", "crossmatch-to-transfusion ratio", "dashboard", "PDSA cycles", "transfusion committee", "wastage", "external quality assessment"],
  answer: `
    <h4>What makes a good indicator</h4>
    <p>A <strong>quality indicator</strong> is a measurable numerator and denominator that reflects the quality of a process or outcome. Good indicators are relevant, definable, collectable, interpretable and actionable; they should be balanced across <strong>structure, process and outcome</strong> and reviewed at a defined frequency. A number without a definition, data source and owner is not an indicator.</p>
    <h4>Examples across the transfusion cycle</h4>
    <div class="table-wrap"><table>
      <tr><th>Stage</th><th>Indicator</th><th>What it detects</th></tr>
      <tr><td>Pre-analytical</td><td><strong>Sample rejection rate</strong>; <strong>wrong blood in tube</strong></td><td>Patient identification and collection errors</td></tr>
      <tr><td>Analytical</td><td>QC failures; <strong>external quality assessment</strong> performance; antibody identification audit</td><td>Testing reliability</td></tr>
      <tr><td>Inventory</td><td><strong>Wastage</strong>; stock-out days; O-negative use</td><td>Supply and inventory management</td></tr>
      <tr><td>Clinical use</td><td>Single-unit transfusion; appropriateness; <strong>crossmatch-to-transfusion ratio</strong></td><td>Over-transfusion and unnecessary crossmatch</td></tr>
      <tr><td>Outcome</td><td>Reaction rate; TACO; haemolytic reactions; mortality review</td><td>Patient harm</td></tr>
    </table></div>
    <h4>Using the data</h4>
    <p>Present indicators as a <strong>dashboard</strong> with trends rather than isolated figures. Compare against internal targets and external benchmarks, but investigate case mix and data quality before judging performance. Feed results to the <strong>transfusion committee</strong>, publish them to clinical units and close the loop with <strong>PDSA cycles</strong>. Avoid targets that encourage gaming, such as reducing crossmatch without measuring transfusion safety. Version-control each definition so that trends remain comparable when criteria change, and review the indicator set at least annually.</p>
    <h4>Philippine application</h4>
    <p>Indicators should reflect local constraints: family replacement donation, seasonal dengue demand, limited platelet availability and referral between hospitals. A small service may start with a few robust indicators — sample rejection, wastage, reaction reporting and appropriateness — before expanding.</p>
  `,
  tip: "Define each indicator as numerator over denominator and name the owner — that is what separates quality work from a list of slogans.",
  sources: ["B1", "B5", "B9"]
},
{
  id: "ih175", domain: "ih-clinical", star: true,
  q: "Discuss transfusion practice in dengue: the haematological course, the evidence on platelet transfusion and the appropriate use of blood components.",
  tags: ["dengue", "platelets", "Philippines", "bleeding"],
  keypoints: ["plasma leakage", "thrombocytopenia", "platelet function", "prophylactic platelet transfusion", "significant bleeding", "red cells", "plasma", "dengue shock syndrome", "warning signs", "platelet demand"],
  answer: `
    <h4>Haematological course</h4>
    <p>Dengue is caused by a flavivirus transmitted by <em>Aedes</em> mosquitoes. The critical phase is marked by <strong>plasma leakage</strong>, rising haematocrit and <strong>thrombocytopenia</strong>. Platelet counts fall around defervescence, but the count correlates poorly with bleeding; <strong>platelet function</strong>, endothelial activation and coagulation activation also matter. A count alone should never drive the decision — assess bleeding, haematocrit trend and haemodynamics, and document the indication. Bleeding risk is highest with severe leakage, shock, liver dysfunction and pre-existing ulcers.</p>
    <h4>When to transfuse</h4>
    <ul>
      <li><strong>Prophylactic platelet transfusion</strong> is not recommended in stable patients, even with very low counts; it does not prevent bleeding and consumes a scarce product.</li>
      <li>Platelets are considered for <strong>significant bleeding</strong> with severe thrombocytopenia, and in some invasive procedures.</li>
      <li><strong>Red cells</strong> are given for haemodynamically significant bleeding, not for haemoconcentration alone.</li>
      <li><strong>Plasma</strong> is not a treatment for haemoconcentration; fluids are used for leakage, and unnecessary plasma causes volume overload.</li>
    </ul>
    <h4>Supportive care and traps</h4>
    <p>Monitor haematocrit, platelets, liver enzymes and <strong>warning signs</strong>. Avoid NSAIDs and intramuscular injections. In <strong>dengue shock syndrome</strong>, fluid resuscitation is the priority; blood products are reserved for bleeding or profound anaemia. Recognise that a falling haematocrit with instability may mean bleeding, not recovery.</p>
    <h4>Blood supply and the Philippines</h4>
    <p>Dengue outbreaks create sudden <strong>platelet demand</strong> and pressure on voluntary donors. Blood centres should plan seasonal stock, prioritise components by clinical need and discourage inappropriate prophylactic use. Hospital committees should audit dengue transfusions and educate clinicians, because the greatest supply-side gain often comes from not transfusing.</p>
  `,
  tip: "Lead with the evidence against prophylactic platelets, then state when bleeding or shock changes the decision.",
  sources: ["B1", "B11", "B12"]
},
{
  id: "ih176", domain: "ih-clinical",
  q: "Discuss transfusion support for patients with haematological malignancy, including component modification, platelet refractoriness and iron overload.",
  tags: ["haematological malignancy", "irradiation", "platelet refractoriness", "iron overload"],
  keypoints: ["restrictive transfusion threshold", "platelet refractoriness", "HLA antibodies", "leukoreduction", "irradiation", "CMV-safe", "washed", "iron overload", "antibody registry", "TACO"],
  answer: `
    <h4>Anaemia</h4>
    <p>Anaemia in haematological malignancy is multifactorial: marrow infiltration, chemotherapy, bleeding, inflammation, iron deficiency and renal impairment. Use a <strong>restrictive transfusion threshold</strong> and treat reversible causes. Erythropoiesis-stimulating agents are appropriate only in selected patients, and iron status should be assessed. Transfusion improves symptoms but does not treat the disease. Transfusion dependence is a prognostic marker and should prompt discussion of disease-modifying therapy.</p>
    <h4>Thrombocytopenia</h4>
    <p>Prophylactic platelets are used in hypoproliferative thrombocytopenia, especially during chemotherapy or before procedures. Bleeding, fever, sepsis and drugs alter the decision; avoid aspirin and NSAIDs when counts are low, and treat mucosal bleeding promptly. Repeated transfusions lead to <strong>platelet refractoriness</strong>; check 1-hour and 24-hour counts, look for <strong>HLA antibodies</strong> and use matched or crossmatch-compatible platelets.</p>
    <h4>Component modification</h4>
    <ul>
      <li><strong>Leukoreduction</strong> reduces febrile reactions, CMV transmission and HLA alloimmunisation.</li>
      <li><strong>Irradiation</strong> prevents transfusion-associated graft-versus-host disease in stem cell transplant recipients, after purine analogues and in other profoundly immunosuppressed patients.</li>
      <li><strong>CMV-safe</strong> components are indicated for seronegative pregnant women and selected transplant patients.</li>
      <li><strong>Washed</strong> components are reserved for severe IgA deficiency or recurrent severe allergic reactions.</li>
    </ul>
    <h4>Special problems</h4>
    <p>Patients with myelodysplasia or chronic transfusion needs develop <strong>iron overload</strong>, which requires monitoring and chelation. Alloimmunisation and delayed haemolytic reactions are more common after many transfusions; an <strong>antibody registry</strong> and extended matching help. <strong>TACO</strong> is a particular risk in older patients with cardiac or renal comorbidity. Patients with graft-versus-host disease or intensive immunosuppression need irradiated products. Goals of care should be discussed, because transfusion in advanced disease may be palliative rather than life-prolonging.</p>
  `,
  tip: "Link each component modification to a specific patient risk, and remember iron overload in the chronically transfused.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih177", domain: "ih-clinical",
  q: "Discuss informed consent for blood transfusion: ethical foundations, required elements, documentation and the management of refusal or emergency.",
  tags: ["consent", "ethics", "autonomy", "refusal"],
  keypoints: ["Informed consent", "autonomy", "capacity", "disclosure", "voluntariness", "patient blood management", "transfusion-transmitted infection", "alloimmunisation", "emergency exception", "advance directives"],
  answer: `
    <h4>Why consent matters</h4>
    <p>Transfusion is a medical intervention with real benefits and risks. <strong>Informed consent</strong> respects <strong>autonomy</strong> and supports shared decision-making; it is a process, not a signature. A signed form obtained without discussion is not valid consent, and a patient may refuse even when the clinician believes transfusion is necessary.</p>
    <h4>Elements of valid consent</h4>
    <ul>
      <li><strong>Capacity</strong>: the patient can understand, retain, weigh and communicate a decision.</li>
      <li><strong>Disclosure</strong> of the indication, expected benefit, material risks, alternatives and the consequences of refusal.</li>
      <li>Understanding, checked with teach-back and an interpreter where needed.</li>
      <li><strong>Voluntariness</strong>, free from coercion, and documentation of the discussion.</li>
    </ul>
    <h4>What to discuss</h4>
    <p>Explain why blood is proposed, what product is likely, and the alternatives — <strong>patient blood management</strong>, iron, erythropoietin, cell salvage, antifibrinolytics or no transfusion. Discuss <strong>transfusion-transmitted infection</strong>, allergic and febrile reactions, haemolysis, <strong>alloimmunisation</strong>, TACO and TRALI, and the possibility of an unknown residual risk. For children, consent comes from the parent or guardian, with assent from the child where developmentally appropriate. Consent should be revisited if the clinical situation or the product changes; refusal of one product is not necessarily refusal of all.</p>
    <h4>Emergencies and refusal</h4>
    <p>In a life-threatening emergency with no available representative, clinicians may transfuse under the <strong>emergency exception</strong>, documenting the reasoning. A competent adult's refusal must be respected, including for religious reasons; <strong>advance directives</strong> should be honoured. Consent discussions and refusals belong in the medical record, and the transfusion committee should audit documentation and provide patient information in local languages.</p>
  `,
  tip: "Say that consent is a documented conversation about alternatives — not a form signed under pressure at the bedside.",
  sources: ["B1", "B5", "B12"]
},
{
  id: "ih178", domain: "ih-clinical",
  q: "Discuss transfusion in chronic kidney disease and dialysis: the causes of anaemia, why transfusion is avoided, and the practical approach when it is needed.",
  tags: ["chronic kidney disease", "dialysis", "ESA", "transplant"],
  keypoints: ["erythropoietin deficiency", "erythropoiesis-stimulating agents", "HLA alloimmunisation", "panel-reactive antibodies", "iron overload", "hyperkalaemia", "leukoreduced", "patient blood management", "TACO", "transplant candidates"],
  answer: `
    <h4>The anaemia of CKD</h4>
    <p>Chronic kidney disease causes anaemia through <strong>erythropoietin deficiency</strong>, iron deficiency, inflammation, blood loss and shortened red cell survival. Treatment combines iron replacement, <strong>erythropoiesis-stimulating agents</strong> and, in some patients, hypoxia-inducible factor prolyl hydroxylase inhibitors. Transfusion is reserved for symptomatic severe anaemia, ESA failure, active bleeding or urgent surgery. ESA resistance should prompt a search for iron deficiency, inflammation, hyperparathyroidism and aluminium toxicity.</p>
    <h4>Why transfusion is avoided</h4>
    <ul>
      <li><strong>HLA alloimmunisation</strong> from leukocytes and platelets can raise <strong>panel-reactive antibodies</strong> and complicate kidney transplantation.</li>
      <li>Red cell alloantibodies make future crossmatching difficult.</li>
      <li><strong>Iron overload</strong> and volume load worsen cardiac and hepatic risk.</li>
      <li><strong>Hyperkalaemia</strong>, especially with older or large-volume red cell units, is a hazard in dialysis patients.</li>
      <li><strong>TACO</strong> and infection risk are increased.</li>
    </ul>
    <h4>When transfusion is needed</h4>
    <p>Transfuse <strong>leukoreduced</strong> red cells for symptomatic anaemia or bleeding, using a restrictive threshold and single units with reassessment. In dialysis patients, coordinate with the dialysis schedule and monitor potassium and volume. For <strong>transplant candidates</strong>, avoid unnecessary transfusion, document antibodies and communicate with the transplant centre. Avoid transfusion before the transplant work-up whenever an alternative exists.</p>
    <h4>Prevention and coordination</h4>
    <p>Treat iron deficiency before escalating ESA, review dialysis adequacy, minimise phlebotomy and manage anticoagulation; iron studies are essential. A <strong>patient blood management</strong> approach in nephrology reduces exposure and preserves transplant options. The transfusion service should provide phenotype-matched units when antibodies exist and advise on component modification, while the committee reviews transfusion rates in dialysis units. Nephrology and the blood bank should agree on a local anaemia pathway.</p>
  `,
  tip: "Frame transfusion as a transplant-limiting event, then give the practical exceptions and the leukoreduction rationale.",
  sources: ["B1", "B11", "B12"]
},
{
  id: "ih179", domain: "ih-clinical",
  q: "Discuss the reversal of warfarin and direct oral anticoagulants in major bleeding, and the transfusion service's role in providing and governing these therapies.",
  tags: ["anticoagulant reversal", "PCC", "DOAC", "bleeding"],
  keypoints: ["prothrombin complex concentrate", "vitamin K", "4-factor prothrombin complex concentrate", "fresh frozen plasma", "idarucizumab", "andexanet alfa", "dabigatran", "anti-Xa", "tranexamic acid", "source control"],
  answer: `
    <h4>Why reversal is a transfusion issue</h4>
    <p>Urgent reversal of anticoagulation is requested for life-threatening bleeding or emergency surgery. The transfusion service supplies <strong>prothrombin complex concentrate</strong> and plasma, advises on alternatives and helps monitor the response. The first step is always to stop the drug and assess the severity of bleeding, renal function and the time of the last dose.</p>
    <h4>Warfarin</h4>
    <p>For major bleeding or urgent surgery, give <strong>vitamin K</strong> plus <strong>4-factor prothrombin complex concentrate</strong>, which replaces factors II, VII, IX and X rapidly. <strong>Fresh frozen plasma</strong> is used only when PCC is unavailable or volume replacement is also needed; it corrects the INR slowly and incompletely. The INR should be repeated, but clinical haemostasis matters more than a perfect number.</p>
    <h4>Direct oral anticoagulants</h4>
    <ul>
      <li><strong>Dabigatran</strong>: <strong>idarucizumab</strong> is the specific reversal agent; dialysis removes it in severe renal failure.</li>
      <li>Apixaban and rivaroxaban: <strong>andexanet alfa</strong> is specific where available; PCC is an off-label alternative.</li>
      <li>Routine coagulation tests are insensitive; <strong>anti-Xa</strong> or dilute thrombin time may help, but treatment should not wait for results in severe bleeding.</li>
    </ul>
    <h4>Supportive measures and stewardship</h4>
    <p>Give <strong>tranexamic acid</strong> where appropriate, maintain platelets and fibrinogen, correct calcium and temperature, and involve surgery or radiology for <strong>source control</strong>. Platelet transfusion does not reverse DOACs. Avoid reflexive plasma; it causes volume load and does not reliably reverse direct oral anticoagulants. Audit requests and stock use, because PCC is expensive and scarce. Reversal is not the same as correcting a laboratory number: treat the patient and the bleeding, and document the indication.</p>
  `,
  tip: "Pair each drug with its specific agent, and say clearly that FFP is not the answer for a DOAC.",
  sources: ["B1", "B11", "B12"]
},
{
  id: "ih180", domain: "ih-clinical",
  q: "Discuss transfusion support in solid organ transplantation, from pretransplant antibody assessment through intraoperative massive transfusion and post-transplant complications.",
  tags: ["transplant", "CMV", "massive transfusion", "ABO-incompatible"],
  keypoints: ["HLA alloimmunisation", "leukoreduced", "CMV-safe", "massive transfusion", "plasma exchange", "ABO-incompatible", "irradiated", "TACO", "transplant team", "graft dysfunction"],
  answer: `
    <h4>Before transplantation</h4>
    <p>Transplant candidates are often heavily transfused, and prior transfusion can cause <strong>HLA alloimmunisation</strong> and red cell alloantibodies. Pretransplant assessment includes ABO and Rh typing, an antibody screen, HLA antibody testing and a crossmatch. A detailed transfusion history, including reactions and antibodies, is part of the transplant work-up. <strong>Leukoreduced</strong> components reduce HLA sensitisation, and <strong>CMV-safe</strong> products are used for seronegative recipients of seropositive organs.</p>
    <h4>During surgery</h4>
    <p>Liver transplantation is a <strong>massive transfusion</strong> scenario: portal hypertension, fibrinolysis, hypothermia, citrate toxicity and renal dysfunction coexist. Viscoelastic testing, fibrinogen replacement, calcium and temperature control guide therapy and reduce blind component use. Kidney transplantation usually needs less blood, but vascular complications and pre-existing anaemia may require support. <strong>ABO-incompatible</strong> transplants require antibody removal by <strong>plasma exchange</strong> and IVIG, with component selection that avoids further antibody. These grafts need a coordinated protocol across nephrology, surgery, apheresis and the blood bank, agreed before the patient is listed.</p>
    <h4>After transplantation</h4>
    <ul>
      <li>Anaemia from blood loss, immunosuppression, infection and marrow suppression.</li>
      <li><strong>CMV</strong> and other opportunistic infections; use CMV-safe blood.</li>
      <li>Alloimmunisation and delayed haemolytic reactions after repeated transfusion.</li>
      <li><strong>TACO</strong> and volume overload in patients with <strong>graft dysfunction</strong>.</li>
    </ul>
    <h4>Component choices</h4>
    <p>Use leukoreduced, CMV-safe and, where indicated, <strong>irradiated</strong> components for profoundly immunosuppressed patients. Washed products are reserved for severe IgA deficiency or recurrent reactions. Immunosuppression increases the risk of transfusion-transmitted infection and reactivation, so CMV surveillance continues after discharge. Transfusion support should be planned with the <strong>transplant team</strong>, and the transfusion committee should review outcomes, component use and infection surveillance.</p>
  `,
  tip: "Separate the pretransplant antibody problem, the intraoperative bleeding problem and the post-transplant infection problem.",
  sources: ["B1", "B2", "B11"]
}
);
