# Binance UI/UX Knowledge Base - Features & Functions

## Overview

This document provides a comprehensive list of all features and functions in the Binance Android app, including UI components, input fields, validations, and state management.

---

## Home Screen Features

### 1. Portfolio Display

**Purpose**: Show user's total asset value and portfolio composition

**UI Components**:
| Component | Type | Description |
|-----------|------|-------------|
| Total Balance | TextView | Large text showing total USD/BTC value |
| Balance Toggle | ImageButton | Eye icon to hide/show balance |
| 24h Change | TextView | Percentage change with color indicator |
| Portfolio Chart | PieChart | Asset distribution visualization |
| Asset List | RecyclerView | List of top holdings |

**Data Displayed**:
- Total portfolio value in USD
- Total portfolio value in BTC
- 24-hour change percentage
- Top 5 assets by value
- Asset allocation percentage

**Interactions**:
| Action | Result |
|--------|--------|
| Tap balance | Toggle between USD/BTC display |
| Tap eye icon | Hide/show balance (privacy) |
| Tap asset | Navigate to asset detail |
| Pull down | Refresh portfolio data |

### 2. Quick Actions

**Purpose**: Provide fast access to common operations

**UI Components**:
| Action | Icon | Button Style |
|--------|------|--------------|
| Deposit | Down arrow | Green button |
| Withdraw | Up arrow | Red button |
| Trade | Swap arrows | Yellow button |
| Transfer | Transfer icon | Yellow button |
| Earn | Percentage icon | Yellow button |
| Buy Crypto | Credit card | Yellow button |

**Layout**:
```
┌─────────────────────────────────────────────────────┐
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐       │
│  │Deposit│ │Withdraw│ │Trade│ │Transfer│ │Earn│    │
│  └─────┘  └─────┘  └─────┘  └─────┘  └─────┘       │
└─────────────────────────────────────────────────────┘
```

### 3. Market Overview

**Purpose**: Display trending market data

**UI Components**:
| Component | Description |
|-----------|-------------|
| Section Header | "Market Overview" with "See All" link |
| Horizontal RecyclerView | Scrollable list of top pairs |
| Pair Card | Symbol, price, 24h change |

**Data Per Card**:
- Trading pair symbol (e.g., BTC/USDT)
- Current price
- 24-hour change percentage
- Mini sparkline chart (optional)

### 4. Banner Carousel

**Purpose**: Display promotions and announcements

**UI Components**:
| Component | Specification |
|-----------|---------------|
| ViewPager2 | Horizontal scrolling banners |
| Indicator | Dot indicators at bottom |
| Auto-scroll | 5-second interval |
| Image | 16:9 aspect ratio |

**Banner Types**:
- New listing announcements
- Trading competitions
- Earn product promotions
- Feature updates
- Educational content

---

## Markets Screen Features

### 1. Search Functionality

**Purpose**: Find trading pairs quickly

**UI Components**:
| Component | Type | Specification |
|-----------|------|---------------|
| Search Bar | EditText | Full width, 44dp height |
| Search Icon | ImageView | Left side of input |
| Clear Button | ImageButton | Right side (when text exists) |
| Results List | RecyclerView | Filtered pairs |

**Input Validation**:
| Rule | Behavior |
|------|----------|
| Empty query | Show all pairs |
| No results | Show empty state |
| Valid query | Filter in real-time |

**Search Scope**:
- Pair symbol (BTC, ETH)
- Pair name (Bitcoin, Ethereum)
- Base asset
- Quote asset

### 2. Favorites System

**Purpose**: Track preferred trading pairs

**UI Components**:
| Component | Description |
|-----------|-------------|
| Star Icon | Toggle favorite status |
| Favorites Tab | Show only favorited pairs |
| Empty State | "No favorites yet" message |

**Interactions**:
| Action | Result |
|--------|--------|
| Tap star | Add/remove from favorites |
| View favorites | Filter to show only favorites |
| Pull to refresh | Update prices |

### 3. Market Categories

**Purpose**: Organize trading pairs by performance

**Categories**:
| Tab | Filter Logic | Sort Order |
|-----|--------------|------------|
| All | All pairs | By volume |
| Hot | High volume | Volume descending |
| Gainers | Positive 24h change | Change descending |
| Losers | Negative 24h change | Change ascending |
| New | Recently listed | Date descending |

