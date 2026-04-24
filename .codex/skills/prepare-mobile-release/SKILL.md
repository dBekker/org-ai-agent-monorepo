---
name: prepare-mobile-release
description: Use when preparing a mobile release plan, checklist, or verification pass for Flutter applications.
---

# Skill: prepare-mobile-release

Read:
- `docs/ai/30-quality-gates.md`
- `overlays/internal-mobile-flutter/ai_docs/standards/flutter-ci-deploy.md`
- `templates/mobile-release/RELEASE_CHECKLIST.md`

Then:
1. confirm flavor or environment, versioning, and generated-files policy
2. verify Android and iOS distribution paths
3. check signing and secrets handling without exposing secret values
4. define smoke-test and rollback steps
5. summarize release risks, gaps, and remaining manual steps
