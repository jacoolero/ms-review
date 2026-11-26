/* Flashcards — liver, pancreas & GI, part C (Philippine practice, DILI, autoimmune, metabolic, neonatal, pancreatic) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-livc-", "chem-liver", ["C1", "C3", "C18", "C19"], [
    ["Which hepatitis B vaccine dose protects a Filipino newborn?", "The <b>birth dose within 24 hours</b>, then pentavalent hepatitis B at 6, 10 and 14 weeks."],
    ["What does PhilHealth Konsulta usually leave out in hepatitis B?", "HBV DNA, elastography and most antivirals are often <b>out-of-pocket</b>."],
    ["First-line fibrosis score for MASLD in primary care?", "<b>FIB-4</b>; below 1.3 is low risk, above 2.67 is high risk."],
    ["HCC surveillance schedule for a cirrhotic patient?", "<b>Ultrasound every six months</b>, with or without alpha-fetoprotein."],
    ["Classic AST:ALT ratio in alcohol-related liver disease?", "<b>Greater than 2</b>, often with a raised GGT and macrocytosis."],
    ["R ratio cut-off for hepatocellular drug injury?", "<b>Above 5</b>; below 2 is cholestatic and 2 to 5 is mixed."],
    ["Autoantibodies most associated with type 1 autoimmune hepatitis?", "<b>ANA</b> and <b>smooth muscle antibody</b>, with raised IgG."],
    ["Wilson disease clue in acute liver failure with haemolysis?", "<b>Coombs-negative haemolysis</b> with an ALP:bilirubin ratio below 4."],
    ["What does conjugated hyperbilirubinaemia mean in a neonate?", "<b>Cholestasis</b> until proven otherwise; exclude biliary atresia urgently."],
    ["Lipase threshold for diagnosing acute pancreatitis?", "<b>At least three times the upper reference limit</b>, with typical pain or imaging."]
  ]);
})();
