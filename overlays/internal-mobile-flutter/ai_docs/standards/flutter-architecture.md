# Flutter Architecture

Start with the shared foundation docs:
- `docs/ai/20-mobile-backend-fastapi-ai.md`
- `docs/ai/40-brownfield-adoption.md`

This overlay documents how to adapt those rules to real internal Flutter/mobile brownfield repositories.

## Standard library set

Prefer these defaults unless the repository already uses a clearly established alternative:
- FVM
- `flutter_bloc` / `bloc`
- `get_it` + `injectable`
- `dio` + `retrofit`
- `json_serializable`
- `go_router`
- `equatable`
- `dartz` `Either<Failure, T>`
- `flutter_secure_storage` / `shared_preferences`
- `flutter_dotenv`
- `logger`
- `flutter_gen`
- generated l10n
- `flutter_native_splash`

## Structure modes

### Mode A: greenfield target

Use feature-first modules when the repo is already organized that way or when you are starting new greenfield work:

```text
lib/features/<feature>/
  data/
  domain/
  presentation/
```

### Mode B: brownfield-compatible target

Use per-layer feature folders when the repo is already organized by layer and a full migration would be disproportionate:

```text
lib/data/<feature>/
lib/domain/<feature>/
lib/presentation/<feature>/
```

Older shared folders such as `lib/domain/usecases`, `lib/data/repositories`, `lib/presentation/bloc`, or `lib/presentation/screens` may still exist during adoption.
Do not treat them as the target pattern for new work if the repository has already chosen one of the two supported modes.

## Layer boundaries

- `presentation/` owns BLoCs, screens, widgets, and UI state
- `domain/` owns entities, repository contracts, failures, and use cases
- `data/` owns DTOs, mappers, repositories, data sources, and local or remote adapters
- `core/` owns cross-cutting concerns such as router, DI bootstrap, logging, and shared utilities

## Routing and navigation

- Keep app screen navigation in the central router or navigation layer
- Prefer `go_router` route definitions over ad hoc push chains
- Use `Navigator.pop` only for local dismiss flows such as dialogs and bottom sheets

## Dependency injection

- Centralize service registration in `GetIt` + `Injectable`
- Keep generated DI wiring discoverable and predictable
- Do not hand-roll parallel service locator patterns next to existing DI bootstrap

## Errors and results

- Repositories return `Either<Failure, T>`
- Transport and storage exceptions are mapped at the repository or data-source boundary
- UI state should not need to understand `DioException`, Retrofit internals, or JSON parsing errors

## Generated files policy

Make the generated-files policy explicit in repo docs or CI:
- commit generated files and review them, or
- generate them in CI before `flutter analyze` and `flutter test`

The same rule should cover:
- Retrofit clients
- `json_serializable` output
- Injectable output
- l10n artifacts
- generated asset accessors
