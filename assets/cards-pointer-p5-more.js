/* Flashcards — Parasitology pointer topic p5: Toxocara, extended set */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p5h-", "p5", ["P1", "P2", "P3"], [
    ["Which <i>Toxocara</i> species infects dogs, and which infects cats?", "<b><i>T. canis</i></b> — dogs; <b><i>T. cati</i></b> — cats. Both are ascarids of the small intestine."],
    ["Three-year-old with pica, hepatomegaly and 4,000 eosinophils/µL: which syndrome?", "<b>Visceral larva migrans</b>; confirm with TES-antigen ELISA and exclude other helminths."],
    ["Aqueous humour antibody in ocular toxocariasis is interpreted with which coefficient?", "The <b>Goldmann–Witmer coefficient</b>, comparing specific antibody in aqueous or vitreous with serum."],
    ["Why can <i>Toxocara</i> serology not be used as a test of cure?", "Antibody persists for <b>years after the larvae die</b>; judge response clinically and by eosinophil count."],
    ["Marked eosinophilia with a negative stool: name three non-helminth causes.", "<b>Drugs</b>, <b>atopy/ABPA</b> and <b>malignancy</b> such as leukaemia or hypereosinophilic syndrome."],
    ["Treatment priority in ocular larva migrans with severe inflammation?", "<b>Corticosteroids</b> first; albendazole is adjunctive, with ophthalmology for laser or vitrectomy."],
    ["Cheapest effective barrier to human toxocariasis in a barangay?", "<b>Cover sandpits and remove dog faeces</b>, plus regular dog deworming — eggs must embryonate in soil."]
  ]);
})();
