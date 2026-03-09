# Binance Cards & Lists Documentation

## Overview

This document specifies the design and behavior of various card and list components used in the Binance Android app, catering to both the **Exchange** and **Web3 Wallet** interfaces.

---

## 1. Exchange Card Components (CeFi)

### Asset Cards (Exchange Portfolio)

| Property         | Specification               | Description                   |
| ---------------- | --------------------------- | ----------------------------- |
| **Background**   | `#1E2329`                   | Dark theme default            |
| **Primary Text** | `₹15.29` (Est. Total Value) | 24sp, Bold, White             |
| **PNL Text**     | `-₹1.27 (-7.67%)`           | 12sp, Medium, Red (`#F6465D`) |
| **Actions**      | "Add Funds" Button          | Yellow, 40dp height           |

### Margin Account Risk Card

**Usage**: Displays debt and risk levels in the Assets -> Margin segment.

| Element                   | Specification       | Details                                  |
| ------------------------- | ------------------- | ---------------------------------------- |
| **Margin Level**          | `999.00`            | 20sp, Bold, Green (`#2EBD85`)            |
| **Risk Gauge**            | Linear Progress Bar | Low (Green), Medium (Orange), High (Red) |
| **Total Debt**            | `0.00 USDT`         | 14sp, Regular, White                     |
| **Account Equity**        | `10.50 USDT`        | 14sp, Regular, White                     |
| **Margin Action Buttons** | Green or Red Solid  | 12sp, Medium, White                      |
| **Asset List Buttons**    | Secondary Gray      | 12sp, Medium, White                      |

### Margin Mode Control (Trade Page)

### Market Overview Grid Cards (Exchange Home)

**Usage**: BNB, SOL, BTC overview on Home screen.

| Element         | Specification           | Details                              |
| --------------- | ----------------------- | ------------------------------------ |
| **Container**   | 170dp x 180dp (approx)  | Corner Radius: 12dp, Bg: `#1E2329`   |
| **Coin Symbol** | 14sp, Medium, `#848E9C` | e.g., "BNB"                          |
| **Price**       | 18sp, Bold, White       | e.g., "610.53"                       |
| **Change %**    | 14sp, Medium, Green/Red | e.g., "-1.64%"                       |
| **Sparkline**   | 140dp x 40dp            | Red (`#F6465D`) or Green (`#2EBD85`) |

### Quick Action Hub Cards (Exchange Home)

| Card Type      | Primary Text            | Secondary Info / Meta                  |
| -------------- | ----------------------- | -------------------------------------- |
| **P2P Orders** | "P2P Orders"            | "Buy/Sell Crypto with INR"             |
| **Send Cash**  | "Send Cash"             | "Send Crypto and Receive Fiat"         |
| **Details**    | **Ref.Rate:** `₹101.16` | Includes small green sparkline preview |

---

## 2. Web3 Wallet Card Components (DeFi)

The Web3 interface introduces specialized cards for decentralized discovery and asset management.

### DApp Discovery Cards (Discover Tab)

- **Large Banner Card:** High-priority news or rewards (e.g., "SPK Rewards").
- **Grid Category Card:** 4x2 grid of small DApp icons with labels.

### Meme Rush / Trending Cards (Markets Tab)

| Element        | Visual Style            | Details                                  |
| -------------- | ----------------------- | ---------------------------------------- |
| **Token Icon** | Multi-stacked (3 icons) | Shows top trending coins in the category |
| **New Tokens** | Text Badge              | Quantity of new tokens added in 1h       |
| **Signals**    | Pulse animation         | Market alerts (Gems found)               |

### On-Chain Asset List Items (Assets Tab)

- **NFT Gallery Card:** Square image preview with Collection Name and ID.

### Web3 Wallet Controller Card

**Usage**: Top of Web3 Home/Assets pages.

