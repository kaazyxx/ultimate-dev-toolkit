---
name: vala
description: Write Vala (compiles to C via GObject) for GNOME/GTK apps. Use for .vala files. Detect valac first.
---

# Vala

**Category:** languages  ·  **Requires (detect first):** valac

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `valac`

## Key commands

```bash
valac --pkg gtk+-3.0 app.vala
valac -C app.vala
```

## Checklist

- GObject memory/refs handled
- Packages (--pkg) declared
- Async/main loop not blocked

## Common pitfalls

- Reference-counting leaks
- Blocking the GLib main loop

## Related skills

- `c`
- `desktop-gtk`
- `cpp`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
