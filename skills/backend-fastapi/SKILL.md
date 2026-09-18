---
name: backend-fastapi
description: "Build FastAPI services: async endpoints, Pydantic models, dependency injection, OpenAPI. Use for FastAPI projects."
---

# Backend Fastapi

**Category:** web  ·  **Requires (detect first):** python, uvicorn, pytest

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `uvicorn`
- `pytest`

## Key commands

```bash
uvicorn app.main:app --reload
pytest -q
```

## Checklist

- Pydantic models validate all IO
- async used correctly (no blocking calls)
- Dependencies injected, not global

## Common pitfalls

- Blocking sync calls in async endpoints
- Returning ORM models instead of schemas
- N+1 queries

## Related skills

- `python`
- `backend-django`
- `backend-rest-api`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
