---
name: desktop-wpf
description: "Build Windows desktop apps with WPF/WinUI (C#/XAML): MVVM, data binding, commands. Use for WPF/WinUI projects."
---

# Desktop Wpf

**Category:** platforms  ·  **Requires (detect first):** dotnet

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dotnet`

## Key commands

```bash
dotnet build
dotnet run
```

## Checklist

- MVVM with proper binding
- Dispatcher used for UI updates
- Async off the UI thread

## Common pitfalls

- UI-thread blocking on async
- Binding errors swallowed silently
- Memory leaks from event handlers

## Related skills

- `csharp`
- `mobile-maui`
- `windows-admin`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
