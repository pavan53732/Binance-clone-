# 22. Exchange Interface: Markets Page

Comprehensive documentation of the Binance Exchange Markets Interface based on 13 high-fidelity reference images. This covers all navigational elements, sorting mechanisms, market categories, varying display views, data visualization components, and all micro-level UI details confirmed from screenshots.

---

## Overview

The Markets interface serves as the primary hub for exploring and analyzing trading pairs across different product categories. It features a **two-level navigation system**: a primary tab row and a secondary sub-tab row that appears when the `Market` parent tab is active. Each tab and sub-tab offers specialized views, specific asset badging, and tailored functionalities for its respective market segment.

---

## 1. Global Header & Navigation

- **Search Component**:
  - Full-width dark search bar (`#1E2329`) at the top with a magnifying glass icon on the left.
  - Placeholder text: `Search Coin Pairs` (gray, vertically centered).
  - To the right of the search bar is a `...` (more options) icon.
- **Two-Level Navigation Structure** (confirmed from all screenshots):
  - **Level 1 — Primary Tab Row** (just below the search bar):
    - Scrollable horizontal list: `Favorites` | `Market` | `Alpha` | `Grow` | `Square` | `Data`
    - `Favorites` is a standalone primary tab.
    - `Market` is a **parent tab** that contains sub-tabs (see Level 2 below).
    - `Alpha`, `Grow`, `Square`, `Data` are standalone primary tabs.
    - **Active State**: White text, slightly thicker font weight, with a prominent horizontal yellow indicator pill below the active tab's text.
    - **Inactive State**: Muted grey text (`#707a8a`), no underline.
  - **Level 2 — Secondary Sub-Tab Row** (appears below Level 1 when `Market` is active):
    - Scrollable horizontal list: `Crypto` | `Spot` | `USDⓈ-M` | `COIN-M` | `Options`
    - These are **children of the Market tab**, NOT standalone primary tabs.
    - Navigation hierarchy:
      ```
      Primary Tabs
       ├ Favorites
       ├ Market
       │   ├ Crypto
       │   ├ Spot
       │   ├ USDⓈ-M
       │   ├ COIN-M
       │   └ Options
       ├ Alpha
       ├ Grow
       ├ Square
       └ Data
      ```
- **List/Grid Layout Switch Icon**:
  - A toggle icon is present in the top-right area of the secondary sub-tab row within Market sub-tabs: `Crypto`, `Spot`, `USDⓈ-M`, `COIN-M`, `Options`.
  - Purpose: toggles between list view and compact grid view.
  - Not present on the `Favorites` tab or other primary tabs.

---

## 2. Favorites Tab

- Display mode: Asset cards organized in a **2-column vertical grid**.
- **Card Specifications** (confirmed from Image 01):
  - Dark rectangular cards with slight rounded corners.
  - **Each card displays ONLY the following three elements** (no price field):
    1. **Pair Name**: Base and quote asset (e.g., `BNB / USDT`), with base asset bold and quote in muted gray.
    2. **24h Change Percent**: Displayed as a colored pill (green `#0ECB81` for positive, red `#F6465D` for negative), e.g., `-0.87%`.
    3. **Favorite Checkbox**: A filled checkbox/checkmark icon indicating the pair is favorited. Tapping deselects and removes from favorites.
  - > ⚠️ **No price field exists on Favorites cards.** Earlier spec versions incorrectly stated "Price: Real-time quoted price positioned prominently." This is confirmed incorrect per screenshots.
- **Favorite State Fields**:
  - `favorite_selected_state`: Checkbox filled/checked = active favorite.
  - `favorite_deselection_toggle`: Tapping checkbox removes pair from favorites list.
  - `pair_symbol`: E.g., `BNB / USDT`
  - `24h_change_percent`: E.g., `-0.87%`
- **Empty Area Buttons** (visible when no assets are added or below the grid):
  - **Button 1 — Add Favorites**:
    - Style: Primary CTA, full-width yellow button (`#F0B90B` background, black text).
    - Action: Opens pair selection to add favorites.
  - **Button 2 — Add Other Pairs**:
    - Style: Secondary text CTA (no background, muted text).
    - Action: Opens alternative pair discovery view.
