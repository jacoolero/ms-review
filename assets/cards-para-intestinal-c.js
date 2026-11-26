/* Flashcards — intestinal/urogenital protozoa, part C: Philippine practice and advanced topics */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-inc-", "para-intestinal", ["P2", "P3", "P4", "P13", "P14"], [
    ["Why Philippine amoebiasis and giardiasis prevalence estimates differ so widely", "Method drives the number: <b>sampling frame</b>, <b>three concentrated specimens</b>, antigen or PCR, and whether amoebae were reported as <i>E. histolytica/E. dispar</i>."],
    ["Stain that detects Cryptosporidium oocysts in HIV diarrhoea", "<b>Modified acid-fast</b> stain (also DFA or PCR). <b>Co-trimoxazole does not cover</b> it; <b>ART</b> is the definitive treatment."],
    ["Capillaria philippinensis: mechanism that makes infection progressive", "<b>Autoinfection</b> by larviparous females after eating <b>raw small fish</b>; causes protein-losing enteropathy and <b>hypokalaemia</b>."],
    ["How should a Philippine laboratory report Blastocystis?", "Report <b>semiquantitatively</b>, state that significance is uncertain, look for co-infection; treat only symptomatic patients."],
    ["Parasitology method often missing from primary Philippine laboratories", "A <b>permanent stain</b> and <b>modified acid-fast</b> stain; refer coccidia to <b>RITM</b> or a regional reference laboratory."],
    ["Reporting convention when only microscopy identifies intestinal amoebae", "Report as <b><i>E. histolytica</i>/<i>E. dispar</i></b>; add stool antigen or PCR before treating."],
    ["Why Cyclospora is rarely spread directly between people", "Oocysts are passed <b>unsporulated</b> and need about <b>one to two weeks</b> to become infective."],
    ["When can Cystoisospora maintenance prophylaxis stop in HIV?", "After sustained <b>CD4 &gt; 200 cells/µL</b> for at least <b>six months</b> on ART; restart if CD4 falls."],
    ["Nucleus that identifies the Balantidium coli trophozoite", "The kidney-shaped <b>macronucleus</b>; ciliated, 50–200 µm, pig reservoir, treated with <b>tetracycline</b>."],
    ["First step when trichomoniasis persists after metronidazole", "Exclude <b>reinfection</b> and treat partners; confirm with <b>NAAT</b>, then use higher-dose tinidazole."]
  ]);
})();
