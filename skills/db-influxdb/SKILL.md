---
name: db-influxdb
description: "Store and query time-series data with InfluxDB: measurements, tags, retention. Use for time-series/metrics storage. Detect influx first."
---

# Db Influxdb

**Category:** databases  ·  **Requires (detect first):** influx

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `influx`

## Key commands

```bash
influx ping
```

## Checklist

- Tags vs fields chosen correctly (tags indexed)
- Retention policies set
- Cardinality controlled

## Common pitfalls

- High tag cardinality exploding series
- Using fields where tags belong (or vice versa)

## Related skills

- `observability`
- `db-clickhouse`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
