// Token list endpoints:
//   /api/tokens/list       — paginated, sorted token list (api.america.fun)
//   /api/tokens/by-mints   — fetch tokens by mint addresses (api.america.fun)
//   /api/tokens/home-launches — featured homepage tokens (api.america.fun)
//   /api/tokens/system-list — full system token list (server-api.america.fun)
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{extract::{Query, State}, routing::get, Json, Router};
use serde_json::{json, Value};
use std::collections::HashMap;

/// GET /api/tokens/list?sort=marketCap&order=desc&limit=20&offset=0
async fn tokens_list(
    State(st): State<AppState>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "tokens-list");
    // Seed contains the full response envelope; honour pagination params where possible.
    if let Value::Object(ref m) = data {
        if m.contains_key("tokens") {
            let tokens = m.get("tokens").cloned().unwrap_or(Value::Array(vec![]));
            let all: Vec<Value> = match tokens {
                Value::Array(a) => a,
                _ => vec![],
            };

            let limit: usize = params.get("limit").and_then(|v| v.parse().ok()).unwrap_or(20);
            let offset: usize = params.get("offset").and_then(|v| v.parse().ok()).unwrap_or(0);
            let sort = params.get("sort").cloned().unwrap_or_else(|| "marketCap".into());
            let order = params.get("order").cloned().unwrap_or_else(|| "desc".into());

            let total = all.len();
            let page: Vec<Value> = all.into_iter().skip(offset).take(limit).collect();

            return Json(json!({
                "success": true,
                "tokens": page,
                "total": total,
                "limit": limit,
                "offset": offset,
                "sort": sort,
                "order": order,
                "launchConfig": m.get("launchConfig").cloned().unwrap_or(json!({
                    "configAddress": "B4sPWMrpZrUy1b3f4NVVr6sQHzMgVGtSR5Nta19giHFY",
                    "quoteMint": "USD1ttGY1N17NEEHLmELoaybftRBUSErhqYiQzvEmuB"
                }))
            }));
        }
    }
    // Fallback: return seed data as-is
    Json(data)
}

/// GET /api/tokens/by-mints?ids=mint1,mint2&blocking=0|1
async fn tokens_by_mints(
    State(st): State<AppState>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "tokens-list");
    let ids_raw = params.get("ids").cloned().unwrap_or_default();
    let requested: Vec<&str> = ids_raw.split(',').map(|s| s.trim()).collect();

    let all_tokens = match &data {
        Value::Object(m) => m.get("tokens").cloned().unwrap_or(Value::Array(vec![])),
        Value::Array(_) => data.clone(),
        _ => Value::Array(vec![]),
    };
    let arr = match all_tokens {
        Value::Array(a) => a,
        _ => vec![],
    };

    // Filter to requested mints (if any)
    let filtered: Vec<Value> = if requested.is_empty() || requested[0].is_empty() {
        arr
    } else {
        arr.into_iter()
            .filter(|t| {
                t.get("mint")
                    .and_then(|m| m.as_str())
                    .map(|m| requested.contains(&m))
                    .unwrap_or(false)
            })
            .collect()
    };

    Json(json!({ "success": true, "tokens": filtered }))
}

/// GET /api/tokens/home-launches
async fn tokens_home_launches(State(st): State<AppState>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "tokens-list");
    match &data {
        Value::Object(m) if m.contains_key("tokens") => Json(json!({
            "success": true,
            "tokens": m.get("tokens").unwrap_or(&Value::Array(vec![]))
        })),
        _ => Json(json!({"success": true, "tokens": []})),
    }
}

/// GET /api/tokens/system-list
async fn tokens_system_list(State(st): State<AppState>) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "system-list");
    // system-list seed is the raw array
    Json(data)
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/tokens/list", get(tokens_list)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/tokens/by-mints", get(tokens_by_mints)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/tokens/home-launches", get(tokens_home_launches)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/tokens/system-list", get(tokens_system_list)) } }
