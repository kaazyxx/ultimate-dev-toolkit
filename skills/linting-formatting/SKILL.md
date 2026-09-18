---
name: linting-formatting
description: Set up linters and formatters (ESLint/Prettier/ruff/black/gofmt/clippy) and enforce them in CI. Use to standardize code style/quality.
---

# Linting Formatting

**Category:** tooling

## Checklist

- Formatter auto-runs (pre-commit/CI)
- Lint rules agreed and not overly noisy
- Config committed and shared

## Common pitfalls

- Bikeshedding style manually instead of automating
- Disabling rules wholesale to pass CI
- Formatter vs linter fighting

## Related skills

- `pre-commit-hooks`
- `code-review-playbook`
- `editorconfig`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
