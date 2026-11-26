/* Immunohematology — part 4: additional essays (testing, HDFN, reactions, donor, clinical) */
window.QBANK.push(
{
  id: "ih61", domain: "ih-testing",
  q: "Discuss antibodies to high-prevalence and low-prevalence antigens: how they present in the laboratory, how they are identified, and how blood is provided.",
  tags: ["high-prevalence antigen", "low-prevalence antigen", "rare donor", "antibody identification"],
  keypoints: ["all panel cells reactive with negative autocontrol", "antibody to high-prevalence antigen", "test with rare antigen-negative cells", "siblings as donors", "rare donor registry and frozen units", "test family members", "antibody to low-prevalence antigen", "only one panel cell reactive", "incompatible crossmatch with negative screen", "antibodies in donor plasma causing positive crossmatch", "HTLA high titre low avidity", "Chido Rodgers Knops Csa York", "neutralisation with plasma", "autologous donation for rare types", "inventory planning and thawing deglycerolised cells", "notify patient with antibody card"],
  answer: `
    <h4>Antibody to a high-prevalence antigen</h4>
    <p><strong>Presentation:</strong> <strong>all panel cells reactive with a negative autocontrol</strong>, and the patient's own cells are antigen-negative. Examples: anti-k, anti-Kpᵇ, anti-Jsᵇ, anti-U, anti-Vel, anti-Jk3, anti-H (Bombay), anti-Lu(b), anti-Ge, anti-PP1Pᵏ.</p>
    <p><strong>Identification:</strong></p>
    <ol>
      <li>Exclude an autoantibody (autocontrol, DAT) and a mixture of common antibodies.</li>
      <li>Phenotype the patient to find the missing antigen; ethnicity gives clues (Jsᵇ and U in people of African descent; Jk3 in Polynesians and some Asians; Di(b) in Asians and Native Americans; <strong>Mia-related and GP.Mur phenotypes in Southeast Asia</strong>).</li>
      <li><strong>Test with rare antigen-negative cells</strong> from a reference laboratory panel; use enzymes and chemicals (DTT, trypsin) to narrow the specificity; <strong>neutralisation with plasma</strong> identifies Chido/Rodgers.</li>
      <li>Exclude <strong>HTLA (high-titre, low-avidity)</strong> antibodies — <strong>Chido, Rodgers, Knops, Csᵃ, Yorkᵃ, JMH</strong> — which react weakly at high dilution and are usually clinically insignificant.</li>
      <li><strong>Test family members</strong>, especially <strong>siblings</strong>, who have a 25% chance of the same rare phenotype.</li>
    </ol>
    <p><strong>Providing blood:</strong> contact a <strong>rare donor registry</strong> (the WHO/ISBT International Rare Donor Panel) for <strong>frozen deglycerolised units</strong>, allow time for <strong>thawing and deglycerolisation</strong>, consider <strong>autologous donation</strong> for planned surgery, and plan inventory with the surgeon. Where no compatible blood exists, the clinician must weigh transfusing least-incompatible blood against the risk, with maximal patient blood management (iron, erythropoietin, cell salvage, tolerance of lower haemoglobin).</p>
    <h4>Antibody to a low-prevalence antigen</h4>
    <p><strong>Presentation:</strong> typically <strong>only one panel cell reactive</strong>, or — more commonly — an <strong>incompatible crossmatch with a negative antibody screen</strong>, because screening cells lack the antigen. Examples: anti-Wrᵃ (the commonest), anti-Kpᵃ, anti-Jsᵃ, anti-Cᵛ, anti-Luᵃ, anti-Dia.</p>
    <p><strong>Identification:</strong> test against cells known to carry low-prevalence antigens; test the specific donor cells; consider also <strong>antibodies in donor plasma</strong> or passively acquired antibody as a cause of an unexpected positive crossmatch. Clinical significance varies — anti-Wrᵃ and anti-Dia can cause HDFN and haemolytic reactions, whereas many are insignificant.</p>
    <p><strong>Providing blood</strong> is easy (most donors are antigen-negative), but the antibody must be recorded and the patient given an <strong>antibody card</strong>, since future crossmatches may again be incompatible.</p>
  `,
  tip: "The pattern recognition — all cells positive vs one cell positive — is the heart of this question.",
  sources: ["B1", "B2", "B3"]
},
{
  id: "ih62", domain: "ih-testing",
  q: "Discuss the pretransfusion testing problems caused by cold agglutinins and rouleaux, and the techniques used to resolve them.",
  tags: ["cold agglutinin", "rouleaux", "prewarm", "saline replacement"],
  keypoints: ["cold agglutinin reacts at room temperature", "ABO discrepancy and spontaneous agglutination", "thermal amplitude determines significance", "prewarmed technique", "collect and keep at 37 degrees", "37 degree washed cells", "cold autoadsorption", "anti-I specificity", "rabbit erythrocyte stroma adsorption", "monospecific anti-IgG to avoid complement", "rouleaux from abnormal proteins", "saline replacement technique distinguishes rouleaux", "stacked coins appearance on microscopy", "do not report incompatible without resolving", "blood warmer for transfusion in cold agglutinin disease", "keep patient warm"],
  answer: `
    <h4>Cold agglutinins</h4>
    <p>A cold-reactive IgM autoantibody (usually <strong>anti-I</strong>, sometimes anti-i or anti-IH) causes:</p>
    <ul>
      <li><strong>Spontaneous agglutination</strong> of the patient's cells, giving a false-positive forward group and an <strong>ABO discrepancy</strong>;</li>
      <li>Reactivity with all reverse grouping, screening and panel cells at room temperature;</li>
      <li>A positive DAT with <strong>complement (C3) only</strong>;</li>
      <li>Falsely raised MCV and MCHC on the blood count, and red cell clumps on the film.</li>
    </ul>
    <p>Clinical significance depends on the <strong>thermal amplitude</strong> (reactivity at or near 30–37 °C), not the titre alone.</p>
    <h4>Resolving cold agglutinin interference</h4>
    <ol>
      <li><strong>Collect and keep the sample at 37 °C</strong> and separate warm; wash the patient's cells three times with <strong>saline warmed to 37 °C</strong> before forward grouping.</li>
      <li><strong>Prewarmed technique</strong>: warm serum and cells separately to 37 °C, mix at 37 °C, wash with 37 °C saline and add AHG — use with care, since it can weaken genuinely significant warm antibodies.</li>
      <li>Use <strong>monospecific anti-IgG</strong> AHG rather than polyspecific, to avoid detecting complement bound by the cold antibody.</li>
      <li><strong>Cold autoadsorption</strong> at 4 °C with the patient's own cells removes the autoantibody while leaving alloantibodies in the plasma (use three successive adsorptions; not valid if recently transfused).</li>
      <li><strong>Rabbit erythrocyte stroma (RESt) adsorption</strong> removes anti-I — but it also adsorbs anti-B and some anti-D, so it must be used cautiously.</li>
      <li>Thiol reagents (DTT, 2-mercaptoethanol) can disperse IgM agglutination.</li>
    </ol>
    <h4>Rouleaux</h4>
    <p>Abnormal plasma proteins (myeloma, Waldenström macroglobulinaemia, hyperfibrinogenaemia, dextran or other plasma expanders) cause red cells to stack in a "<strong>stacked coins</strong>" appearance on microscopy — pseudoagglutination, affecting the reverse group and crossmatch.</p>
    <p><strong>Saline replacement technique</strong>: after the initial incubation, remove the serum, replace with an equal volume of saline, recentrifuge and read — <strong>rouleaux disperses, true agglutination persists</strong>. Washing the cells resolves rouleaux in forward grouping.</p>
    <h4>Clinical points</h4>
    <p><strong>Never report an unresolved incompatibility</strong> — resolve it, or state clearly what has and has not been excluded. For patients with clinically significant cold agglutinin disease, transfuse through a <strong>blood warmer</strong>, <strong>keep the patient and the room warm</strong>, and warm infused fluids; the laboratory should issue blood that is compatible by prewarmed or adsorbed-plasma testing.</p>
  `,
  tip: "Saline replacement for rouleaux and prewarm/cold autoadsorption for cold agglutinins — name the technique for each problem.",
  sources: ["B2", "B1"]
},
{
  id: "ih63", domain: "ih-testing",
  q: "Discuss the preparation, quality control and limitations of reagent red cells and antisera used in immunohaematology.",
  tags: ["reagents", "antisera", "monoclonal", "QC"],
  keypoints: ["polyclonal human source antisera", "monoclonal antibodies from hybridoma", "blended monoclonal anti-D", "anti-D reagents chosen not to detect DVI in patients", "low protein versus high protein reagents", "saline reactive versus albumin based", "reagent red cells group O pooled or single donor", "screening cells must express clinically significant antigens", "homozygous expression preferred", "panel cells with antigen profile sheet", "daily QC with weak positive and negative controls", "check cells for AHG", "lot-to-lot verification", "storage temperature and expiry", "visual inspection for haemolysis and contamination", "manufacturer insert must be followed"],
  answer: `
    <h4>Antisera</h4>
    <ul>
      <li><strong>Polyclonal human-source</strong> antisera (from immunised donors) were traditional and are still used for some specificities; supply is limited and they carry infectious risk.</li>
      <li><strong>Monoclonal antibodies</strong> from <strong>hybridoma</strong> or recombinant technology dominate now: consistent, potent, free of infectious risk. Many reagents are <strong>blends</strong> (e.g. IgM plus IgG monoclonal anti-D) to give direct agglutination and IAT reactivity.</li>
      <li>Critical design choice: <strong>anti-D reagents for patient testing are selected not to react with the DVI partial D phenotype</strong> (so DVI patients are typed D-negative and receive D-negative blood and RhIG), whereas <strong>donor reagents are chosen to detect DVI</strong> so that such units are labelled D-positive. Reading the <strong>manufacturer's insert</strong> is therefore mandatory — reagents are not interchangeable.</li>
      <li><strong>Low-protein (saline-reactive) versus high-protein (albumin-based)</strong> reagents: high-protein reagents can cause false positives with autoagglutinable cells and require a diluent control; modern low-protein monoclonal reagents usually do not.</li>
      <li>Antiglobulin reagents: polyspecific (anti-IgG + anti-C3d) or monospecific; selection depends on the test.</li>
    </ul>
    <h4>Reagent red cells</h4>
    <ul>
      <li>Always <strong>group O</strong>, suspended in preservative; <strong>screening cells</strong> may be pooled (not acceptable for prenatal testing in many standards) or single-donor sets of two or three vials.</li>
      <li>They must <strong>express the clinically significant antigens</strong> — D, C, E, c, e, K, k, Fyᵃ, Fyᵇ, Jkᵃ, Jkᵇ, S, s, M, N, P1, Leᵃ, Leᵇ — with <strong>homozygous expression preferred</strong> for those showing dosage, and in Asia the inclusion of <strong>Mia-positive cells</strong>.</li>
      <li><strong>Panel cells</strong> (10–16 vials) come with an antigen profile sheet (antigram), which must correspond to the exact lot in use.</li>
    </ul>
    <h4>Quality control</h4>
    <ol>
      <li><strong>Daily (each day of use) QC</strong>: test each antiserum with a <strong>weak positive (preferably heterozygous) and a negative control</strong> cell; test reagent cells with a known weak antibody.</li>
      <li><strong>Check (Coombs control) cells</strong> added to every negative AHG test.</li>
      <li><strong>Lot-to-lot verification</strong> before a new lot enters service, and parallel testing where appropriate.</li>
      <li><strong>Storage</strong> at 2–8 °C (do not freeze), monitored with records; discard at <strong>expiry</strong> or if the appearance changes.</li>
      <li><strong>Visual inspection</strong> for <strong>haemolysis, turbidity or contamination</strong> before use.</li>
      <li>Document all QC, with corrective action for failures; participate in EQA.</li>
    </ol>
    <h4>Limitations</h4>
    <p>Monoclonal reagents may miss variant antigens (weak and partial D, variant ABO subgroups) or react with altered antigens; reagent cells cannot cover every antigen, so a negative antibody screen never guarantees the absence of an antibody to a low-prevalence antigen. Preservatives and antibiotics in reagent cell diluent can rarely cause false reactions.</p>
  `,
  tip: "The DVI reagent difference between patient and donor testing is the single most examinable detail here.",
  sources: ["B1", "B5", "B2"]
},
{
  id: "ih64", domain: "ih-testing",
  q: "Discuss blood ordering practices, the maximum surgical blood order schedule, and audit of transfusion appropriateness.",
  tags: ["MSBOS", "type and screen", "C:T ratio", "audit"],
  keypoints: ["type and screen for low probability of transfusion", "crossmatch only when transfusion likely", "maximum surgical blood order schedule", "crossmatch-to-transfusion ratio", "transfusion probability and index", "type and screen", "electronic crossmatch shortens issue", "reduces outdating and wastage", "remote blood fridges and emergency stock", "audit against written criteria", "single unit policy with reassessment", "haemoglobin threshold documentation", "indications for plasma and platelets", "feedback to prescribers and transfusion committee", "quality indicators wastage and reaction rate"],
  answer: `
    <h4>Type and screen versus crossmatch</h4>
    <p>If the <strong>probability of transfusion is low</strong>, a <strong>type and screen</strong> (ABO/D plus antibody screen) is sufficient: compatible blood can then be issued in minutes by <strong>immediate spin or electronic crossmatch</strong> if needed. A full crossmatch is reserved for cases where <strong>transfusion is likely</strong> or the patient has clinically significant antibodies. This single change cuts reserved units, outdating and workload dramatically.</p>
    <h4>Maximum surgical blood order schedule (MSBOS)</h4>
    <p>An agreed list, developed jointly by surgeons, anaesthetists and the blood bank, stating for each procedure how many units should be crossmatched or whether a type and screen suffices. It is built from local data:</p>
    <div class="calc">Crossmatch-to-transfusion (C:T) ratio = units crossmatched ÷ units transfused   (target < 2.0)
Transfusion probability (%)  = patients transfused ÷ patients crossmatched × 100
Transfusion index            = units transfused ÷ patients crossmatched
  Transfusion index < 0.5  → type and screen only</div>
    <p>MSBOS must be <strong>reviewed periodically</strong> because surgical practice and patient blood management change requirements (e.g. tranexamic acid and cell salvage have reduced needs).</p>
    <h4>Practical measures that reduce waste</h4>
    <ul>
      <li>Electronic crossmatch and <strong>remote (satellite) blood refrigerators</strong> with controlled access and temperature monitoring.</li>
      <li>Defined <strong>emergency group O stock</strong> and a massive haemorrhage protocol so uncrossmatched units are available without over-ordering.</li>
      <li>Short reservation times with automatic release of unused units back to stock.</li>
      <li>FEFO rotation and network sharing of units nearing expiry.</li>
    </ul>
    <h4>Audit of appropriateness</h4>
    <ol>
      <li>Audit against <strong>written criteria</strong> (e.g. red cells for Hb &lt;70 g/L or &lt;75–80 g/L with cardiac disease; plasma only for bleeding with coagulopathy; platelets by threshold).</li>
      <li>Require documentation of the <strong>pre-transfusion haemoglobin, the indication and consent</strong>, and enforce a <strong>single-unit policy with reassessment</strong> between units.</li>
      <li>Monitor <strong>quality indicators</strong>: C:T ratio, wastage and outdating rate, percentage of transfusions outside guideline, sample rejection rate, transfusion reaction rate, and time to issue in emergencies.</li>
      <li><strong>Feed results back to prescribers</strong> and through the hospital transfusion committee, with education and prospective order-set changes — audit without feedback changes nothing.</li>
    </ol>
    <p>In the Philippines, where blood supply is often limited and family replacement donation is common, MSBOS and type-and-screen policies both conserve a scarce resource and shorten the wait for patients.</p>
  `,
  tip: "Give the C:T ratio target and the transfusion index <0.5 rule — these are the quantitative anchors.",
  sources: ["B1", "B5", "B12"]
},
{
  id: "ih65", domain: "ih-hdfn",
  q: "Discuss the prevention of RhD alloimmunisation beyond routine prophylaxis: failures of RhIG, and management of the already-immunised woman.",
  tags: ["RhIG failure", "alloimmunisation", "prevention", "sensitising events"],
  keypoints: ["silent fetomaternal haemorrhage", "missed sensitising event", "inadequate dose for large bleed", "failure to quantify FMH", "RhIG given too late beyond 72 hours", "antenatal dose omitted", "weak D or DEL mother typed D negative incorrectly", "non-identification of D positive baby", "administration errors and refusal", "quantify FMH after every sensitising event", "give additional RhIG within 72 hours and up to 13 days", "already immunised woman gains nothing from RhIG", "monitor titres and MCA Doppler", "intrauterine transfusion", "preconception counselling and paternal typing", "future pregnancies worse than the first", "antibody card and record"],
  answer: `
    <h4>Why prophylaxis fails</h4>
    <ol>
      <li><strong>Silent fetomaternal haemorrhage</strong> during the third trimester — the reason routine <strong>antenatal prophylaxis at 28 weeks</strong> was introduced; omission of this dose is a common cause of failure.</li>
      <li><strong>Missed sensitising events</strong>: early miscarriage or termination, ectopic pregnancy, amniocentesis or CVS, abdominal trauma (including road accidents and domestic violence), antepartum haemorrhage, external cephalic version, intrauterine death.</li>
      <li><strong>Inadequate dose for a large bleed</strong> — the standard 300 µg covers only 30 mL of fetal whole blood, so <strong>FMH must be quantified</strong> after delivery and after significant events (Kleihauer–Betke or flow cytometry) and extra vials given.</li>
      <li><strong>RhIG given too late</strong>: ideally within <strong>72 hours</strong>, although there is partial benefit up to <strong>13 days</strong> (some guidelines say 28 days) — so late is better than never.</li>
      <li><strong>Typing errors</strong>: a mother with <strong>weak D or Asian-type DEL</strong> incorrectly typed D-negative (or vice versa); failure to type the <strong>baby</strong> correctly (weak D-positive infant reported as D-negative).</li>
      <li><strong>Administration and system errors</strong>: wrong route (must be IM or IV as licensed), product not given because the woman was discharged early, refusal or religious objection, and documentation failures.</li>
      <li>Immunisation by non-D antigens (c, K, E) which RhIG does not prevent — a reason to screen all pregnant women, not only D-negative ones.</li>
    </ol>
    <h4>Laboratory responsibilities</h4>
    <ul>
      <li>Accurate maternal D typing with <strong>RHD genotyping for weak or discrepant results</strong>, and infant D typing at delivery.</li>
      <li><strong>Quantify FMH</strong> and calculate the dose; issue and document RhIG with a traceable product number.</li>
      <li>Distinguish <strong>passive from immune anti-D</strong> at the 28-week screen (titre, timing of the antenatal dose).</li>
      <li>Audit RhIG administration as a quality indicator, and report failures as adverse events.</li>
    </ul>
    <h4>The already-immunised woman</h4>
    <p>Once immune anti-D is present, <strong>RhIG gives no benefit</strong> and is not given. Management becomes monitoring and fetal treatment:</p>
    <ul>
      <li>Determine <strong>paternal phenotype/zygosity</strong> and, better, <strong>fetal RHD by cell-free DNA</strong>.</li>
      <li>Serial <strong>titres</strong> to the critical level, then <strong>MCA peak systolic velocity Doppler</strong> from 18 weeks.</li>
      <li><strong>Intrauterine transfusion</strong> for severe fetal anaemia; plan delivery at a centre able to perform exchange transfusion; IVIG and plasma exchange in severe early-onset disease.</li>
      <li><strong>Preconception counselling</strong>: later pregnancies are typically <strong>more severely affected</strong> and require earlier referral.</li>
      <li>Give the woman an <strong>antibody card</strong> and record the antibody permanently, because she will also need antigen-negative blood if transfused.</li>
    </ul>
  `,
  tip: "List the failure modes systematically, then state clearly that RhIG is useless once immune anti-D exists.",
  sources: ["B10", "B1", "B2"]
},
{
  id: "ih66", domain: "ih-hdfn",
  q: "Discuss ABO and non-D Rh alloimmunisation in pregnancy and the antibodies that do and do not cause HDFN.",
  tags: ["HDFN antibodies", "anti-c", "anti-K", "clinical significance"],
  keypoints: ["IgG required to cross placenta", "antigen must be developed on fetal red cells", "anti-D anti-c anti-K most severe", "anti-E and anti-C less severe", "anti-K suppresses erythropoiesis", "anti-M occasionally causes HDFN with suppression", "anti-Mia significant in Southeast Asia", "Lewis antibodies do not cause HDFN", "anti-I and anti-P1 insignificant", "anti-A and anti-B cause mild disease", "antibody titre less predictive for anti-K", "Duffy and Kidd antibodies mild to moderate", "anti-Jra and anti-Vel reported severe", "monitor with MCA Doppler", "cord blood DAT and bilirubin"],
  answer: `
    <h4>Two requirements for HDFN</h4>
    <p>An antibody causes HDFN only if it is <strong>IgG (and so crosses the placenta via FcRn)</strong> and the corresponding <strong>antigen is developed on fetal red cells</strong>. This explains most of the table below.</p>
    <div class="table-wrap"><table>
      <tr><th>Antibody</th><th>Risk of HDFN</th><th>Notes</th></tr>
      <tr><td><strong>Anti-D</strong></td><td><strong>Severe</strong></td><td>Historically the main cause; now prevented by RhIG</td></tr>
      <tr><td><strong>Anti-c</strong></td><td><strong>Severe</strong> — the most important non-D Rh antibody</td><td>No prophylaxis exists; monitor like anti-D</td></tr>
      <tr><td><strong>Anti-K (Kell)</strong></td><td><strong>Severe</strong></td><td><strong>Suppresses fetal erythropoiesis</strong> as well as causing haemolysis, so anaemia is marked with relatively <strong>low bilirubin and reticulocytes</strong>; <strong>titres are less predictive</strong> — use Doppler at lower titres (e.g. 8)</td></tr>
      <tr><td>Anti-E, anti-C, anti-e, anti-Ce</td><td>Mild to moderate (occasionally severe)</td><td>Monitor with titres and Doppler</td></tr>
      <tr><td><strong>Anti-Mia / GP.Mur</strong></td><td>Moderate to severe</td><td><strong>Important in Southeast Asia</strong>, including the Philippines; missed by standard screening cells</td></tr>
      <tr><td>Anti-Fyᵃ, anti-Jkᵃ, anti-S, anti-s, anti-U</td><td>Mild to moderate</td><td>Rarely severe; still require monitoring</td></tr>
      <tr><td><strong>Anti-M</strong></td><td>Usually none; occasionally HDFN</td><td>Often IgM; IgG anti-M can cause late anaemia with erythropoietic suppression — reported in Japanese and other Asian populations</td></tr>
      <tr><td>Anti-Jrᵃ, anti-Vel, anti-Ge, anti-Dia</td><td>Occasionally severe (case reports)</td><td>Rare but must not be dismissed</td></tr>
      <tr><td><strong>Anti-A, anti-B (IgG)</strong></td><td><strong>Mild</strong>, but the commonest cause of HDFN today</td><td>Group O mother, group A or B baby; jaundice with spherocytes and weak DAT</td></tr>
      <tr><td><strong>Anti-Leᵃ, anti-Leᵇ</strong></td><td><strong>None</strong></td><td>IgM, and Lewis antigens are poorly expressed on fetal cells (and are plasma-derived)</td></tr>
      <tr><td><strong>Anti-I, anti-IH, anti-P1, anti-Sdᵃ, HTLA antibodies</strong></td><td><strong>None</strong></td><td>IgM and/or antigen not developed; clinically insignificant in pregnancy</td></tr>
    </table></div>
    <h4>Practical management</h4>
    <ul>
      <li>Screen every pregnant woman at booking and at 28 weeks — not just D-negative women — because non-D antibodies are now proportionally more important.</li>
      <li>Identify the antibody, assess the <strong>IgG class and titre</strong>, determine the <strong>fetal antigen status</strong> (paternal phenotype, cell-free fetal DNA for RHD, RHCE and KEL), and monitor significant antibodies with <strong>MCA Doppler</strong>.</li>
      <li>Arrange antigen-negative, crossmatch-compatible blood to be available for the mother at delivery and for the neonate.</li>
      <li>At birth: <strong>cord blood group, DAT, haemoglobin and bilirubin</strong>, with eluate studies if the DAT is positive, and follow-up for late anaemia (particularly with anti-K and anti-M, and after intrauterine transfusion).</li>
    </ul>
  `,
  tip: "Anti-c and anti-K are the non-D antibodies to name, with the erythropoietic suppression point for anti-K.",
  sources: ["B10", "B1", "B2"]
},
{
  id: "ih67", domain: "ih-hdfn",
  q: "Discuss intrauterine transfusion and neonatal exchange transfusion: indications, component selection, technique and complications.",
  tags: ["intrauterine transfusion", "exchange transfusion", "components", "complications"],
  keypoints: ["IUT for fetal anaemia MCA above 1.5 MoM or hydrops", "intravascular umbilical vein access", "target haematocrit 40 to 50 percent", "donor unit haematocrit 75 to 85 percent", "group O D negative antigen negative", "crossmatch with maternal plasma", "irradiated to prevent TA-GVHD", "CMV safe and fresh under 5 days", "exchange transfusion for severe hyperbilirubinaemia", "double volume exchange removes 85 percent of sensitised cells", "reconstituted whole blood O cells in AB plasma", "haematocrit 45 to 50 percent for exchange", "complications thrombocytopenia hypocalcaemia hypoglycaemia", "necrotising enterocolitis and catheter complications", "late anaemia requiring top-up", "monitor bilirubin rebound"],
  answer: `
    <h4>Intrauterine transfusion (IUT)</h4>
    <p><strong>Indications:</strong> fetal anaemia from alloimmune HDFN (<strong>MCA-PSV &gt;1.5 MoM</strong> or fetal haematocrit below ~30%), <strong>hydrops fetalis</strong>, parvovirus B19 infection, and fetomaternal haemorrhage. Usually performed from 18–20 weeks until about 34–35 weeks.</p>
    <p><strong>Technique:</strong> ultrasound-guided <strong>intravascular transfusion into the umbilical vein</strong> at the cord insertion (intraperitoneal route is now rarely used), aiming for a post-transfusion <strong>haematocrit of 40–50%</strong>, repeated every 2–3 weeks guided by Doppler and the expected fall in haematocrit.</p>
    <p><strong>Component:</strong></p>
    <ul>
      <li>Group <strong>O, D-negative</strong> (or ABO-compatible with mother and fetus), <strong>negative for the implicated antigen(s)</strong>;</li>
      <li><strong>Crossmatch-compatible with maternal plasma</strong>;</li>
      <li><strong>Packed to haematocrit 75–85%</strong> to minimise volume;</li>
      <li><strong>Fresh (&lt;5 days)</strong> to limit potassium and maximise 2,3-DPG;</li>
      <li><strong>Irradiated</strong> (25 Gy) to prevent <strong>TA-GVHD</strong>, used within 24 hours of irradiation;</li>
      <li><strong>CMV-seronegative and leukoreduced</strong>, sickle-negative, and plasma-reduced.</li>
    </ul>
    <p><strong>Complications:</strong> fetal bradycardia, cord haematoma or tamponade, bleeding, infection, preterm labour, and procedure-related fetal loss (~1–2% per procedure in experienced hands). Suppression of fetal erythropoiesis means these infants often need <strong>top-up transfusions for late anaemia</strong> for weeks to months after birth and should be followed with haemoglobin and reticulocyte counts.</p>
    <h4>Neonatal exchange transfusion</h4>
    <p><strong>Indications:</strong> severe hyperbilirubinaemia at or above the exchange threshold on hour-specific nomograms, signs of acute bilirubin encephalopathy, severe anaemia with hydrops at birth, and a rapid rate of bilirubin rise despite intensive phototherapy and IVIG.</p>
    <p><strong>Component:</strong> <strong>reconstituted whole blood</strong> — group <strong>O red cells resuspended in AB plasma</strong> (or ABO-compatible with mother and baby), <strong>haematocrit 45–50%</strong>, <strong>fresh (&lt;5–7 days)</strong>, <strong>irradiated</strong>, CMV-safe, leukoreduced, sickle-negative, crossmatched against maternal plasma, and warmed to 37 °C.</p>
    <p><strong>Technique:</strong> a <strong>double-volume exchange</strong> (2 × 80–85 mL/kg) through umbilical venous (and arterial) catheters in 5–20 mL aliquots, which removes about <strong>85% of sensitised red cells</strong> and roughly 50% of bilirubin, as well as removing maternal antibody.</p>
    <p><strong>Complications:</strong> <strong>thrombocytopenia and coagulopathy</strong>, <strong>hypocalcaemia</strong> (citrate), <strong>hypoglycaemia</strong> (rebound after the glucose-rich donor plasma), hyperkalaemia or hypokalaemia, acid–base disturbance, hypothermia, arrhythmias, <strong>necrotising enterocolitis, portal vein thrombosis and catheter-related complications</strong>, infection, and TA-GVHD if non-irradiated blood is used. Monitor glucose, calcium, electrolytes, platelets and <strong>rebound bilirubin</strong> after the procedure, and continue phototherapy.</p>
  `,
  tip: "Memorise the two component recipes — IUT (Hct 75–85%) and exchange (reconstituted, Hct 45–50%).",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih68", domain: "ih-hdfn",
  q: "Discuss the laboratory investigation of neonatal anaemia and jaundice, distinguishing immune from non-immune causes.",
  tags: ["neonatal anaemia", "jaundice", "G6PD", "spherocytosis"],
  keypoints: ["cord and neonatal ABO and D typing forward only", "DAT and eluate", "maternal antibody screen", "full blood count reticulocytes and blood film", "spherocytes in ABO HDFN and hereditary spherocytosis", "G6PD screening common in Filipinos", "bite cells and Heinz bodies", "pyruvate kinase deficiency", "haemoglobin electrophoresis for alpha thalassaemia", "Kleihauer or flow cytometry for fetomaternal haemorrhage", "twin to twin transfusion", "sepsis screen and TORCH", "conjugated versus unconjugated bilirubin", "biliary atresia needs urgent referral", "EMA binding and osmotic gradient ektacytometry", "late anaemia after HDFN or IUT"],
  answer: `
    <h4>First decisions</h4>
    <p>Separate <strong>unconjugated from conjugated hyperbilirubinaemia</strong> — a conjugated (direct) fraction above about 20% or 34 µmol/L is always pathological and suggests cholestasis or <strong>biliary atresia, which needs urgent referral</strong> (surgery before 60 days). For unconjugated jaundice, decide whether there is haemolysis (anaemia, high reticulocytes, abnormal film) and whether it is immune or non-immune.</p>
    <h4>Core tests</h4>
    <ul>
      <li><strong>Neonatal (or cord) ABO and D typing</strong> — forward grouping only, since neonates lack isohaemagglutinins.</li>
      <li><strong>DAT</strong>, and an <strong>eluate</strong> if positive (or if ABO HDFN is suspected despite a weak DAT).</li>
      <li><strong>Maternal antibody screen</strong> and identification; maternal and infant blood groups.</li>
      <li><strong>Full blood count, reticulocytes and blood film</strong>; total and conjugated bilirubin; LDH; albumin.</li>
    </ul>
    <h4>Immune causes</h4>
    <p>ABO HDFN (group O mother, A or B infant; <strong>spherocytes</strong>, weak DAT), RhD and other alloantibodies (anti-c, anti-K, anti-E, anti-Mia — strong DAT, nucleated red cells), and maternal autoimmune haemolytic anaemia (maternal IgG crossing the placenta).</p>
    <h4>Non-immune causes (DAT negative)</h4>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>Clues and tests</th></tr>
      <tr><td><strong>Enzymopathies</strong></td><td><strong>G6PD deficiency</strong> — very common in Filipino males and on the newborn screening panel; <strong>bite cells, blister cells and Heinz bodies</strong>; fluorescent spot or quantitative assay (false normal during reticulocytosis — repeat later). <strong>Pyruvate kinase deficiency</strong> — enzyme assay</td></tr>
      <tr><td><strong>Membrane disorders</strong></td><td><strong>Hereditary spherocytosis</strong> (family history, spherocytes, raised MCHC) — <strong>EMA binding by flow cytometry</strong> or osmotic gradient ektacytometry; elliptocytosis; Southeast Asian ovalocytosis</td></tr>
      <tr><td><strong>Haemoglobinopathies</strong></td><td><strong>α-thalassaemia</strong> (Hb Bart's on electrophoresis/HPLC) — relevant in Southeast Asia; γ-chain variants</td></tr>
      <tr><td><strong>Blood loss</strong></td><td><strong>Fetomaternal haemorrhage</strong> — maternal <strong>Kleihauer–Betke or flow cytometry</strong>; <strong>twin-to-twin transfusion</strong>; internal bleeding (cephalhaematoma, intracranial, adrenal); traumatic delivery</td></tr>
      <tr><td><strong>Infection</strong></td><td><strong>Sepsis screen</strong> (blood culture, CRP/procalcitonin, urine), congenital infection (<strong>TORCH</strong>: syphilis — important locally, CMV, toxoplasma, rubella), with thrombocytopenia and conjugated bilirubin</td></tr>
      <tr><td>Metabolic and endocrine</td><td>Hypothyroidism, galactosaemia, Gilbert and Crigler–Najjar syndromes, breast-milk and breastfeeding jaundice</td></tr>
      <tr><td>Marrow failure</td><td>Diamond–Blackfan anaemia, congenital infection, parvovirus B19 (low reticulocytes)</td></tr>
    </table></div>
    <h4>Follow-up</h4>
    <p>Infants with HDFN, and especially those who received <strong>intrauterine transfusion</strong>, develop <strong>late hyporegenerative anaemia</strong> for up to 3 months as maternal antibody persists and erythropoiesis is suppressed — monitor haemoglobin and reticulocytes and transfuse or treat with erythropoietin as needed. Also arrange audiology and neurodevelopmental follow-up after severe hyperbilirubinaemia.</p>
  `,
  tip: "Split the answer by DAT result, then name G6PD deficiency and spherocytosis as the key local non-immune causes.",
  sources: ["B2", "B1"]
},
{
  id: "ih69", domain: "ih-reactions",
  q: "Discuss the investigation and prevention of transfusion-associated hyperkalaemia, hypothermia, citrate toxicity and other metabolic complications of transfusion.",
  tags: ["metabolic complications", "hyperkalaemia", "citrate", "hypothermia"],
  keypoints: ["potassium leak in stored and irradiated red cells", "rapid large volume transfusion risk", "neonates and renal failure highest risk", "use fresh or washed cells for neonates", "avoid central rapid push in small infants", "citrate chelates calcium", "ionised hypocalcaemia with perioral tingling and QT prolongation", "monitor ionised calcium in massive transfusion", "citrate metabolised to bicarbonate causing metabolic alkalosis", "hypomagnesaemia", "hypothermia from cold units", "use blood warmer for rapid or massive transfusion", "coagulopathy worsened by hypothermia", "acid-base changes", "iron overload long term", "monitor electrolytes during massive transfusion protocol"],
  answer: `
    <h4>Hyperkalaemia</h4>
    <ul>
      <li><strong>Potassium leaks from stored red cells</strong> because the Na/K-ATPase is inactive at 1–6 °C; supernatant potassium can exceed 50 mmol/L by the end of storage, and <strong>irradiation accelerates the leak</strong> (so irradiated units have a shortened expiry, and for neonatal use are transfused within 24 hours).</li>
      <li>Risk is greatest with <strong>rapid, large-volume transfusion</strong>, particularly through a central line, and in <strong>neonates, small infants, renal failure, acidosis and crush injury</strong>.</li>
      <li>Prevention: use <strong>fresh units (&lt;5–7 days)</strong> or <strong>washed red cells</strong> for neonatal exchange and large-volume neonatal transfusion, avoid rapid central pushes in infants, give through a peripheral line where possible, and monitor potassium and the ECG during massive transfusion.</li>
    </ul>
    <h4>Citrate toxicity and hypocalcaemia</h4>
    <ul>
      <li>Citrate anticoagulant <strong>chelates calcium and magnesium</strong>, causing <strong>ionised hypocalcaemia</strong>: perioral tingling, tremor, tetany, <strong>QT prolongation</strong>, hypotension and reduced cardiac contractility — and it worsens coagulopathy because calcium is needed by the clotting cascade.</li>
      <li>Highest risk in <strong>massive transfusion, apheresis, exchange transfusion, liver disease</strong> (reduced citrate metabolism), hypothermia and in neonates.</li>
      <li>Management: <strong>monitor ionised calcium</strong> (not total calcium) and replace with calcium chloride or gluconate; also watch <strong>magnesium</strong>.</li>
      <li>Later, <strong>citrate is metabolised to bicarbonate</strong>, which can cause a <strong>metabolic alkalosis</strong> (and, with alkalosis, a further fall in ionised calcium and a shift of potassium into cells).</li>
    </ul>
    <h4>Hypothermia</h4>
    <p>Units stored at 1–6 °C given rapidly cause <strong>core cooling</strong>, with arrhythmias, reduced citrate and lactate metabolism, left shift of the oxygen dissociation curve, platelet dysfunction and <strong>enzymatic coagulopathy</strong> — part of the lethal triad with acidosis and coagulopathy in trauma. Prevention: a <strong>validated blood warmer</strong> (never improvised warming, which haemolyses cells), warmed fluids, forced-air warming and monitoring of core temperature.</p>
    <h4>Other metabolic effects</h4>
    <ul>
      <li><strong>Acid–base changes</strong>: stored blood is acidic (pH ~6.5–7.0 at expiry) but the dominant late effect is alkalosis from citrate metabolism.</li>
      <li>Hypomagnesaemia and hypophosphataemia after large volumes.</li>
      <li>Transient hyperglycaemia from additive dextrose, then rebound hypoglycaemia in neonates.</li>
      <li><strong>Iron overload</strong> in chronically transfused patients — monitored with ferritin and MRI T2*, treated with chelation.</li>
      <li>Volume overload (TACO) — the commonest serious complication, considered separately.</li>
    </ul>
    <p>Practically, every <strong>massive transfusion protocol</strong> should include scheduled monitoring of potassium, <strong>ionised calcium</strong>, magnesium, pH/lactate, temperature, platelets and fibrinogen — the laboratory's role is to deliver these rapidly and to flag dangerous trends.</p>
  `,
  tip: "Link each complication to its monitoring test, especially ionised calcium in massive transfusion.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih70", domain: "ih-donor",
  q: "Discuss therapeutic phlebotomy and autologous donation programmes: indications, protocols and laboratory responsibilities.",
  tags: ["therapeutic phlebotomy", "haemochromatosis", "polycythaemia", "autologous"],
  keypoints: ["hereditary haemochromatosis ferritin and transferrin saturation", "weekly phlebotomy 450 to 500 mL", "target ferritin 50 to 100 micrograms per litre", "monitor haemoglobin before each session", "polycythaemia vera target haematocrit below 45 percent", "secondary polycythaemia selected cases", "porphyria cutanea tarda low volume phlebotomy", "erythrocytosis in testosterone therapy", "written physician order and consent", "may be used for allogeneic transfusion if donor criteria met and labelled", "pre-deposit autologous donation protocol", "last donation at least 72 hours before surgery", "iron supplementation during autologous donation", "unit must be labelled autologous use only", "wastage and clerical error risk", "acute normovolaemic haemodilution and cell salvage alternatives"],
  answer: `
    <h4>Therapeutic phlebotomy</h4>
    <div class="table-wrap"><table>
      <tr><th>Indication</th><th>Protocol and target</th></tr>
      <tr><td><strong>Hereditary haemochromatosis</strong></td><td>Diagnosis from <strong>transferrin saturation &gt;45% and raised ferritin</strong> with <em>HFE</em> genotyping. Remove <strong>450–500 mL weekly</strong> (each unit removes ~200–250 mg iron) until <strong>ferritin 50–100 µg/L</strong>, then maintenance every 2–4 months. <strong>Check haemoglobin before each session</strong> (defer if &lt;110–120 g/L) and ferritin every few sessions</td></tr>
      <tr><td><strong>Polycythaemia vera</strong></td><td>Phlebotomy to <strong>haematocrit &lt;45%</strong> (CYTO-PV trial) with low-dose aspirin, plus cytoreduction when indicated</td></tr>
      <tr><td><strong>Secondary polycythaemia / erythrocytosis</strong></td><td>Selected symptomatic cases (cyanotic heart disease, high-altitude, post-transplant, <strong>testosterone therapy</strong>); treat the cause first and avoid iron deficiency</td></tr>
      <tr><td><strong>Porphyria cutanea tarda</strong></td><td><strong>Low-volume phlebotomy</strong> (e.g. 250–450 mL every 2 weeks) to deplete hepatic iron, with hepatitis C treatment</td></tr>
      <tr><td>Sickle cell disease, thalassaemia with iron overload</td><td>Red cell exchange or chelation rather than simple phlebotomy</td></tr>
    </table></div>
    <p><strong>Laboratory and service responsibilities:</strong> a <strong>written physician order</strong> stating the diagnosis, volume and frequency, plus <strong>informed consent</strong>; pre-procedure haemoglobin or haematocrit; trained staff and facilities for managing vasovagal reactions; documentation of volume removed and adverse events; and disposal of the unit as medical waste — unless the donor meets all <strong>allogeneic donor criteria</strong>, in which case some regulators permit the unit to be used for transfusion provided it is <strong>labelled with the therapeutic indication</strong> (practice varies; haemochromatosis units are accepted in several countries since the iron content is normal).</p>
    <h4>Autologous donation</h4>
    <ul>
      <li><strong>Pre-deposit autologous donation (PAD)</strong>: units collected 3–5 weeks before elective surgery, usually weekly, with <strong>oral or IV iron supplementation</strong>; the <strong>last donation at least 72 hours before surgery</strong> to allow volume and protein repletion. Minimum haemoglobin before each donation ~110 g/L.</li>
      <li>Units must be <strong>labelled "for autologous use only"</strong>, segregated in storage, tested for TTIs according to local rules, and <strong>never crossed over to another patient</strong> unless full allogeneic criteria are met (most services do not allow it).</li>
      <li>Indications are now narrow: rare blood groups or multiple antibodies, religious objection to allogeneic blood (where autologous is accepted), and some paediatric or obstetric cases.</li>
      <li>Drawbacks: <strong>pre-operative anaemia</strong> caused by the donations themselves (often leading to more transfusion overall), <strong>high wastage</strong> (up to half of units unused), <strong>clerical error risk</strong> remains (the patient can still receive the wrong unit), bacterial contamination, cost, and no protection against TACO or non-infectious reactions.</li>
      <li>Preferred alternatives today: <strong>acute normovolaemic haemodilution, intra-operative cell salvage</strong>, tranexamic acid, meticulous surgical technique and pre-operative correction of anaemia with iron — the pillars of patient blood management.</li>
    </ul>
  `,
  tip: "Give the haemochromatosis ferritin target and explain why pre-deposit autologous donation has fallen out of favour.",
  sources: ["B1", "B5", "B12"]
},
{
  id: "ih71", domain: "ih-clinical",
  q: "Discuss the laboratory investigation of a suspected haemolytic anaemia, distinguishing intravascular from extravascular and immune from non-immune mechanisms.",
  tags: ["haemolysis", "haptoglobin", "DAT", "schistocytes"],
  keypoints: ["raised reticulocytes and LDH", "unconjugated hyperbilirubinaemia", "low haptoglobin", "plasma free haemoglobin and haemoglobinuria", "haemosiderinuria in chronic intravascular haemolysis", "intravascular versus extravascular features", "DAT separates immune from non-immune", "blood film spherocytes schistocytes bite cells", "MAHA with thrombocytopenia", "ADAMTS13 for TTP", "complement assays and PNH flow cytometry", "G6PD and pyruvate kinase assays", "haemoglobin electrophoresis", "osmotic fragility and EMA binding", "cold agglutinin titre and Donath-Landsteiner", "reticulocyte count may lag early"],
  answer: `
    <h4>Step 1 — Confirm haemolysis</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Change</th><th>Comment</th></tr>
      <tr><td><strong>Reticulocytes</strong></td><td>↑ (absolute count or RPI)</td><td>May <strong>lag in the first days</strong> or be low if erythropoiesis is suppressed (parvovirus, anti-K HDFN, marrow disease)</td></tr>
      <tr><td><strong>LDH</strong></td><td>↑</td><td>Non-specific; LD1 &gt; LD2</td></tr>
      <tr><td><strong>Unconjugated bilirubin</strong></td><td>↑</td><td>Rarely &gt;85 µmol/L unless liver disease or Gilbert</td></tr>
      <tr><td><strong>Haptoglobin</strong></td><td><strong>↓</strong></td><td>Most useful single marker; but it is an acute-phase protein, so inflammation can mask the fall, and it is congenitally absent in some people</td></tr>
      <tr><td><strong>Plasma free haemoglobin</strong>, haemoglobinuria</td><td>↑</td><td>Indicates <strong>intravascular</strong> haemolysis</td></tr>
      <tr><td>Urine <strong>haemosiderin</strong></td><td>Present</td><td>Chronic intravascular haemolysis (PNH, mechanical)</td></tr>
    </table></div>
    <h4>Step 2 — Intravascular or extravascular?</h4>
    <p><strong>Intravascular</strong>: free haemoglobin, haemoglobinuria, very low haptoglobin, methaemalbuminaemia — ABO-incompatible transfusion, PNH, mechanical destruction, severe G6PD crisis, malaria, clostridial sepsis, microangiopathy. <strong>Extravascular</strong>: splenic/hepatic clearance, spherocytes, less haemoglobinuria — warm AIHA, hereditary spherocytosis, delayed haemolytic transfusion reactions, hypersplenism.</p>
    <h4>Step 3 — Immune or non-immune? (the DAT)</h4>
    <ul>
      <li><strong>DAT positive</strong>: autoimmune (warm, cold agglutinin disease, mixed, PCH — add <strong>cold agglutinin titre and thermal amplitude, Donath–Landsteiner test</strong>), alloimmune (haemolytic transfusion reaction, HDFN, post-transplant), drug-induced. Follow with monospecific DAT, eluate, antibody identification and adsorption studies.</li>
      <li><strong>DAT negative</strong>: look at the <strong>blood film</strong>, which usually directs the next test:
        <ul>
          <li><strong>Schistocytes with thrombocytopenia</strong> → microangiopathic haemolytic anaemia: measure <strong>ADAMTS13 activity and inhibitor</strong> (TTP), stool studies and Shiga toxin (HUS), complement studies (atypical HUS), coagulation screen and D-dimer (DIC), blood pressure and pregnancy status (HELLP), drug history; also prosthetic valve haemolysis.</li>
          <li><strong>Spherocytes</strong> → hereditary spherocytosis (<strong>EMA binding</strong>, osmotic gradient ektacytometry; osmotic fragility is the older test).</li>
          <li><strong>Bite cells, blister cells, Heinz bodies</strong> → <strong>G6PD deficiency</strong> (assay after the acute episode) or other oxidant haemolysis; look for the precipitant drug or infection.</li>
          <li><strong>Target cells, sickle cells, basophilic stippling</strong> → <strong>haemoglobin electrophoresis or HPLC</strong> for sickle cell disease, thalassaemia and HbE (common in Southeast Asia).</li>
          <li>Normal or non-specific film → <strong>PNH flow cytometry</strong> (loss of CD55/CD59, FLAER), <strong>pyruvate kinase</strong> and other enzyme assays, parasites on thick and thin films (<strong>malaria, babesiosis</strong>), copper (Wilson disease), and march haemoglobinuria.</li>
        </ul>
      </li>
    </ul>
    <h4>Step 4 — Transfusion support</h4>
    <p>In autoimmune haemolysis, perform adsorption studies to exclude alloantibodies, provide phenotype-matched blood, and warn that crossmatches may remain incompatible. In mechanical and microangiopathic haemolysis, treat the cause — in TTP, plasma exchange is urgent and platelet transfusion is avoided.</p>
  `,
  tip: "Structure it as confirm → intravascular or not → DAT → film; the film usually names the next test.",
  sources: ["B13", "B1", "B2"]
},
{
  id: "ih72", domain: "ih-clinical",
  q: "Discuss massive haemorrhage protocols and the laboratory's role, including viscoelastic testing and the monitoring of coagulopathy.",
  tags: ["massive haemorrhage", "MHP", "ROTEM", "fibrinogen"],
  keypoints: ["definition 10 units in 24 hours or 4 units in one hour", "activation criteria and single call system", "fixed ratio packs early", "red cells plasma platelets close to 1 to 1 to 1", "tranexamic acid within 3 hours", "fibrinogen target above 1.5 to 2 g per litre", "cryoprecipitate or fibrinogen concentrate", "platelet target above 50 or 100 for head injury", "ionised calcium replacement", "avoid hypothermia and acidosis", "trauma-induced coagulopathy with hyperfibrinolysis", "viscoelastic testing TEG ROTEM guided therapy", "rapid turnaround for FBC coagulation fibrinogen", "group O emergency units and switch to group specific", "stand down and reconciliation of unused units", "audit and debrief"],
  answer: `
    <h4>Definition and activation</h4>
    <p>Massive haemorrhage is usually defined as loss of one blood volume in 24 hours, <strong>≥10 red cell units in 24 hours</strong>, or <strong>≥4 units in 1 hour</strong> with continuing bleeding; dynamic criteria (shock index, ABC score) trigger earlier activation. A <strong>single-call activation system</strong> should alert the blood bank, laboratory, portering and the clinical team at once, and a defined team leader communicates with the blood bank.</p>
    <h4>Component strategy</h4>
    <ul>
      <li>Immediate <strong>group O red cells</strong> (D-negative for females of childbearing potential if available) and <strong>group AB or low-titre A plasma</strong>, then <strong>switch to group-specific</strong> once two ABO determinations are available.</li>
      <li><strong>Fixed-ratio packs</strong> early in trauma — red cells, plasma and platelets close to <strong>1:1:1</strong> (PROPPR) — moving to laboratory- or viscoelastic-guided replacement once results are available.</li>
      <li><strong>Tranexamic acid within 3 hours</strong> of injury (CRASH-2, CRASH-3, WOMAN trial for postpartum haemorrhage) — give as early as possible.</li>
      <li><strong>Fibrinogen</strong> is the first factor to fall critically: target <strong>&gt;1.5 g/L</strong> (&gt;2 g/L in obstetric haemorrhage) with <strong>cryoprecipitate or fibrinogen concentrate</strong>.</li>
      <li><strong>Platelets &gt;50 × 10⁹/L</strong> (&gt;100 in head injury or ongoing microvascular bleeding).</li>
      <li><strong>Ionised calcium</strong> replacement (citrate load), and prothrombin complex concentrate or specific reversal agents for anticoagulated patients.</li>
      <li>Prevent the lethal triad: <strong>avoid hypothermia</strong> (blood warmers, forced air) <strong>and acidosis</strong>, and maintain permissive hypotension until surgical control.</li>
    </ul>
    <h4>Laboratory monitoring</h4>
    <ul>
      <li><strong>Rapid, repeated FBC, PT/INR, APTT, fibrinogen (Clauss method), ionised calcium, potassium, lactate, pH and temperature</strong> — every 30–60 minutes or after every 4–6 units. Agreed turnaround targets and a dedicated runner or pneumatic tube are essential.</li>
      <li><strong>Viscoelastic testing (TEG or ROTEM)</strong> gives results in minutes and guides targeted therapy: a prolonged CT/R suggests the need for plasma or PCC, a low MCF/MA with low FIBTEM indicates fibrinogen deficiency (cryoprecipitate), low EXTEM-FIBTEM difference indicates platelet deficiency, and an increased LY30/ML indicates <strong>hyperfibrinolysis</strong> requiring tranexamic acid. Meta-analyses show reduced transfusion requirements with viscoelastic-guided protocols, particularly in cardiac and liver surgery.</li>
      <li>Recognise <strong>trauma-induced coagulopathy</strong>, which exists at presentation (shock, tissue injury, protein C activation and hyperfibrinolysis) and is distinct from dilutional coagulopathy.</li>
      <li>Blood bank duties: maintaining the emergency stock, prioritising this patient, abbreviated crossmatch procedures, tracking of units issued, and arranging onward supply from the regional blood centre — a real constraint in Philippine hospitals, where stock is limited and plasma and platelets may not always be available.</li>
    </ul>
    <h4>Stand-down and review</h4>
    <p>A formal <strong>stand-down</strong> message, <strong>reconciliation and return of unused units</strong> (within the 30-minute rule for units out of controlled storage), documentation of all components and results, and a <strong>debrief and audit</strong> of activation appropriateness, ratios achieved, time to first unit, time to tranexamic acid, wastage and patient outcome. These indicators belong to the hospital transfusion committee.</p>
  `,
  tip: "Give the 1:1:1 ratio, tranexamic acid within 3 hours, and the fibrinogen target — then add viscoelastic guidance.",
  sources: ["B1", "B12", "B11"]
}
);
