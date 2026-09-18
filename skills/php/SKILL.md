---
name: php
description: Write, lint, analyze and test PHP (8+). Use for .php files, composer.json projects, Laravel/Symfony code.
---

# Php

**Category:** languages  ·  **Requires (detect first):** php, composer, vendor/bin/phpstan, vendor/bin/php-cs-fixer

Typed, PSR-compliant, statically analyzed PHP.

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `php`
- `composer`
- `vendor/bin/phpstan`
- `vendor/bin/php-cs-fixer`

## Key commands

```bash
php -l file.php
vendor/bin/phpstan analyse
vendor/bin/php-cs-fixer fix --dry-run
composer test
```

## Checklist

- declare(strict_types=1) used
- Static analysis (phpstan/psalm) clean
- No SQL built by string concatenation

## Common pitfalls

- SQL injection via concatenated queries
- Loose == comparisons
- Missing input validation on superglobals

## Related skills

- `backend-laravel`
- `sql`
- `security-web`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
