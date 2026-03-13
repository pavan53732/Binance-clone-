# Next Steps - Binance Clone Project

## Current Status (As of 2026-03-12)

### ✅ Completed Preparations

1. **Workspace Cleanup** - Wiped all old documentation contents from the `docs/` folder.
2. **APK Decompilation** - Successfully generated `binance-decompiled` and `jadx-output` folders from the original APK.
3. **Documentation Architecture** - Created 54-file framework structure (`00` through `53`) ready for fresh extraction.
4. **Master Plan** - `LIST OF UI UX MD FILES.md` with complete architecture layout.

### 📦 Current Workspace Contents

```
✅ apk-tools/               - Extraction tools (jadx + apktool)
✅ .git/                    - Git repository
✅ Binance.apk              - Binance Original APK
✅ binance-decompiled/      - Output from Apktool (Res/Layouts/Values/Assets)
✅ jadx-output/             - Output from JADX (Decompiled Java/Kotlin source code)
✅ LIST OF UI UX MD FILES.md- Master 54-file documentation index
✅ docs/                    - 54 MD files awaiting precise extraction from APK
```

---

## 📁 Final Workspace Structure

```
project-root/
│
├── apk-tools/
├── Binance.apk
├── binance-decompiled/
│   ├── res/
│   │   ├── layout/
│   │   ├── layout-v*/
│   │   ├── layout-land/
│   │   ├── layout-sw600dp/
│   │   └── layout-ldrtl/
│   ├── assets/
│
├── jadx-output/
│
└── docs/
    ├── 01-application/
    ├── 02-exchange-core/
    ├── 03-web3-core/
    ├── 04-exchange-advanced/
    ├── 05-web3-advanced/
    ├── 06-account-settings/
    ├── 07-design-system/
    ├── 08-ui-foundation/
    ├── 09-component-specs/
    └── 10-backend-mapping/
```

---

## 🎯 Immediate Next Steps

### Screen Discovery Process

To reliably discover every screen inside the Android APK, we use a 6-layer scan approach:

1. **Activity Discovery** (from AndroidManifest.xml)
2. **Fragment Discovery** (dynamic UI components)
3. **Navigation Graph Discovery** (declarative navigation)
4. **Overlay Discovery** (dialogs, bottom sheets)
5. **RecyclerView Item Discovery** (list items, adapters)
6. **Compose / Binding UI Discovery** (Jetpack Compose, ViewBinding)

This ensures we capture statically declared screens, dynamically created fragments, navigation destinations, and overlay interfaces that may not appear as standalone layouts.

**JADX Search Commands for Screen Discovery & Backend Mapping:**

*Fragments & Activities:*
- `extends Activity`
- `extends Fragment` / `extends BaseFragment`
- `extends DialogFragment`
- `extends BottomSheetDialogFragment`

*Layouts & Binding:*
- `R.layout.` (to find layout inflations)
- `inflate(`
- `DataBindingUtil.inflate`
- `ViewBinding`

*Jetpack Compose:*
- `@Composable`
- `setContent`
- `ComposeView`
- `remember`
- `Modifier`
- `NavHost` / `composable(`
- `Scaffold`
- `LazyColumn` / `LazyRow`
- `@Preview`
- `rememberCoroutineScope`
- `rememberSaveable`
- `LaunchedEffect`

*RecyclerView & Adapters:*
- `RecyclerView.Adapter`
- `ViewHolder`
- `getItemViewType()`
- `onCreateViewHolder()`
- `onBindViewHolder()`
- `DiffUtil`
- `ListAdapter`
- `PagingDataAdapter`
- `ConcatAdapter`

*Interaction & Gestures:*
- `setOnClickListener`
- `setOnLongClickListener`
- `setOnTouchListener`
- `addTextChangedListener`
- `GestureDetector`
- `ScaleGestureDetector`
- `VelocityTracker`

*Navigation:*
- `R.id.nav_` (navigation destinations)
- `FragmentTransaction`
- `NavController`
- `intent-filter` / `app link` / `deep link` (in AndroidManifest.xml)

*Event Systems & WebSockets:*
- `subscribe`
- `socket` / `websocket`
- `channel` / `stream`
- `ticker` / `depth` / `trade`
- `LiveData` / `Flow` / `RxJava` / `EventBus`
*(Must map Event → UI Target: e.g., ticker stream → market list)*

*Data & Dependency Graph:*
- `ViewModel`
- `retrofit` / `okhttp` / `graphql` / `rest`
- `ApolloClient` / `query(` / `mutation(` / `subscription(`
- `endpoint` / `baseUrl`
- `DTO` / `data class`
- `WebSocket message schemas` / `Ticker stream models` / `Order book delta models`

*Storage Systems:*
- `Room` / `SQLiteOpenHelper`
- `SharedPreferences` / `EncryptedSharedPreferences`
- `Keystore`

*Feature Flags:*
- `remote_config`
- `ABTest`
- `feature_flag`

> **Important:** Network Selector is NOT a standalone screen.
> It is a **reusable overlay component** (bottom sheet).
> Document in: `49-dialogs-bottom-sheets.md`

### Global Screen & Component ID System

To prevent documentation instability and duplicate definitions across 54 files, a strict ID system must be enforced. Every documented entity **must** be assigned a unique ID mapping to the `00-system-index.md` registry.

**The `00-system-index.md` master file must contain the global registries:**
- **SCREEN REGISTRY (SCR-XXX)**: Screens (e.g., `SCR-001` Exchange Home, `SCR-003-V1` Trade Spot Variant).
- **COMPONENT REGISTRY (COMP-XXX)**: Reusable UI element used across multiple screens (e.g., `COMP-001` CoinRow, `COMP-002` AssetCard).
- **WIDGET REGISTRY (WGT-XXX)**: Functional module functionally isolated inside a specific screen (e.g., `WGT-001` CoinList, `WGT-002` OrderBook).
- **OVERLAY REGISTRY (OVR-XXX)**: Overlays (e.g., `OVR-001` Network Selector, `OVR-002` Token Selector).

When a screen utilizes a shared component (e.g., Coin Row), it MUST reference the exact `COMP-XXX` ID rather than duplicating the layout specification. Component specifications and data models will be mapped entirely in `36-ui-components.md` and `51-data-models.md`.

#### Component Reuse Rule

If a UI element already exists in the COMPONENT REGISTRY (COMP-XXX), it must NOT be redefined inside another screen document. Screens must reference the existing COMP-XXX entry instead. This prevents AI builders from creating duplicate UI components.

### Deduplication & Pagination Constraints

