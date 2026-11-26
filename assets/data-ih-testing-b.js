/* Immunohematology — pretransfusion testing, part B: preanalytical, methods, resolution, QA */
window.QBANK.push(
{
  id: "ih91", domain: "ih-testing", star: true,
  q: "Discuss the preanalytical phase of pretransfusion testing: patient identification, sample requirements, rejection criteria and sample retention.",
  tags: ["preanalytical", "wrong blood in tube", "sample rejection", "patient identification"],
  keypoints: ["wrong blood in tube", "ABO-incompatible transfusion", "two independent identifiers", "label the tubes at the bedside", "collector's signature", "historical record", "EDTA", "3 days", "running IV line", "haemolysed sample", "reject", "7 days after transfusion", "pre-labelled tubes", "bedside check"],
  answer: `
    <h4>Why the preanalytical phase dominates</h4>
    <p>Most serious errors in pretransfusion testing begin before the sample reaches the bench. A <strong>wrong blood in tube</strong> (WBIT) — a sample drawn from one patient and labelled as another — can produce a perfectly valid ABO group for the wrong person and is a leading cause of <strong>ABO-incompatible transfusion</strong>. The <strong>bedside check</strong>, not the laboratory, is the decisive control.</p>
    <h4>Identification and labelling</h4>
    <ul>
      <li>Identify the patient with <strong>two independent identifiers</strong> (full name and date of birth or hospital number), never the bed number.</li>
      <li><strong>Label the tubes at the bedside</strong>, immediately after collection, with patient identifiers, date, time and the <strong>collector's signature</strong>; <strong>pre-labelled tubes</strong> are rejected.</li>
      <li>Ask the patient to state their name where possible; treat an unconscious patient with extra caution and a second checker.</li>
      <li>Compare the new ABO group with the <strong>historical record</strong>; a discrepancy suggests WBIT and must be resolved before issue.</li>
    </ul>
    <h4>Sample requirements</h4>
    <p>Use <strong>EDTA</strong> for ABO/D typing, antibody screening, DAT and genotyping, because EDTA prevents in vitro complement uptake; clotted or serum samples are acceptable for some methods but not for the DAT. Collect an adequate volume, avoid haemolysis from a small needle or vigorous shaking, and never sample above a <strong>running IV line</strong> — discard the first few millilitres or use a distal site, and record the infusion. The sample must be collected within <strong>3 days</strong> of transfusion if the patient has been transfused or pregnant in the past 3 months, because a new antibody may have formed.</p>
    <h4>Rejection and retention</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Effect</th><th>Action</th></tr>
      <tr><td>Unlabelled or mislabelled tube</td><td>Wrong patient group</td><td>Reject; recollect</td></tr>
      <tr><td><strong>Haemolysed sample</strong></td><td>Obscures agglutination; haemolysis may be misread</td><td>Reject if severe; recollect</td></tr>
      <tr><td>Dilution by IV fluid</td><td>False-negative antibody screen</td><td>Recollect from another site</td></tr>
      <tr><td>Clotted EDTA sample</td><td>Invalid cell suspension</td><td>Reject; recollect</td></tr>
    </table></div>
    <p>Store samples at 2–8 °C and retain them for at least <strong>7 days after transfusion</strong>, so that a reaction can be investigated. Reject any sample that fails these criteria rather than reporting a result that may be wrong.</p>
  `,
  tip: "Open with WBIT and end with the 3-day and 7-day rules — the two numbers examiners listen for.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih92", domain: "ih-testing",
  q: "Describe how ABO and RhD typing are performed and interpreted, including forward and reverse grouping, grading, weak reactions and weak D.",
  tags: ["ABO typing", "RhD typing", "forward grouping", "weak D"],
  keypoints: ["forward grouping", "reverse grouping", "anti-A,B", "infants under 4–6 months", "2–5% red cell suspension", "mixed field", "haemolysis", "Rh control", "subgroups", "recent transfusion", "weak D testing", "partial D", "D-negative"],
  answer: `
    <h4>The two halves of ABO typing</h4>
    <p><strong>Forward grouping</strong> tests the patient's red cells with anti-A, anti-B and often <strong>anti-A,B</strong>; <strong>reverse grouping</strong> tests the patient's plasma against group A1 and group B reagent cells. Agreement between the two is required before a group is reported. Reverse grouping is unreliable in <strong>infants under 4–6 months</strong>, who have not yet produced isohaemagglutinins, so neonatal and cord samples are typed by forward grouping only.</p>
    <h4>Technique and grading</h4>
    <ul>
      <li>Use a <strong>2–5% red cell suspension</strong> and the reagent strength and incubation stated in the manufacturer's insert; tube, gel and solid-phase methods are acceptable when validated.</li>
      <li>Centrifuge, resuspend gently and grade: 4+ one solid clump, 3+ several large clumps, 2+ medium clumps with a clear supernatant, 1+ many small clumps, plus a <strong>mixed field</strong> category.</li>
      <li>Record <strong>haemolysis</strong> as a positive reaction, not as a negative one.</li>
      <li>Include an <strong>Rh control</strong> when a high-protein anti-D reagent is used, to exclude false agglutination from autoagglutinins or rouleaux.</li>
    </ul>
    <h4>Interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Cells with anti-A / anti-B</th><th>Serum with A1 / B cells</th><th>Group</th></tr>
      <tr><td>Negative / negative</td><td>Positive / positive</td><td>O</td></tr>
      <tr><td>Positive / negative</td><td>Negative / positive</td><td>A</td></tr>
      <tr><td>Negative / positive</td><td>Positive / negative</td><td>B</td></tr>
      <tr><td>Positive / positive</td><td>Negative / negative</td><td>AB</td></tr>
    </table></div>
    <p>Weak or missing reactions require investigation: ABO <strong>subgroups</strong>, disease-related loss of antigen, a <strong>recent transfusion</strong> or transplant, or a technical problem such as a weak cell suspension. A single negative tube at the specified phase does not exclude weak D; follow the local <strong>weak D testing</strong> and genotyping algorithm, especially in pregnant women and donors.</p>
    <h4>D typing</h4>
    <p>Type D with a licensed anti-D reagent, read at the specified phase, and repeat any weak or discrepant result with a different reagent or method. Patients with a weak reaction are managed as <strong>D-negative</strong> until genotyping clarifies whether they are weak D type 1, 2 or 3 (manage as D-positive) or a <strong>partial D</strong> such as DVI (manage as D-negative). Donors are tested for weak D and labelled D-positive when D is detected.</p>
  `,
  tip: "Draw the four-group reaction table — it lets you discuss discrepancies without repeating the separate discrepancy question.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih93", domain: "ih-testing",
  q: "Discuss red cell antigen phenotyping of patients and donors: methods, controls, pitfalls and clinical applications.",
  tags: ["phenotyping", "antigen typing", "genotyping", "extended matching"],
  keypoints: ["phenotyping", "antigen-negative units", "extended matching", "genotyping", "direct agglutination", "indirect antiglobulin technique", "molecular typing", "mixed field", "positive and negative control", "dosage", "thalassaemia", "sickle cell disease", "Mia", "chloroquine"],
  answer: `
    <h4>What phenotyping is for</h4>
    <p><strong>Phenotyping</strong> establishes which antigens a patient's or donor's red cells carry. It is used to confirm an antibody's specificity (the patient should lack the corresponding antigen), to select <strong>antigen-negative units</strong>, to provide <strong>extended matching</strong> for chronically transfused patients, and to assess fetal or neonatal antigen status. Serological phenotyping is the routine method; <strong>genotyping</strong> is used when cells are unavailable or unreliable.</p>
    <h4>Methods</h4>
    <ul>
      <li><strong>Direct agglutination</strong> for antigens detected by IgM reagents (ABO, and some MNS and P1 reagents), read at room temperature.</li>
      <li><strong>Indirect antiglobulin technique</strong> for IgG reagents (Kell, Duffy, Kidd, Rh), with 37 °C incubation, washing and AHG — or the equivalent gel or solid-phase card.</li>
      <li><strong>Molecular typing</strong> (PCR-SSP, real-time PCR, arrays, sequencing) when a patient has been recently transfused, has a positive DAT, or needs a rare antigen prediction.</li>
    </ul>
    <h4>Controls and pitfalls</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Effect</th><th>Solution</th></tr>
      <tr><td>Recently transfused</td><td>Donor cells give a <strong>mixed field</strong> or a false-positive phenotype</td><td>Genotype, or separate reticulocytes</td></tr>
      <tr><td>Positive DAT</td><td>IgG coating blocks reagent binding</td><td><strong>Chloroquine</strong> or EDTA-glycine treatment, or genotype</td></tr>
      <tr><td>Weak antigen expression</td><td>False-negative result</td><td>Use a different reagent, IAT, or adsorption–elution</td></tr>
      <tr><td>No positive control</td><td>Invalid negative result</td><td>Test a known <strong>positive and negative control</strong> with each batch</td></tr>
    </table></div>
    <p>Always run controls with each antigen test and interpret <strong>dosage</strong>: homozygous cells express more antigen and react more strongly, so a weak reaction on a heterozygous cell can be missed. A patient's own phenotype must agree with the antibody identified — an anti-Jkᵃ in a Jk(a+) patient is a contradiction that demands review.</p>
    <h4>Clinical applications</h4>
    <p>Extend matching beyond ABO/D for patients with <strong>thalassaemia</strong>, <strong>sickle cell disease</strong> or multiple antibodies — commonly C, E, c, e, K, Fy, Jk and S — to reduce further alloimmunisation. In Southeast Asia, include <strong>Mia</strong> in donor selection where anti-Mia is identified. Phenotype results must be recorded permanently, because they guide every future transfusion and are more reliable than a crossmatch alone.</p>
  `,
  tip: "The three pitfalls — recent transfusion, positive DAT and weak expression — each need a named solution.",
  sources: ["B1", "B2", "B3"]
},
{
  id: "ih94", domain: "ih-testing", star: true,
  q: "Discuss the antibody screening test: reagent cell selection, phases, interpretation, limitations and quality requirements.",
  tags: ["antibody screen", "reagent cells", "IAT", "limitations"],
  keypoints: ["antibody screen", "group O reagent cells", "indirect antiglobulin technique", "homozygous", "Mia-positive", "immediate spin", "IgG", "negative screen", "positive screen", "antibody identification", "prozone", "autocontrol", "3 days", "dosage"],
  answer: `
    <h4>Purpose and principle</h4>
    <p>The <strong>antibody screen</strong> detects unexpected red cell antibodies in the patient's plasma before transfusion. Patient plasma is tested against <strong>two or three group O reagent cells</strong> of known phenotype, usually by <strong>indirect antiglobulin technique</strong> in tube, gel or solid phase. The screen is not a crossmatch: it asks whether the patient has an antibody, not whether a particular unit is compatible.</p>
    <h4>Choosing the reagent cells</h4>
    <ul>
      <li>Cells must express the clinically significant antigens: D, C, E, c, e, K, k, Fyᵃ, Fyᵇ, Jkᵃ, Jkᵇ, S, s, M, N, P1, Leᵃ and Leᵇ.</li>
      <li>Use cells that are <strong>homozygous</strong> for antigens showing <strong>dosage</strong> (Rh, Kidd, Duffy, MNS) so that weak antibodies are not missed.</li>
      <li>In Asia, include <strong>Mia-positive</strong> cells, because standard Western panels may lack the antigen.</li>
      <li>Use the same lot for the screen and the panel where possible, and keep the antigen profile sheet with the results.</li>
    </ul>
    <h4>Phases and interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Phase</th><th>Antibody class detected</th><th>Typical antibodies</th></tr>
      <tr><td><strong>Immediate spin</strong> / room temperature</td><td>IgM</td><td>Anti-A, anti-B, anti-M, anti-N, anti-P1, anti-Le</td></tr>
      <tr><td>37 °C and AHG</td><td><strong>IgG</strong> (clinically significant)</td><td>Anti-D, anti-K, anti-Fy, anti-Jk, anti-S</td></tr>
    </table></div>
    <p>A <strong>negative screen</strong> means no antibody was detected by that method — it does not exclude an antibody to a low-prevalence antigen, a very weak antibody, or one that has evanesced. A <strong>positive screen</strong> mandates <strong>antibody identification</strong> before units are selected.</p>
    <h4>Limitations and quality</h4>
    <p>False negatives arise from an inadequate serum-to-cell ratio, shortened incubation, a <strong>prozone</strong> phenomenon, incorrectly stored reagents, or an antibody below the limit of detection. False positives arise from cold agglutinins, rouleaux, fibrin, contaminated reagents and a positive DAT. Include an <strong>autocontrol</strong>, follow the manufacturer's method exactly, and repeat any discordant result. The screen must be performed on a sample collected within <strong>3 days</strong> of transfusion when the patient has been transfused or pregnant in the past 3 months.</p>
  `,
  tip: "State clearly that a negative screen is a negative under those conditions — not proof that no antibody exists.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih95", domain: "ih-testing",
  q: "Explain how antigen-negative and crossmatch-compatible red cells are selected for a patient with an identified antibody, including the donor search and inventory implications.",
  tags: ["antigen-negative units", "unit selection", "rare donor", "extended matching"],
  keypoints: ["antigen-negative", "AHG crossmatch", "rare donor registry", "donors to screen", "phenotype-matched", "extended phenotype match", "antibody card", "warm autoantibody", "uncrossmatched", "low antibody titre", "autologous predeposit", "special requirements"],
  answer: `
    <h4>From antibody to unit</h4>
    <p>Once an antibody is identified, the laboratory must provide red cells that lack the corresponding antigen and that are compatible by <strong>AHG crossmatch</strong>. Antigen-negative selection is the definitive step; the crossmatch is a final check. For antibodies to high-prevalence antigens, compatible units may be available only through a <strong>rare donor registry</strong> or <strong>autologous predeposit</strong>.</p>
    <h4>Estimating the search</h4>
    <p>The number of donors that must be tested is estimated by:</p>
    <div class="calc">Donors to screen = units required ÷ frequency of antigen-negative donors</div>
    <p>For example, if 1% of donors lack the antigen and four units are needed, about 400 donors must be screened — a calculation that should trigger a call to the blood centre early, not on the day of surgery. For common antibodies, most units are suitable and the search is trivial.</p>
    <h4>Choosing the matching strategy</h4>
    <div class="table-wrap"><table>
      <tr><th>Situation</th><th>Selection</th></tr>
      <tr><td>Single clinically significant antibody</td><td><strong>Antigen-negative</strong>, AHG crossmatch-compatible</td></tr>
      <tr><td>Multiple or unidentified antibodies</td><td>Phenotype-matched units plus AHG crossmatch; consider adsorption studies</td></tr>
      <tr><td>Chronic transfusion (thalassaemia, sickle cell)</td><td><strong>Extended phenotype match</strong> for C, E, c, e, K, Fy, Jk, S</td></tr>
      <tr><td>Warm autoantibody</td><td>Phenotype-matched units; crossmatch may remain incompatible — document and inform the clinician</td></tr>
      <tr><td>Emergency, no compatible unit</td><td>Group-compatible <strong>uncrossmatched</strong> blood with documented clinical authorization</td></tr>
    </table></div>
    <h4>Practical and clinical points</h4>
    <p>Do not accept a serologically compatible unit that is antigen-positive when the antibody is known — the crossmatch can be falsely negative because of a <strong>low antibody titre</strong>. Reserve enough units for the planned procedure, monitor expiry, and release unused units promptly. Record the antibody permanently, issue an <strong>antibody card</strong>, and communicate <strong>special requirements</strong> (irradiated, CMV-safe, K-negative) to the ward. In a patient with a rare antibody, the delay in finding blood is itself a clinical risk: involve the clinician early, consider erythropoietin and iron, and plan elective surgery around available stock.</p>
  `,
  tip: "Give the donors-to-screen formula and then say why the answer changes practice — early planning.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih96", domain: "ih-testing",
  q: "Discuss automation in the immunohaematology laboratory: platforms, advantages, validation, limitations and contingency planning.",
  tags: ["automation", "column agglutination", "validation", "LIS"],
  keypoints: ["column agglutination", "solid-phase red cell adherence", "standardisation", "traceability", "throughput", "IQ/OQ/PQ", "parallel testing", "bidirectional LIS", "fibrin", "mixed fields", "contingency plan", "competency assessment"],
  answer: `
    <h4>What is automated</h4>
    <p>Modern immunohaematology analysers automate sample and reagent handling, pipetting, incubation, centrifugation, reading and interpretation, and pass results to the laboratory information system. Two platform families dominate: <strong>column agglutination</strong> (gel or glass bead) and <strong>solid-phase red cell adherence</strong>. Both can perform ABO/D typing, antibody screening, antibody identification, crossmatching and some antigen typing.</p>
    <h4>Advantages</h4>
    <ul>
      <li><strong>Standardisation</strong>: fixed volumes, incubation and centrifugation reduce operator-dependent variation.</li>
      <li><strong>Traceability</strong>: images, reaction grades and audit trails are stored electronically.</li>
      <li><strong>Throughput</strong>: large batches, continuous loading and walk-away operation suit high-volume hospitals.</li>
      <li>Closed systems reduce staff exposure to blood.</li>
    </ul>
    <h4>Validation and quality control</h4>
    <div class="table-wrap"><table>
      <tr><th>Element</th><th>Requirement</th></tr>
      <tr><td>Installation and operation</td><td><strong>IQ/OQ/PQ</strong> with documented acceptance criteria</td></tr>
      <tr><td>Method comparison</td><td><strong>Parallel testing</strong> against the current method on patient and QC samples</td></tr>
      <tr><td>Carryover and precision</td><td>Challenge with weak positive and negative samples</td></tr>
      <tr><td>Interface</td><td><strong>Bidirectional LIS</strong> validation, including error handling</td></tr>
      <tr><td>Routine QC</td><td>Daily reagents, controls and maintenance; manual backup available</td></tr>
    </table></div>
    <h4>Limitations</h4>
    <p>Automation does not remove the need for judgement. <strong>Fibrin</strong>, clots and cell debris can cause false-positive gel reactions; very weak reactions and <strong>mixed fields</strong> may need manual review; some samples (lipaemic, haemolysed, clotted or insufficient) are unsuitable. Antibody identification often still requires manual selected cells, enzymes or adsorption. Downtime is a patient-safety risk: the laboratory must have a written <strong>contingency plan</strong>, manual methods, trained staff and a way to issue emergency blood without the analyser.</p>
    <h4>Staff and governance</h4>
    <p><strong>Competency assessment</strong>, change control for software and reagent versions, and review of flags and overrides are essential. Automation should shorten turnaround time and release staff for problem solving — not distance them from the result.</p>
  `,
  tip: "Validation is the examinable part: IQ/OQ/PQ, parallel testing, interface validation and a downtime plan.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih97", domain: "ih-testing", star: true,
  q: "Compare the immediate spin and antiglobulin crossmatches: what each detects, when each is acceptable, and how an incompatible crossmatch is resolved.",
  tags: ["crossmatch", "immediate spin", "AHG", "incompatible crossmatch"],
  keypoints: ["immediate spin", "IgM", "ABO incompatibility", "AHG crossmatch", "IgG", "antibody screen negative", "electronic crossmatch", "antigen-negative", "low-prevalence antigen", "clerical error", "rouleaux", "warm autoantibody", "incompatible unit"],
  answer: `
    <h4>Two different questions</h4>
    <p>The <strong>immediate spin (IS) crossmatch</strong> mixes patient serum with donor cells, centrifuges immediately and reads at room temperature. It detects <strong>IgM</strong> antibodies that cause direct agglutination, above all <strong>ABO incompatibility</strong>. The <strong>AHG crossmatch</strong> adds 37 °C incubation, washing and antiglobulin reagent; it detects <strong>IgG</strong> antibodies that sensitise cells without agglutinating them.</p>
    <h4>When each is acceptable</h4>
    <div class="table-wrap"><table>
      <tr><th>Patient</th><th>Crossmatch</th><th>Reason</th></tr>
      <tr><td><strong>Antibody screen negative</strong>, no history</td><td>IS or <strong>electronic crossmatch</strong></td><td>ABO compatibility is the only remaining risk</td></tr>
      <tr><td>Clinically significant antibody present or in history</td><td>Full <strong>AHG crossmatch</strong> with <strong>antigen-negative</strong> units</td><td>IgG antibody may sensitise donor cells</td></tr>
      <tr><td>Patient with <strong>warm autoantibody</strong></td><td>AHG crossmatch; may remain incompatible</td><td>Autoantibody reacts with all cells</td></tr>
      <tr><td>Emergency, no sample</td><td>Group O uncrossmatched</td><td>Time does not allow testing</td></tr>
    </table></div>
    <h4>What the crossmatch cannot do</h4>
    <ul>
      <li>It cannot detect an error in the patient's ABO group if the sample is from the wrong patient.</li>
      <li>It cannot exclude an antibody against a <strong>low-prevalence antigen</strong> absent from the screening cells unless the donor unit happens to carry it.</li>
      <li>A compatible crossmatch does not prove that a unit will survive normally; it is a final compatibility check, not a guarantee.</li>
      <li>It does not replace the antibody screen or review of the historical record.</li>
    </ul>
    <h4>Resolving an incompatible crossmatch</h4>
    <p>First repeat the ABO typing of patient and unit and check for a <strong>clerical error</strong>. Then consider <strong>rouleaux</strong> or a cold agglutinin (saline replacement, prewarm), an antibody to a low-prevalence antigen, a warm autoantibody, or a donor unit abnormality such as polyagglutination. Test the patient's plasma against the donor cells by AHG, phenotype the donor if necessary, and identify the antibody before selecting another unit. Never issue an <strong>incompatible unit</strong> without documenting the reason and informing the clinician.</p>
  `,
  tip: "Say what the crossmatch is for, then what it cannot do — that second list is what separates a good answer.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih98", domain: "ih-testing",
  q: "Discuss emergency release of blood: authorization, product selection, procedure, documentation and the risks to the patient.",
  tags: ["emergency release", "uncrossmatched", "group O", "massive haemorrhage"],
  keypoints: ["emergency release", "physician order", "group O", "D-negative", "D-positive", "group AB", "low-titre group A plasma", "two identifiers", "pretransfusion sample", "group-specific", "massive haemorrhage protocol", "bedside"],
  answer: `
    <h4>Definition and authority</h4>
    <p><strong>Emergency release</strong> is issue of blood before completion of the antibody screen and crossmatch, because delay would harm the patient. It requires a <strong>physician order</strong>, a documented reason and a prospective audit; the blood bank does not release uncrossmatched blood on an informal telephone request alone.</p>
    <h4>Product selection</h4>
    <div class="table-wrap"><table>
      <tr><th>Product</th><th>First choice</th><th>Alternative</th></tr>
      <tr><td>Red cells</td><td><strong>Group O, D-negative</strong> for females of childbearing potential</td><td><strong>Group O, D-positive</strong> when D-negative stock is exhausted</td></tr>
      <tr><td>Plasma</td><td><strong>Group AB</strong></td><td><strong>Low-titre group A plasma</strong></td></tr>
      <tr><td>Platelets</td><td>ABO-identical where possible</td><td>Group O with plasma reduction or titre screening</td></tr>
    </table></div>
    <p>In the Philippines, where D-negative donors are under 1% of the population, preserving D-negative units for women of childbearing age and girls is a practical necessity; D-positive blood may be used for other patients after weighing the risk of anti-D formation.</p>
    <h4>Procedure</h4>
    <ol>
      <li>Confirm patient identity with <strong>two identifiers</strong> and collect the <strong>pretransfusion sample</strong> before any unit is hung.</li>
      <li>Record the units issued, the time, the reason and the name of the authorizing clinician; label each unit with the patient's details.</li>
      <li>Inform the clinician of the residual risks: ABO incompatibility, an unidentified antibody, D alloimmunisation and transfusion-transmitted infection.</li>
      <li>Continue testing; switch to <strong>group-specific</strong> blood once the ABO group is confirmed on two determinations.</li>
      <li>Investigate any reaction and audit every emergency release.</li>
    </ol>
    <h4>Clinical use</h4>
    <p>Typical settings are major trauma, ruptured aortic aneurysm, postpartum haemorrhage and GI bleeding. Emergency release should be embedded in a <strong>massive haemorrhage protocol</strong> with group O stock, a single activation call and regular restocking. The commonest hazard is not the uncrossmatched unit but a failure of identification at the <strong>bedside</strong>.</p>
  `,
  tip: "Pair each product with its alternative, then add the two-identifier and group-specific switch rules.",
  sources: ["B1", "B5", "B7"]
},
{
  id: "ih99", domain: "ih-testing",
  q: "Discuss the investigation and interpretation of a positive direct antiglobulin test, including monospecific reagents, elution and clinical correlation.",
  tags: ["DAT", "positive DAT", "elution", "haemolysis"],
  keypoints: ["direct antiglobulin test", "in vivo", "IgG", "C3d", "monospecific", "eluate", "last wash", "delayed haemolytic transfusion reaction", "mixed-field DAT", "ABO HDFN", "warm AIHA", "phenotype-matched", "haemolysis"],
  answer: `
    <h4>What a positive DAT means</h4>
    <p>The <strong>direct antiglobulin test</strong> detects immunoglobulin or complement bound to the patient's red cells <strong>in vivo</strong>. A positive DAT proves that cells are coated; it does <strong>not</strong> prove that they are being destroyed. The result must be interpreted with the haemoglobin, reticulocyte count, bilirubin, LDH, haptoglobin and the clinical history.</p>
    <h4>Patterns and causes</h4>
    <div class="table-wrap"><table>
      <tr><th>DAT pattern</th><th>Typical causes</th></tr>
      <tr><td><strong>IgG</strong> only</td><td>Warm autoimmune haemolysis, HDFN, delayed haemolytic transfusion reaction, drug-induced antibody</td></tr>
      <tr><td><strong>C3d</strong> only</td><td>Cold agglutinin disease, paroxysmal cold haemoglobinuria, some drug reactions</td></tr>
      <tr><td>IgG and C3d</td><td>Warm AIHA with complement activation, mixed AIHA, delayed reaction</td></tr>
      <tr><td>Weak or negative with haemolysis</td><td>IgA or IgM antibodies, low-affinity IgG, drug-dependent antibodies, non-immune haemolysis</td></tr>
    </table></div>
    <h4>Investigation</h4>
    <ol>
      <li>Repeat the DAT with <strong>monospecific</strong> anti-IgG and anti-C3d and grade the strength.</li>
      <li>Perform an <strong>eluate</strong> (acid glycine or heat) and test it against a panel; include a <strong>last wash</strong> control.</li>
      <li>Run the patient's plasma against the panel and autocontrol, and review the drug, transfusion and pregnancy history.</li>
      <li>If the patient has been transfused recently, consider a <strong>delayed haemolytic transfusion reaction</strong> and a <strong>mixed-field DAT</strong>.</li>
      <li>Phenotype or genotype the patient if transfusion is likely, using chloroquine or EDTA-glycine to remove IgG if necessary.</li>
    </ol>
    <h4>Clinical application</h4>
    <p>A positive DAT in a jaundiced neonate with a group O mother suggests <strong>ABO HDFN</strong> or an alloantibody; the eluate and maternal screen identify the cause. In an adult with anaemia and a strongly positive IgG DAT, <strong>warm AIHA</strong> is likely, and transfusion should not be withheld when it is needed: provide the least incompatible, <strong>phenotype-matched</strong> units and monitor. A DAT-positive patient with no <strong>haemolysis</strong> needs no treatment — the test result alone is not a diagnosis.</p>
  `,
  tip: "Repeat the sentence 'a positive DAT is not a diagnosis' — then list the tests that decide whether it matters.",
  sources: ["B1", "B2", "B13"]
},
{
  id: "ih100", domain: "ih-testing",
  q: "Compare the enhancement media used in antibody detection — albumin, LISS, PEG, gel and solid phase — and explain how the choice affects sensitivity and specificity.",
  tags: ["enhancement media", "LISS", "PEG", "sensitivity"],
  keypoints: ["zeta potential", "enhancement media", "22% albumin", "LISS", "PEG", "gel", "solid phase", "negative control", "autocontrol", "anti-Jkᵃ", "anti-Fyᵃ", "false positives"],
  answer: `
    <h4>Why enhancement is needed</h4>
    <p>IgG antibodies are too small to bridge the <strong>zeta potential</strong> between red cells, so sensitisation must be promoted and the cells brought closer together. <strong>Enhancement media</strong> increase antibody uptake, shorten incubation or improve lattice formation. They change sensitivity and specificity, so the method must be validated and used consistently.</p>
    <h4>Common media</h4>
    <div class="table-wrap"><table>
      <tr><th>Medium</th><th>Mechanism</th><th>Advantages and cautions</th></tr>
      <tr><td><strong>22% albumin</strong></td><td>Raises the dielectric constant and reduces the repulsive force between cells</td><td>Classic tube method; 37 °C incubation; may cause rouleaux or <strong>false positives</strong> with abnormal proteins</td></tr>
      <tr><td><strong>LISS</strong></td><td>Low ionic strength increases the rate of antibody association</td><td>Short incubation (10–15 min); can enhance cold antibodies and complement uptake; less suitable for prewarm</td></tr>
      <tr><td><strong>PEG</strong></td><td>Removes water of hydration, concentrating antibody at the cell surface</td><td>Very sensitive, short incubation; more false positives from warm autoantibodies; viscous and prone to carryover</td></tr>
      <tr><td><strong>Gel</strong>/glass bead column</td><td>Agglutinates are trapped while free cells pellet</td><td>No washing step; stable, readable result; fibrin and debris cause false positives</td></tr>
      <tr><td><strong>Solid phase</strong></td><td>Antigen fixed to a well; bound antibody is detected by indicator cells</td><td>Highest sensitivity; detects more insignificant antibodies; requires plate washing and instrumentation</td></tr>
    </table></div>
    <h4>Choosing and controlling</h4>
    <p>Use the least sensitive method that reliably detects clinically significant antibodies for the clinical purpose: a prenatal service may accept a more sensitive method, while a hospital screening programme must balance false positives against workload. Always include a <strong>negative control</strong> and an <strong>autocontrol</strong>, and compare a new medium with the existing method before adopting it. Enhancement cannot compensate for a poor sample, incorrect incubation or inactive AHG.</p>
    <h4>Clinical point</h4>
    <p>Weak <strong>anti-K</strong>, <strong>anti-Jkᵃ</strong> and <strong>anti-Fyᵃ</strong> are the antibodies most likely to be missed by an insensitive method. Conversely, a positive result produced only by PEG or solid phase, with no reactivity by tube AHG, may be clinically insignificant — identify the antibody rather than assuming significance.</p>
  `,
  tip: "Explain the mechanism first, then the trade-off: sensitivity up, specificity down.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih101", domain: "ih-testing",
  q: "Discuss the use of enzymes and chemical treatments in antibody investigation: ficin, papain, DTT, ZZAP, chloroquine and EDTA-glycine.",
  tags: ["enzymes", "DTT", "ZZAP", "chemical treatment"],
  keypoints: ["ficin", "papain", "bromelin", "sialic acid", "destroy M, N", "Fyᵃ", "DTT", "CD38", "Kell", "ZZAP", "chloroquine", "EDTA-glycine acid", "trypsin", "K-negative units"],
  answer: `
    <h4>Why treat red cells chemically</h4>
    <p>Enzymes and chemical reagents alter red cell membrane antigens or remove bound protein. They are used to enhance weak antibodies, separate mixtures, confirm specificity, phenotype DAT-positive cells and overcome drug interference. Each treatment has a characteristic pattern of antigen loss, which is itself diagnostic.</p>
    <h4>Enzymes</h4>
    <ul>
      <li><strong>Ficin</strong>, <strong>papain</strong> and <strong>bromelin</strong> cleave <strong>sialic acid</strong> from glycoproteins, reducing the negative charge and allowing IgG to agglutinate cells directly. They enhance Rh, Kidd, Lewis, I and P1 antibodies.</li>
      <li>They <strong>destroy M, N</strong>, S (variably), <strong>Fyᵃ</strong>, Fyᵇ and Xgᵃ — so loss of reactivity after enzyme treatment supports an anti-Fy or anti-M/N, while persistence supports anti-Rh or anti-Jk.</li>
      <li>Use enzyme-treated cells only with a parallel untreated control, because some antibodies are enzyme-labile and would be falsely excluded.</li>
    </ul>
    <h4>Chemical reagents</h4>
    <div class="table-wrap"><table>
      <tr><th>Reagent</th><th>Action</th><th>Main use and caution</th></tr>
      <tr><td><strong>DTT 0.2 M</strong></td><td>Reduces disulfide bonds</td><td>Removes <strong>CD38</strong> for daratumumab; destroys <strong>Kell</strong>, Lutheran, Yt, Dombrock, LW, Cromer and Knops — cannot exclude anti-K</td></tr>
      <tr><td><strong>ZZAP</strong></td><td>DTT plus papain</td><td>Strips IgG and complement and denatures antigens for autologous adsorption; destroys Kell and enzyme-labile antigens</td></tr>
      <tr><td><strong>Chloroquine</strong> diphosphate</td><td>Removes IgG from the membrane</td><td>Phenotyping DAT-positive cells; complement remains; some antigens weaken</td></tr>
      <tr><td><strong>EDTA-glycine acid</strong></td><td>Dissociates IgG</td><td>Phenotyping IgG-coated cells; generally gentler on Kell than DTT</td></tr>
      <tr><td><strong>Trypsin</strong></td><td>Cleaves glycoproteins</td><td>Destroys M and N; used to distinguish glycophorin-dependent antibodies</td></tr>
    </table></div>
    <h4>Interpretation and controls</h4>
    <p>Compare treated and untreated cells side by side, and include a known positive and negative control for each treatment. A loss of reactivity is meaningful only if the untreated cell still reacts. Document the treatment, because it changes the antigen profile that can be excluded and must be communicated to the clinician — especially the <strong>Kell</strong> limitation after DTT, which means <strong>K-negative units</strong> are given unless the patient is known K-positive.</p>
  `,
  tip: "Memorise one enzyme table and one chemical table; the DTT Kell limitation is the most examined detail.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih102", domain: "ih-testing",
  q: "Explain the principle, method and clinical use of antibody neutralisation, giving the neutralising substance for each relevant antibody.",
  tags: ["neutralisation", "Lewis", "P1", "Chido"],
  keypoints: ["neutralisation", "soluble form of an antigen", "anti-Le", "anti-P1", "hydatid cyst fluid", "anti-Chido", "C4", "anti-Sdᵃ", "breast milk", "saline control", "dilution effect", "clinically insignificant"],
  answer: `
    <h4>Principle</h4>
    <p><strong>Neutralisation</strong> uses a <strong>soluble form of an antigen</strong> to bind and remove a specific antibody from plasma. The treated plasma is then retested against reagent cells: if reactivity disappears, the antibody has been neutralised and its specificity is confirmed. It is a cheap, precise way to resolve mixtures without finding rare cells.</p>
    <h4>Reagents and targets</h4>
    <div class="table-wrap"><table>
      <tr><th>Antibody</th><th>Neutralising source</th></tr>
      <tr><td><strong>Anti-Leᵃ</strong>, anti-Leᵇ</td><td>Lewis-positive plasma or saliva</td></tr>
      <tr><td><strong>Anti-P1</strong></td><td><strong>Hydatid cyst fluid</strong> or pigeon egg white</td></tr>
      <tr><td><strong>Anti-Chido</strong>, anti-Rodgers</td><td>Human plasma containing soluble <strong>C4</strong></td></tr>
      <tr><td><strong>Anti-Sdᵃ</strong></td><td>Human urine</td></tr>
      <tr><td>Anti-I</td><td>Human <strong>breast milk</strong></td></tr>
      <tr><td>Anti-A, anti-B, anti-H</td><td>Saliva from a secretor (ABH substance)</td></tr>
    </table></div>
    <h4>Method and controls</h4>
    <ol>
      <li>Mix equal volumes of plasma and neutralising substance; incubate at the appropriate temperature (often room temperature for 30–60 minutes).</li>
      <li>Centrifuge and test the supernatant against a panel by the usual method.</li>
      <li>Run a <strong>saline control</strong> or negative-substance control in parallel; a <strong>dilution effect</strong> alone can produce a false-negative.</li>
      <li>Include an untreated plasma control to show that the antibody was present before treatment.</li>
      <li>Interpret only when the positive cells become negative and unrelated antibodies remain reactive.</li>
    </ol>
    <h4>Clinical use and limits</h4>
    <p>Neutralisation is most useful for Lewis, P1, Chido/Rodgers and Sdᵃ antibodies, which are usually <strong>clinically insignificant</strong> and can otherwise trigger unnecessary antigen-negative unit searches. It does not neutralise clinically significant IgG antibodies such as anti-D, anti-K or anti-Jkᵃ, and it cannot be used to exclude them. If reactivity persists after neutralisation, another antibody is present and must be identified. The technique confirms specificity; it does not by itself prove clinical significance, which still depends on the antibody's class, thermal amplitude and the clinical context.</p>
  `,
  tip: "Match each antibody to its soluble antigen; then state the control that prevents a false conclusion.",
  sources: ["B1", "B2"]
},
{
  id: "ih103", domain: "ih-testing",
  q: "Discuss antibody titration: method, endpoint, controls and clinical applications in pregnancy, transplantation and transfusion.",
  tags: ["titration", "critical titre", "anti-D", "MCA Doppler"],
  keypoints: ["titre", "reciprocal", "1+ agglutination", "doubling dilutions", "titration score", "parallel", "anti-D", "16–32", "anti-K", "HTLA", "fourfold", "MCA peak systolic velocity"],
  answer: `
    <h4>What a titre is</h4>
    <p>A <strong>titre</strong> is the <strong>reciprocal</strong> of the highest dilution at which the antibody still produces a defined endpoint, usually <strong>1+ agglutination</strong>. Serial <strong>doubling dilutions</strong> of plasma are tested against selected cells under fixed conditions, and the result is reported as, for example, 32. Titration is semiquantitative: it measures antibody concentration, not avidity or clinical severity.</p>
    <h4>Method</h4>
    <ul>
      <li>Use a standardised starting dilution, buffer, cell suspension and incubation time; the same technologist should read serial samples where possible.</li>
      <li>Prepare doubling dilutions in saline, add reagent cells, incubate and read by the chosen method (tube IAT, gel or automation).</li>
      <li>Record the endpoint and, optionally, a <strong>titration score</strong> that weights the strength of each dilution.</li>
      <li>Test the current and a stored previous sample in <strong>parallel</strong>, with the same reagent lot and method.</li>
    </ul>
    <h4>Clinical applications</h4>
    <div class="table-wrap"><table>
      <tr><th>Application</th><th>Interpretation</th></tr>
      <tr><td>Prenatal <strong>anti-D</strong></td><td>Critical titre usually <strong>16–32</strong> by tube IAT; above this, move to MCA Doppler</td></tr>
      <tr><td>Prenatal <strong>anti-K</strong></td><td>Critical titre lower, often 8; titres correlate poorly with severity</td></tr>
      <tr><td>Anti-A/anti-B before ABO-incompatible transplant or platelet transfusion</td><td>IgG titre guides plasma reduction or donor choice; thresholds are method-dependent</td></tr>
      <tr><td><strong>HTLA</strong> antibodies</td><td>High titre with weak, variable reactivity suggests a benign HTLA antibody</td></tr>
      <tr><td>Monitoring an alloantibody in pregnancy</td><td>A rise of two dilutions (<strong>fourfold</strong>) is significant</td></tr>
    </table></div>
    <h4>Limitations</h4>
    <p>Titres are notoriously method-dependent, so a result is meaningful only when compared with a parallel sample run the same way. A stable titre does not guarantee fetal safety, and a rising titre does not always mean fetal anaemia — hence the reliance on <strong>MCA peak systolic velocity</strong> for anti-D and anti-K. Titration should never be used alone to decide delivery or transfusion; it is one input into a clinical assessment.</p>
  `,
  tip: "Give the endpoint definition and the fourfold rule, then the anti-D and anti-K critical titres.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih104", domain: "ih-testing",
  q: "Compare autologous, allogeneic and cold adsorption, and describe elution techniques and their use in a positive DAT investigation.",
  tags: ["adsorption", "elution", "ZZAP", "last wash"],
  keypoints: ["adsorption", "autoantibody", "alloantibodies", "autologous", "allogeneic", "differential", "ZZAP", "RESt", "elution", "heat at 56 °C", "acid glycine", "last wash", "HDFN"],
  answer: `
    <h4>Adsorption</h4>
    <p><strong>Adsorption</strong> removes antibody from plasma by incubating it with cells that carry the corresponding antigen; the adsorbed plasma is then tested for antibodies that remain. It is used to strip a warm or cold <strong>autoantibody</strong> so that underlying <strong>alloantibodies</strong> can be detected, to separate antibody mixtures, and to confirm weak antigens by adsorption–elution.</p>
    <h4>Types of adsorption</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>When used</th><th>Key point</th></tr>
      <tr><td><strong>Autologous</strong></td><td>Warm autoantibody, patient not transfused in the past 3 months</td><td>Patient's own cells remove autoantibody; use <strong>ZZAP</strong>- or enzyme-treated cells</td></tr>
      <tr><td><strong>Allogeneic</strong> (<strong>differential</strong>)</td><td>Recently transfused patient, or autologous cells unavailable</td><td>Use 2–3 phenotype-selected cells (e.g. R₁R₁, R₂R₂, rr) covering Rh, Kidd, Duffy and MNS</td></tr>
      <tr><td>Cold adsorption</td><td>Cold autoagglutinin</td><td>Perform at 4 °C; warm adsorption at 37 °C for warm autoantibodies</td></tr>
      <tr><td><strong>RESt</strong></td><td>Anti-I</td><td>Rabbit erythrocyte stroma also removes anti-B and some anti-D</td></tr>
    </table></div>
    <h4>Elution</h4>
    <p><strong>Elution</strong> releases antibody bound to red cells so that it can be identified. Methods include <strong>heat at 56 °C</strong> (traditional for ABO HDFN), <strong>acid glycine</strong> (warm IgG), cold acid, freeze–thaw and organic solvents. The eluate is tested against a panel, and a <strong>last wash</strong> control must be negative to prove that activity came from bound antibody rather than residual plasma.</p>
    <h4>Interpretation and pitfalls</h4>
    <ul>
      <li>Incomplete adsorption leaves autoantibody behind and can mimic a panreactive alloantibody; repeat until the adsorbed plasma is non-reactive with the adsorbing cells.</li>
      <li>Autologous adsorption is invalid if the patient has been transfused within 3 months, because donor cells may adsorb alloantibodies.</li>
      <li>Enzymes and DTT used to prepare cells destroy some antigens; interpret the results accordingly.</li>
      <li>A positive eluate in a neonate supports <strong>HDFN</strong>; in an adult with a positive DAT it supports immune haemolysis or a delayed transfusion reaction.</li>
    </ul>
  `,
  tip: "State when autologous adsorption is forbidden, then give the elution method for warm versus ABO antibodies.",
  sources: ["B1", "B2", "B13"]
},
{
  id: "ih105", domain: "ih-testing",
  q: "Discuss quality control, proficiency testing and quality assurance in the blood bank, including the indicators that detect preanalytical failure.",
  tags: ["quality control", "proficiency testing", "quality indicators", "accreditation"],
  keypoints: ["quality control", "quality assurance", "check cells", "weak positive cells", "proficiency testing", "external quality assessment", "root-cause analysis", "Department of Health", "AO 2008-0008", "sample rejection rate", "wrong blood in tube", "turnaround time", "competency"],
  answer: `
    <h4>Quality control versus quality assurance</h4>
    <p><strong>Quality control (QC)</strong> is the daily testing that proves reagents and equipment are working. <strong>Quality assurance (QA)</strong> is the wider system — procedures, training, audit, proficiency testing and corrective action — that ensures the whole process, including the preanalytical phase, is reliable. A blood bank can pass every QC run and still transfuse the wrong unit if identification fails.</p>
    <h4>Daily and batch QC</h4>
    <div class="table-wrap"><table>
      <tr><th>Item</th><th>Frequency</th><th>Acceptance</th></tr>
      <tr><td>Antisera (anti-A, anti-B, anti-D, etc.)</td><td>Each day of use</td><td>Reacts with <strong>weak positive cells</strong>; negative with negative cells</td></tr>
      <tr><td>Reagent red cells</td><td>Each day of use</td><td>React with a known weak antibody; no spontaneous agglutination</td></tr>
      <tr><td>AHG reagent</td><td>Each run</td><td><strong>Check cells</strong> agglutinate in every negative test</td></tr>
      <tr><td>Centrifuge, incubator, water bath, thermometer</td><td>Daily / periodic</td><td>Calibrated and within tolerance; records kept</td></tr>
      <tr><td>Refrigerators and freezers</td><td>Continuous</td><td>Temperature monitored and alarmed; alarm tested</td></tr>
    </table></div>
    <h4>Proficiency testing and accreditation</h4>
    <p><strong>External quality assessment (EQA)</strong>, or <strong>proficiency testing</strong>, sends unknown samples for ABO/D typing, antibody screening, identification and crossmatching. Results are compared with peer laboratories; an unacceptable result triggers a documented <strong>root-cause analysis</strong>, corrective action and, where necessary, review of patient results. Participation is required by accreditation bodies and by the licensing authority; in the Philippines, blood service facilities are licensed by the <strong>Department of Health</strong> under <strong>AO 2008-0008</strong>, and laboratories may also seek ISO 15189 accreditation.</p>
    <h4>Quality indicators and culture</h4>
    <p>Track <strong>sample rejection rate</strong>, <strong>wrong blood in tube</strong> events, <strong>turnaround time</strong>, wastage, transfusion reaction rate and amended reports. Audit compliance with SOPs, <strong>competency</strong> and documentation. A blame-free reporting culture finds errors before they harm patients; the goal is system improvement, not punishment.</p>
  `,
  tip: "Separate QC from QA in the first sentence, then use the indicators to bring in the preanalytical theme.",
  sources: ["B1", "B5", "B7"]
},
{
  id: "ih106", domain: "ih-testing",
  q: "Discuss sample and record retention, traceability and look-back in the blood bank, and the practical consequences of incomplete documentation.",
  tags: ["retention", "traceability", "look-back", "records"],
  keypoints: ["retention", "traceability", "look-back investigation", "7 days after transfusion", "donor segments", "10 years", "donation number", "ISBT 128", "unit recall", "audit trail", "30-minute rule", "hemovigilance"],
  answer: `
    <h4>Why retention matters</h4>
    <p>Retention and traceability allow the laboratory to reconstruct what happened if a patient reacts, a unit is recalled or a donor is found to carry an infection. Without a retained sample and a complete record, a <strong>look-back investigation</strong> is impossible and the source of a serious error cannot be found.</p>
    <h4>What to retain</h4>
    <div class="table-wrap"><table>
      <tr><th>Item</th><th>Retention</th><th>Purpose</th></tr>
      <tr><td>Recipient sample (EDTA)</td><td>At least <strong>7 days after transfusion</strong></td><td>Repeat ABO/D, antibody screen, DAT and crossmatch if a reaction occurs</td></tr>
      <tr><td><strong>Donor segments</strong> / pilot tubes</td><td>Until the unit expires, or as required</td><td>Confirm the unit's group and investigate a reaction</td></tr>
      <tr><td>Records of grouping, screening, crossmatch and issue</td><td>Per AABB Standards and local regulation (commonly <strong>10 years</strong>)</td><td>Traceability, audit, legal and regulatory review</td></tr>
      <tr><td>Transfusion reaction records</td><td>Per regulation</td><td><strong>Hemovigilance</strong>, trend analysis, prevention</td></tr>
      <tr><td>Temperature and equipment records</td><td>Per regulation</td><td>Prove storage conditions were maintained</td></tr>
    </table></div>
    <h4>Traceability from donor to recipient</h4>
    <p>Every unit must be identifiable by its <strong>donation number</strong> (<strong>ISBT 128</strong> or national system) and linked to the recipient, the component, the date and the person who issued it. This chain supports <strong>unit recall</strong>, look-back for HIV, hepatitis B and C, and investigation of a suspected transfusion-transmitted infection. When a unit is returned unused, its storage conditions and the <strong>30-minute rule</strong> determine whether it can be reissued.</p>
    <h4>Information governance</h4>
    <p>Records must be legible, contemporaneous, attributable and secure, whether paper or electronic. Electronic records need an <strong>audit trail</strong>, controlled access and backup. Results should never be altered without a visible amendment and reason. In practice, the commonest failure is not the retention period but an incomplete record — a missing time, signature or unit number — which makes a traceback unreliable.</p>
    <p>Retention periods differ between jurisdictions; the laboratory should follow the stricter of AABB Standards, national regulation and its accreditation body, and document the policy in its SOP.</p>
  `,
  tip: "Use the 7-day sample, 10-year record pair, then show how each supports a look-back.",
  sources: ["B1", "B5", "B7"]
},
{
  id: "ih107", domain: "ih-testing",
  q: "Discuss the laboratory information system, autoverification and remote blood refrigerator release in pretransfusion testing, including validation and downtime.",
  tags: ["LIS", "autoverification", "remote release", "validation"],
  keypoints: ["laboratory information system", "electronic crossmatching", "autoverification", "determined twice", "validation", "change control", "remote refrigerator", "controlled access", "FEFO", "30-minute rule", "downtime procedure", "audit trail"],
  answer: `
    <h4>The LIS as the control system</h4>
    <p>The <strong>laboratory information system</strong> holds patient demographics, ABO/D and antibody history, results, unit inventory and issue records. In pretransfusion testing it is not a passive filing cabinet: it enforces the rules that make <strong>electronic crossmatching</strong> and remote issue safe. A validated LIS must prevent an ABO-incompatible unit from being released and must alert staff to a discrepancy between entered and stored data.</p>
    <h4>Autoverification and middleware</h4>
    <ul>
      <li>Rules check that the ABO group has been <strong>determined twice</strong>, the antibody screen is negative, there is no history of a clinically significant antibody, the sample is within its validity period and QC is in control.</li>
      <li>Results are released automatically only when all rules pass; any flag is held for manual review.</li>
      <li>Every rule needs documented <strong>validation</strong> with test cases, version control and <strong>change control</strong> before it goes live.</li>
      <li>Middleware must handle analyser flags, diluted results and repeat testing, and must never silently override a failed rule.</li>
    </ul>
    <h4>Remote (satellite) blood refrigerators</h4>
    <p>A <strong>remote refrigerator</strong> allows issue close to the ward, typically for operating theatres and emergency departments. Safe operation requires:</p>
    <div class="table-wrap"><table>
      <tr><th>Requirement</th><th>Control</th></tr>
      <tr><td><strong>Controlled access</strong></td><td>Only trained, authorised staff; login or badge</td></tr>
      <tr><td>Temperature</td><td>Continuous monitoring, alarm, daily check, alarm test</td></tr>
      <tr><td>Inventory</td><td>Electronic crossmatch or immediate-spin issue; real-time stock visibility</td></tr>
      <tr><td>Traceability</td><td>Patient and unit scanned at issue; record stored centrally</td></tr>
      <tr><td>Restocking</td><td><strong>FEFO</strong> rotation; unused units returned within the <strong>30-minute rule</strong></td></tr>
    </table></div>
    <h4>Risks and resilience</h4>
    <p>Interface errors, duplicate patient records, look-alike names, unvalidated rules and cybersecurity threats can all cause harm. The laboratory needs a tested <strong>downtime procedure</strong>, paper backup, a manual electronic-crossmatch alternative and a way to issue emergency blood when the system is unavailable. Validation, user training, audit of overrides, <strong>audit trail</strong> review and periodic review of access rights are as important as the software itself.</p>
  `,
  tip: "Describe the rules the computer enforces, then what happens when the computer is down — both are required.",
  sources: ["B1", "B5"]
},
{
  id: "ih108", domain: "ih-testing",
  q: "Discuss laboratory testing during massive transfusion: sampling, group switching, test frequency, interpretation traps and post-event reconciliation.",
  tags: ["massive transfusion", "testing", "group O", "dilution"],
  keypoints: ["new sample", "ABO and D typing", "antibody screen", "group O red cells", "group-specific", "two determinations", "fibrinogen", "ionised calcium", "viscoelastic testing", "pre-transfusion sample", "mixed field", "reconcile"],
  answer: `
    <h4>Sampling and initial testing</h4>
    <p>Massive transfusion testing must be fast without abandoning identification. Collect a <strong>new sample</strong> with two identifiers, perform <strong>ABO and D typing</strong> and an <strong>antibody screen</strong>, and crossmatch as time allows. In the exsanguinating patient, issue <strong>group O red cells</strong> and group AB or low-titre A plasma immediately, then switch to <strong>group-specific</strong> blood once the ABO group is confirmed on <strong>two determinations</strong>.</p>
    <h4>Testing during the protocol</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Frequency</th><th>Purpose</th></tr>
      <tr><td>ABO/D, antibody screen</td><td>On the initial sample and a new sample if transfusion continues</td><td>Detect a new antibody or a wrong-blood-in-tube error</td></tr>
      <tr><td>Full blood count</td><td>Every 30–60 minutes or after 4–6 units</td><td>Haemoglobin, platelet count</td></tr>
      <tr><td>PT/INR, APTT, <strong>fibrinogen</strong></td><td>Every 30–60 minutes</td><td>Coagulopathy; fibrinogen target</td></tr>
      <tr><td><strong>Ionised calcium</strong>, potassium, lactate, pH</td><td>Frequently</td><td>Citrate toxicity, hyperkalaemia, acidosis</td></tr>
      <tr><td><strong>Viscoelastic testing</strong> (TEG/ROTEM)</td><td>As available</td><td>Targeted plasma, platelet or fibrinogen therapy</td></tr>
    </table></div>
    <h4>Interpretation traps</h4>
    <ul>
      <li>After many units, the patient's plasma is diluted by donor plasma, so an antibody screen may become falsely negative; keep the <strong>pre-transfusion sample</strong> and test it separately.</li>
      <li>ABO typing can show a <strong>mixed field</strong> after group O or out-of-group transfusion; rely on the historical and pretransfusion group, not a post-transfusion sample alone.</li>
      <li>Crossmatches may be incompatible because of an underlying antibody, not because the units are ABO-incompatible; resolve after the emergency.</li>
      <li>Potassium and citrate abnormalities are predictable — monitor and treat rather than await symptoms.</li>
    </ul>
    <h4>After the event</h4>
    <p><strong>Reconcile</strong> every unit issued and returned, complete the compatibility testing, investigate any reaction, and audit time to first unit, ratio achieved, wastage and documentation. The laboratory's job is not only to supply blood but to keep the record accurate enough to explain what was given.</p>
  `,
  tip: "End on dilution: the post-transfusion sample can lie, so the pretransfusion sample is the reference.",
  sources: ["B1", "B2", "B12"]
}
);
