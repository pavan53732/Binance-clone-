# 16-Exchange-Trade-History

## Overview

The Trade History screen provides a comprehensive record of all completed trades, including both user-initiated trades and market trades that matched with user orders. This screen enables traders to review their trading activity, analyze performance, and export data for tax or accounting purposes.

Trade History is distinct from Order History - Trade History shows individual trade executions (fills), while Order History shows order status changes.

---

## Page Route

```
/history/trades
/history/orders
/history/trades/spot
/history/trades/margin
/history/trades/futures
```

**Deep Link Pattern:**
- `binance://history/trades`
- `binance://history/trades?symbol=BTCUSDT`
- `binance://history/orders`

---

## Workflow Context

```
┌─────────────────────────────────────────────────────────────────┐
│                      Trade Screen                               │
│                                                                  │
│  Order placed ─→ Order executed ─→ Trade recorded               │
│        │               │                │                       │
│        └───────────────┼────────────────┘                       │
│                        ↓                                        │
│                 Trade History                                   │
│                                                                  │
│         ┌─────────────────┴─────────────────┐                   │
│         ↓                                   ↓                   │
│   View Trade Details              Export Records               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**User Flow:**
1. User completes a trade (order fills)
2. Trade appears in Trade History
3. User can view all trades with filtering
4. User can tap a trade for details
5. User can export data for records

---

## Screen Structure

### Trade History Screen Layout

**Layout Reference:** `activity_trade_history.xml`

```
┌─────────────────────────────────────────────────────────────────┐
│ [←Back]  Trade History                    [Filter ▼] [Export]  │
├─────────────────────────────────────────────────────────────────┤
│ [All] [Buy] [Sell]                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ January 15, 2024                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ BTC/USDT                          +0.5000 BTC   $22,500.00  │ │
│ │ 14:35:42  SELL                  @ 45,000.00                │ │
│ │                                    Fee: 0.05 USDT (0.1%)    │ │
│ │                                    ID: #28475631            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ BTC/USDT                          -0.3000 BTC   $13,350.00 │ │
│ │ 14:32:15  BUY                   @ 44,500.00                │ │
│ │                                    Fee: 0.03 USDT (0.1%)    │ │
│ │                                    ID: #28475412            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ January 14, 2024                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ ETH/USDT                          -5.0000 ETH    $12,500.00 │ │
│ │ 09:15:30  BUY                   @ 2,500.00                 │ │
│ │                                    Fee: 0.50 USDT (0.1%)    │ │
│ │                                    ID: #28451234            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ Summary: 5 trades | Total Volume: $48,350.00 | Fees: $0.58   │
└─────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
TradeHistoryActivity / TradeHistoryFragment
├─ Toolbar
│   ├─ Back Button (View ID: 2131624500)
│   ├─ Title: "Trade History"
│   │   └─ View ID: 2131624501
│   ├─ Filter Button
│   │   └─ View ID: 2131624502
│   └─ Export Button
│       └─ View ID: 2131624503
├─ Side Filter Tabs
│   ├─ Tab: All
│   ├─ Tab: Buy
│   └─ Tab: Sell
│       └─ View ID: 2131624510
├─ Date Header RecyclerView
│   └─ View ID: 2131624520
│       └─ Date headers grouping trades by day
├─ Trade List RecyclerView
│   └─ View ID: 2131624530
│       └─ Item: item_trade_history.xml
│           ├─ Symbol + Side Badge
│           │   └─ View ID: 2131624531
│           ├─ Price
│           │   └─ View ID: 2131624532
│           ├─ Amount
│           │   └─ View ID: 2131624533
│           ├─ Total Value
│           │   └─ View ID: 2131624534
│           ├─ Fee
│           │   └─ View ID: 2131624535
│           ├─ Trade Time
│           │   └─ View ID: 2131624536
│           ├─ Trade ID
│           │   └─ View ID: 2131624537
│           └─ Order ID
│               └─ View ID: 2131624538
├─ Summary Footer
│   └─ View ID: 2131624540
│       └─ Total trades, volume, fees
├─ Empty State View
│   └─ View ID: 2131624541
└─ Loading Indicator
    └─ ProgressBar: loading
