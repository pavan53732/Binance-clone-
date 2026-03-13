# 04-Exchange-Markets

## Overview

This document provides detailed specifications for the Markets screen - the central hub for browsing all available trading pairs on the Binance exchange. The screen provides comprehensive market data including prices, volumes, price changes, and easy navigation to the trading interface.

---

## Page Route

```
/markets
```

**Deep Link Pattern:**
- `binance://markets`
- `binance://markets/spot`
- `binance://markets/futures`

---

## Workflow Context

```
Exchange Home → Markets Screen
                  ↓
    ┌─────────────┼─────────────┐
    ↓             ↓             ↓
Favorites     Spot Tab     Futures Tab
    ↓             ↓
Select Pair → Trade Screen
```

**User Flow:**
1. User navigates to Markets from bottom nav or home
2. Browses market categories via tabs (Favorites, Spot, Futures, ETF)
3. Optionally searches for specific pairs
4. Applies filters (price, volume, change)
5. Taps a trading pair → navigates to Trade screen

---

## Screen Purpose

The Markets screen enables users to:
- **Browse Trading Pairs**: View all available Spot, Futures, and ETF pairs
- **Search**: Find specific coins or pairs quickly
- **Filter & Sort**: Sort by price, volume, change, name
- **Manage Favorites**: Add/remove pairs to personal watchlist
- **View Market Details**: See prices, 24h change, volume for each pair
- **Quick Trade**: Tap to open Trade screen with selected pair

---

## Screen Container Architecture

### Parent Container: MarketsActivity
- **Package:** `com.binance.mq`
- **Layout:** `activity_markets.xml`
- **View ID:** `2131624100`

### Child Fragments:
| Fragment | Purpose |
|----------|---------|
| FavoritesFragment | User's saved pairs |
| SpotMarketsFragment | All spot trading pairs |
| FuturesMarketsFragment | USDT-M and COIN-M futures |
| ETFFragment | Tokenized stocks |

---

## Tabs and Subviews

### Tab Layer 1: Market Categories (Top)

**Layout Reference:** `layout_markets_category_tabs.xml`

```
┌────────────────────────────────────────────────────────────┐
│ [Search Icon]  [Search Field                    ]  [Filter]│
├────────────────────────────────────────────────────────────┤
│ [Favorites] [Spot] [Futures] [ETF] [Zones]                 │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                    [Content Area]                          │
│                                                            │
├────────────────────────────────────────────────────────────┤
│ Pair Tabs (Nested): [USDT] [BTC] [ETH] [BNB] [FDUSD]       │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                  [Pair List RecyclerView]                  │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Tab Group: Market Categories (Layer 1)
- View ID: `2131624101` (market_category_tab_layout)

| Tab | Icon | Purpose |
|-----|------|---------|
| Favorites | Star icon | User's watched pairs |
| Spot | Spot icon | Spot trading pairs |
| Futures | Chart icon | Perpetual contracts |
| ETF | ETF icon | Tokenized stocks |
| Zones | Globe icon | Regional pairs |

### Tab Group: Spot Pair Categories (Layer 2 - Nested)
- Parent Tab: Spot
- View ID: `2131624102` (spot_pair_category_tabs)

| Tab | Pairs Shown |
|-----|-------------|
| All | All spot pairs |
| USDT | Pairs with USDT quote |
| BTC | Pairs with BTC quote |
| ETH | Pairs with ETH quote |
| BNB | Pairs with BNB quote |
| FDUSD | Pairs with FDUSD quote |

---

## Widget Regions

### 1. Search Bar

**Layout Reference:** `layout_markets_search.xml`

**Components:**
- Search Icon Button
  - View ID: `2131624103` (search_icon_button)
  - Icon: Magnifying glass (24dp)
  
- Search Input Field
  - View ID: `2131624104` (search_edit_text)
  - Hint: "Search coin or pair"
  - Input type: Text
  - Max characters: 50
  - Clear button (appears when text entered)
  
- Filter Button
  - View ID: `2131624105` (filter_button)
  - Icon: Funnel/filter icon
  - Opens filter bottom sheet

**Search Behavior:**
- Debounce: 300ms
- Search scope: Symbol name, base asset, quote asset
- Results appear inline in current list

### 2. Filter Bottom Sheet

**Layout Reference:** `layout_markets_filter_sheet.xml`

**Trigger:** Tap filter icon (View ID: `2131624105`)

**Filter Options:**

| Filter | Type | Options |
|--------|------|---------|
| Price Range | Dual slider | Min/Max price |
| Change % | Chip group | Positive, Negative, All |
| Volume | Chip group | High, Medium, Low, All |
| Sort By | Dropdown | Name, Price, Change, Volume |

**Actions:**
- View ID: `2131624106` (apply_filter_button) - "Apply"
- View ID: `2131624107` (reset_filter_button) - "Reset"

### 3. Market Pair List

**Layout Reference:** `layout_markets_list.xml`

**RecyclerView Configuration:**
- View ID: `2131624108` (markets_recycler_view)
- Layout Manager: LinearLayoutManager (vertical)
- ItemAnimator: DefaultAnimator
- Pull-to-refresh: SwipeRefreshLayout (View ID: `2131624109`)

**List Item Structure (item_market_pair.xml):**

```
ConstraintLayout
├─ Favorite Button (left)
│   └─ ImageButton: 2131624110 (favorite_star)
│       ├─ Unfavorited: Outline star (gray)
│       ├─ Favorited: Filled star (yellow)
├─ Coin Info Column (center-left)
│   ├─ Base Asset Name
│   │   └─ TextView: 2131624111 (asset_name)
│   │       Font: Bold, 15sp
│   ├─ Quote Asset + Status
│   │   └─ TextView: 2131624112 (quote_asset)
│   │       Font: Regular, 12sp, Gray
├─ Price Column (center-right)
│   ├─ Current Price
│   │   └─ TextView: 2131624113 (current_price)
│   │       Font: Medium, 15sp
│   └─ 24h Change Badge
│       └─ TextView: 2131624114 (price_change)
│           ├─ Positive: Green bg + green text
│           ├─ Negative: Red bg + red text
│           ├─ Neutral: Gray bg + gray text
│           Format: "+2.50%" or "-1.23%"
└─ Chart/Volume Column (right)
    ├─ Mini Chart (optional)
    │   └─ CustomView: 2131624115 (sparkline_chart)
    └─ 24h Volume
        └─ TextView: 2131624116 (volume_24h)
            Font: Regular, 11sp, Gray
