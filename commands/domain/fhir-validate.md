---
description: Validate FHIR resources for conformance and PHI safety.
argument-hint: "<file-or-dir>"
allowed-tools: Read, Bash
---

Validate the FHIR resources in $ARGUMENTS using the `healthcare-fhir` skill. Check resource conformance/profiles and terminology, and flag any PHI that would leak into logs/analytics. Report issues and fixes. Defensive/compliance-aware.