1. **Asset Deduplication Rule:** Extract logical assets, ignoring density variants (e.g., map `drawable-hdpi/icon_btc.png` and `drawable-xxhdpi/icon_btc.png` into a single logical `icon_btc` definition). Logical asset name = base drawable filename.
2. **Size constraints:** No single Markdown file may exceed ~800 lines. If a single page (e.g., Advanced Trade) balloons in size due to multiple sub-widgets, it **must** be split out into a new MD file using the `WGT-` or `COMP-` linking definitions.

### ✅ Step 1: AI Agent APK Decompilation (COMPLETED)

*(This step has been successfully completed. The resources are extracted and available in the `binance-decompiled` and `jadx-output` directories.)*

The AI agent will automatically decompile the APK and analyze UI resources using apktool and jadx.

**Tool**: Use `apk-tools` folder (jadx + apktool)

**Process**:

1. **Decompile APK** with apktool: *(COMPLETED)*

   ```powershell
   # java -jar apk-tools/apktool.jar decode Binance.apk -o binance-decompiled
   ```

2. **Extract all images** from decompiled folder:
   - Location: `binance-decompiled/res/drawable-*/`
   - Location: `binance-decompiled/res/mipmap-*/`
   - Location: `binance-decompiled/assets/`

3. **Extract layout XML files**:
   - Location: `binance-decompiled/res/layout/`
   - Location: `binance-decompiled/res/layout-v*/`

4. **Extract menu XML files**:
   - Location: `binance-decompiled/res/menu/`
   - Example: toolbar menus, overflow menus

5. **Extract design system resources**:
   Location:
   `binance-decompiled/res/values/`

   Important files:
   - colors.xml
   - styles.xml
   - themes.xml
   - dimens.xml
   - strings.xml
   - arrays.xml
   - integers.xml
   - bools.xml

6. **Extract animation resources**:
   Location:
   `binance-decompiled/res/anim/`
   `binance-decompiled/res/animator/`

7. **Decompile with jadx** for source code: *(COMPLETED)*
   ```powershell
   # apk-tools\jadx\bin\jadx.bat Binance.apk --output-dir jadx-output
   ```

**Expected Output**:

- ~500-1000 drawable images (icons, illustrations, backgrounds)
- ~200-400 layout XML files
- ~10,000+ Java/Kotlin source files

---

### Step 2: AI Resource Analysis

The AI agent analyzes extracted resources to identify:

- UI layouts
- drawable assets
- design system tokens
- navigation graphs
- animation resources
- activity and fragment classes
- TabLayout / ViewPager structures
- RecyclerView / list-based widgets
- RecyclerView adapter classes and item view types
- List item layout files referenced by adapters
- Adapter state logic (loading, empty, pagination)
- ViewBinding classes
- DataBinding layouts
- binding adapters
- Jetpack Compose UI functions
- composable navigation destinations
- filters, sort controls, and segmented controls
- network selectors and chain selectors
- modal, dialog, and bottom sheet structures
- component state resources
- feature flags and conditional UI branches
- animation trigger points
- animation resource bindings in layouts
- transition animations between fragments
- WebSocket message handlers
- Live price update listeners
- UI refresh triggers

This analysis produces structured UI data used to generate the documentation files.

---

### Step 3: Extract Navigation Structure

Find navigation from:

- bottom navigation
- drawer navigation
- fragment/activity transitions
- routing classes
- intent-filter deep link schemes
- app link URLs
- internal URI routing patterns
- deep links
- res/navigation/
- AndroidManifest.xml
- bottom navigation tabs
- top tabs / segmented tabs
- nested tab navigation
- modal entry points
- bottom sheet entry points
- in-screen route transitions
- Fragment container hierarchies
- FragmentTransaction replacements
- FragmentPagerAdapter / FragmentStateAdapter

This helps build the **screen catalog** correctly.

---

### Navigation Layer Model

To avoid misinterpreting nested tab systems in large apps like Binance, navigation is classified into three layers:

**Layer 1 — Application Navigation**

- True top-level routes
- Examples: Home, Markets, Trade, Futures, Assets, Web3 Wallet
- AI builder should generate **separate routes** for these

**Layer 2 — Screen Container Navigation**

- Mode switches inside a screen container
- Examples: Trade Screen variants (Spot, Margin, Futures)
- AI builder should generate **mode switching**, not routing

**Layer 3 — Internal Screen Navigation**

- Tab systems inside sections
- Examples: Markets tabs (Favorites, Spot, Futures), Timeframe selectors (1m, 5m, 15m, 1h)
- AI builder should generate **tab systems**, not navigation routes

This prevents AI builders from incorrectly generating routes like:

- `/markets/spot/usdt` (wrong)
  Instead of tab switching within Markets screen (correct).

---

### Step 4: Detect All Application Screens

The AI agent scans layouts, activities, fragments, and navigation graphs to detect all screens present in the application.

The screen catalog must record four hierarchy levels:
Application
│
├── Screen Container
│ ├── Screen Variant
│ │ ├── Sections
│ │ │ ├── Tabs
│ │ │ └── Widgets

Example:
Trade (Screen Container)
├── Spot (Variant)
│ ├── Chart
│ ├── Order Book
│ └── Order Form
├── Margin (Variant)
└── Futures (Variant)

The screen catalog should record:

- screen container count
- variant count
- overlay interfaces
- modal interfaces

Sources:

- res/layout/
- res/navigation/
- AndroidManifest.xml
- Fragment classes
- Activity classes
- RecyclerView item layouts representing reusable UI modules
  Example: item_market_row.xml, item_order_row.xml, item_trade_row.xml

The detected screens are used to build the screen catalog.

Also detect and catalog:

- tab-based subviews inside screens
- widget regions inside screens
- reusable section containers
- modal-only screens
- bottom-sheet-only flows
- popups and overlays
- filter panels
- network selection panels
- token/asset selector panels

### Step 4.5: Detect Screen Sections and Layout Regions

Each detected screen must be decomposed into layout regions.

Examples:

Exchange Home
├── Header
├── Balance summary
├── Quick actions
├── Banner / carousel
├── Market tabs
├── Market widget list
└── News section

Markets Screen
├── Search bar
├── Market category tabs
├── Filter controls
├── Coin list widget
└── Pagination controls

Trade Screen
├── Pair selector
├── Chart container
├── Timeframe selector
├── Indicator selector
├── Order book
├── Trade history
├── Order form
└── Position panel

Sources:

- layout XML hierarchy
- fragment containers
- RecyclerView sections
- view IDs
- ConstraintLayout chains and barriers
- LinearLayout weight distribution and gravity
- RelativeLayout alignment rules
- SwipeRefreshLayout and NestedScrollView wrappers
- GridLayout specifications
- PercentRelativeLayout and PercentFrameLayout
- CoordinatorLayout behaviors
- AppBarLayout and CollapsingToolbarLayout
- NestedScrollView with multiple scroll directions

