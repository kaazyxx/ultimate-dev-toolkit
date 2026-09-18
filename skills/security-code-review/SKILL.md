---
name: security-code-review
description: "Review code specifically for security defects: taint flow, authz gaps, unsafe deserialization, injection sinks. Use as a security-focused review pass."
---

# Security Code Review

**Category:** security  ·  **Requires (detect first):** git

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `git`

## Key commands

```bash
git diff main...HEAD
```

## Checklist

- Untrusted input traced to sinks
- AuthZ checked on every sensitive path
- No unsafe deserialization/eval

## Common pitfalls

- Reviewing style while missing an injection sink
- Assuming the framework handles authorization

## Related skills

- `code-review-playbook`
- `security-audit`
- `security-input-validation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
