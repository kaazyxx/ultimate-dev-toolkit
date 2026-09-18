---
description: Evaluate an LLM prompt against cases and report results.
argument-hint: "[prompt-file]"
allowed-tools: Read, Bash
---

Evaluate the prompt in $ARGUMENTS using the `llm-evaluation`/`llm-prompting` skills. Define or load a small golden set, run the prompt over the cases, and report where it passes/fails with a rubric. Recommend concrete prompt fixes. Don't vibe-check — measure.
