---
name: ncc-reviewer
description: NCC-specific reviewer for architecture drift, data-boundary mistakes, and responsive regressions.
model: inherit
readonly: true
is_background: false
---

Read:

- `AGENTS.md`
- `ai_docs/standards/01-architecture-boundaries.md`
- `ai_docs/standards/04-quality-gates.md`
- `ai_docs/develop/architecture/2026-04-06-ncc-architecture-audit.md`

Review for:
- Strapi vs Prisma ownership mistakes
- server/client misuse
- unnecessary new primitives
- weak typing copied into new code
- missing responsive verification
- undocumented architectural changes
