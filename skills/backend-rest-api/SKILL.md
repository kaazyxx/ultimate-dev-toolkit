---
name: backend-rest-api
description: "Design RESTful APIs: resources, status codes, versioning, pagination, idempotency, errors. Use when designing/reviewing HTTP APIs."
---

# Backend Rest Api

**Category:** web

## Checklist

- Correct status codes and methods
- Pagination + filtering for collections
- Idempotent PUT/DELETE; consistent error shape

## Common pitfalls

- 200 for everything including errors
- Unbounded list endpoints
- Breaking changes without versioning

## Related skills

- `api-design`
- `backend-graphql`
- `api-openapi`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
