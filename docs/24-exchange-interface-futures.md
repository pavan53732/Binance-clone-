# 24. Exchange Interface: Futures

Binance Futures High-Fidelity UI/UX Specification

## Overview

This document provides comprehensive documentation of the Binance **Exchange Futures Interface**, covering USDⓈ-M, COIN-M, Options, and Smart Money trading modes. It details the derivative order panel, order book visualization, options trading, and copy trading features based on reference images.

## 1. Global Navigation & Tab System

Located at the top of the interface, providing seamless transitions between derivative products.

| Tab Name        | Interface Type           | Key Visual Indicators & Behavior                                                                 |
| :-------------- | :----------------------- | :----------------------------------------------------------------------------------------------- |
| **USDⓈ-M**      | USDT/USDC Margined       | Active state: Thick yellow line. Switches order panel to USD-margined inputs (`BTC ▾` qty unit). |
| **COIN-M**      | Crypto Margined          | Active state: Thick yellow line. Switches order panel to coin-margined inputs (`Cont ▾` unit).   |
| **Options**     | European Style Options   | Active state: Thick yellow line. Completely changes layout to Options chain grid.                |
| **Smart Money** | Copy Trading & Analytics | Active state: Thick yellow line. Switches to trader analytics dashboard feed.                    |

_Note: Global top-right icons include a scanner icon (with yellow dot) and a hamburger menu (`≡`)._

- **Yellow Notification Dot**: A small yellow dot on icons (like the `...` menu or scanner) indicates a new feature or unread system notification is available.

---

## 2. Market Header & Information Bar

Micro-details for the active trading pair (Pro Mode).

### A. Campaign Notification Banner

- Appears conditionally directly above the trading pair header.
- **UI Element**: e.g., `🏆 Hot Campaign: ROBO Trading Challenge   ×`
- **Characteristics**: Full-width gray notification bar, yellow trophy icon, promotional text, dismiss `×` button on the far right.

### B. Trading Pair Controls

- **Symbol Display**: `BTCUSDT Perp` or `BTCUSD CM Perp`.
  - Format: Large white symbol text followed by a gray pill badge indicating the contract type (`Perp` or `CM Perp`).
  - **Pair Dropdown**: Downward disclosure arrow (`▼`) next to symbol. Tapping this opens a full-screen pair selector modal to switch active markets across USD-M / COIN-M.
- **Price Metric**: Percentage change (e.g., `-1.64%`) displayed in red or green below the symbol.
- **Control Hub (Top Right)**:
  - Chart Icon (Candlesticks).
  - Info/Document icon (`?`) with folded corner.
  - Context Menu (Vertical ellipsis - `...`) features a yellow notification dot for new system updates.

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
- **Price Input**: Gray container. Includes label `Price (USDT)` on the right.
  - **BBO Button**: `BBO` gray text button on the left (Best Bid Offer). Tapping this auto-fills the field with the current best orderbook price.
  - **Stepper Controls**: Features `[-]` and `[+]` decrement/increment stepper buttons on the sides of the price field.
- **Amount Input**: Gray container.
  - Includes `Amount` label.
  - **Unit Selector Dropdown**: Changes based on contract type. Shows `BTC ▼` in USD-M (crypto amount) and `Cont ▼` in COIN-M (contract amount).
  - Note: Stepper controls `[-]` and `[+]` are context-dependent and may not always appear on the amount field natively.
- **Precision Slider**: Horizontal track with **five diamond-shaped nodes** representing 0%, 25%, 50%, 75%, and 100% of available balance.
  - The active segment fill color changes dynamically based on the selected side (Green fill for Buy/Long, Red fill for Sell/Short).

### D. Operational Flags

- **TP/SL Checkbox**: Label features a **dotted underline**.
- **Reduce Only Checkbox**: Standard checkbox label.
- **Post Only / GTC Checkbox**: Depending on mode, includes dropdown indicators.

### E. Financial Summary & CTA

- **Balance / Transfer Element**: Displays `Avbl 0.00 USDT` above the input fields.
  - **Transfer Button**: A yellow swap icon `⇄` sits next to the available balance. Tapping this opens the transfer modal (Spot ↔ Futures).
