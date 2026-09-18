---
name: erlang
description: "Write and build Erlang/OTP: actors, supervision, hot code. Use for .erl files and rebar3 projects. Detect erl/rebar3 first."
---

# Erlang

**Category:** languages  ·  **Requires (detect first):** erl, rebar3

Battle-tested concurrent Erlang/OTP.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `erl`
- `rebar3`

## Key commands

```bash
rebar3 compile
rebar3 eunit
rebar3 dialyzer
```

## Checklist

- OTP behaviours used (gen_server/supervisor)
- Dialyzer type checks pass
- Let-it-crash with proper supervision

## Common pitfalls

- Unsupervised processes
- Blocking a gen_server on long work

## Related skills

- `elixir`
- `functional-programming`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
