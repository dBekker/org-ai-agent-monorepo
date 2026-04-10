---
name: ncc-add-strapi-driven-page
description: Add or evolve an NCC content-driven section or page backed by Strapi, typed fetchers, and section composition.
---

# NCC Add Strapi-Driven Page

Use this skill when the feature belongs to editorial or CMS-managed content.

## Choose Strapi when
- editors need to manage it
- the content is page or marketing content
- it has media, SEO text, taxonomy, article-like or profile-like structure
- it is not an operational workflow record

## Workflow

### 1. Model the content
In `/strapi`:
- add or update content type under `strapi/src/api/*`
- add reusable component in `strapi/src/components/*` when appropriate
- avoid over-normalizing unless there is a proven reuse need

### 2. Define the app-facing contract
In the Next.js app:
- create or update fetcher in `src/lib/strapi/collections/*`
- add transform in `src/lib/strapi/transforms/*` if raw CMS shape is not view-ready
- export strong types instead of passing raw Strapi payloads deep into UI

### 3. Compose the UI
- use or create a section in `src/components/sections/*`
- keep route files as orchestration, not heavy rendering logic
- prefer Server Components and server-side fetching

### 4. Cache and media
- use existing fetch tags / revalidate approach
- keep media URLs using existing Strapi media helpers
- review whether revalidation endpoint behavior needs updating

### 5. Verification
Check:
- empty state
- missing image / missing optional fields
- slug behavior
- SEO metadata if relevant
- responsive behavior at `375 / 768 / 1280 / 1536`

## Anti-patterns
- storing editorial page content in Prisma
- pushing raw Strapi response objects through multiple section layers
- client-side fetching for a page that could be fully composed on the server
