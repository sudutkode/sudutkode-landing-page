# SudutKode — Landing Page

Official landing page for **SudutKode**, an Indonesian software house focused on mobile and web application development.

Built on top of the [shadcn-vue-landing-page](https://github.com/leoMirandaa/shadcn-vue-landing-page) template — Vue 3 + Vite + Tailwind CSS + shadcn/ui.

**SEO Status:** ✅ **Fully Optimized for Google Search** (Indonesian keywords: "software house indonesia", "jasa pembuatan aplikasi", etc.)

---

## Tech Stack

| Layer         | Technology                                 |
| ------------- | ------------------------------------------ |
| Framework     | Vue 3 (Composition API)                    |
| Build Tool    | Vite (v5.4.0)                              |
| Styling       | Tailwind CSS                               |
| UI Components | shadcn/ui (Vue port)                       |
| Font          | Montserrat (Google Fonts)                  |
| Icons         | Lucide Vue                                 |
| SEO Ready     | Yes (structured data, sitemap, robots.txt) |

---

## Quick Start

```bash
# Install dependencies
npm install
# or
bun install

# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## SEO Optimization (April 2026)

This landing page has been **comprehensively optimized for Google Search** with special focus on Indonesian keywords.

### Features

- ✅ **Optimized Meta Tags** — Title, description, keywords for "software house indonesia", "jasa pembuatan aplikasi", etc.
- ✅ **Structured Data** — LocalBusiness, Organization, SoftwareApplication, BreadcrumbList schemas
- ✅ **Sitemaps** — XML sitemap + robots.txt for search engine discovery
- ✅ **Social Sharing** — Open Graph & Twitter Cards for rich previews
- ✅ **Local SEO** — Location targeting (Papua Barat, Indonesia)
- ✅ **Performance** — Optimized build, preconnect to fonts, security headers
- ✅ **Analytics Ready** — Structure for Google Analytics integration

### Target Keywords

**Primary:**

- software house
- software house indonesia
- jasa pembuatan aplikasi
- jasa pembuatan website
- software house papua barat

**Secondary:**

- jasa aplikasi android indonesia
- jasa aplikasi mobile indonesia
- konsultan teknologi indonesia
- software house terpercaya

### Documentation

See the [SEO Strategy Guide](docs/SEO_STRATEGY.md) for complete implementation details.

For Google Search Console setup, see [SEO Deployment Guide](docs/SEO_DEPLOYMENT_GUIDE.md).

Quick checklist: [Implementation Checklist](docs/IMPLEMENTATION_CHECKLIST.md)

---

## Project Structure

```
src/
├── App.vue                    # Root component with navigation state
├── composables/
│   └── usePageNav.ts          # Navigation state management
├── components/
│   ├── Navbar.vue
│   ├── Hero.vue
│   ├── About.vue
│   ├── Services.vue
│   ├── Products.vue           # Product showcase with privacy policy link
│   ├── PrivacyPolicy.vue      # Full-screen privacy policy page
│   ├── Team.vue
│   ├── Contact.vue
│   ├── Footer.vue
│   └── ui/                    # Base shadcn/ui components
├── lib/
│   ├── utils.ts
│   └── seo.ts                 # SEO utilities and configuration
├── icons/                     # Social media icons
└── assets/
    └── index.css              # Global styles

public/
├── robots.txt                 # Search engine crawling rules
├── sitemap.xml                # XML sitemap for discovery
├── projects/                  # Product images
│   └── uangku/                # UangKu app screenshots
└── team/                      # Team member photos

docs/
├── BRIEF.md                   # Creative brief & vision
├── PRD.md                     # Product requirements
├── ACCEPTENCE_CRITERIA.md     # Completion criteria
├── SEO_STRATEGY.md            # Complete SEO strategy (✨ NEW)
├── SEO_DEPLOYMENT_GUIDE.md    # Google & analytics setup (✨ NEW)
├── SEO_SUMMARY.md             # Quick reference (✨ NEW)
└── IMPLEMENTATION_CHECKLIST.md # Verification checklist (✨ NEW)
```

---

## New Features (April 2026)

### 1. Privacy Policy System

- Full-screen privacy policy page for products
- Bilingual (Bahasa Indonesia + English)
- Accessible via `/[productId]/privacy-policy` routes
- "Privacy Policy" link in Products section

**Files:**

- `src/components/PrivacyPolicy.vue` — Privacy policy component
- `src/composables/usePageNav.ts` — Navigation state management
- Updated: `src/App.vue`, `src/components/Products.vue`

### 2. SEO Optimization Suite

- Comprehensive meta tags (title, description, keywords)
- 4 types of structured data (JSON-LD)
- XML sitemap with image references
- robots.txt for crawler guidance
- Open Graph & Twitter Card tags
- Performance optimization (preconnect, minification)

**Files:**

- Enhanced: `index.html` — Full SEO head section
- Created: `public/robots.txt`, `public/sitemap.xml`
- Created: `src/lib/seo.ts` — SEO utilities
- Updated: `vite.config.ts` — Build optimization

### 3. Documentation

- `docs/SEO_STRATEGY.md` — 300+ line SEO guide
- `docs/SEO_DEPLOYMENT_GUIDE.md` — Google Search Console setup
- `docs/SEO_SUMMARY.md` — Executive summary
- `docs/IMPLEMENTATION_CHECKLIST.md` — Verification checklist

---

## Design System Configuration

### Colors

The color system uses CSS variables via Tailwind. Currently **monochrome** (black and white). Brand accent colors will be added after final visual identity confirmation.

To change accent colors, update the following values in `tailwind.config.js`:

```js
accent: {
  DEFAULT: "hsl(...)", // ganti dengan warna brand
  foreground: "hsl(0 0% 96%)",
},
primary: {
  DEFAULT: "hsl(...)", // ganti dengan warna brand
  foreground: "hsl(0 0% 4%)",
},
```

### Font

Uses **Montserrat** from Google Fonts for all text including brand name.

---

## Featured Products

### UangKu

- Category: Mobile App — Personal Finance Tracker
- Platform: Android
- Status: Available
- Screenshots: `public/images/uangku/`

> The second product is in development and will be added to the Products section when ready.

---

## Deployment

Recommended to use **Vercel** or **Netlify**.

```bash
# Build
bun run build

# Output is in the dist/ folder
# Upload dist/ to Netlify, or push to GitHub and connect to Vercel
```

---

## Important Notes

- Dark mode is permanently active — the `dark` class is added to the `<html>` tag in `index.html`
- Unused template components (`Pricing`, `FAQ`, `Sponsors`, etc.) are not deleted from disk, just not imported in `App.vue`
- UangKu download link currently uses Google Drive. Final target: Google Play Store