---

### Step 4.6: Detect Screen Variants and Sub-Screens

A single screen container may include multiple UI variants that behave as separate screens.

Examples:

Trade Screen
├── Spot Mode
├── Margin Mode
├── Futures Mode
├── Chart Fullscreen
├── Indicator Settings
├── Drawing Tools Panel
├── Pair Selector Modal
└── Order Confirmation Modal

Markets Screen
├── Favorites Tab
├── Spot Markets Tab
├── Futures Markets Tab
├── ETF Tab
└── Search Results Mode

Wallet Screen
├── Assets List
├── Asset Details
├── Deposit Flow
├── Withdraw Flow
└── Network Selector

These variants must be cataloged even if they share the same base layout.

Sources:

- Fragment state changes
- tab container switching
- modal launch triggers
- bottom sheet controllers

---

### Step 4.7: Detect Overlay Interfaces

Some UI interfaces appear as overlays instead of full screens.

Examples:

Overlay Types
├── Bottom sheets
├── Dropdown panels
├── Filter panels
├── Network selector sheets
├── Token selector sheets
├── Share dialogs
├── Quick action panels
└── Contextual menus

These overlays must be cataloged separately from screen variants.

Overlay interfaces are NOT screen variants.
Variants modify the base screen layout.
Overlays appear above the current screen.

Example:

Trade Screen
├ Variant: Spot Mode
├ Variant: Futures Mode
└ Overlay: Order Confirm Bottom Sheet

Sources:

- BottomSheetDialogFragment classes
- DialogFragment classes
- PopupWindow implementations
- layout XML used by overlay controllers

---

### Step 5: Extract User Workflows

The AI agent analyzes navigation flows and event handlers to reconstruct user workflows.

Examples:

- Spot trading workflow
- Futures trading workflow
- Convert / swap workflow
- Deposit workflow
- Withdraw workflow
- Transfer workflow
- Login / authentication workflow
- KYC / identity workflow
- Web3 wallet connect workflow
- Token network selection workflow
- Filter / sort interaction workflow
- Search and asset selection workflow

Sources used:

- navigation graphs
- fragment transitions
- click handlers in source code
- deep links
- ViewModel navigation events
- event bus triggers
- navigation commands emitted by ViewModel

---

### Step 6: Extract Tabs, Widgets, Filters, and Network Selectors

The AI agent analyzes sub-screen UI structures that do not appear as standalone screens but are essential to the application behavior.

Extract:

- top tab groups
- nested tabs inside tabs (ViewPager2 with TabLayout, HorizontalScrollView with tab-like views)
- segmented controls
- horizontal scroll tab bars
- chart timeframe selectors
- indicator selectors
- category tab bars
- coin list tabs
- market filter controls
- sort controls
- widget containers
- carousels and banners
- network selectors (searchable lists, QR code scan, favorite pinning)
- token selectors (logo grids, network status indicators, testnet/mainnet toggles)
- asset filters
- bottom sheet filters
- quick action modules

Also detect micro UI components:

- Feedback: badges, notification dots, progress indicators
- Input assists: character counters, password visibility toggles, clear buttons
- Selection: radio buttons, checkboxes, switches, chips (choice, filter, action, input)
- Navigation: back arrows, close icons, expand/collapse indicators
- Controllers: sliders, steppers, dials, radial selectors
- Display: tooltips, popovers, contextual menus, quick settings tiles
- Interaction zones: swipe gesture areas, chart touch zones, drag handles, scroll snapping regions

Sources used:

- layout XML
- view IDs
- adapter classes
- fragment containers
- TabLayout / ViewPager bindings
- TabLayoutMediator bindings
- click handlers in source code
- ViewModel classes
- LiveData / Flow bindings
- data binding expressions in layouts

---

### Step 7: Extract UI Design System

Analyze resources from:

- res/values/colors.xml
- res/values/styles.xml
- res/values/themes.xml
- res/values/dimens.xml

Extract:

- color palette
- typography definitions
- spacing system
- border radius
- elevation/shadows
- gradients
- state colors
- selector-based color variants
- divider styles
- tab indicators
- chip/tag styles
- button state styles
- input state styles

---

### Step 7.5: Extract Component State Variants

The AI agent must detect UI state variants defined in drawable selectors and style definitions.

States to extract:

- default
- pressed
- focused
- selected
- disabled
- loading
- error
- success
- active tab
- inactive tab
- hovered (for web/Desktop compatibility)
- dragged (for drag-and-drop interfaces)
- checked (for toggleable components)
- expanded (for collapsible panels)

Sources:

- drawable selector XML
- color selector XML
- style attributes
- view state flags
- StateListDrawable XML for pressed/focused/selected/disabled states
- AnimatedStateListDrawable for transition states
- Theme attributes for state-specific colors (colorControlNormal, etc.)

---

### Step 8: Extract UI Assets

Analyze resources from:

- res/drawable/
- res/mipmap/
- assets/

Extract:

- icons
- vector drawables
- illustrations
- backgrounds
- gradients
- tab icons
- filter icons
- network logos
- token logos
- badges and status indicators
- onboarding illustrations
- empty-state illustrations

---

### Step 8.5: Extract Multi-Configuration Resources

Detect alternative UI configurations.

Examples:

Density variants:
res/drawable-hdpi/
res/drawable-xhdpi/
res/drawable-xxhdpi/
res/drawable-xxxhdpi/

Screen size variants:
res/layout-sw600dp/
res/layout-sw720dp/

Orientation variants:
res/layout-land/

RTL layout variants:
res/layout-ldrtl/

Theme variants:
res/values-night/

Locale variants:
res/values-es/
res/values-fr/
res/values-ja/
res/values-zh/
res/values-zh-rCN/
res/values-zh-rTW/
res/values-ru/
res/values-ar/

These resources must be mapped to the primary UI definitions.

Extraction approach:

- Compare dimension values (dimens.xml) across configurations
- Extract string variations (strings.xml) for locale-specific UI
- Identify drawable substitutions (XML vs raster assets)
- Document theme attribute overrides (colors, styles)
- Note layout structural changes (added/removed views)

---

### Step 8.6: Extract Custom Font Files

Analyze resources from:

- res/font/
- assets/fonts/

Extract:

- Custom font families (TTF, OTF, WOFF files)
- Font XML definitions (font family declarations)
- Variable font axes (weight, width, slant)
- Font fallback chains

Binance uses custom fonts — without extracting the actual font files, the clone will fall back to system fonts and look incorrect.

---

### Step 8.7: Extract Raw Resources (Lottie, Audio, Media)

Analyze resources from:

- res/raw/
- assets/ (Lottie subdirectories)

Extract:

