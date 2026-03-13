# 13-Exchange-Chart-System

## Overview

The Chart System is a sophisticated TradingView-powered charting component integrated into the Trade screen. It provides professional-grade technical analysis tools including multiple chart types, timeframes, technical indicators, drawing tools, and real-time price updates via WebSocket.

The chart is implemented as a WebView component that loads TradingView's lightweight charts library, providing a seamless and responsive user experience comparable to the web-based TradingView platform.

---

## Page Route

```
/trade (integrated)
/trade/spot (integrated)
/trade/margin (integrated)
/trade/futures (integrated)
/trade/chart (fullscreen - optional)
```

**Deep Link Pattern:**
- `binance://trade?symbol=BTCUSDT` - Opens with chart for pair
- `binance://chart?symbol=BTCUSDT&timeframe=1h` - Fullscreen chart with timeframe
- The Chart is primarily a panel within the Trade screen

---

## Workflow Context

```
Trade Screen
    │
    ├───────────────────────────┬───────────────────────────────┐
    ↓                           ↓                               ↓
┌─────────────┐      ┌─────────────────────┐      ┌─────────────────────┐
│  Chart      │      │  Chart Toolbar      │      │  Fullscreen Mode   │
│  Container  │      │                     │      │                     │
│             │      │  [Timeframes]       │      │  Expanded view      │
│  WebView    │ ←──→ │  [Indicators]       │ ←──→ │  All features       │
│  (Trading   │      │  [Drawings]         │      │  available          │
│   View)     │      │  [Fullscreen]       │      │                     │
└─────────────┘      └─────────────────────┘      └─────────────────────┘
```

**User Flow:**
1. User navigates to Trade screen
2. Chart loads with default timeframe (usually 1h or 1d)
3. User selects timeframe from toolbar
4. User may add indicators or drawings
5. User can expand to fullscreen for detailed analysis
6. User taps price to see details or set alerts

---

## Component Structure

### Chart Container

**Layout Reference:** `layout_trade_chart.xml`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                  │
│                                                                  │
│                    TradingView Chart                            │
│                    (WebView Container)                          │
│                                                                  │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [1m] [5m] [15m] [1h] [4h] [1d] [1w]   [📊] [✏️] [⛶]             │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│                 Indicator Panel (when active)                   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy

```
ChartFragment
├─ Chart WebView Container
│   └─ WebView: chart_webview
│       └─ View ID: 2131624210
│           └─ Content: TradingView lightweight charts
├─ Timeframe Toolbar
│   ├─ HorizontalScrollView: timeframe_scroll
│   │   └─ View ID: 2131624211
│   └─ ChipGroup: timeframe_chips
│       ├─ Chip: 1m (View ID: 2131624212)
│       ├─ Chip: 5m (View ID: 2131624213)
│       ├─ Chip: 15m (View ID: 2131624214)
│       ├─ Chip: 1h (View ID: 2131624215)
│       ├─ Chip: 4h (View ID: 2131624216)
│       ├─ Chip: 1d (View ID: 2131624217)
│       ├─ Chip: 1w (View ID: 2131624218)
│       └─ Chip: 1M (View ID: 2131624219)
├─ Tools Toolbar
│   ├─ Indicator Button
│   │   └─ View ID: 2131624220
│   │   └─ Icon: Chart indicator icon
│   ├─ Drawing Tools Button
│   │   └─ View ID: 2131624221
│   │   └─ Icon: Pencil/drawing icon
│   ├─ Fullscreen Button
│   │   └─ View ID: 2131624222
│   │   └─ Icon: Expand icon
│   └─ More Options Button
│       └─ View ID: 2131624223
├─ Indicator Panel (Overlay)
│   ├─ Search Field
│   ├─ Category List
│   │   ├─ Trend
│   │   ├─ Momentum
│   │   ├─ Volatility
│   │   ├─ Volume
│   │   └─ Custom
│   └─ Indicator Items (with toggle)
└─ Drawing Toolbar (Overlay)
    ├─ Tool Categories
    │   ├─ Trend
    │   ├─ Horizontal
    │   ├─ Channels
    │   ├─ Fibonacci
    │   └─ Shapes
    └─ Active Drawing Tools
```

