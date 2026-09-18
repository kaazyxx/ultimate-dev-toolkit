---
name: backend-grpc
description: "Build gRPC services with protobuf: service definitions, streaming, deadlines, errors. Use for .proto files and gRPC services."
---

# Backend Grpc

**Category:** web  ·  **Requires (detect first):** protoc, buf

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `protoc`
- `buf`

## Key commands

```bash
buf lint
buf generate
```

## Checklist

- Deadlines/timeouts set on calls
- Backward-compatible proto changes
- Status codes used correctly

## Common pitfalls

- Breaking proto changes (renumbered fields)
- No deadlines causing hangs

## Related skills

- `backend-go-http`
- `api-design`
- `backend-rest-api`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
