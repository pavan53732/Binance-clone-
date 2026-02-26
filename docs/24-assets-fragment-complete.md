# 24. Assets Fragment Complete

This document details the complete structure, components, data display, and action flows of the **Assets Fragment** (formerly Wallet Fragment), referencing both the provided UI screenshots and the extracted Android layouts and string resources.

## Overview

The Assets Fragment is the central hub for managing user funds. It contains horizontal navigation for different asset accounts (Overview, Funding, Spot, Futures) and presents total valuation, daily PNL, quick action buttons, and detailed asset lists.

### Corresponding Layout Files

- **Parent Layout Framework:** `wallet_fragment_parent_funds_v2.xml`
  - Contains the top navigation (`ViewPager2` with ID `@+id/2131450090`) to switch between Portfolio/Overview, Spot, Funding, etc.
- **Overview Tab Layout:** Matches `2131630114.xml` (contains `@string/take_out`, `@string/add_fund`, `@string/launcher_index_total_balance`, `tvTotalAmount`, etc.)
- **Spot/Margin Tab Layout:** Matches `2131627071.xml` (contains margin strings and `@string/wallet_funds_today_pnl`)

---

## 1. Top Navigation & Parent Layout Architecture

The entire Assets suite is housed inside a unified parent fragment that orchestrates sub-fragments via horizontal paging.

### Parent Container (`wallet_fragment_parent_funds_v2.xml`)

- **Root Layout:** `ConstraintLayout` (`@+id/2131437599`), `background="@color/2131099686"`.
- **Top Tabs:** A `RecyclerView` (`@+id/2131441598`) handles the horizontal scrollable tabs (`Overview`, `Spot`, `Funding`, `Earn`, `Margin`, `Futures`).
  - Dimensions: `layout_height="44dp"`, side padding `paddingLeft="8dp"`, `paddingRight="8dp"`.
  - Divider: A subtle 1px line below tabs (`height="0.5dp"`, `background="@color/2131099762"`).
- **Sub-pages ViewPager:** `ViewPager2` (`@+id/2131450090`) which inflates the respective child layouts taking up the remaining height (`0dp` with match constraints).

---

## 2. Overview Tab Structure (`2131630114.xml`)

This layout represents the overarching portfolio summary inside the ViewPager. It uses a `KitRefreshLayout` for pull-to-refresh capabilities, wrapping a `NestedScrollView`.

### Header & Total Value Section

- **Global Visibility Toggle Container:** Height `44dp`.
  - **Eye Icon:** `@id/2131442132`. Dimensions `20dp x fill_parent`, `scaleType="centerInside"`. Triggers the `******` masking logic.
- **Primary Balance Display:**
  - **Label:** `Est. Total Value` (`@string/balance`), margin start `15dp`, top `16dp`. Text color `@color/2131099776` (Primary Text).
  - **Primary Amount (`tvTotalAmount`):** `textSize="32.0sp"`, custom font `@font/2131296275`. Dynamic fiat ticker (e.g., `INR ▼`). marginEnd `7dp`.
  - **Fiat Equivalent (`tvTotalFiatValue`):** `textColor="@color/2131099790"` (Secondary text color).
- **Detailed Breakdowns:**
  - **Available Title (`tvAvblTitle`):** Width `110dp`, marginTop `12dp`. Displays `@string/_available`.
  - **Unavailable Title (`tvUnAvailTitle`):** Separated by a 1dp vertical guideline (`@id/2131432950` at 0.5 percent).
  - **Earn Holdings (`earn_holding_title`):** Optional section (`@string/lite_ms_funds_detail_earn_holdings`).

### Quick Action Sub-Flows

Primary actions operate via a bottom-anchored `LinearLayout` (`@id/2131450623`):

1. **Deposit / Add Funds (`@id/2131428524`):**
   - Uses `KitButton` with `radius="24dp"`. Style `@style/2132148734` (Primary Yellow).
   - **Flow:** Triggers a bottom sheet (or direct intent) to the C2C/Fiat deposit directory. Requires user KYC check validation in the interactor logic.
