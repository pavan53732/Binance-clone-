# Apply Binance Production UI

Triggered by: `/apply-binance-ui`

## Description
Audits and updates the current UI component to ensure 100% visual parity with the production Binance app using extracted assets and documentation.

## Steps
1. **Reference Documentation**: Read `docs/01-colors-theme.md` and `docs/02-typography.md`.
2. **Layout Analysis**: Examine the most relevant XML layout in `binance-apktool-decoded/res/layout/` for the target feature.
3. **Component Audit**:
    - Ensure all buttons use the exact Binance Yellow (`#FFF0B90B`).
    - Verify all text uses the official typography scales.
    - Check that "buy" actions are Green (`#FF2EBD85`) and "sell" are Red (`#FFF6465D`).
4. **No-Demo Check**: Ensure no component placeholders contain words like "Mock" or "Test".
5. **Animation Sync**: Apply transition styles from `docs/09-animations.md`.
