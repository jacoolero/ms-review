/* Parasitology — additional Echinococcus essays (p2h1–p2h5) */
window.QBANK.push(
{
  id: "p2h1", domain: "p2", star: true,
  q: "Explain what hydatid serology measures, why it cross-reacts, and how the results should be interpreted alongside imaging.",
  tags: ["hydatid serology", "antigen B", "cross-reactivity", "immunoblot"],
  keypoints: ["antigen B", "arc 5", "ELISA", "indirect haemagglutination", "immunoblot", "CE1", "CE5", "seronegative", "exposure not viability", "phosphorylcholine", "cysticercosis", "cross-reaction", "rheumatoid factor", "positive predictive value", "Em2", "Em18"],
  answer: `
    <h4>What antibody tests can and cannot say</h4>
    <p>Serology detects antibody to hydatid antigens, chiefly <strong>antigen B</strong> and <strong>arc 5</strong>, by ELISA, indirect haemagglutination or immunoblot. Sensitivity is stage-dependent: roughly 85–95% in active CE1 and CE2 cysts, lower in CE3, and below 50% in inactive CE4 and CE5 cysts. Lung, bone and small cysts are often seronegative. A positive result means exposure, not viability, and titres may remain raised for years after successful treatment.</p>
    <h4>Why cross-reactions occur</h4>
    <p>Antigen B is a lipoprotein family with shared carbohydrate and <strong>phosphorylcholine</strong> epitopes, so antibodies bind antigens from other helminths. Cross-reactions are reported with <strong>cysticercosis</strong>, <em>Taenia saginata</em>, <em>Hymenolepis nana</em>, <em>Fasciola</em>, <em>Toxocara</em> and <em>Ascaris</em>, and false positives occur with <strong>rheumatoid factor</strong>, autoimmune disease, cirrhosis and some malignancies. In a low-endemic country such as the Philippines, where most cystic echinococcosis is imported, the <strong>positive predictive value</strong> of a single ELISA is low.</p>
    <h4>Interpretation in practice</h4>
    <div class="table-wrap"><table>
      <tr><th>Situation</th><th>Interpretation</th></tr>
      <tr><td>Positive ELISA, typical CE1/CE2 image</td><td>Supports diagnosis; confirm with immunoblot</td></tr>
      <tr><td>Negative ELISA, typical image</td><td>Does not exclude; repeat or use another method</td></tr>
      <tr><td>Positive ELISA, calcified CE5 cyst</td><td>Likely past exposure; imaging decides</td></tr>
      <tr><td>Positive ELISA, cysticercosis present</td><td>Cross-reaction; use a species-specific assay</td></tr>
    </table></div>
    <h4>Using serology well</h4>
    <ul>
      <li>Order it as an <strong>adjunct to imaging</strong>, never as the sole diagnostic test.</li>
      <li>Confirm a first positive with a second method, ideally <strong>immunoblot</strong> for antigen B.</li>
      <li>Record a baseline before PAIR or surgery, then trend titres alongside scans.</li>
      <li>Use <strong>Em2 or Em18</strong> for alveolar echinococcosis; antigen B assays are for cystic disease.</li>
      <li>Do not use serology alone to declare cure; combine it with cyst morphology and, where available, antigen or <strong>PCR</strong>.</li>
    </ul>
    <p>The safe rule is that imaging defines the lesion, serology supports it, and neither replaces follow-up.</p>
  `,
  tip: "Separate the three questions serology is asked — is it hydatid, is it active, is it cured — and show that it answers only the first well.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p2h2", domain: "p2", star: true,
  q: "Describe the PAIR technique for cystic echinococcosis, its selection criteria, and how its complications are prevented and managed.",
  tags: ["PAIR", "scolicidal agent", "hydatid complications", "biliary fistula"],
  keypoints: ["PAIR", "CE1", "CE3a", "biliary communication", "albendazole", "95% ethanol", "hypertonic saline", "sclerosing cholangitis", "bilirubin", "PCR", "anaphylaxis", "secondary echinococcosis", "ERCP", "80–90%", "recurrence"],
  answer: `
    <h4>What PAIR does</h4>
    <p>PAIR stands for <strong>puncture, aspiration, injection, re-aspiration</strong>. Under ultrasound or CT guidance the cyst is punctured, fluid aspirated, a <strong>scolicidal agent</strong> injected and left for 10–15 minutes, then re-aspirated. The aim is to kill the germinal layer and collapse the cavity without open surgery. It is first-line for a suitable <strong>CE1</strong> or <strong>CE3a</strong> cyst of 5–10 cm with no biliary communication.</p>
    <h4>Technique and precautions</h4>
    <ol>
      <li>Give <strong>albendazole</strong> for at least four days before and about one month after the procedure.</li>
      <li>Confirm stage, size, location and duct relations; exclude a biliary fistula with MRCP when jaundice or cholangitis is present.</li>
      <li>Use aseptic technique and local anaesthesia; aspirate slowly to avoid a sudden pressure change.</li>
      <li>Send fluid for cytology, antigen and <strong>PCR</strong>, and check <strong>bilirubin</strong> to detect a biliary connection.</li>
      <li>Inject <strong>95% ethanol</strong> or <strong>hypertonic saline</strong>; avoid ethanol if a communication is proven, because of <strong>sclerosing cholangitis</strong>.</li>
      <li>Re-aspirate completely and leave a catheter for large cysts.</li>
    </ol>
    <h4>Complications</h4>
    <div class="table-wrap"><table>
      <tr><th>Complication</th><th>Mechanism and response</th></tr>
      <tr><td><strong>Anaphylaxis</strong></td><td>Fluid spillage; stop, support the airway, give adrenaline</td></tr>
      <tr><td>Secondary echinococcosis</td><td>Viable protoscoleces seed the peritoneum or needle tract</td></tr>
      <tr><td>Biliary fistula or cholangitis</td><td>Injury or communication; ERCP and drainage</td></tr>
      <tr><td>Abscess or bleeding</td><td>Infection or vessel injury; antibiotics, imaging, surgery</td></tr>
      <tr><td>Recurrence</td><td>Incomplete killing; repeat imaging and consider repeat PAIR</td></tr>
    </table></div>
    <h4>Avoiding trouble</h4>
    <p>Do not aspirate a superficial, inaccessible or multivesicular cyst outside a specialist setting. Have resuscitation drugs and anaesthetic support ready, and arrange imaging follow-up before starting. Success is roughly <strong>80–90%</strong>, with <strong>recurrence</strong> in about 10–30%, so PAIR is a controlled procedure rather than a simple needle drainage.</p>
  `,
  tip: "Walk through the acronym, then attach one safeguard and one complication to each step — that structure covers both halves of the question.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p2h3", domain: "p2", star: true,
  q: "Discuss the pharmacology of albendazole in echinococcosis, the monitoring it requires, and the limits of its effectiveness.",
  tags: ["albendazole", "monitoring", "hepatotoxicity", "echinococcosis treatment"],
  keypoints: ["β-tubulin", "albendazole sulfoxide", "fatty meal", "10–15 mg/kg/day", "30%", "CBC", "ALT", "leucopenia", "hepatotoxicity", "alopecia", "dexamethasone", "carbamazepine", "pregnancy", "adherence", "alveolar echinococcosis"],
  answer: `
    <h4>How albendazole works</h4>
    <p>Albendazole is a benzimidazole that binds parasite <strong>β-tubulin</strong>, blocks microtubule assembly, and impairs glucose uptake and glycogen storage. The active metabolite is <strong>albendazole sulfoxide</strong>. Absorption rises with a <strong>fatty meal</strong>, and hepatic first-pass metabolism means drug interactions matter. For cystic echinococcosis the dose is <strong>10–15 mg/kg/day</strong> in two divided doses, usually for three to six months and around PAIR or surgery; alveolar disease needs continuous treatment for years.</p>
    <h4>What to monitor</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Baseline</th><th>During treatment</th><th>Action</th></tr>
      <tr><td><strong>CBC</strong></td><td>Yes</td><td>Every 2 weeks early, then monthly</td><td>Interrupt if neutrophils or platelets fall sharply</td></tr>
      <tr><td><strong>ALT, AST, bilirubin</strong></td><td>Yes</td><td>Every 2 weeks early, then 1–3 monthly</td><td>Stop if transaminases exceed 2–3 times baseline</td></tr>
      <tr><td>Renal function</td><td>Yes</td><td>Periodically</td><td>Review dose in renal impairment</td></tr>
      <tr><td>Pregnancy test</td><td>Before starting</td><td>As indicated</td><td>Avoid in the first trimester</td></tr>
    </table></div>
    <h4>Adverse effects and interactions</h4>
    <ul>
      <li>Nausea, abdominal pain, headache and <strong>alopecia</strong> are common and usually reversible.</li>
      <li><strong>Hepatotoxicity</strong> and <strong>leucopenia</strong> are the important risks; rare agranulocytosis and acute liver injury require prompt withdrawal.</li>
      <li><strong>Dexamethasone</strong> and praziquantel raise sulfoxide levels; <strong>carbamazepine</strong> and phenytoin lower them.</li>
      <li>Avoid in <strong>pregnancy</strong>, especially the first trimester, and advise contraception during therapy.</li>
    </ul>
    <h4>What the drug can and cannot do</h4>
    <p>Albendazole alone cures only about <strong>30%</strong> of cystic echinococcosis and shrinks or stabilises many others; it does not reliably sterilise a large or thick-walled cyst. <strong>Adherence</strong>, food timing and toxicity monitoring decide whether the course is completed. In <strong>alveolar echinococcosis</strong> it is suppressive rather than curative, so treatment is long and monitoring continues indefinitely.</p>
  `,
  tip: "Balance the pharmacology with a concrete monitoring schedule; examiners reward the two-week early check and the stopping rule.",
  sources: ["P1", "P2", "P4"]
},
{
  id: "p2h4", domain: "p2", star: true,
  q: "Explain how a hydatid cyst ruptures, recognise the resulting anaphylactic and mechanical syndromes, and outline emergency management.",
  tags: ["cyst rupture", "anaphylaxis", "adrenaline", "hydatid emergency"],
  keypoints: ["spontaneous", "trauma", "biliary tree", "peritoneum", "bronchus", "protoscoleces", "anaphylaxis", "adrenaline", "0.5 mg", "urticaria", "hypotension", "ERCP", "hypertonic saline", "albendazole", "secondary echinococcosis"],
  answer: `
    <h4>How rupture happens</h4>
    <p>A hydatid cyst is a pressurised sac of antigenic fluid. It can rupture <strong>spontaneously</strong>, after <strong>trauma</strong>, or during PAIR or surgery. The tear may open into the <strong>biliary tree</strong>, <strong>peritoneum</strong>, pleura, <strong>bronchus</strong>, bowel or a vessel. Rupture does two things at once: it releases <strong>protoscoleces</strong> that can seed new cysts, and it exposes the host to a large antigen load that can trigger <strong>anaphylaxis</strong>.</p>
    <h4>Recognising the syndrome</h4>
    <ul>
      <li>Sudden abdominal or chest pain, <strong>urticaria</strong>, flushing, angioedema, wheeze and <strong>hypotension</strong>.</li>
      <li>Fever, eosinophilia and peritoneal signs when cyst contents irritate the peritoneum.</li>
      <li>Jaundice or cholangitis after rupture into the <strong>biliary tree</strong>.</li>
      <li>Expectoration of salty fluid or membranes after rupture into the <strong>bronchus</strong>.</li>
      <li>Shock may be the first sign, so ask about a known cyst in any unexplained anaphylaxis.</li>
    </ul>
    <h4>Immediate management</h4>
    <ol>
      <li>Call for help, secure the airway, give oxygen and establish IV access.</li>
      <li>Give <strong>intramuscular adrenaline</strong> — <strong>0.5 mg</strong> for an adult, 0.01 mg/kg for a child — and repeat after 5 minutes if needed.</li>
      <li>Infuse crystalloid, then add antihistamines, corticosteroids and nebulised bronchodilators as adjuncts.</li>
      <li>Image urgently with ultrasound or CT; involve surgery and gastroenterology.</li>
      <li>Treat biliary obstruction by <strong>ERCP</strong>; wash the peritoneum with <strong>hypertonic saline</strong> at surgery and start <strong>albendazole</strong> to limit <strong>secondary echinococcosis</strong>.</li>
    </ol>
    <h4>Prevention</h4>
    <p>Cover PAIR and surgery with albendazole, avoid aspirating superficial cysts, keep resuscitation drugs at hand, and never drain a suspected hydatid cyst outside a prepared setting. In endemic areas, a patient with unexplained anaphylaxis should be asked about previous imaging and animal contact.</p>
  `,
  tip: "Treat anaphylaxis first and the cyst second; state the adrenaline dose before discussing imaging or surgery.",
  sources: ["P1", "P2", "P3", "P4"]
},
{
  id: "p2h5", domain: "p2",
  q: "Outline long-term follow-up after treatment of echinococcosis, define response, and explain the causes and detection of recurrence.",
  tags: ["follow-up", "recurrence", "hydatid surveillance", "alveolar echinococcosis"],
  keypoints: ["ultrasound", "1, 3, 6 and 12 months", "5–10 years", "CT or MRI", "serology", "calcified", "recurrence", "10–30%", "spillage", "multivesicular", "biliary communication", "adherence", "secondary echinococcosis", "alveolar", "loss to follow-up"],
  answer: `
    <h4>A schedule, not a single visit</h4>
    <p>Follow-up after treatment is designed to detect regrowth while the treated cavity is still small. Clinical review and <strong>ultrasound</strong> are done at about <strong>1, 3, 6 and 12 months</strong>, then yearly for at least <strong>5–10 years</strong>. <strong>CT or MRI</strong> is added for extrahepatic, bone or complicated disease, and <strong>serology</strong> is measured at the same visits as a trend rather than a stand-alone test.</p>
    <h4>What counts as response</h4>
    <div class="table-wrap"><table>
      <tr><th>Finding</th><th>Interpretation</th></tr>
      <tr><td>Cyst disappears or shrinks progressively</td><td>Response</td></tr>
      <tr><td>Solid, <strong>calcified</strong>, stable cavity</td><td>Inactive; continue observation</td></tr>
      <tr><td>Fluid reaccumulates or daughter cysts appear</td><td>Recurrence or treatment failure</td></tr>
      <tr><td>Rising antibody titre</td><td>Supports relapse but is not proof</td></tr>
      <tr><td>New cyst elsewhere</td><td><strong>Secondary echinococcosis</strong> until proven otherwise</td></tr>
    </table></div>
    <h4>Recurrence and its causes</h4>
    <p><strong>Recurrence</strong> occurs in roughly <strong>10–30%</strong> after PAIR or surgery. Risk rises with cyst <strong>spillage</strong>, incomplete removal, <strong>multivesicular</strong> or large cysts, multiple cysts, a <strong>biliary communication</strong>, and poor <strong>adherence</strong> to albendazole. Most relapses appear within the first few years, which is why the early scans matter; late relapse can occur many years later. A residual cavity that stays stable is not a recurrence, so avoid unnecessary re-treatment based on a single scan.</p>
    <h4>The long view</h4>
    <p>Repeat PAIR or surgery plus a further albendazole course is usually effective for a true recurrence. <strong>Alveolar</strong> echinococcosis needs lifelong imaging and drug monitoring because it behaves like a slow malignancy. In practice, the greatest threat is <strong>loss to follow-up</strong>: register the patient, give a written schedule, and link recall to the rural health unit or the referring hospital.</p>
  `,
  tip: "Define response before recurrence, then convert the risk list into a recall plan — follow-up is a system, not a scan.",
  sources: ["P1", "P2", "P4", "P4"]
}
);
