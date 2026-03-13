# 20-Web3-Wallet-Transaction-History

## Overview

This document provides detailed specifications for the Web3 Transaction History screen within the Web3 Wallet section. This screen displays complete on-chain transaction history with filtering by chain, type, and status, provides Etherscan links, and shows detailed transaction information.

---

## Page Route

```
/web3/history
```

**Deep Link Pattern:**
- `binance://web3/history`
- `binance://web3/transactions`
- `app.binance.com/web3/history`

---

## Workflow Context

```
Web3 Assets → History Tab
                        ↓
     ┌──────────────────┼──────────────────┐
     ↓                  ↓                  ↓
  Filter View      Transaction      Transaction
     ↓              List             Details
     ↓                  ↓                  ↓
  By Chain         Tap Item          Full Info
     ↓                  ↓                  ↓
  By Type          View in            Etherscan
                   Explorer           Link
```

**User Flow:**
1. User navigates to Assets from Web3 tab
2. Selects History tab
3. Views all transactions or applies filters
4. Taps transaction → navigates to Details
5. Can tap to view in block explorer

---

## Screen Container Architecture

### Parent Container: TransactionHistoryActivity
- **Package:** `com.mpc.wallet.history`
- **Layout:** `activity_transaction_history.xml`
- **View ID:** `2131625900`

### Screen Variants:
| Variant | Purpose |
|---------|---------|
| All Transactions | Complete history view |
| Chain Filtered | Single chain view |
| Type Filtered | By transaction type |
| Pending View | Unconfirmed transactions |
| Failed View | Failed transactions |

---

## Tabs and Subviews

### Top Navigation Bar
- **Back Button** (left)
- **Title** (center) - "Transaction History"
- **Search** (right) - Search by hash/address
- **Filter** (right) - Advanced filters

### Main Content

```
┌─────────────────────────────────────────┐
│ Filter Bar                               │
│ [All ▼] [Send] [Receive] [Swap] [More] │
├─────────────────────────────────────────┤
│ Chain Tabs                               │
│ [All] [ETH] [BNB] [MATIC] [ARB] ...    │
├─────────────────────────────────────────┤
│ Search: "Search address or hash"        │
├─────────────────────────────────────────┤
│ Date Group Headers                       │
│  Today                                  │
│  Yesterday                              │
│  This Week                              │
│  This Month                             │
├─────────────────────────────────────────┤
│ Transaction List (RecyclerView)          │
│  - Type Icon + Details                  │
│  - Amount + Status                      │
│  - Timestamp + Gas                      │
└─────────────────────────────────────────┘
```

---

## Widget Regions

### 1. Filter Bar

**Layout Reference:** `layout_tx_filter_bar.xml`

**Components:**
- Type Filter Dropdown
  - View ID: `2131625901` (type_filter)
  - Options: All, Send, Receive, Swap, Approve, Contract, NFT, Bridge
  
- Quick Filter Chips
  - View ID: `2131625902` (quick_filters)
  - Chips: All, Send, Receive, Swap, Approve
  
- More Filters Button
  - View ID: `2131625903` (more_filters)
  - Opens advanced filter bottom sheet

**Advanced Filter Bottom Sheet:**
```
┌─────────────────────────────────────────┐
│ Filters                                 │
├─────────────────────────────────────────┤
│ Transaction Type                         │
│ [x] Send  [x] Receive  [x] Swap       │
│ [x] Approve  [x] Contract  [x] NFT    │
├─────────────────────────────────────────┤
│ Status                                  │
│ [x] Pending  [x] Confirmed  [x] Failed│
├─────────────────────────────────────────┤
│ Date Range                              │
│ From: [Date Picker]                    │
│ To: [Date Picker]                      │
├─────────────────────────────────────────┤
│ Amount Range                            │
│ Min: [Input]  Max: [Input]             │
├─────────────────────────────────────────┤
│ Token                                   │
│ [Select Token ▼]                        │
├─────────────────────────────────────────┤
│ [Reset]              [Apply]           │
└─────────────────────────────────────────┘
```

