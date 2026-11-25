/* Microbiology — additional essays, part 3: mycobacteria & mycology */
window.QBANK.push(
{
  id: "my10", domain: "mycobacteria",
  q: "Discuss the diagnosis and management of extrapulmonary tuberculosis, with emphasis on tuberculous meningitis, pleural, lymph node, bone and abdominal disease.",
  tags: ["extrapulmonary TB", "TB meningitis", "pleural TB", "Pott disease"],
  keypoints: ["paucibacillary", "lower sensitivity of Xpert", "culture still essential", "CSF lymphocytosis low glucose high protein", "Xpert Ultra on CSF", "large volume CSF", "adenosine deaminase", "pleural biopsy higher yield", "granuloma on histology", "fine needle aspiration of lymph node", "Pott disease", "cold abscess", "9-12 months for CNS TB", "corticosteroids in meningitis and pericarditis", "ascitic fluid ADA", "HIV increases extrapulmonary disease"],
  answer: `
    <p>Extrapulmonary TB is <strong>paucibacillary</strong>: smears are usually negative, molecular tests have <strong>lower sensitivity of Xpert</strong> than in sputum, and <strong>culture is still essential</strong> for drug susceptibility. <strong>HIV increases extrapulmonary disease</strong>, as do young age and immunosuppression. Obtaining the right specimen matters more than any single test.</p>
    <div class="table-wrap"><table>
      <tr><th>Site</th><th>Key findings and best specimen</th></tr>
      <tr><td><strong>Meningitis</strong></td><td><strong>CSF lymphocytosis, low glucose, high protein</strong>, basal meningeal enhancement and hydrocephalus. Send a <strong>large volume of CSF</strong> (≥6 mL) for ZN, culture and <strong>Xpert Ultra on CSF</strong> (WHO-recommended initial test). Most severe form; disability is high.</td></tr>
      <tr><td><strong>Pleural</strong></td><td>Exudate, lymphocyte-predominant, pH low, <strong>adenosine deaminase</strong> raised (&gt;40 U/L), mesothelial cells scarce. Fluid culture yields &lt;30%, so <strong>pleural biopsy has a higher yield</strong> (<strong>granuloma on histology</strong> plus culture, ~80%).</td></tr>
      <tr><td><strong>Lymph node</strong></td><td>Painless cervical node ("scrofula"); <strong>fine needle aspiration of lymph node</strong> for cytology, ZN, Xpert and culture — excision biopsy if non-diagnostic.</td></tr>
      <tr><td><strong>Bone and joint</strong></td><td><strong>Pott disease</strong> of the thoracolumbar spine with disc-sparing vertebral destruction and a paraspinal <strong>cold abscess</strong>; CT-guided biopsy.</td></tr>
      <tr><td><strong>Abdominal</strong></td><td>Ascites with high protein and lymphocytes, raised <strong>ascitic fluid ADA</strong>, low SAAG; peritoneal biopsy at laparoscopy is best; mimics ovarian carcinoma (raised CA-125).</td></tr>
      <tr><td>Pericardial</td><td>Effusion with lymphocytes and high ADA; risk of constrictive pericarditis.</td></tr>
      <tr><td>Genitourinary</td><td>Sterile pyuria with haematuria; 3 early-morning urines for culture.</td></tr>
      <tr><td>Miliary/disseminated</td><td>Blood cultures (mycobacterial bottles), bone marrow, liver biopsy; urine LF-LAM in advanced HIV.</td></tr>
    </table></div>
    <h4>Treatment</h4>
    <ul>
      <li>Standard 2HRZE/4HR for most sites; <strong>9–12 months for CNS TB</strong> (and 6–9 months for bone and joint disease in many guidelines) with higher-dose rifampicin regimens under study.</li>
      <li><strong>Corticosteroids in meningitis and pericarditis</strong> reduce mortality and complications.</li>
      <li>Surgery for spinal instability, cord compression, hydrocephalus (shunt) or constrictive pericarditis.</li>
      <li>Pyrazinamide and ethambutol penetrate CSF well; rifampicin penetration is limited, hence interest in higher doses.</li>
    </ul>
  `,
  tip: "Pair each site with its best specimen and one fluid marker (ADA) — that structure answers the whole question.",
  sources: ["S6", "S4", "S9"]
},
{
  id: "my11", domain: "mycobacteria",
  q: "Explain the diagnosis and management of latent tuberculosis infection, including the choice of test and the shorter preventive treatment regimens.",
  tags: ["latent TB", "IGRA", "TST", "TPT"],
  keypoints: ["no clinical or radiological active disease", "tuberculin skin test", "boosting and BCG cross-reaction", "interferon gamma release assay", "IGRA unaffected by BCG", "cannot distinguish latent from active", "exclude active TB first", "3HP rifapentine isoniazid weekly", "3HR daily three months", "1HP one month", "6H or 9H isoniazid", "hepatotoxicity monitoring", "drug interactions with ART", "contacts of MDR-TB", "household contacts and children under 5", "people living with HIV"],
  answer: `
    <p>Latent TB infection means persistent immune response to <em>M. tuberculosis</em> antigens with <strong>no clinical or radiological active disease</strong>. About 5–10% of infected people progress in their lifetime; preventive treatment reduces this by 60–90%.</p>
    <h4>Tests</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th>Tuberculin skin test</th><th>Interferon gamma release assay</th></tr>
      <tr><td>Principle</td><td>Delayed hypersensitivity to PPD, read at 48–72 h</td><td>Whole-blood IFN-γ response to ESAT-6 and CFP-10</td></tr>
      <tr><td>Cut-offs</td><td>5 mm (HIV, immunosuppressed, recent contact, fibrotic CXR), 10 mm (most risk groups), 15 mm (low risk)</td><td>Manufacturer-defined; a quantitative result</td></tr>
      <tr><td>Problems</td><td><strong>Boosting and BCG cross-reaction</strong>, non-tuberculous mycobacteria, two visits, reader variation, false negatives in anergy</td><td>Cost, laboratory needed, indeterminate results, within-subject variability near the cut-off</td></tr>
      <tr><td>Advantage</td><td>Cheap, field-usable</td><td><strong>IGRA unaffected by BCG</strong>, one visit</td></tr>
    </table></div>
    <p>Both measure sensitisation and <strong>cannot distinguish latent from active</strong> disease, and neither predicts progression well — so <strong>exclude active TB first</strong> with symptom screening, chest radiograph and, if symptomatic, sputum testing.</p>
    <h4>Who to test and treat (WHO)</h4>
    <p><strong>People living with HIV</strong>, <strong>household contacts and children under 5</strong>, patients starting TNF inhibitors or other biologics, dialysis, transplant candidates, silicosis, and health workers in high-risk settings. In high-burden settings such as the Philippines, testing is not required before treating child contacts and people with HIV — symptom screening suffices.</p>
    <h4>Preventive regimens</h4>
    <ul>
      <li><strong>3HP: rifapentine plus isoniazid weekly</strong> for 12 doses — well tolerated, high completion.</li>
      <li><strong>3HR daily for three months</strong> — preferred in children.</li>
      <li><strong>1HP: one month</strong> of daily rifapentine plus isoniazid — for people with HIV.</li>
      <li>4R (rifampicin 4 months) or <strong>6H or 9H isoniazid</strong> where rifamycins are unsuitable.</li>
      <li><strong>Contacts of MDR-TB</strong>: 6 months of levofloxacin.</li>
    </ul>
    <p>Practical issues: <strong>hepatotoxicity monitoring</strong> (baseline liver tests, symptom education, avoid alcohol), <strong>drug interactions with ART</strong> (rifamycins and protease inhibitors; dolutegravir dose adjustment with rifampicin), and pyridoxine with isoniazid.</p>
  `,
  tip: "Name the 3HP and 1HP regimens — short-course TPT is the modern answer.",
  sources: ["S6", "S11", "S10"]
},
{
  id: "my12", domain: "mycobacteria",
  q: "Outline the laboratory workflow for a mycobacteriology laboratory: specimen handling, digestion-decontamination, culture media, identification and susceptibility testing, with biosafety considerations.",
  tags: ["mycobacteriology", "NALC-NaOH", "MGIT", "biosafety"],
  keypoints: ["BSL-3 for culture", "biological safety cabinet", "sealed centrifuge buckets", "NALC-NaOH digestion decontamination", "neutralise and concentrate", "contamination rate 2-5 percent", "Lowenstein-Jensen", "Middlebrook 7H10 7H11", "MGIT liquid culture", "liquid plus solid media", "line probe assay", "MPT64 antigen test", "MALDI-TOF for NTM", "critical concentration drug susceptibility", "Xpert MTB/RIF Ultra", "targeted next-generation sequencing", "bleach for smear microscopy only"],
  answer: `
    <h4>Biosafety first</h4>
    <p>Smear microscopy may be done at BSL-2 with good practice, but all culture and manipulation of <em>M. tuberculosis</em> requires <strong>BSL-3 for culture</strong>: a certified <strong>biological safety cabinet</strong>, directional airflow with negative pressure, respirators, <strong>sealed centrifuge buckets</strong>, aerosol-minimising technique and validated waste autoclaving. TB is the classic laboratory-acquired infection.</p>
    <h4>Specimens</h4>
    <p>Sputum (≥2 specimens, 5–10 mL, early morning; or a single spot specimen for Xpert), induced sputum or gastric aspirate in children, bronchoalveolar lavage, CSF (large volume), tissue (never in formalin for culture), urine (3 early-morning), blood in mycobacterial bottles. Store at 2–8 °C and process within 24 hours.</p>
    <h4>Processing</h4>
    <ol>
      <li><strong>NALC–NaOH digestion–decontamination</strong>: N-acetyl-L-cysteine liquefies mucus and 2% NaOH kills faster-growing bacteria; keep contact to 15 minutes to protect mycobacteria.</li>
      <li><strong>Neutralise and concentrate</strong> with phosphate buffer and centrifugation (≥3000 × g, 15 min).</li>
      <li>Inoculate media and make smears from the concentrate. Monitor the <strong>contamination rate (2–5%)</strong> as a quality indicator: too high means weak decontamination, too low means over-decontamination and lost positives. Sterile specimens (CSF, tissue) are not decontaminated. <strong>Bleach is for smear microscopy only</strong>, never before culture.</li>
    </ol>
    <h4>Culture and identification</h4>
    <ul>
      <li>Use <strong>liquid plus solid media</strong>: <strong>MGIT liquid culture</strong> (fluorescent oxygen-quenching, positive in 1–3 weeks, highest sensitivity) with egg-based <strong>Löwenstein–Jensen</strong> or agar <strong>Middlebrook 7H10/7H11</strong> to detect mixed growth and colony morphology; incubate 6–8 weeks at 37 °C (also 30 °C for skin isolates).</li>
      <li>Confirm complex: <strong>MPT64 antigen test</strong> (immunochromatographic), <strong>line probe assay</strong>, or <strong>MALDI-TOF for NTM</strong> and sequencing (<em>hsp65</em>, <em>rpoB</em>, 16S) for species.</li>
      <li>Molecular testing directly on specimens: <strong>Xpert MTB/RIF Ultra</strong> as the initial test, line probe assays for isoniazid and second-line drugs, and <strong>targeted next-generation sequencing</strong> for a full resistance profile (WHO-endorsed).</li>
    </ul>
    <h4>Susceptibility testing</h4>
    <p>Phenotypic DST uses the <strong>critical concentration</strong> of each drug in MGIT or on 7H10/7H11 (proportion method). Molecular results are reported with their limitations (e.g. <em>rpoB</em> silent mutations, disputed mutations, <em>inhA</em> versus <em>katG</em>). Report critical results urgently and link to the national TB programme.</p>
  `,
  tip: "The contamination-rate indicator and 'liquid plus solid media' show practical laboratory understanding.",
  sources: ["S12", "S6", "S8"]
},
{
  id: "mc10", domain: "mycology",
  q: "Discuss Talaromyces marneffei infection (penicilliosis): epidemiology in Southeast Asia, clinical features, laboratory diagnosis and treatment.",
  tags: ["Talaromyces marneffei", "HIV", "Southeast Asia", "dimorphic"],
  keypoints: ["thermally dimorphic", "mould at 25 C with red diffusible pigment", "yeast at 37 C", "fission arthroconidia with central septum", "bamboo rats reservoir", "rainy season exposure", "advanced HIV CD4 below 100", "papular skin lesions with central necrotic umbilication", "fever anaemia hepatosplenomegaly", "bone marrow and skin scraping", "Wright or Giemsa stain of blood smear", "Mp1p antigen test", "blood culture", "amphotericin B induction then itraconazole", "secondary prophylaxis until immune recovery", "differentiate from histoplasmosis and cryptococcosis"],
  answer: `
    <h4>Epidemiology</h4>
    <p><em>Talaromyces (Penicillium) marneffei</em> is endemic to Southeast Asia and southern China — Thailand, Vietnam, southern China, Myanmar, Laos, India (Manipur) and reported in the Philippines. <strong>Bamboo rats are the reservoir</strong>; human infection probably follows inhalation of conidia from soil, with more cases in the <strong>rainy season</strong>. It is an AIDS-defining illness in <strong>advanced HIV with CD4 below 100</strong>/µL, and also affects people with anti-interferon-γ autoantibodies, CD4 lymphopenia and other immunosuppression. It is listed in the WHO fungal priority pathogens list (high group).</p>
    <h4>Clinical features</h4>
    <p><strong>Fever, anaemia, weight loss, hepatosplenomegaly</strong>, generalised lymphadenopathy, cough, and characteristic <strong>papular skin lesions with central necrotic umbilication</strong> on the face, trunk and arms (molluscum-like). Untreated disseminated disease is fatal.</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li><strong>Thermally dimorphic</strong>: <strong>mould at 25 °C with a red diffusible pigment</strong> on agar, converting to a <strong>yeast at 37 °C</strong>. The yeast divides by <strong>fission</strong>, forming elongated <strong>arthroconidia with a central septum</strong> — the key microscopic clue separating it from <em>Histoplasma</em>, which buds.</li>
      <li>Direct microscopy: <strong>Wright or Giemsa stain</strong> of a blood smear, <strong>bone marrow or skin scraping</strong>, or lymph node aspirate shows intracellular yeasts in macrophages.</li>
      <li><strong>Blood culture</strong> is positive in most disseminated cases (lysis-centrifugation improves yield); handle cultures in a biosafety cabinet.</li>
      <li>Antigen detection: <strong>Mp1p antigen</strong> assay (serum or urine) and PCR give earlier diagnosis.</li>
      <li><strong>Differentiate from histoplasmosis and cryptococcosis</strong> (and TB), which can look identical clinically in advanced HIV.</li>
    </ul>
    <h4>Treatment</h4>
    <p><strong>Amphotericin B induction</strong> (2 weeks; the IVAP trial showed it is superior to itraconazole), then itraconazole 400 mg/day for 10 weeks, then <strong>secondary prophylaxis until immune recovery</strong> (CD4 &gt;100/µL on ART). Start ART after about 1–2 weeks, watching for IRIS. Voriconazole is an alternative.</p>
  `,
  tip: "The red pigment at 25 °C and fission arthroconidia are the two identifying features to state.",
  sources: ["S18", "S2", "S4"]
},
{
  id: "mc11", domain: "mycology",
  q: "Discuss antifungal susceptibility testing and therapeutic drug monitoring of antifungals: methods, when they are indicated, and their limitations.",
  tags: ["antifungal susceptibility", "CLSI M27", "EUCAST", "TDM"],
  keypoints: ["CLSI M27 yeasts M38 moulds", "EUCAST broth microdilution", "clinical breakpoints versus epidemiological cutoff values", "ECV detects non-wild-type isolates", "gradient diffusion and disk diffusion", "azole resistance in Candida glabrata and auris", "echinocandin resistance FKS mutations", "Aspergillus fumigatus TR34/L98H azole resistance", "amphotericin B rarely resistant", "flucytosine resistance emerges rapidly", "itraconazole and voriconazole TDM", "posaconazole trough", "voriconazole nonlinear kinetics and CYP2C19", "neurotoxicity and hepatotoxicity", "no TDM needed for fluconazole or echinocandins"],
  answer: `
    <h4>Methods</h4>
    <ul>
      <li>Reference broth microdilution: <strong>CLSI M27 for yeasts and M38 for moulds</strong>, and <strong>EUCAST broth microdilution</strong> (different media and endpoints, so MICs are not interchangeable).</li>
      <li>Commercial: colorimetric microdilution panels, <strong>gradient diffusion</strong> strips, and <strong>disk diffusion</strong> (CLSI M44 for fluconazole and voriconazole against <em>Candida</em>).</li>
      <li>Rapid genotypic detection of resistance markers (<em>FKS</em>, <em>cyp51A</em>) is increasingly used.</li>
    </ul>
    <h4>Interpretation</h4>
    <p>Distinguish <strong>clinical breakpoints from epidemiological cutoff values</strong>: breakpoints predict clinical outcome but exist for only some drug–species pairs, whereas an <strong>ECV detects non-wild-type isolates</strong> (acquired resistance) without predicting response. Report species identification alongside the MIC, because much resistance is intrinsic and predictable by species (e.g. <em>C. krusei</em> fluconazole-resistant, <em>C. parapsilosis</em> higher echinocandin MICs, <em>Aspergillus terreus</em> amphotericin-resistant, Mucorales voriconazole-resistant).</p>
    <h4>When testing is indicated</h4>
    <ul>
      <li>All invasive <em>Candida</em> isolates (azole and echinocandin), particularly <strong>azole resistance in <em>C. glabrata</em> and <em>C. auris</em></strong> and <strong>echinocandin resistance from <em>FKS</em> mutations</strong> after prior exposure.</li>
      <li><em>Aspergillus</em> in regions with environmental <strong>TR34/L98H azole resistance</strong> or in patients failing therapy.</li>
      <li>Treatment failure, breakthrough infection, unusual species, and surveillance.</li>
      <li><strong>Amphotericin B resistance is rare</strong>; <strong>flucytosine resistance emerges rapidly</strong> on monotherapy, so it is always combined.</li>
    </ul>
    <h4>Therapeutic drug monitoring</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>TDM</th><th>Reason</th></tr>
      <tr><td><strong>Voriconazole</strong></td><td>Trough 1–5.5 mg/L</td><td><strong>Non-linear kinetics and CYP2C19</strong> polymorphism; <strong>neurotoxicity, hepatotoxicity</strong> and visual changes at high levels; failure at low levels</td></tr>
      <tr><td><strong>Itraconazole</strong></td><td>Trough &gt;0.5–1 mg/L (treatment)</td><td>Erratic absorption (needs acid/food), measure parent plus hydroxy-metabolite</td></tr>
      <tr><td><strong>Posaconazole</strong></td><td>Trough &gt;0.7 (prophylaxis), &gt;1 mg/L (treatment)</td><td>Variable absorption of the suspension</td></tr>
      <tr><td>Flucytosine</td><td>Peak 30–80 mg/L</td><td>Marrow and liver toxicity, renal clearance</td></tr>
      <tr><td>Fluconazole, echinocandins, amphotericin</td><td><strong>No TDM needed</strong></td><td>Predictable kinetics</td></tr>
    </table></div>
    <p>Limitations: MICs correlate imperfectly with outcome (host factors, source control and immune recovery dominate), methods are not available in many laboratories including much of the Philippines, and moulds often cannot be cultured at all — so empirical choices rest on species-level epidemiology.</p>
  `,
  tip: "Separate breakpoints from ECVs, and name voriconazole as the key TDM drug.",
  sources: ["S18", "S12", "S4"]
},
{
  id: "mc12", domain: "mycology",
  q: "Describe the subcutaneous mycoses — sporotrichosis, chromoblastomycosis, eumycetoma and lobomycosis — and compare mycetoma caused by fungi with actinomycetoma.",
  tags: ["subcutaneous mycoses", "sporotrichosis", "mycetoma", "chromoblastomycosis"],
  keypoints: ["traumatic implantation", "Sporothrix schenckii complex", "lymphocutaneous nodular lymphangitis", "rose gardener and cat transmission", "asteroid body", "cigar-shaped yeast", "chromoblastomycosis sclerotic bodies", "muriform cells", "Fonsecaea pedrosoi", "eumycetoma black grains Madurella", "actinomycetoma pale grains Nocardia", "grain examination and culture", "itraconazole or potassium iodide for sporotrichosis", "antifungals plus surgery for eumycetoma", "co-trimoxazole combination for actinomycetoma", "WHO neglected tropical disease"],
  answer: `
    <p>Subcutaneous mycoses follow <strong>traumatic implantation</strong> of environmental fungi through the skin — classically in barefoot farmers and plantation workers, so they are important in the rural Philippines. They spread locally through tissue and lymphatics rather than haematogenously.</p>
    <h4>Sporotrichosis</h4>
    <p><strong><em>Sporothrix schenckii</em> complex</strong>, a thermally dimorphic fungus of soil, sphagnum moss and rose thorns ("<strong>rose gardener</strong>" disease); <strong>cat transmission</strong> (zoonotic <em>S. brasiliensis</em>) is important in Brazil. Presents as <strong>lymphocutaneous nodular lymphangitis</strong> — a papule that ulcerates with a chain of nodules along the lymphatics; also fixed cutaneous, osteoarticular and (in alcohol use or HIV) pulmonary or disseminated disease. Laboratory: mould at 25 °C with delicate hyphae and "flowerette" conidia, <strong>cigar-shaped yeasts</strong> at 37 °C; histology shows an <strong>asteroid body</strong> (yeast with radiating eosinophilic material); culture is more sensitive than histology. Treatment: <strong>itraconazole</strong> for 3–6 months (or <strong>saturated potassium iodide</strong> where cost matters); amphotericin B for severe or disseminated disease.</p>
    <h4>Chromoblastomycosis</h4>
    <p>Caused by dematiaceous (melanised) fungi, chiefly <strong><em>Fonsecaea pedrosoi</em></strong>, <em>Cladophialophora carrionii</em> and <em>Phialophora verrucosa</em>. Slowly enlarging verrucous, cauliflower-like plaques on a limb. Diagnosis rests on <strong>sclerotic (muriform) bodies</strong> — thick-walled, septated brown cells — in KOH mounts or histology. Treatment is difficult: itraconazole or terbinafine for many months, cryotherapy or heat, and surgery; relapse is common. A WHO <strong>neglected tropical disease</strong>, together with mycetoma.</p>
    <h4>Mycetoma</h4>
    <p>A chronic granulomatous infection with painless swelling, multiple sinuses and discharge of <strong>grains</strong> (compact colonies). Grain colour and microscopy guide therapy:</p>
    <div class="table-wrap"><table>
      <tr><th></th><th>Eumycetoma (fungal)</th><th>Actinomycetoma (bacterial)</th></tr>
      <tr><td>Agents</td><td><strong><em>Madurella mycetomatis</em></strong>, <em>Falciformispora</em>, <em>Scedosporium</em></td><td><strong><em>Nocardia brasiliensis</em></strong>, <em>Actinomadura madurae</em>, <em>Streptomyces somaliensis</em></td></tr>
      <tr><td>Grains</td><td>Usually <strong>black</strong> (or white), hard; broad septate hyphae with chlamydoconidia</td><td>Usually <strong>pale, yellow, white or red</strong>; thin (&lt;1 µm) branching filaments, partially acid-fast</td></tr>
      <tr><td>Progression</td><td>Slower, well-demarcated</td><td>Faster, more destructive</td></tr>
      <tr><td>Treatment</td><td><strong>Antifungals plus surgery</strong>: itraconazole (or fosravuconazole in trials) with wide local excision</td><td><strong>Co-trimoxazole combination</strong> with amikacin, or amoxicillin–clavulanate; usually medical cure without surgery</td></tr>
    </table></div>
    <p>So <strong>grain examination and culture</strong> — not imaging alone — determines whether the patient needs antifungals or antibacterials, which is the central practical point. <strong>Lobomycosis</strong> (<em>Lacazia loboi</em>, Amazon basin and dolphins) causes keloid-like nodules, is unculturable, is diagnosed by histology showing chains of yeast cells, and responds poorly to drugs — excision is used.</p>
  `,
  tip: "Make the eumycetoma vs actinomycetoma distinction explicit: grain colour and filament width change the whole treatment.",
  sources: ["S2", "S18", "S19"]
}
);
