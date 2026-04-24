# Flutter Testing

Read first:
- `docs/ai/30-quality-gates.md`
- `docs/ai/20-mobile-backend-fastapi-ai.md`

This playbook strengthens Flutter quality gates for brownfield and greenfield mobile work.

## Default test stack

Prefer these tools where they fit the repository:
- `flutter test`
- `bloc_test`
- `mocktail`
- `network_image_mock`
- `golden_toolkit` or `alchemist`
- `integration_test`

## Testing by change type

### Domain and use cases
- unit-test input validation
- unit-test success and failure branches
- verify `Either<Failure, T>` contracts

### Repositories and mappers
- test DTO to domain mapping
- test error mapping from transport or storage failures into domain failures
- cover optional or partial payloads that commonly regress in brownfield APIs

### BLoCs
- test event-to-state sequences with `bloc_test`
- verify loading, success, empty, and failure states
- keep state equality predictable through `Equatable`

### Widgets and screens
- test critical widget states when behavior is non-trivial
- add golden coverage for reusable surfaces or high-risk UI changes
- include adaptive checks when layout changes across phone and tablet classes

### Integration smoke tests
- keep at least one happy-path smoke flow for app startup and an app-critical journey when the repo supports it
- use these sparingly but deliberately for login, onboarding, checkout, or other critical paths

## Release-quality verification

When a feature touches routing, authentication, networking, or generated files, the minimum expected gate is:
- generation step when required
- `dart format --set-exit-if-changed .`
- `flutter analyze`
- `flutter test --coverage`
- targeted widget, golden, or integration checks when relevant
