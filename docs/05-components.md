# Binance UI/UX Knowledge Base - Components

## Overview

This document catalogs the UI components used in the Binance Android app, including custom views, buttons, cards, input fields, and dialogs.

---

## Custom UI Kit Components

The Binance app uses a custom UI kit (`com.major.android.uikit2`) for consistent styling.

### Button Components

#### KitButton

**Package**: `com.major.android.uikit2.button.KitButton`

**Styles**:
```xml
<style name="2132148734">Primary Button</style>
<style name="2132148739">Secondary/Reset Button</style>
```

**Usage Example**:
```xml
<com.major.android.uikit2.button.KitButton
    android:id="@id/2131448043"
    android:layout_width="0.0dip"
    android:layout_height="40.0dip"
    android:text="@string/confirm"
    android:layout_weight="1.0"
    style="@style/2132148734" />
```

**Button Specifications**:
| Property | Primary | Secondary |
|----------|---------|-----------|
| Height | 40dp | 40dp |
| Background | Yellow (`#FFF0B90B`) | Transparent/Gray |
| Text Color | Black | Primary color |
| Corner Radius | 4dp | 4dp |
| Text Size | 16sp | 16sp |
| Font | Medium | Medium |

### Selection Components

#### KitSwitch

**Package**: `com.major.android.uikit2.selection.KitSwitch`

**Usage**:
```xml
<com.major.android.uikit2.selection.KitSwitch
    android:id="@id/2131429597"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

**Specifications**:
- Thumb color: Primary yellow when on
- Track color: Light gray when off
- Minimum touch target: 48dp

#### KitRadioButton

**Package**: `com.major.android.uikit2.selection.KitRadioButton`

**Usage**:
```xml
<com.major.android.uikit2.selection.KitRadioButton
    android:id="@id/2131439305"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content" />
```

**Specifications**:
- Selected color: Primary yellow
- Unselected color: Gray
- Size: 20dp

---

## Standard Components

### Input Fields

#### EditText Styles

| Property | Value |
|----------|-------|
| Height | 52dp |
| Text Size | 16sp |
| Text Color | `#FF000000` (dark) / `#FFFFFFFF` (light) |
| Hint Color | `#FFB7BDC6` |
| Background | Rounded rectangle, 8dp radius |
| Padding | 15dp horizontal |

**Example**:
```xml
<androidx.appcompat.widget.AppCompatEditText
    android:textSize="16.0sp"
    android:textColor="@color/2131099776"
    android:textColorHint="@color/2131099774"
    android:background="@drawable/2131236027"
    android:layout_width="0.0dip"
    android:layout_height="wrap_content"
    android:hint="@string/fiat_filter_target_money" />
```

### TextView Styles

#### Primary Text
- Size: 16sp
- Color: White (dark theme) / Black (light theme)
- Font: Regular

#### Secondary Text
- Size: 14sp
- Color: `#FF848E9C`
- Font: Regular

#### Caption Text
- Size: 12sp
- Color: `#FFB7BDC6`
- Font: Regular

#### Title Text
- Size: 18sp
- Color: Primary text color
- Font: Medium/Bold

---

## Card Components

### Standard Card

**Background Color**: `#FF202630` (dark theme)

**Specifications**:
| Property | Value |
|----------|-------|
| Corner Radius | 8dp |
| Padding | 16dp |
| Elevation | 2-4dp |
| Stroke | None (or 1dp for outlined) |

**Background Drawable**:
```xml
<shape android:shape="rectangle">
    <solid android:color="#FF202630" />
    <corners android:radius="8dp" />
</shape>
```

### Agreement Card

**Specifications**:
```xml
<dimen name="sns_agreement_card_corner_radius">8.0dip</dimen>
<dimen name="sns_agreement_card_stroke_width">1.0dip</dimen>
```

---

## Dialog Components

### Standard Dialog

**Layout Structure**:
```
ConstraintLayout/LinearLayout
├── Title TextView (18sp, bold)
├── Content area (scrollable if needed)
│   └── Message TextView (14sp)
└── Button container
    ├── Negative Button (secondary style)
    └── Positive Button (primary style)
```

