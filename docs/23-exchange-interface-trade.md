# 23. Exchange Interface: Trade Page

Comprehensive documentation of the Binance Trade (Spot/Convert/Margin) Interface, detailing order forms, order book dynamics, and asset selection.

## Overview

This document provides comprehensive documentation of the Binance **Exchange Trade Interface**, covering Spot, Convert, Margin, Alpha, Fiat, P2P, and Express trading modes. It details order entry forms, order book visualization, charting capabilities, and position management. This is the CeFi (Centralized Finance) trading interface, separate from the Web3 Wallet Swap interface.

## 1. Top Navigation & Feature Selector

- **Trading Modes (Tabs):**
  - **Convert:** Simplified OTC-style trading.
  - **Spot:** Standard exchange trading (Central feature).
  - **Alpha:** [NEW] High-fidelity mode for on-chain tokens (Yellow "New" badge: 24dp x 16dp, rounded 4dp, `#F0B90B` background).
  - **Margin:** Leveraging assets (Cross/Isolated sub-tabs with dotted underline on labels).
  - **Fiat:** Direct currency trading.
  - **P2P:** Peer-to-peer trading (Red "99+" chat bubble badge: 18dp diameter circle, white text on `#F6465D`).
  - **Express:** [NEW] Fast-track trading (Yellow "New" badge same as Alpha).
  
- **Tab Active State Indicators:**
  - Underline: 2dp Yellow `#F0B90B`, full tab width
  - Active Text: 14sp Bold `#FFFFFF`
  - Inactive Text: 14sp Regular `#848E9C`
  - Sub-tab Variants: USDⓈ-M / COIN-M with circular 'S' indicator in white

- **Asset Selector (Top Left):** Displays current pair (e.g., BTC/USDT), 24h change %, and price.
  - **Pair Display Format:**
    - Symbol: Bold 18sp White
    - 24h Change: 14sp Green/Red pill background (`#1A2EBD85` or `#1AF6465D`)
    - Current Price: 14sp Gray `#848E9C` right-aligned
  - **Dropdown Arrow:** 16dp x 16dp chevron, color `#848E9C`, 45-degree angle, positioned right of pair name
- **Utility Actions (Top Right):**
  - **Settings:** Slider icon for slippage and preference settings.
  - **History:** Clock with circular arrow icon for trade history.
  - **More:** Vertical ellipsis (Three dots) containing "Copy", "Bots", "Manage Feature".

## 2. Order Entry Form (Center/Right)

- **Buy/Sell Toggle:**
  - **Styling:** Features a **slanted/skewed divider** between the Green (Buy) and Red (Sell) states.
- **Order Type Selector:** Dropdown for order execution types with comprehensive options:
  - **Types Available:**
    1. **Limit** (Default) - Manual price entry with BBO integration
    2. **Market** - Shows "Market Price" placeholder in gray `#848E9C`
    3. **Stop-Limit** - Dual price fields (Stop Price + Limit Price)
    4. **Trailing Stop** - Percentage callback field for dynamic stops
    5. **Post Only** - Maker-only order with fee discount tag
    6. **IOC/FOK** - Time-in-force badges (Immediate-or-Cancel / Fill-or-Kill)
  - **Dropdown Styling:**
    - Background: `#2B3139` (Dark Gray)
    - Border: 1dp `#474D57` (Medium Gray)
    - Corner Radius: 4dp
    - Text: 14sp White `#FFFFFF`
    - Arrow: 16dp chevron `#848E9C` pointing right
  - **Interaction:** Tap expands full-screen bottom sheet with checkmark selection
