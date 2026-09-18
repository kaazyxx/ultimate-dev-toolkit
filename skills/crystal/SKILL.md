---
name: crystal
description: Write Crystal, a Ruby-like statically typed compiled language. Use for .cr files and shard.yml. Detect crystal first.
---

# Crystal

**Category:** languages  ·  **Requires (detect first):** crystal

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `crystal`

## Key commands

```bash
crystal build src/main.cr
crystal spec
crystal tool format --check
```

## Checklist

- Nil-safety via union types
- Types annotated where inference is unclear
- specs pass

## Common pitfalls

- Assuming full Ruby compatibility
- Nil-handling without proper union types

## Related skills

- `ruby`
- `rust`
- `go`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
