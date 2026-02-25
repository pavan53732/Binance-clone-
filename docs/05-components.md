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

## Notes

1. Custom UI kit components ensure consistent styling
2. Components follow Material Design guidelines with Binance branding
3. Dark theme is the primary theme
4. Yellow accent color is used for primary actions
5. All interactive components have 48dp minimum touch target
6. Component states use color variations for feedback