2. **Withdraw / Take Out (`@id/2131428522`):**
   - Uses `KitButton` with `radius="24dp"`. Style `@style/2132148739` (Secondary Grey).
   - **Flow:** Prompts the 'Send Crypto' (on-chain or via Binance Pay / Email / Phone ID).
3. **Transfer:**
   - Opens the Internal Transfer modal to move funds between Spot, Funding, and Futures.

### Crypto / Account List (RecyclerView `@id/2131450806`)

- Inherits styling that disables visual scrollbars (`scrollbars="none"`, `overScrollMode="never"`).
- MarginTop `8dp`.

---

## 3. Spot Tab Component Specs (`2131628835.xml` Items)

Spot specifically renders individual holdings rows that require rich interaction.

### Spot Holding Item Anatomy

- **Margin Wrapper:** `FrameLayout` with `marginLeft="15dp"`, `marginTop="12dp"`, `marginRight="15dp"`.
- **Top Metrics Row:**
  - Left Header text (`@color/2131099790`, `layout_weight="1"`).
  - Right Right text (Avg Cost, `@string/spot_holdings_avg_cost`).
- **Data Row:**
  - Balance text (`textColor="@color/2131099776"`).
- **Contextual Action Buttons (Bottom of Item):**
  - Triggered dynamically if balance > 0.
  - Tucked in a horizontal `LinearLayout`.
  - Buttons (`spot_tp_sl` "Take Profit/Stop Loss", `spot_holdings_buy_sell` "Trade", `spot_holdings_add_funds` "Deposit").
  - Specs: `KitButton`, `textSize="12sp"`, Side margins `4dp`, layout weight sharing `1.0`. Style `@style/2132148741`.

### Spot Action Flow

1. **Trade:** Deep links directly into the `Pro Trading` fragment pre-filled with the selected asset's highest liquidity pair (e.g., BTC/USDT).
2. **Take Profit / Stop Loss (TPSL):** Invokes the advanced order modal specifically constrained to the user's available balance in the Spot wallet.

---

## 4. Margin Tab Structure (`2131627071.xml`)

Displays specialized metrics for leverage and debt.

- **Margin Specs:**
  - **Risk / Margin Level (`margin_borrow_margin_level`):** Title color `@color/2131099790`, Top margin `15dp`.
  - **Total Debt (`textViewTotalDebtTitle`):** Margin top `12dp`. Matches against `tv_debt_value` (`@color/2131099776`).
  - **Total Equity (`2131442518`):** MarginEnd `15dp`.
- **Margin Controls (Action Row):**
  - **Borrow (`@string/_borrow`):** `@id/2131442868`, layout width `0dp`, height `36dp`.
  - **Repay (`@string/_repay`):** `@id/2131444983`, margin L/R `8dp`.
  - **Transfer (`@string/_transfer`):** `@id/2131445817`. Next to Borrow/Repay.

---

## 5. Sub-Detailed UI/UX Rules & State Machines

### 1. The Global Visibility State Machine

- **Trigger:** Tapping the eye icon (`2131442132`).
- **Action Sequence:**
  1. Broadcasts an RxJava/LiveData state change `isAssetsVisible: Boolean`.
  2. The parent `ViewPager2` passes this state down to all child fragments (`Overview`, `Spot`, etc.).
  3. Every `<TextView>` observing this state (Total Balance, PNL, Individual Asset values) swaps its text output.
  4. **Replacement Constraint:** Text strictly becomes `******`.

### 2. Network & Latency UI Feedback (Shimmer)

- When data is fetching (e.g. during a `KitRefreshLayout` action):
  - Real numbers are hidden.
  - `ViewStub` containing Facebook Shimmer layouts (`com.facebook.shimmer.ShimmerFrameLayout`) overlays the numbers.
  - Speeds: Built natively with `shimmer_duration="1000"` or base opacity constraints matching the custom theme (e.g., base color `@color/2131099672`).

### 3. PNL Coloration Logic

- The `textColor` for "Today's PNL" (`tvAccountProfitValue`) changes based on mathematical rules via a custom ColorState list or programmatic logic.
- Positive > 0: Typically Green (`#2EBD85`).
- Negative < 0: Typically Red (`#F6465D`).
- Neutral == 0: Typically White/Gray depending on the theme (`@color/2131099776`).

