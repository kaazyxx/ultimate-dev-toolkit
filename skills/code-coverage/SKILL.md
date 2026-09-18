---
name: code-coverage
description: "Measure and use code coverage meaningfully: line/branch coverage, gaps, avoiding coverage theater. Use when assessing test completeness."
---

# Code Coverage

**Category:** tooling

## Key commands

```bash
npx c8 npm test
pytest --cov
go test -cover ./...
```

## Checklist

- Coverage of changed lines checked
- Branches, not just lines
- Gaps in critical paths addressed

## Common pitfalls

- Chasing a % with meaningless tests
- Ignoring branch coverage
- Excluding hard code to inflate numbers

## Related skills

- `testing-strategy`
- `mutation-testing`
- `ci-cd-pipeline-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
