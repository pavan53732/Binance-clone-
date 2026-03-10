# 28. Web3 Interface: Trade

Web3 Wallet Swap Interface Documentation

## Overview

This document provides comprehensive documentation of the Binance **Web3 Trade (Swap) Interface**, a multi-functional trading portal providing three distinct modes of decentralized asset exchange: standard swapping, cross-chain bridging, and professional-grade trading. This is the DeFi (Decentralized Finance) trading interface, operating distinctly from the CeFi Exchange trade interface.

---

## 1. Global Navigation & Architecture

### Top Header Bar

- **Tabs**: `Swap` | `Bridge` | `Pro`
  - Active state is indicated by bold, bright white text (`#FFFFFF`) with no underline, while inactive tabs are bolded muted grey (`#848E9C`).
- **Global Actions (Right-Aligned)**:
  - **History Icon**: A clock overlaying a document icon (`O` with an inner circle and clock hands over a square).
  - **Settings Icon**: Vertical slider controls icon.

### Bottom Navigation Bar (Persistent)

- The fixed bottom control bar features 5 navigation tabs.
- **Home**: House icon
- **Markets**: Upward trend line icon
- **Trade**: Swap arrows icon (Active state: `[#FFFFFF]` with yellow vertical indicator line underneath).
- **Discover**: Compass icon
- **Assets**: Wallet box icon

---

## 2. Swap Tab Interface

The Swap tab facilitates standard on-chain token exchanges within a single network.

### A. "From" Card Layout

- **Top Row (Right)**:
  - **Source Toggle**: `Use Exchange Balance` text + native toggle switch (Yellow when active).
- **Main Input Row**:
  - Token Logo (e.g., `BNB`).
  - Ticker Dropdown: `BNB ▼`.
  - Main Input Value: `0.00`.
- **Sub-info Row**:
  - Under Ticker: Network name (e.g., `BNB Chain Nativ...`).
  - Under Input: Fiat Equivalent (e.g., `≈--`) and a yellow `Max` button link.
- **Footer Row**:
  - Left-aligned: `Exchange` text.
  - Right-aligned: `Avbl 0` | Yellow action link `Add Funds`.

### B. Center Action Icon

- A circle containing a single downward pointing arrow `↓`.

### C. "To" Card Layout

- **Main Input Row**:
  - Token Logo (e.g., `USDT` with Tether icon overlay).
  - Ticker Dropdown: `USDT ▼`.
  - Placeholder: `--`.
- **Sub-info Row**:
  - Under Ticker: Token name (e.g., `Tether USDT`).
  - Under Placeholder: Fiat Equivalent (e.g., `≈--`).
- **Footer Row**:
  - Left-aligned: Wallet destination dropdown (e.g., `Wallet1...7bf4 ▼`).
  - Right-aligned: Wallet icon + destination balance `0`.

### D. Main CTA

- Large muted/disabled dark yellow button: `Enter Amount` (Inactive state).

---

## 3. Bridge Tab Interface

The Bridge tab handles cross-chain transfers between supported networks (e.g., BNB Chain to Ethereum).

### A. "From" Card Layout

- **Top Row**: No `Use Exchange Balance` toggle present.
- **Main Input Row**:
  - Token Logo (e.g., `BNB` with chain hex overlay).
  - Ticker Dropdown: `BNB ▼`.
  - Main Input Value: `0.00`.
- **Sub-info Row**:
  - Under Ticker: Network name (e.g., `BNB Chain Nativ...`).
  - Under Input: Fiat Equivalent (e.g., `≈--`).
- **Footer Row**:
  - Left-aligned: Source wallet dropdown (e.g., `Wallet1...7bf4 ▼`).
  - Right-aligned: Wallet icon + source balance (e.g., `0.00099484`) | Yellow `Max` button.

### B. Center Action Icon

- A circle containing two vertical opposite-facing arrows (`11` pointing up and down).

### C. "To" Card Layout

