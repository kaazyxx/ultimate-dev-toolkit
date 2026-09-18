---
description: Configure safe automated dependency updates.
argument-hint: "[renovate|dependabot]"
allowed-tools: Read, Write, Bash
---

Configure automated dependency updates for $ARGUMENTS using the `renovate-dependencies` skill. Group related updates, schedule sensibly, gate merges on tests, and automerge only safe (patch/minor, security) bumps. Report the config.
