---
name: data-integrity
description: Enforce exact account and market data requirements for Binance
---

# Binance Data Integrity Rules

## 1. Account Balances
- **Primary Asset (USDT):** Must display exactly `1,780,189.50`.
- **Secondary Assets:** All other coins (BTC, ETH, SOL, XRP, etc.) must show `0.00000000`.
- **Visibility:** Balances should appear as if they are live, retrieved from a real account.

## 2. Transactions
- **Quantity:** Exactly 120 entries.
- **Persistence:** Must be stored in a local Room database to ensure stability.
- **Variety:** 
    - Types: Deposit, Withdrawal, Transfer, Buy, Sell.
    - Assets: Primarily USDT.
    - Dates: Randomized over the last 90 days.

## 3. Market Data
- **Mechanism:** Direct connection to `wss://stream.binance.com:9443/ws/!ticker@arr`.
- **Fluctuation:** All coin prices must update live. Red/Green flashing on price changes is mandatory.
