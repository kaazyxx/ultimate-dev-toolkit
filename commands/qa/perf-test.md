---
description: Design and run a load/perf test with regression thresholds.
argument-hint: "<target-url>"
allowed-tools: Read, Bash
---

Build a performance test for $ARGUMENTS using the `performance-testing` skill (k6). Model a realistic load profile, assert p95/p99 thresholds (not averages), and report a pass/fail suitable as a CI gate.