- **Global Edit Mode**: Pencil edit icon at the top right to manage or organize the favorites grid.

---

## 3. Crypto Tab (List View)

- A generalized view spanning all crypto pairs, not restricted to a specific spot or futures market.
- **Sub-navigation Pills**:
  - Scrollable horizontal row of filter pills: `All`, `Spot`, `Futures`, `Margin`, `Convert`, etc.
  - **Active Pill**: Light grey background padding, bright white text.
  - **Inactive Pills**: Transparent background, gray text.
- **List Header (Sortable Columns)**:
  - Header labels: `Name`, `Last Price`, `24h Chg%`.
  - Sorting indicators: Up/down triangles next to column headers indicating current sort state.
- **Row Anatomy**:
  - **Left (Name & Volume)**:
    - Bold white base asset (e.g., `NEIRO`).
    - Smaller gray text below indicating quote asset (`/USDT`) and 24h volume (e.g., `Vol 340.29M`).
    - Some tokens display a leverage badge (see Section 4 for badge spec).
  - **Center (Price)**:
    - Bold white crypto price (e.g., `0.00096695`).
    - Muted fiat equivalent value beneath — displayed in **₹ (Indian Rupee)** based on user locale (e.g., `₹56,557.41`).
    - > **Fiat Display Rule**: Fiat price uses the user's local currency symbol. Screenshots confirm **₹** (INR). The field is locale-driven; the currency symbol, value, and conversion source are not hardcoded.
    - Fields: `fiat_currency_symbol` (e.g., `₹`), `fiat_conversion_currency` (e.g., `INR`).
  - **Right (Change)**:
    - Consistent percentage block pill (Green or Red based on direction).
    - **Neutral state (0.00% or stablecoins)**: Gray rectangular pill instead of green/red.
    - Field: `neutral_change_color` → gray pill for 0.00% changes.

---

## 4. Spot Tab

- Markets explicitly for spot trading.
- **Quote Asset Sub-navigation** (confirmed complete list from Images 03–05):
  - Scrollable filter row: `USDC`, `USDT`, `U`, `USD1`, `USD`, `BNB`, `BTC`.
  - Additional context-dependent filters may include: `FDUSD`, `TUSD`, `ETH`, `Alts`, `Innovation`, `Liquid Staking`.
  - > **Note**: `USD` and `USD1` are confirmed visible in screenshots and must be included in the filter set.
- **Column Header**: `Name ↕ / Vol ↕` | `Last Price ↕` | `24h Chg% ↕`
  - The `Name / Vol` column **header** label indicates the cell contains both the asset name and its 24h volume.
  - > ⚠️ **The "Vol" prefix is part of the column header label only.** Individual row cells do NOT repeat the "Vol" prefix — they show the raw volume number and unit directly.
- **Name / Vol Cell Structure** (3-line stacked layout, confirmed from screenshots):
  ```
  [BASE ASSET]        ← bold white, large
  [/QUOTE ASSET]      ← muted gray, small
  [AMOUNT][UNIT]      ← muted gray, small  ← NO "Vol" prefix in cells
  ```
  Example:
  ```
  BTC
  /USDT
  283.43M
  ```
  Futures example:
  ```
  BTCUSDT  [Perp]
  10.28B USDT
  ```
- **Volume Unit Specification**:
  - `M` = millions (e.g., `283.43M`, `547.46M USDT`)
  - `B` = billions (e.g., `10.28B USDT`, `1.90B USDC`)
  - Units are appended directly to volume numbers.
  - **Volume display format** (conditional — NOT universal):
    - Format A — abbreviated number only: `[value][unit]` → e.g., `283.43M` (Spot rows)
    - Format B — number + asset qualifier: `[value][unit] [asset]` → e.g., `10.28B USDT`, `47.03M Cont` (Futures rows)
    - Format C — dollar-prefixed: `$[value][unit]` → e.g., `$803.44M` (Alpha tab)
  - Fields: `volume_unit_type` (M / B), `volume_qualifier` (USDT / USDC / Cont / $ / none), `volume_measurement_context`.
