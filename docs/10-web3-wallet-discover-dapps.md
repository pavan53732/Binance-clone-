# 10-Web3-Wallet-Discover-DApps

## Overview

This document provides detailed specifications for the Discover DApps screen - a complex multi-tab page within the Web3 Wallet section. This screen serves as the gateway to decentralized applications, featuring four primary tabs: Discover, Earn, Booster, and DApps. Users can explore airdrop campaigns, yield opportunities, limited-time events, and browse/launch DApps.

---

## Page Route

```
/web3/discover
```

**Deep Link Pattern:**
- `binance://web3/discover`
- `binance://web3/earn`
- `binance://web3/booster`
- `binance://web3/dapps`
- `app.binance.com/web3/discover`

---

## Workflow Context

```
Web3 Wallet Home → Discover Screen
                         ↓
     ┌──────────────────┼──────────────────┐
     ↓                  ↓                  ↓
  Discover Tab      Earn Tab          Booster Tab     DApps Tab
     ↓                  ↓                  ↓             ↓
 Airdrop Campaigns  Staking Pools    Event Details   Launch DApp
     ↓                  ↓                  ↓             ↓
 Project Details   Earn Product     Join Event      In-App Browser
```

**User Flow:**
1. User navigates to Discover from Web3 tab
2. Selects primary tab (Discover/Earn/Booster/DApps)
3. Browses content based on selected tab
4. Taps item → navigates to detail screen or launches DApp
5. Participates in campaigns or connects to DApps

---

## Screen Container Architecture

### Parent Container: Web3DiscoverActivity
- **Package:** `com.mpc.wallet.discover`
- **Layout:** `activity_web3_discover.xml`
- **View ID:** `2131625300`

### Tab Structure: ViewPager2 with TabLayout

| Tab | Fragment | Purpose |
|-----|----------|---------|
| Discover | DiscoverFragment | Airdrop campaigns, project spotlights |
| Earn | EarnFragment | Yield opportunities, staking |
| Booster | BoosterFragment | Limited-time booster events |
| DApps | DAppsFragment | DApp marketplace and launcher |

---

## Tab Architecture (Layer 3 Navigation)

### Top Tab Bar

**Layout Reference:** `layout_discover_tabs.xml`

```
┌────────────────────────────────────────────────────────────┐
│ [Back]  Discover                         [Search] [More] │
├────────────────────────────────────────────────────────────┤
│ [Discover] [Earn] [Booster] [DApps]                        │
├────────────────────────────────────────────────────────────┤
│                                                            │
│                    [Content Area]                          │
│                    (ViewPager2)                           │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Tab Properties
- View ID: `2131625301` (discover_tab_layout)
- Mode: Fixed (not scrollable)
- Indicator: 2dp height, Primary color
- Animation: Smooth slide transition

---

## Tab 1: Discover (Airdrop Campaigns)

### Purpose
Lists ongoing airdrop campaigns and project spotlights where users can participate to earn token rewards.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Header: "Discover"                       │
├─────────────────────────────────────────┤
│ Banner Carousel (ViewPager2)            │
│  - Featured Campaigns                   │
├─────────────────────────────────────────┤
│ Section: "Active Campaigns"              │
├─────────────────────────────────────────┤
│ Campaign List (RecyclerView)             │
│  - Project Logo                         │
│  - Project Name                         │
│  - Participant Count                    │
│  - Reward Pool                          │
│  - Status Badge                         │
└─────────────────────────────────────────┘
```

### Components

#### Banner Carousel
- View ID: `2131625302` (campaign_banners)
- Height: 160dp
- Page indicator dots below

#### Campaign List
- View ID: `2131625303` (campaign_list)
- Layout: LinearLayoutManager (vertical)

**Campaign Item (item_campaign.xml):**
```
CardView (8dp corner radius)
├─ Project Logo (48x48dp)
│   └─ ImageView: 2131625304
├─ Project Info Column
│   ├─ Project Name
│   │   └─ TextView: 2131625305
│   │       Font: Bold, 15sp
│   ├─ Description (max 2 lines)
│   │   └─ TextView: 2131625306
│   │       Font: Regular, 12sp, Gray
│   └─ Tags Row
│       └─ ChipGroup: 2131625307
├─ Stats Column (right)
│   ├─ Participant Count
│   │   └─ TextView: 2131625308
│   │       Font: Bold, 14sp
│   │       Format: "492,011"
│   └─ Reward Pool
│       └─ TextView: 2131625309
│           Font: Regular, 12sp, Gray
│           Format: "15,000,000 TUR..."
└─ Status Badge
    └─ TextView: 2131625310
        ├─ Active: Green chip
        ├─ Upcoming: Blue chip
        └─ Ended: Gray chip
```

