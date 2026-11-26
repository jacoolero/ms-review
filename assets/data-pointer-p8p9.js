/* Pointer-gap content — Blastocystis (p8) and scabies (p9). */
window.QBANK.push(
{
  id: "p8g1", domain: "p8",
  q: "Describe the biology of Blastocystis and explain what subtype classification adds to our understanding of this organism.",
  tags: ["Blastocystis", "biology", "subtypes", "taxonomy"],
  keypoints: ["anaerobic protist", "central body form", "granular form", "amoeboid form", "cyst", "faecal–oral", "Jones medium", "17 subtypes", "ST1–ST9", "ST3", "zoonotic", "ST4 livestock", "whole-genome sequencing", "putative pathogen", "Blastocystis sp."],
  answer: `
    <h4>One genus, several forms</h4>
    <p><em>Blastocystis</em> is an anaerobic, non-motile protist of the intestinal lumen, formerly called <em>B. hominis</em>. It has no cell wall and no flagella; mitochondria-like organelles and a large central vacuole are characteristic. Four forms are described in human stool: the <strong>central body (vacuolar)</strong> form, the <strong>granular</strong> form, the <strong>amoeboid</strong> form and the <strong>cyst</strong>. The cyst is the infective stage and survives outside the host, while the central body form predominates in faeces and is the form most often reported.</p>
    <ul>
      <li><strong>Central body</strong> — large central vacuole with peripheral nuclei; the usual stool finding.</li>
      <li><strong>Granular</strong> — packed with granules; may be a degenerating or active form.</li>
      <li><strong>Amoeboid</strong> — irregular shape, reported more often in symptomatic patients.</li>
      <li><strong>Cyst</strong> — small, walled and infective; the stage that survives in water.</li>
    </ul>
    <h4>Life cycle and host range</h4>
    <p>Transmission is <strong>faecal–oral</strong> through water, food, animals and person-to-person spread. After ingestion the cyst excysts in the colon; the organism remains in the lumen and does not invade. It can be grown in <strong>Jones medium</strong>, but axenic culture is difficult, which has slowed research. Isolates from humans, livestock, birds, rodents and primates look alike, so strict host specificity is doubtful.</p>
    <h4>Subtypes</h4>
    <p>Sequencing of the small-subunit rRNA gene divides the genus into at least <strong>17 subtypes (ST1–ST17)</strong>, and some authorities treat several as separate species. <strong>ST1–ST9</strong> occur in humans, with <strong>ST3</strong> usually most common, followed by ST1 and ST2. <strong>ST4</strong> is linked to livestock, ST5–ST7 to birds and ST8 to primates, so human infection with those subtypes suggests <strong>zoonotic</strong> exposure. <strong>Whole-genome sequencing</strong> shows marked diversity within a subtype, which may explain why clinical reports differ between regions.</p>
    <h4>What the classification adds</h4>
    <p>Subtype is a research tool, not a diagnostic test. It helps trace transmission, compare surveys and frame hypotheses about virulence, but it does not establish disease. Calling the organism <em>Blastocystis</em> sp. rather than <em>B. hominis</em> is more accurate, and "subtype ST3" should never be read as a diagnosis.</p>
  `,
  tip: "Separate what is known (forms, subtype numbering) from what is inferred (species, virulence) — that distinction earns the marks.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p8g2", domain: "p8", star: true,
  q: "Why is the pathogenicity of Blastocystis disputed, and what evidence would be needed to settle the question?",
  tags: ["Blastocystis", "pathogenicity", "causality", "irritable bowel syndrome"],
  keypoints: ["diarrhoea", "bloating", "urticaria", "irritable bowel syndrome", "asymptomatic carriage", "cross-sectional", "no animal model", "unblinded trials", "spontaneous clearance", "co-infection", "microbiome", "cysteine proteases", "tight junctions", "Hill's criteria", "eradication trial", "putative pathogen"],
  answer: `
    <h4>The case for disease</h4>
    <p>Patients with <em>Blastocystis</em> report <strong>diarrhoea</strong>, <strong>bloating</strong>, abdominal pain, fatigue and <strong>urticaria</strong>, and some improve after treatment. Prevalence is higher in <strong>irritable bowel syndrome</strong> than in controls in several series, and certain subtypes, notably ST1 and ST3, are over-represented in symptomatic groups. Laboratory work offers plausible mechanisms: <strong>cysteine proteases</strong> can degrade secretory IgA and provoke cytokines, while soluble products disturb <strong>tight junctions</strong> and increase epithelial permeability in vitro.</p>
    <h4>The case against</h4>
    <ul>
      <li><strong>Asymptomatic carriage</strong> is at least as common as symptomatic infection, including in healthy Filipino surveys.</li>
      <li>Most evidence is <strong>cross-sectional</strong>, so organism and symptoms are measured together and direction cannot be assigned.</li>
      <li>There is no reproducible animal model of colitis or diarrhoea.</li>
      <li>Treatment trials are small and often <strong>unblinded</strong>, with high placebo response and <strong>spontaneous clearance</strong>.</li>
      <li>Findings are confounded by <strong>co-infection</strong> and by the <strong>microbiome</strong>; some studies associate the organism with a more diverse, healthier microbiota.</li>
      <li>Detection methods differ between studies, so "cases" are not comparable.</li>
    </ul>
    <h4>Evidence that would settle it</h4>
    <p>A convincing answer needs a prospective cohort with standardised detection and subtyping, case–control matching for diet, travel and antibiotics, and a blinded <strong>eradication trial</strong> with objective endpoints and documented parasite clearance. Mechanistic work should use isogenic isolates and human intestinal models. These map onto <strong>Hill's criteria</strong>: temporality, dose–response, biological plausibility and experiment.</p>
    <p>Until then, <em>Blastocystis</em> is best called a <strong>putative pathogen</strong> of uncertain significance. The clinical task is not merely to detect it but to exclude everything else that can explain the symptoms.</p>
  `,
  tip: "Balance is the answer: give both sides, then specify the study design that would resolve the dispute.",
  sources: ["P2", "P3", "P13", "P14"]
},
{
  id: "p8g3", domain: "p8", star: true,
  q: "Design a laboratory pathway for detecting and reporting Blastocystis, including the limits of microscopy and the wording of the report.",
  tags: ["Blastocystis", "laboratory diagnosis", "reporting", "trichrome", "PCR"],
  keypoints: ["fresh stool", "saline wet mount", "iodine", "formalin–ethyl acetate concentration", "trichrome", "central body form", "size 5–40 µm", "yeast", "fat globules", "semiquantitative", "culture", "Jones medium", "PCR", "subtyping", "co-pathogens", "reporting wording"],
  answer: `
    <h4>Pre-analytical phase</h4>
    <p>Collect a <strong>fresh stool</strong> before antibiotics or antidiarrhoeals. Examine within one hour if trophozoites are sought; otherwise fix in formalin or sodium acetate–acetic acid–formalin. Request three specimens on separate days when infection is suspected, and record travel, water source and immunosuppression on the form. A primary laboratory with only a wet mount should say so in its report and refer ambiguous or persistent cases to a secondary or tertiary laboratory for <strong>trichrome</strong> staining, culture or <strong>PCR</strong>.</p>
    <h4>Direct detection</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>What it shows</th><th>Limitation</th></tr>
      <tr><td><strong>Saline wet mount</strong></td><td>Motility and the <strong>central body form</strong>, 5–40 µm</td><td>Insensitive at low density; artefacts common</td></tr>
      <tr><td><strong>Iodine</strong></td><td>Glycogen and cyst outlines</td><td>Kills the organism and distorts morphology</td></tr>
      <tr><td><strong>Formalin–ethyl acetate concentration</strong></td><td>Improves recovery of cysts</td><td>Loses some trophozoites</td></tr>
      <tr><td><strong>Trichrome stain</strong></td><td>Confirms internal structure</td><td>Needs trained microscopist</td></tr>
      <tr><td><strong>Culture (Jones medium)</strong></td><td>Viable organism; allows typing</td><td>Slow, labour-intensive, research-oriented</td></tr>
      <tr><td><strong>PCR</strong></td><td>Highest sensitivity; <strong>subtyping</strong></td><td>Cost, equipment, cannot prove viability</td></tr>
    </table></div>
    <h4>Pitfalls</h4>
    <ul>
      <li>Do not mistake <strong>yeast</strong>, <strong>fat globules</strong>, pollen or lysed cells for <em>Blastocystis</em>; size, refringence and a well-stained nucleus help.</li>
      <li>Report abundance <strong>semiquantitatively</strong> (scanty, moderate, many) rather than a bare positive.</li>
      <li>Actively seek <strong>co-pathogens</strong> — <em>Giardia</em>, coccidia, microsporidia, <em>Entamoeba histolytica</em> and bacterial causes.</li>
      <li>State that clinical significance is uncertain, so the report does not by itself justify treatment.</li>
    </ul>
    <h4>Report wording</h4>
    <p>A defensible report reads: "<em>Blastocystis</em> sp. seen, moderate. Significance uncertain; correlate with symptoms and exclude other enteropathogens." In a Philippine primary laboratory, this protects the patient from unnecessary metronidazole and directs attention to a treatable cause.</p>
  `,
  tip: "Include the exact report wording — the question asks for a pathway, not a list of stains.",
  sources: ["P2", "P3", "P4", "P11"]
},
{
  id: "p8g4", domain: "p8",
  q: "Critically evaluate the treatment options for Blastocystis and state when treatment is justified.",
  tags: ["Blastocystis", "metronidazole", "nitazoxanide", "treatment", "stewardship"],
  keypoints: ["no approved indication", "asymptomatic carriage", "metronidazole", "tinidazole", "nitazoxanide", "paromomycin", "co-trimoxazole", "iodoquinol", "small trials", "unblinded", "spontaneous clearance", "subtype", "co-infection", "repeat stool", "irritable bowel syndrome", "antimicrobial stewardship"],
  answer: `
    <h4>When treatment is justified</h4>
    <p>Only when the patient is <strong>symptomatic</strong>, the organism is the only plausible explanation after repeated stool study, and treatable <strong>co-infection</strong> has been excluded. <strong>Asymptomatic carriage</strong> is common and must not be treated. A positive report is not an indication. Document the symptoms and the negative work-up before prescribing, because bloating and fatigue have many causes.</p>
    <h4>Options and evidence</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Typical use</th><th>Strength of evidence</th></tr>
      <tr><td><strong>Metronidazole</strong></td><td>500 mg three times daily for 5–10 days</td><td>Most used, but <strong>small unblinded trials</strong>; response inconsistent</td></tr>
      <tr><td><strong>Tinidazole</strong></td><td>Single or short course</td><td>Better tolerated than metronidazole; limited comparative data</td></tr>
      <tr><td><strong>Nitazoxanide</strong></td><td>500 mg twice daily for 3 days</td><td>Modest benefit in some series; not consistently superior</td></tr>
      <tr><td><strong>Paromomycin</strong></td><td>500 mg three times daily for 7 days</td><td>Luminal action; small series only</td></tr>
      <tr><td><strong>Co-trimoxazole</strong></td><td>Alternative course</td><td>Weak and inconsistent evidence</td></tr>
      <tr><td><strong>Iodoquinol</strong></td><td>Luminal alternative</td><td>Old data; limited availability</td></tr>
    </table></div>
    <h4>Why the evidence is weak</h4>
    <ul>
      <li>Trials are <strong>small</strong>, often <strong>unblinded</strong>, and use different definitions of cure.</li>
      <li><strong>Spontaneous clearance</strong> and placebo response are high, so improvement may not be drug effect.</li>
      <li>Subtype and baseline microbiome are rarely reported, though both may modify response.</li>
      <li>Reinfection is common where water and sanitation are poor, so relapse is easily mislabelled as failure.</li>
    </ul>
    <h4>A defensible approach</h4>
    <p>Treat for a defined period, reassess symptoms and repeat stool, and stop if there is no clear benefit. Persistent symptoms after treatment should prompt a search for another diagnosis, including <strong>irritable bowel syndrome</strong>, rather than repeated courses. This is <strong>antimicrobial stewardship</strong> applied to a disputed pathogen: the drug is cheap, but unnecessary exposure is not.</p>
  `,
  tip: "Name the drugs, then attack the evidence — a critical evaluation must say why the trials cannot settle the question.",
  sources: ["P2", "P1", "P4", "P3"]
},
{
  id: "p8g5", domain: "p8",
  q: "Blastocystis in the Philippines: interpret the reported prevalence and outline a research agenda for a master's-level investigator.",
  tags: ["Blastocystis", "Philippines", "epidemiology", "research", "subtypes"],
  keypoints: ["10% to over 50%", "community survey", "hospital patients", "single direct smear", "three specimens", "concentration", "trichrome", "PCR", "ST3", "local subtype data", "asymptomatic controls", "microbiome", "WASH", "reporting standard", "research agenda", "archived slides"],
  answer: `
    <h4>What the Philippine figures show</h4>
    <p><em>Blastocystis</em> is among the most frequently reported intestinal protists in Filipino stool surveys, with figures from about <strong>10% to over 50%</strong>. The range is too wide to be explained by transmission alone. Community surveys, hospital patients, schoolchildren and blood donors are different populations, and each carries a different prior probability of infection. Published reports also cluster in a few regions, so the national map is built from convenience samples rather than a defined sampling frame.</p>
    <h4>Why estimates diverge</h4>
    <div class="table-wrap"><table>
      <tr><th>Determinant</th><th>Effect</th></tr>
      <tr><td><strong>Population</strong></td><td>Diarrhoea clinics report more than community samples</td></tr>
      <tr><td><strong>Specimen number</strong></td><td>A <strong>single direct smear</strong> misses low-density infection; <strong>three specimens</strong> are standard</td></tr>
      <tr><td><strong>Method</strong></td><td><strong>Concentration</strong>, <strong>trichrome</strong> and <strong>PCR</strong> recover more than a wet mount</td></tr>
      <tr><td><strong>Reporting</strong></td><td>Some laboratories report any visible organism; others use a threshold</td></tr>
      <tr><td><strong>Subtyping</strong></td><td><strong>Local subtype data</strong> are sparse, so regional comparisons rest on morphology alone</td></tr>
    </table></div>
    <h4>A research agenda</h4>
    <ul>
      <li>Multisite prevalence surveys using a <strong>reporting standard</strong> and three concentrated specimens.</li>
      <li>Case–control studies with <strong>asymptomatic controls</strong> matched for age, water source and sanitation.</li>
      <li>Subtype mapping by region, linked to <strong>WASH</strong> exposure and animal contact.</li>
      <li><strong>Microbiome</strong> and immune profiling to test whether the organism marks or causes dysbiosis.</li>
      <li>Pragmatic treatment trials with blinded assessment and parasite clearance as an endpoint.</li>
      <li>Re-analysis of <strong>archived slides</strong> to estimate how much of the historical range is methodological.</li>
    </ul>
    <p>The strongest local contribution is not another prevalence figure but a study that explains why the figures differ. That requires the laboratory, the epidemiologist and the clinician to agree on definitions before sampling begins.</p>
  `,
  tip: "Interpretation before proposal: explain the spread, then design studies that would narrow it.",
  sources: ["P4", "P13", "P14", "P2", "P3"]
},
{
  id: "p9g1", domain: "p9",
  q: "Describe the biology, life cycle and transmission of Sarcoptes scabiei var. hominis.",
  tags: ["Sarcoptes scabiei", "biology", "life cycle", "transmission"],
  keypoints: ["0.2–0.4 mm", "eight legs", "stratum corneum", "burrow", "two to three eggs daily", "three to four days", "10–14 days", "three to six weeks", "sensitivisation", "skin-to-skin contact", "fomites", "crusted scabies", "animal variants", "no vector", "obligate parasite"],
  answer: `
    <h4>The mite</h4>
    <p><em>Sarcoptes scabiei</em> var. <em>hominis</em> is a microscopic, eight-legged mite, roughly <strong>0.2–0.4 mm</strong> long, with a rounded body and short legs. It is an <strong>obligate parasite</strong> of human skin and cannot complete its cycle elsewhere. The female is larger than the male and is the stage usually recovered from a burrow.</p>
    <h4>Life cycle</h4>
    <div class="table-wrap"><table>
      <tr><th>Stage</th><th>Location and timing</th></tr>
      <tr><td>Egg</td><td>Laid in the <strong>stratum corneum</strong>, <strong>two to three eggs daily</strong>; hatch in <strong>three to four days</strong></td></tr>
      <tr><td>Larva</td><td>Six legs; remains in the burrow or adjacent skin</td></tr>
      <tr><td>Nymph</td><td>Two moults; develops over about <strong>10–14 days</strong></td></tr>
      <tr><td>Adult</td><td>Mates on the skin surface; fertilised female burrows and lays eggs</td></tr>
    </table></div>
    <p>A typical host carries only about 10–15 mites, so the burrow is the lesion, not the whole rash. The inflammatory papules and itch are largely a <strong>hypersensitivity</strong> response, which appears <strong>three to six weeks</strong> after first infestation and within days on re-exposure.</p>
    <h4>Transmission</h4>
    <ul>
      <li>Mainly <strong>prolonged skin-to-skin contact</strong> — a handshake or brief touch rarely transmits.</li>
      <li>Sexual contact and bed-sharing are efficient; household transmission is the rule.</li>
      <li><strong>Fomites</strong> matter mainly in <strong>crusted scabies</strong>, where mite numbers are enormous.</li>
      <li>There is <strong>no vector</strong> and no environmental reservoir; the mite survives off the host for roughly one to three days, less in heat.</li>
      <li>Animal variants cause transient, self-limited human lesions and do not sustain human transmission.</li>
    </ul>
    <p>These features explain why treatment must cover all close contacts simultaneously, and why crusted disease requires far more than a single prescription. They also explain why a brief clinic visit is a poor transmission setting and why household clusters are the usual unit of care.</p>
  `,
  tip: "Link each biological fact to a control measure — that turns parasitology into clinical practice.",
  sources: ["P1", "P2", "P4", "P6"]
},
{
  id: "p9g2", domain: "p9", star: true,
  q: "Compare classical and crusted scabies in clinical features, mite burden, contagion and management.",
  tags: ["scabies", "crusted scabies", "Norwegian scabies", "immunosuppression"],
  keypoints: ["10–15 mites", "burrows", "nocturnal itch", "finger webs", "wrists", "areolae", "genitalia", "thousands to millions", "hyperkeratosis", "minimal itch", "HIV", "HTLV-1", "elderly", "Down syndrome", "highly contagious", "combined topical and oral therapy"],
  answer: `
    <h4>Classical scabies</h4>
    <p>Classical scabies carries about <strong>10–15 mites</strong>. The primary lesion is a fine <strong>burrow</strong> in the stratum corneum, with erythematous papules, excoriations and sometimes vesicles. The itch is intense and <strong>nocturnal</strong>, and the distribution favours <strong>finger webs</strong>, <strong>wrists</strong>, axillae, areolae, umbilicus, buttocks and <strong>genitalia</strong>. Infants and the elderly may have atypical sites. Secondary bacterial infection is common.</p>
    <h4>Crusted scabies</h4>
    <p>Crusted (Norwegian) scabies is a hyperinfestation with <strong>thousands to millions</strong> of mites. The skin shows thick, fissured, grey-white <strong>hyperkeratosis</strong> on the hands, feet, nails, scalp and pressure areas. <strong>Itch may be minimal</strong>, which delays diagnosis. Risk groups include people with <strong>HIV</strong>, <strong>HTLV-1</strong>, immunosuppressive therapy or transplant, the <strong>elderly</strong>, malnourished children and people with <strong>Down syndrome</strong>. Because the mite burden is huge, crusted scabies is <strong>highly contagious</strong> through brief contact and fomites, and it seeds institutional outbreaks.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Classical</th><th>Crusted</th></tr>
      <tr><td>Mite number</td><td>10–15</td><td>Thousands to millions</td></tr>
      <tr><td>Lesions</td><td>Burrows, papules, excoriations</td><td>Hyperkeratotic plaques, fissures, nail dystrophy</td></tr>
      <tr><td>Itch</td><td>Intense, nocturnal</td><td>Often minimal or absent</td></tr>
      <tr><td>Contagion</td><td>Prolonged contact</td><td>Brief contact and fomites</td></tr>
      <tr><td>Host</td><td>Healthy or atopic</td><td>Immunocompromised, elderly, malnourished</td></tr>
      <tr><td>Treatment</td><td>Topical or oral, repeat at day 7</td><td><strong>Combined topical and oral</strong>, repeated; isolate; treat contacts</td></tr>
    </table></div>
    <h4>Why the distinction matters</h4>
    <p>Missing crusted scabies turns a treatable dermatosis into a ward-wide outbreak. Any widespread hyperkeratotic eruption in an immunosuppressed patient should prompt scraping, isolation and a low threshold for empirical treatment while results are pending. Classical scabies in infants may instead show vesicles, pustules and involvement of the scalp and face, so the same diagnosis can look very different across the age range.</p>
  `,
  tip: "The table is the answer; add one sentence on why missing crusted disease is a patient-safety failure.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p9g3", domain: "p9",
  q: "Compare the methods used to diagnose scabies and explain how dermoscopy and PCR change practice.",
  tags: ["scabies", "diagnosis", "skin scraping", "dermoscopy", "PCR"],
  keypoints: ["clinical diagnosis", "mineral oil", "skin scraping", "mites", "eggs", "scybala", "burrow ink test", "dermoscopy", "delta-wing jet", "adhesive tape", "PCR", "crusted scabies", "outbreak", "IACS criteria", "operator dependence", "differential diagnosis"],
  answer: `
    <h4>Clinical diagnosis</h4>
    <p>Scabies is often diagnosed clinically from the history of <strong>nocturnal itch</strong>, household cases and the typical distribution. The 2020 International Alliance for the Control of Scabies (<strong>IACS</strong>) criteria separate confirmed, clinical and suspected cases, and they make the point that a confident clinical diagnosis is legitimate where microscopy is unavailable.</p>
    <h4>Direct methods</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Technique</th><th>Strengths and limits</th></tr>
      <tr><td><strong>Skin scraping</strong></td><td>Mineral oil on a scalpel blade; scrape an intact burrow; examine unstained</td><td>Shows <strong>mites</strong>, <strong>eggs</strong> and <strong>scybala</strong>; <strong>operator-dependent</strong> and insensitive in classical disease</td></tr>
      <tr><td><strong>Burrow ink test</strong></td><td>Ink applied to a burrow, then wiped</td><td>Quick and cheap; messy and non-specific</td></tr>
      <tr><td><strong>Adhesive tape</strong></td><td> tape applied to lesions and examined</td><td>Useful in children and crusted disease; lower yield</td></tr>
      <tr><td><strong>Dermoscopy</strong></td><td>Handheld dermatoscope</td><td>Shows the <strong>delta-wing jet</strong> sign; rapid, non-invasive, needs training</td></tr>
      <tr><td><strong>PCR</strong></td><td>Lesion swab or scraping</td><td>Most sensitive; confirms <strong>crusted scabies</strong> and <strong>outbreaks</strong>; costly and slow</td></tr>
    </table></div>
    <h4>What the newer tests change</h4>
    <p><strong>Dermoscopy</strong> moves diagnosis to the bedside: the burrow appears as a dark triangular structure with a thin wavy trail, the "<strong>delta-wing jet</strong>". It reduces unnecessary scraping and helps choose the best lesion. <strong>PCR</strong> is valuable when mites are few, when the presentation is atypical, and when an institution needs to confirm an outbreak quickly; it does not replace clinical judgement and is not a test of cure.</p>
    <h4>The differential</h4>
    <p>Eczema, contact dermatitis, dermatitis herpetiformis, folliculitis, tinea, insect bites, drug eruption and cutaneous lymphoma can mimic scabies. A negative scraping does not exclude the diagnosis, and a therapeutic trial with contact treatment is often the practical next step.</p>
  `,
  tip: "State the sensitivity problem plainly: one negative scraping never excludes scabies.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p9g4", domain: "p9", star: true,
  q: "Compare topical and oral treatment for scabies and design a treatment plan for an adult with classical scabies.",
  tags: ["scabies", "permethrin", "ivermectin", "treatment", "contacts"],
  keypoints: ["permethrin 5%", "neck down", "8–14 hours", "repeat day 7", "ivermectin 200 µg/kg", "two doses", "15 kg", "benzyl benzoate", "sulfur 10%", "pregnancy", "infants", "treat contacts", "launder 60 °C", "persistent itch", "crusted scabies", "resistance"],
  answer: `
    <h4>Topical versus oral</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th>Permethrin 5%</th><th>Oral ivermectin</th></tr>
      <tr><td>Role</td><td>First-line for classical scabies</td><td>First-line alternative; essential in crusted disease and outbreaks</td></tr>
      <tr><td>Regimen</td><td><strong>Neck down</strong>, wash off after <strong>8–14 hours</strong>; repeat at <strong>day 7</strong></td><td><strong>200 µg/kg</strong> orally; second dose at day 7 (day 14 in crusted disease)</td></tr>
      <tr><td>Advantages</td><td>Safe in pregnancy and infancy; no systemic absorption</td><td>Single-visit adherence; treats all sites; useful in institutions</td></tr>
      <tr><td>Cautions</td><td>Stinging; apply to scalp and face in infants</td><td>Not below <strong>15 kg</strong>; caution in pregnancy; avoid in <em>Loa loa</em> co-endemic areas</td></tr>
    </table></div>
    <p><strong>Benzyl benzoate 25%</strong> is an inexpensive alternative but irritates. <strong>Sulfur 10% in petrolatum</strong> is used for infants and pregnancy where permethrin is unavailable. Crotamiton is less effective. Antihistamines help the itch but do not treat the mite.</p>
    <h4>A plan for an adult with classical scabies</h4>
    <ol>
      <li>Confirm the diagnosis and examine all household members, including asymptomatic contacts.</li>
      <li>Apply <strong>permethrin 5%</strong> from the neck down, including under nails and between toes; wash off after 8–14 hours.</li>
      <li>Repeat at <strong>day 7</strong>; give ivermectin instead if adherence is doubtful or the disease is extensive.</li>
      <li><strong>Treat contacts</strong> on the same day, even if they have no symptoms.</li>
      <li><strong>Launder</strong> bedding and clothing at <strong>60 °C</strong>, or seal them in a bag for 72 hours; vacuum soft furnishings.</li>
      <li>Warn that <strong>persistent itch</strong> may last two to four weeks after successful treatment.</li>
    </ol>
    <p>Crusted scabies needs <strong>combined topical and oral therapy</strong>, repeated, plus isolation and environmental cleaning. Treatment failure usually means missed contacts, poor application or reinfection — not automatically <strong>resistance</strong>.</p>
  `,
  tip: "The plan must include contacts and laundering; a drug-only answer is incomplete.",
  sources: ["P1", "P2", "P6", "P4"]
},
{
  id: "p9g5", domain: "p9",
  q: "An outbreak of scabies occurs in a long-term care facility. Outline the investigation and control measures.",
  tags: ["scabies", "outbreak", "long-term care", "infection control"],
  keypoints: ["case definition", "line list", "attack rate", "crusted index case", "delayed diagnosis", "cohorted", "contact precautions", "mass treatment", "permethrin", "ivermectin", "staff", "fomites", "two incubation periods", "communication", "repeat treatment"],
  answer: `
    <h4>Why institutions amplify scabies</h4>
    <p>Long-term care facilities combine crowded living, frail skin, shared bedding and frequent staff contact. A single <strong>crusted index case</strong> can seed dozens of infections before the rash is recognised, and <strong>delayed diagnosis</strong> is the usual reason an outbreak is large. Staff movement between wards extends it further.</p>
    <h4>Investigation</h4>
    <ul>
      <li>Write a <strong>case definition</strong> (confirmed, clinical, suspected) using IACS criteria.</li>
      <li>Build a <strong>line list</strong> of residents and staff with onset, ward, room and contact history.</li>
      <li>Calculate the <strong>attack rate</strong> by ward and look for a clustering pattern around the index case.</li>
      <li>Examine all residents, including those without itch; scrape hyperkeratotic lesions to find crusted disease.</li>
      <li>Check whether rooms, laundry and shared equipment are implicated.</li>
    </ul>
    <h4>Control measures</h4>
    <div class="table-wrap"><table>
      <tr><th>Measure</th><th>Action</th></tr>
      <tr><td>Isolation</td><td><strong>Cohort</strong> cases; contact precautions until 24 hours after effective treatment; single room for crusted cases</td></tr>
      <tr><td>Treatment</td><td><strong>Mass treatment</strong> of all residents and staff on the same day; permethrin 5% or oral ivermectin, repeated at day 7</td></tr>
      <tr><td>Environment</td><td>Launder bedding and clothing at 60 °C; bag non-washable items for 72 hours; clean shared equipment</td></tr>
      <tr><td>Staff</td><td>Treat affected staff and exclude until treated; screen agency and night staff</td></tr>
      <tr><td>Communication</td><td>Inform families and receiving facilities; document the plan and consent</td></tr>
    </table></div>
    <h4>Declaring the outbreak over</h4>
    <p>Continue surveillance for at least <strong>two incubation periods</strong> after the last case is treated, and re-treat anyone with new lesions. Closing the facility is rarely necessary and usually harmful. The durable fix is a skin-surveillance routine, a supply of permethrin, and a named infection-control lead who screens new admissions.</p>
  `,
  tip: "Mass treatment plus simultaneous contact coverage is the decisive step; isolation alone fails.",
  sources: ["P2", "P3", "P6", "P1"]
},
{
  id: "p9g6", domain: "p9",
  q: "Explain post-scabetic nodules and the bacterial complications of scabies, and how they alter management.",
  tags: ["scabies", "nodular scabies", "secondary infection", "impetigo", "glomerulonephritis"],
  keypoints: ["persistent nodules", "genitalia", "axillae", "hypersensitivity", "mite antigen", "no live mites", "weeks to months", "topical steroid", "intralesional steroid", "Staphylococcus aureus", "Streptococcus pyogenes", "impetigo", "cellulitis", "bacteraemia", "post-streptococcal glomerulonephritis", "antibiotics"],
  answer: `
    <h4>Post-scabetic nodules</h4>
    <p>Nodular scabies presents as firm, red-brown, intensely itchy <strong>nodules</strong> on the <strong>genitalia</strong>, groin, <strong>axillae</strong> and buttocks. They are a <strong>hypersensitivity</strong> reaction to retained <strong>mite antigen</strong> and keratin, not a sign of continuing infestation; scrapings usually show <strong>no live mites</strong>. Nodules can persist for <strong>weeks to months</strong> after adequate treatment, which frightens patients and tempts repeated courses of scabicide.</p>
    <p>Management is explanation plus a potent <strong>topical steroid</strong>; resistant lesions may need <strong>intralesional steroid</strong> or a short course of oral prednisolone. Re-treatment is justified only if new burrows, household cases or a positive scraping indicate reinfection.</p>
    <h4>Secondary bacterial infection</h4>
    <p>Excoriated skin is readily colonised by <strong>Staphylococcus aureus</strong> and <strong>Streptococcus pyogenes</strong>. The spectrum runs from <strong>impetigo</strong> and folliculitis to <strong>cellulitis</strong>, abscess, lymphangitis and, in the frail or immunosuppressed, <strong>bacteraemia</strong> and sepsis. Group A streptococcal skin infection can be followed by <strong>post-streptococcal glomerulonephritis</strong>, and repeated episodes are linked to rheumatic fever in some populations.</p>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Clue</th><th>Action</th></tr>
      <tr><td>Nodules</td><td>Firm, itchy, no burrow, prior scabies</td><td>Topical or intralesional steroid; do not re-treat blindly</td></tr>
      <tr><td>Impetigo</td><td>Honey-coloured crusts</td><td>Topical or oral anti-staphylococcal agent</td></tr>
      <tr><td>Cellulitis</td><td>Warmth, swelling, fever</td><td>Systemic antibiotic covering streptococci and staphylococci</td></tr>
      <tr><td>APSGN</td><td>Haematuria, oedema, hypertension after skin infection</td><td>Urinalysis, blood pressure, renal function; refer</td></tr>
    </table></div>
    <h4>How this changes management</h4>
    <p>Treat the infestation, the contacts and the bacteria together. Look for bacterial infection at every scabies consultation, and check urine and blood pressure in children after extensive impetiginised disease. Distinguishing nodules from active scabies prevents both undertreatment of infection and overtreatment of a resolved infestation.</p>
  `,
  tip: "Say clearly that nodules contain no live mites — that single fact prevents unnecessary re-treatment.",
  sources: ["P1", "P2", "P4", "P3"]
},
{
  id: "p9g7", domain: "p9",
  q: "Discuss scabies as a public-health problem in the Philippines and the elements of a national control strategy.",
  tags: ["scabies", "Philippines", "public health", "neglected tropical disease", "control"],
  keypoints: ["crowding", "urban poor", "prisons", "boarding schools", "Indigenous peoples", "care homes", "WHO NTD 2017", "not notifiable", "passive surveillance", "prevalence mapping", "mass drug administration", "10% threshold", "ivermectin", "permethrin", "WASH", "health education"],
  answer: `
    <h4>Why scabies is a public-health problem</h4>
    <p>Scabies is common wherever <strong>crowding</strong> and limited water are found: urban poor settlements, <strong>prisons</strong>, boarding schools, military barracks, residential care homes and some <strong>Indigenous peoples</strong> communities. It causes sleep loss, school absence, stigma and secondary bacterial infection, and its complications include cellulitis and <strong>post-streptococcal glomerulonephritis</strong>. WHO added scabies to the <strong>neglected tropical disease</strong> list in <strong>2017</strong>, recognising that the burden is concentrated in poor communities.</p>
    <h4>The surveillance gap</h4>
    <p>Scabies is <strong>not notifiable</strong> in the Philippines, so national counts do not exist. Data come from clinic series, school surveys and outbreak reports, and <strong>passive surveillance</strong> captures only people who seek care. A laboratory that does not scrape, and a clinic that does not record, both make the disease invisible.</p>
    <h4>Elements of a control strategy</h4>
    <div class="table-wrap"><table>
      <tr><th>Element</th><th>Action</th></tr>
      <tr><td><strong>Prevalence mapping</strong></td><td>School and facility surveys with a standard case definition</td></tr>
      <tr><td><strong>Case and contact treatment</strong></td><td>Treat the patient and all household contacts on the same day</td></tr>
      <tr><td><strong>Mass drug administration</strong></td><td>Community-wide treatment where prevalence is about <strong>10% or more</strong>, using <strong>ivermectin</strong> or <strong>permethrin</strong></td></tr>
      <tr><td><strong>Supply and training</strong></td><td>Ensure permethrin availability and train barangay health workers to recognise and treat</td></tr>
      <tr><td><strong>WASH and housing</strong></td><td>Water, sanitation, laundry and decongestion as long-term prevention</td></tr>
      <tr><td><strong>Integration</strong></td><td>Combine with skin-NTD and school-health programmes rather than a vertical campaign</td></tr>
    </table></div>
    <p><strong>Health education</strong> must address the belief that scabies reflects poor hygiene; it is a parasite, not a moral failing. A feasible Philippine strategy starts with sentinel surveillance in prisons and schools, a guaranteed permethrin supply, and same-day contact treatment, then scales to MDA where mapping justifies it.</p>
  `,
  tip: "Name the structural determinants first, then the programme — this is a public-health answer, not a drug list.",
  sources: ["P4", "P6", "P9", "P13", "P14"]
}
);
