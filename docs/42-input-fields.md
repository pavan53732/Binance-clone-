# Input Fields

## Overview

Input fields are essential UI components for user data entry throughout the Binance app. The app uses Material Design's TextInputLayout with custom styling for consistent input experiences.

## TextInputLayout Components

### 1. Outlined Text Field

**Usage:** Standard text input with floating label animation.

**Visual Specifications:**
- Border Color (Default): `#E0E0E0` (Light Gray)
- Border Color (Focused): `#F0B90B` (Binance Yellow)
- Border Color (Error): `#F6465D` (Error Red)
- Border Width: `1dp`
- Focused Border Width: `2dp`
- Corner Radius: `8dp`
- Label Color (Default): `#757575`
- Label Color (Focused): `#F0B90B`
- Label Color (Error): `#F6465D`

**Typography:**
- Input Text: `16sp`, Regular
- Hint Text: `16sp`, Regular
- Error Text: `12sp`, Regular
- Helper Text: `12sp`, Regular

### 2. Filled Text Field

**Usage:** Dense forms, bottom sheets, compact UIs.

**Visual Specifications:**
- Background Color: `#F5F5F5`
- Bottom Border: `2dp` (indicator line)
- Corner Radius (top): `8dp`

### 3. Standard Text Field

**Usage:** Minimal UI areas, search bars.

**Visual Specifications:**
- Background: Transparent
- Underline indicator only
- Bottom Line Color: `#E0E0E0`

## Input States

### Default State
- Empty field with floating hint
- Neutral border color
- Ready for input

### Focused State
- Floating label animation (200ms)
- Focused border color (#F0B90B)
- Cursor visible and blinking
- Keyboard displayed

### Filled State
- Label positioned above field
- Content displayed
- No error indicators

### Error State
- Error border color (#F6465D)
- Error message below field
- Error icon (warning) prefix
- Shake animation on validation failure

### Disabled State
- Background: `#F5F5F5` at 50% opacity
- Text color: `#9E9E9E`
- Non-editable
- No interactions

### Read-only State
- Background: Transparent
- Text color: Primary text
- No cursor, but selectable

## Input Field Types

### Amount Input (Trading)
- Numeric keyboard
- Decimal support (up to 8 decimal places for crypto)
- Balance indicator ("Max" button)
- Live validation
- Example: Order quantity input

### Price Input
- Numeric keyboard
- Price precision based on trading pair
- Market price indicator ("Market" button)
- Example: Limit order price

### Search Input
- Leading search icon
- Clear button when filled
- Cancel button on right
- Autocomplete suggestions
- Example: Market search, token search

### Address Input
- Monospace font
- Paste button
- QR scanner button
- Address validation indicator
- Example: Deposit address, withdraw address

### Password Input
- Toggle visibility icon
- Password strength indicator
- Character mask (bullets)
- Example: Login, registration, security

### OTP Input
- Single character per box
- Auto-focus next on entry
- Paste entire code support
- 6-digit format
- Example: 2FA verification

## Helper & Error Messages

### Helper Text
- Position: Below input field
- Color: `#757575`
- Font Size: `12sp`
- Usage: Format hints, character counts

### Error Text
- Position: Below input field
- Color: `#F6465D`
- Font Size: `12sp`
- Animation: Slide in from top

### Character Counter
- Position: Bottom-right
- Format: "X / Y"
- Overflow: Red color when exceeded

## Interactive Behaviors

### Focus Animation
- Label floats up: 200ms ease-out
- Border color change: 150ms
- Cursor blink: Standard system

### Validation
- Real-time validation on blur
- Debounce: 300ms
- Error display: 300ms fade-in

### Clear Action
- Tap clear button: Removes all text
- Animation: Fade out content

## Validation Patterns

### Email Validation
- Pattern: RFC 5322 compliant
- Error: "Please enter a valid email"

### Phone Validation
- Pattern: Country code + number
- Format: +[code][number]
- Error: "Please enter a valid phone number"

### Password Validation
- Minimum: 8 characters
- Requirements: Uppercase, lowercase, number
- Strength meter: Weak/Medium/Strong

### Crypto Address Validation
- BTC: Starts with 1, 3, or bc1
- ETH: 42 characters, starts with 0x
- BNB: Same as ETH format
- Validation: Checksum verification

### Amount Validation
- Positive numbers only
- Maximum decimal places per asset
- Minimum: 0 (or minimum trade amount)
- Maximum: Available balance

## Implementation Reference

**Styles from styles.xml:**
- `Widget.App.TextInputLayout.Outlined`
- `Widget.App.TextInputLayout.Filled`
- `TextInputLayout`
- `TextInputEditText`

**Key Attributes:**
- `app:boxStrokeColor`
- `app:boxCornerRadiusTopStart`
- `app:boxCornerRadiusTopEnd`
- `app:boxCornerRadiusBottomStart`
- `app:boxCornerRadiusBottomEnd`
- `app:errorEnabled`
- `app:helperTextEnabled`

## Accessibility

- Minimum touch target: `48dp` x `48dp`
- Label must be visible (not placeholder only)
- Error messages announced by screen readers
- Input type hints for keyboard
- Content descriptions for icons

## Usage Examples

### Login Screen
```
[Email Input]          → Outlined, email keyboard
[Password Input]       → Outlined, password toggle
[Login Button]         → Primary button
```

### Order Form
```
[Price Input]          → Filled, numeric, "Market" button
[Amount Input]          → Filled, numeric, "Max" button
[Total Input]          → Read-only, calculated
```

### Deposit Flow
```
[Address Input]         → Outlined, monospace, QR + paste
[Amount Input]          → Outlined, numeric
[Network Selector]      → Dropdown
```

---

**Related Documentation:**
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Input colors
- [docs/34-dimensions-spacing.md](docs/34-dimensions-spacing.md) - Input sizing
- [docs/36-ui-components.md](docs/36-ui-components.md) - Component overview
- [docs/29-error-handling-ui.md](docs/29-error-handling-ui.md) - Error handling
