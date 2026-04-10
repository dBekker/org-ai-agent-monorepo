# NCC Agent Overlay Adoption Plan

## Goal
Adopt a project-specific agent standard for NCC without disrupting the current repo structure or existing Cursor setup.

## What this overlay adds
- `AGENTS.md`
- `CLAUDE.md`
- `.claude/*`
- `.codex/*`
- new `.cursor/rules/*`
- new project-specific skills for Cursor / Claude / Codex
- `ai_docs/standards/*`
- repo audit note

## Merge strategy

### Phase 1 — Additive merge
Copy these files into the repo without removing current agent setup.

Why:
- current Cursor setup is already useful
- overlay is designed to **add source-of-truth standards**, not replace current orchestration

### Phase 2 — Team alignment
Have the team adopt:
- Strapi vs Prisma ownership rule
- Figma → code flow
- viewport QA matrix
- docs update expectation for non-trivial work

### Phase 3 — Optional cleanup tasks
Create separate engineering tasks for:
- consolidating Prisma wrapper imports
- reducing weak typing in page orchestration
- adding a minimal automated test baseline
- reconciling docs that conflict on Docker-only vs local-host workflows

## Recommended first practical use cases
1. a new Figma section
2. a Strapi-driven page improvement
3. a form workflow enhancement
4. a responsive regression fix
5. one page architecture audit

## Success criteria
The overlay is working when:
- multiple agents produce more consistent architectural choices
- fewer tasks blur Strapi and Prisma responsibilities
- responsive QA becomes routine
- docs in `ai_docs/` become a real shared memory layer
