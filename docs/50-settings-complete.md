# Binance UI/UX Knowledge Base - Settings Complete

## Overview

This document provides comprehensive documentation of all Binance Android app Settings screens, options, and navigation destinations.

---

## Settings Architecture

### Main Entry Points

| Route | Activity | Purpose |
|-------|----------|---------|
| `/usercenter/setting` | `SettingsActivity` | Main Settings screen |
| `/usercenter/center` | `AccountActivity` | User Profile/Account Center |
| `/usercenter/accountInfo` | `AccountDetailActivity` | Account Information |
| `/usercenter/about` | `FirstAboutActivity` | About screen |
| `/usercenter/support` | `HelpSupportActivity` | Help & Support |

---

## Settings Main Screen

### Screen Title
- **Title**: "Settings"
- **Layout File**: `R.layout.2131626886`
- **String Resource**: `@string/_setting`

### Settings Categories

| Category | Route | Icon | Description |
|----------|-------|------|-------------|
| Security | `/usercenter/security` | Shield icon | Account security settings |
| Notifications | `/account/notificationSetting` | Bell icon | Push notification preferences |
| Language | `/usercenter/language` | Globe icon | App language selection |
| Currency | `/usercenter/currency` | Currency icon | Fiat currency display |
| Appearance | `/usercenter/dayNightSetting` | Theme icon | Dark/Light mode |
| 24h Change | `/usercenter/timeZoneSetting` | Clock icon | Timezone for 24h change |
| About | `/usercenter/about` | Info icon | App version, terms |
| Help & Support | `/usercenter/support` | Help icon | FAQ, customer service |
| Privacy | `/usercenter/policy` | Lock icon | Privacy policy, data settings |

---

## 1. Account Settings

### Profile/Account Center (`/usercenter/center`)

| Option | Description | Destination |
|--------|-------------|-------------|
| Avatar | User profile picture | Edit Profile |
| Display Name | User's display name | Edit Name dialog |
| Email | Registered email | Email verification |
| Mobile | Phone number | Mobile verification |
| KYC Status | Verification level | KYC flow |

### Account Information (`/usercenter/accountInfo`)

| Option | Description | Destination |
|--------|-------------|-------------|
| User ID | Unique identifier | Copy to clipboard |
| Email | Account email | Email settings |
| Mobile | Account phone | Mobile settings |
| Referral ID | Referral code | Share referral |
| API Management | API keys | API settings |

### Layout Structure
```
NestedScrollView
├── RelativeLayout (Profile header)
│   ├── ImageView (avatar)
│   ├── TextView (display name)
│   └── TextView (user ID)
├── RelativeLayout (Email)
│   ├── TextView (label)
│   ├── TextView (value)
│   └── ImageView (chevron)
├── RelativeLayout (Mobile)
│   ├── TextView (label)
│   ├── TextView (value)
│   └── ImageView (chevron)
└── ... (more options)
```

---

## 2. Security Settings

### Security Center Routes

| Route | Screen | Purpose |
|-------|--------|---------|
| `/usercenter/security` | Security Center | Main security hub |
| `/account/bindMobile` | BindMobileActivity | Bind phone number |
| `/account/devices` | DeviceManagementActivity | Manage devices |

### Security Options

| Option | Type | Description |
|--------|------|-------------|
| Two-Factor Authentication | Toggle | Enable 2FA |
| Biometric Login | Toggle | Fingerprint/Face ID |
| Anti-Phishing Code | Text | Security phrase |
| Withdrawal Whitelist | Toggle | Address whitelist |
| Device Management | List | Active sessions |
| Login History | List | Recent logins |
| Change Password | Action | Password update |

### 2FA Options

| Method | Description | Priority |
|--------|-------------|----------|
| Google Authenticator | TOTP codes | Primary |
| SMS Authentication | SMS codes | Secondary |
| Email Authentication | Email codes | Tertiary |
| YubiKey | Hardware key | Advanced |

---

## 3. Notification Settings

### Screen: NotificationsFlutterActivity
- **Route**: `/account/notificationSetting`
- **Layout**: Flutter-based

### Notification Categories

| Category | Toggle | Description |
|----------|--------|-------------|
| Price Alerts | On/Off | Price movement alerts |
| Order Updates | On/Off | Trade execution alerts |
| Deposit/Withdraw | On/Off | Transaction alerts |
| Security Alerts | On/Off | Login, password change |
| Marketing | On/Off | Promotional notifications |
| News | On/Off | Market news updates |

### Notification Channels

| Channel | Priority | Sound |
|---------|----------|-------|
| Trade | High | Default |
| Security | High | Alert |
| Marketing | Low | Silent |
| System | Normal | Default |

---

## 4. Language & Region Settings

### Language Selection (`/usercenter/language`)

