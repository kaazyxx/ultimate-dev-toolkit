---
name: git-advanced
description: "Use advanced git: interactive rebase, cherry-pick, bisect, reflog, worktrees, submodules, recovery. Use for complex git operations."
---

# Git Advanced

**Category:** tooling  ·  **Requires (detect first):** git

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`

## Key commands

```bash
git rebase -i HEAD~5
git reflog
git worktree add ../feat feature
```

## Checklist

- Understand the operation before running it
- reflog available to recover
- History rewrites only on unshared branches

## Common pitfalls

- Rewriting shared history and breaking collaborators
- Losing commits without checking reflog
- Force-pushing over teammates' work

## Related skills

- `git-history-rewrite`
- `git-workflow-branching`
- `safe-execution`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
