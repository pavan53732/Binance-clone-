# Binance UI/UX Knowledge Base - Dialogs & Bottom Sheets

## Overview

This document provides comprehensive documentation of all dialog and bottom sheet components used in the Binance Android app, including types, dimensions, styling, and usage guidelines.

---

## Dialog Types

### 1. Alert Dialogs

**Usage**: Important notifications, warnings

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                      ⚠️                                 │
│                 Attention Required                      │
│                                                         │
│     Your session will expire in 5 minutes.              │
│     Please save your work and re-login.                 │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              [Continue]                          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Width | 85% screen width (max 320dp) |
| Corner Radius | 12dp |
| Background Color | `#1E2329` |
| Padding | 24dp |
| Dim Amount | 0.32 (32% black overlay) |

**Internal Elements**:
| Element | Style |
|---------|-------|
| Icon | 48dp, centered |
| Title | 18sp, Medium, White, centered |
| Message | 14sp, Regular, `#848E9C`, centered |
| Button | Full width, 40dp height |

### 2. Confirmation Dialogs

**Usage**: Action confirmations, deletions

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│              Cancel Order?                              │
│                                                         │
│     Are you sure you want to cancel this order?         │
│     This action cannot be undone.                       │
│                                                         │
│  ┌─────────────────┐  ┌─────────────────────────────┐  │
│  │     No, Keep    │  │      Yes, Cancel            │  │
│  └─────────────────┘  └─────────────────────────────┘  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Width | 85% screen width (max 320dp) |
| Corner Radius | 12dp |
| Background | `#1E2329` |
| Padding | 24dp |

**Button Layout**:
| Button | Style | Width |
|--------|-------|-------|
| Negative | Secondary (outline) | 45% |
| Positive | Primary (yellow) or Danger (red) | 45% |

### 3. Loading Dialogs

**Usage**: Processing operations, API calls

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                    ◐                                   │
│                  (spinner)                              │
│                                                         │
│              Processing...                              │
│                                                         │
│     Please wait while we complete your request.         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Width | 200dp |
| Height | 160dp |
| Corner Radius | 12dp |
| Background | `#1E2329` |
| Spinner Size | 48dp |
| Spinner Color | `#F0B90B` |

**Loading States**:
| State | Text |
|-------|------|
| Processing | "Processing..." |
| Submitting | "Submitting order..." |
| Loading | "Loading..." |
| Connecting | "Connecting..." |

### 4. Success/Error Dialogs

**Success Layout**:
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                      ✓                                  │
│                   (checkmark)                           │
│                                                         │
│                  Success!                               │
│                                                         │
│     Your order has been placed successfully.            │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                   [OK]                           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Error Layout**:
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│                      ✗                                  │
│                    (cross)                              │
│                                                         │
│                   Error                                 │
│                                                         │
│     Failed to place order. Please try again.            │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              [Try Again]                         │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Success | Error |
|----------|---------|-------|
| Icon Color | `#2EBD85` | `#F6465D` |
| Icon Size | 48dp | 48dp |
| Title Color | `#2EBD85` | `#F6465D` |
| Auto-dismiss | 2 seconds | No |

---

## Bottom Sheet Types

### 1. Coin Selector

**Usage**: Select cryptocurrency for trading, deposit, withdraw

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│  ─────                                                  │
│  Select Coin                                           │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔍 Search coin...                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Popular                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ₿  BTC    Bitcoin          $42,500             │   │
│  │  ⟠  ETH    Ethereum         $2,300              │   │
│  │  ◆  BNB    BNB              $310                │   │
│  │  ₮  USDT   Tether           $1.00               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  All Coins                                             │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ◎  ADA   Cardano           $0.50               │   │
│  │  ◎  DOT   Polkadot          $7.50               │   │
│  │  ...                                            │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 70% screen height (max) |
| Corner Radius (top) | 12dp |
| Background | `#1E2329` |
| Handle Width | 32dp |
| Handle Height | 4dp |
| Handle Color | `#474D57` |
| Handle Margin Top | 8dp |

**Internal Elements**:
| Element | Style |
|---------|-------|
| Title | 18sp, Medium, White |
| Search Bar | 44dp height |
| List Item | 64dp height |
| Divider | 1dp, `#2B3139` |

