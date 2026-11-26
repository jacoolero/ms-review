/* Flashcards — mycobacteria, part C (one card per essay my31–my40) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-myc-", "mycobacteria", ["S27", "S31", "S33", "S6"], [
    ["Which Philippine TB manual sets facility-level diagnostic and notification tasks?", "The DOH <b>NTP Manual of Procedures, 6th edition</b> (2020); it standardises screening, Xpert testing, DOTS, ITIS notification and cohort review."],
    ["What does RA 10767 require for TB control?", "A <b>comprehensive national TB elimination plan</b> led by the DOH, with inter-agency and LGU participation, surveillance, research and equitable access to diagnosis and treatment."],
    ["What is PMDT in the Philippine TB programme?", "<b>Programmatic Management of Drug-Resistant TB</b> — specialised detection, treatment, adherence support and monitoring for RR/MDR-TB through designated PMDT sites."],
    ["What is the role of the NTRL in the Xpert rollout?", "RITM's National TB Reference Laboratory provides confirmatory culture and DST, molecular testing, training, external quality assessment and equipment oversight."],
    ["Why is leprosy still a Philippine public-health problem?", "About <b>1,500–2,000 new cases</b> are reported yearly, often with grade-2 disability; stigma and delayed presentation sustain transmission and nerve damage."],
    ["Which LTBI regimen is 12 weeks of weekly isoniazid plus rifapentine?", "<b>3HP</b>; it has high completion but requires exclusion of active TB and attention to rifamycin interactions."],
    ["When is an NTM a cause of pulmonary disease rather than colonisation?", "Compatible symptoms and imaging plus <b>two positive sputum cultures</b>, or one BAL or tissue culture, after excluding TB and malignancy."],
    ["Which TB vaccine candidate showed about 50% protection in phase 2b?", "<b>M72/AS01E</b>, an adjuvanted fusion protein now in phase 3; BCG remains the only licensed vaccine."],
    ["Why monitor linezolid levels in drug-resistant TB?", "To balance efficacy against <b>myelosuppression and neuropathy</b>; TDM is targeted and interpreted with the MIC, adherence and clinical course."],
    ["What is the goal of host-directed therapy in TB?", "To modulate harmful inflammation or enhance killing as an <b>adjunct</b> to antibiotics — not to replace effective TB treatment."]
  ]);
})();
