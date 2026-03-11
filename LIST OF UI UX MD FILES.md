# List of UI/UX MD Files - Binance Clone Project

## Overview

This document provides a complete index of all UI/UX documentation files in the Binance Clone project. These MD files contain detailed specifications for building the Binance Android application interface.

---

## Total UI/UX Documentation: 32 MD Files

### Design System Files (01-20)

| # | File Name | Description | Lines | Status |
|---|-----------|-------------|-------|--------|
| 1 | `01-colors-theme.md` | Color system and theming | 411 | |
| 2 | `02-typography.md` | Typography styles | 341 | |
| 3 | `03-dimensions-spacing.md` | Spacing and dimensions | 381 | |
| 4 | `04-screens-layouts.md` | Screen layouts | 328 | |
| 5 | `05-components.md` | UI components | 667 | |
| 6 | `06-navigation.md` | Navigation patterns | 426 | |
| 7 | `07-drawables-icons.md` | Icons/drawables | ~400 | |
| 8 | `08-strings-content.md` | String resources | ~400 | |
| 9 | `09-animations.md` | Animations | ~280 | |
| 10 | `10-complete-ui-specification.md` | UI summary | 482 | |
| 11 | `11-logo-icon-specifications.md` | Logo specs | ~350 | |
| 12 | `12-button-specifications.md` | Button specs | ~600 | |
| 13 | `13-screen-flows-navigation.md` | Screen flows | 681 | |
| 14 | `14-features-functions.md` | Features overview | 255 | |
| 15 | `15-transaction-history.md` | Transaction history | ~200 | |
| 16 | `16-swap-feature.md` | Swap feature | ~150 | |
| 17 | `17-input-fields.md` | Input fields | ~250 | |
| 18 | `18-cards-lists.md` | Cards/lists | ~300 | |
| 19 | `19-dialogs-bottom-sheets.md` | Dialogs | ~280 | |
| 20 | `20-complete-screen-catalog.md` | Screen catalog | 668 | |

---

## Exchange Interface (21-25) - CeFi

| # | File Name | Image Folder | Images | Status |
|---|-----------|--------------|--------|--------|
| 21 | `21-exchange-interface-homepage.md` | Exchange Home page | 9 | |
| 22 | `22-exchange-interface-markets.md` | Market page | 13 | |
| 23 | `23-exchange-interface-trade.md` | Trade page | 16 | |
| 24 | `24-exchange-interface-futures.md` | Futures page | 12 | |
| 25 | `25-exchange-interface-assets.md` | Assets page | 8 | |

---

## Web3 Wallet Interface (26-30) - DeFi

| # | File Name | Image Folder | Images | Status |
|---|-----------|--------------|--------|--------|
| 26 | `26-web3-interface-home.md` | Web3 Home | 5 | |
| 27 | `27-web3-interface-markets.md` | Web3 Markets | 8 | |
| 28 | `28-web3-interface-trade.md` | Web3 Trade | 3 | |
| 29 | `29-web3-interface-discover.md` | Web3 Discover | 5 | |
| 30 | `30-web3-interface-assets.md` | Web3 Assets | 3 | |

---

## Settings (50-51)

| # | File Name | Description | Status |
|---|-----------|-------------|--------|
| 50 | `50-settings-complete.md` | Settings | |
| 51 | `51-settings-flows.md` | Settings flows | |

---

## UI/UX Image Folders - Source of Truth

### Exchange (CeFi) - 5 Folders, 58 Images

| Folder Name | Images | MD File |
|-------------|--------|---------|
| `Exchange interface Home page exchange page with all pics_` | 9 | 21-exchange-interface-homepage.md |
| `Exchange interface market page with all pages in it_` | 13 | 22-exchange-interface-markets.md |
| `Exchange interface ui ux trade page and it_s componets_` | 16 | 23-exchange-interface-trade.md |
| `Exchange interface futures page with all compnets_` | 12 | 24-exchange-interface-futures.md |
| `Exchange interface full asset pages and it_s compnets_` | 8 | 25-exchange-interface-assets.md |

