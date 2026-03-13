# Lists and RecyclerViews

## Overview

Lists are the primary UI pattern for displaying scrollable collections of items in the Binance app. RecyclerView is used for efficient rendering of large datasets with view recycling.

## List Types

### 1. Vertical List (LinearLayoutManager)

**Usage:** Standard item lists, menu items, settings.

**Specifications:**
- Orientation: Vertical
- Item spacing: `0dp` (with dividers) or `8dp`
- Divider: `1dp` line or `16dp` padding
- Scroll direction: Vertical

### 2. Horizontal List

**Usage:** Featured items, carousels, quick actions.

**Specifications:**
- Orientation: Horizontal
- Item spacing: `8dp`
- Snap behavior: None, Start, Center, End
- ViewPager integration for paging

### 3. Grid List (GridLayoutManager)

**Usage:** Market tiles, asset grids, category browse.

**Specifications:**
- Span count: 2, 3, or 4 columns
- Item spacing: `8dp`
- Span size: Fixed or variable

### 4. Staggered Grid (StaggeredGridLayoutManager)

**Usage:** News feed, masonry layout, varied content.

**Specifications:**
- Span count: 2 or 3
- Variable item heights
- Gap handling: Fixed or经理

## List Item Layouts

### 1. Single-Line Item

**Components:**
- Icon/Avatar (optional): 40dp
- Title text: 16sp
- Trailing element (optional)

**Height:** `56dp`

### 2. Two-Line Item

**Components:**
- Icon/Avatar: 40dp
- Title text: 16sp
- Subtitle text: 14sp, secondary color
- Trailing element (optional)

**Height:** `72dp`

### 3. Three-Line Item

**Components:**
- Image: 80dp x 80dp
- Title: 16sp
- Subtitle: 14sp
- Body text: 14sp
- Trailing element

**Height:** `88dp` or auto

### 4. Action List Item

**Components:**
- Leading icon
- Title
- Subtitle (optional)
- Chevron/arrow indicator

**Usage:** Settings, navigation menus

### 5. Switch List Item

**Components:**
- Leading icon
- Title
- Subtitle (optional)
- Switch toggle

**Usage:** Feature toggles, settings

## Special List Patterns

### Market List Item
```
┌──────────────────────────────────────────┐
│ [Logo]  BTC/USDT          $50,000.00    │
│         Bitcoin           +2.45%         │
│         [Sparkline]                      │
└──────────────────────────────────────────┘
```
- Leading: Token logo (40dp)
- Primary: Trading pair name
- Secondary: Token full name
- Trailing: Price + change %

### Order List Item
```
┌──────────────────────────────────────────┐
│ BUY 0.5 BTC @ $48,000          12:30:45  │
│ Total: $24,000              [Cancel]    │
│ Status: Partially Filled                 │
└──────────────────────────────────────────┘
```
- Order side badge (Buy/Sell)
- Amount and price
- Total value
- Timestamp
- Action button
- Status text

### Transaction List Item
```
┌──────────────────────────────────────────┐
│ [Icon] +0.5 BTC               Today 2pm   │
│ Deposit                    Confirmed     │
│ Tx: 0x1234...abcd                       │
└──────────────────────────────────────────┘
```
- Transaction type icon
- Amount with +/- indicator
- Transaction type
- Status
- Hash (truncated)

### Asset List Item
```
┌──────────────────────────────────────────┐
│ [Logo]  Bitcoin                          │
│         Available: 1.5 BTC               │
│                   ≈ $75,000.00   [>]     │
└──────────────────────────────────────────┘
```
- Token logo
- Token name
- Available balance
- Fiat value
- Detail chevron

## List Features

### Pull-to-Refresh
- SwipeRefreshLayout wrapper
- Circular progress indicator
- Refresh complete animation
- Color: Binance Yellow

### Load More / Infinite Scroll
- Bottom loading indicator
- Trigger: 80% scroll threshold
- Pagination support
- Empty state handling

### Item Selection
- Single selection mode
- Multiple selection mode
- Selection highlight
- Context action bar

### Item Reordering
- Drag handle
- Long press to initiate
- Drop animation
- Haptic feedback

### Section Headers
- Sticky headers
- Section title
- Background color
- Collapsible sections

## RecyclerView Implementation

### ViewHolder Pattern
- ViewBinding for view references
- DiffUtil for efficient updates
- ViewType for multiple layouts

### Adapter Structure
```kotlin
class MarketAdapter : RecyclerView.Adapter<MarketAdapter.ViewHolder>() {
    // List<MarketItem> data
    // onItemClickListener
    // DiffUtil.Callback
}
```

### Performance Optimizations
- View recycling
- Stable IDs (optional)
- setHasFixedSize()
- setItemViewCacheSize()

## Item Animations

### Default Item Animator
- Add: Fade + slide in from bottom
- Remove: Fade + slide out
- Move: Reposition animation
- Duration: 300ms

### Custom Animations
- Scale animation on add
- Ripple on tap
- Swipe-to-delete
- Drag-and-drop

## Empty States

### No Data
- Illustration: 120dp x 120dp
- Title: 16sp, bold
- Description: 14sp, secondary
- Action button (optional)

### No Results (Search)
- "No results found" message
- Suggestion to modify search
- Clear search button

### No Connection
- Offline indicator
- Retry button
- Cached data display (if available)

## Implementation Reference

**Layout Managers:**
- `LinearLayoutManager` (vertical/horizontal)
- `GridLayoutManager` (2-4 columns)
- `StaggeredGridLayoutManager` (masonry)

**Key Classes:**
- `RecyclerView`
- `RecyclerView.Adapter`
- `RecyclerView.ViewHolder`
- `DiffUtil`
- `ListAdapter`

**Dimensions:**
- List item height: 56dp/72dp
- Item padding: 16dp
- Grid spacing: 8dp
- Divider height: 1dp

## Accessibility

- Content descriptions for icons
- Minimum touch target: 48dp
- Announce list changes
- Support keyboard navigation
- Proper heading hierarchy

## Usage Examples

### Markets Screen
- RecyclerView with GridLayoutManager (2 columns)
- Market list items
- Pull-to-refresh
- Sticky header for sections

### Open Orders
- RecyclerView with LinearLayoutManager
- Order list items
- Swipe-to-cancel
- Empty state

### Wallet Assets
- RecyclerView with LinearLayoutManager
- Asset list items
- Section headers (Spot/Futures/Staking)
- Pull-to-refresh

---

**Related Documentation:**
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - List colors
- [docs/34-dimensions-spacing.md](docs/34-dimensions-spacing.md) - List sizing
- [docs/36-ui-components.md](docs/36-ui-components.md) - Component overview
- [docs/43-cards-containers.md](docs/43-cards-containers.md) - Card containers