- **Main Input Row**:
  - Token Logo (e.g., `ETH` with ETH diamond overlay).
  - Ticker Dropdown: `ETH ▼`.
  - Placeholder: `--`.
- **Sub-info Row**:
  - Under Ticker: Token name (e.g., `Ether`).
  - Under Placeholder: Fiat Equivalent (e.g., `≈--`).
- **Footer Row**:
  - Left-aligned: Destination wallet dropdown (e.g., `Wallet1...7bf4 ▼`).
  - Right-aligned: Wallet icon + destination balance `0`.

### D. Main CTA

- Large muted/disabled dark yellow button: `Enter Amount` (Inactive state).

---

## 4. Pro Tab Interface

The Pro tab is divided vertically, offering advanced trading with order books.

### A. Token Pair Header

- Token Logo (e.g., `USDT` with Tether icon) + Ticker Dropdown `USDT ▼`.

### B. Left Panel (Market Data)

- **Token Stats Column**:
  - `Market Cap`: `--`
  - `24h vol`: `--`
  - `Liquidity`: `--`
  - `Holders`: `--`
- **Current Price Header**: Right-aligned price `--` over fiat `₹0 --`.
- **Order Book Frame**:
  - Header: `Price ⇋` | `Time`.
  - Depth Visualizer: Dual columns showing red/green blurred pill shapes indicating market bids/asks.
  - Depth Bar: Horizontal gradient bar from green `0%` to red `100%`.
  - Timeframe Dropdown: `24h ▼`.

### C. Right Panel (Trade Controller)

- **Action Switch**: Segmented control pill `[ Buy | Sell ]` (Active Buy is Green, inactive Sell is outlined grey).
- **Order Type Dropdown**: Info `ⓘ` icon + `Market ▼`.
- **Amount Input**: Minus `-` | `BNB Amount` placeholder | Plus `+`.
- **Allocation Slider**: Track with 5 diamond markers `◇` (`0%`, `25%`, `50%`, `75%`, `100%`).
- **Value Input**: `₹ Value` placeholder frame.
- **Trade Info Block**:
  - `Available` + Yellow plus icon `⊕` + `0.00099484 BNB` + Right Chevron `>`.
  - `Est. Receive`: `-- USDT`.
  - `Service Fee`: `--`.
  - `Wallet`: `Wallet1...7bf4 >`.
  - `Sell half at double`: Text with Checkbox square `[ ]`.
  - Slippage/Gas Row: Chart trend icon `📉` + `Max 20%` | Gas symbol ⛽ + `₹6.1` + Right Chevron `>`.
  - Strategy Indicator: Shield checkmark icon `[v] Auto`.
- **Main CTA**: Large Green button `Buy USDT`.

### D. Floating Bottom Data Bar

- Appears floating above the global Bottom Navigation.
- Includes text `USDT Chart` | `-- --` | `^` (Upward Chevron to expand).

---

## 5. Persistent Order Management Section (All Tabs)

Located globally below the main swap/trade action UI components on all three tabs.

- **Tab Navigation**:
  - `Open Orders` (Active, yellow indicator underline)
  - `Order History`
  - `My Positions (3)`
- **Filter Row**:
  - Checkbox: `[ ] Only show current token`
  - View Options (Right-aligned): Globe Outline Icon | Funnel (Filter) Icon.
- **Empty State**:
  - Graphic: Large document outline with a magnifying glass examining a page containing an exclamation mark `!`.
  - Text: "No orders".

---

## Visual Fidelity Details

- **Global Style Tokens**:
  - Background: `#181A20` | Surface Containers: `#2B3139`.
  - Primary Text: `#FFFFFF` | Muted Text: `#848E9C`.
  - Brand Accents/CTA: Binance Yellow `#FCD535`.
  - Buy/Positive Actions: Green `#0ECB81`.
  - Sell/Negative Actions: Red `#F6465D`.
  - Horizontal Padding: Strict `16dp`.
- **Avatars**: Small overlapping circles in the bottom right corner indicate the specific blockchain network (e.g., yellow hex for BSC, purple diamond for ETH).