- **Input Fields:**
  - **Price Input with BBO Integration:**
    - Manual input with integrated controls
    - **BBO (Best Bid/Offer) Button:**
      - Position: Far right INSIDE input container
      - Size: 48dp width x 32dp height
      - Background: `#2B3139` (Dark Gray)
      - Text: "BBO" in 12sp Yellow `#F0B90B`
      - Border: None (flush with input edge)
      - Action: Instantly populates best bid price from order book
      - Visibility: Active in Margin mode, optional in Spot
    - **"Suggest [Price]" Label:**
      - Position: Below input baseline (2dp gap)
      - Font: 10sp Regular
      - Color: `#848E9C` (Muted Gray)
      - Dynamic Content: Shows calculated suggestion (e.g., "Suggest 678.07")
      - Behavior: Appears only on focus, disappears on blur
    - **Precision Adjustment Buttons `[-]` and `[+]`:**
      - Size: 32dp x 32dp circular buttons
      - Icon: Minus/Plus symbol in 16sp
      - Color: `#848E9C` (normal), `#F0B90B` (hovered/focused)
      - Step Value: One tick size per click (exchange-defined increment)
      - Placement: Horizontal extremities of input field (left/right)
      - Integration: Embedded within input track boundaries
    - **Embedded Currency Pill:**
      - Format: "USDT ▼" inside right boundary of input
      - Background: `#2B3139` rounded pill shape
      - Text: 13sp White `#FFFFFF`
      - Arrow: 12dp chevron `#848E9C`
      - Action: Tap to switch between quote currencies (USDT/USDC/BUSD)
      - Corner Radius: 16dp (fully rounded pill)
    - **Decimal Precision by Pair Type:**
      - BTC pairs: 8 decimals (0.00000000)
      - ETH pairs: 5 decimals (0.00000)
      - USDT pairs: 2 decimals (0.00)
      - Auto-formatting applied on field blur
  
  - **Amount Input with Balance Controls:**
    - Quantity entry with integrated percentage allocation
    - **Decimal Precision Display:**
      - BTC pairs: 8 decimals (0.00000000)
      - USDT pairs: 2 decimals (0.00)
      - ETH pairs: 5 decimals (0.00000)
      - Auto-formatting on blur
    - **"Available [Balance]" Display:**
      - Position: Top right above input field (8dp gap)
      - Font: 12sp Regular
      - Color: `#848E9C` (Label), White `#FFFFFF` (Balance value bold)
      - Plus Icon: 12dp Yellow `+` clickable (triggers deposit modal)
      - Format: "Available: 0.500 BTC" with copy-to-clipboard on tap
    - **Integrated Currency Pill:**
      - Format: "BTC ▼" at right boundary
      - Same styling as price input currency pill
      - Action: Switches between base assets
- **Interactive Controls:**
  - **Numeric Keypad:** Custom dark-themed keypad for rapid entry
    - Layout: 4x3 grid (1-9, ., 0, backspace)
    - Button Size: 64dp x 48dp
    - Background: `#1E2329` per button
    - Text: 20sp White numbers
    - Appearance: Slides up from bottom on amount field focus
  
  - **Allocation Slider with Diamond Nodes:**
    ```
    ┌──────────◆──────────◆──────────◆──────────◆──────────┐
       0%        25%        50%       75%       100%
    ```
    - **Slider Track:**
      - Height: 2dp thin line
      - Color: `#2B3139` (inactive portion), `#F0B90B` (active filled portion)
      - Length: Full width minus 32dp padding
      - Border: None (flush design)
    - **Diamond Nodes (5 positions):**
      - Shape: Rotated square (45 degrees = diamond)
      - Size: 12dp x 12dp
      - Color: `#F0B90B` solid fill
      - Positions: Exactly at 0%, 25%, 50%, 75%, 100%
      - Interactive: Click to instantly set that percentage
      - Active Node: Slightly larger (14dp) with glow effect
    - **Floating Label:**
      - Background: `#2B3139` rounded rectangle (4dp radius)
      - Text: "25%" in 10sp White monospace
      - Position: 8dp above selected node
      - Animation: Smooth slide transition when changing nodes
      - Auto-hide: Disappears 2 seconds after last interaction
    - **Behavior:**
      - Drag thumb to adjust continuously
      - Snap-to-node: Gently snaps to nearest diamond position
      - Real-time Update: Amount field updates as slider moves
      - Visual Feedback: Active portion (0% to current) fills yellow
  
  - **Percentage Quick Buttons:**
    - Layout: Horizontal row below slider or above amount input
    - Buttons: [25%] [50%] [75%] [100%]
    - Size: 48dp width x 28dp height
    - Background: `#2B3139` (Dark Gray)
    - Text: 12sp White `#FFFFFF`
    - Corner Radius: 4dp
    - Spacing: 8dp gap between buttons
    - Selected State: Yellow background `#F0B90B` with Black text
    - Hover State: 1dp Yellow border
    - Interaction: Instant allocation set on tap
- **Availability:** Displays "Available [Asset Balance]" with a yellow `+` icon
  - Position: Top right above amount input
  - Format: "Available: 0.500 BTC" with clickable `+` icon
  - Icon: 12dp Yellow `#F0B90B` plus symbol
  - Action: Tap opens deposit modal
  - Copy: Tap balance value copies to clipboard

- **Primary Action Button with Directional Pointer:**
  - **Button Types:**
    - Buy Button: Green background `#02C076`, text "Buy BTC"
    - Sell Button: Red background `#CF304A`, text "Sell BTC"
  - **Directional Pointer Extension:**
    - Buy: Right-pointing triangular extension on right edge
    - Sell: Left-pointing triangular extension on left edge
    - Extension Size: 8dp height x 44dp width (full button height)
    - Color: Matches button background (Green/Red)
    - Function: Visual flow indicator pointing toward form
    - Integration: Seamless merge with button body
  - **Button States:**
    - Normal: Full opacity, solid color
    - Pressed: 90% opacity with slight darken
    - Disabled: `#474D57` background, `#707A8A` text
    - Loading: 60% opacity + white circular spinner (20dp)
  - **Dimensions:**
    - Height: 44dp (standard), 48dp (large variant)
    - Width: Full container minus pointer extension
    - Corner Radius: 4dp on non-pointer edges
    - Text: 16sp Bold White

