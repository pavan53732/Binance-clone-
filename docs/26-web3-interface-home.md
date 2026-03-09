# 26. Web3 Interface: Home

Web3 Wallet Home Interface Documentation

## Overview

This document provides comprehensive documentation of the Binance **Web3 Wallet Home Interface**, the primary gateway to decentralized applications (DApps) and multi-chain asset management. It features a simplified portal compared to the Exchange homepage, prioritizing security, wallet management, and DeFi ecosystem discovery. This is the DeFi (Decentralized Finance) interface, separate from the CeFi Exchange interface.

---

## UI Components

### 1. Global Header

- **Menu Trigger**: Three-line hamburger icon (Top Left).
- **Title**: "Web3 Wallet" centered text.
- **Action Icons** (Top Right):
  - **Shield Icon**: Access to security settings and wallet protection.
  - **Scanner Icon**: QR code scanner for DApp connections (WalletConnect).
  - **Profile Icon**: Link to User ID and general settings.

### 2. Wallet Multi-Chain Controller

- **Selector**: Dropdown displaying "Wallet 1" (or custom name) with a chevron down icon.
- **Copy Address**: Overlapping squares icon to copy the current active wallet address.
- **Total Balance**: Large font display of aggregate value across all supported chains (e.g., INR, USD).
- **Visibility Toggle**: Eye icon to hide/show balances.
- **Management**: "Manage Wallets" text link at the bottom of the controller card.

## Component Breakdown

### 1. Header & Navigation Zone

- **Top Bar**: Hamburger menu (left), "Exchange | Wallet" pill toggle (center, "Wallet" active), Support (headphone) and QR Code Scanner icons (right).
- **Search Bar**: Full-width search input field immediately below the top bar.

### 2. Account Summary & Core Actions

- **Wallet Selector**: "Wallet1" dropdown to switch wallets, accompanied by a copy address icon.
- **Total Balance**: Large fiat display (e.g., "₹95.53").
- **Primary CTA**: Large, solid yellow (`#FCD535`) "Receive" button parked to the right of the balance.
- **Action Dashboard (Quick Links)**: A horizontal row of rounded square outlined icons.
  - Items in view: **Alpha**, **Securities**, **Earn**, **Referral**, **More**.

### 3. Promotional & Status Widgets

- **Banner Carousel**: Highlights active events (e.g., "Sentio Booster Program Phase 1", "Share $2M rewards"). Dark surface (`#2B3139`) with pagination dots and a yellow "Join" button.
- **Micro-Widgets (Row)**:
  - **Meme Rush**: Displays stats like "1.91K new tokens in 1h" with overlapping token avatars.
  - **Earn Dashboard**: Displays current yield (e.g., "9.62% APY") with a mini bar chart graphic and asset (e.g., vbUSDC).

### 4. Dynamic Market Feeds (Tabbed Data List)

Tabs available: **Watchlist**, **Hot Searches**, **Trending**, **Alpha**.

- **Hot Searches Tab**:
  - Secondary Filters: **All**, **BSC**, **Solana**, **Ethereum**. Followed by a timeframe dropdown (`1h`).
  - List Items: Token Icon (with network badge e.g. yellow BSC cube). Token Name (with X icon to remove). 24h Volume. Current Price. 24h Change %.
- **Alpha Tab**:
  - Secondary Filters: **All**, **Points+**, **Tokenized Securities**.
  - List Items: Token name followed by special badges (e.g., a yellow `x4` badge for points multipliers).

### 5. "More" Bottom Sheet Modal

Triggered from the quick links. Covers the bottom area with rounded tops.

- List items with right-facing chevrons (`>`):
  - **Security Center**
  - **Inscription**
  - **Solana Account Rent Recovery**
  - **Connected DApps**
  - **History**: Wallet/Card icon with yellow dot indicator for new notifications.

## Visual Fidelity Details

- **Background**: Deep Dark Blue/Grey (`#181A20`).
- **Surface Containers**: Dark Grey (`#2B3139`) for cards, action grids, and pills.
- **Primary Text**: Pure White (`#FFFFFF`).
- **Secondary/Muted Text**: Grey (`#848E9C`).
- **Call to Action (CTA) / Accents**: Brand Yellow (`#FCD535`) used for active states and critical buttons.
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
