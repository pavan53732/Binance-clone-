# 15-Exchange-Open-Orders

## Overview

The Open Orders screen displays all active orders that have been placed but not yet filled or cancelled. It provides comprehensive order management capabilities, allowing users to monitor, modify, and cancel their pending orders across Spot, Margin, and Futures trading modes.

This screen is essential for active traders to track their working orders and manage their trading positions effectively.

---

## Page Route

```
/orders (Open Orders list)
/orders/spot (Spot orders only)
/orders/margin (Margin orders only)
/orders/futures (Futures orders only)
```

**Deep Link Pattern:**
- `binance://orders`
- `binance://orders?type=spot`
- `binance://orders?symbol=BTCUSDT`

---

## Workflow Context

```
┌─────────────────────────────────────────────────────────────────┐
│                        Trade Screen                             │
│                                                                  │
│  User places order ─→ Order confirmation ─→ Order success      │
│         │                                        │               │
│         └────────────────┬───────────────────────┘               │
│                          ↓                                       │
│                   Open Orders List                               │
│                          │                                       │
│         ┌────────────────┼────────────────┐                      │
│         ↓                ↓                ↓                     │
│   View Details      Modify Order      Cancel Order              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**User Flow:**
1. User places an order from Trade screen
2. Order appears in Open Orders list
3. User can view order details anytime
4. User may modify order (price/quantity)
5. User can cancel order if needed
6. Order fills or cancels → removed from open orders

---

## Screen Structure

### Open Orders Screen Layout

**Layout Reference:** `activity_open_orders.xml`

```
┌─────────────────────────────────────────────────────────────────┐
│ [←Back]  Open Orders (12)              [Filter ▼] [⚙️]        │
├─────────────────────────────────────────────────────────────────┤
│ [All] [Spot] [Margin] [Futures]                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ BTC/USDT  •  LIMIT BUY                                      │ │
│ │                                                             │ │
│ │ Price:    45,000.00 USDT                    [✏️] [✖️]      │ │
│ │ Amount:   0.5000 BTC                                     │ │
│ │ Filled:   0.0000 BTC (0%)                                │ │
│ │ Total:    22,500.00 USDT                                  │ │
│ │                                                            │ │
│ │ Created: 2024-01-15 14:30:25                              │ │
│ │ Expires: --                                                │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ ETH/USDT  •  STOP-LIMIT SELL                               │ │
│ │                                                             │ │
│ │ Stop:     2,500.00 USDT                     [✏️] [✖️]      │ │
│ │ Limit:    2,550.00 USDT                                    │ │
│ │ Amount:   10.0000 ETH                                     │ │
│ │                                                            │ │
│ │ Created: 2024-01-15 14:25:00                               │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ BNB/USDT  •  MARKET BUY                                     │ │
│ │                                                             │ │
│ │ Amount:   5.0000 BNB                                       │ │
│ │ Est. Val: 1,250.00 USDT                      [✖️]          │ │
│ │                                                            │ │
│ │ Status:   PARTIALLY_FILLED (60%)                          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [Cancel All]                                                    │
└─────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
OpenOrdersActivity / OpenOrdersFragment
├─ Toolbar
│   ├─ Back Button (View ID: 2131624400)
│   ├─ Title: "Open Orders (N)"
│   │   └─ View ID: 2131624401
│   ├─ Filter Button
│   │   └─ View ID: 2131624402
│   └─ Settings Button
│       └─ View ID: 2131624403
├─ Mode Tab Layout
│   ├─ Tab: All
│   ├─ Tab: Spot
│   ├─ Tab: Margin
│   └─ Tab: Futures
│       └─ View ID: 2131624410
├─ Orders RecyclerView
│   └─ View ID: 2131624420
│       └─ Item: item_open_order.xml
│           ├─ Symbol + Side Badge
│           │   └─ View ID: 2131624421
│           ├─ Order Type
│           │   └─ View ID: 2131624422
│           ├─ Price Display
│           │   └─ View ID: 2131624423
│           ├─ Amount Display
│           │   └─ View ID: 2131624424
│           ├─ Filled Amount
│           │   └─ View ID: 2131624425
│           ├─ Total Value
│           │   └─ View ID: 2131624426
│           ├─ Status Indicator
│           │   └─ View ID: 2131624427
│           ├─ Created Time
│           │   └─ View ID: 2131624428
│           ├─ Modify Button
│           │   └─ View ID: 2131624429
│           └─ Cancel Button
│               └─ View ID: 2131624430
├─ Empty State View
│   └─ View ID: 2131624431
├─ Loading Indicator
│   └─ ProgressBar: loading
└─ Bottom Action Bar
    └─ Cancel All Button
        └─ View ID: 2131624432
```

---

## Order Item Display

### Spot Order Item

```
┌─────────────────────────────────────────────────────────────────┐
│ BTC/USDT  •  LIMIT BUY                        [Edit] [Cancel] │
├─────────────────────────────────────────────────────────────────┤
│ Price:      45,000.00 USDT                                     │
│ Amount:     0.5000 BTC                                         │
│ Filled:     0.0000 BTC (0%)                                    │
│ Total:      22,500.00 USDT                                     │
│                                                                 │
│ Created:   2024-01-15 14:30:25                                │
│ Time Left: --                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Stop Order Item

