# 36-UI Components

## Overview

This document catalogs reusable UI components found in the Binance APK. The app uses a hybrid architecture with Flutter for main interfaces and native Android components for system integrations.

## Component Categories

### 1. Native Android Components

#### Toolbar Components

| Component | Usage | Resource |
|-----------|-------|----------|
| `Toolbar` | Screen headers | Native Android |
| `AppBarLayout` | Collapsing headers | Material Design |
| `TabLayout` | Tab navigation | Material Design |

#### List Components

| Component | Usage | Resource |
|-----------|-------|----------|
| `RecyclerView` | Scrollable lists | AndroidX |
| `ListView` | Simple lists | Native Android |
| `ViewPager2` | Swipeable pages | AndroidX |

#### Container Components

| Component | Usage | Resource |
|-----------|-------|----------|
| `CardView` | Content cards | Material Design |
| `NestedScrollView` | Scrollable content | AndroidX |
| `SwipeRefreshLayout` | Pull-to-refresh | AndroidX |

### 2. Material Design Components

#### Buttons

| Component | States | Usage |
|-----------|--------|-------|
| `MaterialButton` | default, pressed, disabled | Primary actions |
| `TextButton` | default, pressed, disabled | Secondary actions |
| `OutlinedButton` | default, pressed, disabled | Tertiary actions |
| `FloatingActionButton` | default, pressed | Quick actions |

#### Input Components

| Component | Usage |
|-----------|-------|
| `TextInputLayout` | Text fields with labels |
| `TextInputEditText` | Editable text |
| `AutoCompleteTextView` | Search dropdowns |

#### Display Components

| Component | Usage |
|-----------|-------|
| `Chip` | Tags and filters |
| `BadgeView` | Notification badges |
| `BottomNavigationView` | Tab navigation |
| `NavigationView` | Drawer navigation |

### 3. Custom Components (From Layout Analysis)

#### Onfido SDK Components (KYC)

```xml
<!-- Document Capture -->
<com.onfido.capturestudio.document.DocumentCaptureView/>

<!-- Selfie Capture -->
<com.onfido.capturestudio.selfie.SelfieCaptureView/>

<!-- Liveness Check -->
<com.onfido.capturestudio.liveness.LivenessChallengeView/>

<!-- Video Recording -->
<com.onfido.capturestudio.video.VideoCaptureView/>
```

#### Verification Components

```xml
<!-- Country Selector -->
<com.onfido.android.ui.countrySelection.CountrySelectionView/>

<!-- Document Type Picker -->
<com.onfido.android.ui.documentTypePicker.DocumentTypePickerView/>
```

### 4. Flutter Widgets (Primary UI)

The main trading interface uses Flutter widgets:

#### Navigation Widgets

| Widget | Purpose |
|--------|---------|
| `BottomNavigationBar` | Main tab navigation |
| `TabBar` | Category tabs |
| `Drawer` | Side navigation |

#### Display Widgets

| Widget | Purpose |
|--------|---------|
| `ListView.builder` | Virtualized lists |
| `GridView` | Asset grids |
| `Card` | Content cards |
| `Container` | Styled containers |

#### Input Widgets

| Widget | Purpose |
|--------|---------|
| `TextField` | User input |
| `DropdownButton` | Selectors |
| `Checkbox` | Boolean options |
| `Switch` | Toggle options |

## Reusable Component Patterns

### 1. Market List Item (COMP-001)

```
┌─────────────────────────────────────────────┐
│ [Icon] Token Name          Price    Change │
│        Symbol             $Volume    %      │
└─────────────────────────────────────────────┘
```

**Structure:**
- Leading: Token icon (40x40dp)
- Title: Token name (bold, 16sp)
- Subtitle: Symbol (grey, 14sp)
- Trailing: Price + Change % (colored green/red)

### 2. Asset Card (COMP-002)

```
┌─────────────────────────────────────────────┐
│ [Icon] Asset Name                           │
│        Balance: XX.XX                        │
│        ≈ $X,XXX.XX  [Actions: ▼]           │
└─────────────────────────────────────────────┘
```

### 3. Order Book Row (COMP-003)

```
┌─────────────────────────────────────────────┐
│ Price          Amount           Total       │
│ (colored)      (amount)        (sum)       │
│ ████████████░░ (depth visualization)      │
└─────────────────────────────────────────────┘
```

### 4. Trade Form (COMP-004)

```
┌─────────────────────────────────────────────┐
│ Amount: [____________] [MAX]                │
│ Price:  [____________]                     │
│ Total:  [____________]                      │
│                                             │
│ [BUY]              [SELL]                  │
└─────────────────────────────────────────────┘
```

### 5. Chart Widget (COMP-005)

```
┌─────────────────────────────────────────────┐
│ [Time: 1m 5m 15m 1h 4h 1d]                │
│                                             │
│           ┌─────────────┐                   │
│           │   CANDLES   │                   │
│           │    CHART    │                   │
│           │             │                   │
│           └─────────────┘                   │
│                                             │
│ [Volume Bars]                               │
└─────────────────────────────────────────────┘
```

## Component States

### Default States

| State | Visual |
|-------|--------|
| Default | Normal appearance |
| Pressed | Slight darkening/ripple |
| Focused | Border highlight |
| Selected | Background highlight |
| Disabled | 50% opacity |

### Loading States

```
┌─────────────────────────────────────────────┐
│                                             │
│        ◐ Loading...                        │
│                                             │
└─────────────────────────────────────────────┘
```

### Empty States

```
┌─────────────────────────────────────────────┐
│                                             │
│           [Icon: Empty]                    │
│                                             │
│        No items found                       │
│        Tap to refresh                       │
└─────────────────────────────────────────────┘
```

### Error States

```
┌─────────────────────────────────────────────┐
│                                             │
│           [Icon: Error]                    │
│                                             │
│        Something went wrong                 │
│        [Retry Button]                      │
└─────────────────────────────────────────────┘
```

## Component Composition

### Screen Container Pattern

```
┌─────────────────────────────────────────────┐
│ [AppBar] ← Navigation + Title + Actions   │
├─────────────────────────────────────────────┤
│ [TabBar] ← Category Navigation             │
├─────────────────────────────────────────────┤
│                                             │
│ [Content Area] ← Scrollable List/Grid      │
│                                             │
├─────────────────────────────────────────────┤
│ [BottomSheet] ← Filters/Sort/Options      │
└─────────────────────────────────────────────┘
```

### Modal Pattern

```
┌─────────────────────────────────────────────┐
│ [Dim Background]                            │
│  ┌─────────────────────────────────────┐   │
│  │ [Header: Title]        [Close ✕]  │   │
│  ├─────────────────────────────────────┤   │
│  │                                      │   │
│  │ [Content: Scrollable]               │   │
│  │                                      │   │
│  ├─────────────────────────────────────┤   │
│  │ [Action Button]                     │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

## Source Resources

- **Layout Files**: `binance-decompiled/res/layout/`
- **Drawable Resources**: `binance-decompiled/res/drawable/`
- **Styles**: `binance-decompiled/res/values/styles.xml`
- **Colors**: `binance-decompiled/res/values/colors.xml`

## Implementation Notes

1. **Flutter First**: Main UI uses Flutter widgets; native components are fallback
2. **Component Registry**: All reusable components should be registered in `00-system-index.md`
3. **State Management**: Components use BLoC pattern for state
4. **Accessibility**: All interactive elements have content descriptions
