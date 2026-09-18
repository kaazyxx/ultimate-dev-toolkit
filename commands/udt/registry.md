---
description: Search and list all available UDT commands by keyword.
argument-hint: "[keyword]"
allowed-tools: Read, Glob, Grep
---

Act as the UDT command registry.

- List or search commands by scanning `commands/**/*.md` frontmatter (id = /<folder>:<file>).
- If $ARGUMENTS is given, filter by matching the keyword against category, name and description; otherwise group everything by category.
- Output each as `/<category>:<name>` with its one-line description. Suggest the closest match if nothing matches.
