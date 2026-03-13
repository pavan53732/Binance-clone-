# 05-Exchange-Trade

## Overview

This document provides detailed specifications for the Trade screen - the central trading interface of the Binance exchange. This is the most complex screen in the application, supporting multiple trading modes (Spot, Margin, Futures), order types, charts, order books, and real-time data updates.

---

## Page Route

```
/trade
/trade/spot
/trade/margin
/trade/futures
```

**Deep Link Pattern:**
- `binance://trade`
- `binance://trade?symbol=BTCUSDT`
- `binance://trade?symbol=BTCUSDT&type=spot`
- `binance://trade?type=futures`

---

## Workflow Context

```
Markets Screen → Select Pair → Trade Screen
                                    │
                    ┌───────────────┼───────────────┐
                    ↓               ↓               ↓
              Spot Mode       Margin Mode     Futures Mode
                    ↓               ↓               ↓
              Place Order      Place Order    Place Order
                    │               │               │
                    └───────────────┼───────────────┘
                                    ↓
                            Order Confirmation
                                    ↓
                            Order Success/Error
```

**User Flow:**
1. User selects a trading pair from Markets screen
2. Trade screen opens with pair pre-selected
3. User chooses trading mode (Spot/Margin/Futures)
4. User analyzes chart and order book
5. User enters order details (price, quantity)
6. User selects order type (Limit/Market/Stop)
7. User confirms order → Success/Error feedback

---

## Screen Purpose

The Trade screen enables users to:
- **Select Trading Pair**: Choose from hundreds of trading pairs
- **Analyze Markets**: View charts, order book, trade history
- **Place Orders**: Buy/Sell with various order types
- **Manage Positions**: View open positions (Margin/Futures)
- **Set Price Alerts**: Create alerts for price targets
- **Access Trading Tools**: Indicators, drawings, fullscreen chart

---

## Screen Container Architecture

### Parent Container: TradeActivity
- **Package:** `com.binance.trade` (Spot), `com.finance.margin` (Margin), `com.finance.um` (Futures)
- **Layout:** `activity_trade.xml`
- **View ID:** `2131624200`

### Mode Switching
The Trade screen operates in three distinct modes:
1. **Spot Mode** - `com.finance.spot`
2. **Margin Mode** - `com.finance.margin`
3. **Futures Mode** - `com.finance.um`

---

## Tabs and Subviews

### Top Section: Pair Selector Bar

**Layout Reference:** `layout_trade_header.xml`

```
┌─────────────────────────────────────────────────────────────────┐
│ [←Back]  [BTC/USDT ▼]  [🔔]  [⋯]                                │
├─────────────────────────────────────────────────────────────────┤
│ Price: $45,123.45    24h Change: +2.34%    Vol: 1.2B            │
└─────────────────────────────────────────────────────────────────┘
```

**Components:**
- Back Button
  - View ID: `2131624201` (back_button)
  - Icon: Arrow left (24dp)
  
- Pair Selector
  - View ID: `2131624202` (pair_selector)
  - Format: "BTC/USDT" (base/quote)
  - Tap action: Opens pair selection bottom sheet
  
- Notification Button
  - View ID: `2131624203` (alert_button)
  - Icon: Bell (24dp)
  
- More Options Button
  - View ID: `2131624204` (more_button)
  - Icon: Ellipsis (24dp)
  - Menu: Settings, Leverage, Position mode

**Live Price Header:**
- Current Price
  - View ID: `2131624205` (current_price)
  - Large, bold typography
  - Color: Green (up) / Red (down)
  
- 24h Change
  - View ID: `2131624206` (price_change_24h)
  - Format: "+$1,234.56 (+2.34%)"
  
- 24h Volume
  - View ID: `2131624207` (volume_24h)
  - Format: "Vol: 1,234.56M"

---

### Middle Section: Chart + Order Book

**Layout Reference:** `layout_trade_main.xml`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│                     Chart Container                              │
│                     (TradingView WebView)                        │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [Timeframes] [1m][15m][1h][4h][1d]  [Indicators] [Drawings]      │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│   Order Book (left)        │        Trade History (right)        │
│   ┌─────────────────┐      │      ┌─────────────────┐           │
│   │ Price  │ Amount │      │      │ Time  │ Price  │           │
│   ├────────┼────────┤      │      ├────────┼────────┤           │
│   │ 45,130 │ 0.542 │      │      │ 12:34  │ 45,125 │           │
│   │ 45,129 │ 1.205 │      │      │ 12:33  │ 45,124 │           │
│   │ 45,128 │ 0.890 │      │      │ 12:32  │ 45,126 │           │
│   ├────────┼────────┤      │      ├────────┼────────┤           │
│   │ 45,127 │ 0.321 │      │      │        │        │           │
│   └────────┴────────┘      │      └─────────────────┘           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

