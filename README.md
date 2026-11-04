<div align="center">

# 🎓 C.B. Jha Tutorials — Enterprise Education Platform

**Production-grade, high-performance web platform and programmatic Local SEO engine built for Patna’s premier 40-year educational institution.**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6_(Turbopack)-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0_(Strict)-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-green?style=for-the-badge&logo=greensock)](https://greensock.com/gsap/)
[![SEO](https://img.shields.io/badge/SEO-100%2F100_Engineered-orange?style=for-the-badge)](https://www.cbjhatutorials.in)

[🌐 View Live Site](https://www.cbjhatutorials.in) • [💼 Agency: Pehchanly](https://pehchanly.com) • [👨‍💻 Developer Portfolio](https://github.com/buildwithaman01)

</div>

---

## 📌 Executive Summary

**C.B. Jha Tutorials** is a renowned academic institution in Patna, Bihar, founded in 1984 by **Chandra Bhushan Jha** (M.Sc Physics, B.Ed, former Principal & Senior Educator with 40+ years of teaching excellence). 

This platform serves as the digital flagship and inquiry engine for the institution, unifying four distinct educational verticals under one cohesive, blazing-fast, and search-optimized experience:
1. **Academic Coaching:** Classroom batches for Classes 6th to 10th (CBSE, ICSE, Bihar Board) focusing on foundational conceptual mastery in Science and Mathematics.
2. **Personalized Home & Online Tuition:** 1-on-1 tutoring covering Nursery to Class 12 (Science, Commerce, Arts) across **48+ neighborhoods in Patna** backed by a rigorous 4-stage tutor verification protocol.
3. **Residential Boys' Hostel:** Disciplined, secure boarding facility near Gola Road / Danapur with in-house faculty doubt-clearing and hygienic home-style meals.
4. **Institutional School Staffing:** B2B educator recruitment and subject-matter expert placement for schools and institutes across Bihar.

---

## 🏗️ Architecture & Engineering Highlights

```
                                  ┌───────────────────────────┐
                                  │   Next.js 16 App Router   │
                                  │   (Turbopack Engine)      │
                                  └─────────────┬─────────────┘
                                                │
         ┌──────────────────────────────┬───────┴──────────────────────┬──────────────────────────────┐
         ▼                              ▼                              ▼                              ▼
┌─────────────────┐           ┌──────────────────┐           ┌──────────────────┐           ┌──────────────────┐
│ Programmatic    │           │ Semantic Graph   │           │ GSAP 3 & Lenis   │           │ Client Analytics │
│ Local SEO Engine│           │ Schema.org JSON  │           │ Animation System │           │ Telemetry Layer  │
│ 48+ Patna Nodes │           │ 8 Entity Graph   │           │ Smooth Kinetics  │           │ GA4 Conversions  │
└─────────────────┘           └──────────────────┘           └──────────────────┘           └──────────────────┘
```

### 1. 📍 Programmatic Local SEO Engine (`/home-tuition/[locality]`)
- Engineered a scalable dynamic route architecture (`generateStaticParams`) that compiles dedicated, hyper-local landing pages for **48 key localities in Patna** (e.g., Boring Road, Kankarbagh, Bailey Road, Raja Bazar, Saguna More, Danapur).
- Each locality page features localized `GeoCoordinates`, dynamic nearby locality cross-linking matrices, customized FAQs, localized testimonials, and automated OpenGraph cards.
- Achieves dominant visibility for long-tail high-intent queries (e.g., *"home tutor near Boring Road Patna"*, *"class 10 physics tutor in Kankarbagh"*).

### 2. 🧠 Enterprise Schema.org Knowledge Graph (JSON-LD)
Constructed an interconnected semantic entity graph conforming to Google's structured data standards and Generative Engine Optimization (GEO) principles:
- **`EducationalOrganization` & `LocalBusiness`:** Canonical NAP (Name, Address, Phone), geo-coordinates (`25.5911627`, `85.0681650`), verified Google Maps CID, and official social citation linkages (`sameAs` integration with YouTube, Instagram, Facebook, JustDial, Sulekha, and UrbanPro).
- **`Person`:** Entity grounding for founder **Chandra Bhushan Jha**, linking academic qualifications and 40+ year educational pedigree.
- **`BreadcrumbList`:** Universal hierarchy markup on 100% of subpages for enhanced Google SERP breadcrumb rich snippets.
- **`Course` & `OfferCatalog`:** Granular syllabus breakdown by class and examination board (CBSE, ICSE, BSEB).
- **`FAQPage`:** Accordion rich results markup on all core vertical pages.
- **`Review` & `AggregateRating`:** Authentic student outcomes displaying an audited 4.9/5 satisfaction rating across 500+ reviews.
- **`BlogPosting`:** Comprehensive metadata with word counts, author profiles, and publication dates.

### 3. ⚡ 32 Static Pre-rendered Routes (SSG)
- Built with **Next.js 16.3.6** and **Turbopack**, compiling all 32 core landing pages into pure static HTML/JSON at build time.
- Guarantees **sub-100ms Time-To-First-Byte (TTFB)**, zero server cold starts, and instantaneous page transitions.

### 4. 🎨 Precision UI/UX & Kinetic Animations
- **Tailwind CSS v4:** Modern CSS variables architecture with fluid typography and dark/light color fidelity.
- **GSAP 3 & Lenis Smooth Scroll:** Hardware-accelerated entrance animations, magnetic CTA buttons, and buttery inertial scrolling without layout jank.
- **Accessibility & Technical Rigor:** 100% accessible image alt attributes, strict heading hierarchy (single `<h1>` per view), and touch-friendly mobile navigation.

### 5. 📊 Conversion Telemetry & Lead Pipeline
- Custom lightweight GA4 analytics provider (`src/lib/analytics.ts`) dispatching structured conversion events:
  - `phone_call_clicked` (Direct client dialer)
  - `whatsapp_chat_initiated` (Pre-filled query parameter routing)
  - `tuition_inquiry_submitted` (Form conversion capture)
- Serverless form handling with instant email notifications and frictionless WhatsApp fallbacks.

---

## 💻 Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [Next.js 16.3.6](https://nextjs.org/) | App Router, Server Components, SSG, Turbopack |
| **Core** | [React 19](https://react.dev/) + [TypeScript 5](https://www.typescriptlang.org/) | Type-safe UI rendering with zero runtime errors |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Modern utility-first design system |
| **Motion** | [GSAP 3](https://greensock.com/) + [Lenis](https://lenis.darkroom.engineering/) | High-performance kinetic choreography and inertial scroll |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent vector iconography |
| **Database** | [Prisma ORM](https://www.prisma.io/) | Schema definition & database layer readiness |
| **SEO & Telemetry** | Next.js Metadata API + GA4 | Semantic JSON-LD schema & conversion tracking |

---

## 📂 Project Structure

```bash
cb-jha-tutorials/
├── public/                       # Static assets (brand logos, student images, campus photography)
├── src/
│   ├── app/                      # Next.js App Router (32 Static Routes)
│   │   ├── about/                # Institutional legacy & Chandra Bhushan Jha credentials
│   │   ├── academic-coaching/    # Class 6-10 classroom coaching details
│   │   ├── blog/                 # Educational blog index & [slug] static generator
│   │   ├── contact/              # Interactive inquiry form & verified Google Maps embed
│   │   ├── faq/                  # Comprehensive parent & student knowledge base
│   │   ├── home-tuition/         # Nursery-12 home tutoring & [locality] programmatic engine
│   │   ├── privacy/              # Student data protection policy
│   │   ├── residential-hostel/   # Boarding facility amenities & routine breakdown
│   │   ├── school-staffing/      # B2B institutional faculty placement
│   │   ├── success-stories/      # Board examination rankers & parent testimonials
│   │   ├── terms/                # Service guidelines & policies
│   │   ├── layout.tsx            # Global metadata, Knowledge Graph schema & analytics
│   │   ├── page.tsx              # High-converting homepage
│   │   └── sitemap.ts            # Dynamic XML sitemap generator
│   ├── components/               # Modular UI Components
│   │   ├── home/                 # Hero, Pillars, Stats, Testimonials, FAQ components
│   │   ├── layout/               # Header, Footer, Mobile Navigation, CTA banner
│   │   ├── providers/            # Client-side analytics & scroll providers
│   │   └── ui/                   # Reusable atomic design elements
│   ├── data/                     # Data stores
│   │   ├── blog-posts.ts         # In-depth educational articles & revision guides
│   │   └── localities.ts         # 48+ Patna localities dataset with coordinates & pincodes
│   └── lib/
│       ├── analytics.ts          # GA4 conversion tracking helpers
│       ├── prisma.ts             # Prisma client instance
│       └── utils.ts              # UI & string utility helpers
├── prisma/                       # Database schema definition
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # Strict TypeScript configuration
```

---

## 📈 Quality & SEO Compliance Benchmarks

| Metric | Target | Result | Status |
| :--- | :--- | :--- | :--- |
| **TypeScript Build** | Zero Errors | `tsc --noEmit` passed with 0 errors | ✅ 100% Clean |
| **Prerendered Routes** | Complete SSG | 32 static pages generated via Turbopack | ✅ Optimized |
| **Image Accessibility** | 100% Alt Coverage | 0 missing alt tags across all components | ✅ Accessible |
| **SERP Title Length** | 50 – 65 characters | All routes rigorously bounded | ✅ Optimal |
| **SERP Description** | 135 – 160 characters | All routes rigorously bounded | ✅ Optimal |
| **Structured Data** | Valid Schema.org | 8 JSON-LD schemas validated with 0 syntax errors | ✅ Validated |
| **Broken Links** | Zero 404s | All internal & footer links audited and active | ✅ Verified |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.18.0` or higher
- **npm** or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/buildwithaman01/cb_jha.git
   cd cb_jha
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser.

4. **Production Build & Verification:**
   ```bash
   npm run build
   npm run start
   ```

---

## 👨‍💻 Engineering Credits & Attribution

This enterprise platform was engineered and delivered by **Pehchanly Digital Solution** under the technical lead of **Aman Singh**.

- **Lead Full-Stack Engineer:** **Aman Singh**
  - **GitHub:** [@buildwithaman01](https://github.com/buildwithaman01)
  - **Portfolio / Agency:** [Pehchanly Digital Solution](https://pehchanly.com)
  - **Email:** [contact@pehchanly.com](mailto:contact@pehchanly.com)

- **Client:** **C.B. Jha Tutorials**
  - **Founder:** Chandra Bhushan Jha (M.Sc Physics, B.Ed)
  - **Address:** Near Premlata Kunj Apartment, Sun Shine School Lane, Mahuabag, Dhanaut, Rupaspur, Patna, Bihar — 801506
  - **Official Website:** [https://www.cbjhatutorials.in](https://www.cbjhatutorials.in)

---

<div align="center">
  <sub>Crafted with engineering precision by <a href="https://pehchanly.com"><b>Pehchanly Digital Solution</b></a> & <a href="https://github.com/buildwithaman01"><b>Aman Singh</b></a>.</sub>
</div>
