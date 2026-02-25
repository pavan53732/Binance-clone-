# Binance UI/UX Knowledge Base - Logo & Icon Specifications

## Overview

This document provides comprehensive specifications for all logos and icons used in the Binance Android app, including exact pixel dimensions for each screen density.

---

## Binance Logo Specifications

### Primary Logo Colors

| Color Name          | Hex Code  | Usage               |
| ------------------- | --------- | ------------------- |
| Binance Yellow      | `#F0B90B` | Primary brand color |
| Binance Gold        | `#FCD535` | Highlight/gradient  |
| Binance Dark Yellow | `#D4A10A` | Pressed state       |

### Logo Variants

#### 1. Full Logo with Text

**Usage**: Splash screen, login header, about screen

| Context       | Size (dp) | Aspect Ratio |
| ------------- | --------- | ------------ |
| Splash Screen | 200x48    | 4.17:1       |
| Login Header  | 160x38    | 4.21:1       |
| Nav Header    | 120x29    | 4.14:1       |
| About Screen  | 180x43    | 4.19:1       |

#### 2. Logo Mark Only (Symbol)

**Usage**: App icon, favicon, small spaces

| Context     | Size (dp) | Description        |
| ----------- | --------- | ------------------ |
| App Icon    | 192x192   | Full adaptive icon |
| Favicon     | 32x32     | Web/favicon        |
| Small Icon  | 24x24     | Inline usage       |
| Medium Icon | 48x48     | Feature icons      |

#### 3. Monochrome Logo

**Usage**: Watermarks, disabled states, print

| Variant | Color     | Usage             |
| ------- | --------- | ----------------- |
| White   | `#FFFFFF` | Dark backgrounds  |
| Black   | `#000000` | Light backgrounds |
| Gray    | `#848E9C` | Disabled states   |

---

## App Launcher Icons

### Adaptive Icon Specifications

**Foreground Layer**:

- Size: 108dp x 108dp
- Safe Area: 72dp x 72dp (centered)
- Logo within safe zone: 48dp x 48dp

**Background Layer**:

- Size: 108dp x 108dp
- Color: `#F0B90B` (Binance Yellow)
- Or gradient: `#F0B90B` to `#FCD535`

### Launcher Icon Sizes by Density

| Density | DPI | Size (px) | Directory         |
| ------- | --- | --------- | ----------------- |
| mdpi    | 160 | 48x48     | `mipmap-mdpi/`    |
| hdpi    | 240 | 72x72     | `mipmap-hdpi/`    |
| xhdpi   | 320 | 96x96     | `mipmap-xhdpi/`   |
| xxhdpi  | 480 | 144x144   | `mipmap-xxhdpi/`  |
| xxxhdpi | 640 | 192x192   | `mipmap-xxxhdpi/` |

### Round Icon Sizes

| Density | Size (px) | Directory               |
| ------- | --------- | ----------------------- |
| mdpi    | 48x48     | `mipmap-mdpi-round/`    |
| hdpi    | 72x72     | `mipmap-hdpi-round/`    |
| xhdpi   | 96x96     | `mipmap-xhdpi-round/`   |
| xxhdpi  | 144x144   | `mipmap-xxhdpi-round/`  |
| xxxhdpi | 192x192   | `mipmap-xxxhdpi-round/` |

---

## Icon Categories & Sizes

### Bottom Navigation Icons

**Usage**: Main app navigation bar

| Property | Active    | Inactive  |
| -------- | --------- | --------- |
| Size     | 24dp      | 24dp      |
| Color    | `#F0B90B` | `#848E9C` |
| Opacity  | 100%      | 60%       |

**Icons**:
| Icon | Active State | Inactive State |
|------|--------------|----------------|
| Home | Filled | Outline |
| Markets | Filled | Outline |
| Trade | Filled | Outline |
| Futures | Filled | Outline |
| Assets | Filled | Outline |

**Pixel Sizes by Density**:

| Density | 24dp Icon (px) |
| ------- | -------------- |
| mdpi    | 24x24          |
| hdpi    | 36x36          |
| xhdpi   | 48x48          |
| xxhdpi  | 72x72          |
| xxxhdpi | 96x96          |

### Tab Icons

**Usage**: Secondary navigation within screens

| Property | Selected  | Unselected |
| -------- | --------- | ---------- |
| Size     | 20dp      | 20dp       |
| Color    | `#F0B90B` | `#848E9C`  |

**Pixel Sizes by Density**:

| Density | 20dp Icon (px) |
| ------- | -------------- |
| mdpi    | 20x20          |
| hdpi    | 30x30          |
| xhdpi   | 40x40          |
| xxhdpi  | 60x60          |
| xxxhdpi | 80x80          |