- **Specification**:
  - **Background**: Subtle linear gradient (#1E2329 to #2B3139) or transparent overlay.
  - **Balance**: 28sp, Bold, Binance White.
  - **Actions**: Array of circular grey buttons (Send, Receive, History, Approvals).

### Topic Rush Social Sentiment Bar

**Usage**: Web3 Markets (Topic Rush).

- **Specification**:
  - **Width**: match_parent (within card).
  - **Height**: 4dp.
  - **Gradient**: Linear from Orange (#F6465D - Bearish) to Green (#0ECB81 - Bullish).

### Asset Selector Bottom Sheet

**Usage**: Primary pair switching in Trade/Alpha.

- **Header**:
  - **Search Bar**: "Search token name or address" with "Cancel" text-link.
  - **Filter Chips**: Horizontal scroll of capsules (`Hot`, `New`, `Alpha`, `Point+`, `Stocks`).
- **Body**:
  - **Categorized Sections**: Vertical lists of tokens with network badges and profit multipliers (e.g., `x10`).
- **Footer**: Sticky "Browse More" link with right arrow.

### Network Badge (Asset Logo Overlay)

**Usage**: Asset icons in search/Alpha lists.

- **Specification**:
  - **Logo**: 12dp circular icon with network branding (e.g., SOL, BASE, ARB).
  - **Position**: Bottom-right (overlapping 25% of the main icon).
  - **Label**: Adjacent text label (e.g., "Solana", "Base") in 10sp Grey.

### Dual-Metric Search Row

**Usage**: Asset search results.

- **Layout**: Token Name/Symbol on left, Metrics on right.
- **Metrics**: 24h Volume separated from Market Cap by a vertical divider `|` (e.g., `$24M | $1.2B`).

### Taker Fee Promo Badge

**Usage**: Pair lists (specifically USDC markets).

- **Style**: Rounded pill, Yellow Background (#F0B90B), Black text.
- **Text**: "Taker Fee Promo".
- **Growth Indicator**: Percentage change in Green/Red based on 24h delta.
- **Multiplier**: Yellow `x2` or `x4` pill badge for incentive-eligible tokens.

### 2. Transaction Cards

**Usage**: Transaction history, activity list

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│  ┌──────┐                                               │
│  │ 🟢   │  Deposit - BTC                       Completed│
│  │      │  +0.05000000 BTC                              │
│  └──────┘  Feb 24, 2024, 14:32                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property           | Value                    |
| :----------------- | :----------------------- |
| Width              | match_parent             |
| Height             | 72dp                     |
| Padding Horizontal | 16dp                     |
| Padding Vertical   | 12dp                     |
| Background         | Transparent or `#1E2329` |

**Internal Elements**:

| Element      | Size/Style               |
| :----------- | :----------------------- |
| Status Icon  | 32dp x 32dp              |
| Title        | 16sp, Regular, White     |
| Amount       | 14sp, Medium, Green/Red  |
| Timestamp    | 12sp, Regular, `#848E9C` |
| Status Badge | 12sp, Rounded            |

### 3. Market Ticker List Item (Exchange Markets)

**Usage**: Main asset list on Markets screen.

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│  BTC/USDT                             42,500.21        │
│  Bitcoin    Vol 2.4B                  +2.45%           │
│  ★ icon                               ▁▂▃▄▅ (Spark)   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property               | Value                                           |
| ---------------------- | ----------------------------------------------- | ------------ |
| Width                  | match_parent                                    |
| Height                 | 72dp                                            |
| Padding                | 16dp Horizontal                                 |
| `ic_copy.xml`          | Overlapping rectangles (standard copy icon)     | Trade Menu   |
| `ic_bots.xml`          | Robot head profile icon                         | Trade Menu   |
| `ic_manage.xml`        | Sliders/Filters icon                            | Trade Menu   |
| `ic_leverage_pill.xml` | Pill background for x2, x5, x10 multiplier      | Margin/Trade |
| `ic_unit_switcher.xml` | Opposing arrows circle (%/$)                    | Order Form   |
| Background             | Selectable ripple (on click: navigate to Trade) |

**Internal Elements**:

| Element         | Specification                             | Style / Color                                   |
| --------------- | ----------------------------------------- | ----------------------------------------------- |
| **Symbol**      | `BTC/USDT`                                | 16sp, Bold, White                               |
| **Full Name**   | `Bitcoin`                                 | 12sp, Regular, `#848E9C`                        |
| **Volume**      | `Vol 2.41B`                               | 12sp, Medium, `#848E9C`                         |
| **Price**       | `42,500.21`                               | 16sp, Bold, White                               |
| **Change %**    | `+2.45%` (Pill)                           | 14sp, White text on color pill (Green/Red)      |
| **Change Pill** | Corner Radius: 4dp, Vertical padding: 4dp | Green: `#2EBD85`, Red: `#F6465D`                |
| **Sparkline**   | 1:1 Parity with 24h trend                 | Path width: 1.5dp, Color: `#2EBD85` / `#F6465D` |
| **Star Icon**   | `ic_star_hollow` or `ic_star_filled`      | Size: 20dp, Active Color: `#F0B90B`             |

### 4. News Cards

**Usage**: News feed, announcements

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────┐   │
│  │                  News Image                     │   │
│  │                   16:9                          │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Bitcoin Reaches New All-Time High                     │
│  Market analysis shows strong bullish sentiment...     │
│                                                         │
│  Feb 24, 2024 • 5 min read                             │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property      | Value               |
| ------------- | ------------------- |
| Width         | match_parent - 32dp |
| Corner Radius | 12dp                |
| Background    | `#1E2329`           |
| Image Height  | 180dp (16:9)        |
| Padding       | 16dp                |

**Internal Elements**:

| Element          | Size/Style                              |
| ---------------- | --------------------------------------- | ------------------------- |
| Image            | 16:9 aspect ratio                       |
| Title            | 16sp, Medium, White, 2 lines max        |
| Description      | 14sp, Regular, `#848E9C`, 3 lines max   |
| Meta             | 12sp, Regular, `#707A8A`                |
| **Social Stats** | Icons for Comment, Retweet, Like, Share | Social interaction footer |

### 6. Futures-Specific Components

**Option Card (Options Tab)**:

- **Usage**: Call/Put strike price selection in Futures Options.
- **Card Sub-Tabs**: `Call ↗` and `Put ↘` (Directional orientation indicators).
- **Strike Price Layout**: Star icon (Favorites) + Strike Price (e.g., `1,925 Call`) + Gray leverage multiplier badge (`66.08x`).
- **Strike Price Separator**: Pill-shaped `Index Price` (e.g., `1941.16`) on a horizontal white line splitting Call from Put cards (ITM vs OTM).
- **Stats Row**:
  - `Breakeven (%)`: Precise price and percentage in brackets, e.g., `1,954.3637 (+0.72%)`.
  - `Prob of Profit`: Percentage value with 2 decimal places.
- **Mark Price Box**: Dark gray rounded container with color-coded value.

**Trader Profile Card (Smart Money)**:

- **Usage**: Top Traders leaderboard.
- **Header**: User Avatar (Circle with themed graphic) + Username + Subscriber Count Badge (`1,772 Subscribers`).
- **KPI Grid**:
  - `30D PnL (USD)`: Large green value (e.g., `+$732,377.76`).
  - `30D ROI`: Red/Green large percentage text.
  - `Assets (USD)`: Portfolio value.
- **Equity Curve**: Cyan sparkline at the bottom edge.
- **Primary Action**: "Subscribe" yellow button.

**Smart Signal Card (Smart Money)**:

- **Usage**: Market flow tracking for dominant signals.
- **Interaction Bar**: `Refresh` icon with `30s` indicator.
- **Header**: Crypto Symbol (e.g., `ETHUSDT Perp`) + Gray rounded "View" Button.
- **Dominant Flow**: Labeled with `S` (Red Box) or `B` (Green Box).
- **Sentiment Bar**: Dual-progress bar (Green vs Red) showing Long/Short ratio.
- **Engagement Details**: Person silhouette icon (`res/drawable/ic_trader_count.xml`) followed by `Total (Active)` interaction counts, e.g., `143 ( 53 )`.

### 5. Promo Cards

**Usage**: Home screen promotions, special offers

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                  │   │
│  │     🎁 Special Offer                            │   │
│  │                                                  │   │
│  │     Get $10 Bonus on First Deposit              │   │
│  │     Deposit $100 or more to qualify             │   │
│  │                                                  │   │
│  │     [Learn More]                                │   │
│  │                                                  │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property      | Value                   |
| :------------ | :---------------------- |
| Width         | match_parent - 32dp     |
| Height        | 160dp                   |
| Corner Radius | 12dp                    |
| Background    | Gradient or brand color |
| Padding       | 20dp                    |

**Internal Elements**:

| Element     | Size/Style               |
| :---------- | :----------------------- |
| Icon/Emoji  | 32sp                     |
| Title       | 20sp, Bold, White        |
| Description | 14sp, Regular, White 80% |
| CTA Button  | 40dp height              |

---

## List Item Layouts

### 1. Coin List Item

**Usage**: Asset list, coin selection

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│  ┌──────┐                                               │
│  │ BTC  │  Bitcoin (BTC)                     0.5       │
│  │ icon │  $42,500.00                         $21,250  │
│  └──────┘                                               │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property           | Value      |
| ------------------ | ---------- |
| Height             | 64dp       |
| Padding Horizontal | 16dp       |
| Padding Vertical   | 12dp       |
| Background         | Selectable |

**Internal Elements**:

| Element       | Position                | Size         | Style                       |
| :------------ | :---------------------- | :----------- | :-------------------------- |
| **Icon**      | Left                    | 32dp         | Circular crop               |
| **Name**      | Top Left (adj. icon)    | 16sp         | Bold, White                 |
| **Symbol**    | Bottom Left (adj. icon) | 12sp         | Regular, `#848E9C`          |
| **Balance**   | Top Right               | 16sp         | Bold, White                 |
| **USD Value** | Bottom Right            | 14sp         | Regular, `#848E9C`          |
| **Actions**   | Inline (Far Right)      | Mini Buttons | "Earn", "Trade" (Dark Gray) |

### 2. Transaction List Item

**Usage**: Transaction history

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│ ┌──────┐                                                │
│ │ 🟢   │  Deposit - BTC                       Completed │
│ │      │  +0.05 BTC • Feb 24                            │
│ └──────┘                                                │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property | Value           |
| -------- | --------------- |
| Height   | 72dp            |
| Padding  | 16dp horizontal |
| Divider  | 1dp, `#2B3139`  |

**Internal Elements**:

| Element  | Style                |
| -------- | -------------------- |
| Icon     | 40dp, status-colored |
| Title    | 16sp, White          |
| Subtitle | 14sp, `#848E9C`      |
| Status   | 12sp badge           |
| Arrow    | 24dp, `#848E9C`      |

### 3. Order List Item

**Usage**: Open orders, order history

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│ BTC/USDT [Cancel]                                       │
│ Limit • Buy                                             │
│                                                         │
│ Price Amount Total                                      │
│ 42,000 USDT 0.1 BTC 4,200 USDT                          │
│                                                         │
│ Filled: 0% Feb 24, 14:32                                │
│ ─────────────────────────────────────────────────────   │
│ ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property      | Value     |
| ------------- | --------- |
| Height        | 100dp     |
| Padding       | 16dp      |
| Background    | `#1E2329` |
| Margin Bottom | 8dp       |

**Internal Elements**:

| Element       | Style                |
| ------------- | -------------------- |
| Pair          | 16sp, Medium, White  |
| Type          | 12sp, `#848E9C`      |
| Cancel Button | 32dp height, outline |
| Labels        | 12sp, `#848E9C`      |
| Values        | 14sp, White          |
| Progress Bar  | 4dp height           |

### 4. Notification List Item

**Usage**: Notification center

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│ ┌──────┐                                                │
│ │ 🔔   │  Price Alert Triggered                          │
│ │      │  BTC reached $42,500                            │
│ └──────┘  2 hours ago                                   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:

| Property          | Value       |
| ----------------- | ----------- |
| Height            | 72dp        |
| Padding           | 16dp        |
| Unread Background | `#1AF0B90B` |
| Read Background   | Transparent |

**Internal Elements**:

| Element    | Style                 |
| ---------- | --------------------- |
| Icon       | 32dp, context-colored |
| Title      | 16sp, White           |
| Message    | 14sp, `#848E9C`       |
| Timestamp  | 12sp, `#707A8A`       |
| Unread Dot | 8dp, `#F0B90B`        |

---

## Card Dimensions Summary

### Standard Card Sizes

| Card Type        | Width       | Height    | Radius |
| ---------------- | ----------- | --------- | ------ |
| Asset Card       | Full - 32dp | 120dp min | 12dp   |
| Transaction Card | Full        | 72dp      | 0dp    |
| Market Card      | Full        | 64dp      | 0dp    |
| News Card        | Full - 32dp | Wrap      | 12dp   |
| Promo Card       | Full - 32dp | 160dp     | 12dp   |
| Info Card        | Full - 32dp | Wrap      | 8dp    |

### Card Padding

| Card Type  | Horizontal | Vertical |
| ---------- | ---------- | -------- |
| Standard   | 16dp       | 16dp     |
| Compact    | 12dp       | 12dp     |
| Large      | 20dp       | 20dp     |
| No Padding | 0dp        | 0dp      |

---

## Internal Spacing

### Card Internal Spacing

| Element Gap        | Spacing |
| ------------------ | ------- |
| Icon to Text       | 12dp    |
| Title to Subtitle  | 4dp     |
| Text to Button     | 16dp    |
| Between Buttons    | 8dp     |
| Section to Section | 16dp    |

### List Item Internal Spacing

| Element Gap       | Spacing |
| ----------------- | ------- |
| Icon to Content   | 12dp    |
| Title to Subtitle | 2dp     |
| Content to Action | 16dp    |
| Between Columns   | 24dp    |

---

## Divider Styles

### List Dividers

| Property     | Value                    |
| ------------ | ------------------------ |
| Height       | 1dp                      |
| Color        | `#2B3139`                |
| Margin Left  | 16dp (or 60dp with icon) |
| Margin Right | 0dp                      |

**Full Width Divider**:

| Property | Value     |
| -------- | --------- |
| Height   | 1dp       |
| Color    | `#2B3139` |
| Margin   | 0dp       |

**Section Divider**:

| Property | Value     |
| -------- | --------- |
| Height   | 4dp       |
| Color    | `#181A20` |
| Margin   | 0dp       |

### Card Dividers

**Internal Divider**:

| Property          | Value     |
| ----------------- | --------- |
| Height            | 1dp       |
| Color             | `#2B3139` |
| Margin Horizontal | 16dp      |

**Rounded Divider**:

| Property      | Value     |
| ------------- | --------- |
| Height        | 4dp       |
| Corner Radius | 2dp       |
| Color         | `#2B3139` |

---

## Card Backgrounds

### Background Colors

| Card Type   | Color       | Opacity |
| ----------- | ----------- | ------- |
| Standard    | `#1E2329`   | 100%    |
| Elevated    | `#202630`   | 100%    |
| Highlighted | `#1AF0B90B` | 10%     |
| Error       | `#1AF6465D` | 10%     |
| Success     | `#1A2EBD85` | 10%     |

### Background Drawables

**Standard Card**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FF1E2329" />
    <corners android:radius="12dp" />
</shape>
```

**Card with Border**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#FF1E2329" />
    <stroke android:width="1dp" android:color="#FF2B3139" />
    <corners android:radius="12dp" />
</shape>
```

**Selectable Card**:

```xml
<ripple android:color="#1AFFFFFF">
    <item>
        <shape android:shape="rectangle">
            <solid android:color="#FF1E2329" />
            <corners android:radius="12dp" />
        </shape>
    </item>
</ripple>
```

---

## List View Specifications

### RecyclerView Configuration

| Property         | Value    |
| ---------------- | -------- |
| Clip to Padding  | false    |
| Padding Top      | 8dp      |
| Padding Bottom   | 8dp      |
| Scrollbars       | vertical |
| Over-scroll Mode | always   |

### List Item Animation

| Animation   | Duration |
| ----------- | -------- |
| Item Add    | 200ms    |
| Item Remove | 200ms    |
| Item Move   | 250ms    |
| Item Change | 150ms    |

### List States

| State   | UI                       |
| ------- | ------------------------ |
| Loading | Shimmer effect           |
| Empty   | Empty state illustration |
| Error   | Error message with retry |
| Content | List items visible       |

---

## Grid Layouts

### Grid Card Specifications

**2-Column Grid**:

| Property       | Value               |
| -------------- | ------------------- |
| Span Count     | 2                   |
| Card Width     | (screen - 48dp) / 2 |
| Card Height    | 120dp               |
| Horizontal Gap | 16dp                |
| Vertical Gap   | 12dp                |

**3-Column Grid**:

| Property       | Value               |
| -------------- | ------------------- |
| Span Count     | 3                   |
| Card Width     | (screen - 64dp) / 3 |
| Card Height    | 100dp               |
| Horizontal Gap | 16dp                |
| Vertical Gap   | 12dp                |

### Grid Card Layout

```text
┌─────────────┐  ┌─────────────┐
│  Feature 1  │  │  Feature 2  │
│    Icon     │  │    Icon     │
│   Title     │  │   Title     │
└─────────────┘  └─────────────┘
┌─────────────┐  ┌─────────────┐
│  Feature 3  │  │  Feature 4  │
│    Icon     │  │    Icon     │
│   Title     │  │   Title     │
└─────────────┘  └─────────────┘
```

---

## Horizontal Scroll Cards

### Carousel Layout

```text
┌─────────────────────────────────────────────────────────┐
│  Section Title                               See All → │
├─────────────────────────────────────────────────────────┤
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │
│  │ Card 1  │ │ Card 2  │ │ Card 3  │ │ Card 4  │  →   │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘      │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Card Width | 280dp |
| Card Height | 160dp |
| Card Gap | 12dp |
| Edge Padding | 16dp |
| Snap Behavior | Snap to center |

---

## Notes

1. Cards use consistent corner radius (12dp for elevated, 0dp for list items)
2. List items have 48dp minimum touch target
3. Dividers are subtle to maintain visual hierarchy
4. Card elevation creates depth hierarchy
5. Horizontal scroll cards snap for better UX
6. Grid layouts adapt to screen size
7. Empty states provide helpful guidance
8. Loading states use shimmer effect
9. All cards support dark theme
10. Padding ensures content doesn't touch edges
