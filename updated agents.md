# AGENTS.md — JMT Public Higher Secondary School & College website

Operational manual for AI coding agents. Read this file fully before changing anything.

**Mission:** update the existing website to the approved new design (green brand, simpler layout, official ZUEB eligibility data, small animations). Do not rebuild from zero and do not change business content on your own.

Legend used below: **[VERIFIED]** confirmed from the owner or an official source, **[ASSUMED]** expected but you must confirm in the repo, **[UNKNOWN]** not known, ask the owner or inspect the repo. Never turn an [UNKNOWN] into a guess.

---

## 1. Project overview

- **Who:** JMT Public Higher Secondary School & College, Malir, Karachi, Pakistan. Affiliated with the Ziauddin University Examination Board (ZUEB). **[VERIFIED]**
- **What the website does:** attracts and qualifies students and parents, mainly private/combined (gap) candidates for Matric (SSC) and Intermediate (HSSC), and sends them to WhatsApp or a form. It is an admissions funnel, not a brochure. **[VERIFIED]**
- **Live site (temporary domain):** `https://jmt-pink.vercel.app`, deployed on Vercel. A custom domain is planned but not bought yet. **[VERIFIED]**
- **Users:** parents and students in Karachi, mostly on mid-range Android phones and mobile data. WhatsApp is the main contact channel. Design and performance for mobile first. **[VERIFIED]**
- **Owner's stack preference:** Next.js, React, TypeScript/JavaScript, Tailwind CSS, Supabase/PostgreSQL, REST APIs, Vercel. Whether each is actually used by this repo is **[ASSUMED]** until you inspect it.

## 2. Phase 0 — inspect the repo before editing (required)

Do this first and write the findings into `docs/redesign-notes.md` (create it). Do not skip.

1. Read `package.json` (scripts, dependencies), lockfile (find the real package manager), `next.config.*`, `tailwind.config.*`, `tsconfig.json`, `.env.example` (never open or print real `.env` values).
2. Identify router type (`app/` or `pages/`), existing routes, shared layout, existing components, styling approach, font loading, image handling.
3. Find: the contact/enquiry form and where it sends data, any admin/portal route, the blogs route and its data source, any database/Supabase use, analytics, existing metadata/SEO.
4. Record what exists and what is missing. List every command you plan to run and confirm each exists in `package.json`.
5. If anything important is unclear, ask the owner before continuing. Do not make major architectural decisions silently.

Commands: use only scripts that exist in `package.json`. Typical names are `dev`, `build`, `lint`, `start`, but **[UNKNOWN] until verified**. Do not invent test commands. If no tests exist, do not add a heavy test setup; verify with build, lint, type check and manual checks (section 12).

## 3. Design source of truth

The approved design is exported as static HTML in `design-reference/` (copy it into the repo root, or keep it outside the repo and read it from there). Open the files in a browser to see them. Desktop files are 1440px wide, mobile files are 390px wide.

| Screen | Files |
|---|---|
| Home: hero + "How it works" strip | `01-home-hero-desktop.html`, `01-home-hero-mobile.html` |
| Home: About | `02-home-about-*.html` |
| Home: Why JMT + scholarships | `03-home-why-jmt-and-scholarships-*.html` |
| Home: FAQ | `04-home-faq-*.html` |
| Home: Contact | `05-home-contact-*.html` |
| Footer (all pages) | `06-footer-*.html` |
| Eligibility, Annual (I) 2027 | `07-eligibility-annual-1-2027-*.html` |
| Eligibility, Annual (II) 2026 | `08-eligibility-annual-2-2026-*.html` |
| **Deferred, do not build** | `deferred/google-reviews-*.html` |

Rules for using the references:
- Keep the **same copy, order, spacing and colors**. Rebuild each section as React components using the repo's existing patterns. Do not paste the mockup markup.
- The mockups use inline styles for speed. Convert them to Tailwind classes or the repo's styling approach, using the tokens in section 5.
- Mockups show a **menu button but no open mobile menu**. Build an accessible mobile menu (drawer or sheet) with the same links plus the WhatsApp button, focus trap, Esc to close, and a 44px minimum touch target.
- Mockups show **photo placeholders**. Build the real `next/image` slot, keep the placeholder until the owner supplies the photo (see section 10).

## 4. Page and route map

