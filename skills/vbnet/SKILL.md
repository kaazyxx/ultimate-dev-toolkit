---
name: vbnet
description: Read and maintain VB.NET (.NET) code. Use for .vb files and legacy .NET projects. Detect dotnet before claiming support.
---

# Vbnet

**Category:** languages  ·  **Requires (detect first):** dotnet

Maintainable VB.NET interoperating with the .NET ecosystem.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dotnet`

## Key commands

```bash
dotnet build
dotnet test
```

## Checklist

- Option Strict On
- Nullability handled explicitly
- Async patterns not blocked

## Common pitfalls

- Option Strict Off allowing silent conversions
- Legacy On Error Resume Next hiding failures

## Related skills

- `csharp`
- `backend-dotnet`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
