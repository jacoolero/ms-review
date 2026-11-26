/* Immunohematology — blood group systems, part B: ih73–ih90 */
window.QBANK.push(
{
  id: "ih73", domain: "ih-groups",
  q: "Discuss the weak B subgroups, the B(A) phenotype and cis-AB, and explain their laboratory and transfusion implications.",
  tags: ["B subgroups", "cis-AB", "B(A)", "ABO discrepancy"],
  keypoints: ["B3", "Bm", "Bel", "B(A)", "cis-AB", "anti-A,B", "mixed-field", "saliva", "adsorption-elution", "genotyping", "reverse grouping", "anti-B", "group O", "family studies", "transferase"],
  answer: `
    <h4>Weak B phenotypes</h4>
    <p>Weak B subgroups are a group II ABO discrepancy: the forward grouping is weak or negative while the reverse grouping shows the expected anti-A. <strong>B3</strong> gives mixed-field agglutination with anti-B and anti-A,B. <strong>Bm</strong> has no B antigen on the red cells but secretes B substance in saliva. <strong>Bel</strong> is detected only by adsorption and elution. In the <strong>B(A)</strong> phenotype a mutated B <strong>transferase</strong> also adds a little A, so the cells react with anti-A while the serum contains anti-A.</p>
    <table>
      <tr><th>Phenotype</th><th>Forward grouping</th><th>Reverse grouping</th><th>Confirmatory approach</th></tr>
      <tr><td>B3</td><td>Mixed-field with anti-B</td><td>Anti-A</td><td>Adsorption-elution; family studies</td></tr>
      <tr><td>Bm</td><td>No anti-B reactivity</td><td>Anti-A</td><td>Saliva inhibition; genotyping</td></tr>
      <tr><td>Bel</td><td>Weak or negative</td><td>Anti-A</td><td>Elution; genotyping</td></tr>
      <tr><td>B(A)</td><td>Anti-B plus weak anti-A</td><td>Anti-A</td><td>Monoclonal reagents; genotyping</td></tr>
    </table>
    <h4>cis-AB</h4>
    <p><strong>cis-AB</strong> alleles place A and B activity on one chromosome. The phenotype is usually A2B3 or A1B3 with weak B, and the serum often contains anti-B. <strong>Family studies</strong> are characteristic: an AB parent and an O parent can have an AB child, which looks like a parentage exclusion unless cis-AB is recognised.</p>
    <h4>Laboratory and clinical approach</h4>
    <ul>
      <li>Repeat the grouping with monoclonal anti-A, anti-B and <strong>anti-A,B</strong>; test saliva in secretors.</li>
      <li>Use adsorption-elution and <strong>genotyping</strong> to confirm the subgroup.</li>
      <li>Transfuse <strong>group O</strong> red cells until the discrepancy is resolved.</li>
      <li>Do not use plasma from a cis-AB donor as universal AB plasma, because it may contain anti-B.</li>
    </ul>
    <p>These phenotypes matter most in donors, where a weak B can be mistyped as O and cause a haemolytic reaction in a group O recipient.</p>
  `,
  tip: "Separate the weak-B subgroup table from cis-AB; examiners reward the family-study clue.",
  sources: ["B2", "B1", "B3"]
},
{
  id: "ih74", domain: "ih-groups", star: true,
  q: "Discuss Rh variants: partial D categories, weak D types, DEL and RHCE variants, and their implications for transfusion and pregnancy.",
  tags: ["Rh variants", "partial D", "DEL", "RHCE"],
  keypoints: ["epitopes", "partial D", "RHD-RHCE hybrid", "weak D", "DEL", "RHD*1227A", "RHCE variants", "V/VS", "hrB", "hrS", "genotyping", "extended matching", "RHD genotyping", "RhIG", "D-negative"],
  answer: `
    <h4>Why Rh variants matter</h4>
    <p>The D antigen is a mosaic of more than 30 <strong>epitopes</strong>. <strong>Partial D</strong> phenotypes lack one or more epitopes, usually through <strong>RHD-RHCE hybrid</strong> genes, and the patient can make anti-D against the missing epitopes. Recognised categories include DII, DIII, DVI, DVII, DAR, DAU and DOL. <strong>Weak D</strong> has all epitopes but fewer antigen sites; types 1, 2 and 3 are usually managed as D-positive, whereas types 4.2, 11 and 15 may be associated with anti-D. No single monoclonal anti-D detects every partial D, so a negative or weak reaction with one reagent does not exclude a variant.</p>
    <h4>DEL and RHCE variants</h4>
    <p><strong>DEL</strong> is D detectable only by adsorption-elution; the Asian-type RHD*1227A allele is the common form in East and Southeast Asia and rarely immunises. <strong>RHCE variants</strong> such as V/VS, hrB, hrS and compound CE alter C/c/E/e expression. Routine antisera may type these cells incorrectly, so <strong>genotyping</strong> is needed before extended matching.</p>
    <table>
      <tr><th>Variant</th><th>Serology</th><th>Risk</th><th>Management</th></tr>
      <tr><td>Partial D</td><td>D-positive by routine reagents</td><td>Anti-D to missing epitopes</td><td>D-negative blood; RhIG in pregnancy</td></tr>
      <tr><td>Weak D types 1–3</td><td>Weak D</td><td>Low</td><td>Manage as D-positive</td></tr>
      <tr><td>DEL</td><td>D-negative</td><td>Low in Asian type</td><td>Genotype; usually D-negative blood</td></tr>
      <tr><td>RHCE variant</td><td>Altered C/c/E/e</td><td>Alloimmunisation</td><td>Genotype; phenotype-match</td></tr>
    </table>
    <h4>Clinical application</h4>
    <p>Patients with sickle cell disease and thalassaemia need <strong>extended matching</strong> for C, c, E, e and K to prevent alloimmunisation. A weakly reactive D in a patient or pregnant woman should trigger <strong>RHD genotyping</strong>; until the result is available, give D-negative blood and consider RhIG. In a woman with partial D, RhIG is appropriate because she can make anti-D. Donors with weak D are labelled D-positive, while DEL donors require local policy because their units can immunise D-negative recipients. Molecular testing also guides antigen matching in multi-transfused patients, in whom serology is confounded by donor cells.</p>
  `,
  tip: "Link each variant to one action: partial D gets D-negative blood, weak D type 1–3 is D-positive.",
  sources: ["B1", "B3", "B4"]
},
{
  id: "ih75", domain: "ih-groups", star: true,
  q: "Discuss Rh antibodies other than anti-D, including anti-C, anti-c, anti-E, anti-e, anti-G, anti-f and anti-Rh17.",
  tags: ["Rh antibodies", "anti-G", "anti-f", "anti-Rh17"],
  keypoints: ["IgG", "indirect antiglobulin test", "anti-C", "anti-c", "anti-E", "anti-e", "anti-G", "anti-f", "anti-ce", "anti-Rh17", "compound antigen", "dosage", "antigen-negative", "HDFN", "HTR"],
  answer: `
    <h4>Specificities other than anti-D</h4>
    <p>Rh antibodies are <strong>IgG</strong>, warm-reactive, do not bind complement and are detected by the <strong>indirect antiglobulin test</strong>. <strong>Anti-C</strong>, <strong>anti-c</strong>, <strong>anti-E</strong> and <strong>anti-e</strong> are the common specificities. Anti-E is frequent in Asian patients, anti-c is an important cause of <strong>HDFN</strong>, and anti-C often accompanies anti-D.</p>
    <h4>Compound and partial antigens</h4>
    <p><strong>Anti-G</strong> reacts with C-positive and D-positive cells and can mimic combined anti-C plus anti-D. <strong>Anti-f</strong> (anti-ce) recognises the <strong>compound antigen</strong> made when c and e are in cis; it does not react with c-positive or e-positive cells alone. Anti-Ce and <strong>anti-Rh17</strong> (anti-Hr0) are rare but clinically important. Anti-Rh17 appears in people with the D-- phenotype and reacts with all cells except D--.</p>
    <table>
      <tr><th>Antibody</th><th>Reacts with</th><th>Clinical note</th></tr>
      <tr><td>Anti-C</td><td>C-positive cells</td><td>Often with anti-D</td></tr>
      <tr><td>Anti-c</td><td>c-positive cells</td><td>HDFN, delayed HTR</td></tr>
      <tr><td>Anti-E</td><td>E-positive cells</td><td>Common in Asia</td></tr>
      <tr><td>Anti-f</td><td>c and e in cis</td><td>Compound antigen</td></tr>
      <tr><td>Anti-G</td><td>C- or D-positive cells</td><td>Mimics anti-C plus anti-D</td></tr>
    </table>
    <h4>Transfusion and pregnancy</h4>
    <ul>
      <li>Rh antibodies show <strong>dosage</strong>, so homozygous panel cells are used for exclusion.</li>
      <li>Enzymes enhance Rh reactions; this helps identification but is not a substitute for AHG.</li>
      <li>Provide <strong>antigen-negative</strong> units matched for the corresponding antigen; phenotype-match C, c, E and e in chronically transfused patients.</li>
      <li>Monitor anti-c and other Rh titres in pregnancy and use middle cerebral artery Doppler when the titre rises.</li>
    </ul>
    <p>Rh antibodies do not bind complement, so a positive DAT in a patient with anti-E is usually IgG-only; C3d positivity points to a second, complement-binding antibody. Warm autoantibodies may mimic anti-e or anti-C, especially in AIHA. Distinguish autoantibody from alloantibody by testing the eluate, phenotyping or genotyping the patient, and adsorbing the plasma before re-testing. Never assume an apparent anti-e is benign until an underlying alloantibody has been excluded.</p>
  `,
  tip: "Anti-G and anti-f are the two specificities that separate a strong answer from a list.",
  sources: ["B1", "B2", "B3"]
},
{
  id: "ih76", domain: "ih-groups",
  q: "Discuss the Kell blood group system: antigens, null phenotypes, antibody characteristics and clinical significance.",
  tags: ["Kell", "K0", "Kmod", "McLeod"],
  keypoints: ["KEL", "chromosome 7", "Kell glycoprotein", "zinc endopeptidase", "XK", "k", "Kpᵃ", "Kpᵇ", "Jsᵃ", "Jsᵇ", "K0", "anti-Ku", "Kmod", "McLeod", "DTT"],
  answer: `
    <h4>The Kell system</h4>
    <p><strong>KEL</strong> lies on chromosome 7 and encodes the <strong>Kell glycoprotein</strong>, a type II membrane protein with <strong>zinc endopeptidase</strong> activity. It is linked by a disulphide bond to the <strong>XK</strong> protein. The major antigens are K (K1), <strong>k</strong> (K2), <strong>Kpᵃ</strong>, <strong>Kpᵇ</strong>, <strong>Jsᵃ</strong> and <strong>Jsᵇ</strong>; K and k differ by a single amino acid. K, Kpᵃ and Jsᵃ are low-frequency antigens, whereas k, Kpᵇ and Jsᵇ are high frequency; K is much less common in Asians than in Europeans.</p>
    <h4>Null and weak phenotypes</h4>
    <p><strong>K0</strong> cells lack all Kell antigens and can make <strong>anti-Ku</strong> (anti-K5), which reacts with all Kell-positive cells. <strong>Kmod</strong> has weak expression. The <strong>McLeod</strong> phenotype is caused by absent XK, not by KEL: it shows weak Kell antigens, acanthocytosis, myopathy and sometimes chronic granulomatous disease.</p>
    <table>
      <tr><th>Feature</th><th>Detail</th></tr>
      <tr><td>Antigen site</td><td>Kell glycoprotein, disulphide-linked to XK</td></tr>
      <tr><td>Enzyme effect</td><td>Resistant to ficin and papain; destroyed by DTT and 2-ME</td></tr>
      <tr><td>Antibody class</td><td>IgG, warm-reactive</td></tr>
      <tr><td>Clinical risk</td><td>HTR and severe HDFN</td></tr>
    </table>
    <h4>Clinical application</h4>
    <ul>
      <li><strong>Anti-K</strong> suppresses fetal erythropoiesis as well as causing haemolysis, so HDFN can be severe with a relatively low bilirubin.</li>
      <li>K is highly immunogenic; many services give <strong>K-negative</strong> units to girls and women of childbearing potential.</li>
      <li><strong>DTT</strong> treatment used to overcome daratumumab destroys Kell, so anti-K cannot be excluded; give K-negative units unless the patient is known K-positive.</li>
      <li><strong>Genotyping</strong> is useful when phenotyping is unreliable after transfusion.</li>
    </ul>
    <p>Anti-k, anti-Kpᵃ and anti-Jsᵃ are less common but behave like anti-K: they are IgG, clinically significant and capable of causing HTR and HDFN. The Kell glycoprotein is a zinc endopeptidase that cleaves endothelin-3, yet K0 individuals have no clear disease, so the antigen is more important to the transfusion service than to physiology. Because Kell antigens survive ficin and papain, enzyme-treated panels remain useful for anti-K identification, but DTT or 2-ME treatment used for daratumumab abolishes them.</p>
  `,
  tip: "The McLeod phenotype is an XK disease, not a Kell null — state that distinction.",
  sources: ["B2", "B3", "B1"]
},
{
  id: "ih77", domain: "ih-groups",
  q: "Discuss the Duffy blood group system, including the Fy(a−b−) phenotype, its malaria resistance and the clinical significance of Duffy antibodies.",
  tags: ["Duffy", "Fy(a−b−)", "malaria", "GATA-1"],
  keypoints: ["FY", "ACKR1", "chemokine receptor", "Fyᵃ", "Fyᵇ", "Fy(a−b−)", "GATA-1", "Fy^x", "Plasmodium vivax", "P. knowlesi", "anti-Fyᵃ", "anti-Fy3", "ficin", "antigen-negative"],
  answer: `
    <h4>The Duffy system</h4>
    <p><strong>FY</strong> encodes <strong>ACKR1</strong> (also called DARC), a seven-transmembrane <strong>chemokine receptor</strong>. The antithetical antigens <strong>Fyᵃ</strong> and <strong>Fyᵇ</strong> differ by a single amino acid. Most people of West African ancestry with <strong>Fy(a−b−)</strong> have a <strong>GATA-1</strong> promoter mutation that silences FY in erythroid cells only, so the protein remains on other tissues. <strong>Fy^x</strong> is a weak variant. The common African allele is FY*B^ES, which carries the GATA-1 mutation; it is not a deletion, so genotyping must distinguish it from a true null allele.</p>
    <h4>Duffy and malaria</h4>
    <p>Duffy is the receptor used by <strong>Plasmodium vivax</strong> and <strong>P. knowlesi</strong> to invade red cells. Duffy-negative people are largely resistant to vivax malaria, although Duffy-independent P. vivax has now been reported in Africa. This is the classic example of a blood group antigen acting as a pathogen receptor.</p>
    <table>
      <tr><th>Antibody</th><th>Reaction</th><th>Significance</th></tr>
      <tr><td>Anti-Fyᵃ</td><td>IgG, AHG</td><td>HTR, HDFN</td></tr>
      <tr><td>Anti-Fyᵇ</td><td>IgG, AHG</td><td>HTR, HDFN</td></tr>
      <tr><td>Anti-Fy3</td><td>Reacts with Fy(a−b−) cells</td><td>High-prevalence antigen</td></tr>
      <tr><td>Anti-Fy5</td><td>Requires Rh proteins</td><td>Rare</td></tr>
    </table>
    <h4>Clinical application</h4>
    <ul>
      <li>Duffy antigens are <strong>destroyed by ficin</strong> and papain, so enzyme-treated cells are unhelpful for anti-Fyᵃ identification.</li>
      <li>Fyᵃ is near-universal in Asian populations, so anti-Fyᵃ is uncommon locally, but anti-Fyᵇ and anti-Fy3 occur.</li>
      <li>Provide <strong>antigen-negative</strong> units for anti-Fyᵃ; genotype patients with sickle cell disease who are repeatedly transfused.</li>
      <li>Duffy typing is also used in population genetics and in studies of malaria resistance.</li>
    </ul>
    <p>Anti-Fyᵃ is predominantly IgG1, reacts best by AHG and shows dosage, so homozygous Fy(a+b−) cells are preferred for exclusion. It does not bind complement strongly, and the clinical picture is usually extravascular. Anti-Fyᵇ behaves similarly. In pregnancy, a rising anti-Fyᵃ titre or a falling fetal haemoglobin requires fetal surveillance. Because Duffy is a chemokine receptor, Duffy-negative individuals have altered plasma chemokine levels, but this has no practical consequence for transfusion.</p>
  `,
  tip: "Name the GATA-1 promoter mutation — it explains why Fy(a−b−) is erythroid-only.",
  sources: ["B2", "B3", "B1"]
},
{
  id: "ih78", domain: "ih-groups",
  q: "Describe the Lutheran blood group system: genetics, the Lu(a−b−) phenotypes, Lutheran antibodies and their clinical significance.",
  tags: ["Lutheran", "In(Lu)", "Lu(a−b−)", "BCAM"],
  keypoints: ["LU", "chromosome 19", "BCAM", "laminin receptor", "Luᵃ", "Luᵇ", "Lu(a−b−)", "In(Lu)", "KLF1", "anti-Luᵃ", "anti-Luᵇ", "anti-Lu3", "rare donor registry", "AHG"],
  answer: `
    <h4>Antigens and genetics</h4>
    <p><strong>LU</strong> is on chromosome 19 and encodes <strong>BCAM</strong>, an immunoglobulin-superfamily <strong>laminin receptor</strong>. The antithetical antigens <strong>Luᵃ</strong> and <strong>Luᵇ</strong> differ at residue 77. The null phenotype <strong>Lu(a−b−)</strong> has three mechanisms: recessive LU null alleles, the dominant <strong>In(Lu)</strong> inhibitor, and an X-linked form.</p>
    <h4>In(Lu) and KLF1</h4>
    <p><strong>In(Lu)</strong> is a mutation in <strong>KLF1</strong> that suppresses Lutheran expression and also reduces i, P1, AnWj and some other antigens. It is not a Kell or Rh problem, but it can confuse antigen typing and is easily mistaken for a null phenotype. Lutheran antigens are well developed on cord red cells. The Lu glycoprotein is a <strong>laminin receptor</strong> that supports adhesion of sickle cells to endothelium and participates in erythroid differentiation.</p>
    <table>
      <tr><th>Antibody</th><th>Class</th><th>Clinical significance</th></tr>
      <tr><td>Anti-Luᵃ</td><td>IgM, sometimes IgG</td><td>Usually insignificant</td></tr>
      <tr><td>Anti-Luᵇ</td><td>IgG</td><td>Mild HTR; rare HDFN</td></tr>
      <tr><td>Anti-Lu3</td><td>IgG</td><td>Reacts with all Lu(a−b−) cells</td></tr>
    </table>
    <h4>Clinical application</h4>
    <ul>
      <li>Lutheran antibodies are often weak and may be missed unless <strong>AHG</strong> and enzyme techniques are used; they can show dosage.</li>
      <li>Anti-Luᵇ has caused delayed haemolytic reactions, so provide <strong>Luᵇ-negative</strong> units when it is identified.</li>
      <li>Lu(a−b−) blood is rare; siblings and the <strong>rare donor registry</strong> are the best sources.</li>
      <li>Lutheran antigens are well developed at birth, but Lutheran antibodies rarely cause HDFN.</li>
    </ul>
    <p>Anti-Luᵃ is usually IgM and reacts at room temperature, whereas anti-Luᵇ is IgG and reacts by AHG; both can show dosage. In(Lu) cells have very weak Lutheran antigens rather than a true null, so In(Lu) individuals do not usually make anti-Lu3. A true LU null, by contrast, can make anti-Lu3, which reacts with all Lutheran-positive cells and makes transfusion difficult.</p>
  `,
  tip: "In(Lu) is a KLF1 suppressor, not a Lutheran null — that is the high-yield distinction.",
  sources: ["B2", "B3", "B1"]
},
{
  id: "ih79", domain: "ih-groups",
  q: "Discuss the Diego blood group system, including Diᵃ, Diᵇ, Wrᵃ and Wrᵇ, band 3 and Southeast Asian ovalocytosis.",
  tags: ["Diego", "band 3", "Wrᵃ", "ovalocytosis"],
  keypoints: ["DI", "SLC4A1", "chromosome 17", "band 3", "anion exchanger", "Diᵃ", "Diᵇ", "Wrᵃ", "Wrᵇ", "anti-Diᵃ", "HTR", "HDFN", "Southeast Asian ovalocytosis", "Plasmodium falciparum"],
  answer: `
    <h4>Diego and band 3</h4>
    <p><strong>DI</strong> is carried by <strong>SLC4A1</strong> on chromosome 17, which encodes <strong>band 3</strong>, the red cell <strong>anion exchanger</strong> (AE1). <strong>Diᵃ</strong> and <strong>Diᵇ</strong> differ by one amino acid. <strong>Wrᵃ</strong> and <strong>Wrᵇ</strong> are also Diego antigens, although they behave serologically as a separate pair.</p>
    <h4>Population and clinical significance</h4>
    <p>Diᵃ is uncommon in Europeans but occurs in East and Southeast Asian populations, including Filipinos, so <strong>anti-Diᵃ</strong> must be considered in local antibody identification. Anti-Diᵃ is IgG and causes <strong>HTR</strong> and severe <strong>HDFN</strong>. Anti-Wrᵃ is often a low-titre antibody that can still cause delayed HTR.</p>
    <table>
      <tr><th>Antigen</th><th>Frequency pattern</th><th>Antibody</th></tr>
      <tr><td>Diᵃ</td><td>Higher in Asian populations</td><td>Anti-Diᵃ — HTR, HDFN</td></tr>
      <tr><td>Diᵇ</td><td>High prevalence</td><td>Anti-Diᵇ — rare</td></tr>
      <tr><td>Wrᵃ</td><td>Low prevalence</td><td>Anti-Wrᵃ — usually weak</td></tr>
      <tr><td>Wrᵇ</td><td>High prevalence</td><td>Anti-Wrᵇ — rare</td></tr>
    </table>
    <h4>Band 3, ovalocytosis and malaria</h4>
    <p>Band 3 exchanges chloride and bicarbonate and anchors the membrane skeleton. <strong>Southeast Asian ovalocytosis</strong> is caused by a 27-base-pair deletion in SLC4A1; the rigid ovalocytes resist <strong>Plasmodium falciparum</strong> invasion. Band 3 is the most abundant red cell membrane protein, and its cytoplasmic domain binds ankyrin and protein 4.2, linking the membrane to the spectrin skeleton. The same protein carries Diego antigens, so altered band 3 can change antigen expression. Anti-Diᵃ is usually IgG1 or IgG3, reacts by AHG and can cause severe HDFN; anti-Wrᵃ is often low titre but has been associated with HTR and HDFN.</p>
    <h4>Practical points</h4>
    <ul>
      <li>Type patients with anti-Diᵃ for Diᵇ and provide <strong>Diᵃ-negative</strong> units.</li>
      <li>Do not assume a negative antibody screen excludes anti-Wrᵃ; it may be low titre.</li>
      <li>Genotyping helps when transfused cells obscure phenotyping.</li>
    </ul>
  `,
  tip: "Band 3 does two jobs — anion transport and Diego antigens; say both.",
  sources: ["B3", "B2", "B1"]
},
{
  id: "ih80", domain: "ih-groups",
  q: "Discuss the Colton blood group system: the aquaporin-1 carrier, Coᵃ and Coᵇ, the Colton-null phenotype and antibody significance.",
  tags: ["Colton", "aquaporin-1", "Co3", "null phenotype"],
  keypoints: ["CO", "chromosome 7", "aquaporin-1", "AQP1", "Coᵃ", "Coᵇ", "Co(a−b−)", "anti-Co3", "HTR", "HDFN", "rare donor registry", "antigen-negative"],
  answer: `
    <h4>Antigens and the aquaporin-1 carrier</h4>
    <p><strong>CO</strong> is on chromosome 7 and encodes <strong>aquaporin-1</strong> (AQP1), a water-channel protein. <strong>Coᵃ</strong> is a high-prevalence antigen and <strong>Coᵇ</strong> is low prevalence; they differ by a single amino acid. <strong>Co(a−b−)</strong> is very rare; these people can make <strong>anti-Co3</strong>, which reacts with all Colton-positive cells.</p>
    <h4>Clinical significance</h4>
    <p>Anti-Coᵃ and anti-Coᵇ are IgG antibodies detected by <strong>AHG</strong>. They have caused <strong>HTR</strong> and <strong>HDFN</strong>. Anti-Co3 behaves as an antibody to a high-prevalence antigen and makes compatible blood difficult to find. Colton antigens are well developed at birth, and anti-Coᵃ may show dosage, so homozygous Co(a+b−) cells are best for exclusion. Anti-Coᵃ is encountered more often than anti-Coᵇ; both are detected by AHG. Molecular typing is useful because Colton antisera are scarce and because transfused cells can obscure phenotyping.</p>
    <table>
      <tr><th>Feature</th><th>Detail</th></tr>
      <tr><td>Carrier</td><td>Aquaporin-1 water channel</td></tr>
      <tr><td>Antigens</td><td>Coᵃ, Coᵇ, Co3</td></tr>
      <tr><td>Null phenotype</td><td>Co(a−b−)</td></tr>
      <tr><td>Antibody</td><td>IgG; HTR and HDFN</td></tr>
    </table>
    <h4>Aquaporin physiology</h4>
    <p>Aquaporin-1 is abundant in the proximal tubule and descending limb of the kidney, where it supports water reabsorption, and in the choroid plexus and lung. Colton-null individuals do not have a severe disease, which shows that other aquaporins compensate; some have reduced water permeability but no major clinical syndrome. This is a useful example of a blood group protein with a defined transport function but a mild null phenotype.</p>
    <h4>Transfusion practice</h4>
    <ul>
      <li>Provide <strong>antigen-negative</strong> units for anti-Coᵃ or anti-Coᵇ.</li>
      <li>For anti-Co3, search the <strong>rare donor registry</strong> and consider siblings.</li>
      <li>Phenotype or genotype family members when a rare antibody is found.</li>
      <li>Monitor pregnancies with anti-Coᵃ or anti-Coᵇ by titre and fetal Doppler.</li>
    </ul>
  `,
  tip: "Colton is aquaporin-1; the null phenotype is mild because other aquaporins compensate.",
  sources: ["B3", "B2", "B1"]
},
{
  id: "ih81", domain: "ih-groups",
  q: "Compare the Scianna and Gerbich blood group systems, including the Leach phenotype, and explain their clinical importance.",
  tags: ["Scianna", "Gerbich", "Leach", "glycophorin C"],
  keypoints: ["SC", "chromosome 1", "Sc1", "Sc2", "Sc3", "GE", "chromosome 2", "glycophorin C", "Ge2", "Ge3", "Leach phenotype", "elliptocytosis", "Plasmodium falciparum", "rare donor registry"],
  answer: `
    <h4>Scianna (SC)</h4>
    <p><strong>SC</strong> is on chromosome 1 and encodes the Scianna glycoprotein, a member of the immunoglobulin superfamily expressed on red cells and placenta. <strong>Sc1</strong> is a high-prevalence antigen, <strong>Sc2</strong> is low prevalence, and <strong>Sc3</strong> is present on all cells except rare nulls. Anti-Sc1 and anti-Sc2 are IgG, can show dosage, and can cause <strong>HTR</strong> and <strong>HDFN</strong>.</p>
    <h4>Gerbich (GE)</h4>
    <p><strong>GE</strong> is on chromosome 2 and encodes <strong>glycophorin C</strong> and glycophorin D. The antigens include <strong>Ge2</strong>, <strong>Ge3</strong> and Ge4. The <strong>Leach phenotype</strong> lacks GPC and GPD, gives <strong>elliptocytosis</strong>, and confers resistance to <strong>Plasmodium falciparum</strong> because glycophorins are invasion receptors. Anti-Ge2 and anti-Ge3 are IgG and can cause delayed HTR and HDFN.</p>
    <table>
      <tr><th>System</th><th>Carrier</th><th>Null phenotype</th><th>Antibody risk</th></tr>
      <tr><td>Scianna</td><td>SC glycoprotein</td><td>Sc1−Sc2−Sc3−</td><td>HTR, HDFN</td></tr>
      <tr><td>Gerbich</td><td>Glycophorin C/D</td><td>Leach</td><td>HTR, HDFN</td></tr>
    </table>
    <h4>Clinical application</h4>
    <ul>
      <li>Anti-Ge2 and anti-Ge3 are clinically significant; provide <strong>antigen-negative</strong> units.</li>
      <li>Gerbich-negative blood is rare, so the <strong>rare donor registry</strong> and family donors are important.</li>
      <li>GPC and GPD are anchored to the membrane skeleton through protein 4.1R; their loss explains the elliptocytosis of the Leach phenotype.</li>
      <li>Scianna antibodies can be missed because reagent cells may lack the low-prevalence antigen; selected cells are needed.</li>
    </ul>
    <p>Ge4 is a high-prevalence antigen, but anti-Ge4 is rare. Gerbich-negative donors are uncommon, and the Leach phenotype is one cause; because GPC and GPD are missing, Leach cells also lack the Ge2, Ge3 and Ge4 antigens. Genotyping is useful when the serological pattern is ambiguous.</p>
  `,
  tip: "Leach = Gerbich null + elliptocytosis + malaria resistance; keep the triad together.",
  sources: ["B3", "B2", "B1"]
},
{
  id: "ih82", domain: "ih-groups",
  q: "Discuss the Cromer blood group system, CD55, the Inab phenotype and the relevance of Cromer antigens in paroxysmal nocturnal haemoglobinuria.",
  tags: ["Cromer", "CD55", "Inab", "PNH"],
  keypoints: ["CROM", "chromosome 1", "CD55", "decay-accelerating factor", "GPI-anchored", "Crᵃ", "Drᵃ", "Tcᵃ", "WESᵃ", "Inab", "PNH", "HTR", "HDFN", "rare donor registry"],
  answer: `
    <h4>Antigens and CD55</h4>
    <p><strong>CROM</strong> is on chromosome 1 and encodes <strong>CD55</strong>, the <strong>decay-accelerating factor</strong> (DAF). CD55 is a <strong>GPI-anchored</strong> complement regulator that prevents assembly and persistence of C3 convertases. The Cromer antigens include <strong>Crᵃ</strong>, Crᵇ, <strong>Drᵃ</strong>, <strong>Tcᵃ</strong>, Tcᵇ, <strong>WESᵃ</strong> and several low-prevalence markers. The <strong>Inab</strong> phenotype is Cromer-negative. CD55 is expressed on red cells, endothelium and many other tissues, where it protects the cell surface from complement attack.</p>
    <h4>Antibodies</h4>
    <p>Cromer antibodies are usually IgG and react by <strong>AHG</strong>. <strong>Anti-Crᵃ</strong>, anti-Drᵃ, anti-Tcᵃ and anti-WESᵃ have caused <strong>HTR</strong> and <strong>HDFN</strong>. Reactions may be weak and variable because antigen expression differs between donors.</p>
    <table>
      <tr><th>Feature</th><th>Detail</th></tr>
      <tr><td>Carrier</td><td>CD55 (DAF)</td></tr>
      <tr><td>Membrane anchor</td><td>GPI</td></tr>
      <tr><td>Function</td><td>Complement regulation</td></tr>
      <tr><td>Null phenotype</td><td>Inab</td></tr>
      <tr><td>Antibody risk</td><td>HTR, HDFN</td></tr>
    </table>
    <h4>PNH and clinical application</h4>
    <p>In <strong>paroxysmal nocturnal haemoglobinuria</strong>, the PNH clone lacks GPI-anchored proteins, so CD55 and CD59 are absent and Cromer antigens are weakly expressed or missing. This is why Cromer typing can be misleading in PNH. For transfusion, provide <strong>antigen-negative</strong> units; for anti-Crᵃ or anti-Tcᵃ, search the <strong>rare donor registry</strong>. Pregnancies with Cromer antibodies need titre monitoring and fetal surveillance. The Inab phenotype itself is asymptomatic, but Inab individuals can make anti-Cromer antibodies after transfusion or pregnancy. Because antigen expression varies between donors, weak reactions should be confirmed with selected cells or genotyping before a rare antibody is excluded.</p>
  `,
  tip: "Cromer is CD55 — a complement regulator — so PNH clones type Cromer-negative.",
  sources: ["B3", "B2", "B1"]
},
{
  id: "ih83", domain: "ih-groups",
  q: "Discuss the Indian and JMH blood group systems, their carrier molecules and their clinical and laboratory significance.",
  tags: ["Indian", "JMH", "CD44", "semaphorin 7A"],
  keypoints: ["IN", "chromosome 11", "CD44", "hyaluronan", "Inᵃ", "Inᵇ", "anti-Inᵃ", "HTR", "HDFN", "JMH", "semaphorin 7A", "GPI-anchored", "anti-JMH", "PNH", "rare donor registry"],
  answer: `
    <h4>Indian (IN)</h4>
    <p><strong>IN</strong> is on chromosome 11 and encodes <strong>CD44</strong>, an adhesion molecule and <strong>hyaluronan</strong> receptor. <strong>Inᵃ</strong> is a low-prevalence antigen and <strong>Inᵇ</strong> is high prevalence. <strong>Anti-Inᵃ</strong> is IgG and has caused <strong>HTR</strong> and severe <strong>HDFN</strong>; anti-Inᵇ is rare.</p>
    <h4>JMH</h4>
    <p><strong>JMH</strong> is on chromosome 15 and encodes <strong>semaphorin 7A</strong>, a <strong>GPI-anchored</strong> protein. The JMH antigen is high prevalence. <strong>Anti-JMH</strong> is usually a naturally occurring IgG antibody of no clinical significance, although it has been implicated in mild delayed HTR. It does not cause HDFN. JMH is expressed on red cells, lymphocytes and other tissues, and it is lost from GPI-deficient cells in PNH.</p>
    <table>
      <tr><th>System</th><th>Carrier</th><th>Antigen</th><th>Antibody</th></tr>
      <tr><td>Indian</td><td>CD44</td><td>Inᵃ low, Inᵇ high</td><td>Anti-Inᵃ — HTR, HDFN</td></tr>
      <tr><td>JMH</td><td>Semaphorin 7A</td><td>JMH high</td><td>Anti-JMH — usually insignificant</td></tr>
    </table>
    <h4>PNH and clinical application</h4>
    <p>Because JMH is GPI-anchored, it is lost from the PNH clone, and flow cytometry for JMH (with CD55 and CD59) can help detect <strong>PNH</strong>. In transfusion, anti-Inᵃ requires <strong>Inᵃ-negative</strong> units, which are rare; the <strong>rare donor registry</strong> and family donors are used. Anti-JMH generally does not require antigen-negative blood, but the crossmatch should be compatible and the antibody documented. CD44 also binds hyaluronan and supports leucocyte adhesion, which explains interest in Indian antigens beyond transfusion. CD44 is widely expressed on leucocytes and endothelium and contributes to lymphocyte homing and to sickle cell adhesion, so the Indian system illustrates how a red cell antigen can also be an adhesion molecule.</p>
  `,
  tip: "JMH is GPI-anchored, so it disappears in PNH — a neat link to flow cytometry.",
  sources: ["B3", "B2", "B1"]
},
{
  id: "ih84", domain: "ih-groups", star: true,
  q: "Discuss antibodies to the high-prevalence antigens of the Vel, Lan, JR and OK systems, and how blood is provided for them.",
  tags: ["Vel", "Lan", "JR", "OK", "rare donors"],
  keypoints: ["Vel", "SMIM1", "Lan", "ABCB6", "Jrᵃ", "ABCG2", "Okᵃ", "CD147", "panagglutinins", "antigen-negative", "rare donor registry", "anti-Vel", "complement", "HDFN"],
  answer: `
    <h4>High-prevalence antigens</h4>
    <p><strong>Vel</strong> is carried by <strong>SMIM1</strong> on chromosome 1. <strong>Lan</strong> is carried by <strong>ABCB6</strong> on chromosome 2. <strong>Jrᵃ</strong> is carried by <strong>ABCG2</strong> on chromosome 4, and <strong>Okᵃ</strong> is on <strong>CD147</strong> (basigin). All are high-prevalence antigens, so the corresponding null phenotypes are rare. <strong>Vel</strong> is a small membrane protein of uncertain function; Vel-negative people can make anti-Vel after transfusion or pregnancy. <strong>Lan</strong> is on the porphyrin transporter ABCB6, and <strong>Jrᵃ</strong> is on the drug transporter ABCG2. <strong>Okᵃ</strong> is on CD147, a chaperone for monocarboxylate transporters and the basigin receptor used by <em>P. falciparum</em>.</p>
    <table>
      <tr><th>System</th><th>Carrier</th><th>Antibody</th><th>Clinical significance</th></tr>
      <tr><td>Vel</td><td>SMIM1</td><td>Anti-Vel</td><td>Severe HTR; can bind complement</td></tr>
      <tr><td>Lan</td><td>ABCB6</td><td>Anti-Lan</td><td>HTR, HDFN</td></tr>
      <tr><td>JR</td><td>ABCG2</td><td>Anti-Jrᵃ</td><td>HTR, HDFN</td></tr>
      <tr><td>OK</td><td>CD147</td><td>Anti-Okᵃ</td><td>HTR</td></tr>
    </table>
    <h4>Clinical application</h4>
    <ul>
      <li>These antibodies appear as <strong>panagglutinins</strong> with a negative autocontrol, or as antibodies to a high-prevalence antigen.</li>
      <li>Provide <strong>antigen-negative</strong> units from the <strong>rare donor registry</strong>; siblings are tested early.</li>
      <li><strong>Anti-Vel</strong> is particularly dangerous because it can cause complement-mediated intravascular haemolysis.</li>
      <li>Anti-Jrᵃ and anti-Lan are important in pregnancy; monitor titres and fetal anaemia.</li>
    </ul>
    <h4>Transporter biology</h4>
    <p>ABCG2 exports drugs such as mitoxantrone and statins, so Jr(a−) individuals may have altered drug handling. ABCB6 is a porphyrin transporter, and CD147 is a chaperone for monocarboxylate transporters. These examples show that blood group proteins are not mere markers but functional transporters and adhesion molecules. ABCG2 variants are also associated with gout and with altered handling of statins and anticancer drugs, so a Jr(a−) phenotype can have pharmacological relevance beyond transfusion.</p>
  `,
  tip: "Vel is the complement-binding one — that is why anti-Vel is feared.",
  sources: ["B3", "B1", "B2"]
},
{
  id: "ih85", domain: "ih-groups",
  q: "Discuss the Knops, Chido/Rodgers, Dombrock and Yt blood group systems, emphasising which antibodies are clinically significant.",
  tags: ["Knops", "Chido/Rodgers", "Dombrock", "Yt", "HTLA"],
  keypoints: ["Knops", "CR1", "CD35", "Chido/Rodgers", "C4d", "HTLA", "Dombrock", "ART4", "Doᵃ", "Yt", "acetylcholinesterase", "Ytᵃ", "neutralised by plasma", "HTR"],
  answer: `
    <h4>Knops and Chido/Rodgers</h4>
    <p><strong>Knops</strong> antigens are on <strong>CR1</strong> (CD35), the complement receptor type 1. Knᵃ, McCᵃ, Slᵃ and Ykᵃ are high prevalence. <strong>Chido/Rodgers</strong> antigens are on <strong>C4d</strong> fragments adsorbed from plasma onto red cells. Antibodies to both groups are <strong>HTLA</strong> — high titre, low avidity — and are usually clinically insignificant. Chido/Rodgers antibodies are <strong>neutralised by plasma</strong>. CR1 is also a complement regulator and the receptor that binds C3b-opsonised cells, and it is involved in rosetting of <em>P. falciparum</em>-infected red cells.</p>
    <h4>Dombrock and Yt</h4>
    <p><strong>Dombrock</strong> is on <strong>ART4</strong>, a GPI-anchored ADP-ribosyltransferase, and includes <strong>Doᵃ</strong>, Doᵇ, Joᵃ, Hy and Gya. Anti-Doᵃ can cause <strong>HTR</strong>. <strong>Yt</strong> is on <strong>acetylcholinesterase</strong>; <strong>Ytᵃ</strong> is high prevalence, and anti-Ytᵃ is usually not clinically significant but has caused HTR.</p>
    <table>
      <tr><th>System</th><th>Carrier</th><th>Antibody behaviour</th></tr>
      <tr><td>Knops</td><td>CR1 (CD35)</td><td>HTLA; insignificant</td></tr>
      <tr><td>Chido/Rodgers</td><td>C4d</td><td>HTLA; neutralised by plasma</td></tr>
      <tr><td>Dombrock</td><td>ART4</td><td>Anti-Doᵃ can cause HTR</td></tr>
      <tr><td>Yt</td><td>Acetylcholinesterase</td><td>Usually insignificant</td></tr>
    </table>
    <h4>Practical points</h4>
    <ul>
      <li>Do not over-interpret HTLA antibodies; they cause false-positive screens and crossmatches but rarely shorten red cell survival.</li>
      <li>Distinguish HTLA from clinically significant panagglutinins by titration, neutralisation and the patient's history.</li>
      <li>CR1 is the receptor for complement C3b and is involved in malaria rosetting.</li>
      <li>Document the antibody and select compatible units; antigen-negative units are rarely needed for HTLA antibodies.</li>
    </ul>
    <p>HTLA antibodies are usually IgG, react weakly and are not complement-dependent. Their high titre but low avidity means they dilute out quickly, so titration helps separate them from a significant antibody. Chido/Rodgers antibodies can be confirmed by neutralisation with pooled plasma, and Knops antibodies by their characteristic weak, variable reactivity. Dombrock and Yt antibodies deserve more caution because they have been associated with delayed haemolytic reactions.</p>
  `,
  tip: "Group the HTLA systems together, then name Dombrock as the exception that can haemolyse.",
  sources: ["B2", "B3", "B1"]
},
{
  id: "ih86", domain: "ih-groups",
  q: "Discuss the characteristics that determine whether a red cell antibody is clinically significant, including immunoglobulin class, thermal range, dosage and complement binding.",
  tags: ["antibody characteristics", "clinical significance", "IgG", "IgM"],
  keypoints: ["IgM", "IgG", "complement", "antiglobulin test", "thermal amplitude", "37 °C", "IgG1", "IgG3", "dosage", "naturally occurring", "HTLA", "C3d", "HTR", "HDFN"],
  answer: `
    <h4>Immunoglobulin class</h4>
    <p><strong>IgM</strong> is a pentamer with ten antigen-binding sites. It agglutinates red cells directly, activates <strong>complement</strong> efficiently, and is confined to the intravascular space. <strong>IgG</strong> is a monomer, crosses the placenta, activates complement less well, and usually needs the <strong>antiglobulin test</strong>. IgA and IgE antibodies are uncommon in immunohematology. Because IgM is confined to the intravascular space, it does not cross the placenta, whereas IgG is actively transported and can cause HDFN. Complement activation by IgM is efficient, which is why ABO-incompatible transfusion can produce rapid intravascular haemolysis.</p>
    <h4>Thermal amplitude and clinical significance</h4>
    <p>Antibodies reactive only at 4 °C or room temperature are usually insignificant. An antibody that reacts at <strong>37 °C</strong> or by AHG is potentially significant. <strong>IgG1</strong> and <strong>IgG3</strong> are the most effective at complement activation and Fc receptor binding.</p>
    <table>
      <tr><th>Feature</th><th>Clinically significant</th><th>Usually insignificant</th></tr>
      <tr><td>Class</td><td>IgG, some IgM</td><td>IgM</td></tr>
      <tr><td>Thermal range</td><td>37 °C/AHG</td><td>Cold only</td></tr>
      <tr><td>Examples</td><td>Anti-D, anti-K, anti-Jkᵃ</td><td>Anti-Leᵃ, anti-P1, anti-I</td></tr>
      <tr><td>Effect</td><td>HTR, HDFN</td><td>No shortened survival</td></tr>
    </table>
    <h4>Other characteristics</h4>
    <p>Affinity describes the strength of a single antigen–antibody bond, while avidity describes the overall strength of the multivalent interaction. These properties, together with titre, help predict whether an antibody will shorten red cell survival.</p>
    <ul>
      <li><strong>Dosage</strong>: Rh, Kidd, Duffy, MNS and Lutheran antibodies react more strongly with homozygous cells.</li>
      <li><strong>Naturally occurring</strong> antibodies (anti-A, anti-B, anti-M, anti-P1, anti-Le) arise without transfusion; immune antibodies follow exposure.</li>
      <li>Titre and avidity help distinguish <strong>HTLA</strong> antibodies from significant ones.</li>
      <li>Complement binding is shown by <strong>C3d</strong> on the DAT and suggests intravascular potential.</li>
    </ul>
  `,
  tip: "Thermal range at 37 °C plus AHG reactivity is the single best significance filter.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih87", domain: "ih-groups",
  q: "Explain the use of lectins in blood group serology and the mechanisms and significance of red cell polyagglutination.",
  tags: ["lectins", "polyagglutination", "T activation", "Tn"],
  keypoints: ["lectins", "Dolichos biflorus", "Ulex europaeus", "Arachis hypogaea", "Glycine max", "polyagglutination", "T activation", "neuraminidase", "Tn activation", "Th", "Cad", "ABO discrepancy", "DAT", "washed"],
  answer: `
    <h4>Lectins as typing reagents</h4>
    <p><strong>Lectins</strong> are plant or animal proteins that bind specific sugars. <strong>Dolichos biflorus</strong> agglutinates A₁ cells, <strong>Ulex europaeus</strong> reacts with H, and Bandeiraea simplicifolia recognises B. <strong>Arachis hypogaea</strong> (peanut) binds <strong>T</strong> antigen, and <strong>Glycine max</strong> reacts with <strong>Tn</strong>.</p>
    <h4>Polyagglutination</h4>
    <p><strong>Polyagglutination</strong> means red cells are agglutinated by most adult sera, not by the patient's own serum. <strong>T activation</strong> follows bacterial <strong>neuraminidase</strong> exposure, which removes sialic acid and exposes the cryptic T antigen; it is associated with pneumococcal and clostridial infection. <strong>Tn activation</strong> is acquired and persistent, caused by a somatic mutation in O-glycosylation, and is associated with myelodysplasia and leukaemia. <strong>Th</strong>, <strong>Cad</strong> and Tk are other forms. Lectins are not conventional antisera: they are carbohydrate-binding proteins with broad specificity, so they are used for problem solving rather than routine typing. T activation is seen in neonates with necrotising enterocolitis and in adults with sepsis, and the exposed T antigen reacts with anti-T present in all adult plasma. Tn activation may precede or accompany myelodysplasia, while Cad is inherited and does not signify disease. Tk activation has been described with Bacteroides and other infections.</p>
    <table>
      <tr><th>Form</th><th>Mechanism</th><th>Lectin</th></tr>
      <tr><td>T</td><td>Neuraminidase exposes T</td><td>Arachis hypogaea</td></tr>
      <tr><td>Tn</td><td>Acquired O-glycosylation defect</td><td>Glycine max</td></tr>
      <tr><td>Th</td><td>Acquired antigen</td><td>Specific lectins</td></tr>
      <tr><td>Cad</td><td>Inherited polyagglutination</td><td>Dolichos biflorus</td></tr>
    </table>
    <h4>Laboratory and clinical impact</h4>
    <ul>
      <li>Polyagglutination causes an <strong>ABO discrepancy</strong> and a positive DAT; it can mimic a panagglutinin.</li>
      <li>Use lectin panels and the patient's own serum to classify the activation.</li>
      <li>Transfuse <strong>washed</strong> red cells if compatible units are difficult to find, and treat the underlying infection.</li>
      <li>Tn activation can be associated with haematological malignancy, so investigate the blood count.</li>
    </ul>
    <p>A lectin panel, the patient's own serum and a DAT help classify the change. Transfuse <strong>washed</strong> red cells when an incompatible crossmatch is caused by polyagglutination, and treat the underlying condition. Repeat testing after the acute episode and keep a record of the lectin findings.</p>
  `,
  tip: "Peanut lectin for T, soybean for Tn — those two pairs are examined repeatedly.",
  sources: ["B2", "B1", "B3"]
},
{
  id: "ih88", domain: "ih-groups",
  q: "Discuss chimerism and mosaicism in immunohematology: mechanisms, laboratory recognition and clinical implications.",
  tags: ["chimerism", "mosaicism", "mixed field", "HSCT"],
  keypoints: ["chimerism", "mosaicism", "tetragametic", "dispermic", "twin chimerism", "mixed-field", "forward and reverse", "HSCT", "parentage testing", "genotyping", "absorption-elution", "group O"],
  answer: `
    <h4>Chimerism versus mosaicism</h4>
    <p><strong>Chimerism</strong> is the presence of two or more genetically distinct cell populations from different zygotes. <strong>Tetragametic</strong> chimerism follows fusion of two embryos; <strong>dispermic</strong> chimerism follows fertilisation of an egg by two sperm; <strong>twin chimerism</strong> follows placental anastomosis. <strong>Mosaicism</strong> arises from a somatic mutation in one zygote, producing two populations such as ABO or Rh mosaics.</p>
    <h4>Laboratory clues</h4>
    <ul>
      <li><strong>Mixed-field</strong> agglutination with antisera, or dual populations on forward typing.</li>
      <li>Discrepancy between <strong>forward and reverse</strong> grouping, or between red cell and saliva typing.</li>
      <li>Unexpected weak or missing antigens; variable results between reagent lots.</li>
      <li>Detection of donor-derived cells after <strong>HSCT</strong> or transfusion.</li>
    </ul>
    <h4>Clinical application</h4>
    <p>Chimerism matters in <strong>parentage testing</strong> (apparent exclusion), in <strong>HSCT</strong> (donor and recipient red cells coexist, so typing shows mixed field), and in transfusion (a chimeric donor may have two ABO populations). <strong>Genotyping</strong> with STR markers or blood group arrays resolves the populations. <strong>Absorption-elution</strong> can separate them. Transfuse <strong>group O</strong> until the true groups are known. In twin pregnancies, chimerism is often incidental but can cause infertility or ambiguous genitalia in tetragametic cases.</p>
    <p>Congenital chimerism may be discovered when a donor or patient types with two populations. Dispermic chimerism can cause ambiguous genitalia and infertility, while tetragametic chimerism may only be found during parentage testing. Twin chimerism follows shared placental circulation and is usually harmless. After <strong>HSCT</strong>, donor-derived red cells gradually replace recipient cells, so ABO and Rh typing may show mixed field for weeks to months; this is iatrogenic chimerism, not a new blood group. <strong>Mosaicism</strong> is a single-zygote phenomenon and can be caused by somatic mutation in ABO, RH or PNH clones. Detection uses STR markers, blood group genotyping, FISH or absorption-elution. Transfuse group O until the populations are resolved.</p>
  `,
  tip: "Mixed field is the clue; genotyping or absorption-elution is the proof.",
  sources: ["B1", "B2", "B4"]
},
{
  id: "ih89", domain: "ih-groups", star: true,
  q: "Discuss blood group antigen frequencies in Filipinos and Southeast Asians and the implications for antibody screening and blood supply.",
  tags: ["Filipino", "Southeast Asia", "Mia", "antigen frequency"],
  keypoints: ["group O", "B", "D-negative", "Fyᵃ", "Mia", "GP.Mur", "Diᵃ", "K", "Jsᵃ", "screening cells", "rare donor registry", "genotyping"],
  answer: `
    <h4>ABO and D</h4>
    <p>Filipino blood group frequencies resemble those of other Southeast Asian populations. Group <strong>O</strong> is the most common (~45%), followed by <strong>B</strong> (~25–28%), A (~22–25%) and AB (~5%). <strong>D-negative</strong> is uncommon (&lt;1%), so D-negative red cells are scarce and RhIG supply is limited.</p>
    <h4>Antigens that matter locally</h4>
    <table>
      <tr><th>Antigen/system</th><th>Local pattern</th><th>Transfusion implication</th></tr>
      <tr><td>Fyᵃ</td><td>Near-universal in Asians</td><td>Anti-Fyᵃ is uncommon; anti-Fyᵇ occurs</td></tr>
      <tr><td>Mia/GP.Mur</td><td>Present in the Philippine population</td><td>Include Mia+ screening cells</td></tr>
      <tr><td>Diᵃ</td><td>Occurs in Asian populations</td><td>Consider anti-Diᵃ in HDFN</td></tr>
      <tr><td>K</td><td>Uncommon in Asians</td><td>Anti-K is less frequent but still important</td></tr>
      <tr><td>Jsᵃ</td><td>Uncommon in Asians</td><td>Anti-Jsᵃ is rare locally</td></tr>
    </table>
    <h4>Practical application</h4>
    <ul>
      <li>Use <strong>screening cells</strong> that include <strong>Mia</strong>, because standard Caucasian panels may miss anti-Mia.</li>
      <li>Reserve D-negative units for D-negative females of childbearing potential and for patients with anti-D.</li>
      <li>Build a local <strong>rare donor registry</strong> for Vel, Lan, Jrᵃ and other high-prevalence antibodies.</li>
      <li>Use <strong>genotyping</strong> for recently transfused patients with thalassaemia or sickle cell disease.</li>
      <li>Do not import Caucasian frequencies into local practice; validate panels against the local population.</li>
    </ul>
    <p>Local panels should include at least two Mia-positive cells and homozygous cells for Rh, Kidd and Duffy antigens so that dosage-dependent antibodies are not missed. Anti-Mia, anti-Diᵃ, anti-Jkᵇ and anti-E are among the antibodies to consider when a Filipino patient has a positive screen. Because D-negative donors are scarce, emergency release for males and older females may use D-positive units, but D-negative females of childbearing potential should receive D-negative blood whenever possible. A rare donor registry, family donation and genotyping help secure blood for Vel, Lan, Jrᵃ and other high-prevalence antibodies. Frequencies also vary between regions and ethnic groups, so local data should guide panel selection rather than imported Caucasian figures.</p>
  `,
  tip: "Mia and the scarcity of D-negative units are the two local realities examiners want.",
  sources: ["B2", "B3", "B4"]
},
{
  id: "ih90", domain: "ih-groups",
  q: "Discuss the role of complement in immunohematology: activation, red cell destruction and interpretation of complement-based laboratory tests.",
  tags: ["complement", "C3d", "DAT", "PNH"],
  keypoints: ["classical pathway", "C1", "C3 convertase", "alternative pathway", "lectin pathway", "C3b", "membrane attack complex", "C3d", "DAT", "cold agglutinins", "PNH", "CD55", "CD59", "intravascular"],
  answer: `
    <h4>Complement activation</h4>
    <p>The <strong>classical pathway</strong> is triggered by IgM or IgG bound to antigen; <strong>C1</strong> activates C4 and C2, forming the <strong>C3 convertase</strong>. The <strong>alternative pathway</strong> amplifies on surfaces without regulators, and the <strong>lectin pathway</strong> uses mannose-binding lectin. The result is <strong>C3b</strong>, which opsonises, and the <strong>membrane attack complex</strong>, which lyses cells.</p>
    <h4>Complement in immunohematology</h4>
    <ul>
      <li>Complement-binding antibodies include anti-A, anti-B, anti-Jkᵃ, anti-Jkᵇ, anti-Leᵃ, anti-P and anti-Vel.</li>
      <li><strong>C3d</strong> remains on red cells after C3b is cleaved, so monospecific anti-C3d is used in the <strong>DAT</strong>.</li>
      <li><strong>Cold agglutinins</strong> bind at 4 °C and activate complement; the liver clears C3b-coated cells, causing extravascular haemolysis.</li>
      <li><strong>PNH</strong> lacks <strong>CD55</strong> and <strong>CD59</strong>, so complement attacks the patient's own cells.</li>
    </ul>
    <table>
      <tr><th>Test</th><th>Detects</th><th>Interpretation</th></tr>
      <tr><td>Polyspecific DAT</td><td>IgG and C3d</td><td>Screen for immune haemolysis</td></tr>
      <tr><td>Monospecific DAT</td><td>IgG or C3d alone</td><td>Warm AIHA (IgG), cold AIHA (C3)</td></tr>
      <tr><td>CH50</td><td>Classical pathway</td><td>Total complement function</td></tr>
    </table>
    <p><strong>C3b</strong> is short-lived and is rapidly cleaved to iC3b and then <strong>C3d</strong>, which is why C3d is the fragment detected on stored red cells. The classical pathway is the most relevant to transfusion, but the alternative pathway amplifies damage once C3b is deposited. CH50 measures the classical pathway, while AP50 measures the alternative. Complement activation also generates anaphylatoxins C3a and C5a, which contribute to the clinical picture. In PNH, flow cytometry for CD55 and CD59 on red cells and leucocytes confirms the clone.</p>
    <h4>Clinical application</h4>
    <p>Complement explains why some antibodies cause <strong>intravascular</strong> haemolysis and others do not. In HDFN, complement is not the main mechanism because fetal complement is low. In transfusion, a C3d-positive DAT with a negative IgG DAT suggests a cold antibody or a complement-binding alloantibody. PNH testing uses flow cytometry for CD55 and CD59. Regulators such as CD55, CD59 and CR1 protect cells; their loss or dysfunction causes disease.</p>
  `,
  tip: "C3d is the stable fragment on the DAT — that is why anti-C3d, not anti-C3b, is used.",
  sources: ["B1", "B2", "B11"]
}
);
