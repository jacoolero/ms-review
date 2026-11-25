/* Parasitology — part 1: intestinal/urogenital protozoa; blood & tissue protozoa */
window.QBANK.push(
{
  id: "pa1", domain: "para-intestinal", star: true,
  q: "Describe the morphological features used to differentiate Entamoeba histolytica from the non-pathogenic intestinal amoebae. Why is E. histolytica/dispar differentiation important?",
  tags: ["Entamoeba", "commensal amoebae", "morphology"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th><em>E. histolytica</em> / <em>dispar</em></th><th><em>E. coli</em></th><th><em>E. hartmanni</em></th><th><em>Endolimax nana</em></th><th><em>Iodamoeba bütschlii</em></th></tr>
      <tr><td>Trophozoite size</td><td>12–60 µm</td><td>15–50 µm</td><td>5–12 µm</td><td>6–12 µm</td><td>8–20 µm</td></tr>
      <tr><td>Motility / pseudopodia</td><td>Progressive, finger-like, clear</td><td>Sluggish, blunt</td><td>Non-progressive</td><td>Sluggish, blunt</td><td>Sluggish</td></tr>
      <tr><td>Nucleus</td><td>Fine even peripheral chromatin; small central karyosome</td><td>Coarse irregular chromatin; large eccentric karyosome</td><td>Like <em>E. histolytica</em></td><td>No peripheral chromatin; large blot-like karyosome</td><td>Large karyosome with achromatic granules</td></tr>
      <tr><td>Cytoplasm</td><td>Finely granular; <strong>ingested RBCs</strong> (diagnostic of <em>E. histolytica</em>)</td><td>Coarse, vacuolated, bacteria</td><td>Fine</td><td>Vacuolated</td><td>Vacuolated</td></tr>
      <tr><td>Cyst nuclei (mature)</td><td>1–<strong>4</strong></td><td>1–<strong>8</strong> (up to 16)</td><td>1–4</td><td>4</td><td>1</td></tr>
      <tr><td>Cyst size</td><td>10–20 µm</td><td>10–35 µm</td><td><strong>&lt;10 µm</strong></td><td>5–10 µm</td><td>5–20 µm</td></tr>
      <tr><td>Chromatoid bodies</td><td>Cigar-shaped, rounded ends</td><td>Splinter-like, pointed ends</td><td>Small rounded</td><td>—</td><td>—</td></tr>
      <tr><td>Other</td><td>—</td><td>—</td><td>—</td><td>—</td><td><strong>Large glycogen vacuole</strong> (stains with iodine)</td></tr>
    </table></div>
    <h4>Why differentiate <em>E. histolytica</em> from <em>E. dispar</em> and <em>E. moshkovskii</em>?</h4>
    <p>They are morphologically identical (unless trophozoites contain ingested red cells). <em>E. dispar</em> is a non-invasive commensal and far more common; reporting it as <em>E. histolytica</em> leads to unnecessary treatment and false epidemiology. Differentiation uses <strong>stool antigen ELISA</strong> (Gal/GalNAc lectin), <strong>PCR</strong>, or isoenzyme analysis. Reports should read "<em>E. histolytica/E. dispar</em>" when only microscopy is done. Size measurement with a calibrated ocular micrometer is essential to separate <em>E. hartmanni</em>.</p>
  `,
  tip: "A comparison table with size, nucleus, cyst nuclei and chromatoid bodies is the standard answer format.",
  sources: ["P2", "P3", "P1", "P8"]
},
{
  id: "pa2", domain: "para-intestinal", star: true,
  q: "Discuss amoebic liver abscess: pathogenesis, clinical features, diagnosis and management.",
  tags: ["amoebic liver abscess", "extraintestinal amoebiasis"],
  answer: `
    <h4>Pathogenesis</h4>
    <p><em>E. histolytica</em> trophozoites adhere to colonic epithelium via the <strong>Gal/GalNAc lectin</strong>, kill host cells by contact (amoebapores, trogocytosis — "nibbling") and proteolysis (cysteine proteinases), and invade the submucosa ("flask-shaped" ulcers). They reach the liver through the <strong>portal vein</strong>, causing hepatocyte necrosis — the abscess is a cavity of liquefied necrotic tissue ("<strong>anchovy sauce</strong>" pus) with trophozoites at the periphery, not in the centre.</p>
    <h4>Clinical features</h4>
    <p>Fever, right upper quadrant pain, tender hepatomegaly; usually a single abscess in the right lobe. Typically young-to-middle-aged men (alcohol is a risk factor). Most have no concurrent dysentery. Complications: rupture into pleura, lung (expectoration of anchovy-sauce sputum), pericardium (left lobe abscess — dangerous) or peritoneum.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Imaging</strong>: ultrasound or CT — hypoechoic lesion.</li>
      <li><strong>Serology</strong>: antibodies (ELISA, IHA) positive in &gt;90% — very useful because stool microscopy is often negative. In endemic areas such as the Philippines, positive serology may reflect past infection.</li>
      <li>Antigen detection in serum or abscess fluid; <strong>PCR</strong> of aspirate.</li>
      <li>Laboratory: leukocytosis without eosinophilia, raised ALP, CRP.</li>
      <li>Aspiration only if diagnosis is uncertain, rupture is imminent, or no response to therapy; trophozoites are rarely seen in pus.</li>
    </ul>
    <h4>Management</h4>
    <p><strong>Metronidazole</strong> (or tinidazole) — tissue amoebicide — followed by a <strong>luminal agent</strong> (paromomycin or diloxanide furoate) to eliminate intestinal cysts and prevent relapse. Percutaneous drainage for large or left-lobe abscesses, or failure to respond. Differentiate from pyogenic abscess (older, biliary disease, multiple lesions, positive blood cultures).</p>
  `,
  tip: "Always add the luminal agent after metronidazole — a common omission.",
  sources: ["P1", "P2", "P4"]
},
{
  id: "pa3", domain: "para-intestinal",
  q: "Discuss the coccidian parasites of the intestine: Cryptosporidium, Cyclospora cayetanensis and Cystoisospora belli. How are they detected in the laboratory?",
  tags: ["coccidia", "modified acid-fast", "opportunistic", "HIV"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th><em>Cryptosporidium</em> spp.</th><th><em>Cyclospora cayetanensis</em></th><th><em>Cystoisospora belli</em></th></tr>
      <tr><td>Oocyst size</td><td>4–6 µm, round</td><td>8–10 µm, round</td><td>20–33 × 10–19 µm, ellipsoid</td></tr>
      <tr><td>Sporulation when passed</td><td>Sporulated (immediately infective)</td><td>Unsporulated — needs days to weeks in environment</td><td>Unsporulated (usually 1–2 sporoblasts)</td></tr>
      <tr><td>Modified acid-fast stain</td><td>Pink–red (variable)</td><td><strong>Variable</strong> ("ghost" to deep red)</td><td>Red</td></tr>
      <tr><td>Autofluorescence (UV)</td><td>No</td><td><strong>Yes</strong> (blue/green)</td><td>Yes</td></tr>
      <tr><td>Transmission</td><td>Water (chlorine-resistant), animals (zoonotic <em>C. parvum</em>), person-to-person</td><td>Fresh produce (berries, basil, lettuce), water</td><td>Faecal–oral; human only</td></tr>
      <tr><td>Disease in immunocompetent</td><td>Self-limited watery diarrhoea</td><td>Prolonged relapsing diarrhoea, fatigue</td><td>Self-limited diarrhoea</td></tr>
      <tr><td>Immunocompromised (HIV CD4 &lt;100)</td><td>Chronic severe diarrhoea, biliary disease</td><td>Severe chronic diarrhoea</td><td>Chronic diarrhoea; <strong>eosinophilia</strong> (unusual for protozoa)</td></tr>
      <tr><td>Treatment</td><td>Nitazoxanide; restore immunity (ART)</td><td>TMP-SMX</td><td>TMP-SMX</td></tr>
    </table></div>
    <h4>Laboratory detection</h4>
    <ul>
      <li>Routine ova-and-parasite (O&amp;P) examination often <strong>misses</strong> them — the request must specify.</li>
      <li><strong>Modified Kinyoun / Ziehl–Neelsen acid-fast stain</strong> (with weak decolouriser — 1% H₂SO₄) on concentrated stool.</li>
      <li><strong>Direct fluorescent antibody</strong> (DFA, gold standard for <em>Cryptosporidium</em>, combined with <em>Giardia</em>), EIA and immunochromatographic antigen tests.</li>
      <li><strong>Multiplex PCR</strong> GI panels — highest sensitivity.</li>
      <li>Safranin stain (with microwave heating) stains <em>Cyclospora</em> uniformly.</li>
      <li>UV autofluorescence screening for <em>Cyclospora</em> and <em>Cystoisospora</em>.</li>
    </ul>
    <p>With the rising HIV epidemic in the Philippines, these opportunistic coccidia should be sought in patients with chronic diarrhoea.</p>
  `,
  tip: "Size is the quickest discriminator: Crypto 4–6, Cyclo 8–10, Cystoisospora 20–30 µm.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa4", domain: "para-intestinal",
  q: "Discuss Blastocystis and Dientamoeba fragilis: the debate about their pathogenicity, and their laboratory diagnosis.",
  tags: ["Blastocystis", "Dientamoeba", "controversy"],
  answer: `
    <h4>Blastocystis (formerly <em>B. hominis</em>)</h4>
    <p>One of the most common intestinal protists worldwide (prevalence often &gt;30–50% in tropical countries including the Philippines). Genetically diverse — at least 17 subtypes (STs), ST1–ST9 found in humans; many are zoonotic.</p>
    <p><strong>Pathogenicity debate</strong>:</p>
    <ul>
      <li>For: association with diarrhoea, abdominal pain, urticaria and IBS in some studies; symptom resolution after treatment in some patients; certain subtypes (ST1, ST3?) linked to symptoms.</li>
      <li>Against: equally common in healthy people; associated with a <em>healthier, more diverse</em> gut microbiome in many studies; treatment trials inconsistent; no animal model reproducing disease reliably.</li>
    </ul>
    <p>Current view: treat only if symptomatic and no other cause is found. Forms: <strong>central body (vacuolar) form</strong> 5–40 µm with a large central vacuole and peripheral nuclei — most often seen in stool; also granular, amoeboid and cyst forms. Diagnosis: wet mount, trichrome stain (report semiquantitatively), culture, PCR. Do not mistake for yeast or fat globules.</p>
    <h4><em>Dientamoeba fragilis</em></h4>
    <p>A trichomonad flagellate without flagella; trophozoite 5–15 µm with one or (usually) <strong>two nuclei</strong> with fragmented karyosomes (4–8 granules). A cyst stage was described only recently and is rare. Associated with diarrhoea, abdominal pain and <strong>eosinophilia</strong> in children; frequently co-occurs with <em>Enterobius vermicularis</em>, which may transmit it in its eggs.</p>
    <p>Diagnosis: trophozoites degenerate quickly — <strong>fresh stool must be fixed immediately</strong> and examined with a <strong>permanent stain</strong> (trichrome or iron haematoxylin); concentration and wet mounts are insensitive. PCR is most sensitive. Treatment: metronidazole, iodoquinol or paromomycin.</p>
  `,
  tip: "Present both sides of the pathogenicity debate — examiners reward balanced 'discuss' answers.",
  sources: ["P2", "P3"]
},
{
  id: "pa5", domain: "para-intestinal",
  q: "Describe Giardia duodenalis: morphology, life cycle, pathogenesis of malabsorption and laboratory diagnosis.",
  tags: ["Giardia", "malabsorption", "string test", "antigen"],
  answer: `
    <h4>Morphology</h4>
    <ul>
      <li><strong>Trophozoite</strong>: pear-shaped, 10–20 × 5–15 µm, bilaterally symmetrical; two nuclei with large karyosomes ("face" or "monkey face" appearance), <strong>ventral sucking disc</strong>, 4 pairs of flagella, axonemes and median bodies. "<strong>Falling leaf</strong>" motility in wet mounts.</li>
      <li><strong>Cyst</strong>: oval, 8–12 µm, 4 nuclei (mature), axonemes and median bodies; infective dose as low as 10 cysts.</li>
    </ul>
    <h4>Life cycle</h4>
    <p>Ingestion of cysts in water or food (or person-to-person, including sexual transmission) → excystation in the duodenum → trophozoites attach to the microvilli of the duodenum and jejunum by the ventral disc → binary fission → encystation as they pass to the colon. Cysts are resistant to chlorination.</p>
    <h4>Pathogenesis</h4>
    <p>Not invasive. Malabsorption results from: shortening of microvilli and loss of brush-border enzymes (disaccharidases — lactose intolerance), increased epithelial apoptosis and permeability, impaired bile salt function, and a mechanical barrier effect. Symptoms: foul-smelling, greasy, floating stools, bloating, flatulence, weight loss; in children chronic infection causes stunting. Risk is higher with <strong>hypogammaglobulinaemia/IgA deficiency</strong> (secretory IgA is important for clearance).</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li>Microscopy of multiple stools (cyst excretion is intermittent — examine 3 samples); formalin–ethyl acetate concentration; trichrome stain.</li>
      <li><strong>Antigen detection</strong> (EIA, DFA, rapid tests) — more sensitive than single microscopy.</li>
      <li>Molecular: PCR panels; genotyping assemblages A and B (human).</li>
      <li>Duodenal aspirate or <strong>Entero-Test (string test)</strong>, duodenal biopsy — when stools are negative.</li>
    </ul>
    <p>Treatment: tinidazole, metronidazole or nitazoxanide; albendazole also works and is used in deworming programmes.</p>
  `,
  tip: "Mention intermittent cyst shedding (3 samples) and the association with IgA deficiency.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "pa6", domain: "para-intestinal",
  q: "Discuss Balantidium coli (Neobalantidium coli) — the only ciliate parasitic in humans — with reference to its epidemiology in pig-raising communities.",
  tags: ["Balantidium", "ciliate", "zoonosis", "pigs"],
  answer: `
    <h4>Morphology</h4>
    <ul>
      <li><strong>Trophozoite</strong>: the <strong>largest protozoan parasite of humans</strong> — 50–200 × 40–70 µm; covered with cilia (rotary, boring motility); a funnel-shaped cytostome at the anterior end; a large kidney-shaped <strong>macronucleus</strong> and a small micronucleus; two contractile vacuoles.</li>
      <li><strong>Cyst</strong>: 45–65 µm, round, thick-walled, with a visible macronucleus — the infective stage.</li>
    </ul>
    <h4>Epidemiology</h4>
    <p><strong>Pigs</strong> are the main reservoir (high prevalence in pigs; asymptomatic). Human infection is uncommon but clusters where people live in close contact with pigs and where pig faeces contaminate water — e.g. backyard piggeries in rural Philippines and in Papua New Guinea, Latin America. Transmission: faecal–oral ingestion of cysts in contaminated water or food.</p>
    <h4>Pathogenesis and disease</h4>
    <p>Most infections are asymptomatic. Trophozoites can invade the colonic mucosa using <strong>hyaluronidase</strong> and cause ulcers similar to amoebiasis — <strong>balantidial dysentery</strong> with bloody mucoid diarrhoea. Rarely perforation, peritonitis, extra-intestinal spread (lungs, liver, urogenital) in malnourished or immunocompromised hosts.</p>
    <h4>Diagnosis</h4>
    <p>Fresh stool wet mount — trophozoites are large and easily seen at low power with their characteristic motility; examine fresh, since trophozoites degenerate. Cysts in formed stools. Biopsy of ulcer margins on colonoscopy. Shedding is intermittent — repeat examinations.</p>
    <h4>Treatment and control</h4>
    <p>Tetracycline (first line), metronidazole or iodoquinol. Control: proper disposal of pig manure, separation of pig pens from water sources, safe water and hand hygiene — a One Health problem.</p>
  `,
  tip: "Call it the largest and the only ciliate protozoan in humans and link it to pig reservoirs.",
  sources: ["P1", "P2", "P4"]
},
{
  id: "pa7", domain: "para-intestinal",
  q: "Discuss the pathogenic free-living amoebae: Naegleria fowleri, Acanthamoeba and Balamuthia mandrillaris.",
  tags: ["Naegleria", "Acanthamoeba", "PAM", "GAE", "keratitis"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th><em>Naegleria fowleri</em></th><th><em>Acanthamoeba</em> spp.</th><th><em>Balamuthia mandrillaris</em></th></tr>
      <tr><td>Habitat</td><td>Warm fresh water (hot springs, lakes, poorly chlorinated pools)</td><td>Soil, water, dust, contact lens cases</td><td>Soil</td></tr>
      <tr><td>Portal of entry</td><td>Nasal (swimming, diving, nasal irrigation) → olfactory nerve → cribriform plate</td><td>Eye (contact lens, trauma); skin/lungs → blood → brain</td><td>Skin wounds, lungs</td></tr>
      <tr><td>Host</td><td>Healthy children and young adults</td><td>Keratitis: healthy contact lens users; GAE: immunocompromised</td><td>Both immunocompetent and compromised</td></tr>
      <tr><td>Disease</td><td><strong>Primary amoebic meningoencephalitis (PAM)</strong> — fulminant, death in ~1 week (&gt;95%)</td><td><strong>Keratitis</strong> (ring infiltrate, severe pain); <strong>granulomatous amoebic encephalitis (GAE)</strong> — subacute/chronic</td><td>GAE, skin lesions (often facial)</td></tr>
      <tr><td>Stages</td><td>Amoeboid trophozoite, <strong>flagellate form</strong> (temporary), cyst</td><td>Trophozoite with spine-like <strong>acanthopodia</strong>; double-walled cyst</td><td>Trophozoite, cyst</td></tr>
    </table></div>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li><strong>Naegleria</strong>: CSF looks like bacterial meningitis (neutrophils, low glucose, high protein) but Gram stain negative — examine a <strong>fresh, unrefrigerated wet mount</strong> of CSF for motile trophozoites; Giemsa/trichrome stain; PCR. Flagellation test (in water) confirms <em>Naegleria</em>.</li>
      <li><strong>Acanthamoeba keratitis</strong>: corneal scrapings — calcofluor white (cyst walls), culture on <strong>non-nutrient agar overlaid with <em>E. coli</em></strong> (trails of trophozoites), PCR, confocal microscopy. Often misdiagnosed as herpes keratitis.</li>
      <li>GAE: brain biopsy (trophozoites and cysts around blood vessels), immunofluorescence, PCR; CSF rarely shows the amoebae.</li>
    </ul>
    <h4>Treatment</h4>
    <p>PAM: miltefosine with amphotericin B, rifampicin, fluconazole, azithromycin, and cooling — few survivors. Acanthamoeba keratitis: topical biguanides (PHMB, chlorhexidine) with diamidines for months. Prevention: contact lens hygiene (never rinse lenses with tap water), avoid nasal water entry in warm fresh water.</p>
  `,
  tip: "The fresh, unrefrigerated CSF wet mount for Naegleria is the practical lab point to emphasise.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa8", domain: "para-intestinal",
  q: "Compare Trichomonas vaginalis with the non-pathogenic intestinal and oral flagellates (Chilomastix mesnili, Pentatrichomonas hominis, Trichomonas tenax).",
  tags: ["flagellates", "Chilomastix", "Trichomonas"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th><em>T. vaginalis</em></th><th><em>P. hominis</em></th><th><em>T. tenax</em></th><th><em>Chilomastix mesnili</em></th></tr>
      <tr><td>Site</td><td>Urogenital tract</td><td>Large intestine</td><td>Mouth (periodontal pockets)</td><td>Large intestine</td></tr>
      <tr><td>Size</td><td>7–30 µm</td><td>8–20 µm</td><td>5–12 µm</td><td>6–24 µm</td></tr>
      <tr><td>Flagella</td><td>4 anterior + 1 along undulating membrane</td><td>5 anterior + 1 recurrent</td><td>4 anterior</td><td>3 anterior + 1 in cytostome</td></tr>
      <tr><td>Undulating membrane</td><td>Short — half the body length</td><td><strong>Full body length</strong></td><td>Short</td><td>None; <strong>spiral groove</strong> and large cytostome</td></tr>
      <tr><td>Cyst</td><td>None</td><td>None</td><td>None</td><td><strong>Lemon-shaped cyst</strong> with anterior knob</td></tr>
      <tr><td>Pathogenic</td><td>Yes — STI</td><td>No</td><td>No (marker of poor oral hygiene; rarely lung)</td><td>No</td></tr>
    </table></div>
    <h4>Significance</h4>
    <ul>
      <li>Non-pathogenic flagellates are markers of <strong>faecal–oral exposure</strong> — their presence means the patient ingested faecally contaminated food or water and may have pathogens too.</li>
      <li><em>Trichomonas</em> species have <strong>no cyst stage</strong>, so transmission is direct (sexual for <em>T. vaginalis</em>, kissing/shared utensils for <em>T. tenax</em>).</li>
      <li>A trichomonad found in urine must be interpreted carefully: faecal contamination with <em>P. hominis</em> can be confused with <em>T. vaginalis</em>.</li>
    </ul>
    <h4>Laboratory diagnosis of <em>T. vaginalis</em></h4>
    <p>Wet mount (sensitivity only ~50–60%, examine within 10–20 min), culture (InPouch TV), rapid antigen tests, and <strong>NAAT</strong> (most sensitive; recommended, also detects infection in men).</p>
  `,
  tip: "Mention that non-pathogenic flagellates indicate faecal exposure — it shows interpretive skill.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa9", domain: "para-intestinal",
  q: "Discuss microsporidia as human pathogens and the laboratory methods for their detection.",
  tags: ["microsporidia", "Enterocytozoon", "Encephalitozoon", "HIV"],
  answer: `
    <p>Microsporidia are obligate intracellular, spore-forming organisms now classified with the <strong>fungi</strong> (or as a sister group), but traditionally taught in parasitology. Spores are tiny (1–4 µm) and contain a unique <strong>polar tubule (polar filament)</strong> that everts to inject the infective sporoplasm into a host cell.</p>
    <h4>Important species</h4>
    <ul>
      <li><strong><em>Enterocytozoon bieneusi</em></strong> — most common; chronic diarrhoea and wasting in HIV patients with low CD4; cholangitis.</li>
      <li><strong><em>Encephalitozoon intestinalis</em></strong> — diarrhoea, can disseminate (kidney, biliary tract).</li>
      <li><em>E. cuniculi</em>, <em>E. hellem</em> — disseminated disease, keratoconjunctivitis.</li>
      <li>Others (e.g. <em>Vittaforma</em>, <em>Anncaliia</em>) — corneal and muscle infections.</li>
    </ul>
    <p>Infection also occurs in transplant recipients, children, travellers and the elderly. Transmission: ingestion or inhalation of spores (water, food), zoonotic.</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li><strong>Modified trichrome stain (Weber — chromotrope 2R, ten times the usual concentration)</strong>: spores stain pinkish-red, oval, often with a diagonal or horizontal "belt-like" stripe; needs oil immersion (×1000) and experienced readers.</li>
      <li><strong>Chemofluorescent agents</strong> (calcofluor white, Uvitex 2B): spore walls fluoresce — sensitive but not specific (yeasts also fluoresce).</li>
      <li><strong>Electron microscopy</strong> — gold standard for species identification (number of polar tubule coils).</li>
      <li><strong>PCR</strong> — species identification; increasingly the method of choice.</li>
      <li>Tissue biopsy (small intestine), urine (disseminated <em>Encephalitozoon</em>), corneal scrapings.</li>
    </ul>
    <h4>Treatment</h4>
    <p><strong>Albendazole</strong> for <em>Encephalitozoon</em> spp.; <strong>fumagillin</strong> for <em>E. bieneusi</em> (albendazole ineffective); immune reconstitution with ART is key.</p>
  `,
  tip: "Name the modified trichrome (Weber) stain and the polar tubule — both are classic exam answers.",
  sources: ["P2", "P3"]
},
{
  id: "pa10", domain: "para-blood", star: true,
  q: "Compare the morphological features of the five human Plasmodium species on thin blood films and explain the importance of species identification.",
  tags: ["malaria", "species identification", "thin film", "P. knowlesi"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th><em>P. falciparum</em></th><th><em>P. vivax</em></th><th><em>P. ovale</em></th><th><em>P. malariae</em></th><th><em>P. knowlesi</em></th></tr>
      <tr><td>Infected RBC size</td><td>Normal</td><td><strong>Enlarged</strong>, pale</td><td>Enlarged, <strong>oval, fimbriated</strong></td><td>Normal or small</td><td>Normal</td></tr>
      <tr><td>Stippling</td><td>Maurer's clefts (coarse)</td><td><strong>Schüffner's dots</strong></td><td>Schüffner's (James') dots</td><td>Ziemann's dots (rare)</td><td>Faint or none</td></tr>
      <tr><td>Rings</td><td>Small, delicate, <strong>multiple per cell</strong>, double chromatin dots, <strong>appliqué</strong> forms</td><td>Large, thick</td><td>Thick, compact</td><td>Thick, compact</td><td>Like falciparum (double dots, multiple)</td></tr>
      <tr><td>Trophozoites</td><td>Rarely seen in peripheral blood</td><td><strong>Amoeboid</strong></td><td>Compact</td><td><strong>Band form</strong></td><td>Band forms (like <em>P. malariae</em>)</td></tr>
      <tr><td>Schizonts (merozoites)</td><td>Rare in blood (8–24)</td><td>12–24</td><td>6–14</td><td>6–12, <strong>rosette</strong></td><td>Up to 16</td></tr>
      <tr><td>Gametocytes</td><td><strong>Crescent/banana-shaped</strong></td><td>Round, fill cell</td><td>Round</td><td>Round</td><td>Round</td></tr>
      <tr><td>Erythrocytic cycle</td><td>48 h (tertian)</td><td>48 h</td><td>48 h</td><td>72 h (quartan)</td><td><strong>24 h</strong> — rapid rise in parasitaemia</td></tr>
      <tr><td>Hypnozoites (relapse)</td><td>No</td><td>Yes</td><td>Yes</td><td>No (but long-lived recrudescence)</td><td>No</td></tr>
    </table></div>
    <h4>Why species identification matters</h4>
    <ul>
      <li><strong>Severity</strong>: <em>P. falciparum</em> and <em>P. knowlesi</em> can cause severe and fatal disease — need urgent assessment and parasitaemia measurement.</li>
      <li><strong>Treatment</strong>: <em>P. vivax</em> and <em>P. ovale</em> need <strong>primaquine</strong> or tafenoquine (after G6PD testing) to eradicate hypnozoites.</li>
      <li><strong>Drug resistance</strong> patterns differ.</li>
      <li><strong><em>P. knowlesi</em></strong> (a macaque parasite) is <strong>misdiagnosed as <em>P. malariae</em></strong> (band forms) or <em>P. falciparum</em> (rings) by microscopy — PCR is needed. Human cases have been reported in <strong>Palawan</strong>, Philippines, where long-tailed macaques and <em>Anopheles</em> vectors overlap.</li>
    </ul>
  `,
  tip: "Mention P. knowlesi in Palawan and its 24-hour cycle — a strong locally relevant point.",
  sources: ["P3", "P2", "P7", "P4"]
},
{
  id: "pa11", domain: "para-blood", star: true,
  q: "Discuss the laboratory diagnosis of malaria: blood film preparation and staining, parasite density estimation, RDTs and molecular methods.",
  tags: ["malaria diagnosis", "Giemsa", "parasitaemia", "RDT", "calculation"],
  answer: `
    <h4>Blood films</h4>
    <ul>
      <li><strong>Thick film</strong>: red cells lysed during staining (not fixed) → concentrates parasites ~20–40 times; for <strong>detection</strong> and density.</li>
      <li><strong>Thin film</strong>: methanol-fixed monolayer; for <strong>species identification</strong> and percentage parasitaemia.</li>
      <li><strong>Giemsa stain at pH 7.2</strong> (3% for 30–45 min or 10% for 10 min) — correct pH is needed to show Schüffner's dots. Field's stain for rapid thick films.</li>
      <li>Collect blood before treatment; examine at least <strong>100 (thick film: 200–300) high-power oil immersion fields</strong> before declaring negative; repeat every 12–24 h for 3 sets if clinical suspicion remains.</li>
    </ul>
    <h4>Parasite density</h4>
    <div class="calc">Thick film (WHO): parasites/µL = (parasites counted ÷ WBC counted) × WBC count/µL
  e.g. 160 parasites per 200 WBC, WBC 8000/µL → 160/200 × 8000 = 6,400 parasites/µL
  (assume 8000/µL if WBC count not available)

Thin film: % parasitaemia = (infected RBCs ÷ total RBCs counted) × 100
  e.g. 45 infected in 1000 RBCs = 4.5%  (severe falciparum: &gt;2–5% or &gt;10% depending on setting)</div>
    <p>Count asexual stages only; gametocytes are reported separately.</p>
    <h4>Rapid diagnostic tests (RDTs)</h4>
    <ul>
      <li>Detect <strong>HRP2</strong> (falciparum-specific), <strong>pLDH</strong> (pan- or species-specific) or aldolase (pan).</li>
      <li>Advantages: no microscope, 15–20 min, used by barangay health workers in endemic areas of the Philippines.</li>
      <li>Limitations: HRP2 persists for weeks after cure (cannot monitor treatment); <strong><em>pfhrp2/3</em> gene deletions</strong> → false negatives; poor sensitivity at &lt;100–200 parasites/µL; prozone effect at very high parasitaemia; do not quantify; poor for <em>P. knowlesi</em>.</li>
    </ul>
    <h4>Molecular methods</h4>
    <p>PCR, nested PCR, real-time PCR and LAMP: detect low-density and sub-microscopic infections (important for elimination surveillance), identify mixed infections and <em>P. knowlesi</em>, and detect resistance markers (<em>kelch13</em>, <em>pfcrt</em>, <em>pfmdr1</em>). Used mainly in reference laboratories (RITM in the Philippines).</p>
    <h4>Quality assurance</h4>
    <p>Cross-checking of slides (blinded rechecking of all positives and a sample of negatives), WHO competency assessment of microscopists, and RDT lot testing.</p>
  `,
  tip: "Show the thick-film density calculation with a WBC count of 8000/µL — it is frequently asked.",
  sources: ["P7", "P3", "P2", "P11"]
},
{
  id: "pa12", domain: "para-blood",
  q: "Discuss malaria in the Philippines: epidemiology, vectors and the national elimination programme.",
  tags: ["Philippines", "malaria elimination", "Anopheles flavirostris", "Palawan"],
  answer: `
    <h4>Epidemiology</h4>
    <p>The Philippines has made major progress toward malaria elimination. Most provinces have been declared <strong>malaria-free</strong>, and the remaining local transmission is concentrated in <strong>Palawan</strong> (which accounts for the large majority of indigenous cases) and a few areas of Mindanao (e.g. Sulu, Davao del Norte, Sultan Kudarat — varying by year). <em>P. falciparum</em> predominates, with <em>P. vivax</em>; <em>P. knowlesi</em> cases have been documented in Palawan. Affected groups are mainly rural and indigenous communities, forest workers and miners, and people in conflict-affected or remote areas.</p>
    <h4>Vectors</h4>
    <ul>
      <li><strong><em>Anopheles flavirostris</em></strong> (now <em>An. minimus</em> group) — the principal vector; breeds in <strong>slow-flowing, clear, partly shaded foothill streams</strong>; bites at night, outdoors and indoors.</li>
      <li>Secondary vectors: <em>An. litoralis</em> (coastal brackish water), <em>An. maculatus</em>, <em>An. mangyanus</em>, <em>An. balabacensis</em> (forest, Palawan; also a <em>P. knowlesi</em> vector).</li>
    </ul>
    <h4>National programme (DOH Malaria Control and Elimination Program)</h4>
    <ul>
      <li>Goal: national malaria elimination (the Philippine Strategic Plan targets elimination by 2030).</li>
      <li><strong>Diagnosis</strong>: free microscopy and RDTs at rural health units, barangay malaria microscopists, quality assurance through regional and national (RITM) reference laboratories.</li>
      <li><strong>Treatment</strong>: artemether–lumefantrine for uncomplicated falciparum; chloroquine + primaquine for vivax; single low-dose primaquine as a gametocytocide for falciparum.</li>
      <li><strong>Vector control</strong>: long-lasting insecticidal nets, indoor residual spraying, larval source management (stream clearing).</li>
      <li><strong>Surveillance</strong>: case investigation, classification (indigenous vs imported), foci investigation, "1-3-7" style reactive approaches; reporting to the online malaria information system.</li>
      <li>Partnerships: Global Fund, Pilipinas Shell Foundation (Movement Against Malaria in Palawan), LGUs.</li>
    </ul>
    <h4>Challenges</h4>
    <p>Hard-to-reach populations, asymptomatic low-density infections missed by microscopy/RDT, imported cases from returning overseas workers, artemisinin partial resistance in the Greater Mekong, and zoonotic <em>P. knowlesi</em>, which cannot be eliminated by human-focused interventions alone.</p>
  `,
  tip: "Name An. flavirostris and its foothill-stream breeding habitat — classic Philippine exam knowledge.",
  sources: ["P9", "P4", "P7"]
},
{
  id: "pa13", domain: "para-blood",
  q: "Explain the pathophysiology and laboratory features of severe falciparum malaria and the WHO criteria for severe malaria.",
  tags: ["severe malaria", "WHO criteria", "cerebral malaria"],
  answer: `
    <h4>Pathophysiology</h4>
    <ul>
      <li><strong>Cytoadherence and sequestration</strong>: PfEMP1 (on knobs) binds endothelial receptors — CD36, ICAM-1 (brain), EPCR, chondroitin sulfate A (placenta). Mature parasites hide in deep capillaries, avoiding splenic clearance.</li>
      <li><strong>Rosetting</strong> and clumping obstruct microcirculation.</li>
      <li><strong>Reduced red cell deformability</strong> and haemolysis (infected and uninfected cells) → anaemia.</li>
      <li><strong>Inflammatory cytokines</strong> (TNF-α), endothelial activation, breakdown of the blood–brain barrier.</li>
      <li>Hypoglycaemia: parasite glucose consumption, impaired gluconeogenesis, quinine-induced insulin release.</li>
      <li>Lactic acidosis from anaerobic glycolysis in hypoperfused tissues.</li>
    </ul>
    <h4>WHO criteria for severe falciparum malaria (any one, with asexual parasitaemia and no other cause)</h4>
    <div class="table-wrap"><table>
      <tr><th>Clinical</th><th>Laboratory</th></tr>
      <tr><td>Impaired consciousness (GCS &lt;11 adults; Blantyre &lt;3 children)</td><td>Hypoglycaemia &lt;2.2 mmol/L (&lt;40 mg/dL)</td></tr>
      <tr><td>Prostration</td><td>Metabolic acidosis: base deficit &gt;8 mEq/L, HCO₃⁻ &lt;15 mmol/L or lactate ≥5 mmol/L</td></tr>
      <tr><td>Multiple convulsions (&gt;2 in 24 h)</td><td>Severe anaemia: Hb ≤50 g/L (children) or ≤70 g/L (adults) with parasitaemia &gt;10,000/µL</td></tr>
      <tr><td>Pulmonary oedema / ARDS</td><td>Renal impairment: creatinine &gt;265 µmol/L (3 mg/dL) or urea &gt;20 mmol/L</td></tr>
      <tr><td>Significant bleeding</td><td>Jaundice: bilirubin &gt;50 µmol/L (3 mg/dL) with parasitaemia &gt;100,000/µL</td></tr>
      <tr><td>Shock</td><td><strong>Hyperparasitaemia &gt;10%</strong></td></tr>
    </table></div>
    <h4>Laboratory role</h4>
    <p>Frequent glucose checks, parasite counts every 12–24 h to confirm response (clearance should be &gt;75% by 48 h), lactate, blood gases, renal function, bilirubin, haemoglobin, platelets, blood cultures (bacterial co-infection, especially in children). Thrombocytopenia is very common but is not itself a criterion. Treatment: <strong>IV artesunate</strong>; watch for post-artesunate delayed haemolysis (PADH) 1–3 weeks later.</p>
  `,
  tip: "Learn the numerical WHO thresholds — they are the scoring points in this answer.",
  sources: ["P7", "P1", "P3"]
},
{
  id: "pa14", domain: "para-blood",
  q: "Discuss babesiosis and compare Babesia with Plasmodium in the laboratory.",
  tags: ["Babesia", "tick-borne", "Maltese cross"],
  answer: `
    <h4>The parasite and transmission</h4>
    <p><em>Babesia</em> spp. are intra-erythrocytic apicomplexan protozoa transmitted by <strong>hard ticks</strong> (<em>Ixodes</em> spp.). <em>B. microti</em> (north-eastern and upper mid-western USA; rodent reservoir) and <em>B. divergens</em> (Europe; cattle) are the main human species. <strong>Transfusion-transmitted babesiosis</strong> is a recognised risk in the USA (blood screening is performed in endemic states). Human cases in Asia (including <em>B. microti</em>-like and <em>B. venatorum</em> in China) are increasingly reported.</p>
    <h4>Disease</h4>
    <p>Most infections are mild or asymptomatic. Severe disease (haemolysis, ARDS, renal failure, DIC) occurs in <strong>asplenic</strong>, elderly and immunocompromised patients, especially with <em>B. divergens</em>.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th><em>Babesia</em></th><th><em>P. falciparum</em></th></tr>
      <tr><td>Ring forms</td><td>Pleomorphic, often vacuolated; <strong>extracellular</strong> forms common</td><td>Rings within cells; no extracellular forms (except artefact)</td></tr>
      <tr><td>Tetrads</td><td><strong>"Maltese cross"</strong> tetrads — pathognomonic but uncommon</td><td>Absent</td></tr>
      <tr><td>Pigment (haemozoin)</td><td><strong>Absent</strong></td><td>Present in mature trophozoites/schizonts and gametocytes</td></tr>
      <tr><td>Schizonts, gametocytes</td><td>Absent</td><td>Gametocytes (crescents); schizonts rarely</td></tr>
      <tr><td>Travel history</td><td>Tick exposure in endemic areas, transfusion</td><td>Malaria-endemic area</td></tr>
    </table></div>
    <h4>Diagnosis and treatment</h4>
    <p>Giemsa thin films (parasitaemia estimate), PCR (species identification and low-level infection), serology (IFA). Treatment: atovaquone + azithromycin (mild), clindamycin + quinine (severe); <strong>red cell exchange transfusion</strong> for parasitaemia &gt;10% or severe haemolysis/organ failure.</p>
  `,
  tip: "No pigment, extracellular forms and Maltese cross tetrads — the three discriminators from falciparum.",
  sources: ["P3", "P2"]
},
{
  id: "pa15", domain: "para-blood",
  q: "Discuss the laboratory diagnosis of toxoplasmosis in pregnancy, including the interpretation of IgM and IgG avidity tests.",
  tags: ["Toxoplasma", "IgG avidity", "congenital", "serology"],
  answer: `
    <p>The aim in pregnancy is to determine whether infection was acquired <strong>during</strong> the pregnancy, because only primary infection during pregnancy (or reactivation in severe immunosuppression) puts the fetus at risk. Transmission risk rises with gestation (~15% first trimester, ~70% third), but severity is greatest when infection occurs early.</p>
    <h4>Serological interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>IgG</th><th>IgM</th><th>Interpretation</th><th>Action</th></tr>
      <tr><td>−</td><td>−</td><td>Susceptible</td><td>Hygiene advice; repeat screening (in programmes that screen)</td></tr>
      <tr><td>+</td><td>−</td><td>Past infection (&gt;1 year), if early in pregnancy</td><td>No further action</td></tr>
      <tr><td>−</td><td>+</td><td>Very early infection or false-positive IgM</td><td>Repeat in 2–3 weeks: IgG seroconversion confirms</td></tr>
      <tr><td>+</td><td>+</td><td>Recent infection <strong>or</strong> persistent IgM (can last months to years)</td><td><strong>IgG avidity</strong>, reference laboratory confirmation</td></tr>
    </table></div>
    <h4>IgG avidity</h4>
    <p>Avidity (strength of antigen binding) matures over time. A <strong>high avidity</strong> result means infection occurred <strong>more than ~3–5 months ago</strong> (assay-dependent) — if tested in the first trimester, infection predates the pregnancy. <strong>Low avidity</strong> does <em>not</em> prove recent infection (it can persist for a year), so it is useful only for <em>excluding</em> recent infection.</p>
    <h4>Confirming fetal infection</h4>
    <ul>
      <li><strong>PCR of amniotic fluid</strong> (B1 gene or 529-bp repeat element) after 18 weeks and ≥4 weeks after maternal infection.</li>
      <li>Ultrasound: ventriculomegaly, intracranial calcification, hepatosplenomegaly.</li>
      <li>Newborn: IgM/IgA (not passed by placenta), rising or persistent IgG beyond 12 months, PCR of blood/CSF, comparative Western blot of mother and baby.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Spiramycin (reduces transmission) if fetus not infected; pyrimethamine + sulfadiazine + folinic acid if fetal infection is confirmed (after 18 weeks).</p>
  `,
  tip: "Stress that high avidity excludes recent infection but low avidity does not confirm it.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa16", domain: "para-blood",
  q: "Short notes: Leishmania and Trypanosoma — compare their morphological stages and the laboratory methods used to demonstrate them.",
  tags: ["haemoflagellates", "amastigote", "trypomastigote", "laboratory"],
  answer: `
    <h4>Morphological stages of haemoflagellates (kinetoplastids)</h4>
    <div class="table-wrap"><table>
      <tr><th>Stage</th><th>Kinetoplast position</th><th>Flagellum / undulating membrane</th><th>Where found</th></tr>
      <tr><td><strong>Amastigote</strong> (Leishman–Donovan body)</td><td>Rod-shaped, beside nucleus</td><td>No free flagellum</td><td><em>Leishmania</em> in macrophages; <em>T. cruzi</em> in muscle cells</td></tr>
      <tr><td><strong>Promastigote</strong></td><td>Anterior</td><td>Free anterior flagellum, no membrane</td><td><em>Leishmania</em> in sandfly and culture</td></tr>
      <tr><td><strong>Epimastigote</strong></td><td>Anterior to nucleus</td><td>Short undulating membrane</td><td>Trypanosomes in vector</td></tr>
      <tr><td><strong>Trypomastigote</strong></td><td>Posterior to nucleus</td><td>Full undulating membrane</td><td>Trypanosomes in human blood</td></tr>
    </table></div>
    <h4>Laboratory demonstration</h4>
    <ul>
      <li><strong>Visceral leishmaniasis</strong>: amastigotes in <strong>splenic aspirate</strong> (most sensitive, &gt;95%, but bleeding risk), bone marrow, lymph node aspirate; culture in <strong>NNN medium</strong> (promastigotes); rK39 rapid antibody test; direct agglutination test; PCR.</li>
      <li><strong>Cutaneous leishmaniasis</strong>: slit-skin smears or biopsy from the active <strong>edge</strong> of the ulcer; culture; PCR for species (guides treatment).</li>
      <li><strong>African trypanosomiasis</strong>: trypomastigotes in thick/thin films, lymph node aspirate (Winterbottom's sign), CSF (staging — WBC &gt;5/µL or trypanosomes = stage 2); concentration (mini-anion exchange centrifugation, buffy coat); CATT screening for <em>T. b. gambiense</em>.</li>
      <li><strong>Chagas disease</strong>: acute — trypomastigotes in blood (C- or U-shaped, large kinetoplast), concentration (Strout, microhaematocrit in neonates); chronic — <strong>serology with two different assays</strong>, PCR; xenodiagnosis historically.</li>
    </ul>
    <p>These diseases are not endemic in the Philippines but appear in returning overseas Filipino workers (e.g. from the Middle East — cutaneous leishmaniasis) and are part of the international examination syllabus.</p>
  `,
  tip: "Draw the four stages with kinetoplast position — a simple diagram earns marks quickly.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa17", domain: "para-intestinal",
  q: "Discuss Trichomonas vaginalis infection in men and women: laboratory diagnosis and comparison of test performance.",
  tags: ["Trichomonas", "NAAT", "wet mount", "STI"],
  answer: `
    <p><em>T. vaginalis</em> is the most common non-viral sexually transmitted infection worldwide. It is linked to increased HIV acquisition and transmission, preterm birth and low birth weight, and pelvic inflammatory disease. Men are mostly asymptomatic carriers (urethritis, prostatitis).</p>
    <h4>Specimens</h4>
    <ul><li>Women: vaginal swab (best), endocervical swab, urine (less sensitive).</li><li>Men: first-void urine, urethral swab, semen.</li></ul>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Sensitivity</th><th>Comments</th></tr>
      <tr><td>Wet mount microscopy</td><td>~50–60% (women), lower in men</td><td>Cheap and immediate; read within 10–20 minutes (motility lost as specimen cools); jerky motility and undulating membrane</td></tr>
      <tr><td>Culture (Diamond's medium, InPouch TV)</td><td>~75–95%</td><td>Former gold standard; takes up to 5–7 days</td></tr>
      <tr><td>Rapid antigen test (OSOM)</td><td>~82–95%</td><td>10 min; point of care; women only</td></tr>
      <tr><td>NAAT (TMA, PCR)</td><td>&gt;95%</td><td>Recommended test (CDC); same sample as chlamydia/gonorrhoea; validated in men</td></tr>
      <tr><td>Pap smear</td><td>Low; false positives</td><td>Should be confirmed</td></tr>
    </table></div>
    <h4>Supporting findings</h4>
    <p>Vaginal pH &gt;4.5, frothy yellow-green discharge, "strawberry cervix" (colpitis macularis), positive whiff test (also in bacterial vaginosis), many leukocytes.</p>
    <h4>Treatment and test of cure</h4>
    <p>Metronidazole 500 mg twice daily for 7 days (women; preferred over single 2-g dose) or 2 g single dose (men); treat partners; retest women within 3 months (reinfection is common). Nitroimidazole resistance is increasing.</p>
  `,
  tip: "Rank tests by sensitivity and give NAAT as the recommended test.",
  sources: ["P2", "P3"]
},
{
  id: "pa18", domain: "para-blood",
  q: "Discuss the immunology of malaria and the role of host genetic factors (e.g. sickle cell trait, thalassaemia, G6PD deficiency, Duffy negativity) in protection.",
  tags: ["malaria immunity", "G6PD", "sickle cell", "Duffy"],
  answer: `
    <h4>Acquired immunity</h4>
    <p>Immunity develops slowly after repeated infections and is <strong>non-sterilising</strong> ("premunition") — adults in high-transmission areas carry parasites without severe disease. It wanes without re-exposure (e.g. migrants returning home). Mechanisms: antibodies against merozoite surface proteins and PfEMP1 variants (blocking invasion and cytoadherence; opsonisation), cell-mediated immunity against liver stages (CD8⁺ T cells, IFN-γ). <strong>Antigenic variation</strong> of PfEMP1 (var genes, ~60 per genome) is a major immune evasion mechanism. Vaccines: RTS,S/AS01 and R21/Matrix-M target the circumsporozoite protein.</p>
    <h4>Innate host genetic factors</h4>
    <div class="table-wrap"><table>
      <tr><th>Trait</th><th>Mechanism of protection</th><th>Relevance</th></tr>
      <tr><td><strong>HbS (sickle trait)</strong></td><td>Infected cells sickle under low O₂ and are cleared by the spleen; impaired parasite growth; reduced cytoadherence</td><td>~90% protection against severe falciparum malaria (balanced polymorphism)</td></tr>
      <tr><td><strong>α- and β-thalassaemia</strong></td><td>Smaller cells, reduced rosetting, enhanced antibody binding</td><td>Protects against severe malaria; common in the Philippines and Southeast Asia</td></tr>
      <tr><td><strong>HbE</strong> (Southeast Asia)</td><td>Reduced invasion and growth</td><td>Common in the region</td></tr>
      <tr><td><strong>G6PD deficiency</strong></td><td>Oxidative stress impairs parasite growth; early clearance of infected cells</td><td>Common in Filipinos (~2–3% of newborns); important because <strong>primaquine/tafenoquine cause haemolysis</strong> — G6PD testing before radical cure</td></tr>
      <tr><td><strong>Duffy-negative Fy(a−b−)</strong></td><td>No receptor (DARC) for <em>P. vivax</em> Duffy-binding protein</td><td>Explains historical absence of <em>P. vivax</em> in West Africa (though Duffy-independent infections now reported)</td></tr>
      <tr><td><strong>Southeast Asian ovalocytosis</strong> (band 3 deletion)</td><td>Rigid membrane resists invasion</td><td>Protects against cerebral malaria; found in Malaysia, PNG, Philippines</td></tr>
    </table></div>
    <p>These traits illustrate the <strong>malaria hypothesis</strong> (Haldane) — malaria has been one of the strongest selective pressures on the human genome.</p>
  `,
  tip: "Connect G6PD deficiency to primaquine safety — a practical point beyond pure immunology.",
  sources: ["P1", "P7", "P3"]
}
);
