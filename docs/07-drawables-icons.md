# Binance UI/UX Knowledge Base - Drawables & Icons

## Overview

This document catalogs the drawable resources used in the Binance Android app, including icons, backgrounds, gradients, and selectors.

---

## Drawable Directory Structure

The app uses multiple drawable directories for different configurations:

| Directory              | Purpose                                               |
| ---------------------- | ----------------------------------------------------- |
| `drawable/`            | Base XML drawables (vectors, shapes, selectors)       |
| `drawable-hdpi/`       | High density (240dpi) raster images                   |
| `drawable-mdpi/`       | Medium density (160dpi) raster images                 |
| `drawable-xhdpi/`      | Extra high density (320dpi) raster images             |
| `drawable-xxhdpi/`     | Extra extra high density (480dpi) raster images       |
| `drawable-xxxhdpi/`    | Extra extra extra high density (640dpi) raster images |
| `drawable-night/`      | Dark mode specific drawables                          |
| `drawable-night-hdpi/` | Dark mode high density                                |
| `drawable-ldrtl/`      | Right-to-left language support                        |
| `drawable-anydpi/`     | Density-independent (usually vector)                  |
| `drawable-v23/`        | API 23+ specific drawables                            |
| `drawable-nodpi/`      | Density-independent images                            |

---

## Icon Resources

### App Launcher Icons

**Location**: `mipmap-*` directories

| File                     | Purpose                                     | Usage        |
| ------------------------ | ------------------------------------------- | ------------ |
| `ic_launcher_logo`       | Standard launcher icon                      |              |
| `ic_launcher_round_logo` | Round launcher icon (Android 7.1+)          |              |
| `ic_copy.xml`            | Overlapping rectangles (standard copy icon) | Trade Menu   |
| `ic_bots.xml`            | Robot head profile icon                     | Trade Menu   |
| `ic_manage.xml`          | Sliders/Filters icon                        | Trade Menu   |
| `ic_leverage_pill.xml`   | Pill background for x2, x5, x10 multiplier  | Margin/Trade |
| `ic_unit_switcher.xml`   | Opposing arrows circle (%/$)                | Order Form   |
| `2131820547`             | Adaptive icon foreground                    |              |
| `2131820548`             | Adaptive icon background                    |              |
| `2131820550`             | Additional icon variant                     |              |

### Standard Icon Sizes

| Density | Size Multiplier | Typical Use         |
| ------- | --------------- | ------------------- |
| mdpi    | 1x              | Baseline            |
| hdpi    | 1.5x            | 36x36 for 24dp icon |
| xhdpi   | 2x              | 48x48 for 24dp icon |
| xxhdpi  | 3x              | 72x72 for 24dp icon |
| xxxhdpi | 4x              | 96x96 for 24dp icon |

---

## Vector Drawables

### Password Visibility Icons

**File**: `2131231166.xml` (Visible)

```xml
<vector android:height="24.0dip" android:width="24.0dip"
    android:viewportWidth="24.0" android:viewportHeight="24.0">
    <path android:name="strike_through"
        android:pathData="@string/path_password_strike_through"
        android:strokeColor="@android:color/white"
        android:strokeWidth="1.8"
        android:trimPathEnd="0.0" />
    <group>
        <clip-path android:name="eye_mask"
            android:pathData="@string/path_password_eye_mask_visible" />
        <path android:name="eye"
            android:fillColor="@android:color/white"
            android:pathData="@string/path_password_eye" />
    </group>
</vector>
```

**File**: `2131231169.xml` (Hidden)

```xml
<vector android:height="24.0dip" android:width="24.0dip"
    android:viewportWidth="24.0" android:viewportHeight="24.0">
    <path android:name="strike_through"
        android:pathData="@string/path_password_strike_through"
        android:strokeColor="@android:color/white"
        android:strokeWidth="1.8" />
    <group>
        <clip-path android:name="eye_mask"
            android:pathData="@string/path_password_eye_mask_strike_through" />
        <path android:name="eye"
            android:fillColor="@android:color/white"
            android:pathData="@string/path_password_eye" />
    </group>
</vector>
```

**Specifications**:

- Size: 24dp x 24dp
- Color: White (tintable)
- Stroke Width: 1.8dp
- Animated using `trimPathEnd`

---

## Gradient Drawables

### Radial Gradient 1 (Pink/Purple)

**File**: `2131231840.xml`

```xml
<gradient android:angle="0.0" android:type="radial"
    android:centerX="18.21" android:centerY="23.43"
    android:gradientRadius="24.546">
    <item android:color="#ffff1b90" android:offset="0.244" />
    <item android:color="#fff80261" android:offset="0.437" />
    <item android:color="#ffed00c0" android:offset="0.688" />
    <item android:color="#ffc500e9" android:offset="0.777" />
    <item android:color="#ff7017ff" android:offset="0.893" />
</gradient>
```

