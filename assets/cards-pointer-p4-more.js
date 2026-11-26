/* Flashcards — Parasitology pointer topic p4: Sarcocystis (second set) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p4h-", "p4", ["P1", "P2", "P3"], [
    ["What defines a <i>Sarcocystis</i> species pair?", "A narrow <b>definitive–intermediate host</b> pair: humans are definitive for <i>S. hominis</i> (cattle) and <i>S. suihominis</i> (pigs)."],
    ["Intestinal versus muscular sarcocystosis: the key difference?", "Intestinal: raw meat, humans are <b>definitive hosts</b>. Muscular: swallowed sporocysts, humans are <b>dead-end intermediate hosts</b>."],
    ["Why do intact <i>Sarcocystis</i> sarcocysts cause little inflammation?", "Thick, weakly antigenic <b>cyst wall</b>; inflammation follows cyst rupture and bradyzoite release."],
    ["Which stool method and measurement identify <i>Sarcocystis</i> sporocysts?", "<b>Formalin–ethyl acetate concentration</b> or zinc-sulfate flotation; ellipsoid, <b>10–15 µm</b>, four sporozoites."],
    ["Which PCR targets identify <i>Sarcocystis</i> to species level?", "<b>18S rRNA</b> for sensitive detection; <b>cox1</b> and ITS-1 with sequencing for species."],
    ["How is muscular sarcocystosis followed up after diagnosis?", "Baseline <b>CK</b> and eosinophils, then 2 weeks, 1–3 months and 6 months; image only if worsening."],
    ["What temperature and freezing time make pork and beef safe?", "Cook to <b>71 °C</b>; freeze at <b>−20 °C for 24–48 hours</b>. Curing and vinegar do not reliably kill bradyzoites."]
  ]);
})();
