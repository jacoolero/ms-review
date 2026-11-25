/* Core data: domains, reference library, question bank container. */
window.SUBJECTS = [
  { id: "micro", name: "Advanced Medical Microbiology", short: "Microbiology", mark: "µ", color: "#0e6f66" },
  { id: "chem",  name: "Advanced Clinical Chemistry",   short: "Clinical Chem", mark: "C", color: "#2f5f9f" },
  { id: "ih",    name: "Advanced Immunohematology",     short: "Immunohematology", mark: "B", color: "#a3342c" },
  { id: "para",  name: "Advanced Parasitology",         short: "Parasitology", mark: "P", color: "#8a5a1f" }
];

window.DOMAINS = [
  { id: "foundations",subject: "micro", name: "Foundations & pathogenesis",        short: "Foundations",  color: "#0e6f66" },
  { id: "immunology", subject: "micro", name: "Immunology of infection",           short: "Immunology",   color: "#6d4aa6" },
  { id: "gpos",       subject: "micro", name: "Gram-positive bacteria",            short: "Gram-positive",color: "#b45309" },
  { id: "gneg",       subject: "micro", name: "Gram-negative & atypical bacteria", short: "Gram-negative",color: "#b3362e" },
  { id: "mycobacteria",subject: "micro", name: "Mycobacteria & tuberculosis",      short: "Mycobacteria", color: "#2f6f9f" },
  { id: "virology",   subject: "micro", name: "Virology",                          short: "Virology",     color: "#8a3f66" },
  { id: "mycology",   subject: "micro", name: "Mycology",                          short: "Mycology",     color: "#6b7a1f" },
  { id: "amr",        subject: "micro", name: "Antimicrobial resistance & stewardship", short: "AMR",     color: "#1f7a5c" },
  { id: "diagnostics",subject: "micro", name: "Diagnostics, IPC & emerging infections", short: "Diagnostics", color: "#3b5b8c" },

  { id: "chem-qc",     subject: "chem", name: "Quality, method evaluation & lab management", short: "QC & methods", color: "#2f5f9f" },
  { id: "chem-carb",   subject: "chem", name: "Carbohydrates & diabetes",          short: "Carbohydrates", color: "#b45309" },
  { id: "chem-lipid",  subject: "chem", name: "Lipids & cardiovascular risk",      short: "Lipids",        color: "#8a3f66" },
  { id: "chem-protein",subject: "chem", name: "Proteins, enzymes & markers",       short: "Proteins & enzymes", color: "#6d4aa6" },
  { id: "chem-renal",  subject: "chem", name: "Renal, electrolytes & acid–base",   short: "Renal & acid–base", color: "#1f7a5c" },
  { id: "chem-liver",  subject: "chem", name: "Liver, pancreas & GI",              short: "Liver & GI",    color: "#6b7a1f" },
  { id: "chem-endo",   subject: "chem", name: "Endocrinology",                     short: "Endocrine",     color: "#b3362e" },
  { id: "chem-tox",    subject: "chem", name: "TDM, toxicology, vitamins & trace elements", short: "TDM & tox", color: "#3b5b8c" },

  { id: "ih-groups",   subject: "ih", name: "Immunology, genetics & blood group systems", short: "Blood groups", color: "#a3342c" },
  { id: "ih-testing",  subject: "ih", name: "Antibody detection, identification & compatibility", short: "Pretransfusion testing", color: "#2f5f9f" },
  { id: "ih-hdfn",     subject: "ih", name: "HDFN & perinatal testing",          short: "HDFN",          color: "#8a3f66" },
  { id: "ih-reactions",subject: "ih", name: "Transfusion reactions & transfusion-transmitted infections", short: "Reactions & TTI", color: "#b45309" },
  { id: "ih-donor",    subject: "ih", name: "Donors, components & regulation",   short: "Donors & components", color: "#1f7a5c" },
  { id: "ih-clinical", subject: "ih", name: "Transfusion therapy, AIHA & quality", short: "Clinical & QA", color: "#6d4aa6" },

  { id: "para-intestinal", subject: "para", name: "Intestinal & urogenital protozoa", short: "Intestinal protozoa", color: "#a05a2c" },
  { id: "para-blood",      subject: "para", name: "Blood & tissue protozoa",          short: "Blood & tissue protozoa", color: "#a3342c" },
  { id: "para-nematodes",  subject: "para", name: "Nematodes",                        short: "Nematodes",   color: "#6b7a1f" },
  { id: "para-trematodes", subject: "para", name: "Trematodes",                       short: "Trematodes",  color: "#2f5f9f" },
  { id: "para-cestodes",   subject: "para", name: "Cestodes",                         short: "Cestodes",    color: "#8a3f66" },
  { id: "para-lab",        subject: "para", name: "Diagnostics, vectors & control programmes", short: "Lab & control", color: "#1f7a5c" }
];

