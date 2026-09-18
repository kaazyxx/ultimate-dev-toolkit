---
description: Run a defensive security audit of the codebase.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob, Bash
---

Run a defensive security audit of $ARGUMENTS using the `security-audit` skill (and delegate to the `security-auditor` agent for depth). Cover secrets, vulnerable deps, injection sinks, authz gaps and misconfig. Prioritize findings by real exploitability and give concrete fixes. This is defensive review only.
