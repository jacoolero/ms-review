# MS Review — Essay Q&A & Flashcards

A static study website for a Master's (MSMT) written comprehensive exam, covering four subjects:

| Subject | Essay Q&As | Flashcards |
|---|---|---|
| Advanced Medical Microbiology | 390 | 452 |
| Advanced Clinical Chemistry | 341 | 513 |
| Advanced Immunohematology | 200 | 299 |
| Advanced Parasitology | 130 | 134 |
| **Total** | **1,061** | **1,398** |

The bank now follows the **2026 Comprehensive Examination pointers** for all four subjects. Topic counts vary because content was re-mapped to the pointers and off-list material was removed from the site.

Every essay answer and flashcard cites its source (textbooks, guidelines, Philippine laws and DOH orders). Open **References** in the sidebar to see the full list for each subject.

## Features

- **Subject tabs**, with topic filters for each subject.
- **Answer first**: type your own answer, press **Submit & compare**, and the site checks it against the key points of the model answer — a coverage score, green chips for the points you covered, red for the ones you missed, your answer side by side with the model answer (missed points highlighted), a self-grade, and a history of your attempts. Toggle it off with **Answer first: On/Off** to simply read the answers; it is always on in Practice sets.
- **Essays**: model answers in different formats (comparison tables, worked calculations, case interpretations, algorithms, short notes), an exam tip, and sources for each.
- **Practice**: a random set of 10 essay questions from the current subject, with answers hidden.
- **Flashcards**: flip a card, then rate it Again / Good / Easy. Cards come back after 1 → 3 → 7 → 14 → 30 → 60 days. Use *Due cards* or *Study all*.
- Search (`/`), dark mode, print/PDF, "reviewed" ticks, and a phone-friendly layout.
- Progress is saved **in your browser** (localStorage), so each device keeps its own progress.

Note on the coverage score: it compares key *terms*, not meaning, so it cannot judge your reasoning or structure — that is what the self-grade is for.

Keyboard: `/` search · `r` open the first essay · flashcards: `Space` flip, `1` Again, `2` Good, `3` Easy.

Links: `#chem`, `#ih/b1`, `#cards/para`, `#cards/chem/c6`.

## 2026 Comprehensive Exam Pointer Alignment

The site is now organised by the official 2026 comprehensive-exam pointer lists:

- **Microbiology (15):** host–microbe interaction/transmission; bacterial biology and pathogenesis; sterilisation/disinfection/vaccines; AMS and the medical technologist; genetic engineering and industrial microbiology; microbiology automation (BactAlert, Vitek, MALDI-TOF, BioFire); Gram-positive/Gram-negative cocci and bacilli; anaerobes, actinomyces, mycobacteria, atypicals and spirochetes; viral classification/replication/pathogenesis; DNA and RNA viruses; coronaviruses; HIV; prions; superficial/cutaneous/subcutaneous mycoses; systemic/opportunistic mycoses.
- **Clinical Chemistry (14):** safety/specimen management/QA-QC; instrumentation/automation; emerging biomarkers; carbohydrates/diabetes; proteins/amino acids/NPN; lipids/CVD risk; clinical enzymology; electrolytes/acid–base; renal/kidney biomarkers; hepatic function; endocrinology; TDM; toxicology; molecular diagnostics/genomics.
- **Immunohematology (6):** blood groups; antibody screening/identification; pre-transfusion/compatibility; donor screening/deferrals/adverse effects; components/indications/increments; TTD/transfusion reactions/resolutions.
- **Parasitology (10):** *Schistosoma japonicum*, *Echinococcus*, *Echinostoma*, *Sarcocystis*, *Toxocara*, *Strongyloides*, *Taenia*, *Blastocystis*, *Scabies*, and history of parasitology/advances in diagnosis.

`assets/pointer-topics.js` performs the mapping at load time and excludes material not covered by the pointers. Off-list content (for example, HDFN and non-pointer parasitic diseases such as malaria and amoebiasis) is no longer shown, but the original data files are retained so the mapping can be changed without losing content.

## Run locally

Double-click `start.cmd`, or:

```powershell
cd path\to\MS-REVIEW
python -m http.server 8017
# open http://localhost:8017
```

## The site

Live at **https://msreview.nyorkie.org** (also reachable at https://jacoolero.github.io/ms-review/, which redirects). The DNS record lives in Cloudflare: a CNAME `msreview` → `jacoolero.github.io`, set to **DNS only** (grey cloud) so GitHub can issue the certificate. The `CNAME` file in this repo must keep the domain name, or Pages will drop the custom domain on the next deploy.

## Update the online site (GitHub Pages)

```powershell
git add -A
git commit -m "Add more questions"
git push
```

GitHub Pages republishes in about a minute.

## Add content

**Essay question** — add to an `assets/data-*.js` file:

