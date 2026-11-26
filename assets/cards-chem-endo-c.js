/* Flashcards — Clinical Chemistry endocrinology, part C (one card per essay in data-chem-endo-c.js). */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-endc-", "chem-endo", ["C17", "C16", "C1", "C14"], [
    ["In treated primary hypothyroidism, which TSH target applies and when is FT4 added?",
     "<b>0.4-4.0 mIU/L</b>, age-appropriate. Add FT4 in pregnancy, pituitary disease, or when TSH and FT4 disagree; keep the same assay platform."],
    ["How is population iodine status classified by median urinary iodine?",
     "Adequate <b>100-199 µg/L</b>; mild 50-99; moderate 20-49; severe &lt;20. Pregnant women need a higher target of 150-249."],
    ["Under RA 9288, which confirmatory tests follow a high newborn screen TSH?",
     "Venous <b>TSH and FT4</b>: high TSH with low FT4 is primary congenital hypothyroidism; low or normal TSH with low FT4 suggests central disease."],
    ["Which biochemical tests support PCOS with hirsutism in a Filipino woman?",
     "Total testosterone by <b>LC-MS/MS</b>, SHBG and free androgen index, DHEAS, 17-hydroxyprogesterone, prolactin, TSH, and a metabolic screen."],
    ["When should 25-hydroxyvitamin D be measured before osteoporosis treatment?",
     "In fragility fracture, malabsorption, CKD, liver disease and before potent antiresorptives. Deficiency is <b>&lt;30 nmol/L</b>; sufficiency above 50."],
    ["What cortisol range after 1 mg dexamethasone suggests mild autonomous cortisol secretion?",
     "<b>50-138 nmol/L (1.8-5.0 µg/dL)</b> without overt Cushing features; confirm with late-night salivary or urine free cortisol when borderline."],
    ["Which pre-analytical factors falsely raise plasma free metanephrines?",
     "<b>Upright posture</b>, pain, stress, tricyclics, levodopa, sympathomimetics and acetaminophen in some assays; sample supine after rest."],
    ["Why can cyclic Cushing syndrome be missed by a single screening test?",
     "Hormone secretion is <b>periodic</b>; tests during a trough can be normal. Repeat salivary cortisol, urine free cortisol and dexamethasone testing over weeks to months."],
    ["Which hormone should be given before imaging in suspected pituitary apoplexy?",
     "<b>Hydrocortisone</b> when crisis is suspected, after a brief baseline sample; do not wait for cortisol or imaging if the patient is unstable."],
    ["Why is total cortisol unreliable in septic shock, and what is the alternative?",
     "Low <b>cortisol-binding globulin and albumin</b> lower total cortisol; free or salivary cortisol is more valid. Cosyntropin still tests adrenal reserve."]
  ]);
})();
