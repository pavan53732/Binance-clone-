# 02-Complete-Screen-Catalog

## Overview

This document provides a complete catalog of all screens in the Binance application, organized by navigation hierarchy and feature area.

---

## Navigation Hierarchy

### Layer 1 — Application Entry Points

| Route | Activity | Purpose |
|-------|----------|---------|
| `/` | FirstDispatchRouterActivity | Main routing hub - routes to appropriate feature |
| `/home` | MainHomeActivity | Exchange home (default landing) |
| `/web3` | Web3HomeActivity | Web3 wallet home |

### Layer 2 — Feature Module Containers

| Module | Primary Activity | Variants |
|--------|-------------------|----------|
| Markets | MarketsActivity | Spot, Favorites, Futures, ETF |
| Trade | TradeActivity | Spot, Margin, Futures |
| Assets | AssetsActivity | Spot, Margin, Futures, Fiat |
| Web3 Wallet | Web3WalletActivity | Portfolio, Markets, Trade, Discover |
| More | MoreActivity | Profile, Settings, Support |

---

## Bottom Navigation Structure

The application uses a 5-tab bottom navigation bar:

```
┌─────────────────────────────────────────────┐
│                                             │
│              [Content Area]                 │
│                                             │
├─────────────────────────────────────────────┤
│  Markets  │  Trade  │  Assets  │  Web3  │ More │
└─────────────────────────────────────────────┘
```

### Tab Definitions

| Tab | Route | Icon | Purpose |
|-----|-------|------|---------|
| Markets | `/markets` | Chart icon | Browse trading pairs |
| Trade | `/trade` | Exchange icon | Place orders |
| Assets | `/assets` | Wallet icon | Manage holdings |
| Web3 | `/web3` | Hexagon icon | Web3 wallet |
| More | `/more` | Menu icon | Settings, Profile |

---

## Exchange Screens (CeFi)

### Exchange Home

| Screen | Route | Description |
|--------|-------|-------------|
| Home Main | `/home` | Portfolio overview, quick actions, market widget |
| Banner Carousel | `/home/banners` | Promotional content |
| Market Widget | `/home/markets` | Watchlist and trending pairs |

### Markets Screen

| Screen | Route | Variants |
|--------|-------|----------|
| Markets Container | `/markets` | Parent container with tabs |
| Favorites Tab | `/markets/favorites` | User's watched pairs |
| Spot Markets Tab | `/markets/spot` | All spot trading pairs |
| Futures Markets Tab | `/markets/futures` | USDT-M, COIN-M futures |
| ETF Tab | `/markets/etf` | Tokenized stocks |
| Market Search | `/markets/search` | Token pair search |

**Nested Tabs (within Spot Markets)**:
- USDT, BTC, BNB, ETH, FDUSD, etc.

### Trade Screen

| Screen | Route | Variants |
|--------|-------|----------|
| Trade Container | `/trade` | Parent with mode selector |
| Spot Trade | `/trade/spot` | Spot order placement |
| Margin Trade | `/trade/margin` | Cross/Isolated margin |
| Futures Trade | `/trade/futures` | USDT-M, COIN-M |

**Trade Sub-Screens**:
| Screen | Route | Description |
|--------|-------|-------------|
| Chart Fullscreen | `/trade/chart` | Full TradingView chart |
| Indicator Panel | `/trade/indicators` | Technical indicators |
| Order Confirm | `/trade/confirm` | Order confirmation modal |
| Pair Selector | `/trade/pairs` | Trading pair selection |

### Assets Screen

| Screen | Route | Description |
|--------|-------|-------------|
| Assets Container | `/assets` | Parent with account tabs |
| Spot Assets | `/assets/spot` | Spot account balance |
| Margin Assets | `/assets/margin` | Margin account balance |
| Futures Assets | `/assets/futures` | Futures account balance |
| Fiat Assets | `/assets/fiat` | Fiat gateway accounts |

**Asset Sub-Screens**:
| Screen | Route | Description |
|--------|-------|-------------|
| Asset Details | `/asset/:symbol` | Individual token balance |
| Deposit | `/asset/deposit` | Deposit crypto |
| Withdraw | `/asset/withdraw` | Withdraw crypto |
| Transfer | `/asset/transfer` | Internal transfer |
| Network Selector | `/asset/network` | Select blockchain network |

---

## Web3 Screens (DeFi)

### Web3 Home

| Screen | Route | Description |
|--------|-------|-------------|
| Web3 Main | `/web3` | Portfolio overview, total value |
| Web3 Wallet | `/web3/wallet` | Multi-chain wallet view |
| Chain Selector | `/web3/chains` | Switch blockchain network |

### Web3 Markets

| Screen | Route | Description |
|--------|-------|-------------|
| Web3 Markets | `/web3/markets` | Token prices (DeFi prices) |
| Token List | `/web3/tokens` | Token holdings by chain |

### Web3 Trade

| Screen | Route | Description |
|--------|-------|-------------|
| Web3 Swap | `/web3/swap` | DEX token swap |
| Swap Settings | `/web3/swap/settings` | Slippage, deadline |

### Web3 Discover

| Screen | Route | Description |
|--------|-------|-------------|
| Discover Container | `/web3/discover` | Parent with tabs |
| Discover Tab | `/web3/discover/main` | Airdrops, campaigns |
| Earn Tab | `/web3/discover/earn` | DeFi yield opportunities |
| Booster Tab | `/web3/discover/booster` | Limited events |
| DApps Tab | `/web3/discover/dapps` | DApp browser |

