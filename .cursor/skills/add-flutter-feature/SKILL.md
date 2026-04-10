---
name: add-flutter-feature
description: Use when adding a new Flutter feature with data / domain / presentation separation.
---

# Skill: add-flutter-feature

Read:
- `docs/ai/20-mobile-backend-fastapi-ai.md`
- `docs/ai/30-quality-gates.md`

Workflow:
1. create feature folder under `features/`
2. define DTOs, entities, and use cases separately
3. keep presentation state independent of transport models
4. wire DI and routing cleanly
5. verify adaptive behavior on target device classes
