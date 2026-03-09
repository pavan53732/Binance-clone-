# 24-futures-complete.md: Binance Futures High-Fidelity Specification

## 1. Global Navigation & Tab System

Located at the top of the interface, providing seamless transitions between derivative products.

| Tab Name        | Interface Type           | Key Visual Indicators                                                                     |
| :-------------- | :----------------------- | :---------------------------------------------------------------------------------------- |
| **USDⓈ-M**      | USDT/USDC Margined       | "USDⓈ-M" label with white circle background around 'S'.                                   |
| **COIN-M**      | Crypto Margined          | "COIN-M" label in bold white text. Underlying symbol uses coin name first (e.g., BTCUSD). |
| **Options**     | European Style Options   | Active tab indicated by a thick yellow underline. Notification pill often visible.        |
| **Smart Money** | Copy Trading & Analytics | "Smart Money" label followed by a hamburger menu icon (three horizontal lines).           |

---

## 2. Market Header & Information Bar

Micro-details for the active trading pair (Pro Mode).

- **Symbol Display**: `BTCUSDT Perp` (Left aligned, symbol in large white bold, `Perp` in a rounded gray badge).
- **Price Metric**: `-1.64%` (Displayed in red below the symbol).
- **Control Hub**:
  - **Chart Icon**: Vertical bar chart icon (K-line entry).
  - **Context Menu**: Three-dot vertical ellipsis (`...`) for settings, calculator, and preferences.
- **Top Promotional Banner**:
  - **UI Element**: Horizontal gold bar.
  - **Content**: Trophy icon + "Hot Campaign: ROBO Trading Challenge" + Dismiss icon (X).

---

## 3. Derivative Order Panel (Execution Hub)

Deep-dive into the interaction panel for opening/closing positions.

### A. Core Settings Toggle

- **Margin Mode Box**: `Cross` or `Isolated` (Gray container with white text).
- **Leverage Box**: `20x` (Adjustable slider entry, gray container).
- **Asset Mode (M/S)**: `S` or `M` toggle box for Single-Asset or Multi-Asset collateral usage.

### B. Buy/Sell Side Switcher

- **Segmented Control**: Large buttons for `Buy` (Green, active) and `Sell` (Gray, inactive).
- **Arrow Indicator**: A distinct pointed "tab" extension from the active button towards the input fields.

### C. Input Fields & Order Types

- **Selection Dropdown**: Defaulted to `Limit`. Features include Market, Stop-Limit, Trailing Stop, Post Only.
- **Price Input (USDT)**:
  - Left: Minus icon (`-`).
  - Center: Numeric input (e.g., `66182.3`).
  - Right: Plus icon (`+`) and `BBO` button (Best Bid/Offer) for instant liquidity price matching.
- **Amount Input (BTC)**:
  - Features a coin selector dropdown (`BTC` or `USDT`).
- **Precision Slider**: Horizontal line with four diamond-shaped nodes representing 25%, 50%, 75%, and 100% of available balance.

### D. Operational Flags

- **TP/SL**: Checkbox to pre-set Take Profit and Stop Loss levels.
- **Reduce Only**: Checkbox to ensure the order only closes existing positions.
- **GTC Dropdown**: Time-in-Force selector (Good-Til-Cancelled, IOC, FOK).

### E. Financial Summary & CTA

- **Max**: `0.000 BTC` (Maximum possible order size).
- **Cost**: `0.00 USDT` (Required margin for the order).
- **Primary Button**: Large green `Buy / Long` button (Width: match_panel).

---

## 4. Order Book & Activity Tape

Real-time liquidity visualization.

- **Funding Metrics**:
  - `Funding (8h) / Countdown`: Right-aligned above the tape.
  - `Value`: `-0.00516% / 00:20:18` (Red value indicating shorts pay longs).
- **Price/Amount Columns**: Header labels `Price (USDT)` and `Amount (BTC)`.
- **The Tape**:
  - **Asks (Red)**: 5+ lines showing sell liquidity.
  - **Bids (Green)**: 5+ lines showing buy liquidity.
  - **Spread Price**: Large green value (e.g., `66,184.8`) in the center with index price (`66,182.3`) below it.
- **Long/Short Ratio Bar**:
  - Horizontal dual-colored bar.
  - Example: `8.76%` (Green) vs `91.24%` (Red), showing extreme bearish sentiment.

---

## 5. Options Interface (Specialized)

UI components specific to the Options tab.

### A. Expiry Selector

- **Horizontal Scroll**: Dates formatted as `YY-MM-DD` (e.g., `26-03-09`).
- **Active State**: Yellow underline and white bold text.

### B. Option Cards (Call/Put)

- **Header**: Star icon (Favorites) + Strike Price (e.g., `1,925 Call`) + Leverage multiplier badge (`66.08x`).
- **Metrics Grid**:
  - `Breakeven (%)`: Precise price and percentage from mark (e.g., `1,954.3637 (+0.72%)`).
  - `Prob of Profit`: Percentage (e.g., `39.10%`).
- **Market Price Box**: Highlighted green box containing the `Mark Price` (e.g., `29.3`).

---

## 6. Smart Money Hub (Analytics)

Micro-details for the advanced trader monitoring dashboard.

### A. Top Traders Tab

- **Card Layout**:
  - **Avatar**: Circle with customized graphics (e.g., cartoon cat or ninja icon).
  - **Identity**: Username (e.g., `懂币猫的实盘`) + Subscriber count badge (`1,772 Subscribers`).
  - **Status Label**: `Private Positions` or `No Position` in a small gray box.
- **Performance KPIs**:
  - `30D PnL (USD)`: Large green value (e.g., `+$732,377.76`).
  - `30D ROI`: Percentage (e.g., `+42.55%`).
  - `Assets (USD)`: Total portfolio value (e.g., `$1,021,889.13`).
- **Equity Curve**: Small cyan sparkline visualization showing the 30-day profit trajectory.
- **CTA**: Yellow `Subscribe` or `Subscribe with Code` button.

### B. Smart Signal Tab

- **Symbol List**: Dominant market flow tracking.
- **Metrics**:
  - `Dominant Flow`: Labeled with an `S` (Sell) or `B` (Buy) icon + USD value (e.g., `19.56M USDT`).
  - **Action Bar**: Dual color progress bar showing buyer/seller count (e.g., `143 (Green) | 53 (Red)`).
- **Pairs Covered**: Traditional crypto (BTC/ETH/SOL/XRP) + Commodities (XAU/Gold, XAG/Silver).

---

## 7. Advanced Menu & Context Filters

- **Futures Sidebar Menu**:
  - **Events**: Promotions and leaderboard entries.
  - **Trading Bots**: Grid trading and rebalancing entry points.
  - **Copy Trading**: Manager/Investor dashboard.
- **Symbol Filter Sheet**:
  - Full-screen bottom sheet with search bar and sortable alphabetized list of "Perpetual" pairs.
