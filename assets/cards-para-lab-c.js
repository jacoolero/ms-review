/* Flashcards — Parasitology Philippine laboratory network, quality and applied diagnostics (set C) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-lbc-", "para-lab", ["P2", "P3", "P13", "P9"], [
    ["Which DOH institute is the national reference laboratory for parasitology?", "<b>RITM</b> — Research Institute for Tropical Medicine, Muntinlupa."],
    ["Usual referral path for a stool specimen collected at a barangay health station", "BHS to <b>rural health unit</b>, then hospital or reference laboratory; not direct unless the programme allows."],
    ["DOH programme test that measures schistosomiasis intensity", "<b>Kato-Katz</b> stool examination; report <b>eggs per gram</b> and intensity category."],
    ["Philippine order that governs clinical laboratory licensing", "<b>DOH AO 2021-0037</b>; RA 4688 is the governing law."],
    ["Best dengue test in the first five days of illness", "<b>NS1 antigen</b>; IgM and IgG become useful after day 5."],
    ["Thick-film malaria parasite density formula", "(parasites ÷ <b>200 WBC</b>) × WBC count; assume <b>8,000/µL</b> if unknown."],
    ["Stain that gives the sharpest nuclear detail in amoebae", "<b>Iron haematoxylin</b>; trichrome is the routine permanent stain."],
    ["Kato-Katz eggs-per-gram multiplier", "<b>× 24</b> for a 41.7 mg template; read hookworm eggs within 30–60 minutes."],
    ["LAMP enzyme and amplification temperature", "<b>Bst polymerase</b> at about <b>60–65 °C</b>; read turbidity or fluorescence."],
    ["Parasite eggs that are infective to laboratory staff", "<b><i>Taenia solium</i></b> and <b><i>Echinococcus</i></b>; handle stool and dog faeces at BSL-2 with care."]
  ]);
})();

