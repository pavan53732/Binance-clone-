# Binance UI/UX Knowledge Base - Navigation

## Overview

This document describes the navigation structure and patterns used in the Binance Android app, including bottom navigation, tab layouts, fragment navigation, and deep link patterns.

---

## Top Interface Switcher & Header Icons

The Binance app features a persistent top header containing the interface switcher and global action icons.

### 1. Header Global Icons

| Icon                  | Description                                              | Context |
| --------------------- | -------------------------------------------------------- | ------- |
| **Sidebar/Profile**   | User profile, verification status, and app settings      | Left    |
| **Chat/Notification** | System messages and order notifications (with 99+ badge) | Left    |
| **Customer Support**  | Technical support and help center                        | Right   |
| **Binance Pay/QR**    | QR code scanner and payment features                     | Right   |

### 2. Interface Switcher (Dual Mode)

The interface switcher is a central toggle labeled **"Exchange | Wallet"**.

| Element             | State            | Behavioral Details                                                               |
| :------------------ | :--------------- | :------------------------------------------------------------------------------- |
| **Exchange Toggle** | Active (Default) | Switches system to CeFi mode. Yellow underline indicator. Background: Pro black. |
| **Wallet Toggle**   | Active           | Switches system to Web3 DeFi mode. High contrast yellow text when selected.      |

**Transition Behavior**: Switching interfaces triggers a full bottom navigation reload and updates the available fragment stack (e.g., swapping "Futures" for "Discover").

---

## Bottom Navigation Structure

The navigation bar dynamically updates its tabs based on the active interface mode.

### 1. Exchange Interface Navigation

| Tab         | Icon                   | Key Components                              |
| :---------- | :--------------------- | :------------------------------------------ |
| **Home**    | `ic_home_pro`          | Dashboard, Portfolio PNL, Quick Action Hub  |
| **Markets** | `ic_markets_chart`     | Spot/Futures/Margin lists, Heatmaps         |
| **Trade**   | `ic_trade_swap`        | Order Book, Buy/Sell, Limit/Market orders   |
| **Futures** | `ic_futures_lightning` | Leverage controls, Positions, Active Orders |
| **Assets**  | `ic_assets_wallet`     | Overview, Spot, Funding, Earn fragments     |

### 2. Web3 Wallet Interface Navigation

| Tab          | Icon                  | Key Components                             |
| :----------- | :-------------------- | :----------------------------------------- |
| **Home**     | `ic_wallet_home`      | Total Balance (USD), Send/Receive/Buy/Swap |
| **Markets**  | `ic_markets_token`    | Token List, Trending (24h/On-Chain)        |
| **Trade**    | `ic_swap_🔄`          | DeFi Swap interface (Input/Output/Rate)    |
| **Discover** | `ic_discover_compass` | DApps, Meme Rush, Trending protocols       |
| **Assets**   | `ic_web3_assets`      | On-Chain assets, NFTs, Web3 History        |

### Bottom Navigation Specifications

| Property                | Value                        |
| :---------------------- | :--------------------------- |
| Height                  | 56dp                         |
| Background              | `#FF181A20` (dark theme)     |
| Icon Size               | 24dp                         |
| Icon Color (Selected)   | `#FFF0B90B` (primary yellow) |
| Icon Color (Unselected) | `#FF848E9C` (gray)           |
| Label Size              | 10-12sp                      |
| Selected Text Style     | Bold                         |
| Unselected Text Style   | Regular                      |

---

## Tab Layout

### Horizontal Tabs

Used within screens for sub-navigation (e.g., Buy/Sell, Spot/Margin).

**Specifications**:
| Property | Value |
| :--- | :--- |
| Height | 44dp |
| Indicator Height | 2dp |
| Indicator Color | `#FFF0B90B` |
| Tab Text Size | 14sp |
| Selected Text Style | Bold |
| Unselected Text Style | Regular |
| Tab Mode | scrollable or fixed |

**Example Usage**:

