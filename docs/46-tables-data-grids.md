# Tables and Data Grids

## Overview

Tables and data grids are used for displaying structured data in the Binance app, particularly for trading information such as order books, trade history, and market data.

## Table Types

### 1. Order Book Table

**Usage:** Displaying buy and sell orders for a trading pair.

**Visual Specifications:**
- Background: Transparent or dark (#0A0A0A for dark mode)
- Row Height: `32dp`
- Price Column: Right-aligned, monospace font
- Amount Column: Right-aligned
- Total Column: Right-aligned (optional)
- Split: Asks (top, red), Bids (bottom, green)
- Background gradient: Fade from price level

**Layout:**
```
┌─────────────────────────────────────────┐
│  Price      Amount      Total           │
├─────────────────────────────────────────┤
│  50,100.00   0.500    25,050.00   (Ask) │
│  50,099.50   0.250    12,524.88   (Ask) │
│  50,099.00   1.000    50,099.00   (Ask) │
├─────────────────────────────────────────┤
│  50,098.50   0.750    37,573.88   (Bid) │
│  50,098.00   0.300    15,029.40   (Bid) │
│  50,097.50   0.500    25,048.75   (Bid) │
└─────────────────────────────────────────┘
```

**Interactive Behaviors:**
- Tap price: Fill order form with price
- Long press: Copy price
- Scroll: Smooth scroll with momentum
- Depth visualization: Background bar width

### 2. Trade History Table

**Usage:** Displaying executed trades for a trading pair.

**Visual Specifications:**
- Row Height: `28dp`
- Columns: Time, Price, Amount, Fee
- Price color: Based on maker/taker or buy/sell
- Alternating row colors: Optional

**Layout:**
```
┌─────────────────────────────────────────┐
│  Time      Price      Amount    Fee    │
├─────────────────────────────────────────┤
│  12:30:45  50,100.00  0.500    0.0001  │
│  12:30:12  50,099.50  0.250    0.00005│
│  12:29:58  50,100.00  1.000    0.0002  │
└─────────────────────────────────────────┘
```

### 3. Market Data Grid

**Usage:** Displaying market statistics and data.

**Visual Specifications:**
- Grid layout with 2-4 columns
- Label: Secondary text color
- Value: Primary text, bold
- Padding: `12dp`

**Layout:**
```
┌─────────────────────────────────────────┐
│  24h Change   24h High    24h Low      │
│  +2.45%       $51,000     $48,500      │
│                                           │
│  24h Volume   24h Trades   Market Cap   │
│  50,000 BTC   125,000     $900B         │
└─────────────────────────────────────────┘
```

### 4. K-Line/Candlestick Data Table

**Usage:** OHLCV data display (supplementary to chart).

**Visual Specifications:**
- Columns: Time, Open, High, Low, Close, Volume
- Compact row height: `24dp`
- Color coding: Green (up), Red (down)

### 5. Portfolio Table

**Usage:** Asset allocation and holdings.

**Visual Specifications:**
- Columns: Asset, Holdings, Value, % of Portfolio
- Sortable columns
- Row height: `48dp`
- Total row at bottom (sticky)

**Layout:**
```
┌─────────────────────────────────────────┐
│  Asset    Holdings    Value     %      │
├─────────────────────────────────────────┤
│  BTC     1.500       $75,000   45%    │
│  ETH     10.000      $30,000   18%    │
│  BNB     50.000      $15,000   9%     │
├─────────────────────────────────────────┤
│  Total   -           $167,000  100%   │
└─────────────────────────────────────────┘
```

## Data Grid Features

### Sorting
- Tap column header to sort
- Sort indicator (arrow)
- Ascending/descending toggle

### Filtering
- Filter by type (buys/sells)
- Filter by time range
- Filter by amount

### Column Configuration
- Show/hide columns
- Reorder columns
- Save preferences

### Scroll Behavior
- Fixed header row
- Horizontal scroll for many columns
- Synchronized scroll (order book asks/bids)

## Table Cell Types

### Price Cell
- Monospace font
- Color: Green (bid/buy) or Red (ask/sell)
- Precision: Based on trading pair
- Copy on long press

### Amount Cell
- Right-aligned
- Decimal precision based on asset
- Abbreviation (K, M, B) for large numbers

### Time Cell
- Format: HH:mm:ss (trades)
- Format: YYYY-MM-DD (history)
- Relative time (optional): "2 min ago"

### Status Cell
- Badge style
- Colors: Pending (yellow), Complete (green), Failed (red)
- Icons with text

### Percentage Cell
- Color: Green (positive), Red (negative)
- + prefix for positive values
- Precision: 2 decimal places

## Implementation Reference

**Classes:**
- `RecyclerView` with custom adapters
- `TableLayout` (for simple tables)
- `HorizontalScrollView` + `RecyclerView`

**Key Features:**
- View recycling for performance
- DiffUtil for updates
- Synchronized dual RecyclerViews (order book)

**Dimensions:**
- Table row height: 28-48dp
- Column padding: 8dp
- Header height: 40dp
- Cell text size: 12-14sp

## Real-Time Updates

### Order Book Updates
- WebSocket connection
- Delta updates (not full refresh)
- Animation: Flash on change
- Depth visualization update

### Trade History Updates
- Newest at top
- Insert animation
- Auto-scroll option

### Price Updates
- Flash animation on change
- Color: Green (up), Red (down)
- Duration: 500ms fade

## Accessibility

- Column headers marked
- Screen reader support
- Touch target: Full row
- Sufficient color contrast

## Usage Examples

### Order Book (Exchange Trade Screen)
- Dual-column layout: Asks (top), Bids (bottom)
- Spread indicator between
- Depth chart background
- Tap to fill order

### Trade History (Order Details)
- Chronological list
- Filter tabs: All, Buys, Sells
- Export option

### Market Statistics
- Card layout
- Grid of metrics
- Pull-to-refresh

---

**Related Documentation:**
- [docs/12-exchange-order-book.md](docs/12-exchange-order-book.md) - Order book details
- [docs/16-exchange-trade-history.md](docs/16-exchange-trade-history.md) - Trade history
- [docs/13-exchange-chart-system.md](docs/13-exchange-chart-system.md) - Chart system
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Table colors