---

## TradingView Integration

### Widget Configuration

The chart uses TradingView's Lightweight Charts library with custom configuration:

```javascript
{
  "layout": {
    "backgroundColor": "#1E2329",
    "textColor": "#D1D4DC"
  },
  "grid": {
    "vertLines": { "color": "#2B2F36" },
    "horzLines": { "color": "#2B2F36" }
  },
  "crosshair": {
    "mode": LightweightCharts.CrosshairMode.Normal
  },
  "rightPriceScale": {
    "borderColor": "#2B2F36"
  },
  "timeScale": {
    "borderColor": "#2B2F36",
    "timeVisible": true,
    "secondsVisible": false
  },
  "watermark": {
    "visible": true,
    "color": "rgba(0,0,0,0)",
    "text": "BINANCE"
  }
}
```

### Chart Types

| Type | Description | Icon |
|------|-------------|------|
| Candlestick | OHLC candlestick chart (default) | Japanese candlestick icon |
| Hollow Candles | Hollow candlestick chart | Hollow candle icon |
| Heikin Ashi | Smoothed price chart | HA icon |
| Line | Simple line chart | Line icon |
| Area | Filled area chart | Area icon |
| Baseline | Baseline chart | Baseline icon |
| Bars | OHLC bar chart | Bar icon |

### Available Timeframes

| Code | Name | Description |
|------|------|-------------|
| 1m | 1 Minute | 1-minute candles |
| 3m | 3 Minutes | 3-minute candles |
| 5m | 5 Minutes | 5-minute candles |
| 15m | 15 Minutes | 15-minute candles |
| 30m | 30 Minutes | 30-minute candles |
| 1h | 1 Hour | 1-hour candles |
| 2h | 2 Hours | 2-hour candles |
| 4h | 4 Hours | 4-hour candles |
| 6h | 6 Hours | 6-hour candles |
| 8h | 8 Hours | 8-hour candles |
| 12h | 12 Hours | 12-hour candles |
| 1d | 1 Day | Daily candles |
| 1w | 1 Week | Weekly candles |
| 1M | 1 Month | Monthly candles |

---

## Technical Indicators

### Indicator Categories

#### Trend Indicators
| Indicator | Description | Parameters |
|-----------|-------------|------------|
| Moving Average (MA) | Simple/Exponential moving average | Period: 7, 25, 99, 200 |
| Bollinger Bands | Price volatility bands | Period: 20, StdDev: 2 |
| Parabolic SAR | Trend reversal indicator | Start: 0.02, Max: 0.2 |
| Ichimoku Cloud | Multi-timeframe trend | Default settings |
| VWMA | Volume-weighted moving average | Period: 20 |

#### Momentum Indicators
| Indicator | Description | Parameters |
|-----------|-------------|------------|
| RSI | Relative Strength Index | Period: 14 |
| MACD | Moving Average Convergence Divergence | Fast: 12, Slow: 26, Signal: 9 |
| Stochastic | Stochastic oscillator | %K: 14, %D: 3 |
| CCI | Commodity Channel Index | Period: 20 |
| Williams %R | Williams Percent Range | Period: 14 |
| ROC | Rate of Change | Period: 12 |
| Momentum | Momentum indicator | Period: 10 |

#### Volatility Indicators
| Indicator | Description | Parameters |
|-----------|-------------|------------|
| ATR | Average True Range | Period: 14 |
| Keltner Channel | Volatility-based channels | Period: 20, Multiplier: 2 |
| Donchian Channel | Price channel | Period: 20 |
| Standard Deviation | Price standard deviation | Period: 20 |

#### Volume Indicators
| Indicator | Description | Parameters |
|-----------|-------------|------------|
| OBV | On-Balance Volume | - |
| VWAP | Volume Weighted Average Price | - |
| Volume | Volume bars | - |
| Accumulation/Distribution | A/D line | - |

