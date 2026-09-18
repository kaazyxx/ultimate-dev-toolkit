---
description: Create a mock server/stubs from an API spec for development.
argument-hint: "[spec-file]"
allowed-tools: Read, Write, Bash
---

Create mocks for the API in $ARGUMENTS using the `api-openapi` skill. Generate stub responses matching the schema (from an OpenAPI spec if present) so the frontend/clients can develop against them. Keep example data realistic but synthetic.
