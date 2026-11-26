/* Flashcards — additional Echinococcus cards (p2h1–p2h5) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p2h-", "p2", ["P1", "P2", "P3"], [
    ["Hydatid serology: what does a positive ELISA actually prove?", "Exposure, not viability. Confirm with imaging and <b>immunoblot</b>; titres can persist for years after cure."],
    ["Scolicidal agent avoided when a hydatid cyst communicates with bile", "Do not inject <b>95% ethanol</b> — it can cause sclerosing cholangitis. If fluid is bile-stained, stop and manage the fistula."],
    ["Albendazole monitoring: which two tests drive dose interruption?", "<b>CBC</b> for leucopenia and <b>liver enzymes</b> for hepatotoxicity; check two-weekly early, then monthly."],
    ["First drug and dose in hydatid cyst rupture with anaphylaxis", "<b>Intramuscular adrenaline 0.5 mg</b> (0.01 mg/kg in children), repeated after 5 minutes if needed."],
    ["How long should imaging follow-up continue after hydatid treatment?", "At 1, 3, 6 and 12 months, then yearly for at least <b>5–10 years</b>."]
  ]);
})();
