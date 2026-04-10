# NCC Data Boundaries Rule

## Ownership

- Strapi → editorial content
- Prisma → operational records and form submissions
- N8N → outbound automation only
- Next.js server layer → orchestration

## Implementation expectations

- Strapi reads go through `src/lib/strapi/*`
- Prisma writes go through server actions and zod validation
- Avoid client-side CMS fetches when the page can be server-rendered
- Do not pass raw Strapi payloads deep into UI without shaping them first
