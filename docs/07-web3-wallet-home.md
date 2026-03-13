# 07-Web3-Wallet-Home

## Overview

This document provides detailed specifications for the Web3 Wallet Home screen - the main DeFi dashboard of the Binance application. The Web3 Wallet serves as a unified interface for managing blockchain assets, interacting with decentralized applications (DApps), and accessing DeFi services across multiple chains.

---

## Page Route

```
/web3/home
```

**Deep Link Pattern:**
- `binance://web3/home`
- `binance://web3/wallet`
- `app.binance.com/web3`

---

## Workflow Context

```
App Launch → Authentication → Web3 Wallet Home
                                           ↓
                     ┌─────────────────────┼─────────────────────┐
                     ↓                     ↓                     ↓
               Markets Screen        Trade Screen         Assets Screen
```

**User Flow:**
1. User taps Web3 tab in bottom navigation
2. Web3 Wallet Home loads with connected wallet state
3. Views total portfolio value across all chains
4. Selects blockchain network via chain selector
5. Accesses quick actions (Send, Receive, Swap, DApps)
6. Views DApp shortcuts and recent transactions

---

## Screen Purpose

The Web3 Wallet Home screen provides users with:
- **Wallet Overview**: Total portfolio value across all connected chains
- **Chain Selector**: Switch between supported blockchain networks (BNB Chain, Ethereum, Polygon, etc.)
- **Quick Actions**: One-tap access to Send, Receive, Swap, DApps
- **DApp Shortcuts**: Quick access to popular DeFi applications
- **Recent Activity**: Latest transactions across chains

---

## Screen Variants

### Variant 1: No Wallet Connected
- Shows "Connect Wallet" prompt
- Display QR code option for wallet connection
- "Create Wallet" option for new users
- Limited functionality until wallet connected

### Variant 2: Wallet Connected (Primary)
- Full portfolio display
- All quick actions available
- Transaction history visible
- DApp browser accessible

### Variant 3: Multi-Chain View
- Aggregate view across all chains
- Per-chain breakdown expandable
- Filter by specific chain

---

## Tabs and Subviews

### Top Navigation Bar
- **App Logo** (left) - Web3 Wallet branding
- **Chain Selector** (center) - Dropdown to select blockchain
- **Scan QR** (right) - Scan wallet connect QR
- **More Options** (right) - Settings, security, help

### Main Content Sections (Vertical Scroll)

```
┌─────────────────────────────────────────┐
│ Header: Wallet Address & QR            │
├─────────────────────────────────────────┤
│ Section: Total Balance Display         │
├─────────────────────────────────────────┤
│ Section: 24h Change & Gas Tracker      │
├─────────────────────────────────────────┤
│ Section: Quick Actions (Horizontal)     │
├─────────────────────────────────────────┤
│ Section: DApp Shortcuts Grid            │
├─────────────────────────────────────────┤
│ Section: Recent Transactions List       │
└─────────────────────────────────────────┘
```

---

## Widget Regions

### 1. Wallet Address Card

**Layout Reference:** `fragment_web3_home.xml` (Primary container)

**Components:**
- Wallet Address Display
  - View ID: `2131625001` (wallet_address_text)
  - Format: "0x1234...5678" (truncated)
  - Tap → Copy address to clipboard
  
- QR Code Button
  - View ID: `2131625002` (show_qr_button)
  - Icon: QR code icon (24dp)
  - Tap → Show wallet QR code overlay

- Network Badge
  - View ID: `2131625003` (network_badge)
  - Shows current chain: "BNB Chain", "Ethereum", "Polygon"

### 2. Total Balance Card

**Layout Reference:** `layout_web3_balance_card.xml`

**Components:**
- Total Value Display (large, bold typography)
  - View ID: `2131625004` (total_balance_value)
  - Format: "$12,345.67" (with fiat currency symbol)
  - Font: Bold, 28sp
  
- 24h Change Indicator
  - View ID: `2131625005` (balance_change_24h)
  - Format: "+$123.45 (+1.23%)" (green/red color coded)
  - Font: Medium, 14sp

- Fiat Selector Dropdown
  - View ID: `2131625006` (fiat_currency_selector)
  - Options: USD, EUR, GBP, CNY, etc.

- Gas Tracker Widget
  - View ID: `2131625007` (gas_tracker_container)
  - Shows current gas prices for selected chain
  - Format: "Gas: 5 Gwei"

**Per-Chain Balance Breakdown:**
- View ID: `2131625008` (chain_balance_list)
- Expandable sections:
  - BNB Chain (icon + balance + value)
  - Ethereum (icon + balance + value)
  - Polygon (icon + balance + value)
  - Arbitrum (icon + balance + value)
  - Optimism (icon + balance + value)
  - Avalanche (icon + balance + value)

