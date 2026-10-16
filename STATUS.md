# america-fun — Build Status

**Date:** 2026-10-16
**Status:** GREEN — all checks pass

## Build

- `cargo build` succeeds (22 warnings — all dead-code in service modules reserved for live-data mode)
- No integration conflicts between A3/A4 parallel work — modules composed cleanly

## Server Boot

- Server boots on port 8787 in seed data mode
- RocksDB opens and loads **18 seed collections**
- ClickHouse gracefully falls back (not running locally — expected)
- **24 route groups** mounted via inventory auto-registration
- Static file fallback serves the cloned frontend

## Smoke Test — 26/26 passed

| Endpoint | Status |
|---|---|
| GET /api/_health | 200 (validated: ok=true) |
| GET /api/_branding | 200 (validated: name present) |
| GET / | 200 (serves frontend) |
| GET /api/platform/stats | 200 |
| GET /api/platform/aol-token/stats | 200 |
| GET /api/settings | 200 |
| GET /api/aol-staking/stats | 200 |
| GET /api/staking/operator/locked-metrics | 200 |
| GET /api/fee-vault/v2/global-history | 200 |
| GET /api/leaderboard | 200 |
| GET /api/tokens/system-list | 200 |
| GET /api/tokens/list | 200 |
| GET /api/tokens/home-launches | 200 |
| GET /api/tokens/by-mints?ids=FAKEMINT123 | 200 |
| GET /api/volume/cumulative-daily | 200 |
| GET /api/token-market/FAKEMINT123/ath | 200 |
| GET /api/token-market/FAKEMINT123/chart-peak | 200 |
| GET /api/token-market/FAKEMINT123/holders | 200 |
| GET /api/token-market/FAKEMINT123/trades | 200 |
| GET /api/gateway/trades | 200 |
| GET /api/chart/jupiter?mint=FAKEMINT123 | 200 (validated: array) |
| GET /api/jupiter/swap/v1/quote | 200 (validated: inputMint present) |
| GET /api/stream | 200 (SSE) |
| GET /api/gateway/trades/stream | 200 (SSE) |
| GET /api/gateway/prices/stream | 200 (SSE) |
| GET /api/nonexistent/path | 404 (expected) |

## Architecture

- **11 route modules**: meta, platform, settings, staking, fee_vault, leaderboard, tokens, token_market, volume, gateway, jupiter, streams
- **7 service modules**: http, dexscreener, jupiter, solana, ipfs, raydium, meteora
- **Seed data**: 18 JSON files in seed/ loaded into RocksDB at boot
- **SSE streams**: 3 endpoints return connected+heartbeat events (api/stream, gateway/trades/stream, gateway/prices/stream)
- **Chart data**: jupiter chart endpoint generates synthetic OHLCV candles
- **Swap quotes**: jupiter quote endpoint returns simulated quotes (never real signing)

## Branding

- config/branding.json has placeholder values
- config/replacements.json maps original america.fun domains/contracts to branding keys
- `cargo run --bin rebrand` available to push branding into frontend files

## Ready for Deploy

Backend is ready for Railway deployment. Needs:
1. Dockerfile (should exist in deploy template)
2. Railway service with volume at /data for RocksDB
3. Environment variables set via Railway (or defaults work for seed mode)
