---
name: db-mongodb
description: "Model, query and index MongoDB: documents, aggregation pipeline, schema design. Use for MongoDB connections. Detect mongosh first."
---

# Db Mongodb

**Category:** databases  ·  **Requires (detect first):** mongosh

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `mongosh`

## Key commands

```bash
mongosh --eval "db.runCommand({ping:1})"
mongosh --eval "db.coll.explain('executionStats').find({})"
```

## Checklist

- Indexes support query + sort
- Schema modeled for access patterns
- Aggregation stages ordered for efficiency ($match early)

## Common pitfalls

- Unbounded document growth (16MB limit)
- Missing indexes causing collection scans
- Over-normalizing like a relational DB

## Related skills

- `db-nosql-modeling`
- `backend-node`
- `db-indexing`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
