# Two-Factor Authentication (2FA) Settings

## Overview

The Two-Factor Authentication (2FA) Settings screen provides users with multiple methods to secure their account using additional verification layers. The app supports Google Authenticator, SMS, and Email-based 2FA. This is a critical security feature under the `com.prometheus.account` package.

## Page Route

- **Route**: `me/security/2fa` or `account/security/two-factor`
- **Navigation**: Security Settings → Two-Factor Authentication
- **Package**: `com.prometheus.account`

## Workflow Context

2FA settings can be accessed from:
1. Security Settings → Two-Factor Authentication
2. Profile → Security → Enable 2FA
3. During account setup wizard

## 2FA Methods Supported

### 1. Google Authenticator (GA)
### 2. SMS Authentication
### 3. Email Authentication

## Component Structure

### Main 2FA Screen Layout (`2131628924`)

```
┌─────────────────────────────────────────┐
│         2FA Header                       │
│       Enable Two-Factor                  │
│         Authentication                  │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Google Icon]                  │    │
│  │  Google Authenticator           │    │
│  │  Most secure option            │    │
│  │  [Status Badge]                │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [SMS Icon]                     │    │
│  │  SMS Authentication             │    │
│  │  Text message code             │    │
│  │  [Status Badge]                │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Email Icon]                   │    │
│  │  Email Authentication          │    │
│  │  Email verification code      │    │
│  │  [Status Badge]                │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

### Google Authenticator Screen (`2131628928`)

```
┌─────────────────────────────────────────┐
│  [←]     Google Authenticator           │
├─────────────────────────────────────────┤
│                                         │
│  Google Authenticator                    │
│  ┌─────────────────────────────────┐    │
│  │  123 456                        │    │
│  │  [Input Field]          [Paste]│    │
│  └─────────────────────────────────┘    │
│                                         │
│  Enter 6-digit code from                │
│  Google Authenticator app               │
│                                         │
│         [Enable Google Auth]            │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `ms_2fa_verification_google` - Title
- `ms_2fa_google_verification_code_hint` - Input hint
- `paste` - Paste button text

### SMS Authentication Screen (`2131628930`)

```
┌─────────────────────────────────────────┐
│  [←]     SMS Authentication             │
├─────────────────────────────────────────┤
│                                         │
│  SMS Authentication                      │
│  ┌─────────────────────────────────┐    │
│  │  +1 (555) 123-4567             │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  123456                         │    │
│  │  [Input Field]          [Send]  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [Voice Verification Option]             │
│  [SMS Not Received Tips]                │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `ms_2fa_mobile_verification_code_hint` - Input hint
- `ms_2fa_send_code` - Send button
- `voice_verification` - Voice option
- `two_fa_sms_not_receive_tips` - Help text

### Email Authentication Screen (`2131628929`)

```
┌─────────────────────────────────────────┐
│  [←]     Email Authentication           │
├─────────────────────────────────────────┤
│                                         │
│  Email Authentication                    │
│  ┌─────────────────────────────────┐    │
│  │  user@example.com               │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  123456                         │    │
│  │  [Input Field]          [Send]  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Enter 6-digit code sent to            │
│  your email address                     │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `ms_2fa_email_verification_code_hint` - Input hint
- `eternal_internal_switch_account_email_address_hint` - Email field

### Setup Screen (`2131628922`)

```
┌─────────────────────────────────────────┐
│  [←]     Setup Two-Factor Auth          │
├─────────────────────────────────────────┤
│                                         │
│         Setup 2FA                       │
│                                         │
│  Secure your account with               │
│  two-factor authentication              │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │     [Authenticator Image]       │    │
│  │          96x96dp               │    │
│  └─────────────────────────────────┘    │
│                                         │
│  [Google Authenticator Setup Hint]       │
│                                         │
│         [Get Started]                    │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `ms_setup_2fa_title` - Setup title
- `ms_setup_2fa_hint` - Setup description

## Component Details

### Input Fields
- **Component**: `RuleEditText`
- **Background**: `2131236329` (rounded input)
- **Input Type**: Number (6-digit OTP)
- **Max Length**: 6 characters
- **Auto-paste support**: Yes

### Send Code Button
- **Text**: `ms_2fa_send_code`
- **Countdown Timer**: GrowthCountDownView
- **Duration**: 60 seconds default

### Status Badges
- Enabled: Green checkmark
- Disabled: Gray indicator

## User Interactions

### Enable 2FA Flow
```
2FA Screen → Select Method → Verify Identity → Enter Code → Enable
                                                                    ↓
                                                              [Success]
```

### Disable 2FA Flow
```
2FA Screen → Select Enabled Method → Verify Identity → Confirm → Disable
```

### Backup Codes Flow
```
2FA Enabled → View Backup Codes → Save/Print → Confirm
```

## Data Handling

### Local Storage
- 2FA enabled status (per method)
- Backup codes (encrypted)
- Last 2FA used timestamp

### API Calls
- `POST /api/v1/user/2fa/enable` - Enable 2FA
- `POST /api/v1/user/2fa/disable` - Disable 2FA
- `POST /api/v1/user/2fa/verify` - Verify code
- `GET /api/v1/user/2fa/backup-codes` - Get backup codes

## Backup Codes

When enabling 2FA, users receive backup codes:
- 10 single-use codes
- Format: XXXX-XXXX
- Stored securely on device
- One-time use only

## Force 2FA Screen (`2131627304`, `2131628923`)

Forced 2FA screen shown when required:

```
┌─────────────────────────────────────────┐
│                                         │
│         [Security Icon]                  │
│                                         │
│   Two-Factor Authentication             │
│   Required                              │
│                                         │
│   Please enable at least one            │
│   two-factor authentication             │
│   method to continue                    │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  [>] Google Authenticator      │   │
│   └─────────────────────────────────┘   │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │  [>] SMS Authentication        │   │
│   └─────────────────────────────────┘   │
│                                         │
│   [Contact Customer Support]             │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `two_fa_force_2fa_title` - Force 2FA title
- `two_fa_force_2fa_info` - Info text
- `two_fa_force_2fa_customer_service` - Support option
- `two_fa_force_2fa_select_ga_title` - GA option
- `two_fa_force_2fa_select_email_title` - Email option

## Error States

### Invalid Code Error
- "Invalid verification code"
- "Code expired, please request again"
- "Too many attempts, please wait"

### Network Error
- "Unable to send code"
- "Connection error, please retry"

### Rate Limiting
- "Please wait before requesting another code"
- Countdown display shown

## Related Files

- Layout: `2131628924.xml` - Main 2FA list
- Layout: `2131628928.xml` - Google Auth
- Layout: `2131628929.xml` - Email Auth
- Layout: `2131628930.xml` - SMS Auth
- Layout: `2131628931.xml` - Email verification
- Layout: `2131628932.xml` - SMS verification
- Layout: `2131627304.xml` - Force 2FA
- Layout: `2131627124.xml` - 2FA rebind
- Layout: `2131627130.xml` - Switch account
- Component: `RuleEditText` - OTP input