**Color Stops**:
| Offset | Color |
|--------|-------|
| 0.244 | `#FF1B90` (Pink) |
| 0.437 | `#F80261` (Red-Pink) |
| 0.688 | `#ED00C0` (Magenta) |
| 0.777 | `#C500E9` (Purple) |
| 0.893 | `#7017FF` (Blue-Purple) |

### Radial Gradient 2 (Orange/Yellow)

**File**: `2131231841.xml`

```xml
<gradient android:angle="0.0" android:type="radial"
    android:centerX="9.525" android:centerY="20.379"
    android:gradientRadius="10.636">
    <item android:color="#ffffd600" android:offset="0.0" />
    <item android:color="#ffff6930" android:offset="0.484" />
    <item android:color="#fffe3b36" android:offset="0.734" />
    <item android:color="#00fe3b36" android:offset="1.0" />
</gradient>
```

**Color Stops**:
| Offset | Color |
|--------|-------|
| 0.0 | `#FFD600` (Yellow) |
| 0.484 | `#FF6930` (Orange) |
| 0.734 | `#FE3B36` (Red) |
| 1.0 | `#00FE3B36` (Transparent Red) |

---

## Shape Drawables

### Common Background Shapes

**Card Background**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FF202630" />
    <corners android:radius="8dp" />
</shape>
```

**Input Field Background**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FF1E2329" />
    <corners android:radius="8dp" />
    <stroke android:width="1dp" android:color="#FF2B3139" />
</shape>
```

**Button Background (Primary)**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FFF0B90B" />
    <corners android:radius="4dp" />
</shape>
```

---

## Selector Drawables

### Button State Selector

```xml
<selector>
    <item android:state_pressed="true">
        <shape android:shape="rectangle">
            <solid android:color="#FFD4A10A" />
            <corners android:radius="4dp" />
        </shape>
    </item>
    <item android:state_enabled="false">
        <shape android:shape="rectangle">
            <solid android:color="#FF474D57" />
            <corners android:radius="4dp" />
        </shape>
    </item>
    <item>
        <shape android:shape="rectangle">
            <solid android:color="#FFF0B90B" />
            <corners android:radius="4dp" />
        </shape>
    </item>
</selector>
```

### Icon State Selector

```xml
<selector>
    <item android:state_selected="true" android:drawable="@drawable/icon_selected" />
    <item android:state_pressed="true" android:drawable="@drawable/icon_pressed" />
    <item android:drawable="@drawable/icon_default" />
</selector>
```

---

## Icon Categories

### Navigation Icons

| Icon             | Usage              |
| ---------------- | ------------------ |
| Back arrow       | Toolbar navigation |
| Close (X)        | Dialogs, search    |
| Menu (hamburger) | Side drawer        |
| Home             | Bottom nav         |
| Markets          | Bottom nav         |
| Trade            | Bottom nav         |
| Assets           | Bottom nav         |

### Action Icons

| Icon    | Usage                |
| ------- | -------------------- |
| Search  | Search functionality |
| Filter  | Filter lists         |
| Sort    | Sort options         |
| Refresh | Refresh data         |
| Share   | Share content        |
| Copy    | Copy to clipboard    |
| Edit    | Edit content         |
| Delete  | Delete items         |

### Status Icons

| Icon              | Usage                 |
| ----------------- | --------------------- |
| Success checkmark | Successful operations |
| Error cross       | Failed operations     |
| Warning triangle  | Warnings              |
| Info circle       | Information           |
| Loading spinner   | Progress indication   |

### Trading Icons

| Icon          | Usage                           |
| ------------- | ------------------------------- |
| Trending up   | Price increase                  |
| Trending down | Price decrease                  |
| Buy           | Buy orders                      |
| Sell          | Sell orders                     |
| Chart         | Price charts                    |
| Order book    | Order book view                 |
| Sparkline     | Mini trend chart (Green/Red)    |
| Dominant Flow | `S` (Red Box) / `B` (Green Box) |

### Crypto Icons

The app includes icons for major cryptocurrencies:

- Bitcoin (BTC)
- Ethereum (ETH)
- BNB
- USDT
- **Smart Flow Icons**:
  - `S` Icon: White "S" inside a square red box (#F6465D). Indicates Sell/Short flow dominance. Vector `res/drawable/ic_smart_sell.xml`.
  - `B` Icon: White "B" inside a square green box (#0ECB81). Indicates Buy/Long flow dominance. Vector `res/drawable/ic_smart_buy.xml`.
- **Engagement Icon**:
  - Person silhouette icon (Outline) used in Smart Signals to denote trader interaction or signal strength.
- **Directional UI Icons**:
  - `Call ↗`: Up-right arrow icon used in Options navigation.
  - `Put ↘`: Down-right arrow icon used in Options navigation.
  - `Transfer`: Two horizontal arrows pointing in opposite directions (Left/Right) used for balance transfer entry.
- **Refresh Icon**: Circular arrow icon accompanied by text (e.g., `30s`) indicating auto-refresh interval.
- **Sentiment Bars**: Dual-progress horizontal bars used to visualize Long/Short sentiment ratios. Layer-list with `@color/price_up` (left) and `@color/price_down` (right).
- **Empty State Graphic**: Large thematic gray illustration featuring a magnifying glass over documents with an exclamation mark, used for "No records" states.
- **View Button (Drawable)**: Gray rounded rectangular background with centered white text, used as an action trigger in lists.
- And 300+ other tokens

---

## Drawable Naming Patterns

### Obfuscated Names

Most drawables use numeric identifiers:

- `2131231075.xml` through `2131231841.xml`
- These are obfuscated resource IDs

### Readable Names (Third-Party Libraries)

Some drawables retain readable names:

- `onfido_*` - Onfido SDK resources
- `ucrop_*` - uCrop library resources

---

## Color State Lists

### Text Colors

**Location**: `color/` directory

```xml
<selector>
    <item android:state_enabled="false" android:color="#FF707A8A" />
    <item android:color="#FFFFFFFF" />
