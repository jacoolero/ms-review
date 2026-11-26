/* Flashcards — pretransfusion testing, part C */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back, src], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources: src || sources }));

  add("fc-bpc-", "ih-testing", ["B7", "B14", "B17", "B1"], [
    ["What must a Philippine blood service facility hold to operate?", "A <b>DOH license</b> under AO 2008-0008, renewed after inspection."],
    ["PBCC role in Philippine blood services", "National coordination, standards, training, technical assistance and <b>hemovigilance</b> guidance."],
    ["Two identifiers and labelling rule for a pretransfusion tube", "Full name plus <b>date of birth or hospital number</b>; label at the bedside with the <b>collector signature</b>."],
    ["Emergency release red cells when D-negative stock is scarce", "<b>O-negative</b> for girls and women of childbearing potential; <b>O-positive</b> for other adults after risk assessment."],
    ["Purpose of an MSBOS in a Philippine hospital", "Set crossmatch orders by procedure, reduce the <b>crossmatch-to-transfusion ratio</b> and preserve scarce stock."],
    ["Gel versus tube: main operational difference", "Gel traps agglutinates in a column and needs <b>no wash step</b>; tube needs washing and manual reading.", ["B1", "B2", "B11"]],
    ["Solid-phase red cell adherence principle", "Antigen is <b>immobilised</b>; bound antibody captures indicator red cells across the well.", ["B1", "B2", "B11"]],
    ["Panreactive eluate with a non-reactive adsorbed plasma means…", "A <b>warm autoantibody</b> with no underlying alloantibody detected.", ["B1", "B2", "B13"]],
    ["How enzyme treatment allows IgG to agglutinate red cells", "It cleaves <b>sialic acid</b>, lowers the <b>zeta potential</b> and lets IgG bridge adjacent cells.", ["B1", "B2", "B11"]],
    ["Neutralisation versus titration: what each answers", "Neutralisation confirms <b>specificity</b> with soluble antigen; titration <b>quantifies</b> by doubling dilution.", ["B1", "B2", "B10"]]
  ]);
})();
