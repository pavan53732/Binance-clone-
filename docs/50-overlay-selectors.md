# Overlay Selectors

## Overview

Overlay selectors are specialized UI components for selecting networks, tokens, chains, and applying filters. They typically appear as bottom sheets for efficient mobile interaction.

## Selector Types

### 1. Network Selector

**Usage:** Selecting blockchain network for deposits/withdrawals.

**Visual Specifications:**
- Bottom sheet format
- Search bar at top
- List of networks with icons
- Native token indicated
- Testnet indicator (if applicable)

**Network Options:**
| Network | Icon | Native Token | Status |
|---------|------|--------------|--------|
| BNB Chain | BNB logo | BNB | Active |
| Ethereum | ETH logo | ETH | Active |
| Polygon | MATIC logo | MATIC | Active |
| Arbitrum | ARB logo | ETH | Active |
| Optimism | OP logo | ETH | Active |
| Avalanche | AVAX logo | AVAX | Active |
| zkSync Era | zk logo | ETH | Active |
| Base | BASE logo | ETH | Active |

**Layout:**
```
┌─────────────────────────────────────────┐
│           ───────                      │
│                                         │
│  Select Network                         │
│  [🔍 Search networks...]               │
│                                         │
│  BNB Chain              ✓              │
│  BNB                    Network icon    │
│ ─────────────────────────────────────── │
│  Ethereum              [Badge]          │
│  ETH                   Network icon    │
│ ─────────────────────────────────────── │
│  Polygon                               │
│  MATIC                  Network icon   │
│ ─────────────────────────────────────── │
│  [View All Networks]                    │
└─────────────────────────────────────────┘
```

**Features:**
- Search/filter
- Recently used section
- Network status indicators
- Gas fee estimates (optional)

### 2. Token Selector

**Usage:** Selecting cryptocurrency/token for transactions.

**Visual Specifications:**
- Bottom sheet format
- Search + balance display
- Token list with icons and amounts
- Token value in fiat

**Layout:**
```
┌─────────────────────────────────────────┐
│           ───────                      │
│                                         │
│  Select Token              [Close]     │
│  [🔍 Search name or paste address]     │
│                                         │
│  [USDT] Tether                        │
│          Balance: 1,234.56  ≈ $1,234.56│
│ ────────────────────────────────────── │
│  [BTC]  Bitcoin                        │
│          Balance: 0.5        ≈ $25,000 │
│ ────────────────────────────────────── │
│  [ETH]  Ethereum                        │
│          Balance: 5.0        ≈ $10,000  │
│ ────────────────────────────────────── │
│  [Custom Token]                         │
│  [Import Token]                         │
└─────────────────────────────────────────┘
```

**Features:**
- Search by name, symbol, address
- Balance display
- Fiat value conversion
- Favorites section
- Custom token import

### 3. Chain Selector (Web3)

**Usage:** Selecting blockchain network in Web3 wallet.

**Visual Specifications:**
- Bottom sheet format
- Chain icons and names
- Chain ID display
- Connected status indicator

**Layout:**
```
┌─────────────────────────────────────────┐
│           ───────                      │
│                                         │
│  Switch Chain                           │
│                                         │
│  [BNB] BNB Chain           [Connected]  │
│ ─────────────────────────────────────── │
│  [ETH] Ethereum             [Connected]│
│ ─────────────────────────────────────── │
│  [ARB] Arbitrum                       │
│ ─────────────────────────────────────── │
│  [OP]  Optimism                        │
│ ─────────────────────────────────────── │
│  [Add Network]                          │
└─────────────────────────────────────────┘
```

**Features:**
- Connected chains highlighted
- Add custom chain option
- Chain status

### 4. Filter Overlay

**Usage:** Filtering lists and data.

**Visual Specifications:**
- Bottom sheet format
- Filter categories
- Multi-select options
- Date range pickers
- Apply/Reset buttons

