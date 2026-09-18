---
name: git-history-rewrite
description: "Safely rewrite git history: remove secrets/large files (filter-repo/BFG), squash, reorder. Use to purge sensitive data or clean history. Destructive - confirm first."
---

# Git History Rewrite

**Category:** tooling  ·  **Requires (detect first):** git, git-filter-repo

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`
- `git-filter-repo`

## Key commands

```bash
git filter-repo --path secrets.txt --invert-paths
```

## Checklist

- Backup/clone before rewriting
- Coordinate with collaborators
- Rotate any exposed secrets regardless

## Common pitfalls

- Rewriting shared history without coordination
- Assuming removal from history un-leaks a secret (rotate it)
- No backup before a destructive rewrite

## Related skills

- `security-secrets`
- `git-advanced`
- `safe-execution`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
