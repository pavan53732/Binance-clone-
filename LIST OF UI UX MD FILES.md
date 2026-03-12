# List of UI/UX MD Files - Binance Clone Project

## Overview

This document provides a complete index of all UI/UX documentation files in the Binance Clone project. These MD files contain detailed specifications for building the Binance Android application interface.

---

## Screen Container Architecture

The Binance mobile application contains approximately **200–240 UI interfaces** when counting:

- Activities
- Fragments
- Navigation destinations
- Overlay interfaces (dialogs, bottom sheets)
- RecyclerView UI modules
- Compose / binding UI components

These are grouped into **Screen Containers** so the system can be documented in **50 specification files**.

Hierarchy model:

Application
│
├── Screen Container
│   ├── Screen Variant
│   │   ├── Sections
│   │   │   ├── Tabs
│   │   │   └── Widgets
│   │   └── Overlay Interfaces

---

### Hidden UI Interfaces

Some UI interfaces are not documented as standalone files.

These include:

- dialog fragments
- bottom sheet interfaces
- RecyclerView item layouts
- popup menus
- contextual overlays

These interfaces must be documented **inside the container screen file** where they appear.

**Documentation Architecture** (Correct Build Order):
- **Files 01–02**: Application definition & screen catalog
- **Files 03–06**: Exchange Core screens
- **Files 07–11**: Web3 Core screens
- **Files 12–16**: Exchange Advanced modules
- **Files 17–21**: Web3 Advanced modules
- **Files 22–31**: Account & Settings
- **Files 32–35**: Design System
- **Files 36–41**: UI Foundation
- **Files 42–50**: Component Specifications

This order allows AI builders to understand: App structure → screens → modules → UI system → components

---

## Total UI/UX Documentation: 54 MD Files (Planned)

## 00-02: Application Definition

These files define the **application structure**, **screen catalog**, and **master ID registries**.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 0 | `00-system-index.md` | Master index of SCR, COMP, OVR, and WGT IDs | 📝 Planned |
| 1 | `01-complete-ui-specification.md` | Complete UI specification | 📝 Planned |
| 2 | `02-complete-screen-catalog.md` | Screen catalog | 📝 Planned |

---

## 03-06: Exchange Core Screens

These files document the **core exchange screens** - main entry points.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 3 | `03-exchange-homepage.md` | Exchange homepage | 📝 Planned |
| 4 | `04-exchange-markets.md` | Markets screen | 📝 Planned |
| 5 | `05-exchange-trade.md` | Trade screen (Spot/Margin/Futures) | 📝 Planned |
| 6 | `06-exchange-assets-wallet.md` | Assets/wallet screen | 📝 Planned |

> **Important:** Trade screen (05) is a single container with variants:
> - Spot Mode
> - Margin Mode
> - Futures Mode
>
> This prevents AI builder from generating duplicate order forms, charts, and order books.

---

## 07-11: Web3 Core Screens

These files document the **core Web3 wallet screens** - main entry points.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 7 | `07-web3-wallet-home.md` | Web3 wallet home | 📝 Planned |
| 8 | `08-web3-wallet-markets.md` | Web3 markets | 📝 Planned |
| 9 | `09-web3-wallet-trade.md` | Web3 trade | 📝 Planned |
| 10 | `10-web3-wallet-discover-dapps.md` | Discover page with Discover, Earn, Booster, DApps tabs | 📝 Planned |
| 11 | `11-web3-wallet-assets.md` | Web3 assets | 📝 Planned |

---

## 12-16: Exchange Advanced Modules

These files document **advanced exchange modules** - order book, charts, etc.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 12 | `12-exchange-order-book.md` | Order book UI | 📝 Planned |
| 13 | `13-exchange-chart-system.md` | Trading charts | 📝 Planned |
| 14 | `14-exchange-order-types.md` | Order types UI | 📝 Planned |
| 15 | `15-exchange-open-orders.md` | Open orders | 📝 Planned |
| 16 | `16-exchange-trade-history.md` | Trade history | 📝 Planned |

---

## 17-21: Web3 Advanced Modules

These files document **advanced Web3 modules** - NFTs, networks, etc.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 17 | `17-web3-wallet-token-details.md` | Token details | 📝 Planned |
| 18 | `18-web3-wallet-nft-assets.md` | NFT gallery | 📝 Planned |
| 19 | `19-web3-wallet-swap.md` | Swap/Bridge | 📝 Planned |
| 20 | `20-web3-wallet-transaction-history.md` | Transaction history | 📝 Planned |
| 21 | `21-web3-wallet-wallet-connect.md` | WalletConnect | 📝 Planned |

