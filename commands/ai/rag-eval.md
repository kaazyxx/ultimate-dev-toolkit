---
description: "Evaluate a RAG pipeline's retrieval and answer quality."
argument-hint: "[path]"
allowed-tools: Read, Grep, Glob, Bash
---

Evaluate the RAG pipeline in $ARGUMENTS using the `rag-evaluation` skill. Measure retrieval recall/precision, groundedness/faithfulness, and answer quality against a golden set. Report metrics and the weakest stage (chunking/embedding/retrieval/generation).
