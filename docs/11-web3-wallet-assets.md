# 11-Web3-Wallet-Assets

## Overview

This document provides detailed specifications for the Web3 Assets screen - the token and NFT management hub within the Web3 Wallet section. This screen enables users to view their token holdings, browse NFT galleries, track transaction history, and import custom tokens.

---

## Page Route

```
/web3/assets
```

**Deep Link Pattern:**
- `binance://web3/assets`
- `binance://web3/tokens`
- `binance://web3/nfts`
- `app.binance.com/web3/assets`

---

## Workflow Context

```
Web3 Wallet Home → Assets Screen
                         ↓
     ┌──────────────────┼──────────────────┐
     ↓                  ↓                  ↓
 Token Holdings    NFT Gallery       Transaction History
     ↓                  ↓                  ↓
 Token Details    NFT Details       Transaction Details
     ↓                  ↓
 Import Token     Transfer NFT
```

**User Flow:**
1. User navigates to Assets from Web3 tab
2. Selects tab (Tokens/NFTs/History)
3. Views list of assets
4. Taps asset → navigates to details
5. Can import new tokens or manage existing

---

## Screen Container Architecture

### Parent Container: Web3AssetsActivity
- **Package:** `com.mpc.wallet.assets`
- **Layout:** `activity_web3_assets.xml`
- **View ID:** `2131625400`

### Tab Structure: ViewPager2 with TabLayout

| Tab | Fragment | Purpose |
|-----|----------|---------|
| Tokens | TokensFragment | All token holdings |
| NFTs | NFTsFragment | NFT collection gallery |
| History | HistoryFragment | Transaction history |

---

## Tabs and Subviews

### Top Navigation Bar
- **Back Button** (left)
- **Title** (center) - "Assets"
- **Search** (right) - Search tokens/NFTs
- **Import** (right) - Import custom token

### Tab Bar (Layer 1)

**Layout Reference:** `layout_assets_tabs.xml`

```
┌─────────────────────────────────────────┐
│ [Back]  Assets               [Search]   │
├─────────────────────────────────────────┤
│ [Tokens] [NFTs] [History]               │
├─────────────────────────────────────────┤
│ Chain Filter Bar                         │
│ [All ▼] [ETH] [BNB] [MATIC] [ARB]       │
├─────────────────────────────────────────┤
│                                            │
│              [Content Area]                │
│            (ViewPager2)                    │
│                                            │
└────────────────────────────────────────────┘
```

### Tab Properties
- View ID: `2131625401` (assets_tab_layout)
- Mode: Fixed
- Indicator: Primary color

---

## Tab 1: Tokens (Holdings)

### Purpose
Displays all token holdings across supported blockchain networks with balances and USD values.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Header: Total Balance                    │
│  $12,345.67 (+1.23% today)              │
├─────────────────────────────────────────┤
│ Chain Filter: [All ▼] [ETH] [BNB]...     │
├─────────────────────────────────────────┤
│ Token List (RecyclerView)               │
│  - Token Icon + Name                    │
│  - Balance + USD Value                  │
│  - 24h Change                           │
│  - Action: Send/Receive/Swap            │
└─────────────────────────────────────────┘
```

### Components

#### Total Balance Header
- View ID: `2131625402` (total_balance)
- Font: Bold, 28sp
- Format: "$12,345.67"
- 24h Change: `2131625403`

#### Chain Filter Bar
- View ID: `2131625404` (chain_filter_bar)
- Horizontal scrollable chips
- Options: All, ETH, BNB, MATIC, ARB, OP, AVAX, etc.

#### Token List
- View ID: `2131625405` (token_list)
- Layout: LinearLayoutManager (vertical)
- Pull-to-refresh: SwipeRefreshLayout

**Token Item (item_token_holding.xml):**
```
ConstraintLayout
├─ Token Icon (left)
│   └─ ImageView: 2131625406
│       Size: 40x40dp, rounded
├─ Token Info Column
│   ├─ Token Name
│   │   └─ TextView: 2131625407
│   │       Font: Bold, 15sp
│   ├─ Chain Badge
│   │   └─ TextView: 2131625408
│   │       Background: Chain color
├─ Balance Column (right)
│   ├─ Token Balance
│   │   └─ TextView: 2131625409
│   │       Font: Medium, 15sp
│   │       Format: "1.2345 UNI"
│   ├─ USD Value
│   │   └─ TextView: 2131625410
│   │       Font: Regular, 12sp, Gray
│   │       Format: "$12.34"
│   └─ 24h Change
│       └─ TextView: 2131625411
│           ├─ Green (+1.2%)
│           └─ Red (-0.5%)
└─ Quick Action Icons (far right)
    ├─ Send: 2131625412
    ├─ Receive: 2131625413
    └─ Swap: 2131625414
