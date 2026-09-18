---
name: ruby
description: Write, lint, format and test Ruby (and Rails) code. Use for .rb files, Gemfile projects, and RSpec/Minitest suites.
---

# Ruby

**Category:** languages  ·  **Requires (detect first):** ruby, bundle, rubocop, rspec

Idiomatic, RuboCop-clean, well-tested Ruby.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ruby`
- `bundle`
- `rubocop`
- `rspec`

## Key commands

```bash
ruby -c file.rb
bundle exec rubocop
bundle exec rspec
```

## Checklist

- RuboCop clean
- Tests (RSpec/Minitest) green
- No mass-assignment/security cops ignored

## Common pitfalls

- Monkey-patching core classes globally
- N+1 queries in Rails
- Ignoring RuboCop security warnings

## Related skills

- `backend-rails`
- `sql`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
