// SSE stream endpoint (api.america.fun):
//   GET /api/stream?client_id=<id>  — real-time token update events
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{response::IntoResponse, routing::get, Router};

/// GET /api/stream — Server-Sent Events for live token updates.
/// Returns a single "connected" event. The frontend's EventSource auto-reconnects,
/// which is normal SSE behaviour in a simulation backend.
async fn api_stream() -> impl IntoResponse {
    (
        [
            (axum::http::header::CONTENT_TYPE, "text/event-stream"),
            (axum::http::header::CACHE_CONTROL, "no-cache"),
        ],
        "data: {\"type\":\"connected\"}\n\ndata: {\"type\":\"heartbeat\"}\n\n",
    )
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/stream", get(api_stream)) } }
