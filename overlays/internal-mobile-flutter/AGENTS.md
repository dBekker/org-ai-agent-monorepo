# Internal Mobile Flutter Overlay Guide

This overlay adapts the shared foundation to internal brownfield Flutter and mobile projects.
Keep this file short and treat the shared docs as the source of truth.

## Read first

1. `docs/ai/00-core-engineering.md`
2. `docs/ai/30-quality-gates.md`
3. `docs/ai/20-mobile-backend-fastapi-ai.md`
4. `docs/ai/40-brownfield-adoption.md`
5. `ai_docs/standards/flutter-architecture.md`
6. `ai_docs/standards/flutter-code-style.md`
7. `ai_docs/standards/flutter-testing.md`
8. `ai_docs/standards/flutter-ci-deploy.md`
9. `ai_docs/standards/brownfield-mobile-adoption.md`

## Working rules

- Preserve the current repository shape unless the task explicitly includes migration work.
- Decide whether the repo is using greenfield `features/<feature>/...` or brownfield `lib/{data,domain,presentation}/<feature>` mode before adding new code.
- Normalize only the feature or flow you touch.
- Keep routing, DI, code generation, and failure mapping centralized.
- Do not copy proprietary product details, endpoints, assets, or secrets into the shared standard.
