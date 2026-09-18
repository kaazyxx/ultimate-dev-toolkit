---
description: Fetch and analyze container logs for errors.
argument-hint: "<container>"
allowed-tools: Bash
---

Fetch logs for the container in $ARGUMENTS (`docker logs`) and analyze them using the `log-analysis` skill. Surface errors, restarts and their likely cause. Redact any secrets that appear in logs.
