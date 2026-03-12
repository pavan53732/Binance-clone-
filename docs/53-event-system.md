# Event System Extraction

This specification tracks real-time data flow inside the UI, covering WebSockets, LiveData, and custom EventBus streams to ensure components react synchronously to the backend state loops.

## 1. WebSocket Streams
- **Market Tickers**: `wss://fstream.binance.com/ws`
- **Order Books**: `depth@100ms`
- **User Payload**: Account updates

## 2. Shared App State
- `LiveData` repositories managing UI refresh constraints.