```js
{
  id: "cc61",                 // unique
  domain: "c9",               // a pointer topic id from assets/pointer-topics.js
  star: true,                 // optional "High yield" tag
  q: "Essay question?",
  tags: ["tag1", "tag2"],
  answer: `<h4>Heading</h4><p>…</p>`,   // HTML; .table-wrap, .calc and .case boxes available
  tip: "One-line exam strategy.",
  keypoints: ["term", "another term"],  // optional; used by the answer comparison
  sources: ["C1", "C7"]       // ids from data-core.js / sources-extra.js
}
```

If `keypoints` is omitted, the site extracts the key terms automatically from the bold text, table headings and tags of the answer. Add an explicit `keypoints` array when an answer has few bold terms.

**Flashcard** — add a `["front", "back"]` pair to the right group in `assets/cards-*.js`. Append new pairs at the **end** of a group so existing card ids (and your saved progress) stay the same.

Source id prefixes: `S` microbiology, `C` clinical chemistry, `B` immunohematology (blood bank), `P` parasitology.

## Philippine master's-level sources

The Philippine-context questions cite the references commonly used in MS Medical Technology/Medical Laboratory Science graduate programs and local practice:

- **Microbiology and infectious diseases:** PSMID clinical practice guidelines (adult TB, CAP, acute diarrhoea, sepsis, UTI, HIV opportunistic infections); DOH National TB Control Program Manual of Procedures, 6th ed.; RITM reference-laboratory guidance; DOH AMR surveillance/GLASS.
- **Professional and regulatory:** RA 5527 (Philippine Medical Technology Act of 1969) as amended by PD 498 and PD 1534; RA 7719 (National Blood Services Act); RA 9288 (Newborn Screening); RA 11166 (HIV/AIDS Policy); RA 11332 (Notifiable Diseases); RA 10767 (TB Elimination); RA 4688 (Clinical Laboratory Act); DOH AO 2021-0037 (laboratory licensing); DOH AO 2005-0002 and AO 2010-0002 (blood services); CHED CMO 13 s.2017 and CMO 15 s.2019.
- **Professional bodies:** PAMET, PASMETH, Philippine Blood Coordinating Council (PBCC), PRC Board of Medical Technology.
- **Clinical chemistry:** PCEDM type 2 diabetes CPG (2025–2026), Philippine Lipid and Atherosclerosis Society dyslipidaemia CPG (2020), PSEM/PCEDM endocrine guidance, PhilHealth laboratory benefits.
- **Parasitology:** Belizario & de Leon, *Philippine Textbook of Medical Parasitology*; DOH Malaria, Schistosomiasis, Filariasis and Integrated Helminth Control programmes; WHO Western Pacific NTD reports.

Program structures reviewed include the MS Medical Technology/MS Medical Laboratory Science curricula of Centro Escolar University, University of Santo Tomas, University of the Immaculate Conception, Philippine Women's University, and Our Lady of Fatima University (advanced microbiology, advanced clinical chemistry, applied immunohematology, medical parasitology in public health, research/biostatistics, and total quality laboratory management).

## Note on sources

Actual Philippine masteral exam papers are not published, so these questions were written at Master's essay level. They are based on standard references (Tietz, Bishop, Henry, AABB Technical Manual, Harmening, Markell & Voge, Garcia, CDC DPDx, the Philippine Textbook of Medical Parasitology), current guidelines (ADA, KDIGO 2024, AABB 2023, WHO, PSMID), and Philippine laws and DOH orders (RA 5527, RA 7719, RA 9288, RA 11166, RA 11332, AO 2008-0008, AO 2021-0037). This is a revision aid, not a clinical protocol: check cut-offs, doses and Philippine regulations against the current editions.

## Accounts and sync

Signing in (Google or email/password) saves essay attempts, scores, reviewed marks, flashcard schedules and the answer-first setting to the person's account through Firebase. Without signing in, everything stays in the browser as before.

- `assets/firebase-config.js` holds the Firebase web config (public by design). Set it to `null` to turn accounts off.
- `assets/sync.js` merges browser data into the account on first sign-in, uploads later changes (queued offline), and clears the device on sign-out.
- `firestore.rules` restricts each user to `users/{uid}`; paste it into Firebase console → Firestore → Rules after any change.
- New domains must be added under Firebase → Authentication → Settings → Authorized domains.

## My progress page

The **Progress** tab (also opened from the account icon, `#progress`) shows the study streak with a 17-week activity grid, a per-subject overview (essays reviewed, average best score, flashcards learned and due), the five weakest topics with a *Study this* shortcut, the last ten essay answers, and controls to erase progress or delete the account. Daily activity is stored in `ms-activity-v1` (synced with the account) and is rebuilt from essay attempt dates for older data. Rendering lives in `assets/progress.js`.
