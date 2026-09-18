---
description: Define a reusable pipeline from a sequence of commands.
argument-hint: "<name> <steps>"
allowed-tools: Read, Write
---

Define a reusable pipeline from $ARGUMENTS using the `pipelines` skill. Capture the ordered steps, their on-error behavior, retries and timeouts, and where they can run in parallel. Save it (e.g. under `.udt/pipelines/`) and show how to run it with /pipeline:run.
