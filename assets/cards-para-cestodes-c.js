/* Flashcards — cestodes, part C (fc-csc-1 to fc-csc-10) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-csc-", "para-cestodes", ["P4", "P13", "P9"], [
    ["Most specific serological test for neurocysticercosis", "<b>EITB</b> with lentil-lectin purified glycoprotein antigens; negative in many single or calcified lesions."],
    ["Best-validated veterinary tools against porcine cysticercosis", "<b>TSOL18</b> vaccine plus <b>oxfendazole</b> treatment of pigs."],
    ["Why does <i>H. nana</i> persist after mass albendazole deworming?", "Single-dose <b>albendazole</b> has poor efficacy; it needs <b>praziquantel</b> and a repeat dose."],
    ["Freezing that kills <i>Diphyllobothrium</i> plerocercoids in fish", "<b>−20 °C for 7 days</b>; cold smoking and marinating do not."],
    ["Philippine law that governs meat inspection", "<b>RA 9296</b>, as amended by <b>RA 10536</b>; enforced through NMIS and LGUs."],
    ["Why is cystic echinococcosis uncommon in the Philippines?", "No established <b>dog–sheep cycle</b>; most cases are <b>imported</b> by OFWs and travellers."],
    ["Definitive host and lesion of <i>E. multilocularis</i>", "<b>Red fox</b>; an <b>infiltrative</b> multivesicular liver mass."],
    ["Tapeworm acquired from raw frog, snake or poultice", "<b><i>Spirometra</i></b> — its plerocercoid causes sparganosis."],
    ["Which cestode is acquired by swallowing an infected flea?", "<b><i>Dipylidium caninum</i></b>; infected <i>Ctenocephalides</i> fleas are swallowed, especially by children."],
    ["Why prefer niclosamide for taeniasis when neurocysticercosis may exist?", "It is <b>not absorbed</b> and does not provoke inflammation around brain cysts."]
  ]);
})();
