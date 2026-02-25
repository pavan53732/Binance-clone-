# Binance UI/UX Knowledge Base - Swap Feature

## Overview

This document provides comprehensive documentation of the Swap feature in the Binance Android app, including screen layouts, input/output coin selection, price conversion, slippage settings, and mock swap calculations.

---

## Swap Screen Layout

### Main Screen Structure

```
┌─────────────────────────────────────────────────────────┐
│  ← Swap                                    [Settings]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  You Pay                                         │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  BTC                            [▼]     │   │   │
│  │  │  0.10000000                              │   │   │
│  │  │  ≈ $4,250.00                             │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  │  Balance: 0.5 BTC                               │   │
│  │  [25%] [50%] [75%] [100%]                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│                      ┌─────┐                           │
│                      │ ⇅  │                            │
│                      └─────┘                           │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  You Receive                                     │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  ETH                            [▼]     │   │   │
│  │  │  1.85000000                              │   │   │
│  │  │  ≈ $4,250.00                             │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  │  Balance: 2.5 ETH                               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Rate: 1 BTC = 18.50 ETH                        │   │
│  │  Price Impact: <0.01%                           │   │
│  │  Min Received: 1.844 ETH                        │   │
│  │  Fee: 0.0002 BTC                                │   │
│  │  ⏱ Rate refreshes in 25s                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              [SWAP BTC → ETH]                    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Header Section

| Component | Type | Description |
|-----------|------|-------------|
| Back Button | ImageButton | Navigate back |
| Title | TextView | "Swap" |
| Settings Button | ImageButton | Open slippage settings |
| History Button | ImageButton | View swap history |

---

## Input/Output Coin Selection

### Coin Selector Components

**From Coin Section**:
| Component | Type | Specification |
|-----------|------|---------------|
| Label | TextView | "You Pay" |
| Coin Selector | Button | Shows selected coin with dropdown |
| Amount Input | EditText | Decimal input |
| USD Value | TextView | Converted USD value |
| Balance | TextView | Available balance |
| Percentage Buttons | Button Group | 25%, 50%, 75%, 100% |

**To Coin Section**:
| Component | Type | Specification |
|-----------|------|---------------|
| Label | TextView | "You Receive" |
| Coin Selector | Button | Shows selected coin with dropdown |
| Amount Display | TextView | Calculated output amount |
| USD Value | TextView | Converted USD value |
| Balance | TextView | Current balance |

### Coin Selection Bottom Sheet

```
┌─────────────────────────────────────────────────────────┐
│  ─────                                                  │
│  Select Coin                                           │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔍 Search coin...                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Popular                                         │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  ₿  BTC    Bitcoin          0.5         │   │   │
│  │  │  ⟠  ETH    Ethereum          2.5        │   │   │
│  │  │  ◆  BNB    BNB               10.0       │   │   │
│  │  │  ₮  USDT   Tether            1000.0     │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  All Coins                                       │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  ◎  ADA   Cardano            500.0      │   │   │
│  │  │  ◎  DOT   Polkadot           50.0       │   │   │
│  │  │  ◎  SOL   Solana             25.0       │   │   │
│  │  │  ◎  XRP   XRP                 1000.0    │   │   │
│  │  │  ...                                     │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Coin List Item Layout

```
┌─────────────────────────────────────────────────────────┐
│  [Icon]  SYMBOL   Name                      Balance     │
│   32dp   16sp    14sp                        14sp       │
└─────────────────────────────────────────────────────────┘
```

### Swap Direction Toggle

**Button**:
| Property | Value |
|----------|-------|
| Size | 40dp x 40dp |
| Icon | Up/Down arrows |
| Background | Circle with border |
| Position | Centered between sections |

**Behavior**:
- Tap to swap From/To coins
- Amounts recalculate automatically
- Animation on switch

---

## Price Conversion Display

### Rate Information Section

```
┌─────────────────────────────────────────────────────────┐
│  Rate: 1 BTC = 18.50 ETH                               │
│  Price Impact: <0.01%                                  │
│  Min Received: 1.844 ETH                               │
│  Fee: 0.0002 BTC                                       │
│  ⏱ Rate refreshes in 25s                               │
└─────────────────────────────────────────────────────────┘
```

### Rate Display Components

| Component | Format | Description |
|-----------|--------|-------------|
| Rate | "1 {FROM} = {RATE} {TO}" | Exchange rate |
| Price Impact | Percentage | Market impact of trade |
| Min Received | Amount with slippage | Minimum output guaranteed |
| Fee | Amount | Swap fee |
| Timer | Countdown | Rate validity timer |

### Rate Colors

| Element | Color | Condition |
|---------|-------|-----------|
| Price Impact | Green `#2EBD85` | < 1% |
| Price Impact | Yellow `#F0B90B` | 1% - 3% |
| Price Impact | Red `#F6465D` | > 3% |
| Timer | White | Normal |
| Timer | Yellow | < 10 seconds |

