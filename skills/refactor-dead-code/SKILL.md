---
name: refactor-dead-code
description: Find and safely remove dead code, unused deps and duplication (knip, ts-prune, depcheck, vulture). Use to reduce cruft.
---

# Refactor Dead Code

**Category:** tooling

## Key commands

```bash
npx knip
npx depcheck
npx ts-prune
```

## Checklist

- Confirm truly unused (dynamic refs checked)
- Remove in small, verified steps
- Tests green after each removal

## Common pitfalls

- Removing code used via reflection/dynamic import
- Big-bang deletions with no tests

## Related skills

- `refactoring`
- `dependency-management`
- `code-analysis`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
