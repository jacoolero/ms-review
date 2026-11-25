/* Flashcards — Gram-negative & atypical bacteria, part B (gn14–gn30) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-gnx-", "gneg", ["S1", "S4", "S10"], [
    ["Lactose-negative Enterobacterale that swarms and splits urea", "<b><i>Proteus mirabilis</i></b> — ammonia raises urine pH, causing <b>struvite</b> stones and catheter-associated UTI."],
    ["Plague: vector and the three clinical forms", "<b>Flea</b>-borne zoonosis of rodents; causes <b>bubonic</b>, septicaemic and <b>pneumonic</b> plague."],
    ["Vibrio species causing fulminant sepsis in iron overload", "<b><i>V. vulnificus</i></b> — it also causes wound infection with necrotising fasciitis after seawater contact."],
    ["Brucella species causing the most severe human disease", "<b><i>B. melitensis</i></b>, acquired from goats and sheep through unpasteurised dairy."],
    ["Growth requirement and biosafety level for Francisella tularensis", "Requires <b>cysteine</b>; handled at <b>BSL-3</b> because of its very low aerosol infectious dose."],
    ["Cat-scratch disease: agent and classic silver stain", "<b><i>Bartonella henselae</i></b>; the <b>Warthin–Starry</b> stain shows the bacilli in tissue."],
    ["Hib capsule polymer used in conjugate vaccines", "<b>Polyribitol phosphate (PRP)</b> capsule, conjugated to a carrier protein."],
    ["Why ampicillin fails against Moraxella catarrhalis", "Most strains produce <b>BRO β-lactamase</b>; use amoxicillin–clavulanate instead."],
    ["Serological marker of chronic Q fever", "A high <b>phase I IgG</b> titre; phase II antibodies dominate acute infection."],
    ["Chlamydia trachomatis serovars causing lymphogranuloma venereum", "<b>L1–L3</b>; serovars A–C cause trachoma and D–K cause genital infection."],
    ["Why β-lactams fail against Mycoplasma genitalium", "It has <b>no peptidoglycan cell wall</b>, so β-lactams have no target."],
    ["Drug of choice for rickettsial infection, even in severe paediatric disease", "<b>Doxycycline</b> — waiting for serology increases mortality."],
    ["Weil disease triad", "<b>Jaundice, acute kidney injury and haemorrhage</b> — the severe form of leptospirosis."],
    ["Rash that allows clinical diagnosis of early Lyme disease", "<b>Erythema migrans</b>, a spreading annular lesion; no serology is needed."],
    ["Anaerobe causing Lemierre syndrome", "<b><i>Fusobacterium necrophorum</i></b> — septic internal jugular thrombophlebitis after pharyngitis."],
    ["Non-fermenter with L1 metallo-β-lactamase treated with co-trimoxazole", "<b><i>Stenotrophomonas maltophilia</i></b>; it is intrinsically carbapenem-resistant."],
    ["HACEK organisms: shared habitat and usual treatment", "<b>Oropharyngeal flora</b>; HACEK endocarditis is treated with <b>ceftriaxone</b>."]
  ]);
})();
