---
name: static-analysis
description: Run static analysis/type checks/linters (mypy, tsc, clippy, staticcheck, SpotBugs) to catch bugs pre-runtime. Use to find defects without running code.
---

# Static Analysis

**Category:** tooling

## Key commands

```bash
npx tsc --noEmit
mypy .
cargo clippy
```

## Checklist

- Strict mode enabled
- Findings triaged, not blanket-suppressed
- Integrated into CI

## Common pitfalls

- Suppressing warnings instead of fixing
- Running with lax settings that catch nothing

## Related skills

- `linting-formatting`
- `security-sast`
- `typescript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
