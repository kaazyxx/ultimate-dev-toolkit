---
name: perl
description: Read, write and modernize Perl 5 scripts with strict/warnings and testing. Use for .pl/.pm files. Detect perl before executing.
---

# Perl

**Category:** languages  ·  **Requires (detect first):** perl, perlcritic, prove

Maintainable Perl with strict, warnings and tests.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `perl`
- `perlcritic`
- `prove`

## Key commands

```bash
perl -c script.pl
perlcritic script.pl
prove -r t/
```

## Checklist

- use strict; use warnings everywhere
- Untrusted input handled (taint mode)
- Tests under t/ pass with prove

## Common pitfalls

- Legacy scripts without strict/warnings
- Context (list vs scalar) surprises

## Related skills

- `shell-bash`
- `python`
- `ruby`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
