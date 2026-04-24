---
name: audit-flutter-brownfield
description: Use when auditing a brownfield Flutter/mobile repository for structure mode, routing, DI, codegen, failure mapping, and adoption risks.
---

# Skill: audit-flutter-brownfield

Read:
- `docs/ai/20-mobile-backend-fastapi-ai.md`
- `docs/ai/30-quality-gates.md`
- `docs/ai/40-brownfield-adoption.md`
- `overlays/internal-mobile-flutter/ai_docs/standards/flutter-architecture.md`
- `overlays/internal-mobile-flutter/ai_docs/standards/brownfield-mobile-adoption.md`

Then:
1. identify whether the repo is greenfield feature-first or brownfield-compatible
2. locate router, DI bootstrap, repository result types, and generated-files policy
3. flag DTO leaks, deep relative imports, ad hoc navigation, and mixed folder patterns
4. recommend the smallest safe adoption steps instead of a full rewrite
