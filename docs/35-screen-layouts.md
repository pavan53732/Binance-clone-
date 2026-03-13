# 35-Screen Layouts

## Overview

This document catalogs the screen layout patterns found in the Binance APK. The APK is primarily built using **Flutter** for the main trading interface, with a **native Android shell** that handles system integrations, notifications, and third-party SDKs (Onfido for KYC, Sumsub for identity verification, JPush for notifications).

## Layout Architecture

### Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| Primary UI | Flutter | Main app screens (Exchange, Wallet, Markets, Web3) |
| Native Shell | Android Views | System integrations, notifications |
| Third-Party | WebView + Native | KYC flows, identity verification |

### Resource Statistics

```
Total Layout Files: ~5,000+ XML files
Layout Variants: landscape, sw600dp, sw720dp, ldrtl, v22, v23, v26
Animation Resources: 150+ XML files (res/anim/)
Animator Resources: 40+ XML files (res/animator/)
```

## Common Layout Structures

### 1. ConstraintLayout Patterns

The native Android shell uses ConstraintLayout extensively for complex screen layouts:

**Basic Structure:**
```xml
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">
    
    <!-- Header Section -->
    <TextView
        android:id="@+id/header"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"/>
    
    <!-- Content Section -->
    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/content_list"
        app:layout_constraintTop_toBottomOf="@id/header"
        app:layout_constraintBottom_toTopOf="@id/bottom_action"/>
    
    <!-- Bottom Action -->
    <Button
        android:id="@+id/bottom_action"
        app:layout_constraintBottom_toBottomOf="parent"/>
</androidx.constraintlayout.widget.ConstraintLayout>
```

**Key ConstraintLayout Usages:**
- Activity containers for Flutter embedding
- Notification layouts
- Dialog and bottom sheet content
- Third-party SDK screens (Onfido, Sumsub)

### 2. LinearLayout Patterns

LinearLayout is used for simpler, linear arrangements:

**Vertical Stack:**
```xml
<LinearLayout
    android:orientation="vertical"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">
    
    <Toolbar
        android:id="@+id/toolbar"/>
    
    <FrameLayout
        android:id="@+id/content"/>
    
    <BottomNavigationView
        android:id="@+id/bottom_nav"/>
</LinearLayout>
```

**Horizontal Row:**
```xml
<LinearLayout
    android:orientation="horizontal"
    android:gravity="center_vertical">
    
    <ImageView
        android:id="@+id/icon"/>
    
    <TextView
        android:id="@+id/title"/>
    
    <View
        android:layout_width="0dp"
        android:layout_height="0dp"
        android:layout_weight="1"/>
    
    <TextView
        android:id="@+id/value"/>
</LinearLayout>
```

### 3. CoordinatorLayout Patterns

Used for screens with complex scrolling behaviors:

```xml
<androidx.coordinatorlayout.widget.CoordinatorLayout>
    <com.google.android.material.appbar.AppBarLayout
        android:id="@+id/app_bar">
        
        <androidx.appcompat.widget.Toolbar
            android:id="@+id/toolbar"
            app:layout_scrollFlags="scroll|enterAlways"/>
            
        <com.google.android.material.tabs.TabLayout
            android:id="@+id/tabs"/>
    </com.google.android.material.appbar.AppBarLayout>
    
    <androidx.viewpager2.widget.ViewPager2
        android:id="@+id/view_pager"
        app:layout_behavior="@string/appbar_scrolling_view_behavior"/>
        
    <com.google.android.material.floatingactionbutton.FloatingActionButton
        android:id="@+id/fab"/>
</androidx.coordinatorlayout.widget.CoordinatorLayout>
```

## Layout Variants

### Screen Size Variants

| Qualifier | Description | Use Case |
|-----------|-------------|----------|
| `layout-sw360dp` | Small phones | Compact layouts |
| `layout-sw600dp` | Tablets 7"+ | Expanded layouts |
| `layout-sw720dp` | Tablets 10"+ | Full tablet layouts |
| `layout-h400dp` | Short screens | Landscape orientations |
| `layout-h600dp` | Taller screens | Large landscape |

**Example sw600dp Adaptation:**
- More columns in list views
- Larger touch targets
- Expanded side-by-side content

### Orientation Variants

| Qualifier | Description |
|-----------|-------------|
| `layout-land` | Landscape layouts |
| `layout-port` | Portrait layouts |

**Trade Screen Landscape:**
- Order book on left
- Chart in center
- Order form on right

### RTL Support

| Qualifier | Description |
|-----------|-------------|
| `layout-ldrtl` | RTL mirror layouts |
| `drawable-ldrtl` | RTL icons |

**RTL Adaptation:**
- Horizontal layouts mirrored
- Navigation drawer on right
- Back arrow on right side

### API Level Variants

| Qualifier | Description |
|-----------|-------------|
| `layout-v22` | Android 5.1+ |
| `layout-v23` | Android 6.0+ |
| `layout-v26` | Android 8.0+ |

## Key Native Layout Files

### Notification Layouts

```
notification_template_big_media.xml
notification_template_custom_big.xml
notification_template_media.xml
notification_template_lines_media.xml
notification_action.xml
```

### KYC/Verification Layouts (Onfido)

```
onfido_activity_capture.xml
onfido_activity_core.xml
onfido_fragment_selfie_capture.xml
onfido_fragment_document_capture.xml
onfido_fragment_liveness_intro.xml
```

### Push Notification Layouts

```
jpush_popwin_layout.xml
jpush_webview_layout.xml
push_notification.xml
```

### Wallet Layouts

```
wallet_fragment_parent_funds_v2.xml
```

## Flutter Integration Layouts

The main Binance UI uses Flutter, embedded via:

```xml
<io.flutter.embedding.android.FlutterActivity>
    <!-- Flutter renders entire content -->
</io.flutter.embedding.android.FlutterActivity>
```

**Flutter Screen Structure (from APK analysis):**
- Exchange Home: Tab-based navigation
- Markets: List with search/filter
- Trade: Split view (chart, order book, order form)
- Wallet: Balance list with actions
- Web3: DApp browser with wallet connect
- Profile: Settings and account management

## Layout Best Practices (From APK Analysis)

1. **Consistent Margins**: 16dp horizontal padding
2. **Card-based Design**: Rounded corners (8dp radius)
3. **Bottom Navigation**: 5 tabs (Home, Markets, Trade, Wallet, Profile)
4. **Pull-to-Refresh**: SwipeRefreshLayout on lists
5. **Safe Areas**: Proper inset handling for notches

## Source Resources

- **Primary Layouts**: `binance-decompiled/res/layout/`
- **Variants**: `binance-decompiled/res/layout-*`
- **Animations**: `binance-decompiled/res/anim/`
- **Animators**: `binance-decompiled/res/animator/`

## Implementation Notes

- Flutter handles most UI; native layouts are minimal
- Focus documentation on Flutter widget tree for main screens
- Native layouts mainly for: notifications, KYC flows, system dialogs
- All layout dimensions documented in `34-dimensions-spacing.md`
- Colors documented in `32-colors-theme.md`
