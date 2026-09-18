---
name: desktop-gtk
description: "Build Linux desktop apps with GTK (C/Rust/Python/Vala): widgets, GObject, main loop. Use for GTK projects."
---

# Desktop Gtk

**Category:** platforms  ·  **Requires (detect first):** pkg-config

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `pkg-config`

## Key commands

```bash
pkg-config --modversion gtk4
```

## Checklist

- Main loop not blocked
- GObject memory/refs managed
- Async IO for long work

## Common pitfalls

- Blocking the GTK main loop
- Reference counting mistakes
- Threading GTK from the wrong thread

## Related skills

- `c`
- `rust`
- `desktop-qt`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
