/* Parasitology — intestinal/urogenital protozoa, part B (applied and laboratory topics) */
window.QBANK.push(
{
  id: "pa64", domain: "para-intestinal", star: true,
  q: "A young man presents with bloody diarrhoea and tenesmus. How would you differentiate intestinal amoebiasis from bacillary dysentery in the laboratory?",
  tags: ["amoebic colitis", "bacillary dysentery", "stool microscopy", "differential diagnosis"],
  keypoints: ["bloody diarrhoea", "tenesmus", "toxic megacolon", "ingested red blood cells", "trichrome stain", "three stool specimens", "stool antigen", "PCR", "E. dispar", "stool culture", "Shigella", "ameboma", "Charcot–Leyden crystals", "faecal leukocytes", "Gal/GalNAc lectin"],
  answer: `
    <h4>The clinical problem</h4>
    <p>Both amoebic colitis and bacillary dysentery cause <strong>bloody diarrhoea</strong>, <strong>tenesmus</strong> and abdominal cramps, but management and public health responses differ. Amoebic disease needs a tissue amoebicide followed by a luminal agent; bacillary dysentery needs prompt antibiotics and notification. Severe amoebic colitis also carries a risk of <strong>toxic megacolon</strong> and perforation, so unnecessary colonoscopy or enemas are dangerous.</p>
    <h4>Stool clues</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Amoebic colitis</th><th>Bacillary dysentery</th></tr>
      <tr><td>Onset</td><td>Gradual over days to weeks</td><td>Acute, hours to days</td></tr>
      <tr><td>Stool</td><td>Blood and mucus mixed with stool; offensive</td><td>Small-volume, purulent, blood-streaked</td></tr>
      <tr><td><strong>Faecal leukocytes</strong></td><td>Few or absent</td><td>Abundant</td></tr>
      <tr><td>Eosinophils / <strong>Charcot–Leyden crystals</strong></td><td>Occasional</td><td>Uncommon</td></tr>
      <tr><td>Direct smear</td><td>Trophozoites with <strong>ingested red blood cells</strong></td><td>Numerous neutrophils and bacteria</td></tr>
    </table></div>
    <h4>Laboratory algorithm</h4>
    <ul>
      <li>Examine fresh stool within 30 minutes for motile trophozoites; use saline and iodine wet mounts and a <strong>trichrome stain</strong>.</li>
      <li>Send <strong>three stool specimens</strong> on alternate days because shedding is intermittent; concentration recovers cysts.</li>
      <li>Confirm <em>E. histolytica</em> with <strong>stool antigen</strong> (<strong>Gal/GalNAc lectin</strong>) or <strong>PCR</strong>; microscopy alone cannot exclude <em>E. dispar</em>.</li>
      <li>Perform <strong>stool culture</strong> on MacConkey, XLD and selective Campylobacter media for <em>Shigella</em>, <em>Salmonella</em> and <em>Campylobacter</em>; consider <em>C. difficile</em> testing after antibiotics.</li>
      <li>Check full blood count, electrolytes and renal function; image the abdomen if toxicity or an <strong>ameboma</strong> is suspected.</li>
    </ul>
    <h4>Interpretation</h4>
    <p>Finding <strong>Charcot–Leyden crystals</strong> with few neutrophils supports amoebiasis but is not specific. Antibiotics, antidiarrhoeals, barium and enemas reduce parasite yield. An ameboma can mimic carcinoma, so biopsies should be taken from the ulcer edge, not the base. A negative smear never excludes amoebiasis when the clinical picture is strong.</p>
  `,
  tip: "Contrast the inflammatory profile: amoebic stools have few leukocytes and ingested red cells; bacillary stools are neutrophil-rich.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa65", domain: "para-intestinal",
  q: "Describe the molecular pathogenesis of Entamoeba histolytica invasion and explain why only a minority of infections become invasive.",
  tags: ["Entamoeba histolytica", "virulence factors", "pathogenesis", "asymptomatic carriage"],
  keypoints: ["Gal/GalNAc lectin", "cysteine proteinases", "amoebapores", "trogocytosis", "mucin layer", "complement C3", "ingested red blood cells", "E. dispar", "asymptomatic carriage", "secretory IgA", "malnutrition", "host genetic susceptibility", "microbiome", "flask-shaped ulcers", "phagocytosis"],
  answer: `
    <h4>Adherence and mucus penetration</h4>
    <p>Invasive amoebiasis begins when trophozoites adhere to colonic mucin and epithelium through the <strong>Gal/GalNAc lectin</strong>, a surface complex that binds galactose and N-acetylgalactosamine. The lectin mediates contact-dependent cytolysis and helps the parasite resist mucus flow. The <strong>mucin layer</strong> is the first barrier; its thickness and glycosylation differ between people and may explain why some contacts never progress.</p>
    <h4>Enzymes, pores and trogocytosis</h4>
    <ul>
      <li><strong>Cysteine proteinases</strong> cleave mucin, immunoglobulin A, <strong>complement C3</strong> and extracellular matrix, weakening the epithelial barrier.</li>
      <li><strong>Amoebapores</strong> form pores in target membranes, causing osmotic lysis of neutrophils, lymphocytes and epithelial cells.</li>
      <li><strong>Trogocytosis</strong> — "nibbling" of living host cell fragments — provides nutrients and damages the epithelium without immediate lysis.</li>
      <li><strong>Phagocytosis</strong> of red cells and bacteria supplies iron and explains the diagnostic <strong>ingested red blood cells</strong>.</li>
    </ul>
    <h4>Why invasion is the exception</h4>
    <p>Only a minority of infections become invasive. <em>E. dispar</em> is morphologically identical but lacks or under-expresses key virulence genes and is essentially non-invasive. <strong>Asymptomatic carriage</strong> is therefore the usual outcome of <em>E. histolytica</em> infection too. Host factors — <strong>secretory IgA</strong>, cell-mediated immunity, <strong>malnutrition</strong>, alcohol, corticosteroids and <strong>host genetic susceptibility</strong> — shift the balance. The <strong>microbiome</strong> also modifies mucus and inflammation, and parasite genetic variation affects virulence. The result is <strong>flask-shaped ulcers</strong> in the colon and, after portal spread, liver abscess.</p>
    <h4>Clinical implication</h4>
    <p>Because carriage is common, a positive microscopy result does not prove disease. Antigen testing or PCR distinguishes <em>E. histolytica</em> from <em>E. dispar</em>, and treatment should be reserved for symptomatic or serologically supported invasive disease. The same virulence machinery explains why amoebic colitis can progress to toxic megacolon and perforation.</p>
  `,
  tip: "Link each virulence factor to a visible lesion: lectin to adherence, proteinases to ulcer formation, amoebapores to cytolysis.",
  sources: ["P1", "P2", "P4"]
},
{
  id: "pa66", domain: "para-intestinal", star: true,
  q: "Compare amoebic and pyogenic liver abscess and outline the laboratory and imaging work-up that distinguishes them.",
  tags: ["amoebic liver abscess", "pyogenic abscess", "serology", "imaging"],
  keypoints: ["amoebic liver abscess", "pyogenic liver abscess", "hydatid cyst", "no eosinophilia", "blood culture", "amoebic serology", "anchovy sauce", "ultrasound", "alkaline phosphatase", "luminal agent", "percutaneous drainage", "stool antigen"],
  answer: `
    <h4>Why the distinction matters</h4>
    <p>An <strong>amoebic liver abscess</strong> responds to metronidazole and a luminal agent, whereas a <strong>pyogenic liver abscess</strong> needs antibiotics and drainage. Aspirating a <strong>hydatid cyst</strong> or a vascular tumour by mistake can be catastrophic, so the work-up must be sequential.</p>
    <h4>Clinical and laboratory comparison</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Amoebic abscess</th><th>Pyogenic abscess</th></tr>
      <tr><td>Typical patient</td><td>Young adult man; endemic exposure or travel</td><td>Older adult; biliary disease, diabetes, surgery</td></tr>
      <tr><td>Lesion</td><td>Usually single, right lobe</td><td>Often multiple, either lobe</td></tr>
      <tr><td>White cell count</td><td>Mild–moderate rise; <strong>no eosinophilia</strong></td><td>Marked neutrophilia</td></tr>
      <tr><td><strong>Blood culture</strong></td><td>Usually sterile</td><td>Often positive (Gram-negative bacilli, anaerobes)</td></tr>
      <tr><td>Serology</td><td><strong>Amoebic serology</strong> positive in most</td><td>Negative</td></tr>
      <tr><td>Aspirate</td><td>Sterile "<strong>anchovy sauce</strong>" pus; trophozoites at the wall</td><td>Frank pus with neutrophils and organisms</td></tr>
    </table></div>
    <h4>Diagnostic sequence</h4>
    <ul>
      <li><strong>Ultrasound</strong> or CT first: a hypoechoic amoebic lesion versus a complex pyogenic collection; also excludes hydatid cyst and tumour.</li>
      <li><strong>Amoebic serology</strong> by ELISA or IHA is the best non-invasive test; a negative result makes the diagnosis unlikely.</li>
      <li><strong>Stool antigen</strong> or PCR and stool microscopy; diarrhoea is absent in many patients.</li>
      <li>Blood cultures, liver enzymes and bilirubin; <strong>alkaline phosphatase</strong> is often raised.</li>
      <li>Aspirate only if rupture is imminent, the diagnosis is doubtful, or there is no response; send pus for culture, microscopy and PCR.</li>
    </ul>
    <h4>Management principles</h4>
    <p>Amoebic abscess: metronidazole or tinidazole, then a <strong>luminal agent</strong>; drainage for large or left-lobe lesions. Pyogenic abscess: prolonged antibiotics guided by culture plus <strong>percutaneous drainage</strong>. In endemic areas, serology may remain positive for years, so a positive result does not always prove that the current lesion is amoebic. Follow-up imaging is needed because resolution is slow.</p>
  `,
  tip: "Serology is the pivot: strongly positive in amoebic abscess, negative in pyogenic abscess.",
  sources: ["P1", "P3", "P2"]
},
{
  id: "pa67", domain: "para-intestinal",
  q: "Discuss giardiasis as a waterborne and foodborne disease: outbreak investigation, disinfection and prevention.",
  tags: ["Giardia", "waterborne outbreak", "disinfection", "prevention"],
  keypoints: ["cysts", "infectious dose", "chlorine-resistant", "day-care centres", "epidemic curve", "case-control study", "stool antigen", "PCR", "assemblage A", "assemblage B", "boil water advisory", "filtration", "UV disinfection", "hand hygiene", "watershed protection", "IgA deficiency"],
  answer: `
    <h4>Transmission and outbreak setting</h4>
    <p>Giardiasis is acquired by ingesting <strong>cysts</strong> in water or food. The <strong>infectious dose</strong> is low — as few as 10–100 cysts — and cysts survive for weeks in cool water. They are <strong>chlorine-resistant</strong> at routine residual concentrations, so municipal supplies that meet bacterial standards can still transmit infection. Outbreaks occur in <strong>day-care centres</strong>, among hikers and campers, from contaminated wells, and in recreational water venues.</p>
    <h4>Investigating an outbreak</h4>
    <ul>
      <li>Construct an <strong>epidemic curve</strong> and a case definition; interview cases about water, food, travel, swimming and childcare.</li>
      <li>Perform a <strong>case-control study</strong> or cohort study to identify the vehicle.</li>
      <li>Test water for chlorine residual, turbidity and faecal indicators; inspect for cross-connections, backflow and sewage intrusion.</li>
      <li>Collect stool for <strong>stool antigen</strong>, microscopy or <strong>PCR</strong>; genotype to <strong>assemblage A</strong> or <strong>assemblage B</strong> where available.</li>
      <li>Sample filters and biofilms, because cysts concentrate in particulate matter.</li>
    </ul>
    <h4>Control</h4>
    <p>Issue a <strong>boil water advisory</strong>, provide alternative safe water, and repair the source. <strong>Filtration</strong> and <strong>UV disinfection</strong> are more reliable than chlorination alone; boiling for one minute is effective. In childcare, enforce <strong>hand hygiene</strong>, nappy-changing protocols and exclusion of symptomatic children until treated. Food handlers should be excluded while symptomatic.</p>
    <h4>Prevention</h4>
    <p><strong>Watershed protection</strong>, adequate treatment barriers, backflow prevention and routine monitoring reduce risk. Travellers should avoid untreated water and ice. Because some infections are zoonotic, control of animal reservoirs and safe manure management matter. Secretory IgA and gastric acid are host defences, so <strong>IgA deficiency</strong> and achlorhydria predispose to chronic infection. Treatment with a nitroimidazole or nitazoxanide, plus household assessment, shortens shedding.</p>
  `,
  tip: "Chlorine resistance is the key water-treatment point; filtration and UV are the reliable barriers.",
  sources: ["P2", "P3", "P6"]
},
{
  id: "pa68", domain: "para-intestinal",
  q: "Cryptosporidium in water supplies: why chlorination fails, how outbreaks are investigated, and how the laboratory detects oocysts.",
  tags: ["Cryptosporidium", "water treatment", "outbreak", "modified acid-fast"],
  keypoints: ["immediately infective", "infectious dose", "chlorine", "C. hominis", "C. parvum", "epidemic curve", "case-control study", "modified acid-fast stain", "direct fluorescent antibody", "PCR", "filtration", "UV disinfection", "antiretroviral therapy", "CD4"],
  answer: `
    <h4>The oocyst</h4>
    <p><em>Cryptosporidium</em> produces round oocysts 4–6 µm in diameter with a thick wall. They are <strong>immediately infective</strong> when passed, unlike <em>Cyclospora</em>, and the <strong>infectious dose</strong> is low. The oocyst wall resists <strong>chlorine</strong> at concentrations used in drinking water and swimming pools, so conventional disinfection does not reliably inactivate it. Routine bacterial indicators do not predict their presence.</p>
    <h4>Waterborne outbreaks</h4>
    <p><em>C. hominis</em> is mainly anthroponotic; <em>C. parvum</em> has a cattle reservoir and is zoonotic. Outbreaks follow contamination of municipal supplies, wells, springs, pools and splash parks, often from a single point source. Investigation requires an <strong>epidemic curve</strong>, a <strong>case-control study</strong>, mapping of the distribution system, chlorine and turbidity records, and detection of oocysts in water — a technically demanding and insensitive step.</p>
    <h4>Laboratory detection</h4>
    <ul>
      <li><strong>Modified acid-fast stain</strong> of concentrated stool: pink-red oocysts on a blue-green background.</li>
      <li><strong>Direct fluorescent antibody</strong> (DFA) and enzyme immunoassay; DFA is sensitive and specific.</li>
      <li><strong>PCR</strong> and multiplex gastrointestinal panels; genotyping separates <em>C. hominis</em> from <em>C. parvum</em>.</li>
      <li>Water testing uses filtration and immunofluorescence microscopy; results arrive after the exposure.</li>
    </ul>
    <h4>Control</h4>
    <p><strong>Filtration</strong>, <strong>UV disinfection</strong>, ozone and boiling are effective; chlorine alone is not. Advise people with diarrhoea not to swim for two weeks after symptoms resolve. Water utilities should set oocyst-specific treatment goals and monitor turbidity continuously, because filtration failures precede many outbreaks. In HIV, <strong>CD4</strong> &lt;100 predicts severe chronic disease; <strong>antiretroviral therapy</strong> is the main intervention, with nitazoxanide for immunocompetent patients. Safe water, hand hygiene and exclusion of infected food handlers complete control.</p>
  `,
  tip: "State the paradox clearly: the water can be bacteriologically safe and still transmit cryptosporidiosis.",
  sources: ["P3", "P2", "P6"]
},
{
  id: "pa69", domain: "para-intestinal",
  q: "Discuss Cyclospora cayetanensis: foodborne outbreaks, clinical features, laboratory diagnosis and management.",
  tags: ["Cyclospora", "foodborne", "autofluorescence", "TMP-SMX"],
  keypoints: ["unsporulated", "prolonged relapsing diarrhoea", "fresh produce", "traceback", "stool O&P", "modified acid-fast stain", "variable", "UV autofluorescence", "PCR", "TMP-SMX", "outbreak surveillance"],
  answer: `
    <h4>The organism</h4>
    <p><em>Cyclospora cayetanensis</em> is a coccidian that infects the small intestine. Oocysts measure 8–10 µm, are round, and are passed <strong>unsporulated</strong>; they require days to weeks in the environment before becoming infective. This delay explains why direct person-to-person spread is uncommon and why contaminated produce and water are the main vehicles.</p>
    <h4>Clinical features</h4>
    <p>Infection causes <strong>prolonged relapsing diarrhoea</strong>, anorexia, bloating, fatigue and weight loss. Fever is uncommon. In immunocompetent hosts illness may last weeks; in HIV and other immunosuppressed patients it is severe and persistent. The differential includes <em>Cryptosporidium</em>, <em>Cystoisospora</em>, <em>Giardia</em> and microsporidia.</p>
    <h4>Foodborne outbreaks</h4>
    <p>Outbreaks have been traced to imported <strong>fresh produce</strong> — raspberries, blackberries, basil, lettuce, cilantro and snow peas — and to contaminated water. Global food supply chains mean cases appear far from the growing area. Investigation uses <strong>traceback</strong>, case interviews, product sampling and genotyping. Washing produce reduces but does not eliminate oocysts.</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li>Routine <strong>stool O&amp;P</strong> often misses the parasite; the request must mention suspected coccidia.</li>
      <li><strong>Modified acid-fast stain</strong>: staining is <strong>variable</strong>, from ghost outlines to deep red.</li>
      <li><strong>UV autofluorescence</strong>: oocysts glow blue-green — a rapid screening method.</li>
      <li>Safranin stain, <strong>PCR</strong> and multiplex panels provide confirmation.</li>
      <li>Concentration and repeated specimens increase yield.</li>
    </ul>
    <h4>Management and prevention</h4>
    <p><strong>TMP-SMX</strong> is the treatment of choice; immunocompromised patients need longer therapy and sometimes maintenance. Supportive hydration and nutritional support matter. Prevention relies on safe water, careful produce handling, improved irrigation and sanitation, and <strong>outbreak surveillance</strong>. No vaccine is available. Relapse after apparently successful treatment occurs in some patients, especially when immunity is impaired.</p>
  `,
  tip: "Cyclospora is the coccidian that autofluoresces and stains variably — say both.",
  sources: ["P3", "P2", "P4"]
},
{
  id: "pa70", domain: "para-intestinal",
  q: "Cystoisospora belli in immunocompromised patients: why is eosinophilia a useful clue, and how is the infection diagnosed and managed?",
  tags: ["Cystoisospora", "eosinophilia", "HIV", "coccidia"],
  keypoints: ["faecal–oral", "chronic watery diarrhoea", "peripheral eosinophilia", "Dientamoeba fragilis", "unsporulated", "modified acid-fast stain", "stool O&P", "PCR", "TMP-SMX", "antiretroviral therapy", "CD4"],
  answer: `
    <h4>Why it matters in HIV</h4>
    <p><em>Cystoisospora belli</em> is an obligate intracellular coccidian of the small intestine. It is human-only and transmitted by <strong>faecal–oral</strong> spread of oocysts. In advanced HIV — especially <strong>CD4</strong> &lt;200 — it causes <strong>chronic watery diarrhoea</strong>, malabsorption, weight loss and wasting. It is one of the opportunistic protozoa that should be sought when a patient has persistent diarrhoea and a low CD4 count.</p>
    <h4>The eosinophilia clue</h4>
    <p>Unlike most protozoa, <em>Cystoisospora</em> often produces <strong>peripheral eosinophilia</strong>. The mechanism is not fully established but is thought to reflect tissue invasion and a Th2-type response. Eosinophilia is never diagnostic on its own, but in a patient with AIDS and diarrhoea it should prompt a search for coccidia and for coexisting helminths. <strong>Dientamoeba fragilis</strong> is another protozoan exception.</p>
    <h4>Laboratory diagnosis</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th><em>Cystoisospora belli</em></th></tr>
      <tr><td>Oocyst</td><td>20–33 × 10–19 µm, ellipsoid, transparent</td></tr>
      <tr><td>Stage passed</td><td><strong>Unsporulated</strong>, usually with one or two sporoblasts</td></tr>
      <tr><td>Acid-fast stain</td><td>Red, often variable</td></tr>
      <tr><td>Autofluorescence</td><td>Yes, blue-green under UV</td></tr>
    </table></div>
    <ul>
      <li>Examine concentrated stool with <strong>modified acid-fast stain</strong> and UV microscopy.</li>
      <li>Routine <strong>stool O&amp;P</strong> may miss it; repeat specimens are needed.</li>
      <li><strong>PCR</strong> is increasingly used; duodenal biopsy may be required.</li>
      <li>Because the oocysts are transparent, they are easily overlooked on a saline wet mount; iodine may help but alters morphology.</li>
      <li>Check electrolytes, albumin and CD4 count; exclude other opportunistic infections.</li>
    </ul>
    <h4>Treatment</h4>
    <p><strong>TMP-SMX</strong> is effective; immunocompromised patients need a longer course and maintenance prophylaxis. <strong>Antiretroviral therapy</strong> and immune reconstitution are essential. Prevention requires safe water, sanitation and food hygiene. In sulfa allergy, management is difficult and specialist advice is needed.</p>
  `,
  tip: "Eosinophilia plus AIDS diarrhoea should make you think of Cystoisospora before the helminths.",
  sources: ["P3", "P2"]
},
{
  id: "pa71", domain: "para-intestinal",
  q: "Blastocystis: describe its morphology and subtypes, and explain how the laboratory should report it and when treatment is justified.",
  tags: ["Blastocystis", "subtypes", "reporting", "IBS"],
  keypoints: ["central body (vacuolar) form", "granular", "amoeboid", "ST1–ST9", "ST3", "irritable bowel syndrome", "pathogenicity remains debated", "trichrome stain", "culture", "PCR", "metronidazole"],
  answer: `
    <h4>Morphology and epidemiology</h4>
    <p><em>Blastocystis</em> is one of the most common intestinal protists worldwide; prevalence exceeds 30–50% in some tropical surveys, including the Philippines. The <strong>central body (vacuolar) form</strong> is 5–40 µm with a large central vacuole and peripheral nuclei; <strong>granular</strong>, <strong>amoeboid</strong> and cyst forms also occur. It is anaerobic and spreads by the faecal–oral route, often through contaminated water and food.</p>
    <h4>Subtypes and clinical meaning</h4>
    <p>At least 17 subtypes exist; <strong>ST1–ST9</strong> are found in humans, with <strong>ST3</strong> most prevalent in many studies. Some subtypes are zoonotic. Associations with <strong>irritable bowel syndrome</strong>, urticaria and diarrhoea are reported, but healthy carriers are equally common, so <strong>pathogenicity remains debated</strong>. Subtype alone does not prove disease. The older label <em>Blastocystis hominis</em> is best replaced by <em>Blastocystis</em> sp., because the group is genetically diverse.</p>
    <h4>Laboratory reporting</h4>
    <ul>
      <li>Wet mount and <strong>trichrome stain</strong>; report semiquantitatively rather than as simply positive or negative.</li>
      <li><strong>Culture</strong> and <strong>PCR</strong> are available; PCR with subtyping is mainly for research.</li>
      <li>Examine several fields before calling it a pathogen; exclude <em>Giardia</em>, coccidia, microsporidia and bacterial causes.</li>
      <li>Do not report yeast or artefacts as <em>Blastocystis</em>; iodine and trichrome help.</li>
    </ul>
    <h4>When to treat</h4>
    <p>Treat only if the patient is symptomatic and no other cause has been found. <strong>Metronidazole</strong>, paromomycin or nitazoxanide are used, but responses are inconsistent. Reassess after treatment; persisting symptoms should prompt a search for another diagnosis. In asymptomatic patients, no treatment is justified, and an alarming report can cause harm by distracting from a treatable cause.</p>
  `,
  tip: "Say 'report, do not automatically treat' — the laboratory's main job is to prevent overdiagnosis.",
  sources: ["P2", "P3"]
},
{
  id: "pa72", domain: "para-intestinal",
  q: "Discuss the commensal intestinal protozoa: how are they identified, and why does their presence matter in a laboratory report?",
  tags: ["commensal protozoa", "Entamoeba coli", "reporting", "faecal contamination"],
  keypoints: ["faecally contaminated", "Entamoeba coli", "eight nuclei", "no peripheral chromatin", "large glycogen vacuole", "lemon-shaped cyst", "full-length undulating membrane", "E. hartmanni", "calibrated micrometer", "sanitation", "water quality"],
  answer: `
    <h4>Why commensals matter</h4>
    <p>Most protozoa seen in stool are non-pathogenic. Their presence shows that the patient has ingested <strong>faecally contaminated</strong> food or water, so the report should trigger a search for true pathogens rather than treatment. They are also a common source of misdiagnosis and unnecessary drugs.</p>
    <h4>Identification</h4>
    <div class="table-wrap"><table>
      <tr><th>Organism</th><th>Key feature</th></tr>
      <tr><td><em>Entamoeba coli</em></td><td>Mature cyst with <strong>eight nuclei</strong>; coarse chromatin; splinter-shaped chromatoid bodies</td></tr>
      <tr><td><em>Endolimax nana</em></td><td>Small cyst with four nuclei; <strong>no peripheral chromatin</strong>; blot-like karyosome</td></tr>
      <tr><td><em>Iodamoeba bütschlii</em></td><td>Single nucleus; <strong>large glycogen vacuole</strong> that stains with iodine</td></tr>
      <tr><td><em>E. hartmanni</em></td><td>Morphology like <em>E. histolytica</em> but cyst &lt;10 µm</td></tr>
      <tr><td><em>Chilomastix mesnili</em></td><td><strong>Lemon-shaped cyst</strong> with an anterior knob; spiral groove</td></tr>
      <tr><td><em>Pentatrichomonas hominis</em></td><td>Flagellate with a <strong>full-length undulating membrane</strong>; no cyst</td></tr>
    </table></div>
    <h4>Reporting and pitfalls</h4>
    <ul>
      <li>Use a <strong>calibrated micrometer</strong>; size separates <em>E. hartmanni</em> from <em>E. histolytica</em>.</li>
      <li>Do not call <em>E. coli</em> "<em>E. histolytica</em>"; the nucleus and cyst nuclei differ.</li>
      <li>Non-pathogenic flagellates indicate faecal exposure; <em>T. tenax</em> indicates poor oral hygiene.</li>
      <li>No treatment is indicated; investigate for <em>Salmonella</em>, <em>Shigella</em>, <em>Giardia</em> and amoebiasis if symptoms persist.</li>
    </ul>
    <h4>Public health value</h4>
    <p>High rates of commensals in a community signal inadequate <strong>sanitation</strong> and poor <strong>water quality</strong>. In a laboratory, reporting them accurately protects patients from unnecessary metronidazole and helps epidemiology. They are also useful teaching organisms for recognising nuclei, chromatoid bodies and cysts, and they remind the microscopist to examine the whole field rather than stopping at the first organism seen. The presence of several commensal species suggests repeated faecal exposure rather than a single lapse in hygiene.</p>
  `,
  tip: "A commensal is an epidemiological clue, not a diagnosis — say that explicitly.",
  sources: ["P1", "P2", "P8"]
},
{
  id: "pa73", domain: "para-intestinal",
  q: "Design a One Health control programme for Balantidium coli in a Philippine barangay with backyard piggeries.",
  tags: ["Balantidium", "One Health", "pigs", "Philippines"],
  keypoints: ["pigs", "pig pens", "pig manure", "safe water", "hand hygiene", "barangay health workers", "zoonotic", "surveillance", "balantidial dysentery", "One Health", "cysts", "tetracycline"],
  answer: `
    <h4>The parasite and the setting</h4>
    <p><em>Balantidium coli</em> is the largest protozoan parasite of humans and the only ciliate. Trophozoites are 50–200 µm, covered with cilia, with a kidney-shaped macronucleus. <strong>Pigs</strong> are the main reservoir; human infection clusters in backyard pig-raising communities where pig faeces contaminate water and food.</p>
    <h4>A One Health control programme</h4>
    <ul>
      <li><strong>Separate pig pens</strong> from wells, streams and household compounds; roof and floor them to contain waste.</li>
      <li>Compost or treat <strong>pig manure</strong> before use; prevent runoff into surface water.</li>
      <li>Provide <strong>safe water</strong>, latrines and handwashing facilities; promote <strong>hand hygiene</strong> after animal contact.</li>
      <li>Educate households about not using raw pig manure on vegetables and about boiling drinking water.</li>
      <li>Train <strong>barangay health workers</strong> and laboratory staff to recognise dysentery and request stool examination.</li>
      <li>Engage veterinary and agricultural services: treat affected pigs, improve husbandry and monitor <strong>zoonotic</strong> risk.</li>
      <li>Strengthen <strong>surveillance</strong> of human cases and link them to pig ownership and water sources.</li>
    </ul>
    <h4>Clinical and laboratory aspects</h4>
    <p>Most human infections are asymptomatic. Invasive disease causes <strong>balantidial dysentery</strong> with bloody, mucoid stools and colonic ulcers. Diagnosis is by fresh stool wet mount — trophozoites are large and motile — or by biopsy of ulcer margins. <strong>Cysts</strong> are the infective stage. Treatment is <strong>tetracycline</strong> or metronidazole; rehydration and nutritional support are important.</p>
    <h4>Evaluation</h4>
    <p>Monitor stool positivity in pigs and people, water contamination and case counts. Include pigs, water sources and human cases in the same surveillance database so that clusters are recognised early. A successful programme reduces both animal and human infection and is an example of <strong>One Health</strong> action at community level.</p>
  `,
  tip: "A control answer needs animal, water, human and surveillance components — not just drug treatment.",
  sources: ["P1", "P4", "P6"]
},
{
  id: "pa74", domain: "para-intestinal",
  q: "Discuss Trichomonas vaginalis in pregnancy and HIV: clinical significance, diagnosis and management.",
  tags: ["Trichomonas", "pregnancy", "HIV", "STI"],
  keypoints: ["no cyst stage", "preterm birth", "low birth weight", "HIV acquisition", "HIV transmission", "pelvic inflammatory disease", "strawberry cervix", "NAAT", "treat partners", "nitroimidazole resistance", "STI screening", "antiretroviral therapy"],
  answer: `
    <h4>Why pregnancy and HIV change the stakes</h4>
    <p><em>Trichomonas vaginalis</em> is the most common non-viral sexually transmitted infection. It infects squamous epithelium of the vagina, urethra and prostate and exists only as a trophozoite — there is <strong>no cyst stage</strong>. Because trichomonads do not form cysts, fomite transmission is limited and sexual contact is the dominant route. In pregnancy it is associated with <strong>preterm birth</strong>, <strong>low birth weight</strong> and premature rupture of membranes. In HIV it increases <strong>HIV acquisition</strong> and <strong>HIV transmission</strong>, and it is associated with <strong>pelvic inflammatory disease</strong>.</p>
    <h4>Clinical presentation</h4>
    <ul>
      <li>Women: frothy, yellow-green discharge, vulvar irritation, dysuria and dyspareunia; <strong>strawberry cervix</strong> in a minority.</li>
      <li>Men: usually asymptomatic, sometimes urethritis or prostatitis; the prostate can act as a reservoir.</li>
      <li>Many infections are asymptomatic, so screening is needed in high-prevalence settings.</li>
    </ul>
    <h4>Diagnosis</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Comment</th></tr>
      <tr><td>Wet mount</td><td>Rapid and cheap; sensitivity only about 50–60%; motile trophozoites</td></tr>
      <tr><td>Culture</td><td>More sensitive; takes days</td></tr>
      <tr><td><strong>NAAT</strong></td><td>Most sensitive; preferred in pregnancy and for men</td></tr>
      <tr><td>Antigen test</td><td>Rapid point-of-care option</td></tr>
    </table></div>
    <h4>Management</h4>
    <p>Treat with metronidazole or tinidazole, and <strong>treat partners</strong>. Advise avoidance of alcohol during metronidazole. In pregnancy, treatment relieves symptoms and may reduce adverse outcomes; screen and treat early. In HIV, integrate testing with <strong>STI screening</strong> and <strong>antiretroviral therapy</strong>. Rescreen women within three months because reinfection is common. <strong>Nitroimidazole resistance</strong> is increasing; higher doses or susceptibility testing may be needed.</p>
    <h4>Prevention</h4>
    <p>Condom use, partner notification and integration with reproductive health and HIV services reduce transmission. Partner notification is therefore a core control measure. No vaccine is available.</p>
  `,
  tip: "NAAT is the test of choice; wet mount misses too many infections in both pregnancy and HIV care.",
  sources: ["P3", "P2", "P9"]
},
{
  id: "pa75", domain: "para-intestinal",
  q: "Discuss microsporidia in transplant recipients and HIV patients: species, diagnosis and management.",
  tags: ["microsporidia", "transplant", "HIV", "diagnosis"],
  keypoints: ["polar tubule", "Enterocytozoon bieneusi", "Encephalitozoon intestinalis", "HIV", "transplant recipients", "modified trichrome", "calcofluor white", "electron microscopy", "PCR", "albendazole", "fumagillin", "antiretroviral therapy"],
  answer: `
    <h4>The organisms</h4>
    <p>Microsporidia are obligate intracellular, spore-forming organisms now classified with fungi. Spores are 1–4 µm and contain a <strong>polar tubule</strong> that everts to inject sporoplasm into host cells. <em>Enterocytozoon bieneusi</em> and <em>Encephalitozoon intestinalis</em> cause intestinal disease; <em>E. cuniculi</em> and <em>E. hellem</em> cause disseminated and ocular infection. Infection follows ingestion or inhalation of spores; person-to-person spread is not a major route. Spores are environmentally hardy and resist many disinfectants.</p>
    <h4>Transplant and HIV</h4>
    <p>In <strong>HIV</strong> with CD4 &lt;100, <em>E. bieneusi</em> causes chronic diarrhoea, malabsorption and wasting, and may cause cholangitis. <strong>Transplant recipients</strong> on immunosuppressants develop diarrhoea, renal or biliary infection and disseminated disease. The risk is greatest with prolonged neutropenia and intensified immunosuppression.</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li><strong>Modified trichrome</strong> (Weber) stain: oval pink-red spores with a belt-like stripe; oil immersion is needed.</li>
      <li><strong>Calcofluor white</strong> fluorescence: sensitive but not specific; yeasts also fluoresce.</li>
      <li><strong>Electron microscopy</strong>: reference method for species identification by polar tubule coils.</li>
      <li><strong>PCR</strong>: sensitive and species-specific; increasingly preferred.</li>
      <li>Biopsy of small intestine, urine for <em>Encephalitozoon</em>, corneal scrapings for ocular disease.</li>
      <li>Spore size and the number of polar tubule coils differ between species, so identification guides therapy.</li>
    </ul>
    <h4>Management</h4>
    <p><strong>Albendazole</strong> is active against <em>Encephalitozoon</em> species; <em>E. bieneusi</em> responds poorly and <strong>fumagillin</strong> is used. <strong>Antiretroviral therapy</strong> and reversal of immunosuppression are central. In transplant patients, reducing immunosuppression is often necessary. Supportive nutrition and treatment of co-infections improve outcomes. Relapse is common if immunosuppression persists, so follow-up stool and symptom monitoring are needed. Prevention relies on safe water, hand hygiene and screening of donors where relevant.</p>
  `,
  tip: "Species matters for treatment: albendazole for Encephalitozoon, fumagillin for E. bieneusi.",
  sources: ["P2", "P3"]
},
{
  id: "pa76", domain: "para-intestinal", star: true,
  q: "Describe the pre-analytical and analytical requirements of a stool ova-and-parasite examination, including fixatives, concentration methods and quality assurance.",
  tags: ["stool O&P", "fixatives", "concentration", "quality assurance"],
  keypoints: ["stool O&P", "three specimens", "trophozoites", "formalin–ethyl acetate sedimentation", "zinc sulfate flotation", "trichrome", "Kato–Katz", "agar plate culture", "proficiency testing", "calibrated micrometer", "SAF", "PVA", "iron haematoxylin"],
  answer: `
    <h4>Specimen collection</h4>
    <p>A <strong>stool O&amp;P</strong> is only as good as the specimen. Collect in a clean container without urine, water or disinfectant. The standard is <strong>three specimens</strong> on alternate days within 10 days, because parasite shedding is intermittent. For <strong>trophozoites</strong>, liquid stool must be examined within 30 minutes or fixed immediately; formed stool can be refrigerated overnight. Label the container with the patient identifier, date and time; delay reduces trophozoite yield.</p>
    <h4>Fixatives and stains</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Use</th></tr>
      <tr><td>10% formalin</td><td>Concentration; preserves cysts and eggs</td></tr>
      <tr><td><strong>SAF</strong></td><td>Alternative fixative; good for staining</td></tr>
      <tr><td><strong>PVA</strong></td><td>Preserves morphology for permanent stains</td></tr>
      <tr><td><strong>Trichrome</strong></td><td>Routine permanent stain for protozoa</td></tr>
      <tr><td><strong>Iron haematoxylin</strong></td><td>Detailed nuclear morphology</td></tr>
    </table></div>
    <h4>Concentration and special methods</h4>
    <ul>
      <li><strong>Formalin–ethyl acetate sedimentation</strong> is the routine concentration method; it recovers most cysts and eggs. Centrifuge at the validated speed and time, and decant carefully to avoid losing the sediment.</li>
      <li><strong>Zinc sulfate flotation</strong> (specific gravity 1.18–1.20) is useful for cysts but misses operculated and heavy eggs.</li>
      <li><strong>Kato–Katz</strong> quantifies helminth eggs; it is not for protozoa.</li>
      <li><strong>Agar plate culture</strong> and Baermann concentration are used for <em>Strongyloides</em> larvae.</li>
    </ul>
    <h4>Quality assurance</h4>
    <p>Examine saline and iodine wet mounts systematically at low and high power. Report cysts and trophozoites separately and quantitate when possible. Use a <strong>calibrated micrometer</strong> for size. Maintain <strong>proficiency testing</strong> and a reference slide collection. Review a sample of negative slides and correlate with clinical findings. Reject unlabelled, leaking or delayed specimens. Record the time the specimen reached the laboratory. Document the fixative and time of collection. A negative result does not exclude infection if the specimen is inadequate.</p>
  `,
  tip: "Three specimens, prompt fixation and a permanent stain are the three quality levers in stool parasitology.",
  sources: ["P2", "P8", "P11"]
},
{
  id: "pa77", domain: "para-intestinal",
  q: "Compare the modified acid-fast stain, modified trichrome stain and fluorescence methods used to detect intestinal coccidia and microsporidia.",
  tags: ["acid-fast", "modified trichrome", "coccidia", "microsporidia"],
  keypoints: ["modified acid-fast stains", "weak decolouriser", "1% sulfuric acid", "Cryptosporidium", "Cyclospora", "Cystoisospora", "Weber modified trichrome", "belt-like stripe", "calcofluor white", "UV autofluorescence", "direct fluorescent antibody", "PCR"],
  answer: `
    <h4>Why special stains are needed</h4>
    <p>Coccidian oocysts and microsporidian spores are small and can be missed on routine wet mounts. <strong>Modified acid-fast stains</strong> and modified trichrome stains make them visible, but interpretation requires attention to size, shape and staining variability. The stains are complementary: acid-fast methods screen for coccidia, while trichrome and fluorescence are used for microsporidia and confirmation.</p>
    <h4>Modified acid-fast staining</h4>
    <ul>
      <li>Use carbol fuchsin with a <strong>weak decolouriser</strong> — <strong>1% sulfuric acid</strong> — not the strong acid-alcohol used for mycobacteria.</li>
      <li>Counterstain with methylene blue or malachite green.</li>
      <li><em>Cryptosporidium</em>: 4–6 µm, pink-red, variable.</li>
      <li><em>Cyclospora</em>: 8–10 µm, variably stained, may appear as ghost outlines.</li>
      <li><em>Cystoisospora</em>: 20–33 µm, ellipsoid, red.</li>
    </ul>
    <h4>Modified trichrome and fluorescence</h4>
    <p>The <strong>Weber modified trichrome</strong> uses chromotrope 2R at high concentration. Microsporidian spores stain pink-red and often show a <strong>belt-like stripe</strong>. <strong>Calcofluor white</strong> binds chitin and fluoresces, but yeasts also fluoresce. <strong>UV autofluorescence</strong> is useful for <em>Cyclospora</em> and <em>Cystoisospora</em>.</p>
    <h4>Pitfalls</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Explanation</th></tr>
      <tr><td>Over-decolourisation</td><td>Oocysts lose stain and are missed</td></tr>
      <tr><td>Under-decolourisation</td><td>Background retains stain; contrast is poor</td></tr>
      <tr><td>Yeast</td><td>Can mimic oocysts or fluoresce</td></tr>
      <tr><td>Fat globules</td><td>Refractile artefacts mistaken for cysts</td></tr>
    </table></div>
    <p>Confirm with <strong>direct fluorescent antibody</strong>, antigen tests or <strong>PCR</strong>. Report the stain used and the size, because these determine interpretation. Prepare positive control slides with each run to verify decolourisation, and examine slides at ×1000 under oil immersion. Staining quality varies between batches of stain. A single negative stain does not exclude infection when the clinical suspicion is high; repeat the examination or use a molecular method.</p>
  `,
  tip: "Name the decolouriser (1% sulfuric acid) and the chromotrope 2R concentration — those distinguish a real method answer.",
  sources: ["P2", "P8", "P3"]
},
{
  id: "pa78", domain: "para-intestinal",
  q: "Discuss the role of antigen detection and molecular testing in the diagnosis of intestinal protozoa, including their limitations.",
  tags: ["antigen", "PCR", "multiplex panel", "diagnostic stewardship"],
  keypoints: ["antigen detection", "nucleic acid amplification", "stool antigen ELISA", "direct fluorescent antibody", "current infection", "multiplex PCR", "mixed infections", "amoebic serology", "Giardia", "Cryptosporidium", "E. histolytica", "E. dispar"],
  answer: `
    <h4>Why antigen and molecular tests are used</h4>
    <p>Microscopy is inexpensive but insensitive, especially when parasite density is low or specimens are delayed. <strong>Antigen detection</strong> and <strong>nucleic acid amplification</strong> improve sensitivity and turnaround, and they can distinguish <em>E. histolytica</em> from <em>E. dispar</em>.</p>
    <h4>Antigen tests</h4>
    <ul>
      <li><strong>Stool antigen ELISA</strong> for <em>Giardia</em>, <em>Cryptosporidium</em> and <em>Entamoeba</em>; some are rapid immunochromatographic tests.</li>
      <li><strong>Direct fluorescent antibody</strong> is sensitive and specific for <em>Giardia</em> and <em>Cryptosporidium</em>.</li>
      <li>A positive antigen test usually indicates <strong>current infection</strong>, unlike serology, which reflects exposure.</li>
      <li>Antigen tests are less useful for <em>Cyclospora</em>, <em>Cystoisospora</em> and microsporidia.</li>
    </ul>
    <h4>Molecular panels</h4>
    <p><strong>Multiplex PCR</strong> gastrointestinal panels detect several bacteria, viruses and parasites in one specimen. They are fast, sensitive and useful for <strong>mixed infections</strong>. Limitations include cost, the need for specialised equipment, detection of dead organisms, and incomplete coverage of parasites. Results must be interpreted with the clinical picture. Antigen tests are also useful when microscopy expertise is limited.</p>
    <h4>Serology</h4>
    <p><strong>Amoebic serology</strong> is valuable for liver abscess but cannot distinguish past from current intestinal infection in endemic areas. It should not replace stool antigen or PCR for intestinal disease.</p>
    <h4>Practical use</h4>
    <div class="table-wrap"><table>
      <tr><th>Situation</th><th>Preferred test</th></tr>
      <tr><td>Chronic diarrhoea, immunocompetent</td><td>Stool antigen or PCR for <em>Giardia</em> and <em>Cryptosporidium</em></td></tr>
      <tr><td>Suspected amoebic colitis</td><td>Stool antigen or PCR for <em>E. histolytica</em></td></tr>
      <tr><td>Suspected liver abscess</td><td>Serology plus imaging</td></tr>
      <tr><td>HIV with chronic diarrhoea</td><td>Multiplex PCR plus acid-fast and trichrome stains</td></tr>
    </table></div>
    <p>No test replaces a good specimen. Collect before treatment, transport promptly and record the method used. Report the specimen type and test method with every result.</p>
  `,
  tip: "Antigen means current infection; antibody means exposure. That one line answers many exam questions.",
  sources: ["P2", "P3", "P11"]
},
{
  id: "pa79", domain: "para-intestinal", star: true,
  q: "A patient has peripheral eosinophilia. Outline the parasitic causes and the laboratory approach, explaining why most intestinal protozoa do not cause eosinophilia.",
  tags: ["eosinophilia", "helminths", "protozoa", "diagnostic approach"],
  keypoints: ["eosinophilia", "tissue-invasive helminths", "intestinal protozoa", "Cystoisospora belli", "Dientamoeba fragilis", "Strongyloides stercoralis", "three O&P", "serology", "corticosteroids", "hyperinfection", "Löffler syndrome", "Toxocara", "Schistosoma"],
  answer: `
    <h4>Definition and why it matters</h4>
    <p><strong>Eosinophilia</strong> is conventionally a peripheral eosinophil count above 0.5 × 10⁹/L. Parasites are a major cause worldwide, but the pattern is not uniform: <strong>tissue-invasive helminths</strong> provoke eosinophilia, whereas most <strong>intestinal protozoa</strong> do not. The main protozoal exceptions are <em>Cystoisospora belli</em> and <em>Dientamoeba fragilis</em>. A normal eosinophil count does not exclude helminth infection, especially in acute or disseminated disease.</p>
    <h4>Parasites that cause eosinophilia</h4>
    <ul>
      <li><strong>Helminths with tissue migration</strong>: <em>Strongyloides stercoralis</em>, <em>Ascaris</em> (<strong>Löffler syndrome</strong>), hookworm, <em>Toxocara</em>, <em>Trichinella</em>, filariae, <em>Schistosoma</em>.</li>
      <li><strong>Tissue cysts</strong>: cysticercosis, hydatid disease.</li>
      <li><strong>Ectoparasites</strong>: scabies.</li>
      <li><strong>Protozoal exceptions</strong>: <em>Cystoisospora</em>, <em>Dientamoeba</em>; <em>Entamoeba histolytica</em> typically does not cause eosinophilia.</li>
    </ul>
    <h4>Diagnostic approach</h4>
    <div class="table-wrap"><table>
      <tr><th>Step</th><th>Action</th></tr>
      <tr><td>History</td><td>Travel, food, water, animal contact, sexual history, drugs</td></tr>
      <tr><td>Stool</td><td><strong>Three O&amp;P</strong> specimens, concentration, special stains</td></tr>
      <tr><td>Blood</td><td>Full blood count, IgE, liver enzymes</td></tr>
      <tr><td><strong>Serology</strong></td><td><em>Strongyloides</em>, <em>Schistosoma</em>, <em>Toxocara</em>, filaria</td></tr>
      <tr><td>Imaging</td><td>Chest radiograph, ultrasound, CT or MRI as indicated</td></tr>
    </table></div>
    <h4>Safety and interpretation</h4>
    <p>Before starting <strong>corticosteroids</strong> or other immunosuppression, exclude <strong><em>Strongyloides stercoralis</em></strong>, because <strong>hyperinfection</strong> can be fatal. Eosinophilia may be absent in acute infection or after steroids. Non-parasitic causes — allergy, drugs, malignancy, adrenal insufficiency and hypereosinophilic syndromes — must be considered. The degree of eosinophilia does not reliably indicate parasite burden. The count should be interpreted with the total white cell count and the clinical setting, and travel or dietary history often points to the likely exposure. Serial testing is more informative than a single value, and targeted testing is more useful than broad parasite panels.</p>
  `,
  tip: "Protozoa rarely raise eosinophils; the two exceptions and the pre-steroid Strongyloides screen are the marks.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa80", domain: "para-intestinal", star: true,
  q: "Discuss the opportunistic intestinal protozoa of HIV infection: diagnosis, treatment and prevention.",
  tags: ["HIV", "opportunistic protozoa", "Cryptosporidium", "prophylaxis"],
  keypoints: ["Cryptosporidium", "Cystoisospora belli", "Cyclospora", "microsporidia", "CD4", "three stool specimens", "modified acid-fast stain", "stool antigen", "PCR", "antiretroviral therapy", "TMP-SMX", "co-trimoxazole prophylaxis", "IRIS"],
  answer: `
    <h4>Which parasites and when</h4>
    <p>In advanced HIV, cell-mediated immunity falls and opportunistic intestinal protozoa become common. <strong>Cryptosporidium</strong>, <strong>Cystoisospora belli</strong>, <strong>Cyclospora</strong> and <strong>microsporidia</strong> cause chronic diarrhoea and wasting; <em>Giardia</em> and <em>Entamoeba histolytica</em> also occur. The risk rises as <strong>CD4</strong> falls, especially below 100–200 cells/µL. Chronic diarrhoea in HIV also has non-parasitic causes, including bacterial overgrowth, HIV enteropathy and medications.</p>
    <h4>Clinical approach</h4>
    <ul>
      <li>Take a careful history of water, food, travel, sexual practice and pets.</li>
      <li>Examine <strong>three stool specimens</strong> with wet mount, trichrome and <strong>modified acid-fast stain</strong>.</li>
      <li>Use <strong>stool antigen</strong> or <strong>PCR</strong> for <em>Giardia</em>, <em>Cryptosporidium</em> and <em>Entamoeba</em>.</li>
      <li>Consider multiplex PCR panels and microsporidial stains when routine tests are negative.</li>
      <li>Check electrolytes, albumin, CD4 count and renal function; image the biliary tree if cholangitis is suspected.</li>
    </ul>
    <h4>Management</h4>
    <div class="table-wrap"><table>
      <tr><th>Parasite</th><th>Key management</th></tr>
      <tr><td><em>Cryptosporidium</em></td><td>Start <strong>antiretroviral therapy</strong>; nitazoxanide; supportive care</td></tr>
      <tr><td><em>Cystoisospora</em></td><td><strong>TMP-SMX</strong>, then maintenance</td></tr>
      <tr><td><em>Cyclospora</em></td><td><strong>TMP-SMX</strong></td></tr>
      <tr><td>Microsporidia</td><td>Albendazole for <em>Encephalitozoon</em>; fumagillin for <em>E. bieneusi</em></td></tr>
    </table></div>
    <p>Patients with severe diarrhoea may need hospital admission for hydration and nutritional rehabilitation.</p>
    <h4>Prevention and IRIS</h4>
    <p><strong>Co-trimoxazole prophylaxis</strong> covers <em>Cystoisospora</em> and <em>Toxoplasma</em> when CD4 is low. Prophylaxis can be stopped after sustained immune recovery on ART. Safe water, hand hygiene and food safety reduce exposure. Immune reconstitution after ART may unmask or worsen symptoms (<strong>IRIS</strong>), so continue ART and treat the infection. Drug interactions and adherence must be reviewed. Stool testing should be repeated if symptoms persist and the initial work-up is negative, and nutritional support with rehydration and close follow-up is essential.</p>
  `,
  tip: "Immune reconstitution is treatment: ART is the most important intervention for HIV-associated coccidia.",
  sources: ["P3", "P2", "P9"]
},
{
  id: "pa81", domain: "para-intestinal",
  q: "Discuss the epidemiology and control of intestinal and urogenital protozoa in the Philippines.",
  tags: ["Philippines", "epidemiology", "water", "sanitation", "public health"],
  keypoints: ["safe water", "sanitation", "Entamoeba histolytica", "Giardia duodenalis", "Cryptosporidium", "Trichomonas vaginalis", "sexually transmitted infection", "stool O&P", "HIV", "RITM", "concentration", "modified acid-fast"],
  answer: `
    <h4>Burden and transmission</h4>
    <p>Intestinal protozoa are common in the Philippines wherever <strong>safe water</strong> and <strong>sanitation</strong> are inadequate. <em>Entamoeba histolytica</em>, <em>Giardia duodenalis</em>, <em>Cryptosporidium</em>, <em>Cyclospora</em> and <em>Blastocystis</em> are reported in community and hospital surveys, with prevalence varying widely by site and method. <em>Trichomonas vaginalis</em> is the main urogenital protozoan and is a common <strong>sexually transmitted infection</strong>. Reported rates underestimate the true burden because surveillance is passive and relies on routine <strong>stool O&amp;P</strong>.</p>
    <h4>Determinants</h4>
    <ul>
      <li><strong>Water supply</strong>: intermittent, unchlorinated or contaminated sources; poor household storage.</li>
      <li><strong>Sanitation</strong>: open defecation, leaking septic tanks and flooding.</li>
      <li>Food handling and street food; unwashed produce.</li>
      <li>Poverty, crowding and limited health literacy.</li>
      <li><strong>HIV</strong> and other immunosuppression increase symptomatic coccidial disease.</li>
      <li>Climate and typhoons disrupt water and sanitation systems.</li>
    </ul>
    <h4>Programme response</h4>
    <div class="table-wrap"><table>
      <tr><th>Area</th><th>Action</th></tr>
      <tr><td>Surveillance</td><td>Standardise reporting; strengthen laboratory capacity</td></tr>
      <tr><td>Water</td><td>Protect sources; chlorinate and filter; test regularly</td></tr>
      <tr><td>Sanitation</td><td>Latrines; safe septage disposal; hygiene promotion</td></tr>
      <tr><td>Clinical</td><td>Antigen and PCR for coccidia; treat and counsel</td></tr>
      <tr><td>STI control</td><td>Screen and treat <em>T. vaginalis</em>; partner notification</td></tr>
    </table></div>
    <h4>Role of the laboratory</h4>
    <p><strong>RITM</strong> and regional reference laboratories support quality assurance, outbreak investigation and confirmation. Outbreak investigations should include water-source mapping and food-handler screening. Laboratories should use <strong>concentration</strong>, permanent stains and <strong>modified acid-fast</strong> methods, and should report commensals accurately. Clinicians should request parasite tests specifically rather than relying on a generic O&amp;P. Community education on hand hygiene, safe water and latrine use remains the most sustainable intervention. Local government units and the DOH share responsibility for environmental health and outbreak response.</p>
  `,
  tip: "Frame the answer around water, sanitation, surveillance and laboratory capacity, not just individual treatment.",
  sources: ["P4", "P9", "P3"]
}
);
