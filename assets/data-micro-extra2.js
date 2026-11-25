/* Microbiology — additional essays, part 2: immunology & Gram-positive */
window.QBANK.push(
{
  id: "i10", domain: "immunology",
  q: "Describe mucosal immunity and the role of secretory IgA in defence against infection. How do pathogens subvert it, and what are the implications for mucosal vaccines?",
  tags: ["mucosal immunity", "secretory IgA", "MALT", "oral vaccines"],
  keypoints: ["mucosa-associated lymphoid tissue", "Peyer's patches", "M cells", "dimeric IgA", "J chain", "polymeric immunoglobulin receptor", "secretory component", "immune exclusion", "does not activate complement", "IgA1 protease", "antigenic variation", "oral polio vaccine", "rotavirus vaccine", "live attenuated intranasal influenza", "mucosal adjuvants", "IgA deficiency"],
  answer: `
    <p>Most pathogens enter at a mucosal surface, so the <strong>mucosa-associated lymphoid tissue</strong> (MALT: gut GALT with <strong>Peyer's patches</strong>, respiratory, nasal and urogenital tissue) is the first adaptive barrier.</p>
    <h4>How secretory IgA works</h4>
    <ol>
      <li>Antigen is sampled by <strong>M cells</strong> over Peyer's patches and by dendritic cells.</li>
      <li>B cells class-switch to IgA under TGF-β, IL-10, BAFF and retinoic acid, and home back to the lamina propria (via α4β7 and CCR9).</li>
      <li>Plasma cells secrete <strong>dimeric IgA</strong> joined by the <strong>J chain</strong>.</li>
      <li>The <strong>polymeric immunoglobulin receptor</strong> transports it across the epithelium; the cleaved receptor remains as the <strong>secretory component</strong>, which protects IgA from proteolysis.</li>
    </ol>
    <p>Functions: <strong>immune exclusion</strong> (agglutination and entrapment in mucus), neutralisation of toxins and viruses, intracellular neutralisation during transcytosis, and shaping the microbiota. Importantly, secretory IgA <strong>does not activate complement</strong> well, so it clears pathogens without inflammation.</p>
    <h4>Pathogen subversion</h4>
    <ul>
      <li><strong>IgA1 protease</strong>: <em>Neisseria</em>, <em>H. influenzae</em>, <em>S. pneumoniae</em> cleave IgA in the hinge region, leaving Fab fragments that block rather than clear.</li>
      <li><strong>Antigenic variation</strong> of surface adhesins (gonococcal pili, <em>Giardia</em> VSPs).</li>
      <li>Capsules and biofilm limit IgA access; some viruses exploit pIgR-independent entry.</li>
    </ul>
    <h4>Implications for vaccines</h4>
    <p>Parenteral vaccines induce mainly systemic IgG and often prevent disease without blocking colonisation. Mucosal vaccines — <strong>oral polio vaccine</strong>, <strong>rotavirus vaccine</strong>, oral cholera vaccine, <strong>live attenuated intranasal influenza</strong> — generate secretory IgA and local memory, reducing transmission. Barriers are antigen degradation, tolerance and the need for safe <strong>mucosal adjuvants</strong>. <strong>IgA deficiency</strong> (the commonest primary immunodeficiency) illustrates the system: recurrent respiratory and gut infections, giardiasis, and anti-IgA antibodies causing transfusion anaphylaxis.</p>
  `,
  tip: "The pIgR / secretory component story and IgA1 protease are the two details that earn marks.",
  sources: ["S1", "S3", "S11"]
},
{
  id: "i11", domain: "immunology",
  q: "Discuss immune reconstitution inflammatory syndrome (IRIS): mechanism, clinical patterns, diagnosis and management.",
  tags: ["IRIS", "HIV", "ART", "tuberculosis", "cryptococcus"],
  keypoints: ["antiretroviral therapy", "restored pathogen-specific immunity", "paradoxical IRIS", "unmasking IRIS", "low CD4 count", "high pathogen burden", "rapid viral load fall", "tuberculosis IRIS", "cryptococcal IRIS", "diagnosis of exclusion", "exclude treatment failure", "corticosteroids", "timing of ART", "lumbar puncture pressure", "do not stop ART"],
  answer: `
    <h4>Mechanism</h4>
    <p>After <strong>antiretroviral therapy</strong> starts, <strong>restored pathogen-specific immunity</strong> reacts against antigens of an existing (often subclinical) infection, producing inflammation that looks like clinical deterioration. Drivers: dysregulated Th1 responses, high antigen load and imbalanced regulatory T cells.</p>
    <div class="table-wrap"><table>
      <tr><th>Pattern</th><th>Definition</th></tr>
      <tr><td><strong>Paradoxical IRIS</strong></td><td>A known, treated infection worsens after ART begins</td></tr>
      <tr><td><strong>Unmasking IRIS</strong></td><td>A previously undiagnosed infection becomes apparent with exaggerated inflammation</td></tr>
    </table></div>
    <h4>Risk factors</h4>
    <p><strong>Low CD4 count</strong> (&lt;50–100/µL), <strong>high pathogen burden</strong>, disseminated disease, short interval between starting anti-infective therapy and ART, and a <strong>rapid viral load fall</strong>.</p>
    <h4>Common syndromes</h4>
    <ul>
      <li><strong>Tuberculosis IRIS</strong>: fever, enlarging lymph nodes, worsening infiltrates, new effusions, CNS tuberculomas.</li>
      <li><strong>Cryptococcal IRIS</strong>: recurrent meningitis symptoms with raised pressure; high mortality.</li>
      <li>MAC lymphadenitis, CMV retinitis/uveitis, PML, Kaposi sarcoma flare, hepatitis B/C flares, leprosy reactions.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>IRIS is a <strong>diagnosis of exclusion</strong>. Document ART response (viral load falling, CD4 rising), temporal association, and <strong>exclude treatment failure</strong>, drug resistance, poor adherence, drug reactions, and a new opportunistic infection or malignancy. Culture usually remains negative in paradoxical TB-IRIS; use the INSHI case definitions.</p>
    <h4>Management</h4>
    <ul>
      <li><strong>Do not stop ART</strong> in most cases — continue both ART and anti-infective treatment.</li>
      <li><strong>Corticosteroids</strong> (prednisone ~1.5 mg/kg tapering over 4 weeks) reduce morbidity in TB-IRIS; drain effusions or abscesses; manage raised intracranial pressure with repeated <strong>lumbar puncture pressure</strong> relief in cryptococcal disease.</li>
      <li><strong>Timing of ART</strong> is the key preventive measure: treat TB first and start ART within 2 weeks if CD4 &lt;50, otherwise by 8 weeks; in <strong>cryptococcal meningitis defer ART by 4–6 weeks</strong> (earlier ART increases mortality); screen for cryptococcal antigen and TB before starting ART.</li>
    </ul>
    <p>This is highly relevant in the Philippines, where many patients still present with advanced HIV disease.</p>
  `,
  tip: "State the ART timing rules, especially deferring ART in cryptococcal meningitis.",
  sources: ["S16", "S4", "S11"]
},
{
  id: "i12", domain: "immunology",
  q: "Explain the immunological basis of serological testing: antibody kinetics, avidity, cross-reactivity and the interpretation of IgM and IgG results.",
  tags: ["serology", "IgM", "IgG avidity", "seroconversion"],
  keypoints: ["primary response IgM", "class switching to IgG", "window period", "seroconversion", "paired sera fourfold rise", "convalescent sample", "IgG avidity maturation", "persistent IgM", "polyclonal B-cell activation", "cross-reactivity", "dengue and Zika", "heterophile antibodies", "rheumatoid factor false positive IgM", "prozone effect", "maternal IgG in infants", "IgM does not cross the placenta"],
  answer: `
    <h4>Antibody kinetics</h4>
    <p>In a <strong>primary response IgM</strong> appears within 5–10 days, peaks at 1–2 weeks and declines over 1–3 months; <strong>class switching to IgG</strong> follows, with IgG persisting for years. The interval before antibodies are detectable is the <strong>window period</strong>, during which antigen or nucleic acid tests are needed (e.g. HIV p24/NAT, HBsAg). In a secondary response IgG rises rapidly and IgM may be absent or small.</p>
    <h4>Interpreting results</h4>
    <ul>
      <li><strong>Seroconversion</strong> (negative → positive) or a <strong>paired sera fourfold rise</strong> in titre, with the <strong>convalescent sample</strong> taken 2–4 weeks after the acute one, is the strongest evidence of recent infection.</li>
      <li>A single IgG result shows exposure or vaccination, not timing — of little value in endemic areas.</li>
      <li><strong>IgG avidity maturation</strong> distinguishes recent from past infection: low avidity suggests recent, high avidity excludes infection in the last 3–5 months (used for <em>Toxoplasma</em>, rubella, CMV in pregnancy).</li>
      <li><strong>IgM does not cross the placenta</strong>: IgM in a neonate indicates congenital infection, whereas <strong>maternal IgG in infants</strong> persists for up to 12–18 months and must not be read as infant infection.</li>
    </ul>
    <h4>Causes of misleading results</h4>
    <ul>
      <li><strong>Persistent IgM</strong> for months to years (<em>Toxoplasma</em>, dengue, parvovirus) and IgM re-expression on reinfection.</li>
      <li><strong>Polyclonal B-cell activation</strong> (EBV, malaria) and <strong>rheumatoid factor false positive IgM</strong>.</li>
      <li><strong>Cross-reactivity</strong>: <strong>dengue and Zika</strong> or Japanese encephalitis flaviviruses; treponemal and non-venereal treponematoses; <em>Brucella</em> and <em>Yersinia</em>; heterologous <em>Legionella</em> species.</li>
      <li><strong>Heterophile antibodies</strong> and, in high-titre samples, the <strong>prozone effect</strong> (false-negative RPR in secondary syphilis — dilute and retest).</li>
      <li>Immunosuppressed patients may not mount antibodies at all, so antigen or molecular tests are preferred.</li>
    </ul>
    <p>Report serology with the sampling date, the method and the interpretation; always combine with clinical stage and direct detection where possible.</p>
  `,
  tip: "Fourfold rise, avidity, and 'IgM does not cross the placenta' — three high-yield statements.",
  sources: ["S1", "S3", "S12"]
},
{
  id: "gp11", domain: "gpos",
  q: "Compare the viridans streptococci, Streptococcus gallolyticus (bovis group) and the Streptococcus anginosus group, and discuss their clinical significance.",
  tags: ["viridans streptococci", "S. gallolyticus", "endocarditis", "abscess"],
  keypoints: ["alpha-haemolytic", "optochin resistant", "bile insoluble", "dental procedures", "subacute bacterial endocarditis", "glucans and dextran", "neutropenic bacteraemia", "mitis group", "S. mutans and caries", "S. gallolyticus and colon cancer", "colonoscopy indicated", "anginosus group abscess", "S. intermedius brain abscess", "penicillin with gentamicin", "blood culture contaminant versus pathogen"],
  answer: `
    <p>Viridans streptococci are <strong>alpha-haemolytic</strong>, <strong>optochin resistant</strong> and <strong>bile insoluble</strong>, which separates them from <em>S. pneumoniae</em>; they are also PYR-negative and do not grow in 6.5% NaCl (unlike enterococci). They are normal oral and gut flora, so they are frequent blood culture contaminants — but in the right setting they are serious pathogens. Identification to group level now relies on MALDI-TOF or sequencing (<em>sodA</em>, 16S).</p>
    <div class="table-wrap"><table>
      <tr><th>Group</th><th>Members</th><th>Clinical significance</th></tr>
      <tr><td><strong>Mitis group</strong></td><td><em>S. mitis</em>, <em>S. sanguinis</em>, <em>S. oralis</em></td><td><strong>Subacute bacterial endocarditis</strong> after <strong>dental procedures</strong>; adheres to damaged valves using <strong>glucans and dextran</strong>; <strong>neutropenic bacteraemia</strong> with sepsis or ARDS after chemotherapy or mucositis</td></tr>
      <tr><td>Mutans group</td><td><em>S. mutans</em>, <em>S. sobrinus</em></td><td><strong><em>S. mutans</em> and caries</strong> — acid production on sucrose; endocarditis</td></tr>
      <tr><td>Salivarius group</td><td><em>S. salivarius</em>, <strong><em>S. gallolyticus</em></strong> (formerly <em>S. bovis</em> biotype I)</td><td><strong><em>S. gallolyticus</em> and colon cancer</strong>: endocarditis or bacteraemia is strongly associated with colonic neoplasia, so <strong>colonoscopy is indicated</strong>; also hepatobiliary disease</td></tr>
      <tr><td><strong>Anginosus group</strong></td><td><em>S. anginosus</em>, <em>S. constellatus</em>, <strong><em>S. intermedius</em></strong></td><td><strong>Pyogenic abscesses</strong> rather than endocarditis: dental, liver, lung, and <strong><em>S. intermedius</em> brain abscess</strong>; often with anaerobes</td></tr>
      <tr><td>Nutritionally variant streptococci</td><td><em>Abiotrophia</em>, <em>Granulicatella</em></td><td>Culture-negative endocarditis; need pyridoxal supplementation</td></tr>
    </table></div>
    <h4>Management points</h4>
    <ul>
      <li>Decide whether the isolate is a <strong>blood culture contaminant versus pathogen</strong>: multiple positive sets, a prosthetic or damaged valve, neutropenia or persistent bacteraemia favour true infection.</li>
      <li>Endocarditis: <strong>penicillin with gentamicin</strong> (2 weeks) or penicillin or ceftriaxone alone for 4 weeks; vancomycin if penicillin-allergic. Penicillin resistance is rising, especially in the mitis group and in neutropenic patients — always request MICs.</li>
      <li>Anginosus group infections require <strong>drainage</strong> as well as antibiotics.</li>
      <li>Report <em>S. gallolyticus</em> prominently so that the colon is investigated.</li>
    </ul>
  `,
  tip: "Two must-say associations: S. gallolyticus with colon cancer, S. intermedius with abscess.",
  sources: ["S2", "S4", "S1"]
},
{
  id: "gp12", domain: "gpos",
  q: "Discuss coagulase-negative staphylococci as pathogens of prosthetic devices, and outline the diagnosis and management of prosthetic joint and catheter-related infection.",
  tags: ["coagulase-negative staphylococci", "biofilm", "prosthetic joint", "CLABSI"],
  keypoints: ["S. epidermidis", "polysaccharide intercellular adhesin", "ica operon", "biofilm", "S. lugdunensis aggressive", "mecA methicillin resistance", "multiple positive cultures", "paired quantitative blood cultures", "differential time to positivity", "sonication of explanted prosthesis", "periprosthetic tissue cultures", "alpha-defensin", "rifampicin combination", "device removal", "antibiotic lock therapy"],
  answer: `
    <h4>Why they infect devices</h4>
    <p><strong><em>S. epidermidis</em></strong> and other coagulase-negative staphylococci are skin commensals of low intrinsic virulence whose key weapon is <strong>biofilm</strong>: adhesins bind the device, then <strong>polysaccharide intercellular adhesin</strong> encoded by the <strong><em>ica</em> operon</strong> builds a matrix that resists antibiotics and phagocytes. Most carry <strong><em>mecA</em> methicillin resistance</strong>. Exceptions matter: <strong><em>S. lugdunensis</em> is aggressive</strong>, behaving like <em>S. aureus</em> with destructive native-valve endocarditis, and <em>S. saprophyticus</em> causes cystitis in young women.</p>
    <h4>Distinguishing infection from contamination</h4>
    <ul>
      <li><strong>Multiple positive cultures</strong> with the same species and antibiogram, a short time to positivity, and a compatible clinical picture support true infection.</li>
      <li>For catheter-related bloodstream infection: <strong>paired quantitative blood cultures</strong> (catheter:peripheral ≥3:1) or a <strong>differential time to positivity</strong> ≥2 hours earlier from the catheter hub.</li>
      <li>For prosthetic joints: ≥2 <strong>periprosthetic tissue cultures</strong> (take 3–6), <strong>sonication of the explanted prosthesis</strong> to dislodge biofilm, prolonged incubation (14 days) for indolent organisms, synovial fluid leucocyte count and <strong>alpha-defensin</strong>, plus histology. Stop antibiotics for at least 2 weeks before sampling where safe.</li>
    </ul>
    <h4>Management principles</h4>
    <ol>
      <li><strong>Device removal</strong> is the definitive treatment for established biofilm infection; retention (DAIR — debridement, antibiotics, implant retention) is possible only for early, acute infection with a stable implant.</li>
      <li>Vancomycin or daptomycin empirically; switch to an oxacillin or cefazolin if methicillin-susceptible.</li>
      <li>Add <strong>rifampicin combination</strong> therapy (with a companion drug to prevent resistance) for retained staphylococcal implants, because rifampicin penetrates biofilm.</li>
      <li>Catheters: remove for <em>S. aureus</em>, Candida, mycobacteria or complicated infection; for uncomplicated CoNS, salvage is sometimes attempted with <strong>antibiotic lock therapy</strong> plus systemic therapy.</li>
      <li>Prevention is more effective than treatment: insertion bundles (chlorhexidine, maximal barriers, subclavian site, daily review), antimicrobial-impregnated catheters, and perioperative prophylaxis.</li>
    </ol>
  `,
  tip: "Mention sonication and the differential time to positivity — these show real diagnostic knowledge.",
  sources: ["S4", "S9", "S22"]
}
);
