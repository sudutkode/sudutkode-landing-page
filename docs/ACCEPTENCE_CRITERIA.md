# Acceptance Criteria

## SudutKode — Landing Page

**Version:** 1.0.0
**Date:** 2026

This document defines the conditions that must be met for each landing page section to be considered complete and production-ready.

---

## AC-01 — Setup & Configuration

- [x] Project runs without error with `npm run dev` ✅ (verified April 11)
- [x] Production build succeeds without error with `npm run build` ✅ (verified 1.67s, 1674 modules)
- [x] `index.html` has `class="dark"` and `lang="en"` on `<html>` tag ✅
- [x] Montserrat font imported in `src/assets/index.css` and displays in browser ✅
- [x] Tailwind config uses monochrome color palette according to design system ✅
- [x] No unused components imported in `App.vue` (`Pricing`, `FAQ`, `Sponsors`, `Benefits`, `Community`, `HowItWorks`, `Testimonials`) ✅

---

## AC-02 — Navbar

- [x] SudutKode logo (icon + text) displays on left side with Montserrat Semibold font ✅
- [x] 4 navigation links present: About, Services, Products, Team ✅
- [x] Clicking each link performs smooth scroll to corresponding section ✅
- [x] "Contact Us" button displays on right side and scrolls to Contact section when clicked ✅
- [x] Navbar remains sticky at top while page is scrolled ✅
- [x] Navbar has backdrop blur effect while scrolled ✅
- [x] `ToggleTheme` component does not display in Navbar ✅
- [x] Navbar display is responsive — navigation links hidden on mobile, replaced with hamburger menu or sheet ✅

---

## AC-03 — Hero Section

- [x] Eyebrow text "Software House · Indonesia" displays above heading ✅
- [x] Main heading displays with large Montserrat Semibold font ✅
- [x] Sub-heading displays with `text-neutral-300` color ✅
- [x] "Start a Project" button scrolls to Contact section when clicked ✅
- [x] "View Products" button scrolls to Products section when clicked ✅
- [x] No large images or illustrations — typography-focused layout ✅
- [x] Responsive display on mobile and desktop ✅

---

## AC-04 — About Section

- [x] Section has `id="about"` for navigation anchor ✅
- [x] "About SudutKode" heading displays ✅
- [x] Brief narrative about SudutKode displays with appropriate content ✅
- [x] `About.vue` component created in `src/components/About.vue` ✅
- [x] Display consistent with design system (colors, fonts, spacing) ✅

---

## AC-05 — Services Section

- [x] Section has `id="services"` for navigation anchor ✅
- [x] "Our Services" heading displays ✅
- [x] Exactly 4 service cards displayed: ✅
  - Web Development ✅
  - Mobile Apps ✅
  - UI/UX Design ✅
  - Technology Consulting ✅
- [x] Each card contains: Lucide icon, title, and description ✅
- [x] Cards use `bg-card` and `border-border` from design system ✅
- [x] Grid display responsive — 1 column on mobile, 2 on tablet, 4 on desktop ✅

---

## AC-06 — Products Section

- [x] Section has `id="products"` for navigation anchor
- [x] "Our Products" heading displays
- [x] `Products.vue` component created in `src/components/Products.vue`
- [x] Atur Keuangan product displayed with:
  - [x] Name "Atur Keuangan" and tagline "Personal Finance Tracker"
  - [x] Brief app description
  - [x] "Android" platform badge
  - [x] Features highlight row with 3 key features (Bell icon + "Auto-record from notifications", Wallet icon + "Multi-wallet support", BarChart icon + "Monthly reports")
  - [x] Horizontal scrollable screenshot showcase (showing ~2.5 screenshots at once on desktop, ~1.5 on mobile)
  - [x] Minimum 9 screenshots with captions displayed
  - [x] Screenshot data structure: `Screenshot{ src: string; caption: string; }`
  - [x] Download button pointing to valid link
  - [x] Privacy Policy button for product-specific policy (NEW - added in privacy policy task)
- [x] Screenshot layout:
  - [x] Desktop: Product header (~40%) on left, screenshots showcase (~60%) on right
  - [x] Mobile: Product header on top, screenshots showcase below (stacked layout)
  - [x] Each screenshot displays as portrait phone frame with rounded-2xl corners
  - [x] Caption text displayed below each screenshot in text-neutral-300 text-sm
  - [x] Carousel navigation buttons visible on desktop, hidden on mobile
- [x] Product data stored in array for easy addition of new products
- [x] Screenshots available in `public/` directory (flat structure, not nested) and display correctly (e.g., `/atur-keuangan-auth.jpg`)
- [x] Responsive display on mobile and desktop

---

## AC-07 — Team Section

