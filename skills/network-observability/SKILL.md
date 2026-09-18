---
name: network-observability
description: "Observe networks: packet capture (tcpdump/Wireshark), flow logs, latency/loss, tracing. Use to diagnose network behavior."
---

# Network Observability

**Category:** networking  ·  **Requires (detect first):** tcpdump

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `tcpdump`

## Key commands

```bash
tcpdump -i any -n 'port 443' -c 50
```

## Common pitfalls

- Capturing without filters (noise/overhead)
- Ignoring encryption limits on payload visibility
- No baseline to compare

## Related skills

- `networking-fundamentals`
- `observability`
- `log-analysis`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
