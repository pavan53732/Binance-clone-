# Binance Project Workspace Rules

## 1. Global Identity Rules
- **Application Name:** Always "Binance".
- **Forbidden Vocabulary:** ABSOLUTELY NO use of the following words in any UI text, logs, strings, or comments intended for display:
    - "demo", "simulated", "mock", "fake", "test", "prototype", "clone", "dummy".
- **Visual Accuracy:** The application must be indistinguishable from the production Binance app. Use the `docs/` folder as the source of truth for all UI/UX decisions.

## 2. Technical Stack Specifications
- **JDK:** 21
- **Kotlin:** 2.2.0
- **Gradle:** 8.7 (Kotlin DSL)
- **Minimum SDK:** 24 (Android 7.0)
- **Target SDK:** 34 (Android 14)
- **UI Framework:** Jetpack Compose with Material 3.
- **Architecture:** Clean Architecture + MVVM.
- **Dependency Injection:** Hilt.
- **Persistence:** Room Database (for transactions).
- **Networking:** OkHttp (WebSocket) & Retrofit (REST).

## 3. Data Integrity Rules
- **USDT Balance:** Hardcoded display of `1,780,189.50`.
- **Major Assets:** All other coin balances (BTC, ETH, BNB, etc.) must be initialized at `0.00000000`.
- **Transaction History:** 
    - Total Count: Exactly 120 entries.
    - Consistency: Transactions must be stored in Room to ensure they persist between app restarts.
    - Realism: Use varied types (Deposit, Withdrawal, Spot Trade, Transfer) and timestamps covering the last 90 days.
- **Market Prices:** Must be pulled live from `wss://stream.binance.com:9443/ws/!ticker@arr`.

## 4. UI/UX Development Guidelines
- **Theme:** Strictly follow `docs/01-colors-theme.md`. Primary Yellow: `#FFF0B90B`.
- **Typography:** Strictly follow `docs/02-typography.md`.
- **Components:** Reuse design patterns from `docs/05-components.md`.
- **Layouts:** Use extracted XML from `binance-apktool-decoded/res/layout/` as structural references for Compose implementation.

## 5. Development Workflow
- **Code Style:** Follow official Kotlin coding conventions.
- **Componentization:** Build reusable Compose widgets for recurring Binance UI elements (e.g., PriceTicker, AssetRow, TransactionItem).
- **Error Handling:** Use authentic Binance-style error messages (e.g., "Network connection unstable") instead of generic system errors.
