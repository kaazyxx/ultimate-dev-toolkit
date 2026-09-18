---
name: fish
description: Write Fish shell scripts and functions. Use for .fish files and config.fish. Detect the fish binary before executing.
---

# Fish

**Category:** languages  ·  **Requires (detect first):** fish

Ergonomic Fish scripting (note: not POSIX-compatible).

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `fish`

## Key commands

```bash
fish -n script.fish
fish script.fish
```

## Checklist

- Fish syntax (not bash) used
- Functions and completions organized
- Portability limits acknowledged

## Common pitfalls

- Copying bash syntax that fish rejects
- Assuming POSIX behavior

## Related skills

- `shell-bash`
- `automation-scripting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