| Route | Content | Notes |
|---|---|---|
| `/` | Hero + How it works, About, Why JMT + Scholarships, FAQ, Contact, Footer | Section order is fixed. Google reviews section goes between Why JMT and FAQ later. |
| `/eligibility` | Short chooser linking to both sessions | Which session is "current" is **[UNKNOWN]**. Ask the owner. Do not guess or redirect yet. |
| `/eligibility/annual-1-2027` | Annual (I) 2027 rules | Source PDF in section 8 |
| `/eligibility/annual-2-2026` | Annual (II) 2026 rules | Source PDF in section 8 |
| Existing routes (blogs, admin/portal, others) | Keep working | Restyle blogs lightly to the new tokens. Do not delete routes. |

Navigation items: Home `/`, About `/#about`, Eligibility `/eligibility`, Contact `/#contact`, Blogs (existing blogs route). A separate `/about` page is **not designed yet**: use the home anchor until the owner asks for it.

The hero button "Check Your Eligibility" links to `/eligibility`. There is no eligibility section on the home page anymore.

## 5. Design tokens (final)

**Colors**

| Token | Hex | Use |
|---|---|---|
| `primary` | `#0B3D26` | Primary buttons, key headings, "Why JMT" and footer backgrounds, links |
| `support` | `#2E6B4A` | Small labels, outline buttons, icons on light |
| `tint` | `#EAF2ED` | Alternate section backgrounds, icon tiles, badges |
| `tint-border` | `#CFE0D6` | Borders on tinted/white cards |
| `gold` | `#C89B3C` | Decorative only: label bars, step numbers, highlight under "4 Months", dots. Never as text color on white |
| `gold-tint` / `gold-border` | `#FBF1D8` / `#EBD9A6` | Age chips, small tags |
| `gold-deep` | `#8A6425` | Icons inside the board-rules box |
| `rules-bg` | `#FBF6E9` | Important board rules box |
| `page` | `#FAFAF7` | Page background |
| `ink` | `#17202A` | Headings, body on light |
| `body` | `#3A4551` | Paragraphs |
| `muted` | `#5E6873` | Secondary text |
| `border` | `#E5E7EB` | Neutral borders |
| `input-border` | `#8291A3` | Form fields and menu button |
| `error` | `#B42318` | Required asterisk, validation errors |
| On dark green | text `#FFFFFF`, muted `#CFE0D6` | |

A heading-font switch existed in the mockup. **Final choice: Plus Jakarta Sans for headings.** Source Serif 4 is not used.

**Typography:** Plus Jakarta Sans only, loaded with `next/font` (weights 400, 500, 600, 700, 800), no layout shift.

| Role | Desktop | Mobile |
|---|---|---|
| Hero H1 | 52/58, 800 | 38/44, 800 |
| Page H1 (eligibility) | 48/56, 800 | 32/40, 800 |
| Section H2 | 36/44, 800 | 28/36, 800 |
| Card H3/H4 | 17–26, 700–800 | 17–22 |
| Body large | 18/30 | 17/28 |
| Body | 15–16/24–26 | 15/24 |
| Small | 14/22 | 14/22 |
| Eyebrow label | 13/20, 700, uppercase, letter-spacing 0.12em | same |
| Button | 15–16/20, 700 | same |

Headline letter-spacing: -0.015em (H1), -0.01em (H2).

**Spacing:** 8px scale (8, 12, 16, 20, 24, 32, 48, 56, 72, 80, 96). Section padding: 96px vertical / 64px horizontal on desktop, 56px / 16px on mobile. Content container: max width 1440px, so content is 1312px wide on desktop.

**Radius:** buttons 8px, small tiles 10–12px, cards 16px, big panels 20px, pills 999px.

**Buttons:** height 52–56px, horizontal padding 24–28px. Primary = solid `primary`, white text. Secondary = 1.5px `support` border, `support` text. Always full-width stacked on mobile. Minimum touch target 44px everywhere.

**Section backgrounds, in order:** hero `page`, How it works `tint`, About white, Why JMT `primary`, (Reviews `tint`, deferred), FAQ white, Contact `page`, Footer `primary`.

## 6. Section specs (details live in the reference files)

