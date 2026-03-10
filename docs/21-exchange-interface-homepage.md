# 21. Exchange Interface: Home Page

## Overview

This document provides an exhaustive, pixel-perfect technical specification of the Binance **Exchange Home Page** (Pro Mode). This documentation covers the CeFi (Centralized Finance) trading interface, distinct from the Web3 Wallet interface. Every component, spacing, color value, and interaction state is documented with microscopic precision for implementation accuracy.

---

## 1. Primary App Header (Global)

**Layout Structure**: `[User Menu] [Chat] | [Exchange | Wallet Toggle] | [Support] [Profile/Scan]`

### Component Hierarchy

#### 1.1.1 User Menu Icon (Hamburger)

- **Position**: x=16px from left edge, y=16px from top
- **Dimensions**: 24x24px hit area, icon 18x18px
- **Icon Design**: Three horizontal lines
  - Line length: 18px
  - Line thickness: 2px stroke
  - Line color: #EAECEF (90% opacity white, NOT pure white)
  - Spacing between lines: 4px (gap)
  - End caps: Rounded (line-cap: round)
  - Total height: 14px (3 lines + 2 gaps)
  - Vertical alignment: Centered in 24px container
- **Touch Target**: 48x48px (Material Design guideline)
- **Interaction**: Opens left navigation drawer with slide animation (300ms ease-in-out)

#### 1.1.2 Chat Notification Icon

- **Position**: 12px right of hamburger menu
- **Icon Base**: Speech bubble with tail
  - Bubble dimensions: 20x16px
  - Tail: 4px triangle at bottom-right
  - Color: #EAECEF
  - Stroke: 2px outline
- **Notification Badge**:
  - Shape: Perfect circle (16px diameter)
  - Background: #F5C518 (Binance yellow)
  - Position: Top-right, overlapping icon by 4px
  - Badge offset: x=+12px, y=-12px from icon top-right
  - Text: "99+" (black/dark grey, 10pt bold, SF Pro Display)
  - Text alignment: Centered in circle
  - Badge border: None (flat)
  - Badge shadow: rgba(0, 0, 0, 0.3), 2px blur

#### 1.1.3 Exchange/Wallet Segmented Control

- **Container Specifications**:
  - Background: #2B3139 (dark grey-blue, RGB: 43, 49, 57)
  - Border radius: 8px (uniform)
  - Height: 32px
  - Width: ~180px (auto-sized to content)
  - Horizontal padding: 4px total (2px per side for gap)
  - Vertical padding: 0px (content fills height)
  - Position: Centered horizontally in header
  - Elevation: 0px (flat design)
  - Border: None

- **"Exchange" Button (Active State)**:
  - Background: #1E2329 (darker grey highlight, NOT transparent)
  - Border Radius: 6px (inner rounded corners)
  - Text: "Exchange" (8 characters)
  - Font: 14pt semi-bold (SF Pro Display SemiBold) - NOT 15pt
  - Letter spacing: 0.3px
  - Text color: #EAECEF (90% opacity, NOT pure white)
  - Horizontal padding: 16px left/right
  - Vertical alignment: Center
  - Line height: 32px (matches container)
  - Active indicator: Background highlight (NOT text weight)

- **"Wallet" Button (Inactive State)**:
  - Background: Transparent (no highlight)
  - Text: "Wallet" (6 characters)
  - Font: 14pt regular (SF Pro Display Regular)
  - Letter spacing: 0.3px
  - Text color: #848E9C (RGB: 132, 142, 156, 60% opacity grey)
  - Horizontal padding: 16px left/right
  - Hover state: Background #474D57 at 20% opacity
  - Transition: 200ms ease-in-out

#### 1.1.4 Support Icon

- **Position**: 16px from right edge, vertical center
- **Icon Design**: Customer support headset
  - Headband: Curved arc (2px stroke)
  - Ear cups: Two circles (6px diameter each)
  - Microphone: Small boom arm extending from left ear cup (2px stroke)
  - Total height: 22px
  - Total width: 20px
  - Color: #EAECEF (90% opacity white)
  - Line weight: 2px uniform
  - End caps: Rounded
- **Touch Target**: 48x48px
- **Interaction**: Opens customer support chat interface

#### 1.1.5 Profile/Scan Icon

- **Position**: 12px right of headset icon (final element)
- **Icon Design**: User profile with scan indicator
  - Head: Circle (8px diameter)
  - Shoulders: Semi-ellipse (12px width)
  - Scan line: Diagonal line across profile (2px stroke)
  - Color: #EAECEF (90% opacity)
  - Stroke: 2px outline
- **Touch Target**: 48x48px
- **Interaction**: Opens user profile or scan QR menu

### Header Layout Specifications

| Element      | X Position | Y Position | Width | Height | Color   | Font Size | Font Weight |
| ------------ | ---------- | ---------- | ----- | ------ | ------- | --------- | ----------- |
| User Menu    | 16px       | 16px       | 24px  | 24px   | #EAECEF | -         | -           |
| Chat Icon    | 52px       | 16px       | 24px  | 24px   | #EAECEF | -         | -           |
| Badge        | 68px       | 12px       | 16px  | 16px   | #F5C518 | 10pt      | Bold        |
| Exchange Tab | 108px      | 16px       | 80px  | 32px   | #EAECEF | 14pt      | SemiBold    |
| Wallet Tab   | 188px      | 16px       | 80px  | 32px   | #848E9C | 14pt      | Regular     |
| Support Icon | 320px      | 16px       | 24px  | 24px   | #EAECEF | -         | -           |
| Profile Icon | 356px      | 16px       | 24px  | 24px   | #EAECEF | -         | -           |

### Header Container

- **Total Height**: 56px (including status bar: 80px)
- **Background**: #1E2329 (dark grey)
- **Top Padding**: 24px (status bar area)
- **Bottom Border**: 1px solid #2B3139 (subtle divider)
- **Safe Area**: Respects iOS notch/Android punchout

---

## 2. Dynamic Search & Trending Hub

### Container Specifications

- **Background**: #1E2329 (RGB: 30, 35, 41)
- **Border Radius**: 12px (uniform on all corners)
- **Height**: 40px
- **Width**: Calculated as (Screen Width - 32px) for 16px left/right margins
- **Margin**: 16px horizontal, 8px top (below header)
- **Padding**: 0px internal (content positioned absolutely)
- **Border**: None (flat design)
- **Shadow**: None

### Icon Specifications

#### 2.1.1 Hot Search Flame Icon

- **Position**: 12px from left edge, vertically centered
- **Dimensions**: 20x20px
- **Design**: Stylized flame with 3 curves
- **Color Treatment**: Vertical gradient
  - Top (0%): #FF6B35 (orange-red, RGB: 255, 107, 53)
  - Middle (50%): #FF8C00 (orange, RGB: 255, 140, 0)
  - Bottom (100%): #FFD700 (yellow, RGB: 255, 215, 0)
- **Gradient Type**: Linear (top to bottom)
- **Flame Height**: 16px
- **Flame Width**: 12px
- **Animation**: Subtle flicker (0.8s loop, not visible in static)

#### 2.1.2 Placeholder Text

- **Text Content**: "HOLO hot search" (rotating keywords)
- **Font**: 14pt regular (SF Pro Display Regular)
- **Color**: #848E9C (RGB: 132, 142, 156, 50% opacity)
- **Letter Spacing**: 0.3px
- **Vertical Alignment**: Center (baseline at 20px from top)
- **Horizontal Position**: 40px from left edge (12px after flame)
- **Line Height**: 40px (matches container)
- **Rotation Animation**: Keywords change every 3.5s with fade transition (300ms)

#### 2.1.3 Search Icon (Magnifying Glass)

- **Position**: 12px from right edge, vertically centered
- **Dimensions**: 20x20px
- **Design Components**:
  - Circle: 12px diameter, 2px stroke
  - Handle: 8px length, 2px stroke
  - Handle Angle: 45° (bottom-right)
  - Circle Position: Top-left of icon bounds
  - Handle Position: Extends to bottom-right
- **Color**: #848E9C (50% opacity grey)
- **Line Weight**: 2px uniform
- **End Cap**: Rounded (line-cap: round)
- **Touch Target**: 48x48px
- **Interaction**: Triggers keyboard with focus animation (200ms)

### Interaction States

| State           | Background | Border            | Icon Opacity | Placeholder Opacity |
| --------------- | ---------- | ----------------- | ------------ | ------------------- |
| Default         | #1E2329    | None              | 100%         | 50%                 |
| Hover           | #2B3139    | None              | 100%         | 50%                 |
| Focused         | #2B3139    | 2px solid #F5C518 | 100%         | 0% (hidden)         |
| Active (typing) | #2B3139    | 2px solid #F5C518 | 100%         | 0%                  |

### Hot Search Rotation Logic

- **Keyword List**: Predefined array of 10 trending tokens
- **Rotation Interval**: 3500ms (3.5 seconds)
- **Transition**: Cross-fade (opacity 100% → 0% → 100%)
- **Duration**: 300ms fade
- **Easing**: ease-in-out
- **Keyword Format**: "[TOKEN] hot search" (e.g., "BTC hot search", "ETH hot search")
- **Priority**: Manual curation + algorithmic trending

---

## 3. Portfolio Summary Widget

### Layout Hierarchy

**Structure**:

```
[Est. Total Value Label] [Expand Arrow]
[₹15.29 Amount] [Add Funds Button]
[Today's PNL Label] [Amount] [Dropdown Arrow]
```

### Component Specifications

#### 3.1.1 Estimated Total Value Label

- **Text**: "Est. Total Value(INR)" (no space before parenthesis)
- **Font**: 14pt regular (SF Pro Display Regular) - NOT 12pt
- **Color**: #EAECEF (90% opacity, NOT #848E9C)
- **Letter Spacing**: 0.3px
- **Position**: 16px from left margin, 16px below search bar
- **Line Height**: 20px
- **Vertical Alignment**: Baseline at 12px from container top

#### 3.1.2 Expand Arrow (∧)

- **Position**: 8px right of label text (NOT 4px)
- **Dimensions**: 12x12px (NOT 10x10px)
- **Design**: Upward-pointing chevron
- **Line Weight**: 2px
- **Color**: #EAECEF (90% opacity white)
- **Rotation**: 0° (pointing up)
- **Animation**: Rotates 180° to ∨ when expanded (300ms ease)
- **Touch Target**: 24x24px

#### 3.1.3 Main Balance Display

- **Text**: "₹15.29"
- **Font**: 40pt bold (SF Pro Display Bold) - NOT 36pt
- **Color**: #FFFFFF (100% opacity white)
- **Position**: 16px from left, 8px below label
- **Character Breakdown**:
  - Rupee symbol (₹): Unicode U+20B9, width 28px
  - Integer part (15): width 56px
  - Decimal point (.): width 10px
  - Fractional part (29): width 56px
  - Total width: ~150px
- **Letter Spacing**: -0.5px (slight kerning for numbers)
- **Baseline**: Aligned at 40px from component top
- **Line Height**: 44px

#### 3.1.4 Add Funds Button

- **Container**:
  - Background: #F5C518 (RGB: 245, 197, 24 - Binance yellow)
  - Border Radius: 8px (uniform)
  - Height: 40px
  - Width: 120px (fixed)
  - Position: Right-aligned, 16px from right margin
  - Vertical Alignment: Center with balance amount
  - Elevation: 0px (flat)
  - Border: None
  - Shadow: rgba(245, 197, 24, 0.3), 4px blur, y-offset 2px

- **Text**:
  - Content: "Add Funds" (9 characters)
  - Font: 15pt medium (SF Pro Display Medium)
  - Color: #1E2329 (RGB: 30, 35, 41 - dark grey)
  - Letter Spacing: 0.5px
  - Horizontal Alignment: Center
  - Vertical Alignment: Center (baseline at 20px)
  - Line Height: 40px

- **Touch Feedback**:
  - Press state: Scale 0.96 (150ms ease-out)
  - Background darken: #D4A10A (10% darker)
  - Ripple effect: Yellow at 30% opacity
  - Haptic: Light impact (iOS) / 50ms vibration (Android)

