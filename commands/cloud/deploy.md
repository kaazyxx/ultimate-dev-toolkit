---
description: Review a deployment plan for safety before applying (no auto-apply).
argument-hint: "[target]"
allowed-tools: Read, Bash
---

Review the deployment for $ARGUMENTS using the `deployment-strategies` skill. Show the plan/diff (e.g. terraform plan, k8s diff) and check for a rollback path, backward-compatible migrations, and health checks. Do not apply automatically; require explicit confirmation to proceed.
