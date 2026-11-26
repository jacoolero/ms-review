/* Mycology — essays part C: Philippine practice, advanced diagnostics and outbreak science, mc31–mc40 */
window.QBANK.push(
{
  id: "mc31", domain: "mycology", star: true,
  q: "Discuss Candida auris as a Philippine hospital problem: identification, transmission, treatment and the infection-control response.",
  tags: ["Candida auris", "Philippines", "hospital outbreak", "infection control"],
  keypoints: ["skin colonisation", "surface contamination", "misidentification", "C. haemulonii", "MALDI-TOF and ITS sequencing", "antifungal susceptibility testing", "echinocandin first-line", "pan-resistant", "liposomal amphotericin B", "contact precautions", "single room", "composite swab screening", "environmental cleaning", "RA 11332 notification", "reference laboratory referral"],
  answer: `
    <h4>A hospital problem before it is a treatment problem</h4>
    <p><em>Candida auris</em> is a clonal, multidrug-resistant yeast that behaves unlike other candidaemias. It colonises skin for months and survives on dry surfaces, spreading through hands, thermometers and inadequately cleaned rooms. In Philippine tertiary and referral hospitals the risk is concentrated in intensive care, neonatal and burn units and long-term care, where occupancy is high and screening cultures are not routine. Because the organism is not on most surveillance panels, the first signal is often an unexpected cluster of candidaemia or an isolate a biochemical panel cannot name.</p>
    <h4>The identification trap</h4>
    <p>Commercial biochemical systems misidentify <em>C. auris</em> as <em>C. haemulonii</em>, <em>C. famata</em>, <em>C. sake</em> or <em>Saccharomyces</em>. Any yeast with unusual biochemical behaviour, growth at 40–42 °C or resistance to fluconazole should be referred. Confirmation needs <strong>MALDI-TOF with an updated library, ITS sequencing or a specific PCR</strong>, and every isolate needs susceptibility testing because resistance varies by clade. In the Philippines this capacity sits mainly in reference and tertiary laboratories, so a referral pathway — not a single test — is the practical solution.</p>
    <h4>Clinical management</h4>
    <ul>
      <li><strong>Echinocandin first-line</strong> for candidaemia and invasive disease; liposomal amphotericin B for echinocandin-resistant or pan-resistant isolates, sometimes in combination.</li>
      <li><strong>Remove central venous catheters</strong> and other devices, drain collections and repeat cultures until sterile.</li>
      <li><strong>Treat for 14 days after the first negative culture</strong>, longer for deep-seated infection, and arrange a dilated retinal examination.</li>
      <li>Avoid treating colonisation, but do not ignore a positive screen in a high-risk inpatient.</li>
    </ul>
    <h4>Infection-control bundle</h4>
    <p>Place patients under <strong>contact precautions in a single room</strong> with dedicated equipment, cohort confirmed cases, and screen contacts with composite swabs of axilla, groin and nares. Clean with a product active against the organism, including hydrogen-peroxide systems where available, and audit practice. Notify the hospital infection-control team and public health authorities promptly: a cluster is a reportable event under RA 11332, and early escalation is what prevents one introduction becoming an endemic ward problem.</p>
  `,
  tip: "Say identification, colonisation and cleaning before drugs — the epidemiology, not the MIC, is what stops C. auris.",
  sources: ["S31", "S26", "S33", "S18"]
},
{
  id: "mc32", domain: "mycology", star: true,
  q: "Explain why mucormycosis is so severe in Filipino diabetic patients, and outline the emergency pathway from recognition to surgery and antifungal therapy.",
  tags: ["mucormycosis", "diabetes", "ketoacidosis", "Philippines"],
  keypoints: ["diabetic ketoacidosis", "free iron", "Rhizopus", "angioinvasion", "black eschar", "orbital signs", "pauci-septate right-angle hyphae", "biopsy and histology", "beta-D-glucan negative", "urgent debridement", "liposomal amphotericin B", "posaconazole step-down", "correct acidosis", "stop deferoxamine", "access and transfer"],
  answer: `
    <h4>Why Filipino diabetic patients are at particular risk</h4>
    <p>Mucormycosis is uncommon but disproportionately fatal in the Philippines because the conditions that drive it — poorly controlled type 2 diabetes and diabetic ketoacidosis — are common, and presentation is often delayed by cost, distance and self-medication. Acidosis releases free iron, and <em>Rhizopus</em> and related Mucorales acquire iron through high-affinity uptake systems, so ketoacidosis converts a colonising spore into an angioinvasive mould. Corticosteroid use, including steroids prescribed without glucose monitoring, adds further risk.</p>
    <h4>Recognising rhino-orbital-cerebral disease</h4>
    <p>Early features are deceptively ordinary: facial or dental pain, nasal obstruction, blood-stained discharge and fever. Later signs are <strong>black eschar on the palate or turbinates, periorbital swelling, ophthalmoplegia, ptosis and vision loss</strong>. Any diabetic with sinusitis and orbital signs needs urgent imaging, not another course of antibiotics. Pulmonary, cutaneous and gastrointestinal forms occur in neutropenia, trauma and malnutrition.</p>
    <h4>Diagnosis</h4>
    <p>Biopsy is definitive: histology shows <strong>broad, pauci-septate hyphae with right-angle branching invading blood vessels</strong>, with necrosis and thrombosis. Culture and MALDI-TOF identify the genus, but a negative culture does not exclude disease. CT and MRI map sinus, orbital and intracranial extension; &beta;-D-glucan is characteristically negative, which helps distinguish the infection from aspergillosis.</p>
    <h4>Emergency management</h4>
    <div class="table-wrap"><table>
      <tr><th>Priority</th><th>Action</th></tr>
      <tr><td>Airway and sinuses</td><td>Urgent, repeated <strong>surgical debridement</strong>; orbital exenteration if needed</td></tr>
      <tr><td>Antifungal</td><td>High-dose <strong>liposomal amphotericin B</strong>; posaconazole or isavuconazole for step-down or salvage</td></tr>
      <tr><td>Metabolic</td><td>Correct ketoacidosis with fluids and insulin; stop deferoxamine; reduce steroids</td></tr>
      <tr><td>Access</td><td>Secure drug and surgical team early; transfer if the facility cannot provide both</td></tr>
    </table></div>
    <p>Outcomes depend more on time to surgery than on the antifungal chosen. Mortality remains high, and survivors need prolonged follow-up for recurrence and for the metabolic control that prevents it.</p>
  `,
  tip: "Ketoacidosis, iron and right-angle hyphae explain the disease; time to debridement explains the outcome.",
  sources: ["S26", "S32", "S31", "S18"]
},
{
  id: "mc33", domain: "mycology", star: true,
  q: "Discuss cryptococcal meningitis in the Philippine HIV programme: screening, diagnosis, treatment, IRIS and the access constraints that determine outcome.",
  tags: ["cryptococcal meningitis", "HIV", "CrAg", "Philippines"],
  keypoints: ["late HIV diagnosis", "CD4 below 100", "CrAg lateral flow assay", "reflex testing", "lumbar puncture", "opening pressure", "India ink", "liposomal amphotericin B", "flucytosine", "fluconazole consolidation", "therapeutic lumbar puncture", "ART after 4 to 6 weeks", "IRIS", "RA 11166", "linkage to care"],
  answer: `
    <h4>The Philippine epidemiologic setting</h4>
    <p>The Philippines has one of the fastest-growing HIV epidemics in the Western Pacific, and a large proportion of new diagnoses are made late, with CD4 counts already below 100 cells/µL. Cryptococcal meningitis is therefore not a rare imported diagnosis but a predictable complication of late presentation, and it kills more people than its incidence suggests because it is recognised after weeks of headache and treated with incomplete regimens.</p>
    <h4>Screening and diagnosis</h4>
    <p>Serum <strong>cryptococcal antigen (CrAg)</strong> lateral flow assay should be offered before ART to every patient with CD4 below 100, with reflex testing built into the CD4 pathway so that a low count automatically triggers CrAg. A positive result needs <strong>lumbar puncture</strong> with opening pressure, cell count, protein, glucose, India ink and CSF CrAg. Raised opening pressure is common and dangerous; it must be measured and treated, not merely noted.</p>
    <h4>Treatment</h4>
    <div class="table-wrap"><table>
      <tr><th>Phase</th><th>Regimen</th></tr>
      <tr><td>Induction (2 weeks)</td><td><strong>Liposomal amphotericin B plus flucytosine</strong>, with fluconazole; where flucytosine is unavailable, amphotericin B plus fluconazole</td></tr>
      <tr><td>Consolidation (8 weeks)</td><td>Fluconazole 400–800 mg daily</td></tr>
      <tr><td>Maintenance</td><td>Fluconazole 200 mg daily until immune reconstitution, usually at least 12 months</td></tr>
      <tr><td>Raised pressure</td><td>Repeated therapeutic lumbar punctures or a shunt</td></tr>
    </table></div>
    <h4>ART timing, IRIS and access</h4>
    <p>Start ART after about <strong>4–6 weeks</strong> to reduce IRIS and mortality; cryptococcal IRIS then presents as recurrent headache, fever and rising intracranial pressure weeks after immune recovery, and is managed by continuing both therapies, controlling pressure and reserving corticosteroids for severe disease. In practice the binding constraints are <strong>access to liposomal amphotericin B and flucytosine</strong>, capacity for repeated lumbar puncture, and linkage to lifelong ART under RA 11166. Screening is only ethical if the whole pathway — puncture, drug, ART, follow-up — is funded and staffed.</p>
  `,
  tip: "CrAg before ART, amphotericin plus flucytosine, and pressure control — then admit what access does to the regimen.",
  sources: ["S26", "S33", "S16", "S11"]
},
{
  id: "mc34", domain: "mycology", star: true,
  q: "Analyse antifungal access and stewardship in the Philippines. What interventions are feasible, and how should they be measured?",
  tags: ["antifungal stewardship", "access", "Philippines", "procurement"],
  keypoints: ["out-of-pocket payment", "stock-outs", "named-patient importation", "formulary restriction", "pre-authorisation", "audit and feedback", "de-escalation", "IV to oral switch", "therapeutic drug monitoring", "diagnostic stewardship", "pooled procurement", "DOH stewardship committees", "days of therapy", "resistance and mortality"],
  answer: `
    <h4>The access problem</h4>
    <p>Antifungal stewardship in the Philippines cannot be separated from access. A small number of agents is registered and stocked, procurement is hospital by hospital, and patients frequently pay out of pocket. Liposomal amphotericin B, flucytosine, voriconazole and posaconazole may be unavailable, unaffordable or obtainable only through named-patient importation, so clinicians ration by cost rather than by indication. When the right drug is absent, the alternative is often a prolonged course of a less effective agent, which is both a clinical and a resistance problem.</p>
    <h4>What stewardship should do</h4>
    <ul>
      <li><strong>Restrict and pre-authorise</strong> mould-active agents, with a fast-release pathway for suspected invasive disease so that restriction never becomes delay.</li>
      <li><strong>Audit and feed back</strong> on indication, dose, interaction and duration, using the prescription as the unit of review.</li>
      <li><strong>De-escalate</strong> from an echinocandin to fluconazole when the isolate is susceptible and the patient is stable; switch to oral when absorption is adequate.</li>
      <li><strong>Monitor levels</strong> of voriconazole, posaconazole, itraconazole and flucytosine where a laboratory can provide them.</li>
      <li><strong>Stop</strong> therapy when a credible alternative diagnosis emerges, and refuse to treat colonisation.</li>
    </ul>
    <h4>Diagnostics and procurement are stewardship tools</h4>
    <p>Stewardship fails when the laboratory cannot identify to species or test susceptibility, because prescribing then rests on epidemiology alone. Investment in MALDI-TOF, chromogenic media and a referral line to a reference laboratory changes prescribing more than another guideline. Equally, pooled procurement, forecasting and a national essential-medicines list reduce price and stock-outs. Hospital antimicrobial stewardship committees required under DOH policy are the natural home for this work, and PSMID guidance should be adapted to the local formulary rather than copied wholesale.</p>
    <h4>Measuring it</h4>
    <div class="table-wrap"><table>
      <tr><th>Metric</th><th>What it shows</th></tr>
      <tr><td>Days of therapy per 1000 patient-days</td><td>Volume and trend of antifungal use</td></tr>
      <tr><td>Proportion de-escalated within 72 hours</td><td>Responsiveness to susceptibility results</td></tr>
      <tr><td>Appropriateness on audit</td><td>Quality of indication and dosing</td></tr>
      <tr><td>Stock-out days and out-of-pocket cost</td><td>Whether access undermines the programme</td></tr>
    </table></div>
    <p>Report these with resistance and mortality data so that stewardship is judged by outcomes, not by expenditure alone.</p>
  `,
  tip: "In the Philippines, stewardship that ignores procurement and price is theoretical — pair every restriction with an access fix.",
  sources: ["S26", "S31", "S33", "S23"]
},
{
  id: "mc35", domain: "mycology", star: true,
  q: "Explain recalcitrant tinea corporis in the Philippines: how steroid-containing creams, resistant dermatophytes and diagnostic delay produce treatment failure.",
  tags: ["tinea corporis", "tinea incognito", "terbinafine resistance", "Philippines"],
  keypoints: ["over-the-counter combination creams", "potent corticosteroid", "tinea incognito", "follicular papules", "Trichophyton indotineae", "SQLE mutation", "squalene epoxidase", "KOH microscopy", "ITS sequencing", "terbinafine", "itraconazole", "treatment duration", "household and fomites", "prescription-only enforcement"],
  answer: `
    <h4>A dermatosis transformed by treatment</h4>
    <p>Tinea corporis is usually a simple annular plaque, but in the Philippines it is often seen after weeks of self-medication with over-the-counter creams. Combination products containing a potent corticosteroid with an antifungal are widely sold, frequently without a prescription, and they suppress inflammation while allowing the dermatophyte to spread. The result is <strong>tinea incognito</strong>: ill-defined, widespread, less scaly and often misdiagnosed as eczema, with follicular papules or deep plaques once the infection reaches the follicle.</p>
    <h4>Reasons for treatment failure</h4>
    <ul>
      <li><strong>Steroid-modified disease</strong> that no longer looks fungal, so the antifungal is stopped.</li>
      <li><strong>Inadequate duration or dose</strong>, and poor adherence over a two- to four-week course.</li>
      <li><strong>Reinfection</strong> from household members, combs, towels, footwear and shared bedding.</li>
      <li><strong>True drug resistance</strong>, increasingly reported in the <em>Trichophyton mentagrophytes</em> complex, including <strong><em>T. indotineae</em></strong> with squalene epoxidase (<em>SQLE</em>) mutations.</li>
      <li><strong>Misdiagnosis</strong> of candidiasis, erythrasma, psoriasis or contact dermatitis.</li>
    </ul>
    <h4>Confirm before escalating</h4>
    <p>Take scrapings from the active edge for <strong>KOH microscopy</strong> and culture; positive microscopy justifies treatment, while culture and, where available, ITS sequencing and susceptibility testing identify resistant isolates. In much of the country these tests are not routine, so a history of failed terbinafine and of steroid exposure carries real diagnostic weight.</p>
    <h4>Management</h4>
    <p>Stop the steroid-containing cream. For extensive or resistant disease use <strong>oral terbinafine</strong> at a weight-adjusted dose for at least two weeks, or <strong>itraconazole</strong> when terbinafine has failed or resistance is likely; topical azoles suffice for genuinely localised disease. Treat symptomatic household contacts, wash bedding and towels in hot water, and replace or treat footwear. Prevention is regulatory and educational as much as clinical: enforcement of prescription-only status, public warnings about steroid–antifungal combinations, and clinician education to scrape before prescribing a steroid.</p>
  `,
  tip: "The cream, not the fungus, is often the cause of failure — name tinea incognito and the SQLE mutation together.",
  sources: ["S26", "S32", "S31", "S12"]
},
{
  id: "mc36", domain: "mycology", star: true,
  q: "Discuss environmental mould exposure after typhoons and floods in the Philippines: which fungi matter, which syndromes they cause, and how risk should be assessed and reduced.",
  tags: ["flood", "typhoon", "environmental mould", "Philippines"],
  keypoints: ["water-damaged buildings", "mould within 24 to 48 hours", "Aspergillus fumigatus", "Penicillium and Cladosporium", "allergic bronchopulmonary aspergillosis", "hypersensitivity pneumonitis", "asthma exacerbation", "cutaneous mucormycosis", "fungal keratitis", "melioidosis mimic", "galactomannan and beta-D-glucan", "N95 respirator", "dry within 48 hours", "RA 11332 surveillance"],
  answer: `
    <h4>The post-disaster mould burst</h4>
    <p>The Philippines records about twenty tropical cyclones a year, and each flood leaves thousands of homes and schools wet for days. Mould grows on damp gypsum, wood, paper and dust within 24–48 hours, releasing conidia and volatile metabolites into indoor air. Evacuation centres concentrate people in damp, crowded spaces, and returning residents clean without respiratory protection. The result is a predictable rise in allergic and, in vulnerable patients, invasive fungal disease in the weeks after the water recedes.</p>
    <h4>Agents and syndromes</h4>
    <div class="table-wrap"><table>
      <tr><th>Exposure</th><th>Typical organisms</th><th>Syndrome</th></tr>
      <tr><td>Damp indoor materials</td><td><em>Aspergillus</em>, <em>Penicillium</em>, <em>Cladosporium</em>, <em>Fusarium</em></td><td>Asthma exacerbation, rhinitis, hypersensitivity pneumonitis</td></tr>
      <tr><td>Mouldy hay, compost, flood debris</td><td><em>Aspergillus fumigatus</em></td><td>Allergic bronchopulmonary aspergillosis; invasive disease with immunosuppression</td></tr>
      <tr><td>Traumatic wound in floodwater</td><td>Mucorales, <em>Fusarium</em>, dematiaceous moulds</td><td>Cutaneous mucormycosis, fungal keratitis</td></tr>
      <tr><td>Standing water and mud</td><td><em>Burkholderia pseudomallei</em>, leptospires</td><td>Melioidosis and leptospirosis — bacterial mimics of post-flood sepsis</td></tr>
    </table></div>
    <h4>Clinical recognition</h4>
    <p>Ask about flood exposure, visible mould at home and cleanup work when a patient presents with wheeze, fever, cavitary pneumonia or a non-healing wound. In immunocompromised patients, invasive aspergillosis after flooding can present with nonspecific fever and nodules; galactomannan, &beta;-D-glucan and culture of deep specimens guide diagnosis. Wounds that fail to heal after flood trauma need tissue sampling for Mucorales and dematiaceous fungi, not repeated antibiotics.</p>
    <h4>Prevention and public health</h4>
    <p>Dry structures within 24–48 hours, remove porous materials that cannot be dried, ventilate, and use dehumidifiers where power allows. People cleaning should wear an N95 respirator, gloves and eye protection, and should never mix bleach with other cleaners. Local government units and the DOH should build mould remediation, safer evacuation-centre design and post-disaster surveillance into response plans, with clusters reported through the notifiable-disease system under RA 11332.</p>
  `,
  tip: "Give the 24–48 hour drying window and the melioidosis mimic — that is what separates a clinical answer from a list of moulds.",
  sources: ["S31", "S33", "S10", "S18"]
},
{
  id: "mc37", domain: "mycology", star: true,
  q: "Discuss invasive aspergillosis in the non-neutropenic critically ill patient: why it is missed, how it is diagnosed, and how it should be treated.",
  tags: ["invasive aspergillosis", "critical illness", "galactomannan", "CAPA"],
  keypoints: ["prolonged corticosteroids", "COPD", "influenza and COVID-19", "atypical imaging", "tree-in-bud", "tracheobronchitis", "BAL galactomannan", "serum galactomannan lower sensitivity", "beta-D-glucan", "EORTC definitions exclude ICU", "voriconazole", "isavuconazole", "liposomal amphotericin B", "therapeutic drug monitoring", "surgery in localised disease"],
  answer: `
    <h4>A disease that no longer needs profound neutropenia</h4>
    <p>Invasive aspergillosis was defined in patients with prolonged neutropenia, but an increasing share now occurs in intensive care, chronic obstructive pulmonary disease, decompensated liver disease, poorly controlled diabetes, prolonged corticosteroid therapy and after severe influenza or COVID-19. These patients lack the classic risk profile, so clinicians do not think of moulds, and the diagnosis is made late or at autopsy.</p>
    <h4>Why it is missed</h4>
    <ul>
      <li><strong>Imaging is atypical</strong>: consolidation, tree-in-bud change or a single nodule rather than the halo sign of neutropenic disease.</li>
      <li><strong>Serum galactomannan is less sensitive</strong>, because angioinvasion and circulating antigen are lower; bronchoalveolar lavage is more reliable.</li>
      <li><strong>Tracheobronchitis</strong> and airway lesions are under-recognised without bronchoscopy.</li>
      <li><strong>Colonisation</strong> is common in COPD, so a positive sputum culture is not proof of invasion.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>Combine host factors, imaging and mycological evidence: <strong>BAL galactomannan, fungal culture and PCR</strong>, with serum galactomannan and &beta;-D-glucan as supporting tests. The EORTC/MSGERC definitions were built for research and exclude many critically ill patients, so ICU-specific clinical algorithms are used instead. A negative biomarker does not exclude disease when pre-test probability is high.</p>
    <h4>Treatment</h4>
    <p><strong>Voriconazole</strong> or <strong>isavuconazole</strong> is first-line; liposomal amphotericin B is used for intolerance, resistance or drug interaction. Echinocandins are not adequate as monotherapy for invasive aspergillosis, although combination therapy is sometimes used in salvage. Measure voriconazole levels, anticipate interactions with calcineurin inhibitors, rifamycins and some anticonvulsants, and continue therapy for a defined period guided by imaging and immune recovery. Surgical resection helps in localised disease, empyema and infected devices. Mortality remains high, so the practical priorities are to suspect the diagnosis, sample the airway early and start active therapy without waiting for culture.</p>
  `,
  tip: "In the ICU the halo sign is absent and serum antigen is weak — say BAL galactomannan and CT pattern, then treat early.",
  sources: ["S4", "S9", "S18", "S12"]
},
{
  id: "mc38", domain: "mycology", star: true,
  q: "Explain antifungal pharmacokinetics and pharmacodynamics, and show how suboptimal exposure selects resistance. What dosing principles follow?",
  tags: ["pharmacodynamics", "PK/PD", "mutant selection window", "resistance"],
  keypoints: ["concentration-dependent killing", "time-dependent killing", "AUC to MIC", "time above MIC", "post-antifungal effect", "loading dose", "mutant selection window", "mutant prevention concentration", "ERG11", "FKS", "cyp51A", "biofilm and inoculum effect", "therapeutic drug monitoring", "CYP2C19", "combination therapy"],
  answer: `
    <h4>Three exposure indices, three behaviours</h4>
    <p>Antifungal pharmacodynamics describes how concentration relates to kill. Polyenes and echinocandins kill in a <strong>concentration-dependent</strong> manner, so the peak or the area under the curve relative to MIC predicts outcome; azoles and flucytosine are largely <strong>time-dependent</strong>, so the fraction of the dosing interval above MIC matters. Triazoles are usually assessed by <strong>AUC/MIC</strong>, and a post-antifungal effect allows intermittent echinocandin dosing. Confusing these indices produces predictable errors, such as dividing a once-daily echinocandin or giving a triazole without a loading dose.</p>
    <h4>Dosing to suppress resistance</h4>
    <p>Subinhibitory concentrations are the engine of acquired resistance: they let pre-existing mutants with <em>ERG11</em>, <em>FKS</em> or <em>cyp51A</em> changes expand while susceptible cells are inhibited. The <strong>mutant selection window</strong> is the concentration band between the MIC and the mutant prevention concentration, and prolonged exposure inside it — from underdosing, poor absorption, interactions or missed doses — selects resistance. Biofilms and high inocula widen that window by raising the effective MIC.</p>
    <h4>Practical implications</h4>
    <div class="table-wrap"><table>
      <tr><th>Setting</th><th>PK/PD action</th></tr>
      <tr><td>Severe sepsis or obesity</td><td>Give a <strong>loading dose</strong>; consider higher exposure and monitor levels</td></tr>
      <tr><td>Voriconazole or posaconazole</td><td>Measure troughs; absorption and CYP2C19 genotype cause large variability</td></tr>
      <tr><td>Continuous renal replacement</td><td>Adjust fluconazole and flucytosine; echinocandins are not dialysed</td></tr>
      <tr><td>Meningitis or endophthalmitis</td><td>Choose agents that penetrate; echinocandins do not reach CSF or vitreous</td></tr>
      <tr><td>Combination therapy</td><td>Amphotericin B plus flucytosine in cryptococcosis; never flucytosine alone</td></tr>
    </table></div>
    <p>The clinical lesson is that dose, formulation, adherence and source control are part of resistance prevention. Stewardship that ensures adequate exposure is as important as stewardship that restricts unnecessary prescriptions. For prophylaxis the same logic applies: sustained exposure above the mutant selection window protects better than intermittent subtherapeutic courses.</p>
  `,
  tip: "Link each class to its index, then use the mutant selection window to explain why underdosing is a resistance intervention.",
  sources: ["S4", "S12", "S18", "S24"]
},
{
  id: "mc39", domain: "mycology",
  q: "Design a tiered diagnostic pathway for invasive fungal disease in a resource-limited Philippine hospital. Justify each test by its performance and pitfalls.",
  tags: ["fungal diagnostics", "diagnostic stewardship", "galactomannan", "beta-D-glucan"],
  keypoints: ["galactomannan", "beta-D-glucan", "cryptococcal antigen", "prozone effect", "pan-fungal PCR", "metagenomic sequencing", "culture and susceptibility", "turnaround time", "tiered laboratory network", "RITM referral", "specimen quality", "colonisation versus infection", "repeat testing"],
  answer: `
    <h4>Why a pathway beats a test menu</h4>
    <p>No single fungal test is definitive, and the value of any test depends on the patient in front of you. Galactomannan sensitivity is high in prolonged neutropenia and much lower in non-neutropenic critical illness; &beta;-D-glucan is a good rule-out test but has many false positives; cryptococcal antigen is excellent but can be falsely negative at very high antigen loads. A pathway specifies who is tested, when, on what specimen, and what happens to the result.</p>
    <h4>Building the pathway</h4>
    <ul>
      <li><strong>Define the at-risk host</strong>: prolonged neutropenia, transplant, high-dose steroids, advanced HIV, or critical illness with additional risk factors.</li>
      <li><strong>Pair imaging with biomarkers</strong>: CT first, then serum galactomannan and &beta;-D-glucan twice weekly in high-risk inpatients, and BAL in ventilated patients.</li>
      <li><strong>Match the antigen to the disease</strong>: CrAg for advanced HIV, histoplasma antigen for endemic exposure, KOH for superficial infection.</li>
      <li><strong>Culture deep sites before therapy</strong>, identify to species and test susceptibility when the isolate matters.</li>
      <li><strong>Repeat and trend</strong> rather than acting on a single result; a falling galactomannan supports response.</li>
    </ul>
    <h4>Test characteristics and pitfalls</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Target</th><th>Main pitfall</th></tr>
      <tr><td>Galactomannan</td><td><em>Aspergillus</em></td><td>False positives with piperacillin–tazobactam and cross-reacting fungi; low sensitivity in non-neutropenic patients</td></tr>
      <tr><td>&beta;-D-glucan</td><td>Many fungi, not Mucorales or <em>Cryptococcus</em></td><td>False positives with dialysis, IVIG, albumin and surgical gauze</td></tr>
      <tr><td>CrAg lateral flow</td><td><em>Cryptococcus</em></td><td>Prozone effect at very high titres</td></tr>
      <tr><td>Pan-fungal PCR and mNGS</td><td>Broad detection</td><td>Contamination and colonisation; no standardisation</td></tr>
    </table></div>
    <h4>Making it work in a low-resource setting</h4>
    <p>In the Philippines, MALDI-TOF, sequencing and galactomannan are concentrated in tertiary and reference laboratories. A tiered network — district laboratories doing KOH, culture and CrAg; regional hospitals doing identification; a national reference centre doing sequencing and susceptibility — with defined transport and turnaround times is more realistic than expecting every laboratory to do everything. Diagnostic stewardship also means rejecting poor specimens, stopping tests that will not change management, and telephoning critical results.</p>
  `,
  tip: "Justify each test by prevalence and false positives, then solve the geography with a tiered referral network.",
  sources: ["S12", "S31", "S18", "S4"]
},
{
  id: "mc40", domain: "mycology", star: true,
  q: "Describe how to investigate and control a suspected fungal outbreak in a Philippine hospital, from case definition to reporting under RA 11332.",
  tags: ["outbreak investigation", "case definition", "whole-genome sequencing", "RA 11332"],
  keypoints: ["case definition", "line list", "epidemic curve", "spot map", "attack rate", "case-control or cohort", "direct observation", "targeted environmental sampling", "whole-genome sequencing", "cohorting and isolation", "terminal cleaning", "HEPA during construction", "DOH notification", "RA 11332"],
  answer: `
    <h4>From a single case to a recognised cluster</h4>
    <p>An outbreak investigation begins when surveillance notices more cases than expected: two patients in the same unit with the same unusual mould, a candidaemia rate that doubles, or a single <em>C. auris</em> isolate in a hospital that has never seen one. The first task is to define a case by organism, place and time, then build a line list and an epidemic curve. A spot map of beds, theatres and shared equipment often reveals the exposure before any laboratory comparison does.</p>
    <h4>Generating and testing hypotheses</h4>
    <ul>
      <li><strong>Describe</strong> person, place and time; calculate attack rates by ward, team and procedure.</li>
      <li><strong>Compare</strong> exposed and unexposed patients in a cohort or case-control design, accepting that small numbers limit power.</li>
      <li><strong>Observe</strong> practice directly: hand hygiene, reprocessing, compounded preparations, construction activity, water and air handling.</li>
      <li><strong>Sample</strong> the environment only where a hypothesis points — sinks, heater–cooler units, ice machines, surfaces, shared devices.</li>
      <li><strong>Type</strong> isolates by sequencing or whole-genome analysis to separate a common source from coincidental cases.</li>
    </ul>
    <h4>Control and communication</h4>
    <p>Control does not wait for the final analysis. Isolate or cohort cases, strengthen hand hygiene, restrict shared equipment, close the affected area if necessary, recall implicated products and review compounding and reprocessing. Terminal cleaning, HEPA filtration during construction and water management address the environmental reservoirs that fungal outbreaks exploit.</p>
    <h4>The Philippine reporting context</h4>
    <p>Under RA 11332, epidemic-prone events and clusters must be reported to the local health office and the DOH, and a hospital outbreak is a public health event rather than an internal quality problem. Notify early, share the line list with the regional epidemiology unit, involve the reference laboratory, and document the investigation so that lessons survive staff turnover. The commonest failure is not a lack of microbiology but a delay in recognising that the cases are connected.</p>
  `,
  tip: "Case definition, line list, epidemic curve — then control before the analysis is finished and report under RA 11332.",
  sources: ["S22", "S33", "S31", "S10"]
}
);
