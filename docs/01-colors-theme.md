# Binance UI/UX Knowledge Base - Colors & Theme

## Overview

This document catalogs all color values and theme definitions extracted from the Binance Android APK. The app uses a comprehensive dark theme design with a distinctive yellow brand color.

---

## Brand Colors

### Primary Yellow (Binance Brand)

| Color Name           | Hex Value   | Description                              |
| -------------------- | ----------- | ---------------------------------------- |
| Primary Yellow       | `#FFF0B90B` | Main Binance brand color                 |
| Primary Yellow Light | `#FFFCD535` | Lighter variant for highlights           |
| Primary Yellow Dark  | `#FFD89F00` | Darker variant for pressed states        |
| Promo Yellow         | `#FFF0B90B` | Used for "New" badges and leverage pills |

### XML Definitions

```xml
<color name="2131099699">#fff0b90b</color>
<color name="2131099700">#fffcd535</color>
<color name="2131099698">#ffd89f00</color>
<color name="2131099701">#ffffe45e</color>
<color name="2131099702">#ffffef87</color>
<color name="2131099703">#fffff7b0</color>
```

---

## Semantic Colors

### Profit/Success (Green)

| Color Name           | Hex Value   | Alpha Variants           | Usage                          |
| -------------------- | ----------- | ------------------------ | ------------------------------ |
| Success Green        | `#FF2EBD85` | `#602EBD85`, `#802EBD85` | Profit indicators, buy buttons |
| Success Green Alt    | `#FF0ECB81` | `#600ECB81`, `#800ECB81` | Alternative success color      |
| Success Green Dark   | `#FF28A473` | -                        | Pressed state                  |
| Success Green Darker | `#FF1D966C` | -                        | Darker variant                 |

```xml
<color name="2131099743">#ff2ebd85</color>
<color name="2131099744">#1a2ebd85</color>
<color name="2131099745">#332ebd85</color>
<color name="2131100360">#ff0ecb81</color>
<color name="2131100705">#600ecb81</color>
<color name="2131100706">#800ecb81</color>
```

### Loss/Error (Red)

| Color Name       | Hex Value   | Alpha Variants           | Usage                                     |
| ---------------- | ----------- | ------------------------ | ----------------------------------------- |
| Error Red        | `#FFF6465D` | `#60F6465D`, `#80F6465D` | Loss indicators, sell buttons             |
| Error Red Alt    | `#FFE33B54` | -                        | Alternative error color                   |
| Error Red Dark   | `#FFCF304A` | -                        | Pressed state                             |
| Notification Red | `#FFE44558` | -                        | Used for "99+" bubble and critical alerts |

```xml
<color name="2131099707">#fff6465d</color>
<color name="2131099708">#60f6465d</color>
<color name="2131099709">#80f6465d</color>
<color name="2131099871">#ffe33b54</color>
```

### Warning (Orange)

| Color Name         | Hex Value   | Usage               |
| ------------------ | ----------- | ------------------- |
| Warning Orange     | `#FFDD7A2B` | Warning indicators  |
| Warning Orange Alt | `#FFFF693D` | Alternative warning |

```xml
<color name="2131099662">#ffdd7a2b</color>
<color name="2131099740">#ffff693d</color>
```

### Info (Blue)

| Color Name     | Hex Value   | Usage                  |
| -------------- | ----------- | ---------------------- |
| Info Blue      | `#FF1F8DF9` | Information indicators |
| Info Blue Alt  | `#FF328DFD` | Alternative info color |
| Info Blue Dark | `#FF1773EB` | Darker variant         |

```xml
<color name="2131099658">#ff1f8df9</color>
<color name="2131099653">#ff328dfd</color>
<color name="2131099688">#ff1773eb</color>
```

---

## Background Colors

### Dark Theme Backgrounds

| Color Name           | Hex Value   | Usage                                |
| -------------------- | ----------- | ------------------------------------ |
| Background Primary   | `#FF0B0E11` | Main background / Markets background |
| Background Secondary | `#FF12161C` | Secondary background                 |
| Background Tertiary  | `#FF181E25` | Tertiary background                  |
| Background Card      | `#FF202630` | Card backgrounds                     |
| Background Elevated  | `#FF1E2026` | Elevated surfaces                    |

```xml
<color name="2131099846">#ff0b0e11</color>
<color name="2131099931">#ff12161c</color>
<color name="2131100371">#ff181e25</color>
<color name="2131099858">#ff202630</color>
<color name="2131102108">#ff1e2026</color>
```

### Light Theme Backgrounds

| Color Name            | Hex Value   | Usage                  |
| --------------------- | ----------- | ---------------------- |
| Background Light      | `#FFFAFAFA` | Light background       |
| Background Light Alt  | `#FFF5F5F5` | Alternative light      |
| Background Light Card | `#FFEAECEF` | Light card backgrounds |

```xml
<color name="2131099852">#fffafafa</color>
<color name="2131099714">#fff5f5f5</color>
<color name="2131099853">#ffeaecef</color>
```

---

## Text Colors

### Dark Theme Text

