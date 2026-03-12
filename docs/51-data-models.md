# UI Data Models

This file maps the internal data structures that drive the complex UI components logic, including states, balances, and real-time prices.
These are derived from `ViewModels`, `DTOs` (Data Transfer Objects), and Graph APIs.

## 1. Market Data Models
- **MarketTicker** (Symbol, LastPrice, PriceChange, 24hVol)

## 2. Order Models
- **LimitOrder**
- **MarketOrder**

## 3. Asset Models
- **WalletBalance** (Total USDT, Staked, Available)
- **Token** (Icon, Name, Network, Contract)
