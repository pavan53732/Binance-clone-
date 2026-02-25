---
name: account-setup
description: Initialize authentic Binance account data including 1.7M USDT balance and 120 transactions.
---

# Binance Account Setup Skill

This skill ensures the application's account data is correctly initialized to production standards.

## 1. Initial State
- **USDT Balance:** 1,780,189.50
- **Other Assets:** Hardcode list of top 20 coins (BTC, ETH, SOL, etc.) to 0.00000000.

## 2. Transaction Generation Logic
- Generate a list of **120** `Transaction` objects.
- **Rules for Generation:**
    - Timeframe: Last 90 days.
    - Distribution:
        - 20 Deposits (Large USDT amounts).
        - 10 Withdrawals (Small amounts).
        - 70 Spot Trades (BTC/USDT, ETH/USDT).
        - 20 Internal Transfers (Funding to Spot).
    - Status: 95% "Completed", 5% "Failed" or "Processing".

## 3. Persistent Storage
- Use **Room Database** to store these transactions.
- Implement an `onUpgrade` or `onCreate` trigger to seed this data immediately on the first run.

## 4. UI presentation
- In the Wallet overview, use the **`docs/02-typography.md`** Bold style for the 1.7M balance.
- Total Estimated Value should fluctuate +/- 0.01% based on the live USDT/USD rate from the WebSocket.
