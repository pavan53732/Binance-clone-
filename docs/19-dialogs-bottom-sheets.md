# Binance Dialogs & Bottom Sheets Documentation

Interaction components are categorized by their role in **Exchange (CeFi)** or **Web3 Wallet (DeFi)** workflows.

---

## 1. Unified Dialog Components

### Global Alert & Confirmation

- **Confirmation:** Two-button layout for high-stakes actions like "Cancel Order".
- **Margin Info Dialog:** Explains Risk Ratio and Liquidation (Trade Page).

### Margin Liquidation Warning

Used when Margin Level falls below 1.1.

| Element         | Specification                 | Style                       |
| --------------- | ----------------------------- | --------------------------- |
| **Title**       | "Margin Risk Warning"         | 18sp, Bold, `#F6465D`       |
| **Description** | "Risk is high. Repay debt..." | 14sp, Regular, `#848E9C`    |
| **Link**        | "Learn more about Margin"     | 12sp, Medium, `#F0B90B`     |
| **CTA**         | "Add Collateral"              | Yellow primary button, 40dp |

---

## 2. Web3 Wallet Specific Sheets (DeFi)

Decentralized interactions require specialized confirmation flows to handle on-chain approvals and signatures.

### Signature Request (Bottom Sheet)

Used when a DApp requests a message signature (e.g., Login with Wallet).
| Element | Description |
|---------|-------------|
| **Origin** | The URL/Name of the DApp requesting the sign |
| **Message** | The raw or formatted text/data to be signed |
| **Sign Button**| Confirm the signature |

### Token Approval Sheet (Limited/Unlimited)

Used before a protocol can spend a user's tokens.
| Feature | Details |
|---------|---------|
| **Asset** | Token icon and balance |
| **Limit** | Input field to set maximum spend or "Unlimited" toggle |
| **Risk Warning**| Prominent text warning about protocol permissions |

### Network / Wallet Selector

| Feature          | Style                                                     |
| ---------------- | --------------------------------------------------------- |
| **Network Grid** | Icons for Ethereum, BSC, Polygon, Solana                  |
| **Wallet List**  | Vertical list with yellow checkmarks for active selection |

### Asset Selector Bottom Sheet

**Usage**: Primary pair switching in Trade/Alpha.

- **Header**:
  - **Search Bar**: "Search token name or address" with "Cancel" text-link.
  - **Filter Chips**: Horizontal scroll of capsules (`Hot`, `New`, `Alpha`, `Point+`, `Stocks`).
- **Body**:
  - **Categorized Sections**: Vertical lists of tokens with network badges and profit multipliers (e.g., `x10`).