### USD Value Display

**Format**: "≈ $X,XXX.XX"

**Position**: Below amount input

**Update Frequency**: Real-time with rate changes

---

## Slippage Settings

### Settings Bottom Sheet

```
┌─────────────────────────────────────────────────────────┐
│  ─────                                                  │
│  Slippage Settings                                     │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Slippage Tolerance                                    │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [0.1%]  [0.5%]  [1.0%]  [Custom]              │   │
│  │                    ✓                            │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Custom Slippage                                 │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  1.5                            %       │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ⚠️ Higher slippage increases the risk of              │
│     front-running and getting a worse price.           │
│                                                         │
│  Rate Refresh Interval                                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [15s]  [30s]  [60s]                           │   │
│  │    ✓                                           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              [Save Settings]                     │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Slippage Presets

| Preset | Value | Use Case |
|--------|-------|----------|
| Low | 0.1% | Stable pairs |
| Standard | 0.5% | Normal trading |
| High | 1.0% | Volatile pairs |
| Custom | User input | Special cases |

### Slippage Validation

| Rule | Error Message |
|------|---------------|
| < 0.01% | "Slippage too low - transaction may fail" |
| > 5% | "High slippage warning" |
| > 20% | "Slippage too high - not allowed" |

### Rate Refresh Intervals

| Option | Value |
|--------|-------|
| Fast | 15 seconds |
| Standard | 30 seconds |
| Slow | 60 seconds |

---

## Swap Confirmation Flow

### Confirmation Screen

```
┌─────────────────────────────────────────────────────────┐
│  ← Confirm Swap                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                  │   │
│  │       You Pay                    You Receive    │   │
│  │       0.1 BTC                    1.85 ETH       │   │
│  │       ≈ $4,250                   ≈ $4,250      │   │
│  │                                                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Order Details                                   │   │
│  │  ─────────────────────────────────────────────  │   │
│  │  Rate              1 BTC = 18.50 ETH            │   │
│  │  Price Impact      <0.01%                       │   │
│  │  Min Received      1.844 ETH                    │   │
│  │  Slippage          1.0%                         │   │
│  │  Fee               0.0002 BTC                   │   │
│  │  Network Fee       ~$0.50                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ⚠️ Rate will expire in 25 seconds              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              [CONFIRM SWAP]                      │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Confirmation Details

| Field | Description |
|-------|-------------|
| You Pay | Input amount and coin |
| You Receive | Output amount and coin |
| Rate | Exchange rate |
| Price Impact | Market impact |
| Min Received | Guaranteed minimum |
| Slippage | Tolerance setting |
| Fee | Platform fee |
| Network Fee | Estimated gas |

### Confirmation States

| State | UI |
|-------|-----|
| Ready | Yellow "CONFIRM SWAP" button |
| Rate Expired | "Refresh Rate" button |
| Processing | Loading spinner |
| Success | Success animation |
| Failed | Error message |

---

## Rate Refresh Mechanism

### Auto-Refresh Behavior

```
┌─────────────────────────────────────────────────────────┐
│                    Rate Lifecycle                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  [Fetch Rate] ──► [Display] ──► [Countdown] ──► [Expire]│
│       │               │              │              │   │
│       │               │              │              │   │
│       ▼               ▼              ▼              ▼   │
│    API Call      Show Rate      30s Timer     Refresh   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Refresh Triggers

| Trigger | Action |
|---------|--------|
| Timer expires | Auto-refresh rate |
| Amount changed | Fetch new rate |
| Coin changed | Fetch new rate |
| Manual refresh | User taps refresh |
| Screen resume | Fetch fresh rate |

### Rate Expiration UI

**Before Expiration**:
```
⏱ Rate refreshes in 25s
```

**Near Expiration (< 10s)**:
```
⏱ Rate refreshes in 8s  [Refresh Now]
```

**Expired**:
```
⚠️ Rate expired  [Refresh Rate]
```

### Rate Loading States

| State | UI |
|-------|-----|
| Loading | Shimmer on rate section |
| Success | Show rate details |
| Error | Error message with retry |

---

## Mock Swap Calculations

### Calculation Model

```kotlin
data class SwapQuote(
    val fromCoin: String,
    val toCoin: String,
    val fromAmount: BigDecimal,
    val toAmount: BigDecimal,
    val rate: BigDecimal,
    val priceImpact: BigDecimal,
    val minReceived: BigDecimal,
    val fee: BigDecimal,
    val feeCoin: String,
    val expiresAt: Long
)