### Indicator Panel UI

```
┌─────────────────────────────────────────────────────────────────┐
│ Search indicators...                                           │
├─────────────────────────────────────────────────────────────────┤
│ TREND                                                            │
│ ├─ Moving Average                    [✓]                       │
│ ├─ Exponential MA                    [ ]                       │
│ ├─ Bollinger Bands                   [ ]                       │
│ ├─ Parabolic SAR                     [ ]                       │
│ └─ Ichimoku Cloud                    [ ]                       │
├─────────────────────────────────────────────────────────────────┤
│ MOMENTUM                                                         │
│ ├─ RSI                                [ ]                       │
│ ├─ MACD                               [ ]                       │
│ └─ Stochastic                         [ ]                       │
├─────────────────────────────────────────────────────────────────┤
│ VOLUME                                                           │
│ ├─ Volume                             [✓]                       │
│ └─ OBV                                [ ]                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## Drawing Tools

### Drawing Tool Categories

#### Trend Tools
| Tool | Description |
|------|-------------|
| Trend Line | Draw trend lines |
| Ray | Extended trend lines |
| Arrow | Trend arrows |
| Channel | Price channels |
| Parallel Channel | Parallel channel lines |

#### Horizontal Tools
| Tool | Description |
|------|-------------|
| Horizontal Line | Price level line |
| Horizontal Ray | Extended horizontal line |
| Price Line | Price scale line |

#### Geometric Tools
| Tool | Description |
|------|-------------|
| Rectangle | Price range rectangle |
| Triangle | Triangle pattern |
| Ellipse | Ellipse pattern |

#### Fibonacci Tools
| Tool | Description |
|------|-------------|
| Fibonacci Retracement | Fibonacci retracement |
| Fibonacci Extension | Fibonacci extension |
| Fibonacci Channel | Fibonacci channel |
| Fibonacci Time Zone | Time-based Fibonacci |

#### Annotation Tools
| Tool | Description |
|------|-------------|
| Text | Add text annotations |
| Text Note | Sticky note |
| Callout | Callout annotation |
| Price Label | Price scale label |

---

## Fullscreen Mode

### Activation
- Tap fullscreen button (⛶ icon)
- Double-tap on chart (optional)

### Fullscreen Layout
```
┌─────────────────────────────────────────────────────────────────┐
│ [←]  BTC/USDT  [1h ▼]                              [📊] [✏️]     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│                    Fullscreen Chart                             │
│                                                                  │
│                                                                  │
│                                                                  │
├─────────────────────────────────────────────────────────────────┤
│ [1m][3m][5m][15m][1h][2h][4h][6h][8h][12h][1d][1w][1M]         │
├─────────────────────────────────────────────────────────────────┤
│ O: 45,123   H: 45,456   L: 45,000   C: 45,234   Vol: 1.2B      │
└─────────────────────────────────────────────────────────────────┘
```

### Fullscreen Features
- Extended chart view
- All timeframe options visible
- Indicator panel accessible
- Drawing tools fully functional
- Quick access to order form (floating button)

### Exit Fullscreen
- Tap X button
- Tap outside chart area
- Swipe down gesture (optional)

---

## Real-Time Updates

### WebSocket Integration

**Kline/Candlestick Stream:**
```
Stream: <symbol>@kline_<interval>
Example: btcusdt@kline_1h

Message:
{
  "e": "kline",
  "s": "BTCUSDT",
  "k": {
    "t": 1672531200000,  // Kline start time
    "o": "45000.00",     // Open
    "h": "45100.00",     // High
    "l": "44900.00",     // Low
    "c": "45050.00",     // Close
    "v": "1234.56",      // Volume
    "x": false           // Is closed
  }
}
```

**Update Throttling:**
- Chart updates throttled to 1 second
- Prevents excessive redraws
- Smooth user experience

### Symbol Change
- When trading pair changes, chart reloads
- Preserves last used timeframe (if applicable)
- Preserves indicators and drawings (optional)

---

## Data Handling

### Historical Data

**REST API:**
```
GET /api/v3/klines
Parameters:
  - symbol: Trading pair (e.g., "BTCUSDT")
  - interval: Timeframe (e.g., "1h")
  - startTime: Start timestamp (optional)
  - endTime: End timestamp (optional)
  - limit: Number of candles (default: 500, max: 1500)

