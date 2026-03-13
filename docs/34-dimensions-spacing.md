# 34. Dimensions and Spacing

This document documents the dimension and spacing values extracted from the Binance APK resources.

## Spacing System

The Binance app uses a consistent spacing system based on 4dp increments:

| Name | Value | Usage |
|------|-------|-------|
| `spacing_xxs` | `2dp` | Minimal spacing |
| `spacing_xs` | `4dp` | Tight spacing |
| `spacing_s` | `6dp` | Small spacing |
| `spacing_m` | `8dp` | Default spacing |
| `spacing_l` | `12dp` | Medium spacing |
| `spacing_xl` | `16dp` | Large spacing |
| `spacing_xxl` | `20dp` | Extra large spacing |
| `spacing_xxxl` | `24dp` | Section spacing |
| `spacing_4xl` | `32dp` | Major sections |
| `spacing_5xl` | `40dp` | Large gaps |
| `spacing_6xl` | `48dp` | Screen padding top/bottom |
| `spacing_7xl` | `56dp` | Hero spacing |

## Common Spacing Values

### Base Spacing (from dimens.xml)

| Dimension | Value | Usage |
|-----------|-------|-------|
| `spacing_tiny` | `4dp` | Between related elements |
| `spacing_tiny_plus` | `6dp` | Slightly larger tiny |
| `spacing_small` | `8dp` | Default small gap |
| `spacing_small_plus` | `12dp` | Medium-small gap |
| `spacing_medium` | `16dp` | Standard spacing |
| `spacing_medium_plus` | `24dp` | Medium-large gap |
| `spacing_large` | `32dp` | Section spacing |
| `spacing_huge` | `64dp` | Major sections |

### SNS Spacing System

| Name | Value | Usage |
|------|-------|-------|
| `sns_margin_tiny` | `4dp` | Minimal margin |
| `sns_margin_small` | `8dp` | Small margin |
| `sns_margin_medium` | `16dp` | Standard margin |
| `sns_margin_medium_plus` | `24dp` | Large margin |
| `sns_margin_large` | `32dp` | Extra large margin |
| `sns_margin_huge` | `64dp` | Major margins |

## Screen Dimensions

### Screen Margins

| Name | Value | Usage |
|------|-------|-------|
| `activity_horizontal_margin` | `1dp` | Edge margin |
| `activity_vertical_margin` | `5dp` | Top/bottom margin |
| Screen horizontal padding | `16dp` | Standard screen padding |
| Screen safe area | Dynamic | Status bar, nav bar |

### Content Widths

| Name | Value | Usage |
|------|-------|-------|
| Content max width | `360dp` | Maximum content width |
| Content centered | Center | Centered content |
| Full width | Match parent | Full width elements |

## Component Sizes

### Button Sizes

| Name | Value | Usage |
|------|-------|-------|
| Button height large | `48dp` | Primary buttons |
| Button height medium | `40dp` | Secondary buttons |
| Button height small | `32dp` | Small buttons |
| Button height tiny | `24dp` | Compact buttons |
| Button min width | `88dp` | Minimum button width |
| Button corner radius | `8dp` | Button corners |

### Icon Sizes

| Name | Value | Usage |
|------|-------|-------|
| Icon size tiny | `16dp` | Inline icons |
| Icon size small | `20dp` | List icons |
| Icon size medium | `24dp` | Standard icons |
| Icon size large | `32dp` | Feature icons |
| Icon size xlarge | `48dp` | Hero icons |
| Icon size xxlarge | `56dp` | Large icons |

### SNS Icon Sizes

| Name | Value | Usage |
|------|-------|-------|
| `sns_icon_size_small` | `24dp` | Small icons |
| `sns_icon_size_normal` | `48dp` | Standard icons |
| `sns_icon_size_medium` | `32dp` | Medium icons |
| `sns_icon_size_normal_large` | `56dp` | Large normal icons |
| `sns_icon_size_large` | `112dp` | Large feature icons |
| `sns_icon_size_huge` | `172dp` | Hero icons |

### Input Field Sizes

| Name | Value | Usage |
|------|-------|-------|
| Input height | `48dp` | Standard input |
| Input height large | `56dp` | Large input |
| Input padding horizontal | `16dp` | Input horizontal padding |
| Input padding vertical | `12dp` | Input vertical padding |
| Input corner radius | `8dp` | Input corners |

## Card Dimensions

| Name | Value | Usage |
|------|-------|-------|
| Card corner radius | `12dp` | Card corners |
| Card elevation | `2dp` | Card shadow |
| Card padding | `16dp` | Card internal padding |
| Card margin | `8dp` | Card external margin |

## List Item Dimensions

