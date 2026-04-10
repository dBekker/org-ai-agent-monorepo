# NCC Claude Code Guide

This repository already has a strong Next.js + Strapi + Prisma structure.  
Your job is to **preserve and clarify** that architecture, not to invent a new one during feature work.

## Read before acting

Always read:

- `AGENTS.md`
- `ai_docs/standards/00-project-overview.md`
- `ai_docs/standards/01-architecture-boundaries.md`
- `ai_docs/standards/04-quality-gates.md`

Read additional files by task type:

- Figma / visual implementation → `ai_docs/standards/02-figma-to-code.md`
- CMS / content work → `ai_docs/standards/03-content-data-and-forms.md`
- task selection → `ai_docs/standards/05-task-catalog.md`

## Default assumptions

- Framework: Next.js App Router
- Runtime: Docker-first
- Content owner: Strapi
- App-data owner: Prisma/Postgres
- Form automation: N8N integration
- Styling: Tailwind + existing CSS variables + existing UI primitives
- Product pattern: section-first page composition

## Project-specific rules

### Use the right owner for data
- Editorial content → Strapi
- Form submissions and operational records → Prisma
- Notifications / delivery → N8N, not as source of truth

### Prefer server-first implementation
- Server Components by default
- Server Actions for writes
- Client Components only when interaction or DOM APIs are required

### Reuse NCC architecture
Before building new code, inspect:

- `src/components/ui/*`
- `src/components/sections/*`
- `src/lib/strapi/*`
- `src/app/actions/*`

### Visual work is incomplete without QA
Check every UI task at:
- 375
- 768
- 1280
- 1536

### Do not spread architectural drift
Avoid:
- new ad hoc fetch layers
- client-side CMS fetching without reason
- duplicate service wrappers
- new hardcoded tokens when existing ones already cover the need

## Expected workflow

1. understand the route, section, and data owner
2. reuse existing primitives and patterns
3. implement the smallest viable diff
4. run lint/build or Docker equivalents
5. document meaningful architectural decisions in `ai_docs/develop/`

## Helpful project skills

- `.claude/skills/ncc-import-figma-surface/`
- `.claude/skills/ncc-add-strapi-driven-page/`
- `.claude/skills/ncc-add-prisma-form/`
- `.claude/skills/ncc-fix-responsive-regression/`
- `.claude/skills/ncc-audit-page-architecture/`
