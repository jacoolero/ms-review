/* Microbiology — Gram-positive bacteria, part C (gp31–gp40) */
window.QBANK.push(
{
  id: "gp31", domain: "gpos", star: true,
  q: "Discuss MRSA prevalence and the choice of empiric therapy in Philippine hospitals, where laboratory capacity and drug access vary.",
  tags: ["MRSA", "Philippines", "antibiogram", "empiric therapy"],
  keypoints: ["local antibiogram", "MRSA", "type IV", "Panton–Valentine leukocidin", "incision and drainage", "trimethoprim–sulfamethoxazole", "vancomycin", "AUC-guided", "linezolid", "daptomycin", "ceftaroline", "de-escalation", "therapeutic drug monitoring"],
  answer: `
    <h4>Prevalence is a local, not national, number</h4>
    <p>In Philippine tertiary hospitals, MRSA commonly accounts for roughly 40–60% of clinical <i>S. aureus</i> isolates, with higher proportions in intensive care, surgical wards and device-associated infection. Community-onset skin abscesses may be caused by <strong>SCC<i>mec</i> type IV</strong>, often <strong>Panton–Valentine leukocidin</strong>-positive clones. Because the DOH AMR surveillance network and hospital antibiograms are uneven, a national figure should never replace the <strong>local antibiogram</strong>. Laboratories should report MRSA proportions by specimen and ward, and clinicians should review the data annually with the antimicrobial stewardship committee (S26, S31, S32).</p>
    <h4>Empiric decisions by syndrome</h4>
    <ul>
      <li><strong>Cutaneous abscess:</strong> <strong>incision and drainage</strong> first; add oral <strong>trimethoprim–sulfamethoxazole</strong> or doxycycline for systemic signs, extensive cellulitis or immunocompromise.</li>
      <li><strong>Severe sepsis or pneumonia:</strong> <strong>vancomycin</strong> or <strong>linezolid</strong> while cultures are pending when MRSA risk is high — prior colonisation, recent admission, cavitation after influenza, or haemodialysis.</li>
      <li><strong>Bacteraemia and endocarditis:</strong> vancomycin with <strong>AUC-guided</strong> dosing, source control and echocardiography; switch to <strong>daptomycin</strong> or <strong>ceftaroline</strong> when vancomycin fails or the MIC is 2 mg/L.</li>
    </ul>
    <h4>Access and stewardship</h4>
    <p>In many Philippine hospitals, generic vancomycin is available but <strong>therapeutic drug monitoring</strong>, daptomycin and ceftaroline are not; linezolid may be restricted. Empiric choices must therefore be paired with <strong>de-escalation</strong> at 48–72 hours and an explicit plan for drug shortage. A written shortage protocol and a reserve list for last-line agents belong in the same stewardship plan. Avoid routine vancomycin for cellulitis, treat asymptomatic colonisation only in defined decolonisation protocols, and document the indication and stop date. PSMID guidance and the DOH stewardship programme provide the framework; the local antibiogram supplies the numbers (S26, S31, S33).</p>
  `,
  tip: "Lead with the local antibiogram, then make access and de-escalation part of the answer — not an afterthought.",
  sources: ["S26", "S31", "S32"]
},
{
  id: "gp32", domain: "gpos",
  q: "Using the PSMID community-acquired pneumonia and urinary tract infection guidelines, explain where Gram-positive coverage belongs — and where it does not.",
  tags: ["PSMID", "CAP", "UTI", "Gram-positive coverage"],
  keypoints: ["risk stratification", "Streptococcus pneumoniae", "influenza", "cavitary disease", "vancomycin", "nitrofurantoin", "trimethoprim–sulfamethoxazole", "fosfomycin", "Enterococcus", "ampicillin", "S. saprophyticus", "novobiocin", "catheter colonisation", "asymptomatic bacteriuria"],
  answer: `
    <h4>CAP: cover the pneumococcus, question MRSA</h4>
    <p>Philippine CAP guidance follows <strong>risk stratification</strong>: outpatients without comorbidity receive amoxicillin or a macrolide; those with comorbidity or recent antibiotics receive amoxicillin–clavulanate plus a macrolide, or a respiratory fluoroquinolone. The key Gram-positive target is <strong><i>Streptococcus pneumoniae</i></strong>. <i>S. aureus</i> is uncommon but should be considered after <strong>influenza</strong>, in <strong>cavitary disease</strong>, injection drug use or known MRSA colonisation. Routine <strong>vancomycin</strong> for every severe CAP is not supported and selects VRE and <i>C. difficile</i>.</p>
    <div class="table-wrap"><table>
      <tr><th>Setting</th><th>Gram-positive concern</th><th>Empiric approach</th></tr>
      <tr><td>Outpatient CAP</td><td>Pneumococcus</td><td>Amoxicillin or macrolide</td></tr>
      <tr><td>Severe CAP</td><td>Pneumococcus; MRSA if risk factors</td><td>β-lactam plus macrolide; add vancomycin or linezolid only for MRSA risk</td></tr>
    </table></div>
    <h4>UTI: enterococci and coagulase-negative staphylococci</h4>
    <p>Uncomplicated cystitis is usually coliform; <strong>nitrofurantoin</strong>, <strong>trimethoprim–sulfamethoxazole</strong> or <strong>fosfomycin</strong> remain first-line where susceptibility allows. Gram-positive uropathogens matter in catheterised, instrumented, pregnant and older patients. <strong><i>Enterococcus</i></strong> is intrinsically resistant to cephalosporins, so <strong>ampicillin</strong> or amoxicillin is preferred for susceptible <i>E. faecalis</i>. <strong><i>S. saprophyticus</i></strong> causes cystitis in young sexually active women and is <strong>novobiocin</strong> resistant. Coagulase-negative staphylococci in urine usually mean <strong>catheter colonisation</strong> and should not be treated without symptoms.</p>
    <h4>Stewardship translation</h4>
    <p>Obtain urine and sputum cultures before antibiotics, use the local antibiogram, and stop empirical MRSA coverage when cultures are negative. Avoid treating <strong>asymptomatic bacteriuria</strong> except in pregnancy or before urologic surgery. In the Philippines, where broad-spectrum antibiotics are often available without prescription, the guideline's main value is restraint: it protects penicillin, ampicillin and first-generation cephalosporins for the Gram-positive infections that truly need them (S26, S32). Document the indication and planned duration in the chart so the next shift can review it.</p>
  `,
  tip: "Name the Gram-positive target for each syndrome, then state explicitly when MRSA coverage is not indicated.",
  sources: ["S26", "S32", "S9"]
},
{
  id: "gp33", domain: "gpos", star: true,
  q: "Explain the immunology, Philippine National Immunization Program schedule and population impact of pneumococcal and Haemophilus influenzae type b vaccines.",
  tags: ["PCV13", "Hib", "NIP", "conjugate vaccine"],
  keypoints: ["T-independent", "carrier protein", "T follicular helper", "herd protection", "PCV13", "6, 10 and 14 weeks", "pentavalent", "Hib", "serotype replacement", "cold-chain", "catch-up", "asplenic"],
  answer: `
    <h4>Two conjugate vaccines, one immunological principle</h4>
    <p>Pneumococcal and Hib capsular polysaccharides are <strong>T-independent</strong> antigens: they stimulate B cells without T-cell help, give poor memory and work weakly in infants. Covalent linkage to a <strong>carrier protein</strong> (CRM197, tetanus or diphtheria toxoid) recruits <strong>T follicular helper</strong> cells, generates affinity-matured IgG and memory B cells, and reduces nasopharyngeal carriage — the basis of <strong>herd protection</strong>.</p>
    <h4>Philippine NIP schedule</h4>
    <div class="table-wrap"><table>
      <tr><th>Vaccine</th><th>NIP schedule</th><th>Gram-positive target</th></tr>
      <tr><td><strong>PCV13</strong></td><td><strong>6, 10 and 14 weeks</strong></td><td><i>S. pneumoniae</i> — invasive disease, pneumonia, otitis media</td></tr>
      <tr><td><strong>Pentavalent</strong> DPT–HepB–Hib</td><td><strong>6, 10 and 14 weeks</strong></td><td><i>H. influenzae</i> type b — meningitis, epiglottitis, pneumonia</td></tr>
    </table></div>
    <p>Both are given in the first year through the DOH National Immunization Program; PCV and <strong>Hib</strong> are free in public health centres, while higher-valency PCVs are mainly private-market options. <strong>Catch-up</strong> schedules are individualised, and preterm infants are vaccinated by chronological age.</p>
    <h4>Impact and limits</h4>
    <p>PCV reduced invasive pneumococcal disease and radiologically confirmed pneumonia, with indirect protection of unvaccinated adults. <strong>Serotype replacement</strong> by non-vaccine types and penicillin-resistant clones has followed, so surveillance must continue. Hib conjugate vaccine reduced meningitis and pneumonia dramatically and suppresses pharyngeal carriage. Neither vaccine covers <i>S. aureus</i> or group A streptococcus; their role is to prevent the Gram-positive diseases that drive paediatric antibiotic use.</p>
    <h4>Philippine operational issues</h4>
    <p><strong>Cold-chain</strong> integrity, vaccine hesitancy, stock-outs and geographic access determine real-world impact more than the product insert. <strong>Asplenic</strong>, HIV-infected and nephrotic children need additional pneumococcal protection and education. Nurses and medical technologists should explain the schedule and refer missed doses rather than restarting the series (S26, S31, S33).</p>
  `,
  tip: "Conjugate, carriage, herd protection, replacement — four words that carry the immunology and the epidemiology.",
  sources: ["S31", "S33", "S26"]
},
{
  id: "gp34", domain: "gpos", star: true,
  q: "Discuss the diagnosis and treatment of group A streptococcal pharyngitis and the prevention of acute rheumatic fever in Filipino children.",
  tags: ["GAS pharyngitis", "rheumatic fever", "Filipino children", "penicillin"],
  keypoints: ["group A streptococcus", "acute rheumatic fever", "Jones criteria", "rapid antigen test", "throat culture", "ASO titres", "penicillin V", "amoxicillin", "benzathine penicillin", "10-day course", "secondary prophylaxis", "echocardiography"],
  answer: `
    <h4>Why it matters in the Philippines</h4>
    <p><strong>Acute rheumatic fever</strong> and rheumatic heart disease remain important in Filipino children, especially in crowded, low-income communities with limited access to early pharyngitis care. <strong>Group A streptococcus</strong> (GAS) pharyngitis peaks at 5–15 years; impetigo is also common and can drive post-streptococcal glomerulonephritis, although only pharyngeal infection triggers rheumatic fever.</p>
    <h4>Diagnosis</h4>
    <p>Clinical scores support but do not confirm the diagnosis. Sore throat with fever, tonsillar exudate and tender anterior cervical nodes without cough suggests GAS; rhinorrhoea, cough and hoarseness suggest a virus. Use a <strong>rapid antigen test</strong> or <strong>throat culture</strong>; a negative rapid test in a child should be confirmed by culture. Do not use <strong>ASO titres</strong> to diagnose acute pharyngitis — they indicate past exposure. In Philippine practice, many children receive antibiotics for viral pharyngitis, which wastes scarce drugs and promotes resistance.</p>
    <h4>Treatment and prevention</h4>
    <div class="table-wrap"><table>
      <tr><th>Purpose</th><th>Regimen</th></tr>
      <tr><td>Primary GAS pharyngitis</td><td><strong>Penicillin V</strong> for 10 days or <strong>amoxicillin</strong> once daily for 10 days; <strong>benzathine penicillin</strong> G single dose if adherence is uncertain</td></tr>
      <tr><td>Secondary rheumatic fever prophylaxis</td><td>Benzathine penicillin G every 3–4 weeks; oral penicillin V as alternative</td></tr>
    </table></div>
    <p>Treating within 9 days of onset prevents rheumatic fever. Penicillin remains uniformly active; macrolides are reserved for true allergy. Emphasise completion of the <strong>10-day course</strong> and give analgesia.</p>
    <h4>Rheumatic fever and the patient journey</h4>
    <p>Diagnose by the <strong>Jones criteria</strong> with evidence of preceding GAS, and obtain <strong>echocardiography</strong>. Carditis determines prognosis. <strong>Secondary prophylaxis</strong> duration depends on carditis severity and age, often into adulthood. School and community programmes that provide free throat swabs, register cases and ensure penicillin supply are more effective than repeated short courses. Nurses and medical technologists can support adherence, documentation and contact education (S26, S32, S33).</p>
  `,
  tip: "Penicillin for 10 days, benzathine penicillin for secondary prophylaxis, and never ASO for acute diagnosis.",
  sources: ["S26", "S32", "S33"]
},
{
  id: "gp35", domain: "gpos", star: true,
  q: "Analyse antibiotic access, antimicrobial stewardship and AMR surveillance for Gram-positive infections in the Philippine health system.",
  tags: ["stewardship", "AMR surveillance", "Philippines", "access"],
  keypoints: ["access paradox", "DOH Antimicrobial Resistance Surveillance Program", "RITM", "GLASS", "local antibiograms", "CLSI/EUCAST", "48–72-hour review", "IV-to-oral switch", "selective reporting", "pre-authorisation", "device bundles", "days of therapy"],
  answer: `
    <h4>The access paradox</h4>
    <p>The Philippines has wide retail availability of antibiotics, including without prescription, yet essential narrow-spectrum agents and microbiology capacity are unevenly distributed. A patient may self-medicate with a broad-spectrum drug for a viral sore throat while a hospital lacks cefazolin or a reliable vancomycin assay. This combination — excess access to the wrong agents and inadequate access to the right ones — is the central stewardship problem.</p>
    <h4>Surveillance</h4>
    <p>The <strong>DOH Antimicrobial Resistance Surveillance Program</strong>, coordinated with <strong>RITM</strong> and the WHO <strong>GLASS</strong> network, collects susceptibility data from sentinel hospitals. Gram-positive priorities include MRSA, vancomycin-resistant <i>Enterococcus</i>, penicillin-non-susceptible pneumococcus and macrolide-resistant group A streptococcus. Surveillance must be tied to <strong>local antibiograms</strong>, because national percentages conceal ward-level variation. Laboratories need quality-assured AST, <strong>CLSI/EUCAST</strong> breakpoints and timely reporting to prescribers.</p>
    <h4>Stewardship levers</h4>
    <div class="table-wrap"><table>
      <tr><th>Lever</th><th>Action</th></tr>
      <tr><td>Prescribing</td><td>Diagnosis-linked guidelines, <strong>48–72-hour review</strong>, <strong>IV-to-oral switch</strong></td></tr>
      <tr><td>Laboratory</td><td><strong>Selective reporting</strong>, rapid identification and susceptibility testing, cascade reporting of narrow agents</td></tr>
      <tr><td>Pharmacy</td><td><strong>Pre-authorisation</strong> of vancomycin, linezolid and daptomycin</td></tr>
      <tr><td>Infection control</td><td>Hand hygiene, <strong>device bundles</strong>, screening and isolation for MRSA and VRE</td></tr>
    </table></div>
    <h4>What success looks like</h4>
    <p>Stewardship is not merely restricting drugs; it is ensuring the right patient receives the right Gram-positive agent at the right dose and duration. Metrics include <strong>days of therapy</strong> per 1000 patient-days, MRSA bacteraemia rates, <i>C. difficile</i> incidence, guideline concordance and de-escalation rates. Community engagement, prescriber education and enforcement of dispensing rules complement hospital programmes. Report these data to the stewardship and infection control committees every quarter. Without laboratory data and reliable supply, even the best guideline cannot be implemented (S14, S26, S31, S33).</p>
  `,
  tip: "Frame access and stewardship as two sides of one problem, then name the surveillance network and the metrics.",
  sources: ["S14", "S26", "S31", "S33"]
},
{
  id: "gp36", domain: "gpos", star: true,
  q: "A patient has a second recurrence of Clostridioides difficile infection. Explain the pathophysiology of recurrence and design a diagnostic and therapeutic plan beyond first-line treatment.",
  tags: ["C. difficile", "recurrence", "FMT", "diagnostic stewardship"],
  keypoints: ["spores", "colonisation resistance", "dysbiosis", "toxin A", "toxin B", "two-step algorithm", "nucleic acid amplification", "fidaxomicin", "vancomycin taper", "faecal microbiota transplantation", "bezlotoxumab", "fulminant", "bleach"],
  answer: `
    <h4>Why recurrence happens</h4>
    <p>Recurrence reflects persistent <strong>spores</strong>, incomplete restoration of <strong>colonisation resistance</strong> and ongoing <strong>dysbiosis</strong>. <i>C. difficile</i> spores survive alcohol and many disinfectants, germinate in the bile-acid-rich colon, and produce <strong>toxin A</strong> (enterotoxin) and <strong>toxin B</strong> (cytotoxin), which glucosylate Rho-family GTPases and disrupt tight junctions. Biofilm and hypervirulent strains increase recurrence. Older age, proton-pump inhibitors, continued antibiotics and immunosuppression are the main clinical drivers. The dysbiosis that permitted the first episode usually persists, so stopping the offending antibiotic is as important as choosing a new one.</p>
    <h4>Diagnosis</h4>
    <p>Test only unformed stool from patients with compatible symptoms. A <strong>two-step algorithm</strong> — glutamate dehydrogenase antigen plus toxin enzyme immunoassay, with <strong>nucleic acid amplification</strong> for discordant results — balances sensitivity and specificity. NAAT alone detects colonisation as well as disease. Do not test for cure; toxin can persist. In ileus, send a rectal swab or aspirate. Imaging is reserved for suspected megacolon, perforation or ileus.</p>
    <div class="table-wrap"><table>
      <tr><th>Episode</th><th>Preferred treatment</th></tr>
      <tr><td>Initial</td><td><strong>Fidaxomicin</strong>, or oral vancomycin if unavailable</td></tr>
      <tr><td>First recurrence</td><td>Fidaxomicin, or <strong>vancomycin taper</strong> and pulse</td></tr>
      <tr><td>Second or later recurrence</td><td><strong>Faecal microbiota transplantation</strong>; fidaxomicin; <strong>bezlotoxumab</strong> in high-risk patients</td></tr>
      <tr><td><strong>Fulminant</strong> disease</td><td>High-dose oral and rectal vancomycin plus IV metronidazole; urgent surgery</td></tr>
    </table></div>
    <h4>Beyond the antibiotic</h4>
    <p>Stop unnecessary antibiotics and review acid suppression. Use soap and water, not alcohol, for hand hygiene, and <strong>bleach</strong> for environmental cleaning. Faecal microbiota transplantation restores colonisation resistance and is highly effective for recurrent disease. Bezlotoxumab, a monoclonal antibody against toxin B, reduces recurrence in high-risk patients. In the Philippines, stool-bank access is limited, so prevention, diagnostic stewardship and oral vancomycin optimisation matter most (S4, S9, S12).</p>
  `,
  tip: "Distinguish colonisation from disease before treating, then match the regimen to the recurrence number.",
  sources: ["S4", "S9", "S12"]
},
{
  id: "gp37", domain: "gpos",
  q: "Explain vancomycin resistance in enterococci, the laboratory methods that detect it, and the management of VRE bacteraemia and endocarditis.",
  tags: ["VRE", "vanA", "linezolid", "daptomycin"],
  keypoints: ["vanA", "D-Ala-D-Lactate", "vanB", "vanC", "E. faecium", "brain-heart infusion agar", "MIC testing", "linezolid", "daptomycin", "ceftaroline", "source control", "contact precautions"],
  answer: `
    <h4>Genetics and phenotype</h4>
    <p><strong><i>vanA</i></strong> encodes a ligase that builds <strong>D-Ala-D-Lactate</strong>, to which vancomycin cannot bind; it is inducible, transferable on Tn<i>1546</i> and confers high-level resistance to vancomycin and teicoplanin. <strong><i>vanB</i></strong> is also acquired but variable and teicoplanin-susceptible; <strong><i>vanC</i></strong> is intrinsic to <i>E. gallinarum</i> and <i>E. casseliflavus</i> and low-level. <strong><i>E. faecium</i></strong> is more often resistant than <i>E. faecalis</i> and more often hospital-associated.</p>
    <div class="table-wrap"><table>
      <tr><th>Genotype</th><th>Phenotype</th></tr>
      <tr><td><i>vanA</i></td><td>High-level vancomycin and teicoplanin resistance</td></tr>
      <tr><td><i>vanB</i></td><td>Variable vancomycin resistance; teicoplanin susceptible</td></tr>
      <tr><td><i>vanC</i></td><td>Intrinsic, low-level resistance in <i>E. gallinarum</i> and <i>E. casseliflavus</i></td></tr>
    </table></div>
    <h4>Detection</h4>
    <p>Screen with <strong>brain-heart infusion agar</strong> containing 6 µg/mL vancomycin and confirm with <strong>MIC testing</strong>; molecular assays detect <i>vanA</i> and <i>vanB</i> directly from isolates or surveillance swabs. Report MICs, not just categories, because daptomycin and linezolid decisions depend on them. Inducible resistance can be missed by automated panels, so agar screening remains useful.</p>
    <h4>Invasive disease</h4>
    <p>Bacteraemia requires <strong>source control</strong>: remove the catheter, drain the abscess, relieve biliary or urinary obstruction. For endocarditis, use <strong>linezolid</strong> 600 mg twice daily or <strong>daptomycin</strong> 8–12 mg/kg IV once daily; daptomycin is bactericidal but inactivated by surfactant, so it is not for pneumonia. Combination therapy — daptomycin plus <strong>ceftaroline</strong> or ampicillin — is used for refractory bacteraemia and endocarditis. Tigecycline is not appropriate for bacteraemia. Monitor linezolid for thrombocytopenia and serotonin toxicity, and daptomycin for creatine kinase elevation.</p>
    <h4>Prevention</h4>
    <p>VRE spreads on hands and shared equipment. <strong>Contact precautions</strong>, cohorting, environmental cleaning, antimicrobial stewardship and screening of high-risk admissions are core. In Philippine hospitals with limited single rooms, cohorting and dedicated equipment may be the practical alternative. Decolonisation is not established for VRE; the goal is containment (S4, S8, S9).</p>
  `,
  tip: "Genotype explains phenotype; then separate bacteriostatic linezolid from bactericidal daptomycin and remember source control.",
  sources: ["S4", "S8", "S9"]
},
{
  id: "gp38", domain: "gpos",
  q: "Discuss coagulase-negative staphylococci as device-associated pathogens: biofilm, the contaminant problem, and management of catheter and prosthetic infections.",
  tags: ["CoNS", "biofilm", "device infection", "prosthetic joint"],
  keypoints: ["coagulase-negative staphylococci", "S. epidermidis", "S. lugdunensis", "icaADBC", "biofilm", "multiple blood culture sets", "sonication", "remove the catheter", "rifampicin", "vancomycin", "prosthetic valve endocarditis", "chlorhexidine"],
  answer: `
    <h4>Organism and biofilm</h4>
    <p><strong>Coagulase-negative staphylococci</strong> (CoNS) — mainly <i>S. epidermidis</i>, also <strong><i>S. lugdunensis</i></strong>, <i>S. haemolyticus</i> and <i>S. capitis</i> — are skin commensals. They adhere to plastic and metal, produce polysaccharide intercellular adhesin via the <strong><i>icaADBC</i></strong> operon, and form <strong>biofilm</strong> that resists phagocytes and antibiotics. <i>S. lugdunensis</i> is an exception: it behaves aggressively, causing native-valve endocarditis and severe skin infection.</p>
    <h4>Contaminant or pathogen?</h4>
    <p>Because CoNS are ubiquitous on skin, a single positive culture is often contamination. Suggest true infection when:</p>
    <ul>
      <li><strong>multiple blood culture sets</strong> grow the same organism;</li>
      <li>the catheter lumen culture turns positive earlier than the peripheral culture;</li>
      <li>there is a device, neutropenia or persistent fever;</li>
      <li>the same clone is recovered from the device and blood.</li>
    </ul>
    <p>For prosthetic joint infection, multiple periprosthetic tissue samples and <strong>sonication</strong> of the explanted implant increase yield. Hold cultures long enough for indolent organisms.</p>
    <h4>Management</h4>
    <div class="table-wrap"><table>
      <tr><th>Infection</th><th>Core management</th></tr>
      <tr><td>Central line-associated bloodstream infection</td><td><strong>Remove the catheter</strong>; vancomycin or cefazolin by susceptibility; 5–7 days if uncomplicated</td></tr>
      <tr><td><strong>Prosthetic valve endocarditis</strong></td><td><strong>Vancomycin</strong> plus <strong>rifampicin</strong> and gentamicin; valve replacement often needed</td></tr>
      <tr><td>Prosthetic joint infection</td><td>Debridement with implant retention or exchange; rifampicin combination for retained hardware</td></tr>
    </table></div>
    <h4>Prevention and stewardship</h4>
    <p>Use full-barrier drapes, <strong>chlorhexidine</strong> skin preparation, antibiotic-impregnated catheters where appropriate, and prompt removal of unnecessary lines. Track device days and catheter-related bloodstream infection rates to know whether the bundle is working. Do not treat a single CoNS blood culture with a long vancomycin course; that converts a contaminant into a resistance pressure. In the Philippine setting, where device replacement may be costly, early expert review and correct culture technique prevent both undertreatment and overtreatment (S9, S12, S22).</p>
  `,
  tip: "The decisive question is whether the device is infected, not whether the culture is positive — say biofilm and device removal.",
  sources: ["S9", "S12", "S22"]
},
{
  id: "gp39", domain: "gpos",
  q: "Explain why Bacillus cereus bacteraemia in a neutropenic patient is not a contaminant, and describe the management of invasive and ocular disease.",
  tags: ["Bacillus cereus", "neutropenia", "endophthalmitis", "bacteraemia"],
  keypoints: ["spore-forming", "cereulide", "haemolysin BL", "neutropenic", "MALDI-TOF", "vancomycin", "clindamycin", "intravitreal", "vitrectomy", "remove an infected central venous catheter", "food hygiene"],
  answer: `
    <h4>The organism</h4>
    <p><i>Bacillus cereus</i> is a large, motile, <strong>spore-forming</strong>, β-haemolytic Gram-positive rod. Spores survive cooking and germinate in food held warm or cooled slowly. It produces <strong>cereulide</strong> (heat-stable emetic toxin), diarrhoeal enterotoxins, <strong>haemolysin BL</strong>, non-haemolytic enterotoxin and phospholipases. Unlike <i>B. anthracis</i>, it is motile, haemolytic, penicillin-resistant and non-capsulate.</p>
    <h4>Why blood cultures matter in neutropenia</h4>
    <p>In <strong>neutropenic</strong> patients, <i>B. cereus</i> bacteraemia is often fulminant and can seed the lung, brain, liver and bone. It is a recognised cause of central-line infection, especially with prolonged neutropenia and mucosal damage. A single positive culture should not be dismissed as a skin contaminant when the patient is neutropenic, has a device, or has clinical sepsis. Species identification by <strong>MALDI-TOF</strong> and susceptibility testing are required because resistance varies.</p>
    <h4>Clinical syndromes</h4>
    <div class="table-wrap"><table>
      <tr><th>Syndrome</th><th>Key features</th><th>Treatment</th></tr>
      <tr><td>Neutropenic bacteraemia</td><td>Fever, device, rapid deterioration</td><td><strong>Vancomycin</strong> or <strong>clindamycin</strong>; remove line</td></tr>
      <tr><td>Endophthalmitis or keratitis</td><td>Pain, hypopyon, vision loss after trauma or contact lens</td><td><strong>Intravitreal</strong> vancomycin plus ceftazidime; <strong>vitrectomy</strong></td></tr>
      <tr><td>Food poisoning</td><td>Vomiting within hours or watery diarrhoea at 8–16 h</td><td>Supportive care</td></tr>
    </table></div>
    <h4>Management principles</h4>
    <p>For invasive disease, start vancomycin or clindamycin, with ciprofloxacin as an alternative, and adjust to susceptibility; many isolates are resistant to penicillins and cephalosporins. <strong>Remove an infected central venous catheter</strong> and repeat blood cultures until sterile; persistent fever should prompt a search for abscess, endocarditis or central nervous system seeding. Ocular infection is an emergency: obtain ophthalmology review the same day, inject intravitreal antibiotics and perform vitrectomy when indicated. Prevention is <strong>food hygiene</strong> — rapid cooling, refrigeration and thorough reheating of rice (S1, S4, S12).</p>
  `,
  tip: "In a neutropenic patient, Bacillus in blood is a pathogen until proven otherwise — and the eye is a surgical emergency.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "gp40", domain: "gpos", star: true,
  q: "Outline a penicillin allergy delabeling programme for a hospital, including risk stratification, testing and the stewardship impact on Gram-positive therapy.",
  tags: ["penicillin allergy", "delabeling", "stewardship", "oral challenge"],
  keypoints: ["penicillin-allergic", "delabel", "risk stratification", "direct oral challenge", "skin testing", "SJS/TEN", "DRESS", "cefazolin", "carbapenems", "aztreonam", "electronic label removal", "vancomycin days of therapy"],
  answer: `
    <h4>Why delabel</h4>
    <p>Most patients labelled <strong>penicillin-allergic</strong> are not allergic. The label drives use of vancomycin, clindamycin, linezolid and fluoroquinolones, increasing MRSA, VRE and <i>C. difficile</i> risk, cost and length of stay. In Gram-positive infection, it can deny a patient the best drug — penicillin for streptococci, <strong>cefazolin</strong> for MSSA, ampicillin for enterococci and <i>Listeria</i>.</p>
    <h4>Risk stratification</h4>
    <div class="table-wrap"><table>
      <tr><th>History</th><th>Approach</th></tr>
      <tr><td>Benign rash, remote, no mucosal involvement</td><td><strong>Direct oral challenge</strong> or delabel after review</td></tr>
      <tr><td>Immediate urticaria, angioedema, bronchospasm</td><td><strong>Skin testing</strong> with major and minor determinants, then challenge</td></tr>
      <tr><td><strong>SJS/TEN</strong>, <strong>DRESS</strong>, AGEP, haemolytic anaemia</td><td>Avoid; specialist evaluation; no routine challenge</td></tr>
    </table></div>
    <p>Document the drug, timing, symptoms, severity and treatment. A vague childhood "allergy" is not a diagnosis.</p>
    <h4>Testing and cross-reactivity</h4>
    <p>Penicillin skin testing has a high negative predictive value when performed with appropriate reagents; followed by an oral amoxicillin challenge, it safely removes the label in most patients. Cross-reactivity with cephalosporins depends on side-chain similarity and is low for cefazolin and most later-generation agents. <strong>Carbapenems</strong> are usually tolerated; <strong>aztreonam</strong> is safe except after ceftazidime reactions. Severe delayed reactions require avoidance.</p>
    <h4>Programme and impact</h4>
    <p>Build a multidisciplinary pathway: nurse-led history, allergy-trained physician or pharmacist review, protocolised challenge in a monitored area, and <strong>electronic label removal</strong>. Target high-yield groups — pre-surgical patients, those needing cefazolin, and patients receiving vancomycin for a vague label. In Philippine hospitals, where allergy testing is limited, a structured history plus direct challenge for low-risk patients is feasible and inexpensive. Track de-labelling rate, <strong>vancomycin days of therapy</strong> and <i>C. difficile</i> incidence. The programme is stewardship, patient safety and resistance control in one intervention (S4, S9, S26).</p>
  `,
  tip: "Risk-stratify first, challenge low-risk patients directly, and measure the programme by vancomycin use avoided.",
  sources: ["S4", "S9", "S26"]
}
);
