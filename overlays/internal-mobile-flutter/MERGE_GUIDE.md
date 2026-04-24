# Merge Guide for Internal Mobile Flutter Overlay

## What this package is

This directory is an additive overlay for existing Flutter or mobile repositories.

It intentionally:
- adds project-level instructions
- adds brownfield Flutter standards
- adds testing and deploy guidance
- keeps the shared foundation docs as the source of truth

It intentionally does not:
- rewrite the repo into the greenfield template
- force a repo-wide folder migration
- include proprietary donor code, app names, endpoints, or secrets

## Recommended merge order

1. copy `docs/ai/`, `AGENTS.md`, `CLAUDE.md`, `.cursor/`, `.claude/`, `.codex/`
2. copy this overlay's `AGENTS.md` and `CLAUDE.md`
3. copy `ai_docs/standards/`
4. copy `.cursor/rules/internal-mobile-flutter.mdc` from the shared foundation if Cursor rules are used
5. align CI and release process with:
   - `templates/ci/flutter-quality.github-actions.yml`
   - `templates/mobile-release/RELEASE_CHECKLIST.md`

## Suggested first team prompt after merge

"Read `AGENTS.md`, `docs/ai/20-mobile-backend-fastapi-ai.md`, and `ai_docs/standards/*`. Audit whether this Flutter repo is greenfield feature-first or brownfield-compatible, identify routing, DI, and generated-files policy gaps, and propose the smallest safe adoption steps."
