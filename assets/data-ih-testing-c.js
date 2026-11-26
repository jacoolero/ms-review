/* Immunohematology — pretransfusion testing, part C: Philippine standards and advanced methods */
window.QBANK.push(
{
  id: "ih191", domain: "ih-testing", star: true,
  q: "Discuss DOH Administrative Order 2008-0008 as the regulatory standard for Philippine blood service facilities, and explain what a laboratory must demonstrate during licensing.",
  tags: ["AO 2008-0008", "licensing", "blood service facility", "quality standards"],
  keypoints: ["RA 7719", "AO 2008-0008", "blood service facilities", "DOH license", "quality manual", "standard operating procedures", "qualified personnel", "premises and equipment", "compatibility testing", "records and retention", "external quality assessment", "inspection", "corrective action", "hemovigilance"],
  answer: `
    <h4>The legal basis</h4>
    <p>RA 7719, the National Blood Services Act of 1994, requires a safe, adequate and nationally coordinated blood supply. <strong>AO 2008-0008</strong> translates that law into rules for licensing and regulating <strong>blood service facilities</strong> (BSFs) — whether hospital-based or free-standing, and whether they collect, process, test, store or transfuse blood. A BSF may operate only with a <strong>DOH license</strong>, issued after inspection through the regional health office and renewed on schedule.</p>
    <h4>What the order requires</h4>
    <div class="table-wrap"><table>
      <tr><th>Element</th><th>Evidence expected</th></tr>
      <tr><td>Governance</td><td>Named head, medical director or pathologist, defined authority, <strong>quality manual</strong></td></tr>
      <tr><td>Personnel</td><td>Licensed medical technologists, <strong>qualified personnel</strong>, training and competency records</td></tr>
      <tr><td>Premises and equipment</td><td>Adequate space, cold chain, calibrated instruments, maintenance logs</td></tr>
      <tr><td>Procedures</td><td><strong>Standard operating procedures</strong> for donation, testing, components, storage, issue and discard</td></tr>
      <tr><td>Testing</td><td>ABO/D, antibody screen, crossmatch, infectious disease screening and confirmatory algorithms</td></tr>
      <tr><td>Records</td><td>Donor and recipient <strong>records and retention</strong>, traceability, look-back capability</td></tr>
      <tr><td>Quality</td><td>Internal QC, <strong>external quality assessment</strong>, <strong>hemovigilance</strong>, complaint and error management</td></tr>
    </table></div>
    <h4>Demonstrating compliance</h4>
    <p>An inspection is not a paper exercise. Surveyors trace a unit from donor to recipient, check that reagents and equipment are controlled, review <strong>compatibility testing</strong> records, and ask staff to explain deviations. Deficiencies require a written <strong>corrective action</strong> plan with a deadline and evidence of effectiveness. Serious breaches can lead to suspension of the license, so the quality system must work every day, not only before a visit.</p>
    <h4>Beyond the minimum</h4>
    <p>AO 2008-0008 is a floor, not a ceiling. A Philippine BSF may also adopt PBCC guidance, AABB Standards or ISO 15189. The practical gaps are usually staffing, reagent supply, temperature monitoring and incomplete documentation. A laboratory that can show a complete, attributable record for every unit is already close to compliance.</p>
  `,
  tip: "Organize around the licensing survey: governance, people, premises, procedures, testing, records and quality.",
  sources: ["B7", "B14", "B17", "B1"]
},
{
  id: "ih192", domain: "ih-testing",
  q: "Discuss the Philippine Blood Coordinating Council quality guidance and explain how a hospital blood bank can use it to build a quality management system.",
  tags: ["PBCC", "quality management system", "national standards", "hemovigilance"],
  keypoints: ["Philippine Blood Coordinating Council", "coordinates blood services", "quality management system", "quality system essentials", "standard operating procedures", "training and competency", "quality indicators", "hemovigilance", "internal audit", "corrective and preventive action", "blood services network", "technical assistance", "voluntary donation"],
  answer: `
    <h4>Mandate and role</h4>
    <p>The <strong>Philippine Blood Coordinating Council</strong> (PBCC) is the national body that coordinates blood services under RA 7719. Its remit includes promoting <strong>voluntary donation</strong>, planning the <strong>blood services network</strong>, developing standards and training, and giving <strong>technical assistance</strong> to hospital blood banks and regional centres. It does not replace DOH licensing; it supplies the technical and educational infrastructure that makes licensing meaningful.</p>
    <h4>What its quality guidance covers</h4>
    <p>PBCC materials translate the <strong>quality management system</strong> into blood-bank language. The usual framework is a set of <strong>quality system essentials</strong>:</p>
    <ul>
      <li>Organization, leadership and defined responsibilities.</li>
      <li>Document control, with approved <strong>standard operating procedures</strong> at the bench.</li>
      <li>Personnel records, induction, <strong>training and competency</strong> assessment.</li>
      <li>Equipment, reagents and supplier qualification.</li>
      <li>Process control for donation, testing, component preparation, storage and issue.</li>
      <li>Occurrence management, <strong>corrective and preventive action</strong>, and <strong>internal audit</strong>.</li>
      <li>Patient and donor safety, including <strong>hemovigilance</strong>.</li>
    </ul>
    <h4>From guidance to practice</h4>
    <div class="table-wrap"><table>
      <tr><th>Step</th><th>Action</th></tr>
      <tr><td>Gap assessment</td><td>Compare current practice with the PBCC checklist and AO 2008-0008</td></tr>
      <tr><td>Prioritize</td><td>Fix identification, cold chain and record traceability first</td></tr>
      <tr><td>Measure</td><td>Track <strong>quality indicators</strong>: wrong blood in tube, sample rejection, turnaround time, wastage, reaction rate</td></tr>
      <tr><td>Review</td><td>Monthly quality meeting with documented actions and owners</td></tr>
    </table></div>
    <h4>Why it matters locally</h4>
    <p>Many Philippine blood banks are small hospital units with limited staff. PBCC guidance gives them a proportionate system: a quality manual, a controlled SOP set, competency records and a small dashboard. The aim is not accreditation for its own sake but fewer wrong units, fewer wasted units and a traceable answer when something goes wrong. Participate in an external quality assessment or <strong>proficiency testing</strong> scheme and treat an unacceptable result as a system problem, not a personal failing.</p>
  `,
  tip: "Frame PBCC as the technical partner to DOH licensing, then list the quality system essentials and the indicators.",
  sources: ["B14", "B7", "B5", "B6"]
},
{
  id: "ih193", domain: "ih-testing", star: true,
  q: "Discuss sample validity, patient identification and traceability in Philippine pretransfusion testing, including the records needed for a look-back investigation.",
  tags: ["sample validity", "traceability", "look-back", "wrong blood in tube"],
  keypoints: ["72 hours", "3 days", "two identifiers", "bedside labelling", "collector signature", "wrong blood in tube", "historical ABO group", "donation number", "ISBT 128", "7 days after transfusion", "10 years", "audit trail", "look-back investigation", "hemovigilance"],
  answer: `
    <h4>Validity is a clinical rule, not a clerical one</h4>
    <p>A pretransfusion sample is valid for a defined window — commonly <strong>72 hours (3 days)</strong> — because a patient can form a new antibody after transfusion or pregnancy. The window runs from collection, not from the time the test is performed. If the patient has been transfused or pregnant within the previous 3 months, a fresh sample is required before a new crossmatch. A sample may be analysable and still invalid.</p>
    <h4>Identification and labelling</h4>
    <ul>
      <li>Use <strong>two identifiers</strong>, such as full name plus date of birth or hospital number; never rely on bed or ward.</li>
      <li><strong>Bedside labelling</strong>: label tubes immediately after collection, with date, time and the <strong>collector signature</strong>.</li>
      <li>Reject pre-labelled tubes and samples drawn above a running IV line.</li>
      <li>Compare the new ABO group with the <strong>historical ABO group</strong>; a discrepancy suggests a <strong>wrong blood in tube</strong> and must be resolved before issue.</li>
    </ul>
    <p>In Philippine hospitals, common names, nicknames and shared family names make the hospital number and birth date essential. A paper request form must carry the same identifiers as the tube; a mismatch is a rejection, not a problem to fix later.</p>
    <h4>The traceability chain</h4>
    <p>Every unit needs a <strong>donation number</strong>, ideally an <strong>ISBT 128</strong> identifier, linked to the component, the recipient, the date and the person who issued it. The donor segment, the compatibility record and the issue slip must all agree. Electronic records need an <strong>audit trail</strong>; paper records need legible, contemporaneous entries with no unexplained alterations.</p>
    <h4>Retention and look-back</h4>
    <div class="table-wrap"><table>
      <tr><th>Record</th><th>Minimum practical retention</th></tr>
      <tr><td>Recipient EDTA sample</td><td><strong>7 days after transfusion</strong></td></tr>
      <tr><td>Grouping, screen, crossmatch and issue records</td><td>Commonly <strong>10 years</strong>, or the stricter local rule</td></tr>
      <tr><td>Donor segments and component records</td><td>Until expiry and the period required for <strong>look-back investigation</strong></td></tr>
    </table></div>
    <p>Traceability is what makes <strong>hemovigilance</strong> possible. Without it, a suspected transfusion-transmitted infection or a unit recall becomes an unanswered question.</p>
  `,
  tip: "Give the 72-hour rule, the two-identifier rule, then the 7-day sample and 10-year record pair.",
  sources: ["B7", "B14", "B16", "B1"]
},
{
  id: "ih194", domain: "ih-testing", star: true,
  q: "Design an emergency release and massive transfusion policy for a Philippine hospital with limited D-negative red cell stock, covering authorization, product choice, laboratory testing and audit.",
  tags: ["emergency release", "massive transfusion", "D-negative", "hemorrhage protocol"],
  keypoints: ["physician order", "emergency release", "group O D-negative", "woman of childbearing potential", "group O D-positive", "group AB", "low-titre group A plasma", "two ABO determinations", "group-specific", "pretransfusion sample", "massive haemorrhage protocol", "fibrinogen", "ionised calcium", "reconcile", "audit"],
  answer: `
    <h4>A controlled exception</h4>
    <p><strong>Emergency release</strong> is issue before the antibody screen and crossmatch are complete because delay would harm the patient. It needs a <strong>physician order</strong>, a documented reason, a named authorizer and a prospective <strong>audit</strong>. The blood bank should never release on an informal verbal request without recording who asked and why.</p>
    <h4>Product choice when D-negative stock is scarce</h4>
    <p>D-negative donors make up under 1% of the Philippine population, so a hospital cannot treat O-negative red cells as an unlimited emergency stock. A defensible policy reserves them for the patients in whom D alloimmunisation matters most.</p>
    <div class="table-wrap"><table>
      <tr><th>Patient</th><th>First choice</th><th>Alternative</th></tr>
      <tr><td>Girl or <strong>woman of childbearing potential</strong></td><td><strong>Group O D-negative</strong></td><td>O D-positive only after senior clinical risk assessment</td></tr>
      <tr><td>Other adult with major haemorrhage</td><td><strong>Group O D-positive</strong></td><td>Switch to group-specific as soon as possible</td></tr>
      <tr><td>Plasma</td><td><strong>Group AB</strong></td><td><strong>Low-titre group A plasma</strong></td></tr>
      <tr><td>Platelets</td><td>ABO-identical</td><td>Group O with plasma reduction or titre consideration</td></tr>
    </table></div>
    <h4>The massive haemorrhage protocol</h4>
    <p>Embed release in a <strong>massive haemorrhage protocol</strong> with one activation call, predefined packs, a rapid infuser and a warmer. Collect a <strong>pretransfusion sample</strong> before the first unit is hung, confirm identity with two identifiers, and perform ABO/D and antibody screen. Switch to <strong>group-specific</strong> blood after <strong>two ABO determinations</strong>. During resuscitation, monitor full blood count, PT/INR, APTT, <strong>fibrinogen</strong>, <strong>ionised calcium</strong>, potassium, lactate and, where available, viscoelastic testing.</p>
    <h4>After the event</h4>
    <p>Inform the clinician of residual risks — ABO incompatibility, unidentified antibody, D alloimmunisation and transfusion-transmitted infection. <strong>Reconcile</strong> every unit issued, transfused and returned; complete compatibility testing; investigate reactions; and audit time to first unit, wastage and documentation. Rotate O-negative stock before expiry and agree a supplier escalation route, so the policy is not defeated by an empty refrigerator.</p>
  `,
  tip: "Make the D-negative policy explicit, then show how the massive haemorrhage protocol changes testing without abandoning identity.",
  sources: ["B1", "B5", "B7", "B17", "B12"]
},
{
  id: "ih195", domain: "ih-testing", star: true,
  q: "Discuss type and screen, the maximum surgical blood order schedule and electronic crossmatch as a coordinated strategy for efficient pretransfusion testing in Philippine hospitals.",
  tags: ["type and screen", "MSBOS", "electronic crossmatch", "LIS"],
  keypoints: ["type and screen", "ABO and D typing", "antibody screen", "maximum surgical blood order schedule", "crossmatch-to-transfusion ratio", "hold", "electronic crossmatch", "two ABO determinations", "validated LIS", "negative antibody screen", "no antibody history", "valid sample", "autoverification", "downtime procedure", "turnaround time"],
  answer: `
    <h4>What type and screen does</h4>
    <p><strong>Type and screen</strong> combines an <strong>ABO and D typing</strong> with an <strong>antibody screen</strong>, without a crossmatch. It is appropriate when the probability of transfusion is low and the screen is negative. The unit is then available through an electronic or immediate-spin crossmatch if needed. It reduces unnecessary crossmatching, preserves stock and shortens <strong>turnaround time</strong>.</p>
    <h4>MSBOS and blood ordering</h4>
    <p>A <strong>maximum surgical blood order schedule</strong> sets the number of units to crossmatch for each procedure, based on local audit. Departments with a high <strong>crossmatch-to-transfusion ratio</strong> should switch suitable procedures to type and screen with a <strong>hold</strong>. The schedule must be agreed with surgeons and reviewed, not copied from another hospital.</p>
    <h4>Electronic crossmatch</h4>
    <p>The <strong>electronic crossmatch</strong> is a computer comparison of patient and donor ABO groups. It is permitted only when all of the following hold:</p>
    <ul>
      <li>The ABO group has been <strong>two ABO determinations</strong>, with no discrepancy.</li>
      <li>The <strong>negative antibody screen</strong> is documented and there is <strong>no antibody history</strong> of a clinically significant antibody.</li>
      <li>The <strong>valid sample</strong> was collected within 3 days, including when the patient has been transfused or pregnant in the past 3 months.</li>
      <li>The donor unit's group is confirmed and recorded, and the <strong>validated LIS</strong> enforces every rule.</li>
      <li>There is no clerical, historical or temperature discrepancy.</li>
    </ul>
    <h4>LIS governance and limits</h4>
    <p><strong>Autoverification</strong> must hold any result that fails a rule. Every rule needs validation, version control and an audit trail, and the laboratory needs a tested <strong>downtime procedure</strong>. The computer cannot detect a <strong>wrong blood in tube</strong> or a low-prevalence antibody, so type and screen is not a shortcut for every patient.</p>
    <h4>Philippine application</h4>
    <p>With limited blood stocks, MSBOS plus electronic crossmatch can cut wastage and free units for emergencies. It depends on reliable identification, a validated interface and a culture that accepts a documented hold rather than a reflex crossmatch.</p>
  `,
  tip: "Connect the three elements: type and screen defines the patient, MSBOS defines the order, electronic crossmatch defines the release.",
  sources: ["B1", "B5", "B7", "B14"]
},
{
  id: "ih196", domain: "ih-testing",
  q: "Compare gel column agglutination and conventional tube testing in pretransfusion serology, including sensitivity, artefacts, validation and the choice of method.",
  tags: ["gel", "tube method", "column agglutination", "method validation"],
  keypoints: ["column agglutination", "gel card", "tube method", "indirect antiglobulin test", "washing", "sensitivity", "reproducibility", "fibrin", "mixed field", "rouleaux", "cold agglutinin", "parallel testing", "weak positive control", "operator-dependent", "throughput"],
  answer: `
    <h4>Two ways to see the same reaction</h4>
    <p>In the <strong>tube method</strong>, red cells and serum are incubated, centrifuged and inspected; for the <strong>indirect antiglobulin test</strong> the cells are washed and AHG is added. In <strong>gel column agglutination</strong>, the reaction mixture sits above a dextran gel or glass bead column; agglutinates are trapped while free cells pellet. The <strong>gel card</strong> standardises the separation step and removes manual <strong>washing</strong>.</p>
    <h4>Comparison</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Tube</th><th>Gel</th></tr>
      <tr><td>Sensitivity</td><td>Good, operator-dependent</td><td>Generally higher and more consistent</td></tr>
      <tr><td>Reproducibility</td><td>Variable</td><td>High, fixed volumes and centrifugation</td></tr>
      <tr><td>Reading</td><td>Manual, subjective</td><td>Standardised grading, often automated</td></tr>
      <tr><td>Washing</td><td>Required for AHG</td><td>No separate wash step</td></tr>
      <tr><td>Throughput</td><td>Low to moderate</td><td>High, batch or continuous</td></tr>
      <tr><td>Cost</td><td>Low consumable cost, high labour</td><td>Higher consumable and capital cost</td></tr>
    </table></div>
    <h4>Artefacts and limitations</h4>
    <p><strong>Fibrin</strong>, clots, bubbles, a dry or damaged gel and excess cells can produce false-positive gel reactions. Very weak reactions and <strong>mixed field</strong> patterns may need tube confirmation. <strong>Rouleaux</strong> and <strong>cold agglutinin</strong> interference are easier to investigate in tube, where saline replacement and prewarm are straightforward. Conversely, tube testing is more vulnerable to inadequate washing, cell loss and reader bias. Neither method detects an antibody absent from the screening cells.</p>
    <h4>Validation and choice</h4>
    <p>Before adopting gel, perform <strong>parallel testing</strong> against the current method on patient and QC samples, including <strong>weak positive control</strong> and negative samples, and validate the reader and LIS interface. Use a documented <strong>competency</strong> programme. Choose gel for a busy hospital with a stable sample mix; keep tube for problem solving, weak subgroups, eluates and downtime. The best laboratory uses both, with a written rule for when each is required.</p>
  `,
  tip: "Compare on performance and on what happens when the result is strange; the artefact list is the discriminator.",
  sources: ["B1", "B2", "B11", "B5"]
},
{
  id: "ih197", domain: "ih-testing",
  q: "Discuss solid-phase red cell adherence in antibody detection and identification: principle, performance, pitfalls and appropriate clinical use.",
  tags: ["solid phase", "red cell adherence", "antibody detection", "automation"],
  keypoints: ["solid-phase red cell adherence", "immobilises red cell antigens", "indicator red cells", "antibody binds", "sensitivity", "specificity", "automation", "plate washing", "nonspecific binding", "weak antibodies", "mixed field", "false positive", "parallel testing", "clinical significance"],
  answer: `
    <h4>Principle</h4>
    <p><strong>Solid-phase red cell adherence</strong> immobilises red cell antigens or membrane fragments on the surface of a microplate well. Patient plasma is added; antibody binds to the fixed antigen. After washing, <strong>indicator red cells</strong> — often anti-IgG-coated cells — are added. If antibody has bound, the indicator cells adhere across the well; if not, they form a pellet. The pattern is read by an instrument, giving an objective result.</p>
    <h4>Performance</h4>
    <ul>
      <li>High <strong>sensitivity</strong>, particularly for weak IgG antibodies and some antibodies that tube AHG misses.</li>
      <li>Good <strong>specificity</strong> when the plate, reagents and washing are controlled, but nonspecific binding can occur.</li>
      <li>Suited to <strong>automation</strong> and high throughput for screening, identification, crossmatching and antigen typing.</li>
      <li>Stable, plate-based workflow with electronic capture of results and images.</li>
    </ul>
    <h4>Pitfalls</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Consequence</th><th>Control</th></tr>
      <tr><td><strong>Plate washing</strong> incomplete</td><td>Residual plasma or indicator cells</td><td>Validated washer, maintenance, QC</td></tr>
      <tr><td><strong>Nonspecific binding</strong></td><td><strong>False positive</strong> adherence</td><td>Negative control well, repeat, tube confirmation</td></tr>
      <tr><td>Very weak antibody</td><td>Borderline or missed reaction</td><td>Known weak positive control, alternative method</td></tr>
      <tr><td><strong>Mixed field</strong> or subgroup</td><td>Pattern hard to interpret</td><td>Tube or gel confirmation, genotyping</td></tr>
      <tr><td>Lipemic, haemolysed or clotted sample</td><td>Invalid or noisy result</td><td>Reject and recollect</td></tr>
    </table></div>
    <p>Because solid phase is so sensitive, it detects more antibodies of doubtful <strong>clinical significance</strong>. A positive result must be identified, not automatically treated as a reason to withhold blood.</p>
    <h4>Appropriate use</h4>
    <p>Use solid phase for high-volume screening and for investigation of weak antibodies, with a clear algorithm for confirmation by gel or tube. Validate by <strong>parallel testing</strong>, including weak positive and negative samples, and monitor false-positive rates. In a Philippine laboratory with limited reference cells, solid phase can extend detection — provided the staff can still resolve the extra positives it generates.</p>
  `,
  tip: "Explain antigen capture and indicator adherence, then balance the sensitivity gain against nonspecific false positives.",
  sources: ["B1", "B2", "B11", "B5"]
},
{
  id: "ih198", domain: "ih-testing", star: true,
  q: "A recently transfused patient has a panreactive antibody screen and a positive DAT. Discuss how adsorption, elution and DAT interpretation are used to distinguish autoantibody from underlying alloantibody.",
  tags: ["DAT", "adsorption", "elution", "panreactive antibody"],
  keypoints: ["direct antiglobulin test", "IgG", "C3d", "panreactive", "autocontrol", "autologous adsorption", "allogeneic adsorption", "differential adsorption", "ZZAP", "elution", "acid glycine", "heat elution", "last wash", "delayed haemolytic transfusion reaction", "phenotype or genotype", "least incompatible"],
  answer: `
    <h4>Start with the DAT</h4>
    <p>A <strong>direct antiglobulin test</strong> shows that IgG or complement is bound to the patient's cells in vivo. Repeat it with <strong>monospecific anti-IgG and anti-C3d</strong> and grade the strength. In a recently transfused patient, a new <strong>IgG</strong> or mixed-field DAT suggests a <strong>delayed haemolytic transfusion reaction</strong>; a C3d-only pattern suggests a cold antibody. The DAT explains the <strong>panreactive</strong> screen only if the autocontrol is also positive.</p>
    <h4>Adsorption</h4>
    <p><strong>Autologous adsorption</strong> uses the patient's own cells to remove autoantibody, leaving any alloantibody in the plasma. It is invalid when the patient has been transfused within 3 months, because donor cells may adsorb the alloantibody being sought. In that situation use <strong>allogeneic adsorption</strong> — <strong>differential adsorption</strong> with two or three phenotype-selected cells — or <strong>ZZAP</strong>-treated cells to strip IgG and complement. Repeat until the adsorbed plasma no longer reacts with the adsorbing cells; incomplete adsorption mimics a panreactive alloantibody.</p>
    <h4>Elution</h4>
    <p><strong>Elution</strong> releases bound antibody for identification. <strong>Acid glycine</strong> is usual for warm IgG; <strong>heat elution</strong> is traditional for ABO HDFN; freeze-thaw and cold acid are alternatives. Test the eluate against a panel and include a <strong>last wash</strong> control — it must be negative, or the activity may be residual plasma.</p>
    <h4>Putting it together</h4>
    <div class="table-wrap"><table>
      <tr><th>Finding</th><th>Interpretation</th></tr>
      <tr><td>Eluate panreactive, plasma non-reactive after adsorption</td><td>Warm autoantibody; no alloantibody detected</td></tr>
      <tr><td>Eluate specific, adsorbed plasma specific</td><td>Alloantibody, possibly with autoantibody</td></tr>
      <tr><td>Adsorbed plasma still panreactive</td><td>Incomplete adsorption or a high-titre autoantibody</td></tr>
    </table></div>
    <p>Then <strong>phenotype or genotype</strong> the patient to guide antigen-negative selection. If transfusion is urgent, give the <strong>least incompatible</strong>, phenotype-matched units with clinical agreement and monitoring; do not withhold blood for a serological ideal.</p>
  `,
  tip: "DAT first, adsorption to unmask, elution to identify, and phenotype to select — in that order.",
  sources: ["B1", "B2", "B13", "B14"]
},
{
  id: "ih199", domain: "ih-testing",
  q: "Explain how enzyme-treated red cells are used in antibody investigation, including the antigens enhanced or destroyed and the design of a panel strategy for a complex mixture.",
  tags: ["enzymes", "ficin", "papain", "antibody identification"],
  keypoints: ["ficin", "papain", "bromelin", "sialic acid", "zeta potential", "enhance Rh", "enhances Kidd", "destroy M and N", "destroy Duffy", "enzyme-labile", "untreated control", "dosage", "panel strategy", "mixture", "DTT", "document the treatment"],
  answer: `
    <h4>What the enzymes do</h4>
    <p><strong>Ficin</strong>, <strong>papain</strong> and <strong>bromelin</strong> cleave <strong>sialic acid</strong> from red cell glycoproteins. Loss of negative charge reduces the <strong>zeta potential</strong>, so IgG antibodies can bridge cells and agglutinate directly. Enzyme treatment therefore enhances some antibodies and destroys the antigens of others — a pattern that is itself diagnostic.</p>
    <h4>Antigen effects</h4>
    <div class="table-wrap"><table>
      <tr><th>Effect</th><th>Antigens / antibodies</th></tr>
      <tr><td><strong>Enhance Rh</strong></td><td>D, C, c, E, e; also enhances <strong>Kidd</strong>, Lewis, I and P1</td></tr>
      <tr><td><strong>Destroy M and N</strong></td><td>M, N; S is variably affected</td></tr>
      <tr><td><strong>Destroy Duffy</strong></td><td>Fyᵃ, Fyᵇ; Xgᵃ also lost</td></tr>
      <tr><td>Little effect</td><td>Kell, Lutheran, some low-prevalence antigens</td></tr>
    </table></div>
    <p>An antibody that persists after enzyme treatment is likely Rh or Kidd; one that disappears is likely Duffy or MNS. Some antibodies react only with enzyme-treated cells, so an enzyme panel must never be used alone.</p>
    <h4>Designing a panel strategy</h4>
    <ol>
      <li>Test the plasma against an <strong>untreated control</strong> panel and an enzyme-treated panel in parallel.</li>
      <li>Use selected cells that are homozygous for dosage antigens and cover Rh, Kidd, Duffy, Kell and MNS.</li>
      <li>Compare reaction strengths and patterns; a <strong>mixture</strong> may show a persisting antibody plus one that disappears.</li>
      <li>Use <strong>DTT</strong> separately when Kell or CD38 interference is suspected; DTT destroys Kell, so it cannot exclude anti-K.</li>
      <li>Confirm with adsorption, neutralisation or genotyping before reporting a specificity.</li>
    </ol>
    <h4>Pitfalls</h4>
    <p>Over-digestion, old enzyme, wrong pH and variable lot performance can give false results. <strong>Enzyme-labile</strong> antibodies may be missed if only treated cells are used, and weak reactions may be over-read. Document the treatment on the report, because it changes which antigens can be excluded. The enzyme panel is a tool for narrowing, not a substitute for a complete identification.</p>
  `,
  tip: "Give the enhance-versus-destroy table, then insist on a parallel untreated panel and a confirmation step.",
  sources: ["B1", "B2", "B11", "B5"]
},
{
  id: "ih200", domain: "ih-testing",
  q: "Compare antibody neutralisation and antibody titration, and explain how the two techniques are combined to resolve a mixture and assess clinical significance.",
  tags: ["neutralisation", "titration", "antibody mixture", "critical titre"],
  keypoints: ["neutralisation", "soluble antigen", "anti-Le", "anti-P1", "hydatid cyst fluid", "anti-Chido", "anti-Sdᵃ", "saline control", "titration", "doubling dilutions", "1+ endpoint", "titration score", "in parallel", "fourfold", "anti-D", "anti-K"],
  answer: `
    <h4>Two different questions</h4>
    <p><strong>Neutralisation</strong> asks “what is this antibody?” by adding a <strong>soluble antigen</strong> that binds it, then retesting the plasma. <strong>Titration</strong> asks “how much is there?” by making <strong>doubling dilutions</strong> and finding the endpoint. One confirms specificity; the other quantifies concentration. They are complementary, not interchangeable.</p>
    <h4>Neutralisation</h4>
    <div class="table-wrap"><table>
      <tr><th>Antibody</th><th>Neutralising source</th></tr>
      <tr><td><strong>Anti-Le</strong>ᵃ, anti-Leᵇ</td><td>Lewis-positive plasma or saliva</td></tr>
      <tr><td><strong>Anti-P1</strong></td><td><strong>Hydatid cyst fluid</strong> or pigeon egg white</td></tr>
      <tr><td><strong>Anti-Chido</strong>, anti-Rodgers</td><td>Plasma containing soluble C4</td></tr>
      <tr><td><strong>Anti-Sdᵃ</strong></td><td>Human urine</td></tr>
      <tr><td>Anti-I</td><td>Breast milk</td></tr>
    </table></div>
    <p>Include a <strong>saline control</strong> and an untreated plasma control. A <strong>dilution effect</strong> alone can make a positive become negative, so the result is valid only when the specific cells lose reactivity and unrelated antibodies persist. Neutralisation is most useful for clinically insignificant antibodies that would otherwise trigger an unnecessary antigen-negative search.</p>
    <h4>Titration</h4>
    <p>Prepare serial dilutions, test against selected cells under fixed conditions, and record the reciprocal of the highest dilution giving a <strong>1+ endpoint</strong>; a <strong>titration score</strong> weights the strength of each dilution. Always test the current and a stored sample in <strong>parallel</strong>, with the same reagent lot and method. A rise of two dilutions — a <strong>fourfold</strong> change — is significant.</p>
    <h4>Combining them</h4>
    <p>In a mixture, neutralise the nuisance antibody first, then titrate the remaining specificity. For prenatal <strong>anti-D</strong>, a critical titre is commonly 16–32 by tube IAT; for <strong>anti-K</strong> it is lower, often 8, and titres correlate poorly with fetal severity. Titres are method-dependent, so they guide but never replace clinical assessment, MCA Doppler and the decision made with the obstetrician after review of the trend.</p>
  `,
  tip: "Separate the two questions, then show the sequence: neutralise the nuisance antibody, titrate what remains.",
  sources: ["B1", "B2", "B10", "B5"]
}
);
