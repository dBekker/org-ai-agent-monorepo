# NCC Task Catalog

Use this catalog to route repeatable work to the right workflow.

## 1. Import a page or section from Figma
Use skill:
- `ncc-import-figma-surface`

Typical files:
- `src/components/sections/*`
- `src/components/ui/*`
- `src/app/*`
- `src/app/globals.css` only if truly needed

## 2. Add or update a Strapi-driven section/page
Use skill:
- `ncc-add-strapi-driven-page`

Typical files:
- `strapi/src/api/*`
- `strapi/src/components/*`
- `src/lib/strapi/collections/*`
- `src/lib/strapi/transforms/*`
- `src/components/sections/*`
- `src/app/*`

## 3. Add or update a Prisma-backed form
Use skill:
- `ncc-add-prisma-form`

Typical files:
- `prisma/schema.prisma`
- `prisma/migrations/*`
- `src/app/actions/schemas.ts`
- `src/app/actions/forms.ts`
- `src/lib/forms/*`
- form section/component files

## 4. Fix responsive regression
Use skill:
- `ncc-fix-responsive-regression`

Typical files:
- section component
- related UI primitive
- route-level composition if structure is wrong
- styling tokens only when the current token set truly cannot express the design

## 5. Audit a route or section architecture
Use skill:
- `ncc-audit-page-architecture`

Typical outcomes:
- refactor proposal
- smallest safe cleanup plan
- explicit boundary notes
- follow-up tasks for later
