/* Flashcards — Clinical Chemistry endocrinology, part B (one card per essay in data-chem-endo-b.js). */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-endx-", "chem-endo", ["C1", "C14"], [
    ["Five anterior pituitary axes and their first-line laboratory tests",
     "Adrenal uses cortisol and ACTH; thyroid uses <b>TSH and FT4</b>; gonadal uses LH, FSH and sex steroid; growth uses <b>IGF-1</b>; lactotroph uses prolactin."],
    ["Which antibodies characterise Hashimoto thyroiditis and Graves disease?",
     "<b>Hashimoto</b>: anti-TPO and often anti-thyroglobulin. <b>Graves</b>: TSH receptor stimulating antibodies, measured by binding assay or bioassay."],
    ["Why are trimester-specific TSH intervals used in pregnancy?",
     "<b>hCG</b> stimulates the TSH receptor and binding globulins rise, so non-pregnant ranges misclassify women. Total T4 and T3 are unhelpful."],
    ["Amiodarone type 1 versus type 2 thyrotoxicosis: what distinguishes them?",
     "Type 1 is <b>iodine-driven</b> with goitre and increased vascularity; type 2 is a <b>destructive thyroiditis</b> with low uptake. Doppler and radioiodine uptake help."],
    ["Laboratory clues that support thyroid storm or myxoedema coma",
     "Storm: suppressed TSH, high FT4/FT3, raised <b>CK</b> and liver enzymes. Myxoedema: high TSH, low FT4, <b>hyponatraemia</b>, hypoglycaemia and raised CK."],
    ["Why does total cortisol mislead when cortisol-binding globulin is low?",
     "Only <b>free cortisol</b> is active. Low binding globulin lowers total cortisol despite normal free exposure; salivary cortisol or a free cortisol index is more reliable."],
    ["Hormonal tests required for every adrenal incidentaloma",
     "Overnight <b>dexamethasone suppression</b> for cortisol, <b>metanephrines</b> for pheochromocytoma, and aldosterone-to-renin ratio when hypertensive or hypokalaemic."],
    ["Critical sample to collect during spontaneous hypoglycaemia",
     "Glucose, <b>insulin</b>, <b>C-peptide</b>, β-hydroxybutyrate, free fatty acids, cortisol, GH, lactate, ammonia, acylcarnitines and a sulfonylurea screen."],
    ["PTH and calcium patterns in primary hyperparathyroidism versus FHH",
     "Both show high calcium with high or normal PTH. <b>FHH</b> has low urine calcium and a low calcium-to-creatinine clearance ratio."],
    ["Four mechanisms of hypercalcaemia of malignancy",
     "<b>PTHrP</b> secretion, local osteolysis, excess <b>1,25-dihydroxyvitamin D</b>, and rarely ectopic PTH. PTH is suppressed in the first three."],
    ["Tests that exclude secondary causes of osteoporosis",
     "Calcium, phosphate, <b>25-hydroxyvitamin D</b>, PTH, TSH, gonadal steroids, prolactin, coeliac serology, SPEP and free light chains."],
    ["How do FSH, LH, oestradiol and progesterone change across the cycle?",
     "Early follicular FSH recruits follicles; mid-cycle <b>LH surges</b>; mid-luteal <b>progesterone</b> confirms ovulation. Interpret the set with the cycle day."],
    ["GnRH stimulation: central versus peripheral precocious puberty",
     "Central disease gives a pubertal <b>LH response</b>; peripheral disease gives a prepubertal response with suppressed basal LH and a separate androgen source."],
    ["Why is chromogranin A difficult to interpret?",
     "It rises with <b>proton pump inhibitors</b>, renal failure, inflammation and liver disease. Stop acid suppression where safe and repeat before acting."],
    ["MEN1 versus MEN2: genes, tumours and screening tests",
     "<b>MEN1</b>: menin, parathyroid, pituitary and gastrinoma; screen calcium, PTH, prolactin and gastrin. <b>MEN2</b>: RET, medullary thyroid carcinoma and pheochromocytoma; screen calcitonin and metanephrines."],
    ["Suppression versus stimulation tests: which is used for excess?",
     "<b>Suppression</b> tests are for suspected excess; <b>stimulation</b> tests are for suspected deficiency. Basal random levels are often unhelpful because of pulsatility."],
    ["Work-up of a discordant immunoassay result",
     "Check <b>dilution linearity</b>, repeat on another platform, consider biotin or heterophile antibodies, and use PEG precipitation for macro-complexes or LC-MS/MS for confirmation."],
    ["How does chronic kidney disease disturb PTH, vitamin D and prolactin?",
     "Rising <b>FGF-23</b> and phosphate retention lower calcitriol and cause <b>secondary hyperparathyroidism</b>; reduced renal clearance raises prolactin and worsens hypogonadism."]
  ]);
})();
