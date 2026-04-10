# Repo audit summary

This document explains how the uploaded repositories were used to build the templates.

| Uploaded repo | Role in the standard | Keep | Do not copy blindly |
|---|---|---|---|
| `cmkr-dev` | Primary donor for the web / CMS template | monorepo layout, shared packages, Prisma + Strapi split, Docker-first runtime, Figma workflow | repo-specific content mapping, environment names, placeholder UI shortcuts |
| `ncc-cloud-agents-dev` | Primary donor for agent orchestration patterns | Cursor rules, subagents, skills, workflow decomposition | project-specific docs paths and workflow assumptions |
| `sap-main` | Secondary donor for operational web patterns | deployment and environment thinking, admin / public split | Supabase-specific backend assumptions |
| `wellup-dev` | Primary donor for Flutter domain understanding | Clean Architecture intent, BLoC / DI / router usage, app capability map | mixed placement of layers, legacy folder conventions |
| `wellup-gateway-main` | Primary donor for gateway shape | FastAPI router surface, auth / profile / websocket edge behavior, test mindset | thin-file layout that would be hard to scale without modularization |
| `wellup-recipes-main` | Primary donor for domain-service split | separate recipes bounded context | service internals as a universal default for all other domains |
| `wellup-backend-master` | Donor for legacy assistant / AI behavior | prompts, intents, ws, provider concerns, behavior surface | monolithic assistant composition and legacy coupling |

## Key conclusions

1. **One full repo is not the golden template by itself.** The best result is compositional: web architecture from `cmkr-dev`, agent patterns from `ncc-cloud-agents-dev`, mobile domain understanding from `wellup-*` repos.
2. **The web stack is mature enough for a clean template now.** The monorepo pattern is already visible and can be formalized.
3. **The mobile stack needs normalization, not copying.** The right move is a clean target architecture that absorbs the good parts and stops reproducing mixed structures.
4. **Pixel-perfect and responsive work must be first-class.** This was encoded as a core workflow, not an optional note.
5. **Brownfield adoption is required.** The templates therefore include a foundation layer for existing repos, not only greenfield starters.
