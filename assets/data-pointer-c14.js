/* Clinical Chemistry — pointer gap: molecular diagnostics & genomics (c14g1–c14g6) */
window.QBANK.push(
{
  id: "c14g1", domain: "c14", star: true,
  q: "Describe nucleic acid extraction and the chemistry of the polymerase chain reaction. Which pre-analytical and reaction variables most often cause failure?",
  tags: ["nucleic acid extraction", "PCR chemistry", "inhibitors", "contamination"],
  keypoints: ["specimen type and lysis", "proteinase K", "silica membrane", "magnetic beads", "inhibitors haem heparin", "A260/280 purity", "internal control", "primers", "dNTPs", "Mg2+ cofactor", "thermostable polymerase", "denaturation annealing extension", "reverse transcription", "hot-start", "dUTP UNG", "carry-over contamination"],
  answer: `
    <p>Molecular testing begins long before the thermal cycler. The result is only as good as the <strong>nucleic acid</strong> extracted from the specimen, so pre-analytical control and reaction chemistry must be planned together.</p>
    <h4>Specimen and extraction</h4>
    <p>Sample type dictates lysis. Whole blood and tissue need <strong>proteinase K</strong> and detergent to release nucleic acid from cells; plasma for viral load must be separated promptly to avoid cell-associated DNA; sputum and stool need mucolytic or bead-beating steps. Extraction by <strong>silica membrane</strong>, <strong>magnetic beads</strong> or phenol–chloroform removes protein and concentrates the target. Inhibitors are the practical enemy: <strong>haem</strong>, <strong>heparin</strong>, excess EDTA, melanin, humic acid and glove powder can all suppress amplification.</p>
    <h4>Checking the extract</h4>
    <ul>
      <li>Yield and purity by UV absorbance: <strong>A260/280</strong> about 1.8 for DNA and 2.0 for RNA; <strong>A260/230</strong> for salt and solvent carry-over.</li>
      <li>Fluorimetry is more specific than UV when the extract is dilute.</li>
      <li>Integrity by gel or capillary electrophoresis when long targets are amplified.</li>
      <li>An <strong>internal control</strong> carried through extraction proves that the whole process worked.</li>
    </ul>
    <p>Elute in a defined volume, store at −20 °C or −80 °C, and avoid repeated freeze–thaw cycles, which fragment long targets and reduce yield.</p>
    <h4>PCR chemistry</h4>
    <p>A reaction needs template, two <strong>primers</strong> flanking the target, <strong>dNTPs</strong>, a thermostable <strong>DNA polymerase</strong>, <strong>Mg2+</strong> as cofactor, buffered salt and nuclease-free water. Cycling has three phases: <strong>denaturation</strong> near 95 °C, <strong>annealing</strong> at a primer-specific temperature, and <strong>extension</strong> near 72 °C. Hot-start enzymes and touchdown protocols reduce mispriming. RNA targets require <strong>reverse transcription</strong> to cDNA first. <strong>dUTP/UNG</strong> chemistry and separated pre- and post-amplification areas control carry-over contamination, the characteristic false-positive of the method.</p>
  `,
  tip: "Separate extraction from amplification, then name the inhibitors and the contamination controls that examiners look for.",
  sources: ["C1", "C10", "C2", "C3"]
},
{
  id: "c14g2", domain: "c14", star: true,
  q: "Explain real-time PCR and melt-curve analysis. How are results quantified, and what quality checks must accompany a reported Cq value?",
  tags: ["real-time PCR", "melt curve", "Cq", "amplification efficiency"],
  keypoints: ["SYBR Green", "hydrolysis probe", "threshold", "Cq Ct", "standard curve", "absolute quantification", "relative quantification", "amplification efficiency", "internal control", "no-template control", "melt curve", "melting temperature", "primer dimer", "single-nucleotide variant", "limit of detection", "digital PCR"],
  answer: `
    <p>Real-time PCR measures product as it accumulates, so the exponential phase — not the end point — carries the quantitative information.</p>
    <h4>Chemistry and reporting</h4>
    <p><strong>SYBR Green</strong> binds any double-stranded DNA, so it is cheap but non-specific; <strong>hydrolysis probes</strong> and hybridisation probes or molecular beacons add sequence specificity and permit multiplexing with different fluorophores. The instrument plots fluorescence against cycle number. The <strong>threshold</strong> is set in the exponential phase, and the cycle at which fluorescence crosses it is the <strong>Cq</strong> (Ct). A low Cq means a high starting copy number. <strong>Absolute quantification</strong> uses a standard curve of known copies; <strong>relative quantification</strong> compares the target with a reference gene and is expressed as a fold change.</p>
    <h4>Quality checks</h4>
    <ul>
      <li>The slope of the standard curve gives <strong>efficiency</strong>; 90–110% is acceptable.</li>
      <li>R² should exceed 0.98 across the reportable range.</li>
      <li>Replicates should agree within about 0.5 Cq.</li>
      <li>A <strong>no-template control</strong> must be negative and an <strong>internal control</strong> positive.</li>
    </ul>
    <h4>Melt-curve analysis</h4>
    <p>After amplification, slow heating with continuous fluorescence measurement produces a melting curve. The derivative plot gives the <strong>melting temperature (Tm)</strong>, determined by GC content, length and sequence. A single sharp peak indicates a specific product; extra peaks indicate primer dimers or non-specific amplification. Tm differences of 1–2 °C can distinguish <strong>single-nucleotide variants</strong>, which is the basis of simple genotyping and resistance screening, but it cannot replace sequencing when the variant must be named.</p>
    <h4>Limits</h4>
    <p>Real-time PCR detects nucleic acid, not viability, and a positive result may reflect colonisation or contamination. Inhibitors shift the Cq, and a late, low-level signal must be interpreted against the assay's <strong>limit of detection</strong>. Digital PCR partitions the reaction into thousands of droplets and counts positive partitions, giving absolute quantification without a standard curve — useful for low-level variants and copy-number work.</p>
  `,
  tip: "Define Cq and threshold precisely, then attach efficiency, controls and Tm to the interpretation.",
  sources: ["C1", "C10", "C2"]
},
{
  id: "c14g3", domain: "c14", star: true,
  q: "Compare Sanger sequencing with next-generation sequencing. When should each be used, and what are the main analytical limitations?",
  tags: ["Sanger sequencing", "next-generation sequencing", "coverage", "variant calling"],
  keypoints: ["chain termination", "dideoxynucleotide", "capillary electrophoresis", "700 to 1000 bp", "gold standard single variant", "15 to 20 percent detection", "massively parallel", "library preparation", "bridge amplification", "sequencing by synthesis", "nanopore", "bioinformatics pipeline", "coverage depth", "Phred score", "variant allele fraction", "orthogonal confirmation"],
  answer: `
    <p>Sanger sequencing and next-generation sequencing answer different questions and occupy different places in the diagnostic pathway.</p>
    <h4>Sanger sequencing</h4>
    <p>The <strong>chain-termination method</strong> uses a DNA polymerase, a primer and deoxynucleotides mixed with a small proportion of fluorescent <strong>dideoxynucleotides</strong>. Incorporation of a dideoxynucleotide stops extension, producing fragments of every possible length. <strong>Capillary electrophoresis</strong> separates them by size and a laser reads the terminal base, giving reads of roughly 700–1000 bp. Sanger remains the <strong>gold standard for single variants</strong>, small insertions and deletions, and confirmation of NGS calls. Its weaknesses are low throughput, a detection limit near 15–20% variant allele fraction, and poor performance on mixed or degraded templates.</p>
    <h4>Next-generation sequencing</h4>
    <p>NGS sequences millions of clonal templates in parallel. <strong>Library preparation</strong> fragments DNA and adds adapters and indexes; clonal amplification occurs on a flow cell or on beads; <strong>sequencing by synthesis</strong> reads fluorescent nucleotides as they are incorporated, while <strong>nanopore</strong> platforms measure ionic current changes as DNA passes a pore. Output passes through a <strong>bioinformatics pipeline</strong> for alignment, variant calling, annotation and filtering. Key metrics are <strong>coverage or depth</strong>, uniformity, read quality (<strong>Phred score</strong>) and variant allele fraction.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Sanger</th><th>NGS</th></tr>
      <tr><td>Scale</td><td>One amplicon</td><td>Panels, exome or genome</td></tr>
      <tr><td>Strength</td><td>Confirms a known variant</td><td>Finds unknown variants</td></tr>
      <tr><td>Weakness</td><td>Low sensitivity in mixtures</td><td>Complex analysis and artefacts</td></tr>
    </table></div>
    <h4>Choosing a test</h4>
    <p>A single hotspot, a known family variant or a confirmation is a Sanger job. Many genes, an exome, a tumour profile or an undiagnosed disorder requires NGS. Long-read platforms resolve repeats, structural variants and phasing. Whatever the platform, reporting needs validated thresholds, orthogonal confirmation of actionable findings, and interpretation by someone who knows the pipeline's limits.</p>
  `,
  tip: "Show throughput and detection limits as the deciding differences, then insist on orthogonal confirmation.",
  sources: ["C1", "C10", "C3"]
},
{
  id: "c14g4", domain: "c14", star: true,
  q: "Discuss the clinical applications of molecular diagnostics in liquid biopsy, inherited disease and pharmacogenomics. What limits their interpretation?",
  tags: ["liquid biopsy", "inherited disease", "pharmacogenomics", "cell-free DNA"],
  keypoints: ["cell-free DNA", "ctDNA", "liquid biopsy", "EGFR T790M", "clonal haematopoiesis", "false negative", "carrier screening", "cell-free fetal DNA", "fetal RHD", "newborn screening", "CYP2C19 clopidogrel", "HLA-B*57:01 abacavir", "TPMT NUDT15", "DPYD fluoropyrimidines", "genetic counselling", "actionable result"],
  answer: `
    <p>Molecular testing has moved from rare inherited disease into everyday chemistry: oncology, prenatal care, newborn screening and drug prescribing all now depend on it.</p>
    <h4>Liquid biopsy</h4>
    <p><strong>Cell-free DNA</strong> circulates in plasma, released mainly by apoptotic cells. In cancer, the tumour-derived fraction — <strong>ctDNA</strong> — carries the same mutations as the tumour. Liquid biopsy is used when tissue is unavailable, to monitor response, and to detect <strong>acquired resistance</strong> such as <em>EGFR</em> T790M. Its limits are biological: tumours that shed little DNA give false negatives, and <strong>clonal haematopoiesis</strong> can produce misleading variants. A negative result therefore does not exclude mutation, and tissue remains the reference standard.</p>
    <h4>Inherited disease and pregnancy</h4>
    <ul>
      <li>Single-gene disorders: cystic fibrosis, thalassaemia, spinal muscular atrophy and triplet-repeat disorders such as Huntington disease.</li>
      <li><strong>Carrier screening</strong> and prenatal diagnosis by chorionic villus sampling or amniocentesis.</li>
      <li><strong>Cell-free fetal DNA</strong> for aneuploidy screening and <strong>fetal RHD</strong> genotyping.</li>
      <li><strong>Newborn screening</strong>, where molecular testing confirms biochemical screens such as <em>PAH</em> variants in phenylketonuria or <em>G6PD</em> variants.</li>
    </ul>
    <h4>Pharmacogenomics</h4>
    <div class="table-wrap"><table>
      <tr><th>Gene</th><th>Drug</th><th>Consequence</th></tr>
      <tr><td><strong>CYP2C19</strong></td><td>Clopidogrel</td><td>Poor metabolisers form less active drug</td></tr>
      <tr><td><strong>HLA-B*57:01</strong></td><td>Abacavir</td><td>Hypersensitivity; screen before first dose</td></tr>
      <tr><td><strong>TPMT/NUDT15</strong></td><td>Thiopurines</td><td>Marrow toxicity; reduce dose</td></tr>
      <tr><td><strong>DPYD</strong></td><td>Fluoropyrimidines</td><td>Severe toxicity; genotype before treatment</td></tr>
    </table></div>
    <p>Testing is useful only if the result changes a decision and arrives in time. Guidelines from the Clinical Pharmacogenetics Implementation Consortium translate genotype into a prescribing recommendation, but local formulary and cost still decide whether testing is offered. In the Philippines, cost, limited laboratory access and absent reimbursement constrain uptake, while G6PD and thalassaemia variants are common enough to justify local panels. Every result needs <strong>genetic counselling</strong> and a clear statement of what it does and does not predict.</p>
  `,
  tip: "Organise by use case, and pair every application with a specific biological reason the test can mislead.",
  sources: ["C1", "C10", "C3", "C19"]
},
{
  id: "c14g5", domain: "c14", star: true,
  q: "Explain molecular testing for infectious diseases. How should viral load, resistance markers and syndromic panels be interpreted and quality-controlled?",
  tags: ["viral load", "molecular infectious disease", "resistance", "syndromic panel"],
  keypoints: ["HIV-1 RNA", "HBV DNA", "HCV RNA", "IU/mL", "lower limit of quantification", "virological failure", "Xpert MTB/RIF Ultra", "rpoB rifampicin resistance", "syndromic panel", "MRSA PCR", "C difficile PCR", "colonisation versus infection", "contamination", "viability", "metagenomic NGS", "RITM"],
  answer: `
    <p>Nucleic acid amplification has become the reference method for many infections because it detects the pathogen directly, earlier than culture or serology and independent of antibody response.</p>
    <h4>Quantitative viral load</h4>
    <p>HIV-1 RNA, HBV DNA and HCV RNA are reported in IU/mL against international standards. The <strong>lower limit of quantification</strong>, not just detection, determines whether a result can guide therapy; "detected but not quantified" is not the same as "not detected". Trends matter more than single values, and assays from different platforms are not interchangeable, so monitoring should use the same assay where possible. In HIV, <strong>virological failure</strong> is a confirmed viral load above 1000 copies/mL on two occasions; in hepatitis B, DNA guides treatment eligibility; in hepatitis C, RNA confirms cure after direct-acting antivirals.</p>
    <h4>Bacterial and syndromic testing</h4>
    <p><strong>Xpert MTB/RIF Ultra</strong> detects <em>Mycobacterium tuberculosis</em> complex and rifampicin resistance (<em>rpoB</em>) in about two hours; line-probe assays or sequencing add isoniazid and fluoroquinolone resistance. <strong>Syndromic panels</strong> detect multiple respiratory, gastrointestinal or cerebrospinal pathogens in one run. MRSA PCR and <em>Clostridioides difficile</em> PCR are rapid but cannot distinguish colonisation from disease, so they are best used with clinical criteria and, for <em>C. difficile</em>, toxin testing.</p>
    <h4>Interpretation and limits</h4>
    <ul>
      <li><strong>Contamination</strong> produces false positives; unidirectional workflow and controls are essential.</li>
      <li>Nucleic acid persists after death of the organism, so a positive test does not prove viability or cure.</li>
      <li>A negative result can reflect poor sampling, inhibitors or a pathogen absent from the panel.</li>
      <li><strong>Metagenomic NGS</strong> is reserved for culture-negative or unusual cases and needs expert interpretation.</li>
    </ul>
    <p>In the Philippines, <strong>RITM</strong> and the Philippine Genome Center provide confirmatory testing, sequencing and outbreak support. Turnaround time, biosafety and result communication decide whether a technically valid assay actually changes care.</p>
  `,
  tip: "Distinguish quantitative monitoring from qualitative detection, then name the colonisation and viability traps.",
  sources: ["C1", "S31", "S12", "C10"]
},
{
  id: "c14g6", domain: "c14", star: true,
  q: "Outline validation, quality control and the ethical and regulatory framework for a molecular diagnostics laboratory.",
  tags: ["validation", "quality control", "ethics", "regulation"],
  keypoints: ["validation versus verification", "accuracy", "precision", "limit of detection", "probit", "analytical specificity", "linearity", "reportable range", "positive and negative controls", "internal control", "no-template control", "dUTP UNG", "external quality assessment", "informed consent", "incidental findings", "RA 10173 Data Privacy Act"],
  answer: `
    <p>A molecular assay is a method, a workflow and an interpretation; validation must cover all three, and governance must cover the consequences of the result.</p>
    <h4>Validation and verification</h4>
    <p>Laboratories validate in-house assays and verify cleared commercial ones before use. CLSI molecular documents (MM01, MM03, MM05, MM06, MM07, MM09) guide the studies: <strong>accuracy</strong> against a reference method or known samples; <strong>precision</strong>, both repeatability and within-laboratory; <strong>analytical sensitivity</strong> and <strong>limit of detection</strong> by probit or replicate testing; <strong>analytical specificity</strong> including cross-reactivity; <strong>linearity</strong> and reportable range; and reference intervals or clinical cut-offs. Establishing the limit of detection with about 20 replicates at several levels gives a defensible claim; a single low positive does not.</p>
    <h4>Quality control</h4>
    <ul>
      <li>Positive and negative controls with each run, plus a weak positive near the limit of detection.</li>
      <li>An <strong>internal control</strong> for extraction and amplification inhibition.</li>
      <li><strong>No-template</strong> and carry-over controls, dUTP/UNG chemistry and separated work areas.</li>
      <li>Participation in <strong>external quality assessment</strong> and trend review of Cq values.</li>
      <li>Documented calibration, reagent lot verification and environmental monitoring.</li>
    </ul>
    <h4>Ethics and regulation</h4>
    <p>Genetic results are predictive, familial and permanent. <strong>Informed consent</strong>, pre- and post-test counselling, confidentiality and a policy for <strong>incidental findings</strong> are not optional. In the Philippines, <strong>RA 10173</strong> (Data Privacy Act) governs personal and sensitive data, RA 9288 covers newborn screening, and DOH AO 2021-0037 requires a licensed laboratory with competent staff; ISO 15189 adds the quality framework. Reports should state the assay's limits, use standard variant nomenclature and recommend confirmation where relevant. The ethical test is whether a patient can understand what the result means before it is used.</p>
  `,
  tip: "Keep validation, QC and governance as three separate headings, and end with the patient's understanding.",
  sources: ["C5", "C11", "C13", "C1"]
}
);
