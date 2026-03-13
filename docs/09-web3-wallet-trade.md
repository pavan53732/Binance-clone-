# 09-Web3-Wallet-Trade

## Overview

This document provides detailed specifications for the Web3 Trading (Swap) screen - the DeFi token swap interface within the Web3 Wallet section. This screen enables users to exchange one token for another directly from their wallet using decentralized exchange protocols.

---

## Page Route

```
/web3/trade
```

**Deep Link Pattern:**
- `binance://web3/trade`
- `binance://web3/swap`
- `app.binance.com/web3/trade`

---

## Workflow Context

```
Web3 Wallet Home → Trade/Swap Screen
                         ↓
     ┌──────────────────┼──────────────────┐
     ↓                  ↓                  ↓
 Select Token     Configure Swap      Confirm Swap
     ↓                  ↓                  ↓
 Token Selector  Set Amount/Slippage  Review Details
                       ↓
                  Authorization
                       ↓
                  Execute Transaction
```

**User Flow:**
1. User navigates to Trade from Web3 tab or quick action
2. Selects "From" token from token selector
3. Selects "To" token from token selector
4. Enters swap amount
5. Reviews exchange rate, slippage, gas fees
6. Confirms swap
7. Authorizes transaction (wallet signature)
8. Views transaction status

---

## Screen Purpose

The Web3 Trade/Swap screen enables users to:
- **Swap Tokens**: Exchange one token for another
- **Select Tokens**: Choose from supported tokens across chains
- **Set Slippage**: Configure maximum slippage tolerance
- **View Rates**: See estimated exchange rate and price impact
- **Track Gas**: Monitor gas fees for the transaction
- **Execute Swap**: Sign and broadcast transaction to blockchain

---

## Screen Container Architecture

### Parent Container: Web3TradeActivity
- **Package:** `com.mpc.wallet.trade`
- **Layout:** `activity_web3_trade.xml`
- **View ID:** `2131625200`

### Screen Variants:
| Variant | Purpose |
|---------|---------|
| Swap Mode | Token to token exchange |
| Limit Mode | Swap at specified price (if supported) |
| Bridge Mode | Cross-chain swap (if supported) |

---

## Tabs and Subviews

### Top Navigation Bar
- **Back Button** (left)
- **Title** (center) - "Swap"
- **Settings** (right) - Slippage settings
- **History** (right) - Swap history

### Main Content

```
┌─────────────────────────────────────────┐
│ [From Token Card]                        │
│  Token Icon    [Select ▼]               │
│  Amount Input              USD Value   │
├─────────────────────────────────────────┤
│ [Swap Direction Button] (↕)             │
├─────────────────────────────────────────┤
│ [To Token Card]                         │
│  Token Icon    [Select ▼]               │
│  Amount Input              USD Value   │
├─────────────────────────────────────────┤
│ [Exchange Rate Display]                  │
│  1 UNI = 0.0034 ETH                     │
│  Price impact: 0.05%                    │
├─────────────────────────────────────────┤
│ [Fee Breakdown]                          │
│  Network Fee: 0.0005 ETH                │
│  Protocol Fee: $0.01                    │
├─────────────────────────────────────────┤
│ [Swap Button: Swap Now]                  │
└─────────────────────────────────────────┘
```

---

## Widget Regions

### 1. From Token Card

**Layout Reference:** `layout_swap_token_from.xml`

**Components:**
- Token Selector Button
  - View ID: `2131625201` (from_token_selector)
  - Shows: Token icon + Token name + Dropdown arrow
  - Tap → Opens token selector bottom sheet
  
- Token Amount Input
  - View ID: `2131625202` (from_amount_input)
  - Hint: "0.00"
  - Keyboard: Decimal number
  - Max decimals: Token-specific
  
- USD Value Display
  - View ID: `2131625203` (from_usd_value)
  - Format: "$0.00"
  - Auto-updates based on amount
  
- Max Button
  - View ID: `2131625204` (max_button)
  - Text: "MAX"
  - Sets amount to max balance

**Token Selector Bottom Sheet (from_token_sheet):**
- Search bar
- Recent tokens list
- Token balance list
- Import token option

### 2. To Token Card

**Layout Reference:** `layout_swap_token_to.xml`

**Components:**
- Token Selector Button
  - View ID: `2131625205` (to_token_selector)
  - Shows: Token icon + Token name + Dropdown arrow
  
- Token Amount Display (calculated)
  - View ID: `2131625206` (to_amount_display)
  - Format: "0.00" (read-only, auto-calculated)
  - Large font: 24sp
  
- USD Value Display
  - View ID: `2131625207` (to_usd_value)
  - Format: "$0.00"
  
- Exchange Rate Display
  - View ID: `2131625208` (exchange_rate)
  - Format: "1 FROM = 0.0034 TO"
  - Tap → Toggle rate direction

### 3. Swap Direction Button

**Layout Reference:** `layout_swap_direction.xml`

**Components:**
- Swap Button
  - View ID: `2131625209` (swap_direction_button)
  - Icon: Two-way arrow (↕)
  - Size: 40x40dp
  - Background: Circle, gray
  
