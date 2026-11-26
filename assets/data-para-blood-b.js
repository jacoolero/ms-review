/* Parasitology — blood & tissue protozoa, set B (18 essays) */
window.QBANK.push(
{
  id: "pa82", domain: "para-blood", star: true,
  q: "Describe the life cycle of Plasmodium in the human and the mosquito, and distinguish relapse, recrudescence and reinfection.",
  tags: ["malaria", "life cycle", "hypnozoite", "sporogony"],
  keypoints: ["sporozoites", "pre-erythrocytic schizogony", "hypnozoites", "relapse", "erythrocytic schizogony", "gametocytes", "sporogony", "recrudescence", "reinfection", "gametocytocide", "definitive host", "sequesters"],
  answer: `
    <h4>Three cycles, three sites</h4>
    <p>Malaria is transmitted when an infected female <strong>Anopheles</strong> mosquito injects <strong>sporozoites</strong> during a blood meal. Sporozoites reach the liver within minutes and invade hepatocytes, where <strong>pre-erythrocytic schizogony</strong> produces thousands of <strong>merozoites</strong> from a single parasite. In <em>P. vivax</em> and <em>P. ovale</em> some parasites arrest as <strong>hypnozoites</strong>, the source of true <strong>relapse</strong> months later. Merozoites released into the blood invade red cells and begin <strong>erythrocytic schizogony</strong>: ring, trophozoite, schizont, then rupture. This cycle is 48 hours in <em>P. falciparum</em>, <em>P. vivax</em> and <em>P. ovale</em>, 72 hours in <em>P. malariae</em>, and 24 hours in <em>P. knowlesi</em>.</p>
    <h4>Sexual development and transmission</h4>
    <p>Some blood-stage parasites commit to <strong>gametocytes</strong>, which are taken up by the next mosquito. In the midgut they fuse into a zygote, then an ookinete and oocyst; <strong>sporogony</strong> yields sporozoites that migrate to the salivary glands. Only the mosquito stage is sexual, so the human is the intermediate host and the mosquito the <strong>definitive host</strong>.</p>
    <h4>Why the terms matter clinically</h4>
    <div class="table-wrap"><table>
      <tr><th>Event</th><th>Origin</th><th>Clinical meaning</th></tr>
      <tr><td>Relapse</td><td>Hypnozoites (<em>vivax</em>, <em>ovale</em>)</td><td>Needs primaquine or tafenoquine after G6PD testing</td></tr>
      <tr><td>Recrudescence</td><td>Persistent blood-stage parasites</td><td>Treatment failure or incomplete clearance</td></tr>
      <tr><td>Reinfection</td><td>New mosquito bite</td><td>New infection, not relapse</td></tr>
    </table></div>
    <p>Blood-stage parasites cause all symptoms; liver stages cause none. Gametocytes do not cause fever but sustain transmission, which is why single low-dose primaquine is used as a <strong>gametocytocide</strong> in falciparum malaria. Because <em>P. falciparum</em> sequesters in deep capillaries, peripheral films may underestimate its burden. Relapse must be anticipated in every vivax or ovale infection, because a missed hypnozoite produces a new illness after apparent cure. Recrudescence, by contrast, points to incomplete drug exposure, poor adherence or resistance, and it should prompt a review of treatment.</p>
  `,
  tip: "Separate relapse, recrudescence and reinfection — examiners use these terms to test precision.",
  sources: ["P1", "P7", "P3"]
},
{
  id: "pa83", domain: "para-blood", star: true,
  q: "Discuss Plasmodium vivax malaria: host cell preference, relapse, clinical spectrum, diagnosis and radical cure.",
  tags: ["P. vivax", "hypnozoite", "primaquine", "Duffy"],
  keypoints: ["reticulocytes", "Duffy antigen", "hypnozoite", "relapse", "Schüffner's dots", "amoeboid trophozoites", "pLDH", "radical cure", "primaquine", "tafenoquine", "G6PD deficiency", "8-aminoquinolines", "ARDS"],
  answer: `
    <h4>Biology of the relapse parasite</h4>
    <p><em>Plasmodium vivax</em> preferentially invades <strong>reticulocytes</strong>, so parasitaemia is often lower than in falciparum malaria. Invasion depends on the <strong>Duffy antigen/receptor for chemokines (DARC)</strong>, although Duffy-negative infections are increasingly reported. The dormant liver <strong>hypnozoite</strong> is the defining feature: reactivation causes <strong>relapse</strong> weeks to months after the initial illness, sometimes repeatedly.</p>
    <h4>Clinical spectrum</h4>
    <p>Classic "benign tertian" fever with rigors and splenomegaly is misleading: vivax malaria causes significant anaemia, and severe disease with <strong>ARDS</strong>, severe thrombocytopenia and cerebral involvement is recognised. Repeated relapses cause cumulative morbidity in children and pregnant women. <em>P. vivax</em> also forms gametocytes early, so transmission can occur before treatment begins. Because only reticulocytes are invaded, parasite density is limited by marrow output, and anaemia can coexist with a modest count. Splenomegaly reflects repeated exposure and splenic clearance of deformed cells. Thrombocytopenia is common and does not by itself signify severe disease. Young children in endemic areas may present with anaemia before fever is recognised.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li>Thin film: <strong>enlarged, pale red cells</strong> with <strong>Schüffner's dots</strong> and <strong>amoeboid trophozoites</strong>.</li>
      <li>Thick film for detection; repeat films because density fluctuates.</li>
      <li><strong>pLDH</strong> or aldolase RDTs detect non-falciparum species, but HRP2 tests miss vivax.</li>
      <li>PCR for species confirmation and mixed infections.</li>
    </ul>
    <h4>Radical cure and its safety</h4>
    <p>Blood-stage treatment (chloroquine where susceptible, or an ACT) clears the attack but not the hypnozoites. <strong>Radical cure</strong> with <strong>primaquine</strong> or single-dose <strong>tafenoquine</strong> is required. Both are <strong>8-aminoquinolines</strong> that cause oxidative haemolysis in <strong>G6PD deficiency</strong>, so G6PD testing must precede tafenoquine and is recommended before primaquine. They are avoided in pregnancy and infancy; tafenoquine is contraindicated during breastfeeding unless the infant is known to be G6PD normal. Adherence to the primaquine course is the main determinant of success.</p>
  `,
  tip: "Vivax is not always benign, and the hypnozoite is why blood-stage treatment alone fails.",
  sources: ["P1", "P7", "P3"]
},
{
  id: "pa84", domain: "para-blood", star: true,
  q: "Discuss malaria in pregnancy: placental sequestration, maternal and fetal effects, diagnosis, prevention and treatment.",
  tags: ["malaria in pregnancy", "VAR2CSA", "IPTp", "congenital malaria"],
  keypoints: ["VAR2CSA", "chondroitin sulfate A", "placental sequestration", "primigravidae", "low birth weight", "placental histology", "intermittent preventive treatment in pregnancy", "sulfadoxine-pyrimethamine", "co-trimoxazole", "ACT", "intravenous artesunate", "congenital malaria"],
  answer: `
    <h4>Why pregnancy is different</h4>
    <p>In pregnancy, <em>P. falciparum</em>-infected red cells express <strong>VAR2CSA</strong>, a PfEMP1 variant that binds <strong>chondroitin sulfate A</strong> on the syncytiotrophoblast. This causes <strong>placental sequestration</strong> and intervillositis. <strong>Primigravidae</strong> are most susceptible because they lack acquired antibody to VAR2CSA. Consequences include maternal anaemia, <strong>low birth weight</strong>, preterm delivery and stillbirth; the placenta may be heavily infected while peripheral films are negative. Placental infection also impairs oxygen and nutrient transfer, contributing to fetal growth restriction and preterm labour. Malaria may cause maternal death, and it increases the risk of severe anaemia and postpartum haemorrhage. A febrile pregnant traveller needs urgent testing, because a negative rapid test does not exclude placental infection. Prompt treatment also reduces the parasite reservoir for the newborn.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li>Peripheral thick and thin films at every antenatal visit in endemic areas; a negative film does not exclude placental infection.</li>
      <li>Placental blood film and <strong>placental histology</strong> at delivery for diagnosis and audit.</li>
      <li>RDTs are useful where microscopy is unavailable, but HRP2 can remain positive for weeks.</li>
    </ul>
    <h4>Prevention and treatment</h4>
    <p>WHO recommends insecticide-treated nets, prompt diagnosis and treatment, and <strong>intermittent preventive treatment in pregnancy (IPTp)</strong> with <strong>sulfadoxine-pyrimethamine</strong> in areas of moderate-to-high transmission, given at antenatal visits after the first trimester and at least one month apart. IPTp is not given together with <strong>co-trimoxazole</strong>, which already protects against malaria in HIV. Uncomplicated malaria is treated with an <strong>ACT</strong> in the second and third trimesters; severe malaria requires <strong>intravenous artesunate</strong> at any stage. Primaquine and tafenoquine are contraindicated in pregnancy, so vivax relapse prevention is deferred.</p>
    <p><strong>Congenital malaria</strong> is uncommon but should be considered in a neonate with fever, anaemia, jaundice or hepatosplenomegaly born to an infected mother.</p>
  `,
  tip: "Placental sequestration via VAR2CSA explains why peripheral films can be negative in a sick mother.",
  sources: ["P1", "P7", "P4"]
},
{
  id: "pa85", domain: "para-blood",
  q: "Discuss the malaria vaccines RTS,S/AS01 and R21/Matrix-M: target, schedule, efficacy and limitations.",
  tags: ["malaria vaccine", "RTS,S", "R21", "circumsporozoite"],
  keypoints: ["circumsporozoite protein", "sporozoite", "RTS,S", "R21/Matrix-M", "Matrix-M", "moderate and wanes", "severe malaria", "pre-erythrocytic vaccines", "Transmission-blocking vaccines", "Pfs25", "Pfs230", "monoclonal antibodies"],
  answer: `
    <h4>Two licensed vaccines</h4>
    <p>Both target the <strong>circumsporozoite protein (CSP)</strong>, the major surface antigen of the <strong>sporozoite</strong>. <strong>RTS,S/AS01</strong> is a virus-like particle in which CSP repeat sequences are fused to hepatitis B surface antigen and adjuvanted with AS01. <strong>R21/Matrix-M</strong> uses a CSP nanoparticle with the saponin adjuvant <strong>Matrix-M</strong>. Both aim to block sporozoite invasion of hepatocytes, so they act before blood-stage disease develops.</p>
    <h4>Schedule and performance</h4>
    <ul>
      <li>RTS,S is given from about five months of age as a multi-dose schedule with a booster; R21 uses a three-dose primary series plus a booster.</li>
      <li>Efficacy is <strong>moderate and wanes</strong>, with the greatest protection against <strong>severe malaria</strong> in the first year after vaccination.</li>
      <li>Seasonal administration before high-transmission months improves effectiveness.</li>
      <li>WHO recommends both vaccines for children in moderate-to-high transmission settings; R21 has greater manufacturing capacity.</li>
    </ul>
    <h4>What they do not do</h4>
    <p>These are <strong>pre-erythrocytic vaccines</strong>: they do not treat existing infection, do not prevent relapse of vivax malaria, and do not replace nets, spraying, prompt diagnosis or treatment. A child with fever still needs a malaria test. Coverage also depends on cold chain, a four-visit schedule that must fit immunisation programmes, and community acceptance.</p>
    <h4>Next generation</h4>
    <p><strong>Transmission-blocking vaccines</strong> target mosquito-stage antigens such as <strong>Pfs25</strong> and <strong>Pfs230</strong>; they are designed to reduce onward transmission rather than protect the vaccinee and are not yet licensed. <strong>Monoclonal antibodies</strong> against CSP are being studied for short-term protection of travellers and seasonal use. Combining vaccines with chemoprevention and vector control is the realistic strategy.</p>
  `,
  tip: "State clearly that both vaccines are pre-erythrocytic — they do not treat or cure malaria.",
  sources: ["P7", "P1", "P3"]
},
{
  id: "pa86", domain: "para-blood", star: true,
  q: "Classify the main antimalarial drugs by mechanism and parasite stage, and explain the toxicity that limits each class.",
  tags: ["antimalarials", "artemisinin", "mechanism", "G6PD"],
  keypoints: ["endoperoxide bridge", "short half-life", "4-Aminoquinolines", "haem detoxification", "Sulfadoxine-pyrimethamine", "Atovaquone", "cytochrome bc1", "hypnozoites", "gametocytes", "haemolysis", "methaemoglobinaemia", "G6PD status"],
  answer: `
    <h4>Blood schizonticides</h4>
    <p><strong>Artemisinins</strong> (artesunate, artemether, dihydroartemisinin) contain an <strong>endoperoxide bridge</strong> activated by haem iron, generating free radicals that damage parasite membranes and proteins. They act on the widest range of blood stages, including young rings, and clear parasites faster than any other class, but their <strong>short half-life</strong> means they must be paired with a longer-acting partner. <strong>4-Aminoquinolines</strong> such as chloroquine and amodiaquine concentrate in the food vacuole and block <strong>haem detoxification</strong>, so the parasite drowns in its own toxic haem. Amodiaquine shares this mechanism but can cause agranulocytosis and hepatotoxicity, so it is avoided in some patients. Mefloquine and lumefantrine act on the same blood stages; lumefantrine absorption depends on a fatty meal, and both can prolong the QT interval.</p>
    <h4>Antifolates and mitochondria</h4>
    <p><strong>Sulfadoxine-pyrimethamine</strong> blocks two sequential enzymes of the parasite folate pathway, dihydropteroate synthase and dihydrofolate reductase. <strong>Atovaquone</strong> inhibits the mitochondrial <strong>cytochrome bc1</strong> complex; proguanil potentiates it by collapsing the mitochondrial membrane potential. These agents are slow-acting and resistance-prone, so they are used mainly in combinations. Because these drugs act slowly, they are never used alone for severe malaria.</p>
    <div class="table-wrap"><table>
      <tr><th>Class</th><th>Example</th><th>Key toxicity or caveat</th></tr>
      <tr><td>Artemisinin</td><td>Artesunate</td><td>Short half-life; delayed haemolysis after parenteral use</td></tr>
      <tr><td>4-Aminoquinoline</td><td>Chloroquine</td><td>Retinopathy with prolonged high dose; resistance</td></tr>
      <tr><td>Aryl-amino-alcohol</td><td>Mefloquine, lumefantrine</td><td>Neuropsychiatric effects, QT prolongation</td></tr>
      <tr><td>8-Aminoquinoline</td><td>Primaquine</td><td>Haemolysis in G6PD deficiency</td></tr>
    </table></div>
    <h4>Hypnozoitocides and gametocytocides</h4>
    <p><strong>Primaquine</strong> and <strong>tafenoquine</strong> are the only drugs that kill dormant liver <strong>hypnozoites</strong>. They also sterilise <strong>gametocytes</strong>, reducing transmission. Their oxidant metabolites cause <strong>haemolysis</strong> and <strong>methaemoglobinaemia</strong>, which is why <strong>G6PD status</strong> matters. Knowing stage specificity explains why no single drug cures both the attack and the dormant reservoir.</p>
  `,
  tip: "Link each drug to its stage: blood schizonticide, hypnozoitocide or gametocytocide.",
  sources: ["P1", "P7", "P2"]
},
{
  id: "pa87", domain: "para-blood",
  q: "Describe antimalarial drug resistance other than artemisinin, its molecular markers and its implications for treatment policy.",
  tags: ["drug resistance", "pfcrt", "dhfr", "piperaquine"],
  keypoints: ["pfcrt", "K76T", "pfmdr1", "dhfr", "dhps", "quintuple mutant", "plasmepsin 2-3", "Kelch13", "ACT treatment failure", "Day 3 parasitaemia", "multiple first-line therapies", "triple ACTs"],
  answer: `
    <h4>Chloroquine and the transporter story</h4>
    <p>Chloroquine resistance is caused mainly by mutations in <strong><em>pfcrt</em></strong>, especially <strong>K76T</strong>, which let the parasite pump the drug out of its food vacuole; <strong><em>pfmdr1</em></strong> copy number and polymorphisms modulate the level. Resistance arose independently in South America and Southeast Asia and spread widely. Withdrawal of chloroquine in Malawi was followed by re-emergence of susceptible parasites, showing the fitness cost of resistance.</p>
    <h4>Folate antagonists</h4>
    <p><strong>Sulfadoxine-pyrimethamine</strong> resistance follows stepwise mutations in <strong><em>dhfr</em></strong> (notably at codons 51, 59, 108 and 164) and <strong><em>dhps</em></strong> (437, 540, 581). The <strong>quintuple mutant</strong> is associated with failure, and additional mutations raise the level further. This matters because SP remains the drug for intermittent preventive treatment in pregnancy in many countries.</p>
    <h4>Partner drugs and artemisinin</h4>
    <ul>
      <li><strong>Mefloquine</strong> resistance is linked to increased <em>pfmdr1</em> copy number.</li>
      <li><strong>Piperaquine</strong> resistance is associated with amplification of <strong><em>plasmepsin 2-3</em></strong>.</li>
      <li><strong>Kelch13</strong> mutations cause delayed artemisinin clearance; when the partner drug also fails, <strong>ACT treatment failure</strong> follows.</li>
    </ul>
    <h4>How resistance is monitored</h4>
    <p>WHO therapeutic efficacy studies measure clinical and parasitological outcomes over 28 or 42 days. <strong>Day 3 parasitaemia</strong> is an early signal of artemisinin partial resistance, and molecular markers (<em>kelch13</em>, <em>pfcrt</em>, <em>pfmdr1</em>, <em>plasmepsin</em>) are tracked in surveillance. Response includes changing partner drugs, deploying <strong>multiple first-line therapies</strong> or <strong>triple ACTs</strong>, and introducing new agents. Using a single ACT everywhere accelerates the loss of both components.</p>
  `,
  tip: "Name the marker with the drug: pfcrt for chloroquine, dhfr/dhps for SP, plasmepsin for piperaquine.",
  sources: ["P1", "P7", "P2"]
},
{
  id: "pa88", domain: "para-blood",
  q: "How is the response to antimalarial treatment monitored, and how are treatment failure, recrudescence and reinfection defined?",
  tags: ["treatment failure", "PCR correction", "parasite clearance", "PADH"],
  keypoints: ["gametocytes", "follow-up microscopy", "Early treatment failure", "Late clinical failure", "Late parasitological failure", "Adequate clinical and parasitological response", "recrudescence", "reinfection", "PCR genotyping", "msp1", "msp2", "glurp", "Post-artesunate delayed haemolysis"],
  answer: `
    <h4>What successful treatment looks like</h4>
    <p>After effective therapy, fever resolves within days and asexual parasitaemia falls rapidly. With artemisinins, most patients clear asexual parasites within 48-72 hours, but <strong>gametocytes</strong> may persist for weeks. Clinical improvement alone is not proof of cure: <strong>follow-up microscopy</strong> is needed, especially in trials and in areas of resistance. Parasite clearance half-life, estimated from serial counts, is a more precise measure of response than a single day-3 film. A prolonged half-life suggests artemisinin partial resistance even when the patient improves.</p>
    <h4>Defining failure</h4>
    <ul>
      <li><strong>Early treatment failure</strong>: danger signs or severe malaria in the first three days, or parasitaemia that fails to fall as expected.</li>
      <li><strong>Late clinical failure</strong>: fever and parasitaemia after day 3 with worsening condition.</li>
      <li><strong>Late parasitological failure</strong>: parasitaemia at follow-up without fever.</li>
      <li><strong>Adequate clinical and parasitological response</strong>: no parasitaemia at the end of follow-up.</li>
    </ul>
    <h4>Recrudescence versus reinfection</h4>
    <p>Recurrent parasitaemia may be a <strong>recrudescence</strong> of the original infection or a new <strong>reinfection</strong>. <strong>PCR genotyping</strong> of <em>msp1</em>, <em>msp2</em> and <em>glurp</em> distinguishes them: identical genotypes indicate recrudescence, different genotypes indicate reinfection. Without correction, reinfection inflates apparent failure rates and can mislead drug policy. Genotyping is most informative when the pre-treatment sample is stored, because recurrence can only be interpreted against the original parasite population.</p>
    <h4>Laboratory traps</h4>
    <div class="table-wrap"><table>
      <tr><th>Trap</th><th>Explanation</th></tr>
      <tr><td>HRP2-based RDT after cure</td><td>Antigen persists for weeks; use microscopy to confirm cure</td></tr>
      <tr><td>Day 3 positivity</td><td>Suggests delayed clearance and possible artemisinin resistance</td></tr>
      <tr><td>Post-artesunate delayed haemolysis</td><td>Haemoglobin falls 1-3 weeks after parenteral artesunate; check blood counts</td></tr>
    </table></div>
    <p>In severe malaria, parasite density should be monitored until it is falling; a rising count despite treatment prompts review of drug delivery, absorption and resistance.</p>
  `,
  tip: "Distinguish recrudescence from reinfection by genotyping, not by the interval alone.",
  sources: ["P7", "P2", "P3"]
},
{
  id: "pa89", domain: "para-blood",
  q: "Discuss malaria chemoprophylaxis for travellers: drug options, timing, contraindications and the special cases.",
  tags: ["chemoprophylaxis", "traveller", "doxycycline", "tafenoquine"],
  keypoints: ["ABCD", "Bite avoidance", "Atovaquone-proguanil", "Doxycycline", "Photosensitivity", "Mefloquine", "Neuropsychiatric effects", "Tafenoquine", "G6PD testing", "standby emergency treatment", "Chemoprophylaxis does not prevent infection", "radical cure"],
  answer: `
    <h4>Start with the risk, not the drug</h4>
    <p>Prophylaxis is offered after assessing destination, season, species, resistance patterns, duration, pregnancy, age and comorbidity. The <strong>ABCD</strong> approach — Awareness of risk, <strong>Bite avoidance</strong>, Chemoprophylaxis and Diagnosis without delay — is more useful than any single drug. No regimen is fully protective, so a febrile traveller needs testing even if adherent. Prophylaxis must begin before exposure for most drugs, because none is effective if started only on arrival, and it must continue after departure while parasites emerge from the liver.</p>
    <h4>Main options</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Use and timing</th><th>Cautions</th></tr>
      <tr><td><strong>Atovaquone-proguanil</strong></td><td>Daily; start before travel and continue for 7 days after leaving</td><td>Cost; avoid in severe renal impairment</td></tr>
      <tr><td><strong>Doxycycline</strong></td><td>Daily; start before travel and continue for 4 weeks after</td><td><strong>Photosensitivity</strong>, oesophagitis; avoid in young children and pregnancy</td></tr>
      <tr><td><strong>Mefloquine</strong></td><td>Weekly; start 2-3 weeks before to assess tolerance; continue 4 weeks after</td><td><strong>Neuropsychiatric effects</strong>; avoid with epilepsy or psychiatric history</td></tr>
      <tr><td><strong>Tafenoquine</strong></td><td>Weekly after a loading phase; single dose at the end</td><td>Requires <strong>G6PD testing</strong>; avoid in pregnancy</td></tr>
    </table></div>
    <h4>Special hosts</h4>
    <p>Pregnant travellers should avoid doxycycline and tafenoquine; mefloquine may be used in later pregnancy where the risk justifies it. Children need weight-based dosing and should not receive doxycycline under eight years. Travellers to remote areas with no medical care may be given <strong>standby emergency treatment</strong>, with clear instructions to seek care if fever persists. Breastfeeding women should avoid tafenoquine, and young children need paediatric formulations rather than crushed adult tablets. Standby treatment is not a substitute for medical assessment.</p>
    <p><strong>Chemoprophylaxis does not prevent infection</strong>; it suppresses blood-stage parasites. Radical cure of vivax requires primaquine or tafenoquine after return, again after G6PD testing.</p>
  `,
  tip: "Use ABCD to structure the answer, then match each drug to its main contraindication.",
  sources: ["P7", "P1", "P3"]
},
{
  id: "pa90", domain: "para-blood", star: true,
  q: "Discuss transfusion-transmitted parasitic infections: which parasites are involved and how is transmission prevented?",
  tags: ["transfusion", "Babesia", "T. cruzi", "donor screening"],
  keypoints: ["Transfusion-transmitted malaria", "travel and residence questionnaire", "Babesiosis", "asplenic", "Trypanosoma cruzi", "Leishmania", "Toxoplasma gondii", "leucoreduction", "pathogen reduction", "Lookback", "haemovigilance"],
  answer: `
    <h4>Malaria and Babesia</h4>
    <p><strong>Transfusion-transmitted malaria</strong> is the most important parasitic transfusion risk worldwide. Asymptomatic donors with low parasitaemia can transmit <em>Plasmodium</em> through stored red cells, and the recipient may present weeks later with fever. Prevention relies on a detailed <strong>travel and residence questionnaire</strong> with temporary deferral, and on serological or molecular screening where indicated. <strong>Babesiosis</strong> is the leading parasitic transfusion risk in the United States; <em>Babesia microti</em> survives refrigerated storage and causes severe disease in <strong>asplenic</strong> or elderly recipients. Some endemic states screen donors by serology or PCR. Because infected donors are usually asymptomatic, the questionnaire must record travel to endemic areas and previous malaria, not just current symptoms; a donor who grew up in an endemic country may remain a risk years after migration. Transmission can occur from a donor with no recalled tick bite, so geography is more useful than exposure history.</p>
    <h4>Chagas disease, leishmaniasis and toxoplasmosis</h4>
    <ul>
      <li><strong><em>Trypanosoma cruzi</em></strong>: donors from Latin America are screened serologically in many non-endemic countries; transmission is rare but documented, and immunosuppressed recipients may reactivate.</li>
      <li><strong><em>Leishmania</em></strong>: intracellular amastigotes can survive in leucocytes; donors with a history of visceral leishmaniasis are deferred.</li>
      <li><strong><em>Toxoplasma gondii</em></strong>: transfusion transmission is uncommon; <strong>leucoreduction</strong> reduces the risk.</li>
    </ul>
    <h4>Control measures</h4>
    <p>No single measure eliminates risk. A layered approach combines donor selection, targeted serology or nucleic acid testing, leucoreduction, and <strong>pathogen reduction</strong>, which is established for platelets and plasma and emerging for red cells. <strong>Lookback</strong> investigation and <strong>haemovigilance</strong> detect clusters. In the Philippines, malaria-endemic provinces make donor questioning especially important, and splenectomised, premature or immunosuppressed recipients warrant particular vigilance.</p>
    <p>Clinicians should consider a transfusion history in any patient with unexplained fever, anaemia or thrombocytopenia after transfusion, and report suspected cases.</p>
  `,
  tip: "Group the answer by parasite, then by the layered safety measures — questionnaire, testing, leucoreduction, pathogen reduction.",
  sources: ["P2", "P3", "P11"]
},
{
  id: "pa91", domain: "para-blood",
  q: "Discuss ocular toxoplasmosis: pathogenesis, clinical features, diagnosis and treatment.",
  tags: ["ocular toxoplasmosis", "uveitis", "retinochoroiditis", "pyrimethamine"],
  keypoints: ["Ocular toxoplasmosis", "posterior uveitis", "tissue cysts", "scotoma", "Focal necrotising retinochoroiditis", "headlight in the fog", "serology", "IgG", "PCR of aqueous or vitreous humour", "OCT", "macula", "pyrimethamine plus sulfadiazine", "Corticosteroids"],
  answer: `
    <h4>Pathogenesis</h4>
    <p><strong>Ocular toxoplasmosis</strong> is the commonest infectious cause of <strong>posterior uveitis</strong>. It results from reactivation of <strong>tissue cysts</strong> in the retina, often at the margin of an old scar, with release of tachyzoites and a vigorous inflammatory response. Both congenital and postnatally acquired infection can cause disease; in immunocompromised patients the inflammation is more extensive and bilateral. The retinal pigment epithelium and choroid are secondarily involved, and the inflammatory response, rather than direct parasite destruction, accounts for much of the visual loss. Peripheral lesions may be asymptomatic and found only on screening.</p>
    <h4>Clinical features</h4>
    <ul>
      <li>Painless blurred vision, floaters and a central <strong>scotoma</strong>; pain and photophobia if there is anterior uveitis.</li>
      <li><strong>Focal necrotising retinochoroiditis</strong> with vitritis — the classic "<strong>headlight in the fog</strong>" appearance.</li>
      <li>Adjacent old scar, retinal vasculitis, macular oedema, rarely retinal detachment.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>The diagnosis is mainly clinical, supported by <strong>serology</strong>: a positive <strong>IgG</strong> confirms exposure, while a negative IgG makes toxoplasmosis very unlikely. <strong>PCR of aqueous or vitreous humour</strong> is useful in atypical or immunocompromised cases. <strong>OCT</strong> and fluorescein angiography define macular involvement; investigation should also exclude tuberculosis, syphilis, CMV retinitis and intraocular lymphoma.</p>
    <h4>Treatment</h4>
    <p>Not every lesion needs treatment. Indications include lesions threatening the <strong>macula</strong> or optic disc, severe vitritis, and immunocompromise. Standard therapy is <strong>pyrimethamine plus sulfadiazine</strong> with folinic acid; co-trimoxazole or clindamycin are alternatives. <strong>Corticosteroids</strong> reduce inflammation but are given only after antimicrobial cover, and intravitreal agents are used in selected cases. In HIV, restore immunity with ART and give prophylaxis when CD4 is &lt;100 and IgG is positive. Pregnancy limits the use of pyrimethamine and sulfadiazine, so specialist advice is needed, and visual prognosis depends on the site and duration of inflammation.</p>
  `,
  tip: "Never give steroids before antimicrobial cover in necrotising retinochoroiditis.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "pa92", domain: "para-blood",
  q: "Discuss visceral leishmaniasis in HIV co-infection: pathogenesis, atypical presentation, diagnosis and management.",
  tags: ["visceral leishmaniasis", "HIV", "rK39", "amphotericin"],
  keypoints: ["Visceral leishmaniasis", "AIDS-defining illness", "hepatosplenomegaly", "pancytopenia", "rK39", "Bone marrow aspirate", "PCR of blood", "urine antigen", "CD4 count", "Liposomal amphotericin B", "ART", "Secondary prophylaxis"],
  answer: `
    <h4>Epidemiology and interaction</h4>
    <p><strong>Visceral leishmaniasis (VL)</strong> and HIV reinforce each other. HIV increases the risk that a latent <em>Leishmania</em> infection progresses to disease and increases relapse, while VL activates the immune system and may increase HIV replication. Co-infection is concentrated in southern Europe, East Africa, the Indian subcontinent and Brazil, and it is an <strong>AIDS-defining illness</strong> in some settings. In endemic areas, the rising incidence of VL in HIV reflects improved survival of immunosuppressed patients and anthroponotic transmission in crowded settings.</p>
    <h4>Atypical presentation</h4>
    <p>Classic fever, weight loss, <strong>hepatosplenomegaly</strong> and <strong>pancytopenia</strong> may be absent. HIV co-infection more often shows gastrointestinal, pulmonary, cutaneous or mucosal involvement, and the spleen may be only mildly enlarged. Because antibody responses are impaired, <strong>rK39</strong> is frequently negative. The illness may mimic tuberculosis, lymphoma or disseminated fungal infection, so tissue diagnosis is often required.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Bone marrow aspirate</strong> is the usual first choice; splenic aspirate is more sensitive but carries bleeding risk.</li>
      <li><strong>PCR of blood</strong> and <strong>urine antigen</strong> detection are useful, especially for monitoring relapse.</li>
      <li>Serology supports but does not exclude the diagnosis; check <strong>CD4 count</strong> and test for other opportunistic infections.</li>
    </ul>
    <h4>Management</h4>
    <p><strong>Liposomal amphotericin B</strong> is the preferred agent, alone or in combination, because it is effective and better tolerated than antimonials. Start or optimise <strong>ART</strong>; immune reconstitution improves cure and reduces relapse. <strong>Secondary prophylaxis</strong> is often needed until immunity recovers. Relapse is common, so follow-up with clinical review and PCR is essential; marrow examination should include culture and molecular testing, not microscopy alone, and renal toxicity, pancreatitis and drug interactions require monitoring during therapy. Prevention combines insecticide-treated nets, vector control and early treatment of VL in the community.</p>
  `,
  tip: "In HIV, rK39 can be negative — confirm with marrow, blood PCR or urine antigen.",
  sources: ["P1", "P3", "P2"]
},
{
  id: "pa93", domain: "para-blood",
  q: "A returning overseas worker has a chronic painless skin ulcer. Discuss the diagnosis and management of cutaneous leishmaniasis.",
  tags: ["cutaneous leishmaniasis", "traveller", "slit-skin smear", "amastigote"],
  keypoints: ["painless, slowly enlarging ulcer", "sporotrichoid", "Leishmania major", "L. braziliensis", "cutaneous tuberculosis", "Slit-skin smear", "active edge", "amastigotes", "NNN medium", "cryotherapy", "liposomal amphotericin B", "miltefosine", "sandfly"],
  answer: `
    <h4>The clinical clue</h4>
    <p>A returning overseas worker or traveller presents with a <strong>painless, slowly enlarging ulcer</strong> with a raised, indurated border and a central crust, weeks to months after exposure in the Middle East, North Africa, Central Asia or Latin America. Lesions may be multiple or spread along lymphatics (<strong>sporotrichoid</strong> pattern). <em>Leishmania major</em> and <em>L. tropica</em> are common Old World causes; <em>L. braziliensis</em> can later involve the mucosa. The lesion usually sits on an exposed site, and secondary bacterial infection can make it painful and obscure the typical appearance.</p>
    <h4>Differential diagnosis</h4>
    <p>Consider <strong>cutaneous tuberculosis</strong>, sporotrichosis, mycetoma, chronic bacterial ulcer, leprosy, squamous cell carcinoma and pyoderma gangrenosum. The history of travel and the absence of pain are important, but none is specific. A chronic ulcer that fails to respond to antibiotics should be biopsied rather than treated with repeated courses.</p>
    <h4>Laboratory confirmation</h4>
    <ul>
      <li><strong>Slit-skin smear</strong> or punch biopsy from the <strong>active edge</strong>, stained with Giemsa to show <strong>amastigotes</strong> (Leishman-Donovan bodies).</li>
      <li>Culture in <strong>NNN medium</strong>; PCR for species identification, which guides therapy.</li>
      <li>Serology is not useful for cutaneous disease; histology may show granulomas and be mistaken for tuberculosis.</li>
    </ul>
    <h4>Management and prevention</h4>
    <p>Many lesions heal spontaneously, so small, uncomplicated lesions may be observed. Treatment is indicated for facial, large, multiple or joint-adjacent lesions, for immunosuppressed patients and for species with mucosal risk. Options include local <strong>cryotherapy</strong> or thermotherapy, intralesional antimonials, and systemic <strong>liposomal amphotericin B</strong> or <strong>miltefosine</strong>. Multiple samples increase yield because parasites are scarce in chronic lesions, and response is assessed over weeks; relapse or mucosal spread requires reassessment and specialist referral. Counsel on <strong>sandfly</strong> avoidance with repellents, fine nets and covered clothing. Mucosal disease requires prolonged systemic therapy and specialist follow-up.</p>
  `,
  tip: "Sample the raised active edge, not the ulcer floor, and always ask about travel months earlier.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "pa94", domain: "para-blood", star: true,
  q: "Discuss the laboratory diagnosis and staging of human African trypanosomiasis.",
  tags: ["sleeping sickness", "CATT", "lumbar puncture", "staging"],
  keypoints: ["Trypanosoma brucei gambiense", "T. b. rhodesiense", "tsetse fly", "chancre", "CATT", "mAECT", "lumbar puncture", "CSF white cell count", "stage 2", "NECT", "melarsoprol"],
  answer: `
    <h4>Two diseases, one genus</h4>
    <p><strong><em>Trypanosoma brucei gambiense</em></strong> causes chronic sleeping sickness in West and Central Africa, while <strong><em>T. b. rhodesiense</em></strong> causes acute disease in East and Southern Africa. Both are transmitted by the <strong>tsetse fly</strong>. A <strong>chancre</strong> may appear at the bite, followed by fever, headache, lymphadenopathy and, later, sleep disturbance, tremor, ataxia and coma. The subspecies differ in reservoir, vector and pace, which determines how aggressively cases are sought and how long patients are followed.</p>
    <h4>Screening and confirmation</h4>
    <ul>
      <li><strong>CATT</strong> or rapid serological tests screen for <em>gambiense</em>; they are not useful for <em>rhodesiense</em>.</li>
      <li>Confirm with microscopy of blood, buffy coat, lymph node aspirate or CSF.</li>
      <li><strong>mAECT</strong> (mini-anion exchange centrifugation) concentrates trypanosomes; PCR is available in reference laboratories.</li>
    </ul>
    <h4>Staging is mandatory</h4>
    <p>All patients need a <strong>lumbar puncture</strong>, because treatment differs between stage 1 (haemolymphatic) and <strong>stage 2</strong> (CNS). Stage 2 is defined by trypanosomes in CSF or a <strong>CSF white cell count</strong> above the programme threshold. Neurological signs support staging but cannot replace CSF examination. CSF protein and cell count are recorded, and the result is entered directly into the treatment decision, although a traumatic tap can raise the cell count and must be interpreted with caution. Omitting the lumbar puncture risks undertreating CNS disease or exposing a stage 1 patient to toxic CNS drugs.</p>
    <h4>Laboratory pitfalls</h4>
    <div class="table-wrap"><table>
      <tr><th>Problem</th><th>Explanation</th></tr>
      <tr><td>Low parasitaemia</td><td>Concentration techniques are needed; repeated sampling may be required</td></tr>
      <tr><td>Serology after treatment</td><td>Antibodies persist, so serology cannot confirm cure</td></tr>
      <tr><td>Blood film in <em>rhodesiense</em></td><td>Parasitaemia is higher, so films are more often positive</td></tr>
    </table></div>
    <p>Staging determines access to <strong>NECT</strong>, <strong>melarsoprol</strong> or newer oral drugs, and it must be repeated if relapse is suspected.</p>
  `,
  tip: "The lumbar puncture is the examination that defines stage 2 — say so explicitly.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "pa95", domain: "para-blood",
  q: "Discuss the control and elimination of human African trypanosomiasis, including new treatment tools and remaining challenges.",
  tags: ["HAT elimination", "tsetse control", "fexinidazole", "surveillance"],
  keypoints: ["elimination as a public health problem", "active case finding", "tsetse traps", "animal reservoir", "Fexinidazole", "Acoziborole", "integration into primary health care", "zoonotic", "stigma", "surveillance"],
  answer: `
    <h4>The elimination goal</h4>
    <p>Human African trypanosomiasis is targeted for <strong>elimination as a public health problem</strong> by 2030, with interruption of transmission in selected foci. Case numbers have fallen sharply because of sustained <strong>active case finding</strong>, treatment and vector control, but the disease persists in remote, conflict-affected areas where surveillance is weak.</p>
    <h4>Four pillars</h4>
    <ul>
      <li><strong>Case detection and treatment</strong>: door-to-door screening with rapid serological tests, confirmation and staged treatment.</li>
      <li><strong>Vector control</strong>: insecticide-treated <strong>tsetse traps</strong> and targets, and sterile insect technique in selected settings.</li>
      <li><strong>Animal reservoir management</strong>: important for <em>T. b. rhodesiense</em>, where cattle and wildlife maintain transmission.</li>
      <li><strong>Surveillance</strong> and response: case investigation, mapping of foci and cross-border collaboration.</li>
    </ul>
    <h4>New tools change the strategy</h4>
    <p><strong>Fexinidazole</strong> is an oral treatment for both stages of <em>gambiense</em> disease, simplifying care where lumbar puncture and infusions are difficult. <strong>Acoziborole</strong>, a single-dose oral candidate, is undergoing evaluation and could further decentralise treatment. Rapid diagnostic tests and improved staging algorithms reduce the need for referral. These tools make <strong>integration into primary health care</strong> feasible.</p>
    <h4>Remaining challenges</h4>
    <p>Populations in remote rainforest and savannah areas are hard to reach; conflict and displacement disrupt programmes; <strong>stigma</strong> delays presentation; and <em>rhodesiense</em> disease is <strong>zoonotic</strong>, so human treatment alone cannot eliminate it. Diagnostics must be free at the point of care, and staff must be trained to suspect the disease. Elimination will be verified by sustained zero transmission, not by a fall in reported cases alone.</p>
  `,
  tip: "Pair each new drug with its advantage: oral fexinidazole for both stages, single-dose acoziborole for decentralisation.",
  sources: ["P1", "P2", "P6"]
},
{
  id: "pa96", domain: "para-blood", star: true,
  q: "Discuss chronic Chagas cardiomyopathy: pathogenesis, clinical and laboratory features, and management.",
  tags: ["Chagas", "cardiomyopathy", "benznidazole", "BENEFIT"],
  keypoints: ["Chagas cardiomyopathy", "fibrosis", "apical aneurysm", "sudden cardiac death", "thromboembolism", "right bundle branch block", "two different serological assays", "Benznidazole", "nifurtimox", "BENEFIT trial", "amiodarone", "implantable defibrillator", "Cardiac transplantation"],
  answer: `
    <h4>From infection to cardiomyopathy</h4>
    <p>Chronic <strong>Chagas cardiomyopathy</strong> develops in roughly one third of people with <em>Trypanosoma cruzi</em> infection, years to decades after the acute phase. Persistent parasites, chronic inflammation and progressive <strong>fibrosis</strong> damage the conduction system and myocardium, producing <strong>apical aneurysm</strong>, chamber dilatation and arrhythmias. The result is a mixed dilated cardiomyopathy with a high risk of <strong>sudden cardiac death</strong> and <strong>thromboembolism</strong>. Microvascular ischaemia, autonomic dysfunction and immune-mediated damage contribute, and parasites can persist in cardiac tissue for decades.</p>
    <h4>Clinical and laboratory findings</h4>
    <ul>
      <li>Palpitations, syncope, exertional dyspnoea, oedema and, late, refractory heart failure.</li>
      <li><strong>ECG</strong>: <strong>right bundle branch block</strong>, left anterior fascicular block, ventricular extrasystoles and atrial fibrillation.</li>
      <li><strong>Echocardiography</strong>: reduced ejection fraction, apical aneurysm, thrombus.</li>
      <li>Diagnosis of infection by <strong>two different serological assays</strong>; PCR is used for reactivation in immunosuppression.</li>
    </ul>
    <h4>Management</h4>
    <p><strong>Benznidazole</strong> or <strong>nifurtimox</strong> is offered to patients with acute or early chronic infection and to women of childbearing age. In established cardiomyopathy, the <strong>BENEFIT trial</strong> found no significant reduction in cardiac events, so antitrypanosomal therapy is individualised. Heart failure is treated conventionally; <strong>amiodarone</strong> controls arrhythmias, an <strong>implantable defibrillator</strong> is considered for high-risk patients, and anticoagulation is used for thrombus or atrial fibrillation. <strong>Cardiac transplantation</strong> is an option, with monitoring for reactivation. Systemic embolism may be the first manifestation, and stroke can occur in younger patients; chest radiography may show cardiomegaly, and Holter monitoring detects non-sustained ventricular tachycardia. Patients need counselling about salt restriction, exercise and the warning symptoms of arrhythmia.</p>
    <p>Screening of blood donors and migrants, vector control and congenital screening remain the most effective prevention, and infected women of childbearing age should be treated before pregnancy.</p>
  `,
  tip: "BENEFIT is the trial to cite when discussing antitrypanosomal therapy in established cardiac disease.",
  sources: ["P1", "P2", "P3"]
},
{
  id: "pa97", domain: "para-blood",
  q: "Describe the laboratory identification of microfilariae in peripheral blood and the clinical importance of species differentiation.",
  tags: ["microfilaria", "Wuchereria", "Loa loa", "periodicity"],
  keypoints: ["microfilariae", "nocturnal periodic", "diurnal", "Mansonella perstans", "Knott's concentration", "membrane filtration", "ivermectin", "L. loa", "Antigen tests", "Onchocerca volvulus", "skin snips"],
  answer: `
    <h4>Why timing matters</h4>
    <p>Filarial worms release <strong>microfilariae</strong> into the blood with a periodicity adapted to vector biting. <em>Wuchereria bancrofti</em> and <em>Brugia malayi</em> are usually <strong>nocturnal periodic</strong>, so blood should be collected between about 10 pm and 2 am; <em>Loa loa</em> is <strong>diurnal</strong>; <em>Mansonella perstans</em> shows little periodicity. Between feeding times the larvae are sequestered in pulmonary capillaries, and reversing the sleep-wake cycle reverses the pattern. A daytime sample can therefore be falsely negative.</p>
    <h4>Morphological identification</h4>
    <div class="table-wrap"><table>
      <tr><th>Species</th><th>Sheath</th><th>Tail nuclei</th><th>Cephalic space</th></tr>
      <tr><td><em>W. bancrofti</em></td><td>Present</td><td>None at tip</td><td>Short</td></tr>
      <tr><td><em>B. malayi</em></td><td>Present, pink</td><td>Two terminal</td><td>Long</td></tr>
      <tr><td><em>L. loa</em></td><td>Present</td><td>To the tip</td><td>Long</td></tr>
      <tr><td><em>M. perstans</em></td><td>Absent</td><td>To the tip</td><td>Short</td></tr>
    </table></div>
    <p>Giemsa or Delafield's haematoxylin staining shows the sheath, nuclei and body curves. The sheath is the retained egg membrane, and its staining reaction, the arrangement of tail nuclei and the length of the cephalic space separate the species. <em>W. bancrofti</em> has a smooth, graceful curve, whereas <em>B. malayi</em> is kinked and angular; <em>M. perstans</em> is unsheathed and much shorter.</p>
    <h4>Concentration and quantitation</h4>
    <p>Venous blood collected in EDTA is examined as thick films or after concentration. <strong>Knott's concentration</strong> uses formalin to lyse red cells, and 5-µm <strong>membrane filtration</strong> captures larvae on a filter that is then stained and examined. The buffy coat method is simpler and preserves motility. Counting microfilariae per millilitre is important before mass drug administration, because a heavy <em>L. loa</em> load predicts severe adverse reactions to <strong>ivermectin</strong>.</p>
    <h4>Clinical value and pitfalls</h4>
    <p>Species identification guides treatment and explains the risk of <strong>ivermectin</strong> in loiasis: high <em>L. loa</em> microfilaraemia can cause encephalopathy, so levels should be assessed before mass treatment. <strong>Antigen tests</strong> for <em>W. bancrofti</em> are more sensitive than films and are used in elimination surveys. Remember that <strong>Onchocerca volvulus</strong> microfilariae are found in <strong>skin snips</strong>, not blood.</p>
  `,
  tip: "Give the collection time first, then the sheath and tail nuclei — that is the order examiners expect.",
  sources: ["P2", "P3", "P1"]
},
{
  id: "pa98", domain: "para-blood",
  q: "Discuss malaria vector control and the problem of insecticide resistance.",
  tags: ["vector control", "LLIN", "IRS", "insecticide resistance"],
  keypoints: ["Anopheles", "An. flavirostris", "An. balabacensis", "Long-lasting insecticidal nets", "Indoor residual spraying", "Larval source management", "dual active ingredient nets", "target-site", "kdr", "metabolic", "WHO bioassays", "Integrated vector management"],
  answer: `
    <h4>The vectors</h4>
    <p>Malaria is transmitted by female <strong>Anopheles</strong> mosquitoes, and control depends on their behaviour. In Africa, <em>An. gambiae</em>, <em>An. arabiensis</em> and <em>An. funestus</em> dominate; in the Philippines, <em>An. flavirostris</em> breeds in clear, slow-flowing foothill streams, while <em>An. balabacensis</em> transmits forest malaria and <em>P. knowlesi</em> in Palawan. Species that bite outdoors or early in the evening escape interventions aimed at indoor biting. <em>An. gambiae</em> is highly anthropophilic and breeds in temporary pools, whereas <em>An. arabiensis</em> is more zoophilic and survives in drier conditions.</p>
    <h4>Core interventions</h4>
    <ul>
      <li><strong>Long-lasting insecticidal nets (LLINs)</strong> protect against night-biting vectors and are distributed through mass campaigns and antenatal clinics.</li>
      <li><strong>Indoor residual spraying (IRS)</strong> kills mosquitoes resting on sprayed walls; it needs high coverage and community acceptance.</li>
      <li><strong>Larval source management</strong> targets breeding sites, useful where habitats are few and fixed.</li>
      <li>Newer pyrethroid-PBO nets and <strong>dual active ingredient nets</strong> counter metabolic resistance.</li>
    </ul>
    <h4>Insecticide resistance</h4>
    <p>Resistance is driven by <strong>target-site</strong> mutations (knockdown resistance, <strong><em>kdr</em></strong>) and by <strong>metabolic</strong> detoxification through esterases and cytochrome P450s. It is monitored by <strong>WHO bioassays</strong> and molecular tests. Resistance does not always equal control failure, but it erodes the effectiveness of nets and spraying. Resistance intensity, not merely its presence, determines whether a net still works, and piperonyl butoxide synergist nets target P450-based metabolic resistance.</p>
    <h4>Beyond insecticides</h4>
    <p>Residual transmission from outdoor and early biting, poor net durability, human behaviour and climate change all limit impact. <strong>Integrated vector management</strong> combines nets, spraying, larval control, housing improvement and community education. Surveillance must track both vector density and resistance, and new tools need to be deployed where the old ones are failing. Larval surveys and adult trapping provide the entomological data needed to target interventions.</p>
  `,
  tip: "Name the Philippine vectors and then link each intervention to mosquito behaviour.",
  sources: ["P7", "P4", "P1"]
},
{
  id: "pa99", domain: "para-blood",
  q: "Discuss the interaction between malaria and HIV infection and its implications for diagnosis, treatment and prevention.",
  tags: ["malaria", "HIV", "co-infection", "co-trimoxazole"],
  keypoints: ["HIV infection increases", "placental malaria", "viral load", "thick and thin films", "RDT", "ACT", "intravenous artesunate", "Co-trimoxazole prophylaxis", "sulfadoxine-pyrimethamine", "Insecticide-treated nets", "drug resistance"],
  answer: `
    <h4>Why the two interact</h4>
    <p><strong>HIV infection increases</strong> the frequency and severity of malaria, especially in adults with low CD4 counts and in pregnancy, where <strong>placental malaria</strong> is more intense. Malaria transiently raises HIV <strong>viral load</strong> and may accelerate disease progression. Both are common in sub-Saharan Africa, so co-infection is frequent even though malaria is not a classical opportunistic infection. The effect is bidirectional: malaria-driven immune activation may increase HIV replication, while HIV-related immunosuppression permits higher parasite densities.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li>Fever in an HIV-positive patient still requires <strong>thick and thin films</strong> and an <strong>RDT</strong>; neither is infallible. A negative RDT in a severely immunosuppressed patient should be confirmed by microscopy or PCR.</li>
      <li>Severe immunosuppression may blunt fever and reduce parasite clearance.</li>
      <li>Consider co-infections such as tuberculosis and bacterial sepsis, which mimic or accompany malaria.</li>
    </ul>
    <h4>Treatment and prevention</h4>
    <p>Uncomplicated malaria is treated with an <strong>ACT</strong>; severe malaria with <strong>intravenous artesunate</strong>. Clinically significant interactions with ART are limited, but adherence and vomiting must be assessed. <strong>Co-trimoxazole prophylaxis</strong> reduces malaria episodes and is standard for eligible patients; it should not be given together with <strong>sulfadoxine-pyrimethamine</strong> for IPTp because of additive antifolate toxicity. <strong>Insecticide-treated nets</strong> and prompt diagnosis remain essential.</p>
    <h4>Practical points</h4>
    <div class="table-wrap"><table>
      <tr><th>Issue</th><th>Action</th></tr>
      <tr><td>Fever with low CD4</td><td>Test for malaria and other infections; do not attribute all fever to HIV</td></tr>
      <tr><td>Pregnancy</td><td>Use ITNs and ACT; avoid primaquine and tafenoquine</td></tr>
      <tr><td>Recurrent malaria</td><td>Check adherence, reinfection and <strong>drug resistance</strong></td></tr>
    </table></div>
    <p>Malaria does not usually require a change in ART, but pill burden and immune reconstitution should be reviewed. Preventing malaria is itself a form of HIV care.</p>
  `,
  tip: "Two examinable interactions: co-trimoxazole must not be combined with IPTp-SP, and malaria raises HIV viral load.",
  sources: ["P7", "P1", "P3"]
}
);
