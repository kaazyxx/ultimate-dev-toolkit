---
description: "Scan a project: language, framework, package manager, structure, risks."
argument-hint: "[path]"
allowed-tools: Read, Glob, Grep, Bash
---

Analyze the project at the path in $ARGUMENTS (default: current directory), using the `code-analysis` and `environment-detection` skills.

1. Detect language, framework, package manager and build system from real manifest/lockfiles.
2. Map entry points, key directories and configuration.
3. Flag risk areas: large/complex files, high churn (git), TODO/FIXME, missing tests.
4. Produce a concise report ending with the safest place to make a typical change. State clearly what was detected vs. assumed.
