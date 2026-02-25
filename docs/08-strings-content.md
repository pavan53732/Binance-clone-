# Binance UI/UX Knowledge Base - Strings & Content

## Overview

This document catalogs the string resources used in the Binance Android app, including screen titles, button labels, error messages, and placeholder texts.

---

## String Resource Categories

### App Core Strings

| String Name        | Value              | Usage            |
| ------------------ | ------------------ | ---------------- |
| `app_name`         | lib-dynamic-layout | Library name     |
| `binance_app_name` | Binance            | App display name |
| `binance_com`      | www.binance.com    | Website URL      |

### Common Actions

| String Name            | Value    | Usage           |
| ---------------------- | -------- | --------------- |
| `_cancel`              | Cancel   | Cancel button   |
| `_confirm`             | Confirm  | Confirm button  |
| `_save`                | Save     | Save button     |
| `_submit`              | Submit   | Submit button   |
| `_edit`                | Edit     | Edit button     |
| `_remove`              | Remove   | Remove button   |
| `_add`                 | Add      | Add button      |
| `_next`                | Next     | Next button     |
| `_got_it`              | OK       | Dismiss button  |
| `_understand_continue` | Continue | Continue button |

### Authentication & Account

| String Name       | Value            | Usage                     |
| ----------------- | ---------------- | ------------------------- |
| `_login`          | Log In           | Login button              |
| `_signup`         | Sign Up          | Registration button       |
| `Logout`          | Log Out          | Logout action             |
| `_confirm_login`  | Confirm Login    | Login confirmation        |
| `_2fa`            | 2FA              | Two-factor authentication |
| `account`         | Account          | Account section           |
| `account_uid`     | Binance ID (UID) | User identifier           |
| `_switch_account` | Switch Account   | Account switching         |

### Trading Actions

| String Name | Value  | Usage             |
| ----------- | ------ | ----------------- |
| `_buy`      | Buy    | Buy action        |
| `_sell`     | Sell   | Sell action       |
| `_buy_b`    | B      | Buy abbreviation  |
| `_sell_s`   | S      | Sell abbreviation |
| `_trade`    | Trade  | Trading action    |
| `_market`   | Market | Market order type |
| `_limit`    | Limit  | Limit order type  |
| `_price`    | Price  | Price field       |
| `_amount`   | Amount | Amount field      |
| `_total`    | Total  | Total value       |
| `_filled`   | Filled | Order status      |

### Assets

| String Name   | Value      | Usage                  |
| ------------- | ---------- | ---------------------- |
| `_deposit`    | Deposit    | Deposit action         |
| `_withdrawal` | Withdrawal | Withdraw action        |
| `_transfer`   | Transfer   | Transfer action        |
| `_assets`     | Assets     | Assets section         |
| `_available`  | Available  | Available balance      |
| `balance`     | Balance    | Balance label          |
| `avbl`        | Avbl       | Available abbreviation |
| `_wallets`    | Assets     | Assets section         |

---

## Screen Titles

### Main Screens

| String Name      | Value              |
| ---------------- | ------------------ |
| `About`          | About Us           |
| `_announcements` | Announcements      |
| `_notifications` | Push Notifications |
| `_setting`       | Settings           |
| `_support`       | Help & Support     |
| `_faq`           | FAQ                |

### Trading Screens

| String Name    | Value       |
| -------------- | ----------- |
| `_book`        | Order Book  |
| `_history`     | History     |
| `_filter`      | Filter      |
| `ad_filter`    | Filter      |
| `_price_alert` | Price Alert |

### C2C/P2P Screens

| String Name           | Value       |
| --------------------- | ----------- |
| `c2c_appeal`          | Appeal      |
| `c2c_block`           | Block       |
| `c2c_block_area`      | Block Trade |
| `c2c_cash_trade`      | Cash        |
| `c2c_chat_add_friend` | Add Friend  |

---

## Button Labels

### Primary Actions

| String Name     | Value     |
| --------------- | --------- |
| `buy_now`       | Buy Now   |
| `_all_in`       | Buy all   |
| `add_fund`      | Add Funds |
| `add_favorites` | Favorites |
| `_scan`         | Scan      |
| `_search`       | Search    |

### Secondary Actions

| String Name     | Value            |
| --------------- | ---------------- |
| `_cancel_all`   | Cancel All       |
| `_rescan`       | Rescan           |
| `_see_progress` | See progress     |
| `copy`          | Copy (from menu) |

### Dialog Buttons

