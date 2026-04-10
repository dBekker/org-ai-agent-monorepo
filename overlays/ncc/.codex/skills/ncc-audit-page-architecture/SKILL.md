---
name: ncc-audit-page-architecture
description: Audit an NCC page or route for section-first composition, server/client boundaries, data ownership, and maintainability.
---

# NCC Audit Page Architecture

Use this skill when a route feels too heavy, inconsistent, or mixed across concerns.

## Audit checklist

### Route composition
- Is the route mostly orchestration?
- Is data fetching centralized and typed?
- Are sections split into meaningful files?

### Data boundaries
- Is editorial content coming from Strapi?
- Is operational data coming from Prisma/server actions?
- Are raw payloads transformed before deep UI usage?

### Server/client boundaries
- Could this be a Server Component?
- Is a client boundary used only for genuine interactivity or DOM APIs?
- Is browser-only logic isolated?

### Reuse
- Does the page reuse existing UI primitives?
- Does it copy markup that should become a shared section or component?

### Risk markers
- `any` or weak typing copied forward
- duplicate wrappers or utilities
- route files becoming giant rendering components
- fragile responsive hacks
- undocumented architectural exceptions

## Output
Return:

1. strengths
2. concrete smells
3. smallest safe cleanup sequence
4. what should wait for a dedicated refactor