#### 3.1.5 Today's PNL Section

**Label Component**:

- **Text**: "Today's PNL" (with dotted underline)
- **Font**: 14pt regular (SF Pro Display Regular) - NOT 12pt
- **Color**: #848E9C (60% opacity grey)
- **Position**: 16px from left, 12px below balance
- **Tooltip Underline**:
  - Style: Dotted line
  - Dot Size: 1px diameter
  - Dot Spacing: 2px gap
  - Color: #848E9C (same as text)
  - Position: 2px below text baseline
  - Length: Matches text width (~84px)
  - Trigger: Shows PNL calculation tooltip on hover/long-press

**Value Component (Negative State)**:

- **Text**: "-₹1.27 (-7.67%)"
- **Font**: 14pt medium (SF Pro Display Medium) - NOT 12pt
- **Color**: #F6465D (RGB: 246, 70, 93 - Binance red)
- **Position**: 8px right of label
- **Character Breakdown**:
  - Minus sign (−): Unicode U+2212, width 14px
  - Rupee symbol (₹): width 20px
  - Amount (1.27): width 56px
  - Space: 4px
  - Parentheses: width 18px total
  - Percentage (7.67%): width 60px
  - Total width: ~172px

**Dropdown Arrow (∨)**:

- **Position**: 4px right of percentage
- **Dimensions**: 10x10px
- **Design**: Downward-pointing chevron
- **Line Weight**: 2px
- **Color**: #F6465D (matches PNL value color)
- **Rotation**: 180° (pointing down)
- **Animation**: Rotates to ∧ when PNL details expanded (300ms ease)
- **Touch Target**: 24x24px
- **Interaction**: Expands PNL breakdown modal

### PNL Color States

| State           | Color Hex | RGB Values    | Usage             |
| --------------- | --------- | ------------- | ----------------- |
| Negative (Loss) | #F6465D   | 246, 70, 93   | -₹1.27 (-7.67%)   |
| Positive (Gain) | #0ECB81   | 14, 203, 129  | +₹124.47 (+0.85%) |
| Neutral         | #848E9C   | 132, 142, 156 | ₹0.00 (0.00%)     |

### PNL Expansion Modal (Triggered by Arrow)

**Container**:

- **Background**: #2B3139 (dark grey)
- **Border Radius**: 12px
- **Padding**: 16px
- **Margin**: 8px from PNL section
- **Shadow**: rgba(0, 0, 0, 0.4), 12px blur, y-offset 4px
- **Animation**: Slide down + fade in (250ms ease-out)

**Content**:

- **Realized PNL**: Label + Amount (green/red)
- **Unrealized PNL**: Label + Amount (green/red)
- **Fees Paid**: Label + Amount (grey)
- **Time Range**: Dropdown (1D, 1W, 1M, 1Y, ALL)

### Spacing Specifications

| Element          | Margin Top | Margin Bottom | Margin Left | Margin Right |
| ---------------- | ---------- | ------------- | ----------- | ------------ |
| Est. Value Label | 0px        | 8px           | 16px        | 0px          |
| Balance Amount   | 0px        | 12px          | 16px        | 0px          |
| Add Funds Button | 0px        | 12px          | 0px         | 16px         |
| PNL Label        | 0px        | 0px           | 16px        | 0px          |
| PNL Amount       | 0px        | 0px           | 8px         | 0px          |
| Dropdown Arrow   | 0px        | 0px           | 4px         | 0px          |

### Data Update Behavior

- **Balance**: Real-time WebSocket updates (≤100ms latency)
- **PNL**: Updates every 1 second during market hours
- **Currency**: Converts to user's selected fiat (INR shown)
- **Precision**: 2 decimal places for fiat, 8 for crypto
- **Animation**: Count-up/count-down (300ms) on value change

---

## 4. Interaction & Service Hub

## 4. Promotional Carousel

### Container Specifications

- **Background**: #2B3139 (RGB: 43, 49, 57 - NOT #1E2329)
- **Border Radius**: 12px (uniform)
- **Height**: 120px (fixed, NOT 100px)
- **Width**: Calculated as (Screen Width - 32px) for 16px margins
- **Margin**: 16px horizontal, 12px top (below portfolio)
- **Padding**: 16px internal on all sides
- **Border**: None
- **Shadow**: rgba(0, 0, 0, 0.2), 8px blur, y-offset 2px

### Content Hierarchy

```
[BTC BUTTON IS BACK Header] [Close ×]
[Bitcoin Icon] [Win 1 BTC Text] [Join Button]
[Pagination Dots]
```

### Component Breakdown

#### 4.1.1 Promotional Header

- **Text**: "BTC BUTTON IS BACK"
- **Font**: 12pt all-caps regular (SF Pro Display Regular)
- **Color**: #848E9C (RGB: 132, 142, 156, 70% opacity)
- **Letter Spacing**: 1px (increased for all-caps)
- **Position**: 16px from top, 16px from left
- **Line Height**: 20px
- **Text Transform**: Uppercase (CSS: uppercase)

#### 4.1.2 Close Button (×)

- **Position**: Top-right corner (16px from top, 16px from right)
- **Dimensions**: 16x16px
- **Design**: Multiplication sign (X)
- **Line Weight**: 2px
- **Color**: #848E9C (50% opacity)
- **Angle**: 45°交叉 lines
- **Line Length**: 12px each
- **Touch Target**: 32x32px
- **Interaction**: Dismisses carousel with fade-out (200ms)
- **Hover State**: Opacity 100%, cursor pointer

#### 4.1.3 Bitcoin Icon

- **Container Shape**: Regular octagon (8 equal sides)
- **Dimensions**: 48x48px (flat to flat) - NOT 40x40px
- **Border**:
  - Stroke: 2.5px (NOT 2px)
  - Color: #FFFFFF (100% opacity)
  - Line join: Miter (sharp corners)
- **Background**: Transparent (shows card background)
- **Inner Symbol**: Bitcoin letter (₿)
  - Unicode: U+20BF
  - Color: #F5C518 (yellow)
  - Font Size: 28pt bold (NOT 24pt)
  - Vertical alignment: Center
  - Horizontal alignment: Center
- **Position**: 16px from left, 32px from top
- **Rotation**: 0° (flat orientation, not tilted)

#### 4.1.4 "Win 1 BTC" Text

- **Content**: "Win 1 BTC" (9 characters including spaces)
- **Font**: 18pt bold (SF Pro Display Bold) - NOT 16pt
- **Color**: #EAECEF (90% opacity, NOT pure white)
- **Letter Spacing**: 0.3px
- **Position**: 12px right of Bitcoin icon
- **Vertical Alignment**: Center with icon (baseline at 20px)
- **Line Height**: 24px
- **Width**: ~120px

#### 4.1.5 "Join" Button

- **Container**:
  - Background: #474D57 (RGB: 71, 77, 87 - medium grey, NOT #2B3139)
  - Border Radius: 6px
  - Height: 32px
  - Width: 70px (fixed)
  - Position: Right-aligned (16px from right edge)
  - Vertical Alignment: Center with content row
  - Elevation: 0px
  - Border: None
  - Shadow: rgba(0, 0, 0, 0.2), 4px blur, y-offset 2px

- **Text**:
  - Content: "Join" (4 characters)
  - Font: 14pt medium (SF Pro Display Medium)
  - Color\*\*: #EAECEF (90% opacity, NOT pure white)
  - Letter Spacing\*\*: 0.5px
  - Horizontal Alignment: Center
  - Vertical Alignment: Center (baseline at 18px)

- **Touch Feedback**:
  - Press state: Scale 0.96 (100ms ease)
  - Background lighten: #5E6670 (15% lighter)
  - Haptic: Light impact

### Pagination Indicator

#### 4.2.1 Dot Navigation

- **Total Dots**: 4 dots (indicating 4 carousel slides)
- **Arrangement**: Horizontal row
- **Position**: Centered horizontally, 12px from bottom edge
- **Spacing**: 6px gap between dots

#### 4.2.2 Active Dot (First Position)

- **Shape**: Perfect circle
- **Diameter**: 8px
- **Color**: #FFFFFF (100% opacity)
- **Position**: Leftmost in sequence
- **Animation**: Pulse (scale 1.0 → 1.1 → 1.0, 2s loop)

#### 4.2.3 Inactive Dots (Positions 2, 3, 4)

- **Shape**: Perfect circle
- **Diameter**: 8px
- **Color**: #848E9C (RGB: 132, 142, 156, 50% opacity)
- **Position**: Sequential right of active dot
- **Hover State**: Color brightens to #FFFFFF at 70% opacity

### Carousel Animation Behavior

- **Auto-Scroll**: Enabled
- **Interval**: 5000ms (5 seconds per slide)
- **Transition Type**: Slide with fade
- **Duration**: 400ms
- **Easing**: cubic-bezier(0.4, 0.0, 0.2, 1)
- **Snap**: Center alignment
- **Loop**: Infinite (wraps from last to first)
- **Pause on Hover**: Yes (desktop/tablet)
- **Manual Swipe**: Enabled (touch drag)

### Carousel Content Slides (Example)

**Slide 1**: BTC Button Promotion (current)

- Title: "BTC BUTTON IS BACK"
- CTA: "Win 1 BTC"
- Icon: Bitcoin octagon

**Slide 2**: Trading Competition

- Title: "Trade to Win"
- CTA: "Join Now"
- Icon: Trophy

**Slide 3**: Staking Rewards

- Title: "Earn Up to 12% APY"
- CTA: "Stake Now"
- Icon: Piggy bank

**Slide 4**: New Listing

- Title: "New Token Listed"
- CTA: "Trade Now"
- Icon: Rocket

### Swipe Gesture Detection

- **Threshold**: 50px horizontal drag
- **Velocity**: >100px/s for fling
- **Prevent Scroll**: Horizontal swipe within carousel bounds
- **Edge Swipe**: Allows back/forward navigation at screen edges

### Accessibility

- **Screen Reader**: "Promotional banner, slide 1 of 4. BTC BUTTON IS BACK. Double tap to join."
- **Focus Order**: Header → Icon → Text → Button → Pagination
- **Keyboard**: Tab through elements, Enter to activate button
- **Reduced Motion**: Disables auto-scroll if prefers-reduced-motion set

## 5. Market Overview Cards

### Grid Layout System

**Structure**: 2×2 grid (2 columns, 2 rows visible)

#### Container Specifications

- **Grid Type**: CSS Grid / Flexbox wrap
- **Columns**: 2 equal columns
- **Rows**: Auto-height
- **Gap**: 12px (both horizontal and vertical)
- **Margin**: 16px horizontal
- **Padding**: 0px (cards have internal padding)

#### Card Specifications (All Cards)

- **Width**: `calc(50% - 22px)` ≈ 166px on 375px screens (fluid, not fixed 168px — avoids grid overflow on narrow devices)
- **Height**: ~148px (confirmed from screenshots — earlier spec value of 160px was an overestimate)
- **Background**: #2B3139 (RGB: 43, 49, 57 - NOT #1E2329)
- **Border Radius**: 12px (uniform)
- **Padding**: 16px internal on all sides
- **Border**: None
- **Shadow**: rgba(0, 0, 0, 0.15), 4px blur, y-offset 2px
- **Elevation**: 2dp (Material Design)

### Card 1: BNB (Binance Coin)

#### Header Row

**BNB Token Icon**:

- **Shape**: Circle
- **Diameter**: 36px (NOT 32px)
- **Background**: #F5C518 (Binance yellow)
- **Inner Logo**: Binance diamond logo (flat, NOT isometric cube)
  - Design: Flat diamond/rhombus shape — the standard Binance wordmark diamond
  - Logo size: 22x22px
  - Logo color: #1E2329 (dark grey on yellow background)
  - Style: Flat 2D, no 3D perspective or cube faces
  - > ⚠️ **Correction**: Earlier versions incorrectly described this as an "isometric cube". Screenshots confirm it is a **flat Binance diamond logo** inside a yellow circle.
- **Position**: Top-left corner (16px from left, 16px from top)
- **Border**: None (flat design)

**Token Symbol**:

