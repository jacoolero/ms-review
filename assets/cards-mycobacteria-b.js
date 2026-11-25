/* Flashcards — mycobacteria, part B (one card per essay my13–my30) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-myx-", "mycobacteria", ["S1", "S4", "S6", "S11"], [
    ["How many TB cases were missed globally in 2024?", "About <b>2.4 million</b>; WHO estimated <b>10.7 million</b> incident cases and <b>1.23 million</b> deaths."],
    ["Why is sputum smear often negative in childhood TB?", "Children usually have <b>paucibacillary</b> disease; use induced sputum or gastric aspirate with <b>Xpert Ultra</b> and culture."],
    ["Typical CSF glucose and protein in TB meningitis?", "<b>Low glucose and high protein</b> with a lymphocyte-predominant pleocytosis; send <b>Xpert Ultra</b> on large-volume CSF."],
    ["Pericardial fluid finding that supports TB pericarditis?", "A <b>lymphocytic exudate with high ADA</b>; Xpert and culture are insensitive, so <b>pericardial biopsy</b> may be needed."],
    ["Which anti-TB drug is avoided in pregnancy and why?", "<b>Streptomycin</b> — risk of fetal <b>ototoxicity</b>; HRZE is standard and pyridoxine is given with isoniazid."],
    ["Rifampicin and dolutegravir — what adjustment is needed?", "Give <b>dolutegravir twice daily</b> with rifampicin because rifampicin induces <b>CYP3A4</b> and lowers drug levels."],
    ["Which first-line anti-TB drug is most hepatotoxic?", "<b>Pyrazinamide</b>; isoniazid and rifampicin also cause injury, so stop and exclude other causes."],
    ["When is anti-TB therapeutic drug monitoring most useful?", "In <b>malabsorption, treatment failure, HIV or diabetes</b> and drug interactions; it is targeted, not routine."],
    ["What does WGS add to TB outbreak investigation?", "It uses <b>core-genome SNP distance</b> to distinguish recent transmission from reactivation and to link cases."],
    ["Which gene mediates pyrazinamide resistance?", "<b>pncA</b> loss of pyrazinamidase activity; this is a common cause of pyrazinamide resistance."],
    ["Commonest BCG complication and how is it managed?", "<b>Regional lymphadenitis</b>; aspirate rather than incise, and reserve antimycobacterial drugs for extensive or disseminated disease."],
    ["Classic fundoscopic finding in miliary TB?", "<b>Choroidal tubercles</b>; examine the fundus when disseminated TB is suspected."],
    ["Why does poor glycaemic control worsen TB outcomes?", "It predicts <b>delayed sputum conversion, relapse and mortality</b>; rifampicin also lowers sulfonylurea effect."],
    ["Microbiological criterion for NTM pulmonary disease?", "<b>Two positive sputum cultures</b>, or one BAL/tissue culture, plus compatible symptoms and imaging."],
    ["Why is M. abscessus resistant to macrolides?", "Inducible <b>erm(41)</b> methylase and low cell-wall permeability; also check for <b>rrl</b> mutations after exposure."],
    ["Name the three forms of TB stigma.", "<b>Enacted</b> (discrimination), <b>anticipated</b> (fear of disclosure) and <b>internalised</b> (shame)."],
    ["Which immune pathway is defective in MSMD?", "The <b>IL-12/IFN-γ axis</b>; suspect it in disseminated BCG or recurrent NTM disease."],
    ["Which anti-TB drugs accumulate in renal failure?", "<b>Ethambutol and pyrazinamide</b>; isoniazid and rifampicin are hepatically cleared."]
  ]);
})();
