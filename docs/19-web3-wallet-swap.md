# 19-Web3-Wallet-Swap

## Overview

This document provides detailed specifications for the DeFi Swap functionality within the Web3 Wallet. This is an advanced swap interface that aggregates liquidity from multiple DEXes to find the best trading rates, with detailed route selection, slippage tolerance configuration, and gas optimization features.

---

## Page Route

```
/web3/swap
```

**Deep Link Pattern:**
- `binance://web3/swap`
- `binance://web3/defi-swap`
- `app.binance.com/web3/swap`

---

## Workflow Context

```
Web3 Home → Swap Quick Action → Swap Screen
                                      ↓
                    ┌─────────────────┼─────────────────┐
                    ↓                 ↓                 ↓
              Route Selection    Best Price         Execute Swap
                    ↓                 ↓                 ↓
              Multi-DEX paths   Aggregation         Transaction
                    ↓                                   ↓
              Gas Optimization                  Confirmation
```

**User Flow:**
1. User navigates to Swap from Web3 Home or Assets
2. Selects source token and amount
3. Selects destination token
4. System aggregates routes from multiple DEXes
5. User selects preferred route (or auto-selects best)
6. Configures slippage tolerance
7. Optionally optimizes gas settings
8. Reviews final quote
9. Executes swap
10. Confirms transaction

---

## Screen Container Architecture

### Parent Container: DeFiSwapActivity
- **Package:** `com.mpc.wallet.defi.swap`
- **Layout:** `activity_defi_swap.xml`
- **View ID:** `2131625800`

### Screen Variants:
| Variant | Purpose |
|---------|---------|
| Basic Swap | Simple token-to-token |
| Multi-Route | Shows multiple DEX routes |
| Gas Optimized | Advanced gas settings |
| Cross-Chain | Bridge between chains |

---

## Advanced Features

### 1. Route Selection

**Layout Reference:** `layout_swap_routes.xml`

**Components:**
- Route Selector Button
  - View ID: `2131625801` (route_selector)
  - Text: "Best Route" or "3 Routes Available"
  - Tap → Opens route selection bottom sheet
  
**Route Selection Bottom Sheet:**
```
┌─────────────────────────────────────────┐
│ Select Route                            │
├─────────────────────────────────────────┤
│ [Auto] [Route 1] [Route 2] [Route 3]   │
├─────────────────────────────────────────┤
│ Route Comparison                        │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Route 1 (Best Rate)                 │ │
│ │ PancakeSwap: UNI → USDT             │ │
│ │ Rate: 1 UNI = 12.34 USDT            │ │
│ │ Impact: 0.05%                       │ │
│ │ Gas: $2.50                         │ │
│ │ [●] Selected                        │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Route 2                             │ │
│ │ Uniswap: UNI → ETH → USDT          │ │
│ │ Rate: 1 UNI = 12.30 USDT            │ │
│ │ Impact: 0.12%                       │ │
│ │ Gas: $3.20                         │ │
│ │ [ ]                                 │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Route 3                             │ │
│ │ SushiSwap: UNI → USDT               │ │
│ │ Rate: 1 UNI = 12.28 USDT            │ │
│ │ Impact: 0.15%                       │ │
│ │ Gas: $2.80                         │ │
│ │ [ ]                                 │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

**Route Item (item_swap_route.xml):**
```
CardView
├─ RadioButton (selection)
│   └─ View: 2131625802
├─ Route Path Visualization
│   └─ LinearLayout: 2131625803
│       ├─ Token Icon (UNI)
│       ├─ DEX Icon (arrow)
│       ├─ Token Icon (USDT)
│       └─ ... (additional hops)
├─ Rate Display
│   └─ TextView: 2131625804
│       Format: "1 UNI = 12.34 USDT"
├─ Price Impact
│   └─ TextView: 2131625805
│       Color coded: Green/Yellow/Red
├─ Gas Estimate
│   └─ TextView: 2131625806
│       Format: "$2.50"
└─ Total Value
    └─ TextView: 2131625807
        Format: "Total: $123.45"