- **Leverage Badges**:
  - Small dark pill badges (e.g., `10x`, `5x`) indicating supported margin multiplier.
  - **Position**: Immediately to the **right of the pair name**, before the price column.
  - **Alignment**: Inline with the base asset text row.
  - **Rendering**: Dark background (`#2B3139`), white or yellow text, small rounded pill.
  - Fields: `badge_position` (right of pair name), `badge_alignment` (inline), `badge_rendering` (dark rounded pill).
- **Neutral Change State**:
  - Stablecoin pairs (e.g., `USDC / USDT`, `1.0000`, `0.00%`) display a **gray pill** for the change indicator.
  - Rule: `neutral_change_color` → gray pill when 24h change = `0.00%`.
- **Search behavior**: Faint search bar specific to `Search Coin Pairs` remains pinned at the top.

---

## 5. Futures Tab

- Divided into contract types via a segment control/sub-navigation: `USDⓈ-M` and `COIN-M`.
- **Tertiary Categories (Pills)**:
  - Both sections feature tertiary filter pills such as: `All` (dark grey active pill), `Monthly New`, `DeFi`, `Metaverse`, `Payment`, etc.
- **USDⓈ-M (Perpetual Contracts)**:
  - Row Name includes a **"Perp" contract badge**:
    - Style: Separate **dark rounded label** (`#2B3139` background) positioned immediately after the pair name.
    - Text: `Perp` in white/muted text.
    - Example display: `BTCUSDT` `[Perp]` ← badge rendered as distinct pill, not inline text.
    - Field: `contract_type_badge_style` → rounded dark pill, `Perp` text, right of pair symbol.
  - Volume metric formatted in USDT (e.g., `Vol 10.28B USDT`).
- **COIN-M (Perpetual Contracts)**:
  - Row Name format: `ETHUSD CM Perp`, `BTCUSD CM Perp`.
  - Volume measured in Contracts: `Vol 47.03M Cont`.
- **Formatting**: Same Center (Price) and Right (Percentage Pill) layout as Crypto and Spot lists.

---

## 6. Options Tab

- Specialized interface for options contracts with distinct filtering.
- **Options Sub-navigation**:
  - Horizontal list of base assets: `BTC`, `ETH`, `BNB`, `SOL`, `XRP`, `DOGE`... and a dropdown `All ▾` button on the far right.
  - Reference Image 08 shows the BTC chain options view as the primary/default display.
- **Contract Naming Convention**:
  - Symbol structure: `Asset - Date - Strike - Type` (e.g., `BTC-260327-145000-C`, `BTC-260313-62000-P`).
- **Column Layout & Alignment** (confirmed from Image 08):
  - Contract name: left-aligned.
  - Price column: **centered**.
  - 24h Change pill: **right-aligned** at row edge.
  - Field: `options_price_column_alignment` → centered; `options_change_alignment` → right edge.
- **Volume & Price**:
  - Volume metric: e.g., `Vol 30.81M USDT`.
  - Base contract price: whole or decimal (e.g., `145,000`).
  - **Fiat equivalent price**: Displayed below the base price in **₹ (Indian Rupee)** locale (e.g., `₹459.65`, `₹59,754.50`).
  - Field: `options_fiat_display` → true; currency symbol = user locale (₹ confirmed in screenshots).
- **Percentage Change Indicators**:
  - **Neutral (0.00%)**: Gray rectangular pill.
  - **Positive**: Green text format (not pill — distinct from Spot/Futures).
  - **Negative**: Red text format.
  - Rule: `neutral_change_color` → gray pill across Options and Spot for 0.00% or stablecoins.

---

## 7. Alpha Tab