> **Important:** Network Selector is NOT a standalone screen.
> It is a **reusable overlay component** documented in `50-dialogs-bottom-sheets.md`

---

## 22-31: Account & Settings

These files document **account management** and **settings**.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 22 | `22-user-profile.md` | User profile | 📝 Planned |
| 23 | `23-account-settings.md` | Account settings | 📝 Planned |
| 24 | `24-security-settings.md` | Security settings | 📝 Planned |
| 25 | `25-two-factor-authentication.md` | 2FA setup | 📝 Planned |
| 26 | `26-biometric-authentication.md` | Biometric auth | 📝 Planned |
| 27 | `27-notifications-system.md` | Notifications | 📝 Planned |
| 28 | `28-permissions-system.md` | Permissions | 📝 Planned |
| 29 | `29-error-handling-ui.md` | Error handling | 📝 Planned |
| 30 | `30-real-time-data-updates.md` | Real-time updates | 📝 Planned |
| 31 | `31-settings-flows.md` | Settings flows | 📝 Planned |

---

## 32-34: Design System

These files document the **design system** - colors, typography, spacing.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 32 | `32-colors-theme.md` | Colors and theme | 📝 Planned |
| 33 | `33-typography.md` | Typography | 📝 Planned |
| 34 | `34-dimensions-spacing.md` | Dimensions/spacing | 📝 Planned |

---

## 35-40: UI Foundation

These files document **UI foundation** - layouts, components, navigation, etc.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 35 | `35-screen-layouts.md` | Screen layouts | 📝 Planned |
| 36 | `36-ui-components.md` | UI components | 📝 Planned |
| 37 | `37-navigation-system.md` | Navigation system | 📝 Planned |
| 38 | `38-icons-drawables.md` | Icons/drawables | 📝 Planned |
| 39 | `39-strings-content.md` | Strings/content | 📝 Planned |
| 40 | `40-animations-motion.md` | Animations/motion | 📝 Planned |

---

## 41-50: Component Specifications

These files document **component specifications** - buttons, inputs, cards, etc.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 41 | `41-logo-icon-specifications.md` | Logo specs | 📝 Planned |
| 42 | `42-button-specifications.md` | Button specs | 📝 Planned |
| 43 | `43-screen-flows-navigation.md` | Screen flows | 📝 Planned |
| 44 | `44-features-overview.md` | Features overview | 📝 Planned |
| 45 | `45-data-formatting-rules.md` | Data formatting | 📝 Planned |
| 46 | `46-ui-states-loading-error-empty.md` | UI states | 📝 Planned |
| 47 | `47-input-fields.md` | Input fields | 📝 Planned |
| 48 | `48-cards-lists.md` | Cards/lists | 📝 Planned |
| 49 | `49-dialogs-bottom-sheets.md` | Dialogs/bottom sheets | 📝 Planned |
| 50 | `50-overlay-selectors.md` | Overlay selectors (network, token, chain, filters) | 📝 Planned |

---

## 📸 UI/UX Image Folders - Source of Truth

### Exchange (CeFi) - File Mapping

| Folder Name | MD File |
|-------------|---------|
| `Exchange interface Home page_` | 03-exchange-homepage.md |
| `Exchange interface market page_` | 04-exchange-markets.md |
| `Exchange interface trade page_` | 05-exchange-trade.md |
| `Exchange interface assets page_` | 06-exchange-assets-wallet.md |
| `Exchange interface order book_` | 12-exchange-order-book.md |
| `Exchange interface chart system_` | 13-exchange-chart-system.md |
| `Exchange interface order types_` | 14-exchange-order-types.md |
| `Exchange interface open orders_` | 15-exchange-open-orders.md |
| `Exchange interface trade history_` | 16-exchange-trade-history.md |

### Web3 Wallet (DeFi) - File Mapping

| Folder Name | MD File |
|-------------|---------|
| `Web3 wallet interface home_` | 07-web3-wallet-home.md |
| `Web3 wallet interface markets_` | 08-web3-wallet-markets.md |
| `Web3 wallet interface swap_` | 09-web3-wallet-trade.md |
| `Web3 wallet interface discover_` | 10-web3-wallet-discover-dapps.md |
| `Web3 wallet interface assets_` | 11-web3-wallet-assets.md |
| `Web3 wallet interface token details_` | 17-web3-wallet-token-details.md |
| `Web3 wallet interface NFT_` | 18-web3-wallet-nft-assets.md |
| `Web3 wallet interface transaction history_` | 20-web3-wallet-transaction-history.md |
| `Web3 wallet interface wallet connect_` | 21-web3-wallet-wallet-connect.md |

