/* Flashcards — Strongyloides (p6): additional set */
(() => {
  const add = (prefix, domain, sources, pairs) => pairs.forEach(([front, back], i) =>
    window.CARDS.push({ id: `${prefix}${i + 1}`, domain, front, back, sources }));

  add("fc-p6h-", "p6", ["P1", "P2", "P3", "P4"], [
    ["Why can strongyloidiasis persist for decades without re-exposure?", "<b>Autoinfection</b>: rhabditiform larvae moult to infective filariform larvae in the gut or on perianal skin and re-enter the host."],
    ["How do <i>Strongyloides</i> larvae cause polymicrobial sepsis?", "Larvae crossing the bowel wall carry <b>enteric bacteria</b> on their cuticle and in their gut, causing <b>bacteraemia and meningitis</b>."],
    ["Which stool method is most sensitive in chronic strongyloidiasis?", "<b>Agar plate culture</b> — larvae leave visible bacterial tracks; Baermann is simpler, single microscopy is unreliable."],
    ["Standard ivermectin regimen for uncomplicated strongyloidiasis", "<b>200 µg/kg</b> orally once daily for <b>two days</b>; repeat the course if larvae persist."],
    ["When should elective strongyloidiasis screening be completed before immunosuppression?", "<b>Four to six weeks</b> before therapy, so treatment and repeat stool testing can finish first."],
    ["How does HTLV-1 change the laboratory picture of strongyloidiasis?", "It suppresses <b>Th2</b> immunity, lowering <b>IgE and eosinophils</b> and often making serology <b>negative</b>."],
    ["When should stool be rechecked after treating strongyloidiasis?", "At <b>two to four weeks</b> and again at <b>three to six months</b>; serology is not a test of cure."]
  ]);
})();