## 3. Order Book & Recent Trades

- **Order Book & Recent Trades with Depth Visualization:**
  
  - **Order Book Structure (Left or Right Panel):**
    - **Asks Section (Sell Orders - Red):**
      - Rows: 5+ visible sell orders stacked vertically
      - Price Display: Red `#CF304A` 13sp left-aligned
      - Amount Display: White `#FFFFFF` 12sp right-aligned
      - Depth Bar: Horizontal red bar behind each row
        - Bar Height: 20dp (slightly less than row height)
        - Bar Width: Proportional to cumulative volume (max 50% of column)
        - Opacity: Alpha channel = volume percentage
        - Color: `#1ACF304A` (10% red tint)
      - Cumulative Display: Stacked visualization showing total liquidity
      - Update Frequency: Real-time flash on change (red pulse)
    
    - **Bids Section (Buy Orders - Green):**
      - Rows: 5+ visible buy orders
      - Price Display: Green `#02C076` 13sp left-aligned
      - Amount Display: White `#FFFFFF` 12sp right-aligned
      - Depth Bar: Horizontal green bar behind each row
        - Bar Height: 20dp
        - Bar Width: Proportional to volume (max 50%)
        - Color: `#1A02C076` (10% green tint)
      - Mirrored Layout: Symmetrical with asks section
    
    - **Spread Display (Center Separator):**
      - Current Price: Large green number (e.g., `66,184.8`) in 20sp Bold
      - Index Price: Smaller gray below (`66,182.3`) in 11sp Regular
      - Spread Value: Optional percentage display (e.g., "0.04%")
      - Background: `#1E2329` subtle highlight
      - Vertical Padding: 8dp top/bottom
    
    - **Header Labels:**
      - Format: "Price(USDT) | Amount(BTC) | Total"
      - Font: 11sp Regular Gray `#848E9C`
      - Border Bottom: 1dp `#2B3139`
      - Sticky: Remains visible on scroll
  
  - **Recent Market Trades Tape:**
    - Scroll Direction: Vertical auto-scroll (top to bottom)
    - Trade Row Format: `Price | Amount | Time`
      - Price: Red (sell trade) / Green (buy trade)
      - Amount: White 11sp
      - Time: Gray 10sp right-aligned (HH:MM:SS)
    - Update Behavior: New trades appear at top, push old down
    - Flash Effect: Brief background flash on new trade
      - Buy Flash: Green tint `#1A02C076`
      - Sell Flash: Red tint `#1ACF304A`
    - Auto-Scroll Speed: Smooth 30fps animation
    - Pause on Touch: User can pause to review
  
  - **Funding Rate Metrics (Top of Order Book):**
    ```
    Funding (8h) / Countdown
    -0.00516% / 00:20:18
    ```
    - **Funding Rate Display:**
      - Label: "Funding (8h)" 11sp Gray `#848E9C`
      - Value: "-0.00516%" 12sp Red/Green based on sign
      - Position: Top right corner above order book
      - Tooltip: Tap shows explanation of funding mechanism
      - Update: Every 8 hours for perpetual contracts
    
    - **Countdown Timer:**
      - Format: "HH:MM:SS" monospace
      - Font: 12sp White
      - Background: `#2B3139` rounded pill (4dp radius)
      - Update: Every second real-time countdown
      - Urgency Color: Yellow `#F0B90B` when < 1 minute remaining
      - Reset: Automatically resets after funding event
  
  - **Long/Short Ratio Visualization:**
    ```
    Long/Short Ratio
    ████████░░░░░░░░░░░░ 8.76% Long / 91.24% Short
    ```
    - **Dual-Color Progress Bar:**
      - Total Width: 100% of container (minus padding)
      - Long Portion: Green `#02C076` proportional to percentage
      - Short Portion: Red `#CF304A` proportional to percentage
      - Height: 8dp thin bar
      - Border: 1dp `#474D57` surrounding entire bar
      - Corner Radius: 4dp
      - Divider: Thin white line at 50% center point
    
    - **Percentage Labels:**
      - Long %: Green `#02C076` 11sp left of bar
      - Short %: Red `#CF304A` 11sp right of bar
      - Format: "8.76%" / "91.24%"
      - Update: Real-time from market sentiment API
    
    - **Advanced Metrics (Optional Expand):**
      - Top Trader Long/Short Ratio
      - Account Long/Short Ratio
      - Taker Volume Ratio
      - Tap expands detailed analytics panel

