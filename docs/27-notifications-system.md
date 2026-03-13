# Notifications System Settings

## Overview

The Notifications System screen allows users to configure how they receive notifications including push notifications, email alerts, and SMS messages. Users can customize notification preferences for different categories such as trading, security, and promotions. Part of the `com.prometheus.account` package.

## Page Route

- **Route**: `me/notifications` or `settings/notifications`
- **Navigation**: Settings → Notifications
- **Package**: `com.prometheus.account`

## Workflow Context

Notification settings are accessed from:
1. Settings → Notifications
2. Profile → Settings → Notification Preferences

## Notification Channels

### 1. Push Notifications
- In-app notifications
- System tray alerts
- Lock screen notifications

### 2. Email Notifications
- Daily summaries
- Security alerts
- Marketing communications

### 3. SMS Notifications
- Transaction alerts
- Security codes
- Account activity

## Component Structure

### Main Notification Settings Layout (`2131628322`)

```
┌─────────────────────────────────────────┐
│  [←]     Notifications                 │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Push Notifications    [Toggle] │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Email Notifications  [Toggle] │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  SMS Notifications    [Toggle] │    │
│  └─────────────────────────────────┘    │
│                                         │
├─────────────────────────────────────────┤
│  Notification Categories                 │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Trading                 [Toggle]│    │
│  │  Order fills, price alerts     │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Security              [Toggle]│    │
│  │  Login alerts, password changes│    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Account               [Toggle]│    │
│  │  Deposits, withdrawals         │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  Marketing             [Toggle] │    │
│  │  Promotions, new features      │    │
│  └─────────────────────────────────┘    │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  News & Updates        [Toggle]│    │
│  │  Market news, platform updates │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `c2c_notification_custom_app` - Custom notification app
- `c2c_notification_setting_custom_desc` - Setting description
- `c2c_notification_all_app` - All notifications option

### System Permission Screen (`2131626269`, `2131628625`)

```
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────────────────────────┐    │
│  │  [Toggle]                        │    │
│  │  Enable Push Notifications       │    │
│  │                                 │    │
│  │  Required system permission     │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `spot_order_push_no_system_permission_tips` - Permission tips

## Component Details

### Toggle Components
- **Component**: `KitSwitch`
- **ID**: `2131444228`
- **States**: ON/OFF with animation
- **Background**: `@color/2131099794`

### Notification Categories
1. **Trading**
   - Order filled
   - Order cancelled
   - Price alerts
   - Liquidation warnings

2. **Security**
   - New login
   - Password change
   - 2FA changes
   - Withdrawal requests

3. **Account**
   - Deposit confirmed
   - Withdrawal processed
   - KYC status

4. **Marketing**
   - Promotional offers
   - New feature announcements
   - Trading competitions

5. **News**
   - Market updates
   - Platform maintenance
   - Policy updates

## User Interactions

### Toggle Notification Channel
```
Notifications → Channel Toggle → System Permission (if needed)
                                                      ↓
                                            [Grant Permission]
                                                      ↓
                                            [Toggle Applied]
```

### Configure Category
```
Notifications → Category Toggle → Save
```

## Data Handling

### Local Storage
- Notification preferences (SharedPreferences)
- Last notification settings sync

### API Calls
- `GET /api/v1/user/notifications` - Get preferences
- `POST /api/v1/user/notifications` - Update preferences
- `POST /api/v1/user/notifications/subscribe` - Subscribe to channel
- `POST /api/v1/user/notifications/unsubscribe` - Unsubscribe

## Push Notification System

### Firebase Integration
- FCM (Firebase Cloud Messaging)
- Token-based device registration
- Topic-based message routing

### Message Types
1. **Data Messages**
   - Silent background updates
   - In-app data sync

2. **Notification Messages**
   - System tray display
   - Lock screen alerts

3. **High Priority**
   - Urgent security alerts
   - Price alerts

## Email Notification Settings

### Frequency Options
- Real-time
- Daily digest
- Weekly digest
- Off

### Email Categories
- Account activity
- Security alerts
- Market updates
- Promotions
- Research & insights

## SMS Notification Settings

### Phone Verification
- Requires verified phone number
- Phone change requires 2FA

### SMS Categories
- Transaction alerts (free)
- Security codes (free)
- Marketing (opt-in)

## Error States

### Permission Denied
- Show explanation dialog
- Link to device settings
- Alternative notification method

### Network Error
- Retry button
- Cached preferences display
- Background sync when online

## System Notifications

### Android 13+ (API 33+)
- Runtime permission required
- Separate permission for each type
- Rationale dialog required

### Notification Channels
- `trading_alerts` - Trading notifications
- `security_alerts` - Security notifications
- `account_updates` - Account notifications
- `marketing` - Marketing notifications

## Related Files

- Layout: `2131628322.xml` - Notification settings
- Layout: `2131626269.xml` - Push permission
- Layout: `2131628625.xml` - Toggle layout
- Component: `KitSwitch` - Toggle
- Component: `KitNotification` - Notification display