- **Hero:** H1 is exactly "Complete Your Matric or Intermediate in as Little as **4 Months**" ("4 Months" in `primary` with the gold highlight). Label: "Admissions 2026–27 open · Karachi". Subtext, buttons ("Check Your Eligibility" → `/eligibility`, "Chat on WhatsApp"), the note "Exam and result dates are set by ZUEB.", and the "JMT College — ZUEB-affiliated institution" badge. One real photo on the right (placeholder until supplied). Header: logo + name, 5 links, phone, "Apply Now" (WhatsApp). **Remove** the old top contact bar, the old announcement banner, floating cards, the 4 bullets and the stats block.
- **How it works:** 3 steps (Take admission, Appear in the exam, Get your result) joined by arrow circles (arrows point down on mobile), then "Not sure if you qualify? Check your eligibility".
- **About:** director photo with caption "Chief Executive Director", the "28+ Years of experience" stat under the photo, 4 points, "Talk to Admissions" button.
- **Why JMT:** 6 cards on `primary`, then the scholarship block (Merit scholarship, Need-based support, 3 apply steps, "Apply for Scholarship" → WhatsApp). **Never** promise a guaranteed pass.
- **FAQ:** 8 questions, first open by default. Keep every answer in the DOM. Answers that mention eligibility link to the eligibility pages and do not repeat age limits or pass years.
- **Contact:** WhatsApp card first, then call, address, email (demo), hours; short form (name, WhatsApp number, interested in, year of last exam, message); map with "Get Directions". The campus video is removed.
- **Footer:** brand block, quick links, programs, contact, bottom note. Logo sits on a white tile (the logo is dark green).
- **Eligibility pages:** header with session switch, "Which one describes you?" cards, grouped category cards, board-rules box grouped like the PDF, CTA band. Details in section 8.

## 7. Contact constants (single source: `lib/site.ts` or the repo's equivalent)

- Phone: `0342-4049132` (tel: `03424049132`)
- WhatsApp: `https://wa.me/923424049132`. Prefilled messages use `?text=` with URL-encoded text, for example `Hello JMT, I want to enquire about Combined SSC (Gap).`
- Address: House 381, Street 9, Qazzafi Town, Quaidabad, Bin Qasim, Malir, Karachi
- Map point: latitude `24.848751`, longitude `67.221493`. Use these coordinates for the map embed, "Get Directions" and structured data.
- Office hours: Monday to Saturday, 9:00 AM – 5:00 PM (Sunday closed)
- Official name: JMT Public Higher Secondary School & College. Short brand: JMT.
- Email: **[UNKNOWN]**. The mockup shows `info@your-school-domain.pk` with a "Demo" tag. Keep it as a configurable constant and do not show the demo address in production. Hide the email row until the owner supplies it.
- ZUEB helpdesk: `helpdesk@zueb.edu.pk` (from the official PDFs).

Do **not** link the Google Maps listing "JMT College" for directions. It is currently pinned in the wrong city (Punjab). Use the coordinates above.

## 8. Eligibility data rules (critical)

The eligibility rules are official ZUEB facts. They must match these PDFs exactly:

- Annual (I) 2027: `https://zueb.edu.pk/wp-content/uploads/2026/09/Eligibility-Criteria-Annual-I-Enrollment-Examination-2027-ver.01.pdf`
- Annual (II) 2026: `https://zueb.edu.pk/wp-content/uploads/2026/07/Eligibility-Criteria-Annual-II-Examination-2026.pdf`

Implementation rules:
1. Store each session's rules as typed data (for example `data/eligibility/annual-1-2027.ts`, `annual-2-2026.ts`). The page components render from the data. No rule text is hard-coded in components.
2. Build the data from the reference HTML files `07-*` and `08-*` and **re-check every line against the PDFs**. If a line is not in the PDF, remove it.
3. Show the source link ("View official PDF") on each session page.
4. The two sessions differ (example: Grade IX Regular age is 12 to 20 in Annual (II) 2026 and 12 to 18 in Annual (I) 2027). Never merge them.
5. Do not add rules that are not in the PDF, such as a pass-year cut-off the PDF does not state. Admissions staff confirm edge cases on WhatsApp.
6. When ZUEB publishes a new PDF, add a **new** session file and page. Do not edit old sessions.
7. Each category card has an id (`#combined-ssc`, `#combined-hssc`, `#grade-ix`, `#grade-xi`, `#grade-x`, `#grade-xii`, `#failure`, `#improvement`, `#additional`, `#parallel`) so links like `/eligibility/annual-1-2027#combined-ssc` work.

## 9. Content truth rules

- **Never add unverified claims or numbers.** Banned unless the owner provides proof: "1,000+ students", "650+ students", "10+ years", "certified", "top results", "best", star ratings, smart-board or safe-campus claims, "guaranteed pass", fake urgency such as "limited seats".
- Allowed owner-provided facts: "28+ Years of experience" (label wording awaiting confirmation), "We reply within 24 hours", scholarships (merit and need-based, amounts decided by administration), installment plans via WhatsApp, the application process in the FAQ.
- Application process (as the owner described): send clear pictures of original documents on WhatsApp (JPG or PNG), receive the enrollment challan and pay it, enrollment card arrives, pay the examination challan, admit card arrives, take the exam, result arrives about two months after the exam. Exam and result dates are set by ZUEB.
- Use "Ziauddin University Examination Board (ZUEB)" for the full name. Never "Zia Uddin".
- Keep English simple and direct. Do not write long marketing paragraphs.