### 2. Chain Filter Tabs

**Layout Reference:** `layout_chain_tabs.xml`

**Components:**
- Chain Tab Layout
  - View ID: `2131625904` (chain_tabs)
  - Horizontal scrolling tabs
  - Options: All, ETH, BNB, MATIC, ARB, OP, AVAX
  
- Chain Icons
  - Each tab shows chain icon + name
  - Selected state: Primary color
  
- Transaction Count Badge
  - View ID: `2131625905` (tx_count_badge)
  - Shows count per chain

### 3. Search Bar

**Layout Reference:** `layout_tx_search.xml`

**Components:**
- Search Input
  - View ID: `2131625906` (search_input)
  - Hint: "Search address or hash"
  - Clear button when has text
  
- Search Options
  - View ID: `2131625907` (search_options)
  - Filter by: Address, Hash, Token

### 4. Date Group Headers

**Layout Reference:** `layout_tx_date_header.xml`

**Components:**
- Date Header
  - View ID: `2131625908` (date_header)
  - Formats: "Today", "Yesterday", "This Week", "MMM DD, YYYY"
  - Sticky header behavior

### 5. Transaction List Item

**Layout Reference:** `item_transaction_history.xml`

**Components:**
- Transaction Type Icon
  - View ID: `2131625909` (tx_type_icon)
  - Icons:
    - Send: Up arrow (red)
    - Receive: Down arrow (green)
    - Swap: Swap icon (blue)
    - Approve: Check icon (gray)
    - Contract: Code icon (purple)
    - NFT: Image icon (orange)
    - Bridge: Bridge icon (cyan)
  - Size: 40x40dp

- Transaction Details Column
  - View ID: `2131625910` (tx_details)
  - Type + Token
    - TextView: `2131625911`
    - Format: "Sent UNI"
  - Address/Hash (truncated)
    - TextView: `2131625912`
    - Format: "0x1234...5678"
    - Tap → Copy to clipboard
  - Timestamp
    - TextView: `2131625913`
    - Format: "Today 2:30 PM" or "Jan 15, 2:30 PM"

- Amount Column (right-aligned)
  - View ID: `2131625914` (amount_column)
  - Amount
    - TextView: `2131625915`
    - Format: "-1.234 UNI" or "+1.234 UNI"
    - Color: Red for sent, Green for received
  - USD Value
    - TextView: `2131625916`
    - Format: "$12.34"
    - Font: Regular, 12sp, Gray

- Status Indicator
  - View ID: `2131625917` (status_indicator)
  - Pending: Yellow dot + "Pending"
  - Confirmed: Green check + "Confirmed"
  - Failed: Red X + "Failed"

- Chain Badge (optional)
  - View ID: `2131625918` (chain_badge)
  - Shows chain icon for multi-chain view

---

## Transaction Detail View

**Layout Reference:** `activity_transaction_detail.xml`

### Header Section
```
┌─────────────────────────────────────────┐
│ Status Banner                           │
│ [●] Transaction Confirmed              │
├─────────────────────────────────────────┤
│ Transaction Type                        │
│ Token Swap                              │
├─────────────────────────────────────────┤
│ Amount                                  │
│ 1.5 UNI → 18.5 USDT                    │
├─────────────────────────────────────────┤
│ Transaction Hash                        │
│ 0x1234...5678  [Copy] [Explorer]       │
└─────────────────────────────────────────┘
```

### Details Section
```
┌─────────────────────────────────────────┤
│ Details                                 │
│                                         │
│ Status: Confirmed                      │
│ Block: 18500000                        │
│ Confirmations: 12                       │
│                                        │
│ From: 0x1234...5678                    │
│ To: 0xabcd...efgh (Contract)          │
│                                        │
│ Token Sent: 1.5 UNI                    │
│ Token Received: 18.5 USDT              │
│                                        │
│ Gas Used: 150,000                      │
│ Gas Price: 30 Gwei                     │
│ Network Fee: 0.0045 ETH               │
│                                        │
│ Timestamp: Jan 15, 2024 2:30 PM UTC   │
│                                        │
│ [View in Explorer]                      │
└─────────────────────────────────────────┘
```

