---
name: desktop-qt
description: "Build native desktop apps with Qt (C++/QML) or PySide/PyQt: widgets, signals/slots, event loop. Use for Qt projects."
---

# Desktop Qt

**Category:** platforms  ·  **Requires (detect first):** qmake, cmake

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `qmake`
- `cmake`

## Key commands

```bash
cmake -S . -B build && cmake --build build
```

## Checklist

- Signals/slots connected correctly
- Long work off the GUI thread
- Object ownership/parenting correct

## Common pitfalls

- Blocking the event loop
- Dangling pointers from wrong parenting
- Cross-thread widget access

## Related skills

- `cpp`
- `python`
- `desktop-gtk`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
