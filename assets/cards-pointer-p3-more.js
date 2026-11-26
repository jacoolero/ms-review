/* Flashcards — Parasitology pointer topic p3: Echinostoma, additional cards */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p3h-", "p3", ["P1", "P2", "P4"], [
    ["<i>Echinostoma ilocanum</i> adult: length and collar spine count", "<b>2.5–6.5 mm</b>; <b>49–51 collar spines</b> in a double row with stout corner spines."],
    ["<i>Echinostoma ilocanum</i> egg: size and opercular features", "<b>83–116 × 58–69 µm</b>; small operculum, thin shell, <b>no abopercular knob</b>."],
    ["First versus second intermediate hosts of <i>E. ilocanum</i>", "First: <b><i>Gyraulus</i></b> and <b><i>Indoplanorbis</i></b>. Second: edible <b><i>Pila</i></b> and <b><i>Lymnaea</i></b> snails."],
    ["Philippine prevalence figures for echinostome eggs", "<b>3%</b> of 30,000 stools; <b>11%</b> in Ilocanos; up to <b>44%</b> in some communities."],
    ["Main mechanism of anaemia and oedema in echinostomiasis", "<b>Protein-losing enteropathy</b> with chronic blood loss; low albumin and iron deficiency."],
    ["Kato–Katz template weight and egg-count conversion", "<b>41.7 mg</b> template; eggs per gram = egg count <b>× 24</b>."],
    ["Praziquantel dose for echinostomiasis and its target", "<b>25 mg/kg once</b>; raises tegument <b>calcium permeability</b>, damaging adult flukes."]
  ]);
})();
