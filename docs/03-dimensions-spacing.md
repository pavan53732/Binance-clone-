# Binance UI/UX Knowledge Base - Dimensions & Spacing

## Overview

This document catalogs all dimension values, spacing standards, and sizing conventions used in the Binance Android app.

---

## Spacing System

### SNS Spacing Scale

The Binance app uses a consistent spacing scale with semantic naming:

| Name | Value | Usage |
|------|-------|-------|
| `sns_margin_tiny` | 4dp | Minimal spacing |
| `sns_margin_tiny_plus` | 6dp | Extra small spacing |
| `sns_margin_small` | 8dp | Small spacing |
| `sns_margin_small_plus` | 12dp | Medium-small spacing |
| `sns_margin_medium` | 16dp | Standard spacing |
| `sns_margin_medium_plus` | 24dp | Large spacing |
| `sns_margin_large` | 32dp | Extra large spacing |
| `sns_margin_huge` | 64dp | Maximum spacing |

### XML Definitions

```xml
<dimen name="sns_margin_tiny">4.0dip</dimen>
<dimen name="sns_margin_tiny_plus">6.0dip</dimen>
<dimen name="sns_margin_small">8.0dip</dimen>
<dimen name="sns_margin_small_plus">12.0dip</dimen>
<dimen name="sns_margin_medium">16.0dip</dimen>
<dimen name="sns_margin_medium_plus">24.0dip</dimen>
<dimen name="sns_margin_large">32.0dip</dimen>
<dimen name="sns_margin_huge">64.0dip</dimen>
```

---

## Component Dimensions

### Icon Sizes

| Name | Value | Usage |
|------|-------|-------|
| `sns_icon_size_small` | 24dp | Small icons, toolbar icons |
| `sns_icon_size_medium` | 32dp | Medium icons |
| `sns_icon_size_normal` | 48dp | Standard icons |
| `sns_icon_size_normal_large` | 56dp | Large icons |
| `sns_icon_size_large` | 112dp | Feature icons, empty states |
| `sns_icon_size_huge` | 172dp | Hero icons |

```xml
<dimen name="sns_icon_size_small">24.0dip</dimen>
<dimen name="sns_icon_size_medium">32.0dip</dimen>
<dimen name="sns_icon_size_normal">48.0dip</dimen>
<dimen name="sns_icon_size_normal_large">56.0dip</dimen>
<dimen name="sns_icon_size_large">112.0dip</dimen>
<dimen name="sns_icon_size_huge">172.0dip</dimen>
```

### Button Dimensions

| Name | Value | Usage |
|------|-------|-------|
| `sns_min_button_size` | 48dp | Minimum touch target |
| `sns_normal_button_size` | 56dp | Standard button height |
| `sns_btn_info` | 40dp | Info button size |
| `sns_btn_take_picture` | 72dp | Camera button size |

```xml
<dimen name="sns_min_button_size">48.0dip</dimen>
<dimen name="sns_normal_button_size">56.0dip</dimen>
<dimen name="sns_btn_info">40.0dip</dimen>
<dimen name="sns_btn_take_picture">72.0dip</dimen>
```

### Progress Bar Sizes

| Name | Value | Usage |
|------|-------|-------|
| `sns_progress_bar_size_small` | 32dp | Small progress indicator |
| `sns_progress_bar_size_medium` | 48dp | Medium progress indicator |
| `sns_progress_bar_size_large` | 56dp | Large progress indicator |

```xml
<dimen name="sns_progress_bar_size_small">32.0dip</dimen>
<dimen name="sns_progress_bar_size_medium">48.0dip</dimen>
<dimen name="sns_progress_bar_size_large">56.0dip</dimen>
```

---

## Corner Radius

### Standard Corner Radius

| Name | Value | Usage |
|------|-------|-------|
| `sns_bottom_sheet_corner_radius` | 12dp | Bottom sheets |
| `sns_agreement_card_corner_radius` | 8dp | Cards, dialogs |
| `sns_file_attachment_corner_radius` | 8dp | File attachments |
| `sns_file_attachment_preview_corner_radius` | 4dp | Preview thumbnails |
| `sns_id_banner_corner_radius` | 8dp | ID banners |
| `sns_state_frame_radius` | 4dp | State frames |

