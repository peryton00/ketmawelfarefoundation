# 🌿 Ketma Welfare Foundation — Website

**A premium single-page website for Ketma Welfare Foundation**, a grassroots non-profit based in Ambikapur, Surguja, Chhattisgarh, India — dedicated to environmental restoration, tribal empowerment, and scientific community development.

---

## 📁 Project Structure

```
/
├── index.html          → Main single-page HTML (SEO & Schema enhanced)
├── main.js             → JavaScript (Dynamic rendering, i18n logic)
├── style.css           → Custom CSS & Tailwind overrides
├── content.json        → Single source of truth (English)
├── content.hi.json     → Single source of truth (Hindi)
├── .htaccess           → Server config (HTTPS, Gzip, Caching)
├── robots.txt          → Search crawl instructions
├── sitemap.xml         → Site structure for Google
└── README.md           → This file
```

## 🎯 Entry Point

- **Main URL:** `index.html` (single-page application)
- All sections are anchor-linked: `#about`, `#work-domains`, `#story`, `#csr`, `#products`, `#donate`, `#contact`, etc.

---

## ✅ Completed Features

### Core Architecture
- [x] **JSON-driven content**: ALL text, numbers, team members, timeline, products — loaded from `content.json` via `fetch()`.
- [x] **Multi-language Support**: 100% content parity in Hindi (`content.hi.json`) with persistent user preference via `localStorage`.
- [x] **Semantic HTML5** with proper ARIA labels, roles, and JSON-LD Schema (NonProfitOrganization).
- [x] **SEO & Hosting Optimization**: HTTPS enforcement, Gzip compression, and browser caching via `.htaccess`.
- [x] **Performance**: Image lazy-loading and optimized Core Web Vitals.

### Brand Identity (Strict Palette)
- [x] Primary Dark Green: `#2C473E` — headings, navbar, footer, hero
- [x] Brand Green: `#6A8E4E` — buttons, accents, borders
- [x] Light Green: `#B0D182` — highlights, hover states, badges
- [x] Off-White/Cream: `#F4F1EA` — page background
- [x] **No pure white or pure black used**
- [x] Typography: **Syne** (display) + **Montserrat** (body)
- [x] **Official Logo**: High-quality transparent PNG integrated across Header, Loader, and Footer.

### Website Sections (19 total, in order)
1. [x] **Sticky Navigation** — transparent → solid on scroll, hamburger mobile menu, scroll spy active link
2. [x] **Hero Section** — full-viewport, SVG leaf pattern overlay, animated floating particles, 4 CTA buttons
3. [x] **Impact Numbers Strip** — 8 animated counters (Intersection Observer triggered), grid layout
4. [x] **About Ketma** — two-column layout, 3 paragraphs, styled pull-quote, SVG Surguja map illustration
5. [x] **Three Pillars** — 3 hover-lift cards with gradient icons (Restore, Empower, Build)
6. [x] **Work Domains (10 Mandates)** — responsive 5-column icon grid (2-col mobile)
7. [x] **Our Story Timeline** — alternating left-right timeline, 6 milestones, president quote card
8. [x] **Vision & Mission** — split layout, 7 numbered mission pillars
9. [x] **Flagship Initiative** — 3 phase cards with bullet points + cumulative impact dashboard
10. [x] **Legal Credentials** — 8 credential cards in grid
11. [x] **Governing Council** — member cards with avatar initials, roles, expertise
12. [x] **CSR Partnerships** — why-partner points, partnership models, implementation partners, CTA
13. [x] **Government Engagement** — 3 paragraphs on policy positioning
14. [x] **Products** — 7 product cards with SVG icons, tagline, bottom note
15. [x] **Donate** — 6 donation tiers, bank details, UPI, tax note, prominent CTA
16. [x] **Volunteer** — 6 role cards + "Other Ways to Help" list
17. [x] **Press Release** — collapsible accordion + Key Messages for Media
18. [x] **Contact** — form with validation + info block + Google Maps embed + social links
19. [x] **Footer** — logo, tagline, quick links, legal credentials, contact brief, social, copyright

### UX & Animations
- [x] **Scroll-triggered fade-in** (Intersection Observer API) for all sections
- [x] **Animated number counters** with ease-out cubic easing
- [x] **Smooth scroll** for all anchor links (CSS + JS)
- [x] **Hero parallax** subtle leaf pattern animation
- [x] **Floating leaf particles** in hero section
- [x] **Card hover effects** — lift + shadow on all interactive cards
- [x] **Active section highlight** via scroll spy
- [x] **Loading screen** with animated leaf icon and progress bar

