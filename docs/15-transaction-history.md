# Binance Transaction History Documentation

The transaction history is split into two primary views based on the active interface: **Centralized Exchange (CeFi)** and **Web3 Wallet (DeFi)**.

---

## 1. Exchange Transaction History (CeFi)

### Core Transaction Types

| Tab          | Item Type          | Description                                         |
| ------------ | ------------------ | --------------------------------------------------- |
| **All**      | `HISTORY_ALL`      | Unified view of all centralized activity            |
| **Deposit**  | `HISTORY_DEPOSIT`  | Incoming crypto from external or internal addresses |
| **Withdraw** | `HISTORY_WITHDRAW` | Outgoing crypto to external or internal addresses   |
| **Trade**    | `HISTORY_TRADE`    | Spot, Margin, and Futures trading executions        |
| **Transfer** | `HISTORY_TRANSFER` | Movement between Spot, Margin, and Futures wallets  |

### UI Elements (Exchange)

- **Status Badges:** Completed (Green), Pending (Yellow), Cancelled (Gray).
- **Icons:** Coin-specific logos or action-specific glyphs.

---

## 2. Web3 Wallet Activity (DeFi)

The Web3 Wallet tracks on-chain activity across multiple blockchains (Ethereum, BSC, Solana, etc.).

### Web3 Transaction Categories

| Category                 | UI Element    | Details Shown                                                 |
| ------------------------ | ------------- | ------------------------------------------------------------- |
| **Send / Receive**       | Arrow icons   | Asset name, Quantity, Destination/Source address              |
| **Contract Interaction** | Code icon     | Protocol name (e.g., Uniswap, PancakeSwap), Function executed |
| **Token Approval**       | Shield icon   | Spending limit granted to a protocol                          |
| **Swap (DeFi)**          | Circle arrows | Input/Output tokens, Dex used, Slippage                       |

### On-Chain Status Indicators

- **Success:** Transaction confirmed on-chain.
- **Fail:** Transaction reverted (Gas spent, but action failed).
- **Processing:** Broadcasted to the mempool, waiting for block confirmation.

---

## Transaction Types

### 1. Deposits

**Description**: Incoming cryptocurrency transfers

**UI Components**:
| Component | Value/Style |
|-----------|-------------|
| Icon | Down arrow (green) |
| Title | "Deposit - {COIN}" |
| Amount | Green text, "+{amount} {COIN}" |
| Status | Status badge |
| From Address | Truncated address |
| Timestamp | Date and time |

**List Item Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  🟢 Deposit - BTC                              Completed │
│  +0.05000000 BTC                                        │
│  From: 0x1234567890abcdef...                            │
│  Network: BSC (BEP20)                                   │
│  Feb 24, 2024, 14:32                        TXID: 0x... │
└─────────────────────────────────────────────────────────┘
```

**Detail View Data**:
| Field | Description |
|-------|-------------|
| Amount | Deposited amount |
| Coin | Cryptocurrency |
| From Address | Sender address |
| Network | Blockchain network |
| TXID | Transaction hash |
| Confirmations | Block confirmations |
| Time | Timestamp |
| Status | Current status |

### 2. Withdrawals

**Description**: Outgoing cryptocurrency transfers

**UI Components**:
| Component | Value/Style |
|-----------|-------------|
| Icon | Up arrow (red) |
| Title | "Withdraw - {COIN}" |
| Amount | Red text, "-{amount} {COIN}" |
| Status | Status badge |
| To Address | Truncated address |
| Timestamp | Date and time |

**List Item Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  🔴 Withdraw - ETH                             Pending  │
│  -1.50000000 ETH                                        │
│  To: 0xabcdef1234567890...                              │
│  Network: Ethereum (ERC20)                              │
│  Feb 24, 2024, 10:15                        TXID: 0x... │
└─────────────────────────────────────────────────────────┘
```

**Detail View Data**:
| Field | Description |
|-------|-------------|
| Amount | Withdrawn amount |
| Fee | Network fee |
| Coin | Cryptocurrency |
| To Address | Recipient address |
| Network | Blockchain network |
| TXID | Transaction hash |
| Time | Timestamp |
| Status | Current status |

### 3. Trades (Buy/Sell)

**Description**: Exchange transactions

**UI Components**:
| Component | Value/Style |
|-----------|-------------|
| Icon | Swap arrows (green/red) |
| Title | "Buy {PAIR}" or "Sell {PAIR}" |
| Amount | Green (buy) or Red (sell) |
| Price | Execution price |
| Fee | Trading fee |
| Timestamp | Date and time |

