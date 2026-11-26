/* Flashcards — Immunohematology: donors & components, part B */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-dnx-", "ih-donor", ["B1", "B8"], [
    ["What does the signal-to-cut-off ratio in a donor screen indicate?", "How strongly a sample reacts relative to the assay threshold; a ratio at or above it makes the sample <b>initially reactive</b> and requires repeat testing."],
    ["Which hepatitis B marker best detects occult infection in donors?", "<b>Anti-HBc</b>, together with HBV DNA; HBsAg can be negative when the viral load is very low."],
    ["Why is minipool NAT less sensitive than individual-donation NAT?", "<b>Dilution</b> of a low-level viraemic sample within the pool, which matters most for early HCV and low-level HBV."],
    ["Why is syphilis still screened in blood donors?", "It is a <b>surrogate marker</b> for sexual risk behaviour; the spirochete survives poorly in refrigerated blood, so transfusion transmission is uncommon."],
    ["Which infection drives donor deferral in Palawan and parts of Mindanao?", "<b>Malaria</b> — donors with fever, recent infection or residence in an endemic area are deferred for a defined period."],
    ["Which cells carry HTLV and CMV respectively in a blood component?", "HTLV is carried by <b>T lymphocytes</b>; CMV is latent in <b>monocytes</b> and other myeloid cells."],
    ["How is a donor unit with weak D expression labelled?", "<b>D-positive</b>, because the red cells could immunise a D-negative recipient."],
    ["What is the purpose of the diversion pouch?", "It discards the first 20–40 mL of blood containing the <b>skin plug</b>, reducing bacterial contamination of the unit."],
    ["How long may washed red cells be used after an open-system wash?", "<b>24 hours</b> at 1–6 °C, because the system is no longer closed."],
    ["Which reaction is associated with bedside leucocyte filters in patients on ACE inhibitors?", "<b>Hypotension</b>, related to bradykinin accumulation during filtration."],
    ["Why should irradiated red cells for a neonate be used within 24 hours?", "Irradiation accelerates <b>potassium</b> leakage from the red cells, raising the risk of hyperkalaemia."],
    ["How long may a red cell unit stay out of controlled storage before transfusion?", "<b>30 minutes</b>; after that it cannot return to stock, and the infusion must finish within 4 hours."],
    ["What plasma is used as feedstock for fractionation?", "<b>Recovered plasma</b> frozen within 24 hours, or <b>source plasma</b> collected by apheresis."],
    ["Which test can detect bacteria in a platelet unit at the point of issue?", "Rapid bacterial <b>antigen or nucleic acid testing</b>; culture of the unit remains the mainstay of prevention."],
    ["What proportion of blood does WHO aim to come from voluntary donors?", "<b>100%</b> voluntary non-remunerated donation."],
    ["What is a near miss in haemovigilance?", "An error <b>intercepted before harm</b> reached the patient — the richest source of system learning."],
    ["What did randomised trials of convalescent plasma in hospitalised COVID-19 show?", "<b>No mortality benefit</b>; a modest effect was suggested only with early, high-titre plasma in outpatients."],
    ["Why can an uncontrolled donor appeal after a disaster reduce the usable blood supply?", "It overwhelms staff and storage and leads to <b>wastage</b> when units expire before they are needed."]
  ]);
})();
