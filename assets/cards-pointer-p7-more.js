/* Flashcards — pointer gaps: Taenia (p7) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p7h-", "p7", ["P1", "P2", "P3"], [
    ["Testes and ovary that identify Taenia solium", "<b>150–200 testes</b> and a <b>three-lobed ovary</b>; <i>T. saginata</i> has <b>300–400 testes</b> and a two-lobed ovary."],
    ["What must be excluded before cysticidal therapy for neurocysticercosis?", "<b>Ocular cysticercosis</b> by fundoscopy, and latent <b>strongyloidiasis</b> before starting corticosteroids."],
    ["How is cure of taeniasis confirmed after treatment?", "<b>Sieving stool</b> for the scolex and eggs; <b>coproantigen ELISA</b> becomes negative within days."],
  ]);
})();
