# 18-Web3-Wallet-NFT-Assets

## Overview

This document provides detailed specifications for the NFT Assets screen within the Web3 Wallet section. This screen displays the user's NFT collections, provides a grid gallery view of NFTs, allows viewing NFT details, transferring NFTs, and loading IPFS metadata.

---

## Page Route

```
/web3/assets/nfts
```

**Deep Link Pattern:**
- `binance://web3/nfts`
- `binance://web3/nft/{contractAddress}/{tokenId}`
- `app.binance.com/web3/assets/nfts`

---

## Workflow Context

```
Web3 Assets → NFTs Tab
                    ↓
     ┌──────────────┼──────────────┐
     ↓              ↓              ↓
Collection View  NFT Grid      NFT Detail
     ↓              ↓              ↓
  Filter/       Tap NFT        Transfer NFT
  Sort                            ↓
                                   Send to Address
```

**User Flow:**
1. User navigates to Assets from Web3 tab
2. Selects NFTs tab
3. Views NFT collections or grid view
4. Taps NFT → navigates to NFT Detail
5. Can transfer NFT to another address
6. Can view IPFS metadata

---

## Screen Container Architecture

### Parent Container: NFTAssetsActivity
- **Package:** `com.mpc.wallet.nft`
- **Layout:** `activity_nft_assets.xml`
- **View ID:** `2131625700`

### Screen Variants:
| Variant | Purpose |
|---------|---------|
| Collection View | Browse by collection |
| Grid View | All NFTs in grid |
| Detail View | Single NFT details |
| Transfer Flow | Send NFT to address |

---

## Tabs and Subviews

### Top Navigation Bar
- **Back Button** (left)
- **Title** (center) - "NFTs"
- **Search** (right) - Search NFTs
- **Filter** (right) - Filter by chain/collection

### Main Content Sections

```
┌─────────────────────────────────────────┐
│ Collection Tabs                          │
│ [All] [Collections ▼] [Chain ▼]        │
├─────────────────────────────────────────┤
│ Display Options                         │
│ Grid: [2] [3] [4]  [List]              │
├─────────────────────────────────────────┤
│ NFT Grid (RecyclerView)                 │
│  - NFT Image                           │
│  - Collection Name                     │
│  - NFT Name                            │
│  - Price (if listed)                   │
└─────────────────────────────────────────┘
```

---

## Widget Regions

### 1. Collection Filter Tabs

**Layout Reference:** `layout_nft_filter_tabs.xml`

**Components:**
- All Tab
  - View ID: `2131625701` (tab_all)
  - Text: "All"
  - Shows all NFTs
  
- Collections Tab
  - View ID: `2131625702` (tab_collections)
  - Text: "Collections"
  - Groups NFTs by collection
  
- Chain Tab
  - View ID: `2131625703` (tab_chain)
  - Text: "Chain"
  - Filters by blockchain

### 2. Display Options Bar

**Layout Reference:** `layout_nft_display_options.xml`

**Components:**
- Grid Size Selector
  - View ID: `2131625704` (grid_size_selector)
  - Options: 2 columns, 3 columns, 4 columns
  - Toggle buttons or segmented control
  
- View Toggle
  - View ID: `2131625705` (view_toggle)
  - Grid icon / List icon
  - Toggle between grid and list view

### 3. NFT Grid

**Layout Reference:** `layout_nft_grid.xml`

**Components:**
- NFT Grid RecyclerView
  - View ID: `2131625706` (nft_grid_recycler)
  - Layout: GridLayoutManager
  - Default: 3 columns
  
**NFT Item (item_nft_grid.xml):**
```
CardView (8dp corner radius)
├─ NFT Image
│   └─ ImageView: 2131625707
│       Aspect ratio: 1:1
│       Scale: CenterCrop
│       Corner radius: 8dp
├─ Info Overlay (bottom)
│   ├─ Collection Name
│   │   └─ TextView: 2131625708
│   │       Font: Regular, 10sp
│   │       Color: Gray
│   ├─ NFT Name
│   │   └─ TextView: 2131625709
│   │       Font: Medium, 12sp
│   │       Max lines: 1, ellipsize: end
│   └─ Price (if listed)
│       └─ TextView: 2131625710
│           Font: Bold, 11sp
│           Format: "1.5 ETH"
└─ Badge (top-right corner)
    └─ TextView: 2131625711
        ├─ "New"
        └─ "Listed"
```

### 4. Collection View (Alternative)

**Layout Reference:** `layout_nft_collections.xml`

**Components:**
- Collection Card
  - View ID: `2131625712` (collection_card)
  - Horizontal card layout
  
**Collection Item (item_nft_collection.xml):**
```
CardView (12dp corner)
├─ Collection Banner
│   └─ ImageView: 2131625713
├─ Collection Info
│   ├─ Collection Icon
│   │   └─ ImageView: 2131625714
│   │       Size: 40x40dp, circle
│   ├─ Collection Name
│   │   └─ TextView: 2131625715
│   │       Font: Bold, 14sp
│   ├─ Floor Price
│   │   └─ TextView: 2131625716
│   │       Format: "Floor: 0.5 ETH"
│   └─ Items Count
│       └─ TextView: 2131625717
│           Format: "42 NFTs"
└─ Chevron (right)
    └─ ImageView: 2131625718
```

