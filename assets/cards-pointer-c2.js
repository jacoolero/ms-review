/* Flashcards - Clinical Chemistry - analytical instrumentation & automation (pointer gap set C2) */
(() => {
  const prefix = "fc-c2g-";
  const add = (pairs) => pairs.forEach(([front, back, sources], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain: "c2", front, back, sources }));

  add([
    ["Beer–Lambert law: what does absorbance measure, and what is the useful range?",
      "Absorbance <b>A = ε × b × c</b>, logarithmic in concentration. Read between about <b>0.05 and 2.0 A</b>; below that is noise, above it stray light and detector non-linearity. Reflectance pads instead use the <b>Kubelka–Munk</b> transform.",
      ["C2", "C1", "C5"]],
    ["Why does indirect ISE cause pseudohyponatraemia but direct ISE does not?",
      "<b>Indirect ISE dilutes</b> plasma and reports concentration per litre, so excess lipid or protein displaces water and lowers the result. <b>Direct ISE</b> measures undiluted plasma water activity, so it is unaffected.",
      ["C2", "C1", "C3"]],
    ["Which immunoassay format is prone to the hook effect, and why?",
      "The <b>one-step sandwich</b> assay. Extreme antigen saturates capture and detection antibodies separately, so the signal falls and a very high result is reported as <b>falsely low</b>. Dilute and re-assay.",
      ["C1", "C2", "C10"]],
    ["Why is an isotope-labelled internal standard essential in quantitative LC-MS/MS?",
      "It co-elutes and ionises almost identically to the analyte, correcting <b>recovery, ion suppression and injection volume</b>. A falling internal-standard response signals a failed batch, not a true result.",
      ["C1", "C10", "C5"]],
    ["Which results should middleware withhold from autoverification?",
      "Any with <b>QC out of control</b>, an instrument flag, a breached <b>HIL index</b>, a failed <b>delta check</b>, a <b>critical value</b>, or an implausible consistency check — all need documented human review.",
      ["C11", "C1", "C3"]]
  ]);
})();
