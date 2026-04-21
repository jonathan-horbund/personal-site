# Jonathan Horbund — Personal Site

Personal website for Jonathan Horbund: PM at Capital One, volunteer cook, and believer in products and people. Built with Astro 6 and deployed to GitHub Pages.

**Live site**: [jonathan-horbund.github.io/personal-site](https://jonathan-horbund.github.io/personal-site/)

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | [Astro 6](https://astro.build) — static output |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) via Vite plugin + CSS custom properties |
| Content | Astro Content Layer API (MDX via `@astrojs/mdx`, JSON for structured data) |
| Deployment | GitHub Actions → GitHub Pages |
| Fonts | Playfair Display (headings) + DM Sans (body) via Google Fonts |

---

## Project structure

```
personal-site/
├── .github/workflows/deploy.yml   # CI/CD: push to main → astro build → Pages
├── public/
│   ├── favicon.ico / favicon.svg
│   └── images/                    # Drop hero photo here (see below)
├── src/
│   ├── components/
│   │   ├── Header.astro           # Responsive nav with mobile hamburger
│   │   ├── Footer.astro
│   │   ├── Callout.astro          # MDX callout (metric / quote / note)
│   │   └── Layout.astro           # Page shell with fonts + global CSS
│   ├── content/
│   │   ├── work/                  # Case studies (.mdx)
│   │   ├── writing/               # Blog posts (.mdx)
│   │   └── recipes/               # Recipes (.mdx)
│   ├── data/
│   │   ├── books.json             # Bookshelf entries
│   │   └── volunteering.json      # Volunteer org entries
│   ├── pages/
│   │   ├── index.astro            # Homepage
│   │   ├── work/index.astro       # Filterable case study grid
│   │   ├── work/[slug].astro      # Case study detail
│   │   ├── writing/index.astro    # Blog post list
│   │   ├── writing/[slug].astro   # Post detail with reading time
│   │   ├── recipes/index.astro    # Recipe card grid
│   │   ├── recipes/[slug].astro   # Recipe detail with print styles
│   │   ├── bookshelf.astro        # Filterable reading list
│   │   ├── volunteering.astro     # Volunteer org cards
│   │   └── about.astro            # Narrative bio
│   └── styles/global.css          # Design tokens + utility classes
├── astro.config.mjs
├── content.config.ts              # Zod schemas for content collections
└── tsconfig.json
```

---

## Design system

All colors are CSS custom properties defined in `src/styles/global.css`:

| Token | Hex | Used for |
|---|---|---|
| `--color-cream` | `#f5ede0` | Page background |
| `--color-sand` | `#e8c9a0` | Cards, borders |
| `--color-terracotta` | `#c97d4e` | Primary accent, CTAs, active nav |
| `--color-forest` | `#4a7c59` | Secondary accent, tag badges |
| `--color-charcoal` | `#2c2c2c` | Body text, headings |
| `--color-warm-muted` | `#6b5a4a` | Secondary / subdued text |

---

## Local development

```sh
# Install dependencies
npm install

# Start dev server at localhost:4321
npm run dev

# Production build to ./dist/
npm run build

# Preview production build locally
npm run preview
```

---

## Content authoring

### Case studies (`src/content/work/*.mdx`)

```yaml
---
title: "Redesigning Card Onboarding"
description: "One-line summary shown in cards and meta tags."
tags: ["Product Strategy", "UX Research"]
date: 2024-06-01
featured: true          # Shows on homepage (up to 3)
role: "Lead PM"
timeline: "Q1–Q2 2024"
tldr: "One sentence takeaway shown at the top of the case study."
---
```

### Blog posts (`src/content/writing/*.mdx`)

```yaml
---
title: "Post Title"
description: "Used in meta tags."
excerpt: "Pull quote shown on the listing page (falls back to description)."
tags: ["Product", "Leadership"]
date: 2024-03-15
---
```

### Recipes (`src/content/recipes/*.mdx`)

```yaml
---
title: "Brown Butter Chocolate Chip Cookies"
category: "Baking"
cuisine: "American"       # optional
prepTime: "20 min"
cookTime: "12 min"
serves: "24 cookies"
difficulty: "Easy"
tags: ["Dessert", "Baking"]
story: "Optional paragraph shown in a green callout above the recipe."
---
```

### Books (`src/data/books.json`)

```json
{
  "id": "unique-slug",
  "title": "Book Title",
  "author": "Author Name",
  "yearRead": 2024,
  "tags": ["Strategy", "Leadership"],
  "status": "Finished",     // "Finished" | "Currently Reading"
  "note": "One-line take shown on the bookshelf card."
}
```

### Volunteering (`src/data/volunteering.json`)

```json
{
  "id": "org-slug",
  "organization": "Organization Name",
  "role": "Kitchen Volunteer",
  "description": "What you do there.",
  "timeframe": "2022–present",
  "location": "Washington, DC"
}
```

---

## Hero photo

1. Copy `IMG_5719.jpeg` into `public/images/`
2. In `src/pages/index.astro`, find the `<!-- Photo side -->` comment and replace the placeholder `<div class="hero-photo-box">` block with:

```astro
<div class="hero-photo-box" style="overflow: hidden;">
  <img
    src={`${base}/images/IMG_5719.jpeg`}
    alt="Jonathan Horbund"
    style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;"
  />
</div>
```

---

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which:

1. Runs `npm ci && npm run build`
2. Uploads `./dist` as a GitHub Pages artifact
3. Deploys to `https://jonathan-horbund.github.io/personal-site/`

The `base: '/personal-site'` setting in `astro.config.mjs` ensures all asset paths and internal links resolve correctly under the `/personal-site/` sub-path.

---

## Adding a custom domain

1. Add a `CNAME` file to `public/` containing your domain (e.g. `jonathanhorbund.com`)
2. Update `site` in `astro.config.mjs` to your domain and remove `base`
3. Remove the `base` constant and `${base}/` prefixes from all pages and components
4. Configure DNS with your registrar

---

*"Building bigger tables."*
