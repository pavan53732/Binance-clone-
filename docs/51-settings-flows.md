# Binance UI/UX Knowledge Base - Settings Flows

## Overview

This document provides comprehensive documentation of navigation flows for the Binance Android app Settings screens, including screen transitions, user actions, and data passed between screens.

---

## Flow Diagram Notation

```
[Screen] → Action → [Next Screen]
    ↓
    Data: data_passed
```

---

## 1. Settings → Profile → Edit Profile Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Profile Header ──→ [Account Center] (/usercenter/center)
    │                               │
    │                               ├── Tap Avatar ──→ [Edit Avatar]
    │                               │                       │
    │                               │                       ├── Camera ──→ [Take Photo]
    │                               │                       │                   │
    │                               │                       │                   └── Photo ──→ [Crop] ──→ [Save]
    │                               │                       │
    │                               │                       └── Gallery ──→ [Select Photo]
    │                               │                                           │
    │                               │                                           └── Photo ──→ [Crop] ──→ [Save]
    │                               │
    │                               ├── Tap Display Name ──→ [Edit Name Dialog]
    │                               │                              │
    │                               │                              ├── Enter Name
    │                               │                              └── Save ──→ [Account Center]
    │                               │
    │                               ├── Tap Email ──→ [Email Settings]
    │                               │                       │
    │                               │                       ├── Change Email ──→ [Verify Identity]
    │                               │                       │                         │
    │                               │                       │                         ├── Enter Code
    │                               │                       │                         └── New Email ──→ [Verify New Email]
    │                               │                       │
    │                               │                       └── Back ──→ [Account Center]
    │                               │
    │                               └── Tap Mobile ──→ [Mobile Settings]
    │                                                       │
    │                                                       ├── Bind Mobile ──→ [Verify Identity]
    │                                                       │                        │
    │                                                       │                        └── Enter Phone ──→ [Verify SMS]
    │                                                       │
    │                                                       └── Back ──→ [Account Center]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap profile header | Account Center | `/usercenter/center` |
| Account Center | Tap avatar | Edit Avatar | Dialog |
| Account Center | Tap display name | Edit Name | Dialog |
| Account Center | Tap email | Email Settings | `/account/email` |
| Account Center | Tap mobile | Mobile Settings | `/account/bindMobile` |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Account Center | User ID, Email, Mobile, KYC Status |
| Account Center → Edit Avatar | Current avatar URL |
| Account Center → Edit Name | Current display name |
| Account Center → Email Settings | Current email, verified status |
| Account Center → Mobile Settings | Current mobile, verified status |

---

## 2. Settings → Security → 2FA Setup Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Security ──→ [Security Center] (/usercenter/security)
    │                           │
    │                           ├── Tap 2FA ──→ [2FA Options]
    │                           │                     │
    │                           │                     ├── Google Authenticator
    │                           │                     │        │
    │                           │                     │        ├── [Download App Prompt]
    │                           │                     │        │
    │                           │                     │        ├── [Scan QR Code]
    │                           │                     │        │        │
    │                           │                     │        │        └── [Enter Manual Key]
    │                           │                     │        │
    │                           │                     │        ├── [Enter 6-digit Code]
    │                           │                     │        │
    │                           │                     │        └── [Enable Success]
    │                           │                     │
    │                           │                     ├── SMS Authentication
    │                           │                     │        │
    │                           │                     │        ├── [Enter Phone Number]
    │                           │                     │        │
    │                           │                     │        ├── [Enter SMS Code]
    │                           │                     │        │
    │                           │                     │        └── [Enable Success]
    │                           │                     │
    │                           │                     └── Email Authentication
    │                           │                              │
    │                           │                              ├── [Enter Email Code]
    │                           │                              │
    │                           │                              └── [Enable Success]
    │                           │
    │                           ├── Tap Biometric ──→ [Biometric Toggle]
    │                           │                            │
    │                           │                            ├── Enable ──→ [Biometric Prompt]
    │                           │                            │                    │
    │                           │                            │                    └── Success ──→ [Security Center]
    │                           │                            │
    │                           │                            └── Disable ──→ [Confirm Dialog]
    │                           │
    │                           ├── Tap Anti-Phishing ──→ [Anti-Phishing Setup]
    │                           │                                │
    │                           │                                ├── Enter Code
    │                           │                                └── Save ──→ [Security Center]
    │                           │
    │                           ├── Tap Withdrawal Whitelist ──→ [Whitelist Settings]
    │                           │                                       │
    │                           │                                       ├── Enable Toggle
    │                           │                                       ├── Add Address
    │                           │                                       └── Manage Addresses
    │                           │
    │                           ├── Tap Device Management ──→ [Device List] (/account/devices)
    │                           │                                  │
    │                           │                                  ├── View Active Devices
    │                           │                                  ├── Revoke Device
    │                           │                                  └── Back
    │                           │
    │                           └── Tap Login History ──→ [Login History]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Security | Security Center | `/usercenter/security` |