- Buy/Sell tabs in trading
- Spot/Margin/Futures tabs
- Open/Close orders tabs
- Time period tabs (1H, 4H, 1D, 1W)

### Tab with Count Badge

Some tabs display count badges:

- Badge Size: 18dp diameter
- Badge Color: `#FFF6465D` (red)
- Text Size: 10sp
- Text Color: White

---

## Fragment Navigation

### Navigation Graph

The app uses Android Jetpack Navigation component with navigation graphs defined in XML.

**Navigation Files**:
| File | Purpose |
| :--- | :--- |
| `2131886080.xml` | Main navigation flow |
| `2131886081.xml` | Secondary navigation |
| `2131886082.xml` | Feature navigation |
| `2131886083.xml` | Settings navigation |
| `2131886084.xml` | Document scanner flow (Uqudo SDK) |

### Document Scanner Navigation Flow

From `2131886084.xml`:

```
ScannerHelpFragment (Start)
├── action → PermissionsFragment
│   └── action → CameraFragment
│       ├── action → OutputFragment
│       │   ├── action → CameraFragment (pop)
│       │   └── action → UploadFragment
│       │       └── action → OutputFragment
│       ├── action → PermissionsFragment (pop)
│       ├── action → ScannerHelpFragment (pop)
│       └── action → DialogFragment
├── action → DialogFragment
│   ├── action → PermissionsFragment (pop)
│   └── action → ScannerHelpFragment (pop)
```

### Fragment Arguments

Navigation uses safe args for passing data between fragments:

```xml
<argument
    android:name="document"
    app:type="io.uqudo.sdk.core.domain.model.Document" />

<argument
    android:name="error"
    app:type="java.lang.Throwable"
    app:nullable="true" />
```

### Pop Behavior

Actions can include pop behavior:

- `popUpTo` - Pop back stack to specific destination
- `popUpToInclusive` - Include the destination in pop

---

## Menu Resources

### Context Menus

**Copy/Select All Menu** (`2131755013.xml`):

```xml
<menu>
    <item android:id="@id/2131429558" android:title="@string/copy" />
    <item android:id="@id/2131429568" android:title="@string/ms_selecte_all" />
</menu>
```

**Chat Context Menu** (`2131755015.xml`):

```xml
<menu>
    <item android:id="@id/2131429570" android:title="@string/c2c_chat_unsend_title" />
    <item android:id="@id/2131429557" android:title="@string/copy" />
    <item android:id="@id/2131429567" android:title="@string/ms_selecte_all" />
</menu>
```

### Toolbar Menus

**Search Menu** (`2131755012.xml`):

```xml
<menu>
    <item
        android:icon="@drawable/2131234277"
        android:id="@id/2131431775"
        android:title="@string/pi2_search_bar" />
</menu>
```

**Image Crop Menu** (`2131755014.xml`):

```xml
<menu>
    <item
        android:icon="@drawable/2131236638"
        android:id="@id/2131437488"
        android:title="@string/ucrop_menu_crop" />
    <item
        android:icon="@drawable/2131236650"
        android:enabled="false"
        android:id="@id/2131437492" />
</menu>
```

---

## Navigation Patterns

### Back Navigation

**Hardware Back Button**:

- Navigates up the back stack
- Closes dialogs and bottom sheets
- Exits app from main screen

**Up Navigation (Toolbar Arrow)**:

- Always navigates to parent destination
- Shown when not at root destination

### Modal Navigation

**Dialogs**:

- Dismiss on back press or outside tap
- No back stack history

**Bottom Sheets**:

- Dismiss on back press or swipe down
- Can have nested navigation

### Deep Links

Navigation destinations support deep links for external navigation:

```xml
<deepLink app:uri="binance://trade/{pair}" />
<deepLink app:uri="binance://assets/deposit/{asset}" />
```

