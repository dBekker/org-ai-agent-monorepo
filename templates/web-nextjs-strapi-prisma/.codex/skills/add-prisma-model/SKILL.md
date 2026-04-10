---
name: add-prisma-model
description: Use when adding or changing app-domain data owned by Prisma and Postgres.
---

# Skill: add-prisma-model

Read:
- `docs/ai/10-web-stack-nextjs-strapi-prisma.md`
- `docs/ai/60-migration-notes-template.md`

Workflow:
1. update `prisma/schema.prisma`
2. add migration
3. update the service or repository boundary
4. keep DB detail away from UI
5. leave migration notes if rollout changes
