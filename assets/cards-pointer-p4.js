/* Flashcards — Parasitology pointer topic p4: Sarcocystis */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p4g-", "p4", ["P1", "P2", "P3"], [
    ["<i>Sarcocystis</i> life cycle: which stage in which host?", "Intermediate host: <b>sarcocysts</b> in muscle. Definitive host: <b>sporocysts</b> in faeces."],
    ["Human intestinal sarcocystosis: species and meat source", "<b><i>S. hominis</i></b> — beef; <b><i>S. suihominis</i></b> — pork. Humans are definitive hosts."],
    ["Human muscular sarcocystosis: species and definitive host", "<b><i>S. nesbitti</i></b>; snakes (pythons) are definitive, humans accidental intermediate hosts."],
    ["Why intact <i>Sarcocystis</i> cysts escape immune attack", "Little inflammation; rupture releases bradyzoites and triggers <b>eosinophilic myositis</b>."],
    ["Best tissue sample for muscular sarcocystosis", "<b>Muscle biopsy</b> at an MRI-abnormal site, with <b>PCR</b> of 18S rRNA."],
    ["Proven antiparasitic treatment for muscular sarcocystosis", "<b>None</b>; supportive care, NSAIDs, corticosteroids for severe myositis."],
    ["Freezing condition that kills <i>Sarcocystis</i> bradyzoites", "<b>−20 °C for 24–48 hours</b>; cooking to <b>≥71 °C</b> also works."],
    ["Largest recorded muscular sarcocystosis outbreak", "<b>Tioman Island, Malaysia</b> (2011–2012), caused by <i>S. nesbitti</i>."]
  ]);
})();
