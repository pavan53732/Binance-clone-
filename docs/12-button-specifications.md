# Binance UI/UX Knowledge Base - Button Specifications

## Overview

This document provides comprehensive specifications for all button types used in the Binance Android app, including dimensions, colors, states, and placement guidelines.

---

## Button Types Overview

| Type      | Usage               | Primary Color    |
| --------- | ------------------- | ---------------- |
| Primary   | Main CTAs           | Yellow `#F0B90B` |
| Secondary | Alternative actions | Outline          |
| Tertiary  | Minor actions       | Text only        |
| Buy       | Buy/Long actions    | Green `#2EBD85`  |
| Sell      | Sell/Short actions  | Red `#F6465D`    |
| Danger    | Destructive actions | Red `#F6465D`    |
| Disabled  | Unavailable actions | Gray `#474D57`   |

---

## Primary Buttons

### Standard Primary Button

**Usage**: Main call-to-action buttons (Login, Confirm, Submit)

| Property           | Value                      |
| ------------------ | -------------------------- |
| Height             | 40dp                       |
| Min Width          | 120dp                      |
| Corner Radius      | 4dp                        |
| Padding Horizontal | 24dp                       |
| Padding Vertical   | 10dp                       |
| Text Size          | 16sp                       |
| Text Color         | `#000000` (Black)          |
| Font Weight        | Medium                     |
| Background Color   | `#F0B90B` (Binance Yellow) |

**XML Definition**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FFF0B90B" />
    <corners android:radius="4dp" />
</shape>
```

### Primary Button States

| State    | Background Color | Text Color | Opacity |
| -------- | ---------------- | ---------- | ------- |
| Normal   | `#F0B90B`        | `#000000`  | 100%    |
| Pressed  | `#D4A10A`        | `#000000`  | 100%    |
| Disabled | `#474D57`        | `#707A8A`  | 100%    |
| Loading  | `#F0B90B`        | `#000000`  | 60%     |

### Large Primary Button

**Usage**: Splash screen, onboarding, major actions

| Property           | Value |
| ------------------ | ----- |
| Height             | 52dp  |
| Min Width          | 200dp |
| Corner Radius      | 8dp   |
| Text Size          | 18sp  |
| Padding Horizontal | 32dp  |

### Small Primary Button

**Usage**: Inline actions, compact UIs

| Property           | Value |
| ------------------ | ----- |
| Height             | 32dp  |
| Min Width          | 80dp  |
| Corner Radius      | 4dp   |
| Text Size          | 14sp  |
| Padding Horizontal | 16dp  |

---

## Secondary Buttons

### Outline Secondary Button

**Usage**: Alternative actions, cancel buttons

| Property      | Value       |
| ------------- | ----------- |
| Height        | 40dp        |
| Min Width     | 120dp       |
| Corner Radius | 4dp         |
| Border Width  | 1dp         |
| Border Color  | `#F0B90B`   |
| Background    | Transparent |
| Text Size     | 16sp        |
| Text Color    | `#F0B90B`   |

**XML Definition**:

```xml
<shape android:shape="rectangle">
    <solid android:color="@android:color/transparent" />
    <stroke android:width="1dp" android:color="#FFF0B90B" />
    <corners android:radius="4dp" />
</shape>
```

### Secondary Button States

| State    | Border Color | Text Color | Background  |
| -------- | ------------ | ---------- | ----------- |
| Normal   | `#F0B90B`    | `#F0B90B`  | Transparent |
| Pressed  | `#D4A10A`    | `#D4A10A`  | `#1AF0B90B` |
| Disabled | `#474D57`    | `#707A8A`  | Transparent |

### Gray Secondary Button

**Usage**: Cancel, back, less prominent actions

| Property     | Value       |
| ------------ | ----------- |
| Border Color | `#474D57`   |
| Text Color   | `#848E9C`   |
| Background   | Transparent |

---

## Tertiary Buttons

### Text-Only Button

**Usage**: Minor actions, links, skip options

| Property           | Value               |
| ------------------ | ------------------- |
| Height             | 40dp (touch target) |
| Min Width          | Wrap content        |
| Text Size          | 16sp                |
| Text Color         | `#F0B90B`           |
| Font Weight        | Medium              |
| Padding Horizontal | 8dp                 |

### Tertiary Button States

