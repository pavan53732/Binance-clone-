# Binance UI/UX Knowledge Base - Features & Functions

## Overview

This document provides a comprehensive list of all features and functions in the Binance Android app, organized by the two primary interfaces: **Exchange (CeFi)** and **Web3 Wallet (DeFi)**.

---

## Core Interface Switcher

**Purpose**: Allows users to toggle between the centralized Exchange and the decentralized Web3 Wallet.

| Component  | Location                          | Interaction                                   |
| ---------- | --------------------------------- | --------------------------------------------- |
| Top Toggle | Top center of Home/Markets/Assets | Tap "Exchange" or "Web3" to switch interfaces |

---

## PART 1: Exchange Interface (CeFi)

### 1. Home Screen (Exchange)

The primary dashboard for the centralized exchange interface.

**App Header Row**:

- **Sidebar Menu**: User profile avatar (Top-Left); provides entry to Profile Settings, Reward Hub, Gift Cards, and VIP status dashboard.
- **Search Bar**: Centered input field featuring:
  - **Flame Icon**: Left-aligned, triggers "Hot Searches" landing page.
  - **Dynamic Placeholder**: Rotates trending assets (e.g., "HOLO hot search").
  - **Magnifying Glass**: Right-aligned, initiates search query.
- **Interface Switcher**: "Exchange | Wallet" central toggle; includes yellow underline for active "Exchange" state.
- **Action Hub**: Right-aligned icon set:
  - **Customer Support**: Headset icon; launches live chat support.
  - **Binance Pay**: QR/Pay logo; quick access to payment and scanner functions.
  - **Notifications**: Bell icon with red "99+" badge for unread alerts.

**Portfolio Summary (Pro Mode)**:

- **Est. Total Value (INR)**: Primary balance display in local currency (INR).
  - **Privacy Toggle**: "Eye" icon to hide/show sensitive balance values (replaces with `****`).
- **PNL Dashboard**: Displays "Today's PNL" in INR and percentage (e.g., green text for positive gains).
- **Primary CTA**: High-contrast yellow **"Add Funds"** button for quick fiat or crypto deposits.

**Interaction Hub**:

- **Promotional Banners**: Horizontal carousel for events (e.g., "Win 1 BTC").
- **Market Overview / Rankings**:
  - **Tabs**: Hot, Gainers, Losers, New Listing, 24h Vol.
  - **Asset Cards**: High-level tokens (BNB, BTC, SOL) showing live price, 24h change pill, and dynamic sparkline chart.
- **Quick Service Hub**: Gateway cards with micro-details:
  - **P2P Orders**: "Buy/Sell Crypto with INR" via Peer-to-Peer; includes "Find Offer" quick-link.
  - **Send Cash**: Direct crypto-to-fiat settlement entry; display shows actual reference rate (e.g., "₹101.16 USDT/INR").

**Discover Feed (Multi-Tab Content)**:

- **Navigation Tabs**: Discover, Following, Campaign, Announcements, Live, News, Academy, Hot.
- **Content Types**:
  - **Announcements**: Dynamic list of new listings, events, and system logs (e.g., "Win 1 BTC") with precise publication timestamps.
  - **Live Feed**: Video previews featuring:
    - **Live Badge**: High-visibility red "||| LIVE" indicator.
    - **Viewer Metrics**: Live count of current viewers (e.g., "3,672 Viewers").
    - **Interaction**: Floating real-time community comments with user identities.
  - **News Feed**: Real-time ticker with:
    - **Timeline**: Vertical chronological flow with specific dates (e.g., "Mar 9 2026").
    - **Engagement Icons**: Comment, Retweet, Like, and Share buttons with interactive counts.
  - **Academy**: Educational portal with icon-based navigation for categories: Blockchain, NFT, DeFi, Security, and Trading.
  - **Hot Feed**: Dynamic social tracker including:
    - **Hashtags**: Top-trending tags (e.g., "#AltcoinSeason") with participant volume.
    - **Sentiment Polls**: "How do you feel about BTC today?" with interactive "Bearish" (Red) and "Bullish" (Green) buttons + "6,125 Joined" count.
    - **Market Rapid Risers**: Ranking of top-searched assets with real-time mini-charts and "Rapid Riser" labeling.
- **Floating Action Button (FAB)**: Persistent yellow circular button (`#FCD535`) with black "+" symbol; anchors bottom-right for quick trade or post creation.

### 2. Markets (Exchange)

**Spot Market**:

- Search by symbol (BTC, ETH, etc.).
- Categories: Favorites, USDT, FDUSD, BTC, Alts.
- Sorting: Price, 24h Change, Volume.

**Futures Market**:

- USD-M Markets (USDT/USDC settled).
- COIN-M Markets (Crypto settled).
- Options & Strategy Trading.

### 3. Trade (Exchange - Spot)

**Chart System**:

- Candlestick patterns (1m, 15m, 1h, 4h, 1d).
- Technical Indicators: MA, EMA, BOLL, RSI, MACD.
- Full-screen landscape mode.

**Order Execution**:

- **Limit Order**: Set specific buy/sell price.
- **Market Order**: Instant execution at best price.
- **Stop-Limit / OCO**: Advanced risk management.
- **Grid Trading**: Automated buy/sell within ranges.
- **Alpha Trading Mode**: High-performance "Alpha" tab for advanced order execution.
- **Suggest Price Logic**: Real-time "Suggest Price" label in input fields based on taker/maker preference.
- **Taker Fee Promo**: Yellow badge logic for "0 Taker Fee" promotions on specific pairs.

### 4. Futures (Exchange)

**Leverage & Margin**:

