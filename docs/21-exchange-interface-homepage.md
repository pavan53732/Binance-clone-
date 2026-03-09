# 21. Exchange Interface: Home Page

High-fidelity documentation of the Binance Exchange Home Page (Pro Mode), covering all navigational elements, market widgets, portfolio summary, and social feed components.

## Overview

This document provides a 1:1 technical and visual specification of the Binance **Exchange Home Page** (Pro Mode). It is based on an exhaustive audit of 9 high-fidelity interface captures, ensuring absolute accuracy in UI elements, interaction patterns, and data states. This documentation covers the CeFi (Centralized Finance) trading interface, distinct from the Web3 Wallet interface.

---

## 1. Primary App Header (Global)

**Visual Layout**: `[Profile] | [Exchange | Wallet] | [Help] [Pay] [Scan] [Notifications]`

### UI Components

- **User Avatar (Sidebar Entry)**: Top-left corner. Circular profile image with VIP level indicator overlay (if applicable).
- **Interface Switcher**:
  - **Exchange**: Active state (White text, `#FCD535` yellow underline).
  - **Wallet**: Inactive state (`#848E9C` grey text).
- **Secondary Action Hub**:
  - **User Menu**: Left-aligned hamburger/three-line icon for sidebar menu access.
  - **Help/CS Icon**: Headset icon (outline style) - customer support access.
  - **Binance Pay**: QR/Payment icon - payment and scanner hub entry.
  - **Notifications**: Bell icon with red circle badge and white text (e.g., "99+").

### Header Specifications

| Element | Position | Color | Size |
|---------|----------|-------|-------|
| User Menu Icon | Left | White `#FFFFFF` | 24dp |
| Interface Switcher | Center | Active: White, Inactive: `#848E9C` | Tab width ~60dp |
| Help Icon | Right | White `#FFFFFF` | 24dp |
| Pay/QR Icon | Right | White `#FFFFFF` | 24dp |
| Notification Badge | Right of Bell | Red `#F6465D` | 18dp circle |

---

## 2. Dynamic Search & Trending Hub

**Placeholder**: Rotating hot search keywords (e.g., "TRX hot search" as shown in actual UI).

### Visual Style

| Property | Value |
|----------|-------|
| Background | `#2B3139` (Dark Grey) |
| Corner Radius | 100px (Pill shape) |
| Height | 44dp |
| Left Icon | Flame icon (Yellow/Orange) indicating "Hot Search" |
| Right Icon | Magnifying glass (search trigger) |
| Icon Size | 20dp |
| Icon Color | `#848E9C` (Muted) |
| Placeholder Text | "TRX hot search" (rotating) |
| Text Color | `#FFFFFF` |
| Text Size | 14sp |

### Hot Search Features

- **Rotation**: Keywords rotate automatically showing trending tokens
- **Flame Icon**: Yellow/Orange gradient indicating "Hot" status
- **Search Trigger**: Magnifying glass on right side activates search

---

## 3. Portfolio Summary Widget

**Layout**: Primary balance + PNL performance + Immediate CTA.

### Complete Specifications

| Element | Style |
|---------|-------|
| **Balance Label** | "Est. Total Value" - 12sp, `#848E9C` |
| **Balance Amount** | 24sp Bold, `#FFFFFF` |
| **Privacy Toggle** | Eye icon (right of balance) - toggles to `****` |
| **Today's PNL Label** | "Today's PNL" - 12sp, `#848E9C` |
| **PNL Amount** | Format: `+₹124.47 (+0.85%)` |
| **PNL Color Positive** | Green `#2EBD85` |
| **PNL Color Negative** | Red `#F6465D` |

### Add Funds Button Specifications

| Property | Value |
|----------|-------|
| Height | 40dp |
| Width | match_parent (full width - 32dp margin) |
| Background | `#F0B90B` (Binance Yellow) |
| Text | "Add Funds" |
| Text Color | `#181A20` (Black) |
| Text Size | 16sp |
| Font Weight | Medium |
| Corner Radius | 4dp |
| Margin | 16dp horizontal |
| Position | Below PNL, full width |

---

## 4. Interaction & Service Hub

### Promotional Carousel

| Property | Value |
|----------|-------|
| Height | ~160dp |
| Auto-scroll | 3-5 second interval |
| Pagination | Dot indicators at bottom-center |
| Active Dot | White `#FFFFFF` |
| Inactive Dot | Grey `#474D57` |
| Dot Size | 6dp diameter |
| Dot Spacing | 4dp |

### Market Overview Grid (3-Column)

| Property | Value |
|----------|-------|
| Layout | 3-column grid |
| Card Dimensions | 170dp width x 180dp height |
| Card Background | `#1E2329` |
| Card Corner Radius | 12dp |
| Column Gap | 12dp |
| Row Gap | 12dp |
| Horizontal Margin | 16dp |

