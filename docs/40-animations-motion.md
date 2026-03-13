# 40-Animations and Motion

## Overview

This document catalogs the animation resources and motion patterns in the Binance APK. The app uses a combination of Android animation APIs and Flutter animations for UI motion.

## Animation Resources

### Statistics

| Category | Count | Location |
|----------|-------|----------|
| Animation (anim) | 150+ XML | `res/anim/` |
| Animator | 40+ XML | `res/animator/` |
| Lottie | Multiple | `assets/flutter_assets/packages/*/res/lottie/` |

## Animation Types

### 1. Tween Animations (res/anim/)

**Fade Animations:**
```xml
<alpha xmlns:android="http://schemas.android.com/apk/res/android"
    android:duration="300"
    android:fromAlpha="0.0"
    android:toAlpha="1.0"
    android:interpolator="@android:anim/decelerate_interpolator"/>
```

**Slide Animations:**
```xml
<translate xmlns:android="http://schemas.android.com/apk/res/android"
    android:duration="300"
    android:fromXDelta="100%"
    android:toXDelta="0%"
    android:interpolator="@android:anim/decelerate_interpolator"/>
```

**Scale Animations:**
```xml
<scale xmlns:android="http://schemas.android.com/apk/res/android"
    android:duration="300"
    android:fromXScale="0.8"
    android:toXScale="1.0"
    android:fromYScale="0.8"
    android:toYScale="1.0"
    android:pivotX="50%"
    android:pivotY="50%"/>
```

### 2. Property Animations (res/animator/)

**Object Animator:**
```xml
<objectAnimator xmlns:android="http://schemas.android.com/apk/res/android"
    android:propertyName="translationY"
    android:duration="200"
    android:valueFrom="0"
    android:valueTo="50"/>
```

**Property Values:**
```xml
<propertyValuesHolder xmlns:android="http://schemas.android.com/apk/res/android"
    android:propertyName="scaleX"
    android:valueType="floatType"
    android:valueFrom="1.0"
    android:valueTo="0.95"/>
```

### 3. Animation Sets

**Combined Animations:**
```xml
<set xmlns:android="http://schemas.android.com/apk/res/android"
    android:interpolator="@android:anim/accelerate_decelerate_interpolator">
    <alpha android:fromAlpha="0.0" android:toAlpha="1.0"/>
    <scale android:fromXScale="0.8" android:toXScale="1.0"/>
</set>
```

## Common Animation Patterns

### Screen Transitions

| Animation | Duration | Use Case |
|----------|----------|----------|
| Fade In | 300ms | Content appearance |
| Fade Out | 200ms | Content dismissal |
| Slide In Right | 300ms | Forward navigation |
| Slide Out Left | 250ms | Back navigation |
| Slide In Up | 300ms | Bottom sheets |
| Slide Out Down | 250ms | Dismiss bottom sheets |

### Micro-interactions

| Interaction | Animation | Duration |
|------------|-----------|----------|
| Button Press | Scale to 0.95 | 100ms |
| Button Release | Scale to 1.0 | 100ms |
| List Item Tap | Ripple + highlight | 200ms |
| Pull to Refresh | Spinner rotation | Continuous |
| Swipe Delete | Slide + fade | 300ms |

### Loading States

| Animation | Type | Duration |
|-----------|------|----------|
| Progress Spinner | Rotation | Infinite |
| Skeleton Pulse | Alpha fade | 1500ms loop |
| Shimmer Effect | Gradient sweep | 2000ms loop |

## Key Animation Resources

### Onfido SDK Animations

| Animation | File | Description |
|-----------|------|-------------|
| Fade In | `onfido_fade_in.xml` | Screen transition |
| Fade Out | `onfido_fade_out.xml` | Screen transition |
| Slide In Right | `onfido_slide_in_right.xml` | Forward flow |
| Slide Out Left | `onfido_slide_out_left.xml` | Back navigation |

### Interpolators

| Interpolator | Behavior |
|---------------|----------|
| `@android:anim/accelerate_interpolator` | Start slow, end fast |
| `@android:anim/decelerate_interpolator` | Start fast, end slow |
| `@android:anim/accelerate_decelerate_interpolator` | Slow start/end, fast middle |
| `@android:anim/overshoot_interpolator` | Bounce at end |
| `@android:anim/linear_interpolator` | Constant speed |

## Flutter Animations

### Widget Animations

```dart
// Implicit Animations
AnimatedContainer(
  duration: Duration(milliseconds: 300),
  width: isExpanded ? 200 : 100,
);

AnimatedOpacity(
  duration: Duration(milliseconds: 300),
  opacity: isVisible ? 1.0 : 0.0,
);
```

### Custom Animations

```dart
// Explicit Animation
AnimationController(
  duration: Duration(milliseconds: 300),
  vsync: this,
);

CurvedAnimation(
  parent: controller,
  curve: Curves.easeInOut,
);
```

### Lottie Animations

Located in Flutter assets:
```
flutter_assets/packages/*/res/lottie/
├── loading_spinner.json
├── success_check.json
├── error_x.json
├── confetti.json
└── empty_state.json
```

## Transition Patterns

### Fragment Transitions

```java
getFragmentManager()
    .beginTransaction()
    .setCustomAnimations(
        R.anim.fade_in,      // enter
        R.anim.fade_out,     // exit
        R.anim.fade_in,      // popEnter
        R.anim.fade_out      // popExit
    )
    .replace(R.id.container, fragment)
    .commit();
```

### Activity Transitions

```java
// Shared element transition
ActivityOptions options = ActivityOptions
    .makeSceneTransitionAnimation(activity, sharedView, "transition");
startActivity(intent, options.toBundle());

// Fade transition
overridePendingTransition(R.anim.fade_in, R.anim.fade_out);
```

## Animation Properties

### Duration Guidelines

| Type | Duration | Feel |
|------|----------|------|
| Instant | <100ms | Immediate |
| Fast | 150-200ms | Snappy |
| Normal | 250-350ms | Natural |
| Slow | 400-500ms | Elegant |

### Easing Curves

| Curve | Use Case |
|-------|----------|
| `Curves.easeIn` | Outgoing elements |
| `Curves.easeOut` | Incoming elements |
| `Curves.easeInOut` | Mid-screen elements |
| `Curves.easeOutCubic` | Natural movement |
| `Curves.elasticOut` | Bouncy effects |

## Source Resources

- **Tween Animations**: `binance-decompiled/res/anim/`
- **Property Animators**: `binance-decompiled/res/animator/`
- **Lottie JSON**: `binance-decompiled/assets/flutter_assets/packages/*/res/lottie/`
- **Interpolators**: `binance-decompiled/res/interpolator/`

## Implementation Notes

1. **Performance**: Use `hardwareLayer` for complex animations
2. **Battery**: Minimize continuous animations
3. **Reduced Motion**: Respect `Window.preferReducedMotion` accessibility setting
4. **Flutter First**: Use Flutter's animation widgets for main UI
5. **Native Fallback**: Use Android anim for system dialogs and transitions
6. **Lottie**: Use for complex branded animations (loaders, success states)
