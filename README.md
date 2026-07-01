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
Open `index.html` and search for:
- `YOUR_EMAIL_HERE` — replace both instances with your actual email.
- `YOUR_LINKEDIN_URL_HERE` — replace with your full LinkedIn URL (e.g. `https://linkedin.com/in/tara-abrahams`).
- Also update the displayed value `linkedin.com/in/taraabrahams` to match.

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

The Selected Work section contains 3 sample entries with placeholder text.

**For each story you want to add:**

1. Find the item in `index.html` (look for `<!-- WORK ITEM 1 -->`, `<!-- WORK ITEM 2 -->`, etc.)
2. Replace the following placeholders:
   - `REPLACE_HEADLINE_HERE` → your story headline
   - `REPLACE_SUMMARY_HERE` → 2–3 sentence summary of the story
   - `REPLACE_FULL_TEXT_HERE` → your full article text (use multiple `<p>` tags for paragraphs)
   - `REPLACE_IMAGE_SRC_HERE` → path to your photo, e.g. `assets/story1-photo.jpg`
   - `REPLACE_ALT_TEXT_HERE` → short descriptive alt text for the photo
   - `REPLACE_CAPTION_HERE` → your official photo caption

3. Add your photo to the `/assets/` folder.

**To add items 4–10:**
Scroll to the bottom of the `<!-- WORK ITEMS 4–10 -->` comment in `index.html`.
Copy the commented-out template block, uncomment it, and update the number and content.

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
- **More Selected Work items** — follow the template above to add items 4–10.
- **Projects section** — add a new `<section>` following the same pattern as an existing section.

---

## Technical notes

- Plain HTML/CSS/JS. No build step, no framework.
- Light and dark mode toggle (stored per session, respects system preference).
- Mobile-responsive with a hamburger menu on small screens.
- Accessible: semantic HTML, ARIA labels, keyboard navigation, focus styles.
- The expand/collapse on Selected Work items uses CSS `display: none/block` — no external library needed.