```

---

## Tab 2: NFTs (Gallery)

### Purpose
Displays user's NFT collection with grid gallery view and collection organization.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Collection Filter Tabs                   │
│ [All] [Collections ▼] [Display ▼]      │
├─────────────────────────────────────────┤
│ NFT Grid (RecyclerView)                 │
│  3 columns, square items                │
│  - NFT Image                            │
│  - Collection Name                      │
│  - Name (hover)                          │
└─────────────────────────────────────────┘
```

### Components

#### Collection Filter
- View ID: `2131625415` (collection_filter)
- Tabs: All, By Collection, By Chain

#### Display Options
- View ID: `2131625416` (display_options)
- Grid: 2, 3, or 4 columns
- List view option

#### NFT Grid
- View ID: `2131625417` (nft_grid)
- Layout: GridLayoutManager (3 columns)
- Item size: Square, fill width

**NFT Item (item_nft.xml):**
```
CardView (8dp corner)
├─ NFT Image
│   └─ ImageView: 2131625418
│       Aspect ratio: 1:1
│       Scale: CenterCrop
├─ Overlay (on hover/tap)
│   ├─ Collection Name
│   │   └─ TextView: 2131625419
│   │       Font: Regular, 10sp
│   └─ NFT Name
│       └─ TextView: 2131625420
│           Font: Medium, 12sp
└─ Badge (if applicable)
    └─ TextView: 2131625421
        ├─ "New"
        └─ "Listed"
```

### NFT Detail View (Full Screen)
- Full-size image viewer
- NFT metadata (name, description, attributes)
- Collection info
- Owner/creator addresses
- Transfer button
- Sell/List button (if owner)

---

## Tab 3: History (Transactions)

### Purpose
Displays complete transaction history across all chains with filtering and search.

### Layout Structure

```
┌─────────────────────────────────────────┐
│ Filter Bar                              │
│ [All ▼] [Send] [Receive] [Swap] [More] │
├─────────────────────────────────────────┤
│ Search: "Search by address or tx hash" │
├─────────────────────────────────────────┤
│ Date Group Headers                      │
│  Today, Yesterday, This Week, etc.     │
├─────────────────────────────────────────┤
│ Transaction List (RecyclerView)         │
│  - Type Icon                           │
│  - Details                             │
│  - Amount + Status                     │
│  - Timestamp                           │
└─────────────────────────────────────────┘
```

### Components

#### Filter Bar
- View ID: `2131625422` (history_filter)
- Options: All, Send, Receive, Swap, Approve, Contract, NFT

#### Search
- View ID: `2131625423` (history_search)
- Search by: Address, tx hash, token name

#### Transaction List
- View ID: `2131625424` (transaction_list)
- Layout: LinearLayoutManager (vertical)
- Grouped by date

**Transaction Item (item_transaction_history.xml):**
```
LinearLayout (horizontal)
├─ Transaction Type Icon (left)
│   └─ ImageView: 2131625425
│       ├─ Send: Up arrow (red)
│       ├─ Receive: Down arrow (green)
│       ├─ Swap: Swap icon (blue)
│       ├─ Approve: Check icon (gray)
│       ├─ Contract: Code icon (purple)
│       └─ NFT: Image icon (orange)
├─ Transaction Details (center)
│   ├─ Type + Token
│   │   └─ TextView: 2131625426
│   │       Font: Medium, 14sp
│   │       Format: "Sent UNI"
│   ├─ Address/Hash (truncated)
│   │   └─ TextView: 2131625427
│   │       Font: Regular, 12sp, Gray
│   │       Format: "0x1234...5678"
│   └─ Timestamp
│       └─ TextView: 2131625428
│           Format: "Today 2:30 PM"
├─ Amount Column (right)
│   ├─ Amount
│   │   └─ TextView: 2131625429
│   │       Font: Medium, 14sp
│   │       Format: "-1.234 UNI"
│   └─ Status
│       └─ View: 2131625430
│           ├─ Pending: Yellow dot
│           ├─ Confirmed: Green check
│           └─ Failed: Red X
```