```xml
<dimen name="sns_bottom_sheet_corner_radius">12.0dip</dimen>
<dimen name="sns_agreement_card_corner_radius">8.0dip</dimen>
<dimen name="sns_file_attachment_corner_radius">8.0dip</dimen>
<dimen name="sns_file_attachment_preview_corner_radius">4.0dip</dimen>
<dimen name="sns_id_banner_corner_radius">8.0dip</dimen>
<dimen name="sns_state_frame_radius">4.0dip</dimen>
```

---

## Stroke Width

| Name | Value | Usage |
|------|-------|-------|
| `sns_agreement_card_stroke_width` | 1dp | Card borders |
| `sns_frame_stroke_width` | 2dp | Frame borders |
| `sns_frame_corners_width` | 4dp | Corner accents |
| `sns_viewport_border_width` | 4dp | Camera viewport |

```xml
<dimen name="sns_agreement_card_stroke_width">1.0dip</dimen>
<dimen name="sns_frame_stroke_width">2.0dip</dimen>
<dimen name="sns_frame_corners_width">4.0dip</dimen>
<dimen name="sns_viewport_border_width">4.0dip</dimen>
```

---

## Component Heights

### Bar Heights

| Component | Height |
|-----------|--------|
| Title Bar | 44dp |
| Bottom Bar | 43dp |
| Action Bar | 56dp |
| Dialog Item | 50dp |

```xml
<dimen name="title_bar_height">44.0dip</dimen>
<dimen name="bottom_bar_height">43.0dip</dimen>
<dimen name="2131165853">56.0dip</dimen>
<dimen name="dialog_item_height">50.0dip</dimen>
```

### Input Field Heights

| Component | Height |
|-----------|--------|
| Standard Input | 48dp |
| Large Input | 56dp |
| Checkbox Min Height | 44dp |
| RadioButton Min Height | 44dp |

```xml
<dimen name="sns_checkbox_min_height">44.0dip</dimen>
<dimen name="sns_radiobutton_min_height">44.0dip</dimen>
<dimen name="2131165860">48.0dip</dimen>
<dimen name="2131165853">56.0dip</dimen>
```

---

## Padding Standards

### Standard Padding Values

| Value | Usage |
|-------|-------|
| 4dp | Tight padding |
| 8dp | Small padding |
| 12dp | Medium padding |
| 16dp | Standard padding |
| 24dp | Large padding |

### Component-Specific Padding

```xml
<dimen name="sns_checkbox_top_bottom_padding">6.0dip</dimen>
<dimen name="sns_radiobutton_top_bottom_padding">6.0dip</dimen>
<dimen name="sns_image_button_padding">12.0dip</dimen>
<dimen name="sns_pin_view_item_padding">4.0dip</dimen>
<dimen name="sns_bottom_sheet_top_padding">16.0dip</dimen>
```

---

## Common Dimensions

### Screen-Related

| Name | Value | Usage |
|------|-------|-------|
| Standard Width | 320dp | Dialog width |
| Large Width | 720dp | Tablet layouts |
| Dialog Min Width | 65% | Minimum dialog width |

```xml
<dimen name="2131165873">720.0dip</dimen>
<dimen name="2131165874">320.0dip</dimen>
<item type="dimen" name="2131165885">65.0%</item>
```

### Image Dimensions

| Name | Value | Usage |
|------|-------|-------|
| Center Image Size | 286dp | Splash/loading images |
| Load Image Width | 264dp | Loading images |
| Load Image Height | 285dp | Loading images |
| EID Image Size | 190dp | ID verification images |
| ID Image Size | 44dp | ID card icons |
| ID Flag Size | 16dp | Country flags |

```xml
<dimen name="center_img_size">286.0dip</dimen>
<dimen name="load_img_width">264.0dip</dimen>
<dimen name="load_img_height">285.0dip</dimen>
<dimen name="sns_eid_image_size">190.0dip</dimen>
<dimen name="sns_id_image_size">44.0dip</dimen>
<dimen name="sns_id_flag_size">16.0dip</dimen>
```

---

## Spacing Reference Table

### Horizontal Spacing (Margins/Padding)

