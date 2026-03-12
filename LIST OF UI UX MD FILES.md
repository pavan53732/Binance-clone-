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
- **Files 03–07**: Exchange Core screens
- **Files 08–12**: Web3 Core screens
- **Files 13–17**: Exchange Advanced modules
- **Files 18–22**: Web3 Advanced modules
- **Files 23–32**: Account & Settings
- **Files 33–41**: Design System
- **Files 42–50**: Component Specifications

This order allows AI builders to understand: App structure → screens → modules → UI system → components

---

## Total UI/UX Documentation: 50 MD Files (Planned)

## 01-02: Application Definition

These files define the **application structure** and **screen catalog**.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 1 | `01-complete-ui-specification.md` | Complete UI specification | 📝 Planned |
| 2 | `02-complete-screen-catalog.md` | Screen catalog | 📝 Planned |

---

## 03-07: Exchange Core Screens

These files document the **core exchange screens** - main entry points.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 3 | `03-exchange-homepage.md` | Exchange homepage | 📝 Planned |
| 4 | `04-exchange-markets.md` | Markets screen | 📝 Planned |
| 5 | `05-exchange-trade-spot.md` | Spot trading screen | 📝 Planned |
| 6 | `06-exchange-trade-futures.md` | Futures trading screen | 📝 Planned |
| 7 | `07-exchange-assets-wallet.md` | Assets/wallet screen | 📝 Planned |

---

## 08-12: Web3 Core Screens

These files document the **core Web3 wallet screens** - main entry points.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 8 | `08-web3-wallet-home.md` | Web3 wallet home | 📝 Planned |
| 9 | `09-web3-wallet-markets.md` | Web3 markets | 📝 Planned |
| 10 | `10-web3-wallet-swap.md` | Web3 swap | 📝 Planned |
| 11 | `11-web3-wallet-discover-dapps.md` | Discover dApps | 📝 Planned |
| 12 | `12-web3-wallet-assets.md` | Web3 assets | 📝 Planned |

---

## 13-17: Exchange Advanced Modules

These files document **advanced exchange modules** - order book, charts, etc.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 13 | `13-exchange-order-book.md` | Order book UI | 📝 Planned |
| 14 | `14-exchange-chart-system.md` | Trading charts | 📝 Planned |
| 15 | `15-exchange-order-types.md` | Order types UI | 📝 Planned |
| 16 | `16-exchange-open-orders.md` | Open orders | 📝 Planned |
| 17 | `17-exchange-trade-history.md` | Trade history | 📝 Planned |

---

## 18-22: Web3 Advanced Modules

These files document **advanced Web3 modules** - NFTs, networks, etc.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 18 | `18-web3-wallet-token-details.md` | Token details | 📝 Planned |
| 19 | `19-web3-wallet-nft-assets.md` | NFT gallery | 📝 Planned |
| 20 | `20-web3-wallet-network-selector.md` | Network selector | 📝 Planned |
| 21 | `21-web3-wallet-transaction-history.md` | Transaction history | 📝 Planned |
| 22 | `22-web3-wallet-wallet-connect.md` | WalletConnect | 📝 Planned |

---

## 23-32: Account & Settings

These files document **account management** and **settings**.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 23 | `23-user-profile.md` | User profile | 📝 Planned |
| 24 | `24-account-settings.md` | Account settings | 📝 Planned |
| 25 | `25-security-settings.md` | Security settings | 📝 Planned |
| 26 | `26-two-factor-authentication.md` | 2FA setup | 📝 Planned |
| 27 | `27-biometric-authentication.md` | Biometric auth | 📝 Planned |
| 28 | `28-notifications-system.md` | Notifications | 📝 Planned |
| 29 | `29-permissions-system.md` | Permissions | 📝 Planned |
| 30 | `30-error-handling-ui.md` | Error handling | 📝 Planned |
| 31 | `31-real-time-data-updates.md` | Real-time updates | 📝 Planned |
| 32 | `32-settings-flows.md` | Settings flows | 📝 Planned |

---

## 33-41: Design System

