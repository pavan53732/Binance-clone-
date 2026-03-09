# 30. Web3 Interface: Assets

Web3 Wallet Assets Interface Documentation

## Overview

This document provides comprehensive documentation of the Binance **Web3 Assets Interface**, the portfolio management view for decentralized holdings. It provides a granular breakdown of multi-chain holdings across liquid tokens, DeFi positions, NFTs, and staked assets. This is the DeFi (Decentralized Finance) portfolio interface, separate from the CeFi Exchange assets interface.

---

## UI Components

### 1. Global Header & Wallet Controller

- **Header Actions**:
  - **Hamburger Menu**: Left-aligned (three horizontal lines).
  - **Screen Title**: "Assets" centered in white, bold text.
  - **Network Selector**: Globe-like icon (Top Right) to filter the assets by specific networks.
  - **History Clock**: Clock icon (Top Right, next to globe) for global transaction log.
- **Wallet Card**:
  - **Identifier Pill**: Dark grey pill-shaped container holding a small square yellow wallet icon, text "Wallet1", a dropdown chevron, and separated by a subtle vertical divider, a copy icon (overlapping rectangles).
  - **Aggregate Balance**: Bold, extra-large white typography displaying total portfolio value in fiat (e.g., `₹95.71`).

### 2. Primary Financial Actions

- **Action Grid (Centered 4-column)**:
  - Container style: Dark grey squircle (rounded square) enclosures.
  - Icons are thin, yellow strokes.
  - **Send**: Up arrow icon. Text "Send" below.
  - **Receive**: Down arrow icon. Text "Receive" below.
  - **History**: Document with a tiny clock icon indicating history/records. Text "History" below.
  - **Approvals**: Shield outline containing a checkmark. Text "Approvals" below.

### 3. Asset Classification (Tabs)

- **Main Navigation Tabs**: "Tokens", "DeFi", "NFTs". The active tab ("Tokens") has a thick yellow horizontal indicator line beneath it.
- **Tokens Tab**:
  - **Total Assets Header**: Shows "Total Assets" and fiat value (e.g., `₹95.71`) on the left, with an options/filter slider icon on the right.
  - **List Items**:
    - **Asset Icon**: Circular coin logo. Features a **small circular network badge** at the bottom-right (e.g., BNB icon has a tiny BNB Smart Chain badge, TON has a TON network badge).
    - **Left Column**:
      - Primary Text: Token Ticker (e.g., "BNB", "TON", "USDT.z") in bold white.
      - Secondary Text: Current token price in fiat (e.g., `₹56,516.74`) followed by the 24h percentage change (e.g., `-0.89%` in Red `#F6465D` or `+0.47%` in Green `#0ECB81`).
    - **Right Column** (Right-aligned):
      - Primary Text: Holdings amount precisely up to 8 decimal places (e.g., `0.00099484`) in white.
      - Secondary Text: Equivalent fiat value of the holdings (e.g., `₹56.22`) in grey.
- **DeFi Tab**:
  - **Delayed Data Warning**: Full-width brownish/orange card with an exclamation circle icon stating: "The asset data updates might be delayed by a few minutes after your transaction is successful."
  - **Total Assets**: Shows "₹0" with the filter icon.
  - **Empty State**: Central grey illustration of a document with a magnifying glass. Below is text "You have no assets yet." and a bold yellow hyperlink "Explore DeFi".
- **NFTs Tab**:
  - **Secondary Navigation (Sub-tabs)**: Pill-shaped toggle buttons below the main tabs containing "Assets" (active, filled grey pill) and "History" (inactive text).
  - **Empty State**: Same central document illustration.
  - **Text Information**: "No record found" in white, subtext "Currently supports Ethereum, Polygon, and BNB Chain networks. Purchased or received NFTs will be displayed here." in grey.

### 4. Bottom Navigation

- Persistent 5-item bar: Home, Markets, Trade, Discover, Assets.
- "Assets" is the active state with a solid yellow wallet icon and bold white text. The line indicator at the very bottom shows Android system gesture navigation.

---

## Visual Fidelity Details

- **Typography**: High contrast hierarchy. Values/balances use larger tabular numbers; secondary infos use smaller medium-grey text.
- **Iconography**: Clean, thin-stroke UI icons. Network badges are extremely small context indicators overlapping the main coin icons.
- **Colors**:
  - **Background**: Deep dark blue/grey `#181A20` (approximate native dark mode base).
  - **Red (Negative)**: `#F6465D`
  - **Green (Positive)**: `#0ECB81`
  - **Brand Yellow**: `#FCD535` for active states, icons, and CTA links.
  - **Muted Elements**: Cards and squircle buttons use a slightly lighter grey `#2B3139` than the deep background.

---

## Notes

1. Unlike the Exchange interface, this Web3 interface emphasizes multi-chain support inherently inside a single wallet view, indicated heavily by network badges.
2. The UI relies strictly on percentage text for 24h changes (no sparklines observed).
3. Wallet management is prominent at the top via the pill dropdown.
4. Delayed on-chain data is explicitly communicated via warning cards in the DeFi tab.
5. Numerical precision up to 8 decimal places ensures accurate token quantities.
