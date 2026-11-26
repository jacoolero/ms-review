/* Clinical Chemistry — lipids, part B: advanced lipoprotein analysis and clinical lipidology */
window.QBANK.push(
{
  id: "cc133", domain: "chem-lipid", star: true,
  q: "Describe the laboratory methods used to separate and characterise lipoproteins, and explain what each method actually measures.",
  tags: ["ultracentrifugation", "electrophoresis", "NMR"],
  keypoints: ["density", "preparative ultracentrifugation", "beta-quantification", "analytical ultracentrifugation", "agarose gel electrophoresis", "pre-beta", "broad beta band", "gel-permeation chromatography", "NMR spectroscopy", "ion mobility", "polyanion precipitation", "homogeneous assays", "nephelometry", "particle number", "apo B"],
  answer: `
    <h4>Why separate lipoproteins</h4>
    <p>Lipoproteins differ in <strong>density</strong>, <strong>size</strong> and <strong>surface charge</strong>, so no single method captures all the information clinicians need. Separation methods answer three different questions: how much cholesterol is carried, how many particles are present, and which particles predominate.</p>
    <h4>Density-based methods</h4>
    <ul>
      <li><strong>Preparative ultracentrifugation</strong> floats lipoproteins sequentially at densities of 1.006, 1.019, 1.063 and 1.21 g/mL, yielding chylomicrons, VLDL, IDL, LDL and HDL. It is slow and unsuitable for routine work but remains the basis of the <strong>reference method</strong>.</li>
      <li><strong>Beta-quantification</strong> combines ultracentrifugation with polyanion precipitation of apo B lipoproteins and cholesterol measurement in the fractions; it is the reference for LDL-C.</li>
      <li><strong>Analytical ultracentrifugation</strong> produces real-time flotation profiles and is used in research and lipoprotein(a) work.</li>
    </ul>
    <h4>Charge and size methods</h4>
    <p><strong>Agarose gel electrophoresis</strong> separates lipoproteins by charge: chylomicrons remain at the origin, VLDL migrates <strong>pre-beta</strong>, LDL beta and HDL alpha. A <strong>broad beta band</strong> suggests type III dysbetalipoproteinaemia. <strong>Gel-permeation chromatography</strong> separates by size, while <strong>NMR spectroscopy</strong> and <strong>ion mobility</strong> report particle subclasses and numbers without physical separation.</p>
    <h4>Precipitation and immunoassays</h4>
    <p><strong>Polyanion precipitation</strong> with dextran sulfate or phosphotungstate removes apo B-containing particles and leaves HDL in the supernatant for cholesterol measurement. <strong>Homogeneous assays</strong> use detergents and modified enzymes to measure HDL-C or LDL-C directly. <strong>Nephelometry</strong> or immunoturbidimetry quantifies apo A-I, apo B and Lp(a).</p>
    <h4>Interpretation</h4>
    <p>Cholesterol mass, <strong>particle number</strong> and particle size are not interchangeable. A patient with diabetes may have a normal LDL-C but a high <strong>apo B</strong> because each small dense LDL particle carries less cholesterol. The laboratory should state the method, because direct and calculated results diverge in hypertriglyceridaemia, type III and lipoprotein X.</p>
  `,
  tip: "Anchor each method to the question it answers: cholesterol mass, particle number or particle size.",
  sources: ["C1", "C2", "C10"]
},
{
  id: "cc134", domain: "chem-lipid",
  q: "Explain the analytical chemistry of routine cholesterol and triglyceride measurement, including the main interferences and the glycerol blanking problem.",
  tags: ["CHOD-PAP", "glycerol blanking", "interference"],
  keypoints: ["CHOD-PAP", "cholesterol esterase", "cholesterol oxidase", "peroxidase", "Trinder reaction", "Abell-Kendall", "lipase", "glycerol kinase", "glycerol blanking", "free glycerol", "glycerol kinase deficiency", "triolein", "bilirubin", "haemoglobin", "ascorbate", "freeze-thaw"],
  answer: `
    <h4>Cholesterol measurement</h4>
    <p>Most routine assays use the <strong>CHOD-PAP</strong> sequence. <strong>Cholesterol esterase</strong> hydrolyses cholesteryl esters to free cholesterol; <strong>cholesterol oxidase</strong> converts it to cholest-4-en-3-one and hydrogen peroxide; <strong>peroxidase</strong> then oxidises a chromogen in the <strong>Trinder reaction</strong>, and absorbance is read near 500 nm. The <strong>Abell-Kendall</strong> method, which extracts cholesterol and uses the Liebermann-Burchard reaction, is the reference procedure and anchors traceability.</p>
    <h4>Triglyceride measurement</h4>
    <p><strong>Lipase</strong> releases glycerol and fatty acids. <strong>Glycerol kinase</strong> phosphorylates glycerol to glycerol-3-phosphate, which is oxidised to dihydroxyacetone phosphate and hydrogen peroxide; the Trinder step follows. The assay measures glycerol, not triglyceride mass, and standards are <strong>triolein</strong>-based.</p>
    <h4>Endogenous glycerol and blanking</h4>
    <p><strong>Free glycerol</strong> from heparin therapy, parenteral nutrition, glycerol-containing drugs or <strong>glycerol kinase deficiency</strong> produces falsely high triglyceride results. <strong>Glycerol blanking</strong> runs the reaction without lipase and subtracts the free glycerol signal. It is essential when results guide pancreatitis risk or familial chylomicronaemia care.</p>
    <h4>Interferences</h4>
    <div class="table-wrap"><table>
      <tr><th>Interferent</th><th>Typical effect</th></tr>
      <tr><td><strong>Bilirubin</strong>, <strong>haemoglobin</strong></td><td>Negative spectral interference; falsely low cholesterol and triglyceride</td></tr>
      <tr><td><strong>Ascorbate</strong>, urate</td><td>Consume hydrogen peroxide; falsely low Trinder results</td></tr>
      <tr><td>Lipaemia</td><td>Light scattering; variable bias and sample non-homogeneity</td></tr>
      <tr><td>EDTA, citrate</td><td>Dilution artefact; citrate also lowers calcium but dilutes lipids</td></tr>
    </table></div>
    <h4>Practical points</h4>
    <p>Serum or heparin plasma is preferred; avoid citrate. Cholesterol and HDL-C are stable for days at 4 degrees Celsius, but triglyceride rises with storage and repeated <strong>freeze-thaw</strong> cycles. Report the sample type, and interpret a low cholesterol with a high triglyceride cautiously, because the two assays have different interferences. In a tropical setting, heat and transport delay accelerate triglyceride rise, so separate and refrigerate samples promptly.</p>
  `,
  tip: "Draw the two enzyme cascades and name glycerol blanking before listing interferences.",
  sources: ["C1", "C2"]
},
{
  id: "cc135", domain: "chem-lipid",
  q: "Compare homogeneous direct assays for HDL-cholesterol and LDL-cholesterol with calculated LDL-C. What are their principles, limitations and appropriate uses?",
  tags: ["direct LDL", "homogeneous assay", "lipoprotein X"],
  keypoints: ["Friedewald", "homogeneous direct assays", "detergents", "polyanions", "PEG-modified enzymes", "catalase", "between-method bias", "type III", "lipoprotein X", "chylomicronaemia", "beta-quantification", "Martin-Hopkins", "Sampson", "non-HDL cholesterol", "apo B"],
  answer: `
    <h4>The problem with calculation</h4>
    <p>Friedewald and its successors estimate LDL-C from three measurements and assume a fixed relationship between triglyceride and VLDL cholesterol. That assumption fails when triglyceride is high, when LDL-C is very low, and in type III dysbetalipoproteinaemia or chylomicronaemia. <strong>Homogeneous direct assays</strong> were developed to measure HDL-C and LDL-C without physical separation.</p>
    <h4>How direct assays work</h4>
    <p>Most use <strong>detergents</strong>, <strong>polyanions</strong>, cyclodextrin or <strong>PEG-modified enzymes</strong> that selectively block or solubilise one lipoprotein class. In direct HDL-C assays, apo B-containing particles are masked and their cholesterol is not made available to the enzymes; some formats add <strong>catalase</strong> to consume hydrogen peroxide generated from non-HDL particles. Direct LDL-C assays use similar selectivity in reverse, protecting HDL and VLDL while exposing LDL.</p>
    <h4>Limitations</h4>
    <ul>
      <li>Specificity differs between manufacturers, producing <strong>between-method bias</strong> that matters at low LDL-C targets.</li>
      <li>Abnormal particles interfere: <strong>type III</strong> remnants, <strong>lipoprotein X</strong> in cholestasis, chylomicronaemia, paraproteins and high bilirubin.</li>
      <li>Direct LDL-C is less accurate than <strong>beta-quantification</strong>, still the reference method, and is not perfectly standardised.</li>
      <li>Results may disagree with <strong>Martin-Hopkins</strong> or <strong>Sampson</strong> equations, which are cheap and often adequate.</li>
    </ul>
    <h4>When direct measurement helps</h4>
    <p>Direct assays are useful when triglyceride exceeds about 4.5 mmol/L, when LDL-C is very low on intensive therapy, in suspected type III, and when an equation is invalid. Even then, <strong>non-HDL cholesterol</strong> and <strong>apo B</strong> often give a better estimate of atherogenic burden. Report the method and avoid mixing calculated and direct results in one patient trend. When in doubt, report non-HDL cholesterol, which requires no special assay and captures all atherogenic particles.</p>
  `,
  tip: "State the masking principle, then give two situations where the direct result is still misleading.",
  sources: ["C1", "C2", "C5"]
},
{
  id: "cc136", domain: "chem-lipid", star: true,
  q: "Discuss the apolipoproteins: their structural and metabolic roles, the clinical significance of specific apolipoproteins, and how they are measured.",
  tags: ["apolipoproteins", "apo C-III", "apo E"],
  keypoints: ["amphipathic helices", "apo A-I", "apo B-48", "apo B-100", "apo C-II", "apo C-III", "apo E", "lipoprotein lipase", "remnant", "apo E2/E2", "apo E4", "immunoturbidimetry", "WHO-IFCC", "particle number"],
  answer: `
    <h4>Structural roles</h4>
    <p>Apolipoproteins are amphipathic proteins whose <strong>amphipathic helices</strong> stabilise the lipoprotein surface and direct particle metabolism. They act as enzyme cofactors, receptor ligands and structural scaffolds.</p>
    <div class="table-wrap"><table>
      <tr><th>Apolipoprotein</th><th>Main lipoprotein</th><th>Function</th></tr>
      <tr><td><strong>Apo A-I</strong></td><td>HDL</td><td>Accepts cholesterol via ABCA1; activates LCAT</td></tr>
      <tr><td><strong>Apo B-48</strong></td><td>Chylomicrons</td><td>Intestinal assembly; one per chylomicron</td></tr>
      <tr><td><strong>Apo B-100</strong></td><td>VLDL, IDL, LDL</td><td>Ligand for the LDL receptor; one per particle</td></tr>
      <tr><td><strong>Apo C-II</strong></td><td>Chylomicrons, VLDL</td><td>Activates lipoprotein lipase</td></tr>
      <tr><td><strong>Apo C-III</strong></td><td>VLDL, HDL</td><td>Inhibits lipoprotein lipase and remnant uptake</td></tr>
      <tr><td><strong>Apo E</strong></td><td>Chylomicron remnants, VLDL, HDL</td><td>Ligand for hepatic remnant receptors</td></tr>
    </table></div>
    <h4>C-II, C-III and triglycerides</h4>
    <p><strong>Apo C-II</strong> deficiency causes severe hypertriglyceridaemia because lipoprotein lipase is not activated. <strong>Apo C-III</strong> slows lipolysis and hepatic clearance of remnants; loss-of-function variants lower triglyceride and cardiovascular risk, and apo C-III inhibition is now a therapeutic strategy.</p>
    <h4>Apo E and disease</h4>
    <p><strong>Apo E2/E2</strong> homozygosity predisposes to dysbetalipoproteinaemia when a second factor is present. <strong>Apo E4</strong> is associated with higher LDL-C and Alzheimer disease risk. Apo E genotyping is useful in selected severe mixed hyperlipidaemia.</p>
    <h4>Laboratory measurement</h4>
    <p><strong>Immunoturbidimetry</strong> and nephelometry measure apo A-I and apo B; both are standardised against <strong>WHO-IFCC</strong> reference materials. Because there is one apo B per atherogenic particle, apo B reflects <strong>particle number</strong> and is not affected by fasting. Apo C-III and apo E are mainly research or specialist tests. Interpret apolipoproteins alongside the lipid profile, not in isolation. Apo B is particularly useful when triglyceride is high and LDL-C is calculated, because it is unaffected by the Friedewald assumptions. Apo A-I is measured mainly in research on reverse cholesterol transport.</p>
  `,
  tip: "A table of apolipoprotein, lipoprotein and function is faster and safer than prose here.",
  sources: ["C1", "C8"]
},
{
  id: "cc137", domain: "chem-lipid", star: true,
  q: "Explain non-HDL cholesterol and apolipoprotein B, and discuss what to do when they disagree with LDL-cholesterol.",
  tags: ["non-HDL", "apo B", "discordance"],
  keypoints: ["LDL-C", "non-HDL cholesterol", "apo B", "atherogenic particle number", "discordance", "insulin resistance", "metabolic syndrome", "small dense LDL", "CETP", "Lp(a)", "abetalipoproteinaemia", "fasting", "secondary target", "familial hypercholesterolaemia"],
  answer: `
    <h4>Three ways to express atherogenic burden</h4>
    <p><strong>LDL-C</strong> measures cholesterol mass inside LDL particles. <strong>Non-HDL cholesterol</strong> is total cholesterol minus HDL-C and therefore includes LDL, VLDL, IDL, remnants and Lp(a). <strong>Apo B</strong> counts <strong>atherogenic particle number</strong>, because each VLDL, IDL, LDL and Lp(a) particle carries exactly one apo B molecule.</p>
    <h4>Why they disagree</h4>
    <p><strong>Discordance</strong> is common in insulin resistance, type 2 diabetes, metabolic syndrome, obesity, CKD and hypertriglyceridaemia. Triglyceride enrichment and <strong>CETP</strong> activity produce <strong>small dense LDL</strong> particles that contain less cholesterol but are more atherogenic. LDL-C may therefore look acceptable while non-HDL-C and apo B remain high. The reverse pattern occurs in some patients with large buoyant LDL.</p>
    <div class="table-wrap"><table>
      <tr><th>Measure</th><th>What it captures</th><th>Practical note</th></tr>
      <tr><td>LDL-C</td><td>LDL cholesterol mass</td><td>Calculated or direct; target in most trials</td></tr>
      <tr><td>Non-HDL-C</td><td>All apo B-containing cholesterol</td><td>TC minus HDL-C; no extra cost</td></tr>
      <tr><td>Apo B</td><td>Particle number</td><td>Standardised; fasting not needed</td></tr>
    </table></div>
    <h4>Using them clinically</h4>
    <p>European guidelines use non-HDL-C as a <strong>secondary target</strong>, set about 0.8 mmol/L above the LDL-C target, and apo B as an alternative, especially with high triglyceride. In practice, calculate non-HDL-C in every patient and add apo B when it is available and when LDL-C and non-HDL-C disagree. Neither is needed for the diagnosis of <strong>familial hypercholesterolaemia</strong>, but both refine risk in diabetes and metabolic syndrome.</p>
    <h4>Caveats</h4>
    <p>Non-HDL-C inherits the error of two measurements but is unaffected by fasting. Apo B is not useful in rare <strong>abetalipoproteinaemia</strong>, where it is absent. Do not compare calculated with direct LDL-C in a trend, and remember that <strong>Lp(a)</strong> cholesterol is included in non-HDL-C and apo B but not in LDL-C.</p>
  `,
  tip: "Define all three, then use the diabetes example to explain discordance.",
  sources: ["C8", "C1", "C2"]
},
{
  id: "cc138", domain: "chem-lipid",
  q: "Discuss remnant cholesterol and postprandial lipaemia as cardiovascular risk factors, including how the laboratory can assess them.",
  tags: ["remnant cholesterol", "postprandial", "triglyceride"],
  keypoints: ["remnant cholesterol", "chylomicron remnants", "VLDL remnants", "IDL", "non-HDL cholesterol", "lipoprotein lipase", "GPIHBP1", "apo E", "LDL-receptor-related protein", "insulin resistance", "foam cells", "non-fasting triglyceride", "risk-enhancing factor"],
  answer: `
    <h4>What remnant cholesterol is</h4>
    <p><strong>Remnant cholesterol</strong> is the cholesterol carried in triglyceride-rich remnant particles: chylomicron remnants, VLDL remnants and IDL. It can be estimated as total cholesterol minus HDL-C minus LDL-C, or as triglyceride divided by 5 in mg/dL when the Friedewald assumptions hold. It is therefore part of <strong>non-HDL cholesterol</strong> but invisible in a standard LDL-C result.</p>
    <h4>Postprandial lipaemia</h4>
    <p>After a fat-containing meal, enterocytes secrete chylomicrons and the liver secretes VLDL. <strong>Lipoprotein lipase</strong>, anchored by GPIHBP1 and activated by apo C-II, hydrolyses their triglyceride. Remnants are cleared by hepatic receptors via <strong>apo E</strong> and the LDL-receptor-related protein. In <strong>insulin resistance</strong>, LPL activity falls and remnant clearance slows, so particles persist for many hours.</p>
    <h4>Why remnants are atherogenic</h4>
    <ul>
      <li>They are small enough to cross the endothelium and enter the intima.</li>
      <li>Macrophages take them up through scavenger pathways without normal LDL-receptor feedback, forming <strong>foam cells</strong>.</li>
      <li>They carry cholesterol and oxidised lipids that promote inflammation and endothelial dysfunction.</li>
      <li>High remnant cholesterol clusters with low HDL-C, high triglyceride and small dense LDL.</li>
    </ul>
    <h4>Clinical use</h4>
    <p><strong>Non-fasting triglyceride</strong> is a practical marker of remnant burden and predicts cardiovascular events at least as well as fasting values. Large cohort studies show risk rising across the distribution of remnant cholesterol, without a sharp threshold. Remnant cholesterol is a <strong>risk-enhancing factor</strong> in European guidance. Management targets the cause: weight loss, glycaemic control, alcohol reduction, fibrates or omega-3 for hypertriglyceridaemia, and statins for overall atherogenic risk. Report non-HDL-C when triglyceride is high, because LDL-C then underestimates remnant cholesterol. A standard lipid profile taken after an overnight fast can therefore miss a substantial remnant burden.</p>
  `,
  tip: "Link the remnant particle to foam-cell formation, then to the non-fasting triglyceride.",
  sources: ["C8", "C1"]
},
{
  id: "cc139", domain: "chem-lipid",
  q: "Explain LDL heterogeneity and small dense LDL: how these particles arise, why they are atherogenic, and how they are assessed.",
  tags: ["small dense LDL", "LDL subclass", "insulin resistance"],
  keypoints: ["gradient gel electrophoresis", "analytical ultracentrifugation", "NMR", "pattern A", "pattern B", "small dense LDL", "CETP", "hepatic lipase", "atherogenic lipoprotein phenotype", "proteoglycans", "oxidation", "apo B", "non-HDL cholesterol", "triglyceride-to-HDL ratio", "discordance"],
  answer: `
    <h4>LDL is a family of particles</h4>
    <p>LDL is not a single species. <strong>Gradient gel electrophoresis</strong>, <strong>analytical ultracentrifugation</strong> and <strong>NMR</strong> resolve subclasses that differ in density, size and lipid content. <strong>Pattern A</strong> describes predominantly large, buoyant LDL; <strong>pattern B</strong> describes an excess of <strong>small dense LDL</strong>. Small particles carry less cholesteryl ester and relatively more triglyceride and surface protein.</p>
    <h4>How small dense LDL arises</h4>
    <p>In insulin resistance and hypertriglyceridaemia, the liver secretes more VLDL. <strong>CETP</strong> exchanges VLDL triglyceride for LDL cholesteryl ester, producing triglyceride-rich LDL. <strong>Hepatic lipase</strong> then hydrolyses that triglyceride, shrinking the particle. The result is a triad of high triglyceride, low HDL-C and small dense LDL, often called the <strong>atherogenic lipoprotein phenotype</strong>.</p>
    <h4>Why it matters</h4>
    <ul>
      <li>Small LDL penetrates the intima more readily and binds arterial <strong>proteoglycans</strong> more tightly.</li>
      <li>It is more susceptible to <strong>oxidation</strong> and is retained longer because it binds the LDL receptor less efficiently.</li>
      <li>Each particle carries one apo B, so a high particle number can coexist with a misleadingly normal LDL-C.</li>
    </ul>
    <h4>Measurement and management</h4>
    <p>Routine assays do not measure LDL size. Surrogates include <strong>apo B</strong>, <strong>non-HDL cholesterol</strong> and the <strong>triglyceride-to-HDL ratio</strong>. Direct methods remain research or specialist tools and are not standardised for clinical decision-making. Management addresses insulin resistance: weight loss, exercise, glycaemic control, reduction of alcohol and refined carbohydrate, and treatment of hypertriglyceridaemia. Statins lower LDL-C and particle number but do not specifically correct LDL size; fibrates and lifestyle change shift the distribution toward larger particles. The key clinical point is to recognise <strong>discordance</strong> and treat overall atherogenic burden rather than a single LDL-C value.</p>
  `,
  tip: "Explain the CETP then hepatic lipase sequence; that is what examiners listen for.",
  sources: ["C8", "C1", "C2"]
},
{
  id: "cc140", domain: "chem-lipid",
  q: "Discuss HDL function and the laboratory assays used to assess it. Why does HDL function matter more than HDL-cholesterol concentration?",
  tags: ["HDL function", "efflux capacity", "dysfunctional HDL"],
  keypoints: ["cholesterol efflux", "dysfunctional HDL", "apoB-depleted serum", "ABCA1", "ABCG1", "SR-B1", "HDL inflammatory index", "myeloperoxidase", "paraoxonase-1", "LCAT", "niacin", "CETP inhibitors", "non-HDL-C", "apo B"],
  answer: `
    <h4>HDL-C is not HDL function</h4>
    <p>HDL-C measures the cholesterol mass carried in HDL particles, not what those particles do. HDL has several potentially protective actions: <strong>cholesterol efflux</strong> from macrophages, antioxidant and anti-inflammatory activity, endothelial protection, antithrombotic effects and immune modulation. In inflammation, diabetes and CKD, HDL can become <strong>dysfunctional HDL</strong> and even pro-inflammatory.</p>
    <h4>Cholesterol efflux capacity</h4>
    <p>The best-studied functional assay uses macrophages loaded with labelled cholesterol, exposed to <strong>apoB-depleted serum</strong> as the acceptor. Efflux is measured as the percentage of cholesterol removed. It reflects several pathways: <strong>ABCA1</strong> (to lipid-poor apo A-I), <strong>ABCG1</strong> (to mature HDL) and <strong>SR-B1</strong>. Efflux capacity is inversely associated with cardiovascular events independently of HDL-C.</p>
    <h4>Other functional and compositional assays</h4>
    <ul>
      <li><strong>HDL inflammatory index</strong> — monocyte chemotaxis assay of HDL's anti- or pro-inflammatory effect.</li>
      <li><strong>Myeloperoxidase</strong> and the MPO-to-apo A-I ratio — oxidative modification of HDL.</li>
      <li><strong>Paraoxonase-1</strong> activity — antioxidant enzyme carried on HDL.</li>
      <li><strong>LCAT</strong> activity, sphingosine-1-phosphate and HDL microRNA content — research tools.</li>
    </ul>
    <p>Each assay captures a different aspect of HDL biology, which is why results correlate poorly between laboratories. Efflux capacity has predicted events better than HDL-C in several cohorts.</p>
    <h4>Clinical status</h4>
    <p>None of these assays is standardised or recommended for routine practice. They explain why simply raising HDL-C with <strong>niacin</strong> or <strong>CETP inhibitors</strong> failed, and they are being studied as risk markers and as endpoints for new therapies. For now, measure HDL-C for risk scores and focus treatment on <strong>LDL-C</strong>, <strong>non-HDL-C</strong> and <strong>apo B</strong>. A low HDL-C should prompt a search for insulin resistance, smoking, inflammation and other secondary causes rather than a drug aimed at HDL.</p>
  `,
  tip: "Contrast cholesterol mass with cholesterol efflux, and end with what you would actually order.",
  sources: ["C8", "C1"]
},
{
  id: "cc141", domain: "chem-lipid",
  q: "Discuss NMR lipoprotein profiling and ion mobility testing. What do they add to standard lipid measurement, and what are their limitations?",
  tags: ["NMR", "LDL particle number", "advanced testing"],
  keypoints: ["nuclear magnetic resonance", "methyl signal", "deconvolution", "VLDL", "LDL particle number", "HDL particle number", "ion mobility", "discordance", "apo B", "proprietary", "outcome trial", "non-HDL-C", "familial combined hyperlipidaemia"],
  answer: `
    <h4>Principle</h4>
    <p><strong>Nuclear magnetic resonance</strong> lipoprotein testing applies a magnetic field and radiofrequency pulses to serum. The amplitude of the lipid <strong>methyl signal</strong> undergoes <strong>deconvolution</strong> into contributions from lipoprotein subclasses of different size. The output includes <strong>VLDL</strong>, LDL and HDL subclasses and, most importantly, <strong>LDL particle number</strong> and <strong>HDL particle number</strong>.</p>
    <h4>Ion mobility</h4>
    <p><strong>Ion mobility</strong> is a different proprietary approach: particles are ionised, separated in a gas phase by size and charge, and counted directly. It also reports particle numbers and subclass distribution.</p>
    <h4>What the evidence shows</h4>
    <p>LDL particle number predicts cardiovascular risk and can identify <strong>discordance</strong> when LDL-C looks acceptable but particle number is high, especially in diabetes and hypertriglyceridaemia. However, no <strong>outcome trial</strong> has shown that treating to an NMR-derived target improves outcomes, and guidelines do not recommend these tests routinely. <strong>Apo B</strong> gives similar information at lower cost and is standardised.</p>
    <h4>Limitations</h4>
    <ul>
      <li><strong>Proprietary</strong> calibration and algorithms; results differ between platforms.</li>
      <li>Limited availability and cost, particularly in Philippine practice.</li>
      <li>No evidence that serial testing improves care.</li>
      <li>Risk of over-treatment when a high particle number is interpreted in isolation.</li>
      <li>LDL-C remains the measure used in the major statin trials.</li>
    </ul>
    <h4>Appropriate use</h4>
    <p>NMR or ion mobility profiling may be reasonable in selected patients with premature atherosclerosis and a discordantly low LDL-C, in <strong>familial combined hyperlipidaemia</strong>, or in research. It should not replace a careful history, apo B or <strong>non-HDL-C</strong>. Report the method and avoid comparing results from different platforms in one patient. Results should be interpreted with the overall clinical picture, not as a standalone treatment target.</p>
  `,
  tip: "Say clearly that particle number adds information but has no outcome-trial evidence.",
  sources: ["C8", "C1"]
},
{
  id: "cc142", domain: "chem-lipid",
  q: "Discuss biological variation and preanalytical factors that affect lipid results, and explain how they influence monitoring.",
  tags: ["biological variation", "preanalytical", "reference change value"],
  keypoints: ["posture", "tourniquet", "fasting", "acute illness", "myocardial infarction", "pregnancy", "freeze-thaw", "biological variation", "within-subject variation", "triglyceride", "reference change value", "haemolysis", "non-fasting"],
  answer: `
    <h4>Biological and preanalytical sources</h4>
    <div class="table-wrap"><table>
      <tr><th>Factor</th><th>Effect on lipids</th></tr>
      <tr><td><strong>Posture</strong></td><td>Standing increases lipid concentrations by haemoconcentration</td></tr>
      <tr><td><strong>Tourniquet</strong></td><td>Prolonged application raises cholesterol and triglyceride</td></tr>
      <tr><td><strong>Fasting</strong></td><td>Triglyceride rises after a meal; cholesterol changes little</td></tr>
      <tr><td><strong>Acute illness</strong> or <strong>myocardial infarction</strong></td><td>Cholesterol and LDL-C fall; repeat after recovery</td></tr>
      <tr><td><strong>Pregnancy</strong></td><td>Triglyceride and cholesterol rise, especially in the third trimester</td></tr>
      <tr><td>Storage and <strong>freeze-thaw</strong></td><td>Triglyceride rises with repeated cycles; cholesterol is more stable</td></tr>
    </table></div>
    <h4>Within-person variation</h4>
    <p><strong>Biological variation</strong> differs by analyte. Total cholesterol and HDL-C have modest <strong>within-subject variation</strong>, while <strong>triglyceride</strong> has the largest, which is why a single mildly high triglyceride should be repeated. The <strong>reference change value</strong> combines analytical and within-subject variation: RCV = 2.77 times the square root of (CVa squared plus CVi squared) for a bidirectional 95% change. Because triglyceride is highly variable, its RCV is wide and small changes should not be over-interpreted.</p>
    <h4>Practical standardisation</h4>
    <ul>
      <li>Ask about fasting and record it; a <strong>non-fasting</strong> sample is acceptable for screening but not for evaluating severe hypertriglyceridaemia.</li>
      <li>Sit for at least five minutes before phlebotomy and avoid prolonged tourniquet use.</li>
      <li>Separate serum or plasma promptly; avoid <strong>haemolysis</strong> and repeated freeze-thaw.</li>
      <li>Repeat abnormal results after 6 to 8 weeks, or after acute illness, before starting lifelong therapy.</li>
      <li>Use the same method and, where possible, the same laboratory for monitoring.</li>
    </ul>
    <h4>Why it matters</h4>
    <p>Misinterpreted biological variation causes unnecessary treatment, unnecessary repeat visits and false reassurance. In a rural Philippine setting, transport delay and heat add preanalytical error. Documenting sample handling and fasting status protects both the patient and the laboratory. A fasting sample is still needed when the result will guide treatment of severe hypertriglyceridaemia.</p>
  `,
  tip: "Give an RCV argument for repeating a borderline triglyceride before starting a drug.",
  sources: ["C1", "C2", "C5"]
},
{
  id: "cc143", domain: "chem-lipid", star: true,
  q: "Discuss the metabolic syndrome: diagnostic criteria, pathophysiology, laboratory findings and management.",
  tags: ["metabolic syndrome", "insulin resistance", "waist circumference"],
  keypoints: ["metabolic syndrome", "insulin resistance", "visceral adiposity", "waist circumference", "triglyceride", "HDL-C", "blood pressure", "fasting plasma glucose", "VLDL", "CETP", "small dense LDL", "atherogenic dyslipidaemia", "non-HDL cholesterol", "apo B", "MASLD", "hyperuricaemia"],
  answer: `
    <h4>Definition</h4>
    <p><strong>Metabolic syndrome</strong> is a cluster of interrelated risk factors driven by <strong>insulin resistance</strong> and <strong>visceral adiposity</strong>. The harmonized criteria require any three of five components.</p>
    <div class="table-wrap"><table>
      <tr><th>Component</th><th>Threshold</th></tr>
      <tr><td><strong>Waist circumference</strong></td><td>Population-specific; 90 cm or more in Asian men, 80 cm or more in Asian women</td></tr>
      <tr><td><strong>Triglyceride</strong></td><td>1.7 mmol/L (150 mg/dL) or more</td></tr>
      <tr><td><strong>HDL-C</strong></td><td>Less than 1.0 mmol/L in men, less than 1.3 mmol/L in women</td></tr>
      <tr><td><strong>Blood pressure</strong></td><td>130/85 mmHg or more, or treatment</td></tr>
      <tr><td><strong>Fasting plasma glucose</strong></td><td>5.6 mmol/L (100 mg/dL) or more, or treatment</td></tr>
    </table></div>
    <h4>Pathophysiology</h4>
    <p>Visceral fat releases free fatty acids and inflammatory adipokines into the portal circulation. The liver overproduces <strong>VLDL</strong>, and <strong>CETP</strong> exchange produces <strong>small dense LDL</strong> and low HDL-C. This <strong>atherogenic dyslipidaemia</strong> is captured by <strong>non-HDL cholesterol</strong> and <strong>apo B</strong> better than by LDL-C. Associated features include impaired glucose tolerance, <strong>MASLD</strong>, <strong>hyperuricaemia</strong>, raised hs-CRP and a prothrombotic state.</p>
    <h4>Laboratory assessment</h4>
    <p>Measure a full lipid profile with non-HDL-C, fasting glucose or HbA1c, blood pressure, waist circumference, ALT, uric acid and urine albumin-to-creatinine ratio. Exclude secondary causes such as hypothyroidism and overt diabetes. Metabolic syndrome is not a diagnosis of exclusion and does not require a genetic test.</p>
    <h4>Management</h4>
    <p>Weight loss, physical activity and dietary change are foundational. Statins treat the atherogenic lipid burden; blood pressure and glycaemic control are managed in parallel. Fibrates or omega-3 may be added for severe hypertriglyceridaemia. The laboratory's role is to identify the pattern early, report non-HDL-C, and flag features that change cardiovascular risk category. Central obesity is common in Filipino adults, so opportunistic screening in primary care is worthwhile.</p>
  `,
  tip: "Memorise the five components with Asian waist cut-offs, then explain the VLDL-CETP link.",
  sources: ["C8", "C1", "C2"]
},
{
  id: "cc144", domain: "chem-lipid",
  q: "Compare familial combined hyperlipidaemia with polygenic hypercholesterolaemia, and explain why the distinction from familial hypercholesterolaemia matters.",
  tags: ["familial combined hyperlipidaemia", "polygenic", "apo B"],
  keypoints: ["familial combined hyperlipidaemia", "apo B", "LDL-C", "triglyceride", "polygenic", "insulin resistance", "premature coronary disease", "small dense LDL", "tendon xanthomas", "familial hypercholesterolaemia", "LDL-C-raising alleles", "cascade screening", "non-HDL-C"],
  answer: `
    <h4>Familial combined hyperlipidaemia</h4>
    <p><strong>Familial combined hyperlipidaemia</strong> is one of the commonest inherited dyslipidaemias, affecting perhaps 1 in 100 to 1 in 200 people. It is characterised by raised <strong>apo B</strong> with variable LDL-C and triglyceride: affected relatives may have isolated hypercholesterolaemia, isolated hypertriglyceridaemia or a mixed pattern. It is <strong>polygenic</strong> rather than caused by a single gene, and it clusters with central obesity and <strong>insulin resistance</strong>.</p>
    <h4>Clinical features</h4>
    <ul>
      <li><strong>Premature coronary disease</strong> in the family, often before age 55 in men and 65 in women.</li>
      <li>High apo B, <strong>small dense LDL</strong> and low HDL-C.</li>
      <li>No <strong>tendon xanthomas</strong>, which helps distinguish it from familial hypercholesterolaemia.</li>
      <li>Variable expression within the same family and across visits.</li>
    </ul>
    <h4>Polygenic hypercholesterolaemia</h4>
    <p>Many people with moderately raised LDL-C carry multiple common <strong>LDL-C-raising alleles</strong>, each with a small effect. They lack the very high LDL-C, tendon xanthomas and strong dominant family pattern of <strong>familial hypercholesterolaemia</strong>. A polygenic risk score can support the distinction in specialist centres, but it is not routine. <strong>Cascade screening</strong> of relatives is not as informative as in monogenic FH.</p>
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Familial combined</th><th>Polygenic hypercholesterolaemia</th><th>Familial hypercholesterolaemia</th></tr>
      <tr><td>Main lipid</td><td>Apo B high; LDL and TG variable</td><td>LDL-C moderately high</td><td>LDL-C very high</td></tr>
      <tr><td>Genetics</td><td>Polygenic</td><td>Polygenic</td><td>LDLR, APOB or PCSK9</td></tr>
      <tr><td>Xanthomas</td><td>Absent</td><td>Absent</td><td>Tendon xanthomas</td></tr>
    </table></div>
    <h4>Why the distinction matters</h4>
    <p>Both familial combined hyperlipidaemia and polygenic hypercholesterolaemia increase lifetime risk and warrant statin therapy, but labelling a patient as FH has implications for cascade testing and for children. The laboratory supports the diagnosis with apo B, <strong>non-HDL-C</strong> and family screening, and by excluding secondary causes.</p>
  `,
  tip: "Use the presence of tendon xanthomas and the pattern of apo B to separate the three entities.",
  sources: ["C8", "C1", "C3"]
},
{
  id: "cc145", domain: "chem-lipid", star: true,
  q: "Discuss dysbetalipoproteinaemia (type III hyperlipoproteinaemia): pathogenesis, clinical clues, laboratory diagnosis and treatment.",
  tags: ["dysbetalipoproteinaemia", "apo E2", "remnants"],
  keypoints: ["dysbetalipoproteinaemia", "remnant", "apo E2/E2", "LDL receptor", "LRP", "second hit", "palmar xanthomas", "tuberoeruptive xanthomas", "broad beta band", "VLDL-C to triglyceride ratio", "apo E genotyping", "non-HDL cholesterol", "fibrate", "statin"],
  answer: `
    <h4>Pathogenesis</h4>
    <p><strong>Dysbetalipoproteinaemia</strong>, formerly type III hyperlipoproteinaemia, results from defective clearance of <strong>remnant</strong> lipoproteins. The usual cause is homozygosity for <strong>apo E2/E2</strong>, which binds the LDL receptor and LRP poorly. Because most E2/E2 homozygotes are normolipidaemic, clinical disease requires a <strong>second hit</strong> such as obesity, type 2 diabetes, hypothyroidism, alcohol excess, oestrogen therapy or CKD.</p>
    <h4>Clinical picture</h4>
    <p>Patients may have <strong>palmar xanthomas</strong> (yellow creases of the palms), <strong>tuberoeruptive xanthomas</strong> and premature atherosclerosis affecting coronary and peripheral arteries. Cholesterol and triglyceride are both elevated, often to a similar degree, because remnants carry both. Some patients present only with premature peripheral arterial disease or with xanthomas discovered incidentally.</p>
    <h4>Laboratory diagnosis</h4>
    <ul>
      <li>Lipid profile shows combined hyperlipidaemia; LDL-C is unreliable because the Friedewald equation assumes normal VLDL.</li>
      <li>Lipoprotein electrophoresis may show a <strong>broad beta band</strong>.</li>
      <li>A <strong>VLDL-C to triglyceride ratio above 0.3</strong> in mg/dL after ultracentrifugation supports the diagnosis. Because remnants are cholesterol-rich, this ratio is more informative than either lipid alone.</li>
      <li><strong>Apo E genotyping</strong> confirms E2/E2; exclude hypothyroidism and other secondary causes.</li>
      <li><strong>Non-HDL cholesterol</strong> and apo B better reflect the atherogenic burden.</li>
    </ul>
    <h4>Management</h4>
    <p>Treat the second hit and start a <strong>fibrate</strong> or a <strong>statin</strong>; many patients respond well to either. Diet, weight loss and alcohol reduction are important. Family members may be screened with lipids and apo E genotyping when the index case is confirmed. Avoid reporting a calculated LDL-C as if it were valid in this disorder. Repeat lipids after the second hit is treated to confirm the diagnosis. The lipid profile alone cannot confirm the diagnosis, so genetic testing is often needed.</p>
  `,
  tip: "Palmar xanthomas plus equally high cholesterol and triglyceride should trigger apo E genotyping.",
  sources: ["C8", "C1", "C3"]
},
{
  id: "cc146", domain: "chem-lipid",
  q: "Describe the rare monogenic disorders of lipoprotein metabolism: abetalipoproteinaemia, hypobetalipoproteinaemia, Tangier disease, LCAT deficiency, sitosterolaemia and lysosomal acid lipase deficiency.",
  tags: ["abetalipoproteinaemia", "Tangier", "sitosterolaemia"],
  keypoints: ["abetalipoproteinaemia", "microsomal triglyceride transfer protein", "acanthocytes", "fat-soluble vitamins", "hypobetalipoproteinaemia", "Tangier disease", "ABCA1", "LCAT deficiency", "sitosterolaemia", "ABCG5", "ABCG8", "ezetimibe", "lysosomal acid lipase deficiency", "next-generation sequencing"],
  answer: `
    <h4>Disorders of absent or low apo B</h4>
    <p><strong>Abetalipoproteinaemia</strong> is caused by loss of the <strong>microsomal triglyceride transfer protein</strong>, so the intestine and liver cannot assemble apo B-containing lipoproteins. Cholesterol and triglyceride are extremely low, <strong>acanthocytes</strong> are present, and fat malabsorption causes deficiency of <strong>fat-soluble vitamins</strong>, leading to neuropathy and retinopathy. Treatment is dietary fat restriction with high-dose fat-soluble vitamins and essential fatty acid supplementation. <strong>Hypobetalipoproteinaemia</strong> usually reflects a truncated apo B from an APOB mutation; heterozygotes have low LDL-C and are often healthy.</p>
    <h4>Disorders of HDL</h4>
    <p><strong>Tangier disease</strong> results from <strong>ABCA1</strong> deficiency: HDL-C is near absent, tonsils are orange, and neuropathy and hepatosplenomegaly occur. <strong>LCAT deficiency</strong> causes corneal opacities, anaemia and proteinuria; the partial form is fish-eye disease. These disorders are not treated by raising HDL-C, and a low HDL-C alone is not an indication for drug therapy.</p>
    <h4>Plant sterol and lysosomal disorders</h4>
    <p><strong>Sitosterolaemia</strong> is caused by <strong>ABCG5</strong> or <strong>ABCG8</strong> mutations, with high plant sterols, xanthomas and premature atherosclerosis; <strong>ezetimibe</strong> reduces absorption; plant sterol measurement is available only in specialist laboratories. <strong>Lysosomal acid lipase deficiency</strong> causes hepatosplenomegaly, adrenal calcification and dyslipidaemia, and is treated with enzyme replacement.</p>
    <h4>Laboratory approach</h4>
    <ul>
      <li>Recognise extreme lipid values or a striking family history and consanguinity.</li>
      <li>Measure a full profile, apo B, fat-soluble vitamins and plant sterols when indicated.</li>
      <li>Use <strong>next-generation sequencing</strong> panels for monogenic dyslipidaemias, with genetic counselling for the family.</li>
      <li>Do not apply routine risk equations to untreated extreme phenotypes.</li>
    </ul>
    <p>These conditions are rare but important because specific treatments exist and because they teach the physiology of lipoprotein assembly and clearance.</p>
  `,
  tip: "Organise by low apo B, low HDL, and sterol or lysosomal storage; one defining test each.",
  sources: ["C1", "C3", "C2"]
},
{
  id: "cc147", domain: "chem-lipid",
  q: "Discuss lipid screening and management in children and adolescents, including familial hypercholesterolaemia and the Philippine context.",
  tags: ["pediatric screening", "familial hypercholesterolaemia", "adolescents"],
  keypoints: ["familial hypercholesterolaemia", "universal screening", "ages 9 to 11", "ages 17 to 21", "selective screening", "non-HDL cholesterol", "LDL-C", "Dutch Lipid Clinic criteria", "statins", "ezetimibe", "bile acid sequestrants", "PCSK9 inhibitors", "cascade screening"],
  answer: `
    <h4>Why screen children</h4>
    <p>Fatty streaks and fibrous plaques begin in childhood, and <strong>familial hypercholesterolaemia</strong> affects about 1 in 250 children. A child with FH may have no symptoms until premature coronary disease, so screening is the only way to find them early. Obesity and type 2 diabetes in adolescents add a second, growing burden.</p>
    <h4>Who and when</h4>
    <ul>
      <li><strong>Universal screening</strong> at ages 9 to 11 and again at ages 17 to 21, as recommended by the NHLBI expert panel.</li>
      <li><strong>Selective screening</strong> from age 2 if there is a family history of premature CVD, high cholesterol, or a parent with a known mutation.</li>
      <li>A non-fasting <strong>non-HDL cholesterol</strong> is a practical first test; a fasting lipid profile confirms the pattern.</li>
      <li>Diagnosis of FH uses <strong>LDL-C</strong>, family history and, where available, genetic testing; the <strong>Dutch Lipid Clinic criteria</strong> can be adapted.</li>
    </ul>
    <h4>Management</h4>
    <p>Lifestyle change is universal: reduce saturated fat and sugar-sweetened drinks, increase activity and manage weight. For children with FH, <strong>statins</strong> are recommended from about age 8, with specialist supervision; <strong>ezetimibe</strong> and <strong>bile acid sequestrants</strong> are alternatives or add-ons. <strong>PCSK9 inhibitors</strong> are used in severe cases. Monitor growth, liver enzymes and lipids, and counsel about pregnancy later in life.</p>
    <h4>Philippine context</h4>
    <p>Paediatric lipid guidelines and access to specialist care are limited. Opportunistic screening of children with obesity, a family history of early heart attack or a parent with very high cholesterol is realistic. Every identified child should trigger <strong>cascade screening</strong> of parents and siblings, because finding the parent may be as important as treating the child. A lipid profile in a child should be interpreted against age- and sex-specific values.</p>
  `,
  tip: "Quote the two universal screening ages and the age 8 threshold for statins in FH.",
  sources: ["C8", "C1"]
},
{
  id: "cc148", domain: "chem-lipid",
  q: "Discuss the changes in lipid metabolism during pregnancy and the laboratory approach to pathological hyperlipidaemia in pregnancy.",
  tags: ["pregnancy", "hypertriglyceridaemia", "pancreatitis"],
  keypoints: ["pregnancy", "oestrogen", "VLDL", "lipoprotein lipase", "triglyceride", "third trimester", "Lp(a)", "pancreatitis", "pre-eclampsia", "intrahepatic cholestasis", "gestational diabetes", "hypothyroidism", "plasmapheresis", "statins", "bile acid sequestrants"],
  answer: `
    <h4>Physiological changes</h4>
    <p>Pregnancy is a hyperlipidaemic state. <strong>Oestrogen</strong> and human placental lactogen increase hepatic <strong>VLDL</strong> production and reduce <strong>lipoprotein lipase</strong> activity, so <strong>triglyceride</strong> rises progressively, especially in the <strong>third trimester</strong>. Total cholesterol and LDL-C also rise, and HDL-C peaks before falling late in pregnancy. <strong>Lp(a)</strong> increases. These changes are physiological and should not be treated as a primary dyslipidaemia.</p>
    <h4>When the pattern is pathological</h4>
    <ul>
      <li>Severe hypertriglyceridaemia above about 10 mmol/L predisposes to <strong>pancreatitis</strong>, particularly in familial chylomicronaemia or LPL deficiency.</li>
      <li><strong>Pre-eclampsia</strong> is associated with exaggerated dyslipidaemia, endothelial dysfunction and liver involvement.</li>
      <li><strong>Intrahepatic cholestasis</strong> of pregnancy raises bile acids and liver enzymes; lipids may also rise.</li>
      <li><strong>Gestational diabetes</strong>, <strong>hypothyroidism</strong> and nephrotic syndrome worsen the profile.</li>
    </ul>
    <h4>Laboratory assessment</h4>
    <p>Measure a fasting lipid profile when hypertriglyceridaemia is suspected, together with glucose, HbA1c, TSH, liver tests, bile acids, urine protein and, if pancreatitis is suspected, lipase. Amylase may be unreliable in lipaemic samples. Exclude secondary causes before attributing the pattern to pregnancy alone.</p>
    <h4>Management</h4>
    <p>Dietary fat restriction and medium-chain triglycerides help severe hypertriglyceridaemia. Fibrates and omega-3 are used in specialist care; <strong>plasmapheresis</strong> is reserved for severe cases with pancreatitis. <strong>Statins</strong> were traditionally avoided in pregnancy, but specialist guidance may consider them in selected very-high-risk women, such as those with homozygous FH, after counselling. <strong>Bile acid sequestrants</strong> are an option for hypercholesterolaemia. Recheck lipids 6 to 12 weeks postpartum before making a lifelong diagnosis. Women with a history of hypertriglyceridaemic pancreatitis need preconception counselling and close monitoring. Lipid testing during lactation is safe and does not require interrupting breastfeeding.</p>
  `,
  tip: "Separate physiological gestational hyperlipidaemia from the triglyceride level that threatens the pancreas.",
  sources: ["C8", "C1", "C2"]
},
{
  id: "cc149", domain: "chem-lipid", star: true,
  q: "Discuss statin-associated muscle symptoms and statin intolerance: how they are assessed, the laboratory findings, and the treatment alternatives.",
  tags: ["statin intolerance", "myopathy", "CK"],
  keypoints: ["statin-associated muscle symptoms", "statin intolerance", "nocebo", "creatine kinase", "myopathy", "rhabdomyolysis", "ALT", "hypothyroidism", "gemfibrozil", "CYP3A4", "rechallenge", "ezetimibe", "bempedoic acid", "PCSK9 inhibitor", "inclisiran", "LDL-C"],
  answer: `
    <h4>Definition and prevalence</h4>
    <p><strong>Statin-associated muscle symptoms</strong> are the commonest reason for stopping a statin. True <strong>statin intolerance</strong> is usually defined as the inability to tolerate at least two statins at appropriate doses, and it may be complete or partial. In blinded trials, many symptoms recur on placebo, showing a substantial <strong>nocebo</strong> effect. Muscle symptoms are often accompanied by a normal <strong>creatine kinase</strong>.</p>
    <h4>Assessment</h4>
    <ul>
      <li>Record the timing, distribution and severity of symptoms and whether they resolve after stopping.</li>
      <li>Check <strong>creatine kinase</strong>, ALT, TSH, renal function and vitamin D; review alcohol and drug interactions.</li>
      <li><strong>CK above 10 times the upper limit</strong> with symptoms indicates <strong>myopathy</strong>; <strong>rhabdomyolysis</strong> is a medical emergency.</li>
      <li><strong>ALT</strong> above three times the upper limit warrants investigation and a change in therapy.</li>
      <li>Consider <strong>hypothyroidism</strong>, CKD and interacting drugs such as <strong>gemfibrozil</strong> and <strong>CYP3A4</strong> inhibitors.</li>
    </ul>
    <h4>Management</h4>
    <p>Stop the statin, allow symptoms to settle, then <strong>rechallenge</strong> with a lower dose, an alternate-day regimen or a different statin such as rosuvastatin or pravastatin, which rely less on CYP3A4. If symptoms recur, use <strong>ezetimibe</strong>, <strong>bempedoic acid</strong>, a <strong>PCSK9 inhibitor</strong> or <strong>inclisiran</strong> to reach the LDL-C target. Bempedoic acid raises urate and should be avoided in pregnancy. Do not accept a persistently high LDL-C simply because the patient cannot take a statin.</p>
    <h4>Laboratory role</h4>
    <p>Baseline ALT and CK are reasonable; routine CK monitoring is not. The best measure of adherence and response is the change in <strong>LDL-C</strong>. Document the agent, dose, symptom pattern and rechallenge outcome so that the diagnosis is objective rather than assumed. A documented rechallenge is often more informative than a statin allergy label.</p>
  `,
  tip: "Distinguish nocebo from true intolerance, and always offer a non-statin route to target.",
  sources: ["C8", "C1"]
},
{
  id: "cc150", domain: "chem-lipid",
  q: "Explain the pathogenesis of atherosclerosis and discuss the lipid-related biomarkers and imaging tests used to refine cardiovascular risk.",
  tags: ["atherosclerosis", "oxidized LDL", "biomarkers"],
  keypoints: ["endothelial dysfunction", "oxidized LDL", "VCAM-1", "MCP-1", "scavenger receptors", "foam cells", "matrix metalloproteinases", "plaque rupture", "Lp(a)", "cholesterol efflux", "hs-CRP", "lipoprotein-associated phospholipase A2", "myeloperoxidase", "coronary artery calcium", "residual risk"],
  answer: `
    <h4>Initiation</h4>
    <p>Atherosclerosis begins with <strong>endothelial dysfunction</strong>, increased permeability and retention of apo B-containing lipoproteins in the subendothelial space. <strong>Oxidized LDL</strong> and remnant cholesterol trigger <strong>VCAM-1</strong> and <strong>MCP-1</strong> expression, recruiting monocytes. Monocytes become macrophages and take up modified LDL through <strong>scavenger receptors</strong> such as CD36 and SR-A, which are not feedback-regulated, producing <strong>foam cells</strong> and a fatty streak.</p>
    <h4>Progression</h4>
    <p>Smooth muscle cells migrate from the media, proliferate and deposit extracellular matrix, forming a fibrous cap. Inflammatory cytokines, <strong>matrix metalloproteinases</strong> and death of foam cells thin the cap and enlarge the necrotic core. <strong>Plaque rupture</strong> exposes tissue factor and collagen, activating platelets and the coagulation cascade, which causes acute coronary syndrome or stroke.</p>
    <h4>Lipids and inflammation</h4>
    <p>LDL-C, <strong>Lp(a)</strong> and remnants all contribute. Cholesterol crystals activate the inflammasome and amplify inflammation. HDL can counteract these processes through <strong>cholesterol efflux</strong>, but this function is impaired in diabetes and chronic inflammation.</p>
    <h4>Biomarkers and imaging</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Comment</th></tr>
      <tr><td><strong>hs-CRP</strong></td><td>Risk enhancer; values above 2 mg/L are associated with higher risk</td></tr>
      <tr><td><strong>Lipoprotein-associated phospholipase A2</strong></td><td>Vascular inflammation marker; not routinely recommended</td></tr>
      <tr><td><strong>Myeloperoxidase</strong></td><td>Oxidative stress marker; research and risk stratification</td></tr>
      <tr><td><strong>Coronary artery calcium</strong></td><td>Imaging, not a blood test; reclassifies intermediate risk</td></tr>
    </table></div>
    <h4>Clinical translation</h4>
    <p>Lowering apo B-containing particles with statins, ezetimibe and PCSK9 inhibitors reduces events. Anti-inflammatory therapy with colchicine is now used in selected patients with <strong>residual risk</strong>. The laboratory's contribution is accurate lipid measurement, <strong>apo B</strong> and Lp(a) when indicated, and recognition that residual risk persists after LDL-C is controlled. Plaque imaging with CT or ultrasound can identify high-risk morphology and guide prevention.</p>
  `,
  tip: "Tell the plaque story from endothelial injury to rupture, then be honest about which biomarkers are routine.",
  sources: ["C8", "C1", "C3"]
}
);
