# 24. Exchange Interface: Futures

Binance Futures High-Fidelity UI/UX Specification

## Overview

This document provides comprehensive documentation of the Binance **Exchange Futures Interface**, covering USDⓈ-M, COIN-M, Options, and Smart Money trading modes. It details the derivative order panel, order book visualization, options trading, and copy trading features based on reference images.

## 1. Global Navigation & Tab System

Located at the top of the interface, providing seamless transitions between derivative products.

| Tab Name        | Interface Type           | Key Visual Indicators                                                               |
| :-------------- | :----------------------- | :---------------------------------------------------------------------------------- |
| **USDⓈ-M**      | USDT/USDC Margined       | Active state: Thick yellow horizontal bar below label. White text.                  |
| **COIN-M**      | Crypto Margined          | Active state: Thick yellow horizontal bar below label. White text.                  |
| **Options**     | European Style Options   | Active state: Thick yellow horizontal bar. Yellow semi-circular notification badge. |
| **Smart Money** | Copy Trading & Analytics | Active state: Thick yellow horizontal bar. Yellow semi-circular notification badge. |

_Note: Global top-right icons include a scanner icon (with yellow dot) and a hamburger menu (`≡`)._

---

## 2. Market Header & Information Bar

Micro-details for the active trading pair (Pro Mode).

- **Symbol Display**: `BTCUSDT Perp` or `BTCUSD CM Perp`.
  - Format: Large white symbol text followed by a gray pill badge indicating the contract type (`Perp` or `CM Perp`) with a downward disclosure arrow (`▼`).
- **Price Metric**: Percentage change (e.g., `-1.64%`) displayed in red or green below the symbol.
- **Control Hub (Top Right)**:
  - Chart Icon (Candlesticks).
  - Info/Document icon (`?`) with folded corner.
  - Context Menu (Vertical ellipsis - `...`) with yellow notification dot.

---

## 3. Derivative Order Panel (Execution Hub)

Deep-dive into the interaction panel for opening/closing positions.

### A. Core Settings Toggle

- **Margin Mode Box**: `Cross` or `Isolated` (Gray container with white text and a **dotted underline** indicating active tooltip trigger).
- **Leverage Box**: e.g., `20x` (Adjustable slider entry, gray container with **dotted underline**).
- **Asset Mode (M/S)**: Toggle switch button labeled `S` (Single Asset Mode) or `M` (Multi-Asset Mode).

### B. Buy/Sell Side Switcher

- **Segmented Control**: Large buttons for `Buy` (Green) and `Sell` (Red).
- **Arrow Indicator**: A distinct pointed "tab" extension from the active button pointing downwards towards the input fields, highlighting the active side.

### C. Input Fields & Order Types

- **Selection Dropdown**: Defaulted to `Limit` (Features **dotted underline**). Options typically include Market, Stop-Limit, Trailing Stop, Post Only.
- **Price Input**: Gray container. Includes `BBO` gray text button on the left and label `Price (USDT)` on the right.
- **Amount Input**: Gray container flanked by `[-]` and `[+]` decrement/increment buttons. Includes `Amount` label and asset dropdown (e.g., `BTC ▾` or `Cont ▾`).
- **Precision Slider**: Horizontal track with **five diamond-shaped nodes** representing 0%, 25%, 50%, 75%, and 100% of available balance. The active segment is colored (green for long, red for short).

### D. Operational Flags

- **TP/SL Checkbox**: Label features a **dotted underline**.
- **Reduce Only Checkbox**: Standard checkbox label.
- **Post Only / GTC Checkbox**: Depending on mode, includes dropdown indicators.

### E. Financial Summary & CTA

- **Max**: e.g., `0.000 BTC` or `0 Cont` (Maximum possible order size).
- **Cost**: e.g., `0.00 USDT` or `0.00000000 BTC`. Label features a **dotted underline**.
- **Primary Action Button**: Full-width bold button.
  - Buy side: Large green `Buy / Long` button.
  - Sell side: Large red `Sell / Short` button.

---

## 4. Order Book & Activity Tape

Real-time liquidity visualization.

- **Header List Column**: Header labels `Price (USDT)` and `Amount (BTC)` arranged hierarchically over the tape.
- **Funding Metrics**:
  - `Funding (8h)` (or `Funding / Countdown`): Right-aligned above the tape.
  - Values: e.g., `-0.00516% / 00:20:18` or `0.0100% / 00:27:06`. Values can be yellow or red.