### Web3 Wallet (DeFi) - 5 Folders, 24 Images

| Folder Name | Images | MD File |
|-------------|--------|---------|
| `web 3 wallet interface home page_` | 5 | 26-web3-interface-home.md |
| `web 3 wallet interface ui ux for market page_` | 8 | 27-web3-interface-markets.md |
| `web 3 wallet interface trade pages_` | 3 | 28-web3-interface-trade.md |
| `web 3 wallet interface discovery pages_` | 5 | 29-web3-interface-discover.md |
| `web 3 wallet interface assets_` | 3 | 30-web3-interface-assets.md |

---

## MD Files Requiring Updates

Based on image analysis, the following files need updates:

### HIGH PRIORITY

| File | Issue | Details |
|------|-------|---------|
| `21-exchange-interface-homepage.md` | Missing components | Quick Actions (6-btn grid), Top Movers, Earn Section, Featured Section, Mobile Nav |
| `22-exchange-interface-markets.md` | Missing tabs | Need: Spot, Futures tabs + Chain filter + More columns |
| `06-navigation.md` | Wrong nav tabs | Mobile bottom nav shows: Markets, Trade, Futures, Wallet, Profile (NOT Home!) |

### MEDIUM PRIORITY

| File | Issue | Details |
|------|-------|---------|
| `14-features-functions.md` | Missing features | Quick Actions, Top Movers, Earn, Featured sections |
| `20-complete-screen-catalog.md` | Verify | Navigation tabs need verification |

---

## Files Needing Creation (Potential Expansions)

| Potential MD File | Description | Source Images |
|-------------------|-------------|---------------|
| `31-exchange-interface-convert.md` | Convert feature | Trade folder images |
| `32-exchange-interface-p2p.md` | P2P Trading | Trade folder images |
| `33-exchange-interface-margin.md` | Margin Trading | Trade folder images |
| `34-web3-interface-bridge.md` | Bridge feature | Web3 Trade folder |
| `35-web3-interface-meme-rush.md` | Meme Rush | Web3 Markets folder |

---

## Statistics Summary

| Category | Count |
|----------|-------|
| Design System Files | 20 |
| Exchange Interface (CeFi) | 5 |
| Web3 Wallet Interface (DeFi) | 5 |
| Settings | 2 |
| **TOTAL MD Files** | **32** |

| Image Statistics | Count |
|------------------|-------|
| Exchange Images | 58 |
| Web3 Images | 24 |
| **Total Images** | **82** |

---

## Quick Reference by Category

### Design & Styling
```
01-colors-theme.md
02-typography.md
03-dimensions-spacing.md
10-complete-ui-specification.md
11-logo-icon-specifications.md
```

### Components & UI
```
05-components.md
07-drawables-icons.md
17-input-fields.md
18-cards-lists.md
19-dialogs-bottom-sheets.md
```

### Exchange (CeFi)
```
21-exchange-interface-homepage.md
22-exchange-interface-markets.md
23-exchange-interface-trade.md
24-exchange-interface-futures.md
25-exchange-interface-assets.md
```

### Web3 Wallet (DeFi)
```
26-web3-interface-home.md
27-web3-interface-markets.md
28-web3-interface-trade.md
29-web3-interface-discover.md
30-web3-interface-assets.md
```

---

## Notes

1. All files are located in the `/docs` directory
2. Files are numbered for easy reference and sorting
3. Status indicators removed for cleaner documentation
4. 82 total UI/UX images across 10 folders serve as source of truth
5. Additional MD files may be created for sub-features if needed

---

## Update History

| Date | Description |
|------|-------------|
| 2026-03-12 | Initial file created with complete list of 32 MD files |
| 2026-03-12 | Added status indicators and update requirements |

---

*End of File*