Response: Array of kline arrays
[
  [
    1672531200000,  // Open time
    "45000.00",     // Open
    "45100.00",     // High
    "44900.00",     // Low
    "45050.00",     // Close
    "1234.56",      // Volume
    1672534800000,  // Close time
    "54321.00",     // Quote asset volume
    100,            // Number of trades
    "1234.56",      // Taker buy base asset volume
    "54321.00"      // Taker buy quote asset volume
  ]
]
```

### TradingView Datafeed

The chart connects to a custom datafeed that:
1. Fetches historical klines via REST API
2. Subscribes to real-time updates via WebSocket
3. Handles symbol resolution
4. Provides timeframe support
5. Manages period formatter

---

## Visual Design

### Colors

| Element | Color Code | Description |
|---------|------------|-------------|
| Background | #1E2329 | Dark background |
| Grid Lines | #2B2F36 | Subtle grid |
| Text | #D1D4DC | Primary text |
| Bullish Candle | #0ECB81 | Green (up) |
| Bearish Candle | #F6465D | Red (down) |
| Volume Bullish | #0ECB8166 | Green with 40% |
| Volume Bearish | #F6465D66 | Red with 40% |
| Crosshair | #787B86 | Crosshair lines |

### Typography

| Element | Font | Size |
|---------|------|------|
| Price Scale | Monospace | 11sp |
| Time Scale | System | 10sp |
| Toolbar Labels | System | 12sp |
| Indicator Names | System | 12sp |

### Chart Area Dimensions

| Element | Value |
|---------|-------|
| Chart Toolbar Height | 40dp |
| Timeframe Chip Height | 28dp |
| Timeframe Chip Spacing | 4dp |
| Tool Button Size | 36dp |
| Tool Button Spacing | 8dp |
| Indicator Panel Width | 280dp |

---

## Component States

### Loading State
- Show skeleton/shimmer in WebView area
- Display "Loading chart..." text
- Disable timeframe switching

### Ready State
- Chart visible and interactive
- All toolbar buttons enabled
- Real-time updates active

### Error State
- Show error message overlay
- Display "Failed to load chart" with retry button

### Fullscreen State
- Chart expanded
- System UI hidden
- Swipe down to exit

---

## Accessibility

### Screen Reader Support
- Chart type announced on change
- Current price announced periodically
- Indicator status announced

### Touch Gestures
- Pinch to zoom
- Scroll to pan
- Long press for crosshair
- Double tap for fullscreen

---

## Related Documentation

- [05-Exchange-Trade](05-exchange-trade.md) - Main trade screen
- [12-Exchange-Order-Book](12-exchange-order-book.md) - Order book
- [14-Exchange-Order-Types](14-exchange-order-types.md) - Order types
- [30-Real-Time-Data-Updates](30-real-time-data-updates.md) - WebSocket system

---

## Implementation Notes

### Key Classes
- `ChartFragment` - Main chart fragment
- `ChartViewModel` - Data management
- `TradingViewHelper` - TradingView configuration
- `KlineWebSocketManager` - Kline stream handling

### Layout Files
- `layout_trade_chart.xml` - Chart container
- `layout_chart_toolbar.xml` - Toolbar layout
- `layout_indicator_panel.xml` - Indicator panel

### View IDs (from decompiled resources)
- `2131624210` - chart_webview
- `2131624211` - timeframe_selector
- `2131624212` - indicator_button
- `2131624213` - drawing_button
- `2131624214` - fullscreen_button

### External Dependencies
- TradingView Lightweight Charts v3.x
- OkHttp WebSocket client
- Gson for JSON parsing

---

_Last Updated: 2026-03-12_
