---
description: Bring up / inspect a Docker Compose stack and verify health.
argument-hint: "[up|down|logs]"
allowed-tools: Bash, Read
---

Operate the Docker Compose stack per $ARGUMENTS using the `docker-compose` skill. Read the compose file, check healthchecks/dependencies, and run the requested action. For `down`, warn if it removes volumes with data. Report service health after `up`.