These files document the **design system** - colors, typography, spacing.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 33 | `33-colors-theme.md` | Colors and theme | 📝 Planned |
| 34 | `34-typography.md` | Typography | 📝 Planned |
| 35 | `35-dimensions-spacing.md` | Dimensions/spacing | 📝 Planned |
| 36 | `36-screen-layouts.md` | Screen layouts | 📝 Planned |
| 37 | `37-ui-components.md` | UI components | 📝 Planned |
| 38 | `38-navigation-system.md` | Navigation system | 📝 Planned |
| 39 | `39-icons-drawables.md` | Icons/drawables | 📝 Planned |
| 40 | `40-strings-content.md` | Strings/content | 📝 Planned |
| 41 | `41-animations-motion.md` | Animations/motion | 📝 Planned |

---

## 42-50: Component Specifications

These files document **component specifications** - buttons, inputs, cards, etc.

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 42 | `42-logo-icon-specifications.md` | Logo specs | 📝 Planned |
| 43 | `43-button-specifications.md` | Button specs | 📝 Planned |
| 44 | `44-screen-flows-navigation.md` | Screen flows | 📝 Planned |
| 45 | `45-features-overview.md` | Features overview | 📝 Planned |
| 46 | `46-data-formatting-rules.md` | Data formatting | 📝 Planned |
| 47 | `47-ui-states-loading-error-empty.md` | UI states | 📝 Planned |
| 48 | `48-input-fields.md` | Input fields | 📝 Planned |
| 49 | `49-cards-lists.md` | Cards/lists | 📝 Planned |
| 50 | `50-dialogs-bottom-sheets.md` | Dialogs/bottom sheets | 📝 Planned |

---

## 📸 UI/UX Image Folders - Source of Truth

### Exchange (CeFi) - Planned: 10 Folders

| Folder Name | Images | MD File |
|-------------|--------|---------|
| `Exchange interface Home page_` | TBD | 21-exchange-homepage.md |
| `Exchange interface market page_` | TBD | 22-exchange-markets.md |
| `Exchange interface trade page_` | TBD | 23-exchange-trade-spot.md |
| `Exchange interface futures page_` | TBD | 24-exchange-trade-futures.md |
| `Exchange interface assets page_` | TBD | 25-exchange-assets-wallet.md |
| `Exchange interface order book_` | TBD | 26-exchange-order-book.md |
| `Exchange interface chart system_` | TBD | 27-exchange-chart-system.md |
| `Exchange interface order types_` | TBD | 28-exchange-order-types.md |
| `Exchange interface open orders_` | TBD | 29-exchange-open-orders.md |
| `Exchange interface trade history_` | TBD | 30-exchange-trade-history.md |

### Web3 Wallet (DeFi) - Planned: 10 Folders

| Folder Name | Images | MD File |
|-------------|--------|---------|
| `Web3 wallet interface home_` | TBD | 31-web3-wallet-home.md |
| `Web3 wallet interface markets_` | TBD | 32-web3-wallet-markets.md |
| `Web3 wallet interface swap_` | TBD | 33-web3-wallet-swap.md |
| `Web3 wallet interface discover_` | TBD | 34-web3-wallet-discover-dapps.md |
| `Web3 wallet interface assets_` | TBD | 35-web3-wallet-assets.md |
| `Web3 wallet interface token details_` | TBD | 36-web3-wallet-token-details.md |
| `Web3 wallet interface NFT_` | TBD | 37-web3-wallet-nft-assets.md |
| `Web3 wallet interface network selector_` | TBD | 38-web3-wallet-network-selector.md |
| `Web3 wallet interface transaction history_` | TBD | 39-web3-wallet-transaction-history.md |
| `Web3 wallet interface wallet connect_` | TBD | 40-web3-wallet-wallet-connect.md |

---

## 📊 Statistics Summary (Planned)

| Category | Count |
|----------|-------|
| Application Definition (01-02) | 2 |
| Exchange Core (03-07) | 5 |
| Web3 Core (08-12) | 5 |
| Exchange Advanced (13-17) | 5 |
| Web3 Advanced (18-22) | 5 |
| Account & Settings (23-32) | 10 |
| Design System (33-41) | 9 |
| Component Specs (42-50) | 9 |
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

