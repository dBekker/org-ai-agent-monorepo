# apps/mobile

Flutter app shell.

## Rules
- new work goes into `lib/features/`
- `lib/core/` is for cross-feature foundations, not a dumping ground
- DTOs stay in `data/`, entities in `domain/`, state and widgets in `presentation/`
- adaptive QA is mandatory for changed screens
