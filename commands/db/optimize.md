---
description: Diagnose a slow query using its execution plan and suggest fixes.
argument-hint: "<sql>"
allowed-tools: Bash
---

Optimize the query in $ARGUMENTS using the `db-query-optimization` skill. Run EXPLAIN/EXPLAIN ANALYZE, read the plan, and identify the dominant cost. Suggest concrete fixes (indexes, rewrites) and, if applied, show before/after timings. Do not add indexes blindly.
