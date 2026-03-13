# 12-Exchange-Order-Book

## Overview

The Order Book is a critical component of the Trade screen that displays the current market depth for a trading pair. It shows all pending buy orders (bids) and sell orders (asks) at different price levels, enabling traders to analyze market liquidity and make informed trading decisions.

The Order Book provides real-time updates via WebSocket connections, showing price levels, quantities, and cumulative totals. It serves as the primary reference for understanding current market supply and demand.

---

## Page Route

```
/trade (integrated)
/trade/spot (integrated)
/trade/margin (integrated)
/trade/futures (integrated)
```

**Deep Link Pattern:**
- `binance://trade?symbol=BTCUSDT` - Opens trade screen with order book for pair
- The Order Book is a panel within the Trade screen, not a standalone route

---

## Workflow Context

```
Markets Screen → Select Pair → Trade Screen
                              │
                              ├──────────────────┬─────────────────┐
                              ↓                  ↓                 ↓
                        Chart Panel      Order Book Panel    Trade History
                              │                  │                 │
                              └──────────────────┴─────────────────┘
                                                  ↓
                                    Order Book Analysis
                                    ↓                    ↓
                              Place Order          View Depth
```

**User Flow:**
1. User navigates to Trade screen with selected pair
2. Order Book loads with current bid/ask levels
3. User analyzes price levels and depth
4. User may tap price level to auto-fill order form
5. User places order based on order book analysis

---

## Component Structure

### Order Book Container

**Layout Reference:** `layout_order_book.xml`

```
┌─────────────────────────────────────────────────────────────────┐
│ Order Book                                          [Depth ▼]  │
├─────────────────────────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │              Depth Visualization Bars                       │ │
│ │  ████████████████████████  (Bid depth)                       │ │
│ │  ██████████████████████    (Bid depth)                      │ │
│ │  ████████████████████      (Bid depth)                     │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Price          Amount          Total                         │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ 45,130.00       0.5421         24,458.43   ← Best Ask (RED) │ │
│ │ 45,129.50       1.2054         54,398.25                     │ │
│ │ 45,129.00       0.8901         40,142.76                     │ │
│ │ 45,128.50       2.3412        105,635.42                     │ │
│ │ 45,128.00       0.5678         25,633.70                     │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ 45,127.50       0.3210         14,492.93   ← Best Bid (GRN) │ │
│ │ 45,127.00       1.4532         65,604.86                     │ │
│ │ 45,126.50       0.7891         35,628.99                     │ │
│ │ 45,126.00       2.1098         95,194.52                     │ │
│ │ 45,125.50       1.2345         55,718.48                     │ │
│ └─────────────────────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────────┤
│ Spread: 2.50 USDT (0.01%)                                       │
└─────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
OrderBookFragment
├─ Header Layout
│   ├─ Title TextView: "Order Book"
│   │   └─ View ID: 2131624220 (order_book_title)
│   └─ Depth Selector Dropdown
│       └─ View ID: 2131624221 (depth_selector)
│           └─ Options: 5, 10, 20, 50, 100 levels
├─ Depth Visualization
│   ├─ Bid Depth Bar
│   │   └─ View ID: 2131624222 (bid_depth_bar)
│   └─ Ask Depth Bar
│       └─ View ID: 2131624223 (ask_depth_bar)
├─ Column Headers
│   ├─ Price Header
│   │   └─ View ID: 2131624224 (header_price)
│   ├─ Amount Header
│   │   └─ View ID: 2131624225 (header_amount)
│   └─ Total Header
│       └─ View ID: 2131624226 (header_total)
├─ Bids RecyclerView (Buy Orders)
│   └─ View ID: 2131624227 (bids_list)
│       └─ Item: item_order_book_bid.xml
│           ├─ TextView: price (green)
│           ├─ TextView: amount
│           └─ TextView: total
├─ Spread Indicator
│   └─ View ID: 2131624228 (spread_indicator)
│       └─ Format: "Spread: {value} ({percent}%)"
├─ Asks RecyclerView (Sell Orders)
│   └─ View ID: 2131624229 (asks_list)
│       └─ Item: item_order_book_ask.xml
│           ├─ TextView: price (red)
│           ├─ TextView: amount
│           └─ TextView: total
└─ Loading Indicator
    └─ ProgressBar: loading
```

---

## Visual Design

### Colors

| Element | Color Code | Description |
|---------|------------|-------------|
| Bid Price | #0ECB81 | Green - buy orders |
| Bid Depth Bar | #0ECB8133 | Green with 20% opacity |
| Ask Price | #F6465D | Red - sell orders |
| Ask Depth Bar | #F6465D33 | Red with 20% opacity |
| Spread Text | #9E9E9E | Gray |
| Header Background | #1E2329 | Dark gray |
| Row Alternate | #1E23291A | 10% white overlay |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Title | System | 16sp | SemiBold |
| Price | Monospace | 14sp | Medium |
| Amount | Monospace | 12sp | Regular |
| Total | Monospace | 12sp | Regular |
| Spread | System | 11sp | Regular |

### Dimensions

| Element | Value |
|---------|-------|
| Row Height | 36dp |
| Header Height | 32dp |
| Horizontal Padding | 12dp |
| Column Spacing | 8dp |
| Depth Bar Max Width | 100% of container |

---

## Functionality

### 1. Depth Levels Display

**Depth Selector Options:**
- 5 levels - Quick overview
- 10 levels - Standard view
- 20 levels - Detailed view (default)
- 50 levels - Full depth
- 100 levels - Maximum depth

**Behavior:**
- Tap depth selector dropdown to change levels
- Selection persists during session
- Default: 20 levels

### 2. Price Levels

