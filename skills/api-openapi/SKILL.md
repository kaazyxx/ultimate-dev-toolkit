---
name: api-openapi
description: "Design and use OpenAPI/Swagger specs: schema-first, validation, client/server codegen, docs. Use for REST API contracts."
---

# Api Openapi

**Category:** tooling  ·  **Requires (detect first):** npx

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx`

## Key commands

```bash
npx @redocly/cli lint openapi.yaml
npx openapi-generator-cli generate
```

## Checklist

- Spec is the source of truth
- Requests/responses validated against it
- Clients/docs generated from it

## Common pitfalls

- Spec drifting from implementation
- Hand-writing clients instead of generating
- Undocumented error responses

## Related skills

- `backend-rest-api`
- `api-design`
- `contract-testing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