| Color Name       | Hex Value   | Usage                                |
| ---------------- | ----------- | ------------------------------------ |
| Text Extra Small | `10sp`      | Captions, timestamps, Network Badges |
| Text Small       | `12sp`      | Secondary text, labels               |
| Text Tertiary    | `#FFB7BDC6` | Tertiary text                        |
| Text Disabled    | `#FF707A8A` | Disabled text                        |
| Text Hint        | `#FF929AA5` | Hint/placeholder text                |

```xml
<color name="2131099767">#ff848e9c</color>
<color name="2131099722">#ffb7bdc6</color>
<color name="2131099781">#ff707a8a</color>
<color name="2131099692">#ff929aa5</color>
```

### Text on Primary

| Color Name           | Hex Value   | Usage                  |
| -------------------- | ----------- | ---------------------- |
| Text on Primary      | `#FF181A20` | Text on yellow buttons |
| Text on Primary Dark | `#FF0B0E11` | Darker variant         |

```xml
<color name="2131099859">#ff181a20</color>
<color name="2131099846">#ff0b0e11</color>
```

---

## SNS Design System Colors

The Binance app uses a comprehensive design system called "SNS" with semantic naming:

### SNS Primary Colors

```xml
<color name="sns_color_primary_5">#fff3f7ff</color>
<color name="sns_color_primary_10">#ffe8f0ff</color>
<color name="sns_color_primary_20">#ffa2c1ff</color>
<color name="sns_color_primary_40">#ff8bb2ff</color>
<color name="sns_color_primary_50">#ff8bb2ff</color>
<color name="sns_color_primary_60">#ff74a3ff</color>
<color name="sns_color_primary_80">#ff4584ff</color>
<color name="sns_color_primary_100">#ff1765ff</color>
```

### SNS Neutral Colors

```xml
<color name="sns_color_neutral_5">#fff4f4f5</color>
<color name="sns_color_neutral_10">#ffe9e9ea</color>
<color name="sns_color_neutral_20">#ffd2d3d5</color>
<color name="sns_color_neutral_40">#ffa5a7ab</color>
<color name="sns_color_neutral_60">#ff787b82</color>
<color name="sns_color_neutral_80">#ff4b4f58</color>
<color name="sns_color_neutral_100">#ff1e232e</color>
```

### SNS Critical/Error Colors

```xml
<color name="sns_color_critical_10">#fffdeeee</color>
<color name="sns_color_critical_20">#fffcdddd</color>
<color name="sns_color_critical_40">#fff9baba</color>
<color name="sns_color_critical_60">#fff59898</color>
<color name="sns_color_critical_80">#fff27575</color>
<color name="sns_color_critical_100">#ffef5353</color>
```

### SNS Success Colors

```xml
<color name="sns_color_success_10">#1a25b793</color>
<color name="sns_color_success_20">#ffd3f1e9</color>
<color name="sns_color_success_40">#ffa8e2d4</color>
<color name="sns_color_success_60">#ff7cd4be</color>
<color name="sns_color_success_100">#ff25b793</color>
```

### SNS Warning Colors

```xml
<color name="sns_color_warning_10">#fffef7e7</color>
<color name="sns_color_warning_20">#fffceecf</color>
<color name="sns_color_warning_40">#fffadd9e</color>
<color name="sns_color_warning_60">#fff7cc6e</color>
<color name="sns_color_warning_100">#fff2aa0d</color>
```

### SNS Semantic Colors

```xml
<!-- Background -->
<color name="sns_backgroundCommon">@color/sns_color_background_100</color>
<color name="sns_backgroundOther">@color/sns_color_neutral_5</color>
<color name="sns_backgroundCritical">@color/sns_color_critical_10</color>
<color name="sns_backgroundSuccess">@color/sns_color_success_10</color>
<color name="sns_backgroundWarning">@color/sns_color_warning_10</color>
<color name="sns_backgroundInfo">@color/sns_color_primary_10</color>

<!-- Content -->
<color name="sns_contentStrong">@color/sns_color_neutral_100</color>
<color name="sns_contentWeak">@color/sns_color_neutral_80</color>
<color name="sns_contentNeutral">@color/sns_color_neutral_80</color>
<color name="sns_contentCritical">@color/sns_color_critical_100</color>
<color name="sns_contentSuccess">@color/sns_color_success_100</color>
<color name="sns_contentWarning">@color/sns_color_warning_100</color>
<color name="sns_contentInfo">@color/sns_color_primary_100</color>

<!-- Buttons -->
<color name="sns_primaryButtonBackground">@color/sns_color_primary_100</color>
<color name="sns_primaryButtonBackgroundHighlighted">@color/sns_color_primary_80</color>
<color name="sns_primaryButtonBackgroundDisabled">@color/sns_color_primary_40</color>
<color name="sns_primaryButtonContent">@color/sns_color_white_100</color>
<color name="sns_secondaryButtonContent">@color/sns_color_primary_100</color>
```

---

## Border & Divider Colors

| Color Name    | Hex Value   | Usage          |
| ------------- | ----------- | -------------- |
| Border Light  | `#FFD8DCE1` | Light borders  |
| Border Medium | `#FFEAECEF` | Medium borders |
| Divider       | `#FF474D57` | Dividers       |

