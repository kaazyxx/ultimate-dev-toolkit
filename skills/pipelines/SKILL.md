---
name: pipelines
description: Chain commands into an ordered pipeline (e.g. analyze then test then fix then format then build) with dependencies, error handling, retries, timeouts, conditional and parallel steps. Use for multi-step automation.
---

# Pipelines

**Category:** core

Compose existing commands into a repeatable, fail-safe sequence with clear per-step logs.

## When to use

- When a task is several commands that should run in a defined order
- When some steps may run in parallel or only if a previous step succeeded
- To make a repeatable workflow (CI-like) out of ad-hoc steps

## Workflow

1. Declare steps with explicit dependencies (a DAG).
2. For each step set: on-error (stop/continue), retries, timeout, and an optional condition.
3. Run independent steps in parallel where safe; serialize where there is a data dependency.
4. Capture per-step logs and a final status summary; stop the pipeline on a hard failure.

## Checklist

- Each step has a clear success/failure signal
- Destructive steps still honor safe-execution confirmation
- Failures surface the failing step and its log, not just 'failed'

## Common pitfalls

- Hiding a failed step behind a later success
- Parallelizing steps that share mutable state
- Unbounded retries with no timeout

## Related skills

- `command-registry`
- `ci-cd`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
