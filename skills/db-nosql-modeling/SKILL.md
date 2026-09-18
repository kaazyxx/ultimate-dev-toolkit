---
name: db-nosql-modeling
description: "Model NoSQL data by access pattern rather than normalization: denormalization, embedding vs referencing. Use when designing document/key-value/wide-column schemas."
---

# Db Nosql Modeling

**Category:** databases

## Checklist

- Access patterns listed before modeling
- Denormalization tradeoffs deliberate
- Hot keys/partitions avoided

## Common pitfalls

- Relational normalization applied to NoSQL
- Unbounded arrays/documents
- Missing indexes for query patterns

## Related skills

- `db-mongodb`
- `db-dynamodb`
- `db-cassandra`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
