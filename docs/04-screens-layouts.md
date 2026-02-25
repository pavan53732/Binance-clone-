# Binance UI/UX Knowledge Base - Screens & Layouts

## Overview

This document catalogs the layout files and screen structures used in the Binance Android app. Due to code obfuscation, layout files have numeric names, but their content reveals their purpose.

---

## Layout File Analysis

### Layout Naming Convention

Layout files use obfuscated numeric identifiers (e.g., `2131624005.xml`). The actual screen purpose can be determined by:

- String resource references (e.g., `@string/c2c_homepage_filter`)
- Custom view class names (e.g., `com.binance.c2c.trade.view`)
- View ID patterns and content structure

---

## Identified Screens

### 1. C2C Trade Filter Screen

**File**: `2131624005.xml` (25,347 chars)

**Purpose**: Advanced filter screen for P2P trading ads

**Key Components**:

- Back navigation button
- Title: "Ad Filter" (`@string/ad_filter`)
- NestedScrollView for scrollable content
- Multiple filter sections with switches
- Payment method selection
- Country/region selection
- Sort options with radio buttons
- Reset and Confirm buttons

**Layout Structure**:

```
LinearLayout (vertical)
├── AppCompatImageView (back button)
├── TextView (title)
├── NestedScrollView
│   └── ConstraintLayout
│       ├── Switch: Use last saved filter
│       ├── Section: Ad Types
│       │   ├── Switch: Only show tradable ads
│       │   ├── Switch: Only display pro merchants
│       │   ├── Switch: Shield ads
│       │   ├── Switch: Only from merchant
│       │   ├── Switch: No verify required
│       │   ├── Switch: Advertiser traded with
│       │   └── Switch: Advertiser followed
│       ├── Section: Amount
│       │   └── EditText with currency selector
│       ├── Section: Payment time limit
│       │   └── RecyclerView (horizontal chips)
│       ├── Section: Payment method
│       │   └── RecyclerView (payment options)
│       ├── Section: Country/Region
│       │   └── RecyclerView (country list)
│       └── Section: Sort by
│           ├── RadioButton: Price
│           ├── RadioButton: Trades
│           └── RadioButton: Completion rate
└── LinearLayout (buttons)
    ├── KitButton (Reset)
    └── KitButton (Confirm)
```

**Design Patterns**:

- Section headers with 18sp text
- Dividers between sections (1dp height)
- 32dp margin between sections
- 15dp horizontal margins
- Switch components for toggle options

---

### 2. Common Layout Patterns

#### Dialog Layouts

**Characteristics**:

- Transparent background
- Rounded corners (12dp)
- Title area with optional close button
- Content area (scrollable if needed)
- Action buttons at bottom

#### List Item Layouts

**Characteristics**:

- Fixed height (typically 48-56dp)
- Left icon (24-40dp)
- Title and subtitle text
- Optional right arrow or action
- Divider at bottom (1dp)

#### Card Layouts

**Characteristics**:

- Background: `#FF202630` (dark theme)
- Corner radius: 8dp
- Padding: 16dp
- Elevation: 2-4dp

---

## Layout Categories

### By Size

| Size Range       | Count | Typical Usage                     |
| ---------------- | ----- | --------------------------------- |
| < 500 chars      | ~20   | Simple items, placeholders        |
| 500-2000 chars   | ~80   | List items, small components      |
| 2000-5000 chars  | ~60   | Dialogs, cards, forms             |
| 5000-10000 chars | ~30   | Complex screens, fragments        |
| > 10000 chars    | ~15   | Full screens with many components |

### By Type

| Type             | Description                        |
| ---------------- | ---------------------------------- |
| Activity Layouts | Full-screen layouts for activities |
| Fragment Layouts | Partial layouts for fragments      |
| Dialog Layouts   | Modal dialog content               |
| Item Layouts     | RecyclerView/ListView items        |
| Partial Layouts  | Reusable UI components             |

---

## Common View Components

### Custom Views

| Class                                               | Purpose                  |
| --------------------------------------------------- | ------------------------ |
| `com.major.android.uikit2.button.KitButton`         | Styled button component  |
| `com.major.android.uikit2.selection.KitSwitch`      | Custom switch toggle     |
| `com.major.android.uikit2.selection.KitRadioButton` | Custom radio button      |
| `com.binance.c2c.trade.view.AutoPlaceAmountView`    | Amount input for trading |
| `com.binance.common.widget.BinanceRecyclerView`     | Custom RecyclerView      |

### Standard Views Used

