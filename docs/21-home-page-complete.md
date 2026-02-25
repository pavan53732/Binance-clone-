# Binance UI/UX Knowledge Base - Home Page Complete

## Overview

This document provides comprehensive documentation of the Binance Android app's Home page, including all sections, components, and interactions. The Home page serves as the primary entry point for users after login.

---

## Home Page Architecture

### Main Entry Points

The Binance app uses multiple home fragments depending on the user's context:

| Fragment/Activity         | Package                                        | Purpose                    |
| ------------------------- | ---------------------------------------------- | -------------------------- |
| `DemoHomeFragment`        | `com.finance.demo`                             | Demo/Lite trading home     |
| `ContentHomeFragment`     | `com.binance.content.internal.home`            | Content/Feed home          |
| `ContentHomeActivity`     | `com.binance.content.internal.home`            | Content feed container     |
| `DashBoardHomeFragment`   | `com.market.dashboard.container`               | Market dashboard           |
| `CopyTradingHomeFragment` | `com.finance.copytrading.feature.home.ui.main` | Copy trading home          |
| `StrategyHomeActivity`    | `com.finance.strategy.feature`                 | Trading bots/Strategy home |
| `BinancePayHomeActivity`  | `com.binance.dev.pay.home`                     | Binance Pay home           |

---

## Home Page Sections

### 1. Header & Top Navigation

#### Components

| Component            | Description                       | Specifications                                                            |
| -------------------- | --------------------------------- | ------------------------------------------------------------------------- |
| Menu / Notifications | Hamburger menu with unread badge  | Top-left (e.g., "99+" chat bubble icon)                                   |
| App Mode Toggle      | Pill-shaped segmented control     | Center top ("Exchange" vs "Web3" toggle)                                  |
| Customer Support     | Headphone icon                    | 24dp icon, Top-right                                                      |
| Scan/Pay Icon        | Quick QR scanner & Binance Pay    | 24dp icon, Top-right                                                      |
| Global Search Bar    | Prominent full-width search input | Located below top icons, shows trending text (e.g., "🔥 DOGE hot search") |

#### Layout Structure

```xml
<ConstraintLayout>
    <!-- Top Row -->
    <RelativeLayout>
        <ImageView id="@+id/menu_icon" />
        <SegmentedControl id="@+id/exchange_wallet_toggle" />
        <ImageView id="@+id/support_icon" />
        <ImageView id="@+id/scan_icon" />
    </RelativeLayout>
    <!-- Search Bar -->
    <SearchInputView id="@+id/global_search_bar" />
</ConstraintLayout>
```

---

### 2. Balance & Portfolio Section

#### Components

| Component      | Description                           | Specifications                                    |
| -------------- | ------------------------------------- | ------------------------------------------------- |
| Total Value    | "Est. Total Value" with fiat currency | Includes visibility toggle (eye icon)             |
| Main Balance   | Large numeric monetary display        | 28sp Bold, `#FFFFFFFF`                            |
| Primary Action | "Add Funds" button                    | Binance Yellow background (`#F0B90B`), Black text |
| Today's PNL    | Daily profit/loss indicator           | Green text (`+1.23%`) or Red, with dropdown arrow |

---

### 3. Promotional Banners & Events

#### Components

Horizontally scrolling cards/banners positioned immediately below the balance section.

- **Example Content:** "Join" events, "Save on TradFi", Trading Competitions.
- **Style:** Dark elevated cards (`#1E2329`) often featuring partial illustrations and Call-to-Action buttons.

---

### 4. Market Mini-Charts Cards

#### Components

A multi-column grid replacing the traditional flat list, featuring quick-glance market cards for top assets.

| Element            | Description                     | Specifications                            |
| ------------------ | ------------------------------- | ----------------------------------------- |
| Coin Logo & Symbol | Crypto identifier               | e.g., BNB, SOL                            |
| Price              | Current asset price             | Large typography                          |
| Change %           | 24h performance                 | Green (`#0ECB81`) or Red (`#F6465D`)      |
| Sparkline Chart    | Line graph showing recent trend | Rendered at the bottom bounds of the card |

---

### 5. Contextual Action Panels

#### Components

Action blocks for high-frequency user tasks (replacing the generic 8-icon grid in the Pro view).

| Action Block | Purpose                            | Layout Example                                         |
| ------------ | ---------------------------------- | ------------------------------------------------------ |
| P2P Orders   | Buy or Sell Crypto with local fiat | Contains sub-buttons (`P2P Profile`, `Find Offer`)     |
| Send Cash    | Send Crypto / Receive Fiat         | Displays current reference rates and quick-send arrows |

---

### 6. Content Feed Tabs (Social & News)

