# 24. Exchange Interface: Markets Page

High-fidelity documentation of the Binance Markets Interface, covering all navigational elements, sorting mechanisms, and data visualization components.

## 1. Page Header & Navigation

- **Search Bar:** Global search persistent at the top right.
- **Navigation Tabs (Top):**
  - **Favorites:** Star icon, lists user-defined watched assets.
  - **Market Categories:** Categories like "All", "Payments", "Infrastructure", "Layer 1/Layer 2", "Meme", etc.
  - **Pair Categories:**
    - **USDT:** Most common trading pair.
    - **FDUSD:** Stablecoin pair.
    - **BTC:** Bitcoin pairs.
    - **ETH:** Ethereum pairs.
    - **BNB:** Binance Coin pairs.

## 2. Asset Listings Table

- **Columns:**
  - **Name:** Asset ticker and full name (e.g., BTC/USDT). Includes a small star icon for favoriting.
  - **Price:** Last traded price with color-coded direction (Green/Red).
  - **24h Change %:** Percentage change with background color-coding:
    - **Green:** Positive change (e.g., +5.20%).
    - **Red:** Negative change (e.g., -2.15%).
  - **24h Volume / Market Cap:** Toggleable column showing either volume or market capitalization.
- **Sorting Controls:** Arrow icons next to column headers for ascending/descending sorts.
- **Sparklines (Mini Charts):** Small line charts representing the 24h price trend for each asset.

## 3. Specialized Market Sections

- **Hot Markets:** Top list of highly active or trending assets.
- **New Listings:** Recently added trading pairs.
- **Gainer & Losers:**
  - **Gainers:** Top percentage increases in 24h.
  - **Losers:** Top percentage decreases in 24h.
- **24h Volume:** Top assets by trading volume.

## 4. Interaction Micro-Details

- **Hover States:** Row highlighting on hover in the asset table.
- **Loading States:** Shimmer effects for price updates or initial table load.
- **Empty States:** Search results with "No assets found" and a prompt to adjust filters.
- **Star Toggle:** Smooth transition from hollow star to filled yellow star when adding to favorites.

## 5. Visual Specifications

- **Color Palette:**
  - Positive: `#00C087` (Emerald Green)
  - Negative: `#CF304A` (Crimson Red)
  - Text (Primary): White/Dark Grey depending on mode.
  - Text (Secondary): Light Grey for ticker names and sub-details.
- **Typography:** San-serif (e.g., Inter or Roboto) with distinct weights for price (Bold) vs. ticker (Medium).
