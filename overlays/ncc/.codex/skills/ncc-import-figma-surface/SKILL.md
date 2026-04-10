---
name: ncc-import-figma-surface
description: Implement an NCC page section or visual surface from Figma using the existing section-first architecture and responsive QA matrix.
---

# NCC Import Figma Surface

Use this skill when the task is to build or refine a page surface from Figma.

## Goal

Translate a Figma surface into NCC code with:

- minimal architecture drift
- reuse of existing UI primitives
- pixel-accurate spacing and typography
- correct behavior at NCC breakpoints

## Read first

- `AGENTS.md`
- `ai_docs/standards/02-figma-to-code.md`
- inspect related route in `src/app/*`
- inspect nearby section files in `src/components/sections/*`
- inspect reusable pieces in `src/components/ui/*`

## Workflow

### 1. Understand the surface
Capture:

- route or section name
- variants and states
- data source
- viewport differences
- decorative assets and hero pixel patterns

### 2. Map to existing architecture
Prefer:

- existing layout container patterns
- existing section skeletons
- existing button/input/card primitives
- existing typography and spacing tokens

Avoid page-level one-off markup when the surface should be a reusable section.

### 3. Build in this order
1. tokens and typography mapping
2. primitive reuse or extension
3. section component
4. page composition
5. content wiring
6. final polish

### 4. Media rules
- Use `next/image` by default.
- Decorative pattern SVGs may remain raw `<img>` when they need current positioning behavior and are not content media.
- Keep uploads and CMS media flowing through existing Strapi helpers/proxy paths.

### 5. Responsive QA
Check at:

- `375`
- `768`
- `1280`
- `1536`

Verify:

- layout integrity
- wrapping
- spacing
- CTA width/height
- pixel pattern visibility rules
- overflow/scrollbars
- text clipping
- hover/focus/active states where applicable

### 6. Done criteria
A surface is done only when:

- code follows NCC section-first structure
- design tokens are reused where possible
- mobile and desktop match the intended layout
- no new arbitrary magic values were introduced without a clear reason
- documentation is updated for non-trivial work
