---
description: Run and validate a scientific notebook reproducibly.
argument-hint: "<notebook.ipynb>"
allowed-tools: Read, Bash
---

Validate the notebook in $ARGUMENTS using the `jupyter-notebooks` skill. Run it top-to-bottom (Restart & Run All) to confirm reproducibility, flag hidden-state/out-of-order issues, and check for committed outputs/secrets. Report what actually ran.
