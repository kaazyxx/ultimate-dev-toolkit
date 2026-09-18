---
description: Audit IAM for over-broad permissions (read-only).
argument-hint: "[user-or-role]"
allowed-tools: Bash
---

Audit IAM for $ARGUMENTS using the `security-iam` skill. List attached policies and flag wildcard (*) actions/resources, long-lived access keys and unused privileges. Recommend least-privilege changes. Read-only; do not modify policies.
