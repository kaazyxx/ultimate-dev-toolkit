---
description: Show and explain the schema of a table or the whole database.
argument-hint: "[table]"
allowed-tools: Bash
---

Show the schema for $ARGUMENTS (a table, or the whole DB). Detect the client, run the appropriate describe/DDL command, and explain columns, types, keys, indexes and relationships. Note anything risky (missing indexes, no FKs, overly wide columns).
