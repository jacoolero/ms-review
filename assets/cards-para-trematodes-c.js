/* Parasitology — trematodes, part C flashcards (one per essay pa202–pa211) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-tmc-", "para-trematodes", ["P5", "P9", "P13", "P14", "P4"], [
    ["Snail host sustaining S. japonicum in Samar and Leyte", "<b><i>Oncomelania hupensis quadrasi</i></b> — amphibious, rice-field and creek banks."],
    ["First Philippine schistosomiasis elimination goal", "<b>Elimination as a public health problem</b>, then interruption of transmission."],
    ["Why human treatment alone cannot eliminate S. japonicum", "The <b>carabao</b> and other animals are a zoonotic reservoir."],
    ["Praziquantel coverage target for Philippine MDA", "At least <b>75%</b> of the at-risk population."],
    ["Vegetable classically linked to fascioliasis in the Philippines", "<b>Kangkong</b> (water spinach), also watercress."],
    ["Crab exposure classically linked to paragonimiasis", "Raw or undercooked <b>freshwater crabs</b>."],
    ["Egg spine: S. mansoni vs S. haematobium", "<b>Lateral</b> spine vs <b>terminal</b> spine."],
    ["Timing of Katayama fever after exposure", "<b>2–8 weeks</b>; eggs are usually absent."],
    ["Liver flukes acquired from raw cyprinid fish", "<b><i>Clonorchis sinensis</i></b> and <b><i>Opisthorchis viverrini</i></b>."],
    ["Largest human fluke and its main vehicle", "<b><i>Fasciolopsis buski</i></b> — aquatic plants; pigs are the reservoir."]
  ]);
})();
