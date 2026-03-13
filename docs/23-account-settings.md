# Account Settings

## Overview

The Account Settings screen provides users with comprehensive control over their account preferences including general settings, display preferences, language, currency, and theme options. This is a central hub for user configuration under the `com.prometheus.account` package.

## Page Route

- **Route**: `me/settings` or `account/settings`
- **Navigation**: Profile → Settings menu item
- **Package**: `com.prometheus.account`

## Workflow Context

Account settings can be accessed from:
1. Profile screen → Settings menu item
2. Bottom Navigation → Profile → Settings gear icon
3. Deep link: `binance://settings`

## Component Structure

### Main Layout Structure

```
┌─────────────────────────────────────────┐
│           Settings Header               │
│         Account Settings                │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │        General Settings         │    │
│  ├─────────────────────────────────┤    │
│  │ Language              [English >]│    │
│  ├─────────────────────────────────┤    │
│  │ Currency              [USD    >]│    │
│  ├─────────────────────────────────┤    │
│  │ Time Zone           [UTC+8   >]│    │
│  ├─────────────────────────────────┤    │
│  │ Temperature        [Celsius >]  │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │        Display Settings          │    │
│  ├─────────────────────────────────┤    │
│  │ Theme              [Dark/Light] │    │
│  ├─────────────────────────────────┤    │
│  │ Chart Style         [Candles]   │    │
│  ├─────────────────────────────────┤    │
│  │ Default View        [List   >]  │    │
│  ├─────────────────────────────────┤    │
│  │ Order Book Depth    [20     ]  │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │        Trading Settings         │    │
│  ├─────────────────────────────────┤    │
│  │ Default Order Type   [Limit >]  │    │
│  ├─────────────────────────────────┤    │
│  │ Confirm Orders        [Toggle] │    │
│  ├─────────────────────────────────┤    │
│  │ Stream Price Alert   [Toggle]  │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │        About                    │    │
│  ├─────────────────────────────────┤    │
│  │ Version             [2.x.x    ]│    │
│  ├─────────────────────────────────┤    │
│  │ Terms of Service        [>]   │    │
│  ├─────────────────────────────────┤    │
│  │ Privacy Policy          [>]    │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

### Component Details

#### General Settings Section
- **Language Selector**: Opens language picker with search
  - String: `c2c_notification_custom_app` - Custom notification settings
  - Options: English, Chinese, Spanish, French, etc.
- **Currency Selector**: Choose display currency
  - String: `c2c_notification_setting_custom_desc` - Setting description
  - Options: USD, EUR, GBP, CNY, etc.
- **Time Zone**: UTC offset selection
- **Temperature Unit**: Celsius/Fahrenheit

#### Display Settings Section (`2131627313` layout)
- **Theme Toggle**: Dark/Light mode switch
  - String: `kline_setting_main` - Chart settings
  - Uses `KitSwitch` component
- **Chart Style**: TradingView chart configuration
- **Default View**: List/Grid toggle
- **Order Book Depth**: Slider control (10-50)
  - String: `spot_total_time_error_tooltip` - Depth tooltip
  - Component: `KitSlider` with range 10-50

#### Trading Settings Section
- **Default Order Type**: Limit/Market selector
- **Confirm Orders**: Toggle for order confirmation
- **Stream Price Alert**: Push notification toggle

#### About Section
- **Version Display**: Current app version
- **Terms of Service**: Opens WebView
- **Privacy Policy**: Opens WebView

## User Interactions

### Setting Selection Flow
```
Settings Screen → Tap Setting Row → Selection Dialog
                                         ↓
                                   [Select Option]
                                         ↓
                                   [Save/Confirm]
```

### Theme Toggle Flow
```
Settings → Theme Toggle → Confirmation Dialog
                                  ↓
                            [Switch Theme]
                                  ↓
                            [Apply New Theme]
```

## Data Handling

### Local Storage (SharedPreferences)
- Language preference
- Currency selection
- Theme mode
- Chart settings
- Order preferences

### API Calls
- `GET /api/v1/user/settings` - Fetch user settings
- `POST /api/v1/user/settings` - Update settings
- `POST /api/v1/user/preferences` - Save preferences

## Theme Implementation

### Theme Toggle Component
The app uses `KitSwitch` for theme toggling:
- Layout: `2131626269.xml`, `2131628625.xml`
- Component ID: `2131444228`
- Title: `spot_order_push_no_system_permission_tips`

### Theme Modes
1. **Light Theme**: Default light colors
2. **Dark Theme**: Dark mode with OLED optimization
3. **System Default**: Follow system setting

## Language & Currency

### Language Selector
Uses system language picker with the following options:
- English (en)
- Simplified Chinese (zh-CN)
- Traditional Chinese (zh-TW)
- Japanese (ja)
- Korean (ko)
- Spanish (es)
- French (fr)
- German (de)
- Portuguese (pt)
- Russian (ru)

### Currency Options
- USD (US Dollar)
- EUR (Euro)
- GBP (British Pound)
- CNY (Chinese Yuan)
- JPY (Japanese Yen)
- KRW (Korean Won)
- RUB (Russian Ruble)
- INR (Indian Rupee)

## Error States

### Settings Load Error
- Display: Error icon with retry button
- Strings: `nezha_loading_error`
- Component: `KitEmptyLayout`

### Save Error
- Inline error message below field
- Auto-retry option available

## Related Files

- Layout: `2131627313.xml` - Settings main
- Layout: `2131626269.xml` - Push notification settings
- Layout: `2131628625.xml` - Toggle settings
- Component: `KitSwitch` - Toggle component
- Component: `KitSlider` - Slider component
