# Binance UI/UX Screen Catalog

## Overview

This catalog provides a comprehensive inventory of all screens in the Binance Android app, categorized by their respective interfaces (Exchange and Web3 Wallet). It serves as a reference for layout files and key visual components.

---

## 1. Exchange Interface (CeFi)

### Core Sections

| Screen Name    | Layout File                    | Purpose               | Key Components                            |
| :------------- | :----------------------------- | :-------------------- | :---------------------------------------- |
| **Home (Pro)** | `fragment_home_pro.xml`        | Dashboard & Discovery | Portfolio Summary, P2P, Promotion Banners |
| **Markets**    | `fragment_markets.xml`         | Asset Tracking        | Favorites, Spot, Futures, Sparkline Lists |
| **Trade**      | `fragment_trade_spot.xml`      | Token Swapping        | Buy/Sell Form, Order Book, Margin Info    |
| **Futures**    | `fragment_futures_main.xml`    | Derivatives Trading   | Leverage, Margin Type, Open Positions     |
| **Assets**     | `fragment_assets_overview.xml` | Portfolio Mgmt        | Spot/Funding/Margin Tabs, Value Privacy   |

### Advanced Features

| Screen Name    | Layout File                    | Purpose             | Key Components                            |
| :------------- | :----------------------------- | :------------------ | :---------------------------------------- |
| **Options**    | `fragment_futures_options.xml` | Options Trading     | Call/Put Strike Cards, Breakeven Analysis |
| **Smart Hub**  | `fragment_smart_money.xml`     | High-Tier Analytics | Lead Trader Cards, Sparklines, B/S Flow   |
| **Subscriber** | `fragment_top_traders.xml`     | Copier Intelligence | Engagement Counts, ROI/PnL Stats          |
| **Signals**    | `fragment_smart_signals.xml`   | Market Intel        | Dominant Flow Boxes, Sentiment Progress   |

---

## 2. Web3 Wallet Interface (DeFi)

### Core Sections

| Screen Name        | Layout File                  | Purpose             | Key Components                         |
| :----------------- | :--------------------------- | :------------------ | :------------------------------------- |
| **Wallet Home**    | `fragment_web3_home.xml`     | DeFi Portfolio      | Receive Button, Multi-Wallet Switcher  |
| **Wallet Markets** | `fragment_web3_markets.xml`  | Web3 Token Tracking | Hot Searches, Trending, Network Filter |
| **Wallet Trade**   | `fragment_web3_swap.xml`     | Decentralized Swap  | Network Selector, Slidder, Slippage    |
| **Discover**       | `fragment_discovery_hub.xml` | DApp Browser        | Alpha, Meme Rush, Sentio Booster       |
| **Web3 Assets**    | `fragment_web3_assets.xml`   | DeFi Asset List     | NFTs, Staking, History, Network Icons  |

### Specialized Wallet Screens

| Screen Name        | Layout File                   | Purpose           | Key Components                      |
| :----------------- | :---------------------------- | :---------------- | :---------------------------------- |
| **Meme Rush**      | `fragment_web3_meme.xml`      | Token Launchpad   | New Tokens, APY Charts, Join Button |
| **Sentio Booster** | `fragment_sentio_booster.xml` | Ecosystem Rewards | Program Progress, Tasks, Claim UI   |

---

## Authentication Section

### 1. Splash Screen

| Property       | Value                                      |
| -------------- | ------------------------------------------ |
| Screen Name    | SplashScreen                               |
| Layout File    | `activity_splash.xml`                      |
| Purpose        | App initialization, check login state      |
| Key Components | Logo animation, loading indicator          |
| Navigation     | → Login (not logged in) → Home (logged in) |
| Input          | None                                       |
| Output         | Auth state determination                   |

### 2. Login Screen

| Property       | Value                                                                 |
| -------------- | --------------------------------------------------------------------- |
| Screen Name    | LoginActivity                                                         |
| Layout File    | `activity_login.xml`                                                  |
| Purpose        | User authentication                                                   |
| Key Components | Email/phone input, password input, login button, social login buttons |
| Navigation     | → OTP Verification → Home → Register → Forgot Password                |
| Input          | Email/Phone, Password                                                 |
| Output         | Auth token                                                            |

**UI Elements**:

