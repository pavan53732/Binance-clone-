# Binance Cards & Lists Documentation

Components are categorized by their UI role in either the **Exchange** or **Web3 Wallet** interface.

---

## 1. Exchange Card Components (CeFi)

### Asset Cards (Exchange)

| Property       | Specification            | Description            |
| -------------- | ------------------------ | ---------------------- |
| **Background** | `#1E2329`                | Dark theme default     |
| **Actions**    | Deposit, Withdraw, Trade | Quick action footer    |
| **Metrics**    | Balance, USD Value       | Portfolio summary data |

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

- **Asset Row:** Includes **Network Badge** (small overlay icon on the main coin logo) indicating the chain (e.g., BSC, ETH).
- **NFT Gallery Card:** Square image preview with Collection Name and ID.

### 2. Transaction Cards

**Usage**: Transaction history, activity list

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────┐                                               │
│  │ 🟢   │  Deposit - BTC                       Completed│
│  │      │  +0.05000000 BTC                              │
│  └──────┘  Feb 24, 2024, 14:32                         │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Width | match_parent |
| Height | 72dp |
| Padding Horizontal | 16dp |
| Padding Vertical | 12dp |
| Background | Transparent or `#1E2329` |

**Internal Elements**:
| Element | Size/Style |
|---------|------------|
| Status Icon | 32dp x 32dp |
| Title | 16sp, Regular, White |
| Amount | 14sp, Medium, Green/Red |
| Timestamp | 12sp, Regular, `#848E9C` |
| Status Badge | 12sp, Rounded |

### 3. Market Cards

**Usage**: Markets screen, pair overview

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────┐                                               │
│  │ BTC  │  BTC/USDT                           ★        │
│  │ icon │  42,500.00 USDT                                    │
│  └──────┘  +2.5%                              ▁▂▃▄▅   │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Width | match_parent |
| Height | 64dp |
| Padding | 16dp horizontal, 8dp vertical |
| Background | Selectable ripple |

**Internal Elements**:
| Element | Size/Style |
|---------|------------|
| Coin Icon | 32dp x 32dp |
| Pair Symbol | 16sp, Medium, White |
| Price | 16sp, Regular, White |
| Change | 14sp, Medium, Green/Red |
| Sparkline | 60dp x 24dp |
| Favorite Icon | 24dp |

### 4. News Cards

**Usage**: News feed, announcements

**Layout**:

```
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
| Property | Value |
|----------|-------|
| Width | match_parent - 32dp |
| Corner Radius | 12dp |
| Background | `#1E2329` |
| Image Height | 180dp (16:9) |
| Padding | 16dp |

**Internal Elements**:
| Element | Size/Style |
|---------|------------|
| Image | 16:9 aspect ratio |
| Title | 16sp, Medium, White, 2 lines max |
| Description | 14sp, Regular, `#848E9C`, 3 lines max |
| Meta | 12sp, Regular, `#707A8A` |

### 5. Promo Cards

**Usage**: Home screen promotions, special offers

**Layout**:

```
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
| Property | Value |
|----------|-------|
| Width | match_parent - 32dp |
| Height | 160dp |
| Corner Radius | 12dp |
| Background | Gradient or brand color |
| Padding | 20dp |

**Internal Elements**:
| Element | Size/Style |
|---------|------------|
| Icon/Emoji | 32sp |
| Title | 20sp, Bold, White |
| Description | 14sp, Regular, White 80% |
| CTA Button | 40dp height |

---

## List Item Layouts

### 1. Coin List Item

**Usage**: Asset list, coin selection

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────┐                                               │
│  │ BTC  │  Bitcoin (BTC)                      0.5      │
│  │ icon │  $42,500.00                          $21,250 │
│  └──────┘                                               │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 64dp |
| Padding Horizontal | 16dp |
| Padding Vertical | 12dp |
| Background | Selectable |

**Internal Elements**:
| Element | Position | Size |
|---------|----------|------|
| Icon | Left | 32dp |
| Name/Symbol | Left of icon | 16sp/12sp |
| Balance | Right | 16sp |
| USD Value | Right, below balance | 14sp, `#848E9C` |

