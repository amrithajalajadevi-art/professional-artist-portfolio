# Developer Handover & Technical Architecture Guide

This document serves as the comprehensive technical handover guide for developers maintaining, extending, or redeploying the **Amrutha Jalaja Devi Artist Portfolio** web application.

---

## 1. Technology Stack Overview

The platform is engineered as a modern, high-performance web application pairing a headless content management layer with React Server Components (RSC) and Server Actions.

### Core Framework & Runtime
- **Next.js (`16.3.1`)**: App Router architecture utilizing React Server Components, Server Actions for mutations, dynamic routing, and ISR/SSR caching layers.
- **React (`19.2.8`) & React DOM (`19.2.8`)**: Concurrent React runtime featuring modern form hooks (`useActionState`) and edge-ready streaming.
- **TypeScript (`^5`)**: Strict type definitions, explicit interfaces for GROQ responses, component props, and server actions.

### Content Management & Media Pipeline
- **Sanity (`^5.31.2`)**: Headless CMS engine hosting structured schemas for artworks, exhibitions, public art, press, services, and biographical singletons.
- **next-sanity (`^13.3.3`)**: Next.js client integration providing GROQ querying capabilities, CDN cache toggling, and studio embedding.
- **Embedded Studio (`/studio`)**: Embedded Sanity Studio mounted directly within the Next.js routing tree at `/studio/[[...tool]]`.
- **@sanity/image-url (`^2.1.1`)**: Algorithmic URL builder translating Sanity Studio crop rectangles (`rect=x,y,w,h`) and hotspot focal vectors into optimized CDN asset URLs with Low-Quality Image Placeholders (LQIP).
- **@sanity/vision (`^5.31.2`)**: In-studio GROQ query debugging interface.

### Styling, UI & Motion
- **Tailwind CSS (`^4`) & @tailwindcss/postcss (`^4`)**: Modern CSS framework utilizing CSS variables for fine-art palette styling.
- **Framer Motion (`^13.1.0`)**: Smooth animations, layout transitions, modal enter/exit states, and staggered list reveals.
- **Lucide React (`^1.31.0`)**: Lightweight iconography for navigation, social links, and interactive controls.
- **styled-components (`^6.5.3`)**: CSS-in-JS dependency utilized by embedded Sanity Studio components.

### Security, Validation & Transactional Dispatch
- **Zod (`^4.5.4`)**: Schema declaration and runtime validation for form payloads.
- **Resend SDK (`^6.25.0`)**: API dispatch layer for transactional emails generated via contact form submissions.

---

## 2. Environment Variables Configuration

The application requires specific environment variables configured across local development, Vercel preview environments, and Vercel production deployments.

### Required Environment Variables

| Variable | Scope | Description | Example / Typical Value |
| :--- | :--- | :--- | :--- |
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Client & Server | The unique ID of the Sanity project. | `abc89de0` |
| `NEXT_PUBLIC_SANITY_DATASET` | Client & Server | Target Sanity dataset environment. | `production` |
| `NEXT_PUBLIC_SANITY_API_VERSION` | Client & Server | Sanity GROQ API date version. | `2026-08-22` |
| `RESEND_API_KEY` | Server-only | API Key for authenticating with Resend. | `re_xxxxxxxxxxxxxxxxxxxxxxxxx` |
| `NEXT_PUBLIC_SITE_URL` | Client & Server | Canonical public domain used for SEO & metadata. | `https://amrithajalajadevi.com` |
| `NEXT_PUBLIC_SANITY_STUDIO_DISABLE_VERSION_CHECK` | Studio | Suppresses version upgrade banners in Studio. | `true` |

### Optional / Advanced Variables

| Variable | Scope | Description |
| :--- | :--- | :--- |
| `SANITY_API_READ_TOKEN` | Server-only | Required only if querying unpublished drafts or private datasets outside preview mode. |
| `SANITY_REVALIDATE_SECRET` | Server-only | Shared secret used to verify HMAC signatures on incoming Sanity on-demand revalidation webhooks. |
| `RESEND_FROM_EMAIL` | Server-only | Optional override for the verified sending identity (defaults to `Contact Form <hello@amrithajalajadevi.com>`). |

