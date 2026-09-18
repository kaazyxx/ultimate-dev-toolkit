---
name: backend-laravel
description: "Build Laravel apps: Eloquent, migrations, routing, middleware, queues. Use for artisan projects."
---

# Backend Laravel

**Category:** web  ·  **Requires (detect first):** php, composer

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `php`
- `composer`

## Key commands

```bash
php artisan migrate
php artisan test
vendor/bin/phpstan analyse
```

## Checklist

- Eloquent eager loading to avoid N+1
- Mass assignment guarded ($fillable)
- Validation via form requests

## Common pitfalls

- N+1 from lazy relations
- Unguarded mass assignment
- Secrets committed in .env

## Related skills

- `php`
- `sql`
- `security-web`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
