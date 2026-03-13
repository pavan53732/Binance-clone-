# Real-time Data Updates

## Overview

The Real-time Data Updates system provides users with live market data, order updates, and notifications through WebSocket connections and polling mechanisms. This is a critical feature for trading operations under the `com.prometheus.account` package.

## Update Mechanisms

### 1. WebSocket Connections
- Persistent connections for real-time data
- Automatic reconnection
- Heartbeat mechanism

### 2. HTTP Polling
- Fallback for WebSocket failures
- Configurable intervals
- Battery-efficient

### 3. Push Notifications
- Firebase Cloud Messaging (FCM)
- Silent background updates
- Urgent alerts

## Component Structure

### WebSocket Connection Flow

```
┌─────────────────────────────────────────┐
│         WebSocket Manager                │
├─────────────────────────────────────────┤
│                                         │
│  Market Data WS ─────────────────────►  │
│  wss://stream.binance.com:9443          │
│                                         │
│  Order Updates WS ──────────────────►   │
│  wss://api.binance.com/ws               │
│                                         │
│  User Data WS ───────────────────────►  │
│  wss://api.binance.com/ws               │
│                                         │
└─────────────────────────────────────────┘
```

### WebSocket Failure Screen (`2131627615`)

```
┌─────────────────────────────────────────┐
│                                         │
│  Markets WebSocket Failure               │
│                                         │
│  Connection lost. Tap to retry.         │
│                                         │
│         [Refresh Icon]                  │
│                                         │
└─────────────────────────────────────────┘
```

**String Resources:**
- `markets_websocket_failure` - WebSocket error message

## WebSocket Endpoints

### Market Streams
```
wss://stream.binance.com:9443/ws/<symbol>@ticker
wss://stream.binance.com:9443/ws/<symbol>@depth
wss://stream.binance.com:9443/ws/<symbol>@trade
wss://stream.binance.com:9443/ws/!miniTicker@arr
```

### User Data Stream
```
wss://api.binance.com/ws/<listenKey>
```

### Combined Streams
```
wss://stream.binance.com:9443/stream?streams=<streams>
```

## Real-time Data Types

### 1. Price Updates
- 24h ticker
- Real-time price
- Price change
- High/Low

### 2. Order Book
- Bid/Ask levels
- Depth visualization
- Order book changes

### 3. Trade Updates
- Recent trades
- Trade history
- Aggregrated trades

### 4. Order Updates
- Order status
- Fill updates
- Cancel confirmations

### 5. Account Updates
- Balance changes
- Position updates
- Transaction history

### 6. Notification Push
- Security alerts
- Price alerts
- Order fills

## Connection Management

### WebSocket Lifecycle

```
┌─────────────────────────────────────────┐
│              CONNECTING                  │
│         Initial handshake               │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│              CONNECTED                   │
│         Subscribing to streams          │
└──────────────────┬──────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────┐
│              LISTENING                   │
│         Receiving updates               │
└──────────────────┬──────────────────────┘
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
┌─────────────┐    ┌─────────────────┐
│   PING      │    │   RECONNECT     │
│  (30 sec)   │    │   (on error)    │
└─────────────┘    └─────────────────┘
```

### Heartbeat Mechanism
- Ping every 30 seconds
- Pong expected within 10 seconds
- Auto-reconnect on timeout

### Reconnection Strategy
- Immediate reconnect on disconnect
- Exponential backoff: 1s, 2s, 4s, 8s...
- Max retry: 5 attempts
- Fallback to polling

## Data Update Intervals

### Price Updates
- WebSocket: Real-time (ms)
- Polling: 5 seconds (fallback)

### Order Book
- WebSocket: Real-time
- Polling: 1 second

### Order Status
- WebSocket: Real-time
- Polling: 3 seconds

### Balance Updates
- WebSocket: Real-time
- Polling: 10 seconds

## User Notifications

### Push Notification Types

1. **Security Alerts**
   - New login
   - Password change
   - 2FA change

2. **Trading Notifications**
   - Order filled
   - Order cancelled
   - Liquidation warning
   - Price alert triggered

3. **Account Notifications**
   - Deposit confirmed
   - Withdrawal processed
   - KYC status update

### Notification Flow
```
Server Event → FCM → Device → User
                    │
              ┌─────┴─────┐
              ▼           ▼
         Foreground   Background
            │           │
            ▼           ▼
       In-App        System
       Notification  Tray
```

## Error Handling

### Connection Errors
- Automatic reconnection
- User notification after 3 failures
- Manual retry option

### Data Errors
- Ignore malformed data
- Log errors silently
- Use last known state

### Timeout Handling
- Request timeout: 10 seconds
- Connection timeout: 5 seconds
- Retry on timeout

## Battery Optimization

### Background Restrictions
- Reduce update frequency when backgrounded
- Batch updates
- Use WorkManager for periodic sync

### Foreground Service
- Trading active: Full updates
- Tab inactive: Reduced updates
- Background: Minimal updates

## Implementation Details

### WebSocket Library
- OkHttp WebSocket
- Custom connection manager
- Auto-reconnection logic

### Data Caching
- In-memory cache for recent data
- Persistent cache for offline access
- Cache invalidation on updates

### State Management
- LiveData for UI updates
- Flow for reactive streams
- StateFlow for connection state

## Performance Considerations

### Update Throttling
- Prevent UI overload
- Batch rapid updates
- Debounce user inputs

### Memory Management
- Limit cached data size
- Clear old data periodically
- Weak references for callbacks

### Network Efficiency
- Compress large payloads
- Use binary protocols where possible
- Minimize connection overhead

## Related Files

- Layout: `2131627615.xml` - WebSocket error
- Strings: `markets_websocket_failure`
- Strings: `c2c_mob_exads_refresh`
- Component: `WebSocketManager` - Connection manager
- Component: `FCMService` - Push notifications