| State    | Text Color | Underline |
| -------- | ---------- | --------- |
| Normal   | `#F0B90B`  | None      |
| Pressed  | `#D4A10A`  | None      |
| Disabled | `#707A8A`  | None      |

---

## Trading Buttons

### Buy Button (Green)

**Usage**: Buy orders, long positions; Primary "Buy" action on Trade Page.

| Property         | Value                                  |
| ---------------- | -------------------------------------- |
| Height           | 40dp (Standard) / 48dp (Trade Page LG) |
| Min Width        | 120dp                                  |
| Corner Radius    | 4dp                                    |
| Background Color | `#2EBD85`                              |
| Text Color       | `#FFFFFF`                              |
| Text Size        | 16sp                                   |
| Font Weight      | Bold (Trade Page) / Medium (Standard)  |

**States**:
| State | Background Color |
|-------|------------------|
| Normal | `#2EBD85` |
| Pressed | `#24A073` |
| Disabled | `#474D57` |

### Sell Button (Red)

**Usage**: Sell orders, short positions; Primary "Sell" action on Trade Page.

| Property         | Value                                  |
| ---------------- | -------------------------------------- |
| Height           | 40dp (Standard) / 48dp (Trade Page LG) |
| Min Width        | 120dp                                  |
| Corner Radius    | 4dp                                    |
| Background Color | `#F6465D`                              |
| Text Color       | `#FFFFFF`                              |
| Text Size        | 16sp                                   |
| Font Weight      | Bold (Trade Page) / Medium (Standard)  |

**States**:
| State | Background Color |
|-------|------------------|
| Normal | `#F6465D` |
| Pressed | `#D63850` |
| Disabled | `#474D57` |

### Buy/Sell Button Pair

**Usage**: Trading screen, order form

| Property      | Value            |
| ------------- | ---------------- |
| Button Height | 44dp             |
| Button Width  | Equal (50% each) |
| Gap Between   | 8dp              |
| Corner Radius | 4dp              |

**Futures Sided Switcher (Segmented Control)**:

- **Description**: A specialized segmented control for "Buy" and "Sell" modes with high-fidelity visual indicators.
- **Segment Background**:
  - `Buy (Active)`: Solid green (`#2EBD85`) with white text.
  - `Sell (Active)`: Solid red (`#F6465D`) with white text.
  - `Inactive`: Transparent or dark gray (`#2B3139`) with gray text (`#848E9C`).
- **Pointer Extension**: The active segment features a small triangular extension at the bottom center (a "pointer") that visually docks the button to the input form below.
- **Corner Radius**: 4dp on outer edges; 0dp on the inner joining edge.

### Margin Action Buttons

**Usage**: Specialized actions within the Margin trading segment (Borrow, Repay).

| Property       | Value                                        |
| :------------- | :------------------------------------------- |
| **Height**     | 32dp (Small)                                 |
| **Background** | Transparent with 1dp `#474D57` border (Gray) |
| **Text Color** | `#F0B90B` (Yellow)                           |
| **Text Size**  | 13sp                                         |
| **Padding**    | 12dp Horizontal                              |

### Inline Asset List Buttons

**Usage**: Actionable items within the asset list (Earn, Trade).

| Property       | Value                 |
| :------------- | :-------------------- |
| **Height**     | 28dp (Mini)           |
| **Background** | `#2B3139` (Dark Gray) |
| **Text Color** | White                 |
| **Text Size**  | 12sp                  |
| **Radius**     | 4dp                   |
| **Padding**    | 8dp Horizontal        |

### Precision Adjustment Buttons

**Usage**: Micro-adjustments for price and amount inputs (`[-]` and `[+]`).

| Property       | Value                                           |
| :------------- | :---------------------------------------------- |
| **Size**       | 32dp x 32dp                                     |
| **Icon Size**  | 16dp                                            |
| **Icon Color** | `#848E9C` (Medium Gray)                         |
| **Border**     | 1dp solid `#2B3139` (Left/Right edges of input) |
| **Background** | Transparent or `#1E2329`                        |

### Micro-Action Context Buttons

**Usage**: Context menus, info tips, and quick navigations.

