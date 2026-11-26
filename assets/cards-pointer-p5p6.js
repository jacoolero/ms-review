/* Flashcards — pointer gap: Toxocara (p5) and Strongyloides (p6) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p5g-", "p5", ["P1", "P2", "P3"], [
    ["Definitive hosts of <i>Toxocara canis</i> and <i>T. cati</i>", "<b>Dog</b> and <b>cat</b>; adults live in the small intestine."],
    ["Hallmark laboratory finding in visceral larva migrans", "Marked <b>eosinophilia</b>, often &gt; 3,000/µL, with hypergammaglobulinaemia."],
    ["Toxocara eye disease most often mimics which tumour?", "<b>Retinoblastoma</b> — risk of unnecessary enucleation."],
    ["What does a positive Toxocara TES-ELISA prove?", "<b>Exposure only</b> — not active or symptomatic infection."],
    ["Drug regimen for symptomatic visceral larva migrans", "<b>Albendazole</b> 400 mg twice daily for 5 days; steroids if severe."]
  ]);

  add("fc-p6g-", "p6", ["P1", "P2", "P3"], [
    ["Define <i>Strongyloides</i> hyperinfection", "Accelerated <b>autoinfection</b> with heavy larval migration through gut and lungs."],
    ["Agar plate culture identifies <i>Strongyloides</i> larvae by what sign?", "<b>Bacterial tracks</b> left on the agar surface."],
    ["Drug of choice for uncomplicated strongyloidiasis", "<b>Ivermectin</b> 200 µg/kg daily for 2 days."],
    ["Why is HTLV-1 a risk factor for disseminated strongyloidiasis?", "It suppresses <b>Th2/eosinophil</b> responses, allowing uncontrolled larval replication."]
  ]);
})();
