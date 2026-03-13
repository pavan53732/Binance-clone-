# 14-Exchange-Order-Types

## Overview

The Exchange Order Types system provides comprehensive support for various order types available in the Binance ecosystem. These orders enable traders to execute trading strategies with different price conditions, time constraints, and execution behaviors.

Order types are available across Spot, Margin, and Futures trading modes, with some variations specific to each trading type.

---

## Page Route

```
/trade (integrated)
/trade/spot (integrated)
/trade/margin (integrated)
/trade/futures (integrated)
/orders (Open Orders - separate screen)
/orders/history (Order History - separate screen)
```

**Deep Link Pattern:**
- `binance://trade?symbol=BTCUSDT&orderType=limit`
- `binance://orders` - Open orders list

---

## Order Types

### 1. Limit Order

**Description:**
A limit order is a type of order to buy or sell a specified quantity of an asset at a specified price or better. The order will only execute at the limit price or a more favorable price.

**Availability:** Spot, Margin, Futures

**UI Elements:**
- Price input field (required)
- Amount input field (required)
- Time-in-force selector (GTC default)

**Order Flow:**
```
User enters price → User enters amount → Select GTC/IOC/FOK → Submit
                                                     ↓
                                            Order sent to server
                                                     ↓
                          ┌──────────────────────────┴──────────────────────────┐
                          ↓                                                     ↓
                    Price matched                                        Price not matched
                          ↓                                                     ↓
                   Order executed                                      Order remains open
                   (FULLY FILLED)                                    (NEW/PARTIALLY FILLED)
```

**API Request:**
```json
POST /api/v3/order
{
  "symbol": "BTCUSDT",
  "side": "BUY",
  "type": "LIMIT",
  "price": "45000.00",
  "quantity": "0.5",
  "timeInForce": "GTC"
}
```

### 2. Market Order

**Description:**
A market order is an order to buy or sell an asset immediately at the best available price. It provides immediate execution but does not guarantee a specific price.

**Availability:** Spot, Margin, Futures

**UI Elements:**
- Amount input field (required)
- Price field hidden (not applicable)
- Estimated price display

**Order Flow:**
```
User enters amount → Submit → Order executed immediately
                                          ↓
                    ┌─────────────────────┴─────────────────────┐
                    ↓                                           ↓
              Fully executed                              Partially executed
              (FILLED)                                    (PARTIALLY_FILLED)
```

**API Request:**
```json
POST /api/v3/order
{
  "symbol": "BTCUSDT",
  "side": "BUY",
  "type": "MARKET",
  "quantity": "0.5"
}
```

### 3. Stop-Limit Order

**Description:**
A stop-limit order is a conditional order that combines a stop order with a limit order. When the stop price is reached, the order becomes a limit order to buy or sell at the specified limit price or better.

**Availability:** Spot, Margin, Futures

**UI Elements:**
- Stop price input field (required)
- Limit price input field (required)
- Amount input field (required)
- Time-in-force selector

**Order Flow:**
```
Enter stop price → Enter limit price → Enter amount → Submit
                          ↓
                   Order placed as "working"
                          ↓
     ┌────────────────────┼────────────────────┐
     ↓                    ↓                    ↓
 Stop price           Stop price           Stop price
 NOT reached          reached              reached
     ↓                    ↓                    ↓
 Order active      Limit order active   Order cancelled
 (NEW)              (NEW)                 (EXPIRED)
     │                    ↓                    │
     │              Limit price            │
     │              reached                 │
     │                    ↓                  │
     └────────────────────┴──────────────────┘
                          ↓
              ┌───────────┴───────────┐
              ↓                       ↓
        Order executed           Order cancelled
        (FILLED)                  (EXPIRED)
```

**API Request:**
```json
POST /api/v3/order
{
  "symbol": "BTCUSDT",
  "side": "BUY",
  "type": "STOP_LOSS_LIMIT",
  "price": "44000.00",
  "stopPrice": "44500.00",
  "quantity": "0.5",
  "timeInForce": "GTC"
}
```

### 4. Stop-Market Order

**Description:**
A stop-market order is similar to a stop-limit order, but when the stop price is triggered, the order executes as a market order at the best available price.

**Availability:** Futures (primary), Margin (limited)

**UI Elements:**
- Stop price input field (required)
- Amount input field (required)
- No limit price (market execution)

**API Request:**
```json
POST /fapi/v1/order
{
  "symbol": "BTCUSDT",
  "side": "BUY",
  "type": "STOP_MARKET",
  "stopPrice": "44500.00",
  "quantity": "0.5"
}
```

### 5. OCO (One Cancels the Other)

**Description:**
An OCO order is a pair of orders where executing one automatically cancels the other. This allows traders to set two price points - for example, a take-profit and a stop-loss.

**Availability:** Spot, Margin

**UI Elements:**
- Price input (limit order price)
- Stop price (stop order trigger)
- Stop limit price (stop order execution)
- Amount input field
- List order side indicator

