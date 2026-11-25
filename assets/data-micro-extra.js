/* Microbiology — additional essays (bringing each topic to >= 12) */
window.QBANK.push(
{
  id: "f10", domain: "foundations",
  q: "Compare the cell envelope of Gram-positive bacteria, Gram-negative bacteria and mycobacteria. Explain the basis of the Gram and acid-fast stains and how envelope structure determines antibiotic susceptibility.",
  tags: ["cell wall", "Gram stain", "acid-fast", "outer membrane"],
  keypoints: ["thick peptidoglycan", "teichoic acid", "outer membrane", "lipopolysaccharide", "porins", "periplasmic space", "mycolic acids", "arabinogalactan", "crystal violet", "iodine mordant", "decolourisation", "carbol fuchsin", "acid-alcohol", "vancomycin too large", "efflux pumps", "Mycoplasma no cell wall"],
  answer: `
    <div class="table-wrap"><table>
      <tr><th>Feature</th><th>Gram-positive</th><th>Gram-negative</th><th>Mycobacteria</th></tr>
      <tr><td>Peptidoglycan</td><td><strong>Thick</strong> (20–80 nm), many layers</td><td>Thin (2–7 nm), in the periplasm</td><td>Present, linked to arabinogalactan</td></tr>
      <tr><td>Other polymers</td><td><strong>Teichoic</strong> and lipoteichoic acids</td><td><strong>Outer membrane</strong> with <strong>lipopolysaccharide</strong> (lipid A, core, O antigen)</td><td><strong>Arabinogalactan</strong> plus <strong>mycolic acids</strong> (C60–90) and glycolipids (LAM, cord factor)</td></tr>
      <tr><td>Periplasm</td><td>Minimal</td><td><strong>Periplasmic space</strong> — β-lactamases concentrate here</td><td>Present</td></tr>
      <tr><td>Entry of hydrophilic drugs</td><td>Diffuse through the wall</td><td>Through <strong>porins</strong> only</td><td>Very slow — waxy barrier</td></tr>
    </table></div>
    <h4>Gram stain</h4>
    <p><strong>Crystal violet</strong> → <strong>iodine mordant</strong> (large CV–I complex) → <strong>decolourisation</strong> with alcohol–acetone → safranin counterstain. Alcohol dehydrates thick peptidoglycan and traps the complex (purple); in Gram-negatives it dissolves the outer membrane so the thin wall loses the dye (pink). Pitfalls: over-decolourisation, old or antibiotic-treated cultures (Gram-variable).</p>
    <h4>Acid-fast stain</h4>
    <p>Hot <strong>carbol fuchsin</strong> (Ziehl–Neelsen) or phenol-rich cold stain (Kinyoun) penetrates the mycolic acid layer, and the dye then resists <strong>acid-alcohol</strong> decolourisation (3% HCl in ethanol). Weak acid (1% H₂SO₄) is used for partially acid-fast <em>Nocardia</em> and for coccidian oocysts.</p>
    <h4>Consequences for therapy</h4>
    <ul>
      <li><strong>Vancomycin is too large</strong> to cross the Gram-negative outer membrane — hence its Gram-positive-only spectrum.</li>
      <li>Porin loss (OprD) causes carbapenem resistance in <em>Pseudomonas</em>; <strong>efflux pumps</strong> (AcrAB–TolC, MexAB–OprM) give multidrug resistance.</li>
      <li>Polymyxins bind lipid A; lipid A modification (<em>mcr-1</em>) confers colistin resistance.</li>
      <li>Anti-TB drugs exploit the mycobacterial wall: isoniazid and ethionamide block mycolic acid, ethambutol blocks arabinogalactan.</li>
      <li><strong><em>Mycoplasma</em> has no cell wall</strong>, so it is intrinsically resistant to all β-lactams.</li>
    </ul>
  `,
  tip: "Link every envelope feature to a drug consequence — that is what lifts this above a textbook list.",
  sources: ["S1", "S2"]
},
{
  id: "f11", domain: "foundations",
  q: "Describe the bacterial protein secretion systems and explain their role in pathogenesis with examples.",
  tags: ["secretion systems", "T3SS", "T4SS", "effectors"],
  keypoints: ["type I", "type II", "type III injectisome", "type IV", "type V autotransporter", "type VI", "type VII ESX", "Sec pathway", "effector proteins", "Salmonella SPI-1", "Yersinia Yops", "Helicobacter CagA", "Legionella Dot/Icm", "cholera toxin", "ESAT-6", "vaccine and drug targets"],
  answer: `
    <p>Pathogens must move toxins and effectors across their envelope, often directly into host cells. Most systems first use the general <strong>Sec pathway</strong> (or Tat) to cross the inner membrane.</p>
    <div class="table-wrap"><table>
      <tr><th>System</th><th>Mechanism</th><th>Example</th></tr>
      <tr><td><strong>Type I</strong></td><td>One-step ABC transporter plus TolC channel</td><td><em>E. coli</em> α-haemolysin</td></tr>
      <tr><td><strong>Type II</strong></td><td>Two-step: Sec, then an outer-membrane secretin</td><td><strong>Cholera toxin</strong>; <em>Pseudomonas</em> exotoxin A</td></tr>
      <tr><td><strong>Type III injectisome</strong></td><td>Needle injects <strong>effector proteins</strong> straight into the host cytoplasm; related to the flagellum</td><td><strong><em>Salmonella</em> SPI-1</strong> (invasion) and SPI-2 (vacuole survival); <strong><em>Yersinia</em> Yops</strong> (block phagocytosis); <em>Shigella</em>; EPEC Tir pedestals</td></tr>
      <tr><td><strong>Type IV</strong></td><td>Conjugation-related; moves proteins or DNA</td><td><strong><em>Helicobacter</em> CagA</strong> (cag pathogenicity island); <strong><em>Legionella</em> Dot/Icm</strong> (hundreds of effectors); plasmid conjugation spreading resistance</td></tr>
      <tr><td><strong>Type V autotransporter</strong></td><td>The protein carries its own β-barrel</td><td><em>Neisseria</em> IgA1 protease; <em>Bordetella</em> pertactin</td></tr>
      <tr><td><strong>Type VI</strong></td><td>Contractile phage-tail-like spike, often aimed at rival bacteria</td><td><em>V. cholerae</em>, <em>P. aeruginosa</em>, <em>Burkholderia</em></td></tr>
      <tr><td><strong>Type VII ESX</strong></td><td>Mycobacterial/Gram-positive system</td><td><em>M. tuberculosis</em> ESX-1 secreting <strong>ESAT-6</strong> and CFP-10 — phagosome damage; deleted in BCG, which is why IGRAs are BCG-independent</td></tr>
    </table></div>
    <h4>Why this matters clinically</h4>
    <ul>
      <li>Secretion systems are essential for virulence but not for growth, so they are attractive <strong>vaccine and drug targets</strong> ("anti-virulence" therapy) that may exert less selective pressure than antibiotics.</li>
      <li>Their effectors explain disease: SPI-1 explains <em>Salmonella</em> diarrhoea, Dot/Icm explains the intracellular niche of <em>Legionella</em>, CagA explains the gastric cancer risk of some <em>H. pylori</em> strains.</li>
      <li>Type IV systems transfer DNA as well as protein, directly linking pathogenesis to the spread of resistance.</li>
    </ul>
  `,
  tip: "Name one organism and one effector per system; a table beats prose here.",
  sources: ["S1", "S2", "S13"]
},
{
  id: "f12", domain: "foundations",
  q: "Explain bacterial growth kinetics, sporulation and the stress responses that allow survival, and relate them to sterilisation, culture and persistent infection.",
  tags: ["growth curve", "spores", "persisters", "stringent response"],
  keypoints: ["lag phase", "log phase", "stationary phase", "death phase", "generation time", "endospore", "dipicolinic acid", "calcium", "autoclave 121 C", "prions and spores resist", "stringent response", "ppGpp", "stress sigma factor RpoS", "persister cells", "viable but non-culturable", "tolerance not resistance"],
  answer: `
    <h4>Growth curve</h4>
    <ul>
      <li><strong>Lag phase</strong> — adaptation, no division; relevant to inoculum effects.</li>
      <li><strong>Log phase</strong> — constant <strong>generation time</strong> (e.g. ~20 min for <em>E. coli</em>, ~18–24 h for <em>M. tuberculosis</em>, which is why TB cultures take weeks); cells are most susceptible to β-lactams, which need active wall synthesis.</li>
      <li><strong>Stationary phase</strong> — nutrient exhaustion and waste accumulation; toxin and secondary metabolite production; <strong>stress sigma factor RpoS</strong> switches on protective genes.</li>
      <li><strong>Death phase</strong> — progressive loss of viability.</li>
    </ul>
    <h4>Endospores</h4>
    <p><em>Bacillus</em> and <em>Clostridium</em> form an <strong>endospore</strong> in response to starvation: a dehydrated core rich in <strong>calcium</strong>–<strong>dipicolinic acid</strong>, with small acid-soluble proteins protecting DNA and a thick cortex and coat. Spores survive boiling, drying, radiation and disinfectants; they are the reference target of sterilisation — an <strong>autoclave at 121 °C</strong> for 15 min (moist heat), monitored with <em>Geobacillus stearothermophilus</em> spore indicators. Alcohol hand rubs do <strong>not</strong> kill spores, which is why soap and water is required for <em>C. difficile</em>.</p>
    <h4>Stress responses and persistence</h4>
    <ul>
      <li><strong>Stringent response</strong>: amino-acid starvation raises <strong>ppGpp</strong>, shutting down ribosome synthesis and switching on survival genes.</li>
      <li><strong>Persister cells</strong>: a small, genetically identical, metabolically dormant subpopulation that survives antibiotics — <strong>tolerance, not resistance</strong> (the MIC is unchanged). They explain relapse in biofilm, endocarditis and TB, and the need for prolonged therapy.</li>
      <li><strong>Viable but non-culturable</strong> states (e.g. <em>V. cholerae</em> in water, <em>Helicobacter</em>) cause false-negative cultures.</li>
      <li>SOS response and hypermutator states promote the emergence of true resistance.</li>
    </ul>
    <p>Practical links: hold cultures long enough for slow growers, interpret negative cultures cautiously, and expect that antibiotic cure depends on host defences dealing with tolerant cells.</p>
  `,
  tip: "Distinguish tolerance (persisters, MIC unchanged) from resistance — a favourite discriminator.",
  sources: ["S1", "S2", "S13"]
}
);