| Use Case | Recommended Value |
|----------|-------------------|
| Screen edge margin | 16dp |
| Card internal padding | 16dp |
| Between related elements | 8dp |
| Between unrelated elements | 16dp |
| List item horizontal padding | 16dp |
| Button horizontal padding | 16dp |

### Vertical Spacing

| Use Case | Recommended Value |
|----------|-------------------|
| Section spacing | 24dp |
| Between form fields | 16dp |
| List item vertical padding | 12dp |
| Card vertical padding | 16dp |
| Header to content | 16dp |

---

## Grid System

### Column Guidelines

- **Phone Portrait**: Single column with 16dp margins
- **Phone Landscape**: Two columns with 16dp margins
- **Tablet**: Multiple columns based on width

### Breakpoints

| Breakpoint | Width | Columns |
|------------|-------|---------|
| Small | < 600dp | 4 |
| Medium | 600-840dp | 8 |
| Large | > 840dp | 12 |

---

## Touch Target Sizes

### Minimum Touch Targets

Following Material Design guidelines:

| Element | Minimum Size |
|---------|--------------|
| Buttons | 48dp × 48dp |
| Icons (clickable) | 48dp × 48dp |
| List items | 48dp height minimum |
| Input fields | 48dp height |

### Actual Implementation

```xml
<dimen name="sns_min_button_size">48.0dip</dimen>
<dimen name="2131165901">48.0dip</dimen>
<dimen name="2131165860">48.0dip</dimen>
```

---

## Special Dimensions

### Camera/Scanner Related

```xml
<dimen name="sns_frame_corners_size">24.0dip</dimen>
<dimen name="sns_frame_stroke_interval">6.0dip</dimen>
<dimen name="sns_autocapture_hint_min_height">52.0dip</dimen>
<dimen name="sns_autocapture_switch_min_height">50.0dip</dimen>
<dimen name="sns_collapsed_intro_height">160.0dip</dimen>
```

### Progress Indicators

```xml
<dimen name="progress_width">6.0dip</dimen>
<dimen name="liveness_progress_maxsize">64.0dip</dimen>
<dimen name="liveness_progress_minsize">25.0dip</dimen>
```

### Toast/Notification

```xml
<dimen name="agree_toast_height">44.0dip</dimen>
<dimen name="agree_toast_width">188.0dip</dimen>
```

---

## Dimension Categories

### By Value Range

| Range | Values | Usage |
|-------|--------|-------|
| 0-4dp | 0.5dp, 1dp, 2dp, 3dp, 4dp | Borders, dividers, tiny spacing |
| 4-8dp | 4dp, 5dp, 6dp, 8dp | Small spacing, padding |
| 8-16dp | 10dp, 12dp, 14dp, 15dp, 16dp | Standard spacing, padding |
| 16-32dp | 18dp, 20dp, 22dp, 24dp, 28dp, 30dp, 32dp | Large spacing, margins |
| 32-64dp | 36dp, 40dp, 44dp, 48dp, 52dp, 56dp, 60dp, 64dp | Component heights |
| 64dp+ | 72dp, 80dp, 96dp, 112dp, 172dp, etc. | Large components, images |

---

## Responsive Considerations

### Density-Independent Pixels (dp)

All dimensions use `dp` (density-independent pixels) to ensure consistent sizing across devices:

```xml
<dimen name="example">16.0dip</dimen>
```

### Scale-Independent Pixels (sp)

Text sizes use `sp` (scale-independent pixels) to respect user's font size preferences:

```xml
<dimen name="text_size">14.0sp</dimen>
```

### Percentage-Based Dimensions

Some dimensions use percentages for responsive layouts:

```xml
<item type="dimen" name="2131165885">65.0%</item>
<item type="dimen" name="2131165886">95.00001%</item>
```

---

## Notes

1. Most dimensions use the `dip` suffix (same as `dp`)
2. Text sizes use `sp` for accessibility
3. The SNS design system provides semantic naming for dimensions
4. Touch targets follow Material Design minimum of 48dp
5. Corner radius values are consistent: 4dp (small), 8dp (medium), 12dp (large)
6. The spacing scale follows an 8dp grid system
