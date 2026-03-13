# Dialogs and Bottom Sheets

## Overview

Dialogs and bottom sheets are overlay components used for focused interactions, confirmations, and content that requires user attention.

## Dialog Types

### 1. Alert Dialog

**Usage:** Simple confirmation or information prompts.

**Visual Specifications:**
- Background: `#FFFFFF`
- Corner Radius: `16dp`
- Padding: `24dp`
- Title: `20sp`, bold
- Message: `16sp`, regular
- Button alignment: End (right)

**Actions:**
- Single button: OK, Close
- Two buttons: Cancel + Confirm
- Three buttons: Option 1 + Option 2 + Cancel

### 2. Confirmation Dialog

**Usage:** User confirmations for important actions.

**Visual Specifications:**
- Icon: 48dp (warning/error/info)
- Title: Clear action description
- Message: Additional details
- Checkbox: "Don't ask again" (optional)

**Example - Delete Order:**
```
┌─────────────────────────────────────────┐
│  [Warning Icon]                         │
│                                         │
│  Cancel Order?                          │
│  Are you sure you want to cancel       │
│  this order?                            │
│                                         │
│  [ ] Don't ask again                    │
│                                         │
│  [Cancel]          [Confirm]            │
└─────────────────────────────────────────┘
```

### 3. Full-Screen Dialog

**Usage:** Complex forms, detailed content.

**Visual Specifications:**
- Full screen width/height
- App bar with back/close
- Scrollable content
- Bottom action bar

**Usage:**
- KYC document upload
- Complex settings
- Full-page forms

### 4. Loading Dialog

**Usage:** Blocking operations.

**Visual Specifications:**
- Rounded rectangle background
- Centered spinner
- Optional message
- No dismiss on outside tap
- Non-cancelable (by default)

## Bottom Sheet Types

### 1. Modal Bottom Sheet

**Usage:** Selection interfaces, quick actions.

**Visual Specifications:**
- Background: `#FFFFFF`
- Corner Radius (top): `16dp`
- Handle: `32dp` x `4dp`, centered
- Handle Color: `#E0E0E0`
- Max Height: `90%` screen height
- Shadow: `8dp` elevation
- Padding: `16dp`

**Behavior:**
- Dismiss on outside tap
- Swipe down to dismiss
- Modal behavior (blocks rest of app)

**Examples:**
- Network selector
- Token selector
- Sort/filter options

### 2. Persistent Bottom Sheet

**Usage:** Additional content panel.

**Visual Specifications:**
- Peek height: `25%` screen
- Expanded height: `90%` screen
- Same styling as modal

**Behavior:**
- Can be collapsed/expanded
- Content scrollable when expanded
- Background content remains interactive

### 3. Draggable Bottom Sheet

**Usage:** Map details, quick previews.

**Behavior:**
- Snap points: Collapsed, Half, Expanded
- Velocity-based snapping
- Scroll content integration

## Bottom Sheet Variants

### Network Selector
```
┌─────────────────────────────────────────┐
│           ───────                      │
│                                         │
│  Select Network                        │
│                                         │
│  [BNB]  BNB Chain              [Check] │
│  [ETH]  Ethereum             [Check] │
│  [MATIC] Polygon              [Check] │
│  [ARB]  Arbitrum             [Check] │
│  [OP]   Optimism              [Check] │
│                                         │
│  [Cancel]                              │
└─────────────────────────────────────────┘
```

### Token Selector
```
┌─────────────────────────────────────────┐
│           ───────                      │
│                                         │
│  Select Token                           │
│  [Search tokens...]                    │
│                                         │
│  [USDT] Tether              1,000.00  │
│  [BTC]  Bitcoin               0.500    │
│  [ETH]  Ethereum             5.000    │
│  [BNB]  BNB                  10.00    │
│                                         │
│  [Custom Token]                        │
└─────────────────────────────────────────┘
```

### Filter Bottom Sheet
```
┌─────────────────────────────────────────┐
│           ───────                      │
│                                         │
│  Filter                          [X]   │
│                                         │
│  Status                                 │
│  [All] [Open] [Filled] [Cancelled]     │
│                                         │
│  Time Range                             │
│  [Today] [7D] [30D] [90D] [Custom]      │
│                                         │
│  [Reset]        [Apply]                │
└─────────────────────────────────────────┘
```

## Dialog/Bottom Sheet Features

### Scrim
- Color: `#000000`
- Opacity: `32%` (0.32)
- Click to dismiss (modal)

### Animations
- Dialog: Fade + scale in
- Bottom sheet: Slide up from bottom
- Duration: 300ms
- Ease: FastOutSlowIn

### Gestures
- Swipe down to dismiss
- Swipe edge to dismiss
- Scroll to dismiss (content scrollable)

### Handle
- Visual drag indicator
- Optional (can be hidden)
- Touch target: 48dp

## Implementation Reference

**Components:**
- `AlertDialog`
- `DialogFragment`
- `BottomSheetDialog`
- `BottomSheetDialogFragment`
- `ModalBottomSheetLayout`

**Key Attributes:**
- `app:behavior_hideable`
- `app:behavior_peekHeight`
- `app:shapeAppearance`
- `app:layout_behavior`

**Dimensions:**
- Dialog corner radius: 16dp
- Bottom sheet corner radius: 16dp
- Handle width: 32dp
- Handle height: 4dp
- Padding: 16-24dp
- Max height: 90%

## Common Use Cases

### Order Confirmation
- Trading pair details
- Order type and side
- Price and amount
- Total value
- Confirm/Cancel buttons

### Withdrawal Confirmation
- Network selected
- Address (with warning)
- Amount and fees
- Confirm/Cancel

### Delete Confirmation
- Warning message
- Action description
- Checkbox (optional)

### Selectors
- Network selection
- Token selection
- Time range selection

## Accessibility

- Focus management: Trap focus in dialog
- Keyboard navigation: Arrow keys
- Screen reader: Announce dialog
- Escape key: Dismiss

---

**Related Documentation:**
- [docs/50-overlay-selectors.md](docs/50-overlay-selectors.md) - Overlay selectors
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Dialog colors
- [docs/34-dimensions-spacing.md](docs/34-dimensions-spacing.md) - Dialog sizing