### Additional Features
- [x] **SEO Meta Tags** — title, description, OG, Twitter card (from JSON)
- [x] **SVG Favicon** — leaf icon
- [x] **Back-to-top button** — appears after 300px scroll
- [x] **Cookie/Privacy notice** — non-intrusive bottom bar with localStorage persistence
- [x] **WhatsApp floating CTA** — pre-filled message, bottom-left
- [x] **Language toggle placeholder** — EN/Hindi button (English implemented)
- [x] **Print stylesheet** — clean printing for press releases/credentials
- [x] **GTM data attributes** — `data-gtm` on all CTA buttons for analytics
- [x] **JSON schema guide** — `_schema_guide` key in content.json explains every section

### Responsive Design
- [x] Mobile-first approach (320px → 1920px)
- [x] Touch-friendly tap targets (min 44px)
- [x] Hamburger menu for mobile navigation
- [x] Single-column stacking on mobile for all grids

### Accessibility
- [x] ARIA labels on interactive elements
- [x] Focus-visible states for keyboard navigation
- [x] Proper heading hierarchy
- [x] Semantic HTML structure

---

## 📝 How to Update Content

**All website content is managed through `content.json`.** No HTML editing required.

### To update text, numbers, or team members:
1. Open `content.json` in any text editor
2. Find the relevant section key (see `_schema_guide` at the top of the file)
3. Edit the values (keep the key names unchanged)
4. Save the file — changes appear immediately on page reload

### Key sections in content.json:
| Key | What It Controls |
|-----|-----------------|
| `meta` | SEO title, description, OG tags |
| `hero` | Hero headline, subheadline, CTA buttons |
| `impactNumbers` | Stats in the impact strip |
| `about` | About section paragraphs and quote |
| `pillars` | Three strategic pillars |
| `workDomains` | 10 registered mandates |
| `story` | Timeline milestones and president quote |
| `vision` / `mission` | Vision text and 7 mission pillars |
| `flagshipInitiative` | 3 phases + cumulative dashboard |
| `legalCredentials` | Registration details |
| `governingCouncil` | Council member cards |
| `csrPartnership` | CSR section content |
| `products` | 7 product cards |
| `donate` | Donation tiers, bank/UPI details |
| `volunteer` | Volunteer roles |
| `pressRelease` | Full press release text |
| `contact` | Email, phone, addresses, social links |
| `footer` | Quick links, legal, copyright |

---

## 🚧 Not Yet Implemented / Future Enhancements

- [ ] **Hindi language content** — JSON structure supports it; needs translated content in `content_hi.json`
- [ ] **Actual logo** — currently using SVG monogram placeholder; replace when official logo is provided
- [ ] **Real images** — hero background, team photos, product photos, field images
- [ ] **Google Analytics / GTM** — data attributes are in place; needs GTM container ID
- [ ] **80G Certificate** — update donate section when certificate is received
- [ ] **Bank & UPI details** — update with actual bank account and UPI ID
- [ ] **Backend form submission** — contact form currently shows a success message; needs email/API integration
- [ ] **Social media URLs** — update placeholder `#` links with actual social profiles
- [ ] **FCRA registration** — add when obtained
- [ ] **Blog / News section** — for ongoing updates and impact stories
- [ ] **Photo gallery** — field images, community events, products
- [ ] **Video testimonials** — community voices, impact documentation

---

## 🔧 Tech Stack

| Technology | Purpose |
|-----------|---------|
| HTML5 | Semantic markup |
| Tailwind CSS (CDN) | Utility-first styling |
| Custom CSS | Brand variables, animations, print styles |
| jQuery 3.7.1 (CDN) | DOM manipulation, smooth scroll |
| Vanilla JavaScript | Intersection Observer, counters, rendering |
| Google Fonts | Syne + Montserrat |
| Inline SVGs | All icons (no external icon library) |

---

## 📊 Data Model

All content stored in `content.json` — a flat JSON file with the following top-level keys:

```
content.json
├── _schema_guide    → Documentation for JSON editors
├── meta             → Site metadata (SEO, OG tags)
├── hero             → Hero section content
├── impactNumbers    → Array of 8 stat objects
├── about            → About paragraphs + pull quote
├── pillars          → Array of 3 pillar objects
├── workDomains      → 10 domain objects
├── story            → Timeline + president quote
├── vision           → Vision statement
├── mission          → 7 mission pillar objects
├── flagshipInitiative → 3 phases + dashboard metrics
├── legalCredentials → Registration details
├── governingCouncil → Council member array
├── csrPartnership   → CSR content + partner models
├── governmentEngagement → Government section text
├── products         → 7 product objects
├── donate           → Tiers + bank + UPI
├── volunteer        → Roles + other ways
├── pressRelease     → Full press release + key messages
├── contact          → Email, phone, addresses, social, map
└── footer           → Links, legal, copyright
```

---

## 🌐 Deployment

To deploy this website, go to the **Publish tab** to make it live with one click.

---

*Built for Ketma Welfare Foundation | Ambikapur, Surguja, Chhattisgarh | Est. 2012, Revived 2025*
*NGO Darpan ID: CG/2025/0801889 | Reg. No. 17282*