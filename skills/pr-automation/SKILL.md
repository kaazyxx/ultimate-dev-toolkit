---
name: pr-automation
description: "Automate pull requests: templates, auto-labeling, size checks, required checks, merge queues, bots. Use to streamline PR flow."
---

# Pr Automation

**Category:** devex  ·  **Requires (detect first):** gh

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gh`

## Key commands

```bash
gh pr create --fill
```

## Common pitfalls

- Auto-merge without required checks
- Giant PRs with no size gate
- Bot noise drowning signal

## Related skills

- `ci-cd-github-actions`
- `git-workflow-branching`
- `code-review-playbook`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
