---
name: binance-identity
description: Enforce global identity and tech stack rules for the Binance project
---

# Binance Global Identity Rules

## 1. Naming & Identity
- **Application Name:** Strictly "Binance".
- **Package Name:** `com.binance.android`.
- **Icon:** Use official Binance logo resources.

## 2. Forbidden Vocabulary
- **STRICT PROHIBITION:** Do NOT use the following words in any UI text, labels, buttons, toasts, notifications, or user-facing logs:
    - `demo`, `simulated`, `mock`, `fake`, `test`, `prototype`, `clone`, `dummy`.
- If a data source is simulated, the UI must present it as "Real" or "Live".

## 3. Technical Stack
- **Language:** Kotlin 2.2.0.
- **JDK:** 21.
- **Gradle:** 8.7 (Kotlin DSL).
- **UI:** Jetpack Compose with Material 3.
- **Min SDK:** 24.

## 4. Design Source of Truth
- Always refer to the `docs/` folder for specifications:
    - `01-colors-theme.md` for exact hex codes.
    - `02-typography.md` for font styles.
    - `05-components.md` for UI patterns.
