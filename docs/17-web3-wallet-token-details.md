# 17-Web3-Wallet-Token-Details

## Overview

This document provides detailed specifications for the Token Detail screen within the Web3 Wallet Assets section. This screen displays comprehensive information about a specific token including price charts, token metadata, user holdings, and action buttons for Send/Receive/Swap operations.

---

## Page Route

```
/web3/assets/token/{contractAddress}
```

**Deep Link Pattern:**
- `binance://web3/token/{address}`
- `binance://web3/token-detail`
- `app.binance.com/web3/assets/token?address=0x...`

---

## Workflow Context

```
Web3 Assets (Tokens Tab) → Token List → Token Details
                                          ↓
                    ┌─────────────────────┼─────────────────────┐
                    ↓                     ↓                     ↓
              Price Chart            Token Actions         Holdings
                    ↓                     ↓                     ↓
              Historical Data    Send/Receive/Swap      Balance Details
```

**User Flow:**
1. User navigates to Assets from Web3 tab
2. Selects Tokens tab
3. Scrolls/searches for specific token
4. Taps token row → navigates to Token Details
5. Views price chart, token info, and balance
6. Can perform Send/Receive/Swap actions
7. Can view transaction history for this token

---

## Screen Container Architecture

### Parent Container: TokenDetailActivity
- **Package:** `com.mpc.wallet.token`
- **Layout:** `activity_token_detail.xml`
- **View ID:** `2131625600`

### Screen Variants:
| Variant | Purpose |
|---------|---------|
| Standard Token | ERC-20 / BEP-20 tokens |
| Native Token | ETH, BNB, MATIC (no contract) |
| NFT Token | ERC-721 / BEP-721 (shows collection) |
| Staked Token | Shows staking information |

---

## Tabs and Subviews

### Top Navigation Bar
- **Back Button** (left)
- **Title** (center) - Token name and symbol
- **Star/Favorite** (right) - Add to favorites
- **More Options** (right) - Share, hide, contract info

### Main Content Sections (Vertical Scroll)

```
┌─────────────────────────────────────────┐
│ Header: Token Icon + Name + Price       │
│  [Icon]  Token Name (UNI)              │
│          $12.34 (+2.5%)                │
├─────────────────────────────────────────┤
│ Section: Price Chart                    │
│  Interactive line chart                │
│  Time range tabs: 1H 1D 1W 1M 1Y ALL   │
├─────────────────────────────────────────┤
│ Section: Statistics                    │
│  Market Cap | Volume | Circulating     │
├─────────────────────────────────────────┤
│ Section: Holdings                       │
│  Balance: 12.5 UNI                     │
│  Value: $123.45                        │
├─────────────────────────────────────────┤
│ Section: Action Buttons                 │
│  [Send] [Receive] [Swap]              │
├─────────────────────────────────────────┤
│ Section: Token Information              │
│  Contract Address | Decimals | Holders │
├─────────────────────────────────────────┤
│ Section: Transactions                   │
│  Recent transactions for this token   │
└─────────────────────────────────────────┘
```

---

## Widget Regions

### 1. Token Header Card

**Layout Reference:** `layout_token_header.xml`

**Components:**
- Token Icon
  - View ID: `2131625601` (token_icon)
  - Size: 48x48dp
  - Rounded corners: 24dp (circle)
  
- Token Name
  - View ID: `2131625602` (token_name)
  - Font: Bold, 20sp
  
- Token Symbol
  - View ID: `2131625603` (token_symbol)
  - Font: Regular, 14sp, Gray
  - Format: "UNI"
  
- Current Price
  - View ID: `2131625604` (current_price)
  - Font: Bold, 24sp
  - Format: "$12.34"
  