### Exchange Core (03-07)
```
03-exchange-homepage.md
04-exchange-markets.md
05-exchange-trade-spot.md
06-exchange-trade-futures.md
07-exchange-assets-wallet.md
```

### Web3 Core (08-12)
```
08-web3-wallet-home.md
09-web3-wallet-markets.md
10-web3-wallet-swap.md
11-web3-wallet-discover-dapps.md
12-web3-wallet-assets.md
```

### Exchange Advanced (13-17)
```
13-exchange-order-book.md
14-exchange-chart-system.md
15-exchange-order-types.md
16-exchange-open-orders.md
17-exchange-trade-history.md
```

### Web3 Advanced (18-22)
```
18-web3-wallet-token-details.md
19-web3-wallet-nft-assets.md
20-web3-wallet-network-selector.md
21-web3-wallet-transaction-history.md
22-web3-wallet-wallet-connect.md
```

### Account & Settings (23-32)
```
23-user-profile.md
24-account-settings.md
25-security-settings.md
26-two-factor-authentication.md
27-biometric-authentication.md
28-notifications-system.md
29-permissions-system.md
30-error-handling-ui.md
31-real-time-data-updates.md
32-settings-flows.md
```

### Design System (33-41)
```
33-colors-theme.md
34-typography.md
35-dimensions-spacing.md
36-screen-layouts.md
37-ui-components.md
38-navigation-system.md
39-icons-drawables.md
40-strings-content.md
41-animations-motion.md
```

### Component Specifications (42-50)
```
42-logo-icon-specifications.md
43-button-specifications.md
44-screen-flows-navigation.md
45-features-overview.md
46-data-formatting-rules.md
47-ui-states-loading-error-empty.md
48-input-fields.md
49-cards-lists.md
50-dialogs-bottom-sheets.md
```

---

## Notes

1. All files are located in the `/docs` directory
2. Files are numbered for **correct build order** (dependency order for AI builders)
3. **50-file architecture** mirrors Binance's actual product structure
4. **Build order**: App definition → Screens → Modules → UI System → Components
5. **Exchange (CeFi)** and **Web3 Wallet (DeFi)** documented separately
6. APK extraction produces ~500-1000 drawable assets, ~200-400 layouts

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

### Toolbar Menu Interfaces

Toolbar menus defined in `res/menu/` must be documented.

Examples:

- trade_menu.xml
- market_filter_menu.xml

These menus represent UI actions and should be documented in the screen where they appear.

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
| 2026-03-12 | **Aligned with NEXT-STEPS.md build order** (01-02 → 03-07 → 08-12 → 13-17 → 18-22 → 23-32 → 33-41 → 42-50) |

---

## 🎯 Next Steps

1. **Extract APK** - Decompile Binance APK using apktool + jadx
2. **Analyze resources** - Extract layouts, drawables, navigation graphs
3. **Build screen catalog** - Identify all screens using 6-layer discovery
4. **Start documentation** - Begin with application definition (01-02)
5. **Document screens** - Exchange core (03-07) then Web3 core (08-12)
6. **Document modules** - Exchange advanced (13-17) then Web3 advanced (18-22)
7. **Document settings** - Account & settings (23-32)
8. **Document design system** - Colors, typography, spacing (33-41)
9. **Document components** - Buttons, inputs, cards (42-50)

**Correct build order**: 01-02 → 03-07 → 08-12 → 13-17 → 18-22 → 23-32 → 33-41 → 42-50

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
- **Trade Screen**
  - Spot Mode
  - Margin Mode
  - Futures Mode
- **Wallet Screen**
  - Assets
  - NFTs
  - DeFi

### Layer 3 — Internal Screen Navigation

Tab systems and segmented controls inside sections.

Examples:
- **Markets Screen**
  - Favorites
  - Spot
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

Without navigation layering, AI builders often:
- generate incorrect routes
- duplicate screens
- break tab logic

This structural addition prevents that by clearly distinguishing between:
- **Layer 1**: True routes (new screens)
- **Layer 2**: Mode switches (variants within container)
- **Layer 3**: Tab systems (internal UI switching)

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

These interfaces are grouped into **50 screen containers** documented in this specification.

---

*End of File*