- **Text**: "BNB"
- **Font**: 16pt medium (SF Pro Display Medium)
- **Color**: #848E9C (RGB: 132, 142, 156, 60% opacity)
- **Letter Spacing**: 0.5px
- **Position**: 12px right of icon (NOT 8px)
- **Vertical Alignment**: Center with icon (baseline at 20px)
- **Text Transform**: Uppercase

#### Price Display

- **Text**: "610.53"
- **Font**: 28pt bold (SF Pro Display Bold) - NOT 24pt
- **Color**: #EAECEF (90% opacity, NOT pure white)
- **Position**: 16px from left, 8px below header row
- **Character Widths**:
  - "610": 84px
  - ".": 10px
  - "53": 56px
  - Total: ~150px
- **Letter Spacing**: -0.5px (tight kerning for numbers)
- **Baseline**: 32px from component top
- **Line Height**: 32px

#### Percentage Change (Negative State)

**Down Arrow (▼)**:

- **Shape**: Equilateral triangle (pointing down)
- **Size**: 10x10px (NOT 8x8px)
- **Color**: #F6465D (Binance red)
- **Position**: Left of percentage value
- **Vertical Alignment**: Center with text baseline
- **Fill**: Solid (no stroke)

**Percentage Text**:

- **Content**: "1.64%"
- **Font**: 14pt medium (SF Pro Display Medium)
- **Color**: #F6465D (RGB: 246, 70, 93)
- **Position**: 6px right of arrow (NOT 4px)
- **Letter Spacing**: 0px
- **Decimal Precision**: 2 decimal places

#### Sparkline Chart (Mini Area Chart)

**Container**:

- **Width**: 140px (card width - 32px padding)
- **Height**: 50px
- **Position**: 12px below percentage, 16px from left
- **Background**: Transparent

**Chart Design**:

- **Type**: Area chart with gradient fill
- **Line Color**: #F6465D (red, 2px stroke)
- **Fill Gradient**:
  - Top (0%): rgba(246, 70, 93, 0.3)
  - Bottom (100%): rgba(246, 70, 93, 0) (transparent)
- **Gradient Direction**: Vertical (top to bottom)
- **Pattern**: 5 peaks, overall downward trend
- **Data Points**: ~12 points (hourly for 12h)

**Line Path** (approximate coordinates):

```
Start: (0, 35)
Peak1: (20, 25)
Valley1: (35, 40)
Peak2: (50, 20) ← Highest point
Valley2: (70, 45)
Peak3: (90, 30)
Valley3: (110, 48) ← Lowest point
End: (140, 42)
```

**Grid**: None (minimalist design)
**Axis**: None (price/time not shown)
**Baseline**: Bottom-aligned (y=50)

### Card 2: SOL (Solana)

#### Header Row

**SOL Token Icon**:

- **Shape**: Circle
- **Diameter**: 36px (consistent with BNB)
- **Background**: #0B0E11 (pure black, NOT #000000)
- **Inner Logo**: SOLANA gradient symbol
  - Design: 3 stacked **rounded bars** (NOT sharp parallelograms — bars have rounded end-caps, forming a stylised "S" silhouette)
  - Gradient (top-to-bottom, diagonal):
    - Top bar: #00D4FF (cyan)
    - Middle bar: #9945FF (purple)
    - Bottom bar: #00FFA3 (green)
  - Bar dimensions: ~24x5px each, end-caps rounded (border-radius on bar ends)
  - Spacing: 2px between bars
  - Rotation: −20° (tilted left, all 3 bars parallel)
  - > ⚠️ **Correction**: Earlier spec described bars as "parallelograms" (sharp corners). Screenshots confirm they are **rounded-end bars**.
- **Position**: Top-left (16px from left, 16px from top)

**Token Symbol**:

- **Text**: "SOL"
- **Font**: 16pt medium
- **Color**: #848E9C
- **Position**: 8px right of icon
- **Text Transform**: Uppercase

#### Price Display

- **Text**: "81.00"
- **Font**: 28pt bold (SF Pro Display Bold) - consistent with BNB
- **Color**: #EAECEF (90% opacity)
- **Position**: 16px from left, 8px below header

#### Percentage Change (Negative State)

**Down Arrow (▼)**:

- **Size**: 8x8px
- **Color**: #F6465D

**Percentage Text**:

- **Content**: "2.59%"
- **Font**: 14pt medium
- **Color**: #F6465D

#### Sparkline Chart

**Specifications**:

- **Type**: Area chart with gradient
- **Line Color**: #F6465D (red, 2px stroke)
- **Fill**: Same gradient as BNB card
- **Pattern**: 7 peaks, volatile downward trend
- **Data Points**: ~12 points

**Line Path Characteristics**:

- More jagged than BNB (higher volatility)
- Steeper decline on right side
- Starting Y: ~30px from top
- Ending Y: ~45px from top
- Peak-to-valley range: 25px (high volatility indicator)

### Card 3: P2P Orders (Action Card)

#### Container

- **Background**: #2B3139 (RGB: 43, 49, 57 - NOT #1E2329)
- **Border Radius**: 12px
- **Height**: 180px (taller than market cards, NOT 160px)
- **Width**: 168px (consistent with market cards)

#### Title Row

**Text**:

- **Content**: "P2P Orders"
- **Font**: 14pt medium
- **Color**: #EAECEF (RGB: 234, 236, 239, 90% opacity)
- **Position**: 16px from top, 16px from left
- **Letter Spacing**: 0.3px

**Chevron (›)**:

- **Position**: Right-aligned (16px from right)
- **Size**: 16x16px
- **Color**: #848E9C (50% opacity)
- **Rotation**: 90° clockwise (pointing right)
- **Line Weight**: 2px
- **Touch Target**: 48x48px card area

#### Subtitle

- **Text**: "Buy/Sell Crypto with INR"
- **Font**: 12pt regular
- **Color**: #848E9C (60% opacity)
- **Position**: 8px below title
- **Line Height**: 18px

#### Icon Buttons (2-Column Grid)

**Layout**:

- **Columns**: 2 equal columns
- **Gap**: 8px
- **Margin Top**: 16px
- **Horizontal Alignment**: Centered in card

**Left Icon - P2P**:

- **Icon Design**: Two user profiles with exchange arrows
  - User 1: Left silhouette (outline, 16px height)
  - User 2: Right silhouette (outline, 16px height)
  - Arrows: Circular arrows between users (clockwise)
  - Arrow size: 12x12px
  - Line weight: 2px
  - Color: #FFFFFF
- **Container Size**: 32x32px
- **Label**: "P2P" (12pt, white, below icon)
- **Touch Target**: 48x48px

**Right Icon - Find Offer**:

- **Icon Design**: Magnifying glass
  - Circle: 20px diameter, 2px stroke
  - Handle: 12px length, 45° angle
  - Color: #FFFFFF
- **Container Size**: 32x32px
- **Label**: "Find Offer" (12pt, white, below icon)
- **Text Wrapping**: Two lines if needed

### Card 4: Send Cash (Action Card)

#### Container

- **Background**: #2B3139 (RGB: 43, 49, 57)
- **Border Radius**: 12px
- **Height**: 180px (consistent with P2P card)
- **Width**: 168px

#### Title Row

- **Text**: "Send Cash"
- **Font**: 14pt medium
- **Color**: #EAECEF (90% opacity, NOT pure white)
- **Chevron**: Same as P2P card (right-aligned)

#### Subtitle

- **Text**: "Send Crypto and Receive Fiat"
- **Font**: 12pt regular
- **Color**: #848E9C (60% opacity)
- **Line Height**: 18px
- **Line Spacing**: 4px
- **Lines**: 2 lines (wraps after "and")

#### Reference Rate Display

**Label**:

- **Text**: "Ref.Rate"
- **Font**: 11pt regular
- **Color**: #848E9C
- **Position**: Left-aligned

**Rate Value**:

- **Text**: "₹101.16"
- **Font**: 18pt bold
- **Color**: #FFFFFF
- **Position**: 4px below label

**Currency Pair**:

- **Text**: "USDT/INR"
- **Font**: 11pt regular
- **Color**: #848E9C
- **Position**: 4px below rate

#### Mini Chart (Line Chart)

**Specifications**:

- **Type**: Line chart (no fill)
- **Width**: 60px
- **Height**: 40px
- **Position**: Right side of card
- **Line Color**: #0ECB81 (RGB: 14, 203, 129 - green)
- **Line Weight**: 2px
- **Pattern**: Upward trend (3 peaks)
- **Data Points**: ~8 points

**Line Path**:

```
Start: (0, 35)
Peak1: (15, 25)
Valley: (30, 30)
Peak2: (45, 15) ← Highest
End: (60, 20)
```

**Trend**: Bullish (green for positive movement)

### Color States for Market Cards

| State   | Price Color | Change Color (Positive)   | Change Color (Negative)   |
| ------- | ----------- | ------------------------- | ------------------------- |
| Default | #FFFFFF     | #0ECB81 (Green)           | #F6465D (Red)             |
| Hover   | #FFFFFF     | #14E795 (+10% brightness) | #FF5A6F (+10% brightness) |
| Pressed | #EAECEF     | #0ECB81                   | #F6465D                   |

### Data Update Behavior

- **Price Refresh**: Every 1 second during market hours
- **Change Calculation**: ((Current - Open) / Open) × 100
- **Sparkline Data**: 12-hour historical (12 data points)
- **Animation**: Smooth transition (200ms ease) on value change
- **Flash Effect**:
  - Green flash (0.3s) on price increase
  - Red flash (0.3s) on price decrease

### Touch Interactions

- **Card Tap**: Navigates to detailed token page
- **Icon Tap**: No action (visual only)
- **Long Press**: Shows quick stats tooltip (24h high/low, volume)
- **Swipe**: Horizontal swipe to see more tokens (carousel behavior)

### Responsive Behavior

- **Portrait**: 2-column grid (as shown)
- **Landscape**: 4-column grid (all 4 cards in one row)
- **Tablet**: 3-column grid with larger cards
- **Minimum Width**: 320px (cards stack to 1 column)

## 6. Quick Service Cards

### Layout Structure

**Position**: Below market overview cards  
**Grid**: 2-column layout (same as market cards)  
**Height**: 160px per card (taller for action buttons)  
**Gap**: 12px between cards  
**Margin**: 16px horizontal

### Card 1: P2P Orders

#### Container Specifications

- **Background**: #1E2329 (RGB: 30, 35, 41)
- **Border Radius**: 12px
- **Width**: 170px
- **Height**: 160px
- **Padding**: 16px internal
- **Border**: None
- **Shadow**: rgba(0, 0, 0, 0.15), 4px blur, y-offset 2px

#### Title Section

**Text**:

- **Content**: "P2P Orders"
- **Font**: 14pt medium (SF Pro Display Medium)
- **Color**: #EAECEF (RGB: 234, 236, 239, 90% opacity)
- **Position**: 16px from top, 16px from left
- **Letter Spacing**: 0.3px
- **Line Height**: 20px

**Navigation Chevron (›)**:

- **Position**: Top-right (16px from right, 16px from top)
- **Dimensions**: 16x16px
- **Design**: Right-pointing angle bracket
- **Line Weight**: 2px
- **Color**: #848E9C (50% opacity)
- **Rotation**: 90° clockwise
- **Touch Target**: Full card area (170x160px)

#### Subtitle Section

- **Text**: "Buy/Sell Crypto with INR"
- **Font**: 12pt regular (SF Pro Display Regular)
- **Color**: #848E9C (60% opacity)
- **Position**: 8px below title
- **Line Height**: 18px
- **Letter Spacing**: 0.2px

#### Action Icons Grid

**Layout**:

- **Type**: 2-column grid within card
- **Gap**: 8px horizontal
- **Margin Top**: 20px (below subtitle)
- **Alignment**: Centered horizontally

**Left Action - P2P Icon**:

