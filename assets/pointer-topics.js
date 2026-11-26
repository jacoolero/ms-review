/* Pointer-based topic map: remaps the existing bank to the 2026 comprehensive-exam pointers
   and removes content that is not covered by those pointers. Loaded after all data/cards. */
(() => {
  const D = [
    // Microbiology (15)
    { id: "m1",  subject: "micro", name: "Host–microorganism interaction & transmission", short: "Host–microbe", color: "#0e6f66" },
    { id: "m2",  subject: "micro", name: "Bacterial classification, morphology, metabolism, growth, genetics & pathogenesis", short: "Bacterial biology", color: "#155e75" },
    { id: "m3",  subject: "micro", name: "Sterilisation, disinfection, antisepsis & vaccination", short: "Sterilisation & vaccines", color: "#b45309" },
    { id: "m4",  subject: "micro", name: "Antimicrobial stewardship & the medical technologist", short: "AMS", color: "#1f7a5c" },
    { id: "m5",  subject: "micro", name: "Genetic engineering & microorganisms in medicine and industry", short: "Genetic engineering", color: "#6d4aa6" },
    { id: "m6",  subject: "micro", name: "Automation in microbiology (BactAlert, Vitek, MALDI-TOF, BioFire)", short: "Micro automation", color: "#3b5b8c" },
    { id: "m7",  subject: "micro", name: "Gram-positive & Gram-negative cocci and bacilli", short: "Gram-positive/negative", color: "#b3362e" },
    { id: "m8",  subject: "micro", name: "Anaerobes, actinomyces, mycobacteria, atypical bacteria & spirochetes", short: "Anaerobes & atypicals", color: "#2f6f9f" },
    { id: "m9",  subject: "micro", name: "Viral classification, structure, replication & pathogenesis", short: "Viral basics", color: "#8a3f66" },
    { id: "m10", subject: "micro", name: "DNA & RNA viruses", short: "DNA/RNA viruses", color: "#9d4b6e" },
    { id: "m11", subject: "micro", name: "Coronaviruses: SARS, MERS-CoV & SARS-CoV-2", short: "Coronaviruses", color: "#a3342c" },
    { id: "m12", subject: "micro", name: "HIV", short: "HIV", color: "#7c3aed" },
    { id: "m13", subject: "micro", name: "Prion disease", short: "Prions", color: "#57534e" },
    { id: "m14", subject: "micro", name: "Superficial, cutaneous & subcutaneous mycoses", short: "Superficial mycoses", color: "#6b7a1f" },
    { id: "m15", subject: "micro", name: "Systemic & opportunistic mycoses", short: "Systemic mycoses", color: "#4d7c0f" },

    // Clinical chemistry (14)
    { id: "c1",  subject: "chem", name: "Laboratory safety, specimen management & QA/QC", short: "Safety & QC", color: "#2f5f9f" },
    { id: "c2",  subject: "chem", name: "Analytical instrumentation & automation", short: "Instrumentation", color: "#1d4ed8" },
    { id: "c3",  subject: "chem", name: "Emerging biomarkers & novel analytes", short: "Emerging biomarkers", color: "#7c3aed" },
    { id: "c4",  subject: "chem", name: "Carbohydrates & diabetes mellitus", short: "Carbohydrates", color: "#b45309" },
    { id: "c5",  subject: "chem", name: "Proteins, amino acids & nonprotein nitrogenous compounds", short: "Proteins & NPN", color: "#6d4aa6" },
    { id: "c6",  subject: "chem", name: "Lipid metabolism, lipoproteins & cardiovascular risk", short: "Lipids", color: "#8a3f66" },
    { id: "c7",  subject: "chem", name: "Clinical enzymology", short: "Enzymology", color: "#a3342c" },
    { id: "c8",  subject: "chem", name: "Electrolytes & acid–base balance", short: "Electrolytes", color: "#0e7490" },
    { id: "c9",  subject: "chem", name: "Renal function & kidney biomarkers", short: "Renal", color: "#1f7a5c" },
    { id: "c10", subject: "chem", name: "Hepatic function & liver disease", short: "Liver", color: "#6b7a1f" },
    { id: "c11", subject: "chem", name: "Endocrinology & hormone analysis", short: "Endocrine", color: "#b3362e" },
    { id: "c12", subject: "chem", name: "Therapeutic drug monitoring", short: "TDM", color: "#3b5b8c" },
    { id: "c13", subject: "chem", name: "Clinical toxicology", short: "Toxicology", color: "#57534e" },
    { id: "c14", subject: "chem", name: "Molecular diagnostics & genomics", short: "Molecular", color: "#9333ea" },

    // Immunohematology (6)
    { id: "b1", subject: "ih", name: "Blood groups: ABO, Rh, Lewis, MNS, Lutheran, Duffy, Kidd, Kell, P-p & I-i", short: "Blood groups", color: "#a3342c" },
    { id: "b2", subject: "ih", name: "Antibody screening & identification", short: "Antibody screen/ID", color: "#2f5f9f" },
    { id: "b3", subject: "ih", name: "Pre-transfusion & compatibility testing", short: "Compatibility", color: "#0e6f66" },
    { id: "b4", subject: "ih", name: "Donor screening, selection, deferrals & adverse effects", short: "Donors", color: "#b45309" },
    { id: "b5", subject: "ih", name: "Component preparation, selection, indications & increments", short: "Components", color: "#1f7a5c" },
    { id: "b6", subject: "ih", name: "Transfusion-transmitted diseases, reactions & resolutions", short: "TTD & reactions", color: "#6d4aa6" },

    // Parasitology (10)
    { id: "p1",  subject: "para", name: "Schistosoma japonicum", short: "S. japonicum", color: "#2f6f9f" },
    { id: "p2",  subject: "para", name: "Echinococcus", short: "Echinococcus", color: "#b45309" },
    { id: "p3",  subject: "para", name: "Echinostoma", short: "Echinostoma", color: "#6b7a1f" },
    { id: "p4",  subject: "para", name: "Sarcocystis", short: "Sarcocystis", color: "#8a5a1f" },
    { id: "p5",  subject: "para", name: "Toxocara", short: "Toxocara", color: "#a05a2c" },
    { id: "p6",  subject: "para", name: "Strongyloides", short: "Strongyloides", color: "#0e7490" },
    { id: "p7",  subject: "para", name: "Taenia", short: "Taenia", color: "#a3342c" },
    { id: "p8",  subject: "para", name: "Blastocystis", short: "Blastocystis", color: "#7c3aed" },
    { id: "p9",  subject: "para", name: "Scabies", short: "Scabies", color: "#57534e" },
    { id: "p10", subject: "para", name: "History of parasitology & advances in diagnosis", short: "History & advances", color: "#1f7a5c" }
  ];
  window.DOMAINS = D;
  const valid = new Set(D.map(d => d.id));
  const T = o => ((o.q || "") + " " + (o.tags || []).join(" ") + " " + (o.front || "")).toLowerCase();

  function micro(o) {
    const t = T(o), d = o.domain;
    if (d === "virology") {
      if (/prion|cjd|creutzfeld/.test(t)) return "m13";
      if (/\bhiv\b|antiretroviral|cd4|integrase|dolutegravir/.test(t)) return "m12";
      if (/sars-cov|mers-cov|coronavirus|covid/.test(t)) return "m11";
      if (/herpes|hsv|vzv|varicella|ebv|epstein|cmv|cytomegalo|hpv|papilloma|hepatitis|influenza|measles|polio|rabies|dengue|zika|yellow fever|norovirus|rotavirus|rsv|respiratory syncytial|metapneumo|adenovirus|parvovirus|pox|mpox|htlv|arbovirus|enterovirus|antiviral/.test(t)) return "m10";
      if (/replication|baltimore|classification|structure|pathogenesis|latency|persistence|interferon/.test(t)) return "m9";
      return "m10";
    }
    if (d === "mycology") return /candidaemia|invasive candid|auris|aspergill|cryptococc|mucor|pneumocystis|histoplasm|blastomyc|coccidio|systemic|opportunistic/.test(t) ? "m15" : "m14";
    if (d === "foundations") {
      if (/sterili|disinfect|antisep|autoclave|vaccin|immunization|toxoid/.test(t)) return "m3";
      if (/crispr|genetic engineering|recombinant|phage|biotech|synthetic|cloning/.test(t)) return "m5";
      if (/host|transmission|colonization|microbiota|adherence|invasion|biofilm|toxin|immune evasion|damage/.test(t)) return "m1";
      return "m2";
    }
    if (d === "immunology") return /vaccin|immunization|adjuvant/.test(t) ? "m3" : "m1";
    if (d === "gpos" || d === "gneg") return /anaerob|actinomyces|nocardia|spirochete|borrelia|leptospira|treponema|mycoplasma|chlamydia|rickettsia|atypical|syphilis/.test(t) ? "m8" : "m7";
    if (d === "mycobacteria") return "m8";
    if (d === "amr") return "m4";
    if (d === "diagnostics") return /sterili|disinfect|antisep/.test(t) ? "m3" : "m6";
    return "m2";
  }

  function chem(o) {
    const t = T(o), d = o.domain;
    if (/molecular|genomic|\bpcr\b|sequencing|\bngs\b/.test(t)) return "c14";
    if (/instrument|automation|automated|analyz|spectrophotomet|chromatograph|mass spec|electrode/.test(t)) return "c2";
    if (/emerging biomarker|novel analyte|tumor marker|ctdna|microrna/.test(t)) return "c3";
    if (d === "chem-qc") return "c1";
    if (d === "chem-carb") return "c4";
    if (d === "chem-lipid") return "c6";
    if (d === "chem-protein") return /enzym|troponin|\bck\b|\bast\b|\balt\b|\balp\b|\bggt\b|amylase|lipase/.test(t) ? "c7" : "c5";
    if (d === "chem-renal") return /sodium|potassium|chloride|acid.base|anion gap|osmol|electrolyte/.test(t) ? "c8" : "c9";
    if (d === "chem-liver") return /enzym|\bast\b|\balt\b|\balp\b|\bggt\b/.test(t) ? "c7" : "c10";
    if (d === "chem-endo") return "c11";
    if (d === "chem-tox") return /toxic|poison|lead|mercury|alcohol|drug screen|acetaminophen|salicylate/.test(t) ? "c13" : "c12";
    return "c1";
  }

  function ih(o) {
    const t = T(o), d = o.domain;
    if (d === "ih-groups") return "b1";
    if (d === "ih-testing") return /crossmatch|compatib|pretransfusion|pre-transfusion|type and screen|emergency release|\bdat\b/.test(t) ? "b3" : "b2";
    if (d === "ih-hdfn") return null;
    if (d === "ih-reactions") return "b6";
    if (d === "ih-donor") return "b4";
    if (d === "ih-clinical") return /reaction|aiha|hemoly|haemoly|trali|taco/.test(t) ? "b6" : "b5";
    return "b3";
  }

  // Parasitology is the strict list: only the nine named parasites + history/advances.
  const OFF_PARA = /malaria|plasmodium|babesia|entamoeba|giardia|cryptosporidium|cyclospora|cystoisospora|trichomonas|leishmania|leishmaniasis|trypanosoma|trypanosom|toxoplasma|toxoplasm|wuchereria|brugia|onchocerca|onchocerciasis|loa loa|ascaris|hookworm|necator|ancylostoma|trichuris|enterobius|trichinella|anisakis|dracunculus|fasciola|clonorchis|opisthorchis|paragonimus|hymenolepis|diphyllobothrium|dipylidium|spirometra|capillaria|cyclospora|microsporidia|balantidium|dientamoeba|naegleria|acanthamoeba/;
  function para(o) {
    const t = T(o);
    if (/schistosoma|schistosom|oncomelania|carabao/.test(t)) return "p1";
    if (/echinococcus|echinococc|hydatid/.test(t)) return "p2";
    if (/echinostoma/.test(t)) return "p3";
    if (/sarcocystis|sarcocystosis/.test(t)) return "p4";
    if (/toxocara|toxocar|larva migrans/.test(t)) return "p5";
    if (/strongyloides|strongyloid|hyperinfection/.test(t)) return "p6";
    if (/taenia|taeniasis|cysticerc|neurocysticerc/.test(t)) return "p7";
    if (/blastocystis|blastocyst/.test(t)) return "p8";
    if (/scabies|sarcoptes|sarcopt/.test(t)) return "p9";
    if (/amoeb|chagas|trypanosom|onchocer|filariasis|malaria|leishman|toxoplasm|fasciola|clonorch|opisthorch|paragonim|hymenolepis|diphyllobothrium|ascaris|hookworm|trichuris|enterobius|trichinella|anisakis|capillaria|dientamoeba|cyclospora|cystoisospora|microsporidia|balantidium|naegleria|acanthamoeba|trematod|giardia|trichomonas|babesia|cryptosporidium|dipylidium|spargan|spirometra/.test(t)) return null;
    if (/history|taxonomy|nomenclature|advances|new research|diagnos|stool|specimen|stain|serolog|pcr|molecular|antigen|culture|biosafety|quality|reporting|lamp|teleparasitology|eosinophilia/.test(t)) return "p10";
    return null;
  }

  let removedEssays = 0, removedCards = 0;
  window.QBANK = (window.QBANK || []).filter(q => {
    if (valid.has(q.domain)) return true;
    const d = q.domain.startsWith("chem") ? chem(q) : q.domain.startsWith("ih-") ? ih(q) : q.domain.startsWith("para") ? para(q) : micro(q);
    if (!d || !valid.has(d)) { removedEssays++; return false; }
    q.domain = d; return true;
  });
  window.CARDS = (window.CARDS || []).filter(c => {
    if (valid.has(c.domain)) return true;
    const d = c.domain.startsWith("chem") ? chem(c) : c.domain.startsWith("ih-") ? ih(c) : c.domain.startsWith("para") ? para(c) : micro(c);
    if (!d || !valid.has(d)) { removedCards++; return false; }
    c.domain = d; return true;
  });
  window.POINTER_REMAP = { removedEssays, removedCards };
})();