- Leverage Slider (1x to 125x).
- Margin Modes: **Cross** (Share balance) vs **Isolated** (Specific allocation).
- **TP/SL**: Take Profit and Stop Loss setup during or after entry.

**Position Management**:

- **Auto-Deleverage (ADL) indicator**: Visual status bar for liquidation queue.
- **Margin Ratio**: High-fidelity liquidation risk meter with color-coded warning zones.
- **Partial/Full Close**: Precision buttons for exiting positions.
- **Asset Modes**:
  - `S` (Single-Asset Mode): Collateralized by a single asset.
  - `M` (Multi-Asset Mode): Collateralized by multiple assets (e.g., USDT + USDC).

**Advanced Analytics & Intelligence**:

- **Top Traders (Smart Money)**: Direct performance tracking with:
  - `Subscriber Verification`: Logic for active vs total subscriber counts.
  - `Equity Curve Analysis`: Visual sparkline generation based on 30D historical PnL.
- **Smart Signals**:
  - `Dominant Flow Detection`: Real-time tracking of Large-Order volume (Sell/Buy dominance).
  - `Engagement Scoring`: Person silhouette icon tracking real-time user interaction (`Total` vs `Active`).
- **Options Trading**:
  - `ITM/OTM Detection`: Dynamic background color shifts (Green/White) based on Strike vs Index Price.
  - `Probability of Profit`: Real-time calculation displayed on Strike cards.

### 5. Assets (Exchange)

**Wallet Types**:

- **Spot**: Primary trading funds.
- **Funding**: P2P and Card spending.
- **Earn**: Staked assets.
- **Futures**: Collateral for leveraged trades.

**Functions**:

- **Deposit/Withdraw**: On-chain and internal transfers.
- **Convert**: Zero-fee instant swap between large/small cap coins.
- **Transfer**: Move funds between internal wallet types (e.g., Spot to Futures).

---

## PART 2: Web3 Wallet Interface (DeFi)

### 1. Home Screen (Web3 Wallet)

**MPC Wallet Management**:

- Cloud Backup (Google Drive/iCloud) for key shards.
- Multi-chain balance aggregation.
- Copy Address button with network selection popup.

**Asset Overview**:

- "Tokens" list vs "NFTs" tab.
- Send/Receive/Swap/History quick buttons.

**Security Banner**:

- MPC key shard status indicator.
- Backup verification prompts.

### 2. Discover / DApps

**DApp Browser**:

- Search bar for URL entry or DApp names.
- Recently used DApps list.
- Categories: DeFi, Games, Social, Tools.

**Meme Rush (Feature)**:

- Interactive dashboard for trending "Meme" coins.
- Real-time heatmaps and social sentiment indicators.
- Quick-buy buttons for high-volatility tokens.

**Sentio Booster (Earn)**:

- Exclusive Web3 yield farming opportunities.
- "Boost" button to apply multipliers to staking APR.
- Progress bars for reward accumulation.

### 3. Markets / DEX Swap (Web3)

**Decentralized Exchange (DEX)**:

- Network Selector (BNB Chain, Ethereum, Polygon, Arbitrum, etc.).
- Slippage Tolerance configuration (0.1%, 0.5%, 1%, or Custom).
- Gas Fee Estimation (Slow/Average/Fast).
- **Bridge Support**: Cross-chain asset migration within the swap interface.

**Market Rankings (On-Chain)**:

- Trending tokens on DEXs.
- Liquidity pool data and volume analysis.

### 4. Assets (Web3)

**Multi-Chain Asset List**:

- Tokens grouped by network or consolidated view.
- **Spam Token Filter**: Automatic hiding of suspicious airdrops.
- Token Import (Manual contract address entry).

**NFT Gallery**:

- Visual grid of owned NFTs.
- Metadata view (rarity, attributes).
- Send NFT function.

---

## PART 3: Shared Features & Validations

### 1. Account & Security (Universal)

| Feature                     | Description                                                      |
| --------------------------- | ---------------------------------------------------------------- |
| Identity Verification (KYC) | Document upload and facial recognition flow (required for CeFi). |
| 2FA (Two-Factor)            | Binance Authenticator, Google Auth, SMS, and Email.              |
| Passkeys                    | Biometric login support (Fingerprint/FaceID).                    |
| Wallet Activity Alerts      | Real-time push notifications for all transfers.                  |

### 2. Input Validations Summary

| Field Type     | Validation                                             | UI Error State                        |
| -------------- | ------------------------------------------------------ | ------------------------------------- |
| Crypto Address | Regex match for specific network (e.g., 0x... for EVM) | Inline text: "Invalid Address Format" |
| Order Amount   | Amount > Min Step & Amount <= Balance                  | Grayed out "Buy/Sell" button          |
| Slippage       | 0.01% to 50% range                                     | Yellow warning for >5% (High risk)    |
| Gas Price      | Gwei value must be > 0                                 | Spinner or "Network Busy" alert       |

### 3. State Management

- **Real-time Data**: WebSockets for order books and tickers.
- **Persistence**: Local storage for user preferences (Dark Mode, Language).
- **Loading States**: Shimmer effects for Asset lists; Skeleton screens for Home.
- **Error Handlers**: "Pull to Refresh" on all listing screens; Retry buttons for network timeouts.

---

## Notes

1. **KYC Dependency**: Web3 Wallet can be created before KYC, but Exchange features require full verification.
2. **Network Switching**: Changing the network in the Web3 Swap does NOT affect the Exchange Spot market.
3. **Internal Transfers**: "Binance Transfer" allows gasless movement between CeFi Spot wallet and Web3 Wallet (selected chains).
