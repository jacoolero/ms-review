/* Flashcards — Gram-positive bacteria, part B (one card per gp13–gp30 essay) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-gpx-", "gpos", ["S1", "S2", "S4", "S9"], [
    ["When is a coagulase-negative staphylococcus in urine clinically significant?", "With <b>pyuria</b>, symptoms, repeated isolation and a urinary catheter — otherwise it usually reflects colonisation."],
    ["Drug of choice for intrapartum group B streptococcal prophylaxis", "<b>Penicillin</b>; ampicillin or cefazolin are alternatives, and clindamycin needs susceptibility testing."],
    ["Laboratory features that separate groups C and G streptococci from group A", "They are <b>bacitracin resistant</b> and <b>PYR negative</b>, but still β-haemolytic."],
    ["Preformed heat-stable Bacillus cereus toxin causing vomiting", "<b>Cereulide</b> in reheated rice; the diarrhoeal enterotoxins are heat labile and formed in the gut."],
    ["Anaerobic diphtheroid causing indolent shoulder prosthetic joint infection", "<b><i>Cutibacterium acnes</i></b>; hold anaerobic cultures for up to <b>14 days</b>."],
    ["Gram-positive rod with H₂S-positive TSI causing erysipeloid", "<b><i>Erysipelothrix rhusiopathiae</i></b> — intrinsically resistant to <b>vancomycin</b>; treat with penicillin."],
    ["Weakly acid-fast rod causing cavitary pneumonia after horse exposure", "<b><i>Rhodococcus equi</i></b>; an intracellular pathogen of advanced HIV, treated with prolonged combination therapy."],
    ["Lipophilic multidrug-resistant corynebacterium causing neutropenic bacteraemia", "<b><i>C. jeikeium</i></b>; usually susceptible to vancomycin, linezolid or daptomycin."],
    ["Superantigen-mediated group A streptococcal shock with multi-organ failure", "<b>STSS</b>; treat with urgent surgery, penicillin plus <b>clindamycin</b>, and IVIG."],
    ["Pain out of proportion and crepitus in a spreading skin infection", "Suggests <b>necrotising fasciitis</b> — immediate surgical exploration and debridement, never delayed for imaging."],
    ["Blood culture finding that makes a coagulase-negative staphylococcus likely significant", "Multiple positive sets, a <b>device</b>, neutropenia or persistent bacteraemia — otherwise treat as contamination."],
    ["Blood culture sets to obtain before antibiotics in suspected endocarditis", "At least <b>three sets</b>, followed by transthoracic and transoesophageal echocardiography."],
    ["First-line management of a purulent skin abscess", "<b>Incision and drainage</b>; add MRSA-active antibiotics for systemic signs or immunocompromise."],
    ["Most sensitive imaging test for osteomyelitis", "<b>MRI</b>; <b>bone biopsy</b> for culture and histology is the reference standard."],
    ["Two components of the standard MRSA decolonisation bundle", "<b>Mupirocin</b> nasal ointment plus <b>chlorhexidine</b> bathing."],
    ["Viridans streptococci causing shock and ARDS during neutropenic fever", "Mucositis-associated <b>viridans streptococcal bacteraemia</b>; treat promptly with an anti-pseudomonal β-lactam."],
    ["Penicillin reaction type that requires lifelong avoidance and specialist referral", "<b>Severe delayed hypersensitivity</b> such as SJS/TEN or DRESS — do not rechallenge."],
    ["β-lactam that covers MRSA by binding PBP2a", "<b>Ceftaroline</b> (ceftobiprole also binds PBP2a)."]
  ]);
})();