---

## 📊 Statistics Summary (Planned)

| Category | Count |
|----------|-------|
| Application Definition (01-02) | 2 |
| Exchange Core (03-06) | 4 |
| Web3 Core (07-11) | 5 |
| Exchange Advanced (12-16) | 5 |
| Web3 Advanced (17-21) | 5 |
| Account & Settings (22-31) | 10 |
| Design System (32-34) | 3 |
| UI Foundation (35-40) | 6 |
| Component Specs (41-50) | 10 |
| **TOTAL MD Files** | **50** |

| Asset Statistics (Estimated) | Count |
|-------------------------------|-------|
| Drawable assets | ~500-1000 |
| Layout XML files | ~200-400 |
| Source files (Java/Kotlin) | ~10,000+ |

---

## Quick Reference by Category

### Application Definition (01-02)
```
01-complete-ui-specification.md
02-complete-screen-catalog.md
```

### Exchange Core (03-06)
```
03-exchange-homepage.md
04-exchange-markets.md
05-exchange-trade.md        # Single container with Spot/Margin/Futures variants
06-exchange-assets-wallet.md
```

> **Trade screen (05)** is a single container with variants to prevent duplicate UI generation.

### Web3 Core (07-11)
```
07-web3-wallet-home.md
08-web3-wallet-markets.md
09-web3-wallet-trade.md
10-web3-wallet-discover-dapps.md
11-web3-wallet-assets.md
```

### Exchange Advanced (12-16)
```
12-exchange-order-book.md
13-exchange-chart-system.md
14-exchange-order-types.md
15-exchange-open-orders.md
16-exchange-trade-history.md
```

### Web3 Advanced (17-21)
```
17-web3-wallet-token-details.md
18-web3-wallet-nft-assets.md
19-web3-wallet-swap.md
20-web3-wallet-transaction-history.md
21-web3-wallet-wallet-connect.md
```

### Account & Settings (22-31)
```
22-user-profile.md
23-account-settings.md
24-security-settings.md
25-two-factor-authentication.md
26-biometric-authentication.md
27-notifications-system.md
28-permissions-system.md
29-error-handling-ui.md
30-real-time-data-updates.md
31-settings-flows.md
```

### Design System (32-34)
```
32-colors-theme.md
33-typography.md
34-dimensions-spacing.md
```

### UI Foundation (35-40)
```
35-screen-layouts.md
36-ui-components.md
37-navigation-system.md
38-icons-drawables.md
39-strings-content.md
40-animations-motion.md
```

### Component Specifications (41-50)
```
41-logo-icon-specifications.md
42-button-specifications.md
43-screen-flows-navigation.md
44-features-overview.md
45-data-formatting-rules.md
46-ui-states-loading-error-empty.md
47-input-fields.md
48-cards-lists.md
49-dialogs-bottom-sheets.md
50-overlay-selectors.md
```

---

## Notes

1. All files are located in the `/docs` directory
2. Files are numbered for **correct build order** (dependency order for AI builders)
3. **50-file architecture** mirrors Binance's actual product structure
4. **Build order**: App definition → Screens → Modules → UI System → Components
5. **Trade screen (05)** is a single container with Spot/Margin/Futures variants - prevents duplicate UI
6. **Exchange (CeFi)** and **Web3 Wallet (DeFi)** documented separately
7. APK extraction produces ~500-1000 drawable assets, ~200-400 layouts

---

### Screen Container Model

Each file represents **one Screen Container**, not a single layout.

Inside each file document:

- screen variants
- nested tab views
- overlay interfaces
- modal flows
- fullscreen variants
- widget modules

---

### Overlay Documentation Rule

Overlay interfaces must be documented inside their parent screen.

Examples:

**Trade Screen**
- Order confirmation dialog
- Slippage settings bottom sheet
- Pair selector modal

**Markets Screen**
- Filter panel
- Sort panel
- Coin selector sheet

---

### RecyclerView UI Modules

RecyclerView item layouts represent reusable UI modules.

Examples:

- `item_market_coin.xml`
- `item_order_row.xml`
- `item_trade_history_row.xml`

These modules must be documented inside the screen where they appear.

---

### Resource Mapping (Source of Truth)

Every UI element must reference the actual resource from APK extraction.

**Why:** Prevents AI hallucination (inventing non-existent buttons, widgets, tabs)

