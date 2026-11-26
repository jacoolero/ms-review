/* Flashcards — pointer topics: Echinococcus (p2) and Echinostoma (p3) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p2g-", "p2", ["P1", "P3", "P6"], [
    ["WHO-IWGE stage: unilocular cyst with double wall, no daughter cysts", "<b>CE1</b> — active; PAIR plus albendazole if suitable."],
    ["CE2 versus CE3b on ultrasound", "CE2 = daughter cysts in <b>fluid</b>; CE3b = daughter cysts in <b>solid matrix</b>."]
  ]);

  add("fc-p3g-", "p3", ["P1", "P2", "P4"], [
    ["First intermediate hosts of <i>Echinostoma ilocanum</i>", "<b><i>Gyraulus convexiusculus</i></b> and <b><i>Indoplanorbis exustus</i></b>; cercariae encyst in <i>Pila</i>."],
    ["Philippine raw-snail dish that transmits echinostomiasis", "<b>Kinilaw</b> of kuhol (<i>Pila luzonica</i>), with coconut milk and lime."],
    ["Where adult <i>Echinostoma ilocanum</i> lives and attaches", "<b>Small intestine</b>; collar spines and ventral sucker cause erosive enteritis."],
    ["<i>Echinostoma ilocanum</i> egg: size and key feature", "<b>83–116 × 58–69 µm</b>, operculated, thin shell, <b>no abopercular knob</b>."],
    ["Drug and dose for echinostomiasis", "<b>Praziquantel 25 mg/kg</b> once; niclosamide is an alternative."],
    ["<i>Echinostoma</i> versus <i>Fasciolopsis</i>: second intermediate host", "<i>Echinostoma</i> uses <b>snails</b>; <i>Fasciolopsis</i> uses <b>aquatic plants</b>."]
  ]);
})();
