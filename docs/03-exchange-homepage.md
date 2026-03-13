# 03-Exchange-Homepage

## Overview

This document provides detailed specifications for the Exchange Home screen - the main landing page of the Binance cryptocurrency exchange application. The home screen serves as a portfolio dashboard combining balance overview, quick actions, and market watchlist widgets.

---

## Page Route

```
/home
```

**Deep Link Pattern:**
- `binance://home`
- `app.binance.com/en`

---

## Workflow Context

```
App Launch → Authentication (optional) → Exchange Home
                                          ↓
                    ┌─────────────────────┼─────────────────────┐
                    ↓                     ↓                     ↓
              Markets Screen        Trade Screen         Assets Screen
```

**User Flow:**
1. User opens app → lands on Exchange Home (default)
2. Views total portfolio value and balance breakdown
3. Accesses quick action buttons (Buy/Sell/Convert/Deposit/Withdraw)
4. Views market widgets with price tickers
5. Taps market widget → navigates to Markets or Trade screen

---

## Screen Purpose

The Exchange Home screen provides users with:
- **Portfolio Overview**: Total account value in selected fiat currency
- **Balance Summary**: Breakdown of assets across Spot, Margin, Futures, and Earn accounts
- **Quick Actions**: One-tap access to common trading operations
- **Market Widgets**: Trending pairs, watchlist, and price tickers
- **Promotional Content**: Banner carousel for announcements and campaigns

---

## Screen Variants

### Variant 1: Logged Out State
- Shows login/promotional content
- Limited market data display
- Prominent "Sign In" / "Register" CTAs

### Variant 2: Logged In State (Primary)
- Full portfolio display
- Personalized watchlist
- All quick actions available

### Variant 3: KYC Pending State
- Limited trading features
- KYC verification prompts
- Deposit/Withdraw restrictions

---

## Tabs and Subviews

### Top Navigation Bar
- **App Logo** (left) - Binance logo, taps → refresh home data
- **User Avatar** (right) - Profile quick access
- **Notification Bell** - Alerts and updates

### Main Content Sections (Vertical Scroll)

```
┌─────────────────────────────────────────┐
│ Header: Balance Summary                 │
├─────────────────────────────────────────┤
│ Section: Quick Actions (Horizontal)     │
├─────────────────────────────────────────┤
│ Section: Banner Carousel                │
├─────────────────────────────────────────┤
│ Tab Bar: Market Categories              │
├─────────────────────────────────────────┤
│ Widget: Market List (RecyclerView)      │
├─────────────────────────────────────────┤
│ Section: News/Announcements            │
└─────────────────────────────────────────┘
```

---

## Widget Regions

### 1. Balance Summary Card

**Layout Reference:** `fragment_home.xml` (Primary container)

**Components:**
- Total Value Display (large, bold typography)
  - View ID: `2131624067` (total_balance_value)
  - Format: "$12,345.67" (with fiat currency symbol)
  
- 24h Change Indicator
  - View ID: `2131624068` (total_balance_change)
  - Format: "+$123.45 (+1.23%)" (green/red color coded)
  
- Fiat Selector Dropdown
  - View ID: `2131624069` (fiat_currency_selector)
  - Options: USD, EUR, GBP, CNY, etc.

**Account Breakdown Accordion:**
- View ID: `2131624070` (account_breakdown_container)
- Expandable sections:
  - Spot Account (icon + balance)
  - Margin Account (icon + balance + liability)
  - Futures Account (icon + balance + unrealized PnL)
  - Earn (icon + balance + estimated reward)

### 2. Quick Actions Bar

**Layout Reference:** `layout_home_quick_actions.xml`

**Action Buttons (Horizontal ScrollView):**
| Action | Icon | View ID | Navigation |
|--------|------|---------|------------|
| Buy | Green buy arrow | `2131624071` | → Buy Screen |
| Sell | Red sell arrow | `2131624072` | → Sell Screen |
| Convert | Swap arrows | `2131624073` | → Convert Screen |
| Deposit | Down arrow | `2131624074` | → Deposit Flow |
| Withdraw | Up arrow | `2131624075` | → Withdraw Flow |
| Transfer | Left-right arrows | `2131624076` | → Transfer Screen |

