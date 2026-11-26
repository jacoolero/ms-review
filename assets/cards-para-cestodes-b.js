/* Flashcards — cestodes, part B (fc-csx-1 to fc-csx-18) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-csx-", "para-cestodes", ["P1", "P2", "P3"], [
    ["Which tapeworm has an unarmed scolex and no human cysticercosis?", "<b><i>Taenia saginata</i></b> — the beef tapeworm; humans are only definitive hosts."],
    ["Common sites of extraneural cysticercosis", "Skeletal muscle, <b>subcutaneous tissue</b>, eye, heart, breast and thyroid."],
    ["Do calcified neurocysticercosis lesions need albendazole?", "<b>No</b> — there is no viable parasite; treat seizures and perilesional oedema."],
    ["First management step in racemose neurocysticercosis with hydrocephalus", "<b>CSF diversion</b> (external drain or shunt), then antiparasitic therapy."],
    ["When is elective cysticidal therapy deferred in pregnancy?", "Usually until <b>after delivery</b>; treat seizures and hydrocephalus immediately."],
    ["Definitive host of <i>Echinococcus multilocularis</i>", "The <b>red fox</b>; rodents are intermediate hosts."],
    ["CE1 and CE3a hydatid cysts: preferred treatment?", "<b>PAIR</b> plus albendazole."],
    ["Why is bone hydatid difficult to cure?", "It <b>lacks a fibrous pericyst</b> and grows infiltratively, so resection is incomplete."],
    ["Egg feature that separates <i>H. diminuta</i> from <i>H. nana</i>", "<b>No polar filaments</b>; the egg is also larger (70–85 µm)."],
    ["How does <i>Diphyllobothrium latum</i> cause B12 deficiency?", "It competes for the <b>vitamin B12–intrinsic factor complex</b>, causing malabsorption."],
    ["Which <i>Diphyllobothrium</i> species comes from Pacific salmon?", "<b><i>D. nihonkaiense</i></b>."],
    ["Intermediate host of <i>Dipylidium caninum</i>", "The <b>flea</b> (<i>Ctenocephalides</i>); children ingest infected fleas."],
    ["Cestode egg packet containing 8–15 eggs", "<b><i>Dipylidium caninum</i></b>."],
    ["What does a positive EITB indicate in cysticercosis?", "<b>Exposure</b> to <i>T. solium</i>; it does not prove viable cysts."],
    ["Imaging sign of a viable neurocysticercus", "A cyst with a scolex — the <b>hole-with-dot</b> sign."],
    ["Drug for adult tapeworms but not hydatid disease", "<b>Praziquantel</b> — poorly active against larval cestodes."],
    ["Surgical principle in hydatid cyst removal", "Remove the parasite completely with <b>minimal spillage</b>."],
    ["Key prevention for <i>Dipylidium caninum</i> in children", "<b>Flea control</b> on pets and in the household."]
  ]);
})();