```

---

## Trade Item Display

### Standard Trade Item

```
┌─────────────────────────────────────────────────────────────────┐
│ BTC/USDT                                    +0.5000 BTC         │
│                                                    $22,500.00   │
│ 14:35:42  SELL                                          @ 45,000.00 │
│                                                                │
│ Fee: 0.05 USDT (0.1%)                                        │
│ Trade ID: #28475631                                            │
└─────────────────────────────────────────────────────────────────┘
```

### Trade Item Fields

| Field | Description | Format |
|-------|-------------|--------|
| Symbol | Trading pair | "BTC/USDT" |
| Side | Buy/Sell | BUY (green) / SELL (red) |
| Price | Execution price | 45,000.00 USDT |
| Amount | Quantity traded | 0.5000 BTC |
| Total | Total value | $22,500.00 |
| Fee | Trading fee | 0.05 USDT |
| Time | Execution time | 14:35:42 |
| Date | Trade date | January 15, 2024 |
| Trade ID | Unique trade ID | #28475631 |
| Order ID | Associated order | #12345678 |

---

## Features

### 1. Trade List Display

**Display Fields:**
- Trading pair
- Side (BUY/SELL with color)
- Execution price
- Quantity
- Total value (in USDT equivalent)
- Fee amount and percentage
- Timestamp
- Trade ID
- Order ID

### 2. Filter Options

**Filter By Side:**
- All trades
- Buy trades only
- Sell trades only

**Filter By Pair:**
- All pairs
- Specific pair selection
- Recently traded pairs

**Filter By Date Range:**
- Today
- Yesterday
- Last 7 days
- Last 30 days
- Custom range
- All time

**Filter By Trading Mode:**
- All
- Spot
- Margin
- Futures

### 3. Date Grouping

Trades are grouped by date with sticky headers:
```
January 15, 2024 (5 trades)
├── Trade 1
├── Trade 2
└── ...

January 14, 2024 (3 trades)
├── Trade 1
└── ...
```

### 4. Trade Details

**Tap on trade item → Details sheet:**
```
┌─────────────────────────────────────────────────────────────────┐
│ Trade Details                                        [Close]   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ BTC/USDT                                                       │
│                                                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Side        │ SELL                    (Color: Red)         │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Price       │ 45,000.00 USDT                               │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Amount      │ 0.5000 BTC                                   │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Total       │ 22,500.00 USDT                              │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Fee         │ 0.05 USDT (0.1%)                            │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Commission  │ 0.00025 BTC (0.025% - BNB discount)         │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Trade Time  │ 2024-01-15 14:35:42                        │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Trade ID    │ 28475631                                    │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Order ID    │ 12345678                                    │ │
│ ├─────────────────────────────────────────────────────────────┤ │
│ │ Symbol      │ BTCUSDT                                     │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ [View Order]  [View in Explorer]                               │
└─────────────────────────────────────────────────────────────────┘
```

### 5. Export Functionality

**Export Formats:**
- CSV (spreadsheet)
- PDF (statement)
- JSON (API-compatible)

**Export Options:**
```
┌─────────────────────────────────────────────────────────────────┐
│ Export Trade History                                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ Format:                                                         │
│ [ CSV ]  [ PDF ]  [ JSON ]                                     │
│                                                                  │
│ Date Range:                                                     │
│ [ Last 7 Days ▼ ]                                               │
│                                                                  │
│ Include:                                                         │
│ ☑ Trade details                                                │
│ ☑ Fee information                                              │
│ ☑ Order details                                                │
│ ☐ Market data (price at time of trade)                         │
│                                                                  │
│                                                                  │
│ [Cancel]                          [Export]                      │
└─────────────────────────────────────────────────────────────────┘
```

**Export Content (CSV Example):**
```csv
Date,Time,Pair,Side,Price,Amount,Total,Fee,Fee%,TradeID,OrderID
2024-01-15,14:35:42,BTC/USDT,SELL,45000.00,0.5000,22500.00,0.05,0.1%,28475631,12345678
2024-01-15,14:32:15,BTC/USDT,BUY,44500.00,0.3000,13350.00,0.03,0.1%,28475412,12345677
```

### 6. Summary Statistics

**Footer Display:**
```
Summary: 5 trades | Volume: 1.25 BTC ($48,350) | Fees: $0.58
```

**Statistics Calculated:**
- Total number of trades
- Total volume (in base and quote assets)
- Total fees paid
- Buy vs Sell ratio

---

## Data Handling

### API Endpoints

**Get Trade History:**
```
GET /api/v3/myTrades
Parameters:
  - symbol: Trading pair (required)
  - startTime: Start timestamp (optional)
  - endTime: End timestamp (optional)
  - fromId: Trade ID to start from (optional)
  - limit: Number of results (default: 500, max: 1000)

