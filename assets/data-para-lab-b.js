/* Parasitology — part 5: laboratory technique, vectors, quality and control programmes */
window.QBANK.push(
{
  id: "pa154", domain: "para-lab", star: true,
  q: "Describe the direct wet mount examination of stool and other specimens: preparation, what saline and iodine mounts show, and the limitations that determine when it must be supplemented.",
  tags: ["direct wet mount", "saline mount", "iodine mount", "motility"],
  keypoints: ["direct wet mount", "0.85% saline", "2 mg", "coverslip", "×100 and ×400", "motility", "Lugol's iodine", "glycogen", "kills trophozoites", "within 30 minutes", "three specimens", "concentration", "permanent stained smear", "low sensitivity", "E. histolytica", "E. dispar"],
  answer: `
    <h4>Principle and preparation</h4>
    <p>The <strong>direct wet mount</strong> is the simplest parasitological examination. A small amount of fresh stool, about <strong>2 mg</strong>, is emulsified in one drop of <strong>0.85% saline</strong> on a clean slide, covered with a <strong>coverslip</strong>, and examined first at <strong>×100 and ×400</strong>. Saline preserves <strong>motility</strong>, so it is the mount for living trophozoites. A second mount uses <strong>Lugol's iodine</strong> or D'Antoni's iodine: iodine stains <strong>glycogen</strong> brown and outlines nuclei, but it <strong>kills trophozoites</strong>, so it is used for cyst structure rather than for movement.</p>
    <h4>What each mount shows</h4>
    <ul>
      <li><strong>Saline:</strong> motile trophozoites of <em>Entamoeba histolytica</em>, <em>Giardia</em> and <em>Trichomonas</em>; eggs and larvae; cysts; red and white cells; Charcot–Leyden crystals; artefacts such as pollen, starch and air bubbles.</li>
      <li><strong>Iodine:</strong> number and position of nuclei, glycogen masses and chromatoid bodies; useful for separating the eight-nucleate cyst of <em>Entamoeba coli</em> from the four-nucleate cyst of <em>E. histolytica</em>.</li>
    </ul>
    <h4>Timing and technical care</h4>
    <p>A liquid stool must be examined <strong>within 30 minutes</strong>; a semi-formed stool within one hour; a formed stool within 24 hours or preserved at once. The smear should be thin enough to read newsprint through it. Too thick a mount obscures small cysts, too thin a mount dries during scanning, excess iodine masks internal detail, and contamination with urine, water or soil introduces confusing free-living organisms.</p>
    <h4>Limitations and clinical place</h4>
    <p>Because only about 2 mg is examined, the mount has <strong>low sensitivity</strong> and is a screening test, not a stand-alone diagnosis. Negative mounts must be followed by <strong>concentration</strong>, a <strong>permanent stained smear</strong> and, where indicated, antigen or molecular testing. <strong>Three specimens</strong> on alternate days are still required because shedding is intermittent. The wet mount remains valuable at the bedside in acute dysentery, for vaginal and urine specimens, and for aspirates where motile trophozoites are the key finding. Morphology cannot separate <strong>E. histolytica</strong> from <strong>E. dispar</strong>, so report the pair and confirm with antigen or PCR.</p>
  `,
  tip: "State the amount, the two mounts and the 30-minute rule first — then explain why a negative wet mount never excludes infection.",
  sources: ["P2", "P3", "P11"]
},
{
  id: "pa155", domain: "para-lab", star: true,
  q: "Compare formalin–ethyl acetate sedimentation with zinc sulfate flotation for stool concentration. Explain the principle, procedure, performance and correct selection of each method.",
  tags: ["formalin-ethyl acetate sedimentation", "zinc sulfate flotation", "concentration", "Mini-FLOTAC"],
  keypoints: ["formalin-ethyl acetate sedimentation", "500 × g for 10 minutes", "ethyl acetate", "four layers", "zinc sulfate", "specific gravity 1.18-1.20", "operculated eggs", "unfertilised Ascaris eggs", "surface film", "sediment", "Mini-FLOTAC", "Sheather's sugar", "Kato-Katz", "cleaner background", "routine method"],
  answer: `
    <h4>Why concentrate</h4>
    <p>A direct mount examines only about 2 mg of stool. Concentration increases the number of parasites per field and removes debris, improving recovery of eggs, cysts, oocysts and larvae. Two physical principles are used: <strong>sedimentation</strong>, in which parasites sink, and flotation, in which they rise in a solution of higher specific gravity.</p>
    <h4>Formalin–ethyl acetate sedimentation</h4>
    <ol>
      <li>Emulsify stool in 10% formalin and strain through gauze to remove large debris.</li>
      <li>Centrifuge at <strong>500 × g for 10 minutes</strong> and discard the supernatant.</li>
      <li>Add <strong>ethyl acetate</strong>, shake vigorously and centrifuge again.</li>
      <li>Read the <strong>four layers</strong>: ethyl acetate, a debris plug, formalin and the <strong>sediment</strong>; examine the sediment.</li>
    </ol>
    <p>This is the <strong>routine method</strong> of choice for a comprehensive O&amp;P because it recovers most eggs and cysts, including <strong>operculated eggs</strong>, schistosome eggs and heavy <strong>unfertilised Ascaris eggs</strong>. Ethyl acetate extracts fat and gives a reasonably clean field, although it does not quantify the parasite load.</p>
    <h4>Zinc sulfate flotation</h4>
    <p><strong>Zinc sulfate</strong> at <strong>specific gravity 1.18-1.20</strong> is used for centrifugal flotation. The <strong>surface film</strong> is transferred to a slide and examined; the <strong>sediment</strong> should also be checked because some parasites do not float. Flotation gives a <strong>cleaner background</strong> and preserves cyst morphology well, but <strong>operculated eggs</strong> and heavy <strong>unfertilised Ascaris eggs</strong> may fail to rise or may collapse. It is therefore less suitable as the sole method for a complete helminth survey.</p>
    <h4>Selection and quality control</h4>
    <p>Use sedimentation for routine diagnosis, flotation when clean protozoan morphology is the priority, and <strong>Sheather's sugar</strong> flotation for coccidian oocysts. <strong>Mini-FLOTAC</strong> and FLOTAC are quantitative flotation devices useful in field surveys, while <strong>Kato-Katz</strong> remains the standard for eggs per gram. Check the specific gravity with a hydrometer, calibrate the centrifuge, run known positive controls and state the method on the report, because results are method-dependent.</p>
  `,
  tip: "Contrast 'everything sinks' with 'light eggs float' — then name the eggs that flotation misses.",
  sources: ["P2", "P11", "P3"]
},
{
  id: "pa156", domain: "para-lab",
  q: "Describe the blood film techniques used to diagnose parasitic infections other than malaria, including timing, concentration methods and staining.",
  tags: ["blood film", "microfilariae", "Knott's concentration", "buffy coat"],
  keypoints: ["thick and thin films", "Giemsa pH 7.2", "methanol fixation", "nocturnal periodicity", "22:00 and 02:00", "Knott's concentration", "2% formalin", "5 µm membrane filtration", "buffy coat", "microfilariae", "sheath", "Delafield's haematoxylin", "Loa loa", "diurnal", "trypanosomes"],
  answer: `
    <h4>Specimens and timing</h4>
    <p>Venous blood in EDTA or capillary blood from a fingerprick is used for <strong>thick and thin films</strong>. Timing is decisive for filarial infections because of <strong>nocturnal periodicity</strong>: <em>Wuchereria bancrofti</em> and <em>Brugia malayi</em> are best sampled between <strong>22:00 and 02:00</strong>, whereas <em>Loa loa</em> is <strong>diurnal</strong> and sampled around midday. Record the collection time and the patient's local time, because travel and reversed sleep can shift periodicity.</p>
    <h4>Films and concentration methods</h4>
    <ul>
      <li><strong>Thick film:</strong> several drops spread over about 1 cm, dried, not fixed, and stained so that red cells lyse. It is sensitive for <strong>microfilariae</strong>, although the <strong>sheath</strong> may be distorted.</li>
      <li><strong>Thin film:</strong> a feathered monolayer, fixed in <strong>methanol fixation</strong> and stained; best for species identification, sheath and nuclei, and for <strong>trypanosomes</strong>.</li>
      <li><strong>Knott's concentration:</strong> mix 1 mL blood with 9 mL <strong>2% formalin</strong>, centrifuge and examine the sediment; concentrates microfilariae and preserves morphology.</li>
      <li><strong>5 µm membrane filtration</strong> of venous blood through a polycarbonate filter, then stain and count; useful for low-density filariasis.</li>
      <li><strong>Buffy coat</strong> from a centrifuged microhaematocrit tube or EDTA sample concentrates trypanosomes and <em>Leishmania</em>; examine a wet mount and a Giemsa smear.</li>
    </ul>
    <h4>Staining and microscopy</h4>
    <p>Use <strong>Giemsa pH 7.2</strong> for routine work, Field's stain for rapid field diagnosis, and <strong>Delafield's haematoxylin</strong> when the sheath and nuclei of microfilariae must be defined. Scan the whole film at low power, then examine 100–200 oil-immersion fields before reporting a negative. Common errors are delay before staining, films that are too thick, inadequate methanol fixation, pH drift, and mistaking platelets, fibrin strands or stain precipitate for parasites.</p>
    <h4>Clinical value</h4>
    <p>These techniques diagnose lymphatic filariasis, loiasis, African and American trypanosomiasis and babesiosis. Buffy coat examination is also a rapid route to visceral leishmaniasis. Malaria has its own diagnostic algorithm, but the same film skills underpin it, so a well-made film serves every blood parasite.</p>
  `,
  tip: "Anchor the answer on periodicity: nocturnal for W. bancrofti and B. malayi, diurnal for Loa loa.",
  sources: ["P2", "P3", "P7"]
},
{
  id: "pa157", domain: "para-lab", star: true,
  q: "Discuss rapid antigen detection tests in parasitology: formats, clinical applications, interpretation and the quality assurance needed before they can be trusted.",
  tags: ["rapid antigen test", "HRP2", "point-of-care", "lot testing"],
  keypoints: ["lateral flow", "HRP2", "pLDH", "persists after cure", "pfhrp2/3 gene deletions", "prozone", "rheumatoid factor", "Gal/GalNAc lectin", "circulating cathodic antigen", "current infection", "internal control line", "lot testing", "storage temperature", "reading time"],
  answer: `
    <h4>Formats and targets</h4>
    <p>Most rapid tests are <strong>lateral flow</strong> immunochromatographic devices, with enzyme immunoassay and direct fluorescent antibody formats used in larger laboratories. Malaria tests detect <strong>HRP2</strong> (specific for <em>P. falciparum</em>), <strong>pLDH</strong> (pan-species or species-specific) or aldolase. Stool tests detect <em>Giardia</em>, <em>Cryptosporidium</em> and the <strong>Gal/GalNAc lectin</strong> of <em>E. histolytica</em>, which separates it from <em>E. dispar</em>. Filarial antigen tests and the schistosome <strong>circulating cathodic antigen</strong> urine test support control programmes.</p>
    <h4>Clinical applications</h4>
    <ul>
      <li>Bedside diagnosis where microscopy is unavailable or delayed, especially malaria and acute diarrhoea.</li>
      <li>Detection of <strong>current infection</strong>, because antigen disappears after cure — unlike antibody.</li>
      <li>Outbreak screening and prevalence mapping, for example CCA in schistosomiasis surveys.</li>
      <li>Rapid exclusion of <em>E. histolytica</em> as the cause of dysentery, avoiding unnecessary treatment of <em>E. dispar</em> carriers.</li>
    </ul>
    <h4>Interpretation pitfalls</h4>
    <ul>
      <li><strong>HRP2 persists after cure</strong> for two to four weeks, so it cannot confirm treatment success; pLDH clears faster.</li>
      <li><strong>pfhrp2/3 gene deletions</strong> produce false-negative HRP2 tests in some parasites.</li>
      <li><strong>Prozone</strong> at very high parasitaemia causes false negatives, and <strong>rheumatoid factor</strong> can cause false positives.</li>
      <li>Storage above the recommended <strong>storage temperature</strong>, expired kits, a missed <strong>reading time</strong> and faint lines all mislead.</li>
      <li>A visible <strong>internal control line</strong> is required before a negative result is accepted.</li>
    </ul>
    <h4>Quality assurance</h4>
    <p>Choose products that have passed <strong>lot testing</strong>, such as the WHO malaria product testing programme. Run positive and negative controls with each new lot, record lot number and expiry, train operators, and compare a sample of results with microscopy or PCR. Antigen tests supplement microscopy: they are fast and simple but less sensitive in low-density infection and cannot assess parasite morphology or drug resistance.</p>
  `,
  tip: "Say 'antigen means current infection' — then give HRP2 persistence and gene deletion as the two classic traps.",
  sources: ["P7", "P2", "P3"]
},
{
  id: "pa158", domain: "para-lab", star: true,
  q: "Discuss the use of PCR and other nucleic acid amplification tests in diagnostic parasitology, including workflow, controls, interpretation and validation.",
  tags: ["PCR", "molecular diagnostics", "LAMP", "validation"],
  keypoints: ["real-time PCR", "multiplex", "LAMP", "18S rRNA", "internal amplification control", "inhibitors", "limit of detection", "unidirectional workflow", "contamination", "DNA persists after cure", "viability", "species identification", "dried blood spots", "external quality assessment", "quantitative PCR"],
  answer: `
    <h4>Methods and targets</h4>
    <p>Molecular parasitology uses conventional PCR, <strong>real-time PCR</strong> with fluorescent probes, <strong>multiplex</strong> panels, loop-mediated isothermal amplification (<strong>LAMP</strong>), digital PCR and sequencing. Common targets are the <strong>18S rRNA</strong> gene, internal transcribed spacers, mitochondrial <em>cox1</em> and repetitive elements. Acceptable specimens include EDTA blood, stool, urine, tissue, cerebrospinal fluid and <strong>dried blood spots</strong>.</p>
    <h4>Workflow and contamination control</h4>
    <ol>
      <li>Extract nucleic acid, using bead beating for robust cysts and oocysts.</li>
      <li>Follow a <strong>unidirectional workflow</strong>: reagent preparation, extraction, amplification and detection in separate areas with dedicated equipment.</li>
      <li>Include a negative extraction control, a positive control and an <strong>internal amplification control</strong> in every run.</li>
      <li>Use uracil-N-glycosylase and fresh bleach surfaces to limit <strong>contamination</strong>; never open amplified tubes in the clean area.</li>
    </ol>
    <h4>Interpretation and limitations</h4>
    <ul>
      <li>Highest sensitivity and specificity, with reliable <strong>species identification</strong> and detection of low-density infection.</li>
      <li><strong>DNA persists after cure</strong>, so a positive result does not prove <strong>viability</strong>; <strong>quantitative PCR</strong> and repeat testing help.</li>
      <li><strong>Inhibitors</strong> in stool and blood — haem, bile salts, polysaccharides — cause false negatives; dilute, use inhibitor-resistant polymerase or an internal control to detect them.</li>
      <li>Syndromic panels detect only the targets included and often omit helminths, so a negative panel does not replace O&amp;P.</li>
      <li>Cost, infrastructure and contamination risk limit routine use to reference and tertiary laboratories.</li>
    </ul>
    <h4>Validation and clinical use</h4>
    <p>Before clinical use, establish the <strong>limit of detection</strong> with replicate dilutions, precision, analytical specificity and concordance with microscopy, then join an <strong>external quality assessment</strong> scheme. Molecular tests confirm <em>Plasmodium</em> species and detect <em>pfhrp2</em>-deleted parasites, investigate chronic diarrhoea in immunocompromised patients, and support the diagnosis of neurocysticercosis, congenital toxoplasmosis and leishmaniasis. Report the method and an interpretive comment, and remember that microscopy remains necessary for morphology and quantification.</p>
  `,
  tip: "The examiner wants controls and interpretation, not just 'PCR is sensitive' — mention the internal amplification control and DNA persistence.",
  sources: ["P2", "P3", "P11"]
},
{
  id: "pa159", domain: "para-lab",
  q: "Discuss the interpretation of serological tests in parasitic disease, including predictive value, cross-reactions and the limits of antibody detection.",
  tags: ["serology", "predictive value", "cross-reaction", "immunoblot"],
  keypoints: ["antibody indicates exposure", "IgG persists for years", "fourfold rise", "paired sera", "cross-reactions", "positive predictive value", "prevalence", "immunoblot", "EITB", "IgG avidity", "active infection", "pretest probability", "confirmatory test", "tissue helminths"],
  answer: `
    <h4>What antibody tests measure</h4>
    <p>ELISA, indirect haemagglutination, immunofluorescence and <strong>immunoblot</strong> detect antibody, which <strong>antibody indicates exposure</strong> rather than active disease. <strong>IgG persists for years</strong> after cure, so a single positive result cannot distinguish current from past infection. A <strong>fourfold rise</strong> between <strong>paired sera</strong>, or documented seroconversion, is stronger evidence of recent infection. IgM is useful mainly for toxoplasmosis, where <strong>IgG avidity</strong> helps date infection.</p>
    <h4>Choosing and confirming the test</h4>
    <div class="table-wrap"><table>
      <tr><th>Infection</th><th>Preferred serology</th><th>Comment</th></tr>
      <tr><td>Cysticercosis</td><td><strong>EITB</strong> with lentil-lectin purified glycoproteins</td><td>Highly specific; may be negative with a single lesion</td></tr>
      <tr><td>Echinococcosis</td><td>ELISA, confirmed by <strong>immunoblot</strong> (antigen B, arc 5)</td><td>Less sensitive for lung and calcified cysts</td></tr>
      <tr><td>Toxocariasis</td><td>TES-antigen ELISA</td><td>Stool examination is unhelpful</td></tr>
      <tr><td>Strongyloidiasis</td><td>IgG ELISA</td><td>Screening before steroids</td></tr>
      <tr><td>Schistosomiasis</td><td>ELISA, with antigen tests</td><td>Useful in travellers; stays positive after cure</td></tr>
      <tr><td>Toxoplasmosis</td><td>IgG, IgM and avidity</td><td>Avidity distinguishes recent from distant infection</td></tr>
    </table></div>
    <h4>Interpretation traps</h4>
    <ul>
      <li><strong>Cross-reactions</strong> are common among helminths; a positive screen needs a specific <strong>confirmatory test</strong>.</li>
      <li><strong>Positive predictive value</strong> depends on <strong>prevalence</strong> and <strong>pretest probability</strong>. Illustratively, with 90% sensitivity and 95% specificity at 1% prevalence, only about 15% of positives are true positives.</li>
      <li>Immunosuppression blunts antibody responses, so use direct detection in HIV and transplant patients.</li>
      <li>A positive result cannot prove <strong>active infection</strong>; antigen detection or PCR is needed for that.</li>
      <li>Serology is most useful for <strong>tissue helminths</strong> that cannot be reached by microscopy.</li>
    </ul>
    <p>Report the method and cut-off, state whether IgG or IgM was measured, interpret against the clinical setting, and recommend confirmation. Do not screen asymptomatic low-risk people, because false positives cause anxiety and unnecessary treatment.</p>
  `,
  tip: "Bring in predictive value with a small worked example — it separates a Master's answer from a list of tests.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa160", domain: "para-lab",
  q: "Discuss parasite culture and animal inoculation in the diagnostic laboratory: media, conditions, clinical value and the ethical and safety framework.",
  tags: ["culture", "NNN medium", "xenodiagnosis", "animal inoculation"],
  keypoints: ["Novy-MacNeal-Nicolle", "promastigotes", "22–26 °C", "non-nutrient agar", "Escherichia coli", "xenodiagnosis", "triatomine", "Diamond's medium", "tissue culture", "golden hamster", "3Rs", "biosafety", "low sensitivity", "LIT medium"],
  answer: `
    <h4>Parasite culture</h4>
    <ul>
      <li><strong><em>Leishmania</em>:</strong> <strong>Novy-MacNeal-Nicolle</strong> medium — a rabbit-blood agar slope with saline overlay — or <strong>LIT medium</strong>. Incubate at <strong>22–26 °C</strong>; <strong>promastigotes</strong> appear in three to seven days from bone marrow, splenic aspirate or skin biopsy.</li>
      <li><strong><em>Trypanosoma cruzi</em>:</strong> LIT or NNN medium yields epimastigotes; blood culture is more sensitive than direct microscopy in chronic disease.</li>
      <li><strong><em>Trichomonas vaginalis</em>:</strong> <strong>Diamond's medium</strong> or the InPouch TV system; culture is now largely replaced by nucleic acid amplification.</li>
      <li><strong>Free-living amoebae:</strong> <strong>non-nutrient agar</strong> seeded with <strong>Escherichia coli</strong>; trophozoites feed on the bacteria and form tracks, then encyst.</li>
      <li><strong><em>Toxoplasma gondii</em>:</strong> <strong>tissue culture</strong> in Vero cells, or mouse inoculation historically; PCR is now preferred for diagnosis.</li>
    </ul>
    <h4>Animal inoculation and xenodiagnosis</h4>
    <p>The <strong>golden hamster</strong> is the classical model for isolating <em>Leishmania</em>; mice are used for <em>T. cruzi</em> and <em>Toxoplasma</em>. <strong>Xenodiagnosis</strong> allows laboratory-reared <strong>triatomine</strong> bugs to feed on a patient and later examines their faeces for trypanosomes; it has <strong>low sensitivity</strong> and is obsolete where PCR is available. Animal work requires institutional approval, the <strong>3Rs</strong> — replacement, reduction and refinement — trained staff and appropriate <strong>biosafety</strong> containment.</p>
    <h4>Clinical value and limitations</h4>
    <p>Culture confirms viability, provides material for species identification, drug susceptibility testing and research. It is slow, contamination-prone and less sensitive than molecular methods, so it is reserved for reference laboratories. Culture of <em>Leishmania</em> from a splenic or bone marrow aspirate remains useful when PCR is unavailable, and culture of <em>T. vaginalis</em> is a backup in settings without NAAT.</p>
    <h4>Safety</h4>
    <p>Handle cultures in a biological safety cabinet, seal plates, decontaminate waste by autoclaving, and exclude needlestick exposure. <em>Toxoplasma</em> culture is hazardous to pregnant staff, and <em>T. cruzi</em> cultures have caused laboratory-acquired infection, so risk assessment and training are mandatory.</p>
  `,
  tip: "Name one medium, one temperature and one animal model — then state why molecular tests have displaced them.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa161", domain: "para-lab",
  q: "Describe the morphological identification of medically important mosquitoes, including adult and larval characters and the Philippine vector species.",
  tags: ["mosquito identification", "Anopheles", "Aedes", "Culex", "dichotomous key"],
  keypoints: ["resting posture", "spotted wings", "scutellum", "siphon", "palmate setae", "dichotomous key", "genitalia", "Anopheles flavirostris", "Aedes aegypti", "Culex quinquefasciatus", "Mansonia", "ITS2", "COI barcoding", "larval survey"],
  answer: `
    <h4>Why identification matters</h4>
    <p>Vector species differ in breeding site, biting time, insecticide susceptibility and the disease they transmit. Correct identification therefore determines whether control should target containers, streams, rice fields or aquatic plants. Identification uses adults, larvae and pupae, supported by <strong>dichotomous key</strong> characters and, for cryptic species, molecular markers.</p>
    <h4>Adult characters</h4>
    <div class="table-wrap"><table>
      <tr><th>Genus</th><th>Resting posture</th><th>Wings and other features</th></tr>
      <tr><td><strong><em>Anopheles</em></strong></td><td>At an angle to the surface</td><td><strong>Spotted wings</strong>; palps as long as the proboscis; rounded <strong>scutellum</strong></td></tr>
      <tr><td><strong><em>Aedes</em></strong></td><td>Parallel to the surface</td><td>Lyre-shaped thoracic markings in <em>Ae. aegypti</em>; bold white leg bands; daytime biter</td></tr>
      <tr><td><strong><em>Culex</em></strong></td><td>Parallel</td><td>Dull wings, no white leg bands; nocturnal</td></tr>
      <tr><td><strong><em>Mansonia</em></strong></td><td>Parallel</td><td>Broad, asymmetrical scales; speckled wings</td></tr>
    </table></div>
    <h4>Larval characters</h4>
    <ul>
      <li><em>Anopheles</em>: short <strong>siphon</strong>, well-developed <strong>palmate setae</strong>, larva lies parallel to the water surface.</li>
      <li><em>Aedes</em> and <em>Culex</em>: longer siphon, larva hangs at an angle; pecten spines, comb scales and saddle differ between genera.</li>
      <li>Species-level identification needs chaetotaxy and, for adults, dissection of the male <strong>genitalia</strong>.</li>
    </ul>
    <h4>Philippine vectors and confirmation</h4>
    <p>Malaria vectors include <strong><em>Anopheles flavirostris</em></strong>, <em>An. litoralis</em>, <em>An. maculatus</em> and <em>An. balabacensis</em>. Dengue vectors are <strong><em>Aedes aegypti</em></strong> and <em>Ae. albopictus</em>; bancroftian filariasis is transmitted by <em>Ae. poecilus</em>. <strong><em>Culex quinquefasciatus</em></strong> and <em>Cx. tritaeniorhynchus</em> transmit Japanese encephalitis and urban filariasis, and <strong><em>Mansonia</em></strong> transmits <em>Brugia malayi</em>.</p>
    <p>Use local illustrated keys, a reference collection and a <strong>larval survey</strong> to link immature stages to adult habitats. Where morphology is ambiguous, <strong>ITS2</strong> sequencing or <strong>COI barcoding</strong> resolves cryptic species. Record locality, habitat, collection method and date with every specimen.</p>
  `,
  tip: "Three quick discriminators: resting angle, spotted wings and the larval siphon.",
  sources: ["P4", "P2", "P9"]
},
{
  id: "pa162", domain: "para-lab",
  q: "Discuss vector surveillance and insecticide resistance monitoring as the evidence base for integrated vector management.",
  tags: ["vector surveillance", "insecticide resistance", "bioassay", "larval indices"],
  keypoints: ["house index", "container index", "Breteau index", "ovitraps", "CDC light trap", "human landing catch", "WHO tube bioassay", "CDC bottle bioassay", "diagnostic concentration", "knockdown resistance", "kdr", "synergist", "cone bioassay", "insecticide rotation", "integrated vector management"],
  answer: `
    <h4>Larval surveillance</h4>
    <p>Larval surveys estimate breeding and guide source reduction. The <strong>house index</strong> is the percentage of houses with larvae, the <strong>container index</strong> the percentage of water-holding containers that are positive, and the <strong>Breteau index</strong> the number of positive containers per 100 houses. <strong>Ovitraps</strong> detect <em>Aedes</em> at low density, and pupal surveys estimate adult production more directly than larval counts.</p>
    <h4>Adult surveillance</h4>
    <ul>
      <li><strong>CDC light trap</strong> and BG-Sentinel traps for host-seeking adults; gravid traps for <em>Culex</em>.</li>
      <li><strong>Human landing catch</strong> is the most sensitive measure of human biting but is ethically restricted and requires informed consent and prophylaxis.</li>
      <li>Indoor resting collections, exit traps and window traps estimate indoor density and resting behaviour.</li>
      <li>Record species composition, parity and sporozoite rate by ELISA or PCR to estimate transmission risk.</li>
    </ul>
    <h4>Insecticide resistance monitoring</h4>
    <p>Test adult mosquitoes with the <strong>WHO tube bioassay</strong> at the <strong>diagnostic concentration</strong>, or the <strong>CDC bottle bioassay</strong> with a time-response curve. Use F0 or F1 adults, include controls, and confirm species because resistance differs between members of a complex. A <strong>synergist</strong> such as piperonyl butoxide indicates metabolic resistance, while <strong>knockdown resistance</strong> (<strong>kdr</strong>) assays detect target-site mutations. For treated nets, perform the WHO <strong>cone bioassay</strong>, wash-resistance testing and tunnel tests; for indoor residual spraying, use residual bioassays on sprayed surfaces.</p>
    <h4>From data to action</h4>
    <p>Resistance data drive <strong>insecticide rotation</strong>, avoidance of cross-resistance, and combination with larval source management. Surveillance should be continuous, quality-assured and reported to the national programme. <strong>Integrated vector management</strong> then combines environmental, chemical, biological and personal measures with community participation, rather than relying on a single insecticide.</p>
  `,
  tip: "Give the three larval indices and the two bioassays — that is the core of this question.",
  sources: ["P7", "P4", "P6"]
},
{
  id: "pa163", domain: "para-lab",
  q: "Discuss the snail intermediate hosts of human schistosomes and the principles of snail identification, surveillance and control in the Philippines.",
  tags: ["snail control", "Oncomelania", "schistosomiasis", "molluscicide"],
  keypoints: ["Oncomelania hupensis quadrasi", "amphibious", "operculate", "rice fields", "Biomphalaria", "Bulinus", "cercarial shedding", "niclosamide", "environmental modification", "canal lining", "timed search", "Pila", "intermediate host", "molluscicide"],
  answer: `
    <h4>Snail hosts of human schistosomes</h4>
    <p>Each schistosome has a specific snail <strong>intermediate host</strong>. In the Philippines, <em>Schistosoma japonicum</em> uses <strong><em>Oncomelania hupensis quadrasi</em></strong>, a small <strong>amphibious</strong>, <strong>operculate</strong> snail that lives in <strong>rice fields</strong>, irrigation canals, seepages and shaded stream margins. <em>S. mansoni</em> uses <strong><em>Biomphalaria</em></strong> and <em>S. haematobium</em> uses <strong><em>Bulinus</em></strong>, both aquatic pulmonates found in Africa and the Middle East. Other Philippine snails, such as <strong><em>Pila</em></strong>, serve as second intermediate hosts for echinostomes.</p>
    <h4>Collection and identification</h4>
    <ul>
      <li>Perform a <strong>timed search</strong> with a scoop, forceps and quadrat at fixed sampling points, recording habitat, vegetation and water conditions.</li>
      <li>Identify by shell shape, size, spire, aperture and <strong>operculum</strong>; measure and count.</li>
      <li>Detect infection by <strong>cercarial shedding</strong>: place snails individually in clean water, expose to light and examine for cercariae after a few hours.</li>
      <li>Use PCR on snail tissue where available, because shedding misses prepatent infections.</li>
    </ul>
    <h4>Control</h4>
    <ul>
      <li><strong>Environmental modification</strong>: <strong>canal lining</strong> with concrete, clearing vegetation, drainage and alternating wet and dry irrigation to destroy snail habitat.</li>
      <li><strong>Molluscicide</strong>: <strong>niclosamide</strong> applied to transmission foci, repeated after rain; avoid broad application that harms non-target fauna.</li>
      <li>Sanitation and safe water to stop egg contamination, plus chemotherapy of infected people and treatment of carabao and other reservoirs.</li>
      <li>Health education so farmers avoid prolonged contact with untreated irrigation water.</li>
    </ul>
    <h4>Evaluation</h4>
    <p>Snail density and infection rate are process indicators that should be interpreted alongside human prevalence and incidence. In the Philippines snail control is one component of the National Schistosomiasis Control and Elimination Program, integrated with mass drug administration and water and sanitation interventions. Controlling snails without reducing human contamination or exposure rarely interrupts transmission.</p>
  `,
  tip: "Name the Philippine snail and its habitat, then place snail control inside the wider programme — not as a stand-alone measure.",
  sources: ["P5", "P4", "P9"]
},
{
  id: "pa164", domain: "para-lab",
  q: "Discuss the use of reference resources, proficiency testing and teleparasitology — including CDC DPDx — to improve diagnostic accuracy in parasitology.",
  tags: ["DPDx", "proficiency testing", "teleparasitology", "competency"],
  keypoints: ["DPDx", "image library", "telediagnosis", "proficiency testing", "external quality assessment", "reference slides", "blinded re-reading", "competency assessment", "RITM", "ECAMM", "whole slide imaging", "artificial intelligence", "validation", "discordant review"],
  answer: `
    <h4>Reference resources</h4>
    <p><strong>DPDx</strong>, maintained by the CDC Division of Parasitic Diseases and Malaria, is a free reference service for laboratory staff. It provides an <strong>image library</strong>, bench aids, parasite fact sheets, case studies and a <strong>telediagnosis</strong> service for difficult images. It supplements, but does not replace, local examination and clinical judgement. A laboratory should also keep its own <strong>reference slides</strong>, an atlas and a written procedure for unusual findings.</p>
    <h4>Using references well</h4>
    <ul>
      <li>Compare morphology at the same stage and stain, using measurements and several images rather than one photograph.</li>
      <li>Record the magnification, stain and specimen type on every reference image.</li>
      <li>Consult DPDx before reporting a rare parasite, and document the consultation in the record.</li>
      <li>When submitting images, include exposure history and clinical details, and remove patient identifiers unless consent exists.</li>
    </ul>
    <h4>Proficiency testing and external quality assessment</h4>
    <p><strong>Proficiency testing</strong> and <strong>external quality assessment</strong> detect systematic weaknesses that internal QC cannot. Schemes use slide panels, image quizzes and case scenarios; in the Philippines malaria microscopy panels are coordinated by <strong>RITM</strong>, and the WHO <strong>ECAMM</strong> programme accredits malaria microscopists. Internal measures include <strong>blinded re-reading</strong> of a sample of routine slides, <strong>discordant review</strong>, <strong>competency assessment</strong> and documented corrective action. Performance should be trended, not judged from a single round.</p>
    <h4>Digital and AI tools</h4>
    <p><strong>Whole slide imaging</strong>, smartphone microscopy and <strong>artificial intelligence</strong> for egg or malaria detection can extend expertise to remote sites. Before adoption they require <strong>validation</strong> against local species and stains, human oversight, data protection and a plan for algorithm drift. Teleparasitology is most valuable where a generalist laboratory can obtain a rapid second opinion without transporting every specimen.</p>
  `,
  tip: "Distinguish reference look-up (DPDx) from formal EQA — they answer different questions.",
  sources: ["P3", "P11", "P2"]
},
{
  id: "pa165", domain: "para-lab", star: true,
  q: "Discuss the Philippine Department of Health parasitic disease control programmes, their delivery structure, indicators and integration.",
  tags: ["DOH", "Philippines", "programmes", "elimination"],
  keypoints: ["National Schistosomiasis Control and Elimination Program", "National Filariasis Elimination Program", "Malaria Control and Elimination Program", "Integrated Helminth Control Program", "RITM", "mass drug administration", "Transmission Assessment Survey", "annual parasite incidence", "Universal Health Care", "barangay health station", "coverage", "surveillance", "vector control", "devolution"],
  answer: `
    <h4>The programmes</h4>
    <div class="table-wrap"><table>
      <tr><th>Programme</th><th>Target</th><th>Core strategy</th></tr>
      <tr><td><strong>National Schistosomiasis Control and Elimination Program</strong></td><td><em>S. japonicum</em></td><td>Mass drug administration with praziquantel, snail control, water and sanitation, case finding</td></tr>
      <tr><td><strong>National Filariasis Elimination Program</strong></td><td>Lymphatic filariasis</td><td>Mass drug administration with DEC plus albendazole, <strong>Transmission Assessment Survey</strong>, morbidity management</td></tr>
      <tr><td><strong>Malaria Control and Elimination Program</strong></td><td>Malaria</td><td>Prompt diagnosis and treatment, long-lasting insecticidal nets, indoor residual spraying, <strong>surveillance</strong></td></tr>
      <tr><td><strong>Integrated Helminth Control Program</strong></td><td>Soil-transmitted helminths</td><td>Biannual deworming of children, WASH, health education</td></tr>
    </table></div>
    <h4>Delivery structure</h4>
    <p>The DOH central office sets policy and standards. Centers for Health Development, provincial, city and municipal health offices, and the <strong>barangay health station</strong> and rural health unit deliver services. <strong>RITM</strong> is the national reference laboratory for parasitology and malaria. Schools participate through the Department of Education, and local government units fund and implement much of the work under <strong>devolution</strong>, which produces variation between localities.</p>
    <h4>Indicators</h4>
    <ul>
      <li><strong>Coverage</strong> of mass drug administration and deworming, with adverse-event monitoring.</li>
      <li><strong>Transmission Assessment Survey</strong> results for filariasis and prevalence of moderate-to-heavy intensity infection for schistosomiasis and soil-transmitted helminths.</li>
      <li><strong>Annual parasite incidence</strong>, indigenous cases and foci investigation for malaria.</li>
      <li>Snail density, vector indices and water and sanitation coverage.</li>
    </ul>
    <h4>Integration and challenges</h4>
    <p>Programmes are increasingly integrated under <strong>Universal Health Care</strong>, sharing community platforms, laboratories and surveillance. The main challenges are uneven local commitment, drug and vaccine hesitancy after well-publicised adverse events, reinfection where sanitation is poor, and weak parasitological data. Strengthening the laboratory network, including RITM-linked quality assurance, is essential for the shift from coverage reporting to impact measurement.</p>
  `,
  tip: "Use a four-row programme table, then discuss devolution and indicators — that is the 'system' answer examiners want.",
  sources: ["P9", "P6", "P4"]
},
{
  id: "pa166", domain: "para-lab", star: true,
  q: "Distinguish control, elimination and eradication, and explain how elimination is verified and certified for parasitic diseases.",
  tags: ["elimination", "eradication", "certification", "surveillance"],
  keypoints: ["control", "elimination of transmission", "elimination as a public health problem", "eradication", "verification", "certification", "zero indigenous cases", "three consecutive years", "Transmission Assessment Survey", "dossier", "surveillance", "importation", "resurgence"],
  answer: `
    <h4>Definitions</h4>
    <div class="table-wrap"><table>
      <tr><th>Term</th><th>Meaning</th><th>Example</th></tr>
      <tr><td><strong>Control</strong></td><td>Reduce disease burden to an acceptable level while transmission continues</td><td>Morbidity control in endemic schistosomiasis</td></tr>
      <tr><td><strong>Elimination of transmission</strong></td><td>Zero indigenous cases in a defined area</td><td>Malaria elimination in a province</td></tr>
      <tr><td><strong>Elimination as a public health problem</strong></td><td>Reduce prevalence or intensity below an agreed threshold</td><td>&lt;1% heavy-intensity schistosomiasis; &lt;2% moderate-to-heavy soil-transmitted helminths</td></tr>
      <tr><td><strong>Eradication</strong></td><td>Permanent global reduction to zero, with no further intervention needed</td><td>Smallpox is the only human disease eradicated so far</td></tr>
      <tr><td><strong>Verification and certification</strong></td><td>WHO confirms that a country has met the criteria</td><td>Malaria-free certification</td></tr>
    </table></div>
    <h4>Criteria and process</h4>
    <p>For malaria, <strong>certification</strong> requires <strong>three consecutive years</strong> of <strong>zero indigenous cases</strong>, a functioning case-based <strong>surveillance</strong> system, vector control capacity and a national <strong>dossier</strong> that is reviewed by an independent panel. Lymphatic filariasis uses the <strong>Transmission Assessment Survey</strong> to decide when mass drug administration can stop, followed by years of post-treatment surveillance. Schistosomiasis and soil-transmitted helminthiases currently aim at elimination as a public health problem rather than interruption of transmission.</p>
    <h4>Why the distinction matters</h4>
    <ul>
      <li>Indicators change from process (drug coverage) to impact (cases, prevalence, intensity).</li>
      <li>Surveillance must detect the last cases and respond to every one.</li>
      <li><strong>Importation</strong> and <strong>resurgence</strong> remain risks, so laboratory and vector capacity cannot be dismantled.</li>
      <li>Certification is time-limited in practice: post-certification surveillance and rapid response are required.</li>
    </ul>
    <h4>Philippine relevance</h4>
    <p>The Philippines aims for malaria elimination by 2030 and has eliminated lymphatic filariasis as a public health problem in most endemic provinces. Schistosomiasis remains endemic in 28 provinces, with elimination as a public health problem as the realistic medium-term goal. Progress depends on sensitive diagnostics, including PCR and antigen tests, because microscopy alone misses low-density infection near the endgame.</p>
  `,
  tip: "Define the four terms in one table, then give malaria's three-year rule as the concrete certification criterion.",
  sources: ["P6", "P9", "P7"]
},
{
  id: "pa167", domain: "para-lab",
  q: "Describe the packaging, documentation and transport of parasitology specimens referred to a reference laboratory, including the applicable classification and cold-chain requirements.",
  tags: ["specimen referral", "UN3373", "triple packaging", "cold chain"],
  keypoints: ["UN3373", "Category B", "triple packaging", "primary receptacle", "secondary packaging", "absorbent material", "outer packaging", "IATA", "chain of custody", "cold chain", "2–8 °C", "dried blood spots", "RITM", "request form"],
  answer: `
    <h4>Classification</h4>
    <p>Most diagnostic specimens are shipped as <strong>UN3373</strong>, <strong>Category B</strong> biological substances. A culture or an intentionally propagated pathogen may require Category A (UN2814), and dry ice is classified separately. Staff who pack or sign for shipments must be trained in the applicable <strong>IATA</strong> dangerous-goods instructions; an untrained sender is a common cause of refusal by carriers.</p>
    <h4>Triple packaging</h4>
    <ol>
      <li><strong>Primary receptacle</strong>: a leakproof screw-capped tube or container, sealed with Parafilm and labelled with patient and specimen details.</li>
      <li><strong>Secondary packaging</strong>: a leakproof bag or canister containing enough <strong>absorbent material</strong> to absorb all liquid if the primary breaks.</li>
      <li><strong>Outer packaging</strong>: a rigid box bearing the UN3373 mark, shipper and consignee addresses, and an itemised list. The <strong>request form</strong> goes outside the secondary packaging in a separate sleeve.</li>
    </ol>
    <h4>Transport conditions</h4>
    <ul>
      <li>Most stool, blood and aspirate specimens are kept at <strong>2–8 °C</strong>; never freeze unless the test requires it.</li>
      <li><strong>Dried blood spots</strong> are transported dry at ambient temperature, protected from humidity.</li>
      <li>Fresh tissue for culture goes in saline, not formalin; tissue for histology is fixed in formalin.</li>
      <li>Maintain the <strong>cold chain</strong> with validated cool boxes and temperature indicators, and avoid weekend or holiday delays.</li>
      <li>Record every handover to preserve the <strong>chain of custody</strong>.</li>
    </ul>
    <h4>Referral practice</h4>
    <p>Refer to <strong>RITM</strong> or another designated reference laboratory for confirmation of unusual parasites, drug-resistance testing, outbreak investigation or molecular characterisation. The request must state the clinical summary, exposure history, date of collection, tests already performed and the specific question. Reject or repackage specimens that leak, lack identifiers or arrive at the wrong temperature, and notify the sender so that a repeat can be arranged.</p>
  `,
  tip: "Remember the three layers and the absorbent: most marks are lost on packaging detail.",
  sources: ["P11", "P2", "P9"]
},
{
  id: "pa168", domain: "para-lab",
  q: "Discuss reporting standards, critical result notification and turnaround time monitoring in the parasitology laboratory.",
  tags: ["reporting", "critical values", "turnaround time", "quality"],
  keypoints: ["turnaround time", "critical result", "read-back", "documentation", "quantification", "species identification", "interpretive comment", "reflex testing", "amended report", "autoverification", "audit", "notification", "standardised report", "no parasites seen"],
  answer: `
    <h4>Report content</h4>
    <p>A <strong>standardised report</strong> carries patient identifiers, specimen type and collection date, the method used, the result and an <strong>interpretive comment</strong>. For positive findings, state the stage seen, the parasite name and a <strong>quantification</strong> where relevant — malaria parasitaemia, egg count or microfilarial count. Use full binomial names and italicise them. A negative result should read "no parasites seen" with the number of fields or method examined, not simply "negative", so the clinician knows how hard the laboratory looked.</p>
    <h4>Critical results</h4>
    <ul>
      <li><strong><em>P. falciparum</em></strong> or mixed malaria, high parasitaemia, and <em>P. knowlesi</em>.</li>
      <li>Microfilariae, <em>E. histolytica</em> trophozoites, <em>Cryptosporidium</em> in an immunocompromised patient, and <em>Naegleria</em> in cerebrospinal fluid.</li>
      <li>A <strong>critical result</strong> must trigger immediate <strong>notification</strong> to the clinician, a <strong>read-back</strong> of the result, and <strong>documentation</strong> of the time, recipient and action taken.</li>
    </ul>
    <h4>Turnaround and reflex testing</h4>
    <p>Define <strong>turnaround time</strong> separately for stat and routine requests; malaria films are usually stat. <strong>Reflex testing</strong> — concentration, permanent stain, antigen test or PCR after an initial finding — should be written into the SOP so that it happens without a new request. <strong>Amended report</strong>s must be traceable and the clinician informed. <strong>Autoverification</strong> may be used only after documented validation of the rules.</p>
    <h4>Quality monitoring</h4>
    <p><strong>Audit</strong> report accuracy, transcription errors, critical-value compliance and turnaround time, and present the results as run charts. Review every amended report for root cause. Interpretive comments add value only when accurate; an overconfident comment on a poor-quality specimen can cause harm. The aim is a report that is correct, complete, timely and useful at the bedside.</p>
  `,
  tip: "Quote 'no parasites seen' and the read-back rule — both are concrete reporting standards.",
  sources: ["P11", "P2", "P3"]
},
{
  id: "pa169", domain: "para-lab",
  q: "Discuss decontamination, waste segregation and spill management in the parasitology laboratory, with attention to parasites that resist routine disinfectants.",
  tags: ["decontamination", "waste management", "Cryptosporidium", "biosafety"],
  keypoints: ["hydrogen peroxide", "chlorine-resistant", "autoclave", "121 °C", "chemical waste", "formalin", "sharps container", "spill kit", "PPE", "segregation", "incineration", "standard operating procedure", "decontamination", "contact time"],
  answer: `
    <h4>Disinfection principles</h4>
    <p>Clean visible organic matter first, then disinfect, because blood and faeces inactivate many disinfectants. For routine blood and body-fluid spills, 0.5% chlorine (5000 ppm available chlorine) with an adequate <strong>contact time</strong> is standard. However, <em>Cryptosporidium</em> oocysts are <strong>chlorine-resistant</strong>, and <em>Giardia</em> cysts are relatively resistant, so surfaces and equipment contaminated with stool require <strong>hydrogen peroxide</strong>, heat, UV or ozone. <strong>Autoclave</strong> infectious waste at <strong>121 °C</strong> for 15 minutes; <strong>decontamination</strong> must be validated, not assumed.</p>
    <h4>Waste segregation</h4>
    <ul>
      <li>Infectious waste: yellow bag or container, then autoclave or <strong>incineration</strong> according to local rules.</li>
      <li>Sharps: a rigid, puncture-proof <strong>sharps container</strong>, never recapped by hand.</li>
      <li><strong>Chemical waste</strong>: <strong>formalin</strong>, xylene and stain waste are collected separately, labelled and disposed of through a licensed contractor — never poured down the drain.</li>
      <li>Non-infectious waste: black bag, with recyclables separated.</li>
    </ul>
    <h4>Spills and exposure</h4>
    <p>Keep a <strong>spill kit</strong> with absorbent granules, disinfectant, forceps, gloves and waste bags. For a spill: warn others, don <strong>PPE</strong>, cover with absorbent, apply disinfectant, allow contact time, remove debris and clean the area. For a needlestick or splash, wash, report immediately, and follow the post-exposure protocol, including serology and prophylaxis where indicated. Document the incident and review it.</p>
    <h4>Governance</h4>
    <p>Write a <strong>standard operating procedure</strong> for each task, train staff, post flow charts, and audit compliance with segregation and autoclave records. Formalin is a carcinogen, so use a fume hood and monitor exposure. A biosafety committee should review risks annually and after any incident. Good waste practice protects staff, cleaners, waste handlers and the community.</p>
  `,
  tip: "The high-yield exception is chlorine failing against Cryptosporidium — say it early.",
  sources: ["P2", "P11", "P3"]
},
{
  id: "pa170", domain: "para-lab",
  q: "Discuss emerging and field-deployable diagnostic technologies for parasitic diseases and the criteria used to evaluate them before adoption.",
  tags: ["LAMP", "CAA", "AI diagnostics", "ASSURED"],
  keypoints: ["LAMP", "isothermal amplification", "60–65 °C", "circulating anodic antigen", "circulating cathodic antigen", "urine", "artificial intelligence", "smartphone microscopy", "dried blood spots", "environmental DNA", "xenomonitoring", "ASSURED", "REASSURED", "field-deployable"],
  answer: `
    <h4>Field-deployable amplification</h4>
    <p><strong>LAMP</strong> is an <strong>isothermal amplification</strong> method run at about <strong>60–65 °C</strong>, with turbidity or fluorescence readout and minimal equipment. It has been applied to malaria, leishmaniasis and schistosomiasis and is attractive for district laboratories. Its weaknesses are contamination risk, limited multiplexing and slightly lower specificity than PCR, so confirmation is still needed in low-prevalence settings.</p>
    <h4>Antigen and urine-based tests</h4>
    <ul>
      <li><strong>Circulating cathodic antigen</strong> in <strong>urine</strong> gives a rapid point-of-care estimate of schistosome infection and is used in mapping.</li>
      <li><strong>Circulating anodic antigen</strong> is more sensitive and can be measured in serum or urine; it falls after treatment.</li>
      <li>Filarial antigen tests support surveillance after mass drug administration.</li>
    </ul>
    <h4>Imaging, connectivity and environmental sampling</h4>
    <p><strong>Smartphone microscopy</strong> and <strong>artificial intelligence</strong> can count eggs or malaria parasites and transmit images for remote review. <strong>Dried blood spots</strong> simplify molecular transport from remote islands. <strong>Environmental DNA</strong> and <strong>xenomonitoring</strong> — testing mosquitoes or snails for parasite DNA — can estimate transmission without sampling people. CRISPR-based assays remain promising but largely research tools.</p>
    <h4>Evaluation before adoption</h4>
    <p>The <strong>ASSURED</strong> criteria — affordable, sensitive, specific, user-friendly, rapid and robust, equipment-free and deliverable — have been extended to <strong>REASSURED</strong>, adding real-time connectivity and ease of specimen collection. A new test should be validated against a reference method in the local population, with attention to low parasite density, mixed species and cross-reactivity. Cost-effectiveness, training, maintenance, power supply, data privacy and biosafety all determine whether a <strong>field-deployable</strong> device actually improves care. New technology should extend, not replace, a functioning microscopy and reference-laboratory network.</p>
  `,
  tip: "Use ASSURED/REASSURED as the evaluation framework — it turns a gadget list into an argument.",
  sources: ["P6", "P3", "P2"]
},
{
  id: "pa171", domain: "para-lab",
  q: "Discuss method verification, validation and quality indicators for a parasitology laboratory introducing a new test.",
  tags: ["method verification", "validation", "quality indicators", "ISO 15189"],
  keypoints: ["verification", "validation", "limit of detection", "precision", "accuracy", "cross-reactivity", "concordance", "quality indicator", "turnaround time", "specimen rejection rate", "corrected report", "external quality assessment", "root cause analysis", "PDSA"],
  answer: `
    <h4>Verification versus validation</h4>
    <p><strong>Verification</strong> confirms that a commercially cleared or CE-marked method performs as the manufacturer claims in the local laboratory. <strong>Validation</strong> establishes the performance of an in-house, modified or laboratory-developed method for which no external claims exist. Both require a written plan, predefined acceptance criteria and a report approved before patient results are released.</p>
    <h4>Performance parameters</h4>
    <div class="table-wrap"><table>
      <tr><th>Parameter</th><th>Practical approach</th></tr>
      <tr><td><strong>Precision</strong></td><td>Replicate the same sample within and between runs; calculate mean, SD and CV.</td></tr>
      <tr><td><strong>Accuracy</strong></td><td>Compare with a reference method or known positive and negative samples; assess <strong>concordance</strong>.</td></tr>
      <tr><td><strong>Limit of detection</strong></td><td>Test serial dilutions of a quantified positive sample in replicates.</td></tr>
      <tr><td>Analytical specificity</td><td>Challenge with related parasites to detect <strong>cross-reactivity</strong>.</td></tr>
      <tr><td>Reportable range and stability</td><td>Check linearity where relevant and specimen stability over the stated storage period.</td></tr>
    </table></div>
    <h4>Quality indicators</h4>
    <ul>
      <li><strong>Specimen rejection rate</strong> and reasons — wrong container, delayed transport, no preservative.</li>
      <li><strong>Turnaround time</strong> from receipt to verified report, split into stat and routine.</li>
      <li><strong>Corrected report</strong> rate and root cause of each correction.</li>
      <li><strong>External quality assessment</strong> performance and internal discordance rate.</li>
      <li>Critical-value notification compliance, contamination rate and competency assessment completion.</li>
    </ul>
    <h4>Improvement cycle</h4>
    <p>Measure indicators monthly, display them on run charts and review them at management review. When a target is missed, perform a <strong>root cause analysis</strong>, agree a corrective action and re-audit. A <strong>PDSA</strong> cycle — plan, do, study, act — keeps improvement iterative rather than reactive. Under an ISO 15189 framework, the same discipline applies to documents, equipment, competence and supplier quality. Verification is a one-off gate; quality indicators are the continuous check that the method still works in real practice.</p>
  `,
  tip: "Separate verification (cleared kit) from validation (in-house assay) in the first sentence, then give measurable indicators.",
  sources: ["P11", "P2", "P3"]
}
);
