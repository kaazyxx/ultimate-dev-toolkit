---
name: db-neo4j
description: "Model and query graphs with Neo4j/Cypher: nodes, relationships, traversals. Use for Cypher and Neo4j connections. Detect cypher-shell first."
---

# Db Neo4j

**Category:** databases  ·  **Requires (detect first):** cypher-shell

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `cypher-shell`

## Key commands

```bash
cypher-shell "MATCH (n) RETURN count(n);"
```

## Checklist

- Indexes on lookup properties
- Traversals bounded in depth
- Relationships modeled meaningfully

## Common pitfalls

- Unbounded variable-length paths
- Cartesian products from disconnected patterns

## Related skills

- `sql`
- `db-nosql-modeling`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
