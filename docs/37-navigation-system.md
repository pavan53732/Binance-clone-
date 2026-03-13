# 37-Navigation System

## Overview

This document describes the navigation patterns and architecture of the Binance app. The app uses a hybrid navigation system combining Flutter's navigation with native Android navigation components.

## Navigation Architecture

### Layer 1: Application Navigation (Top-Level)

The app uses a **bottom tab-based** navigation for primary sections:

```
┌─────────────────────────────────────────────────┐
│                 App Container                   │
├─────────────────────────────────────────────────┤
│  [Home]  [Markets]  [Trade]  [Wallet]  [Profile] │
│      ◉          ◉        ◉        ◉          ◉   │
└─────────────────────────────────────────────────┘
```

**Main Navigation Tabs:**

| Tab | Route | Purpose |
|-----|-------|---------|
| Home | `/` | Dashboard with balances and quick actions |
| Markets | `/markets` | Browse trading pairs |
| Trade | `/trade` | Execute trades |
| Wallet | `/wallet` | Asset management |
| Profile | `/profile` | Account settings |

### Layer 2: Screen Container Navigation

Inside each tab, mode switching is handled via:

**Trade Screen Modes:**
- Spot Trading
- Margin Trading
- Futures Trading

```dart
// Mode switching (not routing)
TradeScreen(
  mode: TradeMode.spot,  // or .margin, .futures
)
```

### Layer 3: Internal Navigation

Tab systems within screens for filtering/sorting:

```
Markets Screen
├── [Favorites] [Spot] [Futures] [ETF] [Zones]
│
├── Filter: [All] [Gainers] [Losers] [Volume]
└── Sort: [Price] [Change] [Volume]
```

## Navigation Components

### 1. Bottom Navigation

```xml
<com.google.android.material.bottomnavigation.BottomNavigationView
    android:id="@+id/bottom_navigation"
    app:menu="@menu/bottom_navigation_menu"
    app:labelVisibilityMode="labeled"/>
```

**Navigation Items:**
- Home (icon: home)
- Markets (icon: trending_up)
- Trade (icon: swap_horiz)
- Wallet (icon: account_balance_wallet)
- Profile (icon: person)

### 2. Tab Layout

Used for category filtering within screens:

```xml
<com.google.android.material.tabs.TabLayout
    android:id="@+id/tab_layout"
    app:tabMode="scrollable"
    app:tabGravity="start"/>
```

### 3. Navigation Drawer

Side menu for secondary navigation:

```xml
<androidx.drawerlayout.widget.DrawerLayout
    android:id="@+id/drawer_layout">
    
    <FrameLayout
        android:id="@+id/content"/>
        
    <com.google.android.material.navigation.NavigationView
        android:id="@+id/navigation_view"/>
</androidx.drawerlayout.widget.DrawerLayout>
```

## Deep Link Schemes

### URI Patterns

| Scheme | Format | Example |
|--------|--------|---------|
| App Custom | `binance://` | `binance://trade?pair=BTCUSDT` |
| Web URL | `https://binance.com/` | `https://binance.com/trade/BTC_USDT` |

### Deep Link Routes

```
binance://home
binance://markets
binance://markets/{symbol}
binance://trade/{symbol}
binance://trade?symbol=BTCUSDT&type=spot
binance://wallet
binance://wallet/deposit
binance://wallet/withdraw
binance://profile
binance://settings
binance://security
```

### Intent Filters

From AndroidManifest.xml analysis:

```xml
<intent-filter>
    <action android:name="android.intent.action.VIEW"/>
    <category android:name="android.intent.category.DEFAULT"/>
    <category android:name="android.intent.category.BROWSABLE"/>
    <data android:scheme="binance"/>
</intent-filter>

<intent-filter>
    <action android:name="android.intent.action.VIEW"/>
    <category android:name="android.intent.category.DEFAULT"/>
    <category android:name="android.intent.category.BROWSABLE"/>
    <data android:scheme="https"
          android:host="binance.com"/>
</intent-filter>
```

## Activity & Fragment Navigation

### Native Activities

| Activity | Purpose |
|----------|---------|
| `FlutterActivity` | Main Flutter app entry |
| `FlutterFragmentActivity` | Flutter with fragments |
| Custom Activities | KYC flows (Onfido, Sumsub) |

### Navigation Graphs

Located in: `binance-decompiled/res/navigation/`

```xml
<navigation xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:id="@+id/main_navigation"
    app:startDestination="@id/homeFragment">

    <fragment
        android:id="@+id/homeFragment"
        android:name="com.binance.home.HomeFragment"
        android:label="Home">
        <action
            android:id="@+id/action_home_to_markets"
            app:destination="@id/marketsFragment"/>
    </fragment>

    <fragment
        android:id="@+id/marketsFragment"
        android:name="com.binance.markets.MarketsFragment"
        android:label="Markets"/>
</navigation>
```

## Fragment-Based Navigation

### Transaction Types

```java
// Replace current fragment
getFragmentManager()
    .beginTransaction()
    .replace(R.id.container, newFragment)
    .commit();

// Add to back stack
getFragmentManager()
    .beginTransaction()
    .replace(R.id.container, newFragment)
    .addToBackStack(null)
    .commit();
```

### Animations

```java
// Custom transition
getFragmentManager()
    .beginTransaction()
    .setCustomAnimations(
        R.anim.fade_in,
        R.anim.fade_out,
        R.anim.fade_in,
        R.anim.fade_out
    )
    .replace(R.id.container, newFragment)
    .commit();
```

## Flutter Navigation

### Named Routes

```dart
// Route definitions
routes: {
  '/': (context) => HomeScreen(),
  '/markets': (context) => MarketsScreen(),
  '/trade': (context) => TradeScreen(),
  '/wallet': (context) => WalletScreen(),
  '/profile': (context) => ProfileScreen(),
}
```

### Navigation Methods

```dart
// Push route
Navigator.push(
  context,
  MaterialPageRoute(builder: (_) => DetailScreen()),
);

// Push replacement
Navigator.pushReplacement(
  context,
  MaterialPageRoute(builder: (_) => NextScreen()),
);

// Pop
Navigator.pop(context);

// Deep link navigation
Navigator.pushNamed(context, '/trade', arguments: {'symbol': 'BTCUSDT'});
```

## Screen Flow Examples

### Trade Flow

```
Home → Markets → Select Pair → Trade Screen
                              ↓
                        [Order Form]
                              ↓
                        [Confirmation]
                              ↓
                        [Success/Error]
```

### Wallet Flow

```
Wallet → Select Asset → Asset Detail
                         ↓
                   [Deposit/Withdraw/Transfer]
                         ↓
                   [Network Selection]
                         ↓
                   [Address/Confirmation]
```

## Back Navigation Behavior

| Screen Type | Back Behavior |
|-------------|---------------|
| Modal | Dismiss modal |
| Bottom Sheet | Dismiss sheet |
| Full Screen | Navigate back / Exit |
| First Screen | Exit app |

## Source Resources

- **AndroidManifest**: `binance-decompiled/AndroidManifest.xml`
- **Navigation**: `binance-decompiled/res/navigation/`
- **Menu**: `binance-decompiled/res/menu/`
- **Activities**: Decompiled Java/Kotlin sources

## Implementation Notes

1. **Hybrid Approach**: Flutter handles main UI navigation; native handles system flows
2. **Deep Links**: Support both custom scheme and HTTPS URLs
3. **State Preservation**: Fragments use setRetainInstance(true) for configuration changes
4. **Back Stack**: Managed programmatically for complex flows (KYC, deposit/withdraw)
5. **Transition Animations**: Defined in res/anim/ folder
