# Error Handling UI

## Overview

The Error Handling system provides users with clear feedback when errors occur throughout the application. This includes network errors, validation errors, authentication errors, and system errors. The app uses standardized error states, error codes, retry mechanisms, and offline state handling across all features.

## Error Categories

### 1. Network Errors
### 2. Validation Errors
### 3. Authentication Errors
### 4. System Errors
### 5. Offline/Connection Errors

## Component Structure

### Network Error Layout (`2131627615`)

```
┌─────────────────────────────────────────┐
│                                         │
│         [Refresh Icon]                  │
│            16x16dp                      │
│                                         │
│     Markets WebSocket Failure           │
│                                         │
│  Connection lost. Tap to retry.         │
│                                         │
│         [Refresh Button]                │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `markets_websocket_failure` - WebSocket error title
- `c2c_mob_exads_refresh` - Refresh text
- `copy_trading_refresh` - Copy trading refresh

### Connection Error Layout (`2131627238`)

```
┌─────────────────────────────────────────┐
│                                         │
│         [No Network Icon]               │
│            96x96dp                      │
│                                         │
│     No Internet Connection              │
│                                         │
│  Please check your network              │
│  connection and try again               │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │         [Refresh]               │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `lite_ms_funds_asset_connect_error` - Asset connect error
- `payment_connection_error` - Payment error

### Service Error Layout (`2131626144`)

```
┌─────────────────────────────────────────┐
│                                         │
│         [Error Icon]                     │
│            48x48dp                      │
│                                         │
│     Something Went Wrong                │
│                                         │
│  We encountered an unexpected error.    │
│  Please try again later.                │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │       [Try Again]               │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `futures_oop_service_error_title` - Service error title
- `futures_oop_service_error_description` - Service error desc
- `futures_oop_service_error_button_text` - Retry button

### Network Error Layout (`2131626143`)

```
┌─────────────────────────────────────────┐
│                                         │
│         [Network Icon]                   │
│            48x48dp                      │
│                                         │
│     Network Error                       │
│                                         │
│  Please check your internet             │
│  connection and try again               │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │       [Refresh]                │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `futures_oop_network_error_title` - Network error title
- `futures_oop_network_error_description` - Network error desc

### Empty State / Error Layout (`2131625435`)

```
┌─────────────────────────────────────────┐
│                                         │
│         [Error Image]                    │
│            64x64dp                      │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │     [Refresh Icon]              │    │
│  │       Refresh                   │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

## Validation Errors

### Inline Error Display
```
┌─────────────────────────────────────────┐
│  Email Address                          │
│  ┌─────────────────────────────────┐    │
│  │  invalid@email                  │    │
│  └─────────────────────────────────┘    │
│                                         │
│  Please enter a valid email address     │
│                                         │
└─────────────────────────────────────────┘
```

### Error Styles
- **Text Color**: `@color/2131099979` (error red)
- **Icon**: Error indicator
- **Position**: Below input field

### Validation Error Strings
- `c2c_mod_invaild_email_format` - Invalid email
- `eternal_internal_additional_user_information_field_invalid_format` - Invalid field
- `copy_trading_sensitive_detected` - Sensitive content detected
- `spot_total_time_error_tooltip` - Time error
- `margin_loan_remove_error` - Margin error
- `earn_auto_staking_renewing_error` - Staking error
- `future_multi_asset_position_warning` - Position warning
- `alpha_trading_error_reason` - Trading error

## Authentication Errors

### Session Expired
```
┌─────────────────────────────────────────┐
│                                         │
│     Session Expired                     │
│                                         │
│  Your session has expired.             │
│  Please log in again.                   │
│                                         │
│  ┌─────────────────────────────────┐    │
│  │         [Login]                 │    │
│  └─────────────────────────────────┘    │
│                                         │
└─────────────────────────────────────────┘
```

### Invalid Credentials
```
┌─────────────────────────────────────────┐
│                                         │
│     Login Failed                        │
│                                         │
│  Invalid email or password.            │
│  Please try again.                      │
│                                         │
└─────────────────────────────────────────┘
```

## Error Components

### KitEmptyLayout Component
Used for displaying empty states and errors:
- Layout: `2131627931.xml`, `2131627953.xml`
- Properties:
  - Icon/image
  - Title text
  - Description text
  - Action button

### Error Display Pattern
```
┌─────────────────────────────────────────┐
│  ┌─────────────────────────────────┐    │
│  │  [Error Icon] Title             │    │
│  │  Description text              │    │
│  │                                │    │
│  │  [Primary Action Button]       │    │
│  │  [Secondary Action Button]     │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

## Retry Mechanisms

### Pull-to-Refresh
- Standard swipe refresh gesture
- Used in list views
- Shows loading indicator

### Manual Retry Button
- Explicit retry action
- Secondary button style

### Auto-Retry
- Network errors: 3 attempts
- Exponential backoff
- User notification after max attempts

## Offline State Handling

### Offline Banner
```
┌─────────────────────────────────────────┐
│  [Offline Icon] You're offline          │
│  Some features may be limited           │
└─────────────────────────────────────────┘
```

### Cached Data Display
- Show cached data when offline
- Clear indication of stale data
- Disabled action buttons

### Offline Actions
- Queue actions for later
- Show pending status
- Sync when online

## Error Code Reference

### Common Error Codes

| Code | Description | Resolution |
|------|-------------|-------------|
| 400 | Bad Request | Check input |
| 401 | Unauthorized | Re-login |
| 403 | Forbidden | Contact support |
| 404 | Not Found | Check URL |
| 429 | Rate Limited | Wait and retry |
| 500 | Server Error | Try later |
| 502 | Bad Gateway | Try later |
| 503 | Unavailable | Try later |

### App-Specific Codes

- `LIMIT_EXCEEDED`: Trading limit exceeded
- `INSUFFICIENT_BALANCE`: Low balance
- `ORDER_INVALID`: Invalid order parameters
- `VERIFICATION_REQUIRED`: KYC needed

## Onfido/SNS Error States

### Network Error
- Layout: `onfido_hosted_web_module_fragment_layout.xml`
- String: `onfido_generic_error_network_title`

### Loading Error
- Layout: `onfido_loading_error.xml`
- Retry button available

### Video Connection Error
- Layout: `onfido_motion_fragment_upload_error.xml`
- String: `onfido_avc_connection_error_title`

### Generic Error
- Layout: `sns_fragment_common_error.xml`
- Layout: `sns_fragment_network_error.xml`
- Layout: `sns_fragment_init_error.xml`

## Error String Resources

### General Errors
- `wallet_error` - Wallet error
- `wallet_receive_net_error` - Receive error
- `nezha_loading_error` - Loading error
- `wallet_verification_failed` - Verification failed

### Trading Errors
- `margin_connection_error` - Margin connection
- `copy_trading_portfolio_setting_page_error` - Copy trading
- `strategy_auto_get_params_error_no_recommended` - Strategy

### Payment Errors
- `fiatpayment_verification_desc` - Payment verification
- `ocbs_kyc_remediation_guide_title_v2` - KYC guide

## Related Files

- Layout: `2131627615.xml` - WebSocket error
- Layout: `2131627238.xml` - No network
- Layout: `2131626144.xml` - Service error
- Layout: `2131626143.xml` - Network error
- Layout: `2131625435.xml` - Empty/error state
- Layout: `onfido_loading_error.xml` - Onfido error
- Layout: `sns_fragment_common_error.xml` - SNS error
- Component: `KitEmptyLayout` - Error container
