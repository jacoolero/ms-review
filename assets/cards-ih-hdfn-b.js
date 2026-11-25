/* Immunohematology — HDFN & perinatal testing, set B flashcards (fc-hdx-1 to fc-hdx-18) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-hdx-", "ih-hdfn", ["B1", "B11"], [
    ["Which receptor transports IgG across the placenta?", "The <b>neonatal Fc receptor (FcRn)</b> on the syncytiotrophoblast; IgM lacks it and does not cross."],
    ["Why can a small fetomaternal haemorrhage cause alloimmunisation?", "Even a tiny volume of D-positive fetal blood can sensitise a D-negative mother, while much larger bleeds are needed to cause fetal anaemia."],
    ["Why does anti-K cause anaemia with little jaundice?", "It suppresses <b>erythroid progenitors</b>, so there is less haemolysis and less bilirubin for the degree of anaemia."],
    ["Which D variants can be managed as D-positive in pregnancy?", "<b>Weak D types 1, 2 and 3</b>; most partial D and other weak D types need D-negative management."],
    ["Why is the previous sample retested in parallel when titrating?", "To control for method, reagent and observer drift, so a rising titre reflects the antibody and not the assay."],
    ["What does an MCA-PSV above 1.5 MoM suggest?", "Moderate to severe <b>fetal anaemia</b>, prompting fetal blood sampling or intrauterine transfusion."],
    ["What does amniotic fluid ΔOD450 measure?", "<b>Bilirubin</b> pigment at 450 nm, reflecting the intensity of fetal haemolysis."],
    ["When is cell-free fetal DNA for RHD reliable?", "From about <b>11 weeks</b>; a low fetal fraction can cause a false negative."],
    ["Define hydrops fetalis.", "Fluid in at least two fetal compartments: <b>ascites</b>, pleural effusion, pericardial effusion or skin oedema."],
    ["Which virus causes fetal anaemia by infecting erythroid progenitors?", "<b>Parvovirus B19</b>, which uses the P antigen (globoside)."],
    ["How does phototherapy make bilirubin excretable?", "It converts bilirubin to water-soluble <b>configurational isomers</b> and lumirubin."],
    ["When is IVIG used in HDFN?", "As an adjunct to intensive phototherapy when bilirubin keeps rising, to avoid <b>exchange transfusion</b>."],
    ["What defines late hyporegenerative anaemia after HDFN?", "Falling haemoglobin with a low <b>reticulocyte</b> count at about 3 to 12 weeks of age."],
    ["Why is reverse ABO grouping not done on cord blood?", "Neonates do not yet produce <b>isohaemagglutinins</b>, so the result would be uninterpretable."],
    ["Why are adult reference intervals unsuitable for neonates?", "Haemoglobin, MCV, reticulocytes and bilirubin change with <b>gestational and postnatal age</b>."],
    ["Which quality indicator best reflects an RhIG programme?", "The proportion of eligible D-negative women who receive timely antenatal and postpartum <b>RhIG</b>."],
    ["What is the recurrence risk if the father is heterozygous for the antigen?", "<b>Fifty percent</b> for each pregnancy; the fetus may be antigen-negative and unaffected."],
    ["What is the commonest perinatal labelling error?", "A cord or maternal sample attributed to the <b>wrong baby or mother</b>."]
  ]);
})();
