---
name: load-balancing
description: "Design load balancing and traffic management: L4/L7, algorithms, health checks, sticky sessions. Use when distributing traffic."
---

# Load Balancing

**Category:** devops

## Checklist

- Health checks remove bad instances
- Algorithm matches workload
- Timeouts/retries bounded

## Common pitfalls

- Retries amplifying an outage (retry storm)
- Sticky sessions defeating scaling
- No connection draining on deploy

## Related skills

- `nginx-config`
- `deployment-strategies`
- `sre-slo`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