- Lottie animation JSON files (loaders, success checkmarks, confetti, onboarding)
- Sound effects (order fill sounds, notification tones)
- Video files (splash screen, onboarding videos)
- Certificate files (SSL pinning certificates)

Lottie animations are critical — Binance uses them for loading spinners, success/error states, and celebration effects.

---

### Step 8.8: Extract XML Configurations

Analyze resources from:

- res/xml/

Extract:

- preferences.xml (Settings screen structure and preference hierarchies)
- shortcuts.xml (app launcher shortcuts like "Quick Trade", "Scan QR")
- network_security_config.xml (SSL pinning, cleartext traffic rules)
- file_provider_paths.xml (file sharing paths)
- widget_info.xml (home screen widget metadata)
- backup_rules.xml (data backup configuration)

The preferences XML directly defines the Settings screen hierarchy — essential for documenting 23-account-settings.md and 31-settings-flows.md.

---

### Step 8.9: Extract Color State Lists

Analyze resources from:

- res/color/

Extract:

- ColorStateList XML files for text colors (pressed, disabled, focused, selected)
- ColorStateList XML files for icon tints
- ColorStateList XML files for background tints
- State-dependent color mappings for buttons, inputs, tabs, and chips

These are separate from drawable selectors — they define how **text and icon colors** change across interaction states.

---

### Step 8.10: Extract Shared Element Transitions

Analyze resources from:

- res/transition/
- Source code references to `TransitionManager`, `ChangeBounds`, `Fade`, `Slide`

Extract:

- Shared element transition definitions (e.g., coin icon morphing from list → detail)
- Scene transitions between fragments
- Custom transition classes
- Transition duration, interpolator, and target view mappings

---

### Step 8.11: Deep Scan Assets Directory

Analyze the full contents of:

- assets/

Extract beyond images:

- WebView HTML/CSS/JS bundles (Help Center, FAQ, Terms of Service, KYC flows)
- TradingView charting library files (the chart widget is often bundled as WebView assets)
- Lottie JSON animation files
- Configuration JSON files (feature flags, remote config defaults, A/B test configs)
- Pre-bundled data files (country lists, currency lists, network metadata)
- Markdown or text content files

> **Important:** The TradingView chart system and many informational pages (Help, FAQ, ToS) are rendered via WebView.
> These screens have NO layout XML — their UI lives entirely in HTML/CSS/JS inside `assets/`.
> They must be documented separately.

---

### Step 8.12: Identify WebView-Based Screens

Scan source code for:

- `WebView` usage in layout XMLs
- `WebViewClient` and `WebChromeClient` subclasses
- `loadUrl()`, `loadData()`, `loadDataWithBaseURL()` calls
- JavaScript interface bridges (`@JavascriptInterface`)
- WebView-based Activity/Fragment classes

Catalog all screens rendered via WebView:

- Help Center / FAQ
- Terms of Service / Privacy Policy
- KYC / Identity Verification flows
- Promotional landing pages
- In-app dApp browser (Web3)
- TradingView chart (if WebView-based)
- Announcements / Blog content

These screens will NOT have layout XML to analyze — document their URL patterns, injection bridges, and navigation entry points instead.

---

### Step 8.13: Extract Notification Layouts

Analyze resources from:

- res/layout/notification\_\*.xml
- NotificationManager usage in source code
- NotificationChannel definitions

Extract:

- Custom notification layouts (price alerts, order fills, deposit confirmations)
- Notification channel categories (trading, security, promotions, system)
- Notification action buttons ("View Order", "Open Trade")
- Notification priority levels and display behaviors
- Notification group / summary styles

---

### Step 8.14: Extract Home Screen Widget Layouts

Analyze resources from:

- res/layout/widget\_\*.xml
- res/xml/widget_info.xml (AppWidgetProviderInfo)
- AppWidgetProvider subclasses in source code

Extract:

- Widget layout structures (price ticker, portfolio summary, quick actions)
- Widget size variants (1x1, 2x1, 4x1, 4x2, etc.)
- Widget update intervals
- Widget configuration activities
- Widget click intent mappings

---

### Step 8.15: Audit Permissions and Map to UI Flows

Analyze from:

- AndroidManifest.xml `<uses-permission>` declarations
- Runtime permission request code in source

Map permissions to UI behaviors:

- CAMERA → QR code scanner, KYC selfie, video verification
- USE_BIOMETRIC / USE_FINGERPRINT → Biometric login, trade confirmation
- READ_CONTACTS → Contact-based transfers
- NFC → NFC-based features
- POST_NOTIFICATIONS → Notification permission dialog (Android 13+)
- ACCESS_FINE_LOCATION → Region-based compliance
- READ_CLIPBOARD → Paste address detection

Document the permission request dialogs and conditional UI flows that trigger based on permission state (granted, denied, permanently denied).

---

### Step 8.16: Document Light + Dark Mode Side-by-Side

Extract and document:

- res/values/colors.xml (light mode color tokens)
- res/values-night/colors.xml (dark mode color tokens)
- res/values/themes.xml (light theme attributes)
- res/values-night/themes.xml (dark theme attribute overrides)

Create a side-by-side mapping table:

| Token Name      | Light Mode | Dark Mode |
| --------------- | ---------- | --------- |
| colorPrimary    | #F0B90B    | #F0B90B   |
| colorBackground | #FFFFFF    | #181A20   |
| colorSurface    | #F5F5F5    | #1E2026   |
| textPrimary     | #1E2329    | #EAECEF   |
| ...             | ...        | ...       |

Both modes must be fully documented in 32-colors-theme.md for the clone to support dark mode correctly.

---

### Step 8.17: Obfuscation Handling Strategy

Binance's APK is heavily obfuscated with ProGuard/R8. The jadx output will contain:

- Renamed classes (e.g., `a.b.c.d` instead of `TradeFragment`)
- Renamed methods and fields
- Inlined code and removed debug info

Strategy:

1. **Use layout XML as primary source** — layout files are NOT obfuscated
2. **Use resource IDs** — `R.layout.*`, `R.id.*`, `R.drawable.*` retain original names
3. **Use string resources** — `strings.xml` entries are in plaintext
4. **Cross-reference layout inflation** — search for `R.layout.fragment_trade` to find the Fragment class even if obfuscated
5. **Use AndroidManifest.xml** — Activity class names are preserved in the manifest
6. **Rely on screenshots** when source code is too obfuscated to interpret

> **Rule:** When jadx code is unreadable due to obfuscation, fall back to layout XML + screenshots as the source of truth.

---

### Step 8.18: Extract UI Data Models

Screens depend directly on data structures to render rows, cards, and tickers.
Analyze and extract:
- `ViewModel` classes
- `data classes` and `DTOs` (Data Transfer Objects)
- GraphQL models mapping to the UI
Document exactly what fields are required to populate screens like `03-exchange-homepage.md`.

