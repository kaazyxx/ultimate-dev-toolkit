---
description: "Map and audit the project's dependencies."
argument-hint: "[path]"
allowed-tools: Read, Glob, Bash
---

Map dependencies for $ARGUMENTS using the `dependency-management` and `security-dependencies` skills.

List direct and notable transitive deps from the real manifest/lockfile, flag outdated or vulnerable ones (audit tools if available), and note anything unusually large or duplicated. Suggest safe next steps.