- **Icon Design**: Peer-to-peer exchange symbol
  - Left User: Simplified silhouette (16px height)
    - Head: Circle (6px diameter)
    - Body: Rounded rectangle (10x8px)
    - Outline only (2px stroke)
  - Right User: Mirror of left user
  - Exchange Arrows: Two curved arrows forming circle
    - Top arrow: Clockwise, 12px arc
    - Bottom arrow: Counter-clockwise, 12px arc
    - Arrow heads: Filled triangles (4px)
  - Total icon size: 32x32px
  - Color: #FFFFFF (100% opacity)
  - Line weight: 2px uniform
- **Label**:
  - Text: "P2P"
  - Font: 12pt regular
  - Color: #FFFFFF
  - Position: 4px below icon
  - Letter spacing: 0.5px

- **Touch Target**: 48x48px (icon + padding)
- **Interaction**: Navigates to P2P trading interface

**Right Action - Find Offer Icon**:

- **Icon Design**: Magnifying glass (search)
  - Lens Circle: 20px diameter
    - Stroke: 2px
    - Fill: Transparent
  - Handle: Straight line (12px length)
    - Angle: 45° (bottom-right)
    - Stroke: 2px
    - End cap: Rounded
  - Total size: 32x32px
  - Color: #FFFFFF
- **Label**:
  - Text: "Find Offer"
  - Font: 12pt regular
  - Color: #FFFFFF
  - Position: 4px below icon
  - Text wrapping: Single line (no wrap)

- **Touch Target**: 48x48px
- **Interaction**: Opens P2P offer search/filter interface

### Card 2: Send Cash

#### Container Specifications

- Identical to P2P Orders card
- **Background**: #1E2329
- **Dimensions**: 170x160px
- **Padding**: 16px

#### Title Section

- **Text**: "Send Cash"
- **Font**: 14pt medium
- **Color**: #EAECEF
- **Chevron**: Same as P2P card (top-right)

#### Subtitle Section

- **Text**: "Send Crypto and Receive Fiat"
- **Font**: 12pt regular
- **Color**: #848E9C
- **Position**: 8px below title
- **Line Height**: 18px
- **Text Wrapping**: 2 lines
  - Line 1: "Send Crypto and"
  - Line 2: "Receive Fiat"
- **Line Spacing**: 4px

#### Reference Rate Section

**Label**:

- **Text**: "Ref.Rate"
- **Font**: 11pt regular
- **Color**: #848E9C
- **Position**: 24px below subtitle (increased margin)
- **Letter Spacing**: 0.2px

**Rate Value**:

- **Text**: "₹101.16"
- **Font**: 18pt bold (SF Pro Display Bold)
- **Color**: #FFFFFF
- **Position**: 4px below label
- **Rupee Symbol**: ₹ (Unicode U+20B9)
- **Decimal Precision**: 2 places

**Currency Pair**:

- **Text**: "USDT/INR"
- **Font**: 11pt regular
- **Color**: #848E9C
- **Position**: 4px below rate value
- **Text Transform**: Uppercase

#### Mini Chart (Sparkline)

**Container**:

- **Position**: Right side of rate section
- **Width**: 60px
- **Height**: 40px
- **Alignment**: Bottom-aligned with rate text

**Chart Specifications**:

- **Type**: Line chart (stroke only, no fill)
- **Data Points**: 8 points (hourly intervals)
- **Line Color**: #0ECB81 (RGB: 14, 203, 129 - green)
- **Line Weight**: 2px
- **End Caps**: Rounded
- **Pattern**: Upward trend (bullish)

**Coordinate Path** (approximate):

```
Point 1: (0, 35)   - Start
Point 2: (8, 32)   - Small rise
Point 3: (16, 34)  - Minor dip
Point 4: (24, 28)  - Rise
Point 5: (32, 25)  - Continue rise
Point 6: (40, 27)  - Small correction
Point 7: (48, 18)  - Sharp rise
Point 8: (60, 20)  - End high
```

**Trend Indicator**:

- Overall direction: Upward (+15% from start to end)
- Volatility: Low (smooth curve)
- Color meaning: Green = positive rate movement

### Interaction States

| State   | Card Background              | Icon Opacity | Title Color |
| ------- | ---------------------------- | ------------ | ----------- |
| Default | #1E2329                      | 100%         | #EAECEF     |
| Hover   | #2B3139                      | 100%         | #FFFFFF     |
| Pressed | #474D57                      | 80%          | #EAECEF     |
| Focus   | #2B3139 + 2px #F5C518 border | 100%         | #FFFFFF     |

### Touch Feedback

- **Tap Animation**: Scale 0.98 (100ms ease-out)
- **Ripple Effect**: #F5C518 at 20% opacity from touch point
- **Haptic Feedback**: Light impact (iOS) / 30ms vibration (Android)
- **Navigation**: Slide transition from right (300ms)

### Accessibility

- **Screen Reader**: "P2P Orders. Buy/Sell Crypto with INR. Double tap to open."
- **Focus Order**: Title → Icon 1 → Icon 2 (tab order)
- **Minimum Touch Size**: 48x48px per WCAG guidelines
- **Contrast Ratio**: 4.5:1 minimum (AA compliant)

### Responsive Behavior

- **Portrait**: 2-column grid (side by side)
- **Landscape**: 2-column grid (same layout)
- **Tablet**: Cards scale to 200px width
- **Small Screens** (<360px): Stack to 1 column

### Click/Tap Actions

**P2P Orders Card**:

- **Main Card Tap**: Navigate to P2P marketplace
- **P2P Icon Tap**: Quick buy/sell toggle
- **Find Offer Tap**: Open advanced search filters

**Send Cash Card**:

- **Main Card Tap**: Navigate to send/receive interface
- **Ref.Rate Tap**: Show rate history chart modal
- **Mini Chart Tap**: Expand to full-screen chart

### Data Source

- **P2P Orders**: Real-time P2P marketplace data
- **Ref.Rate**: Aggregated from multiple OTC desks
- **Update Frequency**: Every 5 seconds
- **Chart Data**: Last 8 hours of rate history

---

## 7. Content Tab Navigation (8-Tab System)

### Tab Bar Container