### 2. Network Selector

**Usage**: Select blockchain network for deposit/withdraw

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│  ─────                                                  │
│  Select Network                                        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○  BTC (Bitcoin)                               │   │
│  │     Network fee: ~$0.50                         │   │
│  │     ⏱ ~10-30 minutes                           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ●  BSC (BEP20)                          ✓      │   │
│  │     Network fee: ~$0.10                         │   │
│  │     ⏱ ~1-5 minutes                             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ○  ETH (ERC20)                                 │   │
│  │     Network fee: ~$5.00                         │   │
│  │     ⏱ ~1-5 minutes                             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              [Confirm]                           │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | Wrap content |
| Corner Radius | 12dp |
| Background | `#1E2329` |
| Item Height | 72dp |

**Network Item Elements**:
| Element | Style |
|---------|-------|
| Network Name | 16sp, Medium, White |
| Fee Info | 12sp, `#848E9C` |
| Time Info | 12sp, `#848E9C` |
| Radio Button | 20dp |
| Check Icon | 24dp, `#F0B90B` |

### 3. Filter Options

**Usage**: Filter transactions, orders, markets

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│  ─────                                                  │
│  Filter Options                              [Reset]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Transaction Type                                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [✓] All    [ ] Deposit   [ ] Withdraw          │   │
│  │  [ ] Trade  [ ] Transfer                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Status                                                │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [✓] All    [ ] Completed   [ ] Pending         │   │
│  │  [ ] Failed                                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Date Range                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [✓] All Time                                    │   │
│  │  [ ] Today                                       │   │
│  │  [ ] Last 7 Days                                 │   │
│  │  [ ] Last 30 Days                                │   │
│  │  [ ] Custom Range                                │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              [Apply Filters]                     │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | Wrap content |
| Max Height | 80% screen height |
| Corner Radius | 12dp |
| Background | `#1E2329` |

**Filter Chip Style**:
| Property | Value |
|----------|-------|
| Height | 36dp |
| Corner Radius | 18dp |
| Text Size | 14sp |
| Selected Background | `#F0B90B` |
| Unselected Background | `#2B3139` |

### 4. Order Confirmation

**Usage**: Confirm trade before execution

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│  ─────                                                  │
│  Confirm Order                                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Buy BTC/USDT                                    │   │
│  │  ─────────────────────────────────────────────  │   │
│  │  Price              42,500.00 USDT              │   │
│  │  Amount             0.10000000 BTC              │   │
│  │  Total              4,250.00 USDT               │   │
│  │  Fee                0.0001 BTC (0.1%)           │   │
│  │  ─────────────────────────────────────────────  │   │
│  │  You will receive   0.0999 BTC                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ⚠️ Price may change due to market volatility   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │         [Cancel]    [Confirm Order]             │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | Wrap content |
| Corner Radius | 12dp |
| Background | `#1E2329` |
| Padding | 20dp |

**Order Detail Elements**:
| Element | Style |
|---------|-------|
| Title | 18sp, Medium, White |
| Label | 14sp, `#848E9C` |
| Value | 16sp, White |
| Total Row | 18sp, Medium, `#F0B90B` |

### 5. Share Options

**Usage**: Share content, invite friends

**Layout**:
```
┌─────────────────────────────────────────────────────────┐
│  ─────                                                  │
│  Share                                                 │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐              │
│  │ 📱  │ │ 💬  │ │ 📧  │ │ 📋  │ │ ⋯  │              │
│  │SMS  │ │Msg  │ │Email│ │Copy │ │More│              │
│  └─────┘ └─────┘ └─────┘ └─────┘ └─────┘              │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Referral Link                                   │   │
│  │  ┌─────────────────────────────────────────┐   │   │
│  │  │  https://binance.com/ref/ABC123  [📋]   │   │   │
│  │  └─────────────────────────────────────────┘   │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | Wrap content |
| Corner Radius | 12dp |
| Background | `#1E2329` |

**Share Icon Style**:
| Property | Value |
|----------|-------|
| Icon Size | 48dp |
| Icon Color | White |
| Label Size | 12sp |
| Label Color | `#848E9C` |

