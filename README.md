# Amrutha Jalaja Devi — Artist Portfolio

> Official web application and curated digital portfolio for UK visual artist and contemporary figurative painter **Amrutha Jalaja Devi** ([amrithajalajadevi.com](https://amrithajalajadevi.com)).

---

## Project Overview & Introduction

This repository contains the source code for the official portfolio website of **Amrutha Jalaja Devi**, a contemporary figurative painter and public muralist with an international exhibition record and institutional recognition (including selections with the British Council).

Designed with a warm, minimalist gallery aesthetic inspired by European fine art institutions, the platform presents high-resolution figurative paintings, architectural murals, printmaking works, and curated biographical archives. The web application is engineered for speed, editorial freedom, visual fidelity, and accessibility, pairing a headless content management system with a reactive Next.js frontend.

---

## Key Features

- **Headless Content Management with Sanity Studio**
  - Integrated embedded Sanity Studio (`/studio`) allowing real-time content authoring for artworks, public commissions, exhibitions, press archives, CV entries, and site settings.
  - Granular data querying powered by GROQ with deterministic filtering, sorting, and pagination.

- **Dynamic Multi-Category Art Galleries**
  - Responsive visual galleries featuring masonry and grid arrangements for paintings, murals, public art, and printmaking editions.
  - Dynamic aspect-ratio preservation preventing layout shifts (CLS) across heterogeneous artwork dimensions.
  - Client-side filtering across thematic series with smooth state transitions.
  - High-resolution modal lightbox viewer with detailed technical metadata (medium, dimensions, year, and exhibition status).

- **Studio Crop & Hotspot Focal Point Optimization**
  - Native integration with `@sanity/image-url` that automatically honors custom image cropping rectangles (`rect=x,y,w,h`) performed directly inside Sanity Studio.
  - Adaptive focal-point centering utilizing Sanity hotspot metadata mapped to CSS `object-position` coordinates, guaranteeing that key subject details remain visible across all viewport dimensions.
  - Low-Quality Image Placeholders (LQIP) and Next.js blur data decoding for instantaneous, perceptible loading.

- **Exhibition & Archival Records**
  - Dedicated exhibition timeline cataloging upcoming, ongoing, and past solo and group exhibitions worldwide.
  - Public art case studies displaying commissioning bodies, site coordinates, mural dimensions, and multi-perspective image marquees.
  - Dynamic Curriculum Vitae (CV) tracking academic credentials, appointments, awards, and permanent collections, complemented by downloadable PDF assets.

- **Robust Contact & Studio Inquiry System**
  - Interactive contact form driven by Next.js Server Actions with zero external page reloads.
  - Strict input validation and sanitization using **Zod** schemas.
  - Multi-tier anti-spam architecture featuring an invisible honeypot field.
  - Automated transactional email dispatch through the **Resend SDK** with styled HTML receipts and dedicated `reply-to` headers routing correspondence directly to the sender.

- **Refined Gallery Aesthetics & Typography**
  - Bespoke color palette tailored for visual art presentations: deep burgundy headers (`#4A2E35`), warm neutral canvas surfaces (`#F7F4F0`), soft stone cards (`#EFEAE4`), and muted taupe body typography (`#8A7976`).
  - Editorial serif headings paired with clean, accessible sans-serif typography.
  - Smooth fluid micro-interactions and staggered entry animations built with **Framer Motion**.

- **Fully Responsive & Accessible Layout**
  - Mobile-first architecture with edge-to-edge touch navigation, fluid drawers, and desktop split-screen displays.
  - Semantic HTML5 structure, descriptive ARIA attributes, and automatic meta tag generation for SEO optimization.

---

## Tech Stack & Libraries

The application is built on modern, production-grade web technologies:

### Core Framework & Runtime
- **Next.js (`16.3.1`)**: React application framework utilizing the App Router, React Server Components (RSC), Server Actions, and Incremental Static Regeneration (ISR).
- **React (`19.2.8`)**: Modern UI library with concurrent rendering, server components, and modern action hooks (`useActionState`).
- **React DOM (`19.2.8`)**: React DOM rendering engine for web platforms.
- **TypeScript (`^5`)**: Strict type-checking, explicit interfaces, and compile-time code validation.

### Content Management & Media Pipeline
- **Sanity (`^5.31.2`)**: Headless CMS platform for structured content modeling, asset management, and studio editorial workflows.
- **next-sanity (`^13.3.3`)**: Next.js toolkit for Sanity integration, live content fetching, and preview modes.
- **@sanity/image-url (`^2.1.1`)**: URL builder calculating pixel-perfect cropping rectangles and focal hotspots from Sanity CDN assets.
- **@sanity/vision (`^5.31.2`)**: In-studio GROQ query debugging and schema inspection tool.

### Styling, Layout & Motion
- **Tailwind CSS (`^4`)**: Modern utility-first CSS engine with modern CSS variable tokens.
- **@tailwindcss/postcss (`^4`)**: PostCSS plugin integration for Tailwind CSS v4.
- **Framer Motion (`^13.1.0`)**: Production-ready animation library powering layout fade-ins, modal transitions, and staggered content reveals.
- **styled-components (`^6.5.3`)**: Component-level style isolation used by embedded studio tooling.
- **clsx (`^2.1.1`)**: Utility for conditionally constructing `className` strings.
- **tailwind-merge (`^3.6.0`)**: Utility for conflict-free merging of dynamic Tailwind classes.
- **lucide-react (`^1.31.0`)**: Clean, consistent icon set for navigation, social links, and UI triggers.

### Form Validation, Email & Security
- **Zod (`^4.5.4`)**: TypeScript-first schema declaration and data validation library.
- **Resend (`^6.25.0`)**: Developer-first email platform for reliable transactional message dispatch.

---

## Getting Started & Local Setup

Follow the steps below to run the portfolio locally on your machine.

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: Version `20.19.0` or later (LTS recommended)
- **npm**: Version `10.x` or later (comes bundled with Node.js)
- **Git**: Installed and configured

### 1. Clone the Repository

Clone the project repository to your local development environment:

```bash
git clone https://github.com/your-username/amrithajalajadevi-portfolio.git
cd amrithajalajadevi-portfolio
```

### 2. Install Dependencies

Install all required production and development dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory by copying the configuration below:

```bash
touch .env.local
```

Populate `.env.local` with the following environment variables:

```env
# -----------------------------------------------------------------------------
# Sanity CMS Configuration
# -----------------------------------------------------------------------------
NEXT_PUBLIC_SANITY_PROJECT_ID="your_sanity_project_id"
NEXT_PUBLIC_SANITY_DATASET="production"
NEXT_PUBLIC_SANITY_API_VERSION="2026-08-22"

# Optional: Sanity API Token (for server-side drafts or mutations)
# SANITY_API_READ_TOKEN="your_sanity_read_token"

# -----------------------------------------------------------------------------
# Resend Email Configuration (Contact Form)
# -----------------------------------------------------------------------------
RESEND_API_KEY="re_your_resend_api_key_here"

# -----------------------------------------------------------------------------
# General App Configuration
# -----------------------------------------------------------------------------
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

> **Note:**
> - `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` can be found in your [Sanity Management Dashboard](https://www.sanity.io/manage).
> - `RESEND_API_KEY` can be generated under the API Keys tab in your [Resend Console](https://resend.com).
> - Contact inquiry emails are dynamically routed to the artist's email configured in the Sanity Studio **Contact** singleton document.

### 4. Run the Development Server

Start the local Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the application.

- The portfolio frontend will be available at [http://localhost:3000](http://localhost:3000).
- The embedded Sanity Studio will be accessible at [http://localhost:3000/studio](http://localhost:3000/studio).

### 5. Code Quality & Build Verification

To verify linting rules and ensure all TypeScript types compile cleanly:

```bash
# Run ESLint validation
npm run lint

# Generate production build to verify bundling
npm run build
```

---

## Deployment

The application is architected for zero-configuration, production deployment on **Vercel** with seamless continuous integration via GitHub.

### Deploying via Vercel

1. **Push your code** to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: portfolio ready for deployment"
   git push origin main
   ```

2. **Import Project into Vercel**:
   - Navigate to [Vercel Dashboard](https://vercel.com/new).
   - Select and import the `amrithajalajadevi-portfolio` repository.

3. **Configure Environment Variables**:
   - In the Vercel project settings, navigate to **Environment Variables**.
   - Add all variables specified in your `.env.local` file:
     - `NEXT_PUBLIC_SANITY_PROJECT_ID`
     - `NEXT_PUBLIC_SANITY_DATASET`
     - `NEXT_PUBLIC_SANITY_API_VERSION`
     - `RESEND_API_KEY`
     - `NEXT_PUBLIC_SITE_URL` (set to your production domain, e.g., `https://amrithajalajadevi.com`)

4. **Deploy**:
   - Click **Deploy**. Vercel will automatically build the Next.js application, optimize assets, and deploy the site to a globally distributed edge CDN.
   - Any future commits pushed to the `main` branch will automatically trigger incremental preview and production builds.

5. **Sanity CORS Origins**:
   - In your [Sanity Management Dashboard](https://www.sanity.io/manage), navigate to **API Settings** > **CORS Origins**.
   - Add your production domain (e.g., `https://amrithajalajadevi.com`) and ensure credentials are enabled so the frontend and `/studio` route can authenticate and query the Sanity API securely.

---

## License

All visual artwork, figurative paintings, public mural documentation, and written biography displayed across this website are the copyrighted intellectual property of **Amrutha Jalaja Devi**. All rights reserved.
