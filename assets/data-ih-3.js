/* Immunohematology — part 3: donors, components & regulation; transfusion therapy, AIHA & quality */
window.QBANK.push(
{
  id: "ih40", domain: "ih-donor", star: true,
  q: "Discuss the National Blood Services Act of 1994 (RA 7719) and the organisation of blood services in the Philippines.",
  tags: ["RA 7719", "Philippines", "PNBS", "voluntary donation"],
  answer: `
    <h4>RA 7719 — National Blood Services Act of 1994</h4>
    <p>Enacted on 2 April 1994 to ensure an adequate supply of safe blood. Its main policies:</p>
    <ol>
      <li>Promote and encourage <strong>voluntary, non-remunerated blood donation</strong> through public education (including integration into school curricula).</li>
      <li><strong>Phase out commercial blood banks</strong> (within two years, with possible extension) — blood is not to be sold for profit; service fees cover processing only.</li>
      <li>Regulate blood banks and require them to meet standards; mandate screening of blood for TTIs.</li>
      <li>Provide incentives to voluntary donors and establish blood services networks; the DOH leads implementation.</li>
      <li>Prescribe penalties for violations.</li>
    </ol>
    <h4>Implementing rules and later orders</h4>
    <ul>
      <li><strong>DOH AO No. 9 s. 1995</strong> — the IRR; regulation through the Bureau of Research and Laboratories (now Health Facilities and Services Regulatory Bureau, HFSRB).</li>
      <li><strong>AO 2005-0002</strong> — established the <strong>Philippine National Blood Services (PNBS)</strong>, a network led by the DOH with the Philippine Blood Center (PBC) as the national centre, plus regional and sub-national blood centres, hospital blood banks, blood collection units and blood stations.</li>
      <li><strong>AO 2008-0008</strong> — rules on the regulation (licensing) of blood service facilities.</li>
      <li><strong>AO 2010-0001</strong> — policies for blood services networks (hospital and local government cooperation).</li>
    </ul>
    <h4>Partners and challenges</h4>
    <p>The Philippine Red Cross (PRC) is a major collector of voluntary blood. Challenges include persistent reliance on <strong>family replacement donation</strong>, seasonal shortages (e.g. dengue outbreaks increase platelet demand), unequal distribution between urban and rural areas, and limited NAT and component capacity outside major centres.</p>
  `,
  tip: "Quote the date of the Act, the phase-out of commercial blood banks and PNBS structure.",
  sources: ["B6", "B7", "B8"]
},
{
  id: "ih41", domain: "ih-donor", star: true,
  q: "Discuss blood donor selection: the purpose of the donor history questionnaire, physical examination criteria and deferral categories.",
  tags: ["donor selection", "deferral", "haemoglobin"],
  answer: `
    <p>Donor selection has two aims: to <strong>protect the donor</strong> from harm and to <strong>protect the recipient</strong> from infection or harmful substances.</p>
    <h4>Typical criteria (WHO / DOH / AABB — check local standard)</h4>
    <div class="table-wrap"><table>
      <tr><th>Criterion</th><th>Typical requirement</th></tr>
      <tr><td>Age</td><td>16/18–65 years (parental consent for 16–17 in some programmes)</td></tr>
      <tr><td>Weight</td><td>≥50 kg for 450 mL (≥45 kg for 350 mL bags)</td></tr>
      <tr><td>Haemoglobin</td><td>≥125 g/L (female), ≥130 g/L (male) per WHO; screened by copper sulphate, HemoCue or haematology analyser</td></tr>
      <tr><td>Blood pressure</td><td>Systolic 90–180, diastolic 50–100 mmHg</td></tr>
      <tr><td>Pulse</td><td>50–100/min, regular</td></tr>
      <tr><td>Temperature</td><td>≤37.5 °C</td></tr>
      <tr><td>Interval</td><td>Whole blood every 3 months (men) / 4 months (women); plateletpheresis more often</td></tr>
    </table></div>
    <h4>Deferral categories</h4>
    <ul>
      <li><strong>Temporary</strong>: recent illness, dental work, tattoo/piercing (deferral period varies — often 6–12 months), recent travel to malaria areas (relevant in Palawan and some Mindanao provinces), pregnancy, recent vaccination with live vaccines, some medications (isotretinoin, finasteride — teratogenic; aspirin for platelet donors), dengue recovery.</li>
      <li><strong>Indefinite / permanent</strong>: history of HIV, HBV, HCV, HTLV infection; injecting drug use; certain cancers; receipt of dura mater or pituitary growth hormone (vCJD risk); unexplained weight loss.</li>
      <li>Risk-behaviour deferral, increasingly <strong>individual risk-based assessment</strong> rather than group-based.</li>
    </ul>
    <h4>Process</h4>
    <p>Donor registration and identification, education material, confidential questionnaire, private interview by trained staff, informed consent, physical examination, and option of <strong>confidential unit exclusion</strong>.</p>
  `,
  tip: "Open with the dual purpose — donor safety AND recipient safety — and structure the answer around it.",
  sources: ["B8", "B1", "B5", "B7"]
},
{
  id: "ih42", domain: "ih-donor",
  q: "Describe the preparation of blood components from whole blood, including the principles of differential centrifugation.",
  tags: ["component preparation", "centrifugation", "buffy coat"],
  answer: `
    <h4>Collection</h4>
    <p>450 mL (±10%) of blood into a multiple bag system containing <strong>CPD</strong> or CP2D anticoagulant, with satellite bags and an additive solution (SAGM / AS-1, AS-3, AS-5). Components must be prepared within a set time (e.g. within 8 h for FFP; up to 24 h with rapid cooling in some systems).</p>
    <h4>Principle</h4>
    <p>Cells sediment according to size and density. A <strong>light spin</strong> (soft spin, ~2000 × g for 3 min) separates red cells from platelet-rich plasma; a <strong>heavy spin</strong> (~5000 × g for 5–7 min) packs platelets.</p>
    <h4>Two main methods</h4>
    <div class="table-wrap"><table>
      <tr><th>Platelet-rich plasma (PRP) method — common in the Philippines/US</th><th>Buffy coat method — common in Europe</th></tr>
      <tr><td>1. Light spin → PRP expressed into satellite bag; red cells remain → add additive → packed RBCs</td><td>1. Heavy spin → plasma (top), buffy coat (middle), red cells (bottom)</td></tr>
      <tr><td>2. Heavy spin of PRP → platelet pellet + platelet-poor plasma</td><td>2. Plasma and red cells expressed (top-and-bottom bags), buffy coat left</td></tr>
      <tr><td>3. Remove most plasma (→ FFP), leave 50–70 mL to resuspend platelets; rest at room temperature ~1 h</td><td>3. Pool 4–6 ABO-identical buffy coats with one plasma unit or platelet additive solution → light spin → pooled platelet concentrate</td></tr>
    </table></div>
    <h4>Other components</h4>
    <ul>
      <li><strong>Cryoprecipitate</strong>: thaw FFP at 1–6 °C; cold-insoluble proteins precipitate; centrifuge, remove supernatant (cryo-poor plasma), refreeze.</li>
      <li>Leukoreduction by filtration; irradiation; washing; aliquoting.</li>
    </ul>
    <p>Quality control of components: volume, Hb/Hct, platelet count, residual leukocytes, pH of platelets, factor VIII and fibrinogen in cryo.</p>
  `,
  tip: "Contrast PRP vs buffy coat methods in a table — and remember light spin first in PRP.",
  sources: ["B1", "B2"]
},
{
  id: "ih43", domain: "ih-donor",
  q: "Tabulate the storage conditions, shelf life, quality control and indications of the main blood components.",
  tags: ["components", "storage", "shelf life", "QC"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Component</th><th>Storage</th><th>Shelf life</th><th>QC requirement (typical)</th><th>Main indications</th></tr>
      <tr><td>Whole blood</td><td>1–6 °C</td><td>21 days (CPD), 35 days (CPDA-1)</td><td>Volume</td><td>Massive haemorrhage (low-titre O whole blood in trauma); exchange transfusion</td></tr>
      <tr><td>Packed RBC</td><td>1–6 °C</td><td>35 days (CPDA-1), 42 days (additive solution)</td><td>Hct 65–80% (CPDA) / 55–65% (AS); Hb ≥ ~45 g per unit</td><td>Symptomatic anaemia; Hb thresholds (restrictive 70 g/L)</td></tr>
      <tr><td>Leukoreduced RBC</td><td>1–6 °C</td><td>As RBC (24 h if open system)</td><td>&lt;5 × 10⁶ WBC (AABB); &lt;1 × 10⁶ (EU)</td><td>FNHTR prevention, HLA alloimmunisation, CMV-safe</td></tr>
      <tr><td>Washed RBC</td><td>1–6 °C</td><td>24 h (open system)</td><td>Protein removal</td><td>Recurrent severe allergic reactions, IgA deficiency with anti-IgA</td></tr>
      <tr><td>Frozen RBC (glycerol)</td><td>≤ −65 °C</td><td>10 years</td><td>Deglycerolisation check</td><td>Rare phenotypes</td></tr>
      <tr><td>Platelets (random donor)</td><td>20–24 °C, continuous agitation</td><td>5 days (up to 7 with bacterial detection)</td><td>≥5.5 × 10¹⁰ per unit, pH ≥6.2</td><td>Bleeding with thrombocytopenia; prophylaxis &lt;10 × 10⁹/L</td></tr>
      <tr><td>Apheresis platelets</td><td>20–24 °C, agitation</td><td>5–7 days</td><td>≥3.0 × 10¹¹, pH ≥6.2</td><td>As above; HLA-matched for refractoriness</td></tr>
      <tr><td>FFP</td><td>≤ −18 °C (≤ −25 °C preferred)</td><td>1 year (−18 °C)</td><td>FVIII ≥0.7 IU/mL</td><td>Multiple factor deficiency with bleeding, TTP (plasma exchange), massive transfusion</td></tr>
      <tr><td>Thawed plasma</td><td>1–6 °C</td><td>24 h (FFP) / 5 days (thawed plasma)</td><td>—</td><td>As FFP</td></tr>
      <tr><td>Cryoprecipitate</td><td>≤ −18 °C; after thaw 20–24 °C</td><td>1 year; 6 h after thaw (4 h pooled)</td><td>FVIII ≥80 IU, fibrinogen ≥150 mg per unit</td><td>Hypofibrinogenaemia (&lt;1.5 g/L) with bleeding, DIC, obstetric haemorrhage</td></tr>
    </table></div>
    <p>Storage lesions of red cells: falling 2,3-DPG and ATP, potassium leak, haemolysis, microvesicle release. Philippine standards (DOH/PBC) closely follow AABB/WHO for these limits; shelf life depends on the anticoagulant–preservative and bag system actually used.</p>
  `,
  tip: "A complete table is the most efficient answer; check the units of temperature and days carefully.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih44", domain: "ih-donor",
  q: "Discuss the red cell storage lesion and the role of anticoagulant–preservative and additive solutions.",
  tags: ["storage lesion", "2,3-DPG", "CPDA-1", "SAGM"],
  answer: `
    <h4>Anticoagulant–preservatives</h4>
    <div class="table-wrap"><table>
      <tr><th>Constituent</th><th>Function</th></tr>
      <tr><td>Citrate (sodium citrate, citric acid)</td><td>Chelates calcium → anticoagulant</td></tr>
      <tr><td>Phosphate</td><td>Buffer; supports 2,3-DPG and ATP</td></tr>
      <tr><td>Dextrose</td><td>Energy source for glycolysis (ATP)</td></tr>
      <tr><td>Adenine</td><td>Substrate for ATP synthesis — extends storage from 21 (CPD) to 35 days (CPDA-1)</td></tr>
      <tr><td>Mannitol (in SAGM, AS-1, AS-5)</td><td>Membrane stabiliser — reduces haemolysis</td></tr>
      <tr><td>Saline</td><td>Volume and lower viscosity</td></tr>
    </table></div>
    <p>Additive solutions (100 mL added after plasma removal) extend red cell shelf life to <strong>42 days</strong> and allow more plasma recovery.</p>
    <h4>The storage lesion</h4>
    <ul>
      <li><strong>↓ 2,3-DPG</strong> — falls to near zero by ~2 weeks; increases Hb oxygen affinity (left shift), so stored cells release O₂ less well. Regenerates within ~24 h after transfusion.</li>
      <li><strong>↓ ATP</strong> → loss of membrane deformability, spherocytosis, reduced post-transfusion survival.</li>
      <li><strong>↑ plasma K⁺</strong> (Na/K pump inactive at 4 °C) — important in neonates, massive or rapid transfusion, irradiated units.</li>
      <li>↑ free Hb, ↓ pH (lactic acid), microvesicle release, oxidative damage, loss of nitric oxide bioactivity.</li>
    </ul>
    <h4>Quality standard</h4>
    <p>At the end of storage, <strong>≥75% of transfused red cells must survive 24 h</strong> post-transfusion, and haemolysis must be &lt;1% (AABB/FDA; &lt;0.8% in Europe).</p>
    <p>Large RCTs (ABLE, RECESS, INFORM, TRANSFUSE) found <strong>no clinical benefit of fresher blood</strong> in adults, so standard-issue (oldest-first) practice is supported; fresh blood is still preferred for neonatal exchange and IUT.</p>
  `,
  tip: "Mention the 75% 24-hour survival standard and the RCTs showing fresh blood is not better.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih45", domain: "ih-donor",
  q: "Discuss apheresis: principles, types of donor apheresis, and therapeutic plasma exchange indications.",
  tags: ["apheresis", "plasma exchange", "TTP"],
  answer: `
    <h4>Principle</h4>
    <p>Whole blood is withdrawn, anticoagulated (usually <strong>ACD-A</strong>, citrate based), separated into components by <strong>centrifugation</strong> (continuous or intermittent flow) or <strong>membrane filtration</strong>, and the desired fraction is kept or removed while the rest is returned.</p>
    <h4>Donor apheresis</h4>
    <ul>
      <li>Plateletpheresis — one apheresis unit ≈ 4–6 whole-blood-derived units; one donor exposure; can be HLA-matched.</li>
      <li>Plasmapheresis (source plasma, convalescent plasma).</li>
      <li>Double red cell apheresis (2 units).</li>
      <li>Granulocytapheresis (donor stimulated with G-CSF/steroids; irradiate product).</li>
      <li>Peripheral blood stem cell collection.</li>
    </ul>
    <h4>Therapeutic apheresis</h4>
    <p>Therapeutic plasma exchange (TPE) removes pathogenic substances (antibodies, immune complexes, toxins). One plasma volume exchange removes ~63% of an intravascular substance; 1.5 volumes ~78%. Replacement fluid: 5% albumin or plasma (plasma for TTP).</p>
    <div class="table-wrap"><table>
      <tr><th>ASFA category I examples (first-line)</th><th>Rationale</th></tr>
      <tr><td><strong>Thrombotic thrombocytopenic purpura (TTP)</strong></td><td>Removes anti-ADAMTS13 antibody and replaces ADAMTS13 (plasma replacement)</td></tr>
      <tr><td>Guillain–Barré syndrome, myasthenia gravis crisis, CIDP</td><td>Removes autoantibodies</td></tr>
      <tr><td>Anti-GBM disease (Goodpasture) with pulmonary haemorrhage</td><td>Removes anti-GBM</td></tr>
      <tr><td>Hyperviscosity in monoclonal gammopathy</td><td>Removes IgM paraprotein</td></tr>
      <tr><td>Red cell exchange in sickle cell disease (acute stroke, chest syndrome)</td><td>Replaces HbS cells</td></tr>
      <tr><td>Leukapheresis for hyperleukocytosis (category II/III)</td><td>Reduces leukostasis</td></tr>
    </table></div>
    <h4>Complications</h4>
    <p><strong>Citrate toxicity</strong> (hypocalcaemia — perioral tingling; give calcium), vasovagal reactions, hypotension, allergic reactions to plasma, vascular access problems, removal of drugs and clotting factors.</p>
  `,
  tip: "Quote the ASFA categories and the 63% removal with one plasma volume — numbers impress examiners.",
  sources: ["B1", "B2"]
},
{
  id: "ih46", domain: "ih-donor",
  q: "Discuss donor adverse reactions and the care of blood donors.",
  tags: ["donor reactions", "vasovagal", "iron deficiency"],
  answer: `
    <h4>Types of donor reactions</h4>
    <ul>
      <li><strong>Vasovagal reactions</strong> (most common, 2–5%): pallor, sweating, dizziness, nausea, bradycardia, hypotension, syncope (sometimes delayed, after leaving the site). Higher risk in young, first-time, low-weight donors and those with low estimated blood volume. Management: stop donation, lie flat, legs raised, fluids.</li>
      <li><strong>Local injuries</strong>: haematoma, arterial puncture, nerve injury, thrombophlebitis.</li>
      <li><strong>Apheresis-related</strong>: citrate toxicity, haemolysis, air embolism (rare), allergic reactions to ethylene oxide.</li>
      <li><strong>Iron deficiency</strong> in frequent donors: each 450 mL unit removes ~200–250 mg iron. Ferritin testing and iron supplementation programmes are recommended; longer intervals for women.</li>
    </ul>
    <h4>Prevention</h4>
    <ul>
      <li>Pre-donation water (500 mL) and salty snacks; applied muscle tension.</li>
      <li>Accurate donor screening (weight, estimated blood volume — collect ≤15% of total blood volume including samples), comfortable environment.</li>
      <li>Training phlebotomists in venepuncture technique and in recognising reactions.</li>
      <li>Post-donation care: rest 10–15 min, refreshments, advice to avoid strenuous activity and hot environments for several hours, instructions on what to do if feeling unwell.</li>
    </ul>
    <h4>Donor haemovigilance and retention</h4>
    <p>All reactions are recorded and analysed (ISBT/IHN donor complication definitions). A bad first experience strongly reduces return donation; good donor care therefore directly supports the <strong>voluntary donor base</strong> that RA 7719 aims to build. Mobile blood drives in schools and workplaces in the Philippines must have adequate staffing and space for donor care.</p>
  `,
  tip: "Link donor care to donor retention — it shows a systems perspective beyond the clinical facts.",
  sources: ["B8", "B1"]
},
{
  id: "ih47", domain: "ih-donor",
  q: "Compare blood donation types: voluntary non-remunerated, family/replacement, paid, autologous and directed donation.",
  tags: ["voluntary donation", "replacement", "autologous", "directed"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Description</th><th>Advantages</th><th>Disadvantages</th></tr>
      <tr><td><strong>Voluntary non-remunerated (VNRBD)</strong></td><td>Gives freely, no payment or pressure</td><td>Lowest TTI prevalence; regular repeat donors are the safest; WHO goal of 100% VNRBD</td><td>Requires sustained recruitment, education and retention</td></tr>
      <tr><td><strong>Family / replacement</strong></td><td>Relative or friend donates to replace blood used by a patient</td><td>Increases supply where VNRBD is low</td><td>Pressure to conceal risk; higher TTI rates; delays in care; risk of TA-GVHD when relatives give directly; still common in the Philippines</td></tr>
      <tr><td><strong>Paid / commercial</strong></td><td>Donor receives money</td><td>—</td><td>Highest TTI risk; exploitation; phased out by RA 7719</td></tr>
      <tr><td><strong>Autologous</strong> (pre-deposit, acute normovolaemic haemodilution, intra-/post-operative cell salvage)</td><td>Patient's own blood</td><td>No alloimmunisation or TTI (from donors); useful for rare blood types and religious objections (some Jehovah's Witnesses accept cell salvage)</td><td>Pre-deposit causes anaemia; wastage of unused units; clerical errors still possible; bacterial contamination</td></tr>
      <tr><td><strong>Directed</strong></td><td>Donor chosen by patient</td><td>Patient reassurance</td><td>Not safer than VNRBD; must be <strong>irradiated</strong> if from blood relatives</td></tr>
    </table></div>
    <p>Pre-deposit autologous donation has declined in favour of <strong>intra-operative cell salvage</strong> and patient blood management. In the Philippines, the DOH and Philippine Red Cross run campaigns (e.g. "Dugong Bombo", school and LGU-based drives) to replace family replacement donation with voluntary donation.</p>
  `,
  tip: "Stress the WHO goal of 100% voluntary non-remunerated donation and why replacement donors are less safe.",
  sources: ["B8", "B6", "B1"]
},
{
  id: "ih48", domain: "ih-donor",
  q: "Discuss pathogen reduction technologies for blood components: principles, advantages and limitations.",
  tags: ["pathogen reduction", "amotosalen", "riboflavin", "solvent-detergent"],
  answer: `
    <p>Pathogen reduction technologies (PRT) inactivate a broad range of pathogens rather than testing for specific ones — a proactive approach against emerging and untested agents.</p>
    <div class="table-wrap"><table>
      <tr><th>Technology</th><th>Principle</th><th>Products</th></tr>
      <tr><td>Amotosalen + UVA (INTERCEPT)</td><td>Psoralen intercalates into DNA/RNA; UVA forms cross-links → blocks replication</td><td>Platelets, plasma (red cell system in trials)</td></tr>
      <tr><td>Riboflavin + UV (Mirasol)</td><td>Riboflavin + UV light → guanine oxidation, strand breaks</td><td>Platelets, plasma, whole blood</td></tr>
      <tr><td>UVC alone (THERAFLEX)</td><td>Pyrimidine dimers</td><td>Platelets</td></tr>
      <tr><td>Solvent–detergent (Octaplas)</td><td>Disrupts lipid envelopes; pooled plasma</td><td>Plasma (pooled; also dilutes antibodies → less TRALI)</td></tr>
      <tr><td>Methylene blue + light</td><td>Photo-oxidation</td><td>Single-donor plasma</td></tr>
    </table></div>
    <h4>Advantages</h4>
    <ul>
      <li>Inactivates enveloped viruses (HIV, HBV, HCV, dengue, Zika, West Nile), most bacteria, protozoa (malaria, <em>Babesia</em>, <em>T. cruzi</em>).</li>
      <li>Inactivates <strong>leukocytes</strong> → prevents TA-GVHD (substitute for irradiation) and reduces cytokine reactions.</li>
      <li>Reduces bacterial contamination risk of platelets; allows longer storage.</li>
      <li>Potentially could replace some testing (e.g. CMV).</li>
    </ul>
    <h4>Limitations</h4>
    <ul>
      <li>Not effective against <strong>non-enveloped viruses</strong> with high titres (HAV, parvovirus B19, HEV — partially), bacterial spores and prions.</li>
      <li>~10–20% loss of platelet yield/corrected count increment; reduced fibrinogen and FVIII in plasma.</li>
      <li>Cost and logistics — a barrier in low- and middle-income settings such as the Philippines, where it is not routinely used.</li>
      <li>No approved, widely available system for red cells yet.</li>
    </ul>
  `,
  tip: "Point out that PRT also prevents TA-GVHD — a cross-link between topics that earns credit.",
  sources: ["B1", "B11"]
},
{
  id: "ih49", domain: "ih-donor",
  q: "Describe the labelling, traceability and inventory management of blood components in a blood bank.",
  tags: ["ISBT 128", "traceability", "inventory", "wastage"],
  answer: `
    <h4>Labelling</h4>
    <p><strong>ISBT 128</strong> is the international standard for coding blood products: a globally unique donation identification number (DIN), product codes, ABO/Rh, expiry date and time, special attributes (irradiated, CMV-negative, phenotypes) — in barcodes and eye-readable form. It allows electronic checking at every step. Many Philippine facilities still use local (Codabar or manual) labels.</p>
    <h4>Traceability ("vein to vein")</h4>
    <ul>
      <li>Every unit linked to its donor and to each recipient (and the final fate: transfused, discarded, returned).</li>
      <li>Records kept for long periods (e.g. AABB: 10 years; many national rules require 30 years in Europe).</li>
      <li>Supports <strong>look-back</strong> (donor later found infected → trace and notify recipients of previous donations) and <strong>recall</strong> (quarantine co-components).</li>
    </ul>
    <h4>Inventory management</h4>
    <ul>
      <li>Set <strong>ideal and minimum stock levels</strong> by ABO/Rh, based on daily usage (e.g. 5–7 days' supply).</li>
      <li><strong>FIFO / FEFO</strong> (first in / first expiring out) rotation.</li>
      <li>Crossmatch-to-transfusion (C:T) ratio — ideally &lt;2.0; use the Maximum Surgical Blood Ordering Schedule (MSBOS) and type-and-screen to reduce reserved units.</li>
      <li>Wastage monitoring (expiry, temperature excursions, breakage) as a quality indicator.</li>
      <li>Blood service networks share stock between hospitals to prevent expiry — encouraged under AO 2010-0001.</li>
      <li>Emergency stock and contingency planning for disasters (typhoons, earthquakes) and outbreaks (dengue season platelet demand).</li>
    </ul>
    <h4>Temperature control</h4>
    <p>Monitored refrigerators, freezers, platelet agitators, validated transport boxes, continuous recording with alarms; units outside temperature limits for more than the allowed time are discarded.</p>
  `,
  tip: "Include the C:T ratio and MSBOS — practical inventory tools examiners recognise.",
  sources: ["B1", "B5", "B7"]
},
{
  id: "ih50", domain: "ih-donor",
  q: "Discuss the investigation of a donor who is repeatedly reactive on a screening test for HIV, HBV or HCV, including look-back.",
  tags: ["reactive donor", "confirmatory testing", "look-back", "counselling"],
  answer: `
    <h4>Laboratory algorithm</h4>
    <ol>
      <li>Initial reactive screen → <strong>repeat in duplicate</strong> on the same sample.</li>
      <li>If either repeat is reactive → <strong>repeatedly reactive</strong>: discard the unit and all components; quarantine co-components.</li>
      <li>Refer the sample for <strong>supplementary/confirmatory testing</strong> — for HIV in the Philippines, at the DOH-designated <strong>STD/AIDS Cooperative Central Laboratory (SACCL)</strong> at San Lazaro Hospital, which is the NRL for HIV confirmation (using rapid-test algorithms/line immunoassay or Western blot as per current DOH algorithm); HBV: HBsAg neutralisation, NAT; HCV: immunoblot or HCV RNA.</li>
      <li>Interpret: confirmed positive, false positive (biological false reactivity), or indeterminate (request follow-up sample).</li>
    </ol>
    <h4>Donor management</h4>
    <ul>
      <li>Defer the donor (temporarily or permanently according to results).</li>
      <li><strong>Notification and counselling</strong> in confidence, with referral for medical care. In the Philippines, HIV results must be handled under the <strong>Philippine HIV and AIDS Policy Act (RA 11166, 2018)</strong> confidentiality provisions.</li>
      <li>Report to public health authorities as required.</li>
    </ul>
    <h4>Look-back</h4>
    <p>For a donor who <strong>seroconverts</strong> (previous donations negative), identify prior donations made within a defined period (e.g. the window period or 12 months before the last negative test), trace the components, and notify the recipients' physicians so recipients can be tested and treated. Also report the event through haemovigilance.</p>
    <h4>Recipient-triggered trace-back</h4>
    <p>If a recipient develops an infection possibly due to transfusion, all donors of units received are traced and retested.</p>
  `,
  tip: "Distinguish 'repeatedly reactive' from 'confirmed positive' — screening is never reported as a diagnosis.",
  sources: ["B8", "B1", "B7"]
},
{
  id: "ih51", domain: "ih-clinical", star: true,
  q: "Discuss the classification and laboratory diagnosis of autoimmune haemolytic anaemia (warm, cold and mixed types).",
  tags: ["AIHA", "warm", "cold agglutinin", "PCH"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>Warm AIHA</th><th>Cold agglutinin disease (CAD)</th><th>Paroxysmal cold haemoglobinuria (PCH)</th></tr>
      <tr><td>Frequency</td><td>~70%</td><td>~15–25%</td><td>Rare; mostly children after viral infection</td></tr>
      <tr><td>Antibody</td><td>IgG (IgG1, IgG3), optimal 37 °C</td><td>IgM, optimal 4 °C, thermal amplitude up to 30–37 °C</td><td>IgG <strong>biphasic</strong> Donath–Landsteiner antibody</td></tr>
      <tr><td>Specificity</td><td>Broad, often Rh-related (e)</td><td>Anti-I (anti-i in EBV)</td><td>Anti-P</td></tr>
      <tr><td>DAT</td><td>IgG ± C3</td><td>C3 only</td><td>C3 only</td></tr>
      <tr><td>Haemolysis</td><td>Extravascular (spleen)</td><td>Extravascular (liver, C3b) ± intravascular</td><td>Intravascular</td></tr>
      <tr><td>Causes</td><td>Idiopathic; SLE, CLL, lymphoma, drugs, post-HSCT</td><td>Primary clonal B-cell disorder; secondary to <em>Mycoplasma</em>, EBV, lymphoma</td><td>Viral infections; historically syphilis</td></tr>
      <tr><td>Film</td><td>Spherocytes</td><td>Agglutination (red cell clumps); falsely high MCV/MCHC</td><td>Spherocytes, erythrophagocytosis</td></tr>
    </table></div>
    <h4>Laboratory diagnosis</h4>
    <ol>
      <li>Evidence of haemolysis: low Hb, high reticulocytes, high unconjugated bilirubin, high LDH, low haptoglobin.</li>
      <li><strong>DAT</strong> with monospecific reagents; elution in warm AIHA (pan-reactive eluate).</li>
      <li>CAD: cold agglutinin titre (≥64 at 4 °C) and thermal amplitude; keep samples at 37 °C to avoid in-vitro agglutination.</li>
      <li>PCH: <strong>Donath–Landsteiner test</strong> — patient serum + P+ red cells at 4 °C then 37 °C, with fresh complement → haemolysis.</li>
      <li>DAT-negative AIHA (5–10%): low-affinity IgG, IgA, or low IgG numbers — use cold washes, IgA reagents, flow cytometry, DAT ELISA.</li>
      <li>Investigate underlying disease (protein electrophoresis, lymphoma work-up, ANA).</li>
    </ol>
    <p>Mixed AIHA: features of both warm IgG and high-thermal-amplitude cold antibody.</p>
  `,
  tip: "The three-column comparison (warm, CAD, PCH) with DAT pattern is the essential core.",
  sources: ["B13", "B1", "B2"]
},
{
  id: "ih52", domain: "ih-clinical",
  q: "Discuss drug-induced immune haemolytic anaemia: mechanisms, examples and laboratory investigation.",
  tags: ["drug-induced haemolysis", "ceftriaxone", "piperacillin", "methyldopa"],
  answer: `
    <h4>Mechanisms</h4>
    <div class="table-wrap"><table>
      <tr><th>Mechanism</th><th>Description</th><th>Examples</th><th>DAT / serology</th></tr>
      <tr><td>Drug-dependent: <strong>drug adsorption (hapten)</strong></td><td>Drug binds firmly to red cell membrane; antibody against drug–membrane complex</td><td>High-dose IV penicillin, some cephalosporins</td><td>IgG ± C3; eluate reacts only with drug-treated cells</td></tr>
      <tr><td>Drug-dependent: <strong>immune complex / drug-dependent antibody</strong></td><td>Antibody reacts with red cells only in presence of drug in solution; often activates complement → acute intravascular haemolysis, renal failure</td><td><strong>Ceftriaxone</strong> (especially children), piperacillin, quinine, rifampicin (still relevant in TB treatment), diclofenac</td><td>C3 ± IgG; test serum + cells in the presence of drug</td></tr>
      <tr><td>Drug-independent: <strong>autoantibody induction</strong></td><td>Drug induces true red cell autoantibody — serologically identical to warm AIHA</td><td>Methyldopa, fludarabine, levodopa, immune checkpoint inhibitors</td><td>IgG; reacts without drug</td></tr>
      <tr><td><strong>Non-immunological protein adsorption</strong></td><td>Drug modifies membrane so plasma proteins attach — positive DAT without haemolysis (usually)</td><td>Cephalothin, cisplatin, β-lactamase inhibitors (clavulanate, tazobactam)</td><td>Positive DAT with many proteins</td></tr>
    </table></div>
    <h4>Laboratory investigation</h4>
    <ol>
      <li>Drug history — timing of haemolysis in relation to drug administration.</li>
      <li>DAT with monospecific reagents; elution (eluate often non-reactive with untreated cells in drug-dependent types).</li>
      <li>Test patient serum and eluate against <strong>drug-treated red cells</strong> and against untreated cells in the <strong>presence of drug solution</strong>, with controls (normal serum).</li>
      <li>Haemolysis markers and renal function.</li>
    </ol>
    <h4>Management</h4>
    <p>Stop the drug immediately (main treatment); supportive care; transfusion if needed (crossmatch compatible without drug). The patient must avoid the drug and related compounds in future.</p>
    <p>Distinguish from <strong>oxidant haemolysis in G6PD deficiency</strong> (primaquine, dapsone, nitrofurantoin, fava beans) — DAT negative, bite cells and Heinz bodies — common in the Philippines.</p>
  `,
  tip: "Name ceftriaxone and piperacillin as current leading causes — examiners want modern examples.",
  sources: ["B1", "B2", "B13"]
},
{
  id: "ih53", domain: "ih-clinical",
  q: "Discuss evidence-based red cell transfusion thresholds and the concept of patient blood management (PBM).",
  tags: ["PBM", "transfusion thresholds", "restrictive"],
  answer: `
    <h4>Transfusion thresholds</h4>
    <p>The <strong>2023 AABB International Guidelines</strong> (based on more than 45 randomised trials) recommend a <strong>restrictive strategy</strong>:</p>
    <ul>
      <li>Hospitalised, haemodynamically stable adults: consider transfusion when Hb &lt;<strong>70 g/L</strong>.</li>
      <li>Cardiac surgery and pre-existing cardiovascular disease: &lt;<strong>75–80 g/L</strong>.</li>
      <li>Orthopaedic surgery: &lt;80 g/L.</li>
      <li>Acute myocardial infarction: evidence (MINT trial 2023) suggests a more liberal threshold (~100 g/L) may be beneficial — a recognised exception.</li>
      <li>Haematological malignancy, preterm neonates and children: restrictive thresholds also supported.</li>
    </ul>
    <p>Thresholds are guides; decisions must consider symptoms, bleeding, and physiology. Transfuse <strong>one unit at a time</strong> and reassess ("single-unit policy").</p>
    <h4>Patient blood management (WHO, 2021 policy brief)</h4>
    <p>A patient-centred, evidence-based approach to improve outcomes by managing and preserving the patient's own blood. Three pillars:</p>
    <ol>
      <li><strong>Optimise red cell mass</strong>: detect and treat pre-operative anaemia (iron deficiency — IV iron, B12/folate, ESA where appropriate).</li>
      <li><strong>Minimise blood loss</strong>: meticulous surgical haemostasis, tranexamic acid, cell salvage, reduced diagnostic phlebotomy (small-volume tubes), management of anticoagulants, viscoelastic-guided therapy.</li>
      <li><strong>Harness and optimise physiological tolerance of anaemia</strong>: restrictive thresholds, oxygen delivery optimisation.</li>
    </ol>
    <h4>Benefits and implementation</h4>
    <p>Lower transfusion rates, fewer complications, shorter stays and cost savings. Requires hospital transfusion committee, audit of transfusion practice (appropriateness), clinician education and decision support in order sets. For a blood-supply-limited country such as the Philippines, PBM also eases shortages.</p>
  `,
  tip: "Name the three pillars and cite the 70 g/L threshold with its exceptions (cardiac surgery, AMI).",
  sources: ["B12", "B1"]
},
{
  id: "ih54", domain: "ih-clinical",
  q: "Discuss platelet transfusion: indications, dosing, assessment of response and the investigation of platelet refractoriness.",
  tags: ["platelets", "CCI", "refractoriness", "dengue"],
  answer: `
    <h4>Indications (thresholds, adults)</h4>
    <ul>
      <li>Prophylaxis in hypoproliferative thrombocytopenia (chemotherapy): &lt;<strong>10 × 10⁹/L</strong>.</li>
      <li>Central venous catheter placement: &lt;20 × 10⁹/L.</li>
      <li>Lumbar puncture: &lt;50 × 10⁹/L (some guidelines 40); major surgery &lt;50; neurosurgery or eye surgery &lt;100.</li>
      <li>Active bleeding with thrombocytopenia or platelet dysfunction.</li>
    </ul>
    <h4>Contraindications / caution</h4>
    <p>TTP and HIT (risk of thrombosis) unless life-threatening bleeding; ITP (short benefit). <strong>Dengue</strong>: WHO guidelines do not recommend prophylactic platelet transfusion in stable patients, even with very low counts — a major local issue since dengue drives high platelet demand in the Philippines; transfusion is reserved for significant bleeding.</p>
    <h4>Dose and response</h4>
    <p>Adult dose: one apheresis unit or a pool of 4–6 whole-blood-derived units. Expected rise ~20–40 × 10⁹/L.</p>
    <div class="calc">CCI = (post count − pre count) [×10⁹/L] × BSA (m²) / platelets transfused (×10¹¹)
Example: (30 − 5) × 1.8 / 3.0 = 15 → (×10³) CCI = 15,000 → adequate
CCI at 1 h &lt; 5,000–7,500 on two occasions = refractoriness</div>
    <h4>Refractoriness</h4>
    <ul>
      <li><strong>Non-immune</strong> (~80%): fever, sepsis, DIC, splenomegaly, bleeding, drugs (amphotericin, vancomycin), VOD. Poor 18–24-h CCI with acceptable 1-h CCI suggests non-immune consumption.</li>
      <li><strong>Immune</strong>: HLA class I antibodies (most), HPA antibodies, ABO incompatibility. Poor 1-h CCI.</li>
    </ul>
    <p>Investigation: 1-h post-count, HLA antibody screen (Luminex), HPA antibodies. Management: HLA-matched, antibody-specificity-prediction (antigen-negative) or crossmatch-compatible platelets; ABO-identical, fresh units.</p>
  `,
  tip: "Show the CCI calculation and the 1-h vs 24-h interpretation — and mention dengue locally.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih55", domain: "ih-clinical",
  q: "Discuss the use of plasma, cryoprecipitate and plasma derivatives in managing coagulopathy.",
  tags: ["FFP", "cryoprecipitate", "PCC", "fibrinogen"],
  answer: `
    <h4>Fresh frozen plasma</h4>
    <ul>
      <li>Contains all coagulation factors; dose <strong>10–15 mL/kg</strong> raises factor levels by ~10–20%.</li>
      <li>Indications: bleeding with multiple factor deficiency (liver disease, DIC, massive transfusion), TTP (plasma exchange), replacement of rare single factors when concentrates are unavailable.</li>
      <li><strong>Not indicated</strong>: correcting a mildly raised INR before minor procedures (INR &lt;1.5–1.7 does not predict bleeding), volume expansion, nutritional support, warfarin reversal when PCC is available.</li>
    </ul>
    <h4>Cryoprecipitate</h4>
    <ul>
      <li>Rich in fibrinogen, factor VIII, vWF, factor XIII and fibronectin.</li>
      <li>Main use: <strong>hypofibrinogenaemia</strong> (&lt;1.5 g/L in bleeding; &lt;2 g/L in obstetric haemorrhage) — DIC, massive transfusion, post-partum haemorrhage, cardiac surgery.</li>
      <li>Dose: 1 unit per 5–10 kg (typical adult pool of 10 units) raises fibrinogen by ~0.5–1 g/L.</li>
      <li>Historically used for haemophilia A and vWD — now replaced by virus-inactivated concentrates.</li>
    </ul>
    <h4>Plasma derivatives (fractionated, virus-inactivated)</h4>
    <div class="table-wrap"><table>
      <tr><th>Product</th><th>Uses</th></tr>
      <tr><td>4-factor prothrombin complex concentrate (II, VII, IX, X)</td><td>Urgent reversal of warfarin (with IV vitamin K); also used off-label for factor Xa inhibitor bleeding</td></tr>
      <tr><td>Fibrinogen concentrate</td><td>Congenital or acquired hypofibrinogenaemia</td></tr>
      <tr><td>Factor VIII, IX concentrates; recombinant products; emicizumab</td><td>Haemophilia A and B</td></tr>
      <tr><td>Albumin 5% / 20–25%</td><td>Large-volume paracentesis, plasma exchange, SBP, burns</td></tr>
      <tr><td>IVIG</td><td>Immunodeficiency, ITP, FNAIT, Kawasaki disease, GBS</td></tr>
      <tr><td>Hyperimmune globulins</td><td>Anti-D (RhIG), HBIG, rabies (RIG — important in the Philippines), tetanus</td></tr>
    </table></div>
    <p>Viscoelastic testing (TEG, ROTEM) allows targeted rather than formula-based replacement.</p>
  `,
  tip: "State what FFP should NOT be used for — inappropriate plasma use is a favourite audit topic.",
  sources: ["B1", "B2"]
},
{
  id: "ih56", domain: "ih-clinical",
  q: "Discuss transfusion support in thalassaemia major and sickle cell disease.",
  tags: ["thalassaemia", "sickle cell", "alloimmunisation", "chronic transfusion"],
  answer: `
    <h4>Thalassaemia major (common in the Philippines)</h4>
    <ul>
      <li><strong>Regular transfusions</strong> every 2–5 weeks to keep <strong>pre-transfusion Hb 95–105 g/L</strong> (TIF guidelines): suppresses ineffective erythropoiesis, prevents bone deformity and extramedullary haematopoiesis, allows normal growth.</li>
      <li>Before first transfusion: <strong>extended red cell phenotype or genotype</strong> (ABO, Rh C/c, E/e, K, plus Jk, Fy, S/s, Mia locally).</li>
      <li>Give <strong>leukoreduced</strong>, ABO/Rh(C, E, c, e)/K-matched red cells, &lt;2 weeks old where possible.</li>
      <li>Monitor: alloantibody screening before each transfusion, annual transfusion requirement (&gt;200 mL/kg/year suggests hypersplenism or alloimmunisation), iron overload (ferritin, MRI T2*) with chelation, TTI serology.</li>
    </ul>
    <h4>Sickle cell disease</h4>
    <ul>
      <li>Indications: acute chest syndrome, stroke (and primary stroke prevention by transcranial Doppler), aplastic crisis (parvovirus B19), splenic sequestration, pre-operative preparation (to Hb 100 g/L).</li>
      <li><strong>Simple vs exchange transfusion</strong>: exchange lowers HbS (target &lt;30%) without raising viscosity; avoid post-transfusion Hb &gt;100–110 g/L.</li>
      <li>Units: HbS-negative, Rh (C, E) and K-matched, leukoreduced.</li>
      <li>High alloimmunisation rate (partly due to donor–recipient antigen differences across ethnic groups); risk of <strong>hyperhaemolysis</strong>.</li>
    </ul>
    <h4>Alloimmunisation — why it matters</h4>
    <p>Multiple antibodies make finding compatible blood difficult, delay transfusion and cause DHTR. Prophylactic matching reduces alloimmunisation from ~20–30% to a few percent. Registry of patient antibodies and rare donors is essential. In the Philippines, the Philippine Society of Hematology and Blood Transfusion and thalassaemia support groups advocate dedicated thalassaemia centres with these services.</p>
  `,
  tip: "Give the TIF pre-transfusion Hb target and the reason for extended phenotyping before the first transfusion.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih57", domain: "ih-clinical",
  q: "Discuss the immunohaematology of ABO-incompatible haematopoietic stem cell transplantation and transfusion support for HSCT patients.",
  tags: ["HSCT", "ABO-incompatible", "pure red cell aplasia", "chimerism"],
  answer: `
    <h4>Types of ABO incompatibility</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Example (donor → recipient)</th><th>Problem</th><th>Mitigation</th></tr>
      <tr><td><strong>Major</strong></td><td>A → O</td><td>Recipient anti-A destroys donor red cells: acute haemolysis at infusion; delayed red cell engraftment; <strong>pure red cell aplasia</strong></td><td>Red cell depletion of graft; plasma exchange to lower recipient titres</td></tr>
      <tr><td><strong>Minor</strong></td><td>O → A</td><td>Donor plasma anti-A; <strong>passenger lymphocyte syndrome</strong> — donor B lymphocytes make anti-A 5–15 days after transplant → haemolysis of recipient cells</td><td>Plasma depletion of graft; monitor DAT and Hb days 5–15</td></tr>
      <tr><td><strong>Bidirectional</strong></td><td>A → B</td><td>Both</td><td>Both</td></tr>
    </table></div>
    <h4>Transfusion support (choose components compatible with BOTH donor and recipient during transition)</h4>
    <ul>
      <li>Major mismatch (A → O): red cells group O; plasma and platelets group A (or AB).</li>
      <li>Minor mismatch (O → A): red cells group O; plasma group A (or AB).</li>
      <li>Bidirectional (A → B): red cells O; plasma AB.</li>
      <li>Switch to donor group once recipient antibodies disappear and DAT is negative and forward group is donor type.</li>
    </ul>
    <h4>Other requirements</h4>
    <p><strong>Irradiated</strong> components (from conditioning onward), leukoreduced/CMV-safe, HLA-matched platelets for refractoriness. Laboratory monitoring: ABO forward/reverse group changes (mixed field), DAT, isohaemagglutinin titres, and <strong>chimerism studies</strong> (STR analysis) to document engraftment.</p>
  `,
  tip: "Passenger lymphocyte syndrome (minor mismatch, day 5–15) is the high-yield phenomenon.",
  sources: ["B1", "B2"]
},
{
  id: "ih58", domain: "ih-clinical",
  q: "Describe the elements of a quality management system in a blood bank / transfusion service.",
  tags: ["quality management", "GMP", "ISO 15189", "validation"],
  answer: `
    <p>A quality management system (QMS) ensures that every unit and every test is safe, effective and traceable. The AABB Quality System Essentials and WHO / ISO 15189 frameworks share these elements:</p>
    <ol>
      <li><strong>Organisation and leadership</strong> — quality policy, a quality manager independent of operations, management review.</li>
      <li><strong>Resources and personnel</strong> — qualification, training, competency assessment (at least annually), job descriptions.</li>
      <li><strong>Equipment</strong> — selection, installation/operational/performance qualification, calibration, preventive maintenance (centrifuges, refrigerators, agitators, irradiators).</li>
      <li><strong>Supplier and customer issues</strong> — qualified suppliers, reagent acceptance testing (e.g. daily reactivity check of antisera and reagent cells).</li>
      <li><strong>Process control</strong> — written SOPs, <strong>validation</strong> of new processes and computer systems, change control, QC of components and reagents, proficiency testing (EQA).</li>
      <li><strong>Documents and records</strong> — controlled documents, retention, traceability.</li>
      <li><strong>Deviations, non-conformances and adverse events</strong> — reporting, investigation (root-cause analysis, fishbone), corrective and preventive action (CAPA).</li>
      <li><strong>Assessments</strong> — internal audits, external inspections (DOH licensing/HFSRB), accreditation.</li>
      <li><strong>Process improvement</strong> — quality indicators (wastage, C:T ratio, sample rejection, reaction rates, turnaround time), PDCA cycles.</li>
      <li><strong>Facilities and safety</strong> — biosafety, environmental monitoring, disaster plans.</li>
    </ol>
    <p>In the Philippines, blood service facilities are licensed by the DOH (AO 2008-0008), and the NKTI serves as the National Reference Laboratory for haematology and immunohaematology, providing EQA. Blood centres also adopt <strong>Good Manufacturing Practice</strong> principles since blood components are regulated as biological products.</p>
  `,
  tip: "List the quality system essentials with a concrete blood-bank example under each one.",
  sources: ["B1", "B5", "B7"]
},
{
  id: "ih59", domain: "ih-clinical",
  q: "Short note: Jehovah's Witness patients and bloodless medicine — ethical and practical considerations for the transfusion service.",
  tags: ["ethics", "consent", "bloodless medicine"],
  answer: `
    <h4>Ethical principles</h4>
    <ul>
      <li>A competent adult has the right to <strong>refuse</strong> treatment, including transfusion, even if refusal may lead to death — respect for autonomy.</li>
      <li>Consent must be informed and documented (advance directives, "No Blood" card).</li>
      <li>For <strong>minors</strong>, most legal systems allow courts or the state to authorise life-saving transfusion in the child's best interests; institutional policy and legal advice are essential.</li>
      <li>In emergencies without known wishes, clinicians act in the patient's best interests.</li>
    </ul>
    <h4>What is acceptable (individual choice varies)</h4>
    <p>Whole blood, red cells, white cells, platelets and plasma are usually refused. "Fractions" (albumin, IVIG, clotting factor concentrates, cryoprecipitate, recombinant products) and procedures such as <strong>cell salvage</strong> in a continuous circuit, haemodilution, dialysis and cardiopulmonary bypass are matters of individual conscience — each must be discussed with the patient specifically.</p>
    <h4>Practical strategies (bloodless medicine / PBM)</h4>
    <ul>
      <li>Pre-operative optimisation: IV iron, erythropoiesis-stimulating agents, vitamin B12/folate.</li>
      <li>Minimise phlebotomy (paediatric tubes, point-of-care tests).</li>
      <li>Surgical techniques: meticulous haemostasis, tranexamic acid, topical haemostats, minimally invasive surgery, staged procedures.</li>
      <li>Recombinant factor VIIa, fibrinogen (if acceptable), hyperbaric oxygen in extreme anaemia.</li>
    </ul>
    <p>The blood bank's role: documentation, advice on component and derivative alternatives, and supporting the clinical team's PBM planning. The principles of PBM developed for these patients now benefit all patients.</p>
  `,
  tip: "Show balance: respect autonomy for adults, special rules for minors, and PBM strategies.",
  sources: ["B12", "B1"]
},
{
  id: "ih60", domain: "ih-clinical",
  keypoints: ["positive DAT","without haemolysis","hypergammaglobulinaemia","IVIG","complement","drugs","passive antibody","recent transfusion","EDTA","monospecific","haemolysis markers","elution","not routine pretransfusion"],
  q: "Discuss the investigation of a positive DAT in a patient without haemolysis, and the clinical significance of the DAT.",
  tags: ["DAT", "interpretation", "positive DAT without haemolysis"],
  answer: `
    <p>A positive DAT is found in up to 1 in 1000 healthy blood donors and in up to 15% of hospital patients. Most of these are <strong>not haemolysing</strong>. The DAT shows that red cells are coated with IgG and/or complement — it does not prove immune haemolysis.</p>
    <h4>Causes of a positive DAT without haemolysis</h4>
    <ul>
      <li>Hypergammaglobulinaemia (HIV, liver disease, myeloma), IVIG therapy — non-specific IgG uptake.</li>
      <li>Complement activation (C3d) in infections, SLE, cold agglutinins at low thermal amplitude.</li>
      <li>Drugs causing protein adsorption (β-lactamase inhibitors) or autoantibody (methyldopa).</li>
      <li>Passive antibody: RhIG, out-of-group plasma or platelets (anti-A/B), IVIG.</li>
      <li>Antilymphocyte globulin, daratumumab (weak).</li>
      <li>Recent transfusion with alloantibody (delayed serologic reaction).</li>
      <li>Collection in clotted, refrigerated samples (in vitro C3 uptake).</li>
    </ul>
    <h4>Approach</h4>
    <ol>
      <li>Confirm on an <strong>EDTA</strong> sample; monospecific IgG and C3d reagents.</li>
      <li>Check haemolysis markers (Hb, reticulocytes, bilirubin, LDH, haptoglobin, film).</li>
      <li>History: transfusions in last 3 months, drugs, IVIG, RhIG, underlying disease.</li>
      <li><strong>Elution</strong> if recently transfused (to detect alloantibody — DHTR/DSTR) or if haemolysis is present.</li>
      <li>If no haemolysis and no recent transfusion: no further work-up is usually needed; document and monitor.</li>
    </ol>
    <h4>Significance of the DAT</h4>
    <p>Required for: HDFN, transfusion reaction work-up, AIHA diagnosis, drug-induced haemolysis. It is <strong>not</strong> recommended as part of routine pretransfusion testing (autocontrol/DAT has very low predictive value). The strength of the DAT correlates only loosely with severity of haemolysis.</p>
  `,
  tip: "Lead with the message 'positive DAT ≠ haemolysis' and then justify when to do an eluate.",
  sources: ["B1", "B2", "B13"]
}
);