**UI Components per Category**:
- TabLayout with category names
- Badge showing count
- RecyclerView with filtered results

### 4. Price Alerts

**Purpose**: Notify users of price movements

**UI Components**:
| Component | Type | Description |
|-----------|------|-------------|
| Alert Icon | ImageButton | In pair item row |
| Alert Dialog | BottomSheet | Configure alert |
| Price Input | EditText | Target price |
| Condition | RadioButton | Above/Below |
| Active Alerts | RecyclerView | List of active alerts |

**Alert Configuration**:
| Field | Type | Validation |
|-------|------|------------|
| Target Price | Decimal | Must differ from current price |
| Condition | Selection | Above or Below |
| Repeat | Boolean | One-time or recurring |
| Notification | Selection | Push, Email, SMS |

---

## Trade Screen Features

### 1. Chart Types

**Purpose**: Visualize price data

**Chart Types**:
| Type | Description | Default |
|------|-------------|---------|
| Candlestick | OHLC candles | ✓ |
| Line | Close price line | |
| Area | Filled line chart | |

**Time Intervals**:
| Interval | Label | API Parameter |
|----------|-------|---------------|
| 1 minute | 1m | "1m" |
| 3 minutes | 3m | "3m" |
| 5 minutes | 5m | "5m" |
| 15 minutes | 15m | "15m" |
| 30 minutes | 30m | "30m" |
| 1 hour | 1h | "1h" |
| 2 hours | 2h | "2h" |
| 4 hours | 4h | "4h" |
| 6 hours | 6h | "6h" |
| 12 hours | 12h | "12h" |
| 1 day | 1d | "1d" |
| 3 days | 3d | "3d" |
| 1 week | 1w | "1w" |
| 1 month | 1M | "1M" |

**Chart Interactions**:
| Gesture | Action |
|---------|--------|
| Pinch | Zoom in/out |
| Swipe | Pan left/right |
| Long press | Show crosshair with OHLC |
| Double tap | Reset zoom |

**Chart Indicators**:
| Indicator | Overlay | Description |
|-----------|---------|-------------|
| MA (Moving Average) | Yes | 7, 25, 99 periods |
| EMA | Yes | Exponential MA |
| Bollinger Bands | Yes | Volatility bands |
| RSI | No | Separate panel |
| MACD | No | Separate panel |
| Volume | No | Bottom panel |

### 2. Order Types

**Purpose**: Execute different trading strategies

#### Limit Order

**Description**: Buy/sell at specified price or better

**Input Fields**:
| Field | Type | Validation |
|-------|------|------------|
| Price | Decimal | Must be > 0 |
| Amount | Decimal | Within balance |
| Total | Calculated | Price × Amount |

**UI Components**:
```
┌─────────────────────────────────────┐
│  Price (USDT)                       │
│  ┌─────────────────────────────┐   │
│  │  42,500.00         [-] [+]  │   │
│  └─────────────────────────────┘   │
│                                     │
│  Amount (BTC)                       │
│  ┌─────────────────────────────┐   │
│  │  0.1000            [-] [+]  │   │
│  └─────────────────────────────┘   │
│  [25%] [50%] [75%] [100%]          │
│                                     │
│  Total: 4,250.00 USDT              │
└─────────────────────────────────────┘
```

#### Market Order

**Description**: Buy/sell at current market price

**Input Fields**:
| Field | Type | Validation |
|-------|------|------------|
| Amount | Decimal | Within balance |
| Estimated Total | Calculated | Based on best price |

**Note**: No price input - executes at market price

#### Stop-Limit Order

**Description**: Trigger limit order at specified price

**Input Fields**:
| Field | Type | Validation |
|-------|------|------------|
| Stop Price | Decimal | Trigger price |
| Limit Price | Decimal | Order execution price |
| Amount | Decimal | Quantity to trade |