## 4. Main Chart Area

## 4. Main Chart Area with Technical Indicators

- **Candlestick Chart:** Interactive trading chart with professional features
  - **Chart Engine Options:**
    - Standard: Built-in Binance chart engine
    - TradingView: Full TradingView integration (toggle in settings)
  - **Default Display:** Candlestick with volume bars
  - **Time Range:** Auto-scrolling real-time updates

- **Timeframe Selector (Top of Chart):**
  ```
  1m | 5m | 15m | 1H | 4H | 1D | 1W | 1M
  ```
  - **Button Specifications:**
    - Size: 40dp width x 28dp height
    - Spacing: 4dp gap between buttons
    - Background (Inactive): `#2B3139` Dark Gray
    - Text (Inactive): 12sp White `#FFFFFF`
    - Background (Active): Yellow `#F0B90B` solid
    - Text (Active): 12sp Bold Black `#000000`
    - Corner Radius: 4dp on all buttons
    - Hover Effect: 1dp Yellow border on inactive
  - **Available Timeframes:**
    - 1m: 1-minute candles (scalping)
    - 5m: 5-minute candles (short-term)
    - 15m: 15-minute candles (intraday)
    - 1H: 1-hour candles (swing trading)
    - 4H: 4-hour candles (medium-term)
    - 1D: 1-day candles (position trading)
    - 1W: 1-week candles (long-term)
    - 1M: 1-month candles (macro view)
  - **Scroll Behavior:** Horizontal scroll if screen too narrow
  - **Selected State:** Active button slightly elevated (2dp shadow)

- **Chart Type Toggle (Top Right Toolbar):**
  - **Types Available:**
    1. **Candlestick** (Default) - Traditional OHLC candles
    2. **Line Chart** - Simple closing price line
    3. **Heikin Ashi** - Smoothed candlestick variant
    4. **Hollow Candles** - Color-coded by close vs open
    5. **Area Chart** - Filled line chart
    6. **Bars** - OHLC bar chart
  - **Icon:** 24dp representative icon
  - **Active State:** Yellow `#F0B90B` fill
  - **Interaction:** Tap cycles through types or opens dropdown menu

- **Technical Indicators Menu:**
  - **Access:** "..." menu icon (three dots) in top right toolbar
  - **Common Indicators (Pre-loaded):**
    1. **Volume** (Default shown at bottom)
       - Vertical bars matching candle colors
       - Green for up candles, Red for down
    2. **MA (Moving Average)**
       - Multiple lines (MA7, MA25, MA99)
       - Customizable colors and periods
    3. **EMA (Exponential Moving Average)**
       - Weighted average, more responsive
       - EMA9, EMA21 common settings
    4. **Bollinger Bands**
       - Upper/Middle/Lower bands
       - Volatility visualization
    5. **MACD (Moving Average Convergence Divergence)**
       - Histogram + signal line
       - Separate pane below main chart
    6. **RSI (Relative Strength Index)**
       - 0-100 oscillator
       - Overbought (>70) / Oversold (<30)
  - **Indicator Settings:**
    - Tap indicator name to configure periods/colors
    - Multiple instances allowed (e.g., MA20 + MA50 + MA200)
    - Opacity sliders for layering
  - **Pane Management:**
    - Main Pane: Price action with overlays (MA, EMA, BB)
    - Sub Panes: Oscillators (MACD, RSI, Stochastic)
    - Resize: Drag divider between panes
    - Close: X button on each sub-pane

- **Drawing Tools (Optional Toolbar):**
  - **Tools Available:**
    - Trend lines, horizontal/vertical lines
    - Fibonacci retracement
    - Andrews' Pitchfork
    - Text annotations
    - Rays, segments, rectangles
  - **Activation:** Toolbar icon or menu selection
  - **Persistence:** Saved to chart template
  - **Color/Style:** Customizable per tool

- **Chart Interactions:**
  - **Pinch to Zoom:** Vertical scale adjustment
  - **Drag:** Pan left/right through history
  - **Double Tap:** Reset zoom/center
  - **Long Press:** Show crosshair with OHLC data tooltip
  - **Edge Swipe:** Reveal full-screen mode

- **Crosshair Tooltip (On Long Press):**
  ```
  O: 66,184.8  H: 66,250.0  L: 66,100.5  C: 66,184.8
  Vol: 1.234 BTC  +0.52%
  ```
  - Position: Follows finger/cursor
  - Format: Open, High, Low, Close, Volume
  - Change %: From candle open to close
  - Lines: Horizontal + vertical crosshair (dashed 1px)
  - Color: Matches candle (Green/Red)

## 5. Bottom Position Panel

## 5. Bottom Position Panel with Order Management