### Web3 Assets

| Screen | Route | Description |
|--------|-------|-------------|
| Web3 Assets | `/web3/assets` | Token list view |
| Token Details | `/web3/asset/:address` | Token detail view |
| NFT Assets | `/web3/nfts` | NFT gallery |
| NFT Detail | `/web3/nft/:id` | Single NFT view |
| Transaction History | `/web3/history` | On-chain transactions |

### Web3 Connect

| Screen | Route | Description |
|--------|-------|-------------|
| WalletConnect | `/web3/connect` | Connect to DApps |
| DApp Browser | `/web3/browser` | In-app browser |

---

## Account Screens

### Profile

| Screen | Route | Description |
|--------|-------|-------------|
| Profile Main | `/profile` | User profile overview |
| My Profile | `/profile/edit` | Edit profile info |
| Verification | `/profile/kyc` | KYC status and levels |

### Settings

| Screen | Route | Description |
|--------|-------|-------------|
| Settings Main | `/settings` | All settings |
| Security | `/settings/security` | Security options |
| Preferences | `/settings/preferences` | Language, theme |
| Notifications | `/settings/notifications` | Push settings |
| Payment Methods | `/settings/payment` | Fiat payment options |
| API Management | `/settings/api` | API key management |

### Security

| Screen | Route | Description |
|--------|-------|-------------|
| 2FA | `/security/2fa` | Two-factor authentication |
| Biometrics | `/security/biometric` | Fingerprint/Face ID |
| Anti-Phishing | `/security/anti-phishing` | Phishing code |
| Password | `/security/password` | Change password |
| Withdrawal Whitelist | `/security/whitelist` | Address whitelist |

---

## Other Feature Screens

### C2C Trading

| Screen | Route | Description |
|--------|-------|-------------|
| C2C Home | `/c2c` | P2P marketplace |
| C2C Buy | `/c2c/buy` | Buy crypto from merchants |
| C2C Sell | `/c2c/sell` | Sell crypto to merchants |
| C2C Orders | `/c2c/orders` | Order history |
| C2C Chat | `/c2c/chat` | Merchant communication |

### Earn

| Screen | Route | Description |
|--------|-------|-------------|
| Earn Home | `/earn` | All earn products |
| Staking | `/earn/staking` | BNB Staking |
| Savings | `/earn/savings` | Flexible/Fixed savings |
| DeFi Staking | `/earn/defi` | DeFi yield |
| Pool | `/earn/pool` | Liquidity pools |

### Pay

| Screen | Route | Description |
|--------|-------|-------------|
| Pay Home | `/pay` | Payment features |
| Pay Receive | `/pay/receive` | QR code for receiving |
| Pay Send | `/pay/send` | Send crypto |
| Pay History | `/pay/history` | Transaction history |

### Content

| Screen | Route | Description |
|--------|-------|-------------|
| Announcements | `/announcements` | News and updates |
| Help Center | `/help` | FAQ and support |
| Legal | `/legal` | Terms and policies |

---

## Deep Link Patterns

### URL Scheme: `binance://`

| Pattern | Example | Target |
|---------|---------|--------|
| `binance://home` | - | Exchange Home |
| `binance://markets` | - | Markets Screen |
| `binance://trade?symbol=BTCUSDT` | - | Trade Screen (specific pair) |
| `binance://trade?symbol=BTCUSDT&type=spot` | - | Spot Trade |
| `binance://trade?type=margin` | - | Margin Trade |
| `binance://trade?type=futures` | - | Futures Trade |
| `binance://assets` | - | Assets Screen |
| `binance://web3` | - | Web3 Wallet |
| `binance://more` | - | More/Settings |
| `binance://c2c` | - | C2C Trading |
| `binance://earn` | - | Earn Products |
| `binance://pay` | - | Pay |
| `binance://profile` | - | Profile |
| `binance://settings` | - | Settings |
| `binance://login` | - | Login Screen |

### URL Scheme: `app.binance.com`

| Pattern | Example | Target |
|---------|---------|--------|
| `app.binance.com/en/trade` | - | Web URL routing |
| `app.binance.com/en/markets` | - | Markets |
| `app.binance.com/en/assets` | - | Assets |

### URL Scheme: `wc://`

| Pattern | Example | Target |
|---------|---------|--------|
| `wc:0x...` | WalletConnect URI | WalletConnect session |

---

## Screen Container Summary

| Category | Container Count | Example Containers |
|----------|-----------------|-------------------|
| Exchange Core | 4 | Home, Markets, Trade, Assets |
| Web3 Core | 5 | Wallet, Markets, Trade, Discover, Assets |
| Account | 3 | Profile, Settings, Security |
| Features | 4+ | C2C, Earn, Pay, Content |
| Overlays | 10+ | Network selector, Token selector, Order confirm |

**Total Estimated Screens**: 200+ (including variants and sub-screens)

---

## Related Documentation

- [01-Complete-UI-Specification](01-complete-ui-specification.md) - Application overview
- [03-Exchange-Homepage](03-exchange-homepage.md) - Exchange home details
- [04-Exchange-Markets](04-exchange-markets.md) - Markets screen details
- [05-Exchange-Trade](05-exchange-trade.md) - Trade screen details
- [07-Web3-Wallet-Home](07-web3-wallet-home.md) - Web3 wallet details
- [37-Navigation-System](37-navigation-system.md) - Detailed navigation

---

_Last Updated: 2026-03-12_
