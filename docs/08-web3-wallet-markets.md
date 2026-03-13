# 08-Web3-Wallet-Markets

## Overview

This document provides detailed specifications for the Web3 Markets screen - the DeFi token prices and market data hub within the Web3 Wallet section. This screen displays real-time prices, market data, and price charts for decentralized finance tokens across multiple blockchain networks.

---

## Page Route

```
/web3/markets
```

**Deep Link Pattern:**
- `binance://web3/markets`
- `binance://web3/markets/defi`
- `app.binance.com/web3/markets`

---

## Workflow Context

```
Web3 Wallet Home → Markets Screen
                         ↓
     ┌──────────────────┼──────────────────┐
     ↓                  ↓                  ↓
 Token List        Price Charts       Market Details
     ↓                  ↓
 Select Token → Token Details Screen
```

**User Flow:**
1. User navigates to Web3 Markets from Web3 tab
2. Browses DeFi token categories via tabs
3. Views real-time prices and market data
4. Interacts with mini price charts
5. Taps a token → navigates to Token Details screen

---

## Screen Purpose

The Web3 Markets screen enables users to:
- **Browse DeFi Tokens**: View all available DeFi tokens across chains
- **Real-Time Prices**: See live prices updated via WebSocket
- **Price Charts**: View mini sparkline charts for each token
- **Market Data**: See 24h change, volume, market cap
- **Chain Filter**: Filter tokens by blockchain network
- **Search**: Find specific tokens quickly
- **Favorites**: Save tokens to watchlist

---

## Screen Container Architecture

### Parent Container: Web3MarketsActivity
- **Package:** `com.mpc.wallet.markets`
- **Layout:** `activity_web3_markets.xml`
- **View ID:** `2131625100`

### Child Fragments:
| Fragment | Purpose |
|----------|---------|
| DefiTokensFragment | All DeFi protocol tokens |
| TrendingFragment | Trending/popular tokens |
| GainersFragment | Top gainers by 24h change |
| LosersFragment | Top losers by 24h change |
| WatchlistFragment | User's saved tokens |

---

## Tabs and Subviews

### Tab Layer 1: Market Categories (Top)

**Layout Reference:** `layout_web3_markets_tabs.xml`

