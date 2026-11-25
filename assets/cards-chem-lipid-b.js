/* Flashcards — Clinical Chemistry, lipids part B */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-lipx-", "chem-lipid", ["C1", "C2", "C8"], [
    ["Which lipoprotein method is the reference for LDL-C?", "<b>Beta-quantification</b>: ultracentrifugation plus precipitation of apo B-containing lipoproteins."],
    ["Which enzyme hydrolyses cholesteryl esters in the cholesterol oxidase assay?", "<b>Cholesterol esterase</b>; cholesterol oxidase then generates hydrogen peroxide."],
    ["What masks apo B lipoproteins in a homogeneous direct HDL-C assay?", "<b>Polyanions, detergents and modified enzymes</b>; specificity varies between manufacturers."],
    ["Function of apolipoprotein C-II", "It <b>activates lipoprotein lipase</b>; deficiency causes severe hypertriglyceridaemia."],
    ["How is non-HDL cholesterol calculated?", "<b>Total cholesterol minus HDL-C</b>; it includes LDL, VLDL, IDL, remnants and Lp(a)."],
    ["How is remnant cholesterol estimated?", "<b>Total cholesterol minus HDL-C minus LDL-C</b>, or triglyceride divided by 5 in mg/dL."],
    ["What produces small dense LDL?", "<b>CETP</b> transfers triglyceride to LDL, then <b>hepatic lipase</b> remodels the particle."],
    ["What does cholesterol efflux capacity measure?", "The ability of <b>apoB-depleted serum</b> to remove cholesterol from macrophages, mainly through ABCA1."],
    ["What does NMR lipoprotein testing report?", "<b>Particle numbers and size subclasses</b>, including LDL-P and HDL-P."],
    ["Which lipid has the largest within-person biological variation?", "<b>Triglyceride</b>; its reference change value is correspondingly wide."],
    ["Waist threshold for metabolic syndrome in Asian men", "<b>90 cm or more</b> (80 cm or more in Asian women)."],
    ["Typical pattern of familial combined hyperlipidaemia", "Raised <b>apo B</b> with variable LDL-C and triglyceride, plus premature coronary disease in the family."],
    ["Hallmark physical sign of dysbetalipoproteinaemia", "<b>Palmar xanthomas</b>, with tuberoeruptive xanthomas and combined hyperlipidaemia."],
    ["Lipid pattern in abetalipoproteinaemia", "<b>Very low cholesterol and triglyceride</b> with acanthocytes and fat-soluble vitamin deficiency."],
    ["When does universal paediatric lipid screening occur?", "At <b>9 to 11 years</b> and again at <b>17 to 21 years</b>."],
    ["How does pregnancy change triglycerides?", "Oestrogen-driven VLDL production raises <b>triglyceride</b>, especially in the third trimester."],
    ["CK level defining statin myopathy with symptoms", "More than <b>10 times the upper limit of normal</b>."],
    ["Which receptors let macrophages take up oxidized LDL without feedback?", "<b>Scavenger receptors</b> such as CD36 and SR-A."]
  ]);
})();