### Sample Campaigns
- **Binance Airdrop Portal** - Various token distributions
- **LayerZero** - ZRO token airdrop
- **Starknet** - STRK token distribution
- **zkSync Era** - ZK token campaign

---

## Tab 2: Earn (Yield Opportunities)

### Purpose
Displays yield opportunities and staking options across DeFi protocols.

### Sub-Tab Architecture

**Layout Reference:** `layout_earn_subtabs.xml`

```
┌─────────────────────────────────────────┐
│ [Tokens] [Loans] [Protocols] [Alpha] [Bonus] │
├─────────────────────────────────────────┤
│ Earn Product List                        │
└─────────────────────────────────────────┘
```

### Sub-Tabs
- View ID: `2131625311` (earn_sub_tabs)

| Sub-Tab | Purpose |
|---------|---------|
| Tokens | Simple token staking |
| Loans | Lending/borrowing pools |
| Protocols | DeFi protocol positions |
| Alpha Pools | High-yield opportunities |
| Bonus | Bonus reward campaigns |

### Earn Product Card

**Earn Product Item (item_earn_product.xml):**
```
CardView
├─ Token Info Row
│   ├─ Token Icon
│   │   └─ ImageView: 2131625312
│   ├─ Token Name + Symbol
│   │   └─ TextView: 2131625313
│   └─ Bonus Badge (optional)
│       └─ TextView: 2131625314
│           Text: "Bonus", Background: Green
├─ APY Display
│   ├─ APY Range
│   │   └─ TextView: 2131625315
│   │       Font: Bold, 18sp
│   │       Format: "1.55% ~ 13.85% APY"
│   └─ Lock Period
│       └─ TextView: 2131625316
│           Format: "Flexible" or "30d Lock"
├─ User Balance (if staked)
│   └─ TextView: 2131625317
│       Format: "Your: 1,234.56 USDT"
└─ Action Button
    └─ Button: 2131625318
        Text: "Stake" / "Manage"
```

### Sample Earn Products
- **BNB Staking** - BNB → BNB (1-90 day lock)
- **USDT Savings** - Flexible, 1.55-13.85% APY
- **ETH 2.0 Staking** - ETH → ETH2
- **Liquid Staking** - stETH, cbETH
- **DeFi Staking** - BNB DeFi pools

---

## Tab 3: Booster (Limited-Time Events)

### Purpose
Features limited-time booster events with countdowns where users can earn boosted rewards.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Header Stats                            │
│  My Total Rewards: $XXX.XX              │
│  Events Joined: X                       │
├─────────────────────────────────────────┤
│ Section: "Live Events"                  │
├─────────────────────────────────────────┤
│ Event List (RecyclerView)               │
│  - Project Logo + Name                  │
│  - Description                         │
│  - Reward Pool                         │
│  - Countdown Timer                     │
│  - Join Button                         │
├─────────────────────────────────────────┤
│ Section: "Ended Events" (Collapsible)   │
└─────────────────────────────────────────┘
```

### Components

#### Header Stats
- View ID: `2131625319` (booster_stats)
- Total Rewards Value: `2131625320`
- Events Joined Count: `2131625321`

#### Event Card (item_booster_event.xml):
```
CardView
├─ Event Header Row
│   ├─ Project Logo
│   │   └─ ImageView: 2131625322
│   ├─ Project Name
│   │   └─ TextView: 2131625323
│   └─ Category Badge
│       └─ TextView: 2131625324
├─ Event Description
│   └─ TextView: 2131625325
│       Max 2 lines, Gray
├─ Reward Pool Row
│   ├─ Icon: Gift/Trophy
│   └─ TextView: 2131625326
│       Format: "Reward Pool: 3,000,000 ST"
├─ Countdown Timer
│   └─ TextView: 2131625327
│       Font: Bold, 16sp
│       Format: "03d : 07h : 02m : 17s"
│       Color: Primary (countdown warning < 1h: Red)
└─ Action Button
    └─ Button: 2131625328
        ├─ Not Joined: "Join Now"
        ├─ Joined: "View"
        └─ Ended: "Ended" (disabled)
