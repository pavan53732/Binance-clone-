# Loaders and Skeletons

## Overview

Loaders and skeleton screens provide visual feedback during data loading, improving perceived performance and user experience.

## Loading Indicator Types

### 1. Circular Progress (Spinner)

**Usage:** Standard loading indicator for operations.

**Visual Specifications:**
- Size: `24dp` (small), `36dp` (medium), `48dp` (large)
- Stroke Width: `3dp`
- Color: `#F0B90B` (Binance Yellow)
- Background Track: `#E0E0E0`
- Indeterminate: Continuous rotation

**Animation:**
- Rotation: 360° continuous
- Duration: 1.5 seconds per rotation
- Easing: Linear

**Variants:**
- Small spinner (inline)
- Medium spinner (in buttons)
- Large spinner (full screen)

### 2. Linear Progress Bar

**Usage:** Determinate progress for known operations.

**Visual Specifications:**
- Height: `4dp`
- Corner Radius: `2dp`
- Track Color: `#E0E0E0`
- Progress Color: `#F0B90B`
- Animated: Smooth width transition

**States:**
- Indeterminate: Moving gradient
- Determinate: 0-100% progress

### 3. Full-Screen Loading

**Usage:** Blocking operations requiring user wait.

**Visual Specifications:**
- Background: `#FFFFFF` at 90% opacity (Light) / `#1E1E1E` at 90% opacity (Dark)
- Spinner: Centered, 48dp
- Message (optional): Below spinner, 14sp

**Behavior:**
- Blocks user interaction
- Prevents accidental actions
- Dismissed on completion

## Skeleton Screen Types

### 1. List Skeleton

**Usage:** Loading list content.

**Visual Specifications:**
- Layout: Mimics actual list item
- Background: `#E0E0E0` (light mode)
- Animation: Shimmer effect
- Item count: 5-10 items

**Components:**
- Image placeholder: Circle or square
- Title bar: Rounded rectangle
- Subtitle bar: Shorter rectangle
- Tail bar: Short rectangle

### 2. Card Skeleton

**Usage:** Loading card content.

**Visual Specifications:**
- Layout: Mimics actual card
- Header image placeholder
- Title placeholder
- Content placeholders
- Footer placeholder

### 3. Table Skeleton

**Usage:** Loading table/grid content.

**Visual Specifications:**
- Header row placeholders
- Data row placeholders
- Column-based placeholders

### 4. Chart Skeleton

**Usage:** Loading chart area.

**Visual Specifications:**
- Axes placeholders
- Grid line placeholders
- Data area placeholder

## Shimmer Effect

### Implementation
- Gradient animation across element
- Base color: `#E0E0E0`
- Highlight color: `#F5F5F5`
- Direction: Left to right
- Duration: 1.5 seconds per cycle

### CSS/Animation Code
```css
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
```

### Usage
- Continuous loop while loading
- Stops when data ready
- Smooth fade to content

## Loading States by Context

### Initial Load
- Full-screen skeleton
- App logo (optional)
- No user interaction

### Pull-to-Refresh
- Circular spinner at top
- Pull gesture indicator
- Content stays visible

### Pagination Load
- Bottom spinner in list
- Insert above content
- Maintain scroll position

### Button Loading
- Replace text with spinner
- Disable button
- Prevent double-tap

### Form Submission
- Full-screen overlay
- Spinner + message
- Block interaction

## Implementation Reference

**Components:**
- `ProgressBar` (system)
- `CircularProgressIndicator` (Material)
- `LinearProgressIndicator` (Material)
- Custom skeleton views

**Key Attributes:**
- `android:indeterminate`
- `android:progress`
- `app:trackThickness`
- `app:indicatorColor`

**Dimensions:**
- Spinner small: 24dp
- Spinner medium: 36dp
- Spinner large: 48dp
- Progress height: 4dp
- Skeleton corner radius: 4dp

## Placeholder Patterns

### Market List Placeholder
```
┌─────────────────────────────────────────┐
│ [Avatar] ████████████                    │
│         ████████                        │
│                                         │
│ [Avatar] ████████████                   │
│         ████████                        │
│                                         │
│ [Avatar] ████████████                   │
│         ████████                        │
└─────────────────────────────────────────┘
```

### Order Form Placeholder
```
┌─────────────────────────────────────────┐
│ [Price Input] ████████████████          │
│                                         │
│ [Amount Input] ████████████████        │
│                                         │
│ [██████████████] Total: ████████       │
│                                         │
│ [████████████████████████████████████]  │
└─────────────────────────────────────────┘
```

### Asset Card Placeholder
```
┌─────────────────────────────────────────┐
│  [Logo]  ██████████████                 │
│          ████████████                   │
│                  ████████████████████   │
└─────────────────────────────────────────┘
```

## Best Practices

1. **Show skeleton first:** Display immediately, before any data
2. **Match layout:** Skeleton should mirror actual content
3. **Animate shimmer:** Provide visual feedback of loading
4. **Smooth transitions:** Fade from skeleton to content
5. **Handle errors:** Show error state if load fails

---

**Related Documentation:**
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Loading colors
- [docs/30-real-time-data-updates.md](docs/30-real-time-data-updates.md) - Data updates
- [docs/36-ui-components.md](docs/36-ui-components.md) - Component overview
