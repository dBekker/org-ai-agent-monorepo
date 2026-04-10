# 10. Web stack standard — Next.js + Strapi + Prisma + Postgres + Docker

This stack is based on the strongest patterns observed in the uploaded Next.js / Strapi repos.
The target is an architecture-friendly monorepo that keeps CMS content, app-domain data, shared UI, and deployment concerns clearly separated.

## Target layout

```text
apps/
  web/
  cms/
packages/
  ui/
  types/
  config/
prisma/
docker/
docs/ai/
```

## Architecture defaults

### Frontend
- Next.js App Router
- Server Components by default
- client components only when browser APIs or interactive local state are truly required
- page composition in the app, reusable primitives in shared layers

### Content boundary
- Strapi owns editorial content
- Prisma owns app-domain data that should not be modeled as CMS content
- raw Strapi payloads should be mapped before they reach view components

### UI boundary
- shared UI belongs in `packages/ui`
- route-specific composition belongs in `apps/web`
- avoid creating a second design system inside page folders

### Data access boundary
- fetch and mapping logic belongs in dedicated clients or adapters
- do not spread integration details across random components
- sanitize and mapping must be explicit

## Default implementation flows

### Add a page
1. review shared UI and tokens
2. create or reuse layout primitives
3. build sections
4. assemble route
5. run responsive QA

### Add a CMS-driven section
1. define the content shape
2. create or update the Strapi model
3. define typed mapping into UI props
4. implement the section
5. verify editor ownership and fallback behavior

### Add app-domain data
1. update Prisma schema
2. add migration
3. update service or repository boundary
4. do not leak DB detail into UI

## Forbidden patterns

- inline styles as the fast path
- duplicated shared components inside `apps/web`
- mixing Strapi DTOs directly with view props
- page logic inside primitive UI components
- deeply nested client-only data fetching without reason
