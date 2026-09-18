---
description: "Assess project health: tests, lint, deps, docs, CI."
argument-hint: "[path]"
allowed-tools: Read, Glob, Bash
---

Assess the health of $ARGUMENTS. Check for: a passing test suite, lint/format config, dependency freshness/vulnerabilities, README/setup docs, and CI. Produce a scored summary with the highest-impact improvements first. Run checks where tools exist; don't fabricate results.