- Animation: 180° rotation on tap
- Swaps From/To tokens and recalculates

### 4. Exchange Rate & Price Impact

**Layout Reference:** `layout_swap_rate_info.xml`

**Components:**
- Exchange Rate
  - View ID: `2131625210` (exchange_rate_text)
  - Format: "1 UNI = 0.003421 ETH"
  - Font: Regular, 14sp
  - Tap: Toggle direction
  
- Price Impact
  - View ID: `2131625211` (price_impact_text)
  - Format: "Price impact: 0.05%"
  - Color coding:
    - Green (< 0.1%): Safe
    - Yellow (0.1-1%): Moderate
    - Red (> 1%): High impact warning
    
- Minimum Received
  - View ID: `2131625212` (minimum_received_text)
  - Format: "Minimum received: 3.4 UNI"
  - Calculated with slippage tolerance

### 5. Fee Breakdown

**Layout Reference:** `layout_swap_fees.xml`

**Components:**
- Network/Gas Fee
  - View ID: `2131625213` (network_fee_text)
  - Format: "Network fee: 0.0005 ETH"
  - Shows estimated gas cost
  
- Protocol Fee
  - View ID: `2131625214` (protocol_fee_text)
  - Format: "Protocol fee: $0.01"
  - DEX fee (if applicable)
  
- Total Fee
  - View ID: `2131625215` (total_fee_text)
  - Format: "Total: $2.50"
  - Sum of network + protocol fees

### 6. Swap Button

**Layout Reference:** `layout_swap_button.xml`