```

### 2. Best Price Aggregation

**Layout Reference:** `layout_swap_aggregation.xml`

**Components:**
- Aggregator Badge
  - View ID: `2131625808` (aggregator_badge)
  - Text: "Best Price from 5 DEXes"
  - Icon: Aggregation indicator
  
- Price Breakdown
  - View ID: `2131625809` (price_breakdown)
  - Shows contribution from each DEX
  
- Savings Indicator
  - View ID: `2131625810` (savings_indicator)
  - Format: "You save $1.50 vs single DEX"
  - Shows value of aggregation

**Supported DEX Aggregators:**
- 1Inch
- Paraswap
- Matcha
- DEX aggregators native to chain

**Supported DEXes:**
| Chain | DEXes |
|-------|-------|
| Ethereum | Uniswap, SushiSwap, Curve, Balancer |
| BNB Chain | PancakeSwap, Biswap, ApeSwap |
| Polygon | QuickSwap, SushiSwap |
| Arbitrum | Uniswap, SushiSwap, Camelot |
| Optimism | Uniswap, Velodrome |

### 3. Slippage Tolerance

**Layout Reference:** `layout_swap_slippage.xml`

**Components:**
- Slippage Selector
  - View ID: `2131625811` (slippage_selector)
  - Preset buttons: 0.1%, 0.5%, 1%, 5%
  - Custom input option
  
- Custom Slippage Input
  - View ID: `2131625812` (custom_slippage_input)
  - Hint: "Enter custom %"
  - Validation: 0.01% - 50%
  
- Minimum Received Display
  - View ID: `2131625813` (minimum_received)
  - Format: "Minimum received: 12.28 USDT"
  - Calculated based on slippage setting
  
- Slippage Warning
  - View ID: `2131625814` (slippage_warning)
  - Shows when slippage might cause issues
  - "Your transaction may fail" indicator

**Slippage Settings:**
```
┌─────────────────────────────────────────┐
│ Transaction Settings                     │
├─────────────────────────────────────────┤
│ Slippage Tolerance                       │
│ [0.1%] [0.5%] [1%] [5%] [Custom]        │
├─────────────────────────────────────────┤
│ Custom: [    2.0    ] %                 │
├─────────────────────────────────────────┤
│ Minimum Received                         │
│ 12.28 USDT (will vary with slippage)    │
├─────────────────────────────────────────┤
│ Transaction Deadline                     │
│ [5] [10] [20] [30] minutes             │
├─────────────────────────────────────────┤
│ Expert Mode                    [Toggle] │
│ Disable confirmation for large swaps    │
└─────────────────────────────────────────┘
```

### 4. Gas Optimization

**Layout Reference:** `layout_swap_gas_optimization.xml`

**Components:**
- Gas Price Selector
  - View ID: `2131625815` (gas_price_selector)
  - Options: Slow, Standard, Fast, Custom
  
- Gas Price Display
  - View ID: `2131625816` (gas_price_display)
  - Format: "5 Gwei"
  - Current network gas price
  
- Estimated Confirmation Time
  - View ID: `2131625817` (confirmation_time)
  - Format: "~1 min" (Slow), "~15 sec" (Fast)
  
- Gas Fee in Native Token
  - View ID: `2131625818` (gas_fee_native)
  - Format: "0.005 ETH"
  
- Gas Fee in USD
  - View ID: `2131625819` (gas_fee_usd)
  - Format: "$10.50"
  
- Optimize Gas Toggle
  - View ID: `2131625820` (optimize_gas_toggle)
  - Auto-adjusts gas for best price/speed
  
- Gas Price Chart
  - View ID: `2131625821` (gas_chart)
  - Shows recent gas prices
  - Helps predict optimal gas setting

**Gas Speed Options:**
| Option | Speed | Use Case |
|--------|-------|----------|
| Slow | ~10-30 min | Non-urgent, large swaps |
| Standard | ~3-10 min | Normal trading |
| Fast | ~15 sec - 3 min | Urgent trades |
| Custom | User defined | Advanced users |

---

## Tabs and Subviews

### Main Content

```
┌─────────────────────────────────────────┐
│ [From Token]                             │
│  Token Select  [Amount Input]           │
│  Balance: 10 UNI                        │
├─────────────────────────────────────────┤
│ [Swap Direction ↕]                       │
├─────────────────────────────────────────┤
│ [To Token]                               │
│  Token Select  [Amount Output]          │
│  ~12.34 USDT                           │
├─────────────────────────────────────────┤
│ [Route Selector Button]                  │
│  "Best Route • 3 DEXes"                │
├─────────────────────────────────────────┤
│ [Exchange Rate]                          │
│  1 UNI = 12.34 USDT                    │
│  Impact: 0.05%                         │
├─────────────────────────────────────────┤
│ [Fee Breakdown]                          │
│  Network: 0.005 ETH ($10.50)           │
│  Protocol: $0.01                       │
├─────────────────────────────────────────┤
│ [Settings Gear]                           │
│  Slippage: 0.5% | Deadline: 20 min    │
├─────────────────────────────────────────┤
│ [Swap Button]                            │
│  "Swap Now"                             │
└─────────────────────────────────────────┘
```

---

## Widget Regions

### 1. Token Input Cards

**From Token Card:**
- Token Selector (dropdown)
- Amount Input (numeric keyboard)
- USD Value (auto-calculated)
- Balance Display
- Max Button

**To Token Card:**
- Token Selector (dropdown)
- Amount Output (read-only)
- USD Value (auto-calculated)
- Exchange Rate Display

### 2. Route Display

**Route Summary:**
- Number of DEXes used
- Best rate indicator
- Tap to expand details

### 3. Price Impact Indicator

**Impact Levels:**
| Level | Color | Impact Range | Action |
|-------|-------|--------------|--------|
| Safe | Green | < 0.1% | Normal |
| Moderate | Yellow | 0.1% - 1% | Warning |
| High | Red | > 1% | Require confirmation |

### 4. Fee Breakdown

**Components:**
- Network/Gas Fee (in native token + USD)
- Protocol Fee (if applicable)
- Aggregator Fee (if applicable)
- Total Cost

### 5. Settings Panel

**Slippage Settings:**
- Preset: 0.1%, 0.5%, 1%, 5%
- Custom: 0.01% - 50%

**Deadline Settings:**
- Preset: 5, 10, 20, 30 minutes
- Custom: 1-60 minutes

---

## Component Hierarchy

```
DeFiSwapActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title: "Swap")
│       ├─ ImageButton (route_history)
│       └─ ImageButton (settings)
├─ NestedScrollView
│   └─ LinearLayout (vertical)
│       ├─ Include: from_token_card
│       │   ├─ TokenSelector
│       │   ├─ AmountInput
│       │   └─ BalanceDisplay
│       ├─ FrameLayout (swap_direction)
│       │   └─ ImageButton (swap)
│       ├─ Include: to_token_card
│       │   ├─ TokenSelector
│       │   ├─ AmountDisplay
│       │   └─ RateDisplay
│       ├─ Card: route_selector
│       │   ├─ TextView (route_summary)
│       │   ├─ TextView (aggregator_badge)
│       │   └─ ImageView (expand)
│       ├─ Include: rate_info
│       ├─ Include: fee_breakdown
│       ├─ Card: settings_summary
│       │   ├─ TextView (slippage)
│       │   └─ TextView (deadline)
│       └─ Button (swap_now)
├─ BottomSheet: route_selection_sheet
│   ├─ TabLayout (auto/custom)
│   ├─ RecyclerView (routes_list)
│   │   └─ RouteViewHolder (multiple)
│   └─ Button (confirm_route)
├─ BottomSheet: settings_sheet
│   ├─ SlippageSelector
│   ├─ DeadlineSelector
│   └─ GasOptimizationToggle
└─ BottomSheet: token_selector_sheet
    ├─ SearchBar
    ├─ TabLayout (chain_filter)
    └─ RecyclerView (token_list)
