---
name: blender-mcp
description: "Drive Blender from Claude through the Blender MCP server (BlenderMCP): create and edit scenes/objects, assign materials and textures, import PolyHaven/Hyper3D assets, run Python in Blender, and render. Use when controlling Blender programmatically via MCP. Requires Blender plus the BlenderMCP add-on and the blender-mcp server actually installed and connected."
---

# Blender Mcp

**Category:** 3d-graphics  ·  **Requires (detect first):** blender, uvx, blender-mcp

Control a running Blender instance over MCP: scene/object edits, materials, assets, Python and renders.

## When to use

- When the task is to build/modify a 3D scene or material in Blender via MCP
- When importing assets (PolyHaven HDRIs/textures/models) or running Blender Python remotely
- When applying the texture-3d workflow inside Blender through the MCP bridge

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `blender`
- `uvx`
- `blender-mcp`

## Workflow

1. Confirm the setup exists: Blender installed, the BlenderMCP add-on enabled, and the `blender-mcp` server available (e.g. `uvx blender-mcp`). If any piece is missing, say so and give the install step — do not pretend it is connected.
2. In Blender's 3D viewport sidebar (N) open the BlenderMCP tab and click 'Connect to MCP server' so the add-on's socket server is listening.
3. Register the server with Claude Code (mcpServers entry) and confirm the tools appear before issuing commands.
4. Inspect scene state first (get_scene_info / get_object_info), then make small, reversible edits; save the .blend before large changes.
5. For textures/materials, follow the `texture-3d` skill (correct color spaces, PBR maps); render and review the result.

## Key commands

```bash
uvx blender-mcp                 # run the Blender MCP server (bridges MCP <-> the Blender add-on)
blender --version              # verify Blender is installed
blender -b -P script.py        # headless Blender Python as a fallback when MCP is not connected
```

## Checklist

- Blender is open with the BlenderMCP add-on connected (socket listening)
- Scene inspected before mutating; .blend saved before big operations
- Edits are small and reversible; heavy/long operations don't block indefinitely

## Common pitfalls

- Sending commands while the add-on is not connected (server can't reach Blender)
- Assuming assets/Python execute instantly — some operations are slow or block the UI
- Overwriting or clearing the scene without saving first
- Treating any AI-generated Blender Python as trusted — review it before running

## Setup (once)

1. **Install Blender** (3.x/4.x) and confirm `blender --version`.
2. **Install the BlenderMCP add-on** (from the BlenderMCP project) via Edit > Preferences > Add-ons > Install, then enable it.
3. **Run the server**: `uvx blender-mcp` (needs `uv`/Python) — or add it to your MCP client config.
4. In Blender, open the **BlenderMCP** sidebar tab and click **Connect to MCP server**.

## Typical tools exposed

`get_scene_info`, `get_object_info`, `execute_blender_code` (run Python in Blender), material/texture assignment, and asset import (PolyHaven, optional Hyper3D). Always inspect before mutating, and keep a saved `.blend` as a restore point.

> This plugin also declares a `blender` MCP connector in `.claude-plugin/plugin.json` (via `uvx blender-mcp`). It only functions when Blender is open with the add-on connected; otherwise the tools are simply unavailable — which is honest, not broken.

## Related skills

- `texture-3d`
- `ai-api-integration`
- `llm-agents`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