- **Footer**: Sticky "Browse More" link with right arrow.
- **Background**: Semi-transparent yellow (#1AF0B90B).
- **Icon**: `ic_info_outline` (16dp, Yellow).
- **Text**: "The asset data updates might be delayed..." (12sp, Medium, Yellow).

### DeFi Status & Warning Boxes

**Usage**: Web3 Assets (DeFi tab) and Earn pages.

- **Type**: Info Alert Box.
- **Background**: Semi-transparent yellow (#1AF0B90B).
- **Icon**: `ic_info_outline` (16dp, Yellow).
- **Text**: "The asset data updates might be delayed..." (12sp, Medium, Yellow).

### DApp Signature Confirmation Flow

**Usage**: Web3 Discovery/WalletConnect.

- **Handle**: standard 32x4dp grey handle.
- **DApp Info**: Icon + Domain (e.g., pancake.run) + Shield (Security verified).
- **Message Area**: Darkened code block with scrollable text (Raw transaction JSON).

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
| Divider | 1dp, `#2B3139` |

### 3. Asset Detail Sheet (Assets Page)

**Usage**: Detailed overview of a specific coin when tapped in the Assets list.

**Features**:

- Balance breakdown (Available, Frozen, In Order).
- Action buttons: Buy, Deposit, Withdraw, Trade, Earn.
- Recent transaction history for the specific asset.

| Element          | Specification              | Details                          |
| :--------------- | :------------------------- | :------------------------------- |
| **Header**       | Coin Icon + Name + Balance | 20sp, Bold title                 |
| **Action Grid**  | 5-Column Button Layout     | Iconic style, 48dp icons         |
| **History Item** | Type, Amount, Time, Status | Consistent with Transaction List |

### 2. Futures Trading Pair Selector

**Usage**: Switching pairs in Futures market (shows Symbol, Price, and 24h Change).

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│  ───── (Drag Handle: 32x4dp, Rounded)                   │
│  Select Futures Pair                                    │
├─────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────┐   │
│  │  🔍 Search pairs...                             │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Symbol / Vol      Price          24h Change            │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ★ BTCUSDT      42,500.21       +2.45%              │   │
│  │    Perp  2.4B                                       │   │
│  ├─────────────────────────────────────────────────┤   │
│  │  ★ ETHUSDT      2,280.45        -1.12%              │   │
│  │    Perp  850M                                       │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property         | Value                                                 |
| :--------------- | :---------------------------------------------------- |
| **Columns**      | Symbol (Left), Price (Center), 24h Change (Right)     |
| **Symbol Style** | 16sp, Medium, White (includes leading Star icon)      |
| **Volume/Tag**   | 12sp, `#848E9C` (e.g., "Perp 2.41B")                  |
| **Price Style**  | 14sp, Regular, White                                  |
| **Change Style** | 14sp, Color-coded (Green: `#2EBD85` / Red: `#F6465D`) |

### 6. Futures Options Activation (Overlay)

**Usage**: One-time prompt when entering Binance Options.

**Layout**:

- **Header**: Large Yellow Gradient Graphic + "Welcome to Binance Options"
- **Benefits List**:
  - `Risk Control`: Manage downside with limited loss.
  - `High Leverage`: Capital efficiency.
  - `Low Threshold`: Start with small amounts.
- **Action**: "Activate" (Yellow primary button) + "Skip" (Text-only link).

### 3. Network Selector

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

| Dialog Type   | Width           | Height | Radius |
| ------------- | --------------- | ------ | ------ |
| Alert         | 85% (max 320dp) | Wrap   | 12dp   |
| Confirmation  | 85% (max 320dp) | Wrap   | 12dp   |
| Loading       | 200dp           | 160dp  | 12dp   |
| Success/Error | 85% (max 320dp) | Wrap   | 12dp   |

### Bottom Sheet Dimensions

| Sheet Type         | Height  | Top Radius | Handle |
| ------------------ | ------- | ---------- | ------ |
| Coin Selector      | 70% max | 12dp       | 32x4dp |
| Network Selector   | Wrap    | 12dp       | 32x4dp |
| Filter Options     | 80% max | 12dp       | 32x4dp |
| Order Confirmation | Wrap    | 12dp       | 32x4dp |
| Share Options      | Wrap    | 12dp       | 32x4dp |

---

## Styling Specifications

### Background Colors

| Component               | Color            |
| ----------------------- | ---------------- |
| Dialog Background       | `#1E2329`        |
| Bottom Sheet Background | `#1E2329`        |
| Dim Overlay             | `#000000` at 32% |
| Handle Color            | `#474D57`        |

### Text Styles

| Element        | Size | Weight  | Color         |
| -------------- | ---- | ------- | ------------- |
| Dialog Title   | 18sp | Medium  | White         |
| Dialog Message | 14sp | Regular | `#848E9C`     |
| Sheet Title    | 18sp | Medium  | White         |
| Item Title     | 16sp | Regular | White         |
| Item Subtitle  | 12sp | Regular | `#848E9C`     |
| Button Text    | 16sp | Medium  | Context-based |

### Button Styles

| Button Type | Background           | Text Color |
| ----------- | -------------------- | ---------- |
| Primary     | `#F0B90B`            | `#000000`  |
| Secondary   | Transparent + Border | `#F0B90B`  |
| Danger      | `#F6465D`            | `#FFFFFF`  |
| Cancel      | `#2B3139`            | `#848E9C`  |

---

## Animation Specifications

### Dialog Animations

| Animation | Duration | Interpolator |
| --------- | -------- | ------------ |
| Enter     | 200ms    | Decelerate   |
| Exit      | 150ms    | Accelerate   |
| Dim In    | 200ms    | Linear       |
| Dim Out   | 150ms    | Linear       |

### Bottom Sheet Animations

| Animation  | Duration  | Interpolator |
| ---------- | --------- | ------------ |
| Slide Up   | 300ms     | Decelerate   |
| Slide Down | 250ms     | Accelerate   |
| Drag       | Real-time | -            |
| Fling      | 200ms     | -            |

---

## Behavior Specifications

### Dialog Behavior

| Property                    | Value                |
| --------------------------- | -------------------- |
| Cancelable on Back          | Yes (except loading) |
| Cancelable on Touch Outside | Yes (except loading) |
| Dim Background              | Yes                  |
| Modal                       | Yes                  |

### Bottom Sheet Behavior

| Property                    | Value |
| --------------------------- | ----- |
| Cancelable on Back          | Yes   |
| Cancelable on Touch Outside | Yes   |
| Draggable                   | Yes   |
| Half-expanded State         | No    |
| Skip Collapsed              | Yes   |
| Hideable                    | Yes   |

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
