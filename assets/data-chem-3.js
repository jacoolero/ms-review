/* Clinical Chemistry — part 3: liver & GI, endocrinology, TDM/toxicology/vitamins/trace elements */
window.QBANK.push(
{
  id: "cc40", domain: "chem-liver", star: true,
  q: "Describe bilirubin metabolism and explain how laboratory tests distinguish pre-hepatic, hepatic and post-hepatic jaundice.",
  tags: ["bilirubin", "jaundice", "urobilinogen"],
  answer: `
    <h4>Metabolism</h4>
    <p>Haem from senescent red cells → biliverdin (haem oxygenase) → <strong>unconjugated bilirubin</strong> (biliverdin reductase), carried on albumin to the liver. Uptake by OATP transporters; conjugation with glucuronic acid by <strong>UGT1A1</strong>; excretion into bile by MRP2 (rate-limiting). In the gut, bacteria convert bilirubin to urobilinogen; some is reabsorbed and excreted in urine; the rest becomes stercobilin (brown stool). δ-bilirubin is conjugated bilirubin covalently bound to albumin (half-life ~19 days) — explains slow fall of direct bilirubin after obstruction is relieved.</p>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Pre-hepatic (haemolysis)</th><th>Hepatic (hepatitis)</th><th>Post-hepatic (obstruction)</th></tr>
      <tr><td>Unconjugated bilirubin</td><td>↑↑</td><td>↑</td><td>N / slight ↑</td></tr>
      <tr><td>Conjugated bilirubin</td><td>N</td><td>↑</td><td>↑↑</td></tr>
      <tr><td>Urine bilirubin</td><td>Absent (acholuric)</td><td>Present</td><td>Present (dark urine)</td></tr>
      <tr><td>Urine urobilinogen</td><td>↑↑</td><td>↑ or N</td><td>↓ / absent</td></tr>
      <tr><td>Stool</td><td>Dark</td><td>Normal/pale</td><td>Pale, clay-coloured</td></tr>
      <tr><td>ALT/AST</td><td>N (LDH ↑, haptoglobin ↓)</td><td>↑↑</td><td>Mild ↑</td></tr>
      <tr><td>ALP/GGT</td><td>N</td><td>Mild ↑</td><td>↑↑</td></tr>
    </table></div>
    <h4>Inherited hyperbilirubinaemias</h4>
    <p>Unconjugated: <strong>Gilbert</strong> (UGT1A1 promoter TA repeat, ~5–10%; rises with fasting), Crigler–Najjar I and II. Conjugated: Dubin–Johnson (MRP2; black liver), Rotor. Neonatal jaundice is common in the Philippines because of high <strong>G6PD deficiency</strong> prevalence — part of the newborn screening panel.</p>
    <p>Methods: diazo (Jendrassik–Grof, Evelyn–Malloy) — unconjugated bilirubin needs an accelerator (caffeine/methanol); vanadate/bilirubin oxidase methods; transcutaneous bilirubinometry in neonates.</p>
  `,
  tip: "A three-column table of pre-, intra- and post-hepatic findings is the expected answer format.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc41", domain: "chem-liver", star: true,
  q: "Interpret the 'liver function tests' pattern approach: hepatocellular vs cholestatic injury, the R ratio, and markers of synthetic function.",
  tags: ["LFT", "R ratio", "AST/ALT", "albumin", "PT"],
  answer: `
    <p>"Liver function tests" mostly measure <strong>injury</strong> (enzymes) rather than function. True function is shown by bilirubin, albumin and prothrombin time/INR.</p>
    <div class="calc">R ratio = (ALT / ALT ULN) ÷ (ALP / ALP ULN)
R &gt; 5  → hepatocellular
R &lt; 2  → cholestatic
2–5    → mixed</div>
    <h4>Hepatocellular patterns</h4>
    <ul>
      <li>ALT &gt;1000 U/L: acute viral hepatitis (A, B, E), ischaemic hepatitis (rapid rise and fall, high LDH), paracetamol toxicity, acute biliary obstruction (transiently).</li>
      <li><strong>AST:ALT &gt;2</strong> with raised GGT: alcoholic liver disease (pyridoxal phosphate deficiency reduces ALT; mitochondrial AST).</li>
      <li>AST:ALT &gt;1 in non-alcoholic disease suggests cirrhosis.</li>
      <li>MASLD (formerly NAFLD): mild ALT &gt; AST elevation; FIB-4 score (age, AST, ALT, platelets) to stratify fibrosis.</li>
    </ul>
    <h4>Cholestatic pattern</h4>
    <p>ALP and GGT high: extrahepatic obstruction (stones, pancreatic cancer, cholangiocarcinoma — note liver fluke-associated cholangiocarcinoma from <em>Clonorchis/Opisthorchis</em> in Asia), primary biliary cholangitis (AMA-M2), primary sclerosing cholangitis, drug-induced cholestasis, infiltration (TB, lymphoma, metastases).</p>
    <h4>Synthetic function</h4>
    <ul>
      <li><strong>PT/INR</strong> — factor VII half-life ~6 h: best acute marker; does not correct with vitamin K in liver failure (but does in cholestasis).</li>
      <li><strong>Albumin</strong> — half-life ~20 days: chronic marker; also low in malnutrition, nephrotic syndrome, inflammation.</li>
      <li>Bilirubin, ammonia (encephalopathy), glucose (failure).</li>
    </ul>
    <p>Scores: Child–Pugh and MELD-Na (bilirubin, INR, creatinine, sodium) for prognosis and transplant listing.</p>
  `,
  tip: "Use the R ratio — it shows a systematic, quantitative approach rather than a list.",
  sources: ["C1", "C3"]
},
{
  id: "cc42", domain: "chem-liver",
  q: "Discuss the serological and molecular markers of hepatitis B infection and how they define the phases of infection.",
  tags: ["hepatitis B", "HBsAg", "HBeAg", "HBV DNA"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>HBsAg</th><th>Anti-HBc IgM</th><th>Anti-HBc total</th><th>HBeAg</th><th>Anti-HBe</th><th>Anti-HBs</th></tr>
      <tr><td>Incubation / early acute</td><td>+</td><td>−/+</td><td>−/+</td><td>+</td><td>−</td><td>−</td></tr>
      <tr><td>Acute infection</td><td>+</td><td>+</td><td>+</td><td>+</td><td>−</td><td>−</td></tr>
      <tr><td>Window period</td><td>−</td><td>+</td><td>+</td><td>−</td><td>±</td><td>−</td></tr>
      <tr><td>Recovered (immune)</td><td>−</td><td>−</td><td>+</td><td>−</td><td>+</td><td>+</td></tr>
      <tr><td>Vaccinated</td><td>−</td><td>−</td><td>−</td><td>−</td><td>−</td><td>+ (≥10 mIU/mL)</td></tr>
      <tr><td>Chronic (&gt;6 months HBsAg)</td><td>+</td><td>−</td><td>+</td><td>±</td><td>±</td><td>−</td></tr>
      <tr><td>Isolated anti-HBc</td><td>−</td><td>−</td><td>+</td><td>−</td><td>−</td><td>−</td></tr>
    </table></div>
    <h4>Phases of chronic infection (EASL nomenclature)</h4>
    <ol>
      <li><strong>HBeAg-positive chronic infection</strong> ("immune tolerant") — very high DNA, normal ALT.</li>
      <li><strong>HBeAg-positive chronic hepatitis</strong> — high DNA, raised ALT, active inflammation.</li>
      <li><strong>HBeAg-negative chronic infection</strong> ("inactive carrier") — DNA &lt;2000 IU/mL, normal ALT.</li>
      <li><strong>HBeAg-negative chronic hepatitis</strong> — precore/core promoter mutants; fluctuating DNA and ALT.</li>
      <li>HBsAg-negative (occult/resolved) — anti-HBc positive; risk of reactivation with rituximab or chemotherapy.</li>
    </ol>
    <p>Quantitative HBV DNA (real-time PCR, IU/mL) guides treatment; quantitative HBsAg predicts loss of HBsAg. The Philippines has intermediate-to-high HBV endemicity (roughly 1 in 10–16 adults HBsAg-positive in older surveys), making HBV the main cause of HCC locally. Isolated anti-HBc in blood donors needs NAT or anti-HBs testing.</p>
  `,
  tip: "Name the window period (only anti-HBc IgM positive) — a classic exam question.",
  sources: ["C1", "C3"]
},
{
  id: "cc43", domain: "chem-liver",
  keypoints: ["lipase","amylase","3 × upper limit","revised Atlanta","imaging","macroamylasaemia","CRP > 150","gallstones","triglyceride","faecal elastase","faecal fat","secretin","sweat chloride"],
  q: "Describe the laboratory diagnosis of acute pancreatitis and the assessment of exocrine pancreatic insufficiency.",
  tags: ["pancreatitis", "lipase", "faecal elastase"],
  answer: `
    <h4>Acute pancreatitis</h4>
    <p>Diagnosis (revised Atlanta) needs 2 of 3: typical epigastric pain; <strong>lipase or amylase ≥3 × upper limit</strong>; characteristic imaging. Lipase is preferred: more specific, stays raised longer (8–14 days vs 3–5 days for amylase), and is raised in alcoholic pancreatitis where amylase may be normal. Enzyme level does not predict severity.</p>
    <p>Other causes of high amylase: salivary disease, macroamylasaemia (low urine amylase, normal lipase), renal failure, bowel perforation or infarction, ruptured ectopic pregnancy, DKA.</p>
    <h4>Severity and cause</h4>
    <ul>
      <li>Severity: CRP &gt;150 mg/L at 48 h, urea/BUN rising, haematocrit &gt;44%, SIRS, scores (Ranson, Glasgow–Imrie, BISAP).</li>
      <li>Cause: ALT &gt;3 × ULN suggests gallstones; triglyceride &gt;11.3 mmol/L (1000 mg/dL); calcium; IgG4 for autoimmune pancreatitis; alcohol history.</li>
    </ul>
    <h4>Exocrine insufficiency</h4>
    <ul>
      <li><strong>Faecal elastase-1</strong> (ELISA) — stable, unaffected by enzyme supplements; &lt;200 µg/g mild, &lt;100 µg/g severe. Watery stool dilutes it.</li>
      <li>Faecal fat (72-h collection, &gt;7 g/day) — cumbersome; Sudan stain is qualitative.</li>
      <li>¹³C-mixed triglyceride breath test.</li>
      <li>Direct secretin stimulation tests — reference but invasive.</li>
      <li>Sweat chloride (&gt;60 mmol/L) for cystic fibrosis in children.</li>
    </ul>
  `,
  tip: "State that lipase is preferred and that enzyme level does not predict severity.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc44", domain: "chem-liver",
  keypoints: ["urea cycle","glutamine","hepatic encephalopathy","OTC deficiency","orotic acid","valproate","on ice","EDTA or heparin","separate within 15–30 min","haemolysis","smoking","glutamate dehydrogenase"],
  q: "Discuss ammonia metabolism and the pre-analytical requirements for plasma ammonia measurement.",
  tags: ["ammonia", "urea cycle", "hepatic encephalopathy"],
  answer: `
    <p>Ammonia comes from amino acid deamination, glutamine breakdown in the gut and kidney, and bacterial urease in the colon. The liver detoxifies it in the <strong>urea cycle</strong> (periportal hepatocytes; CPS-I, OTC, ASS, ASL, arginase; N-acetylglutamate activates CPS-I) and by glutamine synthesis (perivenous hepatocytes, also muscle and brain). In the brain, astrocyte glutamine accumulation causes swelling — the basis of encephalopathy.</p>
    <h4>Causes of hyperammonaemia</h4>
    <ul>
      <li>Liver failure and portosystemic shunting (hepatic encephalopathy).</li>
      <li>Urea cycle disorders (OTC deficiency is X-linked; check orotic acid — high in OTC, low in CPS-I deficiency), organic acidaemias, fatty acid oxidation defects.</li>
      <li>Valproate, Reye syndrome, urease-producing UTI with obstruction, GI bleeding, high-protein parenteral feeding.</li>
    </ul>
    <h4>Pre-analytical requirements (critical)</h4>
    <ol>
      <li>Free-flowing venous or arterial sample, no prolonged tourniquet or fist clenching.</li>
      <li><strong>EDTA or heparin</strong> (not ammonium heparin) tube, completely filled.</li>
      <li><strong>Place on ice immediately</strong>; separate within 15–30 min; analyse at once — ammonia rises in vitro from deamination of glutamine and red cell release.</li>
      <li>Avoid haemolysis (red cells contain ~3 × plasma ammonia) and smoking by the patient or staff (ammonia in smoke).</li>
    </ol>
    <p>Method: glutamate dehydrogenase (NADPH consumption at 340 nm). A normal ammonia helps exclude hepatic encephalopathy, but levels correlate poorly with its severity.</p>
  `,
  tip: "Pre-analytical handling is the core of this question — ice, prompt separation, no haemolysis.",
  sources: ["C1", "C2"]
},
{
  id: "cc45", domain: "chem-liver",
  q: "Short notes: iron studies in iron deficiency, anaemia of inflammation and haemochromatosis.",
  tags: ["iron", "ferritin", "transferrin saturation", "hepcidin"],
  answer: `
    <p>Iron balance is controlled by <strong>hepcidin</strong>, a liver hormone that degrades ferroportin, blocking iron absorption by enterocytes and release from macrophages. Hepcidin rises with iron load and inflammation (IL-6) and falls with iron deficiency and increased erythropoiesis.</p>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Iron deficiency</th><th>Anaemia of inflammation</th><th>Haemochromatosis</th><th>Thalassaemia trait</th></tr>
      <tr><td>Serum iron</td><td>↓</td><td>↓</td><td>↑</td><td>N</td></tr>
      <tr><td>TIBC / transferrin</td><td>↑</td><td>↓ / N</td><td>N / ↓</td><td>N</td></tr>
      <tr><td>Transferrin saturation</td><td>↓ (&lt;16%)</td><td>↓ / N</td><td>↑ (&gt;45%)</td><td>N</td></tr>
      <tr><td>Ferritin</td><td>↓ (&lt;30 µg/L)</td><td>N / ↑</td><td>↑↑</td><td>N</td></tr>
      <tr><td>Soluble transferrin receptor</td><td>↑</td><td>N</td><td>↓ / N</td><td>↑</td></tr>
      <tr><td>Hepcidin</td><td>↓</td><td>↑</td><td>↓ (HFE)</td><td>↓</td></tr>
    </table></div>
    <p>Ferritin is the best single test for iron deficiency, but is an acute-phase protein: with inflammation, ferritin up to ~100 µg/L may still mean iron deficiency. The <strong>sTfR/log ferritin index</strong> (&gt;2) helps detect combined deficiency. In the Philippines, iron deficiency (often with hookworm infection) and thalassaemia trait (α-thal, HbE) must be distinguished — the Mentzer index (MCV/RBC &lt;13) and haemoglobin analysis help.</p>
    <p>Serum iron has marked diurnal variation (higher in the morning) and must be collected fasting; avoid haemolysis.</p>
  `,
  tip: "Mention hepcidin as the master regulator — it ties all four patterns together.",
  sources: ["C1", "C3"]
},
{
  id: "cc46", domain: "chem-liver",
  q: "Discuss the investigation of suspected paracetamol (acetaminophen) overdose, including the treatment nomogram and laboratory pitfalls.",
  tags: ["paracetamol", "nomogram", "NAC", "toxicology"],
  answer: `
    <h4>Mechanism</h4>
    <p>Normally paracetamol is glucuronidated and sulfated. A small fraction is oxidised by CYP2E1/3A4 to <strong>NAPQI</strong>, detoxified by glutathione. In overdose, glutathione is exhausted and NAPQI binds hepatocyte proteins → centrilobular (zone 3) necrosis. Risk is higher with chronic alcohol use, enzyme-inducing drugs, malnutrition and fasting.</p>
    <h4>Laboratory approach</h4>
    <ol>
      <li>Record the <strong>time of ingestion</strong>.</li>
      <li>Measure plasma paracetamol at <strong>≥4 hours</strong> after a single acute ingestion (earlier levels are uninterpretable because absorption is incomplete).</li>
      <li>Plot on the <strong>Rumack–Matthew nomogram</strong>: the treatment line starts at 150 mg/L (1000 µmol/L) at 4 h (US 150-line; UK now uses 100 mg/L at 4 h). Above the line → give N-acetylcysteine (NAC), which restores glutathione.</li>
      <li>Baseline and follow-up ALT, INR, creatinine, glucose, lactate, phosphate, venous pH.</li>
    </ol>
    <p>The nomogram is <em>not</em> valid for staggered overdoses, unknown time of ingestion, or extended-release products — treat these on clinical grounds and ALT.</p>
    <h4>Prognostic markers</h4>
    <p>King's College criteria for transplant: arterial pH &lt;7.30 after resuscitation, or INR &gt;6.5 + creatinine &gt;300 µmol/L + grade III/IV encephalopathy. Lactate and phosphate add value.</p>
    <h4>Analytical pitfalls</h4>
    <p>Enzymatic (arylacylamidase) and immunoassays may be affected by bilirubin (false positive at low levels) and NAC; ensure units are consistent (mg/L vs µmol/L; ×6.62).</p>
  `,
  tip: "Do not forget: levels before 4 hours cannot be plotted, and staggered overdoses are not plotted.",
  sources: ["C1", "C2"]
},
{
  id: "cc47", domain: "chem-endo", star: true,
  keypoints: ["TSH","FT4","FT3","log-linear","primary hypothyroidism","anti-TPO","Graves","TRAb","subclinical","central hypothyroidism","biotin","heterophile","non-thyroidal illness","pregnancy","hCG"],
  q: "Explain the hypothalamic–pituitary–thyroid axis and interpret thyroid function test patterns, including the pitfalls.",
  tags: ["thyroid", "TSH", "FT4", "case"],
  answer: `
    <p>TRH from the hypothalamus stimulates pituitary TSH, which drives T4 and T3 synthesis. Free hormones feed back negatively. Because of the log-linear relationship, a twofold change in FT4 produces a ~100-fold change in TSH, so <strong>TSH is the best first-line test</strong> when the pituitary is intact.</p>
    <div class="table-wrap"><table>
      <tr><th>TSH</th><th>FT4</th><th>FT3</th><th>Interpretation</th></tr>
      <tr><td>↑</td><td>↓</td><td>N/↓</td><td>Primary hypothyroidism (Hashimoto — anti-TPO +)</td></tr>
      <tr><td>↑</td><td>N</td><td>N</td><td>Subclinical hypothyroidism; recovery from illness</td></tr>
      <tr><td>↓</td><td>↑</td><td>↑</td><td>Primary hyperthyroidism (Graves — TRAb +; toxic nodule)</td></tr>
      <tr><td>↓</td><td>N</td><td>↑</td><td>T3 toxicosis</td></tr>
      <tr><td>↓</td><td>N</td><td>N</td><td>Subclinical hyperthyroidism; early pregnancy (hCG)</td></tr>
      <tr><td>↓ / N</td><td>↓</td><td>↓</td><td>Secondary (central) hypothyroidism; non-thyroidal illness</td></tr>
      <tr><td>↑ / N</td><td>↑</td><td>↑</td><td>TSH-oma; thyroid hormone resistance; assay interference; poor adherence to levothyroxine</td></tr>
    </table></div>
    <h4>Pitfalls</h4>
    <ul>
      <li><strong>Biotin</strong> — false low TSH, false high FT4/FT3 (mimics Graves).</li>
      <li>Heterophile antibodies, anti-T4 antibodies, macro-TSH.</li>
      <li>Non-thyroidal illness ("sick euthyroid") — low T3, then low T4; avoid testing in acute illness.</li>
      <li>Drugs: amiodarone, lithium, glucocorticoids, dopamine (suppress TSH), heparin (in vitro FFA release → falsely high FT4).</li>
      <li>Pregnancy: trimester-specific intervals; hCG stimulates the TSH receptor in the first trimester.</li>
    </ul>
    <p>In the Philippines, iodine deficiency is addressed by the ASIN law (RA 8172, salt iodisation); congenital hypothyroidism is on the newborn screening panel.</p>
  `,
  tip: "Explain the log-linear TSH–FT4 relationship — it justifies 'TSH first'.",
  sources: ["C14", "C1", "C3"]
},
{
  id: "cc48", domain: "chem-endo", star: true,
  q: "Discuss the laboratory investigation of Cushing's syndrome.",
  tags: ["Cushing", "cortisol", "dexamethasone", "ACTH"],
  answer: `
    <p>First exclude exogenous glucocorticoids (including topical and herbal products). Then follow three stages.</p>
    <h4>1. Confirm hypercortisolism (at least two first-line tests)</h4>
    <ul>
      <li><strong>Overnight 1 mg dexamethasone suppression test</strong>: 08:00 cortisol &gt;50 nmol/L (1.8 µg/dL) = failure to suppress. False positives: oestrogen (raises CBG), CYP3A4 inducers (rifampicin, carbamazepine), malabsorption.</li>
      <li><strong>Late-night salivary cortisol</strong> (two samples) — loss of the diurnal nadir; false high in smokers and night-shift workers.</li>
      <li><strong>24-h urine free cortisol</strong> (≥2 collections) — &gt;3 × ULN is strongly suggestive; LC-MS/MS preferred.</li>
    </ul>
    <p>Pseudo-Cushing states (depression, alcohol, severe obesity, poorly controlled diabetes) can give mild abnormalities.</p>
    <h4>2. Determine ACTH dependence</h4>
    <p>Plasma ACTH (EDTA, on ice): <strong>&lt;2 pmol/L (10 pg/mL)</strong> → ACTH-independent (adrenal adenoma/carcinoma — CT adrenals). <strong>&gt;4 pmol/L (20 pg/mL)</strong> → ACTH-dependent.</p>
    <h4>3. Locate the ACTH source</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Pituitary (Cushing's disease, ~70%)</th><th>Ectopic ACTH (e.g. small cell lung, carcinoid)</th></tr>
      <tr><td>High-dose dexamethasone</td><td>Suppresses (&gt;50%)</td><td>No suppression</td></tr>
      <tr><td>CRH / desmopressin stimulation</td><td>ACTH and cortisol rise</td><td>No rise</td></tr>
      <tr><td>Hypokalaemia</td><td>Uncommon</td><td>Common (very high cortisol saturates 11β-HSD2)</td></tr>
      <tr><td>Bilateral inferior petrosal sinus sampling</td><td>Central:peripheral ACTH ≥2 basal, ≥3 after CRH</td><td>No gradient</td></tr>
    </table></div>
  `,
  tip: "Structure as confirm → ACTH dependent? → locate; examiners look for that logic.",
  sources: ["C14", "C1"]
},
{
  id: "cc49", domain: "chem-endo",
  q: "Describe the investigation of primary adrenal insufficiency and congenital adrenal hyperplasia.",
  tags: ["Addison", "CAH", "17-OHP", "synacthen"],
  answer: `
    <h4>Primary adrenal insufficiency (Addison disease)</h4>
    <p>Causes: autoimmune (anti-21-hydroxylase antibodies), <strong>tuberculosis</strong> (still important in the Philippines), HIV-related infections, haemorrhage (meningococcaemia, anticoagulants), metastases, adrenoleukodystrophy.</p>
    <ul>
      <li>Biochemistry: hyponatraemia, hyperkalaemia (aldosterone deficiency), hypoglycaemia, mild hypercalcaemia, eosinophilia.</li>
      <li>Morning cortisol &lt;140 nmol/L (5 µg/dL) with high ACTH is strongly suggestive; &gt;400–500 nmol/L makes it unlikely.</li>
      <li><strong>Short Synacthen (250 µg cosyntropin) test</strong>: peak cortisol &lt;~420–500 nmol/L (assay-dependent; lower cut-offs with LC-MS/MS and newer immunoassays) at 30 or 60 min = inadequate.</li>
      <li>High plasma renin, low aldosterone.</li>
    </ul>
    <p>Secondary insufficiency (pituitary): low ACTH, normal potassium (RAAS intact).</p>
    <h4>Congenital adrenal hyperplasia</h4>
    <p>Autosomal recessive defects of cortisol synthesis; low cortisol → high ACTH → adrenal hyperplasia and shunting into androgens. <strong>21-hydroxylase deficiency</strong> (~95%): salt-wasting in neonates (low Na, high K, high renin), virilised female genitalia; marked rise in <strong>17-hydroxyprogesterone</strong>. 11β-hydroxylase deficiency: hypertension (11-deoxycorticosterone) and virilisation, high 11-deoxycortisol.</p>
    <p>CAH is on the Philippine newborn screening panel (17-OHP on dried blood spots). Preterm, sick or stressed babies have false positives; second-tier LC-MS/MS steroid profiling or genetic testing improves specificity. Late-onset CAH presents with hirsutism and is tested with an ACTH-stimulated 17-OHP.</p>
  `,
  tip: "Contrast primary vs secondary by potassium/renin — a simple, high-yield discriminator.",
  sources: ["C14", "C1"]
},
{
  id: "cc50", domain: "chem-endo",
  q: "Discuss the screening and confirmation of primary aldosteronism and phaeochromocytoma as causes of secondary hypertension.",
  tags: ["aldosterone", "ARR", "metanephrines", "hypertension"],
  answer: `
    <h4>Primary aldosteronism</h4>
    <p>The commonest endocrine cause of hypertension (5–10% of hypertensives). Screen with the <strong>aldosterone-to-renin ratio (ARR)</strong> in patients with resistant hypertension, hypokalaemia, adrenal incidentaloma, or young onset.</p>
    <ul>
      <li>Correct hypokalaemia first (low K suppresses aldosterone).</li>
      <li>Drug effects: β-blockers and NSAIDs raise ARR (false positive); diuretics, ACE inhibitors, ARBs, MR antagonists lower it (false negative). Change to verapamil/hydralazine/α-blockers where possible.</li>
      <li>Sample mid-morning after 2 h upright, seated 5–15 min.</li>
    </ul>
    <p>Confirm with saline infusion, oral salt loading or captopril challenge (aldosterone fails to suppress). Subtype: CT adrenals, then <strong>adrenal venous sampling</strong> to distinguish unilateral adenoma (surgery) from bilateral hyperplasia (MR antagonist).</p>
    <h4>Phaeochromocytoma / paraganglioma</h4>
    <p>Best test: <strong>plasma free metanephrines</strong> (sampled supine after 30 min rest) or 24-h urine fractionated metanephrines, measured by LC-MS/MS. Metanephrines are produced continuously inside the tumour, whereas catecholamine release is episodic — hence higher sensitivity.</p>
    <ul>
      <li>Values &gt;3–4 × ULN are nearly diagnostic; mild rises need repeat or the clonidine suppression test.</li>
      <li>False positives: tricyclics, MAO inhibitors, sympathomimetics, levodopa, acetaminophen (some HPLC assays), stress, sitting sampling.</li>
      <li>3-methoxytyramine suggests dopamine-secreting or malignant tumours (SDHB).</li>
    </ul>
    <p>About 30–40% have germline mutations (VHL, RET, NF1, SDHx) — offer genetic testing.</p>
  `,
  tip: "Name the confounding drugs for ARR — this is where most candidates lose marks.",
  sources: ["C14", "C1"]
},
{
  id: "cc51", domain: "chem-endo",
  q: "Describe the laboratory evaluation of a pituitary adenoma presenting with galactorrhoea and amenorrhoea.",
  tags: ["prolactin", "macroprolactin", "hook effect"],
  answer: `
    <p>Galactorrhoea and amenorrhoea point to <strong>hyperprolactinaemia</strong>: prolactin suppresses GnRH pulsatility, causing hypogonadism.</p>
    <h4>Step 1 — confirm and exclude common causes</h4>
    <ul>
      <li>Repeat prolactin (stress of venepuncture can raise it modestly).</li>
      <li><strong>Pregnancy test</strong> (hCG) — always first.</li>
      <li>Drugs: dopamine antagonists (metoclopramide, domperidone — very commonly used in the Philippines for lactation — risperidone, haloperidol), opioids, oestrogens, verapamil.</li>
      <li>Primary hypothyroidism (TRH stimulates prolactin), renal failure, chest wall lesions, PCOS.</li>
    </ul>
    <h4>Step 2 — laboratory pitfalls</h4>
    <ul>
      <li><strong>Macroprolactin</strong> (prolactin–IgG complex): biologically inactive, cleared slowly. Screen by <strong>PEG precipitation</strong>; recovery &lt;40% indicates macroprolactinaemia. Avoids unnecessary MRI and drugs.</li>
      <li><strong>Hook effect</strong>: a large macroadenoma with modestly raised prolactin may hide a very high level — re-assay after 1:100 dilution.</li>
      <li>"Stalk effect": a non-functioning macroadenoma compressing the stalk raises prolactin modestly (usually &lt;2000–4000 mIU/L), not to prolactinoma levels.</li>
    </ul>
    <h4>Step 3 — pituitary assessment</h4>
    <p>MRI of the pituitary; assess other axes (TSH/FT4, morning cortisol, LH/FSH, oestradiol, IGF-1 for acromegaly co-secretion). Prolactin levels roughly match tumour size; a prolactinoma &gt;1 cm usually gives &gt;5000 mIU/L. First-line treatment: dopamine agonists (cabergoline), with prolactin monitoring.</p>
  `,
  tip: "Mention macroprolactin AND the hook effect — the two lab-specific points in this case.",
  sources: ["C14", "C1"]
},
{
  id: "cc52", domain: "chem-endo",
  q: "Discuss the biochemical investigation of female infertility and polycystic ovary syndrome.",
  tags: ["PCOS", "AMH", "reproductive endocrinology"],
  answer: `
    <h4>Ovulation and ovarian reserve</h4>
    <ul>
      <li><strong>Mid-luteal (day 21 of a 28-day cycle) progesterone</strong> &gt;30 nmol/L confirms ovulation.</li>
      <li><strong>Day 2–5 FSH, LH, oestradiol</strong>: high FSH (&gt;10–12 IU/L) with low oestradiol = reduced reserve; very high FSH = premature ovarian insufficiency.</li>
      <li><strong>Anti-Müllerian hormone (AMH)</strong>: from granulosa cells of small follicles, cycle-independent; predicts response to IVF stimulation; high in PCOS; not a test of fertility potential on its own.</li>
      <li>Prolactin and TSH for anovulation.</li>
    </ul>
    <h4>Polycystic ovary syndrome (Rotterdam criteria — 2 of 3)</h4>
    <ol>
      <li>Oligo- or anovulation.</li>
      <li>Clinical and/or <strong>biochemical hyperandrogenism</strong>.</li>
      <li>Polycystic ovarian morphology on ultrasound (or high AMH in adults per the 2023 international guideline).</li>
    </ol>
    <p>Biochemistry: total testosterone (LC-MS/MS preferred — female levels are low, where immunoassays are inaccurate), SHBG and calculated free androgen index (FAI = testosterone/SHBG × 100); LH:FSH ratio often &gt;2 but not diagnostic. Exclude non-classical CAH (17-OHP), hyperprolactinaemia, thyroid disease, Cushing syndrome, androgen-secreting tumour (testosterone &gt;5 nmol/L or rapid virilisation; DHEAS for adrenal source).</p>
    <p>Metabolic screening: 75 g OGTT or HbA1c and lipid profile, because PCOS increases risk of type 2 diabetes and cardiovascular disease.</p>
  `,
  tip: "Stress LC-MS/MS for female testosterone — immunoassays are poor in the low range.",
  sources: ["C14", "C1"]
},
{
  id: "cc53", domain: "chem-endo",
  keypoints: ["immunoassay","LC-MS/MS","cross-reactivity","specificity","sensitivity","testosterone in women","throughput","matrix effects","internal standard","standardisation","vitamin D","tacrolimus","newborn screening"],
  q: "Compare immunoassay and LC-MS/MS for steroid hormone and drug measurement.",
  tags: ["LC-MS/MS", "mass spectrometry", "immunoassay"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>Immunoassay</th><th>LC-MS/MS</th></tr>
      <tr><td>Principle</td><td>Antibody binding (competitive for small molecules)</td><td>Chromatographic separation + mass/charge of parent and fragment ions (MRM)</td></tr>
      <tr><td>Specificity</td><td>Cross-reactivity with related steroids, metabolites, drugs (e.g. prednisolone in cortisol assays; DHEAS in testosterone assays in women)</td><td>High — separates isomers and measures several analytes at once</td></tr>
      <tr><td>Sensitivity at low levels</td><td>Poor for female/child testosterone, oestradiol in men and post-menopause</td><td>Excellent with appropriate extraction</td></tr>
      <tr><td>Throughput / automation</td><td>High, random access, cheap per test</td><td>Lower, batch-mode; improving</td></tr>
      <tr><td>Cost and skill</td><td>Low; general staff</td><td>High capital cost; specialised staff and method development</td></tr>
      <tr><td>Interferences</td><td>Heterophile antibodies, biotin, hook effect</td><td>Ion suppression/matrix effects (corrected with stable isotope internal standards); isobaric compounds</td></tr>
      <tr><td>Standardisation</td><td>Method-specific bias</td><td>Reference method (e.g. CDC HoSt programme for testosterone and oestradiol)</td></tr>
    </table></div>
    <p>Use LC-MS/MS for: steroid profiling in CAH and adrenal tumours, testosterone in women and children, 25-OH vitamin D (separates D2 and D3 and the C3-epimer), urinary metanephrines, immunosuppressants (tacrolimus, cyclosporine — avoids metabolite cross-reactivity), newborn screening, and drug confirmation testing. Immunoassays remain practical for high-volume tests where specificity is adequate.</p>
  `,
  tip: "Give concrete examples of immunoassay cross-reactivity — it makes the comparison convincing.",
  sources: ["C1", "C14"]
},
{
  id: "cc54", domain: "chem-endo",
  q: "Discuss vitamin D metabolism, its measurement and the interpretation of results.",
  tags: ["vitamin D", "25-OH-D", "osteomalacia"],
  answer: `
    <p>Vitamin D3 is made in skin from 7-dehydrocholesterol by UVB; D2 and D3 also come from diet. The liver hydroxylates them to <strong>25-hydroxyvitamin D</strong> (half-life ~3 weeks, the main circulating form). The kidney (1α-hydroxylase, stimulated by PTH, low phosphate; inhibited by FGF-23) makes active <strong>1,25-dihydroxyvitamin D</strong> (calcitriol, half-life hours).</p>
    <h4>Which test?</h4>
    <ul>
      <li><strong>25-OH-D</strong> — best index of vitamin D status. Deficiency &lt;30 nmol/L (12 ng/mL); insufficiency 30–50 nmol/L; sufficiency &gt;50 nmol/L (20 ng/mL) per IOM; Endocrine Society used &gt;75 nmol/L (30 ng/mL).</li>
      <li><strong>1,25-(OH)₂D</strong> — only for specific questions: granulomatous disease (sarcoidosis, TB, lymphoma), vitamin D-dependent rickets, CKD, hypophosphataemic disorders. It may be normal or high in deficiency because of secondary hyperparathyroidism.</li>
    </ul>
    <h4>Methods</h4>
    <p>Automated immunoassays (variable recovery of D2, cross-reactivity with 24,25-(OH)₂D) and LC-MS/MS (gold standard; resolve the C3-epimer in infants). Standardisation via the Vitamin D Standardization Program (VDSP) and NIST reference materials.</p>
    <h4>Interpretation</h4>
    <p>Low 25-OH-D with high PTH, high ALP, low/normal Ca and low phosphate = osteomalacia/rickets. Despite abundant sunshine, deficiency occurs in the Philippines in urban workers, the elderly, darker skin and obesity. Toxicity (25-OH-D &gt;375 nmol/L) causes hypercalcaemia with suppressed PTH.</p>
  `,
  tip: "Say firmly that 25-OH-D, not 1,25-(OH)₂D, reflects vitamin D status — and explain why.",
  sources: ["C1", "C14"]
},
{
  id: "cc55", domain: "chem-tox", star: true,
  q: "Discuss the principles of therapeutic drug monitoring (TDM). Which drugs need it and how should samples be timed?",
  tags: ["TDM", "pharmacokinetics", "trough"],
  answer: `
    <h4>When is TDM useful?</h4>
    <ul>
      <li>Narrow therapeutic index.</li>
      <li>Poor relationship between dose and blood concentration (variable absorption, metabolism, interactions, genetic polymorphisms).</li>
      <li>Good relationship between concentration and effect/toxicity.</li>
      <li>No easy clinical measure of effect.</li>
      <li>Suspected toxicity or non-adherence.</li>
    </ul>
    <h4>Key pharmacokinetic ideas</h4>
    <p>Steady state is reached after about <strong>5 half-lives</strong>. Zero-order (saturable) kinetics in <strong>phenytoin</strong> means small dose increases can cause large rises in concentration. Protein binding matters: phenytoin and valproate are highly albumin-bound — in hypoalbuminaemia or uraemia the free fraction rises, so a "normal" total level may be toxic (measure free phenytoin or correct with the Sheiner–Tozer equation).</p>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Sample timing</th><th>Notes</th></tr>
      <tr><td>Digoxin</td><td>≥6–8 h post-dose (distribution phase)</td><td>Toxicity enhanced by hypokalaemia, hypomagnesaemia, hypercalcaemia; DLIS interference</td></tr>
      <tr><td>Lithium</td><td>12 h post-dose</td><td>Never in a lithium heparin tube</td></tr>
      <tr><td>Phenytoin, carbamazepine, valproate</td><td>Trough</td><td>Carbamazepine auto-induction over weeks</td></tr>
      <tr><td>Vancomycin</td><td>AUC-guided (AUC/MIC 400–600), or trough</td><td>Nephrotoxicity</td></tr>
      <tr><td>Aminoglycosides</td><td>Peak (efficacy) and trough or extended-interval nomogram</td><td>Oto- and nephrotoxicity</td></tr>
      <tr><td>Tacrolimus, cyclosporine</td><td>Trough (C0) in whole blood (EDTA); cyclosporine sometimes C2</td><td>CYP3A4 interactions; LC-MS/MS preferred</td></tr>
      <tr><td>Theophylline, methotrexate (high-dose), busulfan</td><td>Protocol-specific</td><td>—</td></tr>
    </table></div>
    <p>The request must include dose, time of last dose and time of sampling — without them the result cannot be interpreted.</p>
  `,
  tip: "Mention phenytoin's zero-order kinetics and free fraction — the two concepts examiners test most.",
  sources: ["C1", "C2"]
},
{
  id: "cc56", domain: "chem-tox",
  keypoints: ["paracetamol","salicylate","anion gap","osmolal gap","cholinesterase","organophosphate","immunoassay screening","cut-off","false positive","cross-reactivity","false negative","fentanyl","confirmation","GC-MS","chain of custody","RA 9165"],
  q: "Discuss the laboratory approach to the poisoned patient, including urine drug screening and its limitations.",
  tags: ["toxicology", "drug screen", "organophosphate"],
  answer: `
    <h4>General tests (often more useful than drug screens)</h4>
    <p>Glucose, electrolytes, anion gap, osmolal gap, blood gases, lactate, creatinine, CK, liver tests, ECG, and specific levels when indicated: <strong>paracetamol and salicylate</strong> (often co-ingested and treatable), ethanol, lithium, iron, digoxin, carboxyhaemoglobin, methaemoglobin.</p>
    <h4>Cholinesterase in organophosphate/carbamate poisoning</h4>
    <p>Pesticide poisoning is a leading cause of fatal poisoning in agricultural parts of the Philippines. Red cell acetylcholinesterase reflects synaptic enzyme inhibition; plasma (pseudo)cholinesterase falls earlier and is more sensitive but less specific (low in liver disease, pregnancy, genetic variants — succinylcholine apnoea). Treatment is clinical (atropine, oximes); the test confirms exposure.</p>
    <h4>Urine drug screening</h4>
    <ul>
      <li>Immunoassays for classes: amphetamines (methamphetamine — "shabu", the dominant drug of abuse in the Philippines), cannabinoids (THC-COOH), opiates, cocaine metabolite, benzodiazepines.</li>
      <li>Cut-offs (e.g. methamphetamine 1000 ng/mL, THC 50 ng/mL) are set for workplace testing.</li>
    </ul>
    <h4>Limitations</h4>
    <ul>
      <li>False positives from cross-reactivity: pseudoephedrine, ranitidine and labetalol (amphetamines); efavirenz (cannabinoids); quinolones (opiates); sertraline (benzodiazepines).</li>
      <li>False negatives: synthetic opioids (fentanyl, tramadol) not detected by "opiate" assays; many benzodiazepines (clonazepam, lorazepam); new psychoactive substances.</li>
      <li>A positive result shows exposure, not impairment or time of use.</li>
      <li>Adulteration — check temperature, creatinine, pH, specific gravity, oxidants.</li>
    </ul>
    <p>Medico-legal results need <strong>confirmation by GC-MS or LC-MS/MS</strong> and chain of custody. In the Philippines, drug testing laboratories are accredited by the DOH under RA 9165 (Comprehensive Dangerous Drugs Act).</p>
  `,
  tip: "Emphasise: screening immunoassays are presumptive; confirmation by mass spectrometry with chain of custody.",
  sources: ["C1", "C2"]
},
{
  id: "cc57", domain: "chem-tox",
  q: "Discuss lead poisoning: sources, biochemical effects and laboratory diagnosis.",
  tags: ["lead", "heavy metals", "ZPP", "ALA"],
  answer: `
    <h4>Sources</h4>
    <p>Lead-based paint, informal used lead-acid battery recycling (documented in the Philippines, e.g. Meycauayan, Bulacan), contaminated soil, traditional remedies and cosmetics, plumbing, ammunition, and some imported toys and cookware. Children absorb more and are most vulnerable.</p>
    <h4>Biochemical effects</h4>
    <p>Lead binds sulfhydryl groups and replaces calcium and zinc. In the haem pathway it inhibits:</p>
    <ul>
      <li><strong>δ-ALA dehydratase</strong> → raised urine δ-aminolaevulinic acid.</li>
      <li><strong>Ferrochelatase</strong> → protoporphyrin cannot take up iron; zinc is inserted instead → raised <strong>zinc protoporphyrin (ZPP)</strong>.</li>
      <li>Pyrimidine 5'-nucleotidase → <strong>basophilic stippling</strong> of red cells.</li>
    </ul>
    <p>Results: microcytic anaemia, neuropathy (wrist drop), encephalopathy, cognitive deficits in children, nephropathy (Fanconi), hypertension, gout (saturnine).</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li><strong>Whole blood lead</strong> (EDTA, lead-free tube) by ICP-MS, graphite furnace AAS or anodic stripping voltammetry (POCT LeadCare) — the test of choice. CDC blood lead reference value for children: <strong>3.5 µg/dL</strong>. No safe level exists.</li>
      <li>ZPP — reflects exposure over the past ~3 months (red cell lifespan) but is also raised in iron deficiency.</li>
      <li>Urine ALA, CBC/film, renal function, X-ray (lead lines in metaphyses).</li>
      <li>Urinary lead after chelation challenge is no longer recommended for diagnosis.</li>
    </ul>
    <p>Contamination at collection is a major pre-analytical risk — clean the skin well; capillary positives must be confirmed by venous sample.</p>
  `,
  tip: "Link each enzyme inhibited to its laboratory marker — ALA, ZPP, basophilic stippling.",
  sources: ["C1", "C2"]
},
{
  id: "cc58", domain: "chem-tox",
  q: "Short notes: carbon monoxide poisoning and methaemoglobinaemia — mechanism and laboratory detection by CO-oximetry.",
  tags: ["CO-oximetry", "carboxyhaemoglobin", "methaemoglobin"],
  answer: `
    <h4>Carbon monoxide</h4>
    <p>CO binds haemoglobin with ~240 times the affinity of oxygen, forming <strong>carboxyhaemoglobin (COHb)</strong>, and shifts the oxygen dissociation curve to the left. It also inhibits cytochrome oxidase. Sources: fires, generators and charcoal stoves in closed spaces (a recurring cause of deaths during power outages and typhoons in the Philippines), vehicle exhaust, methylene chloride. Smokers may have COHb up to 10%; symptoms usually above 15–20%.</p>
    <h4>Methaemoglobinaemia</h4>
    <p>Iron oxidised to the ferric (Fe³⁺) state cannot carry oxygen, and shifts the curve left. Causes: drugs (dapsone, benzocaine, primaquine, nitrates, nitrites — well water), and congenital cytochrome b5 reductase deficiency or HbM. Blood is "chocolate brown"; cyanosis with normal pO₂ at MetHb &gt;10–15%. Treat with methylene blue — <strong>contraindicated in G6PD deficiency</strong> (common in Filipinos).</p>
    <h4>Laboratory detection</h4>
    <ul>
      <li><strong>CO-oximetry</strong>: multi-wavelength spectrophotometry of haemolysed whole blood measures O₂Hb, HHb, COHb, MetHb (and SulfHb).</li>
      <li><strong>Pulse oximetry</strong> (two wavelengths) misreads COHb as O₂Hb — SpO₂ falsely normal in CO poisoning; with high MetHb SpO₂ tends towards ~85%.</li>
      <li><strong>Blood gas pO₂</strong> is normal in both — it measures dissolved oxygen, not haemoglobin saturation. The difference between calculated SaO₂ and measured SpO₂ = "saturation gap".</li>
    </ul>
    <p>Samples: arterial or venous heparinised whole blood (COHb is the same in venous blood), analysed promptly; note time from exposure and oxygen therapy, which shortens COHb half-life from ~5 h to ~1 h.</p>
  `,
  tip: "Explain why pulse oximetry and pO₂ are both falsely reassuring — that is the key insight.",
  sources: ["C1", "C2"]
},
{
  id: "cc59", domain: "chem-tox",
  q: "Discuss the laboratory assessment of nutritional status, including vitamin B12, folate and trace elements.",
  tags: ["B12", "folate", "zinc", "nutrition"],
  answer: `
    <h4>Protein–energy status</h4>
    <p>Albumin is a poor nutritional marker (long half-life, falls in inflammation). <strong>Transthyretin (prealbumin)</strong> (half-life ~2 days) and retinol-binding protein respond faster but are also negative acute-phase proteins — interpret with CRP. Refeeding syndrome: monitor phosphate, potassium and magnesium when feeding the malnourished.</p>
    <h4>Vitamin B12 and folate</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>B12 deficiency</th><th>Folate deficiency</th></tr>
      <tr><td>Serum B12</td><td>↓ (but 'normal' in some — false normal with anti-IF antibody interference)</td><td>N</td></tr>
      <tr><td>Holotranscobalamin (active B12)</td><td>↓ (earlier marker)</td><td>N</td></tr>
      <tr><td>Methylmalonic acid</td><td>↑ (specific)</td><td>N</td></tr>
      <tr><td>Homocysteine</td><td>↑</td><td>↑</td></tr>
      <tr><td>Serum / red cell folate</td><td>N / may be ↓</td><td>↓</td></tr>
    </table></div>
    <p>Pernicious anaemia: anti-intrinsic factor antibodies (specific) and anti-parietal cell antibodies (sensitive). Homocysteine must be separated within an hour (red cells release it).</p>
    <h4>Trace elements</h4>
    <ul>
      <li><strong>Zinc</strong> — low in diarrhoea, malnutrition, acrodermatitis enteropathica; plasma zinc falls in inflammation and after meals; use trace-element-free tubes.</li>
      <li><strong>Copper</strong> — low in Wilson disease (low ceruloplasmin, high urine copper, high liver copper) and Menkes disease; copper deficiency after bariatric surgery or zinc excess causes anaemia and myelopathy.</li>
      <li><strong>Selenium</strong> — glutathione peroxidase cofactor; deficiency in long-term parenteral nutrition.</li>
    </ul>
    <p>Measurement: ICP-MS or atomic absorption; contamination control is critical.</p>
  `,
  tip: "Methylmalonic acid separates B12 from folate deficiency — make that explicit.",
  sources: ["C1", "C3"]
},
{
  id: "cc60", domain: "chem-tox",
  q: "Explain the principles of the main analytical techniques used in a clinical chemistry laboratory: spectrophotometry, nephelometry/turbidimetry, electrophoresis, chromatography and mass spectrometry.",
  tags: ["instrumentation", "Beer-Lambert", "analytical principles"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Technique</th><th>Principle</th><th>Typical applications</th><th>Main limitations</th></tr>
      <tr><td>Absorption spectrophotometry</td><td><strong>Beer–Lambert law</strong>: A = εbc — absorbance proportional to concentration</td><td>Most routine chemistry (glucose, creatinine, enzymes at 340 nm)</td><td>Deviates at high absorbance, stray light, H/I/L interference</td></tr>
      <tr><td>Fluorometry</td><td>Emission at a longer wavelength after excitation</td><td>Immunoassays, drugs</td><td>Quenching, inner-filter effect</td></tr>
      <tr><td>Turbidimetry</td><td>Decrease in transmitted light by particles (measured in line)</td><td>Immunoglobulins, CRP, HbA1c, apo proteins</td><td>Lipaemia; antigen excess (hook)</td></tr>
      <tr><td>Nephelometry</td><td>Scattered light measured at an angle (e.g. 90°)</td><td>Specific proteins, free light chains</td><td>As above; more sensitive at low concentrations</td></tr>
      <tr><td>Atomic absorption / ICP-MS</td><td>Absorption by ground-state atoms / ionisation in argon plasma and mass separation</td><td>Lead, trace elements</td><td>Cost; contamination</td></tr>
      <tr><td>Electrophoresis</td><td>Migration of charged molecules in an electric field (agarose, capillary)</td><td>Serum proteins, Hb variants, isoenzymes, lipoproteins</td><td>Semi-quantitative</td></tr>
      <tr><td>Chromatography (HPLC, GC)</td><td>Partition between mobile and stationary phases</td><td>HbA1c, catecholamines, drugs</td><td>Slow; skilled operation</td></tr>
      <tr><td>Mass spectrometry</td><td>Separation of ions by mass-to-charge ratio; tandem MS for specificity</td><td>Steroids, newborn screening, drugs, vitamin D, proteomics, MALDI-TOF in microbiology</td><td>Matrix effects; cost</td></tr>
      <tr><td>Potentiometry (ISE)</td><td>Nernst equation</td><td>Na, K, Cl, Ca, pH, pCO₂</td><td>Electrode fouling, protein effects</td></tr>
      <tr><td>Amperometry</td><td>Current from oxidation/reduction at an electrode</td><td>pO₂ (Clark electrode), glucose meters</td><td>Electrode ageing</td></tr>
    </table></div>
    <p>An essay answer should briefly explain one example of each and the way the laboratory checks each technique (calibration, linearity, wavelength accuracy, stray light checks).</p>
  `,
  tip: "Write out the Beer–Lambert law and the Nernst equation — formulas earn easy marks.",
  sources: ["C2", "C1", "C10"]
}
);
