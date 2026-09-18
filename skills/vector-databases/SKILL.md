---
name: vector-databases
description: "Operate vector databases (Pinecone/Weaviate/Qdrant/pgvector/Milvus): indexes (HNSW/IVF), metadata filters, hybrid search, cost. Use for semantic search/RAG storage."
---

# Vector Databases

**Category:** ai

## Checklist

- Index type/params tuned for recall vs cost
- Metadata filtering + hybrid search where useful
- Embedding model consistent at index/query

## Common pitfalls

- Mismatched embedding model index vs query
- Unbounded index growth/cost
- Wrong distance metric (cosine vs L2)

## Related skills

- `llm-embeddings`
- `llm-rag`
- `db-postgres`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