**UI Components**:
```
┌─────────────────────────────────────┐
│  Stop Price (USDT)                  │
│  ┌─────────────────────────────┐   │
│  │  40,000.00                  │   │
│  └─────────────────────────────┘   │
│                                     │
│  Limit Price (USDT)                 │
│  ┌─────────────────────────────┐   │
│  │  39,500.00                  │   │
│  └─────────────────────────────┘   │
│                                     │
│  Amount (BTC)                       │
│  ┌─────────────────────────────┐   │
│  │  0.1000                     │   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### 3. Order Book

**Purpose**: Display market depth

**UI Components**:
| Section | Color | Description |
|---------|-------|-------------|
| Asks (Sell) | Red | Sell orders, highest to lowest |
| Spread | Gray | Difference between best bid/ask |
| Bids (Buy) | Green | Buy orders, highest to lowest |

**Data Per Row**:
| Column | Description |
|--------|-------------|
| Price | Order price |
| Amount | Order quantity |
| Total | Cumulative total |

**Visual Elements**:
- Depth bar (background) showing relative size
- Color intensity based on order size

### 4. Recent Trades

**Purpose**: Show latest executed trades

**UI Components**:
| Column | Description |
|--------|-------------|
| Price | Execution price |
| Amount | Trade quantity |
| Time | Execution timestamp |

**Color Coding**:
| Trade Type | Color |
|------------|-------|
| Buy (taker) | Green |
| Sell (taker) | Red |

---

## Futures Screen Features

### 1. Leverage Selection

**Purpose**: Control position size multiplier

**UI Components**:
| Component | Type | Description |
|-----------|------|-------------|
| Leverage Button | Button | Shows current leverage |
| Slider | SeekBar | Adjust leverage |
| Input Field | EditText | Direct input |

**Leverage Options**:
| Mode | Range | Step |
|------|-------|------|
| Cross | 1x - 125x | Variable |
| Isolated | 1x - 50x | Variable |

**Validation**:
| Rule | Error Message |
|------|---------------|
| Insufficient margin | "Insufficient balance for leverage" |
| Exceeds max leverage | "Maximum leverage is Xx" |

### 2. Margin Mode

**Purpose**: Define how margin is calculated

**Modes**:
| Mode | Description | Risk |
|------|-------------|------|
| Cross | All balance as collateral | Entire balance at risk |
| Isolated | Specific amount as collateral | Only isolated amount at risk |

**UI Components**:
- Toggle switch between modes
- Margin amount input (isolated)
- Risk indicator

### 3. Position Display

**Purpose**: Show open positions

**Position Data**:
| Field | Description |
|-------|-------------|
| Pair | Trading pair |
| Size | Position size |
| Entry Price | Average entry price |
| Mark Price | Current mark price |
| Liquidation Price | Price of forced closure |
| Margin | Used margin |
| PnL | Profit and Loss |
| ROE | Return on Equity |

**UI Components**:
```
┌─────────────────────────────────────────────────────┐
│  BTCUSDT Perpetual                    [Close]       │
│  Size: 0.5 BTC (Long)                              │
│  Entry: 42,000 | Mark: 43,000 | Liq: 38,000       │
│  Margin: 420 USDT | Leverage: 50x                   │
│  PnL: +500 USDT (+1.19%)              [TP/SL]      │
└─────────────────────────────────────────────────────┘
```

---

## Wallet Screen Features

### 1. Balance Display

**Purpose**: Show total and available balances

**UI Components**:
| Component | Description |
|-----------|-------------|
| Total Balance | Sum of all assets |
| Estimated Value | In USD/BTC |
| Account Selector | Spot/Funding/Futures tabs |

**Balance Categories**:
| Category | Description |
|----------|-------------|
| Total Balance | All assets combined |
| Available | Free to trade/withdraw |
| In Order | Locked in open orders |
| Earn | Locked in earn products |

### 2. Asset List

**Purpose**: Display all held assets

**List Item Components**:
| Component | Description |
|-----------|-------------|
| Coin Icon | Cryptocurrency logo |
| Coin Symbol | BTC, ETH, etc. |
| Coin Name | Full name |
| Balance | Total holdings |
| Value | USD equivalent |
| 24h Change | Price change |

**Sorting Options**:
| Option | Order |
|--------|-------|
| Value (High to Low) | Default |
| Value (Low to High) | Ascending |
| Name (A-Z) | Alphabetical |
| 24h Change | Performance |

### 3. Deposit Feature

**Purpose**: Receive cryptocurrency

**Flow Steps**:
1. Select coin
2. Select network (if multiple)
3. Display address/QR
4. Wait for confirmation

**UI Components**:
| Component | Description |
|-----------|-------------|
| Coin Selector | Searchable list |
| Network Selector | Radio buttons |
| QR Code | Scannable address |
| Address Text | Copyable string |
| Copy Button | Copy to clipboard |
| Share Button | Share address |
| Warning Banner | Network-specific warnings |

### 4. Withdraw Feature

**Purpose**: Send cryptocurrency

**Input Fields**:
| Field | Type | Validation |
|-------|------|------------|
| Coin | Selection | Must have balance |
| Network | Selection | Must be valid for coin |
| Address | Text | Valid address format |
| Amount | Decimal | Within available balance |
| Memo/Tag | Text | Required for some coins |

**Validations**:
| Rule | Error |
|------|-------|
| Invalid address format | "Invalid address format" |
| Amount too low | "Minimum withdrawal is X" |
| Amount too high | "Insufficient balance" |
| Missing memo | "Memo/Tag is required" |
| Address is own | "Cannot withdraw to own address" |

### 5. Transfer Feature

**Purpose**: Move funds between accounts

**Transfer Types**:
| From | To | Purpose |
|------|-----|---------|
| Spot | Funding | P2P trading |
| Spot | Futures | Futures trading |
| Funding | Spot | Main trading |
| Futures | Spot | Risk management |

**UI Components**:
| Component | Description |
|-----------|-------------|
| From Account | Dropdown selector |
| To Account | Dropdown selector |
| Coin Selector | Searchable list |
| Amount Input | With percentage buttons |
| Available Balance | Reference display |

### 6. Transaction History

**Purpose**: View all past transactions

**Transaction Types**:
| Type | Icon | Description |
|------|------|-------------|
| Deposit | Down arrow | Incoming funds |
| Withdraw | Up arrow | Outgoing funds |
| Transfer | Arrows | Internal transfer |
| Trade | Swap | Buy/sell execution |
| Swap | Refresh | Token swap |
| Earn | Percentage | Staking rewards |
| Airdrop | Gift | Free tokens |

---

## Settings Screen Features

### 1. Profile Management

**Features**:
| Feature | Description |
|---------|-------------|
| Avatar | Profile picture |
| Display Name | User's name |
| Email | Registered email |
| Phone | Registered phone |
| KYC Status | Verification level |

### 2. Security Settings

**Features**:
| Feature | Type | Description |
|---------|------|-------------|
| 2FA | Toggle | Google Authenticator |
| SMS Auth | Toggle | SMS verification |
| Email Auth | Toggle | Email verification |
| Anti-Phishing | Toggle | Custom code in emails |
| Withdrawal Whitelist | Toggle | Only whitelisted addresses |
| Device Management | List | Active sessions |

### 3. Preferences

**Features**:
| Feature | Options |
|---------|---------|
| Language | 20+ languages |
| Currency | USD, EUR, GBP, etc. |
| Theme | Light, Dark, System |
| Notifications | Push, Email, SMS toggles |
| Chart Settings | Default interval, indicators |

---

## Input Validations Summary

### Common Validation Rules

| Field Type | Validation | Error Message |
|------------|------------|---------------|
| Email | Valid email format | "Invalid email address" |
| Phone | Valid phone format | "Invalid phone number" |
| Password | Min 8 chars, 1 upper, 1 number | "Password too weak" |
| Amount | Positive number | "Amount must be positive" |
| Address | Valid crypto address | "Invalid address" |
| Price | Positive number | "Price must be positive" |

### Real-time Validation

| Trigger | Action |
|---------|--------|
| Text changed | Validate format |
| Focus lost | Validate completeness |
| Submit | Validate all fields |

---

## Success/Error States

### Success States

| Action | Feedback |
|--------|----------|
| Order placed | Success dialog + notification |
| Deposit confirmed | Balance update + notification |
| Withdrawal submitted | Pending status + email |
| Transfer complete | Balance update + toast |

### Error States

| Error Type | UI Response |
|------------|-------------|
| Network error | Retry button + message |
| Validation error | Inline error text |
| Insufficient balance | Error dialog |
| Server error | Generic error + retry |

---

## Notes

1. All features follow consistent UI patterns
2. Real-time data updates via WebSocket
3. Offline mode shows cached data with indicator
4. All financial actions require confirmation
5. Security actions require re-authentication
6. Error messages are user-friendly and actionable
7. Success states provide clear feedback
8. Loading states prevent duplicate submissions