```markdown
## Resource Mapping (Source of Truth)

Layout Files
- fragment_trade.xml
- layout_order_book.xml

View IDs
- R.id.chart_container
- R.id.order_book_list
- R.id.trade_history_list
- R.id.order_form_container

Adapters
- TradeHistoryAdapter
- OrderBookAdapter

Drawable Resources
- ic_buy_arrow.xml
- ic_sell_arrow.xml
```

**Layout Tree Example:**

```
ConstraintLayout
 ├ AppBarLayout
 │   └ Pair Selector
 ├ Chart Container
 ├ Order Book Container
 ├ Trade History List
 └ Order Form Container
```

**Source Rule:**

Every documented UI component must reference at least one concrete source:
- layout XML
- drawable resources
- menu XML
- navigation graph
- adapter item layouts
- source code view bindings

If an element does NOT exist in these sources, it should NOT be documented.

The **network selector** is NOT a screen - it is a **reusable overlay component**.

**Incorrect model:**
- Documented as standalone screen: `20-web3-wallet-network-selector.md`
- AI generates route: `/network-selector`
- Creates navigation problems

**Correct model:**
- Reusable overlay component (bottom sheet)
- Used across multiple flows:
  - Send Token → Network Selector
  - Deposit → Network Selector
  - Swap → Network Selector
  - Bridge → Network Selector

**Documentation location:**
- Should be in: `49-dialogs-bottom-sheets.md` or `50-overlay-selectors.md` (Component Spec)
- NOT as standalone screen

**Correct specification:**

```markdown
Component: Network Selector

Type: Bottom Sheet Overlay

Used In:
- Send Token flow
- Deposit flow
- Swap flow
- Bridge flow
- Wallet Settings

UI Structure:
- Header with close button
- Network search field
- Network list with chain icons
- Network fee indicators
- Testnet/Mainnet toggle

States:
- Default
- Searching
- Unsupported network
- Network unavailable

Data Model:
- chainId
- rpcEndpoint
- explorerUrl
- tokenStandard
```

**Implementation pattern:**

```
WalletContext
 ├ selectedNetwork
 ├ selectedToken
 └ balances

NetworkSelector updates selectedNetwork
Screens react to context automatically
```

**Why this matters:**
- Prevents network context resets during transfers
- Avoids duplicated network logic
- Prevents failed transaction preparation
- Correct back navigation behavior

---

### Feature Flag Interfaces

Some UI interfaces appear only when specific feature flags are enabled.

Sources:
- BuildConfig
- feature manager classes

These interfaces must still be documented even if they are conditionally rendered.

---

### Notification Entry Points

Some screens are opened from push notifications.

Examples:
- order filled notification
- deposit confirmation
- price alert trigger

These flows should be documented inside the relevant screen container.

---

### Compose and Binding UIs

Some UI components may be implemented using:

- Jetpack Compose
- ViewBinding
- DataBinding

These components may not appear as XML layouts but must still be documented in the appropriate screen container.

---

## Update History

| Date | Description |
|------|-------------|
| 2026-03-12 | Initial file created |
| 2026-03-12 | Restructured to 50-file architecture |
| 2026-03-12 | Added Screen Container Architecture |
| 2026-03-12 | Added Navigation Layer Model |
| 2026-03-12 | **Aligned with NEXT-STEPS.md build order** |
| 2026-03-12 | **Fixed Trade screen bug** - Combined Spot/Futures into single container (05-exchange-trade.md)

---

## 🎯 Next Steps

1. **Extract APK** - Decompile Binance APK using apktool + jadx
2. **Analyze resources** - Extract layouts, drawables, navigation graphs
3. **Build screen catalog** - Identify all screens using 6-layer discovery
4. **Start documentation** - Begin with application definition (01-02)
5. **Document screens** - Exchange core (03-06) then Web3 core (07-11)
6. **Document modules** - Exchange advanced (12-16) then Web3 advanced (17-21)
7. **Document settings** - Account & settings (22-31)
8. **Document design system** - Colors, typography, spacing (32-35)
9. **Document UI foundation** - Layouts, components, navigation (36-41)
10. **Document components** - Buttons, inputs, cards, dialogs (42-50)

**Correct build order**: 01-02 → 03-06 → 07-11 → 12-16 → 17-21 → 22-31 → 32-35 → 36-41 → 42-50

---

## Navigation Layer Model

To avoid misinterpreting nested tab systems, navigation is classified into three layers.

### Layer 1 — Application Navigation

Represents true application routes.

