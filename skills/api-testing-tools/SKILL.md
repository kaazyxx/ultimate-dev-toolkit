---
name: api-testing-tools
description: "Test and explore APIs with curl/httpie/Postman/Bruno/Hurl: requests, collections, assertions, CI. Use for manual/automated API testing."
---

# Api Testing Tools

**Category:** tooling  ·  **Requires (detect first):** curl, http

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `curl`
- `http`

## Key commands

```bash
curl -s -X POST localhost:8080/api -d '{}' -H 'content-type: application/json'
http GET localhost:8080/health
```

## Checklist

- Collections version-controlled
- Assertions on status + body
- Runs in CI (newman/hurl)

## Common pitfalls

- Manual testing that isn't repeatable
- Secrets committed in collections
- No negative-path tests

## Related skills

- `backend-rest-api`
- `api-openapi`
- `e2e-testing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
