---
description: Improve code structure without changing behavior, under test cover.
argument-hint: "<file-or-area>"
allowed-tools: Read, Grep, Glob, Edit, Bash
---

Refactor the target in $ARGUMENTS using the `refactoring` skill.

Confirm tests exist and pass first (or add characterization tests). Make small, behavior-preserving changes one at a time, re-running tests after each. Keep the diff reviewable and explain each transformation. Do not mix in feature changes.
