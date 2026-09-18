---
description: Show pod/node resource usage to find hotspots.
argument-hint: "[pods|nodes]"
allowed-tools: Bash
---

Show Kubernetes resource usage for $ARGUMENTS using the `kubernetes-core` skill (`kubectl top`). Identify pods/nodes near their limits and note missing requests/limits. Read-only.
