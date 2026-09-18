---
description: Plan and assist a code/framework/version migration.
argument-hint: "<from> -> <to>"
allowed-tools: Read, Grep, Glob, Edit, Bash
---

Assist the migration described in $ARGUMENTS.

First assess scope: what breaks, what is mechanical vs. manual. Propose a phased, testable plan (smallest safe steps). Apply changes incrementally with tests green between steps. Prefer codemods/AST transforms for mechanical changes. Keep a rollback path.
