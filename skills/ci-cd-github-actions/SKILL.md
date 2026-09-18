---
name: ci-cd-github-actions
description: "Build CI/CD with GitHub Actions: workflows, jobs, matrix, caching, secrets, reusable workflows. Use for .github/workflows."
---

# Ci Cd Github Actions

**Category:** devops  ·  **Requires (detect first):** gh

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gh`

## Key commands

```bash
gh workflow list
gh run watch
```

## Checklist

- Least-privilege GITHUB_TOKEN permissions
- Dependencies/actions pinned to SHA
- Caching for deps; matrix for coverage

## Common pitfalls

- pull_request_target with untrusted code (RCE risk)
- Secrets exposed to fork PRs
- Unpinned third-party actions

## Related skills

- `ci-cd-pipeline-design`
- `security-supply-chain`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
