# 33. Typography System

This document documents the typography system extracted from the Binance APK resources.

## Font Family

The Binance app uses custom font families defined in the APK:

| Font Reference | Font Family | Usage |
|----------------|-------------|-------|
| `@font/2131296277` | sans-serif-medium | Body text, labels |
| `@font/2131296278` | sans-serif | Headings, titles |
| `@font/2131296267` | sans-serif-light | Light weight text |
| `@font/2131296265` | sans-serif-condensed | Condensed text |
| `@font/2131296261` | Custom | Special elements |

## Display Typography

Large display text for hero sections and major headlines:

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Display 1 | `96sp` | Normal | - | Very large numbers (prices) |
| Display 2 | `60sp` | Normal | - | Large prices |
| Display 3 | `48sp` | Normal | - | Price displays |
| Display 4 | `34sp` | Normal | - | Hero text |
| Display 5 | `57sp` | Normal | - | Special displays |
| Display 6 | `45sp` | Normal | - | Special displays |

## Headline Typography

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Headline 1 | `36sp` | Normal | - | Screen titles |
| Headline 2 | `32sp` | Normal | - | Section headers |
| Headline 3 | `28sp` | Normal | - | Subsection headers |
| Headline 4 | `24sp` | Bold | - | Card titles |
| Headline 5 | `22sp` | Bold | - | Card titles |
| Headline 6 | `20sp` | Bold | - | List item titles |

## Title Typography

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Title Large | `22sp` | Bold | Dialog titles |
| Title Medium | `18sp` | Bold | Card headers |
| Title Small | `14sp` | Bold | Subsection headers |

## Body Typography

| Style | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| Body Large | `16sp` | Normal | 24sp | Primary content |
| Body Medium | `14sp` | Normal | 20sp | Secondary content |
| Body Small | `12sp` | Normal | 16sp | Tertiary content, captions |

## Label Typography

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Label Large | `14sp` | Medium | Button text |
| Label Medium | `12sp` | Medium | Tab labels |
| Label Small | `11sp` | Medium | Small labels |

## Button Typography

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Button Large | `16sp` | Bold | Primary buttons |
| Button Medium | `14sp` | Bold | Secondary buttons |
| Button Small | `12sp` | Bold | Small buttons |
| Button Text | `14sp` | Normal | Text buttons |

## Caption Typography

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Caption 1 | `12sp` | Normal | Captions, timestamps |
| Caption 2 | `11sp` | Normal | Fine print, hints |
| Caption 3 | `10sp` | Normal | Small captions |

## Price Typography

Special styles for cryptocurrency prices:

| Style | Size | Weight | Color | Usage |
|-------|------|--------|-------|-------|
| Price Large | `40sp` | Bold | Primary text | Main price display |
| Price Medium | `28sp` | Normal | Primary text | Secondary prices |
| Price Small | `20sp` | Normal | Secondary text | Small prices |
| Price Change Positive | `14sp` | Bold | Success green | Positive changes |
| Price Change Negative | `14sp` | Bold | Error red | Negative changes |

## Tab Typography

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Tab Active | `14sp` | Medium | Active tab |
| Tab Inactive | `14sp` | Normal | Inactive tab |

## Input Typography

| Style | Size | Weight | Usage |
|-------|------|--------|-------|
| Input Text | `16sp` | Normal | Input field text |
| Input Hint | `16sp` | Normal | Placeholder text |
| Input Error | `14sp` | Normal | Error messages |

## Text Styles Summary

### Font Sizes (sp)

| Size | Value | Usage |
|------|-------|-------|
| XXS | `8sp` | Rarely used |
| XS | `10sp` | Tiny labels |
| S | `11sp` | Captions |
| M | `12sp` | Body small, captions |
| L | `14sp` | Body, buttons |
| XL | `16sp` | Body large, inputs |
| XXL | `18sp` | Titles medium |
| XXXL | `20sp` | Titles large |
| 2XL | `22sp` | Headlines |
| 3XL | `24sp` | Headlines |
| 4XL | `28sp` | Display |
| 5XL | `32sp` | Display |
| 6XL | `36sp` | Display |
| 7XL | `40sp` | Price display |
| 8XL | `48sp` | Large display |
| 9XL | `56sp` | Large display |
| 10XL | `60sp` | Extra large |
| 11XL | `96sp` | Hero prices |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Thin | 100 | Rarely used |
| Light | 300 | Subtle text |
| Normal | 400 | Body text |
| Medium | 500 | Labels |
| Semi-Bold | 600 | Buttons |
| Bold | 700 | Headlines |
| Extra Bold | 800 | Emphasis |

## Line Heights

| Style | Line Height | Usage |
|-------|-------------|-------|
| Tight | 1.0 | Headlines |
| Normal | 1.25 | Body |
| Relaxed | 1.5 | Long text |
| Loose | 1.75 | Accessibility |

## Text Colors by Context

| Context | Light Mode | Dark Mode |
|---------|------------|-----------|
| Primary Text | `#1E2329` | `#EAECEF` |
| Secondary Text | `#707A8A` | `#848E9C` |
| Tertiary Text | `#929AA5` | `#707A8A` |
| Disabled Text | `#B7BDC6` | `#4F5867` |
| Inverse Text | `#FFFFFF` | `#202630` |

## Letter Spacing

| Style | Letter Spacing | Usage |
|-------|----------------|-------|
| Tight | -0.5sp | Large headlines |
| Normal | 0sp | Body text |
| Wide | 0.5sp | Small caps |
| Wider | 1.0sp | Buttons |

---

*Source: binance-decompiled/res/values/styles.xml*
