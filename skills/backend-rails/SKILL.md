---
name: backend-rails
description: "Build Ruby on Rails apps: ActiveRecord, migrations, controllers, jobs. Use for Rails projects."
---

# Backend Rails

**Category:** web  ·  **Requires (detect first):** ruby, bundle

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ruby`
- `bundle`

## Key commands

```bash
bin/rails db:migrate
bin/rails test
bundle exec rubocop
```

## Checklist

- includes to avoid N+1
- Strong parameters enforced
- Background jobs idempotent

## Common pitfalls

- N+1 queries
- Fat controllers/models
- Callbacks with side effects hard to test

## Related skills

- `ruby`
- `sql`
- `backend-queues`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
