/* Flashcards — pretransfusion testing, part B */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-bpx-", "ih-testing", ["B1", "B2", "B5"], [
    ["Most important preanalytical cause of an ABO-incompatible transfusion", "A <b>wrong blood in tube</b> — a sample drawn from one patient and labelled as another."],
    ["ABO typing: which two results must agree before reporting?", "<b>Forward (cell) and reverse (serum) grouping</b>; reverse grouping is invalid under 4–6 months of age."],
    ["How do you phenotype a recently transfused patient?", "Use <b>genotyping</b>; donor cells cause a mixed field and a falsely positive phenotype."],
    ["Minimum number of reagent cells for a routine antibody screen", "<b>Two</b> group O cells, though three are often used; include homozygous cells for dosage antigens."],
    ["Donors to screen for antigen-negative units", "Units needed ÷ <b>frequency of antigen-negative donors</b>."],
    ["Validation stages for an automated immunohaematology analyser", "<b>IQ/OQ/PQ</b> plus parallel testing against the current method and a validated LIS interface."],
    ["Immediate spin versus AHG crossmatch", "IS detects <b>IgM</b> and ABO incompatibility; AHG detects clinically significant <b>IgG</b>."],
    ["Emergency release red cells for a woman of childbearing potential", "<b>Group O, D-negative</b>; use group O D-positive only when D-negative stock is exhausted."],
    ["DAT pattern of cold agglutinin disease", "<b>C3d only</b>; warm AIHA is usually IgG."],
    ["PEG enhancement medium: mechanism and main drawback", "Removes <b>water of hydration</b>, concentrating antibody; very sensitive but prone to false positives."],
    ["Chemical treatment that destroys Kell antigens", "<b>DTT</b> (and ZZAP); anti-K cannot be excluded, so give K-negative units."],
    ["How long is a pretransfusion sample valid?", "Usually <b>72 hours</b>; shorten to <b>24 hours</b> if the patient was transfused or pregnant within the previous 3 months."],
    ["Titre change that is significant when samples are run in parallel", "A rise of <b>two dilutions (fourfold)</b>."],
    ["When is autologous adsorption invalid?", "When the patient has been <b>transfused within 3 months</b>; use differential adsorption instead."],
    ["Purpose of check cells in a negative AHG test", "They prove <b>AHG was active</b> and not neutralised; no agglutination invalidates the test."],
    ["Retention of the recipient sample after transfusion", "At least <b>7 days after transfusion</b>, so a reaction can be investigated."],
    ["Remote release by electronic crossmatch requires…", "<b>Two ABO determinations</b>, a negative screen, no antibody history and a validated LIS."],
    ["Why can the antibody screen be falsely negative after massive transfusion?", "Patient plasma is <b>diluted by donor plasma</b>; test the pretransfusion sample."]
  ]);
})();
