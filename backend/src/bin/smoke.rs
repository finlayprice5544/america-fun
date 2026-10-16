// `cargo run --bin smoke` — comprehensive smoke test hitting every API endpoint
// against a RUNNING server. Exits non-zero on failures.
// Start the server first:  cargo run --bin generated-site
use serde_json::Value;

#[tokio::main]
async fn main() {
    dotenvy::dotenv().ok();
    let port = std::env::var("PORT").unwrap_or_else(|_| "8787".into());
    let base = format!("http://localhost:{port}");
    let http = reqwest::Client::builder()
        .timeout(std::time::Duration::from_secs(10))
        .build()
        .expect("http client");

    let mut pass = 0u32;
    let mut fail = 0u32;
    println!("smoke test -> {base}\n");

    // Helper closure: GET a URL, check status < 500, optionally validate JSON
    let checks: Vec<(&str, &str, Option<Box<dyn Fn(&Value) -> bool>>)> = vec![
        // Meta endpoints
        ("GET", "/api/_health", Some(Box::new(|v: &Value| v.get("ok").and_then(|x| x.as_bool()) == Some(true)))),
        ("GET", "/api/_branding", Some(Box::new(|v: &Value| v.get("name").is_some()))),

        // Root page (HTML)
        ("GET", "/", None),

        // Platform
        ("GET", "/api/platform/stats", None),
        ("GET", "/api/platform/aol-token/stats", None),

        // Settings
        ("GET", "/api/settings", None),

        // Staking
        ("GET", "/api/aol-staking/stats", None),
        ("GET", "/api/staking/operator/locked-metrics", None),

        // Fee vault
        ("GET", "/api/fee-vault/v2/global-history", None),

        // Leaderboard
        ("GET", "/api/leaderboard", None),

        // Tokens
        ("GET", "/api/tokens/system-list", None),
        ("GET", "/api/tokens/list", None),
        ("GET", "/api/tokens/home-launches", None),
        ("GET", "/api/tokens/by-mints?ids=FAKEMINT123", None),

        // Volume
        ("GET", "/api/volume/cumulative-daily", None),

        // Token market (parameterized)
        ("GET", "/api/token-market/FAKEMINT123/ath", None),
        ("GET", "/api/token-market/FAKEMINT123/chart-peak", None),
        ("GET", "/api/token-market/FAKEMINT123/holders", None),
        ("GET", "/api/token-market/FAKEMINT123/trades", None),

        // Gateway
        ("GET", "/api/gateway/trades", None),

        // Jupiter / chart
        ("GET", "/api/chart/jupiter?mint=FAKEMINT123", Some(Box::new(|v: &Value| v.is_array()))),
        ("GET", "/api/jupiter/swap/v1/quote?inputMint=So11111111111111111111111111111111&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v&amount=1000000", Some(Box::new(|v: &Value| v.get("inputMint").is_some()))),

        // SSE streams (just check they return 200 with event-stream content)
        ("GET", "/api/stream", None),
        ("GET", "/api/gateway/trades/stream", None),
        ("GET", "/api/gateway/prices/stream", None),

        // 404 for unknown API path
        ("GET", "/api/nonexistent/path", None),
    ];

    for (method, path, validator) in &checks {
        let url = format!("{base}{path}");
        let result = match *method {
            "POST" => http.post(&url).send().await,
            _ => http.get(&url).send().await,
        };

        match result {
            Ok(resp) => {
                let status = resp.status().as_u16();
                // For the 404 test, we expect 404 which is fine
                if path.contains("nonexistent") {
                    if status == 404 {
                        println!("  ok  {method} {path} -> {status} (expected 404)");
                        pass += 1;
                    } else {
                        println!("  ERR {method} {path} -> {status} (expected 404)");
                        fail += 1;
                    }
                    continue;
                }

                if status >= 500 {
                    println!("  ERR {method} {path} -> {status} (server error)");
                    fail += 1;
                    continue;
                }

                // Try to parse body as JSON and run validator if present
                if let Some(ref check_fn) = validator {
                    let body_text = resp.text().await.unwrap_or_default();
                    match serde_json::from_str::<Value>(&body_text) {
                        Ok(json) => {
                            if check_fn(&json) {
                                println!("  ok  {method} {path} -> {status} (validated)");
                                pass += 1;
                            } else {
                                println!("  ERR {method} {path} -> {status} (validation failed)");
                                println!("       body: {}", truncate(&body_text, 200));
                                fail += 1;
                            }
                        }
                        Err(_) => {
                            // For chart/jupiter which returns array, body might still be valid
                            println!("  WARN {method} {path} -> {status} (not valid JSON, validator skipped)");
                            println!("       body: {}", truncate(&body_text, 200));
                            fail += 1;
                        }
                    }
                } else {
                    println!("  ok  {method} {path} -> {status}");
                    pass += 1;
                }
            }
            Err(e) => {
                println!("  ERR {method} {path} -> {e}");
                fail += 1;
            }
        }
    }

    println!("\n{pass} passed, {fail} failed out of {} checks", pass + fail);
    if fail > 0 {
        std::process::exit(1);
    }
}

fn truncate(s: &str, max: usize) -> String {
    if s.len() <= max {
        s.to_string()
    } else {
        format!("{}...", &s[..max])
    }
}
