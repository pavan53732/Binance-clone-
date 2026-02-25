# Sync Binance Account Data

Triggered by: `/sync-account-data`

## Description
Ensures the application's local data matches the strict financial requirements defined in `WORKSPACE_RULES.md`.

## Steps
1. **Balance Check**: Set USDT balance to exactly `1,780,189.50` in `AccountDataManager`.
2. **Zero Assets**: Verify all other asset balances are set to `0.00000000`.
3. **Transaction Generation**: 
    - Invoke the `account-setup` skill.
    - Generate 120 authentic transaction records.
    - Seed the Room database with these records.
4. **Validation**: Print a summary of the account state to the console for user verification.
