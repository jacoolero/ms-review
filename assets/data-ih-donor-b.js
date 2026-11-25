/* Immunohematology — donors & components, part B: donor testing, component processing and blood policy */
window.QBANK.push(
{
  id: "ih145", domain: "ih-donor", star: true,
  q: "Discuss the principles, interpretation and limitations of serological screening of donated blood for transfusion-transmissible infections.",
  tags: ["donor screening", "TTI", "signal-to-cut-off", "window period"],
  keypoints: ["HIV", "HBsAg", "anti-HCV", "syphilis", "malaria", "enzyme immunoassay", "chemiluminescence immunoassay", "signal-to-cut-off ratio", "initially reactive", "retested in duplicate", "repeatedly reactive", "confirmatory testing", "biological false positivity", "window period", "external quality assessment", "lookback"],
  answer: `
    <h4>Purpose and the screening panel</h4>
    <p>Every donation is tested for markers of infection before release, because the donor history alone cannot exclude a recently infected donor. In the Philippines the required panel is <strong>HIV</strong>, <strong>HBsAg</strong>, <strong>anti-HCV</strong>, <strong>syphilis</strong> serology and <strong>malaria</strong>; selected components may also be tested for HTLV or CMV, and nucleic acid testing is added where it is available. The purpose is to identify units with a high probability of infectivity and to protect the recipient — it is not to diagnose the donor.</p>
    <h4>Assay formats and interpretation</h4>
    <ul>
      <li><strong>Enzyme immunoassay</strong> and <strong>chemiluminescence immunoassay</strong> are the mainstays: high throughput, objective reading and suited to automation.</li>
      <li>Results are read against a cut-off and expressed as a <strong>signal-to-cut-off ratio</strong>; a ratio at or above the manufacturer's threshold makes the sample <strong>initially reactive</strong>.</li>
      <li>An initially reactive sample is <strong>retested in duplicate</strong>. If either repeat is reactive the donation is <strong>repeatedly reactive</strong>, must be quarantined and discarded, and its co-components are traced.</li>
      <li>Repeatedly reactive samples are referred for <strong>confirmatory testing</strong> — neutralisation, immunoblot or nucleic acid testing — because a screening assay is optimised for sensitivity rather than specificity.</li>
    </ul>
    <h4>Why a reactive screen is not a diagnosis</h4>
    <p><strong>Biological false positivity</strong> is common: cross-reacting antibodies, autoimmune disease, recent vaccination, pregnancy, and haemolysed, lipaemic or contaminated samples. The <strong>window period</strong> creates the opposite problem — an infectious donor who is still seronegative — which is why repeat donation history and NAT matter. Screening also cannot detect an agent that is not on the panel.</p>
    <h4>Quality assurance</h4>
    <p>Each run requires internal quality control at the cut-off, participation in <strong>external quality assessment</strong>, equipment calibration, documented lot verification, and an unbroken chain from sample to unit. Reactive donors are deferred and counselled confidentially, and <strong>lookback</strong> traces their earlier donations. The laboratory reports a sample as reactive or non-reactive, never as a clinical diagnosis.</p>
  `,
  tip: "Separate three ideas clearly: screening is for sensitivity, a reactive result is not a diagnosis, and NAT closes only part of the window.",
  sources: ["B1", "B8", "B5"]
},
{
  id: "ih146", domain: "ih-donor", star: true,
  q: "Discuss hepatitis B testing in blood donors, including the significance of occult infection and the limits of current assays.",
  tags: ["HBsAg", "anti-HBc", "occult hepatitis B", "HBV NAT"],
  keypoints: ["HBsAg", "anti-HBc", "anti-HBs", "occult hepatitis B", "HBV DNA", "escape mutants", "window period", "multiplex NAT", "low viral load", "permanent deferral", "hepatitis B immunoglobulin", "vaccination", "lookback", "HBsAg neutralisation"],
  answer: `
    <h4>Why hepatitis B is difficult to exclude</h4>
    <p>HBV is highly prevalent in Asia, and a donor may carry the virus at a very <strong>low viral load</strong> that is below the detection limit of pooled assays. Transmission is efficient because a small inoculum can infect, and the virus survives in refrigerated components. Donor selection and laboratory testing must therefore work together.</p>
    <h4>Markers and their meaning</h4>
    <div class="table-wrap"><table>
      <tr><th>Marker</th><th>Interpretation in a donor</th></tr>
      <tr><td><strong>HBsAg</strong></td><td>Current infection, acute or chronic. The primary screening test; modern assays detect very low concentrations but can miss <strong>escape mutants</strong> with altered surface antigen</td></tr>
      <tr><td><strong>anti-HBc</strong></td><td>Past or current exposure; persists for life. A sensitive marker of <strong>occult hepatitis B</strong>, but it also defers many uninfected donors, so it is not used everywhere</td></tr>
      <tr><td><strong>anti-HBs</strong></td><td>Immunity after <strong>vaccination</strong> or resolved infection; not a screening test for infectivity</td></tr>
      <tr><td><strong>HBV DNA</strong></td><td>Direct evidence of viraemia; detected by <strong>multiplex NAT</strong> with HIV and HCV, but pooled testing dilutes low-level samples</td></tr>
    </table></div>
    <h4>Occult hepatitis B</h4>
    <p><strong>Occult hepatitis B</strong> is HBsAg-negative infection with detectable or intermittently detectable <strong>HBV DNA</strong>, usually anti-HBc positive. It matters because such units can transmit HBV, particularly to immunosuppressed or unvaccinated recipients, and because viral load fluctuates below assay limits. Individual-donation NAT is more sensitive than pooled NAT, and anti-HBc screening adds a further margin at the cost of donor loss.</p>
    <h4>Consequences for donors and recipients</h4>
    <ul>
      <li>A confirmed HBsAg-positive donor is <strong>permanently deferred</strong> and counselled; <strong>lookback</strong> traces previous donations.</li>
      <li>Recipients of an implicated unit are notified; susceptible contacts may receive <strong>hepatitis B immunoglobulin</strong> and <strong>vaccination</strong>.</li>
      <li>Confirmed reactivity is established by <strong>HBsAg neutralisation</strong> or HBV DNA, not by a single screening result.</li>
      <li>Vaccination of donors and of the population reduces the burden but does not replace testing.</li>
    </ul>
  `,
  tip: "Occult hepatitis B — HBsAg-negative but DNA-positive — is the concept that separates a good answer from a list.",
  sources: ["B1", "B8"]
},
{
  id: "ih147", domain: "ih-donor", star: true,
  q: "Compare the window periods of HIV and HCV infection and explain how nucleic acid testing reduces residual transfusion risk.",
  tags: ["NAT", "window period", "residual risk", "HIV", "HCV"],
  keypoints: ["window period", "p24 antigen", "combined antigen and antibody assay", "individual-donation NAT", "minipool NAT", "dilution", "HCV RNA", "HIV RNA", "residual risk", "incidence rate", "lookback", "seroconversion", "immunosuppressed donor", "confirmatory testing"],
  answer: `
    <h4>The window period</h4>
    <p>The <strong>window period</strong> is the interval between infection and the point at which a test becomes reliably positive. During it the donor is infectious but the assay is negative, so it sets the residual risk of a screened donation. Serological windows differ between viruses:</p>
    <div class="table-wrap"><table>
      <tr><th>Virus</th><th>Serological window</th><th>NAT window</th></tr>
      <tr><td><strong>HIV</strong></td><td>About 2–3 weeks with a <strong>combined antigen and antibody assay</strong>, which detects <strong>p24 antigen</strong> as well as antibody; longer with antibody-only assays</td><td>About 10–12 days (<strong>HIV RNA</strong>)</td></tr>
      <tr><td><strong>HCV</strong></td><td>Roughly 6–10 weeks for anti-HCV</td><td>About 3–7 days (<strong>HCV RNA</strong>)</td></tr>
      <tr><td>HBV</td><td>About 4–8 weeks for HBsAg</td><td>About 3–4 weeks, less in pooled testing</td></tr>
    </table></div>
    <h4>How NAT is applied</h4>
    <ul>
      <li><strong>Individual-donation NAT</strong> tests each sample, giving the shortest window and the greatest sensitivity.</li>
      <li><strong>Minipool NAT</strong> combines samples (commonly 6–96) to reduce cost; a positive pool is resolved by testing the members individually.</li>
      <li><strong>Dilution</strong> is the weakness of pooling: a low-level viraemic donation can be missed, which matters most for HBV and for early HCV infection.</li>
    </ul>
    <h4>Residual risk and its estimation</h4>
    <p>Residual risk is modelled from the <strong>incidence rate</strong> in repeat donors multiplied by the length of the window period, giving an estimate per million donations. NAT reduces but never abolishes risk, because of very early infection, assay failure, operational error and infections not screened for. A donor may also be <strong>immunosuppressed</strong>, delaying antibody production while RNA remains detectable.</p>
    <h4>When a donor seroconverts</h4>
    <p>The unit is discarded, the donor is deferred and counselled, and <strong>lookback</strong> identifies earlier donations. Recipients are tested, and the event is reviewed to see whether it represents a failure of the assay, of the algorithm, or of procedure. <strong>Confirmatory testing</strong> distinguishes true seroconversion from a false-reactive screen before any notification is made.</p>
  `,
  tip: "Quote the two windows numerically — HCV shortens most dramatically with NAT — then explain why pooled testing weakens the gain.",
  sources: ["B1", "B8"]
},
{
  id: "ih148", domain: "ih-donor",
  q: "Discuss syphilis screening in blood donors: rationale, test types, interpretation and donor management.",
  tags: ["syphilis", "RPR", "treponemal tests", "donor deferral"],
  keypoints: ["Treponema pallidum", "surrogate marker", "non-treponemal test", "RPR", "VDRL", "prozone", "biological false positive", "treponemal test", "TPPA", "EIA", "treponemal-specific", "deferral", "documented treatment", "donor notification"],
  answer: `
    <h4>Why donors are screened</h4>
    <p><strong>Treponema pallidum</strong> is transmitted mainly sexually and transplacentally; transfusion transmission is uncommon because the organism survives poorly in refrigerated blood, and reported cases usually involve fresh components. Screening is retained because a reactive test is a <strong>surrogate marker</strong> for sexual risk behaviour and because donor history is unreliable. It also protects against the small but real risk from units transfused shortly after collection.</p>
    <h4>Test types</h4>
    <div class="table-wrap"><table>
      <tr><th>Test</th><th>Principle and use</th></tr>
      <tr><td><strong>Non-treponemal test</strong> — <strong>RPR</strong>, <strong>VDRL</strong></td><td>Detects reagin antibodies against cardiolipin. Cheap and quantitative, used for screening and for monitoring activity; less specific</td></tr>
      <tr><td><strong>Treponemal test</strong> — <strong>TPPA</strong>, TPHA, <strong>EIA</strong>/CLIA</td><td>Detects antibody against treponemal antigens; more specific, remains positive for life. Used to confirm or, in the reverse algorithm, to screen first</td></tr>
    </table></div>
    <h4>Interpreting a reactive result</h4>
    <ul>
      <li>A reactive non-treponemal test is confirmed with a <strong>treponemal-specific</strong> assay; a reactive treponemal test with a negative non-treponemal test usually indicates past treated infection.</li>
      <li><strong>Biological false positive</strong> non-treponemal results occur in pregnancy, autoimmune disease, malaria, leprosy, other infections and in the elderly.</li>
      <li><strong>Prozone</strong> — antibody excess — can make a strongly reactive sample appear negative, so samples are diluted when the clinical picture suggests otherwise.</li>
      <li>Neither test distinguishes recent from remote infection, so the donor must be assessed clinically.</li>
    </ul>
    <h4>Donor management</h4>
    <p>The unit is discarded. The donor is <strong>deferral</strong>-ed for a defined period, commonly twelve months after <strong>documented treatment</strong>, and re-entry requires evidence of adequate therapy and stable serology according to the local standard. <strong>Donor notification</strong> must be confidential, non-judgemental and linked to clinical care and partner services. The laboratory reports the serological pattern, not a clinical diagnosis, and documents the algorithm used so that the result can be audited.</p>
  `,
  tip: "Explain that syphilis screening is largely a surrogate for risk behaviour — that justifies keeping it despite poor transfusion transmission.",
  sources: ["B1", "B8"]
},
{
  id: "ih149", domain: "ih-donor", star: true,
  q: "Discuss donor assessment for malaria, babesiosis and Chagas disease, and how endemicity shapes donor deferral policy.",
  tags: ["malaria", "Babesia", "Chagas disease", "travel deferral"],
  keypoints: ["Plasmodium", "red cell parasite", "fever", "endemic area", "Palawan", "Mindanao", "risk-based questionnaire", "deferral period", "Babesia microti", "splenectomy", "Trypanosoma cruzi", "serology", "pathogen reduction", "donor recall"],
  answer: `
    <h4>Why parasites matter in transfusion</h4>
    <p><strong>Plasmodium</strong> species, <em>Babesia</em> and <em>Trypanosoma cruzi</em> all circulate inside red cells or survive in blood components, so they are not removed by leucoreduction. Infection may be asymptomatic in a healthy donor, and the recipient — especially a splenectomised, neonatal or immunosuppressed patient — can develop severe disease.</p>
    <h4>Malaria</h4>
    <ul>
      <li>Risk is assessed by a <strong>risk-based questionnaire</strong> covering residence, travel and previous infection. In the Philippines, endemic areas include <strong>Palawan</strong> and parts of <strong>Mindanao</strong>, so local epidemiology drives the questions asked.</li>
      <li>Donors with current or recent <strong>fever</strong> or a history of malaria are deferred for a defined <strong>deferral period</strong> after treatment and after leaving an endemic area; the exact interval varies between standards.</li>
      <li>Serology and microscopy are not used for routine donor screening in most non-endemic countries, because sensitivity in asymptomatic carriers is poor; deferral is more effective.</li>
      <li>Donors born or resident in endemic countries may be deferred for longer than short-term travellers.</li>
    </ul>
    <h4>Babesiosis</h4>
    <p><strong>Babesia microti</strong> is transmitted by ticks in parts of North America and Europe and is a recognised cause of transfusion-transmitted infection, sometimes fatal after <strong>splenectomy</strong>. Donors with a history of babesiosis are deferred indefinitely in many programmes; endemic regions use questionnaires and, where available, antibody or nucleic acid testing. The organism survives refrigerated storage, so component age does not protect the recipient.</p>
    <h4>Chagas disease</h4>
    <p><strong>Trypanosoma cruzi</strong> is endemic in Latin America. Donors with a history of residence or prolonged travel in endemic areas are screened by <strong>serology</strong> or deferred; confirmed infection is a permanent deferral. <strong>Pathogen reduction</strong> inactivates all three organisms in plasma and platelet components, but red cells are not yet routinely treated, so donor selection remains the main safeguard. <strong>Donor recall</strong> and lookback are needed when a carrier is identified after donation.</p>
  `,
  tip: "Tie the policy to local epidemiology — Palawan and Mindanao — and stress that parasites survive cold storage.",
  sources: ["B8", "B1"]
},
{
  id: "ih150", domain: "ih-donor",
  q: "Discuss HTLV and cytomegalovirus in blood donors, and the strategy for providing CMV-safe components.",
  tags: ["HTLV", "CMV", "leukoreduction", "CMV-safe"],
  keypoints: ["HTLV-I", "HTLV-II", "T lymphocyte", "ATL", "HAM/TSP", "permanent deferral", "CMV", "latency", "monocyte", "seronegative units", "leukoreduction", "premature neonate", "HSCT", "intrauterine transfusion"],
  answer: `
    <h4>HTLV</h4>
    <p><strong>HTLV-I</strong> and <strong>HTLV-II</strong> are deltaretroviruses that infect <strong>T lymphocyte</strong>s and are transmitted by sexual contact, from mother to child and by transfusion of cell-containing components. HTLV-I causes adult T-cell leukaemia/lymphoma (<strong>ATL</strong>) and HTLV-associated myelopathy/tropical spastic paraparesis (<strong>HAM/TSP</strong>), both after a long latency. Because the virus is cell-associated, acellular plasma and cryoprecipitate carry little risk, while whole blood, red cells and platelets do.</p>
    <ul>
      <li>Screening is routine in Japan, the United States and several European countries, but not universal worldwide.</li>
      <li>A confirmed reactive donor is <strong>permanent deferral</strong>-ed and counselled; lookback is performed.</li>
      <li>Leucoreduction lowers the viral load but is not a substitute for serological screening where the virus is prevalent.</li>
    </ul>
    <h4>CMV</h4>
    <p><strong>CMV</strong> is a herpesvirus that establishes <strong>latency</strong> in myeloid cells, including <strong>monocyte</strong>s and their progenitors. It is reactivated after transfusion when donor leucocytes engraft or release virus. In immunocompetent recipients infection is usually asymptomatic, but it can cause pneumonitis, hepatitis, retinitis and marrow suppression in:</p>
    <ul>
      <li><strong>premature neonate</strong>s, especially those of CMV-seronegative mothers;</li>
      <li>seronegative recipients of <strong>HSCT</strong> or solid organ transplants;</li>
      <li>recipients of <strong>intrauterine transfusion</strong> and severely immunosuppressed patients.</li>
    </ul>
    <h4>Providing CMV-safe blood</h4>
    <div class="table-wrap"><table>
      <tr><th>Strategy</th><th>Comment</th></tr>
      <tr><td><strong>Seronegative units</strong></td><td>The traditional standard for at-risk groups; requires a large donor base and does not exclude very early infection</td></tr>
      <tr><td><strong>Leukoreduction</strong></td><td>Removes most latently infected cells; widely used as an alternative, with a small residual risk</td></tr>
      <tr><td>NAT for CMV DNA</td><td>Not routine for donors; used in some specialised programmes</td></tr>
    </table></div>
    <p>Many services now issue universally leucoreduced components and reserve seronegative units for the highest-risk groups. Documentation of the strategy used is essential, because "CMV-safe" is a process claim rather than a laboratory result on the unit.</p>
  `,
  tip: "HTLV is cell-associated and needs serology; CMV prevention is a choice between seronegative units and leucoreduction.",
  sources: ["B1", "B5", "B8"]
},
{
  id: "ih151", domain: "ih-donor",
  q: "Describe the laboratory testing performed on the donor unit itself: ABO and D typing, antibody screening and additional donor qualifications.",
  tags: ["donor ABO", "weak D donor", "donor antibody screen", "sickle screening"],
  keypoints: ["forward grouping", "reverse grouping", "anti-A", "anti-B", "anti-D", "weak D", "DVI", "donor labelled D-positive", "unexpected antibody", "high-titre anti-A", "haemolysis", "haemoglobin screening", "sickle cell trait", "discrepancy"],
  answer: `
    <h4>ABO and D grouping of the donation</h4>
    <p>The donor unit is grouped by <strong>forward grouping</strong> with <strong>anti-A</strong> and <strong>anti-B</strong> reagents, and the result is confirmed against the donor's recorded group and, where required, a second sample. <strong>Reverse grouping</strong> with A1 and B cells is used to resolve <strong>discrepancy</strong>-ies, which in donors most often reflect a subgroup, an acquired B phenomenon or a weak reagent reaction rather than an error in the patient. The group printed on the label must be unambiguous before release.</p>
    <p>D typing uses a potent anti-D reagent. Donor reagents are deliberately chosen to detect <strong>weak D</strong> and partial phenotypes such as <strong>DVI</strong>, because a unit that carries any D epitope could immunise a D-negative recipient. For that reason a donor with weak D expression is <strong>donor labelled D-positive</strong>, in contrast to some patient-typing algorithms in which weak D types 1, 2 and 3 are managed as D-positive and others as D-negative.</p>
    <h4>Antibody screening of donor plasma</h4>
    <ul>
      <li>Donor plasma is screened for <strong>unexpected antibody</strong>. A positive screen usually means the red cells are still suitable, but the plasma or platelet component may be unsuitable, because passively transfused antibody can cause haemolysis in the recipient.</li>
      <li>Group O platelets and plasma are screened for <strong>high-titre anti-A</strong> and anti-B, or group A/AB plasma is substituted, to avoid haemolysis in a group A or B recipient.</li>
      <li>The policy for a positive donor screen must be written, since practices differ between services.</li>
    </ul>
    <h4>Additional donor qualifications</h4>
    <p><strong>Haemoglobin screening</strong> protects the donor and predicts the red cell content of the unit. Some programmes screen for <strong>sickle cell trait</strong> by solubility testing, because HbS-containing red cells may be excluded from neonatal exchange or intrauterine transfusion. Others measure total protein or check for lipaemia, which can interfere with testing. Every result is entered against the donation number so that the unit, its components and its records remain linked.</p>
  `,
  tip: "The key contrast is donor D typing (detect everything, label D-positive) versus patient D typing (selected weak D treated as D-negative).",
  sources: ["B1", "B5", "B2"]
},
{
  id: "ih152", domain: "ih-donor", star: true,
  q: "Describe standards for blood collection: donor identification, skin preparation, venepuncture, diversion, volume control and labelling.",
  tags: ["venepuncture", "diversion pouch", "skin antisepsis", "collection volume"],
  keypoints: ["two identifiers", "informed consent", "chlorhexidine", "povidone-iodine", "allow to dry", "single clean venepuncture", "diversion pouch", "skin plug", "anticoagulant", "450 mL", "over-collection", "under-collection", "label at the donor", "needle-stick"],
  answer: `
    <h4>Before the needle</h4>
    <p>The donor is identified by <strong>two identifiers</strong> and matched to the questionnaire and <strong>informed consent</strong>. Haemoglobin, weight, blood pressure, pulse and temperature are checked, and the arm is inspected for lesions, scarring or signs of injecting drug use. The collection number is recorded before venepuncture so that every tube and bag can be traced to the donor.</p>
    <h4>Skin preparation and venepuncture</h4>
    <ul>
      <li>Disinfect with <strong>chlorhexidine</strong> in alcohol or <strong>povidone-iodine</strong>, using concentric circles from the puncture site outwards, and <strong>allow to dry</strong> — drying is part of the antisepsis.</li>
      <li>Do not re-palpate the prepared site; if the vein must be re-located, re-prepare the skin.</li>
      <li>Use a large-bore needle and a <strong>single clean venepuncture</strong>, avoiding trauma, haematoma and prolonged tourniquet time.</li>
      <li><strong>Needle-stick</strong> and splash injuries are managed under the sharps policy, with prompt reporting and post-exposure prophylaxis assessment.</li>
    </ul>
    <h4>The diversion pouch</h4>
    <p>The first 20–40 mL of blood flows into a <strong>diversion pouch</strong> before the main bag fills. This discards the <strong>skin plug</strong> and the organisms it carries, and is one of the most effective single measures against bacterial contamination of platelets and red cells. The pouch is sealed and used for the donation samples, never returned to the bag.</p>
    <h4>Volume, anticoagulant and labelling</h4>
    <p>A standard collection is <strong>450 mL</strong> plus samples into a bag containing about 63 mL of CPD or CP2D, a ratio of roughly one part <strong>anticoagulant</strong> to seven parts blood. The bag is weighed or measured, because both <strong>over-collection</strong> (too little anticoagulant, risking clots) and <strong>under-collection</strong> (excess anticoagulant, risking red cell damage) reduce component quality; units outside the allowed range are rejected or restricted. Tubes are filled and <strong>label at the donor</strong>-side with the donation number and two identifiers, never in advance. The donor then rests, is observed, and receives post-donation advice.</p>
  `,
  tip: "The diversion pouch and 'label at the donor, never in advance' are the two details examiners remember.",
  sources: ["B1", "B5"]
},
{
  id: "ih153", domain: "ih-donor",
  q: "Discuss the modification of blood components: washing, volume reduction, aliquoting and cryopreservation.",
  tags: ["washed red cells", "aliquot", "deglycerolisation", "component modification"],
  keypoints: ["saline washing", "plasma protein", "IgA deficiency", "anti-IgA", "anaphylaxis", "open system", "24 hours", "volume reduction", "paediatric transfusion", "aliquot", "sterile connection", "glycerol", "deglycerolisation", "rare phenotype", "haemolysis"],
  answer: `
    <h4>Washing</h4>
    <p><strong>Saline washing</strong> removes <strong>plasma protein</strong>, residual antibody, potassium, citrate and cytokines. It is indicated for recurrent severe allergic reactions, for <strong>IgA deficiency</strong> with <strong>anti-IgA</strong> where anaphylaxis is a risk, and occasionally for neonatal or renal patients in whom potassium or protein load matters. Washing does not prevent TA-GVHD, does not reliably prevent CMV transmission, and is not a substitute for leucoreduction.</p>
    <ul>
      <li>An automated cell washer or a series of manual washes is used; the final supernatant should be clear.</li>
      <li>Washing is an <strong>open system</strong>, so the unit must be transfused within <strong>24 hours</strong> and stored at 1–6 °C.</li>
      <li>Red cell loss of 10–20% is expected, and the product is more fragile, with a higher risk of <strong>haemolysis</strong> if handled roughly.</li>
    </ul>
    <h4>Volume reduction</h4>
    <p><strong>Volume reduction</strong> removes supernatant plasma or additive solution to give a smaller volume at a higher haematocrit, for fluid-restricted neonates and small infants, or for intrauterine transfusion where a packed product is needed. It is usually performed by centrifugation and expression of supernatant, and carries the same 24-hour expiry once the system is opened.</p>
    <h4>Aliquoting</h4>
    <p><strong>Aliquot</strong>-ing splits a unit into smaller portions for <strong>paediatric transfusion</strong>, so that a single donation serves several small patients and wastage falls. A <strong>sterile connection</strong> device keeps the system closed and allows the original expiry date to be retained; a manually opened system limits the product to 24 hours. Each aliquot must carry the original donation number, the new volume, the expiry and the modification performed.</p>
    <h4>Cryopreservation</h4>
    <p>Red cells are frozen with <strong>glycerol</strong> as a cryoprotectant, at −65 °C or below for high-glycerol methods or about −120 °C for low-glycerol methods, and stored for up to ten years. <strong>Deglycerolisation</strong> removes the glycerol by osmotic washing before transfusion, after which the unit expires within 24 hours. The technique is reserved for <strong>rare phenotype</strong>s, autologous deposits and military or national reserves; it requires a validated protocol, careful labelling and a reliable freezer alarm system.</p>
  `,
  tip: "Every open-system modification collapses the expiry to 24 hours — say it once, explicitly.",
  sources: ["B1", "B5", "B2"]
},
{
  id: "ih154", domain: "ih-donor", star: true,
  q: "Discuss leucocyte reduction of blood components: methods, benefits, limitations and quality control.",
  tags: ["leucoreduction", "FNHTR", "HLA alloimmunisation", "residual WBC"],
  keypoints: ["pre-storage filtration", "post-storage filtration", "apheresis", "5 x 10^6", "febrile non-haemolytic reaction", "cytokines", "HLA alloimmunisation", "platelet refractoriness", "CMV", "TA-GVHD", "red cell loss", "hypotension", "ACE inhibitor", "Nageotte", "quality control"],
  answer: `
    <h4>Why leucocytes are removed</h4>
    <p>Residual donor leucocytes cause several problems: they release cytokines during storage, present HLA antigens, carry latent CMV and EBV, and can engraft in an immunosuppressed recipient. Leucocyte reduction lowers the dose of these cells and is the basis of several component claims.</p>
    <h4>Methods</h4>
    <ul>
      <li><strong>Pre-storage filtration</strong>, usually within 8 hours of collection while the unit is at room temperature, is the preferred method: it removes cells before cytokines accumulate and gives the most consistent results.</li>
      <li><strong>Post-storage filtration</strong> is performed in the laboratory before issue; it is less effective for preventing febrile reactions because cytokines are already present.</li>
      <li><strong>Apheresis</strong> collection can produce a leucoreduced component in-process.</li>
    </ul>
    <h4>Benefits</h4>
    <div class="table-wrap"><table>
      <tr><th>Outcome</th><th>Mechanism</th></tr>
      <tr><td>Fewer <strong>febrile non-haemolytic reaction</strong>s</td><td>Removal of leucocytes and the <strong>cytokines</strong> they release</td></tr>
      <tr><td>Less <strong>HLA alloimmunisation</strong> and <strong>platelet refractoriness</strong></td><td>Fewer antigen-presenting cells</td></tr>
      <tr><td>Reduced <strong>CMV</strong> transmission</td><td>Removal of latently infected myeloid cells</td></tr>
      <tr><td>Lower bacterial load</td><td>Some organisms are phagocytosed or retained in the filter</td></tr>
    </table></div>
    <h4>Limitations</h4>
    <p>Leucoreduction does <strong>not</strong> prevent <strong>TA-GVHD</strong> — irradiation or pathogen reduction is still required. It costs money, causes <strong>red cell loss</strong> of about 5–10%, and bedside filtration has been associated with <strong>hypotension</strong> in patients taking an <strong>ACE inhibitor</strong>. Universal leucoreduction consumes filters and staff time, so many services apply it selectively where resources are limited.</p>
    <h4>Quality control</h4>
    <p>The standard is a residual white cell content below <strong>5 x 10^6</strong> per unit in the United States, with a stricter European limit. Counting is performed by <strong>Nageotte</strong> chamber or flow cytometry on a sample from the unit, and the process is validated for each filter type and flow rate. Filters are checked for leaks and for correct orientation, and the results are trended as a quality indicator rather than accepted from the manufacturer's claim alone.</p>
  `,
  tip: "State clearly that leucoreduction is not irradiation — that confusion is the classic error.",
  sources: ["B1", "B2", "B5"]
},
{
  id: "ih155", domain: "ih-donor", star: true,
  q: "Discuss irradiation of blood components: mechanism, dose, indications, effects on the components and alternatives.",
  tags: ["irradiation", "TA-GVHD", "25 Gy", "component expiry"],
  keypoints: ["ionising radiation", "T lymphocyte", "TA-GVHD", "25 Gy", "dose mapping", "Hodgkin lymphoma", "fludarabine", "HSCT", "blood relatives", "intrauterine transfusion", "potassium", "28 days", "24 hours", "pathogen reduction", "not sterilisation"],
  answer: `
    <h4>Mechanism</h4>
    <p><strong>Ionising radiation</strong> damages DNA and prevents donor <strong>T lymphocyte</strong>s from proliferating. Those cells are responsible for <strong>TA-GVHD</strong>, in which donor lymphocytes engraft, recognise recipient HLA as foreign and attack the marrow, skin, liver and gut. Irradiation does not remove cells and does not sterilise the unit; it only stops them from dividing.</p>
    <h4>Dose and delivery</h4>
    <ul>
      <li>The standard dose is <strong>25 Gy</strong> to the centre of the container, with a minimum of 15 Gy at any point and a maximum of 50 Gy.</li>
      <li>The irradiator is validated with <strong>dose mapping</strong> and dosimetry, and each run is monitored with a physical or chemical indicator.</li>
      <li>The label records the dose, the date and the irradiating facility; a unit must not be re-irradiated to make up a dose.</li>
    </ul>
    <h4>Indications</h4>
    <div class="table-wrap"><table>
      <tr><th>Group</th><th>Examples</th></tr>
      <tr><td>Immunodeficiency</td><td>Congenital T-cell defects, severe combined immunodeficiency, <strong>HSCT</strong> (allogeneic and autologous) from conditioning onwards</td></tr>
      <tr><td>Haematological malignancy</td><td><strong>Hodgkin lymphoma</strong>, treatment with purine analogues such as <strong>fludarabine</strong>, alemtuzumab or anti-thymocyte globulin</td></tr>
      <tr><td>Neonates and fetuses</td><td><strong>Intrauterine transfusion</strong>, exchange transfusion, very preterm infants</td></tr>
      <tr><td>Directed donation</td><td><strong>Blood relatives</strong>, because of shared HLA haplotypes</td></tr>
    </table></div>
    <h4>Effects on the component and expiry</h4>
    <p>Irradiation accelerates the leak of <strong>potassium</strong> from red cells and increases haemolysis. Red cells may be stored until the original expiry or <strong>28 days</strong> after irradiation, whichever comes first, but for neonatal or large-volume use they should be transfused within <strong>24 hours</strong>. Platelets are irradiated and stored normally. Plasma and cryoprecipitate contain no viable leucocytes and do not require irradiation.</p>
    <h4>Alternatives and cautions</h4>
    <p><strong>Pathogen reduction</strong> with psoralen or riboflavin also inactivates leucocytes and can substitute for irradiation in treated components. Leucoreduction is not an alternative. Irradiation is never a reason to relax donor screening, and the request must be matched to a real indication so that a limited service is not overwhelmed.</p>
  `,
  tip: "Give the dose triad (25 Gy centre, 15 Gy minimum, 50 Gy maximum) and the 28-day and 24-hour expiry rules.",
  sources: ["B1", "B5", "B9"]
},
{
  id: "ih156", domain: "ih-donor", star: true,
  q: "Discuss the storage, transport and issue of blood components, including temperature control and the fate of units returned to the blood bank.",
  tags: ["cold chain", "transport", "30-minute rule", "temperature excursion"],
  keypoints: ["1-6 degrees", "20-24 degrees", "agitation", "minus 18", "validated container", "data logger", "cold chain", "30-minute rule", "four hours", "returned unit", "inspection", "backup power", "issue", "blood warmer"],
  answer: `
    <h4>Storage conditions</h4>
    <div class="table-wrap"><table>
      <tr><th>Component</th><th>Storage</th></tr>
      <tr><td>Red cells and whole blood</td><td><strong>1-6 degrees</strong> Celsius in a monitored refrigerator</td></tr>
      <tr><td>Platelets</td><td><strong>20-24 degrees</strong> Celsius with continuous <strong>agitation</strong> — never refrigerated</td></tr>
      <tr><td>Fresh frozen plasma and cryoprecipitate</td><td><strong>minus 18</strong> degrees Celsius or colder, preferably −25 °C or below</td></tr>
      <tr><td>Thawed plasma</td><td>1–6 °C, used within 24 hours (up to 5 days if relabelled as thawed plasma)</td></tr>
    </table></div>
    <p>Refrigerators and freezers are qualified, mapped, alarmed and connected to <strong>backup power</strong>; platelet incubators have agitators and their own alarms. Temperature is recorded continuously and reviewed, because a silent failure overnight is the commonest cause of a large loss of stock.</p>
    <h4>Transport</h4>
    <ul>
      <li>Components travel in a <strong>validated container</strong> with sufficient coolant, packed so that the temperature is maintained for the expected journey.</li>
      <li>A <strong>data logger</strong> or temperature indicator travels with the box; the receiving laboratory checks and records it before accepting the units.</li>
      <li>The <strong>cold chain</strong> is a shared responsibility between the blood centre, the porter and the ward, and is audited as a quality indicator.</li>
      <li>In an archipelago, road, sea and air legs must each be covered by the validation, including delays at ports and in traffic.</li>
    </ul>
    <h4>Issue and the ward</h4>
    <p>Before issue the unit is <strong>inspection</strong>-ed for leaks, clots, unusual colour and correct labelling; the patient's identity and the compatibility label are checked independently. Red cells are not warmed except in a <strong>blood warmer</strong> for rapid or massive transfusion, and no drug is added to the line. Once a unit leaves controlled storage, the <strong>30-minute rule</strong> applies: if it is not started within 30 minutes it must be returned, and a unit that has been out for longer than 30 minutes cannot be returned to stock. Transfusion must be completed within <strong>four hours</strong> of issue.</p>
    <h4>Returned units</h4>
    <p>A <strong>returned unit</strong> is accepted back only if it has been out of the refrigerator for less than 30 minutes, the bag is intact and the temperature is within limits. Otherwise it is discarded, with the reason documented. The rule exists because warm red cells support bacterial growth, and the cost of discarding a unit is far less than the cost of a septic reaction.</p>
  `,
  tip: "The 30-minute out-of-storage rule and the four-hour infusion limit are the two numbers to quote.",
  sources: ["B1", "B5"]
},
{
  id: "ih157", domain: "ih-donor",
  q: "Discuss plasma for fractionation and the concept of national self-sufficiency in plasma-derived medicinal products.",
  tags: ["plasma for fractionation", "self-sufficiency", "albumin", "IVIG"],
  keypoints: ["recovered plasma", "source plasma", "apheresis", "frozen within 24 hours", "Cohn cold ethanol", "albumin", "IVIG", "factor VIII", "solvent-detergent", "nanofiltration", "prion", "contract fractionation", "self-sufficiency", "donor vigilance"],
  answer: `
    <h4>Two kinds of starting material</h4>
    <p><strong>Recovered plasma</strong> is separated from a whole blood donation, usually <strong>frozen within 24 hours</strong> of collection to preserve labile factors. <strong>Source plasma</strong> is collected by <strong>apheresis</strong>, often in larger volumes and at dedicated centres, and is the main feedstock for fractionation. Both must meet the same infectious-disease screening standards as cellular components, and the plasma is held in quarantine until testing is complete.</p>
    <h4>Fractionation</h4>
    <p>Plasma is pooled and processed by <strong>Cohn cold ethanol</strong> fractionation, in which changing ethanol concentration, pH, temperature and ionic strength precipitates different protein classes. Modern plants add chromatography and dedicated viral inactivation steps.</p>
    <div class="table-wrap"><table>
      <tr><th>Product</th><th>Main clinical use</th></tr>
      <tr><td><strong>Albumin</strong></td><td>Volume expansion, plasma exchange, large-volume paracentesis</td></tr>
      <tr><td><strong>IVIG</strong></td><td>Immunodeficiency, immune thrombocytopenia, Guillain–Barré syndrome, Kawasaki disease</td></tr>
      <tr><td><strong>Factor VIII</strong> and von Willebrand factor</td><td>Haemophilia A and von Willebrand disease</td></tr>
      <tr><td>Prothrombin complex concentrate, fibrinogen, antithrombin</td><td>Reversal of anticoagulation, hypofibrinogenaemia, inherited deficiency</td></tr>
    </table></div>
    <h4>Safety of the pooled product</h4>
    <p>Because a pool may contain thousands of donations, one infected unit can contaminate a large batch. Safety therefore rests on donor selection, NAT, quarantine release and robust viral inactivation: <strong>solvent-detergent</strong> treatment for enveloped viruses, pasteurisation, low-pH incubation and <strong>nanofiltration</strong>. Non-enveloped viruses such as parvovirus B19 and hepatitis A are the residual concern, and <strong>prion</strong> removal is a design requirement for modern plants.</p>
    <h4>Self-sufficiency</h4>
    <p>The World Health Organization encourages countries to meet their needs for plasma-derived products from their own voluntary donors, supported by <strong>contract fractionation</strong> where no domestic plant exists. This avoids dependence on imported products and allows donor <strong>donor vigilance</strong> to be linked to the finished product. Most of Southeast Asia, including the Philippines, relies heavily on imported, virus-inactivated concentrates, so a national plasma programme must balance donor recruitment, freezer capacity, testing and affordability.</p>
  `,
  tip: "Explain why one infected donation matters more for pooled products, and name the inactivation steps.",
  sources: ["B8", "B7", "B5"]
},
{
  id: "ih158", domain: "ih-donor", star: true,
  q: "Discuss bacterial contamination of blood components: sources, consequences, prevention and investigation.",
  tags: ["bacterial contamination", "platelets", "Yersinia", "diversion pouch"],
  keypoints: ["skin flora", "coagulase-negative staphylococci", "diversion pouch", "donor bacteraemia", "Yersinia enterocolitica", "room temperature storage", "sepsis", "culture", "point-of-issue testing", "pathogen reduction", "visual inspection", "lookback", "febrile reaction"],
  answer: `
    <h4>Why it still happens</h4>
    <p>Blood is collected through skin that cannot be sterilised, and a small number of bacteria enter with the needle. Other sources are <strong>donor bacteraemia</strong> at the time of donation and contamination of the bag, anticoagulant or environment. Because components are not terminally sterilised, bacteria can multiply during storage.</p>
    <h4>Which components and which organisms</h4>
    <div class="table-wrap"><table>
      <tr><th>Component</th><th>Typical organisms and behaviour</th></tr>
      <tr><td>Platelets</td><td><strong>Skin flora</strong> — <strong>coagulase-negative staphylococci</strong>, <em>Cutibacterium</em>, <em>Bacillus</em>, <em>Staphylococcus aureus</em>. <strong>Room temperature storage</strong> makes platelets the highest-risk component</td></tr>
      <tr><td>Red cells</td><td><strong>Yersinia enterocolitica</strong> from an asymptomatic donor, which grows at 1–6 °C; also <em>Pseudomonas</em>, <em>Serratia</em> and other gram-negative rods</td></tr>
      <tr><td>Plasma</td><td>Rare, because it is frozen; contamination usually follows thawing or pooling</td></tr>
    </table></div>
    <h4>Consequences</h4>
    <p>Contaminated units cause fever, rigors, hypotension, shock and death. The presentation can be mistaken for a <strong>febrile reaction</strong> or for sepsis from another source, so the blood bank must be told and the unit and giving set returned for culture. A cluster of reactions from one donation should prompt immediate quarantine of co-components and a <strong>lookback</strong>.</p>
    <h4>Prevention</h4>
    <ul>
      <li>Careful skin preparation with an approved antiseptic and adequate drying time.</li>
      <li>The <strong>diversion pouch</strong>, which discards the skin plug — the single most effective collection measure.</li>
      <li>Donor questioning about recent fever, dental work, gastrointestinal illness and antibiotic use.</li>
      <li><strong>Culture</strong> of platelet units, either at issue or after 24 hours of incubation, with aerobic and anaerobic bottles.</li>
      <li><strong>Point-of-issue testing</strong> for bacterial antigen or nucleic acid where available, and <strong>pathogen reduction</strong> of platelets and plasma.</li>
      <li><strong>Visual inspection</strong> before issue for turbidity, discolouration or a "swirling" loss, remembering that a clear unit can still be contaminated.</li>
      <li>Keeping platelet shelf life short and avoiding unnecessary storage time.</li>
    </ul>
  `,
  tip: "Platelets are the high-risk component; diversion and culture are the two measures to name first.",
  sources: ["B1", "B5", "B9"]
},
{
  id: "ih159", domain: "ih-donor",
  q: "Discuss the World Health Organization framework for blood safety and availability, and how national blood programmes apply it.",
  tags: ["WHO", "national blood policy", "VNRBD", "quality systems"],
  keypoints: ["World Health Assembly", "national blood policy", "nationally coordinated blood transfusion service", "voluntary non-remunerated donation", "100 percent", "quality management system", "donor recruitment", "testing strategy", "component production", "clinical use", "haemovigilance", "self-sufficiency", "affordability"],
  answer: `
    <h4>The policy foundation</h4>
    <p>World Health Assembly resolution WHA28.72 in 1975 asked member states to promote the development of blood services based on voluntary donation and to protect donors and recipients. WHO's later guidance is consistent: a <strong>national blood policy</strong>, a <strong>nationally coordinated blood transfusion service</strong>, and collection from <strong>voluntary non-remunerated donation</strong> rather than paid or replacement donation.</p>
    <h4>The building blocks</h4>
    <div class="table-wrap"><table>
      <tr><th>Element</th><th>What it means in practice</th></tr>
      <tr><td>Governance</td><td>Legislation, a national policy, one coordinating authority, and licensing of facilities</td></tr>
      <tr><td>Donor programme</td><td>Education, <strong>donor recruitment</strong> and retention, a donor database, and a target of <strong>100 percent</strong> voluntary donation</td></tr>
      <tr><td>Testing</td><td>A defined <strong>testing strategy</strong> with quality-assured serology and, where feasible, NAT</td></tr>
      <tr><td><strong>Component production</strong></td><td>Separation into red cells, platelets and plasma so that each patient receives only what is needed</td></tr>
      <tr><td><strong>Quality management system</strong></td><td>Standard operating procedures, training, equipment qualification, audit and external assessment</td></tr>
      <tr><td><strong>Clinical use</strong></td><td>Guidelines, transfusion committees and patient blood management to avoid unnecessary transfusion</td></tr>
      <tr><td><strong>Haemovigilance</strong></td><td>Reporting and investigation of reactions, errors and infections, with feedback</td></tr>
      <tr><td><strong>Self-sufficiency</strong></td><td>Meeting demand from national donations, including plasma for fractionation</td></tr>
    </table></div>
    <h4>Application and tensions</h4>
    <p>WHO's global status reports repeatedly show wide inequality: high-income countries collect far more units per thousand population than low- and middle-income countries, and many rely on family replacement donors. A national programme must balance <strong>affordability</strong>, geography and staffing; in an archipelago, transport and cold chain are as important as laboratory method. WHO also stresses that safety and availability are linked — an unsafe supply destroys confidence, and a shortage drives patients to unsafe alternatives.</p>
    <h4>The Philippine example</h4>
    <p>The Philippines has translated this framework into the National Blood Services Act and the Philippine National Blood Services network, with DOH licensing of facilities. The remaining tasks are familiar: moving from replacement to voluntary donation, strengthening NAT and component capacity outside major centres, and building haemovigilance so that the system learns from its own adverse events.</p>
  `,
  tip: "Use the building blocks as a framework, then apply it to the Philippines — that structure earns marks.",
  sources: ["B8", "B7", "B6"]
},
{
  id: "ih160", domain: "ih-donor",
  q: "Discuss haemovigilance and vein-to-vein traceability: what is reported, how it is analysed, and why the donor is included.",
  tags: ["haemovigilance", "traceability", "donor vigilance", "near miss"],
  keypoints: ["vein to vein", "adverse event", "adverse reaction", "near miss", "donor vigilance", "ISBT definitions", "imputability", "severity", "wrong blood in tube", "root cause analysis", "transfusion committee", "confidentiality", "lookback", "quality indicator"],
  answer: `
    <h4>Definition and scope</h4>
    <p><strong>Haemovigilance</strong> is the organised surveillance of adverse events and reactions across the whole transfusion chain, from donor selection to recipient follow-up — the <strong>vein to vein</strong> pathway. It covers the donation, testing, processing, storage, issue, bedside administration and the recipient's subsequent course. <strong>Donor vigilance</strong> is the part that concerns donor reactions and donor-derived events.</p>
    <h4>What is reported</h4>
    <ul>
      <li><strong>Adverse reaction</strong>s in recipients: acute and delayed haemolysis, febrile and allergic reactions, TRALI, TACO, bacterial sepsis, TA-GVHD and transfusion-transmitted infection.</li>
      <li><strong>Adverse event</strong>s and errors: <strong>wrong blood in tube</strong>, mislabelled samples, wrong unit transfused, storage failure, delays and component wastage.</li>
      <li><strong>Near miss</strong>-es: errors intercepted before harm, which are the richest source of learning.</li>
      <li>Donor events: vasovagal reactions, arterial puncture, nerve injury, citrate effects and serious outcomes.</li>
    </ul>
    <h4>Analysis</h4>
    <p>Cases are classified using standard <strong>ISBT definitions</strong> for <strong>imputability</strong> (how likely the transfusion caused the event) and <strong>severity</strong>, so that data can be compared between hospitals and countries. Investigation uses a <strong>root cause analysis</strong> — timeline, interviews, records, and a search for system failures rather than individual blame. Findings go to the hospital <strong>transfusion committee</strong> and to the national scheme, and are fed back to the staff involved.</p>
    <h4>Traceability</h4>
    <p>Every unit must be linkable to its donor and to the recipient, and to its final fate. That linkage supports <strong>lookback</strong> after a donor seroconverts, recall of co-components, and investigation of a suspected infection. Records are kept for the period required by the standard, and <strong>confidentiality</strong> applies to both donor and recipient throughout.</p>
    <h4>Why it matters</h4>
    <p>Haemovigilance turns individual incidents into system change: a cluster of TACO cases leads to weight-based dosing and diuretic protocols; repeated sample errors lead to electronic identification at the bedside. It also provides <strong>quality indicator</strong>s — reactions per 1,000 units, near-miss rates, wastage — that a transfusion service can act on. A reporting system that punishes staff will collect nothing, so a just culture is a technical requirement, not a courtesy.</p>
  `,
  tip: "Distinguish reaction, event and near miss, and stress that near misses are the most useful signal.",
  sources: ["B9", "B1", "B5"]
},
{
  id: "ih161", domain: "ih-donor",
  q: "Discuss convalescent plasma: rationale, donor selection, collection, evidence and risks.",
  tags: ["convalescent plasma", "passive immunity", "neutralising antibody", "TRALI"],
  keypoints: ["passive immunity", "neutralising antibody", "recovered donor", "14 days", "symptom resolution", "plasmapheresis", "antibody titre", "male donor", "TRALI", "TACO", "randomised trial", "no mortality benefit", "early outpatient", "pathogen reduction", "emergency access"],
  answer: `
    <h4>Rationale</h4>
    <p><strong>Convalescent plasma</strong> transfers <strong>passive immunity</strong> from a donor who has recovered from an infection. It contains polyclonal <strong>neutralising antibody</strong> that may bind the pathogen and limit replication, and it was used long before modern trials for measles, Argentine haemorrhagic fever, SARS and Ebola. The theoretical benefit is greatest early in the illness, before the inflammatory phase dominates.</p>
    <h4>Donor selection and collection</h4>
    <ul>
      <li>A <strong>recovered donor</strong> with a documented diagnosis, usually at least <strong>14 days</strong> after <strong>symptom resolution</strong> and with a negative nucleic acid test at the time of donation, according to the protocol in force.</li>
      <li>The donor must otherwise meet routine criteria: age, weight, haemoglobin, history and infectious-disease screening.</li>
      <li><strong>Plasmapheresis</strong> collects 200–600 mL per session, allows repeat donation and returns the red cells.</li>
      <li><strong>Antibody titre</strong> is measured, and only units above a defined threshold are used where the protocol requires it.</li>
      <li>A <strong>male donor</strong> or a donor without a history of pregnancy is preferred where possible, to reduce the risk of HLA or HNA antibodies and hence <strong>TRALI</strong>.</li>
    </ul>
    <h4>Evidence</h4>
    <p>In COVID-19, large <strong>randomised trial</strong>s in hospitalised patients found <strong>no mortality benefit</strong>, and guidelines moved away from routine use. Some <strong>early outpatient</strong> trials suggested a modest benefit when high-titre plasma was given soon after symptoms began, but the effect was inconsistent and the practice remains protocol-driven rather than standard. Historical and observational series cannot separate plasma from concurrent care.</p>
    <h4>Risks and governance</h4>
    <p>The risks are those of any plasma: <strong>TRALI</strong>, <strong>TACO</strong>, allergic and febrile reactions, and transmission of infection if screening fails. Units are tested, leucoreduced where indicated and often treated with <strong>pathogen reduction</strong>. Collection, titration and issue require a written protocol, consent, ethics approval and an <strong>emergency access</strong> or research framework. As with any scarce product, the indication must be stated explicitly and the outcome audited, so that enthusiasm does not outrun the evidence.</p>
  `,
  tip: "Be balanced: the mechanism is sound, but hospitalised-patient trials were negative — timing and titre are the crux.",
  sources: ["B1", "B11", "B8"]
},
{
  id: "ih162", domain: "ih-donor",
  q: "Discuss blood service preparedness for disasters and emergencies, including surge demand, supply protection and recovery.",
  tags: ["disaster", "emergency preparedness", "blood stock", "triage"],
  keypoints: ["surge demand", "mass casualty", "emergency stock", "mutual aid", "group O red cells", "emergency release", "cold chain", "backup power", "unsolicited donation", "wastage", "donor appeal", "triage", "recovery", "drill"],
  answer: `
    <h4>What a disaster does to a blood service</h4>
    <p>A mass-casualty event creates <strong>surge demand</strong> for red cells and plasma within hours, while damaging the infrastructure needed to meet it: staff are injured or unable to travel, roads and ports close, power fails, and regular donors are displaced. The Philippines adds typhoons, earthquakes, volcanic eruptions and dengue outbreaks, each with a different pattern of demand.</p>
    <h4>Preparedness</h4>
    <ul>
      <li>A written plan with named roles, a communication tree and a single point of contact for clinicians and the media.</li>
      <li>An <strong>emergency stock</strong> of group O red cells and AB or low-titre A plasma, with a defined minimum level and a rule for replenishment.</li>
      <li><strong>Mutual aid</strong> agreements with neighbouring hospitals and the regional blood centre, tested in advance.</li>
      <li><strong>Backup power</strong> for refrigerators, freezers, agitators and alarms, and <strong>cold chain</strong> boxes ready for transport.</li>
      <li>Regular <strong>drill</strong>-s with the emergency department, laboratory and porters, including a simulated failure of the refrigerator alarm.</li>
      <li>A pre-agreed triage policy so that the most salvageable patients are prioritised, and a massive haemorrhage protocol with <strong>emergency release</strong> of <strong>group O red cells</strong>.</li>
    </ul>
    <h4>During the event</h4>
    <p>The blood bank switches to emergency issue, documents every unit released uncrossmatched, and labels the patient's sample for later grouping and compatibility testing. Stock is tracked on a whiteboard or electronic system so that the team knows what remains. Communication with the incident commander prevents the same unit being promised twice.</p>
    <h4>The trap: unsolicited donation</h4>
    <p>Public appeals after a disaster produce a wave of <strong>unsolicited donation</strong> that overwhelms staff, fills refrigerators and leads to <strong>wastage</strong> when the units expire. The correct message is a controlled <strong>donor appeal</strong> for specific groups at specific times, issued by the blood service rather than by the media. Platelets are particularly vulnerable, because they last only days.</p>
    <h4>Recovery</h4>
    <p>After the surge, the service must restock, reconcile units, replace equipment, debrief staff, and audit <strong>recovery</strong> times and wastage. Donors who gave during the emergency are the core of the next campaign: retention is the dividend of a well-managed response.</p>
  `,
  tip: "The counter-intuitive point — uncontrolled public appeals cause wastage — is what distinguishes a systems answer.",
  sources: ["B8", "B7", "B5"]
}
);
