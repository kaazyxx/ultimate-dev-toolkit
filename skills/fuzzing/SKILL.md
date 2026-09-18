---
name: fuzzing
description: "Fuzz test to find crashes/security bugs (libFuzzer/AFL/go-fuzz/Atheris): coverage-guided random inputs. Use for parsers/untrusted input."
---

# Fuzzing

**Category:** testing

## Key commands

```bash
go test -fuzz=Fuzz
```

## Checklist

- Fuzz targets on parsing/untrusted input
- Corpus seeded and grown
- Crashes triaged and fixed

## Common pitfalls

- Not fuzzing input-parsing code
- Ignoring found crashes
- No sanitizers during fuzzing

## Related skills

- `property-testing`
- `security-audit`
- `c`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
