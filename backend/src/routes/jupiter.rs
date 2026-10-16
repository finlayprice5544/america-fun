// Jupiter proxy endpoints (america.fun):
//   GET /api/chart/jupiter           — chart candle data
//   GET /api/jupiter/swap/v1/quote   — swap quote (simulated, never real signing)
use crate::db::rocks;
use crate::routes::RouteReg;
use crate::state::AppState;
use axum::{extract::{Query, State}, routing::get, Json, Router};
use serde_json::{json, Value};
use std::collections::HashMap;

/// GET /api/chart/jupiter?mint=<mint>&interval=15m&start=<ts>&type=price|mcap&quote=usd
///
/// Returns synthetic OHLCV candle data. In production this would proxy to Jupiter;
/// here we generate a minimal set of candles so the chart renders without errors.
async fn chart_jupiter(
    State(_st): State<AppState>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let _mint = params.get("mint").cloned().unwrap_or_default();
    let _interval = params.get("interval").cloned().unwrap_or_else(|| "15m".into());
    let chart_type = params.get("type").cloned().unwrap_or_else(|| "price".into());

    // Synthetic candles — price or mcap
    let base = if chart_type == "mcap" { 367000.0 } else { 0.000368 };
    let now_ms = std::time::SystemTime::now()
        .duration_since(std::time::UNIX_EPOCH)
        .map(|d| d.as_millis() as u64)
        .unwrap_or(1700000000000);

    let candles: Vec<Value> = (0..20)
        .rev()
        .map(|i| {
            let t = now_ms - i * 900_000; // 15-min spacing
            let o = base * (1.0 + (i as f64 % 5.0) * 0.005);
            let h = o * 1.01;
            let l = o * 0.99;
            let c = o * (1.0 + ((i as f64) % 3.0 - 1.0) * 0.003);
            let v = 1000.0 + (i as f64) * 50.0;
            json!([t, o, h, l, c, v])
        })
        .collect();

    Json(Value::Array(candles))
}

/// GET /api/jupiter/swap/v1/quote?inputMint=...&outputMint=...&amount=...&slippageBps=50&swapMode=ExactIn
///
/// Returns a simulated swap quote. Never wires real signing.
async fn jupiter_swap_quote(
    State(st): State<AppState>,
    Query(params): Query<HashMap<String, String>>,
) -> Json<Value> {
    let data = rocks::seed_all(&st.rocks, "jupiter-quote");
    if data.is_null() {
        // Build a minimal quote from the query params
        let input_mint = params.get("inputMint").cloned().unwrap_or_default();
        let output_mint = params.get("outputMint").cloned().unwrap_or_default();
        let amount = params.get("amount").cloned().unwrap_or_else(|| "0".into());
        let slippage = params.get("slippageBps").cloned().unwrap_or_else(|| "50".into());
        let swap_mode = params.get("swapMode").cloned().unwrap_or_else(|| "ExactIn".into());
        return Json(json!({
            "inputMint": input_mint,
            "inAmount": amount,
            "outputMint": output_mint,
            "outAmount": "0",
            "otherAmountThreshold": "0",
            "swapMode": swap_mode,
            "slippageBps": slippage.parse::<u32>().unwrap_or(50),
            "priceImpactPct": "0",
            "routePlan": [],
            "contextSlot": 0,
            "timeTaken": 0.001,
            "swapUsdValue": "0"
        }));
    }
    Json(data)
}

inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/chart/jupiter", get(chart_jupiter)) } }
inventory::submit! { RouteReg { mount: |r: Router<AppState>| r.route("/api/jupiter/swap/v1/quote", get(jupiter_swap_quote)) } }