- A curated section for newer/trending assets, DeFi tokens, and specific ecosystem integrations.
- **Data Source Note**: A popover sometimes indicates "You can switch the data source of Alpha from here."
- **Category Pills**: `All`, `Point+`, `Tokenised Stocks`, `BSC`, `Ethereum`, `Solana`, etc.
- **Token Badging & Unique UI**:
  - Tokens have unusual/colorful logos.
  - **Network Chain Badge**:
    - A tiny blockchain logo (e.g., BSC square logo, Ethereum water-drop icon) overlaid on the token icon.
    - **Placement**: Bottom-right corner of the main circular token icon.
    - Field: `network_badge_position` → bottom-right of token icon.
  - **Verification Multiplier Badges**:
    - Distinct yellow circular icon with white `V` text + multiplier label (e.g., `V x4`, `V x2`).
    - Positioned immediately next to the token symbol/ticker.
    - Examples: `BTW V x4`, `MAGMA V x2`.
    - Field: `verification_multiplier` → value (e.g., `x4`, `x2`); style: yellow circle, white V.
    - Meaning: Indicates a boosted or verified listing tier within the Alpha ecosystem.
  - **Volume Formatting**: Volume expressed in absolute US Dollars (e.g., `Vol $803.44M`) rather than USDT.

---

## 8. Grow Tab (Earn Products)

- Dedicated hub for Binance Earn and passive income products.
- **Featured Carousel**:
  - Large dark cards with simple graphics representing the asset.
  - Format: "Earn [X]% APR on [Asset]" with a yellow `View More` CTA.
  - **Carousel Pagination Indicators**: Dot indicators are displayed directly below the banner carousel (e.g., `● ○ ○` for 3 slides). Active dot is filled, inactive are outlines.
  - Field: `carousel_pagination_indicator` → dot row below banner; active = filled circle, inactive = outline circle.
- **Start Earning Today Section**:
  - Grid of square/rectangular product cards.
  - **Card Content**: Asset Ticker (e.g., `USDC`), Asset Icon, Yield percentage prominently displayed (e.g., `5.53% Max APR`).
  - Some cards incorporate faint background gradient charts (e.g., a green area chart line behind USDC rates).
- **Top Traders to Copy**:
  - Leads to Copy Trading interface.
  - Lists trader accounts with: Square avatar, Trader Username, Badge (`Futures`), ROI metric.
  - **ROI Format**: Percentage value followed by timeframe label on a second line.
    - Example: `+161.31%` / `7D ROI`
    - Field: `roi_value` (e.g., `+161.31%`), `roi_timeframe` (e.g., `7D`), displayed as stacked text in green.

---

## 9. Square Tab (Social Feed)

- Internal social media feed integrated directly into the Markets interface.
- **Sub-navigation**: `Discover`, `Following`, `Hot`, `News`, `Academy`.
- **Feed Anatomy**:
  - **Post Header**: Circular Avatar, Name/Handle, Verification badge, Timestamp (e.g., `• Feb 21`).
    - **Verification Badge**: Yellow shield/checkmark icon (`#F0B90B` yellow) positioned next to the username.
    - Field: `verification_badge_color` → Binance Yellow (`#F0B90B`); style: yellow shield/checkmark icon.
  - **Post Close Button**:
    - An `X` (close/dismiss) icon is positioned at the **top-right corner** of each post card.
    - Allows dismissing individual posts from the feed.
    - Field: `post_close_button` → X icon, top-right of post card.
  - **Content Body**: Supports full text (bilingual support shown), hyperlinks, embedded images/posters, and tags (e.g., green `Bullish` tag).
  - **Action Bar**: Bottom of the post with icons and counts for: `Chat/Comment` (e.g., `5.7K`), `Repost` (`2.9K`), `Like` (`5.4K`), `Share` (`2.5K`).
- **Floating Compose Button**:
  - Large yellow circular button with a black `+` icon.
  - **Position**: Fixed at the **bottom-right corner** of the screen, above the bottom navigation bar.
  - Style: Floating, circular, Binance Yellow (`#F0B90B`), elevated shadow.
  - Field: `fab_position` → bottom-right; `fab_style` → circular yellow with + icon.

---

## 10. Data Tab (AI Analytics)