| Button Type           | Icon Drawable                         | Size   | Color       |
| :-------------------- | :------------------------------------ | :----- | :---------- |
| **Context Menu**      | `ic_more_vert.xml`                    | 24dp   | White       |
| **Notification Dot**  | (Small yellow circle on context icon) | 8dp    | `#F0B90B`   |
| **Scanner / QR**      | `ic_scanner.xml`                      | 24dp   | White       |
| **Info / Tooltip**    | `ic_info_outline.xml`                 | 16dp   | `#848E9C`   |
| **Chart Icon**        | `ic_chart_kline.xml`                  | 24dp   | White       |
| **X Mode Toggle**     | `ic_x_logo_switch.xml`                | 40dp   | White/Grey  |
| **Lightning Trade**   | `ic_lightning_yellow.xml`             | 32dp   | Yellow      |
| **Security Shield**   | `ic_shield_protection.xml`            | 24dp   | White       |
| **Allocation Toggle** | `ic_unit_switcher.xml` (%/$)          | 32dp   | Grey        |
| **Slanted Toggle**    | `bg_slanted_buy_sell.xml`             | Custom | Green/Red   |
| **BBO Button**        | `ic_bbo_action.xml` (Text: BBO)       | 28dp   | Yellow      |
| **Leverage Pill**     | `ic_leverage_x.xml` (x2, x5, x10)     | 24dp   | Gray/Yellow |
| **Funding Icon**      | `ic_funding.xml`                      | 24dp   | White       |

### Standard Icon Button

**Usage**: Toolbar actions, icon-only buttons

| Property      | Value                  |
| ------------- | ---------------------- |
| Size          | 48dp x 48dp            |
| Icon Size     | 24dp                   |
| Icon Color    | `#FFFFFF` (dark theme) |
| Background    | Transparent or ripple  |
| Ripple Radius | 24dp                   |

### Icon Button with Text

**Usage**: Feature buttons, quick actions

| Property      | Value        |
| ------------- | ------------ |
| Height        | 40dp         |
| Icon Size     | 20dp         |
| Icon Position | Left of text |
| Icon-Text Gap | 8dp          |
| Text Size     | 14sp         |

**Layout**:

```

┌─────────────────────────┐
│ [Icon] Button Text │
│ 20dp 14sp │
│ 8dp gap │
└─────────────────────────┘

```

### Floating Action Button (FAB)

**Usage**: Primary screen action

| Property         | Value           |
| ---------------- | --------------- |
| Size             | 56dp x 56dp     |
| Icon Size        | 24dp            |
| Background Color | `#F0B90B`       |
| Icon Color       | `#000000`       |
| Elevation        | 6dp             |
| Corner Radius    | 28dp (circular) |

---

## Button Dimensions Summary

### Height Specifications

| Button Type | Height (dp) | Touch Target |
| ----------- | ----------- | ------------ |
| Large       | 52dp        | 52dp         |
| Standard    | 40dp        | 48dp         |
| Small       | 32dp        | 48dp         |
| Mini        | 24dp        | 48dp         |
| FAB         | 56dp        | 56dp         |

### Width Specifications

| Button Type | Width                      |
| ----------- | -------------------------- |
| Full Width  | match_parent - 32dp margin |
| Half Width  | (match_parent - 40dp) / 2  |
| Auto Width  | wrap_content + padding     |
| Fixed Width | 120dp - 200dp              |

### Corner Radius

| Button Size | Radius   |
| ----------- | -------- |
| Large       | 8dp      |
| Standard    | 4dp      |
| Small       | 4dp      |
| Pill Shape  | height/2 |
| Circular    | 50%      |

---

## Button Padding Specifications

### Internal Padding

| Button Size | Horizontal | Vertical |
| ----------- | ---------- | -------- |
| Large       | 32dp       | 14dp     |
| Standard    | 24dp       | 10dp     |
| Small       | 16dp       | 6dp      |
| Mini        | 12dp       | 4dp      |

### Margin Specifications

| Context                  | Margin |
| ------------------------ | ------ |
| Screen edge to button    | 16dp   |
| Between button pair      | 8dp    |
| Button to other elements | 16dp   |
| Stacked buttons          | 12dp   |

---

## Button Placements by Screen

### Login Screen

| Button          | Type      | Position                 |
| --------------- | --------- | ------------------------ |
| Login           | Primary   | Full width, bottom       |
| Register        | Secondary | Full width, below login  |
| Forgot Password | Tertiary  | Centered, below register |

