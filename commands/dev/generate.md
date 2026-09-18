---
description: "Generate new code that matches the project's existing conventions."
argument-hint: "<what to build>"
allowed-tools: Read, Grep, Glob, Edit, Write
---

Generate the code described in $ARGUMENTS using the `code-generation` skill.

First read nearby files to learn naming, structure, error handling and libraries. Reuse existing utilities; do not introduce new dependencies unless necessary (and say so). Write the minimal code that satisfies the request, wire it in, and add or update a test. Then run lint/tests if available and report the result honestly.
