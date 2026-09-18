---
name: ci-cd-gitlab
description: "Build CI/CD with GitLab CI: stages, jobs, rules, artifacts, caches, environments. Use for .gitlab-ci.yml."
---

# Ci Cd Gitlab

**Category:** devops  ·  **Requires (detect first):** glab

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `glab`

## Key commands

```bash
glab ci lint
glab ci status
```

## Checklist

- Stages and needs model the DAG
- Artifacts/caches scoped correctly
- Protected variables for secrets

## Common pitfalls

- Leaking protected variables to unprotected branches
- Overusing global before_script

## Related skills

- `ci-cd-pipeline-design`
- `ci-cd-github-actions`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
