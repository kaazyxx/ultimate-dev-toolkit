---
name: mcp-server-dev
description: "Build MCP (Model Context Protocol) servers: tools, resources, prompts, transports (stdio/SSE), schemas. Use when creating an MCP server for Claude/agents."
---

# Mcp Server Dev

**Category:** ai  ·  **Requires (detect first):** npx, node

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `npx`
- `node`

## Key commands

```bash
npx @modelcontextprotocol/inspector
node server.mjs
```

## Checklist

- Tool inputs schema-validated
- Errors returned as data, not crashes
- Least-privilege; no unsafe shell/eval

## Common pitfalls

- Unvalidated tool inputs
- Blocking the transport / no timeouts
- Exposing dangerous capabilities without guards

## Related skills

- `ai-api-integration`
- `llm-agents`
- `api-design`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
