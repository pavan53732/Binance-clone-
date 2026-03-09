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

- **Sidebar Menu**: Access to profile, security settings, and VIP status.
- **Search Bar**: Contextual search with "Hot searches" (e.g., "HOLO hot search").
- **Interface Switcher**: "Exchange | Wallet" toggle.
- **Action Hub**: Global buttons for Chat/Notifications (99+ badge), Help, and QR/Pay.

**Portfolio Summary (Pro Mode)**:

- **Est. Total Value (INR)**: Displays holdings in local currency with a breakdown toggle.
- **Add Funds**: Primary yellow CTA for onboarding fiat/crypto.
- **PNL Dashboard**: "Today's PNL" display with daily profit/loss and percentage trend.

**Interaction Hub**:

- **Promotional Banners**: Horizontal carousel for events (e.g., "Win 1 BTC").
- **Market Rankings Grid**: High-level cards for top assets (BNB, BTC, SOL) showing:
  - Price and 24h percentage change.
  - Live sparkline mini-chart for trend visualization.
- **Quick Service Cards**: High-visibility cards for main gateways:
  - **P2P Orders**: "Buy/Sell Crypto with INR".
  - **Send Cash / Receive Fiat**: Displays real-time reference rates (e.g., USDT/INR price).

**Discover Feed (Multi-Tab Content)**:

- **Navigation Tabs**: Discover, Following, Campaign, Announcements, Live, News, Academy, Hot.
- **Content Types**:
  - **Campaign**: Joined events and project leaderboards (CreatorPad).
  - **Announcements**: New listings and event logs with timing.
  - **Live**: Thumbnail-based livestream previews with viewer counts.
  - **News**: Chronological news feed with likes/comments/shares interaction.
  - **Academy**: Educational modules ("A Beginner's Guide").
  - **Hot**: Trending topics (e.g., #AltcoinSeason) and sentiment polls ("Bearish vs Bullish").
  - **Floating CTA**: Persistent yellow "+" button for quick trade/post actions.

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

### 4. Futures (Exchange)

**Leverage & Margin**:

- Leverage Slider (1x to 125x).
- Margin Modes: **Cross** (Share balance) vs **Isolated** (Specific allocation).
- **TP/SL**: Take Profit and Stop Loss setup during or after entry.

**Position Management**:

- Auto-Deleverage (ADL) indicator.
- Margin Ratio (Liquidation risk meter).
- Partial/Full Close buttons.

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
