/* Flashcards — diagnostics, IPC & emerging infections, part B (d13–d30) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-dgx-", "diagnostics", ["S12", "S4"], [
    ["Sputum Gram stain quality: an acceptable sample shows…", "<b>&gt;25 PMN</b> and <b>&lt;10 squamous epithelial cells</b> per low-power field (Bartlett criteria); saliva is rejected."],
    ["CSF pattern that suggests bacterial rather than viral meningitis", "<b>Neutrophil predominance</b> with a <b>low CSF-to-serum glucose ratio</b> and high protein; viral meningitis is usually lymphocytic with normal glucose."],
    ["When should a urine culture not be sent?", "In an <b>asymptomatic</b> patient, including a catheterised patient — asymptomatic bacteriuria is expected and treating it selects resistance. Exceptions include <b>pregnancy</b> and pre-urological surgery."],
    ["Which stool pathogen requires sorbitol-MacConkey agar?", "<b>Shiga toxin-producing <i>E. coli</i> O157</b>, which is sorbitol non-fermenting; confirm with O157 antigen or Shiga toxin testing."],
    ["Best specimen from a chronic wound or abscess", "A <b>tissue biopsy or aspirate</b>, not a superficial swab — swabs recover colonising flora and correlate poorly with deep infection."],
    ["Most operator-dependent step in the Gram stain", "<b>Decolourisation</b> — too long makes Gram-positives appear pink, too short leaves Gram-negatives purple."],
    ["Which medium supplies X and V factors for <i>Haemophilus</i>?", "<b>Chocolate agar</b> — blood agar alone lacks the available NAD (V factor)."],
    ["Why anaerobic bacteria are often missed", "Exposure to <b>oxygen</b>, collection with a swab, delayed transport and overgrowth by facultative organisms; aspirates in anaerobic transport are preferred."],
    ["Why are fungal cultures incubated at both 25 °C and 37 °C?", "To demonstrate the <b>mould-to-yeast conversion</b> of <b>dimorphic fungi</b> and to recover organisms adapted to either temperature."],
    ["International standard for medical laboratory accreditation", "<b>ISO 15189</b> — assesses the quality management system and technical competence of medical laboratories."],
    ["The sentinel laboratory's role with a suspected Category A agent", "<b>Rule out, refer and notify</b> — do not attempt open-bench culture or definitive identification."],
    ["Main risk when AI models are deployed in microbiology", "<b>Training-data bias and distribution drift</b> — performance may fall in unrepresented populations or when workflows change."],
    ["How many blood culture sets for suspected endocarditis?", "<b>At least three sets</b> from separate venepuncture sites, ideally before antibiotics."],
    ["Why is HIV serology unreliable in infants?", "Maternal <b>IgG crosses the placenta</b> and persists for months — use a <b>virological assay</b> (HIV DNA or RNA)."],
    ["Define diagnostic stewardship in one line", "The <b>right test for the right patient at the right time</b>, reported so that it improves clinical decisions."],
    ["UN number for a Category B biological substance", "<b>UN3373</b> — Category A infectious substances use UN2814 (humans) or UN2900 (animals)."],
    ["Deduplication rule for a cumulative antibiogram", "Count only the <b>first isolate per patient per episode</b>, and report a cell only when enough isolates are available."],
    ["When is environmental sampling in a hospital justified?", "When it is <b>targeted</b> — during an outbreak, after a breach, or within a validated water-safety programme — not as routine surveillance."]
  ]);
})();
