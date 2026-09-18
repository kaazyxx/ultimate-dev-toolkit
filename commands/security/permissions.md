---
description: Review file/dir or IAM permissions for least-privilege issues.
argument-hint: "[path-or-policy]"
allowed-tools: Read, Bash
---

Review permissions for $ARGUMENTS using the `security-iam`/`file-operations` skills. For files, flag world-writable or over-permissive modes and secrets readable by all. For IAM policies, flag wildcards and over-broad grants. Recommend least-privilege changes.
