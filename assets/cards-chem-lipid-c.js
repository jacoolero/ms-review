/* Flashcards — Clinical Chemistry, lipids part C: Philippine practice and advanced risk */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-lipc-", "chem-lipid", ["C16", "C18", "C8", "C1", "C2"], [
    ["PLAS 2020 LDL-C target in diabetes with target-organ damage", "&lt; 70 mg/dL (&lt; 1.8 mmol/L); diabetes with ASCVD is &lt; 55 mg/dL."],
    ["Most practical potent generic statin in the Philippines", "<b>Atorvastatin 40 mg</b> once daily; rosuvastatin is an alternative."],
    ["Do Filipino lipid reference intervals define treatment targets?", "<b>No</b>. Targets come from outcome trials and risk categories, not the 95% reference interval."],
    ["Leading cardiovascular causes of death in Filipinos", "<b>Ischaemic heart disease</b> and <b>stroke</b>."],
    ["PhilHealth coverage of an outpatient lipid profile", "Often <b>not separately covered</b>; may be bundled in case rates or paid out of pocket."],
    ["Apolipoprotein whose loss of function lowers remnant cholesterol", "<b>APOC3</b>; ANGPTL3 loss of function also lowers LDL-C and triglyceride."],
    ["Lp(a) level associated with higher cardiovascular risk", "Above about <b>125 nmol/L</b>; risk is continuous and largely inherited."],
    ["Dutch Lipid Clinic score that justifies action", "<b>Probable or definite</b> familial hypercholesterolaemia warrants treatment and cascade screening."],
    ["Mechanism of PCSK9 inhibitors", "They block PCSK9-mediated <b>LDL receptor degradation</b>, increasing LDL clearance."],
    ["How does severe lipaemia affect direct LDL-C?", "Light scattering and abnormal particles make it unreliable; ultracentrifuge or report <b>non-HDL-C</b> instead."]
  ]);
})();
