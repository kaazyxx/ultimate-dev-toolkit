---
name: gradle-build-tool
description: "Configure Gradle builds (Groovy/Kotlin DSL): tasks, dependencies, caching, multi-project. Use for build.gradle(.kts). Detect gradle first."
---

# Gradle Build Tool

**Category:** tooling  ·  **Requires (detect first):** gradle

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `gradle`

## Key commands

```bash
gradle tasks
gradle build --scan
gradle --refresh-dependencies
```

## Checklist

- Build cache enabled
- Version catalogs for deps
- Configuration avoidance (lazy tasks)

## Common pitfalls

- Slow builds from no caching
- Version conflicts across modules
- Heavy work at configuration time

## Related skills

- `java`
- `kotlin`
- `maven-build-tool`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