---

### Step 8.19: API Endpoint Discovery

Identify exactly how the UI modules fetch their data.
Scan for:
- `Retrofit` / `OkHttp` / `GraphQL` builders
- `baseUrl`, `endpoint`, and API routing structures
Document REST/GraphQL endpoints in `52-api-endpoints.md`.

---

### Step 8.20: Event System Extraction

Binance heavily queries continuous data (Prices, Order Books) via Streams.
Scan for:
- `subscribe`, `socket`, `channel`
- LiveData, Flow, RxJava, or EventBus receivers updating the UI
Document the socket topics required to animate the UI in `53-event-system.md`.

---

### Step 8.21: Extract Architecture Systems

Advanced mobile reverse-engineering requires extracting deep architectural behaviors that define how the app actually operates, not just how it looks.

1. **Dependency Injection Architecture:**
   - Scan for: `Hilt`, `Dagger`, `@Module`, `@Provides`, `@Singleton`, `@Inject`, `@HiltAndroidApp`, `Koin`, `Kodein`
   - Extract: Application scope services, Repository classes, API service providers, Database providers, Use case layers.
   - Example: `MarketRepository` → uses `ApiService` → injected into `MarketViewModel`.

2. **Repository Layer:**
   - Scan for: `Repository`, `DataSource`, `RemoteDataSource`, `LocalDataSource`
   - Extract: The middle layer between ViewModels and API/DB (e.g., `TickerRepository`, `OrderRepository`, `AuthRepository`). This determines which API calls populate which UI components.

3. **Pagination System:**
   - Scan for: `PagingSource`, `PagingData`, `PagingDataAdapter`, `loadNextPage`, `cursor`, `page`, `limit`
   - Extract: Pagination method, page size, cursor vs offset, loading indicators. Affects scroll behavior and API usage.

4. **Error Handling Architecture:**
   - Scan for: `ApiException`, `NetworkException`, `ErrorMapper`, `ResultWrapper`, `Failure`
   - Extract: Error code → UI mapping, retry logic, toast messages, snackbar messages, error banners.

5. **Feature Gating / Regional Restrictions:**
   - Scan for: `region`, `country`, `geo`, `compliance`, `isRestricted`, `featureGate`
   - Extract: Country restrictions, KYC gating, feature toggles, compliance checks (e.g., US users → futures disabled).

6. **Analytics / Tracking Events:**
   - Scan for: `track`, `analytics`, `logEvent`, `FirebaseAnalytics`, `Amplitude`, `Mixpanel`
   - Extract: User action events, screen view events, trading events, conversion events. This reveals important user flows.

7. **Security Systems:**
   - Scan for: `SafetyNet`, `PlayIntegrity`, `RootDetection`, `EmulatorDetection`, `CertificatePinning`, `Keystore`
   - Extract: Root detection logic, SSL pinning config, biometric usage, device integrity checks. Critical for reproducing authentication flows.

8. **Background Services:**
   - Scan for: `Service`, `ForegroundService`, `JobScheduler`, `WorkManager`, `AlarmManager`
   - Extract: Background price refresh, notification polling, account sync (e.g., `WorkManager` → refresh ticker every 15s).

9. **App Lifecycle Hooks:**
   - Scan for: `onCreate`, `onResume`, `onPause`, `onStop`, `onDestroy`
   - Extract: Analytics triggers, socket reconnect, data refresh logic.

10. **WebSocket Protocol Mapping:**
    - Extract: Subscription messages, heartbeat messages, reconnect strategy, message schema. Required to rebuild real-time trading data.

11. **Chart Engine Extraction:**
    - Scan for: `TradingView`, `MPAndroidChart`, `ChartView`, `Indicator`, `Candle`, `OHLC`
    - Extract: Chart library, data feed adapter, indicator engine, timeframe system, drawing tools, gesture controls.

12. **Localization Strategy:**
    - Extract: Language switching logic, fallback language, RTL layout adjustments, dynamic translation loading.

13. **Accessibility Services:**
    - Scan for: `contentDescription`, `AccessibilityNodeInfo`, `AccessibilityDelegate`
    - Extract: TalkBack support, contentDescription, accessibility delegates, accessibility roles.

14. **Performance Optimizations:**
    - Scan for: `RecyclerView pool`, `setHasFixedSize`, `DiffUtil`, `view recycling`, `prefetch`
    - Extract: RecyclerView pooling, image caching, lazy loading.

15. **Image Loading System:**
    - Scan for: `Glide`, `Coil`, `Picasso`, `Fresco`, `ImageLoader`
    - Extract: Image caching, placeholder logic, error images, network vs local images.

16. **Push Notification Providers:**
    - Scan for: `FirebaseMessagingService`, `onMessageReceived`
    - Extract: Firebase Cloud Messaging, Huawei Push, OneSignal logic.

17. **Deep Linking System:**
    - Scan for: `intent-filter`, `scheme`, `host`, `path`
    - Extract: App scheme, universal links, deeplink routing (e.g., `binance://trade/BTCUSDT`).

18. **Feature Module Architecture:**
    - Scan for: `feature`, `module`, `core`, `base`
    - Extract: Module boundaries, feature modules, shared modules.

19. **A/B Experiment Framework:**
    - Scan for: `experiment`, `variant`, `bucket`, `ABTest`
    - Extract: Experiment ID, UI variations, feature rollout logic.

20. **Caching Layers:**
    - Scan for: `cache`, `LRU`, `diskCache`
    - Extract: Memory cache, disk cache, API cache.

### Step 8.22: Extract UI State Machines

Large trading apps heavily rely on state transitions to control buttons, loading indicators, and error banners.
- Scan for: ViewModel state classes, sealed classes, UI reducers, `stateFlow`, `LiveData` state objects.
- Extract: e.g., `OrderFormState` → `Idle`, `Editing`, `Submitting`, `Success`, `Error`.

### Step 8.23: Extract Gesture Interaction Systems

Charts and order books often use complex touch mechanics.
- Scan for: `GestureDetector`, `ScaleGestureDetector`, `OnTouchListener`, `MotionEvent`, `VelocityTracker`
- Extract: Chart pinch zoom, candle crosshair drag, swipe order book depth, drag indicator overlays.

### Step 8.24: Extract Concurrency and Scheduling Systems

Modern apps rely on concurrency to not block the main UI thread.
- Scan for: `CoroutineScope`, `Dispatchers`, `launch`, `async`, `RxJava`, `Schedulers`, `Executors`
- Extract: E.g., `MarketRepository` → fetch data on `Dispatchers.IO` → update ViewModel.

### Step 8.25: Extract Navigation Guards

