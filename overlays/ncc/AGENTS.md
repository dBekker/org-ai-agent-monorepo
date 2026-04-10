# NCC Agent Guide

This repository is the **Nocode Circle (NCC)** product codebase.

It is a **single repository with two runtime surfaces**:

1. **Next.js 16 app at the repository root** — public website, ratings, blog, forms, API routes, media proxy, revalidation.
2. **Strapi 5 app in `/strapi`** — editorial CMS, content models, uploads, admin workflows.

There is also a **Prisma/Postgres app-data layer** for form submissions and operational records that should **not** be moved into Strapi unless the data is editorial by nature.

## Read this first

Before making non-trivial changes, read:

- `ai_docs/standards/00-project-overview.md`
- `ai_docs/standards/01-architecture-boundaries.md`
- `ai_docs/standards/02-figma-to-code.md`
- `ai_docs/standards/03-content-data-and-forms.md`
- `ai_docs/standards/04-quality-gates.md`
- `ai_docs/standards/05-task-catalog.md`

If the task is architectural, also read:

- `ai_docs/develop/architecture/2026-04-06-ncc-architecture-audit.md`

## Product and architecture summary

NCC is a content-heavy product for ratings, reviews, and industry content around no-code agencies, tools, and schools.

### Main bounded contexts

- **Editorial content**  
  Owned by Strapi. Examples: articles, agencies, tools, schools, experts, client logos, testimonials, SEO text, site settings.

- **Public website rendering**  
  Owned by Next.js. Pages assemble sections and fetch typed content via `src/lib/strapi/*`.

- **Operational submissions and forms**  
  Owned by Prisma/Postgres in `prisma/schema.prisma`. Examples: newsletter subscriptions, contact requests, contractor requests, rating applications, channel applications, question requests.

- **Automations / outbound delivery**  
  N8N webhook flow for forms. This is an integration boundary, not the source of truth.

## Repository map

### Public app
- `src/app/*` — App Router routes, layouts, route handlers, server actions
- `src/components/layout/*` — header, footer, global layout elements
- `src/components/sections/*` — section-level page building blocks
- `src/components/ui/*` — reusable primitives and UI pieces
- `src/lib/strapi/*` — CMS client, typed collection fetchers, transforms
- `src/lib/forms/*` — form channel abstraction and N8N integration
- `src/app/actions/*` — server actions and validation entrypoints
- `src/types/*` — shared app typing

### App data
- `prisma/schema.prisma` — Prisma models for app-owned data
- `prisma/migrations/*` — migration history

### CMS
- `strapi/src/api/*` — content type APIs
- `strapi/src/components/*` — reusable Strapi components
- `strapi/config/*` — CMS runtime config

### Operations
- `docker-compose*.yml`
- `Dockerfile*`
- `docs/*`
- `scripts/*`

## Non-negotiable rules

### 1. Preserve the current deployment shape
Do **not** turn NCC into a monorepo as part of a feature task.  
Current baseline is intentional:

- root app = Next.js
- `/strapi` = CMS
- shared Postgres = app DB + Strapi DBs

Large repo-structure changes require a separate migration plan.

### 2. Respect ownership boundaries
Use the correct storage owner:

- **Strapi** for editorial/content-managed entities and media-backed blocks.
- **Prisma** for app-owned operational data, submissions, and workflow records.
- **N8N** for delivery/notification automation only.
- **Next.js server code** for orchestration and presentation composition.

### 3. Prefer server-first Next.js patterns
Default choice:

- Server Components first
- Server-side Strapi fetchers
- Server Actions for writes
- Client Components only for:
  - interactivity
  - browser APIs
  - viewport measurement
  - animated widgets
  - forms with local state

### 4. Reuse section architecture
NCC already follows a **section-first** page composition style.  
Do not collapse everything into giant route files.  
Typical flow:

- route/page
- typed data fetch
- section composition
- UI primitives

