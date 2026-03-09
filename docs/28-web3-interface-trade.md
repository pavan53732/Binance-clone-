# 28. Web3 Interface: Trade

Web3 Wallet Swap Interface Documentation

## Overview

This document provides comprehensive documentation of the Binance **Web3 Trade (Swap) Interface**, a multi-functional trading portal providing three distinct modes of decentralized asset exchange: standard swapping, cross-chain bridging, and professional-grade trading. It integrates on-chain liquidity with decentralized routing protocols. This is the DeFi (Decentralized Finance) trading interface, separate from the CeFi Exchange trade interface.

---

## UI Components

### 1. Operation Modes (Top Navigation)

- **Swap**: Standard on-chain token exchange.
- **Bridge**: Cross-chain asset transfers between supported networks (e.g., BNB Chain to Ethereum).
- **Pro**: Advanced trading interface with order books and complex order types.
- **Action Icons** (Top Right):
  - **History Icon**: Access to past swaps and bridge transactions.
  - **Settings Icon**: Slippage tolerance, transaction deadline, and gas preference settings.

### 2. Standard Swap Interface

- **From Section**:
  - **Token Selector**: Dropdown (e.g., BNB) with balance display.
  - **Source Toggle**: "Use Exchange Balance" switch (Yellow) for CEX integration.
  - **Action**: "Add Funds" link if balance is zero.
- **To Section**:
  - **Token Selector**: Dropdown (e.g., USDT).
  - **Destination Tracker**: Wallet address preview and balance.
- **Main Action**: "Enter Amount" large button (Grey/Disabled until input).

### 3. Professional Trading (Pro Mode)

- **Trade Controller** (Right Panel):
  - **Buy/Sell Switch**: Segmented control (Green/Red).
  - **Order Type**: Dropdown for `Market`, `Limit`, etc.
  - **Amount/Value Inputs**: Numerical fields for token quantity or fiat value.
  - **Allocation Slider**: Percentage bar with diamond markers (0%, 25%, 50%, 75%, 100%).
  - **Strategy Options**: "Sell half at double" checkbox for automated profit-taking.
  - **Trade Info**: Available balance, Estimated receive, Service fee, Wallet selection.
  - **Main CTA**: "Buy USDT" (Green) or "Sell USDT" (Red) large button.
- **Market Data** (Left Panel):
  - **Order Book**: Real-time visualization of bids/asks with red/green depth bars.
  - **Token Stats**: Market Cap, 24h Vol, Liquidity, and Holder count.

### 4. Cross-Chain Bridge

- **Visuals**: Central icon changes to horizontal exchange arrows.
- **Network Routing**: Indicators for source and destination chains.
- **Bridge Partners**: Display of the routing provider used for the bridge.

## Visual Fidelity Details

- **Order Book Highlighting**: Dynamic flickering of numbers to represent active market matching.
- **Allocation Diamonds**: Diamond markers turn yellow when selected.
- **Input Fields**: Focus state indicated by a subtle border highlight.
- **Footer**: Integrated tab bar for quick navigation between Home, Markets, Trade, etc.

---

## Notes

1. The Web3 Trade interface provides three trading modes: Swap, Bridge, and Pro.
2. Swap mode offers standard on-chain token exchanges with slippage settings.
3. Bridge mode enables cross-chain transfers between different blockchain networks.
4. Pro mode provides professional trading features with order books and advanced order types.
5. Users can toggle between Exchange balance and wallet balance for transactions.
6. Real-time order book visualization shows market depth.
7. The interface integrates Binance liquidity with decentralized routing for best execution.