### 5. NFT Detail View

**Layout Reference:** `activity_nft_detail.xml`

**Components:**
- Full Size Image
  - View ID: `2131625719` (nft_image_full)
  - Tap: Zoom/expand
  - Pinch: Zoom in/out
  - Double-tap: Toggle zoom
  
- NFT Name
  - View ID: `2131625720` (nft_name)
  - Font: Bold, 20sp
  
- Collection Name
  - View ID: `2131625721` (collection_name)
  - Font: Regular, 14sp
  - Tap: Navigate to collection
  
- Description
  - View ID: `2131625722` (nft_description)
  - Font: Regular, 14sp
  - Expandable/collapsible
  
- Attributes/Traits
  - View ID: `2131625723` (attributes_grid)
  - Layout: GridLayoutManager
  - Shows trait type and value
  
**Trait Item (item_nft_trait.xml):**
```
CardView (4dp corner)
├─ Trait Type
│   └─ TextView: 2131625724
│       Font: Regular, 10sp, Gray
│       Format: "Background"
├─ Trait Value
│   └─ TextView: 2131625725
│       Font: Medium, 12sp
│       Format: "Blue"
└─ Rarity (optional)
    └─ TextView: 2131625726
        Format: "15% have this"
```

- Owner Information
  - View ID: `2131625727` (owner_info)
  - Shows current owner address
  - Tap: View in explorer
  
- Price History (if listed)
  - View ID: `2131625728` (price_history)
  - Chart of listing/sale prices
  
- Action Buttons
  - View ID: `2131625729` (action_buttons)
  - Transfer button
  - Sell/List button (if owner)
  - Buy button (if listed)

### 6. Transfer NFT Flow

**Layout Reference:** `layout_nft_transfer.xml`

**Components:**
- Recipient Address Input
  - View ID: `2131625730` (recipient_address_input)
  - Hint: "Enter recipient address"
  - Paste button
  - QR scan button
  
- Address Validation
  - View ID: `2131625731` (address_validation)
  - Shows checkmark for valid address
  - Shows error for invalid address
  
- NFT Preview
  - View ID: `2131625732` (nft_preview)
  - Small thumbnail of NFT being transferred
  
- Gas Estimate
  - View ID: `2131625733` (gas_estimate)
  - Format: "Network fee: 0.005 ETH"
  
- Transfer Button
  - View ID: `2131625734` (transfer_button)
  - Text: "Transfer"
  - Requires wallet signature

---

## IPFS Metadata

### Metadata Structure
```kotlin
data class NFTMetadata(
    val name: String,
    val description: String?,
    val image: String,              // IPFS or HTTP URL
    val animationUrl: String?,      // For animated NFTs (IPFS/HTTP)
    val externalUrl: String?,
    val attributes: List<NFTAttribute>,
    val properties: Map<String, Any>?
)

data class NFTAttribute(
    val traitType: String,
    val value: String,
    val displayType: String?,       // "number", "date", "boost_number", etc.
    val maxValue: Int?,             // For numeric traits
    val rarity: Double?             // Calculated rarity percentage
)
```

### IPFS Loading
- Primary Gateway: `https://ipfs.io/ipfs/{CID}`
- Fallback: `https://cloudflare-ipfs.com/ipfs/{CID}`
- Cache in local storage
- Progressive loading with placeholder

---

## Component Hierarchy

```
NFTAssetsActivity
├─ AppBarLayout
│   └─ Toolbar
│       ├─ ImageButton (back)
│       ├─ TextView (title: "NFTs")
│       ├─ ImageButton (search)
│       └─ ImageButton (filter)
├─ TabLayout (view_tabs)
│   ├─ Tab: All
│   ├─ Tab: Collections
│   └─ Tab: Chain
├─ LinearLayout (display_options)
│   ├─ ToggleGroup (grid_size)
│   └─ ImageButton (view_toggle)
├─ RecyclerView (nft_grid)
│   └─ NFTGridAdapter
│       └─ NFTViewHolder (multiple)
└─ BottomSheet: nft_detail_sheet
    ├─ ImageView (full_image)
    ├─ TextView (name)
    ├─ TextView (collection)
    ├─ TextView (description)
    ├─ RecyclerView (attributes)
    ├─ TextView (owner)
    └─ ButtonBar (actions)

NFTDetailActivity (full screen variant)
├─ AppBarLayout
├─ NestedScrollView
│   ├─ ViewPager2 (image gallery)
│   ├─ TextView (name)
│   ├─ TextView (collection)
│   ├─ TextView (description)
│   ├─ RecyclerView (attributes)
│   ├─ TextView (owner)
│   └─ ButtonBar (transfer/sell)
└─ BottomSheet: transfer_sheet
    ├─ EditText (address)
    ├─ Button (paste)
    ├─ Button (scan)
    └─ Button (transfer)
```

