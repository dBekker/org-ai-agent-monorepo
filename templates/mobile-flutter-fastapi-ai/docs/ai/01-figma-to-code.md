# 01. Figma → code workflow

Pixel-perfect work is a first-class workflow in this organization.
The goal is not “visually close enough”. The goal is predictable, repeatable implementation quality.

## Sequence

1. Extract design tokens.
2. Reuse or extend shared primitives.
3. Build layout primitives.
4. Build sections or screen blocks.
5. Assemble the page or screen.
6. Wire content and data.
7. Validate responsive or adaptive behavior.
8. Polish states and edge cases.

## Order of implementation

### Step 1 — Tokens
Start with colors, typography, spacing, radii, elevation, and core sizing rules.
Do not start from page markup when the design system layer is still missing.

### Step 2 — Shared UI
Check the shared UI library first.
If the needed primitive already exists, reuse it.
If it is missing, add it to the shared UI layer instead of duplicating it locally.

### Step 3 — Layout primitives
Create reusable layout wrappers before assembling a page.
Typical examples: container, section wrapper, page header shell, split layout, card grid, CTA row.

### Step 4 — Sections and screen blocks
Page sections or mobile screen blocks can compose shared primitives and layout wrappers.
They should not become an accidental second design system.

### Step 5 — Data wiring
Only wire real content after the visual and layout structure is stable.
For CMS-backed views, define mapping between raw CMS data and typed UI props.

## Mandatory web checks

Minimum widths:
- 375
- 768
- 1280
- 1440

Validate:
- overflow
- wrapping
- spacing rhythm
- image cropping
- card heights
- CTA alignment
- sticky / fixed interactions
- empty and loading states if applicable

## Mandatory mobile checks

Minimum device set:
- small phone
- regular phone
- large phone
- tablet

Validate:
- safe areas
- keyboard scenarios
- long text and localization expansion
- scroll behavior
- typography scaling
- button reachability and spacing density

## What is forbidden

- starting from a full page while ignoring tokens
- cloning a shared component locally because it is faster
- fixing responsiveness only with brittle magic numbers
- sacrificing architecture just to import the design quicker

## Acceptance criteria

Pixel-perfect work is done only when:

- hierarchy and spacing are faithful to design intent
- target breakpoints or device classes are checked
- hover / focus / pressed / disabled states are covered where relevant
- there is no overflow, clipping, or accidental layout drift