**Layout:**
```
┌─────────────────────────────────────────┐
│           ───────                      │
│                                         │
│  Filter                    [Reset] [X] │
│                                         │
│  Status                                 │
│  [✓] All    [ ] Open   [ ] Filled      │
│  [ ] Cancelled [ ] Partial             │
│ ─────────────────────────────────────── │
│  Order Type                             │
│  [✓] Limit  [✓] Market [ ] Stop        │
│ ─────────────────────────────────────── │
│  Date Range                             │
│  [Today] [7 Days] [30 Days] [Custom]   │
│ ─────────────────────────────────────── │
│  [Reset]              [Apply (24)]     │
└─────────────────────────────────────────┘
```

**Features:**
- Filter count badge
- Active filters indicated
- Clear all option
- Save filter presets

### 5. Time Range Selector

**Usage:** Selecting time periods for data display.

**Visual Specifications:**
- Horizontal chip group OR
- Bottom sheet for custom

**Options:**
| Label | Value |
|-------|-------|
| 1H | 1 hour |
| 4H | 4 hours |
| 1D | 1 day |
| 1W | 1 week |
| 1M | 1 month |
| 1Y | 1 year |
| ALL | All time |

### 6. Sort Overlay

**Usage:** Sorting lists and data.

**Visual Specifications:**
- Bottom sheet or action sheet
- Radio button options
- Current sort indicated

**Options:**
```
┌─────────────────────────────────────────┐
│  Sort By                                │
│                                         │
│  ○ Name (A-Z)                           │
│  ● Name (Z-A)                           │
│  ○ Price (High to Low)                  │
│  ○ Price (Low to High)                  │
│  ○ Change (High to Low)                 │
│  ○ Change (Low to High)                 │
│  ○ Volume (High to Low)                 │
└─────────────────────────────────────────┘
```

## Implementation Reference

**Components:**
- Bottom sheet container
- RecyclerView for lists
- SearchView for filtering
- ChipGroup for selections
- Material buttons

**Dimensions:**
- Bottom sheet padding: 16dp
- List item height: 56-72dp
- Icon size: 32-40dp
- Search bar height: 48dp

## Interactive Behaviors

### Selection Flow
1. User taps selector trigger
2. Bottom sheet animates up
3. User searches/browses options
4. User selects option
5. Sheet dismisses
6. Selected value shown in trigger

### Search Behavior
- Real-time filtering
- Debounce: 300ms
- Clear button when active
- Cancel to clear and close

### Multi-Select
- Checkbox selection
- Apply button required
- Selection count badge

## Common Selection Patterns

### Trading Pair Selection
```
┌─────────────────────────────────────────┐
│  Search markets...           [Close]   │
│                                         │
│  [USDT]     All pairs with USDT        │
│  [BTC]      All pairs with BTC          │
│  [ETH]      All pairs with ETH          │
│  [BNB]      All pairs with BNB          │
│ ─────────────────────────────────────── │
│  Favorites                              │
│  BTC/USDT           $50,000   +2.45%   │
│  ETH/USDT           $2,000     +1.2%   │
│ ─────────────────────────────────────── │
│  All Markets                            │
│  BNB/USDT          $300        +0.5%   │
│  SOL/USDT           $100        +3.2%  │
└─────────────────────────────────────────┘
```

### Payment Method Selector
```
┌─────────────────────────────────────────┐
│  Select Payment Method                  │
│                                         │
│  [Bank]  Bank Transfer                  │
│         Instant transfer, no fee        │
│ ─────────────────────────────────────── │
│  [Card] Debit/Credit Card              │
│         Instant, 1.5% fee               │
│ ─────────────────────────────────────── │
│  [Wallet] Binance Balance              │
│         Zero fee                        │
└─────────────────────────────────────────┘
```

## Accessibility

- Search accessible to screen readers
- Selected state announced
- Proper focus management
- Keyboard navigation support

---

**Related Documentation:**
- [docs/49-dialogs-bottom-sheets.md](docs/49-dialogs-bottom-sheets.md) - Dialogs and bottom sheets
- [docs/07-web3-wallet-home.md](docs/07-web3-wallet-home.md) - Web3 chain selector
- [docs/17-web3-wallet-token-details.md](docs/17-web3-wallet-token-details.md) - Token details
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Selector colors
