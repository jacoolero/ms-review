/* Flashcards — diagnostics, IPC & emerging infections, part C (d31–d40) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources: sources[i] }));

  add("fc-dgc-", "diagnostics", [
    ["C13", "S33"],
    ["S31", "S33"],
    ["C18", "S33"],
    ["S33", "S31"],
    ["S31", "S12"],
    ["S12", "S21"],
    ["S12", "S20"],
    ["S12", "S13"],
    ["S12", "S13"],
    ["S13", "S6"]
  ], [
    ["What does DOH AO 2021-0037 require of a clinical laboratory?", "A <b>license to operate</b> from the DOH after inspection of personnel, facilities, equipment, quality assurance and biosafety; it is the legal minimum, while ISO 15189 accreditation and the DOH LQMS go further."],
    ["What is RITM's role in the Philippine laboratory network?", "It is the DOH <b>national reference laboratory</b> for priority infectious diseases, providing confirmatory testing, EQA, training and outbreak support to regional and sentinel laboratories."],
    ["How does PhilHealth usually pay for laboratory tests?", "Mainly through <b>case-based payments bundled into case rates</b>, not fee-for-service, so laboratory costs must be included in package costing and claims documentation."],
    ["What does RA 11332 require of a clinical laboratory?", "<b>Mandatory reporting</b> of notifiable diseases and health events to the DOH or local health authority, with confidentiality, non-discrimination and penalties for concealment."],
    ["Which TB laboratory activities need BSL-3 containment?", "<b>Culture and drug-susceptibility testing</b> of <i>M. tuberculosis</i> are aerosol-generating and require BSL-3 or an equivalent risk-assessed engineering setup."],
    ["How is an autoclave cycle validated and monitored?", "Use <b>physical parameters, chemical indicators and biological indicators</b>, plus empty-chamber heat distribution and loaded-chamber penetration testing; a failed biological indicator quarantines the load."],
    ["Target blood culture contamination rate for a hospital programme", "<b>Below 3%</b>; monitor by collector and unit, and pair the target with adequate volume and two to three sets per episode."],
    ["Main limitation of a molecular syndromic panel", "It detects <b>nucleic acid, not viability or susceptibility</b>, so carriage may be found and an isolate is still needed for AST and typing."],
    ["When is metagenomic next-generation sequencing most useful?", "For <b>culture-negative, unusual or polymicrobial infection</b> after routine testing, not as a first-line test; interpretation needs clinical context and confirmation."],
    ["What does WGS add to a TB outbreak investigation?", "High-resolution <b>SNP clustering</b> plus <b>resistance prediction</b>, which can confirm or refute transmission links suggested by epidemiology alone."]
  ]);
})();
