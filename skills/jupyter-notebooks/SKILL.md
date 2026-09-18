---
name: jupyter-notebooks
description: "Use Jupyter notebooks well: reproducible order, cleared outputs in VCS, kernel hygiene, promotion to scripts. Use for .ipynb work."
---

# Jupyter Notebooks

**Category:** data-ml  ·  **Requires (detect first):** jupyter

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `jupyter`

## Key commands

```bash
jupyter nbconvert --to script notebook.ipynb
```

## Checklist

- Runs top-to-bottom cleanly (Restart & Run All)
- Outputs cleared before committing
- Production code moved out of notebooks

## Common pitfalls

- Hidden state from out-of-order execution
- Committing bulky outputs/secrets
- Notebooks as production pipelines

## Related skills

- `python`
- `ml-mlops`
- `data-science-eda`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
