# NCC Architecture Boundaries

## Core rule
Use the correct owner for the correct concern.

## Ownership model

### Strapi owns editorial content
Examples:
- agencies
- tools
- schools
- articles
- podcasts
- experts
- client logos
- testimonials
- site settings
- reusable content components

Use Strapi when editors need to change the content and when the record is fundamentally part of the site’s published content model.

### Prisma owns app-data and operational workflows
Examples:
- newsletter subscriptions
- contact requests
- question requests
- contractor requests
- rating applications
- telegram channel applications

Use Prisma when the data is:
- app-owned
- workflow-like
- status-driven
- operational
- not editor-authored content

### N8N is integration, not the source of truth
Use N8N for:
- webhook delivery
- notifications
- downstream automation

Do not treat N8N as the primary persistence layer.

## Frontend composition rules

### Route files
Route files in `src/app/*` should:
- fetch data
- choose page metadata/layout
- compose sections

Route files should not become giant mixed rendering-and-business-logic files.

### Section components
`src/components/sections/*` should:
- represent meaningful page blocks
- stay focused
- accept shaped props, not raw CMS payloads when avoidable

### UI primitives
`src/components/ui/*` should:
- be reused first
- be extended carefully
- not be duplicated casually

## Server/client boundaries

### Prefer Server Components
Default to Server Components for:
- page assembly
- content rendering
- SEO-sensitive surfaces
- server-side data fetching

### Use Client Components only when necessary
Appropriate reasons:
- local interactive state
- browser APIs
- ResizeObserver / DOM measurement
- complex animation
- controlled form interactions

Do not mark a component client-side just because it is easier in the moment.

## Current repo-specific guidance

### Preserve single-repo shape
Keep:
- root app
- `/strapi`
- Docker runtime

Do not perform repo restructuring during regular feature work.

### Canonical Prisma wrapper
The repo currently contains:
- `src/lib/prisma.ts`
- `src/lib/db.ts`

Avoid introducing another wrapper.  
Long term, `src/lib/prisma.ts` should be the canonical import point.

### Strong typing over dynamic shortcuts
Avoid copying weak patterns such as dynamic imports with `as any`.  
When touching those areas, prefer introducing explicit exports and types.