---

## Data Models

### NFT Asset Model
```kotlin
data class NFTAsset(
    val id: String,
    val contractAddress: String,
    val tokenId: String,
    val chainId: String,
    val name: String?,
    val description: String?,
    val imageUrl: String,
    val animationUrl: String?,
    val externalUrl: String?,
    val attributes: List<NFTAttribute>,
    val ownerAddress: String,
    val creatorAddress: String?,
    val isListed: Boolean,
    val listingPrice: Double?,
    val listingCurrency: String?,
    val lastSalePrice: Double?,
    val lastSaleCurrency: String?,
    val mintTransactionHash: String?,
    val metadataUrl: String?,       // IPFS URL
    val metadataLoaded: Boolean,
    val metadata: NFTMetadata?
)
```

### NFT Collection Model
```kotlin
data class NFTCollection(
    val id: String,
    val contractAddress: String,
    val chainId: String,
    val name: String,
    val symbol: String?,
    val description: String?,
    val imageUrl: String,
    val bannerUrl: String?,
    val floorPrice: Double?,
    val floorPriceCurrency: String?,
    val totalSupply: Int,
    val ownerCount: Int,
    val volume24h: Double?,
    val isVerified: Boolean
)
```

---

## API Endpoints

### NFT Assets
```
GET /sapi/v1/nft/assets
Parameters: { 
    "address": "0x...",
    "chain": "eth",
    "collection": "0x...",
    "limit": 50,
    "offset": 0
}
Response: Array of NFTAsset objects
```

### NFT Collections
```
GET /sapi/v1/nft/collections
Parameters: { 
    "address": "0x...",
    "chain": "eth"
}
Response: Array of NFTCollection objects
```

### NFT Detail
```
GET /sapi/v1/nft/detail
Parameters: { 
    "contract": "0x...",
    "tokenId": "1",
    "chain": "eth"
}
Response: NFTAsset with full metadata
```

### NFT Metadata (IPFS)
```
GET /sapi/v1/nft/metadata
Parameters: { 
    "contract": "0x...",
    "tokenId": "1"
}
Response: NFTMetadata (resolves IPFS)
```

### Transfer NFT
```
POST /sapi/v1/nft/transfer
Body: {
    "contract": "0x...",
    "tokenId": "1",
    "from": "0x...",
    "to": "0x...",
    "chain": "eth"
}
Response: Transaction hash
```

### NFT Transactions
```
GET /sapi/v1/nft/transactions
Parameters: { 
    "contract": "0x...",
    "tokenId": "1"
}
Response: Array of NFT transaction history
```

---

## Screen Variants

### Variant 1: Empty State
- "No NFTs found" illustration
- "Start collecting" CTA button
- How to get NFTs information

### Variant 2: Loading State
- Skeleton grid
- Shimmer animation
- Placeholder images

### Variant 3: Collection View
- Horizontal card list
- Shows floor price
- Tap to expand collection

### Variant 4: Grid View
- 2, 3, or 4 column options
- Pull to refresh
- Infinite scroll

### Variant 5: Detail Full Screen
- Full-size image viewer
- All metadata displayed
- Action buttons at bottom

### Variant 6: Transfer Flow
- Address input with validation
- Gas fee estimate
- Confirmation dialog

---

## Filters and Selectors

### Chain Filter
- **Type:** Bottom Sheet
- **Options:** All, Ethereum, BNB Chain, Polygon, Arbitrum, etc.

### Collection Filter
- **Type:** Bottom Sheet with search
- **Options:** All collections user owns

### Sort Options
- **Type:** Dropdown
- **Options:** Recently received, Recently listed, Price low-high, Price high-low, Name A-Z

### Display Density
- **Type:** Toggle buttons
- **Options:** 2 columns, 3 columns, 4 columns

---

## Related Documentation

- [02-Screen-Catalog](02-complete-screen-catalog.md) - Screen hierarchy
- [11-Web3-Wallet-Assets](11-web3-wallet-assets.md) - Assets overview
- [20-Web3-Wallet-Transaction-History](20-web3-wallet-transaction-history.md) - Transaction history
- [32-Colors-Theme](32-colors-theme.md) - Color specifications

---

## Implementation Notes

### Image Loading
- Use Glide or Coil for image loading
- Progressive loading with blur placeholder
- Cache IPFS images locally
- Support animated images (GIF, WebP, video)

### IPFS Handling
- Resolve IPFS CIDs to HTTP gateways
- Multiple fallback gateways
- Cache resolved URLs
- Handle slow/unavailable gateways gracefully

### Grid Performance
- DiffUtil for efficient updates
- Prefetch next page
- Image downsampling for thumbnails
- RecycleBitmaps enabled

### Transfer Flow
- Validate recipient address format
- Check token ownership before transfer
- Estimate gas accurately
- Support contract reverification

### Accessibility
- Content descriptions on images
- Minimum touch targets (48dp)
- Screen reader support for attributes

---

_Last Updated: 2026-03-12_
