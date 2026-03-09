# Binance UI/UX Knowledge Base - Input Fields

## Overview

This document provides comprehensive documentation of all input field types used in the Binance Android app, including dimensions, label styles, error states, helper text, and input validations.

---

## Input Field Types

### 1. Email/Phone Inputs

**Usage**: Login, registration, account settings

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Email Address                                          │
│  ┌─────────────────────────────────────────────────┐   │
│  │  📧 user@example.com                            │   │
│  └─────────────────────────────────────────────────┘   │
│  Enter your registered email                           │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 52dp |
| Corner Radius | 8dp |
| Background Color | `#1E2329` |
| Border Width | 1dp |
| Border Color (Normal) | `#2B3139` |
| Border Color (Focused) | `#F0B90B` |
| Border Color (Error) | `#F6465D` |
| Text Size | 16sp |
| Text Color | `#FFFFFF` |
| Hint Color | `#B7BDC6` |
| Padding Horizontal | 15dp |
| Label Text Size | 14sp |
| Label Color | `#848E9C` |
| Helper Text Size | 12sp |
| Helper Text Color | `#848E9C` |
| Error Text Size | 12sp |
| Error Text Color | `#F6465D` |

**Input Validations**:
| Rule | Regex/Condition | Error Message |
|------|-----------------|---------------|
| Required | Not empty | "Email is required" |
| Valid Format | `^[A-Za-z0-9+_.-]+@(.+)$` | "Invalid email format" |
| Max Length | 254 characters | "Email too long" |

**Phone Input**:
| Rule | Regex/Condition | Error Message |
|------|-----------------|---------------|
| Required | Not empty | "Phone number is required" |
| Valid Format | Country-specific | "Invalid phone number" |
| Min Length | 10 digits | "Phone number too short" |

---

### 2. Password Inputs

**Usage**: Login, registration, change password

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Password                                               │
│  ┌─────────────────────────────────────────────────┐   │
│  │  ●●●●●●●●●●●●                          👁       │   │
│  └─────────────────────────────────────────────────┘   │
│  Must be at least 8 characters                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 52dp |
| Corner Radius | 8dp |
| Background Color | `#1E2329` |
| Text Size | 16sp |
| Input Type | textPassword |
| Show/Hide Icon | 24dp, right side |

**Password Visibility Toggle**:
| State | Icon | Color |
|-------|------|-------|
| Hidden | Eye closed | `#848E9C` |
| Visible | Eye open | `#F0B90B` |

**Input Validations**:
| Rule | Condition | Error Message |
|------|-----------|---------------|
| Required | Not empty | "Password is required" |
| Min Length | 8 characters | "Minimum 8 characters" |
| Max Length | 128 characters | "Password too long" |
| Complexity | 1 upper, 1 lower, 1 number | "Password too weak" |

**Password Strength Indicator**:
| Strength | Color | Description |
|----------|-------|-------------|
| Weak | `#F6465D` | < 3 criteria met |
| Medium | `#F0B90B` | 3 criteria met |
| Strong | `#2EBD85` | All criteria met |

**Strength Criteria**:

- Minimum 8 characters
- At least 1 uppercase letter
- At least 1 lowercase letter
- At least 1 number
- At least 1 special character

---

### 3. Search Bar

**Usage**: Home screen, markets search, coin selection

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  🔥  HOLO hot search                                   🔍 │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 44dp |
| Background | `#2B3139` (Rounded 22dp) |
| Left Icon | Flame icon (contextual) |
| Placeholder | "HOLO hot search" |
| Right Icon | Search (Magnifying glass) |

**Search Icon**:
| Property | Value |
|----------|-------|
| Position | Left, 12dp from edge |
| Size | 24dp |
| Color | `#848E9C` |

**Clear Button**:
| Property | Value |
|----------|-------|
| Position | Right, 12dp from edge |
| Size | 24dp |
| Color | `#848E9C` |
| Visibility | Gone when empty |

---

### 4. Amount Inputs (with Currency)

