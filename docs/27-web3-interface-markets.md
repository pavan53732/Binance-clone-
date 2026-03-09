# Web3 Wallet Markets Interface Documentation

## Screen Overview

The Web3 Markets interface is a sophisticated tracking and discovery hub. Unlike the standard Exchange markets, this view integrates on-chain data, social sentiment, and AI-driven analysis to provide high-fidelity insights into trending tokens and "smart money" movements.

## UI Components

### 1. Primary Navigation Tabs

- **Markets**: Standard view of trending on-chain pairs.
- **Tracker**: Deep dive into specific wallet and signal behaviors.
- **Trenches (New)**: High-speed discovery for meme coins and early-stage projects.
- **Search Icon**: Magnifying glass (Top Right) for token/contract address lookup.

### 2. Tracker Sub-Interface

- **Navigation**: `Leaderboard`, `Monitor`, `Signals`.
- **Signals Feed**:
  - **Sentiment Label**: Pill-shaped badge (e.g., "Neutral" in grey).
  - **Hype Growth**: Percentage with a trend arrow (e.g., "129.15% ↗" in green).
  - **AI Summary**: Concise sentence describing token behavior (e.g., "Frequent Selling Absorbed by Larger Bids").
  - **Trade Button**: Rectangular yellow button.
  - **AI Attribution**: "Token Matching & Content Generation by AI" footer with a robot icon.
- **Smart Money Tracking**:
  - **Purchase History**: "9 Smart Money bought ₹849,853.92 within 11 mins".
  - **Status Bar**: Horizontal progress bar showing "Sold All" (Red) or "Expired" (Grey).

### 3. Trenches Sub-Interface

- **Navigation**: `Meme Rush`, `Meme Rank`, `Topic Rush`.
- **Meme Rush (High Velocity)**:
  - **Filters**: "New", "Finalizing", "Migrated".
  - **X Mode Toggle**: Switch to enable/disable social data integration from X (formerly Twitter).
  - **Token Card Details**:
    - **Age**: e.g., "6s" (seconds since launch).
    - **Stats**: Total holders, warnings (shield icon), and developer/distribution (DS) flags.
    - **Trade**: Yellow button with a lightning bolt icon.
- **Meme Rank (Liquidity/Volume)**:
  - **Metrics**: 24h Volume (B.Vol), 24h Transactions (B.Txn), Liquidity (Liq), and Holders.
  - **AI Analysis**: "What is [Token Name]?" link with a sparkle icon.
- **Topic Rush (Social Trends)**:
  - **Topic Header**: Hashtag (e.g., "# birdclaw") with social platform icon and timestamp.
  - **Social Sentiment Bar**: Gradient bar (Orange to Green) showing community engagement.

## Visual Fidelity Details

- **Indicators**:
  - **Yellow Dot**: "New" badge on the Trenches and Topic Rush tabs.
  - **Status Icons**: Poop emoji for "shitcoin" categorization, robot icon for AI tools.
- **Typography**: Clean sans-serif with emphasized numerical data in yellow/green/red based on type.
- **Interactive Elements**: All list items are clickable for deep-dive charts and on-chain explorer links.
