---
name: db-cassandra
description: "Model and query Cassandra/ScyllaDB: partition keys, denormalization, CQL. Use for CQL and Cassandra connections. Detect cqlsh first."
---

# Db Cassandra

**Category:** databases  ·  **Requires (detect first):** cqlsh

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `cqlsh`

## Key commands

```bash
cqlsh -e "DESCRIBE KEYSPACES;"
```

## Checklist

- Tables designed per query (query-first)
- Partition keys bound partition size
- No unbounded partitions

## Common pitfalls

- Large/hot partitions
- Secondary indexes misused
- ALLOW FILTERING in production

## Related skills

- `db-nosql-modeling`
- `db-dynamodb`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
