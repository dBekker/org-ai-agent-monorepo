# Architecture decisions captured in v1

## 1. One shared source of truth
The durable rules live in `docs/ai/`.
Tool-specific files stay thin and mostly point back to those docs.

## 2. Separate three layers of customization
- entrypoint instructions (`AGENTS.md`, `CLAUDE.md`)
- tool-native wrappers (Cursor rules, Claude subagents, Codex config)
- task-specific skills

## 3. Web stack stays monorepo-shaped
The web template standardizes on:
- `apps/web`
- `apps/cms`
- `packages/ui`
- `packages/types`
- `packages/config`
- `prisma`
- `docker`

## 4. Mobile stack becomes bounded-context oriented
The mobile template standardizes on:
- `apps/mobile`
- `services/gateway`
- `services/recipes`
- `services/assistant`

This does not force one repo in production. It creates one target architecture that can be split across repos cleanly.

## 5. Pixel-perfect is an acceptance criterion
Figma import quality and responsive / adaptive checks are part of done criteria.

## 6. Brownfield first, then refactor
Existing projects should adopt the foundation package first, then standardize new modules, then refactor touched legacy areas.

## 7. Quality gates are part of the template
Verification is built into the standard instead of being left to personal habit.

## 8. Internal mobile brownfield overlay stays separate
Internal mobile brownfield guidance is maintained as a separate overlay instead of being folded into the greenfield Flutter + FastAPI template.
