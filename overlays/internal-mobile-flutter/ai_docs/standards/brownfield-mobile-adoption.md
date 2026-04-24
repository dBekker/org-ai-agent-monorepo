# Brownfield Mobile Adoption

Use this file with:
- `docs/ai/40-brownfield-adoption.md`
- `docs/ai/20-mobile-backend-fastapi-ai.md`

This guide focuses on safe incremental adoption for real Flutter/mobile repositories.

## Step 1: audit the current repo

Identify:
- the current structure mode
- the routing entrypoints
- the DI bootstrap
- whether repositories already return `Either<Failure, T>`
- which code generation tools are already active
- whether generated files are committed or regenerated

## Step 2: choose the target mode

Pick one:
- greenfield `lib/features/<feature>/...`
- brownfield-compatible `lib/{data,domain,presentation}/<feature>`

Do not silently mix both modes for new work in the same repo area.

## Step 3: mark zones

Mentally or in docs, separate:
- stable donor zones
- mixed zones
- legacy zones

Use stable zones as examples for new work.
Do not copy the oldest file by default just because it is nearby.

## Step 4: set adoption rules for new work

- all new imports use `package:<app_name>/...`
- new screen navigation goes through the central router
- DI additions go through `GetIt` + `Injectable`
- new repositories return `Either<Failure, T>`
- DTOs do not leak into domain entities or presentation state

## Step 5: normalize touched flows only

When touching a legacy flow, opportunistically improve:
- file placement
- mapper boundaries
- failure mapping
- import style
- BLoC split and state equality

Do not turn a feature task into a repo-wide migration without an explicit migration brief.

## Step 6: make quality and release rules explicit

Document:
- generated-files policy
- CI baseline
- test expectations
- release checklist

This is how brownfield teams stop relearning the same mobile delivery rules every sprint.
