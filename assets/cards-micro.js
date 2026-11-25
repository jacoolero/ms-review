/* Flashcards — Medical Microbiology */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-fd-", "foundations", ["S1", "S2"], [
    ["Lipid A is part of…", "<b>LPS</b> (endotoxin) of Gram-negative outer membrane — triggers TLR4."],
    ["Exotoxin with A-B structure that ADP-ribosylates EF-2", "<b>Diphtheria toxin</b> (also <i>Pseudomonas</i> exotoxin A)."],
    ["Toxins that increase cAMP", "<b>Cholera toxin</b>, heat-labile toxin (ETEC), pertussis toxin, anthrax edema factor."],
    ["Superantigen mechanism", "Binds MHC II and TCR Vβ outside the groove → massive cytokine release."],
    ["Koch's postulates — modern molecular version", "Falkow's molecular Koch's postulates (virulence genes)."],
    ["Quorum sensing", "Cell-density signalling via autoinducers (e.g. AHL in Gram-negatives) controlling virulence and biofilms."],
    ["Biofilm significance", "Device infections; tolerance to antibiotics and host defences."],
    ["Horizontal gene transfer mechanisms", "<b>Transformation, transduction, conjugation</b>."]
  ]);

  add("fc-im-", "immunology", ["S1", "S3"], [
    ["TLR recognising LPS", "<b>TLR4</b>."],
    ["TLR recognising flagellin", "<b>TLR5</b>."],
    ["Terminal complement deficiency predisposes to", "Recurrent <b><i>Neisseria</i></b> infection (C5–C9)."],
    ["Th17 cells defend mainly against", "Extracellular bacteria and <b>fungi</b> (Candida) — IL-17."],
    ["IFN-γ/IL-12 axis defects predispose to", "<b>Mycobacterial</b> and <i>Salmonella</i> infections."],
    ["Opsonins", "<b>IgG</b> and <b>C3b</b>."],
    ["First antibody in primary response", "<b>IgM</b>."]
  ]);

  add("fc-gp-", "gpos", ["S1", "S2", "S4"], [
    ["Coagulase-positive staphylococcus", "<b><i>S. aureus</i></b>."],
    ["Basis of methicillin resistance in <i>S. aureus</i>", "<b>mecA</b> → PBP2a (low β-lactam affinity)."],
    ["Toxin associated with CA-MRSA necrotising pneumonia", "<b>Panton–Valentine leukocidin</b>."],
    ["Novobiocin-resistant CoNS causing UTI in young women", "<b><i>S. saprophyticus</i></b>."],
    ["Bacitracin-susceptible, PYR-positive β-haemolytic strep", "<b><i>S. pyogenes</i></b> (group A)."],
    ["CAMP-positive, hippurate-positive strep", "<b><i>S. agalactiae</i></b> (group B)."],
    ["Optochin-sensitive, bile-soluble α-haemolytic strep", "<b><i>S. pneumoniae</i></b>."],
    ["Enterococci grow in", "6.5% NaCl and bile esculin; PYR-positive."],
    ["Tumbling motility, cold enrichment, CAMP-positive rod", "<b><i>Listeria monocytogenes</i></b>."],
    ["Diphtheria toxin gene carried by", "<b>Corynephage β</b> (tox gene); Elek test for toxigenicity."],
    ["<i>C. difficile</i> toxins and test strategy", "Toxins A (TcdA) and B; GDH/toxin EIA ± PCR (two-step)."],
    ["Bacillus anthracis capsule", "<b>Poly-D-glutamic acid</b>; medusa-head colonies, non-haemolytic, non-motile."]
  ]);

  add("fc-gn-", "gneg", ["S1", "S2", "S10"], [
    ["Oxidase-positive Gram-negative diplococci, ferments glucose only", "<b><i>N. gonorrhoeae</i></b>."],
    ["Glucose and maltose fermenting <i>Neisseria</i>", "<b><i>N. meningitidis</i></b>."],
    ["Medium for <i>N. gonorrhoeae</i>", "<b>Thayer–Martin</b> (modified) / Martin–Lewis."],
    ["Lactose non-fermenter producing H₂S on TSI", "<b><i>Salmonella</i></b> (also <i>Proteus</i>, <i>Citrobacter</i>)."],
    ["Test of choice for typhoid in first week", "<b>Blood culture</b>."],
    ["<i>V. cholerae</i> selective medium", "<b>TCBS</b> — yellow colonies; alkaline peptone water enrichment."],
    ["Leptospirosis — Philippines context", "Flood-associated; MAT reference serology; doxycycline prophylaxis after flood exposure."],
    ["Melioidosis agent", "<b><i>Burkholderia pseudomallei</i></b> — safety-pin bipolar staining; Ashdown agar."],
    ["Oxidase-positive non-fermenter, grape odour, pyocyanin", "<b><i>Pseudomonas aeruginosa</i></b>."],
    ["<i>H. influenzae</i> growth factors", "<b>X (haemin) and V (NAD)</b>; satelliting around <i>S. aureus</i>."],
    ["Urease-positive spiral rod in gastric mucosa", "<b><i>Helicobacter pylori</i></b>."],
    ["Best test for <i>H. pylori</i> eradication", "<b>Urea breath test</b> or stool antigen (≥ 4 weeks off antibiotics)."],
    ["Syphilis: treponemal vs non-treponemal tests", "Non-treponemal (RPR/VDRL) for activity; treponemal (TPPA, EIA) for confirmation."],
    ["Atypical pneumonia agents", "<b><i>Mycoplasma</i>, <i>Chlamydophila</i>, <i>Legionella</i></b>."]
  ]);

  add("fc-tb-", "mycobacteria", ["S6", "S1", "S11"], [
    ["Global TB incidence 2024 (WHO 2025 report)", "≈ <b>10.7 million</b> cases; ~1.23 million deaths."],
    ["WHO-recommended initial TB diagnostic test", "<b>Rapid molecular test</b> (e.g. Xpert MTB/RIF Ultra)."],
    ["Xpert detects rifampicin resistance in which gene?", "<b>rpoB</b> (81-bp RRDR)."],
    ["Isoniazid resistance genes", "<b>katG</b> and <b>inhA</b> promoter."],
    ["MDR-TB definition", "Resistant to <b>isoniazid and rifampicin</b>."],
    ["Pre-XDR TB", "MDR/RR-TB + resistance to any <b>fluoroquinolone</b>."],
    ["BPaLM regimen", "<b>Bedaquiline, pretomanid, linezolid, moxifloxacin</b> — 6 months for MDR/RR-TB."],
    ["Acid-fast stain for screening at low power", "<b>Auramine–rhodamine</b> fluorescence."],
    ["Liquid culture system for TB", "<b>MGIT</b>."],
    ["IGRA advantage over TST", "Not affected by <b>BCG</b>; single visit."],
    ["Leprosy: skin smear stain and drug regimen", "Ziehl–Neelsen (modified, 5% H₂SO₄); MDT rifampicin + dapsone + clofazimine."],
    ["Rapidly growing NTM in skin/soft tissue infections", "<b><i>M. abscessus</i>, <i>M. fortuitum</i>, <i>M. chelonae</i></b>."]
  ]);

  add("fc-vi-", "virology", ["S5", "S1", "S16", "S17"], [
    ["HIV diagnostic test detecting antigen and antibody", "<b>4th-generation</b> Ag/Ab (p24 + antibody) assay."],
    ["HIV first-line regimen (WHO)", "<b>TLD</b> — tenofovir, lamivudine, dolutegravir."],
    ["Undetectable = untransmittable", "Sustained viral load &lt; 200 copies/mL — no sexual transmission."],
    ["Dengue NS1 antigen is most useful", "Days <b>1–5</b> of illness."],
    ["Dengue warning signs", "Abdominal pain, persistent vomiting, fluid accumulation, mucosal bleeding, lethargy, liver enlargement, rising Hct with falling platelets."],
    ["Severe dengue mechanism", "<b>Plasma leakage</b>; antibody-dependent enhancement in secondary infection."],
    ["HCV cure test", "<b>Sustained virological response</b> (undetectable RNA 12 weeks after DAA therapy)."],
    ["HPV types causing most cervical cancer", "<b>16 and 18</b>."],
    ["Influenza antigenic shift vs drift", "Shift: reassortment (pandemics). Drift: point mutations (seasonal)."],
    ["Rabies diagnostic test on brain tissue", "<b>Direct fluorescent antibody</b> test."],
    ["Measles — confirmatory test", "Measles <b>IgM</b> or RT-PCR."],
    ["Mpox clade linked to 2024 PHEIC", "<b>Clade Ib</b>."]
  ]);

  add("fc-my-", "mycology", ["S18", "S1", "S2"], [
    ["Germ tube-positive yeast", "<b><i>Candida albicans</i></b> (and <i>C. dubliniensis</i>)."],
    ["Multidrug-resistant yeast causing hospital outbreaks", "<b><i>Candidozyma (Candida) auris</i></b>."],
    ["Encapsulated yeast — India ink and antigen test", "<b><i>Cryptococcus neoformans</i></b>; CrAg lateral flow."],
    ["Acute-angle septate branching hyphae", "<b><i>Aspergillus</i></b> (galactomannan antigen)."],
    ["Broad, pauci-septate, right-angle hyphae", "<b>Mucorales</b> — mucormycosis."],
    ["Thermally dimorphic fungus endemic in Southeast Asia", "<b><i>Talaromyces marneffei</i></b> — red pigment at 25 °C."],
    ["PCP diagnostic stains", "GMS, immunofluorescence; β-D-glucan raised."],
    ["Drug of choice for cryptococcal meningitis induction (WHO)", "Single high-dose <b>liposomal amphotericin B</b> + flucytosine + fluconazole."],
    ["Dermatophyte genera", "<b><i>Trichophyton, Microsporum, Epidermophyton</i></b>."]
  ]);

  add("fc-am-", "amr", ["S7", "S8", "S23"], [
    ["WHO BPPL 2024 critical priority pathogens", "Carbapenem-resistant <b>Enterobacterales</b>, <b><i>A. baumannii</i></b>, third-gen cephalosporin-resistant Enterobacterales, RR-TB."],
    ["ESBLs hydrolyse … but are inhibited by …", "Penicillins and cephalosporins (not cephamycins, carbapenems); inhibited by <b>clavulanate</b>."],
    ["Carbapenemase classes", "A (KPC), B metallo (NDM, VIM, IMP — zinc), D (OXA-48)."],
    ["Metallo-β-lactamase inhibitor in tests", "<b>EDTA</b>."],
    ["Plasmid colistin resistance gene", "<b>mcr-1</b>."],
    ["Vancomycin resistance in enterococci", "<b>vanA</b>/vanB — D-Ala-D-Lac."],
    ["Inducible clindamycin resistance test", "<b>D-test</b> (erm genes)."],
    ["MIC definition", "Lowest concentration that inhibits visible growth."],
    ["Standard AST medium", "<b>Mueller–Hinton</b> agar/broth, 0.5 McFarland."],
    ["CLSI vs EUCAST", "Two breakpoint systems; EUCAST uses 'I' = susceptible, increased exposure."],
    ["Core elements of antimicrobial stewardship", "Leadership, accountability, pharmacy expertise, action, tracking, reporting, education."]
  ]);

  add("fc-dx-", "diagnostics", ["S12", "S21", "S22", "S25"], [
    ["MALDI-TOF identifies organisms by", "<b>Ribosomal protein</b> mass spectra."],
    ["Blood culture volume for adults", "<b>20–30 mL per set</b>, 2–3 sets before antibiotics."],
    ["Contaminant suggested by one of several blood cultures", "Coagulase-negative staphylococci, <i>Cutibacterium</i>, <i>Bacillus</i>, corynebacteria."],
    ["Five moments for hand hygiene", "Before patient, before aseptic task, after body fluid exposure, after patient, after surroundings."],
    ["Airborne precautions needed for", "TB, measles, varicella — N95 + negative-pressure room."],
    ["Sputum quality (Bartlett) — acceptable sample", "&gt; 25 PMNs and &lt; 10 squamous epithelial cells per low-power field."],
    ["Biosafety level for <i>M. tuberculosis</i> culture", "<b>BSL-3</b>."],
    ["Sepsis definition (Sepsis-3)", "Life-threatening organ dysfunction from dysregulated host response; SOFA ≥ 2."]
  ]);
})();
