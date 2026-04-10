# Mobile / backend template — Flutter + FastAPI + AI services

This template normalizes the mobile stack as a coordinated multi-service system:
- Flutter app
- gateway service
- recipes domain service
- assistant / AI service

## Important scope note
This is an architecture-first starter template.
It gives you a clean repo shape, agent tooling, starter service boundaries, and representative code scaffolds.
It is not a production-complete mobile and backend platform out of the box.

## Why a multi-service template
Your uploaded repositories show that the real mobile system is already split across several repos and concerns.
A single “one FastAPI repo does everything” template would repeat the current pain points.
This template keeps bounded contexts explicit from day one.

## Recommended usage modes

### Mode A — Single monorepo
Use this template as-is if the team wants one repo for mobile plus services.

### Mode B — Split repos
Use the folder skeletons as donors:
- `apps/mobile` → Flutter repo
- `services/gateway` → gateway repo
- `services/recipes` → recipes repo
- `services/assistant` → assistant repo
- keep `docs/ai/`, `AGENTS.md`, `CLAUDE.md`, and tool wrappers consistent across all repos

## Key engineering stance
- feature-first clean architecture for new Flutter work
- gateway coordinates, but does not absorb all business logic
- recipes owns recipes domain logic
- assistant owns prompts, tools, orchestration, providers, and behavior changes
- adaptive UI and contract safety are acceptance criteria