GET /sapi/v1/margin/myTrades
GET /fapi/v1/userTrades (Futures)
```

**Response:**
```json
[
  {
    "symbol": "BTCUSDT",
    "id": 28475631,
    "orderId": 12345678,
    "price": "45000.00000000",
    "qty": "0.50000000",
    "quoteQty": "22500.00000000",
    "commission": "0.00000000",
    "commissionAsset": "BNB",
    "time": 1705330542000,
    "isBuyer": false,
    "isMaker": false,
    "isBestMatch": true
  }
]
```

### Pagination

**Load More Behavior:**
- Initial load: Last 500 trades
- Scroll to bottom triggers load more
- Loading indicator at bottom
- "No more trades" message when complete

### Local Caching

- Cache recent trades locally
- Refresh on pull-to-refresh
- Sync with server on app resume

---

## Data Models

### Trade Model
```kotlin
data class Trade(
    val symbol: String,
    val id: Long,                    // Trade ID
    val orderId: Long,                // Order ID
    val price: Double,
    val quantity: Double,
    val quoteQuantity: Double,        // Total value
    val commission: Double,
    val commissionAsset: String,
    val time: Long,
    val isBuyer: Boolean,             // True if BUY
    val isMaker: Boolean,             // True if maker (limit order)
    val isBestMatch: Boolean
)
```

### Trade Display Item
```kotlin
data class TradeListItem(
    val tradeId: Long,
    val orderId: Long,
    val symbol: String,
    val pair: String,
    val side: TradeSide,              // BUY or SELL
    val price: Double,
    val quantity: Double,
    val total: Double,
    val fee: Double,
    val feeAsset: String,
    val feePercentage: Double,
    val timestamp: Long,
    val date: String,                 // Formatted date
    val time: String,                 // Formatted time
    val tradingMode: TradingMode,
    val isMaker: Boolean
)
```

### Trade Summary
```kotlin
data class TradeSummary(
    val totalTrades: Int,
    val buyTrades: Int,
    val sellTrades: Int,
    val totalVolumeBase: Double,
    val totalVolumeQuote: Double,
    val totalFees: Double,
    val baseAsset: String,
    val quoteAsset: String
)
```

---

## Visual Design

### Colors

| Element | Color Code | Description |
|---------|------------|-------------|
| Background | #1E2329 | Dark background |
| Card Background | #2B2F36 | Trade card |
| BUY | #0ECB81 | Green |
| SELL | #F6465D | Red |
| Price | #D1D4DC | Primary text |
| Secondary | #9E9E9E | Labels, fee |
| Divider | #363A45 | Separators |
| Date Header | #1E2329 | Sticky header |
| Date Text | #9E9E9E | Date label |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Symbol | System | 16sp | SemiBold |
| Amount | Monospace | 16sp | Bold |
| Total | System | 14sp | Medium |
| Price | Monospace | 12sp | Regular |
| Fee | System | 12sp | Regular |
| Time | System | 11sp | Regular |
| Date Header | System | 12sp | Medium |

### Dimensions

| Element | Value |
|---------|-------|
| Card Margin | 8dp horizontal, 4dp vertical |
| Card Padding | 12dp |
| Card Corner Radius | 8dp |
| Trade Item Height | 80dp |
| Date Header Height | 32dp |

---

## Component States

### Loading State
- Show ProgressBar
- "Loading trades..." text
- Skeleton placeholders

### Empty State
- Show empty illustration
- "No trade history" message
- Trading action button

### Error State
- Error message
- Retry button
- Offline indicator

### List State
- Trades displayed grouped by date
- Pull to refresh
- Infinite scroll pagination

---

## Accessibility

### Screen Reader Support
- Trade count announced
- Each trade: "Symbol, side, amount at price"
- Fee amount announced
- Trade date/time announced

### Touch Targets
- Trade item: Entire card tappable
- Detail view: Full sheet
- Export button: 48dp minimum

---

## Related Documentation

- [05-Exchange-Trade](05-exchange-trade.md) - Trade screen
- [14-Exchange-Order-Types](14-exchange-order-types.md) - Order types
- [15-Exchange-Open-Orders](15-exchange-open-orders.md) - Open orders
- [30-Real-Time-Data-Updates](30-real-time-data-updates.md) - WebSocket updates
- [20-Web3-Wallet-Transaction-History](20-web3-wallet-transaction-history.md) - Web3 transactions

---

## Implementation Notes

### Key Classes
- `TradeHistoryActivity` - Main activity
- `TradeHistoryFragment` - Fragment container
- `TradeHistoryViewModel` - Data management
- `TradeHistoryAdapter` - RecyclerView adapter
- `TradeExportManager` - Export functionality
- `TradeDateGrouper` - Date grouping logic

### Layout Files
- `activity_trade_history.xml` - Main screen
- `item_trade_history.xml` - Trade list item
- `item_date_header.xml` - Date header
- `dialog_trade_details.xml` - Trade details sheet
- `dialog_export.xml` - Export options

### View IDs (from decompiled resources)
- `2131624500` - back_button
- `2131624501` - title
- `2131624530` - trade_list
- `2131624531` - symbol_text
- `2131624532` - price_text
- `2131624533` - amount_text
- `2131624534` - total_text
- `2131624535` - fee_text
- `2131624536` - time_text
- `2131624540` - summary_text
- `2131624503` - export_button

---

_Last Updated: 2026-03-12_