- **Panel Structure:**
  - Total Height: 200-240dp (user-resizable via drag handle)
  - Tab Bar Height: 44dp
  - Content Area: Remaining space with internal scrolling
  - Drag Handle: 32dp x 4dp gray bar at top center
  - Background: `#1E2329` (slightly lighter than page)

- **Tab Specifications (4 Main Tabs):**

  ### **Tab 1: Open Orders** (Default Active)
  - **Badge:** Red circle with white count number (e.g., "3")
  - **Order Row Layout:**
    ```
    BTC/USDT  Buy  Limit                    
    Price: 65,000  Amt: 0.5  Filled: 40%   
    [Cancel] [Modify]                       
    ```
  - **Columns:**
    - Pair: Bold 14sp White (e.g., "BTC/USDT")
    - Side: Green (Buy) / Red (Sell) 13sp
    - Type: Gray 12sp (Limit/Market/Stop-Limit)
    - Price: White 13sp with decimal precision
    - Amount: White 12sp
    - Filled: Progress bar + percentage (e.g., "40%")
    - Time: Gray 11sp right-aligned (MMM DD HH:mm)
  - **Action Buttons:**
    - Cancel: Text-only Red `#F6465D`, right edge
    - Modify: Pencil icon 20dp Yellow `#F0B90B`
    - Cancel All: Top right of panel, Yellow text button
  - **Empty State:**
    - Illustration: Empty clipboard icon (96dp)
    - Text: "No open orders" 14sp Gray
    - CTA: "Start Trading" Yellow button

  ### **Tab 2: Order History**
    - **Date Range Filter:**
      - Presets: Today, Yesterday, Last 7 Days, Last 30 Days, Custom
      - Calendar picker for custom range
    - **Export Button:**
      - Icon: Download arrow 20dp
      - Format: CSV export via email or file manager
    - **Row Additions vs Open Orders:**
      - Status Column: Filled, Cancelled, Expired, Partially Filled
      - Avg Price: For partially filled orders
      - Total: Order total in quote currency
    - **Filter Options:**
      - Order Type: All, Limit, Market, Stop-Limit
      - Side: All, Buy, Sell
      - Status: All, Filled, Cancelled, Expired

  ### **Tab 3: Trade History**
    - **Execution-Level Details:**
      - Fill Price: Individual execution prices
      - Fill Amount: Quantity per fill
      - Fee: Trading fee paid (with coin type)
      - Role: Maker or Taker badge
      - Time: Exact fill timestamp
    - **Aggregation:** Grouped by parent order
    - **Fee Breakdown:**
      - Total Fees: Sum for selected period
      - BNB Discount: If applicable, shows discount applied
    - **Download:** CSV export with all fills

  ### **Tab 4: Funds**
    - **Asset Balances for Current Pair:**
      - Example for BTC/USDT:
        - BTC: 0.50000000 (≈ $33,092.40)
        - USDT: 10,000.00 (≈ $10,000.00)
      - Lock Icon: Shows locked amount in open orders
      - Available: Unlocked balance for trading
    - **Quick Actions:**
      - Deposit: Opens deposit modal
      - Withdraw: Opens withdrawal form
      - Transfer: Internal transfer between wallets
    - **Mini Portfolio:**
      - 24h PNL: Green/Red percentage
      - Total Value: In BTC + fiat equivalent
    - **Small Asset Conversion:**
      - Link: "Convert small assets to BNB"
      - Shows eligible dust balances
      - One-click conversion button

- **Tab Interaction:**
  - Active Tab: Yellow underline 2dp, bold text
  - Inactive Tabs: Gray text `#848E9C`
  - Transition: Smooth slide animation between tabs
  - Scroll: Horizontal if tabs overflow (rare)

- **Panel Resizing:**
  - Drag Handle: Pull up/down to resize
  - Min Height: 120dp (collapsed)
  - Max Height: 60% of screen
  - Snap Points: 25%, 50%, 75% of max height

## 6. Asset Selector & Search with Network Badges

- **Search Bar:**
  - Placeholder: "Search coins" or trending keyword (e.g., "🔥 HOLO")
  - Height: 44dp rounded pill (22dp radius)
  - Background: `#2B3139` Dark Gray
  - Icon: Magnifying glass 20dp left, 12dp from edge
  - Clear Button: "X" icon appears when text entered, right side
  - Cancel Link: "Cancel" text button (right of search bar when active)
  - Focus State: 1dp Yellow border `#F0B90B`

