# 00. Core engineering standard

This repository is intended to be used by both human developers and coding agents.
The goal is not to let every agent invent its own architecture, but to keep a stable, reusable engineering standard.

## Non-negotiable principles

1. Prefer the existing architecture over improvising a new one.
2. Make the smallest defensible change that solves the task.
3. Reuse shared abstractions before creating local duplicates.
4. Preserve clear boundaries between UI, application logic, domain logic, transport models, and storage models.
5. Do not hide breaking changes.
6. Document new recurring rules instead of relearning them every sprint.

## Working style for agents

- Plan first for non-trivial work.
- Read the relevant stack guide before coding.
- For UI work, follow the Figma → code workflow.
- For legacy areas, follow the brownfield adoption guide.
- When a task changes a contract, migration path, or deployment behavior, leave a migration note.

## Shared rules

- Type safety first.
- No silent architecture drift.
- No duplicate shared components.
- No mixing transport DTOs with domain entities by accident.
- No page-level hacks that should live in a lower layer.
- No magic-number fixes without understanding the layout or state model.

## Change-risk categories

The following changes are high-risk and must be treated carefully:

- database schema changes
- Strapi content-model changes
- public API route changes
- websocket contract changes
- auth / permission / role model changes
- prompt behavior or tool behavior in assistant flows
- Docker / env / deploy changes

## What good completion looks like

A task is done only when:

- the code matches the target architecture
- the relevant checks are run or explicitly marked as not available
- responsive / adaptive behavior is checked if UI changed
- risk and migration implications are called out if relevant
- docs or skills are updated when a new rule was discovered