#### Chart Container

**Layout Reference:** `layout_trade_chart.xml`

**Components:**
- Chart WebView
  - View ID: `2131624210` (chart_webview)
  - Content: TradingView lightweight charts
  
- Timeframe Selector
  - View ID: `2131624211` (timeframe_selector)
  - Options: 1m, 3m, 5m, 15m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 1w
  
- Indicator Button
  - View ID: `2131624212` (indicator_button)
  - Opens indicator selection panel
  
- Drawing Tools Button
  - View ID: `2131624213` (drawing_button)
  - Opens drawing tools panel
  
- Fullscreen Button
  - View ID: `2131624214` (fullscreen_button)
  - Expands chart to fullscreen

#### Order Book Panel

**Layout Reference:** `layout_order_book.xml`

**Components:**
- Order Book Title
  - View ID: `2131624220` (order_book_title)
  - Text: "Order Book"
  
- Depth Visualizer
  - View ID: `2131624221` (depth_visualizer)
  - Background bars showing bid/ask depth
  
- Bids List (Buyers)
  - View ID: `2131624222` (bids_list)
  - RecyclerView with green prices
  - Sorted: Highest bid at top
  
- Spread Indicator
  - View ID: `2131624223` (spread_indicator)
  - Format: "Spread: 0.01 (0.02%)"
  
- Asks List (Sellers)
  - View ID: `2131624224` (asks_list)
  - RecyclerView with red prices
  - Sorted: Lowest ask at top

**Order Book Item (item_order_book.xml):**
```
LinearLayout (horizontal)
├─ Price Text (green for bid, red for ask)
│   └─ TextView: 2131624225 (price)
├─ Amount Text
│   └─ TextView: 2131624226 (amount)
└─ Total Text (cumulative)
    └─ TextView: 2131624227 (total)
```

#### Trade History Panel

**Layout Reference:** `layout_trade_history.xml`

**Components:**
- Title
  - View ID: `2131624230` (trade_history_title)
  - Text: "Trades"
  
- Trade List
  - View ID: `2131624231` (trade_history_list)
  - RecyclerView showing recent trades
  
- Aggregated Toggle
  - View ID: `2131624232` (aggregate_toggle)
  - Switch between individual/aggregated

**Trade Item (item_trade.xml):**
```
LinearLayout (horizontal)
├─ Price (color based on side)
│   └─ TextView: 2131624233 (trade_price)
├─ Amount
│   └─ TextView: 2131624234 (trade_amount)
└─ Time
    └─ TextView: 2131624235 (trade_time)
```

---

### Bottom Section: Order Form

**Layout Reference:** `layout_order_form.xml`

```
┌─────────────────────────────────────────────────────────────────┐
│ [Buy] [Sell] [Margin] [Futures]                                  │
├─────────────────────────────────────────────────────────────────┤
│ Order Type: [Limit ▼]                                            │
├─────────────────────────────────────────────────────────────────┤
│ Price:    [____________]  (USDT)                                │
│ Stop:     [____________]  (USDT)  [Set Trigger Price]           │
├─────────────────────────────────────────────────────────────────┤
│ Amount:   [____________]  (BTC)                                  │
│           Available: 0.5421 BTC                                  │
├─────────────────────────────────────────────────────────────────┤
│ [ ] Post-Only  [ ] IOC  [ ] GTC                                 │
├─────────────────────────────────────────────────────────────────┤
│ Total:    450.00 USDT                                            │
│ Fee:      0.10 USDT (0.1%)                                       │
├─────────────────────────────────────────────────────────────────┤
│ [        Buy BTC (100% ▼)        ]                              │
│ [  25%  ][  50%  ][  75%  ][ 100%  ]                            │
└─────────────────────────────────────────────────────────────────┘
```

#### Mode Selector Tabs

**Layout Reference:** `layout_trade_mode_tabs.xml`

