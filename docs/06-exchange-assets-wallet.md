# 06-Exchange-Assets-Wallet

## Overview

This document provides detailed specifications for the Assets/Wallet screen - the central hub for managing user funds across all Binance account types. The screen provides comprehensive asset management including viewing balances, depositing, withdrawing, transferring between accounts, and viewing transaction history.

---

## Page Route

```
/assets
/assets/spot
/assets/margin
/assets/futures
/assets/fiat
```

**Deep Link Pattern:**
- `binance://assets`
- `binance://assets/spot`
- `binance://assets/futures`
- `binance://asset/btc` (specific asset detail)

---

## Workflow Context

```
Exchange Home → Assets Screen
                       │
       ┌───────────────┼───────────────┐
       ↓               ↓               ↓
   Spot Assets    Margin Assets    Futures Assets
       │               │               │
       ├─ Deposit     ├─ Transfer In  └─ Transfer In
       ├─ Withdraw    ├─ Transfer Out└─ Transfer Out
       ├─ Transfer    └─ Borrow      └─ Add Margin
       └─ History     └─ Repay       └─ Reduce Margin
                       │
                       ↓
              Asset Detail Screen
                       │
           ┌───────────┼───────────┐
           ↓           ↓           ↓
      Deposit      Withdraw    Transfer
```

**User Flow:**
1. User navigates to Assets from bottom navigation
2. Selects account type (Spot/Margin/Futures/Fiat)
3. Views asset list with balances
4. Taps specific asset → Asset Detail screen
5. Performs action: Deposit/Withdraw/Transfer
6. Confirms transaction → Success feedback

---

## Screen Purpose

The Assets/Wallet screen enables users to:
- **View Balances**: See all assets across different accounts
- **Filter Assets**: Search and filter asset list
- **View Asset Details**: See individual asset breakdown
- **Deposit Crypto**: Get deposit address for various blockchains
- **Withdraw Crypto**: Send crypto to external wallets
- **Transfer Funds**: Move between Spot, Margin, Futures accounts
- **View History**: See all deposit, withdraw, and transfer transactions

---

## Screen Container Architecture

### Parent Container: AssetsActivity
- **Package:** `com.binance.wallet`
- **Layout:** `activity_assets.xml`
- **View ID:** `2131624400`

### Account Type Fragments:
| Fragment | Purpose |
|----------|---------|
| SpotAssetsFragment | Spot account balances |
| MarginAssetsFragment | Margin account with borrowings |
| FuturesAssetsFragment | Futures account with positions |
| FiatAssetsFragment | Fiat gateway accounts |

---

## Tabs and Subviews

### Top Section: Account Selector

**Layout Reference:** `layout_assets_header.xml`

```
┌─────────────────────────────────────────────────────────────────┐
│ [Logo]  Assets                      [Search] [QR] [More]        │
├─────────────────────────────────────────────────────────────────┤
│ [Spot] [Margin] [Futures] [Fiat]                                │
├─────────────────────────────────────────────────────────────────┤
│ Total Assets: $12,345.67  ▼                                      │
└─────────────────────────────────────────────────────────────────┘
```

**Components:**
- Logo
  - View ID: `2131624401` (app_logo)
  
- Search Button
  - View ID: `2131624402` (search_button)
  - Icon: Magnifying glass
  
- QR Button
  - View ID: `2131624403` (qr_button)
  - Icon: QR code (receive crypto)
  
- More Options
  - View ID: `2131624404` (more_button)
  - Menu: Backup, API, Statement

### Account Type Tabs

**Layout Reference:** `layout_assets_account_tabs.xml`

**Components:**
- Tab Layout
  - View ID: `2131624410` (account_tabs)
  
| Tab | Purpose | Icon |
|-----|---------|------|
| Spot | Spot account | Wallet icon |
| Margin | Margin trading | Arrow icon |
| Futures | Futures trading | Chart icon |
| Fiat | Fiat gateway | Bank icon |

**Tab Badge:** Shows asset count (e.g., "42")

### Total Assets Display

**Layout Reference:** `layout_assets_total.xml`

**Components:**
- Total Value Label
  - View ID: `2131624420` (total_label)
  - Text: "Total Assets"
  
- Total Value Amount
  - View ID: `2131624421` (total_value)
  - Format: "$12,345.67"
  - Large, bold typography
  
- Fiat Selector
  - View ID: `2131624422` (fiat_selector)
  - Dropdown to change fiat currency

