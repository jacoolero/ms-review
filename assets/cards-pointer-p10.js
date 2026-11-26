/* Flashcards — Parasitology pointer gap p10: history and advances in diagnosis */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p10g-", "p10", ["P1", "P2", "P3", "P4", "P8", "P11"], [
    ["Who first saw the animalcules that began parasitology?", "<b>Antonie van Leeuwenhoek</b> in 1674; his 1681 stool sample probably showed <b><i>Giardia</i></b>."],
    ["Which Philippine parasitology textbook is the standard local reference?", "<b>Belizario and de Leon</b>, <i>Philippine Textbook of Medical Parasitology</i>."],
    ["Which 1954 thick-smear method made helminth egg counts quantitative?", "<b>Kato-Katz</b>; Kato's template with Katz's modification gives <b>eggs per gram</b>."],
    ["What did Köhler illumination change in parasite microscopy?", "It gave an <b>even, glare-free field</b> with controlled condenser and iris settings."],
    ["Which malaria rapid-test antigen is lost in pfhrp2/3-deleted parasites?", "<b>HRP2</b>; use <b>pLDH</b> or microscopy when deletion is suspected."],
    ["What must precede clinical use of an AI parasite-detection model?", "<b>Local validation</b> across stains and densities, plus documented <b>human review</b>."]
  ]);
})();