### 3. Quick Actions Bar

**Layout Reference:** `layout_web3_quick_actions.xml`

**Action Buttons (Horizontal ScrollView):**
| Action | Icon | View ID | Navigation |
|--------|------|---------|------------|
| Send | Up arrow | `2131625009` | → Send Flow |
| Receive | Down arrow | `2131625010` | → Receive Flow (QR) |
| Swap | Swap arrows | `2131625011` | → Swap Screen |
| Buy | Credit card | `2131625012` | → Fiat On-Ramp |
| DApps | Grid icon | `2131625013` | → Discover DApps |

**Button Specifications:**
- Shape: Circle (56dp diameter)
- Background: Chain-specific color or gray
- Icon: 24x24dp vector drawable
- Label below: 10sp, gray

### 4. DApp Shortcuts Grid

**Layout Reference:** `layout_web3_dapp_shortcuts.xml`

**Components:**
- Section Header
  - View ID: `2131625014` (dapp_shortcuts_header)
  - Text: "Popular DApps"
  - Action: "See All" → Navigate to Discover

- Grid Layout (2 columns)
  - View ID: `2131625015` (dapp_shortcuts_grid)
  - Layout Manager: GridLayoutManager (2 columns)
  - Spacing: 8dp

**Shortcut Item (item_dapp_shortcut.xml):**
```
CardView
├─ DApp Icon (48x48dp)
│   └─ ImageView: 2131625016
├─ DApp Name
│   └─ TextView: 2131625017
│       Font: Medium, 12sp
└─ Optional Badge (New/Hot)
    └─ TextView: 2131625018
```

**Popular DApps:**
- PancakeSwap (DEX)
- Uniswap (DEX)
- Aave (Lending)
- Compound (Lending)
- OpenSea (NFT Marketplace)
- Blur (NFT Marketplace)

### 5. Recent Transactions List

**Layout Reference:** `layout_web3_recent_transactions.xml`

**Components:**
- Section Header
  - View ID: `2131625019` (transactions_header)
  - Text: "Recent Activity"
  - Action: "See All" → Transaction History

- Transaction List (RecyclerView)
  - View ID: `2131625020` (transactions_list)
  - Layout: LinearLayoutManager (vertical)
  - Item Count: 5 (recent)

**Transaction Item (item_transaction.xml):**
```
LinearLayout (horizontal)
├─ Transaction Type Icon
│   └─ ImageView: 2131625021
│       ├─ Send: Up arrow (red)
│       ├─ Receive: Down arrow (green)
│       ├─ Swap: Swap arrows (blue)
│       ├─ DApp: Link icon (purple)
├─ Transaction Details Column
│   ├─ Type + Address
│   │   └─ TextView: 2131625022
│   │       Font: Medium, 14sp
│   └─ Timestamp
│       └─ TextView: 2131625023
│           Font: Regular, 12sp, Gray
├─ Amount Column (right-aligned)
│   ├─ Amount
│   │   └─ TextView: 2131625024
│   │       Font: Medium, 14sp
│   └─ USD Value
│       └─ TextView: 2131625025
│           Font: Regular, 12sp, Gray
└─ Status Indicator
    └─ View: 2131625026
        ├─ Pending: Yellow dot
        ├─ Success: Green check
        └─ Failed: Red X
```

---

## Filters and Selectors

### Chain Selector
- **Type:** Bottom Sheet Dialog
- **View ID:** `2131625027` (chain_selector_sheet)
- **Options:**
  | Chain | Icon | Native Token |
  |-------|------|--------------|
  | BNB Chain | BNB logo | BNB |
  | Ethereum | ETH logo | ETH |
  | Polygon | MATIC logo | MATIC |
  | Arbitrum | ARB logo | ETH |
  | Optimism | OP logo | ETH |
  | Avalanche | AVAX logo | AVAX |
  | zkSync Era | zk logo | ETH |
  | Base | BASE logo | ETH |

### Fiat Currency Selector
- **Type:** Dropdown Menu
- **View ID:** `2131625006`
- **Options:** USD, EUR, GBP, JPY, CNY, KRW, etc.
- **Persistence:** Saved in SharedPreferences

---

## Component Hierarchy

