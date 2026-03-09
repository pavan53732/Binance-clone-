# 30. Web3 Interface: Assets

Web3 Wallet Assets Interface Documentation

## Overview

This document provides exhaustive, pixel-perfect UI/UX documentation of the Binance **Web3 Assets Interface**. It captures micro-interactions, exact hex values, structural margins, and strict typographic hierarchy to guarantee a 1:1 Android XML/Compose replica.

**System Level Values:**

- Global Background Color: `#181A20` (Deep Dark Blue/Grey).
- Global Horizontal Margins: Exactly `16dp` left and right bounds.
- Divider Lines: `#2B3139`, exactly `1dp` thick.

---

## 1. Global Header & Wallet Controller

Maintains a fixed position at the top of the scrolling view.

- **Header Top Row (Height: `56dp`)**:
  - **Left**: Hamburger Menu Icon (White, strict `24x24dp`, Margin Start: `16dp`).
  - **Center**: Title "Assets" (`18sp`, `FontWeight.SemiBold` (w600), White). Exactly centered in the viewport.
  - **Right Container (Margin End: `16dp`)**:
    - Network Selector: Globe Icon (White, `24x24dp`).
    - Spacing between icons: Exactly `16dp`.
    - History: Clock Icon overlaid on a document backing (White, `24x24dp`).
- **Wallet Card Row (Margin top: `24dp` from bottom of header bounds)**:
  - **Identifier Pill**:
    - Background: `#2B3139` (Dark Grey).
    - Corner Radius: `48dp` (Creating a perfect semi-circle on the ends).
    - Padding: Start: `10dp`, End: `10dp`, Top: `6dp`, Bottom: `6dp`.
    - Internal Layout (Row, `verticalAlignment = CenterVertically`):
      - Small Yellow Wallet Hexagon Icon (`14x14dp`).
      - Spacing: `6dp`.
      - Text: "Wallet1" (`14sp`, `FontWeight.Medium` (w500), White).
      - Spacing: `4dp`.
      - Dropdown Chevron (Down arrow, White, `12dp` square bounds).
  - **Clipboard Action**:
    - Separator: Vertical line, `#474D57`, width `1dp`, height `14dp`. Margin start/end from separator: `12dp`.
    - Copy Icon (Overlapping squares, White, `16x16dp`).
- **Aggregate Balance Display (Margin top: `14dp` from bottom of pill)**:
  - Typography: Massive, monospaced tabular numbers. `40sp`, `FontWeight.Bold` (w700), White (`#FFFFFF`).
  - Example: `₹95.71`. The Rupee symbol shares the same size/weight as the numerals.

## 2. Primary Financial Actions Grid

Located exactly `28dp` below the bottom bound of the Aggregate Balance text.

- **Layout**: 4-column horizontal grid (`Row`), `Arrangement.SpaceBetween`, total horizontal padding `16dp`.
- **Action Buttons (Squircle shape)**:
  - Container Bounds: `48dp x 48dp`.
  - Shape: Rounded Square (`RoundedCornerShape(16.dp)`).
  - Background: `#2B3139`.
  - Icon Bounds: `20dp x 20dp` (centered within the `48dp` container).
  - Icon Color: Brand Yellow (`#FCD535`), stroke width `~1.5dp`.
    - Send: Strict vertical up arrow crossing a horizontal base line.
    - Receive: Strict vertical down arrow crossing a horizontal base line.
    - History: Page outline with a layered clock badge in the bottom right corner (the clock badge has a dark `#2B3139` stroke to separate it from the page outline).
    - Approvals: Shield outline containing a checkmark.
- **Action Labels**:
  - Position: Margin top `8dp` directly below the squircle container.
  - Typography: `12sp`, `FontWeight.Medium` (w500), White (`#FFFFFF`).
  - Alignment: `TextAlign.Center`.

## 3. Asset Classification (Central Navigation)

Located `32dp` below the Action Grid labels. Top bound is a full-width `1dp` divider line (`#2B3139`).

- **Main Navigation Tabs (Height: `48dp`, vertical center aligned)**:
  - Layout: Horizontal `Row`, Item spacing `24dp`. Margin start `16dp`.
  - **Active Tab ("Tokens", "DeFi", "NFTs")**:
    - Typography: `16sp`, `FontWeight.SemiBold` (w600), White (`#FFFFFF`).
    - Indicator: A thick (`3dp`) horizontal line.
    - Indicator Color: Brand Yellow (`#FCD535`).
    - Indicator Width: Exactly `16dp` wide.
    - Indicator Position: Margin top `4dp` from the text baseline, perfectly horizontally centered under the active text layer.
  - **Inactive Tabs**:
    - Typography: `16sp`, `FontWeight.Medium` (w500), Muted Grey (`#848E9C`).
    - No indicator.

---

## 4. Tab-Specific Content

### A. Tokens Tab (Active View)

- **Utility Header (Margin top: `16dp` below navigation)**:
  - Left Container:
    - Top Text: "Total Assets" (`13sp`, Grey `#848E9C`).
    - Bottom Text: "₹95.71" (`14sp`, `FontWeight.Medium`, White). Margin top `2dp`.
  - Right Container (End aligned, `16dp` margin):
    - Filter Icon: Three stacked horizontal lines crossed by circular toggles, Grey `#848E9C`, bounds `20x20dp`.
