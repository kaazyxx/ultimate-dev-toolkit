---
name: llm-fine-tuning
description: "Fine-tune or adapt LLMs (LoRA/PEFT): data prep, training, evaluation, when NOT to fine-tune. Use when adapting models."
---

# Llm Fine Tuning

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Prompting/RAG ruled out first
- High-quality, deduplicated training data
- Held-out evaluation vs base model

## Common pitfalls

- Fine-tuning when prompting/RAG would do
- Overfitting to small datasets
- No eval vs the base model

## Related skills

- `llm-prompting`
- `ml-training-pipeline`
- `llm-evaluation`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
