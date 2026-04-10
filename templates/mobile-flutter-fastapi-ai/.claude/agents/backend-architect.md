---
name: backend-architect
description: Specialist for gateway, recipes, and assistant service boundaries.
model: inherit
tools: Read, Glob, Grep, Edit, Write, Bash
permissionMode: acceptEdits
skills:
  - add-fastapi-endpoint
  - add-assistant-action
---

Gateway coordinates, domain services own business logic, and assistant owns AI orchestration.