```xml
<color name="2131100469">#ffd8dce1</color>
<color name="2131099853">#ffeaecef</color>
<color name="2131099811">#ff474d57</color>
```

---

## Overlay & Scrim Colors

| Color Name        | Hex Value   | Usage                |
| ----------------- | ----------- | -------------------- |
| Scrim Dark        | `#99000000` | Modal overlays       |
| Scrim Medium      | `#66000000` | Light overlays       |
| Scrim Light       | `#33000000` | Subtle overlays      |
| Scrim Extra Light | `#14000000` | Very subtle overlays |

```xml
<color name="2131099671">#99000000</color>
<color name="2131099673">#66000000</color>
<color name="2131099668">#33000000</color>
<color name="2131099669">#14000000</color>
```

---

## Theme Definitions

### Main App Theme

The app uses Material Design themes with custom attributes:

```xml
<style name="AppTheme" parent="@style/2132149551">
    <item name="2130969058">@color/2131100322</item>
    <item name="2130969090">@color/2131100333</item>
    <item name="2130969092">@color/2131100334</item>
</style>
```

### SNS Theme

```xml
<style name="2132148398" parent="@style/2132148397">
    <item name="android:colorBackground">@color/sns_backgroundCommon</item>
    <item name="android:textAppearance">@style/2132149384</item>
    <item name="android:textColorPrimary">@color/sns_contentStrong</item>
    <item name="android:textColorSecondary">@color/sns_fieldContent</item>
    <item name="android:checkboxStyle">@style/2132150248</item>
    <item name="android:radioButtonStyle">@style/2132150275</item>
    <item name="android:listDivider">@drawable/sns_list_divider</item>
    <item name="2130969064">@color/sns_contentNeutral</item>
    <item name="2130969065">@color/sns_contentCritical</item>
    <item name="2130969067">@color/sns_contentStrong</item>
    <item name="2130969070">@color/sns_contentCritical</item>
    <item name="2130969081">@color/sns_contentStrong</item>
    <item name="2130969090">@color/sns_primaryButtonBackground</item>
    <item name="2130969097">@color/sns_primaryButtonBackgroundHighlighted</item>
    <item name="2130969100">@color/sns_secondaryButtonContent</item>
    <item name="2130969105">@color/sns_backgroundOther</item>
</style>
```

---

## Color Scale Reference

### Yellow Scale (Brand)

| Step | Hex Value   |
| ---- | ----------- |
| 50   | `#FFFFFDE6` |
| 100  | `#FFFFF7B0` |
| 200  | `#FFFFEF87` |
| 300  | `#FFFFE45E` |
| 400  | `#FFFCD535` |
| 500  | `#FFF0B90B` |
| 600  | `#FFD89F00` |
| 700  | `#FFA37200` |
| 800  | `#FF7D5300` |
| 900  | `#FF573700` |

### Green Scale (Success)

| Step | Hex Value   |
| ---- | ----------- |
| 10   | `#FFEDFCF4` |
| 20   | `#FFD3F0E1` |
| 40   | `#FFA3E3C4` |
| 60   | `#FF78D6AC` |
| 80   | `#FF51C997` |
| 100  | `#FF2EBD85` |
| 200  | `#FF28A473` |
| 300  | `#FF1D966C` |
| 400  | `#FF107052` |
| 500  | `#FF074A37` |
| 600  | `#FF03241B` |

### Red Scale (Error)

| Step | Hex Value   |
| ---- | ----------- |
| 10   | `#FFFFF0F0` |
| 20   | `#FFFFC2C4` |
| 40   | `#FFFF99A0` |
| 60   | `#FFFF707E` |
| 80   | `#FFF6465D` |
| 100  | `#FFF63C55` |
| 200  | `#FFCF304A` |
| 300  | `#FFA81E3A` |
| 400  | `#FF82112B` |
| 500  | `#FF5C0B21` |

---

## Design Patterns

### Profit/Loss Indicators

- **Profit (Green)**: `#FF2EBD85` or `#FF0ECB81`
- **Loss (Red)**: `#FFF6465D`
- Background tints use 10% opacity (`#1A` prefix)

### Button States

- **Primary Button Background**: `#FFF0B90B` (Binance Yellow)
- **Primary Button Pressed**: `#FFD89F00` (Darker Yellow)
- **Primary Button Text**: `#FF181A20` (Dark)

### Card Backgrounds

- **Dark Theme**: `#FF202630`
- **Light Theme**: `#FFEAECEF`

### Status Bar

- **Dark Theme**: `#FF0B0E11`
- **Navigation Bar**: Matches background color

---

## Notes

1. Many color resources use obfuscated numeric names (e.g., `2131099699`)
2. The SNS design system provides semantic naming for better maintainability
3. Alpha variants are commonly used for backgrounds and pressed states
4. The app primarily uses a dark theme with the distinctive Binance yellow as the accent color
5. Color values are stored in ARGB format with the `#FF` prefix for fully opaque colors