### Quick Actions Bar

**Layout Reference:** `layout_assets_quick_actions.xml`

**Components:**
- Action Buttons (Horizontal scroll)
  - View ID: `2131624430` (actions_container)

| Action | Icon | View ID | Purpose |
|--------|------|---------|---------|
| Deposit | Down arrow | `2131624431` | Get deposit address |
| Withdraw | Up arrow | `2131624432` | Send crypto |
| Transfer | Left-right | `2131624433` | Internal transfer |
| Buy Crypto | Plus | `2131624434` | Buy with fiat |

---

## Main Content: Asset List

**Layout Reference:** `layout_assets_list.xml`

### Search/Filter Bar

**Components:**
- Search Input
  - View ID: `2131624440` (search_input)
  - Hint: "Search assets"
  - Debounce: 300ms
  
- Filter Dropdown
  - View ID: `2131624441` (filter_dropdown)
  - Options: All, USDT, BTC, Stablecoins, Favorites

### Asset List RecyclerView

**Configuration:**
- View ID: `2131624450` (assets_recycler_view)
- Layout: LinearLayoutManager (vertical)
- Pull-to-refresh: SwipeRefreshLayout

### Asset List Item (item_asset.xml)

```
ConstraintLayout
├─ Coin Icon (left)
│   └─ ImageView: 2131624451 (coin_icon)
│       Size: 40x40dp
│       Shape: Circle
├─ Coin Info Column
│   ├─ Coin Symbol
│   │   └─ TextView: 2131624452 (asset_symbol)
│   │       Font: Bold, 15sp
│   ├─ Full Name
│   │   └─ TextView: 2131624453 (asset_name)
│   │       Font: Regular, 12sp, Gray
│   └─ Available Badge (if applicable)
│       └─ TextView: 2131624454 (locked_badge)
│           Text: "Locked" / "Frozen"
├─ Balance Column (right)
│   ├─ Total Balance
│   │   └─ TextView: 2131624455 (total_balance)
│   │       Font: Medium, 15sp
│   └─ USD Value
│       └─ TextView: 2131624456 (usd_value)
│           Font: Regular, 12sp, Gray
└─ Arrow (far right)
    └─ ImageView: 2131624457 (chevron)
```