**Order Flow:**
```
Enter limit price → Enter stop price → Enter stop limit → Enter amount
                                 ↓
                        OCO order placed
                                 ↓
      ┌─────────────────────────┴──────────────────────────┐
      ↓                                                  ↓
Limit price executed                          Stop price triggered
      ↓                                                  ↓
Stop order cancelled                          Limit order activated
(FILLED)                                       (then FILLED/CANCELED)
```

**API Request:**
```json
POST /api/v3/order/oco
{
  "symbol": "BTCUSDT",
  "side": "SELL",
  "quantity": "0.5",
  "price": "50000.00",
  "stopPrice": "44000.00",
  "stopLimitPrice": "43900.00",
  "stopLimitTimeInForce": "GTC"
}
```

### 6. Trailing Stop Order

**Description:**
A trailing stop order is a dynamic stop order that follows (trails) the market price at a specified distance. As the price moves in the favorable direction, the stop price adjusts automatically. If the price reverses by the trail amount, the order triggers.

**Availability:** Futures (primary)

**UI Elements:**
- Amount input field
- Trailing stop type selector
- Callback rate input (percentage)
- Activation price (optional)

**Trailing Stop Types:**
| Type | Description |
|------|-------------|
| Percent | Stop distance as % of current price |
| Price | Fixed price distance |
| ATR | Distance based on Average True Range |

**API Request:**
```json
POST /fapi/v1/order
{
  "symbol": "BTCUSDT",
  "side": "SELL",
  "type": "TRAILING_STOP_MARKET",
  "quantity": "0.5",
  "callbackRate": "0.5"
}
```

---

## Time-in-Force Options

Time-in-force defines the period during which an order is active before it expires.

### 1. GTC (Good Till Cancel)

**Description:**
A GTC order remains active until it is either filled or manually cancelled. The order will not expire automatically.

**Use Cases:**
- Long-term trading
- Waiting for specific price levels
- Position building over time

**Behavior:**
- Does not execute immediately at market
- Remains in order book until filled
- Must be manually cancelled

**UI Label:** "GTC" / "Good Till Cancel"

### 2. IOC (Immediate or Cancel)

**Description:**
An IOC order must be executed immediately at the specified price or better. Any portion that cannot be immediately filled is cancelled.

**Use Cases:**
- Quick entry/exit
- Avoiding slippage
- Filling as much as possible immediately

**Behavior:**
- Attempts immediate execution
- Partial fills allowed
- Unfilled portion cancelled

**UI Label:** "IOC" / "Immediate or Cancel"

### 3. FOK (Fill or Kill)

**Description:**
A FOK order must be filled in its entirety immediately at the specified price or better. If the entire order cannot be filled, the order is cancelled.

**Use Cases:**
- Large orders requiring full fill
- Precise price execution
- Risk management

**Behavior:**
- Must fill completely
- No partial fills
- All or nothing execution

**UI Label:** "FOK" / "Fill or Kill"

### Time-in-Force Comparison

| Feature | GTC | IOC | FOK |
|---------|-----|-----|-----|
| Partial Fill | ✓ | ✓ | ✗ |
| Manual Cancel | ✓ | ✗ | ✗ |
| Expiry | Manual | Immediate | Immediate |
| Market Orders | ✗ | ✓ | ✓ |
| Limit Orders | ✓ | ✓ | ✓ |

---

## Order Parameters

### Common Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| symbol | Yes | Trading pair (e.g., "BTCUSDT") |
| side | Yes | "BUY" or "SELL" |
| type | Yes | Order type |
| quantity | Yes | Order quantity |
| price | Conditional | Limit price |
| stopPrice | Conditional | Stop price for stop orders |
| stopLimitPrice | Conditional | Stop limit price |
| timeInForce | Conditional | GTC/IOC/FOK |
| newOrderRespType | No | Response format |

### Validation Rules

**Price Validation:**
```
price > 0
price >= minPrice (from exchange info)
price <= maxPrice (from exchange info)
price % tickSize == 0
```

**Quantity Validation:**
```
quantity > 0
quantity >= minQty (from exchange info)
quantity <= maxQty (from exchange info)
quantity % stepSize == 0
```

**Stop Price Validation:**
```
stopPrice > 0
stopPrice != price (for stop-limit)
stopPrice > price for SELL stops
stopPrice < price for BUY stops
```

---

## Order Form UI

### Order Type Selector

**Layout Reference:** `layout_order_type_selector.xml`

**Dropdown Options:**
```
┌─────────────────────────────────────────┐
│ Limit                             ▼   │
├─────────────────────────────────────────┤
│ Limit                                 │
│ Market                                │
│ Stop-Limit                            │
│ Stop-Market                           │
│ OCO (Margin only)                     │
└─────────────────────────────────────────┘
```

### Conditional Fields Visibility

| Order Type | Price | Stop Price | Stop Limit | TIF |
|------------|-------|------------|------------|-----|
| Limit | ✓ | ✗ | ✗ | ✓ |
| Market | ✗ | ✗ | ✗ | ✗ |
| Stop-Limit | ✓ | ✓ | ✓ | ✓ |
| Stop-Market | ✗ | ✓ | ✗ | ✗ |
| OCO | ✓ | ✓ | ✓ | ✓ |
| Trailing Stop | ✗ | ✗ | ✗ | ✗ |