### 4. Zero-Balance Compression (Empty States)

- On the `Spot` tab, if a user's holdings evaluate to purely 0.00 (and they uncheck "Hide 0 Balances" in settings):
  - Secondary action components (Earn, Quick Trade, TPSL) inside the individual `RecyclerView` items are toggled to `visibility="gone"`.
  - This decreases the individual view height computationally, acting as an auto-compressing layout to save scroll real-estate.

---

## 6. Account / Profile Drawer Component

Accessed from the top-left user icon on the main home screen (drawer layout).

### Profile Header Flow

- **Actions:**
  - Back Arrow
  - Scan Icon (`@+id/scan_icon`) -> Triggers QR Code Scanner Activity.
  - Headset / Customer Support Icon (`@+id/support_icon`) -> Opens Live Chat.
  - Settings Icon (Hexagon) -> Routes to `22-settings-complete.md` user flows.
- **Profile Info Presentation:**
  - User Avatar (Yellow placeholder/image)
  - ID Display (e.g., `ID: 892218961`)
  - Username (e.g., `User-7d8ba`)
  - Badges/Tags: `Regular` (Yellow text/background), `Verified` (Green text/border)

### Shortcut Grid Interaction

A grid menu (typically 4 items per row) for quick access:

- `Megadrop`, `Referral`, `Square`, `Customer Service`, `Copy Trading`, `P2P`.
- `Edit` -> Customizes shortcuts by opening a drag-and-drop configurator.

### Recommend Section Sub-Flows

Auto-curated or user-relevant features:

- `Simple Earn`, `Bitcoin Button`, `Alpha Events`.
- **More Services Button**: Grey button bridging to full services directory.

### Footer Toggle

- **BINANCE Lite Toggle**: A prominent card/button with right arrow `>` at the bottom to switch the global application mode between the Pro and Lite XML architectures.

---

## 7. Futures Tab (`FutureFundsAssetsFragment` -> `2131626029.xml`)

The Futures section employs a simple container layout that injects financial data into identical repeating rows. The layout structure relies heavily on dynamic string formatting for numeric values and Binance's custom scrolling views.

### 7.1 Parent Container: `2131626029.xml`

**Structure & Layout:**

- **Root ViewGroup:** `AdaptiveScrollingConstrainLayout` (`id/2131432394`)
  - Takes up full width and height (`fill_parent`).
  - Acts as the wrapper view bound by `zzagm.java`.
- **Asset List:** `AdaptiveScrollingRecycleView` (`id/2131440109`)
  - Dynamic list consuming entire available space vertically (`0.0dip` height constrained to constraints).
  - Managed by `setDebug<FutureBalance>` Adapter bound inside `FutureFundsAssetsFragment.java`.
- **Empty State Indicator:** `AppCompatTextView` (`id/2131434037`)
  - Displays `@string/no_records_found`.
  - Text color: `@color/2131099790`.
  - Drawable icon (`@drawable/2131233622`) with `4.0dip` padding.
  - Visibility toggled (`GONE` by default).
- **Action Button (Floating/Fixed):** `AppCompatImageView` (`id/2131433893`)
  - Fixed at bottom-end (`end|bottom|center`).
  - Size: `40.0dip` x `40.0dip`. Margin End: `15.0dip`, Margin Bottom: `12.0dip`.
  - Background container: `@drawable/2131236030`. Padding: `10.0dip`.
  - Tint: `@color/2131099762`.

### 7.2 Asset Item Structure: `2131626067.xml`

This defines individual assets within the Futures wallet (e.g., USDT, BNB, BTC).

**Structure & Typography:**

- **Root:** `ConstraintLayout` (`id/2131436119`)
  - Horizontal padding: `15.0dip` each side.
- **Asset Icon:** `AppCompatImageView` (`id/2131434556`)
  - Size: `20.0dip` x `20.0dip`.
  - Dynamically loaded via `NestmsetStrikePrice.m120268e`.
- **Asset Name:** `TextView` (`id/2131446260`)
  - Color: `@color/2131099776`.
  - Margin Start: `5.0dip` from the icon.