| Security Center | Tap 2FA | 2FA Options | Dialog/Screen |
| Security Center | Tap Biometric | Biometric Toggle | Toggle |
| Security Center | Tap Device Management | Device List | `/account/devices` |
| Security Center | Tap Anti-Phishing | Anti-Phishing Setup | Dialog |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Security Center | 2FA status, Biometric enabled, Security score |
| Security Center → 2FA Options | Available 2FA methods, Current enabled method |
| Security Center → Device Management | Device list, Last active times |
| Security Center → Anti-Phishing | Current anti-phishing code |

---

## 3. Settings → Security → Change Password Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Security ──→ [Security Center]
    │                           │
    │                           └── Tap Change Password ──→ [Change Password Screen]
    │                                                            │
    │                                                            ├── Enter Current Password
    │                                                            │
    │                                                            ├── Enter New Password
    │                                                            │        │
    │                                                            │        └── Password Requirements:
    │                                                            │            - Min 8 characters
    │                                                            │            - 1 uppercase
    │                                                            │            - 1 lowercase
    │                                                            │            - 1 number
    │                                                            │            - 1 special char
    │                                                            │
    │                                                            ├── Confirm New Password
    │                                                            │
    │                                                            └── Submit ──→ [2FA Verification]
    │                                                                               │
    │                                                                               ├── Enter 2FA Code
    │                                                                               │
    │                                                                               └── Success ──→ [Success Screen]
    │                                                                                               │
    │                                                                                               └── Continue ──→ [Login Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Security Center | Tap Change Password | Change Password | Dialog/Screen |
| Change Password | Submit | 2FA Verification | Dialog |
| 2FA Verification | Verify success | Success Screen | Dialog |
| Success Screen | Continue | Login Screen | `/login` |

### Data Passed

| Transition | Data |
|------------|------|
| Security Center → Change Password | Email/Mobile for verification |
| Change Password → 2FA Verification | New password hash, 2FA method |
| 2FA Verification → Success | Success flag, timestamp |

---

## 4. Settings → Notifications → Configure Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Notifications ──→ [Notification Settings] (/account/notificationSetting)
    │                                │
    │                                ├── Toggle Price Alerts
    │                                │        │
    │                                │        ├── ON ──→ [Price Alert Config]
    │                                │        │               │
    │                                │        │               ├── Add Alert
    │                                │        │               ├── Manage Alerts
    │                                │        │               └── Back
    │                                │        │
    │                                │        └── OFF ──→ [Notification Settings]
    │                                │
    │                                ├── Toggle Order Updates
    │                                │        │
    │                                │        ├── ON ──→ Enabled
    │                                │        └── OFF ──→ Disabled
    │                                │
    │                                ├── Toggle Deposit/Withdraw
    │                                │
    │                                ├── Toggle Security Alerts
    │                                │        │
    │                                │        └── Always ON (cannot disable)
    │                                │
    │                                ├── Toggle Marketing
    │                                │
    │                                ├── Toggle News
    │                                │
    │                                └── Tap Push Settings ──→ [System Push Config]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Notifications | Notification Settings | `/account/notificationSetting` |
| Notification Settings | Tap Price Alerts config | Price Alert Config | `/markets/priceAlert` |
| Notification Settings | Tap Push Settings | System Push Config | System Settings |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Notification Settings | All toggle states |
| Notification Settings → Price Alert Config | Configured alerts list |
| Notification Settings → System Push | App notification settings |

---

## 5. Settings → Language → Select Language Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Language ──→ [Language Selection] (/usercenter/language)
    │                           │
    │                           ├── Search Languages
    │                           │        │
    │                           │        └── Filter list
    │                           │
    │                           ├── Select Language
    │                           │        │
    │                           │        ├── Current Language ──→ No action
    │                           │        │
    │                           │        └── New Language ──→ [Confirm Dialog]
    │                           │                                  │
    │                           │                                  ├── Confirm ──→ [Apply Language]
    │                           │                                  │                    │
    │                           │                                  │                    └── Restart App
    │                           │                                  │
    │                           │                                  └── Cancel ──→ [Language Selection]
    │                           │
    │                           └── Back ──→ [Settings Main]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Language | Language Selection | `/usercenter/language` |
| Language Selection | Select new language | Confirm Dialog | Dialog |
| Confirm Dialog | Confirm | Apply Language | App Restart |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Language Selection | Current language code |
| Language Selection → Confirm | Selected language code, name |
| Confirm → Apply | Language code to persist |

---

## 6. Settings → Currency → Select Currency Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Currency ──→ [Currency Selection] (/usercenter/currency)
    │                           │
    │                           ├── Search Currencies
    │                           │        │
    │                           │        └── Filter list
    │                           │
    │                           ├── Select Currency
    │                           │        │
    │                           │        ├── Current Currency ──→ No action
    │                           │        │
    │                           │        └── New Currency ──→ [Apply Immediately]
    │                           │                                  │
    │                           │                                  └── Update all fiat displays
    │                           │
    │                           └── Back ──→ [Settings Main]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Currency | Currency Selection | `/usercenter/currency` |
| Currency Selection | Select currency | Apply Immediately | Same screen |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Currency Selection | Current currency code, symbol |
| Currency Selection → Apply | Selected currency code, symbol, rate |

---

## 7. Settings → About → View Terms/Privacy Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap About ──→ [About Screen] (/usercenter/about)
    │                        │
    │                        ├── View App Version
    │                        │
    │                        ├── Tap Check Update ──→ [Update Check]
    │                        │                              │
    │                        │                              ├── Up to date ──→ Toast message
    │                        │                              │
    │                        │                              └── Update available ──→ [Update Dialog]
    │                        │                                                          │
    │                        │                                                          ├── Update Now ──→ [Store/Download]
    │                        │                                                          │
    │                        │                                                          └── Later ──→ [About Screen]
    │                        │
    │                        ├── Tap Rate App ──→ [App Store Rating]
    │                        │
    │                        ├── Tap Follow Us ──→ [Social Links]
    │                        │                            │
    │                        │                            ├── Twitter ──→ [Twitter App/Web]
    │                        │                            ├── Telegram ──→ [Telegram App/Web]
    │                        │                            ├── Facebook ──→ [Facebook App/Web]
    │                        │                            └── Instagram ──→ [Instagram App/Web]
    │                        │
    │                        ├── Tap Terms of Service ──→ [Terms WebView]
    │                        │                                  │
    │                        │                                  └── Back ──→ [About Screen]
    │                        │
    │                        ├── Tap Privacy Policy ──→ [Privacy WebView] (/usercenter/policy)
    │                        │                                │
    │                        │                                └── Back ──→ [About Screen]
    │                        │
    │                        └── Tap Licenses ──→ [Licenses Screen]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap About | About Screen | `/usercenter/about` |
| About Screen | Tap Check Update | Update Check | API call |
| About Screen | Tap Terms of Service | Terms WebView | `/webview/webview` |
| About Screen | Tap Privacy Policy | Privacy WebView | `/usercenter/policy` |
| About Screen | Tap Licenses | Licenses Screen | Dialog/Screen |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → About Screen | App version, build number |
| About Screen → Update Check | Current version code |
| About Screen → Terms WebView | Terms URL |
| About Screen → Privacy WebView | Privacy URL |

---

## 8. Settings → Appearance → Theme Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Appearance ──→ [Appearance Settings] (/usercenter/dayNightSetting)
    │                              │
    │                              ├── Select Theme
    │                              │        │
    │                              │        ├── Follow System ──→ Apply immediately
    │                              │        │
    │                              │        ├── Light Mode ──→ Apply immediately
    │                              │        │
    │                              │        └── Dark Mode ──→ Apply immediately
    │                              │
    │                              ├── Tap Color Preference ──→ [Color Settings] (/usercenter/color)
    │                              │                                  │
    │                              │                                  ├── Green Up/Red Down
    │                              │                                  │
    │                              │                                  └── Red Up/Green Down
    │                              │
    │                              └── Back ──→ [Settings Main]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Appearance | Appearance Settings | `/usercenter/dayNightSetting` |
| Appearance Settings | Tap Color Preference | Color Settings | `/usercenter/color` |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Appearance Settings | Current theme mode |
| Appearance Settings → Color Settings | Current color preference |

---

## 9. Settings → Help & Support Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Help & Support ──→ [Help & Support] (/usercenter/support)
    │                                 │
    │                                 ├── Tap FAQ ──→ [FAQ Categories]
    │                                 │                    │
    │                                 │                    ├── Select Category ──→ [FAQ List]
    │                                 │                    │                            │
    │                                 │                    │                            └── Select Question ──→ [FAQ Detail]
    │                                 │                    │
    │                                 │                    └── Search FAQ
    │                                 │
    │                                 ├── Tap Live Chat ──→ [Chat Bot]
    │                                 │                           │
    │                                 │                           ├── Send Message
    │                                 │                           ├── View History
    │                                 │                           └── Connect to Agent
    │                                 │
    │                                 ├── Tap Submit Request ──→ [Support Ticket]
    │                                 │                                │
    │                                 │                                ├── Select Category
    │                                 │                                ├── Describe Issue
    │                                 │                                ├── Attach Files
    │                                 │                                └── Submit
    │                                 │
    │                                 └── Tap Feedback ──→ [Feedback Form]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Help & Support | Help & Support | `/usercenter/support` |
| Help & Support | Tap FAQ | FAQ Categories | `/support/faq` |
| Help & Support | Tap Live Chat | Chat Bot | `/support/chat` |
| Help & Support | Tap Submit Request | Support Ticket | `/support/ticket` |
| Help & Support | Tap Feedback | Feedback Form | `/support/feedback` |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Help & Support | User ID, Account type |
| Help & Support → FAQ Categories | Category list |
| Help & Support → Live Chat | User info, chat history |
| Help & Support → Support Ticket | User ID, email |

---

## 10. Settings → Payment Method Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Payment Method ──→ [Payment Settings] (/fiat/setting)
    │                                 │
    │                                 ├── Tap Add Card ──→ [Add Card Flow]
    │                                 │                          │
    │                                 │                          ├── Enter Card Number
    │                                 │                          ├── Enter Expiry
    │                                 │                          ├── Enter CVV
    │                                 │                          ├── Billing Address
    │                                 │                          └── Verify Card
    │                                 │
    │                                 ├── Tap Bank Accounts ──→ [Bank List]
    │                                 │                                │
    │                                 │                                ├── Add Bank
    │                                 │                                ├── Remove Bank
    │                                 │                                └── Set Default
    │                                 │
    │                                 ├── Tap Payment Currency ──→ [Currency Selection] (/ocbs/paymentCurrency)
    │                                 │
    │                                 └── Back ──→ [Settings Main]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Payment Method | Payment Settings | `/fiat/setting` |
| Payment Settings | Tap Add Card | Add Card Flow | `/fiat/addCard` |
| Payment Settings | Tap Bank Accounts | Bank List | `/fiat/banks` |
| Payment Settings | Tap Payment Currency | Currency Selection | `/ocbs/paymentCurrency` |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Payment Settings | Saved cards, banks |
| Payment Settings → Add Card | Card type, country |
| Payment Settings → Bank List | Linked banks |

---

## 11. Settings → Trading Preferences Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Trading Preference ──→ [Trading Preference] (/settings/tradingpreference)
    │                                      │
    │                                      ├── Select Default Mode
    │                                      │        │
    │                                      │        ├── Default
    │                                      │        ├── Spot
    │                                      │        └── Convert
    │                                      │
    │                                      ├── Tap Fee Settings ──→ [Fee Settings] (/account/feeSettingFlutter)
    │                                      │                              │
    │                                      │                              ├── Toggle BNB Discount
    │                                      │                              └── View Fee Rates
    │                                      │
    │                                      └── Back ──→ [Settings Main]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Trading Preference | Trading Preference | `/settings/tradingpreference` |
| Trading Preference | Tap Fee Settings | Fee Settings | `/account/feeSettingFlutter` |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Trading Preference | Current preference |
| Trading Preference → Fee Settings | BNB balance, discount status |

---

## 12. Settings → Privacy Center Flow

### Flow Diagram

```
[Settings Main]
    │
    ├── Tap Privacy ──→ [Privacy Center] (/usercenter/policy)
    │                          │
    │                          ├── Tap Privacy Policy ──→ [Privacy WebView]
    │                          │
    │                          ├── Tap Terms of Service ──→ [Terms WebView]
    │                          │
    │                          ├── Toggle Data Collection
    │                          │
    │                          ├── Toggle Analytics
    │                          │
    │                          ├── Tap Personal Data ──→ [Data Management]
    │                          │                              │
    │                          │                              ├── Export Data
    │                          │                              └── Delete Account
    │                          │
    │                          └── Back ──→ [Settings Main]
    │
    └── Back ──→ [Previous Screen]
```

### Screen Transitions

| From | Action | To | Route |
|------|--------|----|----|
| Settings Main | Tap Privacy | Privacy Center | `/usercenter/policy` |
| Privacy Center | Tap Privacy Policy | Privacy WebView | WebView |
| Privacy Center | Tap Personal Data | Data Management | `/account/data` |

### Data Passed

| Transition | Data |
|------------|------|
| Settings → Privacy Center | Data collection status |
| Privacy Center → Data Management | User ID, account status |

---

## Navigation Implementation

### ARouter Navigation

```kotlin
// Navigate to settings screen
_addExplicitPropertyCreator.getMessage()
    .m144916a("/usercenter/setting")
    .m144914a(context)

// Navigate with parameters
_addExplicitPropertyCreator.getMessage()
    .m144916a("/usercenter/language")
    .m144928c("bundle_data", languageCode)
    .m144914a(context)

// Navigate with result
_addExplicitPropertyCreator.getMessage()
    .m144916a("/usercenter/currency")
    .m144921a(activity, callback)
```

### Navigation Events Tracking

| Event | Screen | Properties |
|-------|--------|------------|
| `app_screen_view_settings` | Settings Main | currency, language |
| `app_click_settings_language` | Language tap | - |
| `app_click_settings_currency` | Currency tap | - |
| `app_click_settings_appearance` | Appearance tap | - |
| `app_click_settings_notifications` | Notifications tap | - |
| `app_click_settings_security` | Security tap | - |
| `app_click_settings_about_us` | About tap | - |
| `app_click_settings_help_supports` | Help tap | - |

---

## Notes

1. All settings screens use ARouter for navigation
2. Some screens are Flutter-based (Notifications, Privacy Policy)
3. Security-sensitive actions require re-authentication
4. Language change requires app restart
5. Currency change applies immediately
6. Theme change applies immediately without restart
7. Some settings may be hidden based on region or KYC status
8. Toggle states are persisted locally and synced to server
9. Navigation tracking events are fired for analytics
10. Deep links can navigate directly to specific settings screens
