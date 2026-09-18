---
name: tui-development
description: "Build terminal UIs (Textual, Bubble Tea, Ink, ratatui, blessed): layout, input, rendering, resize. Use for interactive terminal apps."
---

# Tui Development

**Category:** tooling

## Checklist

- Handles resize and no-TTY gracefully
- Keyboard navigation and help
- Renders on limited terminals

## Common pitfalls

- Assuming a specific terminal size/color
- Blocking the render loop
- No fallback when not a TTY

## Related skills

- `cli-design`
- `make-interfaces-feel-better`
- `go`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
