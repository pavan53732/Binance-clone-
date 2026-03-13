# Cards and Containers

## Overview

Cards and containers are fundamental UI components for grouping related content in the Binance app. They provide visual hierarchy, structure, and depth to the interface.

## Card Types

### 1. Elevated Card

**Usage:** Primary content containers, feature sections, dashboard widgets.

**Visual Specifications:**
- Background: `#FFFFFF` (Light mode) / `#1E1E1E` (Dark mode)
- Corner Radius: `12dp`
- Elevation: `4dp`
- Shadow: Material elevation shadow
- Padding: `16dp`

**States:**
- Default: Standard elevation
- Pressed: Slight scale (0.98), elevation decrease
- Focused: Border highlight

### 2. Outlined Card

**Usage:** Alternative to elevated cards, secondary content.

**Visual Specifications:**
- Background: Transparent
- Border: `1dp` solid `#E0E0E0`
- Corner Radius: `12dp`
- Elevation: `0dp`
- Padding: `16dp`

### 3. Filled Card

**Usage:** Dense layouts, grouped content sections.

**Visual Specifications:**
- Background: `#F5F5F5` (Light mode)
- Corner Radius: `8dp`
- Elevation: `0dp`
- Padding: `12dp`

### 4. Background Card

**Usage:** Screen background, large content areas.

**Visual Specifications:**
- Background: App background color
- Full-width
- No border or shadow

## Container Types

### 1. Section Container

**Usage:** Grouping related content with header.

**Components:**
- Optional header title
- Content area
- Optional divider

**Dimensions:**
- Header height: `48dp`
- Content padding: `16dp`
- Divider: `1dp` line

### 2. List Item Container

**Usage:** Individual items in lists, menu items.

**Components:**
- Leading icon/avatar
- Title text
- Subtitle text (optional)
- Trailing element
- Divider

**Dimensions:**
- Height: `56dp` (single line) / `72dp` (two line)
- Padding: `16dp` horizontal

### 3. Content Block

**Usage:** Inline content grouping without full card styling.

**Components:**
- Title (optional)
- Content rows
- Action buttons (optional)

### 4. Grid Cell

**Usage:** Grid layout items, market tiles.

**Components:**
- Image/icon area
- Title
- Subtitle/value
- Optional badge

**Dimensions:**
- Fixed width or percentage
- Aspect ratio: 1:1 or 4:3

## Interactive Behaviors

### Card Tap
- Ripple effect on press
- Scale animation (0.98)
- Elevation change on press

### Card Expand/Collapse
- Animated height change
- Chevron rotation
- Duration: 300ms

### Card Swipe Actions
- Swipe left: Delete action
- Swipe right: Archive/action
- Background reveal animation

## Card Variations by Context

### Market Card
- Token logo (leading)
- Token name and symbol
- Current price
- Price change (24h)
- Sparkline chart
- Used in: Market lists

### Order Card
- Order type badge
- Trading pair
- Price and amount
- Time/date
- Status indicator
- Actions (cancel/edit)
- Used in: Open orders

### Asset Card
- Token logo
- Token name
- Available balance
- Fiat value
- Action buttons
- Used in: Wallet assets

### Transaction Card
- Transaction type icon
- Amount (+/-)
- Status badge
- Timestamp
- Transaction hash (truncated)
- Used in: Transaction history

### News/Announcement Card
- Thumbnail image
- Title
- Summary text
- Timestamp
- Category tag
- Used in: News feed

## Implementation Reference

**Styles from styles.xml:**
- `Widget.App.CardView.Elevated`
- `Widget.App.CardView.Outlined`
- `CardView`
- `MaterialCardView`

**Key Attributes:**
- `app:cardCornerRadius`
- `app:cardElevation`
- `app:cardBackgroundColor`
- `app:strokeWidth`
- `app:strokeColor`

**Dimensions:**
- Card corner radius: `12dp`
- Card padding: `16dp`
- Card margin: `8dp`
- Section spacing: `24dp`

## Accessibility

- Card content accessible via navigation
- Touch targets within card: minimum 48dp
- Sufficient color contrast
- Content descriptions for images
- Card headers marked as headings

## Usage Examples

### Dashboard Layout
```
┌─────────────────────────────────┐
│  Market Overview Card           │
│  ┌───────────────────────────┐ │
│  │ BTC/USDT   $50,000  +2%   │ │
│  │ [Chart]                   │ │
│  └───────────────────────────┘ │
│                                 │
│  Quick Actions Card            │
│  [Buy] [Sell] [Swap] [Receive] │
│                                 │
│  Recent Activity Card          │
│  ┌───────────────────────────┐ │
│  │ Order #12345  Buy BTC    │ │
│  │ Completed                 │ │
│  └───────────────────────────┘ │
└─────────────────────────────────┘
```

### Settings Section
```
┌─────────────────────────────────┐
│ Account                         │
│ ┌─────────────────────────────┐ │
│ │ Profile      >              │ │
│ │ Security     >              │ │
│ │ Preferences  >              │ │
│ └─────────────────────────────┘ │
│                                 │
│ Notifications                  │
│ ┌─────────────────────────────┐ │
│ │ Push         [Toggle]       │ │
│ │ Email        [Toggle]       │ │
│ │ SMS          [Toggle]       │ │
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

---

**Related Documentation:**
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Card colors
- [docs/34-dimensions-spacing.md](docs/34-dimensions-spacing.md) - Card sizing
- [docs/36-ui-components.md](docs/36-ui-components.md) - Component overview
- [docs/45-lists-recyclerviews.md](docs/45-lists-recyclerviews.md) - List items
