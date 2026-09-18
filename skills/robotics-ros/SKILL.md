---
name: robotics-ros
description: "Build robotics software with ROS 2: nodes, topics, services, tf, launch, real-time constraints. Use for ROS packages. Detect ros2/colcon first."
---

# Robotics Ros

**Category:** scientific  ·  **Requires (detect first):** ros2, colcon

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `ros2`
- `colcon`

## Key commands

```bash
colcon build
ros2 topic list
ros2 run pkg node
```

## Common pitfalls

- tf frame/timing mismatches
- Blocking the executor/callback
- QoS mismatch dropping messages

## Related skills

- `embedded-c`
- `concurrency-patterns`
- `cpp`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
