---
name: git-workflow-branching
description: Choose and run a branching strategy (trunk-based, GitFlow, GitHub flow) and clean PR hygiene. Use when setting team git workflow.
---

# Git Workflow Branching

**Category:** tooling  ·  **Requires (detect first):** git, gh

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`
- `gh`

## Key commands

```bash
git switch -c feature/x
gh pr create --fill
```

## Checklist

- Strategy matches team/release cadence
- Small, focused PRs
- Protected main with required checks

## Common pitfalls

- Long-lived branches causing merge hell
- Giant PRs nobody can review
- Committing directly to main

## Related skills

- `git-advanced`
- `ci-cd-pipeline-design`
- `code-review-playbook`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
