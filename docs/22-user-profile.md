# User Profile Screen

## Overview

The User Profile screen allows users to view and manage their account information including avatar, username, UID, verification level, and profile settings. This screen is part of the account management system under the `com.prometheus.account` package.

## Page Route

- **Route**: `me/profile` or `account/profile`
- **Navigation**: Bottom Navigation → Profile tab → Profile header
- **Package**: `com.prometheus.account`

## Workflow Context

This screen is typically accessed from:
1. Bottom navigation bar → Profile icon
2. Settings → Account → Profile
3. Header tap on any account-related screen

## Component Structure

### Main Components

```
┌─────────────────────────────────────────┐
│              App Bar                     │
│  [←]              Profile              │
├─────────────────────────────────────────┤
│           Profile Header                │
│  ┌──────┐                               │
│  │ Avatar│  Username                    │
│  │  96  │  UID: **********            │
│  │  dip  │  Verification Level         │
│  └──────┘  [Edit Profile Button]       │
├─────────────────────────────────────────┤
│           Profile Stats                 │
│  ┌────────┬────────┬────────┐          │
│  │Orders  │Followers│Following│         │
│  │  142   │  28    │   15   │          │
│  └────────┴────────┴────────┘          │
├─────────────────────────────────────────┤
│           Menu Items                     │
│  ┌─────────────────────────────────┐    │
│  │ [Icon] My Orders          [>]  │    │
│  ├─────────────────────────────────┤    │
│  │ [Icon] My Favorites        [>]  │    │
│  ├─────────────────────────────────┤    │
│  │ [Icon] Address Book         [>]  │    │
│  ├─────────────────────────────────┤    │
│  │ [Icon] Payment Methods      [>]  │    │
│  └─────────────────────────────────┘    │
├─────────────────────────────────────────┤
│           Additional Options            │
│  ┌─────────────────────────────────┐    │
│  │ [Icon] Settings             [>]  │    │
│  ├─────────────────────────────────┤    │
│  │ [Icon] Help & Support       [>]  │    │
│  └─────────────────────────────────┘    │
└─────────────────────────────────────────┘
```

### Component Details

#### Profile Header Component (`2131628137` layout)
- **Avatar ImageView**: 96x96dp, centered, with `2131235474` drawable
- **Title TextView**: "payment_enable_biometrics_pay" - displays user name
- **Subtitle TextView**: "payment_enable_biometrics_pay_tips" - displays UID or additional info
- **Action Button**: "payment_activate_now" - edit profile action

#### User Information Display
- **Username Field**: Editable text field with validation
- **UID Display**: Read-only, masked for security
- **Verification Level**: Badge indicator (Unverified, Verified, Premium)
- **Profile Completion**: Progress indicator showing completed fields

#### Profile Menu Items
The profile screen contains categorized menu items:

1. **Trading**
   - My Orders
   - Order History
   - Trading Preferences

2. **Account**
   - Address Book
   - Payment Methods
   - Security Settings

3. **Support**
   - Help Center
   - Contact Support
   - FAQ

## User Interactions

### Tap Interactions
- **Avatar Area**: Opens image picker for avatar change
- **Username**: Opens inline edit mode
- **Menu Items**: Navigates to respective screens
- **Edit Button**: Opens full profile edit screen

### Edit Profile Flow
```
Profile Screen → Edit Button → Profile Edit Screen
                                    ↓
                           [Avatar Selection]
                                    ↓
                           [Username Edit]
                                    ↓
                           [Save/Cancel]
```

## Data Handling

### Local Storage
- Profile image cached locally
- Username cached in SharedPreferences
- UI preferences (theme, language)

### API Calls
- `GET /api/v1/user/profile` - Fetch user profile
- `POST /api/v1/user/profile` - Update profile
- `POST /api/v1/user/avatar` - Upload avatar

## String Resources

Key strings extracted from APK:
- `c2c_user_profile_activities` - Profile activities title
- `payment_enable_biometrics_pay` - Profile title
- `payment_enable_biometrics_pay_tips` - Profile subtitle
- `payment_activate_now` - Edit profile button

## Verification Status Display

The profile shows verification status through the `FinanceAccountStatusBtnLayout` component:
- **Unverified**: "Have Not Passed KYC" (`have_not_pass_kyc`)
- **In Progress**: "Verify Now" button
- **Verified**: Verification badge displayed

## Error States

### Network Errors
- Displayed via `KitEmptyLayout` with retry option
- Strings: `nezha_loading_error`

### Validation Errors
- Inline error messages below input fields
- Color: `@color/2131099979` (error red)
- Example: `eternal_internal_additional_user_information_field_invalid_format`

## Related Files

- Layout: `2131628137.xml` - Profile header
- Layout: `2131627046.xml` - User info edit
- Layout: `2131624027.xml` - Profile activities
- Strings: `res/values/strings.xml`
