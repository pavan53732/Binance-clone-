# 30. Web3 Interface: Assets

Web3 Wallet Assets Interface Documentation

## Overview

This document provides comprehensive documentation of the Binance **Web3 Assets Interface**, the comprehensive portfolio management view for decentralized holdings. It provides a granular breakdown of multi-chain holdings across liquid tokens, DeFi positions, NFTs, and staked assets. This is the DeFi (Decentralized Finance) portfolio interface, separate from the CeFi Exchange assets interface.

---

## UI Components

### 1. Global Header & Wallet Controller

- **Header Actions**:
  - **Hamburger Menu**: Left-aligned access to global app settings.
  - **Network Selector**: Globe-like icon (Top Right) to filter the entire assets view by a specific network (e.g., BNB Chain, ETH).
  - **History Clock**: Quick link to the global transaction log.
- **Wallet Card**:
  - **Identifier**: "Wallet 1" (Dropdown) with a chevron for switching between multiple Web3 wallets.
  - **Copy Address**: Overlapping rectangles icon.
  - **Aggregate Balance**: Bold display of total portfolio value (e.g., INR 95.71).

### 2. Primary Financial Actions

- **Action Grid (Centered 4-column)**:
  - **Send**: Up arrow icon in circular grey enclosure.
  - **Receive**: Down arrow icon in circular grey enclosure.
  - **History**: Square-clock icon; filtered view of asset-specific transactions.
  - **Approvals**: Shield-check icon; tool to manage and revoke token permissions.
- **Wallet Address Row**: Address string with **overlapping rectangles copy icon**.

### 3. Asset Classification (Tabs)

- **Tokens**:
  - **Network Badging**: Asset icons feature a **small circular network badge** at the bottom-right (e.g., a tiny BNB logo on a USDT icon indicating it's on BSC).
  - **Sparklines**: Real-time 24h performance charts next to the token value.
- **DeFi**:
  - **Total Staked**: Aggregate value of all smart contract positions.
  - **Empty State**: Illustration + Yellow "Explore DeFi" hyperlink.
- **NFTs**:
  - **Segmentation**: Sub-tabs for "Assets" and "History".
  - **Network Support**: Footer with logos for **Ethereum, Polygon, and BNB Chain** support.

### 4. Navigation & Tooling

- **Bottom Navigation**: Persistent bar with the "Assets" tab highlighted (Yellow icon and label).
- **Refresh Control**: Pull-to-refresh functionality for updating on-chain balances.

## Visual Fidelity Details

- **Transparency**: The wallet controller card has a subtle gradient/transparency to differentiate it from the scrollable list.
- **Typography**: Numerical precision up to 8 decimal places for token quantities to ensure high accuracy.
- **Iconography**: Custom-designed action icons in a muted grey circular enclosure.
- **Colors**:
  - **Red**: #F6465D (Price drop)
  - **Green**: #0ECB81 (Price increase)
  - **Active Background**: #2B3139 (Component focus)

---

## Notes

1. The Web3 Assets page provides comprehensive portfolio management across multiple chains.
2. Multi-chain support includes BNB Chain, Ethereum, Polygon, and other networks.
3. Asset classification includes Tokens, DeFi positions, and NFTs.
4. Network filtering allows viewing assets on specific blockchains.
5. Token approvals management helps users control dApp permissions.
6. Sparkline charts show 24h price performance for each token.
7. Pull-to-refresh updates on-chain balances in real-time.
8. Numerical precision up to 8 decimal places ensures accurate token quantities.
