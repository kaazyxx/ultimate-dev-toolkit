---
name: elixir
description: "Write, test and build Elixir (Mix, OTP, Phoenix): processes, supervision, immutability. Use for .ex/.exs files and mix.exs. Detect elixir/mix first."
---

# Elixir

**Category:** languages  ·  **Requires (detect first):** elixir, mix

Concurrent, fault-tolerant Elixir on the BEAM.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `elixir`
- `mix`

## Key commands

```bash
mix deps.get
mix test
mix format --check-formatted
mix credo
```

## Checklist

- Supervision tree designed for failure
- Pattern matching over conditionals
- credo/format clean

## Common pitfalls

- Doing heavy work in a single process (bottleneck)
- Unsupervised processes leaking on crash

## Related skills

- `erlang`
- `backend-phoenix`
- `functional-programming`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