#### Card Content

| Element | Style |
|---------|-------|
| Coin Symbol | 14sp, `#848E9C` (Grey) |
| Price | 18sp Bold, `#FFFFFF` (White) |
| 24h Change | Pill background, 14sp |
| Change Positive BG | `#0ECB81` (Green) |
| Change Negative BG | `#F6465D` (Red) |
| Change Text | White `#FFFFFF` |
| Sparkline Size | 140dp width x 40dp height |
| Sparkline Color | Green `#0ECB81` (positive) / Red `#F6465D` (negative) |

### Quick Service Cards

#### P2P Orders Card
| Element | Content |
|---------|---------|
| Title | "P2P Orders" |
| Subtitle | "Buy/Sell Crypto with INR" |
| Action | "Find Offer" link |

#### Send Cash Card
| Element | Content |
|---------|---------|
| Title | "Send Cash" |
| Subtitle | "Send Crypto and Receive Fiat" |
| Reference Rate | "Ref.Rate ₹101.16 USDT/INR" |
| Rate Style | Small green sparkline preview |

---

## 5. Discover Feed (8-Tab System)

The main content area is divided into 8 distinct tabs with unique UI logic.

### Tab Bar Specifications

| Property | Value |
|----------|-------|
| Tab Height | 44dp |
| Active Indicator | 2dp yellow underline `#F0B90B` |
| Active Text | 14sp Bold, `#FFFFFF` |
| Inactive Text | 14sp Regular, `#848E9C` |
| Tab Scroll | Horizontal scrollable |

### Tab 1: Discover (Default)

