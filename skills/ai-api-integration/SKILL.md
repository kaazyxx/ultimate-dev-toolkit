---
name: ai-api-integration
description: "Integrate hosted AI APIs (Claude, OpenAI, etc.): auth, streaming, retries, cost, rate limits, caching. Use when calling AI provider APIs."
---

# Ai Api Integration

**Category:** data-ml

## Checklist

- Keys from secrets, never committed
- Retries/backoff on rate limits
- Streaming and token/cost tracking

## Common pitfalls

- API keys in client code or repos
- No retry/backoff on 429
- Unbounded token costs

## Related skills

- `llm-prompting`
- `backend-rate-limiting`
- `security-secrets`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
