---
name: data-versioning
description: "Version datasets and pipelines (DVC/LakeFS): reproducibility, lineage, large-file handling. Use for reproducible data/ML."
---

# Data Versioning

**Category:** data-ml  ·  **Requires (detect first):** dvc

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dvc`

## Key commands

```bash
dvc add data/
dvc repro
dvc pull
```

## Common pitfalls

- Committing large files to git
- Irreproducible runs (unversioned data)
- Broken lineage between stages

## Related skills

- `ml-experiment-tracking`
- `ml-mlops`
- `git-advanced`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
