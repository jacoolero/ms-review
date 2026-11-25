/* Microbiology — diagnostics, IPC & emerging infections, part B: d13–d30 */
window.QBANK.push(
{
  id: "d13", domain: "diagnostics", star: true,
  q: "How should sputum and bronchoalveolar lavage specimens be collected, processed and interpreted for lower respiratory tract infection?",
  tags: ["sputum", "BAL", "respiratory culture", "specimen quality"],
  keypoints: ["Bartlett criteria", "more than 25 PMN", "fewer than 10 squamous cells", "reject saliva", "induced sputum hypertonic saline", "BAL quantitative culture", "protected specimen brush", "DTT or NALC homogenisation", "blood chocolate MacConkey agar", "Legionella BCYE", "Pneumocystis GMS", "prior antibiotics reduce yield", "colonisation versus infection"],
  answer: `
    <h4>Specimen quality</h4>
    <p>Lower respiratory specimens are easily contaminated by oral flora, so validity is judged before culture. Expectorated sputum is screened on Gram stain: an acceptable sample shows numerous polymorphonuclear cells and few squamous epithelial cells (Bartlett criteria, commonly &gt;25 PMN and &lt;10 squamous cells per low-power field). Saliva is rejected and a fresh sample requested. <strong>Induced sputum</strong> with nebulised hypertonic saline helps patients who cannot expectorate, especially for <em>Pneumocystis</em> and mycobacteria. <strong>Bronchoalveolar lavage (BAL)</strong> and protected specimen brush samples are reserved for ventilated, immunocompromised or non-productive patients, and are interpreted quantitatively because the bronchoscope passes through the upper airway.</p>
    <h4>Processing</h4>
    <ul>
      <li><strong>Homogenise</strong> thick sputum with dithiothreitol or NALC, then use the suspension for staining and culture.</li>
      <li><strong>Gram stain</strong> is reported with the quality score and a description of organism morphotypes and inflammatory cells; it guides the initial report.</li>
      <li><strong>Media</strong>: blood agar, chocolate agar and MacConkey agar, with selective media (for example <em>Burkholderia</em> or <em>Legionella</em>) when the history suggests it.</li>
      <li><strong>Quantitative culture</strong> of BAL or brush specimens, with colony counts interpreted against validated thresholds.</li>
      <li><strong>Additional tests</strong> — mycobacterial and fungal culture, viral PCR, <em>Pneumocystis</em> stain, and antigen tests are ordered separately.</li>
    </ul>
    <h4>Interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Target</th><th>Preferred laboratory test</th></tr>
      <tr><td><em>Legionella</em></td><td>BCYE culture and urinary antigen</td></tr>
      <tr><td><em>Pneumocystis jirovecii</em></td><td>GMS or immunofluorescence, &beta;-D-glucan</td></tr>
      <tr><td>Respiratory viruses</td><td>Multiplex PCR on nasopharyngeal or BAL samples</td></tr>
      <tr><td>Mycobacteria</td><td>AFB stain, molecular test, culture</td></tr>
    </table></div>
    <p>Growth may represent <strong>colonisation</strong>, especially in ventilated or chronically ill patients, and prior antibiotics reduce yield. A result is therefore interpreted with the Gram stain, the quality score, the quantitative count and the clinical picture; a negative culture does not exclude pneumonia when sampling was poor or antibiotics were already given.</p>
  `,
  tip: "Quality first, then quantitative culture, then a table of the difficult organisms — that structure answers most respiratory-specimen questions.",
  sources: ["S12", "S4", "S10"]
},
{
  id: "d14", domain: "diagnostics", star: true,
  q: "Describe the laboratory examination of cerebrospinal fluid in suspected meningitis. How are bacterial, viral, tuberculous and fungal patterns distinguished?",
  tags: ["CSF", "meningitis", "cell count", "Gram stain"],
  keypoints: ["lumbar puncture multiple tubes", "never refrigerate CSF", "cell count and differential", "CSF glucose ratio", "protein", "Gram stain sensitivity", "culture", "meningitis encephalitis PCR panel", "cryptococcal antigen", "AFB and TB PCR", "traumatic tap correction", "prior antibiotics", "opening pressure"],
  answer: `
    <h4>Collection and handling</h4>
    <p>Cerebrospinal fluid is obtained by lumbar puncture, usually into sequential tubes for cell count, chemistry, microbiology and molecular testing. It is delivered to the laboratory immediately and <strong>never refrigerated</strong>, because cold kills <em>Neisseria meningitidis</em> and <em>Haemophilus influenzae</em>. Opening pressure, appearance and the presence of xanthochromia are recorded. Samples are processed urgently, and the clinician is telephoned with a Gram stain result.</p>
    <h4>Routine tests</h4>
    <ul>
      <li><strong>Cell count and differential</strong>, performed on a fresh sample; a counting chamber avoids the cell loss and distortion of delays.</li>
      <li><strong>Glucose and protein</strong>, with a paired serum glucose so that the CSF-to-serum ratio can be calculated.</li>
      <li><strong>Gram stain and culture</strong>; culture remains necessary for identification and susceptibility.</li>
      <li><strong>Molecular testing</strong> — a multiplex meningitis/encephalitis PCR panel, specific PCR for herpesviruses and enteroviruses, and TB PCR when indicated.</li>
      <li><strong>Special tests</strong> — cryptococcal antigen and India ink, AFB stain, fungal culture and cytology when the differential includes tuberculosis, cryptococcosis or malignancy.</li>
    </ul>
    <h4>Interpretation</h4>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Cells</th><th>Glucose</th><th>Protein</th></tr>
      <tr><td><strong>Bacterial</strong></td><td>Neutrophils predominate</td><td>Low ratio</td><td>High</td></tr>
      <tr><td><strong>Viral</strong></td><td>Lymphocytes predominate</td><td>Usually normal</td><td>Mildly raised</td></tr>
      <tr><td><strong>Tuberculous</strong></td><td>Lymphocytes, sometimes neutrophils early</td><td>Low</td><td>High</td></tr>
      <tr><td><strong>Fungal</strong></td><td>Lymphocytes</td><td>Low</td><td>Raised</td></tr>
    </table></div>
    <p>Patterns overlap. A <strong>traumatic tap</strong> raises the white count and protein; correction using the red cell count helps but is imperfect. Prior antibiotics may sterilise the culture while the cell count remains abnormal, and a normal Gram stain never excludes meningitis because its sensitivity is modest. Neonatal CSF is especially deceptive, since pleocytosis may be minimal and the chemistry non-specific. Neonates, the immunosuppressed and patients with ventriculoperitoneal shunts therefore need especially cautious interpretation.</p>
  `,
  tip: "Give normal values, the four-pattern table, and two pitfalls (traumatic tap, prior antibiotics) for a complete answer.",
  sources: ["S12", "S4", "S1"]
},
{
  id: "d15", domain: "diagnostics", star: true,
  q: "Discuss the indications for urine culture, collection methods, quantitative interpretation and the problem of asymptomatic bacteriuria.",
  tags: ["urine culture", "asymptomatic bacteriuria", "pyuria", "contamination"],
  keypoints: ["culture only with symptoms", "midstream clean catch", "catheter specimen", "suprapubic aspirate", "boric acid or refrigeration", "colony count interpretation", "mixed flora contamination", "pyuria", "sterile pyuria", "pregnancy screening", "do not treat asymptomatic bacteriuria", "catheter-associated", "fastidious organisms"],
  answer: `
    <h4>Indications</h4>
    <p>Urine culture is indicated for symptoms of urinary tract infection, pyelonephritis, pregnancy, before urological instrumentation and in selected systemic infections. It is not a screening test: reflex culture of every urinalysis, or of urine from an asymptomatic patient with a catheter, produces <strong>asymptomatic bacteriuria</strong> and drives unnecessary antibiotic use. The laboratory should apply rejection or reflex criteria agreed with clinicians.</p>
    <h4>Collection</h4>
    <div class="table-wrap"><table>
      <tr><th>Method</th><th>Comment</th></tr>
      <tr><td><strong>Clean-catch midstream</strong></td><td>Preferred in cooperative adults; cleanse and collect the midstream portion</td></tr>
      <tr><td><strong>Catheter specimen</strong></td><td>Sample from the sampling port after disinfection; never from the drainage bag</td></tr>
      <tr><td><strong>Suprapubic aspirate</strong></td><td>Best in infants and in suspected anaerobic or fastidious infection</td></tr>
      <tr><td><strong>Bag or nappy specimen</strong></td><td>High contamination; confirm a positive result by catheter or suprapubic sample</td></tr>
    </table></div>
    <p>Urine is a good culture medium, so delay allows overgrowth. Refrigerate within two hours or use a <strong>boric acid</strong> preservative tube; transport promptly and plate on chromogenic or CLED agar with MacConkey agar.</p>
    <h4>Interpretation</h4>
    <p>Historically &ge;10<sup>5</sup> CFU/mL defined significant bacteriuria, but symptomatic women may have &ge;10<sup>2</sup>–10<sup>3</sup> CFU/mL of a single organism. <strong>Mixed flora</strong> of three or more organisms usually indicates contamination and should be reported as such, with a repeat requested. <strong>Pyuria</strong> supports genuine infection, while its absence in a symptomatic patient warrants consideration of <em>Chlamydia</em>, gonorrhoea, tuberculosis or interstitial disease (<strong>sterile pyuria</strong>).</p>
    <p>Do not treat asymptomatic bacteriuria except in <strong>pregnancy</strong> and before invasive urological procedures; in catheterised patients it is expected and treatment selects resistant organisms and promotes <em>C. difficile</em>. The laboratory's most useful contribution is a clear, clinically agreed reporting policy.</p>
  `,
  tip: "State when NOT to culture and when NOT to treat — that is what separates a Master's answer from a list of media.",
  sources: ["S12", "S9", "S22"]
},
{
  id: "d16", domain: "diagnostics", star: true,
  q: "Compare conventional stool culture with multiplex molecular gastrointestinal panels. What are the strengths, limitations and public health responsibilities?",
  tags: ["stool culture", "GI panel", "C. difficile", "molecular diagnostics"],
  keypoints: ["bloody or inflammatory diarrhoea", "MacConkey and XLD", "sorbitol MacConkey for E. coli O157", "TCBS for Vibrio", "Campylobacter selective agar", "Cary-Blair transport", "C. difficile GDH and toxin", "multiplex PCR panel", "loss of isolate for typing", "detection of carriage", "Shiga toxin reporting", "public health notification"],
  answer: `
    <h4>When to culture</h4>
    <p>Routine stool culture is reserved for inflammatory or bloody diarrhoea, suspected outbreak, travel-associated or persistent illness, immunocompromised patients and cases where an isolate is needed for typing or susceptibility. Most uncomplicated watery diarrhoea is self-limiting and does not require culture. Stool is transported in <strong>Cary-Blair</strong> medium when delivery is delayed.</p>
    <h4>Conventional culture</h4>
    <ul>
      <li><strong>MacConkey and xylose-lysine-deoxycholate (XLD)</strong> or <em>Salmonella-Shigella</em> agar for lactose non-fermenters.</li>
      <li><strong>Sorbitol-MacConkey</strong> for Shiga toxin-producing <em>E. coli</em> O157, with an O157 antigen test or Shiga toxin immunoassay/PCR.</li>
      <li><strong>TCBS</strong> for <em>Vibrio</em>, with alkaline peptone water enrichment in suspected cholera.</li>
      <li><strong>Campylobacter</strong> selective agar incubated at 42&nbsp;&deg;C in a microaerophilic atmosphere.</li>
      <li><strong><em>Yersinia</em></strong> may require cold enrichment, and <em>Clostridioides difficile</em> is diagnosed by toxin testing rather than routine culture.</li>
    </ul>
    <p>Colonies are identified biochemically or by MALDI-TOF, and isolates are retained for susceptibility and reference typing.</p>
    <h4>Molecular panels</h4>
    <p>Multiplex PCR panels detect <em>Campylobacter</em>, <em>Salmonella</em>, <em>Shigella</em>/enteroinvasive <em>E. coli</em>, Shiga toxin genes, <em>Vibrio</em>, <em>Yersinia</em>, norovirus, rotavirus, <em>Giardia</em>, <em>Cryptosporidium</em> and <em>Entamoeba</em> in a few hours, with greater sensitivity than culture. They are valuable in severe or immunocompromised cases and in outbreaks.</p>
    <h4>Limitations and responsibilities</h4>
    <p>Panels cannot provide an isolate for <strong>susceptibility, serotyping or whole-genome sequencing</strong>, may detect asymptomatic carriage, and do not distinguish viable from dead organisms. A positive Shiga toxin result must be acted on urgently, and all notifiable pathogens — <em>Salmonella</em> Typhi, cholera, Shiga toxin-producing <em>E. coli</em>, <em>Shigella</em> — require prompt <strong>public health notification</strong> and isolate referral. Many laboratories therefore combine a molecular screen with selective culture when an isolate is clinically or epidemiologically necessary.</p>
  `,
  tip: "Contrast speed and sensitivity against the loss of the isolate — the isolate is what public health and susceptibility testing need.",
  sources: ["S12", "S10", "S13"]
},
{
  id: "d17", domain: "diagnostics",
  q: "How should wound, abscess and sterile-site specimens be collected and processed? Discuss the role of quantitative culture and device sonication.",
  tags: ["wound culture", "abscess", "prosthetic joint", "sonication"],
  keypoints: ["swab versus aspirate", "deep tissue preferred", "anaerobic transport", "Gram stain", "quantitative culture", "mixed flora", "prosthetic joint infection multiple biopsies", "sonication of implant", "prolonged incubation", "histology", "sterile site interpretation", "contamination"],
  answer: `
    <h4>Collection</h4>
    <p>The specimen must represent the infected tissue, not the surface. A superficial swab picks up colonising flora and correlates poorly with deep culture, so <strong>aspirated pus or a tissue biopsy</strong> is preferred whenever possible. For open wounds the surface is cleaned and tissue is taken from the advancing edge; for abscesses the aspirate is sent in a sterile container, with air expelled from the syringe for anaerobic culture. Devices and prostheses are sent intact, not swabbed after removal.</p>
    <h4>Processing</h4>
    <ul>
      <li><strong>Gram stain</strong> with a description of inflammatory cells and organism morphotypes; its value lies in the direct, same-day report.</li>
      <li><strong>Culture</strong> on blood, chocolate, MacConkey and anaerobic media; add selective media for bites, burns, diabetic foot and immunocompromised hosts.</li>
      <li><strong>Quantitative or semi-quantitative culture</strong> of tissue and burn specimens, since a high count is more likely to be significant.</li>
      <li><strong>Prolonged incubation</strong> for indolent organisms when prosthetic joint infection is suspected.</li>
      <li><strong>Histology</strong> and, where available, molecular testing on tissue, because culture may be negative after antibiotics.</li>
    </ul>
    <h4>Sterile sites and devices</h4>
    <div class="table-wrap"><table>
      <tr><th>Specimen</th><th>Expected approach</th></tr>
      <tr><td>Pleural, joint, peritoneal fluid</td><td>Sterile-site culture; any growth is significant if collection was aseptic</td></tr>
      <tr><td>Prosthetic joint</td><td>Multiple periprosthetic tissue samples; culture each separately</td></tr>
      <tr><td>Explanted prosthesis</td><td><strong>Sonication</strong> to dislodge biofilm, then culture the sonicate</td></tr>
      <tr><td>Chronic ulcer</td><td>Clean and biopsy; interpret mixed growth cautiously</td></tr>
    </table></div>
    <h4>Interpretation</h4>
    <p>In a <strong>sterile site</strong>, a single organism is usually meaningful, whereas a wound swab growing three or more organisms often reflects colonisation. <strong>Mixed flora</strong> should be reported honestly rather than worked up as if each colony were a pathogen. The final report combines the Gram stain, the quantity and diversity of growth, the site and the clinical findings; the laboratory should advise on a better specimen when the result is uninterpretable.</p>
  `,
  tip: "Tissue beats swab, and sonication is the specific detail examiners look for in prosthetic joint infection.",
  sources: ["S12", "S4", "S22"]
},
{
  id: "d18", domain: "diagnostics",
  q: "Explain the Gram stain: principle, technique, reporting and the common pitfalls that lead to misinterpretation.",
  tags: ["Gram stain", "direct examination", "reporting", "quality"],
  keypoints: ["crystal violet", "iodine mordant", "alcohol decolouriser", "safranin counterstain", "peptidoglycan thickness", "Gram-positive purple", "Gram-negative pink", "direct specimen value", "semiquantitative reporting", "decolourisation timing", "Gram-variable", "artefacts", "culture correlation"],
  answer: `
    <h4>Principle</h4>
    <p>The Gram stain separates bacteria by cell wall structure. <strong>Crystal violet</strong> stains all cells; <strong>iodine</strong> forms a large crystal violet-iodine complex within the thick peptidoglycan of Gram-positive organisms; <strong>alcohol or acetone</strong> decolourises Gram-negatives, whose thin peptidoglycan and outer membrane retain little dye; <strong>safranin</strong> then counterstains them pink. Gram-positive organisms therefore appear purple and Gram-negative organisms pink to red.</p>
    <h4>Technique and use</h4>
    <ul>
      <li>Prepare a thin, air-dried, heat- or methanol-fixed smear; thick smears decolourise unevenly.</li>
      <li>Apply the reagents in sequence with controlled timing; the decolourisation step is the most operator-dependent.</li>
      <li>Examine under the <strong>100&times; oil-immersion objective</strong> and report organism shape, arrangement, Gram reaction and relative quantity.</li>
      <li>On <strong>direct specimens</strong> the stain gives a same-day result, shows the inflammatory response and guides the initial choice of medium and therapy.</li>
      <li>On colonies it confirms purity and prompts identification and susceptibility testing.</li>
    </ul>
    <h4>Reporting</h4>
    <div class="table-wrap"><table>
      <tr><th>Finding</th><th>Typical interpretation</th></tr>
      <tr><td>Gram-positive cocci in clusters</td><td><em>Staphylococcus</em> species</td></tr>
      <tr><td>Gram-positive cocci in chains</td><td><em>Streptococcus</em> or <em>Enterococcus</em></td></tr>
      <tr><td>Gram-negative diplococci within neutrophils</td><td><em>Neisseria</em> species</td></tr>
      <tr><td>Gram-negative bacilli with many neutrophils</td><td>Enteric or non-fermenting bacilli</td></tr>
      <tr><td>No organisms but many neutrophils</td><td>Prior antibiotics, fastidious or intracellular pathogen</td></tr>
    </table></div>
    <h4>Pitfalls</h4>
    <p>Over-decolourisation makes Gram-positives appear pink; under-decolourisation makes Gram-negatives appear purple. <strong>Gram-variable</strong> and ragged staining occur in old or damaged cultures. Crystals, mucus, fibrin, dye precipitate and background material can mimic organisms, and dead organisms may still stain after effective antibiotics. <em>Mycobacteria</em>, <em>Mycoplasma</em>, <em>Legionella</em>, <em>Chlamydia</em> and spirochaetes are not reliably seen. The stain must therefore be interpreted with the specimen quality, the culture and the clinical context — never in isolation.</p>
  `,
  tip: "Four reagents in order, then the direct-specimen value, then the decolourisation pitfall — that is the whole answer.",
  sources: ["S12", "S1", "S2"]
},
{
  id: "d19", domain: "diagnostics",
  q: "Classify culture media and explain the principles of enriched, selective, differential and chromogenic agars used in clinical bacteriology.",
  tags: ["culture media", "selective agar", "chromogenic", "laboratory methods"],
  keypoints: ["enriched media", "blood agar", "chocolate agar", "selective inhibitors", "differential indicators", "MacConkey lactose", "CLED", "colistin nalidixic acid agar", "XLD and SS agar", "TCBS", "BCYE", "chromogenic substrates", "quality control growth promotion"],
  answer: `
    <h4>Classification</h4>
    <p>Media are described by what they provide and what they suppress. <strong>Enriched (nutrient) media</strong> supply growth factors for fastidious organisms; <strong>selective media</strong> contain inhibitors that suppress competing flora; <strong>differential media</strong> use an indicator to distinguish colonies by a biochemical property; and <strong>chromogenic media</strong> use enzyme substrates that release a coloured product, combining selection with direct presumptive identification. Many media are both selective and differential.</p>
    <h4>Common media</h4>
    <div class="table-wrap"><table>
      <tr><th>Medium</th><th>Type</th><th>Purpose</th></tr>
      <tr><td><strong>Blood agar</strong></td><td>Enriched, differential</td><td>General growth; haemolysis patterns</td></tr>
      <tr><td><strong>Chocolate agar</strong></td><td>Enriched</td><td>Fastidious organisms such as <em>Haemophilus</em> and <em>Neisseria</em></td></tr>
      <tr><td><strong>MacConkey agar</strong></td><td>Selective, differential</td><td>Gram-negative bacilli; lactose fermentation</td></tr>
      <tr><td><strong>CLED</strong></td><td>Differential</td><td>Urine culture; prevents swarming</td></tr>
      <tr><td><strong>Colistin-nalidixic acid agar</strong></td><td>Selective</td><td>Gram-positive cocci from mixed flora</td></tr>
      <tr><td><strong>XLD, <em>Salmonella-Shigella</em> agar</strong></td><td>Selective, differential</td><td>Enteric pathogens; lactose non-fermenters</td></tr>
      <tr><td><strong>TCBS</strong></td><td>Selective, differential</td><td><em>Vibrio</em>; sucrose fermentation</td></tr>
      <tr><td><strong>BCYE</strong></td><td>Enriched, selective</td><td><em>Legionella</em> (cysteine requirement)</td></tr>
      <tr><td><strong>Chromogenic agar</strong></td><td>Selective, differential</td><td>Presumptive identification of MRSA, CRE, <em>C. auris</em></td></tr>
    </table></div>
    <h4>Principles and pitfalls</h4>
    <p>An enriched medium must contain the specific growth factors an organism cannot synthesise — for example X and V factors for <em>Haemophilus</em>, or cysteine for <em>Legionella</em>. A selective agent must inhibit competitors at a concentration that does not suppress the target, which is why a heavily contaminated specimen may still overgrow a selective plate. Differential reactions depend on a readable indicator and on the medium being fresh and correctly prepared. <strong>Chromogenic media</strong> give a presumptive, not definitive, identification and require confirmation.</p>
    <p>Every batch needs <strong>quality control</strong>: sterility, growth promotion with defined control strains, selectivity checks and correct storage. Batch failure, expired plates, excessive moisture or overheating during preparation can each produce false-negative or misleading results, and the laboratory should document media QC as part of its quality system.</p>
  `,
  tip: "Define the four categories, then a compact table — examiners reward a few media with their exact selective or differential basis.",
  sources: ["S12", "S2", "S1"]
},
{
  id: "d20", domain: "diagnostics", star: true,
  q: "Describe the collection, transport, culture and identification of anaerobic bacteria. Why are anaerobes so often missed?",
  tags: ["anaerobic culture", "Bacteroides", "transport", "MALDI-TOF"],
  keypoints: ["aspirate not swab", "anaerobic transport vial", "air expelled from syringe", "prompt delivery", "anaerobic blood agar", "BBE agar", "LKV agar", "egg yolk agar lecithinase", "chopped meat glucose broth", "MALDI-TOF identification", "oxygen exposure kills", "polymicrobial infection", "Bacteroides fragilis resistance"],
  answer: `
    <h4>When to suspect anaerobes</h4>
    <p>Anaerobes dominate the normal flora of the mouth, bowel and female genital tract and cause <strong>polymicrobial, endogenous infections</strong>: aspiration pneumonia and lung abscess, periodontal and dental infection, intra-abdominal abscess, pelvic infection, diabetic foot and bite wounds. Gas in tissue, a foul odour, abscess formation and failure to grow organisms on aerobic culture should raise suspicion.</p>
    <h4>Collection and transport</h4>
    <ul>
      <li><strong>Aspirate</strong> pus or fluid with a needle and syringe, expel air, cap and send immediately; a swab is a poor substitute.</li>
      <li>Use an <strong>anaerobic transport vial</strong> or a prereduced transport medium when delay is unavoidable.</li>
      <li>Do not refrigerate anaerobic specimens, and protect them from air and drying.</li>
      <li>Collect by sterile technique from the site; specimens from sites with normal flora are difficult to interpret.</li>
    </ul>
    <h4>Culture</h4>
    <div class="table-wrap"><table>
      <tr><th>Medium</th><th>Purpose</th></tr>
      <tr><td><strong>Anaerobic blood agar</strong></td><td>General growth of anaerobes</td></tr>
      <tr><td><strong>Bacteroides bile esculin (BBE)</strong></td><td>Selects <em>B. fragilis</em> group; esculin hydrolysis</td></tr>
      <tr><td><strong>Laked blood kanamycin-vancomycin (LKV)</strong></td><td>Selects <em>Prevotella</em> and <em>Porphyromonas</em></td></tr>
      <tr><td><strong>Egg yolk agar</strong></td><td>Lecithinase and lipase for <em>Clostridium</em></td></tr>
      <tr><td><strong>Chopped meat glucose broth</strong></td><td>Enrichment and preservation of stock cultures</td></tr>
    </table></div>
    <p>Plates are incubated in an anaerobic jar or workstation with an indicator, usually for 48 hours and often longer. Colonies are examined under anaerobic conditions, Gram stained and identified by biochemical panels or <strong>MALDI-TOF</strong>, which has greatly improved identification. Susceptibility testing is indicated for invasive isolates, particularly the <em>B. fragilis</em> group, where &beta;-lactamase production and resistance are common.</p>
    <h4>Why anaerobes are missed</h4>
    <p>Exposure to oxygen during collection, a swab instead of an aspirate, delayed transport, inadequate incubation time and overgrowth by facultative organisms all reduce recovery. Because these infections are usually <strong>polymicrobial</strong>, the report must distinguish likely pathogens from flora, and treatment is directed at the whole community rather than at a single isolate.</p>
  `,
  tip: "One line on which infections, one on transport, one on the four media, then why they are missed — the classic four-part answer.",
  sources: ["S12", "S1", "S4"]
},
{
  id: "d21", domain: "diagnostics",
  q: "Outline the laboratory culture of mycobacteria and fungi, including decontamination, media, incubation and identification.",
  tags: ["mycobacterial culture", "fungal culture", "NALC-NaOH", "MGIT"],
  keypoints: ["NALC-NaOH decontamination", "digestion and neutralisation", "centrifugation", "Löwenstein-Jensen", "Middlebrook 7H10", "MGIT liquid culture", "incubation temperature", "contamination rate", "MPT64 identification", "Sabouraud dextrose agar", "dimorphic fungi", "lactophenol cotton blue", "BSL-3 for TB culture"],
  answer: `
    <h4>Mycobacterial culture</h4>
    <p>Sputum and other non-sterile specimens contain faster-growing flora, so they are <strong>digested and decontaminated</strong> with NALC-NaOH, neutralised, concentrated by centrifugation and inoculated onto media. Over-decontamination kills mycobacteria and under-decontamination allows overgrowth, so the contamination rate is monitored as a quality indicator.</p>
    <ul>
      <li><strong>Solid media</strong>: Löwenstein-Jensen (egg-based) and Middlebrook 7H10 or 7H11 agar; colonies are slow and cultures are held for several weeks.</li>
      <li><strong>Liquid media</strong>: MGIT or similar systems detect growth more rapidly and are preferred where available.</li>
      <li><strong>Incubation</strong>: usually 37&nbsp;&deg;C; some species require different temperatures, such as 30&nbsp;&deg;C for <em>M. marinum</em> or higher temperatures for certain non-tuberculous mycobacteria.</li>
      <li><strong>Identification</strong>: AFB stain, MPT64 antigen test, molecular probes or line-probe assays, MALDI-TOF and sequencing; drug-susceptibility testing follows identification.</li>
    </ul>
    <p>Culture of <em>M. tuberculosis</em> requires <strong>BSL-3</strong> containment and strict aerosol control. Sterile sites such as CSF or tissue may be inoculated without decontamination, but the specimen must not be discarded as contaminated.</p>
    <h4>Fungal culture</h4>
    <ul>
      <li><strong>Media</strong>: Sabouraud dextrose agar with antibacterial agents, and inhibitory mould agar for contaminated specimens; brain-heart infusion for fastidious fungi.</li>
      <li><strong>Temperature</strong>: most moulds grow at 25–30&nbsp;&deg;C; <strong>dimorphic fungi</strong> are often incubated at both 25&nbsp;&deg;C (mould) and 37&nbsp;&deg;C (yeast) to demonstrate conversion.</li>
      <li><strong>Examination</strong>: colony texture and pigmentation, microscopy with lactophenol cotton blue, germ-tube test for <em>Candida albicans</em>, and India ink or cryptococcal antigen for <em>Cryptococcus</em>.</li>
      <li><strong>Identification</strong>: MALDI-TOF, biochemical panels and sequencing for unusual moulds.</li>
    </ul>
    <p>Plates are sealed and handled in a biosafety cabinet because mould conidia are airborne. <em>Coccidioides</em> and other highly infectious fungi require heightened containment, and <em>Candida auris</em> requires strict contact precautions because it persists in the environment and spreads between patients.</p>
  `,
  tip: "Pair each culture with its key step: NALC-NaOH and BSL-3 for mycobacteria, dual temperature and lactophenol cotton blue for fungi.",
  sources: ["S12", "S6", "S18"]
},
{
  id: "d22", domain: "diagnostics", star: true,
  q: "Describe the elements of a laboratory quality management system. How is quality assured, monitored and accredited in clinical microbiology?",
  tags: ["quality assurance", "ISO 15189", "EQA", "accreditation"],
  keypoints: ["quality management system", "ISO 15189", "document control", "internal quality control", "external quality assessment", "proficiency testing", "quality indicators", "turnaround time", "corrective and preventive action", "competency assessment", "audit", "method validation", "accreditation"],
  answer: `
    <h4>Quality system essentials</h4>
    <p>A laboratory quality management system covers the whole path from request to report: organisation and leadership, <strong>document control</strong>, personnel competence, equipment, purchasing, process control, information management, incident reporting and continual improvement. <strong>ISO 15189</strong> is the international standard for medical laboratories, and accreditation against it requires evidence that these processes are implemented, not merely written.</p>
    <h4>Internal quality control</h4>
    <ul>
      <li><strong>Media and reagents</strong>: sterility, growth promotion and selectivity checks with defined control strains; expiry and storage control.</li>
      <li><strong>Stains and antisera</strong>: positive and negative controls with each new lot and at defined intervals.</li>
      <li><strong>Equipment</strong>: incubator, refrigerator, autoclave, biosafety cabinet and temperature monitoring with calibration and maintenance records.</li>
      <li><strong>Methods</strong>: validation or verification before use, with documented performance characteristics and acceptance criteria.</li>
      <li><strong>Personnel</strong>: initial and periodic competency assessment, including direct observation and blind re-checking.</li>
    </ul>
    <h4>External quality assessment</h4>
    <p><strong>Proficiency testing</strong> and external quality assessment schemes send unknown specimens for identification, susceptibility testing, staining and molecular assays. Unsatisfactory results require root-cause analysis and a documented <strong>corrective action</strong>, not just a repeat test. Participation demonstrates comparability with peer laboratories and is a requirement for accreditation.</p>
    <h4>Monitoring and improvement</h4>
    <div class="table-wrap"><table>
      <tr><th>Quality indicator</th><th>What it detects</th></tr>
      <tr><td>Blood culture contamination rate</td><td>Collection technique and interpretive burden</td></tr>
      <tr><td>Specimen rejection rate</td><td>Pre-analytical problems and collection training</td></tr>
      <tr><td>Turnaround time</td><td>Workflow, staffing and critical-result notification</td></tr>
      <tr><td>Culture contamination rate</td><td>Decontamination, media and incubation performance</td></tr>
      <tr><td>Correction rate on audit</td><td>Reporting accuracy and transcription errors</td></tr>
    </table></div>
    <p>Audits, incident reviews and satisfaction surveys close the loop. Accreditation bodies examine records, observe practice and interview staff, and the laboratory must show that identified problems led to effective change. Quality is therefore a continuous cycle of planning, performing, checking and acting, and it depends more on culture and leadership than on documentation alone.</p>
  `,
  tip: "Organise around the quality cycle: documents, internal QC, external assessment, indicators, corrective action — then accreditation.",
  sources: ["S12", "S21", "S22"]
},
{
  id: "d23", domain: "diagnostics",
  q: "Discuss the role of the clinical laboratory in bioterrorism preparedness and the handling of suspected select agents.",
  tags: ["bioterrorism", "select agents", "LRN", "biosecurity"],
  keypoints: ["Category A agents", "anthrax", "botulism", "plague", "smallpox", "tularaemia", "viral haemorrhagic fevers", "Laboratory Response Network", "sentinel laboratory", "rule-out testing", "do not culture on open bench", "notification", "chain of custody", "select agent regulations"],
  answer: `
    <h4>Threat agents</h4>
    <p>The CDC categorises bioterrorism agents by ease of dissemination, mortality and preparedness needs. <strong>Category A</strong> includes <em>Bacillus anthracis</em>, <em>Clostridium botulinum</em> toxin, <em>Yersinia pestis</em>, variola virus, <em>Francisella tularensis</em> and viral haemorrhagic fever viruses. <strong>Category B</strong> includes <em>Brucella</em>, <em>Coxiella burnetii</em>, ricin and food- and water-borne threats, while Category C covers emerging agents that could be engineered for mass dissemination.</p>
    <h4>Laboratory response network</h4>
    <p>Testing is tiered. <strong>Sentinel laboratories</strong> — most hospital laboratories — perform <strong>rule-out testing</strong>, refer suspicious isolates and notify public health authorities. Reference laboratories perform confirmatory assays, and national laboratories provide the definitive identification and characterisation. The sentinel laboratory's most important duty is recognition and safe referral, not attempting definitive identification.</p>
    <h4>Recognition and safe handling</h4>
    <ul>
      <li>An unusual organism, an unexpected presentation, a cluster of cases, an aerosol release or a deliberate contamination claim should trigger the protocol.</li>
      <li>Do not perform <strong>open-bench culture</strong> or aerosol-generating procedures on a suspected <em>B. anthracis</em>, <em>Y. pestis</em>, <em>Brucella</em> or variola sample; use a biosafety cabinet and the highest available containment.</li>
      <li>Double-bag and package the specimen according to infectious-substance regulations, with a documented <strong>chain of custody</strong>.</li>
      <li>Notify the laboratory director, infection control and the designated public health authority immediately; do not wait for a confirmed result.</li>
    </ul>
    <h4>Biosecurity and preparedness</h4>
    <p>Select-agent work requires registration, inventory control, personnel suitability and physical security, because the laboratory itself could be a target. Staff need training, drills and a written plan covering specimen receipt, packaging, decontamination and communication. Preparedness also means maintaining reference algorithms and contacts, and rehearsing the decision to stop testing and refer. <strong>Safety, security and speed of notification</strong> matter more than diagnostic heroics.</p>
  `,
  tip: "Sentinel laboratories rule out and refer — say that clearly, then give Category A examples and the notification duty.",
  sources: ["S12", "S10", "S25"]
},
{
  id: "d24", domain: "diagnostics",
  q: "Evaluate the current and potential roles of automation and artificial intelligence in clinical microbiology. What are the validation and governance requirements?",
  tags: ["artificial intelligence", "automation", "digital microbiology", "validation"],
  keypoints: ["automated plate streaking", "digital plate imaging", "colony classification", "MALDI-TOF", "expert systems for AST", "blood culture Gram stain automation", "predictive models", "training data bias", "external validation", "regulatory clearance", "human oversight", "algorithm drift", "data privacy", "equity"],
  answer: `
    <h4>Where automation already helps</h4>
    <ul>
      <li><strong>Front-end processing</strong>: automated streaking and plating improves standardisation and frees technologists from repetitive work.</li>
      <li><strong>Digital plate imaging</strong> and colony classification can screen negative cultures and prioritise positive ones, shortening the path to identification.</li>
      <li><strong>MALDI-TOF</strong> and automated identification systems reduce time to identification and transcription error.</li>
      <li><strong>Expert systems</strong> apply rules to susceptibility results, suppressing redundant agents and flagging resistance patterns.</li>
      <li><strong>Blood culture</strong> monitoring and automated Gram-stain imaging speed up the first clinically useful result.</li>
    </ul>
    <h4>Artificial intelligence and predictive tools</h4>
    <p>Machine learning has been applied to colony images, Gram-stain images, MALDI spectra, whole-genome sequences and clinical data. A model can predict organism identity, resistance or the likelihood of sepsis, and natural-language processing can extract results from reports. Sequencing pipelines increasingly use automated resistance prediction. The appeal is consistency, throughput and earlier warning; the risk is that a plausible output is trusted without an evidence base.</p>
    <h4>Limitations</h4>
    <div class="table-wrap"><table>
      <tr><th>Issue</th><th>Consequence</th></tr>
      <tr><td><strong>Training-data bias</strong></td><td>Poor performance in populations, instruments or geographies not represented</td></tr>
      <tr><td><strong>Distribution drift</strong></td><td>Accuracy falls as organisms, media or workflows change</td></tr>
      <tr><td><strong>Black-box output</strong></td><td>Difficult to audit, explain or challenge clinically</td></tr>
      <tr><td><strong>Rare classes</strong></td><td>Dangerous misses for unusual pathogens or resistance mechanisms</td></tr>
      <tr><td><strong>Regulation and liability</strong></td><td>Unclear accountability when a model contributes to a wrong report</td></tr>
    </table></div>
    <h4>Validation and governance</h4>
    <p>Before use, a tool must be validated on <strong>local data</strong>, with a predefined intended use, acceptance criteria and comparison against the current method. Performance must be monitored after deployment, with version control, audit trails and a route for users to override or escalate. Human oversight remains essential: the technologist or pathologist signs out the result and retains responsibility. Governance also covers data privacy, cybersecurity, equity and transparency, and staff must be trained to understand the tool's failure modes. Automation should augment judgement, not replace it.</p>
  `,
  tip: "Balance the genuine gains against bias, drift and accountability — then insist on local validation and human sign-out.",
  sources: ["S12", "S13", "S25"]
},
{
  id: "d25", domain: "diagnostics", star: true,
  q: "How is infective endocarditis diagnosed in the laboratory? Explain the approach to culture-negative endocarditis.",
  tags: ["endocarditis", "blood culture", "culture-negative", "Duke criteria"],
  keypoints: ["three blood culture sets", "separate venepuncture sites", "before antibiotics", "modified Duke criteria", "culture-negative endocarditis", "HACEK group", "Coxiella burnetii", "Bartonella", "valve tissue PCR", "serology", "echocardiography", "prior antibiotics", "fastidious organisms"],
  answer: `
    <h4>Blood cultures</h4>
    <p>Blood cultures are the microbiological cornerstone. Obtain <strong>at least three sets</strong> from separate venepuncture sites before antibiotics, with adequate volume per bottle, because bacteraemia in endocarditis is usually continuous and low grade. Multiple positive bottles with the same organism support a true bacteraemia rather than contamination. If the patient is already on antibiotics, collect cultures as soon as possible and tell the laboratory, since yield falls sharply.</p>
    <h4>Laboratory methods</h4>
    <ul>
      <li>Standard aerobic and anaerobic bottles with prolonged incubation when a fastidious organism is suspected.</li>
      <li>Gram stain, subculture, identification (including MALDI-TOF) and full susceptibility testing of any isolate.</li>
      <li>Serology for <em>Coxiella burnetii</em> and <em>Bartonella</em> species when cultures are negative.</li>
      <li><strong>PCR and sequencing on valve tissue</strong> or vegetations, which can identify organisms that fail to grow.</li>
      <li>Histology of valve tissue to demonstrate inflammation and organisms.</li>
    </ul>
    <p>The diagnosis combines these results with echocardiography and clinical features in the <strong>modified Duke criteria</strong>, in which a typical organism from persistent bacteraemia is a major criterion.</p>
    <h4>Culture-negative endocarditis</h4>
    <p>Negative cultures occur in up to a substantial minority of cases and have several explanations: <strong>prior antibiotic therapy</strong> is the commonest; the organism may be fastidious or intracellular, such as the <strong>HACEK group</strong>, <em>Coxiella burnetii</em>, <em>Bartonella</em>, <em>Brucella</em>, <em>Legionella</em>, <em>Chlamydia</em> or <em>Tropheryma whipplei</em>; and non-infective causes such as marantic or autoimmune endocarditis may mimic infection.</p>
    <p>The approach is therefore to stop unnecessary antibiotics where safe, repeat cultures with proper technique, request specific serology, and obtain valve tissue for culture, histology and molecular testing. A systematic, organism-directed search is more useful than simply repeating a standard culture panel, and the laboratory should communicate clearly which tests have been exhausted.</p>
  `,
  tip: "Three sets before antibiotics, the modified Duke framework, then a named list of culture-negative agents — that is the expected shape.",
  sources: ["S4", "S12", "S13"]
},
{
  id: "d26", domain: "diagnostics", star: true,
  q: "Describe the laboratory diagnosis and monitoring of HIV infection, including the diagnostic algorithm, infant testing and virological monitoring.",
  tags: ["HIV", "diagnostic algorithm", "viral load", "early infant diagnosis"],
  keypoints: ["fourth-generation antigen antibody assay", "p24 antigen", "supplemental assay", "nucleic acid test", "window period", "early infant diagnosis", "maternal antibody", "CD4 count", "HIV RNA viral load", "genotypic resistance", "HLA-B*57:01", "quality assurance"],
  answer: `
    <h4>Diagnostic algorithm</h4>
    <p>Screening uses a <strong>fourth-generation immunoassay</strong> that detects both HIV-1/2 antibody and p24 antigen, shortening the window period compared with antibody-only tests. A reactive screen is not a diagnosis: it is confirmed with a <strong>supplemental assay</strong> of different design and, if the results are discrepant, resolved with a <strong>nucleic acid test</strong>. This sequence avoids reporting a false-positive result and is the basis of national algorithms.</p>
    <h4>Acute infection and window period</h4>
    <p>During acute infection, antibody may be absent while p24 antigen and RNA are detectable. A negative antibody test in a person with a compatible illness and recent exposure therefore requires a molecular test, and the laboratory should be told the clinical suspicion. Very early treatment can also blunt seroconversion, so the algorithm must allow for it.</p>
    <h4>Infants and children</h4>
    <p>Maternal IgG crosses the placenta and persists for many months, so <strong>serology is unreliable in infancy</strong>. Infants born to mothers with HIV are tested with a <strong>virological assay</strong> (HIV DNA or RNA) at defined intervals, and infection is excluded only after the recommended series of negative results. Dried blood spots allow testing where cold chain is limited.</p>
    <h4>Monitoring</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Purpose</th></tr>
      <tr><td><strong>CD4 count and percentage</strong></td><td>Immune status, opportunistic infection risk, prophylaxis decisions</td></tr>
      <tr><td><strong>HIV RNA viral load</strong></td><td>Response to antiretroviral therapy and detection of virological failure</td></tr>
      <tr><td><strong>Genotypic resistance</strong></td><td>Before therapy and when failure is confirmed</td></tr>
      <tr><td><strong>HLA-B*57:01</strong></td><td>Avoid abacavir hypersensitivity</td></tr>
      <tr><td><strong>Serology for co-infections</strong></td><td>Hepatitis B and C, syphilis, tuberculosis screening</td></tr>
    </table></div>
    <p>A rising viral load on therapy prompts assessment of adherence, drug interactions and resistance before any change. Assays must participate in external quality assessment, because a false viral load can lead to unnecessary regimen switches or false reassurance. The laboratory's role is not only to diagnose but to provide reliable, timely data that guide lifelong treatment.</p>
  `,
  tip: "Screen, confirm, resolve with NAAT; then infant virological testing and viral-load monitoring — the three phases of the HIV laboratory pathway.",
  sources: ["S16", "S12", "S11"]
},
{
  id: "d27", domain: "diagnostics", star: true,
  q: "Explain diagnostic stewardship. How can the laboratory reduce unnecessary testing without compromising patient care?",
  tags: ["diagnostic stewardship", "utilization", "C. difficile testing", "antimicrobial stewardship"],
  keypoints: ["right test right patient right time", "avoid reflex urine culture", "C. difficile testing only on unformed stool", "avoid testing after laxatives", "sputum quality screening", "repeat blood cultures", "reflex algorithms", "clinical decision support", "two-step testing", "metrics and audit", "laboratory clinician collaboration"],
  answer: `
    <h4>Definition</h4>
    <p>Diagnostic stewardship is the selection of the <strong>right test for the right patient at the right time</strong>, with results reported in a way that improves decisions. It sits alongside antimicrobial stewardship: a test that is not indicated cannot help, and a false-positive result actively harms by triggering unnecessary antibiotics, isolation and procedures.</p>
    <h4>Targets in microbiology</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Stewardship issue</th></tr>
      <tr><td><strong>Urine culture</strong></td><td>Reflex culture on every urinalysis; screening asymptomatic patients; catheter specimens without symptoms</td></tr>
      <tr><td><strong><em>C. difficile</em> testing</strong></td><td>Testing formed stool or testing after laxatives; using NAAT alone without toxin in low-risk patients</td></tr>
      <tr><td><strong>Sputum culture</strong></td><td>Culture of saliva; repeated cultures without clinical change</td></tr>
      <tr><td><strong>Blood cultures</strong></td><td>Repeat sets without indication; cultures through existing lines; low pretest probability</td></tr>
      <tr><td><strong>Wound swabs</strong></td><td>Swabbing colonised surfaces instead of sending tissue or aspirate</td></tr>
      <tr><td><strong>Serology</strong></td><td>Using antibody tests for acute diagnosis where molecular testing is superior</td></tr>
    </table></div>
    <h4>Tools</h4>
    <ul>
      <li><strong>Order sets and reflex algorithms</strong> that require a clinical indication or a positive screening step.</li>
      <li><strong>Clinical decision support</strong> in the electronic record, with prompts, hard stops and feedback at the point of order.</li>
      <li><strong>Two-step testing</strong> — for example GDH plus toxin for <em>C. difficile</em>, or a screening assay followed by confirmation.</li>
      <li><strong>Selective reporting</strong> and comments that discourage interpretation of likely contaminants.</li>
      <li><strong>Audit and feedback</strong> of test volumes, positivity rates, contamination rates and turnaround time.</li>
    </ul>
    <h4>Risks and evaluation</h4>
    <p>Stewardship must not delay a test that is genuinely needed. Hard stops can backfire if clinicians work around them, and a policy that is imposed without education erodes trust. Success is measured by reduced low-value testing, lower contamination and false-positive rates, fewer unnecessary antibiotic days and unchanged or improved outcomes — not by test volume alone. The laboratory, infectious diseases service and stewardship team should own the programme together, with a clear route for exceptions.</p>
  `,
  tip: "Define it, give four concrete test examples, then one risk and one outcome measure — that keeps it clinical rather than managerial.",
  sources: ["S12", "S9", "S22"]
},
{
  id: "d28", domain: "diagnostics",
  q: "Describe the packaging, labelling and shipment of infectious substances and the chain of custody for referral testing.",
  tags: ["transport", "UN3373", "chain of custody", "referral laboratory"],
  keypoints: ["triple packaging", "primary receptacle", "secondary packaging", "rigid outer packaging", "absorbent material", "UN2814 category A", "UN3373 category B", "UN1845 dry ice", "shipper training", "chain of custody", "leak-proof", "risk assessment", "notification of authority"],
  answer: `
    <h4>Why it matters</h4>
    <p>Referral of specimens to a reference laboratory is routine, but a leaking package exposes couriers, laboratory staff and the public. Transport therefore follows a <strong>triple-packaging</strong> system and internationally agreed classification, and staff who pack or sign for shipments require documented training.</p>
    <h4>Classification</h4>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>Meaning</th><th>UN number</th></tr>
      <tr><td><strong>A</strong></td><td>Infectious substance capable of causing permanent disability or life-threatening disease in humans or animals</td><td>UN2814 (humans), UN2900 (animals)</td></tr>
      <tr><td><strong>B</strong></td><td>Biological substance that does not meet Category A criteria</td><td>UN3373</td></tr>
      <tr><td><strong>Dry ice</strong></td><td>Used as a refrigerant; requires its own marking and ventilation precautions</td><td>UN1845</td></tr>
    </table></div>
    <p>The classification is a <strong>risk assessment</strong>, not a guess based on the patient's diagnosis. A culture of a high-risk organism is treated differently from a routine serum sample, and the shipper must know the current regulations and the carrier's requirements.</p>
    <h4>Packing</h4>
    <ul>
      <li><strong>Primary receptacle</strong>: leak-proof and labelled with the patient and specimen identifiers.</li>
      <li><strong>Secondary packaging</strong>: leak-proof, enclosing enough <strong>absorbent material</strong> to take up all liquid if the primary breaks.</li>
      <li><strong>Outer packaging</strong>: rigid, with the correct proper shipping name, UN number, orientation labels and responsible-person details.</li>
      <li>Itemised contents, request form and any required permits placed outside the secondary packaging so they are not contaminated.</li>
      <li>Refrigerants arranged so that melting ice cannot compromise the specimen or the packaging.</li>
    </ul>
    <h4>Chain of custody and documentation</h4>
    <p>For forensic, occupational exposure or select-agent specimens, a <strong>chain of custody</strong> records every transfer with time, name, signature and purpose. Routine referral still needs a tracking number and confirmation of receipt. If a package leaks or is damaged, do not ship it: isolate it, decontaminate, notify the responsible person and document the incident. The laboratory should also confirm that the receiving laboratory is accredited and that the test is not available locally, so that transport adds diagnostic value rather than delay.</p>
  `,
  tip: "Triple packaging plus the Category A/B distinction, then chain of custody — the exam is testing regulatory awareness, not courier trivia.",
  sources: ["S12", "S21", "S25"]
},
{
  id: "d29", domain: "diagnostics", star: true,
  q: "What is a cumulative antibiogram? Explain its construction, uses and limitations for empirical therapy and stewardship.",
  tags: ["antibiogram", "surveillance", "empirical therapy", "CLSI M39"],
  keypoints: ["cumulative annual antibiogram", "first isolate per patient", "minimum number of isolates", "percentage susceptible", "CLSI M39", "stratify by site and unit", "deduplication", "breakpoint version", "outpatient versus inpatient", "trend monitoring", "not for individual therapy", "small numbers"],
  answer: `
    <h4>Definition</h4>
    <p>A cumulative antibiogram summarises the susceptibility of clinical isolates over a defined period, usually a calendar year, by organism and specimen source. It is the laboratory's main contribution to <strong>empirical therapy guidelines</strong>, formulary decisions and resistance surveillance, and it complements the national data submitted to programmes such as GLASS.</p>
    <h4>Construction</h4>
    <ul>
      <li>Include <strong>consecutive clinical isolates</strong> from diagnostic specimens; exclude surveillance and colonisation isolates unless a separate antibiogram is intended.</li>
      <li>Count only the <strong>first isolate per patient per episode</strong> (deduplication), so that a patient with repeated cultures does not skew the result.</li>
      <li>Report only when there are enough isolates — a commonly used minimum is about 30 — otherwise suppress the cell or pool the data.</li>
      <li>Use validated susceptibility results and a single, documented breakpoint version; mixing CLSI and EUCAST or old and new breakpoints invalidates comparison.</li>
      <li>Stratify by <strong>specimen type and care setting</strong> — urine, blood, wound, ICU versus outpatient — because resistance differs markedly.</li>
    </ul>
    <h4>Uses</h4>
    <div class="table-wrap"><table>
      <tr><th>Use</th><th>Example</th></tr>
      <tr><td>Empirical guideline</td><td>Choosing first-line therapy for community-acquired urinary infection</td></tr>
      <tr><td>Formulary review</td><td>Removing an agent with low local susceptibility</td></tr>
      <tr><td>Stewardship</td><td>Monitoring the effect of an antibiotic restriction policy</td></tr>
      <tr><td>Outbreak signal</td><td>A sudden shift in susceptibility within a unit</td></tr>
      <tr><td>Accreditation and public reporting</td><td>Transparent local resistance data</td></tr>
    </table></div>
    <h4>Limitations</h4>
    <p>An antibiogram is retrospective and lags behind current practice. Aggregation hides ward-level variation and case mix, and small numbers make percentages unstable. It describes isolates submitted to the laboratory, not all infected patients, and it cannot guide treatment of an individual patient — that requires the actual isolate and its susceptibility. Changes in taxonomy, testing methods or breakpoints can create apparent trends. The report should therefore state the period, the deduplication rule, the breakpoint standard and the number tested, and it should be read alongside local epidemiology and stewardship data.</p>
  `,
  tip: "Construction rules (first isolate, minimum number, breakpoints) plus the caution that it is never individual therapy — that is the mark of a good answer.",
  sources: ["S8", "S12", "S14"]
},
{
  id: "d30", domain: "diagnostics",
  q: "Discuss the role of environmental and water microbiology in preventing healthcare-associated infection. How should sampling be used?",
  tags: ["environment", "water", "Legionella", "C. auris", "outbreak"],
  keypoints: ["water system biofilm", "Legionella risk assessment", "Pseudomonas aeruginosa", "non-tuberculous mycobacteria", "point-of-use filters", "sink as reservoir", "Candida auris persistence", "Aspergillus and construction", "HEPA and pressure", "targeted sampling", "neutraliser", "outbreak investigation"],
  answer: `
    <h4>Why the environment matters</h4>
    <p>Most healthcare-associated pathogens are transmitted by hands and devices, but the <strong>built environment</strong> is an important reservoir. Water systems harbour biofilm that shelters <em>Legionella</em>, <em>Pseudomonas aeruginosa</em>, non-tuberculous mycobacteria and fungi, and sinks, drains, ice machines, humidifiers and decorative fountains can amplify and disperse them. Contaminated surfaces and shared equipment contribute to the spread of resistant organisms, and <em>Candida auris</em> is notable for persisting on dry surfaces and spreading between patients.</p>
    <h4>Water and air controls</h4>
    <div class="table-wrap"><table>
      <tr><th>Reservoir</th><th>Control</th></tr>
      <tr><td><em>Legionella</em> in hot water</td><td>Temperature control, flushing, risk assessment and a written water-safety plan</td></tr>
      <tr><td><em>Pseudomonas</em> at outlets</td><td>Point-of-use filters, cleaning, avoiding stagnation</td></tr>
      <tr><td>Sinks and drains</td><td>Do not dispose of body fluids or infusions; design and cleaning to limit splash</td></tr>
      <tr><td>Construction dust</td><td>Barriers, negative pressure, HEPA filtration for high-risk units</td></tr>
      <tr><td>Fungi in air</td><td>Ventilation, pressure relationships and environmental monitoring during building work</td></tr>
    </table></div>
    <h4>Sampling</h4>
    <p>Routine random environmental sampling is expensive and poorly predictive, so it is <strong>targeted</strong>: during an outbreak, after a breach, or as part of a validated water-safety programme. Sampling should be driven by a hypothesis — the same organism in patients and the environment, a plausible route, and a plan to act on the result. Water samples are neutralised to stop residual disinfectant, transported in the dark and cultured with appropriate media and incubation; air sampling uses settle plates or volumetric samplers with defined times and locations.</p>
    <h4>Interpretation and action</h4>
    <p>A positive environmental culture does not by itself prove transmission. It must be linked to patient isolates by species, susceptibility and where possible <strong>whole-genome sequencing</strong>, and interpreted with the epidemiology. The response is usually engineering and practice change — repair, cleaning, filters, flushing, hand-hygiene training or restricting a sink — rather than more sampling.</p>
    <p>Prevention depends on a multidisciplinary water-safety and infection-control programme with clear ownership, documentation and review. The laboratory contributes method selection, interpretation and outbreak support, but environmental microbiology is a means to an end: safer care, not a certificate on a wall.</p>
  `,
  tip: "Say that sampling is targeted, not routine, and that a positive environmental culture needs a link to patients before it means transmission.",
  sources: ["S22", "S21", "S12"]
}
);
