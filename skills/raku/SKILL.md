---
name: raku
description: "Write Raku (Perl 6): grammars, junctions, gradual typing, concurrency. Use for .raku/.rakumod files. Detect raku first."
---

# Raku

**Category:** languages  ·  **Requires (detect first):** raku

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `raku`

## Key commands

```bash
raku -c script.raku
raku script.raku
prove6 t/
```

## Checklist

- Gradual typing used where it helps
- Grammars for parsing over regex hacks
- Concurrency (promises/supplies) correct

## Common pitfalls

- Assuming Perl 5 semantics
- Overusing operators to the point of obscurity

## Related skills

- `perl`
- `python`
- `regex-mastery`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
