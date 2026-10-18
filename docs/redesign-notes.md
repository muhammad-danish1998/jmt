# Repository Inspection & Redesign Notes (Phase 0)

**Date:** October 17, 2026  
**Project:** JMT Public Higher Secondary School & College Website Redesign  
**Document Purpose:** Phase 0 baseline audit, architectural inspection, and design-reference analysis as required by `updated agents.md`.

---

## 1. Executive Summary

This repository is an active, production-ready **Next.js 16 (App Router)** application written in **JavaScript (ESM)** with **React 19** and **Tailwind CSS v4**. It features an admissions enquiry backend and dynamic blog management backed by **Supabase PostgreSQL**.

The redesign goal is to transform the existing blue/amber design into the approved clean green design (`#0B3D26`, `#2E6B4A`, `#EAF2ED`), aligning with official Ziauddin University Examination Board (ZUEB) eligibility criteria, while preserving the working admin portal, blogs system, and enquiry submission pipeline.

---

## 2. Core Architecture & Stack

| Item | Details |
|---|---|
| **Framework** | Next.js 16.3.3 (App Router in `/app`) |
| **React Version** | React 19.2.8 / React DOM 19.2.8 |
| **Language** | JavaScript (`.jsx`, `.js`, `"type": "module"` in `package.json`). No TypeScript configuration (`tsconfig.json`) exists. |
| **Package Manager** | **npm** (verified by `package-lock.json` in root). No `yarn.lock`, `pnpm-lock.yaml`, or `bun.lockb`. |
| **Styling Approach** | **Tailwind CSS v4** (`tailwindcss` 4.3.3, `@tailwindcss/postcss` 4.3.3). Configured via `postcss.config.mjs` and CSS theme variables in `app/globals.css`. There is no `tailwind.config.js`. |
| **Icons Library** | `lucide-react` (1.35.0) |
| **Font Loading** | `next/font/google` in `app/layout.jsx` loading `Plus_Jakarta_Sans` (`--font-jakarta`) and `Dancing_Script` (`--font-dancing`). Per the redesign spec, `Dancing_Script` will be retired and `Plus_Jakarta_Sans` will be used exclusively. |
| **Image Handling** | `next/image` with remote pattern allowed for `images.unsplash.com` in `next.config.mjs`. |

---

## 3. Package.json Scripts & Commands

