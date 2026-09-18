---
name: backend-flask
description: "Build Flask apps: blueprints, extensions, request handling, config. Use for Flask projects."
---

# Backend Flask

**Category:** web  ·  **Requires (detect first):** python, pytest

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `pytest`

## Key commands

```bash
flask run
pytest -q
```

## Checklist

- App factory pattern; config per environment
- Input validated; CSRF for forms
- Blueprints organize routes

## Common pitfalls

- Global app state across requests
- Debug mode enabled in production

## Related skills

- `python`
- `backend-fastapi`
- `security-web`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