---

## Dimensions Summary

### Dialog Dimensions

| Dialog Type | Width | Height | Radius |
|-------------|-------|--------|--------|
| Alert | 85% (max 320dp) | Wrap | 12dp |
| Confirmation | 85% (max 320dp) | Wrap | 12dp |
| Loading | 200dp | 160dp | 12dp |
| Success/Error | 85% (max 320dp) | Wrap | 12dp |

### Bottom Sheet Dimensions

| Sheet Type | Height | Top Radius | Handle |
|------------|--------|------------|--------|
| Coin Selector | 70% max | 12dp | 32x4dp |
| Network Selector | Wrap | 12dp | 32x4dp |
| Filter Options | 80% max | 12dp | 32x4dp |
| Order Confirmation | Wrap | 12dp | 32x4dp |
| Share Options | Wrap | 12dp | 32x4dp |

---

## Styling Specifications

### Background Colors

| Component | Color |
|-----------|-------|
| Dialog Background | `#1E2329` |
| Bottom Sheet Background | `#1E2329` |
| Dim Overlay | `#000000` at 32% |
| Handle Color | `#474D57` |

### Text Styles

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Dialog Title | 18sp | Medium | White |
| Dialog Message | 14sp | Regular | `#848E9C` |
| Sheet Title | 18sp | Medium | White |
| Item Title | 16sp | Regular | White |
| Item Subtitle | 12sp | Regular | `#848E9C` |
| Button Text | 16sp | Medium | Context-based |

### Button Styles

| Button Type | Background | Text Color |
|-------------|------------|------------|
| Primary | `#F0B90B` | `#000000` |
| Secondary | Transparent + Border | `#F0B90B` |
| Danger | `#F6465D` | `#FFFFFF` |
| Cancel | `#2B3139` | `#848E9C` |

---

## Animation Specifications

### Dialog Animations

| Animation | Duration | Interpolator |
|-----------|----------|--------------|
| Enter | 200ms | Decelerate |
| Exit | 150ms | Accelerate |
| Dim In | 200ms | Linear |
| Dim Out | 150ms | Linear |

### Bottom Sheet Animations

| Animation | Duration | Interpolator |
|-----------|----------|--------------|
| Slide Up | 300ms | Decelerate |
| Slide Down | 250ms | Accelerate |
| Drag | Real-time | - |
| Fling | 200ms | - |

---

## Behavior Specifications

### Dialog Behavior

| Property | Value |
|----------|-------|
| Cancelable on Back | Yes (except loading) |
| Cancelable on Touch Outside | Yes (except loading) |
| Dim Background | Yes |
| Modal | Yes |

### Bottom Sheet Behavior

| Property | Value |
|----------|-------|
| Cancelable on Back | Yes |
| Cancelable on Touch Outside | Yes |
| Draggable | Yes |
| Half-expanded State | No |
| Skip Collapsed | Yes |
| Hideable | Yes |

---

## Implementation Code

### Dialog Creation

```kotlin
// Alert Dialog
val dialog = AlertDialog.Builder(context)
    .setTitle("Attention Required")
    .setMessage("Your session will expire in 5 minutes.")
    .setPositiveButton("Continue") { _, _ -> }
    .create()
dialog.window?.setBackgroundDrawableResource(R.drawable.dialog_background)
dialog.show()
```

### Bottom Sheet Creation

```kotlin
// Bottom Sheet
val bottomSheet = BottomSheetDialog(context)
val view = LayoutInflater.from(context)
    .inflate(R.layout.bottom_sheet_coin_selector, null)
bottomSheet.setContentView(view)
bottomSheet.behavior.peekHeight = (screenHeight * 0.7).toInt()
bottomSheet.show()
```

---

## Notes

1. All dialogs use rounded corners (12dp radius)
2. Bottom sheets have drag handle for affordance
3. Loading dialogs are not cancelable
4. Success dialogs auto-dismiss after 2 seconds
5. Error dialogs require user action to dismiss
6. Bottom sheets can be dismissed by swipe down
7. Dialog width is capped at 320dp for tablets
8. All text is centered in alert dialogs
9. Confirmation dialogs have clear action buttons
10. Filter sheets maintain state during session