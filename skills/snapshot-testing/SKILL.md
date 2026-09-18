---
name: snapshot-testing
description: "Use snapshot tests wisely: UI/output regression, reviewing diffs, avoiding rubber-stamping. Use for output-shape regression."
---

# Snapshot Testing

**Category:** testing

## Checklist

- Snapshots small and reviewed on change
- Non-deterministic values normalized
- Not a substitute for behavior tests

## Common pitfalls

- Rubber-stamping snapshot updates
- Huge snapshots nobody reviews
- Flaky snapshots from timestamps/ids

## Related skills

- `web-component-testing`
- `testing-strategy`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
