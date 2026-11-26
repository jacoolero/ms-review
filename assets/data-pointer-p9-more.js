/* Pointer-gap content — scabies (p9), second set: biology, spectrum, laboratory SOP,
   pharmacology, hospital outbreaks, burden and Philippine operations. */
window.QBANK.push(
{
  id: "p9h1", domain: "p9",
  q: "Explain the structural adaptations of Sarcoptes scabiei and the transmission dynamics that make household-based control necessary.",
  tags: ["Sarcoptes scabiei", "mite morphology", "transmission dynamics", "household"],
  keypoints: ["dorsal spines", "no eyes", "leg suckers I–II female", "I–II–IV male", "stratum corneum", "keratin", "two to three eggs daily", "10–14 days", "delayed hypersensitivity", "IgE", "three to six weeks", "one to four days re-exposure", "15–20 minutes contact", "household attack rate", "24–72 hours off host", "asymptomatic carrier"],
  answer: `
    <h4>Built for the burrow</h4>
    <p><em>Sarcoptes scabiei</em> is a rounded, <strong>0.2–0.4 mm</strong> mite with a striated cuticle, <strong>dorsal spines</strong> and stubby legs ending in claws. It has <strong>no eyes</strong>. The female bears suckers on legs I and II only; the male bears them on legs I, II and IV. These details separate it from other ectoparasites and let the microscopist sex a mite recovered from a burrow.</p>
    <p>The female chelicerae cut into the <strong>stratum corneum</strong>, where she eats <strong>keratin</strong>, lays <strong>two to three eggs daily</strong> and deposits <strong>scybala</strong>. Eggs hatch in three to four days, and larva to adult takes about <strong>10–14 days</strong>. A classical case carries only 10–15 mites, so the burrow — not the rash — is the parasite's habitat.</p>
    <h4>Why the itch arrives late</h4>
    <p>Lesions are largely a <strong>delayed hypersensitivity</strong> reaction with a Th2 and <strong>IgE</strong> component. First infestation itches after <strong>three to six weeks</strong>; re-exposure produces symptoms within <strong>one to four days</strong>. This explains the asymptomatic but infectious contact, and why a household can be seeded before anyone complains.</p>
    <h4>Transmission dynamics</h4>
    <ul>
      <li><strong>Prolonged skin-to-skin contact</strong> of roughly 15–20 minutes is usually needed; a handshake is inefficient.</li>
      <li>Household and sexual contacts carry the highest risk; secondary attack rates in households are high enough that treating only the symptomatic case fails.</li>
      <li>The mite survives <strong>24–72 hours</strong> off the host, longer in cool, humid conditions, so fomites matter mainly when the burden is huge.</li>
      <li>Animal varieties produce transient <strong>pseudoscabies</strong> and do not sustain human-to-human spread.</li>
    </ul>
    <p>Control follows from the biology: find the index case, treat every contact on the same day, and decontaminate linen.</p>
  `,
  tip: "Link each structural detail to a clinical or control consequence, and state the household attack-rate argument explicitly.",
  sources: ["P1", "P2", "P3", "P2"]
},
{
  id: "p9h2", domain: "p9", star: true,
  q: "Scabies is a spectrum rather than two diseases. Discuss the clinical variants and the hosts in whom the diagnosis is most easily missed.",
  tags: ["scabies", "clinical variants", "crusted scabies", "scabies incognito", "immunosuppression"],
  keypoints: ["spectrum", "classical", "crusted", "nodular", "bullous", "scabies incognito", "topical steroid", "infants", "scalp", "palms and soles", "elderly", "HIV", "HTLV-1", "Down syndrome", "minimal itch", "hyperkeratosis"],
  answer: `
    <h4>One parasite, several syndromes</h4>
    <p>Scabies is best taught as a spectrum. The same mite produces classical, nodular, bullous, crusted and masked disease, and the variant reflects host immunity and mite burden rather than a different organism.</p>
    <h4>The three practical patterns</h4>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Typical host and clue</th><th>Burden and contagion</th></tr>
      <tr><td>Classical</td><td>Healthy child or adult; nocturnal itch; burrows in finger webs and wrists</td><td>10–15 mites; needs prolonged contact</td></tr>
      <tr><td>Crusted</td><td>HIV, HTLV-1, transplant, steroids, Down syndrome, leprosy, dementia, malnutrition</td><td>Thousands to millions; brief contact and fomites</td></tr>
      <tr><td>Masked ("incognito")</td><td>Topical or systemic steroid; eczema-like plaques; itch suppressed</td><td>Variable, often large; under-recognised</td></tr>
    </table></div>
    <p>Crusted disease is not simply "bad hygiene". Effective immunity keeps mite numbers low and generates itch; when that response fails, mites multiply and the patient may hardly scratch. Minimal itch in a widespread hyperkeratotic eruption is therefore a warning, not reassurance.</p>
    <h4>Hosts in whom the diagnosis hides</h4>
    <ul>
      <li><strong>Infants</strong> — vesicles, pustules and involvement of the <strong>scalp</strong>, face, <strong>palms and soles</strong>; the itch is inferred from irritability.</li>
      <li><strong>Elderly</strong> — few lesions, confusion, or a pre-existing dermatosis that absorbs the rash.</li>
      <li><strong>Immunosuppressed</strong> — crusted plaques on nails, scalp and pressure areas, often mistaken for psoriasis or fungal infection.</li>
      <li><strong>Dark skin</strong> — prominent post-inflammatory pigmentation and excoriations rather than visible burrows.</li>
      <li><strong>Genital nodules</strong> — may be the presenting complaint and are not evidence of ongoing infestation.</li>
    </ul>
    <h4>Why the spectrum matters</h4>
    <p>Any widespread scaly eruption in an immunosuppressed inpatient should trigger scraping, isolation and empirical treatment while results are pending. Missing the crusted end of the spectrum converts a treatable dermatosis into a ward outbreak; over-diagnosing the nodular end produces repeated, unnecessary courses of scabicide.</p>
  `,
  tip: "Use three patterns in a table, then name the masked hosts — that is what separates a spectrum answer from a simple comparison.",
  sources: ["P1", "P2", "P2", "P4"]
},
{
  id: "p9h3", domain: "p9",
  q: "Write a laboratory standard operating procedure for confirming scabies, including specimen collection, microscopy, molecular testing and quality assurance.",
  tags: ["scabies", "laboratory SOP", "skin scraping", "PCR", "quality assurance"],
  keypoints: ["mineral oil", "intact burrow", "six to eight sites", "no formalin", "scybala", "eggshells", "KOH", "delta-wing jet", "adhesive tape", "PCR", "IACS", "test of cure", "inadequate sample", "competency", "audit", "negative scraping"],
  answer: `
    <h4>Before the bench</h4>
    <p>Choose an <strong>intact burrow</strong>, a fresh papule or, in crusted disease, the edge of a hyperkeratotic plaque. Dermoscopy improves site selection by showing the <strong>delta-wing jet</strong>. Clean the skin gently, place a drop of <strong>mineral oil</strong> on a scalpel blade and scrape until the stratum corneum is removed; a trace of capillary blood is acceptable. Sample <strong>six to eight sites</strong>, because a single classical lesion often yields nothing. Put the scrapings on a clean slide, add a coverslip and examine the same day. <strong>Never fix in formalin</strong>: it destroys mites and eggs.</p>
    <h4>Microscopy and reporting</h4>
    <p>Scan on low power, then confirm on high power. Report the <strong>mite</strong>, <strong>eggs</strong>, empty <strong>eggshells</strong>, larvae and <strong>scybala</strong> (faecal pellets). Scybala alone support the diagnosis when the mite is missed. <strong>KOH</strong> clears keratin but can distort or dissolve the mite, so it is a poor substitute for mineral oil. State whether the test is positive, negative or inadequate, and quantify roughly (scanty, moderate, numerous).</p>
    <h4>Adjuncts</h4>
    <ul>
      <li><strong>Adhesive tape</strong> — useful in children and crusted disease; lower yield but non-invasive.</li>
      <li><strong>Dermoscopy</strong> — rapid and bedside; accuracy depends on training.</li>
      <li><strong>PCR</strong> — highest sensitivity on scrapings or tape; valuable in outbreaks and atypical disease, but it cannot distinguish live from dead mites and is not a <strong>test of cure</strong>.</li>
    </ul>
    <h4>Quality assurance</h4>
    <div class="table-wrap"><table>
      <tr><th>Element</th><th>Standard</th></tr>
      <tr><td>Case definition</td><td>Apply the <strong>IACS</strong> confirmed, clinical and suspected categories consistently</td></tr>
      <tr><td>Competence</td><td>Documented training and periodic unknown-slide assessment</td></tr>
      <tr><td>Audit</td><td>Review negative scrapings against clinical response and household cases</td></tr>
      <tr><td>Report</td><td>Name the stage seen; avoid "no parasites" when the sample was <strong>inadequate</strong></td></tr>
    </table></div>
    <p>A <strong>negative scraping</strong> never excludes scabies. The laboratory's job is to make the negative result interpretable, not to pretend it is decisive.</p>
  `,
  tip: "An SOP needs pre-analytical, analytical and post-analytical steps plus a QA table — do not stop at 'scrape and look'.",
  sources: ["P2", "P3", "P8", "P2"]
},
{
  id: "p9h4", domain: "p9", star: true,
  q: "Discuss the pharmacology of scabicides, the reality of resistance, and a structured approach to apparent treatment failure.",
  tags: ["scabies", "permethrin", "ivermectin", "resistance", "treatment failure"],
  keypoints: ["permethrin", "voltage-gated sodium channel", "ivermectin", "glutamate-gated chloride", "200 µg/kg", "CYP3A4", "residual activity", "15 kg", "benzyl benzoate", "sulfur", "kdr", "subtherapeutic", "untreated contacts", "persistent itch", "resistance", "reinfection"],
  answer: `
    <h4>Two mechanisms, two niches</h4>
    <p><strong>Permethrin 5%</strong> is a pyrethroid that prolongs opening of <strong>voltage-gated sodium channels</strong> in the mite's nerve membrane. It is poorly absorbed through intact skin, has <strong>residual activity</strong> for about a week, and remains first-line for classical scabies, including in pregnancy and infancy. <strong>Ivermectin</strong> opens <strong>glutamate-gated chloride channels</strong>, causing paralysis; it is given orally at <strong>200 µg/kg</strong>, is a <strong>CYP3A4</strong> substrate, and is the practical choice for crusted disease, outbreaks and poor adherence.</p>
    <h4>Regimens that work</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Use</th><th>Key caution</th></tr>
      <tr><td>Permethrin 5%</td><td>Neck down for 8–14 hours; repeat day 7</td><td>Missed sites and poor application are common</td></tr>
      <tr><td>Ivermectin</td><td>200 µg/kg; second dose day 7–14</td><td>Not below <strong>15 kg</strong>; caution in pregnancy</td></tr>
      <tr><td>Benzyl benzoate 25%</td><td>Cheap alternative, repeated</td><td>Irritant; dilute in children</td></tr>
      <tr><td>Sulfur 10%</td><td>Infants and pregnancy where needed</td><td>Messy, malodorous, slow</td></tr>
    </table></div>
    <h4>Is resistance real?</h4>
    <p>Yes, but it is over-diagnosed. Permethrin resistance is established in parts of Australia and appears elsewhere; <strong>kdr</strong> mutations in the sodium channel and repeated ivermectin exposure in crusted disease are plausible mechanisms. Resistance should be considered only after adherence, contact treatment and reinfection have been excluded. Widespread <strong>subtherapeutic</strong> use — half-body application, single doses, untreated contacts — selects for it.</p>
    <h4>A failure algorithm</h4>
    <ol>
      <li>Re-examine the diagnosis: eczema, psoriasis, drug eruption and nodular scabies all persist without live mites.</li>
      <li>Check application, coverage and timing, especially in the elderly and disabled.</li>
      <li>List and treat every contact on the same day; ask about new sexual partners.</li>
      <li>Decontaminate linen and soft furnishings.</li>
      <li>If live mites persist after two adequate courses, consider resistance and change class.</li>
    </ol>
    <p><strong>Persistent itch</strong> for up to four weeks is expected and is treated with emollient, antihistamine or steroid — not another scabicide.</p>
  `,
  tip: "Put the common causes of failure before resistance; examiners reward the disciplined sequence.",
  sources: ["P1", "P2", "P6", "P4"]
},
{
  id: "p9h5", domain: "p9",
  q: "A tertiary hospital reports scabies in three patients and two nurses on the same ward. Set out the outbreak investigation, control measures and ethical problems.",
  tags: ["scabies", "hospital outbreak", "infection control", "occupational health", "ethics"],
  keypoints: ["three to six weeks", "crusted index case", "case definition", "line list", "attack rate", "cohort", "contact precautions", "mass treatment", "same day", "health-care workers", "occupational health", "60 °C", "72 hours", "two incubation periods", "consent", "confidentiality"],
  answer: `
    <h4>Why a ward outbreak is predictable</h4>
    <p>Three patients and two nurses on one ward is not a random cluster. Shared bathrooms, commodes, linen trolleys and frequent bed-to-bed contact link them, and the incubation period of <strong>three to six weeks</strong> means the exposure occurred before the first diagnosis. The usual source is an <strong>unrecognised crusted index case</strong> — an elderly or immunosuppressed patient with a scaly eruption and little itch.</p>
    <h4>Investigation</h4>
    <ul>
      <li>Confirm every case by scraping or dermoscopy and write a <strong>case definition</strong> using IACS categories.</li>
      <li>Build a <strong>line list</strong> of patients and staff with bed, ward, shift and contact dates.</li>
      <li>Map beds and staff rosters to identify the <strong>index case</strong> and the exposed cohort.</li>
      <li>Calculate <strong>attack rates</strong> by bay and by staff group.</li>
      <li>Screen all exposed patients, including those without itch, and examine skin under nails, on buttocks and in skin folds.</li>
    </ul>
    <h4>Control</h4>
    <div class="table-wrap"><table>
      <tr><th>Group</th><th>Action</th><th>Timing</th></tr>
      <tr><td>Cases</td><td><strong>Cohort</strong> or single room; <strong>contact precautions</strong> until 24 hours after effective treatment</td><td>Immediately</td></tr>
      <tr><td>Ward patients</td><td><strong>Mass treatment</strong> with permethrin or ivermectin</td><td><strong>Same day</strong></td></tr>
      <tr><td>Staff</td><td>Treat all exposed staff through <strong>occupational health</strong>; exclude until treated</td><td>Same day</td></tr>
      <tr><td>Environment</td><td>Linen at <strong>60 °C</strong>; bag non-washable items <strong>72 hours</strong>; clean shared equipment</td><td>Before reuse</td></tr>
      <tr><td>Communication</td><td>Inform receiving wards, visitors and the infection-control committee</td><td>Within 24 hours</td></tr>
    </table></div>
    <h4>The ethical layer</h4>
    <p>Mass treatment overrides individual choice, so <strong>consent</strong>, capacity and <strong>confidentiality</strong> must be handled explicitly. Treating cognitively impaired patients requires a surrogate decision-maker; staff diagnosis must not become ward gossip. The ethical justification is proportionality: the untreated exposed person is both a victim and a source. Continue surveillance for <strong>two incubation periods</strong> after the last case, and audit whether new admissions are screened for crusted disease.</p>
  `,
  tip: "Distinguish investigation from control, then add the ethics — the third part is where most answers lose marks.",
  sources: ["P2", "P3", "P2", "P6"]
},
{
  id: "p9h6", domain: "p9",
  q: "Why is scabies described as more than an itch? Discuss its medical complications and measurable burden.",
  tags: ["scabies", "complications", "impetigo", "APSGN", "burden of disease"],
  keypoints: ["sleep loss", "school absence", "stigma", "Staphylococcus aureus", "Streptococcus pyogenes", "impetigo", "cellulitis", "bacteraemia", "sepsis", "post-streptococcal glomerulonephritis", "haematuria", "rheumatic fever", "DALY", "not notifiable", "household cost", "barrier failure"],
  answer: `
    <h4>The itch is the least of it</h4>
    <p>Scabies causes sleep loss, poor concentration, school absence, lost work and considerable stigma. These are not soft outcomes: they drive repeated clinic visits, inappropriate steroid use and household expenditure in communities with little cash reserves. Because scabies is <strong>not notifiable</strong> in the Philippines, most of this burden never enters official statistics.</p>
    <h4>Bacterial complications</h4>
    <p>Excoriated skin is colonised by <strong>Staphylococcus aureus</strong> and <strong>Streptococcus pyogenes</strong>. The spectrum runs from <strong>impetigo</strong> and folliculitis to <strong>cellulitis</strong>, abscess, lymphangitis, <strong>bacteraemia</strong> and <strong>sepsis</strong>. Group A streptococcal skin infection can be followed by <strong>post-streptococcal glomerulonephritis</strong>, presenting one to three weeks later with <strong>haematuria</strong>, oedema and hypertension; repeated skin infection has also been linked to <strong>rheumatic fever</strong> in some tropical populations.</p>
    <div class="table-wrap"><table>
      <tr><th>Complication</th><th>Mechanism</th><th>Action</th></tr>
      <tr><td>Impetigo</td><td>Superficial staphylococcal or streptococcal infection</td><td>Topical or oral antibiotic; treat scabies</td></tr>
      <tr><td>Cellulitis or sepsis</td><td>Breached skin barrier, especially in the elderly</td><td>Systemic antibiotics; assess for bacteraemia</td></tr>
      <tr><td>APSGN</td><td>Immune complex deposition after streptococcal skin infection</td><td>Urinalysis, blood pressure, renal function; refer</td></tr>
      <tr><td>Crusted scabies</td><td><strong>Barrier failure</strong>, fluid loss, secondary infection</td><td>Combined scabicide, isolation, supportive care</td></tr>
    </table></div>
    <h4>Measuring the burden</h4>
    <ul>
      <li><strong>DALYs</strong> capture itch, sleep loss and secondary infection but are rarely calculated for scabies.</li>
      <li><strong>School and work absenteeism</strong> are practical, locally measurable indicators.</li>
      <li>Skin-infection admissions and antibiotic consumption are proxy markers of severe scabies.</li>
      <li><strong>Household cost</strong> includes drugs, laundry and lost wages.</li>
    </ul>
    <p>The clinical lesson is to look for bacteria at every scabies consultation, check urine and blood pressure after extensive impetiginised disease, and treat the household rather than the rash alone.</p>
  `,
  tip: "Move beyond nodules: connect skin infection to renal and systemic outcomes, then quantify the burden.",
  sources: ["P1", "P2", "P4", "P6"]
},
{
  id: "p9h7", domain: "p9",
  q: "Draft an operational plan for scabies control in a Philippine province under Universal Health Care, from mapping to sustainment.",
  tags: ["scabies", "Philippines", "Universal Health Care", "mass drug administration", "operational plan"],
  keypoints: ["case definition", "sentinel surveillance", "10% threshold", "mass drug administration", "provincial health office", "RHU", "barangay health workers", "Universal Health Care", "LGU", "permethrin", "ivermectin", "200 µg/kg", "two doses", "WASH", "coverage", "stigma"],
  answer: `
    <h4>Start with the map</h4>
    <p>A provincial plan begins with a shared <strong>case definition</strong> and a rapid prevalence survey in sentinel schools, prisons, care homes and Indigenous communities. The <strong>10% threshold</strong> is the practical decision point: below it, treat cases and contacts; at or above it, plan community-wide <strong>mass drug administration</strong>. Mapping must record crowding, water access and laundry facilities, because these determine recurrence.</p>
    <h4>Who does what</h4>
    <div class="table-wrap"><table>
      <tr><th>Level</th><th>Role</th><th>Indicator</th></tr>
      <tr><td><strong>Provincial health office</strong></td><td>Procurement, training, quality oversight</td><td>Stock-out days; staff trained</td></tr>
      <tr><td><strong>RHU</strong> and district hospital</td><td>Diagnosis, treatment, outbreak response</td><td>Cases treated; contacts traced</td></tr>
      <tr><td><strong>Barangay health workers</strong></td><td>Household enumeration, education, follow-up</td><td>Households visited; <strong>coverage</strong></td></tr>
      <tr><td>Schools and jails</td><td>Case finding; same-day contact treatment</td><td>Prevalence; attendance</td></tr>
    </table></div>
    <h4>Delivery and financing</h4>
    <p>Under <strong>Universal Health Care</strong>, scabies care belongs in primary care, not a vertical campaign. The <strong>LGU</strong> budget must carry <strong>permethrin</strong> and <strong>ivermectin</strong> on the essential medicines list, with a buffer stock for outbreaks. Ivermectin is given at <strong>200 µg/kg</strong> in <strong>two doses</strong>, excluding pregnancy and children under 15 kg; permethrin is preferred in those groups. Training barangay health workers to recognise burrows and refer severe cases is cheaper than treating complications.</p>
    <h4>Sustainment</h4>
    <ul>
      <li>Integrate with <strong>WASH</strong>, housing and school-health programmes.</li>
      <li>Monitor coverage, cure at two weeks, recurrence and skin-infection admissions.</li>
      <li>Run <strong>stigma</strong>-reduction messages: scabies is a parasite, not poor hygiene.</li>
      <li>Keep <strong>sentinel surveillance</strong> alive after the campaign ends.</li>
    </ul>
    <p>Success is not a single round of treatment but a system that finds cases, treats contacts the same day and prevents reinfection. A named provincial focal person, a standing drug buffer and a quarterly review keep the plan alive after the launch.</p>
  `,
  tip: "Write it as a plan with levels, indicators and money — a public-health answer without a budget is only a wish.",
  sources: ["P4", "P6", "P9", "P13", "P14"]
}
);
