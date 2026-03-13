# Security Settings

## Overview

The Security Settings screen provides users with comprehensive control over their account security features including password management, security questions, anti-phishing codes, and device management. This is a critical section under the `com.prometheus.account` package for protecting user accounts.

## Page Route

- **Route**: `me/security` or `account/security`
- **Navigation**: Profile → Settings → Security
- **Package**: `com.prometheus.account`

## Workflow Context

Security settings are accessed from:
1. Profile → Settings → Security tab
2. Account Settings → Security section
3. Deep link: `binance://security`

## Component Structure

### Main Layout Structure

```
┌─────────────────────────────────────────┐
│           Security Header              │
│         Security Settings              │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │      Account Security          │    │
│  ├─────────────────────────────────┤    │
│  │ Password           [Changed >] │    │
│  ├─────────────────────────────────┤    │
│  │ Security Questions  [Set   >]  │    │
│  ├─────────────────────────────────┤    │
│  │ Anti-Phishing      [Create>]  │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │      Two-Factor Auth            │    │
│  ├─────────────────────────────────┤    │
│  │ Google Authenticator  [Enable] │    │
│  ├─────────────────────────────────┤    │
│  │ SMS Authentication    [Enable] │    │
│  ├─────────────────────────────────┤    │
│  │ Email Authentication  [Enable] │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │      Device Management          │    │
│  ├─────────────────────────────────┤    │
│  │ Trusted Devices          [>]   │    │
│  ├─────────────────────────────────┤    │
│  │ Login History           [>]   │    │
│  ├─────────────────────────────────┤    │
│  │ Active Sessions        [5  >] │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐    │
│  │      Additional Security       │    │
│  ├─────────────────────────────────┤    │
│  │ Biometric Login       [Toggle]│    │
│  ├─────────────────────────────────┤    │
│  │ Auto-Lock            [1 min >]│    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

### Component Details

#### Account Security Section
1. **Password Management**
   - String: `two_fa_force_2fa_title` - Security title
   - Options: Change Password, Reset Password
   - Requires current password verification

2. **Security Questions**
   - Set/Update security questions
   - Minimum 3 questions required
   - Used for account recovery

3. **Anti-Phishing Code**
   - Custom alphanumeric code (4-12 characters)
   - Displayed in legitimate emails
   - Protects against phishing attacks

#### Two-Factor Authentication Section
See [2FA Documentation](25-two-factor-authentication.md) for details.

#### Device Management Section
1. **Trusted Devices**
   - List of devices with access
   - Add/Remove device options
   - Device fingerprint display

2. **Login History**
   - Recent login activity
   - IP address display
   - Location and timestamp

3. **Active Sessions**
   - Current active sessions
   - Terminate individual sessions
   - Terminate all other sessions

#### Additional Security Section
1. **Biometric Login Toggle**
   - String: `web3_auth_method_biometric` - Biometric option
   - Uses device fingerprint/face recognition
   - Layout: `2131627831.xml`

2. **Auto-Lock Timer**
   - Options: 1 min, 5 min, 15 min, 30 min, Never
   - Locks app after inactivity

## User Interactions

### Password Change Flow
```
Security → Password → Enter Current → Enter New → Confirm New
                                                           ↓
                                                    [Change Password]
```

### Anti-Phishing Flow
```
Security → Anti-Phishing → Create Code → Enter Code → Confirm
                                                          ↓
                                                   [Code Active]
```

### Device Management Flow
```
Security → Devices → View Devices → [Remove/Deny] → Confirm
```

## Data Handling

### Local Storage
- Anti-phishing code (encrypted)
- Device tokens
- Security preferences

### API Calls
- `POST /api/v1/user/password/change` - Change password
- `POST /api/v1/user/security/questions` - Set questions
- `POST /api/v1/user/anti-phishing` - Set anti-phishing
- `GET /api/v1/user/devices` - Get trusted devices
- `DELETE /api/v1/user/devices/{id}` - Remove device

## Security Features

### Password Requirements
- Minimum 8 characters
- Must include:
  - At least one uppercase letter
  - At least one number
  - At least one special character

### Security Questions
- Pre-defined question bank
- User selects 3+ questions
- Custom answer required for each
- Answers hashed for storage

### Anti-Phishing Code
- Alphanumeric (A-Z, 0-9)
- Case-sensitive
- 4-12 characters
- Displayed in email headers

## Error States

### Password Error
- "Incorrect current password"
- "Passwords do not match"
- "Password does not meet requirements"

### Session Error
- "Unable to terminate session"
- "Session already expired"

### Network Error
- "Unable to save security settings"
- Retry option available

## Related Files

- Layout: `2131627831.xml` - Biometric settings
- Layout: `2131627304.xml` - 2FA force screen
- Strings: Security related in `strings.xml`
- Component: `KitSwitch` - Toggle components
