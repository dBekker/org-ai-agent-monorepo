# Merge Guide for NCC Overlay

## What this package is
This directory is an **additive overlay** for the existing `ncc-cloud-agents-dev` repository.

It intentionally:
- adds project-specific standards
- adds Claude Code support
- adds Codex support
- augments Cursor with NCC-specific rules and skills

It intentionally does **not**:
- rewrite application code
- delete your current Cursor setup
- restructure the repo

## Recommended merge order

1. copy `AGENTS.md`
2. copy `CLAUDE.md`
3. copy `.claude/`
4. copy `.codex/`
5. copy new `.cursor/rules/`, `.cursor/agents/`, `.cursor/skills/`
6. copy `ai_docs/standards/`
7. copy `ai_docs/develop/architecture/2026-04-06-ncc-architecture-audit.md`

## Suggested first team prompt after merge

“Read `AGENTS.md` and `ai_docs/standards/*`. Then audit the route or section I’m working on, identify whether the task is Figma, Strapi, Prisma-form, responsive cleanup, or architecture cleanup, and follow the matching project skill.”

## Important note
Existing generic Cursor skills and agents can stay.  
The new files are intended to make the repo more consistent across Cursor, Claude Code, and Codex by giving them the same project memory and task playbooks.