window.SOURCES = {
  S1: { text: "Jawetz, Melnick & Adelberg's Medical Microbiology, 28th ed. McGraw Hill; 2022." },
  S2: { text: "Murray PR, Rosenthal KS, Pfaller MA. Medical Microbiology, 9th ed. Elsevier; 2020." },
  S3: { text: "Levinson W. Review of Medical Microbiology & Immunology, 17th ed. McGraw Hill; 2022." },
  S4: { text: "Bennett JE, Dolin R, Blaser MJ. Mandell, Douglas, and Bennett's Principles and Practice of Infectious Diseases, 9th ed. Elsevier; 2020." },
  S5: { text: "Knipe DM, Howley PM, eds. Fields Virology, 7th ed. Wolters Kluwer; 2021." },
  S6: { text: "World Health Organization. Global Tuberculosis Report 2025. Geneva: WHO; 2025.", url: "https://www.who.int/teams/global-tuberculosis-programme/tb-reports" },
  S7: { text: "World Health Organization. Bacterial Priority Pathogens List, 2024. Geneva: WHO; 2024.", url: "https://www.who.int/publications/i/item/9789240093461" },
  S8: { text: "Clinical and Laboratory Standards Institute. M100: Performance Standards for Antimicrobial Susceptibility Testing, 35th ed. (2025) / 36th ed. (2026).", url: "https://clsi.org/shop/standards/m100" },
  S9: { text: "Infectious Diseases Society of America (IDSA) clinical practice guidelines.", url: "https://www.idsociety.org/practice-guideline/practice-guidelines/" },
  S10: { text: "Centers for Disease Control and Prevention. Technical and clinical guidance pages.", url: "https://www.cdc.gov/" },
  S11: { text: "World Health Organization. Consolidated guidelines and fact sheets (HIV, hepatitis, malaria, STIs, IPC).", url: "https://www.who.int/publications" },
  S12: { text: "American Society for Microbiology. Clinical Microbiology Procedures Handbook, 4th ed.; and Manual of Clinical Microbiology, 12th ed." },
  S13: { text: "Clinical Microbiology Reviews; Nature Reviews Microbiology; Lancet Infectious Diseases (review articles).", url: "https://journals.asm.org/journal/cmr" },
  S14: { text: "World Health Organization. GLASS report on antimicrobial resistance surveillance.", url: "https://www.who.int/initiatives/glass" },
  S15: { text: "World Health Organization. World Malaria Report and Guidelines for Malaria.", url: "https://www.who.int/teams/global-malaria-programme" },
  S16: { text: "World Health Organization. Consolidated HIV guidelines and 2025 updated recommendations on HIV clinical management.", url: "https://www.who.int/teams/global-hiv-hepatitis-and-stis-programmes/hiv/treatment" },
  S17: { text: "World Health Organization. Guidelines for the prevention, care and treatment of persons with chronic hepatitis B/C.", url: "https://www.who.int/publications" },
  S18: { text: "World Health Organization. WHO Fungal Priority Pathogens List, 2022.", url: "https://www.who.int/publications/i/item/9789240060241" },
  S19: { text: "World Health Organization. Neglected tropical diseases: fact sheets and elimination roadmaps.", url: "https://www.who.int/health-topics/neglected-tropical-diseases" },
  S20: { text: "Evans L, et al. Surviving Sepsis Campaign: International Guidelines 2021. Crit Care Med. 2021;49(11):e1063â€“e1143.", url: "https://doi.org/10.1097/CCM.0000000000005337" },
  S21: { text: "World Health Organization. Guidelines on core components of infection prevention and control programmes.", url: "https://www.who.int/publications/i/item/9789241549929" },
  S22: { text: "CDC/HICPAC. Guidelines for the prevention of healthcare-associated infections (isolation precautions, CLABSI, CAUTI, VAP).", url: "https://www.cdc.gov/infection-control/hcp/index.html" },
  S23: { text: "World Health Organization. Global action plan on antimicrobial resistance; and One Health joint plan of action.", url: "https://www.who.int/publications/i/item/9789241509763" },
  S24: { text: "European Committee on Antimicrobial Susceptibility Testing (EUCAST). Breakpoint tables and guidance documents.", url: "https://www.eucast.org/" },
  S25: { text: "World Health Organization. Disease outbreak news and epidemic-prone disease fact sheets (mpox, measles, avian influenza, dengue).", url: "https://www.who.int/emergencies/disease-outbreak-news" }
};

window.QBANK = [];
window.CARDS = [];