**Buy Trade Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  🟢 Buy - BTC/USDT                             Completed │
│  +0.02000000 BTC                                        │
│  Price: 42,500.00 USDT                                  │
│  Fee: 0.00002 BTC (0.1%)                                │
│  Total: 850.00 USDT                                     │
│  Feb 23, 2024, 09:45                       Order: #...  │
└─────────────────────────────────────────────────────────┘
```

**Sell Trade Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  🔴 Sell - ETH/USDT                            Completed │
│  -0.50000000 ETH                                        │
│  Price: 2,250.00 USDT                                   │
│  Fee: 0.0005 ETH (0.1%)                                 │
│  Total: 1,125.00 USDT                                   │
│  Feb 22, 2024, 16:30                       Order: #...  │
└─────────────────────────────────────────────────────────┘
```

**Detail View Data**:
| Field | Description |
|-------|-------------|
| Pair | Trading pair |
| Side | Buy or Sell |
| Type | Market, Limit, etc. |
| Price | Execution price |
| Amount | Trade amount |
| Total | Total value |
| Fee | Trading fee |
| Order ID | Order reference |
| Time | Timestamp |

### 4. Transfers (Internal)

**Description**: Movement between accounts

**UI Components**:
| Component | Value/Style |
|-----------|-------------|
| Icon | Transfer arrows (yellow) |
| Title | "Transfer - {COIN}" |
| Amount | Yellow text |
| From/To | Account types |
| Timestamp | Date and time |

**Transfer Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  🟡 Transfer - USDT                            Completed │
│  100.00 USDT                                            │
│  From: Spot → To: Funding                               │
│  Feb 21, 2024, 11:20                                    │
└─────────────────────────────────────────────────────────┘
```

**Transfer Types**:
| From | To | Purpose |
|------|-----|---------|
| Spot | Funding | P2P funding |
| Spot | Futures | Futures margin |
| Funding | Spot | Return to trading |
| Futures | Spot | Withdraw margin |

### 5. Swaps

**Description**: Token conversion transactions

**UI Components**:
| Component | Value/Style |
|-----------|-------------|
| Icon | Swap horizontal (blue) |
| Title | "Swap - {FROM} to {TO}" |
| Amount In | Red text, "-{amount}" |
| Amount Out | Green text, "+{amount}" |
| Rate | Exchange rate |
| Timestamp | Date and time |

**Swap Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  🔵 Swap - BTC → ETH                           Completed │
│  -0.01 BTC                                              │
│  +0.185 ETH                                             │
│  Rate: 1 BTC = 18.5 ETH                                 │
│  Fee: 0.0001 BTC                                        │
│  Feb 20, 2024, 08:15                                    │
└─────────────────────────────────────────────────────────┘
```

### 6. Staking Rewards

**Description**: Earnings from staked assets

**UI Components**:
| Component | Value/Style |
|-----------|-------------|
| Icon | Percentage (green) |
| Title | "Staking Reward - {COIN}" |
| Amount | Green text, "+{amount}" |
| Product | Staking product name |
| APY | Annual percentage yield |
| Timestamp | Date and time |

**Staking Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  💰 Staking Reward - ETH                       Completed │
│  +0.00125000 ETH                                        │
│  Product: ETH 2.0 Staking                               │
│  APY: 4.5%                                              │
│  Feb 19, 2024, 00:00                                    │
└─────────────────────────────────────────────────────────┘
```

### 7. Airdrops

**Description**: Free token distributions

**UI Components**:
| Component | Value/Style |
|-----------|-------------|
| Icon | Gift (purple) |
| Title | "Airdrop - {COIN}" |
| Amount | Green text, "+{amount}" |
| Campaign | Airdrop name |
| Timestamp | Date and time |

**Airdrop Layout**:

```
┌─────────────────────────────────────────────────────────┐
│  🎁 Airdrop - BNB                              Completed │
│  +5.00 BNB                                              │
│  Campaign: BNB Holder Airdrop                           │
│  Feb 18, 2024, 12:00                                    │
└─────────────────────────────────────────────────────────┘
```

---

## Transaction Status Indicators

### Status Types

| Status    | Color            | Icon        | Description            |
| --------- | ---------------- | ----------- | ---------------------- |
| Completed | Green `#2EBD85`  | ✓ checkmark | Transaction successful |
| Pending   | Yellow `#F0B90B` | ◐ spinner   | Processing             |
| Failed    | Red `#F6465D`    | ✗ cross     | Transaction failed     |
| Cancelled | Gray `#848E9C`   | ○ circle    | User cancelled         |

### Status Badge Styles

**Completed**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#1A2EBD85" />
    <corners android:radius="4dp" />