**Specifications**:
| Property | Value |
|----------|-------|
| Background | `#FF12161C` (dark) |
| Corner Radius | 12dp |
| Width | 85-95% of screen width |
| Dim Amount | 0.32 |

### Bottom Sheet Dialog

**Specifications**:
```xml
<dimen name="sns_bottom_sheet_corner_radius">12.0dip</dimen>
<dimen name="sns_bottom_sheet_top_padding">16.0dip</dimen>
```

**Background Color**: `sns_bottomSheetBackground` (`#FFFFFFFF`)

**Handle**:
- Width: 32dp
- Height: 4dp
- Color: `#FFD2D3D5`
- Top margin: 8dp

---

## List Components

### RecyclerView Item

**Standard Item Height**: 48-56dp

**Layout Structure**:
```
ConstraintLayout (48-56dp height)
├── Icon (24dp, left aligned)
├── Title TextView (16sp)
├── Subtitle TextView (12sp, optional)
└── Action/Arrow (right aligned)
```

### Selection Item

**With Switch**:
```
ConstraintLayout
├── KitSwitch (right aligned)
└── TextView (left aligned, max 300dp width)
```

**With RadioButton**:
```
ConstraintLayout
├── KitRadioButton (right aligned)
└── TextView (left aligned)
```

---

## Progress Components

### ProgressBar

**Sizes**:
```xml
<dimen name="sns_progress_bar_size_small">32.0dip</dimen>
<dimen name="sns_progress_bar_size_medium">48.0dip</dimen>
<dimen name="sns_progress_bar_size_large">56.0dip</dimen>
```

**Colors**:
- Progress Tint: `sns_progressBarTint` (Primary blue)
- Background: `sns_progressBarBackground`

### Shimmer Effect

**Color**: `sns_progressBarShimmer` (`#33FFFFFF`)

---

## Badge Components

### Status Badge

**Profit Badge**:
- Background: `#1A2EBD85` (10% green)
- Text Color: `#FF2EBD85`
- Corner Radius: 4dp
- Padding: 4dp horizontal, 2dp vertical

**Loss Badge**:
- Background: `#1AF6465D` (10% red)
- Text Color: `#FFF6465D`
- Corner Radius: 4dp

### Count Badge

- Size: 18dp diameter
- Background: `#FFF6465D`
- Text Color: White
- Text Size: 10sp

---

## Icon Components

### Standard Icon Sizes

| Size | Usage |
|------|-------|
| 16dp | Inline icons, indicators |
| 20dp | Small action icons |
| 24dp | Standard toolbar icons |
| 32dp | Medium icons |
| 40dp | Large icons |
| 48dp | Feature icons |

### Icon Colors

| Context | Color |
|---------|-------|
| Primary | White (dark theme) |
| Secondary | `#FF848E9C` |
| Disabled | `#FF707A8A` |
| Accent | `#FFF0B90B` |

---

## Divider Components

### List Divider

**Height**: 1dp

**Color**: `#FF202630` (subtle) or `#FF474D57` (visible)

### Rounded Divider

**Height**: 4dp

**Color**: `sns_listSeparator`

---

## Chip Components

### Filter Chip

**Specifications**:
- Height: 32dp
- Corner Radius: 16dp (fully rounded)
- Padding: 12dp horizontal
- Text Size: 14sp
- Selected: Yellow background with black text
- Unselected: Gray background with white text

### Payment Method Chip

**Specifications**:
- Height: 36dp
- Corner Radius: 8dp
- Icon + Text layout
- Selectable state

---

## Tab Components

### TabLayout

**Specifications**:
- Height: 44dp
- Indicator Height: 2dp
- Indicator Color: `#FFF0B90B`
- Text Size: 14sp
- Selected Text: Bold, Primary color
- Unselected Text: Regular, Gray

---

## Toolbar Components

### Standard Toolbar

**Height**: 56dp (standard) or 44dp (compact)

**Elements**:
- Navigation icon (24dp, left)
- Title (18sp, medium weight)
- Subtitle (12sp, optional)
- Action icons (24dp, right)

### Search Toolbar

**Elements**:
- Search icon (left)
- EditText (expanded)
- Clear button (right)

