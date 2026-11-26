/* Flashcards — intestinal/urogenital protozoa, part B (applied and laboratory topics) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-inx-", "para-intestinal", ["P2", "P3"], [
    ["Best fresh-stool clue to amoebic colitis", "Trophozoites with <b>ingested red blood cells</b>; antigen or PCR separates <i>E. histolytica</i> from <i>E. dispar</i>."],
    ["Why invasion is uncommon in <i>E. histolytica</i> infection", "Most infections are <b>asymptomatic carriage</b>; virulence depends on the Gal/GalNAc lectin, proteinases and amoebapores."],
    ["Single right-lobe liver abscess with sterile anchovy-sauce pus", "<b>Amoebic liver abscess</b>; amoebic serology is usually positive."],
    ["Giardia cyst property that defeats routine chlorination", "The cyst is <b>chlorine-resistant</b>; use filtration, UV or boiling."],
    ["Cryptosporidium oocyst property that drives water outbreaks", "Thick-walled oocysts are <b>immediately infective</b> and survive usual chlorine doses."],
    ["Cyclospora oocyst: key UV and acid-fast features", "It <b>autofluoresces</b> blue-green under UV and stains variably with modified acid-fast."],
    ["Protozoan diarrhoea with peripheral eosinophilia", "<b><i>Cystoisospora belli</i></b>; eosinophilia is an unusual protozoal clue."],
    ["Blastocystis subtype most often found in humans", "<b>ST3</b> is common, but subtype alone does not separate disease from carriage."],
    ["Commensal amoeba with eight nuclei in the mature cyst", "<b><i>Entamoeba coli</i></b>; report it as a marker of faecal contamination, not a pathogen."],
    ["<i>Balantidium coli</i> reservoir in Philippine pig-raising communities", "<b>Pigs</b>; cysts contaminate water and cause balantidial dysentery."],
    ["<i>Trichomonas vaginalis</i> test of choice in pregnancy", "<b>NAAT</b>; wet mount sensitivity is only about 50–60%."],
    ["Microsporidia stain showing pink spores with a belt stripe", "<b>Modified trichrome (Weber)</b>; calcofluor white and PCR support the diagnosis."],
    ["Why stool is collected on alternate days for O&P", "<b>Intermittent shedding</b>; three specimens within 10 days improve detection."],
    ["Acid-fast decolouriser used for coccidian oocysts", "Weak <b>1% sulfuric acid</b>; strong acid-alcohol destains them."],
    ["Antigen test result indicating current intestinal amoebiasis", "A positive <b>stool antigen</b> test; serology mainly reflects past or invasive disease."],
    ["Main protozoal exceptions to the rule that protozoa do not cause eosinophilia", "<b><i>Cystoisospora</i></b> and <b><i>Dientamoeba</i></b>; helminths remain the usual cause."],
    ["CD4 threshold for severe Cryptosporidium diarrhoea in HIV", "<b>&lt;100 cells/µL</b>; ART is the key intervention, with nitazoxanide support."],
    ["Philippine reference laboratory for parasitology and malaria", "<b>RITM</b>; it supports microscopy quality assurance and outbreak investigation."]
  ]);
})();
