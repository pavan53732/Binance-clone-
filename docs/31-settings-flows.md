# Settings Flows

## Overview

This document covers complex user flows within the Settings system, including account deletion, identity verification (KYC), and other multi-step settings processes. These flows are part of the `com.prometheus.account` package.

## Complex Flows

### 1. Account Deletion Flow
### 2. Identity Verification (KYC) Flow
### 3. Account Verification Flow
### 4. Phone Number Change Flow
### 5. Email Change Flow

---

## Account Deletion Flow

### Overview
Allows users to permanently delete their account and all associated data.

### Flow Steps

```
┌─────────────────────────────────────────┐
│         Account Settings                 │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  ...                            │   │
│  │  Delete Account          [>]    │   │
│  │  ...                            │   │
│  └─────────────────────────────────┘   │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│  Delete Account                         │
│                                         │
│  Are you sure you want to delete       │
│  your account? This action cannot      │
│  be undone.                            │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  I understand, delete my        │   │
│  │  account                       │   │
│  └─────────────────────────────────┘   │
│                                         │
│         [Cancel]    [Delete]            │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│  Confirm Deletion                       │
│                                         │
│  Enter your password to confirm         │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Password                       │   │
│  └─────────────────────────────────┘   │
│                                         │
│         [Cancel]    [Confirm]          │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│  Processing                             │
│                                         │
│  Deleting account...                    │
│                                         │
│  [Progress Indicator]                   │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│  Account Deleted                        │
│                                         │
│  Your account has been deleted.         │
│  Thank you for using our service.       │
│                                         │
│         [Return to Login]               │
└─────────────────────────────────────────┘
```

### Requirements
- Password verification
- 2FA verification (if enabled)
- No pending transactions

### Data Deletion
- Personal information
- Trading history
- KYC documents
- Connected accounts

---

## Identity Verification (KYC) Flow

### Overview
The KYC (Know Your Customer) flow verifies user identity for increased limits and features.

### Verification Levels

| Level | Name | Limits | Requirements |
|-------|------|--------|--------------|
| 0 | Unverified | Basic | None |
| 1 | Basic | Medium | Email + Phone |
| 2 | Intermediate | High | ID Document |
| 3 | Full | Unlimited | + Selfie + Address |

### Flow Steps

#### Step 1: Start KYC
```
┌─────────────────────────────────────────┐
│  Verify Your Identity                   │
│                                         │
│         [Identity Icon]                  │
│            64x64dp                      │
│                                         │
│  Complete identity verification         │
│  to unlock more features                │
│                                         │
│  Current Level: Unverified              │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │         [Get Started]           │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Do it later]             │   │
│  └─────────────────────────────────┘   │
└──────────────────┬──────────────────────┘
                   │
                   ▼
```

**String Resources:**
- `ms_account_userinfo_kyc_verify` - Verify button
- `have_not_pass_kyc` - Not verified text
- `verify_now` - Verify now button

#### Step 2: Pre-Check
```
┌─────────────────────────────────────────┐
│  Identity Pre-Check                     │
│                                         │
│  Please ensure:                         │
│                                         │
│  ✓ You are 18 years or older           │
│  ✓ Valid government-issued ID          │
│  ✓ Good internet connection             │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │        [Continue]              │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Go Back]                 │   │
│  └─────────────────────────────────┘   │
└──────────────────┬──────────────────────┘
                   │
                   ▼
```

**String Resources:**
- `content_editor_kyc_pre_check_title` - Pre-check title
- `content_editor_kyc_pre_check_getauthentication` - Get authentication
- `voptions_landing_guide_not_now` - Not now

#### Step 3: Document Selection
```
┌─────────────────────────────────────────┐
│  Select Document Type                   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  [>] Passport                   │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  [>] National ID               │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  [>] Driver's License          │   │
│  └─────────────────────────────────┘   │
│                                         │
└──────────────────┬──────────────────────┘
                   │
                   ▼
```

#### Step 4: Document Capture
```
┌─────────────────────────────────────────┐
│  Scan Document                          │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │      [Document Frame]           │   │
│  │                                 │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Position your document within         │
│  the frame and hold steady             │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Capture]                 │   │
│  └─────────────────────────────────┘   │
└──────────────────┬──────────────────────┘
                   │
                   ▼
```

#### Step 5: Liveness Check (Face Verification)
```
┌─────────────────────────────────────────┐
│  Liveness Check                         │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │                                 │   │
│  │      [Camera Preview]           │   │
│  │         180x180dp              │   │
│  │                                 │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Please complete the following:        │
│                                         │
│  1. Look at the camera                 │
│  2. Nod slowly                          │
│  3. Turn left/right                     │
│                                         │
└──────────────────┬──────────────────────┘
```

**String Resources:**
- `kyc_liveness_check` - Liveness check title
- `kyc_liveness_check_desc` - Liveness description
- `kyc_liveness_check_tip1` - Tip 1
- `kyc_liveness_check_tip2` - Tip 2