### Trading Screen

| Button     | Type        | Position           |
| ---------- | ----------- | ------------------ |
| Buy        | Buy (Green) | Left half, bottom  |
| Sell       | Sell (Red)  | Right half, bottom |
| Order Type | Secondary   | Top right          |

### Assets Screen

| Button     | Type           | Position                 |
| ---------- | -------------- | ------------------------ |
| Add Funds  | Primary        | Action bar (Yellow Fill) |
| Send       | Secondary Gray | Action bar (Outline)     |
| Withdraw   | Secondary Gray | Action bar (Outline)     |
| Transfer   | Secondary Gray | Action bar (Outline)     |
| Swap       | Secondary Gray | Action bar (Outline)     |
| Earn/Trade | Inline Mini    | Asset list rows (Right)  |
| Borrow     | Margin Small   | Margin account summary   |
| Repay      | Margin Small   | Margin account summary   |

### Dialog Buttons

| Button  | Type      | Position |
| ------- | --------- | -------- |
| Confirm | Primary   | Right    |
| Cancel  | Secondary | Left     |
| Delete  | Danger    | Right    |

---

## Loading State

### Loading Button Appearance

| Property           | Value                  |
| ------------------ | ---------------------- |
| Progress Indicator | Circular spinner       |
| Indicator Size     | 20dp                   |
| Indicator Color    | Same as text color     |
| Text               | Hidden or "Loading..." |
| Background         | 60% opacity            |

**XML Example**:

```xml
<FrameLayout
    android:layout_width="wrap_content"
    android:layout_height="40dp">

    <com.major.android.uikit2.button.KitButton
        android:text="@string/confirm"
        android:enabled="false" />

    <ProgressBar
        android:layout_width="20dp"
        android:layout_height="20dp"
        android:layout_gravity="center"
        android:indeterminateTint="#000000" />
</FrameLayout>
```

---

## Button Groups

### Split Button Group

**Usage**: Trade screen buy/sell

```
┌─────────────────────────────────────┐
│                                     │
│  ┌─────────────┐ ┌─────────────┐   │
│  │    BUY      │ │    SELL     │   │
│  └─────────────┘ └─────────────┘   │
│        50%            50%          │
└─────────────────────────────────────┘
```

### Stacked Button Group

**Usage**: Dialog actions, form submission

```
┌─────────────────────────────────────┐
│                                     │
│  ┌─────────────────────────────┐   │
│  │       Primary Action        │   │
│  └─────────────────────────────┘   │
│              12dp gap               │
│  ┌─────────────────────────────┐   │
│  │      Secondary Action       │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

### Horizontal Button Group

**Usage**: Dialog, confirmation

```
┌─────────────────────────────────────┐
│                                     │
│  ┌──────────────┐ ┌──────────────┐ │
│  │   Cancel     │ │   Confirm    │ │
│  │  Secondary   │ │   Primary    │ │
│  └──────────────┘ └──────────────┘ │
│        45%              45%        │
└─────────────────────────────────────┘
```

---

## Button Text Specifications

### Font Properties

| Button Type | Text Size | Font Weight | Letter Spacing |
| ----------- | --------- | ----------- | -------------- |
| Large       | 18sp      | Medium      | 0.02em         |
| Standard    | 16sp      | Medium      | 0.02em         |
| Small       | 14sp      | Medium      | 0.01em         |
| Mini        | 12sp      | Medium      | 0.01em         |

### Text Transform

| Button Type | Transform |
| ----------- | --------- |
| Primary     | Uppercase |
| Secondary   | Uppercase |
| Tertiary    | Lowercase |
| Trading     | Uppercase |

### Text Colors

| Button Type | Normal    | Pressed   | Disabled  |
| ----------- | --------- | --------- | --------- |
| Primary     | `#000000` | `#000000` | `#707A8A` |
| Secondary   | `#F0B90B` | `#D4A10A` | `#707A8A` |
| Buy         | `#FFFFFF` | `#FFFFFF` | `#707A8A` |
| Sell        | `#FFFFFF` | `#FFFFFF` | `#707A8A` |

---

## Special Button Types

### Gradient Button

**Usage**: Promotional, premium features

