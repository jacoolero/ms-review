/* Flashcards — Gram-negative & atypical bacteria, part C (gn31–gn40) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-gnc-", "gneg", ["S31", "S26", "S33"], [
    ["Leptospirosis after Philippine floods: the classic clinical pair", "<b>Conjunctival suffusion</b> and <b>calf myalgia</b> after wading in floodwater; jaundice, kidney injury and bleeding indicate <b>Weil disease</b>."],
    ["Cholera: fluid of choice for severe dehydration", "<b>Ringer's lactate</b> intravenously, then oral rehydration solution, which remains definitive because SGLT1-coupled sodium absorption is preserved."],
    ["XDR typhoid: defining resistance and the remaining options", "Resistance to chloramphenicol, ampicillin, co-trimoxazole, fluoroquinolones and <b>ceftriaxone</b>; treat with <b>azithromycin</b> or a carbapenem guided by susceptibility."],
    ["PSMID sepsis bundle: first-hour priorities", "Measure <b>lactate</b>, take <b>blood cultures before antibiotics</b>, give broad-spectrum therapy and 30 mL/kg crystalloid, then achieve source control."],
    ["Philippine CRE surveillance: two tests that define the enzyme", "<b>mCIM</b> detects carbapenemase activity and <b>eCIM</b> distinguishes metallo-β-lactamases; report results with the hospital <b>antibiogram</b>."],
    ["Drug designed for carbapenem-resistant Acinetobacter baumannii", "<b>Sulbactam–durlobactam</b>; cefiderocol is an alternative, with source control and susceptibility-guided therapy."],
    ["Brucellosis versus tularaemia: shared biosafety level", "Both are <b>facultative intracellular</b> zoonoses handled at <b>BSL-3</b>; brucellosis needs six weeks of doxycycline plus rifampicin."],
    ["Culture-negative endocarditis: treatment for HACEK organisms", "<b>Ceftriaxone</b> for four weeks; take three blood culture sets before antibiotics and incubate for at least five days."],
    ["Gonorrhoea: first-line regimen and key resistance marker", "<b>Ceftriaxone 500 mg IM</b> once; <b>penA mosaic</b> alleles reduce susceptibility, and pharyngeal infection needs test of cure."],
    ["Why β-lactams fail in atypical pneumonia", "<b>Mycoplasma</b> lacks a cell wall and <b>Chlamydia</b>/<b>Legionella</b> are intracellular; use a macrolide, doxycycline or levofloxacin."]
  ]);
})();
