# Product Requirements Document (PRD)

## SudutKode — Landing Page

**Version:** 1.0.0
**Date:** 2026
**Status:** In Progress

---

## 1. Background

SudutKode is a newly established software house, built by a group of professionals from the same office environment. To start operations and build credibility, we need a landing page that represents SudutKode's identity, services, products, and team to potential clients and product users.

---

## 2. Objectives

- Introduce SudutKode as a professional and trustworthy software house
- Clearly and concisely showcase offered services
- Promote the first product, Atur Keuangan, to potential users
- Introduce team members to build trust
- Provide an easy contact path for potential clients

---

## 3. Target Users

| Segment                         | Description                                                |
| ------------------------------- | ---------------------------------------------------------- |
| Potential business clients      | Business owners or organizations needing digital solutions |
| Potential Atur Keuangan users   | Individuals looking for a personal finance tracking app    |
| Potential partners or investors | Parties interested in learning more about SudutKode        |
| Potential recruits              | Developers or designers interested in joining              |

---

## 4. Scope

### In Scope

- Single-page landing page with multiple sections
- Sections: Navbar, Hero, About, Services, Products, Team, Contact, Footer
- Atur Keuangan product showcase with screenshots and download link
- Contact form or contact information
- Responsive design (mobile & desktop)
- Permanent dark mode

### Out of Scope

- Separate product detail pages
- Blog or articles
- Admin dashboard or CMS
- User authentication
- Payment integration
- English version (for now)

---

## 5. Functional Requirements

### F-01 — Navigation

- Navbar displays logo, navigation links, and CTA button
- Navbar remains sticky while scrolling
- Clicking navigation links performs smooth scroll to the intended section

### F-02 — Hero Section

- Displays SudutKode's main tagline
- Two CTA buttons: one to Contact section and one to Products section

### F-03 — About Section

- Displays brief narrative about SudutKode
- Optionally displays simple statistics

### F-04 — Services Section

- Displays 4 main services in card format
- Each card contains icon, title, and brief description

### F-05 — Products Section

- Displays list of created products
- Each product includes: name, description, screenshot carousel, platform badge, and download button
- Designed to support multiple products in the future
- Products with `coming-soon` status display appropriate indicators

### F-06 — Team Section

- Displays photo, name, and role of each team member
- Includes relevant social media links (LinkedIn, GitHub)

### F-07 — Contact Section

- Displays contact information or form to contact SudutKode
- At least one clear contact channel available

### F-08 — Footer

- Displays logo, brief navigation, social links, and copyright

---

## 6. Non-Functional Requirements

| Category        | Requirement                                                |
| --------------- | ---------------------------------------------------------- |
| Performance     | Lighthouse score ≥ 85 for Performance and Accessibility    |
| Responsiveness  | Optimal display at 360px+ (mobile), tablet, and desktop    |
| Browser support | Chrome, Firefox, Safari, Edge — last 2 years               |
| Accessibility   | WCAG AA contrast compliance, semantic HTML                 |
| SEO             | Meta title, description, og:image available                |
| Loading         | First Contentful Paint < 2.5 seconds on average connection |

---

## 7. Design System

| Element        | Decision                                           |
| -------------- | -------------------------------------------------- |
| Theme          | Permanent dark mode                                |
| Color palette  | Monochrome (currently) — accent colors to be added |
| Font           | Montserrat (400, 500, 600, 700)                    |
| UI Components  | shadcn/ui (Vue)                                    |
| Reference vibe | Linear, Resend, Clerk                              |

---

## 8. Section Structure & Order

```
1. Navbar
2. Hero
3. About
4. Services
5. Products
6. Team
7. Contact
8. Footer
```

---

## 9. Displayed Products

### Atur Keuangan (v1.0.0)

- Type: Mobile Application
- Platform: Android
- Description: Personal finance tracking app with visual reports, transaction categories, and automatic tracker with notificationslistener.
- Distribution: Direct APK (temporary) → Google Play Store (target)
- Status: Available

### Second Product (not released yet)

- Status: Coming Soon
- Details: To be filled after product is ready for publication

---

## 10. Milestone

| Milestone | Description                                               | Status      |
| --------- | --------------------------------------------------------- | ----------- |
| M1        | Project setup, design system, color & font configuration  | In Progress |
| M2        | Implement all sections with placeholder content           | Pending     |
| M3        | Integrate real content (copy, team photos, screenshots)   | Pending     |
| M4        | QA — responsiveness, performance, accessibility           | Pending     |
| M5        | Deploy to production + custom domain                      | Pending     |
| M6        | Update brand accent color after visual identity finalized | Pending     |

---

## 11. Dependencies & Risks

| Item                        | Description                                                                            |
| --------------------------- | -------------------------------------------------------------------------------------- |
| Atur Keuangan screenshots   | Required for Products section — must be prepared by team                               |
| Team member photos          | Required for Team section — must be prepared by each member                            |
| Atur Keuangan download link | Currently Google Drive, needs to be replaced with Play Store                           |
| Brand accent color          | Not final yet — landing page temporarily monochrome                                    |
| Play Protect warning        | APK distributed outside Play Store will show warning — solution: publish to Play Store |
