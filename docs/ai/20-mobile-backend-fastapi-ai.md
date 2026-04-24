# 20. Mobile / backend standard — Flutter + FastAPI + AI services

The uploaded repositories show that this stack is not a single backend repo. It is a system of bounded contexts:
- Flutter app
- gateway service
- recipes service
- assistant / AI service

The template therefore normalizes the stack as a coordinated multi-service architecture, even if production repositories stay split.

## Target layout

```text
apps/
  mobile/
services/
  gateway/
  recipes/
  assistant/
docs/ai/
```

## Flutter structure modes

Choose one Flutter structure mode per repository and keep new work consistent with that choice.
Brownfield repositories do not need a full rewrite before adopting the standard.

### Greenfield target

```text
apps/mobile/lib/
  core/
  features/
    assistant/
      data/
      domain/
      presentation/
    health/
      data/
      domain/
      presentation/
    recipes/
      data/
      domain/
      presentation/
```

### Brownfield-compatible target

```text
apps/mobile/lib/
  core/
  data/
    assistant/
    health/
    recipes/
  domain/
    assistant/
    health/
    recipes/
  presentation/
    assistant/
    health/
    recipes/
```

Brownfield repositories may still contain older global folders such as:

```text
lib/domain/usecases
lib/data/repositories
lib/presentation/bloc
lib/presentation/screens
```

New code should follow the selected target structure.
Legacy placement should be normalized only when the touched flow already needs refactor.

## Backend target structure

```text
services/gateway/app/
  core/
  modules/
    auth/
    onboarding/
    profile/
    files/
    websocket/

services/recipes/app/
  core/
  modules/
    recipes/
    favorites/
    ingredients/

services/assistant/app/
  core/
  modules/
    assistant/
    intents/
    prompts/
    providers/
    tools/
    ws/
```

## Flutter default libraries
- FVM for Flutter version management
- `flutter_bloc` / `bloc` for presentation state
- `get_it` + `injectable` for dependency injection
- `dio` + `retrofit` for HTTP clients
- `json_serializable` for transport and mapping codegen
- `go_router` for app navigation
- `equatable` for value equality in state and domain objects
- `dartz` `Either<Failure, T>` for repository results
- `flutter_secure_storage` and `shared_preferences` for local persistence
- `flutter_dotenv` for environment loading
- `logger` with exportable debug logs
- `flutter_gen` for generated assets
- generated l10n
- `flutter_native_splash` for app bootstrap polish

## Flutter defaults
- feature-first clean architecture is the default for greenfield work
- brownfield repositories may use feature folders under `lib/{data,domain,presentation}/<feature>`
- all local imports use `package:<app_name>/...`; avoid deep relative imports between layers
- group imports as Dart / Flutter, external packages, then local app imports
- DTOs and transport models are not domain entities
- presentation state must not depend directly on raw transport models
- repository methods return `Either<Failure, T>`
- use cases validate input and expose `call()`
- repository and data-source boundaries map transport and storage errors into domain `Failure` types
- BLoC files stay split by event, state, and bloc; states extend `Equatable`
- DI stays centralized through `GetIt` + `Injectable`
- screen-level navigation goes through the central router or navigation layer
- `Navigator.pop` is acceptable for dialogs and bottom sheets
- `Navigator.push` is not the default for app screen navigation
- generated models, API clients, asset accessors, and l10n require the matching code generation step
- public APIs use doc comments

## FastAPI defaults
- router ≠ service ≠ repository ≠ provider
- public schemas are separate from persistence models
- gateway coordinates traffic and auth, but does not absorb all business logic
- contracts must be explicit for REST and websocket flows

## AI-layer defaults
The assistant context must stay isolated.
It should contain:
- prompts
- tools or actions
- orchestration or intent logic
- provider adapters
- validation / safety
- telemetry / logging
- transport interfaces

## Generated files policy

Generated files must follow one explicit repository policy:
- commit generated files and keep them in sync with source definitions, or
- generate them in CI before `analyze` / `test`

Whichever policy the repository chooses, document it once and enforce it consistently for:
- `build_runner` outputs
- Retrofit clients
- `json_serializable` models
- Injectable wiring
- generated l10n
- generated asset accessors

## Forbidden patterns
- prompt logic hardcoded in random endpoint handlers
- `Navigator.push` spread across feature screens for top-level app navigation
- deep relative imports crossing Flutter layers
- transport exceptions leaking directly into domain or presentation state
- transport models reused as internal orchestration models
- one huge assistant file that owns everything
- gateway becoming a second monolith by absorbing recipes or assistant internals
