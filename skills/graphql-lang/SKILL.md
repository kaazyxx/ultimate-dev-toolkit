---
name: graphql-lang
description: "Design GraphQL schemas (SDL): types, queries, mutations, subscriptions, evolution. Use for .graphql/.gql schema files."
---

# Graphql Lang

**Category:** languages  ·  **Requires (detect first):** npx graphql

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx graphql`

## Key commands

```bash
npx graphql-inspector validate schema.graphql
npx graphql-inspector diff old.graphql new.graphql
```

## Checklist

- Nullability modeled intentionally
- Backward-compatible schema changes
- Pagination pattern (connections) consistent

## Common pitfalls

- Breaking changes (removing fields/args)
- Overly nested types enabling deep queries
- Inconsistent nullability

## Related skills

- `backend-graphql`
- `api-design`
- `backend-rest-api`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
