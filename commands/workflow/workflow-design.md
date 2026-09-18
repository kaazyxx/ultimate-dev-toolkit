---
description: Design a durable long-running workflow.
argument-hint: "<process-description>"
allowed-tools: Read, Grep, Glob
---

Design a durable workflow for $ARGUMENTS using the `durable-execution`/`workflow-engines` skills. Separate deterministic workflow code from side-effecting activities, add retries/timers and compensation, and keep state recoverable. Output the workflow/activity breakdown.
