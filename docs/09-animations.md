# Binance UI/UX Knowledge Base - Animations

## Overview

This document catalogs the animation resources used in the Binance Android app, including view animations, object animators, transitions, and interpolators.

---

## Animation Directory Structure

| Directory | Purpose |
|-----------|---------|
| `anim/` | View animations (tween animations) |
| `anim-ldrtl/` | RTL-specific animations |
| `animator/` | Property animations (object animators) |
| `interpolator/` | Custom timing interpolators |
| `transition/` | Scene transitions |

---

## Animation Types

### 1. Fade Animations

**Fade In** (`onfido_fade_in.xml`):
```xml
<alpha 
    android:interpolator="@android:anim/linear_interpolator" 
    android:duration="200" 
    android:fromAlpha="0.5" 
    android:toAlpha="1.0" />
```

**Specifications**:
- Duration: 200ms
- From Alpha: 0.5 (semi-transparent)
- To Alpha: 1.0 (fully opaque)
- Interpolator: Linear

**Fade Out** (`onfido_fade_out.xml`):
```xml
<alpha 
    android:interpolator="@android:anim/linear_interpolator" 
    android:duration="200" 
    android:fromAlpha="1.0" 
    android:toAlpha="0.0" />
```

### 2. Slide Animations

**Slide In Right** (`onfido_slide_in_right.xml`):
```xml
<set>
    <translate 
        android:duration="@android:integer/config_mediumAnimTime" 
        android:fromXDelta="50.0%p" 
        android:toXDelta="0.0%" />
    <alpha 
        android:duration="@android:integer/config_mediumAnimTime" 
        android:fromAlpha="0.0" 
        android:toAlpha="1.0" />
</set>
```

**Specifications**:
- Duration: Medium animation time (~400ms)
- From X: 50% parent width (off-screen right)
- To X: 0% (on-screen)
- Combined with fade in

**Slide Out Left** (`onfido_slide_out_left.xml`):
```xml
<set>
    <translate 
        android:duration="@android:integer/config_mediumAnimTime" 
        android:fromXDelta="0.0%" 
        android:toXDelta="-50.0%p" />
    <alpha 
        android:duration="@android:integer/config_mediumAnimTime" 
        android:fromAlpha="1.0" 
        android:toAlpha="0.0" />
</set>
```

### 3. Path Morphing Animations

**Checkbox Animation** (`2130771999.xml`):
```xml
<set>
    <objectAnimator 
        android:interpolator="@interpolator/2131558403" 
        android:duration="166" 
        android:valueFrom="M -7.0,-7.0 l 14.0,0.0 c 0.0,0.0 0.0,0.0 0.0,0.0 l 0.0,14.0 c 0.0,0.0 0.0,0.0 0.0,0.0 l -14.0,0.0 c 0.0,0.0 0.0,0.0 0.0,0.0 l 0.0,-14.0 c 0.0,0.0 0.0,0.0 0.0,0.0 Z M 7.0,-9.0 c 0.0,0.0 -14.0,0.0 -14.0,0.0 c -1.1044921875,0.0 -2.0,0.8955078125 -2.0,2.0 c 0.0,0.0 0.0,14.0 0.0,14.0 c 0.0,1.1044921875 0.8955078125,2.0 2.0,2.0 c 0.0,0.0 14.0,0.0 14.0,0.0 c 1.1044921875,0.0 2.0,-0.8955078125 2.0,-2.0 c 0.0,0.0 0.0,-14.0 0.0,-14.0 c 0.0,-1.1044921875 -0.8955078125,-2.0 -2.0,-2.0 c 0.0,0.0 0.0,0.0 0.0,0.0 Z" 
        android:valueTo="M 0.0,-0.05 l 0.0,0.0 c 0.02761423749,0.0 0.05,0.02238576251 0.05,0.05 l 0.0,0.0 c 0.0,0.02761423749 -0.02238576251,0.05 -0.05,0.05 l 0.0,0.0 c -0.02761423749,0.0 -0.05,-0.02238576251 -0.05,-0.05 l 0.0,0.0 c 0.0,-0.02761423749 0.02238576251,-0.05 0.05,-0.05 Z M 7.0,-9.0 c 0.0,0.0 -14.0,0.0 -14.0,0.0 c -1.1044921875,0.0 -2.0,0.8955078125 -2.0,2.0 c 0.0,0.0 0.0,14.0 0.0,14.0 c 0.0,1.1044921875 0.8955078125,2.0 2.0,2.0 c 0.0,0.0 14.0,0.0 14.0,0.0 c 1.1044921875,0.0 2.0,-0.8955078125 2.0,-2.0 c 0.0,0.0 0.0,-14.0 0.0,-14.0 c 0.0,-1.1044921875 -0.8955078125,-2.0 -2.0,-2.0 c 0.0,0.0 0.0,0.0 0.0,0.0 Z" 
        android:valueType="pathType" 
        android:propertyName="pathData" />
    <set android:ordering="sequentially">
        <objectAnimator 
            android:interpolator="@android:interpolator/linear" 
            android:duration="166" 
            android:valueFrom="1.0" 
            android:valueTo="1.0" 
            android:propertyName="fillAlpha" />
        <objectAnimator 
            android:interpolator="@interpolator/2131558402" 
            android:duration="33" 
            android:valueFrom="1.0" 
            android:valueTo="0.0" 
            android:propertyName="fillAlpha" />
    </set>
</set>
```

**Specifications**:
- Duration: 166ms (main morph) + 33ms (fade)
- Property: pathData (SVG path morphing)
- Used for: Checkbox checked/unchecked animation

