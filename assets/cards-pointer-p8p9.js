/* Flashcards — pointer gaps: Blastocystis (p8) and scabies (p9) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p8g-", "p8", ["P1", "P2", "P3", "P4"], [
    ["How many Blastocystis subtypes are recognised, and which infect humans?", "At least <b>17 (ST1–ST17)</b>; <b>ST1–ST9</b> occur in humans, with <b>ST3</b> usually dominant."],
    ["Strongest argument against Blastocystis being a pathogen", "<b>Asymptomatic carriage</b> is as common as symptomatic infection, and the organism often accompanies a <b>diverse microbiome</b>."],
    ["What wording makes a Blastocystis report clinically defensible?", "State the abundance <b>semiquantitatively</b>, note that significance is <b>uncertain</b>, and direct the clinician to exclude <b>co-pathogens</b>."],
    ["When is treatment of Blastocystis justified?", "Only when the patient is <b>symptomatic</b> and other causes are excluded; never treat <b>asymptomatic carriage</b>."],
    ["Why do Philippine Blastocystis prevalence estimates range from 10% to over 50%?", "Different <b>populations</b>, one versus <b>three specimens</b>, wet mount versus <b>concentration/trichrome/PCR</b>, and inconsistent <b>reporting thresholds</b>."],
  ]);

  add("fc-p9g-", "p9", ["P1", "P2", "P3", "P4", "P6"], [
    ["How is Sarcoptes scabiei transmitted?", "Mainly by <b>prolonged skin-to-skin contact</b>; <b>fomites</b> matter in <b>crusted scabies</b>. There is no vector."],
    ["Key difference between classical and crusted scabies", "Classical: about <b>10–15 mites</b> with severe itch. Crusted: <b>thousands to millions</b>, hyperkeratosis, often <b>little itch</b>."],
    ["Dermoscopic sign of a scabies burrow", "The <b>delta-wing jet</b> — a dark triangular structure with a thin wavy trail."],
    ["Permethrin 5% regimen for classical scabies", "<b>Neck down</b> for <b>8–14 hours</b>, repeat at <b>day 7</b>; treat all contacts on the same day."],
    ["First control step in a scabies outbreak in a care home", "<b>Mass treatment</b> of all residents and staff on the same day, plus <b>cohorting</b> and laundering at 60 °C."],
    ["Why do post-scabetic nodules persist after treatment?", "They are a <b>hypersensitivity</b> reaction to retained <b>mite antigen</b>; scrapings usually show <b>no live mites</b>."],
    ["When does WHO recommend community-wide scabies MDA?", "When prevalence is about <b>10% or more</b>, using <b>ivermectin</b> or <b>permethrin</b> and treating the whole community."],
  ]);
})();
