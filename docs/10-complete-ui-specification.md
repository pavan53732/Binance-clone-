# Binance UI/UX Knowledge Base - Complete UI Specification

## Overview

This document provides a comprehensive UI specification summary for the Binance Android app, consolidating all design patterns, components, and specifications documented in this knowledge base.

### Core Architecture: Dual Interfaces

The Binance App encompasses two distinct, self-contained interfaces which govern the layout and functionality of the application:

1. **Exchange Interface**: The traditional CeFi exchange platform with tabs for Home, Markets, Trade, Futures, and Assets.
2. **Web3 Wallet Interface**: The decentralized, non-custodial wallet with tabs for Home, Markets, Trade, Discover, and Assets.

All UI components detailed below may appear slightly differently or have different configurations depending on which of these two core interfaces is currently active.

---

## Design System Summary

### Brand Identity

| Element               | Value                         |
| --------------------- | ----------------------------- |
| App Name              | Binance                       |
| Primary Color         | `#F0B90B` (Binance Yellow)    |
| Secondary Color       | `#FCD535` (Light Yellow)      |
| Success Color         | `#0ECB81` / `#2EBD85` (Green) |
| Error Color           | `#F6465D` (Red)               |
| Dark Theme Background | `#0B0E11`                     |

### Design Principles

1. **Dark Theme First**: Primary theme is dark with light theme support
2. **High Contrast**: Clear visual hierarchy with contrasting colors
3. **Consistent Spacing**: 4dp/8dp grid system
4. **Accessibility**: Minimum 48dp touch targets
5. **Performance**: Hardware-accelerated animations

---

## Color System

### Primary Colors

| Name            | Light Theme | Dark Theme | Usage               |
| --------------- | ----------- | ---------- | ------------------- |
| Primary         | `#F0B90B`   | `#F0B90B`  | Buttons, highlights |
| Primary Variant | `#FCD535`   | `#FCD535`  | Secondary actions   |
| Background      | `#FFFFFF`   | `#0B0E11`  | Screen background   |
| Surface         | `#F5F5F5`   | `#1E2329`  | Cards, dialogs      |
| Error           | `#F6465D`   | `#F6465D`  | Errors, losses      |
| Success         | `#0ECB81`   | `#0ECB81`  | Success, profits    |

### Text Colors

| Type      | Light Theme | Dark Theme |
| --------- | ----------- | ---------- |
| Primary   | `#000000`   | `#FFFFFF`  |
| Secondary | `#707A8A`   | `#848E9C`  |
| Disabled  | `#B7BDC6`   | `#474D57`  |
| Link      | `#F0B90B`   | `#F0B90B`  |

### Semantic Colors

| Purpose   | Color     |
| --------- | --------- |
| Profit/Up | `#0ECB81` |
| Loss/Down | `#F6465D` |
| Warning   | `#F0B90B` |
| Info      | `#1E88E5` |

---

## Typography System

### Font Families

| Weight  | Usage                   |
| ------- | ----------------------- |
| Regular | Body text, descriptions |
| Medium  | Labels, buttons         |
| Bold    | Headings, emphasis      |

### Text Styles

| Style   | Size | Weight  | Usage           |
| ------- | ---- | ------- | --------------- |
| H1      | 24sp | Bold    | Screen titles   |
| H2      | 20sp | Bold    | Section headers |
| H3      | 18sp | Medium  | Card titles     |
| Body1   | 16sp | Regular | Primary text    |
| Body2   | 14sp | Regular | Secondary text  |
| Caption | 12sp | Regular | Labels, hints   |
| Button  | 16sp | Medium  | Button text     |

---

## Spacing System

### SNS Design System Spacing

| Name   | Value | Usage             |
| ------ | ----- | ----------------- |
| Tiny   | 4dp   | Minimal spacing   |
| Small  | 8dp   | Compact spacing   |
| Medium | 16dp  | Standard spacing  |
| Large  | 32dp  | Section spacing   |
| Huge   | 64dp  | Major separations |

### Standard Margins