**Usage**: Trading, deposit, withdraw, swap

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Amount                                                 │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [-] 0.10000000 [+]                   BTC [▼]   │   │
│  └─────────────────────────────────────────────────┘   │
│  Available: 0.5 BTC    [25%] [50%] [75%] [100%]       │
│  ≈ $4,250.00                                            │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 52dp |
| Corner Radius | 8dp |
| Background Color | `#1E2329` |
| Text Size | 20sp (amount), 14sp (currency) |
| Text Color | `#FFFFFF` |
| Input Type | numberDecimal |
| Decimal Places | 8 (crypto), 2 (fiat) |
| Precision Controls | `[-]` and `[+]` icon buttons inside the track boundaries |

**Micro-Details**:

- **Dotted Underlines**: Used on component labels (e.g., `Price`, `Amount`, `Margin Mode`, `Leverage`, `Order Type`, `Cost`, `TP/SL`, `Reduce Only`) to indicate active tooltip triggers.
- **Precision Controls**: `[-]` and `[+]` clickable buttons at the horizontal extremities of numeric input fields.
- **Asset Mode Toggle**: Circular toggle labeled `S` (Single Asset Mode) or `M` (Multi-Asset Mode).
- **Placeholder**: `BBO` gray badge inside Price fields.

**Currency Selector**:
| Property | Value |
|----------|-------|
| Position | Right side |
| Format | "SYMBOL [▼]" |
| Text Size | 14sp |
| Text Color | `#F0B90B` |

**Percentage Buttons**:
| Property | Value |
|----------|-------|
| Height | 28dp |
| Min Width | 48dp |
| Corner Radius | 4dp |
| Text Size | 12sp |
| Background | `#2B3139` |
| Text Color | `#848E9C` |
| Selected Color | `#F0B90B` |

**Input Validations**:
| Rule | Condition | Error Message |
|------|-----------|---------------|
| Required | Not empty | "Enter an amount" |
| Valid Number | Is numeric | "Invalid amount" |
| Positive | > 0 | "Amount must be positive" |
| Min Amount | >= minimum | "Minimum is {MIN}" |
| Max Amount | <= balance | "Insufficient balance" |
| Decimals | Within limit | "Too many decimal places" |

---

### 5. Price Inputs

**Usage**: Limit orders, stop-limit orders

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Price (USDT)                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [-] 42,500.00 [+]                [BBO] [+]   │   │
│  └─────────────────────────────────────────────────┘   │
│  Last Price: 42,510.00                                  │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 52dp |
| Text Size | 20sp |
| Input Type | numberDecimal |
| Decimal Places | 2 (USDT pairs), 8 (BTC pairs) |
| Thousand Separator | Comma |
| Placeholder | `BBO` label in `#848E9C` (when empty/hint) |

**Increment Buttons**:
| Property | Value |
|----------|-------|
| Size | 32dp x 32dp (circular) |
| Icon | Minus/Plus in 16sp |
| Position | Horizontal extremities (left/right of input) |
| Step | Price tick size (exchange-defined) |
| Color (Normal) | `#848E9C` Medium Gray |
| Color (Hovered) | Yellow `#F0B90B` |
| Repeat Behavior | Hold for continuous increment (300ms delay, 100ms repeat) |
| Haptic Feedback | Light vibration on step (if enabled) |

**"Suggest [Price]" Label** (NEW):
- **Position**: Below input baseline (2dp gap), left-aligned
- **Font**: 10sp Regular
- **Color**: `#848E9C` Muted Gray
- **Dynamic Content**: Shows calculated suggestion (e.g., "Suggest 678.07")
- **Behavior**:
  - Appears only on field focus
  - Disappears on blur
  - Updates in real-time with market
  - Tap to auto-fill suggested price
- **Visibility Logic**:
  - Hidden when user entered manual value
  - Hidden for Market order type
  - Shown for Limit, Stop-Limit orders