### 5. Docker is the canonical runtime
Treat Docker Compose as the default runtime for reproducible work.  
Local host-only execution can exist for convenience, but changes must remain Docker-compatible.

### 6. Pixel-perfect is part of done
A visual task is not complete until it has been checked across the NCC viewport matrix:

- `375` mobile
- `768` tablet
- `1280` desktop
- `1536` large desktop

### 7. Update docs on non-trivial work
For multi-file or architectural changes, update `ai_docs/develop/` with at least:

- plan note or implementation note
- architecture note when boundaries or patterns changed
- report when the task involved notable refactor or risk

## NCC-specific implementation rules

### Figma → code
Follow this order:

1. understand surface and states
2. map tokens to existing CSS variables / typography / spacing
3. reuse `src/components/ui/*` first
4. build or refine section component
5. compose page
6. wire content or app data
7. run responsive QA and polish

Do **not** start from arbitrary page-level hardcoding if the same pattern already exists in a section or UI primitive.

### Strapi integration
When adding or changing content-driven functionality:

1. change Strapi model/component definition
2. update typed fetcher in `src/lib/strapi/collections/*`
3. add transform if raw CMS payload is not view-ready
4. update section/page composition
5. review cache/revalidate impact

### Prisma forms
When adding or changing a persisted form:

1. update `prisma/schema.prisma`
2. create migration
3. update server-side validation schema in `src/app/actions/schemas.ts`
4. update server action
5. update form UI + states
6. update N8N payload mapping if required

### Media
Use `next/image` by default.  
Exception: purely decorative, full-bleed pattern SVGs where current layout technique requires raw `<img>` and the image is not content media.

## Known repo-specific cleanup items

These are important, but not every feature task should fix them immediately:

- Duplicate Prisma client wrappers exist in:
  - `src/lib/prisma.ts`
  - `src/lib/db.ts`
  Prefer `src/lib/prisma.ts` as the future canonical entrypoint and avoid creating a third variant.
- `src/app/page.tsx` contains a dynamic import with weak typing (`as any`) for tool development types. Avoid copying that pattern.
- Automated tests are effectively absent right now. Quality relies on lint/build/manual QA, so be explicit about what you verified.
- Existing docs conflict on “Docker-only” vs “local app outside Docker allowed”. Prefer Docker compatibility and avoid introducing workflows that only work outside containers.

## Recommended commands

### Safe default checks
```bash
pnpm lint
pnpm build
pnpm check:env
docker compose ps
docker compose logs -f app
docker compose exec app pnpm lint
docker compose exec app pnpm build
docker compose exec app pnpm db:generate
```

### Risky operations — require deliberate review
```bash
pnpm db:migrate
pnpm db:push
docker compose down -v
manual edits to production or staging deploy scripts
Strapi schema changes that require content migration
```

## Task routing

Use the matching project skill when relevant:

- Import Figma surface → `.cursor/skills/ncc-import-figma-surface/`, `.claude/skills/ncc-import-figma-surface/`, `.codex/skills/ncc-import-figma-surface/`
- Add Strapi-driven section/page → `ncc-add-strapi-driven-page`
- Add Prisma-backed form or submission flow → `ncc-add-prisma-form`
- Fix responsive regression → `ncc-fix-responsive-regression`
- Audit a page or route architecture → `ncc-audit-page-architecture`

## What to avoid

- Mixing raw Strapi response shapes directly into large UI components
- Putting app-owned operational data into Strapi just because it has an admin UI
- Adding new global CSS or one-off hardcoded values before checking existing tokens
- Creating new UI primitives when a variant of an existing one is enough
- Introducing client-side CMS fetching where server-side composition already fits
- Silent architectural drift without documentation

## Expected delivery shape

For most non-trivial tasks, provide:

1. changed files
2. architecture summary
3. responsive/content/test checks performed
4. remaining risks or follow-ups
