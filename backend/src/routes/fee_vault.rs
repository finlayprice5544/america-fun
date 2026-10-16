// Fee vault history: /api/fee-vault/v2/global-history
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{extract::{Query, State}, routing::get, Json, Router};
use serde_json::Value;
use std::collections::HashMap;

async fn fee_vault_history(
    State(st): State<AppState>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    // Query params: granularity (day|hour), limit — seed data always returns the full set.
    let data = rocks::seed_all(&st.rocks, "fee-vault-history");
    Json(data)
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/fee-vault/v2/global-history", get(fee_vault_history)) } }
