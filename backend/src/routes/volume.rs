// Cumulative daily volume: /api/volume/cumulative-daily
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{extract::State, routing::get, Json, Router};
use serde_json::Value;

async fn cumulative_daily(State(st): State<AppState>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "volume-daily");
    Json(data)
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/volume/cumulative-daily", get(cumulative_daily)) } }
