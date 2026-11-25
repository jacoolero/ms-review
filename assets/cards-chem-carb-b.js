/* Flashcards — carbohydrates & diabetes, part B (one card per cc115–cc132). */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-carbx-", "chem-carb", ["C1", "C2"], [
    ["Main counter-regulatory hormone responding to a falling glucose", "Glucagon — it drives hepatic glycogenolysis and gluconeogenesis; adrenaline, cortisol and growth hormone follow."],
    ["Age at which the ADA advises screening all adults for diabetes", "35 years, repeated at least every 3 years if normal; earlier with risk factors."],
    ["Most sensitive single islet autoantibody for type 1 diabetes", "GAD65; IA-2 and ZnT8 add specificity, and insulin autoantibodies are useful only before insulin treatment."],
    ["HbA1c is unreliable in HbE trait — which tests replace it?", "Fasting plasma glucose or OGTT for diagnosis; fructosamine, glycated albumin or CGM for monitoring."],
    ["What period does fructosamine reflect?", "Glycated serum proteins over the previous 2–3 weeks; independent of red cell lifespan."],
    ["Insulin-to-C-peptide molar ratio above 1 suggests…", "Exogenous insulin — high insulin with low C-peptide."],
    ["ADA level 2 hypoglycaemia threshold", "Below 3.0 mmol/L (54 mg/dL); level 1 is below 3.9 mmol/L."],
    ["Glucose level in SGLT2-inhibitor DKA", "May be below 13.9 mmol/L, sometimes near normal — so check ketones, not just glucose."],
    ["Correct tube and handling for blood lactate", "Fluoride–oxalate tube, on ice, separated promptly; glycolysis raises lactate in vitro."],
    ["HbA1c during pregnancy", "It falls with haemodilution and increased red cell turnover, so CGM is preferred for monitoring."],
    ["Treatment of GCK-MODY", "No treatment — it causes mild, stable fasting hyperglycaemia with HbA1c usually below 7.5%."],
    ["Age limit defining neonatal diabetes", "Onset before 6 months; permanent forms often involve KATP channel genes KCNJ11 or ABCC8."],
    ["ISO 15197 accuracy at glucose at or above 5.6 mmol/L", "At least 95% of results within ±15% of the reference value."],
    ["CGM glucose management indicator (GMI)", "Estimated HbA1c calculated from mean sensor glucose; compare it with laboratory HbA1c."],
    ["What does MAGE measure?", "Mean amplitude of glycaemic excursions — a CGM-derived measure of glucose variability."],
    ["KDIGO A2 albuminuria range by ACR", "30–300 mg/g (3–30 mg/mmol); confirm on 2 of 3 samples over 3–6 months."],
    ["Common causes of type 3c diabetes", "Chronic pancreatitis, pancreatic cancer, cystic fibrosis or pancreatectomy; C-peptide is low."],
    ["Effect of iron deficiency on HbA1c", "Falsely high — iron deficiency prolongs red cell survival; haemolysis and transfusion lower it."]
  ]);
})();