- Logo (top center)
- Email/Phone input field
- Password input field with visibility toggle
- "Forgot Password?" link
- Login button (primary)
- Social login buttons (Google, Apple)
- "Don't have an account? Register" link

### 3. Register Screen

| Property       | Value                                                |
| -------------- | ---------------------------------------------------- |
| Screen Name    | RegisterActivity                                     |
| Layout File    | `activity_register.xml`                              |
| Purpose        | New user registration                                |
| Key Components | Email/phone input, password creation, terms checkbox |
| Navigation     | → OTP Verification → KYC → Login                     |
| Input          | Email/Phone, Password, Confirm Password              |
| Output         | User account created                                 |

### 4. OTP Verification Screen

| Property       | Value                                   |
| -------------- | --------------------------------------- |
| Screen Name    | OtpVerificationActivity                 |
| Layout File    | `activity_otp_verification.xml`         |
| Purpose        | Verify email/phone ownership            |
| Key Components | 6-digit OTP input, resend button, timer |
| Navigation     | → Home (success) → Previous (back)      |
| Input          | 6-digit OTP code                        |
| Output         | Verified status                         |

### 5. KYC Document Upload

| Property       | Value                                                 |
| -------------- | ----------------------------------------------------- |
| Screen Name    | KycDocumentActivity                                   |
| Layout File    | `activity_kyc_document.xml`                           |
| Purpose        | Identity verification                                 |
| Key Components | Document type selector, camera preview, upload button |
| Navigation     | → Selfie Verification → KYC Result                    |
| Input          | ID document photo                                     |
| Output         | Document submitted                                    |

### 6. KYC Selfie Verification

| Property       | Value                                        |
| -------------- | -------------------------------------------- |
| Screen Name    | KycSelfieActivity                            |
| Layout File    | `activity_kyc_selfie.xml`                    |
| Purpose        | Face verification                            |
| Key Components | Camera preview, face outline, capture button |
| Navigation     | → KYC Result                                 |
| Input          | Selfie photo                                 |
| Output         | Selfie submitted                             |

---

## Home Section

### 7. Home Screen (Exchange Pro)

| Property       | Value                                                                |
| -------------- | -------------------------------------------------------------------- |
| Screen Name    | HomeProFragment                                                      |
| Layout File    | `fragment_home_pro.xml`                                              |
| Purpose        | Master dashboard for CeFi trading, portfolio, and ecosystem news     |
| Key Components | Header Group, Portfolio Card, Action Grid, Discover Feed             |
| Navigation     | → Markets → Trade → Futures → Assets → Sidebar → Pay → Notifications |
| Input          | Pull-to-refresh, horizontal swipe (banners), vertical scroll (feed)  |
| Output         | Real-time asset values, trending market data, social content         |

**UI Elements & Component Hierarchy**:

1. **Global Header (Sticky)**:
   - Sidebar/Profile Trigger (Left)
   - Search Bar with rotating hot keywords (Center)
   - Global Action Tray: Notification (with badge), Customer Support, QR/Pay (Right)
   - Interface Toggle: "Exchange | Web3" (Top Center)

2. **Portfolio Dashboard**:
   - Total Balance Display (INR/BTC) with privacy mask.
   - 24h PNL indicator (Real-time percentage/value).
   - "Deposit/Add Funds" Primary CTA (Binance Yellow).

3. **Interaction Hub**:
   - Promotional Banner Carousel (Event driven).
   - Market Overview Grid: Quick-view cards for BNB, BTC, SOL with live sparklines.
   - Primary Service Gateway: P2P Trading card and "Send Cash/Receive Fiat" cards.

4. **Discover Feed (Multi-Tab)**:
   - Tab Bar: Discover, Following, Campaign, Announcements, Live, News, Academy, Hot.
   - Content Area: Mixed media (News, Livestreams, Announcements) with community metrics (Likes/Comments).
   - Floating Action Button (FAB): Quick access "+" menu for trading/posting.

### 8. Notification Center

| Property       | Value                                         |
| -------------- | --------------------------------------------- |
| Screen Name    | NotificationActivity                          |
| Layout File    | `activity_notification.xml`                   |
| Purpose        | View all notifications                        |
| Key Components | Notification list, filter tabs, mark all read |
| Navigation     | → Related screen (on tap)                     |
| Input          | Filter selection                              |
| Output         | Notification status                           |

---

## Markets Section

