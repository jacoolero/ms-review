/* Flashcards — additional Blastocystis (p8) content: structure, virulence, testing, treatment failure,
   Philippine transmission, microbiome and research gaps. */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p8h-", "p8", ["P1", "P2", "P3", "P8"], [
    ["How is a Blastocystis subtype defined?", "By <b>SSU rRNA</b> sequence identity; at least <b>17 subtypes</b>, with <b>ST1–ST9</b> found in humans."],
    ["Which Blastocystis product is most implicated in barrier damage?", "<b>Cysteine proteases</b>, which degrade secretory IgA and disrupt epithelial <b>tight junctions</b>."],
    ["Why is PCR preferred over microscopy for Blastocystis?", "Higher <b>sensitivity</b> at low parasite loads, and it permits <b>subtyping</b>; microscopy cannot."],
    ["First step when symptoms persist after metronidazole for Blastocystis?", "Re-examine the diagnosis and exclude <b>co-pathogens</b> before repeating or changing the drug."],
    ["Which exposure drives most Blastocystis transmission in the Philippines?", "<b>Faecal contamination of water and food</b>; cysts resist routine <b>chlorination</b>."],
    ["What microbiome pattern is reported in Blastocystis carriers?", "Higher bacterial <b>diversity</b>, often <b>Prevotella</b>-rich; causality is unproven."],
    ["Biggest methodological obstacle in Blastocystis research?", "No <b>animal model</b> or <b>reference standard</b>, plus unsettled subtype–species taxonomy."],
  ]);
})();
