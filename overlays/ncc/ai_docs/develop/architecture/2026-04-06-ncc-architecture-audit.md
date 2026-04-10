# NCC Architecture Audit — 2026-04-06

## Scope
Review of the uploaded NCC repository to define a project-specific agent overlay and engineering source of truth.

## High-confidence strengths

### 1. Clear runtime split
The repository already separates:
- root public app
- nested Strapi CMS
- shared Docker operations

This is a workable and understandable deployment shape for the current product.

### 2. Section-first frontend composition
The public app leans toward:
- route orchestration in `src/app/*`
- page blocks in `src/components/sections/*`
- reusable primitives in `src/components/ui/*`

That is a strong fit for content-heavy marketing and ratings surfaces.

### 3. Explicit Strapi client layer
`src/lib/strapi/*` is the correct place for:
- CMS querying
- typed collection access
- transforms
- media helpers

This is one of the repo’s best architecture decisions and should be reinforced.

### 4. App-owned forms are already separated from CMS content
Prisma models in `prisma/schema.prisma` are used for workflow-like records and submissions.  
That boundary is strong and worth codifying.

### 5. Operational docs are already rich
The repo already contains substantial environment, deployment, and Docker docs.  
The main missing piece was not operational documentation — it was **project-level agent standards**.

## Gaps and risks

### 1. Duplicate Prisma wrappers
The repo currently has both:
- `src/lib/prisma.ts`
- `src/lib/db.ts`

Both expose a Prisma client singleton pattern.  
This increases drift risk and should be consolidated over time.

### 2. Documentation conflict on runtime expectations
Some repo docs allow local host-based app execution, while current Cursor rules say the app should always run via Docker.  
The practical standard should be:
- Docker-compatible always
- Docker-first by default
- local host execution only as a convenience path, not as the only supported path

### 3. Weak typing shortcut in page orchestration
`src/app/page.tsx` uses a dynamic import with `as any` for one data source.  
This should not become a precedent for new work.

### 4. Minimal automated tests
The repo has effectively no meaningful automated app test baseline.  
This means:
- lint/build/manual QA are currently the real gates
- task summaries must explicitly state what was verified

### 5. Existing AI docs are task-history oriented, not standards-oriented
`ai_docs/develop/*` already exists and is useful, but there was no consolidated source of truth for:
- architecture boundaries
- Figma workflow
- quality gates
- repeatable task playbooks

## Decisions for the overlay

### Decision 1
Do not restructure NCC into a monorepo inside this effort.

### Decision 2
Use `ai_docs/standards/*` as the human and agent source of truth.

### Decision 3
Keep and augment the existing Cursor setup rather than replacing it.

### Decision 4
Add Claude Code and Codex layers that mirror the same source of truth.

### Decision 5
Standardize around these repeatable task types:
- Figma surface implementation
- Strapi-driven page work
- Prisma-backed form work
- responsive regression cleanup
- route/page architecture audit

## Recommended follow-up engineering tasks
- consolidate Prisma wrapper usage
- remove weakly typed dynamic data-loading shortcuts
- add a minimal automated test baseline
- reconcile old docs with the new Docker-first wording