| String Name | Value |
| ----------- | ----- |
| `OK`        | OK    |
| `Yes`       | Yes   |
| `No`        | No    |
| `ON`        | On    |
| `OFF`       | Off   |

---

## Error Messages

### Network Errors

| String Name                                     | Value                                                  |
| ----------------------------------------------- | ------------------------------------------------------ |
| `base_format_network_request_backend_error`     | Server is busy, please try to request a moment later   |
| `base_format_network_request_time_out`          | Request timed out, please check your network status    |
| `base_format_network_request_unauthorized`      | Haven't logged in yet, please log in first             |
| `base_format_network_request_too_many_requests` | Your operation is too frequent, please try again later |

### Validation Errors

| String Name                | Value                                                         |
| -------------------------- | ------------------------------------------------------------- |
| `address_can_not_be_empty` | Address can not be empty.                                     |
| `address_cannot_be_null`   | Address cannot be empty.                                      |
| `amount_cannot_be_null`    | Amount cannot be empty.                                       |
| `amount_too_higher`        | Please enter an amount no higher than your available balance. |
| `avbl_is_not_enough`       | Insufficient balance. Please top up first.                    |

### C2C Trading Errors

| String Name                  | Value                              |
| ---------------------------- | ---------------------------------- |
| `c2c_appeal_submit_failed`   | Failed to Submit                   |
| `c2c_bank_account_error`     | Enter a valid bank account number. |
| `c2c_bank_account_not_exist` | Account does not exist.            |

---

## Placeholder Texts

### Input Placeholders

| String Name            | Value                                                                    |
| ---------------------- | ------------------------------------------------------------------------ |
| `_search`              | Search                                                                   |
| `abc_search_hint`      | Search…                                                                  |
| `c2c_add_payment_tips` | Tips: During trade, details of the added payment method will be shown... |

### Empty States

| String Name                       | Value            |
| --------------------------------- | ---------------- |
| `account_activity_no_history_lab` | No records       |
| `alpha_trading_no_history_found`  | No history found |
| `alpha_trading_no_more_data`      | No more data     |
| `alpha_trading_no_positions`      | No Holdings.     |

---

## Status Messages

### Order Status

| String Name                                                    | Value            |
| -------------------------------------------------------------- | ---------------- |
| `_complete`                                                    | Complete         |
| `_filled`                                                      | Filled           |
| `Failure`                                                      | Failure          |
| `c2c.c2cOrderDdetailViewController.orderStatus.cancelled.text` | Canceled         |
| `alpha_limit_order_status_new`                                 | New              |
| `alpha_limit_order_status_partially_filled`                    | Partially Filled |
| `alpha_limit_order_status_expired`                             | Expired          |
| `alpha_limit_order_status_rejected`                            | Rejected         |

### Processing Status

| String Name                              | Value       |
| ---------------------------------------- | ----------- |
| `_connecting_`                           | Connecting… |
| `alpha_token_history_status_1`           | Processing  |
| `alpha_token_history_status_2`           | Succeed     |
| `alpha_token_history_status_3`           | Failed      |
| `alpha_trading_order_history_processing` | Processing  |
| `alpha_trading_order_history_completed`  | Completed   |
| `alpha_trading_order_history_failed`     | Failed      |

---

## Time & Date Strings

### Time Periods

| String Name | Value    |
| ----------- | -------- |
| `_1_day`    | 1D       |
| `_1_week`   | 1W       |
| `_1_month`  | 1M       |
| `_3_month`  | 3M       |
| `End_time`  | End Time |

### Relative Time

| String Name     | Value             |
| --------------- | ----------------- |
| `b8_paid_s`     | Paid just now     |
| `b8_paid_m`     | Paid %1$sm ago    |
| `b8_paid_h`     | Paid %1$sh ago    |
| `b8_paid_d`     | Paid %1$sd ago    |
| `b8_refunded_s` | Refunded just now |

---

## Currency & Market Strings

### Market Types

| String Name    | Value       |
| -------------- | ----------- |
| `_btc_market`  | BTC Market  |
| `_eth_market`  | ETH Market  |
| `_bnb_market`  | BNB Market  |
| `_usdt_market` | USDT Market |
| `_um_market`   | USDⓈ-M      |
| `_cm_market`   | COIN-M      |

### Trading Pairs

| String Name | Value |
| ----------- | ----- |
| `_Pair`     | Pair  |
| `_new_pair` | Pair  |
| `_Type`     | Type  |
| `_type`     | Type  |

---

## C2C/P2P Trading Strings

### Order Actions

