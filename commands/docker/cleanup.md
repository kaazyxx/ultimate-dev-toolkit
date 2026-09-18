---
description: Report reclaimable Docker space and prune safely (with confirmation).
allowed-tools: Bash
---

Report reclaimable Docker resources using `docker system df`. Propose what to prune (dangling images, stopped containers, unused volumes) and require explicit confirmation before running any prune. Never prune volumes with data without a clear warning.