### 2. Transaction List Item

**Usage**: Transaction history

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────┐                                               │
│  │  🟢  │  Deposit - BTC              Completed  →     │
│  │      │  +0.05 BTC • Feb 24                         │
│  └──────┘                                               │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 72dp |
| Padding | 16dp horizontal |
| Divider | 1dp, `#2B3139` |

**Internal Elements**:
| Element | Style |
|---------|-------|
| Icon | 40dp, status-colored |
| Title | 16sp, White |
| Subtitle | 14sp, `#848E9C` |
| Status | 12sp badge |
| Arrow | 24dp, `#848E9C` |

### 3. Order List Item

**Usage**: Open orders, order history

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  BTC/USDT                                      [Cancel] │
│  Limit • Buy                                            │
│                                                         │
│  Price              Amount              Total           │
│  42,000 USDT        0.1 BTC             4,200 USDT     │
│                                                         │
│  Filled: 0%                        Feb 24, 14:32       │
│  ─────────────────────────────────────────────────────  │
│  ████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 100dp |
| Padding | 16dp |
| Background | `#1E2329` |
| Margin Bottom | 8dp |

**Internal Elements**:
| Element | Style |
|---------|-------|
| Pair | 16sp, Medium, White |
| Type | 12sp, `#848E9C` |
| Cancel Button | 32dp height, outline |
| Labels | 12sp, `#848E9C` |
| Values | 14sp, White |
| Progress Bar | 4dp height |

### 4. Notification List Item

**Usage**: Notification center

**Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  ┌──────┐                                               │
│  │  🔔  │  Price Alert Triggered                       │
│  │      │  BTC reached $42,500                        │
│  └──────┘  2 hours ago                                 │
└─────────────────────────────────────────────────────────┘
```

**Specifications**:
| Property | Value |
|----------|-------|
| Height | 72dp |
| Padding | 16dp |
| Unread Background | `#1AF0B90B` |
| Read Background | Transparent |

**Internal Elements**:
| Element | Style |
|---------|-------|
| Icon | 32dp, context-colored |
| Title | 16sp, White |
| Message | 14sp, `#848E9C` |
| Timestamp | 12sp, `#707A8A` |
| Unread Dot | 8dp, `#F0B90B` |

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

**Standard Divider**:
| Property | Value |
|----------|-------|
| Height | 1dp |
| Color | `#2B3139` |
| Margin Left | 16dp (or 60dp with icon) |
| Margin Right | 0dp |

**Full Width Divider**:
| Property | Value |
|----------|-------|
| Height | 1dp |
| Color | `#2B3139` |
| Margin | 0dp |

**Section Divider**:
| Property | Value |
|----------|-------|
| Height | 4dp |
| Color | `#181A20` |
| Margin | 0dp |

### Card Dividers

**Internal Divider**:
| Property | Value |
|----------|-------|
| Height | 1dp |
| Color | `#2B3139` |
| Margin Horizontal | 16dp |

**Rounded Divider**:
| Property | Value |
|----------|-------|
| Height | 4dp |
| Corner Radius | 2dp |
| Color | `#2B3139` |

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
| Property | Value |
|----------|-------|
| Span Count | 2 |
| Card Width | (screen - 48dp) / 2 |
| Card Height | 120dp |
| Horizontal Gap | 16dp |
| Vertical Gap | 12dp |

**3-Column Grid**:
| Property | Value |
|----------|-------|
| Span Count | 3 |
| Card Width | (screen - 64dp) / 3 |
| Card Height | 100dp |
| Horizontal Gap | 16dp |
| Vertical Gap | 12dp |

### Grid Card Layout

```
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

```
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
