---
description: Show relevant environment variables (secrets redacted).
argument-hint: "[filter]"
allowed-tools: Bash
---

Show environment variables matching $ARGUMENTS (or the development-relevant ones) using the `environment-detection` skill. Always redact values that look like secrets (KEY/TOKEN/PASSWORD/SECRET/DSN). Explain which ones affect the current project.
