---
description: "Check a deployment's rollout status and history."
argument-hint: "<deployment> [namespace]"
allowed-tools: Bash
---

Check the rollout of the deployment in $ARGUMENTS using the `deployment-strategies` skill (`kubectl rollout status/history`). Report progress and, if stuck, the likely cause. Suggest (do not auto-run) an undo if the new revision is failing.
