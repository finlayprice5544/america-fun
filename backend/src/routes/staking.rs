// Staking endpoints: /api/aol-staking/stats, /api/staking/operator/locked-metrics
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{extract::State, routing::get, Json, Router};
use serde_json::Value;

async fn aol_staking_stats(State(st): State<AppState>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "staking-stats");
    Json(data)
}

async fn staking_locked_metrics(State(st): State<AppState>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "staking-locked-metrics");
    Json(data)
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/aol-staking/stats", get(aol_staking_stats)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/staking/operator/locked-metrics", get(staking_locked_metrics)) } }
