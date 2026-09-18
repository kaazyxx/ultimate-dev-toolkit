---
description: Scan the repo and history for leaked credentials.
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob, Bash
---

Scan $ARGUMENTS for leaked secrets using the `security-secrets` skill. Use gitleaks/trufflehog if available, plus targeted grep of code and git history. For any finding, advise rotating the secret (not just deleting it) and moving it to a secret manager. Redact the secret value in your report.