Many critical screens require conditions before access is granted.
- Scan for: `isLoggedIn`, `requiresKYC`, `checkPermission`, `authGuard`
- Extract: E.g., Trade screen → requires login, requires KYC, requires futures permission.

### Step 8.26: Extract Environment Configuration

Enterprise apps switch logic based on environment builds.
- Scan for: `BuildConfig`, `environment`, `flavor`, `stage`, `testnet`, `mainnet`
- Extract: API base URLs, feature toggles, network environments.

### Step 8.27: Extract Wallet Cryptography Systems (Web3)

If the app contains a Web3 wallet, key management is foundational.
- Scan for: `WalletManager`, `KeyStore`, `BIP39`, `Mnemonic`, `HDWallet`, `PrivateKey`, `Signature`
- Extract: Wallet key storage, mnemonic handling, signature generation, transaction signing.

### Step 8.28: Extract Rate Limiting Systems

Trading APIs often throttle UI refreshes to preserve performance.
- Scan for: `throttle`, `debounce`, `rateLimit`, `cooldown`
- Extract: Search debounce (e.g., 300ms), ticker refresh (e.g., 500ms).

Document all architecture systems comprehensively to achieve ~99.5% extraction completeness.

---

### Step 9: Create Documentation Files (54 MD Files)

All documentation files must be created and fed to the AI builder in numeric order (00 → 53).

---

## 📂 Documentation Folder Structure

Create a folder for all specification files.

```
docs/
├── 01-application/
│   ├── 00-system-index.md
│   ├── 01-complete-ui-specification.md
│   └── 02-complete-screen-catalog.md
│
├── 02-exchange-core/
│   ├── 03-exchange-homepage.md
│   ├── 04-exchange-markets.md
│   ├── 05-exchange-trade.md
│   └── 06-exchange-assets-wallet.md
│
├── 03-web3-core/
│   ├── 07-web3-wallet-home.md
│   ├── 08-web3-wallet-markets.md
│   ├── 09-web3-wallet-trade.md
│   ├── 10-web3-wallet-discover-dapps.md
│   └── 11-web3-wallet-assets.md
│
├── 04-exchange-advanced/
│   ├── 12-exchange-order-book.md
│   ├── 13-exchange-chart-system.md
│   ├── 14-exchange-order-types.md
│   ├── 15-exchange-open-orders.md
│   └── 16-exchange-trade-history.md
│
├── 05-web3-advanced/
│   ├── 17-web3-wallet-token-details.md
│   ├── 18-web3-wallet-nft-assets.md
│   ├── 19-web3-wallet-swap.md
│   ├── 20-web3-wallet-transaction-history.md
│   └── 21-web3-wallet-wallet-connect.md
│
├── 06-account-settings/
│   ├── 22-user-profile.md
│   ├── 23-account-settings.md
│   ├── 24-security-settings.md
│   ├── 25-two-factor-authentication.md
│   ├── 26-biometric-authentication.md
│   ├── 27-notifications-system.md
│   ├── 28-permissions-system.md
│   ├── 29-error-handling-ui.md
│   ├── 30-real-time-data-updates.md
│   └── 31-settings-flows.md
│
├── 07-design-system/
│   ├── 32-colors-theme.md
│   ├── 33-typography.md
│   └── 34-dimensions-spacing.md
│
├── 08-ui-foundation/
│   ├── 35-screen-layouts.md
│   ├── 36-ui-components.md
│   ├── 37-navigation-system.md
│   ├── 38-icons-drawables.md
│   ├── 39-strings-content.md
│   └── 40-animations-motion.md
│
└── 09-component-specs/
    ├── 41-logo-icon-specifications.md
    ├── 42-button-specifications.md
    ├── 43-screen-flows-navigation.md
    ├── 44-features-overview.md
    ├── 45-data-formatting-rules.md
    ├── 46-ui-states-loading-error-empty.md
    ├── 47-input-fields.md
    ├── 48-cards-lists.md
    ├── 49-dialogs-bottom-sheets.md
    └── 50-overlay-selectors.md
│
└── 10-backend-mapping/
    ├── 51-data-models.md
    ├── 52-api-endpoints.md
    └── 53-event-system.md
```

Workflow documentation files:

- 43-screen-flows-navigation.md → navigation graph of the entire app
- 44-features-overview.md → user workflows for major features

All MD files should be created inside the `docs/` folder and maintained in numeric order.
When feeding files to the AI full stack builder, always follow the numeric sequence (00 → 53).

---

## 📝 Documentation Template for Each MD File

**Each MD file should include**:

```markdown
# [##]-[file-name]

## Overview

[Brief description of what this file documents]

## Page Route

/path

## Workflow Context

Describe the user workflow this screen belongs to.

Example:
Markets → Select Pair → Trade Screen → Place Order

## Screen Purpose

Explain the purpose of this screen inside the application.

Example:

Trade Screen
Allows users to place spot or futures orders for a selected trading pair.

## Screen Variants

List alternate UI modes of the screen.

Example:

Trade Screen
Variants:

- Spot Mode
- Margin Mode
- Futures Mode
- Chart Fullscreen
- Indicator Panel
- Drawing Tools Panel

## Tabs and Subviews

Document all tab structures.

Example:

Markets Screen
Tabs:

- Favorites
- Spot
- Futures
- ETF
- Zones

Nested Tabs:
Spot Markets
├── USDT
├── BTC
├── FDUSD
└── BNB

## Widget Regions

List reusable widgets inside the screen.

Examples:

- coin list widget
- price ticker widget
- order book widget
- portfolio summary card
- banner carousel

## Subviews and Internal Sections

- Tabs
- Widgets
- Cards
- Lists
- Modals
- Bottom sheets

## Filters and Selectors

- Filter types
- Sort options
- Chip groups
- Dropdown selectors
- Network selectors: searchable lists, QR code scan, favorite pinning
- Token selectors: logo grids, network status indicators, testnet/mainnet toggles

## States and Variants

- Empty state
- Loading state
- Error state
- Success state
- Disabled state
- Selected state
- Filtered state

## Source Resources

### Layout XML

- Layout file name
- Example: `fragment_trade.xml`

### Drawable Resources

- Icons
- Background images
- Vector drawables

### Navigation Source

- Activity / Fragment / Navigation graph

### Source Code References

- Activity / Fragment class name
- Important event handlers
- Navigation triggers

## Component Hierarchy

[Break down all UI components from layout XML, including tabs, widgets, lists, filters, selectors, modals, bottom sheets, overlays, and reusable subviews]

## Layout Structure

Header
Main Content
Footer / Bottom Navigation

## Color Specifications

- Extract exact hex codes from drawable resources and XML
- Document color usage (primary, secondary, error, success)
- Include RGB values and opacity

## Typography

- Font family (SF Pro Display, etc.)
- Font sizes (in px with dp equivalent)
- Font weights (regular, medium, semi-bold, bold)
- Letter spacing
- Line heights

## Dimensions & Spacing

- All measurements in pixels (px) with dp equivalent
- Component sizes (width, height)
- Margins and padding
- Touch target sizes (minimum 48x48px ~24dp)

## Component States

- Default state
- Pressed/Active state
- Disabled state
- Loading state

## Interaction Patterns

- Tap/click behavior
- Gesture support (swipe, pinch, drag, scroll)
- Tab switching behavior
- Filter application behavior
- Sort behavior
- Selector opening behavior
- Bottom sheet behavior
- Modal behavior
- Animation timings (duration, easing)
- Haptic feedback
- Navigation actions

## Data Display Formats

- How numbers are formatted
- Currency display
- Percentage display
- Date/time formats

## Accessibility

- Screen reader labels
- Focus order
- Minimum contrast ratios
- Touch target sizes

## Visual Design Details

- Border radius values
- Shadow specifications (color, blur, offset)
- Gradient definitions
- Icon specifications

## Implementation Notes

- Special considerations for developers
- Performance optimizations
- Platform-specific notes (Android vs iOS)
```

