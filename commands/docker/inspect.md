---
description: "Inspect images/containers: config, ports, mounts, health."
argument-hint: "<image-or-container>"
allowed-tools: Bash
---

Inspect the Docker target in $ARGUMENTS using the `docker-fundamentals` skill. Detect docker first. Show config, ports, mounts, env (redact secrets), and health. Summarize anything risky (running as root, exposed ports, missing healthcheck).
