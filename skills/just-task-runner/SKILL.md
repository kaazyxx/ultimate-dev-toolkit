---
name: just-task-runner
description: "Use just (command runner) for project tasks: recipes, variables, dependencies. Use for justfiles. Detect just first."
---

# Just Task Runner

**Category:** tooling  ·  **Requires (detect first):** just

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `just`

## Key commands

```bash
just --list
just build
```

## Common pitfalls

- Non-portable shell in recipes
- Hidden side effects in recipes

## Related skills

- `build-tool-make`
- `automation-scripting`
- `cli-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
