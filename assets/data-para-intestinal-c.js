/* Parasitology — intestinal/urogenital protozoa, part C: Philippine practice and advanced topics */
window.QBANK.push(
{
  id: "pa172", domain: "para-intestinal", star: true,
  q: "Amoebiasis and giardiasis in the Philippines: why do published prevalences range from under 1% to over 30%, and how should a master's-level reader interpret them?",
  tags: ["Philippines", "amoebiasis", "giardiasis", "prevalence", "surveillance"],
  keypoints: ["amoebiasis", "giardiasis", "sampling frame", "single direct smear", "three specimens", "concentration", "trichrome", "stool antigen", "PCR", "E. histolytica", "E. dispar", "asymptomatic carriage", "children under five", "safe water", "sanitation", "passive surveillance"],
  answer: `
    <h4>What the figures measure</h4>
    <p><strong>Amoebiasis</strong> and <strong>giardiasis</strong> are endemic throughout the Philippines, yet reported rates are not comparable. Community surveys in Palawan, Mindanao, the Cordillera and urban poor settlements have produced figures from below 1% to over 30% for the same organism. The spread is mostly methodological rather than a true difference in transmission.</p>
    <div class="table-wrap"><table>
      <tr><th>Determinant</th><th>Effect on the estimate</th></tr>
      <tr><td><strong>Sampling frame</strong></td><td>Hospital patients with diarrhoea give higher rates than schoolchildren, blood donors or pregnant women</td></tr>
      <tr><td><strong>Specimen number</strong></td><td>A <strong>single direct smear</strong> detects roughly half of infections; <strong>three specimens</strong> with <strong>concentration</strong> are the standard</td></tr>
      <tr><td><strong>Method</strong></td><td><strong>Stool antigen</strong> and <strong>PCR</strong> recover more <em>Giardia</em> and <em>Cryptosporidium</em> than microscopy</td></tr>
      <tr><td><strong>Reporting convention</strong></td><td>Microscopy cannot separate <em>E. histolytica</em> from <em>E. dispar</em>, so "amoebiasis" rates overstate invasive disease</td></tr>
    </table></div>
    <h4>Biology that shapes the pattern</h4>
    <ul>
      <li><strong>Giardiasis</strong> peaks in <strong>children under five</strong> and in day-care and crowded households.</li>
      <li><strong>Amoebic colitis</strong> is uncommon before school age; <strong>asymptomatic carriage</strong> is the usual outcome of infection.</li>
      <li>Cysts survive in cool water, and <strong>safe water</strong> and <strong>sanitation</strong> are the strongest ecological predictors.</li>
      <li>Both are diagnosed by <strong>passive surveillance</strong>, so a laboratory that tests little reports little.</li>
    </ul>
    <h4>How to read a Philippine prevalence</h4>
    <p>Ask four questions: who was sampled, how many specimens, which method, and how were amoebae reported? A rate from a single stool examination in a diarrhoea clinic is an upper-bound clinical estimate; a rate from three concentrated specimens in a community survey is closer to true exposure. Neither proves that the organism caused the symptoms. Quote the method beside every figure, and treat national totals as minimum estimates, because most cases never reach a laboratory.</p>
  `,
  tip: "Critique the method before quoting the number — that is what separates a master's answer from a list.",
  sources: ["P4", "P13", "P14", "P2", "P3"]
},
{
  id: "pa173", domain: "para-intestinal", star: true,
  q: "Cryptosporidium in people living with HIV in the Philippines: why is it underdiagnosed, and what should the laboratory and treatment hub do?",
  tags: ["Cryptosporidium", "HIV", "Philippines", "opportunistic infection", "diagnosis"],
  keypoints: ["Cryptosporidium", "CD4", "chronic diarrhoea", "modified acid-fast stain", "direct fluorescent antibody", "PCR", "routine O&P", "request", "nitazoxanide", "antiretroviral therapy", "co-trimoxazole", "safe water", "treatment hub", "RITM", "biliary", "wasting"],
  answer: `
    <h4>Why it matters locally</h4>
    <p>The Philippine HIV epidemic has grown fastest among young men who have sex with men, and many still present late with <strong>CD4</strong> counts below 200. In that group, <strong>Cryptosporidium</strong> causes <strong>chronic diarrhoea</strong>, malabsorption, <strong>wasting</strong> and occasionally <strong>biliary</strong> disease. Infection is acquired from water, food and person-to-person spread; the oocyst is immediately infective and chlorine-resistant. Late presentation is the single strongest predictor of opportunistic diarrhoea. Philippine series remain small, so the true burden is probably underestimated rather than absent.</p>
    <h4>The diagnostic gap</h4>
    <ul>
      <li><strong>Routine O&amp;P</strong> is requested without naming coccidia, and the oocyst is 4–6 µm — easily missed on a wet mount.</li>
      <li>The <strong>modified acid-fast stain</strong> is not offered by many primary laboratories, and a negative result is often accepted without confirmation.</li>
      <li><strong>Direct fluorescent antibody</strong> and <strong>PCR</strong> are mainly available at reference level, including <strong>RITM</strong>.</li>
      <li>Stool is often collected after antibiotics or antidiarrhoeals, further reducing yield.</li>
    </ul>
    <h4>What the treatment hub should do</h4>
    <div class="table-wrap"><table>
      <tr><th>Step</th><th>Action</th></tr>
      <tr><td>Request</td><td>Specify "coccidia, including <em>Cryptosporidium</em>" on the form; send three specimens</td></tr>
      <tr><td>Screen</td><td><strong>Modified acid-fast stain</strong> plus antigen or <strong>PCR</strong> where available</td></tr>
      <tr><td>Assess</td><td>CD4 count, electrolytes, albumin, weight; image the biliary tree if pain or cholestasis</td></tr>
      <tr><td>Treat</td><td>Start or optimise <strong>antiretroviral therapy</strong>; rehydration and nutrition; <strong>nitazoxanide</strong> has modest benefit</td></tr>
      <tr><td>Prevent</td><td><strong>Safe water</strong>, boiling or filtration, hand hygiene, food safety counselling</td></tr>
    </table></div>
    <p><strong>Co-trimoxazole</strong> prophylaxis does not reliably cover <em>Cryptosporidium</em>, so it must not be assumed protective. Immune reconstitution is the definitive treatment; supportive care buys time until it occurs.</p>
  `,
  tip: "Say explicitly that co-trimoxazole does not cover Cryptosporidium — a common false assumption in HIV care.",
  sources: ["P3", "P13", "P14", "P4", "S16"]
},
{
  id: "pa174", domain: "para-intestinal", star: true,
  q: "Capillaria philippinensis: describe the Philippine discovery, the mechanism of autoinfection and the clinical and laboratory features of intestinal capillariasis.",
  tags: ["Capillaria philippinensis", "Philippines", "autoinfection", "protein-losing enteropathy"],
  keypoints: ["Ilocos", "Tagudin", "raw fish", "autoinfection", "larviparous", "protein-losing enteropathy", "hypokalaemia", "peanut-shaped egg", "bipolar plugs", "striated shell", "albendazole", "potassium", "relapse", "sanitation", "endemic focus"],
  answer: `
    <h4>A Philippine discovery</h4>
    <p>Intestinal capillariasis was first recognised in the <strong>Ilocos</strong> region in 1963, with the classic epidemic centred on <strong>Tagudin</strong>, Ilocos Sur. The parasite, <em>Capillaria philippinensis</em>, had not been described before, and the outbreak killed a large proportion of severe cases. Its source was eventually traced to raw small freshwater and brackish-water fish, eaten as a delicacy.</p>
    <h4>Transmission and autoinfection</h4>
    <p>Humans ingest infective larvae in <strong>raw fish</strong>. The adult worms live in the small intestinal mucosa. Females are <strong>larviparous</strong> — they release larvae rather than eggs — and those larvae mature within the same host. This <strong>autoinfection</strong> amplifies the worm burden without further exposure, producing a chronic, progressive illness and explaining why untreated disease is fatal.</p>
    <h4>Clinical and laboratory features</h4>
    <ul>
      <li><strong>Protein-losing enteropathy</strong>: chronic watery diarrhoea, abdominal pain, oedema, ascites, weight loss and muscle wasting.</li>
      <li><strong>Hypokalaemia</strong> and hypocalcaemia from intestinal loss; arrhythmia and tetany can cause sudden death.</li>
      <li>Malabsorption of fat and protein, low albumin, raised alkaline phosphatase.</li>
      <li>Stool may contain the <strong>peanut-shaped egg</strong> with flattened <strong>bipolar plugs</strong> and a <strong>striated shell</strong>, plus larvae and occasional adults.</li>
      <li>Eggs are small and easily overlooked; concentration and repeated examination are needed, and larvae may predominate.</li>
    </ul>
    <h4>Treatment and control</h4>
    <p><strong>Albendazole</strong> for 10 days is standard, with mebendazole as an alternative; severe cases need prolonged therapy because <strong>relapse</strong> is common after short courses. Correct <strong>potassium</strong>, calcium and albumin, and monitor the ECG. Control is food safety: cook small fish thoroughly, protect water sources and improve <strong>sanitation</strong>. Endemic foci persist where raw fish dishes remain customary, so health education must be culturally specific rather than generic.</p>
  `,
  tip: "Autoinfection explains relapse and severity — link it to the need for prolonged albendazole.",
  sources: ["P10", "P4", "P9", "P1"]
},
{
  id: "pa175", domain: "para-intestinal",
  q: "Blastocystis in the Philippines: how common is it, why is its pathogenicity disputed, and how should a laboratory report it?",
  tags: ["Blastocystis", "Philippines", "reporting", "subtypes", "stewardship"],
  keypoints: ["Blastocystis", "central body form", "subtypes", "ST3", "asymptomatic carriage", "irritable bowel syndrome", "pathogenicity debated", "trichrome", "semiquantitative", "metronidazole", "co-infection", "safe water", "sanitation", "no treatment", "reporting policy"],
  answer: `
    <h4>Prevalence in the Philippines</h4>
    <p><em>Blastocystis</em> is among the most frequently reported intestinal protists in Filipino stool surveys, with prevalences from about 10% to over 50% depending on population and method. The <strong>central body form</strong> is the usual microscopic appearance. Molecular studies worldwide place most human isolates in a few <strong>subtypes</strong>, with <strong>ST3</strong> commonly dominant, although local subtype data remain limited.</p>
    <h4>The pathogenicity debate</h4>
    <p>Arguments for disease include associations with diarrhoea, bloating, urticaria and <strong>irritable bowel syndrome</strong>, and symptom improvement after treatment in some patients. Arguments against include equally high rates of <strong>asymptomatic carriage</strong>, inconsistent treatment trials, and confounding by coexisting pathogens and microbiome differences. The honest position is that <strong>pathogenicity is debated</strong> and that subtype alone does not establish causation.</p>
    <h4>What the laboratory should report</h4>
    <ul>
      <li>Examine a <strong>trichrome</strong> stain as well as a wet mount, and report <strong>semiquantitative</strong> abundance rather than a bare "positive".</li>
      <li>State that clinical significance is uncertain, so the report does not by itself justify a prescription.</li>
      <li>Look actively for <strong>co-infection</strong> — <em>Giardia</em>, coccidia, microsporidia, <em>Entamoeba histolytica</em> and bacterial pathogens.</li>
      <li>Distinguish the organism from yeast, fat globules and lysed cells; iodine helps but distorts morphology.</li>
    </ul>
    <h4>Clinical and public health response</h4>
    <p>Treat only symptomatic patients in whom other causes have been excluded, usually with <strong>metronidazole</strong>; response is unpredictable, so review the diagnosis if symptoms persist. Do not treat asymptomatic people. High community prevalence is a marker of <strong>safe water</strong> and <strong>sanitation</strong> gaps, which is where control belongs. A clear <strong>reporting policy</strong> protects patients from unnecessary antimicrobials and protects the laboratory from being blamed for a dubious diagnosis.</p>
  `,
  tip: "Report, qualify, then look for a real pathogen — that sequence answers both the lab and the clinical question.",
  sources: ["P4", "P2", "P3", "P14"]
},
{
  id: "pa176", domain: "para-intestinal", star: true,
  q: "Stool diagnosis in Philippine laboratories: what can each laboratory tier deliver, how is quality assured, and how does this connect to DOH water and sanitation programmes?",
  tags: ["Philippines", "laboratory capacity", "quality assurance", "WASH", "DOH"],
  keypoints: ["primary laboratory", "secondary laboratory", "tertiary laboratory", "direct smear", "concentration", "permanent stain", "modified acid-fast", "RITM", "proficiency testing", "Kato–Katz", "WASHED", "zero open defecation", "PIDSR", "referral", "turnaround"],
  answer: `
    <h4>The laboratory inside the control chain</h4>
    <p>Protozoan diarrhoea is controlled at three points: the water source, the household, and the stool report. Philippine <strong>DOH</strong> programmes address the first two through environmental health, <strong>WASHED</strong> (water, sanitation, hygiene, education and deworming) and <strong>zero open defecation</strong> campaigns. The laboratory closes the loop by confirming what is circulating and where.</p>
    <h4>Capability by tier</h4>
    <div class="table-wrap"><table>
      <tr><th>Tier</th><th>Typical parasitology service</th><th>Main gap</th></tr>
      <tr><td><strong>Primary</strong></td><td>Direct smear, sometimes simple concentration</td><td>No <strong>permanent stain</strong>; coccidia not sought</td></tr>
      <tr><td><strong>Secondary</strong></td><td>Formalin–ethyl acetate <strong>concentration</strong>, trichrome, Kato–Katz</td><td>No antigen or molecular testing</td></tr>
      <tr><td><strong>Tertiary</strong></td><td>Antigen assays, <strong>modified acid-fast</strong> stains, PCR</td><td>Cost, expertise, uneven access</td></tr>
    </table></div>
    <h4>Quality assurance and referral</h4>
    <ul>
      <li>Use a calibrated micrometer, positive control slides and a documented reading time per field.</li>
      <li>Join <strong>proficiency testing</strong>; retain reference slides and recheck a sample of negatives.</li>
      <li>Refer ambiguous coccidia, microsporidia and unusual cysts to <strong>RITM</strong> or a regional reference laboratory.</li>
      <li>Record specimen age, fixative and <strong>turnaround</strong>; a delayed specimen is a rejected specimen.</li>
    </ul>
    <h4>Connecting to surveillance</h4>
    <p>Report acute bloody diarrhoea through <strong>PIDSR</strong>, and feed stool positivity back to the municipal health office so that case clusters can be matched to water sources. Where water testing exists, compare faecal indicator results with stool positivity for the same barangay. When a barangay reports several cases, the laboratory result should trigger a water inspection, not just another prescription. Laboratories that never look for <em>Cryptosporidium</em> or <em>Cyclospora</em> create a false impression that those parasites are absent. Investment in a stain and a trained microscopist is therefore a public health intervention, not merely a diagnostic purchase.</p>
  `,
  tip: "Tie every laboratory limitation to a programme consequence — that is the advanced-level argument.",
  sources: ["P4", "P9", "P11", "S31", "C13"]
},
{
  id: "pa177", domain: "para-intestinal",
  q: "Entamoeba histolytica or Entamoeba dispar? Design a species-level diagnostic pathway and explain how serology should and should not be used.",
  tags: ["Entamoeba histolytica", "E. dispar", "serology", "antigen", "diagnostic stewardship"],
  keypoints: ["morphologically identical", "ingested red blood cells", "Gal/GalNAc lectin", "stool antigen", "PCR", "serology", "past infection", "endemic area", "liver abscess", "luminal agent", "overdiagnosis", "reporting convention", "species-specific", "treatment decision"],
  answer: `
    <h4>The problem with microscopy</h4>
    <p><em>Entamoeba histolytica</em> and <em>E. dispar</em> are <strong>morphologically identical</strong>; only <strong>ingested red blood cells</strong> in a trophozoite suggest invasive disease, and even that is imperfect. Reporting "<em>E. histolytica</em>" from a wet mount therefore overdiagnoses a commensal and exposes patients to unnecessary metronidazole.</p>
    <h4>Test hierarchy</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>What it shows</th><th>Limitation</th></tr>
      <tr><td>Microscopy</td><td>Cysts or trophozoites</td><td>Cannot separate species; insensitive</td></tr>
      <tr><td><strong>Stool antigen</strong> (<strong>Gal/GalNAc lectin</strong>)</td><td>Species-specific, current infection</td><td>Variable sensitivity; not universal</td></tr>
      <tr><td><strong>PCR</strong></td><td>Species-specific, most sensitive</td><td>Cost, equipment, dead organisms</td></tr>
      <tr><td><strong>Serology</strong></td><td>Exposure, including <strong>past infection</strong></td><td>Stays positive for years in an <strong>endemic area</strong></td></tr>
    </table></div>
    <h4>How serology should be used</h4>
    <p>Serology is strongest for <strong>liver abscess</strong>, where stool may be negative and antibody is usually present. It is weak for intestinal disease: a positive result in a Filipino adult may reflect infection years earlier. A negative result is more useful, because it makes invasive amoebiasis unlikely. Serology should never be used to screen asymptomatic people.</p>
    <h4>A practical pathway</h4>
    <ul>
      <li>Report "<em>E. histolytica</em>/<em>E. dispar</em>" when only microscopy was done — a <strong>reporting convention</strong> that is honest and clinically safe.</li>
      <li>Add <strong>stool antigen</strong> or <strong>PCR</strong> when symptoms, blood in stool or a liver lesion make invasive disease plausible.</li>
      <li>Treat invasive disease with a tissue amoebicide plus a <strong>luminal agent</strong>; do not treat an asymptomatic <em>E. dispar</em> carrier.</li>
      <li>Audit requests: a laboratory that performs species-specific testing only on selected specimens controls <strong>overdiagnosis</strong> and cost at the same time.</li>
    </ul>
    <p>Document the method beside every result, so that trends remain comparable when tests change.</p>
  `,
  tip: "Name the reporting convention — saying E. histolytica/dispar aloud is itself a mark of good practice.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "pa178", domain: "para-intestinal",
  q: "Cyclospora cayetanensis: explain the sporulation clock, the produce pathway, and why tropical infections are easily missed in the laboratory.",
  tags: ["Cyclospora", "sporulation", "produce", "autofluorescence", "underdiagnosis"],
  keypoints: ["unsporulated", "sporulation", "one to two weeks", "fresh produce", "imported", "washing", "modified acid-fast", "variable", "UV autofluorescence", "PCR", "TMP-SMX", "relapse", "immunocompromised", "seasonality", "traceback"],
  answer: `
    <h4>The sporulation clock</h4>
    <p><em>Cyclospora cayetanensis</em> passes <strong>unsporulated</strong> oocysts of 8–10 µm. They become infective only after <strong>sporulation</strong> in the environment, which takes roughly <strong>one to two weeks</strong> at warm ambient temperature. This delay explains two epidemiological facts: direct person-to-person transmission is uncommon, and contaminated food or water that has aged is the usual vehicle.</p>
    <h4>The produce pathway</h4>
    <p>Outbreaks repeatedly implicate <strong>fresh produce</strong> — raspberries, blackberries, basil, cilantro, lettuce and snow peas — often <strong>imported</strong> across long supply chains. Irrigation with contaminated water and poor worker hygiene deposit oocysts on the surface. <strong>Washing</strong> reduces but does not eliminate them, and chlorine is unreliable. <strong>Traceback</strong> investigations are difficult once the product has been distributed and consumed.</p>
    <h4>Why tropical cases are missed</h4>
    <ul>
      <li>Routine O&amp;P is insensitive, and the request rarely names coccidia.</li>
      <li><strong>Modified acid-fast</strong> staining is <strong>variable</strong>; oocysts may appear as faint ghosts.</li>
      <li><strong>UV autofluorescence</strong> is a rapid screen but needs a fluorescence microscope, which many laboratories lack.</li>
      <li>Infection is prolonged and relapsing, so patients may be investigated for inflammatory bowel disease instead.</li>
      <li><strong>PCR</strong> is definitive but concentrated at reference level.</li>
    </ul>
    <h4>Clinical course and control</h4>
    <p>Illness is a prolonged, relapsing diarrhoea with fatigue and weight loss; <strong>immunocompromised</strong> patients are worse and relapse more often. <strong>TMP-SMX</strong> is the treatment of choice, with longer courses and maintenance in advanced HIV. Prevention depends on safe irrigation water, produce hygiene, <strong>seasonality</strong> awareness and honest surveillance. Oocysts survive freezing poorly but resist many common disinfectants. A negative routine stool examination should never be presented as excluding the diagnosis.</p>
  `,
  tip: "Lead with the sporulation delay: it explains person-to-person rarity and the food pathway in one stroke.",
  sources: ["P3", "P2", "P1", "P4"]
},
{
  id: "pa179", domain: "para-intestinal", star: true,
  q: "Cystoisospora belli in HIV: why does it relapse, how is maintenance therapy managed, and when can prophylaxis stop?",
  tags: ["Cystoisospora", "HIV", "relapse", "secondary prophylaxis", "IRIS"],
  keypoints: ["Cystoisospora belli", "obligate intracellular", "eosinophilia", "TMP-SMX", "induction", "maintenance", "relapse", "CD4", "antiretroviral therapy", "secondary prophylaxis", "sulfa allergy", "immune reconstitution", "IRIS", "oocyst", "malabsorption"],
  answer: `
    <h4>Why relapse is the rule</h4>
    <p><em>Cystoisospora belli</em> is an <strong>obligate intracellular</strong> coccidian that invades small intestinal epithelium. Treatment clears the diarrhoea, but in advanced HIV the infection is not eradicated and symptoms return when therapy stops. Relapse is therefore expected, not exceptional, and it is the reason treatment is divided into induction and maintenance phases.</p>
    <h4>Induction and maintenance</h4>
    <div class="table-wrap"><table>
      <tr><th>Phase</th><th>Regimen</th><th>Comment</th></tr>
      <tr><td><strong>Induction</strong></td><td><strong>TMP-SMX</strong> for about 10 days</td><td>Higher dose; rehydrate and correct electrolytes</td></tr>
      <tr><td><strong>Maintenance</strong></td><td>TMP-SMX three times weekly</td><td>Continues while immunosuppression persists</td></tr>
      <tr><td>Alternative</td><td>Pyrimethamine with folinic acid, or ciprofloxacin</td><td>Limited evidence; specialist advice</td></tr>
    </table></div>
    <h4>Monitoring and stopping prophylaxis</h4>
    <ul>
      <li>Confirm adherence and exclude reinfection before labelling a relapse as treatment failure.</li>
      <li>Track weight, stool frequency, albumin and <strong>eosinophilia</strong>, which often falls with successful therapy.</li>
      <li>Start <strong>antiretroviral therapy</strong> promptly; immune recovery is what allows prophylaxis to stop.</li>
      <li>Secondary prophylaxis can usually be withdrawn after sustained <strong>CD4</strong> recovery, commonly above 200 cells/µL for at least six months.</li>
      <li>Restart prophylaxis if CD4 falls again or symptoms recur.</li>
    </ul>
    <h4>Complications to anticipate</h4>
    <p><strong>Sulfa allergy</strong> complicates management in a substantial minority, and desensitisation may be needed. <strong>Immune reconstitution</strong> can transiently worsen diarrhoea (<strong>IRIS</strong>), which is managed by continuing ART and treating the infection rather than stopping either. <strong>Malabsorption</strong> and wasting require nutritional support. Repeated stool examination and, where available, PCR confirm relapse. Documented relapse should be reported, because it signals failing immunity or premature withdrawal of maintenance. The oocyst is large and ellipsoid, so it is more easily seen than <em>Cryptosporidium</em> if the microscopist looks for it.</p>
  `,
  tip: "Structure the answer as induction, maintenance and the stopping rule — the three decisions clinicians actually make.",
  sources: ["P2", "P3", "S16", "P4"]
},
{
  id: "pa180", domain: "para-intestinal",
  q: "Balantidium coli: why is the largest human protozoan so rarely reported, and what are the morphological pitfalls in the laboratory?",
  tags: ["Balantidium", "ciliate", "pigs", "morphology", "underdiagnosis"],
  keypoints: ["Balantidium coli", "ciliate", "macronucleus", "cytostome", "cilia", "pigs", "zoonotic", "cysts", "wet mount", "trichrome", "dysentery", "tetracycline", "artefact", "degeneration", "under-reporting", "Philippines"],
  answer: `
    <h4>The reporting paradox</h4>
    <p><em>Balantidium coli</em> is the <strong>ciliate</strong> parasite of humans and the largest protozoan found in stool, yet human cases are rarely reported in the <strong>Philippines</strong> despite widespread backyard pig raising. Most infections are asymptomatic, stool screening is often a single direct smear, and trophozoites degenerate quickly. Under-reporting therefore reflects the test, not necessarily the transmission.</p>
    <h4>Morphology and pitfalls</h4>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Balantidium</th><th>Look-alike</th></tr>
      <tr><td>Size</td><td>50–200 µm trophozoite</td><td>Large <em>Entamoeba coli</em> is smaller, no cilia</td></tr>
      <tr><td>Surface</td><td><strong>Cilia</strong>, rotary motility</td><td>Bladder or intestinal epithelial cells</td></tr>
      <tr><td>Nucleus</td><td>Kidney-shaped <strong>macronucleus</strong></td><td>Macrophage nuclei are multiple and smaller</td></tr>
      <tr><td>Anterior end</td><td>Funnel-shaped <strong>cytostome</strong></td><td>Vacuoles can mimic it</td></tr>
      <tr><td>Cyst</td><td>45–65 µm, thick wall, visible macronucleus</td><td>Pollen grains, fat droplets</td></tr>
    </table></div>
    <h4>Laboratory handling</h4>
    <ul>
      <li>Examine a <strong>wet mount</strong> immediately; refrigeration and delay destroy motility and morphology.</li>
      <li>Use <strong>trichrome</strong> for a permanent record; iodine helps cysts but slows trophozoites.</li>
      <li>Measure with a micrometer and report the stage; do not call every large round object a cyst.</li>
      <li><strong>Formalin</strong> fixation preserves morphology, but motility is lost, so record the time from collection to examination.</li>
      <li>Repeat sampling when dysentery persists, and examine ulcer margins at colonoscopy if needed.</li>
    </ul>
    <h4>Clinical significance and control</h4>
    <p>Invasive disease causes <strong>dysentery</strong> resembling amoebiasis, occasionally with perforation. <strong>Pigs</strong> are the reservoir, so infection is <strong>zoonotic</strong> and linked to contaminated water. <strong>Tetracycline</strong> is first line, with metronidazole as an alternative. Control requires separation of pig pens from water sources, safe manure disposal and hand hygiene. Reporting a confirmed case should always prompt a look at the household water supply, not just a prescription.</p>
  `,
  tip: "Pit morphology against look-alikes in a table; that is where marks are won in a ciliate question.",
  sources: ["P1", "P2", "P4", "P3"]
},
{
  id: "pa181", domain: "para-intestinal", star: true,
  q: "Trichomonas vaginalis treatment failure: explain nitroimidazole resistance, distinguish it from reinfection, and outline a management pathway.",
  tags: ["Trichomonas", "nitroimidazole resistance", "treatment failure", "NAAT"],
  keypoints: ["Trichomonas vaginalis", "metronidazole", "tinidazole", "treatment failure", "reinfection", "nitroimidazole resistance", "aerobic resistance", "anaerobic resistance", "ferredoxin", "PFOR", "NAAT", "partner treatment", "susceptibility testing", "high-dose tinidazole", "retest", "counselling"],
  answer: `
    <h4>Define failure before treating it</h4>
    <p>Persistent symptoms after treatment are usually <strong>reinfection</strong> from an untreated partner, poor adherence or reinfection from a new partner, not true resistance. <strong>Trichomonas vaginalis</strong> has no cyst stage, so survival outside the host is limited and sexual transmission dominates. The first step is therefore a careful history, partner <strong>treatment</strong> and a repeat <strong>NAAT</strong> rather than an immediate change of drug.</p>
    <h4>Mechanisms of resistance</h4>
    <table>
      <tr><th>Type</th><th>Mechanism</th><th>Pattern</th></tr>
      <tr><td><strong>Anaerobic resistance</strong></td><td>Loss of <strong>PFOR</strong> and <strong>ferredoxin</strong> function, so the drug cannot be reduced to its active nitro radical</td><td>High-level, stable, cross-resistant to all nitroimidazoles</td></tr>
      <tr><td><strong>Aerobic resistance</strong></td><td>Reduced drug uptake and altered oxygen scavenging; partly reversible</td><td>Low-level; may respond to higher doses</td></tr>
    </table>
    <h4>Management pathway</h4>
    <ul>
      <li>Confirm with <strong>NAAT</strong>; wet mount is too insensitive to prove or exclude failure.</li>
      <li>Re-treat the patient and all partners; check adherence and address alcohol use with metronidazole.</li>
      <li>For persistent infection, use a higher dose of <strong>tinidazole</strong> or <strong>metronidazole</strong> for a longer course, as recommended in current STI guidance.</li>
      <li>If that fails, refer for <strong>susceptibility testing</strong> and consider high-dose tinidazole with intravaginal treatment under specialist supervision.</li>
      <li><strong>Retest</strong> after therapy because reinfection is common; rescreen for other STIs, including HIV.</li>
    </ul>
    <h4>Stewardship and prevention</h4>
    <p>Reserve nitroimidazoles for confirmed infection, treat partners, and avoid repeated empirical courses without confirmation. <strong>Counselling</strong> about condom use and partner notification prevents more failures than any drug change. Resistance remains uncommon but is rising, so documenting true failure matters for surveillance as well as for the individual patient. Antimicrobial stewardship is therefore part of STI control.</p>
  `,
  tip: "Separate reinfection from resistance first; examiners reward that clinical discipline.",
  sources: ["P2", "P3", "P9", "P1"]
}
);