```

---

## Data Models

### Swap Route Model
```kotlin
data class SwapRoute(
    val id: String,
    val name: String,                    // "Best Route", "Fastest"
    val steps: List<SwapStep>,
    val fromToken: TokenInfo,
    val toToken: TokenInfo,
    val fromAmount: Double,
    val toAmount: Double,
    val minReceivedAmount: Double,       // With slippage
    val priceImpact: Double,
    val gasEstimate: Long,
    val gasPrice: Long,
    val gasCostUSD: Double,
    val totalCostUSD: Double,
    val validUntil: Long,
    val isBestRate: Boolean,
    val isFastest: Boolean
)

data class SwapStep(
    val dexName: String,
    val dexIcon: String,
    val fromToken: TokenInfo,
    val toToken: TokenInfo,
    val fromAmount: Double,
    val toAmount: Double,
    val poolAddress: String,
    val poolFee: Double                  // Fee tier: 0.003 = 0.3%
)
```

### Swap Quote Model
```kotlin
data class SwapQuote(
    val quoteId: String,
    val routes: List<SwapRoute>,
    val selectedRouteId: String,
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
    val aggregatorFeeUSD: Double,
    val totalCostUSD: Double,
    val exchangeRate: Double,
    val validUntil: Long,
    val allowanceTarget: String,
    val swapData: String                 // Encoded swap data for contract
)
```

### Gas Settings Model
```kotlin
data class GasSettings(
    val gasSpeed: GasSpeed,              // SLOW, STANDARD, FAST, CUSTOM
    val gasPrice: Long,                  // In wei
    val gasLimit: Long,                  // Estimated gas limit
    val estimatedCostNative: Double,     // e.g., 0.005 ETH
    val estimatedCostUSD: Double,
    val estimatedConfirmationSeconds: Int,
    val isOptimized: Boolean             // Auto-optimize toggle
)

