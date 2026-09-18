---
name: fsharp
description: "Write and build F# (.NET): immutability, discriminated unions, pattern matching, computation expressions. Use for .fs/.fsx files."
---

# Fsharp

**Category:** languages  ·  **Requires (detect first):** dotnet

Functional-first .NET with exhaustive pattern matching.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dotnet`

## Key commands

```bash
dotnet build
dotnet fsi script.fsx
dotnet test
```

## Checklist

- Domain modeled with DUs; make illegal states unrepresentable
- Pattern matches exhaustive
- Side effects isolated

## Common pitfalls

- Incomplete match warnings ignored
- Overusing mutable/imperative escape hatches

## Related skills

- `csharp`
- `haskell`
- `ocaml`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
