# 25. Exchange Interface: Assets

Detailed high-fidelity documentation for the Binance Assets Interface, providing 1:1 parity with the mobile UI components, interactive states, and account segmentation.

## Overview

This document provides comprehensive documentation of the Binance **Exchange Assets Interface**, covering portfolio overview, spot balances, funding accounts, margin positions, futures balances, and Earn products. It details all account-specific features and balance management.

## 1. Global Navigation & Architecture

- **Primary Tab Bar (Sticky)**:
  - **Overview**: Aggregated portfolio metrics.
  - **Funding**: P2P, Card, and Pay balances.
  - **Spot**: Main trading account balances (contains Margin sub-tabs).
  - **Futures**: Derivatives balances (USDⓈ-M and COIN-M).
- **Active State**: Bold white text with a **2dp Yellow underline** indicator (`#F0B90B`).
- **Header Icons (Top Right)**:
  - Vary per active tab.
  - Overview: Chart icon, History (Clock) icon.
  - Funding / Spot: History (Clock) icon only.
  - Futures: Gift icon, Transfer arrows, History icon.

## 2. Global Portfolio Header (All Tabs)

- **Total Balance Display**:
  - Top Row: "Est. Total Value" (Muted `#848E9C`) + Eye Icon (Privacy Toggle).
  - Value Row: Prominent fiat value (e.g., `₹15.27` or `₹0.00`) in **Large** White (`#FFFFFF`), followed by currency dropdown `INR` with a chevron.
  - **Decimal Formatting Rules**: Fiat (`₹`) typically shows 2 decimals. Crypto balances show variable precision based on asset. Margin metrics show exactly 8 decimals.
- **Portfolio PNL Tracker**: Horizontal row showing "Today's PNL" and value. Green for Profit (`#0ECB81`), Red for Loss (`#F6465D` e.g., `-₹0.0822033(-0.54%)`).

## 3. Account-Specific Tab Details

### A. Overview Tab

- **Primary Action Bar**:
  - **Add Funds**: Solid Binance Yellow background (`#FCD535`) with Black text (`#0B0E11`). Rounded bounds (`8dp`).
  - **Send**: Secondary Dark Grey background (`#2B3139`) with White text.
  - **Transfer**: Secondary Dark Grey background (`#2B3139`) with White text.
- **Sub-Navigation**: "Crypto" (Active with short yellow underline) and "Account" (Muted).
  - **Search & Settings Icons**: Aligned right, directly opposite the Crypto/Account tabs. A magnifying glass (Search) and a Hexagon (Settings).
- **Asset List Item (Crypto View)**:
  - Top Row: Circular asset logo (e.g., OG, NOT).
  - Center Stack: Asset Ticker (White, SemiBold). Below it, the Full Name (e.g., "Notcoin") and "Today's PNL".
  - Right Stack (End Aligned): Asset Quantity (White). Below it, fiat valuation and exact PNL % change shown together (e.g., `₹1,245.00 (+1.2%)`).
  - **Navigation**: Clickable chevron `>` indicating navigation to detail page (e.g., `OG/USDC >`).
  - **Action Button Row (Margin Top)**: Two buttons per asset, right-aligned: **"Earn"** and **"Trade"**. Both use Dark Grey `#2B3139` backgrounds, White text, `4dp` corner radius.
- **Account View**:
  - Lists segregated portfolio allocations (e.g., Spot wallet total, Funding wallet total) instead of individual crypto assets.

### B. Funding Tab

- **Action Bar**:
  - Contains `Add Funds` (Yellow), `Send` (Dark Grey), `Transfer` (Dark Grey).
- **Features Section**:
  - `Small Amount Exchange`: Feature block located directly above the balances list.
- **Balances Section**:
  - Title: "Balances"
  - Lists funding assets. Search and Hexagon (Settings) icons aligned right on the header row.
  - Asset Row layout matches Overview (crypto name, quantity, and fiat valuation).

### C. Spot Tab (Includes Margin Sub-Tabs)

- **Top Navigation**:
  - Tabs: "Spot" (Active dark pill), "Cross Margin", "Isolated Margin" (Transparent pills).
- **Primary Action Bar (Spot)**: Identical to Overview (`Add Funds`, `Send`, `Transfer`).
- **Asset List Section**:
  - Header: "Balances" (`18sp`, `SemiBold`, White) + Search Magnifying Glass right aligned.
  - List Item: Token Logo + Ticker (`USDT`) + Full Name (`TetherUS`, muted `#848E9C`). Right aligned is the raw balance (`0.00`). No `Earn`/`Trade` buttons show here.