```
Web3HomeActivity (com.mpc.wallet)
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageView (logo)
│       ├─ TextView (chain_selector)
│       └─ LinearLayout (right icons)
│           ├─ ImageView (scan_qr)
│           └─ ImageView (more_options)
├─ NestedScrollView
│   └─ LinearLayout (vertical)
│       ├─ Include: wallet_address_card
│       │   └─ ConstraintLayout
│       │       ├─ TextView (wallet_address)
│       │       ├─ ImageButton (copy_qr)
│       │       └─ TextView (network_badge)
│       ├─ Include: balance_card
│       │   └─ ConstraintLayout
│       │       ├─ TextView (total_balance)
│       │       ├─ TextView (change_24h)
│       │       ├─ TextView (fiat_selector)
│       │       └─ LinearLayout (gas_tracker)
│       ├─ HorizontalScrollView (quick_actions)
│       │   └─ LinearLayout
│       │       ├─ QuickActionButton (Send)
│       │       ├─ QuickActionButton (Receive)
│       │       ├─ QuickActionButton (Swap)
│       │       ├─ QuickActionButton (Buy)
│       │       └─ QuickActionButton (DApps)
│       ├─ Include: dapp_shortcuts_section
│       │   ├─ TextView (header)
│       │   └─ RecyclerView (dapp_grid)
│       └─ Include: recent_transactions
│           ├─ TextView (header)
│           └─ RecyclerView (transactions_list)
└─ BottomNavigationBar (Web3 tabs: Home, Markets, Trade, Assets, Discover)
```

---

## Data Models

### Wallet Balance Model
```kotlin
data class Web3WalletBalance(
    val totalValueUSD: Double,           // Total in USD
    val totalChange24h: Double,          // 24h change amount
    val totalChangePercent24h: Double,   // 24h change %
    val fiatCurrency: String,             // Selected fiat
    val chains: List<ChainBalance>
)

data class ChainBalance(
    val chainId: String,                  // "bnb", "eth", "matic"
    val chainName: String,                 // "BNB Chain", "Ethereum"
    val nativeTokenBalance: Double,
    val nativeTokenSymbol: String,
    val valueUSD: Double,
    val gasPrice: String,                 // "5 Gwei"
    val tokens: List<TokenBalance>
)
```

### Transaction Model
```kotlin
data class Web3Transaction(
    val txHash: String,
    val type: TransactionType,            // SEND, RECEIVE, SWAP, CONTRACT, APPROVE
    val status: TransactionStatus,        // PENDING, CONFIRMED, FAILED
    val timestamp: Long,
    val from: String,                     // Sender address
    val to: String,                       // Recipient address
    val amount: Double,
    val tokenSymbol: String,
    val tokenAddress: String,
    val valueUSD: Double,
    val gasUsed: Long?,
    val gasPrice: Long?,
    val chainId: String
)
```

---

## API Endpoints

### Wallet Data
```
GET /sapi/v1/capital/config/getall
Headers: { "X-MBX-APIKEY": apiKey }
Response: All wallet balances

GET /sapi/v1/sub-account/balances
Parameters: { "email": "subaccount@email.com" }
Response: Sub-account balances
```

### DeFi Portfolio
```
GET /sapi/v1/eth/token/balance
Parameters: { "address": "0x...", "chain": "eth" }
Response: Token balances for chain

GET /sapi/v1/eth/token/list
Response: Supported DeFi tokens

GET /sapi/v1/nft/transactions
Parameters: { "asset": "NFT_ASSET_ID" }
Response: NFT transaction history
```

### Gas Estimates
```
GET /sapi/v1/gas/estimate
Parameters: { "chain": "bnb" }
Response: Current gas prices
```

---

## Event Subscriptions

### WebSocket Streams
| Stream | Purpose |
|--------|---------|
| `<address>@balance` | Real-time balance updates |
| `<address>@tx` | Transaction notifications |
| `!gas@arr` | Multi-chain gas prices |

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [08-Web3-Wallet-Markets](08-web3-wallet-markets.md) - DeFi markets
- [09-Web3-Wallet-Trade](09-web3-wallet-trade.md) - Swap/Trade
- [10-Web3-Wallet-Discover-DApps](10-web3-wallet-discover-dapps.md) - Discover DApps
- [11-Web3-Wallet-Assets](11-web3-wallet-assets.md) - Token/NFT assets
- [21-Web3-Wallet-Wallet-Connect](21-web3-wallet-wallet-connect.md) - WalletConnect
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Wallet Connection
- Supports WalletConnect protocol (wc://)
- QR code generation for mobile wallet connection
- Deep link support for external wallet apps

### Multi-Chain Support
- Chain switching without page reload
- Per-chain balance caching
- Gas price fetching per chain

### Performance Considerations
- Lazy loading for transaction history
- Image caching for DApp icons and token logos
- WebSocket for real-time balance updates
- Pagination for long transaction lists

### State Management
- ViewModel holds wallet state
- Flow for reactive UI updates
- SavedInstanceState for configuration changes

### Accessibility
- Content descriptions on all icons
- Minimum touch target: 48x48dp
- Color contrast ratio: 4.5:1 minimum

---

_Last Updated: 2026-03-12_
