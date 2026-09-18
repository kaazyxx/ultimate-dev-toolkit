---
name: backend-dotnet
description: "Build ASP.NET Core services: minimal APIs/controllers, DI, EF Core, middleware. Use for .NET web projects."
---

# Backend Dotnet

**Category:** web  ·  **Requires (detect first):** dotnet

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `dotnet`

## Key commands

```bash
dotnet run
dotnet test
```

## Checklist

- DI lifetimes correct (scoped/singleton)
- EF queries not tracking when read-only
- Config/secrets via options pattern

## Common pitfalls

- Captured dependency (singleton holding scoped)
- EF Core N+1 and cartesian explosions

## Related skills

- `csharp`
- `sql`
- `backend-auth`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