> **Architecture Note on Recipient Email:**
> In previous versions, `CONTACT_EMAIL` was read from `.env`. This has been completely deprecated in favor of **dynamic fetching directly from Sanity**. The contact form recipient email is managed live inside the Sanity Studio **Contact Page & Studio Info** document. No environment variable updates or rebuilds are needed when the artist updates their contact address.

---

## 3. Server Actions & Backend Data Flow

The project avoids legacy API route handlers for data mutations, favoring Next.js Server Actions executed over secure RPC channels.

### 3.1 Contact Form & Email Dispatch (`actions/sendEmail.ts`)

The inquiry workflow is handled by the `sendEmail` Server Action:

```
[User submits ContactForm]
           │
           ▼
[1. Honeypot Anti-Spam Check] ──(Bot Detected)──> [Return Mock Success (Silent Drop)]
           │
           ▼ (Legitimate User)
[2. Zod Schema Validation & HTML Sanitization] ──(Failed)──> [Return Validation Error]
           │
           ▼ (Valid Data)
[3. Dynamic Sanity Recipient Query]
   - Executes `CONTACT_PAGE_QUERY` via `client.fetch` with `{ cache: "no-store" }`
   - Targets `*[_type == "contact"][0].email`
   - Fallback lookup: `*[_type == "contact" && defined(email)][0].email`
           │
           ▼ (Resolved Recipient)
[4. Resend Transactional Dispatch]
   - `from`: Verified domain sender (`hello@amrithajalajadevi.com`)
   - `to`: Dynamic artist email retrieved from Sanity
   - `replyTo`: Form submitter formatted as `Name <email>`
   - `html`: Styled gallery receipt containing sanitized inquiry details
           │
           ▼
[5. Return FormState { success, message } to useActionState hook]
```

#### Key Implementation Details:
- **Honeypot Protection**: An invisible field named `website_url_bot_check` traps automated spam scripts. If filled, the action returns a fake success message without invoking Resend or Sanity.
- **Sanity Cache Bypass**: The email fetch specifies `{ cache: "no-store" }` ensuring instantaneous propagation whenever the artist alters their contact email in Sanity Studio.
- **Reply-To Integrity**: When the artist clicks "Reply" in their email client, the client responds directly to the visitor's submitted email address rather than the automated system address.

### 3.2 Paginated Data Retrieval (`actions/fetchPaginatedData.ts`)

To optimize initial page load and minimize payload size, gallery grids utilize server actions for on-demand batch loading:
- **`fetchMoreArtworks(start, limit)`**: Executes a slice-based GROQ query `*[_type == "artwork"] | order(year desc) [$start...$end]`. Maps raw Sanity image references, dimensions, LQIP, and category metadata.
- **`fetchMorePublicArt(start, limit)`**: Queries paginated public mural commissions with client-side batching.

### 3.3 Dynamic Sitemap Generation (`app/sitemap.ts`)

Generates an XML sitemap at build and request time by dynamically querying published artworks, public art projects, and exhibitions from Sanity alongside static marketing routes.

---

## 4. Sanity Studio Integration & Singleton Architecture

The Studio is mounted at `/studio` via `next.config.ts` and `sanity.config.ts`.

### Document Architecture
The CMS separates documents into two operational classes defined in `sanity/structure.ts`:

1. **Singleton Documents** (Restricted from duplication, deletion, or unpublishing):
   - **Home Page** (`homePage`): Hero configurations, featured artwork selections, exhibition teasers.
   - **About Page** (`about`): Artist bio, artist statement, philosophy statements, portrait asset.
   - **Full Curriculum Vitae** (`cv`): Structured lists of education, awards, solo exhibitions, group exhibitions, collections, and downloadable PDF asset.
   - **Contact Page & Studio Info** (`contact`): Studio geographic location, social URLs, profile image, and the **official inquiry recipient email**.
   - **Commissions** (`commissionPage`): Process steps, commissioning guidelines, hero image.
   - **Workshops** (`workshopPage`): Education and workshop offering records.

