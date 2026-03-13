# 38-Icons and Drawables

## Overview

This document catalogs the icon and drawable resources in the Binance APK. The app uses a combination of vector drawables, PNG images, and Flutter-specific assets for its visual elements.

## Drawable Types

### 1. Vector Drawables (Primary)

Vector drawables are used for icons and simple graphics, providing scalability without quality loss.

**Location:** `res/drawable-anydpi-v24/` (API 24+)

**Common Vector Categories:**

| Category | Icons | Description |
|----------|-------|-------------|
| Navigation | home, markets, trade, wallet, profile | Tab bar icons |
| Actions | settings, search, filter, sort | Interactive elements |
| Trading | chart, orderbook, history | Trading interface |
| Crypto | btc, eth, bnb, etc. | Token logos |

### 2. Shape Drawables

XML-defined geometric shapes for backgrounds, borders, and effects.

**Location:** `res/drawable/`

```xml
<!-- Rounded Rectangle Background -->
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <solid android:color="#1E2329"/>
    <corners android:radius="8dp"/>
</shape>

<!-- Circle Background -->
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="oval">
    <solid android:color="#F0B90B"/>
    <size android:width="48dp" android:height="48dp"/>
</shape>

<!-- Gradient Background -->
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <gradient
        android:startColor="#F0B90B"
        android:endColor="#E5A00A"
        android:angle="0"/>
</shape>
```

### 3. State List Drawables (Selectors)

Interactive state-based drawables for buttons and clickable elements.

**Location:** `res/color/` and selector XMLs

```xml
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:state_pressed="true">
        <shape android:shape="rectangle">
            <solid android:color="#E5A00A"/>
        </shape>
    </item>
    <item android:state_focused="true">
        <shape android:shape="rectangle">
            <solid android:color="#F0B90B"/>
        </shape>
    </item>
    <item>
        <shape android:shape="rectangle">
            <solid android:color="#F0B90B"/>
        </shape>
    </item>
</selector>
```

### 4. Layer List Drawables

Complex graphics composed of multiple layers.

```xml
<layer-list xmlns:android="http://schemas.android.com/apk/res/android">
    <item>
        <shape android:shape="rectangle">
            <solid android:color="#181A20"/>
        </shape>
    </item>
    <item android:top="1dp">
        <shape android:shape="rectangle">
            <solid android:color="#2A2D35"/>
        </shape>
    </item>
</layer-list>
```

## Icon Categories

### Navigation Icons

| Icon Name | Usage | Size (dp) |
|-----------|-------|------------|
| `ic_home` | Home tab | 24x24 |
| `ic_markets` | Markets tab | 24x24 |
| `ic_trade` | Trade tab | 24x24 |
| `ic_wallet` | Wallet tab | 24x24 |
| `ic_profile` | Profile tab | 24x24 |
| `ic_back` | Back navigation | 24x24 |
| `ic_close` | Close/dismiss | 24x24 |
| `ic_menu` | Menu/hamburger | 24x24 |

### Action Icons

| Icon Name | Usage |
|-----------|-------|
| `ic_search` | Search |
| `ic_filter` | Filter options |
| `ic_sort` | Sort options |
| `ic_settings` | Settings |
| `ic_share` | Share |
| `ic_refresh` | Refresh |
| `ic_add` | Add action |
| `ic_delete` | Delete action |

### Trading Icons

| Icon Name | Usage |
|-----------|-------|
| `ic_chart` | Price chart |
| `ic_orderbook` | Order book view |
| `ic_history` | Trade history |
| `ic_buy` | Buy action |
| `ic_sell` | Sell action |
| `ic_swap` | Swap/convert |

### Market Status Icons

| Icon Name | Usage |
|-----------|-------|
| `ic_arrow_up` | Price increase |
| `ic_arrow_down` | Price decrease |
| `ic_trending` | Trending |
| `ic_star` | Favorites |
| `ic_favorite` | Favorited |

### Security Icons