### Asset Item States
- **Default:** White background
- **Pressed:** Light gray (#F5F5F5)
- **Zero Balance:** Muted text colors
- **Favorited:** Star icon filled

### Section Headers (item_asset_section.xml)

```
LinearLayout
├─ Section Title
│   └─ TextView: 2131624460 (section_title)
│       Font: Bold, 13sp
│       Text: "Favorites" / "All Assets"
└─ Section Count
    └─ TextView: 2131624461 (section_count)
```

---

## Asset Detail Screen

**Route:** `/asset/:symbol`

**Layout Reference:** `activity_asset_detail.xml`

**Trigger:** Tap asset row in list

### Header Section

```
┌─────────────────────────────────────────────────────────────────┐
│ [←Back]  BTC                    [Star] [Alert] [More]           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   [Coin Icon 64x64]                                             │
│                                                                 │
│   Bitcoin                                                       │
│   BTC                                                           │
│                                                                 │
│   $45,123.45                    +2.34% (24h)                   │
│                                                                 │
│   ┌──────────┬──────────┬──────────┐                           │
│   │ Available│  Locked  │  Total   │                           │
│   │ 0.5421   │  0.1000  │  0.6421  │                           │
│   └──────────┴──────────┴──────────┘                           │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│ [Deposit][Withdraw][Transfer][Buy]                             │
└─────────────────────────────────────────────────────────────────┘
```

**Components:**
- Back Button
  - View ID: `2131624501` (back_button)
  
- Coin Icon
  - View ID: `2131624502` (coin_icon)
  - Size: 64x64dp
  
- Coin Name
  - View ID: `2131624503` (coin_name)
  
- Coin Symbol
  - View ID: `2131624504` (coin_symbol)
  
- Current Price
  - View ID: `2131624505` (current_price)
  
- 24h Change
  - View ID: `2131624506` (price_change_24h)

### Balance Breakdown

**Components:**
- Available Balance
  - View ID: `2131624510` (available_balance)
  - Can be used for trading
  
- Locked Balance
  - View ID: `2131624511` (locked_balance)
  - In orders, staking, etc.
  
- Total Balance
  - View ID: `2131624512` (total_balance)

### Action Buttons

**Components:**
- Deposit Button
  - View ID: `2131624520` (deposit_button)
  - Text: "Deposit"
  - Color: Blue (#3C78D8)
  
- Withdraw Button
  - View ID: `2131624521` (withdraw_button)
  - Text: "Withdraw"
  - Color: Orange (#F0B90B)
  
- Transfer Button
  - View ID: `2131624522` (transfer_button)
  - Text: "Transfer"
  - Color: Purple (#8E44AD)
  
- Buy Button
  - View ID: `2131624523` (buy_button)
  - Text: "Buy"
  - Color: Green (#0ECB81)

---

## Deposit Flow

### Network Selection Sheet

**Layout Reference:** `layout_deposit_network_sheet.xml`

**Trigger:** Tap "Deposit" button

**Components:**
- Title
  - View ID: `2131624530` (sheet_title)
  - Text: "Select Network"
  
- Network List (RecyclerView)
  - View ID: `2131624531` (network_list)
  
- Network Item (item_network.xml):
```
LinearLayout (horizontal)
├─ Network Icon
│   └─ ImageView: 2131624532 (network_icon)
├─ Network Name
│   └─ TextView: 2131624533 (network_name)
├─ Network Full Name
│   └─ TextView: 2131624534 (network_full_name)
├─ Tag Required Badge
│   └─ TextView: 2131624535 (tag_badge)
└─ Selected Indicator
    └─ RadioButton: 2131624536 (network_radio)
```

### Deposit Address Screen

**Layout Reference:** `activity_deposit.xml`

**Components:**
- Network Display
  - View ID: `2131624540` (network_display)
  - Format: "Bitcoin (BTC) - BTC"
  
- QR Code
  - View ID: `2131624541` (qr_code)
  - Size: 200x200dp
  - Contains deposit address
  
- Address Field
  - View ID: `2131624542` (deposit_address)
  - Monospace font
  - Tap to copy
  
- Copy Button
  - View ID: `2131624543` (copy_button)
  - Icon: Copy
  - Feedback: "Copied!"
  
- Share Button
  - View ID: `2131624544` (share_button)
  - Icon: Share
  
- Memo/Tag Field (if applicable)
  - View ID: `2131624545` (memo_field)
  - For networks requiring tag (XRP, EOS, etc.)
  
- Deposit Instructions
  - View ID: `2131624546` (instructions)
  - Collapsible text
  
- Minimum Deposit
  - View ID: `2131624547` (min_deposit)
  - Format: "Min: 0.0001 BTC"

---

## Withdraw Flow

### Withdrawal Screen

**Layout Reference:** `activity_withdraw.xml`

**Components:**
- Address Book Button
  - View ID: `2131624550` (address_book_button)
  
- Address Input
  - View ID: `2131624551` (withdraw_address)
  - Validation: Address format check
  
- Network Selector
  - View ID: `2131624552` (network_selector)
  - Same as deposit network sheet
  
- Amount Input
  - View ID: `2131624553` (amount_input)
  
- Available Balance
  - View ID: `2131624554` (available_for_withdraw)
  - Link: "Use Available"
  
- Fee Display
  - View ID: `2131624555` (withdraw_fee)
  - Format: "Fee: 0.0005 BTC"
  
- Network Status
  - View ID: `2131624556` (network_status)
  - "Normal" / "Congested"
  
- Estimated Arrival
  - View ID: `2131624557` (estimated_arrival)
  - Format: "Arrives in ~10 minutes"
  
- Withdraw Button
  - View ID: `2131624558` (submit_withdraw)
  - Disabled until valid

### Confirmation Sheet

**Components:**
- Summary
  - View ID: `2131624560` (confirm_summary)
  
- Address
  - View ID: `2131624561` (confirm_address)
  - Truncated with "..." for security
  
- Amount + Fee
  - View ID: `2131624562` (confirm_amount)
  
- 2FA Input
  - View ID: `2131624563` (2fa_input)
  - 6-digit code
  
- Confirm Button
  - View ID: `2131624564` (confirm_button)

---

## Transfer Flow

### Transfer Screen

**Layout Reference:** `activity_transfer.xml`

**Components:**
- From Account Selector
  - View ID: `2131624570` (from_account)
  - Dropdown: Spot / Margin / Futures
  
- To Account Selector
  - View ID: `2131624571` (to_account)
  - Dropdown: Spot / Margin / Futures (excluding "From")
  
- Asset Selector
  - View ID: `2131624572` (asset_selector)
  - Default: USDT (common)
  
- Amount Input
  - View ID: `2131624573` (transfer_amount)
  
- Available Balance
  - View ID: `2131624574` (available_balance)
  
- Max Button
  - View ID: `2131624575` (max_button)
  
- Transfer Button
  - View ID: `2131624576` (submit_transfer)

**Transfer Directions:**
| From | To | Description |
|------|-----|-------------|
| Spot | Margin | Transfer to margin trading |
| Spot | Futures | Transfer to futures |
| Margin | Spot | Return margin collateral |
| Futures | Spot | Close futures position |
| Margin | Futures | Not allowed |
| Futures | Margin | Not allowed |

---

## Component Hierarchy

```
AssetsActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageView: logo
│       ├─ TextView: title
│       ├─ ImageButton: search
│       ├─ ImageButton: qr
│       └─ ImageButton: more
├─ TabLayout (account_tabs)
│   ├─ Tab: Spot
│   ├─ Tab: Margin
│   ├─ Tab: Futures
│   └─ Tab: Fiat
├─ TotalAssetsCard
│   ├─ TextView: total_label
│   ├─ TextView: total_value
│   └─ Spinner: fiat_selector
├─ QuickActionsBar (horizontal)
│   ├─ Button: deposit
│   ├─ Button: withdraw
│   ├─ Button: transfer
│   └─ Button: buy
├─ SwipeRefreshLayout
│   └─ RecyclerView: assets_list
│       ├─ ViewHolder: AssetViewHolder
│       │   ├─ ImageView: coin_icon
│       │   ├─ TextView: symbol
│       │   ├─ TextView: name
│       │   ├─ TextView: balance
│       │   ├─ TextView: usd_value
│       │   └─ ImageView: chevron
│       └─ ViewHolder: SectionHeader
└─ EmptyStateView
    ├─ ImageView: icon
    └─ TextView: message

AssetDetailActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton: back
│       ├─ TextView: title (coin name)
│       ├─ ImageButton: favorite
│       ├─ ImageButton: alert
│       └─ ImageButton: more
├─ ScrollView (content)
│   ├─ CoinHeaderView
│   │   ├─ ImageView: coin_icon
│   │   ├─ TextView: coin_name
│   │   ├─ TextView: price
│   │   └─ TextView: change_24h
│   ├─ BalanceCard
│   │   ├─ TextView: available
│   │   ├─ TextView: locked
│   │   └─ TextView: total
│   └─ RecentTransactions (preview)
│       └─ RecyclerView: recent_txs
├─ ActionButtonsBar
│   ├─ Button: deposit
│   ├─ Button: withdraw
│   ├─ Button: transfer
│   └─ Button: buy
└─ FullHistoryButton

BottomSheets:
├─ NetworkSelectorSheet
│   └─ RecyclerView: networks
├─ AddressBookSheet
│   └─ RecyclerView: saved_addresses
└─ AssetPickerSheet
    └─ RecyclerView: assets
```

---

## Data Models

### Asset Model
```kotlin
data class Asset(
    val asset: String,              // "BTC"
    val name: String,              // "Bitcoin"
    val free: Double,              // Available balance
    val locked: Double,            // Locked (in orders)
    val frozen: Double,            // Frozen (withdraw disabled)
    val withdrawing: Double,       // Currently withdrawing
    val depositing: Double,         // Currently depositing
    val isLegalCurrency: Boolean,  // Fiat currencies
    val trading: Boolean,           // Can trade
    val networkList: List<Network> // Deposit networks
)
```

### Network Model
```kotlin
data class Network(
    val network: String,           // "BTC"
    val name: String,              // "Bitcoin"
    val coin: String,              // "BTC"
    val withdrawEnable: Boolean,   // Withdrawals enabled
    val depositEnable: Boolean,    // Deposits enabled
    val withdrawMin: Double,       // Min withdrawal
    val withdrawFee: Double,       // Withdrawal fee
    val depositMin: Double,        // Min deposit
    val addressRegex: String,      // Address validation regex
    val memoRequired: Boolean,      // Memo/tag required
    val withdrawTips: String,      // User tips
    val estimatedArrival: Int       // Minutes
)
```

### Transaction Model
```kotlin
data class Transaction(
    val txId: String,
    val asset: String,
    val amount: Double,
    val type: TransactionType,
    val status: TransactionStatus,
    val timestamp: Long,
    val address: String,
    val memo: String? = null,
    val network: String,
    val confirmations: Int,
    val fee: Double? = null
)

enum class TransactionType { DEPOSIT, WITHDRAW, TRANSFER }
enum class TransactionStatus { PENDING, PROCESSING, COMPLETED, FAILED, CANCELLED }
```

---

## API Endpoints

### Account Endpoints
```
GET /api/v3/account
Headers: { "X-MBX-APIKEY": key, "Signature": sig }
Response: Account balances

GET /sapi/v1/capital/config/getall
Response: All assets with network info

GET /sapi/v1/account/快照
Parameters: { "type": "SPOT", "startTime": ts, "endTime": ts }
Response: Account snapshot
```

### Deposit Endpoints
```
GET /sapi/v1/capital/deposit/address
Parameters: { "coin": "BTC", "network": "BTC" }
Response: Deposit address

GET /sapi/v1/capital/deposit/hisrec
Parameters: { "coin": "BTC", "startTime": ts }
Response: Deposit history
```

### Withdraw Endpoints
```
GET /sapi/v1/capital/withdraw/address
Parameters: { "coin": "BTC", "network": "BTC" }
Response: Saved withdrawal addresses

POST /sapi/v1/capital/withdraw/apply
Parameters: { "coin": "BTC", "network": "BTC", "address": "...", "amount": ... }
Response: Withdrawal ID

DELETE /sapi/v1/capital/withdraw/{id}
Response: Cancel withdrawal
```

### Transfer Endpoints
```
POST /sapi/v1/account/transfer
Parameters: { "asset": "USDT", "amount": 100, "type": 1 }
Response: Transfer ID

GET /sapi/v1/transfer/history
Parameters: { "type": 1 }
Response: Transfer history
```

---

## WebSocket Streams

### Account Streams
| Stream | Purpose |
|--------|---------|
| `<listenKey>@account` | Account balance updates |
| `<listenKey>@balanceUpdate` | Balance change notifications |
| `<listenKey>@outboundAccountPosition` | Full account position |

---

## Filters and Selectors

### Account Type Filter
- **Type:** TabLayout
- **View ID:** `2131624410`
- **Options:** Spot, Margin, Futures, Fiat

### Asset Search
- **Type:** EditText with debounce
- **View ID:** `2131624440`
- **Search scope:** Symbol, name

### Asset Category Filter
- **Type:** Dropdown
- **View ID:** `2131624441`
- **Options:** All, USDT, BTC, Favorites, Stablecoins

### Network Selector
- **Type:** Bottom Sheet
- **View ID:** `2131624531`
- **Shows:** All available networks for selected asset

### Fiat Currency Selector
- **Type:** Bottom Sheet
- **View ID:** `2131624422`
- **Options:** USD, EUR, GBP, CNY, etc.

---

## Screen Variants

### Variant 1: Spot Assets
- Shows all Spot balances
- Supports all actions (Deposit/Withdraw/Transfer/Buy)
- Shows locked/unlocked breakdown

### Variant 2: Margin Assets
- Shows margin account balances
- Shows borrowed amounts
- Shows total liability
- "Borrow" button available
- Transfer limited

### Variant 3: Futures Assets
- Shows futures wallet balance
- Shows unrealized PnL
- Shows maintenance margin
- Transfer in/out allowed

### Variant 4: Fiat Assets
- Shows fiat gateway accounts
- "Buy Crypto" prominent
- Fiat deposit/withdrawal methods
- Payment method management

### Variant 5: Asset Detail (All Actions)
- Full balance breakdown
- All action buttons available
- Recent transactions preview
- Full history button

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [03-Exchange-Homepage](03-exchange-homepage.md) - Home screen
- [04-Exchange-Markets](04-exchange-markets.md) - Markets screen
- [05-Exchange-Trade](05-exchange-trade.md) - Trade screen
- [16-Exchange-Trade-History](16-exchange-trade-history.md) - Transaction history
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Real-time Updates
- WebSocket for balance updates
- Polling fallback every 30 seconds
- Manual refresh via SwipeRefreshLayout

### Address Validation
- Per-network regex validation
- Memo detection for supported coins
- QR code scanning support

### Security Features
- 2FA required for withdrawals
- Address whitelisting option
- Daily withdrawal limits
- Email/SMS confirmations

### Performance
- Lazy loading of asset list
- Image caching for coin logos
- Pagination for transaction history

---

_Last Updated: 2026-03-12_
