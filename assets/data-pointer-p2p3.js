/* Parasitology — pointer topics: Echinococcus (p2) and Echinostoma (p3) */
window.QBANK.push(
{
  id: "p2g1", domain: "p2", star: true,
  q: "Apply the WHO-IWGE ultrasound classification to the management of cystic echinococcosis, including the CL stage and the limits of staging.",
  tags: ["Echinococcus", "WHO-IWGE", "hydatid cyst", "CE stage"],
  keypoints: ["WHO-IWGE", "CL", "CE1", "CE2", "CE3a", "CE3b", "CE4", "CE5", "activity group", "water-lily sign", "daughter cysts", "PAIR", "MRCP", "albendazole", "biliary communication", "stage migration"],
  answer: `
    <h4>What the classification adds</h4>
    <p>The WHO-IWGE system converts an ultrasound image into a biological statement — <strong>active</strong>, <strong>transitional</strong> or <strong>dead</strong> — and therefore into a treatment pathway. It also separates the undifferentiated <strong>CL</strong> cyst, which cannot be assigned until a double wall or another defining feature appears.</p>
    <div class="table-wrap"><table>
      <tr><th>Activity group</th><th>Stages</th><th>Sonographic signature</th><th>Management logic</th></tr>
      <tr><td>Undifferentiated</td><td><strong>CL</strong></td><td>Unilocular cyst without a double wall</td><td>Reassess; observe or albendazole if small</td></tr>
      <tr><td><strong>Active</strong></td><td><strong>CE1</strong>, <strong>CE2</strong></td><td>CE1 unilocular with double wall; CE2 multivesicular with <strong>daughter cysts</strong></td><td>PAIR for CE1, surgery for CE2, both with albendazole</td></tr>
      <tr><td><strong>Transitional</strong></td><td><strong>CE3a</strong>, <strong>CE3b</strong></td><td>CE3a detached membranes (<strong>water-lily sign</strong>); CE3b daughter cysts in solid matrix</td><td>PAIR for CE3a, surgery for CE3b, with albendazole</td></tr>
      <tr><td><strong>Inactive</strong></td><td><strong>CE4</strong>, <strong>CE5</strong></td><td>CE4 solid and heterogeneous; CE5 calcified</td><td>Observe; intervene only for symptoms or complications</td></tr>
    </table></div>
    <h4>Reading the stage at the bedside</h4>
    <ol>
      <li>Confirm a cystic lesion and look for a double wall, daughter cysts, detached membranes and calcification.</li>
      <li>Measure the cyst and map its relation to bile ducts and vessels.</li>
      <li>Assign the stage and record number, size and extrahepatic disease.</li>
      <li>Add modifiers: size above 10 cm, superficial location, rupture, infection, <strong>biliary communication</strong>, pregnancy.</li>
      <li>Choose PAIR, surgery, albendazole or observation, and plan imaging follow-up.</li>
    </ol>
    <h4>Limits of staging</h4>
    <p>Ultrasound is operator-dependent, observers disagree at stage boundaries, and cysts can migrate between stages over time. <strong>Stage migration</strong> means a scan is a snapshot, not a permanent label. Ultrasound cannot exclude a biliary fistula, so MRCP or ERCP is added when jaundice or cholangitis is present. Lung cysts are not staged by this hepatic scheme and usually need surgery. Serology supports but never replaces imaging.</p>
  `,
  tip: "Organise by activity group, not by seven memorised rows, then show that stage plus modifiers — not stage alone — picks the treatment.",
  sources: ["P1", "P3", "P4", "P6"]
},
{
  id: "p2g2", domain: "p2", star: true,
  q: "Compare PAIR, surgery and albendazole in cystic echinococcosis, and explain the pitfalls of hydatid serology.",
  tags: ["PAIR", "hydatid surgery", "albendazole", "hydatid serology"],
  keypoints: ["PAIR", "95% ethanol", "hypertonic saline", "pericystectomy", "β-tubulin", "10–15 mg/kg/day", "30% cure", "antigen B", "arc 5", "cross-reaction", "CE4/CE5 seronegative", "viability", "anaphylaxis", "biliary fistula"],
  answer: `
    <h4>Three options, different targets</h4>
    <p>All three aim to remove or sterilise the parasite, but they differ in invasiveness and in the cysts they can reach.</p>
    <div class="table-wrap"><table>
      <tr><th>Option</th><th>How it works</th><th>Best indications</th><th>Limits</th></tr>
      <tr><td><strong>PAIR</strong></td><td>Puncture, aspirate, inject <strong>95% ethanol</strong> or <strong>hypertonic saline</strong>, re-aspirate</td><td>CE1 and CE3a; 5–10 cm; imaging and follow-up available</td><td>Not for CE2/CE3b, inaccessible or superficial cysts, biliary communication, lung cysts</td></tr>
      <tr><td><strong>Surgery</strong></td><td><strong>Pericystectomy</strong> or cystectomy with capitonnage or omentoplasty</td><td>Large, multivesicular, complicated, ruptured, infected or fistulised cysts</td><td>Morbidity, hospital stay, specialist expertise, spillage risk</td></tr>
      <tr><td><strong>Albendazole</strong></td><td>Binds <strong>β-tubulin</strong>; <strong>10–15 mg/kg/day</strong> in cycles or continuously</td><td>Small CE1, inoperable or disseminated disease, cover for PAIR or surgery</td><td>Only about <strong>30% cure</strong>; hepatotoxicity and leucopenia; months of therapy</td></tr>
    </table></div>
    <h4>Choosing</h4>
    <p><strong>PAIR</strong> is first-line for a suitable CE1 or CE3a cyst because it is less invasive than surgery. <strong>Surgery</strong> is reserved for cysts that are large, multiseptated, complicated, or close to major ducts and vessels; the aim is to remove the parasite without spillage. <strong>Albendazole</strong> alone suits a small asymptomatic CE1 cyst, a patient unfit for procedures, or disseminated disease, but it does not replace drainage of a large or infected cyst.</p>
    <h4>Serology pitfalls</h4>
    <ul>
      <li><strong>Antibody</strong> tests (ELISA, IHA, immunoblot for <strong>antigen B</strong> or <strong>arc 5</strong>) indicate exposure, not viability. They are often negative in CE4/CE5 and lung cysts, and may stay positive for years after cure.</li>
      <li><strong>Cross-reactions</strong> occur with cysticercosis, <em>Taenia</em>, <em>Hymenolepis</em>, other helminths and some malignancies or autoimmune disease.</li>
      <li><strong>Antigen</strong> tests and imaging are better for follow-up; a falling antibody titre alone does not prove cure.</li>
      <li>Eosinophilia is inconsistent, so a normal count does not exclude CE.</li>
    </ul>
    <p>Decide on the WHO-IWGE stage plus clinical status, never on a single serological result.</p>
  `,
  tip: "Say what each option does to the parasite, then list four serology traps: exposure not viability, stage, cross-reaction, and persisting titres.",
  sources: ["P1", "P2", "P3", "P6"]
},
{
  id: "p3g1", domain: "p3", star: true,
  q: "Describe the life cycle of Echinostoma ilocanum and explain the role of its snail hosts.",
  tags: ["Echinostoma ilocanum", "life cycle", "snail hosts", "kuhol"],
  keypoints: ["Garrison's fluke", "49–51 collar spines", "Gyraulus convexiusculus", "Indoplanorbis exustus", "Pila luzonica", "Pila scutata", "Lymnaea cumingiana", "metacercariae", "rediae", "small intestine", "dogs and pigs", "rice paddies", "two intermediate hosts"],
  answer: `
    <h4>Parasite and definitive hosts</h4>
    <p><em>Echinostoma ilocanum</em> (Garrison's fluke) is an intestinal trematode 2.5–6.5 mm long with <strong>49–51 collar spines</strong> around the oral sucker. Adults live in the small intestine of humans, dogs, cats, pigs, rats and other mammals, which pass unembryonated, operculated eggs in faeces.</p>
    <h4>Life cycle</h4>
    <ol>
      <li>Eggs reach fresh water and embryonate; miracidia hatch and penetrate the <strong>first intermediate host</strong>, small planorbid snails such as <em>Gyraulus convexiusculus</em> and <em>Indoplanorbis exustus</em>.</li>
      <li>Mother and daughter rediae produce cercariae, which leave the snail and encyst as <strong>metacercariae</strong> in the <strong>second intermediate host</strong>: freshwater snails including <em>Pila luzonica</em> and <em>P. scutata</em> (kuhol), <em>Lymnaea (Bullastra) cumingiana</em> and <em>Digoniostoma pulchella</em>.</li>
      <li>Humans, dogs, pigs or rats eat raw or undercooked infected snails. Metacercariae excyst in the duodenum and mature in the small intestine within about two weeks.</li>
      <li>There is no human-to-human transmission and no free-living infective stage; the snail is essential.</li>
    </ol>
    <h4>Why the snail matters</h4>
    <p>The cycle is completed only where the right snails, water and faecal contamination coincide — rice paddies, irrigation canals, ponds and backyard pools. <em>Pila</em> snails are also a food item, so the parasite's range overlaps the places where people collect and eat them. Control therefore depends on snail ecology and food preparation, not on treating patients alone. Related species such as <em>E. malayanum</em> use similar snail hosts and can coexist in the same villages.</p>
    <h4>Infective stage and prepatent period</h4>
    <p>The infective stage is the <strong>metacercaria</strong>, not the egg or cercaria, and the prepatent period is roughly two weeks. A single infected snail may harbour many metacercariae, so one meal can establish a heavy worm burden.</p>
  `,
  tip: "Name one first-host genus and one second-host genus, then state the single sentence that earns the mark: the snail is essential.",
  sources: ["P1", "P3", "P4"]
},
{
  id: "p3g2", domain: "p3",
  q: "Discuss the epidemiology of echinostomiasis in the Philippines and the food sources that sustain transmission.",
  tags: ["echinostomiasis", "Philippines", "Ilocos", "kinilaw"],
  keypoints: ["3%", "11%", "44%", "Ilocos", "kuhol", "kiambu-ay", "kinilaw", "coconut milk", "Pila luzonica", "Pila scutata", "foraging", "open defecation", "underdiagnosis", "co-infection", "not notifiable"],
  answer: `
    <h4>Distribution in the Philippines</h4>
    <p><em>Echinostoma ilocanum</em> is widespread across the islands but unevenly distributed. In a large Philippine survey, about <strong>3% of more than 30,000 stools</strong> contained echinostome eggs, while prevalence reached <strong>11%</strong> in Ilocano populations of northern Luzon and up to <strong>44%</strong> in some communities. Foci are reported in <strong>Ilocos Norte and Ilocos Sur</strong>, and cases occur wherever raw freshwater snails are eaten. <em>E. malayanum</em> and <em>Artyfechinostomum malayanum</em> add to the local burden and are often grouped as echinostomiasis.</p>
    <h4>Food sources and practices</h4>
    <ul>
      <li><strong>Kuhol</strong> (<em>Pila luzonica</em>) and <strong>kiambu-ay</strong>, a smaller freshwater snail, are the main second intermediate hosts.</li>
      <li><strong>Kinilaw</strong> — raw snail flesh with coconut milk, vinegar or lime juice — is the classic vehicle; marinating does not kill metacercariae.</li>
      <li>Grilling (<strong>sinugba</strong>), brief boiling or stewing may leave the centre undercooked, especially with large snails.</li>
      <li>Foraging in rice paddies, canals and ponds, often by children, and household preparation without separate boards increase exposure.</li>
      <li>Snails are a cheap protein source, so control messages must respect food culture rather than simply prohibit the dish.</li>
    </ul>
    <h4>Risk factors and burden</h4>
    <p>Poverty, rural residence, open defecation, free-roaming dogs and pigs, and lack of safe water sustain the cycle. Children who forage and swim in canals are especially exposed, and infections cluster in households that prepare kuhol together. Infections are usually light and under-reported; surveys that rely on a single stool examination underestimate prevalence. Co-infection with <em>Schistosoma japonicum</em> and soil-transmitted helminths is common in the same villages. Because echinostomiasis is not a nationally notifiable disease, the true burden is unknown and control is not programmatic.</p>
  `,
  tip: "Quote the 3%, 11% and 44% figures, then connect raw kuhol kinilaw in Ilocos to the wider burden.",
  sources: ["P4", "P1", "P9", "P13"]
},
{
  id: "p3g3", domain: "p3",
  q: "Explain the pathogenesis and clinical features of echinostomiasis, from light infection to heavy disease.",
  tags: ["echinostomiasis", "pathogenesis", "eosinophilia", "enteritis"],
  keypoints: ["duodenum and jejunum", "collar spines", "mechanical abrasion", "eosinophilic infiltration", "catarrhal enteritis", "epigastric pain", "diarrhoea", "anaemia", "hypoalbuminaemia", "eosinophilia", "worm burden", "protein-losing", "ileus", "children"],
  answer: `
    <h4>Attachment and local damage</h4>
    <p>Adult flukes attach to the mucosa of the <strong>duodenum and jejunum</strong> using the ventral sucker and the <strong>collar spines</strong>. The spines cause mechanical abrasion, while excretory–secretory products provoke local inflammation. Histology shows oedema, capillary congestion, eosinophilic infiltration, epithelial desquamation and small erosions; heavy infections can produce ulceration and <strong>catarrhal enteritis</strong>.</p>
    <h4>Clinical spectrum</h4>
    <div class="table-wrap"><table>
      <tr><th>Category</th><th>Features</th></tr>
      <tr><td>Light infection</td><td>Usually asymptomatic; found on stool survey</td></tr>
      <tr><td>Moderate infection</td><td><strong>Epigastric pain</strong>, nausea, flatulence, <strong>diarrhoea</strong>, borborygmi, anorexia</td></tr>
      <tr><td>Heavy infection</td><td>Persistent diarrhoea, vomiting, weight loss, <strong>anaemia</strong>, <strong>hypoalbuminaemia</strong>, oedema</td></tr>
      <tr><td>Complicated (rare)</td><td>Ileus, perforation, peritonitis; described in heavy untreated infection</td></tr>
    </table></div>
    <h4>Systemic and laboratory findings</h4>
    <ul>
      <li><strong>Eosinophilia</strong> is common but variable; it reflects tissue invasion and worm burden and is not diagnostic.</li>
      <li>Iron-deficiency anaemia and low albumin follow chronic blood and protein loss.</li>
      <li>Children may show poor growth and school absence in endemic villages.</li>
      <li>Symptoms overlap with peptic ulcer, amoebiasis, giardiasis, tuberculosis and inflammatory bowel disease, so exposure history is essential.</li>
    </ul>
    <h4>Pathogenesis in one sentence</h4>
    <p>Disease is driven by <strong>worm burden and repeated reinfection</strong>: a few worms cause little more than dyspepsia, whereas hundreds produce a <strong>protein-losing</strong>, eosinophilic enteropathy. Symptoms resolve after effective treatment, but heavy infection can leave mucosal damage that takes weeks to heal. Because light infections are silent, hospital cases underestimate community prevalence.</p>
    <h4>Why symptoms fluctuate</h4>
    <p>Worm burdens are not static: reinfection after treatment and spontaneous loss of worms both occur, so symptoms may wax and wane. A heavy infection in a child should prompt stool examination of the whole household, because shared food and water explain clustering.</p>
  `,
  tip: "Frame it as a dose–response: spines injure, antigens inflame, and worm burden decides whether the patient is asymptomatic or protein-losing.",
  sources: ["P1", "P2", "P4"]
},
{
  id: "p3g4", domain: "p3", star: true,
  q: "Describe the laboratory diagnosis of Echinostoma ilocanum and explain how its egg is distinguished from other fluke eggs.",
  tags: ["Echinostoma egg", "O&P", "fluke egg", "Kato-Katz"],
  keypoints: ["formalin–ethyl acetate", "three specimens", "Kato–Katz", "83–116", "58–69", "operculum", "no abopercular knob", "Fasciolopsis", "Fasciola", "Clonorchis", "adult worm", "49–51 collar spines", "PCR", "micrometer"],
  answer: `
    <h4>Specimen and method</h4>
    <p>Diagnosis is by stool <strong>O&amp;P</strong> after concentration (<strong>formalin–ethyl acetate</strong> sedimentation), with at least <strong>three specimens</strong> because egg output fluctuates. <strong>Kato–Katz</strong> gives a quantitative egg count and is useful in surveys. Eggs are operculated, yellowish, thin-shelled and measure <strong>83–116 × 58–69 µm</strong>; the <strong>operculum</strong> is relatively small and there is <strong>no abopercular knob</strong>. Eggs are unembryonated when passed and embryonate in water, so fresh stool shows a granular interior rather than a miracidium.</p>
    <h4>Separating the eggs</h4>
    <div class="table-wrap"><table>
      <tr><th>Species</th><th>Egg size (µm)</th><th>Distinguishing feature</th></tr>
      <tr><td><em>Echinostoma ilocanum</em></td><td>83–116 × 58–69</td><td>Operculated, no abopercular knob; overlaps other echinostomes</td></tr>
      <tr><td><em>Fasciolopsis buski</em></td><td>130–150 × 60–90</td><td>Largest intestinal fluke egg; operculum inconspicuous</td></tr>
      <tr><td><em>Fasciola</em> spp.</td><td>140–160 × 60–90</td><td>Large; small <strong>abopercular knob</strong></td></tr>
      <tr><td><em>Clonorchis/Opisthorchis</em></td><td>27–35 × 15–20</td><td>Small, prominent shoulders, abopercular knob</td></tr>
      <tr><td>Heterophyids</td><td>26–30 × 15–17</td><td>Very small; easily missed</td></tr>
    </table></div>
    <h4>Limits and confirmation</h4>
    <ul>
      <li><strong>Eggs cannot separate</strong> <em>E. ilocanum</em> from <em>E. malayanum</em> or other echinostomes; species identification needs the <strong>adult worm</strong> after treatment or endoscopy, showing the <strong>49–51 collar spines</strong>.</li>
      <li>Measure with a calibrated <strong>micrometer</strong> and examine several fields; fixation shrinks and distorts eggs.</li>
      <li><strong>PCR</strong> and sequencing in reference laboratories resolve species and mixed infections.</li>
      <li>Serology is not used routinely, and eosinophilia is only a clue.</li>
      <li>Examine household contacts and repeat stool after treatment to confirm cure.</li>
    </ul>
    <p>The practical error is to call every large operculated egg <em>Fasciolopsis</em>; size, knob and exposure history must be read together. A single negative stool does not exclude light infection, so concentration and repeat sampling are essential.</p>
  `,
  tip: "Give the size first, then the negative feature — no abopercular knob — because examiners test the Fasciola and Fasciolopsis look-alikes.",
  sources: ["P2", "P3", "P4", "P8"]
},
{
  id: "p3g5", domain: "p3",
  q: "Discuss the treatment of echinostomiasis and the prevention measures at table and at source.",
  tags: ["praziquantel", "echinostomiasis prevention", "food safety", "snail control"],
  keypoints: ["praziquantel", "25 mg/kg", "single dose", "niclosamide", "tribendimidine", "boil 10 minutes", "kinilaw", "vinegar", "latrines", "snail control", "dogs", "pigs", "rats", "health education", "no national programme"],
  answer: `
    <h4>Treatment</h4>
    <p><strong>Praziquantel 25 mg/kg</strong> as a single oral dose is the treatment of choice; it is well absorbed and active against adult intestinal flukes. A repeat dose after one to two weeks is reasonable in heavy infection or when reinfection is likely. <strong>Niclosamide</strong> is an alternative where praziquantel is unavailable, and <strong>tribendimidine</strong> has shown activity in field studies. Treat anaemia and malnutrition, and check household contacts.</p>
    <h4>Prevention at the table</h4>
    <ul>
      <li><strong>Cook snails thoroughly</strong> — <strong>boil for at least 10 minutes</strong> or fry until the flesh is firm and opaque; adequate heat kills metacercariae.</li>
      <li>Avoid <strong>kinilaw</strong> and other raw or lightly marinated snail dishes; <strong>vinegar</strong>, lime and coconut milk do not reliably kill metacercariae.</li>
      <li>Do not rely on grilling or brief boiling for large snails; the centre may stay undercooked.</li>
      <li>Use clean boards, water and hands; separate raw snails from cooked food.</li>
    </ul>
    <h4>Prevention at the source</h4>
    <ul>
      <li>Safe disposal of human and animal faeces; <strong>latrines</strong> and sewage treatment prevent egg contamination of ponds and canals.</li>
      <li><strong>Snail control</strong> through environmental management, draining or filling small water bodies, and selective molluscicide where feasible.</li>
      <li>Treat or manage <strong>dogs</strong>, <strong>pigs</strong> and <strong>rats</strong> that act as reservoir hosts, with veterinary advice.</li>
      <li><strong>Health education</strong> that works with, rather than against, local food traditions: promote well-cooked kuhol dishes and safer preparation.</li>
    </ul>
    <h4>Programme reality</h4>
    <p>Echinostomiasis has <strong>no national programme</strong>, so control depends on general sanitation, food-safety regulation and integration with schistosomiasis and soil-transmitted helminth activities. In endemic barangays, repeated prevalence surveys and treatment of cases are more realistic than mass drug administration. The medical technologist's role is accurate egg detection, quantification and follow-up after treatment.</p>
  `,
  tip: "Treatment is one line; spend the answer on the two prevention levels — the kitchen and the snail habitat.",
  sources: ["P2", "P4", "P6", "P9"]
},
{
  id: "p3g6", domain: "p3",
  q: "Compare echinostomiasis with the other food-borne trematodiases and explain the diagnostic and public health implications.",
  tags: ["food-borne trematodes", "Echinostoma", "Fasciolopsis", "comparison"],
  keypoints: ["snail second host", "aquatic plants", "fish", "crabs", "bile ducts", "lung", "small intestine", "egg size", "abopercular knob", "triclabendazole", "praziquantel", "cholangitis", "cholangiocarcinoma", "TB mimicry", "food safety"],
  answer: `
    <h4>Why compare</h4>
    <p>Several food-borne trematodes produce operculated eggs and intestinal or biliary symptoms, so the vehicle and the adult worm — not the egg alone — establish the diagnosis.</p>
    <div class="table-wrap"><table>
      <tr><th>Fluke</th><th>Second host / vehicle</th><th>Adult habitat</th><th>Egg</th><th>Drug</th></tr>
      <tr><td><em>Echinostoma ilocanum</em></td><td>Freshwater snails (<em>Pila</em>)</td><td><strong>Small intestine</strong></td><td>83–116 µm, no abopercular knob</td><td>Praziquantel</td></tr>
      <tr><td><em>Fasciolopsis buski</em></td><td><strong>Aquatic plants</strong></td><td>Small intestine</td><td>130–150 µm, largest</td><td>Praziquantel, niclosamide</td></tr>
      <tr><td><em>Fasciola</em> spp.</td><td>Aquatic plants (kangkong)</td><td><strong>Bile ducts</strong></td><td>140–160 µm, abopercular knob</td><td><strong>Triclabendazole</strong></td></tr>
      <tr><td><em>Clonorchis/Opisthorchis</em></td><td><strong>Fish</strong></td><td>Bile ducts</td><td>27–35 µm, shoulders</td><td>Praziquantel</td></tr>
      <tr><td><em>Paragonimus</em></td><td><strong>Crabs</strong></td><td><strong>Lung</strong></td><td>80–120 µm, operculated</td><td>Praziquantel, triclabendazole</td></tr>
      <tr><td>Heterophyids</td><td>Fish</td><td>Small intestine</td><td>26–30 µm</td><td>Praziquantel</td></tr>
    </table></div>
    <h4>Clinical clues</h4>
    <ul>
      <li><strong>Echinostoma</strong>: snail diet, dyspepsia, eosinophilia; no biliary obstruction.</li>
      <li><strong>Fasciolopsis</strong>: aquatic plant diet, diarrhoea, oedema, protein loss; largest egg.</li>
      <li><strong>Fasciola</strong>: acute eosinophilic hepatitis then biliary colic; eggs may be absent early or spurious after eating liver.</li>
      <li><strong>Clonorchis/Opisthorchis</strong>: <strong>cholangitis</strong>, stones and <strong>cholangiocarcinoma</strong> risk.</li>
      <li><strong>Paragonimus</strong>: chronic cough, rusty sputum, <strong>TB mimicry</strong>.</li>
    </ul>
    <h4>Public health</h4>
    <p>All are food-borne and preventable by cooking, freezing where appropriate, washing plants, sanitation and snail or fish safety. Echinostomiasis is distinguished by its <strong>snail-to-snail</strong> cycle and its link to raw kuhol in Ilocos and other Philippine foci. Because eggs overlap, species-level diagnosis often needs the adult worm or molecular testing.</p>
    <h4>Co-endemicity and surveillance</h4>
    <p>In the Philippines, echinostomiasis overlaps with schistosomiasis, capillariasis and heterophyidiasis, so one stool survey may reveal several flukes and treatment must cover all of them. Reporting matters because food-borne trematodiases are excluded from most national counts. That invisibility keeps them off the policy agenda.</p>
  `,
  tip: "Build the table by vehicle — plants, snails, fish, crabs — then attach one clinical consequence and one drug to each row.",
  sources: ["P1", "P2", "P3", "P4"]
}
);
