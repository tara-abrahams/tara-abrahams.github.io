# taraabrahams.github.io

Personal portfolio and CV site for **Tara R. Abrahams** —
criminologist, qualitative researcher, and strategic communicator.

---

## Publishing on GitHub Pages

1. Create a repository named exactly **`taraabrahams.github.io`** on GitHub.
2. Upload all files from this folder into that repository (or push via Git).
3. Go to the repository on GitHub → **Settings → Pages**.
4. Under **"Branch"**, select `main` (or `master`) and the root `/` folder. Click **Save**.
5. Wait 1–2 minutes. Your site will be live at **https://taraabrahams.github.io**.

---

## File Structure

```
taraabrahams.github.io/
├── index.html          ← Main site file — edit content here
├── style.css           ← All styles and design system
├── script.js           ← Theme toggle, mobile menu, expand/collapse
├── assets/
│   ├── placeholder-image.svg   ← Replace with your real photos
│   └── cv-tara-abrahams.pdf    ← Place your CV PDF here (update file if needed)
└── README.md           ← This file
```

---

## How to Update Each Section

### Contact info (email + LinkedIn)
Already filled in with `tara.rose.abrahams@gmail.com` and
`https://www.linkedin.com/in/tararoseabrahams/`. To change either one later,
open `index.html`, search for the `<!-- *** EDIT: Public email address` and
`<!-- *** EDIT: LinkedIn profile URL` comments in the Contact section, and
update both the link (`href`) and the displayed text right below it.

### CV / Resume PDF
1. Export your updated CV as a PDF.
2. Name it `cv-tara-abrahams.pdf`.
3. Place it in the `/assets/` folder (replace the existing file, or update the filename).
4. If you use a different filename, find `cv-tara-abrahams.pdf` in `index.html` and update the `href`.

### Bio (About section)
Search for `<!-- *** EDIT: Full professional bio` in `index.html`.
Replace or adjust the three `<p>` paragraphs in the `.bio-text` div with your finalized bio text.

### Research section
Search for `<!-- *** EDIT: Replace with your actual research interests` to find each research card.
Update the bullet lists, dissertation card text, publications, and teaching entries as your work develops.

---

## Adding Your Selected Work (Air Force stories)

The Selected Work section contains one visible sample entry with placeholder text.

Only **Item 1** is currently visible on the live page (so the section doesn't
look unfinished with several empty cards). Items 2–10 are commented out in
`index.html` as ready-to-use templates — same headline/summary/photos/expand
pattern as Item 1.

**For each story you want to add:**

1. Find the item in `index.html` (look for `<!-- WORK ITEM 1 -->`, `<!-- WORK ITEM 2 -->`, etc.).
   For items 2 and up, delete the `<!--` line right below the item's comment
   header and the closing `-->` line at the end of the block to make it visible.
2. Replace the following placeholders:
   - `REPLACE_HEADLINE_HERE` → your story headline
   - `REPLACE_SUMMARY_HERE` → 2–3 sentence summary of the story
   - `REPLACE_FULL_TEXT_HERE` → your full article text (use multiple `<p>` tags for paragraphs)
   - `REPLACE_IMAGE_SRC_HERE` → path to your photo, e.g. `assets/story1-photo.jpg`
   - `REPLACE_ALT_TEXT_HERE` → short descriptive alt text for the photo
   - `REPLACE_CAPTION_HERE` → your official photo caption

3. Add your photo to the `/assets/` folder.

**To add items beyond 10:**
Copy any existing `<!-- WORK ITEM --> ... </article>` block, paste it at the
end of `.work-list`, and update its number and `work-body-N` id.

---

## Adding a Headshot (optional)

1. Save a professional photo to `/assets/headshot.jpg` (or `.png`).
2. In `index.html`, find the `<!-- UNCOMMENT and edit the line below...` comment in the About section.
3. Uncomment that `<img>` line and update the `src` if your filename differs.
4. The `.headshot-placeholder` div directly below it can be deleted once your photo is in place.

---

## Future additions

When you're ready to add more content:

- **Publications & Presentations** — fill in the Research card marked with `placeholder-inline` text.
- **Teaching** — fill in the Teaching card the same way.
- **CV PDF** — export your CV as a PDF, name it `cv-tara-abrahams.pdf`, and drop it in `/assets/`. The download button on the CV page will pick it up automatically once the file exists.
- **More Selected Work items** — uncomment and fill in items 2–10 as described above.
- **Projects section** — add a new `<section>` following the same pattern as an existing section.

## Notes on recent revisions

This site was audited and revised for hiring-focused impact (research +
communications roles, Trust & Safety-adjacent but not T&S-only):

- Homepage intro tightened to lead with the PhD/research identity.
- About bio rewritten with civilian-friendly, past-tense military language
  (public affairs specialist, full separation, no ongoing obligations).
- The old "Trust & Safety note" highlighted box was removed from About and
  folded into one plain sentence at the end of the bio, and a matching plain
  sentence was added to Research — both mention T&S alongside UX/behavior
  research and research-informed communications generally, so the site
  doesn't read as a single-purpose T&S pitch.
- Selected Work trimmed to one visible example item with items 2–10 kept as
  ready-to-use commented templates (see above), and photo height reduced
  slightly so this section doesn't visually outweigh Research/CV.
- CV page: Master's entry and Air Force entry filled in with real details.
- Contact section: email and LinkedIn are live.

---

## Technical notes

- Plain HTML/CSS/JS. No build step, no framework.
- Light and dark mode toggle (stored per session, respects system preference).
- Mobile-responsive with a hamburger menu on small screens.
- Accessible: semantic HTML, ARIA labels, keyboard navigation, focus styles.
- The expand/collapse on Selected Work items uses CSS `display: none/block` — no external library needed.