| Element           | Value                          |
| ----------------- | ------------------------------ |
| Screen edge       | 16dp                           |
| Card padding      | 16dp                           |
| List item padding | 16dp horizontal                |
| Section spacing   | 24dp                           |
| Button padding    | 16dp horizontal, 12dp vertical |

### Corner Radius

| Element       | Radius          |
| ------------- | --------------- |
| Cards         | 8dp             |
| Buttons       | 4dp             |
| Dialogs       | 12dp            |
| Input fields  | 8dp             |
| Bottom sheets | 12dp (top only) |

---

## Component Specifications

### Buttons

| Type      | Height | Background  | Text Color | Radius |
| --------- | ------ | ----------- | ---------- | ------ |
| Primary   | 40dp   | `#F0B90B`   | `#000000`  | 4dp    |
| Secondary | 40dp   | Transparent | `#F0B90B`  | 4dp    |
| Disabled  | 40dp   | `#474D57`   | `#707A8A`  | 4dp    |

### Input Fields

| Property      | Value           |
| ------------- | --------------- |
| Height        | 52dp            |
| Text Size     | 16sp            |
| Corner Radius | 8dp             |
| Padding       | 16dp horizontal |
| Border        | 1dp `#2B3139`   |

### Cards

| Property      | Value            |
| ------------- | ---------------- |
| Background    | `#1E2329` (dark) |
| Corner Radius | 8dp              |
| Padding       | 16dp             |
| Elevation     | 2-4dp            |

### List Items

| Property  | Value         |
| --------- | ------------- |
| Height    | 48-56dp       |
| Icon Size | 24dp          |
| Text Size | 16sp          |
| Divider   | 1dp `#202630` |

---

## Screen Architecture

### Main Navigation

```
MainActivity
├── HomeFragment
├── MarketsFragment
├── TradeFragment
├── FuturesFragment
└── AssetsFragment
```

### Screen Types

| Type        | Description                |
| ----------- | -------------------------- |
| Full Screen | Activities, main fragments |
| Modal       | Dialogs, bottom sheets     |
| Overlay     | Toasts, snackbars          |
| Embedded    | Widgets, mini charts       |

### Common Layout Patterns

1. **Toolbar + Content + Bottom Nav**: Main screens
2. **Toolbar + Tabs + ViewPager**: Trading screens
3. **Collapsing Toolbar + Scrollable Content**: Detail screens
4. **Full-screen Dialog**: Forms, filters

---

## Navigation Patterns

### Bottom Navigation

| Tab     | Icon     | Purpose               |
| ------- | -------- | --------------------- |
| Home    | Home     | Dashboard, portfolio  |
| Markets | Chart    | Trading pairs, prices |
| Trade   | Swap     | Spot trading          |
| Futures | Trending | Futures trading       |
| Assets  | Assets   | Asset management      |

### Tab Layout

- Height: 44dp
- Indicator: 2dp, primary color
- Text: 14sp, bold when selected

### Navigation Transitions

| Transition   | Usage              |
| ------------ | ------------------ |
| Slide right  | Back navigation    |
| Slide left   | Forward navigation |
| Fade         | Dialog appearance  |
| Bottom sheet | Modal content      |

---

## Component Library

### Custom UI Kit

Package: `com.major.android.uikit2`

| Component      | Description               |
| -------------- | ------------------------- |
| KitButton      | Styled button with states |
| KitSwitch      | Custom toggle switch      |
| KitRadioButton | Custom radio button       |
| KitCheckBox    | Animated checkbox         |

### Standard Components

| Component        | Usage              |
| ---------------- | ------------------ |
| RecyclerView     | Lists, grids       |
| ConstraintLayout | Complex layouts    |
| NestedScrollView | Scrollable content |
| TabLayout        | Tab navigation     |
| ViewPager2       | Swipeable pages    |

---

## Icon System

### Standard Sizes

| Size | Usage          |
| ---- | -------------- |
| 16dp | Inline icons   |
| 20dp | Small actions  |
| 24dp | Standard icons |
| 32dp | Medium icons   |
| 40dp | Large icons    |
| 48dp | Feature icons  |

### Icon Colors

| State    | Color     |
| -------- | --------- |
| Default  | `#848E9C` |
| Selected | `#F0B90B` |
| Disabled | `#474D57` |
| Error    | `#F6465D` |