### Order Form Layout

```
┌─────────────────────────────────────────────────────────────────┐
│ [Buy] [Sell]                                                    │
├─────────────────────────────────────────────────────────────────┤
│ Order Type: [Limit ▼]                                          │
├─────────────────────────────────────────────────────────────────┤
│ Price:     [____________] USDT                                   │
│ (hidden for Market)                                            │
├─────────────────────────────────────────────────────────────────┤
│ Stop:      [____________] USDT    [Set Trigger]                 │
│ (shown for Stop orders)                                        │
├─────────────────────────────────────────────────────────────────┤
│ Amount:    [____________] BTC                                   │
│             Available: 0.5421 BTC                               │
├─────────────────────────────────────────────────────────────────┤
│ [ ] Post-Only  [ ] IOC  [ ] GTC                                 │
│ (Post-only shown for Limit, IOC/GTC for Limit)                 │
├─────────────────────────────────────────────────────────────────┤
│ Total:     450.00 USDT                                          │
│ Fee:       0.10 USDT (0.1%)                                     │
├─────────────────────────────────────────────────────────────────┤
│ [                 Buy BTC                ]                    │
│ [  25%  ][  50%  ][  75%  ][  100%  ]                          │
└─────────────────────────────────────────────────────────────────┘
```

---

## Order Status Lifecycle

### Status Values

| Status | Description | Terminal? |
|--------|-------------|-----------|
| NEW | Order placed, not filled | No |
| PARTIALLY_FILLED | Some quantity filled | No |
| FILLED | Fully filled | Yes |
| CANCELED | Order canceled | Yes |
| PENDING_CANCEL | Cancel requested, pending | No |
| REJECTED | Order rejected by server | Yes |
| EXPIRED | Order expired | Yes |

### Status Transitions

```
NEW ─────────────────────┐
  │                      │
  ├── PARTIALLY_FILLED ──┤
  │         │            │
  │         ├── FILLED ──┼─────── (Terminal)
  │         │            │
  │         ├── CANCELED ┤
  │         │            │
  │         └── EXPIRED ─┘
  │
  ├── CANCELED ──────────┼─────── (Terminal)
  │
  ├── REJECTED ─────────┼─────── (Terminal)
  │
  └── PENDING_CANCEL ───┘
```

---

## API Endpoints

### Create Order
```
POST /api/v3/order (Spot)
POST /sapi/v1/margin/order (Margin)
POST /fapi/v1/order (Futures)
```

### Cancel Order
```
DELETE /api/v3/order (Spot)
DELETE /sapi/v1/margin/order (Margin)
DELETE /fapi/v1/order (Futures)
```

### Query Order
```
GET /api/v3/order (Spot)
GET /sapi/v1/margin/order (Margin)
GET /fapi/v1/order (Futures)
```

### Open Orders
```
GET /api/v3/openOrders (Spot)
GET /sapi/v1/margin/openOrders (Margin)
GET /fapi/v1/openOrders (Futures)
```

### Cancel All Orders
```
DELETE /api/v3/openOrders (Spot)
DELETE /sapi/v1/margin/openOrders (Margin)
```

---

## Order Validation Errors

| Error Code | Description |
|------------|-------------|
| -1000 | Unknown error |
| -1001 | Disconnected |
| -1002 | Unauthorized |
| -1003 | Too many requests |
| -1015 | Too many new orders |
| -1016 | Service is unavailable |
| -1020 | Unsupported operation |
| -1102 | Mandatory parameter missing |
| -1103 | Illegal parameter |
| -1111 | Invalid precision |
| -2011 | Unknown order |
| -2013 | Order does not exist |
| -2014 | Invalid order status |
| -2015 | Invalid API key |
| -2016 | Balance insufficient |

---

## Related Documentation

- [05-Exchange-Trade](05-exchange-trade.md) - Main trade screen
- [12-Exchange-Order-Book](12-exchange-order-book.md) - Order book
- [15-Exchange-Open-Orders](15-exchange-open-orders.md) - Open orders
- [16-Exchange-Trade-History](16-exchange-trade-history.md) - Trade history
- [51-Data-Models](51-data-models.md) - Data models

---

## Implementation Notes

### Key Classes
- `OrderFormView` - Order form UI component
- `OrderViewModel` - Order data management
- `OrderValidationManager` - Order validation
- `OrderApiService` - API communication
- `OrderType` - Enum for order types

### Layout Files
- `layout_order_form.xml` - Main form
- `layout_order_type_selector.xml` - Order type dropdown
- `layout_price_input.xml` - Price input section
- `layout_stop_price_input.xml` - Stop price section

### View IDs (from decompiled resources)
- `2131624250` - order_type_dropdown
- `2131624251` - price_label
- `2131624252` - price_input
- `2131624254` - stop_price_input
- `2131624260` - amount_label
- `2131624261` - amount_input
- `2131624270` - post_only_checkbox
- `2131624271` - ioc_checkbox
- `2131624272` - gtc_checkbox

---

_Last Updated: 2026-03-12_
