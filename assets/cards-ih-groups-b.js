/* Flashcards — blood group systems part B (ih73–ih90) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-bgx-", "ih-groups", ["B1", "B2", "B3"], [
    ["B3 versus Bm phenotype", "<b>B3</b> shows mixed-field agglutination; <b>Bm</b> has no B on red cells but secretes B substance in saliva."],
    ["RHD genotyping in a weakly D-reactive pregnant woman", "Decides whether she is <b>weak D</b> (may be managed D-positive) or <b>partial D/DEL</b> (D-negative blood and RhIG)."],
    ["Anti-G — which cells does it react with?", "<b>C-positive or D-positive</b> cells; it mimics combined anti-C plus anti-D."],
    ["Enzyme that destroys Kell antigens", "<b>DTT</b> and 2-mercaptoethanol; ficin and papain do not."],
    ["GATA-1 mutation and the Fy(a−b−) phenotype", "Silences <b>ACKR1</b> in erythroid cells only, so Duffy remains on other tissues."],
    ["In(Lu) phenotype — cause and antigens reduced", "<b>KLF1</b> mutation suppresses Lutheran, and also i, P1 and AnWj."],
    ["Diego antigens are carried by which protein?", "<b>Band 3</b> (AE1), encoded by SLC4A1 on chromosome 17."],
    ["Colton antigens are on which channel?", "<b>Aquaporin-1</b> (AQP1); Co(a−b−) is rare and can make anti-Co3."],
    ["Leach phenotype", "Absent glycophorin C and D: <b>elliptocytosis</b> plus resistance to P. falciparum."],
    ["Cromer antigens are on which complement regulator?", "<b>CD55</b> (decay-accelerating factor), a GPI-anchored protein."],
    ["JMH antigen is lost in which condition?", "<b>PNH</b> — JMH is GPI-anchored semaphorin 7A."],
    ["Anti-Vel — why clinically dangerous?", "It can bind <b>complement</b> and cause severe intravascular haemolysis."],
    ["Chido/Rodgers antibodies are neutralised by", "<b>Plasma</b> — the antigens are on soluble C4d."],
    ["Which IgG subclasses activate complement best?", "<b>IgG1 and IgG3</b>; they also bind Fc receptors most effectively."],
    ["Lectin that detects T activation", "<b>Arachis hypogaea</b> (peanut lectin)."],
    ["Mixed-field agglutination after HSCT suggests", "<b>Chimerism</b> — donor and recipient red cell populations coexist."],
    ["Screening cells in the Philippines should include which antigen?", "<b>Mia (GP.Mur)</b> — standard Caucasian panels may miss anti-Mia."],
    ["C3d versus C3b on the DAT", "<b>C3d</b> is the stable fragment that remains on red cells; monospecific anti-C3d is used."]
  ]);
})();
