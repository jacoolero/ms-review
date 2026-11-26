/* Flashcards - Clinical Chemistry - pointer gap: molecular diagnostics & genomics (c14) */
(() => {
  const prefix = "fc-c14g-";
  const add = (pairs) => pairs.forEach(([front, back, sources], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain: "c14", front, back, sources }));

  add([
    ["What are the essential components of a PCR master mix?",
      "Template, two <b>primers</b>, <b>dNTPs</b>, <b>Mg2+</b>, a thermostable <b>DNA polymerase</b>, buffered salt and nuclease-free water. Cycling runs <b>denaturation, annealing and extension</b>; RNA targets need <b>reverse transcription</b> first.",
      ["C1", "C10", "C2"]],
    ["How do SYBR Green and a hydrolysis probe differ in real-time PCR?",
      "<b>SYBR Green</b> fluoresces when bound to any double-stranded DNA, so it is cheap but non-specific. A <b>hydrolysis probe</b> adds sequence specificity and allows multiplexing, which is why it is preferred for diagnostic assays.",
      ["C1", "C10", "C2"]],
    ["When is Sanger sequencing preferred over next-generation sequencing?",
      "For a <b>single known variant</b>, a small insertion or deletion, a family variant or confirmation of an NGS call. Sanger reads about <b>700–1000 bp</b> but detects variants only above roughly <b>15–20%</b> allele fraction.",
      ["C1", "C10", "C3"]],
    ["What is ctDNA, and why can a liquid biopsy be falsely negative?",
      "<b>ctDNA</b> is the tumour-derived fraction of plasma <b>cell-free DNA</b>. A negative result may reflect <b>low tumour shedding</b>, a small tumour or <b>clonal haematopoiesis</b>, so tissue remains the reference standard.",
      ["C1", "C10", "C3", "C19"]],
    ["Why is a positive <i>C. difficile</i> PCR not proof of infection?",
      "PCR detects the <b>toxin gene</b>, not free toxin, and cannot separate <b>colonisation</b> from disease. Interpret with clinical criteria and, where available, a <b>toxin test</b>; a positive result alone does not justify treatment.",
      ["C1", "S31", "S12"]],
    ["What must be validated before a laboratory offers an in-house molecular assay?",
      "<b>Accuracy, precision, analytical sensitivity and limit of detection, analytical specificity, linearity and reportable range</b>, plus reference intervals or cut-offs. Controls, EQA participation, consent and data-privacy compliance complete the framework.",
      ["C5", "C11", "C13"]]
  ]);
})();
