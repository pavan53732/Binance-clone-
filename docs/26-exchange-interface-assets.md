# 26. Exchange Interface: Assets Page

Detailed high-fidelity documentation for the Binance Assets Interface, providing 1:1 parity with the mobile UI components, interactive states, and account segmentation.

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

## 2. Portfolio Overview (Global Card)

- **Total Balance Display**:
  - Prominent fiat value (e.g., INR or BTC) in **Bold 28sp**.
  - **Privacy Toggle**: Small eye icon to mask values with asterisks (`****`).
  - **Estimated Value**: Muted secondary text showing the value in a secondary currency.
- **Portfolio PNL Tracker**: Horizontal row showing 24h PNL percentage and value (Green for Profit `#0ECB81`, Red for Loss `#F6465D`).
- **Primary Sticky Action Bar**:
  - **Deposit** (or Add Funds): Solid **Binance Yellow** background (`#F0B90B`) with Black text.
  - **Withdraw** (or Send): Secondary Grey background (`#2B2F36`) with White text.
  - **Transfer**: Secondary Grey background (`#2B2F36`) with White text.

## 3. Account-Specific Micro-Details

### A. Spot & Funding Tabs

- **Utility Row**:
  - **Search Bar**: Rounded input with magnifying glass icon.
  - **Hide 0 Balance**: Checkbox toggle (Square with yellow check when active).
  - **Small Asset Exchange**: Text link "Convert Small Assets to BNB" with a subtle chevron.
- **Asset List Item**:
  - Left: Circular icon + Symbol (Bold) + Full Name (Muted).
  - Right: Total Amount (Bold) + Fiat Valuation (Muted) + **24h Sparkline/Price Change PNL**.

### B. Margin Tab (Risk Management)

- **Margin Level Gauge**:
  - Semi-circular or linear gauge showing risk levels from **Low (Green)** to **Liquidation (Red)**.
  - Numerical value shown in the center (e.g., "999.00" for low risk).
- **Sub-Tabs**: Pill-style selection for "Cross" and "Isolated" margin modes.
- **Actions**: `Borrow` (Yellow filled), `Repay` (Grey), `Transfer` (Grey).

### C. Futures Tab (Activation & Activation)

- **Futures Activation Banner**: Yellow background banner for inactive accounts: "Activate your Futures account to start trading" + **Solid Yellow "Activate" button**.
- **Margin Mode Tabs**: USDⓈ-M and COIN-M selection.
- **PNL Display**: Real-time update of "Unrealized PNL" for open positions.

## 4. Visual Specifications

- **Background Palette**:
  - Main Page: `#0B0E11` (Deep Black).
  - Component Surfaces: `#2B2F36` (Dark Grey).
- **Typography**:
  - **Balances**: Bold Inter/Roboto, 24sp+.
  - **Labels**: Regular 12sp, Muted `#848E9C`.
- **Spacing**: 16dp global horizontal padding; 8dp vertical gap between list items.
- **Corning**: 8dp radius for all action buttons and primary cards.
