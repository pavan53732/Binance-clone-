# Binance UI/UX Knowledge Base - Typography

## Overview

This document catalogs the typography system used in the Binance Android app, including font families, text sizes, and text styles.

---

## Font Families

### Primary Fonts

The Binance app uses system fonts with specific weight variations:

| Font Family         | Usage                        |
| ------------------- | ---------------------------- |
| `sans-serif`        | Default body text            |
| `sans-serif-medium` | Headings, emphasized text    |
| `sans-serif-bold`   | Strong emphasis, titles      |
| `@font/2131296281`  | Custom font reference        |
| `@font/2131296282`  | Custom font reference (bold) |

### Font Style Definitions

```xml
<style name="2132148258">
    <item name="android:textSize">12.0sp</item>
    <item name="android:fontFamily">@font/2131296281</item>
</style>

<style name="2132148274">
    <item name="android:textSize">20.0sp</item>
    <item name="android:fontFamily">@font/2131296282</item>
</style>
```

---

## Text Sizes

### Standard Text Sizes (sp)

| Size Name         | Value  | Usage                    |
| ----------------- | ------ | ------------------------ |
| Text Extra Small  | `10sp` | Captions, timestamps     |
| Text Small        | `12sp` | Secondary text, labels   |
| Text Small Medium | `13sp` | Tertiary text            |
| Text Medium       | `14sp` | Body text, default       |
| Text Medium Large | `15sp` | Emphasized body          |
| Text Large        | `16sp` | Primary body, inputs     |
| Text Large Medium | `18sp` | Subheadings              |
| Text Extra Large  | `20sp` | Headings                 |
| Text Title        | `24sp` | Screen titles            |
| Text Large Title  | `26sp` | Large titles             |
| Text Display      | `28sp` | Display text             |
| Text Hero         | `32sp` | Hero text, large numbers |
| Text Extra Hero   | `34sp` | Extra large display      |

### XML Definitions

```xml
<!-- From dimens.xml -->
<dimen name="2131167811">10.0sp</dimen>
<dimen name="2131167812">11.0sp</dimen>
<dimen name="2131167813">12.0sp</dimen>
<dimen name="2131167814">13.0sp</dimen>
<dimen name="2131167815">14.0sp</dimen>
<dimen name="2131167816">15.0sp</dimen>
<dimen name="2131167817">16.0sp</dimen>
<dimen name="2131167819">18.0sp</dimen>
<dimen name="2131167821">20.0sp</dimen>
<dimen name="2131167825">24.0sp</dimen>
<dimen name="2131100664">26.0sp</dimen>
<dimen name="2131167828">28.0sp</dimen>
<dimen name="2131167830">32.0sp</dimen>
<dimen name="2131167831">34.0sp</dimen>
```

### Additional Text Sizes

```xml
<dimen name="bottom_bar_textsize">10.0sp</dimen>
<dimen name="dialog_text_size">17.0sp</dimen>
<dimen name="dialog_content_text_size">13.0sp</dimen>
<dimen name="title_bar_textsize">18.0sp</dimen>
<dimen name="detect_tips_text_size">20.0sp</dimen>
<dimen name="tips_text_size">20.0sp</dimen>
<dimen name="text_loading_page_title_size">26.0sp</dimen>
<dimen name="image_desc_text_size">18.0sp</dimen>
<dimen name="image_desc_text_size_middle">14.0sp</dimen>
<dimen name="image_desc_text_size_small">12.5sp</dimen>
<dimen name="agree_toast_text_size">16.0sp</dimen>
<dimen name="user_agree_text_size">12.0sp</dimen>
```

---

## Text Styles

### Material Design Text Appearances

The app extends Material Design text appearance styles:

