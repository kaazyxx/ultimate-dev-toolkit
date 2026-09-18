---
name: python
description: Write, lint, format, type-check, test and package Python 3. Use for .py files, pyproject.toml/requirements.txt projects, and Python errors.
---

# Python

**Category:** languages  ·  **Requires (detect first):** python, ruff, black, mypy, pytest, pip

Typed, linted, tested Python in a clean virtual env.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `ruff`
- `black`
- `mypy`
- `pytest`
- `pip`

## Key commands

```bash
python -m venv .venv
ruff check .
black --check .
mypy .
pytest -q
```

## Checklist

- Work inside a virtual environment
- Type hints on public functions; mypy clean
- Tests pass; no bare except

## Common pitfalls

- Installing into system Python instead of a venv
- Mutable default arguments
- Catching Exception too broadly and hiding bugs

## Related skills

- `ml-pytorch`
- `data-pandas`
- `backend-fastapi`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
