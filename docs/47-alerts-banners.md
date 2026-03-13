# Alerts and Banners

## Overview

Alerts and banners are used to communicate information, warnings, errors, and success messages to users throughout the Binance app.

## Alert Types

### 1. Toast

**Usage:** Brief feedback messages that appear and disappear automatically.

**Visual Specifications:**
- Background: `#323232` (Dark gray)
- Text Color: `#FFFFFF`
- Corner Radius: `8dp`
- Padding: `16dp` horizontal, `12dp` vertical
- Max Width: `344dp`
- Icon (optional): 20dp, left-aligned
- Duration: 2-3 seconds

**Position:**
- Bottom of screen (above navigation)
- Centered horizontally
- Margin: `16dp` from edges and bottom

**Variants:**
- Simple text toast
- Toast with icon
- Toast with action button

### 2. Snackbar

**Usage:** Messages that require user acknowledgment or action.

**Visual Specifications:**
- Background: `#323232`
- Text Color: `#FFFFFF`
- Corner Radius: `8dp`
- Padding: `16dp` horizontal, `14dp` vertical
- Elevation: `6dp`
- Action Button: `#F0B90B` (Binance Yellow)

**Position:**
- Bottom of screen
- Above bottom navigation
- Full width with margin

**Components:**
- Message text (required)
- Action button (optional)
- Duration: 4 seconds (long) / 2 seconds (short)

**Variants:**
- Single-line snackbar
- Multi-line snackbar (max 2 lines)
- Snackbar with action

### 3. Inline Alert

**Usage:** Persistent messages within content areas.

**Visual Specifications:**
- Background: Based on type (see below)
- Corner Radius: `8dp`
- Padding: `12dp`
- Icon: 20dp, left-aligned
- Close button: Optional

**Types:**
| Type | Background | Icon Color | Border |
|------|------------|------------|--------|
| Info | `#E3F2FD` | `#1F8DF9` | None |
| Success | `#E8F5E9` | `#00A650` | None |
| Warning | |FFF3E0` | `#F5A623` | None |
| Error | `#FFEBEE` | `#F6465D` | None |

**Usage Examples:**
- Form validation errors
- Status messages
- Feature announcements

### 4. Banner

**Usage:** Important messages that persist until dismissed.

**Visual Specifications:**
- Full width
- Height: Auto (min 48dp)
- Background: Based on type
- Icon: 24dp
- Text: 14sp
- Close button: 24dp
- Padding: `16dp`

**Types:**
- Information banner
- Warning banner
- Success banner
- Error banner
- Promotional banner

**Position:**
- Top of screen (below app bar)
- Pushes content down (in-content)
- Overlays content (overlay)

## Alert States

### Information
- Icon: Info circle
- Color: `#1F8DF9`
- Usage: General information, tips

### Success
- Icon: Checkmark
- Color: `#00A650`
- Usage: Operation completed, verified

### Warning
- Icon: Warning triangle
- Color: `#F5A623`
- Usage: Attention needed, potential issues

### Error
- Icon: Error/X circle
- Color: `#F6465D`
- Usage: Errors, failures, critical issues

## Interactive Behaviors

### Toast Display
- Fade in: 200ms
- Display: 2-3 seconds
- Fade out: 200ms

### Snackbar Display
- Slide up: 250ms ease-out
- Display: 2-4 seconds
- Slide down: 200ms ease-in

### Banner Display
- Fade in: 300ms
- Stays until dismissed
- Swipe to dismiss (optional)

### Action Handling
- Tap action button: Execute action
- Tap outside: Dismiss (snackbar only)
- Swipe: Dismiss

## Implementation Reference

**Components:**
- `Toast` (system)
- `Snackbar` (Material)
- Custom view for inline alerts
- Custom view for banners

**Key Attributes:**
- Duration
- Message
- Action label + callback
- Dismiss policy

**Dimensions:**
- Toast max width: 344dp
- Snackbar elevation: 6dp
- Alert corner radius: 8dp
- Banner padding: 16dp

## Usage Scenarios

### Network Error
```
[WiFi Off Icon] 
No internet connection
[Retry]
```

### Form Validation
```
[Warning Icon]
Please enter a valid email address
```

### Success Message
```
[Checkmark Icon]
Order placed successfully
```

### Promotional Banner
```
[Announcement Icon]
New feature: Try Web3 Wallet!
[Learn More] [X]
```

### Security Alert
```
[Shield Icon]
New login from iPhone in Delhi
[Review Activity] [Dismiss]
```

### Maintenance
```
[Clock Icon]
Scheduled maintenance in 2 hours
[Learn More]
```

## Accessibility

- Announce alerts to screen readers
- Minimum touch target: 48dp
- Color + icon for type indication
- Action button clearly accessible

## Best Practices

1. **Toast:** Use for non-critical, transient feedback
2. **Snackbar:** Use when user action may be needed
3. **Inline Alert:** Use for form validation, in-content messages
4. **Banner:** Use for critical, persistent messages

---

**Related Documentation:**
- [docs/29-error-handling-ui.md](docs/29-error-handling-ui.md) - Error handling
- [docs/32-colors-theme.md](docs/32-colors-theme.md) - Alert colors
- [docs/36-ui-components.md](docs/36-ui-components.md) - Component overview