- **Category Navigation Pills (Horizontal Scroll):**
  ```
  Trending | Solana | Base | Stocks | Meme | Favorites | New Listings
  ```
  - **Pill Specifications:**
    - Size: Auto width x 32dp height (min 64dp width)
    - Spacing: 8dp gap between pills
    - Background (Inactive): `#2B3139` Dark Gray
    - Text (Inactive): 13sp White `#FFFFFF`
    - Background (Active): Yellow `#F0B90B` solid
    - Text (Active): 13sp Bold Black `#000000`
    - Corner Radius: 16dp (fully rounded)
    - Padding: 12dp horizontal, 6dp vertical
  - **Scroll Behavior:** Smooth horizontal scroll, snap to center

- **Token List Item Layout:**
  ```
  ┌──────────────────────────────────────────────────┐
  │ [Icon] BTC  Bitcoin        $42,500   +2.5%     │
  │          USDT              Vol: 1.2B  Cap: 840B│
  └──────────────────────────────────────────────────┘
  ```
  - **Left Section:**
    - Token Icon: 32dp circular with network badge overlay
    - Symbol: Bold 16sp White (e.g., "BTC")
    - Name: Regular 13sp Gray `#848E9C` (e.g., "Bitcoin")
    - Stacked vertically, left-aligned
  
  - **Right Section:**
    - Price: Bold 14sp White with auto decimal precision
    - 24h Change: Pill background Green/Red, percentage
    - Volume: 11sp Gray "Vol: 1.2B"
    - Market Cap: 11sp Gray "Cap: $840B"
    - Dual-metric display stacked right-aligned

- **Network Badges (Overlay on Token Icons):**
  - **Position:** Bottom-right corner of token icon (overlapping)
  - **Size:** 16dp diameter circle
  - **Design:** Network logo or abbreviation
  - **Examples:**
    - Solana: Stylized "S" gradient (Purple/Green)
    - Base: Blue circle with white "Base" text
    - Arbitrum: Blue/Red gradient with "ARB"
    - Sonic: Red stylized "S"
    - Sui: Blue water droplet icon
  - **Border:** 1dp White for contrast

- **Leverage Pills (Top-Right Overlay):**
  - **Shapes:** Rounded rectangle (24dp x 16dp)
  - **Colors:** Yellow `#F0B90B` background, Black text
  - **Text:** "x2", "x5", "x10" in 11sp Bold
  - **Position:** Absolute top-right of token card
  - **Variants:**
    - Standard: Solid yellow fill
    - Outline: Yellow border, transparent center (promo)

- **Promo Badges:**
  - **"Taker Fee Promo" for USDC pairs:**
    - Shape: Rounded rectangle (auto width x 20dp)
    - Border: 1dp Yellow `#F0B90B`
    - Background: Transparent
    - Text: "Taker Fee Promo" 9sp Yellow
    - Position: Below price or as row subtitle

- **Profit/Promo Badge Variants:**
  - Leverage Pills: Yellow `x2`, `x5`, `x10`
  - New Listing: Green "NEW" badge
  - Trending: Orange flame icon + "🔥" text
  - Top Gainer: Green up arrow + percentage

- **Interactive Features:**
  - Tap Row: Selects token, returns to trade page
  - Swipe Left: Quick add to favorites (star icon)
  - Long Press: Shows mini chart sparkline overlay

---

## 7. Advanced Order Options (TP/SL, Reduce Only, GTC)

### **TP/SL Checkbox (Take Profit / Stop Loss):**
- **Label:** "TP/SL" with dotted underline (tooltip trigger)
  - Dotted Line: 1dp Gray `#848E9C`, 2dp gaps
  - Tooltip: On hover/tap, explains TP/SL mechanism
- **Checkbox Design:**
  - Size: 20dp x 20dp square
  - Border: 1dp `#474D57` (Medium Gray)
  - Background: `#1E2329` when unchecked
  - Check Mark: Yellow `✓` (bold 16sp) when enabled
  - Corner Radius: 4dp
- **Behavior:**
  - Unchecked: TP/SL fields hidden
  - Checked: Expands TP/SL input section below
    - Take Profit Price: Input field with "TP" label
    - Stop Loss Price: Input field with "SL" label
    - Both fields have same styling as main price input
- **Position:** Left of Reduce Only checkbox, above order button

### **Reduce Only Checkbox:**
- **Label:** "Reduce Only" (no underline, standard text)
- **Checkbox Design:** Same as TP/SL (20dp square, 1dp border)
- **Function:**
  - When Enabled: Order will only reduce existing position
  - Prevents: Accidentally increasing position size
  - Use Case: Closing partial positions safely
- **State:** Independent from TP/SL (can enable both)
- **Position:** Right of TP/SL, left of GTC dropdown

### **GTC Dropdown (Good 'Til Cancelled):**
- **Label:** "GTC" displayed on button face
- **Button Specifications:**
  - Size: 64dp width x 32dp height
  - Background: `#2B3139` Dark Gray
  - Border: 1dp `#474D57`
  - Corner Radius: 4dp
  - Text: "GTC" 13sp White `#FFFFFF`
  - Arrow: 12dp chevron `#848E9C` pointing down