---

## Import Token Flow

### Purpose
Allows users to add custom tokens by contract address.

### Flow Steps

#### Step 1: Open Import Dialog
- Tap "Import Token" button
- Bottom sheet opens

#### Step 2: Enter Contract Address
- View ID: `2131625431` (contract_address_input)
- Paste or enter token address
- Validation: Checksum format

#### Step 3: Fetch Token Info
- API call to get token metadata
- Shows: Name, Symbol, Decimals, Balance
- Error if invalid address

#### Step 4: Confirm Import
- View ID: `2131625432` (import_button)
- "Add Token" confirmation
- Token added to list

### Import Bottom Sheet Layout
```
┌─────────────────────────────────────────┐
│ Title: Import Token                     │
├─────────────────────────────────────────┤
│ Network Selector                         │
│ [Ethereum ▼]                             │
├─────────────────────────────────────────┤
│ Contract Address Input                   │
│ [0x...] [Paste] [Scan QR]               │
├─────────────────────────────────────────┤
│ Token Preview (after fetch)              │
│  - Icon, Name, Symbol                   │
│  - Your Balance: 0                      │
├─────────────────────────────────────────┤
│ Button: Add Token                       │
└─────────────────────────────────────────┘
```

---

## Component Hierarchy

```
Web3AssetsActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title: "Assets")
│       ├─ ImageButton (search)
│       └─ ImageButton (import)
├─ TabLayout (assets_tabs)
│   ├─ Tab: Tokens
│   ├─ Tab: NFTs
│   └─ Tab: History
├─ HorizontalScrollView (chain_filter)
│   └─ ChipGroup: chain_chips
├─ ViewPager2 (content_pager)
│   ├─ Fragment: TokensFragment
│   │   ├─ TextView (total_balance)
│   │   ├─ SwipeRefreshLayout
│   │   │   └─ RecyclerView (token_list)
│   │   └─ EmptyStateView
│   ├─ Fragment: NFTsFragment
│   │   ├─ TabLayout (collection_tabs)
│   │   ├─ RecyclerView (nft_grid)
│   │   └─ EmptyStateView
│   └─ Fragment: HistoryFragment
│       ├─ ChipGroup (type_filters)
│       ├─ EditText (search)
│       └─ RecyclerView (transaction_list)
└─ BottomSheet: import_token_sheet
    ├─ TextView (network_selector)
    ├─ EditText (contract_address)
    ├─ Button (paste)
    ├─ Button (scan)
    ├─ TokenPreviewCard
    └─ Button (import)
```

---

## Data Models

### Token Holding Model
```kotlin
data class TokenHolding(
    val contractAddress: String,
    val name: String,                    // "Uniswap"
    val symbol: String,                   // "UNI"
    val decimals: Int,                   // 18
    val chainId: String,                 // "eth"
    val chainName: String,               // "Ethereum"
    val balance: Double,                 // Raw balance
    val balanceFormatted: String,        // "1.2345"
    val priceUSD: Double,                // Current price
    val valueUSD: Double,                // balance * price
    val priceChange24h: Double,         // 24h %
    val logoUrl: String,
    val isNativeToken: Boolean           // ETH, BNB, etc.
)
```

### NFT Model
```kotlin
data class NFTAsset(
    val id: String,                      // Token ID
    val contractAddress: String,
    val collectionId: String,
    val name: String,
    val description: String?,
    val imageUrl: String,
    val animationUrl: String?,
    val attributes: List<NFTAttribute>,
    val ownerAddress: String,
    val creatorAddress: String?,
    val chainId: String,
    val isListed: Boolean,
    val listingPrice: Double?,
    val lastSalePrice: Double?
)

data class NFTAttribute(
    val traitType: String,              // "Background"
    val value: String,                   // "Blue"
    val rarity: Double?                  // Percentage
)

data class NFTCollection(
    val id: String,
    val name: String,
    val symbol: String,
    val imageUrl: String,
    val floorPrice: Double?,
    val totalSupply: Int,
    val nftCount: Int
)
```

