# 24. Exchange Interface: Markets Page

High-fidelity documentation of the Binance Markets Interface, covering all navigational elements, sorting mechanisms, and data visualization components.

## 1. Page Header & Navigation

- **Search Component**:
  - Rounded input field with approx. `20dp` corner radius.
  - Background color: `#1E2329` (Dark Grey).
  - Magnifying glass icon (Left); placeholder text "Search Coin Pairs" (Muted Grey).
  - _Note_: This header lacks the Notification/Pay icons found on the Home screen in this version.
- **Primary Tab Navigation**:
  - Tabs: **Favorites, Market, Alpha, Grow, Square, Data**.
  - **Active Indicator**: Thick yellow horizontal bar (`#F0B90B`) below the active tab text.
  - **Inactive State**: Muted grey text (`#707A8A`) with no underline.

## 2. Favorites Tab (Grid Specification)

- **Layout**: 2-column vertical grid of asset cards.
- **Card Components**:
  - **Ticker Pair**: e.g., `BTC/USDT` (Bold White).
  - **Change Percentage**: Percentage pill (Green/Red) positioned centrally.
  - **Checkboxes**: Top-right corner of each card for batch deleting/moving.
- **Primary CTA**: Large full-width yellow "Add Favorites" button at the bottom navigation anchor.

## 3. Market Tab (List Specification)

- **Filter Chips**:
  - Horizontally scrollable list of rounded pills: `USDT`, `FDUSD`, `BTC`, `ETH`, `BNB`, `Alts`, `Innovation`, `Liquid Staking`.
  - **Active Pill**: Yellow background with dark text.
  - **Inactive Pill**: Dark grey background with light text.
- **Table Headers (Sticky)**:
  - `Name / Vol`, `Last Price`, `24h Chg%`.
  - Sorting: Dual-arrow (Up/Down) ivory/grey icons next to each header.
- **Asset Row Micro-Details**:
  - **Left Section**:
    - Asset circular icon.
    - Symbol (Bold white) on top; 24h Volume or Full Name (Muted regular) below.
  - **Center Section**:
    - Last Traded Price (Bold white).
    - Local fiat equivalent (e.g., `₹5,821,432.18`) in smaller muted text below.
  - **Right Section**:
    - Solid color pill (Green `#0ECB81` or Red `#F6465D`) with white text.
  - **Fav Indicator**: Small hollow/filled star icon on the extreme left or integrated into the batch edit mode.

## 4. Intelligence & Data Tabs

- **AI Sentiment Analysis**:
  - "Powered by AI" badge (Small, italicized).
  - Sentiment Score: Circular or boxed numerical value (e.g., `7.48`).
  - Descriptor Labels: `Strong Positive` (Green), `Neutral` (Grey), `Strong Negative` (Red).
- **Market Distribution Bar**:
  - Horizontal progress-style bar showing the ratio of advancing vs. declining assets.
  - Count display: e.g., `Advantaged: 1,425 | Declined: 892`.
- **Zones (Category Cards)**:
  - Rounded cards for `BNB Chain`, `DeFi`, `Seed`.
  - Shows top gainer thumbnail and percentage change within the category.

## 5. Square (Community Feed)

- Integrated sub-navigation: `Discover`, `Following`, `Hot`, `News`, `Academy`.
- Real-time timestamping for news snippets (e.g., `2m ago`).

## 6. Visual Specifications

- **Background Palette**: Deep Black/Grey (`#0B0E11`).
- **Corner Radii**:
  - Search Bar: `20dp`.
  - Feature Cards: `8dp`.
  - Active Indicators: `2dp` height.
- **Typography**:
  - Symbols/Prices: `14sp` Bold.
  - Sub-details: `10sp` regular weight.