| Option | Description |
|--------|-------------|
| Language List | RecyclerView of languages |
| Search | Filter languages |
| Current Selection | Highlighted item |

### Supported Languages

| Language | Code | Native Name |
|----------|------|-------------|
| English | en | English |
| 中文 | zh | 中文简体 |
| 繁體中文 | zh-Hant | 繁體中文 |
| 日本語 | ja | 日本語 |
| 한국어 | ko | 한국어 |
| Español | es | Español |
| Français | fr | Français |
| Deutsch | de | Deutsch |
| Português | pt | Português |
| Русский | ru | Русский |
| Tiếng Việt | vi | Tiếng Việt |
| ภาษาไทย | th | ภาษาไทย |
| Türkçe | tr | Türkçe |
| Polski | pl | Polski |
| Italiano | it | Italiano |
| Nederlands | nl | Nederlands |
| Indonesia | id | Bahasa Indonesia |
| العربية | ar | العربية |

### Currency Selection (`/usercenter/currency`)

| Currency | Code | Symbol |
|----------|------|--------|
| US Dollar | USD | $ |
| Euro | EUR | € |
| British Pound | GBP | £ |
| Japanese Yen | JPY | ¥ |
| Korean Won | KRW | ₩ |
| Russian Ruble | RUB | ₽ |
| Indian Rupee | INR | ₹ |
| Brazilian Real | BRL | R$ |
| Turkish Lira | TRY | ₺ |

### Timezone Settings (`/usercenter/timeZoneSetting`)

| Option | Description |
|--------|-------------|
| UTC | Coordinated Universal Time |
| Local | Device timezone |
| Custom | Select timezone |

---

## 5. Display Settings

### Appearance (`/usercenter/dayNightSetting`)

| Option | Value | Description |
|--------|-------|-------------|
| Follow System | 0 | Auto based on system |
| Light Mode | 1 | Always light theme |
| Dark Mode | 2 | Always dark theme |

### Color Preference (`/usercenter/color`)

| Option | Description |
|--------|-------------|
| Green Up / Red Down | Standard |
| Red Up / Green Down | Inverted |

### Style Settings (`/usercenter/style`)

| Option | Description |
|--------|-------------|
| Chart Style | Candle/Line |
| Order Book Style | Default/Compact |
| Theme Accent | Color accent |

---

## 6. Trading Settings

### Trading Preference (`/settings/tradingpreference`)

| Option | Value | Description |
|--------|-------|-------------|
| Default | DEFAULT | System default |
| Spot | SPOT | Spot trading |
| Convert | CONVERT | Quick convert |

### Fee Settings (`/account/feeSettingFlutter`)

| Option | Description |
|--------|-------------|
| BNB Discount | Use BNB for fees |
| Fee Rate Display | Show fee rates |

### Position Settings

| Option | Description |
|--------|-------------|
| Position Mode | One-way/Hedge |
| Leverage | Default leverage |
| Margin Mode | Cross/Isolated |

---

## 7. Payment Settings

### Payment Method (`/fiat/setting`)

| Option | Description |
|--------|-------------|
| Add Card | Add credit/debit card |
| Bank Accounts | Linked banks |
| Payment History | Transaction history |

### Payment Currency (`/ocbs/paymentCurrency`)

| Option | Description |
|--------|-------------|
| Currency List | Available currencies |
| Default Currency | Preferred currency |

---

## 8. Privacy Settings

### Privacy Center (`/usercenter/policy`)

| Option | Description |
|--------|-------------|
| Privacy Policy | Legal document |
| Terms of Service | Legal document |
| Data Collection | Analytics toggle |
| Personal Data | Data export/delete |

### Data Preferences

| Option | Toggle | Description |
|--------|--------|-------------|
| Analytics | On/Off | Usage analytics |
| Crash Reports | On/Off | Error reporting |
| Personalization | On/Off | Personalized content |

---

## 9. About Section

### About Screen (`/usercenter/about`)

| Option | Description |
|--------|-------------|
| App Version | Current version |
| Check Update | Manual update check |
| Rate App | Store rating |
| Follow Us | Social links |
| Terms of Service | Legal |
| Privacy Policy | Legal |
| Licenses | Open source |

### Version Information

| Field | Format |
|-------|--------|
| Version Name | X.X.X |
| Version Code | Integer |
| Build Type | Release/Debug |
| Update Status | Up to date / Update available |

### Social Links

| Platform | URL |
|----------|-----|
| Twitter | @binance |
| Telegram | t.me/binance |
| Facebook | /binance |
| Instagram | @binance |
| YouTube | /binance |

---

## 10. Help & Support

### Support Screen (`/usercenter/support`)

| Option | Description |
|--------|-------------|
| FAQ | Frequently asked questions |
| Live Chat | Customer support |
| Submit Request | Support ticket |
| Feedback | App feedback |