### Components Detail

**Status Banner:**
- View ID: `2131625919` (status_banner)
- Background: Green (#00C853) for success, Yellow for pending, Red for failed

**Transaction Hash:**
- View ID: `2131625920` (tx_hash)
- Truncated with "..." in middle
- Tap: Copy to clipboard
- Button: View in explorer

**Block Information:**
- View ID: `2131625921` (block_info)
- Block number
- Confirmation count

**Addresses:**
- View ID: `2131625922` (addresses)
- From address (truncated, tappable → copy)
- To address (truncated, tappable → copy)
- Contract address if applicable

**Gas Details:**
- View ID: `2131625923` (gas_details)
- Gas limit used
- Gas price in Gwei
- Total fee in native token + USD

---

## Component Hierarchy

```
TransactionHistoryActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title: "Transaction History")
│       ├─ ImageButton (search)
│       └─ ImageButton (filter)
├─ HorizontalScrollView (chain_filter)
│   └─ TabLayout (chain_tabs)
├─ ChipGroup (type_filters)
├─ EditText (search_input)
├─ RecyclerView (transactions_list)
│   └─ TransactionAdapter
│       ├─ DateHeaderViewHolder
│       └─ TransactionViewHolder
└─ EmptyStateView

TransactionDetailActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title: "Transaction")
│       └─ ImageButton (share)
├─ NestedScrollView
│   ├─ Card: status_banner
│   ├─ Card: amount_summary
│   ├─ Card: hash_section
│   ├─ Card: details_section
│   │   ├─ TextView (status)
│   │   ├─ TextView (block)
│   │   ├─ TextView (from)
│   │   ├─ TextView (to)
│   │   ├─ TextView (tokens)
│   │   └─ TextView (gas)
│   └─ Button (view_in_explorer)
└─ BottomSheet: filter_sheet
    ├─ CheckboxGroup (type)
    ├─ CheckboxGroup (status)
    ├─ DatePicker (from)
    ├─ DatePicker (to)
    ├─ Button (reset)
    └─ Button (apply)
```

---

## Data Models

### Transaction Model
```kotlin
data class Web3Transaction(
    val id: String,
    val txHash: String,
    val chainId: String,
    val type: TransactionType,
    val status: TransactionStatus,
    val timestamp: Long,
    val blockNumber: Long,
    val confirmations: Int,
    val from: String,
    val to: String,
    val value: Double?,
    val valueUSD: Double?,
    val tokenSymbol: String?,
    val tokenAddress: String?,
    val tokenDecimals: Int?,
    val tokenSent: TokenTransfer?,
    val tokenReceived: TokenTransfer?,
    val gasLimit: Long?,
    val gasUsed: Long?,
    val gasPrice: Long?,
    val gasFeeNative: Double?,
    val gasFeeUSD: Double?,
    val nonce: Int?,
    val inputData: String?,
    val explorerUrl: String?,
    val isError: Boolean?,
    val errorMessage: String?
)

data class TokenTransfer(
    val tokenAddress: String,
    val tokenSymbol: String,
    val tokenName: String,
    val tokenDecimals: Int,
    val tokenLogo: String?,
    val amount: Double,
    val amountFormatted: String,
    val valueUSD: Double?
)

enum class TransactionType {
    SEND,
    RECEIVE,
    SWAP,
    APPROVE,
    CONTRACT_INTERACTION,
    NFT_TRANSFER,
    NFT_MINT,
    NFT_SALE,
    BRIDGE,
    STAKE,
    UNSTAKE,
    CLAIM,
    UNKNOWN
}

enum class TransactionStatus {
    PENDING,
    CONFIRMED,
    FAILED
}
```

### Filter Model
```kotlin
data class TransactionFilter(
    val types: List<TransactionType>? = null,
    val status: List<TransactionStatus>? = null,
    val chains: List<String>? = null,
    val tokens: List<String>? = null,
    val address: String? = null,
    val dateFrom: Long? = null,
    val dateTo: Long? = null,
    val amountMin: Double? = null,
    val amountMax: Double? = null,
    val searchQuery: String? = null
)
```

---

## API Endpoints

### Transaction History
```
GET /sapi/v1/eth/transactions
Parameters: {
    "address": "0x...",
    "chain": "eth",
    "type": "all",
    "status": "all",
    "limit": 50,
    "offset": 0,
    "startTime": 1700000000000,
    "endTime": 1700100000000
}
Response: {
    "transactions": [...],
    "total": 100,
    "hasMore": true
}
```

### Transaction Detail
```
GET /sapi/v1/eth/transaction/{txHash}
Parameters: { "chain": "eth" }
Response: Web3Transaction object
```

### Pending Transactions
```
GET /sapi/v1/eth/transactions/pending
Parameters: { "address": "0x..." }
Response: Array of pending transactions
```

### Transaction Receipt
```
GET /sapi/v1/eth/receipt/{txHash}
Parameters: { "chain": "eth" }
Response: Transaction receipt with gas usage
```

---

## Filters and Selectors

### Type Filter
- **Type:** Chip Group
- **Options:** All, Send, Receive, Swap, Approve, Contract, NFT, Bridge

### Status Filter
- **Type:** Dropdown
- **Options:** All, Pending, Confirmed, Failed

### Chain Filter
- **Type:** TabLayout (horizontal scroll)
- **Options:** All, ETH, BNB, MATIC, ARB, OP, AVAX

### Date Filter
- **Type:** Date Range Picker
- **Presets:** Today, This Week, This Month, This Year, Custom

### Amount Filter
- **Type:** Min/Max Input Fields
- **Token:** Select specific token

---

## Screen Variants

### Variant 1: Empty State
- "No transactions yet" illustration
- Start transacting prompt
- Quick action buttons

### Variant 2: Loading State
- Skeleton list
- Shimmer animation
- Placeholder data

### Variant 3: Filtered Results
- Shows active filters
- Clear filter option
- Result count

### Variant 4: Pending Transactions
- Yellow accent color
- Pull to refresh
- Auto-update status

### Variant 5: Failed Transactions
- Red accent color
- Error message shown
- Retry option (if applicable)

---

## Etherscan Integration

### Explorer Links
- **Ethereum:** etherscan.io
- **BNB Chain:** bscscan.com
- **Polygon:** polygonscan.com
- **Arbitrum:** arbiscan.io
- **Optimism:** optimism.etherscan.io
- **Avalanche:** snowtrace.io

### Deep Link Format
```
// Transaction
{explorer}/tx/{txHash}

// Address
{explorer}/address/{address}

// Token
{explorer}/token/{tokenAddress}
```

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 home
- [11-Web3-Wallet-Assets](11-web3-wallet-assets.md) - Assets overview
- [17-Web3-Wallet-Token-Details](17-web3-wallet-token-details.md) - Token details
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### List Performance
- Pagination (50 items per page)
- DiffUtil for efficient updates
- Date header sticky behavior
- Pull-to-refresh

### Real-Time Updates
- WebSocket for pending tx updates
- Auto-refresh on new blocks
- Confirmation count updates

### Search
- Search by address (partial match)
- Search by transaction hash
- Search by token name/symbol
- Debounced search input

### Error Handling
- Network error retry
- Failed transaction display
- Rate limiting handling

### Accessibility
- Content descriptions
- Minimum touch targets
- Screen reader support

---

_Last Updated: 2026-03-12_
