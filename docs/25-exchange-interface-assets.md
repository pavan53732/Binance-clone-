# 25. Exchange Interface: Assets

Detailed high-fidelity documentation for the Binance Assets Interface, providing 1:1 parity with the mobile UI components, interactive states, and account segmentation.

## Overview

This document provides comprehensive documentation of the Binance **Exchange Assets Interface**, covering portfolio overview, spot balances, funding accounts, margin positions, futures balances, and Earn products. It details all account-specific features and balance management.

## 1. Global Navigation & Architecture

- **Primary Tab Bar (Sticky)**:
  - **Overview**: Aggregated portfolio metrics.
  - **Spot**: Main trading account balances.
  - **Funding**: P2P, Card, and Pay balances.
  - **Margin**: Cross and Isolated margin positions.
  - **Futures**: derivatives balances (USDⓈ-M and COIN-M).
  - **Earn**: Staked and interest-bearing holdings.
- **Active State**: Bold white text with a **2dp Yellow underline** indicator (`#F0B90B`).
- **Header Icons (Top Right)**:
  - **PNL Chart Icon**: Links to detailed profit/loss analysis.
  - **History (Clock) Icon**: Links to transaction logs.

## 2. Global Portfolio Header (All Tabs)

- **Total Balance Display**:
  - Top Row: "Est. Total Value" (`13sp`, Muted `#848E9C`) + Eye Icon (Privacy Toggle).
  - To the right: PNL Chart Icon and History (Document with Clock) Icon.
  - Value Row: Prominent fiat value (e.g., `₹15.27` or `₹0.00000000`) in **Bold 32sp** White (`#FFFFFF`), followed by currency dropdown `INR` with a chevron.
- **Portfolio PNL Tracker**: Horizontal row showing "Today's PNL" and value. Green for Profit (`#0ECB81`), Red for Loss (`#F6465D` e.g., `-₹0.0822033(-0.54%)`). `13sp`, `FontWeight.Medium`.

## 3. Account-Specific Tab Details

### A. Overview Tab

- **Primary Action Bar**:
  - **Add Funds**: Solid Binance Yellow background (`#FCD535`) with Black text (`#0B0E11`). Rounded bounds (`8dp`).
  - **Send**: Secondary Dark Grey background (`#2B3139`) with White text.
  - **Transfer**: Secondary Dark Grey background (`#2B3139`) with White text.
- **Sub-Navigation**: "Crypto" (Active with short yellow underline) and "Account" (Muted). Search and Hexagon Settings icon aligned right.
- **Asset List Item (Crypto)**:
  - Top Row: Circular asset logo (e.g., OG, NOT).
  - Center Stack: Asset Ticker (White, `16sp`, `SemiBold`). Below it, the Full Name (e.g., "Notcoin") and "Today's PNL".
  - Right Stack (End Aligned): Asset Quantity (White, `16sp`). Below it, fiat valuation and exact PNL % change.
  - **Action Button Row (Margin Top)**: Two buttons per asset, right-aligned: **"Earn"** and **"Trade"**. Both use Dark Grey `#2B3139` backgrounds, `12sp` White text, `4dp` corner radius.

### B. Spot Tab

- **Margin Top Navigation**:
  - Tabs: "Spot" (Active dark pill), "Cross Margin", "Isolated Margin" (Transparent pills).
- **Primary Action Bar**: Identical to Overview (`Add Funds`, `Send`, `Transfer`).
- **Asset List Section**:
  - Header: "Balances" (`18sp`, `SemiBold`, White) + Search Magnifying Glass right aligned.
  - List Item: Token Logo + Ticker (`USDT`) + Full Name (`TetherUS`, muted `#848E9C`). Right aligned is the raw balance (`0.00`). No `Earn`/`Trade` buttons show here.

### C. Isolated Margin Tab

- **Header Additions**:
  - Top Right: "Active: 0/15" (`12sp`, Yellow `#FCD535`) indicating active isolated pairs.
  - Under PNL Tracker: Two columns showing "Total Debt (INR)" and "Total Equity (INR)", values exactly matching formatting constraints.
- **Primary Action Bar**:
  - **Borrow**: Solid Yellow (`#FCD535`), Black text.
  - **Repay**: Dark Grey (`#2B3139`), White text.
  - **Transfer**: Dark Grey (`#2B3139`), White text.
- **Isolated Asset Card (Highly Detailed)**:
  - **Header Row**: Pair Name (e.g., `OG/USDC` `16sp`, White). Next to it, a **"5x" Margin Pill** (Transparent background, grey stroke, `10sp`).
  - **Risk Gauge (Right Aligned)**: Speedometer Icon (`14x14dp`) + "Margin level 999.00" (Text and icon strictly Green `#0ECB81`, `13sp`, `Medium`).
  - **3-Column Data Grid (Margin Top `16dp`)**:
    - **Column 1**: Base Asset (e.g., "OG Balance", "USDC Balance").
    - **Column 2**: Borrowed Amounts ("OG Borrowed", "USDC Borrowed").
    - **Column 3 (End Aligned)**: Equity ("OG Equity", "USDC Equity").
    - Data Typography: Labels are Muted `#848E9C` (`12sp`), Values are White (`14sp`, `Medium`).

### D. Futures Tab (Activation & Balances)

- **Futures Utilities**:
  - Margin Mode Tabs: USDⓈ-M and COIN-M selection.
  - Identical data structures to margin, emphasizing Unrealized PNL and isolated position allocations.

## 4. Visual Specifications

- **Background Palette**:
  - Main Page: `#0B0E11` (Deep Black).
  - Component Surfaces: `#2B2F36` (Dark Grey).
- **Typography**:
  - **Balances**: Bold Inter/Roboto, 24sp+.
  - **Labels**: Regular 12sp, Muted `#848E9C`.
- **Spacing**: 16dp global horizontal padding; 8dp vertical gap between list items.
- **Corning**: 8dp radius for all action buttons and primary cards.

---

## Notes

1. The Assets page provides a comprehensive view of all account balances across different product types.
2. Users can view Spot, Funding, Margin, Futures, and Earn balances in one place.
3. Privacy mode allows users to hide their balance values.
4. Margin account risk levels are displayed with visual gauges.
5. Quick actions include Deposit, Withdraw, and Transfer between accounts.
6. Small asset conversion helps users consolidate dust balances into BNB.
7. Real-time price updates and PNL tracking are available for all holdings.
