# Tabs and Segmented Controls

## Overview

Tabs and segmented controls are navigation components used to switch between different views or content sections within the Binance app. They provide organized navigation and efficient screen space utilization.

## Tab Types

### 1. Top Tabs (TabLayout)

**Usage:** Primary navigation between screen sections, content filtering.

**Visual Specifications:**
- Background: `#FFFFFF` (Light) / `#1E1E1E` (Dark)
- Tab Height: `48dp`
- Tab Padding: `12dp` horizontal
- Tab Text Size: `14sp`
- Tab Text Weight: Medium (500)
- Active Tab Color: `#F0B90B` (Binance Yellow)
- Inactive Tab Color: `#757575`
- Indicator Color: `#F0B90B`
- Indicator Height: `3dp`
- Indicator Corner Radius: `1.5dp` (rounded)

**Behavior:**
- Horizontal scroll when tabs exceed width
- Indicator slides with animation (300ms)
- Tab content switches with fade

### 2. Bottom Tabs (Bottom Navigation)

**Usage:** Main app navigation between major sections.

**Visual Specifications:**
- Background: `#FFFFFF` (Light) / `#1E1E1E` (Dark)
- Height: `56dp` (standard) / `64dp` (with safe area)
- Icon Size: `24dp`
- Active Icon Color: `#F0B90B`
- Inactive Icon Color: `#757575`
- Label Size: `10sp`
- Label Weight: Medium (500)
- Badge: Red circle with white text

**Tabs Structure:**
- Home (Exchange)
- Markets
- Trade
- Wallet
- Profile

### 3. Scrollable Top Tabs

**Usage:** Large number of tabs, category navigation.

**Visual Specifications:**
- Same as Top Tabs
- Enable horizontal scroll
- Center-aligned or start-aligned
- Tab minimum width: `72dp`

### 4. Fixed Tabs

**Usage:** Small number of tabs (2-4), equal width distribution.

**Visual Specifications:**
- Equal width distribution
- No scroll
- Center-aligned tabs

## Segmented Control

**Usage:** Switching between related options within a context.

**Visual Specifications:**
- Background: `#F5F5F5`
- Selected Segment: `#FFFFFF`
- Border Radius: `8dp`
- Segment Padding: `8dp`
- Text Size: `14sp`
- Active Text Color: `#000000`
- Inactive Text Color: `#757575`
- Height: `36dp`

**Variants:**
- Two-segment (Buy/Sell)
- Three-segment (Limit/Market/Stop)
- Multi-segment (Timeframes)

## Tab Indicator

### Sliding Indicator
- Animation: 300ms ease-in-out
- Width: Matches tab content
- Position: Bottom of tab

### Fixed Indicator
- Full width of tab
- No animation between tabs
- Used in: Bottom navigation badge

### Custom Indicator
- Background drawable
- Custom shapes
- Icons in place of text

## Interactive Behaviors

### Tab Selection
- Tap to select
- Indicator slides to new position
- Content crossfades (200ms)
- Haptic feedback (optional)

### Tab Scroll
- Smooth scroll to selected tab
- Auto-center selected tab
- Momentum scrolling

### Tab Long Press
- Show tab tooltip
- Context menu (if applicable)

### Swipe Gesture
- Swipe left/right to change tabs
- ViewPager integration
- Velocity-based snap

## Implementation Reference

**Styles from styles.xml:**
- `Widget.App.TabLayout`
- `Widget.App.TabLayout.Scrollable`
- `Widget.App.TabLayout.Fixed`
- `TabLayout`
- `BottomNavigationView`

**Key Attributes:**
- `app:tabMode` (scrollable/fixed)
- `app:tabGravity` (fill/center)
- `app:tabIndicatorColor`
- `app:tabIndicatorHeight`
- `app:tabSelectedTextColor`
- `app:tabTextColor`
- `app:tabIconTint`
- `app:tabRippleColor`

**Dimensions:**
- Tab height: `48dp`
- Tab indicator height: `3dp`
- Bottom nav height: `56dp`
- Tab icon size: `24dp`
- Tab text size: `14sp`

## Tab Content Patterns

### Market Tabs
```
[Favorites] [Spot] [Futures] [ETF] [Search]
```

### Trade Tabs
```
[Limit] [Market] [Stop-Limit] [OCO]
```

### Order Tabs
```
[Open Orders] [Order History] [Trade History]
```

### Wallet Tabs
```
[Deposit] [Withdraw] [History]
```

### Asset Tabs
```
[All] [Spot] [Funding] [Futures] [Staking]
```

## Accessibility

- Tab selected state announced
- Content description for icons
- Minimum touch target: `48dp` x `48dp`
- Tab order follows logical sequence
- Swipe gestures alternative to tap

## Usage Examples

### Exchange Markets
```
┌─────────────────────────────────────────┐
│ [Favorites] [Spot] [Futures] [ETF]     │
├─────────────────────────────────────────┤
│                                         │
│         Tab Content Area                │
│                                         │
└─────────────────────────────────────────┘
```

### Bottom Navigation
```
┌─────────────────────────────────────────┐
│                                         │
│            Content Area                 │
│                                         │
├─────────────────────────────────────────┤
│ [Home] [Markets] [Trade] [Wallet] [More]│
└─────────────────────────────────────────┘
```

### Segmented Control
```
┌─────────────────────────────────────────┐
│ [Buy]      |      [Sell]                │
└─────────────────────────────────────────┘
```

---

**Related Documentation:**
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Tab colors
- [docs/34-dimensions-spacing.md](docs/34-dimensions-spacing.md) - Tab sizing
- [docs/36-ui-components.md](docs/36-ui-components.md) - Component overview
- [docs/37-navigation-system.md](docs/37-navigation-system.md) - Navigation patterns
