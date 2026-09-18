---
description: Find and fix a real performance bottleneck by measurement.
argument-hint: "<target>"
allowed-tools: Read, Grep, Glob, Bash, Edit
---

Optimize the target in $ARGUMENTS using the `performance-profiling` skill.

Measure first to locate the actual bottleneck (do not guess). Fix the dominant cost (often algorithmic/IO), then re-measure to prove the improvement. Preserve behavior and correctness; add a guard test if the perf matters.
