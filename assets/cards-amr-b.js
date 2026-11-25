/* Flashcards — AMR part B, matched one-to-one with essays a13–a30 */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-amx-", "amr", ["S7", "S8", "S9", "S23"], [
    ["Intrinsic resistance is best defined as…", "A <b>species-wide, chromosomally encoded</b> resistance present before exposure — predictable, but not transferable between species."],
    ["Main efflux family causing multidrug resistance in Gram-negatives", "<b>RND</b> tripartite pumps such as <b>AcrAB–TolC</b> and <b>MexAB–OprM</b>, driven by the proton motive force."],
    ["Porin whose loss causes carbapenem resistance in <i>Pseudomonas</i>", "<b>OprD</b> — reduced imipenem and meropenem uptake, especially when AmpC is also present."],
    ["Mobile genetic element carrying <i>mecA</i> in MRSA", "<b>SCC<i>mec</i></b>; it encodes <b>PBP2a</b>, a transpeptidase with low β-lactam affinity."],
    ["Augmented renal clearance means…", "Renal drug clearance above normal, as in young septic or burned patients — it can make standard <b>β-lactam</b> doses subtherapeutic."],
    ["Vancomycin exposure target for serious MRSA infection", "<b>AUC/MIC 400–600</b>; sample at steady state, with the trough taken immediately before the next dose."],
    ["Low-risk penicillin allergy history suitable for direct oral challenge", "A benign <b>maculopapular rash</b> without mucosal or systemic features; severe cutaneous reactions are never challenged."],
    ["De-escalation means…", "Narrowing to <b>pathogen-directed</b> therapy and stopping redundant agents once cultures and the clinical response are known."],
    ["Key drug property needed for IV-to-oral switch", "<b>High oral bioavailability</b> plus adequate tissue penetration at the site of infection."],
    ["Which infections still justify prolonged therapy?", "<b>Endocarditis, osteomyelitis, CNS infection</b> and undrained abscess — duration follows the site and source control."],
    ["Colistin's molecular target", "<b>Lipid A</b> of lipopolysaccharide; it disrupts the outer membrane, and <b>colistimethate</b> is an inactive prodrug."],
    ["Initial antifungal class for candidaemia", "An <b>echinocandin</b>, with catheter removal and step-down to fluconazole when the isolate is susceptible."],
    ["Oseltamivir resistance mutation in influenza A", "<b>H275Y</b> in neuraminidase; baloxavir resistance is associated with <i>I38T</i>."],
    ["XDR-TB definition", "MDR/RR-TB plus a <b>fluoroquinolone</b> and at least one of <b>bedaquiline or linezolid</b>."],
    ["Pull incentive that delinks revenue from sales volume", "A <b>subscription model</b> that pays for access to an antibiotic rather than for units sold."],
    ["Why avoid ceftriaxone in a jaundiced neonate?", "It displaces <b>bilirubin</b> from albumin; it also precipitates with calcium-containing fluids."],
    ["Cumulative antibiogram inclusion rule", "Use the <b>first isolate per patient per episode</b>, excluding duplicate and surveillance isolates."],
    ["How pneumococcal conjugate vaccine reduces AMR", "It prevents pneumococcal disease and therefore antibiotic use; resistant serotypes fall, although <b>serotype replacement</b> can occur."]
  ]);
})();
