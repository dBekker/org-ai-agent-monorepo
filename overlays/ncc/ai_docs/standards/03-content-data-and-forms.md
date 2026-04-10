# NCC Content, Data, and Forms Standard

## Strapi-driven content flow

### When to use Strapi
Use Strapi for:
- editorial pages and sections
- taxonomy and profile content
- site settings
- reusable content blocks
- SEO and narrative content

### App-side Strapi access
App code should access Strapi through:
- `src/lib/strapi/client.ts`
- `src/lib/strapi/collections/*`
- `src/lib/strapi/transforms/*`

Prefer:
- typed collection functions
- transformed app-facing shapes
- server-side fetching

Avoid:
- fetching raw CMS payloads directly inside deeply nested UI components
- scattering endpoint strings across the app

## Prisma-driven form flow

### When to use Prisma
Use Prisma for:
- submissions
- operational records
- status-based workflows
- app-owned entities

### Required app flow
For a new form or operational entity:
1. update `prisma/schema.prisma`
2. create migration deliberately
3. update zod schema in `src/app/actions/schemas.ts`
4. update server action in `src/app/actions/forms.ts`
5. update form service/channel integration if needed
6. update UI state handling

## N8N integration
N8N is used as a delivery/integration channel.

Rules:
- DB persistence first when the record is app-owned
- webhook payload shape must be explicit
- env expectations belong in docs and examples
- failures should degrade visibly and predictably

## Cache and revalidation
Any content task should consider:
- fetch cache tags
- route freshness
- revalidation triggers
- media proxy behavior for uploads

## Decision checklist

### Choose Strapi if
- editors need to manage it
- it is page/content information
- it belongs in the published knowledge/content layer

### Choose Prisma if
- it is operational
- it needs workflow status
- it is submission data
- it should not be editor-owned

### Choose both if
- editorial content references a workflow outcome, but the underlying workflow records remain operational
