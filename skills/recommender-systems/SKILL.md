---
name: recommender-systems
description: "Build recommenders: collaborative/content filtering, ranking, cold start, offline/online eval. Use for recommendation features."
---

# Recommender Systems

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Temporal split for evaluation
- Cold-start strategy
- Ranking metrics (NDCG/recall@k)

## Common pitfalls

- Leaking future interactions
- Popularity bias dominating
- Offline metrics not reflecting online

## Related skills

- `ml-evaluation`
- `nlp-fundamentals`
- `ml-model-serving`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
