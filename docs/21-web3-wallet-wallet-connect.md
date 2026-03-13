# 21-Web3-Wallet-Wallet-Connect

## Overview

This document provides detailed specifications for the WalletConnect Integration within the Web3 Wallet. This feature enables users to connect their wallet to decentralized applications (dApps) via the WalletConnect protocol, scan QR codes, manage sessions, control dApp permissions, and view connected dApps.

---

## Page Route

```
/web3/wallet-connect
```

**Deep Link Pattern:**
- `binance://web3/wallet-connect`
- `binance://walletconnect`
- `wc:` (WalletConnect URI scheme)
- `app.binance.com/web3/wallet-connect`

---

## Workflow Context

```
Web3 Home → WalletConnect → Connection Flow
                                      ↓
                    ┌─────────────────┼─────────────────┐
                    ↓                 ↓                 ↓
              QR Scanner        Manual Input        Session List
                    ↓                 ↓                 ↓
              Scan dApp         Enter URI           Manage dApps
                    ↓                 ↓                 ↓
              Pairing           Connection          Permissions
```

**User Flow:**
1. User navigates to WalletConnect from Web3 menu
2. Chooses to scan QR code or enter URI manually
3. Scans dApp's WalletConnect QR code
4. Reviews connection request and permissions
5. Approves connection
6. Session established
7. Can manage connected dApps later
8. Can disconnect when needed

---

## Screen Container Architecture

### Parent Container: WalletConnectActivity
- **Package:** `com.mpc.wallet.walletconnect`
- **Layout:** `activity_wallet_connect.xml`
- **View ID:** `2131626000`

### Screen Variants:
| Variant | Purpose |
|---------|---------|
| Scanner Mode | QR code scanner |
| Manual Input | Enter WalletConnect URI |
| Session List | Manage connected dApps |
| Connection Request | Approve/deny connection |
| dApp Details | View/edit permissions |

---

## Tabs and Subviews

### Main Content

```
┌─────────────────────────────────────────┐
│ Tab Bar                                   │
│ [Connect] [Connected]                    │
├─────────────────────────────────────────┤
│ Connect Tab:                             │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ QR Scanner View                      │ │
│ │ [Camera preview with overlay]       │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ [Or enter code manually]                │
│                                         │
├─────────────────────────────────────────┤
│ Connected Tab:                           │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │ Connected dApps List                 │ │
│ │ - dApp Name + Icon                  │ │
│ │ - Last connected                    │ │
│ │ - Permissions                       │ │
│ └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

---

## Widget Regions

### 1. Tab Bar

**Layout Reference:** `layout_wc_tabs.xml`

**Components:**
- Connect Tab
  - View ID: `2131626001` (tab_connect)
  - Text: "Connect"
  - Shows scanner/URI entry
  
- Connected Tab
  - View ID: `2131626002` (tab_connected)
  - Text: "Connected"
  - Shows session list

### 2. QR Scanner

**Layout Reference:** `layout_wc_scanner.xml`

**Components:**
- Camera Preview
  - View ID: `2131626003` (camera_preview)
  - Full screen camera
  - Auto-focus enabled
  
- Scanner Overlay
  - View ID: `2131626004` (scanner_overlay)
  - QR code detection frame
  - Corner markers
  - Semi-transparent background
  
- Scanner Instructions
  - View ID: `2131626005` (scanner_instructions)
  - Text: "Scan QR code from dApp"
  - Position: Below frame
  
- Flash Toggle
  - View ID: `2131626006` (flash_toggle)
  - Icon: Flash on/off
  - For low-light scanning

### 3. Manual URI Entry

**Layout Reference:** `layout_wc_manual_entry.xml`

**Components:**
- Input Field
  - View ID: `2131626007` (uri_input)
  - Hint: "Enter WalletConnect URI"
  - Paste button
  
- Connect Button
  - View ID: `2131626008` (connect_button)
  - Text: "Connect"
  - Disabled until valid URI

### 4. Connection Request

**Layout Reference:** `layout_wc_connection_request.xml`

**Components:**
- dApp Info Card
  - View ID: `2131626009` (dapp_info)
  - dApp Icon
    - ImageView: `2131626010`
  - dApp Name
    - TextView: `2131626011`
  - dApp URL
    - TextView: `2131626012`

- Chain Selection
  - View ID: `2131626013` (chain_selector)
  - Text: "Connected Network"
  - Dropdown: ETH, BNB, MATIC, etc.
  
- Permissions Section
  - View ID: `2131626014` (permissions_section)
  - List of requested permissions
  
**Permission Item:**
```
LinearLayout
├─ CheckBox: 2131626015
│   └─ View in Explorer
├─ CheckBox: 2131626016
│   └─ Execute Transactions
├─ CheckBox: 2131626017
│   └─ Sign Messages
└─ CheckBox: 2131626018
    └─ Sign Transactions
