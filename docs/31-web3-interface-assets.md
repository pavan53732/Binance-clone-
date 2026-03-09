# Web3 Wallet Assets Interface Documentation

## Screen Overview

The Web3 Assets page is the comprehensive portfolio management view. It provides a granular breakdown of multi-chain holdings across liquid tokens, decentralized finance (DeFi) positions, and non-fungible tokens (NFTs).

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

- **Send**: Up arrow icon; initiates the transaction flow for transferring tokens out.
- **Receive**: Down arrow icon; displays QR code and public addresses for incoming transfers.
- **History**: Square-clock icon; filtered view of asset-specific transactions.
- **Approvals**: Shield-check icon; tool to manage and revoke token permissions granted to various Smart Contracts.

### 3. Asset Classification (Tabs)

- **Tokens**:
  - **Sorting**: Horizontal sliders icon to sort by Value, Name, or 24h Change.
  - **Network Overlays**: Token logos feature a small circular network icon at the bottom-right (e.g., the BNB logo inside a yellow hexagon for BNB Chain).
  - **Market Performance**: Real-time price and percentage change (Green for gain, Red for loss).
- **DeFi**:
  - **Status Notice**: "The asset data updates might be delayed by a few minutes..." alert box with an info icon.
  - **Empty State**: Illustration with "You have no assets yet" and a yellow "Explore DeFi" link.
- **NFTs**:
  - **Segmentation**: Sub-tabs for "Assets" and "History".
  - **Network Support**: Informational footer stating support for Ethereum, Polygon, and BNB Chain networks.

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
