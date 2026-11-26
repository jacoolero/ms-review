/* Flashcards — Immunohematology clinical practice, supply and special cases (set C) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-clc-", "ih-clinical", ["B14", "B17", "B12", "B1", "B13"], [
    ["What does a patient blood management programme aim to reduce?", "Avoidable <b>transfusion exposure</b> by treating anaemia, minimising blood loss and using restrictive thresholds."],
    ["Why does dengue season strain Philippine blood banks?", "Platelet and red cell demand rises in outbreaks while collections fall during holidays and storms; <b>prophylactic platelets in stable dengue</b> worsen the mismatch."],
    ["PhilHealth protection for qualified indigent patients", "<b>No Balance Billing</b> removes charges beyond the case rate in government facilities, but processing fees and transport may remain."],
    ["Component most contested between dengue and obstetric haemorrhage", "<b>Group O red cells</b> and <b>platelets</b>; dengue consumes platelets, while obstetric haemorrhage needs red cells, plasma and fibrinogen urgently."],
    ["When to phenotype a thalassaemia patient", "Before the <b>first transfusion</b>, because donor cells make later phenotyping unreliable; match Rh and K at minimum."],
    ["Why a panreactive crossmatch does not justify withholding blood in AIHA", "Symptomatic anaemia can be fatal; <b>adsorption</b> excludes an alloantibody, then give antigen-negative units and transfuse slowly."],
    ["Two indicators of massive transfusion protocol performance", "<b>Time to first unit</b> and <b>pack wastage</b>; add single-unit orders and reaction reporting to the committee dashboard."],
    ["AABB 2023 restrictive threshold and its main exception", "<b>70 g/L</b> for stable adults; <b>acute myocardial infarction</b> may need about <b>100 g/L</b> (MINT trial)."],
    ["Why continue eculizumab through pregnancy in PNH", "Stopping complement inhibition risks <b>breakthrough haemolysis and thrombosis</b>; plan delivery with obstetrics, haematology and anaesthesia."],
    ["Hyperhaemolysis: defining haemoglobin change and DAT finding", "Haemoglobin falls <b>below the pretransfusion level</b>; the <b>DAT may be negative</b>, so exclusion of other causes is essential."]
  ]);
})();