**Embedded Currency Pill** (NEW):
- **Format**: "USDT ▼" inside right boundary of input
- **Background**: `#2B3139` rounded pill shape
- **Corner Radius**: 16dp (fully rounded)
- **Text**: 13sp White `#FFFFFF`
- **Arrow**: 12dp chevron `#848E9C` pointing down
- **Action**: Tap expands dropdown to switch quote currencies (USDT/USDC/BUSD)
- **Padding**: 8dp horizontal, 6dp vertical
- **Min Width**: 64dp

**Decimal Precision Rules by Pair Type** (ENHANCED):
| Pair Type | Decimals | Example | Auto-Formatting |
|-----------|----------|---------|-----------------|
| BTC pairs | 8 decimals | 0.00000000 | Rounds on blur |
| ETH pairs | 5 decimals | 0.00000 | Rounds on blur |
| USDT pairs | 2 decimals | 0.00 | Rounds on blur |
| BNB pairs | 3 decimals | 0.000 | Rounds on blur |
| Low-price altcoins | 4-6 decimals | 0.0000 | Dynamic by tick size |

**Market Price Placeholder** (NEW):
- **Trigger**: Market order type selected
- **Display**: "Market Price" in 14sp Italic Gray `#848E9C`
- **Position**: Centered in input field
- **Behavior**: Read-only, non-editable
- **Purpose**: Indicates price fills at current market rate

**Input Validations**:
| Rule | Condition | Error Message |
|------|-----------|---------------|
| Required | Not empty | "Enter a price" |
| Valid Number | Is numeric | "Invalid price" |
| Positive | > 0 | "Price must be positive" |
| Tick Size | Multiple of tick | "Invalid price increment" |
| Min Price | >= minimum | "Price too low" |
| Max Price | <= maximum | "Price too high" |

**BBO (Best Bid/Offer) Button** (ENHANCED):
- **Position**: Far right INSIDE input container (flush with edge)
- **Size**: 48dp width x 32dp height
- **Background**: `#2B3139` Dark Gray
- **Text**: "BBO" in 12sp Yellow `#F0B90B`
- **Border**: None (seamless integration)
- **Action**: Instantly populates best bid price from order book
- **Visibility**: 
  - Always visible in Margin mode
  - Optional in Spot mode (user preference)
  - Hidden in Market order type
- **Interaction**: Single tap fills price, no confirmation needed
- **Cooldown**: 100ms debounce to prevent accidental double-taps
- **Integration**: Embedded within input track boundaries, appears as part of input field

---

### 6. Address Inputs (with Paste/Scan QR)

**Usage**: Withdraw, deposit address

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Withdrawal Address                                     │
│  ┌─────────────────────────────────────────────────┐   │
│  │  0x1234567890abcdef...          [📋] [📷]      │   │
│  └─────────────────────────────────────────────────┘   │
│  Only send ETH to this address                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 52dp (single line) or 80dp (multi-line) |
| Text Size | 14sp |
| Input Type | textNoSuggestions |
| Max Lines | 2 |
| Ellipsize | Middle |

**Action Buttons**:
| Button | Icon | Action |
|--------|------|--------|
| Paste | Clipboard | Paste from clipboard |
| Scan | QR code | Open camera scanner |

**Button Specifications**:
| Property | Value |
|----------|-------|
| Size | 32dp x 32dp |
| Icon Size | 20dp |
| Color | `#F0B90B` |
| Padding | 8dp |

**Input Validations**:
| Rule | Condition | Error Message |
|------|-----------|---------------|
| Required | Not empty | "Address is required" |
| Valid Format | Coin-specific | "Invalid address format" |
| Correct Network | Network check | "Wrong network address" |
| Not Own Address | Compare to assets | "Cannot withdraw to own address" |

**Address Format Validation**:
| Coin | Format | Length |
|------|--------|--------|
| BTC | Base58/Bech32 | 26-90 chars |
| ETH | Hex with 0x | 42 chars |
| BNB | Bech32 | 42 chars |
| USDT | Various | Network-dependent |

---

## Input Field Dimensions

