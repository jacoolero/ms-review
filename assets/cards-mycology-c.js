/* Flashcards — mycology part C, matched to essays mc31–mc40 */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-mcc-", "mycology", ["S31", "S26", "S33", "S18"], [
    ["Why is <i>C. auris</i> as much an infection-control problem as a treatment problem?", "It colonises skin for months, survives on dry surfaces and spreads on hands and shared equipment. Outbreaks therefore outrun the limited drug options."],
    ["Classic metabolic trigger for rhino-orbital-cerebral mucormycosis", "<b>Diabetic ketoacidosis</b> — acidosis releases free iron that Mucorales use for angioinvasion. Urgent debridement plus high-dose liposomal amphotericin B is the priority."],
    ["Preferred induction regimen for cryptococcal meningitis", "<b>Liposomal amphotericin B plus flucytosine</b>, with fluconazole, for two weeks. Raised intracranial pressure needs repeated therapeutic lumbar punctures."],
    ["Two access barriers that weaken antifungal stewardship in the Philippines", "Out-of-pocket costs and unreliable supply of liposomal amphotericin B, flucytosine and mould-active azoles. Procurement and a national essential-medicines list are part of the fix."],
    ["How do steroid–antifungal combination creams worsen tinea corporis?", "They suppress inflammation, producing <b>tinea incognito</b> that spreads and mimics eczema. Stop the steroid and give adequate oral therapy."],
    ["How quickly does mould grow on flood-damaged building materials?", "Within <b>24–48 hours</b>. Dry structures rapidly, discard porous materials and wear an N95 respirator during cleanup."],
    ["Why is serum galactomannan less sensitive in non-neutropenic invasive aspergillosis?", "Angioinvasion and circulating antigen are lower than in prolonged neutropenia. <b>BAL galactomannan</b>, culture and PCR are more reliable."],
    ["Pharmacodynamic index that best predicts azole efficacy", "<b>AUC/MIC</b>. Exposure inside the mutant selection window selects <i>ERG11</i> and <i>cyp51A</i> mutants."],
    ["Best fungal rule-out biomarker, and its main limitation", "<b>β-D-glucan</b> has good negative predictive value but many false positives, including dialysis, IVIG, albumin and surgical gauze. It is negative in mucormycosis and cryptococcosis."],
    ["First descriptive steps of a hospital fungal outbreak investigation", "Define a case by organism, place and time, build a <b>line list</b> and plot an epidemic curve. Then compare exposures and type the isolates."]
  ]);
})();
