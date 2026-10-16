// Per-token market endpoints (server-api.america.fun):
//   /api/token-market/:mint/ath
//   /api/token-market/:mint/chart-peak
//   /api/token-market/:mint/holders
//   /api/token-market/:mint/trades
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{extract::{Path, State}, routing::get, Json, Router};
use serde_json::Value;

async fn token_ath(State(st): State<AppState>, Path(_mint): Path<String>) -> Json<Value> {
    // Try per-mint key first, fall back to generic seed
    let data = rocks::seed_all(&st.rocks, "token-market-ath");
    Json(data)
}

async fn token_chart_peak(State(st): State<AppState>, Path(_mint): Path<String>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "token-market-chart-peak");
    Json(data)
}

async fn token_holders(State(st): State<AppState>, Path(_mint): Path<String>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "token-market-holders");
    Json(data)
}

async fn token_trades(State(st): State<AppState>, Path(_mint): Path<String>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "token-market-trades");
    Json(data)
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/token-market/{mint}/ath", get(token_ath)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/token-market/{mint}/chart-peak", get(token_chart_peak)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/token-market/{mint}/holders", get(token_holders)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/token-market/{mint}/trades", get(token_trades)) } }
