/* Flashcards — Clinical Chemistry, emerging biomarkers & novel analytes (one card per essay c3g1–c3g10) */
(() => {
  const add = (prefix, domain, rows) => rows.forEach(([front, back, sources], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-c3g-", "c3", [
    ["What must an hs-cTn assay achieve at the 99th percentile?", "A total <b>coefficient of variation of 10% or less</b>, with <b>sex-specific</b> upper reference limits.", ["C9", "C1", "C2"]],
    ["Which natriuretic peptide should be trended during sacubitril/valsartan therapy?", "<b>NT-proBNP</b>; neprilysin inhibition raises BNP but not NT-proBNP.", ["C9", "C1", "C3"]],
    ["Presepsin is a soluble fragment of which receptor?", "<b>CD14</b>, the lipopolysaccharide co-receptor on monocytes; it rises within about two hours.", ["C1", "C2", "C3"]],
    ["Which AKI marker detects tubular stress rather than damage?", "<b>TIMP-2/IGFBP7</b>, the basis of NephroCheck; NGAL and KIM-1 indicate damage.", ["C7", "C1", "C2"]],
    ["Why can a small plasma volume cause a false-negative ctDNA result?", "Plasma volume sets the <b>limit of detection</b>, so too little plasma may contain no tumour DNA.", ["C1", "C3", "C10"]],
    ["Which spike-in controls recovery in circulating microRNA assays?", "<b>cel-miR-39</b>, added before extraction; without it, recovery and normalisation cannot be judged.", ["C1", "C3", "C10"]],
    ["Which mass spectrometry method is routine in newborn screening?", "<b>Tandem mass spectrometry</b> (LC-MS/MS) for aminoacidopathies and fatty acid oxidation defects.", ["C1", "C2", "C10"]],
    ["Which plasma marker best discriminates Alzheimer disease?", "<b>p-tau217</b>; the Aβ42/40 ratio and p-tau181 are the other validated blood markers.", ["C1", "C3", "C10"]],
    ["Which bone resorption marker is preferred in CKD-MBD?", "<b>TRAP-5b</b>, because it is osteoclast-specific and not retained as much as CTX in renal failure.", ["C14", "C1", "C17"]],
    ["What are the three levels of evidence for a novel analyte?", "<b>Analytical validity</b>, <b>clinical validity</b> and <b>clinical utility</b>; utility requires an outcome or decision benefit.", ["C5", "C11", "C1", "C13"]]
  ]);
})();
