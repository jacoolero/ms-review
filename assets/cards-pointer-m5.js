/* Flashcards — pointer gap m5: genetic engineering & microorganisms in medicine and industry */
(() => {
  const add = (prefix, domain, entries) => entries.forEach(({ front, back, sources }, i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-m5g-", "m5", [
    {
      sources: ["S1", "S2", "S13"],
      front: "Why is E. coli the default host for recombinant protein production?",
      back: "It grows fast and cheaply to high density and is genetically simple, but it cannot perform authentic human <b>N-linked glycosylation</b> and may deposit protein in <b>inclusion bodies</b>. Therapeutic glycoproteins therefore need yeast or mammalian cells."
    },
    {
      sources: ["S13", "S1"],
      front: "How does Cas9 create a genomic edit?",
      back: "A <b>guide RNA</b> base-pairs with the target beside a <b>protospacer adjacent motif</b>, and Cas9 cuts both strands. <b>Non-homologous end joining</b> then knocks out the gene, while a supplied template can drive <b>homology-directed repair</b>."
    },
    {
      sources: ["S13", "S4"],
      front: "What limits bacteriophage therapy in routine practice?",
      back: "A <b>narrow host range</b> demands rapid strain-specific selection, phages are neutralised by <b>neutralising antibodies</b> and lost to <b>phage resistance</b>, and potency assays and <b>Good Manufacturing Practice</b> are not standardised. Randomised evidence remains limited."
    },
    {
      sources: ["S1", "S2", "S13"],
      front: "What is the design–build–test–learn cycle?",
      back: "It designs a <b>genetic circuit</b>, builds it from <b>standard biological parts</b>, measures the phenotype and learns to revise the design. Automation and <b>minimal genomes</b> shorten each round."
    },
    {
      sources: ["S1", "S2", "S12"],
      front: "How is recombinant human insulin made industrially?",
      back: "The insulin gene is expressed in <em>E. coli</em> or <b>Pichia pastoris</b>, and the proinsulin is refolded, enzymatically cleaved and purified by <b>chromatography</b>. Analogues such as <b>lispro</b> are made by altering the amino acid sequence."
    },
    {
      sources: ["S21", "S23", "S12"],
      front: "Why is containment central to engineering microorganisms?",
      back: "Engineered strains could escape, exchange genes or cause unintended harm, so <b>primary and secondary containment</b>, <b>auxotrophic containment</b> or a <b>biological kill switch</b>, and regulatory oversight are required. The same controls support <b>dual-use research of concern</b> review."
    }
  ]);
})();