**Components:**
- Swap Now Button
  - View ID: `2131625216` (swap_button)
  - Text: "Swap Now"
  - Background: Primary color (yellow #F0B90B)
  - Size: Full width, 56dp height
  - Corner radius: 28dp (pill shape)
  
- Button States:
  - Default: Yellow background, "Swap Now"
  - Loading: Spinner, "Swapping..."
  - Disabled: Gray background, "Insufficient balance"
  - Error: Red outline, error message

### 7. Slippage Settings (Bottom Sheet)

**Layout Reference:** `layout_swap_settings_sheet.xml`

**Components:**
- Title
  - View ID: `2131625217` (settings_title)
  - Text: "Transaction Settings"
  
- Slippage Tolerance
  - View ID: `2131625218` (slippage_selector)
  - Preset options: 0.1%, 0.5%, 1%, 5%
  - Custom input option
  
- Custom Slippage Input
  - View ID: `2131625219` (custom_slippage_input)
  - Hint: "Enter custom %"
  - Validation: 0.01% - 50%
  
- Transaction Deadline
  - View ID: `2131625220` (deadline_input)
  - Default: 20 minutes
  - Options: 5, 10, 20, 30 minutes

---

## Token Selector Bottom Sheet

### Components
- Search Bar
  - View ID: `2131625221` (token_search)
  - Hint: "Search token name or paste address"
  
- Chain Filter Tabs
  - View ID: `2131625222` (chain_tabs)
  - Options: All, ETH, BNB, MATIC, etc.
  
- Recent Tokens Section
  - View ID: `2131625223` (recent_tokens)
  - Shows last 5 used tokens
  
- Token List
  - View ID: `2131625224` (token_list)
  - Shows: Icon, Name, Symbol, Balance, USD Value
  
- Import Token Option
  - View ID: `2131625225` (import_token)
  - Opens custom token import flow

### Token Item Structure
```
LinearLayout (horizontal)
├─ Token Icon
│   └─ ImageView: 2131625226
├─ Token Info
│   ├─ Name (bold)
│   │   └─ TextView: 2131625227
│   └─ Balance
│       └─ TextView: 2131625228
└─ USD Value (right)
    └─ TextView: 2131625229
```

---

## Component Hierarchy

```
Web3TradeActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title: "Swap")
│       ├─ ImageButton (settings)
│       └─ ImageButton (history)
├─ NestedScrollView
│   └─ LinearLayout (vertical)
│       ├─ Include: from_token_card
│       │   ├─ ConstraintLayout
│       │   │   ├─ TextView (label: "You Pay")
│       │   │   ├─ LinearLayout (token_selector)
│       │   │   │   ├─ ImageView (token_icon)
│       │   │   │   └─ TextView (token_name)
│       │   │   ├─ EditText (amount_input)
│       │   │   ├─ TextView (usd_value)
│       │   │   └─ Button (max)
│       ├─ FrameLayout (swap_direction)
│       │   └─ ImageButton (swap_button)
│       ├─ Include: to_token_card
│       │   ├─ ConstraintLayout
│       │   │   ├─ TextView (label: "You Receive")
│       │   │   ├─ LinearLayout (token_selector)
│       │   │   ├─ TextView (amount_display)
│       │   │   └─ TextView (usd_value)
│       ├─ Include: rate_info
│       │   ├─ TextView (exchange_rate)
│       │   ├─ TextView (price_impact)
│       │   └─ TextView (minimum_received)
│       ├─ Include: fee_breakdown
│       │   ├─ TextView (network_fee)
│       │   ├─ TextView (protocol_fee)
│       │   └─ TextView (total_fee)
│       └─ Button (swap_now)
└─ BottomSheet: token_selector_sheet
    ├─ SearchBar
    ├─ TabLayout (chain_filter)
    ├─ RecyclerView (token_list)
    └─ Button (import_token)
```

---

## Data Models

### Swap Request Model
```kotlin
data class SwapRequest(
    val fromToken: TokenInfo,
    val toToken: TokenInfo,
    val fromAmount: Double,
    val toAmount: Double,               // Estimated
    val minReceivedAmount: Double,      // With slippage
    val slippageTolerance: Double,      // e.g., 0.005 = 0.5%
    val gasPrice: Long,                 // Gas price in wei
    val gasLimit: Long,                 // Estimated gas
    val priceImpact: Double,            // e.g., 0.0005 = 0.05%
    val exchangeRate: Double,
    val route: List<String>             // DEX route
)
```

### Token Info Model
```kotlin
data class TokenInfo(
    val address: String,                // Contract address
    val symbol: String,                 // "ETH", "UNI"
    val name: String,                   // "Ethereum", "Uniswap"
    val decimals: Int,                  // 18 for ETH
    val chainId: String,                // "eth", "bnb"
    val logoUrl: String,
    val balance: Double,                // User's balance
    val priceUSD: Double                 // Current price
)
```

### Swap Quote Model
```kotlin
data class SwapQuote(
    val fromToken: TokenInfo,
    val toToken: TokenInfo,
    val fromAmount: Double,
    val toAmount: Double,
    val minReceivedAmount: Double,
    val priceImpact: Double,
    val gasEstimate: Long,
    val gasPrice: Long,
    val gasCostUSD: Double,
    val protocolFeeUSD: Double,
    val totalFeeUSD: Double,
    val route: List<String>,            // ["UNI", "USDT"]
    val exchangeRate: Double,
    val validUntil: Long,               // Unix timestamp
    val allowanceTarget: String         // Token spender address
)
```

---

## API Endpoints

### Swap Quotes
```
POST /sapi/v1/defi/swap/quote
Body: {
    "fromToken": "0x...",
    "toToken": "0x...",
    "amount": "1000000000000000000",
    "slippage": 0.5,
    "chain": "eth"
}
Response: SwapQuote object
```

### Execute Swap
```
POST /sapi/v1/defi/swap/execute
Body: {
    "quoteId": "...",
    "fromAddress": "0x...",
    "toAddress": "0x...",
    "signedTransaction": "0x..."
}
Response: Transaction receipt
```

### Token Approval
```
POST /sapi/v1/defi/approve
Body: {
    "tokenAddress": "0x...",
    "spender": "0x...",
    "amount": "max",
    "chain": "eth"
}
Response: Approval transaction
```

### Gas Estimation
```
GET /sapi/v1/gas/estimate
Parameters: { "chain": "eth", "type": "swap" }
Response: Estimated gas price and limit
```

---

## Transaction Flow

### 1. Quote Fetch
- User enters amount → API fetches quote
- Quote valid for 30-60 seconds
- Auto-refresh on amount change

### 2. Token Approval (if needed)
- Check if token allowance sufficient
- If not → Prompt approval transaction
- Requires wallet signature

### 3. Swap Execution
- User taps "Swap Now"
- Wallet prompts for signature
- Transaction broadcast to network

### 4. Confirmation
- Wait for transaction confirmation
- Show success/failure status
- Update wallet balance

---

## Screen Variants

### Variant 1: Basic Swap (Primary)
- From/To token selection
- Amount input
- Fee breakdown
- Single DEX route

### Variant 2: Multi-Route Swap
- Shows multiple swap routes
- Best rate auto-selected
- Route comparison available

### Variant 3: Cross-Chain Swap
- Different source/destination chains
- Bridge integration
- Longer processing time

### Variant 4: Insufficient Balance
- Swap button disabled
- Error message shown
- "Max" button adjusts to balance

### Variant 5: Price Impact High
- Warning displayed
- User must confirm
- Option to adjust amount

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 home
- [08-Web3-Wallet-Markets](08-web3-wallet-markets.md) - Markets
- [10-Web3-Wallet-Discover-DApps](10-web3-wallet-discover-dapps.md) - Discover DApps
- [11-Web3-Wallet-Assets](11-web3-wallet-assets.md) - Assets
- [19-Web3-Wallet-Swap](19-web3-wallet-swap.md) - Swap details
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Token List
- Cached token list with metadata
- Balance fetching per token
- Price data cached

### Gas Optimization
- Dynamic gas price fetching
- Gas estimation before swap
- User can adjust gas price

### Slippage Settings
- Default: 0.5%
- Persisted in preferences
- Custom input with validation

### Wallet Integration
- WalletConnect for transaction signing
- Support for hardware wallets
- Transaction status tracking

### Performance
- Quote caching (short TTL)
- Debounce on amount input
- Lazy load token balances

### Error Handling
- Insufficient balance check
- Slippage exceeded warning
- Gas too low warning
- Network error handling
- Approval failure handling

---

_Last Updated: 2026-03-12_
