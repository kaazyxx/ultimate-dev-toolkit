---
name: db-elasticsearch
description: "Index and search with Elasticsearch/OpenSearch: mappings, analyzers, queries, aggregations. Use for ES/OpenSearch clusters. Detect connectivity first."
---

# Db Elasticsearch

**Category:** databases  ·  **Requires (detect first):** curl

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `curl`

## Key commands

```bash
curl -s localhost:9200/_cluster/health
```

## Checklist

- Explicit mappings for critical fields
- Analyzers match search needs
- Shards/replicas sized appropriately

## Common pitfalls

- Mapping explosion from dynamic fields
- Deep pagination (use search_after)
- Using it as the system of record

## Related skills

- `db-mongodb`
- `observability`
- `web-seo`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