```xml
<style name="2132148299" parent="@android:style/TextAppearance.Material" />
<style name="2132148300" parent="@android:style/TextAppearance.Material.Body1" />
<style name="2132148301" parent="@android:style/TextAppearance.Material.Body2" />
<style name="2132148302" parent="@android:style/TextAppearance.Material.Button" />
<style name="2132148303" parent="@android:style/TextAppearance.Material.Caption" />
<style name="2132148304" parent="@android:style/TextAppearance.Material.Display1" />
<style name="2132148305" parent="@android:style/TextAppearance.Material.Display2" />
<style name="2132148306" parent="@android:style/TextAppearance.Material.Display3" />
<style name="2132148307" parent="@android:style/TextAppearance.Material.Display4" />
<style name="2132148308" parent="@android:style/TextAppearance.Material.Headline" />
<style name="2132148314" parent="@android:style/TextAppearance.Material.Medium" />
<style name="2132148322" parent="@android:style/TextAppearance.Material.Subhead" />
<style name="2132148324" parent="@android:style/TextAppearance.Material.Title" />
```

### Custom Text Styles

#### Button Text Style

```xml
<style name="2132148345" parent="@style/2132149262">
    <item name="android:textSize">@dimen/2131167108</item> <!-- 10sp -->
    <item name="android:textStyle">bold</item>
    <item name="android:textColor">?2130969070</item>
    <item name="android:textAllCaps">false</item>
    <item name="android:fontFamily">sans-serif-medium</item>
    <item name="android:letterSpacing">0.08928572</item>
    <item name="2130969512">sans-serif-medium</item>
</style>
```

#### Caption Text Style

```xml
<style name="2132148339" parent="@style/2132149262">
    <item name="android:textSize">@dimen/2131165925</item> <!-- 14sp -->
    <item name="android:textColor">?android:textColorSecondary</item>
    <item name="android:fontFamily">sans-serif-medium</item>
</style>
```

#### Title Styles

```xml
<!-- Large Title -->
<style name="2132148347" parent="@style/2132149288">
    <item name="android:textSize">20.0sp</item>
    <item name="android:textStyle">bold</item>
    <item name="android:textAllCaps">false</item>
    <item name="android:fontFamily">sans-serif-medium</item>
    <item name="android:letterSpacing">0.0125</item>
</style>

<!-- Medium Title -->
<style name="2132148348" parent="@style/2132149286">
    <item name="android:textSize">14.0sp</item>
    <item name="android:textStyle">bold</item>
    <item name="android:textAllCaps">false</item>
    <item name="android:fontFamily">sans-serif-medium</item>
    <item name="android:letterSpacing">0.007142857</item>
</style>

<!-- Uppercase Title -->
<style name="2132148346" parent="@style/2132149265">
    <item name="android:textSize">14.0sp</item>
    <item name="android:textStyle">bold</item>
    <item name="android:textAllCaps">true</item>
    <item name="android:fontFamily">sans-serif-medium</item>
    <item name="android:letterSpacing">0.08928572</item>
</style>
```

---

## Typography Scale

### Heading Styles

| Style Name   | Size | Weight | Letter Spacing | Usage                    |
| ------------ | ---- | ------ | -------------- | ------------------------ |
| Display      | 32sp | Bold   | -              | Large numbers, hero text |
| Title Large  | 24sp | Medium | -              | Screen titles            |
| Title Medium | 20sp | Bold   | 0.0125         | Section headers          |
| Title Small  | 18sp | Medium | -              | Card titles              |
| Subheading   | 16sp | Medium | -              | Subsections              |

### Body Styles

| Style Name  | Size | Weight  | Usage                              |
| ----------- | ---- | ------- | ---------------------------------- |
| Body Large  | 16sp | Regular | Primary body text                  |
| Body Medium | 14sp | Regular | Secondary body text                |
| Body Small  | 12sp | Regular | Tertiary text, captions            |
| Caption     | 10sp | Regular | Labels, timestamps, Network Badges |

### Interactive Text Styles

| Style Name    | Size | Weight | Usage             |
| ------------- | ---- | ------ | ----------------- |
| Button Large  | 16sp | Medium | Primary buttons   |
| Button Medium | 14sp | Bold   | Secondary buttons |
| Button Small  | 12sp | Bold   | Tertiary buttons  |
| Link          | 14sp | Medium | Hyperlinks        |