### D. Cross Margin Tab

- **Header Additions**:
  - Four explicit numeric fields: `Borrow Margin level`, `Transfer-Out Margin Level`, `Total Debt (INR)`, and `Total Equity (INR)`.
- **Feature Options (Under Header)**:
  - Links for `Small Amount Exchange` and a `Debt Convert` icon button.
- **Asset Row Layout (2x2 Grid)**:
  - Unlike Spot, margin assets display four discrete data points per token.
  - Top Left: `Available` value | Top Right: `Equity` value.
  - Bottom Left: `Borrowed` value | Bottom Right: `Interest` value.

### E. Isolated Margin Tab

- **Header Additions**:
  - Top Right String: "Active: 0/15" (`12sp`, Yellow `#FCD535`) indicating active isolated pairs. Positioned on the right side of the header row, aligned with the "Est. Total Value" row.
  - Under PNL Tracker: Two columns showing "Total Debt" and "Total Equity".
- **Primary Action Bar**:
  - **Borrow**: Solid Yellow (`#FCD535`), Black text.
  - **Repay**: Dark Grey (`#2B3139`), White text.
  - **Transfer**: Dark Grey (`#2B3139`), White text.
- **Isolated Asset Card (Highly Detailed)**:
  - **Header Row**: Pair Name (e.g., `OG/USDC` `16sp`, White). Clickable navigation chevron `>` to pair details. Next to it, a **"5x" Margin Pill** (Transparent background, grey stroke, `10sp`).
  - **Risk Gauge (Right Aligned)**: Speedometer Icon (`14x14dp`) + "Margin level 999.00" (Text and icon strictly Green `#0ECB81`, `13sp`, `Medium`).
  - **3-Column Data Grid (Margin Top `16dp`)**:
    - **Column 1**: Base Asset (e.g., "OG Balance", "USDC Balance").
    - **Column 2**: Borrowed Amounts ("OG Borrowed", "USDC Borrowed").
    - **Column 3 (End Aligned)**: Equity ("OG Equity", "USDC Equity").

### F. Futures Tab

- **Activation Banner (Conditional)**:
  - Yellow-accented banner: "All your assets have been transferred to the Spot wallet since your account is inactive. Click Activate and you can reactivate your UM Futures account at any time." + an `Activate` CTA.
- **Header Top Right Actions**:
  - Contains three specific icons: **Gift Icon** (with yellow notification dot), **Transfer Arrows** (distinct from the main transfer button), and **History Icon**.
- **Utilities Panel (Earning Modules)**:
  - Situated below the header. Features rows/cards for `BNB Discount 10%` (toggle switch), `BFUSD Earning` (e.g., `APR 1.10%`), `LDUSDT Earning`, and `RWUSD Earning`.
- **Sub-Navigation State**:
  - Top Modifiers: `USDⓈ-M` and `COIN-M` sub-tabs. The active tab has a dark pill background highlight.
  - Bottom Segment: Toggles between `Positions` and `Assets`.
- **Empty State (Positions)**:
  - If no positions exist, renders a plus illustration graphic and the text "You have no positions."

## 4. Visual Specifications

- **Background Palette**:
  - Main Page: `#0B0E11` (Deep Black).
  - Component Surfaces: `#2B2F36` (Dark Grey).
- **Typography**:
  - **Balances**: Bold Inter/Roboto, 24sp+.
  - **Labels**: Regular 12sp, Muted `#848E9C`.
- **Spacing**: 16dp global horizontal padding; 8dp vertical gap between list items.
- **Corning**: 8dp radius for all action buttons and primary cards.
- **Specific Iconography**:
  - **Speedometer Icon**: Used exclusively for margin risk gauges.
  - **Gift Icon**: Used in Futures tab headers for campaigns/rewards.
  - **Hexagon Icon**: Used for tab-specific settings configurations.
  - **Debt Convert Icon**: Distinct asset conversion action inside Cross Margin.

---

## Notes

1. The Assets page provides a comprehensive view of all account balances across different product types.
2. Users can view Spot, Funding, Margin, Futures, and Earn balances in one place.
3. Privacy mode allows users to hide their balance values.
4. Margin account risk levels are displayed with visual gauges.
5. Quick actions include Deposit, Withdraw, and Transfer between accounts.
6. Small asset conversion helps users consolidate dust balances into BNB.
7. Real-time price updates and PNL tracking are available for all holdings.
