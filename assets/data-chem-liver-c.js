/* Clinical Chemistry — liver, pancreas & GI, part C (Philippine practice, DILI, autoimmune, metabolic, neonatal, pancreatic) */
window.QBANK.push(
{
  id: "cc291", domain: "chem-liver", star: true,
  q: "Discuss hepatitis B in the Philippines: burden, vaccination strategy and the laboratory monitoring of vaccine protection.",
  tags: ["hepatitis B", "vaccination", "Philippines"],
  keypoints: ["HBsAg prevalence","perinatal transmission","birth-dose vaccination","Expanded Program on Immunization","hepatitis B immunoglobulin","anti-HBs 10 mIU/mL","anti-HBc not vaccine-induced","isolated anti-HBc","HBV DNA","quantitative HBsAg","ALT","transient elastography","antenatal HBsAg screening","adolescent catch-up"],
  answer: `
    <h4>Burden and transmission</h4>
    <p>The Philippines lies in the Western Pacific, where <strong>hepatitis B</strong> is the dominant cause of cirrhosis and <strong>hepatocellular carcinoma</strong>. Older surveys found <strong>HBsAg</strong> in about one in ten adults or more; recent estimates are lower, roughly 5–7%, but infection remains concentrated in older adults, people who inject drugs, men who have sex with men, dialysis patients and households with an index case. Perinatal and early childhood transmission drive chronicity: the younger the infection, the higher the risk of chronic carriage.</p>
    <h4>Prevention</h4>
    <ul>
      <li><strong>Birth-dose vaccination</strong> within 24 hours, then pentavalent hepatitis B at 6, 10 and 14 weeks under the Expanded Program on Immunization.</li>
      <li>Infants of HBsAg-positive mothers also need <strong>hepatitis B immunoglobulin</strong> within 12 hours where available; coverage of immunoglobulin is uneven.</li>
      <li>Adolescent and adult catch-up, health-worker vaccination, and anti-HBs testing for high-risk workers.</li>
      <li>Antenatal <strong>HBsAg screening</strong>, safe injection, blood safety and harm reduction.</li>
    </ul>
    <h4>Laboratory monitoring</h4>
    <p><strong>Anti-HBs</strong> of 10 mIU/mL or more indicates protection. For infants of positive mothers, test HBsAg and anti-HBs at 9–12 months, after the vaccine series. Do not use <strong>anti-HBc</strong> to judge vaccine response, because it is not induced by vaccination; isolated anti-HBc can reflect past infection or a false positive and needs <strong>HBV DNA</strong> when immunosuppression is planned. Quantitative HBsAg and HBV DNA guide treatment, while ALT and elastography stage disease.</p>
    <h4>Gaps</h4>
    <p>Timely birth-dose coverage, cold-chain reliability, immunoglobulin supply and out-of-pocket DNA testing remain the weak links. Vaccination is the most cost-effective intervention, but it does not help the millions already chronically infected, who need lifelong monitoring.</p>
  `,
  tip: "Open with the local epidemiology, then separate vaccine protection (anti-HBs) from natural infection (anti-HBc) and name the birth-dose schedule.",
  sources: ["C1", "C3", "C18"]
},
{
  id: "cc292", domain: "chem-liver", star: true,
  q: "Discuss the DOH hepatitis programme and PhilHealth coverage, and explain how they shape laboratory access for chronic viral hepatitis.",
  tags: ["DOH", "PhilHealth", "health policy", "hepatitis"],
  keypoints: ["DOH National Viral Hepatitis Prevention and Control Program","Konsulta","PhilHealth case rates","HBV DNA out-of-pocket","generic tenofovir","DOH AO 2021-0037","treatment hubs","referral pathways","no-balance billing","HBV DNA","HCV RNA","out-of-pocket spending","cascade of care","Z benefit"],
  answer: `
    <h4>Policy architecture</h4>
    <p>The DOH National Viral Hepatitis Prevention and Control Program coordinates prevention, diagnosis, treatment and surveillance through regional offices, treatment hubs and the national reference laboratory network. It links with the HIV programme because of shared transmission routes, with the Expanded Program on Immunization for birth-dose vaccination, and with the National Tuberculosis Program because anti-TB drugs cause liver injury. Local government units deliver primary care through health centres and PhilHealth-registered <strong>Konsulta</strong> providers.</p>
    <h4>What PhilHealth covers</h4>
    <ul>
      <li><strong>Konsulta</strong> primary-care package: consultation and a defined set of laboratory tests, but not specialist hepatology tests.</li>
      <li>Case rates for admissions such as decompensated cirrhosis, variceal bleeding and pancreatitis cover part of the hospital bill, not the whole episode.</li>
      <li><strong>HBV DNA, HCV RNA, elastography and most antivirals</strong> usually remain out-of-pocket, although generic tenofovir and entecavir are relatively cheap.</li>
      <li>Z-benefit and cancer packages help selected patients, but eligibility is narrow.</li>
    </ul>
    <h4>Laboratory and equity issues</h4>
    <p>Coverage is not the same as access. A patient may have PhilHealth but live far from a laboratory that performs <strong>HBV DNA</strong>, so treatment is started on ALT and HBsAg alone or deferred. Referral pathways are fragmented, and no-balance billing applies mainly to PhilHealth facilities and sponsored members. Laboratories must bill accurately, use accredited methods under <strong>DOH AO 2021-0037</strong>, and document results so that claims survive audit. Out-of-pocket spending pushes families into financial hardship, which is a health-system failure, not a patient failure.</p>
    <h4>What a stronger programme needs</h4>
    <ul>
      <li>Nationwide, affordable <strong>HBV DNA</strong> and <strong>HCV RNA</strong> testing with reflex algorithms.</li>
      <li>Antiviral procurement at primary-care level and treatment initiation by trained generalists.</li>
      <li>Linkage to HCC surveillance and palliative care.</li>
      <li>Public reporting of the cascade: diagnosed, linked, treated and suppressed.</li>
    </ul>
  `,
  tip: "Distinguish what PhilHealth pays for from what the patient actually reaches, then use the cascade of care as the organising idea.",
  sources: ["C18", "C13", "C1"]
},
{
  id: "cc293", domain: "chem-liver", star: true,
  q: "Discuss MASLD in Filipinos: risk factors, laboratory assessment, fibrosis scoring and management in primary care.",
  tags: ["MASLD", "NAFLD", "FIB-4", "Philippines"],
  keypoints: ["MASLD","cardiometabolic risk factor","Asian BMI cut-off","ALT greater than AST","ferritin","exclude viral hepatitis","FIB-4","FIB-4 below 1.3","FIB-4 above 2.67","transient elastography","CAP","fibrosis predicts outcome","GLP-1 receptor agonist","SGLT2 inhibitor","PCEDM"],
  answer: `
    <h4>Why it matters locally</h4>
    <p><strong>MASLD</strong> has replaced NAFLD and requires steatosis plus at least one cardiometabolic criterion. Philippine prevalence tracks rising obesity, type 2 diabetes and dyslipidaemia; ultrasound studies find fatty liver in roughly a quarter to a third of adults, and higher proportions in diabetes clinics. Filipinos develop disease at lower BMI, so the Asian cut-off of 23 for overweight matters more than the Western threshold.</p>
    <h4>Laboratory pattern</h4>
    <ul>
      <li><strong>ALT</strong> is often normal or mildly raised and usually exceeds AST; a reversed ratio suggests advanced fibrosis.</li>
      <li>GGT and ferritin are commonly raised; ferritin reflects inflammation, not iron overload.</li>
      <li>Exclude <strong>HBsAg, anti-HCV</strong>, alcohol, autoimmune hepatitis, Wilson disease and drug causes before labelling it MASLD.</li>
      <li>Screen for diabetes, dyslipidaemia, hypertension and chronic kidney disease, because cardiovascular disease is the leading cause of death.</li>
    </ul>
    <h4>Fibrosis assessment</h4>
    <p>Use <strong>FIB-4</strong> first: below 1.3 is low risk, above 2.67 is high risk, and the intermediate zone needs <strong>transient elastography</strong> or the ELF test. <strong>CAP</strong> estimates steatosis but does not replace staging. Fibrosis, not ALT, predicts liver and cardiovascular outcomes. Biopsy is reserved for diagnostic uncertainty.</p>
    <h4>Management</h4>
    <p>Weight loss of 7–10%, dietary quality, physical activity, alcohol reduction and control of diabetes and lipids. GLP-1 receptor agonists and SGLT2 inhibitors are attractive in diabetes; statins are safe and indicated for cardiovascular risk. Lean patients can still have MASLD, so a normal BMI does not exclude it. The <strong>PCEDM</strong> diabetes guideline supports systematic screening, and primary-care pathways should pair FIB-4 with a clear referral threshold so that scarce elastography is reserved for indeterminate cases.</p>
  `,
  tip: "Use the Asian BMI cut-off and the FIB-4 two-step pathway; stress that fibrosis stage, not ALT, predicts outcome.",
  sources: ["C1", "C3", "C16", "C18"]
},
{
  id: "cc294", domain: "chem-liver", star: true,
  q: "Discuss liver cancer surveillance in the Philippines: who to screen, the tests used, and the diagnostic pathway for hepatocellular carcinoma.",
  tags: ["HCC", "surveillance", "AFP", "Philippines"],
  keypoints: ["chronic hepatitis B","cirrhosis","six-monthly ultrasound","alpha-fetoprotein","arterial hyperenhancement","venous washout","GALAD score","AFP-L3","des-gamma-carboxy prothrombin","multiphasic CT or MRI","biopsy for indeterminate lesions","PhilHealth","birth-dose vaccination","aflatoxin"],
  answer: `
    <h4>Who to survey</h4>
    <p>Philippine liver cancer is driven by <strong>chronic hepatitis B</strong>, followed by hepatitis C, alcohol and MASLD. Surveillance is offered to adults with cirrhosis who are Child–Pugh A or B or are transplant candidates, and to high-risk chronic hepatitis B without cirrhosis: family history of HCC, older age, high viral load or abnormal ALT. The goal is to detect curable disease, not to explain symptoms.</p>
    <h4>The surveillance test</h4>
    <ul>
      <li><strong>Ultrasound</strong> every six months, with or without <strong>alpha-fetoprotein</strong>.</li>
      <li>AFP alone is inadequate: sensitivity is low for small tumours and it rises during flares.</li>
      <li>Keep the same interval and modality; annual testing misses the growth window.</li>
      <li>Recall abnormal results within weeks, not months, for multiphasic CT or MRI.</li>
    </ul>
    <h4>Diagnosis and adjuncts</h4>
    <p>A liver mass in a cirrhotic liver with arterial hyperenhancement and venous washout on CT or MRI is HCC; biopsy is reserved for indeterminate lesions. The <strong>GALAD</strong> score combines gender, age, AFP, AFP-L3 and des-gamma-carboxy prothrombin and outperforms AFP alone, but its assays are not widely available locally. Staging uses imaging, performance status and liver function; treatment ranges from resection, ablation and transplantation to transarterial therapy and systemic drugs.</p>
    <h4>Philippine reality</h4>
    <p>Ultrasound coverage is uneven outside cities, and patients often present with pain, weight loss or rupture. Operator skill and body habitus affect ultrasound sensitivity, so a negative scan in a high-risk patient is not absolute reassurance. PhilHealth covers part of imaging and admission but not organised surveillance. Primary-care registries, six-monthly reminders and point-of-care AFP can close some gaps. Prevention remains cheaper: birth-dose vaccination, antiviral suppression, alcohol control and aflatoxin reduction.</p>
  `,
  tip: "State the six-month interval, the high-risk groups and the radiological criteria; then contrast guideline surveillance with local access.",
  sources: ["C1", "C3", "C18"]
},
{
  id: "cc295", domain: "chem-liver", star: true,
  q: "Discuss alcohol-related liver disease in the Philippines, including laboratory biomarkers, severity assessment and access to elastography.",
  tags: ["alcohol", "AST:ALT", "elastography", "Philippines"],
  keypoints: ["AST:ALT greater than 2","GGT","macrocytosis","thrombocytopenia","phosphatidylethanol","carbohydrate-deficient transferrin","ethyl glucuronide","Maddrey score","transient elastography","abstinence","thiamine","corticosteroids","FIB-4","APRI","heavy episodic drinking"],
  answer: `
    <h4>Burden and pattern</h4>
    <p><strong>Alcohol-related liver disease</strong> is a leading avoidable cause of cirrhosis in the Philippines. Drinking is built into social life: beer, gin and cheap spirits in heavy weekend sessions, often on a background of undernutrition and late presentation. Total consumption is moderate by global standards, but <strong>heavy episodic drinking</strong> and poor nutrition raise risk. There is no safe threshold; risk rises with lifetime dose.</p>
    <h4>Laboratory clues</h4>
    <ul>
      <li><strong>AST:ALT greater than 2</strong>, with transaminases usually below 300 U/L.</li>
      <li>Raised <strong>GGT</strong>, macrocytosis, thrombocytopenia and low albumin.</li>
      <li>Ferritin is high with normal or raised transferrin saturation; exclude haemochromatosis.</li>
      <li><strong>Phosphatidylethanol</strong> and <strong>carbohydrate-deficient transferrin</strong> detect sustained drinking; ethyl glucuronide covers days, not months.</li>
      <li>Severe alcoholic hepatitis: jaundice, neutrophilia and INR prolongation; Maddrey score 32 or more.</li>
    </ul>
    <h4>Staging and the elastography gap</h4>
    <p><strong>Transient elastography</strong> is the practical staging tool, but inflammation, congestion and active drinking raise stiffness, so repeat after abstinence and ALT settles. Machines cluster in tertiary and private centres in Metro Manila, Cebu and Davao; a scan costs several thousand pesos and PhilHealth does not routinely cover it. Where unavailable, use <strong>FIB-4</strong> or <strong>APRI</strong> and clinical signs, accepting lower accuracy. This inequity means rural patients are staged later and referred sicker.</p>
    <h4>Management</h4>
    <p>Abstinence is the treatment. Add thiamine and nutrition, treat withdrawal, screen for infection and bleeding, and consider corticosteroids for severe alcoholic hepatitis. Transplant is limited, but selected patients benefit. Brief interventions at primary care and alcohol pricing policy are the population-level levers. Documented abstinence for several months also improves survival before any elective surgery or transplant assessment.</p>
  `,
  tip: "Give the AST:ALT ratio and the biomarker windows, then make the elastography access gap an explicit equity point.",
  sources: ["C1", "C3", "C18"]
},
{
  id: "cc296", domain: "chem-liver",
  q: "Discuss drug-induced liver injury: mechanisms, biochemical phenotypes, causality assessment and the common culprits in the Philippines.",
  tags: ["DILI", "Hy's law", "RUCAM", "anti-TB drugs"],
  keypoints: ["intrinsic","idiosyncratic","R ratio","hepatocellular","cholestatic","Hy's law","anti-tuberculosis drugs","amoxicillin-clavulanate","herbal supplements","RUCAM","rechallenge contraindicated","N-acetylcysteine","checkpoint inhibitors","acute liver failure"],
  answer: `
    <h4>Mechanisms and patterns</h4>
    <p><strong>Drug-induced liver injury</strong> is intrinsic, meaning dose-related and predictable as with paracetamol, or idiosyncratic, meaning unpredictable and immune or metabolic. The <strong>R ratio</strong> classifies it as hepatocellular above 5, cholestatic below 2, or mixed from 2 to 5. Direct injury, reactive metabolites and immune reactions produce different patterns; checkpoint inhibitors cause immune-mediated hepatitis. Age, female sex, fasting, alcohol and pre-existing liver disease modify susceptibility, and polypharmacy is common during tuberculosis treatment.</p>
    <h4>Local culprits</h4>
    <ul>
      <li><strong>Anti-tuberculosis drugs</strong> — isoniazid, rifampicin and pyrazinamide; a major issue where tuberculosis is common.</li>
      <li><strong>Amoxicillin–clavulanate</strong> — the classic cholestatic reaction.</li>
      <li><strong>Herbal and dietary supplements</strong> — unlabelled and often hepatotoxic.</li>
      <li>Methotrexate, amiodarone, NSAIDs, anticonvulsants and checkpoint inhibitors.</li>
    </ul>
    <h4>Severity and causality</h4>
    <p><strong>Hy's law</strong> — hepatocellular injury with jaundice and no biliary obstruction — predicts a severe outcome. Rising INR, encephalopathy, hypoglycaemia and acidosis signal acute liver failure. Exclude viral hepatitis A to E, alcohol, autoimmune hepatitis, Wilson disease and biliary obstruction. A single normal liver test does not exclude drug injury. The <strong>RUCAM</strong> score structures causality but is imperfect; document every drug, supplement and start date. <strong>Rechallenge is contraindicated</strong> after a severe reaction.</p>
    <h4>Management</h4>
    <p>Stop the culprit and all non-essential drugs, give supportive care, and use N-acetylcysteine for paracetamol and corticosteroids for immune-mediated hepatitis. Refer for transplant assessment early. A temporal relationship within six months is typical, but latency ranges from days to a year, so a careful drug calendar is essential. Prevention means baseline and symptom-triggered monitoring during anti-TB therapy, patient education, and reporting to the pharmacovigilance system.</p>
  `,
  tip: "Use the R ratio for the phenotype and Hy's law for severity, then name the anti-TB drugs that matter locally.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc297", domain: "chem-liver",
  q: "Discuss the diagnosis and management of autoimmune hepatitis, including the autoantibody profiles and histological features.",
  tags: ["autoimmune hepatitis", "ANA", "SMA", "interface hepatitis"],
  keypoints: ["interface hepatitis","ANA","smooth muscle antibody","anti-LKM1","IgG","polyclonal hypergammaglobulinaemia","simplified criteria","plasma cells","prednisolone","azathioprine","budesonide","drug-induced autoimmune-like hepatitis","overlap syndrome","seronegative"],
  answer: `
    <h4>Diagnosis</h4>
    <p><strong>Autoimmune hepatitis</strong> is chronic, immune-mediated hepatocyte injury with interface hepatitis, hypergammaglobulinaemia and autoantibodies. It affects women more often and can present at any age, including after viral illness, pregnancy or drug exposure. Type 1 has <strong>ANA</strong> and/or <strong>smooth muscle antibody</strong>; type 2 has <strong>anti-LKM1</strong> and is more common in children.</p>
    <h4>Laboratory findings</h4>
    <ul>
      <li>Raised <strong>ALT and AST</strong>, often with raised bilirubin and globulin.</li>
      <li><strong>IgG</strong> is elevated; serum protein electrophoresis shows polyclonal hypergammaglobulinaemia.</li>
      <li>Autoantibodies: ANA, smooth muscle antibody, anti-LKM1, anti-LC1 and anti-SLA; titres support but do not diagnose.</li>
      <li>Exclude viral hepatitis, Wilson disease, MASLD, drug injury and haemochromatosis.</li>
      <li>Histology: <strong>interface hepatitis</strong>, plasma cells and rosettes; biopsy also grades activity and stages fibrosis.</li>
    </ul>
    <h4>Scoring and pitfalls</h4>
    <p>The simplified criteria combine autoantibodies, IgG, histology and exclusion of viral hepatitis. Seronegative disease exists, and low titres occur in healthy people. Titres correlate poorly with disease activity, so serial ALT is the better monitoring test. <strong>Drug-induced autoimmune-like hepatitis</strong> from infliximab, nitrofurantoin or minocycline can mimic it, and withdrawal may be enough. Check for an overlap syndrome with primary biliary cholangitis or sclerosing cholangitis.</p>
    <h4>Treatment</h4>
    <p>Prednisolone with or without azathioprine induces remission; budesonide is an option in non-cirrhotic disease. Monitor ALT, IgG, blood counts and thiopurine methyltransferase where available. Relapse is common after withdrawal, so treatment is often long. Vaccinate against hepatitis A and B, and counsel carefully about pregnancy planning before immunosuppression. Liver transplantation is reserved for decompensation. In the Philippines, cost and access to azathioprine and specialist follow-up are practical barriers.</p>
  `,
  tip: "Separate type 1 (ANA, SMA) from type 2 (anti-LKM1), then mention the exclusion of viral hepatitis before steroid therapy.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc298", domain: "chem-liver",
  q: "Discuss the laboratory diagnosis and monitoring of Wilson disease, with emphasis on the traps that delay diagnosis.",
  tags: ["Wilson disease", "copper", "ceruloplasmin", "Leipzig score"],
  keypoints: ["ATP7B","ceruloplasmin","free copper","24-hour urinary copper","hepatic copper","Kayser–Fleischer rings","Coombs-negative haemolytic anaemia","ALP:bilirubin ratio","Leipzig score","penicillamine","trientine","zinc","family screening","liver transplantation"],
  answer: `
    <h4>Pathogenesis and presentation</h4>
    <p><strong>Wilson disease</strong> is autosomal recessive, caused by <strong>ATP7B</strong> variants. Copper cannot be excreted into bile or loaded onto ceruloplasmin, so it accumulates in liver, brain, cornea and kidney. Presentation ranges from asymptomatic aminotransferase elevation to cirrhosis, neuropsychiatric change, or acute liver failure with haemolysis. Consider it in every patient under 40 with unexplained liver disease.</p>
    <h4>Biochemical tests</h4>
    <ul>
      <li><strong>Ceruloplasmin</strong> is usually low, but may be normal in active liver disease and is raised as an acute-phase protein.</li>
      <li>Serum copper is low; calculated <strong>free copper</strong> is raised.</li>
      <li><strong>24-hour urinary copper</strong> is increased; collection errors are common.</li>
      <li><strong>Hepatic copper</strong> above 250 micrograms per gram dry weight is the strongest single test.</li>
      <li><strong>Kayser–Fleischer rings</strong> support the diagnosis, especially with neurological signs.</li>
      <li><strong>Coombs-negative haemolytic anaemia</strong> with an <strong>ALP:bilirubin ratio below 4</strong> is classic in fulminant disease.</li>
    </ul>
    <h4>Diagnostic approach</h4>
    <p>The <strong>Leipzig score</strong> integrates clinical, biochemical, histological and genetic findings. ATP7B sequencing confirms the diagnosis and enables family screening. A low ceruloplasmin in a child with liver disease should trigger slit-lamp examination and urinary copper without waiting for genetics. Low ceruloplasmin also occurs in protein-losing states and severe liver disease, so never exclude Wilson disease on a single normal result. Consider it early.</p>
    <h4>Treatment and monitoring</h4>
    <p><strong>Penicillamine</strong> or <strong>trientine</strong> chelates copper; <strong>zinc</strong> blocks intestinal absorption. Avoid copper-rich foods such as shellfish, liver and nuts during initial chelation. Monitor urinary copper, liver tests and blood counts, and support adherence. Liver transplantation is curative for fulminant failure. Screen siblings early, because presymptomatic treatment prevents irreversible damage.</p>
  `,
  tip: "Never exclude Wilson on a normal ceruloplasmin; combine urinary copper, slit-lamp examination and the Leipzig score.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc299", domain: "chem-liver", star: true,
  q: "Discuss the laboratory investigation of neonatal cholestasis, including biliary atresia and treatable metabolic disorders.",
  tags: ["neonatal cholestasis", "biliary atresia", "newborn screening"],
  keypoints: ["conjugated bilirubin","biliary atresia","Kasai hepatoportoenterostomy","acholic stools","alpha-1 antitrypsin deficiency","tyrosinaemia type 1","galactosaemia","cystic fibrosis","PFIC","Alagille syndrome","vitamin K","newborn screening","cholangiogram","paediatric hepatology"],
  answer: `
    <h4>Recognise cholestasis</h4>
    <p>Neonatal jaundice is usually unconjugated, but a raised <strong>conjugated bilirubin</strong> — above 1 mg/dL or more than 20% of the total — means <strong>cholestasis</strong> and is an emergency. Pale <strong>acholic stools</strong>, dark urine, hepatomegaly and failure to thrive support it. Breast-milk jaundice is unconjugated and never causes pale stools. The first step is fractionation, then a structured search for treatable causes.</p>
    <h4>Biliary atresia</h4>
    <p><strong>Biliary atresia</strong> is obliteration of the extrahepatic ducts and the commonest surgically correctable cause. Age at <strong>Kasai hepatoportoenterostomy</strong> determines outcome; surgery before 60 days gives the best bile drainage and native-liver survival. Ultrasound, hepatobiliary scintigraphy, biopsy and intraoperative <strong>cholangiogram</strong> confirm it. GGT is usually high, but a normal value does not exclude disease.</p>
    <h4>Metabolic and inherited causes</h4>
    <ul>
      <li><strong>Alpha-1 antitrypsin deficiency</strong> — low alpha-1 band, phenotype testing.</li>
      <li><strong>Tyrosinaemia type 1</strong> — succinylacetone; treat with nitisinone.</li>
      <li><strong>Galactosaemia</strong> — included in the expanded newborn screening panel under RA 9288.</li>
      <li><strong>Cystic fibrosis</strong> — sweat chloride; meconium ileus.</li>
      <li><strong>PFIC</strong> and <strong>Alagille syndrome</strong> — bile acids and genetic testing.</li>
      <li>Hypothyroidism, sepsis, CMV and parenteral nutrition.</li>
    </ul>
    <p>Biliary cysts and inspissated bile syndrome are surgical mimics, so imaging must be reviewed with the clinical timeline.</p>
    <h4>Laboratory panel</h4>
    <p>Request conjugated bilirubin, ALT, ALP, GGT, albumin, INR, glucose, ammonia, lactate, amino acids, urine organic acids, alpha-1 antitrypsin, sweat chloride, thyroid function, cultures and viral PCR. Give <strong>vitamin K</strong> and fat-soluble vitamins. Refer early to <strong>paediatric hepatology</strong>; an urgent referral pathway shortens the Kasai window. A cholestatic infant should never be managed as physiological jaundice.</p>
  `,
  tip: "Open with 'conjugated jaundice is surgical until excluded', then name biliary atresia, the Kasai window and the treatable metabolic disorders.",
  sources: ["C1", "C3", "C19"]
},
{
  id: "cc300", domain: "chem-liver",
  q: "Discuss the laboratory assessment of acute and chronic pancreatitis and the use of gastrointestinal tumour markers.",
  tags: ["pancreatitis", "lipase", "tumour markers", "CA 19-9"],
  keypoints: ["lipase","three times the upper limit","revised Atlanta","CRP above 150","faecal elastase-1","CA 19-9","Lewis antigen","CEA","alpha-fetoprotein","chromogranin A","proton pump inhibitor","tumour markers monitor","triglyceride","gallstones"],
  answer: `
    <h4>Acute pancreatitis</h4>
    <p>Diagnosis needs two of three: typical epigastric pain, <strong>lipase or amylase at least three times the upper limit</strong>, and characteristic imaging. <strong>Lipase</strong> is preferred because it is more specific and stays raised for 8–14 days; the enzyme level does not predict severity, and repeat measurement adds little once the diagnosis is established. Severity is judged by systemic inflammation, rising urea, haematocrit and <strong>CRP above 150 mg/L at 48 hours</strong>.</p>
    <h4>Aetiology and exocrine function</h4>
    <ul>
      <li><strong>ALT above three times the limit</strong> suggests <strong>gallstones</strong>; <strong>triglyceride</strong> above 11.3 mmol/L and hypercalcaemia are other causes.</li>
      <li><strong>Faecal elastase-1</strong> below 200 micrograms per gram indicates exocrine insufficiency; below 100 is severe.</li>
      <li>Chronic pancreatitis: calcification, duct dilatation and steatorrhoea.</li>
    </ul>
    <h4>Tumour markers</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Main use</th><th>Limitation</th></tr>
      <tr><td><strong>CA 19-9</strong></td><td>Pancreatic and biliary adenocarcinoma monitoring</td><td>Rises in cholestasis and pancreatitis; <strong>Lewis antigen</strong>-negative patients cannot express it</td></tr>
      <tr><td><strong>CEA</strong></td><td>Colorectal cancer monitoring</td><td>Smokers, inflammatory bowel disease and cirrhosis; not a screening test</td></tr>
      <tr><td><strong>Alpha-fetoprotein</strong></td><td>HCC surveillance with ultrasound</td><td>Normal in small tumours; rises during flares and pregnancy</td></tr>
      <tr><td><strong>Chromogranin A</strong></td><td>Neuroendocrine tumours</td><td><strong>Proton pump inhibitor</strong> use and renal failure raise it</td></tr>
    </table></div>
    <h4>Principles</h4>
    <p><strong>Tumour markers monitor</strong> response and recurrence; they do not diagnose early cancer. A falling CA 19-9 after resection supports response, while a rising level suggests recurrence; CEA is not useful for pancreatic cancer. Interpret trends with the assay method and clinical context, request only markers that will change management, and never screen an asymptomatic average-risk person with CA 19-9. A single normal tumour marker never excludes malignancy.</p>
  `,
  tip: "Quote the three-times-upper-limit lipase rule, then stress that markers monitor rather than diagnose.",
  sources: ["C1", "C3", "C2"]
}
);