### 9. Markets Screen (Main)

| Property       | Value                                                                                     |
| -------------- | ----------------------------------------------------------------------------------------- |
| Screen Name    | MarketsFragment                                                                           |
| Layout File    | `fragment_markets.xml`                                                                    |
| Purpose        | Browse all trading pairs with AI Sentiment & Intelligence insights                        |
| Key Components | Favorites Grid, Multi-tab Navigation, AI Sentiment Card, Category Zone Cards, Ticker List |
| Navigation     | → Trade (pair selected)                                                                   |
| Input          | Search query, tab selection, grid/list toggle                                             |
| Output         | Selected trading pair, market sentiment insights                                          |

**UI Elements**:

- **Header**: Search bar + Notification/Pay tray.
- **Tab Layout**: Favorites, Spot, Futures, Feed, Data.
- **Ticker List**: RecyclerView with symbol, price, 24h change pill, and sparkline.
- **Bottom Navigation**: Sticky 5-tab bar (Home, Markets, Trade, Futures, Assets).

### 10. Search Screen

| Property       | Value                                       |
| -------------- | ------------------------------------------- |
| Screen Name    | SearchActivity                              |
| Layout File    | `activity_search.xml`                       |
| Purpose        | Search for trading pairs                    |
| Key Components | Search input, recent searches, results list |
| Navigation     | → Trade (pair selected)                     |
| Input          | Search query                                |
| Output         | Selected pair                               |

---

## Trade Section

### 11. Trade Screen (Main)

| Property       | Value                                        |
| -------------- | -------------------------------------------- |
| Screen Name    | TradeFragment                                |
| Layout File    | `fragment_trade.xml`                         |
| Purpose        | Execute trades                               |
| Key Components | Chart, order book, order form, trade history |
| Navigation     | → Pair Selection → Order Confirmation        |
| Input          | Order details                                |
| Output         | Order execution                              |

**UI Elements**:

- **Pair Selector**: Dropdown showing current symbol (e.g., BTC/USDT) + 24h performance.
- **Form Controls**: Horizontal Buy/Sell tabs (Green/Red color-coded).
- **Inputs**: Limit/Market switcher, Price/Amount fields, percentage quick-select (25%, 50%, 75%, 100%).
- **Order Book**: Vertical list of Ask (Red) and Bid (Green) orders with depth visualization.
- **Position Panel**: "Open Orders" and "Funds" tabs at the bottom.

### 12. Fullscreen Chart

| Property       | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Screen Name    | FullscreenChartActivity                                |
| Layout File    | `activity_fullscreen_chart.xml`                        |
| Purpose        | Detailed chart analysis                                |
| Key Components | Expanded chart, indicator controls, timeframe selector |
| Navigation     | → Trade (back)                                         |
| Input          | Indicator settings, timeframe                          |
| Output         | None                                                   |

### 13. Order Confirmation Screen

| Property       | Value                                        |
| -------------- | -------------------------------------------- |
| Screen Name    | OrderConfirmationActivity                    |
| Layout File    | `activity_order_confirmation.xml`            |
| Purpose        | Review and confirm order                     |
| Key Components | Order summary, confirm button, cancel button |
| Navigation     | → Trade (confirmed/cancelled)                |
| Input          | Order confirmation                           |
| Output         | Order result                                 |

### 14. Order History Screen

| Property       | Value                                   |
| -------------- | --------------------------------------- |
| Screen Name    | OrderHistoryActivity                    |
| Layout File    | `activity_order_history.xml`            |
| Purpose        | View order history                      |
| Key Components | Order list, filter options, status tabs |
| Navigation     | → Order Detail                          |
| Input          | Filter selection                        |
| Output         | Selected order                          |

---

## Futures Section

### 15. Futures Screen (Main)

| Property       | Value                                           |
| -------------- | ----------------------------------------------- |
| Screen Name    | FuturesFragment                                 |
| Layout File    | `fragment_futures.xml`                          |
| Purpose        | Futures trading                                 |
| Key Components | Chart, positions, order form, leverage selector |
| Navigation     | → Futures Pair Selection → Position Detail      |
| Input          | Order details, leverage                         |
| Output         | Futures order                                   |

**UI Elements**:

- Pair selector
- Leverage indicator
- Price chart
- Position list
- Order form with leverage slider
- Margin mode toggle

### 16. Position Detail Screen

