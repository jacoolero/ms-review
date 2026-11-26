/* Immunohematology — blood group systems, part C: ih181–ih190 */
window.QBANK.push(
{
  id: "ih181", domain: "ih-groups", star: true,
  q: "Interpret the ABO and Rh antigen frequencies of Filipino donors and explain how they shape inventory, matching and antibody risk.",
  tags: ["Filipino", "ABO frequency", "Rh phenotype", "inventory"],
  keypoints: ["group O", "group B", "D-negative", "less than 1%", "e antigen", "C antigen", "c antigen", "E antigen", "anti-E", "anti-c", "phenotype", "D-negative females", "extended matching", "local data", "two anti-D reagents", "donor recruitment"],
  answer: `
    <h4>ABO and Rh frequencies</h4>
    <p>Philippine donor series consistently show group O as the most common (about 45%), followed by B (25–28%), A (22–25%) and AB (4–6%). This differs from European populations, where A is usually second. D-negative donors are uncommon, generally &lt;1%, so almost all units are D-positive. Among Rh antigens, e is present in about 98% and C in 85–90%, while c is about 55–60% and E about 20–25%; exact figures vary between regions and ethnic groups.</p>
    <div class="table-wrap"><table>
      <tr><th>Group</th><th>Approximate frequency</th><th>Inventory implication</th></tr>
      <tr><td>O</td><td>45%</td><td>Universal red cells; plasma contains anti-A and anti-B</td></tr>
      <tr><td>B</td><td>25–28%</td><td>Reliable group-specific stock; anti-A in plasma</td></tr>
      <tr><td>A</td><td>22–25%</td><td>Group A and O red cells are compatible</td></tr>
      <tr><td>AB</td><td>4–6%</td><td>Universal plasma, but few donors</td></tr>
    </table></div>
    <h4>Consequences for inventory</h4>
    <p>Group O red cells are the universal emergency supply, but group O plasma contains anti-A and anti-B and should not be used for non-O recipients. Group AB plasma is the universal plasma, yet AB donors are scarce. Because e is nearly universal, anti-e is rare, whereas anti-E and anti-c are the common Rh alloantibodies seen in Filipino patients. D-negative units must be reserved for D-negative females of childbearing potential and for patients with anti-D; males and older patients may receive D-positive units in emergencies when D-negative stock is exhausted.</p>
    <h4>Matching and quality</h4>
    <ul>
      <li>Phenotype D-negative donors for C, c, E and e so that antigen-negative units can be found without delay.</li>
      <li>Use two anti-D reagents and weak D testing; record the phenotype in the donor file.</li>
      <li>For chronically transfused thalassaemia and sickle cell patients, extend matching to C, c, E, e and K.</li>
      <li>Review local frequencies annually; do not import Caucasian panel assumptions.</li>
    </ul>
    <p>Accurate local data support donor recruitment, inventory planning and antibody investigation, and they reduce the risk of alloimmunisation in repeatedly transfused patients.</p>
  `,
  tip: "Use local frequencies, not Caucasian figures, and link each one to a concrete inventory decision.",
  sources: ["B2", "B14", "B17", "B3"]
},
{
  id: "ih182", domain: "ih-groups", star: true,
  q: "Discuss weak D and partial D in Filipino donors and patients, including DEL, donor labelling and the role of RHD genotyping.",
  tags: ["weak D", "partial D", "DEL", "Filipino donors"],
  keypoints: ["weak D", "partial D", "DEL", "RHD*1227A", "epitopes", "antigen density", "adsorption-elution", "two anti-D reagents", "indirect antiglobulin", "D-positive label", "RHD genotyping", "mistyping weak D as D-negative", "D-negative blood", "monoclonal anti-D", "referral centre", "donor policy"],
  answer: `
    <h4>Weak D in the donor room</h4>
    <p>Weak D results from reduced D antigen density with all epitopes preserved. In donors, the practical risk is mistyping a weak D unit as D-negative and transfusing it into a D-negative recipient who may form anti-D. Donor red cells are therefore tested with two anti-D reagents and, when the result is weak or discrepant, by indirect antiglobulin technique or adsorption–elution. A confirmed weak D donor is labelled D-positive; the unit is not placed in the D-negative inventory.</p>
    <h4>DEL and partial D</h4>
    <p>The Asian-type DEL allele RHD*1227A is common among serologically D-negative people in East and Southeast Asia, including Filipinos. DEL is detected only after adsorption and elution, and its units can immunise some D-negative recipients. Partial D phenotypes such as DVI, DAR and DAU lack epitopes and can stimulate anti-D; monoclonal anti-D may fail to detect them. Donors with partial D must be managed as D-positive. National or institutional policy should state how DEL donors are labelled and whether their units may be given to D-negative women.</p>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>Serology</th><th>Donor action</th></tr>
      <tr><td>Weak D types 1–3</td><td>Weak reaction, all epitopes</td><td>Label D-positive</td></tr>
      <tr><td>Partial D</td><td>May type as D-positive</td><td>Label D-positive; do not use as D-negative</td></tr>
      <tr><td>DEL</td><td>D-negative by routine methods</td><td>Follow written local policy; genotyping if available</td></tr>
      <tr><td>True D-negative</td><td>No D</td><td>D-negative inventory</td></tr>
    </table></div>
    <h4>Patients and pregnancy</h4>
    <p>For patients, a weak D reaction is not automatically D-positive. RHD genotyping distinguishes weak D types 1, 2 and 3, which can be managed as D-positive, from partial D and DEL, which require D-negative blood and Rh immunoglobulin in pregnancy. Until genotyping is available, treat the patient as D-negative. In the Philippines, genotyping is limited to referral centres, so clear documentation and communication with the obstetrician are essential.</p>
    <ul>
      <li>Do not report a weak D as D-negative without the correct policy.</li>
      <li>Record reagent clones and method.</li>
      <li>Counsel known partial D donors.</li>
    </ul>
  `,
  tip: "The donor and patient policies diverge: donors are labelled D-positive, patients are treated as D-negative until genotyped.",
  sources: ["B1", "B3", "B4", "B14", "S33"]
},
{
  id: "ih183", domain: "ih-groups", star: true,
  q: "Explain how RA 7719, the Philippine Blood Coordinating Council and a rare donor registry work together to secure blood for patients with antibodies to high-prevalence antigens.",
  tags: ["RA 7719", "PBCC", "rare donor registry", "high-prevalence antigen"],
  keypoints: ["RA 7719", "voluntary donation", "Philippine National Blood Services", "DOH AO 9", "AO 2005-0002", "local blood councils", "PBCC", "rare donor registry", "anti-Vel", "anti-Lan", "anti-Jr(a)", "glycerol", "deglycerolisation", "family donors", "consent", "referral"],
  answer: `
    <h4>The legal framework</h4>
    <p>RA 7719, the National Blood Services Act of 1994, promotes voluntary non-remunerated blood donation and phases out commercial blood banking. It establishes the Philippine National Blood Services and requires licensed blood service facilities to follow DOH standards. Its IRR is DOH AO 9 s. 1995, while AO 2005-0002 develops the national service and AO 2010-0002 strengthens local blood councils. The PBCC supports standards, training and quality improvement across the network.</p>
    <h4>Why a rare donor registry</h4>
    <p>A registry is needed when a patient has an antibody to a high-prevalence antigen, such as anti-Vel, anti-Lan, anti-Jr(a), anti-Co3, anti-Ku or anti-Ok(a), or when several antibodies coexist. Compatible units may be almost impossible to find in the routine inventory. The registry identifies donors by phenotype or genotype, obtains consent for future contact, and stores red cells frozen with glycerol at −65 °C or colder for later deglycerolisation.</p>
    <div class="table-wrap"><table>
      <tr><th>Step</th><th>Action</th><th>Quality point</th></tr>
      <tr><td>Identify</td><td>Confirm antibody and exclude autoantibody</td><td>Reference panel and adsorption</td></tr>
      <tr><td>Recruit</td><td>Test siblings and extended family</td><td>Consent and confidentiality</td></tr>
      <tr><td>Freeze</td><td>Glycerolise and store below −65 °C</td><td>Record unit and antigen profile</td></tr>
      <tr><td>Retrieve</td><td>Thaw, deglycerolise and issue</td><td>Validate recovery and sterility</td></tr>
    </table></div>
    <h4>Operating the registry</h4>
    <ul>
      <li>Confirm the antibody and exclude autoantibody before labelling a donor rare.</li>
      <li>Test siblings and extended family early; they are the most likely match.</li>
      <li>Record the antigen profile, contact details and consent.</li>
      <li>Maintain frozen inventory, thaw only when needed, and audit recovery.</li>
      <li>Share requests through PBCC and the national blood network.</li>
    </ul>
    <p>In Philippine practice, funding, freezer capacity and donor attrition limit the registry. Hospitals should still report rare donors, keep a local list and plan elective surgery in advance. Ethical practice means no coercion, confidentiality and recognition that a rare donor is a long-term partner, not a one-time source.</p>
  `,
  tip: "Keep the law, the coordinating body and the registry operational steps distinct in your answer.",
  sources: ["B6", "B7", "B14", "B15", "B16", "B17"]
},
{
  id: "ih184", domain: "ih-groups", star: true,
  q: "Discuss access to Rh immune globulin in the Philippines: indications, dose, fetomaternal haemorrhage assessment and stewardship of a scarce product.",
  tags: ["RhIG", "Rh immune globulin", "access", "fetomaternal haemorrhage"],
  keypoints: ["D-negative", "less than 1%", "300 µg", "1500 IU", "28 weeks", "72 hours", "fetomaternal haemorrhage", "rosette screen", "Kleihauer-Betke", "flow cytometry", "partial D", "weak D", "out-of-pocket", "stock", "stewardship", "fetal RHD genotyping"],
  answer: `
    <h4>Why access is difficult</h4>
    <p>Because D-negative people are &lt;1% of the Philippine population, RhIG is a small-volume, imported product with a high unit cost and intermittent supply. It is stocked mainly in tertiary hospitals and selected blood centres. A D-negative woman may have to travel or pay out of pocket, and stock may be reserved for obstetric cases. These constraints make rationing and documentation unavoidable.</p>
    <h4>Indications and dose</h4>
    <p>Routine antenatal prophylaxis is given at about 28 weeks, and postpartum prophylaxis within 72 hours when the baby is D-positive. RhIG is also indicated after abortion, ectopic pregnancy, amniocentesis, chorionic villus sampling, external cephalic version, abdominal trauma and antepartum haemorrhage. One 300 µg (1500 IU) dose covers about 15 mL of fetal red cells, equivalent to 30 mL of fetal whole blood.</p>
    <div class="table-wrap"><table>
      <tr><th>Situation</th><th>Action</th><th>Note</th></tr>
      <tr><td>Routine antenatal</td><td>300 µg at about 28 weeks</td><td>Confirm D-negative and no anti-D</td></tr>
      <tr><td>Postpartum</td><td>300 µg within 72 hours</td><td>Give if baby is D-positive</td></tr>
      <tr><td>Sensitising event</td><td>300 µg as soon as possible</td><td>Do not wait for bleeding to stop</td></tr>
      <tr><td>Large haemorrhage</td><td>Additional vials by calculation</td><td>Quantify fetal red cells</td></tr>
    </table></div>
    <h4>Quantifying fetomaternal haemorrhage</h4>
    <p>A rosette screen detects about 10 mL of fetal whole blood; Kleihauer–Betke or flow cytometry quantifies larger bleeds. If the calculated volume exceeds one vial, additional vials are given. Weak D and partial D need separate handling: partial D women should receive RhIG, while weak D types 1–3 usually do not. Fetal RHD genotyping from maternal plasma is not widely available locally.</p>
    <h4>Stewardship</h4>
    <ul>
      <li>Reserve RhIG for confirmed D-negative women without anti-D.</li>
      <li>Verify the dose, batch and expiry; document in the maternal record.</li>
      <li>Do not use D-positive blood for a D-negative woman of childbearing potential when D-negative units can be obtained.</li>
      <li>Audit wastage and share stock within the blood network.</li>
    </ul>
  `,
  tip: "State the 300 µg dose, the 28-week and 72-hour windows, and the one-vial coverage figure.",
  sources: ["B10", "B1", "B14", "B17", "B8"]
},
{
  id: "ih185", domain: "ih-groups", star: true,
  q: "A Filipino patient shows an ABO discrepancy in a hospital blood bank with limited molecular testing. Discuss the causes, the resolution pathway and safe transfusion.",
  tags: ["ABO discrepancy", "Philippine practice", "cold autoantibody", "resolution"],
  keypoints: ["forward grouping", "reverse grouping", "group I", "group II", "cold autoantibody", "anti-I", "rouleaux", "saline replacement", "acquired B", "A2", "anti-A1", "mixed field", "wrong blood in tube", "second sample", "group O", "referral"],
  answer: `
    <h4>The case</h4>
    <p>A 70-year-old man with severe pneumonia types as group A by forward grouping, but his serum contains neither anti-A nor anti-B. The reverse grouping therefore looks like group AB. His DAT is negative and the autocontrol is negative. This is a group I discrepancy: weak or missing antibody in an elderly, infected patient. The forward grouping is probably correct, but the case must not be reported until the discrepancy is resolved.</p>
    <h4>Systematic resolution</h4>
    <div class="table-wrap"><table>
      <tr><th>Step</th><th>Action</th><th>What it detects</th></tr>
      <tr><td>Repeat</td><td>New sample, identity check, reagent check</td><td>Wrong blood in tube, technical error</td></tr>
      <tr><td>Enhance</td><td>Room temperature 15–30 min, then 4 °C</td><td>Weak antibodies in the elderly</td></tr>
      <tr><td>Replace</td><td>Saline replacement of serum</td><td>Rouleaux from myeloma or fibrinogen</td></tr>
      <tr><td>Extend</td><td>Monoclonal reagents, lectins, adsorption</td><td>Subgroups, acquired B, cold antibodies</td></tr>
      <tr><td>Review</td><td>Historical group and transfusion record</td><td>Previous type and alloimmunisation</td></tr>
    </table></div>
    <p>Repeat a new sample, confirm identity and reagent quality, and compare with historical records. Incubate the reverse grouping at room temperature for 15–30 minutes and at 4 °C, and add more serum. If anti-B remains absent, the patient is likely A with hypogammaglobulinaemia. Transfuse group A red cells if the forward group is confirmed; group O is not automatically required.</p>
    <h4>Other local traps</h4>
    <ul>
      <li>Cold autoantibodies, especially anti-I in the elderly, cause panagglutination and a C3d-positive DAT.</li>
      <li>Rouleaux from myeloma or high fibrinogen responds to saline replacement.</li>
      <li>Acquired B in colon cancer or sepsis mimics an ABO discrepancy; acidified anti-B helps.</li>
      <li>A2 with anti-A1 and weak subgroups need lectins and adsorption–elution.</li>
      <li>Recent transfusion, HSCT, chimerism and polyagglutination produce mixed field or panagglutination.</li>
      <li>Wrong blood in tube remains the most dangerous cause; a second sample is mandatory.</li>
    </ul>
    <p>In Philippine laboratories without molecular testing, referral of unresolved samples to a regional blood centre or the national reference laboratory is appropriate. Emergency transfusion should use group O red cells and AB plasma until the group is secure.</p>
  `,
  tip: "Resolve before reporting; if the patient is bleeding, give O red cells and AB plasma while you work.",
  sources: ["B1", "B2", "B14", "B16", "B17", "S33"]
},
{
  id: "ih186", domain: "ih-groups", star: true,
  q: "Compare the behaviour of Kell, Duffy and Kidd antibodies in multiply transfused patients, with emphasis on evanescence and delayed haemolytic reactions.",
  tags: ["Kell", "Duffy", "Kidd", "evanescence", "delayed HTR"],
  keypoints: ["IgG", "antiglobulin test", "anti-K", "anti-Fy(a)", "anti-Jk(a)", "evanescence", "delayed haemolytic", "mixed-field DAT", "dosage", "ficin", "DTT", "complement", "antigen-negative", "extended matching", "historical record", "HDFN"],
  answer: `
    <h4>Shared serology</h4>
    <p>Kell, Duffy and Kidd antibodies are warm-reactive IgG detected by the indirect antiglobulin test. They cause extravascular haemolysis and can cause HDFN. Kell and Duffy antibodies do not bind complement strongly, whereas Kidd antibodies activate complement and are associated with delayed haemolytic transfusion reactions.</p>
    <div class="table-wrap"><table>
      <tr><th>Antibody</th><th>Enzyme effect</th><th>Clinical signature</th></tr>
      <tr><td>Anti-K</td><td>Resists ficin; destroyed by DTT</td><td>Severe HDFN, HTR</td></tr>
      <tr><td>Anti-Fy(a)</td><td>Destroyed by ficin and papain</td><td>HTR, HDFN; marked dosage</td></tr>
      <tr><td>Anti-Jk(a)</td><td>Enhanced by enzymes</td><td>Delayed HTR; complement binding</td></tr>
    </table></div>
    <h4>Kidd: the evanescent antibody</h4>
    <p>Anti-Jk(a) and anti-Jk(b) often fall below the limit of detection within weeks or months, then reappear after re-exposure. This evanescence explains why a patient may have a negative screen yet develop a delayed reaction 3–14 days after transfusion, with fever, falling haemoglobin, jaundice and a mixed-field DAT. Historical records and an antibody registry are therefore as important as the current sample. Provide antigen-negative units and record the antibody permanently.</p>
    <h4>Kell and Duffy</h4>
    <p>Anti-K is highly immunogenic and suppresses fetal erythropoiesis, so HDFN can be severe with a modest bilirubin. Many services give K-negative units to girls and women of childbearing potential. DTT used to overcome daratumumab destroys Kell, so anti-K cannot be excluded and K-negative units are given. Duffy antigens are destroyed by ficin and papain, and anti-Fy(a) shows dosage. Fy(a−b−) is common in West African populations and confers resistance to Plasmodium vivax; in Asians Fy(a) is nearly universal, so anti-Fy(b) is more often encountered.</p>
    <h4>Practical matching</h4>
    <ul>
      <li>Phenotype or genotype patients who need chronic transfusion, and extend matching to C, c, E, e, K, Fy and Jk.</li>
      <li>Calculate units needed from antigen frequency, not guesswork.</li>
      <li>Do not rely on a single negative screen in a previously transfused patient.</li>
    </ul>
  `,
  tip: "Kidd evanescence plus a negative current screen is the classic setup for a delayed reaction.",
  sources: ["B1", "B2", "B3", "B11"]
},
{
  id: "ih187", domain: "ih-groups",
  q: "Explain how to investigate and manage cold-reacting antibodies of the Lewis, P1PK/globoside and Ii systems in the pretransfusion laboratory.",
  tags: ["Lewis", "P1", "I antigen", "cold antibody"],
  keypoints: ["IgM", "room temperature", "anti-Le(a)", "anti-Le(b)", "neutralisation", "anti-P1", "hydatid cyst fluid", "Donath-Landsteiner", "anti-P", "anti-I", "anti-i", "cold agglutinin", "C3d", "prewarm", "thermal amplitude", "37 °C"],
  answer: `
    <h4>Lewis antibodies</h4>
    <p>Lewis antigens are made in secretions and adsorbed onto red cells from plasma. Anti-Le(a) and anti-Le(b) are usually IgM, react at room temperature and are not clinically significant. They do not cause HDFN because the antibodies are IgM and fetal antigens are poorly developed. Lewis antibodies can be neutralised with pooled plasma or saliva, and they often weaken during pregnancy. A crossmatch that is compatible at 37 °C and AHG is adequate. A later negative sample does not exclude a previously identified Lewis antibody, so the record should be retained.</p>
    <h4>P1 and P</h4>
    <p>Anti-P1 is a common cold IgM antibody of no clinical importance. It is neutralised by hydatid cyst fluid or pigeon egg white. Anti-P, by contrast, includes the Donath–Landsteiner antibody of paroxysmal cold haemoglobinuria, a biphasic IgG that binds at 4 °C and haemolyses at 37 °C. The P antigen is also the parvovirus B19 receptor.</p>
    <h4>I and i</h4>
    <p>Anti-I is a cold autoantibody associated with Mycoplasma pneumoniae and cold agglutinin disease; anti-i follows infectious mononucleosis. High-titre cold agglutinins cause acrocyanosis, a C3d-positive DAT and an ABO discrepancy. Cold agglutinin disease usually shows a monoclonal IgM and a C3d-only DAT. Measure titre and thermal amplitude at 4 °C, room temperature and 37 °C.</p>
    <h4>When to act</h4>
    <ul>
      <li>Ignore antibodies reactive only below 37 °C if the AHG crossmatch is compatible.</li>
      <li>Use prewarm technique and a blood warmer for high-titre cold agglutinins.</li>
      <li>Neutralisation confirms Lewis and P1 specificity.</li>
      <li>An antibody reactive at 37 °C is potentially significant and needs antigen-negative units.</li>
      <li>Keep the patient warm and avoid unnecessary cold exposure during transfusion.</li>
    </ul>
  `,
  tip: "The decisive question is thermal amplitude: reactivity at 37 °C changes a cold antibody into a significant one.",
  sources: ["B1", "B2", "B3"]
},
{
  id: "ih188", domain: "ih-groups", star: true,
  q: "Discuss the MNS and Diego systems in Southeast Asian practice, including GP.Mur, anti-Mia, Di(a), Wr(a) and screening panel design.",
  tags: ["MNS", "Diego", "GP.Mur", "Mia", "Di(a)"],
  keypoints: ["glycophorin A", "glycophorin B", "anti-M", "anti-N", "anti-S", "anti-U", "GP.Mur", "Mia", "anti-Mia", "band 3", "SLC4A1", "Di(a)", "anti-Di(a)", "Wr(a)", "screening cells", "genotyping"],
  answer: `
    <h4>MNS: glycophorins and antibodies</h4>
    <p>M and N are on glycophorin A, while S, s and U are on glycophorin B; GYPA and GYPB lie on chromosome 4. Anti-M and anti-N are usually cold IgM antibodies of little clinical importance, although anti-M can be IgG and cause HDFN. Anti-S, anti-s and anti-U are IgG, warm-reactive and clinically significant. U-negative blood is rare and is found mainly in people of African ancestry. The hybrid GP.Mur (Mia) antigen is common in Southeast Asia, including the Philippines, and anti-Mia causes HTR and severe HDFN; standard Caucasian screening cells may lack Mia.</p>
    <h4>Diego and band 3</h4>
    <p>Diego antigens are carried by band 3, the anion exchanger encoded by SLC4A1. Di(a) is more frequent in East and Southeast Asians than in Europeans, so anti-Di(a) must be considered in Filipino patients, especially in HDFN. Anti-Di(a) is IgG and clinically significant. Wr(a) is a low-frequency Diego antigen; anti-Wr(a) is often weak but has caused delayed haemolytic reactions. Band 3 variants also cause Southeast Asian ovalocytosis, which protects against Plasmodium falciparum.</p>
    <div class="table-wrap"><table>
      <tr><th>Antibody</th><th>Class</th><th>Significance</th></tr>
      <tr><td>Anti-Mia (GP.Mur)</td><td>IgG</td><td>HTR, severe HDFN; missed by some panels</td></tr>
      <tr><td>Anti-Di(a)</td><td>IgG</td><td>HTR, HDFN; more common in Asians</td></tr>
      <tr><td>Anti-Wr(a)</td><td>IgG or IgM</td><td>Usually weak; can cause delayed HTR</td></tr>
      <tr><td>Anti-U</td><td>IgG</td><td>HTR, HDFN; rare compatible units</td></tr>
    </table></div>
    <h4>Panel design in the Philippines</h4>
    <ul>
      <li>Include at least two Mia-positive and one Di(a)-positive screening cells.</li>
      <li>Use homozygous cells for MNS and Diego exclusion where possible.</li>
      <li>Genotype recently transfused patients and family members of immunised patients.</li>
      <li>Do not assume a Caucasian panel covers local specificities.</li>
    </ul>
  `,
  tip: "Mia and Di(a) are the two local specificities that a Western panel can miss.",
  sources: ["B3", "B2", "B1", "B4"]
},
{
  id: "ih189", domain: "ih-groups",
  q: "Describe the principles and blood bank applications of chromatography, adsorption and elution, including their limitations in a resource-limited laboratory.",
  tags: ["chromatography", "adsorption", "elution", "antibody purification"],
  keypoints: ["gel filtration", "size exclusion", "ion exchange", "affinity chromatography", "Protein A", "ligand", "adsorption", "autologous", "allogeneic", "ZZAP", "elution", "last wash", "reagent manufacture", "adsorption", "validation", "cost"],
  answer: `
    <h4>Separation principles</h4>
    <p>Chromatography separates molecules by size, charge or specific binding. Gel filtration (size exclusion) separates large proteins from small solutes and is used for buffer exchange and for separating IgM from IgG. Ion-exchange chromatography binds proteins according to charge and is used to purify albumin and IgG fractions. Affinity chromatography uses an immobilised ligand, such as Protein A or Protein G for IgG, a lectin for glycoproteins, or a blood group antigen for specific antibody. Each method has a resolution and capacity that must be matched to the sample size and the purity required.</p>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Principle</th><th>Blood bank use</th></tr>
      <tr><td>Gel filtration</td><td>Size exclusion</td><td>Desalting, buffer exchange, IgM/IgG separation</td></tr>
      <tr><td>Ion exchange</td><td>Charge</td><td>Albumin and IgG purification</td></tr>
      <tr><td>Affinity</td><td>Specific ligand binding</td><td>Antibody purification, reagent production</td></tr>
      <tr><td>Adsorption</td><td>Antigen–antibody binding</td><td>Removing autoantibody or separating mixtures</td></tr>
    </table></div>
    <h4>Adsorption and elution</h4>
    <p>Adsorption removes antibody from plasma by binding it to antigen-bearing red cells or beads. Autologous adsorption uses the patient's own cells and is suitable when the patient has not been transfused in the last three months; allogeneic differential adsorption uses selected phenotype cells when recent transfusion makes autologous adsorption unreliable. ZZAP or enzyme treatment enhances the removal of warm autoantibodies. Elution then releases bound antibody by heat, acid or organic solvent for testing. A negative last-wash control is essential. The choice of adsorbing cell phenotype is critical: the cells must express the target antigen while lacking antigens for antibodies that must be preserved.</p>
    <h4>Applications and limits</h4>
    <ul>
      <li>Manufacture and quality control of anti-D, anti-A and anti-B reagents.</li>
      <li>Purification of IgG and albumin; removal of anti-A/B in ABO-incompatible transplantation.</li>
      <li>Antibody characterisation and separation of mixtures in reference laboratories.</li>
      <li>Small sample volume, cost, time and validation limit routine use in Philippine hospital blood banks.</li>
      <li>Document recovery, purity and sterility for each preparation.</li>
    </ul>
  `,
  tip: "Separate preparative chromatography from diagnostic adsorption–elution; they answer different questions.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih190", domain: "ih-groups", star: true,
  q: "Distinguish mixed-field agglutination, polyagglutination, chimerism and panagglutination, and outline the laboratory algorithm and transfusion support for each.",
  tags: ["mixed field", "polyagglutination", "chimerism", "panagglutinin"],
  keypoints: ["mixed field", "polyagglutination", "chimerism", "mosaicism", "A3", "B3", "T activation", "Tn", "Cad", "lectin panel", "Arachis hypogaea", "Glycine max", "autocontrol", "DAT", "adsorption-elution", "STR genotyping"],
  answer: `
    <h4>Three patterns, three mechanisms</h4>
    <p>Mixed-field agglutination describes two red cell populations, one reacting and one not. It follows recent transfusion, haemopoietic stem cell transplant, congenital chimerism, mosaicism, or weak subgroups such as A3 and B3. Polyagglutination means the patient's cells are agglutinated by most adult sera but not by the patient's own serum; T, Tn, Th, Cad and Tk are the main forms. A panagglutinin, in contrast, reacts with all cells including the autocontrol, suggesting a warm autoantibody. A single mixed-field reaction in a donor unit may also reflect a weak subgroup or a dual population and needs investigation before labelling.</p>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Typical cause</th><th>Confirmatory test</th></tr>
      <tr><td>Mixed field</td><td>Transfusion, HSCT, chimerism, A3/B3</td><td>History, adsorption–elution, STR genotyping</td></tr>
      <tr><td>Polyagglutination</td><td>T, Tn, Th, Cad, Tk activation</td><td>Lectin panel; patient serum non-reactive</td></tr>
      <tr><td>Panagglutination</td><td>Warm autoantibody</td><td>Positive autocontrol and DAT; adsorption</td></tr>
    </table></div>
    <h4>Laboratory algorithm</h4>
    <p>Repeat the sample and obtain a detailed transfusion, transplant and pregnancy history. Perform forward and reverse grouping, an autocontrol and a DAT. Test the patient's serum against pooled AB serum and against the patient's own cells. A lectin panel identifies T (Arachis hypogaea), Tn (Glycine max) and Cad (Dolichos biflorus). Adsorption–elution separates populations, while STR genotyping or a blood group array confirms chimerism and distinguishes it from mosaicism. Repeat testing with a second reagent lot and, when possible, a second sample.</p>
    <h4>Transfusion and follow-up</h4>
    <ul>
      <li>Give group O red cells until the true group is established.</li>
      <li>Use washed red cells when polyagglutination makes crossmatching unreliable.</li>
      <li>Treat the underlying infection or malignancy; Tn activation may signal myelodysplasia.</li>
      <li>Document the findings and re-test after the acute episode.</li>
      <li>Do not label a patient as a new blood group without confirmatory testing.</li>
      <li>Record the evidence in the blood bank file so future crossmatches are interpreted correctly.</li>
    </ul>
  `,
  tip: "Ask whether the patient's own serum reacts: polyagglutination spares it, a panagglutinin does not.",
  sources: ["B1", "B2", "B3", "B4"]
}
);