Examples:
- Home
- Markets
- Trade
- Futures
- Assets
- Web3 Wallet

### Layer 2 — Screen Container Navigation

Mode switching inside a screen container.

Examples:
- **Trade Screen** (single container file: 05-exchange-trade.md)
  - Spot Mode
  - Margin Mode
  - Futures Mode
- **Wallet Screen**
  - Assets
  - NFTs
  - DeFi

### Layer 3 — Internal Screen Navigation

Tab systems and segmented controls inside sections.

**Important:** Always define parent-child relationships for nested tabs.

**Correct Example (Markets Screen):**

```
Layer 3a: Category Tabs (Screen-level)
Tab Group: Market Categories
- Favorites
- Spot
  - Nested: USDT, BTC, FDUSD, BNB
- Futures
- ETF
- Zones
```

**Without Parent Definition (Incorrect):**
- AI generates: /markets/spot/usdt as separate route

**With Parent Definition (Correct):**
- AI generates: Single MarketsScreen with nested tab switching

Examples:
- **Markets Screen**
  - Favorites
  - Spot
    - USDT
    - BTC
    - FDUSD
  - Futures
  - ETF
- **Spot Markets Tabs**
  - USDT
  - BTC
  - FDUSD
  - BNB

---

### Why Navigation Layers Matter

Large apps like Binance contain:

- ~200 UI interfaces
- ~40 tab systems
- ~20 nested tab groups

**Common AI builder mistakes:**
1. Generating separate routes for nested tabs (/markets/spot/usdt)
2. Creating duplicate screens for mode variants
3. Breaking tab logic by treating tabs as routes

**This is prevented by:**
- **Layer 1**: True routes (new screens)
- **Layer 2**: Mode switches (variants within container)
- **Layer 3**: Tab systems with parent-child relationships

**Markets Example:**
- Incorrect: MarketsPage → SpotPage → USDTPage (3 routes)
- Correct: MarketsScreen → CategoryTabBar → PairTabBar (1 screen)

---

### Documentation Template Addition

For each MD file, specify the navigation layer:

```markdown
## Navigation Layer

[Layer 1 — Application Route] / [Layer 2 — Screen Mode] / [Layer 3 — Internal Tab System]
```

**Example (Trade Screen):**
- Navigation Layer: 2
- Screen Container: Trade
- Variants: Spot Mode, Margin Mode, Futures Mode

**Example (Markets Screen - Chart Section):**
- Navigation Layer: 3
- Tabs: 1m, 5m, 15m, 1h, 4h

---

### Tab Hierarchy Documentation Rule

For screens with nested tabs (like Markets), always define **parent-child relationships**.

**Correct Pattern:**

```markdown
## Tab Architecture

Tab Layer 1 (Screen-level tabs)

Tab Group: [Group Name]
Tabs:
- Tab 1
- Tab 2
- Tab 3

Tab Layer 2 (Nested tabs inside parent)

Parent Tab: [Parent Tab Name]
Tab Group: [Nested Group Name]
Tabs:
- Nested Tab 1
- Nested Tab 2
```

**Example (Markets Screen):**

```markdown
## Tab Architecture

Tab Layer 1: Category Tabs

Tab Group: Market Categories
Tabs:
- Favorites
- Spot
- Futures
- ETF
- Zones

Tab Layer 2: Nested Pair Tabs (inside Spot)

Parent Tab: Spot
Tab Group: Spot Pair Categories
Tabs:
- USDT
- BTC
- FDUSD
- BNB
```

**Important:** Always specify `Parent Tab` for nested tab groups to prevent AI builder from generating separate screens.

---

## 51-53: Data & Backend Integration

These files document the **backend systems** driving the UI, including models, APIs, and real-time sockets.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 51 | `51-data-models.md` | Models (Market, Order, Trade, Asset) | 📝 Planned |
| 52 | `52-api-endpoints.md` | API endpoint discovery (REST/GraphQL) | 📝 Planned |
| 53 | `53-event-system.md` | WebSocket streams, LiveData, EventBus | 📝 Planned |

---

## Estimated UI Coverage

Typical Binance mobile application structure:

| Category | Count |
|----------|-------|
| Activities | ~10 |
| Fragments | ~120 |
| Navigation destinations | ~40 |
| Overlay interfaces | ~30 |
| Recycler UI modules | ~30 |
| Compose / binding UIs | ~10 |
| **Total UI interfaces** | **~200–240** |

These interfaces are grouped into **54 screen containers** documented in this specification.

---

*End of File*