---

## Animation Guidelines

### Timing

| Duration | Usage              |
| -------- | ------------------ |
| 33ms     | Quick transitions  |
| 166ms    | Standard UI        |
| 200ms    | Fade in/out        |
| 300ms    | Path morphing      |
| 400ms    | Screen transitions |

### Animation Types

| Type       | Usage              |
| ---------- | ------------------ |
| Fade       | Visibility changes |
| Slide      | Navigation         |
| Scale      | Button press       |
| Path Morph | Icon state changes |

---

## Dark Theme Implementation

### Color Mapping

| Light     | Dark      |
| --------- | --------- |
| `#FFFFFF` | `#0B0E11` |
| `#F5F5F5` | `#1E2329` |
| `#000000` | `#FFFFFF` |
| `#707A8A` | `#848E9C` |

### Resource Qualifiers

- `values-night/` - Dark theme values
- `drawable-night/` - Dark theme drawables
- `color-night/` - Dark theme color states

---

## Accessibility

### Touch Targets

- Minimum: 48dp x 48dp
- Recommended: 56dp x 56dp

### Text Contrast

- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum

### Content Descriptions

All interactive elements include content descriptions for screen readers.

---

## Responsive Design

### Screen Size Support

| Qualifier | Minimum Width   |
| --------- | --------------- |
| sw330dp   | Small phones    |
| sw360dp   | Standard phones |
| sw400dp   | Large phones    |
| sw600dp   | 7" tablets      |
| sw720dp   | 10" tablets     |

### Orientation Support

- Portrait: Primary orientation
- Landscape: Supported with adapted layouts

---

## Localization

### Supported Languages

40+ languages including:

- English (default)
- Chinese (Simplified, Traditional)
- Japanese, Korean
- Spanish, French, German
- Russian, Portuguese
- And many more...

### RTL Support

- Full RTL layout support
- Mirrored navigation patterns
- Direction-aware animations

---

## Performance Guidelines

### Image Optimization

- Vector drawables for icons
- WebP for raster images
- Multiple density buckets

### Animation Performance

- Hardware layers during animation
- Property animations over view animations
- Object pooling for lists

---

## Security Considerations

### Biometric Authentication

- Fingerprint support
- Face recognition
- Screen lock fallback

### Secure Input

- Password field masking
- Secure keyboard options
- Input validation

---

## File Structure Summary

```
docs/
├── 01-colors-theme.md      # Color system and theming
├── 02-typography.md        # Typography and text styles
├── 03-dimensions-spacing.md # Spacing and dimensions
├── 04-screens-layouts.md   # Screen layouts and hierarchy
├── 05-components.md        # UI components and widgets
├── 06-navigation.md        # Navigation patterns
├── 07-drawables-icons.md   # Icons and drawables
├── 08-strings-content.md   # String resources
├── 09-animations.md        # Animation specifications
└── 10-complete-ui-specification.md # This summary
```

---

## Implementation Checklist

### Colors

- [ ] Define all brand colors in colors.xml
- [ ] Create color state lists for interactive elements
- [ ] Implement dark theme color variants

### Typography

- [ ] Define text appearances in styles.xml
- [ ] Set up font families
- [ ] Configure text sizes with sp units

### Dimensions

- [ ] Define spacing dimensions
- [ ] Set up corner radius values
- [ ] Configure component heights

### Components

- [ ] Implement custom UI kit components
- [ ] Style standard Material components
- [ ] Create reusable component styles

### Navigation

- [ ] Set up bottom navigation
- [ ] Configure navigation graph
- [ ] Implement deep links

### Resources

- [ ] Import all drawable resources
- [ ] Configure density-specific assets
- [ ] Set up night mode resources

---

## Notes

1. All values extracted from actual APK resources
2. Dark theme is the primary theme
3. Binance yellow (`#F0B90B`) is the signature brand color
4. 4dp/8dp grid system for consistent spacing
5. Material Design 3 principles followed
6. Custom UI kit provides consistent styling
7. Performance-optimized animations
8. Full accessibility support
9. Comprehensive internationalization
10. RTL language support included
