# 25. Exchange Interface: Trade Page

Comprehensive documentation of the Binance Trade (Spot/Convert/Margin) Interface, detailing order forms, order book dynamics, and asset selection.

## 1. Top Navigation & Feature Selector

- **Trading Modes (Tabs):**
  - **Convert:** Simplified OTC-style trading.
  - **Spot:** Standard exchange trading (Central feature).
  - **Alpha:** [NEW] High-fidelity mode for on-chain tokens (Yellow "New" badge).
  - **Margin:** Leveraging assets (Cross/Isolated sub-tabs).
  - **Fiat:** Direct currency trading.
  - **P2P:** Peer-to-peer trading (Red "99+" chat bubble icon).
  - **Express:** [NEW] Fast-track trading (Yellow "New" badge).
- **Asset Selector (Top Left):** Displays current pair (e.g., BTC/USDT), 24h change %, and price.
- **Utility Actions (Top Right):**
  - **Settings:** Slider icon for slippage and preference settings.
  - **History:** Clock with circular arrow icon for trade history.
  - **More:** Vertical ellipsis (Three dots) containing "Copy", "Bots", "Manage Feature".

## 2. Order Entry Form (Center/Right)

- **Buy/Sell Toggle:**
  - **Styling:** Features a **slanted/skewed divider** between the Green (Buy) and Red (Sell) states.
- **Order Type Selector:** Dropdown for "Limit", "Market", "Stop-Limit", etc. "Market" type displays "Market Price" placeholder.
- **Input Fields:**
  - **Price:** Manual input; features an **integrated "BBO" (Best Bid Offer) button** and "Suggest [Price]" actionable label.
  - **Amount:** Quantity entry with integrated currency pill (e.g., `USDC`).
- **Interactive Controls:**
  - **Numeric Keypad:** Custom dark-themed keypad for rapid entry.
  - **Slider:** Diamond-shaped thumb with nodes at 25%, 50%, 75%, 100%.
- **Availability:** Displays "Available [Asset Balance]" with a yellow `+` icon.
- **Primary Action Button:** Large Button with directional pointer extension.

## 3. Order Book & Recent Trades

- **Order Book (Left/Right depending on layout):**
  - **Sell Orders (Asks):** Red prices, descending order.
  - **Buy Orders (Bids):** Green prices, descending order.
  - **Spread:** Center display showing the gap between mid-price and current market price.
  - **Depth Visualization:** Horizontal bars behind price/amount representing volume depth.
- **Recent Market Trades:** Real-time scrolling list of executed trades with price, quantity, and timestamp.

## 4. Main Chart Area

- **Candlestick Chart:** Interactive chart with timeframes (1m, 5m, 1h, 1d, etc.).
- **Technical Indicators:** Volume bars, MA (Moving Averages), EMA, Bollinger Bands, etc.
- **State Toggle:** Option to switch between "Standard" and "TradingView" chart engines.

## 5. Bottom Position Panel

- **Tabs:**
  - **Open Orders:** Active but unfilled orders with "Cancel All" option.
  - **Order History:** past completed/canceled orders.
  - **Trade History:** Execution-level details.
  - **Funds:** Summary of relevant assets for the current pair.

## 6. Asset Selector & Search (Deep Audit)

- **Search Bar:** Includes "Cancel" text-link on the right when active.
- **Category Navigation:** Horizontal scrollable pills: `Trending`, `Solana`, `Base`, `Stocks`, `Meme`.
- **Token List Items:**
  - **Network Badges:** Circular logos with text labels (`Solana`, `Base`, `Arbitrum`, `Sonic`, `Sui`) in the bottom right of token icons.
  - **Profit/Promo Badges:**
    - Yellow `x2`, `x5`, `x10` leverage pills.
    - Yellow "Taker Fee Promo" badge for USDC pairs.
  - **Metrics:** Dual-metric display (`24h Volume` | `$ Market Cap`).
- **Tokenized Stocks:** Performance assets with `on` suffix (e.g., `SPYon`, `IAUon`).

## 7. Convert Page (Specialized View)

- **Simplified Form:** Two primary fields ("From" and "To") with asset logos and "Max" button.
- **Quote System:** "Preview Conversion" button leads to a timed quote screen (typically 5-6 seconds countdown).
- **Zero Fees:** UI explicitly mentions "0 Fees" for conversion.