2. **Collection / Archival Documents**:
   - **Artworks** (`artwork`): Individual paintings and drawings with category taxonomy, year, medium, dimensions, and high-res photography.
   - **Public Art & Murals** (`publicArt`): Architectural murals, commissioning body credentials, location tags, and impact stats.
   - **Exhibitions** (`exhibition`): Curated exhibition chronology (Solo vs. Group, Upcoming vs. Past, venue metadata).
   - **Press & Publications** (`press`): Media coverage, critical essays, interview links, and press clips.
   - **Printmaking** (`printmaking`): Editioned etchings, woodcuts, and lithographs.

### Image Hotspot & Crop Algorithm
Images stored in Sanity utilize coordinate metadata (`crop` { top, bottom, left, right } and `hotspot` { x, y, height, width }). The frontend component `CustomImage` uses `@sanity/image-url` to translate these vectors into explicit CDN URLs:
- Preserves artist-specified focal centers regardless of whether viewing on a mobile vertical display or an ultra-wide desktop.
- Automatically calculates and injects Low-Quality Image Placeholders (`lqip`) into Next.js image blur handlers.

---

## 5. Vercel Deployment Workflows

The web application is configured for deployment on the **Vercel Edge Network**.

### 5.1 Deployment Steps via Vercel Dashboard

1. **Import Git Repository**:
   - Connect the GitHub repository `amrithajalajadevi-art/professional-artist-portfolio` to Vercel.
   - Framework Preset: **Next.js** (Vercel automatically detects App Router and build settings).
   - Root Directory: `./`

