// Gateway endpoints (gateway.america.fun mapped to /api/gateway/*):
//   GET /api/gateway/trades         — recent platform-wide trades (REST)
//   GET /api/gateway/trades/stream  — SSE stream of real-time trades
//   GET /api/gateway/prices/stream  — SSE stream of real-time prices
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{
    extract::{Query, State},
    response::IntoResponse,
    routing::get,
    Json, Router,
};
use serde_json::Value;
use std::collections::HashMap;

/// GET /api/gateway/trades?limit=50
async fn gateway_trades(
    State(st): State<AppState>,
    Query(_params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "gateway-trades");
    Json(data)
}

/// GET /api/gateway/trades/stream — SSE endpoint (single connected event then closes;
/// frontend auto-reconnects, which is normal SSE behaviour).
async fn trades_stream() -> impl IntoResponse {
    (
        [
            (axum::http::header::CONTENT_TYPE, "text/event-stream"),
            (axum::http::header::CACHE_CONTROL, "no-cache"),
        ],
        "data: {\"type\":\"connected\"}\n\ndata: {\"type\":\"heartbeat\"}\n\n",
    )
}

/// GET /api/gateway/prices/stream — SSE endpoint
async fn prices_stream() -> impl IntoResponse {
    (
        [
            (axum::http::header::CONTENT_TYPE, "text/event-stream"),
            (axum::http::header::CACHE_CONTROL, "no-cache"),
        ],
        "data: {\"type\":\"connected\"}\n\ndata: {\"type\":\"heartbeat\"}\n\n",
    )
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/gateway/trades", get(gateway_trades)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/gateway/trades/stream", get(trades_stream)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/gateway/prices/stream", get(prices_stream)) } }