| Property       | Value                                       |
| -------------- | ------------------------------------------- |
| Screen Name    | PositionDetailActivity                      |
| Layout File    | `activity_position_detail.xml`              |
| Purpose        | Manage open position                        |
| Key Components | Position info, TP/SL settings, close button |
| Navigation     | → Futures (back)                            |
| Input          | TP/SL values                                |
| Output         | Updated position                            |

---

## Assets Section

### 17. Assets Screen (Main)

| Screen Name | AssetsFragment |
| Layout File | `fragment_assets.xml` |
| Purpose | Comprehensive portfolio management (CeFi & DeFi) |
| Key Components | Account Tabs (Overview, Spot, Funding, Margin, Futures, Earn), Sticky Action Bar (Deposit, Withdraw, Transfer), Balance Card with Privacy Mask, Asset List with PNL Sparklines, Margin Risk Gauge, Futures Activation Banner |
| Navigation | → Deposit → Withdraw → Transfer → Asset Detail |
| Input | Account tab switching, Search, "Hide 0 Balance" toggle |
| Output | Portfolio valuation, risk metrics, individual asset history |

**UI Elements**:

- Total balance card (Privacy masked `*` state)
- Account type tabs (Spot, Funding, Futures, Options)
- Quick action buttons (Deposit, Withdraw, Transfer, Convert)
- Asset list with search & 24h Change sparklines
- Hide small assets toggle

### 18. Deposit Screen

| Property       | Value                                             |
| -------------- | ------------------------------------------------- |
| Screen Name    | DepositActivity                                   |
| Layout File    | `activity_deposit.xml`                            |
| Purpose        | Receive cryptocurrency                            |
| Key Components | Coin selector, network selector, QR code, address |
| Navigation     | → Assets (back)                                   |
| Input          | Coin selection, network selection                 |
| Output         | Deposit address                                   |

### 19. Withdraw Screen

| Property       | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Screen Name    | WithdrawActivity                                             |
| Layout File    | `activity_withdraw.xml`                                      |
| Purpose        | Send cryptocurrency                                          |
| Key Components | Coin selector, address input, amount input, network selector |
| Navigation     | → 2FA Verification → Assets                                  |
| Input          | Address, amount, network                                     |
| Output         | Withdrawal request                                           |

### 20. Transfer Screen

| Property       | Value                                                  |
| -------------- | ------------------------------------------------------ |
| Screen Name    | TransferActivity                                       |
| Layout File    | `activity_transfer.xml`                                |
| Purpose        | Move funds between accounts                            |
| Key Components | From/To account selectors, coin selector, amount input |
| Navigation     | → Assets (back)                                        |
| Input          | Accounts, coin, amount                                 |
| Output         | Transfer complete                                      |

### Web3 Interface Documentation