### Support Categories

| Category | Description |
|----------|-------------|
| Account | Account issues |
| Trading | Trading problems |
| Deposit/Withdraw | Transaction issues |
| Security | Security concerns |
| API | API support |
| Other | General inquiries |

---

## 11. Advanced Settings

### Cache Management

| Option | Description |
|--------|-------------|
| Clear Cache | Free storage |
| Cache Size | Current usage |

### Developer Options

| Option | Description |
|--------|-------------|
| Debug Mode | Enable logging |
| API Environment | Production/Staging |
| Feature Flags | Toggle features |

---

## Settings Item Layout

### Standard Settings Item

| Element | Specifications |
|---------|----------------|
| Container | RelativeLayout |
| Height | 56dp |
| Icon Size | 24dp |
| Icon Color | `#FFF0B90B` |
| Title Size | 16sp |
| Title Color | `#FFFFFFFF` |
| Subtitle Size | 14sp |
| Subtitle Color | `#FF848E9C` |
| Chevron | 24dp, `#FF848E9C` |

### Toggle Settings Item

| Element | Specifications |
|---------|----------------|
| Container | RelativeLayout |
| Toggle | Switch |
| Active Color | `#FFF0B90B` |
| Inactive Color | `#FF474D57` |

### Layout Structure
```
RelativeLayout (56dp height)
├── ImageView (icon, 24dp)
├── LinearLayout (text container)
│   ├── TextView (title, 16sp)
│   └── TextView (subtitle, 14sp)
├── TextView (value, 14sp)
└── ImageView (chevron, 24dp) OR Switch (toggle)
```

---

## Settings Colors

| Element | Color |
|---------|-------|
| Background | `#FF0B0E11` |
| Item Background | `#FF1E2329` |
| Divider | `#FF2B3139` |
| Title Text | `#FFFFFFFF` |
| Subtitle Text | `#FF848E9C` |
| Value Text | `#FFF0B90B` |
| Icon Active | `#FFF0B90B` |
| Icon Inactive | `#FF848E9C` |
| Toggle Active | `#FFF0B90B` |
| Toggle Inactive | `#FF474D57` |

---

## Settings Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Screen Title | 20sp | Bold | `#FFFFFFFF` |
| Section Header | 14sp | Medium | `#FF848E9C` |
| Item Title | 16sp | Regular | `#FFFFFFFF` |
| Item Subtitle | 14sp | Regular | `#FF848E9C` |
| Item Value | 14sp | Regular | `#FFF0B90B` |
| Version Text | 12sp | Regular | `#FF848E9C` |

---

## String Resources

| Resource ID | Value |
|-------------|-------|
| `@string/_setting` | "Settings" |
| `@string/_language` | "Language" |
| `@string/_currency` | "Currency" |
| `@string/_security` | "Security" |
| `@string/_notification` | "Notifications" |
| `@string/_about` | "About" |
| `@string/_help` | "Help & Support" |
| `@string/_privacy` | "Privacy" |
| `@string/ON` | "ON" |
| `@string/OFF` | "OFF" |
| `@string/_default` | "Default" |
| `@string/version_up_to_date` | "Version is up to date" |
| `@string/ms_daynight_follow_system` | "Follow System" |
| `@string/ms_appearance_light_mode` | "Light Mode" |
| `@string/ms_appearance_dark_mode` | "Dark Mode" |
| `@string/setting_trade_prefer_option_spot` | "Spot" |
| `@string/setting_trade_prefer_option_convert` | "Convert" |

---

## Navigation Tracking Events

| Event Name | Trigger |
|------------|---------|
| `app_click_settings_language` | Language tap |
| `app_click_settings_currency` | Currency tap |
| `app_click_settings_appearance` | Appearance tap |
| `app_click_settings_notifications` | Notifications tap |
| `app_click_settings_about_us` | About tap |
| `app_click_settings_help_supports` | Help tap |
| `app_click_settings_security_crypto_withdraw_setting_click` | Security tap |
| `app_click_settings_payment_method` | Payment tap |
| `app_click_settings_payment_currency` | Payment currency tap |
| `app_click_settings_24hChange` | Timezone tap |
| `app_click_settings_clean_cache` | Clear cache tap |
| `app_click_check_update` | Check update tap |
| `app_click_about_us_privacy` | Privacy tap |
| `app_click_about_us_follow` | Follow tap |

---

## Notes

1. Settings uses Flutter for some screens (Notifications, Privacy Policy)
2. ARouter handles all navigation between settings screens
3. Settings items are dynamically shown/hidden based on feature flags
4. Some settings require authentication before access
5. Toggle states are persisted locally and synced to server
6. Language change requires app restart
7. Currency preference affects all fiat displays
8. Theme change applies immediately without restart
9. Security settings may have region-specific options
10. KYC status affects available settings options