| Name | Value | Usage |
|------|-------|-------|
| List item height | `56dp` | Standard list item |
| List item height small | `48dp` | Compact list item |
| List item height large | `72dp` | Large list item |
| List item padding | `16dp` | Internal padding |
| List divider height | `1dp` | Divider thickness |
| List section header height | `40dp` | Section headers |

## Navigation Bar

| Name | Value | Usage |
|------|-------|-------|
| Bottom nav height | `43dp` | Bottom navigation |
| Bottom nav icon size | `24dp` | Nav icons |
| Bottom nav text size | `10sp` | Nav labels |
| Tab bar height | `48dp` | Tab bar |
| Tab indicator height | `2dp` | Active indicator |

### Title Bar

| Name | Value | Usage |
|------|-------|-------|
| Title bar height | `44dp` | Standard title bar |
| Title bar text size | `18sp` | Title text |
| Title bar icon size | `24dp` | Back button |

## Progress & Loading

| Name | Value | Usage |
|------|-------|-------|
| Progress bar height | `4dp` | Linear progress |
| Progress bar large | `8dp` | Large progress |
| Progress circle size | `48dp` | Circular progress |
| Progress circle large | `64dp` | Large circle |
| Skeleton shimmer | `8dp` | Shimmer height |

### SNS Progress Bars

| Name | Value | Usage |
|------|-------|-------|
| `sns_progress_bar_size_small` | `32dp` | Small progress |
| `sns_progress_bar_size_medium` | `48dp` | Medium progress |
| `sns_progress_bar_size_large` | `56dp` | Large progress |

## Dialog & Modal

| Name | Value | Usage |
|------|-------|-------|
| Dialog corner radius | `16dp` | Dialog corners |
| Dialog padding | `24dp` | Dialog content padding |
| Dialog title margin | `20dp` | Title margin |
| Dialog button height | `50dp` | Dialog buttons |
| Bottom sheet corner radius | `12dp` | Bottom sheet |
| Bottom sheet top padding | `16dp` | Sheet handle area |

## Corner Radius

| Name | Value | Usage |
|------|-------|-------|
| Corner radius tiny | `4dp` | Small elements |
| Corner radius small | `8dp` | Buttons, chips |
| Corner radius medium | `12dp` | Cards |
| Corner radius large | `16dp` | Modals |
| Corner radius xlarge | `24dp` | Bottom sheets |
| Corner radius pill | `50dp` | Pill shapes |

### SNS Corner Radius

| Name | Value | Usage |
|------|-------|-------|
| `sns_bottom_sheet_corner_radius` | `12dp` | Bottom sheets |
| `sns_agreement_card_corner_radius` | `8dp` | Agreement cards |
| `sns_file_attachment_corner_radius` | `8dp` | File attachments |
| `sns_id_banner_corner_radius` | `8dp` | ID banners |
| `sns_state_frame_radius` | `4dp` | Frame states |

## Elevation

| Name | Value | Usage |
|------|-------|-------|
| Elevation flat | `0dp` | No shadow |
| Elevation low | `1dp` | Cards |
| Elevation medium | `2dp` | Floating elements |
| Elevation high | `4dp` | Modals |
| Elevation very high | `8dp` | Navigation drawers |

## Touch Targets

| Name | Value | Usage |
|------|-------|-------|
| Touch target minimum | `48dp` | Minimum touch area |
| Touch target recommended | `56dp` | Recommended touch |
| Button touch target | `48dp` | Button touch area |
| Checkbox/Radio size | `44dp` | Interactive controls |
| `sns_min_button_size` | `48dp` | SNS minimum button |
| `sns_normal_button_size` | `56dp` | SNS normal button |

### SNS Checkbox/Radio

| Name | Value | Usage |
|------|-------|-------|
| `sns_checkbox_min_height` | `44dp` | Checkbox height |
| `sns_checkbox_top_bottom_padding` | `6dp` | Checkbox padding |
| `sns_radiobutton_min_height` | `44dp` | Radio button height |
| `sns_radiobutton_top_bottom_padding` | `6dp` | Radio padding |

## Special Dimensions

### Image Dimensions

| Name | Value | Usage |
|------|-------|-------|
| Center image size | `286dp` | Centered images |
| Load image width | `264dp` | Loading images |
| Load image height | `285dp` | Loading images |

### Liveness/Face Auth

| Name | Value | Usage |
|------|-------|-------|
| `liveness_progress_maxsize` | `64dp` | Max progress |
| `liveness_progress_minsize` | `25dp` | Min progress |
| `sns_eid_image_size` | `190dp` | EID image |
| `sns_id_image_size` | `44dp` | ID image |

### Agreement Card

| Name | Value | Usage |
|------|-------|-------|
| `agree_toast_width` | `188dp` | Toast width |
| `agree_toast_height` | `44dp` | Toast height |
| `sns_agreement_card_stroke_width` | `1dp` | Card border |

---

*Source: binance-decompiled/res/values/dimens.xml*