**Position**: Fixed above bottom navigation  
**Height**: 44px  
**Background**: Transparent (inherits page background #181A20)  
**Top Border**: 1px solid #2B3139 (subtle divider, 20% opacity)  
**Bottom Border**: None  
**Margin**: 0px horizontal (full width)  
**Padding**: 0px vertical

### Scroll Behavior

- **Type**: Horizontal scrollable
- **Scroll Indicator**: Hidden (no scrollbar)
- **Snap Points**: None (free scroll)
- **Bounce**: Enabled on iOS (rubber band effect)
- **Overscroll**: 20px max
- **Momentum**: Enabled (continues after swipe)

### Tab Specifications (All Tabs)

**Default State**:

- **Font**: 15pt regular (SF Pro Display Regular)
- **Color**: #848E9C (RGB: 132, 142, 156, 60% opacity)
- **Letter Spacing**: 0.3px
- **Horizontal Padding**: 16px per side
- **Vertical Alignment**: Center (line-height 44px)
- **Touch Target**: 48x44px (width × height)

**Active State**:

- **Font**: 15pt medium (weight increases)
- **Color**: #FFFFFF (100% opacity)
- **Active Indicator**: Yellow underline
  - Color: #F5C518
  - Height: 3px
  - Width: 40px (extends 5px beyond text each side)
  - Border Radius: 2px (rounded ends)
  - Position: 6px below text baseline
  - Animation: Slide from previous tab (300ms ease-out)

**Hover State** (desktop/tablet):

- **Color**: #EAECEF (80% opacity)
- **Background**: rgba(255, 255, 255, 0.05)
- **Transition**: 200ms ease

**Pressed State**:

- **Color**: #FFFFFF
- **Background**: rgba(255, 255, 255, 0.1)
- **Scale**: 0.96

### Tab List (Left to Right)

#### Tab 1: Discover (Active State)

- **Text**: "Discover"
- **Character Count**: 8 characters
- **Width**: ~80px (including padding)
- **Position**: Leftmost tab
- **State**: Active (yellow underline)
- **Indicator Animation**: Fade in from left (300ms)

#### Tab 2: Following

- **Text**: "Following"
- **Character Count**: 9 characters
- **Width**: ~88px
- **Position**: 0px right of Discover (no gap)
- **State**: Inactive (grey text)

#### Tab 3: Campaign

- **Text**: "Campaign"
- **Character Count**: 10 characters
- **Width**: ~96px
- **State**: Inactive

#### Tab 4: Announcements (Partial Visibility)

- **Text**: "Anno..." (truncated by screen edge)
- **Visible Characters**: "Anno" (4 of 13)
- **Full Width**: ~120px
- **State**: Inactive
- **Truncation**: Ellipsis (...) at 60% opacity

#### Expand Arrow (Right Edge)

- **Icon**: Upward chevron (∧)
- **Position**: 16px from right edge, vertically centered
- **Dimensions**: 16x16px
- **Color**: #FFFFFF (100% opacity)
- **Line Weight**: 2px
- **Touch Target**: 48x48px
- **Interaction**: Expands full tab list modal (slides up from bottom)
- **Animation**: Rotates 180° to ∨ when expanded (300ms ease)

### Expand Modal (Triggered by Arrow)

**Container**:

- **Background**: #2B3139 (dark grey)
- **Height**: 200px (slides up)
- **Border Radius**: 16px 16px 0px 0px (top only)
- **Shadow**: rgba(0, 0, 0, 0.5), 16px blur, y-offset -4px
- **Animation**: Slide up + fade in (300ms ease-out)

**Content**:

- **Tab Grid**: 2 rows × 4 columns
- **All 8 Tabs Visible**: Discover, Following, Campaign, Announcements, Live, News, Academy, Hot
- **Selected Tab Highlight**: Yellow background at 20% opacity
- **Close Handle**: Horizontal bar at top (40px width, 4px height)

### Tab Switching Behavior

**On Tap**:

1. Previous tab: Text fades to #848E9C, indicator disappears
2. New tab: Text brightens to #FFFFFF, indicator slides underneath
3. Content: Previous tab fades out (200ms), new tab fades in (200ms)
4. Scroll: Auto-scroll to center active tab if partially visible

**Scroll Position Preservation**:

- Each tab maintains its own scroll position
- Switching tabs preserves vertical scroll offset
- Returning to tab restores previous position

### Tab Content Areas (Preview)

**Discover Tab** (Tab 1):

- Social feed with trending posts
- Creator content
- Algorithmic recommendations

### Tab 2: Following (Active State)

#### 7.2.1 Stories Carousel (Top Row)

- **Container**:
  - Height: ~100px
  - Padding: 16px horizontal, 16px top, 8px bottom
  - Layout: Horizontal scrollable row (hide scrollbar)
  - Gap between items: 16px
- **Story Item (User)**:
  - Layout: Flex column (Avatar + Label)
  - Avatar:
    - Dimensions: 56x56px perfect circle
    - Image: Profile picture (e.g. White circle with red/green candlestick chart graphic)
    - Border: 2px solid transparent (none for viewed, colored for unviewed)
  - Label:
    - Text: "HEY NIROB" (11pt medium, uppercase)
    - Color: #EAECEF
    - Margin Top: 8px
    - Truncation: Ellipsis if > 12 characters (max-width: 64px)
    - Alignment: Center
- **Story Item (System/Action)**:
  - Avatar Background: #2B3139 (dark grey)
  - Icon: Three horizontal dots (...)
    - Size: 24x24px
    - Color: #848E9C
  - Label:
    - Text: "Following" (11pt regular, #EAECEF)

#### 7.2.2 Recommended Dropdown Area

- **Container**:
  - Height: 40px
  - Padding: 0px 16px
  - Layout: Flex row, center-aligned vertically
  - Divider: 1px solid #2B3139 (bottom)
- **Content**:
  - Text: "Recommended" (13pt medium)
  - Color: #EAECEF
  - Icon: Downward chevron (v) 12x12px, #848E9C, 4px left margin
  - Interaction: Tap to open bottom sheet with suggested creators

#### 7.2.3 Feed Card Layout (Social Post)

- **Background**: Transparent or #181A20 (blends with page background, no distinct card border)
- **Padding**: 16px horizontal, 16px top
- **Divider**: None visible between posts

#### 7.2.4 Feed Post Header

- **Layout**: Flex row (Avatar on left, Details stack on right)
- **Avatar**:
  - Dimensions: 40x40px perfect circle
  - Gap: 12px right margin
- **Creator Details Stack** (confirmed from Discover tab screenshots):
  - **Row 1 — Username + Verified Badge**:
    - Username text: e.g. `Crypto Eagles` (15pt bold, #EAECEF)
    - **Verified Badge**: Yellow shield/checkmark icon immediately right of username
      - Color: #F5C518 (Binance yellow)
      - Size: 16x16px
      - Style: Filled yellow checkmark badge
  - **Row 2 — Follower Count**:
    - Text: e.g. `119.2K followers` (13pt regular, #848E9C)
    - Format: `[count] followers` — count abbreviated (K = thousands, M = millions)
    - Field: `follower_count`, `follower_count_formatted`
    - > ⚠️ **Previously missing from spec.** Confirmed visible in screenshots.
  - **Row 3 — Timestamp**:
    - Text: e.g. `• Feb 21` or `• 2h ago` (13pt regular, #848E9C)
    - Relative for recent posts, absolute date for older
- **Top-Right**: Three dots menu (`...`) / dismiss button — 16x16px, #474D57

#### 7.2.5 Feed Post Body

- **Text Content**:
  - Font: 15pt regular (SF Pro Display)
  - Color: #EAECEF
  - Line Height: 24px
  - Margin Top: 12px
- **Content Truncation** (confirmed from Discover screenshots):
  - Posts longer than 4–5 lines are truncated with `...`
  - A `See more` or inline `...` continuation label appears at truncation point
  - Field: `content_truncation_enabled: true`, `max_visible_lines: 4`
  - > ⚠️ **Previously missing from spec.**

#### 7.2.6 Image Attachment (Media Grid Component)

- **Layout**: Full-width rounded rectangle below text.
- **Dimensions**:
  - Width: ~200px (partial view, cropped right edge)
  - Height: ~250px (portrait ratio ~4:5)
  - Border Radius: 12px
  - Margin Top: 12px
- **Background Loading State**: #2B3139 solid grey box while image fetches.

### Tab 3: Campaign (Active State)

#### 7.3.1 Hero Section (CreatorPad)

- **Container**:
  - Background: #1E2329 (RGB: 30, 35, 41)
  - Border: 1px solid rgba(245, 197, 24, 0.3) (Subtle gold outer rim indicating premium campaign nature)
  - Border Radius: 16px
  - Margin: 16px 16px 0px 16px (matches width of screen minus padding)
  - Padding: 20px 20px 24px 20px
  - Top-Left Badge: "Hot" (10pt, #F5C518 gold text, positioned absolutely or shifted slightly up overlapping the border).
- **Hero Text**:
  - Title: "CreatorPad"
    - Font: 22pt Bold (SF Pro Display)
    - Color: #EAECEF
    - Tracking: -0.5px
    - Margin Bottom: 8px
  - Subtitle: "Unlock more rewards"
    - Font: 15pt Regular
    - Color: #EAECEF (90% opacity white)
- **Hero Image (Right)**:
  - Position: Absolute right (x=24px from right edge, vertically center-aligned with text).
  - Subject: 3D rendered gift box with gold ribbon and stacked gold coins.
  - Dimensions: ~72x72px.

#### 7.3.2 Ongoing Events Card (Project Campaigns)

- **Container**:
  - Background: #2B3139 (Lighter contrasting grey standing out from #1E2329 parent container)
  - Border Radius: 12px
  - Margin Top: 24px (below CreatorPad intro)
  - Padding: 16px
- **Header**:
  - Layout: Flex row.
  - Icon: Grid/Campaign icon (16x16px, #EAECEF).
  - Title: "Project Campaigns" (16pt Semi-bold, #EAECEF, 8px left margin from icon).
- **Meta Info**:
  - Text: "3 ongoing events" (13pt Regular, #848E9C)
  - Margin Top: 12px
- **Project Avatars Stack**:
  - Layout: Flex row, elements overlap each other (margin-left: -8px for 2nd and 3rd icons).
  - Avatars: 3 circular icons, each 24x24px.
  - Border: 2px solid #2B3139 (match background to create negative space cutout effect).
  - Avatar 1: Crypto project logo (e.g. rainbow circle on dark background).
  - Avatar 2 & 3: Greyed out circles indicating distinct projects.
- **Action Button (JOIN)**:
  - Background: #F5C518 (Binance yellow gradient #FCD535 to #F0B90B)
  - Width: 100% (Block level)
  - Height: 48px
  - Border Radius: 8px
  - Margin Top: 16px
  - Text: "JOIN" (15pt Medium, #1E2329 Dark grey/black).
  - Interaction: Ripple effect #DAB317 on press.

#### 7.3.3 Secondary Action Card (Project Leaderboard)

- **Container**:
  - Background: #2B3139
  - Border Radius: 12px
  - Margin Top: 12px
  - Padding: 16px
  - Layout: Flex Column, extending off the bottom edge of the viewport.
- **Header**:
  - Layout: Flex row.
  - Icon: Podium/Ranking icon (16x16px, #EAECEF).
  - Title: "Project Leaderboard" (16pt Semi-bold, #EAECEF, 8px left margin from icon).
- **Sub-text**:
  - Text: "Participate, Rank & Earn Airdrop"
  - Font: 13pt Regular
  - Color: #848E9C
  - Margin Top: 8px

#### 7.3.4 Global Floating Action Button (FAB)

- **Position**: Fixed to viewport bottom-right, over campaign cards.
- **Dimensions & Style**: Identical to FAB documented in Tab 1 (56x56px circle, Binance yellow gradient, #1E2329 '+' icon, specific drop shadow).

### Tab 4: Announcements (Active State)

#### 7.4.1 Sub-Navigation Filter Pills

- **Container Area**:
  - Layout: Horizontal scrollable row.
  - Padding: 12px 16px.
  - Gap between pills: 12px.
  - Hide scrollbar.
- **Pill Item (Active State - "All")**:
  - Background: #2B3139 (Dark grey)
  - Border Radius: 8px
  - Padding: 6px 12px
  - Font: 14pt Medium (SF Pro Display)
  - Color: #EAECEF
- **Pill Item (Inactive States - e.g. "New Cryptocurrency Listing", "Latest Binance...")**:
  - Background: Transparent
  - Padding: 6px 4px (less horizontal padding when inactive)
  - Font: 14pt Regular
  - Color: #848E9C (Subdued grey)

#### 7.4.2 Announcements List Container

- **Background**: #181A20 (Matches app background, no cards used here)
- **Divider System**: 1px solid #2B3139 separating every list item. Divider spans full width excluding a left margin.

#### 7.4.3 Announcement List Item

- **Layout**: Flex Row (Icon left, Content right), Top-aligned.
- **Padding**: 16px vertical, 16px horizontal.
- **Left Icon**:
  - Icon: Megaphone outline
  - Size: 16x16px
  - Color: #EAECEF
  - Position: Margin-top 4px (to align with first line of text), Margin-right 12px.
- **Content Block (Right)**:
  - Flex: 1 (takes remaining width)
  - **Title**:
    - Text Examples: "Join the Angels Square AMA & Win Rewards...", "ETHGas Trading Competition..."
    - Font: 15pt Medium (SF Pro Display)
    - Color: #EAECEF
    - Line Height: 22px
    - Truncation: Max 2 lines (ellipsis at end of 2nd line if longer).
  - **Timestamp**:
    - Text format: "Mar 6 18:30:07", "Mar 6 16:30:00"
    - Font: 12pt Regular
    - Color: #707A8A (Grey)
    - Margin Top: 8px

#### 7.4.4 Global Floating Action Button (FAB)

- **Position**: Fixed to viewport bottom-right.
- **Visibility**: Present over the announcements list.
- **Dimensions & Style**: Identical to FAB documented in Tab 1 (56x56px circle, Binance yellow gradient, #1E2329 '+' icon).

### Tab 5: Live (Active State)

#### 7.5.1 Livestream Post Container

- **Background**: #181A20 (Matches app background)
- **Margin**: 0px 0px 16px 0px (spacing between livestream posts)
- **Padding**: 0px (Edge-to-edge media cards)

#### 7.5.2 Livestream Media Card

- **Layout**: Full width rounded rectangle container holding video feed.
- **Dimensions**:
  - Width: calc(100vw - 32px) (16px margin on left/right)
  - Height: ~300px (approx 4:3 or 16:9 ratio depending on viewport)
  - Border Radius: 16px
  - Margin: 16px horizontal, 0px vertical.
- **Background**:
  - Dark purple/blue gradient base mimicking live video (e.g. #2A2140 to #1A1C30).
  - Subtle geometric cube pattern overlays indicating Binance Live default backgrounds.
- **Overlay Gradient**: Radial gradient at the bottom (black/transparent) ensuring chat readability.

#### 7.5.3 Livestream Overlays (Top Left)

- **LIVE Badge**:
  - Container: #8A2BE2 (Solid Purple)
  - Border Radius: 4px
  - Padding: 4px 6px
  - Layout: Audio equalizer icon (3 white bars) + "LIVE" (11pt Bold, white).
  - Margin: 12px top, 12px left.
- **Viewer Count Pill**:
  - Container: rgba(0,0,0,0.6) (Translucent black)
  - Border Radius: 4px
  - Padding: 4px 8px
  - Layout: Person outline icon + "3,672" (11pt Regular, #EAECEF).
  - Margin: 12px top, 8px left from LIVE badge.

#### 7.5.4 Livestream Overlays (Center)

- **Broadcaster Avatar**:
  - Dimensions: 80x80px absolute center of media card.
  - Border: 4px solid #8A2BE2 (Purple indicating active streaming).
  - Image: Host portrait, object-fit: cover.
  - Name Overlay (Bottom of Avatar):
    - Container: Red background (#F6465D) pill.
    - Border Radius: 8px.
    - Layout: Offset bottom center overlapping the avatar border.
    - Text: "Naccy小妹" (10pt, #FFF).

#### 7.5.5 Inline Chat Overlay (Bottom Left of Media Card)

- **Layout**: Flex column, bottom-aligned inside the media card.
- **Margin**: 12px left, 12px bottom (relative to media card borders).
- **Chat Rows** (Max 3 visible lines fading out at top):
  - Container: rgba(0,0,0,0.4) rounded pill per chat message.
  - Padding: 4px 8px
  - Layout Row: User Avatar (16x16px circle) + Username (Yellow #F5C518 or Grey depending on rank) + ": Message text" (12pt #EAECEF).
  - Text Shadow: 1px 1px 2px rgba(0,0,0,0.8) for readability.

#### 7.5.6 Livestream Card Footer (Below Media Card)

- **Layout**: Flex Row, padding 12px 16px.
- **Title Block (Left)**:
  - Layout: Flex row, top-aligned.
  - Icon: Microphone emoji/icon.
  - Text: "因爱币安，聚力同行" (Chinese title, 16pt Medium, #EAECEF, multi-line capable).
- **Meta Block (Below Title, Left)**:
  - Layout Row: Broadcaster Avatar (24x24px, with gold star verification tick) + Name "Naccy小妹" (14pt, #EAECEF) + Time "1h" (13pt, #707A8A).
- **Interaction Block (Right)**:
  - Layout Row: Messages Icon (outline) + "660" count (13pt #EAECEF) + 'X' Dismiss Icon (16px, #474D57, margin-left 16px).

#### 7.5.7 Floating Action Button (FAB)

> The FAB is a **global persistent element** visible on all feed-based tabs (confirmed in 8 of 9 screenshots). Full specification is defined in **Section 8 → FAB — Floating Action Button**. No separate spec needed per tab.

### Tab 6: News (Active State)

#### 7.6.1 Timeline Container Layout

- **Background**: #181A20 (Matches app background)
- **Padding**: 16px horizontal, 16px top (below tab bar).
- **Structure**: Vertical timeline with a continuous connecting line on the left.

#### 7.6.2 Timeline Date Header (Top Node)

- **Layout**: Flex Row, center-aligned vertically.
- **Node Icon (Left)**:
  - Shape: Diamond (45-degree rotated square)
  - Dimensions: 8x8px
  - Color: #EAECEF (White/Light Grey)
  - Left Margin: 4px (centers it over the timeline)
- **Date Text (Right)**:
  - Text: "Mar 9 2026"
  - Font: 16pt Bold (SF Pro Display)
  - Color: #EAECEF
  - Left Margin: 12px (from node)
- **Connecting Line**:
  - Drops vertically from the bottom point of the diamond node.
  - Width: 1px
  - Color: #2B3139 (Dark grey dashed/dotted or solid very faint line)
  - Position: Left 8px from screen edge (centered on nodes).

#### 7.6.3 News Item Block

- **Container**: Positioned to the right of the timeline line. Max width: calc(100vw - 36px) (16px left + 8px node center + 12px gap).
- **Padding**: 16px vertical spacing between news items.
- **Node Icon (Left)**:
  - Shape: Tiny circle or subtle diamond overlapping the connecting line.
  - Dimensions: 4x4px
  - Color: #707A8A
- **Time Element**:
  - Text: "03:43", "03:39", "03:35"
  - Font: 13pt Regular
  - Color: #707A8A
  - Margin: 0px (top aligned with node).
- **Headline Title**:
  - Text Examples:
    - "Fed Rate Decision: Market Anticipates No Change in March"
    - "PRECIOUS METALS | Gold and Silver Prices Experience Volatility"
    - "BNB Drops Below 610 USDT with 1.98% Decrease in 24 Hours"
  - Font: 15pt Semi-bold (SF Pro Display)
  - Color: #EAECEF
  - Line Height: 22px
  - Margin Top: 8px
  - Highlighting: Tickers ("BNB", "USDT") or tags ("PRECIOUS METALS |") may optionally carry distinct coloring depending on global settings, though here they maintain #EAECEF.

#### 7.6.4 News Item Engagement Footer

- **Layout**: Flex Row, space-between evenly.
- **Margin Top**: 16px
- **Margin Bottom**: 8px
- **Icon Block Specifications** (Left to Right: Comment, Repost, Like, Share):
  - **Shared Specs**:
    - Layout: Flex row, center-aligned vertically.
    - Icon Size: 16x16px (outline style, 1.5px stroke).
    - Icon Color: #EAECEF
    - Optional State: If active/liked, Like icon fills with #F6465D.
  - **Text (Counts)**:
    - Example: "0", "0", "3", "0"
    - Font: 14pt Regular
    - Color: #EAECEF
    - Left Margin: 6px (from icon)

#### 7.6.5 Floating Action Button (FAB)

> The FAB is a **global persistent element** visible on all feed-based tabs (confirmed in 8 of 9 screenshots). Full specification is defined in **Section 8 → FAB — Floating Action Button**. No separate spec needed per tab.

### Tab 7: Academy (Active State)

#### 7.7.1 Educational Category Grid (Top Row)

- **Container**:
  - Layout: Horizontal Flex Row / Grid.
  - Padding: 16px horizontal, 16px bottom.
  - Spacing: Equal distribution (approx 20px gap between items).
- **Category Item**:
  - Layout: Column (Icon top, Text bottom).
  - **Icon Container**:
    - Dimensions: 48x48px
    - Background: #1E2329 (Subtle contrast against main background).
    - Border Radius: 12px.
    - Icon Color: #EAECEF (White/Light Grey).
    - Icon Styles:
      - "Blockchain": 4-block grid icon.
      - "NFT": Framed square icon.
      - "DeFi": Connected nodes icon.
      - "Security": Shield with keyhole icon.
      - "Trading": Grouped circle/arrow icon.
  - **Label Text**:
    - Font: 12pt Regular (SF Pro Display).
    - Color: #EAECEF.
    - Margin Top: 8px.
    - Alignment: Centered under icon.

#### 7.7.2 Top Picks Section

- **Header**:
  - Text: "Top Picks"
  - Font: 18pt Bold (SF Pro Display).
  - Color: #EAECEF.
  - Padding: 0px 16px 12px 16px.
- **Top Picks Carousel**:
  - Layout: Horizontal scrolling container.
  - Padding Left: 16px (starts aligned with header).
  - Card Gap: 12px.
- **Top Picks Card**:
  - **Media Area (Top)**:
    - Dimensions: 280px width, 160px height.
    - Background: #0B0E11 (Deep black/grey darker than app background).
    - Border Radius: 16px.
    - **Illustration Style**:
      - Minimalist vector graphics.
      - Color Palette: Dark grey base with Binance Gold (#F3BA2F) and White accents.
      - Elements: Bar charts with gold circular markers, line charts with gold glowing nodes, informational 'i' icons in circles.
  - **Content Area (Bottom)**:
    - **Article Title**:
      - Text Examples: "A Beginner's Guide to Cryptocurrency Trading", "Crypto Market Capitalization Explained".
      - Font: 15pt Bold (SF Pro Display).
      - Color: #EAECEF.
      - Margin Top: 12px.
      - Line Height: 20px.
      - Width: Same as media area (280px).

#### 7.7.3 Trending Articles Section

- **Header**:
  - Text: "Trending Articles"
  - Font: 18pt Bold (SF Pro Display).
  - Color: #EAECEF.
  - Padding: 24px 16px 12px 16px.
- **Structure**: (Following specific article list items not visible in current fold, but matching general app list styles).

#### 7.7.4 Global Floating Action Button (FAB)

- **Position**: Fixed bottom-right.
- **Dimensions & Style**: 56x56px, Yellow gradient, '+' icon. Present on Academy tab.

### Tab 8: Hot (Active State)

#### 7.8.1 Trending Topic Section

- **Header**:
  - Text: "Trending Topic"
  - Font: 18pt Bold (SF Pro Display).
  - Color: #EAECEF.
  - Icon: Chevron right arrow (16px, #848E9C).
  - Padding: 16px horizontal, 12px bottom.
- **Trending Hashtag List**:
  - **Item Layout**: Flex Row, space-between.
  - **Hashtag Text (Left)**:
    - Font: 15pt Medium (SF Pro Display).
    - Color: #EAECEF.
    - Prefix: "# " (with space).
    - Examples: "# Trump'sCyberStrategy", "# JobsDataShock".
  - **Discussion Badge (Right)**:
    - Container: rgba(243, 186, 47, 0.15) (Translucent gold pill).
    - Border Radius: 4px.
    - Padding: 2px 6px.
    - Text: "6.8K Discussing", "19.4K Discussing".
    - Font: 12pt Regular.
    - Color: #F3BA2F (Binance Gold).

#### 7.8.2 Sentiment Poll Card

- **Container**:
  - Background: #1E2329 (Solid grey).
  - Border Radius: 16px.
  - Margin: 16px horizontal.
  - Padding: 16px.
- **Question Text**:
  - Text: "How do you feel about BTC today?"
  - Font: 16pt Semi-bold (SF Pro Display).
  - Color: #EAECEF.
  - Margin Bottom: 16px.
- **Poll Buttons**:
  - Layout: Flex Row, Gap: 12px.
  - **Bearish Button (Left)**:
    - Background: #F6465D (Binance Red).
    - Text: "Bearish" (14pt Bold, #FFF).
    - Border Radius: 8px.
    - Flex: 1.
    - Height: 44px.
  - **Bullish Button (Right)**:
    - Background: #2EBD85 (Binance Green).
    - Text: "Bullish" (14pt Bold, #FFF).
    - Border Radius: 8px.
    - Flex: 1.
    - Height: 44px.
- **Poll Footer**:
  - Layout: Flex Row, space-between.
  - **Instruction (Left)**:
    - Text: "Click to make your choice"
    - Font: 12pt Regular.
    - Color: #707A8A.
  - **Stats (Right)**:
    - Text: "6,125 Joined"
    - Font: 12pt Regular.
    - Color: #707A8A.

#### 7.8.3 Most Searched Section (6H)

- **Header**:
  - Text: "Most Searched (6H)"
  - Layout: Flex Row.
  - Column 1: "Most Searched (6H)" (14pt Regular, #707A8A).
  - Column 2: "Trend" (14pt Regular, #707A8A, Margin Left: auto).
- **Asset List Item**:
  - **Token Info (Left)**:
    - Icon: 24x24px circular asset icon.
    - Asset Name: "HOLO" (15pt Bold, #EAECEF).
    - Tag Pill: "Rapid Riser" (Yellow text #F3BA2F, background rgba(243,186,47,0.1), border-radius 4px).
  - **Sparkline (Center)**:
    - Chart: Minimalist red/green line (approx 60x20px viewport).
    - Current State: Red downtrend line.
  - **Price/Change (Right)**:
    - Layout: Column, right-aligned.
    - Percentage: "-7.96%" (14pt Medium, #F6465D).

#### 7.8.4 Global Floating Action Button (FAB)

- **Position**: Fixed bottom-right.
- **Dimensions & Style**: 56x56px, Yellow gradient, '+' icon. Present on Hot tab.

### Menu Icon (Hamburger on Tab Bar)

- **Position**: Far right edge (after expand arrow if visible)
- **Icon**: 3 horizontal lines (≡)
- **Size**: 24x24px
- **Color**: #848E9C (50% opacity)
- **Line Length**: 18px
- **Line Spacing**: 4px
- **Touch Target**: 48x48px
- **Interaction**: Opens tab customization menu
  - Reorder tabs
  - Hide/show tabs
  - Reset to default

### Accessibility Features

- **Screen Reader**: "Discover tab, 1 of 8. Selected. Double tap to switch tabs."
- **Focus Order**: Left to right sequential
- **Keyboard Navigation**: Arrow keys to navigate, Enter to select
- **High Contrast Mode**: Indicator becomes 4px thick
- **Reduced Motion**: Disables slide animation, instant switch

### Performance Optimization

- **Lazy Loading**: Tab content loads on first visit
- **Pre-fetch**: Next adjacent tab pre-loads in background
- **Memory Management**: Inactive tabs release resources after 60s
- **Scroll Optimization**: Virtual scrolling for long lists

### Visual Feedback

- **Haptic**: Light tap on tab switch (iOS: 10ms, Android: 15ms)
- **Sound**: Subtle click (if sound enabled)
- **Animation Duration**: 300ms total (indicator slide + content fade)
- **Frame Rate**: 60fps target for smooth animation

### Tab 1: Discover (Active Content Stream)

#### Layout Structure

**Background**: #0B0E11 (pure black for main feed background to contrast with cards)
**Padding Top**: 8px (below tab bar)
**Container Approach**: Infinite scrolling vertical list of feed cards

#### 7.1.1 Floating Live/Trending Pill

- **Container**:
  - Background: Solid purple gradient (#8A2BE2 to #7F5AF0 at 90% opacity)
  - Border Radius: 16px (pill shape)
  - Height: 44px
  - Width: calc(100% - 72px) (leaves room for next story circle)
  - Margin: 12px horizontal, 8px top
  - Shadow: rgba(138, 43, 226, 0.2), 8px blur
- **Content Row**:
  - **Left Avatar**: 28x28px perfect circle, 2px white border, object-fit: cover.
  - **Text**: "@Naccy小妹 livestream is trending"
    - Font: 14pt medium (SF Pro Display)
    - Color: #FFFFFF (100% opacity)
    - Positioning: Center-left aligned, 8px margin from avatar.
    - Truncation: Ellipsis if exceeds 60% of pill width.
  - **Right Animation (Audio Bars)**:
    - Position: Absolute right (16px from edge)
    - Icon: 3 vertical bars (width: 3px each, gap: 2px)
    - Color: #FFFFFF
    - Animation: Equalizer scaling (heights bounce between 4px and 14px, infinite loop, different delays).
- **Adjacent Story Circle (Right Edge)**:
  - Position: 12px right of the purple pill
  - Avatar Dimensions: 44x44px
  - Border: 3px gradient border (Gold/Purple indicating unseen story/live)
  - Cutoff: Partially visible off the right edge of screen.

#### 7.1.2 Feed Card Container

- **Background**: #1E2329 (RGB: 30, 35, 41)
- **Margin**: 0px 0px 8px 0px (cards span full width, 8px gap)
- **Padding**: 16px vertically, 16px horizontally
- **Border**: None

#### 7.1.3 Feed Creator Header

- **Layout Row**: Avatar (Left) + Name/Info (Center) + Dismiss (Right)
- **Avatar**:
  - Dimensions: 40x40px perfect circle
  - Image: Creator icon (e.g. Crypto Eagles logo, high-contrast B&W)
  - Verification Badge:
    - Shape: Hexagon/Star shape (14x14px), rounded corners
    - Background: #F5C518 (Binance yellow)
    - Icon: Black checkmark (✔) (Stroke: 1.5px, Color: #1E2329)
    - Position: Bottom-right overlap (x=+4px, y=+4px from edge)
- **Creator Details (Center aligned)**:
  - Container: Flex-column, 12px left margin
  - Row 1 - Name: "Crypto Eagles" (16pt medium, #EAECEF)
  - Row 1 - Top/Star Creator Badge: Gold outline star icon (12x12px) next to name.
  - Row 1 - Time: "• Mar 6" (13pt regular, #848E9C, 6px margin)
  - Row 2 - Followers: "119.2K followers" (13pt regular, #848E9C)
- **Right Action (Dismiss)**:
  - Icon: Multiplication sign (X)
  - Size: 16x16px
  - Line Weight: 2px
  - Color: #474D57 (Dark grey, very subtle)
  - Position: Absolute top-right corner of card (16px from top/right)
  - Touch Target: 32x32px

#### 7.1.4 Feed Content Body (Text)

- **Text Formatting**:
  - Content: Mix of standard, bold, uppercase, and emojis.
  - Font: 15pt regular (SF Pro Display)
  - Color: #EAECEF (90% white)
  - Line Height: 24px (1.6 ratio for readability)
  - Margin Top: 16px (below header)
  - Emojis: Render at 18px size inline.
  - Special Styling (e.g. italic/serif styling if custom text pasted): Rendered as native Unicode if applicable.
  - Numbered Lists: Emoji-based (1️⃣) or standard styled numbers.

#### 7.1.5 Custom Asset/Earnings Attachment

- **Earnings Image Card (e.g. Binance Learn & Earn)**:
  - Dimensions: Portrait orientation (e.g., aspect ratio 3:4 or fixed width 200px)
  - Border Radius: 12px
  - Shadow: rgba(0, 0, 0, 0.4) 1px inset or slight drop shadow.
  - Layout: Placed inline within content area, aligned left.
  - Overlay: If cropped, dark overlay at bottom `Data updates every Thursday...` with 10pt text.
- **Asset Distribution Widget**:
  - Container:
    - Background: Transparent with 1px solid #2B3139 border.
    - Border Radius: 8px
    - Padding: 12px
    - Margin Top: 12px
    - Layout: Flex row.
  - Icon (Left):
    - Circular pie-chart graphic (24x24px).
    - Colors: Outer ring blue (#2962FF), inner empty (#1E2329).
  - Text:
    - "Asset Distrib..." (14pt medium, #EAECEF, truncated)
    - "Top holding USDC..." (12pt regular, #848E9C, right aligned)
- **Token Performance Pill**:
  - Container: Solid background #2B3139 (dark grey)
  - Border Radius: 4px
  - Padding: 4px 8px
  - Margin Top: 12px
  - Content Row:
    - Token: "USDC" (13pt regular, #848E9C)
    - Change: "-0.01%" (13pt medium, #F6465D Binance Red)
  - Interaction: Tappable pill routing to USDC market page.

#### 7.1.6 Feed Engagement Footer

- **Layout Row**: 4 icons distributed evenly across card width.
- **Margin Top**: 24px (below content/attachments)
- **Margin Bottom**: 4px
- **Icon Specifications (Like, Comment, Forward, Share)**:
  - Icon Size: 22x22px (outline style, 1.5px stroke weight)
  - Color: #848E9C (60% opacity grey)
- **Labels/Counts**: No labels shown in default state for this post variant; icons simply evenly spaced (flex: 1, justify-content: center).

#### 7.1.7 Global Floating Action Button (FAB)

- **Position**: Absolute, fixed to viewport bottom-right
  - Margin Bottom: 72px (above bottom navigation bar)
  - Margin Right: 16px
- **Dimensions**:
  - Shape: Perfect circle
  - Size: 56x56px
  - Elevation: 6dp shadow (rgba(245, 197, 24, 0.4), 16px blur, y=8px)
- **Design Elements**:
  - Background: #F5C518 (Binance yellow gradient: #FCD535 to #F0B90B)
  - Icon: Plus sign (+)
  - Icon Size: 24x24px
  - Icon Line Weight: 2px (rounded caps)
  - Icon Color: #1E2329 (Dark grey/black)
- **Interaction**:
  - Tap: Scales down to 0.95 (100ms), triggers "Create Post" modal sliding up from bottom
  - Scroll Behavior: Hides smoothly (slides down 100px) when scrolling down feed, reappears when scrolling up

### Tab 2: Following

| Element     | Specification                                                                                                                             |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Top Row     | "Story-style" circular avatars showing recent updates (e.g., avatar with green/red sparkline overlay). Includes a `... Following` circle. |
| Empty State | "Follow accounts to see their posts"                                                                                                      |
| Recommended | Dropdown menu mapping to suggested creators for the user to follow.                                                                       |
| Content     | Aggregated feed of followed influencers + Binance official                                                                                |

### Tab 3: Campaign

| Element      | Specification                |
| ------------ | ---------------------------- |
| Featured     | "CreatorPad" leaderboard     |
| Columns      | Rank, Creator, Points/Scores |
| Action       | High-contrast "JOIN" buttons |
| Button Style | Yellow `#F0B90B`, Black text |

### Tab 4: Announcements

| Element          | Specification                                       |
| ---------------- | --------------------------------------------------- |
| Categories       | New Listing, Latest Binance News, Latest Activities |
| Timestamp Format | `YYYY-MM-DD HH:MM:SS` (e.g., "2026-03-09 03:49:12") |
| Title Style      | 16sp Bold, White                                    |
| Layout           | Vertical list with dividers                         |

### Tab 5: Live

| Element      | Specification                            |
| ------------ | ---------------------------------------- | --- | --- | ----- |
| Thumbnail    | 16:9 aspect ratio                        |
| Status Badge | Red box top-left "                       |     |     | LIVE" |
| Viewer Count | Bottom-left "3,672 Viewers" badge        |
| Overlay      | Real-time comments panning bottom to top |

### Tab 6: News

| Element    | Specification                                   |
| ---------- | ----------------------------------------------- |
| Layout     | Timeline with vertical connector line           |
| Line Color | Grey `#474D57`                                  |
| Metrics    | Comment, Retweet, Like, Share icons with counts |
| Source     | Media outlet logo (Cointelegraph, Binance News) |

### Tab 7: Academy

#### Category Grid

| Category   | Icon Style               |
| ---------- | ------------------------ |
| Blockchain | Custom illustrative icon |
| NFT        | Custom illustrative icon |
| DeFi       | Custom illustrative icon |
| Security   | Custom illustrative icon |
| Trading    | Custom illustrative icon |

#### Article Card

| Element       | Specification                   |
| ------------- | ------------------------------- |
| Card Height   | ~180dp                          |
| Image         | 16:9 aspect ratio               |
| Title         | 16sp Medium, White, 2 lines max |
| Read Time     | "5 min read" - 12sp, `#848E9C`  |
| Difficulty    | "Beginner" badge - pill shape   |
| Corner Radius | 12dp                            |

### Tab 8: Hot (Social Trends)

| Element          | Specification                          |
| ---------------- | -------------------------------------- |
| Hashtag Format   | "#AltcoinSeasonTalk"                   |
| Discussion Count | "19.4K Discussing"                     |
| Sentiment Poll   | "How do you feel about BTC today?"     |
| Poll Buttons     | Bearish (Red), Bullish (Green)         |
| Participation    | "6,125 Joined"                         |
| Rapid Risers     | Top 3 searched tokens with mini-charts |

---

## 8. Global Navigation (Bottom Bar)

### Container Specifications

- **Position**: Fixed at bottom of viewport
- **Height**: 60px (plus Safe Area inset for iOS home indicator, NOT 56px)
- **Background**: #181A20 (RGB: 24, 26, 32 - slightly darker than main background)
- **Top Border**: 1px solid #2B3139 (subtle separator line)
- **Z-Index**: Highest stacking context (stays above all scrollable content)
- **Backdrop Filter**: None (solid background to prevent text collision)

### Grid Layout

- **Structure**: CSS Grid or Flexbox
- **Columns**: 5 equal-width columns (1fr)
- **Item Alignment**: Center horizontally and vertically
- **Padding**: 0px horizontal, 4px top, 8px bottom

### Standard Tab Item Specifications

**Container per Tab**:

- **Dimensions**: ~72x44px (touch target)
- **Layout**: Flex-column (Icon on top, text on bottom)
- **Gap**: 2px between icon base and text top

**Icon Definitions**:

- **Size**: 24x24px bounding box
- **Line Weight**: 2px uniform (stroke-based)
- **End Caps**: Rounded (line-cap: round, line-join: round)

**Text Definitions**:

- **Font**: 10pt medium (SF Pro Display Medium)
- **Letter Spacing**: 0.1px
- **Line Height**: 12px
- **Alignment**: Center

### State Styling

**Inactive State**:

- **Icon Color**: #848E9C (RGB: 132, 142, 156, 60% opacity)
- **Icon Style**: Outline (stroke only, no fill)
- **Text Color**: #848E9C
- **Font Weight**: Regular (400)

**Active State**:

- **Icon Color**: #F5C518 (Binance yellow fill, NOT #181A20)
- **Icon Fill**: #F5C518 (solid yellow background for active tab icon)
- **Icon Style**: Filled/Dual-tone (Yellow body with dark borders)
- **Text Color**: #F5C518 (Binance yellow)
- **Font Weight**: Medium (500)
- **Animation**:
  - Icon scale bounce (1.0 → 1.15 → 1.0) over 250ms
  - Fill fade-in over 150ms

### Tab Definitions (Left to Right)

#### 1. Home (Active state shown by default)

- **Icon Design (Inactive)**: Simple house outline. Central pentagon base with angled roof. Default door cut-out in center.
- **Icon Design (Active)**: House interior filled with #F5C518 (solid yellow). Door outline remains visible.
- **Label**: "Home"
- **Active Color**: #F5C518 (yellow)

#### 2. Markets

- **Icon Design**: Bar chart outline with 3 vertical bars (low, medium, high) and an upward trend arrow slicing across from bottom left to top right.
- **Label**: "Markets"

#### 3. Trade (Center Tab - Special Treatment)

- **Icon Design**: Two opposing horizontal arrows (swap). Top arrow points right, bottom points left.
- **Label**: "Trade"
- **Special Action**: Double tap or long-press reveals quick-action dial (Buy, Sell, Convert).

#### 4. Futures

- **Icon Design**: Lightning bolt enclosed within an angled frame/hexagon.
- **Label**: "Futures"

#### 5. Assets / Wallets

- **Icon Design**: Stylized wallet outline (rectangle with a flap/card slot on the right side).
- **Label**: "Assets"

#### 6. More (Optional 6th / Replaces a tab depending on user config)

- **Icon Design**: Three dots horizontal (ellipsis) inside a rounded square.
- **Label**: "More"
- **Interaction**: Opens bottom sheet modal expanding grid of all available Binance services.

### Haptic Feedback & Interaction

- **Tap**: Immediate state switch. Content loads without full page reload (Single Page App behavior).
- **Haptic (iOS)**: UISelectionFeedbackGenerator (light click) on tab change.
- **Haptic (Android)**: Constants.CLICK (brief subtle vibration).

### Dynamic Badging

- Can display notification badges.
- **Dot Badge**: 6x6px solid red circle (#F6465D) on top-right of the icon (e.g., indicating unread messages on Home).
- **Number Badge**: Red pill with white text for critical alerts (e.g., liquidation warning on Futures).

---

## 7. Visual Design System

### Color Palette

| Element              | Hex Code  | Usage                         |
| -------------------- | --------- | ----------------------------- |
| Primary Yellow       | `#F0B90B` | Active tabs, buttons, accents |
| Primary Yellow Light | `#FCD535` | FAB, highlights               |
| Background Dark      | `#0B0E11` | Main screen background        |
| Surface              | `#1E2329` | Cards, components             |
| Surface Dark         | `#2B3139` | Search bar, inputs            |
| Text Primary         | `#FFFFFF` | Main text                     |
| Text Secondary       | `#848E9C` | Labels, hints                 |
| Text Muted           | `#707A8A` | Timestamps                    |
| Success Green        | `#0ECB81` | Positive values, profit       |
| Error Red            | `#F6465D` | Negative values, loss         |

### Typography

| Element        | Size | Weight  | Color |
| -------------- | ---- | ------- | ----- |
| Screen Title   | 20sp | Bold    | White |
| Section Header | 18sp | Medium  | White |
| Card Title     | 16sp | Bold    | White |
| Body Text      | 14sp | Regular | White |
| Label          | 12sp | Regular | Grey  |
| Caption        | 10sp | Regular | Muted |

### Spacing System

| Element            | Value |
| ------------------ | ----- |
| Screen Margin      | 16dp  |
| Card Padding       | 16dp  |
| Card Corner Radius | 12dp  |
| Section Gap        | 24dp  |
| Item Gap           | 12dp  |
| Icon Size          | 24dp  |
| Button Height      | 40dp  |

---

## 8. Interaction Patterns

### Pull-to-Refresh

- Gesture: Pull down on content area
- Animation: Standard Material refresh indicator
- Color: Yellow `#F0B90B`

### Horizontal Scroll

- Carousel: Promotional banners
- Behavior: Auto-scroll 3-5 seconds
- Snap: Center snap

### Bottom Navigation Bar

- **Position**: Fixed at screen bottom, above safe area inset
- **Height**: 64px (excluding safe area / home indicator)
- **Background**: #181A20 (deepest dark, distinct from page background)
- **Top Border**: 1px solid #2B3139 (subtle divider)
- **Width**: Full screen width
- **z-index**: Above all scroll content

**Navigation Items** (5 items, left to right, confirmed from all screenshots):

| #   | Label   | Icon Style               | Notes            |
| --- | ------- | ------------------------ | ---------------- |
| 1   | Home    | House icon               | Landing page     |
| 2   | Markets | Line chart icon          | Markets hub      |
| 3   | Trade   | Circle with arrows       | Trade interface  |
| 4   | Futures | Bar chart / futures icon | Futures trading  |
| 5   | Assets  | Wallet / grid icon       | Asset management |

**Active Item State**:

- Icon color: #F5C518 (Binance yellow)
- Label color: #F5C518 (Binance yellow)
- Icon size: 24x24px
- Label font: 11pt regular
- Indicator: Yellow icon + yellow label (no underline pill)

**Inactive Item State**:

- Icon color: #848E9C (muted grey)
- Label color: #848E9C
- Icon size: 24x24px
- Label font: 11pt regular

**Touch Feedback**:

- Tap switches tab instantly
- Scroll position preserved per tab
- Haptic: Light impact

### FAB — Floating Action Button

- **Purpose**: Quick content creation / posting shortcut
- **Position**: Fixed, bottom-right overlay (confirmed visible in Images 02, 04, 06, 09)
  - `bottom: 88px` (above bottom navigation bar)
  - `right: 16px`
  - `z-index`: Floating above all content, below modal overlays
- **Dimensions**: 56x56px perfect circle
- **Background**: #F5C518 (Binance yellow)
- **Icon**: `+` (plus sign)
  - Size: 24px stroke
  - Color: #1E2329 (dark)
  - Weight: 2px
- **Shadow**: rgba(0, 0, 0, 0.3), 12px blur, y-offset 4px
- **Interaction**: Tap opens quick-action menu (New Post, Quick Trade, etc.)
- **Touch Feedback**: Scale 0.94 on press (150ms ease-out), scale back 1.0 on release
- > ⚠️ **Previously only referenced in Notes. Now fully specified.**

---

## 9. Component States

### Buttons

| State    | Background | Text Color |
| -------- | ---------- | ---------- |
| Normal   | `#F0B90B`  | `#181A20`  |
| Pressed  | `#D4A10A`  | `#181A20`  |
| Disabled | `#474D57`  | `#707A8A`  |

### Input Fields

| State   | Border    | Background |
| ------- | --------- | ---------- |
| Normal  | `#2B3139` | `#1E2329`  |
| Focused | `#F0B90B` | `#1E2329`  |
| Error   | `#F6465D` | `#1E2329`  |

### Tabs

| State    | Indicator            | Text       |
| -------- | -------------------- | ---------- |
| Active   | 2dp Yellow underline | Bold White |
| Inactive | None                 | Grey       |

---

## 10. Data Display Formats

### Price Formats

| Element      | Format            | Example           |
| ------------ | ----------------- | ----------------- |
| Balance      | ₹XX,XXX.XX        | ₹15,291.23        |
| PNL          | +₹XXX.XX (+X.XX%) | +₹124.47 (+0.85%) |
| Crypto Price | ₹X,XXX.XX         | ₹5,821.43         |

### Timestamp Formats

| Context       | Format                       |
| ------------- | ---------------------------- |
| Announcements | YYYY-MM-DD HH:MM:SS          |
| Social Posts  | Relative (2h ago, Yesterday) |
| News          | Date + Read time             |

---

## 11. Discover Feed — Additional Components

> All components in this section were **confirmed visible in reference screenshots** but were previously absent from the spec.

---

### 11.1 Trending Livestream Banner (Discover Tab)

- **Position**: Pinned at the top of the Discover feed, below the tab bar and above the first post card.
- **Height**: ~40px
- **Background**: Purple gradient (left: deep purple `#6B3FA0` → right: vibrant purple `#9B59B6`)
- **Layout**: Horizontal flex row — Avatar | Creator handle | "is trending" text | Audio indicator icon
- **Avatar**:
  - Dimensions: 28x28px circle
  - Border: 2px solid white or transparent
- **Text**:
  - Content: e.g. `@Naccy livestream is trending`
  - Font: 13pt regular, #FFFFFF
- **Audio/Live Indicator**:
  - Icon on right side (waveform or speaker icon)
  - Color: #FFFFFF
- **Interaction**: Tap navigates to the live stream
- **Fields**: `banner_creator_handle`, `banner_text`, `banner_background_gradient`, `banner_live_indicator`

---

### 11.2 Asset Distribution Widget

- **Position**: Below the P2P/Send Cash service cards, above the tab navigation row
- **Height**: ~72px
- **Background**: #2B3139
- **Border Radius**: 12px
- **Padding**: 12px 16px
- **Layout**: Horizontal flex — Mini Donut Chart (left) | Text content (right)
- **Title**:
  - Text: `Asset Distribution` (truncated as `Asset Distrib...` if narrow)
  - Font: 13pt medium, #EAECEF
- **Top Holding Token**:
  - Label: `Top holding [TOKEN]` (e.g., `Top holding USDC`)
  - Font: 12pt regular, #848E9C
- **Token Change**:
  - Text: e.g., `USDC -0.01%`
  - Change color: #F6465D for negative, #0ECB81 for positive
- **Mini Chart**: Small pie/donut chart on left side (~40x40px), showing portfolio distribution
- **Fields**: `top_holding_token`, `top_holding_change_percent`, `asset_distribution_donut_chart`

---

### 11.3 BTC Sentiment Poll Card (Hot Tab)

- **Tab**: Hot (`/hot` feed)
- **Position**: Appears as a card in the Hot feed among other trending content
- **Card Container**:
  - Background: #2B3139
  - Border Radius: 12px
  - Padding: 16px
- **Card Layout**:
  - **Title**: `How do you feel about BTC today?` (15pt medium, #EAECEF)
  - **Subtitle / Call to action**: `Click to make your choice` (13pt regular, #848E9C)
  - **Vote Buttons Row** (side by side, full width):
    - **Bearish Button**:
      - Background: #F6465D (Binance red) at 20% opacity or full
      - Text: `Bearish` (14pt medium, #F6465D or white)
      - Border: 1px solid #F6465D
      - Border Radius: 8px
      - Height: 44px
      - Width: ~48% of card width
    - **Bullish Button**:
      - Background: #0ECB81 (Binance green) at 20% opacity or full
      - Text: `Bullish` (14pt medium, #0ECB81 or white)
      - Border: 1px solid #0ECB81
      - Border Radius: 8px
      - Height: 44px
      - Width: ~48% of card width
  - **Participant Count**: e.g., `6,125 Joined` (12pt regular, #848E9C, below buttons)
- **Fields**: `poll_title`, `poll_option_bearish`, `poll_option_bullish`, `poll_participant_count`, `poll_user_vote_state`

---

### 11.4 Most Searched Token Widget (Hot Tab)

- **Tab**: Hot (`/hot` feed)
- **Position**: Appears in the Hot feed, typically below or near the sentiment poll
- **Card Container**:
  - Background: #2B3139
  - Border Radius: 12px
  - Padding: 12px 16px
  - Height: ~80px
- **Header**:
  - Text: `Most Searched (6H)` (13pt medium, #EAECEF)
  - Subtext: Time window label `(6H)` in muted grey
- **Token Info (left side)**:
  - Token name: e.g., `HOLO` (15pt bold, #EAECEF)
  - Label badge: `Rapid Riser` (12pt, yellow pill `#F5C518` background, dark text)
- **Sparkline (right side)**:
  - Mini line chart (~60x30px)
  - Color: #F6465D (red if declining) or #0ECB81 (green if rising)
  - Type: Stroke-only line chart
- **Percent Change**: Shown below sparkline or right of token name (red/green)
- **Fields**: `most_searched_token`, `most_searched_timeframe`, `rapid_riser_label`, `sparkline_data`, `price_change_percent`

---

### 11.5 Discover Tab — Social Post Card (Full Model)

> Distinct from the Following tab post card (Section 7.2). The Discover tab shows posts from creators the user does NOT follow, with extra creator metadata.

- **Card Background**: Transparent / #181A20
- **Padding**: 16px horizontal, 16px top, 12px bottom
- **Separator**: None between posts (seamless scroll)

**Post Card Structure**:

```
[Avatar 40x40]  [Username + Verified Badge ✓]
                [119.2K followers]
                [• Feb 21]
[Post body text — truncated after 4 lines with ...]
[Embedded Image Card (if present)]
[Action Bar: 💬 5.7K  🔁 2.9K  ❤️ 5.4K  ↗ 2.5K]
```

**Creator Metadata Row** (unique to Discover vs Following):

- **Follower Count**: `[N]K followers` or `[N]M followers` — always shown on Discover posts
- **Verified Badge**: Yellow checkmark/shield, 16x16px, right of username
- **Field**: `creator_follower_count`, `creator_is_verified`

**Embedded Post Card** (reward/earnings screenshot):

- Rounded rectangle card inset in post body
- Background: Dark (#1E2329 or similar)
- May show earnings metrics, campaign rewards, or referral stats
- Border Radius: 12px
- Field: `post_embedded_image_card`

**Action Bar**:

- Height: 40px
- Background: Transparent
- Icons: Comment (speech bubble), Repost (arrows), Like (heart), Share (arrow)
- Count display: `[N]K` format for large numbers
- Active like state: Heart fills red (#F6465D)

---

## Notes

1. The Exchange Home Page serves as the primary landing screen after authentication.
2. All price data should update in real-time via WebSocket connections.
3. The 8-tab Discover feed provides social trading features and news aggregation.
4. Portfolio balances display in the user's selected fiat currency (INR in this specification).
5. Privacy mode toggle hides sensitive balance information with asterisks.
6. The FAB (Floating Action Button) provides quick access to trading or posting.
7. Market overview shows top assets (BTC, ETH, BNB, SOL) with sparkline charts.
8. Quick actions include P2P Trading and Send Cash services.
9. Hot tab features sentiment polls and trending topics.
10. Academy tab provides educational content with difficulty levels.