- **Time-in-Force Options (Dropdown Menu):**
  1. **GTC (Good 'Til Cancelled)**
     - Default selection
     - Order stays active until manually cancelled or filled
     - Badge: None (default state)
  
  2. **IOC (Immediate-or-Cancel)**
     - Executes immediately
     - Unfilled portion automatically cancelled
     - Badge: "IOC" Yellow text on Gray pill
  
  3. **FOK (Fill-or-Kill)**
     - Must execute entirely and immediately
     - If not possible, entire order is cancelled
     - Badge: "FOK" Yellow text
  
  4. **OCO (One-Cancels-the-Other)**
     - Conditional order pair (Stop-Limit + Limit)
     - When one fills, other is cancelled
     - Requires: Both TP and SL enabled
     - Badge: "OCO" Red text

- **Dropdown Interaction:**
  - Tap: Expands menu below button
  - Selection: Highlights chosen option with Yellow checkmark
  - Close: Auto-close after selection or tap outside
  - Animation: Smooth fade-in + slide-down (200ms)

### **Cost Summary Row (Above Button):**
```
Max: 0.500 BTC          Cost: 0.00 USDT
```
- **Max Display (Left):**
  - Label: "Max:" 12sp Gray `#848E9C`
  - Value: "0.500" 12sp White Bold
  - Coin: "BTC" 12sp Yellow `#F0B90B`
  - Interaction: Tap copies full value to clipboard
  - Function: Shows maximum purchasable amount with current balance

- **Cost Display (Right):**
  - Label: "Cost" with dotted underline (tooltip trigger)
    - Dotted Line: Same as TP/SL (explains total cost calculation)
  - Value: "0.00" 12sp White
  - Currency: "USDT" 12sp Gray `#848E9C`
  - Alignment: Right-aligned with button edge
  - Update: Real-time calculation as inputs change

- **Layout:**
  - Flexbox with space-between
  - Padding: 8dp top/bottom
  - Border Top: 1dp `#2B3139` separator
  - Margin: 12dp above action button

- **Search Bar:** Includes "Cancel" text-link on the right when active.
- **Category Navigation:** Horizontal scrollable pills: `Trending`, `Solana`, `Base`, `Stocks`, `Meme`.
- **Token List Items:**
  - **Network Badges:** Circular logos with text labels (`Solana`, `Base`, `Arbitrum`, `Sonic`, `Sui`) in the bottom right of token icons.
  - **Profit/Promo Badges:**
    - Yellow `x2`, `x5`, `x10` leverage pills.
    - Yellow "Taker Fee Promo" badge for USDC pairs.
  - **Metrics:** Dual-metric display (`24h Volume` | `$ Market Cap`).
- **Tokenized Stocks:** Performance assets with `on` suffix (e.g., `SPYon`, `IAUon`).

## 8. Convert Page Specialized View (Zero-Fee Trading)

- **Simplified Two-Field Layout:**
  ```
  ┌─────────────────────────────────────────┐
  │  You Pay                                │
  │  [BTC Icon] 1.0 BTC          [Max]     │
  │           Bitcoin                       │
  ├─────────────────────────────────────────┤
  │           ⬇️ SWAP ⬇️                    │
  ├─────────────────────────────────────────┤
  │  You Receive                            │
  │  [ETH Icon] 18.5 ETH                   │
  │           Ethereum                      │
  └─────────────────────────────────────────┘
  ```

- **From Field (You Pay):**
  - **Asset Selector:**
    - Icon: 32dp circular token logo
    - Symbol: Bold 16sp White
    - Full Name: 13sp Gray below symbol
    - Dropdown Arrow: 12dp chevron right
    - Balance Display: "Available: 1.000 BTC" above field
  - **Amount Input:**
    - Font: 20sp White Bold
    - Decimal Precision: Auto by asset (8 for BTC, etc.)
    - Placeholder: "0.00" in Gray `#848E9C`
    - Focus: Yellow border on active
  - **Max Button:**
    - Position: Top right of input area
    - Size: 48dp x 28dp
    - Text: "Max" 12sp Yellow
    - Background: `#2B3139` rounded
    - Action: Instantly sets full available balance

- **Swap Arrow (Between Fields):**
  - **Design:** Circular rotate button
  - **Size:** 40dp diameter
  - **Icon:** Up/Down arrows 24dp
  - **Color:** Yellow `#F0B90B`
  - **Background:** `#1E2329` circle
  - **Action:** Reverses From/To assets
  - **Animation:** 180-degree rotation on tap (300ms)

- **To Field (You Receive):**
  - **Asset Selector:** Same as From field
  - **Estimated Amount:**
    - Read-only display (calculated from From amount)
    - Font: 20sp White Bold
    - Update: Real-time as From amount changes
    - Label: "≈" prefix indicating estimate
  - **USD Value:**
    - Below amount: "≈ $78,625.00" 13sp Gray
    - Updates with current market price

- **Quote Preview Screen (After "Preview Conversion"):**
  ```
  ┌─────────────────────────────────────────┐
  │  Exchange Rate                          │
  │  1 BTC = 18.5 ETH                       │
  ├─────────────────────────────────────────┤
  │  Price Impact                           │
  │  <0.01% 🟢                              │
  ├─────────────────────────────────────────┤
  │  Network Fee                            │
  │  ~$0.50                                 │
  ├─────────────────────────────────────────┤
  │  ⏱ Quote expires in 5.4s               │
  │  ██████████░░░░░░░░░░░░░░░             │
  ├─────────────────────────────────────────┤
  │      [CONFIRM SWAP]                     │
  └─────────────────────────────────────────┘
  ```

- **Exchange Rate Display:**
  - Format: "1 BTC = 18.5 ETH"
  - Font: 16sp White Bold
  - Precision: Auto-adjusted for readability
  - Source: Aggregated from multiple liquidity pools

- **Price Impact Indicator:**
  - **Calculation:** Based on trade size vs pool liquidity
  - **Color Coding:**
    - Green `<0.01%`: Minimal impact (ideal)
    - Yellow `0.5-1%`: Moderate impact (caution)
    - Red `>3%`: High impact (warning)
  - **Icon:** Up arrow matching color
  - **Tooltip:** Explains what price impact means

- **Network Fee Display:**
  - Label: "Network Fee" 13sp Gray
  - Value: "~$0.50" 14sp White
  - Tilde (~): Indicates estimate (may vary)
  - Breakdown: Tap shows gas cost in native token

- **Zero Fees Badge:**
  - **Position:** Top of screen or near Confirm button
  - **Design:** Yellow rounded pill (48dp x 24dp)
  - **Text:** "0 Fees" 13sp Bold Black
  - **Subtext:** "No trading fees on conversions"
  - **Visibility:** Permanent feature highlight

- **Timed Quote System:**
  - **Countdown Timer:**
    - Duration: 5-6 seconds from quote generation
    - Display: Large numeric countdown "5.4s" 18sp
    - Color: White normally, Yellow when < 2 seconds
    - Position: Centered above progress bar
  
  - **Progress Bar:**
    - Style: Linear horizontal depleting bar
    - Full Width: 100% of container
    - Height: 4dp
    - Color: Yellow `#F0B90B` depleting left to right
    - Animation: Smooth linear depletion (not stepped)
    - Reset: Restarts on new quote
  
  - **Expiration Behavior:**
    - At Zero: Quote locks, button disables
    - Message: "Quote expired" Red text
    - Auto-Refresh: Option to fetch new quote
    - Manual Refresh: "Refresh" button appears
  
  - **Lock Animation:**
    - Visual: Screen dims slightly, lock icon fades in
    - Sound: Subtle click sound (if enabled)
    - Haptic: Light vibration on expiration

- **Confirm Button States:**
  - **Ready:** Yellow background, "CONFIRM SWAP" Black text
  - **Loading:** 60% opacity + spinner, "Processing..."
  - **Success:** Green background, "Complete ✓"
  - **Expired:** Gray background, disabled, "Quote Expired"

- **Post-Conversion Screen:**
  - **Success State:**
    - Checkmark Animation: Large green ✓ scales in
    - Title: "Swap Complete" 20sp Bold
    - Details Card:
      - Sent: "1.0 BTC"
      - Received: "18.5 ETH"
      - Rate: "1 BTC = 18.5 ETH"
      - Time: Timestamp
    - Action Buttons:
      - "View Transaction": Opens TX details
      - "Swap Again": Returns to convert page
  
  - **Failure State:**
    - X Icon: Large red ✗
    - Title: "Swap Failed" 20sp Bold
    - Reason: Specific error message
      - "Insufficient liquidity"
      - "Price moved too much"
      - "Network error"
    - Actions:
      - "Try Again": Retries same swap
      - "Contact Support": Opens help ticket

---

## Notes

1. The Trade page is the central hub for executing cryptocurrency trades.
2. Multiple trading modes (Spot, Convert, Margin, Alpha) offer various trading strategies.
3. Order book provides real-time liquidity visualization with depth bars.
4. Advanced order types include Limit, Market, Stop-Limit, Trailing Stop, Post Only, IOC, FOK, and OCO.
5. The Convert feature provides zero-fee OTC trading with instant quotes.
6. Technical indicators and drawing tools are available on the integrated chart.
7. Position management panel shows open orders, order history, trade history, and funds.
8. Real-time price updates and market data via WebSocket connections.