</shape>
<!-- Text: #2EBD85 -->
```

**Pending**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#1AF0B90B" />
    <corners android:radius="4dp" />
</shape>
<!-- Text: #F0B90B -->
```

**Failed**:

```xml
<shape android:shape="rectangle">
    <solid android:color="#1AF6465D" />
    <corners android:radius="4dp" />
</shape>
<!-- Text: #F6465D -->
```

### Status Transitions

```
┌──────────┐     ┌───────────┐     ┌───────────┐
│ Pending  │ ──► │ Processing│ ──► │ Completed │
└──────────┘     └───────────┘     └───────────┘
     │
     │              ┌───────────┐
     └─────────────►│  Failed   │
                    └───────────┘
```

---

## Transaction Detail View

### Screen Layout

```
┌─────────────────────────────────────────────────────────┐
│  ← Transaction Details                                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │              🟢 Deposit                          │   │
│  │           +0.05 BTC                              │   │
│  │           Completed                              │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  Details                                         │   │
│  │  ─────────────────────────────────────────────  │   │
│  │  Coin              Bitcoin (BTC)                │   │
│  │  Amount            0.05000000 BTC               │   │
│  │  From Address      0x1234567890abcdef...        │   │
│  │  Network           BSC (BEP20)                  │   │
│  │  TXID              0xabcdef123456...            │   │
│  │  Confirmations     12/12                        │   │
│  │  Time              Feb 24, 2024, 14:32:45       │   │
│  │  Status            ✓ Completed                  │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │  [View on Explorer]           [Share]           │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Detail Fields by Type

#### Deposit Details

| Field         | Format                 |
| ------------- | ---------------------- |
| Coin          | Name (Symbol)          |
| Amount        | Full decimal           |
| From Address  | Full address with copy |
| Network       | Network name           |
| TXID          | Full hash with copy    |
| Confirmations | Current/Required       |
| Time          | Full timestamp         |
| Status        | Status with icon       |

#### Withdrawal Details

| Field      | Format                 |
| ---------- | ---------------------- |
| Coin       | Name (Symbol)          |
| Amount     | Full decimal           |
| Fee        | Fee amount             |
| To Address | Full address with copy |
| Network    | Network name           |
| TXID       | Full hash with copy    |
| Time       | Full timestamp         |
| Status     | Status with icon       |

#### Trade Details

| Field    | Format          |
| -------- | --------------- |
| Pair     | BASE/QUOTE      |
| Side     | Buy/Sell        |
| Type     | Market/Limit    |
| Price    | Execution price |
| Amount   | Trade amount    |
| Total    | Total value     |
| Fee      | Fee amount      |
| Order ID | Order reference |
| Time     | Full timestamp  |

---

## Filter Options

### Filter Bottom Sheet

```
┌─────────────────────────────────────────────────────────┐
│  ─────                                                  │
│  Filter Transactions                                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  Transaction Type                                      │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [✓] All    [ ] Deposit   [ ] Withdraw          │   │
│  │ [ ] Trade  [ ] Transfer  [ ] Swap              │   │
│  │ [ ] Staking [ ] Airdrop                        │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Status                                                │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [✓] All    [ ] Completed   [ ] Pending         │   │
│  │ [ ] Failed  [ ] Cancelled                       │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Date Range                                            │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [✓] All Time                                    │   │
│  │ [ ] Today                                       │   │
│  │ [ ] Last 7 Days                                 │   │
│  │ [ ] Last 30 Days                                │   │
│  │ [ ] Custom Range                                │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  Coin                                                  │
│  ┌─────────────────────────────────────────────────┐   │
│  │ [Search coins...]                               │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │         [Reset]           [Apply]               │   │
│  └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Filter Options

| Filter     | Options                                                         |
| ---------- | --------------------------------------------------------------- |
| Type       | All, Deposit, Withdraw, Trade, Transfer, Swap, Staking, Airdrop |
| Status     | All, Completed, Pending, Failed, Cancelled                      |
| Date Range | All Time, Today, 7 Days, 30 Days, Custom                        |
| Coin       | Searchable list of all coins                                    |

---

## Mock Data Structure

### Transaction Data Model

```kotlin
data class Transaction(
    val id: String,
    val type: TransactionType,
    val status: TransactionStatus,
    val coin: String,
    val coinName: String,
    val amount: BigDecimal,
    val fee: BigDecimal?,
    val timestamp: Long,
    val txId: String?,
    val address: String?,
    val network: String?,
    val fromAccount: String?,
    val toAccount: String?,
    val price: BigDecimal?,
    val pair: String?,
    val side: TradeSide?,
    val orderId: String?,
    val confirmations: Int?,
    val requiredConfirmations: Int?
)

enum class TransactionType {
    DEPOSIT, WITHDRAW, TRADE, TRANSFER, SWAP, STAKING, AIRDROP
}

enum class TransactionStatus {
    PENDING, PROCESSING, COMPLETED, FAILED, CANCELLED
}

enum class TradeSide {
    BUY, SELL
}
```

