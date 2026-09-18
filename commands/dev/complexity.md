---
description: Report the most complex / highest-churn files to target for refactor.
argument-hint: "[path]"
allowed-tools: Read, Glob, Bash
---

Assess complexity for $ARGUMENTS using the `code-analysis` skill.

Identify large files, deep nesting, long functions, and (via git) high-churn hotspots. Produce a ranked shortlist of refactor candidates with a one-line reason each. Use real metrics where a tool is available; otherwise say the estimate is heuristic.