```
┌────────────────────────────────────────────────────────────┐
│ [Search Icon]  [Search Field                      ]       │
├────────────────────────────────────────────────────────────┤
│ [DeFi] [Trending] [Gainers] [Losers] [Watchlist]          │
├────────────────────────────────────────────────────────────┤
│ [Chain Filter: All ▼]                                     │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                  [Token List RecyclerView]                  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Tab Group: Market Categories
- View ID: `2131625101` (web3_market_tabs)

| Tab | Icon | Purpose |
|-----|------|---------|
| DeFi | Protocol icon | All DeFi tokens |
| Trending | Fire icon | Trending tokens |
| Gainers | Up arrow | Top gainers |
| Losers | Down arrow | Top losers |
| Watchlist | Star icon | Saved tokens |

---

## Widget Regions

### 1. Search Bar

**Layout Reference:** `layout_web3_markets_search.xml`

**Components:**
- Search Icon Button
  - View ID: `2131625102` (search_icon)
  - Icon: Magnifying glass (24dp)
  
- Search Input Field
  - View ID: `2131625103` (search_input)
  - Hint: "Search DeFi tokens"
  - Input type: Text
  - Clear button when text entered

- Voice Search (optional)
  - View ID: `2131625104` (voice_search)
  - Icon: Microphone

### 2. Chain Filter

**Layout Reference:** `layout_web3_chain_filter.xml`

**Components:**
- Filter Label
  - View ID: `2131625105` (chain_filter_label)
  - Text: "Chain:"
  
- Chain Dropdown
  - View ID: `2131625106` (chain_dropdown)
  - Default: "All Chains"
  
- Options:
  | Chain | Icon | Token Symbol |
  |-------|------|--------------|
  | All | Globe | - |
  | BNB Chain | BNB | BNB |
  | Ethereum | ETH | ETH |
  | Polygon | MATIC | MATIC |
  | Arbitrum | ARB | ETH |
  | Avalanche | AVAX | AVAX |

### 3. Token List

**Layout Reference:** `layout_web3_token_list.xml`

**RecyclerView Configuration:**
- View ID: `2131625107` (token_list_recycler)
- Layout Manager: LinearLayoutManager (vertical)
- Pull-to-refresh: SwipeRefreshLayout (View ID: `2131625108`)
- Item Decoration: DividerItemDecoration

**List Item Structure (item_defi_token.xml):**

```
ConstraintLayout
├─ Token Icon (left)
│   └─ ImageView: 2131625109
│       Size: 40x40dp, rounded
├─ Token Info Column (center-left)
│   ├─ Token Name
│   │   └─ TextView: 2131625110
│   │       Font: Bold, 15sp
│   ├─ Token Symbol + Chain Badge
│   │   └─ TextView: 2116215111
│   │       Font: Regular, 12sp, Gray
│   │       Format: "UNI • ETH"
├─ Price Column (center-right)
│   ├─ Current Price
│   │   └─ TextView: 2131625112
│   │       Font: Medium, 15sp
│   └─ 24h Change Badge
│       └─ TextView: 2131625113
│           ├─ Positive: Green (#0ECB81)
│           ├─ Negative: Red (#F6465D)
│           Format: "+5.23%"
└─ Mini Chart (right)
    └─ CustomView: 2131625114 (sparkline_chart)
        Size: 60x30dp
```

### 4. Price Chart Widget

**Layout Reference:** `layout_token_price_chart.xml`

**Components:**
- Chart Container
  - View ID: `2131625115` (price_chart_container)
  - Type: TradingView WebView or custom chart view
  
- Timeframe Selector
  - View ID: `2131625116` (chart_timeframe_tabs)
  - Options: 1H, 4H, 1D, 1W, 1M, 1Y, ALL
  
- Price Stats Row
  - View ID: `2131625117` (price_stats)
  - Stats: High, Low, Volume, Market Cap

### 5. Empty State

**Layout Reference:** `layout_web3_markets_empty.xml`

**Components:**
- Empty Icon
  - View ID: `2131625118` (empty_icon)
  - Icon: Chart or search icon (64dp)
  
- Empty Message
  - View ID: `2131625119` (empty_message)
  - Text: "No tokens found" / "No favorites yet"
  
- Action Button
  - View ID: `2131625120` (empty_action)
  - Text: "Explore DeFi"

---

## Filters and Selectors

### Chain Filter
- **Type:** Dropdown / Chip Group
- **View ID:** `2131625106`
- **Behavior:** Single selection, filters list immediately

### Sort Options
- **Type:** Bottom Sheet Dropdown
- **View ID:** `2131625121` (sort_selector)

| Option | Sort Behavior |
|--------|---------------|
| Name A-Z | Alphabetical ascending |
| Name Z-A | Alphabetical descending |
| Price ↑ | Price low to high |
| Price ↓ | Price high to low |
| 24h Change ↑ | Change low to high |
| 24h Change ↓ | Change high to low |
| Volume ↓ | Volume high to low |
| Market Cap ↓ | Market cap high to low |

### Time Range Filter (for chart)
- **Type:** Horizontal Chip Group
- **View ID:** `2131625116`
- **Options:** 1H, 4H, 1D, 1W, 1M, 1Y, ALL

---

## Component Hierarchy

```
Web3MarketsActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageView (back)
│       ├─ TextView (title: "Markets")
│       └─ ImageButton (search)
├─ TabLayout (market_category_tabs)
│   ├─ Tab: DeFi
│   ├─ Tab: Trending
│   ├─ Tab: Gainers
│   ├─ Tab: Losers
│   └─ Tab: Watchlist
├─ HorizontalScrollView (chain_filter)
│   └─ ChipGroup: chain_chips
├─ SwipeRefreshLayout
│   └─ RecyclerView: token_list
│       └─ [TokenListAdapter]
│           ├─ ViewHolder: TokenViewHolder
│           │   ├─ ImageView (token_icon)
│           │   ├─ TextView (token_name)
│           │   ├─ TextView (token_symbol)
│           │   ├─ TextView (price)
│           │   ├─ TextView (change)
│           │   └─ CustomView (sparkline)
│           └─ ViewHolder: HeaderViewHolder
├─ EmptyStateView (conditional)
└─ BottomSheet: filter_sort_sheet
    ├─ Title: "Sort By"
    ├─ ChipGroup: sort_options
    ├─ Button: reset
    └─ Button: apply
```

---

## Data Models

### DeFi Token Model
```kotlin
data class DefiToken(
    val id: String,
    val name: String,                    // "Uniswap"
    val symbol: String,                  // "UNI"
    val contractAddress: String,         // Token contract address
    val chainId: String,                 // "eth", "bnb", "matic"
    val chainName: String,               // "Ethereum", "BNB Chain"
    val decimals: Int,                   // Token decimals
    val price: Double,                   // Current price USD
    val priceChange24h: Double,         // 24h change in USD
    val priceChangePercent24h: Double,   // 24h change %
    val volume24h: Double,               // 24h volume
    val marketCap: Double,               // Market cap
    val high24h: Double,                 // 24h high
    val low24h: Double,                  // 24h low
    val totalSupply: Double,
    val circulatingSupply: Double,
    val logoUrl: String,
    val isFavorite: Boolean,
    val sparklineData: List<Double>,     // 7-day price points
    val lastUpdate: Long
)
```

### Market Filter State
```kotlin
data class MarketFilterState(
    val searchQuery: String = "",
    val category: MarketCategory = MarketCategory.DEFI,
    val chainFilter: String? = null,    // null = all chains
    val sortBy: SortOption = SortOption.VOLUME_DESC
)

enum class SortOption {
    NAME_ASC, NAME_DESC,
    PRICE_ASC, PRICE_DESC,
    CHANGE_ASC, CHANGE_DESC,
    VOLUME_ASC, VOLUME_DESC,
    MARKET_CAP_ASC, MARKET_CAP_DESC
}
```

---

## API Endpoints

### Token Listings
```
GET /sapi/v1/defi/tokens
Parameters: { "chain": "eth", "sortBy": "volume" }
Response: DeFi token listings

GET /sapi/v1/defi/token/{address}
Parameters: { "address": "0x...", "chain": "eth" }
Response: Token details and metadata
```

### Market Data
```
GET /sapi/v1/defi/ticker/24hr
Parameters: { "symbol": "UNI" }
Response: 24hr market data

GET /sapi/v1/defi/ticker/price
Parameters: { "symbols": ["UNI", "AAVE", "COMP"] }
Response: Current prices for multiple tokens
```

### Price History
```
GET /sapi/v1/defi/klines
Parameters: { "symbol": "UNI", "interval": "1h", "limit": 168 }
Response: Historical OHLCV data

GET /sapi/v1/defi/sparkline
Parameters: { "symbol": "UNI", "range": "7d" }
Response: Sparkline data points
```

### User Data
```
GET /sapi/v1/user/watchlist
Parameters: { "type": "defi" }
Response: User's favorite tokens

POST /sapi/v1/user/watchlist/add
Parameters: { "symbol": "UNI" }
Response: Added to watchlist

DELETE /sapi/v1/user/watchlist/remove
Parameters: { "symbol": "UNI" }
Response: Removed from watchlist
```

---

## WebSocket Streams

### Real-Time Price Streams
| Stream | Purpose |
|--------|---------|
| `<symbol>@ticker` | Single token 24hr ticker |
| `<symbol>@trade` | Individual trades |
| `<symbol>@kline_1m` | 1-minute candlestick |
| `!defiTicker@arr` | All DeFi token tickers |

### User Streams
| Stream | Purpose |
|--------|---------|
| `<listenKey>@watchlist` | Watchlist updates |

---

## Screen Variants

### Variant 1: DeFi Tab
- All DeFi protocol tokens
- Full feature set
- Nested chain filter

### Variant 2: Trending Tab
- Tokens sorted by popularity/trending score
- Special "Hot" badge on trending items

### Variant 3: Gainers Tab
- Sorted by 24h change descending
- Green indicators prominent

### Variant 4: Losers Tab
- Sorted by 24h change ascending
- Red indicators prominent

### Variant 5: Watchlist Tab
- User's saved tokens only
- Empty state if no favorites

### Variant 6: Search Active
- Full-screen search overlay
- Results filter current list
- Keyboard auto-focus

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 home
- [09-Web3-Wallet-Trade](09-web3-wallet-trade.md) - Swap screen
- [17-Web3-Wallet-Token-Details](17-web3-wallet-token-details.md) - Token details
- [19-Web3-Wallet-Swap](19-web3-wallet-swap.md) - Swap details
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### List Performance
- Use DiffUtil for efficient updates
- ViewHolder pattern with view binding
- Image caching for token logos
- WebSocket for real-time price updates

### Pagination
- Load more on scroll (20 items per page)
- Infinite scroll with loading indicator

### Search Optimization
- Debounce search input (300ms)
- Local filtering after initial fetch

### Chart Integration
- TradingView widget for main chart
- Custom sparkline for list items
- WebView-based rendering

### Accessibility
- Minimum touch target: 48x48dp
- Content descriptions for icons
- Color-blind friendly indicators

---

_Last Updated: 2026-03-12_
