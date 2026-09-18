---
name: code-analysis
description: "Understand an unfamiliar codebase: map structure, entry points, dependencies, hotspots, complexity and risky areas before changing anything. Use when onboarding to a repo or scoping a change."
---

# Code Analysis

**Category:** engineering  ·  **Requires (detect first):** git, node

Build an accurate mental model of a project from real files, not assumptions.

## When to use

- Before editing an unfamiliar codebase
- When scoping the blast radius of a change
- To locate entry points, config and the highest-churn/most-complex files

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`
- `node`

## Workflow

1. Detect language/framework/build system (see environment-detection).
2. Map the directory tree and identify entry points and configuration files.
3. Trace key dependencies inward from the entry point.
4. Flag complexity/risk: large files, deep nesting, TODO/FIXME, high git churn.
5. Summarize architecture and the safest place to make the requested change.

## Key commands

```bash
git ls-files | wc -l
git log --format= --name-only --since='90 days ago' | sort | uniq -c | sort -rn | head
```

## Checklist

- Entry points and build system identified
- Change location chosen from real dependency tracing
- Risk areas (churn, complexity) noted

## Common pitfalls

- Guessing architecture from folder names alone
- Ignoring generated/vendored code as if it were source

## Related skills

- `refactoring`
- `debugging`
- `documentation-writer`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
