---
name: mutation-testing
description: "Assess test quality with mutation testing (Stryker/mutmut/PIT): surviving mutants reveal weak tests. Use to validate test effectiveness."
---

# Mutation Testing

**Category:** tooling

## Key commands

```bash
npx stryker run
mutmut run
```

## Checklist

- Run on critical modules
- Surviving mutants investigated
- Weak assertions strengthened

## Common pitfalls

- High coverage with weak assertions (mutants survive)
- Running on the whole repo (too slow)

## Related skills

- `code-coverage`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