data class SwapCalculation(
    val inputAmount: BigDecimal,
    val exchangeRate: BigDecimal,
    val slippageTolerance: BigDecimal,
    val platformFeePercent: BigDecimal
) {
    fun calculate(): SwapQuote {
        // Calculate output amount
        val outputAmount = inputAmount * exchangeRate
        
        // Calculate fee
        val fee = inputAmount * (platformFeePercent / 100)
        
        // Calculate minimum received with slippage
        val minReceived = outputAmount * (1 - slippageTolerance / 100)
        
        return SwapQuote(
            fromAmount = inputAmount,
            toAmount = outputAmount,
            rate = exchangeRate,
            minReceived = minReceived,
            fee = fee
        )
    }
}
```

### Sample Calculations

#### BTC → ETH Swap

**Input**:
| Parameter | Value |
|-----------|-------|
| From Coin | BTC |
| To Coin | ETH |
| Amount | 0.1 BTC |
| BTC Price | $42,500 |
| ETH Price | $2,300 |
| Slippage | 1% |
| Platform Fee | 0.2% |

**Calculation**:
```
Exchange Rate = BTC Price / ETH Price
             = 42,500 / 2,300
             = 18.478 ETH per BTC

Output Amount = 0.1 * 18.478
              = 1.8478 ETH

Platform Fee = 0.1 * 0.002
             = 0.0002 BTC

Minimum Received = 1.8478 * (1 - 0.01)
                 = 1.8293 ETH
```

**Result**:
| Field | Value |
|-------|-------|
| You Pay | 0.1 BTC |
| You Receive | 1.8478 ETH |
| Rate | 1 BTC = 18.478 ETH |
| Min Received | 1.8293 ETH |
| Fee | 0.0002 BTC |

#### ETH → USDT Swap

**Input**:
| Parameter | Value |
|-----------|-------|
| From Coin | ETH |
| To Coin | USDT |
| Amount | 2.5 ETH |
| ETH Price | $2,300 |
| Slippage | 0.5% |
| Platform Fee | 0.2% |

**Calculation**:
```
Exchange Rate = 2,300 USDT per ETH

Output Amount = 2.5 * 2,300
              = 5,750 USDT

Platform Fee = 2.5 * 0.002
             = 0.005 ETH

Minimum Received = 5,750 * (1 - 0.005)
                 = 5,721.25 USDT
```

**Result**:
| Field | Value |
|-------|-------|
| You Pay | 2.5 ETH |
| You Receive | 5,750 USDT |
| Rate | 1 ETH = 2,300 USDT |
| Min Received | 5,721.25 USDT |
| Fee | 0.005 ETH |

### Price Impact Calculation

**Formula**:
```
Price Impact = (Trade Size / Pool Liquidity) * 100
```

**Impact Levels**:
| Impact | Color | Warning |
|--------|-------|---------|
| < 0.5% | Green | None |
| 0.5% - 1% | Green | None |
| 1% - 3% | Yellow | "Moderate impact" |
| 3% - 5% | Orange | "High impact" |
| > 5% | Red | "Very high impact" |

---

## Swap Result States

### Success State

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                      ✓                                  │
│                  Swap Complete                          │
│                                                         │
│          You sent 0.1 BTC                               │
│          You received 1.8478 ETH                        │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Transaction Details                             │   │
│  │  ─────────────────────────────────────────────  │   │
│  │  Rate              1 BTC = 18.478 ETH           │   │
│  │  Fee               0.0002 BTC                   │   │
│  │  Time              Feb 24, 2024, 14:32          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │      [View Transaction]    [Swap Again]         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Failure State

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                      ✗                                  │
│                  Swap Failed                            │
│                                                         │
│          Transaction could not be completed             │
│          Reason: Insufficient liquidity                 │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │      [Try Again]    [Contact Support]           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Error Types

| Error | Message | Action |
|-------|---------|--------|
| Insufficient Balance | "Not enough {COIN}" | Show balance |
| Rate Expired | "Rate has expired" | Refresh rate |
| High Slippage | "Price moved too much" | Adjust slippage |
| Network Error | "Network error" | Retry |
| Liquidity Error | "Insufficient liquidity" | Try smaller amount |

---

## Input Validation

### Amount Validation

| Rule | Error Message |
|------|---------------|
| Empty amount | "Enter an amount" |
| Zero amount | "Amount must be greater than 0" |
| Exceeds balance | "Insufficient {COIN} balance" |
| Below minimum | "Minimum swap is {MIN} {COIN}" |
| Invalid decimal | "Invalid amount format" |

### Coin Pair Validation

| Rule | Error Message |
|------|---------------|
| Same coin selected | "Cannot swap to the same coin" |
| Pair not available | "This pair is not available for swap" |
| Coin suspended | "{COIN} swaps are temporarily disabled" |

---

## Notes

1. Rates are fetched from liquidity pools
2. Auto-refresh prevents stale rates
3. Slippage protects against price movements
4. Price impact warns about large trades
5. Minimum received guarantees output
6. Platform fee is clearly displayed
7. Network fees are estimated separately
8. All values update in real-time
9. Confirmation shows complete breakdown
10. Transaction history records all swaps