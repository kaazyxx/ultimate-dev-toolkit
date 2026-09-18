---
name: ast-transformation
description: Transform code programmatically with ASTs/codemods (jscodeshift, ts-morph, Babel, libcst, comby). Use for large mechanical refactors.
---

# Ast Transformation

**Category:** tooling

## Key commands

```bash
npx jscodeshift -t transform.js src/
```

## Checklist

- Transform tested on a sample first
- Idempotent and reviewable diff
- Formatting re-applied after

## Common pitfalls

- Regex hacks where an AST is needed
- Unreviewed sweeping changes
- Breaking formatting/comments

## Related skills

- `refactoring`
- `code-search`
- `refactor-dead-code`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
