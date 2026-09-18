---
description: Fetch and analyze logs for a pod (including previous crash).
argument-hint: "<pod> [namespace]"
allowed-tools: Bash
---

Fetch logs for the pod in $ARGUMENTS using `kubectl logs` (and `--previous` on crashes), then analyze with the `log-analysis` skill. Surface errors and likely cause; redact secrets. Read-only.
