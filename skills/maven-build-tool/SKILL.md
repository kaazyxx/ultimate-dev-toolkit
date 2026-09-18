---
name: maven-build-tool
description: "Configure Maven builds: POM, lifecycle, plugins, dependency management, profiles. Use for pom.xml. Detect mvn first."
---

# Maven Build Tool

**Category:** tooling  ·  **Requires (detect first):** mvn

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `mvn`

## Key commands

```bash
mvn -q verify
mvn dependency:tree
```

## Checklist

- Dependency versions managed (BOM/dependencyManagement)
- Plugins pinned
- Profiles for env differences

## Common pitfalls

- Version conflicts (check dependency:tree)
- Unpinned plugin versions
- Overusing profiles

## Related skills

- `java`
- `gradle-build-tool`
- `security-dependencies`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