enum class GasSpeed {
    SLOW,
    STANDARD,
    FAST,
    CUSTOM
}
```

---

## API Endpoints

### Quote Aggregation
```
POST /sapi/v1/defi/swap/quote
Body: {
    "fromToken": "0x...",
    "toToken": "0x...",
    "amount": "1000000000000000000",
    "slippage": 0.5,
    "chain": "eth",
    "gasSpeed": "standard",
    "includeRoutes": true
}
Response: {
    "quoteId": "...",
    "routes": [...],
    "gasSettings": {...}
}
```

### Gas Estimation
```
GET /sapi/v1/gas/estimate
Parameters: { 
    "chain": "eth",
    "type": "swap",
    "fromToken": "0x...",
    "toToken": "0x...",
    "amount": "1000000"
}
Response: {
    "slow": { "gasPrice": 20000000000, "estimatedSeconds": 300 },
    "standard": { "gasPrice": 30000000000, "estimatedSeconds": 60 },
    "fast": { "gasPrice": 50000000000, "estimatedSeconds": 15 }
}
```

### Execute Swap
```
POST /sapi/v1/defi/swap/execute
Body: {
    "quoteId": "...",
    "fromAddress": "0x...",
    "slippage": 0.5,
    "deadline": 20,
    "gasSettings": {
        "gasSpeed": "standard",
        "gasPrice": "30000000000"
    }
}
Response: {
    "txHash": "0x...",
    "status": "PENDING"
}
```

### Route Comparison
```
GET /sapi/v1/defi/swap/routes
Parameters: { 
    "fromToken": "0x...",
    "toToken": "0x...",
    "amount": "1000000",
    "chain": "eth"
}
Response: {
    "routes": [
        {
            "name": "Best Route",
            "dexes": ["PancakeSwap"],
            "estimatedOutput": "1234",
            "gasCost": "2.50"
        },
        {
            "name": "Route 2",
            "dexes": ["Uniswap", "SushiSwap"],
            "estimatedOutput": "1230",
            "gasCost": "3.20"
        }
    ]
}
```

---

## Screen Variants

### Variant 1: Single Route (Basic)
- One DEX route available
- No route selection needed
- Simple swap interface

### Variant 2: Multi-Route (Default)
- Multiple routes displayed
- Route selector visible
- Shows savings from aggregation

### Variant 3: High Price Impact
- Warning banner displayed
- Requires user confirmation
- Shows alternative routes

### Variant 4: Insufficient Balance
- Swap button disabled
- Shows required vs available
- Suggests max amount

### Variant 5: Gas Optimization Enabled
- Auto gas calculation
- Shows savings from optimization
- Quick toggle to disable

### Variant 6: Cross-Chain Swap
- Different source/dest chains
- Bridge step included
- Longer completion time

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 home
- [09-Web3-Wallet-Trade](09-web3-wallet-trade.md) - Basic trade
- [11-Web3-Wallet-Assets](11-web3-wallet-assets.md) - Assets
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Route Aggregation
- Query multiple DEX APIs in parallel
- Calculate optimal route off-chain
- Show real-time price updates
- Update quotes periodically (15-30s)

### Gas Optimization
- Monitor network congestion
- Predict optimal gas price
- Allow user override
- Show historical gas trends

### Slippage Handling
- Calculate minimum received at quote time
- Include slippage in swap data
- Handle slippage exceeded errors
- Suggest increased slippage if failing

### Error Handling
- Quote expiration handling
- Insufficient liquidity alerts
- Gas too low warnings
- Route failures

### Performance
- Cache recent quotes
- Debounce amount input
- Preload popular token pairs
- Background quote refresh

---

_Last Updated: 2026-03-12_
