---
name: llm-embeddings
description: "Use text/vector embeddings: models, similarity, vector databases, indexing, hybrid search. Use for semantic search/RAG."
---

# Llm Embeddings

**Category:** data-ml

## Checklist

- Embedding model matches domain/language
- Vector index (HNSW/IVF) tuned
- Hybrid (keyword+vector) where it helps

## Common pitfalls

- Mismatched embedding model at query vs index time
- Normalization/metric mismatch (cosine vs L2)
- Unbounded index cost

## Related skills

- `llm-rag`
- `db-elasticsearch`
- `nlp-fundamentals`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