The only scripts defined in `package.json` are:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  }
}
```

*Note on tooling:* `oxlint` (v1.79.0) and `.oxlintrc.json` are present in `devDependencies`, but there is **no** `"lint"` script in `package.json`. There are also no automated test scripts (`test`). Vite is present in `devDependencies`, but the application is entirely run and built via Next.js.

---

## 4. Existing Routes & Navigation Map

### Public Pages
- **`/` (`app/page.jsx`)**: The existing single-page home layout rendering TopBar, Navbar, Hero, AboutSection, WhyChooseUsGrid, EligibilityAndFees, VideoAndEnquiry, Testimonials, FAQ, CtaBand, Footer, and utility floating widgets.
- **`/blogs` (`app/blogs/page.jsx` & `app/blogs/layout.jsx`)**: Public educational blog listing with real-time category filtering and search.
- **`/blogs/[slug]` (`app/blogs/[slug]/page.jsx`)**: Dynamic article detail page fetching blog content by slug.

### Admin Portal
- **`/admin` (`app/admin/page.jsx` & `app/admin/layout.jsx`)**: A full-featured administrative portal (1500+ lines) protected by login session token.
  - Manages admission enquiries (list, filter by class, search, CSV export, delete, direct WhatsApp link to applicant).
  - Manages blog posts (create, edit, preview, delete, toggle featured).
  - Excluded from search indexing via robots metadata and `app/robots.js`.

### API Endpoints
- **`POST /api/enquiry`**: Handles admission enquiry submissions.
- **`POST /api/admin/login`**: Authenticates admin credentials, issues HMAC-SHA256 session token, sets HTTP-only cookie.
- **`GET /api/admin/enquiries`**: Lists all admission enquiries (protected by admin session token).
- **`DELETE /api/admin/enquiries`**: Deletes an enquiry by ID (protected).
- **`POST /api/admin/upload`**: Validates and converts image uploads to Base64 data URLs (protected).
- **`GET /api/blogs`**: Public endpoint to list published blogs (supports `?category=` and `?slug=`).
- **`POST /api/blogs`**: Creates a new blog post in Supabase (protected).
- **`PUT /api/blogs/[id]`**: Updates an existing blog post (protected).
- **`DELETE /api/blogs/[id]`**: Deletes a blog post (protected).

### Metadata & SEO Routes
- **`/robots.txt`**: Dynamic generator in `app/robots.js`.
- **`/sitemap.xml`**: Dynamic generator in `app/sitemap.js` (queries Supabase to generate dynamic blog URLs).
- *Observation:* Duplicate static files `public/robots.txt` and `public/sitemap.xml` also exist in `public/`.

---

## 5. Contact / Admission Forms & Data Flow

There are currently two user-facing forms:
1. **Contact & Enquiry Section** (`src/components/VideoAndEnquiry.jsx`): Embedded near bottom of home page.
2. **Admission Modal** (`src/components/EnrollmentModal.jsx`): Triggered by "Apply Now" / "Enroll Now" buttons.

### Submission Destination
Both forms submit a `POST` request to `/api/enquiry`:
1. **Rate Limiting:** Enforces maximum 10 submissions per 15 minutes per IP via `src/lib/rateLimit.js`.
2. **Server-Side Validation:** Validates required fields (`studentName`, `contactNumber`, `classInterested`).
3. **Database Insertion:** Inserts the enquiry into the **`admission_enquiries`** table in Supabase via `src/lib/supabase.js`.
4. Fields stored: `student_name`, `parent_name`, `class_interested`, `contact_number`, `email`, `message`, `created_at`.

---

## 6. Admin Route Details

- **Path:** `/admin`
- **Authentication:** Validates input against environment variables `ADMIN_USERNAME` and `ADMIN_PASSWORD` (with fallbacks defined in `app/api/admin/login/route.js`).
- **Session Security:** Implements HMAC-SHA256 cryptographically signed tokens (`generateAdminToken` in `src/lib/auth.js`) valid for 7 days. Stored in HTTP-only cookie `admin_auth_token` and browser `localStorage`.
- **Rate Limiting:** Maximum 5 failed login attempts per 15 minutes per IP.
- **Functionality:** Admissions CRM (export, search, filter, call/WhatsApp) + Blog CMS.
- **Preservation Status:** Must remain fully functional and intact throughout the redesign. Public links to `/admin` in the header/footer will be removed per spec, but the route itself must not be altered or broken.

---

## 7. Blogs Route & Data Source

- **Path:** `/blogs` and `/blogs/[slug]`
- **Data Source:** **Supabase table `blogs`**.
- `src/data/blogsData.js` provides category metadata (`BLOG_CATEGORIES`) and blog post template helpers for the admin editor. `BLOG_POSTS` is intentionally empty because all blog posts are dynamic records stored in Supabase.
- **Preservation Status:** Keep routes and functionality intact. Apply the new design tokens and typography lightly without breaking CMS compatibility.

---

## 8. Database (Supabase) Setup

- Configured via `src/lib/supabase.js` using `@supabase/supabase-js`.
- Reads `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
- Database Tables in Use:
  - `admission_enquiries`: Stores leads and contact submissions.
  - `blogs`: Stores published and drafted articles.

---

## 9. Detailed Inspection of `design-reference/` Folder

The `design-reference/` folder contains static HTML mockups exported at two primary viewport widths: **Desktop (1440px)** and **Mobile (390px)**.

### Asset Files
- **`design-reference/assets/jmt-logo.png`**: High-quality dark green school logo with transparent background.
- **`design-reference/assets/director.jpg`**: Low-resolution reference crop of the Chief Executive Director at his desk.

### Section-by-Section Reference Breakdown

