# NCC Quality Gates Rule

Every meaningful task should state what was verified.

## Minimum gates
- `pnpm lint` or Docker equivalent
- `pnpm build` or Docker equivalent for significant UI/data work
- responsive QA at `375 / 768 / 1280 / 1536`
- content/empty/error states when relevant

## Repository reality
Automated tests are minimal or absent, so manual verification must be explicit.

## For architecture changes
Also update:
- `ai_docs/develop/architecture/*` if boundaries or patterns changed
- implementation note or report in `ai_docs/develop/*` when the task is non-trivial
