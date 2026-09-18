---
name: db-dynamodb
description: "Model DynamoDB with single-table design: partition/sort keys, GSIs, access patterns. Use for DynamoDB. Detect aws cli first."
---

# Db Dynamodb

**Category:** databases  ·  **Requires (detect first):** aws

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `aws`

## Key commands

```bash
aws dynamodb describe-table --table-name T
```

## Checklist

- Access patterns enumerated before modeling
- Partition key spreads load evenly
- GSIs for alternate queries

## Common pitfalls

- Hot partitions from low-cardinality keys
- Scans instead of queries
- Ignoring item size / RCU-WCU cost

## Related skills

- `db-nosql-modeling`
- `cloud-aws`
- `db-cassandra`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
