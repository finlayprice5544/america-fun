// Platform stats endpoints: /api/platform/stats, /api/platform/aol-token/stats
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{extract::State, routing::get, Json, Router};
use serde_json::Value;

async fn platform_stats(State(st): State<AppState>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "platform-stats");
    Json(data)
}

async fn aol_token_stats(State(st): State<AppState>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "aol-token-stats");
    Json(data)
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/platform/stats", get(platform_stats)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/platform/aol-token/stats", get(aol_token_stats)) } }
