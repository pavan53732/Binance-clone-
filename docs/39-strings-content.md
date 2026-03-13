# 39-Strings and Content

## Overview

This document catalogs the string resources and content used in the Binance APK. The app contains extensive localization support with over 3 million characters of string resources.

## String Resource Statistics

| Metric | Value |
|--------|-------|
| Total Strings | 10,000+ |
| Languages | 30+ |
| Total Characters | ~3M |
| String Arrays | 500+ |

## String Resource Locations

| File | Purpose |
|------|---------|
| `res/values/strings.xml` | Default (English) |
| `res/values-es/strings.xml` | Spanish |
| `res/values-fr/strings.xml` | French |
| `res/values-de/strings.xml` | German |
| `res/values-ja/strings.xml` | Japanese |
| `res/values-ko/strings.xml` | Korean |
| `res/values-zh-rCN/strings.xml` | Chinese Simplified |
| `res/values-zh-rTW/strings.xml` | Chinese Traditional |
| `res/values-ru/strings.xml` | Russian |
| `res/values-ar/strings.xml` | Arabic (RTL) |

## Key String Categories

### 1. Navigation Strings

| Key | English Value |
|-----|---------------|
| `nav_home` | Home |
| `nav_markets` | Markets |
| `nav_trade` | Trade |
| `nav_wallet` | Wallet |
| `nav_profile` | Profile |
| `nav_settings` | Settings |

### 2. Trading Strings

| Key | English Value |
|-----|---------------|
| `trade_buy` | Buy |
| `trade_sell` | Sell |
| `trade_spot` | Spot |
| `trade_margin` | Margin |
| `trade_futures` | Futures |
| `trade_limit` | Limit |
| `trade_market` | Market |
| `trade_stop_limit` | Stop-Limit |
| `trade_order` | Order |
| `trade_orders` | Orders |
| `trade_balance` | Balance |
| `trade_available` | Available |
| `trade_frozen` | Frozen |
| `trade_locked` | Locked |

### 3. Market Strings

| Key | English Value |
|-----|---------------|
| `market_price` | Price |
| `market_change` | Change |
| `market_volume` | Volume |
| `market_high` | High |
| `market_low` | Low |
| `market_favorites` | Favorites |
| `market_all` | All |
| `market_gainers` | Gainers |
| `market_losers` | Losers |

### 4. Wallet Strings

| Key | English Value |
|-----|---------------|
| `wallet_deposit` | Deposit |
| `wallet_withdraw` | Withdraw |
| `wallet_transfer` | Transfer |
| `wallet_history` | History |
| `wallet_address` | Address |
| `wallet_qr_code` | QR Code |
| `wallet_copy_address` | Copy Address |
| `wallet_network` | Network |
| `wallet_confirm` | Confirm |

### 5. Authentication Strings

| Key | English Value |
|-----|---------------|
| `auth_login` | Login |
| `auth_logout` | Logout |
| `auth_register` | Register |
| `auth_password` | Password |
| `auth_email` | Email |
| `auth_phone` | Phone |
| `auth_2fa` | 2FA |
| `auth_verify` | Verify |
| `auth_resend` | Resend Code |

### 6. Error Messages

| Key | English Value |
|-----|---------------|
| `error_network` | Network error. Please try again. |
| `error_server` | Server error. Please try later. |
| `error_invalid` | Invalid input |
| `error_insufficient` | Insufficient balance |
| `error_min_amount` | Minimum amount not met |
| `error_max_amount` | Exceeds maximum amount |

### 7. Success Messages

| Key | English Value |
|-----|---------------|
| `success_order` | Order placed successfully |
| `success_withdraw` | Withdrawal submitted |
| `success_deposit` | Deposit confirmed |
| `success_transfer` | Transfer completed |

### 8. Common Actions

| Key | English Value |
|-----|---------------|
| `action_confirm` | Confirm |
| `action_cancel` | Cancel |
| `action_save` | Save |
| `action_edit` | Edit |
| `action_delete` | Delete |
| `action_search` | Search |
| `action_filter` | Filter |
| `action_sort` | Sort |
| `action_refresh` | Refresh |
| `action_retry` | Retry |
| `action_close` | Close |
| `action_back` | Back |
| `action_next` | Next |
| `action_done` | Done |

## String Arrays

### Market Categories

```xml
<string-array name="market_categories">
    <item>Favorites</item>
    <item>Spot</item>
    <item>Futures</item>
    <item>ETF</item>
    <item>Zones</item>
</string-array>
```

### Time Intervals

```xml
<string-array name="chart_timeframes">
    <item>1m</item>
    <item>5m</item>
    <item>15m</item>
    <item>1h</item>
    <item>4h</item>
    <item>1d</item>
    <item>1w</item>
    <item>1M</item>
</string-array>
```

### Order Types

```xml
<string-array name="order_types">
    <item>Limit</item>
    <item>Market</item>
    <item>Stop-Limit</item>
    <item>Stop-Market</item>
</string-array>
```

### Languages

```xml
<string-array name="language_options">
    <item>English</item>
    <item>Español</item>
    <item>Français</item>
    <item>Deutsch</item>
    <item>日本語</item>
    <item>한국어</item>
    <item>中文简体</item>
    <item>中文繁體</item>
    <item>Русский</item>
    <item>العربية</item>
</string-array>
```

## Localization Structure

### RTL Support

Arabic and other RTL languages require mirrored layouts:

```
values-ar/
├── strings.xml
└── (layouts mirrored in layout-ldrtl/)
```

### Plurals

```xml
<plurals name="order_count">
    <item quantity="one">%d order</item>
    <item quantity="other">%d orders</item>
</plurals>
```

### Formatted Strings

```xml
<string name="balance_format">Balance: %s %s</string>
<string name="price_change">%+.2f%%</string>
<string name="wallet_address">Address: %s</string>
```

## Key UI Content

### Exchange Home

```
Welcome back
Total Assets
Quick Actions
Spot Wallet
Futures Wallet
Earn
Market Overview
Trending Coins
```

### Markets

```
Search coins
Filter
Sort
Favorites
Spot
Futures
ETF
Zones
```

### Trade

```
Select Pair
Price
Amount
Total
Buy / Sell
Order Book
Trade History
My Orders
```

### Wallet

```
Assets
Deposit
Withdraw
Transfer
History
```

### Profile

```
Account
Security
Preferences
API Management
Help Center
About
```

## Source Resources

- **Default Strings**: `binance-decompiled/res/values/strings.xml`
- **Localized**: `binance-decompiled/res/values-*/strings.xml`
- **Arrays**: `binance-decompiled/res/values/arrays.xml`
- **Plurals**: `binance-decompiled/res/values/plurals.xml`

## Implementation Notes

1. **String Externalization**: All user-facing text should use string resources
2. **IDs over Values**: Use string resource IDs in code, not hardcoded strings
3. **Pluralization**: Use plurals for dynamic counts
4. **Formatting**: Use placeholder formatting (`%s`, `%d`) for dynamic content
5. **Accessibility**: Include `contentDescription` for icons and images
6. **RTL**: Test all layouts in RTL mode for Arabic/Hebrew
7. **Flutter**: Flutter strings bundled in assets, not Android resources
