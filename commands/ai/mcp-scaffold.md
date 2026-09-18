---
description: Scaffold a new MCP server (tools/resources/transport).
argument-hint: "<name>"
allowed-tools: Read, Write, Edit, Bash
---

Scaffold an MCP server named per $ARGUMENTS using the `mcp-server-dev` skill. Set up the transport (stdio), a validated example tool, error-as-data handling and a README. Keep tools least-privilege (no unsafe shell/eval). Wire it so it runs, and show how to register it.
