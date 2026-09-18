---
name: backend-express
description: "Build Express APIs: routing, middleware, error handling, validation. Use for Express projects."
---

# Backend Express

**Category:** web  ·  **Requires (detect first):** node, npm

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `node`
- `npm`

## Key commands

```bash
node app.js
npm test
```

## Checklist

- Central error-handling middleware
- Input validated (zod/joi)
- Security middleware (helmet, rate limit)

## Common pitfalls

- Missing async error propagation to error middleware
- No input validation
- CORS misconfigured wide open

## Related skills

- `backend-node`
- `backend-auth`
- `security-web`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
