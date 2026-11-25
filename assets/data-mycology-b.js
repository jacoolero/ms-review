/* Mycology — essays part B: cell biology, immunity, clinical syndromes, policy */
window.QBANK.push(
{
  id: "mc13", domain: "mycology", star: true,
  q: "Describe the fungal cell and explain how polarised growth and morphological switching contribute to pathogenesis and to the action of antifungal drugs.",
  tags: ["fungal cell wall", "morphogenesis", "dimorphism", "drug targets"],
  keypoints: ["chitin", "beta-1,3-glucan", "mannoproteins", "ergosterol", "Cdc42 and Rho GTPases", "septins", "apical growth", "hyphal tip", "Efg1 and Cph1", "cAMP-PKA", "farnesol", "Ryp1", "BrlA-AbaA-WetA", "compensatory chitin", "calcofluor white", "biofilm persisters"],
  answer: `
    <h4>Why the fungal cell is different</h4>
    <p>Fungi are eukaryotes, so much of their machinery resembles the human host and selective toxicity is difficult. The decisive difference is the <strong>cell wall</strong>: an inner load-bearing skeleton of <strong>chitin</strong>, a β-1,4-linked polymer of N-acetylglucosamine, and <strong>β-1,3-glucan</strong>, cross-linked and coated with <strong>mannoproteins</strong> and glycoproteins. The plasma membrane contains <strong>ergosterol</strong> instead of cholesterol. Melanin in dematiaceous fungi and the polysaccharide capsule of <em>Cryptococcus</em> are further surface adaptations that resist host defences.</p>
    <h4>Polarity, septation and wall remodelling</h4>
    <p>Fungal growth is apical and polarised. <strong>Cdc42 and Rho GTPases</strong> organise the actin cytoskeleton and the delivery of vesicles; <strong>septins</strong> mark the bud neck and the developing hyphal septum. Wall-synthesising enzymes travel to the <strong>hyphal tip</strong> in an inactive form and are activated only at the surface, so new wall is laid down at the apex while older wall is cross-linked behind it. Because the wall is constantly remodelled, exposure to an echinocandin triggers <strong>compensatory chitin synthesis</strong>, which helps explain the static rather than rapidly cidal effect of wall-active drugs in some species.</p>
    <h4>Yeast, hypha and conidium</h4>
    <p>Morphology is coupled to virulence. In <em>Candida albicans</em> the yeast-to-hypha switch is controlled by <strong>Efg1, Cph1, the cAMP–PKA pathway and MAP kinase signalling</strong>, and is triggered by serum, 37 °C, neutral pH, N-acetylglucosamine and quorum-sensing molecules such as <strong>farnesol</strong>. Hyphae penetrate tissue, whereas yeast cells disseminate. In the endemic dimorphic fungi a temperature-sensing regulator such as <strong>Ryp1</strong> in <em>Histoplasma</em> maintains the yeast programme at 37 °C. In <em>Aspergillus</em>, conidiation runs through the central regulatory pathway <strong>BrlA–AbaA–WetA</strong> and releases airborne conidia.</p>
    <h4>Clinical links</h4>
    <ul>
      <li><strong>Drug targets:</strong> ergosterol is bound by polyenes, lanosterol 14α-demethylase is inhibited by azoles, β-1,3-glucan synthase by echinocandins and squalene epoxidase by terbinafine.</li>
      <li><strong>Stains:</strong> calcofluor white binds chitin, while PAS and silver stains highlight wall polysaccharides in tissue.</li>
      <li><strong>Biofilm and persisters:</strong> matrix polysaccharides and slow-growing cells explain device infection, tolerance and relapse despite an apparently susceptible MIC.</li>
    </ul>
  `,
  tip: "Build the answer from wall, membrane and growth form, then attach one drug or stain to each structure.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "mc14", domain: "mycology", star: true,
  q: "Explain antifungal immunity, from innate recognition to adaptive responses, and discuss inherited defects that predispose to specific fungal infections.",
  tags: ["antifungal immunity", "Dectin-1", "CARD9", "Th17"],
  keypoints: ["Dectin-1 beta-glucan", "Dectin-2 and Mincle mannan", "Syk-CARD9", "inflammasome IL-1beta", "neutrophil oxidative burst", "NETs", "Th17 IL-17 IL-22", "Th1 IFN-gamma", "CARD9 deficiency", "STAT1 gain-of-function", "AIRE APECED", "chronic granulomatous disease", "anti-IFN-gamma autoantibodies", "immune evasion capsule", "IRIS"],
  answer: `
    <h4>Barriers and innate recognition</h4>
    <p>Intact skin and mucosa, the resident microbiota, and surfactant proteins A and D limit invasion. Tissue macrophages and neutrophils are the main effectors. Fungi are recognised by <strong>pattern-recognition receptors</strong>: <strong>Dectin-1</strong> binds β-1,3-glucan, <strong>Dectin-2 and Mincle</strong> bind α-mannans and glycolipids, and mannose receptor and <strong>TLR2, TLR4 and TLR9</strong> contribute. Signals converge on <strong>Syk–CARD9–NF-κB</strong> and on the inflammasome, which releases IL-1β. Neutrophils kill by oxidative burst, granule proteases and <strong>neutrophil extracellular traps</strong>, while dendritic cells migrate to lymph nodes and shape the T-cell response. The outcome therefore depends on how quickly innate effectors contain the inoculum.</p>
    <h4>Adaptive and mucosal immunity</h4>
    <p><strong>Th17 cells and IL-17/IL-22</strong> recruit neutrophils and stimulate epithelial antimicrobial peptides such as defensins and histatins, together with mucosal repair; this axis is the dominant defence against <em>Candida</em> at surfaces. <strong>Th1 cells and IFN-γ</strong> activate macrophages against dimorphic fungi and <em>Cryptococcus</em>. Antibody contributes opsonisation, particularly against capsular polysaccharide.</p>
    <h4>Immune evasion</h4>
    <p>The cryptococcal capsule inhibits phagocytosis; <em>Histoplasma</em> survives within macrophages by neutralising phagolysosomal pH; melanin scavenges free radicals; mannoproteins mask β-glucan from Dectin-1; and biofilms and morphological switching avoid recognition altogether.</p>
    <h4>Inherited susceptibility</h4>
    <div class="table-wrap"><table>
      <tr><th>Defect</th><th>Typical infection</th></tr>
      <tr><td><strong>CARD9</strong> deficiency</td><td>CNS candidiasis, deep dermatophytosis, phaeohyphomycosis</td></tr>
      <tr><td><strong>STAT1</strong> gain-of-function; <strong>AIRE</strong> defect in APECED</td><td>Chronic mucocutaneous candidiasis</td></tr>
      <tr><td>IL-17 pathway defects (STAT3 hyper-IgE, DOCK8)</td><td>Recurrent mucocutaneous candidiasis</td></tr>
      <tr><td><strong>Chronic granulomatous disease</strong></td><td><em>Aspergillus</em> and Mucorales</td></tr>
      <tr><td>Neutropenia, transplant, corticosteroids</td><td>Invasive mould and yeast disease</td></tr>
      <tr><td>Anti-IFN-γ autoantibodies</td><td><em>Talaromyces</em>, non-tuberculous mycobacteria</td></tr>
    </table></div>
    <p>Restoring immunity — engraftment, withdrawal of steroids, ART — is often more powerful than any antifungal, and immune reconstitution can itself precipitate <strong>IRIS</strong>.</p>
  `,
  tip: "Name the receptor, the signalling pathway and one disease per immune defect; that structure earns the marks.",
  sources: ["S1", "S4", "S13"]
},
{
  id: "mc15", domain: "mycology",
  q: "Discuss Malassezia as a skin commensal and pathogen: its biology, the diseases it causes, and their diagnosis and management.",
  tags: ["Malassezia", "pityriasis versicolor", "seborrhoeic dermatitis", "lipids"],
  keypoints: ["lipid-dependent basidiomycete", "sebaceous skin", "M. globosa and M. restricta", "M. pachydermatis zoophilic", "lipases and phospholipases", "azelaic acid tyrosinase", "spaghetti and meatballs", "seborrhoeic dermatitis", "folliculitis", "neonatal fungaemia lipid emulsion", "Dixon medium", "ketoconazole", "selenium sulphide", "itraconazole", "catheter removal"],
  answer: `
    <h4>The organism</h4>
    <p><em>Malassezia</em> is a genus of <strong>lipid-dependent basidiomycetous yeasts</strong> and the dominant fungus of sebaceous skin. The common species are <em>M. globosa</em>, <em>M. restricta</em>, <em>M. sympodialis</em> and <em>M. furfur</em>; <em>M. pachydermatis</em> is zoophilic and unusual in being non-lipid-dependent. Because the genome lacks fatty acid synthase, growth requires exogenous lipids, which the organism obtains from sebum using <strong>lipases and phospholipases</strong>. Colonies are smooth or friable and culture needs lipid-supplemented media.</p>
    <h4>Disease mechanisms</h4>
    <p>Lipase activity releases free fatty acids and produces <strong>azelaic acid</strong>, which inhibits tyrosinase and contributes to the depigmentation of pityriasis versicolor; fatty acids and other metabolites also provoke scaling and inflammation. The yeast activates complement and induces cytokines, and in sensitised hosts it behaves as an allergen rather than an invader.</p>
    <h4>Clinical syndromes</h4>
    <ul>
      <li><strong>Pityriasis versicolor</strong> — well-demarcated hypo- or hyperpigmented macules with fine scale on the trunk and neck; KOH shows short hyphae and spores, the classic <strong>spaghetti and meatballs</strong> appearance.</li>
      <li><strong>Seborrhoeic dermatitis</strong> — dandruff and greasy scales on the scalp, eyebrows, nasolabial folds and chest; common, and more severe in HIV.</li>
      <li><strong>Malassezia folliculitis</strong> — itchy papules on the back and chest after heat, occlusion or antibiotics.</li>
      <li><strong>Others</strong> — blepharitis, otitis externa, catheter-related fungaemia in neonates receiving lipid emulsions, and allergic sensitisation in atopic dermatitis.</li>
    </ul>
    <h4>Diagnosis and treatment</h4>
    <p>Diagnosis is usually clinical; KOH microscopy and culture on lipid-containing media such as Dixon or Leeming–Notman confirm it, and MALDI-TOF identifies the species. Topical <strong>ketoconazole</strong>, selenium sulphide, ciclopirox or zinc pyrithione are first-line. Extensive or recurrent disease needs oral <strong>itraconazole</strong> or fluconazole. Relapse is common because the organism recolonises within months, so intermittent topical maintenance is reasonable. Fungaemia requires <strong>catheter removal</strong> and systemic amphotericin B or an azole.</p>
  `,
  tip: "Say lipid-dependent first — it explains the sites, the culture method and the neonatal lipid-emulsion fungaemia.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "mc16", domain: "mycology", star: true,
  q: "Explain the emergence of terbinafine-resistant dermatophytosis, with reference to Trichophyton indotineae, and outline its diagnosis and management.",
  tags: ["dermatophytes", "Trichophyton indotineae", "terbinafine resistance", "tinea incognito"],
  keypoints: ["keratinophilic mould", "Trichophyton Microsporum Epidermophyton", "keratinases", "anthropophilic zoophilic geophilic", "Trichophyton indotineae", "squalene epoxidase SQLE", "high terbinafine MIC", "steroid-antifungal combination", "tinea incognito", "KOH microscopy", "ITS sequencing", "itraconazole", "adherence and fomites", "rational prescribing"],
  answer: `
    <h4>Biology and ecology</h4>
    <p>Dermatophytes are keratinophilic moulds of the genera <em>Trichophyton</em>, <em>Microsporum</em> and <em>Epidermophyton</em>. They secrete <strong>keratinases, proteases and sulphite</strong> to digest keratin in the stratum corneum, hair and nail, and evoke a delayed hypersensitivity response that produces the annular scaling plaque. Species are <strong>anthropophilic</strong> (human-to-human, mild inflammation), <strong>zoophilic</strong> (pets and cattle, more inflamed) or <strong>geophilic</strong> (soil).</p>
    <h4>The resistant-dermatophyte problem</h4>
    <p>Extensive, recalcitrant tinea corporis and cruris have increased, particularly in South Asia, and are frequently caused by <strong><em>Trichophyton indotineae</em></strong>, formerly part of the <em>T. mentagrophytes</em> complex. Resistance follows point mutations in the <strong>squalene epoxidase (<em>SQLE</em>) gene</strong>, the target of terbinafine, and isolates show high terbinafine MICs with variable cross-resistance to other agents. Misuse of <strong>topical corticosteroid–antifungal combinations</strong> suppresses inflammation and produces <strong>tinea incognito</strong>, spreading infection and delaying diagnosis.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>KOH microscopy</strong> of scrapings or plucked hair; calcofluor white improves sensitivity.</li>
      <li><strong>Culture</strong> on Sabouraud agar with antibacterials at 25–30 °C for up to four weeks, with species identification by colony and microscopic morphology.</li>
      <li><strong>ITS sequencing</strong> or MALDI-TOF for ambiguous isolates, and <strong>antifungal susceptibility testing</strong> when terbinafine has failed.</li>
    </ul>
    <h4>Management</h4>
    <p>Confirm the diagnosis before treating, stop steroid-containing creams and treat for an adequate duration. Terbinafine remains first-line for susceptible infection; <strong>itraconazole</strong> is preferred for confirmed terbinafine-resistant isolates, with attention to absorption and adherence. Extensive disease may need several weeks of oral therapy, and household members, fomites, footwear and pets should be addressed. Prevention rests on rational prescribing, avoiding over-the-counter combination creams, and public education about early treatment.</p>
  `,
  tip: "Link the clinical failure to the SQLE mutation, and name steroid-containing creams as the driver of tinea incognito.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "mc17", domain: "mycology",
  q: "Discuss recurrent vulvovaginal candidiasis and chronic mucocutaneous candidiasis: pathogenesis, diagnosis and long-term management.",
  tags: ["recurrent VVC", "chronic mucocutaneous candidiasis", "STAT1", "biofilm"],
  keypoints: ["three or more episodes in 12 months", "biofilm and azole tolerance", "Dectin-1 and CARD9 polymorphisms", "Candida glabrata", "confirm with culture", "maintenance fluconazole", "boric acid", "STAT1 gain-of-function", "AIRE APECED", "IL-17 pathway", "endocrine autoimmunity", "azole resistance monitoring"],
  answer: `
    <h4>Recurrent vulvovaginal candidiasis</h4>
    <p>RVVC is defined as <strong>three or more symptomatic episodes in 12 months</strong>. It affects a minority of women and is not explained simply by hygiene or reinfection. Predisposing factors include antibiotic exposure, uncontrolled diabetes, oestrogen and pregnancy, and immunosuppression, although many cases have no identifiable cause. Pathogenesis involves <strong>biofilm formation, azole tolerance and host immunogenetics</strong>, including polymorphisms in <strong>Dectin-1 and CARD9</strong>, with a local Th17 response that is protective but also drives inflammation. <em>Candida albicans</em> predominates, but <em>C. glabrata</em> is more common after repeated azole exposure and is intrinsically less susceptible.</p>
    <h4>Diagnosis</h4>
    <p>Confirm each episode with microscopy and culture rather than treating symptoms alone, and identify the species with susceptibility testing when azoles have failed. Exclude diabetes, HIV and other immunosuppression, and distinguish candidiasis from bacterial vaginosis, trichomoniasis and dermatoses.</p>
    <h4>Chronic mucocutaneous candidiasis</h4>
    <p>CMC is persistent or recurrent candidiasis of skin, nails, and oral or oesophageal mucosa, often with <strong>STAT1 gain-of-function</strong> mutations, <strong>AIRE</strong> defects in APECED, or IL-17 pathway defects. It is a marker of a specific immune defect, may be accompanied by endocrine autoimmunity, and requires long-term azole therapy with monitoring for resistance and toxicity.</p>
    <h4>Treatment principles</h4>
    <ul>
      <li>Induce with a topical or oral azole, then use <strong>maintenance</strong> therapy, such as weekly fluconazole, for RVVC.</li>
      <li>For azole-resistant <em>C. glabrata</em>, consider <strong>boric acid</strong>, nystatin or amphotericin B suppositories.</li>
      <li>Avoid repeated empirical courses without culture; they select resistance and delay diagnosis.</li>
      <li>In CMC, address the underlying immune defect and monitor for azole resistance and hepatotoxicity.</li>
    </ul>
  `,
  tip: "Distinguish episodic recurrence from a host immune defect, and always culture before committing to maintenance azoles.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "mc18", domain: "mycology", star: true,
  q: "Outline a management bundle for candidaemia and invasive candidiasis in the intensive care unit, including diagnosis, source control and duration of therapy.",
  tags: ["candidaemia", "ICU", "echinocandin", "source control"],
  keypoints: ["central venous catheter", "colonisation burden", "beta-D-glucan", "repeat blood cultures", "dilated retinal examination", "echinocandin first-line", "step-down fluconazole", "remove catheter", "14 days after first negative culture", "echocardiography", "empirical therapy high risk only", "do not treat colonisation", "Candida auris screening"],
  answer: `
    <h4>Who is at risk</h4>
    <p>Invasive candidiasis arises when colonisation, mucosal barrier failure and impaired immunity coincide: critical illness, prolonged broad-spectrum antibiotics, <strong>central venous catheters</strong>, total parenteral nutrition, abdominal surgery, renal replacement therapy, neutropenia and diabetes. <strong>Colonisation burden</strong> predicts invasion. <em>C. albicans</em> remains commonest, while <em>C. glabrata</em>, <em>C. parapsilosis</em>, <em>C. tropicalis</em> and <em>C. auris</em> vary by centre and prior azole exposure.</p>
    <h4>Diagnosis</h4>
    <p>Blood cultures are the anchor but are positive in only about half of cases. <strong>β-D-glucan</strong> supports the diagnosis but is not specific; molecular panels and MALDI-TOF speed identification. Every patient needs a <strong>dilated retinal examination</strong>, repeat blood cultures until sterile, and echocardiography when there is a new murmur, embolic phenomena or persistent fungaemia. A catheter tip culture alone is not diagnostic.</p>
    <h4>The management bundle</h4>
    <div class="table-wrap"><table>
      <tr><th>Element</th><th>Action</th></tr>
      <tr><td>Antifungal</td><td><strong>Echinocandin first-line</strong>; step down to fluconazole when the isolate is susceptible and the patient is stable</td></tr>
      <tr><td>Source control</td><td><strong>Remove the central venous catheter</strong> and drain infected collections</td></tr>
      <tr><td>Duration</td><td>Continue for <strong>14 days after the first negative blood culture</strong> and clinical resolution, longer for deep-seated infection</td></tr>
      <tr><td>Eyes</td><td>Formal ophthalmology review; treat endophthalmitis with systemic and intravitreal therapy</td></tr>
      <tr><td>Follow-up</td><td>Repeat cultures, remove other devices, involve infectious diseases</td></tr>
    </table></div>
    <h4>Empirical therapy and prevention</h4>
    <p>Empirical antifungal therapy is reasonable in high-risk, septic ICU patients with multiple colonisation sites and no alternative explanation; otherwise it exposes many patients unnecessarily. Fluconazole prophylaxis reduces invasive candidiasis in selected high-risk surgical and neutropenic groups but selects fluconazole-resistant species. <strong>Do not treat colonisation</strong>, and enforce hand hygiene, device care and screening where <em>C. auris</em> is circulating.</p>
  `,
  tip: "The bundle is drug, catheter, eyes, repeat cultures and a defined stop date — say all five.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "mc19", domain: "mycology", star: true,
  q: "Discuss chronic pulmonary aspergillosis, with emphasis on its relationship to treated tuberculosis, diagnosis and long-term treatment.",
  tags: ["chronic pulmonary aspergillosis", "post-TB", "aspergilloma", "Aspergillus IgG"],
  keypoints: ["structural lung disease", "six months of symptoms", "Aspergillus IgG", "chronic cavitary", "chronic fibrosing", "aspergilloma", "subacute invasive", "post-TB cavities", "haemoptysis", "exclude TB and malignancy", "itraconazole or voriconazole", "bronchial artery embolisation", "post-TB follow-up"],
  answer: `
    <h4>Definition and forms</h4>
    <p>Chronic pulmonary aspergillosis (CPA) is a progressive inflammatory and fibrotic disease of lung tissue, usually in a person with structural lung damage and no major immunosuppression. Diagnostic criteria combine symptoms for at least six months, compatible imaging, and evidence of <em>Aspergillus</em> infection — a raised <strong><em>Aspergillus</em> IgG</strong>, culture or biopsy — after excluding tuberculosis, non-tuberculous mycobacteria and malignancy. Forms include <strong>chronic cavitary</strong>, <strong>chronic fibrosing</strong>, a single <strong>aspergilloma</strong> and <strong>subacute invasive</strong> disease in mildly immunosuppressed hosts.</p>
    <h4>The post-tuberculosis link</h4>
    <p>Residual cavities, bronchiectasis and bronchopleural fistulae after treated TB are the commonest predisposing lesions, and post-TB lung disease is a major burden in the Philippines. Patients present with chronic cough, haemoptysis, weight loss, fatigue and breathlessness, and are often retreated for smear-negative TB because the radiograph remains abnormal. Repeated empirical TB treatment without evidence delays antifungal therapy and exposes patients to unnecessary drug toxicity.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Imaging</strong>: cavities with or without a fungus ball, pleural thickening and progressive fibrosis.</li>
      <li><strong><em>Aspergillus</em> IgG and precipitins</strong>: the most useful serological test; galactomannan is insensitive in CPA.</li>
      <li><strong>Culture</strong> of sputum or bronchoalveolar lavage, and biopsy when the diagnosis is uncertain.</li>
      <li><strong>Exclude</strong> TB, non-tuberculous mycobacteria, malignancy and other cavitary disease.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Oral <strong>itraconazole</strong> or <strong>voriconazole</strong> for at least six months improves symptoms and limits progression; monitor drug levels, liver function and interactions. Surgery is reserved for a symptomatic aspergilloma with recurrent haemoptysis, and <strong>bronchial artery embolisation</strong> controls acute bleeding. Treat comorbidities, support nutrition and smoking cessation, and organise structured post-TB follow-up so that CPA is recognised early.</p>
  `,
  tip: "Aspergillus IgG plus a residual TB cavity is the diagnostic pair; repeated empirical TB therapy is the trap to criticise.",
  sources: ["S4", "S9", "S18"]
},
{
  id: "mc20", domain: "mycology", star: true,
  q: "Explain azole resistance in Aspergillus fumigatus as a One Health problem, its molecular basis and its implications for treatment and policy.",
  tags: ["azole resistance", "cyp51A", "One Health", "agricultural fungicides"],
  keypoints: ["lanosterol 14-alpha-demethylase", "cyp51A", "TR34/L98H", "TR46/Y121F/T289A", "azole-naive patients", "agricultural DMI fungicides", "cross-resistance", "culture and susceptibility testing", "therapeutic drug monitoring", "combination or amphotericin", "environmental surveillance", "reduce agricultural azole use"],
  answer: `
    <h4>The mechanism</h4>
    <p>Azoles inhibit lanosterol 14α-demethylase, encoded by <strong><em>cyp51A</em></strong> in <em>Aspergillus fumigatus</em>. Resistance arises through point mutations in the gene or its promoter. The canonical environmental genotype is <strong>TR34/L98H</strong> — a 34-base-pair tandem repeat in the promoter plus a leucine-to-histidine substitution — while <strong>TR46/Y121F/T289A</strong> causes especially high voriconazole MICs. These mutations reduce drug binding and are stably inherited.</p>
    <h4>Why the environment matters</h4>
    <p>Unlike resistance selected during patient treatment, these genotypes appear in <strong>azole-naive patients</strong>, which points to the environment. <strong>Agricultural azole fungicides</strong> — demethylation inhibitors used on crops, bulbs, rice and timber — share the same target and select resistant spores in soil and compost. Residues in plant waste, manure and dust can then be inhaled. This is a genuine <strong>One Health</strong> problem: crop protection, food security and medical therapy compete for the same chemistry.</p>
    <h4>Clinical consequences</h4>
    <ul>
      <li>Primary resistance causes failure of empirical voriconazole in invasive aspergillosis.</li>
      <li>Cross-resistance among medical triazoles limits alternatives; isavuconazole is not reliably active.</li>
      <li>Culture and susceptibility testing become essential rather than optional in invasive disease.</li>
      <li>Resistance complicates chronic pulmonary aspergillosis, where prolonged azole exposure is common.</li>
    </ul>
    <h4>Response</h4>
    <p>Stewardship means treating documented disease, using therapeutic drug monitoring, avoiding unnecessary long courses, and considering combination or amphotericin-based therapy for resistant isolates. Surveillance should link clinical and environmental isolates through sequencing. Reducing non-essential agricultural azole use, improving application practice and regulating residues require agriculture and health authorities to act together. For the laboratory, the practical message is to <strong>culture, identify and test</strong> every mould from a deep site, because resistance cannot be predicted from the patient history alone.</p>
  `,
  tip: "The One Health argument is that resistance appears in azole-naive patients because crop fungicides share the drug target.",
  sources: ["S18", "S23", "S13"]
},
{
  id: "mc21", domain: "mycology", star: true,
  q: "Describe cryptococcal antigen screening and pre-emptive therapy in advanced HIV, including interpretation, pitfalls and programme requirements.",
  tags: ["CrAg", "HIV", "screening", "pre-emptive therapy"],
  keypoints: ["asymptomatic antigenaemia", "CD4 below 100", "lateral flow assay", "lumbar puncture if positive", "pre-emptive fluconazole", "amphotericin B plus flucytosine for meningitis", "reflex testing", "prozone false negative", "cross-reaction false positive", "ART timing", "IRIS", "linkage to care"],
  answer: `
    <h4>Why screen</h4>
    <p>Cryptococcal meningitis remains a leading cause of death in advanced HIV, and it often follows a period of <strong>asymptomatic cryptococcal antigenaemia</strong>. Serum <strong>cryptococcal antigen (CrAg)</strong> becomes detectable weeks before symptoms, so screening allows pre-emptive treatment and prevents meningitis. WHO recommends CrAg screening for adults and adolescents with <strong>CD4 below 100</strong> before starting or re-starting ART, and many programmes screen at higher CD4 thresholds where prevalence is high.</p>
    <h4>How to do it</h4>
    <p>The <strong>lateral flow assay</strong> is the method of choice: rapid, minimally equipment-dependent and reliable on serum, plasma and CSF. A positive serum CrAg requires clinical assessment and, where feasible, <strong>lumbar puncture</strong> to exclude meningitis, because treatment differs. <strong>Reflex testing</strong> — automatically adding CrAg when a CD4 result falls below the threshold — improves coverage and reduces missed cases.</p>
    <h4>Interpretation and pitfalls</h4>
    <ul>
      <li><strong>Asymptomatic antigenaemia</strong>: pre-emptive oral fluconazole, with follow-up and ART.</li>
      <li><strong>Symptomatic or CSF-positive</strong>: treat as cryptococcal meningitis with amphotericin B plus flucytosine, then consolidation.</li>
      <li><strong>False negatives</strong>: very low antigen load, prozone effect at very high titres, and rare non-<em>neoformans</em> species.</li>
      <li><strong>False positives</strong>: cross-reacting antigens and technical error; repeat and interpret clinically.</li>
    </ul>
    <h4>Programme requirements</h4>
    <p>Screening only works if a positive result leads to treatment, so the pathway must include same-day fluconazole, lumbar puncture capacity, ART timing and adherence support. In the Philippines, cost, laboratory access and linkage to care are the limiting factors, and CrAg screening should sit within a package that includes CD4 testing, TB screening and viral load monitoring. Persistent antigenaemia despite therapy warrants review for poor adherence, relapse or <strong>IRIS</strong>.</p>
  `,
  tip: "Screening is only justified if the pathway includes lumbar puncture and same-day antifungal treatment.",
  sources: ["S11", "S1", "S4"]
},
{
  id: "mc22", domain: "mycology",
  q: "Discuss invasive fungal infection in haematopoietic stem cell transplant and CAR-T recipients: risk periods, prophylaxis, breakthrough infection and management.",
  tags: ["transplant", "CAR-T", "mould prophylaxis", "breakthrough"],
  keypoints: ["pre-engraftment neutropenia", "mucosal barrier injury", "graft-versus-host disease", "Pneumocystis late", "posaconazole or voriconazole prophylaxis", "TMP-SMX", "HEPA filtration", "construction dust", "breakthrough mould", "therapeutic drug monitoring", "azole calcineurin inhibitor interaction", "galactomannan and beta-D-glucan", "reduce immunosuppression"],
  answer: `
    <h4>Changing epidemiology</h4>
    <p>Invasive fungal disease after haematopoietic stem cell transplant follows the shape of immune recovery. During <strong>pre-engraftment neutropenia</strong> and mucosal barrier injury, <em>Candida</em> and <em>Aspergillus</em> dominate. After engraftment, <strong>graft-versus-host disease</strong> and corticosteroids shift risk toward moulds, especially <em>Aspergillus</em>, and <em>Pneumocystis</em>. Late after transplant, community exposure and impaired cell-mediated immunity favour <em>Cryptococcus</em>, endemic fungi and <em>Pneumocystis</em>. CAR-T recipients have prolonged cytopenias, B-cell aplasia and frequent steroid or tocilizumab exposure, so mould infection and PCP occur beyond the classical neutropenic window.</p>
    <h4>Prevention</h4>
    <ul>
      <li><strong>Mould-active prophylaxis</strong> with posaconazole or voriconazole during high-risk neutropenia and GVHD; fluconazole where mould risk is low.</li>
      <li><strong>Trimethoprim–sulfamethoxazole</strong> for <em>Pneumocystis</em> until immune recovery.</li>
      <li><strong>Environmental controls</strong>: HEPA-filtered rooms, construction barriers, no plants or flowers, and avoidance of renovation dust.</li>
      <li>Screen and treat latent TB, and take an exposure history for endemic fungi.</li>
    </ul>
    <h4>Breakthrough infection</h4>
    <p>Infection during prophylaxis suggests a resistant organism, a non-<em>Aspergillus</em> mould such as Mucorales, <em>Fusarium</em> or <em>Scedosporium</em>, or poor drug exposure. Check levels, review interactions, especially between azoles and calcineurin inhibitors, and obtain tissue. <strong>Galactomannan</strong>, β-D-glucan, CT imaging and bronchoalveolar lavage guide early therapy; metagenomic sequencing helps when cultures are negative.</p>
    <h4>Management</h4>
    <p>Treat with an appropriate mould-active agent, reduce immunosuppression where possible, and involve surgery for necrotic tissue, sinus disease or infected devices. Recovery of neutrophils and control of GVHD matter more than the choice among similar drugs. Drug interactions are formidable: azoles raise tacrolimus and cyclosporine levels, while rifamycins and some anticonvulsants lower azole exposure. A transplant mycology pathway combining prophylaxis, surveillance and rapid diagnostics reduces mortality.</p>
  `,
  tip: "Organise the answer by time after transplant, then explain breakthrough infection as resistance, unusual mould or low drug levels.",
  sources: ["S4", "S9", "S18"]
},
{
  id: "mc23", domain: "mycology",
  q: "Compare Fusarium and Scedosporium/Lomentospora as emerging mould pathogens: clinical settings, laboratory identification and treatment.",
  tags: ["Fusarium", "Scedosporium", "Lomentospora", "emerging moulds"],
  keypoints: ["hyaline mould", "canoe-shaped macroconidia", "Fusarium keratitis", "neutropenic dissemination", "positive blood culture", "near-drowning brain abscess", "cystic fibrosis", "Lomentospora prolificans pan-resistant", "voriconazole for Scedosporium", "amphotericin B for Fusarium", "granulocyte recovery", "surgery and catheter removal"],
  answer: `
    <h4><em>Fusarium</em></h4>
    <p><em>Fusarium</em> species are hyaline moulds and ubiquitous plant pathogens. Microscopy shows septate hyphae and characteristic <strong>canoe- or banana-shaped macroconidia</strong>. Infection follows inhalation, traumatic inoculation or contaminated material. <strong>Keratitis</strong> is the classic localised disease, especially with contact lens wear or ocular trauma; onychomycosis and skin infection occur in immunocompetent hosts. In profound neutropenia, disseminated fusariosis causes fever, painful nodular skin lesions, sinusitis and pneumonia and, unlike <em>Aspergillus</em>, <strong>blood cultures are often positive</strong>. <em>Fusarium</em> is intrinsically resistant to many agents in a species-dependent pattern; amphotericin B, voriconazole and posaconazole are the main options. Direct microscopy of ocular specimens is often more useful than culture, which may take days. Granulocyte recovery and removal of infected catheters are decisive.</p>
    <h4><em>Scedosporium</em> and <em>Lomentospora</em></h4>
    <p>These soil and polluted-water moulds cause <strong>near-drowning-associated brain abscess</strong>, chronic airways infection in cystic fibrosis and disseminated disease in neutropenia. <em>Lomentospora prolificans</em> is notoriously pan-resistant, including to amphotericin B, whereas <em>Scedosporium apiospermum</em> is more often voriconazole-susceptible. Diagnosis requires culture and sequencing because morphology overlaps with other hyaline moulds.</p>
    <h4>Comparison</h4>
    <div class="table-wrap"><table>
      <tr><th></th><th><em>Fusarium</em></th><th><em>Scedosporium</em>/<em>Lomentospora</em></th></tr>
      <tr><td>Key morphology</td><td>Canoe-shaped macroconidia</td><td>Oval conidia from annellides; <em>Lomentospora</em> has flask-shaped conidia</td></tr>
      <tr><td>Classic setting</td><td>Keratitis; neutropenic dissemination</td><td>Near-drowning CNS abscess; cystic fibrosis</td></tr>
      <tr><td>Blood culture</td><td>Often positive</td><td>Usually negative</td></tr>
      <tr><td>Susceptibility</td><td>Variable; amphotericin B and voriconazole</td><td>Voriconazole for <em>Scedosporium</em>; <em>Lomentospora</em> often pan-resistant</td></tr>
    </table></div>
    <h4>Practical points</h4>
    <p>Any mould from a normally sterile site should be identified to species and tested, because these organisms fail standard empirical therapy. Surgical debridement, catheter removal, reversal of neutropenia and control of the underlying disease are as important as drug choice.</p>
  `,
  tip: "The two discriminators are blood culture positivity in Fusarium and the near-drowning CNS abscess of Scedosporium.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "mc24", domain: "mycology", star: true,
  q: "Discuss fungal keratitis and fungal endophthalmitis: risk factors, clinical recognition, laboratory diagnosis and treatment.",
  tags: ["fungal keratitis", "endophthalmitis", "Fusarium", "natamycin"],
  keypoints: ["contact lens wear", "vegetative trauma", "feathery infiltrate", "satellite lesions", "hypopyon", "corneal scraping", "KOH and calcofluor", "natamycin first-line", "topical voriconazole", "avoid steroids", "therapeutic keratoplasty", "vitreous tap", "intravitreal amphotericin", "remove infected line"],
  answer: `
    <h4>Fungal keratitis</h4>
    <p>Corneal infection follows epithelial breach — contact lens wear, trauma with vegetative matter, ocular surface disease or topical corticosteroid use. Filamentous moulds such as <em>Fusarium</em>, <em>Aspergillus</em> and dematiaceous fungi predominate in tropical climates, while <em>Candida</em> follows chronic epithelial disease. Patients report pain, photophobia, tearing and reduced vision; signs include a <strong>feathery infiltrate with satellite lesions, ring infiltrate, endothelial plaque and hypopyon</strong>. Bacterial and fungal keratitis overlap clinically, so a scraping is mandatory before treatment.</p>
    <h4>Diagnosis</h4>
    <ul>
      <li><strong>Corneal scraping</strong> for Gram and Giemsa stains, <strong>KOH or calcofluor white</strong>, and culture on blood agar and Sabouraud agar.</li>
      <li><strong>Confocal microscopy</strong> where available, and anterior chamber tap if there is a large hypopyon.</li>
      <li>Do not delay therapy for culture; a negative smear does not exclude fungal infection.</li>
    </ul>
    <h4>Treatment</h4>
    <p>Filamentous keratitis is treated with frequent topical <strong>natamycin</strong>, with topical voriconazole as an alternative or adjunct; <em>Candida</em> keratitis responds to topical amphotericin B or voriconazole. Epithelial debridement improves penetration, and <strong>corticosteroids are avoided</strong> until infection is controlled because they worsen mould keratitis. Severe or unresponsive disease needs therapeutic penetrating keratoplasty.</p>
    <h4>Endophthalmitis</h4>
    <p>Fungal endophthalmitis is either <strong>exogenous</strong>, after surgery, trauma or intravitreal injection, or <strong>endogenous</strong>, from candidaemia, especially in injection drug use, neutropenia or prolonged catheters. It presents with floaters, blurred vision, pain and vitritis; fundoscopy may show fluffy chorioretinal lesions. Treatment requires a <strong>vitreous tap</strong>, intravitreal amphotericin B or voriconazole, vitrectomy in severe cases, systemic antifungal therapy for endogenous disease, and removal of the infected line or device. Visual prognosis depends on early recognition.</p>
  `,
  tip: "Natamycin for filamentous keratitis and a vitreous tap for endophthalmitis are the two management anchors.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "mc25", domain: "mycology",
  q: "Distinguish the forms of fungal rhinosinusitis and explain how the diagnosis changes management.",
  tags: ["allergic fungal rhinosinusitis", "fungal ball", "invasive sinusitis", "nasal polyps"],
  keypoints: ["allergic mucin", "eosinophils and Charcot-Leyden crystals", "no tissue invasion", "fungal ball sinus mycetoma", "acute invasive in neutropenia and diabetes", "black eschar", "Aspergillus and Mucorales", "histology is decisive", "functional endoscopic sinus surgery", "corticosteroids for AFRS", "urgent debridement", "reversal of immunosuppression"],
  answer: `
    <h4>Four distinct diseases</h4>
    <p>Fungal rhinosinusitis is not one entity, and treatment differs completely. Each form has a different pathogenesis, so a single antifungal strategy is inappropriate across the group.</p>
    <ul>
      <li><strong>Allergic fungal rhinosinusitis (AFRS)</strong> — atopic young adults with nasal polyps, eosinophilic mucin, <em>Aspergillus</em> or dematiaceous fungi, raised IgE and bone remodelling; it is a hypersensitivity disease, not invasion.</li>
      <li><strong>Fungal ball (sinus mycetoma)</strong> — a compact concretion of hyphae in one sinus of an immunocompetent adult, often with dental or surgical history; it causes obstruction and foul discharge.</li>
      <li><strong>Acute invasive fungal sinusitis</strong> — in neutropenia, uncontrolled diabetes or transplant; rapidly progressive necrosis, facial pain, black eschar, and orbital or intracranial extension, with <em>Aspergillus</em> and Mucorales as the main agents.</li>
      <li><strong>Chronic invasive and granulomatous disease</strong> — indolent in mildly immunosuppressed patients or in endemic areas.</li>
    </ul>
    <h4>Diagnosis</h4>
    <p>Nasal endoscopy and CT define the extent; MRI distinguishes soft tissue, fungus and bone. Histology is decisive: <strong>allergic mucin with eosinophils and Charcot–Leyden crystals without tissue invasion</strong> in AFRS, versus <strong>hyphae invading mucosa, blood vessels and bone</strong> in invasive disease. Culture and sequencing identify the organism, and <em>Aspergillus</em> IgG and total IgE support AFRS.</p>
    <h4>Treatment</h4>
    <p>AFRS is managed by <strong>functional endoscopic sinus surgery</strong> plus corticosteroids, with itraconazole as an adjunct in selected patients. A fungal ball is cured by surgery alone. Acute invasive disease is an emergency: <strong>urgent debridement</strong> plus systemic antifungal therapy, amphotericin B for Mucorales and voriconazole for <em>Aspergillus</em>, together with reversal of immunosuppression. The common errors are giving antifungals for AFRS while missing invasive disease, or delaying surgery in a diabetic patient with a black eschar.</p>
  `,
  tip: "Histology separates allergy from invasion, and that single distinction determines surgery, steroids or emergency debridement.",
  sources: ["S1", "S4", "S9"]
},
{
  id: "mc26", domain: "mycology",
  q: "Explain the pharmacokinetic and pharmacodynamic principles that guide antifungal dosing, and apply them to special populations and sites of infection.",
  tags: ["pharmacokinetics", "pharmacodynamics", "TDM", "special populations"],
  keypoints: ["concentration-dependent killing", "time-dependent killing", "AUC to MIC ratio", "trough to MIC", "post-antifungal effect", "amphotericin B poor CNS penetration", "fluconazole CSF penetration", "voriconazole CYP2C19", "echinocandins no CSF or vitreous", "renal replacement therapy", "pregnancy amphotericin B", "obesity and critical illness"],
  answer: `
    <h4>Basic principles</h4>
    <p>Antifungal outcome depends on the relationship between drug exposure and the MIC. <strong>Concentration-dependent</strong> killing by polyenes and echinocandins is best predicted by the peak or area under the curve relative to MIC; <strong>time-dependent</strong> killing by flucytosine and azoles depends on the time above MIC or, for triazoles, the trough-to-MIC ratio. A <strong>post-antifungal effect</strong> allows intermittent echinocandin dosing. Loading doses are used when rapid exposure matters, especially in septic shock, and in obesity dosing should be based on adjusted rather than total body weight. These principles explain why dose, formulation and monitoring matter as much as the choice of drug.</p>
    <h4>Drug-by-drug practicalities</h4>
    <div class="table-wrap"><table>
      <tr><th>Drug</th><th>Key kinetics and penetration</th></tr>
      <tr><td><strong>Amphotericin B</strong></td><td>Nephrotoxicity, infusion reactions and electrolyte loss; poor CNS and urine penetration; liposomal formulation is better tolerated</td></tr>
      <tr><td><strong>Fluconazole</strong></td><td>Excellent CSF and urinary penetration; renal clearance; interactions via CYP2C9</td></tr>
      <tr><td><strong>Voriconazole</strong></td><td>Non-linear, CYP2C19-dependent; visual disturbance and hepatotoxicity; many interactions; needs TDM</td></tr>
      <tr><td><strong>Posaconazole</strong></td><td>Variable absorption influenced by food and acid; needs TDM</td></tr>
      <tr><td><strong>Echinocandins</strong></td><td>No CSF or vitreous penetration; hepatic metabolism; minimal interactions</td></tr>
      <tr><td><strong>Flucytosine</strong></td><td>Renal clearance; marrow suppression; resistance on monotherapy</td></tr>
    </table></div>
    <h4>Special populations</h4>
    <ul>
      <li><strong>Renal replacement therapy</strong>: adjust fluconazole and flucytosine for renal function; echinocandins are not cleared by dialysis.</li>
      <li><strong>Critical illness and obesity</strong>: altered volume of distribution; consider higher loading and therapeutic drug monitoring.</li>
      <li><strong>Pregnancy</strong>: azoles are teratogenic; amphotericin B is preferred for systemic disease.</li>
      <li><strong>CNS and eye infection</strong>: choose agents that penetrate, and use intravitreal or intrathecal routes when needed.</li>
    </ul>
    <p>The practical rule is to match the site of infection to drug penetration, measure levels for the triazoles and flucytosine, and re-evaluate when the patient does not improve.</p>
  `,
  tip: "Pair each drug with the site it cannot reach — amphotericin and echinocandins in the eye and CSF are the classic gaps.",
  sources: ["S1", "S4", "S12"]
},
{
  id: "mc27", domain: "mycology", star: true,
  q: "Outline an antifungal stewardship programme: core interventions, diagnostic stewardship, metrics and the Philippine context.",
  tags: ["antifungal stewardship", "de-escalation", "TDM", "metrics"],
  keypoints: ["formulary restriction", "prospective audit and feedback", "de-escalation", "IV to oral switch", "therapeutic drug monitoring", "biomarker-guided stopping", "do not treat colonisation", "diagnostic stewardship", "days of therapy", "resistance trends", "DOH AO 2016-0003", "access and affordability"],
  answer: `
    <h4>Why antifungal stewardship</h4>
    <p>Antifungals are few, expensive, toxic and increasingly resisted. Unlike antibacterials, the diagnosis is often presumptive, culture is insensitive and biomarkers are imperfect, so both under- and over-treatment are common. Stewardship aims to give the right drug to the right patient at the right dose and duration, and to stop therapy when infection is excluded.</p>
    <h4>Core interventions</h4>
    <ul>
      <li><strong>Formulary restriction and pre-authorisation</strong> for mould-active agents, with rapid release for suspected invasive disease.</li>
      <li><strong>Prospective audit and feedback</strong> on indication, dose, interactions and duration.</li>
      <li><strong>De-escalation</strong> from an echinocandin to fluconazole when the isolate is susceptible and the patient is stable, and an <strong>IV-to-oral switch</strong> when absorption is adequate.</li>
      <li><strong>Therapeutic drug monitoring</strong> for voriconazole, posaconazole, itraconazole and flucytosine.</li>
      <li><strong>Biomarker-guided stopping</strong>, and refusing to treat colonisation.</li>
    </ul>
    <h4>Diagnostic stewardship</h4>
    <p>Order the right specimen, culture deep sites before starting therapy, and use galactomannan, β-D-glucan and CrAg within defined pathways rather than as screening tests for every patient. Reflex susceptibility testing and rapid identification change prescribing. A positive culture from a non-sterile site is not automatically disease.</p>
    <h4>Measuring success</h4>
    <p>Use days of therapy and defined daily doses, expenditure, appropriateness audits, resistance trends, <em>C. auris</em> acquisition, mortality and readmission, and report them to prescribers and hospital leadership. In the Philippines, where many antifungals are paid out of pocket, stewardship must also address access and affordability, and can build on the hospital antimicrobial stewardship committees required by DOH Administrative Order 2016-0003. The candidaemia bundle and the CrAg screening pathway are good starting points because they are measurable and clearly improve outcomes.</p>
  `,
  tip: "Stewardship is not restriction alone — name de-escalation, TDM, diagnostic stewardship and a measured outcome.",
  sources: ["S9", "S18", "S23"]
},
{
  id: "mc28", domain: "mycology",
  q: "Using examples, discuss fungal outbreaks linked to contaminated medical products, devices and the hospital environment, and the principles of investigation and prevention.",
  tags: ["fungal outbreak", "Exserohilum", "iatrogenic", "infection control"],
  keypoints: ["common-source outbreak", "contaminated methylprednisolone", "Exserohilum rostratum", "prolonged incubation", "active case finding", "Fusarium keratitis lens solution", "Aspergillus construction dust", "water reservoirs", "whole-genome sequencing", "recall and quarantine", "sterile compounding", "HEPA and water management"],
  answer: `
    <h4>Lessons from contaminated products</h4>
    <p>Fungal outbreaks are often <strong>common-source and iatrogenic</strong>, not person-to-person. In 2012, contaminated preservative-free methylprednisolone from a single compounding pharmacy caused a multistate outbreak of <strong><em>Exserohilum rostratum</em></strong> meningitis and paraspinal infection in the United States; the mould is a dematiaceous fungus, incubation was prolonged, and case finding required active outreach to every exposed patient. <em>Fusarium</em> keratitis was linked to a contaminated contact lens solution, and <em>Aspergillus</em> has caused surgical-site and endophthalmitis clusters from contaminated solutions, instruments and air during construction.</p>
    <h4>Device and water reservoirs</h4>
    <p>Heater–cooler units, sinks, showers, ice machines and water-damaged building materials harbour moulds and non-tuberculous mycobacteria. <em>Candida auris</em> survives on surfaces and shared equipment and spreads in long-term care facilities. Contaminated linen, dressings and nebuliser equipment have caused Mucorales clusters.</p>
    <h4>Investigation</h4>
    <ul>
      <li>Define a <strong>case</strong> by person, place and time, and search actively for further cases.</li>
      <li>Confirm the organism to species and compare isolates by <strong>sequencing or whole-genome analysis</strong>.</li>
      <li>Trace back to the product, device or environment, and sample surfaces and water.</li>
      <li>Stop exposure: recall, quarantine, close the unit, change reprocessing.</li>
      <li>Communicate with clinicians, patients and public health authorities.</li>
    </ul>
    <h4>Prevention</h4>
    <p>Sterile compounding must follow quality standards, single-dose vials should not be reused, devices need validated reprocessing, and construction requires barriers, HEPA filtration and water management. Outbreaks also expose gaps in reprocessing and regulatory oversight that persist after the incident. Surveillance for unusual moulds and clusters, with a low threshold for reporting, is what turns a single case into a contained outbreak rather than a disaster.</p>
  `,
  tip: "The 2012 methylprednisolone outbreak is the model answer: common source, prolonged incubation and active case finding.",
  sources: ["S4", "S10", "S22"]
},
{
  id: "mc29", domain: "mycology",
  q: "Discuss the medically important mycotoxins, their mechanisms and the food-safety measures that prevent human disease.",
  tags: ["mycotoxins", "aflatoxin", "food safety", "One Health"],
  keypoints: ["secondary metabolites", "heat-stable", "aflatoxin B1", "hepatocellular carcinoma", "hepatitis B synergy", "ochratoxin A", "fumonisins", "trichothecenes", "ergot alkaloids", "post-harvest drying", "regulatory limits", "Philippine maize and peanuts"],
  answer: `
    <h4>What mycotoxins are</h4>
    <p>Mycotoxins are low-molecular-weight secondary metabolites of moulds that cause disease through <strong>ingestion, inhalation or skin contact</strong>, not through tissue invasion. They are heat-stable, so cooking does not reliably destroy them, and they enter the food chain in cereals, nuts, spices, coffee and animal feed. Because they are not infectious, human disease is investigated epidemiologically rather than by culturing the patient, and the effects are often chronic and dose-related.</p>
    <h4>Important mycotoxins</h4>
    <div class="table-wrap"><table>
      <tr><th>Toxin</th><th>Fungus and food</th><th>Effect</th></tr>
      <tr><td><strong>Aflatoxin B1</strong></td><td><em>Aspergillus flavus</em>, <em>A. parasiticus</em>; peanuts, maize, rice</td><td>Hepatocellular carcinoma, synergistic with hepatitis B; acute aflatoxicosis</td></tr>
      <tr><td><strong>Ochratoxin A</strong></td><td><em>Aspergillus</em> and <em>Penicillium</em>; cereals, coffee, grapes</td><td>Nephrotoxicity, Balkan endemic nephropathy, possible carcinogen</td></tr>
      <tr><td><strong>Fumonisins</strong></td><td><em>Fusarium</em> species; maize</td><td>Oesophageal cancer, neural tube defects, equine leukoencephalomalacia</td></tr>
      <tr><td><strong>Trichothecenes</strong></td><td><em>Fusarium</em>; wheat, maize</td><td>Vomiting, feed refusal, immunosuppression</td></tr>
      <tr><td><strong>Ergot alkaloids</strong></td><td><em>Claviceps purpurea</em>; rye</td><td>Vasoconstriction, gangrene, hallucinations</td></tr>
    </table></div>
    <h4>Why it matters in the Philippines</h4>
    <p>Warm, humid storage favours <em>Aspergillus</em> growth in maize and peanuts, and aflatoxin contamination is a recurring food-safety problem, particularly in subsistence farming where sorting and drying are limited. Chronic low-dose exposure contributes to liver cancer in a country with high hepatitis B prevalence, so prevention has a large potential benefit.</p>
    <h4>Control</h4>
    <p>Dry grain rapidly to safe moisture, store it cool and dry, sort out mouldy kernels, apply good agricultural and manufacturing practice, and monitor with validated assays. Regulatory limits and import inspection protect consumers, while education of farmers and traders is the practical intervention. Clinical diagnosis rests on exposure history and public health investigation, not on routine laboratory testing of patients.</p>
  `,
  tip: "Mycotoxins are ingested toxins, not infections — say that, then link aflatoxin to liver cancer in the Philippines.",
  sources: ["S1", "S19", "S23"]
},
{
  id: "mc30", domain: "mycology",
  q: "Evaluate the prospects for fungal vaccines and immunotherapy, and explain why prevention still depends mainly on prophylaxis and immune restoration.",
  tags: ["fungal vaccines", "immunotherapy", "NDV-3", "prophylaxis"],
  keypoints: ["eukaryotic antigens", "weak immunogenicity", "immunocompromised recipients", "correlates of protection", "Als3 NDV-3", "Hyr1", "cryptococcal glucuronoxylomannan conjugate", "monoclonal antibodies", "adoptive T-cell transfer", "IFN-gamma in CGD", "G-CSF", "environmental control"],
  answer: `
    <h4>Why fungal vaccines are difficult</h4>
    <p>Fungi are eukaryotes, so candidate antigens are often weakly immunogenic and may be shared with host molecules. The population that most needs protection — neutropenic, transplanted and critically ill patients — responds poorly to vaccination. Correlates of protection are incompletely defined, and trials would need large, well-characterised high-risk cohorts.</p>
    <h4>Approaches under study</h4>
    <ul>
      <li><strong>Recombinant subunit vaccines</strong>: <em>Candida</em> Als3, the basis of NDV-3 which has also been studied for <em>Staphylococcus aureus</em>, plus Hyr1 and Sap2; <em>Aspergillus</em> cell-wall and secreted antigens.</li>
      <li><strong>Conjugate polysaccharide vaccines</strong>: cryptococcal glucuronoxylomannan coupled to a carrier protein.</li>
      <li><strong>Live attenuated and killed whole-cell vaccines</strong>, including genetically modified strains lacking virulence genes.</li>
      <li><strong>Monoclonal antibodies</strong> against capsular polysaccharide or surface antigens, and engineered antibodies that recruit effector cells.</li>
      <li><strong>Adoptive T-cell transfer</strong> and <strong>cytokine immunotherapy</strong> such as IFN-γ or G-CSF to restore defective immunity.</li>
    </ul>
    <h4>Immunotherapy in practice</h4>
    <p>Outside trials, the effective interventions are <strong>prophylaxis</strong>, environmental control, reversal of immunosuppression and treatment of the underlying disease. IFN-γ is used in chronic granulomatous disease, and granulocyte colony-stimulating factor or granulocyte transfusion is considered in refractory neutropenic mould infection. Vaccination against influenza and other respiratory viruses indirectly reduces secondary pulmonary aspergillosis.</p>
    <h4>Challenges and priorities</h4>
    <p>Trials must define endpoints such as invasive disease, colonisation or mortality, standardise diagnostics, and include enough participants with the relevant immune defect. Manufacturing cost and cold chain must suit low- and middle-income countries, where the fungal burden is highest. A vaccine is unlikely to replace antifungal drugs; the realistic goal is to reduce invasive disease in defined high-risk groups, complemented by better diagnostics and access to existing therapy.</p>
  `,
  tip: "Balance the promise of subunit and conjugate vaccines against the practical reality of prophylaxis and immune recovery.",
  sources: ["S1", "S18", "S13"]
}
);
