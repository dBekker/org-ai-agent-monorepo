---
name: ncc-add-prisma-form
description: Add or update an NCC Prisma-backed form flow, validation, persistence, and N8N delivery without blurring app-data boundaries.
---

# NCC Add Prisma Form

Use this skill for forms and operational records owned by the app database.

## Choose Prisma when
- the record is a submission or workflow item
- it needs internal status tracking
- it is application-owned rather than editorial
- it should exist even if CMS content changes

## Workflow

### 1. Update schema
- edit `prisma/schema.prisma`
- keep column names snake_cased via `@map` where consistent with existing schema
- include status and timestamps when the record is workflow-like

### 2. Create migration deliberately
Preferred path:
- create migration, review it, then apply
- avoid normalizing on `db:push` as a default workflow

### 3. Update validation and action layer
- update `src/app/actions/schemas.ts`
- update or add server action in `src/app/actions/forms.ts`
- return typed success/error shape consistent with current action patterns

### 4. Update integration layer
If N8N delivery is needed:
- update `src/lib/forms/types.ts`
- update `src/lib/forms/service.ts`
- update or add channel mapping under `src/lib/forms/channels/*`

### 5. Update UI
- keep validation states explicit
- loading / success / error must be visible
- ensure form still works in Docker-first runtime

### 6. Verification
Check:
- zod validation
- DB persistence
- duplicate handling if needed
- webhook payload shape if integrated
- toast or UI feedback
- responsive behavior

## Anti-patterns
- putting app-owned submissions into Strapi
- bypassing zod validation
- using `db:push` as the default production-minded workflow
