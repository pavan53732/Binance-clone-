# Binance UI/UX Knowledge Base - Navigation

## Overview

This document describes the navigation structure and patterns used in the Binance Android app, including bottom navigation, tab layouts, fragment navigation, and deep link patterns.

---

## Bottom Navigation Structure

### Main Navigation Tabs

The Binance app uses a bottom navigation bar with 5 main sections:

| Tab | Icon | Purpose |
|-----|------|---------|
| Home | Home icon | Dashboard, market overview, portfolio |
| Markets | Chart icon | Trading pairs, price lists, market data |
| Trade | Swap icon | Spot trading, margin trading |
| Futures | Trending icon | Futures trading |
| Wallet | Wallet icon | Asset management, deposit/withdraw |

### Bottom Navigation Specifications

| Property | Value |
|----------|-------|
| Height | 56dp |
| Background | `#FF181A20` (dark theme) |
| Icon Size | 24dp |
| Icon Color (Selected) | `#FFF0B90B` (primary yellow) |
| Icon Color (Unselected) | `#FF848E9C` (gray) |
| Label Size | 10-12sp |
| Label Color (Selected) | `#FFF0B90B` |
| Label Color (Unselected) | `#FF848E9C` |

---

## Tab Layout

### Horizontal Tabs

Used within screens for sub-navigation (e.g., Buy/Sell, Spot/Margin).

**Specifications**:
| Property | Value |
|----------|-------|
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
|------|---------|
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
<deepLink app:uri="binance://wallet/deposit/{asset}" />
```

**Common Deep Link Patterns**:
| URI Pattern | Destination |
|-------------|-------------|
| `binance://home` | Home screen |
| `binance://trade/{pair}` | Trading screen |
| `binance://wallet` | Wallet screen |
| `binance://wallet/deposit/{asset}` | Deposit screen |
| `binance://wallet/withdraw/{asset}` | Withdraw screen |

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

### Wallet Flow

```
Wallet Screen
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

| Transition | Usage |
|------------|-------|
| Slide Right | Back navigation |
| Slide Left | Forward navigation |
| Fade | Dialog appearance |
| Bottom Sheet | Modal content |

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

| Menu File | Purpose |
|-----------|---------|
| `onfido_activity_workflow_toolbar_menu.xml` | Workflow toolbar |
| `onfido_capture_activity_workflow_toolbar_menu.xml` | Capture toolbar |
| `onfido_country_selection.xml` | Country selection |

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