# Acceptance Criteria

## SudutKode — Landing Page

**Version:** 1.0.0
**Date:** 2026

This document defines the conditions that must be met for each landing page section to be considered complete and production-ready.

---

## AC-01 — Setup & Configuration

- [ ] Project runs without error with `npm run dev`
- [ ] Production build succeeds without error with `npm run build`
- [ ] `index.html` has `class="dark"` and `lang="en"` on `<html>` tag
- [ ] Montserrat font imported in `src/assets/index.css` and displays in browser
- [ ] Tailwind config uses monochrome color palette according to design system
- [ ] No unused components imported in `App.vue` (`Pricing`, `FAQ`, `Sponsors`, `Benefits`, `Community`, `HowItWorks`, `Testimonials`)

---

## AC-02 — Navbar

- [ ] SudutKode logo (icon + text) displays on left side with Montserrat Semibold font
- [ ] 4 navigation links present: About, Services, Products, Team
- [ ] Clicking each link performs smooth scroll to corresponding section
- [ ] "Contact Us" button displays on right side and scrolls to Contact section when clicked
- [ ] Navbar remains sticky at top while page is scrolled
- [ ] Navbar has backdrop blur effect while scrolled
- [ ] `ToggleTheme` component does not display in Navbar
- [ ] Navbar display is responsive — navigation links hidden on mobile, replaced with hamburger menu or sheet

---

## AC-03 — Hero Section

- [ ] Eyebrow text "Software House · Indonesia" displays above heading
- [ ] Main heading displays with large Montserrat Semibold font
- [ ] Sub-heading displays with `text-muted-foreground` color
- [ ] "Start a Project" button scrolls to Contact section when clicked
- [ ] "View Products" button scrolls to Products section when clicked
- [ ] No large images or illustrations — typography-focused layout
- [ ] Responsive display on mobile and desktop

---

## AC-04 — About Section

- [ ] Section has `id="about"` for navigation anchor
- [ ] "About SudutKode" heading displays
- [ ] Brief narrative about SudutKode displays with appropriate content
- [ ] `About.vue` component created in `src/components/About.vue`
- [ ] Display consistent with design system (colors, fonts, spacing)

---

## AC-05 — Services Section

- [ ] Section has `id="services"` for navigation anchor
- [ ] "Our Services" heading displays
- [ ] Exactly 4 service cards displayed:
  - Web Development
  - Mobile Apps
  - UI/UX Design
  - Technology Consulting
- [ ] Each card contains: Lucide icon, title, and description
- [ ] Cards use `bg-card` and `border-border` from design system
- [ ] Grid display responsive — 1 column on mobile, 2 on tablet, 4 on desktop

---

## AC-06 — Products Section

- [ ] Section has `id="products"` for navigation anchor
- [ ] "Our Products" heading displays
- [ ] `Products.vue` component created in `src/components/Products.vue`
- [ ] UangKu product displayed with:
  - [ ] Name "UangKu" and tagline "Personal Finance Tracker"
  - [ ] Brief app description
  - [ ] "Android" platform badge
  - [ ] Features highlight row with 3 key features (Bell icon + "Auto-record from notifications", Wallet icon + "Multi-wallet support", BarChart icon + "Monthly reports")
  - [ ] Horizontal scrollable screenshot showcase (showing ~2.5 screenshots at once on desktop, ~1.5 on mobile)
  - [ ] Minimum 9 screenshots with captions displayed
  - [ ] Screenshot data structure: `Screenshot{ src: string; caption: string; }`
  - [ ] Download button pointing to valid link
- [ ] Screenshot layout:
  - [ ] Desktop: Product header (~40%) on left, screenshots showcase (~60%) on right
  - [ ] Mobile: Product header on top, screenshots showcase below (stacked layout)
  - [ ] Each screenshot displays as portrait phone frame with rounded-2xl corners
  - [ ] Caption text displayed below each screenshot in text-muted-foreground text-sm
  - [ ] Carousel navigation buttons visible on desktop, hidden on mobile
- [ ] Product data stored in array for easy addition of new products
- [ ] Screenshots available in `public/` directory (flat structure, not nested) and display correctly (e.g., `/uangku-auth.jpg`)
- [ ] Responsive display on mobile and desktop

---

## AC-07 — Team Section

- [ ] Section has `id="team"` for navigation anchor
- [ ] "Our Team" heading displays
- [ ] All team members displayed with real data (not placeholder)
- [ ] Each member displays: photo, name, and role
- [ ] Team photos available in `public/images/team/` and display correctly
- [ ] Social media links (LinkedIn and/or GitHub) available and working
- [ ] Avatar fallback displays if photo unavailable
- [ ] Responsive grid display

---

## AC-08 — Contact Section

- [ ] Section has `id="contact"` for navigation anchor
- [ ] Invitation heading to contact displays
- [ ] At least one contact channel available and working (form or email)
- [ ] Display consistent with design system

---

## AC-09 — Footer

- [ ] SudutKode logo or name displays
- [ ] Navigation links available (About, Services, Products, Team)
- [ ] Social media links available and working
- [ ] Copyright text displays: `© 2026 SudutKode. All rights reserved.`
- [ ] Responsive display

---

## AC-10 — Responsiveness

- [ ] Page displays correctly at 360px width (small mobile)
- [ ] Page displays correctly at 768px width (tablet)
- [ ] Page displays correctly at 1280px width (desktop)
- [ ] No elements overflow horizontally at any breakpoint
- [ ] Font size readable comfortably at all screen sizes

---

## AC-11 — Performance & Quality

- [ ] No errors in browser console when page loads
- [ ] All images load successfully (no broken images)
- [ ] All links and buttons point to correct destinations
- [ ] Smooth scroll works in all major browsers (Chrome, Firefox, Safari)
- [ ] Lighthouse Performance score ≥ 85
- [ ] Lighthouse Accessibility score ≥ 85

---

## AC-12 — SEO & Meta

- [ ] `<title>` tag filled with appropriate brand name
- [ ] Meta description available and relevant
- [ ] SudutKode favicon displays in browser tab
- [ ] `og:title` and `og:description` available for social sharing

---

## Definition of "Done"

A section or feature is considered **Done** when:

1. All relevant acceptance criteria have been met and checked
2. Display has been verified on mobile and desktop
3. No errors in console
4. Content uses real data (not lorem ipsum placeholder)
