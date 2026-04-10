# 40. Brownfield adoption guide

These standards are designed for both greenfield and brownfield work.
Existing projects should not be rewritten wholesale just to match the new standard.

## Migration principle

Standardize in this order:
1. shared rules
2. new module structure
3. quality gates
4. shared abstractions
5. legacy refactors only when touched

## Safe rollout sequence

### Step 1 — Add the shared source of truth
Add:
- `docs/ai/`
- `AGENTS.md`
- `CLAUDE.md`
- tool-specific wrappers

### Step 2 — Mark zones
Label code mentally or in docs as:
- stable zones — safe donors for new work
- mixed zones — touch carefully
- legacy zones — do not copy as the default pattern

### Step 3 — New code policy
All new modules follow the target standard even if nearby code is legacy.

### Step 4 — Opportunistic refactor
Normalize only what is directly touched:
- naming
- folder placement
- DTO/entity separation
- shared component reuse
- error mapping and validation boundaries

## Never do this in brownfield

- silently introduce a new architectural pattern next to an old one with no note
- refactor the whole project inside a feature task
- break contracts and plan to fix them later
- treat the oldest folder as the best example only because the agent found it first
