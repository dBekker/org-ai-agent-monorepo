---
name: write-flutter-tests
description: Use when adding or tightening Flutter tests for brownfield or greenfield mobile work.
---

# Skill: write-flutter-tests

Read:
- `docs/ai/30-quality-gates.md`
- `overlays/internal-mobile-flutter/ai_docs/standards/flutter-testing.md`

Then:
1. match test depth to risk: unit, repository mapping, BLoC, widget, golden, integration
2. cover success, empty, and failure states where behavior changed
3. keep failure mapping assertions explicit when repositories return `Either<Failure, T>`
4. run generation first when tests rely on generated clients or models
5. report which Flutter checks were run and which were unavailable