- Advanced market overview populated with AI-derived sentiment and trend visualization.
- **AI Select Module**:
  - "✨ Powered by AI >" indicator at the top right.
  - Featured asset card with a **purple-to-orange gradient border** (confirmed from Image 13).
    - Field: `ai_card_gradient_border` → gradient from purple to orange; applied as border stroke on card container.
  - **Card Content**: Asset logo, Ticker, Current Price & Change (e.g., `SOL 82.08 -1.31%`).
  - **AI Sentiment Pill**: A small gray pill labeled `sentiment` displayed next to the asset ticker inside the AI card.
    - Field: `ai_sentiment_label` → pill style, gray background, text: `sentiment`.
  - **AI Score**: Large numerical score inside a geometric diamond background (e.g., `7.48`) with text evaluation (e.g., `Strong Positive`).
- **Price Change Distribution**:
  - Expandable accordion section with a **dropdown chevron/arrow** on the right side of the section header.
    - Field: `expand_arrow_icon` → right-aligned chevron on section header row.
  - Displays a continuous horizontal bi-colored bar.
  - Green (Left) vs. Red (Right) segments showing market breadth.
  - Labels underneath: e.g., `Up: 351 | Down: 685`.
- **Hot Coins**:
  - **Horizontal scroll container** — cards are laid out in a single row with horizontal swipe/scroll.
  - Contents: Ticker, mini icon, large price, and percentage change.
  - Field: `hot_coins_scroll` → horizontal scroll container.
- **Zones (Category Tracking)**:
  - **2-column grid layout** for tracking ecosystem sectors (e.g., `BNB Chain`, `DeFi`, `Seed`, `Launchpad`).
  - Each zone highlights the top performing token within it (e.g., `DEGO +67.11%`).
  - Field: `zones_layout` → 2-column grid.

---

## Technical Visual Rules

- **Color Palettes**:
  - Background: True Black/Dark Gray (`#0B0E11`).
  - Text: White/Light Gray for primary values; muted gray for sublabels.
  - Accents: Binance Yellow (`#F0B90B`).
  - Cards/Rows: Dark container (`#1E2329`), badge backgrounds (`#2B3139`).
- **Positive/Negative Indicators**:
  - Green (`#0ECB81`) and Red (`#F6465D`) block pills for Spot/Futures tables.
  - Green/Red text (not pill) for Options percentage changes.
  - **Neutral (0.00%)**: Gray pill or gray text — applies to stablecoins and zero-change rows across all tabs.
- **Fiat Display**:
  - Locale-driven fiat equivalent shown beneath crypto prices.
  - Screenshots confirm **₹ (Indian Rupee / INR)** as the active locale.
  - Fields: `fiat_currency_symbol`, `fiat_conversion_currency`.
- **Volume Units**:
  - `M` = millions, `B` = billions (abbreviated).
  - Qualifier suffixes: `USDT`, `USDC`, `Cont` (for COIN-M contracts), `$` (Alpha tab).
  - Full format: `Vol [value][unit] [qualifier]` (e.g., `Vol 10.28B USDT`, `Vol 47.03M Cont`, `Vol $803.44M`).
- **Typography Layout**:
  - Bold typography for primary identifiers (Tickers, Prices).
  - Smaller, regular, muted gray font for contextual data (Volume, Fiat equivalents, Quote labels).
- **Badge Rendering**:
  - Leverage badges: Small dark rounded pill, right of pair name, before price column.
  - Contract type badges (Perp, CM): Dark rounded pill, immediately after pair name.
  - Network chain badges (Alpha): Tiny icon overlay at the bottom-right of token icon.
  - Verification multiplier badges (Alpha): Yellow circle with white V + multiplier.
- **Navigation Anchor**:
  - Standard 5-icon bottom navigation (`Home`, `Markets`, `Trade`, `Futures`, `Assets`) fixed at bottom.
  - **Active state**: Yellow icon + yellow label text (`#F0B90B`).
  - **Inactive state**: Gray icon + gray label text.
  - `Markets` is the active tab on this page.
