# NCC Core Rule

Read `AGENTS.md` before non-trivial work.

Use `ai_docs/standards/*` as the source of truth for project-specific engineering rules.

## Default operating mode

- Preserve the current single-repo structure
- Use Docker-compatible workflows
- Prefer Server Components
- Use section-first page composition
- Keep Strapi and Prisma ownership boundaries clean
- Update docs for non-trivial changes

## Do not

- invent a new architecture inside a feature task
- move operational submissions into Strapi
- add new hardcoded tokens before checking existing CSS variables
- create duplicate service wrappers without a strong reason
