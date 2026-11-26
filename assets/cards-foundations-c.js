/* Flashcards — Foundations, part C: Philippine practice and advanced pathogenesis */
(() => {
  const add = (prefix, domain, entries) => entries.forEach(({ front, back, sources }, i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-fdc-", "foundations", [
    {
      sources: ["S31", "S32", "S33"],
      front: "How does a national reference laboratory differ from a hospital laboratory?",
      back: "It performs <b>confirmatory testing</b>, produces <b>external quality assessment</b> panels and advises the referral network, rather than diagnosing every patient. In the Philippines, <b>RITM</b> fills this role and hosts <b>biosafety level 3</b> facilities."
    },
    {
      sources: ["S33", "S31"],
      front: "What does RA 11332 require of laboratories?",
      back: "Report notifiable diseases and health events of <b>public health concern</b> through <b>PIDSR</b> — immediately for Category I and by <b>weekly reporting</b> for Category II. A suspect case is reported without waiting for <b>confirmatory testing</b>."
    },
    {
      sources: ["S29", "S30"],
      front: "How do CMO 13 s. 2017 and CMO 15 s. 2019 differ?",
      back: "CMO 13 sets the <b>outcomes-based education</b> curriculum for the BS programme, while CMO 15 governs <b>graduate programs</b> such as the MSMT. The MSMT adds a <b>thesis</b>, <b>biostatistics</b> and advanced laboratory management."
    },
    {
      sources: ["S28", "S30", "S33"],
      front: "What does RA 5527 regulate?",
      back: "It defines the <b>scope of practice</b> and <b>licensure examination</b> for the <b>registered medical technologist</b> under the PRC Board of Medical Technology. Facility standards come separately from <b>RA 4688</b> and DOH licensing."
    },
    {
      sources: ["S30", "S29", "S32"],
      front: "PAMET versus PASMETH — what does each represent?",
      back: "<b>PAMET</b> is the PRC-<b>accredited professional organization</b> for practitioners and CPD, while <b>PASMETH</b> represents schools and supports <b>curriculum review</b> and faculty development."
    },
    {
      sources: ["S23", "S14", "S26", "S33"],
      front: "Why is colistin use in Philippine livestock a human-health problem?",
      back: "It selects <b>mcr-1</b>-bearing plasmids that can transfer to human <b>Enterobacterales</b>, undermining a last-resort drug. Control needs <b>One Health</b> surveillance linking the <b>Bureau of Animal Industry</b> with <b>ARSP</b>."
    },
    {
      sources: ["S13", "S1", "S14"],
      front: "What makes functional metagenomics different from sequence-based metagenomics?",
      back: "It clones environmental DNA into a <b>surrogate host</b> and selects for a phenotype, so it can find <b>unculturable</b> genes with no <b>homology</b> to known sequences. <b>Host bias</b> and promoter mismatch limit its sensitivity."
    },
    {
      sources: ["S1", "S13", "S4"],
      front: "Why do persister cells survive antibiotics without being resistant?",
      back: "They are dormant <b>tolerance</b> phenotypes with an unchanged <b>MIC</b>, often driven by <b>toxin-antitoxin</b> modules and <b>ppGpp</b>. They explain <b>relapse</b> in tuberculosis and biofilm infection."
    },
    {
      sources: ["S1", "S13", "S2"],
      front: "How does a bacteriophage endolysin kill bacteria?",
      back: "It degrades <b>peptidoglycan</b> from outside the cell, causing <b>autolysis</b>, and engineered endolysins are being developed as enzyme antibiotics. <b>Holin</b> proteins control the timing of lysis."
    },
    {
      sources: ["S1", "S4", "S13"],
      front: "Which microbial metabolite fuels colonocytes and induces regulatory T cells?",
      back: "<b>Butyrate</b>, a <b>short-chain fatty acid</b> produced by fibre fermentation. It also signals through <b>GPR109A</b> and helps maintain the <b>intestinal barrier</b>."
    }
  ]);
})();
