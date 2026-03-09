# 22-exchange-interface-futures.md: Binance Futures High-Fidelity Specification

## 1. Global Navigation & Tab System

Located at the top of the interface, providing seamless transitions between derivative products.

| Tab Name        | Interface Type           | Key Visual Indicators                                                                  |
| :-------------- | :----------------------- | :------------------------------------------------------------------------------------- |
| **USDⓈ-M**      | USDT/USDC Margined       | Active state: Thick yellow horizontal bar below label. White circle around 'S'.        |
| **COIN-M**      | Crypto Margined          | Underlying symbol uses coin name first (e.g., BTCUSD).                                 |
| **Options**     | European Style Options   | Active state: Yellow horizontal bar. Yellow semi-circular notification badge on right. |
| **Smart Money** | Copy Trading & Analytics | Yellow horizontal bar when active. Menu icon (three lines) on right.                   |

---

## 2. Market Header & Information Bar

Micro-details for the active trading pair (Pro Mode).

- **Symbol Display**: `BTCUSDT Perp` (Left aligned, symbol in large white bold, `Perp` in a rounded gray badge).
- **Price Metric**: `-1.64%` (Displayed in red below the symbol).
- **Control Hub**:
  - **Control Hub (Top Right)**:
  - Chart Icon (Candle sticks).
  - Context Menu (Vertical ellipsis - `...`) with yellow notification dot.
  - Scanner/QR icon with yellow notification dot (Options page).
  - Info/Document icon (`?`) with folded corner.
- **Header Badges**: Large white symbol text (e.g., `BTCUSDT`) followed by a gray pill badge indicating the contract type (`Perp` or `CM Perp`) with a downward disclosure arrow.
  - **Content**: Trophy icon + "Hot Campaign: ROBO Trading Challenge" + Dismiss icon (X).

---

## 3. Derivative Order Panel (Execution Hub)

Deep-dive into the interaction panel for opening/closing positions.

### A. Core Settings Toggle

- **Margin Mode Box**: `Cross` or `Isolated` (Gray container with white text and a **dotted underline** indicating tooltip availability).
- **Leverage Box**: `20x` (Adjustable slider entry, gray container with **dotted underline**).
- **Asset Mode (M/S)**: `S` or `M` toggle box for Single-Asset or Multi-Asset collateral usage.

### B. Buy/Sell Side Switcher

- **Segmented Control**: Large buttons for `Buy` (Green, active) and `Sell` (Gray, inactive).
- **Arrow Indicator**: A distinct pointed "tab" extension from the active button towards the input fields.

### C. Input Fields & Order Types

- **Selection Dropdown**: Defaulted to `Limit` (Features **dotted underline**). Options: Market, Stop-Limit, Trailing Stop, Post Only.
- **Order Input Fields**:
  - Dotted underline indicates active tooltip trigger for Margin Mode, Leverage, Order Type, and Asset Selector labels.
  - Price Field: Includes `BBO` gray button and price label (e.g., `Price (USDT)`) with dotted underline.
  - Amount Field: Flanked by `[-]` and `[+]` precision buttons. Includes `Amount` label and asset dropdown (e.g., `BTC` with ▾).
  - **Asset Mode**: Toggle switch button labeled `S` (Single Asset Mode).
- **Secondary Flags**:
  - `TP/SL` Checkbox: Label has a dotted underline.
  - `Reduce Only` Checkbox: Label has a dotted underline.
  - `GTC` (Good 'Til Cancel): Dropdown menu next to Reduce Only.
- **Summary Row**:
  - `Max`: Total available contract amount.
  - `Cost`: Label has a dotted underline (e.g., `Cost 0.00 USDT`).
- **Precision Slider**: Horizontal line with **five diamond-shaped nodes** representing 0%, 25%, 50%, 75%, and 100% of available balance.

### D. Operational Flags

- **TP/SL**: Checkbox with **dotted underline** on the label.
- **Reduce Only**: Checkbox (No underline).
- **GTC Dropdown**: Time-in-Force selector (`Post-Only` variant includes dotted underline).

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
  ###- **Sub-Tabs**: `Discover`, `Favorites`, `Call ↗`, `Put ↘`. (Note the directional arrows on Call/Put).
- **Strike Price Layout**:
  - Strike Price Separator: Center pill showing `Index Price` (e.g., `1941.16`) with a horizontal white line splitting Call from Put cards.
- **Option Performance**:
  - Leverage Badge: Gray pill with white text (e.g., `124.31x`).
  - Mark Price: Contained in a dark gray rounded box with color-coded value.
    d bubble displaying the `Index Price` (e.g., `1941.16`), separating In-the-Money (ITM) from Out-the-Money (OTM) options.
- **Card Header**: Star icon (Favorites) + Strike Price (e.g., `1,925 Call`) + Gray leverage multiplier badge (`66.08x`).
- **Metrics Grid**:
  - `Breakeven (%)`: Precise price and percentage in brackets (e.g., `1,954.3637 (+0.72%)`).
  - `Prob of Profit`: Percentage value with two decimal places.
- **Market Price Box**: Dark gray block containing `Mark Price` text and a color-coded numeric value (Green/Red).

### C. Activation Prompt (Overlay)

- **UI Element**: Dark bottom-anchored card.
- **Title**: "Wanna hedge risks?" with close (X) icon.
- **Description**: Text prompting user to activate their Options account.
- **CTA**: Full-width yellow `Activate Account` button.

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

- **Symbol List**: Dominant### Smart Money Hub Details
- **Trader Performance**: High-fidelity Sparklines (30D equity curves) in green (profit) or red (loss).
- **Smart Signal Row**:
  - `Dominant Flow`: `S` (Red Box) or `B` (Green Box).
  - `Sentiment Bar`: Dual-progress bar (Long/Short ratio).
  - `Engagement`: Person icon + `Total (Active)` interaction counts, e.g., `143 ( 53 )`. Parenthetical value indicates active/recent signals.
  - `Action`: Gray "View" button on the far right of each signal row.
- **Empty State**: Magnifying glass over documents icon for "No records".
  precedes the counts.
- **Engagement**: Green `View` button on the right of each pair card.
- **Pairs Covered**: Traditional crypto (BTC/ETH/SOL/XRP) + Commodities (XAU/Gold, XAG/Silver).

### C. Empty State (Subscriptions)

- **UI Element**: Large centered graphic (Gray magnifying glass over documents with an exclamation point).
- **Text**: "No records" centrally aligned below the graphic.

---

## 7. Advanced Menu & Context Filters

- **Futures Sidebar Menu**:
  - **Events**: Promotions and leaderboard entries.
  - **Trading Bots**: Grid trading and rebalancing entry points.
  - **Copy Trading**: Manager/Investor dashboard.
- **Symbol Filter Sheet**:
  - Full-screen bottom sheet with search bar and sortable alphabetized list of "Perpetual" pairs.
