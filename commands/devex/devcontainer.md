---
description: Scaffold a reproducible devcontainer for this project.
argument-hint: "[stack]"
allowed-tools: Read, Write, Bash
---

Scaffold a devcontainer for $ARGUMENTS using the `devcontainers` skill. Detect the real stack, add devcontainer.json with the right features, keep the image lean with caching/prebuilds, and keep secrets out of the image. Report how to open it.
