---
name: safe-execution
description: "The security contract every UDT action passes through: validate arguments, block path traversal, avoid shell injection, redact secrets, require confirmation for destructive operations, and keep an audit trail. Use whenever a command runs a shell process or touches the filesystem."
---

# Safe Execution

**Category:** core

Security is never disabled to make a command more powerful. Destructive actions always ask first.

## When to use

- Before running any shell command constructed from user input
- Before deleting, overwriting, force-pushing, dropping or pruning anything
- Whenever output could contain secrets (tokens, passwords, connection strings)

## Workflow

1. Validate and normalize arguments; reject unexpected shapes early.
2. Resolve and canonicalize paths; refuse paths that escape the project root unless explicitly allowed.
3. Prefer argv-style execution (arrays) over shell string concatenation to avoid injection.
4. Classify the action; if destructive, print exactly what will happen and require explicit confirmation.
5. Redact secrets from any printed or logged output; append an entry to .udt/audit.log.

## Checklist

- No user string is concatenated directly into a shell command line
- Every destructive action showed a preview and got a yes
- Secrets are masked in all output and logs

## Common pitfalls

- Building commands via string interpolation instead of argument arrays
- Following relative paths blindly across symlinks or ..
- Echoing an environment variable or connection string that holds a credential

## Destructive operations (always confirm)

Treat these as high-risk and require an explicit yes, showing the exact target first:

- Filesystem: recursive delete, overwrite of existing files, moving over an existing target
- Git: reset --hard, clean -fd, force push, branch deletion, history rewrite
- Database: DROP, TRUNCATE, DELETE/UPDATE without a WHERE, destructive migrations
- Containers: system prune, volume removal, image force-removal
- System: killing processes, changing permissions/ownership, editing PATH or security settings

## Confirmation format

```
! This action may be destructive.
Target: <exact path / command / rows affected>
Effect: <what changes, what is lost>
Proceed? [y/N]
```

Prohibited outright (ask the user to do it themselves): entering credentials, executing fund transfers, disabling security controls, bypassing bot-detection.

## Related skills

- `environment-detection`
- `security-audit`
- `file-operations`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
