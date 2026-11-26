(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-vic-", "virology", ["S31", "S33", "S26"], [
    ["Why does measles need at least 95% two-dose coverage?", "Its <b>R0 is 12-18</b>, so small immunity gaps amplify into outbreaks; herd immunity requires two measles-containing doses in at least 95% of the population."],
    ["First step in managing any animal bite in the Philippines?", "Immediate <b>wound washing</b> with soap and running water for at least 15 minutes, then classify the exposure before giving vaccine or RIG."],
    ["When does dengue plasma leakage begin?", "Around <b>defervescence</b>, in the 24-48-hour critical phase, when haemoconcentration, effusion and shock develop."],
    ["RA 11166 allows voluntary HIV testing without a guardian from what age?", "<b>15 years</b>; confidentiality, informed consent and non-discrimination are statutory guarantees."],
    ["Which Philippine laboratories lead SARS-CoV-2 genomic sequencing?", "<b>RITM</b> and the <b>Philippine Genome Center</b>, with sequences linked to case metadata and shared through GISAID."],
    ["What is the target of the maternal RSVpreF vaccine?", "The <b>prefusion F protein</b>; vaccinating in pregnancy protects infants through transferred antibody."],
    ["Best test to confirm active hepatitis C infection?", "<b>HCV RNA PCR</b>; anti-HCV only shows exposure and may be negative early."],
    ["Drug of choice for HSV encephalitis?", "<b>IV aciclovir</b>, started empirically before lumbar puncture because delay worsens outcome."],
    ["HIV mutation causing lamivudine and emtricitabine resistance?", "<b>M184V</b> in reverse transcriptase; it reduces viral fitness but is selected rapidly under monotherapy."],
    ["Main advantage of mNGS over targeted PCR?", "It can detect unexpected or novel pathogens without a predefined panel, at the cost of <b>contamination</b> and interpretation problems."]
  ]);
})();
