/* Flashcards - Medical Microbiology - foundations extra */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-fd3-", "foundations", ["S1", "S2", "S4"], [
    ["How does a bacterial capsule evade phagocytosis?", "It forms a hydrophilic, negatively charged <b>antiphagocytic</b> barrier that limits <b>opsonin</b> and <b>complement</b> deposition. Plain polysaccharide vaccines are <b>T-independent</b>; conjugation to a <b>carrier protein</b> adds T-cell help."]
  ]);

  add("fc-fd4-", "foundations", ["S1", "S4", "S13"], [
    ["Which receptor complex recognises LPS?", "<b>TLR4-MD-2</b> with CD14; downstream <b>MyD88</b> activates NF-κB. Excess signalling causes <b>cytokine storm</b> and <b>immunothrombosis</b>."]
  ]);

  add("fc-fd5-", "foundations", ["S1", "S2", "S4"], [
    ["What causes a run versus a tumble in chemotaxis?", "Low phospho-<b>CheY</b> favours runs; phospho-CheY binds the switch to cause tumbles. <b>CheZ</b> dephosphorylates CheY, and CheR/CheB adapt the receptors."],
    ["How do siderophores obtain iron for bacteria?", "High-affinity chelators such as <b>enterobactin</b> and <b>pyoverdine</b> bind iron and are recovered by <b>TonB</b>-dependent receptors. <b>Cefiderocol</b> exploits this uptake as a Trojan horse."]
  ]);

  add("fc-fd6-", "foundations", ["S1", "S2", "S8"], [
    ["Two-component system: what activates the response regulator?", "A <b>sensor histidine kinase</b> autophosphorylates, then transfers phosphate to an aspartate on the <b>response regulator</b>. <b>PhoP/PhoQ</b> and <b>PmrA/PmrB</b> modify lipid A, causing <b>colistin resistance</b>."]
  ]);

  add("fc-fd7-", "foundations", ["S1", "S2", "S13"], [
    ["Phase variation versus antigenic variation?", "Phase variation switches expression <b>on and off</b>; antigenic variation changes the antigen so antibody fails. Examples include <b>pilin</b> in <i>Neisseria gonorrhoeae</i> and <b>VlsE</b> in <i>Borrelia burgdorferi</i>."],
    ["What does a riboswitch control?", "A metabolite-binding RNA structure in the 5-prime UTR that terminates transcription or blocks translation. <b>Small RNAs</b> with <b>Hfq</b> act post-transcriptionally."]
  ]);

  add("fc-fd8-", "foundations", ["S1", "S5", "S13"], [
    ["Lytic versus lysogenic phage cycle?", "Lytic: replication and <b>endolysin</b>-mediated lysis. Lysogenic: integration as a <b>prophage</b>, which can confer toxin genes by <b>prophage conversion</b>."]
  ]);

  add("fc-fd9-", "foundations", ["S1", "S2", "S12"], [
    ["Why does <i>H. influenzae</i> need chocolate agar?", "It requires <b>X factor</b> (haemin) and <b>V factor</b> (NAD), which chocolate agar supplies. Small-colony variants may be <b>menadione</b> or <b>thymidine</b> auxotrophs."]
  ]);

  add("fc-fd10-", "foundations", ["S1", "S4", "S13"], [
    ["Give one mechanism of polymicrobial synergy.", "<b>Cross-feeding</b>, <b>coaggregation</b> or shared <b>β-lactamase</b> protect the community. In intra-abdominal abscess, <i>Bacteroides fragilis</i> and <i>Escherichia coli</i> cooperate."],
    ["What is the virulence trade-off hypothesis?", "Virulence may increase <b>transmission</b> but shorten the infectious period, so an optimum exists. Resistance often carries a <b>fitness cost</b>, offset by <b>compensatory mutations</b>."]
  ]);

  add("fc-fd11-", "foundations", ["S1", "S2", "S13"], [
    ["What did JCVI-syn3.0 demonstrate?", "A minimal cell with roughly 470 genes can grow, defining <b>core genome</b> functions. Essential-gene screens help nominate <b>drug targets</b>."],
    ["Core versus accessory genome?", "<b>Core genome</b> is shared by all strains; <b>accessory genome</b> varies and carries virulence and resistance. Together they form the <b>pan-genome</b>."]
  ]);

  add("fc-fd12-", "foundations", ["S1", "S4", "S13"], [
    ["Give an example of molecular mimicry after infection.", "<b>Rheumatic fever</b>: group A streptococcal M protein cross-reacts with cardiac myosin. <b>Guillain-Barré syndrome</b> after <i>Campylobacter</i> is another example."],
    ["What are outer membrane vesicles?", "Nanoscale <b>outer membrane vesicles</b> bud from Gram-negative envelopes carrying <b>lipopolysaccharide</b>, proteins and DNA. They deliver toxins and <b>PAMPs</b> and are used in <b>GMMA</b> vaccines."]
  ]);

  add("fc-fd13-", "foundations", ["S1", "S2", "S13"], [
    ["How does the sigma E response activate?", "Periplasmic protein stress triggers <b>regulated intramembrane proteolysis</b> of RseA by DegS and RseP, releasing <b>sigma E</b>. The response repairs the envelope and can modify LPS."]
  ]);

  add("fc-fd14-", "foundations", ["S1", "S2", "S8"], [
    ["Which protein forms the divisome Z-ring?", "<b>FtsZ</b>, a GTP-dependent tubulin-like polymer; <b>FtsA</b> and <b>ZipA</b> anchor it to the membrane. Septal peptidoglycan is cross-linked by PBP3."]
  ]);

  add("fc-fd15-", "foundations", ["S1", "S2", "S13"], [
    ["What does a mutator phenotype mean?", "Defective <b>mismatch repair</b> or proofreading raises the mutation rate, accelerating resistance. <b>Hypermutation</b> is seen in <i>Pseudomonas aeruginosa</i> from cystic fibrosis."]
  ]);
})();
