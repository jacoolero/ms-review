/* Immunohematology — HDFN & perinatal testing, set B (ih109–ih126) */
window.QBANK.push(
{
  id: "ih109", domain: "ih-hdfn", star: true,
  q: "Explain why haemolytic disease of the fetus and newborn is an IgG-mediated disease, and describe the roles of FcRn, IgG subclasses and antibody kinetics.",
  tags: ["HDFN", "FcRn", "IgG subclasses", "placental transfer"],
  keypoints: ["FcRn", "syncytiotrophoblast", "IgG class", "endosome", "IgM", "IgG1", "IgG3", "placental transfer", "titre", "avidity", "late anaemia", "half-life", "IVIG", "antigen status"],
  answer: `
    <h4>The placenta is selective, not passive</h4>
    <p>HDFN is restricted to antibodies of the <strong>IgG class</strong> because the <strong>syncytiotrophoblast</strong> expresses the <strong>neonatal Fc receptor (FcRn)</strong>. IgG is taken into <strong>endosomes</strong>, binds FcRn at acidic pH, is protected from lysosomal degradation, and is released into the fetal circulation at neutral pH. IgM, IgA, IgD and IgE have no FcRn-binding site and remain maternal. This is why IgM antibodies such as anti-Leᵃ, anti-I and most anti-M do not cause HDFN even when the antigen is present on fetal cells.</p>
    <h4>Subclasses and antibody quality</h4>
    <div class="table-wrap"><table>
      <tr><th>Subclass</th><th>Placental transfer</th><th>Relevance to HDFN</th></tr>
      <tr><td><strong>IgG1</strong></td><td>Efficient</td><td>Common in anti-D and anti-K; good Fc receptor binding</td></tr>
      <tr><td><strong>IgG3</strong></td><td>Efficient</td><td>Strongest complement activation; low plasma concentration</td></tr>
      <tr><td>IgG2</td><td>Less efficient</td><td>Often directed at polysaccharide antigens</td></tr>
      <tr><td>IgG4</td><td>Transferred</td><td>Poor complement activation; function is limited</td></tr>
    </table></div>
    <h4>What the laboratory should remember</h4>
    <ul>
      <li>The <strong>titre</strong> measures quantity, not <strong>avidity</strong> or subclass, so two antibodies at the same titre may behave very differently.</li>
      <li>Maternal IgG persists after delivery with a <strong>half-life</strong> of about three to four weeks; this explains a positive DAT and <strong>late anaemia</strong> long after the antibody has disappeared from the mother.</li>
      <li>FcRn binding also underlies the prolonged action of therapeutic IgG and the competition produced by <strong>IVIG</strong>.</li>
      <li>Determine the fetal <strong>antigen status</strong> rather than relying on a single titre when deciding on surveillance.</li>
    </ul>
    <p>The practical consequence is that antibody identity, class and antigen status matter more than a number. An IgG1 anti-K and an IgG3 anti-D can be devastating at titres that would be harmless for a weak IgM antibody.</p>
  `,
  tip: "Lead with FcRn — it explains both why IgG crosses and why IgM does not.",
  sources: ["B1", "B11"]
},
{
  id: "ih110", domain: "ih-hdfn", star: true,
  q: "Discuss fetomaternal haemorrhage: mechanisms, recognition, quantification and clinical consequences for mother and fetus.",
  tags: ["fetomaternal haemorrhage", "Kleihauer-Betke", "flow cytometry", "fetal anaemia"],
  keypoints: ["fetomaternal haemorrhage", "fetal anaemia", "stillbirth", "RhD alloimmunisation", "Kleihauer-Betke", "flow cytometry", "rosette test", "sinusoidal heart rate", "abruption", "external cephalic version", "intrauterine transfusion", "quantify"],
  answer: `
    <h4>Definition and magnitude</h4>
    <p><strong>Fetomaternal haemorrhage</strong> is the transfer of fetal blood into the maternal circulation. Small bleeds occur in most pregnancies and are harmless; large bleeds cause <strong>fetal anaemia</strong>, <strong>stillbirth</strong> and <strong>RhD alloimmunisation</strong>. The volume needed to sensitise a D-negative woman may be minute, whereas the volume needed to exsanguinate a fetus is large, so the same event has two very different thresholds.</p>
    <h4>Causes</h4>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>Examples</th></tr>
      <tr><td>Spontaneous</td><td><strong>Abruption</strong>, placenta praevia, velamentous cord insertion, placental tumour</td></tr>
      <tr><td>Traumatic</td><td>Road traffic accident, fall, abdominal trauma, domestic violence, <strong>external cephalic version</strong></td></tr>
      <tr><td>Iatrogenic</td><td>Amniocentesis, chorionic villus sampling, cordocentesis, intrauterine transfusion, caesarean delivery</td></tr>
      <tr><td>Pregnancy loss</td><td>Miscarriage, ectopic pregnancy, termination, multifetal demise</td></tr>
    </table></div>
    <h4>Recognition</h4>
    <ul>
      <li>Fetal clues: a <strong>sinusoidal heart rate</strong> pattern, reduced movements, unexplained anaemia on Doppler, hydrops or death.</li>
      <li>Maternal clues are unreliable: abdominal pain, bleeding, uterine irritability or a positive screening test.</li>
      <li>Quantify with the <strong>Kleihauer-Betke</strong> acid elution test, <strong>flow cytometry</strong> for HbF or D, or the <strong>rosette test</strong> as a screen.</li>
      <li>Kleihauer-Betke is falsely raised in hereditary persistence of fetal haemoglobin and thalassaemia trait; flow cytometry is preferred when the volume guides treatment.</li>
    </ul>
    <h4>Clinical consequences</h4>
    <p>A large bleed with a compromised fetus needs urgent obstetric review, consideration of <strong>intrauterine transfusion</strong>, and delivery planning at a centre with neonatal intensive care. In a D-negative unsensitised woman the bleed must be <strong>quantify</strong>ied so that prophylaxis is adequate, and the event documented so that a later antibody screen can be interpreted. In a D-positive woman the finding still matters because fetal anaemia can recur without any maternal antibody.</p>
  `,
  tip: "Separate the two thresholds: tiny volumes sensitise the mother, large volumes exsanguinate the fetus.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih111", domain: "ih-hdfn", star: true,
  q: "Discuss Kell (anti-K) haemolytic disease of the fetus and newborn, and explain why its laboratory and clinical pattern differs from Rh D disease.",
  tags: ["Kell", "anti-K", "erythropoiesis", "HDFN"],
  keypoints: ["Kell system", "KEL1", "CD238", "erythroid progenitor", "IgG1", "haemolysis", "erythropoiesis", "reticulocyte", "bilirubin", "titre", "KEL", "cell-free fetal DNA", "MCA-PSV", "intrauterine transfusion", "late hyporegenerative anaemia"],
  answer: `
    <h4>Biology of the Kell antigen</h4>
    <p>K (<strong>KEL1</strong>) is a low-frequency antigen of the <strong>Kell system</strong>, carried on the <strong>CD238</strong> glycoprotein, a zinc-dependent endopeptidase. Unlike Rh antigens, Kell is expressed not only on mature red cells but also on <strong>erythroid progenitor</strong> cells. That difference in tissue distribution explains the distinctive behaviour of anti-K.</p>
    <h4>Why anti-K HDFN is different</h4>
    <p>Anti-K is usually <strong>IgG1</strong> and crosses the placenta. It causes <strong>haemolysis</strong>, but its dominant effect is suppression of fetal <strong>erythropoiesis</strong>: antibody-coated progenitors are destroyed or their maturation is arrested. The fetus becomes profoundly anaemic with a relatively low <strong>reticulocyte</strong> count and, importantly, a low <strong>bilirubin</strong>. The classic picture is severe anaemia with much less jaundice than expected.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Rh D disease</th><th>Kell disease</th></tr>
      <tr><td>Antigen site</td><td>Mature red cell membrane</td><td>Red cells and erythroid progenitors</td></tr>
      <tr><td>Main mechanism</td><td>Haemolysis</td><td>Haemolysis plus erythropoietic suppression</td></tr>
      <tr><td>Reticulocytes</td><td>Raised</td><td>Low or inappropriately normal</td></tr>
      <tr><td>Bilirubin</td><td>High</td><td>Relatively low</td></tr>
      <tr><td>Titre prediction</td><td>Useful above the critical level</td><td>Poor — low titres can still cause severe disease</td></tr>
    </table></div>
    <h4>Monitoring and management</h4>
    <ul>
      <li>Treat any anti-K in pregnancy as potentially significant; <strong>titre</strong>s are poorly predictive.</li>
      <li>Determine fetal <strong>KEL</strong> status by paternal genotyping or <strong>cell-free fetal DNA</strong>; a K-negative fetus needs no invasive monitoring.</li>
      <li>Start <strong>MCA-PSV</strong> Doppler earlier and at a lower threshold than for anti-D.</li>
      <li>Refer for <strong>intrauterine transfusion</strong> if anaemia develops, and deliver where neonatal exchange transfusion is available.</li>
      <li>After birth, expect <strong>late hyporegenerative anaemia</strong> and monitor haemoglobin and reticulocytes for weeks.</li>
    </ul>
    <p>Kell disease is a reminder that HDFN is not one disease: the antigen's tissue distribution, not only the antibody titre, determines the phenotype.</p>
  `,
  tip: "The phrase to build the answer around is erythropoietic suppression — anaemia out of proportion to bilirubin.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih112", domain: "ih-hdfn", star: true,
  q: "Discuss weak D, partial D and DEL in perinatal practice: how they arise and how they change RhIG and transfusion decisions.",
  tags: ["weak D", "partial D", "DEL", "RHD genotyping"],
  keypoints: ["weak D", "partial D", "DEL", "antigen density", "epitope", "adsorption-elution", "RHD genotyping", "RhIG", "D-negative", "anti-D", "cell-free fetal DNA", "zygosity", "antibody card"],
  answer: `
    <h4>Three different problems</h4>
    <p>D typing is not always binary. <strong>Weak D</strong> results from reduced antigen density and is quantitative. <strong>Partial D</strong> results from a missing or altered <strong>epitope</strong> and is qualitative. <strong>DEL</strong> is antigen expression too weak for routine methods but detectable by <strong>adsorption-elution</strong>. Only some of these individuals can make <strong>anti-D</strong>, and that determines whether they are managed as D-positive or D-negative in pregnancy.</p>
    <div class="table-wrap"><table>
      <tr><th>Variant</th><th>Basis</th><th>Can make anti-D?</th><th>Perinatal management</th></tr>
      <tr><td>Weak D types 1–3</td><td>Reduced antigen density</td><td>No</td><td>Manage as D-positive; no RhIG</td></tr>
      <tr><td>Other weak D</td><td>Reduced or altered expression</td><td>Some types yes</td><td>Individualise; often D-negative</td></tr>
      <tr><td>Partial D (e.g. DVI)</td><td>Missing epitope</td><td>Yes</td><td>Manage as D-negative; give RhIG</td></tr>
      <tr><td>DEL</td><td>Extremely low expression</td><td>Yes, after D-positive transfusion</td><td>Typing policy dependent; document</td></tr>
    </table></div>
    <h4>Why genotyping matters</h4>
    <p>Weak D types 1, 2 and 3 are not associated with anti-D production and can be managed as D-positive, with no <strong>RhIG</strong>. Other weak D and most partial D types can make anti-D and must be managed as D-negative, with RhIG and D-negative blood. <strong>RHD genotyping</strong> resolves ambiguous serology and prevents both under-treatment and needless exposure to a plasma product.</p>
    <h4>DEL and the Asian context</h4>
    <p>DEL is more frequent in East and Southeast Asian populations than in Europeans. A DEL woman typed as D-negative by routine methods may receive RhIG appropriately, but a DEL patient transfused with D-positive blood can make anti-D. Conversely, a DEL donor unit can immunise a true D-negative recipient. Local policy should state whether DEL donors are labelled D-positive and whether DEL recipients receive D-negative blood.</p>
    <h4>Practical rules</h4>
    <ul>
      <li>Do not assume a weak reaction is weak D type 1; genotype or refer.</li>
      <li>Record the variant in the maternal record and on the <strong>antibody card</strong>.</li>
      <li>For the fetus, paternal <strong>zygosity</strong> and <strong>cell-free fetal DNA</strong> guide surveillance.</li>
      <li>RhIG is never given to a woman who already has immune anti-D, whatever her D type.</li>
    </ul>
  `,
  tip: "The exam distinction is quantitative weak D versus qualitative partial D — and only some weak D types are safe to call D-positive.",
  sources: ["B1", "B3", "B10"]
},
{
  id: "ih113", domain: "ih-hdfn",
  q: "Describe the laboratory method and interpretation of antibody titration in pregnancy, including the sources of error.",
  tags: ["titration", "critical titre", "IAT", "prenatal testing"],
  keypoints: ["titration", "endpoint", "agglutination", "antibody concentration", "doubling dilution", "indicator red cell", "anti-human globulin", "parallel", "titration score", "prozone", "2-mercaptoethanol", "DTT", "critical titre", "anti-K"],
  answer: `
    <h4>What a titre measures</h4>
    <p>A titre is the reciprocal of the highest dilution at which the antibody still produces the defined <strong>endpoint</strong>, usually <strong>agglutination</strong> by the indirect antiglobulin technique. It is a semi-quantitative measure of <strong>antibody concentration</strong>, not of avidity, subclass or clinical severity, so it must be interpreted together with the antibody's identity and the fetal antigen status.</p>
    <h4>Method</h4>
    <ol>
      <li>Prepare a <strong>doubling dilution</strong> series of the maternal serum in saline or an appropriate diluent.</li>
      <li>Add the same volume of a defined <strong>indicator red cell</strong> suspension to each tube; the cells must carry the relevant antigen and have a known phenotype.</li>
      <li>Incubate, wash, add <strong>anti-human globulin</strong>, spin, and read the endpoint macroscopically and microscopically.</li>
      <li>Test the current sample <strong>parallel</strong> with the previous frozen sample, using the same method, reagent cells and reader.</li>
      <li>Record the <strong>titration score</strong> as well as the endpoint when a finer trend is needed.</li>
    </ol>
    <h4>Pitfalls</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Effect and control</th></tr>
      <tr><td><strong>Prozone</strong></td><td>Strong antibody inhibits agglutination at low dilution; read all dilutions, not just the first</td></tr>
      <tr><td>IgM versus IgG</td><td>Treat with <strong>2-mercaptoethanol</strong> or <strong>DTT</strong> to remove IgM and reveal IgG</td></tr>
      <tr><td>Method change</td><td>Gel, tube and solid phase give different titres; never compare across methods</td></tr>
      <tr><td>Observer variation</td><td>Use a single reader and a defined endpoint; weak agglutination is scored consistently</td></tr>
      <tr><td>Antibody identity</td><td><strong>Anti-K</strong> and anti-Mia are poorly predicted by titre; do not apply Rh D rules</td></tr>
    </table></div>
    <p>A <strong>critical titre</strong> is method-dependent and merely triggers the next test. For anti-D, 16–32 is commonly used; for anti-K, any titre may be significant. Titres should never be used alone to decide on intrauterine transfusion.</p>
  `,
  tip: "Say explicitly that a titre is a trigger, not a verdict — and that the previous sample must be retested in parallel.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih114", domain: "ih-hdfn", star: true,
  q: "Discuss middle cerebral artery peak systolic velocity Doppler in the management of fetal alloimmune anaemia.",
  tags: ["MCA-PSV", "Doppler", "fetal anaemia", "monitoring"],
  keypoints: ["viscosity", "cardiac output", "MCA-PSV", "circle of Willis", "angle of insonation", "multiples of the median", "1.5 MoM", "hydrops", "intrauterine transfusion", "fetal blood sampling", "anti-K", "trend"],
  answer: `
    <h4>Physiological basis</h4>
    <p>Fetal anaemia lowers blood <strong>viscosity</strong> and oxygen delivery, producing a compensatory rise in <strong>cardiac output</strong> and a fall in peripheral resistance. The <strong>MCA-PSV</strong> rises before hydrops or an abnormal cardiotocograph, which makes it the best non-invasive test for fetal anaemia.</p>
    <h4>Technique</h4>
    <ul>
      <li>Use a high-resolution probe with colour Doppler and identify the <strong>circle of Willis</strong> in an axial view of the fetal head.</li>
      <li>Sample the artery close to its origin with an <strong>angle of insonation</strong> near zero degrees, correcting for any angle.</li>
      <li>Record several waveforms in the absence of fetal breathing or movement, and use the highest reproducible value.</li>
      <li>Express the result as <strong>multiples of the median</strong> for gestational age; a value above <strong>1.5 MoM</strong> suggests moderate to severe anaemia.</li>
    </ul>
    <h4>Interpretation and limits</h4>
    <p>The test is good at excluding severe anaemia, and a normal result can usually be repeated in one to two weeks. It is less reliable after <strong>intrauterine transfusion</strong>, in <strong>hydrops</strong>, at the extremes of gestation and with poor technique. <strong>Anti-K</strong> disease may produce anaemia with a less pronounced velocity change, so the <strong>trend</strong> and clinical context matter. MCA-PSV does not measure bilirubin or predict kernicterus; it answers only whether the fetus is anaemic enough to need sampling or transfusion.</p>
    <h4>Role in the pathway</h4>
    <p>Doppler follows the antibody titre: once the titre is above the critical level, or the antibody is known to be high risk, serial MCA-PSV replaces repeated amniocentesis. A rising trend, or a value above 1.5 MoM, leads to <strong>fetal blood sampling</strong> and <strong>intrauterine transfusion</strong>; a stable normal value allows the pregnancy to continue with surveillance.</p>
  `,
  tip: "State the physiology first (viscosity falls, cardiac output rises), then the 1.5 MoM threshold and its limits.",
  sources: ["B10", "B1", "B11"]
},
{
  id: "ih115", domain: "ih-hdfn",
  q: "Discuss amniotic fluid spectrophotometry (ΔOD450) for HDFN: principle, interpretation and current role.",
  tags: ["amniocentesis", "OD450", "Liley", "fetal anaemia"],
  keypoints: ["bilirubin", "450 nm", "ΔOD450", "Liley", "Queenan", "gestational age", "fetal blood sampling", "fetomaternal haemorrhage", "MCA-PSV", "fetal genotyping", "spectrophotometry"],
  answer: `
    <h4>Principle</h4>
    <p>Amniotic fluid contains <strong>bilirubin</strong> pigments derived from fetal red cell breakdown. <strong>Spectrophotometry</strong> at <strong>450 nm</strong> shows a peak due to bilirubin, and the deviation from the expected baseline is the <strong>ΔOD450</strong>. The magnitude reflects the intensity of haemolysis and was historically used to stage Rh HDFN.</p>
    <h4>Interpretation</h4>
    <p>Results are plotted against <strong>gestational age</strong> on <strong>Liley</strong> zones, originally described for Rh D, or on the <strong>Queenan</strong> chart, which extends into early gestation. A rising ΔOD450, or a value in the upper zone, predicts severe anaemia and prompts <strong>fetal blood sampling</strong> or delivery. Serial measurements are more informative than a single value.</p>
    <div class="table-wrap"><table>
      <tr><th>Zone</th><th>Interpretation</th><th>Typical action</th></tr>
      <tr><td>Lower</td><td>Mild or no significant haemolysis</td><td>Repeat in one to two weeks</td></tr>
      <tr><td>Middle</td><td>Moderate disease</td><td>Serial testing; consider fetal sampling</td></tr>
      <tr><td>Upper</td><td>Severe disease likely</td><td>Fetal blood sampling or delivery</td></tr>
    </table></div>
    <h4>Limitations and decline</h4>
    <ul>
      <li>Invasive: procedure-related pregnancy loss, leakage, infection, preterm labour and <strong>fetomaternal haemorrhage</strong> that can worsen alloimmunisation.</li>
      <li>Bilirubin is affected by gestation, bloody contamination and meconium, and the test performs poorly early in pregnancy.</li>
      <li>It measures haemolysis, not anaemia directly, and cannot distinguish compensated from decompensated disease.</li>
      <li><strong>MCA-PSV</strong> Doppler is non-invasive, at least as accurate, and has largely replaced ΔOD450 in referral centres.</li>
    </ul>
    <h4>Where it still matters</h4>
    <p>In settings without Doppler expertise, or when Doppler is technically difficult, ΔOD450 remains a fallback. Amniocentesis is also performed for <strong>fetal genotyping</strong> and lung maturity, so the laboratory may still receive these samples. Accurate spectrophotometry, a clear gestational age and comparison with previous values are essential; the report should state the zone and the trend, not just an optical density.</p>
  `,
  tip: "Explain why it was replaced — invasive, indirect, and superseded by MCA Doppler — but do not call it obsolete everywhere.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih116", domain: "ih-hdfn", star: true,
  q: "Discuss fetal blood group genotyping in alloimmunised pregnancy, from paternal zygosity to cell-free fetal DNA.",
  tags: ["fetal genotyping", "cffDNA", "RHD", "KEL"],
  keypoints: ["paternal phenotype", "zygosity", "genotyping", "cell-free fetal DNA", "RHD", "RHCE", "KEL", "HPA", "amniocentesis", "fetal fraction", "RHD variant", "DEL", "false negative", "intrauterine transfusion", "RhIG"],
  answer: `
    <h4>Why genotype the fetus</h4>
    <p>If the fetus does not carry the antigen, the maternal antibody cannot cause HDFN and invasive monitoring is unnecessary. Fetal antigen status therefore directs surveillance and treatment, and it can be predicted from the father's genotype or determined directly.</p>
    <h4>Stepwise approach</h4>
    <ol>
      <li><strong>Paternal phenotype</strong> and <strong>zygosity</strong>: a homozygous father predicts an antigen-positive fetus; a heterozygous father gives a 50% chance. Serology cannot reliably distinguish homozygosity for many systems, so <strong>genotyping</strong> is needed.</li>
      <li><strong>Cell-free fetal DNA</strong> in maternal plasma: the least invasive method, reliable from about 11 weeks, used for <strong>RHD</strong>, <strong>RHCE</strong> (c, E), <strong>KEL</strong> and <strong>HPA</strong> antigens.</li>
      <li><strong>Amniocentesis</strong> or chorionic villus sampling: invasive but definitive, used when cffDNA is unavailable, inconclusive, or the variant is not covered.</li>
    </ol>
    <h4>Interpretation traps</h4>
    <div class="table-wrap"><table>
      <tr><th>Trap</th><th>Consequence</th></tr>
      <tr><td><strong>RHD variant</strong> in the mother</td><td>False-positive fetal D result</td></tr>
      <tr><td><strong>DEL</strong> or weak D allele</td><td>Misclassification of maternal or fetal type</td></tr>
      <tr><td>Low <strong>fetal fraction</strong></td><td><strong>False negative</strong> — repeat or treat conservatively</td></tr>
      <tr><td>Vanished twin</td><td>Persistent signal from a demised fetus</td></tr>
      <tr><td>Recent maternal transfusion</td><td>Donor DNA or donor red cells confound typing</td></tr>
    </table></div>
    <p>A D-negative mother may carry an RHD variant not detected by the assay, and a low fetal fraction can produce a false negative. Laboratories should report whether the result is informative and recommend conservative management — give prophylaxis and continue monitoring — when it is not. For KEL, the K allele is a single nucleotide change and assays are robust, but the father's genotype still matters.</p>
    <h4>Clinical value</h4>
    <p>Genotyping avoids unnecessary <strong>intrauterine transfusion</strong>, reduces exposure to blood products and allows targeted <strong>RhIG</strong> prophylaxis. It also informs counselling: an antigen-negative fetus changes the prognosis of the pregnancy entirely.</p>
  `,
  tip: "Present it as a cascade — paternal zygosity, then cffDNA, then invasive testing only if needed.",
  sources: ["B1", "B10", "B11"]
},
{
  id: "ih117", domain: "ih-hdfn", star: true,
  q: "Discuss hydrops fetalis: pathogenesis, causes and management, with emphasis on immune hydrops.",
  tags: ["hydrops fetalis", "immune hydrops", "fetal anaemia", "management"],
  keypoints: ["hydrops fetalis", "ascites", "pleural effusion", "pericardial effusion", "skin oedema", "hepatosplenomegaly", "hypoalbuminaemia", "parvovirus B19", "alpha-thalassaemia", "MCA-PSV", "intrauterine transfusion", "antibody screen"],
  answer: `
    <h4>Definition</h4>
    <p><strong>Hydrops fetalis</strong> is the accumulation of fluid in at least two fetal compartments — <strong>ascites</strong>, <strong>pleural effusion</strong>, <strong>pericardial effusion</strong> or <strong>skin oedema</strong> — often with placentomegaly and polyhydramnios. It is a sign, not a diagnosis, and carries a high mortality without treatment.</p>
    <h4>Immune hydrops</h4>
    <p>Severe HDFN causes anaemia, extramedullary haematopoiesis, <strong>hepatosplenomegaly</strong>, <strong>hypoalbuminaemia</strong> and high-output cardiac failure. Capillary leak and reduced lymphatic drainage produce the effusions. The fetus may be hydropic at presentation, and the anaemia can be profound even when the maternal titre is not extreme.</p>
    <h4>Non-immune causes</h4>
    <p>Structural cardiac disease, arrhythmia, chromosomal abnormalities, <strong>parvovirus B19</strong>, cytomegalovirus, syphilis, <strong>alpha-thalassaemia</strong> major, twin-twin transfusion and metabolic disorders. The maternal <strong>antibody screen</strong> and <strong>MCA-PSV</strong> separate immune from non-immune cases quickly.</p>
    <h4>Evaluation and management</h4>
    <ul>
      <li>Confirm the antibody, its titre and the fetal antigen status.</li>
      <li>Measure MCA-PSV; perform fetal echocardiography and karyotype or infection studies if immune causes are excluded.</li>
      <li>For immune anaemia, <strong>intrauterine transfusion</strong> is the definitive treatment and can reverse hydrops.</li>
      <li>Deliver at a tertiary centre with neonatal intensive care and exchange transfusion capability; give antenatal steroids if preterm delivery is likely.</li>
      <li>Counsel about survival and neurodevelopmental outcome, which depend on the cause and on any cerebral injury.</li>
    </ul>
    <p>Hydrops is the endpoint the laboratory is trying to prevent: a falling haemoglobin and a rising MCA-PSV should trigger referral before fluid accumulates.</p>
  `,
  tip: "Define hydrops by compartments, then split the causes with the antibody screen and Doppler.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih118", domain: "ih-hdfn",
  q: "Discuss the non-alloimmune causes of fetal anaemia and hydrops, and how the laboratory distinguishes them from HDFN.",
  tags: ["fetal anaemia", "parvovirus B19", "alpha-thalassaemia", "hydrops"],
  keypoints: ["antibody screen", "parvovirus B19", "erythroid progenitor", "P antigen", "reticulocytopenia", "hydrops", "IgM", "PCR", "intrauterine transfusion", "alpha-thalassaemia", "Hb Bart's", "twin-twin transfusion", "MCA-PSV"],
  answer: `
    <h4>Why the differential matters</h4>
    <p>A hydropic or anaemic fetus is not always alloimmunised. A negative maternal <strong>antibody screen</strong> should prompt a search for non-immune causes, because management and counselling differ.</p>
    <h4>Parvovirus B19</h4>
    <p>Parvovirus B19 infects <strong>erythroid progenitor</strong> cells through the <strong>P antigen</strong> (globoside), causing transient arrest of erythropoiesis. In a fetus with a short red cell lifespan this produces severe <strong>reticulocytopenia</strong>, anaemia and <strong>hydrops</strong>. Maternal infection may be asymptomatic or cause a mild rash or arthralgia. Diagnosis is by maternal <strong>IgM</strong> and IgG, and by <strong>PCR</strong> of maternal blood or amniotic fluid; fetal blood may show a low reticulocyte count. Treatment is supportive or by <strong>intrauterine transfusion</strong>, and most fetuses recover.</p>
    <h4>Other causes</h4>
    <div class="table-wrap"><table>
      <tr><th>Cause</th><th>Laboratory or clinical clue</th></tr>
      <tr><td><strong>Alpha-thalassaemia</strong> major</td><td><strong>Hb Bart's</strong> on electrophoresis or HPLC; both parents carriers; common in Southeast Asia</td></tr>
      <tr><td><strong>Twin-twin transfusion</strong></td><td>Monochorionic twins, discordant growth, oligohydramnios/polyhydramnios</td></tr>
      <tr><td>Fetomaternal haemorrhage</td><td>Kleihauer-Betke or flow cytometry on the maternal sample</td></tr>
      <tr><td>Congenital infection</td><td>Serology and PCR; thrombocytopenia, conjugated jaundice</td></tr>
      <tr><td>Marrow failure</td><td>Low reticulocytes, parvovirus, Diamond-Blackfan anaemia</td></tr>
    </table></div>
    <h4>Laboratory clues</h4>
    <ul>
      <li>Maternal antibody screen negative; <strong>MCA-PSV</strong> still grades the anaemia.</li>
      <li>Blood film and haemoglobin analysis for Hb Bart's.</li>
      <li>Infection serology and PCR, plus placental histology.</li>
      <li>Karyotype or chromosomal microarray for structural anomalies.</li>
    </ul>
    <p>Distinguishing these entities prevents inappropriate RhIG or repeated antibody testing and directs fetal therapy. In Southeast Asia, alpha-thalassaemia and parvovirus are the two non-immune causes to remember.</p>
  `,
  tip: "Name parvovirus and alpha-thalassaemia first — they are the locally relevant non-immune mimics.",
  sources: ["B2", "B1", "B11"]
},
{
  id: "ih119", domain: "ih-hdfn",
  q: "Discuss phototherapy for neonatal hyperbilirubinaemia: mechanism, delivery, limitations and laboratory monitoring.",
  tags: ["phototherapy", "neonatal jaundice", "bilirubin", "lumirubin"],
  keypoints: ["460-490 nm", "configurational isomers", "lumirubin", "irradiance", "intensive phototherapy", "thermoregulation", "rebound", "bronze baby syndrome", "conjugated hyperbilirubinaemia", "exchange transfusion", "hour-specific nomograms"],
  answer: `
    <h4>How light lowers bilirubin</h4>
    <p>Phototherapy uses blue-green light, with peak effectiveness around <strong>460-490 nm</strong>, to convert unconjugated bilirubin in the skin into water-soluble products. <strong>Configurational isomers</strong> and <strong>lumirubin</strong> can be excreted in bile and urine without conjugation, bypassing the immature glucuronyl transferase system.</p>
    <h4>Delivery</h4>
    <ul>
      <li><strong>Intensive phototherapy</strong> uses higher <strong>irradiance</strong>, a larger illuminated surface area and closer lamps; it is used when bilirubin is rising rapidly or is near the exchange threshold.</li>
      <li>Expose as much skin as possible, protect the eyes and gonads, and maintain <strong>thermoregulation</strong> and hydration.</li>
      <li>Measure irradiance and document the device, distance and duration; check that all lamps are working.</li>
      <li>Recheck bilirubin at defined intervals; the rate of fall and the <strong>rebound</strong> after stopping guide further treatment.</li>
    </ul>
    <h4>Limitations and adverse effects</h4>
    <p>Phototherapy is safe but not risk-free: insensible water loss, temperature instability, loose stools, rash and rarely <strong>bronze baby syndrome</strong> in cholestatic infants. It is less effective in <strong>conjugated hyperbilirubinaemia</strong> and does not treat the underlying haemolysis. If bilirubin continues to rise despite intensive phototherapy, or if signs of acute bilirubin encephalopathy appear, escalate to IVIG or <strong>exchange transfusion</strong>.</p>
    <h4>The laboratory's role</h4>
    <p>Provide accurate total and conjugated bilirubin, state the method, and use <strong>hour-specific nomograms</strong> rather than adult ranges. Plot the value against gestational age and risk factors, and communicate critical results promptly. The decision to exchange is based on the trend and the clinical picture, not on a single number.</p>
  `,
  tip: "Give the wavelength and the two photoisomers, then explain why intensive therapy is not simply more of the same.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih120", domain: "ih-hdfn",
  q: "Discuss intravenous immunoglobulin in HDFN: rationale, uses, evidence and safety.",
  tags: ["IVIG", "HDFN", "hyperbilirubinaemia", "safety"],
  keypoints: ["Fcγ receptors", "anti-idiotypic", "exchange transfusion", "FNAIT", "intrauterine transfusion", "haemolysis", "thrombosis", "necrotising enterocolitis", "IgA deficiency", "haemovigilance"],
  answer: `
    <h4>Rationale</h4>
    <p>IVIG is pooled human IgG. In HDFN it is thought to work by blocking <strong>Fcγ receptors</strong> on neonatal macrophages, by <strong>anti-idiotypic</strong> neutralisation of maternal antibody, and by accelerating antibody clearance. In pregnancy it may reduce transplacental antibody transfer and fetal haemolysis.</p>
    <h4>Neonatal use</h4>
    <p>IVIG is used as an adjunct to intensive phototherapy when bilirubin is rising despite light treatment, with the aim of avoiding <strong>exchange transfusion</strong>. The evidence is modest and conflicting, and some infants still need exchange. It should not delay exchange when bilirubin is at threshold or encephalopathy is present.</p>
    <h4>Use in pregnancy</h4>
    <p>For severe early-onset HDFN, or in <strong>FNAIT</strong>, maternal IVIG may be given to reduce fetal haemolysis or platelet destruction, often with prednisone. Response is variable, and <strong>intrauterine transfusion</strong> remains the definitive treatment for fetal anaemia.</p>
    <h4>Cautions</h4>
    <ul>
      <li><strong>Haemolysis</strong> from blood-group antibodies in the product; monitor haemoglobin.</li>
      <li><strong>Thrombosis</strong> and renal impairment, especially with high-volume or rapid infusion.</li>
      <li><strong>Necrotising enterocolitis</strong> has been reported in neonates; use with caution in preterm infants.</li>
      <li>Volume load and sodium content; <strong>IgA deficiency</strong> with anti-IgA carries an anaphylaxis risk.</li>
      <li>Interference with serological tests and passive antibody detection.</li>
    </ul>
    <p>IVIG is a plasma-derived product, so consent, batch documentation and <strong>haemovigilance</strong> apply. It is an adjunct, not a substitute for phototherapy, exchange transfusion or good neonatal intensive care.</p>
  `,
  tip: "Call IVIG an adjunct with weak evidence — examiners reward that honesty and the safety list.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih121", domain: "ih-hdfn",
  q: "Discuss late hyporegenerative anaemia after HDFN and intrauterine transfusion: mechanisms, monitoring and management.",
  tags: ["late anaemia", "hyporegenerative", "IUT", "follow-up"],
  keypoints: ["late hyporegenerative anaemia", "intrauterine transfusion", "reticulocyte", "IgG", "erythropoietin", "top-up", "haemoglobin", "iron", "discharge summary", "heart failure"],
  answer: `
    <h4>The pattern</h4>
    <p>Infants with HDFN, and especially those treated with <strong>intrauterine transfusion</strong>, may develop <strong>late hyporegenerative anaemia</strong> at about three to twelve weeks of age. Haemoglobin falls while the <strong>reticulocyte</strong> count remains low, distinguishing it from the brisk regeneration expected after simple haemolysis.</p>
    <h4>Mechanisms</h4>
    <ul>
      <li>Persisting maternal <strong>IgG</strong> continues to coat and destroy red cells.</li>
      <li>Donor red cells from intrauterine transfusion suppress fetal erythropoiesis, and the marrow takes time to recover.</li>
      <li><strong>Erythropoietin</strong> production is low relative to the degree of anaemia.</li>
      <li>Repeated <strong>top-up</strong> transfusions can suppress the marrow further.</li>
    </ul>
    <h4>Monitoring and treatment</h4>
    <p>Follow <strong>haemoglobin</strong> and reticulocytes weekly to fortnightly after discharge, with a clear written plan. Transfuse for symptomatic anaemia or a falling haemoglobin below the local threshold, using a small-volume top-up from a dedicated donor to limit exposure. <strong>Erythropoietin</strong> and <strong>iron</strong> may be considered, but iron alone does not correct the hyporegenerative phase and should not be given without evidence of deficiency.</p>
    <h4>Why it matters</h4>
    <p>Late anaemia is easy to miss after an apparently successful pregnancy and delivery. It can present with poor feeding, tachycardia, failure to thrive or a dramatic fall in haemoglobin, and it can be severe enough to cause <strong>heart failure</strong>. A <strong>discharge summary</strong> that states the antibody, the intrauterine transfusion history and the follow-up plan prevents gaps in care. The anaemia is usually self-limiting, but it must be anticipated rather than discovered.</p>
  `,
  tip: "The defining pair is falling haemoglobin with a low reticulocyte count — say it before listing mechanisms.",
  sources: ["B1", "B2", "B10"]
},
{
  id: "ih122", domain: "ih-hdfn",
  q: "Discuss cord blood and postnatal laboratory testing in a pregnancy affected by alloimmunisation.",
  tags: ["cord blood", "DAT", "neonatal testing", "postnatal"],
  keypoints: ["cord blood", "EDTA", "DAT", "eluate", "forward grouping", "Wharton's jelly", "passive anti-D", "mixed field", "intrauterine transfusion", "critical bilirubin"],
  answer: `
    <h4>What to collect</h4>
    <p>At delivery, collect a <strong>cord blood</strong> sample in <strong>EDTA</strong> for the infant's group and <strong>DAT</strong>, and a clotted sample for bilirubin if indicated. A maternal sample is needed for comparison and for any additional antibody work. Label both with two identifiers and the time; a cord sample contaminated with <strong>Wharton's jelly</strong> or diluted with maternal blood can give misleading results.</p>
    <h4>Core tests</h4>
    <ul>
      <li><strong>ABO and D typing</strong> by <strong>forward grouping</strong> only, because neonates do not yet produce isohaemagglutinins.</li>
      <li>Direct antiglobulin test, with a monospecific reagent if positive; an <strong>eluate</strong> identifies the coating antibody.</li>
      <li>Haemoglobin, haematocrit, reticulocytes, blood film, total and conjugated bilirubin.</li>
      <li>Maternal antibody screen and identification, if not already done.</li>
    </ul>
    <h4>Interpretation traps</h4>
    <div class="table-wrap"><table>
      <tr><th>Finding</th><th>Interpretation</th></tr>
      <tr><td>Weak DAT with group O mother, A or B baby</td><td>Compatible with ABO HDFN; a negative DAT does not exclude it</td></tr>
      <tr><td>Positive DAT, maternal RhIG history</td><td><strong>Passive anti-D</strong> possible; correlate with haemolysis markers</td></tr>
      <tr><td><strong>Mixed field</strong> reaction</td><td>Recent <strong>intrauterine transfusion</strong> or fetomaternal haemorrhage</td></tr>
      <tr><td>Delayed or diluted sample</td><td>False values; repeat before acting</td></tr>
    </table></div>
    <p>A positive DAT does not equal HDFN. Passive anti-D from antenatal RhIG can coat cells without haemolysis, and an infant who received an intrauterine transfusion may have donor cells that type differently from the infant. Report findings with an interpretation and a recommendation, not just numbers.</p>
    <h4>Communication</h4>
    <p>Telephone <strong>critical bilirubin</strong> or haemoglobin results, document read-back, and ensure the neonatal team knows the maternal antibody and the planned follow-up. The cord result is the starting point for the postnatal curve, not the final answer.</p>
  `,
  tip: "Two traps to name: passive anti-D after RhIG, and mixed-field typing after intrauterine transfusion.",
  sources: ["B1", "B2"]
},
{
  id: "ih123", domain: "ih-hdfn",
  q: "Discuss perinatal reference intervals for haemoglobin, reticulocytes and bilirubin, and the errors that arise when adult ranges are applied.",
  tags: ["reference intervals", "neonatal haematology", "bilirubin", "interpretation"],
  keypoints: ["physiological nadir", "gestational age", "postnatal age", "MCV", "fetal haemoglobin", "reticulocytes", "hour-specific nomograms", "rate of rise", "conjugated bilirubin", "reference intervals", "transfusion"],
  answer: `
    <h4>Why adult ranges fail</h4>
    <p>Neonatal haematology changes rapidly. Haemoglobin and haematocrit are high at birth, fall to a <strong>physiological nadir</strong> at about 8–12 weeks, and are influenced by <strong>gestational age</strong>, altitude, sampling site and delay in analysis. <strong>MCV</strong> is higher because of <strong>fetal haemoglobin</strong> and young red cells, and <strong>reticulocytes</strong> are higher than in adults. Applying adult <strong>reference intervals</strong> produces false alarms and missed disease.</p>
    <h4>What should be age-specific</h4>
    <div class="table-wrap"><table>
      <tr><th>Analyte</th><th>Neonatal pattern</th><th>Caveat</th></tr>
      <tr><td>Haemoglobin / haematocrit</td><td>High at birth, then falls</td><td>Interpret by <strong>postnatal age</strong> and gestation</td></tr>
      <tr><td>MCV</td><td>Higher than adult</td><td>Falls over the first months</td></tr>
      <tr><td>Reticulocytes</td><td>Higher at birth</td><td>Low counts are more informative than high ones</td></tr>
      <tr><td>Platelets</td><td>Similar to adult</td><td>Sample clumping can mimic thrombocytopenia</td></tr>
      <tr><td>White cells</td><td>Higher, with a left shift</td><td>Do not apply adult differentials</td></tr>
    </table></div>
    <h4>Bilirubin is different</h4>
    <p>Bilirubin should be interpreted on <strong>hour-specific nomograms</strong> that incorporate gestational age and risk factors, not on a single upper limit. The <strong>rate of rise</strong> and the trend matter more than one value. <strong>Conjugated bilirubin</strong> has its own threshold and is always pathological when raised.</p>
    <h4>Laboratory practice</h4>
    <ul>
      <li>Adopt intervals by gestational and postnatal age, and state the source.</li>
      <li>Validate the analyser for neonatal samples; HbF and small volumes can interfere.</li>
      <li>Report the method and units; avoid changing methods mid-monitoring.</li>
      <li>Remember that a value after <strong>transfusion</strong> reflects donor cells, not the infant's marrow.</li>
    </ul>
    <p>Reference intervals are a communication tool. The report should state which interval was used, so the clinician does not compare a neonatal result with an adult range from a different laboratory.</p>
  `,
  tip: "End on the practical point: the report must name the age-specific interval it used.",
  sources: ["B1", "B2"]
},
{
  id: "ih124", domain: "ih-hdfn",
  q: "Discuss the design, audit and limitations of an antenatal RhIG prophylaxis programme, including the Philippine setting.",
  tags: ["RhIG programme", "audit", "prevention", "Philippines"],
  keypoints: ["RhIG", "D-negative", "antibody screen", "antenatal prophylaxis", "postpartum prophylaxis", "fetomaternal haemorrhage", "audit", "quality indicators", "cell-free fetal DNA", "wastage", "coverage", "documented lot number"],
  answer: `
    <h4>The population question</h4>
    <p>Routine antenatal and postpartum <strong>RhIG</strong> is cost-effective where <strong>D-negative</strong> women are common, as in European populations. In the Philippines and much of East and Southeast Asia, D-negativity is rare — well under 1% in most surveys — so the absolute number of eligible women is small and every missed case is conspicuous. A programme must therefore be built on accurate typing and reliable follow-up rather than on volume.</p>
    <h4>Components of a programme</h4>
    <ol>
      <li>Identify every D-negative, non-immunised pregnant woman at booking; confirm with a second sample if the result is unexpected.</li>
      <li>Perform an <strong>antibody screen</strong> at booking and again before the antenatal dose.</li>
      <li>Give <strong>antenatal prophylaxis</strong> at the recommended gestation, and <strong>postpartum prophylaxis</strong> after delivery of a D-positive infant, with a <strong>documented lot number</strong>.</li>
      <li>Quantify <strong>fetomaternal haemorrhage</strong> after delivery and after sensitising events, and add extra vials when needed.</li>
      <li><strong>Audit</strong> coverage, timing, wastage and failures; report adverse events.</li>
    </ol>
    <h4>Quality indicators</h4>
    <p>Percentage of eligible women who receive antenatal RhIG; percentage who receive postpartum RhIG within the window; percentage of D-negative women with a documented antibody screen at 28 weeks; rate of new anti-D immunisation; <strong>wastage</strong> per 100 doses; and time from delivery to prophylaxis. Audit without feedback does not change practice.</p>
    <h4>Targeted prophylaxis</h4>
    <p><strong>Cell-free fetal DNA</strong> can restrict antenatal RhIG to women carrying a D-positive fetus, sparing product and exposure. It requires reliable laboratory access and a plan for inconclusive results. In low-prevalence settings the main gains are still basic: correct typing, no missed events and no unmonitored pregnancy.</p>
  `,
  tip: "For the Philippine answer, stress low D-negative prevalence and therefore the importance of not missing the rare eligible woman.",
  sources: ["B1", "B10", "B7"]
},
{
  id: "ih125", domain: "ih-hdfn",
  q: "Discuss the counselling of a couple after maternal alloimmunisation, including recurrence risk, monitoring and delivery planning.",
  tags: ["counselling", "alloimmunisation", "recurrence risk", "pregnancy"],
  keypoints: ["zygosity", "50% chance", "severity", "antibody titres", "MCA-PSV", "amniocentesis", "cordocentesis", "intrauterine transfusion", "exchange transfusion", "antibody card", "preconception counseling"],
  answer: `
    <h4>Start with the facts</h4>
    <p>Counselling begins with the antibody, its titre, the father's phenotype and <strong>zygosity</strong>, and the fetal antigen status. If the father is heterozygous, each pregnancy has a <strong>50% chance</strong> of an antigen-positive fetus; if the fetus is antigen-negative, the pregnancy is not at risk. The couple should understand that <strong>severity</strong> usually increases in subsequent pregnancies, and that a previous mild course does not guarantee a mild one.</p>
    <h4>What monitoring involves</h4>
    <ul>
      <li>Serial <strong>antibody titres</strong> and <strong>MCA-PSV</strong> Doppler, with a schedule and the reason for each test.</li>
      <li>The possibility of <strong>amniocentesis</strong> or <strong>cordocentesis</strong>, with their risks.</li>
      <li><strong>Intrauterine transfusion</strong>: what it involves, the need for repeated procedures and the small procedure-related loss rate.</li>
      <li>Delivery at a centre with neonatal intensive care and <strong>exchange transfusion</strong> capability.</li>
    </ul>
    <h4>Decisions and uncertainty</h4>
    <p>Discuss the range of outcomes rather than a single prediction. Ask about future pregnancy plans, because the timing of referral and the intensity of monitoring depend on them. Address the emotional burden of a potentially life-threatening fetal disease, and offer written information and a contact point.</p>
    <h4>Practical follow-up</h4>
    <p>Give an <strong>antibody card</strong>, document the antibody permanently, and explain that antigen-negative blood will be needed if she is ever transfused. Arrange <strong>preconception counseling</strong> for the next pregnancy and ensure the neonatal team receives the maternal antibody history. Clear handover prevents the common failure of a new pregnancy being managed as if the antibody were insignificant.</p>
  `,
  tip: "Cover the 50% recurrence figure, the possibility of worsening disease, and the written antibody card.",
  sources: ["B10", "B1", "B11"]
},
{
  id: "ih126", domain: "ih-hdfn",
  q: "Discuss quality and safety in perinatal immunohematology, from specimen collection to critical result reporting.",
  tags: ["quality", "patient safety", "critical values", "perinatal testing"],
  keypoints: ["wrong baby", "Wharton's jelly", "two identifiers", "QC", "monospecific", "titration", "genotyping", "critical values", "external quality assessment", "AABB Standards", "ISO 15189", "wrong-blood-in-tube"],
  answer: `
    <h4>Pre-analytical failures</h4>
    <p>Most perinatal errors begin before the analyser. <strong>Wrong baby</strong>, wrong mother, unlabelled or mislabelled cord samples, and dilution with <strong>Wharton's jelly</strong> or maternal blood are recurring events. Use <strong>two identifiers</strong>, label at the bedside, state the specimen type and time, and reject haemolysed or clotted samples when they would invalidate the result.</p>
    <h4>Analytical controls</h4>
    <ul>
      <li>Daily <strong>QC</strong> of antisera and reagent cells with positive and negative controls.</li>
      <li>Use <strong>monospecific</strong> anti-IgG and anti-C3 for the DAT; a polyspecific reagent can obscure the distinction.</li>
      <li>For <strong>titration</strong>, keep the method, indicator cells and reading technique constant, and test the previous sample in parallel.</li>
      <li>For weak or discrepant D typing, do not report a final type without <strong>genotyping</strong> or referral.</li>
      <li>Perform elution and adsorption with appropriate controls to avoid false-negative results.</li>
    </ul>
    <h4>Post-analytical communication</h4>
    <p><strong>Critical values</strong> — a rapidly rising bilirubin, a low haemoglobin, a strongly positive DAT or a newly identified antibody — must be telephoned, documented with read-back and entered in the record. Interpretive comments should state the likely significance and the recommended next step. A report that gives a number without context invites both over-treatment and under-treatment.</p>
    <h4>System level</h4>
    <p>Participate in <strong>external quality assessment</strong>, audit mislabelled samples and <strong>wrong-blood-in-tube</strong> events, and review near misses. <strong>AABB Standards</strong> and <strong>ISO 15189</strong> provide the framework, but the culture that reports and learns from errors matters more than the manual. In perinatal testing, a single identification error can affect two patients at once.</p>
  `,
  tip: "Frame the answer as pre-analytical, analytical and post-analytical — then name the wrong-baby and wrong-blood-in-tube traps.",
  sources: ["B1", "B5", "B2"]
}
);
