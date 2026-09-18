---
name: backend-phoenix
description: Build Phoenix (Elixir) web apps and LiveView. Use for Phoenix projects.
---

# Backend Phoenix

**Category:** web  ·  **Requires (detect first):** elixir, mix

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `elixir`
- `mix`

## Key commands

```bash
mix phx.server
mix test
```

## Checklist

- Contexts organize domain logic
- LiveView state minimal and serializable
- Ecto changesets validate

## Common pitfalls

- Heavy work in LiveView process blocking UI
- Skipping changeset validation

## Related skills

- `elixir`
- `erlang`
- `sql`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
