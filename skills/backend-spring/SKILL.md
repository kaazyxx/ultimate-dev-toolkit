---
name: backend-spring
description: "Build Spring Boot services: controllers, services, JPA, security, config. Use for Spring Boot projects."
---

# Backend Spring

**Category:** web  ·  **Requires (detect first):** mvn, gradle

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `mvn`
- `gradle`

## Key commands

```bash
mvn spring-boot:run
mvn -q verify
```

## Checklist

- Layered architecture (controller/service/repo)
- Transactions scoped correctly
- Secrets externalized

## Common pitfalls

- Open-in-view causing lazy-load surprises
- Transactional boundaries wrong
- N+1 from JPA

## Related skills

- `java`
- `kotlin`
- `sql`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
