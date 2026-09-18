---
name: backend-go-http
description: "Build Go HTTP services with net/http or chi/gin: handlers, middleware, context. Use for Go web services."
---

# Backend Go Http

**Category:** web  ·  **Requires (detect first):** go

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `go`

## Key commands

```bash
go run .
go test ./... -race
```

## Checklist

- Context propagated with timeouts
- Errors returned, not panicked
- Graceful shutdown

## Common pitfalls

- Ignoring request context cancellation
- Global mutable state without sync
- Leaking goroutines per request

## Related skills

- `go`
- `backend-rest-api`
- `backend-grpc`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