| Reference File Pair | Section | Key Visual & Copy Specifications |
|---|---|---|
| `01-home-hero-desktop.html`<br>`01-home-hero-mobile.html` | **Header, Hero & How It Works** | - **Header:** Desktop has logo + title, 5 navigation links (`Home`, `About`, `Eligibility`, `Contact`, `Blogs`), phone `0342-4049132`, and solid green "Apply Now" button. Mobile has 48px logo, short name "JMT School & College", and 44px accessible hamburger menu button.<br>- **Hero:** Eyebrow label with gold 28px bar + uppercase label `"Admissions 2026–27 open · Karachi"`.<br>- **Hero H1:** `"Complete Your Matric or Intermediate in as Little as 4 Months"` with `"4 Months"` highlighted in gold gradient underline.<br>- **Buttons:** Primary `"Check Your Eligibility"` (links to `/eligibility`) + secondary `"Chat on WhatsApp"` (outline). Full-width stacked on mobile.<br>- **Trust Badge:** `"JMT College — ZUEB-affiliated institution"` chip + `"Exam and result dates are set by ZUEB."`<br>- **Photo Slot:** 520px high container on desktop (240px on mobile) with tint background `#EAF2ED` and 16% opacity watermark logo.<br>- **How It Works:** 3 numbered cards (`01 Take admission`, `02 Appear in the exam`, `03 Get your result`) connected by arrow circles. Arrows point right on desktop, point down on mobile. Followed by "Not sure if you qualify? Check your eligibility" link. |
| `02-home-about-desktop.html`<br>`02-home-about-mobile.html` | **About Section** | - **Left Figure:** Director photo (500px high, object-position center 30%) + figcaption with `"Chief Executive Director"` title and a prominent `"28+ Years of experience"` stat block.<br>- **Right Content:** Eyebrow label, H2 `"Guiding students through their Ziauddin Board exams, step by step"`, introductory narrative, and a 2x2 grid of 4 cards (`ZUEB-affiliated`, `Clear eligibility check`, `Support to exam day`, `Matric and Intermediate`).<br>- **CTA:** Solid green `"Talk to Admissions"` button linking to WhatsApp. |
| `03-home-why-jmt-and-scholarships-desktop.html`<br>`03-home-why-jmt-and-scholarships-mobile.html` | **Why JMT & Scholarships** | - **Section Background:** Solid dark green (`#0B3D26`) with gold accents.<br>- **6 Feature Cards (3x2 Grid):** Semi-transparent white cards with gold icon tiles (`Fast-track combined exams`, `Eligibility check first`, `Experienced faculty`, `Board exam focus`, `Affordable fees`, `Personal guidance`).<br>- **Scholarships Sub-Panel:** Tinted container (`#EAF2ED`) featuring a 3-step application numbered list, `"Apply for Scholarship"` WhatsApp CTA, and 2 distinct card blocks for `Merit scholarship` and `Need-based support`. |
| `04-home-faq-desktop.html`<br>`04-home-faq-mobile.html` | **FAQ Section** | - **Left Column:** Eyebrow, H2 `"Questions we hear most"`, description, and dark green callout box with `"Still have questions?"` WhatsApp button + link to `/eligibility`.<br>- **Right Column:** 8 expandable accordion items styled using `<details class="faq">` with smooth plus/minus toggle. First question (`"Who can take the Combined (Gap) exam?"`) is open by default. All answers remain in the DOM. |
| `05-home-contact-desktop.html`<br>`05-home-contact-mobile.html` | **Contact & Campus Map** | - **Left Info Panel:** Dark green WhatsApp fast-reply card, followed by structured white cards for Call (`0342-4049132`), Campus Address, Email row (marked `Demo`), Office Hours (`Mon – Sat: 9:00 AM – 5:00 PM`), and document reminder card.<br>- **Right Form:** Clean white card with fields: `Full name` (*), `WhatsApp number` (*), `I am interested in` dropdown (*), `Year you passed your last exam` (optional), and `Message` (optional). Submit button `"Send Message"` + privacy note.<br>- **Bottom Map:** Map preview container with exact coordinates (`24.848751977936953, 67.22149307537047`) and `"Get Directions"` button. |
| `06-footer-desktop.html`<br>`06-footer-mobile.html` | **Footer** | - **Background:** Dark green (`#0B3D26`).<br>- **Brand Column:** Logo placed on a white rounded tile (`64x64px`, border-radius `14px`), institution description, ZUEB-affiliated chip, and social media icon pills (WhatsApp, Facebook, Instagram).<br>- **Columns:** Quick Links, Programs, and full Contact block.<br>- **Bottom Bar:** Copyright notice and official ZUEB disclaimer line. |
| `07-eligibility-annual-1-2027-desktop.html`<br>`07-eligibility-annual-1-2027-mobile.html` | **Eligibility: Annual (I) 2027** | - **Top Section:** Breadcrumbs (`Home / Eligibility / Annual (I) 2027`), H1 `"Eligibility & Admission Criteria"`, session switch tabs, and link to official ZUEB PDF.<br>- **Chooser Cards:** 4 quick cards (`Combined SSC (Gap)`, `Combined HSSC (Gap)`, `Grade IX`, `Grade XI`) + pills for other categories.<br>- **Detailed Category Cards:** Structured rules with IDs (`#combined-ssc`, `#combined-hssc`, etc.), age chips, document lists, and pre-filled WhatsApp enquiry buttons. |
| `08-eligibility-annual-2-2026-desktop.html`<br>`08-eligibility-annual-2-2026-mobile.html` | **Eligibility: Annual (II) 2026** | - Matching structure to Annual (I) 2027, with rules and age limits matching the Annual (II) 2026 ZUEB criteria. Session tab switches between both pages. |
| `deferred/google-reviews-desktop.html`<br>`deferred/google-reviews-mobile.html` | **Deferred Google Reviews** | - **Status:** Deferred per `updated agents.md` section 3 & 10. Contains layout for Google rating 5.0 and student testimonials. Marked "Do not build yet". |

