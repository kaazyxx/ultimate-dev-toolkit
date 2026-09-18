---
description: List pods and highlight unhealthy ones.
argument-hint: "[namespace]"
allowed-tools: Bash
---

List Kubernetes pods for $ARGUMENTS using the `kubernetes-core` skill. Detect kubectl. Show status across namespaces and highlight CrashLoopBackOff/Pending/OOMKilled. Read-only.