```

### Countdown States
- **> 24h**: White/gray text
- **< 24h**: Yellow text
- **< 1h**: Red text + pulse animation
- **0**: "Ended" state

---

## Tab 4: DApps (DApp Marketplace)

### Purpose
Marketplace for discovering and launching decentralized applications with WalletConnect integration.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Search Bar                              │
│ "Search dApps or enter a URL"           │
├─────────────────────────────────────────┤
│ Category Chips (Horizontal Scroll)      │
│  Recent | Favorites | DEX | Staking... │
├─────────────────────────────────────────┤
│ Section: "Trending"                     │
├─────────────────────────────────────────┤
│ DApp Grid (2 columns)                   │
│  - Logo + Name + Description            │
│  - Badge                                │
├─────────────────────────────────────────┤
│ Section: "Categories" (Expandable)      │
└─────────────────────────────────────────┘
```

### Components

#### Search Bar
- View ID: `2131625329` (dapp_search)
- Hint: "Search dApps or enter a URL"
- Shows WebView when URL entered

#### Category Chips
- View ID: `2131625330` (category_chips)
- Horizontal scrollable

| Chip | Icon |
|------|------|
| Recent | Clock |
| Favorites | Star |
| DEX | Swap |
| Staking | Lock |
| Lending | Bank |
| NFT | Image |
| Games | Gamepad |
| Social | Chat |

#### DApp Grid
- View ID: `2131625331` (dapp_grid)
- Layout: GridLayoutManager (2 columns)
- Spacing: 8dp

**DApp Card (item_dapp.xml):**
```
CardView (8dp corner)
├─ DApp Icon
│   └─ ImageView: 2131625332
│       Size: 56x56dp, rounded corners
├─ DApp Name
│   └─ TextView: 2131625333
│       Font: Medium, 14sp, max 1 line
├─ Description
│   └─ TextView: 2131625334
│       Font: Regular, 12sp, Gray
│       Max 2 lines
└─ Badge (optional)
    └─ TextView: 2131625335
        ├─ "New" (Green)
        ├─ "Popular" (Yellow)
        └─ "Verified" (Blue)
```

### Popular DApps
- **PancakeSwap** - DEX, BNB Chain
- **Uniswap** - DEX, Ethereum
- **Aave** - Lending
- **Compound** - Lending
- **OpenSea** - NFT Marketplace
- **Blur** - NFT Marketplace
- **Venus** - Lending, BNB Chain
- **Curve** - Stablecoin DEX

### DApp Launch Flow
1. Tap DApp card
2. Opens in-app WebView (DApp Browser)
3. WalletConnect connection prompt
4. User approves connection
5. DApp interactive within WebView

---

## Filters and Selectors

### Chain Filter (Shared)
- **Type:** Bottom Sheet Selector
- **View ID:** `2131625336` (chain_selector)
- **Options:** All Chains, BNB Chain, Ethereum, Polygon, Arbitrum, etc.

### Category Filter (DApps)
- **Type:** Horizontal Chip Group
- **View ID:** `2131625330`
- **Behavior:** Single selection, filters grid

### Sort Options
- **Type:** Dropdown Menu
- **View ID:** `2131625337` (sort_dropdown)

| Option | Applies To |
|--------|------------|
| Trending | Discover, DApps |
| Newest | All tabs |
| Most Popular | All tabs |
| Highest APY | Earn |
| Ending Soon | Booster |

---

## Component Hierarchy

```
Web3DiscoverActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title)
│       ├─ ImageButton (search)
│       └─ ImageButton (more)
├─ TabLayout (main_tabs)
│   ├─ Tab: Discover
│   ├─ Tab: Earn
│   ├─ Tab: Booster
│   └─ Tab: DApps
├─ ViewPager2 (content_pager)
│   ├─ Fragment: DiscoverFragment
│   │   ├─ ViewPager2 (banners)
│   │   └─ RecyclerView (campaign_list)
│   ├─ Fragment: EarnFragment
│   │   ├─ TabLayout (sub_tabs)
│   │   └─ RecyclerView (earn_products)
│   ├─ Fragment: BoosterFragment
│   │   ├─ LinearLayout (stats_header)
│   │   └─ RecyclerView (event_list)
│   └─ Fragment: DAppsFragment
│       ├─ EditText (search)
│       ├─ HorizontalScrollView (chips)
│       │   └─ ChipGroup
│       └─ RecyclerView (dapp_grid)
└─ BottomSheet: chain_selector
    ├─ Title: "Select Chain"
    ├─ RadioGroup (chain_options)
    └─ Button: apply
```

---

## Data Models

