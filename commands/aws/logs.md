---
description: Tail and analyze a CloudWatch log group.
argument-hint: "<log-group>"
allowed-tools: Bash
---

Analyze the CloudWatch log group in $ARGUMENTS using the `log-analysis` skill. Fetch recent events (`aws logs tail`), surface errors and their likely cause, and redact any secrets that appear. Read-only.
