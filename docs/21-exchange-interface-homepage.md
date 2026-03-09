# 23-exchange-interface-homepage.md: Binance Exchange Interface Specification

## Overview

This document provides a 1:1 technical and visual specification of the Binance **Exchange Home Page** (Pro Mode). It is based on an exhaustive audit of 9 high-fidelity interface captures, ensuring absolute accuracy in UI elements, interaction patterns, and data states.

---

## 1. Primary App Header (Global)

**Visual Layout**: `[Profile] | [Exchange | Wallet] | [Help] [Pay] [Scan] [Notifications]`

### UI Components

- **User Avatar (Sidebar Entry)**: Top-left corner. Circular profile image with VIP level indicator overlay (if applicable).
- **Interface Switcher**:
  - **Exchange**: Active state (White text, `#FCD535` yellow underline).
  - **Wallet**: Inactive state (`#848E9C` grey text).
- **Secondary Action Hub**:
  - **Help/CS Icon**: Outline headset icon.
  - **Binance Pay**: QR scanner and payment hub entry.
  - **Notifications**: Bell icon with red circle badge and white text (e.g., "99+").

---

## 2. Dynamic Search & Trending Hub

**Placeholder**: Rotating hot search keywords (e.g., "HOLO hot search").
**Visual Style**:

- **Background**: `#2B3139` (Darker than main background).
- **Corner Radius**: 100px (Pill shape).
- **Left Icon**: Yellow/Orange Flame icon indicating "Hot Search" status.
- **Right Icon**: Magnifying glass search trigger.

---

## 3. Portfolio Summary Widget

**Layout**: Primary balance + PNL performance + Immediate CTA.

### Details

- **Balance Display**: "Est. Total Value" in INR.
  - **Privacy Mode**: Eye-slash icon toggles balance to `****`.
- **Today's PNL**:
  - **Structure**: `+₹4,231.12 (+4.12%)`
  - **Color Coding**: Positive (Green: `#2EBD85`), Negative (Red: `#F6465D`).
- **Activity CTA**: Large, high-contrast yellow button **"Add Funds"** with black text (`#181A20`).

---

## 4. Interaction & Service Hub

### Promotional Carousel

- **Indicator**: Dot pagination at the absolute bottom-center of the banner.
- **Auto-scroll**: Standard 3-5 second interval.

### Market Overview Grid (3-Column)

- **Cards**: BNB, BTC, ETH/SOL overview.
- **Content**:
  - Coin Symbol (Grey).
  - Price in INR (White, Bold).
  - 24h Change % (Pill background).
  - **Mini Sparkline**: Synchronized with the 24h trend color.

### Quick Service Entry (Cards)

- **P2P Orders**: "Buy/Sell Crypto with INR" - includes "Find Offer" quick-link.
- **Send Cash**: "Send Crypto and Receive Fiat" - includes dynamic reference rate (e.g., `Ref.Rate ₹101.16 USDT/INR`).

---

## 5. Discover Feed (The 8-Tab Documentation)

The main content area is divided into 8 distinct tabs with unique UI logic.

### 1. Discover Tab (Default)

- **Post Structure**:
  - Header: Creator name (e.g., "Crypto Eagles") + Follower count ("119.2K Followers").
  - Content: Rich text with hyperlinks, bolded tickers (e.g., **#BTC**), and image attachments.
  - Footer: Interaction bar (Like, Comment, Forward).

### 2. Following Tab

- **Empty State**: Recommended account list if no followed creators.
- **Content**: Aggregated feed of followed influencers and Binance official updates.

### 3. Campaign Tab

- **Featured**: "CreatorPad" leaderboard.
- **Metrics**: "Rank", "Creator", "Points/Scores".
- **Action**: High-contrast "JOIN" buttons for active marketing events.

### 4. Announcements Tab

- **Categories**: `New Listing`, `Latest Binance News`, `Latest Activities`.
- **Item Specs**:
  - Title: Bold white text.
  - **Detailed Timestamp**: Precise `YYYY-MM-DD HH:MM:SS` format (e.g., "2026-03-09 03:49:12").
- **Visual**: Vertical list with subtle dividers.

### 5. Live Tab

- **Card UI**: Video thumbnail with semi-transparent overlay.
- **Status Badge**: Red box in top-left with "||| LIVE" text.
- **Metrics**: Viewer count badge (e.g., "3,672 Viewers") in bottom-left.
- **Overlay**: Real-time community comments panning from bottom to top.

### 6. News Tab

- **Layout**: Chronological timeline connector.
- **Vertical Line**: A thin grey line connecting the source icons of news items.
- **Interaction Block**:
  - Comment Icon (0)
  - Retweet Icon (0)
  - Like Icon (3)
  - Share Icon (0)
- **Source**: Specific media outlet logo (e.g., Cointelegraph, Binance News).

### 7. Academy Tab

- **Category Grid**:
  - `Blockchain` | `NFT` | `DeFi` | `Security` | `Trading`
- **Icon Style**: Custom illustrative icons for each topic.
- **Article Preview**: Large card with title, read time (e.g., "5 min read"), and difficulty level (e.g., "Beginner").

### 8. Hot Tab (Social Trends)

- **Trending Topics**: Hashtag-based list.
  - Example: `#AltcoinSeasonTalk` with "19.4K Discussing" metric.
- **Sentiment Polls**:
  - Question: "How do you feel about BTC today?"
  - Interaction: Large red **Bearish** and green **Bullish** buttons.
  - Social Proof: "6,125 Joined" metadata.
- **Rapid Risers**: Mini-list of top 3 searched tokens with high-velocity price action.

---

## 6. Global Navigation (Bottom Bar)

- **Tabs**: Home, Markets, Trade, Futures, Wallet.
- **Active State**: Yellow icon with black label.
- **Contextual FAB**: Persistent yellow "+" button (`#FCD535`) floating over the list content for quick posting or trading.
