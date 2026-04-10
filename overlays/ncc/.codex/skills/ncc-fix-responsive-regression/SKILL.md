---
name: ncc-fix-responsive-regression
description: Diagnose and fix NCC responsive regressions without introducing new visual drift or fragile one-off breakpoints.
---

# NCC Fix Responsive Regression

Use this skill when layout breaks across devices or the rendered surface drifts from Figma.

## Workflow

### 1. Define the regression
Capture:
- route and section
- affected viewport(s)
- expected behavior
- actual behavior
- whether the issue is spacing, wrapping, sizing, overflow, alignment, or hidden assets

### 2. Find the real source
Check in order:
- container width and padding
- typography scale and line-height
- flex/grid constraints
- min/max widths
- hardcoded heights
- image and decorative asset positioning
- client-side measurement code if the surface uses DOM calculations

### 3. Prefer structural fixes
Good:
- fix container logic
- fix responsive class usage
- fix intrinsic sizing
- remove brittle magic numbers where possible

Bad:
- add stacked one-off breakpoints without understanding the root cause
- hide the bug by clipping overflow unless that is the intended design

### 4. Verify the NCC matrix
Test:
- `375`
- `768`
- `1280`
- `1536`

Also check:
- long localized text
- empty or short CMS data
- CTA labels wrapping
- decorative pixel patterns and hero assets
- scrollbar appearance

### 5. Report clearly
State:
- root cause
- files changed
- viewports checked
- anything still visually approximate