### Transaction Model
```kotlin
data class Web3Transaction(
    val id: String,
    val txHash: String,
    val type: TransactionType,          // SEND, RECEIVE, SWAP, APPROVE, CONTRACT, NFT_TRANSFER
    val status: TransactionStatus,      // PENDING, CONFIRMED, FAILED
    val timestamp: Long,
    val blockNumber: Long,
    val from: String,
    val to: String,
    val tokenSymbol: String?,
    val tokenAddress: String?,
    val amount: Double?,
    val amountUSD: Double?,
    val gasUsed: Long?,
    val gasPrice: Long?,
    val gasFeeUSD: Double?,
    val chainId: String,
    val nftId: String?,                 // For NFT transactions
    val metadata: Map<String, Any>?     // Additional data
)
```

---

## API Endpoints

### Token Balances
```
GET /sapi/v1/eth/balance
Parameters: { "address": "0x..." }
Response: All token balances

GET /sapi/v1/eth/token/balance
Parameters: { "address": "0x...", "contract": "0x..." }
Response: Specific token balance
```

### NFT Data
```
GET /sapi/v1/nft/assets
Parameters: { "address": "0x...", "chain": "eth" }
Response: User's NFT holdings

GET /sapi/v1/nft/collections
Parameters: { "address": "0x..." }
Response: NFT collections

GET /sapi/v1/nft/detail
Parameters: { "contract": "0x...", "tokenId": "..." }
Response: NFT metadata
```

### Transaction History
```
GET /sapi/v1/eth/transactions
Parameters: { "address": "0x...", "type": "all", "limit": 50 }
Response: Transaction history

GET /sapi/v1/nft/transactions
Parameters: { "contract": "0x...", "tokenId": "..." }
Response: NFT transaction history
```

### Token Import
```
GET /sapi/v1/eth/token/info
Parameters: { "address": "0x...", "chain": "eth" }
Response: Token metadata

POST /sapi/v1/eth/token/custom
Body: { "address": "0x...", "chain": "eth" }
Response: Add custom token
```

---

## WebSocket Streams

### Real-Time Updates
| Stream | Purpose |
|--------|---------|
| `<address>@balance` | Balance changes |
| `<address>@token` | Token balance updates |
| `<address>@nft` | NFT ownership changes |
| `<address>@tx` | Transaction confirmations |

---

## Filters and Selectors

### Chain Filter
- **Type:** Horizontal Chip Group
- **View ID:** `2131625404`
- **Behavior:** Single selection, filters list

### Token Type Filter
- **Type:** Dropdown
- **Options:** All, Tokens, NFTs, Collectibles

### Transaction Type Filter
- **Type:** Chip Group
- **Options:** All, Send, Receive, Swap, Approve, Contract, NFT

### Transaction Status Filter
- **Type:** Dropdown
- **Options:** All, Pending, Confirmed, Failed

---

## Screen Variants

### Tokens Tab
- **All Tokens**: Full portfolio view
- **Chain Filtered**: Single chain view
- **Empty State**: "No tokens found"

### NFTs Tab
- **Gallery View**: Grid of NFTs
- **Collection View**: Grouped by collection
- **Detail View**: Full NFT info
- **Empty State**: "No NFTs found"

### History Tab
- **All Transactions**: Complete history
- **Filtered**: By type/status
- **Search Results**: By address/hash
- **Empty State**: "No transactions"

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 home
- [08-Web3-Wallet-Markets](08-web3-wallet-markets.md) - Markets
- [09-Web3-Wallet-Trade](09-web3-wallet-trade.md) - Swap
- [10-Web3-Wallet-Discover-DApps](10-web3-wallet-discover-dapps.md) - Discover
- [17-Web3-Wallet-Token-Details](17-web3-wallet-token-details.md) - Token details
- [18-Web3-Wallet-NFT-Assets](18-web3-wallet-nft-assets.md) - NFT details
- [20-Web3-Wallet-Transaction-History](20-web3-wallet-transaction-history.md) - Full history
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Token List Performance
- DiffUtil for efficient updates
- Image caching for token logos
- Balance updates via WebSocket

### NFT Grid
- Lazy loading for images
- Placeholder for loading state
- Full-screen detail on tap

### Transaction History
- Pagination (50 items)
- Date grouping headers
- Pull-to-refresh

### Import Token
- Address validation
- API fetch for metadata
- Local storage for custom tokens

### State Management
- ViewModel per tab
- Flow for reactive updates
- Caching for performance

---

_Last Updated: 2026-03-12_