```

- Action Buttons
  - View ID: `2131626019` (action_buttons)
  - Cancel Button
    - Text: "Cancel"
    - Style: Outlined
  - Connect Button
    - Text: "Connect"
    - Style: Filled (Primary)

### 5. Connected dApps List

**Layout Reference:** `layout_wc_sessions.xml`

**Components:**
- dApp List (RecyclerView)
  - View ID: `2131626020` (sessions_list)
  - Layout: LinearLayoutManager (vertical)

**dApp Item (item_connected_dapp.xml):**
```
CardView (8dp corner)
├─ dApp Icon
│   └─ ImageView: 2131626021
│       Size: 48x48dp
├─ dApp Info Column
│   ├─ dApp Name
│   │   └─ TextView: 2131626022
│   │       Font: Bold, 16sp
│   ├─ dApp URL (truncated)
│   │   └─ TextView: 2131626023
│   │       Font: Regular, 12sp, Gray
│   └─ Last Connected
│       └─ TextView: 2131626024
│           Format: "Last: 2 hours ago"
├─ Chain Badge
│   └─ TextView: 2131626025
│       Shows: "ETH", "BNB", etc.
└─ Actions
    ├─ Edit Permissions
    │   └─ ImageButton: 2131626026
    └─ Disconnect
        └─ ImageButton: 2131626027
```

### 6. dApp Details/Edit Permissions

**Layout Reference:** `layout_wc_dapp_details.xml`

**Components:**
- dApp Header
  - View ID: `2131626028` (dapp_header)
  - Icon, name, URL
  
- Permissions List
  - View ID: `2131626029` (permissions_list)
  - Toggleable permission items
  
- Network Settings
  - View ID: `2131626030` (network_settings)
  - Allowed chains
  - Change chain option
  
- Session Info
  - View ID: `2131626031` (session_info)
  - Session ID
  - Created date
  - Peer ID
  
- Disconnect Button
  - View ID: `2131626032` (disconnect_button)
  - Text: "Disconnect"
  - Style: Danger (red)

---

## WalletConnect Protocol

### Connection Flow

```
1. dApp generates WalletConnect URI
   wc:00000000-0000-0000-0000-000000000000@1?bridge=https%3A%2F%2Fbridge.walletconnect.org&key=...

2. User scans QR or enters URI

3. App displays connection request with:
   - dApp metadata (name, icon, URL)
   - Requested permissions
   - Chain information

4. User approves/denies

5. If approved:
   - Establishes WebSocket connection to bridge
   - Exchanges session data
   - Creates session topic

6. Session active:
   - dApp can send requests
   - App prompts user for approval
   - Responses sent back via bridge
```

### Supported Methods

**Session Methods:**
- `wc_sessionPropose` - Propose new session
- `wc_sessionApprove` - Approve session
- `wc_sessionReject` - Reject session
- `wc_sessionUpdate` - Update session
- `wc_sessionDelete` - Delete session

**Chain Methods:**
- `eth_chainId` - Get chain ID
- `eth_blockNumber` - Get current block
- `eth_getBalance` - Get balance
- `eth_call` - Read contract
- `eth_sendTransaction` - Send transaction
- `eth_sign` - Sign message
- `personal_sign` - Personal sign
- `eth_signTypedData` - Typed sign

---

## Component Hierarchy

```
WalletConnectActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title: "WalletConnect")
│       └─ ImageButton (help)
├─ TabLayout (wc_tabs)
│   ├─ Tab: Connect
│   └─ Tab: Connected
├─ FrameLayout (content)
│   ├─ Fragment: ConnectFragment
│   │   ├─ SurfaceView (camera_preview)
│   │   ├─ View (scanner_overlay)
│   │   ├─ Button (flash_toggle)
│   │   └─ Button (manual_entry)
│   ├─ Fragment: ConnectionRequestFragment
│   │   ├─ CardView (dapp_info)
│   │   ├─ Spinner (chain_selector)
│   │   ├─ RecyclerView (permissions)
│   │   └─ ButtonBar (cancel/connect)
│   └─ Fragment: SessionsFragment
│       ├─ RecyclerView (sessions_list)
│       │   └─ SessionViewHolder (multiple)
│       └─ EmptyStateView
├─ BottomSheet: dapp_details_sheet
│   ├─ Header (dapp_info)
│   ├─ PermissionsList
│   ├─ NetworkSettings
│   ├─ SessionInfo
│   └─ Button (disconnect)
└─ Dialog: help_dialog
```

---

## Data Models

### WalletConnect Session
```kotlin
data class WCSession(
    val topic: String,
    val peerId: String,
    val peerMeta: dAppMetadata?,
    val permissions: WCPermissions,
    val accounts: List<String>,
    val chains: List<String>,
    val created: Long,
    val lastUsed: Long,
    val isActive: Boolean
)

