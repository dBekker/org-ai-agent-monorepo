# 30. Quality gates

Agents must not stop at “code written”.
Verification is part of the task.

## Baseline checks by stack

### Web
- lint
- type-check
- build if affected
- responsive QA for UI changes
- mapping sanity if Strapi or Prisma integration changed

### Flutter
- `dart run build_runner build --delete-conflicting-outputs` when generated files are required
- `dart format --set-exit-if-changed .`
- `flutter analyze`
- `flutter test --coverage`
- targeted repository mapping, BLoC, widget, golden, and integration checks where relevant
- targeted smoke check for changed flow
- adaptive QA for affected screens, device classes, and orientation changes

### FastAPI
- unit or integration tests where available
- import/startup sanity
- schema and migration consistency
- endpoint contract sanity

## Known-failure rule

If the repo already has failing checks:
- separate pre-existing failures from new failures
- do not blame new work for old debt
- state clearly what was not introduced by the current change

## Review checklist

Before finishing, verify:
- architecture boundaries are preserved
- no duplicated abstractions were introduced
- no hidden breaking contract changes leaked in
- no unnecessary new dependencies were added
- docs are updated if a new recurring rule was discovered

## Flutter testing expectation

When Flutter code changes, scale testing with risk:
- domain and use-case logic -> unit tests
- repository and mapper changes -> repository mapping tests
- BLoC logic -> `bloc_test`
- reusable visual surfaces -> widget or golden tests
- app-critical happy path -> `integration_test` smoke flow

Common tooling:
- `bloc_test`
- `mocktail`
- `network_image_mock`
- `golden_toolkit` or `alchemist`
- `integration_test`

## UI checklist

- spacing
- typography hierarchy
- states
- empty / loading / error coverage
- responsive or adaptive behavior
- no clipping, overflow, or broken wrapping