---

## 🔍 Detailed Extraction Examples for Web3 Core Screens

---

### 📱 For Web3 Core Screens – Discover Page (`10-web3-wallet-discover-dapps.md`)

The Discover page is a multi-tab container with four primary variants: **Discover**, **Earn**, **Booster**, and **DApps**. Each tab has its own unique UI modules.

#### Top Tab Architecture (Layer 3 Navigation)

- **Tab Bar:** Horizontally scrollable with labels: `Discover`, `Earn`, `Booster`, `DApps`.
- **Interaction:** Tapping a tab smoothly switches the entire content area below.

---

#### A. Discover Tab

- **Purpose:** Lists ongoing airdrop campaigns and project spotlights.
- **UI Components:**
  - **Project List (`RecyclerView` item):**
    - Left: Project name (e.g., `Turtle`).
    - Right: Two numbers stacked vertically:
      - Top: Participant count (e.g., `492011`) in bold.
      - Bottom: Reward pool (e.g., `15,000,000 TUR...`) in smaller grey text.
  - **Infinite Scroll:** More items load as user scrolls down.
- **Micro-Interaction:** Tapping an item opens a detailed campaign page (likely a WebView or a new screen).

#### B. Earn Tab

- **Purpose:** Displays yield opportunities and staking options.
- **Top Sub-Tabs:** Inside the Earn tab, there is a secondary tab strip: `Tokens`, `Loans`, `Protocols`, `Alpha Pools`, `Bonus`.
- **Content Cards:**
  - Each card shows:
    - Token icon and name (e.g., `USDT`).
    - Bonus badge (e.g., `Bonus` tag) if applicable.
    - APY range (e.g., `1.55% ~ 13.85% APY`).
    - User's current balance (if any).
  - For `BNB`, the card shows balance and APY range.
- **Micro-Interaction:** Tapping a card opens the corresponding earn product page.

#### C. Booster Tab

- **Purpose:** Features limited-time booster events with countdowns.
- **Header:**
  - `My Total Rewards` (value) and `Joined` count.
- **Event List:**
  - Each event card displays:
    - Project logo and name (e.g., `Sentio XYZ`).
    - Event description (e.g., `Decentralized Data and Compute Network`).
    - Reward pool (e.g., `3,000,000 ST`).
    - Countdown timer (e.g., `03d : 07h : 02m : 17s`).
    - `Join Now` button.
- **Finished Events Section:** Collapsible or separate list of past events with similar layout.

#### D. DApps Tab

- **Purpose:** Marketplace for discovering and launching dApps.
- **Search Bar:** Persistent at top – "Search for dApps or enter a URL".
- **Category Chips:** Below search, horizontally scrollable chips:
  - `Recent`, `Favorites`, `DEX`, `Staking & Restaking`, etc.
- **Trending DApps Grid:**
  - 2-column grid of dApp cards.
  - Each card shows:
    - dApp logo, name, and a short description (e.g., `Venus - A Decentralized Marketplace...`).
    - Optional `New` or `Popular` badge.
- **Prediction Market Section:** Separate row with cards for `Predict` and `Polymarket`.
- **Micro-Interaction:** Tapping a dApp card opens the dApp in an in-app browser with WalletConnect integration.

#### Overlays & Reusable Components

- **Network Selector Bottom Sheet:** Used when switching networks within any tab (documented in `50-dialogs-bottom-sheets.md`).
- **Token Selector Modal:** Appears when selecting a token for earn or swap actions.
- **dApp Connection Bottom Sheet:** Triggered when connecting to a dApp (WalletConnect flow).

#### Source Resources to Look For

- Layout files: `fragment_discover.xml`, `fragment_earn.xml`, `fragment_booster.xml`, `fragment_dapps.xml` (or a single container with `ViewPager2`).
- RecyclerView adapters for project lists, dApp grids, event lists.
- Custom countdown timer views in booster events.
- Chip groups for categories.

This level of detail ensures the AI builder can reconstruct the entire Discover page exactly as seen in the March 2026 screenshots.

---

## ⚙ AI Agent Execution Environment

This workspace runs inside an AI-enabled code editor.

The AI agent performs:

- APK decompilation
- resource extraction
- layout analysis
- navigation analysis
- workflow reconstruction
- documentation generation

The agent uses the tools located in:
apk-tools/

---

## 📊 Priority Order (BUILD ORDER)

### Step 1 — Application Definition

```
01-complete-ui-specification.md
```

Defines the entire application structure.

---

### Step 2 — Screen Catalog

```
02-complete-screen-catalog.md
```

Lists every screen and route.

---

### Step 3 — Exchange Core Screens

```
03-exchange-homepage.md
04-exchange-markets.md
05-exchange-trade.md
06-exchange-assets-wallet.md
```

---

### Step 4 — Web3 Core Screens

```
07-web3-wallet-home.md
08-web3-wallet-markets.md
09-web3-wallet-trade.md
10-web3-wallet-discover-dapps.md
11-web3-wallet-assets.md
```

---

### Step 5 — Exchange Advanced Modules

```
12-exchange-order-book.md
13-exchange-chart-system.md
14-exchange-order-types.md
15-exchange-open-orders.md
16-exchange-trade-history.md
```

---

### Step 6 — Web3 Advanced Modules

```
17-web3-wallet-token-details.md
18-web3-wallet-nft-assets.md
19-web3-wallet-swap.md
20-web3-wallet-transaction-history.md
21-web3-wallet-wallet-connect.md
```

---

### Step 7 — Account & Settings

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

---

