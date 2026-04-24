# Mobile Release Checklist

Use this checklist as a reusable starter for Flutter/mobile releases.
Keep app-specific product names, endpoints, secrets, and signing values out of the shared template.

## Scope and versioning

- [ ] Confirm target app flavor or environment
- [ ] Confirm release scope and linked change list
- [ ] Set version name and build number according to team policy
- [ ] Confirm generated-files policy has been satisfied

## Android

- [ ] Confirm whether the release artifact is internal APK, AAB, or both
- [ ] Verify Android signing inputs are available through approved secret handling
- [ ] Build the intended Android artifact for the target flavor
- [ ] Record where the artifact was uploaded or distributed

## iOS and TestFlight

- [ ] Confirm archive or TestFlight path for the target release
- [ ] Verify iOS signing and provisioning inputs are available through approved secret handling
- [ ] Build the intended iOS archive for the target flavor
- [ ] Upload to the correct internal testing or TestFlight destination

## Env and flavors

- [ ] Confirm env source for the target flavor
- [ ] Verify no real env values or signing materials are committed
- [ ] Confirm flavor-specific endpoints and keys are injected through approved config channels

## Verification

- [ ] Run required generation steps
- [ ] Run `dart format --set-exit-if-changed .`
- [ ] Run `flutter analyze`
- [ ] Run `flutter test --coverage`
- [ ] Run targeted widget, golden, or integration checks when relevant
- [ ] Complete manual smoke checks for the critical user path

## Release and rollback

- [ ] Record release owner and smoke-test owner
- [ ] Record the rollback plan for Android distribution
- [ ] Record the rollback plan for iOS or TestFlight distribution
- [ ] Capture known risks, non-goals, and follow-up items
