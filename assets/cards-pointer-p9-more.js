/* Flashcards — scabies (p9), second set: morphology, spectrum, laboratory SOP,
   pharmacology, hospital outbreaks, complications and Philippine operations. */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p9h-", "p9", ["P1", "P2", "P3", "P4", "P2"], [
    ["Which legs bear suckers in female versus male Sarcoptes mites?", "Female: legs <b>I–II</b> only. Male: legs <b>I, II and IV</b>."],
    ["Which scabies variant may cause hyperkeratosis with almost no itch?", "<b>Crusted scabies</b> — especially in the immunosuppressed or elderly, where the immune response and itch fail."],
    ["Why is mineral oil preferred to formalin for scabies scrapings?", "<b>Mineral oil</b> preserves mite and egg morphology; <b>formalin destroys</b> them."],
    ["What is the mechanism of action of ivermectin in scabies?", "It opens <b>glutamate-gated chloride channels</b>, paralysing the mite; it is a <b>CYP3A4</b> substrate."],
    ["Why must ward staff be treated in a hospital scabies outbreak?", "They are part of the <b>transmission chain</b> and can reintroduce infestation after the ward is cleared."],
    ["Which renal complication follows streptococcal skin infection?", "<b>Post-streptococcal glomerulonephritis</b>, usually one to three weeks after impetigo or cellulitis."],
    ["Which platform should deliver scabies control under Philippine UHC?", "<b>Primary care</b> — RHUs and barangay health workers, with a guaranteed permethrin and ivermectin supply."],
  ]);
})();
