window.QBANK.push(
{
  id: "p1", domain: "para-blood", star: true,
  q: "Describe the life cycle and pathogenesis of Plasmodium falciparum. How is malaria diagnosed and treated, and what is artemisinin resistance?",
  tags: ["malaria", "P. falciparum", "artemisinin", "RDT"],
  answer: `
    <h4>Life cycle</h4>
    <p>Infection begins when an infected female <em>Anopheles</em> mosquito injects <strong>sporozoites</strong>, which travel to the liver and infect hepatocytes. After asexual multiplication, <strong>merozoites</strong> are released and invade red blood cells, where they pass through ring, trophozoite and schizont stages; rupture releases merozoites and pyrogenic factors. Some parasites differentiate into <strong>gametocytes</strong>, taken up by the mosquito, completing the cycle. <em>P. vivax</em> and <em>P. ovale</em> form <strong>hypnozoites</strong> in the liver, causing relapse; <em>P. malariae</em> causes chronic low-level infection; <em>P. knowlesi</em> is zoonotic from macaques.</p>
    <h4>Pathogenesis</h4>
    <p><em>P. falciparum</em> infects red cells of all ages and modifies the cell surface with <strong>PfEMP1</strong>, mediating <strong>cytoadherence</strong> to endothelium (sequestration), rosetting and microvascular obstruction. This causes cerebral malaria, lactic acidosis, hypoglycaemia, severe anaemia, acute kidney injury and ARDS. The cytokine response (TNF, IL-1) drives fever and contributes to pathology. Severe malaria is a medical emergency; children and pregnant women are most vulnerable.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Thick and thin blood films</strong> with Giemsa stain — thick film for detection, thin film for species and parasitaemia. Repeat every 8–12 hours if initially negative.</li>
      <li><strong>Rapid diagnostic tests</strong> — detect HRP2 (falciparum) or pLDH; HRP2 can persist after treatment and is deleted in some parasites, causing false negatives.</li>
      <li><strong>PCR</strong> — species confirmation, mixed infection, low parasitaemia, resistance markers.</li>
      <li>Supportive: full blood count, lactate, glucose, creatinine, bilirubin, urinalysis.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Uncomplicated falciparum malaria: <strong>artemisinin-based combination therapy</strong> (artemether–lumefantrine, artesunate–amodiaquine, dihydroartemisinin–piperaquine, artesunate–mefloquine). <strong>Severe malaria: intravenous or intramuscular artesunate</strong>, then a full ACT course; alternatives are artemether or quinine. <em>P. vivax</em>: chloroquine (or ACT in resistant areas) plus <strong>primaquine</strong> for hypnozoites after G6PD testing. Supportive care includes glucose, fluids, transfusion and management of complications.</p>
    <h4>Artemisinin resistance</h4>
    <p>Partial resistance — delayed parasite clearance — is associated with <strong>Kelch13</strong> mutations and has emerged in the Greater Mekong subregion and now East Africa. It threatens ACT efficacy, especially where partner-drug resistance coexists (piperaquine). Strategies: change partner drugs, use multiple first-line therapies, strengthen surveillance, and develop new drugs (e.g. triple ACTs, cipargamin, ganaplacide).</p>
    <h4>Prevention</h4>
    <p>Insecticide-treated nets, indoor residual spraying, chemoprophylaxis for travellers and pregnant women (IPTp), seasonal malaria chemoprevention, and vaccines — <strong>RTS,S/AS01</strong> and <strong>R21/Matrix-M</strong> — which reduce clinical malaria in children.</p>
  `,
  tip: "Sequestration via PfEMP1 is the key to severe falciparum disease; name Kelch13 for artemisinin resistance.",
  sources: ["S1", "S4", "S15"]
},
{
  id: "p2", domain: "para-blood", star: true,
  q: "Describe toxoplasmosis in immunocompetent, pregnant and immunocompromised hosts. How is it diagnosed and managed?",
  tags: ["Toxoplasma", "congenital", "HIV", "pyrimethamine"],
  answer: `
    <h4>Life cycle</h4>
    <p><em>Toxoplasma gondii</em> is an obligate intracellular apicomplexan. The <strong>cat</strong> is the definitive host, shedding oocysts in faeces; intermediate hosts (rodents, birds, livestock, humans) harbour <strong>tissue cysts</strong> containing bradyzoites. Humans are infected by ingesting oocysts from soil or water, or undercooked meat containing tissue cysts, or by vertical transmission. Tachyzoites disseminate and encyst in brain, muscle and retina, persisting for life.</p>
    <h4>Immunocompetent hosts</h4>
    <p>Usually asymptomatic or a self-limited flu-like illness with <strong>cervical lymphadenopathy</strong>; rarely chorioretinitis, myocarditis or pneumonitis. No treatment is needed unless visceral or ocular disease is severe.</p>
    <h4>Pregnancy and congenital infection</h4>
    <p>Primary maternal infection is the risk; transmission rises with gestational age but severity is greatest with early infection. Classic triad: <strong>hydrocephalus, intracranial calcifications and chorioretinitis</strong>; also microcephaly, hepatosplenomegaly, jaundice, thrombocytopenia and seizures. Most infected newborns are asymptomatic at birth but develop sequelae later. Prenatal diagnosis by <strong>amniotic fluid PCR</strong>; maternal serology with IgG avidity helps date infection. Treatment: <strong>spiramycin</strong> to reduce transmission, or <strong>pyrimethamine plus sulfadiazine and folinic acid</strong> if fetal infection is confirmed (after the first trimester).</p>
    <h4>Immunocompromised hosts</h4>
    <p>Reactivation in HIV with CD4 <100 causes <strong>toxoplasmic encephalitis</strong>: fever, headache, focal neurological deficits, seizures; MRI shows <strong>multiple ring-enhancing lesions</strong> in the basal ganglia. Also pneumonitis and chorioretinitis. Diagnosis: serology (IgG positive in almost all), PCR of CSF, brain biopsy; radiology and response to empirical therapy. Treatment: <strong>pyrimethamine + sulfadiazine + folinic acid</strong> (alternatives: clindamycin, atovaquone, TMP-SMX), then maintenance until immune reconstitution. Prophylaxis with TMP-SMX when CD4 <100 and IgG positive.</p>
    <h4>Diagnosis</h4>
    <p>Serology (IgM, IgG, IgG avidity), PCR (amniotic fluid, CSF, blood), histology (tachyzoites, cysts), and imaging. IgM can persist for years, so avidity testing is important in pregnancy.</p>
    <h4>Prevention</h4>
    <p>Cook meat thoroughly, wash vegetables, avoid cat litter and soil contact during pregnancy, and provide prophylaxis in advanced HIV. No licensed vaccine.</p>
  `,
  tip: "The three host settings — healthy, pregnant, HIV — each have a different disease and a different treatment threshold.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "p3", domain: "para-blood",
  q: "Compare the clinical forms of leishmaniasis. How is the parasite transmitted, diagnosed and treated?",
  tags: ["Leishmania", "sandfly", "kala-azar", "amphotericin"],
  answer: `
    <h4>Parasite and transmission</h4>
    <p><em>Leishmania</em> is an obligate intracellular protozoan transmitted by the bite of infected female <strong>phlebotomine sandflies</strong>. The infective <strong>promastigote</strong> is injected, taken up by macrophages, and transforms into the non-flagellated <strong>amastigote</strong>, which replicates within the phagolysosome. Reservoirs include dogs, rodents and humans (anthroponotic transmission in visceral leishmaniasis).</p>
    <h4>Clinical forms</h4>
    <ul>
      <li><strong>Visceral leishmaniasis (kala-azar)</strong> — <em>L. donovani</em> (India, East Africa) and <em>L. infantum</em> (Mediterranean, Latin America). Fever, weight loss, hepatosplenomegaly, pancytopenia, hypergammaglobulinaemia and darkening of the skin ("black fever"). Fatal if untreated; post-kala-azar dermal leishmaniasis occurs after treatment.</li>
      <li><strong>Cutaneous leishmaniasis</strong> — <em>L. major</em>, <em>L. tropica</em>, <em>L. mexicana</em>, <em>L. amazonensis</em>. Painless ulcer with a raised indurated border at the bite site ("oriental sore"), healing with a scar; may be disfiguring.</li>
      <li><strong>Mucocutaneous (espundia)</strong> — <em>L. braziliensis</em>; destructive lesions of the nose, mouth and pharynx.</li>
      <li><strong>Diffuse cutaneous</strong> — anergic form with widespread non-ulcerating lesions.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>Demonstration of amastigotes (Leishman–Donovan bodies) in tissue smears or biopsy (spleen, bone marrow, lymph node, skin); culture (NNN medium) and PCR; <strong>rK39 antigen test</strong> for visceral disease; serology (DAT, ELISA) useful epidemiologically but not for cure. Splenic aspirate is most sensitive but risky.</p>
    <h4>Treatment</h4>
    <p>Visceral: <strong>liposomal amphotericin B</strong> (single or multiple doses) is the preferred regimen; alternatives include <strong>miltefosine</strong>, <strong>paromomycin</strong>, and sodium stibogluconate. Combination therapy is used to reduce toxicity and resistance. Cutaneous: many lesions heal spontaneously; options include local heat, cryotherapy, intralesional antimonials, miltefosine, fluconazole or itraconazole; mucocutaneous disease requires systemic therapy. Supportive care, treatment of co-infections (HIV, TB) and vector control are essential.</p>
    <h4>Prevention and control</h4>
    <p>Insecticide-treated nets, indoor residual spraying, reservoir control (dogs), environmental management, and early diagnosis. Leishmaniasis is a neglected tropical disease targeted for elimination as a public health problem in South Asia.</p>
  `,
  tip: "Promastigote in the sandfly, amastigote in the macrophage — and liposomal amphotericin B for visceral disease.",
  sources: ["S1", "S4", "S19"]
},
{
  id: "p4", domain: "para-blood",
  q: "Compare African and American trypanosomiasis in terms of transmission, pathogenesis, diagnosis and treatment.",
  tags: ["trypanosomiasis", "Chagas", "tsetse", "sleeping sickness"],
  answer: `
    <h4>African trypanosomiasis (sleeping sickness)</h4>
    <p>Caused by <em>Trypanosoma brucei gambiense</em> (West/Central Africa, chronic) and <em>rhodesiense</em> (East Africa, acute). Transmitted by the <strong>tsetse fly</strong> (<em>Glossina</em>); reservoirs include humans and cattle. The parasite undergoes <strong>antigenic variation</strong> of the variant surface glycoprotein (VSG), allowing persistent parasitaemia and immune evasion.</p>
    <p><strong>Clinical:</strong> a painful chancre at the bite site; intermittent fever, headache, lymphadenopathy (Winterbottom sign), anaemia; in stage 2, CNS invasion causes sleep disturbance, behavioural change, tremor, ataxia, seizures and coma. <em>Rhodesiense</em> progresses rapidly and is more virulent.</p>
    <p><strong>Diagnosis:</strong> blood, lymph node aspirate or CSF microscopy; buffy coat; serology (CATT) for screening; PCR; <strong>lumbar puncture is essential to stage disease</strong> (CSF white cells, protein, trypanosomes).</p>
    <p><strong>Treatment:</strong> stage 1 — <strong>pentamidine</strong> (gambiense) or <strong>suramin</strong> (rhodesiense); stage 2 — <strong>nifurtimox–eflornithine combination therapy</strong> (NECT) for gambiense, <strong>melarsoprol</strong> for rhodesiense (toxic, arsenic-based). Newer oral agents (fexinidazole, acoziborole) are simplifying treatment.</p>
    <h4>American trypanosomiasis (Chagas disease)</h4>
    <p>Caused by <em>Trypanosoma cruzi</em>, transmitted by <strong>triatomine bugs</strong> (kissing bugs) via contaminated faeces, and also by blood transfusion, organ transplant, congenital transmission and food. The parasite invades cells and forms intracellular amastigote nests, especially in heart, oesophagus and colon.</p>
    <p><strong>Clinical:</strong> acute phase — fever, malaise, Romaña sign (periorbital oedema), myocarditis; then an indeterminate asymptomatic phase lasting years; chronic phase — cardiomyopathy (arrhythmias, heart failure, thromboembolism) and mega-oesophagus/megacolon. Reactivation occurs in HIV and transplant.</p>
    <p><strong>Diagnosis:</strong> blood smear (acute), serology (ELISA, IHA, Western blot) for chronic disease, PCR, and histology. Screening of blood donors is essential in endemic areas.</p>
    <p><strong>Treatment:</strong> <strong>benznidazole</strong> or <strong>nifurtimox</strong>, most effective in acute and early chronic disease; supportive management of cardiomyopathy and gastrointestinal complications. Prevention: vector control, housing improvement, blood screening and congenital screening.</p>
    <h4>Contrast</h4>
    <p>African disease is extracellular in blood and lymph with CNS involvement; American disease is intracellular with cardiac and gastrointestinal sequelae. Both are neglected tropical diseases with limited access to effective drugs.</p>
  `,
  tip: "The staging lumbar puncture in African trypanosomiasis and the cardiac/gastrointestinal sequelae of Chagas are the key discriminators.",
  sources: ["S1", "S4", "S19"]
},
{
  id: "p5", domain: "para-trematodes", star: true,
  q: "Describe the life cycle and pathogenesis of schistosomiasis. How is it diagnosed, treated and controlled?",
  tags: ["Schistosoma", "snail", "praziquantel", "granuloma"],
  answer: `
    <h4>Life cycle</h4>
    <p><em>Schistosoma</em> species have a complex life cycle requiring a <strong>freshwater snail</strong> intermediate host. Eggs passed in urine or faeces hatch into miracidia, which infect snails; cercariae are released and penetrate human skin during contact with contaminated water. Schistosomulae migrate through the lungs to the portal venous system, mature into adult worms, and pair; <em>S. mansoni</em> and <em>japonicum</em> reside in mesenteric venules, <em>S. haematobium</em> in vesical venules. Adults live for years and produce eggs that penetrate tissues, causing disease.</p>
    <h4>Pathogenesis</h4>
    <p>Disease is mainly <strong>egg-induced granulomatous inflammation</strong> and fibrosis, not the adult worm. <em>S. mansoni/japonicum</em>: periportal fibrosis, portal hypertension, splenomegaly, oesophageal varices, ascites. <em>S. haematobium</em>: haematuria, bladder wall thickening, calcification, hydronephrosis, and <strong>squamous cell carcinoma of the bladder</strong>. Acute schistosomiasis (Katayama fever) occurs weeks after infection with fever, eosinophilia, urticaria and hepatosplenomegaly. Ectopic eggs can cause CNS or pulmonary disease.</p>
    <h4>Diagnosis</h4>
    <p><strong>Urine microscopy</strong> for <em>S. haematobium</em> eggs (terminal spine), <strong>stool microscopy</strong> (Kato–Katz) for <em>S. mansoni/japonicum</em> (lateral spine), serology (useful in travellers and low-intensity infection), PCR, and imaging (ultrasound for fibrosis, bladder wall). Eosinophilia is a clue but non-specific.</p>
    <h4>Treatment</h4>
    <p><strong>Praziquantel</strong> is the drug of choice: a single dose for <em>haematobium</em>, and 40 mg/kg (often split) for <em>mansoni/japonicum</em>. It is safe and effective but does not kill immature worms, so retreatment may be needed. Corticosteroids are used for Katayama fever and neuroschistosomiasis; management of portal hypertension and bladder cancer requires specialist care.</p>
    <h4>Control</h4>
    <p><strong>Mass drug administration</strong> with praziquantel, snail control (molluscicides), safe water and sanitation, health education, and avoidance of freshwater contact in endemic areas. Vaccines are not available. WHO aims to eliminate schistosomiasis as a public health problem; climate change and dam construction are expanding transmission.</p>
  `,
  tip: "Eggs cause disease, not adults; and praziquantel does not kill immature worms — both are high-yield points.",
  sources: ["S1", "S4", "S19"]
},
{
  id: "p6", domain: "para-nematodes",
  q: "Compare the soil-transmitted helminths — Ascaris, hookworm, Trichuris and Strongyloides — and explain their control by mass drug administration.",
  tags: ["helminths", "Ascaris", "hookworm", "Strongyloides"],
  answer: `
    <h4>Transmission and burden</h4>
    <p>Soil-transmitted helminths (STH) affect over a billion people, mostly in low-income settings. They are transmitted by ingestion of eggs (<em>Ascaris</em>, <em>Trichuris</em>) or skin penetration by larvae (<strong>hookworm</strong>, <em>Strongyloides</em>). Morbidity is chronic: anaemia, malnutrition, impaired growth and cognition, and pregnancy complications.</p>
    <h4><em>Ascaris lumbricoides</em></h4>
    <p>Large intestinal roundworm; eggs ingested, larvae hatch, migrate through lungs (Löffler syndrome), and mature in the small intestine. Heavy infection causes abdominal pain, obstruction, biliary/pancreatic migration and malnutrition. Diagnosis: stool microscopy for eggs; treatment: albendazole or mebendazole.</p>
    <h4>Hookworms (<em>Necator americanus</em>, <em>Ancylostoma duodenale</em>)</h4>
    <p>Larvae penetrate skin, migrate through lungs, and attach to the small intestine, sucking blood. Chronic blood loss causes <strong>iron-deficiency anaemia</strong> and protein malnutrition; "ground itch" at the entry site. Diagnosis: stool eggs, occult blood. Treatment: albendazole or mebendazole; iron replacement.</p>
    <h4><em>Trichuris trichiura</em> (whipworm)</h4>
    <p>Eggs ingested; worms embed in the caecal mucosa, causing dysentery, tenesmus, anaemia and rectal prolapse in heavy infection. Diagnosis: stool eggs (barrel-shaped with bipolar plugs). Treatment: albendazole or mebendazole; heavy infection may need repeated courses.</p>
    <h4><em>Strongyloides stercoralis</em></h4>
    <p>Unique among STH: <strong>autoinfection</strong> and <strong>hyperinfection syndrome</strong> in immunosuppression (corticosteroids, HTLV-1, transplant), with larvae migrating through lungs and gut, causing sepsis from enteric organisms and meningitis. Diagnosis: stool larvae (Baermann, agar plate), serology, duodenal aspirate. Treatment: <strong>ivermectin</strong>; albendazole alternative. Screening before corticosteroids in endemic-area patients is important.</p>
    <h4>Control</h4>
    <p><strong>Mass drug administration</strong> with albendazole or mebendazole (often with ivermectin and praziquantel in integrated programmes) for preschool and school-age children and at-risk adults; water, sanitation and hygiene; health education; and footwear. Drug resistance is monitored. STH control reduces anaemia and improves child development, and is a component of the WHO NTD roadmap.</p>
  `,
  tip: "Strongyloides is the exception: autoinfection, hyperinfection with steroids, and ivermectin — always mention it.",
  sources: ["S1", "S4", "S19"]
},
{
  id: "p7", domain: "para-intestinal", star: true,
  q: "Compare Giardia, Cryptosporidium and Entamoeba histolytica as causes of protozoal diarrhoea.",
  tags: ["Giardia", "Cryptosporidium", "amoebiasis", "stool"],
  answer: `
    <h4><em>Giardia lamblia</em> (duodenalis)</h4>
    <p>Flagellated protozoan with a ventral disc; acquired by ingestion of cysts from contaminated water or food (including recreational water and travel). It colonises the duodenum and jejunum, causing <strong>malabsorption, steatorrhoea, bloating and chronic diarrhoea</strong>; it does not invade. Diagnosis: stool microscopy for trophozoites/cysts, stool antigen EIA, PCR; duodenal aspirate or "string test" if needed. Treatment: <strong>metronidazole or tinidazole</strong>; nitazoxanide or paromomycin as alternatives; treat partners and screen water sources.</p>
    <h4><em>Cryptosporidium parvum/hominis</em></h4>
    <p>Obligate intracellular apicomplexan infecting enterocytes; oocysts are immediately infectious and resistant to chlorination. Causes watery diarrhoea, cramps and vomiting; in HIV with CD4 <100 it causes <strong>severe chronic diarrhoea and wasting</strong>. Diagnosis: modified acid-fast stain of stool (red oocysts), immunofluorescence, antigen EIA, PCR. Treatment: <strong>nitazoxanide</strong> in immunocompetent hosts; in HIV, <strong>antiretroviral therapy</strong> is the key intervention, plus nitazoxanide or paromomycin; supportive hydration. Prevention: boil or filter water, avoid swallowing recreational water.</p>
    <h4><em>Entamoeba histolytica</em></h4>
    <p>Invasive amoeba transmitted by cysts; excystation in the small intestine releases trophozoites that colonise the colon and can invade the mucosa, causing <strong>flask-shaped ulcers</strong>, bloody diarrhoea and dysentery. Haematogenous spread to the liver causes an <strong>amoebic liver abscess</strong> ("anchovy paste" aspirate); also lung and brain abscesses. Diagnosis: stool microscopy (trophozoites with ingested red cells), stool antigen, serology (useful for liver abscess), PCR; colonoscopy and imaging. Treatment: <strong>metronidazole or tinidazole</strong> for invasive disease, followed by a <strong>luminal agent</strong> (paromomycin or diloxanide furoate) to eradicate cysts; drainage of large liver abscesses may be needed.</p>
    <h4>Comparison</h4>
    <p>Giardia is a small-bowel malabsorptive pathogen; Cryptosporidium is an intracellular small-bowel pathogen resistant to chlorine; <em>E. histolytica</em> is a colonic invader with extraintestinal abscesses. Stool microscopy alone is insensitive, so antigen and PCR testing are preferred where available. All three are faecal–oral and preventable by safe water, sanitation and hygiene.</p>
  `,
  tip: "One line each: Giardia malabsorbs, Cryptosporidium is chlorine-resistant, Entamoeba invades and abscesses.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "p8", domain: "para-intestinal",
  q: "Describe trichomoniasis and its clinical significance. Why is it important in sexual health and pregnancy?",
  tags: ["Trichomonas", "STI", "metronidazole", "vaginitis"],
  answer: `
    <h4>Organism</h4>
    <p><em>Trichomonas vaginalis</em> is a flagellated protozoan with a pear-shaped body, undulating membrane and axostyle. It exists only as a trophozoite — no cyst stage — and is transmitted sexually. It infects squamous epithelium of the vagina, urethra and prostate.</p>
    <h4>Clinical</h4>
    <p>In women: <strong>vaginitis</strong> with a frothy, yellow-green, malodorous discharge, vulvar irritation, dysuria and dyspareunia; examination shows a <strong>"strawberry cervix"</strong> (punctate haemorrhages). Many infections are asymptomatic. In men: usually asymptomatic or mild urethritis, prostatitis or epididymitis; it can persist in the prostate and serve as a reservoir. Complications: pelvic inflammatory disease, increased HIV acquisition and transmission, adverse pregnancy outcomes (preterm birth, low birth weight), and infertility.</p>
    <h4>Diagnosis</h4>
    <p><strong>Wet mount microscopy</strong> shows motile trophozoites with jerky movement (sensitivity 50–70%); <strong>culture</strong> and <strong>NAAT</strong> are more sensitive, and NAAT is preferred for screening and diagnosis. Vaginal pH is often >4.5; Whiff test may be positive. Distinguish from bacterial vaginosis and candidiasis.</p>
    <h4>Treatment</h4>
    <p><strong>Metronidazole or tinidazole</strong> (single dose or 7-day course); treat sexual partners; avoid alcohol during metronidazole; test for other STIs including HIV. Metronidazole resistance is increasing and may require higher doses or alternative agents (paromomycin, nitazoxanide), with susceptibility testing where available. Screen and treat in pregnancy to reduce adverse outcomes.</p>
    <h4>Public health</h4>
    <p>Trichomoniasis is the most common non-viral STI worldwide. It is not reportable in many countries, and asymptomatic carriage sustains transmission. Control relies on partner treatment, condom use, screening in high-prevalence settings, and integration with HIV and reproductive health services. It is a WHO priority for STI control, and a vaccine is not available.</p>
  `,
  tip: "The strawberry cervix and frothy discharge are classic; NAAT is the modern diagnostic standard.",
  sources: ["S1", "S4", "S11"]
},
{
  id: "p9", domain: "para-nematodes",
  q: "Discuss the major filarial infections — lymphatic filariasis, onchocerciasis and loiasis — and their control by mass drug administration.",
  tags: ["filariasis", "onchocerciasis", "MDA", "ivermectin"],
  answer: `
    <h4>Lymphatic filariasis</h4>
    <p>Caused by <em>Wuchereria bancrofti</em>, <em>Brugia malayi</em> and <em>B. timori</em>, transmitted by mosquitoes. Adult worms live in lymphatic vessels; microfilariae circulate in blood with nocturnal periodicity. Disease: acute adenolymphangitis, chronic lymphoedema, hydrocele and <strong>elephantiasis</strong>; renal involvement (chyluria). Diagnosis: night blood smear (microfilaria), filarial antigen test (ICT), PCR, ultrasound (filarial dance sign). Treatment: <strong>diethylcarbamazine (DEC) or ivermectin plus albendazole</strong>, with doxycycline targeting <em>Wolbachia</em> endosymbionts; hygiene and surgery for lymphoedema/hydrocele.</p>
    <h4>Onchocerciasis (river blindness)</h4>
    <p>Caused by <em>Onchocerca volvulus</em>, transmitted by blackflies (<em>Simulium</em>) breeding in fast-flowing rivers. Adult worms form subcutaneous nodules; microfilariae migrate through skin and eye, causing intense pruritus, dermatitis, depigmentation ("leopard skin"), and <strong>corneal opacity and blindness</strong>. Diagnosis: skin snip microscopy, PCR, slit-lamp examination, nodule palpation. Treatment: <strong>ivermectin</strong> (microfilaricidal) annually or biannually; doxycycline to sterilise adult worms; nodulectomy. Ivermectin is contraindicated in <em>Loa loa</em> co-infection because of severe encephalopathy.</p>
    <h4>Loiasis</h4>
    <p>Caused by <em>Loa loa</em>, transmitted by deerflies (<em>Chrysops</em>) in Central/West Africa. Adult worms migrate through subcutaneous tissue (Calabar swellings) and the conjunctiva ("eye worm"); microfilariae circulate in blood. Diagnosis: blood smear, serology, PCR. Treatment: <strong>DEC</strong> (with caution in high microfilaraemia), albendazole; apheresis for very high counts.</p>
    <h4>Control</h4>
    <p><strong>Mass drug administration</strong>: annual DEC or ivermectin plus albendazole for lymphatic filariasis; community-directed ivermectin for onchocerciasis; vector control (insecticide-treated nets, larviciding, blackfly control). The WHO NTD roadmap targets elimination of lymphatic filariasis and onchocerciasis as public health problems. Challenges include <em>Loa loa</em> co-endemicity, ivermectin resistance, conflict and funding.</p>
  `,
  tip: "Ivermectin is central to onchocerciasis and lymphatic filariasis but dangerous in high Loa loa microfilaraemia — that nuance matters.",
  sources: ["S1", "S4", "S19"]
}
);
