# App Permissions System

## Overview

The App Permissions screen allows users to manage device permissions granted to the application. The app requires various permissions for functionality including camera (QR scanning), storage access, location services, and notification capabilities. Part of the `com.prometheus.account` package.

## Page Route

- **Route**: `settings/permissions` or `me/app-permissions`
- **Navigation**: Settings → App Permissions
- **Package**: `com.prometheus.account`

## Workflow Context

Permissions settings are accessed from:
1. Settings → App Permissions
2. Device Settings → Apps → Binance → Permissions
3. First launch permission request flow

## Required Permissions

### 1. Camera Permission
**Purpose**: QR code scanning for wallet connection and payments

```
┌─────────────────────────────────────────┐
│  [Camera Icon]                          │
│                                         │
│  Camera Access                          │
│  Required for QR code scanning          │
│                                         │
│  Status: Granted / Denied               │
│                                         │
│  [Open Settings / Allow]                │
└─────────────────────────────────────────┘
```

**String Resources:**
- `mb_capture_camera_permission_required` - Camera permission title
- `mb_capture_enable_camera` - Enable camera button

### 2. Storage Permission
**Purpose**: Save and read files,交易历史 export

```
┌─────────────────────────────────────────┐
│  [Storage Icon]                         │
│                                         │
│  Storage Access                         │
│  Required for file operations           │
│                                         │
│  Status: Granted / Denied               │
│                                         │
│  [Open Settings / Allow]                │
└─────────────────────────────────────────┘
```

### 3. Location Permission
**Purpose**: Show nearby fiat ATM locations, region-based services

```
┌─────────────────────────────────────────┐
│  [Location Icon]                        │
│                                         │
│  Location Access                        │
│  Required for location services         │
│                                         │
│  Options:                               │
│  • Always                              │
│  • While Using App                     │
│  • Never                               │
│                                         │
│  [Open Settings / Allow]                │
└─────────────────────────────────────────┘
```

### 4. Notification Permission
**Purpose**: Push notifications for alerts and updates

```
┌─────────────────────────────────────────┐
│  [Notification Icon]                    │
│                                         │
│  Notification Access                    │
│  Required for push notifications        │
│                                         │
│  Status: Granted / Denied               │
│                                         │
│  [Open Settings / Allow]                │
└─────────────────────────────────────────┘
```

### 5. Biometric Permission
**Purpose**: Fingerprint/face authentication

```
┌─────────────────────────────────────────┐
│  [Biometric Icon]                      │
│                                         │
│  Biometric Authentication              │
│  Required for biometric login          │
│                                         │
│  Status: Available / Not Available     │
│                                         │
│  [Learn More]                          │
└─────────────────────────────────────────┘
```

## Component Structure

### Camera Permission Layout (`2131627721`)

```
┌─────────────────────────────────────────┐
│                                         │
│         [Camera Image]                  │
│            96x96                       │
│                                         │
│     Camera Permission Required          │
│                                         │
│  We need camera access to scan         │
│  QR codes for wallet connection         │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │      [Enable Camera]            │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `mb_capture_camera_permission_required` - Permission required text
- `mb_capture_enable_camera` - Enable button

### System Permission Tips (`2131626269`)

```
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Toggle]  Enable Push          │    │
│  │          Notifications          │    │
│  │                                 │    │
│  │  System permission required    │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

## User Interactions

### Permission Request Flow
```
App Launch → Permission Dialog → [Allow/Deny]
                                          ↓
                              [If Denied: Show Settings Link]
```

### Manual Permission Grant
```
Settings → Permissions → Permission → [Allow/Deny]
```

### Permission Rationale
```
Permission Needed → Explanation → [Continue / Deny]
```

## Android Permission System

### Permission Groups

1. **CALENDAR**
   - Read calendar events
   - Write calendar events

2. **CAMERA**
   - Camera access (QR scanning)

3. **CONTACTS**
   - Read contacts
   - Write contacts

4. **LOCATION**
   - Fine location (GPS)
   - Coarse location (network)

5. **MICROPHONE**
   - Record audio

6. **NOTIFICATIONS**
   - Post notifications
   - Request notification permission

7. **Sensors**
   - Body sensors (heart rate)
   - Activity recognition

8. **SMS**
   - Send SMS
   - Receive SMS

9. **STORAGE**
   - Read external storage
   - Write external storage
   - Media access (Android 13+)

### Runtime Permissions (Android 6.0+)

Required at runtime:
- Camera
- Location
- Microphone
- Storage (legacy)
- Notifications (Android 13+)

### Install-Time Permissions (Android 5.1-)

Granted automatically:
- Network access
- Bluetooth
- NFC

## Onfido/KYC Permissions

For identity verification (Onfido SDK):

### NFC Permission
```
┌─────────────────────────────────────────┐
│  NFC Permission                         │
│                                         │
│  Required for document verification    │
│                                         │
│  [Grant Permission]                     │
└─────────────────────────────────────────┘
```

**String Resources:**
- `onfido_nfc_permission_title` - NFC title
- `onfido_nfc_permission_subtitle` - NFC subtitle
- `onfido_nfc_permission_button_primary` - Primary button

### Camera Permission (KYC)
- Required for document capture
- ID document photo
- Selfie capture

### Microphone Permission (KYC)
- Required for video interview
- Liveness check

## Error States

### Permission Permanently Denied
- Show explanation dialog
- Direct link to app settings
- Cannot be requested again

### Permission Not Declarated
- Error in app configuration
- Contact support

### System Permission Error
- Device restriction
- Enterprise policy block

## Permission Management UI

### Permission List View
```
┌─────────────────────────────────────────┐
│  Permissions                            │
├─────────────────────────────────────────┤
│                                         │
│  Camera              [✓ Allowed     ]   │
│  Location           [✓ While Using ]    │
│  Storage           [✓ Allowed     ]    │
│  Microphone        [✗ Denied      ]    │
│  Notifications    [✓ Allowed     ]    │
│  Biometrics       [✓ Available   ]   │
│                                         │
└─────────────────────────────────────────┘
```

### Permission Detail View
```
┌─────────────────────────────────────────┐
│  Camera                                 │
├─────────────────────────────────────────┤
│                                         │
│  [Icon]                                 │
│                                         │
│  Camera                                 │
│  Used for QR scanning and               │
│  document capture                       │
│                                         │
│  Status: Allowed                        │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Open System Settings]        │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

## Related Files

- Layout: `2131627721.xml` - Camera permission
- Layout: `2131626269.xml` - Push permission
- Layout: `onfido_fragment_nfc_permission.xml` - NFC permission
- Layout: `onfido_fragment_permissions_recovery.xml` - Permission recovery
- Component: `KitSwitch` - Toggle
