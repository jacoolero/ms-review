/* Flashcards — immunology of infection, part B (one per essay i13–i30). */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-imx-", "immunology", ["S1", "S3", "S4"], [
    ["Main function of dendritic cells in infection", "Capture antigen, migrate via <b>CCR7</b> and prime naive T cells; maturation decides immunity versus tolerance."],
    ["How do NK cells recognise missing self?", "Inhibitory <b>KIR</b> and <b>NKG2A</b> receptors lose their <b>MHC class I</b> ligand, releasing NK killing."],
    ["Which Fc receptor transports IgG across the placenta?", "<b>FcRn</b>; it also recycles IgG and protects it from lysosomal degradation."],
    ["Enzyme essential for somatic hypermutation and class switching", "<b>AID</b> (activation-induced cytidine deaminase); deficiency causes a hyper-IgM syndrome."],
    ["Marker that retains T cells in tissues", "<b>CD69</b>, with <b>CD103</b> binding E-cadherin, marks <b>tissue-resident memory</b> T cells."],
    ["Transcription factor defining regulatory T cells", "<b>FoxP3</b>; its loss causes <b>IPEX syndrome</b>."],
    ["Two features of immunosenescence", "Thymic involution reduces naive T cells, while chronic <b>inflammaging</b> raises IL-6 and TNF."],
    ["When does maternal IgG reach the fetus?", "Mainly in the third trimester, by <b>FcRn</b> transport; preterm infants miss much of it."],
    ["Which vaccines are contraindicated in severe immunosuppression?", "<b>Live attenuated vaccines</b>; give <b>inactivated</b> vaccines before immunosuppression instead."],
    ["Classic example of molecular mimicry", "<b>Rheumatic fever</b>: streptococcal M protein cross-reacts with cardiac myosin."],
    ["Biologic that especially reactivates latent TB", "<b>Anti-TNF</b> agents; screen with <b>IGRA</b> and a chest radiograph first."],
    ["Immunological target of hyperacute rejection", "Preformed <b>donor-specific antibody</b> against donor <b>HLA</b> or ABO antigens."],
    ["Which HLA molecule marks invasive trophoblast?", "<b>HLA-G</b>, which engages decidual NK cells and supports tolerance."],
    ["Epigenetic marks of trained immunity", "<b>H3K4me3</b> and <b>H3K27ac</b> at inflammatory gene promoters, with a shift to glycolysis."],
    ["What causes antibody-dependent enhancement?", "<b>Sub-neutralising antibodies</b> promote <b>FcγR-mediated uptake</b> and more infection."],
    ["Cytokine that recruits neutrophils against Candida", "<b>IL-17</b> from Th17 cells; defects cause chronic mucocutaneous candidiasis."],
    ["Cytokines that initiate type 2 immunity", "Epithelial <b>IL-25</b>, <b>IL-33</b> and <b>TSLP</b> activate ILC2 and Th2 responses."],
    ["Enzyme required for NET formation", "<b>PAD4</b> citrullinates histones and drives chromatin decondensation."]
  ]);
})();
