# Flutter Code Style

Use the shared mobile standard first:
- `docs/ai/20-mobile-backend-fastapi-ai.md`
- `docs/ai/30-quality-gates.md`

This file adds internal brownfield defaults for Flutter implementation style.

## Imports

- All local imports use `package:<app_name>/...`
- Avoid deep relative imports between features or layers
- Group imports in this order:
  1. Dart or Flutter SDK
  2. external packages
  3. local app imports

## Public API shape

- Public classes, services, repositories, and use cases use doc comments
- BLoC files stay split into `*_event.dart`, `*_state.dart`, and `*_bloc.dart`
- BLoC state classes extend `Equatable`
- Use cases expose `call()` and validate inputs before crossing boundaries

## Navigation and DI

- Screen-level app navigation goes through the central router or navigation layer
- `Navigator.pop` is acceptable for dialogs, bottom sheets, and short-lived local flows
- Do not introduce `Navigator.push` for app screen navigation when the repo already has a router abstraction
- Keep dependency injection centralized through `GetIt` + `Injectable`

## Data and failures

- DTOs, API responses, and persistence models stay in the data or transport layer
- Domain entities and presentation state do not depend on raw transport models
- Repository methods return `Either<Failure, T>`
- Map transport, parsing, and storage errors into domain failures before they reach BLoC or UI state

## Generated code

- Use `build_runner` for generated Retrofit clients, serializable models, and Injectable wiring
- Keep generated asset accessors and l10n outputs aligned with the repository policy
- Choose one policy and document it once:
  - commit generated files, or
  - regenerate them in CI before analyze and test
