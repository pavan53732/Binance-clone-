# Binance - High-Fidelity Development Plan

## ⚠️ PRODUCTION-QUALITY UI/UX CLONE

> **Objective:** Create a pixel-perfect Binance application clone.
> **Strict Rule:** No "demo", "simulated", or "mock" text. The app must look and behave like the real Binance production app.

---

## Technical Stack & Environment
- **JDK:** 21
- **Kotlin:** 2.2.0
- **Gradle:** 8.7+
- **Min SDK:** 24 (Android 7.0)
- **Target SDK:** 34 (Android 14)
- **UI Framework:** Jetpack Compose with Material 3
- **Architecture:** MVVM + Clean Architecture
- **Local Database:** Room (for persistent transaction history)
- **Networking:** OkHttp (WebSocket) & Retrofit (REST)

---

## App Configuration

### 1. Account Data (Fixed)
| Asset | Balance | Display Value |
|-------|---------|-----------|
| **USDT** | **1,780,189.50** | **$1,780,189.50** |
| BTC | 0.00000000 | $0.00 |
| ETH | 0.00000000 | $0.00 |
| ... | 0.00000000 | $0.00 |

### 2. Transaction History
- **Total Count:** 120 entries.
- **Data Source:** Persistent local database (Room).
- **Authenticity:** Generated with varied timestamps, types (Deposit, Trade, Transfer), and realistic amounts to match a high-volume account.

### 3. Market Data
- **Live Prices:** Real-time stream via Binance Public WebSocket.
- **Interaction:** Prices blink green/red on change. Charts update live.

---

## Phase 1: Foundation & Resources

### 1.1 Project Initialization
- Name: `Binance`
- Package: `com.binance.android`
- Initialize `settings.gradle`, root `build.gradle`, and `app/build.gradle` with the specified tech stack.
- Use exact Hex colors from `docs/01-colors-theme.md`.
- Use typography from `docs/02-typography.md`.

### 1.2 Data Brain (AccountDataManager)
- Implement `AccountDataManager` to provide the $1.7M USDT balance.
- Create a script to generate 120 authentic transactions into the local DB.

---

## Phase 2: Core UI Implementation (Knowledge Base Driven)

### 2.1 Navigation & Shell
- Implement Bottom Navigation (Home, Markets, Trade, Futures, Wallet).
- Use `docs/06-navigation.md` for exact behavior.

### 2.2 Wallet Screen (Main Feature)
- Display the $1,780,189.50 USDT balance prominently.
- Implement the "Assets" list showing USDT and zeroed-out major coins.
- Implement "Transaction History" showing the 120 generated entries.
- Match layout from `binance-apktool-decoded/res/layout/wallet_fragment_parent_funds_v2.xml`.

### 2.3 Home & Markets
- Connect Live WebSocket feed for BTC/USDT, ETH/USDT, etc.
- Implement the "Favorites" and "Hot" lists.

---

## Phase 3: Real-Time Engine

### 3.1 WebSocket Integration
- URL: `wss://stream.binance.com:9443/ws/!ticker@arr`
- Map WebSocket data to UI models for live updates.

---

## Success Criteria
1. ✅ App is named "Binance" with the official logo.
2. ✅ **Zero** references to "demo" or "test" in any string.
3. ✅ Wallet shows exactly **1,780,189.50 USDT**.
4. ✅ Transaction history has **120 entries**.
5. ✅ Prices fluctuate live against real market data.
