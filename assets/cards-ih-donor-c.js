/* Flashcards — Immunohematology: donors and components, part C */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));

  add("fc-dnc-", "ih-donor", ["B14", "B15", "B17", "B8"], [
    ["Enactment date of the National Blood Services Act", "<b>2 April 1994</b> — RA 7719, passed after advocacy against commercial blood banking."],
    ["AO 2005-0002 versus AO 2010-0002", "2005 creates the <b>Philippine National Blood Services</b> network; 2010 establishes multi-sectoral <b>Local Blood Councils</b>."],
    ["Which PBCC course targets donor recruitment and retention?", "The <b>Blood Donor Recruitment, Retention and Care</b> seminar; PBCC also issues standards and public information but does not sell blood."],
    ["How many blood service facilities does the Philippine Red Cross run?", "About <b>100</b> — roughly 31 blood centres and 71 collection units, with the National Blood Center in Mandaluyong."],
    ["Why culture platelet units after 24 hours of storage?", "Low-level contamination has amplified, improving detection; use aerobic and anaerobic bottles, with point-of-issue testing as a supplement."],
    ["What is temperature mapping of a blood refrigerator?", "Measuring temperatures at multiple points with the unit empty and full, then challenging alarms and backup power."],
    ["Why do dengue outbreaks reduce blood collections?", "Donors are ill or caring for relatives, recovered donors are deferred, mobile drives are cancelled, and staff are redeployed."],
    ["Two methods to count residual leucocytes", "<b>Nageotte chamber</b> or <b>flow cytometry</b>, with validation for each filter type and flow rate."],
    ["What is dose mapping in blood irradiation?", "Measuring the dose throughout the canister with the actual bag configuration; the timer is then set from source activity and decay."],
    ["Lookback versus trace-back: which starts with the donor?", "<b>Lookback</b> starts with a reactive or seroconverting donor; <b>trace-back</b> starts with an infected recipient."]
  ]);
})();