**Common Deep Link Patterns**:
| URI Pattern | Destination |
| :--- | :--- |
| `binance://home` | Home screen |
| `binance://trade/{pair}` | Trading screen |
| `binance://assets` | Assets screen |
| `binance://assets/deposit/{asset}` | Deposit screen |
| `binance://assets/withdraw/{asset}` | Withdraw screen |

---

## Screen Flow Diagrams

### Trading Flow

```
Home Screen
├── Markets Tab
│   ├── Search/Filter
│   ├── Favorites
│   └── Trading Pair List
│       └── Trading Screen
│           ├── Price Chart
│           ├── Order Book
│           ├── Buy/Sell Panel
│           └── Order History
├── Trade Tab
│   ├── Spot Trading
│   ├── Margin Trading
│   └── Convert
└── Futures Tab
    ├── USD-M Futures
    └── COIN-M Futures
```

### Assets Flow

```
Assets Screen
├── Asset List
│   ├── Asset Detail
│   │   ├── Deposit
│   │   │   ├── Network Selection
│   │   │   └── Address/QR Code
│   │   ├── Withdraw
│   │   │   ├── Network Selection
│   │   │   ├── Address Input
│   │   │   └── Confirmation
│   │   ├── Transfer
│   │   │   ├── From/To Selection
│   │   │   └── Amount Input
│   │   └── Transaction History
│   └── ...
├── Deposit (Fiat)
│   ├── Payment Method
│   └── Amount Input
└── Withdraw (Fiat)
    ├── Bank Selection
    └── Amount Input
```

### C2C Trading Flow

```
C2C Homepage
├── Buy Tab
│   ├── Currency Selection
│   ├── Payment Method Filter
│   ├── Amount Input
│   └── Ad List
│       └── Create Order
│           ├── Payment Info
│           ├── Timer
│           └── Chat with Advertiser
├── Sell Tab
│   └── Similar to Buy
└── Filter Screen
    ├── Ad Type Filters
    ├── Payment Methods
    ├── Countries
    └── Sort Options
```

---

## Navigation Transitions

### Standard Transitions

| Transition   | Usage              |
| ------------ | ------------------ |
| Slide Right  | Back navigation    |
| Slide Left   | Forward navigation |
| Fade         | Dialog appearance  |
| Bottom Sheet | Modal content      |

### Shared Element Transitions

Used for:

- Trading pair list → Trading screen (chart preview)
- Asset list → Asset detail (icon)

---

## Navigation Component Usage

### FragmentContainerView

```xml
<androidx.fragment.app.FragmentContainerView
    android:id="@id/nav_host_fragment"
    android:name="androidx.navigation.fragment.NavHostFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    app:navGraph="@navigation/main_nav_graph"
    app:defaultNavHost="true" />
```

### Navigation Controller

```kotlin
// Navigate to destination
findNavController().navigate(R.id.destination_id)

// Navigate with arguments
findNavController().navigate(R.id.destination_id, bundleOf("key" to value))

// Navigate up
findNavController().navigateUp()

// Pop back stack
findNavController().popBackStack()
```

---

## Third-Party Navigation

### Onfido SDK Navigation

Document verification uses Onfido SDK with its own navigation:

| Menu File                                           | Purpose           |
| --------------------------------------------------- | ----------------- |
| `onfido_activity_workflow_toolbar_menu.xml`         | Workflow toolbar  |
| `onfido_capture_activity_workflow_toolbar_menu.xml` | Capture toolbar   |
| `onfido_country_selection.xml`                      | Country selection |

### Uqudo SDK Navigation

Document scanning uses Uqudo SDK navigation graph (`2131886084.xml`):

- ScannerHelpFragment
- PermissionsFragment
- CameraFragment
- OutputFragment
- UploadFragment

---

## Notes

1. Bottom navigation provides quick access to main sections
2. Tab layout is used for sub-navigation within screens
3. Navigation component manages fragment transactions
4. Deep links enable external app navigation
5. Third-party SDKs have their own navigation flows
6. Back navigation follows Android guidelines
7. Modal navigation uses dialogs and bottom sheets
