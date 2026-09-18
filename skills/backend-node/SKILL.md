---
name: backend-node
description: "Build Node.js backends: async IO, streams, process/cluster, env config. Use for Node server projects."
---

# Backend Node

**Category:** web  ·  **Requires (detect first):** node, npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `node`
- `npm`

## Key commands

```bash
node server.mjs
npm test
```

## Checklist

- Graceful shutdown on SIGTERM
- No blocking the event loop
- Config from env, validated at boot

## Common pitfalls

- Blocking the event loop with sync CPU work
- Unhandled promise rejections crashing the process
- Leaking secrets in logs

## Related skills

- `backend-express`
- `backend-nestjs`
- `javascript`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
