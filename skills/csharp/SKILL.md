---
name: csharp
description: "Write, build and test C# (.NET): async/await, LINQ, nullable reference types. Use for .cs files, .csproj/.sln projects and .NET build errors."
---

# Csharp

**Category:** languages  ·  **Requires (detect first):** dotnet

Modern, nullable-aware, async-correct C#.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dotnet`

## Key commands

```bash
dotnet build
dotnet test
dotnet format --verify-no-changes
```

## Checklist

- Nullable reference types enabled
- async all the way (no .Result/.Wait deadlocks)
- IDisposable disposed (using)

## Common pitfalls

- Blocking on async with .Result causing deadlocks
- Ignoring nullable warnings
- LINQ multiple-enumeration

## Related skills

- `fsharp`
- `backend-dotnet`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
