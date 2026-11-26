/* Flashcards — Parasitology lab technique, vectors, quality and control (set B) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-lbx-", "para-lab", ["P2", "P3", "P9"], [
    ["Saline versus iodine wet mount: what is the key difference?", "Saline preserves <b>motility</b> for trophozoites; iodine stains <b>glycogen</b> and nuclei but kills them."],
    ["Routine concentration method for a complete O&P examination", "<b>Formalin–ethyl acetate sedimentation</b>; it recovers operculated and heavy eggs."],
    ["Best time to collect blood for W. bancrofti microfilariae", "Between <b>22:00 and 02:00</b>, when <b>nocturnal periodicity</b> peaks."],
    ["Why a positive HRP2 test cannot prove cure", "<b>HRP2 persists</b> for two to four weeks after parasites clear; use pLDH or microscopy."],
    ["Main limitation of PCR as a test of cure", "<b>DNA persists after cure</b>, so PCR cannot establish <b>viability</b>."],
    ["Effect of low prevalence on a positive antibody test", "It lowers the <b>positive predictive value</b>; confirm with immunoblot or direct detection."],
    ["Medium and temperature for Leishmania culture", "<b>NNN medium</b> at <b>22–26 °C</b>; promastigotes grow within a week."],
    ["How to distinguish Anopheles from Culex at rest", "Anopheles rests at an <b>angle</b>; Culex rests <b>parallel</b> to the surface."],
    ["What the Breteau index measures", "Positive containers per <b>100 houses</b> examined."],
    ["Philippine snail host of Schistosoma japonicum", "<b>Oncomelania hupensis quadrasi</b>, an amphibious operculate snail of rice fields."],
    ["Two uses of CDC DPDx in a diagnostic laboratory", "Its <b>image library</b> and <b>telediagnosis</b> service help identify difficult parasites."],
    ["DOH programme that uses DEC plus albendazole MDA", "The <b>National Filariasis Elimination Program</b>, monitored by Transmission Assessment Surveys."],
    ["Malaria-free certification requires how many years without indigenous cases?", "<b>Three consecutive years</b>, plus a functioning surveillance system and national dossier."],
    ["What UN3373 labels", "<b>Category B</b> biological substances, which covers most diagnostic specimens."],
    ["First action on a critical malaria film result", "Phone the clinician, obtain a <b>read-back</b>, and document time and recipient."],
    ["Disinfectant that fails against Cryptosporidium oocysts", "<b>Chlorine</b>; use hydrogen peroxide, heat, UV or ozone instead."],
    ["LAMP amplification temperature", "About <b>60–65 °C</b>; it is <b>isothermal</b> and needs no thermal cycler."],
    ["Verification versus validation of a new parasitology method", "<b>Verification</b> checks a cleared method; <b>validation</b> establishes performance of an in-house method."]
  ]);
})();
