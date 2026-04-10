# AGENTS.md

This repository uses a shared engineering standard for humans and coding agents.
Treat this file as the short entrypoint, not the full standard.

## Read order

1. `docs/ai/00-core-engineering.md`
2. `docs/ai/30-quality-gates.md`
3. `docs/ai/20-mobile-backend-fastapi-ai.md`
4. `docs/ai/01-figma-to-code.md  # when task touches UI`
5. `docs/ai/40-brownfield-adoption.md  # when task touches legacy code or migration`
6. `docs/ai/50-task-catalog.md`

## Working rules

- Plan first for non-trivial work.
- Prefer existing architecture over inventing a new pattern.
- Make the smallest defensible change.
- Reuse shared abstractions before creating local duplicates.
- Keep UI, domain, transport, and storage boundaries explicit.
- Leave migration notes when a change affects contracts, schemas, or deployment.

## High-risk changes

Treat the following as high-risk:
- database or content-model changes
- auth or permission changes
- websocket contract changes
- public API route changes
- Docker / env / deployment changes
- assistant prompt or tool behavior changes

## Done criteria

A task is not complete until:
- the relevant checks were run or explicitly marked unavailable
- UI tasks were checked on target breakpoints or devices
- risks and follow-up were called out
- recurring new rules were moved into docs or skills

## Repository type

`template-mobile-flutter-fastapi-ai` is configured as a mobile / backend stack.
