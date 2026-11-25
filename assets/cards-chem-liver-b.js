/* Flashcards — liver, pancreas & GI, part B (neonatal, viral, metabolic, GI) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-livx-", "chem-liver", ["C1", "C3", "C2"], [
    ["Why is jaundice in the first 24 hours of life pathological?", "It suggests <b>isoimmune haemolysis</b>, sepsis or <b>G6PD deficiency</b> rather than physiological jaundice."],
    ["Which ALP isoenzyme is heat labile?", "<b>Bone ALP</b>; liver ALP is more heat stable."],
    ["Best acute laboratory marker of hepatic synthetic function?", "<b>PT/INR</b>, because factor VII has a short half-life."],
    ["Test that confirms viraemia in hepatitis C", "<b>HCV RNA</b> by PCR; anti-HCV only shows exposure."],
    ["Serological marker of acute hepatitis A infection", "<b>Anti-HAV IgM</b>; IgG indicates past infection or vaccination."],
    ["SPEP finding classically described in cirrhosis", "<b>Beta–gamma bridging</b> from polymeric IgA, with polyclonal hypergammaglobulinaemia."],
    ["Vibration-controlled transient elastography measures what?", "<b>Liver stiffness</b> in kPa, a surrogate for fibrosis; CAP estimates steatosis."],
    ["Conjugated hyperbilirubinaemia in a neonate suggests…", "<b>Cholestasis</b> — urgently exclude <b>biliary atresia</b>."],
    ["AST:ALT ratio greater than 2 suggests", "<b>Alcohol-related liver disease</b>; GGT is often raised too."],
    ["Hy's law predicts severe injury when…", "Hepatocellular <b>ALT rise plus jaundice</b> without biliary obstruction."],
    ["Bile acid test used to diagnose intrahepatic cholestasis of pregnancy", "Fasting <b>serum bile acids</b>, with pruritus and otherwise unexplained liver test abnormalities."],
    ["Best general blood marker of a neuroendocrine tumour", "<b>Chromogranin A</b>, but it rises with PPI use and renal failure."],
    ["Faecal test that helps separate IBD from IBS", "<b>Faecal calprotectin</b>; a low value makes IBD unlikely."],
    ["Tumour marker used with ultrasound for HCC surveillance", "<b>Alpha-fetoprotein</b>, especially in cirrhosis and chronic hepatitis B."],
    ["SAAG of 1.1 g/dL or more indicates", "<b>Portal hypertension</b> — cirrhosis, cardiac failure or Budd–Chiari."],
    ["Gene mutated in Wilson disease", "<b>ATP7B</b>; copper accumulates because biliary excretion fails."],
    ["Sweat chloride of 60 mmol/L or more indicates", "<b>Cystic fibrosis</b>; 30–59 mmol/L is intermediate and needs further testing."],
    ["Test of choice to confirm H. pylori eradication", "<b>Urea breath test</b> or stool antigen, off PPI."]
  ]);
})();
