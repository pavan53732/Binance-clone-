# 21-home-page-complete.md

## Overview

This document provides a highly detailed, centralized specification for the Binance **Exchange Home Page**. It consolidates micro-details identified from visual assets to ensure a 1:1 implementation of the UI/UX.

**Status**: Verified High-Fidelity Specification
**Base UI**: Exchange Pro (CeFi)
**Visual Source Context**: Comprehensive audit of the Binance Exchange Home Page assets.

---

## 1. Top Navigation Bar (Header)

**Layout**:

```text
┌──────────────────────────────────────────────────────────┐
│ [Profile]   [Exchange | Wallet]   [CS] [Pay] [Scan] [Notif] │
└──────────────────────────────────────────────────────────┘
```

- **Status Bar**: Time "03:49", network speed (e.g., "34.0 KB/S"), signal bars (VoLTE, 5G), battery indicator (52%, yellow).
- **Dynamic Island/Notch Area**: "1 device" connected indicator.

### Components

- **Sidebar Switcher**: User profile icon (Left).
- **Interface Toggle**: Central switcher between "Exchange" and "Wallet".
- Active: "Exchange" (Yellow underline / High contrast).
- **Notification Icon**: Red badge with white text "99+".
- **Customer Support**: Headset icon.
- **Binance Pay**: QR scanner and payment logo.

---

## 2. Search Bar Section

**Layout**:

```text
┌─────────────────────────────────────────────────────────┐
│ 🔥 HOLO hot search                                     🔍 │
└─────────────────────────────────────────────────────────┘
```

- **Spec**: Height 44dp, Background `#2B3139`, Corner Radius 22dp.
- **HOLO hot search**: Placeholder text with flame icon (Left) and magnifying glass (Right).

---

## 3. Portfolio Dashboard

- **Main Balance**: "Est. Total Value" in INR (Hidden by default with `****`).
- **Performance**: "Today's PNL" in INR and percentage (Green for positive, Red for negative).
- **Primary CTA**: "Add Funds" button (Yellow background, Black text).

---

## 4. Promotional Banners

- **Carousel**: Multi-slide dynamic banner.
- **Slide Example**: "Win 1 BTC and more" promotional event.
- **Indicator**: Dot pagination at the bottom-center of the banner area.

---

## 5. Market Overview Grid

**Layout**: 3-column grid featuring top trading pairs.

| Asset   | Price (INR) | 24h Change | Sparkline   |
| :------ | :---------- | :--------- | :---------- |
| **BNB** | ₹48,421.49  | +0.47%     | Green Chart |
| **SOL** | ₹12,842.10  | -1.24%     | Red Chart   |

- **Design**: Cards with rounded corners, primary price in large bold text, 24h change pill below the price.

---

## 6. Quick Action Hub

**Featured Cards**:

- **P2P Orders**: Quick entry for Peer-to-Peer trading. Includes "P2P" and "Find Offer" quick links.
- **Send Cash**: Direct fiat settlement entry point. Includes "Send Crypto and Receive Fiat" label and "Ref.Rate ₹101.16 USDT/INR" detail.

---

## 7. Discover Feed (Content Tabs)

**Navigation Tabs**:

1. Discover (Active)
2. Following
3. Campaign
4. Announcements
5. News
6. Academy

- **Floating Action Button (FAB)**:
  - Shape: Circular, Color: Yellow (`#FCD535`), Icon: Black "+".
  - Placement: Bottom right.

---

## 8. Content Tabs Specification

### A. Live

- **Overlay**: "||| LIVE" badge + Viewer count (e.g., "3,672").
- **Interaction**: Floating community comments with user avatars and text.

### B. News

- **Layout**: Vertical timeline with dates ("Mar 9 2026") and timestamps.
- **Metrics**: Comment, Retweet, Like, Share icons with counts.

### C. Academy

- **Categories**: Blockchain, NFT, DeFi, Security, Trading icons.
- **Top Picks**: Card-based articles with thumbnails.

### D. Hot

- **Social**: Trending hashtags like "#AltcoinSeasonTalkTwoYearLow" (19.4K Discussing).
- **Sentiment Poll**: "How do you feel about BTC today?" with "Bearish" (Red) and "Bullish" (Green) buttons + "6,125 Joined" count.
- **Most Searched**: Asset list with "HOLO" (Rapid Riser) and sparkline.

---

## 9. Screen Hierarchy

1. `PRO_HOME_CONTAINER` (CoordinatorLayout)
   - `HEADER_BAR` (AppBarLayout)
   - `SCROLL_CONTENT` (NestedScrollView)
     - `PORTFOLIO_WIDGET`
     - `BANNER_CAROUSEL`
     - `MARKET_GRID`
     - `ACTION_HUB`
     - `DISCOVER_TABS_STICKY`
     - `FEED_LIST` (RecyclerView)

---

## Notes

1. The "Exchange | Wallet" switcher is a critical navigation element.
2. The search bar includes dynamic hot keywords like "HOLO".
3. The Portfolio Dashboard supports privacy masking for balance values.
4. Promotional banners use a dot-pagination indicator.
5. Market overview cards feature real-time sparklines for price action.
6. The Quick Action Hub provides direct entry points for P2P and fiat services.
7. Discover Feed tabs are sticky and scrollable.
8. The floating action button provides contextual quick access.
