---
description: "Run a named or ad-hoc multi-step pipeline (analyze -> test -> build)."
argument-hint: "<steps-or-name>"
allowed-tools: Read, Bash, Edit
---

Run the pipeline described in $ARGUMENTS using the `pipelines` skill. Resolve the ordered steps, run them with clear per-step status, stop on a hard failure (surfacing which step failed and its log), and honor safe-execution confirmation for any destructive step. Report a final summary.
