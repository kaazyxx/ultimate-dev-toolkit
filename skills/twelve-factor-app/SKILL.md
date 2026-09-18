---
name: twelve-factor-app
description: "Apply the twelve-factor methodology: config in env, stateless processes, logs as streams, dev/prod parity. Use for cloud-native apps."
---

# Twelve Factor App

**Category:** architecture

## Checklist

- Config in env, not code
- Stateless, disposable processes
- Logs to stdout as event streams

## Common pitfalls

- Local state assumed across restarts
- Config baked into images
- Dev/prod drift

## Related skills

- `env-config-management`
- `cloud-serverless`
- `deployment-strategies`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
