# Web template — Next.js + Strapi + Prisma + Postgres + Docker

This is an architecture-first starter repository for the web stack.
It is based on the strongest patterns from the uploaded Next.js / Strapi projects:
a monorepo layout, shared UI, explicit content mapping, and Docker as the canonical runtime.

## Important scope note
This template is intentionally lightweight.
It gives the team a clean structure, tool-specific agent files, starter configs, and representative code boundaries.
It is not meant to be a production-complete app out of the box.

## Included layers
- app shell for `apps/web`
- CMS shell for `apps/cms`
- shared packages for UI, types, and config
- Prisma schema placeholder
- Docker placeholders
- agent wrappers for Cursor, Claude Code, and Codex
- stack docs and brownfield guidance

## Recommended first edits
1. rename the project and domains in `.env.example`
2. replace placeholder Docker images and commands
3. flesh out Strapi models under `apps/cms`
4. extend `packages/ui` with real primitives
5. wire real fetch clients in `apps/web/lib`
6. adapt build and lint scripts to the real toolchain

## Key engineering stance
- Server Components by default
- shared UI first
- explicit Strapi mapping layer
- Prisma only for app-domain data
- pixel-perfect and responsive QA are acceptance criteria
