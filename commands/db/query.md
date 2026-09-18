---
description: Run a read-only query and format the results (writes require confirmation).
argument-hint: "<sql>"
allowed-tools: Bash
---

Run the query in $ARGUMENTS using the `sql`/database skills. For SELECTs, run and format results. If the statement writes or is destructive (INSERT/UPDATE/DELETE/DROP/TRUNCATE), show it and require explicit confirmation before executing, and refuse UPDATE/DELETE without a WHERE unless the user insists knowingly.
