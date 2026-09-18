---
name: nlp-fundamentals
description: "Process natural language: tokenization, embeddings, classification, NER, evaluation. Use for text/NLP tasks."
---

# Nlp Fundamentals

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Text normalized/tokenized consistently
- Class imbalance handled
- Evaluation on held-out data

## Common pitfalls

- Leakage from duplicate texts across splits
- Ignoring language/encoding issues
- Metric mismatch (accuracy on skewed labels)

## Related skills

- `llm-embeddings`
- `ml-evaluation`
- `data-cleaning`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
