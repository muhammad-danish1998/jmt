# JMT Public Higher Secondary School & College — Official Portal

A modern, high-performance, responsive, and SEO-optimized web application for **JMT Public Higher Secondary School & College**, built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Supabase Database**.

---

## 🌟 Key Features

- **🎓 Comprehensive Academic Programs**: Complete course listings for Classes IX, X, XI, and XII across Science, Computer Science, Pre-Medical, Pre-Engineering, Commerce, and Humanities.
- **📋 Official Eligibility Criteria**: Interactive category tabs for Regular, Private, Combine (Gap), Improvement, Additional, and Parallel stream candidates per board regulations.
- **💬 Direct Contact & WhatsApp Integration**: 1-click WhatsApp messaging and direct telephone dialing.
- **📝 Admission Enquiry System**: Online admission enquiry form with server-side validation and automated database storage in Supabase.
- **🔐 Secure Admin Panel (`/admin`)**: Password-protected dashboard to search, filter, manage, call/WhatsApp applicants, and export admission data to CSV/Excel.
- **🚀 Advanced SEO**: Server-side rendering, OpenGraph social meta tags, and Schema.org `EducationalOrganization` structured data for Google Search.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **UI & Components**: React 19 + Lucide React Icons
- **Styling**: Tailwind CSS v4 (with `@tailwindcss/postcss`)
- **Database**: Supabase PostgreSQL
- **AI Code Reviewer**: Google Gemini API (`@google/genai`)

---

## 🚀 Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/jmt-college-website.git
cd jmt-college-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Copy `.env.example` to `.env` and fill in your keys:
```bash
cp .env.example .env
```

Set the following in `.env`:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ADMIN_USERNAME=admin
ADMIN_PASSWORD=your_secure_password
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 🔒 Security & Best Practices

- All database operations are guarded by Supabase Row-Level Security (RLS).
- Secrets and API keys are strictly kept inside `.env` and ignored by `.gitignore`.
- Admin panel routes are protected via server-side session authentication.

---

## 📄 License
© 2026 JMT Public Higher Secondary School & College. All Rights Reserved.