- **Special Tag Icon:** `AppCompatImageView` (`id/2131434437`)
  - Used for special classifications like `BNFCR`.
  - Size: `20.0dip` x `20.0dip`. Horizontal padding: `2.0dip`. Default `GONE`.
- **Grid Data Points:**
  Each data block consists of a Label (`TextView`) and Value (`UnicodeWrapTextView`):
  1.  **Wallet Balance:** Label `@string/future_wallet_balance` (`id/2131449231`), Value (`id/2131449232`).
  2.  **Margin Balance:** Label `@string/future_funds_maintaince_balance` (`id/tv_margin_balance_title`), Value (`id/2131447553`).
  3.  **Unrealized PNL:** Label `@string/future_funds_unrealized_pnl` (`id/2131449137`), Value (`id/2131449138`). Applies dynamic color based on profit/loss (`style="@style/2132149803"`).
  4.  **Available for Transfer:** Label `@string/future_avl_transfer` (`id/2131446311`), Value (`id/2131446312`).

  **Formatting Standards:**
  - All Labels are tinted `@color/2131099790`.
  - All Values are tinted `@color/2131099776`.
  - Values have `2.0dip` top margin offset relative to their Labels.

- **Bottom Divider:** `View` (`id/2131450007`)
  - Height: `0.5dip`.
  - Color: `@color/2131099762`.
  - Margin Top: `16.0dip`.

### 7.3 State Flows & Logic

1.  **Zero-Balance Compression Logic:**
    - Similar to the Spot tab, when the eye-icon (privacy) is turned off, the item iterates over internal IDs (`2131434037`, `2131446260`, etc.) and sets the text payload directly to `--` or `***` instead of the numerical values.
2.  **Special Asset Rules (`BNFCR` and `BFUSD`):**
    - The backend strips/omits `BFUSD` based on Themis flag `futures_usdf` or `futures_bfusd` rules. If the user possesses 0 margin balance on `BFUSD`, it forces removal.
    - PNL formats dynamic 8-decimal truncations via `AppMeasurement.m86991b(..., 8, false, RoundingMode.DOWN, 2)`.

---

## 8. Funding Tab (`FundingFundsFragment` -> `2131630278.xml`)

The Funding (formerly C2C/P2P) wallet focuses on simplified assets display for fiat and transfers.

### 8.1 Parent Container: `2131630278.xml`

- **Root Element:** `KitRefreshLayout` (`id/2131428528`).
  - Native Binance pull-to-refresh component.
- **Content Wrap:** `CoordinatorLayout` (`id/2131430585`) -> Nested `AppBarLayout` (`id/2131428012`).
- **Header Blocks (`AppBarLayout`):**
  - Includes `2131630383.xml` which contains the "Total Balance" summary.
  - "Spot Balances" quick view label (`@string/wallet_spot_balances`) -> Wait, dynamic labeling based on app state or cross-wallet transfer suggestions.
- **Scrollable Asset List:** `RecyclerView` (`id/2131440142`) inside a `ScrollingViewBehavior` ConstraintLayout.

### 8.2 Funding Header Summary: `2131630383.xml`

- **Balance Title Row:**
  - `@string/launcher_index_total_balance` label alongside a privacy eye icon toggle (`id/2131432489`).
- **Large Numeric Display:**
  - Standard 32sp text size value pair.
  - Primary (BTC Equiv) Text: `id/2131442251`.
  - Secondary (Fiat Equiv) Text: `id/2131439406`.
- Includes action row layout bindings (`id/2131450846` via `2131630213`) such as Deposit, Withdraw, Transfer for Funding.

---

## 9. Earn Tab (`EarnParentFragment` -> `2131625664.xml`)

The Earn tab is structurally different, operating more as a micro-application shell because of modular V5 / V6 upgrades dynamically loaded via Themis configurations (`test`/`test1`).

### 9.1 Base Architecture: `2131625664.xml`

- Extremely minimal XML layout serving strictly as a frame root.
- **Container:** `FrameLayout` (`id/2131430385`) tinted with `@color/2131099686`.
- **Logic Mapping:** `EarnParentFragment.java` evaluates the configuration to dynamically mount either `EarnMainV6Fragment` or `EarnMainV5Fragment` directly into the `id/2131430385` container. This handles all UI details internally.