---

## Toast Components

### Standard Toast

**Specifications**:
```xml
<dimen name="agree_toast_height">44.0dip</dimen>
<dimen name="agree_toast_width">188.0dip</dimen>
<dimen name="agree_toast_text_size">16.0sp</dimen>
<color name="agree_toast_bg_color">#b3000000</color>
```

---

## Component States

### Button States

| State | Background | Text Color |
|-------|------------|------------|
| Normal | Primary Yellow | Black |
| Pressed | Darker Yellow | Black |
| Disabled | Light Yellow | Gray |

### Input States

| State | Border Color | Hint Color |
|-------|--------------|------------|
| Normal | `#FFD8DCE1` | `#FF848E9C` |
| Focused | `#FFF0B90B` | `#FF848E9C` |
| Error | `#FFF6465D` | `#FFF6465D` |
| Disabled | `#FF474D57` | `#FF707A8A` |

### Switch States

| State | Thumb | Track |
|-------|-------|-------|
| On | Yellow | Light Yellow |
| Off | Gray | Light Gray |
| Disabled | Light Gray | Very Light Gray |

---

## Component Styling Patterns

### Using Style Attributes

```xml
<!-- Button with style reference -->
<com.major.android.uikit2.button.KitButton
    style="@style/2132148734"
    android:text="@string/confirm" />
```

### Using Theme Attributes

```xml
<!-- Colors from theme -->
<TextView
    android:textColor="?android:textColorPrimary" />
```

### Using Drawable Backgrounds

```xml
<!-- Background with selector -->
<View
    android:background="@drawable/2131238742" />
```

---

---

## Trading-Specific Components

### Order Book Component
**Usage:** Real-time liquidity visualization on trade pages

**Structure:**
```
┌─────────────────────────────┐
│ Price(USDT) | Amount(BTC)  │
├─────────────────────────────┤
│ 66,250.0    │ 0.543   ████ │  ← Ask (Red)
│ 66,240.5    │ 1.234   ████ │
│ 66,230.0    │ 0.876   ███  │
│ 66,184.8    │ SPREAD       │  ← Current Price (Green)
│ 66,180.0    │ 2.345   ████ │  ← Bid (Green)
│ 66,170.5    │ 0.987   ███  │
└─────────────────────────────┘
```

**Specifications:**
| Property | Asks (Sell) | Bids (Buy) |
|----------|-------------|------------|
| Price Color | `#CF304A` Red | `#02C076` Green |
| Amount Color | `#FFFFFF` White | `#FFFFFF` White |
| Depth Bar Color | `#1ACF304A` (10% red) | `#1A02C076` (10% green) |
| Row Height | 24dp | 24dp |
| Font Size (Price) | 13sp | 13sp |
| Font Size (Amount) | 12sp | 12sp |
| Depth Bar Height | 20dp | 20dp |
| Max Bar Width | 50% of column | 50% of column |

**Features:**
- Real-time flash on update (color pulse)
- Auto-scroll to stay centered on spread
- Cumulative depth visualization
- Tap row to auto-fill price in order form

---

### Recent Trades Ticker
**Usage:** Live market trade feed

**Layout:**
```
Price      Amount     Time
66,185.0   0.0234     14:32:45  ← Green (buy)
66,184.5   0.1543     14:32:44  ← Red (sell)
66,185.5   0.0876     14:32:43  ← Green (buy)
```

**Specifications:**
| Property | Value |
|----------|-------|
| Row Height | 20dp |
| Price Color | Green `#02C076` (buy) / Red `#CF304A` (sell) |
| Amount Color | White `#FFFFFF` 11sp |
| Time Color | Gray `#848E9C` 10sp |
| Scroll Direction | Vertical auto-scroll (top to bottom) |
| Update Frequency | Real-time (websocket) |
| Flash Effect | Background tint on new trade (200ms) |

---

### Candlestick Chart Component
**Usage:** Primary price visualization

**Types Supported:**
1. Candlestick (default)
2. Line chart
3. Heikin Ashi
4. Hollow candles
5. Area chart
6. OHLC Bars