### Step 8 — Design System

```
32-colors-theme.md
33-typography.md
34-dimensions-spacing.md
```

---

### Step 9 — Foundation UI

```
35-screen-layouts.md
36-ui-components.md
37-navigation-system.md
38-icons-drawables.md
39-strings-content.md
40-animations-motion.md
```

---

### Step 10 — Component Specifications

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

### Step 11 — Backend Mapping

```
51-data-models.md
52-api-endpoints.md
53-event-system.md
```

---

## 🎯 End Goal

**After completing all 54 MD files**:

- Each file will be fed to AI Full Stack App Builder
- AI will generate code for each module
- Modules will be combined into complete Binance clone
- Result: Fully functional Exchange + Web3 Wallet app

---

## 📌 Important Notes

1. **Mobile-Only Extraction**:
   - Extract UI/UX exclusively from Android APK (no desktop/web sources)
   - Focus on mobile-specific UI patterns, components, and interactions
   - Ignore any desktop/web-specific elements that may appear in resources
   - All extracted specifications target mobile UI implementation

2. **Pixel-Perfect Documentation**:
   - Extract UI details from layout XML and drawable resources
   - Use screenshots only when layout structure is unclear
   - Use px (pixels) with dp equivalent
   - Include hex codes with RGB values
   - Document exact spacing in pixels

3. **Documentation Build Order Grouping**:
   Files are grouped into logical phases for sequential AI builder consumption:
   01–02 → Application definition  
   03–06 → Exchange core screens  
   07–11 → Web3 core screens  
   12–16 → Exchange advanced modules  
   17–21 → Web3 advanced modules  
   22–31 → Account & settings  
   32–34 → Design system  
   35–40 → UI foundation  
   41–50 → Component specifications

4. **CeFi vs DeFi Separation**:
   - Exchange (03-16): Order books, charts, trading
   - Web3 (07-21): Wallet, swaps, NFTs, dApps
   - Different UI patterns, different user flows

5. **Documentation Quality**:
   - Document all visible UI elements.
   - Typical size: 200-800 lines depending on screen complexity.
   - Trade page may exceed 1000 lines.
   - Always inspect layout XML files first before documenting a screen.
   - Use XML hierarchy as the source of truth for component structure.

6. **One Screen Container Per File**:
   - Each MD file describes one major screen container.
   - Inside the file document:
     - screen variants
     - tab views
     - modal variants
     - bottom sheet variants
     - fullscreen variants
   - Example:
     05-exchange-trade.md
     Container:
     Trade Screen
     Variants documented inside:
      - Spot mode
      - Margin mode
      - Futures mode
      - Chart fullscreen
      - Indicator settings
      - Order confirmation modal

7. **APK Resource First Rule (Anti-Hallucination UI Evidence Rule)**:
   Every documented UI component must include explicit proof of real existence. You must map:
   - Layout XML source
   - View IDs
   - Drawable references
   - Inflation location in Smali/Java
   The AI agent analyzes the following resources to document a screen:
   - res/layout/
   - res/values/
   - res/drawable/
   - res/navigation/
   - source code (jadx)

   These resources define the true UI structure.

8. **Workflow Extraction Rule**:
   Always identify the user workflow a screen belongs to.
   Screens should be documented as part of a flow, not as isolated UI pages.

9. **Micro-Detail Extraction Rule**:
   Every screen must be decomposed into:
   - sections
   - tabs
   - nested tabs
   - widgets
   - cards
   - lists
   - filters
   - selectors
   - overlays
   - reusable components

Many important Binance UI elements exist as subviews inside major screens and must not be skipped.

10. **API Evidence Rule (Anti-Hallucination Backend Mapping)**:
    Every documented API endpoint must reference explicit source-code evidence:
    - Retrofit interface
    - GraphQL query file
    - WebSocket subscription string
    - Network request class
    
    If no definitive evidence exists from jadx extraction, you must explicitly mark it as `UNVERIFIED_API`.

---

## 🚀 Quick Start Checklist

- [x] Decompile APK
- [x] Extract UI resources
- [ ] Analyze layouts
- [ ] Extract navigation structure
- [ ] Detect all application screens
- [ ] Detect screen sections
- [ ] Detect screen variants
- [ ] Detect nested tab structures
- [ ] Detect widget containers
- [ ] Detect micro UI components
- [ ] Detect overlay interfaces
- [ ] Detect modal-only screens
- [ ] Detect fullscreen variants
- [ ] Detect component states
- [ ] Detect multi-configuration resources
- [ ] Extract user workflows
- [ ] Extract design system
- [ ] Extract assets
- [ ] Extract custom font files (res/font/, assets/fonts/)
- [ ] Extract raw resources — Lottie JSONs, sounds, media (res/raw/)
- [ ] Extract XML configs — preferences, shortcuts, security config (res/xml/)
- [ ] Extract color state lists (res/color/)
- [ ] Extract shared element transitions (res/transition/)
- [ ] Deep scan assets/ — WebView HTML, Lottie, TradingView, config JSONs
- [ ] Identify and catalog all WebView-based screens (no layout XML)
- [ ] Extract notification layouts and channels
- [ ] Extract home screen widget layouts
- [ ] Audit AndroidManifest.xml permissions → map to UI flows
- [ ] Document light + dark mode color tokens side-by-side
- [ ] Establish obfuscation handling strategy for jadx output
- [ ] Extract advanced architecture systems (DI, Repositories, Sockets, etc. - Step 8.21)
- [ ] Start documenting with:
  - 01-complete-ui-specification.md
  - 02-complete-screen-catalog.md
  - 03–06 Exchange core screens
  - 07–11 Web3 core screens
  - 12–16 Exchange advanced modules
  - 17–21 Web3 advanced modules
  - 22–31 Account & settings
  - 32–34 Design system
  - 35–40 UI foundation
  - 41–50 Component specifications
- [ ] Feed each MD file to AI builder in numeric order (00 → 53)
- [ ] Build complete app module by module

---

## 📞 When You Return

**Just read this file** and you'll know exactly:

1. What we planned (54-file architecture)
2. What's done (workspace cleanup)
3. What's next (AI analysis → extract navigation → detect screens → extract tabs/widgets/filters/networks → extract workflows → extract design system → extract assets → create 54 MD files)

**Continue from where you left off!** 🎯

---

_Last Updated: 2026-03-12_
_Project: Binance Clone - Documentation-Driven Development_
_Architecture: Binance APK → AI Agent Decompilation (apktool) → Source Extraction (jadx) → Resource Analysis (layouts + drawables + values) → Screen Detection → Navigation & Workflow Reconstruction → UI/UX Documentation (54 MD Files) → AI Full Stack App Builder → Generated Web Application → Capacitor Android Build_
