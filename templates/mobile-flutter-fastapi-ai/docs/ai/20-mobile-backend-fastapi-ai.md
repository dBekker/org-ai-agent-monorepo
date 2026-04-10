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

## Flutter target structure

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

## Flutter defaults
- feature-first clean architecture for new work
- DTOs are not domain entities
- presentation state must not depend directly on raw transport models
- DI stays centralized
- routing goes through a single navigation layer

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

## Forbidden patterns
- prompt logic hardcoded in random endpoint handlers
- transport models reused as internal orchestration models
- one huge assistant file that owns everything
- gateway becoming a second monolith by absorbing recipes or assistant internals
