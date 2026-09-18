---
name: performance-profiling
description: Find and fix real performance bottlenecks with measurement (profiling, benchmarks) rather than guesswork, covering CPU, memory, IO and algorithmic complexity. Use when something is slow.
---

# Performance Profiling

**Category:** engineering

Measure first. Optimize the proven hotspot, then measure again.

## When to use

- When code, a build or a request is measurably slow
- Before optimizing, to locate the actual bottleneck
- To catch memory leaks or accidental O(n^2) paths

## Workflow

1. Reproduce the slow path with a repeatable benchmark.
2. Profile to find where time/memory actually goes (do not guess).
3. Fix the dominant cost (often algorithmic or IO, not micro-optimizations).
4. Re-benchmark to prove the improvement; guard it with a perf test if it matters.

## Checklist

- Bottleneck identified by measurement
- Improvement proven by before/after numbers
- No correctness regression introduced

## Common pitfalls

- Micro-optimizing code that is not the bottleneck
- Optimizing without a baseline measurement

## Related skills

- `observability`
- `benchmarking`
- `debugging`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
