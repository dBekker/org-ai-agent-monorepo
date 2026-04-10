---
name: add-assistant-action
description: Use when adding a new assistant capability that touches prompts, tools, orchestration, providers, or transport.
---

# Skill: add-assistant-action

Read:
- `docs/ai/20-mobile-backend-fastapi-ai.md`
- `docs/ai/60-migration-notes-template.md`

Workflow:
1. define the public action contract
2. update orchestration or intent logic
3. add or update provider adapters and tools
4. log risk around prompts and behavior changes
5. verify transport compatibility and fallback paths