## 10. Pending items (leave placeholders, never invent)

| Item | Status |
|---|---|
| Hero photo | Placeholder. Owner will supply a real photo (WebP, about 1200 × 960) |
| Director photo | `design-reference/assets/director.jpg` is a low-resolution crop. Owner will supply the original |
| School email | Unknown. Hide the email row for now |
| Facebook and Instagram links | Unknown. Hide the icons or leave `#` out of production. Do not link to the generic facebook.com / instagram.com home pages. A Facebook page called "JMT public higher secondary school | Karachi" exists, the owner must confirm the URL |
| Google reviews section | **Deferred.** The owner will add it later. Do not build it. The Google listing is being corrected first |
| Campus video | Owner will provide later. A separate "Campus" section will be designed |
| Custom domain | Not bought. Keep the domain in one config value (for canonical URLs, sitemap, Open Graph) |
| Old "Admin Portal" footer link | Remove from public navigation. Keep the route itself working |
| `/about` and `/blogs` page designs | Not designed. Keep existing content, apply tokens only |

## 11. Motion spec (small, calm, accessible)

Principles: animate only `opacity` and `transform`. No layout-shifting animation. No animation libraries unless the repo already has one (if it has Framer Motion, use it for the same effects; otherwise use CSS plus a tiny IntersectionObserver hook). Never delay or hide the LCP image or the H1 for more than 200ms. Content must stay visible if JavaScript fails.

Tokens: durations `150ms` (hover), `250ms` (accordion, menu), `450ms` (reveal), easing `cubic-bezier(0.22, 1, 0.36, 1)`.

| Where | Effect |
|---|---|
| Hero (on load, CSS only) | Label, H1, paragraph, buttons, note, badge fade up 12px, 450ms, 70ms stagger. Hero image: no animation. The "4 Months" gold highlight draws left to right once (`background-size` 0% → 100%, 600ms, 350ms delay) |
| Sections below the fold | Fade up 12px on first scroll into view, once. Card grids stagger 60ms per card, maximum 6 steps |
| How it works | Cards reveal in order, arrow circles fade in after the card before them |
| Buttons and links | Hover: lift 1px and soft shadow, arrow icon moves 3px right. Active: scale 0.98. Focus-visible: 2px `gold` outline, 2px offset |
| Interactive cards (eligibility pick cards, category cards) | Hover: lift 2px, border darkens to `support`. No infinite animation |
| FAQ | Smooth open/close of the answer (grid-rows trick or `details` styling), plus/minus swap with a 150ms fade. All answers stay in the DOM |
| Header | Sticky. Adds a light shadow after 8px of scroll. Mobile menu slides in over 250ms |
| WhatsApp sticky button (mobile) | Fades in after 1 screen of scroll. No pulse or bounce |