**Specifications:**
| Property | Value |
|----------|-------|
| Candle Up Color | Green `#02C076` |
| Candle Down Color | Red `#CF304A` |
| Wick Width | 1dp |
| Candle Body Min Width | 4dp |
| Volume Bar Height | 40dp (bottom pane) |
| Grid Lines | 4 horizontal, light gray `#2B3139` |
| Y-Axis Labels | Right-aligned, 11sp Gray |
| X-Axis Labels | Bottom, timestamps 12sp |

---

### Timeframe Selector
**Usage:** Chart period selection

**Layout:**
```
[1m] [5m] [15m] [1H] [4H] [1D] [1W] [1M]
         ↑ Active (Yellow)
```

**Specifications:**
| Property | Value |
|----------|-------|
| Button Size | 40dp width x 28dp height |
| Spacing | 4dp gap between buttons |
| Background (Inactive) | `#2B3139` Dark Gray |
| Text (Inactive) | 12sp White |
| Background (Active) | Yellow `#F0B90B` |
| Text (Active) | 12sp Bold Black |
| Corner Radius | 4dp |
| Scroll | Horizontal if overflow |

---

### Technical Indicator Overlay
**Usage:** Chart analysis tools

**Common Indicators:**
1. **Volume** (default, bottom pane)
2. **MA (Moving Average)** - MA7, MA25, MA99
3. **EMA (Exponential MA)** - EMA9, EMA21
4. **Bollinger Bands** - Upper/Middle/Lower
5. **MACD** - Histogram + signal line (sub-pane)
6. **RSI** - 0-100 oscillator (sub-pane)

**Specifications:**
| Component | Specification |
|-----------|---------------|
| Menu Access | "..." icon top-right toolbar |
| Multiple Instances | Allowed (e.g., MA20 + MA50 + MA200) |
| Opacity Control | Slider per indicator |
| Pane Management | Resizable dividers |
| Persistence | Saved to chart template |

---

### Long/Short Ratio Bar
**Usage:** Market sentiment visualization

**Layout:**
```
Long/Short Ratio
████████░░░░░░░░░░░░ 8.76% / 91.24%
↑ Green        ↑ Red
```

**Specifications:**
| Property | Value |
|----------|-------|
| Total Width | 100% of container |
| Height | 8dp |
| Long Color | Green `#02C076` |
| Short Color | Red `#CF304A` |
| Border | 1dp `#474D57` |
| Divider | 1dp White at 50% center |
| Percentage Labels | 11sp matching color |
| Update | Real-time from API |

---

### Funding Rate Display
**Usage:** Perpetual contract funding info

**Layout:**
```
Funding (8h) / Countdown
-0.00516% / 00:20:18
```

**Specifications:**
| Property | Value |
|----------|-------|
| Label Font | 11sp Gray `#848E9C` |
| Value Font | 12sp Red/Green based on sign |
| Countdown Background | `#2B3139` rounded pill |
| Countdown Font | 12sp White Monospace |
| Update Frequency | Every second (countdown), 8h (rate) |
| Urgency Color | Yellow when < 1 minute |

---

### Allocation Slider (Diamond Nodes)
**Usage:** Position size percentage selector

**Layout:**
```
┌──────────◆──────────◆──────────◆──────────◆──────────┐
   0%        25%        50%       75%       100%
```

**Specifications:**
| Property | Value |
|----------|-------|
| Track Height | 2dp |
| Track Color (Inactive) | `#2B3139` |
| Track Color (Active) | `#F0B90B` (filled portion) |
| Node Shape | Diamond (rotated square 45°) |
| Node Size | 12dp x 12dp |
| Node Color | Yellow `#F0B90B` |
| Positions | 0%, 25%, 50%, 75%, 100% (exact) |
| Snap Behavior | Gentle snap to nearest node |
| Floating Label | 10sp White on `#2B3139` pill |
| Label Animation | Slides with thumb, auto-hide 2s |

---

## Notes

1. Custom UI kit components ensure consistent styling
2. Components follow Material Design guidelines with Binance branding
3. Dark theme is the primary theme
4. Yellow accent color is used for primary actions
5. All interactive components have 48dp minimum touch target
6. Component states use color variations for feedback