```

### 4. Empty State

**Layout Reference:** `layout_markets_empty.xml`

**Components:**
- Empty Icon
  - View ID: `2131624117` (empty_icon)
  - Icon: Search or star (64dp)
  
- Empty Message
  - View ID: `2131624118` (empty_message)
  - Text: "No results found" / "No favorites yet"
  
- Action Button (optional)
  - View ID: `2131624119` (empty_action_button)
  - Text: "Explore Markets"

### 5. Loading State

**Layout Reference:** `layout_markets_loading.xml`

**Components:**
- Shimmer Effect (skeleton loading)
- View ID: `2131624120` (shimmer_loading)
- 8-10 skeleton rows matching item layout

---

## Filters and Selectors

### Category Selection
- **Type:** TabLayout (scrollable)
- **View ID:** `2131624101`
- **Behavior:** Instant switch, no animation

### Pair Category Filter (Nested)
- **Type:** Horizontal ScrollView with Chips
- **View ID:** `2131624102`
- **Options:** All, USDT, BTC, ETH, BNB, FDUSD, etc.
- **Behavior:** Filter current list, retain scroll position

### Search Filter
- **Type:** EditText with debounce
- **View ID:** `2131624104`
- **Scope:** Symbol, base asset name, quote asset name

### Sort Options
- **Type:** Bottom Sheet Dropdown
- **View ID:** `2131624121` (sort_selector)

| Option | Sort Behavior |
|--------|---------------|
| Name A-Z | Alphabetical ascending |
| Name Z-A | Alphabetical descending |
| Price ↑ | Price low to high |
| Price ↓ | Price high to low |
| Change ↑ | Change low to high |
| Change ↓ | Change high to low |
| Volume ↑ | Volume low to high |
| Volume ↓ | Volume high to low |

---

## Component Hierarchy

```
MarketsActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ SearchView (collapsible)
│       │   ├─ ImageButton: search_icon
│       │   └─ EditText: search_input
│       └─ ImageButton: filter_icon
├─ TabLayout (category_tabs)
│   ├─ Tab: Favorites
│   ├─ Tab: Spot
│   ├─ Tab: Futures
│   ├─ Tab: ETF
│   └─ Tab: Zones
├─ FrameLayout (fragment_container)
│   └─ [Dynamic Fragment Content]
│       ├─ HorizontalScrollView (pair_filters)
│       │   └─ ChipGroup: pair_category_chips
│       ├─ SwipeRefreshLayout
│       │   └─ RecyclerView: market_list
│       │       └─ [MarketListAdapter]
│       │           ├─ ViewHolder: MarketPairViewHolder
│       │           │   ├─ FavoriteButton
│       │           │   ├─ CoinInfoView
│       │           │   ├─ PriceView
│       │           │   └─ VolumeView
│       │           └─ ViewHolder: HeaderViewHolder
│       └─ Include: empty_state (when applicable)
└─ BottomSheet: filter_sheet
    ├─ Title: "Filter"
    ├─ FilterGroup: price_range
    ├─ FilterGroup: change_filter
    ├─ FilterGroup: volume_filter
    ├─ Dropdown: sort_by
    ├─ Button: reset
    └─ Button: apply
