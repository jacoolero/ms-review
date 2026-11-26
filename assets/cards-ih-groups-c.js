/* Flashcards — blood group systems part C (ih181–ih190) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-bgc-", "ih-groups", ["B1", "B2", "B3", "B14", "B17"], [
    ["Most common ABO group and D-negative rate in Filipinos", "Group O at about 45%; D-negative is &lt;1%, so D-negative units are scarce."],
    ["Weak D donor versus weak D patient", "Donor: label <b>D-positive</b>. Patient: genotype; until then treat as <b>D-negative</b> and give RhIG in pregnancy."],
    ["Core principle of RA 7719", "<b>Voluntary non-remunerated donation</b>; phase-out of commercial blood banks; Philippine National Blood Services."],
    ["One 300 µg vial of RhIG covers how much fetal blood?", "About <b>15 mL fetal red cells</b>, equivalent to 30 mL fetal whole blood."],
    ["First action when forward and reverse ABO grouping disagree", "Repeat a <b>new sample</b>, resolve the discrepancy, and report nothing until it is explained."],
    ["Classic antibody of delayed haemolytic transfusion reactions", "<b>Anti-Jk(a)</b> — an evanescent, complement-binding Kidd antibody."],
    ["Which blood group antibodies are usually IgM and do not cross the placenta?", "<b>Lewis, P1, M and N</b>; they are not usually implicated in HDFN."],
    ["Why include Mia and Di(a) cells in Philippine panels?", "Anti-Mia and anti-Di(a) cause HTR and HDFN and are missed by Caucasian panels."],
    ["Adsorption versus elution", "Adsorption removes antibody <b>from plasma</b>; elution releases bound antibody <b>from red cells</b>."],
    ["Polyagglutination versus panagglutinin", "Polyagglutination: adult sera react but the patient's own serum does not. A panagglutinin reacts with the autocontrol too."]
  ]);
})();