data class dAppMetadata(
    val name: String,
    val description: String?,
    val url: String,
    val icons: List<String>,
    val redirect: String?
)

data class WCPermissions(
    val blockchain: BlockchainPermission?,
    val jsonRpc: JsonRpcPermission?,
    val wallet: WalletPermission?
)

data class BlockchainPermission(
    val chains: List<String>
)

data class JsonRpcPermission(
    val methods: List<String>
)

data class WalletPermission(
    val permissions: List<String>
)
```

### Connection Request
```kotlin
data class WCConnectionRequest(
    val proposalId: String,
    val proposer: dAppMetadata,
    val permissions: WCPermissions,
    val relayProtocol: String,
    val relayData: String?
)
```

---

## API Endpoints

### Session Management
```
POST /sapi/v1/walletconnect/session
Body: {
    "topic": "...",
    "peerId": "...",
    "accounts": ["0x..."],
    "chains": ["eth", "bnb"]
}
Response: Session object

DELETE /sapi/v1/walletconnect/session/{topic}
Response: Success

GET /sapi/v1/walletconnect/sessions
Parameters: { "address": "0x..." }
Response: Array of active sessions
```

### dApp Registry (Optional)
```
GET /sapi/v1/walletconnect/dapps
Response: List of popular dApps with WC URIs

GET /sapi/v1/walletconnect/dapp/{id}
Response: dApp metadata and connection info
```

---

## WebSocket Communication

### Bridge Server
- Primary: `wss://bridge.walletconnect.org`
- Backup: `wss://wc.bridge.walletconnect.org`

### Message Types
```json
{
    "topic": "string",
    "type": 1 | 2 | 3 | 4,
    "payload": "string",
    "silent": boolean
}

type: 
1 = PubSub (broadcast)
2 = Whisper (peer-to-peer)
3 = Bridge
4 = Signal
```

---

## Screen Variants

### Variant 1: Scanner (Default)
- Camera viewfinder active
- QR detection enabled
- Manual entry button visible

### Variant 2: Manual Entry
- Text input field
- Paste button
- Connect button

### Variant 3: Connection Request
- dApp info card
- Permission checkboxes
- Approve/Reject buttons

### Variant 4: Connected (Session List)
- List of active dApps
- Each with quick actions
- Empty state if none

### Variant 5: dApp Details
- Full dApp info
- Permission toggles
- Disconnect option

### Variant 6: No Camera Permission
- "Camera access required" message
- Settings button to enable
- Manual entry fallback

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 home
- [10-Web3-Wallet-Discover-DApps](10-web3-wallet-discover-dapps.md) - Discover DApps
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### QR Scanning
- Use CameraX or ZXing library
- Auto-focus and flash control
- Handle camera permissions
- Vibrate on successful scan

### WebSocket
- Maintain persistent connection
- Handle reconnection
- Message queue during offline
- Ping/pong for keep-alive

### Security
- Verify dApp URLs
- Show clear permission requests
- Confirm sensitive operations
- Session expiration handling

### Error Handling
- Invalid QR code
- Connection timeout
- dApp rejected
- Network errors

### Performance
- Efficient camera handling
- Session list pagination
- Image caching for dApp icons

### State Management
- ViewModel for session state
- Flow for real-time updates
- Persistence for sessions

---

_Last Updated: 2026-03-12_
