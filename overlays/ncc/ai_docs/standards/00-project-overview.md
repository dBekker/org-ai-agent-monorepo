# NCC Project Overview

## Product
NCC (Nocode Circle) is a content-heavy platform for ratings, reviews, and media around no-code agencies, tools, schools, and adjacent ecosystem content.

## Current repository shape
This is **not** a monorepo template.  
It is a **single repository** with:

- root Next.js public app
- nested `/strapi` CMS
- shared Docker-based operational environment
- Prisma for app-owned operational data

This shape should be preserved unless there is an explicit migration initiative.

## Main runtime surfaces

### 1. Public app
Tech:
- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui-style primitives
- Prisma client
- server actions
- API routes

### 2. CMS
Tech:
- Strapi 5
- PostgreSQL-backed
- content types and components under `/strapi/src`

### 3. Operations
- Docker Compose for local/staging/prod variants
- environment-specific docs and deploy scripts
- Nginx layer for staging/prod
- scripts for import, seed, sync, and deployment helpers

## What is already strong in this repo

- clear separation between public app and CMS runtime
- section-first frontend composition
- dedicated Strapi fetch layer in `src/lib/strapi/*`
- forms service abstraction with N8N channel
- rich environment and deployment documentation
- existing Cursor agent ecosystem

## What this overlay standardizes

This agent overlay does **not** rewrite the app.  
It standardizes:

- project-level instructions for Cursor, Claude Code, and Codex
- explicit architecture boundaries
- Figma → code workflow
- quality gates
- task playbooks for common NCC work

## Golden path summary

### Visual / Figma work
- inspect similar section
- reuse existing UI primitives
- implement section
- wire route
- validate at NCC breakpoints

### CMS work
- model in Strapi
- add typed app fetcher / transform
- render via sections
- verify cache/media behavior

### Form work
- model in Prisma
- validate with zod
- write through server action
- update N8N integration if needed
- verify persistence and feedback states