```

---

## Data Models

### Market Pair Model
```kotlin
data class MarketPair(
    val symbol: String,                // "BTCUSDT"
    val baseAsset: String,             // "BTC"
    val baseAssetName: String,         // "Bitcoin"
    val quoteAsset: String,            // "USDT"
    val price: Double,                 // Current price
    val priceChange: Double,          // 24h change in price
    val priceChangePercent: Double,    // 24h change %
    val volume24h: Double,             // 24h volume
    val quoteVolume24h: Double,        // 24h quote volume
    val high24h: Double,               // 24h high
    val low24h: Double,                // 24h low
    val openPrice: Double,             // 24h open price
    val isFavorite: Boolean,           // User's favorite
    val lastUpdate: Long               // Timestamp
)
```

### Filter State Model
```kotlin
data class MarketFilterState(
    val searchQuery: String = "",
    val category: MarketCategory = MarketCategory.SPOT,
    val pairCategory: String? = null,  // USDT, BTC, etc.
    val priceRange: ClosedFloatingPointRange<Double>? = null,
    val changeFilter: ChangeFilter = ChangeFilter.ALL,
    val volumeFilter: VolumeFilter = VolumeFilter.ALL,
    val sortBy: SortOption = SortOption.NAME_ASC
)

enum class SortOption {
    NAME_ASC, NAME_DESC,
    PRICE_ASC, PRICE_DESC,
    CHANGE_ASC, CHANGE_DESC,
    VOLUME_ASC, VOLUME_DESC
}
```

---

## API Endpoints

### Exchange Info
```
GET /api/v3/exchangeInfo
Response: All trading pairs, filters, symbols

GET /api/v3/ticker/24hr
Parameters: { "symbol": "BTCUSDT" }
Response: 24hr ticker for specific symbol

GET /api/v3/ticker/24hr
(no params)
Response: 24hr tickers for all symbols
```

### Prices
```
GET /api/v3/ticker/price
Response: Current prices for all symbols

GET /api/v3/depth
Parameters: { "symbol": "BTCUSDT", "limit": 100 }
Response: Order book depth
```

### User Data
```
GET /api/v3/account
Headers: { "X-MBX-APIKEY": key, "Signature": sig }
Response: User account with balances

WebSocket: userDataStream
Event: listenKey expiration, account updates
```

---

## WebSocket Streams

### Market Streams
| Stream | Purpose |
|--------|---------|
| `<symbol>@ticker` | Single symbol 24hr ticker |
| `<symbol>@trade` | Individual trades |
| `<symbol>@depth20@100ms` | Order book (20 levels) |
| `<symbol>@kline_1m` | 1-minute kline/candlestick |
| `!ticker@arr` | All symbols 24hr tickers |
| `!miniTicker@arr` | Mini tickers (all) |
| `!depth@arr` | All order books |

### User Streams
| Stream | Purpose |
|--------|---------|
| `<listenKey>@account` | Account balance updates |
| `<listenKey>@order` | Order updates |
| `<listenKey>@trade` | Trade execution updates |

---

## Screen Variants

### Variant 1: Favorites Tab
- Shows only favorited pairs
- Empty state: "Add favorites to see them here"
- Star icon toggle for add/remove

### Variant 2: Spot Markets Tab
- All spot trading pairs
- Nested tabs: USDT, BTC, ETH, BNB, FDUSD, etc.
- Full feature set

### Variant 3: Futures Markets Tab
- USDT-M Futures contracts
- COIN-M Futures contracts
- Different list item: shows "USDT-M" or "COIN-M" badge

### Variant 4: ETF Tab
- Tokenized stock pairs
- Limited to ETF symbols
- Special badge: "ETF"

### Variant 5: Search Active
- Full-screen search overlay
- Results replace current list
- Keyboard auto-focus
- Clear button appears

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [03-Exchange-Homepage](03-exchange-homepage.md) - Home screen
- [05-Exchange-Trade](05-exchange-trade.md) - Trade screen
- [12-Exchange-Order-Book](12-exchange-order-book.md) - Order book details
- [13-Exchange-Chart-System](13-exchange-chart-system.md) - Chart system
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### List Performance
- Use DiffUtil for efficient updates
- ViewHolder pattern with view binding
- Image caching for coin logos
- WebSocket for real-time updates

### Pagination
- Load more on scroll (20 items per page)
- Infinite scroll with loading indicator

### Search Optimization
- Debounce search input (300ms)
- Local filtering for small result sets
- API call for large result sets

### Accessibility
- Minimum touch target: 48x48dp
- Content descriptions for icons
- Color-blind friendly (use icons + colors)

---

_Last Updated: 2026-03-12_
