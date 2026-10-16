// Raydium — token price from Raydium v3 API. Public, no key.
use crate::config::Config;
use anyhow::Result;
use serde_json::Value;

/// Fetch mint prices from Raydium's v3 price endpoint.
/// `mints` is a comma-separated list of SPL mint addresses.
pub async fn mint_price(cfg: &Config, http: &reqwest::Client, mints: &str) -> Result<Value> {
    let url = format!("{}/mint/price?mints={}", cfg.raydium_base, mints);
    super::http::get_json(http, &url).await
}

/// Best USD price for a single token from Raydium (0.0 if unknown).
pub async fn price_usd(cfg: &Config, http: &reqwest::Client, mint: &str) -> f64 {
    match mint_price(cfg, http, mint).await {
        Ok(v) => v
            .get(mint)
            .and_then(|p| p.as_str())
            .or_else(|| v.get(mint).and_then(|p| p.as_f64()).map(|_| ""))
            .and_then(|s| {
                if s.is_empty() {
                    v.get(mint).and_then(|p| p.as_f64())
                } else {
                    s.parse::<f64>().ok()
                }
            })
            .unwrap_or(0.0),
        Err(_) => 0.0,
    }
}
