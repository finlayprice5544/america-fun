// Route registry. Each route file submits a `RouteReg` via `inventory`;
// mount_all() collects them. To add an endpoint:
//   1. create src/routes/<name>.rs  (copy example_coins.rs)
//   2. add `pub mod <name>;` below
// It then auto-mounts — no central wiring to edit.
use crate::state::AppState;
use axum::Router;

pub struct RouteReg {
    pub mount: fn(Router<AppState>) -> Router<AppState>,
}
inventory::collect!(RouteReg);

pub fn mount_all(mut router: Router<AppState>) -> Router<AppState> {
    let mut count = 0;
    for reg in inventory::iter::<RouteReg> {
        router = (reg.mount)(router);
        count += 1;
    }
    tracing::info!("mounted {count} route group(s)");
    router
}

pub mod meta;

// ── API routes ───────────────────────────────────────────────────────────────
pub mod platform;      // /api/platform/stats, /api/platform/aol-token/stats
pub mod settings;      // /api/settings
pub mod staking;       // /api/aol-staking/stats, /api/staking/operator/locked-metrics
pub mod fee_vault;     // /api/fee-vault/v2/global-history
pub mod leaderboard;   // /api/leaderboard
pub mod tokens;        // /api/tokens/list, /api/tokens/by-mints, /api/tokens/home-launches, /api/tokens/system-list
pub mod token_market;  // /api/token-market/{mint}/ath|chart-peak|holders|trades
pub mod volume;        // /api/volume/cumulative-daily
pub mod gateway;       // /api/gateway/trades, /api/gateway/trades/stream, /api/gateway/prices/stream
pub mod jupiter;       // /api/chart/jupiter, /api/jupiter/swap/v1/quote
pub mod streams;       // /api/stream (SSE)
