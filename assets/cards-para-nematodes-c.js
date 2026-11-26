/* Flashcards — nematodes, part C */
(() => {
  const add = (prefix, domain, pairs) => pairs.forEach(([front, back, sources], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-nmc-", "para-nematodes", [
    ["Philippine STH MDA: who is targeted and how often?", "Preschool and school-age children; <b>albendazole</b> yearly, twice if prevalence exceeds 50%.", ["P9", "P13", "P14"]],
    ["Drug package for Philippine lymphatic filariasis MDA?", "<b>DEC plus albendazole</b> yearly; ivermectin where onchocerciasis is co-endemic.", ["P9", "P13", "P14"]],
    ["Best screening test for Strongyloides before steroids?", "<b>NIE ELISA</b>, plus agar plate culture or Baermann concentration.", ["P9", "P13", "P1", "P3"]],
    ["How does hookworm harm Filipino school children?", "Chronic blood loss causes <b>iron-deficiency anaemia</b>, fatigue and poor concentration.", ["P9", "P13", "P14", "P4"]],
    ["Why is Capillaria philippinensis treatment prolonged?", "<b>Autoinfection</b> from larviparous females; give albendazole for 10 days.", ["P10", "P4", "P3"]],
    ["Why does pinworm reinfection persist after treatment?", "Eggs become infective <b>within hours</b>; treat contacts and repeat the dose at 2 weeks.", ["P1", "P2", "P3"]],
    ["Which Trichinella species resists household freezing?", "<b><i>T. nativa</i></b>; ordinary −20 °C freezing does not kill it.", ["P1", "P2", "P3"]],
    ["Confirming visceral larva migrans: which serological assay?", "<b>TES-antigen ELISA</b>; a Western blot improves specificity.", ["P1", "P2", "P3"]],
    ["Anisakis allergen that survives cooking?", "<b>Ani s 1</b>, a heat-stable protease inhibitor.", ["P1", "P2", "P3"]],
    ["Loa loa level that makes ivermectin unsafe?", "Above <b>30,000 microfilariae/mL</b> — risk of encephalopathy.", ["P1", "P2", "P6"]]
  ]);
})();