#### Components

A sticky horizontal tab bar located immediately above the main bottom navigation, which filters the main infinite-scroll feed content below it.

| Tab          | Content Type                                                    |
| ------------ | --------------------------------------------------------------- |
| Discover     | Algorithmic feed of crypto news, articles, and influencer posts |
| Following    | Content strictly from followed users/creators                   |
| Campaign     | Ongoing Binance activities, airdrops, and promotions            |
| Announcement | Official system and newly listed coin announcements             |

---

### 9. Bottom Navigation

#### Tabs

| Tab     | Icon         | Label     | Default Destination |
| ------- | ------------ | --------- | ------------------- |
| Home    | Home icon    | "Home"    | Home fragment       |
| Markets | Chart icon   | "Markets" | Markets fragment    |
| Trade   | Trade icon   | "Trade"   | Trade fragment      |
| Futures | Futures icon | "Futures" | Futures fragment    |
| Assets  | Wallet icon  | "Assets"  | Assets fragment     |

#### Specifications

| Property       | Value       |
| -------------- | ----------- |
| Height         | 56dp        |
| Icon Size      | 24dp        |
| Label Size     | 12sp        |
| Active Color   | `#FFF0B90B` |
| Inactive Color | `#FF848E9C` |
| Background     | `#FF0B0E11` |

#### Layout Structure

```
LinearLayout (horizontal)
├── LinearLayout (Home tab)
│   ├── ImageView (icon)
│   └── TextView (label)
├── LinearLayout (Markets tab)
│   ├── ImageView (icon)
│   └── TextView (label)
├── LinearLayout (Trade tab)
│   ├── ImageView (icon)
│   └── TextView (label)
├── LinearLayout (Futures tab)
│   ├── ImageView (icon)
│   └── TextView (label)
└── LinearLayout (Assets tab)
    ├── ImageView (icon)
    └── TextView (label)
```

---

## Home Page Data Sources

### Balance Data

| Data Point     | Source                                           | Update Frequency  |
| -------------- | ------------------------------------------------ | ----------------- |
| Total Balance  | `/bapi/accounts/v1/private/account/balance`      | Real-time         |
| BTC Equivalent | Calculated client-side                           | On balance change |
| 24h Change     | `/bapi/accounts/v1/private/account/asset-change` | On load           |

### Market Data

| Data Point     | Source                                                   | Update Frequency |
| -------------- | -------------------------------------------------------- | ---------------- |
| Ticker Prices  | WebSocket `wss://stream.binance.com:9443/ws/!ticker@arr` | Real-time        |
| Hot Pairs      | `/bapi/market/v1/public/market/hot`                      | On load          |
| Gainers/Losers | `/bapi/market/v1/public/market/top-gainers`              | On load          |

### Earn Data

| Data Point | Source                                    |
| ---------- | ----------------------------------------- |
| Products   | `/bapi/earn/v1/public/union/product/list` |
| APR        | Product detail endpoint                   |

---

## Home Page Interactions

### Pull to Refresh

- Refreshes all sections
- Shows loading indicator
- Updates balance, market data, earn products

### Scroll Behavior

- Header collapses on scroll
- Quick actions remain visible
- Bottom navigation persists

### Navigation Patterns

| From | To               | Method             |
| ---- | ---------------- | ------------------ |
| Home | Any section      | Bottom tab click   |
| Home | Coin detail      | Coin item click    |
| Home | Deposit/Withdraw | Quick action click |
| Home | Search           | Search icon click  |

---

## String Resources Summary

| Resource ID           | Value         |
| --------------------- | ------------- |
| `@string/_deposit`    | "Deposit"     |
| `@string/_withdrawal` | "Withdrawal"  |
| `@string/_transfer`   | "Transfer"    |
| `@string/_buy`        | "Buy"         |
| `@string/_sell`       | "Sell"        |
| `@string/_lending`    | "Savings"     |
| `@string/_all_market` | "All Markets" |
| `@string/_hot`        | "Hot"         |
| `@string/_search`     | "Search"      |
| `@string/_setting`    | "Settings"    |
| `@string/balance`     | "Balance"     |
| `@string/_assets`     | "Assets"      |
| `@string/_wallets`    | "Wallet"      |

---

## Notes

1. Home page layout uses numeric resource IDs (e.g., `2131623936.xml`)
2. Real-time price updates use WebSocket connections
3. Balance visibility toggle stores preference locally
4. Quick actions can be customized based on user preferences
5. Promo banners are fetched dynamically from server
6. Watchlist syncs across devices for logged-in users
7. All monetary values use proper locale formatting
8. Colors follow the Binance dark theme design system
