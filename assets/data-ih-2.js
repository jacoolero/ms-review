/* Immunohematology — part 2: HDFN & perinatal; transfusion reactions & TTIs */
window.QBANK.push(
{
  id: "ih21", domain: "ih-hdfn", star: true,
  q: "Discuss the pathophysiology of haemolytic disease of the fetus and newborn (HDFN) due to anti-D, and compare it with ABO HDFN.",
  tags: ["HDFN", "anti-D", "ABO HDFN"],
  answer: `
    <h4>Pathophysiology (anti-D)</h4>
    <ol>
      <li><strong>Sensitisation</strong>: a D-negative mother is exposed to D-positive fetal red cells — usually at delivery, or by miscarriage, abortion, ectopic pregnancy, amniocentesis, abdominal trauma, antepartum haemorrhage, external cephalic version, or transfusion.</li>
      <li>Primary response is slow and IgM; the first pregnancy is rarely affected.</li>
      <li>In a later D-positive pregnancy, memory B cells produce <strong>IgG1/IgG3 anti-D</strong>, which crosses the placenta via FcRn.</li>
      <li>Fetal red cells coated with IgG are destroyed by macrophages in the spleen (extravascular).</li>
      <li>Consequences: anaemia → extramedullary haematopoiesis (hepatosplenomegaly, erythroblastosis) → hypoalbuminaemia and high-output heart failure → <strong>hydrops fetalis</strong>. After birth, unconjugated bilirubin (no longer cleared by the placenta) rises → <strong>kernicterus</strong>.</li>
    </ol>
    <div class="table-wrap"><table>
      <tr><th></th><th>Rh (anti-D) HDFN</th><th>ABO HDFN</th></tr>
      <tr><td>Mother / baby</td><td>D− / D+</td><td>Usually O / A or B</td></tr>
      <tr><td>First pregnancy</td><td>Rarely affected</td><td>Can be affected (IgG anti-A,B in group O)</td></tr>
      <tr><td>Severity</td><td>Mild to severe, hydrops possible</td><td>Usually mild; jaundice in first 24 h</td></tr>
      <tr><td>Why milder</td><td>—</td><td>Weak A/B antigens on fetal cells; A/B substance on other tissues adsorbs antibody</td></tr>
      <tr><td>DAT</td><td>Strongly positive</td><td>Weak or negative</td></tr>
      <tr><td>Blood film</td><td>Nucleated RBCs</td><td><strong>Spherocytes</strong></td></tr>
      <tr><td>Prevention</td><td>Rh immunoglobulin</td><td>None</td></tr>
    </table></div>
    <p>ABO HDFN is now the commonest form, especially in populations (like the Philippines) where D-negativity is rare. Other antibodies: anti-c, anti-K (suppresses erythropoiesis — less bilirubin, more anaemia), anti-E, anti-Mia.</p>
  `,
  tip: "Explain WHY ABO HDFN is mild — weak fetal antigens and adsorption by tissue A/B substance.",
  sources: ["B2", "B1", "B10"]
},
{
  id: "ih22", domain: "ih-hdfn", star: true,
  q: "Discuss Rh immune globulin (RhIG): mechanism, indications, dose calculation and laboratory tests for fetomaternal haemorrhage.",
  tags: ["RhIG", "Kleihauer-Betke", "rosette test", "calculation"],
  answer: `
    <h4>Mechanism</h4>
    <p>Passive anti-D binds D-positive fetal cells, causing their clearance before the maternal immune system is sensitised (antigen clearance and FcγRIIB-mediated B-cell inhibition — exact mechanism uncertain).</p>
    <h4>Indications (for D-negative, non-immunised women)</h4>
    <ul>
      <li><strong>Antenatal prophylaxis at 28 weeks</strong> (300 µg / 1500 IU), or 28 and 34 weeks with smaller doses.</li>
      <li><strong>Postpartum within 72 hours</strong> if the baby is D-positive (or weak D).</li>
      <li>Sensitising events: miscarriage, abortion, ectopic pregnancy (50 µg if &lt;12 weeks), amniocentesis, CVS, trauma, APH, ECV.</li>
    </ul>
    <p>Not given if the mother already has immune anti-D, or if she is weak D types 1–3.</p>
    <h4>Screening and quantifying fetomaternal haemorrhage (FMH)</h4>
    <ol>
      <li><strong>Rosette test</strong> (screen): maternal cells + anti-D + D-positive indicator cells; rosettes around fetal D+ cells. Detects FMH ≥10 mL whole blood.</li>
      <li><strong>Kleihauer–Betke acid elution</strong>: HbF resists acid elution; fetal cells stain pink, adult cells appear as "ghosts". Or <strong>flow cytometry</strong> (anti-HbF or anti-D) — more precise.</li>
    </ol>
    <div class="calc">Fetal blood (mL) = (fetal cells / total cells) × 5000 mL
Example: 30 fetal cells in 2000 counted = 1.5%
FMH = 0.015 × 5000 = 75 mL fetal whole blood
Vials (300 µg covers 30 mL whole blood) = 75 / 30 = 2.5
→ round up (decimal ≥ .5 → round up and add 1) = 4 vials</div>
    <p>Rounding rule (AABB): if the decimal is &lt;0.5 round down and add one vial; if ≥0.5 round up and add one vial. Maternal conditions with high HbF (β-thalassaemia trait, HPFH) falsely raise the KB result.</p>
  `,
  tip: "Show the full KB calculation with the rounding rule — it is a classic computation item.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih23", domain: "ih-hdfn",
  q: "Describe the antenatal serological and clinical monitoring of an alloimmunised pregnancy.",
  tags: ["prenatal", "critical titre", "MCA Doppler", "cffDNA"],
  answer: `
    <ol>
      <li><strong>First antenatal visit</strong>: ABO/D typing and antibody screen in every pregnant woman; repeat screen at 28 weeks in D-negative women (before RhIG).</li>
      <li><strong>Identify the antibody</strong> and decide whether it is clinically significant for HDFN (IgG and the antigen developed on fetal cells): anti-D, -c, -K, -E, -Fyᵃ, -Jkᵃ, -S, -Mia are significant; anti-Le and anti-I are not.</li>
      <li><strong>Determine fetal risk</strong>:
        <ul>
          <li>Paternal phenotype/zygosity (if paternity certain): homozygous → fetus positive; heterozygous → 50%.</li>
          <li><strong>Cell-free fetal DNA</strong> in maternal plasma for RHD, RHCE (c, E), KEL (K) — avoids invasive procedures.</li>
        </ul>
      </li>
      <li><strong>Titration</strong>: monthly to 24 weeks, then every 2–4 weeks. Critical titre for anti-D is usually <strong>16–32</strong> (method-dependent) by tube IAT; anti-K is dangerous even at low titres (8) because it suppresses erythropoiesis. Compare the current sample in parallel with the previous frozen sample.</li>
      <li><strong>Above critical titre</strong> → <strong>Middle cerebral artery peak systolic velocity (MCA-PSV) Doppler</strong> every 1–2 weeks from ~18 weeks; MCA-PSV &gt;1.5 MoM predicts moderate–severe anaemia. Amniotic fluid ΔOD450 (Liley/Queenan charts) is now largely replaced.</li>
      <li><strong>Fetal blood sampling and intrauterine transfusion (IUT)</strong> if severe anaemia: group O, D-negative (antigen-negative), CMV-safe, irradiated, fresh (&lt;5 days), haematocrit 75–85%, crossmatched with maternal plasma.</li>
      <li>Plan delivery at a centre with neonatal exchange transfusion capability; IVIG may be used in severe early-onset cases.</li>
    </ol>
  `,
  tip: "State that after the critical titre, Doppler — not titres — guides management.",
  sources: ["B10", "B1", "B2"]
},
{
  id: "ih24", domain: "ih-hdfn",
  q: "Case: a group A, D-positive baby born to a group O, D-positive mother develops jaundice at 18 hours. DAT is weakly positive. Discuss the investigation and management.",
  tags: ["ABO HDFN", "neonatal jaundice", "case", "exchange transfusion"],
  answer: `
    <p>Jaundice in the <strong>first 24 hours</strong> is always pathological. The setting (O mother, A baby) with a weak DAT suggests <strong>ABO HDFN</strong>.</p>
    <h4>Laboratory investigation</h4>
    <ul>
      <li><strong>Cord/neonatal sample</strong>: ABO/D (forward only — reverse grouping not done in neonates), DAT, Hb, reticulocytes, blood film (<strong>spherocytes</strong>, polychromasia), serum bilirubin (total and direct), serial bilirubin.</li>
      <li><strong>Elution</strong> from baby's cells: eluate reacts with A₁ cells (and B cells if anti-A,B), but not O cells — confirms ABO antibody even if DAT is weak.</li>
      <li><strong>Maternal sample</strong>: antibody screen to exclude other alloantibodies; IgG anti-A titre is not routinely needed.</li>
      <li>Rule out other causes: <strong>G6PD deficiency</strong> (very common in Filipino newborns, on the expanded NBS panel), hereditary spherocytosis (family history, EMA binding), sepsis, cephalhaematoma.</li>
    </ul>
    <h4>Management</h4>
    <ol>
      <li>Plot bilirubin on hour-specific nomograms (AAP 2022 thresholds by gestational age and risk factors).</li>
      <li><strong>Intensive phototherapy</strong> — converts bilirubin to water-soluble photoisomers (lumirubin).</li>
      <li>IVIG if bilirubin keeps rising despite phototherapy (reduces need for exchange).</li>
      <li><strong>Exchange transfusion</strong> if bilirubin reaches exchange threshold or signs of acute bilirubin encephalopathy: group <strong>O red cells</strong> (compatible with maternal antibody) suspended in <strong>AB plasma</strong>, D type compatible with mother and baby, CMV-safe, irradiated, &lt;5–7 days old, HbS-negative; double-volume exchange (~2 × 80–85 mL/kg) removes ~85% of sensitised cells and ~50% of bilirubin.</li>
      <li>Follow up for late anaemia.</li>
    </ol>
  `,
  tip: "Mention G6PD deficiency in the differential — locally relevant and examiners like it.",
  sources: ["B2", "B1"]
},
{
  id: "ih25", domain: "ih-hdfn",
  q: "Discuss the selection of blood components for neonates and intrauterine transfusion.",
  tags: ["neonatal transfusion", "IUT", "irradiation", "small volume"],
  answer: `
    <h4>Why neonates are special</h4>
    <ul>
      <li>Small blood volume (~80–85 mL/kg) — hyperkalaemia and citrate toxicity with large or fast transfusions.</li>
      <li>Immature immune system — risk of <strong>TA-GVHD</strong> (especially after IUT and in exchange transfusion).</li>
      <li>Immature liver and kidneys — poor handling of potassium and additive solution components.</li>
      <li>Maternal IgG antibodies are present in the infant's circulation for months.</li>
      <li>Infants rarely form alloantibodies in the first 4 months — repeated crossmatching is not required during that period (AABB).</li>
    </ul>
    <h4>Component requirements</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Requirement</th></tr>
      <tr><td>ABO/D</td><td>Group O (or ABO-compatible with both mother and baby), D-compatible</td></tr>
      <tr><td>Compatibility</td><td>Compatible with maternal plasma (antibodies)</td></tr>
      <tr><td>CMV</td><td>CMV-seronegative or leukoreduced ("CMV-safe")</td></tr>
      <tr><td>Irradiation</td><td>For IUT, exchange transfusion, neonates who had IUT, very low birth weight (local policy), directed donations from relatives</td></tr>
      <tr><td>Age of RBC</td><td>Fresh (&lt;5 days) for IUT and exchange; small-volume top-ups can use older units from one dedicated donor (paediatric "split packs")</td></tr>
      <tr><td>HbS</td><td>Sickle-negative for exchange and IUT</td></tr>
      <tr><td>Volume</td><td>Top-up 10–20 mL/kg</td></tr>
    </table></div>
    <p>Restrictive Hb thresholds for preterm infants are supported by the TOP and ETTNO trials. The use of a single-donor pack split into aliquots reduces donor exposure — important where TTI risk exists.</p>
  `,
  tip: "Explain WHY each requirement exists (GVHD, CMV, potassium) rather than only listing them.",
  sources: ["B1", "B2", "B12"]
},
{
  id: "ih26", domain: "ih-hdfn",
  q: "Short note: neonatal alloimmune thrombocytopenia (FNAIT) — pathogenesis, laboratory diagnosis and management.",
  tags: ["FNAIT", "HPA-1a", "platelets"],
  answer: `
    <p>FNAIT is the platelet equivalent of HDFN: maternal IgG antibodies against paternally inherited <strong>human platelet antigens (HPA)</strong> on fetal platelets cross the placenta and destroy them. Unlike RhD HDFN, it <strong>often affects the first pregnancy</strong>.</p>
    <h4>Antigens</h4>
    <p>In Caucasians, anti-<strong>HPA-1a</strong> (on GPIIIa) causes ~80% of cases (mothers HPA-1b/1b, ~2%; HLA-DRB3*01:01 increases risk). In Asians, including Filipinos, HPA-1a negativity is very rare, and <strong>anti-HPA-4 and anti-HPA-5b</strong> are more important, as well as anti-CD36 (GPIV deficiency — more common in Asians and Africans).</p>
    <h4>Clinical</h4>
    <p>Severe thrombocytopenia (&lt;50 × 10⁹/L) in a well newborn, petechiae, and the main risk — <strong>intracranial haemorrhage</strong>, sometimes in utero.</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li>Exclude sepsis, maternal ITP (mother also thrombocytopenic), DIC.</li>
      <li>Maternal serum for HPA antibodies: <strong>MAIPA</strong> (monoclonal antibody immobilisation of platelet antigens — reference method), ELISA, Luminex bead assays.</li>
      <li>HPA genotyping of mother, father (and baby).</li>
      <li>Maternal serum crossmatch against paternal platelets.</li>
    </ul>
    <h4>Management</h4>
    <ul>
      <li>Neonate: urgent platelet transfusion — <strong>HPA-selected</strong> (e.g. HPA-1a/5b negative) if available, otherwise random-donor platelets; IVIG; cranial ultrasound.</li>
      <li>Subsequent pregnancies: maternal IVIG ± prednisone from about 12–20 weeks; avoid fetal blood sampling where possible.</li>
    </ul>
  `,
  tip: "Mention that, unlike RhD disease, the first pregnancy is often affected, and name the Asian-relevant HPA antigens.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih27", domain: "ih-hdfn",
  keypoints: ["positive DAT","newborn","HDFN","elution","passive anti-D","RhIG","ABO","haemolysis markers","immune anti-D","titre","monospecific","history"],
  q: "Discuss the interpretation of a positive DAT in a newborn and in a pregnant woman.",
  tags: ["DAT", "neonate", "pregnancy", "interpretation"],
  answer: `
    <h4>Positive DAT in a newborn</h4>
    <ul>
      <li><strong>HDFN</strong>: maternal IgG coating fetal cells — ABO (weak DAT), Rh, Kell, others. Perform elution and test against panel / A₁ and B cells.</li>
      <li><strong>Passive anti-D from antenatal RhIG</strong>: a weakly positive DAT (and anti-D in eluate) can occur after antenatal prophylaxis. Usually no haemolysis; check maternal history of RhIG.</li>
      <li>Maternal autoimmune disease (warm AIHA in mother).</li>
      <li>Drugs given to the mother; IVIG.</li>
    </ul>
    <p>A positive DAT does not equal disease — interpret with Hb, reticulocytes, bilirubin and film. A negative DAT does not exclude ABO HDFN.</p>
    <h4>Positive DAT or antibody in a pregnant woman</h4>
    <ul>
      <li>Maternal DAT is not part of routine antenatal testing; a positive antibody screen is.</li>
      <li>Anti-D detected after RhIG (passive): low titre (usually &lt;4), declines over weeks; must be distinguished from immune anti-D — check dates of RhIG administration; immune anti-D usually exceeds titre 4 and persists. If unclear, treat as immune and monitor.</li>
      <li>Warm autoantibody in the mother: rare; investigate for underlying alloantibodies with adsorption.</li>
    </ul>
    <h4>Key laboratory steps</h4>
    <ol><li>Monospecific DAT (IgG vs C3).</li><li>Elution and identification.</li><li>Review history (RhIG, transfusion, drugs).</li><li>Correlate with clinical and haemolysis markers.</li></ol>
  `,
  tip: "Passive anti-D from RhIG is the trap — always ask for the RhIG history.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih28", domain: "ih-hdfn",
  keypoints: ["cell-free fetal DNA","maternal plasma","RHD","real-time PCR","11 weeks","targeted antenatal RhIG","alloimmunised","KEL","false negative","fetal fraction","false positive","RHD variants","DEL","cost-effectiveness"],
  q: "Discuss the use of cell-free fetal DNA testing for fetal blood group determination and its impact on RhIG programmes.",
  tags: ["cffDNA", "RHD", "non-invasive"],
  answer: `
    <p>Cell-free fetal DNA (cffDNA) from the placenta (trophoblast apoptosis) appears in maternal plasma from about 5–7 weeks and forms ~10% of total cell-free DNA by the second trimester. It clears within hours of delivery.</p>
    <h4>Method</h4>
    <p>Real-time PCR for RHD exons (commonly exons 5, 7 and 10) on DNA extracted from maternal plasma. In a D-negative mother (who lacks RHD), any RHD signal must come from the fetus. Controls confirm fetal DNA presence (e.g. sex-independent markers, or Y-chromosome sequences for male fetuses). Testing is reliable from ~11 weeks.</p>
    <h4>Applications</h4>
    <ul>
      <li><strong>Targeted antenatal RhIG</strong>: about 40% of D-negative women of European origin carry a D-negative fetus and do not need RhIG. Many European countries now give antenatal prophylaxis only when the fetus is predicted D-positive, saving product and avoiding needless exposure to a human plasma product.</li>
      <li>Management of alloimmunised women: fetal RHD, RHCE (c, E), KEL (K), and HPA-1a typing — if the fetus is antigen-negative, intensive monitoring is unnecessary.</li>
    </ul>
    <h4>Limitations</h4>
    <ul>
      <li>False negatives — low fetal fraction (early gestation, obesity) — so most programmes give RhIG when the result is inconclusive.</li>
      <li>False positives — maternal RHD variants (e.g. RHDψ in African women, DEL alleles common in Asians, weak/partial D), vanished twin.</li>
      <li>Cost-effectiveness depends on D-negative prevalence: in the Philippines, where D-negative women are &lt;1% of the population, large programmes are less relevant, but testing is valuable for individual alloimmunised pregnancies.</li>
    </ul>
  `,
  tip: "Note that the D-negative mother lacks RHD — that is why any RHD signal is fetal.",
  sources: ["B1", "B10", "B11"]
},
{
  id: "ih29", domain: "ih-reactions", star: true,
  q: "Classify adverse transfusion reactions and describe the laboratory investigation of a suspected acute transfusion reaction.",
  tags: ["transfusion reaction", "haemovigilance", "workup"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>Acute (&lt;24 h)</th><th>Delayed (&gt;24 h)</th></tr>
      <tr><td><strong>Immune</strong></td><td>Acute haemolytic (AHTR), febrile non-haemolytic (FNHTR), allergic/anaphylactic, TRALI</td><td>Delayed haemolytic (DHTR) and delayed serologic, TA-GVHD, post-transfusion purpura, alloimmunisation</td></tr>
      <tr><td><strong>Non-immune</strong></td><td>TACO, bacterial contamination (septic), hypotensive reaction, non-immune haemolysis (heat, freezing, hypotonic fluids), citrate toxicity/hypocalcaemia, hyperkalaemia, hypothermia, air embolism</td><td>Iron overload, transfusion-transmitted infections</td></tr>
    </table></div>
    <h4>Immediate clinical actions</h4>
    <ol><li><strong>Stop</strong> the transfusion; keep IV line open with saline.</li><li>Check vital signs; recheck patient identity and unit label at the bedside (clerical check).</li><li>Notify the physician and blood bank; return the unit and administration set.</li></ol>
    <h4>Laboratory investigation</h4>
    <ol>
      <li><strong>Clerical check</strong> of all records.</li>
      <li><strong>Post-transfusion sample</strong> (EDTA and clotted): visual inspection for <strong>haemolysis</strong> (compare with pre-sample), <strong>DAT</strong> (compare with pre-sample).</li>
      <li>Repeat ABO/D on pre- and post-samples and on the unit; repeat antibody screen and crossmatch (AHG) with pre- and post-samples.</li>
      <li>If haemolysis is suggested: bilirubin, LDH, haptoglobin, plasma free Hb, urinalysis for haemoglobinuria, creatinine, coagulation (DIC).</li>
      <li>If fever with rigors or hypotension: <strong>Gram stain and culture of the unit</strong> and patient blood cultures.</li>
      <li>If respiratory distress: chest X-ray, BNP (TACO), donor HLA/HNA antibodies (TRALI).</li>
      <li>If anaphylaxis: IgA level and anti-IgA (rare), tryptase.</li>
    </ol>
    <p>All reactions are reported to the hospital transfusion committee and the national haemovigilance system.</p>
  `,
  tip: "Start with the three immediate checks: clerical, visual haemolysis, DAT — that is the standard workup.",
  sources: ["B1", "B9", "B2"]
},
{
  id: "ih30", domain: "ih-reactions", star: true,
  q: "Discuss acute haemolytic transfusion reaction: causes, pathophysiology, clinical features and management.",
  tags: ["AHTR", "ABO incompatibility", "intravascular haemolysis"],
  answer: `
    <h4>Causes</h4>
    <p>Usually <strong>ABO-incompatible transfusion</strong> due to clerical error — wrong blood in tube, wrong patient at the bedside, labelling error. Rarely other IgM/complement-fixing antibodies (anti-Jkᵃ, anti-Vel, anti-PP1Pᵏ), or non-immune causes.</p>
    <h4>Pathophysiology</h4>
    <ol>
      <li>Recipient IgM anti-A/anti-B binds donor cells and activates the <strong>complete complement cascade</strong> → membrane attack complex → <strong>intravascular haemolysis</strong> (free Hb, haemoglobinuria).</li>
      <li>Anaphylatoxins C3a and C5a → mast cell histamine and serotonin → hypotension, bronchospasm.</li>
      <li>Cytokines (TNF-α, IL-1, IL-6, IL-8) → fever, shock.</li>
      <li>Activation of coagulation (red cell stroma, tissue factor) → <strong>DIC</strong>.</li>
      <li>Renal hypoperfusion, free Hb and immune complexes → <strong>acute kidney injury</strong>.</li>
    </ol>
    <h4>Clinical features</h4>
    <p>Begin after as little as 10–50 mL: fever, chills, flank or back pain, pain at infusion site, feeling of doom, hypotension, dark urine, oozing from wounds (DIC). In an anaesthetised patient: hypotension, haemoglobinuria and bleeding may be the only signs.</p>
    <h4>Laboratory findings</h4>
    <p>Positive DAT (may be mixed-field or negative if all incompatible cells are destroyed), pink plasma, haemoglobinuria, low haptoglobin, high LDH and bilirubin, DIC markers, rising creatinine, ABO discrepancy between pre- and post-transfusion samples.</p>
    <h4>Management</h4>
    <p>Stop transfusion; aggressive IV fluids to keep urine &gt;1 mL/kg/h; diuretics; vasopressors; treat DIC with components; dialysis if needed. Investigate the error — <strong>check the other patient</strong>, who may have received this patient's blood.</p>
  `,
  tip: "Always add 'check for a second patient' — a mix-up usually involves two people.",
  sources: ["B1", "B2", "B9"]
},
{
  id: "ih31", domain: "ih-reactions",
  q: "Compare TRALI and TACO under the following headings: mechanism, risk factors, clinical and laboratory findings, and prevention.",
  tags: ["TRALI", "TACO", "pulmonary complications"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>TRALI</th><th>TACO</th></tr>
      <tr><td>Mechanism</td><td>"Two-hit": primed neutrophils in lung (sepsis, surgery) + donor anti-HLA class I/II or anti-HNA (esp. HNA-3a) or bioactive lipids → neutrophil activation → capillary leak (non-cardiogenic oedema)</td><td>Hydrostatic (cardiogenic) pulmonary oedema from volume overload</td></tr>
      <tr><td>Implicated donors / components</td><td>Plasma-rich components from <strong>multiparous female</strong> donors; FFP, apheresis platelets</td><td>Any component; rate and volume</td></tr>
      <tr><td>Recipient risk</td><td>Critical illness, sepsis, liver surgery, mechanical ventilation, massive transfusion</td><td>Elderly, infants, heart failure, renal failure, positive fluid balance</td></tr>
      <tr><td>Onset</td><td>Within 6 h</td><td>Within 12 h (usually during or soon after)</td></tr>
      <tr><td>Blood pressure</td><td>Often <strong>hypotension</strong></td><td><strong>Hypertension</strong></td></tr>
      <tr><td>Fever</td><td>Common</td><td>Uncommon</td></tr>
      <tr><td>JVP / cardiac signs</td><td>Normal</td><td>Raised, S3</td></tr>
      <tr><td>BNP/NT-proBNP</td><td>Normal or low (post/pre ratio &lt;1.5)</td><td>Raised (post/pre ratio &gt;1.5)</td></tr>
      <tr><td>Response to diuretics</td><td>Poor</td><td>Good</td></tr>
      <tr><td>Other labs</td><td>Transient leukopenia; donor antibody with cognate antigen in recipient (or positive leukocyte crossmatch)</td><td>Echocardiogram — LV dysfunction</td></tr>
      <tr><td>Treatment</td><td>Supportive oxygen/ventilation; usually resolves in 48–96 h</td><td>Stop transfusion, upright, diuretics, oxygen</td></tr>
      <tr><td>Prevention</td><td>Male-only plasma; HLA antibody screening of female apheresis donors; pathogen-reduced or pooled solvent-detergent plasma</td><td>Pre-transfusion risk assessment, slow rates (1 mL/kg/h), single-unit transfusion, diuretics</td></tr>
    </table></div>
    <p>TACO is now the leading cause of transfusion-related death reported in many haemovigilance systems; TRALI previously held this position until mitigation measures were introduced.</p>
  `,
  tip: "The BP (low vs high) and BNP findings are the quickest discriminators — put them in your table.",
  sources: ["B1", "B9", "B11"]
},
{
  id: "ih32", domain: "ih-reactions",
  q: "Discuss delayed haemolytic and delayed serologic transfusion reactions, and the role of an antibody registry.",
  tags: ["DHTR", "anamnestic", "Kidd", "registry"],
  answer: `
    <h4>Mechanism</h4>
    <p>A patient previously sensitised (by pregnancy or transfusion) has an antibody that has fallen <strong>below detectable levels</strong>, so the pretransfusion screen is negative. Transfused antigen-positive cells trigger an <strong>anamnestic (secondary) IgG response</strong> within 3–14 days, causing extravascular haemolysis of the transfused cells. Classic antibodies: <strong>Kidd (anti-Jkᵃ, anti-Jkᵇ)</strong>, Rh (anti-c, anti-E), anti-Fyᵃ, anti-K.</p>
    <h4>Clinical and laboratory features</h4>
    <ul>
      <li>Unexplained fall in Hb (or failure to rise) 3–14 days after transfusion, fever, jaundice; occasionally haemoglobinuria (Kidd antibodies fix complement).</li>
      <li><strong>New positive DAT</strong>, often <strong>mixed-field</strong> (only donor cells coated).</li>
      <li>Eluate contains the alloantibody; plasma antibody screen becomes positive.</li>
      <li>Raised bilirubin, LDH; spherocytes.</li>
    </ul>
    <p>A <strong>delayed serologic transfusion reaction (DSTR)</strong> has the same serological findings (new antibody, positive DAT) without clinical or laboratory evidence of haemolysis.</p>
    <h4>Sickle cell hyperhaemolysis</h4>
    <p>In sickle cell disease, DHTR can destroy both donor and patient cells (Hb falls below pre-transfusion level), sometimes with no antibody detected; further transfusion worsens it — treat with IVIG and steroids, avoid transfusion if possible.</p>
    <h4>Prevention — antibody registries</h4>
    <p>Because antibodies become undetectable, the <strong>historical record</strong> is the only safeguard. Shared regional or national antibody registries, patient antibody cards, and LIS flags ensure antigen-negative blood is given at every hospital visit. In the Philippines, where patients often move between hospitals, the absence of a shared registry is a recognised gap — patient-held cards are particularly important.</p>
  `,
  tip: "Mixed-field DAT plus an anamnestic Kidd antibody is the classic picture — say both.",
  sources: ["B1", "B2", "B9"]
},
{
  id: "ih33", domain: "ih-reactions",
  q: "Discuss transfusion-associated graft-versus-host disease (TA-GVHD) and its prevention by irradiation.",
  tags: ["TA-GVHD", "irradiation", "pathogen reduction"],
  answer: `
    <h4>Pathogenesis</h4>
    <p>Viable donor <strong>T lymphocytes</strong> in cellular components engraft, proliferate and attack recipient tissues (skin, liver, gut, <strong>bone marrow</strong>). It occurs when the recipient cannot reject donor lymphocytes:</p>
    <ul>
      <li>Immunodeficiency: congenital (SCID), Hodgkin lymphoma, purine analogue therapy (fludarabine, bendamustine, cladribine), alemtuzumab, HSCT recipients, IUT and neonatal exchange.</li>
      <li><strong>HLA one-way match</strong>: donor homozygous for an HLA haplotype shared by the recipient — the recipient sees donor cells as "self", but donor cells see recipient as foreign. Risk is highest with <strong>directed donations from blood relatives</strong> and in genetically homogeneous populations (Japan; also relevant in the Philippines, where family replacement donation is common).</li>
    </ul>
    <h4>Clinical</h4>
    <p>8–10 days after transfusion: fever, erythematous rash, diarrhoea, liver dysfunction, then <strong>pancytopenia</strong> from marrow aplasia. Mortality &gt;90%. Diagnosis: skin biopsy; demonstration of donor-derived lymphocytes (HLA typing, STR chimerism).</p>
    <h4>Prevention</h4>
    <ul>
      <li><strong>Gamma or X-ray irradiation</strong>: minimum 25 Gy to the central point of the unit (no part &lt;15 Gy, max 50 Gy). Damages lymphocyte DNA so they cannot proliferate. Verified with radiation-sensitive indicator labels.</li>
      <li>Irradiated red cells have increased <strong>potassium leak</strong>; shelf-life is shortened (e.g. 28 days from irradiation or original expiry, whichever is sooner; 24 h for IUT/neonatal exchange per some standards).</li>
      <li><strong>Pathogen reduction</strong> (amotosalen/UVA, riboflavin/UV) also inactivates lymphocytes and is accepted as an alternative for platelets and plasma.</li>
      <li>Leukoreduction alone does <strong>not</strong> prevent TA-GVHD.</li>
    </ul>
  `,
  tip: "Explain the one-way HLA match and say clearly that leukoreduction is not enough.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih34", domain: "ih-reactions",
  q: "Discuss febrile non-haemolytic and allergic transfusion reactions, including the role of leukoreduction.",
  tags: ["FNHTR", "allergic", "anaphylaxis", "leukoreduction"],
  answer: `
    <h4>Febrile non-haemolytic transfusion reaction (FNHTR)</h4>
    <p>Rise of ≥1 °C to ≥38 °C (or chills/rigors) during or within 4 h of transfusion, without haemolysis or other cause. Two mechanisms:</p>
    <ol>
      <li>Recipient antibodies (HLA, granulocyte) react with donor leukocytes → cytokine release.</li>
      <li><strong>Cytokines (IL-1, IL-6, IL-8, TNF)</strong> released by leukocytes accumulating during storage, especially in platelet concentrates stored at room temperature.</li>
    </ol>
    <p>FNHTR is a <strong>diagnosis of exclusion</strong> — haemolysis and bacterial contamination must be ruled out first, because fever is an early sign of both.</p>
    <h4>Prevention</h4>
    <p><strong>Pre-storage leukoreduction</strong> (filtration to &lt;5 × 10⁶ leukocytes per unit) prevents cytokine accumulation and markedly reduces FNHTR. It also reduces HLA alloimmunisation (platelet refractoriness) and CMV transmission. Post-storage (bedside) filtration removes cells but not the cytokines already formed.</p>
    <h4>Allergic reactions</h4>
    <ul>
      <li><strong>Mild (urticarial)</strong>: 1–3% of transfusions; recipient IgE against donor plasma proteins. Pause transfusion, give antihistamine; may resume if symptoms resolve (the only reaction where restarting is allowed).</li>
      <li><strong>Anaphylactic</strong>: hypotension, bronchospasm, angioedema within minutes. Causes: anti-IgA in IgA-deficient recipients (rare), anti-haptoglobin (in haptoglobin-deficient East Asians), anti-C4, food or drug allergens in donor plasma. Treat with adrenaline.</li>
      <li>Prevention for recurrent reactions: washed red cells and platelets, plasma-reduced or platelet-additive-solution platelets, IgA-deficient donor products when anti-IgA is proven.</li>
    </ul>
  `,
  tip: "Stress that FNHTR is a diagnosis of exclusion and that urticaria is the only reaction where transfusion may resume.",
  sources: ["B1", "B2", "B9"]
},
{
  id: "ih35", domain: "ih-reactions",
  q: "Discuss bacterial contamination of blood components, especially platelets, and strategies to reduce it.",
  tags: ["septic reaction", "platelets", "bacterial detection", "pathogen reduction"],
  answer: `
    <p>Bacterial contamination is the most common infectious risk of transfusion today. <strong>Platelets</strong> are most affected because they are stored at <strong>20–24 °C</strong> with agitation — ideal for bacterial growth.</p>
    <h4>Sources</h4>
    <ul>
      <li>Donor skin flora (coagulase-negative staphylococci, <em>Cutibacterium</em>) entering through the venepuncture "skin plug".</li>
      <li>Asymptomatic donor bacteraemia (e.g. <em>Yersinia enterocolitica</em> in red cells — grows at 4 °C and uses iron; <em>Salmonella</em>; <em>S. gallolyticus</em> with occult colon cancer).</li>
      <li>Processing breaches, contaminated water baths (thawing plasma).</li>
    </ul>
    <h4>Septic reaction</h4>
    <p>High fever, rigors, hypotension, shock and DIC during or shortly after transfusion; Gram-negative organisms (endotoxin) are most severe. Investigation: stop transfusion, <strong>Gram stain and culture the unit</strong> and patient blood; same-donor co-components must be quarantined and recalled.</p>
    <h4>Prevention</h4>
    <ol>
      <li>Donor screening (fever, recent dental work, diarrhoea).</li>
      <li><strong>Skin disinfection</strong>: chlorhexidine–alcohol, dried.</li>
      <li><strong>Diversion pouch</strong>: the first 20–40 mL of blood (containing the skin plug) is diverted for testing samples.</li>
      <li><strong>Bacterial detection</strong>: automated culture (BacT/ALERT) of platelets, large-volume delayed sampling; secondary rapid tests.</li>
      <li><strong>Pathogen reduction</strong> technologies (amotosalen/UVA, riboflavin/UV) for platelets and plasma.</li>
      <li>Visual inspection before issue (clots, colour change, swirling loss in platelets); strict storage limits (5–7 days for platelets).</li>
    </ol>
    <p>In many Philippine blood centres, platelets are mainly whole-blood-derived (random donor) with a 3–5-day shelf life and without routine bacterial culture, making donor arm preparation and visual inspection essential.</p>
  `,
  tip: "Mention the diversion pouch and the reason platelets carry the highest risk (room temperature storage).",
  sources: ["B1", "B2", "B8"]
},
{
  id: "ih36", domain: "ih-reactions",
  q: "Discuss donor screening for transfusion-transmissible infections (TTIs) in the Philippines and the role of nucleic acid testing.",
  tags: ["TTI", "NAT", "window period", "Philippines"],
  answer: `
    <h4>Mandatory screening</h4>
    <p>Under RA 7719 and DOH regulations (consistent with WHO recommendations), every donated unit must be tested for at least five infections:</p>
    <div class="table-wrap"><table>
      <tr><th>Infection</th><th>Serological marker</th><th>Approx. window period (serology → NAT)</th></tr>
      <tr><td>HIV 1/2</td><td>Anti-HIV-1/2 ± p24 antigen (combo)</td><td>~22 days (Ab) → ~15 (combo) → ~5–9 days (ID-NAT)</td></tr>
      <tr><td>Hepatitis B</td><td>HBsAg (± anti-HBc in some countries)</td><td>~38 days → ~20–25 days</td></tr>
      <tr><td>Hepatitis C</td><td>Anti-HCV (± HCV core Ag)</td><td>~58–70 days → ~3–5 days</td></tr>
      <tr><td>Syphilis</td><td>Treponemal (TPHA/ELISA) or RPR</td><td>—</td></tr>
      <tr><td>Malaria</td><td>Blood smear or antigen/antibody test (in endemic regions)</td><td>—</td></tr>
    </table></div>
    <h4>Nucleic acid testing (NAT)</h4>
    <p>NAT (PCR or TMA, in mini-pools or individual donations) detects viral genome before antibodies form, shortening the window period and detecting <strong>occult HBV</strong> infection. The Philippine Blood Center and some regional centres have introduced NAT; nationwide coverage is incomplete. Individual-donation NAT is more sensitive than pooled testing.</p>
    <h4>Residual risk and other measures</h4>
    <ul>
      <li>Residual risk = incidence × window period; highest where prevalence is rising (HIV in the Philippines has had one of the fastest-growing epidemics in the Asia-Pacific).</li>
      <li><strong>Voluntary non-remunerated donors</strong> have lower TTI rates than replacement/paid donors — RA 7719 phased out commercial blood banks.</li>
      <li>Donor questionnaire and deferral, confidential unit exclusion, look-back and recall procedures, donor notification and counselling.</li>
      <li>Emerging threats: dengue (common locally, transfusion transmission documented), HEV, Zika.</li>
    </ul>
  `,
  tip: "Name the five mandatory tests and explain how NAT shortens the window period.",
  sources: ["B6", "B8", "B7", "B1"]
},
{
  id: "ih37", domain: "ih-reactions",
  q: "Short notes: post-transfusion purpura and transfusion-associated circulatory overload prevention; iron overload in chronically transfused patients.",
  tags: ["PTP", "iron overload", "thalassaemia"],
  answer: `
    <h4>Post-transfusion purpura (PTP)</h4>
    <p>Rare, mainly in multiparous women. 5–12 days after transfusion, severe thrombocytopenia (&lt;10 × 10⁹/L) with bleeding. A recipient who lacks an HPA (usually HPA-1a) has an anamnestic antibody response that, for unclear reasons, also destroys her own antigen-negative platelets. Diagnosis: HPA antibody detection and recipient HPA genotyping. Treatment: <strong>IVIG</strong> (first line); platelet transfusions are ineffective unless HPA-matched; future transfusions with HPA-compatible or washed products.</p>
    <h4>Iron overload (transfusional haemosiderosis)</h4>
    <p>Each red cell unit contains ~200–250 mg iron; the body cannot excrete excess iron. After ~10–20 units, iron deposits in liver, heart (cardiomyopathy — main cause of death in thalassaemia), and endocrine organs (diabetes, hypogonadism, hypothyroidism).</p>
    <ul>
      <li>Monitoring: <strong>serum ferritin</strong> every 3 months (affected by inflammation), transferrin saturation, <strong>MRI T2*</strong> for cardiac and liver iron concentration (LIC).</li>
      <li>Chelation: deferoxamine (SC infusion), deferiprone (oral; agranulocytosis risk — weekly ANC), deferasirox (oral; monitor renal and liver function).</li>
    </ul>
    <p>Thalassaemia is a major chronic transfusion burden in the Philippines (β-thalassaemia and HbE/β-thal); PhilHealth and the DOH support thalassaemia care programmes. Extended phenotype-matched (Rh, K) red cells reduce alloimmunisation in these patients.</p>
  `,
  tip: "For iron overload, give the iron content of a unit and name the MRI T2* method.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih38", domain: "ih-reactions",
  q: "Explain the components of a haemovigilance system and how it improves transfusion safety.",
  tags: ["haemovigilance", "SHOT", "imputability"],
  answer: `
    <p>Haemovigilance is "a set of surveillance procedures covering the whole transfusion chain, from collection of blood to follow-up of recipients, intended to collect and assess information on unexpected or undesirable effects of transfusion, and to prevent their occurrence or recurrence" (ISBT/IHN).</p>
    <h4>Components</h4>
    <ol>
      <li><strong>Detection and reporting</strong>: clinical staff recognise and report reactions, errors and near-misses to the hospital blood bank / transfusion committee.</li>
      <li><strong>Standard definitions</strong>: case definitions, severity grades (non-severe, severe, life-threatening, death) and <strong>imputability</strong> (definite, probable, possible, doubtful, ruled out) — e.g. the CDC NHSN Hemovigilance Module and ISBT definitions.</li>
      <li><strong>Investigation</strong> and root-cause analysis.</li>
      <li><strong>National data collection and analysis</strong> (e.g. UK SHOT, French ANSM, US NHSN).</li>
      <li><strong>Feedback and corrective actions</strong>: recommendations, training, changed procedures.</li>
      <li><strong>Donor haemovigilance</strong>: vasovagal reactions, haematoma, nerve injury.</li>
      <li><strong>Traceability</strong> from donor to recipient (vein-to-vein), look-back and recall.</li>
    </ol>
    <h4>Examples of improvements driven by haemovigilance</h4>
    <ul>
      <li>Male-only plasma — reduced TRALI deaths (SHOT data).</li>
      <li>Recognition of TACO as a major cause of death → TACO risk checklists.</li>
      <li>Bedside identification and barcoding — reduced ABO-incompatible transfusions.</li>
      <li>Near-miss reporting identified WBIT as a frequent error → two-sample rule.</li>
    </ul>
    <p>In the Philippines, the DOH and the Philippine National Blood Services promote hospital blood transfusion committees (required in hospitals with blood service facilities) to monitor reactions, but a fully functioning national haemovigilance system is still developing.</p>
  `,
  tip: "Mention imputability and near-miss reporting — they show you understand the system, not only reactions.",
  sources: ["B9", "B1", "B7"]
},
{
  id: "ih39", domain: "ih-reactions",
  q: "Discuss non-immune causes of haemolysis related to transfusion.",
  tags: ["non-immune haemolysis", "storage lesion", "administration errors"],
  answer: `
    <p>Not every haemolytic reaction is antibody mediated. Non-immune haemolysis occurs when red cells are damaged physically or chemically before or during transfusion. The DAT is <strong>negative</strong>, distinguishing it from immune haemolysis.</p>
    <h4>Causes</h4>
    <ul>
      <li><strong>Thermal</strong>: overheating in uncontrolled blood warmers, microwave or hot water; accidental freezing (units placed next to the freezer coil or with ice).</li>
      <li><strong>Osmotic</strong>: mixing red cells with <strong>hypotonic solutions</strong> (5% dextrose, water) — only 0.9% saline (or approved solutions) may be added. Lactated Ringer's contains calcium and can clot citrated blood. Inadequate deglycerolisation of frozen red cells.</li>
      <li><strong>Mechanical</strong>: rapid infusion through small-bore needles, pressure infusers, roller pumps, cardiopulmonary bypass, faulty cell salvage.</li>
      <li><strong>Bacterial contamination</strong> producing haemolysins (<em>Clostridium perfringens</em>).</li>
      <li><strong>Intrinsic donor red cell defects</strong>: G6PD-deficient donor cells (common in the Philippines) may haemolyse in a recipient exposed to oxidant drugs; hereditary spherocytosis.</li>
      <li><strong>Storage lesion</strong>: older units have more free Hb, potassium and microvesicles.</li>
    </ul>
    <h4>Laboratory approach</h4>
    <p>Free Hb in the unit and patient plasma, haemoglobinuria, DAT negative, ABO compatibility confirmed, culture of the unit, review of administration (warmer temperature log, IV fluids, infusion device).</p>
    <h4>Prevention</h4>
    <p>Validated blood warmers with alarms (&lt;42 °C), only normal saline with blood, staff training, correct storage temperature monitoring (red cells 1–6 °C).</p>
  `,
  tip: "A negative DAT is the key laboratory distinction — state it early.",
  sources: ["B1", "B2"]
}
);
