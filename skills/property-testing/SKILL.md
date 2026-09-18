---
name: property-testing
description: "Write property-based tests (Hypothesis/fast-check/QuickCheck): invariants over generated inputs, shrinking. Use for logic with many edge cases."
---

# Property Testing

**Category:** testing

## Checklist

- Invariants/properties identified
- Generators cover the input space
- Shrinking gives minimal failing case

## Common pitfalls

- Testing only trivial examples
- Properties that are just the implementation
- Ignoring generator bias

## Related skills

- `testing-strategy`
- `fuzzing`
- `algorithms-data-structures`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