1. **Home:** [27-web3-interface-home.md](file:///c:/Users/pavan/PROJECTS/Binance-clone-/docs/27-web3-interface-home.md)
2. **Markets:** [28-web3-interface-markets.md](file:///c:/Users/pavan/PROJECTS/Binance-clone-/docs/28-web3-interface-markets.md)
3. **Swap:** [29-web3-interface-swap.md](file:///c:/Users/pavan/PROJECTS/Binance-clone-/docs/29-web3-interface-swap.md)
4. **Discovery:** [30-web3-interface-discover.md](file:///c:/Users/pavan/PROJECTS/Binance-clone-/docs/30-web3-interface-discover.md)
5. **Assets:** [31-web3-interface-assets.md](file:///c:/Users/pavan/PROJECTS/Binance-clone-/docs/31-web3-interface-assets.md)

### Specialized Web3 Sub-Interfaces

1. **Topic Rush (Markets):** Detailed in [28-web3-interface-markets.md](file:///c:/Users/pavan/PROJECTS/Binance-clone-/docs/28-web3-interface-markets.md#topic-rush).
2. **Web3 Pro Trading (Swap):** Detailed in [29-web3-interface-swap.md](file:///c:/Users/pavan/PROJECTS/Binance-clone-/docs/29-web3-interface-swap.md#pro-trading-mode).
3. **Meme Rush (Markets):** Detailed in [28-web3-interface-markets.md](file:///c:/Users/pavan/PROJECTS/Binance-clone-/docs/28-web3-interface-markets.md#meme-rush).

### 21. Asset Detail Screen

| Property       | Value                          |
| -------------- | ------------------------------ |
| Screen Name    | AssetDetailActivity            |
| Layout File    | `activity_asset_detail.xml`    |
| Purpose        | View single asset details      |
| Key Components | Balance, actions, transactions |
| Navigation     | → Deposit → Withdraw → Trade   |
| Input          | None                           |
| Output         | Action selection               |

### 22. Transaction History Screen

| Property       | Value                                           |
| -------------- | ----------------------------------------------- |
| Screen Name    | TransactionHistoryActivity                      |
| Layout File    | `activity_transaction_history.xml`              |
| Purpose        | View all transactions                           |
| Key Components | Transaction list, filter options, date selector |
| Navigation     | → Transaction Detail                            |
| Input          | Filter selection                                |
| Output         | Selected transaction                            |

### 23. Transaction Detail Screen

| Property       | Value                                 |
| -------------- | ------------------------------------- |
| Screen Name    | TransactionDetailActivity             |
| Layout File    | `activity_transaction_detail.xml`     |
| Purpose        | View transaction details              |
| Key Components | Transaction info, TXID, explorer link |
| Navigation     | → Block Explorer                      |
| Input          | None                                  |
| Output         | None                                  |

---

## Swap Section

### 24. Swap Screen

| Property       | Value                                              |
| -------------- | -------------------------------------------------- |
| Screen Name    | SwapActivity                                       |
| Layout File    | `activity_swap.xml`                                |
| Purpose        | Convert one crypto to another                      |
| Key Components | From/To coin selectors, amount input, rate display |
| Navigation     | → Swap Confirmation → Swap Result                  |
| Input          | Coins, amount                                      |
| Output         | Swap execution                                     |

### 25. Swap Confirmation Screen

| Property       | Value                                   |
| -------------- | --------------------------------------- |
| Screen Name    | SwapConfirmationActivity                |
| Layout File    | `activity_swap_confirmation.xml`        |
| Purpose        | Confirm swap transaction                |
| Key Components | Swap summary, rate info, confirm button |
| Navigation     | → Swap Result                           |
| Input          | Confirmation                            |
| Output         | Swap result                             |

---

## Earn Section

### 26. Earn Screen (Main)

| Property       | Value                                     |
| -------------- | ----------------------------------------- |
| Screen Name    | EarnActivity                              |
| Layout File    | `activity_earn.xml`                       |
| Purpose        | View staking and savings products         |
| Key Components | Product list, APY display, filter options |
| Navigation     | → Product Detail → Subscribe              |
| Input          | Filter selection                          |
| Output         | Selected product                          |

### 27. Earn Product Detail

| Property       | Value                                         |
| -------------- | --------------------------------------------- |
| Screen Name    | EarnProductDetailActivity                     |
| Layout File    | `activity_earn_product_detail.xml`            |
| Purpose        | View product details and subscribe            |
| Key Components | Product info, APY, duration, subscribe button |
| Navigation     | → Subscribe → Assets                          |
| Input          | Amount                                        |
| Output         | Subscription                                  |

---

## Settings Section

### 28. Settings Screen (Main)

| Property       | Value                                      |
| -------------- | ------------------------------------------ |
| Screen Name    | SettingsActivity                           |
| Layout File    | `activity_settings.xml`                    |
| Purpose        | App settings and preferences               |
| Key Components | Settings list, account info                |
| Navigation     | → Profile → Security → Preferences → About |
| Input          | Setting selection                          |
| Output         | Setting changes                            |

### 29. Profile Screen

| Property       | Value                                  |
| -------------- | -------------------------------------- |
| Screen Name    | ProfileActivity                        |
| Layout File    | `activity_profile.xml`                 |
| Purpose        | View and edit profile                  |
| Key Components | Avatar, name, email, phone, KYC status |
| Navigation     | → Edit Profile → KYC                   |
| Input          | Profile updates                        |
| Output         | Updated profile                        |

### 30. Security Screen

| Property       | Value                                    |
| -------------- | ---------------------------------------- |
| Screen Name    | SecurityActivity                         |
| Layout File    | `activity_security.xml`                  |
| Purpose        | Manage security settings                 |
| Key Components | 2FA toggle, password change, device list |
| Navigation     | → 2FA Setup → Password Change            |
| Input          | Security settings                        |
| Output         | Updated security                         |

### 31. 2FA Setup Screen

| Property       | Value                                   |
| -------------- | --------------------------------------- |
| Screen Name    | TwoFactorSetupActivity                  |
| Layout File    | `activity_two_factor_setup.xml`         |
| Purpose        | Enable two-factor authentication        |
| Key Components | QR code, manual key, verification input |
| Navigation     | → Security (back)                       |
| Input          | 2FA code                                |
| Output         | 2FA enabled                             |

### 32. Preferences Screen

| Property       | Value                                    |
| -------------- | ---------------------------------------- |
| Screen Name    | PreferencesActivity                      |
| Layout File    | `activity_preferences.xml`               |
| Purpose        | App preferences                          |
| Key Components | Language, currency, theme, notifications |
| Navigation     | → Settings (back)                        |
| Input          | Preference selections                    |
| Output         | Updated preferences                      |

### 33. About Screen

| Property       | Value                             |
| -------------- | --------------------------------- |
| Screen Name    | AboutActivity                     |
| Layout File    | `activity_about.xml`              |
| Purpose        | App information                   |
| Key Components | Version, terms, privacy, licenses |
| Navigation     | → Terms → Privacy → Licenses      |
| Input          | None                              |
| Output         | None                              |

---

## Additional Screens

### 34. QR Scanner Screen

| Property       | Value                                         |
| -------------- | --------------------------------------------- |
| Screen Name    | QrScannerActivity                             |
| Layout File    | `activity_qr_scanner.xml`                     |
| Purpose        | Scan QR codes for addresses                   |
| Key Components | Camera preview, scan frame, flashlight toggle |
| Navigation     | → Previous (with scanned data)                |
| Input          | Camera permission                             |
| Output         | Scanned address                               |

### 35. WebView Screen

| Property       | Value                          |
| -------------- | ------------------------------ |
| Screen Name    | WebViewActivity                |
| Layout File    | `activity_web_view.xml`        |
| Purpose        | Display web content            |
| Key Components | WebView, progress bar, toolbar |
| Navigation     | → Previous (back)              |
| Input          | URL                            |
| Output         | None                           |

### 36. Error Screen

| Property       | Value                             |
| -------------- | --------------------------------- |
| Screen Name    | ErrorActivity                     |
| Layout File    | `activity_error.xml`              |
| Purpose        | Display error states              |
| Key Components | Error icon, message, retry button |
| Navigation     | → Previous (retry)                |
| Input          | None                              |
| Output         | Retry action                      |

### 37. Maintenance Screen

| Property       | Value                                     |
| -------------- | ----------------------------------------- |
| Screen Name    | MaintenanceActivity                       |
| Layout File    | `activity_maintenance.xml`                |
| Purpose        | System maintenance notification           |
| Key Components | Maintenance icon, message, estimated time |
| Navigation     | None (modal)                              |
| Input          | None                                      |
| Output         | None                                      |

---

## Screen Count Summary

| Section        | Screen Count |
| -------------- | ------------ |
| Authentication | 6            |
| Home           | 2            |
| Markets        | 2            |
| Trade          | 4            |
| Futures        | 2            |
| Assets         | 7            |
| Swap           | 2            |
| Earn           | 2            |
| Settings       | 6            |
| Additional     | 4            |
| **Total**      | **37**       |

---

## Navigation Flow Summary

```
Splash Screen
     │
     ├── [Not Logged In] ──► Login
     │                            │
     │                            ├── [Register] ──► Register
     │                            │                       │
     │                            │                       └──► OTP ──► KYC
     │                            │
     │                            ├── [Forgot Password] ──► Forgot Password
     │                            │
     │                            └── [Login Success] ──► Home
     │
     └── [Logged In] ──► Home
                              │
                              ├── Bottom Nav: Markets
                              ├── Bottom Nav: Trade
                              ├── Bottom Nav: Futures
                              └── Bottom Nav: Assets
```

---

## Notes

1. All screens support dark theme as primary
2. Most screens have pull-to-refresh capability
3. Error states are handled consistently across screens
4. Loading states use shimmer effects
5. Navigation follows Material Design guidelines
6. Back button behavior is consistent per screen type
7. Deep links can navigate to most screens
8. All financial screens require authentication
9. Settings changes may require re-authentication
10. Screen transitions use standard animations
