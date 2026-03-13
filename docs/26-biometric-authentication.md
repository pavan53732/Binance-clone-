# Biometric Authentication Settings

## Overview

The Biometric Authentication screen provides users with the ability to use fingerprint or facial recognition as a convenient and secure method to access their accounts. This feature enhances security while improving user experience for quick authentication. Part of the `com.prometheus.account` security package.

## Page Route

- **Route**: `me/security/biometric` or `account/security/biometrics`
- **Navigation**: Security Settings → Biometric Login
- **Package**: `com.prometheus.account`

## Workflow Context

Biometric settings are accessed from:
1. Security Settings → Biometric Login
2. Login screen → Biometric option
3. Settings → Security → Enable Biometrics

## Supported Biometric Types

### 1. Fingerprint Authentication
- Uses device fingerprint sensor
- Android FingerprintManager API
- Requires Android 6.0+

### 2. Face Recognition
- Uses device front camera
- Android FaceManager API
- Requires Android 10.0+

### 3. Iris Scanning (Legacy)
- Uses infrared scanner
- Samsung-specific implementation

## Component Structure

### Main Biometric Settings Layout (`2131627831`)

```
┌─────────────────────────────────────────┐
│  [←]     Biometric Authentication       │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Fingerprint Icon]             │    │
│  │  Fingerprint                    │    │
│  │  Use fingerprint to unlock     │    │
│  │  [Toggle: ON/OFF]              │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Face Icon]                    │    │
│  │  Face Recognition               │    │
│  │  Use face to unlock            │    │
│  │  [Toggle: ON/OFF]              │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ───────────────────────────────────    │
│                                         │
│  Biometric authentication adds          │
│  an extra layer of security            │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `web3_auth_method_biometric` - Biometric option title

### Enable Biometrics Screen (`2131628137`)

```
┌─────────────────────────────────────────┐
│                                         │
│                                         │
│         [Fingerprint Icon]              │
│            96x96dp                      │
│                                         │
│     Enable Biometrics Pay               │
│                                         │
│  Use your fingerprint to authorize      │
│  payments and transactions               │
│                                         │
│         [Activate Now]                  │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `payment_enable_biometrics_pay` - Enable title
- `payment_enable_biometrics_pay_tips` - Description
- `payment_activate_now` - Activate button

## Component Details

### Biometric Toggle Item
- **Icon**: 24x24dp drawable
- **Title**: String resource
- **Description**: Secondary text
- **Toggle**: `KitSwitch` component

### Biometric Icons
- Fingerprint: `2131236851` (checkmark for enabled)
- Face: `2131235474` (generic icon)
- Layout: `2131236329` - Container background

### Activation Button
- **Component**: `KitButton`
- **Text**: `payment_activate_now`
- **Style**: Primary action button

## User Interactions

### Enable Biometric Flow
```
Biometric Settings → Toggle On → System Prompt
                                          ↓
                              [Scan Fingerprint/Face]
                                          ↓
                                    [Success]
                                          ↓
                              [Biometric Enabled]
```

### Disable Biometric Flow
```
Biometric Settings → Toggle Off → Confirm
                                           ↓
                                    [Disabled]
```

### Use Biometric to Login
```
Login Screen → Select Biometric → System Prompt
                                           ↓
                              [Scan Fingerprint/Face]
                                           ↓
                              [Authenticated]
```

## Data Handling

### Local Storage
- Biometric enabled status (per type)
- Biometric template (device-managed)
- Last biometric use timestamp

### API Calls
- `POST /api/v1/user/biometric/enable` - Enable biometric
- `POST /api/v1/user/biometric/disable` - Disable biometric
- `GET /api/v1/user/biometric/status` - Check status

## Security Features

### Device Security
- Biometric requires device PIN/pattern as backup
- Failed attempts fallback to PIN
- No biometric data stored on server

### Session Management
- Biometric session timeout: 5 minutes
- Re-authentication required for sensitive actions

### Transaction Authorization
- Biometric for:
  - Withdrawals above threshold
  - Security setting changes
  - API key creation

## Error States

### Biometric Not Available
- "Biometric not available on this device"
- "Please set up device lock first"

### Biometric Not Enrolled
- "No fingerprints enrolled"
- "Please set up biometric in device settings"

### Authentication Failed
- "Authentication failed"
- "Please try again"
- Fallback to PIN/password

### Hardware Not Supported
- "Device does not support biometric"
- Option hidden for unsupported devices

## Device Compatibility

### Fingerprint
- Samsung Galaxy S6+
- Google Pixel 2+
- OnePlus 3T+
- Most devices with fingerprint sensor

### Face Recognition
- Samsung Galaxy S10+
- Google Pixel 4+
- Devices with IR camera

### Requirements
- Android 6.0+ (API 23)
- FingerprintManager or BiometricManager
- Device must have secure lock (PIN/Pattern/Password)

## Web3 Integration

Biometric is also used for Web3 wallet authentication:

```
┌─────────────────────────────────────────┐
│  Web3 Auth Methods                      │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │  [✓] Biometric                 │    │
│  │  Use biometric for Web3       │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

This integrates with the Web3 wallet for:
- Wallet unlock
- Transaction signing
- DApp connections

## Related Files

- Layout: `2131627831.xml` - Biometric settings
- Layout: `2131628137.xml` - Enable biometrics
- Strings: `payment_enable_biometrics_pay`
- Strings: `web3_auth_method_biometric`
- Component: `KitSwitch` - Toggle
- Component: `KitButton` - Action button