| View                 | Usage                            |
| -------------------- | -------------------------------- |
| `LinearLayout`       | Vertical/horizontal containers   |
| `ConstraintLayout`   | Complex layouts with constraints |
| `NestedScrollView`   | Scrollable content               |
| `RecyclerView`       | Lists and grids                  |
| `AppCompatImageView` | Icons and images                 |
| `AppCompatEditText`  | Text input                       |
| `TextView`           | Text display                     |

---

## Layout Dimensions

### Standard Margins

| Element            | Value |
| ------------------ | ----- |
| Screen edge margin | 15dp  |
| Section spacing    | 32dp  |
| Item spacing       | 16dp  |
| Small spacing      | 8dp   |

### Standard Padding

| Element           | Value                          |
| ----------------- | ------------------------------ |
| Button padding    | 15dp horizontal, 12dp vertical |
| Card padding      | 16dp                           |
| List item padding | 15dp horizontal                |

### Component Heights

| Component   | Height  |
| ----------- | ------- |
| Title bar   | 44dp    |
| Button      | 40dp    |
| Input field | 52dp    |
| List item   | 48-56dp |

---

## Screen Hierarchy

### Main Navigation Structure

```
MainActivity
├── HomeFragment
│   ├── Market Overview
│   ├── Portfolio Summary
│   └── Quick Actions
├── TradeFragment
│   ├── Spot Trading
│   ├── Margin Trading
│   └── P2P Trading
├── AssetsFragment
│   ├── Asset List
│   ├── Deposit/Withdraw
│   └── Transaction History
└── ProfileFragment
    ├── Account Settings
    ├── Security
    └── Preferences
```

### C2C Trading Flow

```
C2C Homepage
├── Buy/Sell Tabs
├── Currency Selection
├── Payment Method Filter
├── Ad List
│   └── Ad Detail
│       ├── Order Creation
│       ├── Payment Info
│       └── Chat
└── Filter Screen (identified above)
```

---

## Layout Resource References

### Common Drawables

| Reference              | Usage                  |
| ---------------------- | ---------------------- |
| `@drawable/2131236935` | Back arrow icon        |
| `@drawable/2131237181` | Info/help icon         |
| `@drawable/2131237161` | Dropdown arrow         |
| `@drawable/2131238742` | Input field background |
| `@drawable/2131236027` | Transparent background |
| `@drawable/2131236029` | Card background        |

### Common Colors

| Reference           | Value     | Usage              |
| ------------------- | --------- | ------------------ |
| `@color/2131099686` | White     | Background (light) |
| `@color/2131099776` | Black     | Primary text       |
| `@color/2131099762` | Dark gray | Dividers           |
| `@color/2131099749` | Gray      | Secondary text     |
| `@color/2131099790` | Yellow    | Links, highlights  |

### Common Fonts

| Reference          | Usage         |
| ------------------ | ------------- |
| `@font/2131296273` | Regular text  |
| `@font/2131296274` | Medium weight |
| `@font/2131296275` | Bold/heading  |

---

## Layout Best Practices

### Observed Patterns

1. **ConstraintLayout for Complex Screens**
   - Used for screens with many positioned elements
   - Reduces view hierarchy depth
   - Better performance than nested LinearLayouts

2. **NestedScrollView for Scrollable Content**
   - Wraps content that exceeds screen height
   - Enables nested scrolling with inner RecyclerViews
   - `fillViewport="true"` for proper sizing

3. **RecyclerView for Lists**
   - Horizontal chips for filter options
   - Vertical lists for content
   - Efficient view recycling

4. **LinearLayout for Simple Stacks**
   - Vertical orientation for forms
   - Horizontal orientation for button groups
   - Weight for flexible sizing

---

## Responsive Considerations

### Layout Variants

The app includes layout variants for:

- `layout-v21/` - API 21+ specific layouts
- `layout-ldrtl/` - Right-to-left language support
- `layout-sw600dp/` - 7-inch tablets
- `layout-sw720dp/` - 10-inch tablets

### Dimension References

Layouts reference dimension resources for:

- Margins and padding
- Text sizes
- Component heights
- Icon sizes

This enables consistent sizing across different screen densities.

---

## Notes

1. Layout files use obfuscated numeric names
2. Screen purpose is determined by string resources and view structure
3. Custom UI kit components (`com.major.android.uikit2.*`) are used extensively
4. ConstraintLayout is preferred for complex layouts
5. Standard margins follow 8dp grid system
6. Dark theme is the primary theme with dark backgrounds
