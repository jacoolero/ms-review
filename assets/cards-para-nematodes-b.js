/* Flashcards — nematodes, part B */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-nmx-", "para-nematodes", ["P1", "P2", "P3", "P4"], [
    ["Why does <i>Ascaris</i> obstruct the bowel in children?", "A <b>worm bolus</b> blocks the narrow ileum, often at the <b>ileocaecal valve</b>."],
    ["Pulmonary phase of ascariasis — syndrome name?", "<b>Löffler syndrome</b>: transient migratory infiltrates with eosinophilia."],
    ["Hookworm anaemia in pregnancy — typical red cell picture?", "<b>Microcytic hypochromic</b> anaemia with low <b>ferritin</b>."],
    ["Heavy <i>Trichuris</i> — two classic clinical signs?", "<b>Dysentery</b> with tenesmus and <b>rectal prolapse</b> in children."],
    ["Before high-dose steroids, which nematode must be excluded?", "<b><i>Strongyloides stercoralis</i></b> — risk of <b>hyperinfection</b>."],
    ["Ectopic enterobiasis in girls — name two sites", "<b>Vulva/vagina</b> and <b>fallopian tube</b>; also the appendix."],
    ["Best test on suspect meat in a trichinellosis outbreak", "<b>Pepsin-HCl digestion</b> to release encysted larvae."],
    ["Ocular toxocariasis mimics which childhood tumour?", "<b>Retinoblastoma</b> — both cause leukocoria."],
    ["Major heat-stable allergen of <i>Anisakis</i>", "<b>Ani s 1</b> — causes IgE-mediated anaphylaxis."],
    ["Why does capillariasis cause oedema?", "<b>Protein-losing enteropathy</b> with hypoalbuminaemia."],
    ["Intermediate host of <i>Dracunculus medinensis</i>", "A <b>copepod</b> (<i>Cyclops</i>) in drinking water."],
    ["Core self-care for filarial lymphoedema", "Daily <b>hygiene</b>, <b>elevation</b>, exercise and skin care."],
    ["Onchocerciasis — vector and diagnostic specimen", "<b><i>Simulium</i></b> blackfly; a <b>skin snip</b>."],
    ["What is a Calabar swelling?", "Transient angioedema from migrating <b><i>Loa loa</i></b>."],
    ["Three laboratory hallmarks of tropical pulmonary eosinophilia", "High <b>IgE</b>, marked <b>eosinophilia</b>, raised filarial antibodies."],
    ["Survey that decides when LF MDA can stop", "A <b>Transmission Assessment Survey (TAS)</b> in children."],
    ["Larval culture methods for hookworm and <i>Strongyloides</i>", "<b>Harada-Mori</b> filter-paper culture and <b>Baermann</b> concentration."],
    ["Mechanism of albendazole", "Binds <b>beta-tubulin</b> and blocks <b>microtubule</b> assembly."]
  ]);
})();
