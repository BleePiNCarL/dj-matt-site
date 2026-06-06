# DJ Matt — Wedding & Event DJ Website

Static single-page site for a wedding/event DJ, ready to deploy on Netlify.

## Local Preview

Open `index.html` directly in a browser, or use any static server:

```bash
# Python
python3 -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000`.

## Netlify Forms

The booking form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). Key attributes on the `<form>`:

- `name="booking"` — form name in the Netlify dashboard
- `method="POST"` / `data-netlify="true"` — activates Netlify form handling
- `netlify-honeypot="bot-field"` — hidden honeypot field for spam filtering
- A hidden `<input name="form-name" value="booking">` is included for the JS fetch submission

On successful submit, the form fields hide and an inline thank-you message appears (no page redirect). Submissions show up under **Forms** in the Netlify dashboard. You can configure email notifications there.

## Images

All images live in `images/`. Each has a `.jpg` original and a `.webp` compressed version.

| File | Used for |
|------|----------|
| `hero.jpg/.webp` | Hero background (CSS) |
| `svc-weddings.jpg/.webp` | Services — Weddings card |
| `svc-corporate.jpg/.webp` | Services — Corporate card |
| `svc-parties.jpg/.webp` | Services — Private Parties card |
| `about-decks.jpg/.webp` | About section portrait |
| `gallery-04.jpg/.webp` | Gallery (unique image) |
| `og-image.jpg/.webp` | Open Graph / social share image (1200x630) |
| `favicon.svg` | SVG favicon |
| `favicon.png` | PNG favicon / Apple touch icon |

To swap an image, replace the file at the same path and dimensions. The hero background is referenced in `css/styles.css` (`hero-bg`); all other images are in `index.html`.

## TODO Placeholders

Search for `<!-- TODO:` in `index.html` to find all spots that need Matt's real info before launch:

| Placeholder | Location |
|-------------|----------|
| Business name / brand | `<title>`, OG tags, nav brand, footer brand, footer copyright |
| Contact email | Footer mailto link, form placeholder |
| Domain / canonical URL | `<link rel="canonical">`, OG url, OG image URL, Twitter image URL |
| Bio text | About section paragraph |
| Stats (15+ / 3 / 5.0) | About section stats |
| Testimonials | Testimonials section (all three quotes) |

## Project Structure

```
index.html          Main page
css/styles.css      All styles (extracted from inline)
js/script.js        Nav scroll, scroll reveal, form submission
images/             All local images (JPG + WebP) and favicons
.gitignore          Git ignore rules
README.md           This file
```

## Deploy to Netlify

1. Push this repo to GitHub/GitLab/Bitbucket
2. Log in to [Netlify](https://app.netlify.com)
3. Click **Add new site > Import an existing project**
4. Select your repo — no build command or publish directory needed (it's a static site at the root)
5. Click **Deploy site**

Or use the Netlify CLI:

```bash
npm i -g netlify-cli
netlify login
netlify init    # or netlify deploy --prod
```
