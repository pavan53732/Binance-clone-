# 26. Exchange Interface: Assets Page

Detailed high-fidelity documentation for the Binance Assets (Wallet) Interface, covering portfolio overview, account segmentations, and detailed balance views.

## 1. Global Navigation & Segmentation

- **Primary Tabs (Top Scrollable):**
  - **Overview:** Aggregated view of all sub-accounts.
  - **Funding:** Primarily for P2P and Card deposits.
  - **Spot:** Main trading account balances.
  - **Futures:** Derivatives trading account (USD-M/COIN-M).
  - **Earn:** Staked and interest-bearing assets.
- **Estimated Total Value:** Large prominent display in a selected currency (e.g., INR or BTC) with a "Hide Balance" eye icon.
- **PNL Tracker:** Small percentage and absolute change value (e.g., -0.54%) showing 24h performance.

## 2. Core Actions (Action Bar)

- **Add Funds:** Highlighted yellow button for deposits/buys.
- **Send:** Button for withdrawals/transfers to external wallets or contacts.
- **Transfer:** Button for internal movement between sub-accounts (e.g., Spot to Futures).
- **History Icon:** Document icon at the top right to view transaction history.

## 3. Account Specific Details (Sub-Views)

### A. Spot / Funding Segment

- **Small Amount Exchange (Convert to BNB):** Banner for sweeping dust balances into BNB.
- **Cryptocurrency List:** Individual asset cards showing:
  - Logo & Ticker (e.g., USDT, BTC).
  - Available Balance & Total Equity.
  - 24h PNL per asset (e.g., +0.56%).
  - Inline action buttons: "Earn" and "Trade".

### B. Margin Segment (Cross & Isolated)

- **Risk Metrics:**
  - **Margin Level:** Gauge or numerical value (e.g., 999.00 indicates low risk).
  - **Total Debt & Equity:** Prominent displays for borrowed vs. owned values.
- **Margin Actions:** "Borrow", "Repay", and "Transfer" buttons.
- **Debt Convert:** Specialized tool for managing interest/repayments.

### C. Futures Segment

- **Balance Types:**
  - **Margin Balance:** Total available for collateral.
  - **Wallet Balance:** Total assets in the futures account.
  - **Unrealized PNL:** Real-time fluctuates based on open positions.
- **Action Row:** "Trade", "Swap", "Transfer".
- **Positions/Assets Toggle:** Bottom panel to switch between active trades and held tokens.

## 4. Visual Micro-Details

- **Hide Balance Toggle:** Replaces all numerical values with asterisks (**\*\***) when inactive.
- **Currency Dropdown:** Clickable label next to the total value (e.g., "INR") to switch between global currencies/BTC.
- **Progressive Loading:** Smooth entry of asset rows with fade-in animations.
- **Alerts:** "Inactive" account banners with "Activate" action buttons.

## 5. Visual Specifications

- **Negative Values:** Red with minus sign (e.g., -₹0.08).
- **Positive Values:** Green with plus sign (e.g., +$0.55).
- **Empty State Graphics:** Minimalist line-art icons for "No Positions" or "No assets found".
