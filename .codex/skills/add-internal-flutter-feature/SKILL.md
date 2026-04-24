---
name: add-internal-flutter-feature
description: Use when adding a Flutter feature in a repository that follows the internal brownfield mobile overlay.
---

# Skill: add-internal-flutter-feature

Read:
- `docs/ai/20-mobile-backend-fastapi-ai.md`
- `docs/ai/30-quality-gates.md`
- `overlays/internal-mobile-flutter/ai_docs/standards/flutter-architecture.md`
- `overlays/internal-mobile-flutter/ai_docs/standards/flutter-code-style.md`
- `overlays/internal-mobile-flutter/ai_docs/standards/brownfield-mobile-adoption.md`

Workflow:
1. confirm the repo's structure mode before placing files
2. keep DTOs, domain entities, use cases, and presentation state separate
3. route screen navigation through the central router
4. register dependencies through `GetIt` + `Injectable`
5. return `Either<Failure, T>` from repositories
6. run generation and Flutter quality gates required by the touched code
