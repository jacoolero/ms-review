/* Flashcards — blood & tissue protozoa, set C */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-blc-", "para-blood", ["P1", "P2", "P3", "P7", "P9", "P13", "P14"], [
    ["What must be documented before malaria elimination is verified", "Sustained <b>interruption of local transmission</b> plus surveillance able to detect resurgence — not just low case counts."],
    ["Philippine malaria: falciparum versus vivax treatment difference", "Vivax needs <b>radical cure</b> with primaquine or tafenoquine after G6PD testing; falciparum does not."],
    ["First-line parenteral drug for severe falciparum malaria", "<b>Intravenous artesunate</b>; rectal artesunate is only pre-referral bridging."],
    ["Why an HRP2 rapid test cannot confirm cure", "<b>Antigen persists for weeks</b> after parasites clear; use microscopy or pLDH, then complete the ACT course."],
    ["Lymphatic filariasis intervention that treats lymphoedema and hydrocele", "<b>MMDP</b> — morbidity management and disability prevention, alongside MDA."],
    ["Congenital toxoplasmosis risk rises with which factor", "<b>Gestational age</b> at maternal infection — later infection transmits more often but causes milder disease."],
    ["Babesia tetrad seen on a thin blood film", "The <b>Maltese cross</b>; Babesia also lacks pigment and has extracellular forms."],
    ["PKDL matters in visceral leishmaniasis elimination because", "Skin lesions harbour <b>L. donovani</b> and infect sandflies, forming a silent reservoir."],
    ["CSF finding that defines stage 2 sleeping sickness", "Trypanosomes in CSF or a raised <b>CSF white cell count</b>."],
    ["Romaña's sign belongs to which infection", "<b>Acute Chagas disease</b> — unilateral eyelid oedema at the entry site."]
  ]);
})();
