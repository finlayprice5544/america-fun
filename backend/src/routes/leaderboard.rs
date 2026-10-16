// Points leaderboard: /api/leaderboard
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{extract::State, routing::get, Json, Router};
use serde_json::Value;

async fn leaderboard(State(st): State<AppState>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "leaderboard");
    Json(data)
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/leaderboard", get(leaderboard)) } }