| String Name                                | Value                      |
| ------------------------------------------ | -------------------------- |
| `c2c_buy_deposit`                          | Buy/Deposit                |
| `c2c_sell_withdraw`                        | Sell/Withdraw              |
| `c2c_buyer_payment_page_transferred_label` | Transferred, Notify Seller |
| `c2c_cash_i_have_paid`                     | I Have Paid                |
| `c2c_appeal`                               | Appeal                     |

### Payment Methods

| String Name                            | Value         |
| -------------------------------------- | ------------- |
| `bank_account`                         | Bank Name     |
| `bank_card`                            | Bank          |
| `c2c_add_payment_method_select_a_bank` | Select a Bank |

### Chat & Communication

| String Name                      | Value                 |
| -------------------------------- | --------------------- |
| `c2c_chat_add_friend`            | Add Friend            |
| `c2c_chat_add_contact`           | Add Contact           |
| `c2c_chat_accept_friend_request` | Accept Friend Request |
| `c2c_appeal_chat_now`            | Chat now              |

---

## Alpha Trading Strings

### Trading Types

| String Name                  | Value         |
| ---------------------------- | ------------- |
| `alpha_instant`              | Alpha Instant |
| `alpha_limit`                | Alpha Limit   |
| `alpha_market`               | Alpha Market  |
| `alpha_trading_instant_type` | Instant       |
| `alpha_trading_limit_type`   | Limit         |

### Order Labels

| String Name                | Value     |
| -------------------------- | --------- |
| `alpha_limit_order_amount` | Amount    |
| `alpha_limit_order_price`  | Price     |
| `alpha_limit_order_total`  | Total     |
| `alpha_limit_order_fee`    | Fee       |
| `alpha_limit_order_no`     | Order No. |

---

## Widget Strings

| String Name                       | Value                                           |
| --------------------------------- | ----------------------------------------------- |
| `app_widget_coins_description`    | Track crypto prices for the last 24 hours.      |
| `app_widget_favorite_description` | Keep track of your favorite trading pairs here. |
| `app_widget_holdings_login_tip`   | Login to See Holdings                           |
| `appwidget_label_name`            | Binance                                         |
| `add_widget`                      | Add Widget                                      |

---

## Accessibility Strings

| String Name                 | Value           |
| --------------------------- | --------------- |
| `accessibility_role_button` | Button (按钮)   |
| `accessibility_role_image`  | Image (图片)    |
| `accessibility_role_input`  | Input (输入框)  |
| `accessibility_role_link`   | Link (链接)     |
| `accessibility_role_search` | Search (搜索框) |
| `accessibility_role_switch` | Switch (开关)   |
| `accessibility_role_text`   | Text (文本)     |

---

## Biometric & Security

| String Name                               | Value                                                     |
| ----------------------------------------- | --------------------------------------------------------- |
| `biometric_prompt_message`                | Use your biometric to continue                            |
| `biometric_or_screen_lock_prompt_message` | Use your biometric or screen lock to continue             |
| `android_version_not_support_touchid`     | Your device or Android version does not support Touch ID. |

---

## Internationalization

### Supported Languages

The app includes string resources for 40+ languages in values-\* directories:

- English (default)
- Chinese (zh, zh-rTW)
- Japanese (ja)
- Korean (ko)
- Spanish (es)
- French (fr)
- German (de)
- Russian (ru)
- And many more...

### RTL Support

The app includes RTL (Right-to-Left) specific resources:

- `values-ldrtl/` - RTL string values
- `drawable-ldrtl/` - RTL drawable resources

---

## String Formatting Patterns

### Parameterized Strings

Many strings use parameter placeholders:

| Pattern     | Example                  |
| ----------- | ------------------------ |
| `%1$s`      | Single string parameter  |
| `%1$d`      | Single integer parameter |
| `%1$s %2$s` | Multiple parameters      |

**Examples**:

- `alpha_trading_trade_max_amount` → "Max amount %1$s"
- `c2c_calendar_event_time_tips` → "Your %1$s recurring alert will begin on %2$s at %3$s"

### HTML Formatting

Some strings contain HTML formatting:

- `<hl1>` / `</hl1>` - Highlight formatting
- `<b>` / `</b>` - Bold formatting
- `&` - Ampersand escape

---

## Notes

1. Strings file is very large (66,000+ tokens) with 1,776+ lines shown
2. Many strings are prefixed with feature identifiers (c2c*, alpha*, b8\_)
3. Error messages include detailed user guidance
4. Accessibility strings are provided in Chinese characters
5. HTML formatting is used for rich text in strings
6. Parameterized strings support dynamic content
7. C2C/P2P trading has the most extensive string resources
