/* Clinical Chemistry — part 7: liver, pancreas & GI */
window.QBANK.push(
{
  id: "cc82", domain: "chem-liver",
  q: "Discuss metabolic dysfunction-associated steatotic liver disease (MASLD): definition, laboratory assessment and non-invasive fibrosis scoring.",
  tags: ["MASLD", "fatty liver", "FIB-4", "fibrosis"],
  keypoints: ["steatotic liver disease with cardiometabolic risk factor", "replaces NAFLD terminology", "MASH steatohepatitis", "ALT often normal or mildly raised", "ALT greater than AST", "exclude alcohol viral hepatitis drugs", "FIB-4 age AST ALT platelets", "FIB-4 below 1.3 low risk", "FIB-4 above 2.67 high risk", "Enhanced Liver Fibrosis test", "transient elastography", "two-step pathway", "fibrosis stage predicts outcome", "liver biopsy reference standard", "high prevalence in Philippines with diabetes and obesity"],
  answer: `
    <h4>Definition</h4>
    <p>Since 2023 the term <strong>MASLD replaces NAFLD</strong>. It is <strong>steatotic liver disease plus at least one cardiometabolic risk factor</strong> (overweight/central obesity, prediabetes or diabetes, hypertension, high triglycerides, low HDL), without another cause. Inflammation with hepatocyte ballooning is <strong>MASH</strong> (steatohepatitis), which can progress to cirrhosis and hepatocellular carcinoma. MetALD describes MASLD with moderate alcohol intake. Prevalence is high in the Philippines, tracking diabetes and obesity.</p>
    <h4>Laboratory findings</h4>
    <ul>
      <li><strong>ALT is often normal or only mildly raised</strong>, typically <strong>ALT greater than AST</strong>; AST/ALT &gt;1 suggests advanced fibrosis. GGT may be raised; ferritin is commonly high (inflammation) without iron overload.</li>
      <li><strong>Exclude other causes</strong>: alcohol, <strong>viral hepatitis</strong> (HBsAg, anti-HCV — essential locally), autoimmune hepatitis, haemochromatosis, Wilson disease, α₁-antitrypsin deficiency, coeliac disease, thyroid disease, and <strong>drugs</strong> (amiodarone, methotrexate, tamoxifen, steroids).</li>
      <li>Metabolic work-up: HbA1c, lipids, urate, urine albumin.</li>
    </ul>
    <h4>Non-invasive fibrosis assessment — the key step</h4>
    <div class="calc">FIB-4 = (Age × AST) / (Platelets [10⁹/L] × √ALT)

FIB-4 &lt; 1.3   → low risk of advanced fibrosis (use 2.0 if age ≥ 65)
FIB-4 1.3–2.67 → indeterminate → second-line test
FIB-4 &gt; 2.67  → high risk → refer to hepatology</div>
    <p>This is a <strong>two-step pathway</strong> (EASL–EASD–EASO, AASLD): FIB-4 first, then the <strong>Enhanced Liver Fibrosis (ELF) test</strong> (hyaluronic acid, PIIINP, TIMP-1) or <strong>transient elastography</strong> (liver stiffness, plus CAP for steatosis) for indeterminate results. <strong>Fibrosis stage — not steatosis or ALT — predicts outcome</strong> (liver-related and cardiovascular events). <strong>Liver biopsy remains the reference standard</strong> but is reserved for uncertainty or trials.</p>
    <h4>Management</h4>
    <p>Weight loss of 7–10% (diet and exercise), control of diabetes and lipids (GLP-1 receptor agonists, SGLT2 inhibitors, statins are safe and indicated), alcohol reduction, and resmetirom (thyroid hormone receptor-β agonist) for MASH with fibrosis where available. Cardiovascular disease is the leading cause of death in MASLD, so cardiovascular risk must be managed too.</p>
  `,
  tip: "Write the FIB-4 formula with 1.3 and 2.67 cut-offs and stress that fibrosis, not ALT, predicts outcome.",
  sources: ["C1", "C3"]
},
{
  id: "cc83", domain: "chem-liver",
  q: "Discuss the porphyrias: classification, biochemical basis and laboratory diagnosis, including the pre-analytical requirements.",
  tags: ["porphyria", "porphobilinogen", "haem synthesis", "AIP"],
  keypoints: ["haem biosynthesis pathway enzymes", "ALA synthase rate limiting", "acute hepatic porphyrias", "acute intermittent porphyria porphobilinogen deaminase", "neurovisceral attacks abdominal pain neuropathy hyponatraemia", "precipitating drugs alcohol fasting hormones", "urine porphobilinogen during attack", "random urine PBG creatinine ratio", "cutaneous porphyrias", "porphyria cutanea tarda uroporphyrinogen decarboxylase", "erythropoietic protoporphyria photosensitivity", "protect samples from light", "plasma fluorescence emission scan", "faecal porphyrins", "givosiran and haem arginate", "lead poisoning mimics porphyria"],
  answer: `
    <h4>Biochemical basis</h4>
    <p>Haem is made in eight enzymatic steps (bone marrow and liver). <strong>ALA synthase is rate limiting</strong> and is induced when haem is depleted. A partial defect further down causes accumulation of precursors (ALA, porphobilinogen) — neurotoxic — or porphyrins — <strong>photosensitising</strong>, because they absorb light (Soret band ~400 nm) and generate reactive oxygen species in the skin.</p>
    <div class="table-wrap"><table>
      <tr><th>Porphyria</th><th>Enzyme defect</th><th>Presentation</th><th>Key test</th></tr>
      <tr><td><strong>Acute intermittent porphyria (AIP)</strong></td><td><strong>Porphobilinogen deaminase</strong> (HMBS)</td><td><strong>Neurovisceral attacks</strong>: severe abdominal pain, vomiting, tachycardia, hypertension, motor <strong>neuropathy</strong>, psychiatric features, <strong>hyponatraemia</strong> (SIADH); no skin signs</td><td><strong>Urine porphobilinogen</strong> during the attack (raised &gt;10-fold)</td></tr>
      <tr><td>Variegate porphyria, hereditary coproporphyria</td><td>Protoporphyrinogen oxidase; coproporphyrinogen oxidase</td><td>Acute attacks and/or blistering skin</td><td>Urine PBG in attack; <strong>plasma fluorescence emission scan</strong> (peak ~626 nm in VP); <strong>faecal porphyrins</strong></td></tr>
      <tr><td><strong>Porphyria cutanea tarda</strong> (commonest)</td><td><strong>Uroporphyrinogen decarboxylase</strong> (acquired inhibition; familial in some)</td><td>Blisters, fragility, scarring, hypertrichosis on sun-exposed skin; associated with alcohol, HCV, HIV, iron overload, oestrogens</td><td>Urine uroporphyrin; plasma scan peak ~619 nm</td></tr>
      <tr><td><strong>Erythropoietic protoporphyria</strong></td><td>Ferrochelatase</td><td>Immediate painful <strong>photosensitivity</strong> without blisters; gallstones, liver disease</td><td>Red cell free protoporphyrin</td></tr>
    </table></div>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li>In a suspected acute attack, the first-line test is <strong>urine PBG on a random sample expressed as a PBG:creatinine ratio</strong> — a normal result during symptoms excludes an acute porphyria as the cause. Qualitative Watson–Schwartz screening is obsolete; use quantitative methods.</li>
      <li>For skin symptoms, use the plasma fluorescence scan first, then urine, faecal and red cell porphyrins to classify.</li>
      <li>Genetic testing of the index case enables family screening; latent carriers are common.</li>
    </ul>
    <h4>Pre-analytical requirements</h4>
    <p><strong>Protect samples from light</strong> (wrap in foil), send promptly, and collect before treatment with haem. PBG degrades in acid and at room temperature.</p>
    <h4>Precipitants and treatment</h4>
    <p>Attacks are triggered by <strong>drugs</strong> (barbiturates, carbamazepine, phenytoin, sulfonamides, progestogens), <strong>alcohol, fasting</strong>, infection and <strong>hormonal</strong> changes. Treat with IV <strong>haem arginate</strong> or haematin, carbohydrate loading and safe analgesia; <strong>givosiran</strong> (siRNA against ALAS1) prevents recurrent attacks. <strong>Lead poisoning mimics porphyria</strong> (raised ALA and ZPP, but PBG normal) — a useful differential.</p>
  `,
  tip: "Make the point that a normal urine PBG during an attack excludes acute porphyria — and protect from light.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc84", domain: "chem-liver",
  q: "Discuss the laboratory diagnosis of autoimmune and cholestatic liver diseases: autoimmune hepatitis, primary biliary cholangitis and primary sclerosing cholangitis.",
  tags: ["autoimmune hepatitis", "PBC", "PSC", "autoantibodies"],
  keypoints: ["autoimmune hepatitis hepatocellular pattern raised IgG", "ANA and anti-smooth muscle antibody type 1", "anti-LKM1 type 2 children", "anti-SLA highly specific", "simplified IAIHG score", "liver biopsy interface hepatitis", "primary biliary cholangitis anti-mitochondrial antibody M2", "raised ALP and IgM", "PBC-specific ANA sp100 gp210", "ursodeoxycholic acid response", "primary sclerosing cholangitis MRCP beading", "pANCA atypical", "association with ulcerative colitis", "IgG4-related disease", "cholangiocarcinoma risk CA 19-9", "overlap syndromes"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>Autoimmune hepatitis</th><th>Primary biliary cholangitis</th><th>Primary sclerosing cholangitis</th></tr>
      <tr><td>Typical patient</td><td>Women (also children), any age</td><td>Middle-aged women</td><td>Young men; <strong>associated with ulcerative colitis</strong> (~70%)</td></tr>
      <tr><td>Biochemical pattern</td><td><strong>Hepatocellular</strong> (high ALT), <strong>raised IgG</strong></td><td><strong>Cholestatic — raised ALP and GGT, raised IgM</strong></td><td>Cholestatic</td></tr>
      <tr><td>Autoantibodies</td><td><strong>ANA and anti-smooth muscle antibody</strong> (type 1); <strong>anti-LKM1</strong> (type 2, mainly <strong>children</strong>); <strong>anti-SLA</strong> (highly specific, severe disease)</td><td><strong>Anti-mitochondrial antibody (AMA-M2)</strong> — &gt;90% sensitive and specific; <strong>PBC-specific ANA (anti-sp100, anti-gp210)</strong> when AMA-negative</td><td><strong>Atypical pANCA</strong> (not specific); no diagnostic antibody</td></tr>
      <tr><td>Diagnosis</td><td><strong>Simplified IAIHG score</strong> (autoantibodies, IgG, histology, absence of viral hepatitis); <strong>liver biopsy</strong> shows <strong>interface hepatitis</strong> with plasma cells</td><td>Raised ALP + AMA is sufficient; biopsy rarely needed</td><td><strong>MRCP</strong> showing multifocal strictures and <strong>beading</strong> of ducts</td></tr>
      <tr><td>Treatment</td><td>Prednisolone/budesonide + azathioprine</td><td><strong>Ursodeoxycholic acid</strong>; response (ALP fall, bilirubin) predicts prognosis; obeticholic acid or fibrates second-line</td><td>No proven drug; transplant; surveillance</td></tr>
    </table></div>
    <h4>Laboratory nuances</h4>
    <ul>
      <li>Autoantibodies are tested by indirect immunofluorescence on rodent tissue (liver, kidney, stomach) or HEp-2 cells, with ELISA/line blots for specific antigens; titres matter (≥1:40 adults, lower in children).</li>
      <li>Normalisation of transaminases and IgG defines biochemical remission in AIH.</li>
      <li><strong>IgG4-related sclerosing cholangitis</strong> mimics PSC — measure serum IgG4; it responds to steroids.</li>
      <li>PSC carries a high <strong>cholangiocarcinoma risk</strong>: monitor with imaging and <strong>CA 19-9</strong> (unreliable in cholangitis and in Lewis-negative individuals who cannot make CA 19-9), plus colonoscopy for colorectal cancer.</li>
      <li><strong>Overlap syndromes</strong> (AIH–PBC, AIH–PSC) occur; exclude viral hepatitis, drug-induced liver injury and Wilson disease in every case.</li>
    </ul>
  `,
  tip: "Antibody-to-disease pairing (ASMA/LKM1–AIH, AMA-M2–PBC, MRCP–PSC) is the core of the answer.",
  sources: ["C1", "C3"]
},
{
  id: "cc85", domain: "chem-liver",
  q: "Discuss the laboratory investigation of malabsorption, including tests for coeliac disease, carbohydrate malabsorption and small intestinal bacterial overgrowth.",
  tags: ["malabsorption", "coeliac disease", "lactose intolerance", "breath tests"],
  keypoints: ["fat malabsorption steatorrhoea", "faecal elastase for pancreatic cause", "tissue transglutaminase IgA", "total IgA to exclude IgA deficiency", "deamidated gliadin IgG in IgA deficiency", "endomysial antibody", "duodenal biopsy villous atrophy", "HLA-DQ2 DQ8 negative predictive value", "gluten must be in diet before testing", "lactose hydrogen breath test", "rise in breath hydrogen above 20 ppm", "lactase non-persistence common in Asians", "glucose or lactulose breath test for bacterial overgrowth", "faecal calprotectin to separate IBD from IBS", "vitamin B12 folate iron vitamin D albumin", "D-xylose test largely obsolete"],
  answer: `
    <h4>General approach</h4>
    <p>Malabsorption causes weight loss, diarrhoea, <strong>steatorrhoea</strong> and nutritional deficiencies. Baseline tests: full blood count, <strong>B12, folate, iron studies, vitamin D, calcium, albumin</strong>, INR (vitamin K) and zinc. The pattern helps localise: iron and folate deficiency suggest proximal small bowel (coeliac); B12 deficiency suggests terminal ileum or bacterial overgrowth.</p>
    <h4>Pancreatic versus mucosal</h4>
    <p><strong>Faecal elastase</strong> (&lt;200 µg/g) points to pancreatic exocrine insufficiency. The <strong>D-xylose test</strong> (mucosal absorption) is <strong>largely obsolete</strong>.</p>
    <h4>Coeliac disease</h4>
    <ol>
      <li><strong>Tissue transglutaminase IgA</strong> (tTG-IgA) with <strong>total IgA</strong> to exclude IgA deficiency (10–15× more common in coeliac disease).</li>
      <li>If IgA-deficient: <strong>deamidated gliadin peptide IgG</strong> or tTG-IgG.</li>
      <li><strong>Endomysial antibody</strong> (immunofluorescence) — highly specific confirmation.</li>
      <li><strong>Duodenal biopsy</strong> (≥4 samples plus bulb) showing <strong>villous atrophy</strong>, crypt hyperplasia and intraepithelial lymphocytosis (Marsh classification). In children, tTG-IgA ≥10× ULN with positive EMA allows a no-biopsy diagnosis (ESPGHAN).</li>
      <li><strong>HLA-DQ2/DQ8</strong> testing has a very high <strong>negative predictive value</strong> — absence almost excludes coeliac disease.</li>
    </ol>
    <p>Patients <strong>must be eating gluten</strong> before testing (several weeks), otherwise serology and histology normalise.</p>
    <h4>Carbohydrate malabsorption</h4>
    <p>The <strong>lactose hydrogen breath test</strong>: after 25–50 g lactose, colonic bacteria ferment unabsorbed sugar; a <strong>rise in breath hydrogen &gt;20 ppm</strong> above baseline with symptoms indicates lactose malabsorption. Methane measurement catches non-hydrogen producers. Genotyping (LCT −13910) is used in Europeans. <strong>Lactase non-persistence is common in Asians</strong>, including most Filipino adults, so clinical correlation matters. Stool pH &lt;5.5 and reducing substances help in infants.</p>
    <h4>Small intestinal bacterial overgrowth</h4>
    <p><strong>Glucose or lactulose breath tests</strong> (early hydrogen rise); the reference standard is jejunal aspirate culture (&gt;10³ CFU/mL). Risk factors: surgery, strictures, motility disorders, PPIs.</p>
    <h4>Inflammation</h4>
    <p><strong>Faecal calprotectin separates inflammatory bowel disease from irritable bowel syndrome</strong> (&lt;50 µg/g makes IBD unlikely). Also consider giardiasis, tropical sprue and HIV enteropathy — stool microscopy and antigen tests are part of the work-up in the Philippines.</p>
  `,
  tip: "Always pair tTG-IgA with total IgA and say the patient must be on gluten — the two classic traps.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc86", domain: "chem-liver",
  q: "Discuss the laboratory evaluation of acute liver failure and the use of prognostic scores in liver disease.",
  tags: ["acute liver failure", "MELD", "Child-Pugh", "King's College"],
  keypoints: ["encephalopathy and INR above 1.5 without prior liver disease", "paracetamol commonest cause in West", "viral hepatitis A B E in Asia", "drug-induced liver injury", "INR and factor V", "lactate and arterial ammonia", "hypoglycaemia", "phosphate rise poor prognosis", "King's College criteria", "MELD-Na bilirubin INR creatinine sodium", "Child-Pugh albumin bilirubin INR ascites encephalopathy", "transplant listing", "frequent glucose monitoring", "infection screening", "AFP rise indicates regeneration", "ammonia above 200 risk of cerebral oedema"],
  answer: `
    <h4>Definition</h4>
    <p>Acute liver failure is rapid hepatic dysfunction with <strong>encephalopathy and coagulopathy (INR ≥1.5) in a patient without prior liver disease</strong>, developing within 26 weeks. It is classed as hyperacute (&lt;7 days — paracetamol, hepatitis A/E), acute or subacute.</p>
    <h4>Causes and specific tests</h4>
    <ul>
      <li><strong>Paracetamol</strong> (commonest in the West): drug level, history.</li>
      <li><strong>Viral hepatitis A, B, E</strong> (important in Asia, including the Philippines): anti-HAV IgM, HBsAg and anti-HBc IgM, anti-HEV IgM/HEV RNA (dangerous in pregnancy); HSV and CMV PCR.</li>
      <li><strong>Drug-induced liver injury</strong> (anti-TB drugs, herbal supplements), autoimmune hepatitis, Wilson disease (low ALP:bilirubin ratio, haemolysis), Budd–Chiari, acute fatty liver of pregnancy and HELLP, ischaemic hepatitis, mushroom poisoning.</li>
    </ul>
    <h4>Laboratory monitoring</h4>
    <ul>
      <li><strong>INR and factor V</strong> — the most sensitive markers of synthetic function and prognosis; do not correct INR with plasma unless bleeding (it obscures the trend).</li>
      <li><strong>Hypoglycaemia</strong> — monitor glucose hourly to 2-hourly.</li>
      <li><strong>Lactate and arterial pH</strong>, <strong>arterial ammonia</strong> (<strong>&gt;200 µmol/L</strong> carries a high risk of <strong>cerebral oedema</strong>).</li>
      <li>Creatinine (hepatorenal syndrome, paracetamol nephrotoxicity), sodium, <strong>phosphate</strong> — a <strong>rising phosphate</strong> after paracetamol overdose predicts poor outcome (failure of regeneration), whereas hypophosphataemia accompanies regeneration.</li>
      <li><strong>Infection screening</strong> (blood, urine, sputum cultures) — sepsis is a major cause of death.</li>
      <li><strong>Rising AFP indicates regeneration</strong> and a better prognosis.</li>
    </ul>
    <h4>Prognostic scores</h4>
    <div class="table-wrap"><table>
      <tr><th>Score</th><th>Components</th><th>Use</th></tr>
      <tr><td><strong>King's College criteria</strong></td><td>Paracetamol: pH &lt;7.30, or INR &gt;6.5 + creatinine &gt;300 µmol/L + grade III/IV encephalopathy (lactate added). Non-paracetamol: INR &gt;6.5, or 3 of 5 (age, aetiology, jaundice-to-encephalopathy &gt;7 days, INR &gt;3.5, bilirubin &gt;300 µmol/L)</td><td>Need for emergency transplant in ALF</td></tr>
      <tr><td><strong>MELD-Na</strong></td><td><strong>Bilirubin, INR, creatinine, sodium</strong> (MELD 3.0 adds albumin and sex)</td><td>Chronic liver disease mortality; <strong>transplant listing priority</strong>; TIPS risk</td></tr>
      <tr><td><strong>Child–Pugh</strong></td><td><strong>Bilirubin, albumin, INR, ascites, encephalopathy</strong> (classes A–C)</td><td>Cirrhosis severity, surgical risk, drug dosing</td></tr>
    </table></div>
    <p>The laboratory supports these scores through standardised INR (ISI calibration) and creatinine; the INR used in MELD is not standardised for liver disease, an acknowledged limitation.</p>
  `,
  tip: "List the King's College criteria precisely and add the phosphate and AFP prognostic clues.",
  sources: ["C1", "C3"]
}
);