- **Max**: e.g., `0.000 BTC` or `0 Cont` (Maximum possible order size).
- **Cost**: e.g., `0.00 USDT` or `0.00000000 BTC`. Label features a **dotted underline**.
- **Primary Action Button**: Full-width bold button.
  - Buy side: Large green `Buy / Long` button.
  - Sell side: Large red `Sell / Short` button.

### F. Account State Notification Panel

- Appears conditionally when the Futures wallet is inactive or zero-funded.
- **UI Element**: Warning icon + "All your assets have been transferred to the Spot wallet since your account is inactive. Click Activate and you can reactivate your UM Futures account at any time."
- **Action**: Contains a prominent `Activate` button in a grey container.

---

## 4. Order Book & Activity Tape

Real-time liquidity visualization.

- **Header List Column**: Header labels `Price (USDT)` and `Amount (BTC)` arranged hierarchically over the tape.
- **Funding Metrics**:
  - `Funding (8h)` (or `Funding / Countdown`): Right-aligned above the tape.
  - Values: e.g., `-0.00516% / 00:20:18` or `0.0100% / 00:27:06`. Values can be yellow or red.
- **The Tape**:
  - **Asks (Red Top Half)**: Ordered list of sell liquidity with faint red background depth bars growing from right to left.
  - **Spread Price Center**:
    - **Mark Price**: Large bold number (Green/Red depending on tick) representing the Mark Price (e.g., `66,184.8`).
    - **Index Price**: Smaller, secondary number directly below the Mark Price, featuring a dotted underline (e.g., `66,182.3`).
  - **Bids (Green Bottom Half)**: Ordered list of buy liquidity with faint green background depth bars.
- **View Toggles (Bottom Right of Order Book)**:
  - **Decimal Precision Selector**: Dropdown to adjust grouping tick size (e.g., `0.1 ▼`).
  - **Depth Display Toggles**: Three stacked bar icons to select viewing mode:
    - ▮▮ (Bids only - Green)
    - ▮▮ (Asks only - Red)
    - ▮▮ (Both - Mixed)
- **Order Book Imbalance Indicator (Buy/Sell Ratio Bar)**:
  - Horizontal progress bar positioned directly under the order book depth section.
  - Visually represents the ratio of resting buy vs. sell liquidity.
  - Example: `8.76%  [████░░░░░░░░]  91.24%` with correlated color coding.

---

## 4.5 Utility Drawers & Bottom Panels

Specialized expandable/tabbed panels unique to the Futures interface.

### A. Position Management Panel

- Bottom tabbed interface for managing active trades and resting orders.
- **Tabs**: `Positions (0)`, `Open Orders (0)`, `Bots`.
- **Sub-Controls**: Includes toggles/buttons for `Hide Other Pairs` and `Close All` on the far right.

### B. Chart Drawer

- Expandable panel tab located at the very bottom edge.
- **Label**: e.g., `BTCUSDT Perp Chart` with an upward expansion chevron. Pulling this up reveals the inline trading chart.

---

## 5. Options Interface (Specialized)

UI components specific to the European Style Options tab.

### A. Options Market Header & Controls

- **Header Top Right Controls**:
  - **Scan Icon**: Opens the strategy scanner.
  - **Help Icon**: Contextual help / options documentation.
  - **Menu Icon (`...`)**: Options feature hub overlay.
- **Options Notice Banner**:
  - Located at the top of the interface.
  - Example: `Important Notice: Binance Options Upgrade...`

### B. Asset & Expiry Selectors

- **Symbol Header**: e.g., `ETH Options ▼` with Index Price summary below (e.g., `1941.01`).
- **Asset Selector Sheet**: Accessed via the symbol header.
  - **Columns**: `Symbol` and `Index Price / BVOL` (Binance Volatility Index).
  - Tabbed view for `Favorites`, `USDⓈ-M`, `COIN-M`, `Options` at the top.
- **Sub-Tabs**: Horizontal scrolling layout: `Discover`, `Favorites`, `Call ↗`, `Put ↘`. Note the distinctive directional arrows on Call/Put tabs. The active tab has a thick yellow underline indicator.
- **Expiry Date Ribbon**: Horizontal scrollable list (e.g., `26-03-09`, `26-03-10`). Active date has a dark gray pill background with white text. Shows `Time to Expiry` below (e.g., `08:19:11`).