</selector>
```

### Icon Tint Colors

```xml
<selector>
    <item android:state_selected="true" android:color="#FFF0B90B" />
    <item android:state_pressed="true" android:color="#FFFCD535" />
    <item android:color="#FF848E9C" />
</selector>
```

---

## Night Mode Drawables

### Dark Theme Variants

Located in `drawable-night-*` directories:

- Alternative colors for dark backgrounds
- Inverted icons where needed
- Different gradient stops

### Color Variants

| Resource       | Light Theme | Dark Theme  |
| -------------- | ----------- | ----------- |
| Background     | White       | `#FF0B0E11` |
| Card           | `#FFF5F5F5` | `#FF1E2329` |
| Text Primary   | Black       | White       |
| Text Secondary | `#FF707A8A` | `#FF848E9C` |

---

## RTL Support

### Right-to-Left Drawables

Located in `drawable-ldrtl-*` directories:

- Mirrored navigation icons
- Directional arrows
- Progress indicators

### Mirrored Icons

| Icon    | LTR | RTL |
| ------- | --- | --- |
| Back    | ←   | →   |
| Forward | →   | ←   |
| Refresh | ↻   | ↺   |

---

## Drawable Statistics

### By Type

| Type               | Count  | Description              |
| ------------------ | ------ | ------------------------ |
| Vector Drawables   | ~200+  | XML vectors (icons)      |
| Shape Drawables    | ~100+  | Rectangles, ovals        |
| Gradient Drawables | ~20+   | Linear, radial gradients |
| Selectors          | ~50+   | State-based drawables    |
| Layer Lists        | ~30+   | Composite drawables      |
| Raster Images      | ~1000+ | PNGs in density folders  |

### By Density

| Density | Approximate Count |
| ------- | ----------------- |
| hdpi    | ~500              |
| mdpi    | ~300              |
| xhdpi   | ~600              |
| xxhdpi  | ~700              |
| xxxhdpi | ~400              |

---

## Usage in Layouts

### Referencing Drawables

```xml
<!-- Vector drawable -->
<ImageView android:src="@drawable/2131231166" />

<!-- Background -->
<View android:background="@drawable/2131236027" />

<!-- With tint -->
<ImageView
    android:src="@drawable/2131231166"
    android:tint="@color/primary" />
```

### Programmatic Usage

```kotlin
// Get drawable
val drawable = ContextCompat.getDrawable(context, R.drawable.icon)

// Set tint
drawable?.setTint(color)

// Set as background
view.background = drawable
```

---

---

## 11. Complex Data Components

### Sparkline (Mini Charts)

- **Usage**: Asset equity curves, rapid market trends.
- **Specifications**:
  - `StrokeWidth`: 1.5dp
  - `Smoothness`: Cubic-Bezier path interpolation.
  - `Colors`: `#2EBD85` (Positive), `#F6465D` (Negative).
  - `Size`: Dynamic (Typically 64dp x 24dp).

### Sentiment Bar (Smart Signals)

- **Component**: `CustomSplitProgressBar`.
- **Logic**: Percent-based split between two colors.
- **Icon Overlay**: Small user/person silhouette preceding the count.
- **Dotted Underlines**: Used on component labels (e.g., `Price`, `Amount`, `Margin Mode`) to indicate that the label itself acts as a tooltip trigger.
- **Precision Controls**: `[-]` and `[+]` buttons appearing on the far edges of numeric inputs.
- **Asset Toggles**: Circular or square toggle buttons (e.g., `S` for Single Asset Mode) located within or adjacent to the input area.
- **Placeholder Buttons**: `BBO` (Best Bid Offer) badge appearing within the Price input field.

---

## Notes

1. Most drawable names are obfuscated numeric IDs
2. Vector drawables are preferred for scalability
3. Night mode variants ensure dark theme consistency
4. RTL support for international users
5. Gradients use aapt namespace for complex definitions
6. Icons follow 24dp standard size
7. State selectors provide visual feedback for interactions