### Standard Dimensions

| Field Type | Height   | Corner Radius | Padding H |
| ---------- | -------- | ------------- | --------- |
| Standard   | 52dp     | 8dp           | 15dp      |
| Compact    | 44dp     | 8dp           | 12dp      |
| Large      | 60dp     | 12dp          | 16dp      |
| Multi-line | 80-120dp | 8dp           | 15dp      |

### Label Specifications

| Property           | Value                      |
| ------------------ | -------------------------- |
| Text Size          | 14sp                       |
| Text Color         | `#848E9C`                  |
| Font Weight        | Regular                    |
| Margin Bottom      | 8dp                        |
| Required Indicator | Asterisk (\*) in `#F6465D` |

### Helper Text Specifications

| Property    | Value           |
| ----------- | --------------- |
| Text Size   | 12sp            |
| Text Color  | `#848E9C`       |
| Font Weight | Regular         |
| Margin Top  | 4dp             |
| Icon Size   | 14dp (optional) |

---

## Error States

### Error Display

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Email Address *                                        │
│  ┌─────────────────────────────────────────────────┐   │
│  │  invalid-email                        ⚠️        │   │
│  └─────────────────────────────────────────────────┘   │
│  ⚠️ Please enter a valid email address                 │
└─────────────────────────────────────────────────────────┘
```

**Error State Specifications**:
| Property | Value |
|----------|-------|
| Border Color | `#F6465D` |
| Error Icon | Warning triangle, 20dp |
| Error Text Color | `#F6465D` |
| Error Text Size | 12sp |
| Background | `#1AF6465D` (10% red tint) |

### Error Types

| Error Type   | Display       | Duration        |
| ------------ | ------------- | --------------- |
| Inline Error | Below field   | Until corrected |
| Toast Error  | Toast message | 3 seconds       |
| Dialog Error | Alert dialog  | Until dismissed |
| Banner Error | Top banner    | Until dismissed |

### Validation Timing

| Trigger      | Validation            |
| ------------ | --------------------- |
| Text Changed | Real-time (debounced) |
| Focus Lost   | Full validation       |
| Form Submit  | All fields validated  |

---

## Input States

### State Overview

| State    | Border    | Background  | Text Color |
| -------- | --------- | ----------- | ---------- |
| Default  | `#2B3139` | `#1E2329`   | `#FFFFFF`  |
| Focused  | `#F0B90B` | `#1E2329`   | `#FFFFFF`  |
| Error    | `#F6465D` | `#1AF6465D` | `#FFFFFF`  |
| Disabled | `#474D57` | `#181A20`   | `#707A8A`  |
| Success  | `#2EBD85` | `#1A2EBD85` | `#FFFFFF`  |

### Visual State Indicators

**Default State**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FF1E2329" />
    <stroke android:width="1dp" android:color="#FF2B3139" />
    <corners android:radius="8dp" />
</shape>
```

**Focused State**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FF1E2329" />
    <stroke android:width="2dp" android:color="#FFF0B90B" />
    <corners android:radius="8dp" />
</shape>
```

**Error State**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#1AF6465D" />
    <stroke android:width="1dp" android:color="#FFF6465D" />
    <corners android:radius="8dp" />
</shape>
```

**Disabled State**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FF181A20" />
    <stroke android:width="1dp" android:color="#FF474D57" />
    <corners android:radius="8dp" />
</shape>
```

---

## Special Input Components

### OTP Input

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Enter verification code                                │
│                                                         │
│  ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐                  │
│  │ 4 │ │ 2 │ │ 8 │ │ 1 │ │   │ │   │                  │
│  └───┘ └───┘ └───┘ └───┘ └───┘ └───┘                  │
│                                                         │
│  Code expires in 02:45    [Resend Code]                │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Box Size | 48dp x 56dp |
| Box Spacing | 8dp |
| Corner Radius | 8dp |
| Text Size | 24sp |
| Text Color | `#FFFFFF` |
| Active Border | `#F0B90B` |
| Inactive Border | `#2B3139` |
| Filled Background | `#2B3139` |

