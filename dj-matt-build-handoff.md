# DJ Matt Website — Build & Deploy Handoff

**Goal:** Turn the finished mockup (`dj-matt-mockup.html`) into a production-ready static site, host it free on Netlify, wire up a real booking form, and point a custom domain at it.

**Total cost:** ~$10/year (the domain). Hosting and form handling are free at this scale.

**The plan in one line:** mockup → GitHub repo (via Claude Code) → Netlify (free) → custom domain.

---

## Before you start

You'll want three free accounts:
- **GitHub** — stores the code (free).
- **Netlify** — hosts the site + handles the form (free tier).
- A **domain** — your only real cost. Buy it now or after you see the site live; either works.

The page itself doesn't care who hosts it. Only the booking form is Netlify-specific — if you ever move hosts, that's the one piece to rewire.

---

## Step 1 — Set up the project folder

1. Make a new empty folder, e.g. `dj-matt-site`.
2. Drop `dj-matt-mockup.html` into it.
3. Open Claude Code in that folder.

## Step 2 — Run the build prompt

Paste this into Claude Code. It does all the productionization (image localization, real form, SEO, accessibility) without touching the visual design:

```
You're working in a folder containing `dj-matt-mockup.html`, a finished single-page
website for a wedding/event DJ. Turn it into a production-ready static site I can
deploy to Netlify. Keep the visual design EXACTLY as-is — same layout, colors, fonts,
and animations. This is productionization, not a redesign. Do the following:

1. PROJECT STRUCTURE
   - Rename the page to `index.html`.
   - Extract the inline CSS into `css/styles.css` and inline JS into `js/script.js`,
     linked from index.html. Keep it a single page.
   - Add a sensible `.gitignore` and initialize a git repo with a clean first commit.

2. LOCALIZE & OPTIMIZE IMAGES
   - The mockup hotlinks several images from images.unsplash.com. Download each into
     `images/` with descriptive filenames (hero.jpg, about-decks.jpg, gallery-01.jpg,
     etc.) and update every reference in the HTML/CSS to the local files.
   - Resize to sensible max widths (hero ~1920px, cards/gallery ~1000px) and compress.
     Generate WebP versions with JPG fallback where it's straightforward.
   - Add explicit width/height and loading="lazy" to non-hero <img> tags.

3. MAKE THE BOOKING FORM REAL (Netlify Forms)
   - The current form is a demo (a button + JS that only shows a message). Convert it
     to a Netlify-handled form: add name="booking", method="POST", data-netlify="true",
     and a honeypot field. Give every field a proper name attribute.
   - On submit, show an inline success/thank-you state. Remove the fake demo JS handler.

4. HEAD / SEO / SOCIAL
   - Add a descriptive <title>, meta description, canonical link, lang="en", theme-color.
   - Add Open Graph + Twitter Card tags (title, description, og:image). Export a
     1200x630 version of the hero into images/ to use as the og:image.
   - Add a simple favicon (turquoise-on-black mark; SVG plus PNG/ICO).

5. ACCESSIBILITY & MOTION
   - Meaningful alt text on content images; decorative gallery images can be alt="".
   - Add a prefers-reduced-motion media query that disables the equalizer, marquee, and
     scroll animations for users who request reduced motion.
   - Ensure focus styles are visible on links, buttons, and form fields.

6. PLACEHOLDERS — DO NOT INVENT REAL DATA
   - Leave the current placeholder text in place but wrap each spot that needs Matt's
     real info in an HTML comment like <!-- TODO: replace with Matt's real ___ -->.
     Cover: business name/brand, contact email, phone, the stats numbers (15+/3/5.0),
     the testimonials, and the footer email.

7. README
   - Write a README.md covering: how to preview locally, how the Netlify form works,
     where images live and how to swap them, and the full list of TODO placeholders to
     fill before launch.

When done, summarize what changed and give me the exact steps to deploy to Netlify.
```

## Step 3 — Push to GitHub

Claude Code can do this for you if your GitHub CLI is authenticated — just ask it to "create a GitHub repo and push." Otherwise, create an empty repo on github.com and run:

```
git remote add origin https://github.com/<you>/dj-matt-site.git
git branch -M main
git push -u origin main
```

## Step 4 — Deploy on Netlify (free)

1. Log into Netlify → **Add new site** → **Import an existing project** → connect GitHub → pick the repo.
2. Build settings: **Build command** = leave blank, **Publish directory** = the folder with `index.html` (usually the repo root). Deploy.
3. **Forms work automatically.** Because the form has `data-netlify="true"`, Netlify detects it on deploy. Go to **Site → Forms** to see submissions.
4. Set up notifications: **Site settings → Forms → Form notifications → add Matt's email**, so every inquiry hits his inbox.

> Netlify's free tier caps monthly form submissions — check the current number, but it's comfortably more than a wedding-DJ booking page will ever see.

Every future `git push` now redeploys the site automatically.

## Step 5 — Custom domain

1. Buy the domain (Namecheap or Cloudflare Registrar — Cloudflare has the flattest renewal pricing; Namecheap has the friendlier dashboard).
2. In Netlify: **Domain settings → Add a custom domain** → follow the prompts.
3. Easiest route: switch your registrar's nameservers to Netlify DNS (Netlify shows you the exact values). Or add the records Netlify gives you at your registrar.
4. HTTPS provisions automatically (free, via Let's Encrypt). Done.

## Step 6 — After launch

- **Swap in real photos.** When Matt's wedding shoot comes in, replace the files in `images/` keeping the same filenames — zero code changes needed. Target shots: a strong vertical of him at the booth, a hands-on-the-decks detail, and a packed-floor wide.
- **Fill the TODO placeholders** (see the README the build generates).
- **Get found locally.** Set up a free **Google Business Profile** and submit the site to **Google Search Console**. For a local wedding vendor, this is the single highest-impact thing for showing up when couples search "wedding DJ Overland Park."

---

## Placeholders to replace before launch

- [ ] Business name / brand (currently "MATT")
- [ ] Contact email (currently `hello@djmatt.com`)
- [ ] Phone number (if Matt wants one listed)
- [ ] Stats: years experience, residencies, rating (currently 15+ / 3 / 5.0★)
- [ ] Testimonials (currently sample couples/venues)
- [ ] Real photos (currently Unsplash placeholders — all free-license, safe to ship temporarily)

---

## Cost recap

| Item | Cost |
|---|---|
| Static hosting (Netlify free tier) | $0 |
| Booking form (Netlify Forms) | $0 |
| HTTPS certificate | $0 |
| Domain (.com) | ~$10/year |
| **Total** | **~$10/year** |