| Icon Name | Usage |
|-----------|-------|
| `ic_lock` | Lock/security |
| `ic_visibility` | Show password |
| `ic_visibility_off` | Hide password |
| `ic_fingerprint` | Biometric |

## Density Variants

### Mipmap (Launcher Icons)

**Location:** `res/mipmap-*/`

| Density | Folder | Icon Size |
|---------|--------|-----------|
| mdpi | `mipmap-mdpi/` | 48x48 |
| hdpi | `mipmap-hdpi/` | 72x72 |
| xhdpi | `mipmap-xhdpi/` | 96x96 |
| xxhdpi | `mipmap-xxhdpi/` | 144x144 |
| xxxhdpi | `mipmap-xxxhdpi/` | 192x192 |
| Any | `mipmap-anydpi-v26/` | Adaptive |

### Drawable Density

| Density | Folder | Usage |
|---------|--------|-------|
| mdpi | `drawable-mdpi/` | 1x baseline |
| hdpi | `drawable-hdpi/` | 1.5x |
| xhdpi | `drawable-xhdpi/` | 2x |
| xxhdpi | `drawable-xxhdpi/` | 3x |
| nodpi | `drawable-nodpi/` | Density independent |

## Onfido SDK Drawables

The KYC integration uses custom drawables:

```
onfido_*.xml
├── onfido_ic_*.xml (icons)
├── onfido_bg_*.xml (backgrounds)
└── onfido_overlay_*.xml (overlays)
```

### Key Onfido Drawables

| Drawable | Purpose |
|----------|---------|
| `onfido_ic_face` | Face capture icon |
| `onfido_ic_document` | Document icon |
| `onfido_bg_button_primary` | Primary button background |
| `onfido_overlay_passport` | Passport overlay guide |

## SNS (Identity Verification) Drawables

```
sns_*.xml
├── sns_ic_*.xml (icons)
├── sns_bg_*.xml (backgrounds)
└── sns_*.xml (miscellaneous)
```

## Notification Icons

| Drawable | Usage |
|----------|-------|
| `notification_icon_background` | Notification large icon background |
| `notification_bg` | Notification background |
| `notification_action_background` | Action button background |

## Flutter Assets

The main UI icons are bundled in Flutter assets:

**Location:** `binance-decompiled/assets/flutter_assets/`

### Packages Structure

```
flutter_assets/
├── packages/
│   ├── cupertino_icons/
│   │   └── assets/
│   │       └── cupertino_icons.ttf
│   ├── module_com/
│   │   └── res/
│   │       ├── images/
│   │       └── lottie/
│   ├── module_earn/
│   │   └── res/
│   ├── module_payment/
│   │   └── res/
│   └── uikit/
│       └── res/
│           ├── images/
│           ├── fonts/
│           └── anim/
```

## Custom Drawables

### Binance Theme

**Primary Colors Used:**
- Binance Yellow: `#F0B90B`
- Background Dark: `#181A20`
- Surface: `#1E2026`
- Text Primary: `#EAECEF`
- Text Secondary: `#848E9C`

### Shape Styles

| Style | Definition |
|-------|------------|
| Rounded Small | Corner radius: 4dp |
| Rounded Medium | Corner radius: 8dp |
| Rounded Large | Corner radius: 12dp |
| Circle | 50% corner radius |
| Card | 8dp with elevation |

## Source Resources

- **Vector Drawables**: `binance-decompiled/res/drawable/`
- **Density Variants**: `binance-decompiled/res/drawable-*/`
- **Mipmap**: `binance-decompiled/res/mipmap-*/`
- **Flutter Assets**: `binance-decompiled/assets/flutter_assets/`
- **Colors**: `binance-decompiled/res/values/colors.xml`

## Implementation Notes

1. **Vector First**: Use vector drawables for all icons where possible
2. **Theme Support**: Provide dark/light variants in `drawable-night/`
3. **RTL**: Provide mirrored versions in `drawable-ldrtl/`
4. **Animation**: Use Lottie for complex animations (see `40-animations-motion.md`)
5. **Tinting**: Use `app:tint` attribute for consistent icon coloring
