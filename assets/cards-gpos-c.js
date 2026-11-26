/* Flashcards — Gram-positive bacteria, part C (one card per gp31–gp40 essay) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-gpc-", "gpos", ["S26", "S31", "S32"], [
    ["First step in a Philippine hospital before choosing empiric MRSA therapy?", "Review the <b>local cumulative antibiogram</b>, because MRSA prevalence varies by ward and specimen. Pair vancomycin with a 48–72-hour de-escalation plan."],
    ["When should empiric MRSA coverage be added to severe community-acquired pneumonia?", "After <b>influenza</b>, with cavitation, injection drug use or known MRSA colonisation — not routinely for every severe CAP."],
    ["Philippine NIP schedule for PCV13 and Hib-containing pentavalent vaccine?", "Both are given at <b>6, 10 and 14 weeks</b>; PCV13 and Hib are free in public health centres."],
    ["Treatment of choice for group A streptococcal pharyngitis in a Filipino child?", "<b>Penicillin V for 10 days</b> or once-daily amoxicillin; benzathine penicillin if adherence is uncertain. Treating within 9 days prevents rheumatic fever."],
    ["Core Philippine AMR surveillance network for Gram-positive isolates?", "The <b>DOH Antimicrobial Resistance Surveillance Program</b>, coordinated with <b>RITM</b> and linked to WHO <b>GLASS</b>."],
    ["Preferred treatment for a second recurrence of Clostridioides difficile infection?", "<b>Faecal microbiota transplantation</b>; fidaxomicin or bezlotoxumab are alternatives for high-risk patients."],
    ["Drugs for vanA-positive VRE bacteraemia?", "<b>Linezolid</b> or high-dose <b>daptomycin</b>; add source control and consider daptomycin plus ceftaroline for refractory infection."],
    ["Best culture technique to diagnose prosthetic joint infection by coagulase-negative staphylococci?", "Multiple periprosthetic tissue samples plus <b>sonication</b> of the explanted implant; hold cultures for indolent organisms."],
    ["Why is Bacillus cereus in a neutropenic patient's blood culture significant?", "It can cause <b>fulminant bacteraemia</b> with pulmonary or CNS seeding, so do not dismiss it as a skin contaminant. Remove the line and treat with vancomycin or clindamycin."],
    ["Safest way to remove a low-risk penicillin allergy label?", "A structured history followed by a <b>direct oral amoxicillin challenge</b> in a monitored setting; reserve skin testing for immediate reactions."]
  ]);
})();
