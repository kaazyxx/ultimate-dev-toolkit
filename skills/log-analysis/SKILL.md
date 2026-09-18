---
name: log-analysis
description: "Analyze logs to find root cause: parsing, grep/jq/awk, timelines, correlation across services. Use when investigating incidents from logs."
---

# Log Analysis

**Category:** devops  ·  **Requires (detect first):** jq, rg, awk

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `jq`
- `rg`
- `awk`

## Key commands

```bash
rg -n 'ERROR' app.log | tail
jq 'select(.level=="error")' app.jsonl
```

## Checklist

- Timeline reconstructed across sources
- Correlation ids followed end-to-end
- Signal separated from noise

## Common pitfalls

- Grepping only for ERROR and missing the real cause upstream
- Ignoring timezones when correlating

## Related skills

- `observability-logging`
- `debugging`
- `incident-response`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
