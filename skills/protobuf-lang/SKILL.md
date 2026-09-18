---
name: protobuf-lang
description: "Define Protocol Buffers schemas: messages, fields, evolution rules, codegen. Use for .proto files. Detect protoc/buf first."
---

# Protobuf Lang

**Category:** languages  ·  **Requires (detect first):** protoc, buf

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `protoc`
- `buf`

## Key commands

```bash
buf lint
buf breaking --against '.git#branch=main'
buf generate
```

## Checklist

- Field numbers stable (never reused)
- Backward-compatible changes only
- Well-known types used appropriately

## Common pitfalls

- Renumbering/reusing field numbers (breaks wire compat)
- Changing field types incompatibly
- Required fields in proto2 pitfalls

## Related skills

- `backend-grpc`
- `api-design`
- `contract-testing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