**Button Specifications:**
- Shape: Rounded rectangle (12dp corner radius)
- Size: 64x64dp
- Background: Action-specific color (green for buy, red for sell, gray for others)
- Icon: 24x24dp vector drawable

### 3. Banner Carousel

**Layout Reference:** `layout_home_banner.xml`

**Components:**
- ViewPager2 (horizontal swipe)
  - View ID: `2131624077` (banner_viewpager)
  
- Page Indicator (dots)
  - View ID: `2131624078` (banner_indicator)
  - Active dot: Yellow (#F0B90B)
  - Inactive dot: Gray (#848E9C)

**Banner Item Layout:**
- Image: 328x120dp, rounded corners (8dp)
- View ID: `2131624079` (banner_image)
- Overlay text (bottom gradient)
- View ID: `2131624080` (banner_title)

### 4. Market Category Tabs

**Layout Reference:** `layout_market_tabs.xml`

**Tab Layout (TabLayout):**
- View ID: `2131624081` (market_category_tabs)

**Tab Items:**
| Tab | Purpose |
|-----|---------|
| Watchlist | User's saved pairs |
| Hot | Trending pairs |
| USDT | All USDT pairs |
| BTC | BTC quote pairs |
| BNB | BNB quote pairs |
| ETH | ETH quote pairs |
| FIAT | Fiat gateway pairs |

**Tab Properties:**
- Mode: Scrollable
- Indicator: 2dp height, Binance Yellow
- Label: 12sp, Medium weight

### 5. Market Widget List

**Layout Reference:** `layout_market_widget.xml`

**RecyclerView Configuration:**
- View ID: `2131624082` (market_list_recycler)
- Layout: LinearLayoutManager (vertical)
- Item Decoration: 1px divider line
- Pull-to-refresh: SwipeRefreshLayout wrapper

**List Item Structure (item_market_coin.xml):**
```
LinearLayout (horizontal)
├─ Coin Icon (32x32dp)
│   └─ ImageView: 2131624083
├─ Coin Info Column
│   ├─ Coin Name (bold, 14sp)
│   │   └─ TextView: 2131624084
│   └─ Pair Volume (gray, 12sp)
│       └─ TextView: 2131624085
├─ Price Column (right-aligned)
│   ├─ Current Price
│   │   └─ TextView: 2131624086
│   └─ 24h Change %
│       └─ TextView: 2131624087
└─ Mini Chart Sparkline
    └─ CustomView: 2131624088
```

**Item States:**
- Default: White background
- Pressed: Light gray (#F5F5F5)
- Price Up: Green text (#0ECB81)
- Price Down: Red text (#F6465D)

### 6. News Section (Optional)

**Layout Reference:** `layout_home_news.xml`

**Components:**
- Section Header
  - View ID: `2131624089` (news_header)
  - Text: "Latest News" or "Announcements"
  
- News List (RecyclerView)
  - View ID: `2131624090` (news_list)
  
- News Item:
  - Thumbnail (48x48dp)
  - Title (14sp, max 2 lines)
  - Timestamp (12sp, gray)
  - View ID: `2131624091` (news_item)

---

## Filters and Selectors

### Fiat Currency Selector
- **Type:** Bottom Sheet Dialog
- **View ID:** `2131624092` (fiat_selector_sheet)
- **Options:** USD, EUR, GBP, JPY, CNY, KRW, etc.
- **Persistence:** Saved in SharedPreferences

### Market Category Filter
- **Type:** Horizontal Tab Layout
- **View ID:** `2131624081` (market_category_tabs)
- **Behavior:** Single selection, smooth scroll

---

## Component Hierarchy

```
CoordinatorLayout (root)
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageView (logo)
│       └─ LinearLayout (right icons)
│           ├─ ImageView (notifications)
│           └─ ImageView (profile)
├─ NestedScrollView
│   └─ LinearLayout (vertical)
│       ├─ Include: balance_summary_card
│       │   └─ ConstraintLayout
│       │       ├─ TextView (total_value)
│       │       ├─ TextView (change_24h)
│       │       ├─ ImageButton (fiat_selector)
│       │       └─ ExpandableLayout (breakdown)
│       ├─ HorizontalScrollView (quick_actions)
│       │   └─ LinearLayout
│       │       ├─ QuickActionButton (Buy)
│       │       ├─ QuickActionButton (Sell)
│       │       ├─ QuickActionButton (Convert)
│       │       ├─ QuickActionButton (Deposit)
│       │       ├─ QuickActionButton (Withdraw)
│       │       └─ QuickActionButton (Transfer)
│       ├─ ViewPager2 (banners)
│       │   └─ BannerAdapter
│       ├─ TabLayout (market_categories)
│       │   └─ TabItems...
│       ├─ SwipeRefreshLayout
│       │   └─ RecyclerView (market_list)
│       └─ Include: news_section (optional)
└─ BottomNavigationBar (5 tabs)
```

---

## Data Models

### Balance Summary Model
```kotlin
data class BalanceSummary(
    val totalValue: Double,           // Total in fiat
    val totalChange24h: Double,       // 24h change amount
    val totalChangePercent24h: Double, // 24h change %
    val fiatCurrency: String,          // Selected fiat
    val accounts: List<AccountBalance>
)

data class AccountBalance(
    val accountType: AccountType,      // SPOT, MARGIN, FUTURES, EARN
    val availableBalance: Double,
    val lockedBalance: Double,
    val totalBalance: Double,
    val liability: Double? = null,    // For margin
    val unrealizedPnL: Double? = null // For futures
)
```

### Market Item Model
```kotlin
data class MarketItem(
    val symbol: String,                // "BTCUSDT"
    val baseAsset: String,             // "BTC"
    val quoteAsset: String,             // "USDT"
    val price: Double,
    val priceChange24h: Double,
    val priceChangePercent24h: Double,
    val volume24h: Double,
    val isFavorite: Boolean,
    val lastUpdateTime: Long
)
```

---

## API Endpoints

### Balance Fetch
```
GET /api/v3/account
Headers: { "X-MBX-APIKEY": apiKey, "Signature": ... }
Response: Account balance array
```

### Market Data
```
GET /api/v3/ticker/24hr
Parameters: { "symbol": "BTCUSDT" }
Response: 24hr price change data

GET /api/v3/ticker/price
Response: Current prices for all symbols
```

### User Watchlist
```
GET /api/v3/userDataStream
WebSocket stream for watchlist updates
```

---

## Event Subscriptions

### WebSocket Streams
| Stream | Purpose |
|--------|---------|
| `<symbol>@ticker` | 24hr ticker for single pair |
| `!ticker@arr` | All symbols 24hr tickers |
| `!miniTicker@arr` | Mini tickers (all) |

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [04-Exchange-Markets](04-exchange-markets.md) - Markets screen details
- [05-Exchange-Trade](05-exchange-trade.md) - Trade screen details
- [06-Exchange-Assets-Wallet](06-exchange-assets-wallet.md) - Assets screen
- [37-Navigation-System](37-navigation-system.md) - Navigation details
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Performance Considerations
- Market list uses RecyclerView with ViewHolder pattern
- Images loaded via Coil/Glide with caching
- WebSocket for real-time price updates (avoid polling)
- Lazy loading for news section

### State Management
- ViewModel holds UI state
- LiveData for reactive UI updates
- SavedInstanceState for configuration changes

### Accessibility
- Content descriptions on all icons
- Minimum touch target: 48x48dp
- Color contrast ratio: 4.5:1 minimum

---

_Last Updated: 2026-03-12_
