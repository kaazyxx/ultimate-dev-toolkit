---
name: mobile-maui
description: "Build cross-platform apps with .NET MAUI: XAML, MVVM, platform handlers. Use for MAUI projects. Detect dotnet first."
---

# Mobile Maui

**Category:** platforms  ·  **Requires (detect first):** dotnet

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dotnet`

## Key commands

```bash
dotnet build
dotnet test
```

## Checklist

- MVVM separation
- Platform-specific code via handlers
- UI thread respected

## Common pitfalls

- Business logic in code-behind
- Blocking the UI thread
- Platform quirks ignored

## Related skills

- `csharp`
- `desktop-wpf`
- `mobile-flutter`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
