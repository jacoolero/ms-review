/* Flashcards — carbohydrates & diabetes, part C (one card per cc251–cc260). */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-carbc-", "chem-carb", ["C16", "C18", "C6", "C1", "C5", "C13", "C14", "C15"], [
    ["PCEDM first-line therapy and usual HbA1c target in type 2 diabetes?", "Metformin plus lifestyle, with a usual HbA1c below 7.0%; targets are relaxed for frailty, hypoglycaemia risk or advanced complications."],
    ["HbA1c method least affected by haemoglobin variants?", "Boronate affinity chromatography; it measures total glycated haemoglobin and is less dependent on charge differences."],
    ["IADPSG 75 g OGTT cut-offs for gestational diabetes?", "Fasting 5.1, 1-hour 10.0 and 2-hour 8.5 mmol/L; any one abnormal value diagnoses GDM."],
    ["Which PhilHealth package covers outpatient diabetes diagnostics?", "The Konsulta primary care package covers a defined laboratory set; HbA1c and albumin-to-creatinine ratio are often out-of-pocket."],
    ["Glycaemic load formula", "GL = glycaemic index × available carbohydrate (g) ÷ 100. One cup of white rice has a GL of roughly 35."],
    ["DOH programme that adapts WHO PEN for local NCD care?", "PhilPEN, the Philippine Package of Essential Noncommunicable Disease Interventions, delivered through barangay health stations and rural health units."],
    ["What does the glucose risk index combine?", "Time below range and time above range, weighted into a single 0–100 score of hypoglycaemia and hyperglycaemia risk."],
    ["Insulin and C-peptide pattern in insulinoma?", "Both are high at a low glucose; exogenous insulin gives high insulin with low C-peptide."],
    ["Which MODY subtype usually needs no drug treatment?", "GCK-MODY, which causes mild stable fasting hyperglycaemia; treat only if fetal growth is excessive in pregnancy."],
    ["Glucose value that must not exclude DKA on an SGLT2 inhibitor?", "Any value below 13.9 mmol/L, including near-normal glucose; confirm with pH, bicarbonate, anion gap and beta-hydroxybutyrate."]
  ]);
})();
