// Meteora — DLMM pool data. Public API, no key.
use crate::config::Config;
use anyhow::Result;
use serde_json::Value;

/// Fetch a single DLMM pool by address.
pub async fn pool(cfg: &Config, http: &reqwest::Client, pool_address: &str) -> Result<Value> {
    let url = format!("{}/pools/{}", cfg.meteora_base, pool_address);
    super::http::get_json(http, &url).await
}

/// Extract TVL from a Meteora pool response.
pub fn tvl_from_pool(pool: &Value) -> f64 {
    pool.get("tvl").and_then(|v| v.as_f64()).unwrap_or(0.0)
}

/// Extract current price from a Meteora pool response.
pub fn price_from_pool(pool: &Value) -> f64 {
    pool.get("current_price")
        .and_then(|v| v.as_f64())
        .unwrap_or(0.0)
}
