/* Clinical Chemistry — part 2: proteins, enzymes & markers; renal, electrolytes & acid–base */
window.QBANK.push(
{
  id: "cc22", domain: "chem-protein", star: true,
  q: "Describe serum protein electrophoresis and its patterns in disease. How is a monoclonal gammopathy investigated?",
  tags: ["SPEP", "immunofixation", "myeloma", "free light chains"],
  answer: `
    <p>Serum proteins are separated at pH 8.6 on agarose gel or by capillary zone electrophoresis into albumin, α₁, α₂, β (β₁ and β₂) and γ fractions.</p>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Findings</th></tr>
      <tr><td>Acute inflammation</td><td>↑ α₁ (α₁-antitrypsin) and α₂ (haptoglobin), ↓ albumin</td></tr>
      <tr><td>Chronic inflammation / infection</td><td>Above plus polyclonal (broad) ↑ γ</td></tr>
      <tr><td>Cirrhosis</td><td>↓ albumin, polyclonal ↑ γ with <strong>β–γ bridging</strong> (IgA)</td></tr>
      <tr><td>Nephrotic syndrome</td><td>↓↓ albumin, ↑↑ α₂ (α₂-macroglobulin), ↓ γ</td></tr>
      <tr><td>α₁-antitrypsin deficiency</td><td>Flat/absent α₁ band</td></tr>
      <tr><td>Monoclonal gammopathy</td><td>Narrow spike (M-protein), usually γ or β region</td></tr>
      <tr><td>Hypogammaglobulinaemia</td><td>Faint γ — consider light-chain myeloma, immunodeficiency</td></tr>
    </table></div>
    <h4>Investigating a monoclonal protein</h4>
    <ol>
      <li>Quantify the M-spike by densitometry.</li>
      <li><strong>Immunofixation</strong> (IFE) to identify heavy chain (G, A, M, D, E) and light chain (κ or λ) — more sensitive than SPEP.</li>
      <li><strong>Serum free light chains</strong> (κ, λ, ratio; normal ratio 0.26–1.65) — detects light-chain and non-secretory myeloma and AL amyloid.</li>
      <li>Urine protein electrophoresis/IFE on 24-h urine for Bence Jones protein.</li>
      <li>Assess end-organ damage (<strong>CRAB</strong>: calcium, renal, anaemia, bone) and the SLiM criteria: ≥60% clonal plasma cells, FLC ratio ≥100, &gt;1 focal lesion on MRI.</li>
    </ol>
    <p>MGUS: M-protein &lt;30 g/L, &lt;10% marrow plasma cells, no myeloma-defining event; risk of progression ~1% per year. Pitfalls: fibrinogen in plasma samples, haemolysis (free Hb in β region) and monoclonal antibody therapies (daratumumab) mimic small bands.</p>
  `,
  tip: "Draw a labelled electrophoresis trace for the M-spike and β–γ bridging; examiners reward the diagram.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc23", domain: "chem-protein", star: true,
  q: "Discuss cardiac troponins in the diagnosis of myocardial infarction, including high-sensitivity assays, the 99th percentile and rapid rule-in/rule-out algorithms.",
  tags: ["troponin", "hs-cTn", "MI", "0/1h algorithm"],
  answer: `
    <h4>Biology</h4>
    <p>Troponin I and T are cardiac-specific isoforms of the thin-filament regulatory complex. They are released by myocyte injury and rise within 1–3 h, peaking at 12–48 h; cTnT stays raised for 10–14 days. CK-MB and myoglobin are now obsolete for diagnosing MI.</p>
    <h4>Definition of MI (Fourth Universal Definition, 2018)</h4>
    <p>A <strong>rise and/or fall</strong> of cTn with at least one value above the <strong>99th percentile upper reference limit (URL)</strong>, plus evidence of ischaemia (symptoms, ECG changes, new Q waves, imaging, or thrombus). Myocardial <em>injury</em> without ischaemia (sepsis, myocarditis, PE, CKD, heart failure) is a different diagnosis.</p>
    <h4>High-sensitivity assays</h4>
    <p>Defined as measuring cTn in ≥50% of healthy people with a CV ≤10% at the 99th percentile. Sex-specific 99th percentiles are recommended (lower in women). Results are reported in ng/L as whole numbers.</p>
    <h4>Rapid algorithms (ESC 0/1-h or 0/2-h)</h4>
    <ul>
      <li><strong>Rule out</strong> if the 0-h hs-cTn is very low (below the assay-specific limit, e.g. hs-cTnT &lt;5 ng/L with chest pain &gt;3 h), or low and with a 1-h change below the delta.</li>
      <li><strong>Rule in</strong> if the 0-h value is high or the 1-h delta is large.</li>
      <li>Others go to an "observe" zone with a 3-h sample.</li>
    </ul>
    <h4>Laboratory pitfalls</h4>
    <p>Assay-specific cut-offs (cTnI values are not interchangeable between manufacturers), macro-troponin, heterophile antibodies, biotin interference, skeletal muscle disease falsely raising cTnT, and haemolysis.</p>
  `,
  tip: "Stress 'rise and/or fall' plus the 99th percentile — a single raised value is not MI.",
  sources: ["C9", "C1"]
},
{
  id: "cc24", domain: "chem-protein",
  q: "Explain the principles of enzyme kinetics relevant to clinical enzymology. Why are enzyme assays performed under zero-order conditions?",
  tags: ["Michaelis-Menten", "kinetics", "IFCC"],
  answer: `
    <p>Michaelis–Menten kinetics: <em>v = Vmax[S]/(Km + [S])</em>. <strong>Km</strong> is the substrate concentration at half Vmax and reflects affinity. The Lineweaver–Burk plot (1/v vs 1/[S]) linearises the curve and shows the type of inhibition.</p>
    <h4>Zero-order conditions</h4>
    <p>When [S] is much greater than Km (in practice ≥10–20 × Km), the rate depends only on the amount of <strong>enzyme</strong>, not on substrate concentration. Since the laboratory wants to measure enzyme activity, the substrate must be in excess so the reaction is zero order with respect to substrate. At low [S] the reaction becomes first order and the rate falls as substrate is used up.</p>
    <h4>Other conditions to control</h4>
    <ul>
      <li><strong>Temperature</strong> — IFCC reference methods at 37 °C; each 1 °C changes activity by ~5–10%.</li>
      <li>pH and buffer, cofactors (pyridoxal-5'-phosphate for ALT/AST), activators (Mg²⁺ for CK, N-acetylcysteine to reactivate CK).</li>
      <li>Continuous (kinetic) monitoring — e.g. NADH absorbance fall at 340 nm — rather than fixed-time end-point, to detect substrate depletion and lag phases.</li>
    </ul>
    <h4>Inhibition types</h4>
    <div class="table-wrap"><table>
      <tr><th>Type</th><th>Km</th><th>Vmax</th></tr>
      <tr><td>Competitive</td><td>↑</td><td>no change</td></tr>
      <tr><td>Non-competitive</td><td>no change</td><td>↓</td></tr>
      <tr><td>Uncompetitive</td><td>↓</td><td>↓</td></tr>
    </table></div>
    <p>Activity is reported in U/L (µmol/min/L) or katal (mol/s). Very high activity causes "substrate exhaustion" — the analyser flags a non-linear reaction and the sample must be diluted.</p>
  `,
  tip: "Define zero-order clearly: substrate in excess so the rate reflects enzyme concentration only.",
  sources: ["C2", "C1"]
},
{
  id: "cc25", domain: "chem-protein",
  q: "Compare the diagnostic significance of ALP, GGT, 5'-nucleotidase, CK, LDH and amylase/lipase. Include isoenzymes where relevant.",
  tags: ["enzymes", "isoenzymes", "ALP", "CK"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Enzyme</th><th>Main tissue sources</th><th>Clinical use</th><th>Isoenzymes / notes</th></tr>
      <tr><td>ALP</td><td>Liver, bone, placenta, intestine</td><td>Cholestasis, bone disease (Paget's, osteomalacia, metastases)</td><td>Heat stable: placental (Regan) &gt; intestinal &gt; liver &gt; bone ("bone burns"). Physiologically high in children and pregnancy.</td></tr>
      <tr><td>GGT</td><td>Liver (biliary), kidney, pancreas</td><td>Confirms hepatic source of ↑ALP; induced by alcohol, phenytoin</td><td>Not raised in bone disease</td></tr>
      <tr><td>5'-NT</td><td>Liver</td><td>Confirms hepatobiliary ALP</td><td>—</td></tr>
      <tr><td>CK</td><td>Skeletal muscle, heart, brain</td><td>Rhabdomyolysis, myositis, muscular dystrophy</td><td>CK-MM (muscle), CK-MB (heart ~20%), CK-BB (brain, gut, prostate). Macro-CK can mislead.</td></tr>
      <tr><td>LDH</td><td>All cells, esp. RBC, heart, liver, muscle</td><td>Haemolysis, tumour burden (lymphoma, germ cell), megaloblastic anaemia</td><td>LD1–LD5; LD1 &gt; LD2 ("flipped") in MI and haemolysis; LD5 in liver and muscle</td></tr>
      <tr><td>Amylase</td><td>Pancreas, salivary gland</td><td>Acute pancreatitis (≥3 × URL)</td><td>Rises early, falls in 3–5 days; macroamylasaemia; salivary in mumps</td></tr>
      <tr><td>Lipase</td><td>Pancreas</td><td>Acute pancreatitis — more specific and stays raised longer</td><td>Preferred test; either test alone is enough</td></tr>
    </table></div>
    <p>Key interpretive principle: the <strong>pattern</strong> of enzymes, the degree of rise and the time course matter more than one value. Organ-specific enzymes do not exist except for a few (troponin, lipase); isoenzymes and accompanying markers provide specificity.</p>
  `,
  tip: "Learn the ALP heat-inactivation order — it is a favourite short-answer item.",
  sources: ["C2", "C1"]
},
{
  id: "cc26", domain: "chem-protein",
  q: "Discuss the clinical use and limitations of tumour markers, with reference to PSA, CEA, AFP, CA-125 and hCG.",
  tags: ["tumour markers", "PSA", "AFP", "hook effect"],
  answer: `
    <p>A tumour marker is a substance made by a tumour or by the host in response, measurable in blood or other fluids. Very few are suitable for <em>screening</em>; most are used for <strong>diagnosis support, prognosis, monitoring treatment and detecting recurrence</strong>.</p>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Main use</th><th>False positives / limitations</th></tr>
      <tr><td>PSA</td><td>Prostate cancer detection (shared decision), monitoring after treatment</td><td>BPH, prostatitis, instrumentation; free/total PSA ratio and PSA density improve specificity</td></tr>
      <tr><td>CEA</td><td>Colorectal cancer monitoring after resection</td><td>Smoking, IBD, cirrhosis; not for screening</td></tr>
      <tr><td>AFP</td><td>Hepatocellular carcinoma surveillance in cirrhosis/HBV (with ultrasound); germ cell tumours</td><td>Hepatitis, pregnancy; AFP-L3 more specific for HCC — relevant in the Philippines where HBV-related HCC is common</td></tr>
      <tr><td>CA-125</td><td>Ovarian cancer: pelvic mass assessment (RMI, ROMA with HE4), monitoring</td><td>Menstruation, endometriosis, pregnancy, any peritoneal inflammation, heart failure</td></tr>
      <tr><td>hCG</td><td>Gestational trophoblastic disease, germ cell tumours</td><td>Pregnancy, pituitary hCG, heterophile antibodies (phantom hCG)</td></tr>
    </table></div>
    <h4>Analytical issues</h4>
    <ul>
      <li><strong>High-dose hook effect</strong> in sandwich immunoassays — falsely low results at very high concentrations; dilute when result does not match clinical picture.</li>
      <li>Results differ between assays — use the same method for serial monitoring and rebase if the method changes.</li>
      <li>Heterophile antibodies and HAMA (patients given mouse antibodies).</li>
    </ul>
    <p>Interpretation of serial change uses half-life and reference change values (RCV), not a single cut-off.</p>
  `,
  tip: "Mention the hook effect and 'same method for serial monitoring' — classic analytical points.",
  sources: ["C1", "C3"]
},
{
  id: "cc27", domain: "chem-protein",
  q: "Describe the acute phase response and the laboratory use of CRP and procalcitonin.",
  tags: ["CRP", "procalcitonin", "acute phase"],
  answer: `
    <p>The acute phase response is a systemic reaction to tissue injury, infection or inflammation, mediated mainly by <strong>IL-6</strong> (also IL-1, TNF-α) acting on hepatocytes.</p>
    <ul>
      <li><strong>Positive acute phase proteins</strong> (≥25% rise): CRP and serum amyloid A (100–1000-fold), α₁-antitrypsin, α₁-acid glycoprotein, haptoglobin, fibrinogen, ceruloplasmin, ferritin, complement C3.</li>
      <li><strong>Negative acute phase proteins</strong>: albumin, transferrin, transthyretin (prealbumin), retinol-binding protein.</li>
    </ul>
    <h4>CRP</h4>
    <p>Pentraxin that binds phosphocholine and activates complement. Rises within 6 h, peaks at 48 h, half-life 19 h — so it tracks activity well. Values &gt;100 mg/L suggest bacterial infection, but overlap with viral and inflammatory disease is large. <strong>hs-CRP</strong> (low range, &lt;1 / 1–3 / &gt;3 mg/L) is a cardiovascular risk modifier. SLE characteristically shows a high ESR with normal CRP unless serositis or infection.</p>
    <h4>Procalcitonin</h4>
    <p>Precursor of calcitonin, produced by many tissues in response to bacterial endotoxin and IL-1β/TNF; <strong>suppressed by interferon-γ</strong> in viral infections, which makes it more specific for bacterial infection than CRP. Rises at 3–6 h. Uses: antibiotic stewardship in lower respiratory tract infection and sepsis — stop antibiotics when PCT &lt;0.25 µg/L or falls ≥80% from the peak. False rises: major surgery, trauma, burns, medullary thyroid carcinoma, cardiogenic shock.</p>
  `,
  tip: "Explain WHY PCT favours bacterial infection: interferon-γ suppression in viral infection.",
  sources: ["C1", "C3"]
},
{
  id: "cc28", domain: "chem-protein",
  q: "Discuss natriuretic peptides (BNP and NT-proBNP) in heart failure: biology, interpretation and confounders.",
  tags: ["BNP", "NT-proBNP", "heart failure"],
  answer: `
    <p>Ventricular myocytes respond to wall stretch by producing proBNP (108 aa), which is cleaved into active <strong>BNP</strong> (32 aa) and inactive <strong>NT-proBNP</strong> (76 aa), released in equal amounts. BNP causes natriuresis, vasodilation and inhibits renin and aldosterone.</p>
    <div class="table-wrap"><table>
      <tr><th></th><th>BNP</th><th>NT-proBNP</th></tr>
      <tr><td>Half-life</td><td>~20 min</td><td>~60–120 min</td></tr>
      <tr><td>Clearance</td><td>Receptors, neprilysin, kidney</td><td>Mainly kidney</td></tr>
      <tr><td>Acute HF rule-out</td><td>&lt;100 pg/mL</td><td>&lt;300 pg/mL</td></tr>
      <tr><td>Non-acute rule-out</td><td>&lt;35 pg/mL</td><td>&lt;125 pg/mL</td></tr>
      <tr><td>Effect of sacubitril–valsartan</td><td>BNP rises (neprilysin inhibited) — do not use for monitoring</td><td>Unaffected — preferred</td></tr>
    </table></div>
    <p>Age-adjusted NT-proBNP rule-in cut-offs for acute HF: &gt;450 (&lt;50 y), &gt;900 (50–75 y), &gt;1800 pg/mL (&gt;75 y).</p>
    <h4>Confounders</h4>
    <ul>
      <li><strong>Raise levels</strong>: age, renal failure, atrial fibrillation, pulmonary embolism, pulmonary hypertension, sepsis, ACS, valvular disease.</li>
      <li><strong>Lower levels</strong>: obesity (BMI &gt;30), flash pulmonary oedema, mitral stenosis, constrictive pericarditis.</li>
    </ul>
    <p>The tests are best for <strong>ruling out</strong> heart failure (high negative predictive value) and for prognosis.</p>
  `,
  tip: "The sacubitril–valsartan effect on BNP but not NT-proBNP is a high-value modern point.",
  sources: ["C1", "C3"]
},
{
  id: "cc29", domain: "chem-protein",
  q: "Short notes on immunoassay interference: heterophile antibodies, biotin and the hook effect.",
  tags: ["immunoassay", "interference", "biotin"],
  answer: `
    <h4>Heterophile / human anti-animal antibodies</h4>
    <p>Antibodies in patient serum that bind the animal immunoglobulins in the assay (e.g. HAMA). In a <strong>sandwich</strong> assay they bridge capture and detection antibodies, giving a <strong>false high</strong> result (sometimes false low). Suspect when results do not fit the clinical picture. Check by: serial dilution (non-linear), heterophile blocking tubes, re-assay on a different platform, or measure the analyte in urine (e.g. hCG — antibodies are too large to be filtered).</p>
    <h4>Biotin</h4>
    <p>High-dose biotin supplements (for hair, nails, or multiple sclerosis) saturate streptavidin-coated surfaces. Result: <strong>falsely low</strong> results in sandwich assays (e.g. troponin, TSH) and <strong>falsely high</strong> in competitive assays (e.g. FT4, FT3) — this can mimic Graves' disease. Ask about supplements; stop biotin 2–3 days (longer with very high doses) before testing.</p>
    <h4>High-dose hook (prozone) effect</h4>
    <p>In one-step sandwich assays, an extreme excess of antigen saturates both antibodies separately, preventing sandwich formation and giving a <strong>falsely low</strong> result. Seen with prolactin (macroprolactinoma), hCG (molar pregnancy), ferritin, PSA, tumour markers. Detect by testing at dilution.</p>
    <h4>Others</h4>
    <p>Macro-analytes (macroprolactin — screen with PEG precipitation), cross-reacting drugs or metabolites (digoxin-like substances, cortisol assays and prednisolone), and autoantibodies (anti-thyroglobulin in Tg assays).</p>
  `,
  tip: "State the direction (false high vs false low) for each interference in sandwich vs competitive formats.",
  sources: ["C1", "C3"]
},
{
  id: "cc30", domain: "chem-renal", star: true,
  q: "Discuss the estimation of glomerular filtration rate: creatinine, cystatin C, the CKD-EPI 2021 equation and the KDIGO classification of CKD.",
  tags: ["eGFR", "CKD-EPI", "cystatin C", "KDIGO"],
  answer: `
    <h4>Markers</h4>
    <ul>
      <li><strong>Creatinine</strong> — made from creatine in muscle at a fairly constant rate, freely filtered, but ~10–20% secreted by tubules. Affected by muscle mass, diet (cooked meat), age, sex and drugs blocking secretion (trimethoprim, cimetidine, dolutegravir). The Jaffe method has positive interference from ketones, cephalosporins and bilirubin (negative); enzymatic methods are IDMS-traceable and preferred.</li>
      <li><strong>Cystatin C</strong> — produced by all nucleated cells, independent of muscle mass; affected by thyroid status, steroids, inflammation and obesity.</li>
      <li>Creatinine clearance from a 24-h urine overestimates GFR and suffers from collection errors.</li>
    </ul>
    <h4>Equations</h4>
    <p>KDIGO 2024 recommends the <strong>CKD-EPI 2021</strong> equations without race, using creatinine (eGFRcr) for initial assessment and the <strong>combined creatinine–cystatin C</strong> equation (eGFRcr-cys) when more accuracy is needed (e.g. drug dosing, low muscle mass, eGFR near a decision threshold). Report in mL/min/1.73 m². Unreliable in acute kidney injury, extremes of body size, amputation, pregnancy.</p>
    <h4>KDIGO classification (cause–GFR–albuminuria)</h4>
    <div class="table-wrap"><table>
      <tr><th>G stage</th><th>eGFR</th><th>A stage</th><th>ACR (mg/g)</th></tr>
      <tr><td>G1</td><td>≥90</td><td>A1</td><td>&lt;30</td></tr>
      <tr><td>G2</td><td>60–89</td><td>A2</td><td>30–300</td></tr>
      <tr><td>G3a / G3b</td><td>45–59 / 30–44</td><td>A3</td><td>&gt;300</td></tr>
      <tr><td>G4</td><td>15–29</td><td></td><td></td></tr>
      <tr><td>G5</td><td>&lt;15 (kidney failure)</td><td></td><td></td></tr>
    </table></div>
    <p>CKD = abnormal kidney structure or function present for <strong>&gt;3 months</strong>. Risk rises with both lower GFR and higher albuminuria ("heat map").</p>
  `,
  tip: "Mention 'race-free CKD-EPI 2021' and 'cause–GFR–albuminuria' to show current knowledge.",
  sources: ["C7", "C12", "C1"]
},
{
  id: "cc31", domain: "chem-renal", star: true,
  q: "Describe a systematic approach to interpreting arterial blood gases. Apply it to: pH 7.32, pCO₂ 60 mmHg, HCO₃⁻ 30 mmol/L.",
  tags: ["ABG", "acid-base", "compensation", "case"],
  answer: `
    <h4>Six steps</h4>
    <ol>
      <li><strong>Check validity</strong>: Henderson–Hasselbalch — [H⁺] (nmol/L) = 24 × pCO₂/HCO₃⁻.</li>
      <li><strong>pH</strong>: acidaemia (&lt;7.35) or alkalaemia (&gt;7.45).</li>
      <li><strong>Primary process</strong>: does pCO₂ or HCO₃⁻ explain the pH?</li>
      <li><strong>Compensation</strong>: is it appropriate?</li>
      <li><strong>Anion gap</strong> (and delta ratio) if metabolic acidosis.</li>
      <li><strong>Clinical correlation</strong> and the A–a gradient for oxygenation.</li>
    </ol>
    <h4>Expected compensation</h4>
    <div class="table-wrap"><table>
      <tr><th>Primary disorder</th><th>Expected change</th></tr>
      <tr><td>Metabolic acidosis</td><td>pCO₂ = 1.5 × HCO₃⁻ + 8 ± 2 (Winter)</td></tr>
      <tr><td>Metabolic alkalosis</td><td>pCO₂ ↑ 0.7 per 1 mmol/L ↑ HCO₃⁻</td></tr>
      <tr><td>Acute respiratory acidosis</td><td>HCO₃⁻ ↑ 1 per 10 mmHg ↑ pCO₂</td></tr>
      <tr><td>Chronic respiratory acidosis</td><td>HCO₃⁻ ↑ 3.5–4 per 10 mmHg</td></tr>
      <tr><td>Acute / chronic respiratory alkalosis</td><td>HCO₃⁻ ↓ 2 / ↓ 4–5 per 10 mmHg</td></tr>
    </table></div>
    <h4>Worked example</h4>
    <div class="calc">pH 7.32 → acidaemia
pCO₂ 60 (↑) explains acidaemia → primary respiratory acidosis
ΔpCO₂ = 20 mmHg
Acute expected HCO₃⁻  = 24 + 2   = 26
Chronic expected HCO₃⁻ = 24 + 7–8 = 31–32
Measured 30 → closest to chronic (partly compensated) respiratory acidosis</div>
    <p>Fits COPD with chronic CO₂ retention; a measured HCO₃⁻ well above 32 would suggest an added metabolic alkalosis (e.g. diuretics).</p>
  `,
  tip: "Always show the expected compensation calculation — it is what separates a Master's answer from a board answer.",
  sources: ["C15", "C1", "C2"]
},
{
  id: "cc32", domain: "chem-renal",
  q: "Explain the anion gap, the delta ratio and the osmolal gap. How do they help in the differential diagnosis of metabolic acidosis?",
  tags: ["anion gap", "osmolal gap", "delta ratio", "toxic alcohols"],
  answer: `
    <div class="calc">Anion gap (AG)   = Na − (Cl + HCO₃)        ref ≈ 8–12 mmol/L (method-dependent)
Albumin-corrected AG = AG + 2.5 × (40 − albumin g/L)/10
Delta ratio      = (AG − 12) / (24 − HCO₃)
Calc. osmolality = 2Na + glucose + urea   (mmol/L)
                 = 2Na + glucose/18 + BUN/2.8   (mg/dL)
Osmolal gap      = measured − calculated     ref &lt; 10 mOsm/kg</div>
    <h4>High-AG acidosis (unmeasured anions)</h4>
    <p>Mnemonic <strong>GOLDMARK</strong>: glycols (ethylene, propylene), 5-oxoproline (paracetamol), L-lactate, D-lactate, methanol, aspirin, renal failure, ketoacidosis.</p>
    <h4>Normal-AG (hyperchloraemic) acidosis</h4>
    <p>GI bicarbonate loss (diarrhoea — common in the Philippines with cholera and other enteric infections), renal tubular acidosis, saline infusion, acetazolamide, ureteric diversion. <strong>Urine anion gap</strong> (Na + K − Cl) negative suggests GI loss (normal NH₄⁺ excretion); positive suggests RTA.</p>
    <h4>Delta ratio</h4>
    <ul><li>&lt;0.4 — pure normal-AG acidosis</li><li>0.4–0.8 — mixed high-AG + normal-AG</li><li>1–2 — pure high-AG acidosis</li><li>&gt;2 — high-AG acidosis + metabolic alkalosis (or pre-existing high HCO₃⁻)</li></ul>
    <h4>Osmolal gap</h4>
    <p>A raised osmolal gap with high-AG acidosis suggests <strong>methanol or ethylene glycol</strong> (also ethanol, which raises osmolality but does not cause acidosis). Early in poisoning the gap is high and AG normal; later, as the parent alcohol becomes toxic acid, the gap falls and the AG rises. Methanol poisoning from adulterated lambanog has caused outbreaks in the Philippines. Measure osmolality by <em>freezing-point depression</em> — vapour pressure osmometers miss volatile alcohols.</p>
  `,
  tip: "Mention that osmolality must be by freezing-point depression — volatile alcohols escape vapour-pressure methods.",
  sources: ["C15", "C1", "C2"]
},
{
  id: "cc33", domain: "chem-renal",
  q: "Discuss the laboratory evaluation of hyponatraemia.",
  tags: ["hyponatraemia", "SIADH", "osmolality"],
  answer: `
    <p>Hyponatraemia (Na &lt;135 mmol/L) is the most common electrolyte disorder in hospital patients. It is evaluated step by step.</p>
    <ol>
      <li><strong>Exclude pseudohyponatraemia</strong> — severe hyperlipidaemia or paraproteinaemia with indirect ISE. Serum osmolality is normal; direct ISE gives the true value.</li>
      <li><strong>Measure serum osmolality</strong>:
        <ul><li>High (&gt;295) — hyperglycaemia (corrected Na), mannitol.</li><li>Normal — pseudohyponatraemia, post-TURP glycine.</li><li>Low (&lt;275) — true hypotonic hyponatraemia → continue.</li></ul>
      </li>
      <li><strong>Urine osmolality</strong>: &lt;100 mOsm/kg = appropriate ADH suppression (primary polydipsia, beer potomania, tea-and-toast diet); &gt;100 = ADH active → step 4.</li>
      <li><strong>Urine sodium and volume status</strong>:
        <div class="table-wrap"><table>
          <tr><th>Volume</th><th>Urine Na &lt;30</th><th>Urine Na &gt;30</th></tr>
          <tr><td>Hypovolaemic</td><td>GI loss (vomiting, diarrhoea), burns</td><td>Diuretics (thiazides), adrenal insufficiency, salt-wasting nephropathy, cerebral salt wasting</td></tr>
          <tr><td>Euvolaemic</td><td>—</td><td><strong>SIADH</strong>, hypothyroidism, glucocorticoid deficiency</td></tr>
          <tr><td>Hypervolaemic</td><td>Heart failure, cirrhosis, nephrotic syndrome</td><td>Renal failure</td></tr>
        </table></div>
      </li>
    </ol>
    <h4>SIADH criteria</h4>
    <p>Hypotonic hyponatraemia, urine osmolality &gt;100, urine Na &gt;30 on normal salt intake, clinical euvolaemia, normal thyroid and adrenal function, no recent diuretics. Low uric acid (&lt;0.24 mmol/L) supports it. Causes: small cell lung cancer, pneumonia, TB, CNS disease, drugs (SSRIs, carbamazepine), pain, nausea.</p>
    <p>Correction must not exceed 8–10 mmol/L in 24 h to avoid osmotic demyelination.</p>
  `,
  tip: "Use the algorithm order — osmolality first, then urine osmolality, then urine Na and volume.",
  sources: ["C1", "C2", "C3"]
},
{
  id: "cc34", domain: "chem-renal",
  q: "Case: a patient's potassium is 6.9 mmol/L but the ECG is normal and the patient is well. Discuss the possible causes and how you would investigate.",
  tags: ["hyperkalaemia", "pseudohyperkalaemia", "case"],
  answer: `
    <p>A very high K with a normal ECG in a well patient strongly suggests <strong>pseudohyperkalaemia</strong> — a rise in K in the tube after collection. However, true hyperkalaemia must not be dismissed until excluded.</p>
    <h4>Causes of spurious hyperkalaemia</h4>
    <ul>
      <li><strong>Haemolysis</strong> (check the H-index) — difficult draw, small needle, vigorous mixing, pneumatic tube.</li>
      <li><strong>EDTA contamination</strong> (K₂EDTA) — wrong order of draw; also very low calcium and ALP.</li>
      <li><strong>Delayed separation or refrigeration</strong> of whole blood — Na/K-ATPase stops in the cold.</li>
      <li>Fist clenching, prolonged tourniquet.</li>
      <li><strong>Thrombocytosis or leukocytosis</strong> (e.g. CLL) — K released during clotting; plasma K normal, serum K high (serum − plasma difference &gt;0.4 mmol/L).</li>
      <li>Familial pseudohyperkalaemia (red cell membrane leak at low temperature).</li>
      <li>Drip-arm contamination with K-containing fluid.</li>
    </ul>
    <h4>Investigation</h4>
    <ol>
      <li>Check indices and other results (Ca, ALP, LDH, platelets, WBC).</li>
      <li>Repeat promptly with careful technique, lithium heparin plasma, rapid transport at room temperature; a blood gas analyser (whole blood) K is useful.</li>
      <li>If true hyperkalaemia: assess renal function, drugs (ACE inhibitors, ARBs, spironolactone, NSAIDs, trimethoprim), aldosterone/renin, cortisol, tissue breakdown (rhabdomyolysis, tumour lysis), acidosis, insulin deficiency.</li>
    </ol>
    <p>Telephone the result as a critical value anyway with a comment; the clinician decides whether to treat while the repeat is pending.</p>
  `,
  tip: "List the pre-analytical causes first, then show you still treat it as a critical result.",
  sources: ["C1", "C2"]
},
{
  id: "cc35", domain: "chem-renal",
  q: "Discuss proteinuria and albuminuria: methods of detection and quantification and their clinical significance.",
  tags: ["albuminuria", "UACR", "proteinuria"],
  answer: `
    <h4>Types of proteinuria</h4>
    <ul>
      <li><strong>Glomerular</strong> — albumin dominant (diabetes, glomerulonephritis, nephrotic syndrome &gt;3.5 g/day).</li>
      <li><strong>Tubular</strong> — low-molecular-weight proteins (β₂-microglobulin, α₁-microglobulin, RBP): Fanconi, heavy metals, interstitial nephritis.</li>
      <li><strong>Overflow</strong> — free light chains (Bence Jones), myoglobin, haemoglobin.</li>
      <li><strong>Post-renal</strong> and benign (orthostatic, fever, exercise).</li>
    </ul>
    <h4>Methods</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Principle</th><th>Notes</th></tr>
      <tr><td>Dipstick</td><td>Protein error of indicators (tetrabromophenol blue)</td><td>Sensitive to albumin only (~150–300 mg/L); misses light chains; false + with alkaline urine</td></tr>
      <tr><td>Sulfosalicylic acid</td><td>Precipitation</td><td>Detects all proteins incl. light chains</td></tr>
      <tr><td>Urine albumin:creatinine ratio (UACR)</td><td>Immunoturbidimetry / creatinine</td><td>Preferred test for CKD/diabetes screening; first morning sample</td></tr>
      <tr><td>Urine protein:creatinine ratio</td><td>Pyrogallol red, benzethonium</td><td>Used to monitor glomerulonephritis</td></tr>
      <tr><td>24-h urine protein</td><td>Timed collection</td><td>Collection errors; check with creatinine excretion</td></tr>
    </table></div>
    <h4>Significance</h4>
    <p>Albuminuria (A2: UACR 30–300 mg/g or 3–30 mg/mmol) is an early marker of diabetic kidney disease and an independent marker of cardiovascular risk. Persistent albuminuria (2 of 3 samples over 3–6 months) defines A2/A3. Diabetic patients should be screened yearly with UACR and eGFR (KDIGO, ADA). Reduction of albuminuria with ACE inhibitors/ARBs and SGLT2 inhibitors slows progression.</p>
  `,
  tip: "Point out that dipsticks miss light chains — a classic exam trap.",
  sources: ["C7", "C1", "C6"]
},
{
  id: "cc36", domain: "chem-renal",
  q: "Discuss the regulation of calcium and phosphate, and the laboratory approach to hypercalcaemia.",
  tags: ["calcium", "PTH", "vitamin D", "hypercalcaemia"],
  answer: `
    <h4>Regulation</h4>
    <p>About 45% of plasma calcium is ionised (biologically active), 40% protein-bound (mostly albumin) and 15% complexed. Ionised calcium is sensed by the <strong>calcium-sensing receptor</strong> on parathyroid cells. PTH raises calcium by bone resorption, distal tubular reabsorption, phosphate excretion and stimulation of renal 1α-hydroxylase (→ calcitriol, which increases intestinal absorption). FGF-23 from osteocytes increases phosphate excretion and lowers calcitriol.</p>
    <div class="calc">Adjusted Ca (mmol/L) = measured Ca + 0.02 × (40 − albumin g/L)
(mg/dL: + 0.8 × (4.0 − albumin g/dL))</div>
    <p>Ionised calcium (blood gas analyser, anaerobic heparinised sample) is better in critical illness and acid–base disorders: acidosis raises and alkalosis lowers ionised Ca.</p>
    <h4>Approach to hypercalcaemia</h4>
    <ol>
      <li>Confirm with adjusted or ionised calcium; exclude tourniquet effect.</li>
      <li><strong>Measure PTH</strong>:
        <ul>
          <li>PTH high or inappropriately normal → <strong>primary hyperparathyroidism</strong> (or tertiary, lithium); check urine Ca:creatinine clearance ratio — &lt;0.01 suggests familial hypocalciuric hypercalcaemia (CASR mutation).</li>
          <li>PTH suppressed → <strong>PTH-independent</strong>: malignancy (PTHrP — squamous cancers; lytic metastases; myeloma), vitamin D excess or granulomatous disease (sarcoidosis, TB — calcitriol made by macrophages), thyrotoxicosis, milk-alkali syndrome, immobilisation.</li>
        </ul>
      </li>
      <li>Then measure PTHrP, 25-OH-D, 1,25-(OH)₂D, SPEP/free light chains, TSH as indicated.</li>
    </ol>
    <p>Primary hyperparathyroidism and malignancy together cause about 90% of cases; outpatients usually have the former, inpatients the latter.</p>
  `,
  tip: "PTH is the branch point — build the whole answer around 'PTH high vs PTH suppressed'.",
  sources: ["C14", "C1", "C2"]
},
{
  id: "cc37", domain: "chem-renal",
  q: "Compare ion-selective electrode methods (direct and indirect) with flame photometry for electrolyte measurement.",
  tags: ["ISE", "electrolytes", "methods"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th>Flame emission photometry</th><th>Indirect ISE</th><th>Direct ISE</th></tr>
      <tr><td>Principle</td><td>Light emitted by excited Na/K atoms in a flame; internal standard (Li or Cs)</td><td>Potential across ion-selective membrane, sample <strong>pre-diluted</strong></td><td>Potential measured on <strong>undiluted</strong> sample</td></tr>
      <tr><td>What is measured</td><td>Concentration per litre of plasma</td><td>Concentration per litre of plasma</td><td>Activity in plasma <em>water</em></td></tr>
      <tr><td>Used in</td><td>Historical; some laboratories</td><td>Large chemistry analysers</td><td>Blood gas analysers, POCT</td></tr>
      <tr><td>Effect of high lipid/protein</td><td>Pseudohyponatraemia</td><td>Pseudohyponatraemia (water displacement)</td><td><strong>Unaffected</strong></td></tr>
      <tr><td>Problems</td><td>Gas, flame safety, Li therapy interferes with Li standard</td><td>Same as flame for displacement</td><td>Protein build-up on membranes; whole blood heparin binding</td></tr>
    </table></div>
    <h4>Electrode principles</h4>
    <p>Na⁺ electrodes use <strong>glass membranes</strong> (or crown ethers); K⁺ uses a <strong>valinomycin</strong> membrane; Cl⁻ uses ion-exchange membranes; Ca²⁺ and Li⁺ use neutral carriers. The potential follows the <strong>Nernst equation</strong> (~59 mV per tenfold activity change for monovalent ions at 25 °C).</p>
    <p>Plasma is ~93% water normally. When water fraction falls (hyperlipidaemia, myeloma), methods that dilute the sample report lower electrolyte concentrations while the physiologically relevant water concentration is normal. Laboratories should use direct ISE (or measured osmolality) when results do not fit.</p>
  `,
  tip: "Define 'activity in plasma water' vs 'concentration in plasma' — it is the core of pseudohyponatraemia.",
  sources: ["C2", "C1"]
},
{
  id: "cc38", domain: "chem-renal",
  q: "Discuss the biochemical findings in acute kidney injury and the role of new biomarkers.",
  tags: ["AKI", "KDIGO", "NGAL", "biomarkers"],
  answer: `
    <h4>Definition (KDIGO)</h4>
    <p>Rise in creatinine ≥26.5 µmol/L (0.3 mg/dL) within 48 h, or ≥1.5 × baseline within 7 days, or urine output &lt;0.5 mL/kg/h for 6 h. Stage 1: 1.5–1.9 × ; stage 2: 2.0–2.9 × ; stage 3: ≥3 × , creatinine ≥354 µmol/L, or dialysis.</p>
    <h4>Pre-renal vs intrinsic (ATN)</h4>
    <div class="table-wrap"><table>
      <tr><th>Index</th><th>Pre-renal</th><th>Acute tubular necrosis</th></tr>
      <tr><td>Urine Na (mmol/L)</td><td>&lt;20</td><td>&gt;40</td></tr>
      <tr><td>FENa</td><td>&lt;1%</td><td>&gt;2%</td></tr>
      <tr><td>FE urea (on diuretics)</td><td>&lt;35%</td><td>&gt;50%</td></tr>
      <tr><td>Urine osmolality</td><td>&gt;500</td><td>&lt;350</td></tr>
      <tr><td>BUN:creatinine (mg/dL)</td><td>&gt;20:1</td><td>10–15:1</td></tr>
      <tr><td>Sediment</td><td>Bland, hyaline casts</td><td>Muddy brown granular casts, epithelial casts</td></tr>
    </table></div>
    <div class="calc">FENa (%) = (urine Na × plasma creatinine) / (plasma Na × urine creatinine) × 100</div>
    <h4>Biochemical consequences</h4>
    <p>Hyperkalaemia, high-AG metabolic acidosis, hyperphosphataemia, hypocalcaemia, hyperuricaemia; in rhabdomyolysis (e.g. leptospirosis — common in the Philippines after floods), very high CK and myoglobinuria.</p>
    <h4>New biomarkers</h4>
    <p>Creatinine is a late, functional marker. Damage biomarkers rise within hours: <strong>NGAL</strong>, KIM-1, L-FABP, IL-18, and the cell-cycle arrest markers <strong>[TIMP-2]×[IGFBP7]</strong> (NephroCheck, FDA-cleared for risk assessment in ICU). Cystatin C is a functional marker that rises earlier than creatinine. These are mainly used for early risk stratification, not routine diagnosis.</p>
  `,
  tip: "Write the FENa formula and its cut-offs — almost always awarded marks.",
  sources: ["C7", "C1", "C3"]
},
{
  id: "cc39", domain: "chem-renal",
  q: "Discuss the formation of kidney stones and the laboratory investigation of a patient with recurrent nephrolithiasis.",
  tags: ["renal calculi", "hypercalciuria", "stone analysis"],
  answer: `
    <p>Stones form when urine is <strong>supersaturated</strong> with a salt, and nucleation and crystal growth overcome natural inhibitors (citrate, magnesium, Tamm–Horsfall protein, pyrophosphate). Low urine volume is the commonest risk factor — relevant in hot climates such as the Philippines.</p>
    <div class="table-wrap"><table>
      <tr><th>Stone</th><th>Frequency</th><th>Urine pH</th><th>Associations</th></tr>
      <tr><td>Calcium oxalate</td><td>~70–80%</td><td>Any</td><td>Hypercalciuria, hyperoxaluria (enteric — IBD, bariatric surgery), hypocitraturia, hyperuricosuria</td></tr>
      <tr><td>Calcium phosphate</td><td>~10%</td><td>Alkaline</td><td>Distal RTA, primary hyperparathyroidism</td></tr>
      <tr><td>Uric acid</td><td>~10%</td><td>Acid (&lt;5.5)</td><td>Gout, metabolic syndrome, diabetes, tumour lysis; radiolucent</td></tr>
      <tr><td>Struvite (Mg NH₄ PO₄)</td><td>~5–10%</td><td>Alkaline (&gt;7)</td><td>Urease-producing bacteria (Proteus, Klebsiella); staghorn calculi</td></tr>
      <tr><td>Cystine</td><td>~1%</td><td>Acid</td><td>Cystinuria (COLA amino acids); hexagonal crystals; positive cyanide–nitroprusside test</td></tr>
    </table></div>
    <h4>Investigation of recurrent stones</h4>
    <ol>
      <li><strong>Stone analysis</strong> — infrared spectroscopy or X-ray diffraction (chemical spot tests are unreliable).</li>
      <li>Serum: calcium (adjusted), phosphate, uric acid, creatinine, bicarbonate, PTH if calcium high.</li>
      <li><strong>Two 24-h urine collections</strong> on usual diet: volume, calcium, oxalate, citrate, uric acid, sodium, magnesium, phosphate, creatinine, pH; cystine if suspected. Acid preservative for Ca/oxalate; plain or alkaline for uric acid.</li>
      <li>Urinalysis and culture.</li>
    </ol>
  `,
  tip: "Linking each stone type to urine pH is the quickest way to show understanding.",
  sources: ["C1", "C2"]
}
);
