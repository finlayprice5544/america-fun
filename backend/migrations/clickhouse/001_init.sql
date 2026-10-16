-- ClickHouse schema for analytical / event / time-series data.
-- Runs automatically on first `docker compose up` (mounted into initdb.d),
-- or apply manually:  clickhouse-client < migrations/clickhouse/001_init.sql
-- Generated for america.fun clone — covers trades, volume, fee vault,
-- leaderboard, and token market data.

CREATE DATABASE IF NOT EXISTS app;

-- ─── Generic event stream ──────────────────────────────────────
-- Columnar + fast range scans for activity, launches, etc.
CREATE TABLE IF NOT EXISTS app.events
(
    ts          DateTime64(3) DEFAULT now64(3),
    kind        LowCardinality(String),      -- 'activity' | 'trade' | 'launch' | ...
    actor       String,                      -- wallet / user id
    subject     String,                      -- mint / desk id / etc.
    amount      Float64 DEFAULT 0,
    meta        String DEFAULT '{}'          -- JSON blob for extra fields
)
ENGINE = MergeTree
ORDER BY (kind, ts);

-- ─── Revenue / fee aggregates ──────────────────────────────────
CREATE TABLE IF NOT EXISTS app.revenue
(
    day         Date,
    source      LowCardinality(String),
    amount_usd  Float64
)
ENGINE = MergeTree
ORDER BY (source, day);

-- ─── Trades (gateway-level) ────────────────────────────────────
-- Every swap across all pools/tokens — the data behind /api/gateway/trades
-- and /api/token-market/:mint/trades.
CREATE TABLE IF NOT EXISTS app.trades
(
    ts              DateTime64(3),
    signature       String,
    instruction_idx UInt16 DEFAULT 0,
    inner_idx       UInt16 DEFAULT 0,
    slot            UInt64,
    mint            String,                      -- token mint being traded
    pool            String,                      -- pool / pair address
    program_type    LowCardinality(String),      -- 'damm' | 'dbc' | 'clmm'
    trader          String DEFAULT '',           -- wallet of the trader
    side            LowCardinality(String),      -- 'buy' | 'sell'
    in_mint         String,
    in_amount       UInt64,                      -- raw amount (before decimals)
    in_decimals     UInt8 DEFAULT 6,
    out_mint        String,
    out_amount      UInt64,
    out_decimals    UInt8 DEFAULT 6,
    price_usd       Float64 DEFAULT 0,
    usd_value       Float64 DEFAULT 0,
    fee_amount      Nullable(UInt64),
    fee_mint        Nullable(String)
)
ENGINE = MergeTree
ORDER BY (mint, ts);

-- ─── Volume daily ──────────────────────────────────────────────
-- Cumulative daily volume history — /api/volume/cumulative-daily
CREATE TABLE IF NOT EXISTS app.volume_daily
(
    day                 Date,
    daily_volume_usd    Float64 DEFAULT 0,
    cumulative_volume   Float64 DEFAULT 0
)
ENGINE = ReplacingMergeTree
ORDER BY day;

-- ─── Fee vault history ─────────────────────────────────────────
-- Daily/hourly fee breakdown — /api/fee-vault/v2/global-history
CREATE TABLE IF NOT EXISTS app.fee_vault_history
(
    period_start            DateTime,
    period_end              DateTime,
    total_fee_collected     Float64 DEFAULT 0,
    damm_usd1              Float64 DEFAULT 0,
    dbc_usd1               Float64 DEFAULT 0,
    funded_usd1             Float64 DEFAULT 0,
    creator_damm_usd1       Float64 DEFAULT 0,
    stakers_damm_usd1       Float64 DEFAULT 0,
    lp_damm_usd1            Float64 DEFAULT 0,
    aol_buyback_damm_usd1   Float64 DEFAULT 0,
    treasury_damm_usd1      Float64 DEFAULT 0,
    remaining_damm_usd1     Float64 DEFAULT 0,
    creator_dbc_usd1         Float64 DEFAULT 0,
    treasury_dbc_usd1        Float64 DEFAULT 0
)
ENGINE = MergeTree
ORDER BY period_start;

-- ─── Leaderboard ───────────────────────────────────────────────
-- Points leaderboard — /api/leaderboard
CREATE TABLE IF NOT EXISTS app.leaderboard
(
    user_address    String,
    points          Float64 DEFAULT 0,
    updated_at      DateTime DEFAULT now()
)
ENGINE = ReplacingMergeTree(updated_at)
ORDER BY user_address;

-- ─── Token market data ─────────────────────────────────────────
-- Per-token aggregated market metrics (ATH, chart peaks, etc.)
CREATE TABLE IF NOT EXISTS app.token_market_data
(
    mint                    String,
    highest_market_cap_usd  Float64 DEFAULT 0,
    highest_price_usd       Float64 DEFAULT 0,
    highest_close_usd       Float64 DEFAULT 0,
    ath_timestamp           UInt64 DEFAULT 0,
    total_holders           UInt32 DEFAULT 0,
    updated_at              DateTime DEFAULT now()
)
ENGINE = ReplacingMergeTree(updated_at)
ORDER BY mint;

-- ─── Token price OHLCV (chart candles) ─────────────────────────
-- Stores historical OHLCV candle data for chart rendering.
CREATE TABLE IF NOT EXISTS app.token_ohlcv
(
    mint        String,
    interval    LowCardinality(String),    -- '1m' | '5m' | '15m' | '1h' | '4h' | '1d' | '7d' | '30d'
    ts          DateTime64(3),
    open        Float64,
    high        Float64,
    low         Float64,
    close       Float64,
    volume      Float64 DEFAULT 0
)
ENGINE = ReplacingMergeTree
ORDER BY (mint, interval, ts);
