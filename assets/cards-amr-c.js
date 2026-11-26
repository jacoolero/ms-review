/* Flashcards — AMR part C, matched one-to-one with essays a31–a40 */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back, cardSources], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources: cardSources || sources }));

  add("fc-amc-", "amr", ["S31", "S33", "S14", "S23"], [
    ["Four pillars of the Philippine Action Plan on AMR?", "Awareness, surveillance and research, infection prevention and control, optimal use, and sustainable investment — delivered through a One Health inter-agency programme.", ["S31", "S33", "S14", "S23"]],
    ["Why do Filipinos self-medicate with antibiotics?", "Antibiotics are sold informally, consultations and laboratories cost money, and symptoms are treated before diagnosis; leftover and shared courses compound the problem.", ["S26", "S30", "S32"]],
    ["Why are antimicrobial residues in Philippine aquaculture a One Health problem?", "Oxytetracycline, florfenicol and colistin used in ponds and feed contaminate water and sediment, select resistant bacteria such as <i>Aeromonas</i>, and can reach consumers.", ["S23", "S31", "S33"]],
    ["What does RA 11332 require for notifiable resistant organisms?", "It creates a legal duty to report specified diseases and public health events to the DOH, with confidentiality and penalties; most resistant isolates travel through ARSP and IPC channels rather than individual notification.", ["S33", "S31", "S14"]],
    ["How can the Philippines resolve the antibiotic access–excess paradox?", "Separate essential Access antibiotics, which must be available and affordable, from Watch and Reserve agents that need pre-authorisation, and monitor availability, affordability and appropriateness together.", ["S23", "S26", "S33"]],
    ["Which β-lactamase inhibitor combination covers metallo-β-lactamases?", "<b>Aztreonam–avibactam</b>: aztreonam survives metallo-β-lactamase hydrolysis while avibactam protects it from co-produced serine enzymes.", ["S8", "S7", "S13"]],
    ["How does cefiderocol enter Gram-negative bacteria?", "Its catechol siderophore chelates iron and is carried in through <b>TonB-dependent transporters</b>, bypassing porin loss and efflux.", ["S8", "S7", "S13"]],
    ["What is the main stewardship value of rapid resistance diagnostics?", "They shorten time to effective therapy and enable earlier de-escalation — but only when a stewardship team acts on the result.", ["S12", "S8", "S13"]],
    ["Why do standard β-lactam doses fail in septic shock?", "Capillary leak and oedema enlarge the volume of distribution, while augmented renal clearance or renal replacement therapy alters clearance, so free drug exposure may fall below target.", ["S4", "S20", "S8"]],
    ["When is combination therapy justified in MDR Gram-negative infection?", "For empirical coverage in severe sepsis, documented polymicrobial infection, defined synergy, or resistance prevention — then de-escalate once susceptibility is known.", ["S7", "S8", "S9", "S13"]]
  ]);
})();
