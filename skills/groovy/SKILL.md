---
name: groovy
description: Read and write Groovy, including Gradle build scripts and Jenkins pipelines. Use for .groovy files and Jenkinsfile.
---

# Groovy

**Category:** languages  ·  **Requires (detect first):** groovy, gradle

Dynamic JVM scripting for builds and pipelines.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `groovy`
- `gradle`

## Key commands

```bash
groovy script.groovy
gradle tasks
```

## Checklist

- Pipeline steps idempotent
- Secrets from credentials store, not literals
- Gradle logic kept declarative where possible

## Common pitfalls

- Dynamic typing errors surfacing only at runtime
- Hardcoded secrets in Jenkinsfiles

## Related skills

- `java`
- `ci-cd-jenkins`
- `gradle-build-tool`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
