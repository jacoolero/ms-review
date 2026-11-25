/* Parasitology — part 2: nematodes; trematodes */
window.QBANK.push(
{
  id: "pa19", domain: "para-nematodes", star: true,
  q: "Discuss Capillaria philippinensis: discovery, life cycle, clinical features, diagnosis and treatment.",
  tags: ["Capillaria philippinensis", "intestinal capillariasis", "Philippines"],
  answer: `
    <h4>Discovery and distribution</h4>
    <p>First recognised in the <strong>Philippines in 1963</strong> (described by Chitwood, Velasquez and Salazar) when a man from Bacarra, <strong>Ilocos Norte</strong>, died of an unexplained wasting diarrhoea; an epidemic followed in the mid-1960s in <strong>Tagudin, Ilocos Sur</strong> (Pudoc), with over 1,000 cases and ~100 deaths. Later cases were reported from other Philippine provinces and from Thailand, Japan, Taiwan, Egypt, Iran and elsewhere.</p>
    <h4>Life cycle</h4>
    <ol>
      <li>Eggs passed in faeces reach fresh or brackish water and embryonate.</li>
      <li>Eaten by small <strong>freshwater/brackish fish</strong> (e.g. "bagsit", "ipon" — goby-like fish), in which larvae develop (intermediate host).</li>
      <li>Humans are infected by eating <strong>raw or undercooked small whole fish</strong> (e.g. as "kinilaw" or in "jumpong").</li>
      <li>Adults live in the <strong>small intestine</strong> (jejunum), embedded in mucosa.</li>
      <li><strong>Autoinfection</strong>: females produce larvae (larviparous) as well as eggs; larvae can develop into adults within the same host — causing a massive worm burden (thousands) without re-exposure.</li>
    </ol>
    <p>Fish-eating birds are thought to be the natural definitive hosts.</p>
    <h4>Clinical features</h4>
    <p>Chronic watery diarrhoea, borborygmi ("gurgling stomach"), abdominal pain, severe <strong>protein-losing enteropathy</strong> and malabsorption, weight loss, cachexia, oedema, hypokalaemia, hypocalcaemia, hypoalbuminaemia. Untreated, it is often <strong>fatal</strong> (heart failure from electrolyte loss, secondary infection).</p>
    <h4>Diagnosis</h4>
    <p>Stool examination (repeated, with concentration): <strong>peanut-shaped eggs</strong> (36–45 × 20 µm) with <strong>flattened bipolar plugs</strong> and a striated shell — distinguished from <em>Trichuris</em> eggs (barrel-shaped with protruding plugs). Larvae and adults may also be found. Duodenal aspirate, biopsy; serology and PCR in research settings.</p>
    <h4>Treatment</h4>
    <p><strong>Albendazole</strong> 400 mg daily for 10 days (preferred) or mebendazole for 20 days — long courses because of autoinfection; electrolyte and protein replacement. Prevention: avoid eating raw fish; sanitation.</p>
  `,
  tip: "Give the Philippine history (Ilocos 1963, Tagudin epidemic) and autoinfection — both are classic marks.",
  sources: ["P10", "P4", "P3", "P1"]
},
{
  id: "pa20", domain: "para-nematodes", star: true,
  q: "Discuss Strongyloides stercoralis: unique life cycle features, hyperinfection syndrome and laboratory diagnosis.",
  tags: ["Strongyloides", "hyperinfection", "autoinfection", "agar plate"],
  answer: `
    <h4>Unique features of the life cycle</h4>
    <ul>
      <li><strong>Rhabditiform larvae</strong> (not eggs) are passed in stool.</li>
      <li><strong>Free-living cycle</strong> in soil (heterogonic) — adults mate and multiply outside the host.</li>
      <li>Infective <strong>filariform larvae (L3)</strong> penetrate skin, migrate via the lungs to the small intestine; parthenogenetic females live in the duodenal/jejunal mucosa.</li>
      <li><strong>Autoinfection</strong>: rhabditiform larvae become filariform in the gut and re-penetrate the bowel wall or perianal skin. Infection can persist for <strong>decades</strong> (e.g. war veterans infected in Southeast Asia).</li>
    </ul>
    <h4>Clinical forms</h4>
    <ul>
      <li>Asymptomatic or mild GI symptoms with intermittent <strong>eosinophilia</strong>.</li>
      <li><strong>Larva currens</strong> — rapidly moving (up to 10 cm/h) urticarial track around buttocks and thighs.</li>
      <li><strong>Hyperinfection syndrome</strong>: accelerated autoinfection with huge larval numbers in gut and lungs, triggered by <strong>corticosteroids</strong> (most important), HTLV-1 co-infection, transplantation, malignancy, malnutrition, alcoholism.</li>
      <li><strong>Disseminated strongyloidiasis</strong>: larvae in other organs (CNS, liver, skin); larvae carry gut bacteria → <strong>Gram-negative septicaemia and meningitis</strong>. Mortality up to 60–90%. Eosinophilia is often absent (steroids).</li>
    </ul>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li>Single stool microscopy is insensitive (~30%) — larval output is low and irregular.</li>
      <li><strong>Agar plate culture (Koga)</strong>: larvae crawl and leave <strong>bacterial tracks</strong> on the agar — most sensitive stool method.</li>
      <li><strong>Baermann concentration</strong> (larvae migrate out of stool into warm water), Harada-Mori filter paper culture.</li>
      <li><strong>Serology</strong> (ELISA, NIE recombinant antigen) — sensitive, used for screening before immunosuppression; cross-reacts with filariae.</li>
      <li>PCR of stool.</li>
      <li>Hyperinfection: larvae in sputum, BAL, duodenal fluid, CSF.</li>
    </ul>
    <p>Distinguish rhabditiform larvae from hookworm: <em>Strongyloides</em> has a <strong>short buccal cavity</strong> and a prominent genital primordium; hookworm has a long buccal cavity.</p>
    <h4>Treatment and prevention</h4>
    <p><strong>Ivermectin</strong> (drug of choice). Screen and treat (or treat empirically) people from endemic areas — such as the Philippines — before starting steroids or transplantation.</p>
  `,
  tip: "Name steroids and HTLV-1 as triggers and recommend screening before immunosuppression.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa21", domain: "para-nematodes",
  q: "Compare the eggs and larvae of Ascaris lumbricoides, Trichuris trichiura, hookworm, Enterobius vermicularis and Capillaria philippinensis.",
  tags: ["helminth eggs", "identification", "morphology"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Parasite</th><th>Egg size</th><th>Shape and shell</th><th>Content when passed</th><th>Key feature</th></tr>
      <tr><td><em>Ascaris</em> — fertile</td><td>45–75 × 35–50 µm</td><td>Round–oval; thick <strong>mammillated</strong> albuminous coat, bile-stained (brown)</td><td>Unembryonated single cell</td><td>Decorticated eggs lack the outer coat</td></tr>
      <tr><td><em>Ascaris</em> — unfertilised</td><td>85–95 × 43–47 µm</td><td>Elongated, thin shell, irregular coat</td><td>Refractile granules</td><td>Easy to miss in flotation (heavy)</td></tr>
      <tr><td><em>Trichuris</em></td><td>50–55 × 20–25 µm</td><td><strong>Barrel/lemon-shaped</strong>, brown, with <strong>prominent bipolar plugs</strong></td><td>Unembryonated</td><td>—</td></tr>
      <tr><td><em>C. philippinensis</em></td><td>36–45 × 20 µm</td><td>Peanut-shaped, <strong>flattened (inconspicuous) plugs</strong>, striated shell</td><td>Unembryonated</td><td>Smaller than <em>Trichuris</em></td></tr>
      <tr><td>Hookworm (<em>N. americanus</em>, <em>A. duodenale</em>)</td><td>60–75 × 35–40 µm</td><td>Oval, <strong>thin, colourless shell</strong>, clear space</td><td>Segmented (4–8 cell morula)</td><td>Eggs of the two species identical; delayed stool → larvae hatch (confuse with <em>Strongyloides</em>)</td></tr>
      <tr><td><em>Enterobius</em></td><td>50–60 × 20–30 µm</td><td>Oval, <strong>flattened on one side</strong> ("D-shaped")</td><td>Embryonated larva</td><td>Found by <strong>cellophane tape (Graham) test</strong> — rarely in stool</td></tr>
    </table></div>
    <h4>Larvae in stool</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th><em>Strongyloides</em> rhabditiform</th><th>Hookworm rhabditiform</th></tr>
      <tr><td>Buccal cavity</td><td><strong>Short</strong></td><td><strong>Long</strong></td></tr>
      <tr><td>Genital primordium</td><td>Large, prominent</td><td>Small</td></tr>
      <tr><td>Found in fresh stool?</td><td>Yes (normal)</td><td>Only if stool delayed</td></tr>
    </table></div>
    <p>Precise measurement with a calibrated micrometer and attention to shell, plugs and content allow confident identification; artefacts (pollen, plant cells, fungal spores) are common mimics.</p>
  `,
  tip: "Practise describing each egg in one line: size, shape, shell and content.",
  sources: ["P2", "P3", "P8"]
},
{
  id: "pa22", domain: "para-nematodes",
  q: "Discuss hookworm infection as a cause of iron deficiency anaemia and its public health importance in the Philippines.",
  tags: ["hookworm", "iron deficiency", "Necator", "STH"],
  answer: `
    <h4>Parasites</h4>
    <p><em>Necator americanus</em> (predominant in the Philippines and Southeast Asia) and <em>Ancylostoma duodenale</em>. Differentiated by adults: <em>A. duodenale</em> has two pairs of <strong>teeth</strong>; <em>N. americanus</em> has <strong>cutting plates</strong>. <em>A. ceylanicum</em> (zoonotic, from dogs and cats) is recognised in Southeast Asia.</p>
    <h4>Transmission</h4>
    <p>Filariform larvae in moist, warm soil contaminated by faeces <strong>penetrate the skin</strong> (bare feet) — "ground itch"; migrate through the lungs (mild Löffler-like symptoms) to the small intestine. <em>A. duodenale</em> can also infect orally and transmammarily.</p>
    <h4>Pathogenesis of anaemia</h4>
    <ul>
      <li>Adults attach to jejunal mucosa and suck blood; anticoagulant peptides cause continued bleeding.</li>
      <li>Daily blood loss: ~0.03 mL per <em>N. americanus</em> worm, ~0.15–0.2 mL per <em>A. duodenale</em> worm.</li>
      <li>Moderate–heavy infections cause <strong>microcytic hypochromic iron deficiency anaemia</strong> and <strong>hypoalbuminaemia</strong> (protein loss), especially when dietary iron is low.</li>
      <li>Most affected: school-age children (cognitive and growth impairment), women of reproductive age, pregnant women (maternal anaemia, low birth weight).</li>
    </ul>
    <h4>Laboratory</h4>
    <p>Stool microscopy with <strong>Kato–Katz</strong> (quantitative — eggs per gram; WHO intensity thresholds: light 1–1,999, moderate 2,000–3,999, heavy ≥4,000 epg), formalin–ether concentration, PCR. CBC: low Hb, MCV, ferritin; eosinophilia.</p>
    <h4>Public health importance in the Philippines</h4>
    <p>Soil-transmitted helminth (STH) prevalence among Filipino schoolchildren remains high (surveys have reported overall STH prevalence of ~30–60% in some regions). The <strong>DOH Integrated Helminth Control Program (IHCP)</strong> provides <strong>mass deworming twice a year</strong> (albendazole or mebendazole) to children 1–18 years — through schools (with DepEd) and communities — plus WASH (water, sanitation and hygiene) promotion, health education, and the Zero Open Defecation programme. Deworming is combined with iron supplementation for pregnant women.</p>
  `,
  tip: "Give the blood loss per worm and the Kato–Katz intensity thresholds — quantitative facts score well.",
  sources: ["P1", "P6", "P9", "P4"]
},
{
  id: "pa23", domain: "para-nematodes",
  q: "Discuss Angiostrongylus cantonensis and Gnathostoma spinigerum as causes of eosinophilic meningitis in Southeast Asia.",
  tags: ["eosinophilic meningitis", "Angiostrongylus", "Gnathostoma", "snails"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th><em>Angiostrongylus cantonensis</em> (rat lungworm)</th><th><em>Gnathostoma spinigerum</em></th></tr>
      <tr><td>Definitive host</td><td>Rats (adult in pulmonary arteries)</td><td>Dogs, cats (stomach wall)</td></tr>
      <tr><td>Source of human infection</td><td>Raw or undercooked <strong>snails</strong> (e.g. giant African land snail <em>Achatina</em>, <em>Pila</em> — "kuhol"), slugs; paratenic hosts (frogs, freshwater prawns, crabs, monitor lizards); contaminated vegetables</td><td>Raw or undercooked <strong>fish</strong> (e.g. snakehead "dalag"), frogs, poultry, snakes — e.g. in "kinilaw" or som fak</td></tr>
      <tr><td>Larval behaviour in humans</td><td>Larvae migrate to the brain and die there (accidental host)</td><td>Larvae migrate actively through tissues for years</td></tr>
      <tr><td>Main clinical picture</td><td><strong>Eosinophilic meningitis</strong>: severe headache, neck stiffness, paraesthesia; usually self-limited</td><td><strong>Migratory cutaneous swellings</strong>; <strong>eosinophilic myeloencephalitis</strong> — radiculomyelitis with severe radicular pain, paralysis, subarachnoid haemorrhage; higher mortality</td></tr>
      <tr><td>CSF</td><td>Raised pressure, pleocytosis with <strong>&gt;10% eosinophils</strong>, clear CSF</td><td>Eosinophilic pleocytosis, often <strong>xanthochromic/bloody</strong></td></tr>
      <tr><td>Diagnosis</td><td>Clinical + epidemiological; CSF eosinophils; serology (immunoblot 31-kDa antigen); <strong>real-time PCR of CSF</strong></td><td>Serology (24-kDa antigen immunoblot); recovery of larva from tissue</td></tr>
      <tr><td>Treatment</td><td>Corticosteroids, analgesia, repeat lumbar puncture; albendazole (controversial)</td><td>Albendazole or ivermectin; steroids for CNS disease</td></tr>
    </table></div>
    <h4>Laboratory approach to eosinophilic meningitis</h4>
    <p>Defined as ≥10 eosinophils/µL or &gt;10% eosinophils in CSF. Request a <strong>stained (Wright/Giemsa) cytospin</strong> — routine counts may not differentiate eosinophils. Other causes: <em>Toxocara</em>, cysticercosis, schistosomiasis, <em>Paragonimus</em> (cerebral), coccidioidomycosis, lymphoma, drugs, shunts.</p>
    <p>Cases of angiostrongyliasis have been reported in the Philippines associated with eating raw snails; prevention focuses on cooking snails and fish thoroughly and washing vegetables.</p>
  `,
  tip: "The CSF cytospin with eosinophils >10% defines the syndrome — mention it before listing causes.",
  sources: ["P3", "P1", "P2"]
},
{
  id: "pa24", domain: "para-nematodes",
  q: "Discuss toxocariasis (visceral and ocular larva migrans) and compare it with cutaneous larva migrans.",
  tags: ["Toxocara", "larva migrans", "zoonosis", "eosinophilia"],
  answer: `
    <h4>Toxocariasis</h4>
    <p>Caused by larvae of the dog roundworm <em>Toxocara canis</em> (and cat roundworm <em>T. cati</em>). Humans are <strong>paratenic (dead-end) hosts</strong>: embryonated eggs from soil contaminated by dog/cat faeces (parks, playgrounds, sandboxes) are ingested — especially by children with <strong>pica/geophagia</strong>. Larvae hatch and migrate through tissues but cannot mature.</p>
    <ul>
      <li><strong>Visceral larva migrans (VLM)</strong>: young children (1–5 years); fever, hepatomegaly, wheeze, cough, marked <strong>eosinophilia</strong> (often &gt;3,000/µL), hypergammaglobulinaemia, raised isohaemagglutinins (anti-A/B).</li>
      <li><strong>Ocular larva migrans (OLM)</strong>: older children; unilateral visual loss, strabismus, posterior pole granuloma, endophthalmitis — can mimic <strong>retinoblastoma</strong> (risk of unnecessary enucleation). Eosinophilia often absent.</li>
      <li><strong>Covert/common toxocariasis</strong>: non-specific symptoms, eosinophilia.</li>
      <li>Neurotoxocariasis (rare).</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>No eggs or larvae in stool (larvae do not mature). <strong>Serology</strong>: ELISA using <strong>Toxocara excretory–secretory (TES) antigen</strong>, confirmed by Western blot (low-molecular-weight bands 24–35 kDa are specific). Positive serology may reflect past infection; titres in OLM may be low — aqueous/vitreous humour antibody testing helps. Imaging and eye examination.</p>
    <h4>Cutaneous larva migrans (creeping eruption)</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th>Cutaneous LM</th><th>Visceral/ocular LM</th></tr>
      <tr><td>Agent</td><td>Animal <strong>hookworm</strong> larvae (<em>Ancylostoma braziliense</em>, <em>A. caninum</em>)</td><td><em>Toxocara</em> larvae</td></tr>
      <tr><td>Route</td><td>Skin penetration (beaches, sand)</td><td>Ingestion of eggs</td></tr>
      <tr><td>Lesion</td><td>Serpiginous, intensely itchy track, moving a few mm–cm/day</td><td>Internal organs, eye</td></tr>
      <tr><td>Diagnosis</td><td>Clinical</td><td>Serology</td></tr>
      <tr><td>Treatment</td><td>Ivermectin single dose or albendazole</td><td>Albendazole + steroids (VLM); steroids ± laser/surgery (OLM)</td></tr>
    </table></div>
    <p>Prevention: deworming of pets, removing pet faeces from public areas, hand washing — One Health measures relevant to the Philippines' large free-roaming dog population.</p>
  `,
  tip: "Note that stool exams are useless in toxocariasis — serology with TES antigen is the key test.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "pa25", domain: "para-nematodes",
  q: "Discuss Enterobius vermicularis: life cycle, clinical significance and the cellophane tape test.",
  tags: ["Enterobius", "pinworm", "Graham test"],
  answer: `
    <h4>Life cycle</h4>
    <ol>
      <li>Embryonated eggs are ingested (or inhaled) — from fingers, bedding, clothing, dust.</li>
      <li>Larvae hatch in the small intestine; adults live in the <strong>caecum and appendix</strong>.</li>
      <li>Gravid females migrate out of the anus at <strong>night</strong> and lay eggs on the perianal skin (up to ~10,000 each), then die.</li>
      <li>Eggs become infective within <strong>4–6 hours</strong> — rapid self-reinfection (scratching → fingers → mouth: <strong>autoinfection</strong>) and household spread.</li>
      <li><strong>Retroinfection</strong>: larvae hatch on perianal skin and migrate back into the rectum.</li>
    </ol>
    <h4>Clinical significance</h4>
    <ul>
      <li>The most common helminth infection in many temperate countries and common in Filipino schoolchildren and institutions (day care, orphanages); the whole family is often infected.</li>
      <li><strong>Pruritus ani</strong> (especially at night), sleep disturbance, irritability, secondary bacterial infection.</li>
      <li>Ectopic migration in girls: vulvovaginitis, urinary tract infection, rarely salpingitis/peritoneal granulomas; appendicitis (worms found in appendix).</li>
      <li>Eosinophilia is usually <strong>absent</strong> (no tissue invasion).</li>
      <li>Associated with <em>Dientamoeba fragilis</em> transmission.</li>
    </ul>
    <h4>Cellophane tape (Graham / Scotch tape) test</h4>
    <ol>
      <li>Collect <strong>first thing in the morning</strong>, before bathing or defecation.</li>
      <li>Press clear (not frosted) adhesive tape, sticky side out over a tongue depressor, against the perianal folds.</li>
      <li>Stick the tape onto a glass slide (a drop of toluene or xylene can clear it) and examine at low power.</li>
      <li>Eggs: 50–60 × 20–30 µm, <strong>flattened on one side</strong>, colourless, contain a larva.</li>
      <li>Repeat on <strong>3 consecutive mornings</strong> (one test detects ~50%; three ~90%) — or up to 5–7 to exclude infection.</li>
    </ol>
    <p>Alternatives: commercial paddles (Swube), finding adult worms (~1 cm white "threads") around the anus at night. Stool examination detects eggs in only ~5–15%.</p>
    <h4>Treatment</h4>
    <p>Albendazole, mebendazole or pyrantel pamoate, <strong>repeated after 2 weeks</strong>; treat all household members; hygiene (nail cutting, hand washing, laundering bedding in hot water).</p>
  `,
  tip: "State the timing (morning, before bathing) and number (3 consecutive days) of tape tests.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "pa26", domain: "para-nematodes",
  q: "Describe trichinellosis: life cycle, clinical phases and laboratory diagnosis.",
  tags: ["Trichinella", "muscle larvae", "eosinophilia", "CK"],
  answer: `
    <h4>Life cycle</h4>
    <p><em>Trichinella spiralis</em> (and other species, e.g. <em>T. papuae</em> in PNG, <em>T. pseudospiralis</em>) has a <strong>direct life cycle in a single host</strong>, which acts as both definitive and intermediate host. Humans are infected by eating raw or undercooked meat — <strong>pork</strong> (domestic or wild boar), and bear, horse or crocodile in other regions — containing encysted larvae ("nurse cells").</p>
    <ol>
      <li>Larvae excyst in the stomach, invade the small intestinal mucosa, mature to adults in ~1 week.</li>
      <li>Females produce <strong>newborn larvae</strong> (viviparous) that enter lymphatics and blood.</li>
      <li>Larvae invade <strong>striated muscle</strong> (diaphragm, tongue, masseter, extraocular, intercostal, deltoid) and form <strong>nurse cell–larva complexes</strong> that may calcify; they stay viable for years.</li>
    </ol>
    <h4>Clinical phases</h4>
    <ul>
      <li><strong>Enteral phase</strong> (first week): nausea, diarrhoea, abdominal pain — often mild.</li>
      <li><strong>Parenteral (muscle) phase</strong> (weeks 2–6): fever, <strong>periorbital oedema</strong>, myalgia, muscle weakness, conjunctival and <strong>subungual splinter haemorrhages</strong>, rash. Complications: myocarditis (main cause of death), encephalitis, pneumonitis.</li>
      <li>Convalescent phase: muscle pain and fatigue may persist.</li>
    </ul>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li><strong>Marked eosinophilia</strong> (often &gt;1,000/µL, can be &gt;50% of WBC) — rises from the 2nd week.</li>
      <li><strong>Raised muscle enzymes</strong>: CK, LDH, aldolase, AST.</li>
      <li><strong>Serology</strong>: ELISA with <strong>ES (excretory–secretory) antigen</strong>, confirmed by Western blot; antibodies appear 2–5 weeks after infection (may be negative early — repeat).</li>
      <li><strong>Muscle biopsy</strong> (deltoid, near tendon insertion): compression or digestion — coiled larvae; histology.</li>
      <li>Examine leftover meat (artificial digestion with pepsin–HCl) — confirms outbreak source.</li>
    </ul>
    <h4>Treatment and prevention</h4>
    <p>Albendazole or mebendazole (most effective in the intestinal phase) + corticosteroids for severe symptoms. Prevention: cook pork to ≥71 °C; meat inspection; freezing kills <em>T. spiralis</em> (but not cold-resistant sylvatic species). Human trichinellosis is rarely reported in the Philippines but remains relevant with consumption of raw pork dishes and wild game.</p>
  `,
  tip: "Eosinophilia + raised CK + periorbital oedema after pork is the classic triad to mention.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "pa27", domain: "para-nematodes",
  q: "Discuss lymphatic filariasis in the Philippines: species, vectors, laboratory diagnosis and the national elimination programme.",
  tags: ["lymphatic filariasis", "Wuchereria", "Brugia malayi", "MDA", "Philippines"],
  answer: `
    <h4>Species and vectors in the Philippines</h4>
    <ul>
      <li><strong><em>Wuchereria bancrofti</em></strong> — the main species; <strong>sub-periodic</strong> form; principal vector <strong><em>Aedes poecilus</em></strong>, which breeds in water collected in <strong>leaf axils of abacá (Manila hemp) and banana plants</strong>. This is unusual — most bancroftian filariasis worldwide is transmitted by <em>Culex</em>.</li>
      <li><strong><em>Brugia malayi</em></strong> — in some areas (e.g. Palawan, Sorsogon, Agusan, Sulu); vectors <em>Mansonia</em> spp., breeding in swamps with aquatic plants (<em>Pistia</em>).</li>
    </ul>
    <p>Endemic in about 44–46 provinces historically, mostly in poor rural areas of the Bicol region, Eastern Visayas and Mindanao.</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li><strong>Night blood (thick) films</strong> stained with Giemsa or Delafield's haematoxylin — collected at the time of peak microfilaraemia (nocturnal periodic: 10 pm–2 am; sub-periodic forms may be detected in day samples too).
        <div class="table-wrap"><table>
          <tr><th></th><th><em>W. bancrofti</em></th><th><em>B. malayi</em></th></tr>
          <tr><td>Sheath</td><td>Present (stains faintly with Giemsa)</td><td>Present (stains <strong>pink</strong> with Giemsa)</td></tr>
          <tr><td>Body curves</td><td>Smooth, graceful</td><td>Kinked, angular</td></tr>
          <tr><td>Cephalic space</td><td>Short (length = width)</td><td>Long (2:1)</td></tr>
          <tr><td>Tail nuclei</td><td><strong>No nuclei</strong> in tail tip</td><td><strong>Two terminal nuclei</strong></td></tr>
        </table></div>
      </li>
      <li>Concentration: Knott's technique (2% formalin), membrane filtration (Nuclepore).</li>
      <li><strong>Antigen tests</strong> for <em>W. bancrofti</em> — circulating filarial antigen (CFA) by immunochromatographic card (ICT) or <strong>Filariasis Test Strip (FTS)</strong>; day-time finger-prick sample; used for mapping and Transmission Assessment Surveys (TAS).</li>
      <li><strong>Antibody tests</strong> (Brugia Rapid, Bm14) — for <em>Brugia</em> and post-MDA surveillance in children.</li>
      <li>Ultrasound "<strong>filarial dance sign</strong>" of living adults in lymphatics; PCR.</li>
    </ul>
    <h4>National Filariasis Elimination Program (DOH)</h4>
    <p>Part of the Global Programme to Eliminate LF (WHO). Two pillars: (1) <strong>interrupt transmission</strong> by annual <strong>mass drug administration</strong> — diethylcarbamazine (DEC) + albendazole for at least 5 rounds with ≥65% coverage, then <strong>TAS</strong> to stop MDA; (2) <strong>morbidity management and disability prevention</strong> (lymphoedema care, hydrocele surgery). Most endemic provinces have passed TAS and stopped MDA; triple-drug IDA (ivermectin + DEC + albendazole) is recommended by WHO to accelerate elimination in remaining foci.</p>
  `,
  tip: "Aedes poecilus breeding in abacá leaf axils is the distinctive Philippine fact — always include it.",
  sources: ["P4", "P9", "P6", "P3"]
},
{
  id: "pa28", domain: "para-nematodes",
  q: "Short notes: Anisakiasis and other fish-borne nematodes — how are they acquired and diagnosed?",
  tags: ["Anisakis", "fish-borne", "raw fish"],
  answer: `
    <h4>Anisakiasis</h4>
    <p>Caused by third-stage larvae of <em>Anisakis simplex</em> and <em>Pseudoterranova decipiens</em>, whose definitive hosts are marine mammals (whales, dolphins, seals). Humans are accidental hosts after eating <strong>raw, undercooked, salted or marinated marine fish or squid</strong> — sushi, sashimi, ceviche and, in the Philippines, <strong>kinilaw</strong> made with marine fish.</p>
    <ul>
      <li><strong>Gastric anisakiasis</strong>: severe epigastric pain, nausea, vomiting within hours (1–12 h) of eating — larva penetrating the gastric mucosa.</li>
      <li><strong>Intestinal anisakiasis</strong>: pain days later; may mimic appendicitis, Crohn disease or bowel obstruction (eosinophilic granuloma).</li>
      <li><strong>Allergic anisakiasis</strong>: urticaria, angioedema, anaphylaxis — even to dead larvae in cooked fish (heat-stable allergens).</li>
    </ul>
    <p><strong>Diagnosis</strong>: history of raw fish; <strong>endoscopy</strong> showing the larva (~2–3 cm, white) penetrating the mucosa — diagnostic and therapeutic (removal with forceps). Histology of resected tissue (eosinophilic granuloma with larval sections — Y-shaped lateral cords). Specific IgE (Ani s 1) for allergy. Eggs are not found in stool (larvae do not mature in humans).</p>
    <p><strong>Prevention</strong>: cooking (&gt;60 °C) or freezing (−20 °C for 7 days or −35 °C for 15 h) kills larvae; marinating in vinegar or salting does not reliably kill them.</p>
    <h4>Other fish-borne nematodes</h4>
    <ul>
      <li><em>Capillaria philippinensis</em> — freshwater/brackish small fish; intestinal capillariasis (see separate question).</li>
      <li><em>Gnathostoma spinigerum</em> — freshwater fish (snakehead); migratory swellings, CNS disease.</li>
    </ul>
  `,
  tip: "Mention that vinegar-marinated kinilaw does not reliably kill larvae — freezing or cooking does.",
  sources: ["P1", "P3", "P2"]
},
{
  id: "pa29", domain: "para-trematodes", star: true,
  q: "Discuss Schistosoma japonicum in the Philippines: life cycle, snail host, endemic areas, pathology and the national control and elimination programme.",
  tags: ["Schistosoma japonicum", "Oncomelania", "Philippines", "zoonosis"],
  answer: `
    <h4>Life cycle</h4>
    <ol>
      <li>Eggs passed in faeces hatch in fresh water → <strong>miracidia</strong>.</li>
      <li>Miracidia penetrate the amphibious snail <strong><em>Oncomelania hupensis quadrasi</em></strong> → sporocysts → <strong>cercariae</strong> (fork-tailed).</li>
      <li>Cercariae penetrate human skin during farming, fishing, bathing or washing in infected water → schistosomula migrate via lungs to the <strong>portal system</strong>.</li>
      <li>Adults pair and live in the <strong>superior and inferior mesenteric veins</strong>; each female lays many eggs (up to ~3,000/day — far more than other schistosomes).</li>
    </ol>
    <p><em>S. japonicum</em> is a true <strong>zoonosis</strong>: water buffaloes (carabao), cattle, dogs, pigs, rats and other mammals act as reservoirs — a key obstacle to elimination.</p>
    <h4>Endemic areas</h4>
    <p>About <strong>28 provinces in 12 regions</strong> (1,599 barangays per DOH data), mainly in the <strong>Visayas (Leyte, Samar, Bohol) and Mindanao</strong> (e.g. Lanao del Norte, Agusan, Davao, Surigao, Zamboanga), with foci in Luzon (Oriental Mindoro, Sorsogon, Cagayan Valley). Recent focal surveys found the highest prevalence in Oriental Mindoro, Lanao del Norte and Cagayan Valley.</p>
    <h4>Pathology</h4>
    <p>Disease is caused by <strong>eggs</strong>, not adult worms: eggs trapped in tissues provoke a CD4⁺ Th2-mediated <strong>granulomatous reaction</strong> and fibrosis.</p>
    <ul>
      <li>Acute (Katayama fever): fever, urticaria, eosinophilia.</li>
      <li>Intestinal: diarrhoea, blood in stool, colonic polyps.</li>
      <li><strong>Hepatosplenic</strong>: periportal (Symmers' <strong>"clay pipe-stem"</strong>) fibrosis → <strong>portal hypertension</strong>, splenomegaly, oesophageal varices, ascites — hepatocellular function is preserved early.</li>
      <li><strong>Cerebral schistosomiasis</strong> (seizures) — more frequent with <em>S. japonicum</em> because of its small eggs and high egg output.</li>
      <li>Children: anaemia, stunting, impaired cognition.</li>
    </ul>
    <h4>Control and elimination programme</h4>
    <p>The DOH <strong>National Schistosomiasis Control and Elimination Program</strong> uses: annual <strong>mass drug administration with praziquantel</strong> (40 mg/kg) for residents aged ≥5 years in endemic barangays; case finding and treatment; snail control (environmental modification, drainage, molluscicides such as niclosamide); WASH; health education; and veterinary treatment of animals (One Health). Despite decades of MDA, prevalence remains significant because of low MDA coverage (fear of side effects), animal reservoirs, poor sanitation, and limited intersectoral collaboration.</p>
  `,
  tip: "Name Oncomelania hupensis quadrasi and the carabao reservoir — and explain why zoonosis hinders elimination.",
  sources: ["P5", "P12", "P4", "P9"]
},
{
  id: "pa30", domain: "para-trematodes",
  q: "Compare the eggs of the human Schistosoma species and describe the laboratory methods for diagnosing schistosomiasis.",
  tags: ["schistosome eggs", "Kato-Katz", "CCA", "serology"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Species</th><th>Egg size</th><th>Spine</th><th>Specimen</th><th>Location of adults</th></tr>
      <tr><td><em>S. japonicum</em></td><td>70–100 × 55–65 µm (round–oval)</td><td><strong>Small, rudimentary lateral knob</strong> (often hidden)</td><td>Stool</td><td>Superior &amp; inferior mesenteric veins</td></tr>
      <tr><td><em>S. mekongi</em></td><td>Smaller (50–65 µm), similar</td><td>Small knob</td><td>Stool</td><td>Mesenteric veins</td></tr>
      <tr><td><em>S. mansoni</em></td><td>115–175 × 45–70 µm</td><td><strong>Prominent lateral spine</strong></td><td>Stool</td><td>Inferior mesenteric veins</td></tr>
      <tr><td><em>S. haematobium</em></td><td>110–170 × 40–70 µm</td><td><strong>Terminal spine</strong></td><td><strong>Urine</strong> (midday, terminal)</td><td>Vesical venous plexus</td></tr>
      <tr><td><em>S. intercalatum / guineensis</em></td><td>140–240 µm</td><td>Terminal spine; Ziehl–Neelsen positive</td><td>Stool</td><td>Mesenteric veins</td></tr>
    </table></div>
    <p>All schistosome eggs contain a <strong>mature miracidium</strong> when passed and are non-operculated.</p>
    <h4>Laboratory methods</h4>
    <ul>
      <li><strong>Kato–Katz thick smear</strong> (41.7 mg template): WHO-recommended for prevalence and intensity (eggs per gram × 24); multiple slides from several days improve sensitivity. Intensity for intestinal schistosomiasis: light 1–99, moderate 100–399, heavy ≥400 epg.</li>
      <li>Formalin–ether concentration (FECT); miracidial hatching test (viability).</li>
      <li><strong>Urine filtration</strong> (10 mL through a polycarbonate filter) for <em>S. haematobium</em>; haematuria dipsticks as a proxy.</li>
      <li><strong>Rectal snip / biopsy</strong> — eggs in tissue; useful in chronic low-output infection.</li>
      <li><strong>Antigen detection</strong>: circulating cathodic antigen (POC-CCA urine strip — good for <em>S. mansoni</em>, less validated for <em>S. japonicum</em>); circulating anodic antigen (CAA, very sensitive lab assay).</li>
      <li><strong>Serology</strong> (ELISA with soluble egg antigen, COPT — circumoval precipitin test, historically used in the Philippines): indicates exposure; cannot distinguish current from past infection — useful for travellers and low-prevalence surveillance.</li>
      <li><strong>PCR</strong> (stool, serum, urine) — high sensitivity for elimination settings; environmental DNA in water and snails.</li>
      <li>Ultrasound for periportal fibrosis staging (WHO Niamey protocol).</li>
    </ul>
    <p>As prevalence and intensity fall with MDA, Kato–Katz misses many light infections, so more sensitive methods are needed to confirm interruption of transmission.</p>
  `,
  tip: "The spine position table plus the Kato–Katz epg calculation (×24) are what examiners look for.",
  sources: ["P3", "P2", "P5", "P6"]
},
{
  id: "pa31", domain: "para-trematodes",
  q: "Discuss Paragonimus westermani: life cycle, clinical features and the differential diagnosis with pulmonary tuberculosis.",
  tags: ["Paragonimus", "lung fluke", "crabs", "TB mimic"],
  answer: `
    <h4>Life cycle</h4>
    <ol>
      <li>Operculated eggs are coughed up in sputum (or swallowed and passed in stool) → miracidia hatch in water.</li>
      <li>First intermediate host: freshwater snails (<em>Antemelania</em> spp. — formerly <em>Brotia</em> — in the Philippines).</li>
      <li>Second intermediate host: <strong>freshwater crabs</strong> (e.g. <em>Sundathelphusa philippina</em> — "kuyamba", "kagang") — metacercariae in gills and muscles.</li>
      <li>Humans are infected by eating raw, salted, pickled or partially cooked crabs (e.g. "kinagang"), or crab juice; also by eating raw wild boar meat (paratenic host).</li>
      <li>Metacercariae excyst in the duodenum, penetrate the gut wall, cross the peritoneal cavity and diaphragm into the pleural cavity and <strong>lungs</strong>, where adults live in pairs in fibrous cysts connected to bronchioles.</li>
    </ol>
    <p>Endemic in the Philippines, notably in <strong>Sorsogon</strong>, Camarines, Samar, Leyte, Mindoro, and parts of Mindanao. Other reservoir hosts: cats, dogs, wild carnivores.</p>
    <h4>Clinical features</h4>
    <p>Chronic cough with <strong>rusty-brown or blood-streaked sputum</strong> ("endemic haemoptysis"), chest pain, pleural effusion, pneumothorax; constitutional symptoms are usually mild. Ectopic disease: <strong>cerebral paragonimiasis</strong> (seizures, haemorrhage), abdominal and subcutaneous migratory nodules.</p>
    <h4>Differential diagnosis from pulmonary TB</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th>Paragonimiasis</th><th>Tuberculosis</th></tr>
      <tr><td>General condition</td><td>Usually good, little weight loss</td><td>Fever, night sweats, weight loss</td></tr>
      <tr><td>Sputum</td><td>Rusty brown; <strong>operculated eggs</strong> and <strong>Charcot–Leyden crystals</strong>; eosinophils</td><td>AFB on smear; positive Xpert/culture</td></tr>
      <tr><td>Blood</td><td>Eosinophilia, high IgE</td><td>No eosinophilia</td></tr>
      <tr><td>Chest X-ray</td><td>Nodules, ring shadows, cysts, effusion — often mid/lower zones</td><td>Upper lobe infiltrates, cavities</td></tr>
      <tr><td>History</td><td>Raw crab consumption</td><td>TB contact</td></tr>
    </table></div>
    <p>Misdiagnosis as TB (very common in the Philippines because of high TB prevalence) leads to unnecessary anti-TB therapy; both can coexist. <strong>Ziehl–Neelsen staining destroys the eggs</strong> — examine a wet sputum mount as well. Paragonimus eggs: 80–120 × 45–70 µm, golden-brown, <strong>operculated with a flattened operculum and "shoulders"</strong>, thickened abopercular end.</p>
    <h4>Diagnosis and treatment</h4>
    <p>Sputum (24-h) and stool microscopy; serology (ELISA, immunoblot) — important for ectopic and pleural disease; pleural fluid eosinophilia. Treatment: <strong>praziquantel</strong> 25 mg/kg three times daily for 2–3 days (triclabendazole alternative).</p>
  `,
  tip: "Point out that ZN staining destroys eggs, so a wet sputum mount must also be examined.",
  sources: ["P4", "P1", "P3", "P2"]
},
{
  id: "pa32", domain: "para-trematodes",
  q: "Discuss the liver flukes Clonorchis sinensis, Opisthorchis viverrini and Fasciola hepatica/gigantica, including their association with cholangiocarcinoma.",
  tags: ["liver flukes", "cholangiocarcinoma", "Fasciola", "Opisthorchis"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th></th><th><em>Clonorchis sinensis</em> / <em>Opisthorchis viverrini</em></th><th><em>Fasciola hepatica</em> / <em>F. gigantica</em></th></tr>
      <tr><td>Distribution</td><td>China, Korea, Vietnam (Clonorchis); Thailand, Laos, Cambodia (Opisthorchis)</td><td>Worldwide in sheep/cattle areas; <em>F. gigantica</em> in Asia and Africa — present in Philippine carabao and cattle</td></tr>
      <tr><td>Snail host</td><td>Freshwater snails (<em>Bithynia</em>, <em>Parafossarulus</em>)</td><td>Lymnaeid snails (<em>Lymnaea / Austropeplea</em>)</td></tr>
      <tr><td>Infective stage source</td><td>Metacercariae in raw or undercooked <strong>freshwater fish</strong> (cyprinids)</td><td>Metacercariae on <strong>aquatic plants</strong> (watercress, kangkong) or in water</td></tr>
      <tr><td>Migration</td><td>Excyst in duodenum, enter bile ducts via ampulla</td><td>Penetrate gut wall, cross peritoneum, burrow through <strong>liver capsule and parenchyma</strong> into bile ducts</td></tr>
      <tr><td>Clinical</td><td>Often asymptomatic; cholangitis, biliary stones, pancreatitis, <strong>cholangiocarcinoma</strong></td><td>Acute phase: fever, RUQ pain, hepatomegaly, marked eosinophilia; chronic: biliary obstruction, cholangitis</td></tr>
      <tr><td>Egg</td><td>Small (27–35 µm), operculated with <strong>shoulders</strong> and a small abopercular knob ("old-fashioned light bulb")</td><td>Large (130–150 µm), operculated, unembryonated, yellow-brown; resembles <em>Fasciolopsis buski</em></td></tr>
      <tr><td>Treatment</td><td>Praziquantel</td><td><strong>Triclabendazole</strong> (praziquantel is ineffective)</td></tr>
    </table></div>
    <h4>Association with cholangiocarcinoma</h4>
    <p>The IARC classifies <em>O. viverrini</em> and <em>C. sinensis</em> as <strong>Group 1 carcinogens</strong>. Mechanisms: chronic mechanical irritation and inflammation of the biliary epithelium, fluke excretory–secretory products (e.g. granulin) that stimulate cell proliferation, oxidative and nitrative DNA damage (nitric oxide), and co-factors such as nitrosamines in fermented fish. North-eastern Thailand has one of the highest cholangiocarcinoma rates in the world.</p>
    <h4>Diagnosis</h4>
    <p>Stool microscopy (eggs; repeated, concentrated; <em>Fasciola</em> egg output is low and absent in the acute phase), duodenal aspirate, <strong>serology</strong> (essential in acute fascioliasis — ES antigen ELISA), antigen detection in stool (coproantigen), PCR, ultrasound/ERCP (flukes in ducts). Beware "spurious" <em>Fasciola</em> eggs after eating infected animal liver — repeat on a liver-free diet.</p>
  `,
  tip: "Fasciola: triclabendazole, not praziquantel — a classic exam trap.",
  sources: ["P1", "P3", "P2"]
},
{
  id: "pa33", domain: "para-trematodes",
  q: "Discuss the intestinal flukes of importance in the Philippines: heterophyids, Echinostoma and Fasciolopsis buski. Why are heterophyid infections clinically significant?",
  tags: ["heterophyids", "Haplorchis", "Echinostoma", "intestinal flukes"],
  answer: `
    <h4>Heterophyids (<em>Heterophyes</em>, <em>Haplorchis</em>, <em>Metagonimus</em>, <em>Stellantchasmus</em>)</h4>
    <ul>
      <li>Minute flukes (1–2 mm). Life cycle: snail → <strong>metacercariae in freshwater and brackish-water fish</strong> (e.g. mullet, goby) → humans eat raw or undercooked fish.</li>
      <li>Philippine species include <em>Haplorchis taichui</em>, <em>H. pumilio</em>, <em>H. yokogawai</em> and others, reported from Mindanao (e.g. Lanao, Agusan), Luzon and Visayas.</li>
      <li><strong>Clinical significance</strong>: usually mild intestinal symptoms, BUT adults can embed deep in the intestinal mucosa and <strong>eggs can enter lymphatics and blood</strong> and lodge in the <strong>heart (myocardium, valves), brain and spinal cord</strong>, causing granulomas. Classic Philippine autopsy studies by Africa, de Leon and Garcia in the 1930s–40s linked heterophyid eggs to <strong>cardiac failure (heterophyid myocarditis)</strong> in Filipinos — the reason this group is emphasised in Philippine parasitology courses.</li>
      <li>Eggs resemble those of <em>Clonorchis/Opisthorchis</em> (small, operculated) — distinguishing them in stool is difficult; PCR or recovery of adults after purgation is needed.</li>
    </ul>
    <h4><em>Echinostoma</em> spp. (e.g. <em>Echinostoma ilocanum</em>)</h4>
    <ul>
      <li>Named for the <strong>collar of spines</strong> around the oral sucker. <em>E. ilocanum</em> was first described in prisoners from <strong>Ilocos</strong> in Manila (Garrison, 1908).</li>
      <li>Infection by eating raw or undercooked <strong>snails</strong> (e.g. <em>Pila luzonica</em> — "kuhol") and freshwater clams.</li>
      <li>Mild to moderate GI symptoms; heavy infections cause diarrhoea, abdominal pain, anaemia, oedema.</li>
      <li>Eggs: large, operculated, thin-shelled, with a slightly thickened abopercular end — similar to <em>Fasciola</em>/<em>Fasciolopsis</em> but smaller.</li>
    </ul>
    <h4><em>Fasciolopsis buski</em> (giant intestinal fluke)</h4>
    <p>The largest human fluke (up to 7.5 cm). Acquired by eating raw <strong>water plants</strong> (water caltrop, water chestnut — peeled with teeth) bearing metacercariae; pigs are reservoirs. Heavy infections cause ulceration, obstruction, oedema and ascites (allergic/protein-losing). Eggs are indistinguishable from <em>Fasciola</em>. Found mainly in China, India, Southeast Asia.</p>
    <p>Treatment for all: <strong>praziquantel</strong>. Prevention: cook fish, snails and water plants.</p>
  `,
  tip: "Explain the heterophyid egg embolism to the heart — the unique Philippine clinical point.",
  sources: ["P4", "P1", "P3"]
},
{
  id: "pa34", domain: "para-trematodes",
  q: "Describe the general life cycle of digenetic trematodes and compare it with that of schistosomes. Why are snails essential?",
  tags: ["trematode life cycle", "snails", "metacercaria"],
  answer: `
    <h4>General life cycle of hermaphroditic (digenetic) flukes</h4>
    <ol>
      <li><strong>Egg</strong> (operculated) passed in faeces, sputum or urine.</li>
      <li>Hatches in water → <strong>miracidium</strong> (ciliated) — or the egg is eaten by the snail.</li>
      <li><strong>First intermediate host — snail</strong>: sporocyst → <strong>redia</strong> → <strong>cercaria</strong> — <strong>asexual multiplication</strong> (one miracidium yields thousands of cercariae).</li>
      <li>Cercariae leave the snail and encyst as <strong>metacercariae</strong> on aquatic plants (<em>Fasciola</em>, <em>Fasciolopsis</em>) or in a <strong>second intermediate host</strong> — fish (<em>Clonorchis</em>, heterophyids), crabs/crayfish (<em>Paragonimus</em>), snails/clams (<em>Echinostoma</em>).</li>
      <li>The definitive host (human) eats the metacercariae → excystation → migration to the final site (intestine, bile ducts, lungs).</li>
      <li>Adults are <strong>hermaphroditic</strong> and self- or cross-fertilise.</li>
    </ol>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Most flukes</th><th>Schistosomes (blood flukes)</th></tr>
      <tr><td>Sexes</td><td>Hermaphrodite</td><td><strong>Separate sexes</strong>; female lies in the male's gynaecophoric canal</td></tr>
      <tr><td>Egg</td><td>Operculated</td><td><strong>Non-operculated</strong>, with spine/knob</td></tr>
      <tr><td>Infective stage</td><td>Metacercaria — <strong>ingested</strong></td><td><strong>Cercaria</strong> (fork-tailed) — <strong>penetrates skin</strong></td></tr>
      <tr><td>Redia stage</td><td>Present</td><td>Absent (two sporocyst generations)</td></tr>
      <tr><td>Second intermediate host</td><td>Often present</td><td>None</td></tr>
      <tr><td>Habitat</td><td>Intestine, bile ducts, lungs</td><td>Veins</td></tr>
      <tr><td>Treatment</td><td>Praziquantel (triclabendazole for <em>Fasciola</em>)</td><td>Praziquantel</td></tr>
    </table></div>
    <h4>Why snails are essential</h4>
    <p>The snail is the obligatory host for asexual amplification, and each fluke species has a <strong>narrow snail-host specificity</strong> (e.g. <em>S. japonicum</em> only in <em>Oncomelania</em>). Therefore, fluke distribution is determined by snail distribution, and snail control (environmental management, molluscicides, biological control) is a key intervention. Avoiding raw fish, crabs, snails and water plants interrupts transmission at the human end.</p>
  `,
  tip: "A clear comparison table of schistosomes vs other flukes is quick to write and high scoring.",
  sources: ["P1", "P4", "P2"]
},
{
  id: "pa35", domain: "para-trematodes",
  q: "Discuss the immunopathology of schistosomiasis and the concept of concomitant immunity.",
  tags: ["granuloma", "Th2", "concomitant immunity", "immunology"],
  answer: `
    <h4>Immune evasion by adult worms</h4>
    <p>Adult schistosomes live in blood vessels for years (average 3–10 years, some &gt;30) despite a strong immune response. Mechanisms: acquisition of <strong>host antigens</strong> (blood group glycolipids, MHC molecules) on the tegument — molecular disguise; a continuously renewed double-lipid-bilayer tegument; secretion of complement-inhibiting and protease molecules; and immune modulation (regulatory T cells, alternatively activated macrophages).</p>
    <h4>Concomitant immunity</h4>
    <p>The host develops immunity that kills <strong>new invading schistosomula</strong> (reinfection) while the <strong>existing adult worms survive</strong>. This limits worm burden and is thought to be mediated by IgE, eosinophils and antibody-dependent cell-mediated cytotoxicity directed at the larval tegument before it acquires host antigens. It explains the age–intensity curve: infection intensity peaks in adolescence and falls in adults despite continued exposure — partly due to slowly acquired resistance (IgE against tegumental antigens such as Sm22.6 correlates with resistance after treatment).</p>
    <h4>Granuloma formation</h4>
    <ol>
      <li>Eggs trapped in the liver (presinusoidal portal venules) and intestinal wall release <strong>soluble egg antigens (SEA)</strong>, e.g. omega-1 and IPSE/alpha-1.</li>
      <li>An initial Th1 response shifts to a dominant <strong>Th2 response</strong> (IL-4, IL-5, IL-13) at egg-laying.</li>
      <li>Granulomas of eosinophils, macrophages (alternatively activated), lymphocytes and fibroblasts surround eggs — protecting host tissue from egg toxins (hepatotoxicity).</li>
      <li><strong>IL-13</strong> drives collagen deposition by hepatic stellate cells → <strong>periportal (Symmers') fibrosis</strong> → presinusoidal portal hypertension.</li>
      <li>Over time immunomodulation (IL-10, Tregs) makes granulomas smaller.</li>
    </ol>
    <p>Disease severity depends on egg burden, duration, host genetics (e.g. IFN-γ and IL-13 polymorphisms), and co-infections (HBV, HCV — common in the Philippines — accelerate liver disease).</p>
    <h4>Implications</h4>
    <p>Vaccine research targets larval and tegumental antigens (Sm-p80, Sm-TSP-2) and transmission-blocking veterinary vaccines for water buffaloes (e.g. SjCTPI) for <em>S. japonicum</em>.</p>
  `,
  tip: "Define concomitant immunity in one clear sentence before explaining mechanisms.",
  sources: ["P1", "P5"]
},
{
  id: "pa36", domain: "para-trematodes",
  q: "Case: a farmer from Leyte presents with haematemesis, splenomegaly and a history of repeated wading in rice fields. Liver function tests are near normal. Discuss your diagnostic approach.",
  tags: ["case", "hepatosplenic schistosomiasis", "portal hypertension"],
  answer: `
    <h4>Clinical reasoning</h4>
    <p>Upper GI bleeding with splenomegaly suggests <strong>portal hypertension with bleeding oesophageal varices</strong>. Near-normal liver function in a person from an endemic area (Leyte is a classic <em>S. japonicum</em> province) and with freshwater exposure points to <strong>hepatosplenic schistosomiasis</strong> — <em>presinusoidal</em> portal hypertension from periportal fibrosis, in which hepatocellular function is preserved (unlike cirrhosis). Differentials: cirrhosis from chronic hepatitis B or C or alcohol (both common), portal vein thrombosis, mixed disease (schistosomiasis + HBV).</p>
    <h4>Investigations</h4>
    <ol>
      <li><strong>Resuscitation first</strong>: Hb, blood group and crossmatch, coagulation, platelets (hypersplenism).</li>
      <li><strong>Parasitological</strong>: stool Kato–Katz on 3 days (eggs may be scanty in chronic disease); formalin–ether concentration; rectal biopsy (eggs in tissue); serology (ELISA/COPT) or antigen detection (CAA); PCR.</li>
      <li><strong>Imaging</strong>: abdominal ultrasound — periportal fibrosis (WHO Niamey patterns: "pipe-stem" echogenic thickening around portal branches), splenomegaly, collateral vessels, normal liver surface (vs nodular cirrhosis); Doppler for portal vein patency.</li>
      <li><strong>Liver tests</strong>: albumin, bilirubin, INR, ALT/AST — usually normal; ALP/GGT may be mildly raised.</li>
      <li><strong>Viral hepatitis</strong>: HBsAg, anti-HCV — co-infection accelerates disease.</li>
      <li>Endoscopy — diagnosis and banding of varices.</li>
      <li>FBC: anaemia, thrombocytopenia, leukopenia (hypersplenism), eosinophilia (variable).</li>
    </ol>
    <h4>Management</h4>
    <p>Endoscopic variceal ligation, vasoactive drugs (octreotide/terlipressin), antibiotics, β-blockers for secondary prophylaxis. <strong>Praziquantel</strong> 60 mg/kg (in divided doses) to kill worms and stop further egg deposition — early fibrosis can regress. Splenectomy with devascularisation in selected cases. Screen family and community; report to the provincial schistosomiasis control programme.</p>
  `,
  tip: "Explain why liver function is preserved — presinusoidal block — that is what distinguishes this case.",
  sources: ["P5", "P4", "P1"]
}
);