---

## 10. Design Token System (Final Mapping)

| Token Name | Hex Code | Usage in Redesign |
|---|---|---|
| `primary` | `#0B3D26` | Primary buttons, main headings, Why JMT background, footer background |
| `support` | `#2E6B4A` | Eyebrow labels, outline button borders, icons on light cards |
| `tint` | `#EAF2ED` | Alternate section backgrounds, icon tiles, category badges |
| `tint-border` | `#CFE0D6` | Borders on tinted cards and accordions |
| `gold` | `#C89B3C` | Decorative only: label accent bars, step numbers, "4 Months" highlight |
| `gold-tint` / `gold-border` | `#FBF1D8` / `#EBD9A6` | Age chips and small tags |
| `gold-deep` | `#8A6425` | Icons inside official board rule boxes |
| `rules-bg` | `#FBF6E9` | Highlighted board rules container |
| `page` | `#FAFAF7` | Overall page body background |
| `ink` | `#17202A` | Primary text, titles on light |
| `body` | `#3A4551` | Paragraphs and narrative copy |
| `muted` | `#5E6873` | Secondary text, helper labels |
| `border` | `#E5E7EB` | General neutral divider lines and borders |
| `input-border` | `#8291A3` | Form inputs and mobile hamburger button border |
| `error` | `#B42318` | Asterisk marks and validation errors |

---

## 11. Items We Are Unsure About / Potential Conflicts

1. **Static vs Dynamic Robots/Sitemap Conflict:**
   Next.js has dynamic metadata route handlers `app/robots.js` and `app/sitemap.js`, but static files `public/robots.txt` and `public/sitemap.xml` also exist. In Next.js, static files in `public/` can override or conflict with dynamic app route files.
2. **Current Eligibility Session:**
   `updated agents.md` specifies `/eligibility` as a chooser linking to `Annual (I) 2027` and `Annual (II) 2026`, but notes that which session is currently active or primary is `[UNKNOWN]`.
3. **Official Email Address:**
   `app/layout.jsx` references `danishbrothers1998@gmail.com`, while design reference files show demo `info@your-school-domain.pk`. Per `updated agents.md`, the email row should be hidden until a verified official email is provided.
4. **Social Media URLs:**
   Layout has generic social media links (`facebook.com`, `instagram.com`). Per rule 10, these should be hidden until exact URLs are confirmed by the owner.
5. **Vite in `devDependencies`:**
   Vite and `@vitejs/plugin-react` are listed in `package.json`, but all scripts and routing use Next.js.
6. **Lint Script in `package.json`:**
   `oxlint` is installed in `devDependencies`, but there is no `"lint"` script in `package.json`.
