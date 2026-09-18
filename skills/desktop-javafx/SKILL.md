---
name: desktop-javafx
description: "Build cross-platform desktop apps with JavaFX (Java/Kotlin): FXML, scene graph, properties. Use for JavaFX projects."
---

# Desktop Javafx

**Category:** platforms  ·  **Requires (detect first):** mvn, gradle

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `mvn`
- `gradle`

## Key commands

```bash
mvn javafx:run
```

## Checklist

- Long work off the JavaFX Application Thread
- Properties/bindings for reactive UI
- FXML/controllers separated

## Common pitfalls

- Blocking the FX Application Thread
- Updating UI from background threads

## Related skills

- `java`
- `kotlin`
- `desktop-qt`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
