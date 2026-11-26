/* Clinical Chemistry — part 8: endocrinology */
window.QBANK.push(
{
  id: "cc87", domain: "chem-endo",
  q: "Discuss the laboratory investigation of growth hormone excess (acromegaly) and growth hormone deficiency.",
  tags: ["growth hormone", "IGF-1", "acromegaly", "GH deficiency"],
  keypoints: ["pulsatile GH secretion random GH unhelpful", "IGF-1 integrated marker", "age and sex specific IGF-1 reference ranges", "OGTT GH suppression below 1 microgram per litre", "lower cut-off 0.4 with sensitive assays", "pituitary MRI", "assess other pituitary hormones", "monitor treatment with IGF-1 and GH", "GH deficiency requires stimulation test", "insulin tolerance test peak GH", "glucagon and macimorelin tests", "arginine GHRH", "IGF-1 low in malnutrition liver disease hypothyroidism", "IGF-1 normal does not exclude GH deficiency", "GH assay standardisation", "prolactin co-secretion"],
  answer: `
    <h4>Physiology for interpretation</h4>
    <p>GH is secreted in <strong>pulses</strong>, mostly during sleep, so a <strong>random GH is unhelpful</strong>. GH stimulates hepatic <strong>IGF-1</strong>, which circulates bound to IGFBP-3 and reflects 24-hour GH secretion — an <strong>integrated marker</strong>. IGF-1 must be interpreted against <strong>age- and sex-specific reference ranges</strong> (it peaks in puberty and falls with age).</p>
    <h4>Acromegaly (GH excess)</h4>
    <ol>
      <li><strong>Screen with IGF-1</strong>: raised for age.</li>
      <li><strong>Confirm with the OGTT</strong>: 75 g glucose, GH measured at 0, 30, 60, 90, 120 min. Failure of GH to <strong>suppress below 1 µg/L</strong> confirms acromegaly; with modern sensitive assays a <strong>lower cut-off of 0.4 µg/L</strong> is used. Diabetes, liver and renal failure, anorexia and adolescence can cause failure to suppress.</li>
      <li><strong>Pituitary MRI</strong>; if no adenoma, look for ectopic GHRH secretion.</li>
      <li><strong>Assess the other pituitary hormones</strong> (prolactin co-secretion in ~30%, hypopituitarism from mass effect) and complications (glucose, lipids, colon screening, echocardiogram).</li>
      <li><strong>Monitor treatment</strong> (surgery, somatostatin analogues, pegvisomant) with <strong>IGF-1 and GH</strong> — note pegvisomant blocks the receptor, so only IGF-1 is useful (GH rises).</li>
    </ol>
    <h4>GH deficiency</h4>
    <ul>
      <li>Children: short stature with reduced growth velocity, delayed bone age; adults: reduced lean mass, increased fat, poor quality of life, usually with other pituitary deficits.</li>
      <li><strong>IGF-1 is low in malnutrition, liver disease, poorly controlled diabetes, hypothyroidism</strong> and with oral oestrogen, and a <strong>normal IGF-1 does not exclude GH deficiency</strong> (especially in adults) — so diagnosis needs a <strong>stimulation test</strong>.</li>
      <li>Tests: <strong>insulin tolerance test</strong> (reference; peak GH &lt;3 µg/L in adults defines severe deficiency, contraindicated in epilepsy and heart disease), <strong>glucagon stimulation</strong>, <strong>macimorelin</strong> (oral ghrelin agonist), <strong>arginine–GHRH</strong> (cut-offs depend on BMI). In children two tests are usually required, with sex-steroid priming near puberty.</li>
      <li>Patients with three or more other pituitary deficiencies and a low IGF-1 may not need dynamic testing.</li>
    </ul>
    <p>Laboratory caveat: <strong>GH and IGF-1 assays differ</strong> substantially (calibration to WHO 98/574 standard, binding protein interference), so cut-offs must be method-specific and patients monitored on the same assay.</p>
  `,
  tip: "Use IGF-1 to screen, OGTT to confirm excess, stimulation test to confirm deficiency — say why random GH is useless.",
  sources: ["C14", "C1"]
},
{
  id: "cc88", domain: "chem-endo",
  q: "Discuss maternal serum screening for fetal aneuploidy and neural tube defects, and the role of cell-free DNA screening.",
  tags: ["prenatal screening", "Down syndrome", "cfDNA", "multiples of the median"],
  keypoints: ["first trimester combined test", "nuchal translucency PAPP-A free beta-hCG", "second trimester quadruple test", "AFP uE3 hCG inhibin A", "Down syndrome low AFP low uE3 high hCG high inhibin", "trisomy 18 all low", "open neural tube defect high AFP", "multiples of the median", "correction for gestational age weight ethnicity diabetes", "accurate dating by ultrasound", "risk cut-off 1 in 150 to 1 in 250", "screening not diagnostic", "cell-free DNA high detection rate", "confirm with amniocentesis or CVS", "false positives confined placental mosaicism", "fetal fraction"],
  answer: `
    <h4>Principle</h4>
    <p>Maternal serum markers are converted to <strong>multiples of the median (MoM)</strong> for the gestational age, <strong>corrected for maternal weight, ethnicity, diabetes, smoking, IVF and twins</strong>. The MoMs modify the age-related prior risk to give an individual risk, compared with a <strong>cut-off (typically 1 in 150 to 1 in 250)</strong>. <strong>Accurate dating by ultrasound</strong> (crown–rump length) is essential — wrong dates are the commonest cause of false results. Screening is <strong>not diagnostic</strong>.</p>
    <h4>Tests</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Timing</th><th>Markers</th><th>Down syndrome detection (5% screen-positive)</th></tr>
      <tr><td><strong>First-trimester combined test</strong></td><td>11–13⁺⁶ weeks</td><td><strong>Nuchal translucency, PAPP-A, free β-hCG</strong> + age</td><td>~85–90%</td></tr>
      <tr><td><strong>Second-trimester quadruple test</strong></td><td>15–20 weeks</td><td><strong>AFP, unconjugated oestriol (uE3), hCG, inhibin A</strong></td><td>~80%</td></tr>
      <tr><td>Integrated / sequential</td><td>Both trimesters</td><td>All of the above</td><td>~90–95%</td></tr>
      <tr><td><strong>Cell-free DNA</strong></td><td>From 10 weeks</td><td>Sequencing of placental DNA in maternal plasma</td><td><strong>&gt;99%</strong>, false-positive rate &lt;0.1%</td></tr>
    </table></div>
    <h4>Marker patterns</h4>
    <div class="table-wrap"><table>
      <tr><th>Condition</th><th>AFP</th><th>uE3</th><th>hCG</th><th>Inhibin A</th><th>PAPP-A</th></tr>
      <tr><td><strong>Trisomy 21</strong></td><td>↓</td><td>↓</td><td><strong>↑</strong></td><td><strong>↑</strong></td><td>↓</td></tr>
      <tr><td><strong>Trisomy 18</strong></td><td>↓</td><td>↓</td><td>↓</td><td>N</td><td>↓↓ — <strong>all low</strong></td></tr>
      <tr><td><strong>Open neural tube defect</strong></td><td><strong>↑↑</strong> (&gt;2.0–2.5 MoM)</td><td>N</td><td>N</td><td>N</td><td>—</td></tr>
    </table></div>
    <p>High AFP also occurs with abdominal wall defects, fetal death, twins and wrong dates; detailed ultrasound now largely replaces AFP for neural tube defect screening. Low PAPP-A and abnormal markers also predict pre-eclampsia and growth restriction.</p>
    <h4>Cell-free DNA screening</h4>
    <ul>
      <li>Very high detection rate for trisomies 21, 18, 13 and sex chromosome aneuploidy.</li>
      <li>Requires adequate <strong>fetal fraction</strong> (≥4%) — low in obesity and early gestation, causing "no-call" results (which themselves carry raised aneuploidy risk).</li>
      <li><strong>False positives</strong> from <strong>confined placental mosaicism</strong>, vanishing twin, maternal mosaicism or maternal malignancy — so every positive must be <strong>confirmed by amniocentesis or chorionic villus sampling</strong> with karyotype or microarray.</li>
      <li>Cost limits access in the Philippines, where it is mostly available privately; ultrasound plus serum screening remain important.</li>
    </ul>
  `,
  tip: "Give the Down syndrome pattern (AFP↓ uE3↓ hCG↑ inhibin↑) and insist cfDNA positives need diagnostic confirmation.",
  sources: ["C1", "C3"]
},
{
  id: "cc89", domain: "chem-endo",
  q: "Discuss the laboratory investigation of male hypogonadism and of thyroid nodules/thyroid cancer markers.",
  tags: ["testosterone", "hypogonadism", "thyroglobulin", "calcitonin"],
  keypoints: ["morning fasting testosterone 07:00–11:00", "repeat low result", "SHBG and calculated free testosterone", "primary hypogonadism high LH FSH", "secondary hypogonadism low or normal LH FSH", "Klinefelter karyotype 47 XXY", "prolactin iron studies pituitary MRI", "obesity diabetes opioids lower testosterone", "semen analysis for fertility", "thyroglobulin as tumour marker after thyroidectomy", "anti-thyroglobulin antibodies interfere", "measure Tg antibodies with every Tg", "stimulated thyroglobulin", "calcitonin for medullary thyroid carcinoma", "CEA and RET mutation", "TSH and ultrasound first for nodules"],
  answer: `
    <h4>Male hypogonadism</h4>
    <ol>
      <li><strong>Morning fasting total testosterone (07:00–11:00)</strong> — levels are highest in the morning and fall after glucose intake; <strong>repeat a low result</strong> before diagnosis.</li>
      <li>Measure <strong>SHBG and calculate free testosterone</strong> when SHBG is abnormal (raised in ageing, hyperthyroidism, liver disease, HIV; lowered in obesity, diabetes, hypothyroidism, nephrotic syndrome).</li>
      <li><strong>LH and FSH</strong> separate the level:
        <ul>
          <li><strong>Primary (testicular) hypogonadism — high LH and FSH</strong>: <strong>Klinefelter syndrome (karyotype 47,XXY)</strong>, orchitis (mumps), chemotherapy or radiation, trauma, cryptorchidism.</li>
          <li><strong>Secondary (hypothalamic–pituitary) — low or inappropriately normal LH and FSH</strong>: check <strong>prolactin</strong>, <strong>iron studies</strong> (haemochromatosis), other pituitary hormones, and <strong>pituitary MRI</strong> if testosterone is very low or there are mass symptoms; Kallmann syndrome (anosmia).</li>
        </ul>
      </li>
      <li>Functional causes: <strong>obesity, diabetes, opioids</strong>, glucocorticoids, anabolic steroid abuse, acute illness — treat the cause before testosterone.</li>
      <li><strong>Semen analysis</strong> if fertility is a concern (exogenous testosterone suppresses spermatogenesis).</li>
    </ol>
    <p>Assay note: testosterone immunoassays are acceptable at male concentrations; LC-MS/MS (CDC-standardised) is preferred for borderline values.</p>
    <h4>Thyroid nodules and cancer markers</h4>
    <ul>
      <li><strong>TSH and ultrasound first</strong> for any nodule; a low TSH prompts a radionuclide scan (hot nodules are rarely malignant). Fine-needle aspiration cytology (Bethesda system) decides management. Serum thyroglobulin has <strong>no role in diagnosing</strong> a nodule.</li>
      <li><strong>Thyroglobulin as a tumour marker after total thyroidectomy</strong> and radioiodine for differentiated (papillary, follicular) cancer: it should become undetectable; a rising Tg indicates recurrence. <strong>Stimulated thyroglobulin</strong> (after recombinant TSH) increases sensitivity, though highly sensitive Tg assays have reduced its need.</li>
      <li><strong>Anti-thyroglobulin antibodies interfere</strong> (falsely low Tg in immunometric assays) — present in ~25% of patients, so <strong>Tg antibodies must be measured with every Tg</strong>; rising antibody titres themselves can signal recurrence. LC-MS/MS Tg assays avoid this interference.</li>
      <li><strong>Calcitonin for medullary thyroid carcinoma</strong> (C-cell tumour): diagnosis and follow-up, with <strong>CEA</strong>; calcitonin doubling time predicts prognosis. Screen for <strong><em>RET</em> mutation</strong> (MEN2) in all patients and their families, and exclude phaeochromocytoma before surgery.</li>
    </ul>
  `,
  tip: "Two key traps: testosterone must be a morning fasting repeat sample, and Tg is useless without Tg antibodies.",
  sources: ["C14", "C1"]
},
{
  id: "cc90", domain: "chem-endo",
  q: "Discuss the investigation of polyuria: diabetes insipidus versus primary polydipsia, including osmolality, the water deprivation test and copeptin.",
  tags: ["diabetes insipidus", "AVP deficiency", "copeptin", "water deprivation"],
  keypoints: ["polyuria above 3 litres per day", "exclude hyperglycaemia hypercalcaemia hypokalaemia", "renamed arginine vasopressin deficiency and resistance", "plasma and urine osmolality", "water deprivation test", "urine osmolality fails to concentrate", "desmopressin response separates central from nephrogenic", "central DI urine concentrates after desmopressin", "nephrogenic DI no response", "primary polydipsia concentrates with deprivation", "copeptin stable surrogate of vasopressin", "baseline copeptin above 21 pmol/L nephrogenic", "hypertonic saline stimulated copeptin", "arginine stimulated copeptin", "lithium nephrogenic DI", "safety stop if weight loss above 3 percent or sodium above 145"],
  answer: `
    <h4>First steps</h4>
    <p>Confirm <strong>polyuria (&gt;3 L/day</strong> in adults, or &gt;40–50 mL/kg/day) and distinguish it from frequency. Exclude solute diuresis and common causes: <strong>hyperglycaemia, hypercalcaemia, hypokalaemia</strong>, renal disease, diuretics. Measure paired <strong>plasma and urine osmolality</strong> and sodium.</p>
    <p>Diabetes insipidus has been <strong>renamed arginine vasopressin deficiency</strong> (central) and <strong>arginine vasopressin resistance</strong> (nephrogenic).</p>
    <div class="table-wrap"><table>
      <tr><th></th><th>AVP deficiency (central DI)</th><th>AVP resistance (nephrogenic DI)</th><th>Primary polydipsia</th></tr>
      <tr><td>Causes</td><td>Pituitary surgery, trauma, tumours, infiltration (histiocytosis, sarcoid), idiopathic</td><td><strong>Lithium</strong>, hypercalcaemia, hypokalaemia, genetic (AVPR2, AQP2)</td><td>Psychiatric illness, habit, hypothalamic thirst disorder</td></tr>
      <tr><td>Baseline plasma sodium</td><td>High–normal</td><td>High–normal</td><td>Low–normal</td></tr>
      <tr><td><strong>Water deprivation</strong></td><td><strong>Urine fails to concentrate</strong> (&lt;300 mOsm/kg), plasma osmolality rises</td><td>Fails to concentrate</td><td><strong>Concentrates</strong> (often &gt;600 mOsm/kg, may be blunted by washout)</td></tr>
      <tr><td><strong>After desmopressin</strong></td><td><strong>Urine concentrates</strong> (&gt;50% rise)</td><td><strong>No response</strong></td><td>Little further rise</td></tr>
      <tr><td><strong>Copeptin</strong></td><td>Low stimulated copeptin</td><td><strong>Baseline copeptin &gt;21 pmol/L</strong> (without deprivation)</td><td>Stimulated copeptin rises appropriately</td></tr>
    </table></div>
    <h4>Water deprivation test</h4>
    <p>Fluids withheld for up to 8 hours with hourly weight, urine volume and osmolality and plasma sodium/osmolality; then desmopressin is given. <strong>Stop for safety if weight falls by &gt;3% or sodium rises above 145–150 mmol/L</strong>. Diagnostic accuracy is only ~70%, mainly because partial forms overlap and chronic polyuria washes out the medullary gradient.</p>
    <h4>Copeptin</h4>
    <p>Copeptin is the C-terminal part of pro-vasopressin, released in equimolar amounts — a <strong>stable surrogate of vasopressin</strong> (AVP itself is unstable and hard to measure). The <strong>hypertonic saline-stimulated copeptin test</strong> (target sodium ≥150 mmol/L; copeptin &gt;4.9 pmol/L excludes central DI) reaches ~97% accuracy, and the <strong>arginine-stimulated copeptin test</strong> is a simpler, safer alternative. These are replacing the water deprivation test in specialist centres.</p>
  `,
  tip: "Tabulate deprivation and desmopressin responses, then add copeptin as the modern test.",
  sources: ["C14", "C1"]
}
);
