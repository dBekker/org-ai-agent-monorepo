# Internal Mobile Flutter Overlay

Use this overlay when the repository is an internal or private Flutter/mobile brownfield project that needs the shared foundation plus mobile-specific adaptation rules.

## Read first
- `docs/ai/00-core-engineering.md`
- `docs/ai/30-quality-gates.md`
- `docs/ai/20-mobile-backend-fastapi-ai.md`
- `docs/ai/40-brownfield-adoption.md`
- `ai_docs/standards/flutter-architecture.md`
- `ai_docs/standards/flutter-code-style.md`
- `ai_docs/standards/flutter-testing.md`
- `ai_docs/standards/flutter-ci-deploy.md`
- `ai_docs/standards/brownfield-mobile-adoption.md`

## Default stance
- prefer the repo's chosen structure mode
- keep new Flutter code package-import based
- route app screens through the central router
- keep DI in `GetIt` + `Injectable`
- use explicit generated-files policy and quality gates

This overlay is additive.
It strengthens brownfield adoption without turning the repository into a copy of any donor app.
