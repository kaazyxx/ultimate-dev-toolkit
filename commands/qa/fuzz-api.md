---
description: Fuzz-test an API against its schema for robustness/security bugs.
argument-hint: "<openapi-spec|base-url>"
allowed-tools: Read, Bash
---

Fuzz the API in $ARGUMENTS using the `api-fuzzing` skill (schemathesis/RESTler). Generate malformed and edge-case inputs from the schema, exercise stateful/auth sequences, and report crashes, 5xx, and contract violations with reproductions.
