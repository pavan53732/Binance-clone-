# 29. Web3 Interface: Discover

Web3 Wallet Discover Interface Documentation

## Overview

This document provides comprehensive documentation of the Binance **Web3 Discover Interface**, a centralized hub for decentralized finance (DeFi) earning opportunities, project incubation (Booster), and DApp exploration. It categorizes opportunities by yield potential, community engagement, and utility across multiple blockchain networks. This is the DeFi ecosystem discovery portal.

---

## Component Breakdown

The top navigation splits the ecosystem into four main pillars: **Discover**, **Earn**, **Booster**, and **DApps**. Most tabs share a top search bar ("Search for a token or protocol" or "Search for dApps or enter a URL").

### 1. Discover Tab (Main Ecosystem Hub)

- **Top Banner**: Carousel of high-yield or exclusive events (e.g., "Subscribe USDT to share...") with a gold `Earn` tag.
- **"Earn on Your Tokens" Section**:
  - Horizontal scroll of high-yield opportunity cards (`#2B3139` surface). Features APY in yellow text and a yellow `Bonus` pill.
  - A vertical token list below the cards for other assets.
- **"On-chain Opportunities" Section**:
  - Promotional cards for events like "Monday Trade" featuring a "Binance Wallet Exclusive" yellow tag and top-right green `Ongoing` badge.

### 2. Earn Tab (Yield Dashboard)

- **Portfolio Summary**: "Total Assets" header with a visibility (eye) icon, order history icon, and large fiat value (e.g., `₹0`).
- **Action Grid (Quick Links)**: 5 circular outlined icons: **Tokens**, **Loans** (with a yellow "New" badge), **Protocols**, **Alpha Pools**, **Bonus**.
- **Promotional Banner**: Featured earn program (e.g., "Share 6M SPK reward") with a yellow "Join Now" button.
- **Lists**: Sections for "Earn on Your Holdings" (balance + dynamic APY range) and "Trending Tokens".

### 3. Booster Tab (Airdrop & Task Campaigns)

- **Header Summary**: "My Total Rewards" and "Joined" counters.
- **Active Programs**: Gradient surface cards for ongoing events (e.g., "Sentio XYZ"). Includes sub-data points like reward pool (gift icon) and active countdown timers (clock icon).
- **"Finished" Grid**: A 3-column grid of completed projects.
  - Each `#2B3139` card contains: Project Logo, Name, Participant Count (user icon), and Total Issued Rewards.

### 4. DApps Tab (Web3 Browser)

- **"Common Tools" Section**: Secondary filter row mapping to `Recent`, `Favorites`, `DEX`, `Staking & Restaking` to quickly filter a horizontal grid of DApp icons.
- **Categorized Lists**: Vertical lists for "Trending DApps", "Prediction Market", etc.
  - List items contain Logo, Title, short description string, and supporting network icons.
  - **Loans (New)**: Lending and borrowing protocols.
  - **Protocols**: Direct access to external DeFi providers.
  - **Alpha Pools**: High-risk, high-reward liquidity pools.
  - **Bonus**: Aggregation of active incentive programs.
- **Holdings/Trending List**: List view of assets with dynamic APY ranges (e.g., "0.23% ~ 7.06% APY").

### 4. Booster Program

- **Engagement Stats**: "My Total Rewards" and "Joined" count displays.
- **Active Program**: Featured project card (e.g., Sentio XYZ) with:
  - Gift box icon.
  - Reward pool size (ST tokens).
  - Countdown timer (Days:Hours:Minutes:Seconds).
- **Finished Projects**: Grid of historical projects with participant counts and total distribution amounts.

### 5. DApps Directory

- **Common Tools**: Horizontal category ribbons (Recent, Favorites, DEX, Staking & Restaking).
- **Trending DApps**: List with project name, tagline, and ecosystem logo (e.g., Venus, PancakeSwap).
- **Prediction Market**: Specialized section for betting and forecasting protocols (e.g., PolyMarket).

## Visual Fidelity Details

- **Global Style Tokens**:
  - Background: `#181A20` | Surface Containers: `#2B3139`.
  - Primary Text: `#FFFFFF` | Muted Text: `#848E9C`.
  - Brand Accents/CTA: `#FCD535`.
  - Horizontal Padding: Strict `16dp`.
- **Consistency**: All tabs maintain the dark slate theme with yellow (`#FCD535`) highlight colors for active tabs and bonus pills.
- **Status Indicators**: "Ongoing" (Green `#0ECB81`) and "Finished" (Muted Grey `#848E9C`) status badges on booster cards.
- **Action Elements**: High sensitivity on row clicks, consistent chevron icons for deep links.
- **Promotional Effects**: Sparkle icons on AI-driven or exclusive "Star" programs.

---

## Notes

1. The Web3 Discover interface serves as the main hub for DeFi earning opportunities.
2. Earn dashboard provides access to staking, lending, and liquidity provision.
3. Booster programs offer early access to new projects with reward incentives.
4. DApps directory provides categorized access to decentralized applications.
5. APY displays show potential returns for various DeFi activities.
6. Prediction markets allow users to bet on event outcomes.
7. The interface aggregates opportunities from multiple DeFi protocols.
