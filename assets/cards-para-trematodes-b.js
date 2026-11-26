/* Parasitology — trematodes, part B flashcards (one per essay pa118–pa135) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-tmx-", "para-trematodes", ["P1", "P2", "P5", "P9"], [
    ["Snail genera of the three main human schistosomes", "<b>Biomphalaria</b> (<i>S. mansoni</i>), <b>Bulinus</b> (<i>S. haematobium</i>), <b>Oncomelania</b> (<i>S. japonicum</i>)."],
    ["Cerebral schistosomiasis is most often caused by", "<b><i>S. japonicum</i></b> — small eggs and high egg output favour brain embolisation."],
    ["Praziquantel use in pregnancy", "Considered <b>safe</b>; WHO supports treating pregnant and lactating women in endemic areas."],
    ["Female genital schistosomiasis and HIV", "Increases <b>HIV acquisition</b> risk by breaching genital mucosa and recruiting CD4 cells."],
    ["Why schistosomiasis persists in the Philippines", "Low MDA coverage, <b>reinfection</b>, animal reservoirs and weak surveillance."],
    ["Best tools for low-intensity schistosome infection", "<b>PCR, CAA or POC-CCA</b>; Kato–Katz misses light infections."],
    ["Drug of choice for fascioliasis", "<b>Triclabendazole</b>; praziquantel is ineffective."],
    ["Mechanism of fluke-related cholangiocarcinoma", "Chronic inflammation, <b>granulin</b>, oxidative DNA damage and dietary nitrosamines."],
    ["Most serious ectopic site of paragonimiasis", "The <b>brain</b> — cerebral paragonimiasis causes seizures and focal deficits."],
    ["Prevention of foodborne trematodiases", "Cook fish, crabs and aquatic plants; improve sanitation; use <b>MDA</b> where endemic."],
    ["Molluscicide used in snail control", "<b>Niclosamide</b>, combined with environmental modification."],
    ["First-line tests for trematode eosinophilia", "Stool O&amp;P, <b>serology</b> and imaging guided by exposure history."],
    ["WHO coverage target for MDA", "At least <b>75%</b> of the at-risk population."],
    ["Spurious Fasciola eggs in stool", "Repeat after a <b>liver-free diet</b>; serology helps confirm true infection."],
    ["Leading schistosome vaccine candidate antigens", "<b>Sm-p80, Sm-TSP-2 and Sm14</b>; SjCTPI is used for <i>S. japonicum</i>."],
    ["First-line imaging for biliary flukes", "<b>Ultrasound</b> — dilatation, periductal thickening and masses."],
    ["Snail host of S. mekongi", "<b>Neotricula aperta</b> in the Mekong River."],
    ["Dam linked to a Senegal River schistosomiasis outbreak", "The <b>Diama Dam</b>."]
  ]);
})();
