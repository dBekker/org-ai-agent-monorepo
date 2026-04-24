# Flutter CI and Deploy

Start with:
- `docs/ai/30-quality-gates.md`

Use this overlay doc for reusable brownfield mobile CI and release guidance.

## CI baseline

CI should be able to reproduce the repository's chosen generated-files policy and Flutter toolchain.

Minimum quality flow:
1. resolve Flutter version from `.fvmrc` when present
2. run `flutter pub get`
3. run `dart run build_runner build --delete-conflicting-outputs` when generated files are required
4. run `dart format --set-exit-if-changed .`
5. run `flutter analyze`
6. run `flutter test --coverage`

The shared starter lives in `templates/ci/flutter-quality.github-actions.yml`.

## Environment and flavor handling

- Keep env and flavor names generic in shared docs and templates
- Load values through repo-managed env conventions such as `flutter_dotenv`
- Do not commit real env values, signing materials, or app-store credentials

## Signing and secrets

- Android signing keys and iOS signing certificates stay outside the shared repository or in approved secret stores
- CI should inject secrets through the platform secret manager, not through committed files
- Document who owns signing rotation and emergency access outside app code

## Release expectations

For each release, make these decisions explicit:
- target flavor or environment
- version name and build number policy
- Android output type: internal APK, AAB, or both
- iOS distribution path: archive, internal testing, TestFlight
- smoke-test owner and rollback owner

The shared release checklist starter lives in `templates/mobile-release/RELEASE_CHECKLIST.md`.