| Element | Specification |
|---------|---------------|
| Post Header | Creator name + Follower count ("119.2K Followers") |
| Content | Rich text with hyperlinks, bolded tickers (#BTC) |
| Footer | Interaction bar (Like, Comment, Forward) |

### Tab 2: Following

| Element | Specification |
|---------|---------------|
| Empty State | "Follow accounts to see their posts" |
| Content | Aggregated feed of followed influencers + Binance official |

### Tab 3: Campaign

| Element | Specification |
|---------|---------------|
| Featured | "CreatorPad" leaderboard |
| Columns | Rank, Creator, Points/Scores |
| Action | High-contrast "JOIN" buttons |
| Button Style | Yellow `#F0B90B`, Black text |

### Tab 4: Announcements

| Element | Specification |
|---------|---------------|
| Categories | New Listing, Latest Binance News, Latest Activities |
| Timestamp Format | `YYYY-MM-DD HH:MM:SS` (e.g., "2026-03-09 03:49:12") |
| Title Style | 16sp Bold, White |
| Layout | Vertical list with dividers |

### Tab 5: Live

| Element | Specification |
|---------|---------------|
| Thumbnail | 16:9 aspect ratio |
| Status Badge | Red box top-left "||| LIVE" |
| Viewer Count | Bottom-left "3,672 Viewers" badge |
| Overlay | Real-time comments panning bottom to top |

### Tab 6: News

| Element | Specification |
|---------|---------------|
| Layout | Timeline with vertical connector line |
| Line Color | Grey `#474D57` |
| Metrics | Comment, Retweet, Like, Share icons with counts |
| Source | Media outlet logo (Cointelegraph, Binance News) |

### Tab 7: Academy

#### Category Grid
| Category | Icon Style |
|----------|-----------|
| Blockchain | Custom illustrative icon |
| NFT | Custom illustrative icon |
| DeFi | Custom illustrative icon |
| Security | Custom illustrative icon |
| Trading | Custom illustrative icon |

#### Article Card
| Element | Specification |
|---------|---------------|
| Card Height | ~180dp |
| Image | 16:9 aspect ratio |
| Title | 16sp Medium, White, 2 lines max |
| Read Time | "5 min read" - 12sp, `#848E9C` |
| Difficulty | "Beginner" badge - pill shape |
| Corner Radius | 12dp |

### Tab 8: Hot (Social Trends)

| Element | Specification |
|---------|---------------|
| Hashtag Format | "#AltcoinSeasonTalk" |
| Discussion Count | "19.4K Discussing" |
| Sentiment Poll | "How do you feel about BTC today?" |
| Poll Buttons | Bearish (Red), Bullish (Green) |
| Participation | "6,125 Joined" |
| Rapid Risers | Top 3 searched tokens with mini-charts |

---

## 6. Global Navigation (Bottom Bar)

### Tab Specifications

| Property | Value |
|----------|-------|
| Height | 56dp |
| Background | `#181A20` |
| Tab Count | 5 (Home, Markets, Trade, Futures, Assets) + More menu |
| Active Icon | `#F0B90B` (Yellow) |
| Active Label | Black `#000000` |
| Inactive Icon | `#848E9C` (Grey) |
| Inactive Label | `#848E9C` (Grey) |
| Icon Size | 24dp |
| Label Size | 10-12sp |

### Navigation Tabs

| Tab | Icon | Active State |
|-----|------|--------------|
| Home | House | Yellow icon, Black label |
| Markets | Chart | Yellow icon, Black label |
| Trade | Swap/Exchange | Yellow icon, Black label |
| Futures | Lightning | Yellow icon, Black label |
| Assets | Wallet | Yellow icon, Black label |

### More Menu

- **Trigger**: Three dots (ellipsis) icon
- **Position**: Last tab position
- **Icon**: 24dp, White
- **Contents**: Additional navigation options

### Floating Action Button (FAB)

| Property | Value |
|----------|-------|
| Size | 56dp x 56dp |
| Background | `#FCD535` (Light Yellow) |
| Icon | Plus "+" |
| Icon Color | `#000000` (Black) |
| Position | Bottom-right, 16dp from edges |
| Elevation | 6dp |
| Corner Radius | 28dp (circular) |

---

## 7. Visual Design System

### Color Palette

| Element | Hex Code | Usage |
|---------|----------|-------|
| Primary Yellow | `#F0B90B` | Active tabs, buttons, accents |
| Primary Yellow Light | `#FCD535` | FAB, highlights |
| Background Dark | `#0B0E11` | Main screen background |
| Surface | `#1E2329` | Cards, components |
| Surface Dark | `#2B3139` | Search bar, inputs |
| Text Primary | `#FFFFFF` | Main text |
| Text Secondary | `#848E9C` | Labels, hints |
| Text Muted | `#707A8A` | Timestamps |
| Success Green | `#0ECB81` | Positive values, profit |
| Error Red | `#F6465D` | Negative values, loss |

### Typography

| Element | Size | Weight | Color |
|---------|------|--------|-------|
| Screen Title | 20sp | Bold | White |
| Section Header | 18sp | Medium | White |
| Card Title | 16sp | Bold | White |
| Body Text | 14sp | Regular | White |
| Label | 12sp | Regular | Grey |
| Caption | 10sp | Regular | Muted |

### Spacing System

| Element | Value |
|---------|-------|
| Screen Margin | 16dp |
| Card Padding | 16dp |
| Card Corner Radius | 12dp |
| Section Gap | 24dp |
| Item Gap | 12dp |
| Icon Size | 24dp |
| Button Height | 40dp |

---

## 8. Interaction Patterns

### Pull-to-Refresh

- Gesture: Pull down on content area
- Animation: Standard Material refresh indicator
- Color: Yellow `#F0B90B`

### Horizontal Scroll

- Carousel: Promotional banners
- Behavior: Auto-scroll 3-5 seconds
- Snap: Center snap

### Bottom Navigation

- Tap: Switch tabs instantly
- Active: Yellow icon + black label
- Preserve scroll position per tab

### FAB Action

- Tap: Opens quick action menu
- Options: New Post, Quick Trade, etc.

---

## 9. Component States

### Buttons

| State | Background | Text Color |
|-------|------------|------------|
| Normal | `#F0B90B` | `#181A20` |
| Pressed | `#D4A10A` | `#181A20` |
| Disabled | `#474D57` | `#707A8A` |

### Input Fields

| State | Border | Background |
|-------|--------|------------|
| Normal | `#2B3139` | `#1E2329` |
| Focused | `#F0B90B` | `#1E2329` |
| Error | `#F6465D` | `#1E2329` |

### Tabs

| State | Indicator | Text |
|-------|-----------|------|
| Active | 2dp Yellow underline | Bold White |
| Inactive | None | Grey |

---

## 10. Data Display Formats

### Price Formats

| Element | Format | Example |
|---------|--------|---------|
| Balance | ₹XX,XXX.XX | ₹15,291.23 |
| PNL | +₹XXX.XX (+X.XX%) | +₹124.47 (+0.85%) |
| Crypto Price | ₹X,XXX.XX | ₹5,821.43 |

### Timestamp Formats

| Context | Format |
|---------|--------|
| Announcements | YYYY-MM-DD HH:MM:SS |
| Social Posts | Relative (2h ago, Yesterday) |
| News | Date + Read time |

---

## Notes

1. The Exchange Home Page serves as the primary landing screen after authentication.
2. All price data should update in real-time via WebSocket connections.
3. The 8-tab Discover feed provides social trading features and news aggregation.
4. Portfolio balances display in the user's selected fiat currency (INR in this specification).
5. Privacy mode toggle hides sensitive balance information with asterisks.
6. The FAB (Floating Action Button) provides quick access to trading or posting.
7. Market overview shows top assets (BTC, ETH, BNB, SOL) with sparkline charts.
8. Quick actions include P2P Trading and Send Cash services.
9. Hot tab features sentiment polls and trending topics.
10. Academy tab provides educational content with difficulty levels.
