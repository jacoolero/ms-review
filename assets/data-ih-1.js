/* Immunohematology — part 1: blood group systems & genetics; pretransfusion testing */
window.QBANK.push(
{
  id: "ih1", domain: "ih-groups", star: true,
  q: "Discuss the biochemistry and genetics of the ABO and H blood group systems, including the formation of A, B and H antigens.",
  tags: ["ABO", "H antigen", "glycosyltransferase", "secretor"],
  answer: `
    <p>ABO antigens are carbohydrates. The genes do not code the antigens directly; they code <strong>glycosyltransferases</strong> that add sugars to precursor chains.</p>
    <ol>
      <li><strong>H gene (FUT1)</strong> on chromosome 19 — α-1,2-fucosyltransferase adds <strong>L-fucose</strong> to the terminal galactose of type 2 precursor chains on red cells → H antigen.</li>
      <li><strong>Se gene (FUT2)</strong> — the same reaction on type 1 chains in secretions; secretors (~80%) have soluble A, B, H in saliva.</li>
      <li><strong>ABO gene</strong> on chromosome 9 (three main alleles; A and B co-dominant, O amorphic):
        <ul>
          <li>A allele — α-3-N-acetylgalactosaminyltransferase adds <strong>N-acetyl-D-galactosamine</strong> to H → A antigen.</li>
          <li>B allele — α-3-D-galactosyltransferase adds <strong>D-galactose</strong> → B antigen.</li>
          <li>O allele — a single-base deletion (c.261delG) causes a frameshift and inactive enzyme; H remains unchanged.</li>
        </ul>
      </li>
    </ol>
    <p>The A and B transferases differ by only four amino acids. H antigen amount: O &gt; A₂ &gt; B &gt; A₂B &gt; A₁ &gt; A₁B (anti-H lectin <em>Ulex europaeus</em>).</p>
    <h4>Bombay phenotype (O<sub>h</sub>)</h4>
    <p>Homozygous inactive <em>FUT1</em> (hh) and non-secretor (sese): no H, so no A or B can form, even if A/B genes are inherited. Plasma contains <strong>anti-A, anti-B and potent anti-H</strong> — reacts with all group O cells; only Bombay blood is compatible. Para-Bombay: hh but secretor (or weak FUT1).</p>
    <p>Distribution in Filipinos: group O is the most common (~45%), then B (~25–28%), A (~22–25%), AB (~5%) — a higher B frequency than Europeans.</p>
  `,
  tip: "State the immunodominant sugar for each antigen — fucose (H), GalNAc (A), galactose (B).",
  sources: ["B2", "B1", "B3"]
},
{
  id: "ih2", domain: "ih-groups", star: true,
  q: "What are ABO discrepancies? Classify them and describe how to resolve each group.",
  tags: ["ABO discrepancy", "forward and reverse grouping"],
  answer: `
    <p>An ABO discrepancy exists when the <strong>forward (cell) grouping</strong> does not agree with the <strong>reverse (serum) grouping</strong>. Results must not be reported until it is resolved; if transfusion is urgent, give group O red cells and AB plasma.</p>
    <div class="table-wrap"><table>
      <tr><th>Group</th><th>Problem</th><th>Examples</th><th>Resolution</th></tr>
      <tr><td>I</td><td>Weak or missing <strong>antibodies</strong></td><td>Newborns (&lt;4–6 months), elderly, hypogammaglobulinaemia, immunosuppression, HSCT</td><td>Incubate serum + cells at room temperature 15–30 min, or at 4 °C with auto and O cell controls; enhance by adding more serum</td></tr>
      <tr><td>II</td><td>Weak or missing <strong>antigens</strong></td><td>ABO subgroups (A₃, Ax, Bel), leukaemia, Hodgkin disease, acquired B (bacterial deacetylase), B(A), excess soluble antigen (ovarian cyst, stomach cancer)</td><td>Incubate at RT/4 °C, enzyme-treat cells, adsorption–elution, saliva studies; acquired B: test with acidified anti-B or monoclonal anti-B not reacting</td></tr>
      <tr><td>III</td><td>Protein or plasma abnormalities → rouleaux</td><td>Myeloma, Waldenström, high fibrinogen, plasma expanders (dextran)</td><td>Wash cells; <strong>saline replacement</strong> technique for serum</td></tr>
      <tr><td>IV</td><td>Miscellaneous</td><td>Cold alloantibodies (anti-M, anti-P1, anti-Le), cold autoantibodies (anti-I), polyagglutination, out-of-group transfusion, HSCT, anti-A1 in A₂/A₂B</td><td>Prewarm, auto-adsorption, test with A₂ cells and anti-A₁ lectin (<em>Dolichos biflorus</em>); antibody identification panel at RT</td></tr>
    </table></div>
    <p>First rule out technical error: re-test a new sample, check labelling, reagents and cell suspension concentration. Obtain patient history (age, diagnosis, transfusions, transplant).</p>
  `,
  tip: "A four-group classification with a resolution for each is exactly what examiners expect.",
  sources: ["B2", "B1"]
},
{
  id: "ih3", domain: "ih-groups",
  keypoints: ["A₁","A₂","antigen sites","transferase","H antigen","Dolichos biflorus","anti-A₁","A₂B","cold IgM","37 °C","weak subgroups","Ax","mixed field","adsorption–elution","saliva","anti-A,B"],
  q: "Compare the A₁ and A₂ subgroups and explain the significance of weak A subgroups.",
  tags: ["A subgroups", "A1", "A2", "anti-A1"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>A₁</th><th>A₂</th></tr>
      <tr><td>Frequency among group A (Caucasians)</td><td>~80%</td><td>~20% (rarer in Asians)</td></tr>
      <tr><td>Antigen sites per RBC</td><td>~0.8–1.2 × 10⁶</td><td>~0.25 × 10⁶</td></tr>
      <tr><td>Transferase</td><td>Efficient; converts most H, makes A on type 3/4 (repetitive A) chains</td><td>Less efficient (A²01 allele has a 1-base deletion, extra 21 amino acids)</td></tr>
      <tr><td>H antigen</td><td>Little</td><td>More</td></tr>
      <tr><td>Reaction with anti-A₁ lectin (<em>Dolichos biflorus</em>)</td><td>Agglutinated</td><td>Not agglutinated</td></tr>
      <tr><td>Anti-A₁ in serum</td><td>No</td><td>~1–8% of A₂, ~22–35% of A₂B</td></tr>
    </table></div>
    <h4>Clinical significance of anti-A₁</h4>
    <p>Usually a cold IgM antibody, not clinically significant unless reactive at 37 °C. It causes an ABO discrepancy (reverse grouping shows agglutination with A₁ cells) and an incompatible crossmatch with A₁ donor cells. If reactive at 37 °C, give group O or A₂ red cells.</p>
    <h4>Weak subgroups (A₃, Ax, Aend, Am, Ay, Ael)</h4>
    <p>Identified by: mixed-field agglutination (A₃), weak or no reaction with anti-A but reaction with anti-A,B (Ax), adsorption–elution (Am, Ael), presence of A substance in saliva of secretors (Am), and anti-A₁ in serum (Ax). Genotyping of the ABO gene confirms. Importance: a donor with a weak A subgroup typed as group O could cause a haemolytic reaction in a group O recipient — hence the use of anti-A,B or monoclonal blends in donor grouping.</p>
  `,
  tip: "The Dolichos biflorus lectin and the anti-A₁ problem in A₂B patients are the classic points.",
  sources: ["B2", "B1", "B3"]
},
{
  id: "ih4", domain: "ih-groups", star: true,
  q: "Discuss the Rh blood group system: genetics, nomenclature, and the clinical significance of weak D and partial D.",
  tags: ["Rh", "RHD", "weak D", "partial D"],
  answer: `
    <h4>Genetics</h4>
    <p>Two closely linked genes on chromosome 1: <strong>RHD</strong> (codes D) and <strong>RHCE</strong> (codes C/c and E/e). <em>RHAG</em> (chromosome 6) codes the Rh-associated glycoprotein needed for expression; its absence causes Rh<sub>null</sub> (stomatocytosis, haemolysis). Rh proteins are non-glycosylated, multipass membrane proteins, probably ammonia/CO₂ transporters. D is the most immunogenic antigen after A and B.</p>
    <h4>Nomenclature</h4>
    <div class="table-wrap"><table>
      <tr><th>Fisher–Race</th><th>Wiener</th><th>Rosenfield</th></tr>
      <tr><td>DCe</td><td>R¹</td><td>Rh:1,2,−3,−4,5</td></tr>
      <tr><td>DcE</td><td>R²</td><td>Rh:1,−2,3,4,−5</td></tr>
      <tr><td>Dce</td><td>R⁰</td><td>—</td></tr>
      <tr><td>dce</td><td>r</td><td>Rh:−1,−2,−3,4,5</td></tr>
    </table></div>
    <p>ISBT numbers the system 004 (RH).</p>
    <h4>Weak D vs partial D</h4>
    <ul>
      <li><strong>Weak D</strong>: all D epitopes present, but fewer antigen sites — amino acid changes in the transmembrane or intracellular parts reduce insertion. Weak D types 1, 2 and 3 can be managed as <strong>D-positive</strong> (no anti-D formation).</li>
      <li><strong>Partial D</strong> (e.g. DVI, DVa, DIIIa): some epitopes missing (hybrid RHD–RHCE genes). These people can make anti-D against the missing epitopes. DVI is the most important — monoclonal reagents are chosen not to detect DVI in patients.</li>
      <li><strong>DEL</strong>: extremely weak D detected only by adsorption–elution. Common in East Asians (~10–30% of serologic D-negatives) — including Filipinos; Asian-type DEL (RHD*1227A) does not usually make anti-D.</li>
    </ul>
    <h4>Policy</h4>
    <p>Donors: test for weak D (IAT) — label positive. Patients and pregnant women: weakly reactive D → <strong>RHD genotyping</strong>; until then treat as D-negative (give D-negative blood and RhIG). D-negativity is rare among Filipinos (&lt;1%), so D-negative blood is scarce.</p>
  `,
  tip: "The donor-vs-patient policy difference for weak D shows practical mastery.",
  sources: ["B1", "B2", "B3", "B4"]
},
{
  id: "ih5", domain: "ih-groups",
  q: "Describe the Kell, Duffy and Kidd blood group systems and their clinical significance.",
  tags: ["Kell", "Duffy", "Kidd", "delayed haemolytic reaction"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>Kell (KEL, 006)</th><th>Duffy (FY, 008)</th><th>Kidd (JK, 009)</th></tr>
      <tr><td>Carrier molecule</td><td>Zinc endopeptidase glycoprotein (linked to XK protein)</td><td>Chemokine receptor (ACKR1, DARC)</td><td>Urea transporter (SLC14A1)</td></tr>
      <tr><td>Key antigens</td><td>K (K1), k, Kpᵃ/Kpᵇ, Jsᵃ/Jsᵇ</td><td>Fyᵃ, Fyᵇ</td><td>Jkᵃ, Jkᵇ</td></tr>
      <tr><td>Enzyme effect (ficin/papain)</td><td>Unaffected (destroyed by DTT/ZZAP)</td><td><strong>Destroyed</strong></td><td><strong>Enhanced</strong></td></tr>
      <tr><td>Antibody class</td><td>IgG</td><td>IgG</td><td>IgG (binds complement)</td></tr>
      <tr><td>Clinical significance</td><td>Anti-K: severe HDFN (suppresses erythropoiesis as well as haemolysis) and HTR</td><td>Anti-Fyᵃ: HTR and HDFN</td><td>Anti-Jkᵃ: <strong>delayed haemolytic transfusion reactions</strong></td></tr>
      <tr><td>Special features</td><td>K is the most immunogenic after D; K₀ (null); McLeod phenotype (XK absent: acanthocytosis, CGD association)</td><td><strong>Fy(a−b−)</strong> in most people of West African origin — resistant to <em>P. vivax</em> invasion (Duffy receptor)</td><td><strong>Evanescent</strong> antibodies: titres fall below detection then return on re-exposure; show dosage. Jk(a−b−) cells resist 2M urea lysis</td></tr>
    </table></div>
    <h4>Practical points</h4>
    <ul>
      <li>Give K-negative blood to girls and women of childbearing potential in many guidelines.</li>
      <li>Kidd antibodies are the classic cause of delayed haemolytic reactions because they are easily missed; check historical records (antibody registry).</li>
      <li>Asians, including Filipinos, have a high Fyᵃ frequency (~99%), so anti-Fyᵃ is rare, but anti-Fyᵇ and anti-Jkᵇ do occur; the Mia (MNS) antigen is common in Southeast Asia, so anti-Mia is important locally.</li>
    </ul>
  `,
  tip: "Enzyme behaviour (Duffy destroyed, Kidd enhanced) and Kidd evanescence are almost always examined.",
  sources: ["B3", "B1", "B2"]
},
{
  id: "ih6", domain: "ih-groups",
  q: "Discuss the MNS system with emphasis on the Miltenberger (Mia/GP.Mur) antigen in Southeast Asia.",
  tags: ["MNS", "GP.Mur", "Mia", "Asia"],
  answer: `
    <h4>The MNS system (ISBT 002)</h4>
    <p>Antigens are on <strong>glycophorin A</strong> (M, N) and <strong>glycophorin B</strong> (S, s, U), coded by the closely linked <em>GYPA</em> and <em>GYPB</em> genes on chromosome 4. M and N differ at amino acids 1 and 5 of GPA. M, N are destroyed by enzymes; S, s variably.</p>
    <ul>
      <li><strong>Anti-M and anti-N</strong>: usually naturally occurring, cold IgM, clinically insignificant; anti-M may be IgG and rarely cause HDFN. Show dosage. Anti-N in dialysis patients (formaldehyde-altered N, "anti-Nf").</li>
      <li><strong>Anti-S, anti-s, anti-U</strong>: IgG, clinically significant (HTR, HDFN). U-negative (S−s−U−) occurs in people of African descent — very hard to find compatible blood.</li>
    </ul>
    <h4>GP.Mur (formerly Miltenberger class III, Mi.III)</h4>
    <p>A <strong>hybrid glycophorin B–A–B</strong> molecule produced by gene conversion, expressing <strong>Mia</strong>, Mur, MUT and Hil antigens. Frequency: ~7% in Thai, ~4% in southern Chinese, up to ~88% in some Taiwanese indigenous groups; also present in the Philippine population.</p>
    <h4>Clinical importance in Asia</h4>
    <ul>
      <li>Anti-Mia/anti-Mur is among the <strong>most common alloantibodies</strong> in Southeast and East Asia — after anti-E and anti-Le in some series.</li>
      <li>It causes HTR and severe HDFN.</li>
      <li>Standard Caucasian-derived screening cells usually <strong>lack Mia</strong>, so the antibody can be missed. Asian blood centres add Mia+ cells to the screening panel.</li>
      <li>GP.Mur also increases band 3 expression and water/anion transport.</li>
    </ul>
  `,
  tip: "The key local point: Mia is missed by Western screening cells — include Mia+ cells in Asia.",
  sources: ["B3", "B1", "B4"]
},
{
  id: "ih7", domain: "ih-groups",
  q: "Short notes: the Lewis, P1PK and Ii blood group systems and their antibodies.",
  tags: ["Lewis", "P1", "I antigen", "cold antibodies"],
  answer: `
    <h4>Lewis (LE, 007)</h4>
    <p>Lewis antigens are <strong>not made by red cells</strong>; they are made in secretions, absorbed from plasma onto red cell membranes. <em>FUT3</em> (Le) adds fucose to type 1 chains → Leᵃ; if the person is also a secretor (FUT2), H type 1 is converted to <strong>Leᵇ</strong>. Phenotypes: Le(a+b−) non-secretor; Le(a−b+) secretor; Le(a−b−) lacks FUT3 (more common in people of African origin). Antigens are weakened in pregnancy and newborns are Le(a−b−). Antibodies: IgM, naturally occurring, usually not clinically significant; <strong>do not cause HDFN</strong> (IgM; antigen poorly developed in fetus). Lewis substance in plasma can neutralise them.</p>
    <h4>P1PK (003) and Globoside</h4>
    <p>P1, Pᵏ and the P antigen (globoside, separate system). Anti-P1 is a common cold IgM antibody, neutralised by hydatid cyst fluid or pigeon egg white; clinically insignificant. Anti-PP1Pᵏ (Tjᵃ) in the rare p phenotype causes HTR and recurrent miscarriage. <strong>Donath–Landsteiner antibody</strong> (biphasic IgG anti-P) causes paroxysmal cold haemoglobinuria. P antigen is the receptor for parvovirus B19.</p>
    <h4>Ii (I, 027)</h4>
    <p>I and i are branched and linear poly-N-acetyllactosamine chains. Newborns are i-rich; the <em>GCNT2</em> branching enzyme converts i to I by about 18 months. Anti-I autoantibodies: benign cold agglutinins, and pathological in <strong>cold agglutinin disease</strong> and after <em>Mycoplasma pneumoniae</em>. Anti-i: infectious mononucleosis (EBV). Cold autoantibodies cause ABO discrepancy and false positive DAT (C3).</p>
  `,
  tip: "Key exam fact: Lewis antigens are adsorbed from plasma and Lewis antibodies do not cause HDFN.",
  sources: ["B3", "B2", "B1"]
},
{
  id: "ih8", domain: "ih-groups",
  q: "Explain the immunology of red cell antigen–antibody reactions: the two stages of agglutination and factors that affect them.",
  tags: ["agglutination", "zeta potential", "sensitisation", "enhancement"],
  answer: `
    <h4>Stage 1 — sensitisation</h4>
    <p>The antibody binds to the antigen. It is governed by the law of mass action and the equilibrium constant. Factors:</p>
    <ul>
      <li><strong>Temperature</strong>: IgM (carbohydrate antigens) bind best at 4–22 °C; IgG (protein antigens) at 37 °C.</li>
      <li><strong>pH</strong>: optimum ~7.0 (anti-M prefers lower pH).</li>
      <li><strong>Incubation time</strong>: 15–60 min depending on medium.</li>
      <li><strong>Ionic strength</strong>: LISS reduces the cloud of Na⁺ and Cl⁻ ions around the antibody and antigen, increasing the rate of association (and shortens incubation to 10–15 min).</li>
      <li><strong>Antigen–antibody ratio</strong> (serum:cells usually 2:1; prozone with excess antibody).</li>
    </ul>
    <h4>Stage 2 — lattice formation (agglutination)</h4>
    <p>Red cells carry a negative charge (sialic acid). Cations form an ionic cloud; the <strong>zeta potential</strong> keeps cells about 25 nm apart. IgM (pentamer, span ~30 nm) can bridge this gap and agglutinate directly; IgG (~14 nm span) usually cannot — hence the need for the antiglobulin test. Factors favouring lattice formation:</p>
    <ul>
      <li><strong>Centrifugation</strong> brings cells together.</li>
      <li><strong>Enzymes</strong> (ficin, papain, bromelin) remove sialic acid, reducing the zeta potential and exposing Rh, Kidd, Lewis, I and P antigens; but destroy M, N, S, Duffy.</li>
      <li><strong>Colloids</strong> (albumin 22%, PEG): albumin raises the dielectric constant; PEG removes water molecules and concentrates antibody.</li>
      <li>Antigen density and location; antibody class and number.</li>
    </ul>
    <p>Grading of agglutination (0 to 4+, mixed field, haemolysis) and recognising haemolysis as a positive reaction are part of the answer.</p>
  `,
  tip: "Use the IgM 'span' vs zeta potential explanation — it justifies why IgG needs AHG.",
  sources: ["B2", "B1"]
},
{
  id: "ih9", domain: "ih-groups",
  q: "Discuss the principles and applications of red cell genotyping (molecular immunohaematology).",
  tags: ["genotyping", "molecular", "RHD", "SNP"],
  answer: `
    <p>Most blood group antigens result from single nucleotide polymorphisms (SNPs), so the phenotype can be predicted from DNA. ISBT maintains allele tables for 40+ blood group systems.</p>
    <h4>Methods</h4>
    <ul>
      <li>PCR with sequence-specific primers (PCR-SSP), PCR-RFLP.</li>
      <li>Real-time PCR and bead- or array-based SNP platforms (e.g. high-throughput donor genotyping).</li>
      <li>Sanger sequencing and next-generation sequencing for novel or complex alleles (RH variants).</li>
    </ul>
    <h4>Applications</h4>
    <ol>
      <li><strong>Recently transfused patients</strong> (mixed field from donor cells) — phenotype cannot be done reliably; DNA from leukocytes or buccal cells is used.</li>
      <li><strong>DAT-positive cells</strong> (AIHA) when IgG-coated cells react in IAT and no direct agglutinating antisera exist.</li>
      <li><strong>Weak D / partial D</strong> resolution — decides Rh immune globulin and transfusion needs.</li>
      <li><strong>Fetal RHD typing from maternal plasma</strong> (cell-free fetal DNA) — avoids unnecessary RhIG in D-negative women carrying D-negative fetuses; non-invasive alternative to amniocentesis for K, c, E.</li>
      <li><strong>Antigen-negative donor screening</strong> for antigens where antisera are scarce (Doᵃ/Doᵇ, Jsᵃ, V/VS) and for multiply transfused patients (thalassaemia, sickle cell) — extended matching.</li>
      <li>Daratumumab (anti-CD38) therapy — avoids DTT-treated cell problems.</li>
    </ol>
    <h4>Limitations</h4>
    <p>Genotype may not predict phenotype (silencing mutations, null alleles, hybrid genes), chimerism after HSCT, cost, and limited availability. In the Philippines, molecular testing is mainly available through referral and research centres, so phenotyping remains the routine method.</p>
  `,
  tip: "List concrete indications — 'recently transfused' and 'DAT-positive' are the two classic ones.",
  sources: ["B1", "B4", "B3"]
},
{
  id: "ih10", domain: "ih-groups",
  q: "Explain the antiglobulin (Coombs) test: principle, reagents, the difference between DAT and IAT, and causes of false results.",
  tags: ["AHG", "DAT", "IAT", "check cells"],
  answer: `
    <h4>Principle</h4>
    <p>Anti-human globulin (AHG) — made in animals or as monoclonals — binds the Fc of IgG or complement fragments (C3d, C3b) attached to red cells, bridging cells to form visible agglutination.</p>
    <h4>Reagents</h4>
    <p>Polyspecific (anti-IgG + anti-C3d), monospecific anti-IgG, anti-C3b/C3d. Monoclonal anti-C3d is used because C3d remains on cells after C3b is cleaved.</p>
    <div class="table-wrap"><table>
      <tr><th></th><th>Direct antiglobulin test (DAT)</th><th>Indirect antiglobulin test (IAT)</th></tr>
      <tr><td>Detects</td><td><em>In vivo</em> sensitisation of red cells</td><td><em>In vitro</em> sensitisation — antibody in serum</td></tr>
      <tr><td>Steps</td><td>Wash patient's EDTA red cells → add AHG</td><td>Incubate serum + reagent cells at 37 °C → wash → add AHG</td></tr>
      <tr><td>Uses</td><td>HDFN, HTR, AIHA, drug-induced haemolysis</td><td>Antibody screen/ID, crossmatch, weak D, antigen typing</td></tr>
    </table></div>
    <h4>Coombs control (check) cells</h4>
    <p>IgG-sensitised cells are added to every negative AHG tube; agglutination proves AHG was active and not neutralised. No agglutination means the test is invalid.</p>
    <h4>False negatives</h4>
    <ul><li><strong>Inadequate washing</strong> (residual globulin neutralises AHG) — the commonest.</li><li>Delay in adding AHG or reading (antibody elutes).</li><li>Wrong cell concentration, under-centrifugation, too vigorous resuspension.</li><li>Inactive AHG or omitted.</li></ul>
    <h4>False positives</h4>
    <ul><li>Over-centrifugation, contaminated glassware.</li><li>Clotted samples or refrigerated samples (in vitro C3 uptake) — use EDTA for DAT.</li><li>Polyagglutinable cells, cells already DAT-positive used in IAT.</li></ul>
  `,
  tip: "Include Coombs control cells — omitting them is a common mistake in written answers.",
  sources: ["B2", "B1"]
},
{
  id: "ih11", domain: "ih-groups",
  q: "Discuss the HLA system and its importance in transfusion medicine.",
  tags: ["HLA", "platelet refractoriness", "TRALI", "TA-GVHD"],
  answer: `
    <p>Human leukocyte antigens (the human MHC) are encoded on chromosome 6p21. <strong>Class I</strong> (HLA-A, -B, -C) is on all nucleated cells and platelets; <strong>class II</strong> (HLA-DR, -DQ, -DP) on antigen-presenting cells. Genes are highly polymorphic, co-dominant and inherited as <strong>haplotypes</strong> (a sibling has a 25% chance of being HLA-identical).</p>
    <h4>Relevance to transfusion</h4>
    <ol>
      <li><strong>Platelet refractoriness</strong>: HLA class I alloimmunisation from previous transfusions or pregnancy. Defined by a poor corrected count increment (CCI &lt;5000–7500 at 1 h) on two occasions. Management: HLA-matched or crossmatch-compatible platelets; HLA antibody screening (Luminex single antigen beads).</li>
      <li><strong>Febrile non-haemolytic reactions</strong>: recipient antibodies against donor leukocytes, plus cytokines — reduced by leukoreduction.</li>
      <li><strong>TRALI</strong>: donor HLA class I/II or HNA antibodies against recipient leukocytes — mitigation by using male-only or tested plasma.</li>
      <li><strong>TA-GVHD</strong>: risk is highest when the donor is homozygous for an HLA haplotype the recipient shares (one-way match) — e.g. directed donations from relatives. Irradiation prevents it.</li>
      <li><strong>Haematopoietic stem cell and organ transplantation</strong>: HLA matching (high-resolution typing), crossmatches, and donor-specific antibodies.</li>
      <li>Disease associations (HLA-B27 with ankylosing spondylitis, HLA-B*58:01 with allopurinol SJS/TEN — common in Asians), and parentage testing.</li>
    </ol>
    <p>Methods: serology (complement-dependent cytotoxicity), molecular typing (SSP, SSO, NGS), and solid-phase antibody detection.</p>
  `,
  tip: "Explain the haplotype-sharing mechanism of TA-GVHD in related donors — a favourite question.",
  sources: ["B1", "B2", "B11"]
},
{
  id: "ih12", domain: "ih-groups",
  q: "Discuss the inheritance of blood groups and its application in parentage testing; explain the meaning of silent (null) alleles.",
  tags: ["genetics", "inheritance", "null phenotypes"],
  answer: `
    <h4>Principles</h4>
    <ul>
      <li>Most blood group genes are <strong>autosomal co-dominant</strong>: both alleles are expressed (e.g. Jk(a+b+)).</li>
      <li><strong>Amorphs</strong> (silent alleles) produce no antigen (O, Fy, Jk null alleles, K₀, Rh<sub>null</sub>, Lu(a−b−)).</li>
      <li><strong>Dosage</strong>: homozygous cells (Jk(a+b−)) have twice the antigen of heterozygous cells and react more strongly with some antibodies — Rh (except D), Kidd, Duffy, MNS.</li>
      <li><strong>X-linked</strong>: Xg system and the XK gene (Kx, McLeod).</li>
      <li><strong>Modifier and suppressor genes</strong>: In(Lu) suppresses Lutheran; <em>KLF1</em> mutations; RHAG for Rh<sub>null</sub> (regulator type).</li>
      <li><strong>Position effects</strong>: <em>cis</em> and <em>trans</em> — C in trans weakens D expression (Ceppellini effect).</li>
    </ul>
    <h4>Parentage testing</h4>
    <p>Exclusion can be direct (child has an antigen absent in both mother and alleged father) or indirect (alleged father appears homozygous and the child lacks his allele — vulnerable to silent alleles). Example: an alleged father typed Jk(a+b−) and a child Jk(a−b+) seems excluded, but the father may be Jkᵃ/Jk silent — hence indirect exclusions are weaker. Blood groups give limited exclusion power; modern parentage testing uses <strong>short tandem repeat (STR) DNA profiling</strong>, giving probability of paternity &gt;99.99%.</p>
    <h4>Null phenotypes</h4>
    <p>Lack all antigens of a system. People with null phenotypes can make antibodies to a high-prevalence antigen (e.g. anti-Jk3 in Jk(a−b−) — more common in Polynesians and some Asians; anti-H in Bombay), making compatible blood extremely rare and requiring rare donor registries.</p>
  `,
  tip: "Give a worked direct vs indirect exclusion example to show why silent alleles matter.",
  sources: ["B2", "B3"]
},
{
  id: "ih13", domain: "ih-testing", star: true,
  q: "Describe the process of pretransfusion testing from the request to issue of red cells.",
  tags: ["pretransfusion", "type and screen", "crossmatch"],
  answer: `
    <ol>
      <li><strong>Request and patient identification</strong>: two identifiers at the bedside, sample labelled at bedside with collector's signature, date and time. "Wrong blood in tube" is the main cause of ABO-incompatible transfusion.</li>
      <li><strong>Sample</strong>: EDTA (or clotted) collected within <strong>3 days</strong> of transfusion if the patient was transfused or pregnant in the past 3 months (new antibodies can form).</li>
      <li><strong>Review records</strong>: previous ABO/D type, antibodies, special requirements — comparison with historical type detects WBIT. Many services require a second sample to confirm the ABO group of a first-time patient.</li>
      <li><strong>ABO and D typing</strong>: forward and reverse grouping, D typing.</li>
      <li><strong>Antibody screen</strong>: IAT with two or three group O reagent cells covering clinically significant antigens (D, C, E, c, e, K, k, Fyᵃ, Fyᵇ, Jkᵃ, Jkᵇ, S, s, M, N, P1, Leᵃ, Leᵇ; and Mia in Asia). Homozygous expression for Jk, Fy, Rh antigens desirable.</li>
      <li><strong>Antibody identification</strong> if the screen is positive; select antigen-negative units.</li>
      <li><strong>Selection of components</strong>: ABO/D compatible; special requirements (irradiated, leukoreduced, CMV-safe).</li>
      <li><strong>Crossmatch</strong>:
        <ul><li>Antibody screen negative and no history → <strong>immediate spin crossmatch</strong> (detects ABO incompatibility) or <strong>electronic crossmatch</strong> (validated LIS, two concordant ABO groups).</li><li>Clinically significant antibodies → full <strong>AHG crossmatch</strong>.</li></ul>
      </li>
      <li><strong>Labelling, inspection and issue</strong>: unit appearance (haemolysis, clots, discoloration), expiry, compatibility tag; bedside check before administration.</li>
    </ol>
    <p>In the Philippines, the DOH and the Philippine Blood Center standards require ABO/Rh typing and crossmatching in licensed blood banks, with documentation of each step.</p>
  `,
  tip: "Emphasise that patient identification and sample labelling are part of pretransfusion testing.",
  sources: ["B1", "B5", "B2", "B7"]
},
{
  id: "ih14", domain: "ih-testing", star: true,
  q: "Outline a systematic approach to antibody identification using a panel, including exclusion (rule-out) and the 'rule of three'.",
  tags: ["antibody identification", "panel", "rule of three", "probability"],
  answer: `
    <h4>Step 1 — Gather information</h4>
    <p>Age, sex, diagnosis, pregnancy and transfusion history, drugs (daratumumab, IVIG), previous antibodies.</p>
    <h4>Step 2 — Run a panel and autocontrol</h4>
    <p>Typically 10–16 group O cells with known phenotypes, tested at IS, 37 °C and AHG (or gel/solid phase), plus an <strong>autocontrol/DAT</strong>.</p>
    <h4>Step 3 — Interpret the pattern</h4>
    <ul>
      <li><strong>Phase</strong>: IS/RT → IgM (anti-M, N, P1, Le, I); AHG → IgG, clinically significant.</li>
      <li><strong>Autocontrol</strong> negative → alloantibody; positive → autoantibody or recent transfusion (delayed reaction).</li>
      <li>Same strength reactions → single antibody; variable strength → dosage or multiple antibodies.</li>
      <li>All cells positive with negative autocontrol → antibody to a high-prevalence antigen or multiple antibodies.</li>
    </ul>
    <h4>Step 4 — Exclude (cross out)</h4>
    <p>For every non-reactive cell, cross out antigens present on that cell — preferably only on <strong>homozygous</strong> cells for antigens showing dosage (Rh, Kidd, Duffy, MNS).</p>
    <h4>Step 5 — Confirm</h4>
    <ul>
      <li><strong>Rule of three</strong>: at least 3 antigen-positive cells reactive and 3 antigen-negative cells non-reactive gives p ≤ 0.05 (95% confidence). Fisher exact test confirms.</li>
      <li>Phenotype the patient's own cells — they should lack the antigen (unless recently transfused).</li>
      <li>Use selected cells, enzymes, DTT, neutralisation or adsorption to separate mixtures.</li>
    </ul>
    <h4>Step 6 — Provide blood</h4>
    <p>Antigen-negative, AHG-crossmatch-compatible units; record the antibody permanently and give the patient an antibody card. Number of units to screen = units needed ÷ frequency of antigen-negative donors.</p>
  `,
  tip: "Quote 'rule of three' with p ≤ 0.05 and homozygous cell exclusion — both are expected.",
  sources: ["B2", "B1"]
},
{
  id: "ih15", domain: "ih-testing",
  q: "Compare tube, column agglutination (gel) and solid-phase red cell adherence techniques in immunohaematology.",
  tags: ["gel", "solid phase", "methods", "automation"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>Tube</th><th>Column agglutination (gel/glass bead)</th><th>Solid-phase red cell adherence</th></tr>
      <tr><td>Principle</td><td>Agglutination seen after centrifugation and gentle resuspension</td><td>Agglutinates trapped in a gel/bead matrix; free cells pellet at the bottom</td><td>Antigen (or cells) fixed to microplate wells; antibody binding shown by indicator cells forming a monolayer (positive) or button (negative)</td></tr>
      <tr><td>Washing</td><td>Needed for AHG (manual)</td><td>Not needed — gel separates unbound globulin</td><td>Plate washing (automated)</td></tr>
      <tr><td>Sensitivity</td><td>Good; can be enhanced (LISS, PEG)</td><td>High; more stable reaction</td><td>Highest — also detects more weak/insignificant antibodies</td></tr>
      <tr><td>Standardisation and records</td><td>Subjective grading; no permanent record</td><td>Stable reactions for 2–3 days; images archived</td><td>Read by instruments; full traceability</td></tr>
      <tr><td>Automation</td><td>Limited</td><td>Yes</td><td>Yes</td></tr>
      <tr><td>Cost</td><td>Low; flexible</td><td>Higher; dedicated centrifuge/incubator</td><td>Higher</td></tr>
      <tr><td>Limitations</td><td>Washing errors, operator dependence</td><td>Fibrin/clots and cell debris cause false positives; mixed field easily seen</td><td>False positives from IVIG, DAT+ cells, plasma proteins</td></tr>
    </table></div>
    <p>Gel and solid-phase methods reduce operator variation and are used widely in Philippine hospital blood banks for ABO/Rh typing, antibody screening and crossmatching. Tube methods remain essential for resolving problems (e.g. prewarm technique, saline replacement, titration). Each new method needs validation and staff competency assessment.</p>
  `,
  tip: "Mention that solid phase is most sensitive but detects more clinically insignificant antibodies.",
  sources: ["B1", "B2"]
},
{
  id: "ih16", domain: "ih-testing",
  q: "A patient's antibody screen and all panel cells are positive at AHG, and the autocontrol is also positive. Discuss the investigation.",
  tags: ["warm autoantibody", "adsorption", "elution", "case"],
  answer: `
    <p>A pan-reactive serum with a positive autocontrol suggests a <strong>warm autoantibody</strong> (warm AIHA, drug-induced antibody, or recent transfusion with alloantibody). The danger is that it can <strong>mask underlying alloantibodies</strong>, which are present in ~30–40% of transfused patients with warm autoantibodies.</p>
    <h4>Steps</h4>
    <ol>
      <li><strong>History</strong>: transfusion within 3 months, pregnancy, drugs (e.g. ceftriaxone, piperacillin, methyldopa), daratumumab, IVIG, diagnosis (CLL, SLE).</li>
      <li><strong>DAT</strong> with monospecific reagents (IgG, C3d).</li>
      <li><strong>Elution</strong> (acid or heat) of antibody from the patient's cells; test eluate against a panel — pan-reactive eluate = autoantibody; specific pattern = alloantibody (delayed reaction).</li>
      <li><strong>Phenotype or genotype</strong> the patient (use IgG-removing agents — chloroquine diphosphate or EDTA-glycine acid — or DNA if recently transfused).</li>
      <li><strong>Adsorption</strong> to remove autoantibody from plasma:
        <ul>
          <li><em>Autologous adsorption</em> (with patient's own ZZAP- or enzyme-treated cells) — only if not transfused within 3 months.</li>
          <li><em>Allogeneic (differential) adsorption</em> with 2–3 phenotype-selected cells (R₁R₁, R₂R₂, rr, covering Kidd/Fy/S) — when recently transfused.</li>
        </ul>
        Then test adsorbed plasma for alloantibodies.
      </li>
      <li><strong>Select units</strong>: phenotype-matched (Rh, K, and possibly Fy/Jk/S) and compatible with the adsorbed plasma; crossmatches will usually remain incompatible — the clinician must be informed of the risk.</li>
    </ol>
    <p>Daratumumab produces a similar pattern but with a <em>negative</em> DAT/autocontrol in most cases; it is removed by DTT-treated cells.</p>
  `,
  tip: "Make the point that the main job is to exclude masked alloantibodies — that is why adsorption is done.",
  sources: ["B1", "B2", "B13"]
},
{
  id: "ih17", domain: "ih-testing",
  q: "Discuss the interference of anti-CD38 (daratumumab) therapy with pretransfusion testing and how blood banks manage it.",
  tags: ["daratumumab", "DTT", "CD38", "myeloma"],
  answer: `
    <h4>Mechanism</h4>
    <p>Daratumumab and isatuximab are IgG monoclonal antibodies against <strong>CD38</strong>, used for multiple myeloma. CD38 is expressed weakly on red cells, so the drug in patient plasma binds all reagent cells: <strong>pan-reactive IAT</strong> (antibody screen, panel, AHG crossmatch). ABO/D typing is not affected (IgM-based). The effect lasts up to 6 months after the last dose. DAT is usually negative or weakly positive.</p>
    <h4>Management</h4>
    <ol>
      <li><strong>Before starting therapy</strong>: baseline ABO/D type, antibody screen, and extended phenotype or <strong>genotype</strong> (Rh, Kell, Kidd, Duffy, MNS). The pharmacy/clinician should notify the blood bank.</li>
      <li><strong>DTT (0.2 M dithiothreitol) treatment of reagent cells</strong>: breaks disulfide bonds in CD38, removing the epitope. The antibody screen is then done with DTT-treated cells.
        <ul><li>Limitation: DTT also destroys <strong>Kell</strong> antigens (and Yt, Dombrock, LW, Cromer, Knops, etc.), so anti-K cannot be excluded — give <strong>K-negative</strong> units unless the patient is K+.</li></ul>
      </li>
      <li>Alternatives: soluble recombinant CD38 or anti-idiotype antibodies to neutralise the drug in plasma; cord cells (low CD38); trypsin-treated cells.</li>
      <li><strong>Provide units</strong> phenotype- or genotype-matched for Rh (C, E, c, e) and K; crossmatch with DTT-treated donor cells.</li>
      <li>In emergencies, give ABO/D-compatible uncrossmatched units with clinical consent.</li>
    </ol>
  `,
  tip: "The Kell limitation of DTT and 'give K-negative units' is the point most often examined.",
  sources: ["B1", "B2"]
},
{
  id: "ih18", domain: "ih-testing",
  keypoints: ["red cells","plasma","recipient antibodies","group O","group AB plasma","platelets","high-titre anti-A","emergency release","D-negative","females of childbearing potential","massive transfusion","1:1:1","tranexamic acid","hypocalcaemia"],
  q: "Discuss the selection of red cells, plasma and platelets for ABO-incompatible situations and emergency transfusion.",
  tags: ["ABO compatibility", "emergency release", "massive transfusion"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Recipient</th><th>Red cells (first choice → alternatives)</th><th>Plasma</th></tr>
      <tr><td>O</td><td>O only</td><td>O, A, B, AB</td></tr>
      <tr><td>A</td><td>A, O</td><td>A, AB</td></tr>
      <tr><td>B</td><td>B, O</td><td>B, AB</td></tr>
      <tr><td>AB</td><td>AB, A, B, O</td><td>AB only</td></tr>
    </table></div>
    <p>Red cells must be compatible with the recipient's antibodies; plasma must be compatible with the recipient's red cells. Platelets: ABO-identical preferred; out-of-group platelets carry plasma that can cause haemolysis (group O apheresis platelets with high-titre anti-A) — use titre screening, plasma reduction or platelet additive solution.</p>
    <h4>Emergency release (uncrossmatched)</h4>
    <ul>
      <li>Group <strong>O red cells</strong> — D-negative for females of childbearing potential if available; D-positive for males and others when D-negative is scarce (as in the Philippines, where &lt;1% are D-negative).</li>
      <li>Group <strong>AB plasma</strong> (or low-titre group A plasma as an alternative).</li>
      <li>Physician signs a release; pretransfusion sample collected first; switch to group-specific blood once ABO is confirmed on two samples.</li>
    </ul>
    <h4>Massive transfusion</h4>
    <p>Defined as ~10 units in 24 h or replacement of one blood volume. Massive transfusion protocols use balanced ratios (RBC:plasma:platelets close to 1:1:1), early tranexamic acid, fibrinogen (cryoprecipitate) and viscoelastic testing. Complications: hypothermia, hypocalcaemia (citrate), hyperkalaemia, acidosis, dilutional coagulopathy. After massive transfusion, crossmatching may be abbreviated because the circulating plasma is mostly donor plasma.</p>
  `,
  tip: "Separate the rules for red cells (recipient antibodies) and plasma (recipient antigens) clearly.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih19", domain: "ih-testing",
  q: "Explain the electronic (computer) crossmatch: requirements, advantages and risks.",
  tags: ["electronic crossmatch", "LIS", "validation"],
  answer: `
    <p>The electronic crossmatch (EXM) replaces the serological immediate-spin crossmatch with a <strong>computer check of ABO compatibility</strong> for patients without clinically significant antibodies.</p>
    <h4>Requirements (AABB Standards)</h4>
    <ol>
      <li>The computer system is <strong>validated</strong> on site to ensure that only ABO-compatible blood is selected.</li>
      <li>The patient's ABO group determined on <strong>two separate determinations</strong> — one from the current sample and one from a second sample, or a historical record.</li>
      <li>Negative antibody screen and no history of clinically significant antibodies.</li>
      <li>System contains donor unit number, component, ABO/D (confirmed), and recipient data; alerts discrepancies between entered and stored data.</li>
      <li>Logic prevents release of ABO-incompatible units.</li>
    </ol>
    <h4>Advantages</h4>
    <ul>
      <li>Faster issue (minutes); supports remote blood fridges.</li>
      <li>Reduced sample handling and workload; fewer reserved/wasted units (lower crossmatch-to-transfusion ratio).</li>
      <li>Removes the false reactions of immediate spin (cold antibodies, rouleaux).</li>
    </ul>
    <h4>Risks and controls</h4>
    <ul>
      <li>Depends on correct sample identification: a single mislabelled sample could give a wrong group — hence two separate determinations.</li>
      <li>Computer failure → backup serological procedure.</li>
      <li>Rare low-titre ABO antibodies to weak subgroups are not detected.</li>
    </ul>
    <p>The EXM is increasingly adopted in large Philippine hospitals with integrated LIS, but many centres still use immediate-spin crossmatches.</p>
  `,
  tip: "'Two separate ABO determinations' is the requirement examiners look for.",
  sources: ["B5", "B1"]
},
{
  id: "ih20", domain: "ih-testing",
  keypoints: ["adsorption","elution","neutralisation","titration","autoantibody","acid glycine","heat elution","last wash","Lewis","P1","Chido/Rodgers","critical titre","fourfold","parallel testing"],
  q: "Short notes on special techniques: adsorption, elution, neutralisation and titration.",
  tags: ["adsorption", "elution", "neutralisation", "titration"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Technique</th><th>Purpose</th><th>Examples</th></tr>
      <tr><td><strong>Adsorption</strong></td><td>Remove antibody from plasma using cells with the antigen</td><td>Removing warm or cold autoantibodies to reveal alloantibodies (auto- or allo-adsorption); separating mixtures; confirming weak antigens (adsorption–elution for Ael, DEL)</td></tr>
      <tr><td><strong>Elution</strong></td><td>Release antibody bound to red cells for identification</td><td>Heat (56 °C — ABO HDFN), acid glycine (warm IgG), cold acid, organic solvents (dichloromethane, now less used), freeze–thaw. Positive DAT investigations, HDFN, delayed haemolytic reactions</td></tr>
      <tr><td><strong>Neutralisation (inhibition)</strong></td><td>Soluble antigen neutralises antibody, removing its reactivity</td><td>Lewis (plasma/saliva), P1 (hydatid fluid, pigeon egg), Sda (urine), Chido/Rodgers (plasma — C4), I (breast milk), ABH (saliva — secretor studies)</td></tr>
      <tr><td><strong>Titration</strong></td><td>Semi-quantify antibody (reciprocal of highest dilution giving 1+ agglutination)</td><td>Prenatal monitoring (critical titre anti-D 16–32; anti-K 8), anti-A/B titres for ABO-incompatible transplant and platelets, HTLA antibodies (high titre, low avidity)</td></tr>
    </table></div>
    <p>Each needs proper controls: last wash control in elution (should be negative, proves that activity in the eluate came from bound antibody), dilution controls with saline in neutralisation, and running previous samples in parallel during titration (titres must be compared under identical conditions; a rise of ≥2 dilutions, i.e. fourfold, is significant).</p>
  `,
  tip: "The 'last wash' control in elution and the fourfold titre change are the technical details to add.",
  sources: ["B1", "B2"]
}
);
