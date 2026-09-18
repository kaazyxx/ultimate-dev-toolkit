---
name: backend-graphql
description: "Design and build GraphQL APIs: schema, resolvers, N+1 via dataloader, auth. Use for GraphQL servers/schemas."
---

# Backend Graphql

**Category:** web  ·  **Requires (detect first):** npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npm`

## Key commands

```bash
npm run codegen
npm test
```

## Checklist

- DataLoader batches to avoid N+1
- Query depth/complexity limited
- Auth enforced per-field where needed

## Common pitfalls

- N+1 resolver queries
- Unbounded query depth (DoS)
- Over-fetching from resolvers

## Related skills

- `backend-rest-api`
- `backend-auth`
- `api-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
