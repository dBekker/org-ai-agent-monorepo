---
name: orchestrate
description: Plan → implement → verify → review workflow for non-trivial tasks.
---

Workflow:
1. call `planner`
2. execute the plan in small safe steps
3. run relevant checks
4. call `reviewer`
5. summarize risks, known failures, and follow-up
