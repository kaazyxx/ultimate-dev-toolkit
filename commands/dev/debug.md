---
description: Diagnose a specific error or failure to root cause.
argument-hint: "--file <f> --line <n> --error <msg>"
allowed-tools: Read, Grep, Glob, Bash
---

Debug the failure described in $ARGUMENTS (file/line/error/context) using the `debugging` skill.

1. Reproduce it if possible; read the full error/stack.
2. Form the smallest hypothesis that explains it and test it.
3. Narrow to the root cause (not the symptom).
4. Propose a fix, apply it if asked, re-run to confirm, and add a regression test. Report what you actually verified.