### B. Strike Price Cards (Grid Layout)

- **Index Price Separator**: A white pill displaying the current `Index Price` (e.g., `1941.01`).
  - **Behavior**: Acts as a scroll anchor indicator. It stays fixed in the center while the strike list scrolls behind it.
- **Individual Call/Put Cards**:
  - **Card Header**:
    - **Favorite Star**: Star icon next to the strike price. Tapping it adds/removes the specific option strike to Favorites.
    - **Strike Title**: e.g., `1,925 Call`.
    - **Leverage Multiplier Badge**: e.g., `64.20x` (Gray tag). Indicates the effective leverage equivalent of the option.
  - **Mark Price Box**: Dark teal rounded rectangle on the right containing the label `Mark Price` and large value (e.g., `30.2`).
  - **Metrics**:
    - `Breakeven (%)`: e.g., `1,955.2352 (+0.73%)`. Right aligned to the label.
    - `Prob of Profit`: e.g., `38.99%`. Right aligned to the label.

### C. Context Elements

- **Options Context Menu Overlay**: Appears from top right ellipsis.
  - **Layout**: Grid icon menu (not a vertical text list).
  - Contains icons for `Events`, `Copy`, `Bots`, `?`, `...` and a `Manage Features` edit link.

---

## 6. Smart Money Hub (Analytics & Copy Trading)

The dashboard for tracking and subscribing to advanced portfolios.

### A. Hub Navigation

- **Tabs**: `My Subscriptions`, `Top Traders`, `Smart Signal`. Active tab features white text and a thick yellow indicator line.

### B. Top Traders Feed

- **Controls**: Includes filters for time (`30D ▼`), ranking metric (`PnL: High to Low ▼`), `Search` icon (to find specific traders), and a `Filter` icon (to filter trader types).
- **Trader Card**:
  - **Header**: Avatar image (custom graphic/NFT) + Name string (e.g., `懂币猫的实盘`).
  - **Badges**: Subscriber count icon (e.g., `1 Subscribers` or `1,772 Subscribers`) and position status tag (`Private Positions` or `No Position` in a rounded gray tag).
  - **Sparkline**: Small cyan trajectory graph plotted over 30 days.
  - **Key Metrics**:
    - `30D PnL (USD)`: Large prominent value (e.g., `+$732,377.76`).
    - `30D ROI`: e.g., `+42.55%`.
    - `Assets (USD)`: Total managed assets (e.g., `$1,021,889.13`).
  - **CTA**: Yellow primary button spanning the bottom. Shows `Subscribe` for public traders or `Subscribe with Code` for private/exclusive traders requiring access codes.

### C. Smart Signal Feed

- **Filters & Controls**:
  - Dropdowns for Timeframe (`30m ▼`) and Symbol (`Symbol ▼`).
  - **Auto-Refresh Icon**: A small circular arrow icon with `30s` indicating the feed automatically refreshes every 30 seconds.
- **Symbol Selector Bottom Sheet**:
  - Title `Symbols` with close X.
  - Incorporates a `Search` input wrapper with a text `Cancel` button.
  - Multi-select capability: Checkmark list starting with `All ✔`, followed by specific pairs like `BTCUSDT Perpetual`, `ETHUSDT Perpetual`, etc.
- **Signal List Item**:
  - Pair Label: e.g., `ETHUSDT Perp`.
  - Content: `Dominant Flow` text.
  - Direction Indicator: `S` tag in red (Sell pressure) or `B` tag in green (Buy pressure), followed by flow volume (e.g., `19.56M USDT`).
  - Sentiment Ratio Line: Small horizontal dual-colored thin progress bar (Green/Red).
  - Participation Metric: Two person icon outline + total/split numbers (e.g., `143 ( 53 )` indicating total traders and long/short breakdown).
  - Interactive: Right-aligned chevron or `View` button to explore details.

### D. Empty States

- **My Subscriptions "No records"**: Used when no data exists. Centered composition displaying a gray graphical illustration of a magnifying glass positioned over document files with an exclamation mark, accompanied by the text "No records" directly beneath.
