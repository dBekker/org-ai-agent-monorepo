# CLAUDE.md

Start every session with the repository standard.

## Read first
- `docs/ai/00-core-engineering.md`
- `docs/ai/30-quality-gates.md`
- `docs/ai/10-web-stack-nextjs-strapi-prisma.md`
- `docs/ai/20-mobile-backend-fastapi-ai.md`
- `docs/ai/01-figma-to-code.md  # when task touches UI`
- `docs/ai/40-brownfield-adoption.md  # when task touches legacy code or migration`
- `docs/ai/50-task-catalog.md`

## Default behavior
- plan first for non-trivial work
- preserve architecture boundaries
- reuse shared abstractions
- prefer small safe changes over wide rewrites
- verify changed behavior, not only edited files

## Special attention areas
- schema and contract changes
- responsive / adaptive UI
- assistant or provider behavior
- Docker, env, and rollout details

Keep this file short. The detailed rules live in `docs/ai/` and skills.
