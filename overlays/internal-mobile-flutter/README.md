# Internal Mobile Flutter Overlay

This overlay generalizes reusable patterns from real internal Flutter/mobile projects into safe shared standards for brownfield adoption.

It is intentionally:
- additive
- architecture-first
- brownfield-friendly
- free of proprietary app code, assets, names, endpoints, and secrets

## Included
- entrypoint guides for `AGENTS.md` and `CLAUDE.md`
- brownfield Flutter architecture and code-style standards
- Flutter testing guidance
- CI and release guidance
- merge notes for applying the overlay to an existing repository

## Use this overlay when
- the repo is already a Flutter/mobile codebase
- the current folder structure is mixed or legacy
- the team wants stronger defaults for DI, routing, failure handling, code generation, testing, and release hygiene

## Do not use this overlay to
- force a full migration before feature work
- copy donor application code into a shared standard
- turn the greenfield mobile template into a project-specific app

## Recommended adoption path
1. copy the shared `docs/ai/`, `AGENTS.md`, `CLAUDE.md`, and tool wrappers
2. add `ai_docs/standards/*` from this overlay
3. choose the repository's Flutter structure mode
4. adopt the quality gates and generated-files policy
5. normalize touched legacy flows incrementally