2. **Configure Build & Development Settings**:
   - Build Command: `next build` (or leave default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install`
   - Node.js Version: **20.x** or **22.x**

3. **Populate Production Environment Variables**:
   Add the following under **Project Settings** > **Environment Variables**:
   ```ini
   NEXT_PUBLIC_SANITY_PROJECT_ID="abc89de0"
   NEXT_PUBLIC_SANITY_DATASET="production"
   NEXT_PUBLIC_SANITY_API_VERSION="2026-08-22"
   NEXT_PUBLIC_SANITY_STUDIO_DISABLE_VERSION_CHECK="true"
   NEXT_PUBLIC_SITE_URL="https://amrithajalajadevi.com"
   RESEND_API_KEY="re_your_production_resend_key"
   ```

4. **Domain & DNS Configuration**:
   - Add production custom domains:
     - `amrithajalajadevi.com` (Apex domain: A record pointing to `76.76.21.21`)
     - `www.amrithajalajadevi.com` (CNAME record pointing to `cname.vercel-dns.com`)
   - Vercel automatically provisions and renews Let's Encrypt SSL certificates.

### 5.2 Sanity CORS & Studio Access Configuration

For the embedded `/studio` route to communicate with the Sanity Content Lake, authorized origins must be registered:

1. Navigate to the [Sanity Management Console](https://www.sanity.io/manage) and select project `abc89de0`.
2. Go to **API Settings** > **CORS Origins**.
3. Add the following entries with **Allow Credentials** enabled (`credentials: true`):
   - `http://localhost:3000` (Local testing)
   - `https://amrithajalajadevi.com` (Production domain)
   - `https://www.amrithajalajadevi.com` (Production domain)
   - `https://*.vercel.app` (Preview deployment branches)

### 5.3 Resend Domain Verification

For transactional emails to deliver with 100% inbox placement and avoid spam filters:
1. In the [Resend Console](https://resend.com/domains), verify the domain `amrithajalajadevi.com`.
2. Configure the provided DNS records at your DNS host:
   - **DKIM** (TXT / CNAME)
   - **SPF** (TXT: `v=spf1 include:resend.com ~all`)
   - **DMARC** (TXT: `v=DMARC1; p=none;`)
3. The verified sender address `Contact Form <hello@amrithajalajadevi.com>` will dispatch without throttling or suspension.

---

## 6. Webhook Architecture & On-Demand Revalidation

To combine static site performance with instant editorial updates, the system supports on-demand cache revalidation via Sanity webhooks.

### 6.1 Creating the Sanity Revalidation Webhook

1. Log in to [Sanity Management](https://www.sanity.io/manage) > Project `abc89de0` > **API** > **Webhooks**.
2. Click **Create Webhook**:
   - **Name**: `Vercel On-Demand Revalidation`
   - **URL**: `https://amrithajalajadevi.com/api/revalidate`
   - **Dataset**: `production`
   - **Trigger on**: `Create`, `Update`, `Delete`
   - **Filter**: `_type in ["artwork", "exhibition", "publicArt", "press", "contact", "about", "cv", "homePage", "commissionPage", "workshopPage"]`
   - **Projection**:
     ```groq
     {
       "_type": _type,
       "slug": slug.current,
       "_id": _id
     }
     ```
   - **Status**: `Enabled`
   - **HTTP method**: `POST`
   - **HTTP Headers**: Add custom secret token or use Sanity's signature system.
   - **Secret**: Generate a high-entropy string (e.g., `openssl rand -hex 32`) and save it as `SANITY_REVALIDATE_SECRET` in Vercel.

### 6.2 Recommended Route Handler (`app/api/revalidate/route.ts`)

If implementing on-demand ISR, use the following pattern:

```typescript
import { revalidatePath, revalidateTag } from 'next/cache';
import { type NextRequest, NextResponse } from 'next/server';
import { parseBody } from 'next-sanity/webhook';

export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{
      _type: string;
      slug?: string;
      _id: string;
    }>(req, process.env.SANITY_REVALIDATE_SECRET);

    if (!isValidSignature) {
      return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    if (!body?._type) {
      return NextResponse.json({ message: 'Bad request: missing _type' }, { status: 400 });
    }

    // Revalidate paths based on document type
    switch (body._type) {
      case 'homePage':
      case 'artwork':
        revalidatePath('/');
        revalidatePath('/work');
        if (body.slug) revalidatePath(`/work/${body.slug}`);
        break;
      case 'exhibition':
        revalidatePath('/exhibitions');
        if (body.slug) revalidatePath(`/exhibitions/${body.slug}`);
        break;
      case 'publicArt':
        revalidatePath('/public-art');
        break;
      case 'about':
        revalidatePath('/about');
        break;
      case 'cv':
        revalidatePath('/cv');
        break;
      case 'contact':
        revalidatePath('/contact');
        break;
      case 'commissionPage':
        revalidatePath('/commissions');
        break;
      case 'workshopPage':
        revalidatePath('/workshops');
        break;
      case 'press':
        revalidatePath('/press');
        break;
      default:
        revalidatePath('/', 'layout');
        break;
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (err: any) {
    console.error('Webhook error:', err);
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}
```

### 6.3 Resend Delivery Webhooks (Optional Monitoring)

To monitor delivery rates, bounces, or spam reports:
1. In the Resend Console, navigate to **Webhooks** > **Add Webhook**.
2. Set Endpoint URL to `https://amrithajalajadevi.com/api/webhooks/resend`.
3. Subscribe to events: `email.sent`, `email.delivered`, `email.bounced`, `email.complained`.

---

## 7. Developer Maintenance & Common Troubleshooting

### Updating the Inquiry Recipient Email
1. Navigate to `https://amrithajalajadevi.com/studio` and authenticate.
2. Select **Contact Page & Studio Info** from the desk navigation list.
3. Update the **Email Address** field and click **Publish**.
4. All future submissions through the website contact form will immediately deliver to the new email address.

### Resolving Resend "Domain not verified" Errors
- Ensure the sender address in `actions/sendEmail.ts` strictly matches a domain verified inside your Resend dashboard.
- Default verified sender: `"Contact Form <hello@amrithajalajadevi.com>"`.
- Do not set the `from` field to arbitrary personal addresses (such as `@gmail.com` or `@outlook.com`), as modern DMARC policies will reject them.

### Resolving Sanity CORS Errors in Local Development
- If local studio fails to authenticate or fetch data with an error mentioning `Origin http://localhost:3000 is not allowed`, verify that `http://localhost:3000` is listed under CORS Origins in your Sanity project settings with credentials enabled.

### Updating Sanity Schemas
- Schemas are modularly declared in `sanity/schemaTypes/`.
- When adding a new field to an existing schema, ensure any centralized GROQ queries in `sanity/lib/queries.ts` are updated with the corresponding field projection and TypeScript interfaces in `types/` or `sanity/lib/queries.ts`.
- Singleton documents must always retain their assigned `documentId` inside `sanity/structure.ts`.
