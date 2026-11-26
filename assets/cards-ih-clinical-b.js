/* Flashcards — Immunohematology clinical transfusion, AIHA & quality (set B) */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-clx-", "ih-clinical", ["B1", "B2", "B11"], [
    ["Advantage of whole blood over separate components in massive haemorrhage", "One donor provides red cells, plasma and platelets as a <b>single balanced product</b>; logistics are simpler, but platelet and labile factor function decline in storage."],
    ["Which red cells are issued before ABO confirmation in an emergency?", "Group <b>O red cells</b>, D-negative for females of childbearing potential; switch to type-specific units once the group is confirmed."],
    ["Why may the crossmatch remain incompatible in warm AIHA?", "The <b>panreactive autoantibody</b> coats all cells; adsorption studies are needed to exclude an underlying alloantibody before units are selected."],
    ["Diagnostic flow cytometry markers in PNH", "Loss of <b>CD55 and CD59</b> on red cells, with FLAER and CD55/CD59 analysis on granulocytes and monocytes."],
    ["Defining feature of hyperhaemolysis syndrome", "Post-transfusion haemoglobin falls <b>below the pretransfusion level</b>, with destruction of donor and recipient cells and often reticulocytopenia."],
    ["First-line antifibrinolytic in postpartum haemorrhage", "<b>Tranexamic acid</b>, given early alongside uterotonics and blood component support."],
    ["Two autologous blood conservation techniques in surgery", "<b>Cell salvage</b> and <b>acute normovolaemic haemodilution</b>; both reduce exposure to allogeneic blood."],
    ["Oncotic strength of 5% versus 20–25% albumin", "5% is <b>iso-oncotic</b>; 20–25% is <b>hyperoncotic</b> and draws fluid into the intravascular space."],
    ["Cause of haemolysis after high-dose IVIG", "Passive <b>anti-A and anti-B</b> in the pooled product coat recipient red cells, causing a positive DAT and anaemia."],
    ["Why must granulocyte concentrates be irradiated?", "To prevent <b>transfusion-associated graft-versus-host disease</b> from viable donor lymphocytes."],
    ["Core audit activity of the hospital transfusion committee", "<b>Utilization review</b> of transfusion appropriateness, with feedback to prescribers and corrective action."],
    ["Best-known ratio for red cell ordering efficiency", "<b>Crossmatch-to-transfusion ratio</b>; a high ratio indicates over-ordering and wastage."],
    ["Platelet transfusion in stable dengue with severe thrombocytopenia", "Not recommended <b>prophylactically</b>; reserve platelets for significant bleeding or invasive procedures."],
    ["Why irradiate components for haematological malignancy patients?", "To prevent <b>TA-GVHD</b> in stem cell transplant recipients and after purine analogue therapy."],
    ["Four elements of valid informed consent", "<b>Capacity, disclosure, understanding and voluntariness</b>; documentation follows the discussion."],
    ["Why avoid transfusion in a kidney transplant candidate?", "It causes <b>HLA alloimmunisation</b>, raising panel-reactive antibodies and complicating future crossmatching."],
    ["Specific reversal agent for dabigatran", "<b>Idarucizumab</b>; dialysis also removes dabigatran in severe renal failure."],
    ["Component modification for CMV-seronegative transplant recipients", "Use <b>CMV-safe</b>, leukoreduced components from seronegative donors or leukoreduced units."]
  ]);
})();
