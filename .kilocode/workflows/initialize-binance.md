# Initialize Binance Project Structure

Triggered by: `/initialize-binance`

## Description
This workflow sets up the foundational Android project structure for the Binance app, ensuring all naming conventions and tech stack requirements from `WORKSPACE_RULES.md` are met.

## Steps
1. **Verify Environment**: Confirm JDK 21 and Kotlin 2.2.0 compatibility.
2. **Create Project Files**:
    - Initialize `settings.gradle.kts` with rootProject.name = "Binance".
    - Create root `build.gradle.kts` with specified plugins.
    - Create `app/build.gradle.kts` with Compose, Room, and Hilt dependencies.
3. **Setup Package Structure**: Create `com.binance.android` directory structure.
4. **Theme Initialization**: Implement `Theme.kt` using exact hex codes from `docs/01-colors-theme.md`.
5. **No-Demo Audit**: Scan all strings to ensure zero forbidden words exist.