**Bid (Buy) Orders:**
- Sorted by price descending (highest bid at top)
- Shows: Price, Amount, Cumulative Total
- Color: Green (#0ECB81)
- Click action: Fill order form with clicked price

**Ask (Sell) Orders:**
- Sorted by price ascending (lowest ask at top)
- Shows: Price, Amount, Cumulative Total
- Color: Red (#F6465D)
- Click action: Fill order form with clicked price

### 3. Depth Visualization

**Background Bars:**
- Horizontal bars behind each price level
- Width proportional to quantity relative to max in view
- Green for bids, red for asks
- Provides instant visual indication of liquidity concentration

### 4. Spread Calculation

**Formula:**
```
Spread = Best Ask Price - Best Bid Price
Spread Percentage = (Spread / Best Ask Price) × 100
```

**Display Format:**
- "Spread: 2.50 USDT (0.01%)"
- Updates in real-time

### 5. Click-to-Fill Feature

When user taps a price level:
1. Order form price field populated with clicked price
2. Order form amount field focused
3. Order side (buy/sell) already selected

### 6. Auto-Scroll Behavior

- Bids list: Scrolls to keep best bid visible at bottom of bid section
- Asks list: Scrolls to keep best ask visible at top of ask section
- Manual scroll disables auto-scroll temporarily
- Tap on spread area re-enables auto-scroll

---

## Data Handling

### API Endpoints

**REST API:**
```
GET /api/v3/depth
Parameters:
  - symbol: Trading pair (e.g., "BTCUSDT")
  - limit: Number of levels (5, 10, 20, 50, 100)

Response:
{
  "lastUpdateId": 160,
  "bids": [
    ["0.0024", "10"],
    ["0.0026", "100"],
    ...
  ],
  "asks": [
    ["0.0026", "100"],
    ["0.0027", "200"],
    ...
  ]
}
```

### WebSocket Streams

**Order Book Stream:**
```
Stream: <symbol>@depth<levels>@100ms
Example: btcusdt@depth20@100ms

Message:
{
  "lastUpdateId": 160,
  "bids": [["0.0024", "10"], ...],
  "asks": [["0.0026", "100"], ...]
}
```

**Connection:**
- Endpoint: `wss://stream.binance.com:9443/ws`
- Reconnection: Automatic with exponential backoff
- Heartbeat: 30 seconds

### Local Processing

1. Receive order book update
2. Merge with current state using lastUpdateId
3. Update RecyclerView with diff
4. Recalculate cumulative totals
5. Update depth visualization bars
6. Update spread indicator

---

## Data Models

### OrderBook Model
```kotlin
data class OrderBook(
    val lastUpdateId: Long,
    val bids: List<OrderBookEntry>,
    val asks: List<OrderBookEntry>
)

data class OrderBookEntry(
    val price: Double,
    val quantity: Double,
    val total: Double // Cumulative
)
```

### OrderBook Entry Item
```kotlin
data class OrderBookItem(
    val price: Double,
    val quantity: Double,
    val total: Double,
    val isBid: Boolean,
    val depthPercentage: Float // For visualization bar
)
```

---

## Real-Time Updates

### Update Frequency
- Level 20 @ 100ms: 10 updates/second
- Level 100 @ 100ms: 10 updates/second
- Configurable based on network conditions

### Update Strategy

1. **Full Refresh:** Every 30 seconds to ensure consistency
2. **Incremental Updates:** Real-time deltas via WebSocket
3. **Reconciliation:** Verify lastUpdateId matches expected sequence

### Performance Optimizations

1. **Diff Calculation:** Use DiffUtil for RecyclerView updates
2. **Throttling:** Aggregate updates within 50ms window
3. **Level Limiting:** Default to 20 levels for performance
4. **Off-screen Rendering:** Recycle views efficiently

### Error Handling

| Scenario | Handling |
|----------|----------|
| WebSocket disconnect | Auto-reconnect with backoff |
| Stale data | Show "Refreshing..." indicator |
| API error | Display error toast, retry button |
| Invalid price level | Filter out, log warning |

---

## Component States

### Loading State
- Show ProgressBar centered
- Disable interaction
- Display "Loading order book..." text

### Connected State
- Normal display
- Green indicator dot in header (optional)

### Disconnected State
- Show "Reconnecting..." overlay
- Retain last known data
- Disable price click features

### Error State
- Show error message
- Retry button
- Last known data with stale indicator

---

## Accessibility

### Screen Reader Support
- Order book title announced
- Each row: "Bid: price [price], amount [amount]"
- Spread announced: "Spread [value] [percent]"
- Depth level selector accessible

### Touch Targets
- Minimum row height: 36dp
- Price click target: Full row
- Depth selector: 48dp height

---

## Related Documentation

- [05-Exchange-Trade](05-exchange-trade.md) - Main trade screen
- [13-Exchange-Chart-System](13-exchange-chart-system.md) - Chart integration
- [14-Exchange-Order-Types](14-exchange-order-types.md) - Order types
- [16-Exchange-Trade-History](16-exchange-trade-history.md) - Trade history

---

## Implementation Notes

### Key Classes
- `OrderBookFragment` - Main fragment
- `OrderBookViewModel` - Data management
- `OrderBookAdapter` - RecyclerView adapter
- `OrderBookWebSocketManager` - WebSocket handling

### Layout Files
- `layout_order_book.xml` - Main container
- `item_order_book_bid.xml` - Bid row item
- `item_order_book_ask.xml` - Ask row item

### View IDs (from decompiled resources)
- `2131624220` - order_book_title
- `2131624221` - depth_selector
- `2131624222` - bids_list
- `2131624223` - asks_list
- `2131624224` - spread_indicator
- `2131624225` - bid_depth_bar
- `2131624226` - ask_depth_bar

---

_Last Updated: 2026-03-12_
