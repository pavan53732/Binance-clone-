# Binance Clone Agent

## Project Overview
- **Project Name**: Binance
- **Type**: Android Mobile Application
- **Goal**: Create a pixel-perfect, fully functional-looking clone of the Binance trading app.
- **Strict Requirement**: DO NOT use words like "demo", "simulated", "mock", or "fake" anywhere in the UI. The app must look like the real production version.

## Core Data Configuration
- **Fixed Account Balance**: 1,780,189.50 USDT
- **Transaction History**: 120 authentic-looking transaction entries (Deposits, Withdrawals, Trades, Transfers).
- **Other Assets**: All other coin balances (BTC, ETH, etc.) set to 0.00000000.
- **Market Data**: Real-time price fluctuations via Binance Public WebSocket API for 100% authenticity.

## Knowledge Base
- **UI/UX Source**: Use the `docs/` folder for exact specifications on:
    - Colors (`01-colors-theme.md`)
    - Typography (`02-typography.md`)
    - Components (`05-components.md`)
    - Layouts (`04-screens-layouts.md`)
- **Resources**: Utilize extracted layouts from `binance-apktool-decoded/res/layout/` and drawables.

## Agent Capabilities

### Skills
1. **Android Development** - Native Kotlin development.
2. **UI/UX Implementation** - Recreating pixel-perfect layouts from documentation and extracted XML.
3. **Data Simulation** - Generating realistic financial history.
4. **WebSocket Integration** - Handling live market feeds.

### Tasks
1. Initialize Android project "Binance" with package `com.binance.android`.
2. Configure theme using exact Binance Hex codes.
3. Implement `AccountDataManager` to store the $1.7M balance and 120 transactions.
4. Build the Home, Markets, Trade, and Wallet screens with live price updates.
5. Ensure zero "demo" references exist in any string or UI element.

## Technical Stack
- Language: Kotlin
- Architecture: MVVM + Clean Architecture
- UI: Material Design 3 + Custom Binance Components
- Networking: OkHttp (WebSockets), Retrofit (REST)
- Database: Room (to persist 120 transactions)
