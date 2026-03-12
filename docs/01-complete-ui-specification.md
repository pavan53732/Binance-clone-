# 01-Complete-UI-Specification

## Overview

This document provides a comprehensive UI specification for the Binance application - a dual-purpose mobile app combining a centralized cryptocurrency exchange with a Web3 wallet functionality.

---

## Application Overview

The Binance application serves as a unified platform for:

1. **Centralized Exchange (CeFi)**
   - Spot trading with 100+ trading pairs
   - Margin trading (Cross/Isolated)
   - Futures trading (USDT-M, COIN-M)
   - C2C (Consumer-to-Consumer) trading
   - Earn products (Staking, Savings, DeFi Staking)
   - Pay functionality for crypto payments

2. **Web3 Wallet (DeFi)**
   - Multi-chain wallet support (Ethereum, BSC, Solana, etc.)
   - Token management and transfers
   - NFT viewing and management
   - DEX integration and token swaps
   - DApp browser with WalletConnect
   - Discover section for DeFi opportunities

---

## Architecture Summary

### Navigation Model

The application uses an **Activity-based navigation system** with deep link routing:

- **400+ Activities** declared in AndroidManifest.xml
- **FirstDispatchRouterActivity** serves as the main routing hub
- Deep links handled via intent filters
- Fragment-based content switching within Activities

### Multi-Package Structure

The application is organized into feature-specific packages:

| Package | Purpose |
|---------|---------|
| `com.eaas.launcher` | Main application entry, router |
| `com.binance.c2c` | C2C trading module |
| `com.insurance.wallet` | Web3 wallet functionality |
| `com.finance.spot` | Spot trading engine |
| `com.finance.margin` | Margin trading module |
| `com.finance.um` | Unified futures module |
| `com.binance.earn` | Earn products (Staking, Savings) |
| `com.mpc.wallet` | MPC-based wallet operations |
| `com.binance.pay` | Payment functionality |
| `com.binance.api` | API and network layer |

### Modular Architecture

Each feature module operates as a semi-independent unit:

- Own Activities/Fragments
-独立的ViewModels和数据层
- Dedicated navigation flows
- Shared design system resources

---

## Core Features List

### Exchange Features (CeFi)

| Feature | Description |
|---------|-------------|
| **Spot Trading** | Buy/sell cryptocurrencies with instant settlement |
| **Margin Trading** | Trading with borrowed funds (Cross/Isolated) |
| **Futures Trading** | USDT-M and COIN-M perpetual contracts |
| **P2P Trading** | C2C marketplace for fiat-crypto exchange |
| **Asset Management** | Deposit, withdraw, transfer between accounts |
| **Market Data** | Real-time prices, charts, order books |
| **Order Types** | Limit, Market, Stop-Limit, OCO, etc. |

### Web3 Features (DeFi)

| Feature | Description |
|---------|-------------|
| **Multi-chain Wallet** | Support for 20+ blockchain networks |
| **Token Swap** | Built-in DEX aggregator |
| **NFT Gallery** | View and manage NFT collections |
| **DApp Browser** | Integrated browser for decentralized apps |
| **WalletConnect** | Connect to external DApps |
| **Discover** | DeFi yield opportunities and campaigns |

### Account Features

| Feature | Description |
|---------|-------------|
| **KYC Verification** | Identity verification levels |
| **Security Settings** | 2FA, Biometrics, Anti-phishing |
| **Notification Preferences** | Push notification management |
| **Language Support** | Multi-language interface |
| **Theme Support** | Light/Dark mode |

---

## Technical Stack

### Platform

- **Primary**: Android (Kotlin)
- **UI Framework**: Android Views + ViewBinding + some Jetpack Compose
- **Minimum SDK**: 21 (Android 5.0)
- **Target SDK**: 34 (Android 14)

### Key Technologies

| Category | Technology |
|----------|------------|
| Language | Kotlin, Java |
| DI Framework | Hilt, Dagger |
| Networking | Retrofit, OkHttp, WebSocket |
| Async | Kotlin Coroutines, Flow |
| Database | Room, SharedPreferences |
| Image Loading | Coil, Glide |
| Charts | TradingView (WebView) |
| Navigation | Android Navigation Component |
| State Management | ViewModel, LiveData |

### Resource Structure

- **Layouts**: 200+ XML layout files
- **Drawables**: Vector drawables + density-specific assets
- **Values**: colors.xml, styles.xml, themes.xml, strings.xml, dimens.xml
- **Navigation**: XML navigation graphs

---

## Deep Link Patterns

The application handles multiple deep link schemes:

| Scheme | Example | Purpose |
|--------|---------|---------|
| `app.binance.com` | app.binance.com/en/trade | Web URL routing |
| `binance://` | binance://trade?symbol=BTCUSDT | App internal navigation |
| `wc://` | wc:0x... | WalletConnect requests |
| `bnc://` | bnc://wallet | Backup scheme |

### Common Deep Link Routes

```
binance://home
binance://markets
binance://trade?symbol=BTCUSDT&type=spot
binance://assets
binance://web3
binance://more
binance://c2c
binance://earn
binance://pay
```

---

## UI Framework Conventions

### Screen Organization

1. **Screen Container**: Top-level Activity hosting content
2. **Screen Variant**: Different modes within same container (Spot/Margin/Futures)
3. **Sections**: Major content divisions
4. **Tabs**: Secondary navigation within sections
5. **Widgets**: Reusable UI components
6. **Overlays**: Bottom sheets, dialogs, modals

### Component Patterns

- **RecyclerView** for all list-based content
- **TabLayout + ViewPager2** for tab navigation
- **BottomSheetDialogFragment** for overlays
- **ConstraintLayout** for complex layouts
- **SwipeRefreshLayout** for pull-to-refresh

---

## Design System Tokens (Summary)

### Colors

- **Primary**: #F0B90B (Binance Yellow)
- **Background Light**: #FFFFFF
- **Background Dark**: #181A20
- **Text Primary Light**: #1E2329
- **Text Primary Dark**: #EAECEF
- **Success**: #0ECB81
- **Error**: #F6465D
- **Warning**: #F0B90B

### Typography

- **Font Family**: System default (Roboto on Android)
- **Heading Sizes**: 24px, 20px, 18px, 16px
- **Body Sizes**: 14px, 12px
- **Caption**: 10px

### Spacing

- **Base Unit**: 4px
- **Standard Margins**: 16px, 12px, 8px
- **Card Padding**: 12px
- **List Item Height**: 56px minimum

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Complete list of screens and navigation
- [03-Exchange-Homepage](03-exchange-homepage.md) - Exchange home screen details
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 wallet home screen
- [37-Navigation-System](37-navigation-system.md) - Detailed navigation architecture
- [32-Colors-Theme](32-colors-theme.md) - Full color specifications

---

_Last Updated: 2026-03-12_