### Sample Mock Data

```kotlin
val mockTransactions = listOf(
    Transaction(
        id = "tx_001",
        type = TransactionType.DEPOSIT,
        status = TransactionStatus.COMPLETED,
        coin = "BTC",
        coinName = "Bitcoin",
        amount = BigDecimal("0.05"),
        fee = null,
        timestamp = 1708787525000, // Feb 24, 2024, 14:32
        txId = "0x1234567890abcdef1234567890abcdef",
        address = "0x1234567890abcdef1234567890abcdef",
        network = "BSC (BEP20)",
        confirmations = 12,
        requiredConfirmations = 12
    ),
    Transaction(
        id = "tx_002",
        type = TransactionType.WITHDRAW,
        status = TransactionStatus.PENDING,
        coin = "ETH",
        coinName = "Ethereum",
        amount = BigDecimal("1.5"),
        fee = BigDecimal("0.005"),
        timestamp = 1708772100000, // Feb 24, 2024, 10:15
        txId = null,
        address = "0xabcdef1234567890abcdef1234567890",
        network = "Ethereum (ERC20)",
        confirmations = 0,
        requiredConfirmations = 12
    ),
    Transaction(
        id = "tx_003",
        type = TransactionType.TRADE,
        status = TransactionStatus.COMPLETED,
        coin = "BTC",
        coinName = "Bitcoin",
        amount = BigDecimal("0.02"),
        fee = BigDecimal("0.00002"),
        timestamp = 1708688700000, // Feb 23, 2024, 09:45
        txId = null,
        address = null,
        network = null,
        price = BigDecimal("42500.00"),
        pair = "BTC/USDT",
        side = TradeSide.BUY,
        orderId = "ord_12345"
    ),
    Transaction(
        id = "tx_004",
        type = TransactionType.TRANSFER,
        status = TransactionStatus.COMPLETED,
        coin = "USDT",
        coinName = "Tether USD",
        amount = BigDecimal("100.00"),
        fee = BigDecimal("0"),
        timestamp = 1708513200000, // Feb 21, 2024, 11:20
        txId = null,
        address = null,
        network = null,
        fromAccount = "Spot",
        toAccount = "Funding"
    ),
    Transaction(
        id = "tx_005",
        type = TransactionType.SWAP,
        status = TransactionStatus.COMPLETED,
        coin = "BTC",
        coinName = "Bitcoin",
        amount = BigDecimal("0.01"),
        fee = BigDecimal("0.0001"),
        timestamp = 1708425000000, // Feb 20, 2024, 08:15
        txId = null,
        address = null,
        network = null,
        price = BigDecimal("18.5"), // Rate
        pair = "BTC/ETH",
        side = null,
        orderId = null
    ),
    Transaction(
        id = "tx_006",
        type = TransactionType.STAKING,
        status = TransactionStatus.COMPLETED,
        coin = "ETH",
        coinName = "Ethereum",
        amount = BigDecimal("0.00125"),
        fee = null,
        timestamp = 1708339200000, // Feb 19, 2024, 00:00
        txId = null,
        address = null,
        network = null
    ),
    Transaction(
        id = "tx_007",
        type = TransactionType.AIRDROP,
        status = TransactionStatus.COMPLETED,
        coin = "BNB",
        coinName = "BNB",
        amount = BigDecimal("5.00"),
        fee = null,
        timestamp = 1708252800000, // Feb 18, 2024, 12:00
        txId = null,
        address = null,
        network = null
    )
)
```

---

## Pagination & Loading

### Pagination

| Parameter    | Value               |
| ------------ | ------------------- |
| Page Size    | 20 transactions     |
| Load More    | On scroll to bottom |
| Initial Load | 20 items            |
| Max Cached   | 100 items           |

### Loading States

| State        | UI                       |
| ------------ | ------------------------ |
| Initial Load | Full screen shimmer      |
| Load More    | Bottom progress bar      |
| Empty        | Empty state illustration |
| Error        | Error message with retry |

---

## Notes

1. Transactions are grouped by date (Today, Yesterday, This Week, etc.)
2. Real-time updates via WebSocket for pending transactions
3. Pull-to-refresh updates the list
4. Search filters by coin symbol, TXID, or address
5. Transaction details can be shared or opened in block explorer
6. Status updates automatically for pending transactions
7. All amounts show full precision in detail view
8. List view shows truncated values for readability