**Checkmark Animation** (`2130772000.xml`):
```xml
<set>
    <set android:ordering="sequentially">
        <objectAnimator 
            android:duration="200" 
            android:valueFrom="..." 
            android:valueTo="..." 
            android:valueType="pathType" 
            android:propertyName="pathData" />
        <objectAnimator 
            android:duration="300" 
            android:valueFrom="..." 
            android:valueTo="..." 
            android:valueType="pathType" 
            android:propertyName="pathData" />
    </set>
    <set android:ordering="sequentially">
        <objectAnimator 
            android:duration="166" 
            android:valueFrom="0.0" 
            android:valueTo="0.0" 
            android:propertyName="fillAlpha" />
        <objectAnimator 
            android:duration="33" 
            android:valueFrom="0.0" 
            android:valueTo="1.0" 
            android:propertyName="fillAlpha" />
    </set>
</set>
```

**Specifications**:
- Total Duration: 500ms (200ms + 300ms)
- Animates checkmark drawing
- Combined with alpha fade in

---

## Animation Statistics

### By File Count

| Category | Count |
|----------|-------|
| Total Animation Files | ~150+ |
| Object Animator Sets | ~50 |
| Simple Animations | ~60 |
| Complex Path Animations | ~20 |
| Third-Party (Onfido) | 4 |

### By Duration

| Duration | Usage |
|----------|-------|
| 33ms | Quick fade transitions |
| 166ms | Standard UI transitions |
| 200ms | Fade in/out |
| 300ms | Path morphing |
| 400ms | Medium animations |
| 500ms | Complex animations |

---

## Common Animation Patterns

### 1. Sequential Animations

```xml
<set android:ordering="sequentially">
    <objectAnimator android:duration="166" ... />
    <objectAnimator android:duration="33" ... />
</set>
```

Used for:
- Checkbox state changes
- Icon transformations
- Progress indicators

### 2. Parallel Animations

```xml
<set>
    <translate android:duration="400" ... />
    <alpha android:duration="400" ... />
</set>
```

Used for:
- Screen transitions
- Modal appearances
- List item animations

### 3. Path Morphing

```xml
<objectAnimator 
    android:valueType="pathType" 
    android:propertyName="pathData" 
    android:valueFrom="M 0,0..." 
    android:valueTo="M 10,10..." />
```

Used for:
- Icon state changes
- Checkbox animations
- Progress indicators

---

## Interpolators

### Custom Interpolators

Located in `interpolator/` directory:

| File | Purpose |
|------|---------|
| `2131558402.xml` | Fast-out interpolation |
| `2131558403.xml` | Standard easing |

### Standard Interpolators

| Interpolator | Usage |
|--------------|-------|
| `@android:interpolator/linear` | Constant speed |
| `@android:anim/linear_interpolator` | Linear timing |
| `@android:anim/decelerate_interpolator` | Fast start, slow end |
| `@android:anim/accelerate_interpolator` | Slow start, fast end |

---

## Transition Animations

### Scene Transitions

Located in `transition/` directory for:
- Fragment transitions
- Activity transitions
- Shared element transitions

### Common Transitions

| Type | Usage |
|------|-------|
| Fade | Dialog appearance |
| Slide | Navigation between screens |
| Explode | List item removal |
| ChangeBounds | Layout changes |

---

## Progress Animations

### Progress Circle Shape

**File**: `progress_circle_shape.xml`

Used for:
- Loading indicators
- Progress bars
- Refresh animations

---

## Animation Best Practices

### Observed Patterns

1. **Short Durations**: Most animations are 166-300ms for responsive feel
2. **Sequential Ordering**: Complex animations use sequential sets
3. **Alpha Combinations**: Path animations often combined with alpha
4. **Path Morphing**: SVG path interpolation for smooth icon changes
5. **Standard Timing**: Uses Android standard timing constants

### Performance Considerations

- Hardware layer enabled during animations
- Path morphing uses optimized vector operations
- Alpha animations are GPU-accelerated
- Short durations prevent UI jank

---

## Third-Party Animations

### Onfido SDK

| File | Purpose |
|------|---------|
| `onfido_fade_in.xml` | View fade in |
| `onfido_fade_out.xml` | View fade out |
| `onfido_slide_in_right.xml` | Screen entry |
| `onfido_slide_out_left.xml` | Screen exit |

---

## RTL Animation Support

### RTL-Specific Animations

Located in `anim-ldrtl/`:
- Mirrored slide animations
- Direction-aware transitions

### RTL Considerations

- Slide directions are reversed
- Progress indicators may flip
- Navigation animations mirror

---

## Usage in Code

### Starting Animations

```kotlin
// Load animation
val animation = AnimationUtils.loadAnimation(context, R.anim.fade_in)
view.startAnimation(animation)

// Object animator
val animator = AnimatorInflater.loadAnimator(context, R.animator.scale)
animator.setTarget(view)
animator.start()
```

### Animation Listeners

```kotlin
animation.setAnimationListener(object : Animation.AnimationListener {
    override fun onAnimationStart(animation: Animation?) { }
    override fun onAnimationEnd(animation: Animation?) { }
    override fun onAnimationRepeat(animation: Animation?) { }
})
```

---

## Notes

1. Most animation files use obfuscated numeric names
2. Path morphing animations are used extensively for icons
3. Standard durations follow Material Design guidelines
4. RTL support includes mirrored animations
5. Third-party SDKs include their own animation resources
6. Complex animations combine multiple techniques
7. Hardware acceleration is utilized for smooth performance