---

## Letter Spacing

The app uses specific letter spacing values for different text styles:

| Style           | Letter Spacing | Value |
| --------------- | -------------- | ----- |
| Button Text     | 0.08928572     | ~8.9% |
| Large Title     | 0.0125         | 1.25% |
| Medium Title    | 0.007142857    | ~0.7% |
| Uppercase Title | 0.08928572     | ~8.9% |

---

## Text Colors by Context

### Primary Text Colors

| Context                   | Color      | Hex Value   |
| ------------------------- | ---------- | ----------- |
| Primary Text (Dark Theme) | White      | `#FFFFFFFF` |
| Secondary Text            | Gray       | `#FF848E9C` |
| Tertiary Text             | Light Gray | `#FFB7BDC6` |
| Disabled Text             | Muted Gray | `#FF707A8A` |

### Semantic Text Colors

| Context      | Color  | Hex Value   |
| ------------ | ------ | ----------- |
| Profit Text  | Green  | `#FF2EBD85` |
| Loss Text    | Red    | `#FFF6465D` |
| Link Text    | Blue   | `#FF1F8DF9` |
| Warning Text | Orange | `#FFDD7A2B` |

---

## Line Heights

Based on the styles analysis, the app follows Material Design guidelines for line heights:

| Text Size | Recommended Line Height |
| --------- | ----------------------- |
| 10sp      | 14sp                    |
| 12sp      | 16sp                    |
| 14sp      | 20sp                    |
| 16sp      | 24sp                    |
| 18sp      | 26sp                    |
| 20sp      | 28sp                    |
| 24sp      | 32sp                    |
| 32sp      | 40sp                    |

---

## Font Weights

The app uses the following font weights:

| Weight        | Usage                             |
| ------------- | --------------------------------- |
| Regular (400) | Body text, descriptions           |
| Medium (500)  | Subheadings, emphasized text      |
| Bold (700)    | Titles, buttons, important values |

---

## Typography Components

### Price Display

For displaying cryptocurrency prices, the app uses:

- **Large Price**: 24-32sp, Bold
- **Medium Price**: 18-20sp, Medium
- **Small Price**: 14-16sp, Regular

### Percentage Changes

- **Positive**: Green (`#FF2EBD85`), Bold
- **Negative**: Red (`#FFF6465D`), Bold
- **Size**: 12-14sp typically

### Balance/Amount Display

- **Large Balance**: 24-28sp, Bold
- **Medium Balance**: 18-20sp, Medium
- **Small Balance**: 14-16sp, Regular

---

## SNS Typography

The SNS design system includes typography definitions:

```xml
<style name="2132149384" parent="@style/2132149386">
    <!-- Base text appearance for SNS -->
</style>

<style name="2132149386" parent="@style/2132149385">
    <!-- Extended text appearance -->
</style>
```

### SNS Text Color References

```xml
<item name="2130969064">@color/sns_contentNeutral</item>
<item name="2130969065">@color/sns_contentCritical</item>
<item name="2130969067">@color/sns_contentStrong</item>
<item name="2130969070">@color/sns_contentCritical</item>
<item name="2130969081">@color/sns_contentStrong</item>
```

---

## Best Practices

1. **Use sp units for text sizes** - Ensures proper scaling with user's font size preferences
2. **Maintain consistent letter spacing** - Use the defined values for each text style
3. **Apply semantic colors** - Use profit/loss colors for financial data
4. **Follow the type scale** - Use the defined sizes for visual hierarchy
5. **Consider accessibility** - Minimum text size should be 12sp for readability

---

## Notes

1. Font files are referenced by obfuscated numeric IDs
2. The app uses system fonts (sans-serif variants) as the primary font family
3. Custom fonts may be loaded dynamically for specific features
4. Text styles inherit from Material Design base styles
5. Letter spacing is used primarily for uppercase and button text