**Components:**
- Buy Tab
  - View ID: `2131624240` (tab_buy)
  - Active color: Green (#0ECB81)
  - Label: "Buy"
  
- Sell Tab
  - View ID: `2131624241` (tab_sell)
  - Active color: Red (#F6465D)
  - Label: "Sell"
  
- Margin Tab (when applicable)
  - View ID: `2131624242` (tab_margin)
  - Shows cross/isolated indicator
  
- Futures Tab (when applicable)
  - View ID: `2131624243` (tab_futures)
  - Shows leverage indicator

#### Order Type Dropdown

**Layout Reference:** `layout_order_type_selector.xml`

**Components:**
- Order Type Dropdown
  - View ID: `2131624250` (order_type_dropdown)
  
| Order Type | Description |
|------------|-------------|
| Limit | Set price and amount |
| Market | Buy/sell at market price |
| Stop-Limit | Trigger at stop, execute at limit |
| Stop-Market | Trigger at stop, execute at market |
| OCO | One Cancels the Other |

#### Price Input Section

**Components:**
- Price Label
  - View ID: `2131624251` (price_label)
  - Text: "Price" (localized)
  
- Price Input Field
  - View ID: `2131624252` (price_input)
  - Keyboard: Decimal number
  - Hint: "0.00"
  - Suffix: Quote asset symbol
  
- USD Equivalent
  - View ID: `2131624253` (price_usd_equivalent)
  - Format: "≈ $45,123.45"
  
- Stop Price Input (conditional)
  - View ID: `2131624254` (stop_price_input)
  - Visible when: Stop-Limit or Stop-Market selected

#### Amount Input Section

**Components:**
- Amount Label
  - View ID: `2131624260` (amount_label)
  - Text: "Amount"
  
- Amount Input Field
  - View ID: `2131624261` (amount_input)
  - Keyboard: Decimal number
  - Hint: "0.00"
  - Suffix: Base asset symbol
  
- Available Balance Display
  - View ID: `2131624262` (available_balance)
  - Format: "Available: 0.5421 BTC"
  
- Percentage Buttons
  - View ID: `2131624263` (percent_25)
  - View ID: `2131624264` (percent_50)
  - View ID: `2131624265` (percent_75)
  - View ID: `2131624266` (percent_100)

#### Order Options

**Components:**
- Post-Only Toggle
  - View ID: `2131624270` (post_only_checkbox)
  - Text: "Post Only"
  
- IOC (Immediate or Cancel) Toggle
  - View ID: `2131624271` (ioc_checkbox)
  - Text: "IOC"
  
- GTC (Good Till Cancel) Toggle
  - View ID: `2131624272` (gtc_checkbox)
  - Text: "GTC"

#### Order Summary

**Components:**
- Total Value
  - View ID: `2131624280` (order_total)
  - Format: "Total: 450.00 USDT"
  
- Estimated Fee
  - View ID: `2131624281` (estimated_fee)
  - Format: "Fee: 0.10 USDT (0.1%)"

#### Submit Button

**Components:**
- Buy/Sell Button
  - View ID: `2131624290` (submit_button)
  - Text: "Buy BTC" or "Sell BTC"
  - Background: Green (#0ECB81) for buy, Red (#F6465D) for sell
  - Height: 56dp
  - Corner radius: 8dp

---

### Position Panel (Margin/Futures Only)

**Layout Reference:** `layout_position_panel.xml`

**Components:**
- Position Header
  - View ID: `2131624300` (position_header)
  - Text: "Positions (3)"
  
- Position List
  - View ID: `2131624301` (position_list)
  - RecyclerView of open positions
  
- Position Item (item_position.xml):
```
LinearLayout (vertical)
├─ Symbol + Side Badge
│   └─ TextView: 2131624302
├─ Size + Entry Price
│   ├─ TextView: 2131624303 (size)
│   └─ TextView: 2131624304 (entry_price)
├─ Unrealized PnL
│   └─ TextView: 2131624305 (unrealized_pnl)
├─ Margin + Liquidation Price
│   └─ TextView: 2131624306 (liquidation_price)
└─ Action Buttons
    ├─ [Add Margin]
    └─ [Close]
```

---

## Filters and Selectors

### Pair Selector
- **Type:** Bottom Sheet
- **View ID:** `2131624202` (pair_selector)
- **Behavior:** Opens pair selection sheet
- **Categories:** Favorites, USDT, BTC, ETH, BNB, etc.

### Order Type Selector
- **Type:** Dropdown/Spinner
- **View ID:** `2131624250`
- **Options:** Limit, Market, Stop-Limit, Stop-Market, OCO

### Timeframe Selector
- **Type:** Chip group / Horizontal scroll
- **View ID:** `2131624211`
- **Options:** 1m, 3m, 5m, 15m, 1h, 2h, 4h, 6h, 8h, 12h, 1d, 1w, 1M

### Trading Mode Selector
- **Type:** Tab Layout
- **View ID:** `2131624240` (tab_buy)
- **Modes:** Spot, Margin (Cross/Isolated), Futures (USDT-M/COIN-M)

---

## Component Hierarchy

```
TradeActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton: back
│       ├─ TextView: pair_name (clickable → pair_selector)
│       ├─ ImageButton: alert
│       └─ ImageButton: more_options
├─ NestedScrollView / ViewPager2
│   ├─ Fragment: ChartFragment
│   │   ├─ WebView: chart (TradingView)
│   │   ├─ HorizontalScrollView: timeframes
│   │   ├─ ChipGroup: timeframe_chips
│   │   ├─ ImageButton: indicators
│   │   ├─ ImageButton: drawings
│   │   └─ ImageButton: fullscreen
│   ├─ Fragment: OrderBookFragment
│   │   ├─ TextView: title
│   │   ├─ ProgressBar: loading
│   │   ├─ RecyclerView: bids_list
│   │   ├─ TextView: spread
│   │   └─ RecyclerView: asks_list
│   └─ Fragment: TradeHistoryFragment
│       ├─ TextView: title
│       └─ RecyclerView: trades_list
├─ OrderFormView (custom view)
│   ├─ TabLayout: buy_sell_tabs
│   │   ├─ Tab: Buy (green)
│   │   └─ Tab: Sell (red)
│   ├─ Spinner: order_type
│   ├─ TextInputLayout: price
│   ├─ TextInputLayout: stop_price
│   ├─ TextInputLayout: amount
│   ├─ LinearLayout: percentage_buttons
│   ├─ CheckBox: post_only
│   ├─ CheckBox: ioc
│   ├─ CheckBox: gtc
│   ├─ TextView: total_value
│   ├─ TextView: fee_estimate
│   └─ Button: submit_order
├─ PositionPanelView (futures/margin)
│   ├─ TextView: header
│   └─ RecyclerView: positions
└─ BottomSheet: order_confirm_sheet
    ├─ TextView: order_summary
    ├─ TextView: total_value
    ├─ CheckBox: confirm_checkbox
    ├─ Button: cancel
    └─ Button: confirm
```

---

## Data Models

### Trading Pair Model
```kotlin
data class TradingPair(
    val symbol: String,              // "BTCUSDT"
    val baseAsset: String,          // "BTC"
    val quoteAsset: String,          // "USDT"
    val pricePrecision: Int,        // 2
    val quantityPrecision: Int,     // 4
    val minNotional: Double,        // 10.0
    val minLotSize: Double,         // 0.00001
    val maxLotSize: Double,         // 100.0
    val priceFilter: PriceFilter,   // tickSize, minPrice, maxPrice
    val lotSizeFilter: LotSizeFilter
)
```

### Order Model
```kotlin
data class Order(
    val symbol: String,
    val orderId: Long,
    val orderListId: Long,
    val price: Double,
    val origQty: Double,
    val executedQty: Double,
    val cummulativeQuoteQty: Double,
    val status: OrderStatus,
    val timeInForce: TimeInForce,
    val type: OrderType,
    val side: OrderSide,  // BUY or SELL
    val stopPrice: Double? = null,
    val updateTime: Long,
    val isWorking: Boolean
)

enum class OrderType { LIMIT, MARKET, STOP_LOSS, STOP_LOSS_LIMIT, TAKE_PROFIT, TAKE_PROFIT_LIMIT, LIMIT_MAKER }
enum class OrderSide { BUY, SELL }
enum class OrderStatus { NEW, PARTIALLY_FILLED, FILLED, CANCELED, PENDING_CANCEL, REJECTED, EXPIRED }
enum class TimeInForce { GTC, IOC, FOK }
```

### Order Book Model
```kotlin
data class OrderBook(
    val lastUpdateId: Long,
    val bids: List<OrderBookEntry>,  // [[price, qty], ...]
    val asks: List<OrderBookEntry>
)
```

---

## API Endpoints

### Trading Endpoints
```
POST /api/v3/order (Spot)
POST /api/v3/order/test (Spot - test mode)
POST /sapi/v1/margin/order (Margin)
POST /fapi/v1/order (Futures)

DELETE /api/v3/order (Cancel order)
DELETE /api/v3/openOrders (Cancel all)
GET /api/v3/order (Get order status)
GET /api/v3/openOrders (Open orders)
GET /api/v3/allOrders (All orders)
GET /api/v3/myTrades (Trade history)
```

### Market Data Endpoints
```
GET /api/v3/depth
Parameters: { "symbol": "BTCUSDT", "limit": 100 }

GET /api/v3/ticker/24hr
Parameters: { "symbol": "BTCUSDT" }

GET /api/v3/ticker/bookTicker
Parameters: { "symbol": "BTCUSDT" }

GET /api/v3/klines
Parameters: { "symbol": "BTCUSDT", "interval": "1m", "limit": 500 }

GET /api/v3/exchangeInfo
```

---

## WebSocket Streams

### Trade Streams
| Stream | Purpose |
|--------|---------|
| `<symbol>@trade` | Individual trade execution |
| `<symbol>@kline_1m` | 1-minute candlestick |
| `<symbol>@kline_5m` | 5-minute candlestick |
| `<symbol>@kline_1h` | 1-hour candlestick |
| `<symbol>@depth20@100ms` | Order book 20 levels |
| `<symbol>@depth10@100ms` | Order book 10 levels |
| `<symbol>@ticker` | 24hr ticker |

### User Streams
| Stream | Purpose |
|--------|---------|
| `<listenKey>@order` | Order creation/update/cancel |
| `<listenKey>@trade` | Trade execution |
| `<listenKey>@position` | Position updates (Futures) |
| `<listenKey>@marginCall` | Margin call alerts |

---

## Screen Variants

### Variant 1: Spot Trading Mode
- Order form: Limit, Market, Stop-Limit
- No position panel
- Simple balance display

### Variant 2: Margin Trading Mode
- Order form: Limit, Market, Stop-Limit, OCO
- Balance shows borrowed amounts
- Position panel shows margin positions
- Leverage selector (3x, 5x, 10x, etc.)
- Cross/Isolated toggle

### Variant 3: Futures Trading Mode (USDT-M)
- Order form with leverage
- Position panel with unrealized PnL
- Liquidation price display
- Maintenance margin info
- Funding rate display
- Leverage up to 125x

### Variant 4: Futures Trading Mode (COIN-M)
- Settle in base currency
- Different position calculations
- Delivery info display

### Variant 5: Chart Fullscreen
- Chart expands to full screen
- All TradingView features available
- Order form accessible via floating button

### Variant 6: Order Confirmation Modal
- Bottom sheet with order summary
- Confirm/Cancel buttons
- Terms checkbox

---

## Overlays and Dialogs

### Pair Selector Bottom Sheet
- View ID: `2131624202` (pair_selector)
- Full list of trading pairs
- Search functionality
- Favorites section

### Indicator Selection Panel
- View ID: `2131624212` (indicator_button)
- List of available indicators
- Toggle on/off for each

### Order Confirmation Bottom Sheet
- Order summary display
- Total value confirmation
- Confirm/Cancel buttons

### Leverage Selector (Futures/Margin)
- Slider: 1x to 125x
- Current leverage display
- Risk warning

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [03-Exchange-Homepage](03-exchange-homepage.md) - Home screen
- [04-Exchange-Markets](04-exchange-markets.md) - Markets screen
- [12-Exchange-Order-Book](12-exchange-order-book.md) - Order book details
- [13-Exchange-Chart-System](13-exchange-chart-system.md) - Chart system
- [14-Exchange-Order-Types](14-exchange-order-types.md) - Order type details
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Real-time Data
- WebSocket for price, order book, trades
- Fallback to polling if WebSocket fails
- Reconnection with exponential backoff

### Order Form Validation
- Price > 0 for limit orders
- Amount > minNotional
- Balance check before submission
- Stop price validation for stop orders

### Chart Integration
- TradingView lightweight charts library
- Custom indicators via TradingView API
- Drawing tools enabled
- Multiple timeframe support

### Performance
- Order book updates at 100ms intervals
- Limit order book to 20-50 levels for performance
- Chart updates throttled to 1 second

### Security
- API key required for trading
- Signature generation for all requests
- Rate limiting enforcement
- Order validation server-side

---

_Last Updated: 2026-03-12_
