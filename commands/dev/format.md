---
description: "Format code with the project's configured formatter."
argument-hint: "[path]"
allowed-tools: Bash, Read
---

Format the code in $ARGUMENTS using the `linting-formatting` skill. Detect and run the project's configured formatter (prettier/black/gofmt/rustfmt/etc.). Do not impose a style the project hasn't chosen; report what ran and what changed.
