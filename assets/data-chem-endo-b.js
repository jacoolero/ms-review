/* Clinical Chemistry — endocrinology, part B: pituitary, thyroid, adrenal, calcium and bone, gonadal, NET and MEN. */
window.QBANK.push(
{
  id: "cc205", domain: "chem-endo", star: true,
  q: "Describe the hypothalamic–pituitary axes and outline the laboratory assessment of suspected hypopituitarism.",
  tags: ["pituitary", "hypopituitarism", "dynamic testing"],
  keypoints: ["hypophyseal portal", "ACTH", "TSH", "FT4", "LH", "FSH", "IGF-1", "prolactin", "insulin tolerance test", "cosyntropin", "glucagon", "macimorelin", "stalk effect", "Sheehan", "posterior pituitary"],
  answer: `
    <h4>Organisation of the axes</h4>
    <p>The hypothalamus delivers releasing and inhibiting factors through the <strong>hypophyseal portal</strong> circulation to the anterior pituitary, which secretes trophic hormones acting on peripheral glands. Short and long feedback loops keep each axis stable, so a peripheral hormone result must always be read together with its trophic hormone.</p>
    <div class="table-wrap"><table>
      <tr><th>Axis</th><th>Hypothalamic factor</th><th>Pituitary hormone</th><th>Peripheral end-point</th><th>First-line tests</th></tr>
      <tr><td>Adrenal</td><td>CRH, AVP</td><td>ACTH</td><td>Cortisol</td><td>08:00 cortisol, ACTH</td></tr>
      <tr><td>Thyroid</td><td>TRH</td><td>TSH</td><td>FT4, FT3</td><td>TSH, FT4</td></tr>
      <tr><td>Gonadal</td><td>GnRH</td><td>LH, FSH</td><td>Oestradiol, testosterone</td><td>LH, FSH plus sex steroid</td></tr>
      <tr><td>Growth</td><td>GHRH, somatostatin</td><td>GH</td><td>IGF-1</td><td>IGF-1</td></tr>
      <tr><td>Lactotroph</td><td>Dopamine (inhibitory)</td><td>Prolactin</td><td>—</td><td>Prolactin</td></tr>
    </table></div>
    <h4>When to suspect hypopituitarism</h4>
    <p>Consider it with pituitary mass effects (headache, bitemporal hemianopia), <strong>Sheehan</strong> syndrome after postpartum haemorrhage, apoplexy, cranial irradiation, traumatic brain injury, infiltrative disease, immunotherapy and an empty sella. Hormone loss usually follows a sequence: GH, then gonadotropins, then <strong>TSH</strong>, then <strong>ACTH</strong>. The <strong>posterior pituitary</strong> is affected separately, causing arginine vasopressin deficiency.</p>
    <h4>Biochemical strategy</h4>
    <ul>
      <li>Basal morning cortisol and ACTH, FT4 and TSH, LH and FSH with oestradiol or testosterone, IGF-1 and prolactin.</li>
      <li><strong>Insulin tolerance test</strong> is the reference for GH and ACTH reserve; <strong>glucagon</strong> or oral <strong>macimorelin</strong> are alternatives for GH.</li>
      <li><strong>Cosyntropin</strong> tests the adrenal response but not pituitary reserve; it may be normal in recent secondary adrenal insufficiency.</li>
      <li>GnRH stimulation and combined pituitary testing are used mainly in children and in specialist centres.</li>
    </ul>
    <h4>Interpretation</h4>
    <p>The signature is a low target hormone with a low or inappropriately normal trophic hormone. A mildly raised prolactin suggests a <strong>stalk effect</strong> rather than a prolactinoma. Exclude non-thyroidal illness, glucocorticoids, opioids and assay interference before labelling a deficit, and arrange pituitary MRI.</p>
  `,
  tip: "Build the answer around the five axes, then show how a low peripheral hormone with a low trophic hormone localises the lesion.",
  sources: ["C1", "C14"]
},
{
  id: "cc206", domain: "chem-endo",
  q: "Discuss thyroid autoantibodies and their clinical and laboratory use in autoimmune thyroid disease.",
  tags: ["thyroid antibodies", "Hashimoto", "Graves", "TRAb"],
  keypoints: ["anti-TPO", "anti-thyroglobulin", "TSH receptor", "Graves", "Hashimoto", "binding assay", "bioassay", "neonatal Graves", "thyroglobulin", "interference", "postpartum thyroiditis", "subclinical hypothyroidism"],
  answer: `
    <h4>Antibodies and their targets</h4>
    <p><strong>Anti-TPO</strong> antibodies bind thyroid peroxidase and fix complement; <strong>anti-thyroglobulin</strong> antibodies bind thyroglobulin. <strong>TSH receptor</strong> antibodies are heterogeneous: stimulating antibodies cause Graves disease, blocking antibodies cause autoimmune hypothyroidism, and neutral antibodies have no clear effect.</p>
    <div class="table-wrap"><table>
      <tr><th>Condition</th><th>Characteristic antibody</th><th>Practical use</th></tr>
      <tr><td><strong>Hashimoto</strong> thyroiditis</td><td>Anti-TPO, often anti-thyroglobulin</td><td>Supports autoimmune hypothyroidism; predicts progression in <strong>subclinical hypothyroidism</strong></td></tr>
      <tr><td><strong>Graves</strong> disease</td><td>TSH receptor stimulating antibody</td><td>Confirms cause of thyrotoxicosis, especially in pregnancy and nodular disease</td></tr>
      <tr><td>Postpartum thyroiditis</td><td>Anti-TPO</td><td>Identifies women at risk of the destructive postpartum phase</td></tr>
      <tr><td>Drug-induced thyroiditis</td><td>Anti-TPO</td><td>Risk marker before interferon or immune checkpoint therapy</td></tr>
    </table></div>
    <h4>Methods</h4>
    <p>Anti-TPO and anti-thyroglobulin are usually measured by immunoassay. TSH receptor antibodies are measured by a <strong>binding assay</strong> (inhibition of labelled TSH binding, reported as TBII) or by a cell-based <strong>bioassay</strong> that detects cAMP generation and therefore biological activity. Bioassays are more informative in pregnancy and in discordant cases but are less widely available.</p>
    <h4>Clinical value and traps</h4>
    <ul>
      <li>Antibodies support a diagnosis but are not diagnostic alone; titres do not grade severity or predict relapse reliably.</li>
      <li>Anti-Tg interferes with thyroglobulin measurement, so it must be measured with every thyroglobulin tumour marker.</li>
      <li>Maternal TSH receptor antibodies cross the placenta and can cause <strong>neonatal Graves</strong> or, if blocking, transient hypothyroidism.</li>
      <li>Heterophile antibodies, rheumatoid factor and biotin can produce false results through assay interference; repeat on another platform when the picture is discordant.</li>
      <li>Anti-TPO is common in healthy people, especially older women, so interpret it against TSH and FT4.</li>
    </ul>
    <p>In the Philippines, autoimmune thyroid disease is the commonest cause of spontaneous hypothyroidism, while iodine deficiency remains relevant in some communities.</p>
  `,
  tip: "Separate the antibodies by disease and by method, and mention the thyroglobulin interference rule.",
  sources: ["C1", "C14", "C3"]
},
{
  id: "cc207", domain: "chem-endo", star: true,
  q: "Explain how thyroid function tests should be interpreted in pregnancy and in the neonatal period.",
  tags: ["pregnancy", "thyroid", "neonatal screening", "hCG"],
  keypoints: ["thyroxine-binding globulin", "hCG", "trimester-specific", "total T4", "free T4", "iodine", "postpartum thyroiditis", "TRAb", "congenital hypothyroidism", "newborn screening", "venous confirmatory", "hyperemesis gravidarum"],
  answer: `
    <h4>Physiological changes</h4>
    <p>Oestrogen raises <strong>thyroxine-binding globulin</strong>, so total T4 and T3 rise markedly and are unhelpful in pregnancy. <strong>hCG</strong> shares a subunit with TSH and stimulates the TSH receptor, lowering TSH in the first trimester. Iodine requirement increases because of renal loss and fetal transfer, and the thyroid enlarges slightly.</p>
    <div class="table-wrap"><table>
      <tr><th>Trimester</th><th>Main change</th><th>Laboratory effect</th></tr>
      <tr><td>First</td><td>Peak hCG, rising binding globulin</td><td>TSH often low; total T4 high; free T4 assay-dependent</td></tr>
      <tr><td>Second</td><td>Placental growth, stable hCG</td><td>TSH returns towards non-pregnant values</td></tr>
      <tr><td>Third</td><td>Further binding globulin rise, iodine demand</td><td>Total T4 highest; use trimester-specific free T4 ranges</td></tr>
    </table></div>
    <h4>Interpretation</h4>
    <ul>
      <li>Use <strong>trimester-specific</strong> reference intervals for TSH and free T4; population ranges differ with iodine status and assay.</li>
      <li>Do not diagnose thyroid disease from <strong>total T4</strong> or total T3.</li>
      <li>Analog <strong>free T4</strong> immunoassays can drift when albumin and binding proteins change; equilibrium dialysis or LC-MS/MS is useful when TSH and free T4 disagree.</li>
      <li>Transient thyrotoxicosis of <strong>hyperemesis gravidarum</strong> is hCG-driven and usually lacks goitre or eye signs; TRAb separates it from Graves disease.</li>
      <li>Treat overt hypothyroidism, and monitor FT4 rather than TSH once replacement has begun.</li>
    </ul>
    <h4>Postpartum thyroiditis</h4>
    <p>Destructive autoimmune thyroiditis causes a thyrotoxic phase followed by hypothyroidism, typically in the first postpartum months. Anti-TPO identifies risk. Differentiate from Graves disease by TRAb and radioiodine uptake, which is low in thyroiditis and contraindicated during lactation.</p>
    <h4>Neonatal thyroid testing</h4>
    <p><strong>Congenital hypothyroidism</strong> is detected by <strong>newborn screening</strong> using TSH on dried blood spots under RA 9288. Preterm, sick or sampled-too-early infants may give false results, so every positive screen needs a <strong>venous confirmatory</strong> FT4 and TSH. Maternal TRAb predicts transient neonatal Graves or blocking antibody-mediated hypothyroidism. Early treatment prevents irreversible neurodevelopmental loss.</p>
  `,
  tip: "State that total thyroid hormones are unhelpful in pregnancy and that every newborn screen positive needs venous confirmation.",
  sources: ["C14", "C1", "C3"]
},
{
  id: "cc208", domain: "chem-endo",
  q: "Discuss drug-induced thyroid dysfunction and the laboratory distinction from assay interference.",
  tags: ["amiodarone", "lithium", "checkpoint inhibitors", "biotin"],
  keypoints: ["iodine load", "amiodarone", "deiodinase", "type 1", "type 2", "lithium", "immune checkpoint", "thyroiditis", "biotin", "interference", "TSH", "FT4"],
  answer: `
    <h4>Mechanisms</h4>
    <p>Drugs disturb thyroid tests by adding <strong>iodine load</strong>, blocking hormone synthesis or release, triggering autoimmunity, altering binding proteins or interfering with the assay itself. The commonest offenders are amiodarone, lithium, interferon, immune checkpoint inhibitors and biotin-containing supplements.</p>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Mechanism</th><th>Typical laboratory pattern</th></tr>
      <tr><td><strong>Amiodarone</strong></td><td>High iodine content; inhibits <strong>deiodinase</strong>; can cause destructive thyroiditis</td><td>Transient TSH rise, then hypo- or hyperthyroidism</td></tr>
      <tr><td><strong>Lithium</strong></td><td>Inhibits hormone release; goitre</td><td>Raised TSH, low FT4; hypercalcaemia and nephrogenic diabetes insipidus</td></tr>
      <tr><td>Interferon alfa</td><td>Autoimmune <strong>thyroiditis</strong></td><td>Anti-TPO positive, variable dysfunction</td></tr>
      <tr><td><strong>Immune checkpoint</strong> inhibitors</td><td>T-cell-mediated thyroiditis</td><td>Painless thyrotoxicosis followed by hypothyroidism</td></tr>
      <tr><td><strong>Biotin</strong></td><td>Streptavidin–biotin assay interference</td><td>Falsely low TSH with falsely high FT4 and FT3</td></tr>
    </table></div>
    <h4>Amiodarone</h4>
    <p><strong>Type 1</strong> amiodarone-induced thyrotoxicosis is iodine-driven with a goitre and increased vascularity; <strong>type 2</strong> is a destructive thyroiditis with low uptake and little vascularity. Colour-flow Doppler, radioiodine uptake and sometimes IL-6 help; the distinction matters because management differs. Amiodarone also inhibits 5′-deiodinase, so FT4 may stay high while FT3 falls during the first months. Patients on long-term amiodarone need baseline and periodic TSH and FT4, because thyroid dysfunction can evolve over many months.</p>
    <h4>Recognition and resolution</h4>
    <ul>
      <li>Take a full drug and supplement history, including over-the-counter <strong>biotin</strong>.</li>
      <li>With biotin, stop the supplement and repeat on the same platform after washout, or use a biotin-insensitive method.</li>
      <li>Check anti-TPO and TRAb to separate autoimmune disease from drug effect.</li>
      <li>Do not adjust thyroid replacement on a single discordant result; confirm with a second method.</li>
      <li>Monitor TSH and FT4 before and during high-risk therapy, and remember that non-thyroidal illness also distorts the pattern.</li>
    </ul>
  `,
  tip: "Amiodarone type 1 versus type 2 is the discriminator examiners want; finish with biotin as assay interference.",
  sources: ["C14", "C1", "C2"]
},
{
  id: "cc209", domain: "chem-endo",
  q: "Describe the laboratory assessment of thyroid storm and myxoedema coma.",
  tags: ["thyroid storm", "myxoedema coma", "critical care"],
  keypoints: ["clinical diagnosis", "Burch–Wartofsky", "TSH", "FT4", "FT3", "non-thyroidal illness", "CK", "hyponatraemia", "hypoglycaemia", "cortisol", "precipitant", "pericardial effusion"],
  answer: `
    <h4>Thyroid storm</h4>
    <p>Thyroid storm is a <strong>clinical diagnosis</strong> made in a thyrotoxic patient with fever, marked tachycardia, agitation or delirium, vomiting, diarrhoea, hepatic dysfunction or heart failure. The <strong>Burch–Wartofsky</strong> score quantifies the suspicion, but treatment must not wait for laboratory confirmation. Look for a <strong>precipitant</strong>: infection, surgery, trauma, iodine contrast, or abrupt withdrawal of antithyroid drugs.</p>
    <p>Typical results are a suppressed TSH with high FT4 and FT3, but FT3 can be normal in T4 toxicosis and the pattern may be blunted by <strong>non-thyroidal illness</strong>. Supportive abnormalities include raised transaminases, bilirubin, <strong>CK</strong>, lactate, calcium and white cell count, plus atrial fibrillation on ECG.</p>
    <h4>Myxoedema coma</h4>
    <p>This is decompensated hypothyroidism with hypothermia, bradycardia, hypotension, somnolence or coma, and hypoventilation. Laboratory clues are a raised TSH with low FT4, <strong>hyponatraemia</strong>, <strong>hypoglycaemia</strong>, raised CK, hypercapnia and a <strong>pericardial effusion</strong>. Search for sepsis, stroke, drugs and cold exposure.</p>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Thyroid storm</th><th>Myxoedema coma</th></tr>
      <tr><td>TSH</td><td>Suppressed</td><td>Raised</td></tr>
      <tr><td>FT4 / FT3</td><td>High / high or normal</td><td>Low / low</td></tr>
      <tr><td>Sodium</td><td>Normal or high</td><td>Low</td></tr>
      <tr><td>Glucose</td><td>Normal or high</td><td>Low</td></tr>
      <tr><td>CK</td><td>Mildly raised</td><td>Often markedly raised</td></tr>
      <tr><td>Cortisol</td><td>Check for coexisting adrenal disease</td><td>Check before thyroid hormone</td></tr>
    </table></div>
    <h4>Laboratory pitfalls</h4>
    <ul>
      <li>Critical illness lowers TSH and T4 without thyroid disease, so interpret against the pretest probability.</li>
      <li>Check <strong>cortisol</strong> early: untreated adrenal insufficiency can be unmasked by thyroid hormone and is fatal.</li>
      <li>Exclude assay interference (biotin, heterophile antibodies) if the thyroid result clashes with the clinical state.</li>
      <li>Monitor electrolytes, glucose, renal and liver function, coagulation and cardiac rhythm repeatedly.</li>
    </ul>
  `,
  tip: "Emphasise that both are clinical diagnoses, then contrast the TSH, sodium, glucose and CK patterns in a table.",
  sources: ["C14", "C1", "C2"]
},
{
  id: "cc210", domain: "chem-endo",
  q: "Describe adrenal steroidogenesis and explain how cortisol is measured and interpreted, including the role of binding proteins.",
  tags: ["steroidogenesis", "cortisol", "CBG", "salivary cortisol"],
  keypoints: ["zona glomerulosa", "zona fasciculata", "zona reticularis", "21-hydroxylase", "11β-hydroxylase", "cortisol-binding globulin", "free cortisol", "salivary cortisol", "urine free cortisol", "LC-MS/MS", "cross-reactivity", "diurnal"],
  answer: `
    <h4>Steroidogenesis</h4>
    <p>Cholesterol is converted to pregnenolone by CYP11A1 after StAR-mediated transport. The <strong>zona glomerulosa</strong> expresses aldosterone synthase and produces aldosterone; the <strong>zona fasciculata</strong> uses <strong>21-hydroxylase</strong> and <strong>11β-hydroxylase</strong> to make cortisol; the <strong>zona reticularis</strong> makes DHEA, DHEAS and androstenedione.</p>
    <div class="table-wrap"><table>
      <tr><th>Zone</th><th>Main product</th><th>Key enzyme</th><th>Regulation</th></tr>
      <tr><td>Glomerulosa</td><td>Aldosterone</td><td>Aldosterone synthase</td><td>Angiotensin II, potassium</td></tr>
      <tr><td>Fasciculata</td><td>Cortisol</td><td>21-hydroxylase, 11β-hydroxylase</td><td>ACTH</td></tr>
      <tr><td>Reticularis</td><td>DHEAS, androgens</td><td>17,20-lyase</td><td>ACTH</td></tr>
    </table></div>
    <h4>Transport and the free hormone</h4>
    <p>Most cortisol is bound to <strong>cortisol-binding globulin</strong>, with a smaller albumin-bound fraction; only the free fraction is biologically active. Binding globulin rises with oestrogen and falls in liver disease, nephrotic syndrome and critical illness, where neutrophil elastase cleaves it. Total cortisol therefore overestimates exposure when binding globulin is low and underestimates it when binding globulin is high.</p>
    <h4>Measurement</h4>
    <ul>
      <li>Serum total cortisol by immunoassay is adequate for many screening decisions but shows <strong>cross-reactivity</strong> with prednisolone and other synthetic steroids.</li>
      <li><strong>LC-MS/MS</strong> improves specificity and is preferred when low concentrations or structural analogues matter.</li>
      <li><strong>Salivary cortisol</strong> reflects the free fraction and is useful for late-night sampling and for children.</li>
      <li><strong>Urine free cortisol</strong> integrates secretion over 24 hours but depends on complete collection and renal function.</li>
      <li>Free cortisol index and calculated free cortisol adjust for binding globulin when direct free measurement is unavailable.</li>
    </ul>
    <h4>Interpretation</h4>
    <p>Cortisol is <strong>diurnal</strong>, peaking in the early morning and nadir late at night; sampling time, sleep pattern, shift work and acute illness all matter. Biotin and heterophile antibodies can also distort immunoassays. Always state the collection time and the binding-protein context when reporting a cortisol result.</p>
  `,
  tip: "Explain the free hormone concept before listing assays — it is the intellectual core of the question.",
  sources: ["C1", "C14"]
},
{
  id: "cc211", domain: "chem-endo", star: true,
  q: "Outline the biochemical work-up and follow-up of an adrenal incidentaloma.",
  tags: ["adrenal incidentaloma", "mild autonomous cortisol secretion", "metanephrines"],
  keypoints: ["imaging characteristics", "dexamethasone suppression", "metanephrines", "aldosterone-to-renin ratio", "DHEAS", "17-hydroxyprogesterone", "mild autonomous cortisol secretion", "pheochromocytoma", "biopsy", "follow-up"],
  answer: `
    <h4>Initial assessment</h4>
    <p>An adrenal incidentaloma is a mass found on imaging performed for another reason. First review the <strong>imaging characteristics</strong> — size, Hounsfield units, lipid content, washout and growth — and the history of malignancy. Lipid-rich, homogeneous, small lesions are usually benign adenomas; irregular, heterogeneous or rapidly growing masses need surgical evaluation.</p>
    <h4>Hormonal work-up</h4>
    <p>Every incidentaloma needs assessment for cortisol excess, catecholamine excess and, when hypertension or hypokalaemia is present, aldosterone excess.</p>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Purpose</th><th>Interpretation</th></tr>
      <tr><td>Overnight <strong>dexamethasone suppression</strong></td><td>Screen for cortisol excess</td><td>Failure to suppress suggests autonomous secretion</td></tr>
      <tr><td>Plasma free or urine fractionated <strong>metanephrines</strong></td><td>Exclude <strong>pheochromocytoma</strong></td><td>Marked elevation is highly suggestive; mild rises need repeat</td></tr>
      <tr><td><strong>Aldosterone-to-renin ratio</strong></td><td>Screen for primary aldosteronism</td><td>Correct potassium and interfering drugs first</td></tr>
      <tr><td><strong>DHEAS</strong>, testosterone or oestradiol</td><td>Detect androgen or oestrogen excess</td><td>Very high values suggest carcinoma</td></tr>
      <tr><td><strong>17-hydroxyprogesterone</strong></td><td>Exclude non-classical CAH</td><td>Raised in 21-hydroxylase deficiency</td></tr>
    </table></div>
    <h4>Mild autonomous cortisol secretion</h4>
    <p>Some patients fail suppression without the classic features of Cushing syndrome. This <strong>mild autonomous cortisol secretion</strong> is associated with hypertension, diabetes, dyslipidaemia and osteoporosis, so assess cardiovascular risk and bone health, and repeat testing when results are borderline.</p>
    <h4>Follow-up and safety</h4>
    <ul>
      <li>Repeat biochemistry if the first results are equivocal or the mass is indeterminate.</li>
      <li>Repeat imaging for lesions that are not clearly benign, and review growth over time.</li>
      <li>Do not perform <strong>biopsy</strong> until pheochromocytoma is excluded and metastasis is the question; biopsy of a pheochromocytoma can precipitate a crisis.</li>
      <li>Refer for surgery when the mass is large, imaging is suspicious, or hormone secretion is clinically significant.</li>
      <li>Document a plan in a multidisciplinary record so that follow-up is not lost.</li>
    </ul>
  `,
  tip: "Present the work-up as three questions: is it malignant, is it hormonally active, and does it need follow-up?",
  sources: ["C14", "C1"]
},
{
  id: "cc212", domain: "chem-endo", star: true,
  q: "Discuss the laboratory investigation of spontaneous hypoglycaemia in adults.",
  tags: ["hypoglycaemia", "insulinoma", "C-peptide", "critical sample"],
  keypoints: ["Whipple", "documented low glucose", "C-peptide", "insulin", "β-hydroxybutyrate", "free fatty acids", "sulfonylurea", "insulinoma", "factitious", "IGF-2", "adrenal insufficiency", "supervised fast"],
  answer: `
    <h4>Confirm the diagnosis</h4>
    <p>Use <strong>Whipple</strong> triad: symptoms consistent with hypoglycaemia, a <strong>documented low glucose</strong> at the time of symptoms, and resolution when glucose is corrected. Never diagnose from a low value alone, and never from a glucose meter in a critically ill patient. Separate fasting from postprandial episodes, because the differential differs. A glucose value obtained after treatment has begun cannot be interpreted, and a meter result should be confirmed in the laboratory. In a true fasting syndrome, the episode usually occurs after a prolonged interval without food.</p>
    <h4>The critical sample</h4>
    <p>Collect blood during the episode, before treatment: glucose, <strong>insulin</strong>, <strong>C-peptide</strong>, <strong>β-hydroxybutyrate</strong>, <strong>free fatty acids</strong>, cortisol, GH, lactate, ammonia, acylcarnitine profile, sulfonylurea screen and insulin antibodies. A <strong>supervised fast</strong> is used when no spontaneous sample is available; end the fast at the documented symptomatic threshold and at the planned duration.</p>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Insulin</th><th>C-peptide</th><th>Clue</th></tr>
      <tr><td><strong>Insulinoma</strong></td><td>High</td><td>High</td><td>Endogenous hyperinsulinism; β-hydroxybutyrate suppressed</td></tr>
      <tr><td>Exogenous insulin</td><td>High</td><td>Low</td><td><strong>Factitious</strong> or accidental; insulin antibodies may be present</td></tr>
      <tr><td>Sulfonylurea</td><td>High</td><td>High</td><td>Positive <strong>sulfonylurea</strong> screen</td></tr>
      <tr><td>IGF-2 tumour</td><td>Low</td><td>Low</td><td>Large tumour, low IGF-1, high IGF-2:IGF-1 ratio</td></tr>
      <tr><td><strong>Adrenal insufficiency</strong></td><td>Low</td><td>Low</td><td>Low cortisol, high ACTH, hyponatraemia</td></tr>
    </table></div>
    <h4>Other causes and pitfalls</h4>
    <ul>
      <li>Liver failure, sepsis, renal failure, malnutrition and alcohol reduce gluconeogenesis.</li>
      <li>Postprandial hypoglycaemia is often functional; investigate only if severe or recurrent.</li>
      <li>Delayed processing lets glucose fall in vitro, producing a spurious low result; use fluoride and analyse promptly.</li>
      <li>Insulin assay interference, anti-insulin antibodies and a missed sulfonylurea screen explain many confusing cases.</li>
      <li>In suspected insulinoma, localise with imaging only after biochemical confirmation.</li>
    </ul>
  `,
  tip: "The C-peptide split is the key: high insulin with high C-peptide is endogenous, with low C-peptide is exogenous.",
  sources: ["C1", "C2", "C14"]
},
{
  id: "cc213", domain: "chem-endo", star: true,
  q: "Explain calcium homeostasis and the laboratory approach to hypercalcaemia and hypocalcaemia, including PTH assay interpretation.",
  tags: ["PTH", "calcium", "FHH", "hypoparathyroidism"],
  keypoints: ["PTH", "FGF-23", "corrected calcium", "ionised calcium", "25-hydroxyvitamin D", "phosphate", "magnesium", "familial hypocalciuric hypercalcaemia", "PTHrP", "pseudohypoparathyroidism", "intraoperative PTH", "urine calcium"],
  answer: `
    <h4>Homeostasis</h4>
    <p><strong>PTH</strong> raises calcium by mobilising bone, increasing renal calcium reabsorption and stimulating 1α-hydroxylase to produce calcitriol, while promoting phosphate excretion. <strong>FGF-23</strong> from osteocytes lowers phosphate and calcitriol. Magnesium is required for PTH secretion and action, so hypomagnesaemia can cause functional hypoparathyroidism.</p>
    <h4>Measurement</h4>
    <ul>
      <li>Report <strong>corrected calcium</strong> with albumin, or measure <strong>ionised calcium</strong> when protein binding is abnormal.</li>
      <li>Measure <strong>PTH</strong>, <strong>phosphate</strong>, <strong>magnesium</strong>, <strong>25-hydroxyvitamin D</strong>, alkaline phosphatase, creatinine and albumin together.</li>
      <li>PTH is unstable in whole blood; collect EDTA plasma, keep it cold and separate promptly. Intraoperative PTH uses the same principle with rapid turnaround.</li>
      <li>Second- and third-generation assays differ in their detection of fragments; do not compare results across methods.</li>
    </ul>
    <div class="table-wrap"><table>
      <tr><th>Calcium</th><th>PTH</th><th>Typical diagnosis</th></tr>
      <tr><td>High</td><td>High or inappropriately normal</td><td>Primary hyperparathyroidism</td></tr>
      <tr><td>High</td><td>Low</td><td>Malignancy, vitamin D excess, granulomatous disease</td></tr>
      <tr><td>High</td><td>High with low urine calcium</td><td><strong>Familial hypocalciuric hypercalcaemia</strong></td></tr>
      <tr><td>Low</td><td>High</td><td>Vitamin D deficiency, CKD, malabsorption</td></tr>
      <tr><td>Low</td><td>Low</td><td>Hypoparathyroidism after neck surgery or autoimmune disease</td></tr>
      <tr><td>Low</td><td>High</td><td><strong>Pseudohypoparathyroidism</strong> (PTH resistance)</td></tr>
    </table></div>
    <h4>Clinical interpretation</h4>
    <p>In hypercalcaemia, a suppressed PTH points away from parathyroid disease; check <strong>PTHrP</strong>, vitamin D metabolites and myeloma studies. In suspected familial hypocalciuric hypercalcaemia, calculate the urine calcium-to-creatinine clearance ratio; a low value supports the diagnosis and avoids unnecessary parathyroid surgery. In hypocalcaemia, correct magnesium before concluding that PTH secretion is inadequate. In hypercalcaemia of uncertain cause, measure PTH before any vitamin D or bisphosphonate therapy, because treatment alters the pattern. Always interpret PTH against the simultaneously measured calcium, not against a reference range alone, and always read it with the clinical context.</p>
  `,
  tip: "Pair calcium with PTH in every row of the table — the pattern, not the isolated value, makes the diagnosis.",
  sources: ["C1", "C14", "C3"]
},
{
  id: "cc214", domain: "chem-endo",
  q: "Discuss the mechanisms and laboratory diagnosis of hypercalcaemia of malignancy.",
  tags: ["hypercalcaemia", "PTHrP", "malignancy", "myeloma"],
  keypoints: ["PTHrP", "local osteolysis", "1,25-dihydroxyvitamin D", "squamous cell", "myeloma", "lymphoma", "suppressed PTH", "alkaline phosphatase", "free light chains", "volume depletion"],
  answer: `
    <h4>Mechanisms</h4>
    <p>Hypercalcaemia of malignancy arises by four main routes: <strong>PTHrP</strong> secretion, <strong>local osteolysis</strong>, excess <strong>1,25-dihydroxyvitamin D</strong>, and rarely ectopic PTH. PTHrP is produced by <strong>squamous cell</strong> carcinomas of lung, head and neck, oesophagus and cervix, and by renal, bladder and ovarian tumours. Local osteolysis dominates in breast cancer and <strong>myeloma</strong>; 1,25-dihydroxyvitamin D excess occurs in <strong>lymphoma</strong>.</p>
    <div class="table-wrap"><table>
      <tr><th>Mechanism</th><th>Typical tumour</th><th>Key laboratory clue</th></tr>
      <tr><td>PTHrP</td><td>Squamous cell carcinoma</td><td>High PTHrP, low PTH, low phosphate</td></tr>
      <tr><td>Local osteolysis</td><td>Breast cancer, myeloma</td><td>Lytic lesions; myeloma markers positive</td></tr>
      <tr><td>1,25-dihydroxyvitamin D</td><td>Lymphoma</td><td>High calcitriol, low PTH</td></tr>
      <tr><td>Ectopic PTH</td><td>Rare carcinomas</td><td>High PTH with no parathyroid adenoma</td></tr>
    </table></div>
    <h4>Laboratory pattern</h4>
    <p>Calcium is high and <strong>PTH suppressed</strong>; phosphate is often low with PTHrP but may be normal in local osteolysis. <strong>Alkaline phosphatase</strong> reflects bone turnover, and renal function is often impaired by <strong>volume depletion</strong> and nephrocalcinosis. Check PTHrP, 25-hydroxyvitamin D, 1,25-dihydroxyvitamin D, serum protein electrophoresis, <strong>free light chains</strong> and a skeletal survey when myeloma is suspected. In PTHrP-mediated disease the <strong>suppressed PTH</strong> is the pivotal finding that separates it from primary hyperparathyroidism.</p>
    <h4>Clinical approach and pitfalls</h4>
    <ul>
      <li>Confirm true hypercalcaemia: correct for albumin or measure ionised calcium, and repeat before extensive testing.</li>
      <li>Exclude thiazides, vitamin D supplementation, immobilisation, granulomatous disease and hyperparathyroidism.</li>
      <li>Myeloma bone disease can cause pain and fractures with only modest calcium elevation; do not rely on calcium alone.</li>
      <li>PTHrP immunoassays are method-dependent and may be normal in local osteolysis.</li>
      <li>Treat dehydration and the underlying tumour; bisphosphonates are first-line for PTHrP-mediated disease, with denosumab used when renal function is poor.</li>
    </ul>
  `,
  tip: "Link each mechanism to a tumour type and one laboratory clue — that structure earns the marks.",
  sources: ["C1", "C14", "C3"]
},
{
  id: "cc215", domain: "chem-endo", star: true,
  q: "Discuss the laboratory and imaging assessment of osteoporosis and the use of bone turnover markers.",
  tags: ["osteoporosis", "DXA", "FRAX", "bone turnover markers"],
  keypoints: ["DXA", "T-score", "Z-score", "FRAX", "secondary causes", "25-hydroxyvitamin D", "PTH", "P1NP", "CTX", "fasting morning", "adherence", "vertebral imaging"],
  answer: `
    <h4>Diagnosis</h4>
    <p>Osteoporosis is defined by low bone mineral density or by a fragility fracture. <strong>DXA</strong> reports areal bone mineral density at the lumbar spine and hip; the <strong>T-score</strong> compares the patient with a young healthy reference and the <strong>Z-score</strong> with age-matched peers. A T-score at or below −2.5 defines osteoporosis in postmenopausal women and older men, while a Z-score well below the expected range in a young person prompts a search for secondary causes.</p>
    <h4>Fracture risk</h4>
    <p><strong>FRAX</strong> estimates 10-year probability of major osteoporotic and hip fracture, with or without bone mineral density, and is used with clinical judgement. It does not capture every risk factor, and it should not replace <strong>vertebral imaging</strong> when height loss or back pain suggests an unrecognised fracture. Bone density alone also underestimates risk in patients with a previous fragility fracture, glucocorticoid exposure or a high fall risk.</p>
    <h4>Excluding secondary causes</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Why</th></tr>
      <tr><td>Calcium, phosphate, albumin, <strong>25-hydroxyvitamin D</strong></td><td>Osteomalacia, vitamin D deficiency, malabsorption</td></tr>
      <tr><td><strong>PTH</strong>, creatinine</td><td>Primary or secondary hyperparathyroidism, CKD</td></tr>
      <tr><td>TSH, testosterone in men, oestradiol and prolactin</td><td>Thyroid, hypogonadal and hyperprolactinaemic bone loss</td></tr>
      <tr><td>Coeliac serology, SPEP and free light chains</td><td>Malabsorption, myeloma</td></tr>
      <tr><td>24-hour urine calcium, cortisol when Cushing is suspected</td><td>Hypercalciuria, glucocorticoid excess</td></tr>
    </table></div>
    <h4>Bone turnover markers</h4>
    <p><strong>P1NP</strong> reflects bone formation and <strong>CTX</strong> reflects resorption. Collect a <strong>fasting morning</strong> sample because both vary with food and diurnal rhythm, and use the same assay for monitoring. Markers do not diagnose osteoporosis; they assess <strong>adherence</strong>, response to therapy and the possibility of over-suppression. A large fall in CTX supports treatment effect, while persistently high turnover despite therapy suggests non-adherence or an untreated secondary cause.</p>
  `,
  tip: "Separate diagnosis (DXA), risk (FRAX), exclusion of secondary causes, and monitoring (P1NP/CTX).",
  sources: ["C14", "C1", "C2"]
},
{
  id: "cc216", domain: "chem-endo",
  q: "Discuss the interpretation of gonadal hormone panels across the menstrual cycle, in menopause, and in androgen excess.",
  tags: ["gonadal hormones", "menstrual cycle", "menopause", "hirsutism"],
  keypoints: ["early follicular", "mid-luteal progesterone", "LH surge", "AMH", "FSH", "oestradiol", "SHBG", "free androgen index", "LC-MS/MS", "DHEAS", "17-hydroxyprogesterone", "virilization"],
  answer: `
    <h4>The menstrual cycle</h4>
    <p>Gonadal results are meaningless without the cycle day. In the <strong>early follicular</strong> phase, FSH recruits follicles and oestradiol is low. A mid-cycle <strong>LH surge</strong> triggers ovulation, and <strong>mid-luteal progesterone</strong> confirms that ovulation occurred. FSH, LH, oestradiol and progesterone should be interpreted as a set, not as isolated numbers.</p>
    <div class="table-wrap"><table>
      <tr><th>Phase</th><th>FSH</th><th>LH</th><th>Oestradiol</th><th>Progesterone</th></tr>
      <tr><td>Early follicular</td><td>Normal or rising</td><td>Normal</td><td>Low</td><td>Low</td></tr>
      <tr><td>Mid-cycle</td><td>Normal</td><td>Surge</td><td>Peak</td><td>Low</td></tr>
      <tr><td>Mid-luteal</td><td>Normal</td><td>Normal</td><td>Moderate</td><td>Raised</td></tr>
    </table></div>
    <h4>Ovarian reserve and menopause</h4>
    <ul>
      <li>Early follicular FSH and <strong>AMH</strong> estimate ovarian reserve; AMH is cycle-independent and falls with age.</li>
      <li>Persistently high FSH with low oestradiol indicates ovarian insufficiency; premature ovarian insufficiency requires karyotype, FMR1 and adrenal antibody testing.</li>
      <li>In menopause the FSH remains high because follicular feedback is lost; a single value is not needed to diagnose the clinical syndrome.</li>
    </ul>
    <h4>Androgen excess</h4>
    <p>Measure total testosterone by <strong>LC-MS/MS</strong> because immunoassays are unreliable at female concentrations. Add <strong>SHBG</strong> and calculate the <strong>free androgen index</strong>. Measure <strong>DHEAS</strong> for an adrenal source, <strong>17-hydroxyprogesterone</strong> for non-classical CAH, and prolactin and TSH for other causes of oligo-ovulation. Hyperprolactinaemia suppresses GnRH and lowers oestradiol, so prolactin belongs in any unexplained oligomenorrhoea. Rapid <strong>virilization</strong>, clitoromegaly or a very high testosterone suggests an androgen-secreting tumour and needs urgent imaging.</p>
    <h4>Assay and pre-analytical issues</h4>
    <p>SHBG changes with oestrogen, thyroid disease, obesity and liver disease, so free hormone estimates shift even when total concentrations are stable. Biotin and heterophile antibodies can distort immunoassays. State the cycle day, time of collection and method when reporting, and repeat unexpected results before acting on them.</p>
  `,
  tip: "Insist on the cycle day first, then use the FSH/LH/oestradiol/progesterone set to place the patient in the cycle.",
  sources: ["C14", "C1", "C3"]
},
{
  id: "cc217", domain: "chem-endo",
  q: "Describe the laboratory evaluation of precocious and delayed puberty.",
  tags: ["puberty", "GnRH stimulation", "precocious puberty", "delayed puberty"],
  keypoints: ["GnRH", "LH", "FSH", "bone age", "central precocious puberty", "peripheral precocious puberty", "DHEAS", "17-hydroxyprogesterone", "hCG stimulation", "karyotype", "Kallmann", "Turner"],
  answer: `
    <h4>Normal pubertal biochemistry</h4>
    <p>Puberty begins with increased <strong>GnRH</strong> pulsatility, which raises <strong>LH</strong> and <strong>FSH</strong> and then gonadal steroids. Adrenarche, driven by DHEAS, precedes gonadarche. Testicular enlargement reflects testosterone; breast development reflects oestradiol. <strong>Bone age</strong> places the child against the expected timetable better than chronological age alone.</p>
    <h4>Precocious puberty</h4>
    <p>Precocious puberty is onset before the expected age (before 8 years in girls and 9 years in boys). The first question is whether the process is central or peripheral. <strong>Central precocious puberty</strong> is GnRH-dependent, whereas <strong>peripheral precocious puberty</strong> is driven by a source outside the axis. A growth chart and examination for café-au-lait spots or testicular asymmetry guide the next test.</p>
    <div class="table-wrap"><table>
      <tr><th></th><th>Central (GnRH-dependent)</th><th>Peripheral (GnRH-independent)</th></tr>
      <tr><td>Basal LH</td><td>Raised for age</td><td>Suppressed</td></tr>
      <tr><td><strong>GnRH stimulation</strong></td><td>Pubertal LH response</td><td>Prepubertal response</td></tr>
      <tr><td>Cause</td><td>Idiopathic, hamartoma, tumour, irradiation</td><td><strong>CAH</strong>, androgen-secreting tumour, exogenous steroid, McCune–Albright</td></tr>
      <tr><td>Other tests</td><td>MRI brain, IGF-1, prolactin</td><td><strong>17-hydroxyprogesterone</strong>, DHEAS, testosterone, imaging</td></tr>
    </table></div>
    <h4>Delayed puberty</h4>
    <ul>
      <li>Constitutional delay is common and shows a bone age behind chronological age with normal IGF-1 and no organic disease.</li>
      <li>Hypogonadotropic causes include <strong>Kallmann</strong> syndrome, chronic illness, malnutrition, hyperprolactinaemia and pituitary lesions.</li>
      <li>Hypergonadotropic causes include <strong>Turner</strong> syndrome in girls and Klinefelter syndrome in boys; check <strong>karyotype</strong>.</li>
      <li><strong>hCG stimulation</strong> assesses testicular Leydig cell function when testosterone is low.</li>
      <li>Measure LH, FSH, testosterone or oestradiol, prolactin, TSH, IGF-1 and bone age before dynamic testing.</li>
    </ul>
    <h4>Interpretation</h4>
    <p>Use age- and sex-specific reference intervals and a sensitive LH assay; prepubertal concentrations are low and immunoassay imprecision matters. Exclude exogenous hormone exposure and interpret DHEAS in the context of adrenarche. Imaging and genetic testing follow the biochemical pattern, not the other way round.</p>
  `,
  tip: "The GnRH stimulation result separates central from peripheral precocious puberty — lead with that distinction.",
  sources: ["C14", "C1"]
},
{
  id: "cc218", domain: "chem-endo",
  q: "Discuss the use and limitations of biochemical markers in neuroendocrine tumours.",
  tags: ["neuroendocrine tumour", "chromogranin A", "5-HIAA", "calcitonin"],
  keypoints: ["chromogranin A", "5-HIAA", "carcinoid", "calcitonin", "CEA", "gastrin", "proton pump inhibitor", "renal failure", "24-hour urine", "doubling time", "carcinoid heart disease", "pre-analytical"],
  answer: `
    <h4>General principles</h4>
    <p>Neuroendocrine tumours secrete amines, peptides and vesicle proteins. Markers support diagnosis, monitor disease and detect recurrence, but most are non-specific and must be interpreted with imaging and clinical context. Use the same assay over time and report the <strong>doubling time</strong>, which carries prognostic information.</p>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Main use</th><th>Important caveat</th></tr>
      <tr><td><strong>Chromogranin A</strong></td><td>General neuroendocrine tumour marker</td><td>Raised by <strong>proton pump inhibitor</strong>, renal failure, inflammation and liver disease</td></tr>
      <tr><td><strong>5-HIAA</strong></td><td>Carcinoid syndrome</td><td><strong>24-hour urine</strong> with acid preservative; dietary serotonin raises it</td></tr>
      <tr><td><strong>Calcitonin</strong></td><td>Medullary thyroid carcinoma</td><td>Also with <strong>CEA</strong>; screen for RET; assay-dependent</td></tr>
      <tr><td><strong>Gastrin</strong></td><td>Gastrinoma</td><td>Proton pump inhibitors and renal failure raise it</td></tr>
      <tr><td>Glucagon, VIP, somatostatin</td><td>Specific pancreatic or intestinal tumours</td><td>Must be collected during the relevant syndrome</td></tr>
    </table></div>
    <h4>Pre-analytical and clinical traps</h4>
    <ul>
      <li><strong>Chromogranin A</strong> is the most useful general marker but is notorious for false positives; stop acid suppression where safe and repeat before acting.</li>
      <li><strong>5-HIAA</strong> requires a complete 24-hour collection and avoidance of serotonin-rich foods such as banana, pineapple and walnuts before and during collection.</li>
      <li>Calcitonin can be spuriously low at very high concentrations because of the hook effect; dilute and re-assay.</li>
      <li>Biotin and heterophile antibodies interfere with immunoassays; use LC-MS/MS or another platform when results are discordant.</li>
      <li><strong>Carcinoid heart disease</strong> is assessed with echocardiography and NT-proBNP, not with 5-HIAA alone.</li>
    </ul>
    <h4>Monitoring</h4>
    <p>A marker that falls after surgery supports complete resection; a rising marker precedes imaging evidence of recurrence and should trigger re-imaging. Biochemical response is judged alongside radiological response, because secretory activity and tumour size can dissociate during treatment.</p>
  `,
  tip: "Give one caveat for each marker — chromogranin A and proton pump inhibitors, 5-HIAA and diet, calcitonin and the hook effect.",
  sources: ["C1", "C2", "C14"]
},
{
  id: "cc219", domain: "chem-endo", star: true,
  q: "Compare multiple endocrine neoplasia type 1 and type 2 and outline biochemical screening.",
  tags: ["MEN1", "MEN2", "RET", "screening"],
  keypoints: ["MEN1", "menin", "primary hyperparathyroidism", "pituitary", "gastrinoma", "MEN2", "RET", "medullary thyroid carcinoma", "pheochromocytoma", "calcitonin", "metanephrines", "genetic counselling"],
  answer: `
    <h4>Multiple endocrine neoplasia type 1</h4>
    <p><strong>MEN1</strong> is autosomal dominant, caused by loss-of-function variants in the <strong>menin</strong> gene. The classical triad is <strong>primary hyperparathyroidism</strong>, anterior <strong>pituitary</strong> tumours and pancreatic or duodenal neuroendocrine tumours, especially <strong>gastrinoma</strong>. Parathyroid disease is usually the first manifestation. Hyperparathyroidism may be mild and detected only by screening, so calcium and PTH are measured even when the patient is asymptomatic.</p>
    <p>Screening includes calcium, PTH, prolactin, gastrin, fasting gut hormones and pituitary imaging. Gastrin interpretation requires attention to proton pump inhibitors, which raise gastrin and can mask or mimic a gastrinoma.</p>
    <h4>Multiple endocrine neoplasia type 2</h4>
    <p><strong>MEN2</strong> is caused by activating <strong>RET</strong> variants. It combines <strong>medullary thyroid carcinoma</strong>, <strong>pheochromocytoma</strong> and hyperparathyroidism. MEN2A is the commonest form; MEN2B adds marfanoid habitus, mucosal neuromas and a more aggressive medullary carcinoma. Medullary carcinoma can secrete calcitonin and CEA before a nodule is palpable, which is why biochemical screening precedes imaging.</p>
    <div class="table-wrap"><table>
      <tr><th></th><th>MEN1</th><th>MEN2</th></tr>
      <tr><td>Gene</td><td><strong>menin</strong></td><td><strong>RET</strong></td></tr>
      <tr><td>Parathyroid</td><td>Common, often first</td><td>Less common</td></tr>
      <tr><td>Pituitary</td><td>Prolactinoma most often</td><td>Not typical</td></tr>
      <tr><td>Pancreatic NET</td><td>Gastrinoma, insulinoma</td><td>Not typical</td></tr>
      <tr><td>Thyroid</td><td>Not typical</td><td><strong>Medullary thyroid carcinoma</strong></td></tr>
      <tr><td>Adrenal</td><td>Adrenal cortical tumours</td><td><strong>Pheochromocytoma</strong></td></tr>
      <tr><td>Key screen</td><td>Calcium, PTH, prolactin, gastrin</td><td><strong>Calcitonin</strong>, CEA, <strong>metanephrines</strong></td></tr>
    </table></div>
    <h4>Practical screening and safety</h4>
    <ul>
      <li>Offer <strong>genetic counselling</strong> and predictive testing to first-degree relatives.</li>
      <li>In MEN2, exclude <strong>pheochromocytoma</strong> before thyroid or parathyroid surgery to avoid an intraoperative crisis.</li>
      <li>Use the same calcitonin and metanephrine assays over time; document the method.</li>
      <li>Screen children according to the RET variant and family history, in a specialist service.</li>
      <li>Remember that biochemical screening is lifelong, even after apparently curative surgery.</li>
    </ul>
  `,
  tip: "A two-column MEN1 versus MEN2 table with gene, tumours and screening tests is the safest format.",
  sources: ["C14", "C1", "C3"]
},
{
  id: "cc220", domain: "chem-endo", star: true,
  q: "Explain the principles of dynamic endocrine testing and the interpretation of suppression and stimulation tests.",
  tags: ["dynamic testing", "suppression", "stimulation", "dexamethasone"],
  keypoints: ["suppression", "stimulation", "dexamethasone", "CRH", "cosyntropin", "insulin tolerance test", "saline suppression", "captopril", "water deprivation", "drug interference", "assay", "safety"],
  answer: `
    <h4>The core principle</h4>
    <p>Dynamic tests exploit feedback. If excess is suspected, give the physiological or pharmacological suppressor and show that secretion fails to fall — a <strong>suppression</strong> test. If deficiency is suspected, stimulate the gland and show an inadequate response — a <strong>stimulation</strong> test. Basal random measurements are often unhelpful because of pulsatility and diurnal variation.</p>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Type</th><th>Main question</th><th>Key pitfall</th></tr>
      <tr><td>Overnight <strong>dexamethasone</strong> suppression</td><td>Suppression</td><td>Cushing syndrome</td><td>Oestrogen, enzyme inducers, poor absorption</td></tr>
      <tr><td>High-dose dexamethasone</td><td>Suppression</td><td>Pituitary versus ectopic ACTH</td><td>Overlap; inferior petrosal sampling is better</td></tr>
      <tr><td><strong>CRH</strong> stimulation</td><td>Stimulation</td><td>ACTH reserve and source</td><td>Supply shortages; assay timing</td></tr>
      <tr><td><strong>Cosyntropin</strong> stimulation</td><td>Stimulation</td><td>Adrenal cortisol reserve</td><td>Normal in recent central insufficiency</td></tr>
      <tr><td><strong>Insulin tolerance test</strong></td><td>Stimulation</td><td>GH and ACTH reserve</td><td>Contraindicated in epilepsy and ischaemic heart disease</td></tr>
      <tr><td><strong>Saline suppression</strong></td><td>Suppression</td><td>Primary aldosteronism</td><td>Potassium and drug effects</td></tr>
      <tr><td><strong>Captopril</strong> challenge</td><td>Suppression</td><td>Primary aldosteronism</td><td>ACE inhibitor background</td></tr>
      <tr><td><strong>Water deprivation</strong></td><td>Stimulation</td><td>Diabetes insipidus</td><td>Stop for weight loss or hypernatraemia</td></tr>
    </table></div>
    <h4>Interpretation</h4>
    <ul>
      <li>Timing is everything: sample at the specified interval after the stimulus and record the exact clock time.</li>
      <li><strong>Drug interference</strong> is common — oestrogen raises binding proteins, enzyme inducers accelerate steroid metabolism, and diuretics distort the renin–aldosterone axis.</li>
      <li><strong>Assay</strong> differences change cut-offs; do not transfer a threshold from one platform to another.</li>
      <li>Acute illness, sleep disruption and non-fasting status alter many axes; postpone elective testing when possible.</li>
    </ul>
    <h4>Safety</h4>
    <p>Dynamic tests can precipitate adrenal crisis, severe hypoglycaemia or hypernatraemia. Have glucocorticoid available for stimulation tests, monitor the patient throughout, and use strict stop rules. A test is only useful if the pretest probability is clear and the result will change management.</p>
  `,
  tip: "State the suppression-versus-stimulation logic first, then use the table to show you know the pitfalls.",
  sources: ["C1", "C14", "C2"]
},
{
  id: "cc221", domain: "chem-endo",
  q: "Discuss immunoassay interference in endocrine testing, including biotin, heterophile antibodies and macro-complexes.",
  tags: ["interference", "biotin", "heterophile", "macroprolactin"],
  keypoints: ["biotin", "streptavidin", "sandwich", "competitive", "heterophile", "HAMA", "rheumatoid factor", "macroprolactin", "macro-TSH", "PEG precipitation", "dilution linearity", "LC-MS/MS"],
  answer: `
    <h4>Where interference arises</h4>
    <p>Endocrine analytes circulate at low concentrations, so immunoassays are vulnerable to <strong>pre-analytical</strong> problems, antibody-based <strong>analytical</strong> interference and biological macro-complexes. The result is a discordance between the number and the patient.</p>
    <h4>Biotin</h4>
    <p>Many platforms use <strong>streptavidin</strong>–biotin capture. High-dose <strong>biotin</strong> saturates the system: in a <strong>sandwich</strong> assay the signal falls falsely, while in a <strong>competitive</strong> assay it rises falsely. Thyroid tests classically show a low TSH with high FT4 and FT3, mimicking Graves disease; troponin and hormone assays can also be affected. Stop the supplement, repeat after washout, or use a biotin-insensitive method.</p>
    <h4>Heterophile antibodies</h4>
    <p><strong>Heterophile</strong> antibodies, human anti-mouse antibodies (<strong>HAMA</strong>) and <strong>rheumatoid factor</strong> can bridge capture and detection antibodies, producing a falsely high signal in sandwich assays. Clues include results that do not fit the clinical picture and nonlinear behaviour on dilution. Blocking tubes, a different platform or <strong>LC-MS/MS</strong> resolve the problem.</p>
    <div class="table-wrap"><table>
      <tr><th>Interference</th><th>Typical effect</th><th>Resolution</th></tr>
      <tr><td><strong>Biotin</strong></td><td>Sandwich low; competitive high</td><td>Stop supplement, repeat, change method</td></tr>
      <tr><td><strong>Heterophile</strong> / HAMA</td><td>Falsely high sandwich result</td><td>Blocking tube, dilution, alternate platform</td></tr>
      <tr><td><strong>Macroprolactin</strong></td><td>Raised prolactin without symptoms</td><td><strong>PEG precipitation</strong>; recovery is low</td></tr>
      <tr><td><strong>Macro-TSH</strong></td><td>Raised TSH with normal FT4</td><td>PEG precipitation, gel filtration</td></tr>
      <tr><td>Hook effect</td><td>Falsely low result at very high analyte</td><td>Dilute and re-assay</td></tr>
    </table></div>
    <h4>Recognition</h4>
    <ul>
      <li>Check <strong>dilution linearity</strong>: a true result falls in proportion to dilution.</li>
      <li>Compare with a different method or with the clinical phenotype.</li>
      <li>Ask about supplements, monoclonal antibody therapy, recent animal exposure and rheumatoid disease.</li>
      <li>Do not treat a laboratory number that conflicts with the patient; resolve the interference first.</li>
    </ul>
  `,
  tip: "Name the assay architecture (sandwich versus competitive) before predicting the direction of interference.",
  sources: ["C1", "C2", "C14"]
},
{
  id: "cc222", domain: "chem-endo",
  q: "Discuss endocrine dysfunction in chronic kidney disease, including CKD–mineral and bone disorder.",
  tags: ["CKD", "FGF-23", "secondary hyperparathyroidism", "prolactin"],
  keypoints: ["FGF-23", "klotho", "phosphate retention", "calcitriol", "secondary hyperparathyroidism", "adynamic bone", "prolactin", "gonadal axis", "low T3", "cortisol-binding globulin", "dialysis", "fracture"],
  answer: `
    <h4>CKD–mineral and bone disorder</h4>
    <p>Phosphate retention is an early event. Osteocytes respond with <strong>FGF-23</strong>, which acts through <strong>klotho</strong> to increase phosphate excretion and suppress <strong>calcitriol</strong>. Falling calcitriol and rising phosphate lower ionised calcium, driving <strong>secondary hyperparathyroidism</strong>. Over time the parathyroid glands become nodular and less responsive to calcium and vitamin D.</p>
    <div class="table-wrap"><table>
      <tr><th>Axis</th><th>Typical change</th><th>Laboratory finding</th></tr>
      <tr><td>Phosphate</td><td>Retention</td><td>High phosphate, high FGF-23</td></tr>
      <tr><td>Vitamin D</td><td>Reduced 1α-hydroxylation</td><td>Low calcitriol, low 25-hydroxyvitamin D if deficient</td></tr>
      <tr><td>PTH</td><td><strong>Secondary hyperparathyroidism</strong></td><td>High PTH, high alkaline phosphatase</td></tr>
      <tr><td>Bone</td><td><strong>Adynamic bone</strong> after over-suppression</td><td>Low turnover despite high or normal PTH</td></tr>
      <tr><td>Prolactin</td><td>Reduced clearance</td><td>Hyperprolactinaemia, hypogonadism</td></tr>
      <tr><td>Gonadal</td><td>Mixed primary and secondary failure</td><td>Low testosterone or oestradiol, raised LH and FSH</td></tr>
      <tr><td>Thyroid</td><td>Impaired deiodination</td><td><strong>Low T3</strong>, reverse T3 high, TSH often normal</td></tr>
      <tr><td>Cortisol</td><td>Altered binding</td><td>Low <strong>cortisol-binding globulin</strong>, higher free fraction</td></tr>
    </table></div>
    <h4>Monitoring</h4>
    <ul>
      <li>Trend calcium, phosphate, PTH, alkaline phosphatase and 25-hydroxyvitamin D together; a single PTH value is hard to interpret.</li>
      <li>Avoid over-suppression of PTH, which produces <strong>adynamic bone</strong> and increases <strong>fracture</strong> risk.</li>
      <li>Use bone biopsy only in selected cases; DXA is confounded by vascular calcification and altered bone quality.</li>
      <li>Review phosphate binders, vitamin D analogues and calcimimetics against the biochemical trend.</li>
    </ul>
    <h4>Other endocrine effects</h4>
    <p><strong>Prolactin</strong> rises because renal clearance falls, contributing to sexual dysfunction. The <strong>gonadal axis</strong> shows a mixed primary and secondary pattern, with low sex steroids and raised gonadotropins. Insulin resistance, reduced erythropoietin and inflammation compound fatigue. In <strong>dialysis</strong> patients, hormone concentrations shift acutely with fluid removal, so sample timing relative to the session should be consistent. Transplant restores some axes but glucocorticoids and immunosuppressants introduce new metabolic problems.</p>
  `,
  tip: "Start with FGF-23 and phosphate, then show how the same process disturbs PTH, vitamin D, prolactin and gonadal function.",
  sources: ["C7", "C14", "C1"]
}
);