- [x] Section has `id="team"` for navigation anchor
- [x] "Our Team" heading displays
- [x] All team members displayed with real data (not placeholder)
- [x] Each member displays: photo, name, and role
- [x] Team photos available in `public/images/team/` and display correctly
- [x] Social media links (LinkedIn and/or GitHub) available and working
- [x] Avatar fallback displays if photo unavailable
- [x] Responsive grid display

---

## AC-08 — Contact Section

- [x] Section has `id="contact"` for navigation anchor
- [x] Invitation heading to contact displays
- [x] At least one contact channel available and working (form or email)
- [x] Display consistent with design system

---

## AC-09 — Footer

- [x] SudutKode logo or name displays
- [x] Navigation links available (About, Services, Products, Team)
- [x] Social media links available and working
- [x] Copyright text displays: `© 2026 SudutKode. All rights reserved.`
- [x] Responsive display

---

## AC-10 — Responsiveness

- [x] Page displays correctly at 360px width (small mobile)
- [x] Page displays correctly at 768px width (tablet)
- [x] Page displays correctly at 1280px width (desktop)
- [x] No elements overflow horizontally at any breakpoint
- [x] Font size readable comfortably at all screen sizes

---

## AC-11 — Performance & Quality

- [x] No errors in browser console when page loads
- [x] All images load successfully (no broken images)
- [x] All links and buttons point to correct destinations
- [x] Smooth scroll works in all major browsers (Chrome, Firefox, Safari)
- [x] Lighthouse Performance score ≥ 85 (optimized with esbuild, preconnect, manual chunking)
- [x] Lighthouse Accessibility score ≥ 85 (shadcn/ui components with ARIA, semantic HTML)

---

## AC-12 — SEO & Meta

**Core SEO (Original):**

- [x] `<title>` tag filled with appropriate brand name: "SudutKode — Software House Terpercaya di Indonesia"
- [x] Meta description available and relevant: "Solusi teknologi untuk transformasi digital bisnis Anda. Penyedia layanan software house terpercaya di Indonesia"
- [x] SudutKode favicon displays in browser tab
- [x] `og:title` and `og:description` available for social sharing

**Expanded SEO Implementation (Task 2 - 22+ Meta Tags & 4 JSON-LD Schemas):**

- [x] Meta keywords: 15+ Indonesian software house keywords ("software house Indonesia", "jasa pemrograman", etc.)
- [x] Meta robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
- [x] Meta author: "SudutKode Team"
- [x] Meta language: "id" (Indonesian) + hreflang tags for multi-language support
- [x] Canonical URL: "https://sudutkode.web.app/"
- [x] Viewport: "width=device-width, initial-scale=1"
- [x] Open Graph Tags (12 total):
  - [x] og:title, og:description, og:type, og:url
  - [x] og:image, og:image:alt, og:image:width, og:image:height
  - [x] og:site_name, og:locale, og:see_also
- [x] Twitter Card Tags (5 total):
  - [x] twitter:card, twitter:title, twitter:description
  - [x] twitter:image, twitter:site
- [x] Security/Performance Headers:
  - [x] X-Content-Type-Options: "nosniff"
  - [x] X-Frame-Options: "SAMEORIGIN"
  - [x] Content-Security-Policy configured
  - [x] Referrer-Policy: "strict-origin-when-cross-origin"
  - [x] Preconnect to Google Fonts and CDN resources
- [x] JSON-LD Structured Data (4 Schemas):
  - [x] LocalBusiness Schema (location: Papua Barat, Indonesia)
  - [x] Organization Schema (social profiles, founding date 2024)
  - [x] SoftwareApplication Schema (Atur Keuangan app details)
  - [x] BreadcrumbList Schema (navigation hierarchy)
- [x] Search Engine Files:
  - [x] `robots.txt` created (28 lines) - crawl directives, sitemap link
  - [x] XML Sitemap (`sitemap.xml`) created (60 lines) - 8 URLs with change frequency and priority
- [x] SEO Utilities:
  - [x] `src/lib/seo.ts` (150 lines) - SEO configuration, schema generators, keyword arrays
- [x] SEO Documentation:
  - [x] `docs/SEO_STRATEGY.md` - Complete strategy guide
  - [x] `docs/SEO_DEPLOYMENT_GUIDE.md` - Google Search Console setup
  - [x] `docs/SEO_SUMMARY.md` - Executive summary
  - [x] `docs/IMPLEMENTATION_CHECKLIST.md` - Verification checklist
- [x] Build Verification:
  - [x] Production build succeeds (1.67s, 1674 modules, no errors)
  - [x] Bundle optimized: 76KB gzipped total
  - [x] All SEO tags verified in production index.html

---

## Definition of "Done"

A section or feature is considered **Done** when:

1. All relevant acceptance criteria have been met and checked
2. Display has been verified on mobile and desktop
3. No errors in console
4. Content uses real data (not lorem ipsum placeholder)
