---
name: tcl
description: "Write Tcl scripts (and Tk/Expect): everything-is-a-string, lists, procs. Use for .tcl files. Detect tclsh first."
---

# Tcl

**Category:** languages  ·  **Requires (detect first):** tclsh

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `tclsh`

## Key commands

```bash
tclsh script.tcl
tclsh -encoding utf-8 script.tcl
```

## Checklist

- Braces vs quotes for grouping understood
- List commands used (not string hacks)
- Error handling via catch

## Common pitfalls

- Word-splitting/quoting surprises
- Building lists by string concatenation
- Unhandled errors from catch

## Related skills

- `shell-bash`
- `lua`
- `automation-scripting`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
