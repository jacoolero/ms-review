(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-m9g-", "m9", ["S1", "S5", "S4"], [
    ["What does the Baltimore scheme classify viruses by?", "Genome type and the route to <b>mRNA</b>; it predicts replication site, enzyme needs and drug targets better than taxonomy alone."],
    ["Which Baltimore class must carry RdRp in the virion?", "<b>Class V, negative-sense ssRNA</b>; the genome cannot be translated, so the virion brings the polymerase."],
    ["Why are non-enveloped viruses more stable in the environment?", "They lack a lipid envelope, so they resist <b>drying, acid and detergents</b> and spread by faecal–oral and fomite routes."],
    ["Which genome feature allows influenza and rotavirus to reassort?", "A <b>segmented genome</b>; co-infection of one cell lets whole segments swap, producing antigenic shift."],
    ["How does receptor expression determine viral tropism?", "A virus enters only cells carrying the right <b>receptor and co-receptor</b>, such as CD4 plus CCR5 for HIV."],
    ["Which cytosolic RNA sensors trigger type I interferon?", "<b>RIG-I and MDA5</b>; they detect cytoplasmic RNA and signal through MAVS to IRF3."],
    ["Where does HSV establish lifelong latency?", "In <b>sensory ganglion neurons</b> as a circular episome expressing latency-associated transcripts."],
    ["Which HBV DNA form explains relapse after antiviral withdrawal?", "Nuclear <b>cccDNA</b>; nucleos(t)ide analogues suppress replication but do not remove the transcriptional template."]
  ]);

  add("fc-m11g-", "m11", ["S1", "S4", "S11"], [
    ["Which receptor does MERS-CoV use to enter cells?", "<b>DPP4</b> (dipeptidyl peptidase 4), which is expressed on bronchial epithelium and explains the severe lower respiratory disease."],
    ["Why does SARS-CoV-2 spread before symptoms appear?", "It replicates efficiently in the <b>upper airway</b>, so infectious virus is shed before cough or fever prompts isolation."],
    ["When is a negative SARS-CoV-2 RT-PCR most misleading?", "Early in illness or with a poor specimen, when <b>viral load</b> is below detection; repeat the test if suspicion is high."],
    ["When should dexamethasone be given in COVID-19?", "Only when the patient needs <b>oxygen or ventilation</b>; it is harmful in mild disease without hypoxia."],
    ["How long must symptoms last to qualify as long COVID?", "At least <b>three months</b> from infection, lasting two months or more and unexplained by another diagnosis."]
  ]);

  add("fc-m12g-", "m12", ["S1", "S4", "S16"], [
    ["Which HIV co-receptor predominates in early infection?", "<b>CCR5</b>; CXCR4-using strains often emerge later and are associated with faster CD4 decline."],
    ["What does the HIV viral set point predict?", "The <b>rate of progression</b>; a higher steady-state viral load after seroconversion means faster CD4 decline."],
    ["Which assay screens for HIV p24 antigen and antibody?", "The <b>fourth-generation antigen/antibody assay</b>; a reactive result needs confirmation by differentiation assay or RNA testing."],
    ["Which antiretroviral combination is preferred first-line HIV therapy?", "<b>Tenofovir/lamivudine plus dolutegravir</b> (TLD), a potent single-tablet regimen with a high resistance barrier."],
    ["When must HIV post-exposure prophylaxis be started?", "Within <b>72 hours</b> of exposure, continued for 28 days, with HIV testing at baseline, six weeks and three months."]
  ]);

  add("fc-m13g-", "m13", ["S1", "S4", "S22"], [
    ["What structural change turns PrPC into PrPSc?", "A shift from <b>alpha helix to beta sheet</b>, making the protein protease-resistant and prone to aggregation."],
    ["What is the typical duration of illness in sporadic CJD?", "About <b>four to six months</b> from onset to death, with rapid dementia and myoclonus."],
    ["Which MRI sign is associated with variant CJD?", "The <b>pulvinar sign</b>, with symmetric hyperintensity in the pulvinar nuclei of the thalamus."],
    ["Which prion disease causes intractable insomnia?", "<b>Fatal familial insomnia</b>, from the D178N PRNP mutation with methionine at codon 129."],
    ["Which test detects prion seeding in CSF with high specificity?", "<b>RT-QuIC</b>, which amplifies misfolded PrP seeds and has specificity approaching 99%."],
    ["Which chemical is used to decontaminate prion-contaminated instruments?", "<b>1M sodium hydroxide</b> or 20,000 ppm hypochlorite, followed by autoclaving at 134 °C for 18 minutes."]
  ]);
})();