```
┌─────────────────────────────────────────────────────────────────┐
│ ETH/USDT  •  STOP-LIMIT SELL                 [Edit] [Cancel]   │
├─────────────────────────────────────────────────────────────────┤
│ Stop Price:  2,500.00 USDT                                    │
│ Limit Price: 2,550.00 USDT                                    │
│ Amount:      10.0000 ETH                                       │
│                                                                 │
│ Created:    2024-01-15 14:25:00                                │
└─────────────────────────────────────────────────────────────────┘
```

### Partially Filled Order Item

```
┌─────────────────────────────────────────────────────────────────┐
│ BNB/USDT  •  MARKET BUY                        [Edit] [Cancel]│
├─────────────────────────────────────────────────────────────────┤
│ Amount:      5.0000 BNB                                        │
│ Filled:      3.0000 BNB (60%)  ████████████░░░░░░░░░░░         │
│ Est. Value: 1,250.00 USDT                                     │
│                                                                 │
│ Status:      PARTIALLY_FILLED                                  │
│ Updated:     2024-01-15 14:35:00                               │
└─────────────────────────────────────────────────────────────────┘
```

---

## Features

### 1. Order List Display

**Display Fields:**
- Trading pair (symbol/base)
- Order side (BUY/SELL)
- Order type (Limit/Market/Stop-Limit)
- Price / Stop Price / Limit Price
- Order quantity
- Filled quantity (with percentage)
- Total value
- Order status
- Creation time
- Expiration time (if applicable)

**Sorting Options:**
- By time (newest first)
- By time (oldest first)
- By pair (alphabetical)
- By status

### 2. Filter Options

**Filter By Trading Mode:**
- All (default)
- Spot
- Margin
- Futures

**Filter By Order Type:**
- All types
- Limit
- Market
- Stop-Limit
- Stop-Market
- OCO

**Filter By Side:**
- All
- Buy
- Sell

**Filter By Pair:**
- All pairs
- Specific pair selection

### 3. Modify Order

**Modifiable Fields:**
- Price (for limit orders)
- Stop Price (for stop orders)
- Amount/Quantity
- Time-in-force

**Order Modification Flow:**
```
Tap Edit → Modify Order Sheet Opens
         ↓
    Change values
         ↓
    Tap "Modify" → Confirmation
         ↓
    Success → Order updated in list
```

**Modify Order Sheet Layout:**
```
┌─────────────────────────────────────────────────────────────────┐
│ Modify Order                                                    │
├─────────────────────────────────────────────────────────────────┤
│ BTC/USDT  LIMIT BUY                                            │
├─────────────────────────────────────────────────────────────────┤
│ Price:     [______________] USDT                               │
│ Amount:    [______________] BTC                                │
│            Available: 0.5421 BTC                               │
├─────────────────────────────────────────────────────────────────┤
│ New Total: 22,000.00 USDT                                      │
├─────────────────────────────────────────────────────────────────┤
│ [Cancel]                       [Modify]                        │
└─────────────────────────────────────────────────────────────────┘
```

### 4. Cancel Order

**Cancel Flow:**
```
Tap Cancel → Confirm Dialog
            ↓
       "Cancel this order?"
            ↓
     [No] [Yes, Cancel]
            ↓
    Order cancelled → Removed from list
```

**Cancel Confirmation Dialog:**
```
┌─────────────────────────────────────────────────────────────────┐
│ Cancel Order?                                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ BTC/USDT  LIMIT BUY                                           │
│ Price: 45,000.00 USDT                                          │
│ Amount: 0.5000 BTC                                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [No]                        [Yes, Cancel]                     │
└─────────────────────────────────────────────────────────────────┘
```

### 5. Cancel All Orders

**Cancel All Flow:**
```
Tap "Cancel All" → Confirm Dialog
                  ↓
            Select orders to cancel (optional)
                  ↓
            "Cancel N orders?"
                  ↓
            [Cancel All]
                  ↓
            Orders cancelled → List refreshed
```

**Cancel All Dialog:**
```
┌─────────────────────────────────────────────────────────────────┐
│ Cancel All Open Orders?                                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│ This will cancel all 12 open orders.                           │
│                                                                 │
│ BTC/USDT  LIMIT BUY   - 45,000.00                             │
│ ETH/USDT  STOP SELL   - 2,500.00                               │
│ ...                                                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ ☑ Don't ask again (this session)                              │
├─────────────────────────────────────────────────────────────────┤
│ [Keep]                        [Cancel All (12)]                │
└─────────────────────────────────────────────────────────────────┘
```

---

## Order Status Indicators

| Status | Color | Icon | Description |
|--------|-------|------|-------------|
| NEW | Blue | ○ | Order placed, waiting |
| PARTIALLY_FILLED | Yellow | ◐ | Partial execution |
| PENDING_CANCEL | Gray | ◑ | Cancel in progress |

### Status Badge Colors