Reference CSS (adapt to the repo's styling approach):

```css
@media (prefers-reduced-motion: no-preference) {
  :root { --ease: cubic-bezier(0.22, 1, 0.36, 1); }

  /* Hero load-in: CSS only, content visible without JS */
  .hero-enter > * { animation: fade-up 450ms var(--ease) both; }
  .hero-enter > *:nth-child(2) { animation-delay: 70ms; }
  .hero-enter > *:nth-child(3) { animation-delay: 140ms; }
  .hero-enter > *:nth-child(4) { animation-delay: 210ms; }
  @keyframes fade-up { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }

  /* Highlight under "4 Months" */
  .hl { background: linear-gradient(transparent 66%, rgba(200,155,60,.45) 66%) no-repeat 0 100% / 0% 100%;
        animation: hl-draw 600ms var(--ease) 350ms forwards; }
  @keyframes hl-draw { to { background-size: 100% 100%; } }

  /* Scroll reveal: hidden only after JS marks the page ready */
  [data-motion="ready"] .reveal:not(.is-visible) { opacity: 0; transform: translateY(12px); }
  .reveal { transition: opacity 450ms var(--ease), transform 450ms var(--ease); transition-delay: calc(var(--i, 0) * 60ms); }

  .btn:hover { transform: translateY(-1px); }
  .btn:active { transform: scale(.98); }
  .btn .arrow { transition: transform 150ms var(--ease); }
  .btn:hover .arrow { transform: translateX(3px); }
}
@media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
```

A `Reveal` client component (or hook) sets `document.documentElement.dataset.motion = "ready"` on mount, observes elements with `.reveal` using `IntersectionObserver` (threshold 0.15), adds `is-visible` once, then unobserves. Keep it as the only client-side motion code. Do not wrap above-the-fold content in `.reveal`.

## 12. Accessibility, performance, SEO, security

**Accessibility**
- One `<h1>` per page. Landmarks: header, nav, main, footer. Skip link to main content.
- Text contrast at WCAG AA or better. Never use `gold` as text on white.
- Visible focus rings. Everything usable by keyboard. Touch targets at least 44px.
- Form fields have real labels, required marks, and clear error messages. Icons are `aria-hidden`, icon-only buttons have `aria-label`.
- Session switch on eligibility pages uses links (real URLs), not client-only tabs.

**Performance**
- Hero image via `next/image` with `priority`, correct `sizes`, WebP/AVIF. No autoplay video. No heavy libraries.
- Fonts via `next/font`. Target mobile Lighthouse: Performance 90+, Accessibility 95+, SEO 95+ (targets, verify yourself).
- Server Components by default. Client components only for: mobile menu, FAQ accordion (if state-based), reveal hook, contact form, sticky header scroll state.
- Map: lazy-load the iframe (standard road map view, not satellite).

**SEO**
- Per-page `metadata` (title, description, canonical, Open Graph). Keep the existing home title/description intent: Ziauddin Board (ZUEB) Matric and Intermediate admissions 2026-27, Karachi. Update wording to match the new copy.
- JSON-LD: `EducationalOrganization` (name, address, geo `24.848751`/`67.221493`, phone, opening hours Mon–Sat 09:00–17:00); `BreadcrumbList` on eligibility pages; optional `FAQPage` generated from the same FAQ data. Do not expect FAQ rich results in Google. They are now limited to a few site types, so the markup is optional.
- `sitemap.xml` and `robots.txt` including both eligibility pages. Canonical URLs use one domain constant.
- Only one canonical per eligibility session. Internal links use real `<a>`/`<Link>`.

**Security**
- No secrets in code, logs or this file. Use environment variables. Do not print `.env` values.
- Contact form: validate on the server, sanitize, add a honeypot and basic rate limiting, never trust client input. Keep the existing destination (database, email, WhatsApp) unless the owner approves a change. **[UNKNOWN]** until Phase 0.
- Do not expose admin routes in public navigation. Do not weaken any existing authentication or authorization.
- Do not collect more personal data than the form fields in the design. Keep the privacy line "We use your details only to contact you about admission."

## 13. Do not

- Do not rewrite the project from scratch or switch frameworks.
- Do not add new dependencies without need. If one is needed, say why and prefer small, maintained packages.
- Do not invent eligibility rules, fees, scholarship amounts, statistics, reviews, testimonials, addresses or emails.
- Do not remove or break existing routes, the blog, the admin area, or the form backend.
- Do not commit `.env`, keys or tokens. Do not print them.
- Do not use stock or AI-generated photos of "students" or "campus". Real photos only.
- Do not build the Google reviews section yet.
- Do not use localStorage/sessionStorage for anything required for the page to work.
- Do not make large changes across unrelated files. One section per change.

## 14. Change workflow

1. Complete Phase 0 and write `docs/redesign-notes.md`.
2. Propose the order of work to the owner. Recommended order: design tokens and fonts, layout (header, footer, mobile menu), hero and How it works, About, Why JMT, FAQ, Contact, eligibility data and pages, SEO and JSON-LD, motion polish.
3. Implement **one section or page at a time**, reusing existing components and patterns. Keep each diff focused.
4. After each section: compare against the reference screens at 390px, 768px, 1024px and 1440px.
5. Report to the owner in simple English: what changed, what is still pending, any decision you need.

## 15. Verification (before saying "done")

- `build` succeeds, `lint` is clean, type check passes (use the scripts that exist in `package.json`).
- No console errors or hydration warnings. No horizontal scroll at 360px.
- All internal links, anchors (`#combined-ssc` etc.), `tel:`, WhatsApp and map links work.
- Keyboard-only run through header, mobile menu, FAQ, form, and eligibility cards.
- Reduced motion on: no animation runs and nothing stays hidden.
- JavaScript disabled: all content is visible (only enhancements are missing).
- Eligibility data checked line by line against the two PDFs.
- View-source check of metadata and JSON-LD on `/` and one eligibility page.
- Lighthouse mobile run on `/` and `/eligibility/annual-1-2027`; report the scores.
- Final diff reviewed for secrets, leftover placeholder text, demo email, and unverified claims.
