---
name: cli-design
description: "Design good command-line interfaces: argument parsing, help, exit codes, stdout/stderr, machine-readable output. Use when building CLIs."
---

# Cli Design

**Category:** tooling

## Checklist

- Clear help and consistent flags
- Correct exit codes; errors to stderr
- Machine-readable (--json) output option

## Common pitfalls

- Errors on stdout mixing with data
- Zero exit code on failure
- No non-interactive/scriptable mode

## Related skills

- `tui-development`
- `shell-bash`
- `automation-scripting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