| Property   | Value                  |
| ---------- | ---------------------- |
| Gradient   | `#F0B90B` to `#FCD535` |
| Direction  | Left to Right          |
| Text Color | `#000000`              |

### Pill Button

**Usage**: Tags, filters, categories

| Property           | Value                |
| ------------------ | -------------------- |
| Height             | 32dp                 |
| Corner Radius      | 16dp (fully rounded) |
| Padding Horizontal | 16dp                 |
| Text Size          | 14sp                 |

### Chip Button

**Usage**: Selection, filters

| Property      | Value |
| ------------- | ----- |
| Height        | 32dp  |
| Corner Radius | 16dp  |
| Icon Size     | 16dp  |
| Text Size     | 14sp  |

**States**:
| State | Background | Text Color | Border |
|-------|------------|------------|--------|
| Unselected | `#1E2329` | `#848E9C` | None |
| Selected | `#F0B90B` | `#000000` | None |

---

## Web3 Specialized Controls

### X Mode Social Toggle

**Usage**: Web3 Markets (Trenches) to enable social sentiment data.

- **Visual**: Segmented toggle with the "X" logo on the active side.
- **Active Color**: White background with black logo.
- **Inactive Color**: Dark grey (#2B3139) with muted grey logo.

### Sell half at double Strategy Checkbox

**Usage**: Web3 Pro Trading for automated profit taking.

- **Visual**: Standard checkbox with custom yellow "✓" on check.
- **Label**: "Sell half at double" (12sp, Medium, White).

### Use Exchange Balance Switch

**Usage**: Web3 Swap to bridge CEX assets.

- **Visual**: Rounded switch (Yellow toggle handle on dark track).
- **Label**: "Use Exchange Balance" (14sp, Regular, White).

---

## Trade Page Directional Buttons

### Trade execution input field

**Usage**: Price and Amount entry in Spot/Alpha modes.

- **Integrated BBO**: Small "BBO" text-button at the end of the field (active in Margin).
- **Embedded Selector**: Small dropdown arrow inside the input field to switch between base and quote currency for entry (e.g., SOL or USDT).
- **Suggest Price Label**: Small text appearing below the Price field (e.g., "Suggest 678.07").
- **Currency Pill**: Unit (e.g., `USDC`) displayed as a gray pill inside the field.
- **Market Placeholder**: Displays "Market Price" when Market order is selected.

### Buy/Sell Pointer Button

**Usage**: Active execution button in Spot/Margin/Alpha.

- **Visual**: Rounded rectangle with a directional "pointer" extension on the outer edge (Right for Buy, Left for Sell).
- **States**:
  - **Buy**: Background `#02C076` (Green), Text "Buy [Asset]" (Binance White).
  - **Sell**: Background `#CF304A` (Red), Text "Sell [Asset]" (Binance White).

---

## Accessibility

### Touch Target

- Minimum touch target: 48dp x 48dp
- If button is smaller, add padding to meet minimum

### Contrast Requirements

| Button Type | Contrast Ratio |
| ----------- | -------------- |
| Primary     | 4.5:1 minimum  |
| Secondary   | 3:1 minimum    |
| Trading     | 4.5:1 minimum  |

### Focus Indicators

| Property          | Value     |
| ----------------- | --------- |
| Focus Ring Width  | 2dp       |
| Focus Ring Color  | `#F0B90B` |
| Focus Ring Offset | 2dp       |

---

## Button Component Code

### KitButton Usage

```xml
<com.major.android.uikit2.button.KitButton
    android:id="@+id/btn_confirm"
    android:layout_width="0dp"
    android:layout_height="40dp"
    android:text="@string/confirm"
    android:layout_weight="1.0"
    style="@style/2132148734" />
```

### Style References

| Style ID     | Type                   |
| ------------ | ---------------------- |
| `2132148734` | Primary Button         |
| `2132148739` | Secondary/Reset Button |

---

## Notes

1. All buttons maintain 48dp minimum touch target for accessibility
2. Primary buttons use Binance Yellow as the brand color
3. Trading buttons use green for buy and red for sell consistently
4. Disabled state uses consistent gray colors across all button types
5. Loading state shows progress indicator and disables interaction
6. Button text uses medium font weight for emphasis
7. Corner radius is consistent within button size categories
8. Ripple effect provides touch feedback on all interactive buttons
