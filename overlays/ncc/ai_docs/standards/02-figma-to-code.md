# NCC Figma to Code Standard

## Purpose
NCC frequently ships content-heavy landing and ratings surfaces where visual drift is costly.  
This standard makes pixel accuracy a repeatable workflow instead of an afterthought.

## Required implementation flow

### 1. Read the surface
Capture:
- desktop and mobile variants
- spacing system
- typography hierarchy
- interaction states
- decorative assets
- data ownership (static, Strapi, or app data)

### 2. Map to existing NCC tokens
Before adding anything new, inspect:
- `src/app/globals.css`
- existing heading and body patterns
- existing container and section spacing
- existing button/card/form primitives

### 3. Reuse first
Prefer:
- existing UI primitives
- existing section structure
- existing layout wrappers

Only create a new primitive when reuse would clearly make the code worse.

### 4. Build section-first
Order:
1. primitive reuse / extension
2. section component
3. page composition
4. data wiring
5. polish

## NCC viewport QA matrix

Always check:
- `375` mobile
- `768` tablet
- `1280` desktop
- `1536` large desktop

## What must be verified

### Layout
- container padding
- max width behavior
- section spacing
- card/grid alignment
- no horizontal overflow

### Typography
- line wrapping
- uppercase heading balance
- line-height
- truncation / clipping
- long-copy behavior

### CTAs and controls
- target size
- hover/focus states
- icon alignment
- width and height consistency
- disabled/loading states for form-like surfaces

### Decorative assets
Many NCC hero blocks use custom pixel patterns.

Check:
- desktop-only patterns
- mobile-only patterns
- hidden-on-tablet behavior where intended
- no accidental clipping or unexpected scrollbars

## Media rule
Use `next/image` by default.  
Decorative SVG backgrounds or full-bleed pattern assets may remain raw `<img>` when that is the least fragile option and they are not content media.

## Done criteria
A Figma task is complete only when:
- structure fits NCC architecture
- spacing and typography are visually aligned
- all key breakpoints were checked
- states were verified
- remaining approximation, if any, is explicitly stated