- **The Tape**:
  - **Asks (Red Top Half)**: Ordered list of sell liquidity with faint red background depth bars growing from right to left.
  - **Spread Price Center**: Large current price value (e.g., `66,177.30`) in bold color (Green/Red) correlating to latest tick, with index price (e.g., `66,178.6`) below it with an underline.
  - **Bids (Green Bottom Half)**: Ordered list of buy liquidity with faint green background depth bars.
- **View Toggles**: At the top right of the order list block, controls exist to show only bids, only asks, or spread view, plus a decimal precision selector.

---

## 5. Options Interface (Specialized)

UI components specific to the European Style Options tab.

### A. Asset & Expiry Selectors

- **Symbol Header**: e.g., `ETH Options ▼` with Index Price summary below (e.g., `1941.01`).
- **Asset Selector Sheet**: Accessed via the symbol header. Columns for `Symbol` and `Index Price / BVOL`. Tabbed view for `Favorites`, `USDⓈ-M`, `COIN-M`, `Options` at the top.
- **Sub-Tabs**: Horizontal scrolling layout: `Discover`, `Favorites`, `Call ↗`, `Put ↘`. Note the distinctive directional arrows on Call/Put tabs. The active tab has a thick yellow underline indicator.
- **Expiry Date Ribbon**: Horizontal scrollable list (e.g., `26-03-09`, `26-03-10`). Active date has a dark gray pill background with white text. Shows `Time to Expiry` below (e.g., `08:19:11`).

### B. Strike Price Cards (Grid Layout)

- **Index Price Separator**: A white pill displaying the current `Index Price` (e.g., `1941.01`), acting as the center divider line.
- **Individual Call/Put Cards**:
  - **Card Header**: Star icon (for Favorites), Strike Title (e.g., `1,925 Call`), and Leverage specific gray badge (e.g., `64.20x`).
  - **Mark Price Box**: Dark teal rounded rectangle on the right containing the label `Mark Price` and large value (e.g., `30.2`).
  - **Metrics**:
    - `Breakeven (%)`: e.g., `1,955.2352 (+0.73%)`. Right aligned to the label.
    - `Prob of Profit`: e.g., `38.99%`. Right aligned to the label.

### C. Context Elements

- **Notification Strip**: Yellow bell icon + "Important Notice: Binance Options Upgrade..." + Dismiss icon (X).
- **Options Context Menu Overlay**: Appears from top right ellipsis. Contains grid icons for `Events`, `Copy`, `Bots`, `?`, `...` and a `Manage Features` edit link.

---

## 6. Smart Money Hub (Analytics & Copy Trading)

The dashboard for tracking and subscribing to advanced portfolios.

### A. Hub Navigation

- **Tabs**: `My Subscriptions`, `Top Traders`, `Smart Signal`. Active tab features white text and a thick yellow indicator line.

### B. Top Traders Feed

- **Trader Card**:
  - **Header**: Avatar image (custom graphic/NFT) + Name string (e.g., `懂币猫的实盘`).
  - **Badges**: Subscriber count icon (`1,772 Subscribers`) and position status tag (`Private Positions` or `No Position` in a rounded gray tag).
  - **Sparkline**: Small cyan trajectory graph plotted over 30 days.
  - **Key Metrics**:
    - `30D PnL (USD)`: Large prominent value (e.g., `+$732,377.76`).
    - `30D ROI`: e.g., `+42.55%`.
    - `Assets (USD)`: Total managed assets (e.g., `$1,021,889.13`).
  - **CTA**: Yellow primary button spanning the bottom (`Subscribe` or `Subscribe with Code`).

### C. Smart Signal Feed

- **Filters**: Dropdowns for Timeframe (`30m ▼`) and Symbol (`Symbol ▼`).
- **Symbol Selector Bottom Sheet**: Title `Symbols` with close X. Incorporates a `Search` input wrapper with a text `Cancel` button. Checkmark list for `All`, `BTCUSDT Perpetual`, `ETHUSDT Perpetual`, etc.
- **Signal List Item**:
  - Pair Label: e.g., `ETHUSDT Perp`.
  - Content: `Dominant Flow` text.
  - Direction Indicator: `S` tag in red or `B` tag in green, followed by flow volume (e.g., `19.56M USDT`).
  - Sentiment Ratio Line: Small horizontal dual-colored thin progress bar (Green/Red).
  - Participation Metric: Two person icon outline + numbers (e.g., `2060 ( 1238 )`).
  - Interactive: Right-aligned chevron or `View` button to explore details.

### D. Empty States

- **My Subscriptions "No records"**: Used when no data exists. Centered composition displaying a gray graphical illustration of a magnifying glass positioned over document files with an exclamation mark, accompanied by the text "No records" directly beneath.
