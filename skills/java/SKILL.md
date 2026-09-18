---
name: java
description: Write, build and test Java (Maven/Gradle), Spring Boot or plain JVM. Use for .java files, pom.xml/build.gradle projects and Java build errors.
---

# Java

**Category:** languages  ·  **Requires (detect first):** java, javac, mvn, gradle

Idiomatic, well-tested Java built with Maven or Gradle.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `java`
- `javac`
- `mvn`
- `gradle`

## Key commands

```bash
mvn -q verify
gradle build
java -version
```

## Checklist

- Build tool detected (Maven vs Gradle)
- Null-safety and resource closing (try-with-resources)
- Tests (JUnit) green

## Common pitfalls

- NullPointerExceptions from unchecked returns
- Leaking resources without try-with-resources
- Mutable static state

## Related skills

- `kotlin`
- `backend-spring`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
