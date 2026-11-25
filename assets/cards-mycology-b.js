/* Flashcards — mycology part B, matched to essays mc13–mc30 */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-mcx-", "mycology", ["S1", "S4"], [
    ["Main structural polysaccharides of the fungal cell wall", "<b>Chitin</b> and <b>β-1,3-glucan</b>, cross-linked and coated with mannoproteins."],
    ["Pattern-recognition receptor that binds fungal β-1,3-glucan", "<b>Dectin-1</b>, signalling through Syk–CARD9 to NF-κB."],
    ["Yeast requiring exogenous lipids that causes pityriasis versicolor", "<b><i>Malassezia</i></b> — lipases release fatty acids and azelaic acid."],
    ["Gene whose mutations cause terbinafine resistance in dermatophytes", "<b><i>SQLE</i></b>, encoding squalene epoxidase."],
    ["Immune defect most associated with chronic mucocutaneous candidiasis", "<b>STAT1 gain-of-function</b>; AIRE defects and IL-17 pathway defects also cause it."],
    ["First-line antifungal for candidaemia", "An <b>echinocandin</b>, with step-down to fluconazole when susceptible and stable."],
    ["Serological test of choice for chronic pulmonary aspergillosis", "<b><i>Aspergillus</i> IgG</b>; galactomannan is insensitive in CPA."],
    ["Agricultural practice that selects azole-resistant <i>A. fumigatus</i>", "Use of <b>azole fungicides</b> (DMIs) on crops, selecting <i>cyp51A</i> mutants."],
    ["CD4 threshold for cryptococcal antigen screening before ART", "<b>CD4 below 100</b> cells/µL, per WHO guidance."],
    ["Mould-active prophylaxis used during high-risk neutropenia", "<b>Posaconazole</b> or voriconazole; fluconazole where mould risk is low."],
    ["Mould with canoe-shaped macroconidia and often-positive blood cultures", "<b><i>Fusarium</i></b> — disseminated disease in neutropenia."],
    ["First-line topical therapy for filamentous fungal keratitis", "<b>Natamycin</b>; topical voriconazole is an alternative or adjunct."],
    ["Histological finding that defines allergic fungal rhinosinusitis", "<b>Allergic mucin with eosinophils</b> and Charcot–Leyden crystals, without invasion."],
    ["Sites that echinocandins penetrate poorly", "The <b>CSF and vitreous humour</b>, so they are unsuitable for meningitis or endophthalmitis."],
    ["Core stewardship action after a susceptible <i>Candida</i> isolate in a stable patient", "De-escalate from an echinocandin to <b>fluconazole</b>."],
    ["Product contaminated in the 2012 US fungal meningitis outbreak", "<b>Methylprednisolone</b> injections containing <i>Exserohilum rostratum</i>."],
    ["Mycotoxin causing liver cancer with hepatitis B synergy", "<b>Aflatoxin B1</b> from <i>Aspergillus flavus</i> in peanuts and maize."],
    ["Candida adhesin used in the experimental vaccine NDV-3", "<b>Als3</b>, a recombinant <i>Candida</i> surface adhesin."]
  ]);
})();