```
NEW                    - Background: #1976D2, Text: white
PARTIALLY_FILLED      - Background: #FBC02D, Text: black
PENDING_CANCEL        - Background: #9E9E9E, Text: white
```

---

## Data Handling

### API Endpoints

**Get Open Orders:**
```
GET /api/v3/openOrders
Parameters:
  - symbol: Optional (filter by pair)
  
GET /sapi/v1/margin/openOrders
Parameters:
  - symbol: Optional
  
GET /fapi/v1/openOrders
Parameters:
  - symbol: Optional
```

**Cancel Order:**
```
DELETE /api/v3/order
Parameters:
  - symbol: Trading pair
  - orderId: Order ID
  
DELETE /sapi/v1/margin/order
DELETE /fapi/v1/order
```

**Cancel All Orders:**
```
DELETE /api/v3/openOrders
DELETE /sapi/v1/margin/openOrders
DELETE /fapi/v1/allOpenOrders
```

**Modify Order (Spot):**
```
DELETE /api/v3/order (cancel then replace)
OR
POST /api/v3/order (new order)
```

### WebSocket Streams

**Order Update Stream:**
```
Stream: <listenKey>@order
Message:
{
  "e": "executionReport",
  "s": "BTCUSDT",
  "S": "BUY",
  "o": "LIMIT",
  "f": "GTC",
  "q": "0.50000000",
  "p": "45000.00000000",
  "X": "NEW",
  "i": 12345678,
  "T": 1234567890000
}
```

---

## Data Models

### Order Model
```kotlin
data class Order(
    val symbol: String,
    val orderId: Long,
    val orderListId: Long,
    val clientOrderId: String,
    val price: Double,
    val origQty: Double,
    val executedQty: Double,
    val cummulativeQuoteQty: Double,
    val status: OrderStatus,
    val timeInForce: TimeInForce,
    val type: OrderType,
    val side: OrderSide,
    val stopPrice: Double?,
    val updateTime: Long,
    val isWorking: Boolean
)
```

### Order Display Item
```kotlin
data class OrderListItem(
    val orderId: Long,
    val symbol: String,
    val pair: String,
    val side: OrderSide,
    val type: OrderType,
    val price: Double,
    val stopPrice: Double?,
    val originalQuantity: Double,
    val executedQuantity: Double,
    val status: OrderStatus,
    val timeInForce: TimeInForce,
    val createdTime: Long,
    val updatedTime: Long,
    val tradingMode: TradingMode // SPOT, MARGIN, FUTURES
)
```

---

## Visual Design

### Colors

| Element | Color Code |
|---------|------------|
| Background | #1E2329 |
| Card Background | #2B2F36 |
| BUY Text | #0ECB81 |
| SELL Text | #F6465D |
| Price Text | #D1D4DC |
| Secondary Text | #9E9E9E |
| Divider | #363A45 |

### Typography

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Symbol | System | 16sp | SemiBold |
| Side/Type | System | 12sp | Medium |
| Price | Monospace | 14sp | Regular |
| Amount | Monospace | 12sp | Regular |
| Time | System | 11sp | Regular |

### Dimensions

| Element | Value |
|---------|-------|
| Card Margin | 8dp |
| Card Padding | 16dp |
| Card Corner Radius | 8dp |
| Button Height | 36dp |
| Icon Size | 24dp |

---

## Component States

### Loading State
- Show ProgressBar
- "Loading orders..." text
- Disable interaction

### Empty State
- Show empty state illustration
- "No open orders" message
- "Place an order" action button

### Error State
- Error message display
- Retry button
- Offline indicator

### List State
- Orders displayed in cards
- Pull to refresh enabled
- Smooth scrolling

---

## Accessibility

### Screen Reader Support
- Order count announced
- Each order: "Symbol, type, side, price"
- Order status announced
- Action buttons labeled

### Touch Targets
- Minimum tap target: 48dp
- Edit button accessible
- Cancel button accessible

---

## Related Documentation

- [05-Exchange-Trade](05-exchange-trade.md) - Trade screen
- [14-Exchange-Order-Types](14-exchange-order-types.md) - Order types
- [16-Exchange-Trade-History](16-exchange-trade-history.md) - Trade history
- [30-Real-Time-Data-Updates](30-real-time-data-updates.md) - WebSocket updates

---

## Implementation Notes

### Key Classes
- `OpenOrdersActivity` - Main activity
- `OpenOrdersFragment` - Fragment container
- `OpenOrdersViewModel` - Data management
- `OpenOrdersAdapter` - RecyclerView adapter
- `OrderCancelManager` - Cancel operations

### Layout Files
- `activity_open_orders.xml` - Main screen
- `item_open_order.xml` - Order list item
- `dialog_modify_order.xml` - Modify order sheet
- `dialog_cancel_order.xml` - Cancel confirmation

### View IDs (from decompiled resources)
- `2131624400` - back_button
- `2131624401` - title
- `2131624420` - orders_list
- `2131624429` - edit_button
- `2131624430` - cancel_button
- `2131624432` - cancel_all_button

---

_Last Updated: 2026-03-12_
