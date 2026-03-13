# Button and CTA Components

## Overview

Buttons are primary interactive elements used throughout the Binance app for triggering actions. The app implements Material Design buttons with custom styling aligned with the Binance brand identity.

## Button Types

### 1. Primary Button (Filled)

**Usage:** Primary actions that require user attention and engagement.

**Visual Specifications:**
- Background Color: `#F0B90B` (Binance Yellow)
- Pressed State: `#D0A000` (Darker Yellow)
- Text Color: `#000000` (Black)
- Height: `48dp`
- Corner Radius: `8dp`
- Min Width: `88dp`
- Padding: Horizontal `16dp`

**Typography:**
- Font Size: `16sp`
- Font Weight: Bold (700)
- Text Style: UPPERCASE optional

### 2. Secondary Button (Outlined)

**Usage:** Secondary actions that complement primary actions.

**Visual Specifications:**
- Background: Transparent
- Border: `1dp` solid `#F5F5F5`
- Text Color: `#1F8DF9` (Link Blue)
- Height: `40dp`
- Corner Radius: `8dp`
- Min Width: `88dp`

**Typography:**
- Font Size: `14sp`
- Font Weight: Bold (700)

### 3. Ghost Button (Text Button)

**Usage:** Tertiary actions, inline actions, dialog controls.

**Visual Specifications:**
- Background: Transparent
- Text Color: `#1F8DF9` (Link Blue)
- Height: `32dp` or `40dp`
- Padding: Horizontal `12dp`

**Typography:**
- Font Size: `14sp`
- Font Weight: Normal (400)

### 4. Small/Compact Button

**Usage:** Dense UI areas, toolbar actions, chip-like buttons.

**Visual Specifications:**
- Height: `32dp`
- Corner Radius: `16dp` (pill shape for small)
- Min Width: `64dp`

### 5. Tiny Button (Icon Button)

**Usage:** Icon-only actions, close buttons, navigation controls.

**Visual Specifications:**
- Height: `24dp`
- Width: `24dp` (square) or `36dp` (circular)
- Icon Size: `20dp`

## Button States

### Default State
- Normal background color
- Full opacity
- Interactive

### Pressed State
- Darker background color
- Slight scale down (0.98)
- Ripple effect with `#33000000` overlay

### Focused State
- Slight elevation increase
- Border highlight (for outlined buttons)

### Disabled State
- Background: `#B7BDC6` (Disabled Gray)
- Text: `#FFFFFF` at 60% opacity
- Non-interactive
- Elevation: 0

### Loading State
- Show circular progress indicator
- Replace text with spinner
- Disable all interactions
- Progress color: Match button text color

## Interactive Behaviors

### Touch Feedback
- Ripple effect: Material ripple with 300ms duration
- Scale animation: 0.98 scale on press
- Color transition: 150ms ease-in-out

### Animation Specifications
- Press animation: 100ms scale to 0.98
- Release animation: 100ms scale to 1.0
- Loading spinner: Continuous rotation

## Special Button Variants

### Buy Button (Green)
- Background: `#00A650` (Success Green)
- Used for: Buy orders, deposit actions

### Sell Button (Red)
- Background: `#F6465D` (Error Red)
- Used for: Sell orders, withdraw actions

### Swap Button
- Background: `#F0B90B` (Primary)
- Icon: Swap arrows
- Used for: Token swap actions

### Connect Button
- Background: `#F0B90B` (Primary)
- Used for: Wallet connection flows
- Used in: Web3 wallet connect, WalletConnect

## Implementation Reference

**Styles from styles.xml:**
- `Widget.App.Button.Primary`
- `Widget.App.Button.Secondary`
- `Widget.App.Button.Ghost`
- `MaterialButton`
- `TextButton`
- `OutlinedButton`

**Key Dimensions:**
- Button height large: `48dp`
- Button height medium: `40dp`
- Button height small: `32dp`
- Button height tiny: `24dp`
- Button corner radius: `8dp`
- Button min width: `88dp`

## Accessibility

- Minimum touch target: `48dp` x `48dp`
- Content description for icon-only buttons
- Focus indicators for keyboard navigation
- Sufficient color contrast (WCAG AA)

## Usage Examples

### Order Form Buttons
```
[Buy] [Sell]    → Primary green/red buttons
[Place Order]   → Full-width primary button
[Cancel]        → Ghost button
```

### Navigation Actions
```
[Back]          → Icon button (arrow)
[Settings]      → Icon button (gear)
[Close]         → Icon button (X)
```

### Form Actions
```
[Submit]        → Primary button
[Cancel]        → Secondary button
[Learn More]    → Text/Ghost button
```

---

**Related Documentation:**
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Button colors
- [docs/34-dimensions-spacing.md](docs/34-dimensions-spacing.md) - Button sizing
- [docs/36-ui-components.md](docs/36-ui-components.md) - Component overview
