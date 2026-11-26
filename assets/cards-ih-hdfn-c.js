/* Immunohematology — HDFN & perinatal testing, set C flashcards (fc-hdc-1 to fc-hdc-10) */
(() => {
  const cards = [
    {
      front: "What does RA 9288 newborn screening not diagnose?",
      back: "HDFN. It screens G6PD and metabolic disorders on <b>dried blood spots</b>, but does not measure bilirubin, DAT or maternal antibodies.",
      sources: ["B17", "S33", "B1"]
    },
    {
      front: "Why is RhIG supply difficult in the Philippines?",
      back: "D-negative women are &lt;1% of the population; the imported product needs a <b>2-8 C cold chain</b>, reliable procurement and full traceability.",
      sources: ["B14", "B15", "B17"]
    },
    {
      front: "Which antibodies cause HDFN in Filipino mothers besides anti-D?",
      back: "Anti-c, anti-E and <b>anti-Mia (GP.Mur)</b>; anti-K is rare locally but severe because it suppresses erythropoiesis.",
      sources: ["B14", "B17", "B10"]
    },
    {
      front: "What limits MCA-PSV access for alloimmunised pregnancies?",
      back: "Few trained maternal-fetal medicine units, out-of-pocket cost, travel, limited PhilHealth cover and equipment downtime.",
      sources: ["B14", "B15", "B10"]
    },
    {
      front: "Why must intrauterine transfusion red cells be irradiated?",
      back: "To prevent <b>TA-GVHD</b>; the unit is also group O, antigen-negative, Hct 75-85%, fresh, CMV-safe and crossmatched with maternal plasma.",
      sources: ["B1", "B10", "B14"]
    },
    {
      front: "Why can ABO HDFN have a negative DAT?",
      back: "Fetal A/B antigens are weak and tissue A/B substance adsorbs antibody; use the <b>eluate</b>, spherocytes and bilirubin trend.",
      sources: ["B1", "B2", "B10"]
    },
    {
      front: "Why is a rising anti-D titre only a trigger?",
      back: "It starts <b>MCA-PSV</b> surveillance; titre is method-dependent and does not measure avidity, subclass or fetal antigen status.",
      sources: ["B1", "B2", "B10"]
    },
    {
      front: "When is a fetal genotyping result inconclusive?",
      back: "Low <b>fetal fraction</b>, maternal RHD variant, recent transfusion or vanished twin; manage conservatively and repeat.",
      sources: ["B1", "B10", "B11"]
    },
    {
      front: "What is the definitive treatment for immune hydrops fetalis?",
      back: "<b>Intrauterine transfusion</b>; IVIG is only an adjunct and must not delay transfusion or exchange.",
      sources: ["B1", "B2", "B10"]
    },
    {
      front: "How should late anaemia after HDFN be followed up?",
      back: "Check haemoglobin and reticulocytes weekly to fortnightly for <b>3-12 weeks</b>; give a written plan and early review.",
      sources: ["B1", "B2", "B14"]
    }
  ];
  cards.forEach((c, i) => window.CARDS.push({
    id: "fc-hdc-" + (i + 1),
    domain: "ih-hdfn",
    front: c.front,
    back: c.back,
    sources: c.sources
  }));
})();
