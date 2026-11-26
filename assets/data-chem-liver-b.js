/* Clinical Chemistry — liver, pancreas & GI, part B (neonatal, viral, metabolic, GI) */
window.QBANK.push(
{
  id: "cc187", domain: "chem-liver", star: true,
  q: "Discuss the laboratory monitoring of neonatal jaundice and the prevention of kernicterus.",
  tags: ["neonatal jaundice", "bilirubin", "kernicterus"],
  keypoints: ["physiological jaundice","unconjugated hyperbilirubinaemia","UGT1A1","conjugated fraction","transcutaneous bilirubin","hour-specific nomogram","isoimmune haemolysis","direct antiglobulin test","G6PD deficiency","breastfeeding jaundice","breast milk jaundice","biliary atresia","bilirubin encephalopathy","kernicterus","phototherapy","exchange transfusion"],
  answer: `
    <h4>Why the neonate is vulnerable</h4>
    <p>Neonatal jaundice reflects an increased red-cell mass, a shorter red-cell lifespan, immature hepatic uptake and <strong>UGT1A1</strong> conjugation, and an active enterohepatic circulation. Most is <strong>physiological jaundice</strong>, appearing after the first day and resolving over one to two weeks, but the laboratory must separate it from pathological <strong>unconjugated hyperbilirubinaemia</strong> and from <strong>cholestasis</strong>.</p>
    <h4>Measurement and monitoring</h4>
    <ul>
      <li><strong>Total serum bilirubin</strong> by diazo or bilirubin oxidase; report the <strong>conjugated fraction</strong> — a raised conjugated fraction is never physiological and requires urgent evaluation.</li>
      <li><strong>Transcutaneous bilirubin</strong> is a screening tool; confirm with a serum level when the value approaches a treatment threshold, and do not rely on it during phototherapy.</li>
      <li>Plot the result on an <strong>hour-specific nomogram</strong> and repeat according to risk; gestational age, postnatal age in hours, haemolysis and feeding matter more than a single number.</li>
    </ul>
    <h4>Causes and red flags</h4>
    <p>Jaundice in the first 24 hours suggests <strong>isoimmune haemolysis</strong> (ABO or Rh; check <strong>direct antiglobulin test</strong>, blood group, haematocrit and reticulocytes), sepsis or <strong>G6PD deficiency</strong> — common in the Philippines and included in newborn screening. Cephalohaematoma, polycythaemia, bruising and delayed feeding add to the bilirubin load. <strong>Breastfeeding jaundice</strong> reflects insufficient intake in the first week, whereas <strong>breast milk jaundice</strong> is later and prolonged. Pale stools, dark urine or hepatomegaly point to cholestasis and <strong>biliary atresia</strong>, not physiological jaundice.</p>
    <h4>Preventing kernicterus</h4>
    <p>Unconjugated bilirubin crosses the immature blood–brain barrier; high levels cause <strong>bilirubin encephalopathy</strong> and chronic <strong>kernicterus</strong> (choreoathetoid cerebral palsy, sensorineural hearing loss, upward gaze palsy). Treatment follows age-in-hours thresholds: <strong>phototherapy</strong> for moderate hyperbilirubinaemia and <strong>exchange transfusion</strong> for severe or rapidly rising levels. In G6PD deficiency, avoid oxidant drugs and naphthalene; document the result and counsel the family.</p>
  `,
  tip: "Anchor the answer on the hour-specific nomogram, the conjugated fraction, and the red flags that make jaundice pathological.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc188", domain: "chem-liver",
  q: "Discuss alkaline phosphatase and gamma-glutamyl transferase: isoenzymes, interpretation and analytical pitfalls.",
  tags: ["ALP", "GGT", "isoenzymes"],
  keypoints: ["alkaline phosphatase","isoenzymes","cholestasis","biliary obstruction","Paget disease","osteomalacia","bone ALP is heat labile","placental ALP","gamma-glutamyl transferase","enzyme induction","macro-ALP","hypophosphatasia","zinc deficiency","intestinal ALP"],
  answer: `
    <h4>Sources and structure</h4>
    <p><strong>Alkaline phosphatase</strong> is a zinc-containing membrane metalloenzyme that hydrolyses phosphate esters at alkaline pH. The main serum sources are <strong>liver</strong> (canalicular membrane), <strong>bone</strong> (osteoblasts), placenta, intestine and kidney. Because all <strong>isoenzymes</strong> share a catalytic reaction, interpretation depends on recognising the source.</p>
    <h4>Liver versus bone</h4>
    <p>In <strong>cholestasis</strong>, bile acids induce ALP synthesis and solubilise canalicular membrane, so ALP rises out of proportion to bilirubin; this is an early and sensitive marker of <strong>biliary obstruction</strong> and of infiltrative disease. Bone ALP rises with osteoblast activity — growth spurts, fractures, <strong>Paget disease</strong>, <strong>osteomalacia</strong>, bone metastases and renal osteodystrophy. <strong>Bone ALP is heat labile</strong> (inactivated at about 56 °C) while liver ALP is more stable; wheat-germ lectin precipitation and electrophoresis separate them further. <strong>Placental ALP</strong> is heat stable and appears in the third trimester; the Regan isoenzyme is a tumour-associated placental form.</p>
    <h4>Gamma-glutamyl transferase</h4>
    <p><strong>Gamma-glutamyl transferase</strong> is a microsomal enzyme of biliary epithelium and hepatocytes. It rises in cholestasis and with <strong>enzyme induction</strong> by alcohol, phenytoin, phenobarbital and rifampicin. A raised ALP with a raised GGT supports a hepatobiliary source; a raised ALP with normal GGT favours bone. GGT is sensitive but nonspecific, and an isolated GGT is rarely diagnostic.</p>
    <h4>Pitfalls</h4>
    <ul>
      <li><strong>Macro-ALP</strong> — ALP bound to immunoglobulin, a benign cause of persistent isolated elevation; detect by polyethylene glycol precipitation or electrophoresis.</li>
      <li><strong>Intestinal ALP</strong> rises after a fatty meal and in secretors of blood group B; sample fasting where possible.</li>
      <li>Low ALP occurs in <strong>hypophosphatasia</strong>, <strong>zinc deficiency</strong>, hypothyroidism and after massive transfusion.</li>
      <li>Children and adolescents normally have higher ALP than adults; pregnancy raises ALP through the placental isoenzyme.</li>
    </ul>
  `,
  tip: "Pair every raised ALP with a GGT to decide liver versus bone, then name macro-ALP as the benign trap.",
  sources: ["C1", "C3"]
},
{
  id: "cc189", domain: "chem-liver", star: true,
  q: "Discuss the laboratory assessment of hepatic synthetic function, including albumin, coagulation factors and prognostic scores.",
  tags: ["albumin", "PT/INR", "synthetic function"],
  keypoints: ["albumin","prothrombin time/INR","factor V","factor VII","negative acute-phase protein","nephrotic syndrome","bromocresol green","bromocresol purple","transthyretin","pseudocholinesterase","Child–Pugh","MELD-Na","vitamin K"],
  answer: `
    <h4>What the tests measure</h4>
    <p>The liver synthesises <strong>albumin</strong>, most coagulation factors, binding proteins, complement and cholesterol. "Liver function tests" mainly reflect injury, so true <strong>synthetic function</strong> is assessed with albumin, <strong>prothrombin time/INR</strong>, factor V, bilirubin and, in advanced disease, cholesterol and glucose.</p>
    <h4>Albumin</h4>
    <p><strong>Albumin</strong> has a half-life of about 20 days, so it falls slowly and is a marker of chronic rather than acute failure. It is also reduced by inflammation (a <strong>negative acute-phase protein</strong>), malnutrition, <strong>nephrotic syndrome</strong>, protein-losing enteropathy and dilution. Methods matter: <strong>bromocresol green</strong> overestimates albumin in renal failure and at low concentrations, whereas <strong>bromocresol purple</strong> is more specific. A normal albumin does not exclude acute liver failure.</p>
    <h4>Coagulation</h4>
    <p><strong>Factor VII</strong> has the shortest half-life (about 6 hours), so <strong>PT/INR</strong> prolongs early and is the best acute marker. <strong>Factor V</strong> is not vitamin K dependent: it is low in hepatocellular failure but normal in vitamin K deficiency or cholestasis, which makes it useful for separating the two. A <strong>vitamin K</strong> trial corrects the INR in cholestasis but not in established hepatocellular failure. INR standardisation is imperfect in liver disease because thromboplastin sensitivity differs, so trends in one laboratory are more useful than comparisons across laboratories.</p>
    <h4>Other markers and scores</h4>
    <ul>
      <li><strong>Transthyretin</strong> (prealbumin) and <strong>pseudocholinesterase</strong> have short half-lives and fall early, but transthyretin is a negative acute-phase protein and pseudocholinesterase has genetic variants.</li>
      <li>Bilirubin, ammonia, glucose and cholesterol reflect advanced dysfunction.</li>
      <li><strong>Child–Pugh</strong> uses bilirubin, albumin, INR, ascites and encephalopathy; <strong>MELD-Na</strong> uses bilirubin, INR, creatinine and sodium for prognosis and transplant priority.</li>
      <li>Serial measurements, interpreted with the clinical picture, are more informative than any single result.</li>
    </ul>
  `,
  tip: "Separate chronic (albumin) from acute (factor VII/INR) markers, and use factor V to distinguish failure from vitamin K deficiency.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc190", domain: "chem-liver",
  q: "Discuss the serological and molecular diagnosis of hepatitis C infection, including monitoring of treatment.",
  tags: ["hepatitis C", "HCV RNA", "serology"],
  keypoints: ["anti-HCV","HCV RNA","reflex HCV RNA","HCV core antigen","sustained virological response","direct-acting antivirals","genotyping","cryoglobulinaemia","HCC surveillance","immunocompromised","SVR12","false-positive serology"],
  answer: `
    <h4>Virology and markers</h4>
    <p>Hepatitis C virus is a positive-sense RNA virus of the Flaviviridae family with marked genetic diversity (genotypes 1–6). <strong>Anti-HCV</strong> is the screening test; <strong>HCV RNA</strong> by real-time PCR confirms viraemia. RNA appears before antibody, so anti-HCV may be negative in early acute infection and in <strong>immunocompromised</strong> patients.</p>
    <h4>Serology and reflex testing</h4>
    <ul>
      <li>Screen with a third-generation anti-HCV immunoassay. A reactive result should be confirmed by <strong>HCV RNA</strong>, not by a second antibody test alone.</li>
      <li><strong>Reflex HCV RNA</strong> on every positive antibody avoids a separate visit and detects <strong>false-positive serology</strong> in low-prevalence groups.</li>
      <li><strong>HCV core antigen</strong> is an alternative to RNA where molecular testing is unavailable, but it is less sensitive at low viral loads.</li>
      <li>Antibody does not distinguish current from resolved infection; only RNA does.</li>
    </ul>
    <h4>Molecular monitoring</h4>
    <p>Quantitative HCV RNA (IU/mL) establishes baseline viraemia and monitors response. With pan-genotypic <strong>direct-acting antivirals</strong>, the goal is a <strong>sustained virological response</strong> — undetectable RNA at 12 weeks after treatment (<strong>SVR12</strong>). <strong>Genotyping</strong> is now needed mainly for retreatment or complex cases. Resistance-associated substitutions matter after failure of NS5A inhibitors. Baseline resistance testing is not routine for first-line pan-genotypic regimens, but it is considered after treatment failure.</p>
    <h4>Special situations</h4>
    <p>Patients with HIV, dialysis or transplantation may seroconvert late; use RNA. Chronic infection is associated with mixed <strong>cryoglobulinaemia</strong>, membranoproliferative glomerulonephritis and porphyria cutanea tarda. Cirrhosis persists after cure, so <strong>HCC surveillance</strong> continues. In the Philippines, HCV is less common than HBV but is concentrated in people who inject drugs; linkage to care and harm reduction are essential.</p>
  `,
  tip: "The two rules: a positive antibody needs RNA, and cure is defined by SVR12, not by a falling antibody titre.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc191", domain: "chem-liver",
  q: "Compare hepatitis A and hepatitis E: transmission, serological diagnosis and clinical significance in pregnancy.",
  tags: ["hepatitis A", "hepatitis E", "pregnancy"],
  keypoints: ["anti-HAV IgM","anti-HAV IgG","HAV RNA","anti-HEV IgM","HEV RNA","zoonotic","chronic hepatitis in immunosuppressed","fulminant hepatic failure","hepatitis A vaccine","ribavirin"],
  answer: `
    <h4>Hepatitis A</h4>
    <p>Hepatitis A is a non-enveloped RNA virus spread by the faecal–oral route, often through contaminated water, shellfish or food handled by an infectious person. After an incubation of a few weeks, <strong>anti-HAV IgM</strong> appears with the illness and is the diagnostic marker; <strong>anti-HAV IgG</strong> indicates past infection or vaccination and is not evidence of acute disease. <strong>HAV RNA</strong> is rarely needed. The illness is usually self-limited, but may be cholestatic or relapsing, and can be severe in older adults or those with chronic liver disease.</p>
    <h4>Hepatitis E</h4>
    <p>Hepatitis E is also a non-enveloped RNA virus. Genotypes 1 and 2 cause waterborne epidemics and are a major cause of acute viral hepatitis in South Asia; genotypes 3 and 4 are <strong>zoonotic</strong>, acquired from pork, game and contaminated products. Diagnosis rests on <strong>anti-HEV IgM</strong> and <strong>HEV RNA</strong>; IgG indicates past exposure. Genotype 3 can cause <strong>chronic hepatitis in immunosuppressed</strong> patients, including transplant recipients and people with HIV.</p>
    <h4>Why HEV matters in pregnancy</h4>
    <p>Genotype 1 infection in pregnancy carries a high risk of <strong>fulminant hepatic failure</strong>, especially in the third trimester, with maternal and fetal mortality. Pregnant women with acute hepatitis need urgent assessment of INR, bilirubin, glucose and mental state, and early referral to a liver unit.</p>
    <h4>Laboratory approach and prevention</h4>
    <ul>
      <li>Test anti-HAV IgM, anti-HEV IgM and hepatitis B/C markers in acute hepatitis; add HEV RNA when serology is negative but suspicion is high.</li>
      <li>ALT often exceeds 1000 U/L; monitor INR and bilirubin for severity. Exclude drug-induced liver injury, autoimmune hepatitis and Wilson disease.</li>
      <li>Both viruses are prevented by safe water, sanitation, hand hygiene and food safety; <strong>hepatitis A vaccine</strong> is available and post-exposure prophylaxis is recommended for close contacts.</li>
      <li>There is no specific antiviral for acute hepatitis A or E; chronic HEV in the immunosuppressed may respond to <strong>ribavirin</strong>.</li>
    </ul>
  `,
  tip: "Link HEV genotype 1 to severe disease in pregnancy — that is the detail that separates a good answer from a list.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc192", domain: "chem-liver",
  q: "Discuss serum protein electrophoresis and immunoglobulin patterns in liver disease.",
  tags: ["SPEP", "immunoglobulins", "cirrhosis"],
  keypoints: ["albumin","polyclonal hypergammaglobulinaemia","beta–gamma bridging","alpha-1 antitrypsin","alpha-fetoprotein","haptoglobin","ceruloplasmin","monoclonal band","immunofixation","serum free light chains","nephrotic syndrome"],
  answer: `
    <h4>The normal pattern</h4>
    <p>Serum protein electrophoresis separates proteins by charge into <strong>albumin</strong>, alpha-1, alpha-2, beta and gamma bands. The gamma band contains immunoglobulins, so its shape and width are the most useful part of the trace in liver disease. The trace is semi-quantitative; densitometry gives the relative percentage of each fraction, not absolute concentrations. <strong>Immunofixation</strong> and quantitative immunoglobulins are used to characterise abnormal bands.</p>
    <h4>Chronic liver disease</h4>
    <ul>
      <li>Albumin falls with reduced synthesis and inflammation.</li>
      <li><strong>Polyclonal hypergammaglobulinaemia</strong> is common: IgG rises in autoimmune hepatitis and cirrhosis, IgM in primary biliary cholangitis, and IgA in alcoholic liver disease.</li>
      <li><strong>Beta–gamma bridging</strong> — continuity between the beta and gamma bands — reflects polymeric IgA and is classically described in cirrhosis.</li>
      <li><strong>Alpha-1 antitrypsin</strong> deficiency produces a low alpha-1 band; confirm with serum concentration and phenotype.</li>
    </ul>
    <h4>Specific proteins worth recognising</h4>
    <p>A dense band between albumin and alpha-1 may be <strong>alpha-fetoprotein</strong>, suggesting hepatocellular carcinoma. Low <strong>haptoglobin</strong> reduces the alpha-2 band in haemolysis, while <strong>ceruloplasmin</strong> (alpha-2) is low in Wilson disease. In <strong>nephrotic syndrome</strong>, alpha-2-macroglobulin produces a tall alpha-2 band with low albumin and gamma.</p>
    <h4>Pitfalls and monoclonal bands</h4>
    <p>A <strong>monoclonal band</strong> is not caused by liver disease itself, but may accompany myeloma, AL amyloidosis or lymphoma; it requires immunofixation and <strong>serum free light chains</strong>. Low-level monoclonal gammopathy is common in older people and may be incidental. Dehydration and prolonged storage alter the trace. SPEP is not a screening test for liver disease: it is most useful when quantitative immunoglobulins, the alpha-1 band or a suspected paraprotein needs clarification.</p>
  `,
  tip: "Name the immunoglobulin that rises in each disease (IgG AIH, IgM PBC, IgA alcohol) and the beta–gamma bridge of cirrhosis.",
  sources: ["C1", "C3"]
},
{
  id: "cc193", domain: "chem-liver",
  q: "Explain transient elastography and other non-invasive tests for liver fibrosis, including their limitations.",
  tags: ["elastography", "fibrosis", "non-invasive"],
  keypoints: ["vibration-controlled transient elastography","liver stiffness","CAP","M probe","XL probe","interquartile range/median ratio","acute hepatitis","cholestasis","right heart failure","FIB-4","ELF test","magnetic resonance elastography","liver biopsy"],
  answer: `
    <h4>Principle</h4>
    <p><strong>Vibration-controlled transient elastography</strong> generates a low-frequency shear wave and measures its velocity through the liver; velocity is converted to <strong>liver stiffness</strong> in kilopascals. Stiffer tissue conducts shear waves faster, so stiffness correlates with fibrosis. <strong>CAP</strong> (controlled attenuation parameter) estimates steatosis from ultrasound attenuation and is reported alongside stiffness.</p>
    <h4>Performing and validating a measurement</h4>
    <ul>
      <li>Fast for a few hours; food and congestion transiently increase stiffness.</li>
      <li>Use the probe appropriate to body habitus — the <strong>M probe</strong> for most adults, the <strong>XL probe</strong> for obesity — and obtain multiple valid measurements.</li>
      <li>Accept the result only when the <strong>interquartile range/median ratio</strong> is acceptable; a wide spread means an unreliable study.</li>
      <li>Record the number of valid shots and the operator's experience.</li>
    </ul>
    <h4>Confounders</h4>
    <p>Stiffness is not specific for fibrosis. <strong>Acute hepatitis</strong> with high ALT, <strong>cholestasis</strong>, <strong>right heart failure</strong> and hepatic congestion, ascites, obesity and a narrow intercostal space all raise readings. Inflammation can produce a false "cirrhosis" result during a flare, so repeat after transaminases settle. Conversely, macronodular cirrhosis may give lower readings than the true fibrosis stage suggests. Cut-offs are aetiology-specific and probe-specific, so a single universal threshold should not be applied.</p>
    <h4>Role in the pathway</h4>
    <p>Elastography is a second-line test after <strong>FIB-4</strong> or the <strong>ELF test</strong> in chronic liver disease. It helps rule out advanced fibrosis, supports referral, and can monitor response to weight loss or antiviral treatment. <strong>Magnetic resonance elastography</strong> is more precise but less available. Elastography reduces but does not eliminate the need for <strong>liver biopsy</strong>, which remains the reference standard when results are discordant or the cause is unclear.</p>
  `,
  tip: "Give the confounders that falsely raise stiffness — inflammation, cholestasis and congestion — then say why biopsy is still sometimes needed.",
  sources: ["C1", "C3"]
},
{
  id: "cc194", domain: "chem-liver", star: true,
  q: "Discuss the laboratory investigation of neonatal cholestasis and inherited liver disease in children.",
  tags: ["neonatal cholestasis", "biliary atresia", "paediatric"],
  keypoints: ["conjugated bilirubin","cholestasis","acholic stools","biliary atresia","hepatoportoenterostomy","cholangiogram","alpha-1 antitrypsin deficiency","tyrosinaemia type 1","galactosaemia","cystic fibrosis","PFIC","Alagille syndrome","vitamin K"],
  answer: `
    <h4>Cholestasis is not physiological</h4>
    <p>Neonatal jaundice is usually unconjugated, but a raised <strong>conjugated bilirubin</strong> indicates <strong>cholestasis</strong> and is a medical emergency. The infant may have pale <strong>acholic stools</strong>, dark urine, hepatomegaly and failure to thrive. The first step is fractionation of bilirubin, then a structured search for treatable causes.</p>
    <h4>Biliary atresia</h4>
    <p><strong>Biliary atresia</strong> is an inflammatory obliteration of the extrahepatic bile ducts and the commonest surgically correctable cause of neonatal cholestasis. Age at surgery is the strongest predictor of outcome, so early <strong>hepatoportoenterostomy</strong> (Kasai operation) improves bile drainage and native liver survival; delay costs lives. Ultrasound after fasting, hepatobiliary scintigraphy, liver biopsy and intraoperative <strong>cholangiogram</strong> establish the diagnosis. GGT is typically high, but a normal GGT does not exclude the disease.</p>
    <h4>Inherited and metabolic causes</h4>
    <ul>
      <li><strong>Alpha-1 antitrypsin deficiency</strong> — low alpha-1 band, phenotype on serum.</li>
      <li><strong>Tyrosinaemia type 1</strong> — raised succinylacetone and tyrosine; treatable with nitisinone.</li>
      <li><strong>Galactosaemia</strong> — reducing substances, galactose-1-phosphate uridyltransferase; screened in the expanded Philippine newborn panel.</li>
      <li><strong>Cystic fibrosis</strong> — sweat chloride and CFTR testing; meconium ileus in the newborn.</li>
      <li><strong>PFIC</strong> (low GGT in types 1 and 2, high in type 3) and <strong>Alagille syndrome</strong> (high GGT) — bile acids and genetic testing.</li>
      <li>Hypothyroidism, sepsis, parenteral nutrition and CMV — screen and treat.</li>
    </ul>
    <h4>Laboratory approach</h4>
    <p>Request conjugated bilirubin, ALT, ALP, GGT, albumin, INR, glucose, ammonia, lactate, amino acids, urine organic acids, succinylacetone, alpha-1 antitrypsin, sweat chloride, thyroid function, cultures and viral PCR. Give <strong>vitamin K</strong> and fat-soluble vitamins, and involve paediatric hepatology early. A cholestatic infant should never be assumed to have breast-milk jaundice.</p>
  `,
  tip: "Open with 'conjugated jaundice is surgical until excluded' and name biliary atresia plus the treatable metabolic disorders.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc195", domain: "chem-liver",
  q: "Discuss the laboratory diagnosis and monitoring of alcohol-related liver disease, including alcohol biomarkers.",
  tags: ["alcohol", "AST:ALT", "biomarkers"],
  keypoints: ["steatosis","alcoholic hepatitis","AUDIT","AST:ALT ratio greater than 2","GGT","macrocytosis","thrombocytopenia","ferritin","carbohydrate-deficient transferrin","phosphatidylethanol","ethyl glucuronide","Maddrey discriminant function","Mallory–Denk bodies"],
  answer: `
    <h4>Spectrum and clinical clues</h4>
    <p>Alcohol-related liver disease ranges from <strong>steatosis</strong> to <strong>alcoholic hepatitis</strong>, fibrosis and cirrhosis. A patient may present with an incidental high GGT, decompensated cirrhosis, or jaundice and fever. The history is often unreliable, so laboratory markers and a structured questionnaire (<strong>AUDIT</strong>) support the diagnosis. The threshold for harm is debated, but the pattern of drinking and the total lifetime dose both matter.</p>
    <h4>The classical pattern</h4>
    <ul>
      <li><strong>AST:ALT ratio greater than 2</strong>, with transaminases usually below 300 U/L. Mitochondrial AST release and pyridoxine deficiency reduce ALT.</li>
      <li><strong>GGT</strong> is sensitive but nonspecific; it also rises with enzyme-inducing drugs and biliary disease.</li>
      <li><strong>Macrocytosis</strong> reflects folate deficiency and direct marrow toxicity.</li>
      <li><strong>Thrombocytopenia</strong> suggests portal hypertension and hypersplenism.</li>
      <li><strong>Ferritin</strong> is often high and transferrin saturation may rise; exclude haemochromatosis with HFE testing.</li>
    </ul>
    <h4>Alcohol biomarkers</h4>
    <p><strong>Carbohydrate-deficient transferrin</strong> reflects sustained heavy drinking over weeks; <strong>phosphatidylethanol</strong> is a direct alcohol metabolite with good sensitivity and specificity over a similar window; <strong>ethyl glucuronide</strong> in urine detects recent drinking over about three days. GGT and MCV are cheap but insensitive. No biomarker proves causality in an individual patient — they support a history.</p>
    <h4>Alcoholic hepatitis and complications</h4>
    <p>Severe alcoholic hepatitis presents with recent jaundice, tender hepatomegaly, neutrophilia and a prolonged INR. The <strong>Maddrey discriminant function</strong> and MELD estimate severity. Exclude infection, gastrointestinal bleeding, pancreatitis, hyponatraemia, hypoglycaemia and Wernicke encephalopathy. Histology shows steatosis, ballooning, <strong>Mallory–Denk bodies</strong> and neutrophilic infiltration. Abstinence, nutrition and treatment of complications remain the foundation; corticosteroids are used in selected severe cases.</p>
  `,
  tip: "Quote AST:ALT greater than 2 and then add the biomarker windows — CDT, PEth and EtG each answer a different question.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc196", domain: "chem-liver", star: true,
  q: "Discuss drug-induced liver injury: mechanisms, biochemical phenotypes, causality assessment and prevention.",
  tags: ["DILI", "Hy's law", "RUCAM"],
  keypoints: ["intrinsic","idiosyncratic","R ratio","hepatocellular","cholestatic","mixed","Hy's law","eosinophilia","anti-tuberculosis drugs","RUCAM","rechallenge is contraindicated","checkpoint inhibitors"],
  answer: `
    <h4>Mechanisms and phenotypes</h4>
    <p><strong>Drug-induced liver injury</strong> is either <strong>intrinsic</strong> (predictable, dose-related, as with paracetamol) or <strong>idiosyncratic</strong> (unpredictable, immune or metabolic). The biochemical pattern is classified by the <strong>R ratio</strong> as <strong>hepatocellular</strong>, <strong>cholestatic</strong> or <strong>mixed</strong>. Hepatotoxicity may be direct, through reactive metabolites, or immune-mediated; the pattern often reflects the site of injury, with canalicular transporters giving cholestasis and hepatocytes giving hepatocellular injury. Immune-mediated reactions may bring fever, rash and <strong>eosinophilia</strong>.</p>
    <h4>Hy's law and severity</h4>
    <p><strong>Hy's law</strong> describes hepatocellular injury with jaundice — a marked ALT rise plus a raised bilirubin in the absence of biliary obstruction — which predicts a substantial risk of severe injury, transplantation or death. It is a warning sign, not a diagnosis. Rising INR, encephalopathy, hypoglycaemia and acidosis indicate acute liver failure.</p>
    <h4>Common agents in the Philippines</h4>
    <ul>
      <li><strong>Anti-tuberculosis drugs</strong> — isoniazid, rifampicin and pyrazinamide; monitor at baseline and when symptoms appear.</li>
      <li><strong>Amoxicillin–clavulanate</strong> — a common cause of cholestatic DILI.</li>
      <li><strong>Herbal and dietary supplements</strong> — often unlabelled and under-reported.</li>
      <li>Anticonvulsants, methotrexate, amiodarone, NSAIDs and <strong>checkpoint inhibitors</strong> (immune-mediated hepatitis).</li>
    </ul>
    <h4>Assessment and causality</h4>
    <p>Establish the temporal relationship, stop all non-essential drugs, and exclude viral hepatitis (A–E), alcohol, autoimmune hepatitis, Wilson disease, haemochromatosis and biliary obstruction by imaging. Document every prescription drug, over-the-counter product and supplement, with start dates and duration. The <strong>RUCAM</strong> score structures causality but is imperfect. <strong>Rechallenge is contraindicated</strong> after a severe reaction. Management is withdrawal of the culprit, supportive care, and targeted therapy for paracetamol or immune-mediated disease; transplant assessment for acute liver failure.</p>
  `,
  tip: "Use Hy's law as the severity warning and RUCAM as the causality framework, then name the local anti-TB drugs.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc197", domain: "chem-liver",
  q: "Discuss liver disease in pregnancy: normal changes, intrahepatic cholestasis, HELLP and acute fatty liver.",
  tags: ["pregnancy", "ICP", "HELLP"],
  keypoints: ["albumin","alkaline phosphatase","ALT and AST","intrahepatic cholestasis of pregnancy","serum bile acids","HELLP","haemolysis","LDH","haptoglobin","acute fatty liver of pregnancy","pre-eclampsia","hepatitis E"],
  answer: `
    <h4>Normal physiological changes</h4>
    <p>Pregnancy dilutes <strong>albumin</strong>, raises <strong>alkaline phosphatase</strong> through the placental isoenzyme, and increases fibrinogen and most clotting factors. <strong>ALT and AST</strong> remain within the non-pregnant range. Interpreting liver tests without pregnancy-specific reference intervals causes false reassurance or false alarm. These changes are adaptations to increased plasma volume and placental production.</p>
    <h4>Intrahepatic cholestasis of pregnancy</h4>
    <p><strong>Intrahepatic cholestasis of pregnancy</strong> presents in the second half of pregnancy with pruritus, especially of the palms and soles, and raised fasting <strong>serum bile acids</strong>; ALT may rise and bilirubin is usually only mildly elevated. It is a diagnosis of exclusion. The main fetal risks are preterm labour, meconium staining and stillbirth, which increase with bile acid severity. Ursodeoxycholic acid relieves symptoms; timing of delivery is decided by the obstetric team.</p>
    <h4>HELLP and acute fatty liver</h4>
    <p><strong>HELLP</strong> — <strong>haemolysis</strong>, elevated liver enzymes and low platelets — may occur without hypertension or proteinuria. Haemolysis is shown by schistocytes, raised <strong>LDH</strong>, low <strong>haptoglobin</strong> and indirect bilirubin. <strong>Acute fatty liver of pregnancy</strong> is rarer and more severe: nausea, abdominal pain, hypoglycaemia, coagulopathy, raised ammonia and renal failure. <strong>Pre-eclampsia</strong> raises uric acid and creatinine and may progress to HELLP.</p>
    <h4>Laboratory approach</h4>
    <ul>
      <li>Platelet count, blood film, LDH, haptoglobin, bilirubin, AST/ALT, bile acids, creatinine, uric acid and coagulation screen.</li>
      <li>Glucose, ammonia, lactate and renal function if acute fatty liver is suspected.</li>
      <li>Exclude acute viral hepatitis (especially <strong>hepatitis E</strong>), gallstones, pancreatitis and drug injury.</li>
      <li>Delivery is definitive for HELLP and acute fatty liver; supportive care and multidisciplinary involvement are essential.</li>
    </ul>
  `,
  tip: "State the normal pregnancy changes first, then contrast ICP (bile acids), HELLP (haemolysis and platelets) and AFLP (hypoglycaemia and ammonia).",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc198", domain: "chem-liver",
  q: "Discuss gut hormones and the laboratory investigation of pancreatic neuroendocrine tumours.",
  tags: ["gut hormones", "NET", "chromogranin A"],
  keypoints: ["gastrin","cholecystokinin","secretin","glucagon-like peptide-1","neuroendocrine tumours","gastrinoma","carcinoid","5-HIAA","VIPoma","insulinoma","chromogranin A","proton pump inhibitor","MEN1","gallium-DOTATATE PET"],
  answer: `
    <h4>The gut hormones</h4>
    <p>Gut hormones coordinate secretion, motility and appetite: <strong>gastrin</strong> from G cells, <strong>cholecystokinin</strong>, <strong>secretin</strong>, glucose-dependent insulinotropic peptide, <strong>glucagon-like peptide-1</strong>, motilin and ghrelin. Motilin drives the migrating motor complex, while ghrelin stimulates appetite. <strong>Neuroendocrine tumours</strong> may secrete one or more of these and produce characteristic syndromes.</p>
    <h4>Functional syndromes</h4>
    <ul>
      <li><strong>Gastrinoma</strong> (Zollinger–Ellison) — refractory ulcers, diarrhoea, high fasting gastrin; secretin stimulation supports the diagnosis.</li>
      <li><strong>Carcinoid</strong> — flushing, diarrhoea and bronchospasm; measure 24-hour urine <strong>5-HIAA</strong>.</li>
      <li><strong>VIPoma</strong> — watery diarrhoea, hypokalaemia and achlorhydria; raised vasoactive intestinal peptide.</li>
      <li>Glucagonoma — necrolytic migratory erythema, diabetes and weight loss.</li>
      <li><strong>Insulinoma</strong> — Whipple triad with inappropriate insulin and C-peptide during hypoglycaemia.</li>
    </ul>
    <h4>Laboratory measurement</h4>
    <p><strong>Chromogranin A</strong> is a general NET marker but rises with <strong>proton pump inhibitor</strong> use, renal failure and inflammation. 5-HIAA is affected by serotonin-rich foods (bananas, pineapple, walnuts) and by drugs. Gastrin is raised by PPI therapy, Helicobacter pylori, atrophic gastritis and renal failure, so samples should be taken fasting and, where safe, after stopping acid suppression. Peptides are labile: collect on ice, use protease inhibitors where specified, and separate promptly. LC-MS/MS improves specificity for several analytes. Symptoms may be episodic, so a single normal peptide level does not exclude a functional tumour, and provocative tests are reserved for specialist centres.</p>
    <h4>Localisation and genetics</h4>
    <p>Biochemical confirmation is followed by cross-sectional imaging and functional imaging such as <strong>gallium-DOTATATE PET</strong>. About a quarter of pancreatic NETs occur in <strong>MEN1</strong>, so assess parathyroid and pituitary disease and offer genetic testing. CA 19-9 is not a NET marker.</p>
  `,
  tip: "Name the syndrome-hormone pair and the PPI trap for gastrin and chromogranin A.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc199", domain: "chem-liver",
  q: "Discuss faecal biomarkers in gastroenterology, with emphasis on faecal calprotectin.",
  tags: ["calprotectin", "IBD", "faecal biomarkers"],
  keypoints: ["faecal calprotectin","inflammatory bowel disease","irritable bowel syndrome","faecal lactoferrin","faecal immunochemical test","faecal elastase-1","M2-pyruvate kinase","infection","coeliac disease","colorectal cancer"],
  answer: `
    <h4>Faecal calprotectin</h4>
    <p><strong>Faecal calprotectin</strong> is a calcium-binding protein (S100A8/A9) released by neutrophils. It is stable in stool, resists bacterial degradation and correlates with the number of neutrophils migrating into the gut. It is the best non-invasive test for separating <strong>inflammatory bowel disease</strong> from <strong>irritable bowel syndrome</strong>: a low result makes IBD unlikely, while a high result supports inflammation and warrants endoscopy. It is also used to triage patients before colonoscopy and to monitor disease activity over time.</p>
    <h4>Other faecal tests</h4>
    <ul>
      <li><strong>Faecal lactoferrin</strong> — another neutrophil protein; similar performance to calprotectin.</li>
      <li><strong>Faecal immunochemical test</strong> — detects human haemoglobin for colorectal cancer screening and triage; it is not an inflammation marker.</li>
      <li><strong>Faecal elastase-1</strong> — pancreatic exocrine insufficiency.</li>
      <li>Faecal fat — steatorrhoea; quantitative collection is cumbersome.</li>
      <li><strong>M2-pyruvate kinase</strong> — a newer marker of colorectal neoplasia and inflammation.</li>
    </ul>
    <h4>Interpretation</h4>
    <p>Calprotectin is not specific for IBD. It rises in <strong>infection</strong>, <strong>coeliac disease</strong>, diverticulitis, <strong>colorectal cancer</strong>, NSAID enteropathy and pouchitis. Values are assay-dependent, so the same method should be used for serial monitoring. A normal result does not exclude proximal small-bowel disease. In IBD it tracks endoscopic activity and predicts relapse, and it is useful in children to reduce invasive procedures.</p>
    <h4>Pre-analytical points</h4>
    <p>Collect a small, representative sample in the supplied container, avoid contamination with water or urine, and return it promptly. Stability differs between assays, so follow the manufacturer's storage instructions. Faecal calprotectin should always be interpreted with the clinical picture, stool culture and imaging rather than as a stand-alone diagnosis.</p>
  `,
  tip: "Use calprotectin to exclude IBD in IBS-like symptoms, then list the non-IBD causes that raise it.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc200", domain: "chem-liver",
  q: "Discuss tumour markers used in hepatobiliary and gastrointestinal disease, including their limitations.",
  tags: ["tumour markers", "AFP", "CA 19-9"],
  keypoints: ["alpha-fetoprotein","hepatocellular carcinoma","ultrasound","CA 19-9","Lewis antigen","carcinoembryonic antigen","CA 125","chromogranin A","calcitonin","thyroglobulin"],
  answer: `
    <h4>Alpha-fetoprotein</h4>
    <p><strong>Alpha-fetoprotein</strong> is the main serum marker for <strong>hepatocellular carcinoma</strong>. It is used with <strong>ultrasound</strong> for surveillance in patients with cirrhosis or chronic hepatitis B, and it supports diagnosis when imaging is typical. It also rises in pregnancy, germ-cell tumours and during hepatitis flares, and a normal level does not exclude HCC. Small tumours may be AFP-negative.</p>
    <h4>CA 19-9 and CEA</h4>
    <ul>
      <li><strong>CA 19-9</strong> — pancreatic and biliary adenocarcinoma; useful for prognosis and monitoring after resection. It is not a screening test. Levels rise in cholangitis, pancreatitis and cholestasis.</li>
      <li><strong>Lewis antigen</strong> — some people are Lewis-negative and cannot express CA 19-9, giving false-negative results.</li>
      <li><strong>Carcinoembryonic antigen</strong> — colorectal cancer monitoring, not screening; raised in smokers, IBD, cirrhosis and pancreatitis.</li>
    </ul>
    <h4>Other markers</h4>
    <p><strong>CA 125</strong> is used in ovarian cancer but rises in ascites, cirrhosis, endometriosis and menstruation. <strong>Chromogranin A</strong> supports neuroendocrine tumours but is confounded by proton pump inhibitors and renal failure. <strong>Calcitonin</strong> and CEA are markers of medullary thyroid carcinoma. <strong>Thyroglobulin</strong> monitors differentiated thyroid cancer only when anti-thyroglobulin antibodies are measured in parallel.</p>
    <h4>Principles of use</h4>
    <p>Tumour markers have low sensitivity in early disease and poor specificity, so they are not diagnostic on their own. Their value lies in monitoring response, detecting recurrence and, for AFP, supporting surveillance in high-risk groups. Interpretation requires the pre-test probability, the assay method and the trend over time. Serial measurements are more useful than a single value, and assays are not interchangeable between laboratories. In the Philippines, where HBV-related HCC is common, AFP plus ultrasound is the practical surveillance pair.</p>
  `,
  tip: "Stress that markers monitor rather than diagnose, and give the Lewis-negative and PPI pitfalls.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc201", domain: "chem-liver",
  q: "Discuss the laboratory analysis of ascitic fluid, including the serum-ascites albumin gradient and spontaneous bacterial peritonitis.",
  tags: ["ascites", "SAAG", "SBP"],
  keypoints: ["serum–ascites albumin gradient","portal hypertension","spontaneous bacterial peritonitis","polymorphonuclear cell count","culture-negative neutrocytic ascites","blood culture bottles","ADA","triglyceride","amylase","bilirubin"],
  answer: `
    <h4>Serum–ascites albumin gradient</h4>
    <p>Ascitic fluid is analysed together with a same-day serum sample. The <strong>serum–ascites albumin gradient</strong> (SAAG = serum albumin minus ascitic albumin) reflects portal pressure. A gradient of 1.1 g/dL or more indicates <strong>portal hypertension</strong> — cirrhosis, cardiac failure, Budd–Chiari; a lower gradient suggests a non-portal cause such as peritoneal tuberculosis, carcinomatosis, pancreatic ascites or nephrotic syndrome. Total protein helps: it is high in cardiac ascites and low in cirrhosis.</p>
    <h4>Spontaneous bacterial peritonitis</h4>
    <p><strong>Spontaneous bacterial peritonitis</strong> is diagnosed by an ascitic <strong>polymorphonuclear cell count</strong> of 250/µL or more, even when culture is negative (<strong>culture-negative neutrocytic ascites</strong>). Inoculate ascitic fluid into <strong>blood culture bottles</strong> at the bedside to improve yield. Secondary peritonitis suggests a surgical source when multiple organisms grow, protein is high, glucose is low and LDH is high. Always send a paired serum sample for albumin, glucose and LDH. Send the fluid in plain sterile containers, analyse it promptly, and remember that cell counts degrade with delay.</p>
    <h4>Other tests</h4>
    <ul>
      <li>Cytology for malignant cells; <strong>ADA</strong>, AFB and TB PCR for tuberculous peritonitis.</li>
      <li><strong>Triglyceride</strong> for chylous ascites; <strong>amylase</strong> for pancreatic ascites; <strong>bilirubin</strong> for a biliary leak.</li>
      <li>Gram stain, culture and, where indicated, fungal and mycobacterial culture.</li>
    </ul>
    <h4>Clinical use</h4>
    <p>Diagnostic paracentesis is safe even with coagulopathy; use a site away from scars and the inferior epigastric vessels. In cirrhosis, SBP can precipitate renal failure and encephalopathy, so prompt treatment and follow-up fluid analysis matter. Recurrent ascites may need a permanent catheter or shunt, but only after excluding infection.</p>
  `,
  tip: "SAAG for the cause, PMN count for SBP, and bedside blood culture bottles for yield — three marks in three sentences.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc202", domain: "chem-liver",
  q: "Discuss the laboratory diagnosis and monitoring of Wilson disease.",
  tags: ["Wilson disease", "copper", "ceruloplasmin"],
  keypoints: ["ATP7B","ceruloplasmin","free copper","24-hour urinary copper","hepatic copper","Kayser–Fleischer rings","Coombs-negative haemolytic anaemia","ALP:bilirubin ratio","Leipzig score","penicillamine","trientine","zinc"],
  answer: `
    <h4>Pathogenesis</h4>
    <p><strong>Wilson disease</strong> is autosomal recessive, caused by variants in <strong>ATP7B</strong>, a copper-transporting ATPase. Impaired biliary copper excretion and failure to load copper onto <strong>ceruloplasmin</strong> cause copper accumulation in the liver, basal ganglia, cornea and kidney. Presentation ranges from paediatric hepatitis to cirrhosis, neuropsychiatric disease and acute haemolysis.</p>
    <h4>Biochemical tests</h4>
    <ul>
      <li><strong>Ceruloplasmin</strong> is usually low but may be normal in active liver disease and is raised as an acute-phase protein; interpret it with the copper studies rather than alone.</li>
      <li>Serum copper is low; calculated <strong>free copper</strong> is raised.</li>
      <li><strong>24-hour urinary copper</strong> is increased; a penicillamine challenge is used in children but is not validated in adults.</li>
      <li><strong>Hepatic copper</strong> on biopsy is the strongest single test when the diagnosis is uncertain.</li>
      <li><strong>Kayser–Fleischer rings</strong> on slit-lamp examination support the diagnosis, especially with neurological disease.</li>
      <li><strong>Coombs-negative haemolytic anaemia</strong> with a low <strong>ALP:bilirubin ratio</strong> is a classic acute presentation.</li>
    </ul>
    <h4>Diagnostic pitfalls</h4>
    <p>Low ceruloplasmin also occurs in protein-losing states and severe liver disease; urinary copper collection is prone to contamination. The <strong>Leipzig score</strong> combines clinical, biochemical, histological and genetic findings. ATP7B sequencing confirms the diagnosis and enables family screening. A normal ceruloplasmin does not exclude Wilson disease, and every young patient with unexplained liver disease should be tested. Interpretation is especially difficult in children.</p>
    <h4>Monitoring</h4>
    <p>Treatment aims to remove copper and prevent reaccumulation. <strong>Penicillamine</strong> or <strong>trientine</strong> chelate copper; <strong>zinc</strong> blocks intestinal absorption. Monitor urinary copper, liver tests, blood counts and adherence. Liver transplantation is curative for fulminant failure. Family screening is essential because presymptomatic relatives benefit from early treatment.</p>
  `,
  tip: "Never exclude Wilson on a normal ceruloplasmin; combine urinary copper, slit lamp and the Leipzig score.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc203", domain: "chem-liver",
  q: "Discuss the laboratory diagnosis of cystic fibrosis, including sweat testing, genetics and newborn screening.",
  tags: ["cystic fibrosis", "sweat chloride", "CFTR"],
  keypoints: ["cystic fibrosis","CFTR","sweat chloride","pilocarpine iontophoresis","CFTR modulators","immunoreactive trypsinogen","faecal elastase-1","nasal potential difference","OGTT","pancreatic insufficiency"],
  answer: `
    <h4>Pathophysiology</h4>
    <p><strong>Cystic fibrosis</strong> is autosomal recessive, caused by variants in the CFTR gene. The <strong>CFTR</strong> protein is a chloride and bicarbonate channel; dysfunction produces thick, dehydrated secretions in the lungs, pancreas, gut, liver and vas deferens. <strong>Pancreatic insufficiency</strong> causes steatorrhoea and fat-soluble vitamin deficiency, and the biliary tree may develop focal cirrhosis.</p>
    <h4>Sweat chloride</h4>
    <p>The <strong>sweat chloride</strong> test remains the cornerstone. <strong>Pilocarpine iontophoresis</strong> stimulates sweating, and a validated laboratory measures chloride in an adequate sweat sample. A value of 60 mmol/L or more is diagnostic in the right clinical context; 30–59 mmol/L is intermediate and requires further testing; below 30 makes CF unlikely. False results occur with poor collection, evaporation, malnutrition, oedema and skin disease. The test should be repeated or followed by genetic testing when results are discordant.</p>
    <h4>CFTR genotyping</h4>
    <p>Genetic testing identifies two CF-causing variants, confirms the diagnosis and informs eligibility for <strong>CFTR modulators</strong>. Panels cover common variants, but rare variants require sequencing or deletion/duplication analysis. Genotype does not always predict pancreatic or pulmonary severity. Carrier screening and genetic counselling are offered to affected families.</p>
    <h4>Newborn screening and other tests</h4>
    <ul>
      <li><strong>Immunoreactive trypsinogen</strong> on a dried blood spot, followed by DNA or a second IRT.</li>
      <li><strong>Faecal elastase-1</strong> for pancreatic insufficiency; low values support the diagnosis.</li>
      <li><strong>Nasal potential difference</strong> in equivocal cases.</li>
      <li>Annual <strong>OGTT</strong> for CF-related diabetes; liver tests and ultrasound for CF liver disease.</li>
    </ul>
    <p>In the Philippines, CF is uncommon but recognised; access to sweat testing and genetics is limited, so clinical recognition and supportive care remain critical.</p>
  `,
  tip: "Give the three diagnostic routes — sweat chloride, two CF-causing variants, or abnormal nasal potential difference.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc204", domain: "chem-liver",
  q: "Discuss the laboratory diagnosis of Helicobacter pylori infection and confirmation of eradication.",
  tags: ["H. pylori", "urea breath test", "stool antigen"],
  keypoints: ["Helicobacter pylori","MALT lymphoma","urea breath test","stool antigen","serology","proton pump inhibitors","rapid urease test","culture","clarithromycin resistance","bismuth"],
  answer: `
    <h4>Why it matters</h4>
    <p><strong>Helicobacter pylori</strong> causes chronic gastritis and is strongly associated with peptic ulcer disease, gastric adenocarcinoma and <strong>MALT lymphoma</strong>. Diagnosis must distinguish active infection from past exposure, and eradication must be confirmed when it matters.</p>
    <h4>Non-invasive tests</h4>
    <ul>
      <li><strong>Urea breath test</strong> — labelled carbon dioxide from bacterial urease; highly sensitive and specific for active infection.</li>
      <li><strong>Stool antigen</strong> — detects active infection; useful in children and for post-treatment checks.</li>
      <li><strong>Serology</strong> — indicates exposure only, cannot confirm eradication, and is unreliable in low-prevalence populations.</li>
    </ul>
    <p><strong>Proton pump inhibitors</strong> suppress the organism and cause false negatives, so stop them for about two weeks before testing; antibiotics and bismuth should be stopped for about four weeks. Upper gastrointestinal bleeding also reduces sensitivity.</p>
    <h4>Invasive tests</h4>
    <p>At endoscopy, the <strong>rapid urease test</strong>, histology and culture are available. Histology with special stains confirms infection and assesses gastritis and malignancy. <strong>Culture</strong> allows susceptibility testing, particularly for <strong>clarithromycin resistance</strong>, but is slow and technically demanding. PCR on biopsy can detect resistance mutations more rapidly.</p>
    <h4>Clinical use in the Philippines</h4>
    <p>Prevalence is high, so a test-and-treat strategy is often used for dyspepsia in younger patients without alarm features. Eradication should be confirmed with a urea breath test or stool antigen at least four weeks after therapy and off PPI. Causes of false-negative results include PPI use, recent antibiotics, atrophic gastritis and gastric cancer. Avoid testing during or shortly after empirical eradication therapy, and document the method used because assays differ in performance. <strong>Bismuth</strong>-containing quadruple therapy is used where resistance is common.</p>
  `,
  tip: "Separate active-infection tests (breath, stool) from exposure (serology), and always mention PPI withdrawal.",
  sources: ["C1", "C3", "C2"]
}
);
