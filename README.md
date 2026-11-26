# MS Review — Essay Q&A & Flashcards

A static study website for a Master's (MSMT) written comprehensive exam, covering four subjects:

| Subject | Essay Q&As | Flashcards |
|---|---|---|
| Advanced Medical Microbiology | 270 | 332 |
| Advanced Clinical Chemistry | 240 | 412 |
| Advanced Immunohematology | 180 | 296 |
| Advanced Parasitology | 180 | 296 |
| **Total** | **870** | **1,336** |

Every topic has **30 essay questions** and a matching flashcard deck (28–58 cards per topic).

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

Links: `#chem`, `#ih/ih-hdfn`, `#cards/para`, `#cards/chem/chem-renal`.

## Run locally

Double-click `start.cmd`, or:

```powershell
cd "C:\Users\Hakdog\Documents\Project\MS-REVIEW"
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
  domain: "chem-renal",       // a domain id from assets/data-core.js
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

## Note on sources

Actual Philippine masteral exam papers are not published, so these questions were written at Master's essay level. They are based on standard references (Tietz, Bishop, Henry, AABB Technical Manual, Harmening, Markell & Voge, Garcia, CDC DPDx, the Philippine Textbook of Medical Parasitology), current guidelines (ADA, KDIGO 2024, AABB 2023, WHO), and Philippine laws and DOH orders (RA 7719, AO 2008-0008, RA 9288, RA 11166). This is a revision aid, not a clinical protocol: check cut-offs, doses and Philippine regulations against the current editions.
