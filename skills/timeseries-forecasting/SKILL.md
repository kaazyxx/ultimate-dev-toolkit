---
name: timeseries-forecasting
description: "Forecast time series: stationarity, seasonality, backtesting, classical vs ML models. Use for forecasting tasks."
---

# Timeseries Forecasting

**Category:** data-ml  ·  **Requires (detect first):** python

## Required tools & detection

Before acting, confirm these are installed (see the `environment-detection` skill). If a tool is missing, say so and suggest how to install it — never pretend it is present.

- `python`

## Checklist

- Time-based splits (no shuffling)
- Backtesting with rolling windows
- Baselines (naive/seasonal) compared

## Common pitfalls

- Random splits leaking the future
- Ignoring seasonality/trend
- No naive baseline

## Related skills

- `statistics-fundamentals`
- `ml-evaluation`
- `db-influxdb`

---

_Safety: destructive actions require explicit confirmation; secrets are redacted before output. See the `safe-execution` skill._