### Campaign Model
```kotlin
data class Campaign(
    val id: String,
    val projectName: String,
    val projectLogo: String,
    val description: String,
    val rewardToken: String,
    val rewardPool: String,
    val participantCount: Int,
    val status: CampaignStatus,        // ACTIVE, UPCOMING, ENDED
    val startTime: Long,
    val endTime: Long,
    val url: String,                  // Project website
    val tasks: List<CampaignTask>
)
```

### Earn Product Model
```kotlin
data class EarnProduct(
    val id: String,
    val name: String,
    val token: TokenInfo,
    val apyMin: Double,
    val apyMax: Double,
    val lockPeriod: Int?,             // Days, null = flexible
    val minDeposit: Double,
    val userBalance: Double?,
    val status: EarnStatus,           // AVAILABLE, PAUSED, ENDED
    val chainId: String
)
```

### Booster Event Model
```kotlin
data class BoosterEvent(
    val id: String,
    val projectName: String,
    val projectLogo: String,
    val description: String,
    val rewardPool: String,
    val rewardToken: String,
    val startTime: Long,
    val endTime: Long,
    val status: EventStatus,          // LIVE, ENDED
    val userJoined: Boolean,
    val userRewards: Double?
)
```

### DApp Model
```kotlin
data class DApp(
    val id: String,
    val name: String,
    val description: String,
    val iconUrl: String,
    val url: String,
    val category: DAppCategory,
    val chainIds: List<String>,
    val isVerified: Boolean,
    val isTrending: Boolean,
    val userFavorite: Boolean
)

enum class DAppCategory {
    DEX, STAKING, LENDING, NFT, GAMING, SOCIAL, TOOLS
}
```

---

## API Endpoints

### Discover/Campaigns
```
GET /sapi/v1/campaigns/active
Parameters: { "type": "airdrop" }
Response: Active campaign list

GET /sapi/v1/campaigns/{id}
Parameters: { "id": "campaign_123" }
Response: Campaign details and tasks
```

### Earn Products
```
GET /sapi/v1/earn/products
Parameters: { "type": "staking", "chain": "bnb" }
Response: Available earn products

GET /sapi/v1/earn/balance
Parameters: { "productId": "..." }
Response: User's staked balance

POST /sapi/v1/earn/stake
Body: { "productId": "...", "amount": "..." }
Response: Stake transaction

POST /sapi/v1/earn/unstake
Body: { "productId": "...", "amount": "..." }
Response: Unstake transaction
```

### Booster Events
```
GET /sapi/v1/booster/events
Parameters: { "status": "live" }
Response: Active booster events

GET /sapi/v1/booster/user
Response: User's booster participation

POST /sapi/v1/booster/join
Body: { "eventId": "..." }
Response: Join event
```

### DApps
```
GET /sapi/v1/dapps
Parameters: { "category": "dex", "chain": "bnb" }
Response: DApp listings

GET /sapi/v1/dapps/trending
Response: Trending DApps

POST /sapi/v1/dapps/favorite
Body: { "dappId": "...", "favorite": true }
Response: Update favorite status
```

---

## Screen Variants

### Discover Tab
- **Active Campaigns**: Live airdrops
- **Upcoming Campaigns**: Future distributions
- **Campaign Details**: Full campaign info + tasks

### Earn Tab
- **Tokens**: Simple staking
- **Loans**: Lending pools with APY
- **Protocols**: DeFi positions
- **Alpha Pools**: Exclusive pools
- **Bonus**: Bonus campaigns

### Booster Tab
- **Live Events**: Active with countdowns
- **Ended Events**: Past results
- **Event Details**: Full info + user rewards

### DApps Tab
- **Search**: Find or enter URL
- **Categories**: Filter by type
- **Trending**: Popular DApps
- **DApp Browser**: In-app WebView

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 home
- [08-Web3-Wallet-Markets](08-web3-wallet-markets.md) - Markets
- [09-Web3-Wallet-Trade](09-web3-wallet-trade.md) - Swap
- [11-Web3-Wallet-Assets](11-web3-wallet-assets.md) - Assets
- [21-Web3-Wallet-Wallet-Connect](21-web3-wallet-wallet-connect.md) - WalletConnect
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### ViewPager2 Integration
- Off-page loading: 2 pages
- Lazy initialization of fragments
- Smooth tab transitions

### Campaign Tracking
- Participant count updates
- Real-time countdown timers
- Status changes reflected

### DApp Browser
- WebView with WalletConnect JS
- Injected Web3 provider
- Transaction signing flow

### Performance
- Image caching for DApp icons
- Lazy loading for lists
- Pagination for campaigns

### Error Handling
- Empty states per tab
- Network error recovery
- Campaign expired handling

---

_Last Updated: 2026-03-12_