### Action Bar Icons

**Usage**: Toolbar, app bar actions

| Property | Value                  |
| -------- | ---------------------- |
| Size     | 24dp                   |
| Color    | `#FFFFFF` (dark theme) |
| Padding  | 12dp touch target      |

**Common Icons**:

- Back arrow
- Close (X)
- Search
- Filter
- More options (three dots)
- Settings (gear)
- Share
- Refresh

### List Item Icons

**Usage**: Coin list, transaction list, settings items

| Icon Type    | Size | Color                 |
| ------------ | ---- | --------------------- |
| Crypto icons | 32dp | Various (coin colors) |
| Action icons | 24dp | `#848E9C`             |
| Status icons | 16dp | Context-based         |

**Crypto Icon Specifications**:
| Property | Value |
|----------|-------|
| Size | 32dp |
| Corner radius | 50% (circular) |
| Background | Coin-specific |
| Padding | 2dp |

**Pixel Sizes by Density**:

| Density | 32dp Icon (px) | 24dp Icon (px) | 16dp Icon (px) |
| ------- | -------------- | -------------- | -------------- |
| mdpi    | 32x32          | 24x24          | 16x16          |
| hdpi    | 48x48          | 36x36          | 24x24          |
| xhdpi   | 64x64          | 48x48          | 32x32          |
| xxhdpi  | 96x96          | 72x72          | 48x48          |
| xxxhdpi | 128x128        | 96x96          | 64x64          |

### Button Icons

**Usage**: Icon buttons, CTA buttons with icons

| Button Type             | Icon Size | Position     |
| ----------------------- | --------- | ------------ |
| Icon only button        | 24dp      | Centered     |
| Button with icon + text | 20dp      | Left of text |
| Small button icon       | 16dp      | Left of text |
| FAB                     | 24dp      | Centered     |

**Icon Button Touch Target**:

- Minimum: 48dp x 48dp
- Icon centered within touch target

### Feature Icons

**Usage**: Quick actions, feature highlights

| Feature    | Icon            | Size | Color     |
| ---------- | --------------- | ---- | --------- |
| Trade      | Swap arrows     | 48dp | `#F0B90B` |
| Deposit    | Down arrow      | 48dp | `#2EBD85` |
| Withdraw   | Up arrow        | 48dp | `#F6465D` |
| Transfer   | Transfer arrows | 48dp | `#F0B90B` |
| Swap       | Swap horizontal | 48dp | `#C99400` |
| Earn       | Percentage      | 48dp | `#F0B90B` |
| Buy Crypto | Credit card     | 48dp | `#F0B90B` |
| Sell       | Trending down   | 48dp | `#F6465D` |

**Pixel Sizes by Density**:

| Density | 48dp Icon (px) |
| ------- | -------------- |
| mdpi    | 48x48          |
| hdpi    | 72x72          |
| xhdpi   | 96x96          |
| xxhdpi  | 144x144        |
| xxxhdpi | 192x192        |

---

## Logo Safe Zones & Spacing

### Logo Safe Zone

**Minimum Clear Space**:

- Equal to the height of the "B" in Binance logo
- Or 25% of logo height on all sides

```
┌────────────────────────────────┐
│          Safe Zone             │
│    ┌──────────────────────┐    │
│    │                      │    │
│    │    BINANCE LOGO      │    │
│    │                      │    │
│    └──────────────────────┘    │
│          Safe Zone             │
└────────────────────────────────┘
```

### Logo Minimum Sizes

| Context  | Minimum Width |
| -------- | ------------- |
| Print    | 25mm          |
| Digital  | 80dp          |
| Mobile   | 100dp         |
| App Icon | 48dp          |

### Logo Spacing Rules

| Element                | Spacing                                   |
| ---------------------- | ----------------------------------------- |
| Logo to top edge       | 24dp minimum                              |
| Logo to other elements | 16dp minimum                              |
| Logo to screen edge    | 16dp minimum                              |
| Logo in header         | Centered or left-aligned with 16dp margin |

---

## Icon Design Guidelines

### Icon Grid System

**24dp Icon Grid**:

```
┌────────────────────────┐
│  2dp padding           │
│  ┌──────────────────┐  │
│  │                  │  │ 24dp
│  │   Icon Content   │  │
│  │     20x20dp      │  │
│  │                  │  │
│  └──────────────────┘  │
│  2dp padding           │
└────────────────────────┘
```

### Stroke Weights

| Icon Size | Stroke Weight |
| --------- | ------------- |
| 16dp      | 1.5dp         |
| 20dp      | 1.5dp         |
| 24dp      | 2dp           |
| 32dp      | 2dp           |
| 48dp      | 2.5dp         |

