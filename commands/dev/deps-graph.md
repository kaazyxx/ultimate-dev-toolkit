---
description: Map the internal module dependency graph and flag cycles.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob, Bash
---

Build the internal dependency graph for $ARGUMENTS using the `code-analysis` skill (madge/dependency-cruiser if available). Highlight cycles, god-modules and layering violations. Present a concise summary (and a Mermaid graph if useful).
