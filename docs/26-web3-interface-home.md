# 26. Web3 Interface: Home

Web3 Wallet Home Interface Documentation

## Overview

This document provides comprehensive documentation of the Binance **Web3 Wallet Home Interface**, the primary gateway to decentralized applications (DApps) and multi-chain asset management. It features a simplified portal compared to the Exchange homepage, prioritizing security, wallet management, and DeFi ecosystem discovery. This is the DeFi (Decentralized Finance) interface, separate from the CeFi Exchange interface.

---

## UI Components

### 1. Global Header & Navigation Zone

- **Menu Trigger**: Three-line hamburger icon (Top Left).
- **Navigation Toggle**: Centered segmented pill toggle containing `Exchange` and `Wallet` (Wallet is active, highlighted state).
- **Action Icons** (Top Right):
  - **Support/Headphones Icon**: Link to customer service/help.
  - **Scanner Icon**: QR code scanner for DApp connections.

- **Search Bar**:
  - Rounded pill search field immediately below the top bar.
  - Left-aligned placeholder text: "Search".
  - Right-aligned magnifying glass icon.
  - Placed inside a dark surface container.

### 2. Wallet Multi-Chain Controller

- **Selector**: Dropdown displaying "Wallet1" followed by a chevron down icon (`▼`).
- **Divider**: A subtle vertical divider separator.
- **Copy Address**: Overlapping rectangles icon to copy the current active wallet address.
- **Total Balance**: Large fiat display (e.g., "₹95.53").
- **Primary CTA**: Large, solid Binance Yellow (`#FCD535`) rectangular "Receive" button, right-aligned to the card edge.

### 3. Quick Actions Dashboard

- **Layout Grid**: An equal-width 5-column fixed grid.
- **Icon styling**: Rounded square dark containers, outlined white icons with yellow accents. Text label centered beneath each icon.
- **Action Items**: **Alpha**, **Securities**, **Earn**, **Referral**, **More**.

### 4. Promotional & Status Widgets

- **Banner Carousel**: Highlights active events (e.g., "Sentio Booster Program Phase 1", "Share $2M rewards"). Dark surface (`#2B3139`) with active swipeable pages and 3-4 pagination dots underneath. Contains a yellow "Join" or "Claim Now" CTA button.
- **Micro-Widgets (Row)**:
  - **Meme Rush**: Displays stats like "1.91K new tokens in 1h" with a navigation chevron (`>`) and 3 overlapping circular token avatars on the bottom left.
  - **Earn Dashboard**: Displays current yield (e.g., "9.62% APY") with a mini bar chart graphic on the right, asset (e.g., circle icon for vbUSDC), a navigation chevron (`>`), and pagination dots below the widget widget.

### 3. Promotional & Status Widgets

- **Banner Carousel**: Highlights active events (e.g., "Sentio Booster Program Phase 1", "Share $2M rewards"). Dark surface (`#2B3139`) with pagination dots and a yellow "Join" button.
- **Micro-Widgets (Row)**:
  - **Meme Rush**: Displays stats like "1.91K new tokens in 1h" with overlapping token avatars.
  - **Earn Dashboard**: Displays current yield (e.g., "9.62% APY") with a mini bar chart graphic and asset (e.g., vbUSDC).

### 5. Dynamic Market Feeds (Tab System)

- **Tab Bar Layout**: Scrollable horizontal tab bar containing: **Watchlist**, **Hot Searches**, **Trending**, **Alpha**. Active tab features text color brightening and an underline highlight.

#### Generic Token Row Layout Details

Every token list item strictly follows a multi-line format:

- **Left Column**: Token Icon (sometimes masked) + Token Name + secondary networking/social badge immediately to the right.
- **Middle/Bottom-Left Block**: Secondary metrics row directly under the Name (e.g., 24h Volume and Market Cap).
- **Right Block**: Right-aligned Price on top, right-aligned 24h Change % directly underneath (Green `#0ECB81` for positive, Red `#F6465D` for negative).

#### Tab-Specific Details:

- **Watchlist Tab**:
  - List Items: Includes an orange favorite star (`⭐`), a green people/social icon next to the token name, the Token chain badge on the icon, and volume/marketcap metrics (e.g., `₹1.33B | ₹21.53T`).
- **Hot Searches Tab**:
  - Secondary Filters: Scrollable horizontal list: **All** (with globe icon), **BSC**, **Solana**, **Ethereum**. Followed by a timeframe dropdown (`1h ˅`).
  - List Items: Token Name is followed by specific mini-badges (e.g., a blue/purple "X" alpha symbol or a green hand icon).
- **Alpha Tab**:
  - Secondary Filters: **All**, **Points+**, **Tokenized Securities**, and timeframe dropdown (`24h ˅`).
  - List Items: Contains circular verification badges (standard `V` checkmark on the token name) and multiplier styling badges (e.g., a yellow `x4`).

### 6. "More" Bottom Sheet Modal

Triggered from the quick links. Covers the bottom area with a full-width modal surface and rounded top corners.

- **Top drag handle**: Centered grey horizontal pill bar at the top edge.
- **Row Components**: Each list item contains:
  - **Left Icon Container**: Square outlined container with the specific graphic.
  - **Label**: Left-aligned white text.
  - **Right Chevron**: Right-aligned gray chevron (`>`).
- Items:
  - **Security Center**
  - **Inscription**
  - **Solana Account Rent Recovery**
  - **Connected DApps**
  - **History**: Wallet/Card icon.

### 7. Bottom Navigation Bar

Fixed block residing at the bottom of the device safe-area. Contains an equal-width 5-tab stack (Icon centered above Text).

- **Tabs**:
  1. **Home**: Currently active indicator (highlighted yellow house).
  2. **Markets** (Line chart).
  3. **Trade** (Exchange arrows).
  4. **Discover** (Compass icon).
  5. **Assets** (Wallet block).

## Visual Fidelity Details

- **Background**: Deep Dark Blue/Grey (`#181A20`).
- **Surface Containers**: Dark Grey (`#2B3139`) for cards, action grids, and pills.
- **Primary Text**: Pure White (`#FFFFFF`).
- **Secondary/Muted Text**: Grey (`#848E9C`).
- **Call to Action (CTA) / Accents**: Brand Yellow (`#FCD535`) used for active states and critical buttons.
- **Status Colors**: Positive Green (`#0ECB81`) and Negative Red (`#F6465D`) for price percentage blocks.
- **Spacing**: Strict `16dp` global horizontal padding. Generous vertical spacing.

---

## Notes

1. The Web3 Wallet Home serves as the main entry point for decentralized finance activities.
2. Multi-chain support allows users to manage assets across different blockchain networks.
3. Featured DApps provide quick access to popular DeFi protocols.
4. Security features include wallet protection settings and QR code scanning.
5. The interface uses the same dark theme as the Exchange interface with Binance Yellow accents.
6. Balance privacy mode allows hiding sensitive financial information.
7. The bottom navigation provides access to Markets, Trade, Discover, and Assets sections.
