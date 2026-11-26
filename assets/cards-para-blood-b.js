/* Flashcards — blood & tissue protozoa, set B */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: prefix + (i + 1), domain, front, back, sources }));
  add("fc-blx-", "para-blood", ["P1", "P2", "P3", "P7"], [
    ["Malaria stage that produces dormant hypnozoites", "Liver schizogony; <b>P. vivax</b> and <b>P. ovale</b> form hypnozoites."],
    ["Drug class used for radical cure of vivax malaria", "<b>8-Aminoquinolines</b> — primaquine or tafenoquine, after G6PD testing."],
    ["Placental malaria adhesion molecule", "<b>VAR2CSA</b> binds chondroitin sulfate A; primigravidae are most affected."],
    ["Antigen targeted by RTS,S and R21 vaccines", "<b>Circumsporozoite protein</b> — both are pre-erythrocytic vaccines."],
    ["Mechanism of artemisinin action", "An <b>endoperoxide bridge</b> activated by haem iron generates free radicals."],
    ["Molecular marker of chloroquine resistance", "<b>pfcrt K76T</b>; pfmdr1 copy number modulates the level."],
    ["Test that separates recrudescence from reinfection", "<b>PCR genotyping</b> of msp1, msp2 and glurp."],
    ["Malaria prophylaxis that requires G6PD testing", "<b>Tafenoquine</b>; primaquine also needs G6PD assessment for radical cure."],
    ["Parasite causing severe transfusion infection in asplenia", "<b>Babesia microti</b> survives refrigerated red cell storage."],
    ["Classic description of ocular toxoplasmosis", "<b>Headlight in the fog</b> — focal retinochoroiditis with vitritis."],
    ["Why rK39 may be negative in HIV co-infection", "Antibody responses are impaired; use <b>marrow, blood PCR or urine antigen</b>."],
    ["Best site to sample a cutaneous leishmaniasis ulcer", "The <b>active edge</b>, for amastigotes on slit-skin smear or biopsy."],
    ["Examination that defines stage 2 sleeping sickness", "<b>Lumbar puncture</b> — CSF trypanosomes or raised white cell count."],
    ["Oral drug for both stages of gambiense sleeping sickness", "<b>Fexinidazole</b>; acoziborole is a single-dose candidate."],
    ["Trial that tempered antitrypanosomal therapy in Chagas cardiomyopathy", "<b>BENEFIT</b> — no significant reduction in cardiac events."],
    ["Sheathed microfilaria with nuclei to the tail tip", "<b>Loa loa</b> — diurnal periodicity."],
    ["Two mechanisms of insecticide resistance in Anopheles", "<b>Target-site (kdr)</b> and <b>metabolic</b> detoxification."],
    ["Antimalarial never combined with co-trimoxazole prophylaxis", "<b>Sulfadoxine-pyrimethamine</b> for IPTp — additive antifolate toxicity."]
  ]);
})();
