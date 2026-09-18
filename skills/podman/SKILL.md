---
name: podman
description: "Use Podman as a daemonless, rootless Docker alternative: pods, systemd integration. Use when podman is the container runtime. Detect podman first."
---

# Podman

**Category:** devops  ·  **Requires (detect first):** podman

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `podman`

## Key commands

```bash
podman build -t app .
podman run --rm app
podman generate systemd
```

## Checklist

- Rootless mode understood
- Pods vs containers used appropriately
- Compatibility differences with Docker noted

## Common pitfalls

- Assuming full Docker CLI parity
- Rootless networking/port surprises

## Related skills

- `docker-fundamentals`
- `kubernetes-core`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