### PIN Input

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Enter PIN                                              │
│                                                         │
│      ●      ●      ●      ●      ○      ○              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Dot Size | 12dp |
| Dot Spacing | 24dp |
| Filled Color | `#F0B90B` |
| Empty Color | `#474D57` |
| Error Color | `#F6465D` |

### Text Area

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  Message                                                │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                  │   │
│  │  Enter your message here...                     │   │
│  │                                                  │   │
│  │                                                  │   │
│  └─────────────────────────────────────────────────┘   │
│  0/500 characters                                       │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Min Height | 80dp |
| Max Height | 200dp |
| Corner Radius | 8dp |
| Text Size | 16sp |
| Character Counter | Bottom right |

### 7. Futures Leverage Slider

**Usage**: Adjusting leverage (1x - 125x) in Futures order panel

**Layout**:

```
  [10x]  <───────────────────[◆]───────────────────>
   1x     25x      50x      75x     100x     125x
```

**Specifications**:
| Property | Value |
|----------|-------|
| Track Height | 2dp |
| Track Color (Inactive) | `#2B3139` |
| Track Color (Active) | `#F0B90B` |
| Thumb | Diamond shape (◆), 12dp |
| Thumb Color | `#F0B90B` |
| Nodes | Diamond (Rotated Square) at 1x, 25%, 50%, 75%, 100% |
| Floating Label | 12sp, White on `#2B3139` background |

```
  1x        25%       50%       75%      100%
  ├──────────◆──────────◆──────────◆──────────◆──────────┤
  [    Slider Track with Diamond Selection Nodes        ]
```

- **Leverage Slider (Futures):** Diamond-nodes at 0, 25, 50, 75, 100%.

### Trade execution input field

**Usage**: Price and Amount entry in Spot/Alpha modes.

- **Embedded Selector**: Small dropdown arrow adjacent to the quote asset ticker (e.g., `USDT ▼`) inside the right boundary of the edit text.
- **Micro-Label**: "Suggest [Price]" appears in 10sp, Regular, Grey text immediately below the field baseline during active focus.
- **Precision Controls**: Optional `-` and `+` circular buttons flanking the field for incremental adjustments.

**Specifications**:
| Property | Value |
|----------|-------|
| Node Shape | Diamond (Rotated Square) |
| Active Color | `#F0B90B` (Yellow) |
| Inactive Track | `#2B3139` (Dark Gray) |
| Node Count | 5 Nodes (0%, 25%, 50%, 75%, 100%) |
| Label Size | 10sp, `#848E9C` |

---

## Input Validations Summary

### Common Validation Rules

| Field Type | Validations                        |
| ---------- | ---------------------------------- |
| Email      | Required, Format, Max Length       |
| Phone      | Required, Format, Min/Max Length   |
| Password   | Required, Min Length, Complexity   |
| Amount     | Required, Numeric, Positive, Range |
| Price      | Required, Numeric, Tick Size       |
| Address    | Required, Format, Network          |
| Search     | Optional, Min Length (2 chars)     |

### Validation Messages

| Validation     | Message Format                              |
| -------------- | ------------------------------------------- |
| Required       | "{Field} is required"                       |
| Invalid Format | "Invalid {field} format"                    |
| Too Short      | "{Field} must be at least {min} characters" |
| Too Long       | "{Field} must not exceed {max} characters"  |
| Too Low        | "{Field} must be at least {min}"            |
| Too High       | "{Field} must not exceed {max}"             |
| Insufficient   | "Insufficient {asset} balance"              |

---

## Notes

1. All inputs have 48dp minimum touch target
2. Real-time validation with debounce (300ms)
3. Error states clear on text change
4. Success states show briefly after valid input
5. Disabled states prevent all interaction
6. Focus states show clear visual feedback
7. Helper text provides context and guidance
8. Required fields marked with asterisk
9. Input masks applied for formatting
10. Keyboard type matches input type