- Price Change (24h)
  - View ID: `2131625605` (price_change_24h)
  - Font: Medium, 14sp
  - Format: "+$1.23 (+2.5%)"
  - Color: Green (#00C853) for positive, Red (#F44336) for negative

### 2. Price Chart

**Layout Reference:** `layout_token_price_chart.xml`

**Components:**
- Chart Container
  - View ID: `2131625606` (price_chart_container)
  - WebView or Custom View for TradingView chart
  
- Time Range Selector
  - View ID: `2131625607` (time_range_selector)
  - TabLayout with options: 1H, 1D, 1W, 1M, 1Y, ALL
  
- Chart Stats Row
  - View ID: `2131625608` (chart_stats)
  - High/Low prices for selected range
  - Format: "High: $15.00 | Low: $10.00"

**Chart Interaction:**
- Pan and zoom gestures
- Crosshair on touch showing price/time
- Tap to see specific point details

### 3. Statistics Section

**Layout Reference:** `layout_token_statistics.xml`

**Components:**
- Market Cap
  - View ID: `2131625609` (market_cap)
  - Format: "$1.2B" or "$1,200,000,000"
  
- 24h Volume
  - View ID: `2131625610` (volume_24h)
  - Format: "$500M"
  
- Circulating Supply
  - View ID: `2131625611` (circulating_supply)
  - Format: "100,000,000 UNI"
  
- Total Supply
  - View ID: `2131625612` (total_supply)
  - Format: "1,000,000,000 UNI"
  
- Max Supply
  - View ID: `2131625613` (max_supply)
  - Format: "1,000,000,000 UNI" (if applicable)

### 4. Holdings Section

**Layout Reference:** `layout_token_holdings.xml`

**Components:**
- Available Balance
  - View ID: `2131625614` (available_balance)
  - Font: Bold, 20sp
  - Format: "12.5432 UNI"
  
- USD Value
  - View ID: `2131625615` (balance_usd_value)
  - Font: Regular, 14sp, Gray
  - Format: "$123.45"
  
- In Orders (if applicable)
  - View ID: `2131625616` (in_orders)
  - Format: "In Orders: 1.5 UNI"
  
- Total Balance
  - View ID: `2131625617` (total_balance)
  - Format: "Total: 14.0432 UNI"

### 5. Action Buttons Row

**Layout Reference:** `layout_token_actions.xml`

**Components:**
- Send Button
  - View ID: `2131625618` (send_button)
  - Icon: Up arrow
  - Text: "Send"
  - Style: Outlined button
  
- Receive Button
  - View ID: `2131625619` (receive_button)
  - Icon: Down arrow
  - Text: "Receive"
  - Style: Outlined button
  
- Swap Button
  - View ID: `2131625620` (swap_button)
  - Icon: Swap arrows
  - Text: "Swap"
  - Style: Filled button (Primary color)

**Button Specifications:**
- Width: Equal distribution (weight 1)
- Height: 48dp
- Corner radius: 24dp (pill shape)
- Spacing: 12dp between buttons

### 6. Token Information Section

**Layout Reference:** `layout_token_info.xml`

**Components:**
- Contract Address
  - View ID: `2131625621` (contract_address)
  - Format: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
  - Tap: Copy to clipboard
  - Tap: View in explorer
  
- Contract Explorer Link
  - View ID: `2131625622` (view_in_explorer)
  - Icon: External link
  - Opens Etherscan/BscScan
  
- Decimals
  - View ID: `2131625623` (decimals)
  - Format: "Decimals: 18"
  
- Official Website
  - View ID: `2131625624` (official_website)
  - Tap: Opens browser
  
- Community Links
  - View ID: `2131625625` (community_links)
  - Icons: Twitter, Telegram, Discord

### 7. Recent Transactions

**Layout Reference:** `layout_token_transactions.xml`

**Components:**
- Section Header
  - View ID: `2131625626` (transactions_header)
  - Text: "Transactions"
  - Action: "See All" → Full history
  
- Transaction List
  - View ID: `2131625627` (transaction_list)
  - Layout: LinearLayoutManager
  - Item Count: 5 (recent)
  - Same structure as asset transaction items

---

## Component Hierarchy

```
TokenDetailActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title: token name)
│       ├─ ImageButton (favorite)
│       └─ ImageButton (share)
├─ NestedScrollView
│   └─ LinearLayout (vertical)
│       ├─ Include: token_header
│       │   └─ ConstraintLayout
│       │       ├─ ImageView (token_icon)
│       │       ├─ TextView (token_name)
│       │       ├─ TextView (token_symbol)
│       │       ├─ TextView (current_price)
│       │       └─ TextView (price_change)
│       ├─ Include: price_chart
│       │   ├─ WebView/CustomView (chart)
│       │   ├─ TabLayout (time_ranges)
│       │   └─ TextView (high_low)
│       ├─ Include: statistics
│       │   ├─ TextView (market_cap)
│       │   ├─ TextView (volume)
│       │   ├─ TextView (circulating)
│       │   └─ TextView (total_supply)
│       ├─ Include: holdings
│       │   ├─ TextView (balance)
│       │   ├─ TextView (usd_value)
│       │   └─ TextView (in_orders)
│       ├─ LinearLayout (actions)
│       │   ├─ Button (send)
│       │   ├─ Button (receive)
│       │   └─ Button (swap)
│       ├─ Include: token_info
│       │   ├─ TextView (contract_address)
│       │   ├─ TextView (decimals)
│       │   └─ LinearLayout (links)
│       └─ Include: transactions
│           ├─ TextView (header)
│           └─ RecyclerView (transactions)
└─ BottomSheet: more_options_sheet
    ├─ Share option
    ├─ Hide option
    └─ Contract info
```

---

## Data Models

### Token Detail Model
```kotlin
data class TokenDetail(
    val contractAddress: String,
    val chainId: String,
    val name: String,
    val symbol: String,
    val decimals: Int,
    val logoUrl: String,
    val priceUSD: Double,
    val priceChange24h: Double,
    val priceChangePercent24h: Double,
    val marketCap: Double?,
    val volume24h: Double?,
    val circulatingSupply: Double,
    val totalSupply: Double,
    val maxSupply: Double?,
    val holders: Int?,
    val officialWebsite: String?,
    val description: String?,
    val communityLinks: CommunityLinks?
)

data class CommunityLinks(
    val twitter: String?,
    val telegram: String?,
    val discord: String?
)
```

### Token Balance Model
```kotlin
data class TokenBalance(
    val contractAddress: String,
    val balance: Double,
    val balanceFormatted: String,
    val balanceUSD: Double,
    val inOrders: Double?,
    val availableBalance: Double
)
```

### Price Point Model
```kotlin
data class PricePoint(
    val timestamp: Long,
    val price: Double,
    val volume: Double?
)

data class PriceHistory(
    val tokenAddress: String,
    val timeframe: Timeframe,  // H1, D1, W1, M1, Y1, ALL
    val prices: List<PricePoint>
)
```

---

## API Endpoints

### Token Details
```
GET /sapi/v1/eth/token/detail
Parameters: { "address": "0x...", "chain": "eth" }
Response: TokenDetail object

GET /sapi/v1/eth/token/price
Parameters: { "symbol": "UNI", "chain": "eth" }
Response: Current price and 24h change
```

### Price History
```
GET /sapi/v1/eth/price/history
Parameters: { 
    "address": "0x...",
    "chain": "eth",
    "interval": "1h",  // 1m, 5m, 15m, 1h, 4h, 1d
    "startTime": 1700000000000,
    "endTime": 1700100000000
}
Response: Array of PricePoint objects
```

### Token Balance
```
GET /sapi/v1/eth/token/balance
Parameters: { "address": "0x...", "token": "0x..." }
Response: TokenBalance object
```

### Token Transactions
```
GET /sapi/v1/eth/transactions
Parameters: { 
    "address": "0x...",
    "token": "0x...",
    "limit": 20
}
Response: Array of Web3Transaction objects
```

---

## Screen Variants

### Variant 1: Standard Token (Primary)
- Full information display
- All action buttons enabled
- Complete statistics

### Variant 2: Native Token
- Simplified header (no contract address)
- Show staked amount if applicable
- Gas balance included

### Variant 3: Low Balance
- Small balance warning
- "Buy" button prominent
- Swap disabled if balance too low

### Variant 4: Unverified Token
- Warning banner
- Limited information
- Caution indicators

### Variant 5: Loading State
- Skeleton loaders
- Placeholder values
- Shimmer animation

---

## Filters and Selectors

### Chain Selector
- **Type:** Dropdown in header
- **View ID:** `2131625628` (chain_selector)
- Switches between ETH, BNB, MATIC, etc.
- Updates all data for selected chain

### Time Range Selector
- **Type:** TabLayout in chart section
- **View ID:** `2131625607`
- Options: 1H, 1D, 1W, 1M, 1Y, ALL

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 home
- [11-Web3-Wallet-Assets](11-web3-wallet-assets.md) - Assets overview
- [19-Web3-Wallet-Swap](19-web3-wallet-swap.md) - Swap functionality
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Price Chart
- Uses TradingView lightweight charts library
- Interactive with touch gestures
- Real-time updates via WebSocket

### Token Balance
- Fetches from multiple sources
- Combines in-wallet + in-exchange balances
- Real-time updates via WebSocket

### Contract Address
- Validates checksum format
- Supports ENS names (if enabled)
- One-tap copy to clipboard

### Performance
- Lazy load chart data
- Cache price data
- Pagination for transactions

### Error Handling
- Network error retry
- Invalid address handling
- Token not found state

---

_Last Updated: 2026-03-12_
