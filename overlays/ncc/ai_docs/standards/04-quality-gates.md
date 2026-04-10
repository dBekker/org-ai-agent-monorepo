# NCC Quality Gates

## Reality of the current repo
Automated tests are minimal to non-existent.  
That means every meaningful task must include explicit verification notes.

## Minimum gates by task type

### Visual or page work
- lint
- build for significant changes
- viewport QA at `375 / 768 / 1280 / 1536`
- check empty / short / long content states
- check SEO-visible output if the route is public

### Strapi content work
- verify model shape
- verify typed fetcher contract
- verify media rendering
- verify cache/revalidation assumptions
- verify fallback behavior if content is missing

### Prisma form work
- validate zod schema
- verify write path
- verify success and failure UI
- verify DB shape
- verify webhook or downstream payload if applicable

## Required reporting
For non-trivial tasks, report:
- commands run
- breakpoints checked
- data states checked
- anything not fully verified

## Manual QA checklist

### Visual
- spacing
- wrapping
- hover/focus states
- overflow
- asset visibility
- no console/runtime issues encountered during smoke check

### Data/content
- empty state
- optional media fields
- slug paths
- no obvious type mismatch in rendering

### Operational
- validation messages
- loading state
- duplicate or error path
- record created correctly

## Architecture changes
If the task changes patterns, boundaries, or shared conventions:
- update `ai_docs/develop/architecture/*`
- mention the decision in the delivery summary