- **Token List Item (Container Height: `72dp`, perfectly centered vertically)**:
  - **Avatar (Start Aligned, Bounds `40x40dp`)**:
    - Main Logo: Filled circle, `40x40dp`. (e.g., BNB yellow, Tether green).
    - **CRITICAL detail (Network Badge)**: A smaller `14x14dp` circle overlaps the bottom-right quadrant of the main logo.
    - Network Badge Implementation: The badge has a `2dp` `#181A20` stroke ring around it to cut it out from the main logo behind it. For USDT on BNB chain, the badge is the Binance yellow hexagon. For TON on TON chain, the badge is the blue diamond.
  - **Center Block (Margin Start `12dp` from Avatar Right Bound)**:
    - Top Row (Ticker): e.g., "BNB" (`16sp`, `FontWeight.SemiBold` (w600), White).
    - Bottom Row (Price metrics, Margin top `4dp`):
      - Fiat price e.g., "₹56,516.74" (`13sp`, Grey `#848E9C`).
      - Spacing: `6dp`.
      - 24h Change: `+0.47%` (Green `#0ECB81`) or `-0.89%` (Red `#F6465D`). Typography `13sp`, `FontWeight.Medium`.
  - **Right Block (End Aligned, Margin End `16dp`)**:
    - Alignment: `End` (Right-aligned text).
    - Top Row (Quantity): `0.00099484` (`16sp`, `FontWeight.Medium` (w500), White).
    - Bottom Row (Fiat Value, Margin top `4dp`): `₹56.22` (`13sp`, Grey `#848E9C`).

### B. DeFi Tab (Active View)

- **Asset Header**: Same "Total Assets" block as the Tokens tab (values show "Total Assets / ₹0").
- **Delayed Data Banner (Margin Top `16dp` below header)**:
  - Container: `RoundedCornerShape(8.dp)`.
  - Background: Muted warning tone `#2C261A` (Yellow/Brown with high transparency overlaying the `#181A20` background).
  - Padding: `12dp` (Top, Bottom, Start, End).
  - Layout: `Row`.
  - Icon: Exclamation mark inside an outlined circle (`16x16dp`, White, `Alignment.Top`).
  - Text: "The asset data updates might be delayed by a few minutes after your transaction is successful."
  - Text Spec: Typography `13sp`, Line Height `18sp`, White (`#FFFFFF`). Margin start `10dp` from icon.
- **Empty State (Centered vertically in the remaining space below the banner)**:
  - Illustration: Document outline with a magnifying glass overlapping it, featuring a small exclamation point badge (`80x80dp`, Stroke color: `#474D57`).
  - Title Text: "You have no assets yet." (`16sp`, `FontWeight.Medium`, Grey `#848E9C`). Margin top: `16dp`.
  - CTA Button (Text-only implementation): "Explore DeFi" (`14sp`, `FontWeight.SemiBold`. Color: Brand Yellow `#FCD535`). Margin top: `16dp`.

### C. NFTs Tab (Active View)

- **Sub-navigation Pills (Margin Top `16dp` below main tabs)**:
  - Layout: Horizontal `Row`, Padding start `16dp`. Spacing between pills `8dp`.
  - **Active Pill ("Assets")**:
    - Background: `#2B3139`.
    - Corner Radius: `4dp` (Subtle rounding, not a full semi-circle pill).
    - Padding: Horizontal `12dp`, Vertical `6dp`.
    - Typography: `13sp`, `FontWeight.Medium`, White (`#FFFFFF`).
  - **Inactive Pill ("History")**:
    - Background: Transparent (No background).
    - Typography: `13sp`, `FontWeight.Medium`, Grey `#848E9C`.
- **Empty State (Centered vertically in remaining space)**:
  - Illustration: Same document/magnifying glass stroke illustration as DeFi. Size `80x80dp`, color `#474D57`.
  - Title Text: "No record found" (`16sp`, `FontWeight.SemiBold` (w600), White (`#FFFFFF`)). Margin Top `16dp`.
  - Body Text: "Currently supports Ethereum, Polygon, and BNB Chain networks. Purchased or received NFTs will be displayed here."
  - Body Text Spec: Typography `14sp`, Line Height `20sp`, Grey `#848E9C`. Alignment: `TextAlign.Center`. Margin top `8dp`, Padding horizontal `32dp`.

---

## 5. Bottom Navigation (Persistent System Bar)

- **Container Constraints**: Height `56dp`. Global bottom edge of the screen. Top border has a `1dp` `#2B3139` divider.
- **Layout**: 5 columns containing perfectly centered items.
- **Unselected Items (Home, Markets, Trade, Discover)**:
  - Icon Bounds: `24x24dp`. Stroke style (Outlined). Color: Grey `#848E9C`.
  - Text Bounds: Margin top `4dp`. Typography `10sp`, `FontWeight.Medium`, Color: Grey `#848E9C`.
- **Selected Item (Assets)**:
  - Icon Bounds: `24x24dp`. Solid style (Filled). The internal wallet "dot" is Brand Yellow (`#FCD535`), the rest of the filled wallet shape is White (`#FFFFFF`).
  - Text Bounds: Margin top `4dp`. Typography `10sp`, `FontWeight.SemiBold` (w600), Color: White (`#FFFFFF`).
