---
name: backend-django
description: "Build Django apps: ORM, migrations, views, DRF, admin, security. Use for manage.py projects."
---

# Backend Django

**Category:** web  ·  **Requires (detect first):** python, pytest

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`
- `pytest`

## Key commands

```bash
python manage.py migrate
python manage.py test
python manage.py check --deploy
```

## Checklist

- Migrations reviewed and reversible
- select_related/prefetch_related to avoid N+1
- DEBUG off and security settings for prod

## Common pitfalls

- N+1 queries from lazy ORM access
- Leaving DEBUG=True in production
- Mass assignment via unfiltered serializers

## Related skills

- `python`
- `backend-fastapi`
- `sql`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