#### Step 6: Additional Information
```
┌─────────────────────────────────────────┐
│  Additional Information                 │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  First Name                     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Last Name                      │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Date of Birth                  │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Address                        │   │
│  └─────────────────────────────────┘   │
│                                         │
│         [Submit]                        │
└──────────────────┬──────────────────────┘
```

#### Step 7: Verification Processing
```
┌─────────────────────────────────────────┐
│  Verification In Progress               │
│                                         │
│  Your documents are being verified.     │
│                                         │
│  This usually takes 5-10 minutes.       │
│                                         │
│  [Progress Indicator]                  │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [View Status]             │   │
│  └─────────────────────────────────┘   │
└──────────────────┬──────────────────────┘
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
┌─────────────┐    ┌─────────────────┐
│  Approved   │    │   Under Review  │
└─────────────┘    └─────────────────┘
```

#### Step 8: Result
```
┌─────────────────────────────────────────┐
│  Verification Complete                  │
│                                         │
│         [Success Icon]                  │
│            96x96dp                      │
│                                         │
│  Congratulations!                       │
│  Your identity has been verified.      │
│                                         │
│  New Limit: Unlimited                   │
│                                         │
│         [Done]                          │
└─────────────────────────────────────────┘
```

OR

```
┌─────────────────────────────────────────┐
│  Verification Failed                    │
│                                         │
│         [Error Icon]                    │
│            96x96dp                      │
│                                         │
│  Verification Failed                    │
│                                         │
│  Reason: Document not clear            │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Try Again]               │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Contact Support]          │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

**String Resources:**
- `ocbs_kyc_new_step` - New step
- `ms_kyc_try_again` - Try again
- `ocbs_onafirq_I_have_authed` - I have authed

---

## Account Verification Flow

### Simple Verification (Email + Phone)

```
┌─────────────────────────────────────────┐
│  Account Verification                    │
├─────────────────────────────────────────┤
│                                         │
│  Step 1: Email Verification             │
│  ┌─────────────────────────────────┐   │
│  │  [✓] Email verified            │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Step 2: Phone Verification             │
│  ┌─────────────────────────────────┐   │
│  │  [>] Verify phone number       │   │
│  └─────────────────────────────────┘   │
│                                         │
│  Step 3: Identity (Optional)            │
│  ┌─────────────────────────────────┐   │
│  │  [>] Complete KYC             │   │
│  └─────────────────────────────────┘   │
│                                         │
└─────────────────────────────────────────┘
```

### Phone Verification Flow

```
┌─────────────────────────────────────────┐
│  Phone Verification                     │
│                                         │
│  Enter your phone number                │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  +1 (555) 123-4567            │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Send Code]              │   │
│  └─────────────────────────────────┘   │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│  Enter Verification Code                │
│                                         │
│  We sent a code to +1 (555) 123-4567   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  1   2   3   4   5   6        │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Resend Code]             │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Use Voice Call]          │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Email Verification Flow

```
┌─────────────────────────────────────────┐
│  Email Verification                     │
│                                         │
│  We sent a verification link to:       │
│  user@example.com                       │
│                                         │
│  Please check your email and click     │
│  the verification link.                 │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Resend Email]            │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │      [Change Email]            │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

---

## Additional KYC Flows

### Fiat KYC Flow

```
┌─────────────────────────────────────────┐
│  Fiat Account Verification               │
├─────────────────────────────────────────┤
│                                         │
│  Daily Limit: $0 / $900                 │
│                                         │
│  [Increase Limit Button]                │
│                                         │
│  Learn more about limits:               │
│  fiat_kyc_learn_more_in                 │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `fiat_kyc_account_limit_increase_to` - Limit increase
- `fiat_kyc_daily_remaining` - Daily remaining
- `fiat_kyc_learn_more_in` - Learn more

### Additional KYC Terms

```
┌─────────────────────────────────────────┐
│  Additional Information                 │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  c2c_addtional_kyc_term_description │
│  └─────────────────────────────────┘   │
│                                         │
│  [ ] I agree to the terms              │
│                                         │
│         [Confirm]                       │
└─────────────────────────────────────────┘
```

**String Resources:**
- `c2c_addtional_kyc_term_description` - Term description
- `c2c_addtional_kyc_term_agree` - Agree text

---

## KYC Status Display

The app uses `FinanceAccountStatusBtnLayout` component to display KYC status:

```xml
<com.finance.commonbusiness.feature.kyc.widge.FinanceAccountStatusBtnLayout 
    android:id="@+id/accountStatusBtn" />
```

### Status States
- **Not Started**: "Verify Now" button
- **In Progress**: "Continue Verification"
- **Pending Review**: "Under Review" message
- **Approved**: Checkmark badge
- **Rejected**: "Appeal" option

---

## Related Files

- Layout: `2131625199.xml` - KYC not passed
- Layout: `2131625230.xml` - Verification confirm
- Layout: `2131625263.xml` - KYC try again
- Layout: `2131623987.xml` - Liveness check
- Layout: `onfido_fragment_nfc_permission.xml` - NFC
- Strings: KYC-related in `strings.xml`
- Component: `FinanceAccountStatusBtnLayout`