### Corner Radius

| Element      | Radius |
| ------------ | ------ |
| Small icons  | 2dp    |
| Medium icons | 4dp    |
| Large icons  | 6dp    |
| Square icons | 8dp    |

---

## Status Icons

### Transaction Status Icons

| Status     | Icon          | Color     | Size |
| ---------- | ------------- | --------- | ---- |
| Pending    | Clock/Spinner | `#F0B90B` | 16dp |
| Completed  | Checkmark     | `#2EBD85` | 16dp |
| Failed     | X mark        | `#F6465D` | 16dp |
| Processing | Spinner       | `#848E9C` | 16dp |

### Connection Status Icons

| Status       | Icon         | Color     |
| ------------ | ------------ | --------- |
| Connected    | WiFi solid   | `#2EBD85` |
| Disconnected | WiFi crossed | `#F6465D` |
| Weak         | WiFi 1 bar   | `#F0B90B` |

---

## Crypto Currency Icons

### Major Crypto Icons

| Coin | Background | Symbol Color | Size |
| ---- | ---------- | ------------ | ---- |
| BTC  | `#F7931A`  | White        | 32dp |
| ETH  | `#627EEA`  | White        | 32dp |
| BNB  | `#F0B90B`  | White        | 32dp |
| USDT | `#26A17B`  | White        | 32dp |
| BUSD | `#F0B90B`  | White        | 32dp |
| XRP  | `#23292F`  | White        | 32dp |
| ADA  | `#0033AD`  | White        | 32dp |
| DOGE | `#C3A634`  | White        | 32dp |
| SOL  | `#9945FF`  | White        | 32dp |
| DOT  | `#E6007A`  | White        | 32dp |

### Crypto Icon Sizes by Density

| Density | 32dp (px) | 24dp (px) | 20dp (px) |
| ------- | --------- | --------- | --------- |
| mdpi    | 32x32     | 24x24     | 20x20     |
| hdpi    | 48x48     | 36x36     | 30x30     |
| xhdpi   | 64x64     | 48x48     | 40x40     |
| xxhdpi  | 96x96     | 72x72     | 60x60     |
| xxxhdpi | 128x128   | 96x96     | 80x80     |

---

## Notification Icons

### Status Bar Icons

**Specifications**:

- Size: 24x24dp
- Color: White (system tinted)
- Style: Simple, recognizable silhouette

| Notification Type | Icon       |
| ----------------- | ---------- |
| Price Alert       | Bell       |
| Trade Executed    | Checkmark  |
| Deposit Received  | Down arrow |
| Withdrawal        | Up arrow   |
| Security          | Shield     |
| Promotion         | Gift       |

### Badge Icons

| Type        | Size        | Color     |
| ----------- | ----------- | --------- |
| Count badge | 18dp        | `#F6465D` |
| Dot badge   | 8dp         | `#F6465D` |
| New badge   | 32dp x 16dp | `#F0B90B` |

---

## Icon States

### Interactive Icon States

| State    | Opacity | Color Modifier   |
| -------- | ------- | ---------------- |
| Normal   | 100%    | Default          |
| Pressed  | 80%     | Darker           |
| Disabled | 40%     | Gray             |
| Focused  | 100%    | With focus ring  |
| Hovered  | 100%    | Slightly lighter |

### Toggle Icons

| State | Icon    | Color     |
| ----- | ------- | --------- |
| On    | Filled  | `#F0B90B` |
| Off   | Outline | `#848E9C` |

---

## Icon Resources Summary

### Required Icon Assets

| Category      | Count | Sizes      |
| ------------- | ----- | ---------- |
| Navigation    | 10    | 24dp       |
| Actions       | 20    | 24dp       |
| Features      | 15    | 48dp       |
| Crypto        | 300+  | 32dp, 24dp |
| Status        | 10    | 16dp       |
| Notifications | 10    | 24dp       |

### File Format Requirements

| Format                | Usage                      |
| --------------------- | -------------------------- |
| Vector Drawable (XML) | All UI icons               |
| PNG                   | App launcher, crypto icons |
| WebP                  | Large images, photos       |
| SVG                   | Export/design files        |

---

## Notes

1. All icons should be provided as vector drawables for scalability
2. Crypto icons may use PNG for complex designs
3. Maintain consistent stroke weights within icon families
4. Use the established color palette for all icons
5. Test icons on both light and dark backgrounds
6. Ensure 48dp minimum touch target for interactive icons
7. Follow Material Design icon guidelines for new icons
8. Keep icons simple and recognizable at small sizes
