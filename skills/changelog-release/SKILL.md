---
name: changelog-release
description: "Automate changelogs and releases (Conventional Commits, changesets, semantic-release): notes, tags, artifacts. Use when cutting releases."
---

# Changelog Release

**Category:** tooling  ·  **Requires (detect first):** npx

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx`

## Key commands

```bash
npx changeset
npx semantic-release
```

## Checklist

- Changelog generated from commits
- Release tagged and artifacts published
- Notes readable by users

## Common pitfalls

- Hand-written changelogs that rot
- Inconsistent commit messages breaking automation

## Related skills

- `versioning-semver`
- `git-workflow-branching`
- `ci-cd-pipeline-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
